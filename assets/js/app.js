/*!
 * FlagWaver - App
 * @author krikienoid / https://github.com/krikienoid
 */
! function () {
  "use strict";
  if (window.FLAGWAVER_APP_LOADED) throw new Error("Warning: app.js has already been executed.");
  window.FLAGWAVER_APP_LOADED = !0;
  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    t = function (e) {
      return e && e.Math == Math && e
    },
    n = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || function () {
      return this
    }() || Function("return this")(),
    r = {},
    i = function (e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    },
    a = !i((function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function () {
          return 7
        }
      })[1]
    })),
    o = !i((function () {
      var e = function () {}.bind();
      return "function" != typeof e || e.hasOwnProperty("prototype")
    })),
    s = o,
    l = Function.prototype.call,
    c = s ? l.bind(l) : function () {
      return l.apply(l, arguments)
    },
    u = {},
    h = {}.propertyIsEnumerable,
    d = Object.getOwnPropertyDescriptor,
    p = d && !h.call({
      1: 2
    }, 1);
  u.f = p ? function (e) {
    var t = d(this, e);
    return !!t && t.enumerable
  } : h;
  var f, m, g = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    },
    v = o,
    _ = Function.prototype,
    y = _.call,
    b = v && _.bind.bind(y, y),
    x = v ? b : function (e) {
      return function () {
        return y.apply(e, arguments)
      }
    },
    S = x,
    M = S({}.toString),
    w = S("".slice),
    T = function (e) {
      return w(M(e), 8, -1)
    },
    E = i,
    A = T,
    C = Object,
    L = x("".split),
    R = E((function () {
      return !C("z").propertyIsEnumerable(0)
    })) ? function (e) {
      return "String" == A(e) ? L(e, "") : C(e)
    } : C,
    P = function (e) {
      return null == e
    },
    D = P,
    N = TypeError,
    O = function (e) {
      if (D(e)) throw N("Can't call method on " + e);
      return e
    },
    I = R,
    U = O,
    k = function (e) {
      return I(U(e))
    },
    z = "object" == typeof document && document.all,
    F = {
      all: z,
      IS_HTMLDDA: void 0 === z && void 0 !== z
    },
    B = F.all,
    H = F.IS_HTMLDDA ? function (e) {
      return "function" == typeof e || e === B
    } : function (e) {
      return "function" == typeof e
    },
    G = H,
    V = F.all,
    W = F.IS_HTMLDDA ? function (e) {
      return "object" == typeof e ? null !== e : G(e) || e === V
    } : function (e) {
      return "object" == typeof e ? null !== e : G(e)
    },
    j = n,
    q = H,
    X = function (e) {
      return q(e) ? e : void 0
    },
    Y = function (e, t) {
      return arguments.length < 2 ? X(j[e]) : j[e] && j[e][t]
    },
    Z = x({}.isPrototypeOf),
    K = "undefined" != typeof navigator && String(navigator.userAgent) || "",
    $ = n,
    J = K,
    Q = $.process,
    ee = $.Deno,
    te = Q && Q.versions || ee && ee.version,
    ne = te && te.v8;
  ne && (m = (f = ne.split("."))[0] > 0 && f[0] < 4 ? 1 : +(f[0] + f[1])), !m && J && (!(f = J.match(/Edge\/(\d+)/)) || f[1] >= 74) && (f = J.match(/Chrome\/(\d+)/)) && (m = +f[1]);
  var re = m,
    ie = re,
    ae = i,
    oe = !!Object.getOwnPropertySymbols && !ae((function () {
      var e = Symbol();
      return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && ie && ie < 41
    })),
    se = oe && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    le = Y,
    ce = H,
    ue = Z,
    he = Object,
    de = se ? function (e) {
      return "symbol" == typeof e
    } : function (e) {
      var t = le("Symbol");
      return ce(t) && ue(t.prototype, he(e))
    },
    pe = String,
    fe = function (e) {
      try {
        return pe(e)
      } catch (e) {
        return "Object"
      }
    },
    me = H,
    ge = fe,
    ve = TypeError,
    _e = function (e) {
      if (me(e)) return e;
      throw ve(ge(e) + " is not a function")
    },
    ye = _e,
    be = P,
    xe = function (e, t) {
      var n = e[t];
      return be(n) ? void 0 : ye(n)
    },
    Se = c,
    Me = H,
    we = W,
    Te = TypeError,
    Ee = {},
    Ae = {
      get exports() {
        return Ee
      },
      set exports(e) {
        Ee = e
      }
    },
    Ce = n,
    Le = Object.defineProperty,
    Re = function (e, t) {
      try {
        Le(Ce, e, {
          value: t,
          configurable: !0,
          writable: !0
        })
      } catch (n) {
        Ce[e] = t
      }
      return t
    },
    Pe = Re,
    De = "__core-js_shared__",
    Ne = n[De] || Pe(De, {}),
    Oe = Ne;
  (Ae.exports = function (e, t) {
    return Oe[e] || (Oe[e] = void 0 !== t ? t : {})
  })("versions", []).push({
    version: "3.27.2",
    mode: "global",
    copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",
    source: "https://github.com/zloirock/core-js"
  });
  var Ie = O,
    Ue = Object,
    ke = function (e) {
      return Ue(Ie(e))
    },
    ze = ke,
    Fe = x({}.hasOwnProperty),
    Be = Object.hasOwn || function (e, t) {
      return Fe(ze(e), t)
    },
    He = x,
    Ge = 0,
    Ve = Math.random(),
    We = He(1..toString),
    je = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + We(++Ge + Ve, 36)
    },
    qe = Ee,
    Xe = Be,
    Ye = je,
    Ze = oe,
    Ke = se,
    $e = n.Symbol,
    Je = qe("wks"),
    Qe = Ke ? $e.for || $e : $e && $e.withoutSetter || Ye,
    et = function (e) {
      return Xe(Je, e) || (Je[e] = Ze && Xe($e, e) ? $e[e] : Qe("Symbol." + e)), Je[e]
    },
    tt = c,
    nt = W,
    rt = de,
    it = xe,
    at = function (e, t) {
      var n, r;
      if ("string" === t && Me(n = e.toString) && !we(r = Se(n, e))) return r;
      if (Me(n = e.valueOf) && !we(r = Se(n, e))) return r;
      if ("string" !== t && Me(n = e.toString) && !we(r = Se(n, e))) return r;
      throw Te("Can't convert object to primitive value")
    },
    ot = TypeError,
    st = et("toPrimitive"),
    lt = function (e, t) {
      if (!nt(e) || rt(e)) return e;
      var n, r = it(e, st);
      if (r) {
        if (void 0 === t && (t = "default"), n = tt(r, e, t), !nt(n) || rt(n)) return n;
        throw ot("Can't convert object to primitive value")
      }
      return void 0 === t && (t = "number"), at(e, t)
    },
    ct = lt,
    ut = de,
    ht = function (e) {
      var t = ct(e, "string");
      return ut(t) ? t : t + ""
    },
    dt = W,
    pt = n.document,
    ft = dt(pt) && dt(pt.createElement),
    mt = function (e) {
      return ft ? pt.createElement(e) : {}
    },
    gt = mt,
    vt = !a && !i((function () {
      return 7 != Object.defineProperty(gt("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    })),
    _t = a,
    yt = c,
    bt = u,
    xt = g,
    St = k,
    Mt = ht,
    wt = Be,
    Tt = vt,
    Et = Object.getOwnPropertyDescriptor;
  r.f = _t ? Et : function (e, t) {
    if (e = St(e), t = Mt(t), Tt) try {
      return Et(e, t)
    } catch (e) {}
    if (wt(e, t)) return xt(!yt(bt.f, e, t), e[t])
  };
  var At = {},
    Ct = a && i((function () {
      return 42 != Object.defineProperty((function () {}), "prototype", {
        value: 42,
        writable: !1
      }).prototype
    })),
    Lt = W,
    Rt = String,
    Pt = TypeError,
    Dt = function (e) {
      if (Lt(e)) return e;
      throw Pt(Rt(e) + " is not an object")
    },
    Nt = a,
    Ot = vt,
    It = Ct,
    Ut = Dt,
    kt = ht,
    zt = TypeError,
    Ft = Object.defineProperty,
    Bt = Object.getOwnPropertyDescriptor,
    Ht = "enumerable",
    Gt = "configurable",
    Vt = "writable";
  At.f = Nt ? It ? function (e, t, n) {
    if (Ut(e), t = kt(t), Ut(n), "function" == typeof e && "prototype" === t && "value" in n && Vt in n && !n[Vt]) {
      var r = Bt(e, t);
      r && r[Vt] && (e[t] = n.value, n = {
        configurable: Gt in n ? n[Gt] : r[Gt],
        enumerable: Ht in n ? n[Ht] : r[Ht],
        writable: !1
      })
    }
    return Ft(e, t, n)
  } : Ft : function (e, t, n) {
    if (Ut(e), t = kt(t), Ut(n), Ot) try {
      return Ft(e, t, n)
    } catch (e) {}
    if ("get" in n || "set" in n) throw zt("Accessors not supported");
    return "value" in n && (e[t] = n.value), e
  };
  var Wt = At,
    jt = g,
    qt = a ? function (e, t, n) {
      return Wt.f(e, t, jt(1, n))
    } : function (e, t, n) {
      return e[t] = n, e
    },
    Xt = {},
    Yt = {
      get exports() {
        return Xt
      },
      set exports(e) {
        Xt = e
      }
    },
    Zt = a,
    Kt = Be,
    $t = Function.prototype,
    Jt = Zt && Object.getOwnPropertyDescriptor,
    Qt = Kt($t, "name"),
    en = {
      EXISTS: Qt,
      PROPER: Qt && "something" === function () {}.name,
      CONFIGURABLE: Qt && (!Zt || Zt && Jt($t, "name").configurable)
    },
    tn = H,
    nn = Ne,
    rn = x(Function.toString);
  tn(nn.inspectSource) || (nn.inspectSource = function (e) {
    return rn(e)
  });
  var an, on, sn, ln = nn.inspectSource,
    cn = H,
    un = n.WeakMap,
    hn = cn(un) && /native code/.test(String(un)),
    dn = je,
    pn = Ee("keys"),
    fn = function (e) {
      return pn[e] || (pn[e] = dn(e))
    },
    mn = {},
    gn = hn,
    vn = n,
    _n = W,
    yn = qt,
    bn = Be,
    xn = Ne,
    Sn = fn,
    Mn = mn,
    wn = "Object already initialized",
    Tn = vn.TypeError,
    En = vn.WeakMap;
  if (gn || xn.state) {
    var An = xn.state || (xn.state = new En);
    An.get = An.get, An.has = An.has, An.set = An.set, an = function (e, t) {
      if (An.has(e)) throw Tn(wn);
      return t.facade = e, An.set(e, t), t
    }, on = function (e) {
      return An.get(e) || {}
    }, sn = function (e) {
      return An.has(e)
    }
  } else {
    var Cn = Sn("state");
    Mn[Cn] = !0, an = function (e, t) {
      if (bn(e, Cn)) throw Tn(wn);
      return t.facade = e, yn(e, Cn, t), t
    }, on = function (e) {
      return bn(e, Cn) ? e[Cn] : {}
    }, sn = function (e) {
      return bn(e, Cn)
    }
  }
  var Ln = {
      set: an,
      get: on,
      has: sn,
      enforce: function (e) {
        return sn(e) ? on(e) : an(e, {})
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!_n(t) || (n = on(t)).type !== e) throw Tn("Incompatible receiver, " + e + " required");
          return n
        }
      }
    },
    Rn = x,
    Pn = i,
    Dn = H,
    Nn = Be,
    On = a,
    In = en.CONFIGURABLE,
    Un = ln,
    kn = Ln.enforce,
    zn = Ln.get,
    Fn = String,
    Bn = Object.defineProperty,
    Hn = Rn("".slice),
    Gn = Rn("".replace),
    Vn = Rn([].join),
    Wn = On && !Pn((function () {
      return 8 !== Bn((function () {}), "length", {
        value: 8
      }).length
    })),
    jn = String(String).split("String"),
    qn = Yt.exports = function (e, t, n) {
      "Symbol(" === Hn(Fn(t), 0, 7) && (t = "[" + Gn(Fn(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!Nn(e, "name") || In && e.name !== t) && (On ? Bn(e, "name", {
        value: t,
        configurable: !0
      }) : e.name = t), Wn && n && Nn(n, "arity") && e.length !== n.arity && Bn(e, "length", {
        value: n.arity
      });
      try {
        n && Nn(n, "constructor") && n.constructor ? On && Bn(e, "prototype", {
          writable: !1
        }) : e.prototype && (e.prototype = void 0)
      } catch (e) {}
      var r = kn(e);
      return Nn(r, "source") || (r.source = Vn(jn, "string" == typeof t ? t : "")), e
    };
  Function.prototype.toString = qn((function () {
    return Dn(this) && zn(this).source || Un(this)
  }), "toString");
  var Xn = H,
    Yn = At,
    Zn = Xt,
    Kn = Re,
    $n = function (e, t, n, r) {
      r || (r = {});
      var i = r.enumerable,
        a = void 0 !== r.name ? r.name : t;
      if (Xn(n) && Zn(n, a, r), r.global) i ? e[t] = n : Kn(t, n);
      else {
        try {
          r.unsafe ? e[t] && (i = !0) : delete e[t]
        } catch (e) {}
        i ? e[t] = n : Yn.f(e, t, {
          value: n,
          enumerable: !1,
          configurable: !r.nonConfigurable,
          writable: !r.nonWritable
        })
      }
      return e
    },
    Jn = {},
    Qn = Math.ceil,
    er = Math.floor,
    tr = Math.trunc || function (e) {
      var t = +e;
      return (t > 0 ? er : Qn)(t)
    },
    nr = tr,
    rr = function (e) {
      var t = +e;
      return t != t || 0 === t ? 0 : nr(t)
    },
    ir = rr,
    ar = Math.max,
    or = Math.min,
    sr = function (e, t) {
      var n = ir(e);
      return n < 0 ? ar(n + t, 0) : or(n, t)
    },
    lr = rr,
    cr = Math.min,
    ur = function (e) {
      return e > 0 ? cr(lr(e), 9007199254740991) : 0
    },
    hr = ur,
    dr = function (e) {
      return hr(e.length)
    },
    pr = k,
    fr = sr,
    mr = dr,
    gr = function (e) {
      return function (t, n, r) {
        var i, a = pr(t),
          o = mr(a),
          s = fr(r, o);
        if (e && n != n) {
          for (; o > s;)
            if ((i = a[s++]) != i) return !0
        } else
          for (; o > s; s++)
            if ((e || s in a) && a[s] === n) return e || s || 0;
        return !e && -1
      }
    },
    vr = {
      includes: gr(!0),
      indexOf: gr(!1)
    },
    _r = Be,
    yr = k,
    br = vr.indexOf,
    xr = mn,
    Sr = x([].push),
    Mr = function (e, t) {
      var n, r = yr(e),
        i = 0,
        a = [];
      for (n in r) !_r(xr, n) && _r(r, n) && Sr(a, n);
      for (; t.length > i;) _r(r, n = t[i++]) && (~br(a, n) || Sr(a, n));
      return a
    },
    wr = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    Tr = Mr,
    Er = wr.concat("length", "prototype");
  Jn.f = Object.getOwnPropertyNames || function (e) {
    return Tr(e, Er)
  };
  var Ar = {};
  Ar.f = Object.getOwnPropertySymbols;
  var Cr = Y,
    Lr = Jn,
    Rr = Ar,
    Pr = Dt,
    Dr = x([].concat),
    Nr = Cr("Reflect", "ownKeys") || function (e) {
      var t = Lr.f(Pr(e)),
        n = Rr.f;
      return n ? Dr(t, n(e)) : t
    },
    Or = Be,
    Ir = Nr,
    Ur = r,
    kr = At,
    zr = function (e, t, n) {
      for (var r = Ir(t), i = kr.f, a = Ur.f, o = 0; o < r.length; o++) {
        var s = r[o];
        Or(e, s) || n && Or(n, s) || i(e, s, a(t, s))
      }
    },
    Fr = i,
    Br = H,
    Hr = /#|\.prototype\./,
    Gr = function (e, t) {
      var n = Wr[Vr(e)];
      return n == qr || n != jr && (Br(t) ? Fr(t) : !!t)
    },
    Vr = Gr.normalize = function (e) {
      return String(e).replace(Hr, ".").toLowerCase()
    },
    Wr = Gr.data = {},
    jr = Gr.NATIVE = "N",
    qr = Gr.POLYFILL = "P",
    Xr = Gr,
    Yr = n,
    Zr = r.f,
    Kr = qt,
    $r = $n,
    Jr = Re,
    Qr = zr,
    ei = Xr,
    ti = function (e, t) {
      var n, r, i, a, o, s = e.target,
        l = e.global,
        c = e.stat;
      if (n = l ? Yr : c ? Yr[s] || Jr(s, {}) : (Yr[s] || {}).prototype)
        for (r in t) {
          if (a = t[r], i = e.dontCallGetSet ? (o = Zr(n, r)) && o.value : n[r], !ei(l ? r : s + (c ? "." : "#") + r, e.forced) && void 0 !== i) {
            if (typeof a == typeof i) continue;
            Qr(a, i)
          }(e.sham || i && i.sham) && Kr(a, "sham", !0), $r(n, r, a, e)
        }
    },
    ni = T,
    ri = Array.isArray || function (e) {
      return "Array" == ni(e)
    },
    ii = a,
    ai = ri,
    oi = TypeError,
    si = Object.getOwnPropertyDescriptor,
    li = ii && ! function () {
      if (void 0 !== this) return !0;
      try {
        Object.defineProperty([], "length", {
          writable: !1
        }).length = 1
      } catch (e) {
        return e instanceof TypeError
      }
    }() ? function (e, t) {
      if (ai(e) && !si(e, "length").writable) throw oi("Cannot set read only .length");
      return e.length = t
    } : function (e, t) {
      return e.length = t
    },
    ci = TypeError,
    ui = function (e) {
      if (e > 9007199254740991) throw ci("Maximum allowed index exceeded");
      return e
    },
    hi = ke,
    di = dr,
    pi = li,
    fi = ui;
  ti({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: i((function () {
      return 4294967297 !== [].push.call({
        length: 4294967296
      }, 1)
    })) || ! function () {
      try {
        Object.defineProperty([], "length", {
          writable: !1
        }).push()
      } catch (e) {
        return e instanceof TypeError
      }
    }()
  }, {
    push: function (e) {
      var t = hi(this),
        n = di(t),
        r = arguments.length;
      fi(n + r);
      for (var i = 0; i < r; i++) t[n] = arguments[i], n++;
      return pi(t, n), n
    }
  });
  var mi = mt("span").classList,
    gi = mi && mi.constructor && mi.constructor.prototype,
    vi = gi === Object.prototype ? void 0 : gi,
    _i = {},
    yi = Mr,
    bi = wr,
    xi = Object.keys || function (e) {
      return yi(e, bi)
    },
    Si = a,
    Mi = Ct,
    wi = At,
    Ti = Dt,
    Ei = k,
    Ai = xi;
  _i.f = Si && !Mi ? Object.defineProperties : function (e, t) {
    Ti(e);
    for (var n, r = Ei(t), i = Ai(t), a = i.length, o = 0; a > o;) wi.f(e, n = i[o++], r[n]);
    return e
  };
  var Ci, Li = Y("document", "documentElement"),
    Ri = Dt,
    Pi = _i,
    Di = wr,
    Ni = mn,
    Oi = Li,
    Ii = mt,
    Ui = "prototype",
    ki = "script",
    zi = fn("IE_PROTO"),
    Fi = function () {},
    Bi = function (e) {
      return "<" + ki + ">" + e + "</" + ki + ">"
    },
    Hi = function (e) {
      e.write(Bi("")), e.close();
      var t = e.parentWindow.Object;
      return e = null, t
    },
    Gi = function () {
      try {
        Ci = new ActiveXObject("htmlfile")
      } catch (e) {}
      var e, t, n;
      Gi = "undefined" != typeof document ? document.domain && Ci ? Hi(Ci) : (t = Ii("iframe"), n = "java" + ki + ":", t.style.display = "none", Oi.appendChild(t), t.src = String(n), (e = t.contentWindow.document).open(), e.write(Bi("document.F=Object")), e.close(), e.F) : Hi(Ci);
      for (var r = Di.length; r--;) delete Gi[Ui][Di[r]];
      return Gi()
    };
  Ni[zi] = !0;
  var Vi = Object.create || function (e, t) {
      var n;
      return null !== e ? (Fi[Ui] = Ri(e), n = new Fi, Fi[Ui] = null, n[zi] = e) : n = Gi(), void 0 === t ? n : Pi.f(n, t)
    },
    Wi = et,
    ji = Vi,
    qi = At.f,
    Xi = Wi("unscopables"),
    Yi = Array.prototype;
  null == Yi[Xi] && qi(Yi, Xi, {
    configurable: !0,
    value: ji(null)
  });
  var Zi, Ki, $i, Ji = function (e) {
      Yi[Xi][e] = !0
    },
    Qi = {},
    ea = !i((function () {
      function e() {}
      return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    })),
    ta = Be,
    na = H,
    ra = ke,
    ia = ea,
    aa = fn("IE_PROTO"),
    oa = Object,
    sa = oa.prototype,
    la = ia ? oa.getPrototypeOf : function (e) {
      var t = ra(e);
      if (ta(t, aa)) return t[aa];
      var n = t.constructor;
      return na(n) && t instanceof n ? n.prototype : t instanceof oa ? sa : null
    },
    ca = i,
    ua = H,
    ha = W,
    da = la,
    pa = $n,
    fa = et("iterator"),
    ma = !1;
  [].keys && ("next" in ($i = [].keys()) ? (Ki = da(da($i))) !== Object.prototype && (Zi = Ki) : ma = !0);
  var ga = !ha(Zi) || ca((function () {
    var e = {};
    return Zi[fa].call(e) !== e
  }));
  ga && (Zi = {}), ua(Zi[fa]) || pa(Zi, fa, (function () {
    return this
  }));
  var va = {
      IteratorPrototype: Zi,
      BUGGY_SAFARI_ITERATORS: ma
    },
    _a = At.f,
    ya = Be,
    ba = et("toStringTag"),
    xa = function (e, t, n) {
      e && !n && (e = e.prototype), e && !ya(e, ba) && _a(e, ba, {
        configurable: !0,
        value: t
      })
    },
    Sa = va.IteratorPrototype,
    Ma = Vi,
    wa = g,
    Ta = xa,
    Ea = Qi,
    Aa = function () {
      return this
    },
    Ca = function (e, t, n, r) {
      var i = t + " Iterator";
      return e.prototype = Ma(Sa, {
        next: wa(+!r, n)
      }), Ta(e, i, !1), Ea[i] = Aa, e
    },
    La = H,
    Ra = String,
    Pa = TypeError,
    Da = x,
    Na = Dt,
    Oa = function (e) {
      if ("object" == typeof e || La(e)) return e;
      throw Pa("Can't set " + Ra(e) + " as a prototype")
    },
    Ia = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var e, t = !1,
        n = {};
      try {
        (e = Da(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []), t = n instanceof Array
      } catch (e) {}
      return function (n, r) {
        return Na(n), Oa(r), t ? e(n, r) : n.__proto__ = r, n
      }
    }() : void 0),
    Ua = ti,
    ka = c,
    za = H,
    Fa = Ca,
    Ba = la,
    Ha = Ia,
    Ga = xa,
    Va = qt,
    Wa = $n,
    ja = Qi,
    qa = en.PROPER,
    Xa = en.CONFIGURABLE,
    Ya = va.IteratorPrototype,
    Za = va.BUGGY_SAFARI_ITERATORS,
    Ka = et("iterator"),
    $a = "keys",
    Ja = "values",
    Qa = "entries",
    eo = function () {
      return this
    },
    to = function (e, t, n, r, i, a, o) {
      Fa(n, t, r);
      var s, l, c, u = function (e) {
          if (e === i && m) return m;
          if (!Za && e in p) return p[e];
          switch (e) {
            case $a:
            case Ja:
            case Qa:
              return function () {
                return new n(this, e)
              }
          }
          return function () {
            return new n(this)
          }
        },
        h = t + " Iterator",
        d = !1,
        p = e.prototype,
        f = p[Ka] || p["@@iterator"] || i && p[i],
        m = !Za && f || u(i),
        g = "Array" == t && p.entries || f;
      if (g && (s = Ba(g.call(new e))) !== Object.prototype && s.next && (Ba(s) !== Ya && (Ha ? Ha(s, Ya) : za(s[Ka]) || Wa(s, Ka, eo)), Ga(s, h, !0)), qa && i == Ja && f && f.name !== Ja && (Xa ? Va(p, "name", Ja) : (d = !0, m = function () {
          return ka(f, this)
        })), i)
        if (l = {
            values: u(Ja),
            keys: a ? m : u($a),
            entries: u(Qa)
          }, o)
          for (c in l)(Za || d || !(c in p)) && Wa(p, c, l[c]);
        else Ua({
          target: t,
          proto: !0,
          forced: Za || d
        }, l);
      return p[Ka] !== m && Wa(p, Ka, m, {
        name: i
      }), ja[t] = m, l
    },
    no = function (e, t) {
      return {
        value: e,
        done: t
      }
    },
    ro = k,
    io = Ji,
    ao = Qi,
    oo = Ln,
    so = At.f,
    lo = to,
    co = no,
    uo = a,
    ho = "Array Iterator",
    po = oo.set,
    fo = oo.getterFor(ho),
    mo = lo(Array, "Array", (function (e, t) {
      po(this, {
        type: ho,
        target: ro(e),
        index: 0,
        kind: t
      })
    }), (function () {
      var e = fo(this),
        t = e.target,
        n = e.kind,
        r = e.index++;
      return !t || r >= t.length ? (e.target = void 0, co(void 0, !0)) : co("keys" == n ? r : "values" == n ? t[r] : [r, t[r]], !1)
    }), "values"),
    go = ao.Arguments = ao.Array;
  if (io("keys"), io("values"), io("entries"), uo && "values" !== go.name) try {
    so(go, "name", {
      value: "values"
    })
  } catch (e) {}
  var vo = n,
    _o = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    },
    yo = vi,
    bo = mo,
    xo = qt,
    So = et,
    Mo = So("iterator"),
    wo = So("toStringTag"),
    To = bo.values,
    Eo = function (e, t) {
      if (e) {
        if (e[Mo] !== To) try {
          xo(e, Mo, To)
        } catch (t) {
          e[Mo] = To
        }
        if (e[wo] || xo(e, wo, t), _o[t])
          for (var n in bo)
            if (e[n] !== bo[n]) try {
              xo(e, n, bo[n])
            } catch (t) {
              e[n] = bo[n]
            }
      }
    };
  for (var Ao in _o) Eo(vo[Ao] && vo[Ao].prototype, Ao);
  Eo(yo, "DOMTokenList");
  var Co = o,
    Lo = Function.prototype,
    Ro = Lo.apply,
    Po = Lo.call,
    Do = "object" == typeof Reflect && Reflect.apply || (Co ? Po.bind(Ro) : function () {
      return Po.apply(Ro, arguments)
    }),
    No = {};
  No[et("toStringTag")] = "z";
  var Oo, Io, Uo = "[object z]" === String(No),
    ko = H,
    zo = T,
    Fo = et("toStringTag"),
    Bo = Object,
    Ho = "Arguments" == zo(function () {
      return arguments
    }()),
    Go = Uo ? zo : function (e) {
      var t, n, r;
      return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
        try {
          return e[t]
        } catch (e) {}
      }(t = Bo(e), Fo)) ? n : Ho ? zo(t) : "Object" == (r = zo(t)) && ko(t.callee) ? "Arguments" : r
    },
    Vo = Go,
    Wo = String,
    jo = function (e) {
      if ("Symbol" === Vo(e)) throw TypeError("Cannot convert a Symbol value to a string");
      return Wo(e)
    },
    qo = Dt,
    Xo = i,
    Yo = n.RegExp,
    Zo = Xo((function () {
      var e = Yo("a", "y");
      return e.lastIndex = 2, null != e.exec("abcd")
    })),
    Ko = Zo || Xo((function () {
      return !Yo("a", "y").sticky
    })),
    $o = {
      BROKEN_CARET: Zo || Xo((function () {
        var e = Yo("^r", "gy");
        return e.lastIndex = 2, null != e.exec("str")
      })),
      MISSED_STICKY: Ko,
      UNSUPPORTED_Y: Zo
    },
    Jo = i,
    Qo = n.RegExp,
    es = Jo((function () {
      var e = Qo(".", "s");
      return !(e.dotAll && e.exec("\n") && "s" === e.flags)
    })),
    ts = i,
    ns = n.RegExp,
    rs = ts((function () {
      var e = ns("(?<a>b)", "g");
      return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
    })),
    is = c,
    as = x,
    os = jo,
    ss = function () {
      var e = qo(this),
        t = "";
      return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
    },
    ls = $o,
    cs = Vi,
    us = Ln.get,
    hs = es,
    ds = rs,
    ps = Ee("native-string-replace", String.prototype.replace),
    fs = RegExp.prototype.exec,
    ms = fs,
    gs = as("".charAt),
    vs = as("".indexOf),
    _s = as("".replace),
    ys = as("".slice),
    bs = (Io = /b*/g, is(fs, Oo = /a/, "a"), is(fs, Io, "a"), 0 !== Oo.lastIndex || 0 !== Io.lastIndex),
    xs = ls.BROKEN_CARET,
    Ss = void 0 !== /()??/.exec("")[1];
  (bs || Ss || xs || hs || ds) && (ms = function (e) {
    var t, n, r, i, a, o, s, l = this,
      c = us(l),
      u = os(e),
      h = c.raw;
    if (h) return h.lastIndex = l.lastIndex, t = is(ms, h, u), l.lastIndex = h.lastIndex, t;
    var d = c.groups,
      p = xs && l.sticky,
      f = is(ss, l),
      m = l.source,
      g = 0,
      v = u;
    if (p && (f = _s(f, "y", ""), -1 === vs(f, "g") && (f += "g"), v = ys(u, l.lastIndex), l.lastIndex > 0 && (!l.multiline || l.multiline && "\n" !== gs(u, l.lastIndex - 1)) && (m = "(?: " + m + ")", v = " " + v, g++), n = new RegExp("^(?:" + m + ")", f)), Ss && (n = new RegExp("^" + m + "$(?!\\s)", f)), bs && (r = l.lastIndex), i = is(fs, p ? n : l, v), p ? i ? (i.input = ys(i.input, g), i[0] = ys(i[0], g), i.index = l.lastIndex, l.lastIndex += i[0].length) : l.lastIndex = 0 : bs && i && (l.lastIndex = l.global ? i.index + i[0].length : r), Ss && i && i.length > 1 && is(ps, i[0], n, (function () {
        for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (i[a] = void 0)
      })), i && d)
      for (i.groups = o = cs(null), a = 0; a < d.length; a++) o[(s = d[a])[0]] = i[s[1]];
    return i
  });
  var Ms = ms;
  ti({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== Ms
  }, {
    exec: Ms
  });
  var ws = T,
    Ts = x,
    Es = function (e) {
      if ("Function" === ws(e)) return Ts(e)
    },
    As = Es,
    Cs = $n,
    Ls = Ms,
    Rs = i,
    Ps = et,
    Ds = qt,
    Ns = Ps("species"),
    Os = RegExp.prototype,
    Is = x,
    Us = rr,
    ks = jo,
    zs = O,
    Fs = Is("".charAt),
    Bs = Is("".charCodeAt),
    Hs = Is("".slice),
    Gs = function (e) {
      return function (t, n) {
        var r, i, a = ks(zs(t)),
          o = Us(n),
          s = a.length;
        return o < 0 || o >= s ? e ? "" : void 0 : (r = Bs(a, o)) < 55296 || r > 56319 || o + 1 === s || (i = Bs(a, o + 1)) < 56320 || i > 57343 ? e ? Fs(a, o) : r : e ? Hs(a, o, o + 2) : i - 56320 + (r - 55296 << 10) + 65536
      }
    },
    Vs = {
      codeAt: Gs(!1),
      charAt: Gs(!0)
    },
    Ws = Vs.charAt,
    js = x,
    qs = ke,
    Xs = Math.floor,
    Ys = js("".charAt),
    Zs = js("".replace),
    Ks = js("".slice),
    $s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    Js = /\$([$&'`]|\d{1,2})/g,
    Qs = c,
    el = Dt,
    tl = H,
    nl = T,
    rl = Ms,
    il = TypeError,
    al = Do,
    ol = c,
    sl = x,
    ll = function (e, t, n, r) {
      var i = Ps(e),
        a = !Rs((function () {
          var t = {};
          return t[i] = function () {
            return 7
          }, 7 != "" [e](t)
        })),
        o = a && !Rs((function () {
          var t = !1,
            n = /a/;
          return "split" === e && ((n = {}).constructor = {}, n.constructor[Ns] = function () {
            return n
          }, n.flags = "", n[i] = /./ [i]), n.exec = function () {
            return t = !0, null
          }, n[i](""), !t
        }));
      if (!a || !o || n) {
        var s = As(/./ [i]),
          l = t(i, "" [e], (function (e, t, n, r, i) {
            var o = As(e),
              l = t.exec;
            return l === Ls || l === Os.exec ? a && !i ? {
              done: !0,
              value: s(t, n, r)
            } : {
              done: !0,
              value: o(n, t, r)
            } : {
              done: !1
            }
          }));
        Cs(String.prototype, e, l[0]), Cs(Os, i, l[1])
      }
      r && Ds(Os[i], "sham", !0)
    },
    cl = i,
    ul = Dt,
    hl = H,
    dl = P,
    pl = rr,
    fl = ur,
    ml = jo,
    gl = O,
    vl = function (e, t, n) {
      return t + (n ? Ws(e, t).length : 1)
    },
    _l = xe,
    yl = function (e, t, n, r, i, a) {
      var o = n + e.length,
        s = r.length,
        l = Js;
      return void 0 !== i && (i = qs(i), l = $s), Zs(a, l, (function (a, l) {
        var c;
        switch (Ys(l, 0)) {
          case "$":
            return "$";
          case "&":
            return e;
          case "`":
            return Ks(t, 0, n);
          case "'":
            return Ks(t, o);
          case "<":
            c = i[Ks(l, 1, -1)];
            break;
          default:
            var u = +l;
            if (0 === u) return a;
            if (u > s) {
              var h = Xs(u / 10);
              return 0 === h ? a : h <= s ? void 0 === r[h - 1] ? Ys(l, 1) : r[h - 1] + Ys(l, 1) : a
            }
            c = r[u - 1]
        }
        return void 0 === c ? "" : c
      }))
    },
    bl = function (e, t) {
      var n = e.exec;
      if (tl(n)) {
        var r = Qs(n, e, t);
        return null !== r && el(r), r
      }
      if ("RegExp" === nl(e)) return Qs(rl, e, t);
      throw il("RegExp#exec called on incompatible receiver")
    },
    xl = et("replace"),
    Sl = Math.max,
    Ml = Math.min,
    wl = sl([].concat),
    Tl = sl([].push),
    El = sl("".indexOf),
    Al = sl("".slice),
    Cl = "$0" === "a".replace(/./, "$0"),
    Ll = !!/./ [xl] && "" === /./ [xl]("a", "$0");
  ll("replace", (function (e, t, n) {
    var r = Ll ? "$" : "$0";
    return [function (e, n) {
      var r = gl(this),
        i = dl(e) ? void 0 : _l(e, xl);
      return i ? ol(i, e, r, n) : ol(t, ml(r), e, n)
    }, function (e, i) {
      var a = ul(this),
        o = ml(e);
      if ("string" == typeof i && -1 === El(i, r) && -1 === El(i, "$<")) {
        var s = n(t, a, o, i);
        if (s.done) return s.value
      }
      var l = hl(i);
      l || (i = ml(i));
      var c = a.global;
      if (c) {
        var u = a.unicode;
        a.lastIndex = 0
      }
      for (var h = [];;) {
        var d = bl(a, o);
        if (null === d) break;
        if (Tl(h, d), !c) break;
        "" === ml(d[0]) && (a.lastIndex = vl(o, fl(a.lastIndex), u))
      }
      for (var p, f = "", m = 0, g = 0; g < h.length; g++) {
        for (var v = ml((d = h[g])[0]), _ = Sl(Ml(pl(d.index), o.length), 0), y = [], b = 1; b < d.length; b++) Tl(y, void 0 === (p = d[b]) ? p : String(p));
        var x = d.groups;
        if (l) {
          var S = wl([v], y, _, o);
          void 0 !== x && Tl(S, x);
          var M = ml(al(i, void 0, S))
        } else M = yl(v, o, _, y, x, i);
        _ >= m && (f += Al(o, m, _) + M, m = _ + v.length)
      }
      return f + Al(o, m)
    }]
  }), !!cl((function () {
    var e = /./;
    return e.exec = function () {
      var e = [];
      return e.groups = {
        a: "7"
      }, e
    }, "7" !== "".replace(e, "$<a>")
  })) || !Cl || Ll);
  var Rl, Pl, Dl, Nl, Ol, Il, Ul, kl, zl = {},
    Fl = [],
    Bl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

  function Hl(e, t) {
    for (var n in t) e[n] = t[n];
    return e
  }

  function Gl(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
  }

  function Vl(e, t, n) {
    var r, i, a, o = {};
    for (a in t) "key" == a ? r = t[a] : "ref" == a ? i = t[a] : o[a] = t[a];
    if (arguments.length > 2 && (o.children = arguments.length > 3 ? Rl.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
      for (a in e.defaultProps) void 0 === o[a] && (o[a] = e.defaultProps[a]);
    return Wl(e, o, r, i, null)
  }

  function Wl(e, t, n, r, i) {
    var a = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == i ? ++Dl : i
    };
    return null == i && null != Pl.vnode && Pl.vnode(a), a
  }

  function jl(e) {
    return e.children
  }

  function ql(e, t, n) {
    "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || Bl.test(t) ? n : n + "px"
  }

  function Xl(e, t, n, r, i) {
    var a;
    e: if ("style" === t)
      if ("string" == typeof n) e.style.cssText = n;
      else {
        if ("string" == typeof r && (e.style.cssText = r = ""), r)
          for (t in r) n && t in n || ql(e.style, t, "");
        if (n)
          for (t in n) r && n[t] === r[t] || ql(e.style, t, n[t])
      }
    else if ("o" === t[0] && "n" === t[1]) a = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? r || e.addEventListener(t, a ? Zl : Yl, a) : e.removeEventListener(t, a ? Zl : Yl, a);
    else if ("dangerouslySetInnerHTML" !== t) {
      if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
        e[t] = null == n ? "" : n;
        break e
      } catch (e) {}
      "function" == typeof n || (null == n || !1 === n && -1 == t.indexOf("-") ? e.removeAttribute(t) : e.setAttribute(t, n))
    }
  }

  function Yl(e) {
    Nl = !0;
    try {
      return this.l[e.type + !1](Pl.event ? Pl.event(e) : e)
    } finally {
      Nl = !1
    }
  }

  function Zl(e) {
    Nl = !0;
    try {
      return this.l[e.type + !0](Pl.event ? Pl.event(e) : e)
    } finally {
      Nl = !1
    }
  }

  function Kl(e, t) {
    this.props = e, this.context = t
  }

  function $l(e, t) {
    if (null == t) return e.__ ? $l(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? $l(e) : null
  }

  function Jl(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break
        } return Jl(e)
    }
  }

  function Ql(e) {
    Nl ? setTimeout(e) : Ul(e)
  }

  function ec(e) {
    (!e.__d && (e.__d = !0) && Ol.push(e) && !tc.__r++ || Il !== Pl.debounceRendering) && ((Il = Pl.debounceRendering) || Ql)(tc)
  }

  function tc() {
    var e, t, n, r, i, a, o, s;
    for (Ol.sort((function (e, t) {
        return e.__v.__b - t.__v.__b
      })); e = Ol.shift();) e.__d && (t = Ol.length, r = void 0, i = void 0, o = (a = (n = e).__v).__e, (s = n.__P) && (r = [], (i = Hl({}, a)).__v = a.__v + 1, sc(s, a, i, n.__n, void 0 !== s.ownerSVGElement, null != a.__h ? [o] : null, r, null == o ? $l(a) : o, a.__h), lc(r, a), a.__e != o && Jl(a)), Ol.length > t && Ol.sort((function (e, t) {
      return e.__v.__b - t.__v.__b
    })));
    tc.__r = 0
  }

  function nc(e, t, n, r, i, a, o, s, l, c) {
    var u, h, d, p, f, m, g, v = r && r.__k || Fl,
      _ = v.length;
    for (n.__k = [], u = 0; u < t.length; u++)
      if (null != (p = n.__k[u] = null == (p = t[u]) || "boolean" == typeof p ? null : "string" == typeof p || "number" == typeof p || "bigint" == typeof p ? Wl(null, p, null, null, p) : Array.isArray(p) ? Wl(jl, {
          children: p
        }, null, null, null) : p.__b > 0 ? Wl(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p)) {
        if (p.__ = n, p.__b = n.__b + 1, null === (d = v[u]) || d && p.key == d.key && p.type === d.type) v[u] = void 0;
        else
          for (h = 0; h < _; h++) {
            if ((d = v[h]) && p.key == d.key && p.type === d.type) {
              v[h] = void 0;
              break
            }
            d = null
          }
        sc(e, p, d = d || zl, i, a, o, s, l, c), f = p.__e, (h = p.ref) && d.ref != h && (g || (g = []), d.ref && g.push(d.ref, null, p), g.push(h, p.__c || f, p)), null != f ? (null == m && (m = f), "function" == typeof p.type && p.__k === d.__k ? p.__d = l = rc(p, l, e) : l = ac(e, p, d, v, f, l), "function" == typeof n.type && (n.__d = l)) : l && d.__e == l && l.parentNode != e && (l = $l(d))
      } for (n.__e = m, u = _; u--;) null != v[u] && ("function" == typeof n.type && null != v[u].__e && v[u].__e == n.__d && (n.__d = oc(r).nextSibling), hc(v[u], v[u]));
    if (g)
      for (u = 0; u < g.length; u++) uc(g[u], g[++u], g[++u])
  }

  function rc(e, t, n) {
    for (var r, i = e.__k, a = 0; i && a < i.length; a++)(r = i[a]) && (r.__ = e, t = "function" == typeof r.type ? rc(r, t, n) : ac(n, r, r, i, r.__e, t));
    return t
  }

  function ic(e, t) {
    return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function (e) {
      ic(e, t)
    })) : t.push(e)), t
  }

  function ac(e, t, n, r, i, a) {
    var o, s, l;
    if (void 0 !== t.__d) o = t.__d, t.__d = void 0;
    else if (null == n || i != a || null == i.parentNode) e: if (null == a || a.parentNode !== e) e.appendChild(i), o = null;
      else {
        for (s = a, l = 0;
          (s = s.nextSibling) && l < r.length; l += 1)
          if (s == i) break e;
        e.insertBefore(i, a), o = a
      } return void 0 !== o ? o : i.nextSibling
  }

  function oc(e) {
    var t, n, r;
    if (null == e.type || "string" == typeof e.type) return e.__e;
    if (e.__k)
      for (t = e.__k.length - 1; t >= 0; t--)
        if ((n = e.__k[t]) && (r = oc(n))) return r;
    return null
  }

  function sc(e, t, n, r, i, a, o, s, l) {
    var c, u, h, d, p, f, m, g, v, _, y, b, x, S, M, w = t.type;
    if (void 0 !== t.constructor) return null;
    null != n.__h && (l = n.__h, s = t.__e = n.__e, t.__h = null, a = [s]), (c = Pl.__b) && c(t);
    try {
      e: if ("function" == typeof w) {
        if (g = t.props, v = (c = w.contextType) && r[c.__c], _ = c ? v ? v.props.value : c.__ : r, n.__c ? m = (u = t.__c = n.__c).__ = u.__E : ("prototype" in w && w.prototype.render ? t.__c = u = new w(g, _) : (t.__c = u = new Kl(g, _), u.constructor = w, u.render = dc), v && v.sub(u), u.props = g, u.state || (u.state = {}), u.context = _, u.__n = r, h = u.__d = !0, u.__h = [], u._sb = []), null == u.__s && (u.__s = u.state), null != w.getDerivedStateFromProps && (u.__s == u.state && (u.__s = Hl({}, u.__s)), Hl(u.__s, w.getDerivedStateFromProps(g, u.__s))), d = u.props, p = u.state, u.__v = t, h) null == w.getDerivedStateFromProps && null != u.componentWillMount && u.componentWillMount(), null != u.componentDidMount && u.__h.push(u.componentDidMount);
        else {
          if (null == w.getDerivedStateFromProps && g !== d && null != u.componentWillReceiveProps && u.componentWillReceiveProps(g, _), !u.__e && null != u.shouldComponentUpdate && !1 === u.shouldComponentUpdate(g, u.__s, _) || t.__v === n.__v) {
            for (t.__v !== n.__v && (u.props = g, u.state = u.__s, u.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function (e) {
                e && (e.__ = t)
              })), y = 0; y < u._sb.length; y++) u.__h.push(u._sb[y]);
            u._sb = [], u.__h.length && o.push(u);
            break e
          }
          null != u.componentWillUpdate && u.componentWillUpdate(g, u.__s, _), null != u.componentDidUpdate && u.__h.push((function () {
            u.componentDidUpdate(d, p, f)
          }))
        }
        if (u.context = _, u.props = g, u.__P = e, b = Pl.__r, x = 0, "prototype" in w && w.prototype.render) {
          for (u.state = u.__s, u.__d = !1, b && b(t), c = u.render(u.props, u.state, u.context), S = 0; S < u._sb.length; S++) u.__h.push(u._sb[S]);
          u._sb = []
        } else
          do {
            u.__d = !1, b && b(t), c = u.render(u.props, u.state, u.context), u.state = u.__s
          } while (u.__d && ++x < 25);
        u.state = u.__s, null != u.getChildContext && (r = Hl(Hl({}, r), u.getChildContext())), h || null == u.getSnapshotBeforeUpdate || (f = u.getSnapshotBeforeUpdate(d, p)), M = null != c && c.type === jl && null == c.key ? c.props.children : c, nc(e, Array.isArray(M) ? M : [M], t, n, r, i, a, o, s, l), u.base = t.__e, t.__h = null, u.__h.length && o.push(u), m && (u.__E = u.__ = null), u.__e = !1
      } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = cc(n.__e, t, n, r, i, a, o, l);
      (c = Pl.diffed) && c(t)
    }
    catch (e) {
      t.__v = null, (l || null != a) && (t.__e = s, t.__h = !!l, a[a.indexOf(s)] = null), Pl.__e(e, t, n)
    }
  }

  function lc(e, t) {
    Pl.__c && Pl.__c(t, e), e.some((function (t) {
      try {
        e = t.__h, t.__h = [], e.some((function (e) {
          e.call(t)
        }))
      } catch (e) {
        Pl.__e(e, t.__v)
      }
    }))
  }

  function cc(e, t, n, r, i, a, o, s) {
    var l, c, u, h = n.props,
      d = t.props,
      p = t.type,
      f = 0;
    if ("svg" === p && (i = !0), null != a)
      for (; f < a.length; f++)
        if ((l = a[f]) && "setAttribute" in l == !!p && (p ? l.localName === p : 3 === l.nodeType)) {
          e = l, a[f] = null;
          break
        } if (null == e) {
      if (null === p) return document.createTextNode(d);
      e = i ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, d.is && d), a = null, s = !1
    }
    if (null === p) h === d || s && e.data === d || (e.data = d);
    else {
      if (a = a && Rl.call(e.childNodes), c = (h = n.props || zl).dangerouslySetInnerHTML, u = d.dangerouslySetInnerHTML, !s) {
        if (null != a)
          for (h = {}, f = 0; f < e.attributes.length; f++) h[e.attributes[f].name] = e.attributes[f].value;
        (u || c) && (u && (c && u.__html == c.__html || u.__html === e.innerHTML) || (e.innerHTML = u && u.__html || ""))
      }
      if (function (e, t, n, r, i) {
          var a;
          for (a in n) "children" === a || "key" === a || a in t || Xl(e, a, null, n[a], r);
          for (a in t) i && "function" != typeof t[a] || "children" === a || "key" === a || "value" === a || "checked" === a || n[a] === t[a] || Xl(e, a, t[a], n[a], r)
        }(e, d, h, i, s), u) t.__k = [];
      else if (f = t.props.children, nc(e, Array.isArray(f) ? f : [f], t, n, r, i && "foreignObject" !== p, a, o, a ? a[0] : n.__k && $l(n, 0), s), null != a)
        for (f = a.length; f--;) null != a[f] && Gl(a[f]);
      s || ("value" in d && void 0 !== (f = d.value) && (f !== e.value || "progress" === p && !f || "option" === p && f !== h.value) && Xl(e, "value", f, h.value, !1), "checked" in d && void 0 !== (f = d.checked) && f !== e.checked && Xl(e, "checked", f, h.checked, !1))
    }
    return e
  }

  function uc(e, t, n) {
    try {
      "function" == typeof e ? e(t) : e.current = t
    } catch (e) {
      Pl.__e(e, n)
    }
  }

  function hc(e, t, n) {
    var r, i;
    if (Pl.unmount && Pl.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || uc(r, null, t)), null != (r = e.__c)) {
      if (r.componentWillUnmount) try {
        r.componentWillUnmount()
      } catch (e) {
        Pl.__e(e, t)
      }
      r.base = r.__P = null, e.__c = void 0
    }
    if (r = e.__k)
      for (i = 0; i < r.length; i++) r[i] && hc(r[i], t, n || "function" != typeof e.type);
    n || null == e.__e || Gl(e.__e), e.__ = e.__e = e.__d = void 0
  }

  function dc(e, t, n) {
    return this.constructor(e, n)
  }

  function pc(e, t, n) {
    var r, i, a;
    Pl.__ && Pl.__(e, t), i = (r = "function" == typeof n) ? null : n && n.__k || t.__k, a = [], sc(t, e = (!r && n || t).__k = Vl(jl, null, [e]), i || zl, zl, void 0 !== t.ownerSVGElement, !r && n ? [n] : i ? null : t.firstChild ? Rl.call(t.childNodes) : null, a, !r && n ? n : i ? i.__e : t.firstChild, r), lc(a, e)
  }

  function fc(e, t) {
    pc(e, t, fc)
  }

  function mc(e, t, n) {
    var r, i, a, o = Hl({}, e.props);
    for (a in t) "key" == a ? r = t[a] : "ref" == a ? i = t[a] : o[a] = t[a];
    return arguments.length > 2 && (o.children = arguments.length > 3 ? Rl.call(arguments, 2) : n), Wl(e.type, o, r || e.key, i || e.ref, null)
  }

  function gc(e, t) {
    var n = {
      __c: t = "__cC" + kl++,
      __: e,
      Consumer: function (e, t) {
        return e.children(t)
      },
      Provider: function (e) {
        var n, r;
        return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function () {
          return r
        }, this.shouldComponentUpdate = function (e) {
          this.props.value !== e.value && n.some((function (e) {
            e.__e = !0, ec(e)
          }))
        }, this.sub = function (e) {
          n.push(e);
          var t = e.componentWillUnmount;
          e.componentWillUnmount = function () {
            n.splice(n.indexOf(e), 1), t && t.call(e)
          }
        }), e.children
      }
    };
    return n.Provider.__ = n.Consumer.contextType = n
  }
  Rl = Fl.slice, Pl = {
    __e: function (e, t, n, r) {
      for (var i, a, o; t = t.__;)
        if ((i = t.__c) && !i.__) try {
          if ((a = i.constructor) && null != a.getDerivedStateFromError && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i
        } catch (t) {
          e = t
        }
      throw e
    }
  }, Dl = 0, Nl = !1, Kl.prototype.setState = function (e, t) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Hl({}, this.state), "function" == typeof e && (e = e(Hl({}, n), this.props)), e && Hl(n, e), null != e && this.__v && (t && this._sb.push(t), ec(this))
  }, Kl.prototype.forceUpdate = function (e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), ec(this))
  }, Kl.prototype.render = jl, Ol = [], Ul = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, tc.__r = 0, kl = 0;
  var vc, _c, yc, bc, xc = 0,
    Sc = [],
    Mc = [],
    wc = Pl.__b,
    Tc = Pl.__r,
    Ec = Pl.diffed,
    Ac = Pl.__c,
    Cc = Pl.unmount;

  function Lc(e, t) {
    Pl.__h && Pl.__h(_c, e, xc || t), xc = 0;
    var n = _c.__H || (_c.__H = {
      __: [],
      __h: []
    });
    return e >= n.__.length && n.__.push({
      __V: Mc
    }), n.__[e]
  }

  function Rc(e) {
    return xc = 1, Pc(Wc, e)
  }

  function Pc(e, t, n) {
    var r = Lc(vc++, 2);
    if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Wc(void 0, t), function (e) {
        var t = r.__N ? r.__N[0] : r.__[0],
          n = r.t(t, e);
        t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}))
      }], r.__c = _c, !_c.u)) {
      _c.u = !0;
      var i = _c.shouldComponentUpdate;
      _c.shouldComponentUpdate = function (e, t, n) {
        if (!r.__c.__H) return !0;
        var a = r.__c.__H.__.filter((function (e) {
          return e.__c
        }));
        if (a.every((function (e) {
            return !e.__N
          }))) return !i || i.call(this, e, t, n);
        var o = !1;
        return a.forEach((function (e) {
          if (e.__N) {
            var t = e.__[0];
            e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (o = !0)
          }
        })), !(!o && r.__c.props === e) && (!i || i.call(this, e, t, n))
      }
    }
    return r.__N || r.__
  }

  function Dc(e, t) {
    var n = Lc(vc++, 3);
    !Pl.__s && Vc(n.__H, t) && (n.__ = e, n.i = t, _c.__H.__h.push(n))
  }

  function Nc(e, t) {
    var n = Lc(vc++, 4);
    !Pl.__s && Vc(n.__H, t) && (n.__ = e, n.i = t, _c.__h.push(n))
  }

  function Oc(e) {
    return xc = 5, Ic((function () {
      return {
        current: e
      }
    }), [])
  }

  function Ic(e, t) {
    var n = Lc(vc++, 7);
    return Vc(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
  }

  function Uc(e, t) {
    return xc = 8, Ic((function () {
      return e
    }), t)
  }

  function kc(e) {
    var t = _c.context[e.__c],
      n = Lc(vc++, 9);
    return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(_c)), t.props.value) : e.__
  }

  function zc() {
    for (var e; e = Sc.shift();)
      if (e.__P && e.__H) try {
        e.__H.__h.forEach(Hc), e.__H.__h.forEach(Gc), e.__H.__h = []
      } catch (t) {
        e.__H.__h = [], Pl.__e(t, e.__v)
      }
  }
  Pl.__b = function (e) {
    _c = null, wc && wc(e)
  }, Pl.__r = function (e) {
    Tc && Tc(e), vc = 0;
    var t = (_c = e.__c).__H;
    t && (yc === _c ? (t.__h = [], _c.__h = [], t.__.forEach((function (e) {
      e.__N && (e.__ = e.__N), e.__V = Mc, e.__N = e.i = void 0
    }))) : (t.__h.forEach(Hc), t.__h.forEach(Gc), t.__h = [])), yc = _c
  }, Pl.diffed = function (e) {
    Ec && Ec(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (1 !== Sc.push(t) && bc === Pl.requestAnimationFrame || ((bc = Pl.requestAnimationFrame) || Bc)(zc)), t.__H.__.forEach((function (e) {
      e.i && (e.__H = e.i), e.__V !== Mc && (e.__ = e.__V), e.i = void 0, e.__V = Mc
    }))), yc = _c = null
  }, Pl.__c = function (e, t) {
    t.some((function (e) {
      try {
        e.__h.forEach(Hc), e.__h = e.__h.filter((function (e) {
          return !e.__ || Gc(e)
        }))
      } catch (n) {
        t.some((function (e) {
          e.__h && (e.__h = [])
        })), t = [], Pl.__e(n, e.__v)
      }
    })), Ac && Ac(e, t)
  }, Pl.unmount = function (e) {
    Cc && Cc(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach((function (e) {
      try {
        Hc(e)
      } catch (e) {
        t = e
      }
    })), n.__H = void 0, t && Pl.__e(t, n.__v))
  };
  var Fc = "function" == typeof requestAnimationFrame;

  function Bc(e) {
    var t, n = function () {
        clearTimeout(r), Fc && cancelAnimationFrame(t), setTimeout(e)
      },
      r = setTimeout(n, 100);
    Fc && (t = requestAnimationFrame(n))
  }

  function Hc(e) {
    var t = _c,
      n = e.__c;
    "function" == typeof n && (e.__c = void 0, n()), _c = t
  }

  function Gc(e) {
    var t = _c;
    e.__c = e.__(), _c = t
  }

  function Vc(e, t) {
    return !e || e.length !== t.length || t.some((function (t, n) {
      return t !== e[n]
    }))
  }

  function Wc(e, t) {
    return "function" == typeof t ? t(e) : t
  }

  function jc(e, t) {
    for (var n in t) e[n] = t[n];
    return e
  }

  function qc(e, t) {
    for (var n in e)
      if ("__source" !== n && !(n in t)) return !0;
    for (var r in t)
      if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1
  }

  function Xc(e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
  }

  function Yc(e) {
    this.props = e
  }

  function Zc(e, t) {
    function n(e) {
      var n = this.props.ref,
        r = n == e.ref;
      return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : qc(this.props, e)
    }

    function r(t) {
      return this.shouldComponentUpdate = n, Vl(e, t)
    }
    return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
  }(Yc.prototype = new Kl).isPureReactComponent = !0, Yc.prototype.shouldComponentUpdate = function (e, t) {
    return qc(this.props, e) || qc(this.state, t)
  };
  var Kc = Pl.__b;
  Pl.__b = function (e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Kc && Kc(e)
  };
  var $c = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var Jc = function (e, t) {
      return null == e ? null : ic(ic(e).map(t))
    },
    Qc = {
      map: Jc,
      forEach: Jc,
      count: function (e) {
        return e ? ic(e).length : 0
      },
      only: function (e) {
        var t = ic(e);
        if (1 !== t.length) throw "Children.only";
        return t[0]
      },
      toArray: ic
    },
    eu = Pl.__e;
  Pl.__e = function (e, t, n, r) {
    if (e.then)
      for (var i, a = t; a = a.__;)
        if ((i = a.__c) && i.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), i.__c(e, t);
    eu(e, t, n, r)
  };
  var tu = Pl.unmount;

  function nu(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach((function (e) {
      "function" == typeof e.__c && e.__c()
    })), e.__c.__H = null), null != (e = jc({}, e)).__c && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map((function (e) {
      return nu(e, t, n)
    }))), e
  }

  function ru(e, t, n) {
    return e && (e.__v = null, e.__k = e.__k && e.__k.map((function (e) {
      return ru(e, t, n)
    })), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e
  }

  function iu() {
    this.__u = 0, this.t = null, this.__b = null
  }

  function au(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e)
  }

  function ou() {
    this.u = null, this.o = null
  }
  Pl.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), tu && tu(e)
  }, (iu.prototype = new Kl).__c = function (e, t) {
    var n = t.__c,
      r = this;
    null == r.t && (r.t = []), r.t.push(n);
    var i = au(r.__v),
      a = !1,
      o = function () {
        a || (a = !0, n.__R = null, i ? i(s) : s())
      };
    n.__R = o;
    var s = function () {
        if (!--r.__u) {
          if (r.state.__a) {
            var e = r.state.__a;
            r.__v.__k[0] = ru(e, e.__c.__P, e.__c.__O)
          }
          var t;
          for (r.setState({
              __a: r.__b = null
            }); t = r.t.pop();) t.forceUpdate()
        }
      },
      l = !0 === t.__h;
    r.__u++ || l || r.setState({
      __a: r.__b = r.__v.__k[0]
    }), e.then(o, o)
  }, iu.prototype.componentWillUnmount = function () {
    this.t = []
  }, iu.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = nu(this.__b, n, r.__O = r.__P)
      }
      this.__b = null
    }
    var i = t.__a && Vl(jl, null, e.fallback);
    return i && (i.__h = null), [Vl(jl, null, t.__a ? null : e.children), i]
  };
  var su = function (e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
      for (n = e.u; n;) {
        for (; n.length > 3;) n.pop()();
        if (n[1] < n[0]) break;
        e.u = n = n[2]
      }
  };

  function lu(e) {
    return this.getChildContext = function () {
      return e.context
    }, e.children
  }

  function cu(e) {
    var t = this,
      n = e.i;
    t.componentWillUnmount = function () {
      pc(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
      nodeType: 1,
      parentNode: n,
      childNodes: [],
      appendChild: function (e) {
        this.childNodes.push(e), t.i.appendChild(e)
      },
      insertBefore: function (e, n) {
        this.childNodes.push(e), t.i.appendChild(e)
      },
      removeChild: function (e) {
        this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
      }
    }), pc(Vl(lu, {
      context: t.context
    }, e.__v), t.l)) : t.l && t.componentWillUnmount()
  }(ou.prototype = new Kl).__a = function (e) {
    var t = this,
      n = au(t.__v),
      r = t.o.get(e);
    return r[0]++,
      function (i) {
        var a = function () {
          t.props.revealOrder ? (r.push(i), su(t, e, r)) : i()
        };
        n ? n(a) : a()
      }
  }, ou.prototype.render = function (e) {
    this.u = null, this.o = new Map;
    var t = ic(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children
  }, ou.prototype.componentDidUpdate = ou.prototype.componentDidMount = function () {
    var e = this;
    this.o.forEach((function (t, n) {
      su(e, n, t)
    }))
  };
  var uu = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    hu = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    du = "undefined" != typeof document,
    pu = function (e) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
    };

  function fu(e, t, n) {
    return null == t.__k && (t.textContent = ""), pc(e, t), "function" == typeof n && n(), e ? e.__c : null
  }
  Kl.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function (e) {
    Object.defineProperty(Kl.prototype, e, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + e]
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t
        })
      }
    })
  }));
  var mu = Pl.event;

  function gu() {}

  function vu() {
    return this.cancelBubble
  }

  function _u() {
    return this.defaultPrevented
  }
  Pl.event = function (e) {
    return mu && (e = mu(e)), e.persist = gu, e.isPropagationStopped = vu, e.isDefaultPrevented = _u, e.nativeEvent = e
  };
  var yu, bu = {
      configurable: !0,
      get: function () {
        return this.class
      }
    },
    xu = Pl.vnode;
  Pl.vnode = function (e) {
    var t = e.type,
      n = e.props,
      r = n;
    if ("string" == typeof t) {
      var i = -1 === t.indexOf("-");
      for (var a in r = {}, n) {
        var o = n[a];
        du && "children" === a && "noscript" === t || "value" === a && "defaultValue" in n && null == o || ("defaultValue" === a && "value" in n && null == n.value ? a = "value" : "download" === a && !0 === o ? o = "" : /ondoubleclick/i.test(a) ? a = "ondblclick" : /^onchange(textarea|input)/i.test(a + t) && !pu(n.type) ? a = "oninput" : /^onfocus$/i.test(a) ? a = "onfocusin" : /^onblur$/i.test(a) ? a = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(a) ? a = a.toLowerCase() : i && hu.test(a) ? a = a.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === o && (o = void 0), /^oninput$/i.test(a) && (a = a.toLowerCase(), r[a] && (a = "oninputCapture")), r[a] = o)
      }
      "select" == t && r.multiple && Array.isArray(r.value) && (r.value = ic(n.children).forEach((function (e) {
        e.props.selected = -1 != r.value.indexOf(e.props.value)
      }))), "select" == t && null != r.defaultValue && (r.value = ic(n.children).forEach((function (e) {
        e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
      }))), e.props = r, n.class != n.className && (bu.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", bu))
    }
    e.$$typeof = uu, xu && xu(e)
  };
  var Su = Pl.__r;
  Pl.__r = function (e) {
    Su && Su(e), yu = e.__c
  };
  var Mu = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (e) {
          return yu.__n[e.__c].props.value
        }
      }
    }
  };

  function wu(e) {
    return !!e && e.$$typeof === uu
  }

  function Tu(e) {
    return wu(e) ? mc.apply(null, arguments) : e
  }
  var Eu = function (e, t) {
    return e(t)
  };

  function Au(e) {
    e()
  }
  var Cu, Lu, Ru, Pu, Du = {
      useState: Rc,
      useId: function () {
        var e = Lc(vc++, 11);
        if (!e.__) {
          for (var t = _c.__v; null !== t && !t.__m && null !== t.__;) t = t.__;
          var n = t.__m || (t.__m = [0, 0]);
          e.__ = "P" + n[0] + "-" + n[1]++
        }
        return e.__
      },
      useReducer: Pc,
      useEffect: Dc,
      useLayoutEffect: Nc,
      useInsertionEffect: Nc,
      useTransition: function () {
        return [!1, Au]
      },
      useDeferredValue: function (e) {
        return e
      },
      useSyncExternalStore: function (e, t) {
        var n = t(),
          r = Rc({
            h: {
              __: n,
              v: t
            }
          }),
          i = r[0].h,
          a = r[1];
        return Nc((function () {
          i.__ = n, i.v = t, Xc(i.__, t()) || a({
            h: i
          })
        }), [e, n, t]), Dc((function () {
          return Xc(i.__, i.v()) || a({
            h: i
          }), e((function () {
            Xc(i.__, i.v()) || a({
              h: i
            })
          }))
        }), [e]), n
      },
      startTransition: Au,
      useRef: Oc,
      useImperativeHandle: function (e, t, n) {
        xc = 6, Nc((function () {
          return "function" == typeof e ? (e(t()), function () {
            return e(null)
          }) : e ? (e.current = t(), function () {
            return e.current = null
          }) : void 0
        }), null == n ? n : n.concat(e))
      },
      useMemo: Ic,
      useCallback: Uc,
      useContext: kc,
      useDebugValue: function (e, t) {
        Pl.useDebugValue && Pl.useDebugValue(t ? t(e) : e)
      },
      version: "17.0.2",
      Children: Qc,
      render: fu,
      hydrate: function (e, t, n) {
        return fc(e, t), "function" == typeof n && n(), e ? e.__c : null
      },
      unmountComponentAtNode: function (e) {
        return !!e.__k && (pc(null, e), !0)
      },
      createPortal: function (e, t) {
        var n = Vl(cu, {
          __v: e,
          i: t
        });
        return n.containerInfo = t, n
      },
      createElement: Vl,
      createContext: gc,
      createFactory: function (e) {
        return Vl.bind(null, e)
      },
      cloneElement: Tu,
      createRef: function () {
        return {
          current: null
        }
      },
      Fragment: jl,
      isValidElement: wu,
      findDOMNode: function (e) {
        return e && (e.base || 1 === e.nodeType && e) || null
      },
      Component: Kl,
      PureComponent: Yc,
      memo: Zc,
      forwardRef: function (e) {
        function t(t) {
          var n = jc({}, t);
          return delete n.ref, e(n, t.ref || null)
        }
        return t.$$typeof = $c, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
      },
      flushSync: function (e, t) {
        return e(t)
      },
      unstable_batchedUpdates: Eu,
      StrictMode: jl,
      Suspense: iu,
      SuspenseList: ou,
      lazy: function (e) {
        var t, n, r;

        function i(i) {
          if (t || (t = e()).then((function (e) {
              n = e.default || e
            }), (function (e) {
              r = e
            })), r) throw r;
          if (!n) throw t;
          return Vl(n, i)
        }
        return i.displayName = "Lazy", i.__f = !0, i
      },
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Mu
    },
    Nu = {},
    Ou = {
      get exports() {
        return Nu
      },
      set exports(e) {
        Nu = e
      }
    },
    Iu = At.f,
    Uu = H,
    ku = W,
    zu = Ia,
    Fu = function (e, t, n) {
      var r, i;
      return zu && Uu(r = t.constructor) && r !== n && ku(i = r.prototype) && i !== n.prototype && zu(e, i), e
    },
    Bu = jo,
    Hu = function (e, t) {
      return void 0 === e ? arguments.length < 2 ? "" : t : Bu(e)
    },
    Gu = W,
    Vu = qt,
    Wu = Error,
    ju = x("".replace),
    qu = String(Wu("zxcasd").stack),
    Xu = /\n\s*at [^:]*:[^\n]*/,
    Yu = Xu.test(qu),
    Zu = function (e, t) {
      if (Yu && "string" == typeof e && !Wu.prepareStackTrace)
        for (; t--;) e = ju(e, Xu, "");
      return e
    },
    Ku = g,
    $u = !i((function () {
      var e = Error("a");
      return !("stack" in e) || (Object.defineProperty(e, "stack", Ku(1, 7)), 7 !== e.stack)
    })),
    Ju = qt,
    Qu = Zu,
    eh = $u,
    th = Error.captureStackTrace,
    nh = Y,
    rh = Be,
    ih = qt,
    ah = Z,
    oh = Ia,
    sh = zr,
    lh = function (e, t, n) {
      n in e || Iu(e, n, {
        configurable: !0,
        get: function () {
          return t[n]
        },
        set: function (e) {
          t[n] = e
        }
      })
    },
    ch = Fu,
    uh = Hu,
    hh = function (e, t) {
      Gu(t) && "cause" in t && Vu(e, "cause", t.cause)
    },
    dh = function (e, t, n, r) {
      eh && (th ? th(e, t) : Ju(e, "stack", Qu(n, r)))
    },
    ph = a,
    fh = ti,
    mh = Do,
    gh = function (e, t, n, r) {
      var i = "stackTraceLimit",
        a = r ? 2 : 1,
        o = e.split("."),
        s = o[o.length - 1],
        l = nh.apply(null, o);
      if (l) {
        var c = l.prototype;
        if (rh(c, "cause") && delete c.cause, !n) return l;
        var u = nh("Error"),
          h = t((function (e, t) {
            var n = uh(r ? t : e, void 0),
              i = r ? new l(e) : new l;
            return void 0 !== n && ih(i, "message", n), dh(i, h, i.stack, 2), this && ah(c, this) && ch(i, this, h), arguments.length > a && hh(i, arguments[a]), i
          }));
        h.prototype = c, "Error" !== s ? oh ? oh(h, u) : sh(h, u, {
          name: !0
        }) : ph && i in l && (lh(h, l, i), lh(h, l, "prepareStackTrace")), sh(h, l);
        try {
          c.name !== s && ih(c, "name", s), c.constructor = h
        } catch (e) {}
        return h
      }
    },
    vh = "WebAssembly",
    _h = n[vh],
    yh = 7 !== Error("e", {
      cause: 7
    }).cause,
    bh = function (e, t) {
      var n = {};
      n[e] = gh(e, t, yh), fh({
        global: !0,
        constructor: !0,
        arity: 1,
        forced: yh
      }, n)
    },
    xh = function (e, t) {
      if (_h && _h[e]) {
        var n = {};
        n[e] = gh(vh + "." + e, t, yh), fh({
          target: vh,
          stat: !0,
          constructor: !0,
          arity: 1,
          forced: yh
        }, n)
      }
    };
  bh("Error", (function (e) {
    return function (t) {
      return mh(e, this, arguments)
    }
  })), bh("EvalError", (function (e) {
    return function (t) {
      return mh(e, this, arguments)
    }
  })), bh("RangeError", (function (e) {
    return function (t) {
      return mh(e, this, arguments)
    }
  })), bh("ReferenceError", (function (e) {
    return function (t) {
      return mh(e, this, arguments)
    }
  })), bh("SyntaxError", (function (e) {
    return function (t) {
      return mh(e, this, arguments)
    }
  })), bh("TypeError", (function (e) {
    return function (t) {
      return mh(e, this, arguments)
    }
  })), bh("URIError", (function (e) {
    return function (t) {
      return mh(e, this, arguments)
    }
  })), xh("CompileError", (function (e) {
    return function (t) {
      return mh(e, this, arguments)
    }
  })), xh("LinkError", (function (e) {
    return function (t) {
      return mh(e, this, arguments)
    }
  })), xh("RuntimeError", (function (e) {
    return function (t) {
      return mh(e, this, arguments)
    }
  })), Ou.exports = function () {
    if (Pu) return Ru;
    Pu = 1;
    var e = Lu ? Cu : (Lu = 1, Cu = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");

    function t() {}

    function n() {}
    return n.resetWarningCache = t, Ru = function () {
      function r(t, n, r, i, a, o) {
        if (o !== e) {
          var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw s.name = "Invariant Violation", s
        }
      }

      function i() {
        return r
      }
      r.isRequired = r;
      var a = {
        array: r,
        bigint: r,
        bool: r,
        func: r,
        number: r,
        object: r,
        string: r,
        symbol: r,
        any: r,
        arrayOf: i,
        element: r,
        elementType: r,
        instanceOf: i,
        node: r,
        objectOf: i,
        oneOf: i,
        oneOfType: i,
        shape: i,
        exact: i,
        checkPropTypes: n,
        resetWarningCache: t
      };
      return a.PropTypes = a, a
    }
  }()();
  var Sh = Du.createContext(null);
  var Mh = function (e) {
      e()
    },
    wh = function () {
      return Mh
    };
  var Th = {
    notify: function () {},
    get: function () {
      return []
    }
  };

  function Eh(e, t) {
    var n, r = Th;

    function i() {
      o.onStateChange && o.onStateChange()
    }

    function a() {
      n || (n = t ? t.addNestedSub(i) : e.subscribe(i), r = function () {
        var e = wh(),
          t = null,
          n = null;
        return {
          clear: function () {
            t = null, n = null
          },
          notify: function () {
            e((function () {
              for (var e = t; e;) e.callback(), e = e.next
            }))
          },
          get: function () {
            for (var e = [], n = t; n;) e.push(n), n = n.next;
            return e
          },
          subscribe: function (e) {
            var r = !0,
              i = n = {
                callback: e,
                next: null,
                prev: n
              };
            return i.prev ? i.prev.next = i : t = i,
              function () {
                r && null !== t && (r = !1, i.next ? i.next.prev = i.prev : n = i.prev, i.prev ? i.prev.next = i.next : t = i.next)
              }
          }
        }
      }())
    }
    var o = {
      addNestedSub: function (e) {
        return a(), r.subscribe(e)
      },
      notifyNestedSubs: function () {
        r.notify()
      },
      handleChangeWrapper: i,
      isSubscribed: function () {
        return Boolean(n)
      },
      trySubscribe: a,
      tryUnsubscribe: function () {
        n && (n(), n = void 0, r.clear(), r = Th)
      },
      getListeners: function () {
        return r
      }
    };
    return o
  }
  var Ah = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? Nc : Dc;

  function Ch(e) {
    var t = e.store,
      n = e.context,
      r = e.children,
      i = Ic((function () {
        var e = Eh(t);
        return {
          store: t,
          subscription: e
        }
      }), [t]),
      a = Ic((function () {
        return t.getState()
      }), [t]);
    Ah((function () {
      var e = i.subscription;
      return e.onStateChange = e.notifyNestedSubs, e.trySubscribe(), a !== t.getState() && e.notifyNestedSubs(),
        function () {
          e.tryUnsubscribe(), e.onStateChange = null
        }
    }), [i, a]);
    var o = n || Sh;
    return Du.createElement(o.Provider, {
      value: i
    }, r)
  }

  function Lh() {
    return Lh = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }, Lh.apply(this, arguments)
  }

  function Rh(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }
  var Ph, Dh = {},
    Nh = {
      get exports() {
        return Dh
      },
      set exports(e) {
        Dh = e
      }
    },
    Oh = {};
  Nh.exports = function () {
    if (Ph) return Oh;
    Ph = 1;
    var e = "function" == typeof Symbol && Symbol.for,
      t = e ? Symbol.for("react.element") : 60103,
      n = e ? Symbol.for("react.portal") : 60106,
      r = e ? Symbol.for("react.fragment") : 60107,
      i = e ? Symbol.for("react.strict_mode") : 60108,
      a = e ? Symbol.for("react.profiler") : 60114,
      o = e ? Symbol.for("react.provider") : 60109,
      s = e ? Symbol.for("react.context") : 60110,
      l = e ? Symbol.for("react.async_mode") : 60111,
      c = e ? Symbol.for("react.concurrent_mode") : 60111,
      u = e ? Symbol.for("react.forward_ref") : 60112,
      h = e ? Symbol.for("react.suspense") : 60113,
      d = e ? Symbol.for("react.suspense_list") : 60120,
      p = e ? Symbol.for("react.memo") : 60115,
      f = e ? Symbol.for("react.lazy") : 60116,
      m = e ? Symbol.for("react.block") : 60121,
      g = e ? Symbol.for("react.fundamental") : 60117,
      v = e ? Symbol.for("react.responder") : 60118,
      _ = e ? Symbol.for("react.scope") : 60119;

    function y(e) {
      if ("object" == typeof e && null !== e) {
        var d = e.$$typeof;
        switch (d) {
          case t:
            switch (e = e.type) {
              case l:
              case c:
              case r:
              case a:
              case i:
              case h:
                return e;
              default:
                switch (e = e && e.$$typeof) {
                  case s:
                  case u:
                  case f:
                  case p:
                  case o:
                    return e;
                  default:
                    return d
                }
            }
          case n:
            return d
        }
      }
    }

    function b(e) {
      return y(e) === c
    }
    return Oh.AsyncMode = l, Oh.ConcurrentMode = c, Oh.ContextConsumer = s, Oh.ContextProvider = o, Oh.Element = t, Oh.ForwardRef = u, Oh.Fragment = r, Oh.Lazy = f, Oh.Memo = p, Oh.Portal = n, Oh.Profiler = a, Oh.StrictMode = i, Oh.Suspense = h, Oh.isAsyncMode = function (e) {
      return b(e) || y(e) === l
    }, Oh.isConcurrentMode = b, Oh.isContextConsumer = function (e) {
      return y(e) === s
    }, Oh.isContextProvider = function (e) {
      return y(e) === o
    }, Oh.isElement = function (e) {
      return "object" == typeof e && null !== e && e.$$typeof === t
    }, Oh.isForwardRef = function (e) {
      return y(e) === u
    }, Oh.isFragment = function (e) {
      return y(e) === r
    }, Oh.isLazy = function (e) {
      return y(e) === f
    }, Oh.isMemo = function (e) {
      return y(e) === p
    }, Oh.isPortal = function (e) {
      return y(e) === n
    }, Oh.isProfiler = function (e) {
      return y(e) === a
    }, Oh.isStrictMode = function (e) {
      return y(e) === i
    }, Oh.isSuspense = function (e) {
      return y(e) === h
    }, Oh.isValidElementType = function (e) {
      return "string" == typeof e || "function" == typeof e || e === r || e === c || e === a || e === i || e === h || e === d || "object" == typeof e && null !== e && (e.$$typeof === f || e.$$typeof === p || e.$$typeof === o || e.$$typeof === s || e.$$typeof === u || e.$$typeof === g || e.$$typeof === v || e.$$typeof === _ || e.$$typeof === m)
    }, Oh.typeOf = y, Oh
  }();
  var Ih = Dh,
    Uh = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0
    },
    kh = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0
    },
    zh = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0
    },
    Fh = {};

  function Bh(e) {
    return Ih.isMemo(e) ? zh : Fh[e.$$typeof] || Uh
  }
  Fh[Ih.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, Fh[Ih.Memo] = zh;
  var Hh = Object.defineProperty,
    Gh = Object.getOwnPropertyNames,
    Vh = Object.getOwnPropertySymbols,
    Wh = Object.getOwnPropertyDescriptor,
    jh = Object.getPrototypeOf,
    qh = Object.prototype;
  var Xh, Yh = function e(t, n, r) {
      if ("string" != typeof n) {
        if (qh) {
          var i = jh(n);
          i && i !== qh && e(t, i, r)
        }
        var a = Gh(n);
        Vh && (a = a.concat(Vh(n)));
        for (var o = Bh(t), s = Bh(n), l = 0; l < a.length; ++l) {
          var c = a[l];
          if (!(kh[c] || r && r[c] || s && s[c] || o && o[c])) {
            var u = Wh(n, c);
            try {
              Hh(t, c, u)
            } catch (e) {}
          }
        }
      }
      return t
    },
    Zh = {},
    Kh = {
      get exports() {
        return Zh
      },
      set exports(e) {
        Zh = e
      }
    },
    $h = {};
  ! function (e) {
    e.exports = function () {
      if (Xh) return $h;
      Xh = 1;
      var e = 60103,
        t = 60106,
        n = 60107,
        r = 60108,
        i = 60114,
        a = 60109,
        o = 60110,
        s = 60112,
        l = 60113,
        c = 60120,
        u = 60115,
        h = 60116,
        d = 60121,
        p = 60122,
        f = 60117,
        m = 60129,
        g = 60131;
      if ("function" == typeof Symbol && Symbol.for) {
        var v = Symbol.for;
        e = v("react.element"), t = v("react.portal"), n = v("react.fragment"), r = v("react.strict_mode"), i = v("react.profiler"), a = v("react.provider"), o = v("react.context"), s = v("react.forward_ref"), l = v("react.suspense"), c = v("react.suspense_list"), u = v("react.memo"), h = v("react.lazy"), d = v("react.block"), p = v("react.server.block"), f = v("react.fundamental"), m = v("react.debug_trace_mode"), g = v("react.legacy_hidden")
      }

      function _(d) {
        if ("object" == typeof d && null !== d) {
          var p = d.$$typeof;
          switch (p) {
            case e:
              switch (d = d.type) {
                case n:
                case i:
                case r:
                case l:
                case c:
                  return d;
                default:
                  switch (d = d && d.$$typeof) {
                    case o:
                    case s:
                    case h:
                    case u:
                    case a:
                      return d;
                    default:
                      return p
                  }
              }
            case t:
              return p
          }
        }
      }
      var y = a,
        b = e,
        x = s,
        S = n,
        M = h,
        w = u,
        T = t,
        E = i,
        A = r,
        C = l;
      return $h.ContextConsumer = o, $h.ContextProvider = y, $h.Element = b, $h.ForwardRef = x, $h.Fragment = S, $h.Lazy = M, $h.Memo = w, $h.Portal = T, $h.Profiler = E, $h.StrictMode = A, $h.Suspense = C, $h.isAsyncMode = function () {
        return !1
      }, $h.isConcurrentMode = function () {
        return !1
      }, $h.isContextConsumer = function (e) {
        return _(e) === o
      }, $h.isContextProvider = function (e) {
        return _(e) === a
      }, $h.isElement = function (t) {
        return "object" == typeof t && null !== t && t.$$typeof === e
      }, $h.isForwardRef = function (e) {
        return _(e) === s
      }, $h.isFragment = function (e) {
        return _(e) === n
      }, $h.isLazy = function (e) {
        return _(e) === h
      }, $h.isMemo = function (e) {
        return _(e) === u
      }, $h.isPortal = function (e) {
        return _(e) === t
      }, $h.isProfiler = function (e) {
        return _(e) === i
      }, $h.isStrictMode = function (e) {
        return _(e) === r
      }, $h.isSuspense = function (e) {
        return _(e) === l
      }, $h.isValidElementType = function (e) {
        return "string" == typeof e || "function" == typeof e || e === n || e === i || e === m || e === r || e === l || e === c || e === g || "object" == typeof e && null !== e && (e.$$typeof === h || e.$$typeof === u || e.$$typeof === a || e.$$typeof === o || e.$$typeof === s || e.$$typeof === f || e.$$typeof === d || e[0] === p)
      }, $h.typeOf = _, $h
    }()
  }(Kh);
  var Jh = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"],
    Qh = ["reactReduxForwardedRef"],
    ed = [],
    td = [null, null];

  function nd(e, t) {
    var n = e[1];
    return [t.payload, n + 1]
  }

  function rd(e, t, n) {
    Ah((function () {
      return e.apply(void 0, t)
    }), n)
  }

  function id(e, t, n, r, i, a, o) {
    e.current = r, t.current = i, n.current = !1, a.current && (a.current = null, o())
  }

  function ad(e, t, n, r, i, a, o, s, l, c) {
    if (e) {
      var u = !1,
        h = null,
        d = function () {
          if (!u) {
            var e, n, d = t.getState();
            try {
              e = r(d, i.current)
            } catch (e) {
              n = e, h = e
            }
            n || (h = null), e === a.current ? o.current || l() : (a.current = e, s.current = e, o.current = !0, c({
              type: "STORE_UPDATED",
              payload: {
                error: n
              }
            }))
          }
        };
      n.onStateChange = d, n.trySubscribe(), d();
      return function () {
        if (u = !0, n.tryUnsubscribe(), n.onStateChange = null, h) throw h
      }
    }
  }
  var od = function () {
    return [null, 0]
  };

  function sd(e, t) {
    void 0 === t && (t = {});
    var n = t,
      r = n.getDisplayName,
      i = void 0 === r ? function (e) {
        return "ConnectAdvanced(" + e + ")"
      } : r,
      a = n.methodName,
      o = void 0 === a ? "connectAdvanced" : a,
      s = n.renderCountProp,
      l = void 0 === s ? void 0 : s,
      c = n.shouldHandleStateChanges,
      u = void 0 === c || c,
      h = n.storeKey,
      d = void 0 === h ? "store" : h;
    n.withRef;
    var p = n.forwardRef,
      f = void 0 !== p && p,
      m = n.context,
      g = void 0 === m ? Sh : m,
      v = Rh(n, Jh),
      _ = g;
    return function (t) {
      var n = t.displayName || t.name || "Component",
        r = i(n),
        a = Lh({}, v, {
          getDisplayName: i,
          methodName: o,
          renderCountProp: l,
          shouldHandleStateChanges: u,
          storeKey: d,
          displayName: r,
          wrappedComponentName: n,
          WrappedComponent: t
        }),
        s = v.pure;
      var c = s ? Ic : function (e) {
        return e()
      };

      function h(n) {
        var r = Ic((function () {
            var e = n.reactReduxForwardedRef,
              t = Rh(n, Qh);
            return [n.context, e, t]
          }), [n]),
          i = r[0],
          o = r[1],
          s = r[2],
          l = Ic((function () {
            return i && i.Consumer && Zh.isContextConsumer(Du.createElement(i.Consumer, null)) ? i : _
          }), [i, _]),
          h = kc(l),
          d = Boolean(n.store) && Boolean(n.store.getState) && Boolean(n.store.dispatch);
        Boolean(h) && Boolean(h.store);
        var p = d ? n.store : h.store,
          f = Ic((function () {
            return function (t) {
              return e(t.dispatch, a)
            }(p)
          }), [p]),
          m = Ic((function () {
            if (!u) return td;
            var e = Eh(p, d ? null : h.subscription),
              t = e.notifyNestedSubs.bind(e);
            return [e, t]
          }), [p, d, h]),
          g = m[0],
          v = m[1],
          y = Ic((function () {
            return d ? h : Lh({}, h, {
              subscription: g
            })
          }), [d, h, g]),
          b = Pc(nd, ed, od),
          x = b[0][0],
          S = b[1];
        if (x && x.error) throw x.error;
        var M = Oc(),
          w = Oc(s),
          T = Oc(),
          E = Oc(!1),
          A = c((function () {
            return T.current && s === w.current ? T.current : f(p.getState(), s)
          }), [p, x, s]);
        rd(id, [w, M, E, s, A, T, v]), rd(ad, [u, p, g, f, w, M, E, T, v, S], [p, g, f]);
        var C = Ic((function () {
          return Du.createElement(t, Lh({}, A, {
            ref: o
          }))
        }), [o, t, A]);
        return Ic((function () {
          return u ? Du.createElement(l.Provider, {
            value: y
          }, C) : C
        }), [l, C, y])
      }
      var p = s ? Du.memo(h) : h;
      if (p.WrappedComponent = t, p.displayName = h.displayName = r, f) {
        var m = Du.forwardRef((function (e, t) {
          return Du.createElement(p, Lh({}, e, {
            reactReduxForwardedRef: t
          }))
        }));
        return m.displayName = r, m.WrappedComponent = t, Yh(m, t)
      }
      return Yh(p, t)
    }
  }

  function ld(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
  }

  function cd(e, t) {
    if (ld(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (var i = 0; i < n.length; i++)
      if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !ld(e[n[i]], t[n[i]])) return !1;
    return !0
  }

  function ud(e) {
    return function (t, n) {
      var r = e(t, n);

      function i() {
        return r
      }
      return i.dependsOnOwnProps = !1, i
    }
  }

  function hd(e) {
    return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
  }

  function dd(e, t) {
    return function (t, n) {
      n.displayName;
      var r = function (e, t) {
        return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e)
      };
      return r.dependsOnOwnProps = !0, r.mapToProps = function (t, n) {
        r.mapToProps = e, r.dependsOnOwnProps = hd(e);
        var i = r(t, n);
        return "function" == typeof i && (r.mapToProps = i, r.dependsOnOwnProps = hd(i), i = r(t, n)), i
      }, r
    }
  }
  var pd = [function (e) {
    return "function" == typeof e ? dd(e) : void 0
  }, function (e) {
    return e ? void 0 : ud((function (e) {
      return {
        dispatch: e
      }
    }))
  }, function (e) {
    return e && "object" == typeof e ? ud((function (t) {
      return function (e, t) {
        var n = {},
          r = function (r) {
            var i = e[r];
            "function" == typeof i && (n[r] = function () {
              return t(i.apply(void 0, arguments))
            })
          };
        for (var i in e) r(i);
        return n
      }(e, t)
    })) : void 0
  }];
  var fd = [function (e) {
    return "function" == typeof e ? dd(e) : void 0
  }, function (e) {
    return e ? void 0 : ud((function () {
      return {}
    }))
  }];

  function md(e, t, n) {
    return Lh({}, n, e, t)
  }
  var gd = [function (e) {
      return "function" == typeof e ? function (e) {
        return function (t, n) {
          n.displayName;
          var r, i = n.pure,
            a = n.areMergedPropsEqual,
            o = !1;
          return function (t, n, s) {
            var l = e(t, n, s);
            return o ? i && a(l, r) || (r = l) : (o = !0, r = l), r
          }
        }
      }(e) : void 0
    }, function (e) {
      return e ? void 0 : function () {
        return md
      }
    }],
    vd = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

  function _d(e, t, n, r) {
    return function (i, a) {
      return n(e(i, a), t(r, a), a)
    }
  }

  function yd(e, t, n, r, i) {
    var a, o, s, l, c, u = i.areStatesEqual,
      h = i.areOwnPropsEqual,
      d = i.areStatePropsEqual,
      p = !1;

    function f(i, p) {
      var f, m, g = !h(p, o),
        v = !u(i, a, p, o);
      return a = i, o = p, g && v ? (s = e(a, o), t.dependsOnOwnProps && (l = t(r, o)), c = n(s, l, o)) : g ? (e.dependsOnOwnProps && (s = e(a, o)), t.dependsOnOwnProps && (l = t(r, o)), c = n(s, l, o)) : v ? (f = e(a, o), m = !d(f, s), s = f, m && (c = n(s, l, o)), c) : c
    }
    return function (i, u) {
      return p ? f(i, u) : (s = e(a = i, o = u), l = t(r, o), c = n(s, l, o), p = !0, c)
    }
  }

  function bd(e, t) {
    var n = t.initMapStateToProps,
      r = t.initMapDispatchToProps,
      i = t.initMergeProps,
      a = Rh(t, vd),
      o = n(e, a),
      s = r(e, a),
      l = i(e, a);
    return (a.pure ? yd : _d)(o, s, l, e, a)
  }
  var xd = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];

  function Sd(e, t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var i = t[r](e);
      if (i) return i
    }
    return function (t, r) {
      throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
    }
  }

  function Md(e, t) {
    return e === t
  }

  function wd(e) {
    var t = void 0 === e ? {} : e,
      n = t.connectHOC,
      r = void 0 === n ? sd : n,
      i = t.mapStateToPropsFactories,
      a = void 0 === i ? fd : i,
      o = t.mapDispatchToPropsFactories,
      s = void 0 === o ? pd : o,
      l = t.mergePropsFactories,
      c = void 0 === l ? gd : l,
      u = t.selectorFactory,
      h = void 0 === u ? bd : u;
    return function (e, t, n, i) {
      void 0 === i && (i = {});
      var o = i,
        l = o.pure,
        u = void 0 === l || l,
        d = o.areStatesEqual,
        p = void 0 === d ? Md : d,
        f = o.areOwnPropsEqual,
        m = void 0 === f ? cd : f,
        g = o.areStatePropsEqual,
        v = void 0 === g ? cd : g,
        _ = o.areMergedPropsEqual,
        y = void 0 === _ ? cd : _,
        b = Rh(o, xd),
        x = Sd(e, a, "mapStateToProps"),
        S = Sd(t, s, "mapDispatchToProps"),
        M = Sd(n, c, "mergeProps");
      return r(h, Lh({
        methodName: "connect",
        getDisplayName: function (e) {
          return "Connect(" + e + ")"
        },
        shouldHandleStateChanges: Boolean(e),
        initMapStateToProps: x,
        initMapDispatchToProps: S,
        initMergeProps: M,
        pure: u,
        areStatesEqual: p,
        areOwnPropsEqual: m,
        areStatePropsEqual: v,
        areMergedPropsEqual: y
      }, b))
    }
  }
  var Td = wd();
  Mh = Eu;
  var Ed = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0
    },
    Ad = Du.createContext && Du.createContext(Ed),
    Cd = function () {
      return Cd = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
      }, Cd.apply(this, arguments)
    },
    Ld = function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
      }
      return n
    };

  function Rd(e) {
    return e && e.map((function (e, t) {
      return Du.createElement(e.tag, Cd({
        key: t
      }, e.attr), Rd(e.child))
    }))
  }

  function Pd(e) {
    return function (t) {
      return Du.createElement(Dd, Cd({
        attr: Cd({}, e.attr)
      }, t), Rd(e.child))
    }
  }

  function Dd(e) {
    var t = function (t) {
      var n, r = e.attr,
        i = e.size,
        a = e.title,
        o = Ld(e, ["attr", "size", "title"]),
        s = i || t.size || "1em";
      return t.className && (n = t.className), e.className && (n = (n ? n + " " : "") + e.className), Du.createElement("svg", Cd({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, t.attr, r, o, {
        className: n,
        style: Cd(Cd({
          color: e.color || t.color
        }, t.style), e.style),
        height: s,
        width: s,
        xmlns: "http://www.w3.org/2000/svg"
      }), a && Du.createElement("title", null, a), e.children)
    };
    return void 0 !== Ad ? Du.createElement(Ad.Consumer, null, (function (e) {
      return t(e)
    })) : t(Ed)
  }

  function Nd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
        }
      }]
    })(e)
  }

  function Od(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
        }
      }]
    })(e)
  }

  function Id(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M8 5v14l11-7z"
        }
      }]
    })(e)
  }

  function Ud(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"
        }
      }]
    })(e)
  }

  function kd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M6 6h12v12H6z"
        }
      }]
    })(e)
  }

  function zd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
        }
      }]
    })(e)
  }

  function Fd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
        }
      }]
    })(e)
  }

  function Bd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"
        }
      }]
    })(e)
  }

  function Hd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 017.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"
        }
      }]
    })(e)
  }

  function Gd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
        }
      }]
    })(e)
  }

  function Vd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"
        }
      }]
    })(e)
  }

  function Wd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M7 10l5 5 5-5z"
        }
      }]
    })(e)
  }

  function jd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M7 14l5-5 5 5z"
        }
      }]
    })(e)
  }

  function qd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
        }
      }]
    })(e)
  }

  function Xd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        }
      }]
    })(e)
  }

  function Yd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
        }
      }]
    })(e)
  }

  function Zd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
        }
      }]
    })(e)
  }

  function Kd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        }
      }]
    })(e)
  }

  function $d(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0V0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"
        }
      }]
    })(e)
  }

  function Jd(e) {
    return Pd({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24"
      },
      child: [{
        tag: "path",
        attr: {
          fill: "none",
          d: "M0 0h24v24H0V0z"
        }
      }, {
        tag: "path",
        attr: {
          d: "M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm7 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7-11h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"
        }
      }]
    })(e)
  }
  const Qd = .12,
    ep = 1.225,
    tp = {
      DEXTER: "dexter",
      SINISTER: "sinister"
    },
    np = {
      TOP: "top",
      LEFT: "left",
      BOTTOM: "bottom",
      RIGHT: "right"
    },
    rp = {
      VERTICAL: "vertical",
      HORIZONTAL: "horizontal",
      OUTRIGGER: "outrigger",
      CROSSBAR: "crossbar",
      GALLERY: "gallery",
      AUSTRALIAN: "australian"
    },
    ip = {
      NONE: "none",
      TOP_RIGHT: "topright",
      TOP_LEFT: "topleft"
    };

  function ap(e) {
    return ap = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, ap(e)
  }

  function op(e) {
    var t = function (e, t) {
      if ("object" !== ap(e) || null === e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" !== ap(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
      }
      return ("string" === t ? String : Number)(e)
    }(e, "string");
    return "symbol" === ap(t) ? t : String(t)
  }

  function sp(e, t, n) {
    return (t = op(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  const lp = "149",
    cp = {
      LEFT: 0,
      MIDDLE: 1,
      RIGHT: 2,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2
    },
    up = {
      ROTATE: 0,
      PAN: 1,
      DOLLY_PAN: 2,
      DOLLY_ROTATE: 3
    },
    hp = 0,
    dp = 1,
    pp = 2,
    fp = 1,
    mp = 2,
    gp = 3,
    vp = 0,
    _p = 1,
    yp = 2,
    bp = 0,
    xp = 1,
    Sp = 2,
    Mp = 3,
    wp = 4,
    Tp = 5,
    Ep = 100,
    Ap = 101,
    Cp = 102,
    Lp = 103,
    Rp = 104,
    Pp = 200,
    Dp = 201,
    Np = 202,
    Op = 203,
    Ip = 204,
    Up = 205,
    kp = 206,
    zp = 207,
    Fp = 208,
    Bp = 209,
    Hp = 210,
    Gp = 0,
    Vp = 1,
    Wp = 2,
    jp = 3,
    qp = 4,
    Xp = 5,
    Yp = 6,
    Zp = 7,
    Kp = 0,
    $p = 1,
    Jp = 2,
    Qp = 0,
    ef = 1,
    tf = 2,
    nf = 3,
    rf = 4,
    af = 5,
    of = 301,
    sf = 302,
    lf = 303,
    cf = 304,
    uf = 306,
    hf = 1e3,
    df = 1001,
    pf = 1002,
    ff = 1003,
    mf = 1004,
    gf = 1005,
    vf = 1006,
    _f = 1007,
    yf = 1008,
    bf = 1009,
    xf = 1010,
    Sf = 1011,
    Mf = 1012,
    wf = 1013,
    Tf = 1014,
    Ef = 1015,
    Af = 1016,
    Cf = 1017,
    Lf = 1018,
    Rf = 1020,
    Pf = 1021,
    Df = 1023,
    Nf = 1024,
    Of = 1025,
    If = 1026,
    Uf = 1027,
    kf = 1028,
    zf = 1029,
    Ff = 1030,
    Bf = 1031,
    Hf = 1033,
    Gf = 33776,
    Vf = 33777,
    Wf = 33778,
    jf = 33779,
    qf = 35840,
    Xf = 35841,
    Yf = 35842,
    Zf = 35843,
    Kf = 36196,
    $f = 37492,
    Jf = 37496,
    Qf = 37808,
    em = 37809,
    tm = 37810,
    nm = 37811,
    rm = 37812,
    im = 37813,
    am = 37814,
    om = 37815,
    sm = 37816,
    lm = 37817,
    cm = 37818,
    um = 37819,
    hm = 37820,
    dm = 37821,
    pm = 36492,
    fm = 36283,
    mm = 36284,
    gm = 36285,
    vm = 36286,
    _m = 3e3,
    ym = 3001,
    bm = 3201,
    xm = 0,
    Sm = 1,
    Mm = "srgb",
    wm = "srgb-linear",
    Tm = 7680,
    Em = "300 es",
    Am = 1035;
  class Cm {
    addEventListener(e, t) {
      void 0 === this._listeners && (this._listeners = {});
      const n = this._listeners;
      void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t)
    }
    hasEventListener(e, t) {
      if (void 0 === this._listeners) return !1;
      const n = this._listeners;
      return void 0 !== n[e] && -1 !== n[e].indexOf(t)
    }
    removeEventListener(e, t) {
      if (void 0 === this._listeners) return;
      const n = this._listeners[e];
      if (void 0 !== n) {
        const e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
      }
    }
    dispatchEvent(e) {
      if (void 0 === this._listeners) return;
      const t = this._listeners[e.type];
      if (void 0 !== t) {
        e.target = this;
        const n = t.slice(0);
        for (let t = 0, r = n.length; t < r; t++) n[t].call(this, e);
        e.target = null
      }
    }
  }
  var Lm = c;
  ti({
    target: "URL",
    proto: !0,
    enumerable: !0
  }, {
    toJSON: function () {
      return Lm(URL.prototype.toString, this)
    }
  });
  var Rm = {},
    Pm = {
      get exports() {
        return Rm
      },
      set exports(e) {
        Rm = e
      }
    },
    Dm = et("iterator"),
    Nm = !1;
  try {
    var Om = 0,
      Im = {
        next: function () {
          return {
            done: !!Om++
          }
        },
        return: function () {
          Nm = !0
        }
      };
    Im[Dm] = function () {
      return this
    }, Array.from(Im, (function () {
      throw 2
    }))
  } catch (e) {}
  var Um, km, zm, Fm = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
    Bm = Fm,
    Hm = a,
    Gm = n,
    Vm = H,
    Wm = W,
    jm = Be,
    qm = Go,
    Xm = fe,
    Ym = qt,
    Zm = $n,
    Km = At.f,
    $m = Z,
    Jm = la,
    Qm = Ia,
    eg = et,
    tg = je,
    ng = Ln.enforce,
    rg = Ln.get,
    ig = Gm.Int8Array,
    ag = ig && ig.prototype,
    og = Gm.Uint8ClampedArray,
    sg = og && og.prototype,
    lg = ig && Jm(ig),
    cg = ag && Jm(ag),
    ug = Object.prototype,
    hg = Gm.TypeError,
    dg = eg("toStringTag"),
    pg = tg("TYPED_ARRAY_TAG"),
    fg = "TypedArrayConstructor",
    mg = Bm && !!Qm && "Opera" !== qm(Gm.opera),
    gg = !1,
    vg = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8
    },
    _g = {
      BigInt64Array: 8,
      BigUint64Array: 8
    },
    yg = function (e) {
      var t = Jm(e);
      if (Wm(t)) {
        var n = rg(t);
        return n && jm(n, fg) ? n[fg] : yg(t)
      }
    },
    bg = function (e) {
      if (!Wm(e)) return !1;
      var t = qm(e);
      return jm(vg, t) || jm(_g, t)
    };
  for (Um in vg)(zm = (km = Gm[Um]) && km.prototype) ? ng(zm)[fg] = km : mg = !1;
  for (Um in _g)(zm = (km = Gm[Um]) && km.prototype) && (ng(zm)[fg] = km);
  if ((!mg || !Vm(lg) || lg === Function.prototype) && (lg = function () {
      throw hg("Incorrect invocation")
    }, mg))
    for (Um in vg) Gm[Um] && Qm(Gm[Um], lg);
  if ((!mg || !cg || cg === ug) && (cg = lg.prototype, mg))
    for (Um in vg) Gm[Um] && Qm(Gm[Um].prototype, cg);
  if (mg && Jm(sg) !== cg && Qm(sg, cg), Hm && !jm(cg, dg))
    for (Um in gg = !0, Km(cg, dg, {
        get: function () {
          return Wm(this) ? this[pg] : void 0
        }
      }), vg) Gm[Um] && Ym(Gm[Um], pg, Um);
  var xg = {
      NATIVE_ARRAY_BUFFER_VIEWS: mg,
      TYPED_ARRAY_TAG: gg && pg,
      aTypedArray: function (e) {
        if (bg(e)) return e;
        throw hg("Target is not a typed array")
      },
      aTypedArrayConstructor: function (e) {
        if (Vm(e) && (!Qm || $m(lg, e))) return e;
        throw hg(Xm(e) + " is not a typed array constructor")
      },
      exportTypedArrayMethod: function (e, t, n, r) {
        if (Hm) {
          if (n)
            for (var i in vg) {
              var a = Gm[i];
              if (a && jm(a.prototype, e)) try {
                delete a.prototype[e]
              } catch (n) {
                try {
                  a.prototype[e] = t
                } catch (e) {}
              }
            }
          cg[e] && !n || Zm(cg, e, n ? t : mg && ag[e] || t, r)
        }
      },
      exportTypedArrayStaticMethod: function (e, t, n) {
        var r, i;
        if (Hm) {
          if (Qm) {
            if (n)
              for (r in vg)
                if ((i = Gm[r]) && jm(i, e)) try {
                  delete i[e]
                } catch (e) {}
            if (lg[e] && !n) return;
            try {
              return Zm(lg, e, n ? t : mg && lg[e] || t)
            } catch (e) {}
          }
          for (r in vg) !(i = Gm[r]) || i[e] && !n || Zm(i, e, t)
        }
      },
      getTypedArrayConstructor: yg,
      isView: function (e) {
        if (!Wm(e)) return !1;
        var t = qm(e);
        return "DataView" === t || jm(vg, t) || jm(_g, t)
      },
      isTypedArray: bg,
      TypedArray: lg,
      TypedArrayPrototype: cg
    },
    Sg = n,
    Mg = i,
    wg = function (e, t) {
      if (!t && !Nm) return !1;
      var n = !1;
      try {
        var r = {};
        r[Dm] = function () {
          return {
            next: function () {
              return {
                done: n = !0
              }
            }
          }
        }, e(r)
      } catch (e) {}
      return n
    },
    Tg = xg.NATIVE_ARRAY_BUFFER_VIEWS,
    Eg = Sg.ArrayBuffer,
    Ag = Sg.Int8Array,
    Cg = !Tg || !Mg((function () {
      Ag(1)
    })) || !Mg((function () {
      new Ag(-1)
    })) || !wg((function (e) {
      new Ag, new Ag(null), new Ag(1.5), new Ag(e)
    }), !0) || Mg((function () {
      return 1 !== new Ag(new Eg(2), 1, void 0).length
    })),
    Lg = $n,
    Rg = function (e, t, n) {
      for (var r in t) Lg(e, r, t[r], n);
      return e
    },
    Pg = Z,
    Dg = TypeError,
    Ng = function (e, t) {
      if (Pg(t, e)) return e;
      throw Dg("Incorrect invocation")
    },
    Og = rr,
    Ig = ur,
    Ug = RangeError,
    kg = function (e) {
      if (void 0 === e) return 0;
      var t = Og(e),
        n = Ig(t);
      if (t !== n) throw Ug("Wrong length or index");
      return n
    },
    zg = Array,
    Fg = Math.abs,
    Bg = Math.pow,
    Hg = Math.floor,
    Gg = Math.log,
    Vg = Math.LN2,
    Wg = {
      pack: function (e, t, n) {
        var r, i, a, o = zg(n),
          s = 8 * n - t - 1,
          l = (1 << s) - 1,
          c = l >> 1,
          u = 23 === t ? Bg(2, -24) - Bg(2, -77) : 0,
          h = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
          d = 0;
        for ((e = Fg(e)) != e || e === 1 / 0 ? (i = e != e ? 1 : 0, r = l) : (r = Hg(Gg(e) / Vg), e * (a = Bg(2, -r)) < 1 && (r--, a *= 2), (e += r + c >= 1 ? u / a : u * Bg(2, 1 - c)) * a >= 2 && (r++, a /= 2), r + c >= l ? (i = 0, r = l) : r + c >= 1 ? (i = (e * a - 1) * Bg(2, t), r += c) : (i = e * Bg(2, c - 1) * Bg(2, t), r = 0)); t >= 8;) o[d++] = 255 & i, i /= 256, t -= 8;
        for (r = r << t | i, s += t; s > 0;) o[d++] = 255 & r, r /= 256, s -= 8;
        return o[--d] |= 128 * h, o
      },
      unpack: function (e, t) {
        var n, r = e.length,
          i = 8 * r - t - 1,
          a = (1 << i) - 1,
          o = a >> 1,
          s = i - 7,
          l = r - 1,
          c = e[l--],
          u = 127 & c;
        for (c >>= 7; s > 0;) u = 256 * u + e[l--], s -= 8;
        for (n = u & (1 << -s) - 1, u >>= -s, s += t; s > 0;) n = 256 * n + e[l--], s -= 8;
        if (0 === u) u = 1 - o;
        else {
          if (u === a) return n ? NaN : c ? -1 / 0 : 1 / 0;
          n += Bg(2, t), u -= o
        }
        return (c ? -1 : 1) * n * Bg(2, u - t)
      }
    },
    jg = ke,
    qg = sr,
    Xg = dr,
    Yg = function (e) {
      for (var t = jg(this), n = Xg(t), r = arguments.length, i = qg(r > 1 ? arguments[1] : void 0, n), a = r > 2 ? arguments[2] : void 0, o = void 0 === a ? n : qg(a, n); o > i;) t[i++] = e;
      return t
    },
    Zg = ht,
    Kg = At,
    $g = g,
    Jg = function (e, t, n) {
      var r = Zg(t);
      r in e ? Kg.f(e, r, $g(0, n)) : e[r] = n
    },
    Qg = sr,
    ev = dr,
    tv = Jg,
    nv = Array,
    rv = Math.max,
    iv = function (e, t, n) {
      for (var r = ev(e), i = Qg(t, r), a = Qg(void 0 === n ? r : n, r), o = nv(rv(a - i, 0)), s = 0; i < a; i++, s++) tv(o, s, e[i]);
      return o.length = s, o
    },
    av = n,
    ov = x,
    sv = a,
    lv = Fm,
    cv = en,
    uv = qt,
    hv = Rg,
    dv = i,
    pv = Ng,
    fv = rr,
    mv = ur,
    gv = kg,
    vv = Wg,
    _v = la,
    yv = Ia,
    bv = Jn.f,
    xv = At.f,
    Sv = Yg,
    Mv = iv,
    wv = xa,
    Tv = cv.PROPER,
    Ev = cv.CONFIGURABLE,
    Av = Ln.get,
    Cv = Ln.set,
    Lv = "ArrayBuffer",
    Rv = "DataView",
    Pv = "prototype",
    Dv = "Wrong index",
    Nv = av[Lv],
    Ov = Nv,
    Iv = Ov && Ov[Pv],
    Uv = av[Rv],
    kv = Uv && Uv[Pv],
    zv = Object.prototype,
    Fv = av.Array,
    Bv = av.RangeError,
    Hv = ov(Sv),
    Gv = ov([].reverse),
    Vv = vv.pack,
    Wv = vv.unpack,
    jv = function (e) {
      return [255 & e]
    },
    qv = function (e) {
      return [255 & e, e >> 8 & 255]
    },
    Xv = function (e) {
      return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
    },
    Yv = function (e) {
      return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
    },
    Zv = function (e) {
      return Vv(e, 23, 4)
    },
    Kv = function (e) {
      return Vv(e, 52, 8)
    },
    $v = function (e, t) {
      xv(e[Pv], t, {
        get: function () {
          return Av(this)[t]
        }
      })
    },
    Jv = function (e, t, n, r) {
      var i = gv(n),
        a = Av(e);
      if (i + t > a.byteLength) throw Bv(Dv);
      var o = Av(a.buffer).bytes,
        s = i + a.byteOffset,
        l = Mv(o, s, s + t);
      return r ? l : Gv(l)
    },
    Qv = function (e, t, n, r, i, a) {
      var o = gv(n),
        s = Av(e);
      if (o + t > s.byteLength) throw Bv(Dv);
      for (var l = Av(s.buffer).bytes, c = o + s.byteOffset, u = r(+i), h = 0; h < t; h++) l[c + h] = u[a ? h : t - h - 1]
    };
  if (lv) {
    var e_ = Tv && Nv.name !== Lv;
    if (dv((function () {
        Nv(1)
      })) && dv((function () {
        new Nv(-1)
      })) && !dv((function () {
        return new Nv, new Nv(1.5), new Nv(NaN), 1 != Nv.length || e_ && !Ev
      }))) e_ && Ev && uv(Nv, "name", Lv);
    else {
      (Ov = function (e) {
        return pv(this, Iv), new Nv(gv(e))
      })[Pv] = Iv;
      for (var t_, n_ = bv(Nv), r_ = 0; n_.length > r_;)(t_ = n_[r_++]) in Ov || uv(Ov, t_, Nv[t_]);
      Iv.constructor = Ov
    }
    yv && _v(kv) !== zv && yv(kv, zv);
    var i_ = new Uv(new Ov(2)),
      a_ = ov(kv.setInt8);
    i_.setInt8(0, 2147483648), i_.setInt8(1, 2147483649), !i_.getInt8(0) && i_.getInt8(1) || hv(kv, {
      setInt8: function (e, t) {
        a_(this, e, t << 24 >> 24)
      },
      setUint8: function (e, t) {
        a_(this, e, t << 24 >> 24)
      }
    }, {
      unsafe: !0
    })
  } else Iv = (Ov = function (e) {
    pv(this, Iv);
    var t = gv(e);
    Cv(this, {
      bytes: Hv(Fv(t), 0),
      byteLength: t
    }), sv || (this.byteLength = t)
  })[Pv], kv = (Uv = function (e, t, n) {
    pv(this, kv), pv(e, Iv);
    var r = Av(e).byteLength,
      i = fv(t);
    if (i < 0 || i > r) throw Bv("Wrong offset");
    if (i + (n = void 0 === n ? r - i : mv(n)) > r) throw Bv("Wrong length");
    Cv(this, {
      buffer: e,
      byteLength: n,
      byteOffset: i
    }), sv || (this.buffer = e, this.byteLength = n, this.byteOffset = i)
  })[Pv], sv && ($v(Ov, "byteLength"), $v(Uv, "buffer"), $v(Uv, "byteLength"), $v(Uv, "byteOffset")), hv(kv, {
    getInt8: function (e) {
      return Jv(this, 1, e)[0] << 24 >> 24
    },
    getUint8: function (e) {
      return Jv(this, 1, e)[0]
    },
    getInt16: function (e) {
      var t = Jv(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
      return (t[1] << 8 | t[0]) << 16 >> 16
    },
    getUint16: function (e) {
      var t = Jv(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
      return t[1] << 8 | t[0]
    },
    getInt32: function (e) {
      return Yv(Jv(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
    },
    getUint32: function (e) {
      return Yv(Jv(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
    },
    getFloat32: function (e) {
      return Wv(Jv(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
    },
    getFloat64: function (e) {
      return Wv(Jv(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
    },
    setInt8: function (e, t) {
      Qv(this, 1, e, jv, t)
    },
    setUint8: function (e, t) {
      Qv(this, 1, e, jv, t)
    },
    setInt16: function (e, t) {
      Qv(this, 2, e, qv, t, arguments.length > 2 ? arguments[2] : void 0)
    },
    setUint16: function (e, t) {
      Qv(this, 2, e, qv, t, arguments.length > 2 ? arguments[2] : void 0)
    },
    setInt32: function (e, t) {
      Qv(this, 4, e, Xv, t, arguments.length > 2 ? arguments[2] : void 0)
    },
    setUint32: function (e, t) {
      Qv(this, 4, e, Xv, t, arguments.length > 2 ? arguments[2] : void 0)
    },
    setFloat32: function (e, t) {
      Qv(this, 4, e, Zv, t, arguments.length > 2 ? arguments[2] : void 0)
    },
    setFloat64: function (e, t) {
      Qv(this, 8, e, Kv, t, arguments.length > 2 ? arguments[2] : void 0)
    }
  });
  wv(Ov, Lv), wv(Uv, Rv);
  var o_ = {
      ArrayBuffer: Ov,
      DataView: Uv
    },
    s_ = W,
    l_ = Math.floor,
    c_ = Number.isInteger || function (e) {
      return !s_(e) && isFinite(e) && l_(e) === e
    },
    u_ = rr,
    h_ = RangeError,
    d_ = function (e) {
      var t = u_(e);
      if (t < 0) throw h_("The argument can't be less than 0");
      return t
    },
    p_ = RangeError,
    f_ = function (e, t) {
      var n = d_(e);
      if (n % t) throw p_("Wrong offset");
      return n
    },
    m_ = _e,
    g_ = o,
    v_ = Es(Es.bind),
    __ = function (e, t) {
      return m_(e), void 0 === t ? e : g_ ? v_(e, t) : function () {
        return e.apply(t, arguments)
      }
    },
    y_ = x,
    b_ = i,
    x_ = H,
    S_ = Go,
    M_ = ln,
    w_ = function () {},
    T_ = [],
    E_ = Y("Reflect", "construct"),
    A_ = /^\s*(?:class|function)\b/,
    C_ = y_(A_.exec),
    L_ = !A_.exec(w_),
    R_ = function (e) {
      if (!x_(e)) return !1;
      try {
        return E_(w_, T_, e), !0
      } catch (e) {
        return !1
      }
    },
    P_ = function (e) {
      if (!x_(e)) return !1;
      switch (S_(e)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1
      }
      try {
        return L_ || !!C_(A_, M_(e))
      } catch (e) {
        return !0
      }
    };
  P_.sham = !0;
  var D_ = !E_ || b_((function () {
      var e;
      return R_(R_.call) || !R_(Object) || !R_((function () {
        e = !0
      })) || e
    })) ? P_ : R_,
    N_ = D_,
    O_ = fe,
    I_ = TypeError,
    U_ = Go,
    k_ = xe,
    z_ = P,
    F_ = Qi,
    B_ = et("iterator"),
    H_ = function (e) {
      if (!z_(e)) return k_(e, B_) || k_(e, "@@iterator") || F_[U_(e)]
    },
    G_ = c,
    V_ = _e,
    W_ = Dt,
    j_ = fe,
    q_ = H_,
    X_ = TypeError,
    Y_ = function (e, t) {
      var n = arguments.length < 2 ? q_(e) : t;
      if (V_(n)) return W_(G_(n, e));
      throw X_(j_(e) + " is not iterable")
    },
    Z_ = Qi,
    K_ = et("iterator"),
    $_ = Array.prototype,
    J_ = function (e) {
      return void 0 !== e && (Z_.Array === e || $_[K_] === e)
    },
    Q_ = Go,
    ey = lt,
    ty = TypeError,
    ny = function (e) {
      var t = ey(e, "number");
      if ("number" == typeof t) throw ty("Can't convert number to bigint");
      return BigInt(t)
    },
    ry = __,
    iy = c,
    ay = function (e) {
      if (N_(e)) return e;
      throw I_(O_(e) + " is not a constructor")
    },
    oy = ke,
    sy = dr,
    ly = Y_,
    cy = H_,
    uy = J_,
    hy = function (e) {
      var t = Q_(e);
      return "BigInt64Array" == t || "BigUint64Array" == t
    },
    dy = xg.aTypedArrayConstructor,
    py = ny,
    fy = ri,
    my = D_,
    gy = W,
    vy = et("species"),
    _y = Array,
    yy = function (e) {
      var t;
      return fy(e) && (t = e.constructor, (my(t) && (t === _y || fy(t.prototype)) || gy(t) && null === (t = t[vy])) && (t = void 0)), void 0 === t ? _y : t
    },
    by = __,
    xy = R,
    Sy = ke,
    My = dr,
    wy = function (e, t) {
      return new(yy(e))(0 === t ? 0 : t)
    },
    Ty = x([].push),
    Ey = function (e) {
      var t = 1 == e,
        n = 2 == e,
        r = 3 == e,
        i = 4 == e,
        a = 6 == e,
        o = 7 == e,
        s = 5 == e || a;
      return function (l, c, u, h) {
        for (var d, p, f = Sy(l), m = xy(f), g = by(c, u), v = My(m), _ = 0, y = h || wy, b = t ? y(l, v) : n || o ? y(l, 0) : void 0; v > _; _++)
          if ((s || _ in m) && (p = g(d = m[_], _, f), e))
            if (t) b[_] = p;
            else if (p) switch (e) {
          case 3:
            return !0;
          case 5:
            return d;
          case 6:
            return _;
          case 2:
            Ty(b, d)
        } else switch (e) {
          case 4:
            return !1;
          case 7:
            Ty(b, d)
        }
        return a ? -1 : r || i ? i : b
      }
    },
    Ay = {
      forEach: Ey(0),
      map: Ey(1),
      filter: Ey(2),
      some: Ey(3),
      every: Ey(4),
      find: Ey(5),
      findIndex: Ey(6),
      filterReject: Ey(7)
    },
    Cy = Y,
    Ly = At,
    Ry = a,
    Py = et("species"),
    Dy = ti,
    Ny = n,
    Oy = c,
    Iy = a,
    Uy = Cg,
    ky = xg,
    zy = o_,
    Fy = Ng,
    By = g,
    Hy = qt,
    Gy = c_,
    Vy = ur,
    Wy = kg,
    jy = f_,
    qy = ht,
    Xy = Be,
    Yy = Go,
    Zy = W,
    Ky = de,
    $y = Vi,
    Jy = Z,
    Qy = Ia,
    eb = Jn.f,
    tb = function (e) {
      var t, n, r, i, a, o, s, l, c = ay(this),
        u = oy(e),
        h = arguments.length,
        d = h > 1 ? arguments[1] : void 0,
        p = void 0 !== d,
        f = cy(u);
      if (f && !uy(f))
        for (l = (s = ly(u, f)).next, u = []; !(o = iy(l, s)).done;) u.push(o.value);
      for (p && h > 2 && (d = ry(d, arguments[2])), n = sy(u), r = new(dy(c))(n), i = hy(r), t = 0; n > t; t++) a = p ? d(u[t], t) : u[t], r[t] = i ? py(a) : +a;
      return r
    },
    nb = Ay.forEach,
    rb = function (e) {
      var t = Cy(e),
        n = Ly.f;
      Ry && t && !t[Py] && n(t, Py, {
        configurable: !0,
        get: function () {
          return this
        }
      })
    },
    ib = At,
    ab = r,
    ob = Fu,
    sb = Ln.get,
    lb = Ln.set,
    cb = Ln.enforce,
    ub = ib.f,
    hb = ab.f,
    db = Math.round,
    pb = Ny.RangeError,
    fb = zy.ArrayBuffer,
    mb = fb.prototype,
    gb = zy.DataView,
    vb = ky.NATIVE_ARRAY_BUFFER_VIEWS,
    _b = ky.TYPED_ARRAY_TAG,
    yb = ky.TypedArray,
    bb = ky.TypedArrayPrototype,
    xb = ky.aTypedArrayConstructor,
    Sb = ky.isTypedArray,
    Mb = "BYTES_PER_ELEMENT",
    wb = "Wrong length",
    Tb = function (e, t) {
      xb(e);
      for (var n = 0, r = t.length, i = new e(r); r > n;) i[n] = t[n++];
      return i
    },
    Eb = function (e, t) {
      ub(e, t, {
        get: function () {
          return sb(this)[t]
        }
      })
    },
    Ab = function (e) {
      var t;
      return Jy(mb, e) || "ArrayBuffer" == (t = Yy(e)) || "SharedArrayBuffer" == t
    },
    Cb = function (e, t) {
      return Sb(e) && !Ky(t) && t in e && Gy(+t) && t >= 0
    },
    Lb = function (e, t) {
      return t = qy(t), Cb(e, t) ? By(2, e[t]) : hb(e, t)
    },
    Rb = function (e, t, n) {
      return t = qy(t), !(Cb(e, t) && Zy(n) && Xy(n, "value")) || Xy(n, "get") || Xy(n, "set") || n.configurable || Xy(n, "writable") && !n.writable || Xy(n, "enumerable") && !n.enumerable ? ub(e, t, n) : (e[t] = n.value, e)
    };
  Iy ? (vb || (ab.f = Lb, ib.f = Rb, Eb(bb, "buffer"), Eb(bb, "byteOffset"), Eb(bb, "byteLength"), Eb(bb, "length")), Dy({
    target: "Object",
    stat: !0,
    forced: !vb
  }, {
    getOwnPropertyDescriptor: Lb,
    defineProperty: Rb
  }), Pm.exports = function (e, t, n) {
    var r = e.match(/\d+$/)[0] / 8,
      i = e + (n ? "Clamped" : "") + "Array",
      a = "get" + e,
      o = "set" + e,
      s = Ny[i],
      l = s,
      c = l && l.prototype,
      u = {},
      h = function (e, t) {
        ub(e, t, {
          get: function () {
            return function (e, t) {
              var n = sb(e);
              return n.view[a](t * r + n.byteOffset, !0)
            }(this, t)
          },
          set: function (e) {
            return function (e, t, i) {
              var a = sb(e);
              n && (i = (i = db(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), a.view[o](t * r + a.byteOffset, i, !0)
            }(this, t, e)
          },
          enumerable: !0
        })
      };
    vb ? Uy && (l = t((function (e, t, n, i) {
      return Fy(e, c), ob(Zy(t) ? Ab(t) ? void 0 !== i ? new s(t, jy(n, r), i) : void 0 !== n ? new s(t, jy(n, r)) : new s(t) : Sb(t) ? Tb(l, t) : Oy(tb, l, t) : new s(Wy(t)), e, l)
    })), Qy && Qy(l, yb), nb(eb(s), (function (e) {
      e in l || Hy(l, e, s[e])
    })), l.prototype = c) : (l = t((function (e, t, n, i) {
      Fy(e, c);
      var a, o, s, u = 0,
        d = 0;
      if (Zy(t)) {
        if (!Ab(t)) return Sb(t) ? Tb(l, t) : Oy(tb, l, t);
        a = t, d = jy(n, r);
        var p = t.byteLength;
        if (void 0 === i) {
          if (p % r) throw pb(wb);
          if ((o = p - d) < 0) throw pb(wb)
        } else if ((o = Vy(i) * r) + d > p) throw pb(wb);
        s = o / r
      } else s = Wy(t), a = new fb(o = s * r);
      for (lb(e, {
          buffer: a,
          byteOffset: d,
          byteLength: o,
          length: s,
          view: new gb(a)
        }); u < s;) h(e, u++)
    })), Qy && Qy(l, yb), c = l.prototype = $y(bb)), c.constructor !== l && Hy(c, "constructor", l), cb(c).TypedArrayConstructor = l, _b && Hy(c, _b, i);
    var d = l != s;
    u[i] = l, Dy({
      global: !0,
      constructor: !0,
      forced: d,
      sham: !vb
    }, u), Mb in l || Hy(l, Mb, r), Mb in c || Hy(c, Mb, r), rb(i)
  }) : Pm.exports = function () {}, Rm("Float32", (function (e) {
    return function (t, n, r) {
      return e(this, t, n, r)
    }
  }));
  var Pb = dr,
    Db = rr,
    Nb = xg.aTypedArray;
  (0, xg.exportTypedArrayMethod)("at", (function (e) {
    var t = Nb(this),
      n = Pb(t),
      r = Db(e),
      i = r >= 0 ? r : n + r;
    return i < 0 || i >= n ? void 0 : t[i]
  }));
  var Ob = Yg,
    Ib = ny,
    Ub = Go,
    kb = c,
    zb = i,
    Fb = xg.aTypedArray,
    Bb = xg.exportTypedArrayMethod,
    Hb = x("".slice);
  Bb("fill", (function (e) {
    var t = arguments.length;
    Fb(this);
    var n = "Big" === Hb(Ub(this), 0, 3) ? Ib(e) : +e;
    return kb(Ob, this, n, t > 1 ? arguments[1] : void 0, t > 2 ? arguments[2] : void 0)
  }), zb((function () {
    var e = 0;
    return new Int8Array(2).fill({
      valueOf: function () {
        return e++
      }
    }), 1 !== e
  })));
  var Gb = __,
    Vb = R,
    Wb = ke,
    jb = dr,
    qb = function (e) {
      var t = 1 == e;
      return function (n, r, i) {
        for (var a, o = Wb(n), s = Vb(o), l = Gb(r, i), c = jb(s); c-- > 0;)
          if (l(a = s[c], c, o)) switch (e) {
            case 0:
              return a;
            case 1:
              return c
          }
        return t ? -1 : void 0
      }
    },
    Xb = {
      findLast: qb(0),
      findLastIndex: qb(1)
    },
    Yb = Xb.findLast,
    Zb = xg.aTypedArray;
  (0, xg.exportTypedArrayMethod)("findLast", (function (e) {
    return Yb(Zb(this), e, arguments.length > 1 ? arguments[1] : void 0)
  }));
  var Kb = Xb.findLastIndex,
    $b = xg.aTypedArray;
  (0, xg.exportTypedArrayMethod)("findLastIndex", (function (e) {
    return Kb($b(this), e, arguments.length > 1 ? arguments[1] : void 0)
  }));
  var Jb = n,
    Qb = c,
    ex = xg,
    tx = dr,
    nx = f_,
    rx = ke,
    ix = i,
    ax = Jb.RangeError,
    ox = Jb.Int8Array,
    sx = ox && ox.prototype,
    lx = sx && sx.set,
    cx = ex.aTypedArray,
    ux = ex.exportTypedArrayMethod,
    hx = !ix((function () {
      var e = new Uint8ClampedArray(2);
      return Qb(lx, e, {
        length: 1,
        0: 3
      }, 1), 3 !== e[1]
    })),
    dx = hx && ex.NATIVE_ARRAY_BUFFER_VIEWS && ix((function () {
      var e = new ox(2);
      return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1]
    }));
  ux("set", (function (e) {
    cx(this);
    var t = nx(arguments.length > 1 ? arguments[1] : void 0, 1),
      n = rx(e);
    if (hx) return Qb(lx, this, n, t);
    var r = this.length,
      i = tx(n),
      a = 0;
    if (i + t > r) throw ax("Wrong length");
    for (; a < i;) this[t + a] = n[a++]
  }), !hx || dx);
  var px = iv,
    fx = Math.floor,
    mx = function (e, t) {
      var n = e.length,
        r = fx(n / 2);
      return n < 8 ? gx(e, t) : vx(e, mx(px(e, 0, r), t), mx(px(e, r), t), t)
    },
    gx = function (e, t) {
      for (var n, r, i = e.length, a = 1; a < i;) {
        for (r = a, n = e[a]; r && t(e[r - 1], n) > 0;) e[r] = e[--r];
        r !== a++ && (e[r] = n)
      }
      return e
    },
    vx = function (e, t, n, r) {
      for (var i = t.length, a = n.length, o = 0, s = 0; o < i || s < a;) e[o + s] = o < i && s < a ? r(t[o], n[s]) <= 0 ? t[o++] : n[s++] : o < i ? t[o++] : n[s++];
      return e
    },
    _x = mx,
    yx = K.match(/firefox\/(\d+)/i),
    bx = !!yx && +yx[1],
    xx = /MSIE|Trident/.test(K),
    Sx = K.match(/AppleWebKit\/(\d+)\./),
    Mx = !!Sx && +Sx[1],
    wx = Es,
    Tx = i,
    Ex = _e,
    Ax = _x,
    Cx = bx,
    Lx = xx,
    Rx = re,
    Px = Mx,
    Dx = xg.aTypedArray,
    Nx = xg.exportTypedArrayMethod,
    Ox = n.Uint16Array,
    Ix = Ox && wx(Ox.prototype.sort),
    Ux = !(!Ix || Tx((function () {
      Ix(new Ox(2), null)
    })) && Tx((function () {
      Ix(new Ox(2), {})
    }))),
    kx = !!Ix && !Tx((function () {
      if (Rx) return Rx < 74;
      if (Cx) return Cx < 67;
      if (Lx) return !0;
      if (Px) return Px < 602;
      var e, t, n = new Ox(516),
        r = Array(516);
      for (e = 0; e < 516; e++) t = e % 4, n[e] = 515 - e, r[e] = e - 2 * t + 3;
      for (Ix(n, (function (e, t) {
          return (e / 4 | 0) - (t / 4 | 0)
        })), e = 0; e < 516; e++)
        if (n[e] !== r[e]) return !0
    }));
  Nx("sort", (function (e) {
    return void 0 !== e && Ex(e), kx ? Ix(this, e) : Ax(Dx(this), function (e) {
      return function (t, n) {
        return void 0 !== e ? +e(t, n) || 0 : n != n ? -1 : t != t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : -1 : t > n
      }
    }(e))
  }), !kx || Ux), Rm("Uint16", (function (e) {
    return function (t, n, r) {
      return e(this, t, n, r)
    }
  })), Rm("Uint8", (function (e) {
    return function (t, n, r) {
      return e(this, t, n, r)
    }
  })), Rm("Int16", (function (e) {
    return function (t, n, r) {
      return e(this, t, n, r)
    }
  })), Rm("Int8", (function (e) {
    return function (t, n, r) {
      return e(this, t, n, r)
    }
  }));
  const zx = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"],
    Fx = Math.PI / 180,
    Bx = 180 / Math.PI;

  function Hx() {
    const e = 4294967295 * Math.random() | 0,
      t = 4294967295 * Math.random() | 0,
      n = 4294967295 * Math.random() | 0,
      r = 4294967295 * Math.random() | 0;
    return (zx[255 & e] + zx[e >> 8 & 255] + zx[e >> 16 & 255] + zx[e >> 24 & 255] + "-" + zx[255 & t] + zx[t >> 8 & 255] + "-" + zx[t >> 16 & 15 | 64] + zx[t >> 24 & 255] + "-" + zx[63 & n | 128] + zx[n >> 8 & 255] + "-" + zx[n >> 16 & 255] + zx[n >> 24 & 255] + zx[255 & r] + zx[r >> 8 & 255] + zx[r >> 16 & 255] + zx[r >> 24 & 255]).toLowerCase()
  }

  function Gx(e, t, n) {
    return Math.max(t, Math.min(n, e))
  }

  function Vx(e, t, n) {
    return (1 - n) * e + n * t
  }

  function Wx(e) {
    return 0 == (e & e - 1) && 0 !== e
  }

  function jx(e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
  }

  function qx(e, t) {
    switch (t.constructor) {
      case Float32Array:
        return e;
      case Uint16Array:
        return e / 65535;
      case Uint8Array:
        return e / 255;
      case Int16Array:
        return Math.max(e / 32767, -1);
      case Int8Array:
        return Math.max(e / 127, -1);
      default:
        throw new Error("Invalid component type.")
    }
  }

  function Xx(e, t) {
    switch (t.constructor) {
      case Float32Array:
        return e;
      case Uint16Array:
        return Math.round(65535 * e);
      case Uint8Array:
        return Math.round(255 * e);
      case Int16Array:
        return Math.round(32767 * e);
      case Int8Array:
        return Math.round(127 * e);
      default:
        throw new Error("Invalid component type.")
    }
  }
  class Yx {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      Yx.prototype.isVector2 = !0, this.x = e, this.y = t
    }
    get width() {
      return this.x
    }
    set width(e) {
      this.x = e
    }
    get height() {
      return this.y
    }
    set height(e) {
      this.y = e
    }
    set(e, t) {
      return this.x = e, this.y = t, this
    }
    setScalar(e) {
      return this.x = e, this.y = e, this
    }
    setX(e) {
      return this.x = e, this
    }
    setY(e) {
      return this.y = e, this
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw new Error("index is out of range: " + e)
      }
      return this
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + e)
      }
    }
    clone() {
      return new this.constructor(this.x, this.y)
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this
    }
    addScalar(e) {
      return this.x += e, this.y += e, this
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this
    }
    divide(e) {
      return this.x /= e.x, this.y /= e.y, this
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e)
    }
    applyMatrix3(e) {
      const t = this.x,
        n = this.y,
        r = e.elements;
      return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
    }
    clamp(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
    }
    clampScalar(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    }
    roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this
    }
    dot(e) {
      return this.x * e.x + this.y * e.y
    }
    cross(e) {
      return this.x * e.y - this.y * e.x
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
      return this.divideScalar(this.length() || 1)
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
      const t = this.x - e.x,
        n = this.y - e.y;
      return t * t + n * n
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this
    }
    equals(e) {
      return e.x === this.x && e.y === this.y
    }
    fromArray(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return this.x = e[t], this.y = e[t + 1], this
    }
    toArray() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return e[t] = this.x, e[t + 1] = this.y, e
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this
    }
    rotateAround(e, t) {
      const n = Math.cos(t),
        r = Math.sin(t),
        i = this.x - e.x,
        a = this.y - e.y;
      return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this
    }*[Symbol.iterator]() {
      yield this.x, yield this.y
    }
  }
  class Zx {
    constructor() {
      Zx.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
    }
    set(e, t, n, r, i, a, o, s, l) {
      const c = this.elements;
      return c[0] = e, c[1] = r, c[2] = o, c[3] = t, c[4] = i, c[5] = s, c[6] = n, c[7] = a, c[8] = l, this
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    }
    copy(e) {
      const t = this.elements,
        n = e.elements;
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
    }
    extractBasis(e, t, n) {
      return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
    }
    setFromMatrix4(e) {
      const t = e.elements;
      return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    }
    multiply(e) {
      return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
      const n = e.elements,
        r = t.elements,
        i = this.elements,
        a = n[0],
        o = n[3],
        s = n[6],
        l = n[1],
        c = n[4],
        u = n[7],
        h = n[2],
        d = n[5],
        p = n[8],
        f = r[0],
        m = r[3],
        g = r[6],
        v = r[1],
        _ = r[4],
        y = r[7],
        b = r[2],
        x = r[5],
        S = r[8];
      return i[0] = a * f + o * v + s * b, i[3] = a * m + o * _ + s * x, i[6] = a * g + o * y + s * S, i[1] = l * f + c * v + u * b, i[4] = l * m + c * _ + u * x, i[7] = l * g + c * y + u * S, i[2] = h * f + d * v + p * b, i[5] = h * m + d * _ + p * x, i[8] = h * g + d * y + p * S, this
    }
    multiplyScalar(e) {
      const t = this.elements;
      return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
    }
    determinant() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        l = e[7],
        c = e[8];
      return t * a * c - t * o * l - n * i * c + n * o * s + r * i * l - r * a * s
    }
    invert() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        l = e[7],
        c = e[8],
        u = c * a - o * l,
        h = o * s - c * i,
        d = l * i - a * s,
        p = t * u + n * h + r * d;
      if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const f = 1 / p;
      return e[0] = u * f, e[1] = (r * l - c * n) * f, e[2] = (o * n - r * a) * f, e[3] = h * f, e[4] = (c * t - r * s) * f, e[5] = (r * i - o * t) * f, e[6] = d * f, e[7] = (n * s - l * t) * f, e[8] = (a * t - n * i) * f, this
    }
    transpose() {
      let e;
      const t = this.elements;
      return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
    }
    getNormalMatrix(e) {
      return this.setFromMatrix4(e).invert().transpose()
    }
    transposeIntoArray(e) {
      const t = this.elements;
      return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
    }
    setUvTransform(e, t, n, r, i, a, o) {
      const s = Math.cos(i),
        l = Math.sin(i);
      return this.set(n * s, n * l, -n * (s * a + l * o) + a + e, -r * l, r * s, -r * (-l * a + s * o) + o + t, 0, 0, 1), this
    }
    scale(e, t) {
      return this.premultiply(Kx.makeScale(e, t)), this
    }
    rotate(e) {
      return this.premultiply(Kx.makeRotation(-e)), this
    }
    translate(e, t) {
      return this.premultiply(Kx.makeTranslation(e, t)), this
    }
    makeTranslation(e, t) {
      return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this
    }
    makeRotation(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this
    }
    makeScale(e, t) {
      return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this
    }
    equals(e) {
      const t = this.elements,
        n = e.elements;
      for (let e = 0; e < 9; e++)
        if (t[e] !== n[e]) return !1;
      return !0
    }
    fromArray(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
      return this
    }
    toArray() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      const n = this.elements;
      return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
    }
    clone() {
      return (new this.constructor).fromArray(this.elements)
    }
  }
  const Kx = new Zx;

  function $x(e) {
    for (let t = e.length - 1; t >= 0; --t)
      if (e[t] >= 65535) return !0;
    return !1
  }

  function Jx(e) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", e)
  }

  function Qx(e) {
    return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4)
  }

  function eS(e) {
    return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055
  }
  Rm("Uint8", (function (e) {
    return function (t, n, r) {
      return e(this, t, n, r)
    }
  }), !0), Rm("Int32", (function (e) {
    return function (t, n, r) {
      return e(this, t, n, r)
    }
  })), Rm("Uint32", (function (e) {
    return function (t, n, r) {
      return e(this, t, n, r)
    }
  })), Rm("Float64", (function (e) {
    return function (t, n, r) {
      return e(this, t, n, r)
    }
  }));
  const tS = {
      [Mm]: {
        [wm]: Qx
      },
      [wm]: {
        [Mm]: eS
      }
    },
    nS = {
      legacyMode: !0,
      get workingColorSpace() {
        return wm
      },
      set workingColorSpace(e) {
        console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
      },
      convert: function (e, t, n) {
        if (this.legacyMode || t === n || !t || !n) return e;
        if (tS[t] && void 0 !== tS[t][n]) {
          const r = tS[t][n];
          return e.r = r(e.r), e.g = r(e.g), e.b = r(e.b), e
        }
        throw new Error("Unsupported color space conversion.")
      },
      fromWorkingColorSpace: function (e, t) {
        return this.convert(e, this.workingColorSpace, t)
      },
      toWorkingColorSpace: function (e, t) {
        return this.convert(e, t, this.workingColorSpace)
      }
    },
    rS = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    },
    iS = {
      r: 0,
      g: 0,
      b: 0
    },
    aS = {
      h: 0,
      s: 0,
      l: 0
    },
    oS = {
      h: 0,
      s: 0,
      l: 0
    };

  function sS(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e
  }

  function lS(e, t) {
    return t.r = e.r, t.g = e.g, t.b = e.b, t
  }
  class cS {
    constructor(e, t, n) {
      return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n)
    }
    set(e) {
      return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
    }
    setScalar(e) {
      return this.r = e, this.g = e, this.b = e, this
    }
    setHex(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mm;
      return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, nS.toWorkingColorSpace(this, t), this
    }
    setRGB(e, t, n) {
      let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nS.workingColorSpace;
      return this.r = e, this.g = t, this.b = n, nS.toWorkingColorSpace(this, r), this
    }
    setHSL(e, t, n) {
      let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nS.workingColorSpace;
      if (e = function (e, t) {
          return (e % t + t) % t
        }(e, 1), t = Gx(t, 0, 1), n = Gx(n, 0, 1), 0 === t) this.r = this.g = this.b = n;
      else {
        const r = n <= .5 ? n * (1 + t) : n + t - n * t,
          i = 2 * n - r;
        this.r = sS(i, r, e + 1 / 3), this.g = sS(i, r, e), this.b = sS(i, r, e - 1 / 3)
      }
      return nS.toWorkingColorSpace(this, r), this
    }
    setStyle(e) {
      let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mm;

      function r(t) {
        void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
      }
      if (t = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
        let e;
        const i = t[1],
          a = t[2];
        switch (i) {
          case "rgb":
          case "rgba":
            if (e = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(e[1], 10)) / 255, this.g = Math.min(255, parseInt(e[2], 10)) / 255, this.b = Math.min(255, parseInt(e[3], 10)) / 255, nS.toWorkingColorSpace(this, n), r(e[4]), this;
            if (e = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(e[1], 10)) / 100, this.g = Math.min(100, parseInt(e[2], 10)) / 100, this.b = Math.min(100, parseInt(e[3], 10)) / 100, nS.toWorkingColorSpace(this, n), r(e[4]), this;
            break;
          case "hsl":
          case "hsla":
            if (e = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
              const t = parseFloat(e[1]) / 360,
                i = parseFloat(e[2]) / 100,
                a = parseFloat(e[3]) / 100;
              return r(e[4]), this.setHSL(t, i, a, n)
            }
        }
      } else if (t = /^\#([A-Fa-f\d]+)$/.exec(e)) {
        const e = t[1],
          r = e.length;
        if (3 === r) return this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255, this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255, this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255, nS.toWorkingColorSpace(this, n), this;
        if (6 === r) return this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255, this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255, this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255, nS.toWorkingColorSpace(this, n), this
      }
      return e && e.length > 0 ? this.setColorName(e, n) : this
    }
    setColorName(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mm;
      const n = rS[e.toLowerCase()];
      return void 0 !== n ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b)
    }
    copy(e) {
      return this.r = e.r, this.g = e.g, this.b = e.b, this
    }
    copySRGBToLinear(e) {
      return this.r = Qx(e.r), this.g = Qx(e.g), this.b = Qx(e.b), this
    }
    copyLinearToSRGB(e) {
      return this.r = eS(e.r), this.g = eS(e.g), this.b = eS(e.b), this
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this
    }
    getHex() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mm;
      return nS.fromWorkingColorSpace(lS(this, iS), e), Gx(255 * iS.r, 0, 255) << 16 ^ Gx(255 * iS.g, 0, 255) << 8 ^ Gx(255 * iS.b, 0, 255) << 0
    }
    getHexString() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mm;
      return ("000000" + this.getHex(e).toString(16)).slice(-6)
    }
    getHSL(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nS.workingColorSpace;
      nS.fromWorkingColorSpace(lS(this, iS), t);
      const n = iS.r,
        r = iS.g,
        i = iS.b,
        a = Math.max(n, r, i),
        o = Math.min(n, r, i);
      let s, l;
      const c = (o + a) / 2;
      if (o === a) s = 0, l = 0;
      else {
        const e = a - o;
        switch (l = c <= .5 ? e / (a + o) : e / (2 - a - o), a) {
          case n:
            s = (r - i) / e + (r < i ? 6 : 0);
            break;
          case r:
            s = (i - n) / e + 2;
            break;
          case i:
            s = (n - r) / e + 4
        }
        s /= 6
      }
      return e.h = s, e.s = l, e.l = c, e
    }
    getRGB(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nS.workingColorSpace;
      return nS.fromWorkingColorSpace(lS(this, iS), t), e.r = iS.r, e.g = iS.g, e.b = iS.b, e
    }
    getStyle() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mm;
      return nS.fromWorkingColorSpace(lS(this, iS), e), e !== Mm ? "color(".concat(e, " ").concat(iS.r, " ").concat(iS.g, " ").concat(iS.b, ")") : "rgb(".concat(255 * iS.r | 0, ",").concat(255 * iS.g | 0, ",").concat(255 * iS.b | 0, ")")
    }
    offsetHSL(e, t, n) {
      return this.getHSL(aS), aS.h += e, aS.s += t, aS.l += n, this.setHSL(aS.h, aS.s, aS.l), this
    }
    add(e) {
      return this.r += e.r, this.g += e.g, this.b += e.b, this
    }
    addColors(e, t) {
      return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
    }
    addScalar(e) {
      return this.r += e, this.g += e, this.b += e, this
    }
    sub(e) {
      return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
    }
    multiply(e) {
      return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
    }
    multiplyScalar(e) {
      return this.r *= e, this.g *= e, this.b *= e, this
    }
    lerp(e, t) {
      return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
    }
    lerpColors(e, t, n) {
      return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this
    }
    lerpHSL(e, t) {
      this.getHSL(aS), e.getHSL(oS);
      const n = Vx(aS.h, oS.h, t),
        r = Vx(aS.s, oS.s, t),
        i = Vx(aS.l, oS.l, t);
      return this.setHSL(n, r, i), this
    }
    equals(e) {
      return e.r === this.r && e.g === this.g && e.b === this.b
    }
    fromArray(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
    }
    toArray() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
    }
    fromBufferAttribute(e, t) {
      return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this
    }
    toJSON() {
      return this.getHex()
    }*[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b
    }
  }
  let uS;
  cS.NAMES = rS;
  class hS {
    static getDataURL(e) {
      if (/^data:/i.test(e.src)) return e.src;
      if ("undefined" == typeof HTMLCanvasElement) return e.src;
      let t;
      if (e instanceof HTMLCanvasElement) t = e;
      else {
        void 0 === uS && (uS = Jx("canvas")), uS.width = e.width, uS.height = e.height;
        const n = uS.getContext("2d");
        e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = uS
      }
      return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
    }
    static sRGBToLinear(e) {
      if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
        const t = Jx("canvas");
        t.width = e.width, t.height = e.height;
        const n = t.getContext("2d");
        n.drawImage(e, 0, 0, e.width, e.height);
        const r = n.getImageData(0, 0, e.width, e.height),
          i = r.data;
        for (let e = 0; e < i.length; e++) i[e] = 255 * Qx(i[e] / 255);
        return n.putImageData(r, 0, 0), t
      }
      if (e.data) {
        const t = e.data.slice(0);
        for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(255 * Qx(t[e] / 255)) : t[e] = Qx(t[e]);
        return {
          data: t,
          width: e.width,
          height: e.height
        }
      }
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e
    }
  }
  class dS {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      this.isSource = !0, this.uuid = Hx(), this.data = e, this.version = 0
    }
    set needsUpdate(e) {
      !0 === e && this.version++
    }
    toJSON(e) {
      const t = void 0 === e || "string" == typeof e;
      if (!t && void 0 !== e.images[this.uuid]) return e.images[this.uuid];
      const n = {
          uuid: this.uuid,
          url: ""
        },
        r = this.data;
      if (null !== r) {
        let e;
        if (Array.isArray(r)) {
          e = [];
          for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(pS(r[t].image)) : e.push(pS(r[t]))
        } else e = pS(r);
        n.url = e
      }
      return t || (e.images[this.uuid] = n), n
    }
  }

  function pS(e) {
    return "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap ? hS.getDataURL(e) : e.data ? {
      data: Array.from(e.data),
      width: e.width,
      height: e.height,
      type: e.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
  }
  let fS = 0;
  class mS extends Cm {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mS.DEFAULT_IMAGE,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mS.DEFAULT_MAPPING,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : df,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : df,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : vf,
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : yf,
        o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Df,
        s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : bf,
        l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : mS.DEFAULT_ANISOTROPY,
        c = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : _m;
      super(), this.isTexture = !0, Object.defineProperty(this, "id", {
        value: fS++
      }), this.uuid = Hx(), this.name = "", this.source = new dS(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = r, this.magFilter = i, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = s, this.offset = new Yx(0, 0), this.repeat = new Yx(1, 1), this.center = new Yx(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Zx, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1
    }
    get image() {
      return this.source.data
    }
    set image(e) {
      this.source.data = e
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    clone() {
      return (new this.constructor).copy(this)
    }
    copy(e) {
      return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this
    }
    toJSON(e) {
      const t = void 0 === e || "string" == typeof e;
      if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
      const n = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(e).uuid,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
    transformUv(e) {
      if (300 !== this.mapping) return e;
      if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
        case hf:
          e.x = e.x - Math.floor(e.x);
          break;
        case df:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case pf:
          1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
      }
      if (e.y < 0 || e.y > 1) switch (this.wrapT) {
        case hf:
          e.y = e.y - Math.floor(e.y);
          break;
        case df:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case pf:
          1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
      }
      return this.flipY && (e.y = 1 - e.y), e
    }
    set needsUpdate(e) {
      !0 === e && (this.version++, this.source.needsUpdate = !0)
    }
  }
  mS.DEFAULT_IMAGE = null, mS.DEFAULT_MAPPING = 300, mS.DEFAULT_ANISOTROPY = 1;
  class gS {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
      gS.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r
    }
    get width() {
      return this.z
    }
    set width(e) {
      this.z = e
    }
    get height() {
      return this.w
    }
    set height(e) {
      this.w = e
    }
    set(e, t, n, r) {
      return this.x = e, this.y = t, this.z = n, this.w = r, this
    }
    setScalar(e) {
      return this.x = e, this.y = e, this.z = e, this.w = e, this
    }
    setX(e) {
      return this.x = e, this
    }
    setY(e) {
      return this.y = e, this
    }
    setZ(e) {
      return this.z = e, this
    }
    setW(e) {
      return this.w = e, this
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw new Error("index is out of range: " + e)
      }
      return this
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + e)
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w)
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this
    }
    addScalar(e) {
      return this.x += e, this.y += e, this.z += e, this.w += e, this
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
    }
    applyMatrix4(e) {
      const t = this.x,
        n = this.y,
        r = this.z,
        i = this.w,
        a = e.elements;
      return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e)
    }
    setAxisAngleFromQuaternion(e) {
      this.w = 2 * Math.acos(e.w);
      const t = Math.sqrt(1 - e.w * e.w);
      return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
    }
    setAxisAngleFromRotationMatrix(e) {
      let t, n, r, i;
      const a = .01,
        o = .1,
        s = e.elements,
        l = s[0],
        c = s[4],
        u = s[8],
        h = s[1],
        d = s[5],
        p = s[9],
        f = s[2],
        m = s[6],
        g = s[10];
      if (Math.abs(c - h) < a && Math.abs(u - f) < a && Math.abs(p - m) < a) {
        if (Math.abs(c + h) < o && Math.abs(u + f) < o && Math.abs(p + m) < o && Math.abs(l + d + g - 3) < o) return this.set(1, 0, 0, 0), this;
        t = Math.PI;
        const e = (l + 1) / 2,
          s = (d + 1) / 2,
          v = (g + 1) / 2,
          _ = (c + h) / 4,
          y = (u + f) / 4,
          b = (p + m) / 4;
        return e > s && e > v ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = _ / n, i = y / n) : s > v ? s < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), n = _ / r, i = b / r) : v < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(v), n = y / i, r = b / i), this.set(n, r, i, t), this
      }
      let v = Math.sqrt((m - p) * (m - p) + (u - f) * (u - f) + (h - c) * (h - c));
      return Math.abs(v) < .001 && (v = 1), this.x = (m - p) / v, this.y = (u - f) / v, this.z = (h - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
    }
    clamp(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
    }
    clampScalar(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    }
    roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
      return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }
    fromArray(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
    }
    toArray() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
    }*[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w
    }
  }
  class vS extends Cm {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new gS(0, 0, e, t), this.scissorTest = !1, this.viewport = new gS(0, 0, e, t);
      const r = {
        width: e,
        height: t,
        depth: 1
      };
      this.texture = new mS(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : vf, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null, this.samples = void 0 !== n.samples ? n.samples : 0
    }
    setSize(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      this.width === e && this.height === t && this.depth === n || (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
    }
    clone() {
      return (new this.constructor).copy(this)
    }
    copy(e) {
      this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
      const t = Object.assign({}, e.texture.image);
      return this.texture.source = new dS(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }
  class _S extends mS {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
      super(null), this.isDataArrayTexture = !0, this.image = {
        data: e,
        width: t,
        height: n,
        depth: r
      }, this.magFilter = ff, this.minFilter = ff, this.wrapR = df, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }
  }
  class yS extends mS {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
      super(null), this.isData3DTexture = !0, this.image = {
        data: e,
        width: t,
        height: n,
        depth: r
      }, this.magFilter = ff, this.minFilter = ff, this.wrapR = df, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }
  }
  class bS {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
      this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r
    }
    static slerpFlat(e, t, n, r, i, a, o) {
      let s = n[r + 0],
        l = n[r + 1],
        c = n[r + 2],
        u = n[r + 3];
      const h = i[a + 0],
        d = i[a + 1],
        p = i[a + 2],
        f = i[a + 3];
      if (0 === o) return e[t + 0] = s, e[t + 1] = l, e[t + 2] = c, void(e[t + 3] = u);
      if (1 === o) return e[t + 0] = h, e[t + 1] = d, e[t + 2] = p, void(e[t + 3] = f);
      if (u !== f || s !== h || l !== d || c !== p) {
        let e = 1 - o;
        const t = s * h + l * d + c * p + u * f,
          n = t >= 0 ? 1 : -1,
          r = 1 - t * t;
        if (r > Number.EPSILON) {
          const i = Math.sqrt(r),
            a = Math.atan2(i, t * n);
          e = Math.sin(e * a) / i, o = Math.sin(o * a) / i
        }
        const i = o * n;
        if (s = s * e + h * i, l = l * e + d * i, c = c * e + p * i, u = u * e + f * i, e === 1 - o) {
          const e = 1 / Math.sqrt(s * s + l * l + c * c + u * u);
          s *= e, l *= e, c *= e, u *= e
        }
      }
      e[t] = s, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u
    }
    static multiplyQuaternionsFlat(e, t, n, r, i, a) {
      const o = n[r],
        s = n[r + 1],
        l = n[r + 2],
        c = n[r + 3],
        u = i[a],
        h = i[a + 1],
        d = i[a + 2],
        p = i[a + 3];
      return e[t] = o * p + c * u + s * d - l * h, e[t + 1] = s * p + c * h + l * u - o * d, e[t + 2] = l * p + c * d + o * h - s * u, e[t + 3] = c * p - o * u - s * h - l * d, e
    }
    get x() {
      return this._x
    }
    set x(e) {
      this._x = e, this._onChangeCallback()
    }
    get y() {
      return this._y
    }
    set y(e) {
      this._y = e, this._onChangeCallback()
    }
    get z() {
      return this._z
    }
    set z(e) {
      this._z = e, this._onChangeCallback()
    }
    get w() {
      return this._w
    }
    set w(e) {
      this._w = e, this._onChangeCallback()
    }
    set(e, t, n, r) {
      return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w)
    }
    copy(e) {
      return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
    }
    setFromEuler(e, t) {
      const n = e._x,
        r = e._y,
        i = e._z,
        a = e._order,
        o = Math.cos,
        s = Math.sin,
        l = o(n / 2),
        c = o(r / 2),
        u = o(i / 2),
        h = s(n / 2),
        d = s(r / 2),
        p = s(i / 2);
      switch (a) {
        case "XYZ":
          this._x = h * c * u + l * d * p, this._y = l * d * u - h * c * p, this._z = l * c * p + h * d * u, this._w = l * c * u - h * d * p;
          break;
        case "YXZ":
          this._x = h * c * u + l * d * p, this._y = l * d * u - h * c * p, this._z = l * c * p - h * d * u, this._w = l * c * u + h * d * p;
          break;
        case "ZXY":
          this._x = h * c * u - l * d * p, this._y = l * d * u + h * c * p, this._z = l * c * p + h * d * u, this._w = l * c * u - h * d * p;
          break;
        case "ZYX":
          this._x = h * c * u - l * d * p, this._y = l * d * u + h * c * p, this._z = l * c * p - h * d * u, this._w = l * c * u + h * d * p;
          break;
        case "YZX":
          this._x = h * c * u + l * d * p, this._y = l * d * u + h * c * p, this._z = l * c * p - h * d * u, this._w = l * c * u - h * d * p;
          break;
        case "XZY":
          this._x = h * c * u - l * d * p, this._y = l * d * u - h * c * p, this._z = l * c * p + h * d * u, this._w = l * c * u + h * d * p;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
      }
      return !1 !== t && this._onChangeCallback(), this
    }
    setFromAxisAngle(e, t) {
      const n = t / 2,
        r = Math.sin(n);
      return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this
    }
    setFromRotationMatrix(e) {
      const t = e.elements,
        n = t[0],
        r = t[4],
        i = t[8],
        a = t[1],
        o = t[5],
        s = t[9],
        l = t[2],
        c = t[6],
        u = t[10],
        h = n + o + u;
      if (h > 0) {
        const e = .5 / Math.sqrt(h + 1);
        this._w = .25 / e, this._x = (c - s) * e, this._y = (i - l) * e, this._z = (a - r) * e
      } else if (n > o && n > u) {
        const e = 2 * Math.sqrt(1 + n - o - u);
        this._w = (c - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + l) / e
      } else if (o > u) {
        const e = 2 * Math.sqrt(1 + o - n - u);
        this._w = (i - l) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + c) / e
      } else {
        const e = 2 * Math.sqrt(1 + u - n - o);
        this._w = (a - r) / e, this._x = (i + l) / e, this._y = (s + c) / e, this._z = .25 * e
      }
      return this._onChangeCallback(), this
    }
    setFromUnitVectors(e, t) {
      let n = e.dot(t) + 1;
      return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize()
    }
    angleTo(e) {
      return 2 * Math.acos(Math.abs(Gx(this.dot(e), -1, 1)))
    }
    rotateTowards(e, t) {
      const n = this.angleTo(e);
      if (0 === n) return this;
      const r = Math.min(1, t / n);
      return this.slerp(e, r), this
    }
    identity() {
      return this.set(0, 0, 0, 1)
    }
    invert() {
      return this.conjugate()
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
    }
    dot(e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
      let e = this.length();
      return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this
    }
    multiply(e) {
      return this.multiplyQuaternions(this, e)
    }
    premultiply(e) {
      return this.multiplyQuaternions(e, this)
    }
    multiplyQuaternions(e, t) {
      const n = e._x,
        r = e._y,
        i = e._z,
        a = e._w,
        o = t._x,
        s = t._y,
        l = t._z,
        c = t._w;
      return this._x = n * c + a * o + r * l - i * s, this._y = r * c + a * s + i * o - n * l, this._z = i * c + a * l + n * s - r * o, this._w = a * c - n * o - r * s - i * l, this._onChangeCallback(), this
    }
    slerp(e, t) {
      if (0 === t) return this;
      if (1 === t) return this.copy(e);
      const n = this._x,
        r = this._y,
        i = this._z,
        a = this._w;
      let o = a * e._w + n * e._x + r * e._y + i * e._z;
      if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = r, this._z = i, this;
      const s = 1 - o * o;
      if (s <= Number.EPSILON) {
        const e = 1 - t;
        return this._w = e * a + t * this._w, this._x = e * n + t * this._x, this._y = e * r + t * this._y, this._z = e * i + t * this._z, this.normalize(), this._onChangeCallback(), this
      }
      const l = Math.sqrt(s),
        c = Math.atan2(l, o),
        u = Math.sin((1 - t) * c) / l,
        h = Math.sin(t * c) / l;
      return this._w = a * u + this._w * h, this._x = n * u + this._x * h, this._y = r * u + this._y * h, this._z = i * u + this._z * h, this._onChangeCallback(), this
    }
    slerpQuaternions(e, t, n) {
      return this.copy(e).slerp(t, n)
    }
    random() {
      const e = Math.random(),
        t = Math.sqrt(1 - e),
        n = Math.sqrt(e),
        r = 2 * Math.PI * Math.random(),
        i = 2 * Math.PI * Math.random();
      return this.set(t * Math.cos(r), n * Math.sin(i), n * Math.cos(i), t * Math.sin(r))
    }
    equals(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }
    fromArray(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this
    }
    toArray() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
    }
    fromBufferAttribute(e, t) {
      return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this
    }
    _onChange(e) {
      return this._onChangeCallback = e, this
    }
    _onChangeCallback() {}*[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w
    }
  }
  class xS {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      xS.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n
    }
    set(e, t, n) {
      return void 0 === n && (n = this.z), this.x = e, this.y = t, this.z = n, this
    }
    setScalar(e) {
      return this.x = e, this.y = e, this.z = e, this
    }
    setX(e) {
      return this.x = e, this
    }
    setY(e) {
      return this.y = e, this
    }
    setZ(e) {
      return this.z = e, this
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw new Error("index is out of range: " + e)
      }
      return this
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + e)
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z)
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this.z += e.z, this
    }
    addScalar(e) {
      return this.x += e, this.y += e, this.z += e, this
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this.z -= e.z, this
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this.z -= e, this
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this.z *= e.z, this
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this.z *= e, this
    }
    multiplyVectors(e, t) {
      return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
    }
    applyEuler(e) {
      return this.applyQuaternion(MS.setFromEuler(e))
    }
    applyAxisAngle(e, t) {
      return this.applyQuaternion(MS.setFromAxisAngle(e, t))
    }
    applyMatrix3(e) {
      const t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements;
      return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this
    }
    applyNormalMatrix(e) {
      return this.applyMatrix3(e).normalize()
    }
    applyMatrix4(e) {
      const t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements,
        a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
      return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this
    }
    applyQuaternion(e) {
      const t = this.x,
        n = this.y,
        r = this.z,
        i = e.x,
        a = e.y,
        o = e.z,
        s = e.w,
        l = s * t + a * r - o * n,
        c = s * n + o * t - i * r,
        u = s * r + i * n - a * t,
        h = -i * t - a * n - o * r;
      return this.x = l * s + h * -i + c * -o - u * -a, this.y = c * s + h * -a + u * -i - l * -o, this.z = u * s + h * -o + l * -a - c * -i, this
    }
    project(e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    }
    unproject(e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    }
    transformDirection(e) {
      const t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements;
      return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize()
    }
    divide(e) {
      return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e)
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
    }
    clamp(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
    }
    clampScalar(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    }
    roundToZero() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
      return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this
    }
    cross(e) {
      return this.crossVectors(this, e)
    }
    crossVectors(e, t) {
      const n = e.x,
        r = e.y,
        i = e.z,
        a = t.x,
        o = t.y,
        s = t.z;
      return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this
    }
    projectOnVector(e) {
      const t = e.lengthSq();
      if (0 === t) return this.set(0, 0, 0);
      const n = e.dot(this) / t;
      return this.copy(e).multiplyScalar(n)
    }
    projectOnPlane(e) {
      return SS.copy(this).projectOnVector(e), this.sub(SS)
    }
    reflect(e) {
      return this.sub(SS.copy(e).multiplyScalar(2 * this.dot(e)))
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (0 === t) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(Gx(n, -1, 1))
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
      const t = this.x - e.x,
        n = this.y - e.y,
        r = this.z - e.z;
      return t * t + n * n + r * r
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    }
    setFromSpherical(e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    }
    setFromSphericalCoords(e, t, n) {
      const r = Math.sin(t) * e;
      return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this
    }
    setFromCylindrical(e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    }
    setFromCylindricalCoords(e, t, n) {
      return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this
    }
    setFromMatrixPosition(e) {
      const t = e.elements;
      return this.x = t[12], this.y = t[13], this.z = t[14], this
    }
    setFromMatrixScale(e) {
      const t = this.setFromMatrixColumn(e, 0).length(),
        n = this.setFromMatrixColumn(e, 1).length(),
        r = this.setFromMatrixColumn(e, 2).length();
      return this.x = t, this.y = n, this.z = r, this
    }
    setFromMatrixColumn(e, t) {
      return this.fromArray(e.elements, 4 * t)
    }
    setFromMatrix3Column(e, t) {
      return this.fromArray(e.elements, 3 * t)
    }
    setFromEuler(e) {
      return this.x = e._x, this.y = e._y, this.z = e._z, this
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z
    }
    fromArray(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
    }
    toArray() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
    }
    randomDirection() {
      const e = 2 * (Math.random() - .5),
        t = Math.random() * Math.PI * 2,
        n = Math.sqrt(1 - e ** 2);
      return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this
    }*[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z
    }
  }
  const SS = new xS,
    MS = new bS;
  class wS {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new xS(1 / 0, 1 / 0, 1 / 0),
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new xS(-1 / 0, -1 / 0, -1 / 0);
      this.isBox3 = !0, this.min = e, this.max = t
    }
    set(e, t) {
      return this.min.copy(e), this.max.copy(t), this
    }
    setFromArray(e) {
      let t = 1 / 0,
        n = 1 / 0,
        r = 1 / 0,
        i = -1 / 0,
        a = -1 / 0,
        o = -1 / 0;
      for (let s = 0, l = e.length; s < l; s += 3) {
        const l = e[s],
          c = e[s + 1],
          u = e[s + 2];
        l < t && (t = l), c < n && (n = c), u < r && (r = u), l > i && (i = l), c > a && (a = c), u > o && (o = u)
      }
      return this.min.set(t, n, r), this.max.set(i, a, o), this
    }
    setFromBufferAttribute(e) {
      let t = 1 / 0,
        n = 1 / 0,
        r = 1 / 0,
        i = -1 / 0,
        a = -1 / 0,
        o = -1 / 0;
      for (let s = 0, l = e.count; s < l; s++) {
        const l = e.getX(s),
          c = e.getY(s),
          u = e.getZ(s);
        l < t && (t = l), c < n && (n = c), u < r && (r = u), l > i && (i = l), c > a && (a = c), u > o && (o = u)
      }
      return this.min.set(t, n, r), this.max.set(i, a, o), this
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this
    }
    setFromCenterAndSize(e, t) {
      const n = ES.copy(t).multiplyScalar(.5);
      return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
    }
    setFromObject(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return this.makeEmpty(), this.expandByObject(e, t)
    }
    clone() {
      return (new this.constructor).copy(this)
    }
    copy(e) {
      return this.min.copy(e.min), this.max.copy(e.max), this
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
      return this.min.min(e), this.max.max(e), this
    }
    expandByVector(e) {
      return this.min.sub(e), this.max.add(e), this
    }
    expandByScalar(e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this
    }
    expandByObject(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      e.updateWorldMatrix(!1, !1);
      const n = e.geometry;
      if (void 0 !== n)
        if (t && null != n.attributes && void 0 !== n.attributes.position) {
          const t = n.attributes.position;
          for (let n = 0, r = t.count; n < r; n++) ES.fromBufferAttribute(t, n).applyMatrix4(e.matrixWorld), this.expandByPoint(ES)
        } else null === n.boundingBox && n.computeBoundingBox(), AS.copy(n.boundingBox), AS.applyMatrix4(e.matrixWorld), this.union(AS);
      const r = e.children;
      for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
      return this
    }
    containsPoint(e) {
      return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
    }
    containsBox(e) {
      return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }
    getParameter(e, t) {
      return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(e) {
      return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
    }
    intersectsSphere(e) {
      return this.clampPoint(e.center, ES), ES.distanceToSquared(e.center) <= e.radius * e.radius
    }
    intersectsPlane(e) {
      let t, n;
      return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant
    }
    intersectsTriangle(e) {
      if (this.isEmpty()) return !1;
      this.getCenter(OS), IS.subVectors(this.max, OS), CS.subVectors(e.a, OS), LS.subVectors(e.b, OS), RS.subVectors(e.c, OS), PS.subVectors(LS, CS), DS.subVectors(RS, LS), NS.subVectors(CS, RS);
      let t = [0, -PS.z, PS.y, 0, -DS.z, DS.y, 0, -NS.z, NS.y, PS.z, 0, -PS.x, DS.z, 0, -DS.x, NS.z, 0, -NS.x, -PS.y, PS.x, 0, -DS.y, DS.x, 0, -NS.y, NS.x, 0];
      return !!zS(t, CS, LS, RS, IS) && (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!zS(t, CS, LS, RS, IS) && (US.crossVectors(PS, DS), t = [US.x, US.y, US.z], zS(t, CS, LS, RS, IS)))
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
      return ES.copy(e).clamp(this.min, this.max).sub(e).length()
    }
    getBoundingSphere(e) {
      return this.getCenter(e.center), e.radius = .5 * this.getSize(ES).length(), e
    }
    intersect(e) {
      return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
    }
    union(e) {
      return this.min.min(e.min), this.max.max(e.max), this
    }
    applyMatrix4(e) {
      return this.isEmpty() || (TS[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), TS[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), TS[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), TS[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), TS[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), TS[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), TS[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), TS[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(TS)), this
    }
    translate(e) {
      return this.min.add(e), this.max.add(e), this
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max)
    }
  }
  const TS = [new xS, new xS, new xS, new xS, new xS, new xS, new xS, new xS],
    ES = new xS,
    AS = new wS,
    CS = new xS,
    LS = new xS,
    RS = new xS,
    PS = new xS,
    DS = new xS,
    NS = new xS,
    OS = new xS,
    IS = new xS,
    US = new xS,
    kS = new xS;

  function zS(e, t, n, r, i) {
    for (let a = 0, o = e.length - 3; a <= o; a += 3) {
      kS.fromArray(e, a);
      const o = i.x * Math.abs(kS.x) + i.y * Math.abs(kS.y) + i.z * Math.abs(kS.z),
        s = t.dot(kS),
        l = n.dot(kS),
        c = r.dot(kS);
      if (Math.max(-Math.max(s, l, c), Math.min(s, l, c)) > o) return !1
    }
    return !0
  }
  const FS = new wS,
    BS = new xS,
    HS = new xS;
  class GS {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new xS,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
      this.center = e, this.radius = t
    }
    set(e, t) {
      return this.center.copy(e), this.radius = t, this
    }
    setFromPoints(e, t) {
      const n = this.center;
      void 0 !== t ? n.copy(t) : FS.setFromPoints(e).getCenter(n);
      let r = 0;
      for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
      return this.radius = Math.sqrt(r), this
    }
    copy(e) {
      return this.center.copy(e.center), this.radius = e.radius, this
    }
    isEmpty() {
      return this.radius < 0
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this
    }
    containsPoint(e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(e) {
      return e.distanceTo(this.center) - this.radius
    }
    intersectsSphere(e) {
      const t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t
    }
    intersectsBox(e) {
      return e.intersectsSphere(this)
    }
    intersectsPlane(e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(e, t) {
      const n = this.center.distanceToSquared(e);
      return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
    }
    getBoundingBox(e) {
      return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e)
    }
    applyMatrix4(e) {
      return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
    }
    translate(e) {
      return this.center.add(e), this
    }
    expandByPoint(e) {
      if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
      BS.subVectors(e, this.center);
      const t = BS.lengthSq();
      if (t > this.radius * this.radius) {
        const e = Math.sqrt(t),
          n = .5 * (e - this.radius);
        this.center.addScaledVector(BS, n / e), this.radius += n
      }
      return this
    }
    union(e) {
      return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (!0 === this.center.equals(e.center) ? this.radius = Math.max(this.radius, e.radius) : (HS.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(BS.copy(e.center).add(HS)), this.expandByPoint(BS.copy(e.center).sub(HS))), this)
    }
    equals(e) {
      return e.center.equals(this.center) && e.radius === this.radius
    }
    clone() {
      return (new this.constructor).copy(this)
    }
  }
  var VS = ke,
    WS = dr,
    jS = rr,
    qS = Ji;
  ti({
    target: "Array",
    proto: !0
  }, {
    at: function (e) {
      var t = VS(this),
        n = WS(t),
        r = jS(e),
        i = r >= 0 ? r : n + r;
      return i < 0 || i >= n ? void 0 : t[i]
    }
  }), qS("at");
  var XS = ti,
    YS = O,
    ZS = rr,
    KS = jo,
    $S = i,
    JS = x("".charAt);
  XS({
    target: "String",
    proto: !0,
    forced: $S((function () {
      return "\ud842" !== "𠮷".at(-2)
    }))
  }, {
    at: function (e) {
      var t = KS(YS(this)),
        n = t.length,
        r = ZS(e),
        i = r >= 0 ? r : n + r;
      return i < 0 || i >= n ? void 0 : JS(t, i)
    }
  });
  const QS = new xS,
    eM = new xS,
    tM = new xS,
    nM = new xS,
    rM = new xS,
    iM = new xS,
    aM = new xS;
  class oM {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new xS,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new xS(0, 0, -1);
      this.origin = e, this.direction = t
    }
    set(e, t) {
      return this.origin.copy(e), this.direction.copy(t), this
    }
    copy(e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this
    }
    at(e, t) {
      return t.copy(this.direction).multiplyScalar(e).add(this.origin)
    }
    lookAt(e) {
      return this.direction.copy(e).sub(this.origin).normalize(), this
    }
    recast(e) {
      return this.origin.copy(this.at(e, QS)), this
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin);
      const n = t.dot(this.direction);
      return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
      const t = QS.subVectors(e, this.origin).dot(this.direction);
      return t < 0 ? this.origin.distanceToSquared(e) : (QS.copy(this.direction).multiplyScalar(t).add(this.origin), QS.distanceToSquared(e))
    }
    distanceSqToSegment(e, t, n, r) {
      eM.copy(e).add(t).multiplyScalar(.5), tM.copy(t).sub(e).normalize(), nM.copy(this.origin).sub(eM);
      const i = .5 * e.distanceTo(t),
        a = -this.direction.dot(tM),
        o = nM.dot(this.direction),
        s = -nM.dot(tM),
        l = nM.lengthSq(),
        c = Math.abs(1 - a * a);
      let u, h, d, p;
      if (c > 0)
        if (u = a * s - o, h = a * o - s, p = i * c, u >= 0)
          if (h >= -p)
            if (h <= p) {
              const e = 1 / c;
              u *= e, h *= e, d = u * (u + a * h + 2 * o) + h * (a * u + h + 2 * s) + l
            } else h = i, u = Math.max(0, -(a * h + o)), d = -u * u + h * (h + 2 * s) + l;
      else h = -i, u = Math.max(0, -(a * h + o)), d = -u * u + h * (h + 2 * s) + l;
      else h <= -p ? (u = Math.max(0, -(-a * i + o)), h = u > 0 ? -i : Math.min(Math.max(-i, -s), i), d = -u * u + h * (h + 2 * s) + l) : h <= p ? (u = 0, h = Math.min(Math.max(-i, -s), i), d = h * (h + 2 * s) + l) : (u = Math.max(0, -(a * i + o)), h = u > 0 ? i : Math.min(Math.max(-i, -s), i), d = -u * u + h * (h + 2 * s) + l);
      else h = a > 0 ? -i : i, u = Math.max(0, -(a * h + o)), d = -u * u + h * (h + 2 * s) + l;
      return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), r && r.copy(tM).multiplyScalar(h).add(eM), d
    }
    intersectSphere(e, t) {
      QS.subVectors(e.center, this.origin);
      const n = QS.dot(this.direction),
        r = QS.dot(QS) - n * n,
        i = e.radius * e.radius;
      if (r > i) return null;
      const a = Math.sqrt(i - r),
        o = n - a,
        s = n + a;
      return o < 0 && s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t)
    }
    intersectsSphere(e) {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
      const t = e.normal.dot(this.direction);
      if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
      const n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null
    }
    intersectPlane(e, t) {
      const n = this.distanceToPlane(e);
      return null === n ? null : this.at(n, t)
    }
    intersectsPlane(e) {
      const t = e.distanceToPoint(this.origin);
      if (0 === t) return !0;
      return e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
      let n, r, i, a, o, s;
      const l = 1 / this.direction.x,
        c = 1 / this.direction.y,
        u = 1 / this.direction.z,
        h = this.origin;
      return l >= 0 ? (n = (e.min.x - h.x) * l, r = (e.max.x - h.x) * l) : (n = (e.max.x - h.x) * l, r = (e.min.x - h.x) * l), c >= 0 ? (i = (e.min.y - h.y) * c, a = (e.max.y - h.y) * c) : (i = (e.max.y - h.y) * c, a = (e.min.y - h.y) * c), n > a || i > r ? null : ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - h.z) * u, s = (e.max.z - h.z) * u) : (o = (e.max.z - h.z) * u, s = (e.min.z - h.z) * u), n > s || o > r ? null : ((o > n || n != n) && (n = o), (s < r || r != r) && (r = s), r < 0 ? null : this.at(n >= 0 ? n : r, t)))
    }
    intersectsBox(e) {
      return null !== this.intersectBox(e, QS)
    }
    intersectTriangle(e, t, n, r, i) {
      rM.subVectors(t, e), iM.subVectors(n, e), aM.crossVectors(rM, iM);
      let a, o = this.direction.dot(aM);
      if (o > 0) {
        if (r) return null;
        a = 1
      } else {
        if (!(o < 0)) return null;
        a = -1, o = -o
      }
      nM.subVectors(this.origin, e);
      const s = a * this.direction.dot(iM.crossVectors(nM, iM));
      if (s < 0) return null;
      const l = a * this.direction.dot(rM.cross(nM));
      if (l < 0) return null;
      if (s + l > o) return null;
      const c = -a * nM.dot(aM);
      return c < 0 ? null : this.at(c / o, i)
    }
    applyMatrix4(e) {
      return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
    clone() {
      return (new this.constructor).copy(this)
    }
  }
  class sM {
    constructor() {
      sM.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }
    set(e, t, n, r, i, a, o, s, l, c, u, h, d, p, f, m) {
      const g = this.elements;
      return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = l, g[6] = c, g[10] = u, g[14] = h, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }
    clone() {
      return (new sM).fromArray(this.elements)
    }
    copy(e) {
      const t = this.elements,
        n = e.elements;
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
    }
    copyPosition(e) {
      const t = this.elements,
        n = e.elements;
      return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
    }
    setFromMatrix3(e) {
      const t = e.elements;
      return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this
    }
    extractBasis(e, t, n) {
      return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
    }
    makeBasis(e, t, n) {
      return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
    }
    extractRotation(e) {
      const t = this.elements,
        n = e.elements,
        r = 1 / lM.setFromMatrixColumn(e, 0).length(),
        i = 1 / lM.setFromMatrixColumn(e, 1).length(),
        a = 1 / lM.setFromMatrixColumn(e, 2).length();
      return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    }
    makeRotationFromEuler(e) {
      const t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z,
        a = Math.cos(n),
        o = Math.sin(n),
        s = Math.cos(r),
        l = Math.sin(r),
        c = Math.cos(i),
        u = Math.sin(i);
      if ("XYZ" === e.order) {
        const e = a * c,
          n = a * u,
          r = o * c,
          i = o * u;
        t[0] = s * c, t[4] = -s * u, t[8] = l, t[1] = n + r * l, t[5] = e - i * l, t[9] = -o * s, t[2] = i - e * l, t[6] = r + n * l, t[10] = a * s
      } else if ("YXZ" === e.order) {
        const e = s * c,
          n = s * u,
          r = l * c,
          i = l * u;
        t[0] = e + i * o, t[4] = r * o - n, t[8] = a * l, t[1] = a * u, t[5] = a * c, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s
      } else if ("ZXY" === e.order) {
        const e = s * c,
          n = s * u,
          r = l * c,
          i = l * u;
        t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * c, t[9] = i - e * o, t[2] = -a * l, t[6] = o, t[10] = a * s
      } else if ("ZYX" === e.order) {
        const e = a * c,
          n = a * u,
          r = o * c,
          i = o * u;
        t[0] = s * c, t[4] = r * l - n, t[8] = e * l + i, t[1] = s * u, t[5] = i * l + e, t[9] = n * l - r, t[2] = -l, t[6] = o * s, t[10] = a * s
      } else if ("YZX" === e.order) {
        const e = a * s,
          n = a * l,
          r = o * s,
          i = o * l;
        t[0] = s * c, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * c, t[9] = -o * c, t[2] = -l * c, t[6] = n * u + r, t[10] = e - i * u
      } else if ("XZY" === e.order) {
        const e = a * s,
          n = a * l,
          r = o * s,
          i = o * l;
        t[0] = s * c, t[4] = -u, t[8] = l * c, t[1] = e * u + i, t[5] = a * c, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * c, t[10] = i * u + e
      }
      return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    }
    makeRotationFromQuaternion(e) {
      return this.compose(uM, e, hM)
    }
    lookAt(e, t, n) {
      const r = this.elements;
      return fM.subVectors(e, t), 0 === fM.lengthSq() && (fM.z = 1), fM.normalize(), dM.crossVectors(n, fM), 0 === dM.lengthSq() && (1 === Math.abs(n.z) ? fM.x += 1e-4 : fM.z += 1e-4, fM.normalize(), dM.crossVectors(n, fM)), dM.normalize(), pM.crossVectors(fM, dM), r[0] = dM.x, r[4] = pM.x, r[8] = fM.x, r[1] = dM.y, r[5] = pM.y, r[9] = fM.y, r[2] = dM.z, r[6] = pM.z, r[10] = fM.z, this
    }
    multiply(e) {
      return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
      const n = e.elements,
        r = t.elements,
        i = this.elements,
        a = n[0],
        o = n[4],
        s = n[8],
        l = n[12],
        c = n[1],
        u = n[5],
        h = n[9],
        d = n[13],
        p = n[2],
        f = n[6],
        m = n[10],
        g = n[14],
        v = n[3],
        _ = n[7],
        y = n[11],
        b = n[15],
        x = r[0],
        S = r[4],
        M = r[8],
        w = r[12],
        T = r[1],
        E = r[5],
        A = r[9],
        C = r[13],
        L = r[2],
        R = r[6],
        P = r[10],
        D = r[14],
        N = r[3],
        O = r[7],
        I = r[11],
        U = r[15];
      return i[0] = a * x + o * T + s * L + l * N, i[4] = a * S + o * E + s * R + l * O, i[8] = a * M + o * A + s * P + l * I, i[12] = a * w + o * C + s * D + l * U, i[1] = c * x + u * T + h * L + d * N, i[5] = c * S + u * E + h * R + d * O, i[9] = c * M + u * A + h * P + d * I, i[13] = c * w + u * C + h * D + d * U, i[2] = p * x + f * T + m * L + g * N, i[6] = p * S + f * E + m * R + g * O, i[10] = p * M + f * A + m * P + g * I, i[14] = p * w + f * C + m * D + g * U, i[3] = v * x + _ * T + y * L + b * N, i[7] = v * S + _ * E + y * R + b * O, i[11] = v * M + _ * A + y * P + b * I, i[15] = v * w + _ * C + y * D + b * U, this
    }
    multiplyScalar(e) {
      const t = this.elements;
      return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
    }
    determinant() {
      const e = this.elements,
        t = e[0],
        n = e[4],
        r = e[8],
        i = e[12],
        a = e[1],
        o = e[5],
        s = e[9],
        l = e[13],
        c = e[2],
        u = e[6],
        h = e[10],
        d = e[14];
      return e[3] * (+i * s * u - r * l * u - i * o * h + n * l * h + r * o * d - n * s * d) + e[7] * (+t * s * d - t * l * h + i * a * h - r * a * d + r * l * c - i * s * c) + e[11] * (+t * l * u - t * o * d - i * a * u + n * a * d + i * o * c - n * l * c) + e[15] * (-r * o * c - t * s * u + t * o * h + r * a * u - n * a * h + n * s * c)
    }
    transpose() {
      const e = this.elements;
      let t;
      return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
    }
    setPosition(e, t, n) {
      const r = this.elements;
      return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this
    }
    invert() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        l = e[7],
        c = e[8],
        u = e[9],
        h = e[10],
        d = e[11],
        p = e[12],
        f = e[13],
        m = e[14],
        g = e[15],
        v = u * m * l - f * h * l + f * s * d - o * m * d - u * s * g + o * h * g,
        _ = p * h * l - c * m * l - p * s * d + a * m * d + c * s * g - a * h * g,
        y = c * f * l - p * u * l + p * o * d - a * f * d - c * o * g + a * u * g,
        b = p * u * s - c * f * s - p * o * h + a * f * h + c * o * m - a * u * m,
        x = t * v + n * _ + r * y + i * b;
      if (0 === x) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const S = 1 / x;
      return e[0] = v * S, e[1] = (f * h * i - u * m * i - f * r * d + n * m * d + u * r * g - n * h * g) * S, e[2] = (o * m * i - f * s * i + f * r * l - n * m * l - o * r * g + n * s * g) * S, e[3] = (u * s * i - o * h * i - u * r * l + n * h * l + o * r * d - n * s * d) * S, e[4] = _ * S, e[5] = (c * m * i - p * h * i + p * r * d - t * m * d - c * r * g + t * h * g) * S, e[6] = (p * s * i - a * m * i - p * r * l + t * m * l + a * r * g - t * s * g) * S, e[7] = (a * h * i - c * s * i + c * r * l - t * h * l - a * r * d + t * s * d) * S, e[8] = y * S, e[9] = (p * u * i - c * f * i - p * n * d + t * f * d + c * n * g - t * u * g) * S, e[10] = (a * f * i - p * o * i + p * n * l - t * f * l - a * n * g + t * o * g) * S, e[11] = (c * o * i - a * u * i - c * n * l + t * u * l + a * n * d - t * o * d) * S, e[12] = b * S, e[13] = (c * f * r - p * u * r + p * n * h - t * f * h - c * n * m + t * u * m) * S, e[14] = (p * o * r - a * f * r - p * n * s + t * f * s + a * n * m - t * o * m) * S, e[15] = (a * u * r - c * o * r + c * n * s - t * u * s - a * n * h + t * o * h) * S, this
    }
    scale(e) {
      const t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z;
      return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this
    }
    getMaxScaleOnAxis() {
      const e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, r))
    }
    makeTranslation(e, t, n) {
      return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
    }
    makeRotationX(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
    }
    makeRotationY(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
    }
    makeRotationZ(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }
    makeRotationAxis(e, t) {
      const n = Math.cos(t),
        r = Math.sin(t),
        i = 1 - n,
        a = e.x,
        o = e.y,
        s = e.z,
        l = i * a,
        c = i * o;
      return this.set(l * a + n, l * o - r * s, l * s + r * o, 0, l * o + r * s, c * o + n, c * s - r * a, 0, l * s - r * o, c * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this
    }
    makeScale(e, t, n) {
      return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
    }
    makeShear(e, t, n, r, i, a) {
      return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this
    }
    compose(e, t, n) {
      const r = this.elements,
        i = t._x,
        a = t._y,
        o = t._z,
        s = t._w,
        l = i + i,
        c = a + a,
        u = o + o,
        h = i * l,
        d = i * c,
        p = i * u,
        f = a * c,
        m = a * u,
        g = o * u,
        v = s * l,
        _ = s * c,
        y = s * u,
        b = n.x,
        x = n.y,
        S = n.z;
      return r[0] = (1 - (f + g)) * b, r[1] = (d + y) * b, r[2] = (p - _) * b, r[3] = 0, r[4] = (d - y) * x, r[5] = (1 - (h + g)) * x, r[6] = (m + v) * x, r[7] = 0, r[8] = (p + _) * S, r[9] = (m - v) * S, r[10] = (1 - (h + f)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this
    }
    decompose(e, t, n) {
      const r = this.elements;
      let i = lM.set(r[0], r[1], r[2]).length();
      const a = lM.set(r[4], r[5], r[6]).length(),
        o = lM.set(r[8], r[9], r[10]).length();
      this.determinant() < 0 && (i = -i), e.x = r[12], e.y = r[13], e.z = r[14], cM.copy(this);
      const s = 1 / i,
        l = 1 / a,
        c = 1 / o;
      return cM.elements[0] *= s, cM.elements[1] *= s, cM.elements[2] *= s, cM.elements[4] *= l, cM.elements[5] *= l, cM.elements[6] *= l, cM.elements[8] *= c, cM.elements[9] *= c, cM.elements[10] *= c, t.setFromRotationMatrix(cM), n.x = i, n.y = a, n.z = o, this
    }
    makePerspective(e, t, n, r, i, a) {
      const o = this.elements,
        s = 2 * i / (t - e),
        l = 2 * i / (n - r),
        c = (t + e) / (t - e),
        u = (n + r) / (n - r),
        h = -(a + i) / (a - i),
        d = -2 * a * i / (a - i);
      return o[0] = s, o[4] = 0, o[8] = c, o[12] = 0, o[1] = 0, o[5] = l, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = h, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
    }
    makeOrthographic(e, t, n, r, i, a) {
      const o = this.elements,
        s = 1 / (t - e),
        l = 1 / (n - r),
        c = 1 / (a - i),
        u = (t + e) * s,
        h = (n + r) * l,
        d = (a + i) * c;
      return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * l, o[9] = 0, o[13] = -h, o[2] = 0, o[6] = 0, o[10] = -2 * c, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
    }
    equals(e) {
      const t = this.elements,
        n = e.elements;
      for (let e = 0; e < 16; e++)
        if (t[e] !== n[e]) return !1;
      return !0
    }
    fromArray(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
      return this
    }
    toArray() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      const n = this.elements;
      return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
    }
  }
  const lM = new xS,
    cM = new sM,
    uM = new xS(0, 0, 0),
    hM = new xS(1, 1, 1),
    dM = new xS,
    pM = new xS,
    fM = new xS,
    mM = new sM,
    gM = new bS;
  class vM {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vM.DEFAULT_ORDER;
      this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r
    }
    get x() {
      return this._x
    }
    set x(e) {
      this._x = e, this._onChangeCallback()
    }
    get y() {
      return this._y
    }
    set y(e) {
      this._y = e, this._onChangeCallback()
    }
    get z() {
      return this._z
    }
    set z(e) {
      this._z = e, this._onChangeCallback()
    }
    get order() {
      return this._order
    }
    set order(e) {
      this._order = e, this._onChangeCallback()
    }
    set(e, t, n) {
      let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this._order;
      return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order)
    }
    copy(e) {
      return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
    }
    setFromRotationMatrix(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._order,
        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const r = e.elements,
        i = r[0],
        a = r[4],
        o = r[8],
        s = r[1],
        l = r[5],
        c = r[9],
        u = r[2],
        h = r[6],
        d = r[10];
      switch (t) {
        case "XYZ":
          this._y = Math.asin(Gx(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(h, l), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-Gx(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(s, l)) : (this._y = Math.atan2(-u, i), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(Gx(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(s, i));
          break;
        case "ZYX":
          this._y = Math.asin(-Gx(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(h, d), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, l));
          break;
        case "YZX":
          this._z = Math.asin(Gx(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-u, i)) : (this._x = 0, this._y = Math.atan2(o, d));
          break;
        case "XZY":
          this._z = Math.asin(-Gx(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(h, l), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-c, d), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
      }
      return this._order = t, !0 === n && this._onChangeCallback(), this
    }
    setFromQuaternion(e, t, n) {
      return mM.makeRotationFromQuaternion(e), this.setFromRotationMatrix(mM, t, n)
    }
    setFromVector3(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._order;
      return this.set(e.x, e.y, e.z, t)
    }
    reorder(e) {
      return gM.setFromEuler(this), this.setFromQuaternion(gM, e)
    }
    equals(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    }
    fromArray(e) {
      return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this._onChangeCallback(), this
    }
    toArray() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
    }
    _onChange(e) {
      return this._onChangeCallback = e, this
    }
    _onChangeCallback() {}*[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order
    }
  }
  vM.DEFAULT_ORDER = "XYZ";
  class _M {
    constructor() {
      this.mask = 1
    }
    set(e) {
      this.mask = (1 << e | 0) >>> 0
    }
    enable(e) {
      this.mask |= 1 << e | 0
    }
    enableAll() {
      this.mask = -1
    }
    toggle(e) {
      this.mask ^= 1 << e | 0
    }
    disable(e) {
      this.mask &= ~(1 << e | 0)
    }
    disableAll() {
      this.mask = 0
    }
    test(e) {
      return 0 != (this.mask & e.mask)
    }
    isEnabled(e) {
      return 0 != (this.mask & (1 << e | 0))
    }
  }
  let yM = 0;
  const bM = new xS,
    xM = new bS,
    SM = new sM,
    MM = new xS,
    wM = new xS,
    TM = new xS,
    EM = new bS,
    AM = new xS(1, 0, 0),
    CM = new xS(0, 1, 0),
    LM = new xS(0, 0, 1),
    RM = {
      type: "added"
    },
    PM = {
      type: "removed"
    };
  class DM extends Cm {
    constructor() {
      super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
        value: yM++
      }), this.uuid = Hx(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = DM.DEFAULT_UP.clone();
      const e = new xS,
        t = new vM,
        n = new bS,
        r = new xS(1, 1, 1);
      t._onChange((function () {
        n.setFromEuler(t, !1)
      })), n._onChange((function () {
        t.setFromQuaternion(n, void 0, !1)
      })), Object.defineProperties(this, {
        position: {
          configurable: !0,
          enumerable: !0,
          value: e
        },
        rotation: {
          configurable: !0,
          enumerable: !0,
          value: t
        },
        quaternion: {
          configurable: !0,
          enumerable: !0,
          value: n
        },
        scale: {
          configurable: !0,
          enumerable: !0,
          value: r
        },
        modelViewMatrix: {
          value: new sM
        },
        normalMatrix: {
          value: new Zx
        }
      }), this.matrix = new sM, this.matrixWorld = new sM, this.matrixAutoUpdate = DM.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = DM.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new _M, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(e) {
      return this.quaternion.premultiply(e), this
    }
    setRotationFromAxisAngle(e, t) {
      this.quaternion.setFromAxisAngle(e, t)
    }
    setRotationFromEuler(e) {
      this.quaternion.setFromEuler(e, !0)
    }
    setRotationFromMatrix(e) {
      this.quaternion.setFromRotationMatrix(e)
    }
    setRotationFromQuaternion(e) {
      this.quaternion.copy(e)
    }
    rotateOnAxis(e, t) {
      return xM.setFromAxisAngle(e, t), this.quaternion.multiply(xM), this
    }
    rotateOnWorldAxis(e, t) {
      return xM.setFromAxisAngle(e, t), this.quaternion.premultiply(xM), this
    }
    rotateX(e) {
      return this.rotateOnAxis(AM, e)
    }
    rotateY(e) {
      return this.rotateOnAxis(CM, e)
    }
    rotateZ(e) {
      return this.rotateOnAxis(LM, e)
    }
    translateOnAxis(e, t) {
      return bM.copy(e).applyQuaternion(this.quaternion), this.position.add(bM.multiplyScalar(t)), this
    }
    translateX(e) {
      return this.translateOnAxis(AM, e)
    }
    translateY(e) {
      return this.translateOnAxis(CM, e)
    }
    translateZ(e) {
      return this.translateOnAxis(LM, e)
    }
    localToWorld(e) {
      return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(e) {
      return this.updateWorldMatrix(!0, !1), e.applyMatrix4(SM.copy(this.matrixWorld).invert())
    }
    lookAt(e, t, n) {
      e.isVector3 ? MM.copy(e) : MM.set(e, t, n);
      const r = this.parent;
      this.updateWorldMatrix(!0, !1), wM.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? SM.lookAt(wM, MM, this.up) : SM.lookAt(MM, wM, this.up), this.quaternion.setFromRotationMatrix(SM), r && (SM.extractRotation(r.matrixWorld), xM.setFromRotationMatrix(SM), this.quaternion.premultiply(xM.invert()))
    }
    add(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this
      }
      return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(RM)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
    }
    remove(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
        return this
      }
      const t = this.children.indexOf(e);
      return -1 !== t && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(PM)), this
    }
    removeFromParent() {
      const e = this.parent;
      return null !== e && e.remove(this), this
    }
    clear() {
      for (let e = 0; e < this.children.length; e++) {
        const t = this.children[e];
        t.parent = null, t.dispatchEvent(PM)
      }
      return this.children.length = 0, this
    }
    attach(e) {
      return this.updateWorldMatrix(!0, !1), SM.copy(this.matrixWorld).invert(), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), SM.multiply(e.parent.matrixWorld)), e.applyMatrix4(SM), this.add(e), e.updateWorldMatrix(!1, !0), this
    }
    getObjectById(e) {
      return this.getObjectByProperty("id", e)
    }
    getObjectByName(e) {
      return this.getObjectByProperty("name", e)
    }
    getObjectByProperty(e, t) {
      if (this[e] === t) return this;
      for (let n = 0, r = this.children.length; n < r; n++) {
        const r = this.children[n].getObjectByProperty(e, t);
        if (void 0 !== r) return r
      }
    }
    getObjectsByProperty(e, t) {
      let n = [];
      this[e] === t && n.push(this);
      for (let r = 0, i = this.children.length; r < i; r++) {
        const i = this.children[r].getObjectsByProperty(e, t);
        i.length > 0 && (n = n.concat(i))
      }
      return n
    }
    getWorldPosition(e) {
      return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(e) {
      return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(wM, e, TM), e
    }
    getWorldScale(e) {
      return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(wM, EM, e), e
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(!0, !1);
      const t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize()
    }
    raycast() {}
    traverse(e) {
      e(this);
      const t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e)
    }
    traverseVisible(e) {
      if (!1 === this.visible) return;
      e(this);
      const t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e)
    }
    traverseAncestors(e) {
      const t = this.parent;
      null !== t && (e(t), t.traverseAncestors(e))
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(e) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
      const t = this.children;
      for (let n = 0, r = t.length; n < r; n++) {
        const r = t[n];
        !0 !== r.matrixWorldAutoUpdate && !0 !== e || r.updateMatrixWorld(e)
      }
    }
    updateWorldMatrix(e, t) {
      const n = this.parent;
      if (!0 === e && null !== n && !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === t) {
        const e = this.children;
        for (let t = 0, n = e.length; t < n; t++) {
          const n = e[t];
          !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!1, !0)
        }
      }
    }
    toJSON(e) {
      const t = void 0 === e || "string" == typeof e,
        n = {};
      t && (e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      }, n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      const r = {};

      function i(t, n) {
        return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid
      }
      if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), !0 === this.castShadow && (r.castShadow = !0), !0 === this.receiveShadow && (r.receiveShadow = !0), !1 === this.visible && (r.visible = !1), !1 === this.frustumCulled && (r.frustumCulled = !1), 0 !== this.renderOrder && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (r.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (r.environment = this.environment.toJSON(e).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        r.geometry = i(e.geometries, this.geometry);
        const t = this.geometry.parameters;
        if (void 0 !== t && void 0 !== t.shapes) {
          const n = t.shapes;
          if (Array.isArray(n))
            for (let t = 0, r = n.length; t < r; t++) {
              const r = n[t];
              i(e.shapes, r)
            } else i(e.shapes, n)
        }
      }
      if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), void 0 !== this.material)
        if (Array.isArray(this.material)) {
          const t = [];
          for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
          r.material = t
        } else r.material = i(e.materials, this.material);
      if (this.children.length > 0) {
        r.children = [];
        for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object)
      }
      if (this.animations.length > 0) {
        r.animations = [];
        for (let t = 0; t < this.animations.length; t++) {
          const n = this.animations[t];
          r.animations.push(i(e.animations, n))
        }
      }
      if (t) {
        const t = a(e.geometries),
          r = a(e.materials),
          i = a(e.textures),
          o = a(e.images),
          s = a(e.shapes),
          l = a(e.skeletons),
          c = a(e.animations),
          u = a(e.nodes);
        t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), l.length > 0 && (n.skeletons = l), c.length > 0 && (n.animations = c), u.length > 0 && (n.nodes = u)
      }
      return n.object = r, n;

      function a(e) {
        const t = [];
        for (const n in e) {
          const r = e[n];
          delete r.metadata, t.push(r)
        }
        return t
      }
    }
    clone(e) {
      return (new this.constructor).copy(this, e)
    }
    copy(e) {
      let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t)
        for (let t = 0; t < e.children.length; t++) {
          const n = e.children[t];
          this.add(n.clone())
        }
      return this
    }
  }
  DM.DEFAULT_UP = new xS(0, 1, 0), DM.DEFAULT_MATRIX_AUTO_UPDATE = !0, DM.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
  const NM = new xS,
    OM = new xS,
    IM = new xS,
    UM = new xS,
    kM = new xS,
    zM = new xS,
    FM = new xS,
    BM = new xS,
    HM = new xS,
    GM = new xS;
  class VM {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new xS,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new xS,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new xS;
      this.a = e, this.b = t, this.c = n
    }
    static getNormal(e, t, n, r) {
      r.subVectors(n, t), NM.subVectors(e, t), r.cross(NM);
      const i = r.lengthSq();
      return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0)
    }
    static getBarycoord(e, t, n, r, i) {
      NM.subVectors(r, t), OM.subVectors(n, t), IM.subVectors(e, t);
      const a = NM.dot(NM),
        o = NM.dot(OM),
        s = NM.dot(IM),
        l = OM.dot(OM),
        c = OM.dot(IM),
        u = a * l - o * o;
      if (0 === u) return i.set(-2, -1, -1);
      const h = 1 / u,
        d = (l * s - o * c) * h,
        p = (a * c - o * s) * h;
      return i.set(1 - d - p, p, d)
    }
    static containsPoint(e, t, n, r) {
      return this.getBarycoord(e, t, n, r, UM), UM.x >= 0 && UM.y >= 0 && UM.x + UM.y <= 1
    }
    static getUV(e, t, n, r, i, a, o, s) {
      return this.getBarycoord(e, t, n, r, UM), s.set(0, 0), s.addScaledVector(i, UM.x), s.addScaledVector(a, UM.y), s.addScaledVector(o, UM.z), s
    }
    static isFrontFacing(e, t, n, r) {
      return NM.subVectors(n, t), OM.subVectors(e, t), NM.cross(OM).dot(r) < 0
    }
    set(e, t, n) {
      return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
    }
    setFromPointsAndIndices(e, t, n, r) {
      return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this
    }
    setFromAttributeAndIndices(e, t, n, r) {
      return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this
    }
    clone() {
      return (new this.constructor).copy(this)
    }
    copy(e) {
      return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
    }
    getArea() {
      return NM.subVectors(this.c, this.b), OM.subVectors(this.a, this.b), .5 * NM.cross(OM).length()
    }
    getMidpoint(e) {
      return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(e) {
      return VM.getNormal(this.a, this.b, this.c, e)
    }
    getPlane(e) {
      return e.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(e, t) {
      return VM.getBarycoord(e, this.a, this.b, this.c, t)
    }
    getUV(e, t, n, r, i) {
      return VM.getUV(e, this.a, this.b, this.c, t, n, r, i)
    }
    containsPoint(e) {
      return VM.containsPoint(e, this.a, this.b, this.c)
    }
    isFrontFacing(e) {
      return VM.isFrontFacing(this.a, this.b, this.c, e)
    }
    intersectsBox(e) {
      return e.intersectsTriangle(this)
    }
    closestPointToPoint(e, t) {
      const n = this.a,
        r = this.b,
        i = this.c;
      let a, o;
      kM.subVectors(r, n), zM.subVectors(i, n), BM.subVectors(e, n);
      const s = kM.dot(BM),
        l = zM.dot(BM);
      if (s <= 0 && l <= 0) return t.copy(n);
      HM.subVectors(e, r);
      const c = kM.dot(HM),
        u = zM.dot(HM);
      if (c >= 0 && u <= c) return t.copy(r);
      const h = s * u - c * l;
      if (h <= 0 && s >= 0 && c <= 0) return a = s / (s - c), t.copy(n).addScaledVector(kM, a);
      GM.subVectors(e, i);
      const d = kM.dot(GM),
        p = zM.dot(GM);
      if (p >= 0 && d <= p) return t.copy(i);
      const f = d * l - s * p;
      if (f <= 0 && l >= 0 && p <= 0) return o = l / (l - p), t.copy(n).addScaledVector(zM, o);
      const m = c * p - d * u;
      if (m <= 0 && u - c >= 0 && d - p >= 0) return FM.subVectors(i, r), o = (u - c) / (u - c + (d - p)), t.copy(r).addScaledVector(FM, o);
      const g = 1 / (m + f + h);
      return a = f * g, o = h * g, t.copy(n).addScaledVector(kM, a).addScaledVector(zM, o)
    }
    equals(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
  }
  let WM = 0;
  class jM extends Cm {
    constructor() {
      super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
        value: WM++
      }), this.uuid = Hx(), this.name = "", this.type = "Material", this.blending = xp, this.side = vp, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Ip, this.blendDst = Up, this.blendEquation = Ep, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = jp, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Tm, this.stencilZFail = Tm, this.stencilZPass = Tm, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
    }
    get alphaTest() {
      return this._alphaTest
    }
    set alphaTest(e) {
      this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString()
    }
    setValues(e) {
      if (void 0 !== e)
        for (const t in e) {
          const n = e[t];
          if (void 0 === n) {
            console.warn("THREE.Material: '" + t + "' parameter is undefined.");
            continue
          }
          const r = this[t];
          void 0 !== r ? r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
        }
    }
    toJSON(e) {
      const t = void 0 === e || "string" == typeof e;
      t && (e = {
        textures: {},
        images: {}
      });
      const n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };

      function r(e) {
        const t = [];
        for (const n in e) {
          const r = e[n];
          delete r.metadata, t.push(r)
        }
        return t
      }
      if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (n.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== xp && (n.blending = this.blending), this.side !== vp && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.forceSinglePass && (n.forceSinglePass = this.forceSinglePass), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), !1 === this.fog && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData), t) {
        const t = r(e.textures),
          i = r(e.images);
        t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i)
      }
      return n
    }
    clone() {
      return (new this.constructor).copy(this)
    }
    copy(e) {
      this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
      const t = e.clippingPlanes;
      let n = null;
      if (null !== t) {
        const e = t.length;
        n = new Array(e);
        for (let r = 0; r !== e; ++r) n[r] = t[r].clone()
      }
      return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
    set needsUpdate(e) {
      !0 === e && this.version++
    }
  }
  class qM extends jM {
    constructor(e) {
      super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new cS(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Kp, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e)
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this
    }
  }
  const XM = new xS,
    YM = new Yx;
  class ZM {
    constructor(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = void 0 !== e ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRange = {
        offset: 0,
        count: -1
      }, this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(e) {
      !0 === e && this.version++
    }
    setUsage(e) {
      return this.usage = e, this
    }
    copy(e) {
      return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this
    }
    copyAt(e, t, n) {
      e *= this.itemSize, n *= t.itemSize;
      for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
      return this
    }
    copyArray(e) {
      return this.array.set(e), this
    }
    applyMatrix3(e) {
      if (2 === this.itemSize)
        for (let t = 0, n = this.count; t < n; t++) YM.fromBufferAttribute(this, t), YM.applyMatrix3(e), this.setXY(t, YM.x, YM.y);
      else if (3 === this.itemSize)
        for (let t = 0, n = this.count; t < n; t++) XM.fromBufferAttribute(this, t), XM.applyMatrix3(e), this.setXYZ(t, XM.x, XM.y, XM.z);
      return this
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++) XM.fromBufferAttribute(this, t), XM.applyMatrix4(e), this.setXYZ(t, XM.x, XM.y, XM.z);
      return this
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++) XM.fromBufferAttribute(this, t), XM.applyNormalMatrix(e), this.setXYZ(t, XM.x, XM.y, XM.z);
      return this
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++) XM.fromBufferAttribute(this, t), XM.transformDirection(e), this.setXYZ(t, XM.x, XM.y, XM.z);
      return this
    }
    set(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return this.array.set(e, t), this
    }
    getX(e) {
      let t = this.array[e * this.itemSize];
      return this.normalized && (t = qx(t, this.array)), t
    }
    setX(e, t) {
      return this.normalized && (t = Xx(t, this.array)), this.array[e * this.itemSize] = t, this
    }
    getY(e) {
      let t = this.array[e * this.itemSize + 1];
      return this.normalized && (t = qx(t, this.array)), t
    }
    setY(e, t) {
      return this.normalized && (t = Xx(t, this.array)), this.array[e * this.itemSize + 1] = t, this
    }
    getZ(e) {
      let t = this.array[e * this.itemSize + 2];
      return this.normalized && (t = qx(t, this.array)), t
    }
    setZ(e, t) {
      return this.normalized && (t = Xx(t, this.array)), this.array[e * this.itemSize + 2] = t, this
    }
    getW(e) {
      let t = this.array[e * this.itemSize + 3];
      return this.normalized && (t = qx(t, this.array)), t
    }
    setW(e, t) {
      return this.normalized && (t = Xx(t, this.array)), this.array[e * this.itemSize + 3] = t, this
    }
    setXY(e, t, n) {
      return e *= this.itemSize, this.normalized && (t = Xx(t, this.array), n = Xx(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this
    }
    setXYZ(e, t, n, r) {
      return e *= this.itemSize, this.normalized && (t = Xx(t, this.array), n = Xx(n, this.array), r = Xx(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this
    }
    setXYZW(e, t, n, r, i) {
      return e *= this.itemSize, this.normalized && (t = Xx(t, this.array), n = Xx(n, this.array), r = Xx(r, this.array), i = Xx(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this
    }
    onUpload(e) {
      return this.onUploadCallback = e, this
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this)
    }
    toJSON() {
      const e = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized
      };
      return "" !== this.name && (e.name = this.name), 35044 !== this.usage && (e.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (e.updateRange = this.updateRange), e
    }
    copyColorsArray() {
      console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")
    }
    copyVector2sArray() {
      console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")
    }
    copyVector3sArray() {
      console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")
    }
    copyVector4sArray() {
      console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")
    }
  }
  class KM extends ZM {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n)
    }
  }
  class $M extends ZM {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n)
    }
  }
  class JM extends ZM {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n)
    }
  }
  let QM = 0;
  const ew = new sM,
    tw = new DM,
    nw = new xS,
    rw = new wS,
    iw = new wS,
    aw = new xS;
  class ow extends Cm {
    constructor() {
      super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
        value: QM++
      }), this.uuid = Hx(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
        start: 0,
        count: 1 / 0
      }, this.userData = {}
    }
    getIndex() {
      return this.index
    }
    setIndex(e) {
      return Array.isArray(e) ? this.index = new($x(e) ? $M : KM)(e, 1) : this.index = e, this
    }
    getAttribute(e) {
      return this.attributes[e]
    }
    setAttribute(e, t) {
      return this.attributes[e] = t, this
    }
    deleteAttribute(e) {
      return delete this.attributes[e], this
    }
    hasAttribute(e) {
      return void 0 !== this.attributes[e]
    }
    addGroup(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      this.groups.push({
        start: e,
        count: t,
        materialIndex: n
      })
    }
    clearGroups() {
      this.groups = []
    }
    setDrawRange(e, t) {
      this.drawRange.start = e, this.drawRange.count = t
    }
    applyMatrix4(e) {
      const t = this.attributes.position;
      void 0 !== t && (t.applyMatrix4(e), t.needsUpdate = !0);
      const n = this.attributes.normal;
      if (void 0 !== n) {
        const t = (new Zx).getNormalMatrix(e);
        n.applyNormalMatrix(t), n.needsUpdate = !0
      }
      const r = this.attributes.tangent;
      return void 0 !== r && (r.transformDirection(e), r.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
    }
    applyQuaternion(e) {
      return ew.makeRotationFromQuaternion(e), this.applyMatrix4(ew), this
    }
    rotateX(e) {
      return ew.makeRotationX(e), this.applyMatrix4(ew), this
    }
    rotateY(e) {
      return ew.makeRotationY(e), this.applyMatrix4(ew), this
    }
    rotateZ(e) {
      return ew.makeRotationZ(e), this.applyMatrix4(ew), this
    }
    translate(e, t, n) {
      return ew.makeTranslation(e, t, n), this.applyMatrix4(ew), this
    }
    scale(e, t, n) {
      return ew.makeScale(e, t, n), this.applyMatrix4(ew), this
    }
    lookAt(e) {
      return tw.lookAt(e), tw.updateMatrix(), this.applyMatrix4(tw.matrix), this
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(nw).negate(), this.translate(nw.x, nw.y, nw.z), this
    }
    setFromPoints(e) {
      const t = [];
      for (let n = 0, r = e.length; n < r; n++) {
        const r = e[n];
        t.push(r.x, r.y, r.z || 0)
      }
      return this.setAttribute("position", new JM(t, 3)), this
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new wS);
      const e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new xS(-1 / 0, -1 / 0, -1 / 0), new xS(1 / 0, 1 / 0, 1 / 0));
      if (void 0 !== e) {
        if (this.boundingBox.setFromBufferAttribute(e), t)
          for (let e = 0, n = t.length; e < n; e++) {
            const n = t[e];
            rw.setFromBufferAttribute(n), this.morphTargetsRelative ? (aw.addVectors(this.boundingBox.min, rw.min), this.boundingBox.expandByPoint(aw), aw.addVectors(this.boundingBox.max, rw.max), this.boundingBox.expandByPoint(aw)) : (this.boundingBox.expandByPoint(rw.min), this.boundingBox.expandByPoint(rw.max))
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new GS);
      const e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new xS, 1 / 0);
      if (e) {
        const n = this.boundingSphere.center;
        if (rw.setFromBufferAttribute(e), t)
          for (let e = 0, n = t.length; e < n; e++) {
            const n = t[e];
            iw.setFromBufferAttribute(n), this.morphTargetsRelative ? (aw.addVectors(rw.min, iw.min), rw.expandByPoint(aw), aw.addVectors(rw.max, iw.max), rw.expandByPoint(aw)) : (rw.expandByPoint(iw.min), rw.expandByPoint(iw.max))
          }
        rw.getCenter(n);
        let r = 0;
        for (let t = 0, i = e.count; t < i; t++) aw.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(aw));
        if (t)
          for (let i = 0, a = t.length; i < a; i++) {
            const a = t[i],
              o = this.morphTargetsRelative;
            for (let t = 0, i = a.count; t < i; t++) aw.fromBufferAttribute(a, t), o && (nw.fromBufferAttribute(e, t), aw.add(nw)), r = Math.max(r, n.distanceToSquared(aw))
          }
        this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
      }
    }
    computeTangents() {
      const e = this.index,
        t = this.attributes;
      if (null === e || void 0 === t.position || void 0 === t.normal || void 0 === t.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      const n = e.array,
        r = t.position.array,
        i = t.normal.array,
        a = t.uv.array,
        o = r.length / 3;
      !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new ZM(new Float32Array(4 * o), 4));
      const s = this.getAttribute("tangent").array,
        l = [],
        c = [];
      for (let e = 0; e < o; e++) l[e] = new xS, c[e] = new xS;
      const u = new xS,
        h = new xS,
        d = new xS,
        p = new Yx,
        f = new Yx,
        m = new Yx,
        g = new xS,
        v = new xS;

      function _(e, t, n) {
        u.fromArray(r, 3 * e), h.fromArray(r, 3 * t), d.fromArray(r, 3 * n), p.fromArray(a, 2 * e), f.fromArray(a, 2 * t), m.fromArray(a, 2 * n), h.sub(u), d.sub(u), f.sub(p), m.sub(p);
        const i = 1 / (f.x * m.y - m.x * f.y);
        isFinite(i) && (g.copy(h).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(i), v.copy(d).multiplyScalar(f.x).addScaledVector(h, -m.x).multiplyScalar(i), l[e].add(g), l[t].add(g), l[n].add(g), c[e].add(v), c[t].add(v), c[n].add(v))
      }
      let y = this.groups;
      0 === y.length && (y = [{
        start: 0,
        count: n.length
      }]);
      for (let e = 0, t = y.length; e < t; ++e) {
        const t = y[e],
          r = t.start;
        for (let e = r, i = r + t.count; e < i; e += 3) _(n[e + 0], n[e + 1], n[e + 2])
      }
      const b = new xS,
        x = new xS,
        S = new xS,
        M = new xS;

      function w(e) {
        S.fromArray(i, 3 * e), M.copy(S);
        const t = l[e];
        b.copy(t), b.sub(S.multiplyScalar(S.dot(t))).normalize(), x.crossVectors(M, t);
        const n = x.dot(c[e]) < 0 ? -1 : 1;
        s[4 * e] = b.x, s[4 * e + 1] = b.y, s[4 * e + 2] = b.z, s[4 * e + 3] = n
      }
      for (let e = 0, t = y.length; e < t; ++e) {
        const t = y[e],
          r = t.start;
        for (let e = r, i = r + t.count; e < i; e += 3) w(n[e + 0]), w(n[e + 1]), w(n[e + 2])
      }
    }
    computeVertexNormals() {
      const e = this.index,
        t = this.getAttribute("position");
      if (void 0 !== t) {
        let n = this.getAttribute("normal");
        if (void 0 === n) n = new ZM(new Float32Array(3 * t.count), 3), this.setAttribute("normal", n);
        else
          for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
        const r = new xS,
          i = new xS,
          a = new xS,
          o = new xS,
          s = new xS,
          l = new xS,
          c = new xS,
          u = new xS;
        if (e)
          for (let h = 0, d = e.count; h < d; h += 3) {
            const d = e.getX(h + 0),
              p = e.getX(h + 1),
              f = e.getX(h + 2);
            r.fromBufferAttribute(t, d), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, f), c.subVectors(a, i), u.subVectors(r, i), c.cross(u), o.fromBufferAttribute(n, d), s.fromBufferAttribute(n, p), l.fromBufferAttribute(n, f), o.add(c), s.add(c), l.add(c), n.setXYZ(d, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(f, l.x, l.y, l.z)
          } else
            for (let e = 0, o = t.count; e < o; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), c.subVectors(a, i), u.subVectors(r, i), c.cross(u), n.setXYZ(e + 0, c.x, c.y, c.z), n.setXYZ(e + 1, c.x, c.y, c.z), n.setXYZ(e + 2, c.x, c.y, c.z);
        this.normalizeNormals(), n.needsUpdate = !0
      }
    }
    merge() {
      return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this
    }
    normalizeNormals() {
      const e = this.attributes.normal;
      for (let t = 0, n = e.count; t < n; t++) aw.fromBufferAttribute(e, t), aw.normalize(), e.setXYZ(t, aw.x, aw.y, aw.z)
    }
    toNonIndexed() {
      function e(e, t) {
        const n = e.array,
          r = e.itemSize,
          i = e.normalized,
          a = new n.constructor(t.length * r);
        let o = 0,
          s = 0;
        for (let i = 0, l = t.length; i < l; i++) {
          o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
          for (let e = 0; e < r; e++) a[s++] = n[o++]
        }
        return new ZM(a, r, i)
      }
      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const t = new ow,
        n = this.index.array,
        r = this.attributes;
      for (const i in r) {
        const a = e(r[i], n);
        t.setAttribute(i, a)
      }
      const i = this.morphAttributes;
      for (const r in i) {
        const a = [],
          o = i[r];
        for (let t = 0, r = o.length; t < r; t++) {
          const r = e(o[t], n);
          a.push(r)
        }
        t.morphAttributes[r] = a
      }
      t.morphTargetsRelative = this.morphTargetsRelative;
      const a = this.groups;
      for (let e = 0, n = a.length; e < n; e++) {
        const n = a[e];
        t.addGroup(n.start, n.count, n.materialIndex)
      }
      return t
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), void 0 !== this.parameters) {
        const t = this.parameters;
        for (const n in t) void 0 !== t[n] && (e[n] = t[n]);
        return e
      }
      e.data = {
        attributes: {}
      };
      const t = this.index;
      null !== t && (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array)
      });
      const n = this.attributes;
      for (const t in n) {
        const r = n[t];
        e.data.attributes[t] = r.toJSON(e.data)
      }
      const r = {};
      let i = !1;
      for (const t in this.morphAttributes) {
        const n = this.morphAttributes[t],
          a = [];
        for (let t = 0, r = n.length; t < r; t++) {
          const r = n[t];
          a.push(r.toJSON(e.data))
        }
        a.length > 0 && (r[t] = a, i = !0)
      }
      i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
      const a = this.groups;
      a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
      const o = this.boundingSphere;
      return null !== o && (e.data.boundingSphere = {
        center: o.center.toArray(),
        radius: o.radius
      }), e
    }
    clone() {
      return (new this.constructor).copy(this)
    }
    copy(e) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const t = {};
      this.name = e.name;
      const n = e.index;
      null !== n && this.setIndex(n.clone(t));
      const r = e.attributes;
      for (const e in r) {
        const n = r[e];
        this.setAttribute(e, n.clone(t))
      }
      const i = e.morphAttributes;
      for (const e in i) {
        const n = [],
          r = i[e];
        for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
        this.morphAttributes[e] = n
      }
      this.morphTargetsRelative = e.morphTargetsRelative;
      const a = e.groups;
      for (let e = 0, t = a.length; e < t; e++) {
        const t = a[e];
        this.addGroup(t.start, t.count, t.materialIndex)
      }
      const o = e.boundingBox;
      null !== o && (this.boundingBox = o.clone());
      const s = e.boundingSphere;
      return null !== s && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, void 0 !== e.parameters && (this.parameters = Object.assign({}, e.parameters)), this
    }
    dispose() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }
  const sw = new sM,
    lw = new oM,
    cw = new GS,
    uw = new xS,
    hw = new xS,
    dw = new xS,
    pw = new xS,
    fw = new xS,
    mw = new Yx,
    gw = new Yx,
    vw = new Yx,
    _w = new xS,
    yw = new xS;
  class bw extends DM {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ow,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new qM;
      super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets()
    }
    copy(e, t) {
      return super.copy(e, t), void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this
    }
    updateMorphTargets() {
      const e = this.geometry.morphAttributes,
        t = Object.keys(e);
      if (t.length > 0) {
        const n = e[t[0]];
        if (void 0 !== n) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let e = 0, t = n.length; e < t; e++) {
            const t = n[e].name || String(e);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e
          }
        }
      }
    }
    getVertexPosition(e, t) {
      const n = this.geometry,
        r = n.attributes.position,
        i = n.morphAttributes.position,
        a = n.morphTargetsRelative;
      t.fromBufferAttribute(r, e);
      const o = this.morphTargetInfluences;
      if (i && o) {
        fw.set(0, 0, 0);
        for (let n = 0, r = i.length; n < r; n++) {
          const r = o[n],
            s = i[n];
          0 !== r && (pw.fromBufferAttribute(s, e), a ? fw.addScaledVector(pw, r) : fw.addScaledVector(pw.sub(t), r))
        }
        t.add(fw)
      }
      return this.isSkinnedMesh && this.boneTransform(e, t), t
    }
    raycast(e, t) {
      const n = this.geometry,
        r = this.material,
        i = this.matrixWorld;
      if (void 0 === r) return;
      if (null === n.boundingSphere && n.computeBoundingSphere(), cw.copy(n.boundingSphere), cw.applyMatrix4(i), !1 === e.ray.intersectsSphere(cw)) return;
      if (sw.copy(i).invert(), lw.copy(e.ray).applyMatrix4(sw), null !== n.boundingBox && !1 === lw.intersectsBox(n.boundingBox)) return;
      let a;
      const o = n.index,
        s = n.attributes.position,
        l = n.attributes.uv,
        c = n.attributes.uv2,
        u = n.groups,
        h = n.drawRange;
      if (null !== o)
        if (Array.isArray(r))
          for (let n = 0, i = u.length; n < i; n++) {
            const i = u[n],
              s = r[i.materialIndex];
            for (let n = Math.max(i.start, h.start), r = Math.min(o.count, Math.min(i.start + i.count, h.start + h.count)); n < r; n += 3) {
              const r = o.getX(n),
                u = o.getX(n + 1),
                h = o.getX(n + 2);
              a = xw(this, s, e, lw, l, c, r, u, h), a && (a.faceIndex = Math.floor(n / 3), a.face.materialIndex = i.materialIndex, t.push(a))
            }
          } else {
            for (let n = Math.max(0, h.start), i = Math.min(o.count, h.start + h.count); n < i; n += 3) {
              const i = o.getX(n),
                s = o.getX(n + 1),
                u = o.getX(n + 2);
              a = xw(this, r, e, lw, l, c, i, s, u), a && (a.faceIndex = Math.floor(n / 3), t.push(a))
            }
          } else if (void 0 !== s)
            if (Array.isArray(r))
              for (let n = 0, i = u.length; n < i; n++) {
                const i = u[n],
                  o = r[i.materialIndex];
                for (let n = Math.max(i.start, h.start), r = Math.min(s.count, Math.min(i.start + i.count, h.start + h.count)); n < r; n += 3) {
                  a = xw(this, o, e, lw, l, c, n, n + 1, n + 2), a && (a.faceIndex = Math.floor(n / 3), a.face.materialIndex = i.materialIndex, t.push(a))
                }
              } else {
                for (let n = Math.max(0, h.start), i = Math.min(s.count, h.start + h.count); n < i; n += 3) {
                  a = xw(this, r, e, lw, l, c, n, n + 1, n + 2), a && (a.faceIndex = Math.floor(n / 3), t.push(a))
                }
              }
    }
  }

  function xw(e, t, n, r, i, a, o, s, l) {
    e.getVertexPosition(o, uw), e.getVertexPosition(s, hw), e.getVertexPosition(l, dw);
    const c = function (e, t, n, r, i, a, o, s) {
      let l;
      if (l = t.side === _p ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === vp, s), null === l) return null;
      yw.copy(s), yw.applyMatrix4(e.matrixWorld);
      const c = n.ray.origin.distanceTo(yw);
      return c < n.near || c > n.far ? null : {
        distance: c,
        point: yw.clone(),
        object: e
      }
    }(e, t, n, r, uw, hw, dw, _w);
    if (c) {
      i && (mw.fromBufferAttribute(i, o), gw.fromBufferAttribute(i, s), vw.fromBufferAttribute(i, l), c.uv = VM.getUV(_w, uw, hw, dw, mw, gw, vw, new Yx)), a && (mw.fromBufferAttribute(a, o), gw.fromBufferAttribute(a, s), vw.fromBufferAttribute(a, l), c.uv2 = VM.getUV(_w, uw, hw, dw, mw, gw, vw, new Yx));
      const e = {
        a: o,
        b: s,
        c: l,
        normal: new xS,
        materialIndex: 0
      };
      VM.getNormal(uw, hw, dw, e.normal), c.face = e
    }
    return c
  }
  class Sw extends ow {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
      super(), this.type = "BoxGeometry", this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: i,
        depthSegments: a
      };
      const o = this;
      r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);
      const s = [],
        l = [],
        c = [],
        u = [];
      let h = 0,
        d = 0;

      function p(e, t, n, r, i, a, p, f, m, g, v) {
        const _ = a / m,
          y = p / g,
          b = a / 2,
          x = p / 2,
          S = f / 2,
          M = m + 1,
          w = g + 1;
        let T = 0,
          E = 0;
        const A = new xS;
        for (let a = 0; a < w; a++) {
          const o = a * y - x;
          for (let s = 0; s < M; s++) {
            const h = s * _ - b;
            A[e] = h * r, A[t] = o * i, A[n] = S, l.push(A.x, A.y, A.z), A[e] = 0, A[t] = 0, A[n] = f > 0 ? 1 : -1, c.push(A.x, A.y, A.z), u.push(s / m), u.push(1 - a / g), T += 1
          }
        }
        for (let e = 0; e < g; e++)
          for (let t = 0; t < m; t++) {
            const n = h + t + M * e,
              r = h + t + M * (e + 1),
              i = h + (t + 1) + M * (e + 1),
              a = h + (t + 1) + M * e;
            s.push(n, r, a), s.push(r, i, a), E += 6
          }
        o.addGroup(d, E, v), d += E, h += T
      }
      p("z", "y", "x", -1, -1, n, t, e, a, i, 0), p("z", "y", "x", 1, -1, n, t, -e, a, i, 1), p("x", "z", "y", 1, 1, e, n, t, r, a, 2), p("x", "z", "y", 1, -1, e, n, -t, r, a, 3), p("x", "y", "z", 1, -1, e, t, n, r, i, 4), p("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(s), this.setAttribute("position", new JM(l, 3)), this.setAttribute("normal", new JM(c, 3)), this.setAttribute("uv", new JM(u, 2))
    }
    static fromJSON(e) {
      return new Sw(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
    }
  }

  function Mw(e) {
    const t = {};
    for (const n in e) {
      t[n] = {};
      for (const r in e[n]) {
        const i = e[n][r];
        i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i
      }
    }
    return t
  }

  function ww(e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = Mw(e[n]);
      for (const e in r) t[e] = r[e]
    }
    return t
  }

  function Tw(e) {
    return null === e.getRenderTarget() && e.outputEncoding === ym ? Mm : wm
  }
  const Ew = {
    clone: Mw,
    merge: ww
  };
  class Aw extends jM {
    constructor(e) {
      super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}", this.fragmentShader = "void main(){gl_FragColor=vec4(1.0,0.0,0.0,1.0);}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1
      }, this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
      }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== e && this.setValues(e)
    }
    copy(e) {
      return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Mw(e.uniforms), this.uniformsGroups = function (e) {
        const t = [];
        for (let n = 0; n < e.length; n++) t.push(e[n].clone());
        return t
      }(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this
    }
    toJSON(e) {
      const t = super.toJSON(e);
      t.glslVersion = this.glslVersion, t.uniforms = {};
      for (const n in this.uniforms) {
        const r = this.uniforms[n].value;
        r && r.isTexture ? t.uniforms[n] = {
          type: "t",
          value: r.toJSON(e).uuid
        } : r && r.isColor ? t.uniforms[n] = {
          type: "c",
          value: r.getHex()
        } : r && r.isVector2 ? t.uniforms[n] = {
          type: "v2",
          value: r.toArray()
        } : r && r.isVector3 ? t.uniforms[n] = {
          type: "v3",
          value: r.toArray()
        } : r && r.isVector4 ? t.uniforms[n] = {
          type: "v4",
          value: r.toArray()
        } : r && r.isMatrix3 ? t.uniforms[n] = {
          type: "m3",
          value: r.toArray()
        } : r && r.isMatrix4 ? t.uniforms[n] = {
          type: "m4",
          value: r.toArray()
        } : t.uniforms[n] = {
          value: r
        }
      }
      Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
      const n = {};
      for (const e in this.extensions) !0 === this.extensions[e] && (n[e] = !0);
      return Object.keys(n).length > 0 && (t.extensions = n), t
    }
  }
  class Cw extends DM {
    constructor() {
      super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new sM, this.projectionMatrix = new sM, this.projectionMatrixInverse = new sM
    }
    copy(e, t) {
      return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(!0, !1);
      const t = this.matrixWorld.elements;
      return e.set(-t[8], -t[9], -t[10]).normalize()
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(e, t) {
      super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
      return (new this.constructor).copy(this)
    }
  }
  class Lw extends Cw {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2e3;
      super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }
    copy(e, t) {
      return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
    }
    setFocalLength(e) {
      const t = .5 * this.getFilmHeight() / e;
      this.fov = 2 * Bx * Math.atan(t), this.updateProjectionMatrix()
    }
    getFocalLength() {
      const e = Math.tan(.5 * Fx * this.fov);
      return .5 * this.getFilmHeight() / e
    }
    getEffectiveFOV() {
      return 2 * Bx * Math.atan(Math.tan(.5 * Fx * this.fov) / this.zoom)
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1)
    }
    setViewOffset(e, t, n, r, i, a) {
      this.aspect = e / t, null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix()
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
      const e = this.near;
      let t = e * Math.tan(.5 * Fx * this.fov) / this.zoom,
        n = 2 * t,
        r = this.aspect * n,
        i = -.5 * r;
      const a = this.view;
      if (null !== this.view && this.view.enabled) {
        const e = a.fullWidth,
          o = a.fullHeight;
        i += a.offsetX * r / e, t -= a.offsetY * n / o, r *= a.width / e, n *= a.height / o
      }
      const o = this.filmOffset;
      0 !== o && (i += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
    }
  }
  const Rw = -90;
  class Pw extends DM {
    constructor(e, t, n) {
      super(), this.type = "CubeCamera", this.renderTarget = n;
      const r = new Lw(Rw, 1, e, t);
      r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(1, 0, 0), this.add(r);
      const i = new Lw(Rw, 1, e, t);
      i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), this.add(i);
      const a = new Lw(Rw, 1, e, t);
      a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(0, 1, 0), this.add(a);
      const o = new Lw(Rw, 1, e, t);
      o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(0, -1, 0), this.add(o);
      const s = new Lw(Rw, 1, e, t);
      s.layers = this.layers, s.up.set(0, 1, 0), s.lookAt(0, 0, 1), this.add(s);
      const l = new Lw(Rw, 1, e, t);
      l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l)
    }
    update(e, t) {
      null === this.parent && this.updateMatrixWorld();
      const n = this.renderTarget,
        [r, i, a, o, s, l] = this.children,
        c = e.getRenderTarget(),
        u = e.toneMapping,
        h = e.xr.enabled;
      e.toneMapping = Qp, e.xr.enabled = !1;
      const d = n.texture.generateMipmaps;
      n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, r), e.setRenderTarget(n, 1), e.render(t, i), e.setRenderTarget(n, 2), e.render(t, a), e.setRenderTarget(n, 3), e.render(t, o), e.setRenderTarget(n, 4), e.render(t, s), n.texture.generateMipmaps = d, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(c), e.toneMapping = u, e.xr.enabled = h, n.texture.needsPMREMUpdate = !0
    }
  }
  class Dw extends mS {
    constructor(e, t, n, r, i, a, o, s, l, c) {
      super(e = void 0 !== e ? e : [], t = void 0 !== t ? t : of , n, r, i, a, o, s, l, c), this.isCubeTexture = !0, this.flipY = !1
    }
    get images() {
      return this.image
    }
    set images(e) {
      this.image = e
    }
  }
  class Nw extends vS {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      super(e, e, t), this.isWebGLCubeRenderTarget = !0;
      const n = {
          width: e,
          height: e,
          depth: 1
        },
        r = [n, n, n, n, n, n];
      this.texture = new Dw(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== t.generateMipmaps && t.generateMipmaps, this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : vf
    }
    fromEquirectangularTexture(e, t) {
      this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
      const n = {
          tEquirect: {
            value: null
          }
        },
        r = "varying vec3 vWorldDirection;vec3 transformDirection(in vec3 dir,in mat4 matrix){return normalize((matrix*vec4(dir,0.0)).xyz);}void main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\n}",
        i = "uniform sampler2D tEquirect;varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vec3 direction=normalize(vWorldDirection);vec2 sampleUV=equirectUv(direction);gl_FragColor=texture2D(tEquirect,sampleUV);}",
        a = new Sw(5, 5, 5),
        o = new Aw({
          name: "CubemapFromEquirect",
          uniforms: Mw(n),
          vertexShader: r,
          fragmentShader: i,
          side: _p,
          blending: bp
        });
      o.uniforms.tEquirect.value = t;
      const s = new bw(a, o),
        l = t.minFilter;
      t.minFilter === yf && (t.minFilter = vf);
      return new Pw(1, 10, this).update(e, s), t.minFilter = l, s.geometry.dispose(), s.material.dispose(), this
    }
    clear(e, t, n, r) {
      const i = e.getRenderTarget();
      for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
      e.setRenderTarget(i)
    }
  }
  const Ow = new xS,
    Iw = new xS,
    Uw = new Zx;
  class kw {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new xS(1, 0, 0),
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      this.isPlane = !0, this.normal = e, this.constant = t
    }
    set(e, t) {
      return this.normal.copy(e), this.constant = t, this
    }
    setComponents(e, t, n, r) {
      return this.normal.set(e, t, n), this.constant = r, this
    }
    setFromNormalAndCoplanarPoint(e, t) {
      return this.normal.copy(e), this.constant = -t.dot(this.normal), this
    }
    setFromCoplanarPoints(e, t, n) {
      const r = Ow.subVectors(n, t).cross(Iw.subVectors(e, t)).normalize();
      return this.setFromNormalAndCoplanarPoint(r, e), this
    }
    copy(e) {
      return this.normal.copy(e.normal), this.constant = e.constant, this
    }
    normalize() {
      const e = 1 / this.normal.length();
      return this.normal.multiplyScalar(e), this.constant *= e, this
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this
    }
    distanceToPoint(e) {
      return this.normal.dot(e) + this.constant
    }
    distanceToSphere(e) {
      return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
      return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
    }
    intersectLine(e, t) {
      const n = e.delta(Ow),
        r = this.normal.dot(n);
      if (0 === r) return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
      const i = -(e.start.dot(this.normal) + this.constant) / r;
      return i < 0 || i > 1 ? null : t.copy(n).multiplyScalar(i).add(e.start)
    }
    intersectsLine(e) {
      const t = this.distanceToPoint(e.start),
        n = this.distanceToPoint(e.end);
      return t < 0 && n > 0 || n < 0 && t > 0
    }
    intersectsBox(e) {
      return e.intersectsPlane(this)
    }
    intersectsSphere(e) {
      return e.intersectsPlane(this)
    }
    coplanarPoint(e) {
      return e.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(e, t) {
      const n = t || Uw.getNormalMatrix(e),
        r = this.coplanarPoint(Ow).applyMatrix4(e),
        i = this.normal.applyMatrix3(n).normalize();
      return this.constant = -r.dot(i), this
    }
    translate(e) {
      return this.constant -= e.dot(this.normal), this
    }
    equals(e) {
      return e.normal.equals(this.normal) && e.constant === this.constant
    }
    clone() {
      return (new this.constructor).copy(this)
    }
  }
  const zw = new GS,
    Fw = new xS;
  class Bw {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new kw,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new kw,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new kw,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kw,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new kw,
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new kw;
      this.planes = [e, t, n, r, i, a]
    }
    set(e, t, n, r, i, a) {
      const o = this.planes;
      return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this
    }
    copy(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
      return this
    }
    setFromProjectionMatrix(e) {
      const t = this.planes,
        n = e.elements,
        r = n[0],
        i = n[1],
        a = n[2],
        o = n[3],
        s = n[4],
        l = n[5],
        c = n[6],
        u = n[7],
        h = n[8],
        d = n[9],
        p = n[10],
        f = n[11],
        m = n[12],
        g = n[13],
        v = n[14],
        _ = n[15];
      return t[0].setComponents(o - r, u - s, f - h, _ - m).normalize(), t[1].setComponents(o + r, u + s, f + h, _ + m).normalize(), t[2].setComponents(o + i, u + l, f + d, _ + g).normalize(), t[3].setComponents(o - i, u - l, f - d, _ - g).normalize(), t[4].setComponents(o - a, u - c, f - p, _ - v).normalize(), t[5].setComponents(o + a, u + c, f + p, _ + v).normalize(), this
    }
    intersectsObject(e) {
      const t = e.geometry;
      return null === t.boundingSphere && t.computeBoundingSphere(), zw.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(zw)
    }
    intersectsSprite(e) {
      return zw.center.set(0, 0, 0), zw.radius = .7071067811865476, zw.applyMatrix4(e.matrixWorld), this.intersectsSphere(zw)
    }
    intersectsSphere(e) {
      const t = this.planes,
        n = e.center,
        r = -e.radius;
      for (let e = 0; e < 6; e++) {
        if (t[e].distanceToPoint(n) < r) return !1
      }
      return !0
    }
    intersectsBox(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) {
        const r = t[n];
        if (Fw.x = r.normal.x > 0 ? e.max.x : e.min.x, Fw.y = r.normal.y > 0 ? e.max.y : e.min.y, Fw.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Fw) < 0) return !1
      }
      return !0
    }
    containsPoint(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++)
        if (t[n].distanceToPoint(e) < 0) return !1;
      return !0
    }
    clone() {
      return (new this.constructor).copy(this)
    }
  }

  function Hw() {
    let e = null,
      t = !1,
      n = null,
      r = null;

    function i(t, a) {
      n(t, a), r = e.requestAnimationFrame(i)
    }
    return {
      start: function () {
        !0 !== t && null !== n && (r = e.requestAnimationFrame(i), t = !0)
      },
      stop: function () {
        e.cancelAnimationFrame(r), t = !1
      },
      setAnimationLoop: function (e) {
        n = e
      },
      setContext: function (t) {
        e = t
      }
    }
  }

  function Gw(e, t) {
    const n = t.isWebGL2,
      r = new WeakMap;
    return {
      get: function (e) {
        return e.isInterleavedBufferAttribute && (e = e.data), r.get(e)
      },
      remove: function (t) {
        t.isInterleavedBufferAttribute && (t = t.data);
        const n = r.get(t);
        n && (e.deleteBuffer(n.buffer), r.delete(t))
      },
      update: function (t, i) {
        if (t.isGLBufferAttribute) {
          const e = r.get(t);
          return void((!e || e.version < t.version) && r.set(t, {
            buffer: t.buffer,
            type: t.type,
            bytesPerElement: t.elementSize,
            version: t.version
          }))
        }
        t.isInterleavedBufferAttribute && (t = t.data);
        const a = r.get(t);
        void 0 === a ? r.set(t, function (t, r) {
          const i = t.array,
            a = t.usage,
            o = e.createBuffer();
          let s;
          if (e.bindBuffer(r, o), e.bufferData(r, i, a), t.onUploadCallback(), i instanceof Float32Array) s = 5126;
          else if (i instanceof Uint16Array)
            if (t.isFloat16BufferAttribute) {
              if (!n) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
              s = 5131
            } else s = 5123;
          else if (i instanceof Int16Array) s = 5122;
          else if (i instanceof Uint32Array) s = 5125;
          else if (i instanceof Int32Array) s = 5124;
          else if (i instanceof Int8Array) s = 5120;
          else if (i instanceof Uint8Array) s = 5121;
          else {
            if (!(i instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + i);
            s = 5121
          }
          return {
            buffer: o,
            type: s,
            bytesPerElement: i.BYTES_PER_ELEMENT,
            version: t.version
          }
        }(t, i)) : a.version < t.version && (! function (t, r, i) {
          const a = r.array,
            o = r.updateRange;
          e.bindBuffer(i, t), -1 === o.count ? e.bufferSubData(i, 0, a) : (n ? e.bufferSubData(i, o.offset * a.BYTES_PER_ELEMENT, a, o.offset, o.count) : e.bufferSubData(i, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count)), o.count = -1), r.onUploadCallback()
        }(a.buffer, t, i), a.version = t.version)
      }
    }
  }
  var Vw = fe,
    Ww = TypeError,
    jw = ke,
    qw = dr,
    Xw = li,
    Yw = function (e, t) {
      if (!delete e[t]) throw Ww("Cannot delete property " + Vw(t) + " of " + Vw(e))
    },
    Zw = ui;
  ti({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: 1 !== [].unshift(0) || ! function () {
      try {
        Object.defineProperty([], "length", {
          writable: !1
        }).unshift()
      } catch (e) {
        return e instanceof TypeError
      }
    }()
  }, {
    unshift: function (e) {
      var t = jw(this),
        n = qw(t),
        r = arguments.length;
      if (r) {
        Zw(n + r);
        for (var i = n; i--;) {
          var a = i + r;
          i in t ? t[a] = t[i] : Yw(t, a)
        }
        for (var o = 0; o < r; o++) t[o] = arguments[o]
      }
      return Xw(t, n + r)
    }
  });
  class Kw extends ow {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
      super(), this.type = "PlaneGeometry", this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r
      };
      const i = e / 2,
        a = t / 2,
        o = Math.floor(n),
        s = Math.floor(r),
        l = o + 1,
        c = s + 1,
        u = e / o,
        h = t / s,
        d = [],
        p = [],
        f = [],
        m = [];
      for (let e = 0; e < c; e++) {
        const t = e * h - a;
        for (let n = 0; n < l; n++) {
          const r = n * u - i;
          p.push(r, -t, 0), f.push(0, 0, 1), m.push(n / o), m.push(1 - e / s)
        }
      }
      for (let e = 0; e < s; e++)
        for (let t = 0; t < o; t++) {
          const n = t + l * e,
            r = t + l * (e + 1),
            i = t + 1 + l * (e + 1),
            a = t + 1 + l * e;
          d.push(n, r, a), d.push(r, i, a)
        }
      this.setIndex(d), this.setAttribute("position", new JM(p, 3)), this.setAttribute("normal", new JM(f, 3)), this.setAttribute("uv", new JM(m, 2))
    }
    static fromJSON(e) {
      return new Kw(e.width, e.height, e.widthSegments, e.heightSegments)
    }
  }
  const $w = {
      alphamap_fragment: "#ifdef USE_ALPHAMAP\ndiffuseColor.a*=texture2D(alphaMap,vUv).g;\n#endif",
      alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\nuniform sampler2D alphaMap;\n#endif",
      alphatest_fragment: "#ifdef USE_ALPHATEST\nif(diffuseColor.a<alphaTest)discard;\n#endif",
      alphatest_pars_fragment: "#ifdef USE_ALPHATEST\nuniform float alphaTest;\n#endif",
      aomap_fragment: "#ifdef USE_AOMAP\nfloat ambientOcclusion=(texture2D(aoMap,vUv2).r-1.0)*aoMapIntensity+1.0;reflectedLight.indirectDiffuse*=ambientOcclusion;\n#if defined(USE_ENVMAP)&&defined(STANDARD)\nfloat dotNV=saturate(dot(geometry.normal,geometry.viewDir));reflectedLight.indirectSpecular*=computeSpecularOcclusion(dotNV,ambientOcclusion,material.roughness);\n#endif\n#endif",
      aomap_pars_fragment: "#ifdef USE_AOMAP\nuniform sampler2D aoMap;uniform float aoMapIntensity;\n#endif",
      begin_vertex: "vec3 transformed=vec3(position);",
      beginnormal_vertex: "vec3 objectNormal=vec3(normal);\n#ifdef USE_TANGENT\nvec3 objectTangent=vec3(tangent.xyz);\n#endif",
      bsdfs: "vec3 BRDF_Lambert(const in vec3 diffuseColor){return RECIPROCAL_PI*diffuseColor;}vec3 F_Schlick(const in vec3 f0,const in float f90,const in float dotVH){float fresnel=exp2((-5.55473*dotVH-6.98316)*dotVH);return f0*(1.0-fresnel)+(f90*fresnel);}float F_Schlick(const in float f0,const in float f90,const in float dotVH){float fresnel=exp2((-5.55473*dotVH-6.98316)*dotVH);return f0*(1.0-fresnel)+(f90*fresnel);}vec3 Schlick_to_F0(const in vec3 f,const in float f90,const in float dotVH){float x=clamp(1.0-dotVH,0.0,1.0);float x2=x*x;float x5=clamp(x*x2*x2,0.0,0.9999);return(f-vec3(f90)*x5)/(1.0-x5);}float V_GGX_SmithCorrelated(const in float alpha,const in float dotNL,const in float dotNV){float a2=pow2(alpha);float gv=dotNL*sqrt(a2+(1.0-a2)*pow2(dotNV));float gl=dotNV*sqrt(a2+(1.0-a2)*pow2(dotNL));return 0.5/max(gv+gl,EPSILON);}float D_GGX(const in float alpha,const in float dotNH){float a2=pow2(alpha);float denom=pow2(dotNH)*(a2-1.0)+1.0;return RECIPROCAL_PI*a2/pow2(denom);}vec3 BRDF_GGX(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 f0,const in float f90,const in float roughness){float alpha=pow2(roughness);vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=F_Schlick(f0,f90,dotVH);float V=V_GGX_SmithCorrelated(alpha,dotNL,dotNV);float D=D_GGX(alpha,dotNH);return F*(V*D);}\n#ifdef USE_IRIDESCENCE\nvec3 BRDF_GGX_Iridescence(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 f0,const in float f90,const in float iridescence,const in vec3 iridescenceFresnel,const in float roughness){float alpha=pow2(roughness);vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=mix(F_Schlick(f0,f90,dotVH),iridescenceFresnel,iridescence);float V=V_GGX_SmithCorrelated(alpha,dotNL,dotNV);float D=D_GGX(alpha,dotNH);return F*(V*D);}\n#endif\nvec2 LTC_Uv(const in vec3 N,const in vec3 V,const in float roughness){const float LUT_SIZE=64.0;const float LUT_SCALE=(LUT_SIZE-1.0)/LUT_SIZE;const float LUT_BIAS=0.5/LUT_SIZE;float dotNV=saturate(dot(N,V));vec2 uv=vec2(roughness,sqrt(1.0-dotNV));uv=uv*LUT_SCALE+LUT_BIAS;return uv;}float LTC_ClippedSphereFormFactor(const in vec3 f){float l=length(f);return max((l*l+f.z)/(l+1.0),0.0);}vec3 LTC_EdgeVectorFormFactor(const in vec3 v1,const in vec3 v2){float x=dot(v1,v2);float y=abs(x);float a=0.8543985+(0.4965155+0.0145206*y)*y;float b=3.4175940+(4.1616724+y)*y;float v=a/b;float theta_sintheta=(x>0.0)?v:0.5*inversesqrt(max(1.0-x*x,1e-7))-v;return cross(v1,v2)*theta_sintheta;}vec3 LTC_Evaluate(const in vec3 N,const in vec3 V,const in vec3 P,const in mat3 mInv,const in vec3 rectCoords[4]){vec3 v1=rectCoords[1]-rectCoords[0];vec3 v2=rectCoords[3]-rectCoords[0];vec3 lightNormal=cross(v1,v2);if(dot(lightNormal,P-rectCoords[0])<0.0)return vec3(0.0);vec3 T1,T2;T1=normalize(V-N*dot(V,N));T2=-cross(N,T1);mat3 mat=mInv*transposeMat3(mat3(T1,T2,N));vec3 coords[4];coords[0]=mat*(rectCoords[0]-P);coords[1]=mat*(rectCoords[1]-P);coords[2]=mat*(rectCoords[2]-P);coords[3]=mat*(rectCoords[3]-P);coords[0]=normalize(coords[0]);coords[1]=normalize(coords[1]);coords[2]=normalize(coords[2]);coords[3]=normalize(coords[3]);vec3 vectorFormFactor=vec3(0.0);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[0],coords[1]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[1],coords[2]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[2],coords[3]);vectorFormFactor+=LTC_EdgeVectorFormFactor(coords[3],coords[0]);float result=LTC_ClippedSphereFormFactor(vectorFormFactor);return vec3(result);}float G_BlinnPhong_Implicit(){return 0.25;}float D_BlinnPhong(const in float shininess,const in float dotNH){return RECIPROCAL_PI*(shininess*0.5+1.0)*pow(dotNH,shininess);}vec3 BRDF_BlinnPhong(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,const in vec3 specularColor,const in float shininess){vec3 halfDir=normalize(lightDir+viewDir);float dotNH=saturate(dot(normal,halfDir));float dotVH=saturate(dot(viewDir,halfDir));vec3 F=F_Schlick(specularColor,1.0,dotVH);float G=G_BlinnPhong_Implicit();float D=D_BlinnPhong(shininess,dotNH);return F*(G*D);}\n#if defined(USE_SHEEN)\nfloat D_Charlie(float roughness,float dotNH){float alpha=pow2(roughness);float invAlpha=1.0/alpha;float cos2h=dotNH*dotNH;float sin2h=max(1.0-cos2h,0.0078125);return(2.0+invAlpha)*pow(sin2h,invAlpha*0.5)/(2.0*PI);}float V_Neubelt(float dotNV,float dotNL){return saturate(1.0/(4.0*(dotNL+dotNV-dotNL*dotNV)));}vec3 BRDF_Sheen(const in vec3 lightDir,const in vec3 viewDir,const in vec3 normal,vec3 sheenColor,const in float sheenRoughness){vec3 halfDir=normalize(lightDir+viewDir);float dotNL=saturate(dot(normal,lightDir));float dotNV=saturate(dot(normal,viewDir));float dotNH=saturate(dot(normal,halfDir));float D=D_Charlie(sheenRoughness,dotNH);float V=V_Neubelt(dotNV,dotNL);return sheenColor*(D*V);}\n#endif",
      iridescence_fragment: "#ifdef USE_IRIDESCENCE\nconst mat3 XYZ_TO_REC709=mat3(3.2404542,-0.9692660,0.0556434,-1.5371385,1.8760108,-0.2040259,-0.4985314,0.0415560,1.0572252);vec3 Fresnel0ToIor(vec3 fresnel0){vec3 sqrtF0=sqrt(fresnel0);return(vec3(1.0)+sqrtF0)/(vec3(1.0)-sqrtF0);}vec3 IorToFresnel0(vec3 transmittedIor,float incidentIor){return pow2((transmittedIor-vec3(incidentIor))/(transmittedIor+vec3(incidentIor)));}float IorToFresnel0(float transmittedIor,float incidentIor){return pow2((transmittedIor-incidentIor)/(transmittedIor+incidentIor));}vec3 evalSensitivity(float OPD,vec3 shift){float phase=2.0*PI*OPD*1.0e-9;vec3 val=vec3(5.4856e-13,4.4201e-13,5.2481e-13);vec3 pos=vec3(1.6810e+06,1.7953e+06,2.2084e+06);vec3 var=vec3(4.3278e+09,9.3046e+09,6.6121e+09);vec3 xyz=val*sqrt(2.0*PI*var)*cos(pos*phase+shift)*exp(-pow2(phase)*var);xyz.x+=9.7470e-14*sqrt(2.0*PI*4.5282e+09)*cos(2.2399e+06*phase+shift[0])*exp(-4.5282e+09*pow2(phase));xyz/=1.0685e-7;vec3 rgb=XYZ_TO_REC709*xyz;return rgb;}vec3 evalIridescence(float outsideIOR,float eta2,float cosTheta1,float thinFilmThickness,vec3 baseF0){vec3 I;float iridescenceIOR=mix(outsideIOR,eta2,smoothstep(0.0,0.03,thinFilmThickness));float sinTheta2Sq=pow2(outsideIOR/iridescenceIOR)*(1.0-pow2(cosTheta1));float cosTheta2Sq=1.0-sinTheta2Sq;if(cosTheta2Sq<0.0){return vec3(1.0);}float cosTheta2=sqrt(cosTheta2Sq);float R0=IorToFresnel0(iridescenceIOR,outsideIOR);float R12=F_Schlick(R0,1.0,cosTheta1);float R21=R12;float T121=1.0-R12;float phi12=0.0;if(iridescenceIOR<outsideIOR)phi12=PI;float phi21=PI-phi12;vec3 baseIOR=Fresnel0ToIor(clamp(baseF0,0.0,0.9999));vec3 R1=IorToFresnel0(baseIOR,iridescenceIOR);vec3 R23=F_Schlick(R1,1.0,cosTheta2);vec3 phi23=vec3(0.0);if(baseIOR[0]<iridescenceIOR)phi23[0]=PI;if(baseIOR[1]<iridescenceIOR)phi23[1]=PI;if(baseIOR[2]<iridescenceIOR)phi23[2]=PI;float OPD=2.0*iridescenceIOR*thinFilmThickness*cosTheta2;vec3 phi=vec3(phi21)+phi23;vec3 R123=clamp(R12*R23,1e-5,0.9999);vec3 r123=sqrt(R123);vec3 Rs=pow2(T121)*R23/(vec3(1.0)-R123);vec3 C0=R12+Rs;I=C0;vec3 Cm=Rs-T121;for(int m=1;m<=2;++m){Cm*=r123;vec3 Sm=2.0*evalSensitivity(float(m)*OPD,float(m)*phi);I+=Cm*Sm;}return max(I,vec3(0.0));}\n#endif",
      bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;uniform float bumpScale;vec2 dHdxy_fwd(){vec2 dSTdx=dFdx(vUv);vec2 dSTdy=dFdy(vUv);float Hll=bumpScale*texture2D(bumpMap,vUv).x;float dBx=bumpScale*texture2D(bumpMap,vUv+dSTdx).x-Hll;float dBy=bumpScale*texture2D(bumpMap,vUv+dSTdy).x-Hll;return vec2(dBx,dBy);}vec3 perturbNormalArb(vec3 surf_pos,vec3 surf_norm,vec2 dHdxy,float faceDirection){vec3 vSigmaX=dFdx(surf_pos.xyz);vec3 vSigmaY=dFdy(surf_pos.xyz);vec3 vN=surf_norm;vec3 R1=cross(vSigmaY,vN);vec3 R2=cross(vN,vSigmaX);float fDet=dot(vSigmaX,R1)*faceDirection;vec3 vGrad=sign(fDet)*(dHdxy.x*R1+dHdxy.y*R2);return normalize(abs(fDet)*surf_norm-vGrad);}\n#endif",
      clipping_planes_fragment: "#if NUM_CLIPPING_PLANES>0\nvec4 plane;\n#pragma unroll_loop_start\nfor(int i=0;i<UNION_CLIPPING_PLANES;i++){plane=clippingPlanes[i];if(dot(vClipPosition,plane.xyz)>plane.w)discard;}\n#pragma unroll_loop_end\n#if UNION_CLIPPING_PLANES<NUM_CLIPPING_PLANES\nbool clipped=true;\n#pragma unroll_loop_start\nfor(int i=UNION_CLIPPING_PLANES;i<NUM_CLIPPING_PLANES;i++){plane=clippingPlanes[i];clipped=(dot(vClipPosition,plane.xyz)>plane.w)&&clipped;}\n#pragma unroll_loop_end\nif(clipped)discard;\n#endif\n#endif",
      clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES>0\nvarying vec3 vClipPosition;uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];\n#endif",
      clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES>0\nvarying vec3 vClipPosition;\n#endif",
      clipping_planes_vertex: "#if NUM_CLIPPING_PLANES>0\nvClipPosition=-mvPosition.xyz;\n#endif",
      color_fragment: "#if defined(USE_COLOR_ALPHA)\ndiffuseColor*=vColor;\n#elif defined(USE_COLOR)\ndiffuseColor.rgb*=vColor;\n#endif",
      color_pars_fragment: "#if defined(USE_COLOR_ALPHA)\nvarying vec4 vColor;\n#elif defined(USE_COLOR)\nvarying vec3 vColor;\n#endif",
      color_pars_vertex: "#if defined(USE_COLOR_ALPHA)\nvarying vec4 vColor;\n#elif defined(USE_COLOR)||defined(USE_INSTANCING_COLOR)\nvarying vec3 vColor;\n#endif",
      color_vertex: "#if defined(USE_COLOR_ALPHA)\nvColor=vec4(1.0);\n#elif defined(USE_COLOR)||defined(USE_INSTANCING_COLOR)\nvColor=vec3(1.0);\n#endif\n#ifdef USE_COLOR\nvColor*=color;\n#endif\n#ifdef USE_INSTANCING_COLOR\nvColor.xyz*=instanceColor.xyz;\n#endif",
      common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a)clamp(a,0.0,1.0)\n#endif\n#define whiteComplement(a)(1.0-saturate(a))\nfloat pow2(const in float x){return x*x;}vec3 pow2(const in vec3 x){return x*x;}float pow3(const in float x){return x*x*x;}float pow4(const in float x){float x2=x*x;return x2*x2;}float max3(const in vec3 v){return max(max(v.x,v.y),v.z);}float average(const in vec3 v){return dot(v,vec3(0.3333333));}highp float rand(const in vec2 uv){const highp float a=12.9898,b=78.233,c=43758.5453;highp float dt=dot(uv.xy,vec2(a,b)),sn=mod(dt,PI);return fract(sin(sn)*c);}\n#ifdef HIGH_PRECISION\nfloat precisionSafeLength(vec3 v){return length(v);}\n#else\nfloat precisionSafeLength(vec3 v){float maxComponent=max3(abs(v));return length(v/maxComponent)*maxComponent;}\n#endif\nstruct IncidentLight{vec3 color;vec3 direction;bool visible;};struct ReflectedLight{vec3 directDiffuse;vec3 directSpecular;vec3 indirectDiffuse;vec3 indirectSpecular;};struct GeometricContext{vec3 position;vec3 normal;vec3 viewDir;\n#ifdef USE_CLEARCOAT\nvec3 clearcoatNormal;\n#endif\n};vec3 transformDirection(in vec3 dir,in mat4 matrix){return normalize((matrix*vec4(dir,0.0)).xyz);}vec3 inverseTransformDirection(in vec3 dir,in mat4 matrix){return normalize((vec4(dir,0.0)*matrix).xyz);}mat3 transposeMat3(const in mat3 m){mat3 tmp;tmp[0]=vec3(m[0].x,m[1].x,m[2].x);tmp[1]=vec3(m[0].y,m[1].y,m[2].y);tmp[2]=vec3(m[0].z,m[1].z,m[2].z);return tmp;}float luminance(const in vec3 rgb){const vec3 weights=vec3(0.2126729,0.7151522,0.0721750);return dot(weights,rgb);}bool isPerspectiveMatrix(mat4 m){return m[2][3]==-1.0;}vec2 equirectUv(in vec3 dir){float u=atan(dir.z,dir.x)*RECIPROCAL_PI2+0.5;float v=asin(clamp(dir.y,-1.0,1.0))*RECIPROCAL_PI+0.5;return vec2(u,v);}",
      cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction){vec3 absDirection=abs(direction);float face=-1.0;if(absDirection.x>absDirection.z){if(absDirection.x>absDirection.y)face=direction.x>0.0?0.0:3.0;else face=direction.y>0.0?1.0:4.0;}else{if(absDirection.z>absDirection.y)face=direction.z>0.0?2.0:5.0;else face=direction.y>0.0?1.0:4.0;}return face;}vec2 getUV(vec3 direction,float face){vec2 uv;if(face==0.0){uv=vec2(direction.z,direction.y)/abs(direction.x);}else if(face==1.0){uv=vec2(-direction.x,-direction.z)/abs(direction.y);}else if(face==2.0){uv=vec2(-direction.x,direction.y)/abs(direction.z);}else if(face==3.0){uv=vec2(-direction.z,direction.y)/abs(direction.x);}else if(face==4.0){uv=vec2(-direction.x,direction.z)/abs(direction.y);}else{uv=vec2(direction.x,direction.y)/abs(direction.z);}return 0.5*(uv+1.0);}vec3 bilinearCubeUV(sampler2D envMap,vec3 direction,float mipInt){float face=getFace(direction);float filterInt=max(cubeUV_minMipLevel-mipInt,0.0);mipInt=max(mipInt,cubeUV_minMipLevel);float faceSize=exp2(mipInt);highp vec2 uv=getUV(direction,face)*(faceSize-2.0)+1.0;if(face>2.0){uv.y+=faceSize;face-=3.0;}uv.x+=face*faceSize;uv.x+=filterInt*3.0*cubeUV_minTileSize;uv.y+=4.0*(exp2(CUBEUV_MAX_MIP)-faceSize);uv.x*=CUBEUV_TEXEL_WIDTH;uv.y*=CUBEUV_TEXEL_HEIGHT;\n#ifdef texture2DGradEXT\nreturn texture2DGradEXT(envMap,uv,vec2(0.0),vec2(0.0)).rgb;\n#else\nreturn texture2D(envMap,uv).rgb;\n#endif\n}\n#define cubeUV_r0 1.0\n#define cubeUV_v0 0.339\n#define cubeUV_m0-2.0\n#define cubeUV_r1 0.8\n#define cubeUV_v1 0.276\n#define cubeUV_m1-1.0\n#define cubeUV_r4 0.4\n#define cubeUV_v4 0.046\n#define cubeUV_m4 2.0\n#define cubeUV_r5 0.305\n#define cubeUV_v5 0.016\n#define cubeUV_m5 3.0\n#define cubeUV_r6 0.21\n#define cubeUV_v6 0.0038\n#define cubeUV_m6 4.0\nfloat roughnessToMip(float roughness){float mip=0.0;if(roughness>=cubeUV_r1){mip=(cubeUV_r0-roughness)*(cubeUV_m1-cubeUV_m0)/(cubeUV_r0-cubeUV_r1)+cubeUV_m0;}else if(roughness>=cubeUV_r4){mip=(cubeUV_r1-roughness)*(cubeUV_m4-cubeUV_m1)/(cubeUV_r1-cubeUV_r4)+cubeUV_m1;}else if(roughness>=cubeUV_r5){mip=(cubeUV_r4-roughness)*(cubeUV_m5-cubeUV_m4)/(cubeUV_r4-cubeUV_r5)+cubeUV_m4;}else if(roughness>=cubeUV_r6){mip=(cubeUV_r5-roughness)*(cubeUV_m6-cubeUV_m5)/(cubeUV_r5-cubeUV_r6)+cubeUV_m5;}else{mip=-2.0*log2(1.16*roughness);}return mip;}vec4 textureCubeUV(sampler2D envMap,vec3 sampleDir,float roughness){float mip=clamp(roughnessToMip(roughness),cubeUV_m0,CUBEUV_MAX_MIP);float mipF=fract(mip);float mipInt=floor(mip);vec3 color0=bilinearCubeUV(envMap,sampleDir,mipInt);if(mipF==0.0){return vec4(color0,1.0);}else{vec3 color1=bilinearCubeUV(envMap,sampleDir,mipInt+1.0);return vec4(mix(color0,color1,mipF),1.0);}}\n#endif",
      defaultnormal_vertex: "vec3 transformedNormal=objectNormal;\n#ifdef USE_INSTANCING\nmat3 m=mat3(instanceMatrix);transformedNormal/=vec3(dot(m[0],m[0]),dot(m[1],m[1]),dot(m[2],m[2]));transformedNormal=m*transformedNormal;\n#endif\ntransformedNormal=normalMatrix*transformedNormal;\n#ifdef FLIP_SIDED\ntransformedNormal=-transformedNormal;\n#endif\n#ifdef USE_TANGENT\nvec3 transformedTangent=(modelViewMatrix*vec4(objectTangent,0.0)).xyz;\n#ifdef FLIP_SIDED\ntransformedTangent=-transformedTangent;\n#endif\n#endif",
      displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\nuniform sampler2D displacementMap;uniform float displacementScale;uniform float displacementBias;\n#endif",
      displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\ntransformed+=normalize(objectNormal)*(texture2D(displacementMap,vUv).x*displacementScale+displacementBias);\n#endif",
      emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\nvec4 emissiveColor=texture2D(emissiveMap,vUv);totalEmissiveRadiance*=emissiveColor.rgb;\n#endif",
      emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\nuniform sampler2D emissiveMap;\n#endif",
      encodings_fragment: "gl_FragColor=linearToOutputTexel(gl_FragColor);",
      encodings_pars_fragment: "vec4 LinearToLinear(in vec4 value){return value;}vec4 LinearTosRGB(in vec4 value){return vec4(mix(pow(value.rgb,vec3(0.41666))*1.055-vec3(0.055),value.rgb*12.92,vec3(lessThanEqual(value.rgb,vec3(0.0031308)))),value.a);}",
      envmap_fragment: "#ifdef USE_ENVMAP\n#ifdef ENV_WORLDPOS\nvec3 cameraToFrag;if(isOrthographic){cameraToFrag=normalize(vec3(-viewMatrix[0][2],-viewMatrix[1][2],-viewMatrix[2][2]));}else{cameraToFrag=normalize(vWorldPosition-cameraPosition);}vec3 worldNormal=inverseTransformDirection(normal,viewMatrix);\n#ifdef ENVMAP_MODE_REFLECTION\nvec3 reflectVec=reflect(cameraToFrag,worldNormal);\n#else\nvec3 reflectVec=refract(cameraToFrag,worldNormal,refractionRatio);\n#endif\n#else\nvec3 reflectVec=vReflect;\n#endif\n#ifdef ENVMAP_TYPE_CUBE\nvec4 envColor=textureCube(envMap,vec3(flipEnvMap*reflectVec.x,reflectVec.yz));\n#else\nvec4 envColor=vec4(0.0);\n#endif\n#ifdef ENVMAP_BLENDING_MULTIPLY\noutgoingLight=mix(outgoingLight,outgoingLight*envColor.xyz,specularStrength*reflectivity);\n#elif defined(ENVMAP_BLENDING_MIX)\noutgoingLight=mix(outgoingLight,envColor.xyz,specularStrength*reflectivity);\n#elif defined(ENVMAP_BLENDING_ADD)\noutgoingLight+=envColor.xyz*specularStrength*reflectivity;\n#endif\n#endif",
      envmap_common_pars_fragment: "#ifdef USE_ENVMAP\nuniform float envMapIntensity;uniform float flipEnvMap;\n#ifdef ENVMAP_TYPE_CUBE\nuniform samplerCube envMap;\n#else\nuniform sampler2D envMap;\n#endif\n#endif",
      envmap_pars_fragment: "#ifdef USE_ENVMAP\nuniform float reflectivity;\n#if defined(USE_BUMPMAP)||defined(USE_NORMALMAP)||defined(PHONG)||defined(LAMBERT)\n#define ENV_WORLDPOS\n#endif\n#ifdef ENV_WORLDPOS\nvarying vec3 vWorldPosition;uniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",
      envmap_pars_vertex: "#ifdef USE_ENVMAP\n#if defined(USE_BUMPMAP)||defined(USE_NORMALMAP)||defined(PHONG)||defined(LAMBERT)\n#define ENV_WORLDPOS\n#endif\n#ifdef ENV_WORLDPOS\nvarying vec3 vWorldPosition;\n#else\nvarying vec3 vReflect;uniform float refractionRatio;\n#endif\n#endif",
      envmap_physical_pars_fragment: "#if defined(USE_ENVMAP)\nvec3 getIBLIrradiance(const in vec3 normal){\n#if defined(ENVMAP_TYPE_CUBE_UV)\nvec3 worldNormal=inverseTransformDirection(normal,viewMatrix);vec4 envMapColor=textureCubeUV(envMap,worldNormal,1.0);return PI*envMapColor.rgb*envMapIntensity;\n#else\nreturn vec3(0.0);\n#endif\n}vec3 getIBLRadiance(const in vec3 viewDir,const in vec3 normal,const in float roughness){\n#if defined(ENVMAP_TYPE_CUBE_UV)\nvec3 reflectVec=reflect(-viewDir,normal);reflectVec=normalize(mix(reflectVec,normal,roughness*roughness));reflectVec=inverseTransformDirection(reflectVec,viewMatrix);vec4 envMapColor=textureCubeUV(envMap,reflectVec,roughness);return envMapColor.rgb*envMapIntensity;\n#else\nreturn vec3(0.0);\n#endif\n}\n#endif",
      envmap_vertex: "#ifdef USE_ENVMAP\n#ifdef ENV_WORLDPOS\nvWorldPosition=worldPosition.xyz;\n#else\nvec3 cameraToVertex;if(isOrthographic){cameraToVertex=normalize(vec3(-viewMatrix[0][2],-viewMatrix[1][2],-viewMatrix[2][2]));}else{cameraToVertex=normalize(worldPosition.xyz-cameraPosition);}vec3 worldNormal=inverseTransformDirection(transformedNormal,viewMatrix);\n#ifdef ENVMAP_MODE_REFLECTION\nvReflect=reflect(cameraToVertex,worldNormal);\n#else\nvReflect=refract(cameraToVertex,worldNormal,refractionRatio);\n#endif\n#endif\n#endif",
      fog_vertex: "#ifdef USE_FOG\nvFogDepth=-mvPosition.z;\n#endif",
      fog_pars_vertex: "#ifdef USE_FOG\nvarying float vFogDepth;\n#endif",
      fog_fragment: "#ifdef USE_FOG\n#ifdef FOG_EXP2\nfloat fogFactor=1.0-exp(-fogDensity*fogDensity*vFogDepth*vFogDepth);\n#else\nfloat fogFactor=smoothstep(fogNear,fogFar,vFogDepth);\n#endif\ngl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,fogFactor);\n#endif",
      fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;varying float vFogDepth;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;uniform float fogFar;\n#endif\n#endif",
      gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\nuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance(vec3 normal,vec3 lightDirection){float dotNL=dot(normal,lightDirection);vec2 coord=vec2(dotNL*0.5+0.5,0.0);\n#ifdef USE_GRADIENTMAP\nreturn vec3(texture2D(gradientMap,coord).r);\n#else\nvec2 fw=fwidth(coord)*0.5;return mix(vec3(0.7),vec3(1.0),smoothstep(0.7-fw.x,0.7+fw.x,coord.x));\n#endif\n}",
      lightmap_fragment: "#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);vec3 lightMapIrradiance=lightMapTexel.rgb*lightMapIntensity;reflectedLight.indirectDiffuse+=lightMapIrradiance;\n#endif",
      lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nuniform sampler2D lightMap;uniform float lightMapIntensity;\n#endif",
      lights_lambert_fragment: "LambertMaterial material;material.diffuseColor=diffuseColor.rgb;material.specularStrength=specularStrength;",
      lights_lambert_pars_fragment: "varying vec3 vViewPosition;struct LambertMaterial{vec3 diffuseColor;float specularStrength;};void RE_Direct_Lambert(const in IncidentLight directLight,const in GeometricContext geometry,const in LambertMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Lambert(const in vec3 irradiance,const in GeometricContext geometry,const in LambertMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}\n#define RE_Direct RE_Direct_Lambert\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert",
      lights_pars_begin: "uniform bool receiveShadow;uniform vec3 ambientLightColor;uniform vec3 lightProbe[9];vec3 shGetIrradianceAt(in vec3 normal,in vec3 shCoefficients[9]){float x=normal.x,y=normal.y,z=normal.z;vec3 result=shCoefficients[0]*0.886227;result+=shCoefficients[1]*2.0*0.511664*y;result+=shCoefficients[2]*2.0*0.511664*z;result+=shCoefficients[3]*2.0*0.511664*x;result+=shCoefficients[4]*2.0*0.429043*x*y;result+=shCoefficients[5]*2.0*0.429043*y*z;result+=shCoefficients[6]*(0.743125*z*z-0.247708);result+=shCoefficients[7]*2.0*0.429043*x*z;result+=shCoefficients[8]*0.429043*(x*x-y*y);return result;}vec3 getLightProbeIrradiance(const in vec3 lightProbe[9],const in vec3 normal){vec3 worldNormal=inverseTransformDirection(normal,viewMatrix);vec3 irradiance=shGetIrradianceAt(worldNormal,lightProbe);return irradiance;}vec3 getAmbientLightIrradiance(const in vec3 ambientLightColor){vec3 irradiance=ambientLightColor;return irradiance;}float getDistanceAttenuation(const in float lightDistance,const in float cutoffDistance,const in float decayExponent){\n#if defined(PHYSICALLY_CORRECT_LIGHTS)\nfloat distanceFalloff=1.0/max(pow(lightDistance,decayExponent),0.01);if(cutoffDistance>0.0){distanceFalloff*=pow2(saturate(1.0-pow4(lightDistance/cutoffDistance)));}return distanceFalloff;\n#else\nif(cutoffDistance>0.0&&decayExponent>0.0){return pow(saturate(-lightDistance/cutoffDistance+1.0),decayExponent);}return 1.0;\n#endif\n}float getSpotAttenuation(const in float coneCosine,const in float penumbraCosine,const in float angleCosine){return smoothstep(coneCosine,penumbraCosine,angleCosine);}\n#if NUM_DIR_LIGHTS>0\nstruct DirectionalLight{vec3 direction;vec3 color;};uniform DirectionalLight directionalLights[NUM_DIR_LIGHTS];void getDirectionalLightInfo(const in DirectionalLight directionalLight,const in GeometricContext geometry,out IncidentLight light){light.color=directionalLight.color;light.direction=directionalLight.direction;light.visible=true;}\n#endif\n#if NUM_POINT_LIGHTS>0\nstruct PointLight{vec3 position;vec3 color;float distance;float decay;};uniform PointLight pointLights[NUM_POINT_LIGHTS];void getPointLightInfo(const in PointLight pointLight,const in GeometricContext geometry,out IncidentLight light){vec3 lVector=pointLight.position-geometry.position;light.direction=normalize(lVector);float lightDistance=length(lVector);light.color=pointLight.color;light.color*=getDistanceAttenuation(lightDistance,pointLight.distance,pointLight.decay);light.visible=(light.color!=vec3(0.0));}\n#endif\n#if NUM_SPOT_LIGHTS>0\nstruct SpotLight{vec3 position;vec3 direction;vec3 color;float distance;float decay;float coneCos;float penumbraCos;};uniform SpotLight spotLights[NUM_SPOT_LIGHTS];void getSpotLightInfo(const in SpotLight spotLight,const in GeometricContext geometry,out IncidentLight light){vec3 lVector=spotLight.position-geometry.position;light.direction=normalize(lVector);float angleCos=dot(light.direction,spotLight.direction);float spotAttenuation=getSpotAttenuation(spotLight.coneCos,spotLight.penumbraCos,angleCos);if(spotAttenuation>0.0){float lightDistance=length(lVector);light.color=spotLight.color*spotAttenuation;light.color*=getDistanceAttenuation(lightDistance,spotLight.distance,spotLight.decay);light.visible=(light.color!=vec3(0.0));}else{light.color=vec3(0.0);light.visible=false;}}\n#endif\n#if NUM_RECT_AREA_LIGHTS>0\nstruct RectAreaLight{vec3 color;vec3 position;vec3 halfWidth;vec3 halfHeight;};uniform sampler2D ltc_1;uniform sampler2D ltc_2;uniform RectAreaLight rectAreaLights[NUM_RECT_AREA_LIGHTS];\n#endif\n#if NUM_HEMI_LIGHTS>0\nstruct HemisphereLight{vec3 direction;vec3 skyColor;vec3 groundColor;};uniform HemisphereLight hemisphereLights[NUM_HEMI_LIGHTS];vec3 getHemisphereLightIrradiance(const in HemisphereLight hemiLight,const in vec3 normal){float dotNL=dot(normal,hemiLight.direction);float hemiDiffuseWeight=0.5*dotNL+0.5;vec3 irradiance=mix(hemiLight.groundColor,hemiLight.skyColor,hemiDiffuseWeight);return irradiance;}\n#endif",
      lights_toon_fragment: "ToonMaterial material;material.diffuseColor=diffuseColor.rgb;",
      lights_toon_pars_fragment: "varying vec3 vViewPosition;struct ToonMaterial{vec3 diffuseColor;};void RE_Direct_Toon(const in IncidentLight directLight,const in GeometricContext geometry,const in ToonMaterial material,inout ReflectedLight reflectedLight){vec3 irradiance=getGradientIrradiance(geometry.normal,directLight.direction)*directLight.color;reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Toon(const in vec3 irradiance,const in GeometricContext geometry,const in ToonMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}\n#define RE_Direct RE_Direct_Toon\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Toon",
      lights_phong_fragment: "BlinnPhongMaterial material;material.diffuseColor=diffuseColor.rgb;material.specularColor=specular;material.specularShininess=shininess;material.specularStrength=specularStrength;",
      lights_phong_pars_fragment: "varying vec3 vViewPosition;struct BlinnPhongMaterial{vec3 diffuseColor;vec3 specularColor;float specularShininess;float specularStrength;};void RE_Direct_BlinnPhong(const in IncidentLight directLight,const in GeometricContext geometry,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;reflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);reflectedLight.directSpecular+=irradiance*BRDF_BlinnPhong(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularShininess)*material.specularStrength;}void RE_IndirectDiffuse_BlinnPhong(const in vec3 irradiance,const in GeometricContext geometry,const in BlinnPhongMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}\n#define RE_Direct RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse RE_IndirectDiffuse_BlinnPhong",
      lights_physical_fragment: "PhysicalMaterial material;material.diffuseColor=diffuseColor.rgb*(1.0-metalnessFactor);vec3 dxy=max(abs(dFdx(geometryNormal)),abs(dFdy(geometryNormal)));float geometryRoughness=max(max(dxy.x,dxy.y),dxy.z);material.roughness=max(roughnessFactor,0.0525);material.roughness+=geometryRoughness;material.roughness=min(material.roughness,1.0);\n#ifdef IOR\nmaterial.ior=ior;\n#ifdef SPECULAR\nfloat specularIntensityFactor=specularIntensity;vec3 specularColorFactor=specularColor;\n#ifdef USE_SPECULARINTENSITYMAP\nspecularIntensityFactor*=texture2D(specularIntensityMap,vUv).a;\n#endif\n#ifdef USE_SPECULARCOLORMAP\nspecularColorFactor*=texture2D(specularColorMap,vUv).rgb;\n#endif\nmaterial.specularF90=mix(specularIntensityFactor,1.0,metalnessFactor);\n#else\nfloat specularIntensityFactor=1.0;vec3 specularColorFactor=vec3(1.0);material.specularF90=1.0;\n#endif\nmaterial.specularColor=mix(min(pow2((material.ior-1.0)/(material.ior+1.0))*specularColorFactor,vec3(1.0))*specularIntensityFactor,diffuseColor.rgb,metalnessFactor);\n#else\nmaterial.specularColor=mix(vec3(0.04),diffuseColor.rgb,metalnessFactor);material.specularF90=1.0;\n#endif\n#ifdef USE_CLEARCOAT\nmaterial.clearcoat=clearcoat;material.clearcoatRoughness=clearcoatRoughness;material.clearcoatF0=vec3(0.04);material.clearcoatF90=1.0;\n#ifdef USE_CLEARCOATMAP\nmaterial.clearcoat*=texture2D(clearcoatMap,vUv).x;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\nmaterial.clearcoatRoughness*=texture2D(clearcoatRoughnessMap,vUv).y;\n#endif\nmaterial.clearcoat=saturate(material.clearcoat);material.clearcoatRoughness=max(material.clearcoatRoughness,0.0525);material.clearcoatRoughness+=geometryRoughness;material.clearcoatRoughness=min(material.clearcoatRoughness,1.0);\n#endif\n#ifdef USE_IRIDESCENCE\nmaterial.iridescence=iridescence;material.iridescenceIOR=iridescenceIOR;\n#ifdef USE_IRIDESCENCEMAP\nmaterial.iridescence*=texture2D(iridescenceMap,vUv).r;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\nmaterial.iridescenceThickness=(iridescenceThicknessMaximum-iridescenceThicknessMinimum)*texture2D(iridescenceThicknessMap,vUv).g+iridescenceThicknessMinimum;\n#else\nmaterial.iridescenceThickness=iridescenceThicknessMaximum;\n#endif\n#endif\n#ifdef USE_SHEEN\nmaterial.sheenColor=sheenColor;\n#ifdef USE_SHEENCOLORMAP\nmaterial.sheenColor*=texture2D(sheenColorMap,vUv).rgb;\n#endif\nmaterial.sheenRoughness=clamp(sheenRoughness,0.07,1.0);\n#ifdef USE_SHEENROUGHNESSMAP\nmaterial.sheenRoughness*=texture2D(sheenRoughnessMap,vUv).a;\n#endif\n#endif",
      lights_physical_pars_fragment: "struct PhysicalMaterial{vec3 diffuseColor;float roughness;vec3 specularColor;float specularF90;\n#ifdef USE_CLEARCOAT\nfloat clearcoat;float clearcoatRoughness;vec3 clearcoatF0;float clearcoatF90;\n#endif\n#ifdef USE_IRIDESCENCE\nfloat iridescence;float iridescenceIOR;float iridescenceThickness;vec3 iridescenceFresnel;vec3 iridescenceF0;\n#endif\n#ifdef USE_SHEEN\nvec3 sheenColor;float sheenRoughness;\n#endif\n#ifdef IOR\nfloat ior;\n#endif\n#ifdef USE_TRANSMISSION\nfloat transmission;float transmissionAlpha;float thickness;float attenuationDistance;vec3 attenuationColor;\n#endif\n};vec3 clearcoatSpecular=vec3(0.0);vec3 sheenSpecular=vec3(0.0);float IBLSheenBRDF(const in vec3 normal,const in vec3 viewDir,const in float roughness){float dotNV=saturate(dot(normal,viewDir));float r2=roughness*roughness;float a=roughness<0.25?-339.2*r2+161.4*roughness-25.9:-8.48*r2+14.3*roughness-9.95;float b=roughness<0.25?44.0*r2-23.7*roughness+3.26:1.97*r2-3.27*roughness+0.72;float DG=exp(a*dotNV+b)+(roughness<0.25?0.0:0.1*(roughness-0.25));return saturate(DG*RECIPROCAL_PI);}vec2 DFGApprox(const in vec3 normal,const in vec3 viewDir,const in float roughness){float dotNV=saturate(dot(normal,viewDir));const vec4 c0=vec4(-1,-0.0275,-0.572,0.022);const vec4 c1=vec4(1,0.0425,1.04,-0.04);vec4 r=roughness*c0+c1;float a004=min(r.x*r.x,exp2(-9.28*dotNV))*r.x+r.y;vec2 fab=vec2(-1.04,1.04)*a004+r.zw;return fab;}vec3 EnvironmentBRDF(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float roughness){vec2 fab=DFGApprox(normal,viewDir,roughness);return specularColor*fab.x+specularF90*fab.y;}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float iridescence,const in vec3 iridescenceF0,const in float roughness,inout vec3 singleScatter,inout vec3 multiScatter){\n#else\nvoid computeMultiscattering(const in vec3 normal,const in vec3 viewDir,const in vec3 specularColor,const in float specularF90,const in float roughness,inout vec3 singleScatter,inout vec3 multiScatter){\n#endif\nvec2 fab=DFGApprox(normal,viewDir,roughness);\n#ifdef USE_IRIDESCENCE\nvec3 Fr=mix(specularColor,iridescenceF0,iridescence);\n#else\nvec3 Fr=specularColor;\n#endif\nvec3 FssEss=Fr*fab.x+specularF90*fab.y;float Ess=fab.x+fab.y;float Ems=1.0-Ess;vec3 Favg=Fr+(1.0-Fr)*0.047619;vec3 Fms=FssEss*Favg/(1.0-Ems*Favg);singleScatter+=FssEss;multiScatter+=Fms*Ems;}\n#if NUM_RECT_AREA_LIGHTS>0\nvoid RE_Direct_RectArea_Physical(const in RectAreaLight rectAreaLight,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){vec3 normal=geometry.normal;vec3 viewDir=geometry.viewDir;vec3 position=geometry.position;vec3 lightPos=rectAreaLight.position;vec3 halfWidth=rectAreaLight.halfWidth;vec3 halfHeight=rectAreaLight.halfHeight;vec3 lightColor=rectAreaLight.color;float roughness=material.roughness;vec3 rectCoords[4];rectCoords[0]=lightPos+halfWidth-halfHeight;rectCoords[1]=lightPos-halfWidth-halfHeight;rectCoords[2]=lightPos-halfWidth+halfHeight;rectCoords[3]=lightPos+halfWidth+halfHeight;vec2 uv=LTC_Uv(normal,viewDir,roughness);vec4 t1=texture2D(ltc_1,uv);vec4 t2=texture2D(ltc_2,uv);mat3 mInv=mat3(vec3(t1.x,0,t1.y),vec3(0,1,0),vec3(t1.z,0,t1.w));vec3 fresnel=(material.specularColor*t2.x+(vec3(1.0)-material.specularColor)*t2.y);reflectedLight.directSpecular+=lightColor*fresnel*LTC_Evaluate(normal,viewDir,position,mInv,rectCoords);reflectedLight.directDiffuse+=lightColor*material.diffuseColor*LTC_Evaluate(normal,viewDir,position,mat3(1.0),rectCoords);}\n#endif\nvoid RE_Direct_Physical(const in IncidentLight directLight,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){float dotNL=saturate(dot(geometry.normal,directLight.direction));vec3 irradiance=dotNL*directLight.color;\n#ifdef USE_CLEARCOAT\nfloat dotNLcc=saturate(dot(geometry.clearcoatNormal,directLight.direction));vec3 ccIrradiance=dotNLcc*directLight.color;clearcoatSpecular+=ccIrradiance*BRDF_GGX(directLight.direction,geometry.viewDir,geometry.clearcoatNormal,material.clearcoatF0,material.clearcoatF90,material.clearcoatRoughness);\n#endif\n#ifdef USE_SHEEN\nsheenSpecular+=irradiance*BRDF_Sheen(directLight.direction,geometry.viewDir,geometry.normal,material.sheenColor,material.sheenRoughness);\n#endif\n#ifdef USE_IRIDESCENCE\nreflectedLight.directSpecular+=irradiance*BRDF_GGX_Iridescence(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularF90,material.iridescence,material.iridescenceFresnel,material.roughness);\n#else\nreflectedLight.directSpecular+=irradiance*BRDF_GGX(directLight.direction,geometry.viewDir,geometry.normal,material.specularColor,material.specularF90,material.roughness);\n#endif\nreflectedLight.directDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectDiffuse_Physical(const in vec3 irradiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){reflectedLight.indirectDiffuse+=irradiance*BRDF_Lambert(material.diffuseColor);}void RE_IndirectSpecular_Physical(const in vec3 radiance,const in vec3 irradiance,const in vec3 clearcoatRadiance,const in GeometricContext geometry,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){\n#ifdef USE_CLEARCOAT\nclearcoatSpecular+=clearcoatRadiance*EnvironmentBRDF(geometry.clearcoatNormal,geometry.viewDir,material.clearcoatF0,material.clearcoatF90,material.clearcoatRoughness);\n#endif\n#ifdef USE_SHEEN\nsheenSpecular+=irradiance*material.sheenColor*IBLSheenBRDF(geometry.normal,geometry.viewDir,material.sheenRoughness);\n#endif\nvec3 singleScattering=vec3(0.0);vec3 multiScattering=vec3(0.0);vec3 cosineWeightedIrradiance=irradiance*RECIPROCAL_PI;\n#ifdef USE_IRIDESCENCE\ncomputeMultiscatteringIridescence(geometry.normal,geometry.viewDir,material.specularColor,material.specularF90,material.iridescence,material.iridescenceFresnel,material.roughness,singleScattering,multiScattering);\n#else\ncomputeMultiscattering(geometry.normal,geometry.viewDir,material.specularColor,material.specularF90,material.roughness,singleScattering,multiScattering);\n#endif\nvec3 totalScattering=singleScattering+multiScattering;vec3 diffuse=material.diffuseColor*(1.0-max(max(totalScattering.r,totalScattering.g),totalScattering.b));reflectedLight.indirectSpecular+=radiance*singleScattering;reflectedLight.indirectSpecular+=multiScattering*cosineWeightedIrradiance;reflectedLight.indirectDiffuse+=diffuse*cosineWeightedIrradiance;}\n#define RE_Direct RE_Direct_Physical\n#define RE_Direct_RectArea RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion(const in float dotNV,const in float ambientOcclusion,const in float roughness){return saturate(pow(dotNV+ambientOcclusion,exp2(-16.0*roughness-1.0))-1.0+ambientOcclusion);}",
      lights_fragment_begin: "GeometricContext geometry;geometry.position=-vViewPosition;geometry.normal=normal;geometry.viewDir=(isOrthographic)?vec3(0,0,1):normalize(vViewPosition);\n#ifdef USE_CLEARCOAT\ngeometry.clearcoatNormal=clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\nfloat dotNVi=saturate(dot(normal,geometry.viewDir));if(material.iridescenceThickness==0.0){material.iridescence=0.0;}else{material.iridescence=saturate(material.iridescence);}if(material.iridescence>0.0){material.iridescenceFresnel=evalIridescence(1.0,material.iridescenceIOR,dotNVi,material.iridescenceThickness,material.specularColor);material.iridescenceF0=Schlick_to_F0(material.iridescenceFresnel,1.0,dotNVi);}\n#endif\nIncidentLight directLight;\n#if (NUM_POINT_LIGHTS>0)&&defined(RE_Direct)\nPointLight pointLight;\n#if defined(USE_SHADOWMAP)&&NUM_POINT_LIGHT_SHADOWS>0\nPointLightShadow pointLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHTS;i++){pointLight=pointLights[i];getPointLightInfo(pointLight,geometry,directLight);\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_POINT_LIGHT_SHADOWS)\npointLightShadow=pointLightShadows[i];directLight.color*=(directLight.visible&&receiveShadow)?getPointShadow(pointShadowMap[i],pointLightShadow.shadowMapSize,pointLightShadow.shadowBias,pointLightShadow.shadowRadius,vPointShadowCoord[i],pointLightShadow.shadowCameraNear,pointLightShadow.shadowCameraFar):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_SPOT_LIGHTS>0)&&defined(RE_Direct)\nSpotLight spotLight;vec4 spotColor;vec3 spotLightCoord;bool inSpotLightMap;\n#if defined(USE_SHADOWMAP)&&NUM_SPOT_LIGHT_SHADOWS>0\nSpotLightShadow spotLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHTS;i++){spotLight=spotLights[i];getSpotLightInfo(spotLight,geometry,directLight);\n#if (UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS)\n#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n#elif (UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS)\n#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n#else\n#define SPOT_LIGHT_MAP_INDEX(UNROLLED_LOOP_INDEX-NUM_SPOT_LIGHT_SHADOWS+NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS)\n#endif\n#if (SPOT_LIGHT_MAP_INDEX<NUM_SPOT_LIGHT_MAPS)\nspotLightCoord=vSpotLightCoord[i].xyz/vSpotLightCoord[i].w;inSpotLightMap=all(lessThan(abs(spotLightCoord*2.-1.),vec3(1.0)));spotColor=texture2D(spotLightMap[SPOT_LIGHT_MAP_INDEX],spotLightCoord.xy);directLight.color=inSpotLightMap?directLight.color*spotColor.rgb:directLight.color;\n#endif\n#undef SPOT_LIGHT_MAP_INDEX\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS)\nspotLightShadow=spotLightShadows[i];directLight.color*=(directLight.visible&&receiveShadow)?getShadow(spotShadowMap[i],spotLightShadow.shadowMapSize,spotLightShadow.shadowBias,spotLightShadow.shadowRadius,vSpotLightCoord[i]):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_DIR_LIGHTS>0)&&defined(RE_Direct)\nDirectionalLight directionalLight;\n#if defined(USE_SHADOWMAP)&&NUM_DIR_LIGHT_SHADOWS>0\nDirectionalLightShadow directionalLightShadow;\n#endif\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHTS;i++){directionalLight=directionalLights[i];getDirectionalLightInfo(directionalLight,geometry,directLight);\n#if defined(USE_SHADOWMAP)&&(UNROLLED_LOOP_INDEX<NUM_DIR_LIGHT_SHADOWS)\ndirectionalLightShadow=directionalLightShadows[i];directLight.color*=(directLight.visible&&receiveShadow)?getShadow(directionalShadowMap[i],directionalLightShadow.shadowMapSize,directionalLightShadow.shadowBias,directionalLightShadow.shadowRadius,vDirectionalShadowCoord[i]):1.0;\n#endif\nRE_Direct(directLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if (NUM_RECT_AREA_LIGHTS>0)&&defined(RE_Direct_RectArea)\nRectAreaLight rectAreaLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_RECT_AREA_LIGHTS;i++){rectAreaLight=rectAreaLights[i];RE_Direct_RectArea(rectAreaLight,geometry,material,reflectedLight);}\n#pragma unroll_loop_end\n#endif\n#if defined(RE_IndirectDiffuse)\nvec3 iblIrradiance=vec3(0.0);vec3 irradiance=getAmbientLightIrradiance(ambientLightColor);irradiance+=getLightProbeIrradiance(lightProbe,geometry.normal);\n#if (NUM_HEMI_LIGHTS>0)\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_HEMI_LIGHTS;i++){irradiance+=getHemisphereLightIrradiance(hemisphereLights[i],geometry.normal);}\n#pragma unroll_loop_end\n#endif\n#endif\n#if defined(RE_IndirectSpecular)\nvec3 radiance=vec3(0.0);vec3 clearcoatRadiance=vec3(0.0);\n#endif",
      lights_fragment_maps: "#if defined(RE_IndirectDiffuse)\n#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);vec3 lightMapIrradiance=lightMapTexel.rgb*lightMapIntensity;irradiance+=lightMapIrradiance;\n#endif\n#if defined(USE_ENVMAP)&&defined(STANDARD)&&defined(ENVMAP_TYPE_CUBE_UV)\niblIrradiance+=getIBLIrradiance(geometry.normal);\n#endif\n#endif\n#if defined(USE_ENVMAP)&&defined(RE_IndirectSpecular)\nradiance+=getIBLRadiance(geometry.viewDir,geometry.normal,material.roughness);\n#ifdef USE_CLEARCOAT\nclearcoatRadiance+=getIBLRadiance(geometry.viewDir,geometry.clearcoatNormal,material.clearcoatRoughness);\n#endif\n#endif",
      lights_fragment_end: "#if defined(RE_IndirectDiffuse)\nRE_IndirectDiffuse(irradiance,geometry,material,reflectedLight);\n#endif\n#if defined(RE_IndirectSpecular)\nRE_IndirectSpecular(radiance,iblIrradiance,clearcoatRadiance,geometry,material,reflectedLight);\n#endif",
      logdepthbuf_fragment: "#if defined(USE_LOGDEPTHBUF)&&defined(USE_LOGDEPTHBUF_EXT)\ngl_FragDepthEXT=vIsPerspective==0.0?gl_FragCoord.z:log2(vFragDepth)*logDepthBufFC*0.5;\n#endif",
      logdepthbuf_pars_fragment: "#if defined(USE_LOGDEPTHBUF)&&defined(USE_LOGDEPTHBUF_EXT)\nuniform float logDepthBufFC;varying float vFragDepth;varying float vIsPerspective;\n#endif",
      logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n#ifdef USE_LOGDEPTHBUF_EXT\nvarying float vFragDepth;varying float vIsPerspective;\n#else\nuniform float logDepthBufFC;\n#endif\n#endif",
      logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n#ifdef USE_LOGDEPTHBUF_EXT\nvFragDepth=1.0+gl_Position.w;vIsPerspective=float(isPerspectiveMatrix(projectionMatrix));\n#else\nif(isPerspectiveMatrix(projectionMatrix)){gl_Position.z=log2(max(EPSILON,gl_Position.w+1.0))*logDepthBufFC-1.0;gl_Position.z*=gl_Position.w;}\n#endif\n#endif",
      map_fragment: "#ifdef USE_MAP\nvec4 sampledDiffuseColor=texture2D(map,vUv);\n#ifdef DECODE_VIDEO_TEXTURE\nsampledDiffuseColor=vec4(mix(pow(sampledDiffuseColor.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),sampledDiffuseColor.rgb*0.0773993808,vec3(lessThanEqual(sampledDiffuseColor.rgb,vec3(0.04045)))),sampledDiffuseColor.w);\n#endif\ndiffuseColor*=sampledDiffuseColor;\n#endif",
      map_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
      map_particle_fragment: "#if defined(USE_MAP)||defined(USE_ALPHAMAP)\nvec2 uv=(uvTransform*vec3(gl_PointCoord.x,1.0-gl_PointCoord.y,1)).xy;\n#endif\n#ifdef USE_MAP\ndiffuseColor*=texture2D(map,uv);\n#endif\n#ifdef USE_ALPHAMAP\ndiffuseColor.a*=texture2D(alphaMap,uv).g;\n#endif",
      map_particle_pars_fragment: "#if defined(USE_MAP)||defined(USE_ALPHAMAP)\nuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\nuniform sampler2D alphaMap;\n#endif",
      metalnessmap_fragment: "float metalnessFactor=metalness;\n#ifdef USE_METALNESSMAP\nvec4 texelMetalness=texture2D(metalnessMap,vUv);metalnessFactor*=texelMetalness.b;\n#endif",
      metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\nuniform sampler2D metalnessMap;\n#endif",
      morphcolor_vertex: "#if defined(USE_MORPHCOLORS)&&defined(MORPHTARGETS_TEXTURE)\nvColor*=morphTargetBaseInfluence;for(int i=0;i<MORPHTARGETS_COUNT;i++){\n#if defined(USE_COLOR_ALPHA)\nif(morphTargetInfluences[i]!=0.0)vColor+=getMorph(gl_VertexID,i,2)*morphTargetInfluences[i];\n#elif defined(USE_COLOR)\nif(morphTargetInfluences[i]!=0.0)vColor+=getMorph(gl_VertexID,i,2).rgb*morphTargetInfluences[i];\n#endif\n}\n#endif",
      morphnormal_vertex: "#ifdef USE_MORPHNORMALS\nobjectNormal*=morphTargetBaseInfluence;\n#ifdef MORPHTARGETS_TEXTURE\nfor(int i=0;i<MORPHTARGETS_COUNT;i++){if(morphTargetInfluences[i]!=0.0)objectNormal+=getMorph(gl_VertexID,i,1).xyz*morphTargetInfluences[i];}\n#else\nobjectNormal+=morphNormal0*morphTargetInfluences[0];objectNormal+=morphNormal1*morphTargetInfluences[1];objectNormal+=morphNormal2*morphTargetInfluences[2];objectNormal+=morphNormal3*morphTargetInfluences[3];\n#endif\n#endif",
      morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\nuniform float morphTargetBaseInfluence;\n#ifdef MORPHTARGETS_TEXTURE\nuniform float morphTargetInfluences[MORPHTARGETS_COUNT];uniform sampler2DArray morphTargetsTexture;uniform ivec2 morphTargetsTextureSize;vec4 getMorph(const in int vertexIndex,const in int morphTargetIndex,const in int offset){int texelIndex=vertexIndex*MORPHTARGETS_TEXTURE_STRIDE+offset;int y=texelIndex/morphTargetsTextureSize.x;int x=texelIndex-y*morphTargetsTextureSize.x;ivec3 morphUV=ivec3(x,y,morphTargetIndex);return texelFetch(morphTargetsTexture,morphUV,0);}\n#else\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[8];\n#else\nuniform float morphTargetInfluences[4];\n#endif\n#endif\n#endif",
      morphtarget_vertex: "#ifdef USE_MORPHTARGETS\ntransformed*=morphTargetBaseInfluence;\n#ifdef MORPHTARGETS_TEXTURE\nfor(int i=0;i<MORPHTARGETS_COUNT;i++){if(morphTargetInfluences[i]!=0.0)transformed+=getMorph(gl_VertexID,i,0).xyz*morphTargetInfluences[i];}\n#else\ntransformed+=morphTarget0*morphTargetInfluences[0];transformed+=morphTarget1*morphTargetInfluences[1];transformed+=morphTarget2*morphTargetInfluences[2];transformed+=morphTarget3*morphTargetInfluences[3];\n#ifndef USE_MORPHNORMALS\ntransformed+=morphTarget4*morphTargetInfluences[4];transformed+=morphTarget5*morphTargetInfluences[5];transformed+=morphTarget6*morphTargetInfluences[6];transformed+=morphTarget7*morphTargetInfluences[7];\n#endif\n#endif\n#endif",
      normal_fragment_begin: "float faceDirection=gl_FrontFacing?1.0:-1.0;\n#ifdef FLAT_SHADED\nvec3 fdx=dFdx(vViewPosition);vec3 fdy=dFdy(vViewPosition);vec3 normal=normalize(cross(fdx,fdy));\n#else\nvec3 normal=normalize(vNormal);\n#ifdef DOUBLE_SIDED\nnormal=normal*faceDirection;\n#endif\n#ifdef USE_TANGENT\nvec3 tangent=normalize(vTangent);vec3 bitangent=normalize(vBitangent);\n#ifdef DOUBLE_SIDED\ntangent=tangent*faceDirection;bitangent=bitangent*faceDirection;\n#endif\n#if defined(TANGENTSPACE_NORMALMAP)||defined(USE_CLEARCOAT_NORMALMAP)\nmat3 vTBN=mat3(tangent,bitangent,normal);\n#endif\n#endif\n#endif\nvec3 geometryNormal=normal;",
      normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\nnormal=texture2D(normalMap,vUv).xyz*2.0-1.0;\n#ifdef FLIP_SIDED\nnormal=-normal;\n#endif\n#ifdef DOUBLE_SIDED\nnormal=normal*faceDirection;\n#endif\nnormal=normalize(normalMatrix*normal);\n#elif defined(TANGENTSPACE_NORMALMAP)\nvec3 mapN=texture2D(normalMap,vUv).xyz*2.0-1.0;mapN.xy*=normalScale;\n#ifdef USE_TANGENT\nnormal=normalize(vTBN*mapN);\n#else\nnormal=perturbNormal2Arb(-vViewPosition,normal,mapN,faceDirection);\n#endif\n#elif defined(USE_BUMPMAP)\nnormal=perturbNormalArb(-vViewPosition,normal,dHdxy_fwd(),faceDirection);\n#endif",
      normal_pars_fragment: "#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif",
      normal_pars_vertex: "#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif",
      normal_vertex: "#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#ifdef USE_TANGENT\nvTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);\n#endif\n#endif",
      normalmap_pars_fragment: "#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\nuniform mat3 normalMatrix;\n#endif\n#if !defined(USE_TANGENT)&&(defined(TANGENTSPACE_NORMALMAP)||defined(USE_CLEARCOAT_NORMALMAP))\nvec3 perturbNormal2Arb(vec3 eye_pos,vec3 surf_norm,vec3 mapN,float faceDirection){vec3 q0=dFdx(eye_pos.xyz);vec3 q1=dFdy(eye_pos.xyz);vec2 st0=dFdx(vUv.st);vec2 st1=dFdy(vUv.st);vec3 N=surf_norm;vec3 q1perp=cross(q1,N);vec3 q0perp=cross(N,q0);vec3 T=q1perp*st0.x+q0perp*st1.x;vec3 B=q1perp*st0.y+q0perp*st1.y;float det=max(dot(T,T),dot(B,B));float scale=(det==0.0)?0.0:faceDirection*inversesqrt(det);return normalize(T*(mapN.x*scale)+B*(mapN.y*scale)+N*mapN.z);}\n#endif",
      clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\nvec3 clearcoatNormal=geometryNormal;\n#endif",
      clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\nvec3 clearcoatMapN=texture2D(clearcoatNormalMap,vUv).xyz*2.0-1.0;clearcoatMapN.xy*=clearcoatNormalScale;\n#ifdef USE_TANGENT\nclearcoatNormal=normalize(vTBN*clearcoatMapN);\n#else\nclearcoatNormal=perturbNormal2Arb(-vViewPosition,clearcoatNormal,clearcoatMapN,faceDirection);\n#endif\n#endif",
      clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\nuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\nuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\nuniform sampler2D clearcoatNormalMap;uniform vec2 clearcoatNormalScale;\n#endif",
      iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\nuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\nuniform sampler2D iridescenceThicknessMap;\n#endif",
      output_fragment: "#ifdef OPAQUE\ndiffuseColor.a=1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a*=material.transmissionAlpha+0.1;\n#endif\ngl_FragColor=vec4(outgoingLight,diffuseColor.a);",
      packing: "vec3 packNormalToRGB(const in vec3 normal){return normalize(normal)*0.5+0.5;}vec3 unpackRGBToNormal(const in vec3 rgb){return 2.0*rgb.xyz-1.0;}const float PackUpscale=256./255.;const float UnpackDownscale=255./256.;const vec3 PackFactors=vec3(256.*256.*256.,256.*256.,256.);const vec4 UnpackFactors=UnpackDownscale/vec4(PackFactors,1.);const float ShiftRight8=1./256.;vec4 packDepthToRGBA(const in float v){vec4 r=vec4(fract(v*PackFactors),v);r.yzw-=r.xyz*ShiftRight8;return r*PackUpscale;}float unpackRGBAToDepth(const in vec4 v){return dot(v,UnpackFactors);}vec2 packDepthToRG(in highp float v){return packDepthToRGBA(v).yx;}float unpackRGToDepth(const in highp vec2 v){return unpackRGBAToDepth(vec4(v.xy,0.0,0.0));}vec4 pack2HalfToRGBA(vec2 v){vec4 r=vec4(v.x,fract(v.x*255.0),v.y,fract(v.y*255.0));return vec4(r.x-r.y/255.0,r.y,r.z-r.w/255.0,r.w);}vec2 unpackRGBATo2Half(vec4 v){return vec2(v.x+(v.y/255.0),v.z+(v.w/255.0));}float viewZToOrthographicDepth(const in float viewZ,const in float near,const in float far){return(viewZ+near)/(near-far);}float orthographicDepthToViewZ(const in float linearClipZ,const in float near,const in float far){return linearClipZ*(near-far)-near;}float viewZToPerspectiveDepth(const in float viewZ,const in float near,const in float far){return((near+viewZ)*far)/((far-near)*viewZ);}float perspectiveDepthToViewZ(const in float invClipZ,const in float near,const in float far){return(near*far)/((far-near)*invClipZ-far);}",
      premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\ngl_FragColor.rgb*=gl_FragColor.a;\n#endif",
      project_vertex: "vec4 mvPosition=vec4(transformed,1.0);\n#ifdef USE_INSTANCING\nmvPosition=instanceMatrix*mvPosition;\n#endif\nmvPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*mvPosition;",
      dithering_fragment: "#ifdef DITHERING\ngl_FragColor.rgb=dithering(gl_FragColor.rgb);\n#endif",
      dithering_pars_fragment: "#ifdef DITHERING\nvec3 dithering(vec3 color){float grid_position=rand(gl_FragCoord.xy);vec3 dither_shift_RGB=vec3(0.25/255.0,-0.25/255.0,0.25/255.0);dither_shift_RGB=mix(2.0*dither_shift_RGB,-2.0*dither_shift_RGB,grid_position);return color+dither_shift_RGB;}\n#endif",
      roughnessmap_fragment: "float roughnessFactor=roughness;\n#ifdef USE_ROUGHNESSMAP\nvec4 texelRoughness=texture2D(roughnessMap,vUv);roughnessFactor*=texelRoughness.g;\n#endif",
      roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\nuniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS>0\nvarying vec4 vSpotLightCoord[NUM_SPOT_LIGHT_COORDS];\n#endif\n#if NUM_SPOT_LIGHT_MAPS>0\nuniform sampler2D spotLightMap[NUM_SPOT_LIGHT_MAPS];\n#endif\n#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nuniform sampler2D directionalShadowMap[NUM_DIR_LIGHT_SHADOWS];varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];struct DirectionalLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nuniform sampler2D spotShadowMap[NUM_SPOT_LIGHT_SHADOWS];struct SpotLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nuniform sampler2D pointShadowMap[NUM_POINT_LIGHT_SHADOWS];varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];struct PointLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;float shadowCameraNear;float shadowCameraFar;};uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];\n#endif\nfloat texture2DCompare(sampler2D depths,vec2 uv,float compare){return step(compare,unpackRGBAToDepth(texture2D(depths,uv)));}vec2 texture2DDistribution(sampler2D shadow,vec2 uv){return unpackRGBATo2Half(texture2D(shadow,uv));}float VSMShadow(sampler2D shadow,vec2 uv,float compare){float occlusion=1.0;vec2 distribution=texture2DDistribution(shadow,uv);float hard_shadow=step(compare,distribution.x);if(hard_shadow!=1.0){float distance=compare-distribution.x;float variance=max(0.00000,distribution.y*distribution.y);float softness_probability=variance/(variance+distance*distance);softness_probability=clamp((softness_probability-0.3)/(0.95-0.3),0.0,1.0);occlusion=clamp(max(hard_shadow,softness_probability),0.0,1.0);}return occlusion;}float getShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowBias,float shadowRadius,vec4 shadowCoord){float shadow=1.0;shadowCoord.xyz/=shadowCoord.w;shadowCoord.z+=shadowBias;bool inFrustum=shadowCoord.x>=0.0&&shadowCoord.x<=1.0&&shadowCoord.y>=0.0&&shadowCoord.y<=1.0;bool frustumTest=inFrustum&&shadowCoord.z<=1.0;if(frustumTest){\n#if defined(SHADOWMAP_TYPE_PCF)\nvec2 texelSize=vec2(1.0)/shadowMapSize;float dx0=-texelSize.x*shadowRadius;float dy0=-texelSize.y*shadowRadius;float dx1=+texelSize.x*shadowRadius;float dy1=+texelSize.y*shadowRadius;float dx2=dx0/2.0;float dy2=dy0/2.0;float dx3=dx1/2.0;float dy3=dy1/2.0;shadow=(texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,dy0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,dy2),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy,shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,0.0),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx2,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx3,dy3),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx0,dy1),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(0.0,dy1),shadowCoord.z)+texture2DCompare(shadowMap,shadowCoord.xy+vec2(dx1,dy1),shadowCoord.z))*(1.0/17.0);\n#elif defined(SHADOWMAP_TYPE_PCF_SOFT)\nvec2 texelSize=vec2(1.0)/shadowMapSize;float dx=texelSize.x;float dy=texelSize.y;vec2 uv=shadowCoord.xy;vec2 f=fract(uv*shadowMapSize+0.5);uv-=f*texelSize;shadow=(texture2DCompare(shadowMap,uv,shadowCoord.z)+texture2DCompare(shadowMap,uv+vec2(dx,0.0),shadowCoord.z)+texture2DCompare(shadowMap,uv+vec2(0.0,dy),shadowCoord.z)+texture2DCompare(shadowMap,uv+texelSize,shadowCoord.z)+mix(texture2DCompare(shadowMap,uv+vec2(-dx,0.0),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,0.0),shadowCoord.z),f.x)+mix(texture2DCompare(shadowMap,uv+vec2(-dx,dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,dy),shadowCoord.z),f.x)+mix(texture2DCompare(shadowMap,uv+vec2(0.0,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(0.0,2.0*dy),shadowCoord.z),f.y)+mix(texture2DCompare(shadowMap,uv+vec2(dx,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(dx,2.0*dy),shadowCoord.z),f.y)+mix(mix(texture2DCompare(shadowMap,uv+vec2(-dx,-dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,-dy),shadowCoord.z),f.x),mix(texture2DCompare(shadowMap,uv+vec2(-dx,2.0*dy),shadowCoord.z),texture2DCompare(shadowMap,uv+vec2(2.0*dx,2.0*dy),shadowCoord.z),f.x),f.y))*(1.0/9.0);\n#elif defined(SHADOWMAP_TYPE_VSM)\nshadow=VSMShadow(shadowMap,shadowCoord.xy,shadowCoord.z);\n#else\nshadow=texture2DCompare(shadowMap,shadowCoord.xy,shadowCoord.z);\n#endif\n}return shadow;}vec2 cubeToUV(vec3 v,float texelSizeY){vec3 absV=abs(v);float scaleToCube=1.0/max(absV.x,max(absV.y,absV.z));absV*=scaleToCube;v*=scaleToCube*(1.0-2.0*texelSizeY);vec2 planar=v.xy;float almostATexel=1.5*texelSizeY;float almostOne=1.0-almostATexel;if(absV.z>=almostOne){if(v.z>0.0)planar.x=4.0-v.x;}else if(absV.x>=almostOne){float signX=sign(v.x);planar.x=v.z*signX+2.0*signX;}else if(absV.y>=almostOne){float signY=sign(v.y);planar.x=v.x+2.0*signY+2.0;planar.y=v.z*signY-2.0;}return vec2(0.125,0.25)*planar+vec2(0.375,0.75);}float getPointShadow(sampler2D shadowMap,vec2 shadowMapSize,float shadowBias,float shadowRadius,vec4 shadowCoord,float shadowCameraNear,float shadowCameraFar){vec2 texelSize=vec2(1.0)/(shadowMapSize*vec2(4.0,2.0));vec3 lightToPosition=shadowCoord.xyz;float dp=(length(lightToPosition)-shadowCameraNear)/(shadowCameraFar-shadowCameraNear);dp+=shadowBias;vec3 bd3D=normalize(lightToPosition);\n#if defined(SHADOWMAP_TYPE_PCF)||defined(SHADOWMAP_TYPE_PCF_SOFT)||defined(SHADOWMAP_TYPE_VSM)\nvec2 offset=vec2(-1,1)*shadowRadius*texelSize.y;return(texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xyy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yyy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xyx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yyx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xxy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yxy,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.xxx,texelSize.y),dp)+texture2DCompare(shadowMap,cubeToUV(bd3D+offset.yxx,texelSize.y),dp))*(1.0/9.0);\n#else\nreturn texture2DCompare(shadowMap,cubeToUV(bd3D,texelSize.y),dp);\n#endif\n}\n#endif",
      shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS>0\nuniform mat4 spotLightMatrix[NUM_SPOT_LIGHT_COORDS];varying vec4 vSpotLightCoord[NUM_SPOT_LIGHT_COORDS];\n#endif\n#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nuniform mat4 directionalShadowMatrix[NUM_DIR_LIGHT_SHADOWS];varying vec4 vDirectionalShadowCoord[NUM_DIR_LIGHT_SHADOWS];struct DirectionalLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform DirectionalLightShadow directionalLightShadows[NUM_DIR_LIGHT_SHADOWS];\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nstruct SpotLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;};uniform SpotLightShadow spotLightShadows[NUM_SPOT_LIGHT_SHADOWS];\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nuniform mat4 pointShadowMatrix[NUM_POINT_LIGHT_SHADOWS];varying vec4 vPointShadowCoord[NUM_POINT_LIGHT_SHADOWS];struct PointLightShadow{float shadowBias;float shadowNormalBias;float shadowRadius;vec2 shadowMapSize;float shadowCameraNear;float shadowCameraFar;};uniform PointLightShadow pointLightShadows[NUM_POINT_LIGHT_SHADOWS];\n#endif\n#endif",
      shadowmap_vertex: "#if (defined(USE_SHADOWMAP)&&(NUM_DIR_LIGHT_SHADOWS>0||NUM_POINT_LIGHT_SHADOWS>0))||(NUM_SPOT_LIGHT_COORDS>0)\nvec3 shadowWorldNormal=inverseTransformDirection(transformedNormal,viewMatrix);vec4 shadowWorldPosition;\n#endif\n#if defined(USE_SHADOWMAP)\n#if NUM_DIR_LIGHT_SHADOWS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*directionalLightShadows[i].shadowNormalBias,0);vDirectionalShadowCoord[i]=directionalShadowMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHT_SHADOWS;i++){shadowWorldPosition=worldPosition+vec4(shadowWorldNormal*pointLightShadows[i].shadowNormalBias,0);vPointShadowCoord[i]=pointShadowMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS>0\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHT_COORDS;i++){shadowWorldPosition=worldPosition;\n#if (defined(USE_SHADOWMAP)&&UNROLLED_LOOP_INDEX<NUM_SPOT_LIGHT_SHADOWS)\nshadowWorldPosition.xyz+=shadowWorldNormal*spotLightShadows[i].shadowNormalBias;\n#endif\nvSpotLightCoord[i]=spotLightMatrix[i]*shadowWorldPosition;}\n#pragma unroll_loop_end\n#endif",
      shadowmask_pars_fragment: "float getShadowMask(){float shadow=1.0;\n#ifdef USE_SHADOWMAP\n#if NUM_DIR_LIGHT_SHADOWS>0\nDirectionalLightShadow directionalLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_DIR_LIGHT_SHADOWS;i++){directionalLight=directionalLightShadows[i];shadow*=receiveShadow?getShadow(directionalShadowMap[i],directionalLight.shadowMapSize,directionalLight.shadowBias,directionalLight.shadowRadius,vDirectionalShadowCoord[i]):1.0;}\n#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHT_SHADOWS>0\nSpotLightShadow spotLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_SPOT_LIGHT_SHADOWS;i++){spotLight=spotLightShadows[i];shadow*=receiveShadow?getShadow(spotShadowMap[i],spotLight.shadowMapSize,spotLight.shadowBias,spotLight.shadowRadius,vSpotLightCoord[i]):1.0;}\n#pragma unroll_loop_end\n#endif\n#if NUM_POINT_LIGHT_SHADOWS>0\nPointLightShadow pointLight;\n#pragma unroll_loop_start\nfor(int i=0;i<NUM_POINT_LIGHT_SHADOWS;i++){pointLight=pointLightShadows[i];shadow*=receiveShadow?getPointShadow(pointShadowMap[i],pointLight.shadowMapSize,pointLight.shadowBias,pointLight.shadowRadius,vPointShadowCoord[i],pointLight.shadowCameraNear,pointLight.shadowCameraFar):1.0;}\n#pragma unroll_loop_end\n#endif\n#endif\nreturn shadow;}",
      skinbase_vertex: "#ifdef USE_SKINNING\nmat4 boneMatX=getBoneMatrix(skinIndex.x);mat4 boneMatY=getBoneMatrix(skinIndex.y);mat4 boneMatZ=getBoneMatrix(skinIndex.z);mat4 boneMatW=getBoneMatrix(skinIndex.w);\n#endif",
      skinning_pars_vertex: "#ifdef USE_SKINNING\nuniform mat4 bindMatrix;uniform mat4 bindMatrixInverse;uniform highp sampler2D boneTexture;uniform int boneTextureSize;mat4 getBoneMatrix(const in float i){float j=i*4.0;float x=mod(j,float(boneTextureSize));float y=floor(j/float(boneTextureSize));float dx=1.0/float(boneTextureSize);float dy=1.0/float(boneTextureSize);y=dy*(y+0.5);vec4 v1=texture2D(boneTexture,vec2(dx*(x+0.5),y));vec4 v2=texture2D(boneTexture,vec2(dx*(x+1.5),y));vec4 v3=texture2D(boneTexture,vec2(dx*(x+2.5),y));vec4 v4=texture2D(boneTexture,vec2(dx*(x+3.5),y));mat4 bone=mat4(v1,v2,v3,v4);return bone;}\n#endif",
      skinning_vertex: "#ifdef USE_SKINNING\nvec4 skinVertex=bindMatrix*vec4(transformed,1.0);vec4 skinned=vec4(0.0);skinned+=boneMatX*skinVertex*skinWeight.x;skinned+=boneMatY*skinVertex*skinWeight.y;skinned+=boneMatZ*skinVertex*skinWeight.z;skinned+=boneMatW*skinVertex*skinWeight.w;transformed=(bindMatrixInverse*skinned).xyz;\n#endif",
      skinnormal_vertex: "#ifdef USE_SKINNING\nmat4 skinMatrix=mat4(0.0);skinMatrix+=skinWeight.x*boneMatX;skinMatrix+=skinWeight.y*boneMatY;skinMatrix+=skinWeight.z*boneMatZ;skinMatrix+=skinWeight.w*boneMatW;skinMatrix=bindMatrixInverse*skinMatrix*bindMatrix;objectNormal=vec4(skinMatrix*vec4(objectNormal,0.0)).xyz;\n#ifdef USE_TANGENT\nobjectTangent=vec4(skinMatrix*vec4(objectTangent,0.0)).xyz;\n#endif\n#endif",
      specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular=texture2D(specularMap,vUv);specularStrength=texelSpecular.r;\n#else\nspecularStrength=1.0;\n#endif",
      specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",
      tonemapping_fragment: "#if defined(TONE_MAPPING)\ngl_FragColor.rgb=toneMapping(gl_FragColor.rgb);\n#endif",
      tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a)clamp(a,0.0,1.0)\n#endif\nuniform float toneMappingExposure;vec3 LinearToneMapping(vec3 color){return toneMappingExposure*color;}vec3 ReinhardToneMapping(vec3 color){color*=toneMappingExposure;return saturate(color/(vec3(1.0)+color));}vec3 OptimizedCineonToneMapping(vec3 color){color*=toneMappingExposure;color=max(vec3(0.0),color-0.004);return pow((color*(6.2*color+0.5))/(color*(6.2*color+1.7)+0.06),vec3(2.2));}vec3 RRTAndODTFit(vec3 v){vec3 a=v*(v+0.0245786)-0.000090537;vec3 b=v*(0.983729*v+0.4329510)+0.238081;return a/b;}vec3 ACESFilmicToneMapping(vec3 color){const mat3 ACESInputMat=mat3(vec3(0.59719,0.07600,0.02840),vec3(0.35458,0.90834,0.13383),vec3(0.04823,0.01566,0.83777));const mat3 ACESOutputMat=mat3(vec3(1.60475,-0.10208,-0.00327),vec3(-0.53108,1.10813,-0.07276),vec3(-0.07367,-0.00605,1.07602));color*=toneMappingExposure/0.6;color=ACESInputMat*color;color=RRTAndODTFit(color);color=ACESOutputMat*color;return saturate(color);}vec3 CustomToneMapping(vec3 color){return color;}",
      transmission_fragment: "#ifdef USE_TRANSMISSION\nmaterial.transmission=transmission;material.transmissionAlpha=1.0;material.thickness=thickness;material.attenuationDistance=attenuationDistance;material.attenuationColor=attenuationColor;\n#ifdef USE_TRANSMISSIONMAP\nmaterial.transmission*=texture2D(transmissionMap,vUv).r;\n#endif\n#ifdef USE_THICKNESSMAP\nmaterial.thickness*=texture2D(thicknessMap,vUv).g;\n#endif\nvec3 pos=vWorldPosition;vec3 v=normalize(cameraPosition-pos);vec3 n=inverseTransformDirection(normal,viewMatrix);vec4 transmission=getIBLVolumeRefraction(n,v,material.roughness,material.diffuseColor,material.specularColor,material.specularF90,pos,modelMatrix,viewMatrix,projectionMatrix,material.ior,material.thickness,material.attenuationColor,material.attenuationDistance);material.transmissionAlpha=mix(material.transmissionAlpha,transmission.a,material.transmission);totalDiffuse=mix(totalDiffuse,transmission.rgb,material.transmission);\n#endif",
      transmission_pars_fragment: "#ifdef USE_TRANSMISSION\nuniform float transmission;uniform float thickness;uniform float attenuationDistance;uniform vec3 attenuationColor;\n#ifdef USE_TRANSMISSIONMAP\nuniform sampler2D transmissionMap;\n#endif\n#ifdef USE_THICKNESSMAP\nuniform sampler2D thicknessMap;\n#endif\nuniform vec2 transmissionSamplerSize;uniform sampler2D transmissionSamplerMap;uniform mat4 modelMatrix;uniform mat4 projectionMatrix;varying vec3 vWorldPosition;vec3 getVolumeTransmissionRay(const in vec3 n,const in vec3 v,const in float thickness,const in float ior,const in mat4 modelMatrix){vec3 refractionVector=refract(-v,normalize(n),1.0/ior);vec3 modelScale;modelScale.x=length(vec3(modelMatrix[0].xyz));modelScale.y=length(vec3(modelMatrix[1].xyz));modelScale.z=length(vec3(modelMatrix[2].xyz));return normalize(refractionVector)*thickness*modelScale;}float applyIorToRoughness(const in float roughness,const in float ior){return roughness*clamp(ior*2.0-2.0,0.0,1.0);}vec4 getTransmissionSample(const in vec2 fragCoord,const in float roughness,const in float ior){float framebufferLod=log2(transmissionSamplerSize.x)*applyIorToRoughness(roughness,ior);\n#ifdef texture2DLodEXT\nreturn texture2DLodEXT(transmissionSamplerMap,fragCoord.xy,framebufferLod);\n#else\nreturn texture2D(transmissionSamplerMap,fragCoord.xy,framebufferLod);\n#endif\n}vec3 applyVolumeAttenuation(const in vec3 radiance,const in float transmissionDistance,const in vec3 attenuationColor,const in float attenuationDistance){if(isinf(attenuationDistance)){return radiance;}else{vec3 attenuationCoefficient=-log(attenuationColor)/attenuationDistance;vec3 transmittance=exp(-attenuationCoefficient*transmissionDistance);return transmittance*radiance;}}vec4 getIBLVolumeRefraction(const in vec3 n,const in vec3 v,const in float roughness,const in vec3 diffuseColor,const in vec3 specularColor,const in float specularF90,const in vec3 position,const in mat4 modelMatrix,const in mat4 viewMatrix,const in mat4 projMatrix,const in float ior,const in float thickness,const in vec3 attenuationColor,const in float attenuationDistance){vec3 transmissionRay=getVolumeTransmissionRay(n,v,thickness,ior,modelMatrix);vec3 refractedRayExit=position+transmissionRay;vec4 ndcPos=projMatrix*viewMatrix*vec4(refractedRayExit,1.0);vec2 refractionCoords=ndcPos.xy/ndcPos.w;refractionCoords+=1.0;refractionCoords/=2.0;vec4 transmittedLight=getTransmissionSample(refractionCoords,roughness,ior);vec3 attenuatedColor=applyVolumeAttenuation(transmittedLight.rgb,length(transmissionRay),attenuationColor,attenuationDistance);vec3 F=EnvironmentBRDF(n,v,specularColor,specularF90,roughness);return vec4((1.0-F)*attenuatedColor*diffuseColor,transmittedLight.a);}\n#endif",
      uv_pars_fragment: "#if (defined(USE_UV)&&!defined(UVS_VERTEX_ONLY))\nvarying vec2 vUv;\n#endif",
      uv_pars_vertex: "#ifdef USE_UV\n#ifdef UVS_VERTEX_ONLY\nvec2 vUv;\n#else\nvarying vec2 vUv;\n#endif\nuniform mat3 uvTransform;\n#endif",
      uv_vertex: "#ifdef USE_UV\nvUv=(uvTransform*vec3(uv,1)).xy;\n#endif",
      uv2_pars_fragment: "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nvarying vec2 vUv2;\n#endif",
      uv2_pars_vertex: "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nattribute vec2 uv2;varying vec2 vUv2;uniform mat3 uv2Transform;\n#endif",
      uv2_vertex: "#if defined(USE_LIGHTMAP)||defined(USE_AOMAP)\nvUv2=(uv2Transform*vec3(uv2,1)).xy;\n#endif",
      worldpos_vertex: "#if defined(USE_ENVMAP)||defined(DISTANCE)||defined(USE_SHADOWMAP)||defined(USE_TRANSMISSION)||NUM_SPOT_LIGHT_COORDS>0\nvec4 worldPosition=vec4(transformed,1.0);\n#ifdef USE_INSTANCING\nworldPosition=instanceMatrix*worldPosition;\n#endif\nworldPosition=modelMatrix*worldPosition;\n#endif",
      background_vert: "varying vec2 vUv;uniform mat3 uvTransform;void main(){vUv=(uvTransform*vec3(uv,1)).xy;gl_Position=vec4(position.xy,1.0,1.0);}",
      background_frag: "uniform sampler2D t2D;uniform float backgroundIntensity;varying vec2 vUv;void main(){vec4 texColor=texture2D(t2D,vUv);\n#ifdef DECODE_VIDEO_TEXTURE\ntexColor=vec4(mix(pow(texColor.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),texColor.rgb*0.0773993808,vec3(lessThanEqual(texColor.rgb,vec3(0.04045)))),texColor.w);\n#endif\ntexColor.rgb*=backgroundIntensity;gl_FragColor=texColor;\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
      backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\ngl_Position.z=gl_Position.w;}",
      backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\nuniform samplerCube envMap;\n#elif defined(ENVMAP_TYPE_CUBE_UV)\nuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;uniform float backgroundBlurriness;uniform float backgroundIntensity;varying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main(){\n#ifdef ENVMAP_TYPE_CUBE\nvec4 texColor=textureCube(envMap,vec3(flipEnvMap*vWorldDirection.x,vWorldDirection.yz));\n#elif defined(ENVMAP_TYPE_CUBE_UV)\nvec4 texColor=textureCubeUV(envMap,vWorldDirection,backgroundBlurriness);\n#else\nvec4 texColor=vec4(0.0,0.0,0.0,1.0);\n#endif\ntexColor.rgb*=backgroundIntensity;gl_FragColor=texColor;\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
      cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\ngl_Position.z=gl_Position.w;}",
      cube_frag: "uniform samplerCube tCube;uniform float tFlip;uniform float opacity;varying vec3 vWorldDirection;void main(){vec4 texColor=textureCube(tCube,vec3(tFlip*vWorldDirection.x,vWorldDirection.yz));gl_FragColor=texColor;gl_FragColor.a*=opacity;\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
      depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;void main(){\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvHighPrecisionZW=gl_Position.zw;}",
      depth_frag: "#if DEPTH_PACKING==3200\nuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;void main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(1.0);\n#if DEPTH_PACKING==3200\ndiffuseColor.a=opacity;\n#endif\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <logdepthbuf_fragment>\nfloat fragCoordZ=0.5*vHighPrecisionZW[0]/vHighPrecisionZW[1]+0.5;\n#if DEPTH_PACKING==3200\ngl_FragColor=vec4(vec3(1.0-fragCoordZ),opacity);\n#elif DEPTH_PACKING==3201\ngl_FragColor=packDepthToRGBA(fragCoordZ);\n#endif\n}",
      distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <worldpos_vertex>\n#include <clipping_planes_vertex>\nvWorldPosition=worldPosition.xyz;}",
      distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;uniform float nearDistance;uniform float farDistance;varying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(1.0);\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\nfloat dist=length(vWorldPosition-referencePosition);dist=(dist-nearDistance)/(farDistance-nearDistance);dist=saturate(dist);gl_FragColor=packDepthToRGBA(dist);}",
      equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vWorldDirection=transformDirection(position,modelMatrix);\n#include <begin_vertex>\n#include <project_vertex>\n}",
      equirect_frag: "uniform sampler2D tEquirect;varying vec3 vWorldDirection;\n#include <common>\nvoid main(){vec3 direction=normalize(vWorldDirection);vec2 sampleUV=equirectUv(direction);gl_FragColor=texture2D(tEquirect,sampleUV);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n}",
      linedashed_vert: "uniform float scale;attribute float lineDistance;varying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){vLineDistance=scale*lineDistance;\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\n}",
      linedashed_frag: "uniform vec3 diffuse;uniform float opacity;uniform float dashSize;uniform float totalSize;varying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nif(mod(vLineDistance,totalSize)>dashSize){discard;}vec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <color_fragment>\noutgoingLight=diffuseColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n}",
      meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#if defined(USE_ENVMAP)||defined(USE_SKINNING)\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#endif\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <fog_vertex>\n}",
      meshbasic_frag: "uniform vec3 diffuse;uniform float opacity;\n#ifndef FLAT_SHADED\nvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\nReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));\n#ifdef USE_LIGHTMAP\nvec4 lightMapTexel=texture2D(lightMap,vUv2);reflectedLight.indirectDiffuse+=lightMapTexel.rgb*lightMapIntensity*RECIPROCAL_PI;\n#else\nreflectedLight.indirectDiffuse+=vec3(1.0);\n#endif\n#include <aomap_fragment>\nreflectedLight.indirectDiffuse*=diffuseColor.rgb;vec3 outgoingLight=reflectedLight.indirectDiffuse;\n#include <envmap_fragment>\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
      meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
      meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;uniform vec3 emissive;uniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_lambert_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+totalEmissiveRadiance;\n#include <envmap_fragment>\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
      meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\nvViewPosition=-mvPosition.xyz;}",
      meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;uniform float opacity;uniform sampler2D matcap;varying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\nvec3 viewDir=normalize(vViewPosition);vec3 x=normalize(vec3(viewDir.z,0.0,-viewDir.x));vec3 y=cross(viewDir,x);vec2 uv=vec2(dot(x,normal),dot(y,normal))*0.495+0.5;\n#ifdef USE_MATCAP\nvec4 matcapColor=texture2D(matcap,uv);\n#else\nvec4 matcapColor=vec4(vec3(mix(0.2,0.8,uv.y)),1.0);\n#endif\nvec3 outgoingLight=diffuseColor.rgb*matcapColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
      meshnormal_vert: "#define NORMAL\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvViewPosition=-mvPosition.xyz;\n#endif\n}",
      meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined(FLAT_SHADED)||defined(USE_BUMPMAP)||defined(TANGENTSPACE_NORMALMAP)\nvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\n#include <logdepthbuf_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\ngl_FragColor=vec4(packNormalToRGB(normal),opacity);\n#ifdef OPAQUE\ngl_FragColor.a=1.0;\n#endif\n}",
      meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
      meshphong_frag: "#define PHONG\nuniform vec3 diffuse;uniform vec3 emissive;uniform vec3 specular;uniform float shininess;uniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_phong_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular+totalEmissiveRadiance;\n#include <envmap_fragment>\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
      meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\nvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n#ifdef USE_TRANSMISSION\nvWorldPosition=worldPosition.xyz;\n#endif\n}",
      meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n#define IOR\n#define SPECULAR\n#endif\nuniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;\n#ifdef IOR\nuniform float ior;\n#endif\n#ifdef SPECULAR\nuniform float specularIntensity;uniform vec3 specularColor;\n#ifdef USE_SPECULARINTENSITYMAP\nuniform sampler2D specularIntensityMap;\n#endif\n#ifdef USE_SPECULARCOLORMAP\nuniform sampler2D specularColorMap;\n#endif\n#endif\n#ifdef USE_CLEARCOAT\nuniform float clearcoat;uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\nuniform float iridescence;uniform float iridescenceIOR;uniform float iridescenceThicknessMinimum;uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheenColor;uniform float sheenRoughness;\n#ifdef USE_SHEENCOLORMAP\nuniform sampler2D sheenColorMap;\n#endif\n#ifdef USE_SHEENROUGHNESSMAP\nuniform sampler2D sheenRoughnessMap;\n#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <roughnessmap_fragment>\n#include <metalnessmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <clearcoat_normal_fragment_begin>\n#include <clearcoat_normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_physical_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 totalDiffuse=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse;vec3 totalSpecular=reflectedLight.directSpecular+reflectedLight.indirectSpecular;\n#include <transmission_fragment>\nvec3 outgoingLight=totalDiffuse+totalSpecular+totalEmissiveRadiance;\n#ifdef USE_SHEEN\nfloat sheenEnergyComp=1.0-0.157*max3(material.sheenColor);outgoingLight=outgoingLight*sheenEnergyComp+sheenSpecular;\n#endif\n#ifdef USE_CLEARCOAT\nfloat dotNVcc=saturate(dot(geometry.clearcoatNormal,geometry.viewDir));vec3 Fcc=F_Schlick(material.clearcoatF0,material.clearcoatF90,dotNVcc);outgoingLight=outgoingLight*(1.0-material.clearcoat*Fcc)+clearcoatSpecular*material.clearcoat;\n#endif\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
      meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <normal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
      meshtoon_frag: "#define TOON\nuniform vec3 diffuse;uniform vec3 emissive;uniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(diffuse,opacity);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_toon_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+totalEmissiveRadiance;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}",
      points_vert: "uniform float size;uniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <color_vertex>\n#include <morphcolor_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\ngl_PointSize=size;\n#ifdef USE_SIZEATTENUATION\nbool isPerspective=isPerspectiveMatrix(projectionMatrix);if(isPerspective)gl_PointSize*=(scale/-mvPosition.z);\n#endif\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <fog_vertex>\n}",
      points_frag: "uniform vec3 diffuse;uniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_particle_fragment>\n#include <color_fragment>\n#include <alphatest_fragment>\noutgoingLight=diffuseColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n}",
      shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main(){\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n}",
      shadow_frag: "uniform vec3 color;uniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main(){gl_FragColor=vec4(color,opacity*(1.0-getShadowMask()));\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n}",
      sprite_vert: "uniform float rotation;uniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main(){\n#include <uv_vertex>\nvec4 mvPosition=modelViewMatrix*vec4(0.0,0.0,0.0,1.0);vec2 scale;scale.x=length(vec3(modelMatrix[0].x,modelMatrix[0].y,modelMatrix[0].z));scale.y=length(vec3(modelMatrix[1].x,modelMatrix[1].y,modelMatrix[1].z));\n#ifndef USE_SIZEATTENUATION\nbool isPerspective=isPerspectiveMatrix(projectionMatrix);if(isPerspective)scale*=-mvPosition.z;\n#endif\nvec2 alignedPosition=(position.xy-(center-vec2(0.5)))*scale;vec2 rotatedPosition;rotatedPosition.x=cos(rotation)*alignedPosition.x-sin(rotation)*alignedPosition.y;rotatedPosition.y=sin(rotation)*alignedPosition.x+cos(rotation)*alignedPosition.y;mvPosition.xy+=rotatedPosition;gl_Position=projectionMatrix*mvPosition;\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <fog_vertex>\n}",
      sprite_frag: "uniform vec3 diffuse;uniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main(){\n#include <clipping_planes_fragment>\nvec3 outgoingLight=vec3(0.0);vec4 diffuseColor=vec4(diffuse,opacity);\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\noutgoingLight=diffuseColor.rgb;\n#include <output_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n}"
    },
    Jw = {
      common: {
        diffuse: {
          value: new cS(16777215)
        },
        opacity: {
          value: 1
        },
        map: {
          value: null
        },
        uvTransform: {
          value: new Zx
        },
        uv2Transform: {
          value: new Zx
        },
        alphaMap: {
          value: null
        },
        alphaTest: {
          value: 0
        }
      },
      specularmap: {
        specularMap: {
          value: null
        }
      },
      envmap: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        },
        reflectivity: {
          value: 1
        },
        ior: {
          value: 1.5
        },
        refractionRatio: {
          value: .98
        }
      },
      aomap: {
        aoMap: {
          value: null
        },
        aoMapIntensity: {
          value: 1
        }
      },
      lightmap: {
        lightMap: {
          value: null
        },
        lightMapIntensity: {
          value: 1
        }
      },
      emissivemap: {
        emissiveMap: {
          value: null
        }
      },
      bumpmap: {
        bumpMap: {
          value: null
        },
        bumpScale: {
          value: 1
        }
      },
      normalmap: {
        normalMap: {
          value: null
        },
        normalScale: {
          value: new Yx(1, 1)
        }
      },
      displacementmap: {
        displacementMap: {
          value: null
        },
        displacementScale: {
          value: 1
        },
        displacementBias: {
          value: 0
        }
      },
      roughnessmap: {
        roughnessMap: {
          value: null
        }
      },
      metalnessmap: {
        metalnessMap: {
          value: null
        }
      },
      gradientmap: {
        gradientMap: {
          value: null
        }
      },
      fog: {
        fogDensity: {
          value: 25e-5
        },
        fogNear: {
          value: 1
        },
        fogFar: {
          value: 2e3
        },
        fogColor: {
          value: new cS(16777215)
        }
      },
      lights: {
        ambientLightColor: {
          value: []
        },
        lightProbe: {
          value: []
        },
        directionalLights: {
          value: [],
          properties: {
            direction: {},
            color: {}
          }
        },
        directionalLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        directionalShadowMap: {
          value: []
        },
        directionalShadowMatrix: {
          value: []
        },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {}
          }
        },
        spotLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        spotLightMap: {
          value: []
        },
        spotShadowMap: {
          value: []
        },
        spotLightMatrix: {
          value: []
        },
        pointLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            decay: {},
            distance: {}
          }
        },
        pointLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {}
          }
        },
        pointShadowMap: {
          value: []
        },
        pointShadowMatrix: {
          value: []
        },
        hemisphereLights: {
          value: [],
          properties: {
            direction: {},
            skyColor: {},
            groundColor: {}
          }
        },
        rectAreaLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            width: {},
            height: {}
          }
        },
        ltc_1: {
          value: null
        },
        ltc_2: {
          value: null
        }
      },
      points: {
        diffuse: {
          value: new cS(16777215)
        },
        opacity: {
          value: 1
        },
        size: {
          value: 1
        },
        scale: {
          value: 1
        },
        map: {
          value: null
        },
        alphaMap: {
          value: null
        },
        alphaTest: {
          value: 0
        },
        uvTransform: {
          value: new Zx
        }
      },
      sprite: {
        diffuse: {
          value: new cS(16777215)
        },
        opacity: {
          value: 1
        },
        center: {
          value: new Yx(.5, .5)
        },
        rotation: {
          value: 0
        },
        map: {
          value: null
        },
        alphaMap: {
          value: null
        },
        alphaTest: {
          value: 0
        },
        uvTransform: {
          value: new Zx
        }
      }
    },
    Qw = {
      basic: {
        uniforms: ww([Jw.common, Jw.specularmap, Jw.envmap, Jw.aomap, Jw.lightmap, Jw.fog]),
        vertexShader: $w.meshbasic_vert,
        fragmentShader: $w.meshbasic_frag
      },
      lambert: {
        uniforms: ww([Jw.common, Jw.specularmap, Jw.envmap, Jw.aomap, Jw.lightmap, Jw.emissivemap, Jw.bumpmap, Jw.normalmap, Jw.displacementmap, Jw.fog, Jw.lights, {
          emissive: {
            value: new cS(0)
          }
        }]),
        vertexShader: $w.meshlambert_vert,
        fragmentShader: $w.meshlambert_frag
      },
      phong: {
        uniforms: ww([Jw.common, Jw.specularmap, Jw.envmap, Jw.aomap, Jw.lightmap, Jw.emissivemap, Jw.bumpmap, Jw.normalmap, Jw.displacementmap, Jw.fog, Jw.lights, {
          emissive: {
            value: new cS(0)
          },
          specular: {
            value: new cS(1118481)
          },
          shininess: {
            value: 30
          }
        }]),
        vertexShader: $w.meshphong_vert,
        fragmentShader: $w.meshphong_frag
      },
      standard: {
        uniforms: ww([Jw.common, Jw.envmap, Jw.aomap, Jw.lightmap, Jw.emissivemap, Jw.bumpmap, Jw.normalmap, Jw.displacementmap, Jw.roughnessmap, Jw.metalnessmap, Jw.fog, Jw.lights, {
          emissive: {
            value: new cS(0)
          },
          roughness: {
            value: 1
          },
          metalness: {
            value: 0
          },
          envMapIntensity: {
            value: 1
          }
        }]),
        vertexShader: $w.meshphysical_vert,
        fragmentShader: $w.meshphysical_frag
      },
      toon: {
        uniforms: ww([Jw.common, Jw.aomap, Jw.lightmap, Jw.emissivemap, Jw.bumpmap, Jw.normalmap, Jw.displacementmap, Jw.gradientmap, Jw.fog, Jw.lights, {
          emissive: {
            value: new cS(0)
          }
        }]),
        vertexShader: $w.meshtoon_vert,
        fragmentShader: $w.meshtoon_frag
      },
      matcap: {
        uniforms: ww([Jw.common, Jw.bumpmap, Jw.normalmap, Jw.displacementmap, Jw.fog, {
          matcap: {
            value: null
          }
        }]),
        vertexShader: $w.meshmatcap_vert,
        fragmentShader: $w.meshmatcap_frag
      },
      points: {
        uniforms: ww([Jw.points, Jw.fog]),
        vertexShader: $w.points_vert,
        fragmentShader: $w.points_frag
      },
      dashed: {
        uniforms: ww([Jw.common, Jw.fog, {
          scale: {
            value: 1
          },
          dashSize: {
            value: 1
          },
          totalSize: {
            value: 2
          }
        }]),
        vertexShader: $w.linedashed_vert,
        fragmentShader: $w.linedashed_frag
      },
      depth: {
        uniforms: ww([Jw.common, Jw.displacementmap]),
        vertexShader: $w.depth_vert,
        fragmentShader: $w.depth_frag
      },
      normal: {
        uniforms: ww([Jw.common, Jw.bumpmap, Jw.normalmap, Jw.displacementmap, {
          opacity: {
            value: 1
          }
        }]),
        vertexShader: $w.meshnormal_vert,
        fragmentShader: $w.meshnormal_frag
      },
      sprite: {
        uniforms: ww([Jw.sprite, Jw.fog]),
        vertexShader: $w.sprite_vert,
        fragmentShader: $w.sprite_frag
      },
      background: {
        uniforms: {
          uvTransform: {
            value: new Zx
          },
          t2D: {
            value: null
          },
          backgroundIntensity: {
            value: 1
          }
        },
        vertexShader: $w.background_vert,
        fragmentShader: $w.background_frag
      },
      backgroundCube: {
        uniforms: {
          envMap: {
            value: null
          },
          flipEnvMap: {
            value: -1
          },
          backgroundBlurriness: {
            value: 0
          },
          backgroundIntensity: {
            value: 1
          }
        },
        vertexShader: $w.backgroundCube_vert,
        fragmentShader: $w.backgroundCube_frag
      },
      cube: {
        uniforms: {
          tCube: {
            value: null
          },
          tFlip: {
            value: -1
          },
          opacity: {
            value: 1
          }
        },
        vertexShader: $w.cube_vert,
        fragmentShader: $w.cube_frag
      },
      equirect: {
        uniforms: {
          tEquirect: {
            value: null
          }
        },
        vertexShader: $w.equirect_vert,
        fragmentShader: $w.equirect_frag
      },
      distanceRGBA: {
        uniforms: ww([Jw.common, Jw.displacementmap, {
          referencePosition: {
            value: new xS
          },
          nearDistance: {
            value: 1
          },
          farDistance: {
            value: 1e3
          }
        }]),
        vertexShader: $w.distanceRGBA_vert,
        fragmentShader: $w.distanceRGBA_frag
      },
      shadow: {
        uniforms: ww([Jw.lights, Jw.fog, {
          color: {
            value: new cS(0)
          },
          opacity: {
            value: 1
          }
        }]),
        vertexShader: $w.shadow_vert,
        fragmentShader: $w.shadow_frag
      }
    };
  Qw.physical = {
    uniforms: ww([Qw.standard.uniforms, {
      clearcoat: {
        value: 0
      },
      clearcoatMap: {
        value: null
      },
      clearcoatRoughness: {
        value: 0
      },
      clearcoatRoughnessMap: {
        value: null
      },
      clearcoatNormalScale: {
        value: new Yx(1, 1)
      },
      clearcoatNormalMap: {
        value: null
      },
      iridescence: {
        value: 0
      },
      iridescenceMap: {
        value: null
      },
      iridescenceIOR: {
        value: 1.3
      },
      iridescenceThicknessMinimum: {
        value: 100
      },
      iridescenceThicknessMaximum: {
        value: 400
      },
      iridescenceThicknessMap: {
        value: null
      },
      sheen: {
        value: 0
      },
      sheenColor: {
        value: new cS(0)
      },
      sheenColorMap: {
        value: null
      },
      sheenRoughness: {
        value: 1
      },
      sheenRoughnessMap: {
        value: null
      },
      transmission: {
        value: 0
      },
      transmissionMap: {
        value: null
      },
      transmissionSamplerSize: {
        value: new Yx
      },
      transmissionSamplerMap: {
        value: null
      },
      thickness: {
        value: 0
      },
      thicknessMap: {
        value: null
      },
      attenuationDistance: {
        value: 0
      },
      attenuationColor: {
        value: new cS(0)
      },
      specularIntensity: {
        value: 1
      },
      specularIntensityMap: {
        value: null
      },
      specularColor: {
        value: new cS(1, 1, 1)
      },
      specularColorMap: {
        value: null
      }
    }]),
    vertexShader: $w.meshphysical_vert,
    fragmentShader: $w.meshphysical_frag
  };
  const eT = {
    r: 0,
    b: 0,
    g: 0
  };

  function tT(e, t, n, r, i, a, o) {
    const s = new cS(0);
    let l, c, u = !0 === a ? 0 : 1,
      h = null,
      d = 0,
      p = null;

    function f(t, n) {
      t.getRGB(eT, Tw(e)), r.buffers.color.setClear(eT.r, eT.g, eT.b, n, o)
    }
    return {
      getClearColor: function () {
        return s
      },
      setClearColor: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        s.set(e), u = t, f(s, u)
      },
      getClearAlpha: function () {
        return u
      },
      setClearAlpha: function (e) {
        u = e, f(s, u)
      },
      render: function (r, a) {
        let o = !1,
          m = !0 === a.isScene ? a.background : null;
        if (m && m.isTexture) {
          m = (a.backgroundBlurriness > 0 ? n : t).get(m)
        }
        const g = e.xr,
          v = g.getSession && g.getSession();
        v && "additive" === v.environmentBlendMode && (m = null), null === m ? f(s, u) : m && m.isColor && (f(m, 1), o = !0), (e.autoClear || o) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), m && (m.isCubeTexture || m.mapping === uf) ? (void 0 === c && (c = new bw(new Sw(1, 1, 1), new Aw({
          name: "BackgroundCubeMaterial",
          uniforms: Mw(Qw.backgroundCube.uniforms),
          vertexShader: Qw.backgroundCube.vertexShader,
          fragmentShader: Qw.backgroundCube.fragmentShader,
          side: _p,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function (e, t, n) {
          this.matrixWorld.copyPosition(n.matrixWorld)
        }, Object.defineProperty(c.material, "envMap", {
          get: function () {
            return this.uniforms.envMap.value
          }
        }), i.update(c)), c.material.uniforms.envMap.value = m, c.material.uniforms.flipEnvMap.value = m.isCubeTexture && !1 === m.isRenderTargetTexture ? -1 : 1, c.material.uniforms.backgroundBlurriness.value = a.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = a.backgroundIntensity, c.material.toneMapped = m.encoding !== ym, h === m && d === m.version && p === e.toneMapping || (c.material.needsUpdate = !0, h = m, d = m.version, p = e.toneMapping), c.layers.enableAll(), r.unshift(c, c.geometry, c.material, 0, 0, null)) : m && m.isTexture && (void 0 === l && (l = new bw(new Kw(2, 2), new Aw({
          name: "BackgroundMaterial",
          uniforms: Mw(Qw.background.uniforms),
          vertexShader: Qw.background.vertexShader,
          fragmentShader: Qw.background.fragmentShader,
          side: vp,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
          get: function () {
            return this.uniforms.t2D.value
          }
        }), i.update(l)), l.material.uniforms.t2D.value = m, l.material.uniforms.backgroundIntensity.value = a.backgroundIntensity, l.material.toneMapped = m.encoding !== ym, !0 === m.matrixAutoUpdate && m.updateMatrix(), l.material.uniforms.uvTransform.value.copy(m.matrix), h === m && d === m.version && p === e.toneMapping || (l.material.needsUpdate = !0, h = m, d = m.version, p = e.toneMapping), l.layers.enableAll(), r.unshift(l, l.geometry, l.material, 0, 0, null))
      }
    }
  }

  function nT(e, t, n, r) {
    const i = e.getParameter(34921),
      a = r.isWebGL2 ? null : t.get("OES_vertex_array_object"),
      o = r.isWebGL2 || null !== a,
      s = {},
      l = p(null);
    let c = l,
      u = !1;

    function h(t) {
      return r.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t)
    }

    function d(t) {
      return r.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t)
    }

    function p(e) {
      const t = [],
        n = [],
        r = [];
      for (let e = 0; e < i; e++) t[e] = 0, n[e] = 0, r[e] = 0;
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: t,
        enabledAttributes: n,
        attributeDivisors: r,
        object: e,
        attributes: {},
        index: null
      }
    }

    function f() {
      const e = c.newAttributes;
      for (let t = 0, n = e.length; t < n; t++) e[t] = 0
    }

    function m(e) {
      g(e, 0)
    }

    function g(n, i) {
      const a = c.newAttributes,
        o = c.enabledAttributes,
        s = c.attributeDivisors;
      if (a[n] = 1, 0 === o[n] && (e.enableVertexAttribArray(n), o[n] = 1), s[n] !== i) {
        (r.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[r.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, i), s[n] = i
      }
    }

    function v() {
      const t = c.newAttributes,
        n = c.enabledAttributes;
      for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0)
    }

    function _(t, n, i, a, o, s) {
      !0 !== r.isWebGL2 || 5124 !== i && 5125 !== i ? e.vertexAttribPointer(t, n, i, a, o, s) : e.vertexAttribIPointer(t, n, i, o, s)
    }

    function y() {
      b(), u = !0, c !== l && (c = l, h(c.object))
    }

    function b() {
      l.geometry = null, l.program = null, l.wireframe = !1
    }
    return {
      setup: function (i, l, d, y, b) {
        let x = !1;
        if (o) {
          const t = function (t, n, i) {
            const o = !0 === i.wireframe;
            let l = s[t.id];
            void 0 === l && (l = {}, s[t.id] = l);
            let c = l[n.id];
            void 0 === c && (c = {}, l[n.id] = c);
            let u = c[o];
            void 0 === u && (u = p(r.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES()), c[o] = u);
            return u
          }(y, d, l);
          c !== t && (c = t, h(c.object)), x = function (e, t, n, r) {
            const i = c.attributes,
              a = t.attributes;
            let o = 0;
            const s = n.getAttributes();
            for (const t in s) {
              if (s[t].location >= 0) {
                const n = i[t];
                let r = a[t];
                if (void 0 === r && ("instanceMatrix" === t && e.instanceMatrix && (r = e.instanceMatrix), "instanceColor" === t && e.instanceColor && (r = e.instanceColor)), void 0 === n) return !0;
                if (n.attribute !== r) return !0;
                if (r && n.data !== r.data) return !0;
                o++
              }
            }
            return c.attributesNum !== o || c.index !== r
          }(i, y, d, b), x && function (e, t, n, r) {
            const i = {},
              a = t.attributes;
            let o = 0;
            const s = n.getAttributes();
            for (const t in s) {
              if (s[t].location >= 0) {
                let n = a[t];
                void 0 === n && ("instanceMatrix" === t && e.instanceMatrix && (n = e.instanceMatrix), "instanceColor" === t && e.instanceColor && (n = e.instanceColor));
                const r = {};
                r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, o++
              }
            }
            c.attributes = i, c.attributesNum = o, c.index = r
          }(i, y, d, b)
        } else {
          const e = !0 === l.wireframe;
          c.geometry === y.id && c.program === d.id && c.wireframe === e || (c.geometry = y.id, c.program = d.id, c.wireframe = e, x = !0)
        }
        null !== b && n.update(b, 34963), (x || u) && (u = !1, function (i, a, o, s) {
          if (!1 === r.isWebGL2 && (i.isInstancedMesh || s.isInstancedBufferGeometry) && null === t.get("ANGLE_instanced_arrays")) return;
          f();
          const l = s.attributes,
            c = o.getAttributes(),
            u = a.defaultAttributeValues;
          for (const t in c) {
            const r = c[t];
            if (r.location >= 0) {
              let a = l[t];
              if (void 0 === a && ("instanceMatrix" === t && i.instanceMatrix && (a = i.instanceMatrix), "instanceColor" === t && i.instanceColor && (a = i.instanceColor)), void 0 !== a) {
                const t = a.normalized,
                  o = a.itemSize,
                  l = n.get(a);
                if (void 0 === l) continue;
                const c = l.buffer,
                  u = l.type,
                  h = l.bytesPerElement;
                if (a.isInterleavedBufferAttribute) {
                  const n = a.data,
                    l = n.stride,
                    d = a.offset;
                  if (n.isInstancedInterleavedBuffer) {
                    for (let e = 0; e < r.locationSize; e++) g(r.location + e, n.meshPerAttribute);
                    !0 !== i.isInstancedMesh && void 0 === s._maxInstanceCount && (s._maxInstanceCount = n.meshPerAttribute * n.count)
                  } else
                    for (let e = 0; e < r.locationSize; e++) m(r.location + e);
                  e.bindBuffer(34962, c);
                  for (let e = 0; e < r.locationSize; e++) _(r.location + e, o / r.locationSize, u, t, l * h, (d + o / r.locationSize * e) * h)
                } else {
                  if (a.isInstancedBufferAttribute) {
                    for (let e = 0; e < r.locationSize; e++) g(r.location + e, a.meshPerAttribute);
                    !0 !== i.isInstancedMesh && void 0 === s._maxInstanceCount && (s._maxInstanceCount = a.meshPerAttribute * a.count)
                  } else
                    for (let e = 0; e < r.locationSize; e++) m(r.location + e);
                  e.bindBuffer(34962, c);
                  for (let e = 0; e < r.locationSize; e++) _(r.location + e, o / r.locationSize, u, t, o * h, o / r.locationSize * e * h)
                }
              } else if (void 0 !== u) {
                const n = u[t];
                if (void 0 !== n) switch (n.length) {
                  case 2:
                    e.vertexAttrib2fv(r.location, n);
                    break;
                  case 3:
                    e.vertexAttrib3fv(r.location, n);
                    break;
                  case 4:
                    e.vertexAttrib4fv(r.location, n);
                    break;
                  default:
                    e.vertexAttrib1fv(r.location, n)
                }
              }
            }
          }
          v()
        }(i, l, d, y), null !== b && e.bindBuffer(34963, n.get(b).buffer))
      },
      reset: y,
      resetDefaultState: b,
      dispose: function () {
        y();
        for (const e in s) {
          const t = s[e];
          for (const e in t) {
            const n = t[e];
            for (const e in n) d(n[e].object), delete n[e];
            delete t[e]
          }
          delete s[e]
        }
      },
      releaseStatesOfGeometry: function (e) {
        if (void 0 === s[e.id]) return;
        const t = s[e.id];
        for (const e in t) {
          const n = t[e];
          for (const e in n) d(n[e].object), delete n[e];
          delete t[e]
        }
        delete s[e.id]
      },
      releaseStatesOfProgram: function (e) {
        for (const t in s) {
          const n = s[t];
          if (void 0 === n[e.id]) continue;
          const r = n[e.id];
          for (const e in r) d(r[e].object), delete r[e];
          delete n[e.id]
        }
      },
      initAttributes: f,
      enableAttribute: m,
      disableUnusedAttributes: v
    }
  }

  function rT(e, t, n, r) {
    const i = r.isWebGL2;
    let a;
    this.setMode = function (e) {
      a = e
    }, this.render = function (t, r) {
      e.drawArrays(a, t, r), n.update(r, a, 1)
    }, this.renderInstances = function (r, o, s) {
      if (0 === s) return;
      let l, c;
      if (i) l = e, c = "drawArraysInstanced";
      else if (l = t.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      l[c](a, r, o, s), n.update(o, a, s)
    }
  }

  function iT(e, t, n) {
    let r;

    function i(t) {
      if ("highp" === t) {
        if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
        t = "mediump"
      }
      return "mediump" === t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
    }
    const a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext;
    let o = void 0 !== n.precision ? n.precision : "highp";
    const s = i(o);
    s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
    const l = a || t.has("WEBGL_draw_buffers"),
      c = !0 === n.logarithmicDepthBuffer,
      u = e.getParameter(34930),
      h = e.getParameter(35660),
      d = e.getParameter(3379),
      p = e.getParameter(34076),
      f = e.getParameter(34921),
      m = e.getParameter(36347),
      g = e.getParameter(36348),
      v = e.getParameter(36349),
      _ = h > 0,
      y = a || t.has("OES_texture_float");
    return {
      isWebGL2: a,
      drawBuffers: l,
      getMaxAnisotropy: function () {
        if (void 0 !== r) return r;
        if (!0 === t.has("EXT_texture_filter_anisotropic")) {
          const n = t.get("EXT_texture_filter_anisotropic");
          r = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else r = 0;
        return r
      },
      getMaxPrecision: i,
      precision: o,
      logarithmicDepthBuffer: c,
      maxTextures: u,
      maxVertexTextures: h,
      maxTextureSize: d,
      maxCubemapSize: p,
      maxAttributes: f,
      maxVertexUniforms: m,
      maxVaryings: g,
      maxFragmentUniforms: v,
      vertexTextures: _,
      floatFragmentTextures: y,
      floatVertexTextures: _ && y,
      maxSamples: a ? e.getParameter(36183) : 0
    }
  }

  function aT(e) {
    const t = this;
    let n = null,
      r = 0,
      i = !1,
      a = !1;
    const o = new kw,
      s = new Zx,
      l = {
        value: null,
        needsUpdate: !1
      };

    function c(e, n, r, i) {
      const a = null !== e ? e.length : 0;
      let c = null;
      if (0 !== a) {
        if (c = l.value, !0 !== i || null === c) {
          const t = r + 4 * a,
            i = n.matrixWorldInverse;
          s.getNormalMatrix(i), (null === c || c.length < t) && (c = new Float32Array(t));
          for (let t = 0, n = r; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(i, s), o.normal.toArray(c, n), c[n + 3] = o.constant
        }
        l.value = c, l.needsUpdate = !0
      }
      return t.numPlanes = a, t.numIntersection = 0, c
    }
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (e, t) {
      const n = 0 !== e.length || t || 0 !== r || i;
      return i = t, r = e.length, n
    }, this.beginShadows = function () {
      a = !0, c(null)
    }, this.endShadows = function () {
      a = !1
    }, this.setGlobalState = function (e, t) {
      n = c(e, t, 0)
    }, this.setState = function (o, s, u) {
      const h = o.clippingPlanes,
        d = o.clipIntersection,
        p = o.clipShadows,
        f = e.get(o);
      if (!i || null === h || 0 === h.length || a && !p) a ? c(null) : function () {
        l.value !== n && (l.value = n, l.needsUpdate = r > 0);
        t.numPlanes = r, t.numIntersection = 0
      }();
      else {
        const e = a ? 0 : r,
          t = 4 * e;
        let i = f.clippingState || null;
        l.value = i, i = c(h, s, t, u);
        for (let e = 0; e !== t; ++e) i[e] = n[e];
        f.clippingState = i, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += e
      }
    }
  }

  function oT(e) {
    let t = new WeakMap;

    function n(e, t) {
      return t === lf ? e.mapping = of : t === cf && (e.mapping = sf), e
    }

    function r(e) {
      const n = e.target;
      n.removeEventListener("dispose", r);
      const i = t.get(n);
      void 0 !== i && (t.delete(n), i.dispose())
    }
    return {
      get: function (i) {
        if (i && i.isTexture && !1 === i.isRenderTargetTexture) {
          const a = i.mapping;
          if (a === lf || a === cf) {
            if (t.has(i)) {
              return n(t.get(i).texture, i.mapping)
            } {
              const a = i.image;
              if (a && a.height > 0) {
                const o = new Nw(a.height / 2);
                return o.fromEquirectangularTexture(e, i), t.set(i, o), i.addEventListener("dispose", r), n(o.texture, i.mapping)
              }
              return null
            }
          }
        }
        return i
      },
      dispose: function () {
        t = new WeakMap
      }
    }
  }
  class sT extends Cw {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .1,
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 2e3;
      super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix()
    }
    copy(e, t) {
      return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this
    }
    setViewOffset(e, t, n, r, i, a) {
      null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix()
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
      const e = (this.right - this.left) / (2 * this.zoom),
        t = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        r = (this.top + this.bottom) / 2;
      let i = n - e,
        a = n + e,
        o = r + t,
        s = r - t;
      if (null !== this.view && this.view.enabled) {
        const e = (this.right - this.left) / this.view.fullWidth / this.zoom,
          t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        i += e * this.view.offsetX, a = i + e * this.view.width, o -= t * this.view.offsetY, s = o - t * this.view.height
      }
      this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t
    }
  }
  const lT = 4,
    cT = [.125, .215, .35, .446, .526, .582],
    uT = 20,
    hT = new sT,
    dT = new cS;
  let pT = null;
  const fT = (1 + Math.sqrt(5)) / 2,
    mT = 1 / fT,
    gT = [new xS(1, 1, 1), new xS(-1, 1, 1), new xS(1, 1, -1), new xS(-1, 1, -1), new xS(0, fT, mT), new xS(0, fT, -mT), new xS(mT, 0, fT), new xS(-mT, 0, fT), new xS(fT, mT, 0), new xS(-fT, mT, 0)];
  class vT {
    constructor(e) {
      this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
    }
    fromScene(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100;
      pT = this._renderer.getRenderTarget(), this._setSize(256);
      const i = this._allocateTargets();
      return i.depthBuffer = !0, this._sceneToCubeUV(e, n, r, i), t > 0 && this._blur(i, 0, 0, t), this._applyPMREM(i), this._cleanup(i), i
    }
    fromEquirectangular(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return this._fromTexture(e, t)
    }
    fromCubemap(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return this._fromTexture(e, t)
    }
    compileCubemapShader() {
      null === this._cubemapMaterial && (this._cubemapMaterial = xT(), this._compileMaterial(this._cubemapMaterial))
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial && (this._equirectMaterial = bT(), this._compileMaterial(this._equirectMaterial))
    }
    dispose() {
      this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose()
    }
    _setSize(e) {
      this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax)
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
      for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose()
    }
    _cleanup(e) {
      this._renderer.setRenderTarget(pT), e.scissorTest = !1, yT(e, 0, 0, e.width, e.height)
    }
    _fromTexture(e, t) {
      e.mapping === of || e.mapping === sf ? this._setSize(0 === e.image.length ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), pT = this._renderer.getRenderTarget();
      const n = t || this._allocateTargets();
      return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    }
    _allocateTargets() {
      const e = 3 * Math.max(this._cubeSize, 112),
        t = 4 * this._cubeSize,
        n = {
          magFilter: vf,
          minFilter: vf,
          generateMipmaps: !1,
          type: Af,
          format: Df,
          encoding: _m,
          depthBuffer: !1
        },
        r = _T(e, t, n);
      if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
        null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = _T(e, t, n);
        const {
          _lodMax: r
        } = this;
        ({
          sizeLods: this._sizeLods,
          lodPlanes: this._lodPlanes,
          sigmas: this._sigmas
        } = function (e) {
          const t = [],
            n = [],
            r = [];
          let i = e;
          const a = e - lT + 1 + cT.length;
          for (let o = 0; o < a; o++) {
            const a = Math.pow(2, i);
            n.push(a);
            let s = 1 / a;
            o > e - lT ? s = cT[o - e + lT - 1] : 0 === o && (s = 0), r.push(s);
            const l = 1 / (a - 2),
              c = -l,
              u = 1 + l,
              h = [c, c, u, c, u, u, c, c, u, u, c, u],
              d = 6,
              p = 6,
              f = 3,
              m = 2,
              g = 1,
              v = new Float32Array(f * p * d),
              _ = new Float32Array(m * p * d),
              y = new Float32Array(g * p * d);
            for (let e = 0; e < d; e++) {
              const t = e % 3 * 2 / 3 - 1,
                n = e > 2 ? 0 : -1,
                r = [t, n, 0, t + 2 / 3, n, 0, t + 2 / 3, n + 1, 0, t, n, 0, t + 2 / 3, n + 1, 0, t, n + 1, 0];
              v.set(r, f * p * e), _.set(h, m * p * e);
              const i = [e, e, e, e, e, e];
              y.set(i, g * p * e)
            }
            const b = new ow;
            b.setAttribute("position", new ZM(v, f)), b.setAttribute("uv", new ZM(_, m)), b.setAttribute("faceIndex", new ZM(y, g)), t.push(b), i > lT && i--
          }
          return {
            lodPlanes: t,
            sizeLods: n,
            sigmas: r
          }
        }(r)), this._blurMaterial = function (e, t, n) {
          const r = new Float32Array(uT),
            i = new xS(0, 1, 0),
            a = new Aw({
              name: "SphericalGaussianBlur",
              defines: {
                n: uT,
                CUBEUV_TEXEL_WIDTH: 1 / t,
                CUBEUV_TEXEL_HEIGHT: 1 / n,
                CUBEUV_MAX_MIP: "".concat(e, ".0")
              },
              uniforms: {
                envMap: {
                  value: null
                },
                samples: {
                  value: 1
                },
                weights: {
                  value: r
                },
                latitudinal: {
                  value: !1
                },
                dTheta: {
                  value: 0
                },
                mipInt: {
                  value: 0
                },
                poleAxis: {
                  value: i
                }
              },
              vertexShader: "precision mediump float;precision mediump int;attribute float faceIndex;varying vec3 vOutputDirection;vec3 getDirection(vec2 uv,float face){uv=2.0*uv-1.0;vec3 direction=vec3(uv,1.0);if(face==0.0){direction=direction.zyx;}else if(face==1.0){direction=direction.xzy;direction.xz*=-1.0;}else if(face==2.0){direction.x*=-1.0;}else if(face==3.0){direction=direction.zyx;direction.xz*=-1.0;}else if(face==4.0){direction=direction.xzy;direction.xy*=-1.0;}else if(face==5.0){direction.z*=-1.0;}return direction;}void main(){vOutputDirection=getDirection(uv,faceIndex);gl_Position=vec4(position,1.0);}",
              fragmentShader: "precision mediump float;precision mediump int;varying vec3 vOutputDirection;uniform sampler2D envMap;uniform int samples;uniform float weights[n];uniform bool latitudinal;uniform float dTheta;uniform float mipInt;uniform vec3 poleAxis;\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\nvec3 getSample(float theta,vec3 axis){float cosTheta=cos(theta);vec3 sampleDirection=vOutputDirection*cosTheta+cross(axis,vOutputDirection)*sin(theta)+axis*dot(axis,vOutputDirection)*(1.0-cosTheta);return bilinearCubeUV(envMap,sampleDirection,mipInt);}void main(){vec3 axis=latitudinal?poleAxis:cross(poleAxis,vOutputDirection);if(all(equal(axis,vec3(0.0)))){axis=vec3(vOutputDirection.z,0.0,-vOutputDirection.x);}axis=normalize(axis);gl_FragColor=vec4(0.0,0.0,0.0,1.0);gl_FragColor.rgb+=weights[0]*getSample(0.0,axis);for(int i=1;i<n;i++){if(i>=samples){break;}float theta=dTheta*float(i);gl_FragColor.rgb+=weights[i]*getSample(-1.0*theta,axis);gl_FragColor.rgb+=weights[i]*getSample(theta,axis);}}",
              blending: bp,
              depthTest: !1,
              depthWrite: !1
            });
          return a
        }(r, e, t)
      }
      return r
    }
    _compileMaterial(e) {
      const t = new bw(this._lodPlanes[0], e);
      this._renderer.compile(t, hT)
    }
    _sceneToCubeUV(e, t, n, r) {
      const i = new Lw(90, 1, t, n),
        a = [1, -1, 1, 1, 1, 1],
        o = [1, 1, 1, -1, -1, -1],
        s = this._renderer,
        l = s.autoClear,
        c = s.toneMapping;
      s.getClearColor(dT), s.toneMapping = Qp, s.autoClear = !1;
      const u = new qM({
          name: "PMREM.Background",
          side: _p,
          depthWrite: !1,
          depthTest: !1
        }),
        h = new bw(new Sw, u);
      let d = !1;
      const p = e.background;
      p ? p.isColor && (u.color.copy(p), e.background = null, d = !0) : (u.color.copy(dT), d = !0);
      for (let t = 0; t < 6; t++) {
        const n = t % 3;
        0 === n ? (i.up.set(0, a[t], 0), i.lookAt(o[t], 0, 0)) : 1 === n ? (i.up.set(0, 0, a[t]), i.lookAt(0, o[t], 0)) : (i.up.set(0, a[t], 0), i.lookAt(0, 0, o[t]));
        const l = this._cubeSize;
        yT(r, n * l, t > 2 ? l : 0, l, l), s.setRenderTarget(r), d && s.render(h, i), s.render(e, i)
      }
      h.geometry.dispose(), h.material.dispose(), s.toneMapping = c, s.autoClear = l, e.background = p
    }
    _textureToCubeUV(e, t) {
      const n = this._renderer,
        r = e.mapping === of || e.mapping === sf;
      r ? (null === this._cubemapMaterial && (this._cubemapMaterial = xT()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === e.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = bT());
      const i = r ? this._cubemapMaterial : this._equirectMaterial,
        a = new bw(this._lodPlanes[0], i);
      i.uniforms.envMap.value = e;
      const o = this._cubeSize;
      yT(t, 0, 0, 3 * o, 2 * o), n.setRenderTarget(t), n.render(a, hT)
    }
    _applyPMREM(e) {
      const t = this._renderer,
        n = t.autoClear;
      t.autoClear = !1;
      for (let t = 1; t < this._lodPlanes.length; t++) {
        const n = Math.sqrt(this._sigmas[t] * this._sigmas[t] - this._sigmas[t - 1] * this._sigmas[t - 1]),
          r = gT[(t - 1) % gT.length];
        this._blur(e, t - 1, t, n, r)
      }
      t.autoClear = n
    }
    _blur(e, t, n, r, i) {
      const a = this._pingPongRenderTarget;
      this._halfBlur(e, a, t, n, r, "latitudinal", i), this._halfBlur(a, e, n, n, r, "longitudinal", i)
    }
    _halfBlur(e, t, n, r, i, a, o) {
      const s = this._renderer,
        l = this._blurMaterial;
      "latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
      const c = new bw(this._lodPlanes[r], l),
        u = l.uniforms,
        h = this._sizeLods[n] - 1,
        d = isFinite(i) ? Math.PI / (2 * h) : 2 * Math.PI / (2 * uT - 1),
        p = i / d,
        f = isFinite(i) ? 1 + Math.floor(3 * p) : uT;
      f > uT && console.warn("sigmaRadians, ".concat(i, ", is too large and will clip, as it requested ").concat(f, " samples when the maximum is set to ").concat(uT));
      const m = [];
      let g = 0;
      for (let e = 0; e < uT; ++e) {
        const t = e / p,
          n = Math.exp(-t * t / 2);
        m.push(n), 0 === e ? g += n : e < f && (g += 2 * n)
      }
      for (let e = 0; e < m.length; e++) m[e] = m[e] / g;
      u.envMap.value = e.texture, u.samples.value = f, u.weights.value = m, u.latitudinal.value = "latitudinal" === a, o && (u.poleAxis.value = o);
      const {
        _lodMax: v
      } = this;
      u.dTheta.value = d, u.mipInt.value = v - n;
      const _ = this._sizeLods[r];
      yT(t, 3 * _ * (r > v - lT ? r - v + lT : 0), 4 * (this._cubeSize - _), 3 * _, 2 * _), s.setRenderTarget(t), s.render(c, hT)
    }
  }

  function _T(e, t, n) {
    const r = new vS(e, t, n);
    return r.texture.mapping = uf, r.texture.name = "PMREM.cubeUv", r.scissorTest = !0, r
  }

  function yT(e, t, n, r, i) {
    e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i)
  }

  function bT() {
    return new Aw({
      name: "EquirectangularToCubeUV",
      uniforms: {
        envMap: {
          value: null
        }
      },
      vertexShader: "precision mediump float;precision mediump int;attribute float faceIndex;varying vec3 vOutputDirection;vec3 getDirection(vec2 uv,float face){uv=2.0*uv-1.0;vec3 direction=vec3(uv,1.0);if(face==0.0){direction=direction.zyx;}else if(face==1.0){direction=direction.xzy;direction.xz*=-1.0;}else if(face==2.0){direction.x*=-1.0;}else if(face==3.0){direction=direction.zyx;direction.xz*=-1.0;}else if(face==4.0){direction=direction.xzy;direction.xy*=-1.0;}else if(face==5.0){direction.z*=-1.0;}return direction;}void main(){vOutputDirection=getDirection(uv,faceIndex);gl_Position=vec4(position,1.0);}",
      fragmentShader: "precision mediump float;precision mediump int;varying vec3 vOutputDirection;uniform sampler2D envMap;\n#include <common>\nvoid main(){vec3 outputDirection=normalize(vOutputDirection);vec2 uv=equirectUv(outputDirection);gl_FragColor=vec4(texture2D(envMap,uv).rgb,1.0);}",
      blending: bp,
      depthTest: !1,
      depthWrite: !1
    })
  }

  function xT() {
    return new Aw({
      name: "CubemapToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        }
      },
      vertexShader: "precision mediump float;precision mediump int;attribute float faceIndex;varying vec3 vOutputDirection;vec3 getDirection(vec2 uv,float face){uv=2.0*uv-1.0;vec3 direction=vec3(uv,1.0);if(face==0.0){direction=direction.zyx;}else if(face==1.0){direction=direction.xzy;direction.xz*=-1.0;}else if(face==2.0){direction.x*=-1.0;}else if(face==3.0){direction=direction.zyx;direction.xz*=-1.0;}else if(face==4.0){direction=direction.xzy;direction.xy*=-1.0;}else if(face==5.0){direction.z*=-1.0;}return direction;}void main(){vOutputDirection=getDirection(uv,faceIndex);gl_Position=vec4(position,1.0);}",
      fragmentShader: "precision mediump float;precision mediump int;uniform float flipEnvMap;varying vec3 vOutputDirection;uniform samplerCube envMap;void main(){gl_FragColor=textureCube(envMap,vec3(flipEnvMap*vOutputDirection.x,vOutputDirection.yz));}",
      blending: bp,
      depthTest: !1,
      depthWrite: !1
    })
  }

  function ST(e) {
    let t = new WeakMap,
      n = null;

    function r(e) {
      const n = e.target;
      n.removeEventListener("dispose", r);
      const i = t.get(n);
      void 0 !== i && (t.delete(n), i.dispose())
    }
    return {
      get: function (i) {
        if (i && i.isTexture) {
          const a = i.mapping,
            o = a === lf || a === cf,
            s = a === of || a === sf;
          if (o || s) {
            if (i.isRenderTargetTexture && !0 === i.needsPMREMUpdate) {
              i.needsPMREMUpdate = !1;
              let r = t.get(i);
              return null === n && (n = new vT(e)), r = o ? n.fromEquirectangular(i, r) : n.fromCubemap(i, r), t.set(i, r), r.texture
            }
            if (t.has(i)) return t.get(i).texture; {
              const a = i.image;
              if (o && a && a.height > 0 || s && a && function (e) {
                  let t = 0;
                  const n = 6;
                  for (let r = 0; r < n; r++) void 0 !== e[r] && t++;
                  return t === n
                }(a)) {
                null === n && (n = new vT(e));
                const a = o ? n.fromEquirectangular(i) : n.fromCubemap(i);
                return t.set(i, a), i.addEventListener("dispose", r), a.texture
              }
              return null
            }
          }
        }
        return i
      },
      dispose: function () {
        t = new WeakMap, null !== n && (n.dispose(), n = null)
      }
    }
  }

  function MT(e) {
    const t = {};

    function n(n) {
      if (void 0 !== t[n]) return t[n];
      let r;
      switch (n) {
        case "WEBGL_depth_texture":
          r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          r = e.getExtension(n)
      }
      return t[n] = r, r
    }
    return {
      has: function (e) {
        return null !== n(e)
      },
      init: function (e) {
        e.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture")
      },
      get: function (e) {
        const t = n(e);
        return null === t && console.warn("THREE.WebGLRenderer: " + e + " extension not supported."), t
      }
    }
  }

  function wT(e, t, n, r) {
    const i = {},
      a = new WeakMap;

    function o(e) {
      const s = e.target;
      null !== s.index && t.remove(s.index);
      for (const e in s.attributes) t.remove(s.attributes[e]);
      s.removeEventListener("dispose", o), delete i[s.id];
      const l = a.get(s);
      l && (t.remove(l), a.delete(s)), r.releaseStatesOfGeometry(s), !0 === s.isInstancedBufferGeometry && delete s._maxInstanceCount, n.memory.geometries--
    }

    function s(e) {
      const n = [],
        r = e.index,
        i = e.attributes.position;
      let o = 0;
      if (null !== r) {
        const e = r.array;
        o = r.version;
        for (let t = 0, r = e.length; t < r; t += 3) {
          const r = e[t + 0],
            i = e[t + 1],
            a = e[t + 2];
          n.push(r, i, i, a, a, r)
        }
      } else {
        const e = i.array;
        o = i.version;
        for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
          const e = t + 0,
            r = t + 1,
            i = t + 2;
          n.push(e, r, r, i, i, e)
        }
      }
      const s = new($x(n) ? $M : KM)(n, 1);
      s.version = o;
      const l = a.get(e);
      l && t.remove(l), a.set(e, s)
    }
    return {
      get: function (e, t) {
        return !0 === i[t.id] || (t.addEventListener("dispose", o), i[t.id] = !0, n.memory.geometries++), t
      },
      update: function (e) {
        const n = e.attributes;
        for (const e in n) t.update(n[e], 34962);
        const r = e.morphAttributes;
        for (const e in r) {
          const n = r[e];
          for (let e = 0, r = n.length; e < r; e++) t.update(n[e], 34962)
        }
      },
      getWireframeAttribute: function (e) {
        const t = a.get(e);
        if (t) {
          const n = e.index;
          null !== n && t.version < n.version && s(e)
        } else s(e);
        return a.get(e)
      }
    }
  }

  function TT(e, t, n, r) {
    const i = r.isWebGL2;
    let a, o, s;
    this.setMode = function (e) {
      a = e
    }, this.setIndex = function (e) {
      o = e.type, s = e.bytesPerElement
    }, this.render = function (t, r) {
      e.drawElements(a, r, o, t * s), n.update(r, a, 1)
    }, this.renderInstances = function (r, l, c) {
      if (0 === c) return;
      let u, h;
      if (i) u = e, h = "drawElementsInstanced";
      else if (u = t.get("ANGLE_instanced_arrays"), h = "drawElementsInstancedANGLE", null === u) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      u[h](a, l, o, r * s, c), n.update(l, a, c)
    }
  }

  function ET(e) {
    const t = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    return {
      memory: {
        geometries: 0,
        textures: 0
      },
      render: t,
      programs: null,
      autoReset: !0,
      reset: function () {
        t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
      },
      update: function (e, n, r) {
        switch (t.calls++, n) {
          case 4:
            t.triangles += r * (e / 3);
            break;
          case 1:
            t.lines += r * (e / 2);
            break;
          case 3:
            t.lines += r * (e - 1);
            break;
          case 2:
            t.lines += r * e;
            break;
          case 0:
            t.points += r * e;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n)
        }
      }
    }
  }

  function AT(e, t) {
    return e[0] - t[0]
  }

  function CT(e, t) {
    return Math.abs(t[1]) - Math.abs(e[1])
  }

  function LT(e, t, n) {
    const r = {},
      i = new Float32Array(8),
      a = new WeakMap,
      o = new gS,
      s = [];
    for (let e = 0; e < 8; e++) s[e] = [e, 0];
    return {
      update: function (l, c, u, h) {
        const d = l.morphTargetInfluences;
        if (!0 === t.isWebGL2) {
          const p = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color,
            f = void 0 !== p ? p.length : 0;
          let m = a.get(c);
          if (void 0 === m || m.count !== f) {
            void 0 !== m && m.texture.dispose();
            const _ = void 0 !== c.morphAttributes.position,
              y = void 0 !== c.morphAttributes.normal,
              b = void 0 !== c.morphAttributes.color,
              x = c.morphAttributes.position || [],
              S = c.morphAttributes.normal || [],
              M = c.morphAttributes.color || [];
            let w = 0;
            !0 === _ && (w = 1), !0 === y && (w = 2), !0 === b && (w = 3);
            let T = c.attributes.position.count * w,
              E = 1;
            T > t.maxTextureSize && (E = Math.ceil(T / t.maxTextureSize), T = t.maxTextureSize);
            const A = new Float32Array(T * E * 4 * f),
              C = new _S(A, T, E, f);
            C.type = Ef, C.needsUpdate = !0;
            const L = 4 * w;
            for (let P = 0; P < f; P++) {
              const D = x[P],
                N = S[P],
                O = M[P],
                I = T * E * 4 * P;
              for (let U = 0; U < D.count; U++) {
                const k = U * L;
                !0 === _ && (o.fromBufferAttribute(D, U), A[I + k + 0] = o.x, A[I + k + 1] = o.y, A[I + k + 2] = o.z, A[I + k + 3] = 0), !0 === y && (o.fromBufferAttribute(N, U), A[I + k + 4] = o.x, A[I + k + 5] = o.y, A[I + k + 6] = o.z, A[I + k + 7] = 0), !0 === b && (o.fromBufferAttribute(O, U), A[I + k + 8] = o.x, A[I + k + 9] = o.y, A[I + k + 10] = o.z, A[I + k + 11] = 4 === O.itemSize ? o.w : 1)
              }
            }

            function R() {
              C.dispose(), a.delete(c), c.removeEventListener("dispose", R)
            }
            m = {
              count: f,
              texture: C,
              size: new Yx(T, E)
            }, a.set(c, m), c.addEventListener("dispose", R)
          }
          let g = 0;
          for (let z = 0; z < d.length; z++) g += d[z];
          const v = c.morphTargetsRelative ? 1 : 1 - g;
          h.getUniforms().setValue(e, "morphTargetBaseInfluence", v), h.getUniforms().setValue(e, "morphTargetInfluences", d), h.getUniforms().setValue(e, "morphTargetsTexture", m.texture, n), h.getUniforms().setValue(e, "morphTargetsTextureSize", m.size)
        } else {
          const F = void 0 === d ? 0 : d.length;
          let B = r[c.id];
          if (void 0 === B || B.length !== F) {
            B = [];
            for (let j = 0; j < F; j++) B[j] = [j, 0];
            r[c.id] = B
          }
          for (let q = 0; q < F; q++) {
            const X = B[q];
            X[0] = q, X[1] = d[q]
          }
          B.sort(CT);
          for (let Y = 0; Y < 8; Y++) Y < F && B[Y][1] ? (s[Y][0] = B[Y][0], s[Y][1] = B[Y][1]) : (s[Y][0] = Number.MAX_SAFE_INTEGER, s[Y][1] = 0);
          s.sort(AT);
          const H = c.morphAttributes.position,
            G = c.morphAttributes.normal;
          let V = 0;
          for (let Z = 0; Z < 8; Z++) {
            const K = s[Z],
              $ = K[0],
              J = K[1];
            $ !== Number.MAX_SAFE_INTEGER && J ? (H && c.getAttribute("morphTarget" + Z) !== H[$] && c.setAttribute("morphTarget" + Z, H[$]), G && c.getAttribute("morphNormal" + Z) !== G[$] && c.setAttribute("morphNormal" + Z, G[$]), i[Z] = J, V += J) : (H && !0 === c.hasAttribute("morphTarget" + Z) && c.deleteAttribute("morphTarget" + Z), G && !0 === c.hasAttribute("morphNormal" + Z) && c.deleteAttribute("morphNormal" + Z), i[Z] = 0)
          }
          const W = c.morphTargetsRelative ? 1 : 1 - V;
          h.getUniforms().setValue(e, "morphTargetBaseInfluence", W), h.getUniforms().setValue(e, "morphTargetInfluences", i)
        }
      }
    }
  }

  function RT(e, t, n, r) {
    let i = new WeakMap;

    function a(e) {
      const t = e.target;
      t.removeEventListener("dispose", a), n.remove(t.instanceMatrix), null !== t.instanceColor && n.remove(t.instanceColor)
    }
    return {
      update: function (e) {
        const o = r.render.frame,
          s = e.geometry,
          l = t.get(e, s);
        return i.get(l) !== o && (t.update(l), i.set(l, o)), e.isInstancedMesh && (!1 === e.hasEventListener("dispose", a) && e.addEventListener("dispose", a), n.update(e.instanceMatrix, 34962), null !== e.instanceColor && n.update(e.instanceColor, 34962)), l
      },
      dispose: function () {
        i = new WeakMap
      }
    }
  }
  const PT = new mS,
    DT = new _S,
    NT = new yS,
    OT = new Dw,
    IT = [],
    UT = [],
    kT = new Float32Array(16),
    zT = new Float32Array(9),
    FT = new Float32Array(4);

  function BT(e, t, n) {
    const r = e[0];
    if (r <= 0 || r > 0) return e;
    const i = t * n;
    let a = IT[i];
    if (void 0 === a && (a = new Float32Array(i), IT[i] = a), 0 !== t) {
      r.toArray(a, 0);
      for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i)
    }
    return a
  }

  function HT(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0, r = e.length; n < r; n++)
      if (e[n] !== t[n]) return !1;
    return !0
  }

  function GT(e, t) {
    for (let n = 0, r = t.length; n < r; n++) e[n] = t[n]
  }

  function VT(e, t) {
    let n = UT[t];
    void 0 === n && (n = new Int32Array(t), UT[t] = n);
    for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
    return n
  }

  function WT(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t)
  }

  function jT(e, t) {
    const n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y || (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
    else {
      if (HT(n, t)) return;
      e.uniform2fv(this.addr, t), GT(n, t)
    }
  }

  function qT(e, t) {
    const n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
    else if (void 0 !== t.r) n[0] === t.r && n[1] === t.g && n[2] === t.b || (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
    else {
      if (HT(n, t)) return;
      e.uniform3fv(this.addr, t), GT(n, t)
    }
  }

  function XT(e, t) {
    const n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
    else {
      if (HT(n, t)) return;
      e.uniform4fv(this.addr, t), GT(n, t)
    }
  }

  function YT(e, t) {
    const n = this.cache,
      r = t.elements;
    if (void 0 === r) {
      if (HT(n, t)) return;
      e.uniformMatrix2fv(this.addr, !1, t), GT(n, t)
    } else {
      if (HT(n, r)) return;
      FT.set(r), e.uniformMatrix2fv(this.addr, !1, FT), GT(n, r)
    }
  }

  function ZT(e, t) {
    const n = this.cache,
      r = t.elements;
    if (void 0 === r) {
      if (HT(n, t)) return;
      e.uniformMatrix3fv(this.addr, !1, t), GT(n, t)
    } else {
      if (HT(n, r)) return;
      zT.set(r), e.uniformMatrix3fv(this.addr, !1, zT), GT(n, r)
    }
  }

  function KT(e, t) {
    const n = this.cache,
      r = t.elements;
    if (void 0 === r) {
      if (HT(n, t)) return;
      e.uniformMatrix4fv(this.addr, !1, t), GT(n, t)
    } else {
      if (HT(n, r)) return;
      kT.set(r), e.uniformMatrix4fv(this.addr, !1, kT), GT(n, r)
    }
  }

  function $T(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t)
  }

  function JT(e, t) {
    const n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y || (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
    else {
      if (HT(n, t)) return;
      e.uniform2iv(this.addr, t), GT(n, t)
    }
  }

  function QT(e, t) {
    const n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
    else {
      if (HT(n, t)) return;
      e.uniform3iv(this.addr, t), GT(n, t)
    }
  }

  function eE(e, t) {
    const n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
    else {
      if (HT(n, t)) return;
      e.uniform4iv(this.addr, t), GT(n, t)
    }
  }

  function tE(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t)
  }

  function nE(e, t) {
    const n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y || (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
    else {
      if (HT(n, t)) return;
      e.uniform2uiv(this.addr, t), GT(n, t)
    }
  }

  function rE(e, t) {
    const n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
    else {
      if (HT(n, t)) return;
      e.uniform3uiv(this.addr, t), GT(n, t)
    }
  }

  function iE(e, t) {
    const n = this.cache;
    if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
    else {
      if (HT(n, t)) return;
      e.uniform4uiv(this.addr, t), GT(n, t)
    }
  }

  function aE(e, t, n) {
    const r = this.cache,
      i = n.allocateTextureUnit();
    r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2D(t || PT, i)
  }

  function oE(e, t, n) {
    const r = this.cache,
      i = n.allocateTextureUnit();
    r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || NT, i)
  }

  function sE(e, t, n) {
    const r = this.cache,
      i = n.allocateTextureUnit();
    r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTextureCube(t || OT, i)
  }

  function lE(e, t, n) {
    const r = this.cache,
      i = n.allocateTextureUnit();
    r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || DT, i)
  }

  function cE(e, t) {
    e.uniform1fv(this.addr, t)
  }

  function uE(e, t) {
    const n = BT(t, this.size, 2);
    e.uniform2fv(this.addr, n)
  }

  function hE(e, t) {
    const n = BT(t, this.size, 3);
    e.uniform3fv(this.addr, n)
  }

  function dE(e, t) {
    const n = BT(t, this.size, 4);
    e.uniform4fv(this.addr, n)
  }

  function pE(e, t) {
    const n = BT(t, this.size, 4);
    e.uniformMatrix2fv(this.addr, !1, n)
  }

  function fE(e, t) {
    const n = BT(t, this.size, 9);
    e.uniformMatrix3fv(this.addr, !1, n)
  }

  function mE(e, t) {
    const n = BT(t, this.size, 16);
    e.uniformMatrix4fv(this.addr, !1, n)
  }

  function gE(e, t) {
    e.uniform1iv(this.addr, t)
  }

  function vE(e, t) {
    e.uniform2iv(this.addr, t)
  }

  function _E(e, t) {
    e.uniform3iv(this.addr, t)
  }

  function yE(e, t) {
    e.uniform4iv(this.addr, t)
  }

  function bE(e, t) {
    e.uniform1uiv(this.addr, t)
  }

  function xE(e, t) {
    e.uniform2uiv(this.addr, t)
  }

  function SE(e, t) {
    e.uniform3uiv(this.addr, t)
  }

  function ME(e, t) {
    e.uniform4uiv(this.addr, t)
  }

  function wE(e, t, n) {
    const r = this.cache,
      i = t.length,
      a = VT(n, i);
    HT(r, a) || (e.uniform1iv(this.addr, a), GT(r, a));
    for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || PT, a[e])
  }

  function TE(e, t, n) {
    const r = this.cache,
      i = t.length,
      a = VT(n, i);
    HT(r, a) || (e.uniform1iv(this.addr, a), GT(r, a));
    for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || NT, a[e])
  }

  function EE(e, t, n) {
    const r = this.cache,
      i = t.length,
      a = VT(n, i);
    HT(r, a) || (e.uniform1iv(this.addr, a), GT(r, a));
    for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || OT, a[e])
  }

  function AE(e, t, n) {
    const r = this.cache,
      i = t.length,
      a = VT(n, i);
    HT(r, a) || (e.uniform1iv(this.addr, a), GT(r, a));
    for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || DT, a[e])
  }
  class CE {
    constructor(e, t, n) {
      this.id = e, this.addr = n, this.cache = [], this.setValue = function (e) {
        switch (e) {
          case 5126:
            return WT;
          case 35664:
            return jT;
          case 35665:
            return qT;
          case 35666:
            return XT;
          case 35674:
            return YT;
          case 35675:
            return ZT;
          case 35676:
            return KT;
          case 5124:
          case 35670:
            return $T;
          case 35667:
          case 35671:
            return JT;
          case 35668:
          case 35672:
            return QT;
          case 35669:
          case 35673:
            return eE;
          case 5125:
            return tE;
          case 36294:
            return nE;
          case 36295:
            return rE;
          case 36296:
            return iE;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return aE;
          case 35679:
          case 36299:
          case 36307:
            return oE;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return sE;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return lE
        }
      }(t.type)
    }
  }
  class LE {
    constructor(e, t, n) {
      this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = function (e) {
        switch (e) {
          case 5126:
            return cE;
          case 35664:
            return uE;
          case 35665:
            return hE;
          case 35666:
            return dE;
          case 35674:
            return pE;
          case 35675:
            return fE;
          case 35676:
            return mE;
          case 5124:
          case 35670:
            return gE;
          case 35667:
          case 35671:
            return vE;
          case 35668:
          case 35672:
            return _E;
          case 35669:
          case 35673:
            return yE;
          case 5125:
            return bE;
          case 36294:
            return xE;
          case 36295:
            return SE;
          case 36296:
            return ME;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return wE;
          case 35679:
          case 36299:
          case 36307:
            return TE;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return EE;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return AE
        }
      }(t.type)
    }
  }
  class RE {
    constructor(e) {
      this.id = e, this.seq = [], this.map = {}
    }
    setValue(e, t, n) {
      const r = this.seq;
      for (let i = 0, a = r.length; i !== a; ++i) {
        const a = r[i];
        a.setValue(e, t[a.id], n)
      }
    }
  }
  const PE = /(\w+)(\])?(\[|\.)?/g;

  function DE(e, t) {
    e.seq.push(t), e.map[t.id] = t
  }

  function NE(e, t, n) {
    const r = e.name,
      i = r.length;
    for (PE.lastIndex = 0;;) {
      const a = PE.exec(r),
        o = PE.lastIndex;
      let s = a[1];
      const l = "]" === a[2],
        c = a[3];
      if (l && (s |= 0), void 0 === c || "[" === c && o + 2 === i) {
        DE(n, void 0 === c ? new CE(s, e, t) : new LE(s, e, t));
        break
      } {
        let e = n.map[s];
        void 0 === e && (e = new RE(s), DE(n, e)), n = e
      }
    }
  }
  class OE {
    constructor(e, t) {
      this.seq = [], this.map = {};
      const n = e.getProgramParameter(t, 35718);
      for (let r = 0; r < n; ++r) {
        const n = e.getActiveUniform(t, r);
        NE(n, e.getUniformLocation(t, n.name), this)
      }
    }
    setValue(e, t, n, r) {
      const i = this.map[t];
      void 0 !== i && i.setValue(e, n, r)
    }
    setOptional(e, t, n) {
      const r = t[n];
      void 0 !== r && this.setValue(e, n, r)
    }
    static upload(e, t, n, r) {
      for (let i = 0, a = t.length; i !== a; ++i) {
        const a = t[i],
          o = n[a.id];
        !1 !== o.needsUpdate && a.setValue(e, o.value, r)
      }
    }
    static seqWithValue(e, t) {
      const n = [];
      for (let r = 0, i = e.length; r !== i; ++r) {
        const i = e[r];
        i.id in t && n.push(i)
      }
      return n
    }
  }

  function IE(e, t, n) {
    const r = e.createShader(t);
    return e.shaderSource(r, n), e.compileShader(r), r
  }
  let UE = 0;

  function kE(e, t, n) {
    const r = e.getShaderParameter(t, 35713),
      i = e.getShaderInfoLog(t).trim();
    if (r && "" === i) return "";
    const a = /ERROR: 0:(\d+)/.exec(i);
    if (a) {
      const r = parseInt(a[1]);
      return n.toUpperCase() + "\n\n" + i + "\n\n" + function (e, t) {
        const n = e.split("\n"),
          r = [],
          i = Math.max(t - 6, 0),
          a = Math.min(t + 6, n.length);
        for (let e = i; e < a; e++) {
          const i = e + 1;
          r.push("".concat(i === t ? ">" : " ", " ").concat(i, ": ").concat(n[e]))
        }
        return r.join("\n")
      }(e.getShaderSource(t), r)
    }
    return i
  }

  function zE(e, t) {
    const n = function (e) {
      switch (e) {
        case _m:
          return ["Linear", "( value )"];
        case ym:
          return ["sRGB", "( value )"];
        default:
          return console.warn("THREE.WebGLProgram: Unsupported encoding:", e), ["Linear", "( value )"]
      }
    }(t);
    return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
  }

  function FE(e, t) {
    let n;
    switch (t) {
      case ef:
        n = "Linear";
        break;
      case tf:
        n = "Reinhard";
        break;
      case nf:
        n = "OptimizedCineon";
        break;
      case rf:
        n = "ACESFilmic";
        break;
      case af:
        n = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), n = "Linear"
    }
    return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
  }

  function BE(e) {
    return "" !== e
  }

  function HE(e, t) {
    const n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
    return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
  }

  function GE(e, t) {
    return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
  }
  const VE = /^[ \t]*#include +<([\w\d./]+)>/gm;

  function WE(e) {
    return e.replace(VE, jE)
  }

  function jE(e, t) {
    const n = $w[t];
    if (void 0 === n) throw new Error("Can not resolve #include <" + t + ">");
    return WE(n)
  }
  const qE = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

  function XE(e) {
    return e.replace(qE, YE)
  }

  function YE(e, t, n, r) {
    let i = "";
    for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
    return i
  }

  function ZE(e) {
    let t = "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
    return "highp" === e.precision ? t += "\n#define HIGH_PRECISION" : "mediump" === e.precision ? t += "\n#define MEDIUM_PRECISION" : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"), t
  }

  function KE(e, t, n, r) {
    const i = e.getContext(),
      a = n.defines;
    let o = n.vertexShader,
      s = n.fragmentShader;
    const l = function (e) {
        let t = "SHADOWMAP_TYPE_BASIC";
        return e.shadowMapType === fp ? t = "SHADOWMAP_TYPE_PCF" : e.shadowMapType === mp ? t = "SHADOWMAP_TYPE_PCF_SOFT" : e.shadowMapType === gp && (t = "SHADOWMAP_TYPE_VSM"), t
      }(n),
      c = function (e) {
        let t = "ENVMAP_TYPE_CUBE";
        if (e.envMap) switch (e.envMapMode) {
          case of:
          case sf:
            t = "ENVMAP_TYPE_CUBE";
            break;
          case uf:
            t = "ENVMAP_TYPE_CUBE_UV"
        }
        return t
      }(n),
      u = function (e) {
        let t = "ENVMAP_MODE_REFLECTION";
        e.envMap && e.envMapMode === sf && (t = "ENVMAP_MODE_REFRACTION");
        return t
      }(n),
      h = function (e) {
        let t = "ENVMAP_BLENDING_NONE";
        if (e.envMap) switch (e.combine) {
          case Kp:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case $p:
            t = "ENVMAP_BLENDING_MIX";
            break;
          case Jp:
            t = "ENVMAP_BLENDING_ADD"
        }
        return t
      }(n),
      d = function (e) {
        const t = e.envMapCubeUVHeight;
        if (null === t) return null;
        const n = Math.log2(t) - 2,
          r = 1 / t;
        return {
          texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
          texelHeight: r,
          maxMip: n
        }
      }(n),
      p = n.isWebGL2 ? "" : function (e) {
        return [e.extensionDerivatives || e.envMapCubeUVHeight || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || "physical" === e.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (e.extensionShaderTextureLOD || e.envMap || e.transmission) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(BE).join("\n")
      }(n),
      f = function (e) {
        const t = [];
        for (const n in e) {
          const r = e[n];
          !1 !== r && t.push("#define " + n + " " + r)
        }
        return t.join("\n")
      }(a),
      m = i.createProgram();
    let g, v, _ = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial ? (g = [f].filter(BE).join("\n"), g.length > 0 && (g += "\n"), v = [p, f].filter(BE).join("\n"), v.length > 0 && (v += "\n")) : (g = [ZE(n), "#define SHADER_NAME " + n.shaderName, f, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(BE).join("\n"), v = [p, ZE(n), "#define SHADER_NAME " + n.shaderName, f, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + c : "", n.envMap ? "#define " + u : "", n.envMap ? "#define " + h : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n.toneMapping !== Qp ? "#define TONE_MAPPING" : "", n.toneMapping !== Qp ? $w.tonemapping_pars_fragment : "", n.toneMapping !== Qp ? FE("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", $w.encodings_pars_fragment, zE("linearToOutputTexel", n.outputEncoding), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(BE).join("\n")), o = WE(o), o = HE(o, n), o = GE(o, n), s = WE(s), s = HE(s, n), s = GE(s, n), o = XE(o), s = XE(s), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (_ = "#version 300 es\n", g = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g, v = ["#define varying in", n.glslVersion === Em ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === Em ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v);
    const y = _ + v + s,
      b = IE(i, 35633, _ + g + o),
      x = IE(i, 35632, y);
    if (i.attachShader(m, b), i.attachShader(m, x), void 0 !== n.index0AttributeName ? i.bindAttribLocation(m, 0, n.index0AttributeName) : !0 === n.morphTargets && i.bindAttribLocation(m, 0, "position"), i.linkProgram(m), e.debug.checkShaderErrors) {
      const e = i.getProgramInfoLog(m).trim(),
        t = i.getShaderInfoLog(b).trim(),
        n = i.getShaderInfoLog(x).trim();
      let r = !0,
        a = !0;
      if (!1 === i.getProgramParameter(m, 35714)) {
        r = !1;
        const t = kE(i, b, "vertex"),
          n = kE(i, x, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(m, 35715) + "\n\nProgram Info Log: " + e + "\n" + t + "\n" + n)
      } else "" !== e ? console.warn("THREE.WebGLProgram: Program Info Log:", e) : "" !== t && "" !== n || (a = !1);
      a && (this.diagnostics = {
        runnable: r,
        programLog: e,
        vertexShader: {
          log: t,
          prefix: g
        },
        fragmentShader: {
          log: n,
          prefix: v
        }
      })
    }
    let S, M;
    return i.deleteShader(b), i.deleteShader(x), this.getUniforms = function () {
      return void 0 === S && (S = new OE(i, m)), S
    }, this.getAttributes = function () {
      return void 0 === M && (M = function (e, t) {
        const n = {},
          r = e.getProgramParameter(t, 35721);
        for (let i = 0; i < r; i++) {
          const r = e.getActiveAttrib(t, i),
            a = r.name;
          let o = 1;
          35674 === r.type && (o = 2), 35675 === r.type && (o = 3), 35676 === r.type && (o = 4), n[a] = {
            type: r.type,
            location: e.getAttribLocation(t, a),
            locationSize: o
          }
        }
        return n
      }(i, m)), M
    }, this.destroy = function () {
      r.releaseStatesOfProgram(this), i.deleteProgram(m), this.program = void 0
    }, this.name = n.shaderName, this.id = UE++, this.cacheKey = t, this.usedTimes = 1, this.program = m, this.vertexShader = b, this.fragmentShader = x, this
  }
  let $E = 0;
  class JE {
    constructor() {
      this.shaderCache = new Map, this.materialCache = new Map
    }
    update(e) {
      const t = e.vertexShader,
        n = e.fragmentShader,
        r = this._getShaderStage(t),
        i = this._getShaderStage(n),
        a = this._getShaderCacheForMaterial(e);
      return !1 === a.has(r) && (a.add(r), r.usedTimes++), !1 === a.has(i) && (a.add(i), i.usedTimes++), this
    }
    remove(e) {
      const t = this.materialCache.get(e);
      for (const e of t) e.usedTimes--, 0 === e.usedTimes && this.shaderCache.delete(e.code);
      return this.materialCache.delete(e), this
    }
    getVertexShaderID(e) {
      return this._getShaderStage(e.vertexShader).id
    }
    getFragmentShaderID(e) {
      return this._getShaderStage(e.fragmentShader).id
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear()
    }
    _getShaderCacheForMaterial(e) {
      const t = this.materialCache;
      let n = t.get(e);
      return void 0 === n && (n = new Set, t.set(e, n)), n
    }
    _getShaderStage(e) {
      const t = this.shaderCache;
      let n = t.get(e);
      return void 0 === n && (n = new QE(e), t.set(e, n)), n
    }
  }
  class QE {
    constructor(e) {
      this.id = $E++, this.code = e, this.usedTimes = 0
    }
  }

  function eA(e, t, n, r, i, a, o) {
    const s = new _M,
      l = new JE,
      c = [],
      u = i.isWebGL2,
      h = i.logarithmicDepthBuffer,
      d = i.vertexTextures;
    let p = i.precision;
    const f = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite"
    };
    return {
      getParameters: function (a, s, c, m, g) {
        const v = m.fog,
          _ = g.geometry,
          y = a.isMeshStandardMaterial ? m.environment : null,
          b = (a.isMeshStandardMaterial ? n : t).get(a.envMap || y),
          x = b && b.mapping === uf ? b.image.height : null,
          S = f[a.type];
        null !== a.precision && (p = i.getMaxPrecision(a.precision), p !== a.precision && console.warn("THREE.WebGLProgram.getParameters:", a.precision, "not supported, using", p, "instead."));
        const M = _.morphAttributes.position || _.morphAttributes.normal || _.morphAttributes.color,
          w = void 0 !== M ? M.length : 0;
        let T, E, A, C, L = 0;
        if (void 0 !== _.morphAttributes.position && (L = 1), void 0 !== _.morphAttributes.normal && (L = 2), void 0 !== _.morphAttributes.color && (L = 3), S) {
          const e = Qw[S];
          T = e.vertexShader, E = e.fragmentShader
        } else T = a.vertexShader, E = a.fragmentShader, l.update(a), A = l.getVertexShaderID(a), C = l.getFragmentShaderID(a);
        const R = e.getRenderTarget(),
          P = a.alphaTest > 0,
          D = a.clearcoat > 0,
          N = a.iridescence > 0;
        return {
          isWebGL2: u,
          shaderID: S,
          shaderName: a.type,
          vertexShader: T,
          fragmentShader: E,
          defines: a.defines,
          customVertexShaderID: A,
          customFragmentShaderID: C,
          isRawShaderMaterial: !0 === a.isRawShaderMaterial,
          glslVersion: a.glslVersion,
          precision: p,
          instancing: !0 === g.isInstancedMesh,
          instancingColor: !0 === g.isInstancedMesh && null !== g.instanceColor,
          supportsVertexTextures: d,
          outputEncoding: null === R ? e.outputEncoding : !0 === R.isXRRenderTarget ? R.texture.encoding : _m,
          map: !!a.map,
          matcap: !!a.matcap,
          envMap: !!b,
          envMapMode: b && b.mapping,
          envMapCubeUVHeight: x,
          lightMap: !!a.lightMap,
          aoMap: !!a.aoMap,
          emissiveMap: !!a.emissiveMap,
          bumpMap: !!a.bumpMap,
          normalMap: !!a.normalMap,
          objectSpaceNormalMap: a.normalMapType === Sm,
          tangentSpaceNormalMap: a.normalMapType === xm,
          decodeVideoTexture: !!a.map && !0 === a.map.isVideoTexture && a.map.encoding === ym,
          clearcoat: D,
          clearcoatMap: D && !!a.clearcoatMap,
          clearcoatRoughnessMap: D && !!a.clearcoatRoughnessMap,
          clearcoatNormalMap: D && !!a.clearcoatNormalMap,
          iridescence: N,
          iridescenceMap: N && !!a.iridescenceMap,
          iridescenceThicknessMap: N && !!a.iridescenceThicknessMap,
          displacementMap: !!a.displacementMap,
          roughnessMap: !!a.roughnessMap,
          metalnessMap: !!a.metalnessMap,
          specularMap: !!a.specularMap,
          specularIntensityMap: !!a.specularIntensityMap,
          specularColorMap: !!a.specularColorMap,
          opaque: !1 === a.transparent && a.blending === xp,
          alphaMap: !!a.alphaMap,
          alphaTest: P,
          gradientMap: !!a.gradientMap,
          sheen: a.sheen > 0,
          sheenColorMap: !!a.sheenColorMap,
          sheenRoughnessMap: !!a.sheenRoughnessMap,
          transmission: a.transmission > 0,
          transmissionMap: !!a.transmissionMap,
          thicknessMap: !!a.thicknessMap,
          combine: a.combine,
          vertexTangents: !!a.normalMap && !!_.attributes.tangent,
          vertexColors: a.vertexColors,
          vertexAlphas: !0 === a.vertexColors && !!_.attributes.color && 4 === _.attributes.color.itemSize,
          vertexUvs: !!(a.map || a.bumpMap || a.normalMap || a.specularMap || a.alphaMap || a.emissiveMap || a.roughnessMap || a.metalnessMap || a.clearcoatMap || a.clearcoatRoughnessMap || a.clearcoatNormalMap || a.iridescenceMap || a.iridescenceThicknessMap || a.displacementMap || a.transmissionMap || a.thicknessMap || a.specularIntensityMap || a.specularColorMap || a.sheenColorMap || a.sheenRoughnessMap),
          uvsVertexOnly: !(a.map || a.bumpMap || a.normalMap || a.specularMap || a.alphaMap || a.emissiveMap || a.roughnessMap || a.metalnessMap || a.clearcoatNormalMap || a.iridescenceMap || a.iridescenceThicknessMap || a.transmission > 0 || a.transmissionMap || a.thicknessMap || a.specularIntensityMap || a.specularColorMap || a.sheen > 0 || a.sheenColorMap || a.sheenRoughnessMap || !a.displacementMap),
          fog: !!v,
          useFog: !0 === a.fog,
          fogExp2: v && v.isFogExp2,
          flatShading: !!a.flatShading,
          sizeAttenuation: a.sizeAttenuation,
          logarithmicDepthBuffer: h,
          skinning: !0 === g.isSkinnedMesh,
          morphTargets: void 0 !== _.morphAttributes.position,
          morphNormals: void 0 !== _.morphAttributes.normal,
          morphColors: void 0 !== _.morphAttributes.color,
          morphTargetsCount: w,
          morphTextureStride: L,
          numDirLights: s.directional.length,
          numPointLights: s.point.length,
          numSpotLights: s.spot.length,
          numSpotLightMaps: s.spotLightMap.length,
          numRectAreaLights: s.rectArea.length,
          numHemiLights: s.hemi.length,
          numDirLightShadows: s.directionalShadowMap.length,
          numPointLightShadows: s.pointShadowMap.length,
          numSpotLightShadows: s.spotShadowMap.length,
          numSpotLightShadowsWithMaps: s.numSpotLightShadowsWithMaps,
          numClippingPlanes: o.numPlanes,
          numClipIntersection: o.numIntersection,
          dithering: a.dithering,
          shadowMapEnabled: e.shadowMap.enabled && c.length > 0,
          shadowMapType: e.shadowMap.type,
          toneMapping: a.toneMapped ? e.toneMapping : Qp,
          physicallyCorrectLights: e.physicallyCorrectLights,
          premultipliedAlpha: a.premultipliedAlpha,
          doubleSided: a.side === yp,
          flipSided: a.side === _p,
          useDepthPacking: !!a.depthPacking,
          depthPacking: a.depthPacking || 0,
          index0AttributeName: a.index0AttributeName,
          extensionDerivatives: a.extensions && a.extensions.derivatives,
          extensionFragDepth: a.extensions && a.extensions.fragDepth,
          extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
          extensionShaderTextureLOD: a.extensions && a.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: u || r.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: u || r.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod: u || r.has("EXT_shader_texture_lod"),
          customProgramCacheKey: a.customProgramCacheKey()
        }
      },
      getProgramCacheKey: function (t) {
        const n = [];
        if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), void 0 !== t.defines)
          for (const e in t.defines) n.push(e), n.push(t.defines[e]);
        return !1 === t.isRawShaderMaterial && (! function (e, t) {
          e.push(t.precision), e.push(t.outputEncoding), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.combine), e.push(t.vertexUvs), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking)
        }(n, t), function (e, t) {
          s.disableAll(), t.isWebGL2 && s.enable(0);
          t.supportsVertexTextures && s.enable(1);
          t.instancing && s.enable(2);
          t.instancingColor && s.enable(3);
          t.map && s.enable(4);
          t.matcap && s.enable(5);
          t.envMap && s.enable(6);
          t.lightMap && s.enable(7);
          t.aoMap && s.enable(8);
          t.emissiveMap && s.enable(9);
          t.bumpMap && s.enable(10);
          t.normalMap && s.enable(11);
          t.objectSpaceNormalMap && s.enable(12);
          t.tangentSpaceNormalMap && s.enable(13);
          t.clearcoat && s.enable(14);
          t.clearcoatMap && s.enable(15);
          t.clearcoatRoughnessMap && s.enable(16);
          t.clearcoatNormalMap && s.enable(17);
          t.iridescence && s.enable(18);
          t.iridescenceMap && s.enable(19);
          t.iridescenceThicknessMap && s.enable(20);
          t.displacementMap && s.enable(21);
          t.specularMap && s.enable(22);
          t.roughnessMap && s.enable(23);
          t.metalnessMap && s.enable(24);
          t.gradientMap && s.enable(25);
          t.alphaMap && s.enable(26);
          t.alphaTest && s.enable(27);
          t.vertexColors && s.enable(28);
          t.vertexAlphas && s.enable(29);
          t.vertexUvs && s.enable(30);
          t.vertexTangents && s.enable(31);
          t.uvsVertexOnly && s.enable(32);
          e.push(s.mask), s.disableAll(), t.fog && s.enable(0);
          t.useFog && s.enable(1);
          t.flatShading && s.enable(2);
          t.logarithmicDepthBuffer && s.enable(3);
          t.skinning && s.enable(4);
          t.morphTargets && s.enable(5);
          t.morphNormals && s.enable(6);
          t.morphColors && s.enable(7);
          t.premultipliedAlpha && s.enable(8);
          t.shadowMapEnabled && s.enable(9);
          t.physicallyCorrectLights && s.enable(10);
          t.doubleSided && s.enable(11);
          t.flipSided && s.enable(12);
          t.useDepthPacking && s.enable(13);
          t.dithering && s.enable(14);
          t.specularIntensityMap && s.enable(15);
          t.specularColorMap && s.enable(16);
          t.transmission && s.enable(17);
          t.transmissionMap && s.enable(18);
          t.thicknessMap && s.enable(19);
          t.sheen && s.enable(20);
          t.sheenColorMap && s.enable(21);
          t.sheenRoughnessMap && s.enable(22);
          t.decodeVideoTexture && s.enable(23);
          t.opaque && s.enable(24);
          e.push(s.mask)
        }(n, t), n.push(e.outputEncoding)), n.push(t.customProgramCacheKey), n.join()
      },
      getUniforms: function (e) {
        const t = f[e.type];
        let n;
        if (t) {
          const e = Qw[t];
          n = Ew.clone(e.uniforms)
        } else n = e.uniforms;
        return n
      },
      acquireProgram: function (t, n) {
        let r;
        for (let e = 0, t = c.length; e < t; e++) {
          const t = c[e];
          if (t.cacheKey === n) {
            r = t, ++r.usedTimes;
            break
          }
        }
        return void 0 === r && (r = new KE(e, n, t, a), c.push(r)), r
      },
      releaseProgram: function (e) {
        if (0 == --e.usedTimes) {
          const t = c.indexOf(e);
          c[t] = c[c.length - 1], c.pop(), e.destroy()
        }
      },
      releaseShaderCache: function (e) {
        l.remove(e)
      },
      programs: c,
      dispose: function () {
        l.dispose()
      }
    }
  }

  function tA() {
    let e = new WeakMap;
    return {
      get: function (t) {
        let n = e.get(t);
        return void 0 === n && (n = {}, e.set(t, n)), n
      },
      remove: function (t) {
        e.delete(t)
      },
      update: function (t, n, r) {
        e.get(t)[n] = r
      },
      dispose: function () {
        e = new WeakMap
      }
    }
  }

  function nA(e, t) {
    return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
  }

  function rA(e, t) {
    return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
  }

  function iA() {
    const e = [];
    let t = 0;
    const n = [],
      r = [],
      i = [];

    function a(n, r, i, a, o, s) {
      let l = e[t];
      return void 0 === l ? (l = {
        id: n.id,
        object: n,
        geometry: r,
        material: i,
        groupOrder: a,
        renderOrder: n.renderOrder,
        z: o,
        group: s
      }, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = r, l.material = i, l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = o, l.group = s), t++, l
    }
    return {
      opaque: n,
      transmissive: r,
      transparent: i,
      init: function () {
        t = 0, n.length = 0, r.length = 0, i.length = 0
      },
      push: function (e, t, o, s, l, c) {
        const u = a(e, t, o, s, l, c);
        o.transmission > 0 ? r.push(u) : !0 === o.transparent ? i.push(u) : n.push(u)
      },
      unshift: function (e, t, o, s, l, c) {
        const u = a(e, t, o, s, l, c);
        o.transmission > 0 ? r.unshift(u) : !0 === o.transparent ? i.unshift(u) : n.unshift(u)
      },
      finish: function () {
        for (let n = t, r = e.length; n < r; n++) {
          const t = e[n];
          if (null === t.id) break;
          t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null
        }
      },
      sort: function (e, t) {
        n.length > 1 && n.sort(e || nA), r.length > 1 && r.sort(t || rA), i.length > 1 && i.sort(t || rA)
      }
    }
  }

  function aA() {
    let e = new WeakMap;
    return {
      get: function (t, n) {
        const r = e.get(t);
        let i;
        return void 0 === r ? (i = new iA, e.set(t, [i])) : n >= r.length ? (i = new iA, r.push(i)) : i = r[n], i
      },
      dispose: function () {
        e = new WeakMap
      }
    }
  }

  function oA() {
    const e = {};
    return {
      get: function (t) {
        if (void 0 !== e[t.id]) return e[t.id];
        let n;
        switch (t.type) {
          case "DirectionalLight":
            n = {
              direction: new xS,
              color: new cS
            };
            break;
          case "SpotLight":
            n = {
              position: new xS,
              direction: new xS,
              color: new cS,
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0
            };
            break;
          case "PointLight":
            n = {
              position: new xS,
              color: new cS,
              distance: 0,
              decay: 0
            };
            break;
          case "HemisphereLight":
            n = {
              direction: new xS,
              skyColor: new cS,
              groundColor: new cS
            };
            break;
          case "RectAreaLight":
            n = {
              color: new cS,
              position: new xS,
              halfWidth: new xS,
              halfHeight: new xS
            }
        }
        return e[t.id] = n, n
      }
    }
  }
  let sA = 0;

  function lA(e, t) {
    return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (e.map ? 1 : 0)
  }

  function cA(e, t) {
    const n = new oA,
      r = function () {
        const e = {};
        return {
          get: function (t) {
            if (void 0 !== e[t.id]) return e[t.id];
            let n;
            switch (t.type) {
              case "DirectionalLight":
              case "SpotLight":
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Yx
                };
                break;
              case "PointLight":
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Yx,
                  shadowCameraNear: 1,
                  shadowCameraFar: 1e3
                }
            }
            return e[t.id] = n, n
          }
        }
      }(),
      i = {
        version: 0,
        hash: {
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1,
          numSpotMaps: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0
      };
    for (let e = 0; e < 9; e++) i.probe.push(new xS);
    const a = new xS,
      o = new sM,
      s = new sM;
    return {
      setup: function (a, o) {
        let s = 0,
          l = 0,
          c = 0;
        for (let e = 0; e < 9; e++) i.probe[e].set(0, 0, 0);
        let u = 0,
          h = 0,
          d = 0,
          p = 0,
          f = 0,
          m = 0,
          g = 0,
          v = 0,
          _ = 0,
          y = 0;
        a.sort(lA);
        const b = !0 !== o ? Math.PI : 1;
        for (let e = 0, t = a.length; e < t; e++) {
          const t = a[e],
            o = t.color,
            x = t.intensity,
            S = t.distance,
            M = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
          if (t.isAmbientLight) s += o.r * x * b, l += o.g * x * b, c += o.b * x * b;
          else if (t.isLightProbe)
            for (let e = 0; e < 9; e++) i.probe[e].addScaledVector(t.sh.coefficients[e], x);
          else if (t.isDirectionalLight) {
            const e = n.get(t);
            if (e.color.copy(t.color).multiplyScalar(t.intensity * b), t.castShadow) {
              const e = t.shadow,
                n = r.get(t);
              n.shadowBias = e.bias, n.shadowNormalBias = e.normalBias, n.shadowRadius = e.radius, n.shadowMapSize = e.mapSize, i.directionalShadow[u] = n, i.directionalShadowMap[u] = M, i.directionalShadowMatrix[u] = t.shadow.matrix, m++
            }
            i.directional[u] = e, u++
          } else if (t.isSpotLight) {
            const e = n.get(t);
            e.position.setFromMatrixPosition(t.matrixWorld), e.color.copy(o).multiplyScalar(x * b), e.distance = S, e.coneCos = Math.cos(t.angle), e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra)), e.decay = t.decay, i.spot[d] = e;
            const a = t.shadow;
            if (t.map && (i.spotLightMap[_] = t.map, _++, a.updateMatrices(t), t.castShadow && y++), i.spotLightMatrix[d] = a.matrix, t.castShadow) {
              const e = r.get(t);
              e.shadowBias = a.bias, e.shadowNormalBias = a.normalBias, e.shadowRadius = a.radius, e.shadowMapSize = a.mapSize, i.spotShadow[d] = e, i.spotShadowMap[d] = M, v++
            }
            d++
          } else if (t.isRectAreaLight) {
            const e = n.get(t);
            e.color.copy(o).multiplyScalar(x), e.halfWidth.set(.5 * t.width, 0, 0), e.halfHeight.set(0, .5 * t.height, 0), i.rectArea[p] = e, p++
          } else if (t.isPointLight) {
            const e = n.get(t);
            if (e.color.copy(t.color).multiplyScalar(t.intensity * b), e.distance = t.distance, e.decay = t.decay, t.castShadow) {
              const e = t.shadow,
                n = r.get(t);
              n.shadowBias = e.bias, n.shadowNormalBias = e.normalBias, n.shadowRadius = e.radius, n.shadowMapSize = e.mapSize, n.shadowCameraNear = e.camera.near, n.shadowCameraFar = e.camera.far, i.pointShadow[h] = n, i.pointShadowMap[h] = M, i.pointShadowMatrix[h] = t.shadow.matrix, g++
            }
            i.point[h] = e, h++
          } else if (t.isHemisphereLight) {
            const e = n.get(t);
            e.skyColor.copy(t.color).multiplyScalar(x * b), e.groundColor.copy(t.groundColor).multiplyScalar(x * b), i.hemi[f] = e, f++
          }
        }
        p > 0 && (t.isWebGL2 || !0 === e.has("OES_texture_float_linear") ? (i.rectAreaLTC1 = Jw.LTC_FLOAT_1, i.rectAreaLTC2 = Jw.LTC_FLOAT_2) : !0 === e.has("OES_texture_half_float_linear") ? (i.rectAreaLTC1 = Jw.LTC_HALF_1, i.rectAreaLTC2 = Jw.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = s, i.ambient[1] = l, i.ambient[2] = c;
        const x = i.hash;
        x.directionalLength === u && x.pointLength === h && x.spotLength === d && x.rectAreaLength === p && x.hemiLength === f && x.numDirectionalShadows === m && x.numPointShadows === g && x.numSpotShadows === v && x.numSpotMaps === _ || (i.directional.length = u, i.spot.length = d, i.rectArea.length = p, i.point.length = h, i.hemi.length = f, i.directionalShadow.length = m, i.directionalShadowMap.length = m, i.pointShadow.length = g, i.pointShadowMap.length = g, i.spotShadow.length = v, i.spotShadowMap.length = v, i.directionalShadowMatrix.length = m, i.pointShadowMatrix.length = g, i.spotLightMatrix.length = v + _ - y, i.spotLightMap.length = _, i.numSpotLightShadowsWithMaps = y, x.directionalLength = u, x.pointLength = h, x.spotLength = d, x.rectAreaLength = p, x.hemiLength = f, x.numDirectionalShadows = m, x.numPointShadows = g, x.numSpotShadows = v, x.numSpotMaps = _, i.version = sA++)
      },
      setupView: function (e, t) {
        let n = 0,
          r = 0,
          l = 0,
          c = 0,
          u = 0;
        const h = t.matrixWorldInverse;
        for (let t = 0, d = e.length; t < d; t++) {
          const d = e[t];
          if (d.isDirectionalLight) {
            const e = i.directional[n];
            e.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(h), n++
          } else if (d.isSpotLight) {
            const e = i.spot[l];
            e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(h), e.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(h), l++
          } else if (d.isRectAreaLight) {
            const e = i.rectArea[c];
            e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(h), s.identity(), o.copy(d.matrixWorld), o.premultiply(h), s.extractRotation(o), e.halfWidth.set(.5 * d.width, 0, 0), e.halfHeight.set(0, .5 * d.height, 0), e.halfWidth.applyMatrix4(s), e.halfHeight.applyMatrix4(s), c++
          } else if (d.isPointLight) {
            const e = i.point[r];
            e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(h), r++
          } else if (d.isHemisphereLight) {
            const e = i.hemi[u];
            e.direction.setFromMatrixPosition(d.matrixWorld), e.direction.transformDirection(h), u++
          }
        }
      },
      state: i
    }
  }

  function uA(e, t) {
    const n = new cA(e, t),
      r = [],
      i = [];
    return {
      init: function () {
        r.length = 0, i.length = 0
      },
      state: {
        lightsArray: r,
        shadowsArray: i,
        lights: n
      },
      setupLights: function (e) {
        n.setup(r, e)
      },
      setupLightsView: function (e) {
        n.setupView(r, e)
      },
      pushLight: function (e) {
        r.push(e)
      },
      pushShadow: function (e) {
        i.push(e)
      }
    }
  }

  function hA(e, t) {
    let n = new WeakMap;
    return {
      get: function (r) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const a = n.get(r);
        let o;
        return void 0 === a ? (o = new uA(e, t), n.set(r, [o])) : i >= a.length ? (o = new uA(e, t), a.push(o)) : o = a[i], o
      },
      dispose: function () {
        n = new WeakMap
      }
    }
  }
  class dA extends jM {
    constructor(e) {
      super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
    }
    copy(e) {
      return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
    }
  }
  class pA extends jM {
    constructor(e) {
      super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new xS, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e)
    }
    copy(e) {
      return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
    }
  }
  const fA = "void main(){gl_Position=vec4(position,1.0);}",
    mA = "uniform sampler2D shadow_pass;uniform vec2 resolution;uniform float radius;\n#include <packing>\nvoid main(){const float samples=float(VSM_SAMPLES);float mean=0.0;float squared_mean=0.0;float uvStride=samples<=1.0?0.0:2.0/(samples-1.0);float uvStart=samples<=1.0?0.0:-1.0;for(float i=0.0;i<samples;i++){float uvOffset=uvStart+i*uvStride;\n#ifdef HORIZONTAL_PASS\nvec2 distribution=unpackRGBATo2Half(texture2D(shadow_pass,(gl_FragCoord.xy+vec2(uvOffset,0.0)*radius)/resolution));mean+=distribution.x;squared_mean+=distribution.y*distribution.y+distribution.x*distribution.x;\n#else\nfloat depth=unpackRGBAToDepth(texture2D(shadow_pass,(gl_FragCoord.xy+vec2(0.0,uvOffset)*radius)/resolution));mean+=depth;squared_mean+=depth*depth;\n#endif\n}mean=mean/samples;squared_mean=squared_mean/samples;float std_dev=sqrt(squared_mean-mean*mean);gl_FragColor=pack2HalfToRGBA(vec2(mean,std_dev));}";

  function gA(e, t, n) {
    let r = new Bw;
    const i = new Yx,
      a = new Yx,
      o = new gS,
      s = new dA({
        depthPacking: bm
      }),
      l = new pA,
      c = {},
      u = n.maxTextureSize,
      h = {
        [vp]: _p,
        [_p]: vp,
        [yp]: yp
      },
      d = new Aw({
        defines: {
          VSM_SAMPLES: 8
        },
        uniforms: {
          shadow_pass: {
            value: null
          },
          resolution: {
            value: new Yx
          },
          radius: {
            value: 4
          }
        },
        vertexShader: fA,
        fragmentShader: mA
      }),
      p = d.clone();
    p.defines.HORIZONTAL_PASS = 1;
    const f = new ow;
    f.setAttribute("position", new ZM(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    const m = new bw(f, d),
      g = this;

    function v(n, r) {
      const a = t.update(m);
      d.defines.VSM_SAMPLES !== n.blurSamples && (d.defines.VSM_SAMPLES = n.blurSamples, p.defines.VSM_SAMPLES = n.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), null === n.mapPass && (n.mapPass = new vS(i.x, i.y)), d.uniforms.shadow_pass.value = n.map.texture, d.uniforms.resolution.value = n.mapSize, d.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, a, d, m, null), p.uniforms.shadow_pass.value = n.mapPass.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, a, p, m, null)
    }

    function _(t, n, r, i, a, o) {
      let u = null;
      const d = !0 === r.isPointLight ? t.customDistanceMaterial : t.customDepthMaterial;
      if (void 0 !== d) u = d;
      else if (u = !0 === r.isPointLight ? l : s, e.localClippingEnabled && !0 === n.clipShadows && Array.isArray(n.clippingPlanes) && 0 !== n.clippingPlanes.length || n.displacementMap && 0 !== n.displacementScale || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0) {
        const e = u.uuid,
          t = n.uuid;
        let r = c[e];
        void 0 === r && (r = {}, c[e] = r);
        let i = r[t];
        void 0 === i && (i = u.clone(), r[t] = i), u = i
      }
      return u.visible = n.visible, u.wireframe = n.wireframe, u.side = o === gp ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : h[n.side], u.alphaMap = n.alphaMap, u.alphaTest = n.alphaTest, u.map = n.map, u.clipShadows = n.clipShadows, u.clippingPlanes = n.clippingPlanes, u.clipIntersection = n.clipIntersection, u.displacementMap = n.displacementMap, u.displacementScale = n.displacementScale, u.displacementBias = n.displacementBias, u.wireframeLinewidth = n.wireframeLinewidth, u.linewidth = n.linewidth, !0 === r.isPointLight && !0 === u.isMeshDistanceMaterial && (u.referencePosition.setFromMatrixPosition(r.matrixWorld), u.nearDistance = i, u.farDistance = a), u
    }

    function y(n, i, a, o, s) {
      if (!1 === n.visible) return;
      if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && s === gp) && (!n.frustumCulled || r.intersectsObject(n))) {
        n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
        const r = t.update(n),
          i = n.material;
        if (Array.isArray(i)) {
          const t = r.groups;
          for (let l = 0, c = t.length; l < c; l++) {
            const c = t[l],
              u = i[c.materialIndex];
            if (u && u.visible) {
              const t = _(n, u, o, a.near, a.far, s);
              e.renderBufferDirect(a, null, r, t, n, c)
            }
          }
        } else if (i.visible) {
          const t = _(n, i, o, a.near, a.far, s);
          e.renderBufferDirect(a, null, r, t, n, null)
        }
      }
      const l = n.children;
      for (let e = 0, t = l.length; e < t; e++) y(l[e], i, a, o, s)
    }
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = fp, this.render = function (t, n, s) {
      if (!1 === g.enabled) return;
      if (!1 === g.autoUpdate && !1 === g.needsUpdate) return;
      if (0 === t.length) return;
      const l = e.getRenderTarget(),
        c = e.getActiveCubeFace(),
        h = e.getActiveMipmapLevel(),
        d = e.state;
      d.setBlending(bp), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
      for (let l = 0, c = t.length; l < c; l++) {
        const c = t[l],
          h = c.shadow;
        if (void 0 === h) {
          console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
          continue
        }
        if (!1 === h.autoUpdate && !1 === h.needsUpdate) continue;
        i.copy(h.mapSize);
        const p = h.getFrameExtents();
        if (i.multiply(p), a.copy(h.mapSize), (i.x > u || i.y > u) && (i.x > u && (a.x = Math.floor(u / p.x), i.x = a.x * p.x, h.mapSize.x = a.x), i.y > u && (a.y = Math.floor(u / p.y), i.y = a.y * p.y, h.mapSize.y = a.y)), null === h.map) {
          const e = this.type !== gp ? {
            minFilter: ff,
            magFilter: ff
          } : {};
          h.map = new vS(i.x, i.y, e), h.map.texture.name = c.name + ".shadowMap", h.camera.updateProjectionMatrix()
        }
        e.setRenderTarget(h.map), e.clear();
        const f = h.getViewportCount();
        for (let e = 0; e < f; e++) {
          const t = h.getViewport(e);
          o.set(a.x * t.x, a.y * t.y, a.x * t.z, a.y * t.w), d.viewport(o), h.updateMatrices(c, e), r = h.getFrustum(), y(n, s, h.camera, c, this.type)
        }!0 !== h.isPointLightShadow && this.type === gp && v(h, s), h.needsUpdate = !1
      }
      g.needsUpdate = !1, e.setRenderTarget(l, c, h)
    }
  }

  function vA(e, t, n) {
    const r = n.isWebGL2;
    const i = new function () {
        let t = !1;
        const n = new gS;
        let r = null;
        const i = new gS(0, 0, 0, 0);
        return {
          setMask: function (n) {
            r === n || t || (e.colorMask(n, n, n, n), r = n)
          },
          setLocked: function (e) {
            t = e
          },
          setClear: function (t, r, a, o, s) {
            !0 === s && (t *= o, r *= o, a *= o), n.set(t, r, a, o), !1 === i.equals(n) && (e.clearColor(t, r, a, o), i.copy(n))
          },
          reset: function () {
            t = !1, r = null, i.set(-1, 0, 0, 0)
          }
        }
      },
      a = new function () {
        let t = !1,
          n = null,
          r = null,
          i = null;
        return {
          setTest: function (e) {
            e ? B(2929) : H(2929)
          },
          setMask: function (r) {
            n === r || t || (e.depthMask(r), n = r)
          },
          setFunc: function (t) {
            if (r !== t) {
              switch (t) {
                case Gp:
                  e.depthFunc(512);
                  break;
                case Vp:
                  e.depthFunc(519);
                  break;
                case Wp:
                  e.depthFunc(513);
                  break;
                case jp:
                  e.depthFunc(515);
                  break;
                case qp:
                  e.depthFunc(514);
                  break;
                case Xp:
                  e.depthFunc(518);
                  break;
                case Yp:
                  e.depthFunc(516);
                  break;
                case Zp:
                  e.depthFunc(517);
                  break;
                default:
                  e.depthFunc(515)
              }
              r = t
            }
          },
          setLocked: function (e) {
            t = e
          },
          setClear: function (t) {
            i !== t && (e.clearDepth(t), i = t)
          },
          reset: function () {
            t = !1, n = null, r = null, i = null
          }
        }
      },
      o = new function () {
        let t = !1,
          n = null,
          r = null,
          i = null,
          a = null,
          o = null,
          s = null,
          l = null,
          c = null;
        return {
          setTest: function (e) {
            t || (e ? B(2960) : H(2960))
          },
          setMask: function (r) {
            n === r || t || (e.stencilMask(r), n = r)
          },
          setFunc: function (t, n, o) {
            r === t && i === n && a === o || (e.stencilFunc(t, n, o), r = t, i = n, a = o)
          },
          setOp: function (t, n, r) {
            o === t && s === n && l === r || (e.stencilOp(t, n, r), o = t, s = n, l = r)
          },
          setLocked: function (e) {
            t = e
          },
          setClear: function (t) {
            c !== t && (e.clearStencil(t), c = t)
          },
          reset: function () {
            t = !1, n = null, r = null, i = null, a = null, o = null, s = null, l = null, c = null
          }
        }
      },
      s = new WeakMap,
      l = new WeakMap;
    let c = {},
      u = {},
      h = new WeakMap,
      d = [],
      p = null,
      f = !1,
      m = null,
      g = null,
      v = null,
      _ = null,
      y = null,
      b = null,
      x = null,
      S = !1,
      M = null,
      w = null,
      T = null,
      E = null,
      A = null;
    const C = e.getParameter(35661);
    let L = !1,
      R = 0;
    const P = e.getParameter(7938); - 1 !== P.indexOf("WebGL") ? (R = parseFloat(/^WebGL (\d)/.exec(P)[1]), L = R >= 1) : -1 !== P.indexOf("OpenGL ES") && (R = parseFloat(/^OpenGL ES (\d)/.exec(P)[1]), L = R >= 2);
    let D = null,
      N = {};
    const O = e.getParameter(3088),
      I = e.getParameter(2978),
      U = (new gS).fromArray(O),
      k = (new gS).fromArray(I);

    function z(t, n, r) {
      const i = new Uint8Array(4),
        a = e.createTexture();
      e.bindTexture(t, a), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);
      for (let t = 0; t < r; t++) e.texImage2D(n + t, 0, 6408, 1, 1, 0, 6408, 5121, i);
      return a
    }
    const F = {};

    function B(t) {
      !0 !== c[t] && (e.enable(t), c[t] = !0)
    }

    function H(t) {
      !1 !== c[t] && (e.disable(t), c[t] = !1)
    }
    F[3553] = z(3553, 3553, 1), F[34067] = z(34067, 34069, 6), i.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), B(2929), a.setFunc(jp), j(!1), q(dp), B(2884), W(bp);
    const G = {
      [Ep]: 32774,
      [Ap]: 32778,
      [Cp]: 32779
    };
    if (r) G[Lp] = 32775, G[Rp] = 32776;
    else {
      const e = t.get("EXT_blend_minmax");
      null !== e && (G[Lp] = e.MIN_EXT, G[Rp] = e.MAX_EXT)
    }
    const V = {
      [Pp]: 0,
      [Dp]: 1,
      [Np]: 768,
      [Ip]: 770,
      [Hp]: 776,
      [Fp]: 774,
      [kp]: 772,
      [Op]: 769,
      [Up]: 771,
      [Bp]: 775,
      [zp]: 773
    };

    function W(t, n, r, i, a, o, s, l) {
      if (t !== bp) {
        if (!1 === f && (B(3042), f = !0), t === Tp) a = a || n, o = o || r, s = s || i, n === g && a === y || (e.blendEquationSeparate(G[n], G[a]), g = n, y = a), r === v && i === _ && o === b && s === x || (e.blendFuncSeparate(V[r], V[i], V[o], V[s]), v = r, _ = i, b = o, x = s), m = t, S = !1;
        else if (t !== m || l !== S) {
          if (g === Ep && y === Ep || (e.blendEquation(32774), g = Ep, y = Ep), l) switch (t) {
            case xp:
              e.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Sp:
              e.blendFunc(1, 1);
              break;
            case Mp:
              e.blendFuncSeparate(0, 769, 0, 1);
              break;
            case wp:
              e.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t)
          } else switch (t) {
            case xp:
              e.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Sp:
              e.blendFunc(770, 1);
              break;
            case Mp:
              e.blendFuncSeparate(0, 769, 0, 1);
              break;
            case wp:
              e.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t)
          }
          v = null, _ = null, b = null, x = null, m = t, S = l
        }
      } else !0 === f && (H(3042), f = !1)
    }

    function j(t) {
      M !== t && (t ? e.frontFace(2304) : e.frontFace(2305), M = t)
    }

    function q(t) {
      t !== hp ? (B(2884), t !== w && (t === dp ? e.cullFace(1029) : t === pp ? e.cullFace(1028) : e.cullFace(1032))) : H(2884), w = t
    }

    function X(t, n, r) {
      t ? (B(32823), E === n && A === r || (e.polygonOffset(n, r), E = n, A = r)) : H(32823)
    }
    return {
      buffers: {
        color: i,
        depth: a,
        stencil: o
      },
      enable: B,
      disable: H,
      bindFramebuffer: function (t, n) {
        return u[t] !== n && (e.bindFramebuffer(t, n), u[t] = n, r && (36009 === t && (u[36160] = n), 36160 === t && (u[36009] = n)), !0)
      },
      drawBuffers: function (r, i) {
        let a = d,
          o = !1;
        if (r)
          if (a = h.get(i), void 0 === a && (a = [], h.set(i, a)), r.isWebGLMultipleRenderTargets) {
            const e = r.texture;
            if (a.length !== e.length || 36064 !== a[0]) {
              for (let t = 0, n = e.length; t < n; t++) a[t] = 36064 + t;
              a.length = e.length, o = !0
            }
          } else 36064 !== a[0] && (a[0] = 36064, o = !0);
        else 1029 !== a[0] && (a[0] = 1029, o = !0);
        o && (n.isWebGL2 ? e.drawBuffers(a) : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(a))
      },
      useProgram: function (t) {
        return p !== t && (e.useProgram(t), p = t, !0)
      },
      setBlending: W,
      setMaterial: function (e, t) {
        e.side === yp ? H(2884) : B(2884);
        let n = e.side === _p;
        t && (n = !n), j(n), e.blending === xp && !1 === e.transparent ? W(bp) : W(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), a.setFunc(e.depthFunc), a.setTest(e.depthTest), a.setMask(e.depthWrite), i.setMask(e.colorWrite);
        const r = e.stencilWrite;
        o.setTest(r), r && (o.setMask(e.stencilWriteMask), o.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask), o.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)), X(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits), !0 === e.alphaToCoverage ? B(32926) : H(32926)
      },
      setFlipSided: j,
      setCullFace: q,
      setLineWidth: function (t) {
        t !== T && (L && e.lineWidth(t), T = t)
      },
      setPolygonOffset: X,
      setScissorTest: function (e) {
        e ? B(3089) : H(3089)
      },
      activeTexture: function (t) {
        void 0 === t && (t = 33984 + C - 1), D !== t && (e.activeTexture(t), D = t)
      },
      bindTexture: function (t, n, r) {
        void 0 === r && (r = null === D ? 33984 + C - 1 : D);
        let i = N[r];
        void 0 === i && (i = {
          type: void 0,
          texture: void 0
        }, N[r] = i), i.type === t && i.texture === n || (D !== r && (e.activeTexture(r), D = r), e.bindTexture(t, n || F[t]), i.type = t, i.texture = n)
      },
      unbindTexture: function () {
        const t = N[D];
        void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0)
      },
      compressedTexImage2D: function () {
        try {
          e.compressedTexImage2D.apply(e, arguments)
        } catch (e) {
          console.error("THREE.WebGLState:", e)
        }
      },
      compressedTexImage3D: function () {
        try {
          e.compressedTexImage3D.apply(e, arguments)
        } catch (e) {
          console.error("THREE.WebGLState:", e)
        }
      },
      texImage2D: function () {
        try {
          e.texImage2D.apply(e, arguments)
        } catch (e) {
          console.error("THREE.WebGLState:", e)
        }
      },
      texImage3D: function () {
        try {
          e.texImage3D.apply(e, arguments)
        } catch (e) {
          console.error("THREE.WebGLState:", e)
        }
      },
      updateUBOMapping: function (t, n) {
        let r = l.get(n);
        void 0 === r && (r = new WeakMap, l.set(n, r));
        let i = r.get(t);
        void 0 === i && (i = e.getUniformBlockIndex(n, t.name), r.set(t, i))
      },
      uniformBlockBinding: function (t, n) {
        const r = l.get(n).get(t);
        s.get(n) !== r && (e.uniformBlockBinding(n, r, t.__bindingPointIndex), s.set(n, r))
      },
      texStorage2D: function () {
        try {
          e.texStorage2D.apply(e, arguments)
        } catch (e) {
          console.error("THREE.WebGLState:", e)
        }
      },
      texStorage3D: function () {
        try {
          e.texStorage3D.apply(e, arguments)
        } catch (e) {
          console.error("THREE.WebGLState:", e)
        }
      },
      texSubImage2D: function () {
        try {
          e.texSubImage2D.apply(e, arguments)
        } catch (e) {
          console.error("THREE.WebGLState:", e)
        }
      },
      texSubImage3D: function () {
        try {
          e.texSubImage3D.apply(e, arguments)
        } catch (e) {
          console.error("THREE.WebGLState:", e)
        }
      },
      compressedTexSubImage2D: function () {
        try {
          e.compressedTexSubImage2D.apply(e, arguments)
        } catch (e) {
          console.error("THREE.WebGLState:", e)
        }
      },
      compressedTexSubImage3D: function () {
        try {
          e.compressedTexSubImage3D.apply(e, arguments)
        } catch (e) {
          console.error("THREE.WebGLState:", e)
        }
      },
      scissor: function (t) {
        !1 === U.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), U.copy(t))
      },
      viewport: function (t) {
        !1 === k.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), k.copy(t))
      },
      reset: function () {
        e.disable(3042), e.disable(2884), e.disable(2929), e.disable(32823), e.disable(3089), e.disable(2960), e.disable(32926), e.blendEquation(32774), e.blendFunc(1, 0), e.blendFuncSeparate(1, 0, 1, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(513), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(519, 0, 4294967295), e.stencilOp(7680, 7680, 7680), e.clearStencil(0), e.cullFace(1029), e.frontFace(2305), e.polygonOffset(0, 0), e.activeTexture(33984), e.bindFramebuffer(36160, null), !0 === r && (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), c = {}, D = null, N = {}, u = {}, h = new WeakMap, d = [], p = null, f = !1, m = null, g = null, v = null, _ = null, y = null, b = null, x = null, S = !1, M = null, w = null, T = null, E = null, A = null, U.set(0, 0, e.canvas.width, e.canvas.height), k.set(0, 0, e.canvas.width, e.canvas.height), i.reset(), a.reset(), o.reset()
      }
    }
  }

  function _A(e, t, n, r, i, a, o) {
    const s = i.isWebGL2,
      l = i.maxTextures,
      c = i.maxCubemapSize,
      u = i.maxTextureSize,
      h = i.maxSamples,
      d = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null,
      p = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent),
      f = new WeakMap;
    let m;
    const g = new WeakMap;
    let v = !1;
    try {
      v = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
    } catch (e) {}

    function _(e, t) {
      return v ? new OffscreenCanvas(e, t) : Jx("canvas")
    }

    function y(e, t, n, r) {
      let i = 1;
      if ((e.width > r || e.height > r) && (i = r / Math.max(e.width, e.height)), i < 1 || !0 === t) {
        if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
          const r = t ? jx : Math.floor,
            a = r(i * e.width),
            o = r(i * e.height);
          void 0 === m && (m = _(a, o));
          const s = n ? _(a, o) : m;
          s.width = a, s.height = o;
          return s.getContext("2d").drawImage(e, 0, 0, a, o), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e.width + "x" + e.height + ") to (" + a + "x" + o + ")."), s
        }
        return "data" in e && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e.width + "x" + e.height + ")."), e
      }
      return e
    }

    function b(e) {
      return Wx(e.width) && Wx(e.height)
    }

    function x(e, t) {
      return e.generateMipmaps && t && e.minFilter !== ff && e.minFilter !== vf
    }

    function S(t) {
      e.generateMipmap(t)
    }

    function M(n, r, i, a) {
      let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (!1 === s) return r;
      if (null !== n) {
        if (void 0 !== e[n]) return e[n];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
      }
      let l = r;
      return 6403 === r && (5126 === i && (l = 33326), 5131 === i && (l = 33325), 5121 === i && (l = 33321)), 33319 === r && (5126 === i && (l = 33328), 5131 === i && (l = 33327), 5121 === i && (l = 33323)), 6408 === r && (5126 === i && (l = 34836), 5131 === i && (l = 34842), 5121 === i && (l = a === ym && !1 === o ? 35907 : 32856), 32819 === i && (l = 32854), 32820 === i && (l = 32855)), 33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || t.get("EXT_color_buffer_float"), l
    }

    function w(e, t, n) {
      return !0 === x(e, n) || e.isFramebufferTexture && e.minFilter !== ff && e.minFilter !== vf ? Math.log2(Math.max(t.width, t.height)) + 1 : void 0 !== e.mipmaps && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1
    }

    function T(e) {
      return e === ff || e === mf || e === gf ? 9728 : 9729
    }

    function E(e) {
      const t = e.target;
      t.removeEventListener("dispose", E),
        function (e) {
          const t = r.get(e);
          if (void 0 === t.__webglInit) return;
          const n = e.source,
            i = g.get(n);
          if (i) {
            const r = i[t.__cacheKey];
            r.usedTimes--, 0 === r.usedTimes && C(e), 0 === Object.keys(i).length && g.delete(n)
          }
          r.remove(e)
        }(t), t.isVideoTexture && f.delete(t)
    }

    function A(t) {
      const n = t.target;
      n.removeEventListener("dispose", A),
        function (t) {
          const n = t.texture,
            i = r.get(t),
            a = r.get(n);
          void 0 !== a.__webglTexture && (e.deleteTexture(a.__webglTexture), o.memory.textures--);
          t.depthTexture && t.depthTexture.dispose();
          if (t.isWebGLCubeRenderTarget)
            for (let t = 0; t < 6; t++) e.deleteFramebuffer(i.__webglFramebuffer[t]), i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer[t]);
          else {
            if (e.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer), i.__webglMultisampledFramebuffer && e.deleteFramebuffer(i.__webglMultisampledFramebuffer), i.__webglColorRenderbuffer)
              for (let t = 0; t < i.__webglColorRenderbuffer.length; t++) i.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(i.__webglColorRenderbuffer[t]);
            i.__webglDepthRenderbuffer && e.deleteRenderbuffer(i.__webglDepthRenderbuffer)
          }
          if (t.isWebGLMultipleRenderTargets)
            for (let t = 0, i = n.length; t < i; t++) {
              const i = r.get(n[t]);
              i.__webglTexture && (e.deleteTexture(i.__webglTexture), o.memory.textures--), r.remove(n[t])
            }
          r.remove(n), r.remove(t)
        }(n)
    }

    function C(t) {
      const n = r.get(t);
      e.deleteTexture(n.__webglTexture);
      const i = t.source;
      delete g.get(i)[n.__cacheKey], o.memory.textures--
    }
    let L = 0;

    function R(e, t) {
      const i = r.get(e);
      if (e.isVideoTexture && function (e) {
          const t = o.render.frame;
          f.get(e) !== t && (f.set(e, t), e.update())
        }(e), !1 === e.isRenderTargetTexture && e.version > 0 && i.__version !== e.version) {
        const n = e.image;
        if (null === n) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
        else {
          if (!1 !== n.complete) return void I(i, e, t);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
        }
      }
      n.bindTexture(3553, i.__webglTexture, 33984 + t)
    }
    const P = {
        [hf]: 10497,
        [df]: 33071,
        [pf]: 33648
      },
      D = {
        [ff]: 9728,
        [mf]: 9984,
        [gf]: 9986,
        [vf]: 9729,
        [_f]: 9985,
        [yf]: 9987
      };

    function N(n, a, o) {
      if (o ? (e.texParameteri(n, 10242, P[a.wrapS]), e.texParameteri(n, 10243, P[a.wrapT]), 32879 !== n && 35866 !== n || e.texParameteri(n, 32882, P[a.wrapR]), e.texParameteri(n, 10240, D[a.magFilter]), e.texParameteri(n, 10241, D[a.minFilter])) : (e.texParameteri(n, 10242, 33071), e.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || e.texParameteri(n, 32882, 33071), a.wrapS === df && a.wrapT === df || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(n, 10240, T(a.magFilter)), e.texParameteri(n, 10241, T(a.minFilter)), a.minFilter !== ff && a.minFilter !== vf && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === t.has("EXT_texture_filter_anisotropic")) {
        const o = t.get("EXT_texture_filter_anisotropic");
        if (a.magFilter === ff) return;
        if (a.minFilter !== gf && a.minFilter !== yf) return;
        if (a.type === Ef && !1 === t.has("OES_texture_float_linear")) return;
        if (!1 === s && a.type === Af && !1 === t.has("OES_texture_half_float_linear")) return;
        (a.anisotropy > 1 || r.get(a).__currentAnisotropy) && (e.texParameterf(n, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy())), r.get(a).__currentAnisotropy = a.anisotropy)
      }
    }

    function O(t, n) {
      let r = !1;
      void 0 === t.__webglInit && (t.__webglInit = !0, n.addEventListener("dispose", E));
      const i = n.source;
      let a = g.get(i);
      void 0 === a && (a = {}, g.set(i, a));
      const s = function (e) {
        const t = [];
        return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.encoding), t.join()
      }(n);
      if (s !== t.__cacheKey) {
        void 0 === a[s] && (a[s] = {
          texture: e.createTexture(),
          usedTimes: 0
        }, o.memory.textures++, r = !0), a[s].usedTimes++;
        const i = a[t.__cacheKey];
        void 0 !== i && (a[t.__cacheKey].usedTimes--, 0 === i.usedTimes && C(n)), t.__cacheKey = s, t.__webglTexture = a[s].texture
      }
      return r
    }

    function I(t, i, o) {
      let l = 3553;
      (i.isDataArrayTexture || i.isCompressedArrayTexture) && (l = 35866), i.isData3DTexture && (l = 32879);
      const c = O(t, i),
        h = i.source;
      n.bindTexture(l, t.__webglTexture, 33984 + o);
      const d = r.get(h);
      if (h.version !== d.__version || !0 === c) {
        n.activeTexture(33984 + o), e.pixelStorei(37440, i.flipY), e.pixelStorei(37441, i.premultiplyAlpha), e.pixelStorei(3317, i.unpackAlignment), e.pixelStorei(37443, 0);
        const t = function (e) {
          return !s && (e.wrapS !== df || e.wrapT !== df || e.minFilter !== ff && e.minFilter !== vf)
        }(i) && !1 === b(i.image);
        let r = y(i.image, t, !1, u);
        r = H(i, r);
        const p = b(r) || s,
          f = a.convert(i.format, i.encoding);
        let m, g = a.convert(i.type),
          v = M(i.internalFormat, f, g, i.encoding, i.isVideoTexture);
        N(l, i, p);
        const _ = i.mipmaps,
          T = s && !0 !== i.isVideoTexture,
          E = void 0 === d.__version || !0 === c,
          A = w(i, r, p);
        if (i.isDepthTexture) v = 6402, s ? v = i.type === Ef ? 36012 : i.type === Tf ? 33190 : i.type === Rf ? 35056 : 33189 : i.type === Ef && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === If && 6402 === v && i.type !== Mf && i.type !== Tf && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = Tf, g = a.convert(i.type)), i.format === Uf && 6402 === v && (v = 34041, i.type !== Rf && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = Rf, g = a.convert(i.type))), E && (T ? n.texStorage2D(3553, 1, v, r.width, r.height) : n.texImage2D(3553, 0, v, r.width, r.height, 0, f, g, null));
        else if (i.isDataTexture)
          if (_.length > 0 && p) {
            T && E && n.texStorage2D(3553, A, v, _[0].width, _[0].height);
            for (let e = 0, t = _.length; e < t; e++) m = _[e], T ? n.texSubImage2D(3553, e, 0, 0, m.width, m.height, f, g, m.data) : n.texImage2D(3553, e, v, m.width, m.height, 0, f, g, m.data);
            i.generateMipmaps = !1
          } else T ? (E && n.texStorage2D(3553, A, v, r.width, r.height), n.texSubImage2D(3553, 0, 0, 0, r.width, r.height, f, g, r.data)) : n.texImage2D(3553, 0, v, r.width, r.height, 0, f, g, r.data);
        else if (i.isCompressedTexture)
          if (i.isCompressedArrayTexture) {
            T && E && n.texStorage3D(35866, A, v, _[0].width, _[0].height, r.depth);
            for (let e = 0, t = _.length; e < t; e++) m = _[e], i.format !== Df ? null !== f ? T ? n.compressedTexSubImage3D(35866, e, 0, 0, 0, m.width, m.height, r.depth, f, m.data, 0, 0) : n.compressedTexImage3D(35866, e, v, m.width, m.height, r.depth, 0, m.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : T ? n.texSubImage3D(35866, e, 0, 0, 0, m.width, m.height, r.depth, f, g, m.data) : n.texImage3D(35866, e, v, m.width, m.height, r.depth, 0, f, g, m.data)
          } else {
            T && E && n.texStorage2D(3553, A, v, _[0].width, _[0].height);
            for (let e = 0, t = _.length; e < t; e++) m = _[e], i.format !== Df ? null !== f ? T ? n.compressedTexSubImage2D(3553, e, 0, 0, m.width, m.height, f, m.data) : n.compressedTexImage2D(3553, e, v, m.width, m.height, 0, m.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : T ? n.texSubImage2D(3553, e, 0, 0, m.width, m.height, f, g, m.data) : n.texImage2D(3553, e, v, m.width, m.height, 0, f, g, m.data)
          }
        else if (i.isDataArrayTexture) T ? (E && n.texStorage3D(35866, A, v, r.width, r.height, r.depth), n.texSubImage3D(35866, 0, 0, 0, 0, r.width, r.height, r.depth, f, g, r.data)) : n.texImage3D(35866, 0, v, r.width, r.height, r.depth, 0, f, g, r.data);
        else if (i.isData3DTexture) T ? (E && n.texStorage3D(32879, A, v, r.width, r.height, r.depth), n.texSubImage3D(32879, 0, 0, 0, 0, r.width, r.height, r.depth, f, g, r.data)) : n.texImage3D(32879, 0, v, r.width, r.height, r.depth, 0, f, g, r.data);
        else if (i.isFramebufferTexture) {
          if (E)
            if (T) n.texStorage2D(3553, A, v, r.width, r.height);
            else {
              let e = r.width,
                t = r.height;
              for (let r = 0; r < A; r++) n.texImage2D(3553, r, v, e, t, 0, f, g, null), e >>= 1, t >>= 1
            }
        } else if (_.length > 0 && p) {
          T && E && n.texStorage2D(3553, A, v, _[0].width, _[0].height);
          for (let e = 0, t = _.length; e < t; e++) m = _[e], T ? n.texSubImage2D(3553, e, 0, 0, f, g, m) : n.texImage2D(3553, e, v, f, g, m);
          i.generateMipmaps = !1
        } else T ? (E && n.texStorage2D(3553, A, v, r.width, r.height), n.texSubImage2D(3553, 0, 0, 0, f, g, r)) : n.texImage2D(3553, 0, v, f, g, r);
        x(i, p) && S(l), d.__version = h.version, i.onUpdate && i.onUpdate(i)
      }
      t.__version = i.version
    }

    function U(t, i, o, s, l) {
      const c = a.convert(o.format, o.encoding),
        u = a.convert(o.type),
        h = M(o.internalFormat, c, u, o.encoding);
      r.get(i).__hasExternalTextures || (32879 === l || 35866 === l ? n.texImage3D(l, 0, h, i.width, i.height, i.depth, 0, c, u, null) : n.texImage2D(l, 0, h, i.width, i.height, 0, c, u, null)), n.bindFramebuffer(36160, t), B(i) ? d.framebufferTexture2DMultisampleEXT(36160, s, l, r.get(o).__webglTexture, 0, F(i)) : (3553 === l || l >= 34069 && l <= 34074) && e.framebufferTexture2D(36160, s, l, r.get(o).__webglTexture, 0), n.bindFramebuffer(36160, null)
    }

    function k(t, n, r) {
      if (e.bindRenderbuffer(36161, t), n.depthBuffer && !n.stencilBuffer) {
        let i = 33189;
        if (r || B(n)) {
          const t = n.depthTexture;
          t && t.isDepthTexture && (t.type === Ef ? i = 36012 : t.type === Tf && (i = 33190));
          const r = F(n);
          B(n) ? d.renderbufferStorageMultisampleEXT(36161, r, i, n.width, n.height) : e.renderbufferStorageMultisample(36161, r, i, n.width, n.height)
        } else e.renderbufferStorage(36161, i, n.width, n.height);
        e.framebufferRenderbuffer(36160, 36096, 36161, t)
      } else if (n.depthBuffer && n.stencilBuffer) {
        const i = F(n);
        r && !1 === B(n) ? e.renderbufferStorageMultisample(36161, i, 35056, n.width, n.height) : B(n) ? d.renderbufferStorageMultisampleEXT(36161, i, 35056, n.width, n.height) : e.renderbufferStorage(36161, 34041, n.width, n.height), e.framebufferRenderbuffer(36160, 33306, 36161, t)
      } else {
        const t = !0 === n.isWebGLMultipleRenderTargets ? n.texture : [n.texture];
        for (let i = 0; i < t.length; i++) {
          const o = t[i],
            s = a.convert(o.format, o.encoding),
            l = a.convert(o.type),
            c = M(o.internalFormat, s, l, o.encoding),
            u = F(n);
          r && !1 === B(n) ? e.renderbufferStorageMultisample(36161, u, c, n.width, n.height) : B(n) ? d.renderbufferStorageMultisampleEXT(36161, u, c, n.width, n.height) : e.renderbufferStorage(36161, c, n.width, n.height)
        }
      }
      e.bindRenderbuffer(36161, null)
    }

    function z(t) {
      const i = r.get(t),
        a = !0 === t.isWebGLCubeRenderTarget;
      if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
        if (a) throw new Error("target.depthTexture not supported in Cube render targets");
        ! function (t, i) {
          if (i && i.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
          if (n.bindFramebuffer(36160, t), !i.depthTexture || !i.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          r.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), R(i.depthTexture, 0);
          const a = r.get(i.depthTexture).__webglTexture,
            o = F(i);
          if (i.depthTexture.format === If) B(i) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, a, 0, o) : e.framebufferTexture2D(36160, 36096, 3553, a, 0);
          else {
            if (i.depthTexture.format !== Uf) throw new Error("Unknown depthTexture format");
            B(i) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, a, 0, o) : e.framebufferTexture2D(36160, 33306, 3553, a, 0)
          }
        }(i.__webglFramebuffer, t)
      } else if (a) {
        i.__webglDepthbuffer = [];
        for (let r = 0; r < 6; r++) n.bindFramebuffer(36160, i.__webglFramebuffer[r]), i.__webglDepthbuffer[r] = e.createRenderbuffer(), k(i.__webglDepthbuffer[r], t, !1)
      } else n.bindFramebuffer(36160, i.__webglFramebuffer), i.__webglDepthbuffer = e.createRenderbuffer(), k(i.__webglDepthbuffer, t, !1);
      n.bindFramebuffer(36160, null)
    }

    function F(e) {
      return Math.min(h, e.samples)
    }

    function B(e) {
      const n = r.get(e);
      return s && e.samples > 0 && !0 === t.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture
    }

    function H(e, n) {
      const r = e.encoding,
        i = e.format,
        a = e.type;
      return !0 === e.isCompressedTexture || !0 === e.isVideoTexture || e.format === Am || r !== _m && (r === ym ? !1 === s ? !0 === t.has("EXT_sRGB") && i === Df ? (e.format = Am, e.minFilter = vf, e.generateMipmaps = !1) : n = hS.sRGBToLinear(n) : i === Df && a === bf || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", r)), n
    }
    this.allocateTextureUnit = function () {
      const e = L;
      return e >= l && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + l), L += 1, e
    }, this.resetTextureUnits = function () {
      L = 0
    }, this.setTexture2D = R, this.setTexture2DArray = function (e, t) {
      const i = r.get(e);
      e.version > 0 && i.__version !== e.version ? I(i, e, t) : n.bindTexture(35866, i.__webglTexture, 33984 + t)
    }, this.setTexture3D = function (e, t) {
      const i = r.get(e);
      e.version > 0 && i.__version !== e.version ? I(i, e, t) : n.bindTexture(32879, i.__webglTexture, 33984 + t)
    }, this.setTextureCube = function (t, i) {
      const o = r.get(t);
      t.version > 0 && o.__version !== t.version ? function (t, i, o) {
        if (6 !== i.image.length) return;
        const l = O(t, i),
          u = i.source;
        n.bindTexture(34067, t.__webglTexture, 33984 + o);
        const h = r.get(u);
        if (u.version !== h.__version || !0 === l) {
          n.activeTexture(33984 + o), e.pixelStorei(37440, i.flipY), e.pixelStorei(37441, i.premultiplyAlpha), e.pixelStorei(3317, i.unpackAlignment), e.pixelStorei(37443, 0);
          const t = i.isCompressedTexture || i.image[0].isCompressedTexture,
            r = i.image[0] && i.image[0].isDataTexture,
            d = [];
          for (let e = 0; e < 6; e++) d[e] = t || r ? r ? i.image[e].image : i.image[e] : y(i.image[e], !1, !0, c), d[e] = H(i, d[e]);
          const p = d[0],
            f = b(p) || s,
            m = a.convert(i.format, i.encoding),
            g = a.convert(i.type),
            v = M(i.internalFormat, m, g, i.encoding),
            _ = s && !0 !== i.isVideoTexture,
            T = void 0 === h.__version || !0 === l;
          let E, A = w(i, p, f);
          if (N(34067, i, f), t) {
            _ && T && n.texStorage2D(34067, A, v, p.width, p.height);
            for (let e = 0; e < 6; e++) {
              E = d[e].mipmaps;
              for (let t = 0; t < E.length; t++) {
                const r = E[t];
                i.format !== Df ? null !== m ? _ ? n.compressedTexSubImage2D(34069 + e, t, 0, 0, r.width, r.height, m, r.data) : n.compressedTexImage2D(34069 + e, t, v, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : _ ? n.texSubImage2D(34069 + e, t, 0, 0, r.width, r.height, m, g, r.data) : n.texImage2D(34069 + e, t, v, r.width, r.height, 0, m, g, r.data)
              }
            }
          } else {
            E = i.mipmaps, _ && T && (E.length > 0 && A++, n.texStorage2D(34067, A, v, d[0].width, d[0].height));
            for (let e = 0; e < 6; e++)
              if (r) {
                _ ? n.texSubImage2D(34069 + e, 0, 0, 0, d[e].width, d[e].height, m, g, d[e].data) : n.texImage2D(34069 + e, 0, v, d[e].width, d[e].height, 0, m, g, d[e].data);
                for (let t = 0; t < E.length; t++) {
                  const r = E[t].image[e].image;
                  _ ? n.texSubImage2D(34069 + e, t + 1, 0, 0, r.width, r.height, m, g, r.data) : n.texImage2D(34069 + e, t + 1, v, r.width, r.height, 0, m, g, r.data)
                }
              } else {
                _ ? n.texSubImage2D(34069 + e, 0, 0, 0, m, g, d[e]) : n.texImage2D(34069 + e, 0, v, m, g, d[e]);
                for (let t = 0; t < E.length; t++) {
                  const r = E[t];
                  _ ? n.texSubImage2D(34069 + e, t + 1, 0, 0, m, g, r.image[e]) : n.texImage2D(34069 + e, t + 1, v, m, g, r.image[e])
                }
              }
          }
          x(i, f) && S(34067), h.__version = u.version, i.onUpdate && i.onUpdate(i)
        }
        t.__version = i.version
      }(o, t, i) : n.bindTexture(34067, o.__webglTexture, 33984 + i)
    }, this.rebindTextures = function (e, t, n) {
      const i = r.get(e);
      void 0 !== t && U(i.__webglFramebuffer, e, e.texture, 36064, 3553), void 0 !== n && z(e)
    }, this.setupRenderTarget = function (t) {
      const l = t.texture,
        c = r.get(t),
        u = r.get(l);
      t.addEventListener("dispose", A), !0 !== t.isWebGLMultipleRenderTargets && (void 0 === u.__webglTexture && (u.__webglTexture = e.createTexture()), u.__version = l.version, o.memory.textures++);
      const h = !0 === t.isWebGLCubeRenderTarget,
        d = !0 === t.isWebGLMultipleRenderTargets,
        p = b(t) || s;
      if (h) {
        c.__webglFramebuffer = [];
        for (let t = 0; t < 6; t++) c.__webglFramebuffer[t] = e.createFramebuffer()
      } else {
        if (c.__webglFramebuffer = e.createFramebuffer(), d)
          if (i.drawBuffers) {
            const n = t.texture;
            for (let t = 0, i = n.length; t < i; t++) {
              const i = r.get(n[t]);
              void 0 === i.__webglTexture && (i.__webglTexture = e.createTexture(), o.memory.textures++)
            }
          } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        if (s && t.samples > 0 && !1 === B(t)) {
          const r = d ? l : [l];
          c.__webglMultisampledFramebuffer = e.createFramebuffer(), c.__webglColorRenderbuffer = [], n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
          for (let n = 0; n < r.length; n++) {
            const i = r[n];
            c.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(36161, c.__webglColorRenderbuffer[n]);
            const o = a.convert(i.format, i.encoding),
              s = a.convert(i.type),
              l = M(i.internalFormat, o, s, i.encoding, !0 === t.isXRRenderTarget),
              u = F(t);
            e.renderbufferStorageMultisample(36161, u, l, t.width, t.height), e.framebufferRenderbuffer(36160, 36064 + n, 36161, c.__webglColorRenderbuffer[n])
          }
          e.bindRenderbuffer(36161, null), t.depthBuffer && (c.__webglDepthRenderbuffer = e.createRenderbuffer(), k(c.__webglDepthRenderbuffer, t, !0)), n.bindFramebuffer(36160, null)
        }
      }
      if (h) {
        n.bindTexture(34067, u.__webglTexture), N(34067, l, p);
        for (let e = 0; e < 6; e++) U(c.__webglFramebuffer[e], t, l, 36064, 34069 + e);
        x(l, p) && S(34067), n.unbindTexture()
      } else if (d) {
        const e = t.texture;
        for (let i = 0, a = e.length; i < a; i++) {
          const a = e[i],
            o = r.get(a);
          n.bindTexture(3553, o.__webglTexture), N(3553, a, p), U(c.__webglFramebuffer, t, a, 36064 + i, 3553), x(a, p) && S(3553)
        }
        n.unbindTexture()
      } else {
        let e = 3553;
        (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (s ? e = t.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n.bindTexture(e, u.__webglTexture), N(e, l, p), U(c.__webglFramebuffer, t, l, 36064, e), x(l, p) && S(e), n.unbindTexture()
      }
      t.depthBuffer && z(t)
    }, this.updateRenderTargetMipmap = function (e) {
      const t = b(e) || s,
        i = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
      for (let a = 0, o = i.length; a < o; a++) {
        const o = i[a];
        if (x(o, t)) {
          const t = e.isWebGLCubeRenderTarget ? 34067 : 3553,
            i = r.get(o).__webglTexture;
          n.bindTexture(t, i), S(t), n.unbindTexture()
        }
      }
    }, this.updateMultisampleRenderTarget = function (t) {
      if (s && t.samples > 0 && !1 === B(t)) {
        const i = t.isWebGLMultipleRenderTargets ? t.texture : [t.texture],
          a = t.width,
          o = t.height;
        let s = 16384;
        const l = [],
          c = t.stencilBuffer ? 33306 : 36096,
          u = r.get(t),
          h = !0 === t.isWebGLMultipleRenderTargets;
        if (h)
          for (let t = 0; t < i.length; t++) n.bindFramebuffer(36160, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064 + t, 36161, null), n.bindFramebuffer(36160, u.__webglFramebuffer), e.framebufferTexture2D(36009, 36064 + t, 3553, null, 0);
        n.bindFramebuffer(36008, u.__webglMultisampledFramebuffer), n.bindFramebuffer(36009, u.__webglFramebuffer);
        for (let n = 0; n < i.length; n++) {
          l.push(36064 + n), t.depthBuffer && l.push(c);
          const d = void 0 !== u.__ignoreDepthValues && u.__ignoreDepthValues;
          if (!1 === d && (t.depthBuffer && (s |= 256), t.stencilBuffer && (s |= 1024)), h && e.framebufferRenderbuffer(36008, 36064, 36161, u.__webglColorRenderbuffer[n]), !0 === d && (e.invalidateFramebuffer(36008, [c]), e.invalidateFramebuffer(36009, [c])), h) {
            const t = r.get(i[n]).__webglTexture;
            e.framebufferTexture2D(36009, 36064, 3553, t, 0)
          }
          e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, 9728), p && e.invalidateFramebuffer(36008, l)
        }
        if (n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, null), h)
          for (let t = 0; t < i.length; t++) {
            n.bindFramebuffer(36160, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064 + t, 36161, u.__webglColorRenderbuffer[t]);
            const a = r.get(i[t]).__webglTexture;
            n.bindFramebuffer(36160, u.__webglFramebuffer), e.framebufferTexture2D(36009, 36064 + t, 3553, a, 0)
          }
        n.bindFramebuffer(36009, u.__webglMultisampledFramebuffer)
      }
    }, this.setupDepthRenderbuffer = z, this.setupFrameBufferTexture = U, this.useMultisampledRTT = B
  }

  function yA(e, t, n) {
    const r = n.isWebGL2;
    return {
      convert: function (n) {
        let i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (n === bf) return 5121;
        if (n === Cf) return 32819;
        if (n === Lf) return 32820;
        if (n === xf) return 5120;
        if (n === Sf) return 5122;
        if (n === Mf) return 5123;
        if (n === wf) return 5124;
        if (n === Tf) return 5125;
        if (n === Ef) return 5126;
        if (n === Af) return r ? 5131 : (i = t.get("OES_texture_half_float"), null !== i ? i.HALF_FLOAT_OES : null);
        if (n === Pf) return 6406;
        if (n === Df) return 6408;
        if (n === Nf) return 6409;
        if (n === Of) return 6410;
        if (n === If) return 6402;
        if (n === Uf) return 34041;
        if (n === Am) return i = t.get("EXT_sRGB"), null !== i ? i.SRGB_ALPHA_EXT : null;
        if (n === kf) return 6403;
        if (n === zf) return 36244;
        if (n === Ff) return 33319;
        if (n === Bf) return 33320;
        if (n === Hf) return 36249;
        if (n === Gf || n === Vf || n === Wf || n === jf)
          if (a === ym) {
            if (i = t.get("WEBGL_compressed_texture_s3tc_srgb"), null === i) return null;
            if (n === Gf) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (n === Vf) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (n === Wf) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (n === jf) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
          } else {
            if (i = t.get("WEBGL_compressed_texture_s3tc"), null === i) return null;
            if (n === Gf) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (n === Vf) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (n === Wf) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (n === jf) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT
          } if (n === qf || n === Xf || n === Yf || n === Zf) {
          if (i = t.get("WEBGL_compressed_texture_pvrtc"), null === i) return null;
          if (n === qf) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (n === Xf) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (n === Yf) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (n === Zf) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        if (n === Kf) return i = t.get("WEBGL_compressed_texture_etc1"), null !== i ? i.COMPRESSED_RGB_ETC1_WEBGL : null;
        if (n === $f || n === Jf) {
          if (i = t.get("WEBGL_compressed_texture_etc"), null === i) return null;
          if (n === $f) return a === ym ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
          if (n === Jf) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC
        }
        if (n === Qf || n === em || n === tm || n === nm || n === rm || n === im || n === am || n === om || n === sm || n === lm || n === cm || n === um || n === hm || n === dm) {
          if (i = t.get("WEBGL_compressed_texture_astc"), null === i) return null;
          if (n === Qf) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
          if (n === em) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
          if (n === tm) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
          if (n === nm) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
          if (n === rm) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
          if (n === im) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
          if (n === am) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
          if (n === om) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
          if (n === sm) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
          if (n === lm) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
          if (n === cm) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
          if (n === um) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
          if (n === hm) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
          if (n === dm) return a === ym ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR
        }
        if (n === pm) {
          if (i = t.get("EXT_texture_compression_bptc"), null === i) return null;
          if (n === pm) return a === ym ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT
        }
        if (n === fm || n === mm || n === gm || n === vm) {
          if (i = t.get("EXT_texture_compression_rgtc"), null === i) return null;
          if (n === pm) return i.COMPRESSED_RED_RGTC1_EXT;
          if (n === mm) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
          if (n === gm) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
          if (n === vm) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
        }
        return n === Rf ? r ? 34042 : (i = t.get("WEBGL_depth_texture"), null !== i ? i.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== e[n] ? e[n] : null
      }
    }
  }
  class bA extends Lw {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      super(), this.isArrayCamera = !0, this.cameras = e
    }
  }
  class xA extends DM {
    constructor() {
      super(), this.isGroup = !0, this.type = "Group"
    }
  }
  const SA = {
    type: "move"
  };
  class MA {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null
    }
    getHandSpace() {
      return null === this._hand && (this._hand = new xA, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
        pinching: !1
      }), this._hand
    }
    getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new xA, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new xS, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new xS), this._targetRay
    }
    getGripSpace() {
      return null === this._grip && (this._grip = new xA, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new xS, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new xS), this._grip
    }
    dispatchEvent(e) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(e), null !== this._grip && this._grip.dispatchEvent(e), null !== this._hand && this._hand.dispatchEvent(e), this
    }
    connect(e) {
      if (e && e.hand) {
        const t = this._hand;
        if (t)
          for (const n of e.hand.values()) this._getHandJoint(t, n)
      }
      return this.dispatchEvent({
        type: "connected",
        data: e
      }), this
    }
    disconnect(e) {
      return this.dispatchEvent({
        type: "disconnected",
        data: e
      }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
    }
    update(e, t, n) {
      let r = null,
        i = null,
        a = null;
      const o = this._targetRay,
        s = this._grip,
        l = this._hand;
      if (e && "visible-blurred" !== t.session.visibilityState) {
        if (l && e.hand) {
          a = !0;
          for (const r of e.hand.values()) {
            const e = t.getJointPose(r, n),
              i = this._getHandJoint(l, r);
            null !== e && (i.matrix.fromArray(e.transform.matrix), i.matrix.decompose(i.position, i.rotation, i.scale), i.jointRadius = e.radius), i.visible = null !== e
          }
          const r = l.joints["index-finger-tip"],
            i = l.joints["thumb-tip"],
            o = r.position.distanceTo(i.position),
            s = .02,
            c = .005;
          l.inputState.pinching && o > s + c ? (l.inputState.pinching = !1, this.dispatchEvent({
            type: "pinchend",
            handedness: e.handedness,
            target: this
          })) : !l.inputState.pinching && o <= s - c && (l.inputState.pinching = !0, this.dispatchEvent({
            type: "pinchstart",
            handedness: e.handedness,
            target: this
          }))
        } else null !== s && e.gripSpace && (i = t.getPose(e.gripSpace, n), null !== i && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1));
        null !== o && (r = t.getPose(e.targetRaySpace, n), null === r && null !== i && (r = i), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(SA)))
      }
      return null !== o && (o.visible = null !== r), null !== s && (s.visible = null !== i), null !== l && (l.visible = null !== a), this
    }
    _getHandJoint(e, t) {
      if (void 0 === e.joints[t.jointName]) {
        const n = new xA;
        n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n)
      }
      return e.joints[t.jointName]
    }
  }
  class wA extends mS {
    constructor(e, t, n, r, i, a, o, s, l, c) {
      if ((c = void 0 !== c ? c : If) !== If && c !== Uf) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      void 0 === n && c === If && (n = Tf), void 0 === n && c === Uf && (n = Rf), super(null, r, i, a, o, s, c, n, l), this.isDepthTexture = !0, this.image = {
        width: e,
        height: t
      }, this.magFilter = void 0 !== o ? o : ff, this.minFilter = void 0 !== s ? s : ff, this.flipY = !1, this.generateMipmaps = !1
    }
  }
  class TA extends Cm {
    constructor(e, t) {
      super();
      const n = this;
      let r = null,
        i = 1,
        a = null,
        o = "local-floor",
        s = 1,
        l = null,
        c = null,
        u = null,
        h = null,
        d = null,
        p = null;
      const f = t.getContextAttributes();
      let m = null,
        g = null;
      const v = [],
        _ = [],
        y = new Set,
        b = new Map,
        x = new Lw;
      x.layers.enable(1), x.viewport = new gS;
      const S = new Lw;
      S.layers.enable(2), S.viewport = new gS;
      const M = [x, S],
        w = new bA;
      w.layers.enable(1), w.layers.enable(2);
      let T = null,
        E = null;

      function A(e) {
        const t = _.indexOf(e.inputSource);
        if (-1 === t) return;
        const n = v[t];
        void 0 !== n && n.dispatchEvent({
          type: e.type,
          data: e.inputSource
        })
      }

      function C() {
        r.removeEventListener("select", A), r.removeEventListener("selectstart", A), r.removeEventListener("selectend", A), r.removeEventListener("squeeze", A), r.removeEventListener("squeezestart", A), r.removeEventListener("squeezeend", A), r.removeEventListener("end", C), r.removeEventListener("inputsourceschange", L);
        for (let e = 0; e < v.length; e++) {
          const t = _[e];
          null !== t && (_[e] = null, v[e].disconnect(t))
        }
        T = null, E = null, e.setRenderTarget(m), d = null, h = null, u = null, r = null, g = null, O.stop(), n.isPresenting = !1, n.dispatchEvent({
          type: "sessionend"
        })
      }

      function L(e) {
        for (let t = 0; t < e.removed.length; t++) {
          const n = e.removed[t],
            r = _.indexOf(n);
          r >= 0 && (_[r] = null, v[r].disconnect(n))
        }
        for (let t = 0; t < e.added.length; t++) {
          const n = e.added[t];
          let r = _.indexOf(n);
          if (-1 === r) {
            for (let e = 0; e < v.length; e++) {
              if (e >= _.length) {
                _.push(n), r = e;
                break
              }
              if (null === _[e]) {
                _[e] = n, r = e;
                break
              }
            }
            if (-1 === r) break
          }
          const i = v[r];
          i && i.connect(n)
        }
      }
      this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (e) {
        let t = v[e];
        return void 0 === t && (t = new MA, v[e] = t), t.getTargetRaySpace()
      }, this.getControllerGrip = function (e) {
        let t = v[e];
        return void 0 === t && (t = new MA, v[e] = t), t.getGripSpace()
      }, this.getHand = function (e) {
        let t = v[e];
        return void 0 === t && (t = new MA, v[e] = t), t.getHandSpace()
      }, this.setFramebufferScaleFactor = function (e) {
        i = e, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
      }, this.setReferenceSpaceType = function (e) {
        o = e, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
      }, this.getReferenceSpace = function () {
        return l || a
      }, this.setReferenceSpace = function (e) {
        l = e
      }, this.getBaseLayer = function () {
        return null !== h ? h : d
      }, this.getBinding = function () {
        return u
      }, this.getFrame = function () {
        return p
      }, this.getSession = function () {
        return r
      }, this.setSession = async function (c) {
        if (r = c, null !== r) {
          if (m = e.getRenderTarget(), r.addEventListener("select", A), r.addEventListener("selectstart", A), r.addEventListener("selectend", A), r.addEventListener("squeeze", A), r.addEventListener("squeezestart", A), r.addEventListener("squeezeend", A), r.addEventListener("end", C), r.addEventListener("inputsourceschange", L), !0 !== f.xrCompatible && await t.makeXRCompatible(), void 0 === r.renderState.layers || !1 === e.capabilities.isWebGL2) {
            const n = {
              antialias: void 0 !== r.renderState.layers || f.antialias,
              alpha: f.alpha,
              depth: f.depth,
              stencil: f.stencil,
              framebufferScaleFactor: i
            };
            d = new XRWebGLLayer(r, t, n), r.updateRenderState({
              baseLayer: d
            }), g = new vS(d.framebufferWidth, d.framebufferHeight, {
              format: Df,
              type: bf,
              encoding: e.outputEncoding,
              stencilBuffer: f.stencil
            })
          } else {
            let n = null,
              a = null,
              o = null;
            f.depth && (o = f.stencil ? 35056 : 33190, n = f.stencil ? Uf : If, a = f.stencil ? Rf : Tf);
            const s = {
              colorFormat: 32856,
              depthFormat: o,
              scaleFactor: i
            };
            u = new XRWebGLBinding(r, t), h = u.createProjectionLayer(s), r.updateRenderState({
              layers: [h]
            }), g = new vS(h.textureWidth, h.textureHeight, {
              format: Df,
              type: bf,
              depthTexture: new wA(h.textureWidth, h.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
              stencilBuffer: f.stencil,
              encoding: e.outputEncoding,
              samples: f.antialias ? 4 : 0
            });
            e.properties.get(g).__ignoreDepthValues = h.ignoreDepthValues
          }
          g.isXRRenderTarget = !0, this.setFoveation(s), l = null, a = await r.requestReferenceSpace(o), O.setContext(r), O.start(), n.isPresenting = !0, n.dispatchEvent({
            type: "sessionstart"
          })
        }
      };
      const R = new xS,
        P = new xS;

      function D(e, t) {
        null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert()
      }
      this.updateCamera = function (e) {
        if (null === r) return;
        w.near = S.near = x.near = e.near, w.far = S.far = x.far = e.far, T === w.near && E === w.far || (r.updateRenderState({
          depthNear: w.near,
          depthFar: w.far
        }), T = w.near, E = w.far);
        const t = e.parent,
          n = w.cameras;
        D(w, t);
        for (let e = 0; e < n.length; e++) D(n[e], t);
        w.matrixWorld.decompose(w.position, w.quaternion, w.scale), e.matrix.copy(w.matrix), e.matrix.decompose(e.position, e.quaternion, e.scale);
        const i = e.children;
        for (let e = 0, t = i.length; e < t; e++) i[e].updateMatrixWorld(!0);
        2 === n.length ? function (e, t, n) {
          R.setFromMatrixPosition(t.matrixWorld), P.setFromMatrixPosition(n.matrixWorld);
          const r = R.distanceTo(P),
            i = t.projectionMatrix.elements,
            a = n.projectionMatrix.elements,
            o = i[14] / (i[10] - 1),
            s = i[14] / (i[10] + 1),
            l = (i[9] + 1) / i[5],
            c = (i[9] - 1) / i[5],
            u = (i[8] - 1) / i[0],
            h = (a[8] + 1) / a[0],
            d = o * u,
            p = o * h,
            f = r / (-u + h),
            m = f * -u;
          t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(m), e.translateZ(f), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert();
          const g = o + f,
            v = s + f,
            _ = d - m,
            y = p + (r - m),
            b = l * s / v * g,
            x = c * s / v * g;
          e.projectionMatrix.makePerspective(_, y, b, x, g, v)
        }(w, x, S) : w.projectionMatrix.copy(x.projectionMatrix)
      }, this.getCamera = function () {
        return w
      }, this.getFoveation = function () {
        if (null !== h || null !== d) return s
      }, this.setFoveation = function (e) {
        s = e, null !== h && (h.fixedFoveation = e), null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = e)
      }, this.getPlanes = function () {
        return y
      };
      let N = null;
      const O = new Hw;
      O.setAnimationLoop((function (t, r) {
        if (c = r.getViewerPose(l || a), p = r, null !== c) {
          const t = c.views;
          null !== d && (e.setRenderTargetFramebuffer(g, d.framebuffer), e.setRenderTarget(g));
          let n = !1;
          t.length !== w.cameras.length && (w.cameras.length = 0, n = !0);
          for (let r = 0; r < t.length; r++) {
            const i = t[r];
            let a = null;
            if (null !== d) a = d.getViewport(i);
            else {
              const t = u.getViewSubImage(h, i);
              a = t.viewport, 0 === r && (e.setRenderTargetTextures(g, t.colorTexture, h.ignoreDepthValues ? void 0 : t.depthStencilTexture), e.setRenderTarget(g))
            }
            let o = M[r];
            void 0 === o && (o = new Lw, o.layers.enable(r), o.viewport = new gS, M[r] = o), o.matrix.fromArray(i.transform.matrix), o.projectionMatrix.fromArray(i.projectionMatrix), o.viewport.set(a.x, a.y, a.width, a.height), 0 === r && w.matrix.copy(o.matrix), !0 === n && w.cameras.push(o)
          }
        }
        for (let e = 0; e < v.length; e++) {
          const t = _[e],
            n = v[e];
          null !== t && void 0 !== n && n.update(t, r, l || a)
        }
        if (N && N(t, r), r.detectedPlanes) {
          n.dispatchEvent({
            type: "planesdetected",
            data: r.detectedPlanes
          });
          let e = null;
          for (const t of y) r.detectedPlanes.has(t) || (null === e && (e = []), e.push(t));
          if (null !== e)
            for (const t of e) y.delete(t), b.delete(t), n.dispatchEvent({
              type: "planeremoved",
              data: t
            });
          for (const e of r.detectedPlanes)
            if (y.has(e)) {
              const t = b.get(e);
              e.lastChangedTime > t && (b.set(e, e.lastChangedTime), n.dispatchEvent({
                type: "planechanged",
                data: e
              }))
            } else y.add(e), b.set(e, r.lastChangedTime), n.dispatchEvent({
              type: "planeadded",
              data: e
            })
        }
        p = null
      })), this.setAnimationLoop = function (e) {
        N = e
      }, this.dispose = function () {}
    }
  }

  function EA(e, t) {
    function n(n, r) {
      n.opacity.value = r.opacity, r.color && n.diffuse.value.copy(r.color), r.emissive && n.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (n.map.value = r.map), r.alphaMap && (n.alphaMap.value = r.alphaMap), r.bumpMap && (n.bumpMap.value = r.bumpMap, n.bumpScale.value = r.bumpScale, r.side === _p && (n.bumpScale.value *= -1)), r.displacementMap && (n.displacementMap.value = r.displacementMap, n.displacementScale.value = r.displacementScale, n.displacementBias.value = r.displacementBias), r.emissiveMap && (n.emissiveMap.value = r.emissiveMap), r.normalMap && (n.normalMap.value = r.normalMap, n.normalScale.value.copy(r.normalScale), r.side === _p && n.normalScale.value.negate()), r.specularMap && (n.specularMap.value = r.specularMap), r.alphaTest > 0 && (n.alphaTest.value = r.alphaTest);
      const i = t.get(r).envMap;
      if (i && (n.envMap.value = i, n.flipEnvMap.value = i.isCubeTexture && !1 === i.isRenderTargetTexture ? -1 : 1, n.reflectivity.value = r.reflectivity, n.ior.value = r.ior, n.refractionRatio.value = r.refractionRatio), r.lightMap) {
        n.lightMap.value = r.lightMap;
        const t = !0 !== e.physicallyCorrectLights ? Math.PI : 1;
        n.lightMapIntensity.value = r.lightMapIntensity * t
      }
      let a, o;
      r.aoMap && (n.aoMap.value = r.aoMap, n.aoMapIntensity.value = r.aoMapIntensity), r.map ? a = r.map : r.specularMap ? a = r.specularMap : r.displacementMap ? a = r.displacementMap : r.normalMap ? a = r.normalMap : r.bumpMap ? a = r.bumpMap : r.roughnessMap ? a = r.roughnessMap : r.metalnessMap ? a = r.metalnessMap : r.alphaMap ? a = r.alphaMap : r.emissiveMap ? a = r.emissiveMap : r.clearcoatMap ? a = r.clearcoatMap : r.clearcoatNormalMap ? a = r.clearcoatNormalMap : r.clearcoatRoughnessMap ? a = r.clearcoatRoughnessMap : r.iridescenceMap ? a = r.iridescenceMap : r.iridescenceThicknessMap ? a = r.iridescenceThicknessMap : r.specularIntensityMap ? a = r.specularIntensityMap : r.specularColorMap ? a = r.specularColorMap : r.transmissionMap ? a = r.transmissionMap : r.thicknessMap ? a = r.thicknessMap : r.sheenColorMap ? a = r.sheenColorMap : r.sheenRoughnessMap && (a = r.sheenRoughnessMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), n.uvTransform.value.copy(a.matrix)), r.aoMap ? o = r.aoMap : r.lightMap && (o = r.lightMap), void 0 !== o && (o.isWebGLRenderTarget && (o = o.texture), !0 === o.matrixAutoUpdate && o.updateMatrix(), n.uv2Transform.value.copy(o.matrix))
    }
    return {
      refreshFogUniforms: function (t, n) {
        n.color.getRGB(t.fogColor.value, Tw(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density)
      },
      refreshMaterialUniforms: function (e, r, i, a, o) {
        r.isMeshBasicMaterial || r.isMeshLambertMaterial ? n(e, r) : r.isMeshToonMaterial ? (n(e, r), function (e, t) {
          t.gradientMap && (e.gradientMap.value = t.gradientMap)
        }(e, r)) : r.isMeshPhongMaterial ? (n(e, r), function (e, t) {
          e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4)
        }(e, r)) : r.isMeshStandardMaterial ? (n(e, r), function (e, n) {
          e.roughness.value = n.roughness, e.metalness.value = n.metalness, n.roughnessMap && (e.roughnessMap.value = n.roughnessMap);
          n.metalnessMap && (e.metalnessMap.value = n.metalnessMap);
          const r = t.get(n).envMap;
          r && (e.envMapIntensity.value = n.envMapIntensity)
        }(e, r), r.isMeshPhysicalMaterial && function (e, t, n) {
          e.ior.value = t.ior, t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap));
          t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap), t.clearcoatNormalMap && (e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), e.clearcoatNormalMap.value = t.clearcoatNormalMap, t.side === _p && e.clearcoatNormalScale.value.negate()));
          t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1], t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap));
          t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = n.texture, e.transmissionSamplerSize.value.set(n.width, n.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor));
          e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap);
          t.specularColorMap && (e.specularColorMap.value = t.specularColorMap)
        }(e, r, o)) : r.isMeshMatcapMaterial ? (n(e, r), function (e, t) {
          t.matcap && (e.matcap.value = t.matcap)
        }(e, r)) : r.isMeshDepthMaterial ? n(e, r) : r.isMeshDistanceMaterial ? (n(e, r), function (e, t) {
          e.referencePosition.value.copy(t.referencePosition), e.nearDistance.value = t.nearDistance, e.farDistance.value = t.farDistance
        }(e, r)) : r.isMeshNormalMaterial ? n(e, r) : r.isLineBasicMaterial ? (function (e, t) {
          e.diffuse.value.copy(t.color), e.opacity.value = t.opacity
        }(e, r), r.isLineDashedMaterial && function (e, t) {
          e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
        }(e, r)) : r.isPointsMaterial ? function (e, t, n, r) {
          e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * n, e.scale.value = .5 * r, t.map && (e.map.value = t.map);
          t.alphaMap && (e.alphaMap.value = t.alphaMap);
          t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
          let i;
          t.map ? i = t.map : t.alphaMap && (i = t.alphaMap);
          void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), e.uvTransform.value.copy(i.matrix))
        }(e, r, i, a) : r.isSpriteMaterial ? function (e, t) {
          e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map);
          t.alphaMap && (e.alphaMap.value = t.alphaMap);
          t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
          let n;
          t.map ? n = t.map : t.alphaMap && (n = t.alphaMap);
          void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), e.uvTransform.value.copy(n.matrix))
        }(e, r) : r.isShadowMaterial ? (e.color.value.copy(r.color), e.opacity.value = r.opacity) : r.isShaderMaterial && (r.uniformsNeedUpdate = !1)
      }
    }
  }

  function AA(e, t, n, r) {
    let i = {},
      a = {},
      o = [];
    const s = n.isWebGL2 ? e.getParameter(35375) : 0;

    function l(e, t, n) {
      const r = e.value;
      if (void 0 === n[t]) {
        if ("number" == typeof r) n[t] = r;
        else {
          const e = Array.isArray(r) ? r : [r],
            i = [];
          for (let t = 0; t < e.length; t++) i.push(e[t].clone());
          n[t] = i
        }
        return !0
      }
      if ("number" == typeof r) {
        if (n[t] !== r) return n[t] = r, !0
      } else {
        const e = Array.isArray(n[t]) ? n[t] : [n[t]],
          i = Array.isArray(r) ? r : [r];
        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          if (!1 === n.equals(i[t])) return n.copy(i[t]), !0
        }
      }
      return !1
    }

    function c(e) {
      const t = {
        boundary: 0,
        storage: 0
      };
      return "number" == typeof e ? (t.boundary = 4, t.storage = 4) : e.isVector2 ? (t.boundary = 8, t.storage = 8) : e.isVector3 || e.isColor ? (t.boundary = 16, t.storage = 12) : e.isVector4 ? (t.boundary = 16, t.storage = 16) : e.isMatrix3 ? (t.boundary = 48, t.storage = 48) : e.isMatrix4 ? (t.boundary = 64, t.storage = 64) : e.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", e), t
    }

    function u(t) {
      const n = t.target;
      n.removeEventListener("dispose", u);
      const r = o.indexOf(n.__bindingPointIndex);
      o.splice(r, 1), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id]
    }
    return {
      bind: function (e, t) {
        const n = t.program;
        r.uniformBlockBinding(e, n)
      },
      update: function (n, h) {
        let d = i[n.id];
        void 0 === d && (! function (e) {
          const t = e.uniforms;
          let n = 0;
          const r = 16;
          let i = 0;
          for (let e = 0, a = t.length; e < a; e++) {
            const a = t[e],
              o = {
                boundary: 0,
                storage: 0
              },
              s = Array.isArray(a.value) ? a.value : [a.value];
            for (let e = 0, t = s.length; e < t; e++) {
              const t = c(s[e]);
              o.boundary += t.boundary, o.storage += t.storage
            }
            if (a.__data = new Float32Array(o.storage / Float32Array.BYTES_PER_ELEMENT), a.__offset = n, e > 0) {
              i = n % r;
              0 !== i && r - i - o.boundary < 0 && (n += r - i, a.__offset = n)
            }
            n += o.storage
          }
          i = n % r, i > 0 && (n += r - i);
          e.__size = n, e.__cache = {}
        }(n), d = function (t) {
          const n = function () {
            for (let e = 0; e < s; e++)
              if (-1 === o.indexOf(e)) return o.push(e), e;
            return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0
          }();
          t.__bindingPointIndex = n;
          const r = e.createBuffer(),
            i = t.__size,
            a = t.usage;
          return e.bindBuffer(35345, r), e.bufferData(35345, i, a), e.bindBuffer(35345, null), e.bindBufferBase(35345, n, r), r
        }(n), i[n.id] = d, n.addEventListener("dispose", u));
        const p = h.program;
        r.updateUBOMapping(n, p);
        const f = t.render.frame;
        a[n.id] !== f && (! function (t) {
          const n = i[t.id],
            r = t.uniforms,
            a = t.__cache;
          e.bindBuffer(35345, n);
          for (let t = 0, n = r.length; t < n; t++) {
            const n = r[t];
            if (!0 === l(n, t, a)) {
              const t = n.__offset,
                r = Array.isArray(n.value) ? n.value : [n.value];
              let i = 0;
              for (let a = 0; a < r.length; a++) {
                const o = r[a],
                  s = c(o);
                "number" == typeof o ? (n.__data[0] = o, e.bufferSubData(35345, t + i, n.__data)) : o.isMatrix3 ? (n.__data[0] = o.elements[0], n.__data[1] = o.elements[1], n.__data[2] = o.elements[2], n.__data[3] = o.elements[0], n.__data[4] = o.elements[3], n.__data[5] = o.elements[4], n.__data[6] = o.elements[5], n.__data[7] = o.elements[0], n.__data[8] = o.elements[6], n.__data[9] = o.elements[7], n.__data[10] = o.elements[8], n.__data[11] = o.elements[0]) : (o.toArray(n.__data, i), i += s.storage / Float32Array.BYTES_PER_ELEMENT)
              }
              e.bufferSubData(35345, t, n.__data)
            }
          }
          e.bindBuffer(35345, null)
        }(n), a[n.id] = f)
      },
      dispose: function () {
        for (const t in i) e.deleteBuffer(i[t]);
        o = [], i = {}, a = {}
      }
    }
  }

  function CA() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.isWebGLRenderer = !0;
    const t = void 0 !== e.canvas ? e.canvas : function () {
        const e = Jx("canvas");
        return e.style.display = "block", e
      }(),
      n = void 0 !== e.context ? e.context : null,
      r = void 0 === e.depth || e.depth,
      i = void 0 === e.stencil || e.stencil,
      a = void 0 !== e.antialias && e.antialias,
      o = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
      s = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
      l = void 0 !== e.powerPreference ? e.powerPreference : "default",
      c = void 0 !== e.failIfMajorPerformanceCaveat && e.failIfMajorPerformanceCaveat;
    let u;
    u = null !== n ? n.getContextAttributes().alpha : void 0 !== e.alpha && e.alpha;
    let h = null,
      d = null;
    const p = [],
      f = [];
    this.domElement = t, this.debug = {
      checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = _m, this.physicallyCorrectLights = !1, this.toneMapping = Qp, this.toneMappingExposure = 1;
    const m = this;
    let g = !1,
      v = 0,
      _ = 0,
      y = null,
      b = -1,
      x = null;
    const S = new gS,
      M = new gS;
    let w = null,
      T = t.width,
      E = t.height,
      A = 1,
      C = null,
      L = null;
    const R = new gS(0, 0, T, E),
      P = new gS(0, 0, T, E);
    let D = !1;
    const N = new Bw;
    let O = !1,
      I = !1,
      U = null;
    const k = new sM,
      z = new Yx,
      F = new xS,
      B = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0
      };

    function H() {
      return null === y ? A : 1
    }
    let G, V, W, j, q, X, Y, Z, K, $, J, Q, ee, te, ne, re, ie, ae, oe, se, le, ce, ue, he, de = n;

    function pe(e, n) {
      for (let r = 0; r < e.length; r++) {
        const i = e[r],
          a = t.getContext(i, n);
        if (null !== a) return a
      }
      return null
    }
    try {
      const e = {
        alpha: !0,
        depth: r,
        stencil: i,
        antialias: a,
        premultipliedAlpha: o,
        preserveDrawingBuffer: s,
        powerPreference: l,
        failIfMajorPerformanceCaveat: c
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r".concat(lp)), t.addEventListener("webglcontextlost", ge, !1), t.addEventListener("webglcontextrestored", ve, !1), t.addEventListener("webglcontextcreationerror", _e, !1), null === de) {
        const t = ["webgl2", "webgl", "experimental-webgl"];
        if (!0 === m.isWebGL1Renderer && t.shift(), de = pe(t, e), null === de) throw pe(t) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
      }
      void 0 === de.getShaderPrecisionFormat && (de.getShaderPrecisionFormat = function () {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        }
      })
    } catch (e) {
      throw console.error("THREE.WebGLRenderer: " + e.message), e
    }

    function fe() {
      G = new MT(de), V = new iT(de, G, e), G.init(V), ce = new yA(de, G, V), W = new vA(de, G, V), j = new ET, q = new tA, X = new _A(de, G, W, q, V, ce, j), Y = new oT(m), Z = new ST(m), K = new Gw(de, V), ue = new nT(de, G, K, V), $ = new wT(de, K, j, ue), J = new RT(de, $, K, j), oe = new LT(de, V, X), re = new aT(q), Q = new eA(m, Y, Z, G, V, ue, re), ee = new EA(m, q), te = new aA, ne = new hA(G, V), ae = new tT(m, Y, Z, W, J, u, o), ie = new gA(m, J, V), he = new AA(de, j, V, W), se = new rT(de, G, j, V), le = new TT(de, G, j, V), j.programs = Q.programs, m.capabilities = V, m.extensions = G, m.properties = q, m.renderLists = te, m.shadowMap = ie, m.state = W, m.info = j
    }
    fe();
    const me = new TA(m, de);

    function ge(e) {
      e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), g = !0
    }

    function ve() {
      console.log("THREE.WebGLRenderer: Context Restored."), g = !1;
      const e = j.autoReset,
        t = ie.enabled,
        n = ie.autoUpdate,
        r = ie.needsUpdate,
        i = ie.type;
      fe(), j.autoReset = e, ie.enabled = t, ie.autoUpdate = n, ie.needsUpdate = r, ie.type = i
    }

    function _e(e) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage)
    }

    function ye(e) {
      const t = e.target;
      t.removeEventListener("dispose", ye),
        function (e) {
          (function (e) {
            const t = q.get(e).programs;
            void 0 !== t && (t.forEach((function (e) {
              Q.releaseProgram(e)
            })), e.isShaderMaterial && Q.releaseShaderCache(e))
          })(e), q.remove(e)
        }(t)
    }
    this.xr = me, this.getContext = function () {
      return de
    }, this.getContextAttributes = function () {
      return de.getContextAttributes()
    }, this.forceContextLoss = function () {
      const e = G.get("WEBGL_lose_context");
      e && e.loseContext()
    }, this.forceContextRestore = function () {
      const e = G.get("WEBGL_lose_context");
      e && e.restoreContext()
    }, this.getPixelRatio = function () {
      return A
    }, this.setPixelRatio = function (e) {
      void 0 !== e && (A = e, this.setSize(T, E, !1))
    }, this.getSize = function (e) {
      return e.set(T, E)
    }, this.setSize = function (e, n, r) {
      me.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (T = e, E = n, t.width = Math.floor(e * A), t.height = Math.floor(n * A), !1 !== r && (t.style.width = e + "px", t.style.height = n + "px"), this.setViewport(0, 0, e, n))
    }, this.getDrawingBufferSize = function (e) {
      return e.set(T * A, E * A).floor()
    }, this.setDrawingBufferSize = function (e, n, r) {
      T = e, E = n, A = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n)
    }, this.getCurrentViewport = function (e) {
      return e.copy(S)
    }, this.getViewport = function (e) {
      return e.copy(R)
    }, this.setViewport = function (e, t, n, r) {
      e.isVector4 ? R.set(e.x, e.y, e.z, e.w) : R.set(e, t, n, r), W.viewport(S.copy(R).multiplyScalar(A).floor())
    }, this.getScissor = function (e) {
      return e.copy(P)
    }, this.setScissor = function (e, t, n, r) {
      e.isVector4 ? P.set(e.x, e.y, e.z, e.w) : P.set(e, t, n, r), W.scissor(M.copy(P).multiplyScalar(A).floor())
    }, this.getScissorTest = function () {
      return D
    }, this.setScissorTest = function (e) {
      W.setScissorTest(D = e)
    }, this.setOpaqueSort = function (e) {
      C = e
    }, this.setTransparentSort = function (e) {
      L = e
    }, this.getClearColor = function (e) {
      return e.copy(ae.getClearColor())
    }, this.setClearColor = function () {
      ae.setClearColor.apply(ae, arguments)
    }, this.getClearAlpha = function () {
      return ae.getClearAlpha()
    }, this.setClearAlpha = function () {
      ae.setClearAlpha.apply(ae, arguments)
    }, this.clear = function () {
      let e = 0;
      (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (e |= 16384), (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && (e |= 256), (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]) && (e |= 1024), de.clear(e)
    }, this.clearColor = function () {
      this.clear(!0, !1, !1)
    }, this.clearDepth = function () {
      this.clear(!1, !0, !1)
    }, this.clearStencil = function () {
      this.clear(!1, !1, !0)
    }, this.dispose = function () {
      t.removeEventListener("webglcontextlost", ge, !1), t.removeEventListener("webglcontextrestored", ve, !1), t.removeEventListener("webglcontextcreationerror", _e, !1), te.dispose(), ne.dispose(), q.dispose(), Y.dispose(), Z.dispose(), J.dispose(), ue.dispose(), he.dispose(), Q.dispose(), me.dispose(), me.removeEventListener("sessionstart", xe), me.removeEventListener("sessionend", Se), U && (U.dispose(), U = null), Me.stop()
    }, this.renderBufferDirect = function (e, t, n, r, i, a) {
      null === t && (t = B);
      const o = i.isMesh && i.matrixWorld.determinant() < 0,
        s = function (e, t, n, r, i) {
          !0 !== t.isScene && (t = B);
          X.resetTextureUnits();
          const a = t.fog,
            o = r.isMeshStandardMaterial ? t.environment : null,
            s = null === y ? m.outputEncoding : !0 === y.isXRRenderTarget ? y.texture.encoding : _m,
            l = (r.isMeshStandardMaterial ? Z : Y).get(r.envMap || o),
            c = !0 === r.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize,
            u = !!r.normalMap && !!n.attributes.tangent,
            h = !!n.morphAttributes.position,
            p = !!n.morphAttributes.normal,
            f = !!n.morphAttributes.color,
            g = r.toneMapped ? m.toneMapping : Qp,
            v = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color,
            _ = void 0 !== v ? v.length : 0,
            S = q.get(r),
            M = d.state.lights;
          if (!0 === O && (!0 === I || e !== x)) {
            const t = e === x && r.id === b;
            re.setState(r, e, t)
          }
          let w = !1;
          r.version === S.__version ? S.needsLights && S.lightsStateVersion !== M.state.version || S.outputEncoding !== s || i.isInstancedMesh && !1 === S.instancing ? w = !0 : i.isInstancedMesh || !0 !== S.instancing ? i.isSkinnedMesh && !1 === S.skinning ? w = !0 : i.isSkinnedMesh || !0 !== S.skinning ? S.envMap !== l || !0 === r.fog && S.fog !== a ? w = !0 : void 0 === S.numClippingPlanes || S.numClippingPlanes === re.numPlanes && S.numIntersection === re.numIntersection ? (S.vertexAlphas !== c || S.vertexTangents !== u || S.morphTargets !== h || S.morphNormals !== p || S.morphColors !== f || S.toneMapping !== g || !0 === V.isWebGL2 && S.morphTargetsCount !== _) && (w = !0) : w = !0 : w = !0 : w = !0 : (w = !0, S.__version = r.version);
          let T = S.currentProgram;
          !0 === w && (T = Ce(r, t, i));
          let C = !1,
            L = !1,
            R = !1;
          const P = T.getUniforms(),
            D = S.uniforms;
          W.useProgram(T.program) && (C = !0, L = !0, R = !0);
          r.id !== b && (b = r.id, L = !0);
          if (C || x !== e) {
            if (P.setValue(de, "projectionMatrix", e.projectionMatrix), V.logarithmicDepthBuffer && P.setValue(de, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), x !== e && (x = e, L = !0, R = !0), r.isShaderMaterial || r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshStandardMaterial || r.envMap) {
              const t = P.map.cameraPosition;
              void 0 !== t && t.setValue(de, F.setFromMatrixPosition(e.matrixWorld))
            }(r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && P.setValue(de, "isOrthographic", !0 === e.isOrthographicCamera), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial || r.isShadowMaterial || i.isSkinnedMesh) && P.setValue(de, "viewMatrix", e.matrixWorldInverse)
          }
          if (i.isSkinnedMesh) {
            P.setOptional(de, i, "bindMatrix"), P.setOptional(de, i, "bindMatrixInverse");
            const e = i.skeleton;
            e && (V.floatVertexTextures ? (null === e.boneTexture && e.computeBoneTexture(), P.setValue(de, "boneTexture", e.boneTexture, X), P.setValue(de, "boneTextureSize", e.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
          }
          const N = n.morphAttributes;
          (void 0 !== N.position || void 0 !== N.normal || void 0 !== N.color && !0 === V.isWebGL2) && oe.update(i, n, r, T);
          (L || S.receiveShadow !== i.receiveShadow) && (S.receiveShadow = i.receiveShadow, P.setValue(de, "receiveShadow", i.receiveShadow));
          r.isMeshGouraudMaterial && null !== r.envMap && (D.envMap.value = l, D.flipEnvMap.value = l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1);
          L && (P.setValue(de, "toneMappingExposure", m.toneMappingExposure), S.needsLights && (z = R, (k = D).ambientLightColor.needsUpdate = z, k.lightProbe.needsUpdate = z, k.directionalLights.needsUpdate = z, k.directionalLightShadows.needsUpdate = z, k.pointLights.needsUpdate = z, k.pointLightShadows.needsUpdate = z, k.spotLights.needsUpdate = z, k.spotLightShadows.needsUpdate = z, k.rectAreaLights.needsUpdate = z, k.hemisphereLights.needsUpdate = z), a && !0 === r.fog && ee.refreshFogUniforms(D, a), ee.refreshMaterialUniforms(D, r, A, E, U), OE.upload(de, S.uniformsList, D, X));
          var k, z;
          r.isShaderMaterial && !0 === r.uniformsNeedUpdate && (OE.upload(de, S.uniformsList, D, X), r.uniformsNeedUpdate = !1);
          r.isSpriteMaterial && P.setValue(de, "center", i.center);
          if (P.setValue(de, "modelViewMatrix", i.modelViewMatrix), P.setValue(de, "normalMatrix", i.normalMatrix), P.setValue(de, "modelMatrix", i.matrixWorld), r.isShaderMaterial || r.isRawShaderMaterial) {
            const e = r.uniformsGroups;
            for (let t = 0, n = e.length; t < n; t++)
              if (V.isWebGL2) {
                const n = e[t];
                he.update(n, T), he.bind(n, T)
              } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")
          }
          return T
        }(e, t, n, r, i);
      W.setMaterial(r, o);
      let l = n.index,
        c = 1;
      !0 === r.wireframe && (l = $.getWireframeAttribute(n), c = 2);
      const u = n.drawRange,
        h = n.attributes.position;
      let p = u.start * c,
        f = (u.start + u.count) * c;
      null !== a && (p = Math.max(p, a.start * c), f = Math.min(f, (a.start + a.count) * c)), null !== l ? (p = Math.max(p, 0), f = Math.min(f, l.count)) : null != h && (p = Math.max(p, 0), f = Math.min(f, h.count));
      const g = f - p;
      if (g < 0 || g === 1 / 0) return;
      let v;
      ue.setup(i, r, s, n, l);
      let _ = se;
      if (null !== l && (v = K.get(l), _ = le, _.setIndex(v)), i.isMesh) !0 === r.wireframe ? (W.setLineWidth(r.wireframeLinewidth * H()), _.setMode(1)) : _.setMode(4);
      else if (i.isLine) {
        let e = r.linewidth;
        void 0 === e && (e = 1), W.setLineWidth(e * H()), i.isLineSegments ? _.setMode(1) : i.isLineLoop ? _.setMode(2) : _.setMode(3)
      } else i.isPoints ? _.setMode(0) : i.isSprite && _.setMode(4);
      if (i.isInstancedMesh) _.renderInstances(p, g, i.count);
      else if (n.isInstancedBufferGeometry) {
        const e = void 0 !== n._maxInstanceCount ? n._maxInstanceCount : 1 / 0,
          t = Math.min(n.instanceCount, e);
        _.renderInstances(p, g, t)
      } else _.render(p, g)
    }, this.compile = function (e, t) {
      function n(e, t, n) {
        !0 === e.transparent && e.side === yp && !1 === e.forceSinglePass ? (e.side = _p, e.needsUpdate = !0, Ce(e, t, n), e.side = vp, e.needsUpdate = !0, Ce(e, t, n), e.side = yp) : Ce(e, t, n)
      }
      d = ne.get(e), d.init(), f.push(d), e.traverseVisible((function (e) {
        e.isLight && e.layers.test(t.layers) && (d.pushLight(e), e.castShadow && d.pushShadow(e))
      })), d.setupLights(m.physicallyCorrectLights), e.traverse((function (t) {
        const r = t.material;
        if (r)
          if (Array.isArray(r))
            for (let i = 0; i < r.length; i++) {
              n(r[i], e, t)
            } else n(r, e, t)
      })), f.pop(), d = null
    };
    let be = null;

    function xe() {
      Me.stop()
    }

    function Se() {
      Me.start()
    }
    const Me = new Hw;

    function we(e, t, n, r) {
      if (!1 === e.visible) return;
      if (e.layers.test(t.layers))
        if (e.isGroup) n = e.renderOrder;
        else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
      else if (e.isLight) d.pushLight(e), e.castShadow && d.pushShadow(e);
      else if (e.isSprite) {
        if (!e.frustumCulled || N.intersectsSprite(e)) {
          r && F.setFromMatrixPosition(e.matrixWorld).applyMatrix4(k);
          const t = J.update(e),
            i = e.material;
          i.visible && h.push(e, t, i, n, F.z, null)
        }
      } else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.frame !== j.render.frame && (e.skeleton.update(), e.skeleton.frame = j.render.frame), !e.frustumCulled || N.intersectsObject(e))) {
        r && F.setFromMatrixPosition(e.matrixWorld).applyMatrix4(k);
        const t = J.update(e),
          i = e.material;
        if (Array.isArray(i)) {
          const r = t.groups;
          for (let a = 0, o = r.length; a < o; a++) {
            const o = r[a],
              s = i[o.materialIndex];
            s && s.visible && h.push(e, t, s, n, F.z, o)
          }
        } else i.visible && h.push(e, t, i, n, F.z, null)
      }
      const i = e.children;
      for (let e = 0, a = i.length; e < a; e++) we(i[e], t, n, r)
    }

    function Te(e, t, n, r) {
      const i = e.opaque,
        o = e.transmissive,
        s = e.transparent;
      d.setupLightsView(n), !0 === O && re.setGlobalState(m.clippingPlanes, n), o.length > 0 && function (e, t, n) {
        const r = V.isWebGL2;
        null === U && (U = new vS(1, 1, {
          generateMipmaps: !0,
          type: G.has("EXT_color_buffer_half_float") ? Af : bf,
          minFilter: yf,
          samples: r && !0 === a ? 4 : 0
        }));
        m.getDrawingBufferSize(z), r ? U.setSize(z.x, z.y) : U.setSize(jx(z.x), jx(z.y));
        const i = m.getRenderTarget();
        m.setRenderTarget(U), m.clear();
        const o = m.toneMapping;
        m.toneMapping = Qp, Ee(e, t, n), m.toneMapping = o, X.updateMultisampleRenderTarget(U), X.updateRenderTargetMipmap(U), m.setRenderTarget(i)
      }(i, t, n), r && W.viewport(S.copy(r)), i.length > 0 && Ee(i, t, n), o.length > 0 && Ee(o, t, n), s.length > 0 && Ee(s, t, n), W.buffers.depth.setTest(!0), W.buffers.depth.setMask(!0), W.buffers.color.setMask(!0), W.setPolygonOffset(!1)
    }

    function Ee(e, t, n) {
      const r = !0 === t.isScene ? t.overrideMaterial : null;
      for (let i = 0, a = e.length; i < a; i++) {
        const a = e[i],
          o = a.object,
          s = a.geometry,
          l = null === r ? a.material : r,
          c = a.group;
        o.layers.test(n.layers) && Ae(o, t, n, s, l, c)
      }
    }

    function Ae(e, t, n, r, i, a) {
      e.onBeforeRender(m, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(m, t, n, r, e, a), !0 === i.transparent && i.side === yp && !1 === i.forceSinglePass ? (i.side = _p, i.needsUpdate = !0, m.renderBufferDirect(n, t, r, i, e, a), i.side = vp, i.needsUpdate = !0, m.renderBufferDirect(n, t, r, i, e, a), i.side = yp) : m.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(m, t, n, r, i, a)
    }

    function Ce(e, t, n) {
      !0 !== t.isScene && (t = B);
      const r = q.get(e),
        i = d.state.lights,
        a = d.state.shadowsArray,
        o = i.state.version,
        s = Q.getParameters(e, i.state, a, t, n),
        l = Q.getProgramCacheKey(s);
      let c = r.programs;
      r.environment = e.isMeshStandardMaterial ? t.environment : null, r.fog = t.fog, r.envMap = (e.isMeshStandardMaterial ? Z : Y).get(e.envMap || r.environment), void 0 === c && (e.addEventListener("dispose", ye), c = new Map, r.programs = c);
      let u = c.get(l);
      if (void 0 !== u) {
        if (r.currentProgram === u && r.lightsStateVersion === o) return Le(e, s), u
      } else s.uniforms = Q.getUniforms(e), e.onBuild(n, s, m), e.onBeforeCompile(s, m), u = Q.acquireProgram(s, l), c.set(l, u), r.uniforms = s.uniforms;
      const h = r.uniforms;
      (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (h.clippingPlanes = re.uniform), Le(e, s), r.needsLights = function (e) {
        return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights
      }(e), r.lightsStateVersion = o, r.needsLights && (h.ambientLightColor.value = i.state.ambient, h.lightProbe.value = i.state.probe, h.directionalLights.value = i.state.directional, h.directionalLightShadows.value = i.state.directionalShadow, h.spotLights.value = i.state.spot, h.spotLightShadows.value = i.state.spotShadow, h.rectAreaLights.value = i.state.rectArea, h.ltc_1.value = i.state.rectAreaLTC1, h.ltc_2.value = i.state.rectAreaLTC2, h.pointLights.value = i.state.point, h.pointLightShadows.value = i.state.pointShadow, h.hemisphereLights.value = i.state.hemi, h.directionalShadowMap.value = i.state.directionalShadowMap, h.directionalShadowMatrix.value = i.state.directionalShadowMatrix, h.spotShadowMap.value = i.state.spotShadowMap, h.spotLightMatrix.value = i.state.spotLightMatrix, h.spotLightMap.value = i.state.spotLightMap, h.pointShadowMap.value = i.state.pointShadowMap, h.pointShadowMatrix.value = i.state.pointShadowMatrix);
      const p = u.getUniforms(),
        f = OE.seqWithValue(p.seq, h);
      return r.currentProgram = u, r.uniformsList = f, u
    }

    function Le(e, t) {
      const n = q.get(e);
      n.outputEncoding = t.outputEncoding, n.instancing = t.instancing, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping
    }
    Me.setAnimationLoop((function (e) {
      be && be(e)
    })), "undefined" != typeof self && Me.setContext(self), this.setAnimationLoop = function (e) {
      be = e, me.setAnimationLoop(e), null === e ? Me.stop() : Me.start()
    }, me.addEventListener("sessionstart", xe), me.addEventListener("sessionend", Se), this.render = function (e, t) {
      if (void 0 !== t && !0 !== t.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      if (!0 === g) return;
      !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), null === t.parent && !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(), !0 === me.enabled && !0 === me.isPresenting && (!0 === me.cameraAutoUpdate && me.updateCamera(t), t = me.getCamera()), !0 === e.isScene && e.onBeforeRender(m, e, t, y), d = ne.get(e, f.length), d.init(), f.push(d), k.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), N.setFromProjectionMatrix(k), I = this.localClippingEnabled, O = re.init(this.clippingPlanes, I), h = te.get(e, p.length), h.init(), p.push(h), we(e, t, 0, m.sortObjects), h.finish(), !0 === m.sortObjects && h.sort(C, L), !0 === O && re.beginShadows();
      const n = d.state.shadowsArray;
      if (ie.render(n, e, t), !0 === O && re.endShadows(), !0 === this.info.autoReset && this.info.reset(), ae.render(h, e), d.setupLights(m.physicallyCorrectLights), t.isArrayCamera) {
        const n = t.cameras;
        for (let t = 0, r = n.length; t < r; t++) {
          const r = n[t];
          Te(h, e, r, r.viewport)
        }
      } else Te(h, e, t);
      null !== y && (X.updateMultisampleRenderTarget(y), X.updateRenderTargetMipmap(y)), !0 === e.isScene && e.onAfterRender(m, e, t), ue.resetDefaultState(), b = -1, x = null, f.pop(), d = f.length > 0 ? f[f.length - 1] : null, p.pop(), h = p.length > 0 ? p[p.length - 1] : null
    }, this.getActiveCubeFace = function () {
      return v
    }, this.getActiveMipmapLevel = function () {
      return _
    }, this.getRenderTarget = function () {
      return y
    }, this.setRenderTargetTextures = function (e, t, n) {
      q.get(e.texture).__webglTexture = t, q.get(e.depthTexture).__webglTexture = n;
      const r = q.get(e);
      r.__hasExternalTextures = !0, r.__hasExternalTextures && (r.__autoAllocateDepthBuffer = void 0 === n, r.__autoAllocateDepthBuffer || !0 === G.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), r.__useRenderToTexture = !1))
    }, this.setRenderTargetFramebuffer = function (e, t) {
      const n = q.get(e);
      n.__webglFramebuffer = t, n.__useDefaultFramebuffer = void 0 === t
    }, this.setRenderTarget = function (e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      y = e, v = t, _ = n;
      let r = !0,
        i = null,
        a = !1,
        o = !1;
      if (e) {
        const n = q.get(e);
        void 0 !== n.__useDefaultFramebuffer ? (W.bindFramebuffer(36160, null), r = !1) : void 0 === n.__webglFramebuffer ? X.setupRenderTarget(e) : n.__hasExternalTextures && X.rebindTextures(e, q.get(e.texture).__webglTexture, q.get(e.depthTexture).__webglTexture);
        const s = e.texture;
        (s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) && (o = !0);
        const l = q.get(e).__webglFramebuffer;
        e.isWebGLCubeRenderTarget ? (i = l[t], a = !0) : i = V.isWebGL2 && e.samples > 0 && !1 === X.useMultisampledRTT(e) ? q.get(e).__webglMultisampledFramebuffer : l, S.copy(e.viewport), M.copy(e.scissor), w = e.scissorTest
      } else S.copy(R).multiplyScalar(A).floor(), M.copy(P).multiplyScalar(A).floor(), w = D;
      if (W.bindFramebuffer(36160, i) && V.drawBuffers && r && W.drawBuffers(e, i), W.viewport(S), W.scissor(M), W.setScissorTest(w), a) {
        const r = q.get(e.texture);
        de.framebufferTexture2D(36160, 36064, 34069 + t, r.__webglTexture, n)
      } else if (o) {
        const r = q.get(e.texture),
          i = t || 0;
        de.framebufferTextureLayer(36160, 36064, r.__webglTexture, n || 0, i)
      }
      b = -1
    }, this.readRenderTargetPixels = function (e, t, n, r, i, a, o) {
      if (!e || !e.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let s = q.get(e).__webglFramebuffer;
      if (e.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]), s) {
        W.bindFramebuffer(36160, s);
        try {
          const o = e.texture,
            s = o.format,
            l = o.type;
          if (s !== Df && ce.convert(s) !== de.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          const c = l === Af && (G.has("EXT_color_buffer_half_float") || V.isWebGL2 && G.has("EXT_color_buffer_float"));
          if (!(l === bf || ce.convert(l) === de.getParameter(35738) || l === Ef && (V.isWebGL2 || G.has("OES_texture_float") || G.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && de.readPixels(t, n, r, i, ce.convert(s), ce.convert(l), a)
        } finally {
          const e = null !== y ? q.get(y).__webglFramebuffer : null;
          W.bindFramebuffer(36160, e)
        }
      }
    }, this.copyFramebufferToTexture = function (e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const r = Math.pow(2, -n),
        i = Math.floor(t.image.width * r),
        a = Math.floor(t.image.height * r);
      X.setTexture2D(t, 0), de.copyTexSubImage2D(3553, n, 0, 0, e.x, e.y, i, a), W.unbindTexture()
    }, this.copyTextureToTexture = function (e, t, n) {
      let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const i = t.image.width,
        a = t.image.height,
        o = ce.convert(n.format),
        s = ce.convert(n.type);
      X.setTexture2D(n, 0), de.pixelStorei(37440, n.flipY), de.pixelStorei(37441, n.premultiplyAlpha), de.pixelStorei(3317, n.unpackAlignment), t.isDataTexture ? de.texSubImage2D(3553, r, e.x, e.y, i, a, o, s, t.image.data) : t.isCompressedTexture ? de.compressedTexSubImage2D(3553, r, e.x, e.y, t.mipmaps[0].width, t.mipmaps[0].height, o, t.mipmaps[0].data) : de.texSubImage2D(3553, r, e.x, e.y, o, s, t.image), 0 === r && n.generateMipmaps && de.generateMipmap(3553), W.unbindTexture()
    }, this.copyTextureToTexture3D = function (e, t, n, r) {
      let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (m.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      const a = e.max.x - e.min.x + 1,
        o = e.max.y - e.min.y + 1,
        s = e.max.z - e.min.z + 1,
        l = ce.convert(r.format),
        c = ce.convert(r.type);
      let u;
      if (r.isData3DTexture) X.setTexture3D(r, 0), u = 32879;
      else {
        if (!r.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        X.setTexture2DArray(r, 0), u = 35866
      }
      de.pixelStorei(37440, r.flipY), de.pixelStorei(37441, r.premultiplyAlpha), de.pixelStorei(3317, r.unpackAlignment);
      const h = de.getParameter(3314),
        d = de.getParameter(32878),
        p = de.getParameter(3316),
        f = de.getParameter(3315),
        g = de.getParameter(32877),
        v = n.isCompressedTexture ? n.mipmaps[0] : n.image;
      de.pixelStorei(3314, v.width), de.pixelStorei(32878, v.height), de.pixelStorei(3316, e.min.x), de.pixelStorei(3315, e.min.y), de.pixelStorei(32877, e.min.z), n.isDataTexture || n.isData3DTexture ? de.texSubImage3D(u, i, t.x, t.y, t.z, a, o, s, l, c, v.data) : n.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), de.compressedTexSubImage3D(u, i, t.x, t.y, t.z, a, o, s, l, v.data)) : de.texSubImage3D(u, i, t.x, t.y, t.z, a, o, s, l, c, v), de.pixelStorei(3314, h), de.pixelStorei(32878, d), de.pixelStorei(3316, p), de.pixelStorei(3315, f), de.pixelStorei(32877, g), 0 === i && r.generateMipmaps && de.generateMipmap(u), W.unbindTexture()
    }, this.initTexture = function (e) {
      e.isCubeTexture ? X.setTextureCube(e, 0) : e.isData3DTexture ? X.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? X.setTexture2DArray(e, 0) : X.setTexture2D(e, 0), W.unbindTexture()
    }, this.resetState = function () {
      v = 0, _ = 0, y = null, W.reset(), ue.reset()
    }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }))
  }
  class LA {
    constructor(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
      this.isFog = !0, this.name = "", this.color = new cS(e), this.near = t, this.far = n
    }
    clone() {
      return new LA(this.color, this.near, this.far)
    }
    toJSON() {
      return {
        type: "Fog",
        color: this.color.getHex(),
        near: this.near,
        far: this.far
      }
    }
  }
  class RA extends DM {
    constructor() {
      super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
      }))
    }
    copy(e, t) {
      return super.copy(e, t), null !== e.background && (this.background = e.background.clone()), null !== e.environment && (this.environment = e.environment.clone()), null !== e.fog && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return null !== this.fog && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (t.object.backgroundIntensity = this.backgroundIntensity), t
    }
    get autoUpdate() {
      return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate
    }
    set autoUpdate(e) {
      console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e
    }
  }
  class PA extends mS {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      super(null, arguments.length > 5 ? arguments[5] : void 0, arguments.length > 6 ? arguments[6] : void 0, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : ff, arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : ff, arguments.length > 3 ? arguments[3] : void 0, arguments.length > 4 ? arguments[4] : void 0, arguments.length > 10 ? arguments[10] : void 0, arguments.length > 11 ? arguments[11] : void 0), this.isDataTexture = !0, this.image = {
        data: e,
        width: t,
        height: n
      }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }
  }
  class DA extends mS {
    constructor(e, t, n, r, i, a, o, s, l) {
      super(e, t, n, r, i, a, o, s, l), this.isVideoTexture = !0, this.minFilter = void 0 !== a ? a : vf, this.magFilter = void 0 !== i ? i : vf, this.generateMipmaps = !1;
      const c = this;
      "requestVideoFrameCallback" in e && e.requestVideoFrameCallback((function t() {
        c.needsUpdate = !0, e.requestVideoFrameCallback(t)
      }))
    }
    clone() {
      return new this.constructor(this.image).copy(this)
    }
    update() {
      const e = this.image;
      !1 === "requestVideoFrameCallback" in e && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
    }
  }
  class NA extends ow {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
        s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 2 * Math.PI;
      super(), this.type = "CylinderGeometry", this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: r,
        heightSegments: i,
        openEnded: a,
        thetaStart: o,
        thetaLength: s
      };
      const l = this;
      r = Math.floor(r), i = Math.floor(i);
      const c = [],
        u = [],
        h = [],
        d = [];
      let p = 0;
      const f = [],
        m = n / 2;
      let g = 0;

      function v(n) {
        const i = p,
          a = new Yx,
          f = new xS;
        let v = 0;
        const _ = !0 === n ? e : t,
          y = !0 === n ? 1 : -1;
        for (let e = 1; e <= r; e++) u.push(0, m * y, 0), h.push(0, y, 0), d.push(.5, .5), p++;
        const b = p;
        for (let e = 0; e <= r; e++) {
          const t = e / r * s + o,
            n = Math.cos(t),
            i = Math.sin(t);
          f.x = _ * i, f.y = m * y, f.z = _ * n, u.push(f.x, f.y, f.z), h.push(0, y, 0), a.x = .5 * n + .5, a.y = .5 * i * y + .5, d.push(a.x, a.y), p++
        }
        for (let e = 0; e < r; e++) {
          const t = i + e,
            r = b + e;
          !0 === n ? c.push(r, r + 1, t) : c.push(r + 1, r, t), v += 3
        }
        l.addGroup(g, v, !0 === n ? 1 : 2), g += v
      }! function () {
        const a = new xS,
          v = new xS;
        let _ = 0;
        const y = (t - e) / n;
        for (let l = 0; l <= i; l++) {
          const c = [],
            g = l / i,
            _ = g * (t - e) + e;
          for (let e = 0; e <= r; e++) {
            const t = e / r,
              i = t * s + o,
              l = Math.sin(i),
              f = Math.cos(i);
            v.x = _ * l, v.y = -g * n + m, v.z = _ * f, u.push(v.x, v.y, v.z), a.set(l, y, f).normalize(), h.push(a.x, a.y, a.z), d.push(t, 1 - g), c.push(p++)
          }
          f.push(c)
        }
        for (let e = 0; e < r; e++)
          for (let t = 0; t < i; t++) {
            const n = f[t][e],
              r = f[t + 1][e],
              i = f[t + 1][e + 1],
              a = f[t][e + 1];
            c.push(n, r, a), c.push(r, i, a), _ += 6
          }
        l.addGroup(g, _, 0), g += _
      }(), !1 === a && (e > 0 && v(!0), t > 0 && v(!1)), this.setIndex(c), this.setAttribute("position", new JM(u, 3)), this.setAttribute("normal", new JM(h, 3)), this.setAttribute("uv", new JM(d, 2))
    }
    static fromJSON(e) {
      return new NA(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength)
    }
  }
  class OA extends jM {
    constructor(e) {
      super(), this.isMeshStandardMaterial = !0, this.defines = {
        STANDARD: ""
      }, this.type = "MeshStandardMaterial", this.color = new cS(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new cS(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = xm, this.normalScale = new Yx(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e)
    }
    copy(e) {
      return super.copy(e), this.defines = {
        STANDARD: ""
      }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this
    }
  }
  const IA = {
    enabled: !1,
    files: {},
    add: function (e, t) {
      !1 !== this.enabled && (this.files[e] = t)
    },
    get: function (e) {
      if (!1 !== this.enabled) return this.files[e]
    },
    remove: function (e) {
      delete this.files[e]
    },
    clear: function () {
      this.files = {}
    }
  };
  class UA {
    constructor(e, t, n) {
      const r = this;
      let i, a = !1,
        o = 0,
        s = 0;
      const l = [];
      this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function (e) {
        s++, !1 === a && void 0 !== r.onStart && r.onStart(e, o, s), a = !0
      }, this.itemEnd = function (e) {
        o++, void 0 !== r.onProgress && r.onProgress(e, o, s), o === s && (a = !1, void 0 !== r.onLoad && r.onLoad())
      }, this.itemError = function (e) {
        void 0 !== r.onError && r.onError(e)
      }, this.resolveURL = function (e) {
        return i ? i(e) : e
      }, this.setURLModifier = function (e) {
        return i = e, this
      }, this.addHandler = function (e, t) {
        return l.push(e, t), this
      }, this.removeHandler = function (e) {
        const t = l.indexOf(e);
        return -1 !== t && l.splice(t, 2), this
      }, this.getHandler = function (e) {
        for (let t = 0, n = l.length; t < n; t += 2) {
          const n = l[t],
            r = l[t + 1];
          if (n.global && (n.lastIndex = 0), n.test(e)) return r
        }
        return null
      }
    }
  }
  const kA = new UA;
  class zA {
    constructor(e) {
      this.manager = void 0 !== e ? e : kA, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
    }
    load() {}
    loadAsync(e, t) {
      const n = this;
      return new Promise((function (r, i) {
        n.load(e, r, t, i)
      }))
    }
    parse() {}
    setCrossOrigin(e) {
      return this.crossOrigin = e, this
    }
    setWithCredentials(e) {
      return this.withCredentials = e, this
    }
    setPath(e) {
      return this.path = e, this
    }
    setResourcePath(e) {
      return this.resourcePath = e, this
    }
    setRequestHeader(e) {
      return this.requestHeader = e, this
    }
  }
  class FA extends DM {
    constructor(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      super(), this.isLight = !0, this.type = "Light", this.color = new cS(e), this.intensity = t
    }
    dispose() {}
    copy(e, t) {
      return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()), t
    }
  }
  const BA = new sM,
    HA = new xS,
    GA = new xS;
  class VA {
    constructor(e) {
      this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Yx(512, 512), this.map = null, this.mapPass = null, this.matrix = new sM, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Bw, this._frameExtents = new Yx(1, 1), this._viewportCount = 1, this._viewports = [new gS(0, 0, 1, 1)]
    }
    getViewportCount() {
      return this._viewportCount
    }
    getFrustum() {
      return this._frustum
    }
    updateMatrices(e) {
      const t = this.camera,
        n = this.matrix;
      HA.setFromMatrixPosition(e.matrixWorld), t.position.copy(HA), GA.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(GA), t.updateMatrixWorld(), BA.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(BA), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(BA)
    }
    getViewport(e) {
      return this._viewports[e]
    }
    getFrameExtents() {
      return this._frameExtents
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
    }
    copy(e) {
      return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
    }
    clone() {
      return (new this.constructor).copy(this)
    }
    toJSON() {
      const e = {};
      return 0 !== this.bias && (e.bias = this.bias), 0 !== this.normalBias && (e.normalBias = this.normalBias), 1 !== this.radius && (e.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
    }
  }
  class WA extends VA {
    constructor() {
      super(new sT(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0
    }
  }
  class jA extends FA {
    constructor(e, t) {
      super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(DM.DEFAULT_UP), this.updateMatrix(), this.target = new DM, this.shadow = new WA
    }
    dispose() {
      this.shadow.dispose()
    }
    copy(e) {
      return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
    }
  }
  class qA extends FA {
    constructor(e, t) {
      super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight"
    }
  }
  class XA {
    constructor() {
      let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }
    start() {
      this.startTime = YA(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
    }
    stop() {
      this.getElapsedTime(), this.running = !1, this.autoStart = !1
    }
    getElapsedTime() {
      return this.getDelta(), this.elapsedTime
    }
    getDelta() {
      let e = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        const t = YA();
        e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e
      }
      return e
    }
  }

  function YA() {
    return ("undefined" == typeof performance ? Date : performance).now()
  }
  class ZA {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return this.radius = e, this.phi = t, this.theta = n, this
    }
    set(e, t, n) {
      return this.radius = e, this.phi = t, this.theta = n, this
    }
    copy(e) {
      return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this
    }
    makeSafe() {
      const e = 1e-6;
      return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)), this
    }
    setFromVector3(e) {
      return this.setFromCartesianCoords(e.x, e.y, e.z)
    }
    setFromCartesianCoords(e, t, n) {
      return this.radius = Math.sqrt(e * e + t * t + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Gx(t / this.radius, -1, 1))), this
    }
    clone() {
      return (new this.constructor).copy(this)
    }
  }
  const KA = {
    depth_frag: "uniform sampler2D textureMap;\nvarying vec2 vUV;\nout vec4 outColor;\nvec4 pack_depth(const in float depth) {\n    const vec4 bit_shift = vec4(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);\n    const vec4 bit_mask = vec4(0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);\n    vec4 res = fract(depth * bit_shift);\n    res -= res.xxyz * bit_mask;\n    return res;\n}\nvoid main() {\n    vec4 pixel = texture2D(textureMap, vUV);\n    if (pixel.a < 0.5) discard;\n    outColor = pack_depth(gl_FragCoord.z);\n}\n",
    depth_vert: "varying vec2 vUV;\nvoid main() {\n    vUV = 0.75 * uv;\n    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n    gl_Position = projectionMatrix * mvPosition;\n}\n"
  };
  class $A extends ow {
    constructor() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (e, t, n) => n.set(e, t, Math.cos(e) * Math.sin(t)),
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
      super(), this.type = "ParametricGeometry", this.parameters = {
        func: e,
        slices: t,
        stacks: n
      };
      const r = [],
        i = [],
        a = [],
        o = [],
        s = 1e-5,
        l = new xS,
        c = new xS,
        u = new xS,
        h = new xS,
        d = new xS,
        p = t + 1;
      for (let r = 0; r <= n; r++) {
        const p = r / n;
        for (let n = 0; n <= t; n++) {
          const r = n / t;
          e(r, p, c), i.push(c.x, c.y, c.z), r - s >= 0 ? (e(r - s, p, u), h.subVectors(c, u)) : (e(r + s, p, u), h.subVectors(u, c)), p - s >= 0 ? (e(r, p - s, u), d.subVectors(c, u)) : (e(r, p + s, u), d.subVectors(u, c)), l.crossVectors(h, d).normalize(), a.push(l.x, l.y, l.z), o.push(r, p)
        }
      }
      for (let e = 0; e < n; e++)
        for (let n = 0; n < t; n++) {
          const t = e * p + n,
            i = e * p + n + 1,
            a = (e + 1) * p + n + 1,
            o = (e + 1) * p + n;
          r.push(t, i, o), r.push(i, a, o)
        }
      this.setIndex(r), this.setAttribute("position", new JM(i, 3)), this.setAttribute("normal", new JM(a, 3)), this.setAttribute("uv", new JM(o, 2))
    }
  }
  class JA {
    constructor(e, t) {
      this.position = e.clone(), this.previous = e.clone(), this.original = e.clone(), this.mass = t, this.inverseMass = 1 / t, this.acceleration = new xS, this.tmp = new xS
    }
    applyForce(e) {
      this.acceleration.addScaledVector(e, this.inverseMass)
    }
    integrate(e) {
      const t = this.tmp.subVectors(this.position, this.previous).multiplyScalar(.97).add(this.position).addScaledVector(this.acceleration, e);
      this.tmp = this.previous, this.previous = this.position, this.position = t, this.acceleration.set(0, 0, 0)
    }
  }
  const QA = new xS;
  class eC {
    constructor(e, t, n) {
      this.p1 = e, this.p2 = t, this.restDistance = n
    }
    resolve() {
      const e = this.p1,
        t = this.p2,
        n = this.restDistance;
      QA.subVectors(t.position, e.position);
      const r = QA.length();
      if (0 === r) return;
      const i = QA.multiplyScalar((1 - n / r) / 2);
      e.position.add(i), t.position.sub(i)
    }
  }
  class tC {
    constructor(e, t, n, r) {
      const i = n * e,
        a = n * t,
        o = [],
        s = [],
        l = (t, n) => o[t + n * (e + 1)],
        c = (e, t, n) => {
          n.set(e * i, t * a, 0)
        },
        u = new xS,
        h = r / ((t + 1) * (e + 1));
      for (let n = 0; n <= t; n++)
        for (let r = 0; r <= e; r++) c(r / e, n / t, u), o.push(new JA(u, h));
      for (let r = 0; r < t; r++)
        for (let t = 0; t < e; t++) s.push(new eC(l(t, r), l(t, r + 1), n)), s.push(new eC(l(t, r), l(t + 1, r), n));
      for (let r = e, i = 0; i < t; i++) s.push(new eC(l(r, i), l(r, i + 1), n));
      for (let r = t, i = 0; i < e; i++) s.push(new eC(l(i, r), l(i + 1, r), n));
      const d = Math.sqrt(n * n * 2);
      for (let n = 0; n < t; n++)
        for (let t = 0; t < e; t++) s.push(new eC(l(t, n), l(t + 1, n + 1), d)), s.push(new eC(l(t + 1, n), l(t, n + 1), d));
      const p = new $A(c, e, t);
      p.getAttribute("position").setUsage(35040), this.xSegments = e, this.ySegments = t, this.restDistance = n, this.width = i, this.height = a, this.particles = o, this.constraints = s, this.particleAt = l, this.geometry = p
    }
    reset() {
      const e = this.particles;
      for (let t = 0, n = e.length; t < n; t++) {
        const n = e[t];
        n.previous.copy(n.position.copy(n.original))
      }
    }
    simulate(e) {
      const t = this.particles,
        n = this.constraints,
        r = e * e;
      for (let e = 0, n = t.length; e < n; e++) t[e].integrate(r);
      for (let e = 0, t = 2; e < t; e++)
        for (let e = 0, t = n.length; e < t; e++) n[e].resolve()
    }
    render() {
      const e = this.particles,
        t = this.geometry,
        n = t.getAttribute("position"),
        r = n.array;
      for (let t = 0, n = e.length; t < n; t++) {
        const n = e[t].position,
          i = 3 * t;
        r[i] = n.x, r[i + 1] = n.y, r[i + 2] = n.z
      }
      n.needsUpdate = !0, t.computeVertexNormals()
    }
  }
  const nC = new xS;
  class rC extends eC {
    resolve() {
      const e = this.p1,
        t = this.p2,
        n = 1.2 * this.restDistance;
      nC.subVectors(e.position, t.position);
      const r = nC.length() / 1.2;
      nC.normalize();
      const i = nC.multiplyScalar(r - n);
      r > n && t.position.add(i)
    }
  }
  const iC = function (e, t, n) {
    const r = e * t,
      i = new Uint8Array(4 * r),
      a = Math.floor(255 * n.r),
      o = Math.floor(255 * n.g),
      s = Math.floor(255 * n.b);
    for (let e = 0; e < r; e++) {
      const t = 4 * e;
      i[t] = a, i[t + 1] = o, i[t + 2] = s, i[t + 3] = 255
    }
    const l = new PA(i, e, t);
    return l.needsUpdate = !0, l
  }(1, 1, new cS(16777215));
  const aC = (() => {
    const e = {
      edges: [],
      spacing: 1
    };

    function t(e, t, n, r) {
      const {
        xSegments: i,
        ySegments: a,
        particleAt: o
      } = e, {
        spacing: s
      } = r;
      switch (n) {
        case np.TOP:
          for (let e = 0; e <= i; e += s) t.push(o(e, a));
          break;
        case np.LEFT:
          for (let e = 0; e <= a; e += s) t.push(o(0, e));
          break;
        case np.BOTTOM:
          for (let e = 0; e <= i; e += s) t.push(o(e, 0));
          break;
        case np.RIGHT:
          for (let e = 0; e <= a; e += s) t.push(o(i, e))
      }
    }
    return function (n, r, i) {
      const a = Object.assign({}, e, i),
        {
          edges: o
        } = a;
      if ("string" == typeof o) t(n, r, o, a);
      else if (o && o.length)
        for (let e = 0, i = o.length; e < i; e++) t(n, r, o[e], a)
    }
  })();
  class oC {
    constructor(e) {
      const t = Object.assign({}, oC.defaults, e);
      this.cloth = function (e) {
        const {
          width: t,
          height: n,
          mass: r,
          restDistance: i
        } = e;
        return new tC(Math.max(1, Math.round(t / i)), Math.max(1, Math.round(n / i)), i, r * t * n)
      }(t), this.pins = [], this.lengthConstraints = [];
      const [n, r] = function (e, t) {
        const n = e.geometry;
        let r, i = iC;
        const a = e => (e.needsUpdate = !0, e.anisotropy = 16, e.minFilter = vf, e.magFilter = vf, e.wrapS = e.wrapT = df, e),
          o = (t, r) => {
            t.encoding = ym;
            const i = new OA({
                alphaTest: .5,
                color: 16777215,
                metalness: .08,
                roughness: .86,
                side: r,
                map: t
              }),
              a = new bw(n, i);
            return a.castShadow = !0, a.customDepthMaterial = new Aw({
              glslVersion: Em,
              uniforms: {
                textureMap: {
                  value: t
                }
              },
              vertexShader: KA.depth_vert,
              fragmentShader: KA.depth_frag
            }), a.position.set(0, -e.height, 0), a
          };
        return t && t.texture && (t.texture instanceof mS ? (i = a(t.texture), t.backSideTexture instanceof mS && (r = a(t.backSideTexture))) : console.error("FlagWaver.Flag: options.texture must be an instance of THREE.Texture.")), [o(i, r ? vp : yp), r ? o(r, _p) : null]
      }(this.cloth, t);
      this.mesh = n, this.mesh2 = r, this.object = new DM, this.object.add(this.mesh), this.mesh2 && this.object.add(this.mesh2), this.pin(t.pin)
    }
    destroy() {
      this.mesh.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.map.dispose(), this.mesh.customDepthMaterial.dispose(), this.mesh2 && (this.mesh2.material.dispose(), this.mesh2.material.map.dispose(), this.mesh2.customDepthMaterial.dispose())
    }
    pin(e) {
      aC(this.cloth, this.pins, e)
    }
    unpin() {
      this.pins = []
    }
    setLengthConstraints(e) {
      const {
        xSegments: t,
        ySegments: n,
        restDistance: r,
        particleAt: i
      } = this.cloth, a = [];
      if (e === np.LEFT)
        for (let e = 0; e <= n; e++)
          for (let n = 0; n < t; n++) a.push(new rC(i(n, e), i(n + 1, e), r));
      else if (e === np.TOP)
        for (let e = 0; e <= t; e++)
          for (let t = n; t > 0; t--) a.push(new rC(i(e, t), i(e, t - 1), r));
      this.lengthConstraints = a
    }
    reset() {
      this.cloth.reset()
    }
    simulate(e) {
      const t = this.pins,
        n = this.lengthConstraints;
      this.cloth.simulate(e);
      for (let e = 0, n = t.length; e < n; e++) {
        const n = t[e];
        n.previous.copy(n.position.copy(n.original))
      }
      for (let e = 0, t = 2; e < t; e++)
        for (let e = 0, t = n.length; e < t; e++) n[e].resolve()
    }
    render() {
      this.cloth.render()
    }
  }

  function sC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const n = null !== e[0].index,
      r = new Set(Object.keys(e[0].attributes)),
      i = new Set(Object.keys(e[0].morphAttributes)),
      a = {},
      o = {},
      s = e[0].morphTargetsRelative,
      l = new ow;
    let c = 0;
    for (let u = 0; u < e.length; ++u) {
      const h = e[u];
      let d = 0;
      if (n !== (null !== h.index)) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + u + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
      for (const e in h.attributes) {
        if (!r.has(e)) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + u + '. All geometries must have compatible attributes; make sure "' + e + '" attribute exists among all geometries, or in none of them.'), null;
        void 0 === a[e] && (a[e] = []), a[e].push(h.attributes[e]), d++
      }
      if (d !== r.size) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + u + ". Make sure all geometries have the same number of attributes."), null;
      if (s !== h.morphTargetsRelative) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + u + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
      for (const e in h.morphAttributes) {
        if (!i.has(e)) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + u + ".  .morphAttributes must be consistent throughout all geometries."), null;
        void 0 === o[e] && (o[e] = []), o[e].push(h.morphAttributes[e])
      }
      if (t) {
        let e;
        if (n) e = h.index.count;
        else {
          if (void 0 === h.attributes.position) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + u + ". The geometry must have either an index or a position attribute"), null;
          e = h.attributes.position.count
        }
        l.addGroup(c, e, u), c += e
      }
    }
    if (n) {
      let t = 0;
      const n = [];
      for (let r = 0; r < e.length; ++r) {
        const i = e[r].index;
        for (let e = 0; e < i.count; ++e) n.push(i.getX(e) + t);
        t += e[r].attributes.position.count
      }
      l.setIndex(n)
    }
    for (const e in a) {
      const t = lC(a[e]);
      if (!t) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " + e + " attribute."), null;
      l.setAttribute(e, t)
    }
    for (const e in o) {
      const t = o[e][0].length;
      if (0 === t) break;
      l.morphAttributes = l.morphAttributes || {}, l.morphAttributes[e] = [];
      for (let n = 0; n < t; ++n) {
        const t = [];
        for (let r = 0; r < o[e].length; ++r) t.push(o[e][r][n]);
        const r = lC(t);
        if (!r) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " + e + " morphAttribute."), null;
        l.morphAttributes[e].push(r)
      }
    }
    return l
  }

  function lC(e) {
    let t, n, r, i = 0;
    for (let a = 0; a < e.length; ++a) {
      const o = e[a];
      if (o.isInterleavedBufferAttribute) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."), null;
      if (void 0 === t && (t = o.array.constructor), t !== o.array.constructor) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
      if (void 0 === n && (n = o.itemSize), n !== o.itemSize) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
      if (void 0 === r && (r = o.normalized), r !== o.normalized) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
      i += o.array.length
    }
    const a = new t(i);
    let o = 0;
    for (let t = 0; t < e.length; ++t) a.set(e[t].array, o), o += e[t].array.length;
    return new ZM(a, n, r)
  }

  function cC(e) {
    const t = e.poleWidth / 2,
      n = e.poleLength,
      r = e.poleCapSize / 2,
      i = new NA(t, t, n, 32);
    i.translate(0, e.poleLength / 2, 0);
    const a = new NA(r, r, r, 32);
    return a.translate(0, n + r / 2, 0), sC([i, a])
  }
  sp(oC, "defaults", {
    width: 1.8,
    height: 1.2,
    mass: .11,
    restDistance: .12,
    rigidness: 1,
    texture: iC,
    backSideTexture: null,
    pin: {
      edges: [np.LEFT]
    }
  });
  class uC {
    constructor(e) {
      const t = Object.assign({}, this.constructor.defaults, e),
        n = this.buildGeometry(t),
        r = new OA({
          color: 16711422,
          metalness: .98,
          roughness: .55
        }),
        i = new bw(n, r);
      i.receiveShadow = !0, i.castShadow = !0, this.top = new xS(0, t.poleLength, 0), this.mesh = i, this.object = this.mesh
    }
    destroy() {
      this.mesh.material.dispose(), this.mesh.geometry.dispose()
    }
    buildGeometry(e) {
      return cC(e)
    }
    addFlag(e) {
      e.unpin(), e.pin({
        edges: [np.LEFT]
      }), e.setLengthConstraints(np.LEFT), e.object.position.add(this.top)
    }
  }
  sp(uC, "defaults", (() => {
    const e = {};
    return e.flagpoleType = rp.VERTICAL, e.poleWidth = .076, e.poleLength = 6, e.poleCapSize = 4 * e.poleWidth / 3, e.crossbarWidth = 2 * e.poleWidth / 3, e.crossbarLength = 1.2, e.crossbarCapSize = 3 * e.crossbarWidth / 2, e.poleTopOffset = .1, e
  })());
  let hC = class {
    constructor(e) {
      const t = Object.assign({}, e),
        {
          flagpole: n,
          flag: r
        } = t;
      this.flagpole = n || new uC, this.flag = r || new oC, this.flagpole.addFlag(this.flag, 0), this.object = new DM, this.object.add(this.flagpole.object), this.object.add(this.flag.object)
    }
    destroy() {
      this.destroyChildSubject(this.flagpole), this.destroyChildSubject(this.flag)
    }
    destroyChildSubject(e) {
      e && (this.object.remove(e.object), e.destroy())
    }
    reset() {
      this.flag.reset()
    }
    simulate(e) {
      this.flag.simulate(e)
    }
    render() {
      this.flag.render()
    }
  };
  class dC extends oC {
    constructor(e) {
      super(e);
      const t = Object.assign({}, e),
        {
          texture: n,
          backSideTexture: r
        } = t;
      this.video = n && n.image instanceof HTMLVideoElement ? n.image : null, this.video2 = r && r.image instanceof HTMLVideoElement ? r.image : null
    }
    destroy() {
      super.destroy(), this.pause()
    }
    play() {
      const e = this.video,
        t = this.video2,
        n = [];
      return e && e.paused && n.push(e.play()), t && t.paused && n.push(t.play()), Promise.all(n)
    }
    pause() {
      const e = this.video,
        t = this.video2;
      e && !e.paused && e.pause(), t && !t.paused && t.pause()
    }
    reset() {
      super.reset();
      const e = this.video,
        t = this.video2;
      e && (e.currentTime = 0), t && (t.currentTime = 0)
    }
    simulate(e) {
      super.simulate(e);
      const t = this.video,
        n = this.video2;
      if (t && t.paused) {
        const n = t.currentTime;
        this.mesh.material.map.update(), t.currentTime += e, t.loop && e && n === t.currentTime && (t.currentTime = 0)
      }
      if (n && n.paused) {
        const t = n.currentTime;
        this.mesh2.material.map.update(), n.currentTime += e, n.loop && e && t === n.currentTime && (n.currentTime = 0)
      }
    }
  }
  const pC = {
    noEffect: e => e,
    blowFromLeftDirection: (e, t) => e.set(2e3, 0, 1e3),
    rotatingDirection: (e, t) => e.set(Math.sin(t / 2e3), Math.cos(t / 3e3), Math.sin(t / 1e3)),
    constantSpeed: (e, t) => e,
    variableSpeed: (e, t) => e * (1 + .25 * Math.cos(t / 7e3))
  };
  let fC = class {
    constructor(e) {
      const t = Object.assign({}, this.constructor.defaults, e);
      this.direction = t.direction, this.speed = t.speed, this.directionFn = t.directionFn, this.speedFn = t.speedFn, this.pressure = new xS
    }
    update() {
      const e = Date.now();
      var t;
      this.directionFn(function (e) {
        return 0 === e.x && (e.x = .001), 0 === e.y && (e.y = .001), 0 === e.z && (e.z = .001), e
      }(this.pressure.copy(this.direction)), e).normalize().multiplyScalar((t = this.speedFn(function (e) {
        return 0 === e ? .001 : e
      }(this.speed), e), .5 * ep * t * t))
    }
  };
  sp(fC, "defaults", {
    direction: new xS(1, 0, 0),
    speed: 10,
    directionFn: pC.blowFromLeftDirection,
    speedFn: pC.constantSpeed
  });
  class mC extends uC {
    constructor(e) {
      super(e);
      const t = Object.assign({}, this.constructor.defaults, e);
      this.top.set(0, t.poleLength - t.poleTopOffset, t.poleWidth / 2 + t.crossbarWidth / 2), this.verticalHoisting = t.verticalHoisting
    }
    buildGeometry(e) {
      return function (e) {
        const t = cC(e),
          n = e.poleWidth / 2,
          r = e.poleLength,
          i = e.crossbarWidth / 2,
          a = e.crossbarLength,
          o = e.crossbarCapSize / 2,
          s = e.poleTopOffset,
          l = new NA(i, i, a, 16);
        l.rotateZ(Math.PI / 2);
        const c = new NA(o, o, o, 16),
          u = c.clone(),
          h = r - s,
          d = n + i;
        return c.rotateZ(Math.PI / 2), c.translate(-a / 2, h, d), u.rotateZ(-Math.PI / 2), u.translate(a / 2, h, d), l.translate(0, h, d), sC([t, l, c, u])
      }(e)
    }
    addFlag(e) {
      switch (e.unpin(), this.verticalHoisting) {
        case ip.NONE:
          e.pin({
            edges: [np.TOP]
          }), e.setLengthConstraints(np.TOP), e.object.position.add(this.top), e.object.position.x = -e.cloth.width / 2;
          break;
        case ip.TOP_LEFT:
          e.pin({
            edges: [np.LEFT]
          }), e.setLengthConstraints(np.LEFT), e.object.position.add(this.top), e.object.position.x = -e.cloth.height / 2, e.object.rotateZ(3 * Math.PI / 2), e.object.rotateX(Math.PI);
          break;
        case ip.TOP_RIGHT:
        default:
          e.pin({
            edges: [np.LEFT]
          }), e.setLengthConstraints(np.LEFT), e.object.position.add(this.top), e.object.position.x = e.cloth.height / 2, e.object.rotateZ(3 * Math.PI / 2)
      }
    }
  }
  class gC extends uC {
    buildGeometry(e) {
      return function (e) {
        const t = cC(e),
          n = e.poleLength,
          r = e.poleCapSize / 2,
          i = e.crossbarWidth / 2,
          a = e.crossbarLength,
          o = new NA(i, i, a, 16);
        return o.rotateZ(Math.PI / 2), o.translate(a / 2, n + r - i, 0), sC([t, o])
      }(e)
    }
    addFlag(e) {
      e.unpin(), e.pin({
        edges: [np.LEFT, np.TOP]
      }), e.setLengthConstraints(np.LEFT), e.object.position.add(this.top)
    }
  }
  const vC = new xS(0, 0, 1);
  class _C extends uC {
    constructor(e) {
      super(e), this.top.applyAxisAngle(vC, 3 * Math.PI / 2)
    }
    buildGeometry(e) {
      const t = cC(e);
      return t.rotateZ(3 * Math.PI / 2), t
    }
    addFlag(e) {
      e.unpin(), e.pin({
        edges: [np.LEFT]
      }), e.setLengthConstraints(np.LEFT), e.object.position.add(this.top), e.object.rotateZ(3 * Math.PI / 2)
    }
  }
  const yC = new xS(0, 0, 1);
  class bC extends uC {
    constructor(e) {
      super(e), this.top.applyAxisAngle(yC, 7 * Math.PI / 4)
    }
    buildGeometry(e) {
      const t = cC(e);
      return t.rotateZ(7 * Math.PI / 4), t
    }
    addFlag(e) {
      e.unpin(), e.pin({
        edges: [np.LEFT]
      }), e.setLengthConstraints(np.LEFT), e.object.position.add(this.top), e.object.rotateZ(7 * Math.PI / 4)
    }
  }
  const xC = new xS,
    SC = new xS;

  function MC(e, t) {
    return xC.copy(e), t instanceof DM && (SC.setFromMatrixPosition(t.matrixWorld), xC.add(SC), t.worldToLocal(xC)), xC
  }
  const wC = new xS(0, -9.80665, 0);
  new xS;
  const TC = new xS,
    EC = new xS;
  var AC = {},
    CC = {
      get exports() {
        return AC
      },
      set exports(e) {
        AC = e
      }
    };
  ! function (e, t) {
    e.exports = function () {
      var e = function () {
        function t(e) {
          return i.appendChild(e.dom), e
        }

        function n(e) {
          for (var t = 0; t < i.children.length; t++) i.children[t].style.display = t === e ? "block" : "none";
          r = e
        }
        var r = 0,
          i = document.createElement("div");
        i.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", i.addEventListener("click", (function (e) {
          e.preventDefault(), n(++r % i.children.length)
        }), !1);
        var a = (performance || Date).now(),
          o = a,
          s = 0,
          l = t(new e.Panel("FPS", "#0ff", "#002")),
          c = t(new e.Panel("MS", "#0f0", "#020"));
        if (self.performance && self.performance.memory) var u = t(new e.Panel("MB", "#f08", "#201"));
        return n(0), {
          REVISION: 16,
          dom: i,
          addPanel: t,
          showPanel: n,
          begin: function () {
            a = (performance || Date).now()
          },
          end: function () {
            s++;
            var e = (performance || Date).now();
            if (c.update(e - a, 200), e > o + 1e3 && (l.update(1e3 * s / (e - o), 100), o = e, s = 0, u)) {
              var t = performance.memory;
              u.update(t.usedJSHeapSize / 1048576, t.jsHeapSizeLimit / 1048576)
            }
            return e
          },
          update: function () {
            a = this.end()
          },
          domElement: i,
          setMode: n
        }
      };
      return e.Panel = function (e, t, n) {
        var r = 1 / 0,
          i = 0,
          a = Math.round,
          o = a(window.devicePixelRatio || 1),
          s = 80 * o,
          l = 48 * o,
          c = 3 * o,
          u = 2 * o,
          h = 3 * o,
          d = 15 * o,
          p = 74 * o,
          f = 30 * o,
          m = document.createElement("canvas");
        m.width = s, m.height = l, m.style.cssText = "width:80px;height:48px";
        var g = m.getContext("2d");
        return g.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif", g.textBaseline = "top", g.fillStyle = n, g.fillRect(0, 0, s, l), g.fillStyle = t, g.fillText(e, c, u), g.fillRect(h, d, p, f), g.fillStyle = n, g.globalAlpha = .9, g.fillRect(h, d, p, f), {
          dom: m,
          update: function (l, v) {
            r = Math.min(r, l), i = Math.max(i, l), g.fillStyle = n, g.globalAlpha = 1, g.fillRect(0, 0, s, d), g.fillStyle = t, g.fillText(a(l) + " " + e + " (" + a(r) + "-" + a(i) + ")", c, u), g.drawImage(m, h + o, d, p - o, f, h, d, p - o, f), g.fillRect(h + p - o, d, o, f), g.fillStyle = n, g.globalAlpha = .9, g.fillRect(h + p - o, d, o, a((1 - l / v) * f))
          }
        }
      }, e
    }()
  }(CC);
  class LC {
    init() {}
    deinit() {}
  }
  sp(LC, "displayName", "module");
  class RC {
    constructor(e) {
      this.context = e || this, this.modules = []
    }
    getModulesByType(e) {
      const t = this.modules,
        n = [];
      for (let r = 0, i = t.length; r < i; r++) {
        const i = t[r];
        i.constructor.displayName === e && n.push(i)
      }
      return n
    }
    module(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      const n = this.modules;
      for (let r = 0, i = n.length, a = 0; r < i; r++) {
        const i = n[r];
        if (i.constructor.displayName === e) {
          if (a === t) return i;
          a++
        }
      }
      return null
    }
    add(e) {
      if (e instanceof LC) return e.init && e.init(this.context), this.modules.push(e), e
    }
    remove(e) {
      if (!(e instanceof LC)) return;
      const t = this.modules,
        n = t.indexOf(e);
      return n < 0 ? void 0 : (e.deinit(this.context), t.splice(n, 1)[0])
    }
  }
  let PC = class extends RC {
    constructor(e) {
      super();
      const t = Object.assign({}, this.constructor.defaults, e);
      let {
        scene: n,
        camera: r,
        renderer: i
      } = t;
      const a = new XA,
        o = .016666666666666666;
      let s = 0,
        l = 0;
      const c = () => {
          const e = this.modules;
          for (let t = 0, n = e.length; t < n; t++) this.remove(e[t])
        },
        u = () => {
          const e = this.modules;
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            n.subject && n.reset && n.reset()
          }
        },
        h = e => {
          const t = this.modules;
          for (let n = 0, r = t.length; n < r; n++) {
            const r = t[n];
            "needsUpdate" in r && (r.needsUpdate = e)
          }
        },
        d = e => {
          const t = this.modules;
          for (let n = 0, r = t.length; n < r; n++) {
            const r = t[n];
            r.update && r.update(e)
          }
        },
        p = () => {
          i.render(n, r)
        },
        f = () => {
          u(), p()
        },
        m = e => {
          this.needsUpdate && (h(!0), this.needsUpdate = !1), d(e), p()
        },
        g = () => {
          if (requestAnimationFrame(g), a.running) {
            let e = 0;
            for (s += a.getDelta(); s >= o;)
              if (m(o), s -= o, ++e >= 2) {
                s = 0, l <= 255 && (255 === l ? console.warn("FlagWaver.App: maxUpdatesPerFrame exceeded. Suppressing further warnings.") : console.warn("FlagWaver.App: maxUpdatesPerFrame exceeded."), l++);
                break
              }
          }
        };
      n.add(r), a.start(), f(), g(), this.scene = n, this.camera = r, this.renderer = i, this.canvas = i.domElement, this.clock = a, this.timestep = o, this.destroy = () => {
        a.stop(), c(), cancelAnimationFrame(g), i.dispose(), i.forceContextLoss(), this.canvas = i.domElement = null, this.scene = n = null, this.camera = r = null, this.renderer = i = null
      }, this.render = p, this.start = f, this.refresh = () => {
        h(!0), this.needsUpdate = !1, d(0), p()
      }, this.update = m, this.needsUpdate = !1
    }
  };
  class DC extends LC {
    constructor() {
      super(), this.app = null, this.muted = !1
    }
    init(e) {
      this.app = e
    }
    deinit() {
      this.play()
    }
    play() {
      const {
        clock: e
      } = this.app;
      e.running || (e.start(), this.app.refresh())
    }
    pause() {
      const {
        clock: e
      } = this.app;
      e.running && (e.stop(), this.app.refresh())
    }
    step() {
      const {
        clock: e,
        timestep: t
      } = this.app;
      e.running || (e.elapsedTime += t, this.app.update(t))
    }
    reset() {
      const {
        clock: e
      } = this.app;
      e.startTime = 0, e.oldTime = 0, e.elapsedTime = 0, this.app.start(), this.app.refresh()
    }
  }
  sp(DC, "displayName", "animationControlModule");
  class NC extends LC {
    constructor() {
      super(), this.app = null, this.resize = this.resize.bind(this)
    }
    init(e) {
      this.app = e, window.addEventListener("resize", this.resize), this.resize()
    }
    deinit() {
      window.removeEventListener("resize", this.resize)
    }
    resize() {
      const {
        scene: e,
        camera: t,
        renderer: n
      } = this.app, r = n.domElement.parentElement;
      let i = 1,
        a = 1;
      r && (a = r.clientWidth, i = r.clientHeight), t.aspect = a / i, t.updateProjectionMatrix(), n.setSize(a, i), n.render(e, t)
    }
  }
  sp(NC, "displayName", "resizeModule");
  class OC extends LC {
    constructor(e) {
      super(), this.subject = new hC(Object.assign({}, hC.defaults, e)), this.app = null
    }
    init(e) {
      this.app = e, this.app.scene.add(this.subject.object)
    }
    deinit() {
      this.app.scene.remove(this.subject.object), this.subject.destroy()
    }
    reset() {
      this.subject.reset(), this.subject.render()
    }
    update(e) {
      this.subject.simulate(e), this.subject.render()
    }
  }
  sp(OC, "displayName", "flagGroupModule");
  const IC = {
      type: "change"
    },
    UC = {
      type: "start"
    },
    kC = {
      type: "end"
    };
  class zC extends Cm {
    constructor(e, t) {
      super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new xS, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown"
      }, this.mouseButtons = {
        LEFT: cp.ROTATE,
        MIDDLE: cp.DOLLY,
        RIGHT: cp.PAN
      }, this.touches = {
        ONE: up.ROTATE,
        TWO: up.DOLLY_PAN
      }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function () {
        return o.phi
      }, this.getAzimuthalAngle = function () {
        return o.theta
      }, this.getDistance = function () {
        return this.object.position.distanceTo(this.target)
      }, this.listenToKeyEvents = function (e) {
        e.addEventListener("keydown", V), this._domElementKeyEvents = e
      }, this.saveState = function () {
        n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom
      }, this.reset = function () {
        n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(IC), n.update(), i = r.NONE
      }, this.update = function () {
        const t = new xS,
          h = (new bS).setFromUnitVectors(e.up, new xS(0, 1, 0)),
          d = h.clone().invert(),
          p = new xS,
          f = new bS,
          m = 2 * Math.PI;
        return function () {
          const e = n.object.position;
          t.copy(e).sub(n.target), t.applyQuaternion(h), o.setFromVector3(t), n.autoRotate && i === r.NONE && M(2 * Math.PI / 60 / 60 * n.autoRotateSpeed), n.enableDamping ? (o.theta += s.theta * n.dampingFactor, o.phi += s.phi * n.dampingFactor) : (o.theta += s.theta, o.phi += s.phi);
          let g = n.minAzimuthAngle,
            v = n.maxAzimuthAngle;
          return isFinite(g) && isFinite(v) && (g < -Math.PI ? g += m : g > Math.PI && (g -= m), v < -Math.PI ? v += m : v > Math.PI && (v -= m), o.theta = g <= v ? Math.max(g, Math.min(v, o.theta)) : o.theta > (g + v) / 2 ? Math.max(g, o.theta) : Math.min(v, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), o.radius *= l, o.radius = Math.max(n.minDistance, Math.min(n.maxDistance, o.radius)), !0 === n.enableDamping ? n.target.addScaledVector(c, n.dampingFactor) : n.target.add(c), t.setFromSpherical(o), t.applyQuaternion(d), e.copy(n.target).add(t), n.object.lookAt(n.target), !0 === n.enableDamping ? (s.theta *= 1 - n.dampingFactor, s.phi *= 1 - n.dampingFactor, c.multiplyScalar(1 - n.dampingFactor)) : (s.set(0, 0, 0), c.set(0, 0, 0)), l = 1, !!(u || p.distanceToSquared(n.object.position) > a || 8 * (1 - f.dot(n.object.quaternion)) > a) && (n.dispatchEvent(IC), p.copy(n.object.position), f.copy(n.object.quaternion), u = !1, !0)
        }
      }(), this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", W), n.domElement.removeEventListener("pointerdown", z), n.domElement.removeEventListener("pointercancel", H), n.domElement.removeEventListener("wheel", G), n.domElement.removeEventListener("pointermove", F), n.domElement.removeEventListener("pointerup", B), null !== n._domElementKeyEvents && n._domElementKeyEvents.removeEventListener("keydown", V)
      };
      const n = this,
        r = {
          NONE: -1,
          ROTATE: 0,
          DOLLY: 1,
          PAN: 2,
          TOUCH_ROTATE: 3,
          TOUCH_PAN: 4,
          TOUCH_DOLLY_PAN: 5,
          TOUCH_DOLLY_ROTATE: 6
        };
      let i = r.NONE;
      const a = 1e-6,
        o = new ZA,
        s = new ZA;
      let l = 1;
      const c = new xS;
      let u = !1;
      const h = new Yx,
        d = new Yx,
        p = new Yx,
        f = new Yx,
        m = new Yx,
        g = new Yx,
        v = new Yx,
        _ = new Yx,
        y = new Yx,
        b = [],
        x = {};

      function S() {
        return Math.pow(.95, n.zoomSpeed)
      }

      function M(e) {
        s.theta -= e
      }

      function w(e) {
        s.phi -= e
      }
      const T = function () {
          const e = new xS;
          return function (t, n) {
            e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), c.add(e)
          }
        }(),
        E = function () {
          const e = new xS;
          return function (t, r) {
            !0 === n.screenSpacePanning ? e.setFromMatrixColumn(r, 1) : (e.setFromMatrixColumn(r, 0), e.crossVectors(n.object.up, e)), e.multiplyScalar(t), c.add(e)
          }
        }(),
        A = function () {
          const e = new xS;
          return function (t, r) {
            const i = n.domElement;
            if (n.object.isPerspectiveCamera) {
              const a = n.object.position;
              e.copy(a).sub(n.target);
              let o = e.length();
              o *= Math.tan(n.object.fov / 2 * Math.PI / 180), T(2 * t * o / i.clientHeight, n.object.matrix), E(2 * r * o / i.clientHeight, n.object.matrix)
            } else n.object.isOrthographicCamera ? (T(t * (n.object.right - n.object.left) / n.object.zoom / i.clientWidth, n.object.matrix), E(r * (n.object.top - n.object.bottom) / n.object.zoom / i.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1)
          }
        }();

      function C(e) {
        n.object.isPerspectiveCamera ? l /= e : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * e)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
      }

      function L(e) {
        n.object.isPerspectiveCamera ? l *= e : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / e)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
      }

      function R(e) {
        h.set(e.clientX, e.clientY)
      }

      function P(e) {
        f.set(e.clientX, e.clientY)
      }

      function D() {
        if (1 === b.length) h.set(b[0].pageX, b[0].pageY);
        else {
          const e = .5 * (b[0].pageX + b[1].pageX),
            t = .5 * (b[0].pageY + b[1].pageY);
          h.set(e, t)
        }
      }

      function N() {
        if (1 === b.length) f.set(b[0].pageX, b[0].pageY);
        else {
          const e = .5 * (b[0].pageX + b[1].pageX),
            t = .5 * (b[0].pageY + b[1].pageY);
          f.set(e, t)
        }
      }

      function O() {
        const e = b[0].pageX - b[1].pageX,
          t = b[0].pageY - b[1].pageY,
          n = Math.sqrt(e * e + t * t);
        v.set(0, n)
      }

      function I(e) {
        if (1 == b.length) d.set(e.pageX, e.pageY);
        else {
          const t = X(e),
            n = .5 * (e.pageX + t.x),
            r = .5 * (e.pageY + t.y);
          d.set(n, r)
        }
        p.subVectors(d, h).multiplyScalar(n.rotateSpeed);
        const t = n.domElement;
        M(2 * Math.PI * p.x / t.clientHeight), w(2 * Math.PI * p.y / t.clientHeight), h.copy(d)
      }

      function U(e) {
        if (1 === b.length) m.set(e.pageX, e.pageY);
        else {
          const t = X(e),
            n = .5 * (e.pageX + t.x),
            r = .5 * (e.pageY + t.y);
          m.set(n, r)
        }
        g.subVectors(m, f).multiplyScalar(n.panSpeed), A(g.x, g.y), f.copy(m)
      }

      function k(e) {
        const t = X(e),
          r = e.pageX - t.x,
          i = e.pageY - t.y,
          a = Math.sqrt(r * r + i * i);
        _.set(0, a), y.set(0, Math.pow(_.y / v.y, n.zoomSpeed)), C(y.y), v.copy(_)
      }

      function z(e) {
        !1 !== n.enabled && (0 === b.length && (n.domElement.setPointerCapture(e.pointerId), n.domElement.addEventListener("pointermove", F), n.domElement.addEventListener("pointerup", B)), function (e) {
          b.push(e)
        }(e), "touch" === e.pointerType ? function (e) {
          switch (q(e), b.length) {
            case 1:
              switch (n.touches.ONE) {
                case up.ROTATE:
                  if (!1 === n.enableRotate) return;
                  D(), i = r.TOUCH_ROTATE;
                  break;
                case up.PAN:
                  if (!1 === n.enablePan) return;
                  N(), i = r.TOUCH_PAN;
                  break;
                default:
                  i = r.NONE
              }
              break;
            case 2:
              switch (n.touches.TWO) {
                case up.DOLLY_PAN:
                  if (!1 === n.enableZoom && !1 === n.enablePan) return;
                  n.enableZoom && O(), n.enablePan && N(), i = r.TOUCH_DOLLY_PAN;
                  break;
                case up.DOLLY_ROTATE:
                  if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                  n.enableZoom && O(), n.enableRotate && D(), i = r.TOUCH_DOLLY_ROTATE;
                  break;
                default:
                  i = r.NONE
              }
              break;
            default:
              i = r.NONE
          }
          i !== r.NONE && n.dispatchEvent(UC)
        }(e) : function (e) {
          let t;
          switch (e.button) {
            case 0:
              t = n.mouseButtons.LEFT;
              break;
            case 1:
              t = n.mouseButtons.MIDDLE;
              break;
            case 2:
              t = n.mouseButtons.RIGHT;
              break;
            default:
              t = -1
          }
          switch (t) {
            case cp.DOLLY:
              if (!1 === n.enableZoom) return;
              ! function (e) {
                v.set(e.clientX, e.clientY)
              }(e), i = r.DOLLY;
              break;
            case cp.ROTATE:
              if (e.ctrlKey || e.metaKey || e.shiftKey) {
                if (!1 === n.enablePan) return;
                P(e), i = r.PAN
              } else {
                if (!1 === n.enableRotate) return;
                R(e), i = r.ROTATE
              }
              break;
            case cp.PAN:
              if (e.ctrlKey || e.metaKey || e.shiftKey) {
                if (!1 === n.enableRotate) return;
                R(e), i = r.ROTATE
              } else {
                if (!1 === n.enablePan) return;
                P(e), i = r.PAN
              }
              break;
            default:
              i = r.NONE
          }
          i !== r.NONE && n.dispatchEvent(UC)
        }(e))
      }

      function F(e) {
        !1 !== n.enabled && ("touch" === e.pointerType ? function (e) {
          switch (q(e), i) {
            case r.TOUCH_ROTATE:
              if (!1 === n.enableRotate) return;
              I(e), n.update();
              break;
            case r.TOUCH_PAN:
              if (!1 === n.enablePan) return;
              U(e), n.update();
              break;
            case r.TOUCH_DOLLY_PAN:
              if (!1 === n.enableZoom && !1 === n.enablePan) return;
              ! function (e) {
                n.enableZoom && k(e), n.enablePan && U(e)
              }(e), n.update();
              break;
            case r.TOUCH_DOLLY_ROTATE:
              if (!1 === n.enableZoom && !1 === n.enableRotate) return;
              ! function (e) {
                n.enableZoom && k(e), n.enableRotate && I(e)
              }(e), n.update();
              break;
            default:
              i = r.NONE
          }
        }(e) : function (e) {
          switch (i) {
            case r.ROTATE:
              if (!1 === n.enableRotate) return;
              ! function (e) {
                d.set(e.clientX, e.clientY), p.subVectors(d, h).multiplyScalar(n.rotateSpeed);
                const t = n.domElement;
                M(2 * Math.PI * p.x / t.clientHeight), w(2 * Math.PI * p.y / t.clientHeight), h.copy(d), n.update()
              }(e);
              break;
            case r.DOLLY:
              if (!1 === n.enableZoom) return;
              ! function (e) {
                _.set(e.clientX, e.clientY), y.subVectors(_, v), y.y > 0 ? C(S()) : y.y < 0 && L(S()), v.copy(_), n.update()
              }(e);
              break;
            case r.PAN:
              if (!1 === n.enablePan) return;
              ! function (e) {
                m.set(e.clientX, e.clientY), g.subVectors(m, f).multiplyScalar(n.panSpeed), A(g.x, g.y), f.copy(m), n.update()
              }(e)
          }
        }(e))
      }

      function B(e) {
        j(e), 0 === b.length && (n.domElement.releasePointerCapture(e.pointerId), n.domElement.removeEventListener("pointermove", F), n.domElement.removeEventListener("pointerup", B)), n.dispatchEvent(kC), i = r.NONE
      }

      function H(e) {
        j(e)
      }

      function G(e) {
        !1 !== n.enabled && !1 !== n.enableZoom && i === r.NONE && (e.preventDefault(), n.dispatchEvent(UC), function (e) {
          e.deltaY < 0 ? L(S()) : e.deltaY > 0 && C(S()), n.update()
        }(e), n.dispatchEvent(kC))
      }

      function V(e) {
        !1 !== n.enabled && !1 !== n.enablePan && function (e) {
          let t = !1;
          switch (e.code) {
            case n.keys.UP:
              e.ctrlKey || e.metaKey || e.shiftKey ? w(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : A(0, n.keyPanSpeed), t = !0;
              break;
            case n.keys.BOTTOM:
              e.ctrlKey || e.metaKey || e.shiftKey ? w(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : A(0, -n.keyPanSpeed), t = !0;
              break;
            case n.keys.LEFT:
              e.ctrlKey || e.metaKey || e.shiftKey ? M(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : A(n.keyPanSpeed, 0), t = !0;
              break;
            case n.keys.RIGHT:
              e.ctrlKey || e.metaKey || e.shiftKey ? M(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : A(-n.keyPanSpeed, 0), t = !0
          }
          t && (e.preventDefault(), n.update())
        }(e)
      }

      function W(e) {
        !1 !== n.enabled && e.preventDefault()
      }

      function j(e) {
        delete x[e.pointerId];
        for (let t = 0; t < b.length; t++)
          if (b[t].pointerId == e.pointerId) return void b.splice(t, 1)
      }

      function q(e) {
        let t = x[e.pointerId];
        void 0 === t && (t = new Yx, x[e.pointerId] = t), t.set(e.pageX, e.pageY)
      }

      function X(e) {
        const t = e.pointerId === b[0].pointerId ? b[1] : b[0];
        return x[t.pointerId]
      }
      n.domElement.addEventListener("contextmenu", W), n.domElement.addEventListener("pointerdown", z), n.domElement.addEventListener("pointercancel", H), n.domElement.addEventListener("wheel", G, {
        passive: !1
      }), this.update()
    }
  }
  class FC extends LC {
    constructor() {
      super(), this.orbitControls = null
    }
    init(e) {
      this.orbitControls = new zC(e.camera, e.renderer.domElement)
    }
    deinit() {
      this.orbitControls.dispose()
    }
  }
  sp(FC, "displayName", "orbitControlsModule");
  class BC extends LC {
    constructor(e, t) {
      super(), this.updateFn = e || (() => {}), this.onNeedsUpdate = t || (() => {}), this.needsUpdate = !1
    }
    update(e) {
      this.needsUpdate && (this.onNeedsUpdate(), this.needsUpdate = !1), this.updateFn(e)
    }
  }
  sp(BC, "displayName", "processModule");
  class HC extends LC {
    constructor(e) {
      super(), this.subject = new fC(Object.assign({}, fC.defaults, e))
    }
    update(e) {
      this.subject.update(e)
    }
  }
  sp(HC, "displayName", "windModule");
  class GC extends uC {
    constructor(e) {
      super(e);
      const t = Object.assign({}, this.constructor.defaults, e);
      this.top.set(0, 2 * t.poleLength / 3, 0)
    }
    buildGeometry(e) {
      const t = cC(e);
      return t.translate(0, 5 * -e.poleLength / 3, 0), t.rotateZ(Math.PI), t
    }
    addFlag(e) {
      e.unpin(), e.pin({
        edges: [np.LEFT]
      }), e.setLengthConstraints(np.LEFT), e.object.position.add(this.top), e.object.translateY(e.cloth.height)
    }
  }

  function VC(e, t) {
    const n = Object.assign({}, e);
    let r;
    switch (n.flagpoleType) {
      case rp.HORIZONTAL:
        r = new _C(n);
        break;
      case rp.OUTRIGGER:
        r = new bC(n);
        break;
      case rp.CROSSBAR:
        n.crossbarLength = n.verticalHoisting === ip.NONE ? t.cloth.width : t.cloth.height, r = new mC(n);
        break;
      case rp.GALLERY:
        n.crossbarLength = t.cloth.width, r = new gC(n);
        break;
      case rp.AUSTRALIAN:
        r = new GC(n);
        break;
      case rp.VERTICAL:
      default:
        r = new uC(n)
    }
    return r
  }

  function WC(e) {
    switch (e) {
      case np.TOP:
        return 0;
      case np.LEFT:
        return -Math.PI / 2;
      case np.BOTTOM:
        return Math.PI;
      case np.RIGHT:
        return Math.PI / 2;
      default:
        return 0
    }
  }
  const jC = e => !isNaN(parseFloat(e)) && isFinite(e),
    qC = e => !(!e || "object" != typeof e),
    XC = 500,
    YC = {
      image: null,
      backSideImage: null,
      width: "auto",
      height: "auto",
      hoisting: tp.DEXTER,
      orientation: np.TOP,
      resolution: 256
    };

  function ZC(e, t) {
    const {
      width: n,
      height: r
    } = e ? function (e, t) {
      const n = e.width || e.videoWidth,
        r = e.height || e.videoHeight;
      if ("auto" === t.width && "auto" === t.height) {
        const e = oC.defaults.height;
        return n < r ? {
          width: e,
          height: e * r / n
        } : {
          width: e * n / r,
          height: e
        }
      }
      return "auto" === t.width && jC(t.height) ? {
        width: t.height * n / r,
        height: t.height
      } : jC(t.width) && "auto" === t.height ? {
        width: t.width,
        height: t.width * r / n
      } : {
        width: t.width,
        height: t.height
      }
    }(e, t) : t;
    if (jC(n) && jC(r)) {
      const e = Math.min(1, XC / Math.max(n, r));
      return {
        width: n * e,
        height: r * e
      }
    }
    return {
      width: oC.defaults.width,
      height: oC.defaults.height
    }
  }

  function KC(e, t, n) {
    const r = e instanceof HTMLVideoElement ? new DA(e) : new mS(function (e, t) {
      const n = document.createElement("canvas"),
        r = n.getContext("2d"),
        i = e.width,
        a = e.height,
        o = Math.min(1, t.height * t.resolution / a),
        s = Math.round(i * o),
        l = Math.round(a * o);
      return n.width = s, n.height = l, r.drawImage(e, 0, 0, s, l), n
    }(e, t));
    if (r.matrixAutoUpdate = !1, qC(n)) {
      const e = r.matrix;
      e.scale(1, 1), n.reflect && e.translate(-1, 0).scale(-1, 1), jC(n.rotate) && e.translate(-.5, -.5).rotate(-n.rotate).translate(.5, .5)
    }
    return r
  }

  function $C(e) {
    const t = {};
    ! function (e) {
      return e.orientation === np.LEFT || e.orientation === np.RIGHT
    }(e) ? (t.width = e.width, t.height = e.height) : (t.width = e.height, t.height = e.width);
    const n = e.hoisting === tp.SINISTER;
    let {
      image: r,
      backSideImage: i
    } = e;
    if (n && i) {
      const e = r;
      r = i, i = e
    }
    return r && (t.texture = KC(r, e, {
      reflect: !i && n,
      rotate: WC(e.orientation)
    })), i && (t.backSideTexture = KC(i, e, {
      reflect: !0,
      rotate: -WC(e.orientation)
    })), t
  }

  function JC(e) {
    const t = Object.assign({}, YC, e);
    return Object.assign(t, ZC(t.image, t)), $C(t)
  }
  const QC = new class extends zA {
    constructor(e) {
      super(e)
    }
    load(e, t, n, r) {
      void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
      const i = this,
        a = IA.get(e);
      if (void 0 !== a) return i.manager.itemStart(e), setTimeout((function () {
        t && t(a), i.manager.itemEnd(e)
      }), 0), a;
      const o = Jx("img");

      function s() {
        c(), IA.add(e, this), t && t(this), i.manager.itemEnd(e)
      }

      function l(t) {
        c(), r && r(t), i.manager.itemError(e), i.manager.itemEnd(e)
      }

      function c() {
        o.removeEventListener("load", s, !1), o.removeEventListener("error", l, !1)
      }
      return o.addEventListener("load", s, !1), o.addEventListener("error", l, !1), "data:" !== e.slice(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), i.manager.itemStart(e), o.src = e, o
    }
  };

  function eL(e, t, n) {
    QC.load(e, t, null, (t => {
      console.error("FlagWaver.loadImage: Failed to load image from ".concat(e, ".")), n && n(t)
    }))
  }
  QC.setCrossOrigin("anonymous");
  const tL = {
    defaultValue: "",
    parse: e => e,
    stringify: e => e
  };

  function nL(e, t) {
    return t === e.defaultValue || "" === t || null == t
  }
  class rL {
    constructor(e) {
      this.fields = Object.keys(e).reduce(((t, n) => (t[n] = Object.assign({}, tL, e[n]), t)), {})
    }
    parse(e) {
      const t = this.fields,
        n = (r = function (e) {
          const t = {};
          if ("string" != typeof e) return t;
          const n = e.split("&");
          for (let e = 0, r = n.length; e < r; e++) {
            const r = n[e];
            if (r) {
              const e = r.split("="),
                n = e[0];
              n && (t[n] = void 0 !== e[1] ? e.slice(1).join("=") : null)
            }
          }
          return t
        }(e), Object.keys(r).reduce(((e, t) => (e[t.toLowerCase()] = r[t], e)), {}));
      var r;
      return Object.keys(t).reduce(((e, r) => {
        const i = t[r],
          a = n[r],
          o = a && i.parse(a);
        return e[r] = nL(i, o) ? i.defaultValue : o, e
      }), n)
    }
    stringify(e) {
      const t = this.fields;
      return function (e) {
        const t = Object.keys(e),
          n = [];
        for (let r = 0, i = t.length; r < i; r++) {
          const i = t[r],
            a = e[i];
          null === a ? n.push(i) : void 0 !== a && n.push(i + "=" + a)
        }
        return n.join("&")
      }(Object.keys(t).reduce(((n, r) => {
        const i = t[r],
          a = e[r];
        return nL(i, a) || (n[r] = i.stringify(a)), n
      }), {}))
    }
  }
  const {
    history: iL,
    location: aL
  } = window, oL = !(!iL || !iL.replaceState), sL = (() => {
    try {
      iL.replaceState(null, "", aL.href)
    } catch (e) {
      return !1
    }
    return !0
  })();
  const lL = /^(?:[^#]*(?:#!|#\?|#)|[^\?]*\?)?(.*)$/;

  function cL(e) {
    ! function (e) {
      if (oL && sL) {
        const t = aL.href.split("#")[0] + (e ? "#" + e : "");
        iL.replaceState(null, "", t)
      } else aL.hash = e
    }(e ? "?" + e : "")
  }
  class uL {
    constructor(e) {
      const t = new rL(e);
      this.getState = () => t.parse(aL.href.replace(lL, "$1")), this.setState = e => cL(e ? t.stringify(e) : "")
    }
  }
  const hL = {
    CLASSIC: "classic",
    BLUE_SKY: "blue-sky",
    NIGHT_SKY_CLOUDS: "night-sky-clouds",
    CUSTOM: "custom"
  };

  function dL(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function pL(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? dL(Object(n), !0).forEach((function (t) {
        sp(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dL(Object(n)).forEach((function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function fL(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
  }
  Ji("flat");
  var mL = "function" == typeof Symbol && Symbol.observable || "@@observable",
    gL = function () {
      return Math.random().toString(36).substring(7).split("").join(".")
    },
    vL = {
      INIT: "@@redux/INIT" + gL(),
      REPLACE: "@@redux/REPLACE" + gL(),
      PROBE_UNKNOWN_ACTION: function () {
        return "@@redux/PROBE_UNKNOWN_ACTION" + gL()
      }
    };

  function _L(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
      var i = t[r];
      "function" == typeof e[i] && (n[i] = e[i])
    }
    var a, o = Object.keys(n);
    try {
      ! function (e) {
        Object.keys(e).forEach((function (t) {
          var n = e[t];
          if (void 0 === n(void 0, {
              type: vL.INIT
            })) throw new Error(fL(12));
          if (void 0 === n(void 0, {
              type: vL.PROBE_UNKNOWN_ACTION()
            })) throw new Error(fL(13))
        }))
      }(n)
    } catch (e) {
      a = e
    }
    return function (e, t) {
      if (void 0 === e && (e = {}), a) throw a;
      for (var r = !1, i = {}, s = 0; s < o.length; s++) {
        var l = o[s],
          c = n[l],
          u = e[l],
          h = c(u, t);
        if (void 0 === h) throw t && t.type, new Error(fL(14));
        i[l] = h, r = r || h !== u
      }
      return (r = r || o.length !== Object.keys(e).length) ? i : e
    }
  }

  function yL() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return 0 === t.length ? function (e) {
      return e
    } : 1 === t.length ? t[0] : t.reduce((function (e, t) {
      return function () {
        return e(t.apply(void 0, arguments))
      }
    }))
  }
  var bL = Vs.charAt,
    xL = jo,
    SL = Ln,
    ML = to,
    wL = no,
    TL = "String Iterator",
    EL = SL.set,
    AL = SL.getterFor(TL);
  ML(String, "String", (function (e) {
    EL(this, {
      type: TL,
      string: xL(e),
      index: 0
    })
  }), (function () {
    var e, t = AL(this),
      n = t.string,
      r = t.index;
    return r >= n.length ? wL(void 0, !0) : (e = bL(n, r), t.index += e.length, wL(e, !1))
  }));
  var CL = i,
    LL = et("iterator"),
    RL = !CL((function () {
      var e = new URL("b?a=1&b=2&c=3", "http://a"),
        t = e.searchParams,
        n = "";
      return e.pathname = "c%20d", t.forEach((function (e, r) {
        t.delete("b"), n += r + e
      })), !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[LL] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
    })),
    PL = Xt,
    DL = At,
    NL = a,
    OL = x,
    IL = c,
    UL = i,
    kL = xi,
    zL = Ar,
    FL = u,
    BL = ke,
    HL = R,
    GL = Object.assign,
    VL = Object.defineProperty,
    WL = OL([].concat),
    jL = !GL || UL((function () {
      if (NL && 1 !== GL({
          b: 1
        }, GL(VL({}, "a", {
          enumerable: !0,
          get: function () {
            VL(this, "b", {
              value: 3,
              enumerable: !1
            })
          }
        }), {
          b: 2
        })).b) return !0;
      var e = {},
        t = {},
        n = Symbol(),
        r = "abcdefghijklmnopqrst";
      return e[n] = 7, r.split("").forEach((function (e) {
        t[e] = e
      })), 7 != GL({}, e)[n] || kL(GL({}, t)).join("") != r
    })) ? function (e, t) {
      for (var n = BL(e), r = arguments.length, i = 1, a = zL.f, o = FL.f; r > i;)
        for (var s, l = HL(arguments[i++]), c = a ? WL(kL(l), a(l)) : kL(l), u = c.length, h = 0; u > h;) s = c[h++], NL && !IL(o, l, s) || (n[s] = l[s]);
      return n
    } : GL,
    qL = c,
    XL = Dt,
    YL = xe,
    ZL = Dt,
    KL = function (e, t, n) {
      var r, i;
      XL(e);
      try {
        if (!(r = YL(e, "return"))) {
          if ("throw" === t) throw n;
          return n
        }
        r = qL(r, e)
      } catch (e) {
        i = !0, r = e
      }
      if ("throw" === t) throw n;
      if (i) throw r;
      return XL(r), n
    },
    $L = __,
    JL = c,
    QL = ke,
    eR = function (e, t, n, r) {
      try {
        return r ? t(ZL(n)[0], n[1]) : t(n)
      } catch (t) {
        KL(e, "throw", t)
      }
    },
    tR = J_,
    nR = D_,
    rR = dr,
    iR = Jg,
    aR = Y_,
    oR = H_,
    sR = Array,
    lR = x,
    cR = 2147483647,
    uR = /[^\0-\u007E]/,
    hR = /[.\u3002\uFF0E\uFF61]/g,
    dR = "Overflow: input needs wider integers to process",
    pR = RangeError,
    fR = lR(hR.exec),
    mR = Math.floor,
    gR = String.fromCharCode,
    vR = lR("".charCodeAt),
    _R = lR([].join),
    yR = lR([].push),
    bR = lR("".replace),
    xR = lR("".split),
    SR = lR("".toLowerCase),
    MR = function (e) {
      return e + 22 + 75 * (e < 26)
    },
    wR = function (e, t, n) {
      var r = 0;
      for (e = n ? mR(e / 700) : e >> 1, e += mR(e / t); e > 455;) e = mR(e / 35), r += 36;
      return mR(r + 36 * e / (e + 38))
    },
    TR = function (e) {
      var t = [];
      e = function (e) {
        for (var t = [], n = 0, r = e.length; n < r;) {
          var i = vR(e, n++);
          if (i >= 55296 && i <= 56319 && n < r) {
            var a = vR(e, n++);
            56320 == (64512 & a) ? yR(t, ((1023 & i) << 10) + (1023 & a) + 65536) : (yR(t, i), n--)
          } else yR(t, i)
        }
        return t
      }(e);
      var n, r, i = e.length,
        a = 128,
        o = 0,
        s = 72;
      for (n = 0; n < e.length; n++)(r = e[n]) < 128 && yR(t, gR(r));
      var l = t.length,
        c = l;
      for (l && yR(t, "-"); c < i;) {
        var u = cR;
        for (n = 0; n < e.length; n++)(r = e[n]) >= a && r < u && (u = r);
        var h = c + 1;
        if (u - a > mR((cR - o) / h)) throw pR(dR);
        for (o += (u - a) * h, a = u, n = 0; n < e.length; n++) {
          if ((r = e[n]) < a && ++o > cR) throw pR(dR);
          if (r == a) {
            for (var d = o, p = 36;;) {
              var f = p <= s ? 1 : p >= s + 26 ? 26 : p - s;
              if (d < f) break;
              var m = d - f,
                g = 36 - f;
              yR(t, gR(MR(f + m % g))), d = mR(m / g), p += 36
            }
            yR(t, gR(MR(d))), s = wR(o, h, c == l), o = 0, c++
          }
        }
        o++, a++
      }
      return _R(t, "")
    },
    ER = TypeError,
    AR = function (e, t) {
      if (e < t) throw ER("Not enough arguments");
      return e
    },
    CR = ti,
    LR = n,
    RR = c,
    PR = x,
    DR = a,
    NR = RL,
    OR = $n,
    IR = Rg,
    UR = xa,
    kR = Ca,
    zR = Ln,
    FR = Ng,
    BR = H,
    HR = Be,
    GR = __,
    VR = Go,
    WR = Dt,
    jR = W,
    qR = jo,
    XR = Vi,
    YR = g,
    ZR = Y_,
    KR = H_,
    $R = AR,
    JR = _x,
    QR = et("iterator"),
    eP = "URLSearchParams",
    tP = eP + "Iterator",
    nP = zR.set,
    rP = zR.getterFor(eP),
    iP = zR.getterFor(tP),
    aP = Object.getOwnPropertyDescriptor,
    oP = function (e) {
      if (!DR) return LR[e];
      var t = aP(LR, e);
      return t && t.value
    },
    sP = oP("fetch"),
    lP = oP("Request"),
    cP = oP("Headers"),
    uP = lP && lP.prototype,
    hP = cP && cP.prototype,
    dP = LR.RegExp,
    pP = LR.TypeError,
    fP = LR.decodeURIComponent,
    mP = LR.encodeURIComponent,
    gP = PR("".charAt),
    vP = PR([].join),
    _P = PR([].push),
    yP = PR("".replace),
    bP = PR([].shift),
    xP = PR([].splice),
    SP = PR("".split),
    MP = PR("".slice),
    wP = /\+/g,
    TP = Array(4),
    EP = function (e) {
      return TP[e - 1] || (TP[e - 1] = dP("((?:%[\\da-f]{2}){" + e + "})", "gi"))
    },
    AP = function (e) {
      try {
        return fP(e)
      } catch (t) {
        return e
      }
    },
    CP = function (e) {
      var t = yP(e, wP, " "),
        n = 4;
      try {
        return fP(t)
      } catch (e) {
        for (; n;) t = yP(t, EP(n--), AP);
        return t
      }
    },
    LP = /[!'()~]|%20/g,
    RP = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+"
    },
    PP = function (e) {
      return RP[e]
    },
    DP = function (e) {
      return yP(mP(e), LP, PP)
    },
    NP = kR((function (e, t) {
      nP(this, {
        type: tP,
        iterator: ZR(rP(e).entries),
        kind: t
      })
    }), "Iterator", (function () {
      var e = iP(this),
        t = e.kind,
        n = e.iterator.next(),
        r = n.value;
      return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
    }), !0),
    OP = function (e) {
      this.entries = [], this.url = null, void 0 !== e && (jR(e) ? this.parseObject(e) : this.parseQuery("string" == typeof e ? "?" === gP(e, 0) ? MP(e, 1) : e : qR(e)))
    };
  OP.prototype = {
    type: eP,
    bindURL: function (e) {
      this.url = e, this.update()
    },
    parseObject: function (e) {
      var t, n, r, i, a, o, s, l = KR(e);
      if (l)
        for (n = (t = ZR(e, l)).next; !(r = RR(n, t)).done;) {
          if (a = (i = ZR(WR(r.value))).next, (o = RR(a, i)).done || (s = RR(a, i)).done || !RR(a, i).done) throw pP("Expected sequence with length 2");
          _P(this.entries, {
            key: qR(o.value),
            value: qR(s.value)
          })
        } else
          for (var c in e) HR(e, c) && _P(this.entries, {
            key: c,
            value: qR(e[c])
          })
    },
    parseQuery: function (e) {
      if (e)
        for (var t, n, r = SP(e, "&"), i = 0; i < r.length;)(t = r[i++]).length && (n = SP(t, "="), _P(this.entries, {
          key: CP(bP(n)),
          value: CP(vP(n, "="))
        }))
    },
    serialize: function () {
      for (var e, t = this.entries, n = [], r = 0; r < t.length;) e = t[r++], _P(n, DP(e.key) + "=" + DP(e.value));
      return vP(n, "&")
    },
    update: function () {
      this.entries.length = 0, this.parseQuery(this.url.query)
    },
    updateURL: function () {
      this.url && this.url.update()
    }
  };
  var IP = function () {
      FR(this, UP), nP(this, new OP(arguments.length > 0 ? arguments[0] : void 0))
    },
    UP = IP.prototype;
  if (IR(UP, {
      append: function (e, t) {
        $R(arguments.length, 2);
        var n = rP(this);
        _P(n.entries, {
          key: qR(e),
          value: qR(t)
        }), n.updateURL()
      },
      delete: function (e) {
        $R(arguments.length, 1);
        for (var t = rP(this), n = t.entries, r = qR(e), i = 0; i < n.length;) n[i].key === r ? xP(n, i, 1) : i++;
        t.updateURL()
      },
      get: function (e) {
        $R(arguments.length, 1);
        for (var t = rP(this).entries, n = qR(e), r = 0; r < t.length; r++)
          if (t[r].key === n) return t[r].value;
        return null
      },
      getAll: function (e) {
        $R(arguments.length, 1);
        for (var t = rP(this).entries, n = qR(e), r = [], i = 0; i < t.length; i++) t[i].key === n && _P(r, t[i].value);
        return r
      },
      has: function (e) {
        $R(arguments.length, 1);
        for (var t = rP(this).entries, n = qR(e), r = 0; r < t.length;)
          if (t[r++].key === n) return !0;
        return !1
      },
      set: function (e, t) {
        $R(arguments.length, 1);
        for (var n, r = rP(this), i = r.entries, a = !1, o = qR(e), s = qR(t), l = 0; l < i.length; l++)(n = i[l]).key === o && (a ? xP(i, l--, 1) : (a = !0, n.value = s));
        a || _P(i, {
          key: o,
          value: s
        }), r.updateURL()
      },
      sort: function () {
        var e = rP(this);
        JR(e.entries, (function (e, t) {
          return e.key > t.key ? 1 : -1
        })), e.updateURL()
      },
      forEach: function (e) {
        for (var t, n = rP(this).entries, r = GR(e, arguments.length > 1 ? arguments[1] : void 0), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this)
      },
      keys: function () {
        return new NP(this, "keys")
      },
      values: function () {
        return new NP(this, "values")
      },
      entries: function () {
        return new NP(this, "entries")
      }
    }, {
      enumerable: !0
    }), OR(UP, QR, UP.entries, {
      name: "entries"
    }), OR(UP, "toString", (function () {
      return rP(this).serialize()
    }), {
      enumerable: !0
    }), UR(IP, eP), CR({
      global: !0,
      constructor: !0,
      forced: !NR
    }, {
      URLSearchParams: IP
    }), !NR && BR(cP)) {
    var kP = PR(hP.has),
      zP = PR(hP.set),
      FP = function (e) {
        if (jR(e)) {
          var t, n = e.body;
          if (VR(n) === eP) return t = e.headers ? new cP(e.headers) : new cP, kP(t, "content-type") || zP(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), XR(e, {
            body: YR(0, qR(n)),
            headers: YR(0, t)
          })
        }
        return e
      };
    if (BR(sP) && CR({
        global: !0,
        enumerable: !0,
        dontCallGetSet: !0,
        forced: !0
      }, {
        fetch: function (e) {
          return sP(e, arguments.length > 1 ? FP(arguments[1]) : {})
        }
      }), BR(lP)) {
      var BP = function (e) {
        return FR(this, uP), new lP(e, arguments.length > 1 ? FP(arguments[1]) : {})
      };
      uP.constructor = BP, BP.prototype = uP, CR({
        global: !0,
        constructor: !0,
        dontCallGetSet: !0,
        forced: !0
      }, {
        Request: BP
      })
    }
  }
  var HP, GP = ti,
    VP = a,
    WP = RL,
    jP = n,
    qP = __,
    XP = x,
    YP = $n,
    ZP = function (e, t, n) {
      return n.get && PL(n.get, t, {
        getter: !0
      }), n.set && PL(n.set, t, {
        setter: !0
      }), DL.f(e, t, n)
    },
    KP = Ng,
    $P = Be,
    JP = jL,
    QP = function (e) {
      var t = QL(e),
        n = nR(this),
        r = arguments.length,
        i = r > 1 ? arguments[1] : void 0,
        a = void 0 !== i;
      a && (i = $L(i, r > 2 ? arguments[2] : void 0));
      var o, s, l, c, u, h, d = oR(t),
        p = 0;
      if (!d || this === sR && tR(d))
        for (o = rR(t), s = n ? new this(o) : sR(o); o > p; p++) h = a ? i(t[p], p) : t[p], iR(s, p, h);
      else
        for (u = (c = aR(t, d)).next, s = n ? new this : []; !(l = JL(u, c)).done; p++) h = a ? eR(c, i, [l.value, p], !0) : l.value, iR(s, p, h);
      return s.length = p, s
    },
    eD = iv,
    tD = Vs.codeAt,
    nD = function (e) {
      var t, n, r = [],
        i = xR(bR(SR(e), hR, "."), ".");
      for (t = 0; t < i.length; t++) n = i[t], yR(r, fR(uR, n) ? "xn--" + TR(n) : n);
      return _R(r, ".")
    },
    rD = jo,
    iD = xa,
    aD = AR,
    oD = {
      URLSearchParams: IP,
      getState: rP
    },
    sD = Ln,
    lD = sD.set,
    cD = sD.getterFor("URL"),
    uD = oD.URLSearchParams,
    hD = oD.getState,
    dD = jP.URL,
    pD = jP.TypeError,
    fD = jP.parseInt,
    mD = Math.floor,
    gD = Math.pow,
    vD = XP("".charAt),
    _D = XP(/./.exec),
    yD = XP([].join),
    bD = XP(1..toString),
    xD = XP([].pop),
    SD = XP([].push),
    MD = XP("".replace),
    wD = XP([].shift),
    TD = XP("".split),
    ED = XP("".slice),
    AD = XP("".toLowerCase),
    CD = XP([].unshift),
    LD = "Invalid scheme",
    RD = "Invalid host",
    PD = "Invalid port",
    DD = /[a-z]/i,
    ND = /[\d+-.a-z]/i,
    OD = /\d/,
    ID = /^0x/i,
    UD = /^[0-7]+$/,
    kD = /^\d+$/,
    zD = /^[\da-f]+$/i,
    FD = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
    BD = /[\0\t\n\r #/:<>?@[\\\]^|]/,
    HD = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,
    GD = /[\t\n\r]/g,
    VD = function (e) {
      var t, n, r, i;
      if ("number" == typeof e) {
        for (t = [], n = 0; n < 4; n++) CD(t, e % 256), e = mD(e / 256);
        return yD(t, ".")
      }
      if ("object" == typeof e) {
        for (t = "", r = function (e) {
            for (var t = null, n = 1, r = null, i = 0, a = 0; a < 8; a++) 0 !== e[a] ? (i > n && (t = r, n = i), r = null, i = 0) : (null === r && (r = a), ++i);
            return i > n && (t = r, n = i), t
          }(e), n = 0; n < 8; n++) i && 0 === e[n] || (i && (i = !1), r === n ? (t += n ? ":" : "::", i = !0) : (t += bD(e[n], 16), n < 7 && (t += ":")));
        return "[" + t + "]"
      }
      return e
    },
    WD = {},
    jD = JP({}, WD, {
      " ": 1,
      '"': 1,
      "<": 1,
      ">": 1,
      "`": 1
    }),
    qD = JP({}, jD, {
      "#": 1,
      "?": 1,
      "{": 1,
      "}": 1
    }),
    XD = JP({}, qD, {
      "/": 1,
      ":": 1,
      ";": 1,
      "=": 1,
      "@": 1,
      "[": 1,
      "\\": 1,
      "]": 1,
      "^": 1,
      "|": 1
    }),
    YD = function (e, t) {
      var n = tD(e, 0);
      return n > 32 && n < 127 && !$P(t, e) ? e : encodeURIComponent(e)
    },
    ZD = {
      ftp: 21,
      file: null,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    },
    KD = function (e, t) {
      var n;
      return 2 == e.length && _D(DD, vD(e, 0)) && (":" == (n = vD(e, 1)) || !t && "|" == n)
    },
    $D = function (e) {
      var t;
      return e.length > 1 && KD(ED(e, 0, 2)) && (2 == e.length || "/" === (t = vD(e, 2)) || "\\" === t || "?" === t || "#" === t)
    },
    JD = function (e) {
      return "." === e || "%2e" === AD(e)
    },
    QD = {},
    eN = {},
    tN = {},
    nN = {},
    rN = {},
    iN = {},
    aN = {},
    oN = {},
    sN = {},
    lN = {},
    cN = {},
    uN = {},
    hN = {},
    dN = {},
    pN = {},
    fN = {},
    mN = {},
    gN = {},
    vN = {},
    _N = {},
    yN = {},
    bN = function (e, t, n) {
      var r, i, a, o = rD(e);
      if (t) {
        if (i = this.parse(o)) throw pD(i);
        this.searchParams = null
      } else {
        if (void 0 !== n && (r = new bN(n, !0)), i = this.parse(o, null, r)) throw pD(i);
        (a = hD(new uD)).bindURL(this), this.searchParams = a
      }
    };
  bN.prototype = {
    type: "URL",
    parse: function (e, t, n) {
      var r, i, a, o, s, l = this,
        c = t || QD,
        u = 0,
        h = "",
        d = !1,
        p = !1,
        f = !1;
      for (e = rD(e), t || (l.scheme = "", l.username = "", l.password = "", l.host = null, l.port = null, l.path = [], l.query = null, l.fragment = null, l.cannotBeABaseURL = !1, e = MD(e, HD, "")), e = MD(e, GD, ""), r = QP(e); u <= r.length;) {
        switch (i = r[u], c) {
          case QD:
            if (!i || !_D(DD, i)) {
              if (t) return LD;
              c = tN;
              continue
            }
            h += AD(i), c = eN;
            break;
          case eN:
            if (i && (_D(ND, i) || "+" == i || "-" == i || "." == i)) h += AD(i);
            else {
              if (":" != i) {
                if (t) return LD;
                h = "", c = tN, u = 0;
                continue
              }
              if (t && (l.isSpecial() != $P(ZD, h) || "file" == h && (l.includesCredentials() || null !== l.port) || "file" == l.scheme && !l.host)) return;
              if (l.scheme = h, t) return void(l.isSpecial() && ZD[l.scheme] == l.port && (l.port = null));
              h = "", "file" == l.scheme ? c = dN : l.isSpecial() && n && n.scheme == l.scheme ? c = nN : l.isSpecial() ? c = oN : "/" == r[u + 1] ? (c = rN, u++) : (l.cannotBeABaseURL = !0, SD(l.path, ""), c = vN)
            }
            break;
          case tN:
            if (!n || n.cannotBeABaseURL && "#" != i) return LD;
            if (n.cannotBeABaseURL && "#" == i) {
              l.scheme = n.scheme, l.path = eD(n.path), l.query = n.query, l.fragment = "", l.cannotBeABaseURL = !0, c = yN;
              break
            }
            c = "file" == n.scheme ? dN : iN;
            continue;
          case nN:
            if ("/" != i || "/" != r[u + 1]) {
              c = iN;
              continue
            }
            c = sN, u++;
            break;
          case rN:
            if ("/" == i) {
              c = lN;
              break
            }
            c = gN;
            continue;
          case iN:
            if (l.scheme = n.scheme, i == HP) l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, l.path = eD(n.path), l.query = n.query;
            else if ("/" == i || "\\" == i && l.isSpecial()) c = aN;
            else if ("?" == i) l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, l.path = eD(n.path), l.query = "", c = _N;
            else {
              if ("#" != i) {
                l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, l.path = eD(n.path), l.path.length--, c = gN;
                continue
              }
              l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, l.path = eD(n.path), l.query = n.query, l.fragment = "", c = yN
            }
            break;
          case aN:
            if (!l.isSpecial() || "/" != i && "\\" != i) {
              if ("/" != i) {
                l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, c = gN;
                continue
              }
              c = lN
            } else c = sN;
            break;
          case oN:
            if (c = sN, "/" != i || "/" != vD(h, u + 1)) continue;
            u++;
            break;
          case sN:
            if ("/" != i && "\\" != i) {
              c = lN;
              continue
            }
            break;
          case lN:
            if ("@" == i) {
              d && (h = "%40" + h), d = !0, a = QP(h);
              for (var m = 0; m < a.length; m++) {
                var g = a[m];
                if (":" != g || f) {
                  var v = YD(g, XD);
                  f ? l.password += v : l.username += v
                } else f = !0
              }
              h = ""
            } else if (i == HP || "/" == i || "?" == i || "#" == i || "\\" == i && l.isSpecial()) {
              if (d && "" == h) return "Invalid authority";
              u -= QP(h).length + 1, h = "", c = cN
            } else h += i;
            break;
          case cN:
          case uN:
            if (t && "file" == l.scheme) {
              c = fN;
              continue
            }
            if (":" != i || p) {
              if (i == HP || "/" == i || "?" == i || "#" == i || "\\" == i && l.isSpecial()) {
                if (l.isSpecial() && "" == h) return RD;
                if (t && "" == h && (l.includesCredentials() || null !== l.port)) return;
                if (o = l.parseHost(h)) return o;
                if (h = "", c = mN, t) return;
                continue
              }
              "[" == i ? p = !0 : "]" == i && (p = !1), h += i
            } else {
              if ("" == h) return RD;
              if (o = l.parseHost(h)) return o;
              if (h = "", c = hN, t == uN) return
            }
            break;
          case hN:
            if (!_D(OD, i)) {
              if (i == HP || "/" == i || "?" == i || "#" == i || "\\" == i && l.isSpecial() || t) {
                if ("" != h) {
                  var _ = fD(h, 10);
                  if (_ > 65535) return PD;
                  l.port = l.isSpecial() && _ === ZD[l.scheme] ? null : _, h = ""
                }
                if (t) return;
                c = mN;
                continue
              }
              return PD
            }
            h += i;
            break;
          case dN:
            if (l.scheme = "file", "/" == i || "\\" == i) c = pN;
            else {
              if (!n || "file" != n.scheme) {
                c = gN;
                continue
              }
              if (i == HP) l.host = n.host, l.path = eD(n.path), l.query = n.query;
              else if ("?" == i) l.host = n.host, l.path = eD(n.path), l.query = "", c = _N;
              else {
                if ("#" != i) {
                  $D(yD(eD(r, u), "")) || (l.host = n.host, l.path = eD(n.path), l.shortenPath()), c = gN;
                  continue
                }
                l.host = n.host, l.path = eD(n.path), l.query = n.query, l.fragment = "", c = yN
              }
            }
            break;
          case pN:
            if ("/" == i || "\\" == i) {
              c = fN;
              break
            }
            n && "file" == n.scheme && !$D(yD(eD(r, u), "")) && (KD(n.path[0], !0) ? SD(l.path, n.path[0]) : l.host = n.host), c = gN;
            continue;
          case fN:
            if (i == HP || "/" == i || "\\" == i || "?" == i || "#" == i) {
              if (!t && KD(h)) c = gN;
              else if ("" == h) {
                if (l.host = "", t) return;
                c = mN
              } else {
                if (o = l.parseHost(h)) return o;
                if ("localhost" == l.host && (l.host = ""), t) return;
                h = "", c = mN
              }
              continue
            }
            h += i;
            break;
          case mN:
            if (l.isSpecial()) {
              if (c = gN, "/" != i && "\\" != i) continue
            } else if (t || "?" != i)
              if (t || "#" != i) {
                if (i != HP && (c = gN, "/" != i)) continue
              } else l.fragment = "", c = yN;
            else l.query = "", c = _N;
            break;
          case gN:
            if (i == HP || "/" == i || "\\" == i && l.isSpecial() || !t && ("?" == i || "#" == i)) {
              if (".." === (s = AD(s = h)) || "%2e." === s || ".%2e" === s || "%2e%2e" === s ? (l.shortenPath(), "/" == i || "\\" == i && l.isSpecial() || SD(l.path, "")) : JD(h) ? "/" == i || "\\" == i && l.isSpecial() || SD(l.path, "") : ("file" == l.scheme && !l.path.length && KD(h) && (l.host && (l.host = ""), h = vD(h, 0) + ":"), SD(l.path, h)), h = "", "file" == l.scheme && (i == HP || "?" == i || "#" == i))
                for (; l.path.length > 1 && "" === l.path[0];) wD(l.path);
              "?" == i ? (l.query = "", c = _N) : "#" == i && (l.fragment = "", c = yN)
            } else h += YD(i, qD);
            break;
          case vN:
            "?" == i ? (l.query = "", c = _N) : "#" == i ? (l.fragment = "", c = yN) : i != HP && (l.path[0] += YD(i, WD));
            break;
          case _N:
            t || "#" != i ? i != HP && ("'" == i && l.isSpecial() ? l.query += "%27" : l.query += "#" == i ? "%23" : YD(i, WD)) : (l.fragment = "", c = yN);
            break;
          case yN:
            i != HP && (l.fragment += YD(i, jD))
        }
        u++
      }
    },
    parseHost: function (e) {
      var t, n, r;
      if ("[" == vD(e, 0)) {
        if ("]" != vD(e, e.length - 1)) return RD;
        if (t = function (e) {
            var t, n, r, i, a, o, s, l = [0, 0, 0, 0, 0, 0, 0, 0],
              c = 0,
              u = null,
              h = 0,
              d = function () {
                return vD(e, h)
              };
            if (":" == d()) {
              if (":" != vD(e, 1)) return;
              h += 2, u = ++c
            }
            for (; d();) {
              if (8 == c) return;
              if (":" != d()) {
                for (t = n = 0; n < 4 && _D(zD, d());) t = 16 * t + fD(d(), 16), h++, n++;
                if ("." == d()) {
                  if (0 == n) return;
                  if (h -= n, c > 6) return;
                  for (r = 0; d();) {
                    if (i = null, r > 0) {
                      if (!("." == d() && r < 4)) return;
                      h++
                    }
                    if (!_D(OD, d())) return;
                    for (; _D(OD, d());) {
                      if (a = fD(d(), 10), null === i) i = a;
                      else {
                        if (0 == i) return;
                        i = 10 * i + a
                      }
                      if (i > 255) return;
                      h++
                    }
                    l[c] = 256 * l[c] + i, 2 != ++r && 4 != r || c++
                  }
                  if (4 != r) return;
                  break
                }
                if (":" == d()) {
                  if (h++, !d()) return
                } else if (d()) return;
                l[c++] = t
              } else {
                if (null !== u) return;
                h++, u = ++c
              }
            }
            if (null !== u)
              for (o = c - u, c = 7; 0 != c && o > 0;) s = l[c], l[c--] = l[u + o - 1], l[u + --o] = s;
            else if (8 != c) return;
            return l
          }(ED(e, 1, -1)), !t) return RD;
        this.host = t
      } else if (this.isSpecial()) {
        if (e = nD(e), _D(FD, e)) return RD;
        if (t = function (e) {
            var t, n, r, i, a, o, s, l = TD(e, ".");
            if (l.length && "" == l[l.length - 1] && l.length--, (t = l.length) > 4) return e;
            for (n = [], r = 0; r < t; r++) {
              if ("" == (i = l[r])) return e;
              if (a = 10, i.length > 1 && "0" == vD(i, 0) && (a = _D(ID, i) ? 16 : 8, i = ED(i, 8 == a ? 1 : 2)), "" === i) o = 0;
              else {
                if (!_D(10 == a ? kD : 8 == a ? UD : zD, i)) return e;
                o = fD(i, a)
              }
              SD(n, o)
            }
            for (r = 0; r < t; r++)
              if (o = n[r], r == t - 1) {
                if (o >= gD(256, 5 - t)) return null
              } else if (o > 255) return null;
            for (s = xD(n), r = 0; r < n.length; r++) s += n[r] * gD(256, 3 - r);
            return s
          }(e), null === t) return RD;
        this.host = t
      } else {
        if (_D(BD, e)) return RD;
        for (t = "", n = QP(e), r = 0; r < n.length; r++) t += YD(n[r], WD);
        this.host = t
      }
    },
    cannotHaveUsernamePasswordPort: function () {
      return !this.host || this.cannotBeABaseURL || "file" == this.scheme
    },
    includesCredentials: function () {
      return "" != this.username || "" != this.password
    },
    isSpecial: function () {
      return $P(ZD, this.scheme)
    },
    shortenPath: function () {
      var e = this.path,
        t = e.length;
      !t || "file" == this.scheme && 1 == t && KD(e[0], !0) || e.length--
    },
    serialize: function () {
      var e = this,
        t = e.scheme,
        n = e.username,
        r = e.password,
        i = e.host,
        a = e.port,
        o = e.path,
        s = e.query,
        l = e.fragment,
        c = t + ":";
      return null !== i ? (c += "//", e.includesCredentials() && (c += n + (r ? ":" + r : "") + "@"), c += VD(i), null !== a && (c += ":" + a)) : "file" == t && (c += "//"), c += e.cannotBeABaseURL ? o[0] : o.length ? "/" + yD(o, "/") : "", null !== s && (c += "?" + s), null !== l && (c += "#" + l), c
    },
    setHref: function (e) {
      var t = this.parse(e);
      if (t) throw pD(t);
      this.searchParams.update()
    },
    getOrigin: function () {
      var e = this.scheme,
        t = this.port;
      if ("blob" == e) try {
        return new xN(e.path[0]).origin
      } catch (e) {
        return "null"
      }
      return "file" != e && this.isSpecial() ? e + "://" + VD(this.host) + (null !== t ? ":" + t : "") : "null"
    },
    getProtocol: function () {
      return this.scheme + ":"
    },
    setProtocol: function (e) {
      this.parse(rD(e) + ":", QD)
    },
    getUsername: function () {
      return this.username
    },
    setUsername: function (e) {
      var t = QP(rD(e));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.username = "";
        for (var n = 0; n < t.length; n++) this.username += YD(t[n], XD)
      }
    },
    getPassword: function () {
      return this.password
    },
    setPassword: function (e) {
      var t = QP(rD(e));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.password = "";
        for (var n = 0; n < t.length; n++) this.password += YD(t[n], XD)
      }
    },
    getHost: function () {
      var e = this.host,
        t = this.port;
      return null === e ? "" : null === t ? VD(e) : VD(e) + ":" + t
    },
    setHost: function (e) {
      this.cannotBeABaseURL || this.parse(e, cN)
    },
    getHostname: function () {
      var e = this.host;
      return null === e ? "" : VD(e)
    },
    setHostname: function (e) {
      this.cannotBeABaseURL || this.parse(e, uN)
    },
    getPort: function () {
      var e = this.port;
      return null === e ? "" : rD(e)
    },
    setPort: function (e) {
      this.cannotHaveUsernamePasswordPort() || ("" == (e = rD(e)) ? this.port = null : this.parse(e, hN))
    },
    getPathname: function () {
      var e = this.path;
      return this.cannotBeABaseURL ? e[0] : e.length ? "/" + yD(e, "/") : ""
    },
    setPathname: function (e) {
      this.cannotBeABaseURL || (this.path = [], this.parse(e, mN))
    },
    getSearch: function () {
      var e = this.query;
      return e ? "?" + e : ""
    },
    setSearch: function (e) {
      "" == (e = rD(e)) ? this.query = null: ("?" == vD(e, 0) && (e = ED(e, 1)), this.query = "", this.parse(e, _N)), this.searchParams.update()
    },
    getSearchParams: function () {
      return this.searchParams.facade
    },
    getHash: function () {
      var e = this.fragment;
      return e ? "#" + e : ""
    },
    setHash: function (e) {
      "" != (e = rD(e)) ? ("#" == vD(e, 0) && (e = ED(e, 1)), this.fragment = "", this.parse(e, yN)) : this.fragment = null
    },
    update: function () {
      this.query = this.searchParams.serialize() || null
    }
  };
  var xN = function (e) {
      var t = KP(this, SN),
        n = aD(arguments.length, 1) > 1 ? arguments[1] : void 0,
        r = lD(t, new bN(e, !1, n));
      VP || (t.href = r.serialize(), t.origin = r.getOrigin(), t.protocol = r.getProtocol(), t.username = r.getUsername(), t.password = r.getPassword(), t.host = r.getHost(), t.hostname = r.getHostname(), t.port = r.getPort(), t.pathname = r.getPathname(), t.search = r.getSearch(), t.searchParams = r.getSearchParams(), t.hash = r.getHash())
    },
    SN = xN.prototype,
    MN = function (e, t) {
      return {
        get: function () {
          return cD(this)[e]()
        },
        set: t && function (e) {
          return cD(this)[t](e)
        },
        configurable: !0,
        enumerable: !0
      }
    };
  if (VP && (ZP(SN, "href", MN("serialize", "setHref")), ZP(SN, "origin", MN("getOrigin")), ZP(SN, "protocol", MN("getProtocol", "setProtocol")), ZP(SN, "username", MN("getUsername", "setUsername")), ZP(SN, "password", MN("getPassword", "setPassword")), ZP(SN, "host", MN("getHost", "setHost")), ZP(SN, "hostname", MN("getHostname", "setHostname")), ZP(SN, "port", MN("getPort", "setPort")), ZP(SN, "pathname", MN("getPathname", "setPathname")), ZP(SN, "search", MN("getSearch", "setSearch")), ZP(SN, "searchParams", MN("getSearchParams")), ZP(SN, "hash", MN("getHash", "setHash"))), YP(SN, "toJSON", (function () {
      return cD(this).serialize()
    }), {
      enumerable: !0
    }), YP(SN, "toString", (function () {
      return cD(this).serialize()
    }), {
      enumerable: !0
    }), dD) {
    var wN = dD.createObjectURL,
      TN = dD.revokeObjectURL;
    wN && YP(xN, "createObjectURL", qP(wN, dD)), TN && YP(xN, "revokeObjectURL", qP(TN, dD))
  }
  iD(xN, "URL"), GP({
    global: !0,
    constructor: !0,
    forced: !WP,
    sham: !VP
  }, {
    URL: xN
  });
  const EN = {},
    AN = e => EN[e],
    CN = e => {
      const t = URL.createObjectURL(e);
      return EN[t] = e, t
    },
    LN = e => {
      EN[e] && (URL.revokeObjectURL(e), delete EN[e])
    },
    RN = "flagwaver/flagGroup/SET_FLAG_GROUP_OPTIONS",
    PN = e => ({
      type: RN,
      payload: e
    }),
    DN = {
      imageSrc: "",
      backSideImageSrc: "",
      isTwoSided: !1,
      width: "auto",
      height: "auto",
      hoisting: tp.DEXTER,
      orientation: np.TOP,
      resolution: 256,
      mass: .11,
      restDistance: .12,
      flagpoleType: rp.VERTICAL,
      verticalHoisting: ip.TOP_RIGHT
    };

  function NN() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DN,
      t = arguments.length > 1 ? arguments[1] : void 0;
    if (t.type === RN) {
      const n = {
        ...e,
        ...t.payload
      };
      return n.imageSrc || (n.isTwoSided = !1), n.isTwoSided || (n.backSideImageSrc = ""), n
    }
    return e
  }
  const ON = "flagwaver/scenery/SET_SCENERY_OPTIONS",
    IN = e => ({
      type: ON,
      payload: e
    }),
    UN = {
      background: hL.CLASSIC,
      backgroundColor: "#000000",
      backgroundImageSrc: ""
    };

  function kN() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UN,
      t = arguments.length > 1 ? arguments[1] : void 0;
    return t.type === ON ? {
      ...e,
      ...t.payload
    } : e
  }
  const zN = "flagwaver/undoable/UNDO",
    FN = "flagwaver/undoable/REDO",
    BN = "flagwaver/undoable/CLEAR_HISTORY";
  const HN = "flagwaver/wind/SET_WIND_OPTIONS",
    GN = e => ({
      type: HN,
      payload: e
    }),
    VN = {
      enabled: !0,
      controlled: !1,
      direction: 270,
      speed: 10
    };
  const WN = "flagwaver/editor/RESET_APP",
    jN = "flagwaver/editor/UNDO",
    qN = "flagwaver/editor/REDO",
    XN = "flagwaver/editor/CLEAR_HISTORY",
    YN = () => ({
      type: XN
    });
  const ZN = function (e) {
    const t = e => [e.flagGroup.imageSrc, e.flagGroup.backSideImageSrc, e.scenery.backgroundImageSrc];
    return function (n, r) {
      const i = e(n, r);
      return n && r.type !== jN && r.type !== qN && ((e, n) => {
        const r = [...e.past, e.present, ...e.future],
          i = [...n.past, n.present, ...n.future],
          a = r.filter((e => !i.some((t => t === e)))),
          o = i.map(t).flat();
        a.map(t).flat().filter((e => !o.includes(e))).map((e => {
          LN(e)
        }))
      })(n, i), i
    }
  }(function (e, t) {
    let {
      limit: n = 50,
      undoType: r = zN,
      redoType: i = FN,
      clearHistoryType: a = BN
    } = t;
    const o = {
      past: [],
      present: e(void 0, {}),
      future: []
    };
    return function () {
      let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
        s = arguments.length > 1 ? arguments[1] : void 0;
      const {
        past: l,
        present: c,
        future: u
      } = t;
      switch (s.type) {
        case r:
          return {
            past: l.slice(0, l.length - 1), present: l[l.length - 1], future: [c, ...u]
          };
        case i:
          return {
            past: [...l, c], present: u[0], future: u.slice(1)
          };
        case a:
          return {
            past: [], present: c, future: []
          };
        default: {
          const r = e(c, s);
          return c === r ? t : {
            past: [...l, c].slice(-n),
            present: r,
            future: []
          }
        }
      }
    }
  }(_L({
    flagGroup: NN,
    scenery: kN,
    wind: function () {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VN,
        t = arguments.length > 1 ? arguments[1] : void 0;
      return t.type === HN ? {
        ...e,
        ...t.payload
      } : e
    }
  }), {
    limit: 20,
    undoType: jN,
    redoType: qN,
    clearHistoryType: XN
  }));
  const KN = /^#[0-9a-f]{3}([0-9a-f]{3})?$/i,
    $N = e => KN.test(e),
    JN = NN(void 0, {}),
    QN = kN(void 0, {});

  function eO(e, t) {
    const n = t.toLowerCase();
    return Object.values(e).find((e => e.toLowerCase() === n)) || null
  }
  const tO = new uL({
    src: {
      defaultValue: JN.imageSrc,
      parse: e => decodeURIComponent(e),
      stringify: e => AN(e) ? void 0 : encodeURIComponent(e)
    },
    backsidesrc: {
      defaultValue: JN.backSideImageSrc,
      parse: e => decodeURIComponent(e),
      stringify: e => AN(e) ? void 0 : encodeURIComponent(e)
    },
    hoisting: {
      defaultValue: JN.hoisting,
      parse: e => e.match(/^dex(ter)?$/gi) ? tp.DEXTER : e.match(/^sin(ister)?$/gi) ? tp.SINISTER : null,
      stringify: e => "sin"
    },
    orientation: {
      defaultValue: JN.orientation,
      parse: e => eO(np, e)
    },
    flagpoletype: {
      defaultValue: JN.flagpoleType,
      parse: e => eO(rp, e)
    },
    vhoisting: {
      defaultValue: JN.verticalHoisting,
      parse: e => eO(ip, e)
    },
    background: {
      defaultValue: QN.background,
      parse: e => eO(hL, e)
    },
    backgroundcolor: {
      defaultValue: QN.backgroundColor,
      parse: e => $N("#".concat(e)) ? "#".concat(e) : null,
      stringify: e => e.slice(1)
    },
    backgroundimage: {
      defaultValue: QN.backgroundImageSrc,
      parse: e => decodeURIComponent(e),
      stringify: e => AN(e) ? void 0 : encodeURIComponent(e)
    }
  });

  function nO(e, t) {
    return Object.keys(e).reduce(((n, r) => {
      const i = t[r];
      return n[r] = null != i ? i : e[r], n
    }), {})
  }

  function rO(e) {
    const t = function (e) {
      return {
        flagGroup: nO(JN, {
          imageSrc: e.src,
          backSideImageSrc: e.backsidesrc,
          isTwoSided: !!e.backsidesrc,
          hoisting: e.hoisting,
          orientation: e.orientation,
          flagpoleType: e.flagpoletype,
          verticalHoisting: e.vhoisting
        }),
        scenery: {
          background: e.background,
          backgroundColor: e.backgroundcolor,
          backgroundImageSrc: e.backgroundimage
        }
      }
    }(function (e) {
      let t = e;
      if (!t.src) {
        const e = window.location.hash.slice(1);
        /^[^!\?].*/.test(e) && (t = {
          ...t,
          src: window.unescape(e)
        })
      }
      return t.topedge && t.orientation === JN.orientation && (t = {
        ...t,
        orientation: eO(np, t.topedge)
      }), t
    }(tO.getState()));
    e.dispatch(PN(t.flagGroup)), e.dispatch(IN(t.scenery)), e.dispatch(YN())
  }
  var iO = ti,
    aO = n,
    oO = Y,
    sO = g,
    lO = At.f,
    cO = Be,
    uO = Ng,
    hO = Fu,
    dO = Hu,
    pO = {
      IndexSizeError: {
        s: "INDEX_SIZE_ERR",
        c: 1,
        m: 1
      },
      DOMStringSizeError: {
        s: "DOMSTRING_SIZE_ERR",
        c: 2,
        m: 0
      },
      HierarchyRequestError: {
        s: "HIERARCHY_REQUEST_ERR",
        c: 3,
        m: 1
      },
      WrongDocumentError: {
        s: "WRONG_DOCUMENT_ERR",
        c: 4,
        m: 1
      },
      InvalidCharacterError: {
        s: "INVALID_CHARACTER_ERR",
        c: 5,
        m: 1
      },
      NoDataAllowedError: {
        s: "NO_DATA_ALLOWED_ERR",
        c: 6,
        m: 0
      },
      NoModificationAllowedError: {
        s: "NO_MODIFICATION_ALLOWED_ERR",
        c: 7,
        m: 1
      },
      NotFoundError: {
        s: "NOT_FOUND_ERR",
        c: 8,
        m: 1
      },
      NotSupportedError: {
        s: "NOT_SUPPORTED_ERR",
        c: 9,
        m: 1
      },
      InUseAttributeError: {
        s: "INUSE_ATTRIBUTE_ERR",
        c: 10,
        m: 1
      },
      InvalidStateError: {
        s: "INVALID_STATE_ERR",
        c: 11,
        m: 1
      },
      SyntaxError: {
        s: "SYNTAX_ERR",
        c: 12,
        m: 1
      },
      InvalidModificationError: {
        s: "INVALID_MODIFICATION_ERR",
        c: 13,
        m: 1
      },
      NamespaceError: {
        s: "NAMESPACE_ERR",
        c: 14,
        m: 1
      },
      InvalidAccessError: {
        s: "INVALID_ACCESS_ERR",
        c: 15,
        m: 1
      },
      ValidationError: {
        s: "VALIDATION_ERR",
        c: 16,
        m: 0
      },
      TypeMismatchError: {
        s: "TYPE_MISMATCH_ERR",
        c: 17,
        m: 1
      },
      SecurityError: {
        s: "SECURITY_ERR",
        c: 18,
        m: 1
      },
      NetworkError: {
        s: "NETWORK_ERR",
        c: 19,
        m: 1
      },
      AbortError: {
        s: "ABORT_ERR",
        c: 20,
        m: 1
      },
      URLMismatchError: {
        s: "URL_MISMATCH_ERR",
        c: 21,
        m: 1
      },
      QuotaExceededError: {
        s: "QUOTA_EXCEEDED_ERR",
        c: 22,
        m: 1
      },
      TimeoutError: {
        s: "TIMEOUT_ERR",
        c: 23,
        m: 1
      },
      InvalidNodeTypeError: {
        s: "INVALID_NODE_TYPE_ERR",
        c: 24,
        m: 1
      },
      DataCloneError: {
        s: "DATA_CLONE_ERR",
        c: 25,
        m: 1
      }
    },
    fO = Zu,
    mO = a,
    gO = "DOMException",
    vO = oO("Error"),
    _O = oO(gO),
    yO = function () {
      uO(this, bO);
      var e = arguments.length,
        t = dO(e < 1 ? void 0 : arguments[0]),
        n = dO(e < 2 ? void 0 : arguments[1], "Error"),
        r = new _O(t, n),
        i = vO(t);
      return i.name = gO, lO(r, "stack", sO(1, fO(i.stack, 1))), hO(r, this, yO), r
    },
    bO = yO.prototype = _O.prototype,
    xO = "stack" in vO(gO),
    SO = "stack" in new _O(1, 2),
    MO = _O && mO && Object.getOwnPropertyDescriptor(aO, gO),
    wO = !(!MO || MO.writable && MO.configurable),
    TO = xO && !wO && !SO;
  iO({
    global: !0,
    constructor: !0,
    forced: TO
  }, {
    DOMException: TO ? yO : _O
  });
  var EO = oO(gO),
    AO = EO.prototype;
  if (AO.constructor !== EO)
    for (var CO in lO(AO, "constructor", sO(1, EO)), pO)
      if (cO(pO, CO)) {
        var LO = pO[CO],
          RO = LO.s;
        cO(EO, RO) || lO(EO, RO, sO(6, LO.c))
      } const PO = new xS(0, 5, 0);

  function DO() {
    const e = new RA;
    return e.fog = new LA(13426942, 1, 1e3), e
  }

  function NO() {
    const e = new Lw(30, window.innerWidth / window.innerHeight, .1, 100);
    return e.position.set(0, 5, 12), e.lookAt(PO), e
  }

  function OO() {
    const e = window.devicePixelRatio ? Math.min(window.devicePixelRatio, 2) : 1,
      t = new CA({
        antialias: !0,
        alpha: !0,
        powerPreference: "high-performance"
      });
    return t.setSize(window.innerWidth, window.innerHeight), t.setPixelRatio(e), t.outputEncoding = ym, t.physicallyCorrectLights = !0, t.shadowMap.enabled = !0, t.shadowMap.type = mp, t
  }

  function IO() {
    const e = new PC({
      scene: DO(),
      camera: NO(),
      renderer: OO()
    });
    e.add(new FC);
    const {
      orbitControls: t
    } = e.module("orbitControlsModule");
    return t.maxDistance = 80, t.minDistance = 4, t.target.copy(PO), t.target0.copy(PO), t.update(), e.add(new NC), e.add(new DC), e.add(function (e, t) {
      let n = () => {};
      return new BC((e => {
        n(e)
      }), (() => {
        n = function (e, t) {
          const n = function (e) {
            const t = e.length - 1,
              n = [];
            return function r(i, a) {
              const o = e[i];
              for (let e = 0, s = o.length; e < s; e++) {
                const s = a.concat([o[e]]);
                i === t ? n.push(s) : r(i + 1, s)
              }
            }(0, []), n
          }(t);
          return t => {
            for (let t = 0, r = n.length; t < r; t++) e(n[t])
          }
        }(t, e())
      }))
    }((() => ["flagGroupModule", "windModule"].map((t => e.getModulesByType(t).map((e => e.subject))))), (e => {
      const t = e[0],
        n = e[1],
        r = t.flag;
      ! function (e, t) {
        const n = e.particles,
          r = MC(wC, t);
        for (let e = 0, t = n.length; e < t; e++) n[e].acceleration.add(r)
      }(r.cloth, r.object),
      function (e, t, n) {
        const r = e.particles,
          i = e.geometry.getIndex();
        if (t) {
          const l = e.restDistance * e.restDistance / 2,
            c = MC(t.pressure, n).multiplyScalar(Qd * l / 3);
          for (let e = 0, t = i.count; e < t; e += 3) {
            const t = i.getX(e),
              n = i.getX(e + 1),
              l = i.getX(e + 2),
              u = r[t],
              h = r[n],
              d = r[l],
              p = (a = u.position, o = h.position, s = d.position, TC.subVectors(s, o), EC.subVectors(a, o), TC.cross(EC), TC.normalize(), TC);
            p.multiplyScalar(p.dot(c)), u.applyForce(p), h.applyForce(p), d.applyForce(p)
          }
        }
        var a, o, s
      }(r.cloth, n, r.object)
    }))), e.add(new BC(null, (() => {
      const t = e.module("animationControlModule"),
        n = e.getModulesByType("flagGroupModule").map((e => e.subject.flag)).filter((e => e.video || e.video2));
      e.clock.running ? n.map((e => {
        e.play().catch((e => {
          e instanceof DOMException && "NotAllowedError" === e.name && (t.muted = !0)
        }))
      })) : (n.map((e => {
        e.pause()
      })), setTimeout((() => {
        e.render()
      }), 100)), n.map((e => {
        e.video && (e.video.muted = t.muted), e.video2 && (e.video2.muted = t.muted)
      }))
    }))), e
  }

  function UO() {
    document.documentElement.className += " loaded"
  }
  var kO = 0;

  function zO(e, t, n, r, i, a) {
    var o, s, l = {};
    for (s in t) "ref" == s ? o = t[s] : l[s] = t[s];
    var c = {
      type: e,
      props: l,
      key: n,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: --kO,
      __source: i,
      __self: a
    };
    if ("function" == typeof e && (o = e.defaultProps))
      for (s in o) void 0 === l[s] && (l[s] = o[s]);
    return Pl.vnode && Pl.vnode(c), c
  }

  function FO() {
    return zO("div", {
      className: "content-section",
      children: [zO("p", {
        children: "A web app for simulating a waving flag."
      }), zO("hr", {}), zO("p", {
        children: ["To learn more about FlagWaver,", zO("br", {}), " ", zO("a", {
          href: "https://github.com/krikienoid/flagwaver",
          target: "_blank",
          rel: "noopener",
          children: "view the project on GitHub"
        }), "."]
      })]
    })
  }
  const BO = gc(null);

  function HO(e) {
    return t => zO(BO.Consumer, {
      children: n => n && zO(e, {
        ...t,
        app: n
      })
    })
  }

  function GO(e) {
    let {
      app: t
    } = e;
    const n = Oc(null);
    return Dc((() => (t.canvas.setAttribute("role", "img"), t.canvas.setAttribute("aria-label", "Animation view"), n.current.appendChild(t.canvas), t.module("resizeModule").resize(), () => {
      n.current.removeChild(this.props.app.canvas)
    })), []), zO("div", {
      ref: n,
      className: "app-canvas"
    })
  }
  GO.propTypes = {
    app: Nu.object.isRequired
  };
  var VO = HO(GO);
  const WO = "".concat(".", "/assets/img/flag-default.png"),
    jO = (e, t) => t.reduce(((t, n) => (t[n] = e[n], t)), {}),
    qO = e => {
      const t = AN(e);
      return t && t.type.match(/video\/.*/) || e.match(/\.(3gp|avi|flv|mov|mp4|mpg|ogg|webm|wmv)$/)
    },
    XO = e => new Promise(((t, n) => {
      eL(e, (e => {
        t(e)
      }), (e => {
        n("Image could not be loaded.")
      }))
    })),
    YO = e => new Promise(((t, n) => {
      ! function (e, t, n) {
        const r = document.createElement("video");
        r.addEventListener("loadeddata", (function () {
          t && t(r)
        })), r.addEventListener("error", (function (t) {
          console.error("FlagWaver.loadVideo: Failed to load video from ".concat(e, ".")), n && n(t)
        })), r.crossOrigin = "anonymous", r.loop = !0, r.preload = "auto", r.src = e
      }(e, (e => {
        t(e)
      }), (e => {
        n("Video could not be loaded.")
      }))
    })),
    ZO = (e, t) => {
      const {
        options: n,
        ...r
      } = e, {
        options: i,
        ...a
      } = t, o = Object.keys(n).filter((e => "isTwoSided" !== e)).reduce(((e, t) => e && n[t] === i[t]), !0), s = Object.keys(r).reduce(((e, t) => e && r[t] === a[t]), !0);
      return o && s
    };

  function KO(e) {
    let {
      app: t,
      options: n,
      addToast: r
    } = e;
    const i = Oc(),
      a = e => {
        t.remove(i.current);
        const r = jO(n, ["flagpoleType", "verticalHoisting"]);
        if (i.current = new OC({
            flagpole: VC(r, e),
            flag: e
          }), r.flagpoleType === rp.HORIZONTAL || r.flagpoleType === rp.OUTRIGGER) {
          const e = i.current.subject,
            t = e.flagpole,
            n = t.constructor.defaults.poleLength;
          e.object.position.set(0, n, 0).sub(t.top)
        }
        t.add(i.current), t.render(), t.needsUpdate = !0
      },
      o = () => {
        const {
          imageSrc: e,
          backSideImageSrc: t
        } = n, i = e || WO, o = t, s = jO(n, ["width", "height", "hoisting", "orientation", "resolution"]), l = jO(n, ["mass", "restDistance"]);
        new Promise(((e, t) => {
          qO(i) || qO(o) ? Promise.all([qO(i) ? YO(i) : XO(i), qO(o) ? YO(o) : o ? XO(o) : null]).then((t => {
            let [n, r] = t;
            e(new dC({
              ...l,
              ...JC({
                ...s,
                image: n,
                backSideImage: r
              })
            }))
          })).catch(t) : Promise.all([XO(i), o ? XO(o) : null]).then((t => {
            let [n, r] = t;
            e(new oC({
              ...l,
              ...JC({
                ...s,
                image: n,
                backSideImage: r
              })
            }))
          })).catch(t)
        })).then((e => {
          a(e)
        })).catch((e => {
          a(new oC(l)), r({
            status: "error",
            message: e
          })
        }))
      };
    return Dc((() => (i.current = new OC, t.add(i.current), t.needsUpdate = !0, o(), () => {
      t.remove(i.current)
    })), []), Dc((() => {
      o()
    }), [n]), null
  }
  KO.propTypes = {
    app: Nu.object.isRequired,
    options: Nu.object.isRequired,
    addToast: Nu.func.isRequired
  };
  var $O = HO(Zc(KO, ZO));
  const JO = "flagwaver/toasts/ADD_TOAST",
    QO = "flagwaver/toasts/REMOVE_TOAST";
  let eI = 0;
  const tI = {
      status: "default",
      message: ""
    },
    nI = function () {
      return {
        type: JO,
        payload: {
          ...tI,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          id: eI++
        }
      }
    },
    rI = e => ({
      type: QO,
      payload: e
    });
  var iI = Td((e => ({
    options: e.editor.present.flagGroup
  })), {
    addToast: nI
  })($O);

  function aI(e) {
    e.castShadow = !0, e.shadow.mapSize.width = 2048, e.shadow.mapSize.height = 2048, e.shadow.camera.top = 10, e.shadow.camera.left = -10, e.shadow.camera.bottom = -10, e.shadow.camera.right = 10, e.shadow.camera.far = 1e3
  }

  function oI(e) {
    let {
      app: t,
      options: n
    } = e;
    const {
      scene: r
    } = t, i = Oc([]), a = () => {
      switch (i.current.map((e => {
          r.remove(e)
        })), n.background) {
        case hL.BLUE_SKY:
          i.current = function () {
            const e = new qA(16777215, .6),
              t = new jA(14674943, 6.5);
            t.position.set(20, 70, 40), aI(t);
            const n = new jA(11329439, .35);
            return n.position.set(0, -1, 0), [e, t, n]
          }();
          break;
        case hL.NIGHT_SKY_CLOUDS:
          i.current = function () {
            const e = new qA(16777215, .004),
              t = new jA(11056354, 4.5);
            t.position.set(-55, 50, -80), aI(t);
            const n = new jA(6846378, .3);
            return n.position.set(0, 1, 0), [e, t, n]
          }();
          break;
        case hL.CLASSIC:
        default:
          i.current = function () {
            const e = new qA(16777215, .4),
              t = new jA(16711674, 4.5);
            return t.position.set(20, 70, 40), aI(t), [e, t]
          }()
      }
      i.current.map((e => {
        r.add(e)
      })), t.render()
    };
    return Dc((() => (i.current = [], a(), () => {
      i.current.map((e => {
        r.remove(e)
      }))
    })), []), Dc((() => {
      a()
    }), [n]), null
  }
  oI.propTypes = {
    app: Nu.object.isRequired,
    options: Nu.object.isRequired
  };
  var sI = HO(oI);
  var lI = Td((e => ({
    options: e.editor.present.scenery
  })))(sI);
  const cI = new xS(0, -1, 0);

  function uI(e) {
    return new xS(0, 0, 1).applyAxisAngle(cI, e * Math.PI / 180)
  }

  function hI(e) {
    let {
      app: t,
      options: n
    } = e;
    const r = Oc(),
      i = () => {
        t.remove(r.current), r.current = new HC({
          speed: n.enabled ? n.controlled ? n.speed : fC.defaults.speed : 0,
          direction: n.controlled ? uI(n.direction) : uI(0),
          directionFn: n.controlled ? pC.noEffect : pC.rotatingDirection
        }), t.add(r.current), t.needsUpdate = !0
      };
    return Dc((() => (r.current = new HC, t.add(r.current), t.needsUpdate = !0, i(), () => {
      t.remove(r.current)
    })), []), Dc((() => {
      i()
    }), [n]), null
  }
  hI.propTypes = {
    app: Nu.object.isRequired,
    options: Nu.object.isRequired
  };
  var dI = HO(hI);
  var pI = Td((e => ({
    options: e.editor.present.wind
  })))(dI);

  function fI() {
    return zO(jl, {
      children: [zO(iI, {}), zO(lI, {}), zO(pI, {})]
    })
  }

  function mI(e) {
    let {
      component: t,
      className: n
    } = e;
    return zO(t, {
      className: "icon svg-icon" + (n ? " " + n : ""),
      viewBox: "0 0 24 24",
      attr: {
        "aria-hidden": !0,
        focusable: !1
      }
    })
  }

  function gI(e) {
    let {
      className: t,
      valid: n,
      feedback: r,
      feedbackId: i,
      children: a,
      ...o
    } = e;
    return zO("div", {
      className: t + (n ? "" : " has-error"),
      ...o,
      children: [a, n ? null : zO("p", {
        className: "form-input-hint",
        id: i,
        children: r
      })]
    })
  }
  mI.propTypes = {
    component: Nu.elementType.isRequired,
    className: Nu.string
  }, gI.propTypes = {
    className: Nu.string,
    valid: Nu.bool.isRequired,
    feedback: Nu.node,
    feedbackId: Nu.string,
    children: Nu.node
  }, gI.defaultProps = {
    className: "form-group"
  };
  let vI = 0;

  function _I(e) {
    const [t, n] = Rc(e);
    if (!t) {
      const e = function () {
        return "".concat(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "id-").concat(++vI)
      }("uid-");
      return n(e), e
    }
    return t
  }

  function yI(e) {
    let {
      id: t,
      label: n,
      name: r,
      placeholder: i,
      value: a,
      disabled: o,
      validator: s,
      onChange: l
    } = e;
    const c = _I(t),
      {
        valid: u,
        feedback: h
      } = s(a),
      d = h ? "".concat(c, "-feedback") : null;
    return zO(gI, {
      valid: u,
      feedback: h,
      feedbackId: d,
      children: [zO("label", {
        className: "form-label",
        htmlFor: c,
        children: n
      }), zO("input", {
        type: "text",
        className: "form-input",
        id: c,
        name: r,
        value: a,
        placeholder: i,
        disabled: o,
        "aria-describedby": d,
        onChange: l
      })]
    })
  }
  yI.propTypes = {
    id: Nu.string,
    label: Nu.node,
    name: Nu.string,
    placeholder: Nu.string,
    value: Nu.string,
    disabled: Nu.bool,
    validator: Nu.func,
    onChange: Nu.func
  }, yI.defaultProps = {
    label: "Field",
    placeholder: "Type here...",
    disabled: !1,
    validator: () => ({
      valid: !0
    })
  };
  const bI = new ZA,
    xI = e => e * Math.PI / 180,
    SI = e => 180 * e / Math.PI,
    MI = e => Number(e.toFixed(2));

  function wI(e) {
    let {
      app: t
    } = e;
    const {
      orbitControls: n
    } = t.module("orbitControlsModule"), [r, i] = Rc(0), [a, o] = Rc(0), [s, l] = Rc(0), [c, u] = Rc(0), [h, d] = Rc(0), [p, f] = Rc(0), m = (e, t) => {
      jC(t) && (bI.radius = n.getDistance(), bI.theta = n.getAzimuthalAngle(), bI.phi = n.getPolarAngle(), bI[e] = Number(t), n.object.position.setFromSpherical(bI).add(n.target), n.update())
    }, g = e => {
      const t = e.target.value;
      jC(t) && (n.target[e.target.name] = Number(t), n.update())
    };
    return Dc((() => {
      const e = () => {
        t.refresh(), i(n.getDistance()), o(n.getAzimuthalAngle()), l(n.getPolarAngle()), u(n.target.x), d(n.target.y), f(n.target.z)
      };
      return e(), n.addEventListener("change", e), () => {
        n.removeEventListener("change", e)
      }
    }), []), zO("div", {
      className: "form-section",
      children: [zO("div", {
        className: "form-group",
        children: zO("fieldset", {
          className: "field-group",
          children: [zO("legend", {
            className: "field-group-legend",
            children: "Position"
          }), zO("div", {
            className: "field-group-body",
            children: [zO(yI, {
              label: "r",
              name: "radius",
              value: MI(r),
              onChange: e => {
                m(e.target.name, Number(e.target.value))
              }
            }), zO(yI, {
              label: "θ",
              name: "theta",
              value: MI(SI(a)),
              onChange: e => {
                m(e.target.name, xI(Number(e.target.value)))
              }
            }), zO(yI, {
              label: "φ",
              name: "phi",
              value: MI(SI(s)),
              onChange: e => {
                m(e.target.name, xI(Number(e.target.value)))
              }
            })]
          })]
        })
      }), zO("div", {
        className: "form-group",
        children: zO("fieldset", {
          className: "field-group",
          children: [zO("legend", {
            className: "field-group-legend",
            children: "Target"
          }), zO("div", {
            className: "field-group-body",
            children: [zO(yI, {
              label: "x",
              name: "x",
              value: MI(c),
              onChange: g
            }), zO(yI, {
              label: "y",
              name: "y",
              value: MI(h),
              onChange: g
            }), zO(yI, {
              label: "z",
              name: "z",
              value: MI(p),
              onChange: g
            })]
          })]
        })
      }), zO("div", {
        className: "form-group",
        children: zO("button", {
          type: "button",
          className: "btn",
          onClick: () => {
            n.reset()
          },
          children: [zO(mI, {
            component: Jd
          }), zO("span", {
            className: "btn-text",
            children: "Reset camera"
          })]
        })
      })]
    })
  }
  wI.propTypes = {
    app: Nu.object.isRequired
  };
  var TI = HO(wI);

  function EI(e) {
    let {
      className: t,
      openClassName: n,
      open: r,
      onClick: i,
      children: a,
      ...o
    } = e;
    return zO("button", {
      type: "button",
      className: t + (r ? " " + n : ""),
      onClick: i,
      ...o,
      children: a
    })
  }

  function AI(e) {
    let {
      className: t,
      openClassName: n,
      open: r,
      onClick: i,
      ...a
    } = e;
    return zO("div", {
      className: t + (r ? " " + n : ""),
      onClick: i,
      ...a
    })
  }

  function CI(e) {
    let {
      className: t,
      openClassName: n,
      open: r,
      children: i,
      ...a
    } = e;
    return zO("div", {
      className: t + (r ? " " + n : ""),
      "aria-hidden": !r,
      ...a,
      children: i
    })
  }
  EI.propTypes = {
    className: Nu.string,
    openClassName: Nu.string,
    open: Nu.bool.isRequired,
    onClick: Nu.func,
    children: Nu.node
  }, EI.defaultProps = {
    className: "drawer-btn",
    openClassName: "open"
  }, AI.propTypes = {
    className: Nu.string,
    openClassName: Nu.string,
    open: Nu.bool.isRequired,
    onClick: Nu.func
  }, AI.defaultProps = {
    className: "drawer-overlay",
    openClassName: "open"
  }, CI.propTypes = {
    className: Nu.string,
    openClassName: Nu.string,
    open: Nu.bool.isRequired,
    children: Nu.node
  }, CI.defaultProps = {
    className: "drawer",
    openClassName: "open"
  }, CI.Button = EI, CI.Overlay = AI;
  /*!
   * tabbable 5.3.3
   * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
   */
  var LI = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"].join(","),
    RI = "undefined" == typeof Element,
    PI = RI ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    DI = !RI && Element.prototype.getRootNode ? function (e) {
      return e.getRootNode()
    } : function (e) {
      return e.ownerDocument
    },
    NI = function e(t, n, r) {
      for (var i = [], a = Array.from(t); a.length;) {
        var o = a.shift();
        if ("SLOT" === o.tagName) {
          var s = o.assignedElements(),
            l = e(s.length ? s : o.children, !0, r);
          r.flatten ? i.push.apply(i, l) : i.push({
            scope: o,
            candidates: l
          })
        } else {
          PI.call(o, LI) && r.filter(o) && (n || !t.includes(o)) && i.push(o);
          var c = o.shadowRoot || "function" == typeof r.getShadowRoot && r.getShadowRoot(o),
            u = !r.shadowRootFilter || r.shadowRootFilter(o);
          if (c && u) {
            var h = e(!0 === c ? o.children : c.children, !0, r);
            r.flatten ? i.push.apply(i, h) : i.push({
              scope: o,
              candidates: h
            })
          } else a.unshift.apply(a, o.children)
        }
      }
      return i
    },
    OI = function (e, t) {
      return e.tabIndex < 0 && (t || /^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || e.isContentEditable) && isNaN(parseInt(e.getAttribute("tabindex"), 10)) ? 0 : e.tabIndex
    },
    II = function (e, t) {
      return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
    },
    UI = function (e) {
      return "INPUT" === e.tagName
    },
    kI = function (e) {
      return function (e) {
        return UI(e) && "radio" === e.type
      }(e) && ! function (e) {
        if (!e.name) return !0;
        var t, n = e.form || DI(e),
          r = function (e) {
            return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
          };
        if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = r(window.CSS.escape(e.name));
        else try {
          t = r(e.name)
        } catch (e) {
          return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
        }
        var i = function (e, t) {
          for (var n = 0; n < e.length; n++)
            if (e[n].checked && e[n].form === t) return e[n]
        }(t, e.form);
        return !i || i === e
      }(e)
    },
    zI = function (e) {
      var t = e.getBoundingClientRect(),
        n = t.width,
        r = t.height;
      return 0 === n && 0 === r
    },
    FI = function (e, t) {
      return !(t.disabled || function (e) {
        return UI(e) && "hidden" === e.type
      }(t) || function (e, t) {
        var n = t.displayCheck,
          r = t.getShadowRoot;
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        var i = PI.call(e, "details>summary:first-of-type") ? e.parentElement : e;
        if (PI.call(i, "details:not([open]) *")) return !0;
        var a = DI(e).host,
          o = (null == a ? void 0 : a.ownerDocument.contains(a)) || e.ownerDocument.contains(e);
        if (n && "full" !== n) {
          if ("non-zero-area" === n) return zI(e)
        } else {
          if ("function" == typeof r) {
            for (var s = e; e;) {
              var l = e.parentElement,
                c = DI(e);
              if (l && !l.shadowRoot && !0 === r(l)) return zI(e);
              e = e.assignedSlot ? e.assignedSlot : l || c === e.ownerDocument ? l : c.host
            }
            e = s
          }
          if (o) return !e.getClientRects().length
        }
        return !1
      }(t, e) || function (e) {
        return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function (e) {
          return "SUMMARY" === e.tagName
        }))
      }(t) || function (e) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
          for (var t = e.parentElement; t;) {
            if ("FIELDSET" === t.tagName && t.disabled) {
              for (var n = 0; n < t.children.length; n++) {
                var r = t.children.item(n);
                if ("LEGEND" === r.tagName) return !!PI.call(t, "fieldset[disabled] *") || !r.contains(e)
              }
              return !0
            }
            t = t.parentElement
          }
        return !1
      }(t))
    },
    BI = function (e, t) {
      return !(kI(t) || OI(t) < 0 || !FI(e, t))
    },
    HI = function (e) {
      var t = parseInt(e.getAttribute("tabindex"), 10);
      return !!(isNaN(t) || t >= 0)
    },
    GI = function e(t) {
      var n = [],
        r = [];
      return t.forEach((function (t, i) {
        var a = !!t.scope,
          o = a ? t.scope : t,
          s = OI(o, a),
          l = a ? e(t.candidates) : o;
        0 === s ? a ? n.push.apply(n, l) : n.push(o) : r.push({
          documentOrder: i,
          tabIndex: s,
          item: t,
          isScope: a,
          content: l
        })
      })), r.sort(II).reduce((function (e, t) {
        return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
      }), []).concat(n)
    },
    VI = function (e, t) {
      var n;
      return n = (t = t || {}).getShadowRoot ? NI([e], t.includeContainer, {
        filter: BI.bind(null, t),
        flatten: !1,
        getShadowRoot: t.getShadowRoot,
        shadowRootFilter: HI
      }) : function (e, t, n) {
        var r = Array.prototype.slice.apply(e.querySelectorAll(LI));
        return t && PI.call(e, LI) && r.unshift(e), r.filter(n)
      }(e, t.includeContainer, BI.bind(null, t)), GI(n)
    };
  const WI = e => {
      for (let t = 0, n = e.length; t < n; t++) {
        const n = e[t],
          r = n.getAttribute("tabindex");
        n.setAttribute("tabindex", "-1"), r && n.setAttribute("data-tabindex", r)
      }
    },
    jI = e => {
      for (let t = 0, n = e.length; t < n; t++) {
        const n = e[t],
          r = n.getAttribute("data-tabindex");
        n.removeAttribute("tabindex"), r && (n.setAttribute("tabindex", r), n.removeAttribute("data-tabindex"))
      }
    };

  function qI(e) {
    let {
      disabled: t,
      children: n
    } = e;
    const [r, i] = function (e) {
      const t = Oc(null),
        n = Qc.only(e);
      return [Tu(n, {
        ref: e => {
          t.current = e, "function" == typeof n.ref ? n.ref(e) : "object" == typeof n.ref && (n.ref.current = e)
        }
      }), t.current]
    }(n);
    return function (e, t) {
      const n = Oc([]);
      Dc((() => {
        e && (t ? (n.current = VI(e), WI(n.current)) : jI(n.current))
      }), [e, t])
    }(i, t), r
  }

  function XI(e) {
    let {
      title: t,
      children: n
    } = e;
    return zO("section", {
      className: "panel",
      children: [zO("header", {
        className: "panel-header",
        children: zO("div", {
          className: "panel-header-inner",
          children: [zO("div", {
            className: "panel-side"
          }), zO("div", {
            className: "panel-main",
            children: zO("h2", {
              className: "panel-heading",
              children: t
            })
          })]
        })
      }), zO("div", {
        className: "panel-body",
        children: n
      })]
    })
  }

  function YI(e) {
    let {
      editor: t,
      resetApp: n,
      undo: r,
      redo: i
    } = e;
    const a = t.past.length > 0,
      o = t.future.length > 0;
    return zO("div", {
      className: "form-section",
      children: zO("div", {
        className: "form-group",
        children: [zO("div", {
          className: "btn-group",
          children: zO("button", {
            type: "button",
            className: "btn",
            onClick: n,
            children: [zO(mI, {
              component: Kd
            }), zO("span", {
              className: "btn-text",
              children: "Reset"
            })]
          })
        }), zO("div", {
          className: "btn-group",
          children: [zO("button", {
            type: "button",
            className: "btn",
            title: "Undo",
            disabled: !a,
            onClick: () => {
              a && r()
            },
            children: [zO(mI, {
              component: Gd
            }), zO("span", {
              className: "sr-only",
              children: "Undo"
            })]
          }), zO("button", {
            type: "button",
            className: "btn",
            title: "Redo",
            disabled: !o,
            onClick: () => {
              o && i()
            },
            children: [zO(mI, {
              component: Hd
            }), zO("span", {
              className: "sr-only",
              children: "Redo"
            })]
          })]
        })]
      })
    })
  }
  qI.propTypes = {
    disabled: Nu.bool.isRequired,
    children: Nu.element.isRequired
  }, XI.propTypes = {
    title: Nu.node,
    children: Nu.node
  }, YI.propTypes = {
    editor: Nu.object.isRequired,
    resetApp: Nu.func,
    undo: Nu.func,
    redo: Nu.func
  }, YI.defaultProps = {
    resetApp: () => {},
    undo: () => {},
    redo: () => {}
  };
  var ZI = Td((e => ({
    editor: e.editor
  })), {
    resetApp: () => ({
      type: WN
    }),
    undo: () => ({
      type: jN
    }),
    redo: () => ({
      type: qN
    })
  })(YI);

  function KI(e) {
    let {
      muted: t,
      paused: n,
      setMuted: r,
      setPaused: i
    } = e;
    const a = kc(BO);
    if (a) {
      const e = a.module("animationControlModule");
      return t !== e.muted && r(e.muted), zO("div", {
        className: "form-section",
        children: zO("div", {
          className: "form-group",
          children: [zO("div", {
            className: "btn-group",
            children: [zO("button", {
              type: "button",
              className: "btn",
              title: n ? "Play" : "Pause",
              onClick: () => {
                n ? e.play() : e.pause(), i(!n)
              },
              children: [zO(mI, {
                component: n ? Id : Od
              }), zO("span", {
                className: "sr-only",
                children: n ? "Play" : "Pause"
              })]
            }), zO("button", {
              type: "button",
              className: "btn",
              title: "Stop",
              onClick: () => {
                e.pause(), e.reset(), i(!0)
              },
              children: [zO(mI, {
                component: kd
              }), zO("span", {
                className: "sr-only",
                children: "Stop"
              })]
            }), zO("button", {
              type: "button",
              className: "btn",
              title: "Step forward",
              onClick: () => {
                e.step()
              },
              children: [zO(mI, {
                component: Ud
              }), zO("span", {
                className: "sr-only",
                children: "Step forward"
              })]
            })]
          }), zO("div", {
            className: "btn-group",
            children: zO("button", {
              type: "button",
              className: "btn",
              title: t ? "Unmute" : "Mute",
              onClick: () => {
                e.muted = !t, a.refresh(), r(!t)
              },
              children: [zO(mI, {
                component: t ? zd : Fd
              }), zO("span", {
                className: "sr-only",
                children: t ? "Unmute" : "Mute"
              })]
            })
          })]
        })
      })
    }
    return null
  }
  KI.propTypes = {
    muted: Nu.bool,
    paused: Nu.bool,
    setMuted: Nu.func,
    setPaused: Nu.func
  }, KI.defaultProps = {
    setMuted: () => {},
    setPaused: () => {}
  };
  const $I = "flagwaver/animationControl/SET_MUTED",
    JI = "flagwaver/animationControl/SET_PAUSED",
    QI = {
      muted: !1,
      paused: !1
    };
  var eU = Td((e => ({
    muted: e.animationControl.muted,
    paused: e.animationControl.paused
  })), {
    setMuted: e => ({
      type: $I,
      payload: e
    }),
    setPaused: e => ({
      type: JI,
      payload: e
    })
  })(KI);

  function tU(e) {
    let {
      options: t,
      addToast: n
    } = e;
    const {
      background: r,
      backgroundColor: i,
      backgroundImageSrc: a
    } = t, [o, s] = Rc("");
    return Dc((() => {
      s(""), a && eL(a, (e => {
        s(a)
      }), (e => {
        n({
          status: "error",
          message: "Image could not be loaded."
        })
      }))
    }), [a]), zO("div", {
      className: "app-bg bg-image-full bg-".concat(r),
      style: r === hL.CUSTOM ? {
        backgroundColor: i,
        backgroundImage: o ? 'url("'.concat(o.replace(/"/g, '\\"'), '")') : null
      } : null
    })
  }
  tU.propTypes = {
    options: Nu.object.isRequired,
    addToast: Nu.func.isRequired
  };
  var nU = Td((e => ({
    options: e.editor.present.scenery
  })), {
    addToast: nI
  })(tU);

  function rU(e) {
    let {
      id: t,
      label: n,
      name: r,
      value: i,
      options: a,
      disabled: o,
      block: s,
      buttonClassName: l,
      buttonActiveClassName: c,
      validator: u,
      onChange: h
    } = e;
    const d = _I(t),
      {
        valid: p,
        feedback: f
      } = u(i),
      m = f ? "".concat(d, "-feedback") : null,
      g = "".concat(d, "-options");
    return zO(gI, {
      valid: p,
      feedback: f,
      feedbackId: m,
      children: zO("fieldset", {
        className: "btn-select" + (s ? " btn-select-block" : ""),
        children: [zO("legend", {
          className: "form-label",
          children: n
        }), zO("div", {
          className: "btn-select-options",
          children: a.map(((e, t) => {
            const {
              label: n,
              value: a
            } = e, s = "".concat(d, "-option-").concat(t + 1), u = a === i;
            return zO("div", {
              className: "btn-select-option",
              children: [zO("input", {
                type: "radio",
                id: s,
                name: g,
                value: a,
                checked: u,
                disabled: o,
                onChange: () => {
                  h(r, a)
                }
              }), zO("label", {
                className: l + (u ? " " + c : ""),
                htmlFor: s,
                children: n
              })]
            }, a)
          }))
        })]
      })
    })
  }

  function iU(e) {
    let {
      id: t,
      label: n,
      name: r,
      value: i,
      accept: a,
      defaultText: o,
      disabled: s,
      buttonText: l,
      validator: c,
      onChange: u,
      isValidFileType: h
    } = e;
    const d = _I(t),
      {
        valid: p,
        feedback: f
      } = c(i),
      m = f ? "".concat(d, "-feedback") : null,
      g = i || null;
    return zO(gI, {
      valid: p,
      feedback: f,
      feedbackId: m,
      children: [zO("label", {
        className: "form-label",
        htmlFor: d,
        children: n
      }), zO("div", {
        className: "form-file",
        children: [zO("input", {
          type: "file",
          className: "form-file-input",
          id: d,
          name: r,
          accept: a,
          disabled: s,
          "aria-describedby": m,
          onChange: e => {
            if (!window.File) return void console.error("The File APIs are not fully supported in this browser.");
            const t = e.target.files[0];
            t ? h(t.type) ? u(r, t) : console.error("Invalid file type.") : console.error("No file was uploaded.")
          }
        }), zO("div", {
          className: "input-group form-file-btn",
          "aria-hidden": "true",
          children: [zO("input", {
            type: "text",
            className: "form-input",
            value: g ? g.name : "",
            placeholder: o,
            disabled: "disabled"
          }), zO("div", {
            className: "btn input-group-btn",
            children: l
          })]
        })]
      })]
    })
  }

  function aU(e) {
    let {
      id: t,
      label: n,
      name: r,
      placeholder: i,
      value: a,
      disabled: o,
      buttonTitle: s,
      buttonText: l,
      validator: c,
      onChange: u,
      onSubmit: h
    } = e;
    const d = _I(t),
      {
        valid: p,
        feedback: f
      } = c(a),
      m = f ? "".concat(d, "-feedback") : null;
    return zO(gI, {
      valid: p,
      feedback: f,
      feedbackId: m,
      children: [zO("label", {
        className: "form-label",
        htmlFor: d,
        children: n
      }), zO("div", {
        className: "input-group",
        children: [zO("input", {
          type: "url",
          className: "form-input",
          id: d,
          name: r,
          value: a,
          placeholder: i,
          disabled: o,
          "aria-describedby": m,
          onChange: u,
          onKeyDown: e => {
            const t = e.key || e.keyCode;
            "Enter" !== t && 13 !== t || h(e)
          }
        }), zO("button", {
          type: "button",
          className: "btn input-group-btn",
          title: s,
          disabled: o,
          onClick: h,
          children: l
        })]
      })]
    })
  }
  rU.propTypes = {
    id: Nu.string,
    label: Nu.node,
    name: Nu.string,
    value: Nu.string,
    options: Nu.arrayOf(Nu.shape({
      label: Nu.node,
      value: Nu.string.isRequired
    })),
    disabled: Nu.bool,
    block: Nu.bool,
    buttonClassName: Nu.string,
    buttonActiveClassName: Nu.string,
    validator: Nu.func,
    onChange: Nu.func
  }, rU.defaultProps = {
    label: "Select",
    options: [],
    disabled: !1,
    buttonClassName: "btn",
    buttonActiveClassName: "active",
    validator: () => ({
      valid: !0
    }),
    onChange: () => {}
  }, iU.propTypes = {
    id: Nu.string,
    label: Nu.node,
    name: Nu.string,
    value: Nu.instanceOf(File),
    accept: Nu.string,
    defaultText: Nu.node,
    disabled: Nu.bool,
    buttonText: Nu.node,
    validator: Nu.func,
    onChange: Nu.func,
    isValidFileType: Nu.func
  }, iU.defaultProps = {
    label: "File",
    defaultText: "Select file...",
    disabled: !1,
    buttonText: "Browse...",
    validator: () => ({
      valid: !0
    }),
    onChange: () => {},
    isValidFileType: () => !0
  }, aU.propTypes = {
    id: Nu.string,
    label: Nu.node,
    name: Nu.string,
    placeholder: Nu.string,
    value: Nu.string,
    disabled: Nu.bool,
    buttonText: Nu.node,
    validator: Nu.func,
    onChange: Nu.func,
    onSubmit: Nu.func
  }, aU.defaultProps = {
    label: "URL",
    placeholder: "https://www...",
    disabled: !1,
    buttonText: "Go",
    validator: () => ({
      valid: !0
    })
  };
  const oU = {
      WEB: "web",
      FILE: "file"
    },
    sU = e => !e || (e => {
      try {
        return !!new URL(e)
      } catch (e) {
        return !1
      }
    })(e);

  function lU(e) {
    let {
      label: t,
      name: n,
      value: r,
      accept: i,
      onChange: a,
      isValidFileType: o
    } = e;
    const [s, l] = Rc(oU.WEB), [c, u] = Rc(""), [h, d] = Rc(!1);
    return Dc((() => {
      (e => {
        u(e && !AN(e) ? e : "")
      })(r)
    }), [r]), zO("div", {
      className: "form-group form-file-picker-group",
      children: zO("fieldset", {
        className: "field-group",
        children: [zO("legend", {
          className: "field-group-legend",
          children: t
        }), zO("div", {
          className: "field-group-body",
          children: [zO(rU, {
            label: "From",
            name: "inputMode",
            value: s,
            options: [{
              label: "Web",
              value: oU.WEB
            }, {
              label: "File",
              value: oU.FILE
            }],
            block: !0,
            onChange: (e, t) => {
              l(t), d(!1)
            }
          }), s === oU.WEB && zO(aU, {
            label: "URL",
            name: "url",
            value: c,
            buttonTitle: "Load",
            buttonText: zO(jl, {
              children: [zO(mI, {
                component: qd
              }), zO("span", {
                className: "sr-only",
                children: "Load"
              })]
            }),
            validator: e => h && !sU(e) ? {
              valid: !1,
              feedback: "Please enter a valid URL."
            } : {
              valid: !0
            },
            onChange: e => {
              u(e.target.value), d(!1)
            },
            onSubmit: () => {
              d(!0), sU(c) && a(n, c)
            }
          }), s === oU.FILE && zO(iU, {
            label: "File",
            name: "file",
            value: AN(r),
            accept: i,
            defaultText: "Select file...",
            buttonText: zO(jl, {
              children: [zO(mI, {
                component: Vd
              }), zO("span", {
                className: "sr-only",
                children: "Browse"
              })]
            }),
            onChange: (e, t) => {
              u(""), a(n, CN(t))
            },
            isValidFileType: o
          }), zO("div", {
            className: "form-group form-file-picker-group-footer",
            children: zO("button", {
              type: "button",
              className: "btn",
              onClick: () => {
                u(""), d(!1), a(n, "")
              },
              children: [zO(mI, {
                component: Nd
              }), zO("span", {
                className: "btn-text",
                children: "Clear"
              })]
            })
          })]
        })]
      })
    })
  }
  lU.propTypes = {
    label: Nu.node,
    name: Nu.string,
    value: Nu.string,
    accept: Nu.string,
    onChange: Nu.func,
    isValidFileType: Nu.func
  }, lU.defaultProps = {
    label: "Select File",
    onChange: () => {}
  };
  const cU = "default",
    uU = "success",
    hU = "warning",
    dU = "error";

  function pU(e) {
    let {
      status: t,
      children: n
    } = e;
    return zO("div", {
      className: "message message-".concat(t),
      children: zO("div", {
        className: "message-body",
        children: n
      })
    })
  }

  function fU(e) {
    let {
      options: t,
      setOptions: n
    } = e;
    return t ? zO("div", {
      className: "form-section",
      children: zO(lU, {
        label: "Select image",
        name: "imageSrc",
        value: t.imageSrc,
        accept: "image/*, video/*",
        onChange: (e, t) => {
          n({
            [e]: t
          })
        },
        isValidFileType: e => e.match("image.*") || e.match("video.*")
      })
    }) : zO(pU, {
      status: "error",
      children: zO("p", {
        children: "Error: Object does not exist."
      })
    })
  }
  pU.propTypes = {
    status: Nu.oneOf([cU, uU, hU, dU]),
    children: Nu.node.isRequired
  }, pU.defaultProps = {
    status: cU
  }, fU.propTypes = {
    options: Nu.object.isRequired,
    setOptions: Nu.func
  }, fU.defaultProps = {
    setOptions: () => {}
  };
  var mU = Td((e => ({
    options: e.editor.present.flagGroup
  })), {
    setOptions: PN
  })(fU);

  function gU(e) {
    let {
      id: t,
      label: n,
      name: r,
      value: i,
      options: a,
      disabled: o,
      validator: s,
      onChange: l
    } = e;
    const c = _I(t),
      {
        valid: u,
        feedback: h
      } = s(i),
      d = h ? "".concat(c, "-feedback") : null;
    return zO(gI, {
      valid: u,
      feedback: h,
      feedbackId: d,
      children: [zO("label", {
        className: "form-label",
        htmlFor: c,
        children: n
      }), zO("select", {
        className: "form-select",
        id: c,
        name: r,
        value: i,
        disabled: o,
        "aria-describedby": d,
        onChange: l,
        children: a.map((e => zO("option", {
          value: e.value,
          children: e.label
        }, e.value)))
      })]
    })
  }

  function vU(e) {
    let {
      id: t,
      label: n,
      name: r,
      value: i,
      disabled: a,
      validator: o,
      onChange: s
    } = e;
    const l = _I(t),
      {
        valid: c,
        feedback: u
      } = o(i),
      h = u ? "".concat(l, "-feedback") : null;
    return zO(gI, {
      valid: c,
      feedback: u,
      feedbackId: h,
      children: zO("div", {
        className: "form-switch",
        children: [zO("input", {
          type: "checkbox",
          className: "checkbox",
          id: l,
          name: r,
          checked: i,
          disabled: a,
          "aria-describedby": h,
          onChange: s
        }), zO("span", {
          className: "form-icon",
          "aria-hidden": "true"
        }), zO("label", {
          htmlFor: l,
          children: [n, zO("span", {
            className: "form-icon-target"
          })]
        })]
      })
    })
  }

  function _U(e) {
    let {
      options: t,
      setOptions: n
    } = e;
    const r = e => {
        n({
          [e.target.name]: e.target.value
        })
      },
      i = (e, t) => {
        n({
          [e]: t
        })
      };
    return t ? zO("div", {
      className: "form-section",
      children: [zO(lU, {
        label: "Select image",
        name: "imageSrc",
        value: t.imageSrc,
        accept: "image/*, video/*",
        onChange: i,
        isValidFileType: e => e.match("image.*") || e.match("video.*")
      }), zO(vU, {
        label: "Two-sided",
        name: "isTwoSided",
        value: t.isTwoSided,
        disabled: !t.imageSrc,
        onChange: e => {
          n({
            [e.target.name]: e.target.checked
          })
        }
      }), t.isTwoSided ? zO(lU, {
        label: "Select back side image",
        name: "backSideImageSrc",
        value: t.backSideImageSrc,
        accept: "image/*, video/*",
        onChange: i,
        isValidFileType: e => e.match("image.*") || e.match("video.*")
      }) : null, zO(rU, {
        label: "Hoisting",
        name: "hoisting",
        value: t.hoisting,
        options: [{
          value: tp.SINISTER,
          label: zO(jl, {
            children: [zO(mI, {
              component: Bd,
              className: "icon-hoisting-sinister"
            }), zO("span", {
              className: "btn-text",
              children: "Sinister"
            })]
          })
        }, {
          value: tp.DEXTER,
          label: zO(jl, {
            children: [zO(mI, {
              component: Bd,
              className: "icon-hoisting-dexter"
            }), zO("span", {
              className: "btn-text",
              children: "Dexter"
            })]
          })
        }],
        block: !0,
        onChange: (e, t) => {
          n({
            [e]: t
          })
        }
      }), zO(gU, {
        label: "Orientation",
        name: "orientation",
        value: t.orientation,
        onChange: r,
        options: [{
          value: np.TOP,
          label: "Top"
        }, {
          value: np.LEFT,
          label: "Left"
        }, {
          value: np.BOTTOM,
          label: "Bottom"
        }, {
          value: np.RIGHT,
          label: "Right"
        }]
      }), zO(gU, {
        label: "Flagpole type",
        name: "flagpoleType",
        value: t.flagpoleType,
        onChange: r,
        options: [{
          value: rp.VERTICAL,
          label: "Standard"
        }, {
          value: rp.HORIZONTAL,
          label: "Horizontal"
        }, {
          value: rp.OUTRIGGER,
          label: "Outrigger"
        }, {
          value: rp.CROSSBAR,
          label: "Crossbar"
        }, {
          value: rp.GALLERY,
          label: "Gallery"
        }]
      }), zO(gU, {
        label: "Vertical hanging method",
        name: "verticalHoisting",
        value: t.verticalHoisting,
        disabled: t.flagpoleType !== rp.CROSSBAR,
        onChange: r,
        options: [{
          value: ip.TOP_RIGHT,
          label: "Rotate clockwise"
        }, {
          value: ip.TOP_LEFT,
          label: "Rotate and flip"
        }, {
          value: ip.NONE,
          label: "No change"
        }]
      })]
    }) : zO(pU, {
      status: "error",
      children: zO("p", {
        children: "Error: Object does not exist."
      })
    })
  }
  gU.propTypes = {
    id: Nu.string,
    label: Nu.node,
    name: Nu.string,
    value: Nu.string,
    options: Nu.arrayOf(Nu.shape({
      label: Nu.node,
      value: Nu.string.isRequired
    })),
    disabled: Nu.bool,
    validator: Nu.func,
    onChange: Nu.func
  }, gU.defaultProps = {
    label: "Select",
    options: [],
    disabled: !1,
    validator: () => ({
      valid: !0
    })
  }, vU.propTypes = {
    id: Nu.string,
    label: Nu.node,
    name: Nu.string,
    value: Nu.bool,
    disabled: Nu.bool,
    validator: Nu.func,
    onChange: Nu.func
  }, vU.defaultProps = {
    label: "Switch",
    disabled: !1,
    validator: () => ({
      valid: !0
    })
  }, _U.propTypes = {
    options: Nu.object.isRequired,
    setOptions: Nu.func
  }, _U.defaultProps = {
    setOptions: () => {}
  };
  var yU = Td((e => ({
    options: e.editor.present.flagGroup
  })), {
    setOptions: PN
  })(_U);

  function bU() {
    return (bU = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function xU(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
    return i
  }

  function SU(e) {
    var t = Oc(e),
      n = Oc((function (e) {
        t.current && t.current(e)
      }));
    return t.current = e, n.current
  }
  var MU = function (e, t, n) {
      return void 0 === t && (t = 0), void 0 === n && (n = 1), e > n ? n : e < t ? t : e
    },
    wU = function (e) {
      return "touches" in e
    },
    TU = function (e) {
      return e && e.ownerDocument.defaultView || self
    },
    EU = function (e, t, n) {
      var r = e.getBoundingClientRect(),
        i = wU(t) ? function (e, t) {
          for (var n = 0; n < e.length; n++)
            if (e[n].identifier === t) return e[n];
          return e[0]
        }(t.touches, n) : t;
      return {
        left: MU((i.pageX - (r.left + TU(e).pageXOffset)) / r.width),
        top: MU((i.pageY - (r.top + TU(e).pageYOffset)) / r.height)
      }
    },
    AU = function (e) {
      !wU(e) && e.preventDefault()
    },
    CU = Du.memo((function (e) {
      var t = e.onMove,
        n = e.onKey,
        r = xU(e, ["onMove", "onKey"]),
        i = Oc(null),
        a = SU(t),
        o = SU(n),
        s = Oc(null),
        l = Oc(!1),
        c = Ic((function () {
          var e = function (e) {
              AU(e), (wU(e) ? e.touches.length > 0 : e.buttons > 0) && i.current ? a(EU(i.current, e, s.current)) : n(!1)
            },
            t = function () {
              return n(!1)
            };

          function n(n) {
            var r = l.current,
              a = TU(i.current),
              o = n ? a.addEventListener : a.removeEventListener;
            o(r ? "touchmove" : "mousemove", e), o(r ? "touchend" : "mouseup", t)
          }
          return [function (e) {
            var t = e.nativeEvent,
              r = i.current;
            if (r && (AU(t), ! function (e, t) {
                return t && !wU(e)
              }(t, l.current) && r)) {
              if (wU(t)) {
                l.current = !0;
                var o = t.changedTouches || [];
                o.length && (s.current = o[0].identifier)
              }
              r.focus(), a(EU(r, t, s.current)), n(!0)
            }
          }, function (e) {
            var t = e.which || e.keyCode;
            t < 37 || t > 40 || (e.preventDefault(), o({
              left: 39 === t ? .05 : 37 === t ? -.05 : 0,
              top: 40 === t ? .05 : 38 === t ? -.05 : 0
            }))
          }, n]
        }), [o, a]),
        u = c[0],
        h = c[1],
        d = c[2];
      return Dc((function () {
        return d
      }), [d]), Du.createElement("div", bU({}, r, {
        onTouchStart: u,
        onMouseDown: u,
        className: "react-colorful__interactive",
        ref: i,
        onKeyDown: h,
        tabIndex: 0,
        role: "slider"
      }))
    })),
    LU = function (e) {
      return e.filter(Boolean).join(" ")
    },
    RU = function (e) {
      var t = e.color,
        n = e.left,
        r = e.top,
        i = void 0 === r ? .5 : r,
        a = LU(["react-colorful__pointer", e.className]);
      return Du.createElement("div", {
        className: a,
        style: {
          top: 100 * i + "%",
          left: 100 * n + "%"
        }
      }, Du.createElement("div", {
        className: "react-colorful__pointer-fill",
        style: {
          backgroundColor: t
        }
      }))
    },
    PU = function (e, t, n) {
      return void 0 === t && (t = 0), void 0 === n && (n = Math.pow(10, t)), Math.round(n * e) / n
    },
    DU = function (e) {
      return "#" === e[0] && (e = e.substring(1)), e.length < 6 ? {
        r: parseInt(e[0] + e[0], 16),
        g: parseInt(e[1] + e[1], 16),
        b: parseInt(e[2] + e[2], 16),
        a: 4 === e.length ? PU(parseInt(e[3] + e[3], 16) / 255, 2) : 1
      } : {
        r: parseInt(e.substring(0, 2), 16),
        g: parseInt(e.substring(2, 4), 16),
        b: parseInt(e.substring(4, 6), 16),
        a: 8 === e.length ? PU(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
      }
    },
    NU = function (e) {
      var t = function (e) {
        var t = e.s,
          n = e.v,
          r = e.a,
          i = (200 - t) * n / 100;
        return {
          h: PU(e.h),
          s: PU(i > 0 && i < 200 ? t * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0),
          l: PU(i / 2),
          a: PU(r, 2)
        }
      }(e);
      return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)"
    },
    OU = function (e) {
      var t = e.h,
        n = e.s,
        r = e.v,
        i = e.a;
      t = t / 360 * 6, n /= 100, r /= 100;
      var a = Math.floor(t),
        o = r * (1 - n),
        s = r * (1 - (t - a) * n),
        l = r * (1 - (1 - t + a) * n),
        c = a % 6;
      return {
        r: PU(255 * [r, s, o, o, l, r][c]),
        g: PU(255 * [l, r, r, s, o, o][c]),
        b: PU(255 * [o, o, l, r, r, s][c]),
        a: PU(i, 2)
      }
    },
    IU = function (e) {
      var t = e.toString(16);
      return t.length < 2 ? "0" + t : t
    },
    UU = function (e) {
      var t = e.r,
        n = e.g,
        r = e.b,
        i = e.a,
        a = i < 1 ? IU(PU(255 * i)) : "";
      return "#" + IU(t) + IU(n) + IU(r) + a
    },
    kU = function (e) {
      var t = e.r,
        n = e.g,
        r = e.b,
        i = e.a,
        a = Math.max(t, n, r),
        o = a - Math.min(t, n, r),
        s = o ? a === t ? (n - r) / o : a === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
      return {
        h: PU(60 * (s < 0 ? s + 6 : s)),
        s: PU(a ? o / a * 100 : 0),
        v: PU(a / 255 * 100),
        a: i
      }
    },
    zU = Du.memo((function (e) {
      var t = e.hue,
        n = e.onChange,
        r = LU(["react-colorful__hue", e.className]);
      return Du.createElement("div", {
        className: r
      }, Du.createElement(CU, {
        onMove: function (e) {
          n({
            h: 360 * e.left
          })
        },
        onKey: function (e) {
          n({
            h: MU(t + 360 * e.left, 0, 360)
          })
        },
        "aria-label": "Hue",
        "aria-valuenow": PU(t),
        "aria-valuemax": "360",
        "aria-valuemin": "0"
      }, Du.createElement(RU, {
        className: "react-colorful__hue-pointer",
        left: t / 360,
        color: NU({
          h: t,
          s: 100,
          v: 100,
          a: 1
        })
      })))
    })),
    FU = Du.memo((function (e) {
      var t = e.hsva,
        n = e.onChange,
        r = {
          backgroundColor: NU({
            h: t.h,
            s: 100,
            v: 100,
            a: 1
          })
        };
      return Du.createElement("div", {
        className: "react-colorful__saturation",
        style: r
      }, Du.createElement(CU, {
        onMove: function (e) {
          n({
            s: 100 * e.left,
            v: 100 - 100 * e.top
          })
        },
        onKey: function (e) {
          n({
            s: MU(t.s + 100 * e.left, 0, 100),
            v: MU(t.v - 100 * e.top, 0, 100)
          })
        },
        "aria-label": "Color",
        "aria-valuetext": "Saturation " + PU(t.s) + "%, Brightness " + PU(t.v) + "%"
      }, Du.createElement(RU, {
        className: "react-colorful__saturation-pointer",
        top: 1 - t.v / 100,
        left: t.s / 100,
        color: NU(t)
      })))
    })),
    BU = function (e, t) {
      if (e === t) return !0;
      for (var n in e)
        if (e[n] !== t[n]) return !1;
      return !0
    };

  function HU(e, t, n) {
    var r = SU(n),
      i = Rc((function () {
        return e.toHsva(t)
      })),
      a = i[0],
      o = i[1],
      s = Oc({
        color: t,
        hsva: a
      });
    Dc((function () {
      if (!e.equal(t, s.current.color)) {
        var n = e.toHsva(t);
        s.current = {
          hsva: n,
          color: t
        }, o(n)
      }
    }), [t, e]), Dc((function () {
      var t;
      BU(a, s.current.hsva) || e.equal(t = e.fromHsva(a), s.current.color) || (s.current = {
        hsva: a,
        color: t
      }, r(t))
    }), [a, e, r]);
    var l = Uc((function (e) {
      o((function (t) {
        return Object.assign({}, t, e)
      }))
    }), []);
    return [a, l]
  }
  var GU = "undefined" != typeof window ? Nc : Dc,
    VU = new Map,
    WU = function (e) {
      GU((function () {
        var t = e.current ? e.current.ownerDocument : document;
        if (void 0 !== t && !VU.has(t)) {
          var n = t.createElement("style");
          n.innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}', VU.set(t, n);
          var r = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
          r && n.setAttribute("nonce", r), t.head.appendChild(n)
        }
      }), [])
    },
    jU = function (e) {
      var t = e.className,
        n = e.colorModel,
        r = e.color,
        i = void 0 === r ? n.defaultColor : r,
        a = e.onChange,
        o = xU(e, ["className", "colorModel", "color", "onChange"]),
        s = Oc(null);
      WU(s);
      var l = HU(n, i, a),
        c = l[0],
        u = l[1],
        h = LU(["react-colorful", t]);
      return Du.createElement("div", bU({}, o, {
        ref: s,
        className: h
      }), Du.createElement(FU, {
        hsva: c,
        onChange: u
      }), Du.createElement(zU, {
        hue: c.h,
        onChange: u,
        className: "react-colorful__last-control"
      }))
    },
    qU = {
      defaultColor: "000",
      toHsva: function (e) {
        return kU(DU(e))
      },
      fromHsva: function (e) {
        return function (e) {
          return UU(OU(e))
        }({
          h: e.h,
          s: e.s,
          v: e.v,
          a: 1
        })
      },
      equal: function (e, t) {
        return e.toLowerCase() === t.toLowerCase() || BU(DU(e), DU(t))
      }
    },
    XU = function (e) {
      return Du.createElement(jU, bU({}, e, {
        colorModel: qU
      }))
    },
    YU = /^#?([0-9A-F]{3,8})$/i,
    ZU = function (e) {
      var t = e.color,
        n = void 0 === t ? "" : t,
        r = e.onChange,
        i = e.onBlur,
        a = e.escape,
        o = e.validate,
        s = e.format,
        l = e.process,
        c = xU(e, ["color", "onChange", "onBlur", "escape", "validate", "format", "process"]),
        u = Rc((function () {
          return a(n)
        })),
        h = u[0],
        d = u[1],
        p = SU(r),
        f = SU(i),
        m = Uc((function (e) {
          var t = a(e.target.value);
          d(t), o(t) && p(l ? l(t) : t)
        }), [a, l, o, p]),
        g = Uc((function (e) {
          o(e.target.value) || d(a(n)), f(e)
        }), [n, a, o, f]);
      return Dc((function () {
        d(a(n))
      }), [n, a]), Du.createElement("input", bU({}, c, {
        value: s ? s(h) : h,
        spellCheck: "false",
        onChange: m,
        onBlur: g
      }))
    },
    KU = function (e) {
      return "#" + e
    },
    $U = function (e) {
      var t = e.prefixed,
        n = e.alpha,
        r = xU(e, ["prefixed", "alpha"]),
        i = Uc((function (e) {
          return e.replace(/([^0-9A-F]+)/gi, "").substring(0, n ? 8 : 6)
        }), [n]),
        a = Uc((function (e) {
          return function (e, t) {
            var n = YU.exec(e),
              r = n ? n[1].length : 0;
            return 3 === r || 6 === r || !!t && 4 === r || !!t && 8 === r
          }(e, n)
        }), [n]);
      return Du.createElement(ZU, bU({}, r, {
        escape: i,
        format: t ? KU : void 0,
        process: KU,
        validate: a
      }))
    };

  function JU(e) {
    let {
      id: t,
      label: n,
      name: r,
      value: i,
      onChange: a
    } = e;
    const o = _I(t),
      s = "".concat(o, "-input");
    return zO("div", {
      className: "form-group",
      children: zO("fieldset", {
        className: "field-group",
        children: [zO("legend", {
          className: "field-group-legend",
          children: n
        }), zO("div", {
          className: "field-group-body",
          children: [zO("div", {
            className: "form-group",
            children: zO(XU, {
              color: i,
              onChange: a
            })
          }), zO("div", {
            className: "form-group",
            children: [zO("label", {
              className: "form-label",
              htmlFor: s,
              children: "Hex"
            }), zO($U, {
              className: "form-input",
              id: s,
              name: r,
              color: i,
              onChange: a
            })]
          })]
        })]
      })
    })
  }

  function QU(e) {
    let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
    return function () {
      for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      clearTimeout(t), t = setTimeout((() => {
        t = null, e.apply(null, i)
      }), n)
    }
  }

  function ek(e) {
    let {
      options: t,
      setOptions: n
    } = e;
    const r = QU((e => {
      n({
        backgroundColor: e
      })
    }));
    return zO("div", {
      className: "form-section",
      children: [zO(gU, {
        label: "Background",
        name: "background",
        value: t.background,
        onChange: e => {
          n({
            [e.target.name]: e.target.value
          })
        },
        options: [{
          value: hL.CLASSIC,
          label: "Classic"
        }, {
          value: hL.BLUE_SKY,
          label: "Blue sky"
        }, {
          value: hL.NIGHT_SKY_CLOUDS,
          label: "Night sky with clouds"
        }, {
          value: hL.CUSTOM,
          label: "Custom"
        }]
      }), t.background === hL.CUSTOM ? zO(JU, {
        label: "Background color",
        name: "backgroundColor",
        value: t.backgroundColor,
        onChange: r
      }) : null, t.background === hL.CUSTOM ? zO(lU, {
        label: "Background image",
        name: "backgroundImageSrc",
        value: t.backgroundImageSrc,
        accept: "image/*",
        onChange: (e, t) => {
          n({
            [e]: t
          })
        },
        isValidFileType: e => e.match("image.*")
      }) : null]
    })
  }
  JU.propTypes = {
    id: Nu.string,
    label: Nu.node,
    name: Nu.string,
    value: Nu.string,
    onChange: Nu.func
  }, JU.defaultProps = {
    label: "Color"
  }, ek.propTypes = {
    options: Nu.object.isRequired,
    setOptions: Nu.func
  }, ek.defaultProps = {
    setOptions: () => {}
  };
  var tk = Td((e => ({
      options: e.editor.present.scenery
    })), {
      setOptions: IN
    })(ek),
    nk = n,
    rk = xa;

  function ik(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function ak(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, op(r.key), r)
    }
  }

  function ok(e, t, n) {
    return t && ak(e.prototype, t), n && ak(e, n), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e
  }

  function sk(e, t) {
    return sk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e
    }, sk(e, t)
  }

  function lk(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(e, "prototype", {
      writable: !1
    }), t && sk(e, t)
  }

  function ck(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function uk(e, t) {
    if (t && ("object" === ap(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return ck(e)
  }

  function hk(e) {
    return hk = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    }, hk(e)
  }
  ti({
    global: !0
  }, {
    Reflect: {}
  }), rk(nk.Reflect, "Reflect", !0);
  var dk, pk, fk = 0,
    mk = 0,
    gk = 0,
    vk = 1e3,
    _k = 0,
    yk = 0,
    bk = 0,
    xk = "object" == typeof performance && performance.now ? performance : Date,
    Sk = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (e) {
      setTimeout(e, 17)
    };

  function Mk() {
    return yk || (Sk(wk), yk = xk.now() + bk)
  }

  function wk() {
    yk = 0
  }

  function Tk() {
    this._call = this._time = this._next = null
  }

  function Ek(e, t, n) {
    var r = new Tk;
    return r.restart(e, t, n), r
  }

  function Ak() {
    yk = (_k = xk.now()) + bk, fk = mk = 0;
    try {
      ! function () {
        Mk(), ++fk;
        for (var e, t = dk; t;)(e = yk - t._time) >= 0 && t._call.call(null, e), t = t._next;
        --fk
      }()
    } finally {
      fk = 0,
        function () {
          var e, t, n = dk,
            r = 1 / 0;
          for (; n;) n._call ? (r > n._time && (r = n._time), e = n, n = n._next) : (t = n._next, n._next = null, n = e ? e._next = t : dk = t);
          pk = e, Lk(r)
        }(), yk = 0
    }
  }

  function Ck() {
    var e = xk.now(),
      t = e - _k;
    t > vk && (bk -= t, _k = e)
  }

  function Lk(e) {
    fk || (mk && (mk = clearTimeout(mk)), e - yk > 24 ? (e < 1 / 0 && (mk = setTimeout(Ak, e - xk.now() - bk)), gk && (gk = clearInterval(gk))) : (gk || (_k = xk.now(), gk = setInterval(Ck, vk)), fk = 1, Sk(Ak)))
  }

  function Rk(e, t, n) {
    var r = new Tk;
    return t = null == t ? 0 : +t, r.restart((function (n) {
      r.stop(), e(n + t)
    }), t, n), r
  }

  function Pk(e) {
    return Pk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Pk(e)
  }
  Tk.prototype = Ek.prototype = {
    constructor: Tk,
    restart: function (e, t, n) {
      if ("function" != typeof e) throw new TypeError("callback is not a function");
      n = (null == n ? Mk() : +n) + (null == t ? 0 : +t), this._next || pk === this || (pk ? pk._next = this : dk = this, pk = this), this._call = e, this._time = n, Lk()
    },
    stop: function () {
      this._call && (this._call = null, this._time = 1 / 0, Lk())
    }
  };
  var Dk = 0;

  function Nk(e, t) {
    for (var n in t) e[n] = t[n]
  }
  var Ok = {
    delay: 0,
    duration: 250,
    ease: function (e) {
      return +e
    }
  };
  var Ik = function e(t) {
    var n = this;
    ! function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), this.start = null, this.interrupt = null, this.end = null, t.events && Object.keys(t.events).forEach((function (e) {
      if ("function" != typeof t.events[e]) throw new Error("Event handlers must be a function");
      n[e] = function (e) {
        var t = !1;
        return function () {
          t || (t = !0, e.call(this))
        }
      }(t.events[e])
    }))
  };

  function Uk(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      })))), r.forEach((function (t) {
        kk(e, t, n[t])
      }))
    }
    return e
  }

  function kk(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function zk(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  var Fk = function () {
    function e(t) {
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e), this.state = t || {}
    }
    return function (e, t, n) {
      t && zk(e.prototype, t), n && zk(e, n)
    }(e, [{
      key: "transition",
      value: function (e) {
        if (Array.isArray(e)) {
          var t = !0,
            n = !1,
            r = void 0;
          try {
            for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
              var o = i.value;
              this.parse(o)
            }
          } catch (e) {
            n = !0, r = e
          } finally {
            try {
              t || null == a.return || a.return()
            } finally {
              if (n) throw r
            }
          }
        } else this.parse(e)
      }
    }, {
      key: "isTransitioning",
      value: function () {
        return !!this.transitionData
      }
    }, {
      key: "stopTransitions",
      value: function () {
        var e = this.transitionData;
        e && Object.keys(e).forEach((function (t) {
          e[t].timer.stop()
        }))
      }
    }, {
      key: "setState",
      value: function (e) {
        Nk(this.state, "function" == typeof e ? e(this.state) : e)
      }
    }, {
      key: "parse",
      value: function (e) {
        var t = this,
          n = Uk({}, e),
          r = new Ik(n);
        n.events && delete n.events;
        var i = Uk({}, Ok, n.timing || {}, {
          time: Mk()
        });
        n.timing && delete n.timing, Object.keys(n).forEach((function (e) {
          var a, o, s = [],
            l = n[e];
          if ("object" === Pk(o = l) && !1 === Array.isArray(o)) Object.keys(l).forEach((function (n) {
            var r = l[n];
            if (Array.isArray(r)) 1 === r.length ? s.push(t.getTween(n, r[0], e)) : (t.setState((function (t) {
              var i, a;
              return (a = {})[e] = Uk({}, t[e], ((i = {})[n] = r[0], i)), a
            })), s.push(t.getTween(n, r[1], e)));
            else if ("function" == typeof r) {
              s.push((function () {
                return function (i) {
                  t.setState((function (t) {
                    var a, o;
                    return (o = {})[e] = Uk({}, t[e], ((a = {})[n] = r(i), a)), o
                  }))
                }
              }))
            } else t.setState((function (t) {
              var i, a;
              return (a = {})[e] = Uk({}, t[e], ((i = {})[n] = r, i)), a
            })), s.push(t.getTween(n, r, e))
          }));
          else if (Array.isArray(l)) 1 === l.length ? s.push(t.getTween(e, l[0], null)) : (t.setState(((a = {})[e] = l[0], a)), s.push(t.getTween(e, l[1], null)));
          else if ("function" == typeof l) {
            s.push((function () {
              return function (n) {
                var r;
                t.setState(((r = {})[e] = l(n), r))
              }
            }))
          } else {
            var c;
            t.setState(((c = {})[e] = l, c)), s.push(t.getTween(e, l, null))
          }
          t.update({
            stateKey: e,
            timing: i,
            tweens: s,
            events: r,
            status: 0
          })
        }))
      }
    }, {
      key: "getTween",
      value: function (e, t, n) {
        var r = this;
        return function () {
          var i = n ? r.state[n][e] : r.state[e];
          if (i === t) return null;
          var a, o = r.getInterpolator(i, t, e, n);
          return a = null === n ? function (t) {
            var n;
            r.setState(((n = {})[e] = o(t), n))
          } : function (t) {
            r.setState((function (r) {
              var i, a;
              return (a = {})[n] = Uk({}, r[n], ((i = {})[e] = o(t), i)), a
            }))
          }, a
        }
      }
    }, {
      key: "update",
      value: function (e) {
        this.transitionData || (this.transitionData = {}), this.init(++Dk, e)
      }
    }, {
      key: "init",
      value: function (e, t) {
        var n = this,
          r = t.tweens.length,
          i = new Array(r);
        this.transitionData[e] = t, t.timer = Ek((function (e) {
          t.status = 1, t.timer.restart(a, t.timing.delay, t.timing.time), t.timing.delay <= e && a(e - t.timing.delay)
        }), 0, t.timing.time);
        var a = function a(l) {
            if (1 !== t.status) return s();
            for (var c in n.transitionData) {
              var u = n.transitionData[c];
              if (u.stateKey === t.stateKey) {
                if (3 === u.status) return Rk(a);
                4 === u.status ? (u.status = 6, u.timer.stop(), u.events.interrupt && u.events.interrupt.call(n), delete n.transitionData[c]) : +c < e && (u.status = 6, u.timer.stop(), delete n.transitionData[c])
              }
            }
            if (Rk((function () {
                3 === t.status && (t.status = 4, t.timer.restart(o, t.timing.delay, t.timing.time), o(l))
              })), t.status = 2, t.events.start && t.events.start.call(n), 2 === t.status) {
              t.status = 3;
              for (var h = -1, d = 0; d < r; ++d) {
                var p = t.tweens[d]();
                p && (i[++h] = p)
              }
              i.length = h + 1
            }
          },
          o = function (e) {
            var r = 1;
            e < t.timing.duration ? r = t.timing.ease(e / t.timing.duration) : (t.timer.restart(s), t.status = 5);
            for (var a = -1; ++a < i.length;) i[a](r);
            5 === t.status && (t.events.end && t.events.end.call(n), s())
          },
          s = function () {
            for (var r in t.status = 6, t.timer.stop(), delete n.transitionData[e], n.transitionData) return;
            delete n.transitionData
          }
      }
    }]), e
  }();
  var Bk = "ENTER",
    Hk = "LEAVE";

  function Gk(e, t) {
    var n = +e,
      r = +t - n;
    return function (e) {
      return n + r * e
    }
  }

  function Vk(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
      } catch (e) {
        return !1
      }
    }();
    return function () {
      var n, r = hk(e);
      if (t) {
        var i = hk(this).constructor;
        n = Reflect.construct(r, arguments, i)
      } else n = r.apply(this, arguments);
      return uk(this, n)
    }
  }
  var Wk = function (e) {
    lk(n, e);
    var t = Vk(n);

    function n(e) {
      var r;
      ik(this, n), sp(ck(r = t.call(this, e)), "animate", (function () {
        var e = r.state,
          t = e.nodeKeys,
          n = e.nodeHash;
        if (!r.unmounting) {
          for (var i = !1, a = [], o = t.length, s = 0; s < o; s++) {
            var l = t[s],
              c = n[l],
              u = c.isTransitioning();
            u && (i = !0), c.type !== Hk || u ? a.push(l) : delete n[l]
          }
          i || r.interval.stop(), r.setState((function () {
            return {
              nodeKeys: a,
              nodes: a.map((function (e) {
                return n[e]
              }))
            }
          }))
        }
      })), sp(ck(r), "interval", null), sp(ck(r), "unmounting", !1);
      var i = e.interpolation,
        a = function (e) {
          lk(n, e);
          var t = Vk(n);

          function n(e, r) {
            var a;
            return ik(this, n), sp(ck(a = t.call(this)), "getInterpolator", i), a.key = e, a.data = r, a.type = Bk, a
          }
          return n
        }(Fk);
      return r.state = {
        Node: a,
        nodeKeys: [],
        nodeHash: {},
        nodes: [],
        data: null
      }, r
    }
    return ok(n, [{
      key: "componentDidMount",
      value: function () {
        this.startInterval()
      }
    }, {
      key: "componentDidUpdate",
      value: function (e) {
        e.data === this.props.data || this.unmounting || this.startInterval()
      }
    }, {
      key: "startInterval",
      value: function () {
        this.interval ? this.interval.restart(this.animate) : this.interval = function (e, t, n) {
          var r = new Tk,
            i = t;
          return null == t ? (r.restart(e, t, n), r) : (t = +t, n = null == n ? Mk() : +n, r.restart((function a(o) {
            o += i, r.restart(a, i += t, n), e(o)
          }), t, n), r)
        }(this.animate)
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        var e = this.state,
          t = e.nodeKeys,
          n = e.nodeHash;
        this.unmounting = !0, this.interval && this.interval.stop(), t.forEach((function (e) {
          n[e].stopTransitions()
        }))
      }
    }, {
      key: "render",
      value: function () {
        var e = this.props.children(this.state.nodes);
        return e && Du.Children.only(e)
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        if (e.data !== t.data) {
          for (var n = e.data, r = e.keyAccessor, i = e.start, a = e.enter, o = e.update, s = e.leave, l = t.Node, c = t.nodeKeys, u = t.nodeHash, h = {}, d = 0; d < c.length; d++) h[c[d]] = d;
          for (var p = {}, f = [], m = 0; m < n.length; m++) {
            var g = n[m],
              v = r(g, m);
            if (p[v] = m, f.push(v), void 0 === h[v]) {
              var _ = new l;
              _.key = v, _.data = g, _.type = Bk, u[v] = _
            }
          }
          for (var y = 0; y < c.length; y++) {
            var b = c[y],
              x = u[b];
            void 0 !== p[b] ? (x.data = n[p[b]], x.type = "UPDATE") : x.type = Hk
          }
          for (var S = function (e, t, n, r) {
              for (var i = [], a = 0; a < n.length; a++) i[a] = n[a];
              for (var o = 0; o < e.length; o++) void 0 === r[e[o]] && i.push(e[o]);
              return i.sort((function (e, i) {
                var a = r[e],
                  o = r[i],
                  s = t[e],
                  l = t[i];
                if (null != a && null != o) return r[e] - r[i];
                if (null != s && null != l) return t[e] - t[i];
                if (null != a) {
                  for (var c = 0; c < n.length; c++) {
                    var u = n[c];
                    if (t[u]) {
                      if (a < r[u] && l > t[u]) return -1;
                      if (a > r[u] && l < t[u]) return 1
                    }
                  }
                  return 1
                }
                for (var h = 0; h < n.length; h++) {
                  var d = n[h];
                  if (t[d]) {
                    if (o < r[d] && s > t[d]) return 1;
                    if (o > r[d] && s < t[d]) return -1
                  }
                }
                return -1
              }))
            }(c, h, f, p), M = 0; M < S.length; M++) {
            var w = S[M],
              T = u[w],
              E = T.data;
            T.type === Bk ? (T.setState(i(E, p[w])), T.transition(a(E, p[w]))) : T.type === Hk ? T.transition(s(E, h[w])) : T.transition(o(E, p[w]))
          }
          return {
            data: n,
            nodes: S.map((function (e) {
              return u[e]
            })),
            nodeHash: u,
            nodeKeys: S
          }
        }
        return null
      }
    }]), n
  }(Kl);

  function jk(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
      } catch (e) {
        return !1
      }
    }();
    return function () {
      var n, r = hk(e);
      if (t) {
        var i = hk(this).constructor;
        n = Reflect.construct(r, arguments, i)
      } else n = r.apply(this, arguments);
      return uk(this, n)
    }
  }
  Wk.propTypes = {}, Wk.defaultProps = {
    enter: function () {},
    update: function () {},
    leave: function () {},
    interpolation: Gk
  };
  var qk = function () {
      return "$$key$$"
    },
    Xk = function (e) {
      lk(n, e);
      var t = jk(n);

      function n() {
        return ik(this, n), t.apply(this, arguments)
      }
      return ok(n, [{
        key: "render",
        value: function () {
          var e = this.props,
            t = e.show,
            n = e.start,
            r = e.enter,
            i = e.update,
            a = e.leave,
            o = e.interpolation,
            s = e.children,
            l = "function" == typeof n ? n() : n;
          return Du.createElement(Wk, {
            data: t ? [l] : [],
            start: function () {
              return l
            },
            keyAccessor: qk,
            interpolation: o,
            enter: "function" == typeof r ? r : function () {
              return r
            },
            update: "function" == typeof i ? i : function () {
              return i
            },
            leave: "function" == typeof a ? a : function () {
              return a
            }
          }, (function (e) {
            if (!e[0]) return null;
            var t = s(e[0].state);
            return t && Du.Children.only(t)
          }))
        }
      }]), n
    }(Kl);
  Xk.propTypes = {}, Xk.defaultProps = {
    show: !0,
    interpolation: Gk
  };
  const Yk = "default",
    Zk = "success",
    Kk = "warning",
    $k = "error";

  function Jk(e) {
    let {
      status: t,
      onDismissClick: n,
      children: r
    } = e;
    return zO("div", {
      className: "toast toast-".concat(t),
      children: [zO("div", {
        className: "toast-body",
        children: r
      }), zO("button", {
        type: "button",
        className: "btn btn-clear",
        onClick: n,
        children: zO("span", {
          className: "sr-only",
          children: "Dismiss"
        })
      })]
    })
  }
  Jk.propTypes = {
    status: Nu.oneOf([Yk, Zk, Kk, $k]),
    onDismissClick: Nu.func.isRequired,
    children: Nu.node.isRequired
  }, Jk.defaultProps = {
    status: Yk
  };
  const Qk = e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2;

  function ez(e) {
    let {
      toasts: t,
      removeToast: n
    } = e;
    const r = Oc(new Map).current,
      i = e => t => {
        null !== t ? r.set(e, t) : r.delete(e)
      };
    return zO("div", {
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true",
      children: zO(Wk, {
        data: t,
        keyAccessor: e => e.id,
        start: (e, t) => ({
          h0: 0,
          h: 0,
          x: 1
        }),
        enter: (e, t) => [{
          h: [1],
          timing: {
            duration: 400,
            ease: Qk
          }
        }, {
          x: [0],
          timing: {
            delay: 400,
            duration: 600,
            ease: Qk
          }
        }],
        leave: (e, t) => ({
          x: [1],
          timing: {
            duration: 600,
            ease: Qk
          }
        }),
        children: e => zO("ul", {
          className: "toasts",
          children: e.map((e => {
            let {
              key: t,
              data: a,
              state: o
            } = e;
            const {
              id: s,
              message: l,
              ...c
            } = a, {
              h0: u,
              h: h,
              x: d
            } = o;
            if (!u) {
              const e = r.get(s),
                t = e ? e.clientHeight : 0;
              o.h0 = t
            }
            return zO("li", {
              ref: i(s),
              style: {
                height: u ? "".concat(h * u, "px") : "auto",
                transform: "translate3d(".concat(22 * d, "rem, 0, 0)")
              },
              children: zO(qI, {
                disabled: !!d,
                children: zO("div", {
                  className: "toasts-item-wrap",
                  children: zO(Jk, {
                    ...c,
                    onDismissClick: () => {
                      n(s)
                    },
                    children: zO("p", {
                      children: l
                    })
                  })
                })
              })
            }, t)
          }))
        })
      })
    })
  }
  ez.propTypes = {
    toasts: Nu.arrayOf(Nu.object).isRequired,
    removeToast: Nu.func.isRequired
  };
  var tz = Td((e => ({
    toasts: e.toasts
  })), {
    removeToast: rI
  })(ez);

  function nz(e) {
    let {
      options: t,
      setOptions: n
    } = e;
    return zO("div", {
      className: "form-section",
      children: zO(vU, {
        label: "Wind",
        name: "enabled",
        value: t.enabled,
        onChange: e => {
          n({
            [e.target.name]: e.target.checked
          })
        }
      })
    })
  }
  nz.propTypes = {
    options: Nu.object.isRequired,
    setOptions: Nu.func
  }, nz.defaultProps = {
    setOptions: () => {}
  };
  var rz = Td((e => ({
    options: e.editor.present.wind
  })), {
    setOptions: GN
  })(nz);

  function iz(e) {
    let {
      id: t,
      label: n,
      name: r,
      value: i,
      min: a,
      max: o,
      step: s,
      disabled: l,
      outputPrefix: c,
      outputSuffix: u,
      ticksLabel: h,
      ticks: d,
      validator: p,
      onChange: f
    } = e;
    const m = _I(t),
      {
        valid: g,
        feedback: v
      } = p(i),
      _ = v ? "".concat(m, "-feedback") : null,
      y = "".concat(m, "-ticks"),
      b = e => {
        f(r, e.target.value)
      };
    return zO(gI, {
      valid: g,
      feedback: v,
      feedbackId: _,
      children: [zO("label", {
        className: "form-label",
        htmlFor: m,
        children: n
      }), zO("div", {
        className: "form-static" + (l ? " disabled" : ""),
        children: [c, zO("output", {
          htmlFor: m,
          children: i
        }), u]
      }), zO("input", {
        type: "range",
        className: "slider",
        id: m,
        name: r,
        value: i,
        min: a,
        max: o,
        step: s,
        disabled: l,
        "aria-describedby": _,
        onChange: b
      }), d && d.length ? zO("fieldset", {
        className: "form-group",
        disabled: l,
        children: [zO("legend", {
          className: "sr-only",
          children: zO("span", {
            className: "sr-only",
            children: h
          })
        }), zO("ul", {
          className: "slider-ticks",
          children: d.map((e => {
            let {
              label: t,
              value: n
            } = e;
            return zO("li", {
              children: [zO("input", {
                type: "radio",
                id: "".concat(m, "-tick-").concat(n),
                name: y,
                value: n,
                checked: i === n,
                disabled: l,
                onChange: b
              }), zO("label", {
                htmlFor: "".concat(m, "-tick-").concat(n),
                children: t
              })]
            }, n)
          }))
        })]
      }) : null]
    })
  }

  function az(e) {
    let {
      symbol: t,
      text: n
    } = e;
    return zO(jl, {
      children: [zO("span", {
        "aria-hidden": "true",
        children: t
      }), zO("span", {
        className: "sr-only",
        children: n
      })]
    })
  }

  function oz(e) {
    let {
      options: t,
      setOptions: n
    } = e;
    const r = (e, t) => {
        n({
          [e]: Number(t)
        })
      },
      i = e => {
        n({
          [e.target.name]: e.target.checked
        })
      },
      a = t.enabled && t.controlled;
    return zO("div", {
      className: "form-section",
      children: [zO(vU, {
        label: "Wind",
        name: "enabled",
        value: t.enabled,
        onChange: i
      }), zO(vU, {
        label: "Wind control",
        name: "controlled",
        value: t.controlled,
        disabled: !t.enabled,
        onChange: i
      }), zO(iz, {
        label: "Direction",
        name: "direction",
        value: t.direction,
        min: 0,
        max: 360,
        outputSuffix: "°",
        ticksLabel: "Select cardinal direction",
        ticks: [{
          label: zO(az, {
            symbol: "N",
            text: "North"
          }),
          value: 0
        }, {
          label: zO(az, {
            symbol: "E",
            text: "East"
          }),
          value: 90
        }, {
          label: zO(az, {
            symbol: "S",
            text: "South"
          }),
          value: 180
        }, {
          label: zO(az, {
            symbol: "W",
            text: "West"
          }),
          value: 270
        }],
        disabled: !a,
        onChange: r
      }), zO(iz, {
        label: "Speed",
        name: "speed",
        value: t.speed,
        min: 0,
        max: 30,
        outputSuffix: " m/s",
        disabled: !a,
        onChange: r
      })]
    })
  }
  iz.propTypes = {
    id: Nu.string,
    label: Nu.node,
    name: Nu.string,
    value: Nu.number,
    min: Nu.number,
    max: Nu.number,
    step: Nu.oneOfType([Nu.number, Nu.oneOf(["any"])]),
    disabled: Nu.bool,
    outputPrefix: Nu.string,
    outputSuffix: Nu.string,
    ticksLabel: Nu.node,
    ticks: Nu.arrayOf(Nu.shape({
      label: Nu.node,
      value: Nu.number.isRequired
    })),
    validator: Nu.func,
    onChange: Nu.func
  }, iz.defaultProps = {
    label: "Slider",
    min: 0,
    max: 100,
    step: 1,
    disabled: !1,
    outputPrefix: "",
    outputSuffix: "",
    ticksLabel: "Select position",
    ticks: [],
    validator: () => ({
      valid: !0
    }),
    onChange: () => {}
  }, oz.propTypes = {
    options: Nu.object.isRequired,
    setOptions: Nu.func
  }, oz.defaultProps = {
    setOptions: () => {}
  };
  var sz = Td((e => ({
    options: e.editor.present.wind
  })), {
    setOptions: GN
  })(oz);

  function lz(e) {
    let {
      children: t
    } = e;
    return zO("div", {
      className: "empty empty-screen",
      children: zO("div", {
        className: "v-align",
        children: zO("div", {
          className: "v-align-content",
          children: t
        })
      })
    })
  }
  lz.propTypes = {
    children: Nu.node.isRequired
  };
  const cz = NN(void 0, {}),
    uz = kN(void 0, {});

  function hz(e, t) {
    const n = t.toLowerCase();
    return Object.values(e).find((e => e.toLowerCase() === n)) || null
  }
  const dz = new uL({
    src: {
      defaultValue: cz.imageSrc,
      parse: e => decodeURIComponent(e),
      stringify: e => AN(e) ? void 0 : encodeURIComponent(e)
    },
    backsidesrc: {
      defaultValue: cz.backSideImageSrc,
      parse: e => decodeURIComponent(e),
      stringify: e => AN(e) ? void 0 : encodeURIComponent(e)
    },
    hoisting: {
      defaultValue: cz.hoisting,
      parse: e => e.match(/^dex(ter)?$/gi) ? tp.DEXTER : e.match(/^sin(ister)?$/gi) ? tp.SINISTER : null,
      stringify: e => "sin"
    },
    orientation: {
      defaultValue: cz.orientation,
      parse: e => hz(np, e)
    },
    flagpoletype: {
      defaultValue: cz.flagpoleType,
      parse: e => hz(rp, e)
    },
    vhoisting: {
      defaultValue: cz.verticalHoisting,
      parse: e => hz(ip, e)
    },
    background: {
      defaultValue: uz.background,
      parse: e => hz(hL, e)
    },
    backgroundcolor: {
      defaultValue: uz.backgroundColor,
      parse: e => $N("#".concat(e)) ? "#".concat(e) : null,
      stringify: e => e.slice(1)
    },
    backgroundimage: {
      defaultValue: uz.backgroundImageSrc,
      parse: e => decodeURIComponent(e),
      stringify: e => AN(e) ? void 0 : encodeURIComponent(e)
    }
  });
  const pz = QU((function (e) {
    const t = e.getState();
    ! function (e) {
      const {
        imageSrc: t,
        backSideImageSrc: n
      } = e.editor.present.flagGroup;
      return !(!t || AN(t) || AN(n))
    }(t) ? dz.setState(null): dz.setState(function (e) {
      const t = e.editor.present;
      return {
        src: t.flagGroup.imageSrc,
        backsidesrc: t.flagGroup.backSideImageSrc,
        hoisting: t.flagGroup.hoisting,
        orientation: t.flagGroup.orientation,
        flagpoletype: t.flagGroup.flagpoleType,
        vhoisting: t.flagGroup.verticalHoisting,
        background: t.scenery.background,
        backgroundcolor: t.scenery.backgroundColor,
        backgroundimage: t.scenery.backgroundImageSrc
      }
    }(t))
  }));
  const fz = _L({
      animationControl: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QI,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case $I:
            return {
              ...e, muted: t.payload
            };
          case JI:
            return {
              ...e, paused: t.payload
            };
          default:
            return e
        }
      },
      editor: function (e, t) {
        return t.type === WN ? ZN(void 0, t) : ZN(e, t)
      },
      toasts: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case JO:
            return [t.payload, ...e];
          case QO:
            return e.filter((e => e.id !== t.payload));
          default:
            return e
        }
      }
    }),
    mz = function e(t, n, r) {
      var i;
      if ("function" == typeof n && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3]) throw new Error(fL(0));
      if ("function" == typeof n && void 0 === r && (r = n, n = void 0), void 0 !== r) {
        if ("function" != typeof r) throw new Error(fL(1));
        return r(e)(t, n)
      }
      if ("function" != typeof t) throw new Error(fL(2));
      var a = t,
        o = n,
        s = [],
        l = s,
        c = !1;

      function u() {
        l === s && (l = s.slice())
      }

      function h() {
        if (c) throw new Error(fL(3));
        return o
      }

      function d(e) {
        if ("function" != typeof e) throw new Error(fL(4));
        if (c) throw new Error(fL(5));
        var t = !0;
        return u(), l.push(e),
          function () {
            if (t) {
              if (c) throw new Error(fL(6));
              t = !1, u();
              var n = l.indexOf(e);
              l.splice(n, 1), s = null
            }
          }
      }

      function p(e) {
        if (! function (e) {
            if ("object" != typeof e || null === e) return !1;
            for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t
          }(e)) throw new Error(fL(7));
        if (void 0 === e.type) throw new Error(fL(8));
        if (c) throw new Error(fL(9));
        try {
          c = !0, o = a(o, e)
        } finally {
          c = !1
        }
        for (var t = s = l, n = 0; n < t.length; n++) {
          (0, t[n])()
        }
        return e
      }
      return p({
        type: vL.INIT
      }), (i = {
        dispatch: p,
        subscribe: d,
        getState: h,
        replaceReducer: function (e) {
          if ("function" != typeof e) throw new Error(fL(10));
          a = e, p({
            type: vL.REPLACE
          })
        }
      })[mL] = function () {
        var e, t = d;
        return (e = {
          subscribe: function (e) {
            if ("object" != typeof e || null === e) throw new Error(fL(11));

            function n() {
              e.next && e.next(h())
            }
            return n(), {
              unsubscribe: t(n)
            }
          }
        })[mL] = function () {
          return this
        }, e
      }, i
    }(fz, function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return function (e) {
        return function () {
          var n = e.apply(void 0, arguments),
            r = function () {
              throw new Error(fL(15))
            },
            i = {
              getState: n.getState,
              dispatch: function () {
                return r.apply(void 0, arguments)
              }
            },
            a = t.map((function (e) {
              return e(i)
            }));
          return r = yL.apply(void 0, a)(n.dispatch), pL(pL({}, n), {}, {
            dispatch: r
          })
        }
      }
    }((function (e) {
      return t => n => {
        const r = t(n);
        return pz(e), r
      }
    }), (function (e) {
      return t => n => {
        const r = t(n);
        if (n.type === JO) {
          const {
            id: t,
            message: n
          } = r.payload, i = Math.max(Math.min(100 * n.length, 3500), 8e3);
          setTimeout((() => {
            e.dispatch(rI(t))
          }), i)
        }
        return r
      }
    }))),
    gz = "".concat(".", "/assets/img/site-headline-inverse.svg"),
    vz = {
      EDIT: "edit",
      ANIMATE: "animate",
      CAMERA: "camera",
      ABOUT: "about"
    },
    _z = [{
      key: vz.EDIT,
      displayName: "Flag"
    }, {
      key: vz.ANIMATE,
      displayName: "Animation control"
    }, {
      key: vz.CAMERA,
      displayName: "Camera control"
    }, {
      key: vz.ABOUT,
      displayName: "About"
    }];
  var yz, bz = (yz = function () {
    const [e, t] = Rc(!1), [n, r] = Rc(!1), [i, a] = Rc(!1), [o, s] = Rc(vz.EDIT), [l, c] = Rc(!1), [u, h] = Rc(!1), d = Oc(null), p = function () {
      const [, e] = Pc((e => e + 1), 0);
      return e
    }(), f = _I(), m = "".concat(f, "-drawer");
    return Dc((() => {
      const e = () => {
        rO(mz)
      };
      return d.current = (nS.legacyMode = !1, IO()), e(), window.addEventListener("hashchange", e), p(), UO(), () => {
        d.current.destroy(), d.current = null, window.removeEventListener("hashchange", e)
      }
    }), []), Dc((() => {
      const e = () => {
        h(!!document.fullscreenElement)
      };
      return document.addEventListener("fullscreenchange", e), () => {
        document.removeEventListener("fullscreenchange", e)
      }
    }), []), Dc((() => {
      const e = e => {
        const t = e.key || e.keyCode;
        l && ("Enter" !== t && 13 !== t && " " !== t && 32 !== t && "Escape" !== t && 27 !== t || (c(!1), e.preventDefault()))
      };
      return document.addEventListener("keydown", e), () => {
        document.removeEventListener("keydown", e)
      }
    }), [l]), Dc((() => {
      r(!1), setTimeout((() => {
        r(!0)
      }), 0), setTimeout((() => {
        d.current.module("resizeModule").resize()
      }), 200), setTimeout((() => {
        r(!1)
      }), 400)
    }), [e]), zO(BO.Provider, {
      value: d.current,
      children: [zO(fI, {}), zO("div", {
        className: ["site-wrapper", e ? "site-is-drawer-open" : "site-not-drawer-open", n ? "site-is-drawer-animating" : "", l ? "site-is-theater-mode" : "site-not-theater-mode"].filter((e => e)).join(" "),
        children: [zO("header", {
          className: "site-header",
          role: "banner",
          children: zO("div", {
            className: "site-header-layout",
            children: [zO("div", {
              className: "site-header-center",
              children: zO("h1", {
                className: "site-headline",
                children: zO("img", {
                  width: "189",
                  height: "48",
                  alt: "FlagWaver",
                  src: gz
                })
              })
            }), zO("div", {
              className: "site-header-left",
              children: zO(CI.Button, {
                className: "site-header-btn drawer-btn",
                open: e,
                onClick: () => {
                  t(!e)
                },
                "aria-controls": m,
                "aria-expanded": e,
                children: [zO("span", {
                  className: "icon icon-bars",
                  "aria-hidden": "true",
                  children: [zO("span", {
                    className: "icon-bar"
                  }), zO("span", {
                    className: "icon-bar"
                  }), zO("span", {
                    className: "icon-bar"
                  })]
                }), zO("span", {
                  className: "sr-only",
                  children: "Toggle side panel"
                })]
              })
            }), zO("div", {
              className: "site-header-right",
              children: zO("button", {
                type: "button",
                className: "site-header-btn",
                children: [zO("span", {
                  className: "icon icon-dots",
                  "aria-hidden": "true",
                  children: [zO("span", {
                    className: "icon-dot"
                  }), zO("span", {
                    className: "icon-dot"
                  }), zO("span", {
                    className: "icon-dot"
                  })]
                }), zO("span", {
                  className: "sr-only",
                  children: "Options"
                })]
              })
            })]
          })
        }), zO("main", {
          className: "site-main",
          role: "main",
          children: [zO("div", {
            className: "app-viewer",
            children: [zO(nU, {}), zO(VO, {})]
          }), zO("section", {
            className: "bottom-app-bar",
            "aria-label": "Toolbar",
            children: [o === vz.EDIT || o === vz.ABOUT ? zO(jl, {
              children: [zO("div", {
                className: "bottom-app-bar-primary",
                children: zO(mU, {})
              }), zO("div", {
                className: "bottom-app-bar-secondary",
                children: zO(rz, {})
              }), zO("div", {
                className: "bottom-app-bar-tertiary",
                children: zO("div", {
                  className: "form-section",
                  children: zO("button", {
                    type: "button",
                    className: "btn btn-link",
                    "aria-controls": m,
                    onClick: () => {
                      t(!0)
                    },
                    children: "More options"
                  })
                })
              })]
            }) : o === vz.ANIMATE ? zO("div", {
              className: "bottom-app-bar-primary",
              children: zO(eU, {})
            }) : o === vz.CAMERA ? zO("div", {
              className: "bottom-app-bar-primary"
            }) : null, zO("div", {
              className: "bottom-app-bar-quaternary",
              children: zO("div", {
                className: "form-section",
                children: zO("div", {
                  className: "btn-group",
                  children: [zO("button", {
                    type: "button",
                    className: "btn",
                    title: "Reset camera",
                    onClick: () => {
                      const {
                        orbitControls: e
                      } = d.current.module("orbitControlsModule");
                      e.reset()
                    },
                    children: [zO(mI, {
                      component: Jd
                    }), zO("span", {
                      className: "sr-only",
                      children: "Reset camera"
                    })]
                  }), zO("button", {
                    type: "button",
                    className: "btn site-theater-mode-toggle-btn",
                    title: l ? "" : "Theater mode",
                    onClick: () => {
                      c(!l)
                    },
                    children: [zO("div", {
                      className: "site-theater-mode-toggle-btn-overlay"
                    }), zO(mI, {
                      component: $d
                    }), zO("span", {
                      className: "sr-only",
                      children: l ? "Exit theater mode" : "Theater mode"
                    })]
                  }), document.fullscreenEnabled ? zO("button", {
                    type: "button",
                    className: "btn site-fullscreen-toggle-btn",
                    title: u ? "Exit fullscreen" : "Fullscreen",
                    onClick: () => {
                      if (u) document.exitFullscreen && document.exitFullscreen();
                      else {
                        const e = document.documentElement;
                        e.requestFullscreen && e.requestFullscreen()
                      }
                    },
                    children: [zO(mI, {
                      component: u ? Yd : Zd
                    }), zO("span", {
                      className: "sr-only",
                      children: u ? "Exit fullscreen" : "Fullscreen"
                    })]
                  }) : null]
                })
              })
            })]
          })]
        })]
      }), zO(CI, {
        id: m,
        open: e,
        children: zO(qI, {
          disabled: !e,
          children: zO("section", {
            className: "drawer-layout focusable-wrap",
            "aria-label": "Side panel",
            children: [zO("div", {
              className: "drawer-header",
              children: zO("div", {
                className: "drawer-header-layout",
                children: [zO("div", {
                  className: "drawer-header-left",
                  children: zO("button", {
                    type: "button",
                    className: "btn btn-link",
                    onClick: () => {
                      a(!i)
                    },
                    children: [zO(mI, {
                      component: i ? jd : Wd
                    }), zO("span", {
                      className: "btn-text",
                      "aria-hidden": "true",
                      children: "Menu"
                    }), zO("span", {
                      className: "sr-only",
                      children: i ? "Close menu" : "Open menu"
                    })]
                  })
                }), zO("div", {
                  className: "drawer-header-right",
                  children: zO(CI.Button, {
                    className: "btn btn-link",
                    open: e,
                    onClick: () => {
                      t(!1)
                    },
                    "aria-controls": m,
                    children: [zO(mI, {
                      component: Xd
                    }), zO("span", {
                      className: "sr-only",
                      children: "Hide side panel"
                    })]
                  })
                })]
              })
            }), zO("div", {
              className: "drawer-body",
              children: [zO("section", {
                className: i ? "panel" : "hidden",
                children: zO("div", {
                  className: "panel-nav",
                  children: [zO("h2", {
                    className: "sr-only",
                    children: "Menu"
                  }), zO("ul", {
                    className: "nav",
                    children: _z.map((e => {
                      let {
                        key: t,
                        displayName: n
                      } = e;
                      return zO("li", {
                        className: "nav-item" + (o === t ? " active" : ""),
                        children: zO("button", {
                          type: "button",
                          className: "link",
                          onClick: () => {
                            (e => {
                              s(e), a(!1)
                            })(t)
                          },
                          children: n
                        })
                      }, t)
                    }))
                  })]
                })
              }), i ? null : o === vz.EDIT ? zO(jl, {
                children: [zO(XI, {
                  title: "Flag",
                  children: zO(yU, {})
                }), zO(XI, {
                  title: "Wind",
                  children: zO(sz, {})
                }), zO(XI, {
                  title: "Scenery",
                  children: zO(tk, {})
                }), zO(XI, {
                  title: "Actions",
                  children: zO(ZI, {})
                })]
              }) : o === vz.ANIMATE ? zO(XI, {
                title: "Animation control",
                children: zO(eU, {})
              }) : o === vz.CAMERA ? zO(XI, {
                title: "Camera control",
                children: zO(TI, {})
              }) : o === vz.ABOUT ? zO(XI, {
                title: zO(jl, {
                  children: ["FlagWaver", zO("small", {
                    children: "3.0.0"
                  })]
                }),
                children: zO(FO, {})
              }) : null]
            })]
          })
        })
      }), zO(tz, {})]
    })
  }, e => {
    if (!window.WebGLRenderingContext) return UO(), zO(lz, {
      children: [zO("h2", {
        children: "Your browser or device does not support WebGL"
      }), zO("p", {
        children: "This site requires a browser that supports WebGL."
      }), zO("p", {
        children: zO("a", {
          href: "http://get.webgl.org/",
          rel: "noopener",
          target: "_blank",
          children: "More information"
        })
      })]
    }); {
      const e = document.createElement("canvas");
      if (!e.getContext || !e.getContext("webgl") && !e.getContext("experimental-webgl")) return UO(), zO(lz, {
        children: [zO("h2", {
          children: "WebGL could not be initialized"
        }), zO("p", {
          children: "Your browser supports WebGL but has encountered another problem."
        }), zO("p", {
          children: zO("a", {
            href: "http://get.webgl.org/troubleshooting",
            rel: "noopener",
            target: "_blank",
            children: "More information"
          })
        })]
      })
    }
    return /Trident\/|MSIE/.test(window.navigator.userAgent) ? (UO(), zO(lz, {
      children: [zO("h2", {
        children: "Your browser is not supported"
      }), zO("p", {
        children: "Please upgrade your browser to use FlagWaver."
      })]
    })) : zO(yz, {
      ...e
    })
  });
  const xz = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

  function Sz(e) {
    navigator.serviceWorker.register(e).then((e => {
      e.onupdatefound = () => {
        const t = e.installing;
        t.onstatechange = () => {
          "installed" === t.state && (navigator.serviceWorker.controller ? console.log("New content is available; please refresh.") : console.log("Content is cached for offline use."))
        }
      }
    })).catch((e => {
      console.error("Error during service worker registration:", e)
    }))
  }
  fu(zO(Ch, {
      store: mz,
      children: zO(bz, {})
    }), document.getElementById("root")),
    function () {
      if ("serviceWorker" in navigator) {
        if (new URL("https://krikienoid.github.io/flagwaver", window.location).origin !== window.location.origin) return;
        window.addEventListener("load", (() => {
          const e = "".concat("https://krikienoid.github.io/flagwaver", "/service-worker.js");
          xz ? function (e) {
            fetch(e).then((t => {
              404 === t.status || -1 === t.headers.get("content-type").indexOf("javascript") ? navigator.serviceWorker.ready.then((e => {
                e.unregister().then((() => {
                  window.location.reload()
                }))
              })) : Sz(e)
            })).catch((() => {
              console.log("No internet connection found. App is running in offline mode.")
            }))
          }(e) : Sz(e)
        }))
      }
    }()
}();
