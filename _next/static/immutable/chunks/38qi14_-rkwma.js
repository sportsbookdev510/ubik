(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  43923,
  (e) => {
    "use strict";
    var t = e.i(88502),
      r = e.i(3453),
      n = e.i(39926);
    let i = [
      ["/#story", "Story"],
      ["/sanctuary", "Sanctuary"],
      ["/#ledger", "Ledger"],
      ["/#coin", "Coin"],
      ["/#faq", "Questions"],
      ["/memes", "Memes"],
      ["/press", "Press"],
      ["https://x.com/itsTigrino", "@itsTigrino"],
    ];
    e.s([
      "MobileNav",
      0,
      function () {
        let [e, a] = (0, n.useState)(!1);
        return (0, t.jsxs)("div", {
          className: "md:hidden",
          children: [
            (0, t.jsx)("button", {
              "aria-label": "Menu",
              onClick: () => a((e) => !e),
              className:
                "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sand",
              children: (0, t.jsxs)("div", {
                className: "space-y-1.5",
                children: [
                  (0, t.jsx)("span", {
                    className: `block h-0.5 w-4 bg-current transition ${
                      e ? "translate-y-2 rotate-45" : ""
                    }`,
                  }),
                  (0, t.jsx)("span", {
                    className: `block h-0.5 w-4 bg-current transition ${
                      e ? "opacity-0" : ""
                    }`,
                  }),
                  (0, t.jsx)("span", {
                    className: `block h-0.5 w-4 bg-current transition ${
                      e ? "-translate-y-2 -rotate-45" : ""
                    }`,
                  }),
                ],
              }),
            }),
            e &&
              (0, t.jsx)("div", {
                className:
                  "absolute inset-x-0 top-full border-b border-white/10 bg-background/95 backdrop-blur",
                children: (0, t.jsx)("div", {
                  className: "mx-auto grid max-w-5xl gap-1 px-5 py-4 text-lg",
                  children: i.map(([e, n]) =>
                    (0, t.jsx)(
                      r.default,
                      {
                        href: e,
                        onClick: () => a(!1),
                        className:
                          "serif rounded-lg px-3 py-2 text-sand hover:bg-white/5",
                        children: n,
                      },
                      e
                    )
                  ),
                }),
              }),
          ],
        });
      },
    ]);
  },
  93693,
  (e, t, r) => {
    t.exports = [
      { src: "/gallery/00.webp", w: 1200, h: 900, cap: "Bigger than the city" },
      { src: "/gallery/01.webp", w: 1200, h: 1200, cap: "Small but armed" },
      { src: "/gallery/02.webp", w: 848, h: 1200, cap: "His Meowjesty" },
      { src: "/gallery/03.webp", w: 1200, h: 1200, cap: "Galaxy brain" },
      { src: "/gallery/04.webp", w: 960, h: 1200, cap: "The real one" },
      { src: "/gallery/05.webp", w: 1200, h: 1200, cap: "Off to work" },
      { src: "/gallery/06.webp", w: 959, h: 1200, cap: "Ascended" },
      { src: "/gallery/07.webp", w: 1051, h: 1200, cap: "Fed" },
      { src: "/gallery/08.webp", w: 900, h: 1200, cap: "Thug life" },
      { src: "/gallery/09.webp", w: 1200, h: 800, cap: "Lock tf in" },
      { src: "/gallery/10.webp", w: 1200, h: 1200, cap: "Enlightened" },
      { src: "/gallery/11.webp", w: 1200, h: 1105, cap: "Comfy" },
      { src: "/gallery/12.webp", w: 1200, h: 1200, cap: "Cooking" },
      {
        src: "/gallery/13.webp",
        w: 1200,
        h: 1027,
        cap: "1.4M years of evolution",
      },
      { src: "/gallery/14.webp", w: 1200, h: 1200, cap: "Power level" },
      { src: "/gallery/15.webp", w: 1200, h: 1180, cap: "Sanctuary funding" },
      { src: "/gallery/16.webp", w: 1200, h: 1200, cap: "Monument" },
      { src: "/gallery/17.webp", w: 1200, h: 1200, cap: "First day of school" },
      {
        src: "/gallery/18.webp",
        w: 1132,
        h: 1200,
        cap: "Wanted: the only one",
      },
      { src: "/gallery/19.webp", w: 1200, h: 1200, cap: "Moon" },
      { src: "/gallery/20.webp", w: 1200, h: 1200, cap: "Checking the chart" },
      { src: "/gallery/21.webp", w: 1200, h: 1200, cap: "Drip" },
      { src: "/gallery/22.webp", w: 1007, h: 1200, cap: "Family" },
      { src: "/gallery/23.webp", w: 1200, h: 1200, cap: "Chat, is this real?" },
      { src: "/gallery/24.webp", w: 1200, h: 900, cap: "Incoming" },
      {
        src: "/gallery/25.webp",
        w: 1200,
        h: 1088,
        cap: "One species, many memes",
      },
      { src: "/gallery/26.webp", w: 1007, h: 1200, cap: "Peeking" },
      {
        src: "/gallery/27.webp",
        w: 1200,
        h: 1143,
        cap: "Pet him through the screen",
      },
      { src: "/gallery/28.webp", w: 1050, h: 1200, cap: "Hacker" },
      { src: "/gallery/29.webp", w: 1200, h: 1200, cap: "Gone fishing" },
      { src: "/gallery/30.webp", w: 1200, h: 841, cap: "Kaiju" },
    ];
  },
  81411,
  (e) => {
    "use strict";
    var t = e.i(88502),
      r = e.i(50245),
      n = e.i(39926);
    let i = e.i(93693).default;
    e.s([
      "Gallery",
      0,
      function () {
        let [e, a] = (0, n.useState)(null);
        return (
          (0, n.useEffect)(() => {
            if (null === e) return;
            let t = (e) => {
              "Escape" === e.key && a(null),
                "ArrowRight" === e.key &&
                  a((e) => (null === e ? e : (e + 1) % i.length)),
                "ArrowLeft" === e.key &&
                  a((e) => (null === e ? e : (e - 1 + i.length) % i.length));
            };
            return (
              window.addEventListener("keydown", t),
              () => window.removeEventListener("keydown", t)
            );
          }, [e]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: "columns-2 gap-3 sm:columns-3 lg:columns-4",
                children: i.map((e, n) =>
                  (0, t.jsxs)(
                    "button",
                    {
                      onClick: () => a(n),
                      className:
                        "group relative mb-3 block w-full overflow-hidden rounded-xl border border-white/10 text-left",
                      children: [
                        (0, t.jsx)(r.default, {
                          src: e.src,
                          alt: e.cap,
                          width: e.w,
                          height: e.h,
                          className:
                            "w-full transition group-hover:scale-[1.03]",
                          sizes: "(max-width: 640px) 50vw, 25vw",
                        }),
                        (0, t.jsx)("span", {
                          className:
                            "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-8 text-xs text-sand opacity-0 transition group-hover:opacity-100",
                          children: e.cap,
                        }),
                      ],
                    },
                    e.src
                  )
                ),
              }),
              null !== e &&
                (0, t.jsx)("div", {
                  className:
                    "fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4",
                  onClick: () => a(null),
                  children: (0, t.jsxs)("div", {
                    className: "relative max-h-full max-w-4xl",
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      (0, t.jsx)(r.default, {
                        src: i[e].src,
                        alt: i[e].cap,
                        width: i[e].w,
                        height: i[e].h,
                        className: "max-h-[80vh] w-auto rounded-xl",
                        sizes: "100vw",
                        priority: !0,
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "mt-3 flex items-center justify-between text-sm text-muted",
                        children: [
                          (0, t.jsx)("span", { children: i[e].cap }),
                          (0, t.jsxs)("div", {
                            className: "flex gap-4",
                            children: [
                              (0, t.jsx)("a", {
                                href: i[e].src,
                                download: !0,
                                className: "text-amber hover:text-amber-soft",
                                children: "Download",
                              }),
                              (0, t.jsx)("button", {
                                onClick: () => a((e - 1 + i.length) % i.length),
                                className: "hover:text-sand",
                                children: "← Prev",
                              }),
                              (0, t.jsx)("button", {
                                onClick: () => a((e + 1) % i.length),
                                className: "hover:text-sand",
                                children: "Next →",
                              }),
                              (0, t.jsx)("button", {
                                onClick: () => a(null),
                                className: "hover:text-sand",
                                children: "Close",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          })
        );
      },
      "Marquee",
      0,
      function () {
        let e = [...i, ...i];
        return (0, t.jsx)("div", {
          className: "marquee-mask overflow-hidden py-2",
          children: (0, t.jsx)("div", {
            className: "marquee flex w-max gap-3",
            children: e.map((e, n) =>
              (0, t.jsx)(
                r.default,
                {
                  src: e.src,
                  alt: e.cap,
                  width: e.w,
                  height: e.h,
                  className:
                    "h-28 w-auto rounded-lg border border-white/10 object-cover sm:h-36",
                  sizes: "200px",
                },
                n
              )
            ),
          }),
        });
      },
    ]);
  },
  3453,
  (e, t, r) => {
    "use strict";
    e.i(30016), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return y;
      },
      useLinkStatus: function () {
        return w;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(56421),
      o = e.r(88502),
      l = a._(e.r(39926)),
      s = e.r(42339),
      u = e.r(1748),
      c = e.r(28254),
      d = e.r(31666),
      f = e.r(28087),
      p = e.r(51634),
      h = e.r(59353),
      g = e.r(3248),
      m = e.r(59709);
    function y(t) {
      var r;
      let n,
        i,
        a,
        [y, w] = (0, l.useOptimistic)(h.IDLE_LINK_STATUS),
        v = (0, l.useRef)(null),
        {
          href: x,
          as: _,
          children: j,
          prefetch: P = null,
          passHref: E,
          replace: S,
          shallow: C,
          scroll: O,
          onClick: R,
          onMouseEnter: N,
          onTouchStart: k,
          legacyBehavior: M = !1,
          onNavigate: T,
          transitionTypes: I,
          ref: $,
          unstable_dynamicOnHover: z,
          ...A
        } = t;
      (n = j),
        M &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, o.jsx)("a", { children: n }));
      let L = l.default.useContext(u.AppRouterContext),
        D = !1 !== P,
        U = !1 === P ? "none" : !0 === P ? "full" : "auto",
        F =
          "none" !== U
            ? "auto" === U
              ? m.FetchStrategy.PPR
              : m.FetchStrategy.Full
            : m.FetchStrategy.PPR,
        B = "string" == typeof (r = _ || x) ? r : (0, s.formatUrl)(r);
      if (M) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        i = l.default.Children.only(n);
      }
      let q = M ? i && "object" == typeof i && i.ref : $,
        W,
        G = l.default.useCallback(
          (e) => (
            null !== L &&
              (v.current = (0, h.mountLinkInstance)(e, B, L, F, D, w, W)),
            () => {
              v.current &&
                ((0, h.unmountLinkForCurrentNavigation)(v.current),
                (v.current = null)),
                (0, h.unmountPrefetchableInstance)(e);
            }
          ),
          [D, B, L, F, w, W]
        ),
        K = {
          ref: (0, c.useMergedRef)(G, q),
          onClick(t) {
            M || "function" != typeof R || R(t),
              M &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(t),
              !L ||
                t.defaultPrevented ||
                (function (t, r, n, i, a, o, s, u = "none") {
                  if ("u" > typeof window) {
                    let c,
                      { nodeName: d } = t.currentTarget;
                    if (
                      ("A" === d.toUpperCase() &&
                        (((c = t.currentTarget.getAttribute("target")) &&
                          "_self" !== c) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, g.isLocalURL)(r)) {
                      i && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), o)) {
                      let e = !1;
                      if (
                        (o({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(85428);
                    l.default.startTransition(() => {
                      f(
                        r,
                        i ? "replace" : "push",
                        !1 === a
                          ? p.ScrollBehavior.NoScroll
                          : p.ScrollBehavior.Default,
                        n.current,
                        s,
                        u
                      );
                    });
                  }
                })(t, B, v, S, O, T, I, U);
          },
          onMouseEnter(e) {
            M || "function" != typeof N || N(e),
              M &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(e),
              L && D && (0, h.onNavigationIntent)(e.currentTarget, !0 === z);
          },
          onTouchStart: function (e) {
            M || "function" != typeof k || k(e),
              M &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(e),
              L && D && (0, h.onNavigationIntent)(e.currentTarget, !0 === z);
          },
        };
      return (
        (0, d.isAbsoluteUrl)(B)
          ? (K.href = B)
          : (M && !E && ("a" !== i.type || "href" in i.props)) ||
            (K.href = (0, f.addBasePath)(B)),
        (a = M
          ? l.default.cloneElement(i, K)
          : (0, o.jsx)("a", { ...A, ...K, children: n })),
        (0, o.jsx)(b.Provider, { value: y, children: a })
      );
    }
    let b = (0, l.createContext)(h.IDLE_LINK_STATUS),
      w = () => (0, l.useContext)(b);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  91514,
  (e, t, r) => {
    "use strict";
    e.i(30016),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return x;
        },
      });
    let n = e.r(36437),
      i = e.r(56421),
      a = e.r(88502),
      o = i._(e.r(39926)),
      l = n._(e.r(32482)),
      s = n._(e.r(79395)),
      u = e.r(82479),
      c = e.r(85830),
      d = e.r(72462),
      f = e.r(51320),
      p = n._(e.r(99084)),
      h = e.r(28254),
      g = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function m(e, t, r, n, i, a, o) {
      let l = e?.src;
      e &&
        e["data-loaded-src"] !== l &&
        ((e["data-loaded-src"] = l),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && i(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let n = !1,
                  i = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => i,
                  persist: () => {},
                  preventDefault: () => {
                    (n = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (i = !0), t.stopPropagation();
                  },
                });
              }
              n?.current && n.current(e);
            }
          }));
    }
    function y(e) {
      return o.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = "u" < typeof window ? o.useEffect : o.useLayoutEffect,
      w = (0, o.forwardRef)(
        (
          {
            src: e,
            srcSet: t,
            sizes: r,
            height: n,
            width: i,
            decoding: l,
            className: s,
            style: u,
            fetchPriority: c,
            placeholder: d,
            loading: f,
            unoptimized: p,
            fill: g,
            onLoadRef: w,
            onLoadingCompleteRef: v,
            setBlurComplete: x,
            setShowAltText: _,
            sizesInput: j,
            onLoad: P,
            onError: E,
            ...S
          },
          C
        ) => {
          let O = (0, o.useRef)(!1),
            R = (0, o.useRef)(null);
          b(() => {
            let { current: e } = O,
              { current: t } = R;
            e ||
              null === t ||
              (E && (t.src = t.src),
              t.complete && m(t, d, w, v, x, p, j),
              (O.current = !0));
          }, [e, d, w, v, E, p, j]);
          let N = (0, h.useMergedRef)(C, R);
          return (0, a.jsx)("img", {
            ...S,
            ...y(c),
            loading: f,
            width: i,
            height: n,
            decoding: l,
            "data-nimg": g ? "fill" : "1",
            className: s,
            style: u,
            sizes: r,
            srcSet: t,
            src: e,
            ref: N,
            onLoad: (e) => {
              m(e.currentTarget, d, w, v, x, p, j);
            },
            onError: (e) => {
              _(!0), "empty" !== d && x(!0), E && E(e);
            },
          });
        }
      );
    function v({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...y(t.fetchPriority),
      };
      return e && l.default.preload
        ? (l.default.preload(t.src, r), null)
        : (0, a.jsx)(s.default, {
            children: (0, a.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let x = (0, o.forwardRef)((e, t) => {
      let r = (0, o.useContext)(f.RouterContext),
        n = (0, o.useContext)(d.ImageConfigContext),
        i = (0, o.useMemo)(() => {
          let e = g || n || c.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            i = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: i,
            localPatterns:
              "u" < typeof window ? n?.localPatterns : e.localPatterns,
          };
        }, [n]),
        { onLoad: l, onLoadingComplete: s } = e,
        h = (0, o.useRef)(l);
      (0, o.useEffect)(() => {
        h.current = l;
      }, [l]);
      let m = (0, o.useRef)(s);
      (0, o.useEffect)(() => {
        m.current = s;
      }, [s]);
      let [y, b] = (0, o.useState)(!1),
        [x, _] = (0, o.useState)(!1),
        { props: j, meta: P } = (0, u.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: i,
          blurComplete: y,
          showAltText: x,
        });
      return (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(w, {
            ...j,
            unoptimized: P.unoptimized,
            placeholder: P.placeholder,
            fill: P.fill,
            onLoadRef: h,
            onLoadingCompleteRef: m,
            setBlurComplete: b,
            setShowAltText: _,
            sizesInput: e.sizes,
            ref: t,
          }),
          P.preload
            ? (0, a.jsx)(v, { isAppRouter: !r, imgAttributes: j })
            : null,
        ],
      });
    });
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  28254,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let n = e.r(39926);
    function i(e, t) {
      let r = (0, n.useRef)(null),
        i = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = i.current;
            t && ((i.current = null), t());
          } else e && (r.current = a(e, n)), t && (i.current = a(t, n));
        },
        [e, t]
      );
    }
    function a(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  54094,
  (e, t, r) => {
    "use strict";
    function n(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
            t.qualities[0]
          )
        : r;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  82479,
  (e, t, r) => {
    "use strict";
    e.i(30016),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return u;
        },
      });
    let n = e.r(64529),
      i = e.r(69325),
      a = e.r(85830),
      o = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function l(e) {
      return void 0 !== e.default;
    }
    function s(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : "string" == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function u(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: c = !1,
        preload: d = !1,
        loading: f,
        className: p,
        quality: h,
        width: g,
        height: m,
        fill: y = !1,
        style: b,
        overrideSrc: w,
        onLoad: v,
        onLoadingComplete: x,
        placeholder: _ = "empty",
        blurDataURL: j,
        fetchPriority: P,
        decoding: E = "async",
        layout: S,
        objectFit: C,
        objectPosition: O,
        lazyBoundary: R,
        lazyRoot: N,
        ...k
      },
      M
    ) {
      var T;
      let I,
        $,
        z,
        { imgConf: A, showAltText: L, blurComplete: D, defaultLoader: U } = M,
        F = A || a.imageConfigDefault;
      if ("allSizes" in F) I = F;
      else {
        let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
          t = F.deviceSizes.sort((e, t) => e - t),
          r = F.qualities?.sort((e, t) => e - t);
        I = { ...F, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === U)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let B = k.loader || U;
      delete k.loader, delete k.srcSet;
      let q = "__next_img_default" in B;
      if (q) {
        if ("custom" === I.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = B;
        B = (t) => {
          let { config: r, ...n } = t;
          return e(n);
        };
      }
      if (S) {
        "fill" === S && (y = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[S];
        e && (b = { ...b, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[S];
        r && !t && (t = r);
      }
      let W = "",
        G = s(g),
        K = s(m);
      if ((T = e) && "object" == typeof T && (l(T) || void 0 !== T.src)) {
        let t = l(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (
          (($ = t.blurWidth),
          (z = t.blurHeight),
          (j = j || t.blurDataURL),
          (W = t.src),
          !y)
        )
          if (G || K) {
            if (G && !K) {
              let e = G / t.width;
              K = Math.round(t.height * e);
            } else if (!G && K) {
              let e = K / t.height;
              G = Math.round(t.width * e);
            }
          } else (G = t.width), (K = t.height);
      }
      let X = !c && !d && ("lazy" === f || void 0 === f);
      (!(e = "string" == typeof e ? e : W) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (X = !1)),
        I.unoptimized && (r = !0),
        q &&
          !I.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0);
      let H = s(h),
        V = Object.assign(
          y
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: C,
                objectPosition: O,
              }
            : {},
          L ? {} : { color: "transparent" },
          b
        ),
        Q =
          D || "empty" === _
            ? null
            : "blur" === _
            ? `url("data:image/svg+xml;charset=utf-8,${(0, i.getImageBlurSvg)({
                widthInt: G,
                heightInt: K,
                blurWidth: $,
                blurHeight: z,
                blurDataURL: j || "",
                objectFit: V.objectFit,
              })}")`
            : `url("${_}")`,
        J = o.includes(V.objectFit)
          ? "fill" === V.objectFit
            ? "100% 100%"
            : "cover"
          : V.objectFit,
        Y = Q
          ? {
              backgroundSize: J,
              backgroundPosition: V.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: Q,
            }
          : {},
        Z = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: i,
          quality: a,
          sizes: o,
          loader: l,
        }) {
          if (r) {
            if (t.startsWith("/") && !t.startsWith("//")) {
              let e = (0, n.getDeploymentId)();
              if (
                t.includes("/_next/static/immutable") &&
                !(0, n.getAssetToken)()
              )
                e = void 0;
              else if (e) {
                let r = t.indexOf("?");
                if (-1 !== r) {
                  let n = new URLSearchParams(t.slice(r + 1));
                  n.get("dpl") ||
                    (n.append("dpl", e),
                    (t = t.slice(0, r) + "?" + n.toString()));
                } else t += `?dpl=${e}`;
              }
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: s, kind: u } = (function (
              { deviceSizes: e, allSizes: t },
              r,
              n
            ) {
              if (n) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  i = [];
                for (let e; (e = r.exec(n)); ) i.push(parseInt(e[2]));
                if (i.length) {
                  let r = 0.01 * Math.min(...i);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [r, 2 * r].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  };
            })(e, i, o),
            c = s.length - 1;
          return {
            sizes: o || "w" !== u ? o : "100vw",
            srcSet: s
              .map(
                (r, n) =>
                  `${l({ config: e, src: t, quality: a, width: r })} ${
                    "w" === u ? r : n + 1
                  }${u}`
              )
              .join(", "),
            src: l({ config: e, src: t, quality: a, width: s[c] }),
          };
        })({
          config: I,
          src: e,
          unoptimized: r,
          width: G,
          quality: H,
          sizes: t,
          loader: B,
        }),
        ee = X ? "lazy" : f;
      return {
        props: {
          ...k,
          loading: ee,
          fetchPriority: P,
          width: G,
          height: K,
          decoding: E,
          className: p,
          style: { ...V, ...Y },
          sizes: Z.sizes,
          srcSet: Z.srcSet,
          src: w || Z.src,
        },
        meta: { unoptimized: r, preload: d || c, placeholder: _, fill: y },
      };
    }
  },
  79395,
  (e, t, r) => {
    "use strict";
    e.i(30016), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return g;
      },
      defaultHead: function () {
        return d;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(36437),
      o = e.r(56421),
      l = e.r(88502),
      s = o._(e.r(39926)),
      u = a._(e.r(68193)),
      c = e.r(30832);
    function d() {
      return [
        (0, l.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, l.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function f(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === s.default.Fragment
        ? e.concat(
            s.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    let p = ["name", "httpEquiv", "charSet", "itemProp"];
    function h(e) {
      let t, r, n, i;
      return e
        .reduce(f, [])
        .reverse()
        .concat(d().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (n = new Set()),
          (i = {}),
          (e) => {
            let a = !0,
              o = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              o = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (a = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (a = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = p.length; t < r; t++) {
                  let r = p[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) n.has(r) ? (a = !1) : n.add(r);
                    else {
                      let t = e.props[r],
                        n = i[r] || new Set();
                      ("name" !== r || !o) && n.has(t)
                        ? (a = !1)
                        : (n.add(t), (i[r] = n));
                    }
                }
            }
            return a;
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return s.default.cloneElement(e, { key: r });
        });
    }
    let g = function ({ children: e }) {
      let t = (0, s.useContext)(c.HeadManagerContext);
      return (0, l.jsx)(u.default, {
        reduceComponentsToState: h,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  69325,
  (e, t, r) => {
    "use strict";
    function n({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: i,
      blurDataURL: a,
      objectFit: o,
    }) {
      let l = r ? 40 * r : e,
        s = i ? 40 * i : t,
        u = l && s ? `viewBox='0 0 ${l} ${s}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        u
          ? "none"
          : "contain" === o
          ? "xMidYMid"
          : "cover" === o
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  72462,
  (e, t, r) => {
    "use strict";
    e.i(30016),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(36437)._(e.r(39926)),
      i = e.r(85830),
      a = n.default.createContext(i.imageConfigDefault);
  },
  51320,
  (e, t, r) => {
    "use strict";
    e.i(30016),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = e.r(36437)._(e.r(39926)).default.createContext(null);
  },
  85830,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      VALID_LOADERS: function () {
        return a;
      },
      imageConfigDefault: function () {
        return o;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = ["default", "imgix", "cloudinary", "akamai", "custom"],
      o = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1,
      };
  },
  56476,
  (e, t, r) => {
    "use strict";
    e.i(30016), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return c;
      },
      getImageProps: function () {
        return u;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(36437),
      o = e.r(82479),
      l = e.r(91514),
      s = a._(e.r(99084));
    function u(e) {
      let { props: t } = (0, o.getImgProps)(e, {
        defaultLoader: s.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let c = l.Image;
  },
  50245,
  (e, t, r) => {
    t.exports = e.r(56476);
  },
  99084,
  (e, t, r) => {
    "use strict";
    e.i(30016),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(54094),
      i = e.r(64529);
    function a({ config: e, src: t, width: r, quality: o }) {
      let l = (0, i.getDeploymentId)();
      if (t.startsWith("/") && !t.startsWith("//"))
        if (t.includes("/_next/static/immutable") && !(0, i.getAssetToken)())
          l = void 0;
        else {
          let e = t.indexOf("?");
          if (-1 !== e) {
            let r = new URLSearchParams(t.slice(e + 1)),
              n = r.get("dpl");
            if (n) {
              (l = n), r.delete("dpl");
              let i = r.toString();
              t = t.slice(0, e) + (i ? "?" + i : "");
            }
          }
        }
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let s = (0, n.findClosestQuality)(o, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${
        t.startsWith("/") && l ? `&dpl=${l}` : ""
      }`;
    }
    a.__next_img_default = !0;
    let o = a;
  },
  3248,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(31666),
      i = e.r(90998);
    function a(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, i.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  27751,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return s;
      },
      searchParamsToUrlQuery: function () {
        return a;
      },
      urlQueryToSearchParams: function () {
        return l;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    function a(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e
          ? (t[r] = n)
          : Array.isArray(e)
          ? e.push(n)
          : (t[r] = [e, n]);
      }
      return t;
    }
    function o(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
        ? ""
        : String(e);
    }
    function l(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, o(e));
        else t.set(r, o(n));
      return t;
    }
    function s(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  42339,
  (e, t, r) => {
    "use strict";
    e.i(30016), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return l;
      },
      formatWithValidation: function () {
        return u;
      },
      urlObjectKeys: function () {
        return s;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(56421)._(e.r(27751)),
      o = /https?|ftp|gopher|file/;
    function l(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        i = e.pathname || "",
        l = e.hash || "",
        s = e.query || "",
        u = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (u = t + e.host)
          : r &&
            ((u = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (u += ":" + e.port)),
        s && "object" == typeof s && (s = String(a.urlQueryToSearchParams(s)));
      let c = e.search || (s && `?${s}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || o.test(n)) && !1 !== u)
          ? ((u = "//" + (u || "")), i && "/" !== i[0] && (i = "/" + i))
          : u || (u = ""),
        l && "#" !== l[0] && (l = "#" + l),
        c && "?" !== c[0] && (c = "?" + c),
        (i = i.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${u}${i}${c}${l}`
      );
    }
    let s = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function u(e) {
      return l(e);
    }
  },
  68193,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return l;
        },
      });
    let n = e.r(39926),
      i = "u" < typeof window,
      a = i ? () => {} : n.useLayoutEffect,
      o = i ? () => {} : n.useEffect;
    function l(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function l() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(r(e));
        }
      }
      return (
        i && (t?.mountedInstances?.add(e.children), l()),
        a(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        a(
          () => (
            t && (t._pendingUpdate = l),
            () => {
              t && (t._pendingUpdate = l);
            }
          )
        ),
        o(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  31666,
  (e, t, r) => {
    "use strict";
    e.i(30016), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return y;
      },
      MiddlewareNotFoundError: function () {
        return x;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return w;
      },
      SP: function () {
        return g;
      },
      ST: function () {
        return m;
      },
      WEB_VITALS: function () {
        return a;
      },
      execOnce: function () {
        return o;
      },
      getDisplayName: function () {
        return d;
      },
      getLocationOrigin: function () {
        return u;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return s;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return _;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function o(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      s = (e) => {
        let t = e.charCodeAt(0);
        return !!((t >= 65 && t <= 90) || (t >= 97 && t <= 122)) && l.test(e);
      };
    function u() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = u();
      return e.substring(t.length);
    }
    function d(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function f(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function h(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await h(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && f(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${d(
              e
            )}.getInitialProps()" should resolve to an object. But found "${n}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1025", enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let g = "u" > typeof performance,
      m =
        g &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
    class y extends Error {}
    class b extends Error {}
    class w extends Error {
      constructor(e) {
        super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`);
      }
    }
    class v extends Error {
      constructor(e, t) {
        super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`);
      }
    }
    class x extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    }
    function _(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
]);
