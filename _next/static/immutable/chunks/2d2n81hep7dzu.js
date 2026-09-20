(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  75204,
  (e, t, r) => {
    "use strict";
    e.i(30016),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useRouterBFCache", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(39926);
    function a(e, t, r) {
      let [a, o] = (0, n.useState)(() => ({
        tree: e,
        cacheNode: t,
        stateKey: r,
        next: null,
      }));
      if (a.tree === e) return a;
      let l = { tree: e, cacheNode: t, stateKey: r, next: null },
        u = 1,
        i = a,
        s = l;
      for (; null !== i && u < 1; ) {
        if (i.stateKey === r) {
          s.next = i.next;
          break;
        }
        {
          u++;
          let e = {
            tree: i.tree,
            cacheNode: i.cacheNode,
            stateKey: i.stateKey,
            next: null,
          };
          (s.next = e), (s = e);
        }
        i = i.next;
      }
      return o(l), l;
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  22944,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ClientPageRoot", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let n = e.r(88502),
      a = e.r(1748),
      o = e.r(39926),
      l = e.r(54003),
      u = e.r(92834),
      i = e.r(81639);
    function s({ Component: e, serverProvidedParams: t }) {
      let r, d;
      if (null !== t) (r = t.searchParams), (d = t.params);
      else {
        let e = (0, o.use)(a.LayoutRouterContext);
        (d = null !== e ? e.parentParams : {}),
          (r = (0, l.urlSearchParamsToParsedUrlQuery)(
            (0, o.use)(u.SearchParamsContext)
          ));
      }
      let c = (0, i.createClientSearchParams)(r),
        f = (0, i.createClientParams)(d);
      return (0, n.jsx)(e, { params: f, searchParams: c });
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  90302,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ClientSegmentRoot", {
        enumerable: !0,
        get: function () {
          return u;
        },
      });
    let n = e.r(88502),
      a = e.r(1748),
      o = e.r(39926),
      l = e.r(81639);
    function u({ Component: e, slots: t, serverProvidedParams: r }) {
      let i;
      if (null !== r) i = r.params;
      else {
        let e = (0, o.use)(a.LayoutRouterContext);
        i = null !== e ? e.parentParams : {};
      }
      let s = (0, l.createClientParams)(i);
      return (0, n.jsx)(e, { ...t, params: s });
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  39946,
  (e, t, r) => {
    "use strict";
    e.i(30016),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "HTTPAccessFallbackBoundary", {
        enumerable: !0,
        get: function () {
          return d;
        },
      });
    let n = e.r(56421),
      a = e.r(88502),
      o = n._(e.r(39926)),
      l = e.r(54943),
      u = e.r(75416),
      i = e.r(1748);
    class s extends o.default.Component {
      constructor(e) {
        super(e),
          (this.state = {
            triggeredStatus: void 0,
            previousPathname: e.pathname,
          });
      }
      componentDidCatch() {}
      static getDerivedStateFromError(e) {
        if ((0, u.isHTTPAccessFallbackError)(e))
          return { triggeredStatus: (0, u.getAccessFallbackHTTPStatus)(e) };
        throw e;
      }
      static getDerivedStateFromProps(e, t) {
        return e.pathname !== t.previousPathname && t.triggeredStatus
          ? { triggeredStatus: void 0, previousPathname: e.pathname }
          : {
              triggeredStatus: t.triggeredStatus,
              previousPathname: e.pathname,
            };
      }
      render() {
        let {
            notFound: e,
            forbidden: t,
            unauthorized: r,
            children: n,
          } = this.props,
          { triggeredStatus: o } = this.state,
          l = {
            [u.HTTPAccessErrorStatus.NOT_FOUND]: e,
            [u.HTTPAccessErrorStatus.FORBIDDEN]: t,
            [u.HTTPAccessErrorStatus.UNAUTHORIZED]: r,
          };
        if (o) {
          let i = o === u.HTTPAccessErrorStatus.NOT_FOUND && e,
            s = o === u.HTTPAccessErrorStatus.FORBIDDEN && t,
            d = o === u.HTTPAccessErrorStatus.UNAUTHORIZED && r;
          return i || s || d
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("meta", { name: "robots", content: "noindex" }),
                  !1,
                  l[o],
                ],
              })
            : n;
        }
        return n;
      }
    }
    function d({ notFound: e, forbidden: t, unauthorized: r, children: n }) {
      let u = (0, l.useUntrackedPathname)(),
        c = (0, o.useContext)(i.MissingSlotContext);
      return e || t || r
        ? (0, a.jsx)(s, {
            pathname: u,
            notFound: e,
            forbidden: t,
            unauthorized: r,
            missingSlots: c,
            children: n,
          })
        : (0, a.jsx)(a.Fragment, { children: n });
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  27404,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      InstantValidationBoundaryContext: function () {
        return o;
      },
      PlaceValidationBoundaryBelowThisLevel: function () {
        return l;
      },
      RenderValidationBoundaryAtThisLevel: function () {
        return u;
      },
      SlotMarker: function () {
        return i;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = null,
      l = null,
      u = null,
      i = null;
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  27555,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      InstantValidationBoundaryContext: function () {
        return o.InstantValidationBoundaryContext;
      },
      PlaceValidationBoundaryBelowThisLevel: function () {
        return o.PlaceValidationBoundaryBelowThisLevel;
      },
      RenderValidationBoundaryAtThisLevel: function () {
        return o.RenderValidationBoundaryAtThisLevel;
      },
      SlotMarker: function () {
        return o.SlotMarker;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(27404);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  10240,
  (e, t, r) => {
    "use strict";
    e.i(30016), Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      LoadingBoundaryProvider: function () {
        return C;
      },
      default: function () {
        return S;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(36437),
      l = e.r(56421),
      u = e.r(88502),
      i = l._(e.r(39926)),
      s = o._(e.r(32482)),
      d = e.r(1748),
      c = e.r(64592),
      f = e.r(10945),
      p = e.r(73428),
      b = e.r(97223),
      v = e.r(39946);
    e.r(27555);
    let m = e.r(22555),
      y = e.r(75204);
    e.r(6187);
    let h = e.r(92834),
      _ = e.r(54003),
      P = e.r(57079);
    s.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function g(e, t, r) {
      let n = e.getClientRects();
      if (0 === n.length) return 0;
      let a = 1 / 0;
      for (let e = 0; e < n.length; e++) {
        let t = n[e];
        t.top < a && (a = t.top);
      }
      return a >= r() && a <= t ? 1 : 2;
    }
    i.default.Component;
    let j = function (e) {
      let t = i.default.useRef(null);
      return (
        (0, i.useLayoutEffect)(() => {
          let { focusAndScrollRef: r, cacheNode: n } = e,
            a = r.forceScroll ? r.scrollRef : n.scrollRef;
          if (null === a || !a.current) return;
          let o = null,
            l = r.hashFragment;
          if (l) {
            var u;
            if (
              null ===
              (o =
                "top" === (u = l)
                  ? document.body
                  : document.getElementById(u) ??
                    document.getElementsByName(u)[0] ??
                    null)
            ) {
              (a.current = !1),
                (r.onlyHashChange = !1),
                (r.hashFragment = null);
              return;
            }
          } else o = t.current;
          if (null === o) return;
          let i = !1;
          (0, p.disableSmoothScrollDuringRouteTransition)(
            () => {
              let e = document.documentElement,
                t = null,
                r = null,
                n = null,
                u = () => {
                  var r, a;
                  let o, l;
                  return (
                    null === n &&
                      ((r = e),
                      (a = t),
                      (n =
                        !Number.isFinite(
                          (l = Number.parseFloat(
                            (o = getComputedStyle(r).scrollPaddingTop)
                          ))
                        ) || l < 0
                          ? 0
                          : o.endsWith("px")
                          ? l
                          : o.endsWith("%")
                          ? (l / 100) * a
                          : 0)),
                    n
                  );
                };
              (l || ((t = e.clientHeight), 0 !== (r = g(o, t, u)))) &&
                (((i = !0), (a.current = !1), l)
                  ? o.scrollIntoView()
                  : 1 !== r &&
                    ((e.scrollTop = 0),
                    2 === g(o, t, u) && o.scrollIntoView()));
            },
            { dontForceLayout: !0, onlyHashChange: r.onlyHashChange }
          ),
            i && ((r.onlyHashChange = !1), (r.hashFragment = null));
        }, void 0),
        (0, u.jsx)(i.Fragment, { ref: t, children: e.children })
      );
    };
    function O({ children: e, cacheNode: t }) {
      let r = (0, i.useContext)(d.GlobalLayoutRouterContext);
      if (!r)
        throw Object.defineProperty(
          Error("invariant global layout router not mounted"),
          "__NEXT_ERROR_CODE",
          { value: "E473", enumerable: !1, configurable: !0 }
        );
      return (0, u.jsx)(j, {
        focusAndScrollRef: r.focusAndScrollRef,
        cacheNode: t,
        children: e,
      });
    }
    function x({
      tree: e,
      segmentPath: t,
      debugNameContext: r,
      cacheNode: n,
      params: a,
      url: o,
      isActive: l,
    }) {
      let s,
        f = (0, i.useContext)(d.GlobalLayoutRouterContext);
      if (((0, i.useContext)(h.NavigationPromisesContext), !f))
        throw Object.defineProperty(
          Error("invariant global layout router not mounted"),
          "__NEXT_ERROR_CODE",
          { value: "E473", enumerable: !1, configurable: !0 }
        );
      let p = null !== n ? n : (0, i.use)(c.unresolvedThenable),
        b = null !== p.prefetchRsc ? p.prefetchRsc : p.rsc,
        v = (0, i.useDeferredValue)(p.rsc, b);
      if ((0, P.isDeferredRsc)(v)) {
        let e = (0, i.use)(v);
        null === e && (0, i.use)(c.unresolvedThenable), (s = e);
      } else null === v && (0, i.use)(c.unresolvedThenable), (s = v);
      let m = s;
      return (0, u.jsx)(d.LayoutRouterContext.Provider, {
        value: {
          parentTree: e,
          parentCacheNode: p,
          parentSegmentPath: t,
          parentParams: a,
          parentLoadingData: null,
          debugNameContext: r,
          url: o,
          isActive: l,
        },
        children: m,
      });
    }
    function C({ loading: e, children: t }) {
      let r = (0, i.use)(d.LayoutRouterContext);
      return null === r
        ? t
        : (0, u.jsx)(d.LayoutRouterContext.Provider, {
            value: {
              parentTree: r.parentTree,
              parentCacheNode: r.parentCacheNode,
              parentSegmentPath: r.parentSegmentPath,
              parentParams: r.parentParams,
              parentLoadingData: e,
              debugNameContext: r.debugNameContext,
              url: r.url,
              isActive: r.isActive,
            },
            children: t,
          });
    }
    function E({ name: e, loading: t, children: r }) {
      if (null !== t) {
        let n = t[0],
          a = t[1],
          o = t[2];
        return (0, u.jsx)(i.Suspense, {
          name: e,
          fallback: (0, u.jsxs)(u.Fragment, { children: [a, o, n] }),
          children: r,
        });
      }
      return (0, u.jsx)(u.Fragment, { children: r });
    }
    function S({
      parallelRouterKey: e,
      error: t,
      errorStyles: r,
      errorScripts: n,
      templateStyles: a,
      templateScripts: o,
      template: l,
      notFound: s,
      forbidden: p,
      unauthorized: h,
      segmentViewBoundaries: P,
    }) {
      let g = (0, i.useContext)(d.LayoutRouterContext);
      if (!g)
        throw Object.defineProperty(
          Error("invariant expected layout router to be mounted"),
          "__NEXT_ERROR_CODE",
          { value: "E56", enumerable: !1, configurable: !0 }
        );
      let {
          parentTree: j,
          parentCacheNode: C,
          parentSegmentPath: T,
          parentParams: R,
          parentLoadingData: w,
          url: A,
          isActive: M,
          debugNameContext: N,
        } = g,
        B = j[0],
        F = null === T ? [e] : T.concat([B, e]),
        L = j[1][e],
        k = C.slots;
      (void 0 === L || null === k) && (0, i.use)(c.unresolvedThenable);
      let D = L[0],
        I = k[e] ?? null,
        H = (0, m.createRouterCacheKey)(D, !0),
        V = (0, y.useRouterBFCache)(L, I, H),
        U = [];
      do {
        let e = V.tree,
          i = V.cacheNode,
          c = V.stateKey,
          m = e[0],
          y = R;
        if (Array.isArray(m)) {
          let e = m[0],
            t = m[1],
            r = m[2],
            n = (0, _.getParamValueFromCacheKey)(t, r);
          null !== n && (y = { ...R, [e]: n });
        }
        let P = (function (e) {
            if ("/" === e) return "/";
            if ("string" == typeof e)
              if ("(__SLOT__)" === e) return;
              else return e + "/";
            return e[1] + "/";
          })(m),
          g = P ?? N,
          j = void 0 === P ? void 0 : N,
          C = (0, u.jsxs)(O, {
            cacheNode: i,
            children: [
              (0, u.jsx)(f.ErrorBoundary, {
                errorComponent: t,
                errorStyles: r,
                errorScripts: n,
                children: (0, u.jsx)(E, {
                  name: j,
                  loading: w,
                  children: (0, u.jsx)(v.HTTPAccessFallbackBoundary, {
                    notFound: s,
                    forbidden: p,
                    unauthorized: h,
                    children: (0, u.jsxs)(b.RedirectBoundary, {
                      children: [
                        (0, u.jsx)(x, {
                          url: A,
                          tree: e,
                          params: y,
                          cacheNode: i,
                          segmentPath: F,
                          debugNameContext: g,
                          isActive: M && c === H,
                        }),
                        null,
                      ],
                    }),
                  }),
                }),
              }),
              null,
            ],
          }),
          S = (0, u.jsxs)(
            d.TemplateContext.Provider,
            { value: C, children: [a, o, l] },
            c
          );
        U.push(S), (V = V.next);
      } while (null !== V);
      return U;
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  75681,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return u;
        },
      });
    let n = e.r(56421),
      a = e.r(88502),
      o = n._(e.r(39926)),
      l = e.r(1748);
    function u() {
      let e = (0, o.useContext)(l.TemplateContext);
      return (0, a.jsx)(a.Fragment, { children: e });
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  67181,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "createRenderParamsFromClient", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = new WeakMap();
    function a(e) {
      let t = n.get(e);
      if (t) return t;
      let r = Promise.resolve(e);
      return n.set(e, r), r;
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  27128,
  (e, t, r) => {
    "use strict";
    e.i(30016),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "createRenderParamsFromClient", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = e.r(67181).createRenderParamsFromClient;
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  39078,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "createRenderSearchParamsFromClient", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = new WeakMap();
    function a(e) {
      let t = n.get(e);
      if (t) return t;
      let r = Promise.resolve(e);
      return n.set(e, r), r;
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  32021,
  (e, t, r) => {
    "use strict";
    e.i(30016),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "createRenderSearchParamsFromClient", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = e.r(39078).createRenderSearchParamsFromClient;
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  81639,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      createClientParams: function () {
        return o.createRenderParamsFromClient;
      },
      createClientSearchParams: function () {
        return l.createRenderSearchParamsFromClient;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(27128),
      l = e.r(32021);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  39640,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "IconMark", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(88502),
      a = () =>
        "u" > typeof window ? null : (0, n.jsx)("meta", { name: "«nxt-icon»" });
  },
  73428,
  (e, t, r) => {
    "use strict";
    function n(e, t = {}) {
      if (t.onlyHashChange) return void e();
      let r = document.documentElement;
      if ("smooth" !== r.dataset.scrollBehavior) return void e();
      let a = r.style.scrollBehavior;
      (r.style.scrollBehavior = "auto"),
        t.dontForceLayout || r.getClientRects(),
        e(),
        (r.style.scrollBehavior = a);
    }
    e.i(30016),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "disableSmoothScrollDuringRouteTransition", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  37754,
  (e, t, r) => {
    t.exports = e.r(96501);
  },
  82236,
  (e) => {
    "use strict";
    var t = e.i(30016),
      r = e.i(39926),
      n = e.i(37754);
    function a() {
      return "u" > typeof window;
    }
    function o() {
      return "production";
    }
    function l() {
      return "development" === ((a() ? window.vam : o()) || "production");
    }
    function u(e) {
      return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`);
    }
    function i(e) {
      return e.startsWith("http://") ||
        e.startsWith("https://") ||
        e.startsWith("/")
        ? e
        : `/${e}`;
    }
    function s(e) {
      return (
        (0, r.useEffect)(() => {
          var t;
          e.beforeSend &&
            (null == (t = window.va) ||
              t.call(window, "beforeSend", e.beforeSend));
        }, [e.beforeSend]),
        (0, r.useEffect)(() => {
          !(function (e = { debug: !0 }, t) {
            var r;
            if (!a()) return;
            let {
              beforeSend: n,
              src: u,
              dataset: s,
            } = (function (e, t) {
              var r, n;
              let a = e;
              if (t)
                try {
                  a = {
                    ...(null == (r = JSON.parse(t)) ? void 0 : r.analytics),
                    ...e,
                  };
                } catch {}
              !(function (e = "auto") {
                if ("auto" === e) {
                  window.vam = o();
                  return;
                }
                window.vam = e;
              })(a.mode);
              let u = {
                sdkn:
                  "@vercel/analytics" + (a.framework ? `/${a.framework}` : ""),
                sdkv: "2.0.1",
              };
              return (
                a.disableAutoTrack && (u.disableAutoTrack = "1"),
                a.viewEndpoint && (u.viewEndpoint = i(a.viewEndpoint)),
                a.eventEndpoint && (u.eventEndpoint = i(a.eventEndpoint)),
                a.sessionEndpoint && (u.sessionEndpoint = i(a.sessionEndpoint)),
                l() && !1 === a.debug && (u.debug = "false"),
                a.dsn && (u.dsn = a.dsn),
                a.endpoint
                  ? (u.endpoint = a.endpoint)
                  : a.basePath && (u.endpoint = i(`${a.basePath}/insights`)),
                {
                  beforeSend: a.beforeSend,
                  src: (n = a).scriptSrc
                    ? i(n.scriptSrc)
                    : l()
                    ? "https://va.vercel-scripts.com/v1/script.debug.js"
                    : n.basePath
                    ? i(`${n.basePath}/insights/script.js`)
                    : "/_vercel/insights/script.js",
                  dataset: u,
                }
              );
            })(e, t);
            if (
              (window.va ||
                (window.va = function (...e) {
                  window.vaq || (window.vaq = []), window.vaq.push(e);
                }),
              n && (null == (r = window.va) || r.call(window, "beforeSend", n)),
              document.head.querySelector(`script[src*="${u}"]`))
            )
              return;
            let d = document.createElement("script");
            for (let [e, t] of ((d.src = u), Object.entries(s)))
              d.dataset[e] = t;
            (d.defer = !0),
              (d.onerror = () => {
                let e = l()
                  ? "Please check if any ad blockers are enabled and try again."
                  : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                console.log(
                  `[Vercel Web Analytics] Failed to load script from ${u}. ${e}`
                );
              }),
              document.head.appendChild(d);
          })(
            {
              framework: e.framework || "react",
              basePath:
                e.basePath ??
                (function () {
                  if (void 0 !== t.default && void 0 !== t.default.env)
                    return t.default.env
                      .REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                })(),
              ...(void 0 !== e.route && { disableAutoTrack: !0 }),
              ...e,
            },
            e.configString ??
              (function () {
                if (void 0 !== t.default && void 0 !== t.default.env)
                  return t.default.env
                    .REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
              })()
          );
        }, []),
        (0, r.useEffect)(() => {
          e.route &&
            e.path &&
            (function ({ route: e, path: t }) {
              var r;
              null == (r = window.va) ||
                r.call(window, "pageview", { route: e, path: t });
            })({ route: e.route, path: e.path });
        }, [e.route, e.path]),
        null
      );
    }
    function d(e) {
      let a,
        o,
        l,
        { route: i, path: d } =
          ((a = (0, n.useParams)()),
          (o = (0, n.useSearchParams)()),
          (l = (0, n.usePathname)()),
          a
            ? {
                route: (function (e, t) {
                  if (!e || !t) return e;
                  let r = e;
                  try {
                    let e = Object.entries(t);
                    for (let [t, n] of e)
                      if (!Array.isArray(n)) {
                        let e = u(n);
                        e.test(r) && (r = r.replace(e, `/[${t}]`));
                      }
                    for (let [t, n] of e)
                      if (Array.isArray(n)) {
                        let e = u(n.join("/"));
                        e.test(r) && (r = r.replace(e, `/[...${t}]`));
                      }
                    return r;
                  } catch {
                    return e;
                  }
                })(
                  l,
                  Object.keys(a).length ? a : Object.fromEntries(o.entries())
                ),
                path: l,
              }
            : { route: null, path: l });
      return r.default.createElement(s, {
        path: d,
        route: i,
        ...e,
        basePath: (function () {
          if (void 0 !== t.default && void 0 !== t.default.env)
            return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
        })(),
        configString: (function () {
          if (void 0 !== t.default && void 0 !== t.default.env)
            return '{"analytics":{"scriptSrc":"349b20e41d2af271/script.js","viewEndpoint":"349b20e41d2af271/view","eventEndpoint":"349b20e41d2af271/event","sessionEndpoint":"349b20e41d2af271/session"},"speedInsights":{"scriptSrc":"cfe5906aeee92696/script.js","endpoint":"cfe5906aeee92696/vitals"}}';
        })(),
        framework: "next",
      });
    }
    e.s([
      "Analytics",
      0,
      function (e) {
        return r.default.createElement(
          r.Suspense,
          { fallback: null },
          r.default.createElement(d, { ...e })
        );
      },
    ]);
  },
]);
