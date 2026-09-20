(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  97838,
  (e) => {
    "use strict";
    var t = e.i(88502),
      r = e.i(39926);
    e.s([
      "CopyCA",
      0,
      function ({ address: e }) {
        let [a, o] = (0, r.useState)(!1),
          s = async () => {
            await navigator.clipboard.writeText(e),
              o(!0),
              setTimeout(() => o(!1), 1500);
          };
        return (0, t.jsxs)("button", {
          onClick: s,
          className:
            "group flex w-full items-center justify-between gap-3 rounded-xl border border-amber/30 bg-black/30 px-4 py-3 text-left font-mono text-xs sm:text-sm text-amber-soft hover:border-amber/70 transition",
          title: "Copy contract address",
          children: [
            (0, t.jsx)("span", {
              className: "min-w-0 flex-1 truncate",
              children: e,
            }),
            (0, t.jsx)("span", {
              className:
                "shrink-0 rounded-md bg-amber/15 px-2 py-1 text-[11px] uppercase tracking-wide text-amber group-hover:bg-amber/25",
              children: a ? "copied" : "copy",
            }),
          ],
        });
      },
    ]);
  },
]);
