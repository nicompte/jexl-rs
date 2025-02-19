var Module = void 0 !== Module ? Module : {},
  TreeSitter = (function () {
    var e,
      t = "object" == typeof window ? { currentScript: window.document.currentScript } : null;
    class Parser {
      constructor() {
        this.initialize();
      }
      initialize() {
        throw new Error("cannot construct a Parser before calling `init()`");
      }
      static init(r) {
        return (
          e ||
          ((Module = Object.assign({}, Module, r)),
            (e = new Promise((e) => {
              var r,
                n,
                s,
                o,
                _,
                a,
                u = Object.assign({}, Module),
                l = [],
                i = "./this.program",
                d = (e, t) => {
                  throw t;
                },
                c = "object" == typeof window,
                m = "function" == typeof importScripts,
                f = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
                p = "";
              f
                ? ((p = m ? require("path").dirname(p) + "/" : __dirname + "/"),
                  (a = () => {
                    _ || ((o = require("fs")), (_ = require("path")));
                  }),
                  (r = function (e, t) {
                    return a(), (e = _.normalize(e)), o.readFileSync(e, t ? void 0 : "utf8");
                  }),
                  (s = (e) => {
                    var t = r(e, !0);
                    return t.buffer || (t = new Uint8Array(t)), t;
                  }),
                  (n = (e, t, r) => {
                    a(),
                      (e = _.normalize(e)),
                      o.readFile(e, function (e, n) {
                        e ? r(e) : t(n.buffer);
                      });
                  }),
                  process.argv.length > 1 && (i = process.argv[1].replace(/\\/g, "/")),
                  (l = process.argv.slice(2)),
                  "undefined" != typeof module && (module.exports = Module),
                  (d = (e, t) => {
                    if (te()) throw ((process.exitCode = e), t);
                    !(function (e) {
                      if (e instanceof Qe) return;
                      h("exiting due to exception: " + e);
                    })(t),
                      process.exit(e);
                  }),
                  (Module.inspect = function () {
                    return "[Emscripten Module object]";
                  }))
                : (c || m) &&
                (m ? (p = self.location.href) : void 0 !== t && t.currentScript && (p = t.currentScript.src),
                  (p = 0 !== p.indexOf("blob:") ? p.substr(0, p.replace(/[?#].*/, "").lastIndexOf("/") + 1) : ""),
                  (r = (e) => {
                    var t = new XMLHttpRequest();
                    return t.open("GET", e, !1), t.send(null), t.responseText;
                  }),
                  m &&
                  (s = (e) => {
                    var t = new XMLHttpRequest();
                    return t.open("GET", e, !1), (t.responseType = "arraybuffer"), t.send(null), new Uint8Array(t.response);
                  }),
                  (n = (e, t, r) => {
                    var n = new XMLHttpRequest();
                    n.open("GET", e, !0),
                      (n.responseType = "arraybuffer"),
                      (n.onload = () => {
                        200 == n.status || (0 == n.status && n.response) ? t(n.response) : r();
                      }),
                      (n.onerror = r),
                      n.send(null);
                  }));
              Module.print || console.log.bind(console);
              var h = Module.printErr || console.warn.bind(console);
              Object.assign(Module, u), (u = null), Module.arguments && (l = Module.arguments), Module.thisProgram && (i = Module.thisProgram), Module.quit && (d = Module.quit);
              var g = 16;
              var w,
                y = [];
              function M(e, t) {
                for (var r = e; r < e + t; r++) {
                  var n = Me(r);
                  n && w.set(n, r);
                }
              }
              function b(e, t) {
                if ((w || ((w = new WeakMap()), M(0, K.length)), w.has(e))) return w.get(e);
                var r = (function () {
                  if (y.length) return y.pop();
                  try {
                    K.grow(1);
                  } catch (e) {
                    if (!(e instanceof RangeError)) throw e;
                    throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
                  }
                  return K.length - 1;
                })();
                try {
                  Ce(r, e);
                } catch (n) {
                  if (!(n instanceof TypeError)) throw n;
                  Ce(
                    r,
                    (function (e, t) {
                      if ("function" == typeof WebAssembly.Function) {
                        for (var r = { i: "i32", j: "i64", f: "f32", d: "f64" }, n = { parameters: [], results: "v" == t[0] ? [] : [r[t[0]]] }, s = 1; s < t.length; ++s) n.parameters.push(r[t[s]]);
                        return new WebAssembly.Function(n, e);
                      }
                      var o = [1, 0, 1, 96],
                        _ = t.slice(0, 1),
                        a = t.slice(1),
                        u = { i: 127, j: 126, f: 125, d: 124 };
                      for (o.push(a.length), s = 0; s < a.length; ++s) o.push(u[a[s]]);
                      "v" == _ ? o.push(0) : (o = o.concat([1, u[_]])), (o[1] = o.length - 2);
                      var l = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(o, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0])),
                        i = new WebAssembly.Module(l);
                      return new WebAssembly.Instance(i, { e: { f: e } }).exports.f;
                    })(e, t)
                  );
                }
                return w.set(e, r), r;
              }
              var v,
                E = (e) => {
                  e;
                },
                I = Module.dynamicLibraries || [];
              Module.wasmBinary && (v = Module.wasmBinary);
              var S,
                x = Module.noExitRuntime || !0;
              function A(e, t, r = "i8", n) {
                switch (("*" === r.charAt(r.length - 1) && (r = "i32"), r)) {
                  case "i1":
                  case "i8":
                    R[e >> 0] = t;
                    break;
                  case "i16":
                    W[e >> 1] = t;
                    break;
                  case "i32":
                    L[e >> 2] = t;
                    break;
                  case "i64":
                    (ie = [t >>> 0, ((le = t), +Math.abs(le) >= 1 ? (le > 0 ? (0 | Math.min(+Math.floor(le / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((le - +(~~le >>> 0)) / 4294967296) >>> 0) : 0)]),
                      (L[e >> 2] = ie[0]),
                      (L[(e + 4) >> 2] = ie[1]);
                    break;
                  case "float":
                    O[e >> 2] = t;
                    break;
                  case "double":
                    F[e >> 3] = t;
                    break;
                  default:
                    ae("invalid type for setValue: " + r);
                }
              }
              function N(e, t = "i8", r) {
                switch (("*" === t.charAt(t.length - 1) && (t = "i32"), t)) {
                  case "i1":
                  case "i8":
                    return R[e >> 0];
                  case "i16":
                    return W[e >> 1];
                  case "i32":
                  case "i64":
                    return L[e >> 2];
                  case "float":
                    return O[e >> 2];
                  case "double":
                    return Number(F[e >> 3]);
                  default:
                    ae("invalid type for getValue: " + t);
                }
                return null;
              }
              "object" != typeof WebAssembly && ae("no native wasm support detected");
              var P,
                k = !1,
                q = 1;
              var C,
                R,
                T,
                W,
                L,
                O,
                F,
                Z = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
              function $(e, t, r) {
                for (var n = t + r, s = t; e[s] && !(s >= n);) ++s;
                if (s - t > 16 && e.subarray && Z) return Z.decode(e.subarray(t, s));
                for (var o = ""; t < s;) {
                  var _ = e[t++];
                  if (128 & _) {
                    var a = 63 & e[t++];
                    if (192 != (224 & _)) {
                      var u = 63 & e[t++];
                      if ((_ = 224 == (240 & _) ? ((15 & _) << 12) | (a << 6) | u : ((7 & _) << 18) | (a << 12) | (u << 6) | (63 & e[t++])) < 65536) o += String.fromCharCode(_);
                      else {
                        var l = _ - 65536;
                        o += String.fromCharCode(55296 | (l >> 10), 56320 | (1023 & l));
                      }
                    } else o += String.fromCharCode(((31 & _) << 6) | a);
                  } else o += String.fromCharCode(_);
                }
                return o;
              }
              function j(e, t) {
                return e ? $(T, e, t) : "";
              }
              function z(e, t, r, n) {
                if (!(n > 0)) return 0;
                for (var s = r, o = r + n - 1, _ = 0; _ < e.length; ++_) {
                  var a = e.charCodeAt(_);
                  if (a >= 55296 && a <= 57343) a = (65536 + ((1023 & a) << 10)) | (1023 & e.charCodeAt(++_));
                  if (a <= 127) {
                    if (r >= o) break;
                    t[r++] = a;
                  } else if (a <= 2047) {
                    if (r + 1 >= o) break;
                    (t[r++] = 192 | (a >> 6)), (t[r++] = 128 | (63 & a));
                  } else if (a <= 65535) {
                    if (r + 2 >= o) break;
                    (t[r++] = 224 | (a >> 12)), (t[r++] = 128 | ((a >> 6) & 63)), (t[r++] = 128 | (63 & a));
                  } else {
                    if (r + 3 >= o) break;
                    (t[r++] = 240 | (a >> 18)), (t[r++] = 128 | ((a >> 12) & 63)), (t[r++] = 128 | ((a >> 6) & 63)), (t[r++] = 128 | (63 & a));
                  }
                }
                return (t[r] = 0), r - s;
              }
              function D(e, t, r) {
                return z(e, T, t, r);
              }
              function U(e) {
                for (var t = 0, r = 0; r < e.length; ++r) {
                  var n = e.charCodeAt(r);
                  n >= 55296 && n <= 57343 && (n = (65536 + ((1023 & n) << 10)) | (1023 & e.charCodeAt(++r))), n <= 127 ? ++t : (t += n <= 2047 ? 2 : n <= 65535 ? 3 : 4);
                }
                return t;
              }
              function B(e) {
                var t = U(e) + 1,
                  r = Xe(t);
                return z(e, R, r, t), r;
              }
              function G(e) {
                (C = e),
                  (Module.HEAP8 = R = new Int8Array(e)),
                  (Module.HEAP16 = W = new Int16Array(e)),
                  (Module.HEAP32 = L = new Int32Array(e)),
                  (Module.HEAPU8 = T = new Uint8Array(e)),
                  (Module.HEAPU16 = new Uint16Array(e)),
                  (Module.HEAPU32 = new Uint32Array(e)),
                  (Module.HEAPF32 = O = new Float32Array(e)),
                  (Module.HEAPF64 = F = new Float64Array(e));
              }
              var H = Module.INITIAL_MEMORY || 33554432;
              (S = Module.wasmMemory ? Module.wasmMemory : new WebAssembly.Memory({ initial: H / 65536, maximum: 32768 })) && (C = S.buffer), (H = C.byteLength), G(C);
              var K = new WebAssembly.Table({ initial: 17, element: "anyfunc" }),
                V = [],
                X = [],
                Q = [],
                J = [],
                Y = !1,
                ee = 0;
              function te() {
                return x || ee > 0;
              }
              var re = 0,
                ne = null,
                se = null;
              function oe(e) {
                re++, Module.monitorRunDependencies && Module.monitorRunDependencies(re);
              }
              function _e(e) {
                if ((re--, Module.monitorRunDependencies && Module.monitorRunDependencies(re), 0 == re && (null !== ne && (clearInterval(ne), (ne = null)), se))) {
                  var t = se;
                  (se = null), t();
                }
              }
              function ae(e) {
                throw (Module.onAbort && Module.onAbort(e), h((e = "Aborted(" + e + ")")), (k = !0), (P = 1), (e += ". Build with -s ASSERTIONS=1 for more info."), new WebAssembly.RuntimeError(e));
              }
              (Module.preloadedImages = {}), (Module.preloadedAudios = {}), (Module.preloadedWasm = {});
              var ue,
                le,
                ie,
                de = "data:application/octet-stream;base64,";
              function ce(e) {
                return e.startsWith(de);
              }
              function me(e) {
                return e.startsWith("file://");
              }
              function fe(e) {
                try {
                  if (e == ue && v) return new Uint8Array(v);
                  if (s) return s(e);
                  throw "both async and sync fetching of the wasm failed";
                } catch (e) {
                  ae(e);
                }
              }
              ce((ue = "tree-sitter.wasm")) ||
                (ue = (function (e) {
                  return Module.locateFile ? Module.locateFile(e, p) : p + e;
                })(ue));
              var pe = {},
                he = {
                  get: function (e, t) {
                    return pe[t] || (pe[t] = new WebAssembly.Global({ value: "i32", mutable: !0 })), pe[t];
                  },
                };
              function ge(e) {
                for (; e.length > 0;) {
                  var t = e.shift();
                  if ("function" != typeof t) {
                    var r = t.func;
                    "number" == typeof r ? (void 0 === t.arg ? Me(r)() : Me(r)(t.arg)) : r(void 0 === t.arg ? null : t.arg);
                  } else t(Module);
                }
              }
              function we(e) {
                var t = 0,
                  r = 0;
                function n() {
                  for (var r = 0, n = 1; ;) {
                    var s = e[t++];
                    if (((r += (127 & s) * n), (n *= 128), !(128 & s))) break;
                  }
                  return r;
                }
                function s() {
                  var r = n();
                  return $(e, (t += r) - r, r);
                }
                function o(e, t) {
                  if (e) throw new Error(t);
                }
                var _ = "dylink.0";
                if (e instanceof WebAssembly.Module) {
                  var a = WebAssembly.Module.customSections(e, _);
                  0 === a.length && ((_ = "dylink"), (a = WebAssembly.Module.customSections(e, _))), o(0 === a.length, "need dylink section"), (r = (e = new Uint8Array(a[0])).length);
                } else {
                  o(!(1836278016 == new Uint32Array(new Uint8Array(e.subarray(0, 24)).buffer)[0]), "need to see wasm magic number"), o(0 !== e[8], "need the dylink section to be first"), (t = 9);
                  var u = n();
                  (r = t + u), (_ = s());
                }
                var l = { neededDynlibs: [], tlsExports: {} };
                if ("dylink" == _) {
                  (l.memorySize = n()), (l.memoryAlign = n()), (l.tableSize = n()), (l.tableAlign = n());
                  for (var i = n(), d = 0; d < i; ++d) {
                    var c = s();
                    l.neededDynlibs.push(c);
                  }
                } else {
                  o("dylink.0" !== _);
                  for (; t < r;) {
                    var m = e[t++],
                      f = n();
                    if (1 === m) (l.memorySize = n()), (l.memoryAlign = n()), (l.tableSize = n()), (l.tableAlign = n());
                    else if (2 === m) for (i = n(), d = 0; d < i; ++d) (c = s()), l.neededDynlibs.push(c);
                    else if (3 === m)
                      for (var p = n(); p--;) {
                        var h = s();
                        256 & n() && (l.tlsExports[h] = 1);
                      }
                    else t += f;
                  }
                }
                return l;
              }
              var ye = [];
              function Me(e) {
                var t = ye[e];
                return t || (e >= ye.length && (ye.length = e + 1), (ye[e] = t = K.get(e))), t;
              }
              function be(e) {
                return 0 == e.indexOf("dynCall_") || ["stackAlloc", "stackSave", "stackRestore"].includes(e) ? e : "_" + e;
              }
              function ve(e, t) {
                for (var r in e)
                  if (e.hasOwnProperty(r)) {
                    Ue.hasOwnProperty(r) || (Ue[r] = e[r]);
                    var n = be(r);
                    Module.hasOwnProperty(n) || (Module[n] = e[r]);
                  }
              }
              var Ee = { loadedLibsByName: {}, loadedLibsByHandle: {} };
              function Ie(e, t, r) {
                return e.includes("j")
                  ? (function (e, t, r) {
                    var n = Module["dynCall_" + e];
                    return r && r.length ? n.apply(null, [t].concat(r)) : n.call(null, t);
                  })(e, t, r)
                  : Me(t).apply(null, r);
              }
              var Se = 5255344;
              function xe(e) {
                return ["__cpp_exception", "__c_longjmp", "__wasm_apply_data_relocs", "__dso_handle", "__tls_size", "__tls_align", "__set_stack_limits", "emscripten_tls_init", "__wasm_init_tls", "__wasm_call_ctors"].includes(e);
              }
              function Ae(e, t, r) {
                var n = {};
                for (var s in e) {
                  var o = e[s];
                  "object" == typeof o && (o = o.value), "number" == typeof o && (o += t), (n[s] = o);
                }
                return (
                  (function (e, t) {
                    for (var r in e)
                      if (!xe(r)) {
                        var n = e[r];
                        r.startsWith("orig$") && ((r = r.split("$")[1]), (t = !0)),
                          pe[r] || (pe[r] = new WebAssembly.Global({ value: "i32", mutable: !0 })),
                          (t || 0 == pe[r].value) &&
                          ("function" == typeof n ? (pe[r].value = b(n)) : "number" == typeof n ? (pe[r].value = n) : "bigint" == typeof n ? (pe[r].value = Number(n)) : h("unhandled export type for `" + r + "`: " + typeof n));
                      }
                  })(n, r),
                  n
                );
              }
              function Ne(e, t) {
                var r, n;
                return (
                  t && (r = Ue["orig$" + e]),
                  r || (r = Ue[e]),
                  r || (r = Module[be(e)]),
                  !r &&
                  e.startsWith("invoke_") &&
                  ((n = e.split("_")[1]),
                    (r = function () {
                      var e = Ke();
                      try {
                        return Ie(n, arguments[0], Array.prototype.slice.call(arguments, 1));
                      } catch (t) {
                        if ((Ve(e), t !== t + 0 && "longjmp" !== t)) throw t;
                        He(1, 0);
                      }
                    })),
                  r
                );
              }
              function Pe(e, t, r) {
                var n = we(e);
                function s() {
                  var s, o;
                  if (!r || !R[(r + 24) >> 0]) {
                    var _ = Math.pow(2, n.memoryAlign);
                    _ = Math.max(_, g);
                    var a = n.memorySize
                      ? ((s = (function (e) {
                        if (Y) return Be(e);
                        var t = Se,
                          r = (t + e + 15) & -16;
                        return (Se = r), (pe.__heap_base.value = r), t;
                      })(n.memorySize + _)),
                        (o = _),
                        Math.ceil(s / o) * o)
                      : 0,
                      u = n.tableSize ? K.length : 0;
                    r && ((R[(r + 24) >> 0] = 1), (L[(r + 28) >> 2] = a), (L[(r + 32) >> 2] = n.memorySize), (L[(r + 36) >> 2] = u), (L[(r + 40) >> 2] = n.tableSize));
                  } else (a = L[(r + 28) >> 2]), (u = L[(r + 36) >> 2]);
                  var l,
                    i = u + n.tableSize - K.length;
                  i > 0 && K.grow(i);
                  var d = new Proxy(
                    {},
                    {
                      get: function (e, t) {
                        switch (t) {
                          case "__memory_base":
                            return a;
                          case "__table_base":
                            return u;
                        }
                        if (t in Ue) return Ue[t];
                        var r;
                        t in e ||
                          (e[t] = function () {
                            return (
                              r ||
                              (r = (function (e) {
                                var t = Ne(e, !1);
                                return t || (t = l[e]), t;
                              })(t)),
                              r.apply(null, arguments)
                            );
                          });
                        return e[t];
                      },
                    }
                  ),
                    c = { "GOT.mem": new Proxy({}, he), "GOT.func": new Proxy({}, he), env: d, wasi_snapshot_preview1: d };
                  function m(e) {
                    M(u, n.tableSize), (l = Ae(e.exports, a)), t.allowUndefined || qe();
                    var r = l.__wasm_call_ctors;
                    return r && (Y ? r() : X.push(r)), l;
                  }
                  if (t.loadAsync) {
                    if (e instanceof WebAssembly.Module) {
                      var f = new WebAssembly.Instance(e, c);
                      return Promise.resolve(m(f));
                    }
                    return WebAssembly.instantiate(e, c).then(function (e) {
                      return m(e.instance);
                    });
                  }
                  var p = e instanceof WebAssembly.Module ? e : new WebAssembly.Module(e);
                  return m((f = new WebAssembly.Instance(p, c)));
                }
                return t.loadAsync
                  ? n.neededDynlibs
                    .reduce(function (e, r) {
                      return e.then(function () {
                        return ke(r, t);
                      });
                    }, Promise.resolve())
                    .then(function () {
                      return s();
                    })
                  : (n.neededDynlibs.forEach(function (e) {
                    ke(e, t);
                  }),
                    s());
              }
              function ke(e, t, r) {
                "__main__" != e || Ee.loadedLibsByName[e] || (Ee.loadedLibsByName[e] = { refcount: 1 / 0, name: "__main__", module: Module.asm, global: !0 }), (t = t || { global: !0, nodelete: !0 });
                var o = Ee.loadedLibsByName[e];
                if (o)
                  return (
                    t.global && !o.global && ((o.global = !0), "loading" !== o.module && ve(o.module)),
                    t.nodelete && o.refcount !== 1 / 0 && (o.refcount = 1 / 0),
                    o.refcount++,
                    r && (Ee.loadedLibsByHandle[r] = o),
                    !t.loadAsync || Promise.resolve(!0)
                  );
                function _(e) {
                  if (t.fs && t.fs.findObject(e)) {
                    var r = t.fs.readFile(e, { encoding: "binary" });
                    return r instanceof Uint8Array || (r = new Uint8Array(r)), t.loadAsync ? Promise.resolve(r) : r;
                  }
                  if (t.loadAsync)
                    return new Promise(function (t, r) {
                      n(
                        e,
                        function (e) {
                          t(new Uint8Array(e));
                        },
                        r
                      );
                    });
                  if (!s) throw new Error(e + ": file not found, and synchronous loading of external files is not available");
                  return s(e);
                }
                function a() {
                  if (void 0 !== Module.preloadedWasm && void 0 !== Module.preloadedWasm[e]) {
                    var n = Module.preloadedWasm[e];
                    return t.loadAsync ? Promise.resolve(n) : n;
                  }
                  return t.loadAsync
                    ? _(e).then(function (e) {
                      return Pe(e, t, r);
                    })
                    : Pe(_(e), t, r);
                }
                function u(e) {
                  o.global && ve(e), (o.module = e);
                }
                return (
                  (o = { refcount: t.nodelete ? 1 / 0 : 1, name: e, module: "loading", global: t.global }),
                  (Ee.loadedLibsByName[e] = o),
                  r && (Ee.loadedLibsByHandle[r] = o),
                  t.loadAsync
                    ? a().then(function (e) {
                      return u(e), !0;
                    })
                    : (u(a()), !0)
                );
              }
              function qe() {
                for (var e in pe)
                  if (0 == pe[e].value) {
                    var t = Ne(e, !0);
                    if ("function" == typeof t) pe[e].value = b(t, t.sig);
                    else {
                      if ("number" != typeof t) throw new Error("bad export type for `" + e + "`: " + typeof t);
                      pe[e].value = t;
                    }
                  }
              }
              function Ce(e, t) {
                K.set(e, t), (ye[e] = t);
              }
              var Re,
                Te = new WebAssembly.Global({ value: "i32", mutable: !1 }, 1024),
                We = new WebAssembly.Global({ value: "i32", mutable: !0 }, 5255344),
                Le = new WebAssembly.Global({ value: "i32", mutable: !1 }, 1);
              function Oe() {
                ae("");
              }
              (Module._abort = Oe),
                (Oe.sig = "v"),
                (Re = f
                  ? () => {
                    var e = process.hrtime();
                    return 1e3 * e[0] + e[1] / 1e6;
                  }
                  : () => performance.now());
              var Fe = !0;
              function Ze(e, t) {
                var r, n;
                if (0 === e) r = Date.now();
                else {
                  if ((1 !== e && 4 !== e) || !Fe) return (n = 28), (L[Ge() >> 2] = n), -1;
                  r = Re();
                }
                return (L[t >> 2] = (r / 1e3) | 0), (L[(t + 4) >> 2] = ((r % 1e3) * 1e3 * 1e3) | 0), 0;
              }
              function $e(e) {
                try {
                  return S.grow((e - C.byteLength + 65535) >>> 16), G(S.buffer), 1;
                } catch (e) { }
              }
              function je(e) {
                tt(e);
              }
              function ze(e) {
                E(e);
              }
              (Ze.sig = "iii"), (je.sig = "vi"), (ze.sig = "vi");
              var De,
                Ue = {
                  __heap_base: Se,
                  __indirect_function_table: K,
                  __memory_base: Te,
                  __stack_pointer: We,
                  __table_base: Le,
                  abort: Oe,
                  clock_gettime: Ze,
                  emscripten_memcpy_big: function (e, t, r) {
                    T.copyWithin(e, t, t + r);
                  },
                  emscripten_resize_heap: function (e) {
                    var t,
                      r,
                      n = T.length;
                    if ((e >>>= 0) > 2147483648) return !1;
                    for (var s = 1; s <= 4; s *= 2) {
                      var o = n * (1 + 0.2 / s);
                      if (((o = Math.min(o, e + 100663296)), $e(Math.min(2147483648, ((t = Math.max(e, o)) % (r = 65536) > 0 && (t += r - (t % r)), t))))) return !0;
                    }
                    return !1;
                  },
                  exit: je,
                  memory: S,
                  setTempRet0: ze,
                  tree_sitter_log_callback: function (e, t) {
                    if (wt) {
                      const r = j(t);
                      wt(r, 0 !== e);
                    }
                  },
                  tree_sitter_parse_callback: function (e, t, r, n, s) {
                    var o = gt(t, { row: r, column: n });
                    "string" == typeof o
                      ? (A(s, o.length, "i32"),
                        (function (e, t, r) {
                          if ((void 0 === r && (r = 2147483647), r < 2)) return 0;
                          for (var n = (r -= 2) < 2 * e.length ? r / 2 : e.length, s = 0; s < n; ++s) {
                            var o = e.charCodeAt(s);
                            (W[t >> 1] = o), (t += 2);
                          }
                          W[t >> 1] = 0;
                        })(o, e, 10240))
                      : A(s, 0, "i32");
                  },
                },
                Be =
                  ((function () {
                    var e = { env: Ue, wasi_snapshot_preview1: Ue, "GOT.mem": new Proxy(Ue, he), "GOT.func": new Proxy(Ue, he) };
                    function t(e, t) {
                      var r = e.exports;
                      (r = Ae(r, 1024)), (Module.asm = r);
                      var n,
                        s = we(t);
                      s.neededDynlibs && (I = s.neededDynlibs.concat(I)), ve(r), (n = Module.asm.__wasm_call_ctors), X.unshift(n), _e();
                    }
                    function r(e) {
                      t(e.instance, e.module);
                    }
                    function s(t) {
                      return (function () {
                        if (!v && (c || m)) {
                          if ("function" == typeof fetch && !me(ue))
                            return fetch(ue, { credentials: "same-origin" })
                              .then(function (e) {
                                if (!e.ok) throw "failed to load wasm binary file at '" + ue + "'";
                                return e.arrayBuffer();
                              })
                              .catch(function () {
                                return fe(ue);
                              });
                          if (n)
                            return new Promise(function (e, t) {
                              n(
                                ue,
                                function (t) {
                                  e(new Uint8Array(t));
                                },
                                t
                              );
                            });
                        }
                        return Promise.resolve().then(function () {
                          return fe(ue);
                        });
                      })()
                        .then(function (t) {
                          return WebAssembly.instantiate(t, e);
                        })
                        .then(function (e) {
                          return e;
                        })
                        .then(t, function (e) {
                          h("failed to asynchronously prepare wasm: " + e), ae(e);
                        });
                    }
                    if ((oe(), Module.instantiateWasm))
                      try {
                        return Module.instantiateWasm(e, t);
                      } catch (e) {
                        return h("Module.instantiateWasm callback failed with error: " + e), !1;
                      }
                    v || "function" != typeof WebAssembly.instantiateStreaming || ce(ue) || me(ue) || "function" != typeof fetch
                      ? s(r)
                      : fetch(ue, { credentials: "same-origin" }).then(function (t) {
                        return WebAssembly.instantiateStreaming(t, e).then(r, function (e) {
                          return h("wasm streaming compile failed: " + e), h("falling back to ArrayBuffer instantiation"), s(r);
                        });
                      });
                  })(),
                    (Module.___wasm_call_ctors = function () {
                      return (Module.___wasm_call_ctors = Module.asm.__wasm_call_ctors).apply(null, arguments);
                    }),
                    (Module._malloc = function () {
                      return (Be = Module._malloc = Module.asm.malloc).apply(null, arguments);
                    })),
                Ge =
                  ((Module._calloc = function () {
                    return (Module._calloc = Module.asm.calloc).apply(null, arguments);
                  }),
                    (Module._realloc = function () {
                      return (Module._realloc = Module.asm.realloc).apply(null, arguments);
                    }),
                    (Module._free = function () {
                      return (Module._free = Module.asm.free).apply(null, arguments);
                    }),
                    (Module._ts_language_symbol_count = function () {
                      return (Module._ts_language_symbol_count = Module.asm.ts_language_symbol_count).apply(null, arguments);
                    }),
                    (Module._ts_language_version = function () {
                      return (Module._ts_language_version = Module.asm.ts_language_version).apply(null, arguments);
                    }),
                    (Module._ts_language_field_count = function () {
                      return (Module._ts_language_field_count = Module.asm.ts_language_field_count).apply(null, arguments);
                    }),
                    (Module._ts_language_symbol_name = function () {
                      return (Module._ts_language_symbol_name = Module.asm.ts_language_symbol_name).apply(null, arguments);
                    }),
                    (Module._ts_language_symbol_for_name = function () {
                      return (Module._ts_language_symbol_for_name = Module.asm.ts_language_symbol_for_name).apply(null, arguments);
                    }),
                    (Module._ts_language_symbol_type = function () {
                      return (Module._ts_language_symbol_type = Module.asm.ts_language_symbol_type).apply(null, arguments);
                    }),
                    (Module._ts_language_field_name_for_id = function () {
                      return (Module._ts_language_field_name_for_id = Module.asm.ts_language_field_name_for_id).apply(null, arguments);
                    }),
                    (Module._memcpy = function () {
                      return (Module._memcpy = Module.asm.memcpy).apply(null, arguments);
                    }),
                    (Module._ts_parser_delete = function () {
                      return (Module._ts_parser_delete = Module.asm.ts_parser_delete).apply(null, arguments);
                    }),
                    (Module._ts_parser_reset = function () {
                      return (Module._ts_parser_reset = Module.asm.ts_parser_reset).apply(null, arguments);
                    }),
                    (Module._ts_parser_set_language = function () {
                      return (Module._ts_parser_set_language = Module.asm.ts_parser_set_language).apply(null, arguments);
                    }),
                    (Module._ts_parser_timeout_micros = function () {
                      return (Module._ts_parser_timeout_micros = Module.asm.ts_parser_timeout_micros).apply(null, arguments);
                    }),
                    (Module._ts_parser_set_timeout_micros = function () {
                      return (Module._ts_parser_set_timeout_micros = Module.asm.ts_parser_set_timeout_micros).apply(null, arguments);
                    }),
                    (Module._memmove = function () {
                      return (Module._memmove = Module.asm.memmove).apply(null, arguments);
                    }),
                    (Module._memcmp = function () {
                      return (Module._memcmp = Module.asm.memcmp).apply(null, arguments);
                    }),
                    (Module._ts_query_new = function () {
                      return (Module._ts_query_new = Module.asm.ts_query_new).apply(null, arguments);
                    }),
                    (Module._ts_query_delete = function () {
                      return (Module._ts_query_delete = Module.asm.ts_query_delete).apply(null, arguments);
                    }),
                    (Module._iswspace = function () {
                      return (Module._iswspace = Module.asm.iswspace).apply(null, arguments);
                    }),
                    (Module._iswalnum = function () {
                      return (Module._iswalnum = Module.asm.iswalnum).apply(null, arguments);
                    }),
                    (Module._ts_query_pattern_count = function () {
                      return (Module._ts_query_pattern_count = Module.asm.ts_query_pattern_count).apply(null, arguments);
                    }),
                    (Module._ts_query_capture_count = function () {
                      return (Module._ts_query_capture_count = Module.asm.ts_query_capture_count).apply(null, arguments);
                    }),
                    (Module._ts_query_string_count = function () {
                      return (Module._ts_query_string_count = Module.asm.ts_query_string_count).apply(null, arguments);
                    }),
                    (Module._ts_query_capture_name_for_id = function () {
                      return (Module._ts_query_capture_name_for_id = Module.asm.ts_query_capture_name_for_id).apply(null, arguments);
                    }),
                    (Module._ts_query_string_value_for_id = function () {
                      return (Module._ts_query_string_value_for_id = Module.asm.ts_query_string_value_for_id).apply(null, arguments);
                    }),
                    (Module._ts_query_predicates_for_pattern = function () {
                      return (Module._ts_query_predicates_for_pattern = Module.asm.ts_query_predicates_for_pattern).apply(null, arguments);
                    }),
                    (Module._ts_tree_copy = function () {
                      return (Module._ts_tree_copy = Module.asm.ts_tree_copy).apply(null, arguments);
                    }),
                    (Module._ts_tree_delete = function () {
                      return (Module._ts_tree_delete = Module.asm.ts_tree_delete).apply(null, arguments);
                    }),
                    (Module._ts_init = function () {
                      return (Module._ts_init = Module.asm.ts_init).apply(null, arguments);
                    }),
                    (Module._ts_parser_new_wasm = function () {
                      return (Module._ts_parser_new_wasm = Module.asm.ts_parser_new_wasm).apply(null, arguments);
                    }),
                    (Module._ts_parser_enable_logger_wasm = function () {
                      return (Module._ts_parser_enable_logger_wasm = Module.asm.ts_parser_enable_logger_wasm).apply(null, arguments);
                    }),
                    (Module._ts_parser_parse_wasm = function () {
                      return (Module._ts_parser_parse_wasm = Module.asm.ts_parser_parse_wasm).apply(null, arguments);
                    }),
                    (Module._ts_language_type_is_named_wasm = function () {
                      return (Module._ts_language_type_is_named_wasm = Module.asm.ts_language_type_is_named_wasm).apply(null, arguments);
                    }),
                    (Module._ts_language_type_is_visible_wasm = function () {
                      return (Module._ts_language_type_is_visible_wasm = Module.asm.ts_language_type_is_visible_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_root_node_wasm = function () {
                      return (Module._ts_tree_root_node_wasm = Module.asm.ts_tree_root_node_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_edit_wasm = function () {
                      return (Module._ts_tree_edit_wasm = Module.asm.ts_tree_edit_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_get_changed_ranges_wasm = function () {
                      return (Module._ts_tree_get_changed_ranges_wasm = Module.asm.ts_tree_get_changed_ranges_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_new_wasm = function () {
                      return (Module._ts_tree_cursor_new_wasm = Module.asm.ts_tree_cursor_new_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_delete_wasm = function () {
                      return (Module._ts_tree_cursor_delete_wasm = Module.asm.ts_tree_cursor_delete_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_reset_wasm = function () {
                      return (Module._ts_tree_cursor_reset_wasm = Module.asm.ts_tree_cursor_reset_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_goto_first_child_wasm = function () {
                      return (Module._ts_tree_cursor_goto_first_child_wasm = Module.asm.ts_tree_cursor_goto_first_child_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_goto_next_sibling_wasm = function () {
                      return (Module._ts_tree_cursor_goto_next_sibling_wasm = Module.asm.ts_tree_cursor_goto_next_sibling_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_goto_parent_wasm = function () {
                      return (Module._ts_tree_cursor_goto_parent_wasm = Module.asm.ts_tree_cursor_goto_parent_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_current_node_type_id_wasm = function () {
                      return (Module._ts_tree_cursor_current_node_type_id_wasm = Module.asm.ts_tree_cursor_current_node_type_id_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_current_node_is_named_wasm = function () {
                      return (Module._ts_tree_cursor_current_node_is_named_wasm = Module.asm.ts_tree_cursor_current_node_is_named_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_current_node_is_missing_wasm = function () {
                      return (Module._ts_tree_cursor_current_node_is_missing_wasm = Module.asm.ts_tree_cursor_current_node_is_missing_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_current_node_id_wasm = function () {
                      return (Module._ts_tree_cursor_current_node_id_wasm = Module.asm.ts_tree_cursor_current_node_id_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_start_position_wasm = function () {
                      return (Module._ts_tree_cursor_start_position_wasm = Module.asm.ts_tree_cursor_start_position_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_end_position_wasm = function () {
                      return (Module._ts_tree_cursor_end_position_wasm = Module.asm.ts_tree_cursor_end_position_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_start_index_wasm = function () {
                      return (Module._ts_tree_cursor_start_index_wasm = Module.asm.ts_tree_cursor_start_index_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_end_index_wasm = function () {
                      return (Module._ts_tree_cursor_end_index_wasm = Module.asm.ts_tree_cursor_end_index_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_current_field_id_wasm = function () {
                      return (Module._ts_tree_cursor_current_field_id_wasm = Module.asm.ts_tree_cursor_current_field_id_wasm).apply(null, arguments);
                    }),
                    (Module._ts_tree_cursor_current_node_wasm = function () {
                      return (Module._ts_tree_cursor_current_node_wasm = Module.asm.ts_tree_cursor_current_node_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_symbol_wasm = function () {
                      return (Module._ts_node_symbol_wasm = Module.asm.ts_node_symbol_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_child_count_wasm = function () {
                      return (Module._ts_node_child_count_wasm = Module.asm.ts_node_child_count_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_named_child_count_wasm = function () {
                      return (Module._ts_node_named_child_count_wasm = Module.asm.ts_node_named_child_count_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_child_wasm = function () {
                      return (Module._ts_node_child_wasm = Module.asm.ts_node_child_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_named_child_wasm = function () {
                      return (Module._ts_node_named_child_wasm = Module.asm.ts_node_named_child_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_child_by_field_id_wasm = function () {
                      return (Module._ts_node_child_by_field_id_wasm = Module.asm.ts_node_child_by_field_id_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_next_sibling_wasm = function () {
                      return (Module._ts_node_next_sibling_wasm = Module.asm.ts_node_next_sibling_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_prev_sibling_wasm = function () {
                      return (Module._ts_node_prev_sibling_wasm = Module.asm.ts_node_prev_sibling_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_next_named_sibling_wasm = function () {
                      return (Module._ts_node_next_named_sibling_wasm = Module.asm.ts_node_next_named_sibling_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_prev_named_sibling_wasm = function () {
                      return (Module._ts_node_prev_named_sibling_wasm = Module.asm.ts_node_prev_named_sibling_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_parent_wasm = function () {
                      return (Module._ts_node_parent_wasm = Module.asm.ts_node_parent_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_descendant_for_index_wasm = function () {
                      return (Module._ts_node_descendant_for_index_wasm = Module.asm.ts_node_descendant_for_index_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_named_descendant_for_index_wasm = function () {
                      return (Module._ts_node_named_descendant_for_index_wasm = Module.asm.ts_node_named_descendant_for_index_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_descendant_for_position_wasm = function () {
                      return (Module._ts_node_descendant_for_position_wasm = Module.asm.ts_node_descendant_for_position_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_named_descendant_for_position_wasm = function () {
                      return (Module._ts_node_named_descendant_for_position_wasm = Module.asm.ts_node_named_descendant_for_position_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_start_point_wasm = function () {
                      return (Module._ts_node_start_point_wasm = Module.asm.ts_node_start_point_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_end_point_wasm = function () {
                      return (Module._ts_node_end_point_wasm = Module.asm.ts_node_end_point_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_start_index_wasm = function () {
                      return (Module._ts_node_start_index_wasm = Module.asm.ts_node_start_index_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_end_index_wasm = function () {
                      return (Module._ts_node_end_index_wasm = Module.asm.ts_node_end_index_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_to_string_wasm = function () {
                      return (Module._ts_node_to_string_wasm = Module.asm.ts_node_to_string_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_children_wasm = function () {
                      return (Module._ts_node_children_wasm = Module.asm.ts_node_children_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_named_children_wasm = function () {
                      return (Module._ts_node_named_children_wasm = Module.asm.ts_node_named_children_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_descendants_of_type_wasm = function () {
                      return (Module._ts_node_descendants_of_type_wasm = Module.asm.ts_node_descendants_of_type_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_is_named_wasm = function () {
                      return (Module._ts_node_is_named_wasm = Module.asm.ts_node_is_named_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_has_changes_wasm = function () {
                      return (Module._ts_node_has_changes_wasm = Module.asm.ts_node_has_changes_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_has_error_wasm = function () {
                      return (Module._ts_node_has_error_wasm = Module.asm.ts_node_has_error_wasm).apply(null, arguments);
                    }),
                    (Module._ts_node_is_missing_wasm = function () {
                      return (Module._ts_node_is_missing_wasm = Module.asm.ts_node_is_missing_wasm).apply(null, arguments);
                    }),
                    (Module._ts_query_matches_wasm = function () {
                      return (Module._ts_query_matches_wasm = Module.asm.ts_query_matches_wasm).apply(null, arguments);
                    }),
                    (Module._ts_query_captures_wasm = function () {
                      return (Module._ts_query_captures_wasm = Module.asm.ts_query_captures_wasm).apply(null, arguments);
                    }),
                    (Module.___errno_location = function () {
                      return (Ge = Module.___errno_location = Module.asm.__errno_location).apply(null, arguments);
                    })),
                He =
                  ((Module._iswdigit = function () {
                    return (Module._iswdigit = Module.asm.iswdigit).apply(null, arguments);
                  }),
                    (Module._iswalpha = function () {
                      return (Module._iswalpha = Module.asm.iswalpha).apply(null, arguments);
                    }),
                    (Module._iswlower = function () {
                      return (Module._iswlower = Module.asm.iswlower).apply(null, arguments);
                    }),
                    (Module._memchr = function () {
                      return (Module._memchr = Module.asm.memchr).apply(null, arguments);
                    }),
                    (Module._strlen = function () {
                      return (Module._strlen = Module.asm.strlen).apply(null, arguments);
                    }),
                    (Module._towupper = function () {
                      return (Module._towupper = Module.asm.towupper).apply(null, arguments);
                    }),
                    (Module._setThrew = function () {
                      return (He = Module._setThrew = Module.asm.setThrew).apply(null, arguments);
                    })),
                Ke = (Module.stackSave = function () {
                  return (Ke = Module.stackSave = Module.asm.stackSave).apply(null, arguments);
                }),
                Ve = (Module.stackRestore = function () {
                  return (Ve = Module.stackRestore = Module.asm.stackRestore).apply(null, arguments);
                }),
                Xe = (Module.stackAlloc = function () {
                  return (Xe = Module.stackAlloc = Module.asm.stackAlloc).apply(null, arguments);
                });
              (Module.__Znwm = function () {
                return (Module.__Znwm = Module.asm._Znwm).apply(null, arguments);
              }),
                (Module.__ZdlPv = function () {
                  return (Module.__ZdlPv = Module.asm._ZdlPv).apply(null, arguments);
                }),
                (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev = function () {
                  return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev).apply(null, arguments);
                }),
                (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm = function () {
                  return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm).apply(null, arguments);
                }),
                (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm = function () {
                  return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm).apply(null, arguments);
                }),
                (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm = function () {
                  return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm).apply(null, arguments);
                }),
                (Module.__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm = function () {
                  return (Module.__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm = Module.asm._ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm).apply(null, arguments);
                }),
                (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc = function () {
                  return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc).apply(null, arguments);
                }),
                (Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev = function () {
                  return (Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev = Module.asm._ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev).apply(null, arguments);
                }),
                (Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw = function () {
                  return (Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw = Module.asm._ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw).apply(null, arguments);
                }),
                (Module.__ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv = function () {
                  return (Module.__ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv = Module.asm._ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv).apply(null, arguments);
                }),
                (Module._orig$ts_parser_timeout_micros = function () {
                  return (Module._orig$ts_parser_timeout_micros = Module.asm.orig$ts_parser_timeout_micros).apply(null, arguments);
                }),
                (Module._orig$ts_parser_set_timeout_micros = function () {
                  return (Module._orig$ts_parser_set_timeout_micros = Module.asm.orig$ts_parser_set_timeout_micros).apply(null, arguments);
                });
              function Qe(e) {
                (this.name = "ExitStatus"), (this.message = "Program terminated with exit(" + e + ")"), (this.status = e);
              }
              Module.allocate = function (e, t) {
                var r;
                return (r = t == q ? Xe(e.length) : Be(e.length)), e.subarray || e.slice || (e = new Uint8Array(e)), T.set(e, r), r;
              };
              function Je(e) {
                var t = Module._main;
                if (t) {
                  var r = (e = e || []).length + 1,
                    n = Xe(4 * (r + 1));
                  L[n >> 2] = B(i);
                  for (var s = 1; s < r; s++) L[(n >> 2) + s] = B(e[s - 1]);
                  L[(n >> 2) + r] = 0;
                  try {
                    var o = t(r, n);
                    return tt(o, !0), o;
                  } catch (e) {
                    return (function (e) {
                      if (e instanceof Qe || "unwind" == e) return P;
                      d(1, e);
                    })(e);
                  } finally {
                    !0;
                  }
                }
              }
              se = function e() {
                De || et(), De || (se = e);
              };
              var Ye = !1;
              function et(e) {
                function t() {
                  De ||
                    ((De = !0),
                      (Module.calledRun = !0),
                      k ||
                      ((Y = !0),
                        ge(X),
                        ge(Q),
                        Module.onRuntimeInitialized && Module.onRuntimeInitialized(),
                        rt && Je(e),
                        (function () {
                          if (Module.postRun) for ("function" == typeof Module.postRun && (Module.postRun = [Module.postRun]); Module.postRun.length;) (e = Module.postRun.shift()), J.unshift(e);
                          var e;
                          ge(J);
                        })()));
                }
                (e = e || l),
                  re > 0 ||
                  (!Ye &&
                    (I.length
                      ? (oe(),
                        I.reduce(function (e, t) {
                          return e.then(function () {
                            return ke(t, { loadAsync: !0, global: !0, nodelete: !0, allowUndefined: !0 });
                          });
                        }, Promise.resolve()).then(function () {
                          qe(), _e();
                        }))
                      : qe(),
                      (Ye = !0),
                      re > 0)) ||
                  (!(function () {
                    if (Module.preRun) for ("function" == typeof Module.preRun && (Module.preRun = [Module.preRun]); Module.preRun.length;) (e = Module.preRun.shift()), V.unshift(e);
                    var e;
                    ge(V);
                  })(),
                    re > 0 ||
                    (Module.setStatus
                      ? (Module.setStatus("Running..."),
                        setTimeout(function () {
                          setTimeout(function () {
                            Module.setStatus("");
                          }, 1),
                            t();
                        }, 1))
                      : t()));
              }
              function tt(e, t) {
                (P = e),
                  te() || !0,
                  (function (e) {
                    (P = e), te() || (Module.onExit && Module.onExit(e), (k = !0));
                    d(e, new Qe(e));
                  })(e);
              }
              if (((Module.run = et), Module.preInit)) for ("function" == typeof Module.preInit && (Module.preInit = [Module.preInit]); Module.preInit.length > 0;) Module.preInit.pop()();
              var rt = !0;
              Module.noInitialRun && (rt = !1), et();
              const nt = Module,
                st = {},
                ot = 4,
                _t = 5 * ot,
                at = 2 * ot,
                ut = 2 * ot + 2 * at,
                lt = { row: 0, column: 0 },
                it = /[\w-.]*/g,
                dt = 1,
                ct = 2,
                mt = /^_?tree_sitter_\w+/;
              var ft, pt, ht, gt, wt;
              class ParserImpl {
                static init() {
                  (ht = nt._ts_init()), (ft = N(ht, "i32")), (pt = N(ht + ot, "i32"));
                }
                initialize() {
                  nt._ts_parser_new_wasm(), (this[0] = N(ht, "i32")), (this[1] = N(ht + ot, "i32"));
                }
                delete() {
                  nt._ts_parser_delete(this[0]), nt._free(this[1]), (this[0] = 0), (this[1] = 0);
                }
                setLanguage(e) {
                  let t;
                  if (e) {
                    if (e.constructor !== Language) throw new Error("Argument must be a Language");
                    {
                      t = e[0];
                      const r = nt._ts_language_version(t);
                      if (r < pt || ft < r) throw new Error(`Incompatible language version ${r}. ` + `Compatibility range ${pt} through ${ft}.`);
                    }
                  } else (t = 0), (e = null);
                  return (this.language = e), nt._ts_parser_set_language(this[0], t), this;
                }
                getLanguage() {
                  return this.language;
                }
                parse(e, t, r) {
                  if ("string" == typeof e) gt = (t, r, n) => e.slice(t, n);
                  else {
                    if ("function" != typeof e) throw new Error("Argument must be a string or a function");
                    gt = e;
                  }
                  this.logCallback ? ((wt = this.logCallback), nt._ts_parser_enable_logger_wasm(this[0], 1)) : ((wt = null), nt._ts_parser_enable_logger_wasm(this[0], 0));
                  let n = 0,
                    s = 0;
                  if (r && r.includedRanges) {
                    n = r.includedRanges.length;
                    let e = (s = nt._calloc(n, ut));
                    for (let t = 0; t < n; t++) Pt(e, r.includedRanges[t]), (e += ut);
                  }
                  const o = nt._ts_parser_parse_wasm(this[0], this[1], t ? t[0] : 0, s, n);
                  if (!o) throw ((gt = null), (wt = null), new Error("Parsing failed"));
                  const _ = new Tree(st, o, this.language, gt);
                  return (gt = null), (wt = null), _;
                }
                reset() {
                  nt._ts_parser_reset(this[0]);
                }
                setTimeoutMicros(e) {
                  nt._ts_parser_set_timeout_micros(this[0], e);
                }
                getTimeoutMicros() {
                  return nt._ts_parser_timeout_micros(this[0]);
                }
                setLogger(e) {
                  if (e) {
                    if ("function" != typeof e) throw new Error("Logger callback must be a function");
                  } else e = null;
                  return (this.logCallback = e), this;
                }
                getLogger() {
                  return this.logCallback;
                }
              }
              class Tree {
                constructor(e, t, r, n) {
                  bt(e), (this[0] = t), (this.language = r), (this.textCallback = n);
                }
                copy() {
                  const e = nt._ts_tree_copy(this[0]);
                  return new Tree(st, e, this.language, this.textCallback);
                }
                delete() {
                  nt._ts_tree_delete(this[0]), (this[0] = 0);
                }
                edit(e) {
                  !(function (e) {
                    let t = ht;
                    At(t, e.startPosition), At((t += at), e.oldEndPosition), At((t += at), e.newEndPosition), A((t += at), e.startIndex, "i32"), A((t += ot), e.oldEndIndex, "i32"), A((t += ot), e.newEndIndex, "i32"), (t += ot);
                  })(e),
                    nt._ts_tree_edit_wasm(this[0]);
                }
                get rootNode() {
                  return nt._ts_tree_root_node_wasm(this[0]), It(this);
                }
                getLanguage() {
                  return this.language;
                }
                walk() {
                  return this.rootNode.walk();
                }
                getChangedRanges(e) {
                  if (e.constructor !== Tree) throw new TypeError("Argument must be a Tree");
                  nt._ts_tree_get_changed_ranges_wasm(this[0], e[0]);
                  const t = N(ht, "i32"),
                    r = N(ht + ot, "i32"),
                    n = new Array(t);
                  if (t > 0) {
                    let e = r;
                    for (let r = 0; r < t; r++) (n[r] = kt(e)), (e += ut);
                    nt._free(r);
                  }
                  return n;
                }
              }
              class Node {
                constructor(e, t) {
                  bt(e), (this.tree = t);
                }
                get typeId() {
                  return Et(this), nt._ts_node_symbol_wasm(this.tree[0]);
                }
                get type() {
                  return this.tree.language.types[this.typeId] || "ERROR";
                }
                get endPosition() {
                  return Et(this), nt._ts_node_end_point_wasm(this.tree[0]), Nt(ht);
                }
                get endIndex() {
                  return Et(this), nt._ts_node_end_index_wasm(this.tree[0]);
                }
                get text() {
                  return yt(this.tree, this.startIndex, this.endIndex);
                }
                isNamed() {
                  return Et(this), 1 === nt._ts_node_is_named_wasm(this.tree[0]);
                }
                hasError() {
                  return Et(this), 1 === nt._ts_node_has_error_wasm(this.tree[0]);
                }
                hasChanges() {
                  return Et(this), 1 === nt._ts_node_has_changes_wasm(this.tree[0]);
                }
                isMissing() {
                  return Et(this), 1 === nt._ts_node_is_missing_wasm(this.tree[0]);
                }
                equals(e) {
                  return this.id === e.id;
                }
                child(e) {
                  return Et(this), nt._ts_node_child_wasm(this.tree[0], e), It(this.tree);
                }
                namedChild(e) {
                  return Et(this), nt._ts_node_named_child_wasm(this.tree[0], e), It(this.tree);
                }
                childForFieldId(e) {
                  return Et(this), nt._ts_node_child_by_field_id_wasm(this.tree[0], e), It(this.tree);
                }
                childForFieldName(e) {
                  const t = this.tree.language.fields.indexOf(e);
                  if (-1 !== t) return this.childForFieldId(t);
                }
                get childCount() {
                  return Et(this), nt._ts_node_child_count_wasm(this.tree[0]);
                }
                get namedChildCount() {
                  return Et(this), nt._ts_node_named_child_count_wasm(this.tree[0]);
                }
                get firstChild() {
                  return this.child(0);
                }
                get firstNamedChild() {
                  return this.namedChild(0);
                }
                get lastChild() {
                  return this.child(this.childCount - 1);
                }
                get lastNamedChild() {
                  return this.namedChild(this.namedChildCount - 1);
                }
                get children() {
                  if (!this._children) {
                    Et(this), nt._ts_node_children_wasm(this.tree[0]);
                    const e = N(ht, "i32"),
                      t = N(ht + ot, "i32");
                    if (((this._children = new Array(e)), e > 0)) {
                      let r = t;
                      for (let t = 0; t < e; t++) (this._children[t] = It(this.tree, r)), (r += _t);
                      nt._free(t);
                    }
                  }
                  return this._children;
                }
                get namedChildren() {
                  if (!this._namedChildren) {
                    Et(this), nt._ts_node_named_children_wasm(this.tree[0]);
                    const e = N(ht, "i32"),
                      t = N(ht + ot, "i32");
                    if (((this._namedChildren = new Array(e)), e > 0)) {
                      let r = t;
                      for (let t = 0; t < e; t++) (this._namedChildren[t] = It(this.tree, r)), (r += _t);
                      nt._free(t);
                    }
                  }
                  return this._namedChildren;
                }
                descendantsOfType(e, t, r) {
                  Array.isArray(e) || (e = [e]), t || (t = lt), r || (r = lt);
                  const n = [],
                    s = this.tree.language.types;
                  for (let t = 0, r = s.length; t < r; t++) e.includes(s[t]) && n.push(t);
                  const o = nt._malloc(ot * n.length);
                  for (let e = 0, t = n.length; e < t; e++) A(o + e * ot, n[e], "i32");
                  Et(this), nt._ts_node_descendants_of_type_wasm(this.tree[0], o, n.length, t.row, t.column, r.row, r.column);
                  const _ = N(ht, "i32"),
                    a = N(ht + ot, "i32"),
                    u = new Array(_);
                  if (_ > 0) {
                    let e = a;
                    for (let t = 0; t < _; t++) (u[t] = It(this.tree, e)), (e += _t);
                  }
                  return nt._free(a), nt._free(o), u;
                }
                get nextSibling() {
                  return Et(this), nt._ts_node_next_sibling_wasm(this.tree[0]), It(this.tree);
                }
                get previousSibling() {
                  return Et(this), nt._ts_node_prev_sibling_wasm(this.tree[0]), It(this.tree);
                }
                get nextNamedSibling() {
                  return Et(this), nt._ts_node_next_named_sibling_wasm(this.tree[0]), It(this.tree);
                }
                get previousNamedSibling() {
                  return Et(this), nt._ts_node_prev_named_sibling_wasm(this.tree[0]), It(this.tree);
                }
                get parent() {
                  return Et(this), nt._ts_node_parent_wasm(this.tree[0]), It(this.tree);
                }
                descendantForIndex(e, t = e) {
                  if ("number" != typeof e || "number" != typeof t) throw new Error("Arguments must be numbers");
                  Et(this);
                  let r = ht + _t;
                  return A(r, e, "i32"), A(r + ot, t, "i32"), nt._ts_node_descendant_for_index_wasm(this.tree[0]), It(this.tree);
                }
                namedDescendantForIndex(e, t = e) {
                  if ("number" != typeof e || "number" != typeof t) throw new Error("Arguments must be numbers");
                  Et(this);
                  let r = ht + _t;
                  return A(r, e, "i32"), A(r + ot, t, "i32"), nt._ts_node_named_descendant_for_index_wasm(this.tree[0]), It(this.tree);
                }
                descendantForPosition(e, t = e) {
                  if (!vt(e) || !vt(t)) throw new Error("Arguments must be {row, column} objects");
                  Et(this);
                  let r = ht + _t;
                  return At(r, e), At(r + at, t), nt._ts_node_descendant_for_position_wasm(this.tree[0]), It(this.tree);
                }
                namedDescendantForPosition(e, t = e) {
                  if (!vt(e) || !vt(t)) throw new Error("Arguments must be {row, column} objects");
                  Et(this);
                  let r = ht + _t;
                  return At(r, e), At(r + at, t), nt._ts_node_named_descendant_for_position_wasm(this.tree[0]), It(this.tree);
                }
                walk() {
                  return Et(this), nt._ts_tree_cursor_new_wasm(this.tree[0]), new TreeCursor(st, this.tree);
                }
                toString() {
                  Et(this);
                  const e = nt._ts_node_to_string_wasm(this.tree[0]),
                    t = (function (e) {
                      for (var t = ""; ;) {
                        var r = T[e++ >> 0];
                        if (!r) return t;
                        t += String.fromCharCode(r);
                      }
                    })(e);
                  return nt._free(e), t;
                }
              }
              class TreeCursor {
                constructor(e, t) {
                  bt(e), (this.tree = t), xt(this);
                }
                delete() {
                  St(this), nt._ts_tree_cursor_delete_wasm(this.tree[0]), (this[0] = this[1] = this[2] = 0);
                }
                reset(e) {
                  Et(e), St(this, ht + _t), nt._ts_tree_cursor_reset_wasm(this.tree[0]), xt(this);
                }
                get nodeType() {
                  return this.tree.language.types[this.nodeTypeId] || "ERROR";
                }
                get nodeTypeId() {
                  return St(this), nt._ts_tree_cursor_current_node_type_id_wasm(this.tree[0]);
                }
                get nodeId() {
                  return St(this), nt._ts_tree_cursor_current_node_id_wasm(this.tree[0]);
                }
                get nodeIsNamed() {
                  return St(this), 1 === nt._ts_tree_cursor_current_node_is_named_wasm(this.tree[0]);
                }
                get nodeIsMissing() {
                  return St(this), 1 === nt._ts_tree_cursor_current_node_is_missing_wasm(this.tree[0]);
                }
                get nodeText() {
                  St(this);
                  const e = nt._ts_tree_cursor_start_index_wasm(this.tree[0]),
                    t = nt._ts_tree_cursor_end_index_wasm(this.tree[0]);
                  return yt(this.tree, e, t);
                }
                get startPosition() {
                  return St(this), nt._ts_tree_cursor_start_position_wasm(this.tree[0]), Nt(ht);
                }
                get endPosition() {
                  return St(this), nt._ts_tree_cursor_end_position_wasm(this.tree[0]), Nt(ht);
                }
                get startIndex() {
                  return St(this), nt._ts_tree_cursor_start_index_wasm(this.tree[0]);
                }
                get endIndex() {
                  return St(this), nt._ts_tree_cursor_end_index_wasm(this.tree[0]);
                }
                currentNode() {
                  return St(this), nt._ts_tree_cursor_current_node_wasm(this.tree[0]), It(this.tree);
                }
                currentFieldId() {
                  return St(this), nt._ts_tree_cursor_current_field_id_wasm(this.tree[0]);
                }
                currentFieldName() {
                  return this.tree.language.fields[this.currentFieldId()];
                }
                gotoFirstChild() {
                  St(this);
                  const e = nt._ts_tree_cursor_goto_first_child_wasm(this.tree[0]);
                  return xt(this), 1 === e;
                }
                gotoNextSibling() {
                  St(this);
                  const e = nt._ts_tree_cursor_goto_next_sibling_wasm(this.tree[0]);
                  return xt(this), 1 === e;
                }
                gotoParent() {
                  St(this);
                  const e = nt._ts_tree_cursor_goto_parent_wasm(this.tree[0]);
                  return xt(this), 1 === e;
                }
              }
              class Language {
                constructor(e, t) {
                  bt(e), (this[0] = t), (this.types = new Array(nt._ts_language_symbol_count(this[0])));
                  for (let e = 0, t = this.types.length; e < t; e++) nt._ts_language_symbol_type(this[0], e) < 2 && (this.types[e] = j(nt._ts_language_symbol_name(this[0], e)));
                  this.fields = new Array(nt._ts_language_field_count(this[0]) + 1);
                  for (let e = 0, t = this.fields.length; e < t; e++) {
                    const t = nt._ts_language_field_name_for_id(this[0], e);
                    this.fields[e] = 0 !== t ? j(t) : null;
                  }
                }
                get version() {
                  return nt._ts_language_version(this[0]);
                }
                get fieldCount() {
                  return this.fields.length - 1;
                }
                fieldIdForName(e) {
                  const t = this.fields.indexOf(e);
                  return -1 !== t ? t : null;
                }
                fieldNameForId(e) {
                  return this.fields[e] || null;
                }
                idForNodeType(e, t) {
                  const r = U(e),
                    n = nt._malloc(r + 1);
                  D(e, n, r + 1);
                  const s = nt._ts_language_symbol_for_name(this[0], n, r, t);
                  return nt._free(n), s || null;
                }
                get nodeTypeCount() {
                  return nt._ts_language_symbol_count(this[0]);
                }
                nodeTypeForId(e) {
                  const t = nt._ts_language_symbol_name(this[0], e);
                  return t ? j(t) : null;
                }
                nodeTypeIsNamed(e) {
                  return !!nt._ts_language_type_is_named_wasm(this[0], e);
                }
                nodeTypeIsVisible(e) {
                  return !!nt._ts_language_type_is_visible_wasm(this[0], e);
                }
                query(e) {
                  const t = U(e),
                    r = nt._malloc(t + 1);
                  D(e, r, t + 1);
                  const n = nt._ts_query_new(this[0], r, t, ht, ht + ot);
                  if (!n) {
                    const t = N(ht + ot, "i32"),
                      n = j(r, N(ht, "i32")).length,
                      s = e.substr(n, 100).split("\n")[0];
                    let o,
                      _ = s.match(it)[0];
                    switch (t) {
                      case 2:
                        o = new RangeError(`Bad node name '${_}'`);
                        break;
                      case 3:
                        o = new RangeError(`Bad field name '${_}'`);
                        break;
                      case 4:
                        o = new RangeError(`Bad capture name @${_}`);
                        break;
                      case 5:
                        (o = new TypeError(`Bad pattern structure at offset ${n}: '${s}'...`)), (_ = "");
                        break;
                      default:
                        (o = new SyntaxError(`Bad syntax at offset ${n}: '${s}'...`)), (_ = "");
                    }
                    throw ((o.index = n), (o.length = _.length), nt._free(r), o);
                  }
                  const s = nt._ts_query_string_count(n),
                    o = nt._ts_query_capture_count(n),
                    _ = nt._ts_query_pattern_count(n),
                    a = new Array(o),
                    u = new Array(s);
                  for (let e = 0; e < o; e++) {
                    const t = nt._ts_query_capture_name_for_id(n, e, ht),
                      r = N(ht, "i32");
                    a[e] = j(t, r);
                  }
                  for (let e = 0; e < s; e++) {
                    const t = nt._ts_query_string_value_for_id(n, e, ht),
                      r = N(ht, "i32");
                    u[e] = j(t, r);
                  }
                  const l = new Array(_),
                    i = new Array(_),
                    d = new Array(_),
                    c = new Array(_),
                    m = new Array(_);
                  for (let e = 0; e < _; e++) {
                    const t = nt._ts_query_predicates_for_pattern(n, e, ht),
                      r = N(ht, "i32");
                    (c[e] = []), (m[e] = []);
                    const s = [];
                    let o = t;
                    for (let t = 0; t < r; t++) {
                      const t = N(o, "i32"),
                        r = N((o += ot), "i32");
                      if (((o += ot), t === dt)) s.push({ type: "capture", name: a[r] });
                      else if (t === ct) s.push({ type: "string", value: u[r] });
                      else if (s.length > 0) {
                        if ("string" !== s[0].type) throw new Error("Predicates must begin with a literal value");
                        const t = s[0].value;
                        let r = !0;
                        switch (t) {
                          case "not-eq?":
                            r = !1;
                          case "eq?":
                            if (3 !== s.length) throw new Error(`Wrong number of arguments to \`#eq?\` predicate. Expected 2, got ${s.length - 1}`);
                            if ("capture" !== s[1].type) throw new Error(`First argument of \`#eq?\` predicate must be a capture. Got "${s[1].value}"`);
                            if ("capture" === s[2].type) {
                              const t = s[1].name,
                                n = s[2].name;
                              m[e].push(function (e) {
                                let s, o;
                                for (const r of e) r.name === t && (s = r.node), r.name === n && (o = r.node);
                                return void 0 === s || void 0 === o || (s.text === o.text) === r;
                              });
                            } else {
                              const t = s[1].name,
                                n = s[2].value;
                              m[e].push(function (e) {
                                for (const s of e) if (s.name === t) return (s.node.text === n) === r;
                                return !0;
                              });
                            }
                            break;
                          case "not-match?":
                            r = !1;
                          case "match?":
                            if (3 !== s.length) throw new Error(`Wrong number of arguments to \`#match?\` predicate. Expected 2, got ${s.length - 1}.`);
                            if ("capture" !== s[1].type) throw new Error(`First argument of \`#match?\` predicate must be a capture. Got "${s[1].value}".`);
                            if ("string" !== s[2].type) throw new Error(`Second argument of \`#match?\` predicate must be a string. Got @${s[2].value}.`);
                            const n = s[1].name,
                              o = new RegExp(s[2].value);
                            m[e].push(function (e) {
                              for (const t of e) if (t.name === n) return o.test(t.node.text) === r;
                              return !0;
                            });
                            break;
                          case "set!":
                            if (s.length < 2 || s.length > 3) throw new Error(`Wrong number of arguments to \`#set!\` predicate. Expected 1 or 2. Got ${s.length - 1}.`);
                            if (s.some((e) => "string" !== e.type)) throw new Error('Arguments to `#set!` predicate must be a strings.".');
                            l[e] || (l[e] = {}), (l[e][s[1].value] = s[2] ? s[2].value : null);
                            break;
                          case "is?":
                          case "is-not?":
                            if (s.length < 2 || s.length > 3) throw new Error(`Wrong number of arguments to \`#${t}\` predicate. Expected 1 or 2. Got ${s.length - 1}.`);
                            if (s.some((e) => "string" !== e.type)) throw new Error(`Arguments to \`#${t}\` predicate must be a strings.".`);
                            const _ = "is?" === t ? i : d;
                            _[e] || (_[e] = {}), (_[e][s[1].value] = s[2] ? s[2].value : null);
                            break;
                          default:
                            c[e].push({ operator: t, operands: s.slice(1) });
                        }
                        s.length = 0;
                      }
                    }
                    Object.freeze(l[e]), Object.freeze(i[e]), Object.freeze(d[e]);
                  }
                  return nt._free(r), new Query(st, n, a, m, c, Object.freeze(l), Object.freeze(i), Object.freeze(d));
                }
                static load(e) {
                  let t;
                  if (e instanceof Uint8Array) t = Promise.resolve(e);
                  else {
                    const r = e;
                    if ("undefined" != typeof process && process.versions && process.versions.node) {
                      const e = require("fs");
                      t = Promise.resolve(e.readFileSync(r));
                    } else
                      t = fetch(r).then((e) =>
                        e.arrayBuffer().then((t) => {
                          if (e.ok) return new Uint8Array(t);
                          {
                            const r = new TextDecoder("utf-8").decode(t);
                            throw new Error(`Language.load failed with status ${e.status}.\n\n${r}`);
                          }
                        })
                      );
                  }
                  const r = "function" == typeof loadSideModule ? loadSideModule : Pe;
                  return t
                    .then((e) => r(e, { loadAsync: !0 }))
                    .then((e) => {
                      const t = Object.keys(e),
                        r = t.find((e) => mt.test(e) && !e.includes("external_scanner_"));
                      r || console.log(`Couldn't find language function in WASM file. Symbols:\n${JSON.stringify(t, null, 2)}`);
                      const n = e[r]();
                      return new Language(st, n);
                    });
                }
              }
              class Query {
                constructor(e, t, r, n, s, o, _, a) {
                  bt(e), (this[0] = t), (this.captureNames = r), (this.textPredicates = n), (this.predicates = s), (this.setProperties = o), (this.assertedProperties = _), (this.refutedProperties = a), (this.exceededMatchLimit = !1);
                }
                delete() {
                  nt._ts_query_delete(this[0]), (this[0] = 0);
                }
                matches(e, t, r, n) {
                  t || (t = lt), r || (r = lt), n || (n = {});
                  let s = n.matchLimit;
                  if (void 0 === s) s = 0;
                  else if ("number" != typeof s) throw new Error("Arguments must be numbers");
                  Et(e), nt._ts_query_matches_wasm(this[0], e.tree[0], t.row, t.column, r.row, r.column, s);
                  const o = N(ht, "i32"),
                    _ = N(ht + ot, "i32"),
                    a = N(ht + 2 * ot, "i32"),
                    u = new Array(o);
                  this.exceededMatchLimit = !!a;
                  let l = 0,
                    i = _;
                  for (let t = 0; t < o; t++) {
                    const r = N(i, "i32"),
                      n = N((i += ot), "i32");
                    i += ot;
                    const s = new Array(n);
                    if (((i = Mt(this, e.tree, i, s)), this.textPredicates[r].every((e) => e(s)))) {
                      u[l++] = { pattern: r, captures: s };
                      const e = this.setProperties[r];
                      e && (u[t].setProperties = e);
                      const n = this.assertedProperties[r];
                      n && (u[t].assertedProperties = n);
                      const o = this.refutedProperties[r];
                      o && (u[t].refutedProperties = o);
                    }
                  }
                  return (u.length = l), nt._free(_), u;
                }
                captures(e, t, r, n) {
                  t || (t = lt), r || (r = lt), n || (n = {});
                  let s = n.matchLimit;
                  if (void 0 === s) s = 0;
                  else if ("number" != typeof s) throw new Error("Arguments must be numbers");
                  Et(e), nt._ts_query_captures_wasm(this[0], e.tree[0], t.row, t.column, r.row, r.column, s);
                  const o = N(ht, "i32"),
                    _ = N(ht + ot, "i32"),
                    a = N(ht + 2 * ot, "i32"),
                    u = [];
                  this.exceededMatchLimit = !!a;
                  const l = [];
                  let i = _;
                  for (let t = 0; t < o; t++) {
                    const t = N(i, "i32"),
                      r = N((i += ot), "i32"),
                      n = N((i += ot), "i32");
                    if (((i += ot), (l.length = r), (i = Mt(this, e.tree, i, l)), this.textPredicates[t].every((e) => e(l)))) {
                      const e = l[n],
                        r = this.setProperties[t];
                      r && (e.setProperties = r);
                      const s = this.assertedProperties[t];
                      s && (e.assertedProperties = s);
                      const o = this.refutedProperties[t];
                      o && (e.refutedProperties = o), u.push(e);
                    }
                  }
                  return nt._free(_), u;
                }
                predicatesForPattern(e) {
                  return this.predicates[e];
                }
                didExceedMatchLimit() {
                  return this.exceededMatchLimit;
                }
              }
              function yt(e, t, r) {
                const n = r - t;
                let s = e.textCallback(t, null, r);
                for (t += s.length; t < r;) {
                  const n = e.textCallback(t, null, r);
                  if (!(n && n.length > 0)) break;
                  (t += n.length), (s += n);
                }
                return t > r && (s = s.slice(0, n)), s;
              }
              function Mt(e, t, r, n) {
                for (let s = 0, o = n.length; s < o; s++) {
                  const o = N(r, "i32"),
                    _ = It(t, (r += ot));
                  (r += _t), (n[s] = { name: e.captureNames[o], node: _ });
                }
                return r;
              }
              function bt(e) {
                if (e !== st) throw new Error("Illegal constructor");
              }
              function vt(e) {
                return e && "number" == typeof e.row && "number" == typeof e.column;
              }
              function Et(e) {
                let t = ht;
                A(t, e.id, "i32"), A((t += ot), e.startIndex, "i32"), A((t += ot), e.startPosition.row, "i32"), A((t += ot), e.startPosition.column, "i32"), A((t += ot), e[0], "i32");
              }
              function It(e, t = ht) {
                const r = N(t, "i32");
                if (0 === r) return null;
                const n = N((t += ot), "i32"),
                  s = N((t += ot), "i32"),
                  o = N((t += ot), "i32"),
                  _ = N((t += ot), "i32"),
                  a = new Node(st, e);
                return (a.id = r), (a.startIndex = n), (a.startPosition = { row: s, column: o }), (a[0] = _), a;
              }
              function St(e, t = ht) {
                A(t + 0 * ot, e[0], "i32"), A(t + 1 * ot, e[1], "i32"), A(t + 2 * ot, e[2], "i32");
              }
              function xt(e) {
                (e[0] = N(ht + 0 * ot, "i32")), (e[1] = N(ht + 1 * ot, "i32")), (e[2] = N(ht + 2 * ot, "i32"));
              }
              function At(e, t) {
                A(e, t.row, "i32"), A(e + ot, t.column, "i32");
              }
              function Nt(e) {
                return { row: N(e, "i32"), column: N(e + ot, "i32") };
              }
              function Pt(e, t) {
                At(e, t.startPosition), At((e += at), t.endPosition), A((e += at), t.startIndex, "i32"), A((e += ot), t.endIndex, "i32"), (e += ot);
              }
              function kt(e) {
                const t = {};
                return (t.startPosition = Nt(e)), (e += at), (t.endPosition = Nt(e)), (e += at), (t.startIndex = N(e, "i32")), (e += ot), (t.endIndex = N(e, "i32")), t;
              }
              for (const e of Object.getOwnPropertyNames(ParserImpl.prototype)) Object.defineProperty(Parser.prototype, e, { value: ParserImpl.prototype[e], enumerable: !1, writable: !1 });
              (Parser.Language = Language),
                (Module.onRuntimeInitialized = () => {
                  ParserImpl.init(), e();
                });
            })))
        );
      }
    }
    return Parser;
  })();
"object" == typeof exports && (module.exports = TreeSitter);
export const Sitter = TreeSitter;