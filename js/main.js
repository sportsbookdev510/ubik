(() => {
  const BUY = "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0xComingSoon";
  const CA = "0xComingsoon";

  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const toast = document.getElementById("toast");
  const glow = document.getElementById("cursorGlow");
  const copyBtn = document.getElementById("copyCa");

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });

  copyBtn?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(CA);
    } catch {
      const el = document.createElement("textarea");
      el.value = CA;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 1400);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  const mouse = { x: -9999, y: -9999 };
  const brainMouse = { x: -9999, y: -9999 };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.addEventListener("pointermove", (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    brainMouse.x = e.clientX;
    brainMouse.y = e.clientY;
  });

  function fit(canvas) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(1, rect.width);
    const h = Math.max(1, rect.height);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, w, h, dpr };
  }

  function inHead(x, y) {
    const skull = ((x - 0.12) / 0.72) ** 2 + ((y + 0.02) / 0.82) ** 2;
    if (skull > 1) return false;
    if (x < -0.42 && Math.abs(y) > 0.38) return false;
    if (y > 0.72 && Math.abs(x - 0.18) > 0.28) return false;
    return true;
  }

  const fieldCanvas = document.getElementById("field");
  const brainCanvas = document.getElementById("brain");

  const field = { nodes: [], sparks: [] };
  const brain = { nodes: [], sparks: [], links: [] };

  function seedField(w, h) {
    const count = Math.min(110, Math.floor((w * h) / 14000));
    field.nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: 1 + Math.random() * 1.6,
      phase: Math.random() * Math.PI * 2,
      fire: 0,
    }));
  }

  function seedBrain(w, h) {
    const cx = w * 0.54;
    const cy = h * 0.46;
    const scale = Math.min(w, h) * 0.42;
    const nodes = [];
    let guard = 0;
    while (nodes.length < 86 && guard < 4000) {
      guard += 1;
      const nx = Math.random() * 2 - 1;
      const ny = Math.random() * 2 - 1;
      if (!inHead(nx, ny)) continue;
      nodes.push({
        x: cx + nx * scale,
        y: cy + ny * scale,
        ox: cx + nx * scale,
        oy: cy + ny * scale,
        phase: Math.random() * Math.PI * 2,
        fire: Math.random(),
        r: 1.4 + Math.random() * 2.2,
      });
    }
    brain.nodes = nodes;
    brain.links = [];
    const maxDist = scale * 0.34;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.hypot(dx, dy);
        if (d < maxDist) brain.links.push({ a: i, b: j, d });
      }
    }
  }

  let fieldSize = { w: 0, h: 0 };
  let brainSize = { w: 0, h: 0 };

  function resize() {
    const f = fit(fieldCanvas);
    fieldSize = { w: f.w, h: f.h };
    seedField(f.w, f.h);
    const b = fit(brainCanvas);
    brainSize = { w: b.w, h: b.h };
    seedBrain(b.w, b.h);
  }

  window.addEventListener("resize", resize);
  resize();

  function spawnSpark(store, a, b) {
    store.push({
      ax: a.x,
      ay: a.y,
      bx: b.x,
      by: b.y,
      t: 0,
      speed: 0.018 + Math.random() * 0.03,
    });
  }

  function drawField(t) {
    const { ctx, w, h } = { ctx: fieldCanvas.getContext("2d"), ...fieldSize };
    ctx.clearRect(0, 0, w, h);
    const nodes = field.nodes;

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
      const dx = n.x - mouse.x;
      const dy = n.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 140) {
        n.fire = 1;
        n.x -= dx * 0.008;
        n.y -= dy * 0.008;
      }
      n.fire *= 0.94;
      n.phase += 0.02;
    }

    ctx.lineWidth = 0.7;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d > 130) continue;
        const alpha = (1 - d / 130) * 0.22;
        const hot = Math.max(a.fire, b.fire);
        ctx.strokeStyle = hot > 0.2
          ? `rgba(255, 45, 122, ${alpha + hot * 0.35})`
          : `rgba(0, 200, 5, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        if (!reduced && hot > 0.85 && Math.random() < 0.02) spawnSpark(field.sparks, a, b);
      }
    }

    for (const n of nodes) {
      const pulse = 0.45 + Math.sin(n.phase + t * 0.002) * 0.25;
      ctx.beginPath();
      ctx.fillStyle = n.fire > 0.15
        ? `rgba(255, 90, 150, ${0.45 + n.fire})`
        : `rgba(46, 196, 182, ${0.28 + pulse * 0.35})`;
      ctx.arc(n.x, n.y, n.r + n.fire * 2, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = field.sparks.length - 1; i >= 0; i--) {
      const s = field.sparks[i];
      s.t += s.speed;
      if (s.t >= 1) {
        field.sparks.splice(i, 1);
        continue;
      }
      const x = s.ax + (s.bx - s.ax) * s.t;
      const y = s.ay + (s.by - s.ay) * s.t;
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 220, 140, 0.95)";
      ctx.arc(x, y, 2.1, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawBrain(t) {
    const ctx = brainCanvas.getContext("2d");
    const { w, h } = brainSize;
    ctx.clearRect(0, 0, w, h);

    const rect = brainCanvas.getBoundingClientRect();
    const lx = brainMouse.x - rect.left;
    const ly = brainMouse.y - rect.top;
    const cx = w * 0.54;
    const cy = h * 0.46;

    const coreGrad = ctx.createRadialGradient(cx, cy, 8, cx, cy, 90);
    coreGrad.addColorStop(0, "rgba(255, 45, 122, 0.28)");
    coreGrad.addColorStop(0.45, "rgba(0, 200, 5, 0.08)");
    coreGrad.addColorStop(1, "transparent");
    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 96 + Math.sin(t * 0.002) * 8, 0, Math.PI * 2);
    ctx.fill();

    for (let i = 1; i <= 3; i++) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(212, 180, 90, ${0.18 - i * 0.03})`;
      ctx.lineWidth = 1;
      ctx.arc(cx, cy, 28 + i * 18 + Math.sin(t * 0.003 + i) * 3, 0, Math.PI * 2);
      ctx.stroke();
    }

    for (const n of brain.nodes) {
      n.x = n.ox + Math.sin(t * 0.0012 + n.phase) * 3.2;
      n.y = n.oy + Math.cos(t * 0.001 + n.phase) * 2.6;
      const md = Math.hypot(n.x - lx, n.y - ly);
      if (md < 90) n.fire = Math.min(1, n.fire + 0.12);
      if (Math.random() < 0.01) n.fire = 1;
      n.fire *= 0.96;
    }

    for (const link of brain.links) {
      const a = brain.nodes[link.a];
      const b = brain.nodes[link.b];
      const hot = Math.max(a.fire, b.fire);
      ctx.beginPath();
      ctx.strokeStyle = hot > 0.25
        ? `rgba(255, 45, 122, ${0.12 + hot * 0.55})`
        : `rgba(29, 143, 130, 0.22)`;
      ctx.lineWidth = hot > 0.4 ? 1.4 : 0.7;
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
      if (!reduced && hot > 0.9 && Math.random() < 0.04) spawnSpark(brain.sparks, a, b);
    }

    for (const n of brain.nodes) {
      ctx.beginPath();
      ctx.fillStyle = n.fire > 0.2 ? `rgba(255, 210, 120, ${0.55 + n.fire * 0.4})` : "rgba(46, 196, 182, 0.8)";
      ctx.arc(n.x, n.y, n.r + n.fire * 1.8, 0, Math.PI * 2);
      ctx.fill();
    }

    const rayCount = 16;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(t * 0.00025);
    for (let i = 0; i < rayCount; i++) {
      const ang = (Math.PI * 0.9) + (i / rayCount) * 0.85 - 0.4;
      ctx.strokeStyle = `rgba(255, 45, 122, ${0.08 + (i % 3) * 0.04})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(ang) * 150, Math.sin(ang) * 150);
      ctx.stroke();
    }
    ctx.restore();

    for (let i = brain.sparks.length - 1; i >= 0; i--) {
      const s = brain.sparks[i];
      s.t += s.speed;
      if (s.t >= 1) {
        brain.sparks.splice(i, 1);
        continue;
      }
      const x = s.ax + (s.bx - s.ax) * s.t;
      const y = s.ay + (s.by - s.ay) * s.t;
      ctx.beginPath();
      ctx.fillStyle = "#00c805";
      ctx.shadowColor = "#00c805";
      ctx.shadowBlur = 12;
      ctx.arc(x, y, 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  let last = 0;
  function frame(now) {
    if (!last) last = now;
    if (document.hidden) {
      requestAnimationFrame(frame);
      return;
    }
    drawField(now);
    drawBrain(now);
    requestAnimationFrame(frame);
  }

  if (!reduced) requestAnimationFrame(frame);
  else {
    drawField(0);
    drawBrain(0);
  }

  void BUY;
})();
