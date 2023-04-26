window.___browserSync___ = {};
___browserSync___.socketConfig = {
  reconnectionAttempts: 50,
  path: "/browser-sync/socket.io",
};
___browserSync___.socketUrl =
  "http://" + location.hostname + ":3000/browser-sync";
___browserSync___.options = {
  logLevel: "info",
  plugins: [],
  port: 3000,
  snippetOptions: {
    async: true,
    whitelist: [],
    blacklist: [],
    rule: { match: {} },
  },
  reloadDebounce: 500,
  mode: "proxy",
  scriptPaths: {
    path: "/browser-sync/browser-sync-client.js",
    versioned: "/browser-sync/browser-sync-client.js?v=2.27.10",
  },
  server: false,
  logFileChanges: true,
  reloadThrottle: 0,
  clientEvents: [
    "scroll",
    "scroll:element",
    "input:text",
    "input:toggles",
    "form:submit",
    "form:reset",
    "click",
  ],
  urls: {
    local: "http://localhost:3000",
    external: "http://192.168.131.1:3000",
  },
  hostnameSuffix: false,
  scrollElements: [],
  scheme: "http",
  startPath: null,
  single: false,
  host: null,
  codeSync: true,
  watchEvents: ["change"],
  browser: "default",
  notify: true,
  open: "local",
  reloadDelay: 0,
  minify: true,
  rewriteRules: [],
  injectFileTypes: ["css", "png", "jpg", "jpeg", "svg", "gif", "webp", "map"],
  cors: false,
  proxy: {
    target: "http://localhost:3100",
    url: {
      port: "3100",
      path: "/",
      query: null,
      auth: null,
      search: null,
      host: "localhost:3100",
      slashes: true,
      href: "http://localhost:3100/",
      hash: null,
      pathname: "/",
      hostname: "localhost",
      protocol: "http:",
    },
  },
  tagNames: {
    jpg: "img",
    css: "link",
    svg: "img",
    gif: "img",
    jpeg: "img",
    js: "script",
    png: "img",
    scss: "link",
    less: "link",
  },
  scrollRestoreTechnique: "window.name",
  watch: false,
  watchOptions: { ignoreInitial: true, cwd: "E:\\_webDev_ws\\auth_practice" },
  cwd: "E:\\_webDev_ws\\auth_practice",
  logConnections: false,
  ghostMode: {
    clicks: true,
    scroll: true,
    location: true,
    forms: { submit: true, inputs: true, toggles: true },
  },
  middleware: [null, { id: "Browsersync Proxy", route: "" }],
  ignore: [],
  injectChanges: true,
  excludedFileTypes: [
    "js",
    "css",
    "pdf",
    "map",
    "svg",
    "ico",
    "woff",
    "json",
    "eot",
    "ttf",
    "png",
    "jpg",
    "jpeg",
    "webp",
    "gif",
    "mp4",
    "mp3",
    "3gp",
    "ogg",
    "ogv",
    "webm",
    "m4a",
    "flv",
    "wmv",
    "avi",
    "swf",
    "scss",
  ],
  online: true,
  socket: {
    socketIoOptions: { log: false },
    socketIoClientConfig: { reconnectionAttempts: 50 },
    path: "/browser-sync/socket.io",
    clientPath: "/browser-sync",
    namespace: "/browser-sync",
    clients: { heartbeatTimeout: 5000 },
  },
  ui: { port: 3001 },
  logPrefix: "Browsersync",
  scrollThrottle: 0,
  reloadOnRestart: false,
  localOnly: false,
  files: { core: { globs: [], objs: [] } },
  version: "2.27.10",
  logSnippet: true,
  injectNotification: false,
  snippet:
    '<script id="__bs_script__">//<![CDATA[\n    document.write("<script async src=\'/browser-sync/browser-sync-client.js?v=2.27.10\'><\\/script>".replace("HOST", location.hostname));\n//]]></script>\n',
  timestamps: true,
  serveStatic: [],
  scrollElementMapping: [],
  scrollProportionally: true,
  xip: false,
};
if (
  location.protocol == "https:" &&
  /^http:/.test(___browserSync___.socketUrl)
) {
  ___browserSync___.socketUrl = ___browserSync___.socketUrl.replace(
    /^http:/,
    "https:"
  );
}
(() => {
  var yl = Object.create;
  var Tr = Object.defineProperty;
  var bl = Object.getOwnPropertyDescriptor;
  var gl = Object.getOwnPropertyNames;
  var _l = Object.getPrototypeOf,
    wl = Object.prototype.hasOwnProperty;
  var f = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports),
    Sl = (r, t) => {
      for (var e in t) Tr(r, e, { get: t[e], enumerable: !0 });
    },
    Ol = (r, t, e, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of gl(t))
          !wl.call(r, i) &&
            i !== e &&
            Tr(r, i, {
              get: () => t[i],
              enumerable: !(n = bl(t, i)) || n.enumerable,
            });
      return r;
    };
  var c = (r, t, e) => (
    (e = r != null ? yl(_l(r)) : {}),
    Ol(
      t || !r || !r.__esModule
        ? Tr(e, "default", { value: r, enumerable: !0 })
        : e,
      r
    )
  );
  var di = f((gy, ue) => {
    var Gn,
      Xn,
      Jn,
      Zn,
      Qn,
      ti,
      ei,
      ri,
      ni,
      ae,
      Ar,
      ii,
      oi,
      si,
      ht,
      ai,
      ci,
      ui,
      fi,
      li,
      pi,
      hi,
      mi,
      ce;
    (function (r) {
      var t =
        typeof global == "object"
          ? global
          : typeof self == "object"
          ? self
          : typeof this == "object"
          ? this
          : {};
      typeof define == "function" && define.amd
        ? define("tslib", ["exports"], function (n) {
            r(e(t, e(n)));
          })
        : typeof ue == "object" && typeof ue.exports == "object"
        ? r(e(t, e(ue.exports)))
        : r(e(t));
      function e(n, i) {
        return (
          n !== t &&
            (typeof Object.create == "function"
              ? Object.defineProperty(n, "__esModule", { value: !0 })
              : (n.__esModule = !0)),
          function (o, s) {
            return (n[o] = i ? i(o, s) : s);
          }
        );
      }
    })(function (r) {
      var t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, i) {
            n.__proto__ = i;
          }) ||
        function (n, i) {
          for (var o in i)
            Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
        };
      (Gn = function (n, i) {
        if (typeof i != "function" && i !== null)
          throw new TypeError(
            "Class extends value " + String(i) + " is not a constructor or null"
          );
        t(n, i);
        function o() {
          this.constructor = n;
        }
        n.prototype =
          i === null
            ? Object.create(i)
            : ((o.prototype = i.prototype), new o());
      }),
        (Xn =
          Object.assign ||
          function (n) {
            for (var i, o = 1, s = arguments.length; o < s; o++) {
              i = arguments[o];
              for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
            }
            return n;
          }),
        (Jn = function (n, i) {
          var o = {};
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) &&
              i.indexOf(s) < 0 &&
              (o[s] = n[s]);
          if (n != null && typeof Object.getOwnPropertySymbols == "function")
            for (
              var a = 0, s = Object.getOwnPropertySymbols(n);
              a < s.length;
              a++
            )
              i.indexOf(s[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(n, s[a]) &&
                (o[s[a]] = n[s[a]]);
          return o;
        }),
        (Zn = function (n, i, o, s) {
          var a = arguments.length,
            u =
              a < 3
                ? i
                : s === null
                ? (s = Object.getOwnPropertyDescriptor(i, o))
                : s,
            l;
          if (
            typeof Reflect == "object" &&
            typeof Reflect.decorate == "function"
          )
            u = Reflect.decorate(n, i, o, s);
          else
            for (var h = n.length - 1; h >= 0; h--)
              (l = n[h]) &&
                (u = (a < 3 ? l(u) : a > 3 ? l(i, o, u) : l(i, o)) || u);
          return a > 3 && u && Object.defineProperty(i, o, u), u;
        }),
        (Qn = function (n, i) {
          return function (o, s) {
            i(o, s, n);
          };
        }),
        (ti = function (n, i) {
          if (
            typeof Reflect == "object" &&
            typeof Reflect.metadata == "function"
          )
            return Reflect.metadata(n, i);
        }),
        (ei = function (n, i, o, s) {
          function a(u) {
            return u instanceof o
              ? u
              : new o(function (l) {
                  l(u);
                });
          }
          return new (o || (o = Promise))(function (u, l) {
            function h(C) {
              try {
                m(s.next(C));
              } catch (R) {
                l(R);
              }
            }
            function _(C) {
              try {
                m(s.throw(C));
              } catch (R) {
                l(R);
              }
            }
            function m(C) {
              C.done ? u(C.value) : a(C.value).then(h, _);
            }
            m((s = s.apply(n, i || [])).next());
          });
        }),
        (ri = function (n, i) {
          var o = {
              label: 0,
              sent: function () {
                if (u[0] & 1) throw u[1];
                return u[1];
              },
              trys: [],
              ops: [],
            },
            s,
            a,
            u,
            l;
          return (
            (l = { next: h(0), throw: h(1), return: h(2) }),
            typeof Symbol == "function" &&
              (l[Symbol.iterator] = function () {
                return this;
              }),
            l
          );
          function h(m) {
            return function (C) {
              return _([m, C]);
            };
          }
          function _(m) {
            if (s) throw new TypeError("Generator is already executing.");
            for (; o; )
              try {
                if (
                  ((s = 1),
                  a &&
                    (u =
                      m[0] & 2
                        ? a.return
                        : m[0]
                        ? a.throw || ((u = a.return) && u.call(a), 0)
                        : a.next) &&
                    !(u = u.call(a, m[1])).done)
                )
                  return u;
                switch (((a = 0), u && (m = [m[0] & 2, u.value]), m[0])) {
                  case 0:
                  case 1:
                    u = m;
                    break;
                  case 4:
                    return o.label++, { value: m[1], done: !1 };
                  case 5:
                    o.label++, (a = m[1]), (m = [0]);
                    continue;
                  case 7:
                    (m = o.ops.pop()), o.trys.pop();
                    continue;
                  default:
                    if (
                      ((u = o.trys),
                      !(u = u.length > 0 && u[u.length - 1]) &&
                        (m[0] === 6 || m[0] === 2))
                    ) {
                      o = 0;
                      continue;
                    }
                    if (m[0] === 3 && (!u || (m[1] > u[0] && m[1] < u[3]))) {
                      o.label = m[1];
                      break;
                    }
                    if (m[0] === 6 && o.label < u[1]) {
                      (o.label = u[1]), (u = m);
                      break;
                    }
                    if (u && o.label < u[2]) {
                      (o.label = u[2]), o.ops.push(m);
                      break;
                    }
                    u[2] && o.ops.pop(), o.trys.pop();
                    continue;
                }
                m = i.call(n, o);
              } catch (C) {
                (m = [6, C]), (a = 0);
              } finally {
                s = u = 0;
              }
            if (m[0] & 5) throw m[1];
            return { value: m[0] ? m[1] : void 0, done: !0 };
          }
        }),
        (ni = function (n, i) {
          for (var o in n)
            o !== "default" &&
              !Object.prototype.hasOwnProperty.call(i, o) &&
              ce(i, n, o);
        }),
        (ce = Object.create
          ? function (n, i, o, s) {
              s === void 0 && (s = o),
                Object.defineProperty(n, s, {
                  enumerable: !0,
                  get: function () {
                    return i[o];
                  },
                });
            }
          : function (n, i, o, s) {
              s === void 0 && (s = o), (n[s] = i[o]);
            }),
        (ae = function (n) {
          var i = typeof Symbol == "function" && Symbol.iterator,
            o = i && n[i],
            s = 0;
          if (o) return o.call(n);
          if (n && typeof n.length == "number")
            return {
              next: function () {
                return (
                  n && s >= n.length && (n = void 0),
                  { value: n && n[s++], done: !n }
                );
              },
            };
          throw new TypeError(
            i ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        }),
        (Ar = function (n, i) {
          var o = typeof Symbol == "function" && n[Symbol.iterator];
          if (!o) return n;
          var s = o.call(n),
            a,
            u = [],
            l;
          try {
            for (; (i === void 0 || i-- > 0) && !(a = s.next()).done; )
              u.push(a.value);
          } catch (h) {
            l = { error: h };
          } finally {
            try {
              a && !a.done && (o = s.return) && o.call(s);
            } finally {
              if (l) throw l.error;
            }
          }
          return u;
        }),
        (ii = function () {
          for (var n = [], i = 0; i < arguments.length; i++)
            n = n.concat(Ar(arguments[i]));
          return n;
        }),
        (oi = function () {
          for (var n = 0, i = 0, o = arguments.length; i < o; i++)
            n += arguments[i].length;
          for (var s = Array(n), a = 0, i = 0; i < o; i++)
            for (var u = arguments[i], l = 0, h = u.length; l < h; l++, a++)
              s[a] = u[l];
          return s;
        }),
        (si = function (n, i, o) {
          if (o || arguments.length === 2)
            for (var s = 0, a = i.length, u; s < a; s++)
              (u || !(s in i)) &&
                (u || (u = Array.prototype.slice.call(i, 0, s)), (u[s] = i[s]));
          return n.concat(u || Array.prototype.slice.call(i));
        }),
        (ht = function (n) {
          return this instanceof ht ? ((this.v = n), this) : new ht(n);
        }),
        (ai = function (n, i, o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var s = o.apply(n, i || []),
            a,
            u = [];
          return (
            (a = {}),
            l("next"),
            l("throw"),
            l("return"),
            (a[Symbol.asyncIterator] = function () {
              return this;
            }),
            a
          );
          function l(p) {
            s[p] &&
              (a[p] = function (y) {
                return new Promise(function (b, d) {
                  u.push([p, y, b, d]) > 1 || h(p, y);
                });
              });
          }
          function h(p, y) {
            try {
              _(s[p](y));
            } catch (b) {
              R(u[0][3], b);
            }
          }
          function _(p) {
            p.value instanceof ht
              ? Promise.resolve(p.value.v).then(m, C)
              : R(u[0][2], p);
          }
          function m(p) {
            h("next", p);
          }
          function C(p) {
            h("throw", p);
          }
          function R(p, y) {
            p(y), u.shift(), u.length && h(u[0][0], u[0][1]);
          }
        }),
        (ci = function (n) {
          var i, o;
          return (
            (i = {}),
            s("next"),
            s("throw", function (a) {
              throw a;
            }),
            s("return"),
            (i[Symbol.iterator] = function () {
              return this;
            }),
            i
          );
          function s(a, u) {
            i[a] = n[a]
              ? function (l) {
                  return (o = !o)
                    ? { value: ht(n[a](l)), done: a === "return" }
                    : u
                    ? u(l)
                    : l;
                }
              : u;
          }
        }),
        (ui = function (n) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var i = n[Symbol.asyncIterator],
            o;
          return i
            ? i.call(n)
            : ((n = typeof ae == "function" ? ae(n) : n[Symbol.iterator]()),
              (o = {}),
              s("next"),
              s("throw"),
              s("return"),
              (o[Symbol.asyncIterator] = function () {
                return this;
              }),
              o);
          function s(u) {
            o[u] =
              n[u] &&
              function (l) {
                return new Promise(function (h, _) {
                  (l = n[u](l)), a(h, _, l.done, l.value);
                });
              };
          }
          function a(u, l, h, _) {
            Promise.resolve(_).then(function (m) {
              u({ value: m, done: h });
            }, l);
          }
        }),
        (fi = function (n, i) {
          return (
            Object.defineProperty
              ? Object.defineProperty(n, "raw", { value: i })
              : (n.raw = i),
            n
          );
        });
      var e = Object.create
        ? function (n, i) {
            Object.defineProperty(n, "default", { enumerable: !0, value: i });
          }
        : function (n, i) {
            n.default = i;
          };
      (li = function (n) {
        if (n && n.__esModule) return n;
        var i = {};
        if (n != null)
          for (var o in n)
            o !== "default" &&
              Object.prototype.hasOwnProperty.call(n, o) &&
              ce(i, n, o);
        return e(i, n), i;
      }),
        (pi = function (n) {
          return n && n.__esModule ? n : { default: n };
        }),
        (hi = function (n, i, o, s) {
          if (o === "a" && !s)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if (typeof i == "function" ? n !== i || !s : !i.has(n))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return o === "m" ? s : o === "a" ? s.call(n) : s ? s.value : i.get(n);
        }),
        (mi = function (n, i, o, s, a) {
          if (s === "m") throw new TypeError("Private method is not writable");
          if (s === "a" && !a)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if (typeof i == "function" ? n !== i || !a : !i.has(n))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return s === "a" ? a.call(n, o) : a ? (a.value = o) : i.set(n, o), o;
        }),
        r("__extends", Gn),
        r("__assign", Xn),
        r("__rest", Jn),
        r("__decorate", Zn),
        r("__param", Qn),
        r("__metadata", ti),
        r("__awaiter", ei),
        r("__generator", ri),
        r("__exportStar", ni),
        r("__createBinding", ce),
        r("__values", ae),
        r("__read", Ar),
        r("__spread", ii),
        r("__spreadArrays", oi),
        r("__spreadArray", si),
        r("__await", ht),
        r("__asyncGenerator", ai),
        r("__asyncDelegator", ci),
        r("__asyncValues", ui),
        r("__makeTemplateObject", fi),
        r("__importStar", li),
        r("__importDefault", pi),
        r("__classPrivateFieldGet", hi),
        r("__classPrivateFieldSet", mi);
    });
  });
  var z = f((bi) => {
    "use strict";
    var xl = typeof window < "u" && window,
      El =
        typeof self < "u" &&
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        self,
      kl = typeof global < "u" && global,
      yi = xl || kl || El;
    bi.root = yi;
    (function () {
      if (!yi)
        throw new Error(
          "RxJS could not find any global context (window, self, global)"
        );
    })();
  });
  var fe = f((gi) => {
    "use strict";
    function Tl(r) {
      return typeof r == "function";
    }
    gi.isFunction = Tl;
  });
  var At = f((_i) => {
    "use strict";
    _i.isArray =
      Array.isArray ||
      function (r) {
        return r && typeof r.length == "number";
      };
  });
  var Cr = f((wi) => {
    "use strict";
    function Al(r) {
      return r != null && typeof r == "object";
    }
    wi.isObject = Al;
  });
  var Ct = f((Si) => {
    "use strict";
    Si.errorObject = { e: {} };
  });
  var le = f((Ei) => {
    "use strict";
    var Oi = Ct(),
      xi;
    function Cl() {
      try {
        return xi.apply(this, arguments);
      } catch (r) {
        return (Oi.errorObject.e = r), Oi.errorObject;
      }
    }
    function Rl(r) {
      return (xi = r), Cl;
    }
    Ei.tryCatch = Rl;
  });
  var ki = f((pe) => {
    "use strict";
    var Nl =
        (pe && pe.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      Il = (function (r) {
        Nl(t, r);
        function t(e) {
          r.call(this), (this.errors = e);
          var n = Error.call(
            this,
            e
              ? e.length +
                  ` errors occurred during unsubscription:
  ` +
                  e.map(function (i, o) {
                    return o + 1 + ") " + i.toString();
                  }).join(`
  `)
              : ""
          );
          (this.name = n.name = "UnsubscriptionError"),
            (this.stack = n.stack),
            (this.message = n.message);
        }
        return t;
      })(Error);
    pe.UnsubscriptionError = Il;
  });
  var rt = f((Ci) => {
    "use strict";
    var Pl = At(),
      ql = Cr(),
      Bl = fe(),
      Ti = le(),
      mt = Ct(),
      he = ki(),
      jl = (function () {
        function r(t) {
          (this.closed = !1),
            (this._parent = null),
            (this._parents = null),
            (this._subscriptions = null),
            t && (this._unsubscribe = t);
        }
        return (
          (r.prototype.unsubscribe = function () {
            var t = !1,
              e;
            if (!this.closed) {
              var n = this,
                i = n._parent,
                o = n._parents,
                s = n._unsubscribe,
                a = n._subscriptions;
              (this.closed = !0),
                (this._parent = null),
                (this._parents = null),
                (this._subscriptions = null);
              for (var u = -1, l = o ? o.length : 0; i; )
                i.remove(this), (i = (++u < l && o[u]) || null);
              if (Bl.isFunction(s)) {
                var h = Ti.tryCatch(s).call(this);
                h === mt.errorObject &&
                  ((t = !0),
                  (e =
                    e ||
                    (mt.errorObject.e instanceof he.UnsubscriptionError
                      ? Ai(mt.errorObject.e.errors)
                      : [mt.errorObject.e])));
              }
              if (Pl.isArray(a))
                for (u = -1, l = a.length; ++u < l; ) {
                  var _ = a[u];
                  if (ql.isObject(_)) {
                    var h = Ti.tryCatch(_.unsubscribe).call(_);
                    if (h === mt.errorObject) {
                      (t = !0), (e = e || []);
                      var m = mt.errorObject.e;
                      m instanceof he.UnsubscriptionError
                        ? (e = e.concat(Ai(m.errors)))
                        : e.push(m);
                    }
                  }
                }
              if (t) throw new he.UnsubscriptionError(e);
            }
          }),
          (r.prototype.add = function (t) {
            if (!t || t === r.EMPTY) return r.EMPTY;
            if (t === this) return this;
            var e = t;
            switch (typeof t) {
              case "function":
                e = new r(t);
              case "object":
                if (e.closed || typeof e.unsubscribe != "function") return e;
                if (this.closed) return e.unsubscribe(), e;
                if (typeof e._addParent != "function") {
                  var n = e;
                  (e = new r()), (e._subscriptions = [n]);
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + t + " added to Subscription."
                );
            }
            var i = this._subscriptions || (this._subscriptions = []);
            return i.push(e), e._addParent(this), e;
          }),
          (r.prototype.remove = function (t) {
            var e = this._subscriptions;
            if (e) {
              var n = e.indexOf(t);
              n !== -1 && e.splice(n, 1);
            }
          }),
          (r.prototype._addParent = function (t) {
            var e = this,
              n = e._parent,
              i = e._parents;
            !n || n === t
              ? (this._parent = t)
              : i
              ? i.indexOf(t) === -1 && i.push(t)
              : (this._parents = [t]);
          }),
          (r.EMPTY = (function (t) {
            return (t.closed = !0), t;
          })(new r())),
          r
        );
      })();
    Ci.Subscription = jl;
    function Ai(r) {
      return r.reduce(function (t, e) {
        return t.concat(e instanceof he.UnsubscriptionError ? e.errors : e);
      }, []);
    }
  });
  var Rr = f((Ri) => {
    "use strict";
    Ri.empty = {
      closed: !0,
      next: function (r) {},
      error: function (r) {
        throw r;
      },
      complete: function () {},
    };
  });
  var de = f((me) => {
    "use strict";
    var Ll = z(),
      Nr = Ll.root.Symbol;
    me.rxSubscriber =
      typeof Nr == "function" && typeof Nr.for == "function"
        ? Nr.for("rxSubscriber")
        : "@@rxSubscriber";
    me.$$rxSubscriber = me.rxSubscriber;
  });
  var P = f((ve) => {
    "use strict";
    var Pi =
        (ve && ve.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      Ni = fe(),
      Ml = rt(),
      Ir = Rr(),
      Pr = de(),
      qr = (function (r) {
        Pi(t, r);
        function t(e, n, i) {
          switch (
            (r.call(this),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = Ir.empty;
              break;
            case 1:
              if (!e) {
                this.destination = Ir.empty;
                break;
              }
              if (typeof e == "object") {
                if (Fl(e)) {
                  var o = e[Pr.rxSubscriber]();
                  (this.syncErrorThrowable = o.syncErrorThrowable),
                    (this.destination = o),
                    o.add(this);
                } else
                  (this.syncErrorThrowable = !0),
                    (this.destination = new Ii(this, e));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new Ii(this, e, n, i));
              break;
          }
        }
        return (
          (t.prototype[Pr.rxSubscriber] = function () {
            return this;
          }),
          (t.create = function (e, n, i) {
            var o = new t(e, n, i);
            return (o.syncErrorThrowable = !1), o;
          }),
          (t.prototype.next = function (e) {
            this.isStopped || this._next(e);
          }),
          (t.prototype.error = function (e) {
            this.isStopped || ((this.isStopped = !0), this._error(e));
          }),
          (t.prototype.complete = function () {
            this.isStopped || ((this.isStopped = !0), this._complete());
          }),
          (t.prototype.unsubscribe = function () {
            this.closed ||
              ((this.isStopped = !0), r.prototype.unsubscribe.call(this));
          }),
          (t.prototype._next = function (e) {
            this.destination.next(e);
          }),
          (t.prototype._error = function (e) {
            this.destination.error(e), this.unsubscribe();
          }),
          (t.prototype._complete = function () {
            this.destination.complete(), this.unsubscribe();
          }),
          (t.prototype._unsubscribeAndRecycle = function () {
            var e = this,
              n = e._parent,
              i = e._parents;
            return (
              (this._parent = null),
              (this._parents = null),
              this.unsubscribe(),
              (this.closed = !1),
              (this.isStopped = !1),
              (this._parent = n),
              (this._parents = i),
              this
            );
          }),
          t
        );
      })(Ml.Subscription);
    ve.Subscriber = qr;
    var Ii = (function (r) {
      Pi(t, r);
      function t(e, n, i, o) {
        r.call(this), (this._parentSubscriber = e);
        var s,
          a = this;
        Ni.isFunction(n)
          ? (s = n)
          : n &&
            ((s = n.next),
            (i = n.error),
            (o = n.complete),
            n !== Ir.empty &&
              ((a = Object.create(n)),
              Ni.isFunction(a.unsubscribe) && this.add(a.unsubscribe.bind(a)),
              (a.unsubscribe = this.unsubscribe.bind(this)))),
          (this._context = a),
          (this._next = s),
          (this._error = i),
          (this._complete = o);
      }
      return (
        (t.prototype.next = function (e) {
          if (!this.isStopped && this._next) {
            var n = this._parentSubscriber;
            n.syncErrorThrowable
              ? this.__tryOrSetError(n, this._next, e) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, e);
          }
        }),
        (t.prototype.error = function (e) {
          if (!this.isStopped) {
            var n = this._parentSubscriber;
            if (this._error)
              n.syncErrorThrowable
                ? (this.__tryOrSetError(n, this._error, e), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
            else if (n.syncErrorThrowable)
              (n.syncErrorValue = e),
                (n.syncErrorThrown = !0),
                this.unsubscribe();
            else throw (this.unsubscribe(), e);
          }
        }),
        (t.prototype.complete = function () {
          var e = this;
          if (!this.isStopped) {
            var n = this._parentSubscriber;
            if (this._complete) {
              var i = function () {
                return e._complete.call(e._context);
              };
              n.syncErrorThrowable
                ? (this.__tryOrSetError(n, i), this.unsubscribe())
                : (this.__tryOrUnsub(i), this.unsubscribe());
            } else this.unsubscribe();
          }
        }),
        (t.prototype.__tryOrUnsub = function (e, n) {
          try {
            e.call(this._context, n);
          } catch (i) {
            throw (this.unsubscribe(), i);
          }
        }),
        (t.prototype.__tryOrSetError = function (e, n, i) {
          try {
            n.call(this._context, i);
          } catch (o) {
            return (e.syncErrorValue = o), (e.syncErrorThrown = !0), !0;
          }
          return !1;
        }),
        (t.prototype._unsubscribe = function () {
          var e = this._parentSubscriber;
          (this._context = null),
            (this._parentSubscriber = null),
            e.unsubscribe();
        }),
        t
      );
    })(qr);
    function Fl(r) {
      return (
        r instanceof qr || ("syncErrorThrowable" in r && r[Pr.rxSubscriber])
      );
    }
  });
  var ji = f((Bi) => {
    "use strict";
    var Br = P(),
      qi = de(),
      Dl = Rr();
    function $l(r, t, e) {
      if (r) {
        if (r instanceof Br.Subscriber) return r;
        if (r[qi.rxSubscriber]) return r[qi.rxSubscriber]();
      }
      return !r && !t && !e
        ? new Br.Subscriber(Dl.empty)
        : new Br.Subscriber(r, t, e);
    }
    Bi.toSubscriber = $l;
  });
  var ye = f((Rt) => {
    "use strict";
    var Ul = z();
    function Li(r) {
      var t,
        e = r.Symbol;
      return (
        typeof e == "function"
          ? e.observable
            ? (t = e.observable)
            : ((t = e("observable")), (e.observable = t))
          : (t = "@@observable"),
        t
      );
    }
    Rt.getSymbolObservable = Li;
    Rt.observable = Li(Ul.root);
    Rt.$$observable = Rt.observable;
  });
  var jr = f((Mi) => {
    "use strict";
    function Vl() {}
    Mi.noop = Vl;
  });
  var Di = f((Lr) => {
    "use strict";
    var Hl = jr();
    function Wl() {
      for (var r = [], t = 0; t < arguments.length; t++)
        r[t - 0] = arguments[t];
      return Fi(r);
    }
    Lr.pipe = Wl;
    function Fi(r) {
      return r
        ? r.length === 1
          ? r[0]
          : function (e) {
              return r.reduce(function (n, i) {
                return i(n);
              }, e);
            }
        : Hl.noop;
    }
    Lr.pipeFromArray = Fi;
  });
  var N = f(($i) => {
    "use strict";
    var W = z(),
      Yl = ji(),
      Kl = ye(),
      zl = Di(),
      Gl = (function () {
        function r(t) {
          (this._isScalar = !1), t && (this._subscribe = t);
        }
        return (
          (r.prototype.lift = function (t) {
            var e = new r();
            return (e.source = this), (e.operator = t), e;
          }),
          (r.prototype.subscribe = function (t, e, n) {
            var i = this.operator,
              o = Yl.toSubscriber(t, e, n);
            if (
              (i
                ? i.call(o, this.source)
                : o.add(
                    this.source || !o.syncErrorThrowable
                      ? this._subscribe(o)
                      : this._trySubscribe(o)
                  ),
              o.syncErrorThrowable &&
                ((o.syncErrorThrowable = !1), o.syncErrorThrown))
            )
              throw o.syncErrorValue;
            return o;
          }),
          (r.prototype._trySubscribe = function (t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              (t.syncErrorThrown = !0), (t.syncErrorValue = e), t.error(e);
            }
          }),
          (r.prototype.forEach = function (t, e) {
            var n = this;
            if (
              (e ||
                (W.root.Rx && W.root.Rx.config && W.root.Rx.config.Promise
                  ? (e = W.root.Rx.config.Promise)
                  : W.root.Promise && (e = W.root.Promise)),
              !e)
            )
              throw new Error("no Promise impl found");
            return new e(function (i, o) {
              var s;
              s = n.subscribe(
                function (a) {
                  if (s)
                    try {
                      t(a);
                    } catch (u) {
                      o(u), s.unsubscribe();
                    }
                  else t(a);
                },
                o,
                i
              );
            });
          }),
          (r.prototype._subscribe = function (t) {
            return this.source.subscribe(t);
          }),
          (r.prototype[Kl.observable] = function () {
            return this;
          }),
          (r.prototype.pipe = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e - 0] = arguments[e];
            return t.length === 0 ? this : zl.pipeFromArray(t)(this);
          }),
          (r.prototype.toPromise = function (t) {
            var e = this;
            if (
              (t ||
                (W.root.Rx && W.root.Rx.config && W.root.Rx.config.Promise
                  ? (t = W.root.Rx.config.Promise)
                  : W.root.Promise && (t = W.root.Promise)),
              !t)
            )
              throw new Error("no Promise impl found");
            return new t(function (n, i) {
              var o;
              e.subscribe(
                function (s) {
                  return (o = s);
                },
                function (s) {
                  return i(s);
                },
                function () {
                  return n(o);
                }
              );
            });
          }),
          (r.create = function (t) {
            return new r(t);
          }),
          r
        );
      })();
    $i.Observable = Gl;
  });
  var ge = f((be) => {
    "use strict";
    var Xl =
        (be && be.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      Jl = N(),
      Zl = (function (r) {
        Xl(t, r);
        function t(e, n) {
          r.call(this),
            (this.value = e),
            (this.scheduler = n),
            (this._isScalar = !0),
            n && (this._isScalar = !1);
        }
        return (
          (t.create = function (e, n) {
            return new t(e, n);
          }),
          (t.dispatch = function (e) {
            var n = e.done,
              i = e.value,
              o = e.subscriber;
            if (n) {
              o.complete();
              return;
            }
            o.next(i), !o.closed && ((e.done = !0), this.schedule(e));
          }),
          (t.prototype._subscribe = function (e) {
            var n = this.value,
              i = this.scheduler;
            if (i)
              return i.schedule(t.dispatch, 0, {
                done: !1,
                value: n,
                subscriber: e,
              });
            e.next(n), e.closed || e.complete();
          }),
          t
        );
      })(Jl.Observable);
    be.ScalarObservable = Zl;
  });
  var Nt = f((_e) => {
    "use strict";
    var Ql =
        (_e && _e.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      tp = N(),
      ep = (function (r) {
        Ql(t, r);
        function t(e) {
          r.call(this), (this.scheduler = e);
        }
        return (
          (t.create = function (e) {
            return new t(e);
          }),
          (t.dispatch = function (e) {
            var n = e.subscriber;
            n.complete();
          }),
          (t.prototype._subscribe = function (e) {
            var n = this.scheduler;
            if (n) return n.schedule(t.dispatch, 0, { subscriber: e });
            e.complete();
          }),
          t
        );
      })(tp.Observable);
    _e.EmptyObservable = ep;
  });
  var dt = f((Ui) => {
    "use strict";
    function rp(r) {
      return r && typeof r.schedule == "function";
    }
    Ui.isScheduler = rp;
  });
  var vt = f((we) => {
    "use strict";
    var np =
        (we && we.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      ip = N(),
      op = ge(),
      sp = Nt(),
      ap = dt(),
      cp = (function (r) {
        np(t, r);
        function t(e, n) {
          r.call(this),
            (this.array = e),
            (this.scheduler = n),
            !n &&
              e.length === 1 &&
              ((this._isScalar = !0), (this.value = e[0]));
        }
        return (
          (t.create = function (e, n) {
            return new t(e, n);
          }),
          (t.of = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n - 0] = arguments[n];
            var i = e[e.length - 1];
            ap.isScheduler(i) ? e.pop() : (i = null);
            var o = e.length;
            return o > 1
              ? new t(e, i)
              : o === 1
              ? new op.ScalarObservable(e[0], i)
              : new sp.EmptyObservable(i);
          }),
          (t.dispatch = function (e) {
            var n = e.array,
              i = e.index,
              o = e.count,
              s = e.subscriber;
            if (i >= o) {
              s.complete();
              return;
            }
            s.next(n[i]), !s.closed && ((e.index = i + 1), this.schedule(e));
          }),
          (t.prototype._subscribe = function (e) {
            var n = 0,
              i = this.array,
              o = i.length,
              s = this.scheduler;
            if (s)
              return s.schedule(t.dispatch, 0, {
                array: i,
                index: n,
                count: o,
                subscriber: e,
              });
            for (var a = 0; a < o && !e.closed; a++) e.next(i[a]);
            e.complete();
          }),
          t
        );
      })(ip.Observable);
    we.ArrayObservable = cp;
  });
  var It = f((Se) => {
    "use strict";
    var up =
        (Se && Se.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      fp = P(),
      lp = (function (r) {
        up(t, r);
        function t() {
          r.apply(this, arguments);
        }
        return (
          (t.prototype.notifyNext = function (e, n, i, o, s) {
            this.destination.next(n);
          }),
          (t.prototype.notifyError = function (e, n) {
            this.destination.error(e);
          }),
          (t.prototype.notifyComplete = function (e) {
            this.destination.complete();
          }),
          t
        );
      })(fp.Subscriber);
    Se.OuterSubscriber = lp;
  });
  var Mr = f((Vi) => {
    "use strict";
    Vi.isArrayLike = function (r) {
      return r && typeof r.length == "number";
    };
  });
  var Fr = f((Hi) => {
    "use strict";
    function pp(r) {
      return (
        r && typeof r.subscribe != "function" && typeof r.then == "function"
      );
    }
    Hi.isPromise = pp;
  });
  var qt = f((Pt) => {
    "use strict";
    var hp = z();
    function Wi(r) {
      var t = r.Symbol;
      if (typeof t == "function")
        return t.iterator || (t.iterator = t("iterator polyfill")), t.iterator;
      var e = r.Set;
      if (e && typeof new e()["@@iterator"] == "function") return "@@iterator";
      var n = r.Map;
      if (n)
        for (
          var i = Object.getOwnPropertyNames(n.prototype), o = 0;
          o < i.length;
          ++o
        ) {
          var s = i[o];
          if (
            s !== "entries" &&
            s !== "size" &&
            n.prototype[s] === n.prototype.entries
          )
            return s;
        }
      return "@@iterator";
    }
    Pt.symbolIteratorPonyfill = Wi;
    Pt.iterator = Wi(hp.root);
    Pt.$$iterator = Pt.iterator;
  });
  var Yi = f((Oe) => {
    "use strict";
    var mp =
        (Oe && Oe.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      dp = P(),
      vp = (function (r) {
        mp(t, r);
        function t(e, n, i) {
          r.call(this),
            (this.parent = e),
            (this.outerValue = n),
            (this.outerIndex = i),
            (this.index = 0);
        }
        return (
          (t.prototype._next = function (e) {
            this.parent.notifyNext(
              this.outerValue,
              e,
              this.outerIndex,
              this.index++,
              this
            );
          }),
          (t.prototype._error = function (e) {
            this.parent.notifyError(e, this), this.unsubscribe();
          }),
          (t.prototype._complete = function () {
            this.parent.notifyComplete(this), this.unsubscribe();
          }),
          t
        );
      })(dp.Subscriber);
    Oe.InnerSubscriber = vp;
  });
  var Bt = f((Xi) => {
    "use strict";
    var yp = z(),
      bp = Mr(),
      gp = Fr(),
      _p = Cr(),
      wp = N(),
      Ki = qt(),
      zi = Yi(),
      Gi = ye();
    function Sp(r, t, e, n) {
      var i = new zi.InnerSubscriber(r, e, n);
      if (i.closed) return null;
      if (t instanceof wp.Observable)
        return t._isScalar
          ? (i.next(t.value), i.complete(), null)
          : ((i.syncErrorThrowable = !0), t.subscribe(i));
      if (bp.isArrayLike(t)) {
        for (var o = 0, s = t.length; o < s && !i.closed; o++) i.next(t[o]);
        i.closed || i.complete();
      } else {
        if (gp.isPromise(t))
          return (
            t
              .then(
                function (m) {
                  i.closed || (i.next(m), i.complete());
                },
                function (m) {
                  return i.error(m);
                }
              )
              .then(null, function (m) {
                yp.root.setTimeout(function () {
                  throw m;
                });
              }),
            i
          );
        if (t && typeof t[Ki.iterator] == "function") {
          var a = t[Ki.iterator]();
          do {
            var u = a.next();
            if (u.done) {
              i.complete();
              break;
            }
            if ((i.next(u.value), i.closed)) break;
          } while (!0);
        } else if (t && typeof t[Gi.observable] == "function") {
          var l = t[Gi.observable]();
          if (typeof l.subscribe != "function")
            i.error(
              new TypeError(
                "Provided object does not correctly implement Symbol.observable"
              )
            );
          else return l.subscribe(new zi.InnerSubscriber(r, e, n));
        } else {
          var h = _p.isObject(t) ? "an invalid object" : "'" + t + "'",
            _ =
              "You provided " +
              h +
              " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
          i.error(new TypeError(_));
        }
      }
      return null;
    }
    Xi.subscribeToResult = Sp;
  });
  var eo = f((ct) => {
    "use strict";
    var Ji =
        (ct && ct.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      Op = vt(),
      xp = At(),
      Ep = P(),
      kp = It(),
      Tp = Bt(),
      xe = qt();
    function Ap() {
      for (var r = [], t = 0; t < arguments.length; t++)
        r[t - 0] = arguments[t];
      return function (n) {
        return n.lift.call(Zi.apply(void 0, [n].concat(r)));
      };
    }
    ct.zip = Ap;
    function Zi() {
      for (var r = [], t = 0; t < arguments.length; t++)
        r[t - 0] = arguments[t];
      var e = r[r.length - 1];
      return (
        typeof e == "function" && r.pop(),
        new Op.ArrayObservable(r).lift(new Qi(e))
      );
    }
    ct.zipStatic = Zi;
    var Qi = (function () {
      function r(t) {
        this.project = t;
      }
      return (
        (r.prototype.call = function (t, e) {
          return e.subscribe(new to(t, this.project));
        }),
        r
      );
    })();
    ct.ZipOperator = Qi;
    var to = (function (r) {
      Ji(t, r);
      function t(e, n, i) {
        i === void 0 && (i = Object.create(null)),
          r.call(this, e),
          (this.iterators = []),
          (this.active = 0),
          (this.project = typeof n == "function" ? n : null),
          (this.values = i);
      }
      return (
        (t.prototype._next = function (e) {
          var n = this.iterators;
          xp.isArray(e)
            ? n.push(new Rp(e))
            : typeof e[xe.iterator] == "function"
            ? n.push(new Cp(e[xe.iterator]()))
            : n.push(new Np(this.destination, this, e));
        }),
        (t.prototype._complete = function () {
          var e = this.iterators,
            n = e.length;
          if (n === 0) {
            this.destination.complete();
            return;
          }
          this.active = n;
          for (var i = 0; i < n; i++) {
            var o = e[i];
            o.stillUnsubscribed ? this.add(o.subscribe(o, i)) : this.active--;
          }
        }),
        (t.prototype.notifyInactive = function () {
          this.active--, this.active === 0 && this.destination.complete();
        }),
        (t.prototype.checkIterators = function () {
          for (
            var e = this.iterators, n = e.length, i = this.destination, o = 0;
            o < n;
            o++
          ) {
            var s = e[o];
            if (typeof s.hasValue == "function" && !s.hasValue()) return;
          }
          for (var a = !1, u = [], o = 0; o < n; o++) {
            var s = e[o],
              l = s.next();
            if ((s.hasCompleted() && (a = !0), l.done)) {
              i.complete();
              return;
            }
            u.push(l.value);
          }
          this.project ? this._tryProject(u) : i.next(u), a && i.complete();
        }),
        (t.prototype._tryProject = function (e) {
          var n;
          try {
            n = this.project.apply(this, e);
          } catch (i) {
            this.destination.error(i);
            return;
          }
          this.destination.next(n);
        }),
        t
      );
    })(Ep.Subscriber);
    ct.ZipSubscriber = to;
    var Cp = (function () {
        function r(t) {
          (this.iterator = t), (this.nextResult = t.next());
        }
        return (
          (r.prototype.hasValue = function () {
            return !0;
          }),
          (r.prototype.next = function () {
            var t = this.nextResult;
            return (this.nextResult = this.iterator.next()), t;
          }),
          (r.prototype.hasCompleted = function () {
            var t = this.nextResult;
            return t && t.done;
          }),
          r
        );
      })(),
      Rp = (function () {
        function r(t) {
          (this.array = t),
            (this.index = 0),
            (this.length = 0),
            (this.length = t.length);
        }
        return (
          (r.prototype[xe.iterator] = function () {
            return this;
          }),
          (r.prototype.next = function (t) {
            var e = this.index++,
              n = this.array;
            return e < this.length
              ? { value: n[e], done: !1 }
              : { value: null, done: !0 };
          }),
          (r.prototype.hasValue = function () {
            return this.array.length > this.index;
          }),
          (r.prototype.hasCompleted = function () {
            return this.array.length === this.index;
          }),
          r
        );
      })(),
      Np = (function (r) {
        Ji(t, r);
        function t(e, n, i) {
          r.call(this, e),
            (this.parent = n),
            (this.observable = i),
            (this.stillUnsubscribed = !0),
            (this.buffer = []),
            (this.isComplete = !1);
        }
        return (
          (t.prototype[xe.iterator] = function () {
            return this;
          }),
          (t.prototype.next = function () {
            var e = this.buffer;
            return e.length === 0 && this.isComplete
              ? { value: null, done: !0 }
              : { value: e.shift(), done: !1 };
          }),
          (t.prototype.hasValue = function () {
            return this.buffer.length > 0;
          }),
          (t.prototype.hasCompleted = function () {
            return this.buffer.length === 0 && this.isComplete;
          }),
          (t.prototype.notifyComplete = function () {
            this.buffer.length > 0
              ? ((this.isComplete = !0), this.parent.notifyInactive())
              : this.destination.complete();
          }),
          (t.prototype.notifyNext = function (e, n, i, o, s) {
            this.buffer.push(n), this.parent.checkIterators();
          }),
          (t.prototype.subscribe = function (e, n) {
            return Tp.subscribeToResult(this, this.observable, this, n);
          }),
          t
        );
      })(kp.OuterSubscriber);
  });
  var no = f((ro) => {
    "use strict";
    var Ip = eo();
    ro.zip = Ip.zipStatic;
  });
  var Dr = f((bb, io) => {
    var Pp =
        /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
      qp = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor",
      ];
    io.exports = function (t) {
      var e = t,
        n = t.indexOf("["),
        i = t.indexOf("]");
      n != -1 &&
        i != -1 &&
        (t =
          t.substring(0, n) +
          t.substring(n, i).replace(/:/g, ";") +
          t.substring(i, t.length));
      for (var o = Pp.exec(t || ""), s = {}, a = 14; a--; )
        s[qp[a]] = o[a] || "";
      return (
        n != -1 &&
          i != -1 &&
          ((s.source = e),
          (s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":")),
          (s.authority = s.authority
            .replace("[", "")
            .replace("]", "")
            .replace(/;/g, ":")),
          (s.ipv6uri = !0)),
        (s.pathNames = Bp(s, s.path)),
        (s.queryKey = jp(s, s.query)),
        s
      );
    };
    function Bp(r, t) {
      var e = /\/{2,9}/g,
        n = t.replace(e, "/").split("/");
      return (
        (t.substr(0, 1) == "/" || t.length === 0) && n.splice(0, 1),
        t.substr(t.length - 1, 1) == "/" && n.splice(n.length - 1, 1),
        n
      );
    }
    function jp(r, t) {
      var e = {};
      return (
        t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (n, i, o) {
          i && (e[i] = o);
        }),
        e
      );
    }
  });
  var ao = f((_b, $r) => {
    try {
      $r.exports =
        typeof XMLHttpRequest < "u" &&
        "withCredentials" in new XMLHttpRequest();
    } catch {
      $r.exports = !1;
    }
  });
  var ut = f((uo) => {
    uo.Emitter = D;
    function D(r) {
      if (r) return Fp(r);
    }
    function Fp(r) {
      for (var t in D.prototype) r[t] = D.prototype[t];
      return r;
    }
    D.prototype.on = D.prototype.addEventListener = function (r, t) {
      return (
        (this._callbacks = this._callbacks || {}),
        (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(t),
        this
      );
    };
    D.prototype.once = function (r, t) {
      function e() {
        this.off(r, e), t.apply(this, arguments);
      }
      return (e.fn = t), this.on(r, e), this;
    };
    D.prototype.off =
      D.prototype.removeListener =
      D.prototype.removeAllListeners =
      D.prototype.removeEventListener =
        function (r, t) {
          if (
            ((this._callbacks = this._callbacks || {}), arguments.length == 0)
          )
            return (this._callbacks = {}), this;
          var e = this._callbacks["$" + r];
          if (!e) return this;
          if (arguments.length == 1)
            return delete this._callbacks["$" + r], this;
          for (var n, i = 0; i < e.length; i++)
            if (((n = e[i]), n === t || n.fn === t)) {
              e.splice(i, 1);
              break;
            }
          return e.length === 0 && delete this._callbacks["$" + r], this;
        };
    D.prototype.emit = function (r) {
      this._callbacks = this._callbacks || {};
      for (
        var t = new Array(arguments.length - 1),
          e = this._callbacks["$" + r],
          n = 1;
        n < arguments.length;
        n++
      )
        t[n - 1] = arguments[n];
      if (e) {
        e = e.slice(0);
        for (var n = 0, i = e.length; n < i; ++n) e[n].apply(this, t);
      }
      return this;
    };
    D.prototype.emitReserved = D.prototype.emit;
    D.prototype.listeners = function (r) {
      return (
        (this._callbacks = this._callbacks || {}),
        this._callbacks["$" + r] || []
      );
    };
    D.prototype.hasListeners = function (r) {
      return !!this.listeners(r).length;
    };
  });
  var Yr = f((Db, xo) => {
    "use strict";
    var So =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
          ""
        ),
      Ae = 64,
      Oo = {},
      _o = 0,
      nt = 0,
      wo;
    function Hr(r) {
      var t = "";
      do (t = So[r % Ae] + t), (r = Math.floor(r / Ae));
      while (r > 0);
      return t;
    }
    function Kp(r) {
      var t = 0;
      for (nt = 0; nt < r.length; nt++) t = t * Ae + Oo[r.charAt(nt)];
      return t;
    }
    function Wr() {
      var r = Hr(+new Date());
      return r !== wo ? ((_o = 0), (wo = r)) : r + "." + Hr(_o++);
    }
    for (; nt < Ae; nt++) Oo[So[nt]] = nt;
    Wr.encode = Hr;
    Wr.decode = Kp;
    xo.exports = Wr;
  });
  var Ce = f((Kr) => {
    Kr.encode = function (r) {
      var t = "";
      for (var e in r)
        r.hasOwnProperty(e) &&
          (t.length && (t += "&"),
          (t += encodeURIComponent(e) + "=" + encodeURIComponent(r[e])));
      return t;
    };
    Kr.decode = function (r) {
      for (var t = {}, e = r.split("&"), n = 0, i = e.length; n < i; n++) {
        var o = e[n].split("=");
        t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
      }
      return t;
    };
  });
  var Wo = f((Eg, Ho) => {
    Ho.exports = gt;
    function gt(r) {
      (r = r || {}),
        (this.ms = r.min || 100),
        (this.max = r.max || 1e4),
        (this.factor = r.factor || 2),
        (this.jitter = r.jitter > 0 && r.jitter <= 1 ? r.jitter : 0),
        (this.attempts = 0);
    }
    gt.prototype.duration = function () {
      var r = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var t = Math.random(),
          e = Math.floor(t * this.jitter * r);
        r = (Math.floor(t * 10) & 1) == 0 ? r - e : r + e;
      }
      return Math.min(r, this.max) | 0;
    };
    gt.prototype.reset = function () {
      this.attempts = 0;
    };
    gt.prototype.setMin = function (r) {
      this.ms = r;
    };
    gt.prototype.setMax = function (r) {
      this.max = r;
    };
    gt.prototype.setJitter = function (r) {
      this.jitter = r;
    };
  });
  var en = f((Ie) => {
    "use strict";
    var nh =
        (Ie && Ie.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      ih = (function (r) {
        nh(t, r);
        function t() {
          var e = r.call(this, "object unsubscribed");
          (this.name = e.name = "ObjectUnsubscribedError"),
            (this.stack = e.stack),
            (this.message = e.message);
        }
        return t;
      })(Error);
    Ie.ObjectUnsubscribedError = ih;
  });
  var zo = f((Pe) => {
    "use strict";
    var oh =
        (Pe && Pe.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      sh = rt(),
      ah = (function (r) {
        oh(t, r);
        function t(e, n) {
          r.call(this),
            (this.subject = e),
            (this.subscriber = n),
            (this.closed = !1);
        }
        return (
          (t.prototype.unsubscribe = function () {
            if (!this.closed) {
              this.closed = !0;
              var e = this.subject,
                n = e.observers;
              if (
                ((this.subject = null),
                !(!n || n.length === 0 || e.isStopped || e.closed))
              ) {
                var i = n.indexOf(this.subscriber);
                i !== -1 && n.splice(i, 1);
              }
            }
          }),
          t
        );
      })(sh.Subscription);
    Pe.SubjectSubscription = ah;
  });
  var Kt = f((_t) => {
    "use strict";
    var on =
        (_t && _t.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      Go = N(),
      ch = P(),
      rn = rt(),
      Yt = en(),
      uh = zo(),
      fh = de(),
      Xo = (function (r) {
        on(t, r);
        function t(e) {
          r.call(this, e), (this.destination = e);
        }
        return t;
      })(ch.Subscriber);
    _t.SubjectSubscriber = Xo;
    var Jo = (function (r) {
      on(t, r);
      function t() {
        r.call(this),
          (this.observers = []),
          (this.closed = !1),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      return (
        (t.prototype[fh.rxSubscriber] = function () {
          return new Xo(this);
        }),
        (t.prototype.lift = function (e) {
          var n = new nn(this, this);
          return (n.operator = e), n;
        }),
        (t.prototype.next = function (e) {
          if (this.closed) throw new Yt.ObjectUnsubscribedError();
          if (!this.isStopped)
            for (
              var n = this.observers, i = n.length, o = n.slice(), s = 0;
              s < i;
              s++
            )
              o[s].next(e);
        }),
        (t.prototype.error = function (e) {
          if (this.closed) throw new Yt.ObjectUnsubscribedError();
          (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
          for (
            var n = this.observers, i = n.length, o = n.slice(), s = 0;
            s < i;
            s++
          )
            o[s].error(e);
          this.observers.length = 0;
        }),
        (t.prototype.complete = function () {
          if (this.closed) throw new Yt.ObjectUnsubscribedError();
          this.isStopped = !0;
          for (
            var e = this.observers, n = e.length, i = e.slice(), o = 0;
            o < n;
            o++
          )
            i[o].complete();
          this.observers.length = 0;
        }),
        (t.prototype.unsubscribe = function () {
          (this.isStopped = !0), (this.closed = !0), (this.observers = null);
        }),
        (t.prototype._trySubscribe = function (e) {
          if (this.closed) throw new Yt.ObjectUnsubscribedError();
          return r.prototype._trySubscribe.call(this, e);
        }),
        (t.prototype._subscribe = function (e) {
          if (this.closed) throw new Yt.ObjectUnsubscribedError();
          return this.hasError
            ? (e.error(this.thrownError), rn.Subscription.EMPTY)
            : this.isStopped
            ? (e.complete(), rn.Subscription.EMPTY)
            : (this.observers.push(e), new uh.SubjectSubscription(this, e));
        }),
        (t.prototype.asObservable = function () {
          var e = new Go.Observable();
          return (e.source = this), e;
        }),
        (t.create = function (e, n) {
          return new nn(e, n);
        }),
        t
      );
    })(Go.Observable);
    _t.Subject = Jo;
    var nn = (function (r) {
      on(t, r);
      function t(e, n) {
        r.call(this), (this.destination = e), (this.source = n);
      }
      return (
        (t.prototype.next = function (e) {
          var n = this.destination;
          n && n.next && n.next(e);
        }),
        (t.prototype.error = function (e) {
          var n = this.destination;
          n && n.error && this.destination.error(e);
        }),
        (t.prototype.complete = function () {
          var e = this.destination;
          e && e.complete && this.destination.complete();
        }),
        (t.prototype._subscribe = function (e) {
          var n = this.source;
          return n ? this.source.subscribe(e) : rn.Subscription.EMPTY;
        }),
        t
      );
    })(Jo);
    _t.AnonymousSubject = nn;
  });
  var it = f((qe) => {
    "use strict";
    var lh =
        (qe && qe.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      ph = Kt(),
      hh = en(),
      mh = (function (r) {
        lh(t, r);
        function t(e) {
          r.call(this), (this._value = e);
        }
        return (
          Object.defineProperty(t.prototype, "value", {
            get: function () {
              return this.getValue();
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype._subscribe = function (e) {
            var n = r.prototype._subscribe.call(this, e);
            return n && !n.closed && e.next(this._value), n;
          }),
          (t.prototype.getValue = function () {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new hh.ObjectUnsubscribedError();
            return this._value;
          }),
          (t.prototype.next = function (e) {
            r.prototype.next.call(this, (this._value = e));
          }),
          t
        );
      })(ph.Subject);
    qe.BehaviorSubject = mh;
  });
  var J = f((Zo) => {
    "use strict";
    var dh = vt();
    Zo.of = dh.ArrayObservable.of;
  });
  var sn = f((Be) => {
    "use strict";
    var vh =
        (Be && Be.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      yh = P();
    function bh() {
      return function (t) {
        return t.lift(new gh(t));
      };
    }
    Be.refCount = bh;
    var gh = (function () {
        function r(t) {
          this.connectable = t;
        }
        return (
          (r.prototype.call = function (t, e) {
            var n = this.connectable;
            n._refCount++;
            var i = new _h(t, n),
              o = e.subscribe(i);
            return i.closed || (i.connection = n.connect()), o;
          }),
          r
        );
      })(),
      _h = (function (r) {
        vh(t, r);
        function t(e, n) {
          r.call(this, e), (this.connectable = n);
        }
        return (
          (t.prototype._unsubscribe = function () {
            var e = this.connectable;
            if (!e) {
              this.connection = null;
              return;
            }
            this.connectable = null;
            var n = e._refCount;
            if (n <= 0) {
              this.connection = null;
              return;
            }
            if (((e._refCount = n - 1), n > 1)) {
              this.connection = null;
              return;
            }
            var i = this.connection,
              o = e._connection;
            (this.connection = null), o && (!i || o === i) && o.unsubscribe();
          }),
          t
        );
      })(yh.Subscriber);
  });
  var es = f((Gt) => {
    "use strict";
    var an =
        (Gt && Gt.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      wh = Kt(),
      Sh = N(),
      Oh = P(),
      Qo = rt(),
      xh = sn(),
      ts = (function (r) {
        an(t, r);
        function t(e, n) {
          r.call(this),
            (this.source = e),
            (this.subjectFactory = n),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        return (
          (t.prototype._subscribe = function (e) {
            return this.getSubject().subscribe(e);
          }),
          (t.prototype.getSubject = function () {
            var e = this._subject;
            return (
              (!e || e.isStopped) && (this._subject = this.subjectFactory()),
              this._subject
            );
          }),
          (t.prototype.connect = function () {
            var e = this._connection;
            return (
              e ||
                ((this._isComplete = !1),
                (e = this._connection = new Qo.Subscription()),
                e.add(this.source.subscribe(new Eh(this.getSubject(), this))),
                e.closed
                  ? ((this._connection = null), (e = Qo.Subscription.EMPTY))
                  : (this._connection = e)),
              e
            );
          }),
          (t.prototype.refCount = function () {
            return xh.refCount()(this);
          }),
          t
        );
      })(Sh.Observable);
    Gt.ConnectableObservable = ts;
    var zt = ts.prototype;
    Gt.connectableObservableDescriptor = {
      operator: { value: null },
      _refCount: { value: 0, writable: !0 },
      _subject: { value: null, writable: !0 },
      _connection: { value: null, writable: !0 },
      _subscribe: { value: zt._subscribe },
      _isComplete: { value: zt._isComplete, writable: !0 },
      getSubject: { value: zt.getSubject },
      connect: { value: zt.connect },
      refCount: { value: zt.refCount },
    };
    var Eh = (function (r) {
        an(t, r);
        function t(e, n) {
          r.call(this, e), (this.connectable = n);
        }
        return (
          (t.prototype._error = function (e) {
            this._unsubscribe(), r.prototype._error.call(this, e);
          }),
          (t.prototype._complete = function () {
            (this.connectable._isComplete = !0),
              this._unsubscribe(),
              r.prototype._complete.call(this);
          }),
          (t.prototype._unsubscribe = function () {
            var e = this.connectable;
            if (e) {
              this.connectable = null;
              var n = e._connection;
              (e._refCount = 0),
                (e._subject = null),
                (e._connection = null),
                n && n.unsubscribe();
            }
          }),
          t
        );
      })(wh.SubjectSubscriber),
      $g = (function () {
        function r(t) {
          this.connectable = t;
        }
        return (
          (r.prototype.call = function (t, e) {
            var n = this.connectable;
            n._refCount++;
            var i = new kh(t, n),
              o = e.subscribe(i);
            return i.closed || (i.connection = n.connect()), o;
          }),
          r
        );
      })(),
      kh = (function (r) {
        an(t, r);
        function t(e, n) {
          r.call(this, e), (this.connectable = n);
        }
        return (
          (t.prototype._unsubscribe = function () {
            var e = this.connectable;
            if (!e) {
              this.connection = null;
              return;
            }
            this.connectable = null;
            var n = e._refCount;
            if (n <= 0) {
              this.connection = null;
              return;
            }
            if (((e._refCount = n - 1), n > 1)) {
              this.connection = null;
              return;
            }
            var i = this.connection,
              o = e._connection;
            (this.connection = null), o && (!i || o === i) && o.unsubscribe();
          }),
          t
        );
      })(Oh.Subscriber);
  });
  var ns = f((cn) => {
    "use strict";
    var Th = es();
    function Ah(r, t) {
      return function (n) {
        var i;
        if (
          (typeof r == "function"
            ? (i = r)
            : (i = function () {
                return r;
              }),
          typeof t == "function")
        )
          return n.lift(new rs(i, t));
        var o = Object.create(n, Th.connectableObservableDescriptor);
        return (o.source = n), (o.subjectFactory = i), o;
      };
    }
    cn.multicast = Ah;
    var rs = (function () {
      function r(t, e) {
        (this.subjectFactory = t), (this.selector = e);
      }
      return (
        (r.prototype.call = function (t, e) {
          var n = this.selector,
            i = this.subjectFactory(),
            o = n(i).subscribe(t);
          return o.add(e.subscribe(i)), o;
        }),
        r
      );
    })();
    cn.MulticastOperator = rs;
  });
  var un = f((is) => {
    "use strict";
    var Ch = ns(),
      Rh = sn(),
      Nh = Kt();
    function Ih() {
      return new Nh.Subject();
    }
    function Ph() {
      return function (r) {
        return Rh.refCount()(Ch.multicast(Ih)(r));
      };
    }
    is.share = Ph;
  });
  var I = f((Xt) => {
    "use strict";
    var Bh =
        (Xt && Xt.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      jh = P();
    function Lh(r, t) {
      return function (n) {
        if (typeof r != "function")
          throw new TypeError(
            "argument is not a function. Are you looking for `mapTo()`?"
          );
        return n.lift(new hs(r, t));
      };
    }
    Xt.map = Lh;
    var hs = (function () {
      function r(t, e) {
        (this.project = t), (this.thisArg = e);
      }
      return (
        (r.prototype.call = function (t, e) {
          return e.subscribe(new Mh(t, this.project, this.thisArg));
        }),
        r
      );
    })();
    Xt.MapOperator = hs;
    var Mh = (function (r) {
      Bh(t, r);
      function t(e, n, i) {
        r.call(this, e),
          (this.project = n),
          (this.count = 0),
          (this.thisArg = i || this);
      }
      return (
        (t.prototype._next = function (e) {
          var n;
          try {
            n = this.project.call(this.thisArg, e, this.count++);
          } catch (i) {
            this.destination.error(i);
            return;
          }
          this.destination.next(n);
        }),
        t
      );
    })(jh.Subscriber);
  });
  var L = f((je) => {
    "use strict";
    var Fh =
        (je && je.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      ms = P();
    function Dh(r, t, e) {
      return function (i) {
        return i.lift(new $h(r, t, e));
      };
    }
    je.tap = Dh;
    var $h = (function () {
        function r(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        return (
          (r.prototype.call = function (t, e) {
            return e.subscribe(
              new Uh(t, this.nextOrObserver, this.error, this.complete)
            );
          }),
          r
        );
      })(),
      Uh = (function (r) {
        Fh(t, r);
        function t(e, n, i, o) {
          r.call(this, e);
          var s = new ms.Subscriber(n, i, o);
          (s.syncErrorThrowable = !0), this.add(s), (this.safeSubscriber = s);
        }
        return (
          (t.prototype._next = function (e) {
            var n = this.safeSubscriber;
            n.next(e),
              n.syncErrorThrown
                ? this.destination.error(n.syncErrorValue)
                : this.destination.next(e);
          }),
          (t.prototype._error = function (e) {
            var n = this.safeSubscriber;
            n.error(e),
              n.syncErrorThrown
                ? this.destination.error(n.syncErrorValue)
                : this.destination.error(e);
          }),
          (t.prototype._complete = function () {
            var e = this.safeSubscriber;
            e.complete(),
              e.syncErrorThrown
                ? this.destination.error(e.syncErrorValue)
                : this.destination.complete();
          }),
          t
        );
      })(ms.Subscriber);
  });
  var pn = f((ds) => {
    "use strict";
    var Vh = At();
    function Hh(r) {
      return !Vh.isArray(r) && r - parseFloat(r) + 1 >= 0;
    }
    ds.isNumeric = Hh;
  });
  var vs = f((Le) => {
    "use strict";
    var Wh =
        (Le && Le.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      Yh = rt(),
      Kh = (function (r) {
        Wh(t, r);
        function t(e, n) {
          r.call(this);
        }
        return (
          (t.prototype.schedule = function (e, n) {
            return n === void 0 && (n = 0), this;
          }),
          t
        );
      })(Yh.Subscription);
    Le.Action = Kh;
  });
  var hn = f((Me) => {
    "use strict";
    var zh =
        (Me && Me.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      ys = z(),
      Gh = vs(),
      Xh = (function (r) {
        zh(t, r);
        function t(e, n) {
          r.call(this, e, n),
            (this.scheduler = e),
            (this.pending = !1),
            (this.work = n);
        }
        return (
          (t.prototype.schedule = function (e, n) {
            if ((n === void 0 && (n = 0), this.closed)) return this;
            (this.state = e), (this.pending = !0);
            var i = this.id,
              o = this.scheduler;
            return (
              i != null && (this.id = this.recycleAsyncId(o, i, n)),
              (this.delay = n),
              (this.id = this.id || this.requestAsyncId(o, this.id, n)),
              this
            );
          }),
          (t.prototype.requestAsyncId = function (e, n, i) {
            return (
              i === void 0 && (i = 0),
              ys.root.setInterval(e.flush.bind(e, this), i)
            );
          }),
          (t.prototype.recycleAsyncId = function (e, n, i) {
            return (
              i === void 0 && (i = 0),
              i !== null && this.delay === i && this.pending === !1
                ? n
                : (ys.root.clearInterval(n) && void 0) || void 0
            );
          }),
          (t.prototype.execute = function (e, n) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var i = this._execute(e, n);
            if (i) return i;
            this.pending === !1 &&
              this.id != null &&
              (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
          }),
          (t.prototype._execute = function (e, n) {
            var i = !1,
              o = void 0;
            try {
              this.work(e);
            } catch (s) {
              (i = !0), (o = (!!s && s) || new Error(s));
            }
            if (i) return this.unsubscribe(), o;
          }),
          (t.prototype._unsubscribe = function () {
            var e = this.id,
              n = this.scheduler,
              i = n.actions,
              o = i.indexOf(this);
            (this.work = null),
              (this.state = null),
              (this.pending = !1),
              (this.scheduler = null),
              o !== -1 && i.splice(o, 1),
              e != null && (this.id = this.recycleAsyncId(n, e, null)),
              (this.delay = null);
          }),
          t
        );
      })(Gh.Action);
    Me.AsyncAction = Xh;
  });
  var gs = f((bs) => {
    "use strict";
    var Jh = (function () {
      function r(t, e) {
        e === void 0 && (e = r.now), (this.SchedulerAction = t), (this.now = e);
      }
      return (
        (r.prototype.schedule = function (t, e, n) {
          return (
            e === void 0 && (e = 0),
            new this.SchedulerAction(this, t).schedule(n, e)
          );
        }),
        (r.now = Date.now
          ? Date.now
          : function () {
              return +new Date();
            }),
        r
      );
    })();
    bs.Scheduler = Jh;
  });
  var mn = f((Fe) => {
    "use strict";
    var Zh =
        (Fe && Fe.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      Qh = gs(),
      tm = (function (r) {
        Zh(t, r);
        function t() {
          r.apply(this, arguments),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        return (
          (t.prototype.flush = function (e) {
            var n = this.actions;
            if (this.active) {
              n.push(e);
              return;
            }
            var i;
            this.active = !0;
            do if ((i = e.execute(e.state, e.delay))) break;
            while ((e = n.shift()));
            if (((this.active = !1), i)) {
              for (; (e = n.shift()); ) e.unsubscribe();
              throw i;
            }
          }),
          t
        );
      })(Qh.Scheduler);
    Fe.AsyncScheduler = tm;
  });
  var dn = f((_s) => {
    "use strict";
    var em = hn(),
      rm = mn();
    _s.async = new rm.AsyncScheduler(em.AsyncAction);
  });
  var Ss = f((ws) => {
    "use strict";
    function nm(r) {
      return r instanceof Date && !isNaN(+r);
    }
    ws.isDate = nm;
  });
  var xs = f((De) => {
    "use strict";
    var im =
        (De && De.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      om = pn(),
      sm = N(),
      am = dn(),
      Os = dt(),
      cm = Ss(),
      um = (function (r) {
        im(t, r);
        function t(e, n, i) {
          e === void 0 && (e = 0),
            r.call(this),
            (this.period = -1),
            (this.dueTime = 0),
            om.isNumeric(n)
              ? (this.period = (Number(n) < 1 && 1) || Number(n))
              : Os.isScheduler(n) && (i = n),
            Os.isScheduler(i) || (i = am.async),
            (this.scheduler = i),
            (this.dueTime = cm.isDate(e) ? +e - this.scheduler.now() : e);
        }
        return (
          (t.create = function (e, n, i) {
            return e === void 0 && (e = 0), new t(e, n, i);
          }),
          (t.dispatch = function (e) {
            var n = e.index,
              i = e.period,
              o = e.subscriber,
              s = this;
            if ((o.next(n), !o.closed)) {
              if (i === -1) return o.complete();
              (e.index = n + 1), s.schedule(e, i);
            }
          }),
          (t.prototype._subscribe = function (e) {
            var n = 0,
              i = this,
              o = i.period,
              s = i.dueTime,
              a = i.scheduler;
            return a.schedule(t.dispatch, s, {
              index: n,
              period: o,
              subscriber: e,
            });
          }),
          t
        );
      })(sm.Observable);
    De.TimerObservable = um;
  });
  var $e = f((Es) => {
    "use strict";
    var fm = xs();
    Es.timer = fm.TimerObservable.create;
  });
  var q = f((Ue) => {
    "use strict";
    var hm =
        (Ue && Ue.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      mm = P();
    function dm(r, t) {
      return function (n) {
        return n.lift(new vm(r, t));
      };
    }
    Ue.filter = dm;
    var vm = (function () {
        function r(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        return (
          (r.prototype.call = function (t, e) {
            return e.subscribe(new ym(t, this.predicate, this.thisArg));
          }),
          r
        );
      })(),
      ym = (function (r) {
        hm(t, r);
        function t(e, n, i) {
          r.call(this, e),
            (this.predicate = n),
            (this.thisArg = i),
            (this.count = 0);
        }
        return (
          (t.prototype._next = function (e) {
            var n;
            try {
              n = this.predicate.call(this.thisArg, e, this.count++);
            } catch (i) {
              this.destination.error(i);
              return;
            }
            n && this.destination.next(e);
          }),
          t
        );
      })(mm.Subscriber);
  });
  var x = f((Ve) => {
    "use strict";
    var bm =
        (Ve && Ve.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      gm = It(),
      _m = Bt();
    function wm() {
      for (var r = [], t = 0; t < arguments.length; t++)
        r[t - 0] = arguments[t];
      return function (e) {
        var n;
        typeof r[r.length - 1] == "function" && (n = r.pop());
        var i = r;
        return e.lift(new Sm(i, n));
      };
    }
    Ve.withLatestFrom = wm;
    var Sm = (function () {
        function r(t, e) {
          (this.observables = t), (this.project = e);
        }
        return (
          (r.prototype.call = function (t, e) {
            return e.subscribe(new Om(t, this.observables, this.project));
          }),
          r
        );
      })(),
      Om = (function (r) {
        bm(t, r);
        function t(e, n, i) {
          r.call(this, e),
            (this.observables = n),
            (this.project = i),
            (this.toRespond = []);
          var o = n.length;
          this.values = new Array(o);
          for (var s = 0; s < o; s++) this.toRespond.push(s);
          for (var s = 0; s < o; s++) {
            var a = n[s];
            this.add(_m.subscribeToResult(this, a, a, s));
          }
        }
        return (
          (t.prototype.notifyNext = function (e, n, i, o, s) {
            this.values[i] = n;
            var a = this.toRespond;
            if (a.length > 0) {
              var u = a.indexOf(i);
              u !== -1 && a.splice(u, 1);
            }
          }),
          (t.prototype.notifyComplete = function () {}),
          (t.prototype._next = function (e) {
            if (this.toRespond.length === 0) {
              var n = [e].concat(this.values);
              this.project ? this._tryProject(n) : this.destination.next(n);
            }
          }),
          (t.prototype._tryProject = function (e) {
            var n;
            try {
              n = this.project.apply(this, e);
            } catch (i) {
              this.destination.error(i);
              return;
            }
            this.destination.next(n);
          }),
          t
        );
      })(gm.OuterSubscriber);
  });
  var ft = f((He) => {
    "use strict";
    var xm =
        (He && He.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      Em = It(),
      km = Bt();
    function Tm(r, t) {
      return function (n) {
        return n.lift(new Am(r, t));
      };
    }
    He.switchMap = Tm;
    var Am = (function () {
        function r(t, e) {
          (this.project = t), (this.resultSelector = e);
        }
        return (
          (r.prototype.call = function (t, e) {
            return e.subscribe(new Cm(t, this.project, this.resultSelector));
          }),
          r
        );
      })(),
      Cm = (function (r) {
        xm(t, r);
        function t(e, n, i) {
          r.call(this, e),
            (this.project = n),
            (this.resultSelector = i),
            (this.index = 0);
        }
        return (
          (t.prototype._next = function (e) {
            var n,
              i = this.index++;
            try {
              n = this.project(e, i);
            } catch (o) {
              this.destination.error(o);
              return;
            }
            this._innerSub(n, e, i);
          }),
          (t.prototype._innerSub = function (e, n, i) {
            var o = this.innerSubscription;
            o && o.unsubscribe(),
              this.add(
                (this.innerSubscription = km.subscribeToResult(this, e, n, i))
              );
          }),
          (t.prototype._complete = function () {
            var e = this.innerSubscription;
            (!e || e.closed) && r.prototype._complete.call(this);
          }),
          (t.prototype._unsubscribe = function () {
            this.innerSubscription = null;
          }),
          (t.prototype.notifyComplete = function (e) {
            this.remove(e),
              (this.innerSubscription = null),
              this.isStopped && r.prototype._complete.call(this);
          }),
          (t.prototype.notifyNext = function (e, n, i, o, s) {
            this.resultSelector
              ? this._tryNotifyNext(e, n, i, o)
              : this.destination.next(n);
          }),
          (t.prototype._tryNotifyNext = function (e, n, i, o) {
            var s;
            try {
              s = this.resultSelector(e, n, i, o);
            } catch (a) {
              this.destination.error(a);
              return;
            }
            this.destination.next(s);
          }),
          t
        );
      })(Em.OuterSubscriber);
  });
  var M = f((As) => {
    "use strict";
    var Rm = I();
    function Nm() {
      for (var r = [], t = 0; t < arguments.length; t++)
        r[t - 0] = arguments[t];
      var e = r.length;
      if (e === 0) throw new Error("list of properties cannot be empty.");
      return function (n) {
        return Rm.map(Im(r, e))(n);
      };
    }
    As.pluck = Nm;
    function Im(r, t) {
      var e = function (n) {
        for (var i = n, o = 0; o < t; o++) {
          var s = i[r[o]];
          if (typeof s < "u") i = s;
          else return;
        }
        return i;
      };
      return e;
    }
  });
  var et = f((ze) => {
    "use strict";
    var Pm =
        (ze && ze.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      qm = P(),
      Bm = jr();
    function jm() {
      return function (t) {
        return t.lift(new Lm());
      };
    }
    ze.ignoreElements = jm;
    var Lm = (function () {
        function r() {}
        return (
          (r.prototype.call = function (t, e) {
            return e.subscribe(new Mm(t));
          }),
          r
        );
      })(),
      Mm = (function (r) {
        Pm(t, r);
        function t() {
          r.apply(this, arguments);
        }
        return (
          (t.prototype._next = function (e) {
            Bm.noop();
          }),
          t
        );
      })(qm.Subscriber);
  });
  var ma = f((Xe) => {
    "use strict";
    var Fm =
        (Xe && Xe.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      pa = z(),
      Dm = N(),
      $m = (function (r) {
        Fm(t, r);
        function t(e, n) {
          r.call(this), (this.promise = e), (this.scheduler = n);
        }
        return (
          (t.create = function (e, n) {
            return new t(e, n);
          }),
          (t.prototype._subscribe = function (e) {
            var n = this,
              i = this.promise,
              o = this.scheduler;
            if (o == null)
              this._isScalar
                ? e.closed || (e.next(this.value), e.complete())
                : i
                    .then(
                      function (s) {
                        (n.value = s),
                          (n._isScalar = !0),
                          e.closed || (e.next(s), e.complete());
                      },
                      function (s) {
                        e.closed || e.error(s);
                      }
                    )
                    .then(null, function (s) {
                      pa.root.setTimeout(function () {
                        throw s;
                      });
                    });
            else if (this._isScalar) {
              if (!e.closed)
                return o.schedule(ha, 0, { value: this.value, subscriber: e });
            } else
              i.then(
                function (s) {
                  (n.value = s),
                    (n._isScalar = !0),
                    e.closed ||
                      e.add(o.schedule(ha, 0, { value: s, subscriber: e }));
                },
                function (s) {
                  e.closed ||
                    e.add(o.schedule(Um, 0, { err: s, subscriber: e }));
                }
              ).then(null, function (s) {
                pa.root.setTimeout(function () {
                  throw s;
                });
              });
          }),
          t
        );
      })(Dm.Observable);
    Xe.PromiseObservable = $m;
    function ha(r) {
      var t = r.value,
        e = r.subscriber;
      e.closed || (e.next(t), e.complete());
    }
    function Um(r) {
      var t = r.err,
        e = r.subscriber;
      e.closed || e.error(t);
    }
  });
  var va = f((Ze) => {
    "use strict";
    var Vm =
        (Ze && Ze.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      Hm = z(),
      Wm = N(),
      Je = qt(),
      Ym = (function (r) {
        Vm(t, r);
        function t(e, n) {
          if ((r.call(this), (this.scheduler = n), e == null))
            throw new Error("iterator cannot be null.");
          this.iterator = Gm(e);
        }
        return (
          (t.create = function (e, n) {
            return new t(e, n);
          }),
          (t.dispatch = function (e) {
            var n = e.index,
              i = e.hasError,
              o = e.iterator,
              s = e.subscriber;
            if (i) {
              s.error(e.error);
              return;
            }
            var a = o.next();
            if (a.done) {
              s.complete();
              return;
            }
            if ((s.next(a.value), (e.index = n + 1), s.closed)) {
              typeof o.return == "function" && o.return();
              return;
            }
            this.schedule(e);
          }),
          (t.prototype._subscribe = function (e) {
            var n = 0,
              i = this,
              o = i.iterator,
              s = i.scheduler;
            if (s)
              return s.schedule(t.dispatch, 0, {
                index: n,
                iterator: o,
                subscriber: e,
              });
            do {
              var a = o.next();
              if (a.done) {
                e.complete();
                break;
              } else e.next(a.value);
              if (e.closed) {
                typeof o.return == "function" && o.return();
                break;
              }
            } while (!0);
          }),
          t
        );
      })(Wm.Observable);
    Ze.IteratorObservable = Ym;
    var Km = (function () {
        function r(t, e, n) {
          e === void 0 && (e = 0),
            n === void 0 && (n = t.length),
            (this.str = t),
            (this.idx = e),
            (this.len = n);
        }
        return (
          (r.prototype[Je.iterator] = function () {
            return this;
          }),
          (r.prototype.next = function () {
            return this.idx < this.len
              ? { done: !1, value: this.str.charAt(this.idx++) }
              : { done: !0, value: void 0 };
          }),
          r
        );
      })(),
      zm = (function () {
        function r(t, e, n) {
          e === void 0 && (e = 0),
            n === void 0 && (n = Xm(t)),
            (this.arr = t),
            (this.idx = e),
            (this.len = n);
        }
        return (
          (r.prototype[Je.iterator] = function () {
            return this;
          }),
          (r.prototype.next = function () {
            return this.idx < this.len
              ? { done: !1, value: this.arr[this.idx++] }
              : { done: !0, value: void 0 };
          }),
          r
        );
      })();
    function Gm(r) {
      var t = r[Je.iterator];
      if (!t && typeof r == "string") return new Km(r);
      if (!t && r.length !== void 0) return new zm(r);
      if (!t) throw new TypeError("object is not iterable");
      return r[Je.iterator]();
    }
    var da = Math.pow(2, 53) - 1;
    function Xm(r) {
      var t = +r.length;
      return isNaN(t)
        ? 0
        : t === 0 || !Jm(t)
        ? t
        : ((t = Zm(t) * Math.floor(Math.abs(t))), t <= 0 ? 0 : t > da ? da : t);
    }
    function Jm(r) {
      return typeof r == "number" && Hm.root.isFinite(r);
    }
    function Zm(r) {
      var t = +r;
      return t === 0 || isNaN(t) ? t : t < 0 ? -1 : 1;
    }
  });
  var ya = f((Qe) => {
    "use strict";
    var Qm =
        (Qe && Qe.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      td = N(),
      ed = ge(),
      rd = Nt(),
      nd = (function (r) {
        Qm(t, r);
        function t(e, n) {
          r.call(this),
            (this.arrayLike = e),
            (this.scheduler = n),
            !n &&
              e.length === 1 &&
              ((this._isScalar = !0), (this.value = e[0]));
        }
        return (
          (t.create = function (e, n) {
            var i = e.length;
            return i === 0
              ? new rd.EmptyObservable()
              : i === 1
              ? new ed.ScalarObservable(e[0], n)
              : new t(e, n);
          }),
          (t.dispatch = function (e) {
            var n = e.arrayLike,
              i = e.index,
              o = e.length,
              s = e.subscriber;
            if (!s.closed) {
              if (i >= o) {
                s.complete();
                return;
              }
              s.next(n[i]), (e.index = i + 1), this.schedule(e);
            }
          }),
          (t.prototype._subscribe = function (e) {
            var n = 0,
              i = this,
              o = i.arrayLike,
              s = i.scheduler,
              a = o.length;
            if (s)
              return s.schedule(t.dispatch, 0, {
                arrayLike: o,
                index: n,
                length: a,
                subscriber: e,
              });
            for (var u = 0; u < a && !e.closed; u++) e.next(o[u]);
            e.complete();
          }),
          t
        );
      })(td.Observable);
    Qe.ArrayLikeObservable = nd;
  });
  var ga = f((ba) => {
    "use strict";
    var bn = N(),
      id = (function () {
        function r(t, e, n) {
          (this.kind = t),
            (this.value = e),
            (this.error = n),
            (this.hasValue = t === "N");
        }
        return (
          (r.prototype.observe = function (t) {
            switch (this.kind) {
              case "N":
                return t.next && t.next(this.value);
              case "E":
                return t.error && t.error(this.error);
              case "C":
                return t.complete && t.complete();
            }
          }),
          (r.prototype.do = function (t, e, n) {
            var i = this.kind;
            switch (i) {
              case "N":
                return t && t(this.value);
              case "E":
                return e && e(this.error);
              case "C":
                return n && n();
            }
          }),
          (r.prototype.accept = function (t, e, n) {
            return t && typeof t.next == "function"
              ? this.observe(t)
              : this.do(t, e, n);
          }),
          (r.prototype.toObservable = function () {
            var t = this.kind;
            switch (t) {
              case "N":
                return bn.Observable.of(this.value);
              case "E":
                return bn.Observable.throw(this.error);
              case "C":
                return bn.Observable.empty();
            }
            throw new Error("unexpected notification kind value");
          }),
          (r.createNext = function (t) {
            return typeof t < "u"
              ? new r("N", t)
              : r.undefinedValueNotification;
          }),
          (r.createError = function (t) {
            return new r("E", void 0, t);
          }),
          (r.createComplete = function () {
            return r.completeNotification;
          }),
          (r.completeNotification = new r("C")),
          (r.undefinedValueNotification = new r("N", void 0)),
          r
        );
      })();
    ba.Notification = id;
  });
  var Oa = f((pt) => {
    "use strict";
    var od =
        (pt && pt.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      sd = P(),
      gn = ga();
    function ad(r, t) {
      return (
        t === void 0 && (t = 0),
        function (n) {
          return n.lift(new _a(r, t));
        }
      );
    }
    pt.observeOn = ad;
    var _a = (function () {
      function r(t, e) {
        e === void 0 && (e = 0), (this.scheduler = t), (this.delay = e);
      }
      return (
        (r.prototype.call = function (t, e) {
          return e.subscribe(new wa(t, this.scheduler, this.delay));
        }),
        r
      );
    })();
    pt.ObserveOnOperator = _a;
    var wa = (function (r) {
      od(t, r);
      function t(e, n, i) {
        i === void 0 && (i = 0),
          r.call(this, e),
          (this.scheduler = n),
          (this.delay = i);
      }
      return (
        (t.dispatch = function (e) {
          var n = e.notification,
            i = e.destination;
          n.observe(i), this.unsubscribe();
        }),
        (t.prototype.scheduleMessage = function (e) {
          this.add(
            this.scheduler.schedule(
              t.dispatch,
              this.delay,
              new Sa(e, this.destination)
            )
          );
        }),
        (t.prototype._next = function (e) {
          this.scheduleMessage(gn.Notification.createNext(e));
        }),
        (t.prototype._error = function (e) {
          this.scheduleMessage(gn.Notification.createError(e));
        }),
        (t.prototype._complete = function () {
          this.scheduleMessage(gn.Notification.createComplete());
        }),
        t
      );
    })(sd.Subscriber);
    pt.ObserveOnSubscriber = wa;
    var Sa = (function () {
      function r(t, e) {
        (this.notification = t), (this.destination = e);
      }
      return r;
    })();
    pt.ObserveOnMessage = Sa;
  });
  var Ea = f((tr) => {
    "use strict";
    var cd =
        (tr && tr.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      ud = At(),
      fd = Mr(),
      ld = Fr(),
      pd = ma(),
      hd = va(),
      md = vt(),
      dd = ya(),
      vd = qt(),
      xa = N(),
      yd = Oa(),
      _n = ye(),
      bd = (function (r) {
        cd(t, r);
        function t(e, n) {
          r.call(this, null), (this.ish = e), (this.scheduler = n);
        }
        return (
          (t.create = function (e, n) {
            if (e != null) {
              if (typeof e[_n.observable] == "function")
                return e instanceof xa.Observable && !n ? e : new t(e, n);
              if (ud.isArray(e)) return new md.ArrayObservable(e, n);
              if (ld.isPromise(e)) return new pd.PromiseObservable(e, n);
              if (typeof e[vd.iterator] == "function" || typeof e == "string")
                return new hd.IteratorObservable(e, n);
              if (fd.isArrayLike(e)) return new dd.ArrayLikeObservable(e, n);
            }
            throw new TypeError(
              ((e !== null && typeof e) || e) + " is not observable"
            );
          }),
          (t.prototype._subscribe = function (e) {
            var n = this.ish,
              i = this.scheduler;
            return i == null
              ? n[_n.observable]().subscribe(e)
              : n[_n.observable]().subscribe(
                  new yd.ObserveOnSubscriber(e, i, 0)
                );
          }),
          t
        );
      })(xa.Observable);
    tr.FromObservable = bd;
  });
  var wn = f((ka) => {
    "use strict";
    var gd = Ea();
    ka.from = gd.FromObservable.create;
  });
  var ot = f((xt) => {
    "use strict";
    var _d =
        (xt && xt.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      wd = Bt(),
      Sd = It();
    function Od(r, t, e) {
      return (
        e === void 0 && (e = Number.POSITIVE_INFINITY),
        function (i) {
          return (
            typeof t == "number" && ((e = t), (t = null)),
            i.lift(new Ta(r, t, e))
          );
        }
      );
    }
    xt.mergeMap = Od;
    var Ta = (function () {
      function r(t, e, n) {
        n === void 0 && (n = Number.POSITIVE_INFINITY),
          (this.project = t),
          (this.resultSelector = e),
          (this.concurrent = n);
      }
      return (
        (r.prototype.call = function (t, e) {
          return e.subscribe(
            new Aa(t, this.project, this.resultSelector, this.concurrent)
          );
        }),
        r
      );
    })();
    xt.MergeMapOperator = Ta;
    var Aa = (function (r) {
      _d(t, r);
      function t(e, n, i, o) {
        o === void 0 && (o = Number.POSITIVE_INFINITY),
          r.call(this, e),
          (this.project = n),
          (this.resultSelector = i),
          (this.concurrent = o),
          (this.hasCompleted = !1),
          (this.buffer = []),
          (this.active = 0),
          (this.index = 0);
      }
      return (
        (t.prototype._next = function (e) {
          this.active < this.concurrent
            ? this._tryNext(e)
            : this.buffer.push(e);
        }),
        (t.prototype._tryNext = function (e) {
          var n,
            i = this.index++;
          try {
            n = this.project(e, i);
          } catch (o) {
            this.destination.error(o);
            return;
          }
          this.active++, this._innerSub(n, e, i);
        }),
        (t.prototype._innerSub = function (e, n, i) {
          this.add(wd.subscribeToResult(this, e, n, i));
        }),
        (t.prototype._complete = function () {
          (this.hasCompleted = !0),
            this.active === 0 &&
              this.buffer.length === 0 &&
              this.destination.complete();
        }),
        (t.prototype.notifyNext = function (e, n, i, o, s) {
          this.resultSelector
            ? this._notifyResultSelector(e, n, i, o)
            : this.destination.next(n);
        }),
        (t.prototype._notifyResultSelector = function (e, n, i, o) {
          var s;
          try {
            s = this.resultSelector(e, n, i, o);
          } catch (a) {
            this.destination.error(a);
            return;
          }
          this.destination.next(s);
        }),
        (t.prototype.notifyComplete = function (e) {
          var n = this.buffer;
          this.remove(e),
            this.active--,
            n.length > 0
              ? this._next(n.shift())
              : this.active === 0 &&
                this.hasCompleted &&
                this.destination.complete();
        }),
        t
      );
    })(Sd.OuterSubscriber);
    xt.MergeMapSubscriber = Aa;
  });
  var Ra = f((Ca) => {
    "use strict";
    function xd(r) {
      return r;
    }
    Ca.identity = xd;
  });
  var er = f((Na) => {
    "use strict";
    var Ed = ot(),
      kd = Ra();
    function Td(r) {
      return (
        r === void 0 && (r = Number.POSITIVE_INFINITY),
        Ed.mergeMap(kd.identity, null, r)
      );
    }
    Na.mergeAll = Td;
  });
  var Pa = f((Ia) => {
    "use strict";
    var Ad = er();
    function Cd() {
      return Ad.mergeAll(1);
    }
    Ia.concatAll = Cd;
  });
  var rr = f((qa) => {
    "use strict";
    var Rd = dt(),
      Nd = J(),
      Id = wn(),
      Pd = Pa();
    function qd() {
      for (var r = [], t = 0; t < arguments.length; t++)
        r[t - 0] = arguments[t];
      return r.length === 1 || (r.length === 2 && Rd.isScheduler(r[1]))
        ? Id.from(r[0])
        : Pd.concatAll()(Nd.of.apply(void 0, r));
    }
    qa.concat = qd;
  });
  var ja = f((Ba) => {
    "use strict";
    var Bd = vt(),
      jd = ge(),
      Ld = Nt(),
      Sn = rr(),
      Md = dt();
    function Fd() {
      for (var r = [], t = 0; t < arguments.length; t++)
        r[t - 0] = arguments[t];
      return function (e) {
        var n = r[r.length - 1];
        Md.isScheduler(n) ? r.pop() : (n = null);
        var i = r.length;
        return i === 1
          ? Sn.concat(new jd.ScalarObservable(r[0], n), e)
          : i > 1
          ? Sn.concat(new Bd.ArrayObservable(r, n), e)
          : Sn.concat(new Ld.EmptyObservable(n), e);
      };
    }
    Ba.startWith = Fd;
  });
  var On = f((nr) => {
    "use strict";
    var Dd =
        (nr && nr.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      $d = P();
    function Ud(r) {
      return function (t) {
        return t.lift(new Vd(r));
      };
    }
    nr.mapTo = Ud;
    var Vd = (function () {
        function r(t) {
          this.value = t;
        }
        return (
          (r.prototype.call = function (t, e) {
            return e.subscribe(new Hd(t, this.value));
          }),
          r
        );
      })(),
      Hd = (function (r) {
        Dd(t, r);
        function t(e, n) {
          r.call(this, e), (this.value = n);
        }
        return (
          (t.prototype._next = function (e) {
            this.destination.next(this.value);
          }),
          t
        );
      })($d.Subscriber);
  });
  var at = f((za) => {
    "use strict";
    var Yd = Nt();
    za.empty = Yd.EmptyObservable.create;
  });
  var Qt = f((Ga) => {
    "use strict";
    var Kd = N(),
      zd = vt(),
      Gd = dt(),
      Xd = er();
    function Jd() {
      for (var r = [], t = 0; t < arguments.length; t++)
        r[t - 0] = arguments[t];
      var e = Number.POSITIVE_INFINITY,
        n = null,
        i = r[r.length - 1];
      return (
        Gd.isScheduler(i)
          ? ((n = r.pop()),
            r.length > 1 && typeof r[r.length - 1] == "number" && (e = r.pop()))
          : typeof i == "number" && (e = r.pop()),
        n === null && r.length === 1 && r[0] instanceof Kd.Observable
          ? r[0]
          : Xd.mergeAll(e)(new zd.ArrayObservable(r, n))
      );
    }
    Ga.merge = Jd;
  });
  var Ec = f((xc) => {
    "use strict";
    function Qd(r, t) {
      function e() {
        return !e.pred.apply(e.thisArg, arguments);
      }
      return (e.pred = r), (e.thisArg = t), e;
    }
    xc.not = Qd;
  });
  var Ac = f((Tc) => {
    "use strict";
    var tv = Ec(),
      kc = q();
    function ev(r, t) {
      return function (e) {
        return [kc.filter(r, t)(e), kc.filter(tv.not(r, t))(e)];
      };
    }
    Tc.partition = ev;
  });
  var pu = f((jn) => {
    "use strict";
    var cv = z(),
      lu = (function () {
        function r(t) {
          if (
            ((this.root = t),
            t.setImmediate && typeof t.setImmediate == "function")
          )
            (this.setImmediate = t.setImmediate.bind(t)),
              (this.clearImmediate = t.clearImmediate.bind(t));
          else {
            (this.nextHandle = 1),
              (this.tasksByHandle = {}),
              (this.currentlyRunningATask = !1),
              this.canUseProcessNextTick()
                ? (this.setImmediate = this.createProcessNextTickSetImmediate())
                : this.canUsePostMessage()
                ? (this.setImmediate = this.createPostMessageSetImmediate())
                : this.canUseMessageChannel()
                ? (this.setImmediate = this.createMessageChannelSetImmediate())
                : this.canUseReadyStateChange()
                ? (this.setImmediate =
                    this.createReadyStateChangeSetImmediate())
                : (this.setImmediate = this.createSetTimeoutSetImmediate());
            var e = function n(i) {
              delete n.instance.tasksByHandle[i];
            };
            (e.instance = this), (this.clearImmediate = e);
          }
        }
        return (
          (r.prototype.identify = function (t) {
            return this.root.Object.prototype.toString.call(t);
          }),
          (r.prototype.canUseProcessNextTick = function () {
            return this.identify(this.root.process) === "[object process]";
          }),
          (r.prototype.canUseMessageChannel = function () {
            return Boolean(this.root.MessageChannel);
          }),
          (r.prototype.canUseReadyStateChange = function () {
            var t = this.root.document;
            return Boolean(
              t && "onreadystatechange" in t.createElement("script")
            );
          }),
          (r.prototype.canUsePostMessage = function () {
            var t = this.root;
            if (t.postMessage && !t.importScripts) {
              var e = !0,
                n = t.onmessage;
              return (
                (t.onmessage = function () {
                  e = !1;
                }),
                t.postMessage("", "*"),
                (t.onmessage = n),
                e
              );
            }
            return !1;
          }),
          (r.prototype.partiallyApplied = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            var i = function o() {
              var s = o,
                a = s.handler,
                u = s.args;
              typeof a == "function"
                ? a.apply(void 0, u)
                : new Function("" + a)();
            };
            return (i.handler = t), (i.args = e), i;
          }),
          (r.prototype.addFromSetImmediateArguments = function (t) {
            return (
              (this.tasksByHandle[this.nextHandle] =
                this.partiallyApplied.apply(void 0, t)),
              this.nextHandle++
            );
          }),
          (r.prototype.createProcessNextTickSetImmediate = function () {
            var t = function e() {
              var n = e.instance,
                i = n.addFromSetImmediateArguments(arguments);
              return (
                n.root.process.nextTick(n.partiallyApplied(n.runIfPresent, i)),
                i
              );
            };
            return (t.instance = this), t;
          }),
          (r.prototype.createPostMessageSetImmediate = function () {
            var t = this.root,
              e = "setImmediate$" + t.Math.random() + "$",
              n = function o(s) {
                var a = o.instance;
                s.source === t &&
                  typeof s.data == "string" &&
                  s.data.indexOf(e) === 0 &&
                  a.runIfPresent(+s.data.slice(e.length));
              };
            (n.instance = this), t.addEventListener("message", n, !1);
            var i = function o() {
              var s = o,
                a = s.messagePrefix,
                u = s.instance,
                l = u.addFromSetImmediateArguments(arguments);
              return u.root.postMessage(a + l, "*"), l;
            };
            return (i.instance = this), (i.messagePrefix = e), i;
          }),
          (r.prototype.runIfPresent = function (t) {
            if (this.currentlyRunningATask)
              this.root.setTimeout(
                this.partiallyApplied(this.runIfPresent, t),
                0
              );
            else {
              var e = this.tasksByHandle[t];
              if (e) {
                this.currentlyRunningATask = !0;
                try {
                  e();
                } finally {
                  this.clearImmediate(t), (this.currentlyRunningATask = !1);
                }
              }
            }
          }),
          (r.prototype.createMessageChannelSetImmediate = function () {
            var t = this,
              e = new this.root.MessageChannel();
            e.port1.onmessage = function (i) {
              var o = i.data;
              t.runIfPresent(o);
            };
            var n = function i() {
              var o = i,
                s = o.channel,
                a = o.instance,
                u = a.addFromSetImmediateArguments(arguments);
              return s.port2.postMessage(u), u;
            };
            return (n.channel = e), (n.instance = this), n;
          }),
          (r.prototype.createReadyStateChangeSetImmediate = function () {
            var t = function e() {
              var n = e.instance,
                i = n.root,
                o = i.document,
                s = o.documentElement,
                a = n.addFromSetImmediateArguments(arguments),
                u = o.createElement("script");
              return (
                (u.onreadystatechange = function () {
                  n.runIfPresent(a),
                    (u.onreadystatechange = null),
                    s.removeChild(u),
                    (u = null);
                }),
                s.appendChild(u),
                a
              );
            };
            return (t.instance = this), t;
          }),
          (r.prototype.createSetTimeoutSetImmediate = function () {
            var t = function e() {
              var n = e.instance,
                i = n.addFromSetImmediateArguments(arguments);
              return (
                n.root.setTimeout(n.partiallyApplied(n.runIfPresent, i), 0), i
              );
            };
            return (t.instance = this), t;
          }),
          r
        );
      })();
    jn.ImmediateDefinition = lu;
    jn.Immediate = new lu(cv.root);
  });
  var mu = f((lr) => {
    "use strict";
    var uv =
        (lr && lr.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      hu = pu(),
      fv = hn(),
      lv = (function (r) {
        uv(t, r);
        function t(e, n) {
          r.call(this, e, n), (this.scheduler = e), (this.work = n);
        }
        return (
          (t.prototype.requestAsyncId = function (e, n, i) {
            return (
              i === void 0 && (i = 0),
              i !== null && i > 0
                ? r.prototype.requestAsyncId.call(this, e, n, i)
                : (e.actions.push(this),
                  e.scheduled ||
                    (e.scheduled = hu.Immediate.setImmediate(
                      e.flush.bind(e, null)
                    )))
            );
          }),
          (t.prototype.recycleAsyncId = function (e, n, i) {
            if (
              (i === void 0 && (i = 0),
              (i !== null && i > 0) || (i === null && this.delay > 0))
            )
              return r.prototype.recycleAsyncId.call(this, e, n, i);
            e.actions.length === 0 &&
              (hu.Immediate.clearImmediate(n), (e.scheduled = void 0));
          }),
          t
        );
      })(fv.AsyncAction);
    lr.AsapAction = lv;
  });
  var du = f((pr) => {
    "use strict";
    var pv =
        (pr && pr.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      hv = mn(),
      mv = (function (r) {
        pv(t, r);
        function t() {
          r.apply(this, arguments);
        }
        return (
          (t.prototype.flush = function (e) {
            (this.active = !0), (this.scheduled = void 0);
            var n = this.actions,
              i,
              o = -1,
              s = n.length;
            e = e || n.shift();
            do if ((i = e.execute(e.state, e.delay))) break;
            while (++o < s && (e = n.shift()));
            if (((this.active = !1), i)) {
              for (; ++o < s && (e = n.shift()); ) e.unsubscribe();
              throw i;
            }
          }),
          t
        );
      })(hv.AsyncScheduler);
    pr.AsapScheduler = mv;
  });
  var yu = f((vu) => {
    "use strict";
    var dv = mu(),
      vv = du();
    vu.asap = new vv.AsapScheduler(dv.AsapAction);
  });
  var bu = f((hr) => {
    "use strict";
    var yv =
        (hr && hr.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      bv = N(),
      Ln = yu(),
      gv = pn(),
      _v = (function (r) {
        yv(t, r);
        function t(e, n, i) {
          n === void 0 && (n = 0),
            i === void 0 && (i = Ln.asap),
            r.call(this),
            (this.source = e),
            (this.delayTime = n),
            (this.scheduler = i),
            (!gv.isNumeric(n) || n < 0) && (this.delayTime = 0),
            (!i || typeof i.schedule != "function") &&
              (this.scheduler = Ln.asap);
        }
        return (
          (t.create = function (e, n, i) {
            return (
              n === void 0 && (n = 0),
              i === void 0 && (i = Ln.asap),
              new t(e, n, i)
            );
          }),
          (t.dispatch = function (e) {
            var n = e.source,
              i = e.subscriber;
            return this.add(n.subscribe(i));
          }),
          (t.prototype._subscribe = function (e) {
            var n = this.delayTime,
              i = this.source,
              o = this.scheduler;
            return o.schedule(t.dispatch, n, { source: i, subscriber: e });
          }),
          t
        );
      })(bv.Observable);
    hr.SubscribeOnObservable = _v;
  });
  var _u = f((gu) => {
    "use strict";
    var wv = bu();
    function Sv(r, t) {
      return (
        t === void 0 && (t = 0),
        function (n) {
          return n.lift(new Ov(r, t));
        }
      );
    }
    gu.subscribeOn = Sv;
    var Ov = (function () {
      function r(t, e) {
        (this.scheduler = t), (this.delay = e);
      }
      return (
        (r.prototype.call = function (t, e) {
          return new wv.SubscribeOnObservable(
            e,
            this.delay,
            this.scheduler
          ).subscribe(t);
        }),
        r
      );
    })();
  });
  var re = f((dr) => {
    "use strict";
    var kv =
        (dr && dr.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      Tv = P();
    function Av(r) {
      return function (t) {
        return t.lift(new Cv(r));
      };
    }
    dr.skip = Av;
    var Cv = (function () {
        function r(t) {
          this.total = t;
        }
        return (
          (r.prototype.call = function (t, e) {
            return e.subscribe(new Rv(t, this.total));
          }),
          r
        );
      })(),
      Rv = (function (r) {
        kv(t, r);
        function t(e, n) {
          r.call(this, e), (this.total = n), (this.count = 0);
        }
        return (
          (t.prototype._next = function (e) {
            ++this.count > this.total && this.destination.next(e);
          }),
          t
        );
      })(Tv.Subscriber);
  });
  var ne = f((yr) => {
    "use strict";
    var Nv =
        (yr && yr.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      Iv = P(),
      lf = le(),
      vr = Ct();
    function Pv(r, t) {
      return function (e) {
        return e.lift(new qv(r, t));
      };
    }
    yr.distinctUntilChanged = Pv;
    var qv = (function () {
        function r(t, e) {
          (this.compare = t), (this.keySelector = e);
        }
        return (
          (r.prototype.call = function (t, e) {
            return e.subscribe(new Bv(t, this.compare, this.keySelector));
          }),
          r
        );
      })(),
      Bv = (function (r) {
        Nv(t, r);
        function t(e, n, i) {
          r.call(this, e),
            (this.keySelector = i),
            (this.hasKey = !1),
            typeof n == "function" && (this.compare = n);
        }
        return (
          (t.prototype.compare = function (e, n) {
            return e === n;
          }),
          (t.prototype._next = function (e) {
            var n = this.keySelector,
              i = e;
            if (
              n &&
              ((i = lf.tryCatch(this.keySelector)(e)), i === vr.errorObject)
            )
              return this.destination.error(vr.errorObject.e);
            var o = !1;
            if (this.hasKey) {
              if (
                ((o = lf.tryCatch(this.compare)(this.key, i)),
                o === vr.errorObject)
              )
                return this.destination.error(vr.errorObject.e);
            } else this.hasKey = !0;
            Boolean(o) === !1 && ((this.key = i), this.destination.next(e));
          }),
          t
        );
      })(Iv.Subscriber);
  });
  var mf = f((br) => {
    "use strict";
    var jv =
        (br && br.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      Lv = N(),
      Mv = le(),
      Fv = fe(),
      pf = Ct(),
      Dv = rt(),
      hf = Object.prototype.toString;
    function $v(r) {
      return (
        !!r &&
        typeof r.addListener == "function" &&
        typeof r.removeListener == "function"
      );
    }
    function Uv(r) {
      return !!r && typeof r.on == "function" && typeof r.off == "function";
    }
    function Vv(r) {
      return !!r && hf.call(r) === "[object NodeList]";
    }
    function Hv(r) {
      return !!r && hf.call(r) === "[object HTMLCollection]";
    }
    function Wv(r) {
      return (
        !!r &&
        typeof r.addEventListener == "function" &&
        typeof r.removeEventListener == "function"
      );
    }
    var Yv = (function (r) {
      jv(t, r);
      function t(e, n, i, o) {
        r.call(this),
          (this.sourceObj = e),
          (this.eventName = n),
          (this.selector = i),
          (this.options = o);
      }
      return (
        (t.create = function (e, n, i, o) {
          return Fv.isFunction(i) && ((o = i), (i = void 0)), new t(e, n, o, i);
        }),
        (t.setupSubscription = function (e, n, i, o, s) {
          var a;
          if (Vv(e) || Hv(e))
            for (var u = 0, l = e.length; u < l; u++)
              t.setupSubscription(e[u], n, i, o, s);
          else if (Wv(e)) {
            var h = e;
            e.addEventListener(n, i, s),
              (a = function () {
                return h.removeEventListener(n, i, s);
              });
          } else if (Uv(e)) {
            var _ = e;
            e.on(n, i),
              (a = function () {
                return _.off(n, i);
              });
          } else if ($v(e)) {
            var m = e;
            e.addListener(n, i),
              (a = function () {
                return m.removeListener(n, i);
              });
          } else throw new TypeError("Invalid event target");
          o.add(new Dv.Subscription(a));
        }),
        (t.prototype._subscribe = function (e) {
          var n = this.sourceObj,
            i = this.eventName,
            o = this.options,
            s = this.selector,
            a = s
              ? function () {
                  for (var u = [], l = 0; l < arguments.length; l++)
                    u[l - 0] = arguments[l];
                  var h = Mv.tryCatch(s).apply(void 0, u);
                  h === pf.errorObject ? e.error(pf.errorObject.e) : e.next(h);
                }
              : function (u) {
                  return e.next(u);
                };
          t.setupSubscription(n, i, a, e, o);
        }),
        t
      );
    })(Lv.Observable);
    br.FromEventObservable = Yv;
  });
  var ie = f((df) => {
    "use strict";
    var Kv = mf();
    df.fromEvent = Kv.FromEventObservable.create;
  });
  var Xf = f((Gf) => {
    "use strict";
    var zv = (function () {
      function r() {
        (this.size = 0), (this._values = []), (this._keys = []);
      }
      return (
        (r.prototype.get = function (t) {
          var e = this._keys.indexOf(t);
          return e === -1 ? void 0 : this._values[e];
        }),
        (r.prototype.set = function (t, e) {
          var n = this._keys.indexOf(t);
          return (
            n === -1
              ? (this._keys.push(t), this._values.push(e), this.size++)
              : (this._values[n] = e),
            this
          );
        }),
        (r.prototype.delete = function (t) {
          var e = this._keys.indexOf(t);
          return e === -1
            ? !1
            : (this._values.splice(e, 1),
              this._keys.splice(e, 1),
              this.size--,
              !0);
        }),
        (r.prototype.clear = function () {
          (this._keys.length = 0), (this._values.length = 0), (this.size = 0);
        }),
        (r.prototype.forEach = function (t, e) {
          for (var n = 0; n < this.size; n++)
            t.call(e, this._values[n], this._keys[n]);
        }),
        r
      );
    })();
    Gf.MapPolyfill = zv;
  });
  var Zf = f((Jf) => {
    "use strict";
    var Gv = z(),
      Xv = Xf();
    Jf.Map =
      Gv.root.Map ||
      (function () {
        return Xv.MapPolyfill;
      })();
  });
  var tl = f((Qf) => {
    "use strict";
    var Jv = (function () {
      function r() {
        this.values = {};
      }
      return (
        (r.prototype.delete = function (t) {
          return (this.values[t] = null), !0;
        }),
        (r.prototype.set = function (t, e) {
          return (this.values[t] = e), this;
        }),
        (r.prototype.get = function (t) {
          return this.values[t];
        }),
        (r.prototype.forEach = function (t, e) {
          var n = this.values;
          for (var i in n)
            n.hasOwnProperty(i) && n[i] !== null && t.call(e, n[i], i);
        }),
        (r.prototype.clear = function () {
          this.values = {};
        }),
        r
      );
    })();
    Qf.FastMap = Jv;
  });
  var nl = f((oe) => {
    "use strict";
    var Or =
        (oe && oe.__extends) ||
        function (r, t) {
          for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
          function n() {
            this.constructor = r;
          }
          r.prototype =
            t === null
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      el = P(),
      rl = rt(),
      Zv = N(),
      Qv = Kt(),
      ty = Zf(),
      ey = tl();
    function ry(r, t, e, n) {
      return function (i) {
        return i.lift(new ny(r, t, e, n));
      };
    }
    oe.groupBy = ry;
    var ny = (function () {
        function r(t, e, n, i) {
          (this.keySelector = t),
            (this.elementSelector = e),
            (this.durationSelector = n),
            (this.subjectSelector = i);
        }
        return (
          (r.prototype.call = function (t, e) {
            return e.subscribe(
              new iy(
                t,
                this.keySelector,
                this.elementSelector,
                this.durationSelector,
                this.subjectSelector
              )
            );
          }),
          r
        );
      })(),
      iy = (function (r) {
        Or(t, r);
        function t(e, n, i, o, s) {
          r.call(this, e),
            (this.keySelector = n),
            (this.elementSelector = i),
            (this.durationSelector = o),
            (this.subjectSelector = s),
            (this.groups = null),
            (this.attemptedToUnsubscribe = !1),
            (this.count = 0);
        }
        return (
          (t.prototype._next = function (e) {
            var n;
            try {
              n = this.keySelector(e);
            } catch (i) {
              this.error(i);
              return;
            }
            this._group(e, n);
          }),
          (t.prototype._group = function (e, n) {
            var i = this.groups;
            i ||
              (i = this.groups =
                typeof n == "string" ? new ey.FastMap() : new ty.Map());
            var o = i.get(n),
              s;
            if (this.elementSelector)
              try {
                s = this.elementSelector(e);
              } catch (l) {
                this.error(l);
              }
            else s = e;
            if (!o) {
              (o = this.subjectSelector
                ? this.subjectSelector()
                : new Qv.Subject()),
                i.set(n, o);
              var a = new zn(n, o, this);
              if ((this.destination.next(a), this.durationSelector)) {
                var u = void 0;
                try {
                  u = this.durationSelector(new zn(n, o));
                } catch (l) {
                  this.error(l);
                  return;
                }
                this.add(u.subscribe(new oy(n, o, this)));
              }
            }
            o.closed || o.next(s);
          }),
          (t.prototype._error = function (e) {
            var n = this.groups;
            n &&
              (n.forEach(function (i, o) {
                i.error(e);
              }),
              n.clear()),
              this.destination.error(e);
          }),
          (t.prototype._complete = function () {
            var e = this.groups;
            e &&
              (e.forEach(function (n, i) {
                n.complete();
              }),
              e.clear()),
              this.destination.complete();
          }),
          (t.prototype.removeGroup = function (e) {
            this.groups.delete(e);
          }),
          (t.prototype.unsubscribe = function () {
            this.closed ||
              ((this.attemptedToUnsubscribe = !0),
              this.count === 0 && r.prototype.unsubscribe.call(this));
          }),
          t
        );
      })(el.Subscriber),
      oy = (function (r) {
        Or(t, r);
        function t(e, n, i) {
          r.call(this, n), (this.key = e), (this.group = n), (this.parent = i);
        }
        return (
          (t.prototype._next = function (e) {
            this.complete();
          }),
          (t.prototype._unsubscribe = function () {
            var e = this,
              n = e.parent,
              i = e.key;
            (this.key = this.parent = null), n && n.removeGroup(i);
          }),
          t
        );
      })(el.Subscriber),
      zn = (function (r) {
        Or(t, r);
        function t(e, n, i) {
          r.call(this),
            (this.key = e),
            (this.groupSubject = n),
            (this.refCountSubscription = i);
        }
        return (
          (t.prototype._subscribe = function (e) {
            var n = new rl.Subscription(),
              i = this,
              o = i.refCountSubscription,
              s = i.groupSubject;
            return o && !o.closed && n.add(new sy(o)), n.add(s.subscribe(e)), n;
          }),
          t
        );
      })(Zv.Observable);
    oe.GroupedObservable = zn;
    var sy = (function (r) {
      Or(t, r);
      function t(e) {
        r.call(this), (this.parent = e), e.count++;
      }
      return (
        (t.prototype.unsubscribe = function () {
          var e = this.parent;
          !e.closed &&
            !this.closed &&
            (r.prototype.unsubscribe.call(this),
            (e.count -= 1),
            e.count === 0 && e.attemptedToUnsubscribe && e.unsubscribe());
        }),
        t
      );
    })(rl.Subscription);
  });
  var vi = c(di(), 1),
    {
      __extends: _y,
      __assign: F,
      __rest: wy,
      __decorate: Sy,
      __param: Oy,
      __metadata: xy,
      __awaiter: Ey,
      __generator: ky,
      __exportStar: Ty,
      __createBinding: Ay,
      __values: Cy,
      __read: Ry,
      __spread: Ny,
      __spreadArrays: Iy,
      __spreadArray: Py,
      __await: qy,
      __asyncGenerator: By,
      __asyncDelegator: jy,
      __asyncValues: Ly,
      __makeTemplateObject: My,
      __importStar: Fy,
      __importDefault: Dy,
      __classPrivateFieldGet: $y,
      __classPrivateFieldSet: Uy,
    } = vi.default;
  var il = c(no());
  var oo = c(Dr(), 1);
  function so(r, t = "", e) {
    let n = r;
    (e = e || (typeof location < "u" && location)),
      r == null && (r = e.protocol + "//" + e.host),
      typeof r == "string" &&
        (r.charAt(0) === "/" &&
          (r.charAt(1) === "/" ? (r = e.protocol + r) : (r = e.host + r)),
        /^(https?|wss?):\/\//.test(r) ||
          (typeof e < "u" ? (r = e.protocol + "//" + r) : (r = "https://" + r)),
        (n = (0, oo.default)(r))),
      n.port ||
        (/^(http|ws)$/.test(n.protocol)
          ? (n.port = "80")
          : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
      (n.path = n.path || "/");
    let o = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
    return (
      (n.id = n.protocol + "://" + o + ":" + n.port + t),
      (n.href =
        n.protocol + "://" + o + (e && e.port === n.port ? "" : ":" + n.port)),
      n
    );
  }
  var co = c(ao(), 1);
  var Y = (() =>
    typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : Function("return this")())();
  function Ur(r) {
    let t = r.xdomain;
    try {
      if (typeof XMLHttpRequest < "u" && (!t || co.default))
        return new XMLHttpRequest();
    } catch {}
    if (!t)
      try {
        return new Y[["Active"].concat("Object").join("X")](
          "Microsoft.XMLHTTP"
        );
      } catch {}
  }
  function Ee(r, ...t) {
    return t.reduce((e, n) => (r.hasOwnProperty(n) && (e[n] = r[n]), e), {});
  }
  var Lp = setTimeout,
    Mp = clearTimeout;
  function Q(r, t) {
    t.useNativeTimers
      ? ((r.setTimeoutFn = Lp.bind(Y)), (r.clearTimeoutFn = Mp.bind(Y)))
      : ((r.setTimeoutFn = setTimeout.bind(Y)),
        (r.clearTimeoutFn = clearTimeout.bind(Y)));
  }
  var Ao = c(ut(), 1);
  var G = Object.create(null);
  G.open = "0";
  G.close = "1";
  G.ping = "2";
  G.pong = "3";
  G.message = "4";
  G.upgrade = "5";
  G.noop = "6";
  var jt = Object.create(null);
  Object.keys(G).forEach((r) => {
    jt[G[r]] = r;
  });
  var fo = { type: "error", data: "parser error" };
  var Dp =
      typeof Blob == "function" ||
      (typeof Blob < "u" &&
        Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
    $p = typeof ArrayBuffer == "function",
    Up = (r) =>
      typeof ArrayBuffer.isView == "function"
        ? ArrayBuffer.isView(r)
        : r && r.buffer instanceof ArrayBuffer,
    Vp = ({ type: r, data: t }, e, n) =>
      Dp && t instanceof Blob
        ? e
          ? n(t)
          : lo(t, n)
        : $p && (t instanceof ArrayBuffer || Up(t))
        ? e
          ? n(t)
          : lo(new Blob([t]), n)
        : n(G[r] + (t || "")),
    lo = (r, t) => {
      let e = new FileReader();
      return (
        (e.onload = function () {
          let n = e.result.split(",")[1];
          t("b" + n);
        }),
        e.readAsDataURL(r)
      );
    },
    ke = Vp;
  var po = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    Mt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (Lt = 0; Lt < po.length; Lt++) Mt[po.charCodeAt(Lt)] = Lt;
  var Lt;
  var ho = function (r) {
    var t = r.length * 0.75,
      e = r.length,
      n,
      i = 0,
      o,
      s,
      a,
      u;
    r[r.length - 1] === "=" && (t--, r[r.length - 2] === "=" && t--);
    var l = new ArrayBuffer(t),
      h = new Uint8Array(l);
    for (n = 0; n < e; n += 4)
      (o = Mt[r.charCodeAt(n)]),
        (s = Mt[r.charCodeAt(n + 1)]),
        (a = Mt[r.charCodeAt(n + 2)]),
        (u = Mt[r.charCodeAt(n + 3)]),
        (h[i++] = (o << 2) | (s >> 4)),
        (h[i++] = ((s & 15) << 4) | (a >> 2)),
        (h[i++] = ((a & 3) << 6) | (u & 63));
    return l;
  };
  var Hp = typeof ArrayBuffer == "function",
    Wp = (r, t) => {
      if (typeof r != "string") return { type: "message", data: mo(r, t) };
      let e = r.charAt(0);
      return e === "b"
        ? { type: "message", data: Yp(r.substring(1), t) }
        : jt[e]
        ? r.length > 1
          ? { type: jt[e], data: r.substring(1) }
          : { type: jt[e] }
        : fo;
    },
    Yp = (r, t) => {
      if (Hp) {
        let e = ho(r);
        return mo(e, t);
      } else return { base64: !0, data: r };
    },
    mo = (r, t) => {
      switch (t) {
        case "blob":
          return r instanceof ArrayBuffer ? new Blob([r]) : r;
        case "arraybuffer":
        default:
          return r;
      }
    },
    Te = Wp;
  var vo = String.fromCharCode(30),
    yo = (r, t) => {
      let e = r.length,
        n = new Array(e),
        i = 0;
      r.forEach((o, s) => {
        ke(o, !1, (a) => {
          (n[s] = a), ++i === e && t(n.join(vo));
        });
      });
    },
    bo = (r, t) => {
      let e = r.split(vo),
        n = [];
      for (let i = 0; i < e.length; i++) {
        let o = Te(e[i], t);
        if ((n.push(o), o.type === "error")) break;
      }
      return n;
    },
    Vr = 4;
  var go = c(ut(), 1);
  var yt = class extends go.Emitter {
    constructor(t) {
      super();
      (this.writable = !1),
        Q(this, t),
        (this.opts = t),
        (this.query = t.query),
        (this.readyState = ""),
        (this.socket = t.socket);
    }
    onError(t, e) {
      let n = new Error(t);
      return (
        (n.type = "TransportError"),
        (n.description = e),
        super.emit("error", n),
        this
      );
    }
    open() {
      return (
        (this.readyState === "closed" || this.readyState === "") &&
          ((this.readyState = "opening"), this.doOpen()),
        this
      );
    }
    close() {
      return (
        (this.readyState === "opening" || this.readyState === "open") &&
          (this.doClose(), this.onClose()),
        this
      );
    }
    send(t) {
      this.readyState === "open" && this.write(t);
    }
    onOpen() {
      (this.readyState = "open"), (this.writable = !0), super.emit("open");
    }
    onData(t) {
      let e = Te(t, this.socket.binaryType);
      this.onPacket(e);
    }
    onPacket(t) {
      super.emit("packet", t);
    }
    onClose() {
      (this.readyState = "closed"), super.emit("close");
    }
  };
  var Eo = c(Yr(), 1),
    ko = c(Ce(), 1);
  var zr = class extends yt {
    constructor() {
      super(...arguments);
      this.polling = !1;
    }
    get name() {
      return "polling";
    }
    doOpen() {
      this.poll();
    }
    pause(t) {
      this.readyState = "pausing";
      let e = () => {
        (this.readyState = "paused"), t();
      };
      if (this.polling || !this.writable) {
        let n = 0;
        this.polling &&
          (n++,
          this.once("pollComplete", function () {
            --n || e();
          })),
          this.writable ||
            (n++,
            this.once("drain", function () {
              --n || e();
            }));
      } else e();
    }
    poll() {
      (this.polling = !0), this.doPoll(), this.emit("poll");
    }
    onData(t) {
      let e = (n) => {
        if (
          (this.readyState === "opening" && n.type === "open" && this.onOpen(),
          n.type === "close")
        )
          return this.onClose(), !1;
        this.onPacket(n);
      };
      bo(t, this.socket.binaryType).forEach(e),
        this.readyState !== "closed" &&
          ((this.polling = !1),
          this.emit("pollComplete"),
          this.readyState === "open" && this.poll());
    }
    doClose() {
      let t = () => {
        this.write([{ type: "close" }]);
      };
      this.readyState === "open" ? t() : this.once("open", t);
    }
    write(t) {
      (this.writable = !1),
        yo(t, (e) => {
          this.doWrite(e, () => {
            (this.writable = !0), this.emit("drain");
          });
        });
    }
    uri() {
      let t = this.query || {},
        e = this.opts.secure ? "https" : "http",
        n = "";
      this.opts.timestampRequests !== !1 &&
        (t[this.opts.timestampParam] = (0, Eo.default)()),
        !this.supportsBinary && !t.sid && (t.b64 = 1),
        this.opts.port &&
          ((e === "https" && Number(this.opts.port) !== 443) ||
            (e === "http" && Number(this.opts.port) !== 80)) &&
          (n = ":" + this.opts.port);
      let i = ko.default.encode(t),
        o = this.opts.hostname.indexOf(":") !== -1;
      return (
        e +
        "://" +
        (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
        n +
        this.opts.path +
        (i.length ? "?" + i : "")
      );
    }
  };
  function zp() {}
  var Gp = (function () {
      return new Ur({ xdomain: !1 }).responseType != null;
    })(),
    Gr = class extends zr {
      constructor(t) {
        super(t);
        if (typeof location < "u") {
          let n = location.protocol === "https:",
            i = location.port;
          i || (i = n ? "443" : "80"),
            (this.xd =
              (typeof location < "u" && t.hostname !== location.hostname) ||
              i !== t.port),
            (this.xs = t.secure !== n);
        }
        let e = t && t.forceBase64;
        this.supportsBinary = Gp && !e;
      }
      request(t = {}) {
        return (
          Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts),
          new X(this.uri(), t)
        );
      }
      doWrite(t, e) {
        let n = this.request({ method: "POST", data: t });
        n.on("success", e),
          n.on("error", (i) => {
            this.onError("xhr post error", i);
          });
      }
      doPoll() {
        let t = this.request();
        t.on("data", this.onData.bind(this)),
          t.on("error", (e) => {
            this.onError("xhr poll error", e);
          }),
          (this.pollXhr = t);
      }
    },
    X = class extends Ao.Emitter {
      constructor(t, e) {
        super();
        Q(this, e),
          (this.opts = e),
          (this.method = e.method || "GET"),
          (this.uri = t),
          (this.async = e.async !== !1),
          (this.data = e.data !== void 0 ? e.data : null),
          this.create();
      }
      create() {
        let t = Ee(
          this.opts,
          "agent",
          "pfx",
          "key",
          "passphrase",
          "cert",
          "ca",
          "ciphers",
          "rejectUnauthorized",
          "autoUnref"
        );
        (t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs);
        let e = (this.xhr = new Ur(t));
        try {
          e.open(this.method, this.uri, this.async);
          try {
            if (this.opts.extraHeaders) {
              e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0);
              for (let n in this.opts.extraHeaders)
                this.opts.extraHeaders.hasOwnProperty(n) &&
                  e.setRequestHeader(n, this.opts.extraHeaders[n]);
            }
          } catch {}
          if (this.method === "POST")
            try {
              e.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch {}
          try {
            e.setRequestHeader("Accept", "*/*");
          } catch {}
          "withCredentials" in e &&
            (e.withCredentials = this.opts.withCredentials),
            this.opts.requestTimeout && (e.timeout = this.opts.requestTimeout),
            (e.onreadystatechange = () => {
              e.readyState === 4 &&
                (e.status === 200 || e.status === 1223
                  ? this.onLoad()
                  : this.setTimeoutFn(() => {
                      this.onError(typeof e.status == "number" ? e.status : 0);
                    }, 0));
            }),
            e.send(this.data);
        } catch (n) {
          this.setTimeoutFn(() => {
            this.onError(n);
          }, 0);
          return;
        }
        typeof document < "u" &&
          ((this.index = X.requestsCount++), (X.requests[this.index] = this));
      }
      onSuccess() {
        this.emit("success"), this.cleanup();
      }
      onData(t) {
        this.emit("data", t), this.onSuccess();
      }
      onError(t) {
        this.emit("error", t), this.cleanup(!0);
      }
      cleanup(t) {
        if (!(typeof this.xhr > "u" || this.xhr === null)) {
          if (((this.xhr.onreadystatechange = zp), t))
            try {
              this.xhr.abort();
            } catch {}
          typeof document < "u" && delete X.requests[this.index],
            (this.xhr = null);
        }
      }
      onLoad() {
        let t = this.xhr.responseText;
        t !== null && this.onData(t);
      }
      abort() {
        this.cleanup();
      }
    };
  X.requestsCount = 0;
  X.requests = {};
  if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", To);
    else if (typeof addEventListener == "function") {
      let r = "onpagehide" in Y ? "pagehide" : "unload";
      addEventListener(r, To, !1);
    }
  }
  function To() {
    for (let r in X.requests)
      X.requests.hasOwnProperty(r) && X.requests[r].abort();
  }
  var Io = c(Ce(), 1),
    Po = c(Yr(), 1);
  var Co = (() =>
      typeof Promise == "function" && typeof Promise.resolve == "function"
        ? (t) => Promise.resolve().then(t)
        : (t, e) => e(t, 0))(),
    bt = Y.WebSocket || Y.MozWebSocket,
    Re = !0,
    Ro = "arraybuffer";
  var No =
      typeof navigator < "u" &&
      typeof navigator.product == "string" &&
      navigator.product.toLowerCase() === "reactnative",
    Ft = class extends yt {
      constructor(t) {
        super(t);
        this.supportsBinary = !t.forceBase64;
      }
      get name() {
        return "websocket";
      }
      doOpen() {
        if (!this.check()) return;
        let t = this.uri(),
          e = this.opts.protocols,
          n = No
            ? {}
            : Ee(
                this.opts,
                "agent",
                "perMessageDeflate",
                "pfx",
                "key",
                "passphrase",
                "cert",
                "ca",
                "ciphers",
                "rejectUnauthorized",
                "localAddress",
                "protocolVersion",
                "origin",
                "maxPayload",
                "family",
                "checkServerIdentity"
              );
        this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
        try {
          this.ws =
            Re && !No ? (e ? new bt(t, e) : new bt(t)) : new bt(t, e, n);
        } catch (i) {
          return this.emit("error", i);
        }
        (this.ws.binaryType = this.socket.binaryType || Ro),
          this.addEventListeners();
      }
      addEventListeners() {
        (this.ws.onopen = () => {
          this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
        }),
          (this.ws.onclose = this.onClose.bind(this)),
          (this.ws.onmessage = (t) => this.onData(t.data)),
          (this.ws.onerror = (t) => this.onError("websocket error", t));
      }
      write(t) {
        this.writable = !1;
        for (let e = 0; e < t.length; e++) {
          let n = t[e],
            i = e === t.length - 1;
          ke(n, this.supportsBinary, (o) => {
            let s = {};
            Re ||
              (n.options && (s.compress = n.options.compress),
              this.opts.perMessageDeflate &&
                (typeof o == "string" ? Buffer.byteLength(o) : o.length) <
                  this.opts.perMessageDeflate.threshold &&
                (s.compress = !1));
            try {
              Re ? this.ws.send(o) : this.ws.send(o, s);
            } catch {}
            i &&
              Co(() => {
                (this.writable = !0), this.emit("drain");
              }, this.setTimeoutFn);
          });
        }
      }
      doClose() {
        typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
      }
      uri() {
        let t = this.query || {},
          e = this.opts.secure ? "wss" : "ws",
          n = "";
        this.opts.port &&
          ((e === "wss" && Number(this.opts.port) !== 443) ||
            (e === "ws" && Number(this.opts.port) !== 80)) &&
          (n = ":" + this.opts.port),
          this.opts.timestampRequests &&
            (t[this.opts.timestampParam] = (0, Po.default)()),
          this.supportsBinary || (t.b64 = 1);
        let i = Io.default.encode(t),
          o = this.opts.hostname.indexOf(":") !== -1;
        return (
          e +
          "://" +
          (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
          n +
          this.opts.path +
          (i.length ? "?" + i : "")
        );
      }
      check() {
        return (
          !!bt && !("__initialize" in bt && this.name === Ft.prototype.name)
        );
      }
    };
  var Xr = { websocket: Ft, polling: Gr };
  var qo = c(Ce(), 1),
    Jr = c(Dr(), 1),
    Bo = c(ut(), 1);
  var K = class extends Bo.Emitter {
    constructor(t, e = {}) {
      super();
      t && typeof t == "object" && ((e = t), (t = null)),
        t
          ? ((t = (0, Jr.default)(t)),
            (e.hostname = t.host),
            (e.secure = t.protocol === "https" || t.protocol === "wss"),
            (e.port = t.port),
            t.query && (e.query = t.query))
          : e.host && (e.hostname = (0, Jr.default)(e.host).host),
        Q(this, e),
        (this.secure =
          e.secure != null
            ? e.secure
            : typeof location < "u" && location.protocol === "https:"),
        e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
        (this.hostname =
          e.hostname ||
          (typeof location < "u" ? location.hostname : "localhost")),
        (this.port =
          e.port ||
          (typeof location < "u" && location.port
            ? location.port
            : this.secure
            ? "443"
            : "80")),
        (this.transports = e.transports || ["polling", "websocket"]),
        (this.readyState = ""),
        (this.writeBuffer = []),
        (this.prevBufferLen = 0),
        (this.opts = Object.assign(
          {
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            rejectUnauthorized: !0,
            perMessageDeflate: { threshold: 1024 },
            transportOptions: {},
            closeOnBeforeunload: !0,
          },
          e
        )),
        (this.opts.path = this.opts.path.replace(/\/$/, "") + "/"),
        typeof this.opts.query == "string" &&
          (this.opts.query = qo.default.decode(this.opts.query)),
        (this.id = null),
        (this.upgrades = null),
        (this.pingInterval = null),
        (this.pingTimeout = null),
        (this.pingTimeoutTimer = null),
        typeof addEventListener == "function" &&
          (this.opts.closeOnBeforeunload &&
            addEventListener(
              "beforeunload",
              () => {
                this.transport &&
                  (this.transport.removeAllListeners(), this.transport.close());
              },
              !1
            ),
          this.hostname !== "localhost" &&
            ((this.offlineEventListener = () => {
              this.onClose("transport close");
            }),
            addEventListener("offline", this.offlineEventListener, !1))),
        this.open();
    }
    createTransport(t) {
      let e = Xp(this.opts.query);
      (e.EIO = Vr), (e.transport = t), this.id && (e.sid = this.id);
      let n = Object.assign({}, this.opts.transportOptions[t], this.opts, {
        query: e,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      });
      return new Xr[t](n);
    }
    open() {
      let t;
      if (
        this.opts.rememberUpgrade &&
        K.priorWebsocketSuccess &&
        this.transports.indexOf("websocket") !== -1
      )
        t = "websocket";
      else if (this.transports.length === 0) {
        this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
        return;
      } else t = this.transports[0];
      this.readyState = "opening";
      try {
        t = this.createTransport(t);
      } catch {
        this.transports.shift(), this.open();
        return;
      }
      t.open(), this.setTransport(t);
    }
    setTransport(t) {
      this.transport && this.transport.removeAllListeners(),
        (this.transport = t),
        t
          .on("drain", this.onDrain.bind(this))
          .on("packet", this.onPacket.bind(this))
          .on("error", this.onError.bind(this))
          .on("close", () => {
            this.onClose("transport close");
          });
    }
    probe(t) {
      let e = this.createTransport(t),
        n = !1;
      K.priorWebsocketSuccess = !1;
      let i = () => {
        n ||
          (e.send([{ type: "ping", data: "probe" }]),
          e.once("packet", (_) => {
            if (!n)
              if (_.type === "pong" && _.data === "probe") {
                if (
                  ((this.upgrading = !0), this.emitReserved("upgrading", e), !e)
                )
                  return;
                (K.priorWebsocketSuccess = e.name === "websocket"),
                  this.transport.pause(() => {
                    n ||
                      (this.readyState !== "closed" &&
                        (h(),
                        this.setTransport(e),
                        e.send([{ type: "upgrade" }]),
                        this.emitReserved("upgrade", e),
                        (e = null),
                        (this.upgrading = !1),
                        this.flush()));
                  });
              } else {
                let m = new Error("probe error");
                (m.transport = e.name), this.emitReserved("upgradeError", m);
              }
          }));
      };
      function o() {
        n || ((n = !0), h(), e.close(), (e = null));
      }
      let s = (_) => {
        let m = new Error("probe error: " + _);
        (m.transport = e.name), o(), this.emitReserved("upgradeError", m);
      };
      function a() {
        s("transport closed");
      }
      function u() {
        s("socket closed");
      }
      function l(_) {
        e && _.name !== e.name && o();
      }
      let h = () => {
        e.removeListener("open", i),
          e.removeListener("error", s),
          e.removeListener("close", a),
          this.off("close", u),
          this.off("upgrading", l);
      };
      e.once("open", i),
        e.once("error", s),
        e.once("close", a),
        this.once("close", u),
        this.once("upgrading", l),
        e.open();
    }
    onOpen() {
      if (
        ((this.readyState = "open"),
        (K.priorWebsocketSuccess = this.transport.name === "websocket"),
        this.emitReserved("open"),
        this.flush(),
        this.readyState === "open" && this.opts.upgrade && this.transport.pause)
      ) {
        let t = 0,
          e = this.upgrades.length;
        for (; t < e; t++) this.probe(this.upgrades[t]);
      }
    }
    onPacket(t) {
      if (
        this.readyState === "opening" ||
        this.readyState === "open" ||
        this.readyState === "closing"
      )
        switch (
          (this.emitReserved("packet", t),
          this.emitReserved("heartbeat"),
          t.type)
        ) {
          case "open":
            this.onHandshake(JSON.parse(t.data));
            break;
          case "ping":
            this.resetPingTimeout(),
              this.sendPacket("pong"),
              this.emitReserved("ping"),
              this.emitReserved("pong");
            break;
          case "error":
            let e = new Error("server error");
            (e.code = t.data), this.onError(e);
            break;
          case "message":
            this.emitReserved("data", t.data),
              this.emitReserved("message", t.data);
            break;
        }
    }
    onHandshake(t) {
      this.emitReserved("handshake", t),
        (this.id = t.sid),
        (this.transport.query.sid = t.sid),
        (this.upgrades = this.filterUpgrades(t.upgrades)),
        (this.pingInterval = t.pingInterval),
        (this.pingTimeout = t.pingTimeout),
        this.onOpen(),
        this.readyState !== "closed" && this.resetPingTimeout();
    }
    resetPingTimeout() {
      this.clearTimeoutFn(this.pingTimeoutTimer),
        (this.pingTimeoutTimer = this.setTimeoutFn(() => {
          this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout)),
        this.opts.autoUnref && this.pingTimeoutTimer.unref();
    }
    onDrain() {
      this.writeBuffer.splice(0, this.prevBufferLen),
        (this.prevBufferLen = 0),
        this.writeBuffer.length === 0
          ? this.emitReserved("drain")
          : this.flush();
    }
    flush() {
      this.readyState !== "closed" &&
        this.transport.writable &&
        !this.upgrading &&
        this.writeBuffer.length &&
        (this.transport.send(this.writeBuffer),
        (this.prevBufferLen = this.writeBuffer.length),
        this.emitReserved("flush"));
    }
    write(t, e, n) {
      return this.sendPacket("message", t, e, n), this;
    }
    send(t, e, n) {
      return this.sendPacket("message", t, e, n), this;
    }
    sendPacket(t, e, n, i) {
      if (
        (typeof e == "function" && ((i = e), (e = void 0)),
        typeof n == "function" && ((i = n), (n = null)),
        this.readyState === "closing" || this.readyState === "closed")
      )
        return;
      (n = n || {}), (n.compress = n.compress !== !1);
      let o = { type: t, data: e, options: n };
      this.emitReserved("packetCreate", o),
        this.writeBuffer.push(o),
        i && this.once("flush", i),
        this.flush();
    }
    close() {
      let t = () => {
          this.onClose("forced close"), this.transport.close();
        },
        e = () => {
          this.off("upgrade", e), this.off("upgradeError", e), t();
        },
        n = () => {
          this.once("upgrade", e), this.once("upgradeError", e);
        };
      return (
        (this.readyState === "opening" || this.readyState === "open") &&
          ((this.readyState = "closing"),
          this.writeBuffer.length
            ? this.once("drain", () => {
                this.upgrading ? n() : t();
              })
            : this.upgrading
            ? n()
            : t()),
        this
      );
    }
    onError(t) {
      (K.priorWebsocketSuccess = !1),
        this.emitReserved("error", t),
        this.onClose("transport error", t);
    }
    onClose(t, e) {
      (this.readyState === "opening" ||
        this.readyState === "open" ||
        this.readyState === "closing") &&
        (this.clearTimeoutFn(this.pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        typeof removeEventListener == "function" &&
          removeEventListener("offline", this.offlineEventListener, !1),
        (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", t, e),
        (this.writeBuffer = []),
        (this.prevBufferLen = 0));
    }
    filterUpgrades(t) {
      let e = [],
        n = 0,
        i = t.length;
      for (; n < i; n++) ~this.transports.indexOf(t[n]) && e.push(t[n]);
      return e;
    }
  };
  K.protocol = Vr;
  function Xp(r) {
    let t = {};
    for (let e in r) r.hasOwnProperty(e) && (t[e] = r[e]);
    return t;
  }
  var lg = K.protocol;
  var tn = {};
  Sl(tn, {
    Decoder: () => Ne,
    Encoder: () => $o,
    PacketType: () => S,
    protocol: () => Do,
  });
  var Fo = c(ut(), 1);
  var Jp = typeof ArrayBuffer == "function",
    Zp = (r) =>
      typeof ArrayBuffer.isView == "function"
        ? ArrayBuffer.isView(r)
        : r.buffer instanceof ArrayBuffer,
    jo = Object.prototype.toString,
    Qp =
      typeof Blob == "function" ||
      (typeof Blob < "u" && jo.call(Blob) === "[object BlobConstructor]"),
    th =
      typeof File == "function" ||
      (typeof File < "u" && jo.call(File) === "[object FileConstructor]");
  function $t(r) {
    return (
      (Jp && (r instanceof ArrayBuffer || Zp(r))) ||
      (Qp && r instanceof Blob) ||
      (th && r instanceof File)
    );
  }
  function Dt(r, t) {
    if (!r || typeof r != "object") return !1;
    if (Array.isArray(r)) {
      for (let e = 0, n = r.length; e < n; e++) if (Dt(r[e])) return !0;
      return !1;
    }
    if ($t(r)) return !0;
    if (r.toJSON && typeof r.toJSON == "function" && arguments.length === 1)
      return Dt(r.toJSON(), !0);
    for (let e in r)
      if (Object.prototype.hasOwnProperty.call(r, e) && Dt(r[e])) return !0;
    return !1;
  }
  function Lo(r) {
    let t = [],
      e = r.data,
      n = r;
    return (
      (n.data = Zr(e, t)), (n.attachments = t.length), { packet: n, buffers: t }
    );
  }
  function Zr(r, t) {
    if (!r) return r;
    if ($t(r)) {
      let e = { _placeholder: !0, num: t.length };
      return t.push(r), e;
    } else if (Array.isArray(r)) {
      let e = new Array(r.length);
      for (let n = 0; n < r.length; n++) e[n] = Zr(r[n], t);
      return e;
    } else if (typeof r == "object" && !(r instanceof Date)) {
      let e = {};
      for (let n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = Zr(r[n], t));
      return e;
    }
    return r;
  }
  function Mo(r, t) {
    return (r.data = Qr(r.data, t)), (r.attachments = void 0), r;
  }
  function Qr(r, t) {
    if (!r) return r;
    if (r && r._placeholder) return t[r.num];
    if (Array.isArray(r)) for (let e = 0; e < r.length; e++) r[e] = Qr(r[e], t);
    else if (typeof r == "object")
      for (let e in r)
        Object.prototype.hasOwnProperty.call(r, e) && (r[e] = Qr(r[e], t));
    return r;
  }
  var Do = 5,
    S;
  (function (r) {
    (r[(r.CONNECT = 0)] = "CONNECT"),
      (r[(r.DISCONNECT = 1)] = "DISCONNECT"),
      (r[(r.EVENT = 2)] = "EVENT"),
      (r[(r.ACK = 3)] = "ACK"),
      (r[(r.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
      (r[(r.BINARY_EVENT = 5)] = "BINARY_EVENT"),
      (r[(r.BINARY_ACK = 6)] = "BINARY_ACK");
  })(S || (S = {}));
  var $o = class {
      encode(t) {
        return (t.type === S.EVENT || t.type === S.ACK) && Dt(t)
          ? ((t.type = t.type === S.EVENT ? S.BINARY_EVENT : S.BINARY_ACK),
            this.encodeAsBinary(t))
          : [this.encodeAsString(t)];
      }
      encodeAsString(t) {
        let e = "" + t.type;
        return (
          (t.type === S.BINARY_EVENT || t.type === S.BINARY_ACK) &&
            (e += t.attachments + "-"),
          t.nsp && t.nsp !== "/" && (e += t.nsp + ","),
          t.id != null && (e += t.id),
          t.data != null && (e += JSON.stringify(t.data)),
          e
        );
      }
      encodeAsBinary(t) {
        let e = Lo(t),
          n = this.encodeAsString(e.packet),
          i = e.buffers;
        return i.unshift(n), i;
      }
    },
    Ne = class extends Fo.Emitter {
      constructor() {
        super();
      }
      add(t) {
        let e;
        if (typeof t == "string")
          (e = this.decodeString(t)),
            e.type === S.BINARY_EVENT || e.type === S.BINARY_ACK
              ? ((this.reconstructor = new Uo(e)),
                e.attachments === 0 && super.emitReserved("decoded", e))
              : super.emitReserved("decoded", e);
        else if ($t(t) || t.base64)
          if (this.reconstructor)
            (e = this.reconstructor.takeBinaryData(t)),
              e &&
                ((this.reconstructor = null), super.emitReserved("decoded", e));
          else
            throw new Error("got binary data when not reconstructing a packet");
        else throw new Error("Unknown type: " + t);
      }
      decodeString(t) {
        let e = 0,
          n = { type: Number(t.charAt(0)) };
        if (S[n.type] === void 0)
          throw new Error("unknown packet type " + n.type);
        if (n.type === S.BINARY_EVENT || n.type === S.BINARY_ACK) {
          let o = e + 1;
          for (; t.charAt(++e) !== "-" && e != t.length; );
          let s = t.substring(o, e);
          if (s != Number(s) || t.charAt(e) !== "-")
            throw new Error("Illegal attachments");
          n.attachments = Number(s);
        }
        if (t.charAt(e + 1) === "/") {
          let o = e + 1;
          for (; ++e && !(t.charAt(e) === "," || e === t.length); );
          n.nsp = t.substring(o, e);
        } else n.nsp = "/";
        let i = t.charAt(e + 1);
        if (i !== "" && Number(i) == i) {
          let o = e + 1;
          for (; ++e; ) {
            let s = t.charAt(e);
            if (s == null || Number(s) != s) {
              --e;
              break;
            }
            if (e === t.length) break;
          }
          n.id = Number(t.substring(o, e + 1));
        }
        if (t.charAt(++e)) {
          let o = eh(t.substr(e));
          if (Ne.isPayloadValid(n.type, o)) n.data = o;
          else throw new Error("invalid payload");
        }
        return n;
      }
      static isPayloadValid(t, e) {
        switch (t) {
          case S.CONNECT:
            return typeof e == "object";
          case S.DISCONNECT:
            return e === void 0;
          case S.CONNECT_ERROR:
            return typeof e == "string" || typeof e == "object";
          case S.EVENT:
          case S.BINARY_EVENT:
            return Array.isArray(e) && e.length > 0;
          case S.ACK:
          case S.BINARY_ACK:
            return Array.isArray(e);
        }
      }
      destroy() {
        this.reconstructor && this.reconstructor.finishedReconstruction();
      }
    };
  function eh(r) {
    try {
      return JSON.parse(r);
    } catch {
      return !1;
    }
  }
  var Uo = class {
    constructor(t) {
      (this.packet = t), (this.buffers = []), (this.reconPack = t);
    }
    takeBinaryData(t) {
      if (
        (this.buffers.push(t),
        this.buffers.length === this.reconPack.attachments)
      ) {
        let e = Mo(this.reconPack, this.buffers);
        return this.finishedReconstruction(), e;
      }
      return null;
    }
    finishedReconstruction() {
      (this.reconPack = null), (this.buffers = []);
    }
  };
  function V(r, t, e) {
    return (
      r.on(t, e),
      function () {
        r.off(t, e);
      }
    );
  }
  var Vo = c(ut(), 1),
    rh = Object.freeze({
      connect: 1,
      connect_error: 1,
      disconnect: 1,
      disconnecting: 1,
      newListener: 1,
      removeListener: 1,
    }),
    Ut = class extends Vo.Emitter {
      constructor(t, e, n) {
        super();
        (this.connected = !1),
          (this.disconnected = !0),
          (this.receiveBuffer = []),
          (this.sendBuffer = []),
          (this.ids = 0),
          (this.acks = {}),
          (this.flags = {}),
          (this.io = t),
          (this.nsp = e),
          n && n.auth && (this.auth = n.auth),
          this.io._autoConnect && this.open();
      }
      subEvents() {
        if (this.subs) return;
        let t = this.io;
        this.subs = [
          V(t, "open", this.onopen.bind(this)),
          V(t, "packet", this.onpacket.bind(this)),
          V(t, "error", this.onerror.bind(this)),
          V(t, "close", this.onclose.bind(this)),
        ];
      }
      get active() {
        return !!this.subs;
      }
      connect() {
        return this.connected
          ? this
          : (this.subEvents(),
            this.io._reconnecting || this.io.open(),
            this.io._readyState === "open" && this.onopen(),
            this);
      }
      open() {
        return this.connect();
      }
      send(...t) {
        return t.unshift("message"), this.emit.apply(this, t), this;
      }
      emit(t, ...e) {
        if (rh.hasOwnProperty(t))
          throw new Error('"' + t + '" is a reserved event name');
        e.unshift(t);
        let n = { type: S.EVENT, data: e };
        if (
          ((n.options = {}),
          (n.options.compress = this.flags.compress !== !1),
          typeof e[e.length - 1] == "function")
        ) {
          let s = this.ids++,
            a = e.pop();
          this._registerAckCallback(s, a), (n.id = s);
        }
        let i =
          this.io.engine &&
          this.io.engine.transport &&
          this.io.engine.transport.writable;
        return (
          (this.flags.volatile && (!i || !this.connected)) ||
            (this.connected ? this.packet(n) : this.sendBuffer.push(n)),
          (this.flags = {}),
          this
        );
      }
      _registerAckCallback(t, e) {
        let n = this.flags.timeout;
        if (n === void 0) {
          this.acks[t] = e;
          return;
        }
        let i = this.io.setTimeoutFn(() => {
          delete this.acks[t];
          for (let o = 0; o < this.sendBuffer.length; o++)
            this.sendBuffer[o].id === t && this.sendBuffer.splice(o, 1);
          e.call(this, new Error("operation has timed out"));
        }, n);
        this.acks[t] = (...o) => {
          this.io.clearTimeoutFn(i), e.apply(this, [null, ...o]);
        };
      }
      packet(t) {
        (t.nsp = this.nsp), this.io._packet(t);
      }
      onopen() {
        typeof this.auth == "function"
          ? this.auth((t) => {
              this.packet({ type: S.CONNECT, data: t });
            })
          : this.packet({ type: S.CONNECT, data: this.auth });
      }
      onerror(t) {
        this.connected || this.emitReserved("connect_error", t);
      }
      onclose(t) {
        (this.connected = !1),
          (this.disconnected = !0),
          delete this.id,
          this.emitReserved("disconnect", t);
      }
      onpacket(t) {
        if (t.nsp === this.nsp)
          switch (t.type) {
            case S.CONNECT:
              if (t.data && t.data.sid) {
                let i = t.data.sid;
                this.onconnect(i);
              } else
                this.emitReserved(
                  "connect_error",
                  new Error(
                    "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                  )
                );
              break;
            case S.EVENT:
              this.onevent(t);
              break;
            case S.BINARY_EVENT:
              this.onevent(t);
              break;
            case S.ACK:
              this.onack(t);
              break;
            case S.BINARY_ACK:
              this.onack(t);
              break;
            case S.DISCONNECT:
              this.ondisconnect();
              break;
            case S.CONNECT_ERROR:
              this.destroy();
              let n = new Error(t.data.message);
              (n.data = t.data.data), this.emitReserved("connect_error", n);
              break;
          }
      }
      onevent(t) {
        let e = t.data || [];
        t.id != null && e.push(this.ack(t.id)),
          this.connected
            ? this.emitEvent(e)
            : this.receiveBuffer.push(Object.freeze(e));
      }
      emitEvent(t) {
        if (this._anyListeners && this._anyListeners.length) {
          let e = this._anyListeners.slice();
          for (let n of e) n.apply(this, t);
        }
        super.emit.apply(this, t);
      }
      ack(t) {
        let e = this,
          n = !1;
        return function (...i) {
          n || ((n = !0), e.packet({ type: S.ACK, id: t, data: i }));
        };
      }
      onack(t) {
        let e = this.acks[t.id];
        typeof e == "function" &&
          (e.apply(this, t.data), delete this.acks[t.id]);
      }
      onconnect(t) {
        (this.id = t),
          (this.connected = !0),
          (this.disconnected = !1),
          this.emitBuffered(),
          this.emitReserved("connect");
      }
      emitBuffered() {
        this.receiveBuffer.forEach((t) => this.emitEvent(t)),
          (this.receiveBuffer = []),
          this.sendBuffer.forEach((t) => this.packet(t)),
          (this.sendBuffer = []);
      }
      ondisconnect() {
        this.destroy(), this.onclose("io server disconnect");
      }
      destroy() {
        this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
          this.io._destroy(this);
      }
      disconnect() {
        return (
          this.connected && this.packet({ type: S.DISCONNECT }),
          this.destroy(),
          this.connected && this.onclose("io client disconnect"),
          this
        );
      }
      close() {
        return this.disconnect();
      }
      compress(t) {
        return (this.flags.compress = t), this;
      }
      get volatile() {
        return (this.flags.volatile = !0), this;
      }
      timeout(t) {
        return (this.flags.timeout = t), this;
      }
      onAny(t) {
        return (
          (this._anyListeners = this._anyListeners || []),
          this._anyListeners.push(t),
          this
        );
      }
      prependAny(t) {
        return (
          (this._anyListeners = this._anyListeners || []),
          this._anyListeners.unshift(t),
          this
        );
      }
      offAny(t) {
        if (!this._anyListeners) return this;
        if (t) {
          let e = this._anyListeners;
          for (let n = 0; n < e.length; n++)
            if (t === e[n]) return e.splice(n, 1), this;
        } else this._anyListeners = [];
        return this;
      }
      listenersAny() {
        return this._anyListeners || [];
      }
    };
  var Yo = c(Wo(), 1),
    Ko = c(ut(), 1),
    Vt = class extends Ko.Emitter {
      constructor(t, e) {
        var n;
        super();
        (this.nsps = {}),
          (this.subs = []),
          t && typeof t == "object" && ((e = t), (t = void 0)),
          (e = e || {}),
          (e.path = e.path || "/socket.io"),
          (this.opts = e),
          Q(this, e),
          this.reconnection(e.reconnection !== !1),
          this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
          this.reconnectionDelay(e.reconnectionDelay || 1e3),
          this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
          this.randomizationFactor(
            (n = e.randomizationFactor) !== null && n !== void 0 ? n : 0.5
          ),
          (this.backoff = new Yo.default({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
          })),
          this.timeout(e.timeout == null ? 2e4 : e.timeout),
          (this._readyState = "closed"),
          (this.uri = t);
        let i = e.parser || tn;
        (this.encoder = new i.Encoder()),
          (this.decoder = new i.Decoder()),
          (this._autoConnect = e.autoConnect !== !1),
          this._autoConnect && this.open();
      }
      reconnection(t) {
        return arguments.length
          ? ((this._reconnection = !!t), this)
          : this._reconnection;
      }
      reconnectionAttempts(t) {
        return t === void 0
          ? this._reconnectionAttempts
          : ((this._reconnectionAttempts = t), this);
      }
      reconnectionDelay(t) {
        var e;
        return t === void 0
          ? this._reconnectionDelay
          : ((this._reconnectionDelay = t),
            (e = this.backoff) === null || e === void 0 || e.setMin(t),
            this);
      }
      randomizationFactor(t) {
        var e;
        return t === void 0
          ? this._randomizationFactor
          : ((this._randomizationFactor = t),
            (e = this.backoff) === null || e === void 0 || e.setJitter(t),
            this);
      }
      reconnectionDelayMax(t) {
        var e;
        return t === void 0
          ? this._reconnectionDelayMax
          : ((this._reconnectionDelayMax = t),
            (e = this.backoff) === null || e === void 0 || e.setMax(t),
            this);
      }
      timeout(t) {
        return arguments.length ? ((this._timeout = t), this) : this._timeout;
      }
      maybeReconnectOnOpen() {
        !this._reconnecting &&
          this._reconnection &&
          this.backoff.attempts === 0 &&
          this.reconnect();
      }
      open(t) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new K(this.uri, this.opts);
        let e = this.engine,
          n = this;
        (this._readyState = "opening"), (this.skipReconnect = !1);
        let i = V(e, "open", function () {
            n.onopen(), t && t();
          }),
          o = V(e, "error", (s) => {
            n.cleanup(),
              (n._readyState = "closed"),
              this.emitReserved("error", s),
              t ? t(s) : n.maybeReconnectOnOpen();
          });
        if (this._timeout !== !1) {
          let s = this._timeout;
          s === 0 && i();
          let a = this.setTimeoutFn(() => {
            i(), e.close(), e.emit("error", new Error("timeout"));
          }, s);
          this.opts.autoUnref && a.unref(),
            this.subs.push(function () {
              clearTimeout(a);
            });
        }
        return this.subs.push(i), this.subs.push(o), this;
      }
      connect(t) {
        return this.open(t);
      }
      onopen() {
        this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
        let t = this.engine;
        this.subs.push(
          V(t, "ping", this.onping.bind(this)),
          V(t, "data", this.ondata.bind(this)),
          V(t, "error", this.onerror.bind(this)),
          V(t, "close", this.onclose.bind(this)),
          V(this.decoder, "decoded", this.ondecoded.bind(this))
        );
      }
      onping() {
        this.emitReserved("ping");
      }
      ondata(t) {
        this.decoder.add(t);
      }
      ondecoded(t) {
        this.emitReserved("packet", t);
      }
      onerror(t) {
        this.emitReserved("error", t);
      }
      socket(t, e) {
        let n = this.nsps[t];
        return n || ((n = new Ut(this, t, e)), (this.nsps[t] = n)), n;
      }
      _destroy(t) {
        let e = Object.keys(this.nsps);
        for (let n of e) if (this.nsps[n].active) return;
        this._close();
      }
      _packet(t) {
        let e = this.encoder.encode(t);
        for (let n = 0; n < e.length; n++) this.engine.write(e[n], t.options);
      }
      cleanup() {
        this.subs.forEach((t) => t()),
          (this.subs.length = 0),
          this.decoder.destroy();
      }
      _close() {
        (this.skipReconnect = !0),
          (this._reconnecting = !1),
          this.onclose("forced close"),
          this.engine && this.engine.close();
      }
      disconnect() {
        return this._close();
      }
      onclose(t) {
        this.cleanup(),
          this.backoff.reset(),
          (this._readyState = "closed"),
          this.emitReserved("close", t),
          this._reconnection && !this.skipReconnect && this.reconnect();
      }
      reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        let t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
          this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            (this._reconnecting = !1);
        else {
          let e = this.backoff.duration();
          this._reconnecting = !0;
          let n = this.setTimeoutFn(() => {
            t.skipReconnect ||
              (this.emitReserved("reconnect_attempt", t.backoff.attempts),
              !t.skipReconnect &&
                t.open((i) => {
                  i
                    ? ((t._reconnecting = !1),
                      t.reconnect(),
                      this.emitReserved("reconnect_error", i))
                    : t.onreconnect();
                }));
          }, e);
          this.opts.autoUnref && n.unref(),
            this.subs.push(function () {
              clearTimeout(n);
            });
        }
      }
      onreconnect() {
        let t = this.backoff.attempts;
        (this._reconnecting = !1),
          this.backoff.reset(),
          this.emitReserved("reconnect", t);
      }
    };
  var Ht = {};
  function Wt(r, t) {
    typeof r == "object" && ((t = r), (r = void 0)), (t = t || {});
    let e = so(r, t.path || "/socket.io"),
      n = e.source,
      i = e.id,
      o = e.path,
      s = Ht[i] && o in Ht[i].nsps,
      a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s,
      u;
    return (
      a ? (u = new Vt(n, t)) : (Ht[i] || (Ht[i] = new Vt(n, t)), (u = Ht[i])),
      e.query && !t.query && (t.query = e.queryKey),
      u.socket(e.path, t)
    );
  }
  Object.assign(Wt, { Manager: Vt, Socket: Ut, io: Wt, connect: Wt });
  var os = c(N()),
    fn = c(it()),
    ln = c(J()),
    ss = c(un());
  function as() {
    return (0, ln.of)(window);
  }
  function cs() {
    return (0, ln.of)(document);
  }
  function us() {
    return new fn.BehaviorSubject(window.___browserSync___.options);
  }
  function fs() {
    var r = window.___browserSync___.socketConfig,
      t = window.___browserSync___.socketUrl,
      e = Wt(t, r),
      n = os.Observable.create(function (o) {
        e.onAny(function () {
          for (var s = [], a = 0; a < arguments.length; a++)
            s[a] = arguments[a];
          o.next(s);
        });
      }).pipe((0, ss.share)()),
      i = new fn.BehaviorSubject(e);
    return (window.___browserSync___.socket = e), { socket$: n, io$: i };
  }
  var ls = c(it()),
    qh = {
      display: "none",
      padding: "15px",
      fontFamily: "sans-serif",
      position: "fixed",
      fontSize: "0.9em",
      zIndex: 9999,
      right: 0,
      top: 0,
      borderBottomLeftRadius: "5px",
      backgroundColor: "#1B2032",
      margin: 0,
      color: "white",
      textAlign: "center",
      pointerEvents: "none",
    };
  function ps(r) {
    var t = qh,
      e;
    if (r.notify.styles)
      if (Object.prototype.toString.call(r.notify.styles) === "[object Array]")
        t = r.notify.styles.join(";");
      else
        for (var n in r.notify.styles)
          r.notify.styles.hasOwnProperty(n) && (t[n] = r.notify.styles[n]);
    if (
      ((e = document.createElement("DIV")),
      (e.id = "__bs_notify__"),
      typeof t == "string")
    )
      e.style.cssText = t;
    else for (var i in t) e.style[i] = t[i];
    return new ls.BehaviorSubject(e);
  }
  var aa = c(it());
  var Ls = c(I()),
    Ms = c(L());
  var Cs = c(it()),
    Rs = c($e()),
    Ns = c(J());
  var lm = {
      trace: "\u{1F50D}",
      debug: "\u{1F41B}",
      info: "\u2728",
      warn: "\u26A0\uFE0F",
      error: "\u{1F6A8}",
      fatal: "\u{1F480}",
    },
    ks = { trace: 10, debug: 20, info: 30, warn: 40, error: 50, fatal: 60 },
    pm = {
      foreground: "#d3c0c8",
      background: "#2d2d2d",
      black: "#2d2d2d",
      red: "#f2777a",
      green: "#99cc99",
      yellow: "#ffcc66",
      blue: "#6699cc",
      magenta: "#cc99cc",
      cyan: "#66cccc",
      white: "#d3d0c8",
      brightBlack: "#747369",
    },
    Ts = (function () {
      function r(t, e) {
        (this.name = t),
          (this.opts = e),
          (this._name = t || ""),
          (this._colors = F(F({}, pm), e.colors || {}));
        try {
          this.logLevel = window.localStorage.getItem("logLevel") || "info";
        } catch (n) {
          this.logLevel = "info";
        }
        this._logLevel = ks[this.logLevel];
      }
      return (
        (r.prototype.trace = function () {
          for (var t = ["trace"], e = 0, n = arguments.length; e < n; e++)
            t.push(arguments[e]);
          this._print.apply(this, t);
        }),
        (r.prototype.debug = function () {
          for (var t = ["debug"], e = 0, n = arguments.length; e < n; e++)
            t.push(arguments[e]);
          this._print.apply(this, t);
        }),
        (r.prototype.info = function () {
          for (var t = ["info"], e = 0, n = arguments.length; e < n; e++)
            t.push(arguments[e]);
          this._print.apply(this, t);
        }),
        (r.prototype.warn = function () {
          for (var t = ["warn"], e = 0, n = arguments.length; e < n; e++)
            t.push(arguments[e]);
          this._print.apply(this, t);
        }),
        (r.prototype.error = function () {
          for (var t = ["error"], e = 0, n = arguments.length; e < n; e++)
            t.push(arguments[e]);
          this._print.apply(this, t);
        }),
        (r.prototype.fatal = function () {
          for (var t = ["fatal"], e = 0, n = arguments.length; e < n; e++)
            t.push(arguments[e]);
          this._print.apply(this, t);
        }),
        (r.prototype._print = function (t) {
          if (!(ks[t] < this._logLevel)) {
            var e = lm[t],
              n = this._name || "unknown",
              i =
                t === "error" || t.fatal
                  ? this._colors.red
                  : t === "warn"
                  ? this._colors.yellow
                  : this._colors.green,
              o = [],
              s = [null],
              a = e + " %c%s";
            s.push(Jt(this._colors.magenta), n);
            for (var u = 1, l = arguments.length; u < l; u++) {
              var h = arguments[u];
              typeof h == "string"
                ? u === 1
                  ? ((a += " %c%s"), s.push(Jt(i)), s.push(h))
                  : /ms$/.test(h)
                  ? ((a += " %c%s"),
                    s.push(Jt(this._colors.brightBlack)),
                    s.push(h))
                  : ((a += " %c%s"), s.push(Jt(this._colors.white)), s.push(h))
                : typeof h == "number"
                ? ((a += " %c%d"), s.push(Jt(this._colors.magenta)), s.push(h))
                : o.push(h);
            }
            (s[0] = a),
              o.forEach(function (_) {
                s.push(_);
              }),
              Function.prototype.apply.apply(console.log, [console, s]);
          }
        }),
        r
      );
    })();
  function Jt(r) {
    return "color: " + r + ";";
  }
  var vn = c(q()),
    Ye = c(L()),
    yn = c(x()),
    Is = c(ft()),
    Ps = c(M()),
    We;
  function qs(r) {
    var t = new Ts(r.logPrefix || "", { colors: { magenta: "#0F2634" } });
    return (0, Ns.of)(t);
  }
  var tt;
  (function (r) {
    (r.Log = "@@Log"), (r.Info = "@@Log.info"), (r.Debug = "@@Log.debug");
  })(tt || (tt = {}));
  var Ke;
  (function (r) {
    r.Info = "@@Overlay.info";
  })(Ke || (Ke = {}));
  function wt() {
    for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
    return [tt.Log, [tt.Info, r]];
  }
  function Bs() {
    for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
    return [tt.Log, [tt.Debug, r]];
  }
  function St(r, t) {
    return t === void 0 && (t = 2e3), [Ke.Info, [r, t]];
  }
  var js = new Cs.BehaviorSubject(
    ((We = {}),
    (We[tt.Log] = function (r, t) {
      return r.pipe(
        (0, yn.withLatestFrom)(
          t.logInstance$,
          t.option$.pipe((0, Ps.pluck)("injectNotification"))
        ),
        (0, vn.filter)(function (e) {
          var n = e[2];
          return n === "console";
        }),
        (0, Ye.tap)(function (e) {
          var n = e[0],
            i = e[1];
          switch (n[0]) {
            case tt.Info:
              return i.info.apply(i, n[1]);
            case tt.Debug:
              return i.debug.apply(i, n[1]);
          }
        })
      );
    }),
    (We[Ke.Info] = function (r, t) {
      return r.pipe(
        (0, yn.withLatestFrom)(t.option$, t.notifyElement$, t.document$),
        (0, vn.filter)(function (e) {
          var n = e[1];
          return Boolean(n.notify);
        }),
        (0, Ye.tap)(function (e) {
          var n = e[0],
            i = e[1],
            o = e[2],
            s = e[3];
          (o.innerHTML = n[0]),
            (o.style.display = "block"),
            s.body.appendChild(o);
        }),
        (0, Is.switchMap)(function (e) {
          var n = e[0],
            i = e[1],
            o = e[2],
            s = e[3];
          return (0, Rs.timer)(n[1] || 2e3).pipe(
            (0, Ye.tap)(function () {
              (o.style.display = "none"), o.parentNode && s.body.removeChild(o);
            })
          );
        })
      );
    }),
    We)
  );
  function Fs(r) {
    return r.pipe(
      (0, Ms.tap)(function (t) {
        var e = t.target,
          n = t.prop,
          i = t.value;
        e[n] = i;
      }),
      (0, Ls.map)(function (t) {
        return wt(
          "[PropSet]",
          t.target,
          "".concat(t.prop, " = ").concat(t.pathname)
        );
      })
    );
  }
  function Ds(r) {
    return [B.PropSet, r];
  }
  var $s = c(I());
  var Us = c(L());
  function Vs(r) {
    return r.pipe(
      (0, Us.tap)(function (t) {
        var e = t.style,
          n = t.styleName,
          i = t.newValue;
        e[n] = i;
      }),
      (0, $s.map)(function (t) {
        return wt("[StyleSet] ".concat(t.styleName, " = ").concat(t.pathName));
      })
    );
  }
  function Hs(r) {
    return [B.StyleSet, r];
  }
  var Ws = c(I()),
    Ys = c(q()),
    Ks = c(x());
  var zs = c(M());
  function Gs(r, t) {
    return r.pipe(
      (0, Ks.withLatestFrom)(
        t.option$.pipe((0, zs.pluck)("injectNotification"))
      ),
      (0, Ys.filter)(function (e) {
        var n = e[1];
        return n;
      }),
      (0, Ws.map)(function (e) {
        var n = e[0],
          i = e[1],
          o = "[LinkReplace] ".concat(n.basename);
        return i === "overlay" ? St(o) : wt(o);
      })
    );
  }
  function Xs(r) {
    return [B.LinkReplace, r];
  }
  var Js = c(et()),
    Zs = c(x()),
    Qs = c(L());
  function ta(r, t) {
    return [B.SetScroll, { x: r, y: t }];
  }
  function ea(r, t) {
    return r.pipe(
      (0, Zs.withLatestFrom)(t.window$),
      (0, Qs.tap)(function (e) {
        var n = e[0],
          i = e[1];
        return i.scrollTo(n.x, n.y);
      }),
      (0, Js.ignoreElements)()
    );
  }
  var ra = c(et()),
    na = c(x()),
    ia = c(L());
  function oa(r, t) {
    return r.pipe(
      (0, na.withLatestFrom)(t.window$),
      (0, ia.tap)(function (e) {
        var n = e[0],
          i = e[1];
        return (i.name = n);
      }),
      (0, ra.ignoreElements)()
    );
  }
  function sa(r) {
    return [B.SetWindowName, r];
  }
  var lt, B;
  (function (r) {
    (r.PropSet = "@@BSDOM.Events.PropSet"),
      (r.StyleSet = "@@BSDOM.Events.StyleSet"),
      (r.LinkReplace = "@@BSDOM.Events.LinkReplace"),
      (r.SetScroll = "@@BSDOM.Events.SetScroll"),
      (r.SetWindowName = "@@BSDOM.Events.SetWindowName");
  })(B || (B = {}));
  var ca = new aa.BehaviorSubject(
    ((lt = {}),
    (lt[B.PropSet] = Fs),
    (lt[B.StyleSet] = Vs),
    (lt[B.LinkReplace] = Gs),
    (lt[B.SetScroll] = ea),
    (lt[B.SetWindowName] = oa),
    lt)
  );
  var Gu = c(it()),
    Xu = c(x()),
    Ju = c(et()),
    Zu = c(L()),
    Qu = c(M());
  var In = c(M()),
    Hc = c(q()),
    Wc = c(I()),
    Yc = c(x());
  var Uc = c(it());
  var ua = c(et()),
    fa = c(L());
  function la(r, t) {
    return r.pipe(
      (0, fa.tap)(function (e) {
        return t.option$.next(e);
      }),
      (0, ua.ignoreElements)()
    );
  }
  function Ge(r) {
    return [O.SetOptions, r];
  }
  var Ma = c(rr()),
    Fa = c($e()),
    Da = c(J()),
    $a = c(ft()),
    Ua = c(ja()),
    Va = c(On());
  var xn = function (r) {
      var t, e, n;
      return (
        (e = r.indexOf("#")) >= 0
          ? ((t = r.slice(e)), (r = r.slice(0, e)))
          : (t = ""),
        (e = r.indexOf("?")) >= 0
          ? ((n = r.slice(e)), (r = r.slice(0, e)))
          : (n = ""),
        { url: r, params: n, hash: t }
      );
    },
    ir = function (r) {
      var t;
      return (
        (r = xn(r).url),
        r.indexOf("file://") === 0
          ? (t = r.replace(new RegExp("^file://(localhost)?"), ""))
          : (t = r.replace(new RegExp("^([^:]+:)?//([^:/]+)(:\\d*)?/"), "/")),
        decodeURIComponent(t)
      );
    },
    Ha = function (r, t, e) {
      var n,
        i = { score: 0, object: null };
      return (
        t.forEach(function (o) {
          (n = Wa(r, e(o))), n > i.score && (i = { object: o, score: n });
        }),
        i.score > 0 ? i : null
      );
    },
    Wa = function (r, t) {
      if (((r = La(r)), (t = La(t)), r === t)) return 1e4;
      for (
        var e = r.split("/").reverse(),
          n = t.split("/").reverse(),
          i = Math.min(e.length, n.length),
          o = 0;
        o < i && e[o] === n[o];

      )
        ++o;
      return o;
    },
    En = function (r, t) {
      return Wa(r, t) > 0;
    };
  function Zt(r) {
    var t = document.createElement("a");
    return (t.href = r), t.host === "" && (t.href = t.href), t;
  }
  function Ya(r, t, e) {
    return r === ""
      ? "?" + e
      : "?" +
          r
            .slice(1)
            .split("&")
            .map(function (n) {
              return n.split("=");
            })
            .filter(function (n) {
              return n[0] !== t;
            })
            .map(function (n) {
              return [n[0], n[1]].join("=");
            })
            .concat(e)
            .join("&");
  }
  var Wd = [
    function (r) {
      return r.ext === "map";
    },
  ];
  function Ka(r) {
    return Wd.some(function (t) {
      return t(r);
    });
  }
  function st(r, t) {
    return (
      t === void 0 && (t = 1e3),
      r.pipe(
        (0, $a.switchMap)(function () {
          return (0,
          Ma.concat)((0, Da.of)(!1), (0, Fa.timer)(t).pipe((0, Va.mapTo)(!0)));
        }),
        (0, Ua.startWith)(!0)
      )
    );
  }
  function kn(r) {
    return [].slice.call(r);
  }
  function La(r) {
    return r.replace(/^\/+/, "").replace(/\\/g, "/").toLowerCase();
  }
  var or = c(at()),
    Ja = c(N()),
    Za = c(Qt()),
    sr = c($e()),
    Et = c(wn()),
    ar = c(q()),
    cr = c(I()),
    ee = c(ot()),
    ur = c(L()),
    Qa = c(On());
  var tc = c(er()),
    te,
    Xa = [
      { selector: "background", styleNames: ["backgroundImage"] },
      {
        selector: "border",
        styleNames: ["borderImage", "webkitBorderImage", "MozBorderImage"],
      },
    ],
    Zd = { link: "href", img: "src", script: "src" };
  function ec(r, t) {
    return function (p, y) {
      var b = p.path;
      if (y.liveCSS && b.match(/\.css$/i)) return _(b, r, t);
      if (y.liveImg && b.match(/\.(jpe?g|png|gif)$/i)) return i(b, r);
      for (
        var d = n(p.ext, y, r),
          v = e(d.elems, p.basename, d.attr),
          g = 0,
          w = v.length;
        g < w;
        g += 1
      )
        a(v[g], d, y, r, t);
      return (0, or.empty)();
    };
    function e(p, y, b) {
      if (y[0] === "*") return p;
      for (
        var d = [], v = new RegExp("(^|/)" + y), g = 0, w = p.length;
        g < w;
        g += 1
      )
        v.test(p[g][b]) && d.push(p[g]);
      return d;
    }
    function n(p, y, b) {
      var d = y.tagNames[p],
        v = Zd[d];
      return { attr: v, tagName: d, elems: b.getElementsByTagName(d) };
    }
    function i(p, y) {
      var b = R(Date.now());
      return (0, Za.merge)(
        (0, Et.from)([].slice.call(y.images)).pipe(
          (0, ar.filter)(function (d) {
            return En(p, ir(d.src));
          }),
          (0, cr.map)(function (d) {
            var v = {
              target: d,
              prop: "src",
              value: h(d.src, b),
              pathname: Zt(d.src).pathname,
            };
            return Ds(v);
          })
        ),
        (0, Et.from)(Xa).pipe(
          (0, ee.mergeMap)(function (d) {
            var v = d.selector,
              g = d.styleNames;
            return (0, Et.from)(
              y.querySelectorAll("[style*=".concat(v, "]"))
            ).pipe(
              (0, ee.mergeMap)(function (w) {
                return s(w.style, g, p, b);
              })
            );
          })
        )
      );
    }
    function o(p, y, b) {
      var d;
      try {
        d = p != null ? p.cssRules : void 0;
      } catch (v) {}
      !d ||
        [].slice.call(d).forEach(function (v) {
          switch (v.type) {
            case CSSRule.IMPORT_RULE:
              o(v.styleSheet, y, b);
              break;
            case CSSRule.STYLE_RULE:
              [].slice.call(Xa).forEach(function (g) {
                var w = g.styleNames;
                s(v.style, w, y, b);
              });
              break;
            case CSSRule.MEDIA_RULE:
              o(v, y, b);
              break;
          }
        });
    }
    function s(p, y, b, d) {
      return (0, Et.from)(y).pipe(
        (0, ar.filter)(function (v) {
          return typeof p[v] == "string";
        }),
        (0, cr.map)(function (v) {
          var g,
            w = p[v],
            E = w.replace(
              new RegExp("\\burl\\s*\\(([^)]*)\\)"),
              function (T, A) {
                var H = A;
                return (
                  A[0] === '"' &&
                    A[A.length - 1] === '"' &&
                    (H = A.slice(1, -1)),
                  (g = Zt(H).pathname),
                  En(b, ir(H)) ? "url(".concat(h(H, d), ")") : T
                );
              }
            );
          return [p, v, w, E, g];
        }),
        (0, ar.filter)(function (v) {
          var g = v[0],
            w = v[1],
            E = v[2],
            T = v[3];
          return T !== E;
        }),
        (0, cr.map)(function (v) {
          var g = v[0],
            w = v[1],
            E = v[2],
            T = v[3],
            A = v[4];
          return Hs({
            style: g,
            styleName: w,
            value: E,
            newValue: T,
            pathName: A,
          });
        })
      );
    }
    function a(p, y, b, d, v) {
      var g = y.attr,
        w = p[g],
        E = new Date().getTime(),
        T = "browsersync-legacy",
        A = T + "=" + E,
        H = Zt(w),
        $ = Ya(H.search, T, A);
      switch (y.tagName) {
        case "link": {
          _(w, d, v);
          break;
        }
        case "img": {
          i(w, d);
          break;
        }
        default:
          b.timestamps === !1
            ? (p[g] = H.href)
            : (p[g] = H.href.split("?")[0] + $),
            setTimeout(function () {
              te
                ? ((te.style.display = "none"), (te.style.display = "block"))
                : ((te = d.createElement("DIV")), d.body.appendChild(te));
            }, 200);
      }
      return { elem: p, timeStamp: E };
    }
    function u(p, y, b) {
      var d;
      if (p.__LiveReload_pendingRemoval) return (0, or.empty)();
      (p.__LiveReload_pendingRemoval = !0),
        p.tagName === "STYLE"
          ? ((d = y.createElement("link")),
            (d.rel = "stylesheet"),
            (d.media = p.media),
            (d.disabled = p.disabled))
          : (d = p.cloneNode(!1));
      var v = p.href,
        g = h(C(p));
      d.href = g;
      var w = Zt(g).pathname,
        E = w.split("/").slice(-1)[0],
        T = p.parentNode;
      T.lastChild === p ? T.appendChild(d) : T.insertBefore(d, p.nextSibling);
      var A;
      return (
        /AppleWebKit/.test(b.userAgent) ? (A = 5) : (A = 200),
        Ja.Observable.create(function (H) {
          d.onload = function () {
            H.next(!0), H.complete();
          };
        }).pipe(
          (0, ee.mergeMap)(function () {
            return (0, sr.timer)(A).pipe(
              (0, ur.tap)(function () {
                (p && !p.parentNode) ||
                  (p.parentNode.removeChild(p), (d.onreadystatechange = null));
              }),
              (0, Qa.mapTo)(
                Xs({
                  target: d,
                  nextHref: g,
                  prevHref: v,
                  pathname: w,
                  basename: E,
                })
              )
            );
          })
        )
      );
    }
    function l(p, y) {
      var b = p.rule,
        d = p.index,
        v = p.link,
        g = b.parentStyleSheet,
        w = h(b.href),
        E = b.media.length ? [].join.call(b.media, ", ") : "",
        T = '@import url("'.concat(w, '") ').concat(E, ";");
      b.__LiveReload_newHref = w;
      var A = y.createElement("link");
      return (
        (A.rel = "stylesheet"),
        (A.href = w),
        (A.__LiveReload_pendingRemoval = !0),
        v.parentNode && v.parentNode.insertBefore(A, v),
        (0, sr.timer)(200).pipe(
          (0, ur.tap)(function () {
            A.parentNode && A.parentNode.removeChild(A),
              b.__LiveReload_newHref === w &&
                (g.insertRule(T, d),
                g.deleteRule(d + 1),
                (b = g.cssRules[d]),
                (b.__LiveReload_newHref = w));
          }),
          (0, ee.mergeMap)(function () {
            return (0, sr.timer)(200).pipe(
              (0, ur.tap)(function () {
                if (b.__LiveReload_newHref === w)
                  return g.insertRule(T, d), g.deleteRule(d + 1);
              })
            );
          })
        )
      );
    }
    function h(p, y) {
      var b;
      y === void 0 && (y = R(Date.now()));
      var d, v;
      (b = xn(p)), (p = b.url), (d = b.hash), (v = b.params);
      var g = v.replace(/(\?|&)browsersync=(\d+)/, function (w, E) {
        return "".concat(E).concat(y);
      });
      return (
        g === v &&
          (v.length === 0
            ? (g = "?".concat(y))
            : (g = "".concat(v, "&").concat(y))),
        p + g + d
      );
    }
    function _(p, y, b) {
      var d = kn(y.getElementsByTagName("link")).filter(function ($) {
          return $.rel.match(/^stylesheet$/i) && !$.__LiveReload_pendingRemoval;
        }),
        v = kn(y.getElementsByTagName("style"))
          .filter(function ($) {
            return Boolean($.sheet);
          })
          .reduce(function ($, Tt) {
            return $.concat(m(Tt, Tt.sheet));
          }, []),
        g = d.reduce(function ($, Tt) {
          return $.concat(m(Tt, Tt.sheet));
        }, []),
        w = d.concat(v, g),
        E = Ha(p, w, function ($) {
          return ir(C($));
        });
      if (E)
        return E.object && E.object.rule ? l(E.object, y) : u(E.object, y, b);
      if (d.length) {
        var T = p.split("."),
          A = T[0],
          H = T.slice(1);
        if (A === "*")
          return (0, Et.from)(
            d.map(function ($) {
              return u($, y, b);
            })
          ).pipe((0, tc.mergeAll)());
      }
      return (0, or.empty)();
    }
    function m(p, y) {
      var b = [];
      return v(p, d(y)), b;
      function d(g) {
        var w;
        try {
          w = g != null ? g.cssRules : void 0;
        } catch (E) {}
        return w;
      }
      function v(g, w) {
        if (w && w.length)
          for (var E = 0; E < w.length; E++) {
            var T = w[E];
            switch (T.type) {
              case CSSRule.CHARSET_RULE:
                break;
              case CSSRule.IMPORT_RULE:
                b.push({ link: g, rule: T, index: E, href: T.href }),
                  v(g, d(T.styleSheet));
                break;
              default:
                break;
            }
          }
      }
    }
    function C(p) {
      return p.href || p.getAttribute("data-href");
    }
    function R(p) {
      return "browsersync=".concat(p);
    }
  }
  var rc = c(x()),
    nc = c(ot());
  function ic(r) {
    return [O.FileReload, r];
  }
  function oc(r, t) {
    return r.pipe(
      (0, rc.withLatestFrom)(t.option$, t.document$, t.navigator$),
      (0, nc.mergeMap)(function (e) {
        var n = e[0],
          i = e[1],
          o = e[2],
          s = e[3];
        return ec(o, s)(n, { tagNames: i.tagNames, liveCSS: !0, liveImg: !0 });
      })
    );
  }
  var sc = c(et()),
    ac = c(L()),
    cc = c(x());
  function uc(r, t) {
    return r.pipe(
      (0, cc.withLatestFrom)(t.window$),
      (0, ac.tap)(function (e) {
        var n = e[0],
          i = e[1];
        if (n.path)
          return (i.location =
            i.location.protocol + "//" + i.location.host + n.path);
        if (n.url) return (i.location = n.url);
      }),
      (0, sc.ignoreElements)()
    );
  }
  function fc(r) {
    return [O.BrowserSetLocation, r];
  }
  var lc = c(et()),
    pc = c(L()),
    hc = c(x());
  function mc(r, t) {
    return r.pipe(
      (0, hc.withLatestFrom)(t.window$, t.document$),
      (0, pc.tap)(function (e) {
        var n = e[0],
          i = e[1],
          o = e[2],
          s = o.getElementsByTagName(n.tagName),
          a = s[n.index];
        a &&
          (o.createEvent
            ? i.setTimeout(function () {
                var u = o.createEvent("MouseEvents");
                u.initEvent("click", !0, !0), a.dispatchEvent(u);
              }, 0)
            : i.setTimeout(function () {
                if (o.createEventObject) {
                  var u = o.createEventObject();
                  (u.cancelBubble = !0), a.fireEvent("onclick", u);
                }
              }, 0));
      }),
      (0, lc.ignoreElements)()
    );
  }
  function dc(r) {
    return [O.SimulateClick, r];
  }
  var vc = c(L()),
    yc = c(x());
  function bc(r, t) {
    return r.pipe(
      (0, yc.withLatestFrom)(t.document$),
      (0, vc.tap)(function (e) {
        var n = e[0],
          i = e[1],
          o = i.getElementsByTagName(n.tagName),
          s = o[n.index];
        s && (s.value = n.value);
      })
    );
  }
  function gc(r) {
    return [O.SetElementValue, r];
  }
  var _c = c(L()),
    wc = c(x());
  function Sc(r, t) {
    return r.pipe(
      (0, wc.withLatestFrom)(t.document$),
      (0, _c.tap)(function (e) {
        var n = e[0],
          i = e[1],
          o = i.getElementsByTagName(n.tagName),
          s = o[n.index];
        s &&
          (n.type === "radio" && (s.checked = !0),
          n.type === "checkbox" && (s.checked = n.checked),
          n.tagName === "SELECT" && (s.value = n.value));
      })
    );
  }
  function Oc(r) {
    return [O.SetElementToggleValue, r];
  }
  var Cn = c(M()),
    Pc = c(et()),
    Rn = c(Ac()),
    qc = c(Qt());
  function rv() {
    return document;
  }
  function Tn(r, t) {
    var e,
      n,
      i = t.documentElement,
      o = t.body;
    return (
      r.pageYOffset !== void 0
        ? ((e = r.pageXOffset), (n = r.pageYOffset))
        : ((e = i.scrollLeft || o.scrollLeft || 0),
          (n = i.scrollTop || o.scrollTop || 0)),
      { x: e, y: n }
    );
  }
  function An(r) {
    var t = r.documentElement,
      e = r.body;
    return {
      x: e.scrollHeight - t.clientWidth,
      y: e.scrollHeight - t.clientHeight,
    };
  }
  function nv(r, t) {
    var e = rv().getElementsByTagName(r);
    return Array.prototype.indexOf.call(e, t);
  }
  function kt(r) {
    var t = r.tagName,
      e = nv(t, r);
    return { tagName: t, index: e };
  }
  function Cc(r, t) {
    var e = Tn(r, t);
    return { raw: e, proportional: iv(e, t) };
  }
  function Rc(r) {
    var t = { x: r.scrollLeft, y: r.scrollTop },
      e = { x: r.scrollWidth, y: r.scrollHeight };
    return { raw: t, proportional: Nc(e, t).y };
  }
  function iv(r, t) {
    var e = An(t),
      n = Nc(e, r);
    return n.y;
  }
  function Nc(r, t) {
    var e = t.x / r.x,
      n = t.y / r.y;
    return { x: e || 0, y: n };
  }
  var fr = c(L()),
    Nn = c(x()),
    Bc = c(I());
  function jc(r, t) {
    {
      var e = r.pipe(
          (0, Nn.withLatestFrom)(
            t.window$,
            t.document$,
            t.option$.pipe((0, Cn.pluck)("scrollProportionally"))
          )
        ),
        n = (0, Rn.partition)(function (l) {
          var h = l[0];
          return h.tagName === "document";
        })(e),
        i = n[0],
        o = n[1],
        s = (0, Rn.partition)(function (l) {
          var h = l[0];
          return h.mappingIndex > -1;
        })(o),
        a = s[0],
        u = s[1];
      return (0, qc.merge)(
        i.pipe(
          (0, fr.tap)(function (l) {
            var h = l[0],
              _ = l[1],
              m = l[2],
              C = l[3],
              R = An(m);
            return C
              ? _.scrollTo(0, R.y * h.position.proportional)
              : _.scrollTo(0, h.position.raw.y);
          })
        ),
        u.pipe(
          (0, fr.tap)(function (l) {
            var h = l[0],
              _ = l[1],
              m = l[2],
              C = l[3],
              R = m.getElementsByTagName(h.tagName);
            if (R && R.length) {
              var p = R[h.index];
              if (p) return Ic(p, C, h);
            }
          })
        ),
        a.pipe(
          (0, Nn.withLatestFrom)(
            t.option$.pipe((0, Cn.pluck)("scrollElementMapping"))
          ),
          (0, Bc.map)(function (l) {
            var h = l[0],
              _ = l[1],
              m = h[0];
            return [
              h,
              _.filter(function (C, R) {
                return R !== m.mappingIndex;
              }),
            ];
          }),
          (0, fr.tap)(function (l) {
            var h = l[0],
              _ = l[1],
              m = h[0],
              C = h[1],
              R = h[2],
              p = h[3];
            _.map(function (y) {
              return R.querySelector(y);
            }).forEach(function (y) {
              Ic(y, p, m);
            });
          })
        )
      ).pipe((0, Pc.ignoreElements)());
    }
  }
  function Ic(r, t, e) {
    return t && r.scrollTo
      ? r.scrollTo(0, r.scrollHeight * e.position.proportional)
      : r.scrollTo(0, e.position.raw.y);
  }
  var Lc = c(L()),
    Mc = c(x());
  function Fc() {
    return [O.BrowserReload];
  }
  function Dc() {
    return [O.PreBrowserReload];
  }
  function $c(r, t) {
    return r.pipe(
      (0, Mc.withLatestFrom)(t.window$),
      (0, Lc.tap)(function (e) {
        var n = e[1];
        return n.location.reload();
      })
    );
  }
  var Z, O;
  (function (r) {
    (r.FileReload = "@@FileReload"),
      (r.PreBrowserReload = "@@PreBrowserReload"),
      (r.BrowserReload = "@@BrowserReload"),
      (r.BrowserSetLocation = "@@BrowserSetLocation"),
      (r.BrowserSetScroll = "@@BrowserSetScroll"),
      (r.SetOptions = "@@SetOptions"),
      (r.SimulateClick = "@@SimulateClick"),
      (r.SetElementValue = "@@SetElementValue"),
      (r.SetElementToggleValue = "@@SetElementToggleValue");
  })(O || (O = {}));
  var Vc = new Uc.BehaviorSubject(
    ((Z = {}),
    (Z[O.SetOptions] = la),
    (Z[O.FileReload] = oc),
    (Z[O.BrowserReload] = $c),
    (Z[O.BrowserSetLocation] = uc),
    (Z[O.SimulateClick] = mc),
    (Z[O.SetElementValue] = bc),
    (Z[O.SetElementToggleValue] = Sc),
    (Z[O.BrowserSetScroll] = jc),
    Z)
  );
  function Pn(r, t, e, n) {
    return (
      n === void 0 && (n = -1),
      [U.Scroll, { position: r, tagName: t, index: e, mappingIndex: n }]
    );
  }
  function Kc(r, t) {
    return r.pipe(
      (0, Yc.withLatestFrom)(
        t.option$.pipe((0, In.pluck)("ghostMode", "scroll")),
        t.window$.pipe((0, In.pluck)("location", "pathname"))
      ),
      (0, Hc.filter)(function (e) {
        var n = e[0],
          i = e[1],
          o = e[2];
        return i && n.pathname === o;
      }),
      (0, Wc.map)(function (e) {
        var n = e[0];
        return [O.BrowserSetScroll, n];
      })
    );
  }
  var qn = c(M()),
    zc = c(q()),
    Gc = c(I()),
    Xc = c(x());
  function Jc(r) {
    return [U.Click, r];
  }
  function Zc(r, t) {
    return r.pipe(
      (0, Xc.withLatestFrom)(
        t.option$.pipe((0, qn.pluck)("ghostMode", "clicks")),
        t.window$.pipe((0, qn.pluck)("location", "pathname"))
      ),
      (0, zc.filter)(function (e) {
        var n = e[0],
          i = e[1],
          o = e[2];
        return i && n.pathname === o;
      }),
      (0, Gc.map)(function (e) {
        var n = e[0];
        return dc(n);
      })
    );
  }
  var Bn = c(M()),
    Qc = c(q()),
    tu = c(I()),
    eu = c(x());
  function ru(r, t) {
    return [U.Keyup, F(F({}, r), { value: t })];
  }
  function nu(r, t) {
    return r.pipe(
      (0, eu.withLatestFrom)(
        t.option$.pipe((0, Bn.pluck)("ghostMode", "forms", "inputs")),
        t.window$.pipe((0, Bn.pluck)("location", "pathname"))
      ),
      (0, Qc.filter)(function (e) {
        var n = e[0],
          i = e[1],
          o = e[2];
        return i && n.pathname === o;
      }),
      (0, tu.map)(function (e) {
        var n = e[0];
        return gc(n);
      })
    );
  }
  var iu = c(I());
  function ou(r) {
    return r.pipe(
      (0, iu.map)(function (t) {
        return St(t.message, t.timeout);
      })
    );
  }
  var su = c(M()),
    au = c(q()),
    cu = c(I()),
    uu = c(x());
  function fu(r, t) {
    return r.pipe(
      (0, uu.withLatestFrom)(
        t.option$.pipe((0, su.pluck)("ghostMode", "location"))
      ),
      (0, au.filter)(function (e) {
        var n = e[1];
        return n === !0;
      }),
      (0, cu.map)(function (e) {
        var n = e[0];
        return fc(n);
      })
    );
  }
  var wu = c(q()),
    Su = c(x()),
    Ou = c(ot()),
    xu = c(rr()),
    Mn = c(J());
  var Eu = c(_u()),
    ku = c(dn());
  function Tu(r, t) {
    return r.pipe(
      (0, Su.withLatestFrom)(t.option$),
      (0, wu.filter)(function (e) {
        var n = e[0],
          i = e[1];
        return i.codeSync;
      }),
      (0, Ou.mergeMap)(Fn)
    );
  }
  function Fn() {
    return (0, xu.concat)(
      (0, Mn.of)(Dc()),
      (0, Mn.of)(Fc()).pipe((0, Eu.subscribeOn)(ku.async))
    );
  }
  var Au = c(q()),
    Cu = c(at());
  var Ru = c(J()),
    Nu = c(x()),
    Iu = c(ot());
  function Pu(r, t) {
    return r.pipe(
      (0, Nu.withLatestFrom)(t.option$),
      (0, Au.filter)(function (e) {
        var n = e[0],
          i = e[1];
        return i.codeSync;
      }),
      (0, Iu.mergeMap)(function (e) {
        var n = e[0],
          i = e[1];
        return n.url || !i.injectChanges
          ? Fn()
          : n.basename && n.ext && Ka(n)
          ? (0, Cu.empty)()
          : (0, Ru.of)(ic(n));
      })
    );
  }
  var qu = c(M()),
    Bu = c(J());
  var ju = c(x()),
    Lu = c(ot());
  function Mu(r, t) {
    return r.pipe(
      (0, ju.withLatestFrom)(t.option$.pipe((0, qu.pluck)("logPrefix"))),
      (0, Lu.mergeMap)(function (e) {
        var n = e[0],
          i = e[1],
          o = i ? "".concat(i, ": ") : "";
        return (0, Bu.of)(Ge(n), St("".concat(o, "connected")));
      })
    );
  }
  var Fu = c(et()),
    Du = c(L());
  function $u(r) {
    return r.pipe(
      (0, Du.tap)(function (t) {
        return console.log(t);
      }),
      (0, Fu.ignoreElements)()
    );
  }
  var Dn = c(M()),
    Uu = c(q()),
    Vu = c(I()),
    Hu = c(x());
  function Wu(r, t) {
    return [U.InputToggle, F(F({}, r), t)];
  }
  function Yu(r, t) {
    return r.pipe(
      (0, Hu.withLatestFrom)(
        t.option$.pipe((0, Dn.pluck)("ghostMode", "forms", "toggles")),
        t.window$.pipe((0, Dn.pluck)("location", "pathname"))
      ),
      (0, Uu.filter)(function (e) {
        var n = e[1];
        return n === !0;
      }),
      (0, Vu.map)(function (e) {
        var n = e[0];
        return Oc(n);
      })
    );
  }
  var Ku = c(I());
  function zu(r) {
    return r.pipe(
      (0, Ku.map)(function (t) {
        return Ge(t.options);
      })
    );
  }
  var j, k;
  (function (r) {
    (r.Connection = "connection"),
      (r.Disconnect = "disconnect"),
      (r.FileReload = "file:reload"),
      (r.BrowserReload = "browser:reload"),
      (r.BrowserLocation = "browser:location"),
      (r.BrowserNotify = "browser:notify"),
      (r.Scroll = "scroll"),
      (r.Click = "click"),
      (r.Keyup = "input:text"),
      (r.InputToggle = "input:toggles"),
      (r.OptionsSet = "options:set");
  })(k || (k = {}));
  var U;
  (function (r) {
    (r.Scroll = "@@outgoing/scroll"),
      (r.Click = "@@outgoing/click"),
      (r.Keyup = "@@outgoing/keyup"),
      (r.InputToggle = "@@outgoing/Toggle");
  })(U || (U = {}));
  var tf = new Gu.BehaviorSubject(
    ((j = {}),
    (j[k.Connection] = Mu),
    (j[k.Disconnect] = $u),
    (j[k.FileReload] = Pu),
    (j[k.BrowserReload] = Tu),
    (j[k.BrowserLocation] = fu),
    (j[k.BrowserNotify] = ou),
    (j[k.Scroll] = Kc),
    (j[k.Click] = Zc),
    (j[k.Keyup] = nu),
    (j[k.InputToggle] = Yu),
    (j[k.OptionsSet] = zu),
    (j[U.Scroll] = mr(k.Scroll)),
    (j[U.Click] = mr(k.Click)),
    (j[U.Keyup] = mr(k.Keyup)),
    (j[U.InputToggle] = mr(k.InputToggle)),
    j)
  );
  function mr(r) {
    return function (t, e) {
      return t.pipe(
        (0, Xu.withLatestFrom)(
          e.io$,
          e.window$.pipe((0, Qu.pluck)("location", "pathname"))
        ),
        (0, Zu.tap)(function (n) {
          var i = n[0],
            o = n[1],
            s = n[2];
          return o.emit(r, F(F({}, i), { pathname: s }));
        }),
        (0, Ju.ignoreElements)()
      );
    };
  }
  var xr = c(Qt());
  var ef = c(it()),
    rf = c(at()),
    nf = c(J());
  var of = c(x()),
    Un = c(I());
  var $n,
    sf = "<<BS_START>>",
    af = "<<BS_START>>",
    cf = new RegExp(sf + "(.+?)" + af, "g");
  function Ev(r) {
    for (var t, e; (t = cf.exec(r)); ) e = t[1];
    if (e) return JSON.parse(e);
  }
  function uf(r) {
    var t = (function () {
      try {
        return Ev(r.name);
      } catch (o) {
        return {};
      }
    })();
    if (
      ((r.name = r.name.replace(cf, "")),
      t && t.bs && t.bs.hardReload && t.bs.scroll)
    ) {
      var e = t.bs.scroll,
        n = e.x,
        i = e.y;
      return (0, nf.of)(
        ta(n, i),
        Bs("[ScrollRestore] x = ".concat(n, " y = ").concat(i))
      );
    }
    return (0, rf.empty)();
  }
  var ff = new ef.BehaviorSubject(
    (($n = {}),
    ($n[O.PreBrowserReload] = function (r, t) {
      return r.pipe(
        (0, of.withLatestFrom)(t.window$, t.document$),
        (0, Un.map)(function (e) {
          var n = e[1],
            i = e[2];
          return [
            n.name,
            sf,
            JSON.stringify({ bs: { hardReload: !0, scroll: Tn(n, i) } }),
            af,
          ].join("");
        }),
        (0, Un.map)(function (e) {
          return sa(e);
        })
      );
    }),
    $n)
  );
  var Kf = c(Qt());
  var gr = c(q()),
    vf = c(x()),
    Vn = c(I()),
    yf = c(M()),
    bf = c(re()),
    gf = c(ne()),
    _f = c(ft()),
    wf = c(at()),
    Sf = c(ie());
  function Of(r, t, e) {
    var n = st(
      t.pipe(
        (0, gr.filter)(function (i) {
          var o = i[0];
          return o === k.Keyup;
        })
      )
    );
    return e.pipe(
      (0, bf.skip)(1),
      (0, yf.pluck)("ghostMode", "forms", "inputs"),
      (0, gf.distinctUntilChanged)(),
      (0, _f.switchMap)(function (i) {
        return i
          ? (0, Sf.fromEvent)(r.body, "keyup", !0).pipe(
              (0, Vn.map)(function (o) {
                return o.target || o.srcElement;
              }),
              (0, gr.filter)(function (o) {
                return o.tagName === "INPUT" || o.tagName === "TEXTAREA";
              }),
              (0, vf.withLatestFrom)(n),
              (0, gr.filter)(function (o) {
                var s = o[1];
                return s;
              }),
              (0, Vn.map)(function (o) {
                var s = o[0],
                  a = kt(s),
                  u = s.value;
                return ru(a, u);
              })
            )
          : (0, wf.empty)();
      })
    );
  }
  var xf = c(x()),
    _r = c(q()),
    Hn = c(I()),
    Ef = c(M()),
    kf = c(re()),
    Tf = c(ne()),
    Af = c(ft()),
    Cf = c(ie()),
    Rf = c(at());
  function Nf(r, t, e) {
    var n = st(
      t.pipe(
        (0, _r.filter)(function (i) {
          var o = i[0];
          return o === k.Click;
        })
      )
    );
    return e.pipe(
      (0, kf.skip)(1),
      (0, Ef.pluck)("ghostMode", "clicks"),
      (0, Tf.distinctUntilChanged)(),
      (0, Af.switchMap)(function (i) {
        return i
          ? (0, Cf.fromEvent)(r, "click", !0).pipe(
              (0, Hn.map)(function (o) {
                return o.target;
              }),
              (0, _r.filter)(function (o) {
                if (o.tagName === "LABEL") {
                  var s = o.getAttribute("for");
                  if (s && r.getElementById(s)) return !1;
                }
                return !0;
              }),
              (0, xf.withLatestFrom)(n),
              (0, _r.filter)(function (o) {
                var s = o[1];
                return s;
              }),
              (0, Hn.map)(function (o) {
                var s = o[0];
                return Jc(kt(s));
              })
            )
          : (0, Rf.empty)();
      })
    );
  }
  var Wn = c(q()),
    wr = c(I()),
    If = c(x()),
    Yn = c(M()),
    Pf = c(ne()),
    qf = c(ft()),
    Bf = c(at()),
    jf = c(re()),
    Lf = c(ie());
  function Mf(r, t, e, n) {
    var i = st(
        e.pipe(
          (0, Wn.filter)(function (s) {
            var a = s[0];
            return a === k.Scroll;
          })
        )
      ),
      o = n.pipe(
        (0, Yn.pluck)("scrollElementMapping"),
        (0, wr.map)(function (s) {
          return s.map(function (a) {
            return t.querySelector(a);
          });
        })
      );
    return n.pipe(
      (0, jf.skip)(1),
      (0, Yn.pluck)("ghostMode", "scroll"),
      (0, Pf.distinctUntilChanged)(),
      (0, qf.switchMap)(function (s) {
        return s
          ? (0, Lf.fromEvent)(t, "scroll", !0).pipe(
              (0, wr.map)(function (a) {
                return a.target;
              }),
              (0, If.withLatestFrom)(i, o),
              (0, Wn.filter)(function (a) {
                var u = a[1];
                return Boolean(u);
              }),
              (0, wr.map)(function (a) {
                var u = a[0],
                  l = a[1],
                  h = a[2];
                if (u === t) return Pn(Cc(r, t), "document", 0);
                var _ = t.getElementsByTagName(u.tagName),
                  m = Array.prototype.indexOf.call(_ || [], u);
                return Pn(Rc(u), u.tagName, m, h.indexOf(u));
              })
            )
          : (0, Bf.empty)();
      })
    );
  }
  var Sr = c(q()),
    Ff = c(re()),
    Df = c(M()),
    $f = c(ne()),
    Uf = c(x()),
    Kn = c(I()),
    Vf = c(ft()),
    Hf = c(at()),
    Wf = c(ie());
  function Yf(r, t, e) {
    var n = st(
      t.pipe(
        (0, Sr.filter)(function (i) {
          var o = i[0];
          return o === k.InputToggle;
        })
      )
    );
    return e.pipe(
      (0, Ff.skip)(1),
      (0, Df.pluck)("ghostMode", "forms", "toggles"),
      (0, $f.distinctUntilChanged)(),
      (0, Vf.switchMap)(function (i) {
        return i
          ? (0, Wf.fromEvent)(r, "change", !0).pipe(
              (0, Kn.map)(function (o) {
                return o.target || o.srcElement;
              }),
              (0, Sr.filter)(function (o) {
                return o.tagName === "SELECT";
              }),
              (0, Uf.withLatestFrom)(n),
              (0, Sr.filter)(function (o) {
                var s = o[1];
                return s;
              }),
              (0, Kn.map)(function (o) {
                var s = o[0],
                  a = o[1],
                  u = kt(s);
                return Wu(u, {
                  type: s.type,
                  checked: s.checked,
                  value: s.value,
                });
              })
            )
          : (0, Hf.empty)();
      })
    );
  }
  function zf(r, t, e, n) {
    var i = (0, Kf.merge)(
      Mf(r, t, e, n),
      Nf(t, e, n),
      Of(t, e, n),
      Yf(t, e, n)
    );
    return i;
  }
  var ol = c(nl()),
    sl = c(x()),
    al = c(ot()),
    cl = c(un()),
    ul = c(q()),
    fl = c(M()),
    ll = c(J()),
    ay = as(),
    cy = cs(),
    uy = uf(window),
    pl = fs(),
    hl = pl.socket$,
    fy = pl.io$,
    Er = us(),
    ly = (0, ll.of)(navigator),
    py = ps(Er.getValue()),
    hy = qs(Er.getValue()),
    ml = zf(window, document, hl, Er),
    se = {
      window$: ay,
      document$: cy,
      socket$: hl,
      option$: Er,
      navigator$: ly,
      notifyElement$: py,
      logInstance$: hy,
      io$: fy,
      outgoing$: ml,
    };
  function kr(r, t) {
    return function (e, n) {
      return n.pipe(
        (0, ol.groupBy)(function (i) {
          var o = i[0];
          return o;
        }),
        (0, sl.withLatestFrom)(e),
        (0, ul.filter)(function (i) {
          var o = i[0],
            s = i[1];
          return typeof s[o.key] == "function";
        }),
        (0, al.mergeMap)(function (i) {
          var o = i[0],
            s = i[1];
          return s[o.key](o.pipe((0, fl.pluck)(String(1))), t);
        }),
        (0, cl.share)()
      );
    };
  }
  var my = (0, il.zip)(Vc, ff, function () {
      for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
      return r.reduce(function (e, n) {
        return F(F({}, e), n);
      }, {});
    }),
    dl = kr("[socket]", se)(tf, (0, xr.merge)(se.socket$, ml)),
    vl = kr("[effect]", se)(my, dl),
    dy = kr("[dom-effect]", se)(ca, (0, xr.merge)(vl, uy)),
    vy = (0, xr.merge)(dl, vl, dy),
    yy = kr("[log]", se)(js, vy);
  yy.subscribe();
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
("use strict");

(function (window, document, bs, undefined) {
  var socket = bs.socket;

  var uiOptions = {
    bs: {},
  };

  socket.on("ui:connection", function (options) {
    uiOptions = options;

    bs.socket.emit("ui:history:connected", {
      href: window.location.href,
    });
  });

  socket.on("ui:element:remove", function (data) {
    if (data.id) {
      var elem = document.getElementById(data.id);
      if (elem) {
        removeElement(elem);
      }
    }
  });

  socket.on("highlight", function () {
    var id = "__browser-sync-highlight__";
    var elem = document.getElementById(id);
    if (elem) {
      return removeElement(elem);
    }
    (function (e) {
      e.style.position = "fixed";
      e.style.zIndex = "1000";
      e.style.width = "100%";
      e.style.height = "100%";
      e.style.borderWidth = "5px";
      e.style.borderColor = "red";
      e.style.borderStyle = "solid";
      e.style.top = "0";
      e.style.left = "0";
      e.setAttribute("id", id);
      document.getElementsByTagName("body")[0].appendChild(e);
    })(document.createElement("div"));
  });

  socket.on("ui:element:add", function (data) {
    var elem = document.getElementById(data.id);

    if (!elem) {
      if (data.type === "css") {
        return addCss(data);
      }
      if (data.type === "js") {
        return addJs(data);
      }
      if (data.type === "dom") {
        return addDomNode(data);
      }
    }
  });

  bs.addDomNode = addDomNode;
  bs.addJs = addJs;
  bs.addCss = addJs;

  function addJs(data) {
    (function (e) {
      e.setAttribute("src", getAbsoluteUrl(data.src));
      e.setAttribute("id", data.id);
      document.getElementsByTagName("body")[0].appendChild(e);
    })(document.createElement("script"));
  }

  function addCss(data) {
    (function (e) {
      e.setAttribute("rel", "stylesheet");
      e.setAttribute("type", "text/css");
      e.setAttribute("id", data.id);
      e.setAttribute("media", "all");
      e.setAttribute("href", getAbsoluteUrl(data.src));
      document.getElementsByTagName("head")[0].appendChild(e);
    })(document.createElement("link"));
  }

  function addDomNode(data) {
    var elem = document.createElement(data.tagName);
    for (var attr in data.attrs) {
      elem.setAttribute(attr, data.attrs[attr]);
    }
    if (data.placement) {
      document.getElementsByTagName(data.placement)[0].appendChild(elem);
    } else {
      document.getElementsByTagName("body")[0].appendChild(elem);
    }
    return elem;
  }

  function removeElement(element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  function getAbsoluteUrl(path) {
    if (path.match(/^h/)) {
      return path;
    }
    return [window.location.protocol, "//", getHost(), path].join("");
  }

  function getHost() {
    return uiOptions.bs.mode === "snippet"
      ? window.location.hostname + ":" + uiOptions.bs.port
      : window.location.host;
  }
})(window, document, ___browserSync___);
