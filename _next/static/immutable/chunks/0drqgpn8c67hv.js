(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  50152,
  (e) => {
    "use strict";
    var t = e.i(88502),
      r = e.i(39926);
    let n = (e) =>
        e.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }),
      i = (e) => {
        let t = Math.max(1, Math.round((Date.now() - new Date(e)) / 6e4));
        if (t < 60) return `${t}m ago`;
        let r = Math.round(t / 60);
        return r < 48 ? `${r}h ago` : `${Math.round(r / 24)}d ago`;
      };
    e.s([
      "LiveDonations",
      0,
      function ({ initial: e, compact: o }) {
        let [a, s] = (0, r.useState)(e);
        (0, r.useEffect)(() => {
          let t = () =>
            fetch("/donations.json")
              .then((e) => e.json())
              .then(s)
              .catch(() => {});
          e || t();
          let r = setInterval(t, 3e4);
          return () => clearInterval(r);
        }, [e]);
        let l = (function (e, t = 1200) {
          let [n, i] = (0, r.useState)(e);
          return (
            (0, r.useEffect)(() => {
              if (!e || e === n) return;
              let r = performance.now(),
                o = 0,
                a = (s) => {
                  let l = Math.min(1, (s - r) / t);
                  i(n + (e - n) * (1 - Math.pow(1 - l, 3))),
                    l < 1 && (o = requestAnimationFrame(a));
                };
              return (
                (o = requestAnimationFrame(a)), () => cancelAnimationFrame(o)
              );
            }, [e]),
            n
          );
        })(a?.totalUsd ?? 0);
        return o
          ? (0, t.jsx)("p", {
              className: "serif text-4xl text-sand tabular-nums sm:text-5xl",
              children: a ? n(l) : "—",
            })
          : (0, t.jsxs)("div", {
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "flex flex-wrap items-baseline justify-between gap-3",
                  children: [
                    (0, t.jsx)("p", {
                      className:
                        "font-mono text-[11px] uppercase tracking-[0.25em] text-amber",
                      children:
                        "Delivered to La Senda Verde · Tigrino + 1,000 rescued animals",
                    }),
                    (0, t.jsxs)("span", {
                      className:
                        "flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
                      children: [
                        (0, t.jsxs)("span", {
                          className: "relative flex h-2 w-2",
                          children: [
                            (0, t.jsx)("span", {
                              className:
                                "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75",
                            }),
                            (0, t.jsx)("span", {
                              className:
                                "relative inline-flex h-2 w-2 rounded-full bg-emerald-400",
                            }),
                          ],
                        }),
                        "live · donate.gg",
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("p", {
                  className:
                    "serif mt-4 text-[17vw] font-medium leading-[0.9] text-sand tabular-nums sm:text-9xl lg:text-[11rem]",
                  children: a ? n(l) : "—",
                }),
                a &&
                  (0, t.jsx)("dl", {
                    className:
                      "mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-sand/15 pt-6 sm:grid-cols-4",
                    children: [
                      ["SOL", a.totalSol.toFixed(1)],
                      ["Donations", String(a.count)],
                      [
                        "From $TIGRINO fees",
                        `${Math.round(100 * a.tigrinoShare)}%`,
                      ],
                      ["Last transfer", a.lastGiftAt ? i(a.lastGiftAt) : "—"],
                    ].map(([e, r]) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          children: [
                            (0, t.jsx)("dt", {
                              className:
                                "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
                              children: e,
                            }),
                            (0, t.jsx)("dd", {
                              className: "serif mt-1 text-3xl text-sand",
                              children: r,
                            }),
                          ],
                        },
                        e
                      )
                    ),
                  }),
                a &&
                  a.recent.length > 0 &&
                  (0, t.jsxs)("details", {
                    className: "group mt-6",
                    children: [
                      (0, t.jsx)("summary", {
                        className:
                          "cursor-pointer font-mono text-[11px] uppercase tracking-[0.2em] text-amber hover:text-amber-soft",
                        children: "Show recent transfers",
                      }),
                      (0, t.jsx)("ul", {
                        className: "mt-3 divide-y divide-sand/10 text-sm",
                        children: a.recent.map((e) =>
                          (0, t.jsxs)(
                            "li",
                            {
                              className:
                                "flex items-center justify-between gap-3 py-2",
                              children: [
                                (0, t.jsx)("a", {
                                  href: `https://solscan.io/tx/${e.tx}`,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "truncate text-muted hover:text-sand",
                                  children: e.fromTigrino
                                    ? "$TIGRINO creator fees"
                                    : e.from,
                                }),
                                (0, t.jsxs)("span", {
                                  className: "shrink-0 font-mono text-sand",
                                  children: [e.sol.toFixed(2), " SOL"],
                                }),
                                (0, t.jsx)("span", {
                                  className:
                                    "w-16 shrink-0 text-right font-mono text-xs text-muted",
                                  children: i(e.at),
                                }),
                              ],
                            },
                            e.id
                          )
                        ),
                      }),
                    ],
                  }),
              ],
            });
      },
    ]);
  },
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
        let [e, o] = (0, n.useState)(!1);
        return (0, t.jsxs)("div", {
          className: "md:hidden",
          children: [
            (0, t.jsx)("button", {
              "aria-label": "Menu",
              onClick: () => o((e) => !e),
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
                        onClick: () => o(!1),
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
  3453,
  (e, t, r) => {
    "use strict";
    e.i(30016), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return y;
      },
      useLinkStatus: function () {
        return x;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let o = e.r(56421),
      a = e.r(88502),
      s = o._(e.r(39926)),
      l = e.r(42339),
      u = e.r(1748),
      c = e.r(28254),
      d = e.r(31666),
      f = e.r(28087),
      p = e.r(51634),
      m = e.r(59353),
      h = e.r(3248),
      g = e.r(59709);
    function y(t) {
      var r;
      let n,
        i,
        o,
        [y, x] = (0, s.useOptimistic)(m.IDLE_LINK_STATUS),
        v = (0, s.useRef)(null),
        {
          href: _,
          as: j,
          children: w,
          prefetch: P = null,
          passHref: S,
          replace: E,
          shallow: O,
          scroll: C,
          onClick: R,
          onMouseEnter: N,
          onTouchStart: M,
          legacyBehavior: T = !1,
          onNavigate: $,
          transitionTypes: I,
          ref: k,
          unstable_dynamicOnHover: A,
          ...L
        } = t;
      (n = w),
        T &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, a.jsx)("a", { children: n }));
      let D = s.default.useContext(u.AppRouterContext),
        z = !1 !== P,
        U = !1 === P ? "none" : !0 === P ? "full" : "auto",
        F =
          "none" !== U
            ? "auto" === U
              ? g.FetchStrategy.PPR
              : g.FetchStrategy.Full
            : g.FetchStrategy.PPR,
        B = "string" == typeof (r = j || _) ? r : (0, l.formatUrl)(r);
      if (T) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        i = s.default.Children.only(n);
      }
      let q = T ? i && "object" == typeof i && i.ref : k,
        W,
        G = s.default.useCallback(
          (e) => (
            null !== D &&
              (v.current = (0, m.mountLinkInstance)(e, B, D, F, z, x, W)),
            () => {
              v.current &&
                ((0, m.unmountLinkForCurrentNavigation)(v.current),
                (v.current = null)),
                (0, m.unmountPrefetchableInstance)(e);
            }
          ),
          [z, B, D, F, x, W]
        ),
        K = {
          ref: (0, c.useMergedRef)(G, q),
          onClick(t) {
            T || "function" != typeof R || R(t),
              T &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(t),
              !D ||
                t.defaultPrevented ||
                (function (t, r, n, i, o, a, l, u = "none") {
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
                    if (!(0, h.isLocalURL)(r)) {
                      i && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), a)) {
                      let e = !1;
                      if (
                        (a({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(85428);
                    s.default.startTransition(() => {
                      f(
                        r,
                        i ? "replace" : "push",
                        !1 === o
                          ? p.ScrollBehavior.NoScroll
                          : p.ScrollBehavior.Default,
                        n.current,
                        l,
                        u
                      );
                    });
                  }
                })(t, B, v, E, C, $, I, U);
          },
          onMouseEnter(e) {
            T || "function" != typeof N || N(e),
              T &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(e),
              D && z && (0, m.onNavigationIntent)(e.currentTarget, !0 === A);
          },
          onTouchStart: function (e) {
            T || "function" != typeof M || M(e),
              T &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(e),
              D && z && (0, m.onNavigationIntent)(e.currentTarget, !0 === A);
          },
        };
      return (
        (0, d.isAbsoluteUrl)(B)
          ? (K.href = B)
          : (T && !S && ("a" !== i.type || "href" in i.props)) ||
            (K.href = (0, f.addBasePath)(B)),
        (o = T
          ? s.default.cloneElement(i, K)
          : (0, a.jsx)("a", { ...L, ...K, children: n })),
        (0, a.jsx)(b.Provider, { value: y, children: o })
      );
    }
    let b = (0, s.createContext)(m.IDLE_LINK_STATUS),
      x = () => (0, s.useContext)(b);
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
          return _;
        },
      });
    let n = e.r(36437),
      i = e.r(56421),
      o = e.r(88502),
      a = i._(e.r(39926)),
      s = n._(e.r(32482)),
      l = n._(e.r(79395)),
      u = e.r(82479),
      c = e.r(85830),
      d = e.r(72462),
      f = e.r(51320),
      p = n._(e.r(99084)),
      m = e.r(28254),
      h = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function g(e, t, r, n, i, o, a) {
      let s = e?.src;
      e &&
        e["data-loaded-src"] !== s &&
        ((e["data-loaded-src"] = s),
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
      return a.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = "u" < typeof window ? a.useEffect : a.useLayoutEffect,
      x = (0, a.forwardRef)(
        (
          {
            src: e,
            srcSet: t,
            sizes: r,
            height: n,
            width: i,
            decoding: s,
            className: l,
            style: u,
            fetchPriority: c,
            placeholder: d,
            loading: f,
            unoptimized: p,
            fill: h,
            onLoadRef: x,
            onLoadingCompleteRef: v,
            setBlurComplete: _,
            setShowAltText: j,
            sizesInput: w,
            onLoad: P,
            onError: S,
            ...E
          },
          O
        ) => {
          let C = (0, a.useRef)(!1),
            R = (0, a.useRef)(null);
          b(() => {
            let { current: e } = C,
              { current: t } = R;
            e ||
              null === t ||
              (S && (t.src = t.src),
              t.complete && g(t, d, x, v, _, p, w),
              (C.current = !0));
          }, [e, d, x, v, S, p, w]);
          let N = (0, m.useMergedRef)(O, R);
          return (0, o.jsx)("img", {
            ...E,
            ...y(c),
            loading: f,
            width: i,
            height: n,
            decoding: s,
            "data-nimg": h ? "fill" : "1",
            className: l,
            style: u,
            sizes: r,
            srcSet: t,
            src: e,
            ref: N,
            onLoad: (e) => {
              g(e.currentTarget, d, x, v, _, p, w);
            },
            onError: (e) => {
              j(!0), "empty" !== d && _(!0), S && S(e);
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
      return e && s.default.preload
        ? (s.default.preload(t.src, r), null)
        : (0, o.jsx)(l.default, {
            children: (0, o.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let _ = (0, a.forwardRef)((e, t) => {
      let r = (0, a.useContext)(f.RouterContext),
        n = (0, a.useContext)(d.ImageConfigContext),
        i = (0, a.useMemo)(() => {
          let e = h || n || c.imageConfigDefault,
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
        { onLoad: s, onLoadingComplete: l } = e,
        m = (0, a.useRef)(s);
      (0, a.useEffect)(() => {
        m.current = s;
      }, [s]);
      let g = (0, a.useRef)(l);
      (0, a.useEffect)(() => {
        g.current = l;
      }, [l]);
      let [y, b] = (0, a.useState)(!1),
        [_, j] = (0, a.useState)(!1),
        { props: w, meta: P } = (0, u.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: i,
          blurComplete: y,
          showAltText: _,
        });
      return (0, o.jsxs)(o.Fragment, {
        children: [
          (0, o.jsx)(x, {
            ...w,
            unoptimized: P.unoptimized,
            placeholder: P.placeholder,
            fill: P.fill,
            onLoadRef: m,
            onLoadingCompleteRef: g,
            setBlurComplete: b,
            setShowAltText: j,
            sizesInput: e.sizes,
            ref: t,
          }),
          P.preload
            ? (0, o.jsx)(v, { isAppRouter: !r, imgAttributes: w })
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
          } else e && (r.current = o(e, n)), t && (i.current = o(t, n));
        },
        [e, t]
      );
    }
    function o(e, t) {
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
      o = e.r(85830),
      a = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function s(e) {
      return void 0 !== e.default;
    }
    function l(e) {
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
        quality: m,
        width: h,
        height: g,
        fill: y = !1,
        style: b,
        overrideSrc: x,
        onLoad: v,
        onLoadingComplete: _,
        placeholder: j = "empty",
        blurDataURL: w,
        fetchPriority: P,
        decoding: S = "async",
        layout: E,
        objectFit: O,
        objectPosition: C,
        lazyBoundary: R,
        lazyRoot: N,
        ...M
      },
      T
    ) {
      var $;
      let I,
        k,
        A,
        { imgConf: L, showAltText: D, blurComplete: z, defaultLoader: U } = T,
        F = L || o.imageConfigDefault;
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
      let B = M.loader || U;
      delete M.loader, delete M.srcSet;
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
      if (E) {
        "fill" === E && (y = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[E];
        e && (b = { ...b, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[E];
        r && !t && (t = r);
      }
      let W = "",
        G = l(h),
        K = l(g);
      if (($ = e) && "object" == typeof $ && (s($) || void 0 !== $.src)) {
        let t = s(e) ? e.default : e;
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
          ((k = t.blurWidth),
          (A = t.blurHeight),
          (w = w || t.blurDataURL),
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
      let V = l(m),
        Q = Object.assign(
          y
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: O,
                objectPosition: C,
              }
            : {},
          D ? {} : { color: "transparent" },
          b
        ),
        H =
          z || "empty" === j
            ? null
            : "blur" === j
            ? `url("data:image/svg+xml;charset=utf-8,${(0, i.getImageBlurSvg)({
                widthInt: G,
                heightInt: K,
                blurWidth: k,
                blurHeight: A,
                blurDataURL: w || "",
                objectFit: Q.objectFit,
              })}")`
            : `url("${j}")`,
        J = a.includes(Q.objectFit)
          ? "fill" === Q.objectFit
            ? "100% 100%"
            : "cover"
          : Q.objectFit,
        Y = H
          ? {
              backgroundSize: J,
              backgroundPosition: Q.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: H,
            }
          : {},
        Z = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: i,
          quality: o,
          sizes: a,
          loader: s,
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
          let { widths: l, kind: u } = (function (
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
            })(e, i, a),
            c = l.length - 1;
          return {
            sizes: a || "w" !== u ? a : "100vw",
            srcSet: l
              .map(
                (r, n) =>
                  `${s({ config: e, src: t, quality: o, width: r })} ${
                    "w" === u ? r : n + 1
                  }${u}`
              )
              .join(", "),
            src: s({ config: e, src: t, quality: o, width: l[c] }),
          };
        })({
          config: I,
          src: e,
          unoptimized: r,
          width: G,
          quality: V,
          sizes: t,
          loader: B,
        }),
        ee = X ? "lazy" : f;
      return {
        props: {
          ...M,
          loading: ee,
          fetchPriority: P,
          width: G,
          height: K,
          decoding: S,
          className: p,
          style: { ...Q, ...Y },
          sizes: Z.sizes,
          srcSet: Z.srcSet,
          src: x || Z.src,
        },
        meta: { unoptimized: r, preload: d || c, placeholder: j, fill: y },
      };
    }
  },
  79395,
  (e, t, r) => {
    "use strict";
    e.i(30016), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return h;
      },
      defaultHead: function () {
        return d;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let o = e.r(36437),
      a = e.r(56421),
      s = e.r(88502),
      l = a._(e.r(39926)),
      u = o._(e.r(68193)),
      c = e.r(30832);
    function d() {
      return [
        (0, s.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, s.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function f(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === l.default.Fragment
        ? e.concat(
            l.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    let p = ["name", "httpEquiv", "charSet", "itemProp"];
    function m(e) {
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
            let o = !0,
              a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              a = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (o = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (o = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = p.length; t < r; t++) {
                  let r = p[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) n.has(r) ? (o = !1) : n.add(r);
                    else {
                      let t = e.props[r],
                        n = i[r] || new Set();
                      ("name" !== r || !a) && n.has(t)
                        ? (o = !1)
                        : (n.add(t), (i[r] = n));
                    }
                }
            }
            return o;
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return l.default.cloneElement(e, { key: r });
        });
    }
    let h = function ({ children: e }) {
      let t = (0, l.useContext)(c.HeadManagerContext);
      return (0, s.jsx)(u.default, {
        reduceComponentsToState: m,
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
      blurDataURL: o,
      objectFit: a,
    }) {
      let s = r ? 40 * r : e,
        l = i ? 40 * i : t,
        u = s && l ? `viewBox='0 0 ${s} ${l}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        u
          ? "none"
          : "contain" === a
          ? "xMidYMid"
          : "cover" === a
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`;
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
          return o;
        },
      });
    let n = e.r(36437)._(e.r(39926)),
      i = e.r(85830),
      o = n.default.createContext(i.imageConfigDefault);
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
        return o;
      },
      imageConfigDefault: function () {
        return a;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"],
      a = {
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
  99084,
  (e, t, r) => {
    "use strict";
    e.i(30016),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(54094),
      i = e.r(64529);
    function o({ config: e, src: t, width: r, quality: a }) {
      let s = (0, i.getDeploymentId)();
      if (t.startsWith("/") && !t.startsWith("//"))
        if (t.includes("/_next/static/immutable") && !(0, i.getAssetToken)())
          s = void 0;
        else {
          let e = t.indexOf("?");
          if (-1 !== e) {
            let r = new URLSearchParams(t.slice(e + 1)),
              n = r.get("dpl");
            if (n) {
              (s = n), r.delete("dpl");
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
      let l = (0, n.findClosestQuality)(a, e);
      return `${(t)
      }`;
    }
    o.__next_img_default = !0;
    let a = o;
  },
  3248,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(31666),
      i = e.r(90998);
    function o(e) {
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
        return l;
      },
      searchParamsToUrlQuery: function () {
        return o;
      },
      urlQueryToSearchParams: function () {
        return s;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    function o(e) {
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
    function a(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
        ? ""
        : String(e);
    }
    function s(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, a(e));
        else t.set(r, a(n));
      return t;
    }
    function l(e, ...t) {
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
        return s;
      },
      formatWithValidation: function () {
        return u;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let o = e.r(56421)._(e.r(27751)),
      a = /https?|ftp|gopher|file/;
    function s(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        i = e.pathname || "",
        s = e.hash || "",
        l = e.query || "",
        u = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (u = t + e.host)
          : r &&
            ((u = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (u += ":" + e.port)),
        l && "object" == typeof l && (l = String(o.urlQueryToSearchParams(l)));
      let c = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || a.test(n)) && !1 !== u)
          ? ((u = "//" + (u || "")), i && "/" !== i[0] && (i = "/" + i))
          : u || (u = ""),
        s && "#" !== s[0] && (s = "#" + s),
        c && "?" !== c[0] && (c = "?" + c),
        (i = i.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${u}${i}${c}${s}`
      );
    }
    let l = [
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
      return s(e);
    }
  },
  68193,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let n = e.r(39926),
      i = "u" < typeof window,
      o = i ? () => {} : n.useLayoutEffect,
      a = i ? () => {} : n.useEffect;
    function s(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function s() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(r(e));
        }
      }
      return (
        i && (t?.mountedInstances?.add(e.children), s()),
        o(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        o(
          () => (
            t && (t._pendingUpdate = s),
            () => {
              t && (t._pendingUpdate = s);
            }
          )
        ),
        a(
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
        return _;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return x;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return g;
      },
      WEB_VITALS: function () {
        return o;
      },
      execOnce: function () {
        return a;
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
        return l;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return m;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return j;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function a(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => {
        let t = e.charCodeAt(0);
        return !!((t >= 65 && t <= 90) || (t >= 97 && t <= 122)) && s.test(e);
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
    async function m(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await m(t.Component, t.ctx) }
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
    let h = "u" > typeof performance,
      g =
        h &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
    class y extends Error {}
    class b extends Error {}
    class x extends Error {
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
    class _ extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    }
    function j(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
]);
