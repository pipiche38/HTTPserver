(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    '6n/F': function(t, e, i) {
      var n, o, s;
      (o = 'undefined' != typeof window ? window : this),
        (s = function(t) {
          function e(t, e, i, n) {
            t.hasOwnProperty(e) || (t[e] = n.apply(null, i));
          }
          var i = {};
          return (
            e(i, 'parts/Globals.js', [], function() {
              var e = void 0 === t ? ('undefined' != typeof window ? window : {}) : t,
                i = e.document,
                n = (e.navigator && e.navigator.userAgent) || '',
                o = i && i.createElementNS && !!i.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect,
                s = /(edge|msie|trident)/i.test(n) && !e.opera,
                r = -1 !== n.indexOf('Firefox'),
                a = -1 !== n.indexOf('Chrome'),
                l = r && 4 > parseInt(n.split('Firefox/')[1], 10);
              return {
                product: 'Highcharts',
                version: '7.1.1',
                deg2rad: (2 * Math.PI) / 360,
                doc: i,
                hasBidiBug: l,
                hasTouch: i && void 0 !== i.documentElement.ontouchstart,
                isMS: s,
                isWebKit: -1 !== n.indexOf('AppleWebKit'),
                isFirefox: r,
                isChrome: a,
                isSafari: !a && -1 !== n.indexOf('Safari'),
                isTouchDevice: /(Mobile|Android|Windows Phone)/.test(n),
                SVG_NS: 'http://www.w3.org/2000/svg',
                chartCount: 0,
                seriesTypes: {},
                symbolSizes: {},
                svg: o,
                win: e,
                marginNames: ['plotTop', 'marginRight', 'marginBottom', 'plotLeft'],
                noop: function() {},
                charts: [],
                dateFormats: {}
              };
            }),
            e(i, 'parts/Utilities.js', [i['parts/Globals.js']], function(t) {
              t.timers = [];
              var e = t.charts,
                i = t.doc,
                n = t.win;
              (t.error = function(e, i, o) {
                var s = t.isNumber(e) ? 'Highcharts error #' + e + ': www.highcharts.com/errors/' + e : e,
                  r = function() {
                    if (i) throw Error(s);
                    n.console && console.log(s);
                  };
                o ? t.fireEvent(o, 'displayError', { code: e, message: s }, r) : r();
              }),
                (t.Fx = function(t, e, i) {
                  (this.options = e), (this.elem = t), (this.prop = i);
                }),
                (t.Fx.prototype = {
                  dSetter: function() {
                    var t,
                      e = this.paths[0],
                      i = this.paths[1],
                      n = [],
                      o = this.now,
                      s = e.length;
                    if (1 === o) n = this.toD;
                    else if (s === i.length && 1 > o)
                      for (; s--; ) (t = parseFloat(e[s])), (n[s] = isNaN(t) ? i[s] : o * parseFloat(i[s] - t) + t);
                    else n = i;
                    this.elem.attr('d', n, null, !0);
                  },
                  update: function() {
                    var t = this.elem,
                      e = this.prop,
                      i = this.now,
                      n = this.options.step;
                    this[e + 'Setter']
                      ? this[e + 'Setter']()
                      : t.attr
                      ? t.element && t.attr(e, i, null, !0)
                      : (t.style[e] = i + this.unit),
                      n && n.call(t, i, this);
                  },
                  run: function(e, i, o) {
                    var s = this,
                      r = s.options,
                      a = function(t) {
                        return !a.stopped && s.step(t);
                      },
                      l =
                        n.requestAnimationFrame ||
                        function(t) {
                          setTimeout(t, 13);
                        },
                      h = function() {
                        for (var e = 0; e < t.timers.length; e++) t.timers[e]() || t.timers.splice(e--, 1);
                        t.timers.length && l(h);
                      };
                    e !== i || this.elem['forceAnimate:' + this.prop]
                      ? ((this.startTime = +new Date()),
                        (this.start = e),
                        (this.end = i),
                        (this.unit = o),
                        (this.now = this.start),
                        (this.pos = 0),
                        (a.elem = this.elem),
                        (a.prop = this.prop),
                        a() && 1 === t.timers.push(a) && l(h))
                      : (delete r.curAnim[this.prop],
                        r.complete && 0 === Object.keys(r.curAnim).length && r.complete.call(this.elem));
                  },
                  step: function(e) {
                    var i,
                      n = +new Date(),
                      o = this.options,
                      s = this.elem,
                      r = o.complete,
                      a = o.duration,
                      l = o.curAnim;
                    return (
                      s.attr && !s.element
                        ? (e = !1)
                        : e || n >= a + this.startTime
                        ? ((this.now = this.end),
                          (this.pos = 1),
                          this.update(),
                          (i = l[this.prop] = !0),
                          t.objectEach(l, function(t) {
                            !0 !== t && (i = !1);
                          }),
                          i && r && r.call(s),
                          (e = !1))
                        : ((this.pos = o.easing((n - this.startTime) / a)),
                          (this.now = this.start + (this.end - this.start) * this.pos),
                          this.update(),
                          (e = !0)),
                      e
                    );
                  },
                  initPath: function(e, i, n) {
                    function o(t) {
                      var e, i;
                      for (c = t.length; c--; )
                        (e = 'M' === t[c] || 'L' === t[c]),
                          (i = /[a-zA-Z]/.test(t[c + 3])),
                          e && i && t.splice(c + 1, 0, t[c + 1], t[c + 2], t[c + 1], t[c + 2]);
                    }
                    function s(t, e) {
                      for (; t.length < l; ) {
                        t[0] = e[l - t.length];
                        var i = t.slice(0, f);
                        [].splice.apply(t, [0, 0].concat(i)),
                          m && ((i = t.slice(t.length - f)), [].splice.apply(t, [t.length, 0].concat(i)), c--);
                      }
                      t[0] = 'M';
                    }
                    function r(t, e) {
                      for (var i = (l - t.length) / f; 0 < i && i--; )
                        ((h = t.slice().splice(t.length / x - f, f * x))[0] = e[l - f - i * f]),
                          u && ((h[f - 6] = h[f - 2]), (h[f - 5] = h[f - 1])),
                          [].splice.apply(t, [t.length / x, 0].concat(h)),
                          m && i--;
                    }
                    var a,
                      l,
                      h,
                      c,
                      d = e.startX,
                      p = e.endX,
                      u = -1 < (i = i || '').indexOf('C'),
                      f = u ? 7 : 3;
                    (i = i.split(' ')), (n = n.slice());
                    var g,
                      m = e.isArea,
                      x = m ? 2 : 1;
                    if ((u && (o(i), o(n)), d && p)) {
                      for (c = 0; c < d.length; c++) {
                        if (d[c] === p[0]) {
                          a = c;
                          break;
                        }
                        if (d[0] === p[p.length - d.length + c]) {
                          (a = c), (g = !0);
                          break;
                        }
                      }
                      void 0 === a && (i = []);
                    }
                    return (
                      i.length &&
                        t.isNumber(a) &&
                        ((l = n.length + a * x * f), g ? (s(i, n), r(n, i)) : (s(n, i), r(i, n))),
                      [i, n]
                    );
                  },
                  fillSetter: function() {
                    t.Fx.prototype.strokeSetter.apply(this, arguments);
                  },
                  strokeSetter: function() {
                    this.elem.attr(this.prop, t.color(this.start).tweenTo(t.color(this.end), this.pos), null, !0);
                  }
                }),
                (t.merge = function() {
                  var e,
                    i,
                    n = arguments,
                    o = {},
                    s = function(e, i) {
                      return (
                        'object' != typeof e && (e = {}),
                        t.objectEach(i, function(n, o) {
                          e[o] = !t.isObject(n, !0) || t.isClass(n) || t.isDOMElement(n) ? i[o] : s(e[o] || {}, n);
                        }),
                        e
                      );
                    };
                  for (
                    !0 === n[0] && ((o = n[1]), (n = Array.prototype.slice.call(n, 2))), i = n.length, e = 0;
                    e < i;
                    e++
                  )
                    o = s(o, n[e]);
                  return o;
                }),
                (t.pInt = function(t, e) {
                  return parseInt(t, e || 10);
                }),
                (t.isString = function(t) {
                  return 'string' == typeof t;
                }),
                (t.isArray = function(t) {
                  return (
                    '[object Array]' === (t = Object.prototype.toString.call(t)) || '[object Array Iterator]' === t
                  );
                }),
                (t.isObject = function(e, i) {
                  return !(!e || 'object' != typeof e || (i && t.isArray(e)));
                }),
                (t.isDOMElement = function(e) {
                  return t.isObject(e) && 'number' == typeof e.nodeType;
                }),
                (t.isClass = function(e) {
                  var i = e && e.constructor;
                  return !(!t.isObject(e, !0) || t.isDOMElement(e) || !i || !i.name || 'Object' === i.name);
                }),
                (t.isNumber = function(t) {
                  return 'number' == typeof t && !isNaN(t) && 1 / 0 > t && -1 / 0 < t;
                }),
                (t.erase = function(t, e) {
                  for (var i = t.length; i--; )
                    if (t[i] === e) {
                      t.splice(i, 1);
                      break;
                    }
                }),
                (t.defined = function(t) {
                  return null != t;
                }),
                (t.attr = function(e, i, n) {
                  var o;
                  return (
                    t.isString(i)
                      ? t.defined(n)
                        ? e.setAttribute(i, n)
                        : e &&
                          e.getAttribute &&
                          ((o = e.getAttribute(i)) || 'class' !== i || (o = e.getAttribute(i + 'Name')))
                      : t.defined(i) &&
                        t.isObject(i) &&
                        t.objectEach(i, function(t, i) {
                          e.setAttribute(i, t);
                        }),
                    o
                  );
                }),
                (t.splat = function(e) {
                  return t.isArray(e) ? e : [e];
                }),
                (t.syncTimeout = function(t, e, i) {
                  if (e) return setTimeout(t, e, i);
                  t.call(0, i);
                }),
                (t.clearTimeout = function(e) {
                  t.defined(e) && clearTimeout(e);
                }),
                (t.extend = function(t, e) {
                  var i;
                  for (i in (t || (t = {}), e)) t[i] = e[i];
                  return t;
                }),
                (t.pick = function() {
                  var t,
                    e,
                    i = arguments,
                    n = i.length;
                  for (t = 0; t < n; t++) if (null != (e = i[t])) return e;
                }),
                (t.css = function(e, i) {
                  t.isMS &&
                    !t.svg &&
                    i &&
                    void 0 !== i.opacity &&
                    (i.filter = 'alpha(opacity=' + 100 * i.opacity + ')'),
                    t.extend(e.style, i);
                }),
                (t.createElement = function(e, n, o, s, r) {
                  e = i.createElement(e);
                  var a = t.css;
                  return (
                    n && t.extend(e, n),
                    r && a(e, { padding: 0, border: 'none', margin: 0 }),
                    o && a(e, o),
                    s && s.appendChild(e),
                    e
                  );
                }),
                (t.extendClass = function(e, i) {
                  var n = function() {};
                  return (n.prototype = new e()), t.extend(n.prototype, i), n;
                }),
                (t.pad = function(t, e, i) {
                  return Array((e || 2) + 1 - String(t).replace('-', '').length).join(i || 0) + t;
                }),
                (t.relativeLength = function(t, e, i) {
                  return /%$/.test(t) ? (e * parseFloat(t)) / 100 + (i || 0) : parseFloat(t);
                }),
                (t.wrap = function(t, e, i) {
                  var n = t[e];
                  t[e] = function() {
                    var t = Array.prototype.slice.call(arguments),
                      e = arguments,
                      o = this;
                    return (
                      (o.proceed = function() {
                        n.apply(o, arguments.length ? arguments : e);
                      }),
                      t.unshift(n),
                      (t = i.apply(this, t)),
                      (o.proceed = null),
                      t
                    );
                  };
                }),
                (t.datePropsToTimestamps = function(e) {
                  t.objectEach(e, function(i, n) {
                    t.isObject(i) && 'function' == typeof i.getTime
                      ? (e[n] = i.getTime())
                      : (t.isObject(i) || t.isArray(i)) && t.datePropsToTimestamps(i);
                  });
                }),
                (t.formatSingle = function(e, i, n) {
                  var o = t.defaultOptions.lang;
                  return (
                    /f$/.test(e)
                      ? ((n = (n = e.match(/\.([0-9])/)) ? n[1] : -1),
                        null !== i &&
                          (i = t.numberFormat(i, n, o.decimalPoint, -1 < e.indexOf(',') ? o.thousandsSep : '')))
                      : (i = (n || t.time).dateFormat(e, i)),
                    i
                  );
                }),
                (t.format = function(e, i, n) {
                  for (var o, s, r, a, l, h = '{', c = !1, d = []; e && -1 !== (h = e.indexOf(h)); ) {
                    if (((o = e.slice(0, h)), c)) {
                      for (a = (s = (o = o.split(':')).shift().split('.')).length, l = i, r = 0; r < a; r++)
                        l && (l = l[s[r]]);
                      o.length && (l = t.formatSingle(o.join(':'), l, n)), d.push(l);
                    } else d.push(o);
                    (e = e.slice(h + 1)), (h = (c = !c) ? '}' : '{');
                  }
                  return d.push(e), d.join('');
                }),
                (t.getMagnitude = function(t) {
                  return Math.pow(10, Math.floor(Math.log(t) / Math.LN10));
                }),
                (t.normalizeTickInterval = function(e, i, n, o, s) {
                  var r,
                    a = e;
                  for (
                    r = e / (n = t.pick(n, 1)),
                      i ||
                        ((i = s ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10]),
                        !1 === o &&
                          (1 === n
                            ? (i = i.filter(function(t) {
                                return 0 == t % 1;
                              }))
                            : 0.1 >= n && (i = [1 / n]))),
                      o = 0;
                    o < i.length && ((a = i[o]), !((s && a * n >= e) || (!s && r <= (i[o] + (i[o + 1] || i[o])) / 2)));
                    o++
                  );
                  return t.correctFloat(a * n, -Math.round(Math.log(0.001) / Math.LN10));
                }),
                (t.stableSort = function(t, e) {
                  var i,
                    n,
                    o = t.length;
                  for (n = 0; n < o; n++) t[n].safeI = n;
                  for (
                    t.sort(function(t, n) {
                      return 0 === (i = e(t, n)) ? t.safeI - n.safeI : i;
                    }),
                      n = 0;
                    n < o;
                    n++
                  )
                    delete t[n].safeI;
                }),
                (t.arrayMin = function(t) {
                  for (var e = t.length, i = t[0]; e--; ) t[e] < i && (i = t[e]);
                  return i;
                }),
                (t.arrayMax = function(t) {
                  for (var e = t.length, i = t[0]; e--; ) t[e] > i && (i = t[e]);
                  return i;
                }),
                (t.destroyObjectProperties = function(e, i) {
                  t.objectEach(e, function(t, n) {
                    t && t !== i && t.destroy && t.destroy(), delete e[n];
                  });
                }),
                (t.discardElement = function(e) {
                  var i = t.garbageBin;
                  i || (i = t.createElement('div')), e && i.appendChild(e), (i.innerHTML = '');
                }),
                (t.correctFloat = function(t, e) {
                  return parseFloat(t.toPrecision(e || 14));
                }),
                (t.setAnimation = function(e, i) {
                  i.renderer.globalAnimation = t.pick(e, i.options.chart.animation, !0);
                }),
                (t.animObject = function(e) {
                  return t.isObject(e) ? t.merge(e) : { duration: e ? 500 : 0 };
                }),
                (t.timeUnits = {
                  millisecond: 1,
                  second: 1e3,
                  minute: 6e4,
                  hour: 36e5,
                  day: 864e5,
                  week: 6048e5,
                  month: 24192e5,
                  year: 314496e5
                }),
                (t.numberFormat = function(e, i, n, o) {
                  i = +i;
                  var s,
                    r,
                    a = t.defaultOptions.lang,
                    l = ((e = +e || 0).toString().split('.')[1] || '').split('e')[0].length,
                    h = e.toString().split('e');
                  return (
                    -1 === i
                      ? (i = Math.min(l, 20))
                      : t.isNumber(i)
                      ? i &&
                        h[1] &&
                        0 > h[1] &&
                        (0 <= (s = i + +h[1])
                          ? ((h[0] = (+h[0]).toExponential(s).split('e')[0]), (i = s))
                          : ((h[0] = h[0].split('.')[0] || 0),
                            (e = 20 > i ? (h[0] * Math.pow(10, h[1])).toFixed(i) : 0),
                            (h[1] = 0)))
                      : (i = 2),
                    (r = (Math.abs(h[1] ? h[0] : e) + Math.pow(10, -Math.max(i, l) - 1)).toFixed(i)),
                    (s = 3 < (l = String(t.pInt(r))).length ? l.length % 3 : 0),
                    (n = t.pick(n, a.decimalPoint)),
                    (o = t.pick(o, a.thousandsSep)),
                    (e = (0 > e ? '-' : '') + (s ? l.substr(0, s) + o : '')),
                    (e += l.substr(s).replace(/(\d{3})(?=\d)/g, '$1' + o)),
                    i && (e += n + r.slice(-i)),
                    h[1] && 0 != +e && (e += 'e' + h[1]),
                    e
                  );
                }),
                (Math.easeInOutSine = function(t) {
                  return -0.5 * (Math.cos(Math.PI * t) - 1);
                }),
                (t.getStyle = function(e, i, o) {
                  return 'width' === i
                    ? Math.max(
                        0,
                        Math.min(
                          e.offsetWidth,
                          e.scrollWidth,
                          e.getBoundingClientRect && 'none' === t.getStyle(e, 'transform', !1)
                            ? Math.floor(e.getBoundingClientRect().width)
                            : 1 / 0
                        ) -
                          t.getStyle(e, 'padding-left') -
                          t.getStyle(e, 'padding-right')
                      )
                    : 'height' === i
                    ? Math.max(
                        0,
                        Math.min(e.offsetHeight, e.scrollHeight) -
                          t.getStyle(e, 'padding-top') -
                          t.getStyle(e, 'padding-bottom')
                      )
                    : (n.getComputedStyle || t.error(27, !0),
                      (e = n.getComputedStyle(e, void 0)) &&
                        ((e = e.getPropertyValue(i)), t.pick(o, 'opacity' !== i) && (e = t.pInt(e))),
                      e);
                }),
                (t.inArray = function(t, e, i) {
                  return e.indexOf(t, i);
                }),
                (t.find = Array.prototype.find
                  ? function(t, e) {
                      return t.find(e);
                    }
                  : function(t, e) {
                      var i,
                        n = t.length;
                      for (i = 0; i < n; i++) if (e(t[i], i)) return t[i];
                    }),
                (t.keys = Object.keys),
                (t.offset = function(t) {
                  var e = i.documentElement;
                  return {
                    top:
                      (t = t.parentElement || t.parentNode ? t.getBoundingClientRect() : { top: 0, left: 0 }).top +
                      (n.pageYOffset || e.scrollTop) -
                      (e.clientTop || 0),
                    left: t.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                  };
                }),
                (t.stop = function(e, i) {
                  for (var n = t.timers.length; n--; )
                    t.timers[n].elem !== e || (i && i !== t.timers[n].prop) || (t.timers[n].stopped = !0);
                }),
                (t.objectEach = function(t, e, i) {
                  for (var n in t) t.hasOwnProperty(n) && e.call(i || t[n], t[n], n, t);
                }),
                t.objectEach({ map: 'map', each: 'forEach', grep: 'filter', reduce: 'reduce', some: 'some' }, function(
                  e,
                  i
                ) {
                  t[i] = function(t) {
                    return Array.prototype[e].apply(t, [].slice.call(arguments, 1));
                  };
                }),
                (t.addEvent = function(e, i, n, o) {
                  var s,
                    r = e.addEventListener || t.addEventListenerPolyfill;
                  return (
                    (s =
                      'function' == typeof e && e.prototype
                        ? (e.prototype.protoEvents = e.prototype.protoEvents || {})
                        : (e.hcEvents = e.hcEvents || {})),
                    t.Point &&
                      e instanceof t.Point &&
                      e.series &&
                      e.series.chart &&
                      (e.series.chart.runTrackerClick = !0),
                    r && r.call(e, i, n, !1),
                    s[i] || (s[i] = []),
                    s[i].push(n),
                    o &&
                      t.isNumber(o.order) &&
                      ((n.order = o.order),
                      s[i].sort(function(t, e) {
                        return t.order - e.order;
                      })),
                    function() {
                      t.removeEvent(e, i, n);
                    }
                  );
                }),
                (t.removeEvent = function(e, i, n) {
                  function o(i, n) {
                    var o = e.removeEventListener || t.removeEventListenerPolyfill;
                    o && o.call(e, i, n, !1);
                  }
                  function s(n) {
                    var s, r;
                    e.nodeName &&
                      (i ? ((s = {})[i] = !0) : (s = n),
                      t.objectEach(s, function(t, e) {
                        if (n[e]) for (r = n[e].length; r--; ) o(e, n[e][r]);
                      }));
                  }
                  var r, a;
                  ['protoEvents', 'hcEvents'].forEach(function(t) {
                    var l = e[t];
                    l &&
                      (i
                        ? ((r = l[i] || []),
                          n ? (-1 < (a = r.indexOf(n)) && (r.splice(a, 1), (l[i] = r)), o(i, n)) : (s(l), (l[i] = [])))
                        : (s(l), (e[t] = {})));
                  });
                }),
                (t.fireEvent = function(e, n, o, s) {
                  var r, a, l, h, c;
                  (o = o || {}),
                    i.createEvent && (e.dispatchEvent || e.fireEvent)
                      ? ((r = i.createEvent('Events')).initEvent(n, !0, !0),
                        t.extend(r, o),
                        e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent(n, r))
                      : ['protoEvents', 'hcEvents'].forEach(function(i) {
                          if (e[i])
                            for (
                              l = (a = e[i][n] || []).length,
                                o.target ||
                                  t.extend(o, {
                                    preventDefault: function() {
                                      o.defaultPrevented = !0;
                                    },
                                    target: e,
                                    type: n
                                  }),
                                h = 0;
                              h < l;
                              h++
                            )
                              (c = a[h]) && !1 === c.call(e, o) && o.preventDefault();
                        }),
                    s && !o.defaultPrevented && s.call(e, o);
                }),
                (t.animate = function(e, i, n) {
                  var o,
                    s,
                    r,
                    a,
                    l = '';
                  t.isObject(n) || (n = { duration: (a = arguments)[2], easing: a[3], complete: a[4] }),
                    t.isNumber(n.duration) || (n.duration = 400),
                    (n.easing = 'function' == typeof n.easing ? n.easing : Math[n.easing] || Math.easeInOutSine),
                    (n.curAnim = t.merge(i)),
                    t.objectEach(i, function(a, h) {
                      t.stop(e, h),
                        (r = new t.Fx(e, n, h)),
                        (s = null),
                        'd' === h
                          ? ((r.paths = r.initPath(e, e.d, i.d)), (r.toD = i.d), (o = 0), (s = 1))
                          : e.attr
                          ? (o = e.attr(h))
                          : ((o = parseFloat(t.getStyle(e, h)) || 0), 'opacity' !== h && (l = 'px')),
                        s || (s = a),
                        s && s.match && s.match('px') && (s = s.replace(/px/g, '')),
                        r.run(o, s, l);
                    });
                }),
                (t.seriesType = function(e, i, n, o, s) {
                  var r = t.getOptions(),
                    a = t.seriesTypes;
                  return (
                    (r.plotOptions[e] = t.merge(r.plotOptions[i], n)),
                    (a[e] = t.extendClass(a[i] || function() {}, o)),
                    (a[e].prototype.type = e),
                    s && (a[e].prototype.pointClass = t.extendClass(t.Point, s)),
                    a[e]
                  );
                }),
                (t.uniqueKey = (function() {
                  var t = Math.random()
                      .toString(36)
                      .substring(2, 9),
                    e = 0;
                  return function() {
                    return 'highcharts-' + t + '-' + e++;
                  };
                })()),
                (t.isFunction = function(t) {
                  return 'function' == typeof t;
                }),
                n.jQuery &&
                  (n.jQuery.fn.highcharts = function() {
                    var i = [].slice.call(arguments);
                    if (this[0])
                      return i[0]
                        ? (new t[t.isString(i[0]) ? i.shift() : 'Chart'](this[0], i[0], i[1]), this)
                        : e[t.attr(this[0], 'data-highcharts-chart')];
                  });
            }),
            e(i, 'parts/Color.js', [i['parts/Globals.js']], function(t) {
              var e = t.isNumber,
                i = t.merge,
                n = t.pInt;
              (t.Color = function(e) {
                if (!(this instanceof t.Color)) return new t.Color(e);
                this.init(e);
              }),
                (t.Color.prototype = {
                  parsers: [
                    {
                      regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                      parse: function(t) {
                        return [n(t[1]), n(t[2]), n(t[3]), parseFloat(t[4], 10)];
                      }
                    },
                    {
                      regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                      parse: function(t) {
                        return [n(t[1]), n(t[2]), n(t[3]), 1];
                      }
                    }
                  ],
                  names: { white: '#ffffff', black: '#000000' },
                  init: function(e) {
                    var i, n, o, s;
                    if ((this.input = e = this.names[e && e.toLowerCase ? e.toLowerCase() : ''] || e) && e.stops)
                      this.stops = e.stops.map(function(e) {
                        return new t.Color(e[1]);
                      });
                    else if (
                      (e &&
                        e.charAt &&
                        '#' === e.charAt() &&
                        ((i = e.length),
                        (e = parseInt(e.substr(1), 16)),
                        7 === i
                          ? (n = [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 1])
                          : 4 === i &&
                            (n = [
                              ((3840 & e) >> 4) | ((3840 & e) >> 8),
                              ((240 & e) >> 4) | (240 & e),
                              ((15 & e) << 4) | (15 & e),
                              1
                            ])),
                      !n)
                    )
                      for (o = this.parsers.length; o-- && !n; )
                        (i = (s = this.parsers[o]).regex.exec(e)) && (n = s.parse(i));
                    this.rgba = n || [];
                  },
                  get: function(t) {
                    var n,
                      o = this.input,
                      s = this.rgba;
                    return (
                      this.stops
                        ? (((n = i(o)).stops = [].concat(n.stops)),
                          this.stops.forEach(function(e, i) {
                            n.stops[i] = [n.stops[i][0], e.get(t)];
                          }))
                        : (n =
                            s && e(s[0])
                              ? 'rgb' === t || (!t && 1 === s[3])
                                ? 'rgb(' + s[0] + ',' + s[1] + ',' + s[2] + ')'
                                : 'a' === t
                                ? s[3]
                                : 'rgba(' + s.join(',') + ')'
                              : o),
                      n
                    );
                  },
                  brighten: function(t) {
                    var i,
                      o = this.rgba;
                    if (this.stops)
                      this.stops.forEach(function(e) {
                        e.brighten(t);
                      });
                    else if (e(t) && 0 !== t)
                      for (i = 0; 3 > i; i++) (o[i] += n(255 * t)), 0 > o[i] && (o[i] = 0), 255 < o[i] && (o[i] = 255);
                    return this;
                  },
                  setOpacity: function(t) {
                    return (this.rgba[3] = t), this;
                  },
                  tweenTo: function(t, e) {
                    var i = this.rgba,
                      n = t.rgba;
                    return n.length && i && i.length
                      ? ((t = 1 !== n[3] || 1 !== i[3]) ? 'rgba(' : 'rgb(') +
                          Math.round(n[0] + (i[0] - n[0]) * (1 - e)) +
                          ',' +
                          Math.round(n[1] + (i[1] - n[1]) * (1 - e)) +
                          ',' +
                          Math.round(n[2] + (i[2] - n[2]) * (1 - e)) +
                          (t ? ',' + (n[3] + (i[3] - n[3]) * (1 - e)) : '') +
                          ')'
                      : t.input || 'none';
                  }
                }),
                (t.color = function(e) {
                  return new t.Color(e);
                });
            }),
            e(i, 'parts/SvgRenderer.js', [i['parts/Globals.js']], function(t) {
              var e,
                i,
                n = t.addEvent,
                o = t.animate,
                s = t.attr,
                r = t.charts,
                a = t.color,
                l = t.css,
                h = t.createElement,
                c = t.defined,
                d = t.deg2rad,
                p = t.destroyObjectProperties,
                u = t.doc,
                f = t.extend,
                g = t.erase,
                m = t.hasTouch,
                x = t.isArray,
                y = t.isFirefox,
                v = t.isMS,
                b = t.isObject,
                M = t.isString,
                k = t.isWebKit,
                w = t.merge,
                S = t.noop,
                P = t.objectEach,
                T = t.pick,
                L = t.pInt,
                A = t.removeEvent,
                C = t.splat,
                E = t.stop,
                O = t.svg,
                I = t.SVG_NS,
                N = t.symbolSizes,
                D = t.win;
              (e = t.SVGElement = function() {
                return this;
              }),
                f(e.prototype, {
                  opacity: 1,
                  SVG_NS: I,
                  textProps: 'direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor'.split(
                    ' '
                  ),
                  init: function(e, i) {
                    (this.element = 'span' === i ? h(i) : u.createElementNS(this.SVG_NS, i)),
                      (this.renderer = e),
                      t.fireEvent(this, 'afterInit');
                  },
                  animate: function(e, i, n) {
                    var s = t.animObject(T(i, this.renderer.globalAnimation, !0));
                    return (
                      T(u.hidden, u.msHidden, u.webkitHidden, !1) && (s.duration = 0),
                      0 !== s.duration
                        ? (n && (s.complete = n), o(this, e, s))
                        : (this.attr(e, null, n),
                          t.objectEach(
                            e,
                            function(t, e) {
                              s.step && s.step.call(this, t, { prop: e, pos: 1 });
                            },
                            this
                          )),
                      this
                    );
                  },
                  complexColor: function(e, i, n) {
                    var o,
                      s,
                      r,
                      a,
                      l,
                      h,
                      d,
                      p,
                      u,
                      f,
                      g,
                      m,
                      y = this.renderer,
                      v = [];
                    t.fireEvent(this.renderer, 'complexColor', { args: arguments }, function() {
                      e.radialGradient ? (s = 'radialGradient') : e.linearGradient && (s = 'linearGradient'),
                        s &&
                          ((l = y.gradients),
                          (d = e.stops),
                          (f = n.radialReference),
                          x((r = e[s])) &&
                            (e[s] = r = { x1: r[0], y1: r[1], x2: r[2], y2: r[3], gradientUnits: 'userSpaceOnUse' }),
                          'radialGradient' === s &&
                            f &&
                            !c(r.gradientUnits) &&
                            (r = w(r, y.getRadialAttr(f, (a = r)), { gradientUnits: 'userSpaceOnUse' })),
                          P(r, function(t, e) {
                            'id' !== e && v.push(e, t);
                          }),
                          P(d, function(t) {
                            v.push(t);
                          }),
                          (v = v.join(',')),
                          l[v]
                            ? (g = l[v].attr('id'))
                            : ((r.id = g = t.uniqueKey()),
                              (l[v] = h = y
                                .createElement(s)
                                .attr(r)
                                .add(y.defs)),
                              (h.radAttr = a),
                              (h.stops = []),
                              d.forEach(function(e) {
                                0 === e[1].indexOf('rgba')
                                  ? ((o = t.color(e[1])), (p = o.get('rgb')), (u = o.get('a')))
                                  : ((p = e[1]), (u = 1)),
                                  (e = y
                                    .createElement('stop')
                                    .attr({ offset: e[0], 'stop-color': p, 'stop-opacity': u })
                                    .add(h)),
                                  h.stops.push(e);
                              })),
                          n.setAttribute(i, (m = 'url(' + y.url + '#' + g + ')')),
                          (n.gradient = v),
                          (e.toString = function() {
                            return m;
                          }));
                    });
                  },
                  applyTextOutline: function(e) {
                    var i,
                      n,
                      o,
                      r = this.element;
                    -1 !== e.indexOf('contrast') &&
                      (e = e.replace(/contrast/g, this.renderer.getContrast(r.style.fill))),
                      (e = e.split(' ')),
                      (i = e[e.length - 1]),
                      (n = e[0]) &&
                        'none' !== n &&
                        t.svg &&
                        ((this.fakeTS = !0),
                        (e = [].slice.call(r.getElementsByTagName('tspan'))),
                        (this.ySetter = this.xSetter),
                        (n = n.replace(/(^[\d\.]+)(.*?)$/g, function(t, e, i) {
                          return 2 * e + i;
                        })),
                        this.removeTextOutline(e),
                        (o = r.firstChild),
                        e.forEach(function(t, e) {
                          0 === e &&
                            (t.setAttribute('x', r.getAttribute('x')),
                            (e = r.getAttribute('y')),
                            t.setAttribute('y', e || 0),
                            null === e && r.setAttribute('y', 0)),
                            (t = t.cloneNode(1)),
                            s(t, {
                              class: 'highcharts-text-outline',
                              fill: i,
                              stroke: i,
                              'stroke-width': n,
                              'stroke-linejoin': 'round'
                            }),
                            r.insertBefore(t, o);
                        }));
                  },
                  removeTextOutline: function(t) {
                    for (var e, i = t.length; i--; )
                      'highcharts-text-outline' === (e = t[i]).getAttribute('class') &&
                        g(t, this.element.removeChild(e));
                  },
                  symbolCustomAttribs: 'x y width height r start end innerR anchorX anchorY rounded'.split(' '),
                  attr: function(e, i, n, o) {
                    var s,
                      r,
                      a,
                      l,
                      h = this.element,
                      c = this,
                      d = this.symbolCustomAttribs;
                    return (
                      'string' == typeof e && void 0 !== i && ((s = e), ((e = {})[s] = i)),
                      'string' == typeof e
                        ? (c = (this[e + 'Getter'] || this._defaultGetter).call(this, e, h))
                        : (P(
                            e,
                            function(i, n) {
                              (a = !1),
                                o || E(this, n),
                                this.symbolName &&
                                  -1 !== t.inArray(n, d) &&
                                  (r || (this.symbolAttr(e), (r = !0)), (a = !0)),
                                !this.rotation || ('x' !== n && 'y' !== n) || (this.doTransform = !0),
                                a ||
                                  ((l = this[n + 'Setter'] || this._defaultSetter).call(this, i, n, h),
                                  !this.styledMode &&
                                    this.shadows &&
                                    /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(n) &&
                                    this.updateShadows(n, i, l));
                            },
                            this
                          ),
                          this.afterSetters()),
                      n && n.call(this),
                      c
                    );
                  },
                  afterSetters: function() {
                    this.doTransform && (this.updateTransform(), (this.doTransform = !1));
                  },
                  updateShadows: function(t, e, i) {
                    for (var n = this.shadows, o = n.length; o--; )
                      i.call(
                        n[o],
                        'height' === t ? Math.max(e - (n[o].cutHeight || 0), 0) : 'd' === t ? this.d : e,
                        t,
                        n[o]
                      );
                  },
                  addClass: function(t, e) {
                    var i = this.attr('class') || '';
                    return (
                      e ||
                        (t = (t || '')
                          .split(/ /g)
                          .reduce(
                            function(t, e) {
                              return -1 === i.indexOf(e) && t.push(e), t;
                            },
                            i ? [i] : []
                          )
                          .join(' ')),
                      t !== i && this.attr('class', t),
                      this
                    );
                  },
                  hasClass: function(t) {
                    return -1 !== (this.attr('class') || '').split(' ').indexOf(t);
                  },
                  removeClass: function(t) {
                    return this.attr('class', (this.attr('class') || '').replace(t, ''));
                  },
                  symbolAttr: function(t) {
                    var e = this;
                    'x y r start end width height innerR anchorX anchorY clockwise'.split(' ').forEach(function(i) {
                      e[i] = T(t[i], e[i]);
                    }),
                      e.attr({ d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e) });
                  },
                  clip: function(t) {
                    return this.attr('clip-path', t ? 'url(' + this.renderer.url + '#' + t.id + ')' : 'none');
                  },
                  crisp: function(t, e) {
                    var i;
                    return (
                      (e = e || t.strokeWidth || 0),
                      (i = (Math.round(e) % 2) / 2),
                      (t.x = Math.floor(t.x || this.x || 0) + i),
                      (t.y = Math.floor(t.y || this.y || 0) + i),
                      (t.width = Math.floor((t.width || this.width || 0) - 2 * i)),
                      (t.height = Math.floor((t.height || this.height || 0) - 2 * i)),
                      c(t.strokeWidth) && (t.strokeWidth = e),
                      t
                    );
                  },
                  css: function(t) {
                    var e,
                      i,
                      n = this.styles,
                      o = {},
                      r = this.element,
                      a = '',
                      h = !n,
                      c = ['textOutline', 'textOverflow', 'width'];
                    return (
                      t && t.color && (t.fill = t.color),
                      n &&
                        P(t, function(t, e) {
                          t !== n[e] && ((o[e] = t), (h = !0));
                        }),
                      h &&
                        (n && (t = f(n, o)),
                        t &&
                          (null === t.width || 'auto' === t.width
                            ? delete this.textWidth
                            : 'text' === r.nodeName.toLowerCase() && t.width && (e = this.textWidth = L(t.width))),
                        (this.styles = t),
                        e && !O && this.renderer.forExport && delete t.width,
                        r.namespaceURI === this.SVG_NS
                          ? ((i = function(t, e) {
                              return '-' + e.toLowerCase();
                            }),
                            P(t, function(t, e) {
                              -1 === c.indexOf(e) && (a += e.replace(/([A-Z])/g, i) + ':' + t + ';');
                            }),
                            a && s(r, 'style', a))
                          : l(r, t),
                        this.added &&
                          ('text' === this.element.nodeName && this.renderer.buildText(this),
                          t && t.textOutline && this.applyTextOutline(t.textOutline))),
                      this
                    );
                  },
                  getStyle: function(t) {
                    return D.getComputedStyle(this.element || this, '').getPropertyValue(t);
                  },
                  strokeWidth: function() {
                    if (!this.renderer.styledMode) return this['stroke-width'] || 0;
                    var t,
                      e = this.getStyle('stroke-width');
                    return (
                      e.indexOf('px') === e.length - 2
                        ? (e = L(e))
                        : ((t = u.createElementNS(I, 'rect')),
                          s(t, { width: e, 'stroke-width': 0 }),
                          this.element.parentNode.appendChild(t),
                          (e = t.getBBox().width),
                          t.parentNode.removeChild(t)),
                      e
                    );
                  },
                  on: function(t, e) {
                    var i = this,
                      n = i.element;
                    return (
                      m && 'click' === t
                        ? ((n.ontouchstart = function(t) {
                            (i.touchEventFired = Date.now()), t.preventDefault(), e.call(n, t);
                          }),
                          (n.onclick = function(t) {
                            (-1 === D.navigator.userAgent.indexOf('Android') ||
                              1100 < Date.now() - (i.touchEventFired || 0)) &&
                              e.call(n, t);
                          }))
                        : (n['on' + t] = e),
                      this
                    );
                  },
                  setRadialReference: function(t) {
                    var e = this.renderer.gradients[this.element.gradient];
                    return (
                      (this.element.radialReference = t),
                      e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)),
                      this
                    );
                  },
                  translate: function(t, e) {
                    return this.attr({ translateX: t, translateY: e });
                  },
                  invert: function(t) {
                    return (this.inverted = t), this.updateTransform(), this;
                  },
                  updateTransform: function() {
                    var t = this.translateX || 0,
                      e = this.translateY || 0,
                      i = this.scaleX,
                      n = this.scaleY,
                      o = this.inverted,
                      s = this.rotation,
                      r = this.matrix,
                      a = this.element;
                    o && ((t += this.width), (e += this.height)),
                      (t = ['translate(' + t + ',' + e + ')']),
                      c(r) && t.push('matrix(' + r.join(',') + ')'),
                      o
                        ? t.push('rotate(90) scale(-1,1)')
                        : s &&
                          t.push(
                            'rotate(' +
                              s +
                              ' ' +
                              T(this.rotationOriginX, a.getAttribute('x'), 0) +
                              ' ' +
                              T(this.rotationOriginY, a.getAttribute('y') || 0) +
                              ')'
                          ),
                      (c(i) || c(n)) && t.push('scale(' + T(i, 1) + ' ' + T(n, 1) + ')'),
                      t.length && a.setAttribute('transform', t.join(' '));
                  },
                  toFront: function() {
                    var t = this.element;
                    return t.parentNode.appendChild(t), this;
                  },
                  align: function(t, e, i) {
                    var n,
                      o,
                      s,
                      r,
                      a,
                      l,
                      h = {};
                    return (
                      (s = (o = this.renderer).alignedObjects),
                      t
                        ? ((this.alignOptions = t),
                          (this.alignByTranslate = e),
                          (!i || M(i)) && ((this.alignTo = n = i || 'renderer'), g(s, this), s.push(this), (i = null)))
                        : ((t = this.alignOptions), (e = this.alignByTranslate), (n = this.alignTo)),
                      (i = T(i, o[n], o)),
                      (o = t.verticalAlign),
                      (s = (i.x || 0) + (t.x || 0)),
                      (r = (i.y || 0) + (t.y || 0)),
                      'right' === (n = t.align) ? (a = 1) : 'center' === n && (a = 2),
                      a && (s += (i.width - (t.width || 0)) / a),
                      (h[e ? 'translateX' : 'x'] = Math.round(s)),
                      'bottom' === o ? (l = 1) : 'middle' === o && (l = 2),
                      l && (r += (i.height - (t.height || 0)) / l),
                      (h[e ? 'translateY' : 'y'] = Math.round(r)),
                      this[this.placed ? 'animate' : 'attr'](h),
                      (this.placed = !0),
                      (this.alignAttr = h),
                      this
                    );
                  },
                  getBBox: function(t, i) {
                    var n,
                      o,
                      s,
                      r,
                      a,
                      l = this.renderer,
                      h = this.element,
                      p = this.styles,
                      u = this.textStr,
                      g = l.cache,
                      m = l.cacheKeys,
                      x = h.namespaceURI === this.SVG_NS;
                    if (
                      ((o = (i = T(i, this.rotation)) * d),
                      (s = l.styledMode ? h && e.prototype.getStyle.call(h, 'font-size') : p && p.fontSize),
                      c(u) &&
                        (-1 === (a = u.toString()).indexOf('<') && (a = a.replace(/[0-9]/g, '0')),
                        (a += ['', i || 0, s, this.textWidth, p && p.textOverflow].join())),
                      a && !t && (n = g[a]),
                      !n)
                    ) {
                      if (x || l.forExport) {
                        try {
                          (r =
                            this.fakeTS &&
                            function(t) {
                              [].forEach.call(h.querySelectorAll('.highcharts-text-outline'), function(e) {
                                e.style.display = t;
                              });
                            }) && r('none'),
                            (n = h.getBBox ? f({}, h.getBBox()) : { width: h.offsetWidth, height: h.offsetHeight }),
                            r && r('');
                        } catch (y) {}
                        (!n || 0 > n.width) && (n = { width: 0, height: 0 });
                      } else n = this.htmlGetBBox();
                      if (
                        (l.isSVG &&
                          ((t = n.width),
                          (l = n.height),
                          x &&
                            (n.height = l =
                              { '11px,17': 14, '13px,20': 16 }[p && p.fontSize + ',' + Math.round(l)] || l),
                          i &&
                            ((n.width = Math.abs(l * Math.sin(o)) + Math.abs(t * Math.cos(o))),
                            (n.height = Math.abs(l * Math.cos(o)) + Math.abs(t * Math.sin(o))))),
                        a && 0 < n.height)
                      ) {
                        for (; 250 < m.length; ) delete g[m.shift()];
                        g[a] || m.push(a), (g[a] = n);
                      }
                    }
                    return n;
                  },
                  show: function(t) {
                    return this.attr({ visibility: t ? 'inherit' : 'visible' });
                  },
                  hide: function() {
                    return this.attr({ visibility: 'hidden' });
                  },
                  fadeOut: function(t) {
                    var e = this;
                    e.animate(
                      { opacity: 0 },
                      {
                        duration: t || 150,
                        complete: function() {
                          e.attr({ y: -9999 });
                        }
                      }
                    );
                  },
                  add: function(t) {
                    var e,
                      i = this.renderer,
                      n = this.element;
                    return (
                      t && (this.parentGroup = t),
                      (this.parentInverted = t && t.inverted),
                      void 0 !== this.textStr && i.buildText(this),
                      (this.added = !0),
                      (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()),
                      e || (t ? t.element : i.box).appendChild(n),
                      this.onAdd && this.onAdd(),
                      this
                    );
                  },
                  safeRemoveChild: function(t) {
                    var e = t.parentNode;
                    e && e.removeChild(t);
                  },
                  destroy: function() {
                    var t = this,
                      e = t.element || {},
                      i = t.renderer,
                      n = i.isSVG && 'SPAN' === e.nodeName && t.parentGroup,
                      o = e.ownerSVGElement,
                      s = t.clipPath;
                    if (
                      ((e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null),
                      E(t),
                      s &&
                        o &&
                        ([].forEach.call(o.querySelectorAll('[clip-path],[CLIP-PATH]'), function(t) {
                          -1 < t.getAttribute('clip-path').indexOf(s.element.id) && t.removeAttribute('clip-path');
                        }),
                        (t.clipPath = s.destroy())),
                      t.stops)
                    ) {
                      for (o = 0; o < t.stops.length; o++) t.stops[o] = t.stops[o].destroy();
                      t.stops = null;
                    }
                    for (
                      t.safeRemoveChild(e), i.styledMode || t.destroyShadows();
                      n && n.div && 0 === n.div.childNodes.length;

                    )
                      (e = n.parentGroup), t.safeRemoveChild(n.div), delete n.div, (n = e);
                    return (
                      t.alignTo && g(i.alignedObjects, t),
                      P(t, function(e, i) {
                        delete t[i];
                      }),
                      null
                    );
                  },
                  shadow: function(t, e, i) {
                    var n,
                      o,
                      r,
                      a,
                      l,
                      h,
                      c = [],
                      d = this.element;
                    if (t) {
                      if (!this.shadows) {
                        for (
                          a = T(t.width, 3),
                            l = (t.opacity || 0.15) / a,
                            h = this.parentInverted ? '(-1,-1)' : '(' + T(t.offsetX, 1) + ', ' + T(t.offsetY, 1) + ')',
                            n = 1;
                          n <= a;
                          n++
                        )
                          (o = d.cloneNode(0)),
                            s(o, {
                              stroke: t.color || '#000000',
                              'stroke-opacity': l * n,
                              'stroke-width': (r = 2 * a + 1 - 2 * n),
                              transform: 'translate' + h,
                              fill: 'none'
                            }),
                            o.setAttribute('class', (o.getAttribute('class') || '') + ' highcharts-shadow'),
                            i && (s(o, 'height', Math.max(s(o, 'height') - r, 0)), (o.cutHeight = r)),
                            e ? e.element.appendChild(o) : d.parentNode && d.parentNode.insertBefore(o, d),
                            c.push(o);
                        this.shadows = c;
                      }
                    } else this.destroyShadows();
                    return this;
                  },
                  destroyShadows: function() {
                    (this.shadows || []).forEach(function(t) {
                      this.safeRemoveChild(t);
                    }, this),
                      (this.shadows = void 0);
                  },
                  xGetter: function(t) {
                    return (
                      'circle' === this.element.nodeName && ('x' === t ? (t = 'cx') : 'y' === t && (t = 'cy')),
                      this._defaultGetter(t)
                    );
                  },
                  _defaultGetter: function(t) {
                    return (
                      (t = T(this[t + 'Value'], this[t], this.element ? this.element.getAttribute(t) : null, 0)),
                      /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)),
                      t
                    );
                  },
                  dSetter: function(t, e, i) {
                    t && t.join && (t = t.join(' ')),
                      /(NaN| {2}|^$)/.test(t) && (t = 'M 0 0'),
                      this[e] !== t && (i.setAttribute(e, t), (this[e] = t));
                  },
                  dashstyleSetter: function(t) {
                    var e,
                      i = this['stroke-width'];
                    if (('inherit' === i && (i = 1), (t = t && t.toLowerCase()))) {
                      for (
                        e = (t = t
                          .replace('shortdashdotdot', '3,1,1,1,1,1,')
                          .replace('shortdashdot', '3,1,1,1')
                          .replace('shortdot', '1,1,')
                          .replace('shortdash', '3,1,')
                          .replace('longdash', '8,3,')
                          .replace(/dot/g, '1,3,')
                          .replace('dash', '4,3,')
                          .replace(/,$/, '')
                          .split(',')).length;
                        e--;

                      )
                        t[e] = L(t[e]) * i;
                      (t = t.join(',').replace(/NaN/g, 'none')), this.element.setAttribute('stroke-dasharray', t);
                    }
                  },
                  alignSetter: function(t) {
                    var e = { left: 'start', center: 'middle', right: 'end' };
                    e[t] && ((this.alignValue = t), this.element.setAttribute('text-anchor', e[t]));
                  },
                  opacitySetter: function(t, e, i) {
                    (this[e] = t), i.setAttribute(e, t);
                  },
                  titleSetter: function(t) {
                    var e = this.element.getElementsByTagName('title')[0];
                    e || ((e = u.createElementNS(this.SVG_NS, 'title')), this.element.appendChild(e)),
                      e.firstChild && e.removeChild(e.firstChild),
                      e.appendChild(
                        u.createTextNode(
                          String(T(t), '')
                            .replace(/<[^>]*>/g, '')
                            .replace(/&lt;/g, '<')
                            .replace(/&gt;/g, '>')
                        )
                      );
                  },
                  textSetter: function(t) {
                    t !== this.textStr &&
                      (delete this.bBox, (this.textStr = t), this.added && this.renderer.buildText(this));
                  },
                  setTextPath: function(e, i) {
                    var n,
                      o,
                      s = this.element,
                      r = { textAnchor: 'text-anchor' },
                      a = !1,
                      l = this.textPathWrapper,
                      h = !l;
                    if (
                      ((n = (i = w(
                        !0,
                        { enabled: !0, attributes: { dy: -5, startOffset: '50%', textAnchor: 'middle' } },
                        i
                      )).attributes),
                      e && i && i.enabled)
                    ) {
                      if (
                        (this.options && this.options.padding && (n.dx = -this.options.padding),
                        l || ((this.textPathWrapper = l = this.renderer.createElement('textPath')), (a = !0)),
                        (o = l.element),
                        (i = e.element.getAttribute('id')) || e.element.setAttribute('id', (i = t.uniqueKey())),
                        h)
                      )
                        for (e = s.getElementsByTagName('tspan'); e.length; )
                          e[0].setAttribute('y', 0), o.appendChild(e[0]);
                      a && l.add({ element: this.text ? this.text.element : s }),
                        o.setAttributeNS('http://www.w3.org/1999/xlink', 'href', this.renderer.url + '#' + i),
                        c(n.dy) && (o.parentNode.setAttribute('dy', n.dy), delete n.dy),
                        c(n.dx) && (o.parentNode.setAttribute('dx', n.dx), delete n.dx),
                        t.objectEach(n, function(t, e) {
                          o.setAttribute(r[e] || e, t);
                        }),
                        s.removeAttribute('transform'),
                        this.removeTextOutline.call(l, [].slice.call(s.getElementsByTagName('tspan'))),
                        (this.applyTextOutline = this.updateTransform = S);
                    } else l && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(s, e));
                    return this;
                  },
                  destroyTextPath: function(t, e) {
                    var i;
                    for (e.element.setAttribute('id', ''), i = this.textPathWrapper.element.childNodes; i.length; )
                      t.firstChild.appendChild(i[0]);
                    t.firstChild.removeChild(this.textPathWrapper.element), delete e.textPathWrapper;
                  },
                  fillSetter: function(t, e, i) {
                    'string' == typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i);
                  },
                  visibilitySetter: function(t, e, i) {
                    'inherit' === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), (this[e] = t);
                  },
                  zIndexSetter: function(t, e) {
                    var i,
                      n,
                      o,
                      s,
                      r = this.renderer,
                      a = this.parentGroup,
                      l = (a || r).element || r.box,
                      h = this.element;
                    if (
                      ((r = l === r.box),
                      (i = this.added),
                      c(t)
                        ? (h.setAttribute('data-z-index', t), this[e] === (t = +t) && (i = !1))
                        : c(this[e]) && h.removeAttribute('data-z-index'),
                      (this[e] = t),
                      i)
                    ) {
                      for (
                        (t = this.zIndex) && a && (a.handleZ = !0), s = (e = l.childNodes).length - 1;
                        0 <= s && !n;
                        s--
                      )
                        (i = (a = e[s]).getAttribute('data-z-index')),
                          (o = !c(i)),
                          a !== h &&
                            (0 > t && o && !r && !s
                              ? (l.insertBefore(h, e[s]), (n = !0))
                              : (L(i) <= t || (o && (!c(t) || 0 <= t))) &&
                                (l.insertBefore(h, e[s + 1] || null), (n = !0)));
                      n || (l.insertBefore(h, e[r ? 3 : 0] || null), (n = !0));
                    }
                    return n;
                  },
                  _defaultSetter: function(t, e, i) {
                    i.setAttribute(e, t);
                  }
                }),
                (e.prototype.yGetter = e.prototype.xGetter),
                (e.prototype.translateXSetter = e.prototype.translateYSetter = e.prototype.rotationSetter = e.prototype.verticalAlignSetter = e.prototype.rotationOriginXSetter = e.prototype.rotationOriginYSetter = e.prototype.scaleXSetter = e.prototype.scaleYSetter = e.prototype.matrixSetter = function(
                  t,
                  e
                ) {
                  (this[e] = t), (this.doTransform = !0);
                }),
                (e.prototype['stroke-widthSetter'] = e.prototype.strokeSetter = function(t, i, n) {
                  (this[i] = t),
                    this.stroke && this['stroke-width']
                      ? (e.prototype.fillSetter.call(this, this.stroke, 'stroke', n),
                        n.setAttribute('stroke-width', this['stroke-width']),
                        (this.hasStroke = !0))
                      : 'stroke-width' === i &&
                        0 === t &&
                        this.hasStroke &&
                        (n.removeAttribute('stroke'), (this.hasStroke = !1));
                }),
                (i = t.SVGRenderer = function() {
                  this.init.apply(this, arguments);
                }),
                f(i.prototype, {
                  Element: e,
                  SVG_NS: I,
                  init: function(t, e, i, o, r, a, h) {
                    var c, d;
                    (c = this.createElement('svg').attr({ version: '1.1', class: 'highcharts-root' })),
                      h || c.css(this.getStyle(o)),
                      t.appendChild((o = c.element)),
                      s(t, 'dir', 'ltr'),
                      -1 === t.innerHTML.indexOf('xmlns') && s(o, 'xmlns', this.SVG_NS),
                      (this.isSVG = !0),
                      (this.box = o),
                      (this.boxWrapper = c),
                      (this.alignedObjects = []),
                      (this.url =
                        (y || k) && u.getElementsByTagName('base').length
                          ? D.location.href
                              .split('#')[0]
                              .replace(/<[^>]*>/g, '')
                              .replace(/([\('\)])/g, '\\$1')
                              .replace(/ /g, '%20')
                          : ''),
                      this.createElement('desc')
                        .add()
                        .element.appendChild(u.createTextNode('Created with Highcharts 7.1.1')),
                      (this.defs = this.createElement('defs').add()),
                      (this.allowHTML = a),
                      (this.forExport = r),
                      (this.styledMode = h),
                      (this.gradients = {}),
                      (this.cache = {}),
                      (this.cacheKeys = []),
                      (this.imgCount = 0),
                      this.setSize(e, i, !1),
                      y &&
                        t.getBoundingClientRect &&
                        ((e = function() {
                          l(t, { left: 0, top: 0 }),
                            (d = t.getBoundingClientRect()),
                            l(t, { left: Math.ceil(d.left) - d.left + 'px', top: Math.ceil(d.top) - d.top + 'px' });
                        })(),
                        (this.unSubPixelFix = n(D, 'resize', e)));
                  },
                  definition: function(t) {
                    var e = this;
                    return (function t(i, n) {
                      var o;
                      return (
                        C(i).forEach(function(i) {
                          var s = e.createElement(i.tagName),
                            r = {};
                          P(i, function(t, e) {
                            'tagName' !== e && 'children' !== e && 'textContent' !== e && (r[e] = t);
                          }),
                            s.attr(r),
                            s.add(n || e.defs),
                            i.textContent && s.element.appendChild(u.createTextNode(i.textContent)),
                            t(i.children || [], s),
                            (o = s);
                        }),
                        o
                      );
                    })(t);
                  },
                  getStyle: function(t) {
                    return (this.style = f(
                      {
                        fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                        fontSize: '12px'
                      },
                      t
                    ));
                  },
                  setStyle: function(t) {
                    this.boxWrapper.css(this.getStyle(t));
                  },
                  isHidden: function() {
                    return !this.boxWrapper.getBBox().width;
                  },
                  destroy: function() {
                    var t = this.defs;
                    return (
                      (this.box = null),
                      (this.boxWrapper = this.boxWrapper.destroy()),
                      p(this.gradients || {}),
                      (this.gradients = null),
                      t && (this.defs = t.destroy()),
                      this.unSubPixelFix && this.unSubPixelFix(),
                      (this.alignedObjects = null)
                    );
                  },
                  createElement: function(t) {
                    var e = new this.Element();
                    return e.init(this, t), e;
                  },
                  draw: S,
                  getRadialAttr: function(t, e) {
                    return { cx: t[0] - t[2] / 2 + e.cx * t[2], cy: t[1] - t[2] / 2 + e.cy * t[2], r: e.r * t[2] };
                  },
                  truncate: function(t, e, i, n, o, s, r) {
                    var a,
                      l,
                      h,
                      c = this,
                      d = t.rotation,
                      p = n ? 1 : 0,
                      f = (i || n).length,
                      g = f,
                      m = [],
                      x = function(t) {
                        e.firstChild && e.removeChild(e.firstChild), t && e.appendChild(u.createTextNode(t));
                      },
                      y = function(s, a) {
                        if (void 0 === m[(a = a || s)])
                          if (e.getSubStringLength)
                            try {
                              m[a] = o + e.getSubStringLength(0, n ? a + 1 : a);
                            } catch (l) {}
                          else c.getSpanWidth && (x(r(i || n, s)), (m[a] = o + c.getSpanWidth(t, e)));
                        return m[a];
                      };
                    if (((t.rotation = 0), (l = y(e.textContent.length)), (h = o + l > s))) {
                      for (; p <= f; )
                        (g = Math.ceil((p + f) / 2)),
                          n && (a = r(n, g)),
                          (l = y(g, a && a.length - 1)),
                          p === f ? (p = f + 1) : l > s ? (f = g - 1) : (p = g);
                      0 === f ? x('') : (i && f === i.length - 1) || x(a || r(i || n, g));
                    }
                    return n && n.splice(0, g), (t.actualWidth = l), (t.rotation = d), h;
                  },
                  escapes: { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' },
                  buildText: function(t) {
                    var e,
                      i,
                      n,
                      o = t.element,
                      r = this,
                      a = r.forExport,
                      h = T(t.textStr, '').toString(),
                      c = -1 !== h.indexOf('<'),
                      d = o.childNodes,
                      p = s(o, 'x'),
                      f = t.textWidth,
                      g = (M = t.styles) && M.lineHeight,
                      m = M && M.textOutline,
                      x = M && 'ellipsis' === M.textOverflow,
                      y = M && 'nowrap' === M.whiteSpace,
                      v = M && M.fontSize,
                      b = d.length,
                      M = f && !t.added && this.box,
                      k = function(t) {
                        var e;
                        return (
                          r.styledMode ||
                            (e = /(px|em)$/.test(t && t.style.fontSize)
                              ? t.style.fontSize
                              : v || r.style.fontSize || 12),
                          g ? L(g) : r.fontMetrics(e, t.getAttribute('style') ? t : o).h
                        );
                      },
                      w = function(t, e) {
                        return (
                          P(r.escapes, function(i, n) {
                            (e && -1 !== e.indexOf(i)) || (t = t.toString().replace(new RegExp(i, 'g'), n));
                          }),
                          t
                        );
                      },
                      S = function(t, e) {
                        var i;
                        if (
                          ((i = t.indexOf('<')),
                          -1 !== (i = (t = t.substring(i, t.indexOf('>') - i)).indexOf(e + '=')) &&
                            ('"' === (e = t.charAt((i = i + e.length + 1))) || "'" === e))
                        )
                          return (t = t.substring(i + 1)).substring(0, t.indexOf(e));
                      };
                    if ((i = [h, x, y, g, m, v, f].join()) !== t.textCache) {
                      for (t.textCache = i; b--; ) o.removeChild(d[b]);
                      c || m || x || f || -1 !== h.indexOf(' ')
                        ? (M && M.appendChild(o),
                          (h = (h = c
                            ? (h = r.styledMode
                                ? h
                                    .replace(/<(b|strong)>/g, '<span class="highcharts-strong">')
                                    .replace(/<(i|em)>/g, '<span class="highcharts-emphasized">')
                                : h
                                    .replace(/<(b|strong)>/g, '<span style="font-weight:bold">')
                                    .replace(/<(i|em)>/g, '<span style="font-style:italic">'))
                                .replace(/<a/g, '<span')
                                .replace(/<\/(b|strong|i|em|a)>/g, '</span>')
                                .split(/<br.*?>/g)
                            : [h]).filter(function(t) {
                            return '' !== t;
                          })).forEach(function(i, h) {
                            var c,
                              d = 0,
                              g = 0;
                            (i = i
                              .replace(/^\s+|\s+$/g, '')
                              .replace(/<span/g, '|||<span')
                              .replace(/<\/span>/g, '</span>|||')),
                              (c = i.split('|||')).forEach(function(i) {
                                if ('' !== i || 1 === c.length) {
                                  var m,
                                    b,
                                    M = {},
                                    P = u.createElementNS(r.SVG_NS, 'tspan');
                                  if (
                                    ((m = S(i, 'class')) && s(P, 'class', m),
                                    (m = S(i, 'style')) &&
                                      ((m = m.replace(/(;| |^)color([ :])/, '$1fill$2')), s(P, 'style', m)),
                                    (b = S(i, 'href')) &&
                                      !a &&
                                      (s(P, 'onclick', 'location.href="' + b + '"'),
                                      s(P, 'class', 'highcharts-anchor'),
                                      r.styledMode || l(P, { cursor: 'pointer' })),
                                    ' ' !== (i = w(i.replace(/<[a-zA-Z\/](.|\n)*?>/g, '') || ' ')))
                                  ) {
                                    if (
                                      (P.appendChild(u.createTextNode(i)),
                                      d ? (M.dx = 0) : h && null !== p && (M.x = p),
                                      s(P, M),
                                      o.appendChild(P),
                                      !d && n && (!O && a && l(P, { display: 'block' }), s(P, 'dy', k(P))),
                                      f)
                                    ) {
                                      var T = i.replace(/([^\^])-/g, '$1- ').split(' ');
                                      (M = !y && (1 < c.length || h || 1 < T.length)), (b = 0);
                                      var L = k(P);
                                      if (x)
                                        e = r.truncate(
                                          t,
                                          P,
                                          i,
                                          void 0,
                                          0,
                                          Math.max(0, f - parseInt(v || 12, 10)),
                                          function(t, e) {
                                            return t.substring(0, e) + '\u2026';
                                          }
                                        );
                                      else if (M)
                                        for (; T.length; )
                                          T.length &&
                                            !y &&
                                            0 < b &&
                                            ((P = u.createElementNS(I, 'tspan')),
                                            s(P, { dy: L, x: p }),
                                            m && s(P, 'style', m),
                                            P.appendChild(u.createTextNode(T.join(' ').replace(/- /g, '-'))),
                                            o.appendChild(P)),
                                            r.truncate(t, P, null, T, 0 === b ? g : 0, f, function(t, e) {
                                              return T.slice(0, e)
                                                .join(' ')
                                                .replace(/- /g, '-');
                                            }),
                                            (g = t.actualWidth),
                                            b++;
                                    }
                                    d++;
                                  }
                                }
                              }),
                              (n = n || o.childNodes.length);
                          }),
                          x && e && t.attr('title', w(t.textStr, ['&lt;', '&gt;'])),
                          M && M.removeChild(o),
                          m && t.applyTextOutline && t.applyTextOutline(m))
                        : o.appendChild(u.createTextNode(w(h)));
                    }
                  },
                  getContrast: function(t) {
                    return (
                      ((t = a(t).rgba)[0] *= 1),
                      (t[1] *= 1.2),
                      (t[2] *= 0.5),
                      459 < t[0] + t[1] + t[2] ? '#000000' : '#FFFFFF'
                    );
                  },
                  button: function(t, e, i, o, s, r, a, l, h, c) {
                    var d,
                      p,
                      u,
                      g,
                      m = this.label(t, e, i, h, null, null, c, null, 'button'),
                      x = 0,
                      y = this.styledMode;
                    return (
                      m.attr(w({ padding: 8, r: 2 }, s)),
                      y ||
                        ((s = w(
                          {
                            fill: '#f7f7f7',
                            stroke: '#cccccc',
                            'stroke-width': 1,
                            style: { color: '#333333', cursor: 'pointer', fontWeight: 'normal' }
                          },
                          s
                        )),
                        (d = s.style),
                        delete s.style,
                        (r = w(s, { fill: '#e6e6e6' }, r)),
                        (p = r.style),
                        delete r.style,
                        (a = w(s, { fill: '#e6ebf5', style: { color: '#000000', fontWeight: 'bold' } }, a)),
                        (u = a.style),
                        delete a.style,
                        (l = w(s, { style: { color: '#cccccc' } }, l)),
                        (g = l.style),
                        delete l.style),
                      n(m.element, v ? 'mouseover' : 'mouseenter', function() {
                        3 !== x && m.setState(1);
                      }),
                      n(m.element, v ? 'mouseout' : 'mouseleave', function() {
                        3 !== x && m.setState(x);
                      }),
                      (m.setState = function(t) {
                        1 !== t && (m.state = x = t),
                          m
                            .removeClass(/highcharts-button-(normal|hover|pressed|disabled)/)
                            .addClass('highcharts-button-' + ['normal', 'hover', 'pressed', 'disabled'][t || 0]),
                          y || m.attr([s, r, a, l][t || 0]).css([d, p, u, g][t || 0]);
                      }),
                      y || m.attr(s).css(f({ cursor: 'default' }, d)),
                      m.on('click', function(t) {
                        3 !== x && o.call(m, t);
                      })
                    );
                  },
                  crispLine: function(t, e) {
                    return (
                      t[1] === t[4] && (t[1] = t[4] = Math.round(t[1]) - (e % 2) / 2),
                      t[2] === t[5] && (t[2] = t[5] = Math.round(t[2]) + (e % 2) / 2),
                      t
                    );
                  },
                  path: function(t) {
                    var e = this.styledMode ? {} : { fill: 'none' };
                    return x(t) ? (e.d = t) : b(t) && f(e, t), this.createElement('path').attr(e);
                  },
                  circle: function(t, e, i) {
                    return (
                      (t = b(t) ? t : void 0 === t ? {} : { x: t, y: e, r: i }),
                      ((e = this.createElement('circle')).xSetter = e.ySetter = function(t, e, i) {
                        i.setAttribute('c' + e, t);
                      }),
                      e.attr(t)
                    );
                  },
                  arc: function(t, e, i, n, o, s) {
                    return (
                      b(t) ? ((e = (n = t).y), (i = n.r), (t = n.x)) : (n = { innerR: n, start: o, end: s }),
                      ((t = this.symbol('arc', t, e, i, i, n)).r = i),
                      t
                    );
                  },
                  rect: function(t, e, i, n, o, r) {
                    o = b(t) ? t.r : o;
                    var a = this.createElement('rect');
                    return (
                      (t = b(t)
                        ? t
                        : void 0 === t
                        ? {}
                        : { x: t, y: e, width: Math.max(i, 0), height: Math.max(n, 0) }),
                      this.styledMode || (void 0 !== r && ((t.strokeWidth = r), (t = a.crisp(t))), (t.fill = 'none')),
                      o && (t.r = o),
                      (a.rSetter = function(t, e, i) {
                        (a.r = t), s(i, { rx: t, ry: t });
                      }),
                      (a.rGetter = function() {
                        return a.r;
                      }),
                      a.attr(t)
                    );
                  },
                  setSize: function(t, e, i) {
                    var n = this.alignedObjects,
                      o = n.length;
                    for (
                      this.width = t,
                        this.height = e,
                        this.boxWrapper.animate(
                          { width: t, height: e },
                          {
                            step: function() {
                              this.attr({ viewBox: '0 0 ' + this.attr('width') + ' ' + this.attr('height') });
                            },
                            duration: T(i, !0) ? void 0 : 0
                          }
                        );
                      o--;

                    )
                      n[o].align();
                  },
                  g: function(t) {
                    var e = this.createElement('g');
                    return t ? e.attr({ class: 'highcharts-' + t }) : e;
                  },
                  image: function(t, e, i, o, s, r) {
                    var a,
                      l = { preserveAspectRatio: 'none' },
                      h = function(t, e) {
                        t.setAttributeNS
                          ? t.setAttributeNS('http://www.w3.org/1999/xlink', 'href', e)
                          : t.setAttribute('hc-svg-href', e);
                      },
                      c = function(e) {
                        h(a.element, t), r.call(a, e);
                      };
                    return (
                      1 < arguments.length && f(l, { x: e, y: i, width: o, height: s }),
                      (a = this.createElement('image').attr(l)),
                      r
                        ? (h(a.element, 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                          (l = new D.Image()),
                          n(l, 'load', c),
                          (l.src = t),
                          l.complete && c({}))
                        : h(a.element, t),
                      a
                    );
                  },
                  symbol: function(t, e, i, n, o, s) {
                    var a,
                      d,
                      p,
                      g = this,
                      m = /^url\((.*?)\)$/,
                      x = m.test(t),
                      y = !x && (this.symbols[t] ? t : 'circle'),
                      v = y && this.symbols[y],
                      b = c(e) && v && v.call(this.symbols, Math.round(e), Math.round(i), n, o, s);
                    return (
                      v
                        ? ((a = this.path(b)),
                          g.styledMode || a.attr('fill', 'none'),
                          f(a, { symbolName: y, x: e, y: i, width: n, height: o }),
                          s && f(a, s))
                        : x &&
                          ((d = t.match(m)[1]),
                          ((a = this.image(d)).imgwidth = T(N[d] && N[d].width, s && s.width)),
                          (a.imgheight = T(N[d] && N[d].height, s && s.height)),
                          (p = function() {
                            a.attr({ width: a.width, height: a.height });
                          }),
                          ['width', 'height'].forEach(function(t) {
                            a[t + 'Setter'] = function(t, e) {
                              var i = {},
                                n = this['img' + e],
                                o = 'width' === e ? 'translateX' : 'translateY';
                              (this[e] = t),
                                c(n) &&
                                  (s &&
                                    'within' === s.backgroundSize &&
                                    this.width &&
                                    this.height &&
                                    (n = Math.round(
                                      n * Math.min(this.width / this.imgwidth, this.height / this.imgheight)
                                    )),
                                  this.element && this.element.setAttribute(e, n),
                                  this.alignByTranslate || ((i[o] = ((this[e] || 0) - n) / 2), this.attr(i)));
                            };
                          }),
                          c(e) && a.attr({ x: e, y: i }),
                          (a.isImg = !0),
                          c(a.imgwidth) && c(a.imgheight)
                            ? p()
                            : (a.attr({ width: 0, height: 0 }),
                              h('img', {
                                onload: function() {
                                  var t = r[g.chartIndex];
                                  0 === this.width &&
                                    (l(this, { position: 'absolute', top: '-999em' }), u.body.appendChild(this)),
                                    (N[d] = { width: this.width, height: this.height }),
                                    (a.imgwidth = this.width),
                                    (a.imgheight = this.height),
                                    a.element && p(),
                                    this.parentNode && this.parentNode.removeChild(this),
                                    g.imgCount--,
                                    !g.imgCount && t && t.onload && t.onload();
                                },
                                src: d
                              }),
                              this.imgCount++)),
                      a
                    );
                  },
                  symbols: {
                    circle: function(t, e, i, n) {
                      return this.arc(t + i / 2, e + n / 2, i / 2, n / 2, {
                        start: 0.5 * Math.PI,
                        end: 2.5 * Math.PI,
                        open: !1
                      });
                    },
                    square: function(t, e, i, n) {
                      return ['M', t, e, 'L', t + i, e, t + i, e + n, t, e + n, 'Z'];
                    },
                    triangle: function(t, e, i, n) {
                      return ['M', t + i / 2, e, 'L', t + i, e + n, t, e + n, 'Z'];
                    },
                    'triangle-down': function(t, e, i, n) {
                      return ['M', t, e, 'L', t + i, e, t + i / 2, e + n, 'Z'];
                    },
                    diamond: function(t, e, i, n) {
                      return ['M', t + i / 2, e, 'L', t + i, e + n / 2, t + i / 2, e + n, t, e + n / 2, 'Z'];
                    },
                    arc: function(t, e, i, n, o) {
                      var s = o.start,
                        r = o.r || i,
                        a = o.r || n || i,
                        l = o.end - 0.001;
                      (i = o.innerR), (n = T(o.open, 0.001 > Math.abs(o.end - o.start - 2 * Math.PI)));
                      var h = Math.cos(s),
                        d = Math.sin(s),
                        p = Math.cos(l);
                      return (
                        (l = Math.sin(l)),
                        (o = [
                          'M',
                          t + r * h,
                          e + a * d,
                          'A',
                          r,
                          a,
                          0,
                          (s = 0.001 > o.end - s - Math.PI ? 0 : 1),
                          T(o.clockwise, 1),
                          t + r * p,
                          e + a * l
                        ]),
                        c(i) && o.push(n ? 'M' : 'L', t + i * p, e + i * l, 'A', i, i, 0, s, 0, t + i * h, e + i * d),
                        o.push(n ? '' : 'Z'),
                        o
                      );
                    },
                    callout: function(t, e, i, n, o) {
                      var s,
                        r = Math.min((o && o.r) || 0, i, n),
                        a = r + 6,
                        l = o && o.anchorX;
                      return (
                        (o = o && o.anchorY),
                        (s = [
                          'M',
                          t + r,
                          e,
                          'L',
                          t + i - r,
                          e,
                          'C',
                          t + i,
                          e,
                          t + i,
                          e,
                          t + i,
                          e + r,
                          'L',
                          t + i,
                          e + n - r,
                          'C',
                          t + i,
                          e + n,
                          t + i,
                          e + n,
                          t + i - r,
                          e + n,
                          'L',
                          t + r,
                          e + n,
                          'C',
                          t,
                          e + n,
                          t,
                          e + n,
                          t,
                          e + n - r,
                          'L',
                          t,
                          e + r,
                          'C',
                          t,
                          e,
                          t,
                          e,
                          t + r,
                          e
                        ]),
                        l && l > i
                          ? o > e + a && o < e + n - a
                            ? s.splice(13, 3, 'L', t + i, o - 6, t + i + 6, o, t + i, o + 6, t + i, e + n - r)
                            : s.splice(13, 3, 'L', t + i, n / 2, l, o, t + i, n / 2, t + i, e + n - r)
                          : l && 0 > l
                          ? o > e + a && o < e + n - a
                            ? s.splice(33, 3, 'L', t, o + 6, t - 6, o, t, o - 6, t, e + r)
                            : s.splice(33, 3, 'L', t, n / 2, l, o, t, n / 2, t, e + r)
                          : o && o > n && l > t + a && l < t + i - a
                          ? s.splice(23, 3, 'L', l + 6, e + n, l, e + n + 6, l - 6, e + n, t + r, e + n)
                          : o &&
                            0 > o &&
                            l > t + a &&
                            l < t + i - a &&
                            s.splice(3, 3, 'L', l - 6, e, l, e - 6, l + 6, e, i - r, e),
                        s
                      );
                    }
                  },
                  clipRect: function(e, i, n, o) {
                    var s = t.uniqueKey() + '-',
                      r = this.createElement('clipPath')
                        .attr({ id: s })
                        .add(this.defs);
                    return ((e = this.rect(e, i, n, o, 0).add(r)).id = s), (e.clipPath = r), (e.count = 0), e;
                  },
                  text: function(t, e, i, n) {
                    var o = {};
                    return !n || (!this.allowHTML && this.forExport)
                      ? ((o.x = Math.round(e || 0)),
                        i && (o.y = Math.round(i)),
                        c(t) && (o.text = t),
                        (t = this.createElement('text').attr(o)),
                        n ||
                          (t.xSetter = function(t, e, i) {
                            var n,
                              o,
                              s = i.getElementsByTagName('tspan'),
                              r = i.getAttribute(e);
                            for (o = 0; o < s.length; o++) (n = s[o]).getAttribute(e) === r && n.setAttribute(e, t);
                            i.setAttribute(e, t);
                          }),
                        t)
                      : this.html(t, e, i);
                  },
                  fontMetrics: function(t, i) {
                    return (
                      (t =
                        (!this.styledMode && /px/.test(t)) || !D.getComputedStyle
                          ? t || (i && i.style && i.style.fontSize) || (this.style && this.style.fontSize)
                          : i && e.prototype.getStyle.call(i, 'font-size')),
                      {
                        h: (i = 24 > (t = /px/.test(t) ? L(t) : 12) ? t + 3 : Math.round(1.2 * t)),
                        b: Math.round(0.8 * i),
                        f: t
                      }
                    );
                  },
                  rotCorr: function(t, e, i) {
                    var n = t;
                    return e && i && (n = Math.max(n * Math.cos(e * d), 4)), { x: (-t / 3) * Math.sin(e * d), y: n };
                  },
                  label: function(i, n, o, s, r, a, l, h, d) {
                    var p,
                      u,
                      g,
                      m,
                      x,
                      y,
                      v,
                      b,
                      M,
                      k,
                      S,
                      P,
                      T = this,
                      L = T.styledMode,
                      C = T.g('button' !== d && 'label'),
                      E = (C.text = T.text('', 0, 0, l).attr({ zIndex: 1 })),
                      O = 0,
                      I = 3,
                      N = 0,
                      D = {},
                      z = /^url\((.*?)\)$/.test(s),
                      R = L || z,
                      X = function() {
                        return L ? (p.strokeWidth() % 2) / 2 : ((b ? parseInt(b, 10) : 0) % 2) / 2;
                      };
                    d && C.addClass('highcharts-' + d),
                      (k = function() {
                        var t = E.element.style,
                          e = {};
                        (u = (void 0 === g || void 0 === m || v) && c(E.textStr) && E.getBBox()),
                          (C.width = (g || u.width || 0) + 2 * I + N),
                          (C.height = (m || u.height || 0) + 2 * I),
                          (M = I + Math.min(T.fontMetrics(t && t.fontSize, E).b, u ? u.height : 1 / 0)),
                          R &&
                            (p ||
                              ((C.box = p = T.symbols[s] || z ? T.symbol(s) : T.rect()),
                              p.addClass(
                                ('button' === d ? '' : 'highcharts-label-box') + (d ? ' highcharts-' + d + '-box' : '')
                              ),
                              p.add(C),
                              (t = X()),
                              (e.x = t),
                              (e.y = (h ? -M : 0) + t)),
                            (e.width = Math.round(C.width)),
                            (e.height = Math.round(C.height)),
                            p.attr(f(e, D)),
                            (D = {}));
                      }),
                      (S = function() {
                        var t,
                          e = N + I;
                        (t = h ? 0 : M),
                          c(g) &&
                            u &&
                            ('center' === v || 'right' === v) &&
                            (e += { center: 0.5, right: 1 }[v] * (g - u.width)),
                          (e === E.x && t === E.y) ||
                            (E.attr('x', e),
                            E.hasBoxWidthChanged && ((u = E.getBBox(!0)), k()),
                            void 0 !== t && E.attr('y', t)),
                          (E.x = e),
                          (E.y = t);
                      }),
                      (P = function(t, e) {
                        p ? p.attr(t, e) : (D[t] = e);
                      }),
                      (C.onAdd = function() {
                        E.add(C),
                          C.attr({ text: i || 0 === i ? i : '', x: n, y: o }),
                          p && c(r) && C.attr({ anchorX: r, anchorY: a });
                      }),
                      (C.widthSetter = function(e) {
                        g = t.isNumber(e) ? e : null;
                      }),
                      (C.heightSetter = function(t) {
                        m = t;
                      }),
                      (C['text-alignSetter'] = function(t) {
                        v = t;
                      }),
                      (C.paddingSetter = function(t) {
                        c(t) && t !== I && ((I = C.padding = t), S());
                      }),
                      (C.paddingLeftSetter = function(t) {
                        c(t) && t !== N && ((N = t), S());
                      }),
                      (C.alignSetter = function(t) {
                        (t = { left: 0, center: 0.5, right: 1 }[t]) !== O && ((O = t), u && C.attr({ x: x }));
                      }),
                      (C.textSetter = function(t) {
                        void 0 !== t && E.attr({ text: t }), k(), S();
                      }),
                      (C['stroke-widthSetter'] = function(t, e) {
                        t && (R = !0), (b = this['stroke-width'] = t), P(e, t);
                      }),
                      L
                        ? (C.rSetter = function(t, e) {
                            P(e, t);
                          })
                        : (C.strokeSetter = C.fillSetter = C.rSetter = function(t, e) {
                            'r' !== e && ('fill' === e && t && (R = !0), (C[e] = t)), P(e, t);
                          }),
                      (C.anchorXSetter = function(t, e) {
                        (r = C.anchorX = t), P(e, Math.round(t) - X() - x);
                      }),
                      (C.anchorYSetter = function(t, e) {
                        (a = C.anchorY = t), P(e, t - y);
                      }),
                      (C.xSetter = function(t) {
                        (C.x = t),
                          O && ((t -= O * ((g || u.width) + 2 * I)), (C['forceAnimate:x'] = !0)),
                          (x = Math.round(t)),
                          C.attr('translateX', x);
                      }),
                      (C.ySetter = function(t) {
                        (y = C.y = Math.round(t)), C.attr('translateY', y);
                      });
                    var B = C.css;
                    return (
                      (l = {
                        css: function(t) {
                          if (t) {
                            var e = {};
                            (t = w(t)),
                              C.textProps.forEach(function(i) {
                                void 0 !== t[i] && ((e[i] = t[i]), delete t[i]);
                              }),
                              E.css(e),
                              'width' in e && k(),
                              'fontSize' in e && (k(), S());
                          }
                          return B.call(C, t);
                        },
                        getBBox: function() {
                          return { width: u.width + 2 * I, height: u.height + 2 * I, x: u.x - I, y: u.y - I };
                        },
                        destroy: function() {
                          A(C.element, 'mouseenter'),
                            A(C.element, 'mouseleave'),
                            E && (E = E.destroy()),
                            p && (p = p.destroy()),
                            e.prototype.destroy.call(C),
                            (C = T = k = S = P = null);
                        }
                      }),
                      L ||
                        (l.shadow = function(t) {
                          return t && (k(), p && p.shadow(t)), C;
                        }),
                      f(C, l)
                    );
                  }
                }),
                (t.Renderer = i);
            }),
            e(i, 'parts/Html.js', [i['parts/Globals.js']], function(t) {
              var e = t.attr,
                i = t.createElement,
                n = t.css,
                o = t.defined,
                s = t.extend,
                r = t.isFirefox,
                a = t.isMS,
                l = t.isWebKit,
                h = t.pick,
                c = t.pInt,
                d = t.SVGElement,
                p = t.SVGRenderer,
                u = t.win;
              s(d.prototype, {
                htmlCss: function(t) {
                  var e,
                    i = 'SPAN' === this.element.tagName && t && 'width' in t,
                    o = h(i && t.width, void 0);
                  return (
                    i && (delete t.width, (this.textWidth = o), (e = !0)),
                    t && 'ellipsis' === t.textOverflow && ((t.whiteSpace = 'nowrap'), (t.overflow = 'hidden')),
                    (this.styles = s(this.styles, t)),
                    n(this.element, t),
                    e && this.htmlUpdateTransform(),
                    this
                  );
                },
                htmlGetBBox: function() {
                  var t = this.element;
                  return { x: t.offsetLeft, y: t.offsetTop, width: t.offsetWidth, height: t.offsetHeight };
                },
                htmlUpdateTransform: function() {
                  if (this.added) {
                    var t = this.renderer,
                      e = this.element,
                      i = this.translateX || 0,
                      s = this.translateY || 0,
                      r = this.x || 0,
                      a = this.y || 0,
                      l = this.textAlign || 'left',
                      h = { left: 0, center: 0.5, right: 1 }[l],
                      d = (u = this.styles) && u.whiteSpace;
                    if (
                      (n(e, { marginLeft: i, marginTop: s }),
                      !t.styledMode &&
                        this.shadows &&
                        this.shadows.forEach(function(t) {
                          n(t, { marginLeft: i + 1, marginTop: s + 1 });
                        }),
                      this.inverted &&
                        [].forEach.call(e.childNodes, function(i) {
                          t.invertChild(i, e);
                        }),
                      'SPAN' === e.tagName)
                    ) {
                      var p,
                        u = this.rotation,
                        f = this.textWidth && c(this.textWidth),
                        g = [u, l, e.innerHTML, this.textWidth, this.textAlign].join();
                      (p = f !== this.oldTextWidth) &&
                        !(p = f > this.oldTextWidth) &&
                        ((p = this.textPxLength) ||
                          (n(e, { width: '', whiteSpace: d || 'nowrap' }), (p = e.offsetWidth)),
                        (p = p > f)),
                        p && (/[ \-]/.test(e.textContent || e.innerText) || 'ellipsis' === e.style.textOverflow)
                          ? (n(e, { width: f + 'px', display: 'block', whiteSpace: d || 'normal' }),
                            (this.oldTextWidth = f),
                            (this.hasBoxWidthChanged = !0))
                          : (this.hasBoxWidthChanged = !1),
                        g !== this.cTT &&
                          ((d = t.fontMetrics(e.style.fontSize, e).b),
                          !o(u) ||
                            (u === (this.oldRotation || 0) && l === this.oldAlign) ||
                            this.setSpanRotation(u, h, d),
                          this.getSpanCorrection((!o(u) && this.textPxLength) || e.offsetWidth, d, h, u, l)),
                        n(e, { left: r + (this.xCorr || 0) + 'px', top: a + (this.yCorr || 0) + 'px' }),
                        (this.cTT = g),
                        (this.oldRotation = u),
                        (this.oldAlign = l);
                    }
                  } else this.alignOnAdd = !0;
                },
                setSpanRotation: function(t, e, i) {
                  var o = {},
                    s = this.renderer.getTransformKey();
                  (o[s] = o.transform = 'rotate(' + t + 'deg)'),
                    (o[s + (r ? 'Origin' : '-origin')] = o.transformOrigin = 100 * e + '% ' + i + 'px'),
                    n(this.element, o);
                },
                getSpanCorrection: function(t, e, i) {
                  (this.xCorr = -t * i), (this.yCorr = -e);
                }
              }),
                s(p.prototype, {
                  getTransformKey: function() {
                    return a && !/Edge/.test(u.navigator.userAgent)
                      ? '-ms-transform'
                      : l
                      ? '-webkit-transform'
                      : r
                      ? 'MozTransform'
                      : u.opera
                      ? '-o-transform'
                      : '';
                  },
                  html: function(n, o, r) {
                    var a = this.createElement('span'),
                      l = a.element,
                      c = a.renderer,
                      p = c.isSVG,
                      u = function(t, e) {
                        ['opacity', 'visibility'].forEach(function(i) {
                          t[i + 'Setter'] = function(n, o, s) {
                            var r = t.div ? t.div.style : e;
                            d.prototype[i + 'Setter'].call(this, n, o, s), r && (r[o] = n);
                          };
                        }),
                          (t.addedSetters = !0);
                      },
                      f = (f = t.charts[c.chartIndex]) && f.styledMode;
                    return (
                      (a.textSetter = function(t) {
                        t !== l.innerHTML && (delete this.bBox, delete this.oldTextWidth),
                          (this.textStr = t),
                          (l.innerHTML = h(t, '')),
                          (a.doTransform = !0);
                      }),
                      p && u(a, a.element.style),
                      (a.xSetter = a.ySetter = a.alignSetter = a.rotationSetter = function(t, e) {
                        'align' === e && (e = 'textAlign'), (a[e] = t), (a.doTransform = !0);
                      }),
                      (a.afterSetters = function() {
                        this.doTransform && (this.htmlUpdateTransform(), (this.doTransform = !1));
                      }),
                      a.attr({ text: n, x: Math.round(o), y: Math.round(r) }).css({ position: 'absolute' }),
                      f || a.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize }),
                      (l.style.whiteSpace = 'nowrap'),
                      (a.css = a.htmlCss),
                      p &&
                        (a.add = function(t) {
                          var n,
                            o = c.box.parentNode,
                            r = [];
                          if ((this.parentGroup = t)) {
                            if (!(n = t.div)) {
                              for (; t; ) r.push(t), (t = t.parentGroup);
                              r.reverse().forEach(function(t) {
                                function l(e, i) {
                                  (t[i] = e),
                                    'translateX' === i ? (h.left = e + 'px') : (h.top = e + 'px'),
                                    (t.doTransform = !0);
                                }
                                var h,
                                  c = e(t.element, 'class');
                                c && (c = { className: c }),
                                  (n = t.div =
                                    t.div ||
                                    i(
                                      'div',
                                      c,
                                      {
                                        position: 'absolute',
                                        left: (t.translateX || 0) + 'px',
                                        top: (t.translateY || 0) + 'px',
                                        display: t.display,
                                        opacity: t.opacity,
                                        pointerEvents: t.styles && t.styles.pointerEvents
                                      },
                                      n || o
                                    )),
                                  (h = n.style),
                                  s(t, {
                                    classSetter: (function(t) {
                                      return function(e) {
                                        this.element.setAttribute('class', e), (t.className = e);
                                      };
                                    })(n),
                                    on: function() {
                                      return r[0].div && a.on.apply({ element: r[0].div }, arguments), t;
                                    },
                                    translateXSetter: l,
                                    translateYSetter: l
                                  }),
                                  t.addedSetters || u(t);
                              });
                            }
                          } else n = o;
                          return n.appendChild(l), (a.added = !0), a.alignOnAdd && a.htmlUpdateTransform(), a;
                        }),
                      a
                    );
                  }
                });
            }),
            e(i, 'parts/Time.js', [i['parts/Globals.js']], function(t) {
              var e = t.defined,
                i = t.extend,
                n = t.merge,
                o = t.pick,
                s = t.timeUnits,
                r = t.win;
              (t.Time = function(t) {
                this.update(t, !1);
              }),
                (t.Time.prototype = {
                  defaultOptions: {},
                  update: function(t) {
                    var e = o(t && t.useUTC, !0),
                      i = this;
                    (this.options = t = n(!0, this.options || {}, t)),
                      (this.Date = t.Date || r.Date || Date),
                      (this.timezoneOffset = (this.useUTC = e) && t.timezoneOffset),
                      (this.getTimezoneOffset = this.timezoneOffsetFunction()),
                      (this.variableTimezone = !(e && !t.getTimezoneOffset && !t.timezone)) || this.timezoneOffset
                        ? ((this.get = function(t, e) {
                            var n = e.getTime(),
                              o = n - i.getTimezoneOffset(e);
                            return e.setTime(o), (t = e['getUTC' + t]()), e.setTime(n), t;
                          }),
                          (this.set = function(t, e, n) {
                            var o;
                            'Milliseconds' === t ||
                            'Seconds' === t ||
                            ('Minutes' === t && 0 == e.getTimezoneOffset() % 60)
                              ? e['set' + t](n)
                              : ((o = i.getTimezoneOffset(e)),
                                (o = e.getTime() - o),
                                e.setTime(o),
                                e['setUTC' + t](n),
                                (t = i.getTimezoneOffset(e)),
                                (o = e.getTime() + t),
                                e.setTime(o));
                          }))
                        : e
                        ? ((this.get = function(t, e) {
                            return e['getUTC' + t]();
                          }),
                          (this.set = function(t, e, i) {
                            return e['setUTC' + t](i);
                          }))
                        : ((this.get = function(t, e) {
                            return e['get' + t]();
                          }),
                          (this.set = function(t, e, i) {
                            return e['set' + t](i);
                          }));
                  },
                  makeTime: function(e, i, n, s, r, a) {
                    var l, h, c;
                    return (
                      this.useUTC
                        ? ((l = this.Date.UTC.apply(0, arguments)),
                          (h = this.getTimezoneOffset(l)) !== (c = this.getTimezoneOffset((l += h)))
                            ? (l += c - h)
                            : h - 36e5 !== this.getTimezoneOffset(l - 36e5) || t.isSafari || (l -= 36e5))
                        : (l = new this.Date(e, i, o(n, 1), o(s, 0), o(r, 0), o(a, 0)).getTime()),
                      l
                    );
                  },
                  timezoneOffsetFunction: function() {
                    var e = this,
                      i = this.options,
                      n = r.moment;
                    if (!this.useUTC)
                      return function(t) {
                        return 6e4 * new Date(t).getTimezoneOffset();
                      };
                    if (i.timezone) {
                      if (n)
                        return function(t) {
                          return 6e4 * -n.tz(t, i.timezone).utcOffset();
                        };
                      t.error(25);
                    }
                    return this.useUTC && i.getTimezoneOffset
                      ? function(t) {
                          return 6e4 * i.getTimezoneOffset(t);
                        }
                      : function() {
                          return 6e4 * (e.timezoneOffset || 0);
                        };
                  },
                  dateFormat: function(e, i, n) {
                    if (!t.defined(i) || isNaN(i)) return t.defaultOptions.lang.invalidDate || '';
                    e = t.pick(e, '%Y-%m-%d %H:%M:%S');
                    var o = this,
                      s = new this.Date(i),
                      r = this.get('Hours', s),
                      a = this.get('Day', s),
                      l = this.get('Date', s),
                      h = this.get('Month', s),
                      c = this.get('FullYear', s),
                      d = t.defaultOptions.lang,
                      p = d.weekdays,
                      u = d.shortWeekdays,
                      f = t.pad;
                    return (
                      (s = t.extend(
                        {
                          a: u ? u[a] : p[a].substr(0, 3),
                          A: p[a],
                          d: f(l),
                          e: f(l, 2, ' '),
                          w: a,
                          b: d.shortMonths[h],
                          B: d.months[h],
                          m: f(h + 1),
                          o: h + 1,
                          y: c.toString().substr(2, 2),
                          Y: c,
                          H: f(r),
                          k: r,
                          I: f(r % 12 || 12),
                          l: r % 12 || 12,
                          M: f(o.get('Minutes', s)),
                          p: 12 > r ? 'AM' : 'PM',
                          P: 12 > r ? 'am' : 'pm',
                          S: f(s.getSeconds()),
                          L: f(Math.floor(i % 1e3), 3)
                        },
                        t.dateFormats
                      )),
                      t.objectEach(s, function(t, n) {
                        for (; -1 !== e.indexOf('%' + n); )
                          e = e.replace('%' + n, 'function' == typeof t ? t.call(o, i) : t);
                      }),
                      n ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
                    );
                  },
                  resolveDTLFormat: function(e) {
                    return t.isObject(e, !0) ? e : { main: (e = t.splat(e))[0], from: e[1], to: e[2] };
                  },
                  getTimeTicks: function(t, n, r, a) {
                    var l,
                      h,
                      c = this,
                      d = [],
                      p = {};
                    l = new c.Date(n);
                    var u,
                      f = t.unitRange,
                      g = t.count || 1;
                    if (((a = o(a, 1)), e(n))) {
                      c.set('Milliseconds', l, f >= s.second ? 0 : g * Math.floor(c.get('Milliseconds', l) / g)),
                        f >= s.second &&
                          c.set('Seconds', l, f >= s.minute ? 0 : g * Math.floor(c.get('Seconds', l) / g)),
                        f >= s.minute && c.set('Minutes', l, f >= s.hour ? 0 : g * Math.floor(c.get('Minutes', l) / g)),
                        f >= s.hour && c.set('Hours', l, f >= s.day ? 0 : g * Math.floor(c.get('Hours', l) / g)),
                        f >= s.day &&
                          c.set('Date', l, f >= s.month ? 1 : Math.max(1, g * Math.floor(c.get('Date', l) / g))),
                        f >= s.month &&
                          (c.set('Month', l, f >= s.year ? 0 : g * Math.floor(c.get('Month', l) / g)),
                          (h = c.get('FullYear', l))),
                        f >= s.year && c.set('FullYear', l, h - (h % g)),
                        f === s.week &&
                          ((h = c.get('Day', l)), c.set('Date', l, c.get('Date', l) - h + a + (h < a ? -7 : 0))),
                        (h = c.get('FullYear', l)),
                        (a = c.get('Month', l));
                      var m = c.get('Date', l),
                        x = c.get('Hours', l);
                      for (
                        n = l.getTime(),
                          c.variableTimezone &&
                            (u = r - n > 4 * s.month || c.getTimezoneOffset(n) !== c.getTimezoneOffset(r)),
                          n = l.getTime(),
                          l = 1;
                        n < r;

                      )
                        d.push(n),
                          (n =
                            f === s.year
                              ? c.makeTime(h + l * g, 0)
                              : f === s.month
                              ? c.makeTime(h, a + l * g)
                              : !u || (f !== s.day && f !== s.week)
                              ? u && f === s.hour && 1 < g
                                ? c.makeTime(h, a, m, x + l * g)
                                : n + f * g
                              : c.makeTime(h, a, m + l * g * (f === s.day ? 1 : 7))),
                          l++;
                      d.push(n),
                        f <= s.hour &&
                          1e4 > d.length &&
                          d.forEach(function(t) {
                            0 == t % 18e5 && '000000000' === c.dateFormat('%H%M%S%L', t) && (p[t] = 'day');
                          });
                    }
                    return (d.info = i(t, { higherRanks: p, totalRange: f * g })), d;
                  }
                });
            }),
            e(i, 'parts/Options.js', [i['parts/Globals.js']], function(t) {
              var e = t.color,
                i = t.merge;
              (t.defaultOptions = {
                colors: '#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1'.split(' '),
                symbols: ['circle', 'diamond', 'square', 'triangle', 'triangle-down'],
                lang: {
                  loading: 'Loading...',
                  months: 'January February March April May June July August September October November December'.split(
                    ' '
                  ),
                  shortMonths: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
                  weekdays: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
                  decimalPoint: '.',
                  numericSymbols: 'kMGTPE'.split(''),
                  resetZoom: 'Reset zoom',
                  resetZoomTitle: 'Reset zoom level 1:1',
                  thousandsSep: ' '
                },
                global: {},
                time: t.Time.prototype.defaultOptions,
                chart: {
                  styledMode: !1,
                  borderRadius: 0,
                  colorCount: 10,
                  defaultSeriesType: 'line',
                  ignoreHiddenSeries: !0,
                  spacing: [10, 10, 15, 10],
                  resetZoomButton: { theme: { zIndex: 6 }, position: { align: 'right', x: -10, y: 10 } },
                  width: null,
                  height: null,
                  borderColor: '#335cad',
                  backgroundColor: '#ffffff',
                  plotBorderColor: '#cccccc'
                },
                title: { text: 'Chart title', align: 'center', margin: 15, widthAdjust: -44 },
                subtitle: { text: '', align: 'center', widthAdjust: -44 },
                plotOptions: {},
                labels: { style: { position: 'absolute', color: '#333333' } },
                legend: {
                  enabled: !0,
                  align: 'center',
                  alignColumns: !0,
                  layout: 'horizontal',
                  labelFormatter: function() {
                    return this.name;
                  },
                  borderColor: '#999999',
                  borderRadius: 0,
                  navigation: { activeColor: '#003399', inactiveColor: '#cccccc' },
                  itemStyle: {
                    color: '#333333',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textOverflow: 'ellipsis'
                  },
                  itemHoverStyle: { color: '#000000' },
                  itemHiddenStyle: { color: '#cccccc' },
                  shadow: !1,
                  itemCheckboxStyle: { position: 'absolute', width: '13px', height: '13px' },
                  squareSymbol: !0,
                  symbolPadding: 5,
                  verticalAlign: 'bottom',
                  x: 0,
                  y: 0,
                  title: { style: { fontWeight: 'bold' } }
                },
                loading: {
                  labelStyle: { fontWeight: 'bold', position: 'relative', top: '45%' },
                  style: { position: 'absolute', backgroundColor: '#ffffff', opacity: 0.5, textAlign: 'center' }
                },
                tooltip: {
                  enabled: !0,
                  animation: t.svg,
                  borderRadius: 3,
                  dateTimeLabelFormats: {
                    millisecond: '%A, %b %e, %H:%M:%S.%L',
                    second: '%A, %b %e, %H:%M:%S',
                    minute: '%A, %b %e, %H:%M',
                    hour: '%A, %b %e, %H:%M',
                    day: '%A, %b %e, %Y',
                    week: 'Week from %A, %b %e, %Y',
                    month: '%B %Y',
                    year: '%Y'
                  },
                  footerFormat: '',
                  padding: 8,
                  snap: t.isTouchDevice ? 25 : 10,
                  headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                  pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
                  backgroundColor: e('#f7f7f7')
                    .setOpacity(0.85)
                    .get(),
                  borderWidth: 1,
                  shadow: !0,
                  style: {
                    color: '#333333',
                    cursor: 'default',
                    fontSize: '12px',
                    pointerEvents: 'none',
                    whiteSpace: 'nowrap'
                  }
                },
                credits: {
                  enabled: !0,
                  href: 'https://www.highcharts.com?credits',
                  position: { align: 'right', x: -10, verticalAlign: 'bottom', y: -5 },
                  style: { cursor: 'pointer', color: '#999999', fontSize: '9px' },
                  text: 'Highcharts.com'
                }
              }),
                (t.setOptions = function(e) {
                  return (
                    (t.defaultOptions = i(!0, t.defaultOptions, e)),
                    t.time.update(i(t.defaultOptions.global, t.defaultOptions.time), !1),
                    t.defaultOptions
                  );
                }),
                (t.getOptions = function() {
                  return t.defaultOptions;
                }),
                (t.defaultPlotOptions = t.defaultOptions.plotOptions),
                (t.time = new t.Time(i(t.defaultOptions.global, t.defaultOptions.time))),
                (t.dateFormat = function(e, i, n) {
                  return t.time.dateFormat(e, i, n);
                });
            }),
            e(i, 'parts/Tick.js', [i['parts/Globals.js']], function(t) {
              var e = t.correctFloat,
                i = t.defined,
                n = t.destroyObjectProperties,
                o = t.fireEvent,
                s = t.isNumber,
                r = t.merge,
                a = t.pick,
                l = t.deg2rad;
              (t.Tick = function(t, e, i, n, o) {
                (this.axis = t),
                  (this.pos = e),
                  (this.type = i || ''),
                  (this.isNewLabel = this.isNew = !0),
                  (this.parameters = o || {}),
                  (this.tickmarkOffset = this.parameters.tickmarkOffset),
                  (this.options = this.parameters.options),
                  i || n || this.addLabel();
              }),
                (t.Tick.prototype = {
                  addLabel: function() {
                    var n,
                      o,
                      s,
                      l,
                      h = this,
                      c = h.axis,
                      d = c.options,
                      p = c.chart,
                      u = c.categories,
                      f = c.names,
                      g = h.pos,
                      m = a(h.options && h.options.labels, d.labels),
                      x = g === (b = c.tickPositions)[0],
                      y = g === b[b.length - 1],
                      v = ((u = this.parameters.category || (u ? a(u[g], f[g], g) : g)), h.label),
                      b = b.info;
                    c.isDatetimeAxis &&
                      b &&
                      (n = (o = p.time.resolveDTLFormat(
                        d.dateTimeLabelFormats[(!d.grid && b.higherRanks[g]) || b.unitName]
                      )).main),
                      (h.isFirst = x),
                      (h.isLast = y),
                      (h.formatCtx = {
                        axis: c,
                        chart: p,
                        isFirst: x,
                        isLast: y,
                        dateTimeLabelFormat: n,
                        tickPositionInfo: b,
                        value: c.isLog ? e(c.lin2log(u)) : u,
                        pos: g
                      }),
                      (d = c.labelFormatter.call(h.formatCtx, this.formatCtx)),
                      (l = o && o.list) &&
                        (h.shortenLabel = function() {
                          for (s = 0; s < l.length; s++)
                            if (
                              (v.attr({
                                text: c.labelFormatter.call(t.extend(h.formatCtx, { dateTimeLabelFormat: l[s] }))
                              }),
                              v.getBBox().width < c.getSlotWidth(h) - 2 * a(m.padding, 5))
                            )
                              return;
                          v.attr({ text: '' });
                        }),
                      i(v)
                        ? v &&
                          v.textStr !== d &&
                          (!v.textWidth || (m.style && m.style.width) || v.styles.width || v.css({ width: null }),
                          v.attr({ text: d }))
                        : ((h.label = v =
                            i(d) && m.enabled ? p.renderer.text(d, 0, 0, m.useHTML).add(c.labelGroup) : null) &&
                            (p.styledMode || v.css(r(m.style)), (v.textPxLength = v.getBBox().width)),
                          (h.rotation = 0));
                  },
                  getLabelSize: function() {
                    return this.label ? this.label.getBBox()[this.axis.horiz ? 'height' : 'width'] : 0;
                  },
                  handleOverflow: function(t) {
                    var e,
                      i = this.axis,
                      n = i.options.labels,
                      o = t.x,
                      s = i.chart.chartWidth,
                      r = i.chart.spacing,
                      h = a(i.labelLeft, Math.min(i.pos, r[3])),
                      c = ((r = a(i.labelRight, Math.max(i.isRadial ? 0 : i.pos + i.len, s - r[1]))), this.label),
                      d = this.rotation,
                      p = { left: 0, center: 0.5, right: 1 }[i.labelAlign || c.attr('align')],
                      u = c.getBBox().width,
                      f = i.getSlotWidth(this),
                      g = f,
                      m = 1,
                      x = {};
                    d || 'justify' !== a(n.overflow, 'justify')
                      ? 0 > d && o - p * u < h
                        ? (e = Math.round(o / Math.cos(d * l) - h))
                        : 0 < d && o + p * u > r && (e = Math.round((s - o) / Math.cos(d * l)))
                      : ((s = o + (1 - p) * u),
                        o - p * u < h ? (g = t.x + g * (1 - p) - h) : s > r && ((g = r - t.x + g * p), (m = -1)),
                        (g = Math.min(f, g)) < f &&
                          'center' === i.labelAlign &&
                          (t.x += m * (f - g - p * (f - Math.min(u, g)))),
                        (u > g || (i.autoRotation && (c.styles || {}).width)) && (e = g)),
                      e &&
                        (this.shortenLabel
                          ? this.shortenLabel()
                          : ((x.width = Math.floor(e)),
                            (n.style || {}).textOverflow || (x.textOverflow = 'ellipsis'),
                            c.css(x)));
                  },
                  getPosition: function(e, i, n, s) {
                    var r = this.axis,
                      a = r.chart,
                      l = (s && a.oldChartHeight) || a.chartHeight;
                    return (
                      (e = {
                        x: e
                          ? t.correctFloat(r.translate(i + n, null, null, s) + r.transB)
                          : r.left +
                            r.offset +
                            (r.opposite ? ((s && a.oldChartWidth) || a.chartWidth) - r.right - r.left : 0),
                        y: e
                          ? l - r.bottom + r.offset - (r.opposite ? r.height : 0)
                          : t.correctFloat(l - r.translate(i + n, null, null, s) - r.transB)
                      }),
                      o(this, 'afterGetPosition', { pos: e }),
                      e
                    );
                  },
                  getLabelPosition: function(t, e, n, s, r, a, h, c) {
                    var d = this.axis,
                      p = d.transA,
                      u = d.reversed,
                      f = d.staggerLines,
                      g = d.tickRotCorr || { x: 0, y: 0 },
                      m = r.y,
                      x = s || d.reserveSpaceDefault ? 0 : -d.labelOffset * ('center' === d.labelAlign ? 0.5 : 1),
                      y = {};
                    return (
                      i(m) ||
                        (m =
                          0 === d.side
                            ? n.rotation
                              ? -8
                              : -n.getBBox().height
                            : 2 === d.side
                            ? g.y + 8
                            : Math.cos(n.rotation * l) * (g.y - n.getBBox(!1, 0).height / 2)),
                      (e = e + m - (a && !s ? a * p * (u ? 1 : -1) : 0)),
                      f && ((n = (h / (c || 1)) % f), d.opposite && (n = f - n - 1), (e += (d.labelOffset / f) * n)),
                      (y.x = t = t + r.x + x + g.x - (a && s ? a * p * (u ? -1 : 1) : 0)),
                      (y.y = Math.round(e)),
                      o(this, 'afterGetLabelPosition', { pos: y, tickmarkOffset: a, index: h }),
                      y
                    );
                  },
                  getMarkPath: function(t, e, i, n, o, s) {
                    return s.crispLine(['M', t, e, 'L', t + (o ? 0 : -i), e + (o ? i : 0)], n);
                  },
                  renderGridLine: function(t, e, i) {
                    var n = this.axis,
                      o = n.options,
                      s = this.gridLine,
                      r = {},
                      l = this.pos,
                      h = this.type,
                      c = a(this.tickmarkOffset, n.tickmarkOffset),
                      d = n.chart.renderer,
                      p = h ? h + 'Grid' : 'grid',
                      u = o[p + 'LineWidth'],
                      f = o[p + 'LineColor'];
                    (o = o[p + 'LineDashStyle']),
                      s ||
                        (n.chart.styledMode || ((r.stroke = f), (r['stroke-width'] = u), o && (r.dashstyle = o)),
                        h || (r.zIndex = 1),
                        t && (e = 0),
                        (this.gridLine = s = d
                          .path()
                          .attr(r)
                          .addClass('highcharts-' + (h ? h + '-' : '') + 'grid-line')
                          .add(n.gridGroup))),
                      s &&
                        (i = n.getPlotLinePath(l + c, s.strokeWidth() * i, t, 'pass')) &&
                        s[t || this.isNew ? 'attr' : 'animate']({ d: i, opacity: e });
                  },
                  renderMark: function(t, e, i) {
                    var n = this.axis,
                      o = n.options,
                      s = n.chart.renderer,
                      r = this.type,
                      l = r ? r + 'Tick' : 'tick',
                      h = n.tickSize(l),
                      c = this.mark,
                      d = !c,
                      p = t.x;
                    t = t.y;
                    var u = a(o[l + 'Width'], !r && n.isXAxis ? 1 : 0);
                    (o = o[l + 'Color']),
                      h &&
                        (n.opposite && (h[0] = -h[0]),
                        d &&
                          ((this.mark = c = s
                            .path()
                            .addClass('highcharts-' + (r ? r + '-' : '') + 'tick')
                            .add(n.axisGroup)),
                          n.chart.styledMode || c.attr({ stroke: o, 'stroke-width': u })),
                        c[d ? 'attr' : 'animate']({
                          d: this.getMarkPath(p, t, h[0], c.strokeWidth() * i, n.horiz, s),
                          opacity: e
                        }));
                  },
                  renderLabel: function(t, e, i, n) {
                    var o = (d = this.axis).horiz,
                      r = d.options,
                      l = this.label,
                      h = r.labels,
                      c = h.step,
                      d = a(this.tickmarkOffset, d.tickmarkOffset),
                      p = !0,
                      u = t.x;
                    (t = t.y),
                      l &&
                        s(u) &&
                        ((l.xy = t = this.getLabelPosition(u, t, l, o, h, d, n, c)),
                        (this.isFirst && !this.isLast && !a(r.showFirstLabel, 1)) ||
                        (this.isLast && !this.isFirst && !a(r.showLastLabel, 1))
                          ? (p = !1)
                          : !o || h.step || h.rotation || e || 0 === i || this.handleOverflow(t),
                        c && n % c && (p = !1),
                        p && s(t.y)
                          ? ((t.opacity = i), l[this.isNewLabel ? 'attr' : 'animate'](t), (this.isNewLabel = !1))
                          : (l.attr('y', -9999), (this.isNewLabel = !0)));
                  },
                  render: function(e, i, n) {
                    var o = (l = this.axis).horiz,
                      s = this.pos,
                      r = a(this.tickmarkOffset, l.tickmarkOffset),
                      l = ((r = (s = this.getPosition(o, s, r, i)).x),
                      (o && r === l.pos + l.len) || (!o && s.y === l.pos) ? -1 : 1);
                    (n = a(n, 1)),
                      (this.isActive = !0),
                      this.renderGridLine(i, n, l),
                      this.renderMark(s, n, l),
                      this.renderLabel(s, i, n, e),
                      (this.isNew = !1),
                      t.fireEvent(this, 'afterRender');
                  },
                  destroy: function() {
                    n(this, this.axis);
                  }
                });
            }),
            e(i, 'parts/Axis.js', [i['parts/Globals.js']], function(t) {
              var e = t.addEvent,
                i = t.animObject,
                n = t.arrayMax,
                o = t.arrayMin,
                s = t.color,
                r = t.correctFloat,
                a = t.defaultOptions,
                l = t.defined,
                h = t.deg2rad,
                c = t.destroyObjectProperties,
                d = t.extend,
                p = t.fireEvent,
                u = t.format,
                f = t.getMagnitude,
                g = t.isArray,
                m = t.isNumber,
                x = t.isString,
                y = t.merge,
                v = t.normalizeTickInterval,
                b = t.objectEach,
                M = t.pick,
                k = t.removeEvent,
                w = t.seriesTypes,
                S = t.splat,
                P = t.syncTimeout,
                T = t.Tick,
                L = function() {
                  this.init.apply(this, arguments);
                };
              return (
                t.extend(L.prototype, {
                  defaultOptions: {
                    dateTimeLabelFormats: {
                      millisecond: { main: '%H:%M:%S.%L', range: !1 },
                      second: { main: '%H:%M:%S', range: !1 },
                      minute: { main: '%H:%M', range: !1 },
                      hour: { main: '%H:%M', range: !1 },
                      day: { main: '%e. %b' },
                      week: { main: '%e. %b' },
                      month: { main: "%b '%y" },
                      year: { main: '%Y' }
                    },
                    endOnTick: !1,
                    labels: {
                      enabled: !0,
                      indentation: 10,
                      x: 0,
                      style: { color: '#666666', cursor: 'default', fontSize: '11px' }
                    },
                    maxPadding: 0.01,
                    minorTickLength: 2,
                    minorTickPosition: 'outside',
                    minPadding: 0.01,
                    showEmpty: !0,
                    startOfWeek: 1,
                    startOnTick: !1,
                    tickLength: 10,
                    tickPixelInterval: 100,
                    tickmarkPlacement: 'between',
                    tickPosition: 'outside',
                    title: { align: 'middle', style: { color: '#666666' } },
                    type: 'linear',
                    minorGridLineColor: '#f2f2f2',
                    minorGridLineWidth: 1,
                    minorTickColor: '#999999',
                    lineColor: '#ccd6eb',
                    lineWidth: 1,
                    gridLineColor: '#e6e6e6',
                    tickColor: '#ccd6eb'
                  },
                  defaultYAxisOptions: {
                    endOnTick: !0,
                    maxPadding: 0.05,
                    minPadding: 0.05,
                    tickPixelInterval: 72,
                    showLastLabel: !0,
                    labels: { x: -8 },
                    startOnTick: !0,
                    title: { rotation: 270, text: 'Values' },
                    stackLabels: {
                      allowOverlap: !1,
                      enabled: !1,
                      formatter: function() {
                        return t.numberFormat(this.total, -1);
                      },
                      style: { color: '#000000', fontSize: '11px', fontWeight: 'bold', textOutline: '1px contrast' }
                    },
                    gridLineWidth: 1,
                    lineWidth: 0
                  },
                  defaultLeftAxisOptions: { labels: { x: -15 }, title: { rotation: 270 } },
                  defaultRightAxisOptions: { labels: { x: 15 }, title: { rotation: 90 } },
                  defaultBottomAxisOptions: {
                    labels: { autoRotation: [-45], x: 0 },
                    margin: 15,
                    title: { rotation: 0 }
                  },
                  defaultTopAxisOptions: { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } },
                  init: function(t, i) {
                    var n = i.isX,
                      o = this;
                    (o.chart = t),
                      (o.horiz = t.inverted && !o.isZAxis ? !n : n),
                      (o.isXAxis = n),
                      (o.coll = o.coll || (n ? 'xAxis' : 'yAxis')),
                      p(this, 'init', { userOptions: i }),
                      (o.opposite = i.opposite),
                      (o.side = i.side || (o.horiz ? (o.opposite ? 0 : 2) : o.opposite ? 1 : 3)),
                      o.setOptions(i);
                    var s = this.options,
                      r = s.type;
                    (o.labelFormatter = s.labels.formatter || o.defaultLabelFormatter),
                      (o.userOptions = i),
                      (o.minPixelPadding = 0),
                      (o.reversed = s.reversed),
                      (o.visible = !1 !== s.visible),
                      (o.zoomEnabled = !1 !== s.zoomEnabled),
                      (o.hasNames = 'category' === r || !0 === s.categories),
                      (o.categories = s.categories || o.hasNames),
                      o.names || ((o.names = []), (o.names.keys = {})),
                      (o.plotLinesAndBandsGroups = {}),
                      (o.isLog = 'logarithmic' === r),
                      (o.isDatetimeAxis = 'datetime' === r),
                      (o.positiveValuesOnly = o.isLog && !o.allowNegativeLog),
                      (o.isLinked = l(s.linkedTo)),
                      (o.ticks = {}),
                      (o.labelEdge = []),
                      (o.minorTicks = {}),
                      (o.plotLinesAndBands = []),
                      (o.alternateBands = {}),
                      (o.len = 0),
                      (o.minRange = o.userMinRange = s.minRange || s.maxZoom),
                      (o.range = s.range),
                      (o.offset = s.offset || 0),
                      (o.stacks = {}),
                      (o.oldStacks = {}),
                      (o.stacksTouched = 0),
                      (o.max = null),
                      (o.min = null),
                      (o.crosshair = M(s.crosshair, S(t.options.tooltip.crosshairs)[n ? 0 : 1], !1)),
                      (i = o.options.events),
                      -1 === t.axes.indexOf(o) &&
                        (n ? t.axes.splice(t.xAxis.length, 0, o) : t.axes.push(o), t[o.coll].push(o)),
                      (o.series = o.series || []),
                      t.inverted && !o.isZAxis && n && void 0 === o.reversed && (o.reversed = !0),
                      b(i, function(t, i) {
                        e(o, i, t);
                      }),
                      (o.lin2log = s.linearToLogConverter || o.lin2log),
                      o.isLog && ((o.val2lin = o.log2lin), (o.lin2val = o.lin2log)),
                      p(this, 'afterInit');
                  },
                  setOptions: function(t) {
                    (this.options = y(
                      this.defaultOptions,
                      'yAxis' === this.coll && this.defaultYAxisOptions,
                      [
                        this.defaultTopAxisOptions,
                        this.defaultRightAxisOptions,
                        this.defaultBottomAxisOptions,
                        this.defaultLeftAxisOptions
                      ][this.side],
                      y(a[this.coll], t)
                    )),
                      p(this, 'afterSetOptions', { userOptions: t });
                  },
                  defaultLabelFormatter: function() {
                    var e,
                      i = this.value,
                      n = (d = this.axis).chart.time,
                      o = d.categories,
                      s = this.dateTimeLabelFormat,
                      r = (l = a.lang).numericSymbols,
                      l = l.numericSymbolMagnitude || 1e3,
                      h = r && r.length,
                      c = d.options.labels.format,
                      d = d.isLog ? Math.abs(i) : d.tickInterval;
                    if (c) e = u(c, this, n);
                    else if (o) e = i;
                    else if (s) e = n.dateFormat(s, i);
                    else if (h && 1e3 <= d)
                      for (; h-- && void 0 === e; )
                        d >= (n = Math.pow(l, h + 1)) &&
                          0 == (10 * i) % n &&
                          null !== r[h] &&
                          0 !== i &&
                          (e = t.numberFormat(i / n, -1) + r[h]);
                    return (
                      void 0 === e &&
                        (e = 1e4 <= Math.abs(i) ? t.numberFormat(i, -1) : t.numberFormat(i, -1, void 0, '')),
                      e
                    );
                  },
                  getSeriesExtremes: function() {
                    var t,
                      e = this,
                      i = e.chart;
                    p(this, 'getSeriesExtremes', null, function() {
                      (e.hasVisibleSeries = !1),
                        (e.dataMin = e.dataMax = e.threshold = null),
                        (e.softThreshold = !e.isXAxis),
                        e.buildStacks && e.buildStacks(),
                        e.series.forEach(function(n) {
                          if (n.visible || !i.options.chart.ignoreHiddenSeries) {
                            var o,
                              s,
                              r = n.options,
                              a = r.threshold;
                            (e.hasVisibleSeries = !0),
                              e.positiveValuesOnly && 0 >= a && (a = null),
                              e.isXAxis
                                ? (r = n.xData).length &&
                                  ((s = (t = n.getXExtremes(r)).max),
                                  m((o = t.min)) ||
                                    o instanceof Date ||
                                    ((r = r.filter(m)), (o = (t = n.getXExtremes(r)).min), (s = t.max)),
                                  r.length &&
                                    ((e.dataMin = Math.min(M(e.dataMin, o), o)),
                                    (e.dataMax = Math.max(M(e.dataMax, s), s))))
                                : (n.getExtremes(),
                                  (s = n.dataMax),
                                  l((o = n.dataMin)) &&
                                    l(s) &&
                                    ((e.dataMin = Math.min(M(e.dataMin, o), o)),
                                    (e.dataMax = Math.max(M(e.dataMax, s), s))),
                                  l(a) && (e.threshold = a),
                                  (!r.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1));
                          }
                        });
                    }),
                      p(this, 'afterGetSeriesExtremes');
                  },
                  translate: function(t, e, i, n, o, s) {
                    var r = this.linkedParent || this,
                      a = 1,
                      l = 0,
                      h = n ? r.oldTransA : r.transA;
                    n = n ? r.oldMin : r.min;
                    var c = r.minPixelPadding;
                    return (
                      (o = (r.isOrdinal || r.isBroken || (r.isLog && o)) && r.lin2val),
                      h || (h = r.transA),
                      i && ((a *= -1), (l = r.len)),
                      r.reversed && (l -= (a *= -1) * (r.sector || r.len)),
                      e
                        ? ((t = (t * a + l - c) / h + n), o && (t = r.lin2val(t)))
                        : (o && (t = r.val2lin(t)),
                          (t = m(n) ? a * (t - n) * h + l + a * c + (m(s) ? h * s : 0) : void 0)),
                      t
                    );
                  },
                  toPixels: function(t, e) {
                    return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos);
                  },
                  toValue: function(t, e) {
                    return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0);
                  },
                  getPlotLinePath: function(t, e, i, n, o) {
                    var s,
                      r,
                      a,
                      l,
                      h,
                      c,
                      d = this,
                      u = d.chart,
                      f = d.left,
                      g = d.top,
                      x = (i && u.oldChartHeight) || u.chartHeight,
                      y = (i && u.oldChartWidth) || u.chartWidth,
                      v = d.transB,
                      b = function(t, e, i) {
                        return (
                          (('pass' !== n && t < e) || t > i) && (n ? (t = Math.min(Math.max(e, t), i)) : (h = !0)), t
                        );
                      };
                    return (
                      p(
                        this,
                        'getPlotLinePath',
                        (c = { value: t, lineWidth: e, old: i, force: n, translatedValue: o }),
                        function(c) {
                          (o = M(o, d.translate(t, null, null, i))),
                            (o = Math.min(Math.max(-1e5, o), 1e5)),
                            (s = a = Math.round(o + v)),
                            (r = l = Math.round(x - o - v)),
                            m(o)
                              ? d.horiz
                                ? ((r = g), (l = x - d.bottom), (s = a = b(s, f, f + d.width)))
                                : ((s = f), (a = y - d.right), (r = l = b(r, g, g + d.height)))
                              : ((h = !0), (n = !1)),
                            (c.path = h && !n ? null : u.renderer.crispLine(['M', s, r, 'L', a, l], e || 1));
                        }
                      ),
                      c.path
                    );
                  },
                  getLinearTickPositions: function(t, e, i) {
                    var n,
                      o = r(Math.floor(e / t) * t);
                    i = r(Math.ceil(i / t) * t);
                    var s,
                      a = [];
                    if ((r(o + t) === o && (s = 20), this.single)) return [e];
                    for (e = o; e <= i && (a.push(e), (e = r(e + t, s)) !== n); ) n = e;
                    return a;
                  },
                  getMinorTickInterval: function() {
                    var t = this.options;
                    return !0 === t.minorTicks
                      ? M(t.minorTickInterval, 'auto')
                      : !1 === t.minorTicks
                      ? null
                      : t.minorTickInterval;
                  },
                  getMinorTickPositions: function() {
                    var t,
                      e = this,
                      i = e.options,
                      n = e.tickPositions,
                      o = e.minorTickInterval,
                      s = [],
                      r = e.min - (t = e.pointRangePadding || 0),
                      a = (t = e.max + t) - r;
                    if (a && a / o < e.len / 3)
                      if (e.isLog)
                        this.paddedTicks.forEach(function(t, i, n) {
                          i && s.push.apply(s, e.getLogTickPositions(o, n[i - 1], n[i], !0));
                        });
                      else if (e.isDatetimeAxis && 'auto' === this.getMinorTickInterval())
                        s = s.concat(e.getTimeTicks(e.normalizeTimeTickInterval(o), r, t, i.startOfWeek));
                      else for (i = r + ((n[0] - r) % o); i <= t && i !== s[0]; i += o) s.push(i);
                    return 0 !== s.length && e.trimTicks(s), s;
                  },
                  adjustForMinRange: function() {
                    var t,
                      e,
                      i,
                      s,
                      r,
                      a,
                      h,
                      c = this.options,
                      d = this.min,
                      p = this.max;
                    this.isXAxis &&
                      void 0 === this.minRange &&
                      !this.isLog &&
                      (l(c.min) || l(c.max)
                        ? (this.minRange = null)
                        : (this.series.forEach(function(t) {
                            for (a = t.xData, s = t.xIncrement ? 1 : a.length - 1; 0 < s; s--)
                              (r = a[s] - a[s - 1]), (void 0 === i || r < i) && (i = r);
                          }),
                          (this.minRange = Math.min(5 * i, this.dataMax - this.dataMin)))),
                      p - d < this.minRange &&
                        ((e = this.dataMax - this.dataMin >= this.minRange),
                        (t = [d - (t = ((h = this.minRange) - p + d) / 2), M(c.min, d - t)]),
                        e && (t[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin),
                        (p = [(d = n(t)) + h, M(c.max, d + h)]),
                        e && (p[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax),
                        (p = o(p)) - d < h && ((t[0] = p - h), (t[1] = M(c.min, p - h)), (d = n(t)))),
                      (this.min = d),
                      (this.max = p);
                  },
                  getClosest: function() {
                    var t;
                    return (
                      this.categories
                        ? (t = 1)
                        : this.series.forEach(function(e) {
                            var i = e.closestPointRange,
                              n = e.visible || !e.chart.options.chart.ignoreHiddenSeries;
                            !e.noSharedTooltip && l(i) && n && (t = l(t) ? Math.min(t, i) : i);
                          }),
                      t
                    );
                  },
                  nameToX: function(t) {
                    var e,
                      i = g(this.categories),
                      n = i ? this.categories : this.names,
                      o = t.options.x;
                    return (
                      (t.series.requireSorting = !1),
                      l(o) ||
                        (o =
                          !1 === this.options.uniqueNames
                            ? t.series.autoIncrement()
                            : i
                            ? n.indexOf(t.name)
                            : M(n.keys[t.name], -1)),
                      -1 === o ? i || (e = n.length) : (e = o),
                      void 0 !== e && ((this.names[e] = t.name), (this.names.keys[t.name] = e)),
                      e
                    );
                  },
                  updateNames: function() {
                    var t = this,
                      e = this.names;
                    0 < e.length &&
                      (Object.keys(e.keys).forEach(function(t) {
                        delete e.keys[t];
                      }),
                      (e.length = 0),
                      (this.minRange = this.userMinRange),
                      (this.series || []).forEach(function(e) {
                        (e.xIncrement = null),
                          (e.points && !e.isDirtyData) ||
                            ((t.max = Math.max(t.max, e.xData.length - 1)), e.processData(), e.generatePoints()),
                          e.data.forEach(function(i, n) {
                            var o;
                            i &&
                              i.options &&
                              void 0 !== i.name &&
                              void 0 !== (o = t.nameToX(i)) &&
                              o !== i.x &&
                              ((i.x = o), (e.xData[n] = o));
                          });
                      }));
                  },
                  setAxisTranslation: function(t) {
                    var e,
                      i = this,
                      n = i.max - i.min,
                      o = i.axisPointRange || 0,
                      s = 0,
                      r = 0,
                      a = i.linkedParent,
                      l = !!i.categories,
                      h = i.transA,
                      c = i.isXAxis;
                    (c || l || o) &&
                      ((e = i.getClosest()),
                      a
                        ? ((s = a.minPointOffset), (r = a.pointRangePadding))
                        : i.series.forEach(function(t) {
                            var n = l ? 1 : c ? M(t.options.pointRange, e, 0) : i.axisPointRange || 0,
                              a = t.options.pointPlacement;
                            (o = Math.max(o, n)),
                              (i.single && !l) ||
                                ((t = w.xrange && t instanceof w.xrange ? !c : c),
                                (s = Math.max(s, t && x(a) ? 0 : n / 2)),
                                (r = Math.max(r, t && 'on' === a ? 0 : n)));
                          }),
                      (i.minPointOffset = s *= a = i.ordinalSlope && e ? i.ordinalSlope / e : 1),
                      (i.pointRangePadding = r *= a),
                      (i.pointRange = Math.min(o, n)),
                      c && (i.closestPointRange = e)),
                      t && (i.oldTransA = h),
                      (i.translationSlope = i.transA = h = i.staticScale || i.len / (n + r || 1)),
                      (i.transB = i.horiz ? i.left : i.bottom),
                      (i.minPixelPadding = h * s),
                      p(this, 'afterSetAxisTranslation');
                  },
                  minFromRange: function() {
                    return this.max - this.range;
                  },
                  setTickInterval: function(e) {
                    var i,
                      n,
                      o,
                      s,
                      a = this,
                      h = a.chart,
                      c = a.options,
                      d = a.isLog,
                      u = a.isDatetimeAxis,
                      g = a.isXAxis,
                      x = a.isLinked,
                      y = c.maxPadding,
                      b = c.minPadding,
                      k = c.tickInterval,
                      w = c.tickPixelInterval,
                      S = a.categories,
                      P = m(a.threshold) ? a.threshold : null,
                      T = a.softThreshold;
                    u || S || x || this.getTickAmount(),
                      (o = M(a.userMin, c.min)),
                      (s = M(a.userMax, c.max)),
                      x
                        ? ((a.linkedParent = h[a.coll][c.linkedTo]),
                          (i = a.linkedParent.getExtremes()),
                          (a.min = M(i.min, i.dataMin)),
                          (a.max = M(i.max, i.dataMax)),
                          c.type !== a.linkedParent.options.type && t.error(11, 1, h))
                        : (!T && l(P) && (a.dataMin >= P ? ((i = P), (b = 0)) : a.dataMax <= P && ((n = P), (y = 0))),
                          (a.min = M(o, i, a.dataMin)),
                          (a.max = M(s, n, a.dataMax))),
                      d &&
                        (a.positiveValuesOnly && !e && 0 >= Math.min(a.min, M(a.dataMin, a.min)) && t.error(10, 1, h),
                        (a.min = r(a.log2lin(a.min), 15)),
                        (a.max = r(a.log2lin(a.max), 15))),
                      a.range &&
                        l(a.max) &&
                        ((a.userMin = a.min = o = Math.max(a.dataMin, a.minFromRange())),
                        (a.userMax = s = a.max),
                        (a.range = null)),
                      p(a, 'foundExtremes'),
                      a.beforePadding && a.beforePadding(),
                      a.adjustForMinRange(),
                      !(S || a.axisPointRange || a.usePercentage || x) &&
                        l(a.min) &&
                        l(a.max) &&
                        (h = a.max - a.min) &&
                        (!l(o) && b && (a.min -= h * b), !l(s) && y && (a.max += h * y)),
                      m(c.softMin) && !m(a.userMin) && c.softMin < a.min && (a.min = o = c.softMin),
                      m(c.softMax) && !m(a.userMax) && c.softMax > a.max && (a.max = s = c.softMax),
                      m(c.floor) && (a.min = Math.min(Math.max(a.min, c.floor), Number.MAX_VALUE)),
                      m(c.ceiling) && (a.max = Math.max(Math.min(a.max, c.ceiling), M(a.userMax, -Number.MAX_VALUE))),
                      T &&
                        l(a.dataMin) &&
                        ((P = P || 0),
                        !l(o) && a.min < P && a.dataMin >= P
                          ? (a.min = a.options.minRange ? Math.min(P, a.max - a.minRange) : P)
                          : !l(s) &&
                            a.max > P &&
                            a.dataMax <= P &&
                            (a.max = a.options.minRange ? Math.max(P, a.min + a.minRange) : P)),
                      (a.tickInterval =
                        a.min === a.max || void 0 === a.min || void 0 === a.max
                          ? 1
                          : x && !k && w === a.linkedParent.options.tickPixelInterval
                          ? (k = a.linkedParent.tickInterval)
                          : M(
                              k,
                              this.tickAmount ? (a.max - a.min) / Math.max(this.tickAmount - 1, 1) : void 0,
                              S ? 1 : ((a.max - a.min) * w) / Math.max(a.len, w)
                            )),
                      g &&
                        !e &&
                        a.series.forEach(function(t) {
                          t.processData(a.min !== a.oldMin || a.max !== a.oldMax);
                        }),
                      a.setAxisTranslation(!0),
                      a.beforeSetTickPositions && a.beforeSetTickPositions(),
                      a.postProcessTickInterval && (a.tickInterval = a.postProcessTickInterval(a.tickInterval)),
                      a.pointRange && !k && (a.tickInterval = Math.max(a.pointRange, a.tickInterval)),
                      (e = M(c.minTickInterval, a.isDatetimeAxis && a.closestPointRange)),
                      !k && a.tickInterval < e && (a.tickInterval = e),
                      u ||
                        d ||
                        k ||
                        (a.tickInterval = v(
                          a.tickInterval,
                          null,
                          f(a.tickInterval),
                          M(
                            c.allowDecimals,
                            !(0.5 < a.tickInterval && 5 > a.tickInterval && 1e3 < a.max && 9999 > a.max)
                          ),
                          !!this.tickAmount
                        )),
                      this.tickAmount || (a.tickInterval = a.unsquish()),
                      this.setTickPositions();
                  },
                  setTickPositions: function() {
                    var e,
                      i = this.options,
                      n = i.tickPositions;
                    e = this.getMinorTickInterval();
                    var o = i.tickPositioner,
                      s = i.startOnTick,
                      r = i.endOnTick;
                    (this.tickmarkOffset =
                      this.categories && 'between' === i.tickmarkPlacement && 1 === this.tickInterval ? 0.5 : 0),
                      (this.minorTickInterval = 'auto' === e && this.tickInterval ? this.tickInterval / 5 : e),
                      (this.single =
                        this.min === this.max &&
                        l(this.min) &&
                        !this.tickAmount &&
                        (parseInt(this.min, 10) === this.min || !1 !== i.allowDecimals)),
                      (this.tickPositions = e = n && n.slice()),
                      !e &&
                        (!this.ordinalPositions &&
                        (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)
                          ? ((e = [this.min, this.max]), t.error(19, !1, this.chart))
                          : (e = this.isDatetimeAxis
                              ? this.getTimeTicks(
                                  this.normalizeTimeTickInterval(this.tickInterval, i.units),
                                  this.min,
                                  this.max,
                                  i.startOfWeek,
                                  this.ordinalPositions,
                                  this.closestPointRange,
                                  !0
                                )
                              : this.isLog
                              ? this.getLogTickPositions(this.tickInterval, this.min, this.max)
                              : this.getLinearTickPositions(this.tickInterval, this.min, this.max)),
                        e.length > this.len && (e = [e[0], e.pop()])[0] === e[1] && (e.length = 1),
                        (this.tickPositions = e),
                        o && (o = o.apply(this, [this.min, this.max]))) &&
                        (this.tickPositions = e = o),
                      (this.paddedTicks = e.slice(0)),
                      this.trimTicks(e, s, r),
                      this.isLinked ||
                        (this.single && 2 > e.length && !this.categories && ((this.min -= 0.5), (this.max += 0.5)),
                        n || o || this.adjustTickAmount()),
                      p(this, 'afterSetTickPositions');
                  },
                  trimTicks: function(t, e, i) {
                    var n = t[0],
                      o = t[t.length - 1],
                      s = this.minPointOffset || 0;
                    if ((p(this, 'trimTicks'), !this.isLinked)) {
                      if (e && -1 / 0 !== n) this.min = n;
                      else for (; this.min - s > t[0]; ) t.shift();
                      if (i) this.max = o;
                      else for (; this.max + s < t[t.length - 1]; ) t.pop();
                      0 === t.length && l(n) && !this.options.tickPositions && t.push((o + n) / 2);
                    }
                  },
                  alignToOthers: function() {
                    var t,
                      e = {},
                      i = this.options;
                    return (
                      !1 === this.chart.options.chart.alignTicks ||
                        !1 === i.alignTicks ||
                        !1 === i.startOnTick ||
                        !1 === i.endOnTick ||
                        this.isLog ||
                        this.chart[this.coll].forEach(function(i) {
                          var n = i.options;
                          (n = [i.horiz ? n.left : n.top, n.width, n.height, n.pane].join()),
                            i.series.length && (e[n] ? (t = !0) : (e[n] = 1));
                        }),
                      t
                    );
                  },
                  getTickAmount: function() {
                    var t = this.options,
                      e = t.tickAmount,
                      i = t.tickPixelInterval;
                    !l(t.tickInterval) &&
                      this.len < i &&
                      !this.isRadial &&
                      !this.isLog &&
                      t.startOnTick &&
                      t.endOnTick &&
                      (e = 2),
                      !e && this.alignToOthers() && (e = Math.ceil(this.len / i) + 1),
                      4 > e && ((this.finalTickAmt = e), (e = 5)),
                      (this.tickAmount = e);
                  },
                  adjustTickAmount: function() {
                    var t,
                      e = this.options,
                      i = this.tickInterval,
                      n = this.tickPositions,
                      o = this.tickAmount,
                      s = this.finalTickAmt,
                      a = n && n.length,
                      h = M(this.threshold, this.softThreshold ? 0 : null);
                    if (this.hasData()) {
                      if (a < o) {
                        for (t = this.min; n.length < o; )
                          n.length % 2 || t === h ? n.push(r(n[n.length - 1] + i)) : n.unshift(r(n[0] - i));
                        (this.transA *= (a - 1) / (o - 1)),
                          (this.min = e.startOnTick ? n[0] : Math.min(this.min, n[0])),
                          (this.max = e.endOnTick ? n[n.length - 1] : Math.max(this.max, n[n.length - 1]));
                      } else a > o && ((this.tickInterval *= 2), this.setTickPositions());
                      if (l(s)) {
                        for (i = e = n.length; i--; )
                          ((3 === s && 1 == i % 2) || (2 >= s && 0 < i && i < e - 1)) && n.splice(i, 1);
                        this.finalTickAmt = void 0;
                      }
                    }
                  },
                  setScale: function() {
                    var t,
                      e = this.series.some(function(t) {
                        return t.isDirtyData || t.isDirty || t.xAxis.isDirty;
                      });
                    (this.oldMin = this.min),
                      (this.oldMax = this.max),
                      (this.oldAxisLength = this.len),
                      this.setAxisSize(),
                      (t = this.len !== this.oldAxisLength) ||
                      e ||
                      this.isLinked ||
                      this.forceRedraw ||
                      this.userMin !== this.oldUserMin ||
                      this.userMax !== this.oldUserMax ||
                      this.alignToOthers()
                        ? (this.resetStacks && this.resetStacks(),
                          (this.forceRedraw = !1),
                          this.getSeriesExtremes(),
                          this.setTickInterval(),
                          (this.oldUserMin = this.userMin),
                          (this.oldUserMax = this.userMax),
                          this.isDirty || (this.isDirty = t || this.min !== this.oldMin || this.max !== this.oldMax))
                        : this.cleanStacks && this.cleanStacks(),
                      p(this, 'afterSetScale');
                  },
                  setExtremes: function(t, e, i, n, o) {
                    var s = this,
                      r = s.chart;
                    (i = M(i, !0)),
                      s.series.forEach(function(t) {
                        delete t.kdTree;
                      }),
                      (o = d(o, { min: t, max: e })),
                      p(s, 'setExtremes', o, function() {
                        (s.userMin = t), (s.userMax = e), (s.eventArgs = o), i && r.redraw(n);
                      });
                  },
                  zoom: function(t, e) {
                    var i = this.dataMin,
                      n = this.dataMax,
                      o = this.options,
                      s = Math.min(i, M(o.min, i)),
                      r = Math.max(n, M(o.max, n));
                    return (
                      p(this, 'zoom', (t = { newMin: t, newMax: e }), function(t) {
                        var e = t.newMin,
                          o = t.newMax;
                        (e === this.min && o === this.max) ||
                          (this.allowZoomOutside ||
                            (l(i) && (e < s && (e = s), e > r && (e = r)),
                            l(n) && (o < s && (o = s), o > r && (o = r))),
                          (this.displayBtn = void 0 !== e || void 0 !== o),
                          this.setExtremes(e, o, !1, void 0, { trigger: 'zoom' })),
                          (t.zoomed = !0);
                      }),
                      t.zoomed
                    );
                  },
                  setAxisSize: function() {
                    var e = this.chart,
                      i = (a = this.options).offsets || [0, 0, 0, 0],
                      n = this.horiz,
                      o = (this.width = Math.round(
                        t.relativeLength(M(a.width, e.plotWidth - i[3] + i[1]), e.plotWidth)
                      )),
                      s = (this.height = Math.round(
                        t.relativeLength(M(a.height, e.plotHeight - i[0] + i[2]), e.plotHeight)
                      )),
                      r = (this.top = Math.round(
                        t.relativeLength(M(a.top, e.plotTop + i[0]), e.plotHeight, e.plotTop)
                      )),
                      a = (this.left = Math.round(
                        t.relativeLength(M(a.left, e.plotLeft + i[3]), e.plotWidth, e.plotLeft)
                      ));
                    (this.bottom = e.chartHeight - s - r),
                      (this.right = e.chartWidth - o - a),
                      (this.len = Math.max(n ? o : s, 0)),
                      (this.pos = n ? a : r);
                  },
                  getExtremes: function() {
                    var t = this.isLog;
                    return {
                      min: t ? r(this.lin2log(this.min)) : this.min,
                      max: t ? r(this.lin2log(this.max)) : this.max,
                      dataMin: this.dataMin,
                      dataMax: this.dataMax,
                      userMin: this.userMin,
                      userMax: this.userMax
                    };
                  },
                  getThreshold: function(t) {
                    var e = (i = this.isLog) ? this.lin2log(this.min) : this.min,
                      i = i ? this.lin2log(this.max) : this.max;
                    return (
                      null === t || -1 / 0 === t ? (t = e) : 1 / 0 === t ? (t = i) : e > t ? (t = e) : i < t && (t = i),
                      this.translate(t, 0, 1, 0, 1)
                    );
                  },
                  autoLabelAlign: function(t) {
                    var e = (M(t, 0) - 90 * this.side + 720) % 360;
                    return (
                      p(this, 'autoLabelAlign', (t = { align: 'center' }), function(t) {
                        15 < e && 165 > e ? (t.align = 'right') : 195 < e && 345 > e && (t.align = 'left');
                      }),
                      t.align
                    );
                  },
                  tickSize: function(t) {
                    var e,
                      i = this.options,
                      n = i[t + 'Length'],
                      o = M(i[t + 'Width'], 'tick' === t && this.isXAxis && !this.categories ? 1 : 0);
                    return (
                      o && n && ('inside' === i[t + 'Position'] && (n = -n), (e = [n, o])),
                      p(this, 'afterTickSize', (t = { tickSize: e })),
                      t.tickSize
                    );
                  },
                  labelMetrics: function() {
                    var t = (this.tickPositions && this.tickPositions[0]) || 0;
                    return this.chart.renderer.fontMetrics(
                      this.options.labels.style && this.options.labels.style.fontSize,
                      this.ticks[t] && this.ticks[t].label
                    );
                  },
                  unsquish: function() {
                    var t,
                      e,
                      i,
                      n = this.options.labels,
                      o = this.horiz,
                      s = this.tickInterval,
                      a = s,
                      c = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / s),
                      d = n.rotation,
                      p = this.labelMetrics(),
                      u = Number.MAX_VALUE,
                      f = this.max - this.min,
                      g = function(t) {
                        var e;
                        return (
                          (e = 1 < (e = t / (c || 1)) ? Math.ceil(e) : 1) * s > f &&
                            1 / 0 !== t &&
                            1 / 0 !== c &&
                            (e = Math.ceil(f / s)),
                          r(e * s)
                        );
                      };
                    return (
                      o
                        ? (i =
                            !n.staggerLines &&
                            !n.step &&
                            (l(d) ? [d] : c < M(n.autoRotationLimit, 80) && n.autoRotation)) &&
                          i.forEach(function(i) {
                            var n;
                            (i === d || (i && -90 <= i && 90 >= i)) &&
                              (n = (e = g(Math.abs(p.h / Math.sin(h * i)))) + Math.abs(i / 360)) < u &&
                              ((u = n), (t = i), (a = e));
                          })
                        : n.step || (a = g(p.h)),
                      (this.autoRotation = i),
                      (this.labelRotation = M(t, d)),
                      a
                    );
                  },
                  getSlotWidth: function(t) {
                    var e = this.chart,
                      i = this.horiz,
                      n = this.options.labels,
                      o = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                      s = e.margin[3];
                    return (
                      (t && t.slotWidth) ||
                      (i && 2 > (n.step || 0) && !n.rotation && ((this.staggerLines || 1) * this.len) / o) ||
                      (!i &&
                        ((n.style && parseInt(n.style.width, 10)) || (s && s - e.spacing[3]) || 0.33 * e.chartWidth))
                    );
                  },
                  renderUnsquish: function() {
                    var t,
                      e,
                      i,
                      n = this.chart,
                      o = n.renderer,
                      s = this.tickPositions,
                      r = this.ticks,
                      a = this.options.labels,
                      l = (a && a.style) || {},
                      h = this.horiz,
                      c = this.getSlotWidth(),
                      d = Math.max(1, Math.round(c - 2 * (a.padding || 5))),
                      p = {},
                      u = this.labelMetrics(),
                      f = a.style && a.style.textOverflow,
                      g = 0;
                    if (
                      (x(a.rotation) || (p.rotation = a.rotation || 0),
                      s.forEach(function(t) {
                        (t = r[t]) && t.label && t.label.textPxLength > g && (g = t.label.textPxLength);
                      }),
                      (this.maxLabelLength = g),
                      this.autoRotation)
                    )
                      g > d && g > u.h ? (p.rotation = this.labelRotation) : (this.labelRotation = 0);
                    else if (c && ((t = d), !f))
                      for (e = 'clip', d = s.length; !h && d--; )
                        (i = r[(i = s[d])].label) &&
                          (i.styles && 'ellipsis' === i.styles.textOverflow
                            ? i.css({ textOverflow: 'clip' })
                            : i.textPxLength > c && i.css({ width: c + 'px' }),
                          i.getBBox().height > this.len / s.length - (u.h - u.f) &&
                            (i.specificTextOverflow = 'ellipsis'));
                    p.rotation && ((t = g > 0.5 * n.chartHeight ? 0.33 * n.chartHeight : g), f || (e = 'ellipsis')),
                      (this.labelAlign = a.align || this.autoLabelAlign(this.labelRotation)) &&
                        (p.align = this.labelAlign),
                      s.forEach(function(i) {
                        var n = (i = r[i]) && i.label,
                          o = l.width,
                          s = {};
                        n &&
                          (n.attr(p),
                          i.shortenLabel
                            ? i.shortenLabel()
                            : t &&
                              !o &&
                              'nowrap' !== l.whiteSpace &&
                              (t < n.textPxLength || 'SPAN' === n.element.tagName)
                            ? ((s.width = t), f || (s.textOverflow = n.specificTextOverflow || e), n.css(s))
                            : n.styles && n.styles.width && !s.width && !o && n.css({ width: null }),
                          delete n.specificTextOverflow,
                          (i.rotation = p.rotation));
                      }, this),
                      (this.tickRotCorr = o.rotCorr(u.b, this.labelRotation || 0, 0 !== this.side));
                  },
                  hasData: function() {
                    return (
                      this.series.some(function(t) {
                        return t.hasData();
                      }) ||
                      (this.options.showEmpty && l(this.min) && l(this.max))
                    );
                  },
                  addTitle: function(t) {
                    var e,
                      i = this.opposite,
                      n = this.options.title,
                      o = this.chart.styledMode;
                    this.axisTitle ||
                      ((e = n.textAlign) ||
                        (e = (this.horiz
                          ? { low: 'left', middle: 'center', high: 'right' }
                          : { low: i ? 'right' : 'left', middle: 'center', high: i ? 'left' : 'right' })[n.align]),
                      (this.axisTitle = this.chart.renderer
                        .text(n.text, 0, 0, n.useHTML)
                        .attr({ zIndex: 7, rotation: n.rotation || 0, align: e })
                        .addClass('highcharts-axis-title')),
                      o || this.axisTitle.css(y(n.style)),
                      this.axisTitle.add(this.axisGroup),
                      (this.axisTitle.isNew = !0)),
                      o || n.style.width || this.isRadial || this.axisTitle.css({ width: this.len }),
                      this.axisTitle[t ? 'show' : 'hide'](!0);
                  },
                  generateTick: function(t) {
                    var e = this.ticks;
                    e[t] ? e[t].addLabel() : (e[t] = new T(this, t));
                  },
                  getOffset: function() {
                    var t,
                      e,
                      i,
                      n = this,
                      o = (v = n.chart).renderer,
                      s = n.options,
                      r = n.tickPositions,
                      a = n.ticks,
                      h = n.horiz,
                      c = n.side,
                      d = v.inverted && !n.isZAxis ? [1, 0, 3, 2][c] : c,
                      u = 0,
                      f = 0,
                      g = s.title,
                      m = s.labels,
                      x = 0,
                      y = v.axisOffset,
                      v = v.clipOffset,
                      k = [-1, 1, 1, -1][c],
                      w = s.className,
                      S = n.axisParent;
                    (t = n.hasData()),
                      (n.showAxis = e = t || M(s.showEmpty, !0)),
                      (n.staggerLines = n.horiz && m.staggerLines),
                      n.axisGroup ||
                        ((n.gridGroup = o
                          .g('grid')
                          .attr({ zIndex: s.gridZIndex || 1 })
                          .addClass('highcharts-' + this.coll.toLowerCase() + '-grid ' + (w || ''))
                          .add(S)),
                        (n.axisGroup = o
                          .g('axis')
                          .attr({ zIndex: s.zIndex || 2 })
                          .addClass('highcharts-' + this.coll.toLowerCase() + ' ' + (w || ''))
                          .add(S)),
                        (n.labelGroup = o
                          .g('axis-labels')
                          .attr({ zIndex: m.zIndex || 7 })
                          .addClass('highcharts-' + n.coll.toLowerCase() + '-labels ' + (w || ''))
                          .add(S))),
                      t || n.isLinked
                        ? (r.forEach(function(t, e) {
                            n.generateTick(t, e);
                          }),
                          n.renderUnsquish(),
                          (n.reserveSpaceDefault = 0 === c || 2 === c || { 1: 'left', 3: 'right' }[c] === n.labelAlign),
                          M(m.reserveSpace, 'center' === n.labelAlign || null, n.reserveSpaceDefault) &&
                            r.forEach(function(t) {
                              x = Math.max(a[t].getLabelSize(), x);
                            }),
                          n.staggerLines && (x *= n.staggerLines),
                          (n.labelOffset = x * (n.opposite ? -1 : 1)))
                        : b(a, function(t, e) {
                            t.destroy(), delete a[e];
                          }),
                      g &&
                        g.text &&
                        !1 !== g.enabled &&
                        (n.addTitle(e),
                        e &&
                          !1 !== g.reserveSpace &&
                          ((n.titleOffset = u = n.axisTitle.getBBox()[h ? 'height' : 'width']),
                          (f = l((i = g.offset)) ? 0 : M(g.margin, h ? 5 : 10)))),
                      n.renderLine(),
                      (n.offset = k * M(s.offset, y[c] ? y[c] + (s.margin || 0) : 0)),
                      (n.tickRotCorr = n.tickRotCorr || { x: 0, y: 0 }),
                      (o = 0 === c ? -n.labelMetrics().h : 2 === c ? n.tickRotCorr.y : 0),
                      (f = Math.abs(x) + f),
                      x && (f = f - o + k * (h ? M(m.y, n.tickRotCorr.y + 8 * k) : m.x)),
                      (n.axisTitleMargin = M(i, f)),
                      n.getMaxLabelDimensions && (n.maxLabelDimensions = n.getMaxLabelDimensions(a, r)),
                      (h = this.tickSize('tick')),
                      (y[c] = Math.max(
                        y[c],
                        n.axisTitleMargin + u + k * n.offset,
                        f,
                        r && r.length && h ? h[0] + k * n.offset : 0
                      )),
                      (s = s.offset ? 0 : 2 * Math.floor(n.axisLine.strokeWidth() / 2)),
                      (v[d] = Math.max(v[d], s)),
                      p(this, 'afterGetOffset');
                  },
                  getLinePath: function(t) {
                    var e = this.chart,
                      i = this.opposite,
                      n = this.horiz,
                      o = this.left + (i ? this.width : 0) + (s = this.offset),
                      s = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
                    return (
                      i && (t *= -1),
                      e.renderer.crispLine(
                        [
                          'M',
                          n ? this.left : o,
                          n ? s : this.top,
                          'L',
                          n ? e.chartWidth - this.right : o,
                          n ? s : e.chartHeight - this.bottom
                        ],
                        t
                      )
                    );
                  },
                  renderLine: function() {
                    this.axisLine ||
                      ((this.axisLine = this.chart.renderer
                        .path()
                        .addClass('highcharts-axis-line')
                        .add(this.axisGroup)),
                      this.chart.styledMode ||
                        this.axisLine.attr({
                          stroke: this.options.lineColor,
                          'stroke-width': this.options.lineWidth,
                          zIndex: 7
                        }));
                  },
                  getTitlePosition: function() {
                    var t,
                      e = this.left,
                      i = this.top,
                      n = this.len,
                      o = this.options.title,
                      s = (t = this.horiz) ? e : i,
                      r = this.opposite,
                      a = this.offset,
                      l = o.x || 0,
                      h = o.y || 0,
                      c = this.chart.renderer.fontMetrics(o.style && o.style.fontSize, (d = this.axisTitle)),
                      d = Math.max(d.getBBox(null, 0).height - c.h - 1, 0);
                    return (
                      (n = { low: s + (t ? 0 : n), middle: s + n / 2, high: s + (t ? n : 0) }[o.align]),
                      (e =
                        (t ? i + this.height : e) +
                        (t ? 1 : -1) * (r ? -1 : 1) * this.axisTitleMargin +
                        [-d, d, c.f, -d][this.side]),
                      p(this, 'afterGetTitlePosition', {
                        titlePosition: (t = {
                          x: t ? n + l : e + (r ? this.width : 0) + a + l,
                          y: t ? e + h - (r ? this.height : 0) + a : n + h
                        })
                      }),
                      t
                    );
                  },
                  renderMinorTick: function(t) {
                    var e = this.chart.hasRendered && m(this.oldMin),
                      i = this.minorTicks;
                    i[t] || (i[t] = new T(this, t, 'minor')),
                      e && i[t].isNew && i[t].render(null, !0),
                      i[t].render(null, !1, 1);
                  },
                  renderTick: function(t, e) {
                    var i = this.isLinked,
                      n = this.ticks,
                      o = this.chart.hasRendered && m(this.oldMin);
                    (!i || (t >= this.min && t <= this.max)) &&
                      (n[t] || (n[t] = new T(this, t)), o && n[t].isNew && n[t].render(e, !0, -1), n[t].render(e));
                  },
                  render: function() {
                    var e,
                      n,
                      o = this,
                      s = o.chart,
                      r = o.options,
                      a = o.isLog,
                      l = o.isLinked,
                      h = o.tickPositions,
                      c = o.axisTitle,
                      d = o.ticks,
                      u = o.minorTicks,
                      f = o.alternateBands,
                      g = r.stackLabels,
                      x = r.alternateGridColor,
                      y = o.tickmarkOffset,
                      v = o.axisLine,
                      M = o.showAxis,
                      k = i(s.renderer.globalAnimation);
                    (o.labelEdge.length = 0),
                      (o.overlap = !1),
                      [d, u, f].forEach(function(t) {
                        b(t, function(t) {
                          t.isActive = !1;
                        });
                      }),
                      (o.hasData() || l) &&
                        (o.minorTickInterval &&
                          !o.categories &&
                          o.getMinorTickPositions().forEach(function(t) {
                            o.renderMinorTick(t);
                          }),
                        h.length &&
                          (h.forEach(function(t, e) {
                            o.renderTick(t, e);
                          }),
                          y &&
                            (0 === o.min || o.single) &&
                            (d[-1] || (d[-1] = new T(o, -1, null, !0)), d[-1].render(-1))),
                        x &&
                          h.forEach(function(i, r) {
                            (n = void 0 !== h[r + 1] ? h[r + 1] + y : o.max - y),
                              0 == r % 2 &&
                                i < o.max &&
                                n <= o.max + (s.polar ? -y : y) &&
                                (f[i] || (f[i] = new t.PlotLineOrBand(o)),
                                (e = i + y),
                                (f[i].options = { from: a ? o.lin2log(e) : e, to: a ? o.lin2log(n) : n, color: x }),
                                f[i].render(),
                                (f[i].isActive = !0));
                          }),
                        o._addedPlotLB ||
                          ((r.plotLines || []).concat(r.plotBands || []).forEach(function(t) {
                            o.addPlotBandOrLine(t);
                          }),
                          (o._addedPlotLB = !0))),
                      [d, u, f].forEach(function(t) {
                        var e,
                          i = [],
                          n = k.duration;
                        b(t, function(t, e) {
                          t.isActive || (t.render(e, !1, 0), (t.isActive = !1), i.push(e));
                        }),
                          P(
                            function() {
                              for (e = i.length; e--; )
                                t[i[e]] && !t[i[e]].isActive && (t[i[e]].destroy(), delete t[i[e]]);
                            },
                            t !== f && s.hasRendered && n ? n : 0
                          );
                      }),
                      v &&
                        (v[v.isPlaced ? 'animate' : 'attr']({ d: this.getLinePath(v.strokeWidth()) }),
                        (v.isPlaced = !0),
                        v[M ? 'show' : 'hide'](!0)),
                      c &&
                        M &&
                        ((r = o.getTitlePosition()),
                        m(r.y)
                          ? (c[c.isNew ? 'attr' : 'animate'](r), (c.isNew = !1))
                          : (c.attr('y', -9999), (c.isNew = !0))),
                      g && g.enabled && o.renderStackTotals(),
                      (o.isDirty = !1),
                      p(this, 'afterRender');
                  },
                  redraw: function() {
                    this.visible &&
                      (this.render(),
                      this.plotLinesAndBands.forEach(function(t) {
                        t.render();
                      })),
                      this.series.forEach(function(t) {
                        t.isDirty = !0;
                      });
                  },
                  keepProps: 'extKey hcEvents names series userMax userMin'.split(' '),
                  destroy: function(t) {
                    var e,
                      i = this,
                      n = i.stacks,
                      o = i.plotLinesAndBands;
                    if (
                      (p(this, 'destroy', { keepEvents: t }),
                      t || k(i),
                      b(n, function(t, e) {
                        c(t), (n[e] = null);
                      }),
                      [i.ticks, i.minorTicks, i.alternateBands].forEach(function(t) {
                        c(t);
                      }),
                      o)
                    )
                      for (t = o.length; t--; ) o[t].destroy();
                    for (e in ('stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar'
                      .split(' ')
                      .forEach(function(t) {
                        i[t] && (i[t] = i[t].destroy());
                      }),
                    i.plotLinesAndBandsGroups))
                      i.plotLinesAndBandsGroups[e] = i.plotLinesAndBandsGroups[e].destroy();
                    b(i, function(t, e) {
                      -1 === i.keepProps.indexOf(e) && delete i[e];
                    });
                  },
                  drawCrosshair: function(t, e) {
                    var i,
                      n,
                      o = this.crosshair,
                      r = M(o.snap, !0),
                      a = this.cross;
                    if (
                      (p(this, 'drawCrosshair', { e: t, point: e }),
                      t || (t = this.cross && this.cross.e),
                      this.crosshair && !1 !== (l(e) || !r))
                    ) {
                      if (
                        (r
                          ? l(e) && (n = M(e.crosshairPos, this.isXAxis ? e.plotX : this.len - e.plotY))
                          : (n = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos)),
                        l(n) &&
                          (i =
                            this.getPlotLinePath(e && (this.isXAxis ? e.x : M(e.stackY, e.y)), null, null, null, n) ||
                            null),
                        !l(i))
                      )
                        return void this.hideCrosshair();
                      (r = this.categories && !this.isRadial),
                        a ||
                          ((this.cross = a = this.chart.renderer
                            .path()
                            .addClass(
                              'highcharts-crosshair highcharts-crosshair-' + (r ? 'category ' : 'thin ') + o.className
                            )
                            .attr({ zIndex: M(o.zIndex, 2) })
                            .add()),
                          this.chart.styledMode ||
                            (a
                              .attr({
                                stroke:
                                  o.color ||
                                  (r
                                    ? s('#ccd6eb')
                                        .setOpacity(0.25)
                                        .get()
                                    : '#cccccc'),
                                'stroke-width': M(o.width, 1)
                              })
                              .css({ 'pointer-events': 'none' }),
                            o.dashStyle && a.attr({ dashstyle: o.dashStyle }))),
                        a.show().attr({ d: i }),
                        r && !o.width && a.attr({ 'stroke-width': this.transA }),
                        (this.cross.e = t);
                    } else this.hideCrosshair();
                    p(this, 'afterDrawCrosshair', { e: t, point: e });
                  },
                  hideCrosshair: function() {
                    this.cross && this.cross.hide(), p(this, 'afterHideCrosshair');
                  }
                }),
                (t.Axis = L)
              );
            }),
            e(i, 'parts/DateTimeAxis.js', [i['parts/Globals.js']], function(t) {
              var e = t.Axis,
                i = t.getMagnitude,
                n = t.normalizeTickInterval,
                o = t.timeUnits;
              (e.prototype.getTimeTicks = function() {
                return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
              }),
                (e.prototype.normalizeTimeTickInterval = function(t, e) {
                  var s,
                    r = e || [
                      ['millisecond', [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                      ['second', [1, 2, 5, 10, 15, 30]],
                      ['minute', [1, 2, 5, 10, 15, 30]],
                      ['hour', [1, 2, 3, 4, 6, 8, 12]],
                      ['day', [1, 2]],
                      ['week', [1, 2]],
                      ['month', [1, 2, 3, 4, 6]],
                      ['year', null]
                    ],
                    a = o[(e = r[r.length - 1])[0]],
                    l = e[1];
                  for (
                    s = 0;
                    s < r.length &&
                    ((a = o[(e = r[s])[0]]),
                    (l = e[1]),
                    !(r[s + 1] && t <= (a * l[l.length - 1] + o[r[s + 1][0]]) / 2));
                    s++
                  );
                  return (
                    a === o.year && t < 5 * a && (l = [1, 2, 5]),
                    {
                      unitRange: a,
                      count: (t = n(t / a, l, 'year' === e[0] ? Math.max(i(t / a), 1) : 1)),
                      unitName: e[0]
                    }
                  );
                });
            }),
            e(i, 'parts/LogarithmicAxis.js', [i['parts/Globals.js']], function(t) {
              var e = t.Axis,
                i = t.getMagnitude,
                n = t.normalizeTickInterval,
                o = t.pick;
              (e.prototype.getLogTickPositions = function(t, e, s, r) {
                var a = this.options,
                  l = this.len,
                  h = [];
                if ((r || (this._minorAutoInterval = null), 0.5 <= t))
                  (t = Math.round(t)), (h = this.getLinearTickPositions(t, e, s));
                else if (0.08 <= t) {
                  var c, d, p, u, f;
                  for (
                    l = Math.floor(e),
                      a = 0.3 < t ? [1, 2, 4] : 0.15 < t ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    l < s + 1 && !f;
                    l++
                  )
                    for (d = a.length, c = 0; c < d && !f; c++)
                      (p = this.log2lin(this.lin2log(l) * a[c])) > e && (!r || u <= s) && void 0 !== u && h.push(u),
                        u > s && (f = !0),
                        (u = p);
                } else
                  (e = this.lin2log(e)),
                    (s = this.lin2log(s)),
                    (t = r ? this.getMinorTickInterval() : a.tickInterval),
                    (t = o(
                      'auto' === t ? null : t,
                      this._minorAutoInterval,
                      ((a.tickPixelInterval / (r ? 5 : 1)) * (s - e)) / ((r ? l / this.tickPositions.length : l) || 1)
                    )),
                    (t = n(t, null, i(t))),
                    (h = this.getLinearTickPositions(t, e, s).map(this.log2lin)),
                    r || (this._minorAutoInterval = t / 5);
                return r || (this.tickInterval = t), h;
              }),
                (e.prototype.log2lin = function(t) {
                  return Math.log(t) / Math.LN10;
                }),
                (e.prototype.lin2log = function(t) {
                  return Math.pow(10, t);
                });
            }),
            e(i, 'parts/PlotLineOrBand.js', [i['parts/Globals.js'], i['parts/Axis.js']], function(t, e) {
              var i = t.arrayMax,
                n = t.arrayMin,
                o = t.defined,
                s = t.destroyObjectProperties,
                r = t.erase,
                a = t.merge,
                l = t.pick;
              (t.PlotLineOrBand = function(t, e) {
                (this.axis = t), e && ((this.options = e), (this.id = e.id));
              }),
                (t.PlotLineOrBand.prototype = {
                  render: function() {
                    t.fireEvent(this, 'render');
                    var e = this,
                      i = e.axis,
                      n = i.horiz,
                      s = e.options,
                      r = s.label,
                      h = e.label,
                      c = s.to,
                      d = s.from,
                      p = s.value,
                      u = o(d) && o(c),
                      f = o(p),
                      g = e.svgElem,
                      m = !g,
                      x = [],
                      y = s.color,
                      v = l(s.zIndex, 0),
                      b = s.events,
                      M = ((x = { class: 'highcharts-plot-' + (u ? 'band ' : 'line ') + (s.className || '') }), {}),
                      k = i.chart.renderer,
                      w = u ? 'bands' : 'lines';
                    if (
                      (i.isLog && ((d = i.log2lin(d)), (c = i.log2lin(c)), (p = i.log2lin(p))),
                      i.chart.styledMode ||
                        (f
                          ? ((x.stroke = y), (x['stroke-width'] = s.width), s.dashStyle && (x.dashstyle = s.dashStyle))
                          : u &&
                            (y && (x.fill = y),
                            s.borderWidth && ((x.stroke = s.borderColor), (x['stroke-width'] = s.borderWidth)))),
                      (M.zIndex = v),
                      (y = i.plotLinesAndBandsGroups[(w += '-' + v)]) ||
                        (i.plotLinesAndBandsGroups[w] = y = k
                          .g('plot-' + w)
                          .attr(M)
                          .add()),
                      m &&
                        (e.svgElem = g = k
                          .path()
                          .attr(x)
                          .add(y)),
                      f)
                    )
                      x = i.getPlotLinePath(p, g.strokeWidth());
                    else {
                      if (!u) return;
                      x = i.getPlotBandPath(d, c, s);
                    }
                    return (
                      (m || !g.d) && x && x.length
                        ? (g.attr({ d: x }),
                          b &&
                            t.objectEach(b, function(t, i) {
                              g.on(i, function(t) {
                                b[i].apply(e, [t]);
                              });
                            }))
                        : g &&
                          (x ? (g.show(!0), g.animate({ d: x })) : g.d && (g.hide(), h && (e.label = h = h.destroy()))),
                      r && o(r.text) && x && x.length && 0 < i.width && 0 < i.height && !x.isFlat
                        ? ((r = a(
                            {
                              align: n && u && 'center',
                              x: n ? !u && 4 : 10,
                              verticalAlign: !n && u && 'middle',
                              y: n ? (u ? 16 : 10) : u ? 6 : -4,
                              rotation: n && !u && 90
                            },
                            r
                          )),
                          this.renderLabel(r, x, u, v))
                        : h && h.hide(),
                      e
                    );
                  },
                  renderLabel: function(t, e, o, s) {
                    var r = this.label,
                      a = this.axis.chart.renderer;
                    r ||
                      (((r = {
                        align: t.textAlign || t.align,
                        rotation: t.rotation,
                        class: 'highcharts-plot-' + (o ? 'band' : 'line') + '-label ' + (t.className || '')
                      }).zIndex = s),
                      (this.label = r = a
                        .text(t.text, 0, 0, t.useHTML)
                        .attr(r)
                        .add()),
                      this.axis.chart.styledMode || r.css(t.style)),
                      (s = e.xBounds || [e[1], e[4], o ? e[6] : e[1]]),
                      (e = e.yBounds || [e[2], e[5], o ? e[7] : e[2]]),
                      (o = n(s)),
                      (a = n(e)),
                      r.align(t, !1, { x: o, y: a, width: i(s) - o, height: i(e) - a }),
                      r.show(!0);
                  },
                  destroy: function() {
                    r(this.axis.plotLinesAndBands, this), delete this.axis, s(this);
                  }
                }),
                t.extend(e.prototype, {
                  getPlotBandPath: function(t, e) {
                    var i,
                      n = this.getPlotLinePath(e, null, null, !0),
                      o = this.getPlotLinePath(t, null, null, !0),
                      s = [],
                      r = this.horiz,
                      a = 1;
                    if (((t = (t < this.min && e < this.min) || (t > this.max && e > this.max)), o && n))
                      for (t && ((i = o.toString() === n.toString()), (a = 0)), t = 0; t < o.length; t += 6)
                        r && n[t + 1] === o[t + 1]
                          ? ((n[t + 1] += a), (n[t + 4] += a))
                          : r || n[t + 2] !== o[t + 2] || ((n[t + 2] += a), (n[t + 5] += a)),
                          s.push(
                            'M',
                            o[t + 1],
                            o[t + 2],
                            'L',
                            o[t + 4],
                            o[t + 5],
                            n[t + 4],
                            n[t + 5],
                            n[t + 1],
                            n[t + 2],
                            'z'
                          ),
                          (s.isFlat = i);
                    return s;
                  },
                  addPlotBand: function(t) {
                    return this.addPlotBandOrLine(t, 'plotBands');
                  },
                  addPlotLine: function(t) {
                    return this.addPlotBandOrLine(t, 'plotLines');
                  },
                  addPlotBandOrLine: function(e, i) {
                    var n = new t.PlotLineOrBand(this, e).render(),
                      o = this.userOptions;
                    return n && (i && ((o[i] = o[i] || []), o[i].push(e)), this.plotLinesAndBands.push(n)), n;
                  },
                  removePlotBandOrLine: function(t) {
                    for (var e = this.plotLinesAndBands, i = this.options, n = this.userOptions, o = e.length; o--; )
                      e[o].id === t && e[o].destroy();
                    [i.plotLines || [], n.plotLines || [], i.plotBands || [], n.plotBands || []].forEach(function(e) {
                      for (o = e.length; o--; ) e[o].id === t && r(e, e[o]);
                    });
                  },
                  removePlotBand: function(t) {
                    this.removePlotBandOrLine(t);
                  },
                  removePlotLine: function(t) {
                    this.removePlotBandOrLine(t);
                  }
                });
            }),
            e(i, 'parts/Tooltip.js', [i['parts/Globals.js']], function(t) {
              var e = t.doc,
                i = t.extend,
                n = t.format,
                o = t.isNumber,
                s = t.merge,
                r = t.pick,
                a = t.splat,
                l = t.syncTimeout,
                h = t.timeUnits;
              (t.Tooltip = function() {
                this.init.apply(this, arguments);
              }),
                (t.Tooltip.prototype = {
                  init: function(t, e) {
                    (this.chart = t),
                      (this.options = e),
                      (this.crosshairs = []),
                      (this.now = { x: 0, y: 0 }),
                      (this.isHidden = !0),
                      (this.split = e.split && !t.inverted),
                      (this.shared = e.shared || this.split),
                      (this.outside = e.outside && !this.split);
                  },
                  cleanSplit: function(t) {
                    this.chart.series.forEach(function(e) {
                      var i = e && e.tt;
                      i && (!i.isActive || t ? (e.tt = i.destroy()) : (i.isActive = !1));
                    });
                  },
                  applyFilter: function() {
                    var t = this.chart;
                    t.renderer.definition({
                      tagName: 'filter',
                      id: 'drop-shadow-' + t.index,
                      opacity: 0.5,
                      children: [
                        { tagName: 'feGaussianBlur', in: 'SourceAlpha', stdDeviation: 1 },
                        { tagName: 'feOffset', dx: 1, dy: 1 },
                        {
                          tagName: 'feComponentTransfer',
                          children: [{ tagName: 'feFuncA', type: 'linear', slope: 0.3 }]
                        },
                        {
                          tagName: 'feMerge',
                          children: [{ tagName: 'feMergeNode' }, { tagName: 'feMergeNode', in: 'SourceGraphic' }]
                        }
                      ]
                    }),
                      t.renderer.definition({
                        tagName: 'style',
                        textContent: '.highcharts-tooltip-' + t.index + '{filter:url(#drop-shadow-' + t.index + ')}'
                      });
                  },
                  getLabel: function() {
                    var e,
                      i,
                      n = this,
                      o = this.chart.renderer,
                      s = this.chart.styledMode,
                      r = this.options;
                    return (
                      this.label ||
                        (this.outside &&
                          ((this.container = e = t.doc.createElement('div')),
                          (e.className = 'highcharts-tooltip-container'),
                          t.css(e, {
                            position: 'absolute',
                            top: '1px',
                            pointerEvents: r.style && r.style.pointerEvents
                          }),
                          t.doc.body.appendChild(e),
                          (this.renderer = o = new t.Renderer(e, 0, 0))),
                        this.split
                          ? (this.label = o.g('tooltip'))
                          : ((this.label = o
                              .label('', 0, 0, r.shape || 'callout', null, null, r.useHTML, null, 'tooltip')
                              .attr({ padding: r.padding, r: r.borderRadius })),
                            s ||
                              this.label
                                .attr({ fill: r.backgroundColor, 'stroke-width': r.borderWidth })
                                .css(r.style)
                                .shadow(r.shadow)),
                        s && (this.applyFilter(), this.label.addClass('highcharts-tooltip-' + this.chart.index)),
                        this.outside &&
                          ((i = { x: this.label.xSetter, y: this.label.ySetter }),
                          (this.label.xSetter = function(t, o) {
                            i[o].call(this.label, n.distance), (e.style.left = t + 'px');
                          }),
                          (this.label.ySetter = function(t, o) {
                            i[o].call(this.label, n.distance), (e.style.top = t + 'px');
                          })),
                        this.label.attr({ zIndex: 8 }).add()),
                      this.label
                    );
                  },
                  update: function(t) {
                    this.destroy(),
                      s(!0, this.chart.options.tooltip.userOptions, t),
                      this.init(this.chart, s(!0, this.options, t));
                  },
                  destroy: function() {
                    this.label && (this.label = this.label.destroy()),
                      this.split && this.tt && (this.cleanSplit(this.chart, !0), (this.tt = this.tt.destroy())),
                      this.renderer && ((this.renderer = this.renderer.destroy()), t.discardElement(this.container)),
                      t.clearTimeout(this.hideTimer),
                      t.clearTimeout(this.tooltipTimeout);
                  },
                  move: function(e, n, o, s) {
                    var r = this,
                      a = r.now,
                      l = !1 !== r.options.animation && !r.isHidden && (1 < Math.abs(e - a.x) || 1 < Math.abs(n - a.y)),
                      h = r.followPointer || 1 < r.len;
                    i(a, {
                      x: l ? (2 * a.x + e) / 3 : e,
                      y: l ? (a.y + n) / 2 : n,
                      anchorX: h ? void 0 : l ? (2 * a.anchorX + o) / 3 : o,
                      anchorY: h ? void 0 : l ? (a.anchorY + s) / 2 : s
                    }),
                      r.getLabel().attr(a),
                      l &&
                        (t.clearTimeout(this.tooltipTimeout),
                        (this.tooltipTimeout = setTimeout(function() {
                          r && r.move(e, n, o, s);
                        }, 32)));
                  },
                  hide: function(e) {
                    var i = this;
                    t.clearTimeout(this.hideTimer),
                      (e = r(e, this.options.hideDelay, 500)),
                      this.isHidden ||
                        (this.hideTimer = l(function() {
                          i.getLabel()[e ? 'fadeOut' : 'hide'](), (i.isHidden = !0);
                        }, e));
                  },
                  getAnchor: function(t, e) {
                    var i,
                      n,
                      o = this.chart,
                      s = o.pointer,
                      r = o.inverted,
                      l = o.plotTop,
                      h = o.plotLeft,
                      c = 0,
                      d = 0;
                    return (
                      (t = a(t)),
                      this.followPointer && e
                        ? (void 0 === e.chartX && (e = s.normalize(e)), (t = [e.chartX - o.plotLeft, e.chartY - l]))
                        : t[0].tooltipPos
                        ? (t = t[0].tooltipPos)
                        : (t.forEach(function(t) {
                            (i = t.series.yAxis),
                              (n = t.series.xAxis),
                              (c += t.plotX + (!r && n ? n.left - h : 0)),
                              (d += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!r && i ? i.top - l : 0));
                          }),
                          (c /= t.length),
                          (d /= t.length),
                          (t = [
                            r ? o.plotWidth - d : c,
                            this.shared && !r && 1 < t.length && e ? e.chartY - l : r ? o.plotHeight - c : d
                          ])),
                      t.map(Math.round)
                    );
                  },
                  getPosition: function(t, i, n) {
                    var o,
                      s = this.chart,
                      a = this.distance,
                      l = {},
                      h = (s.inverted && n.h) || 0,
                      c = this.outside,
                      d = c ? e.documentElement.clientWidth - 2 * a : s.chartWidth,
                      p = c
                        ? Math.max(
                            e.body.scrollHeight,
                            e.documentElement.scrollHeight,
                            e.body.offsetHeight,
                            e.documentElement.offsetHeight,
                            e.documentElement.clientHeight
                          )
                        : s.chartHeight,
                      u = s.pointer.chartPosition,
                      f = [
                        'y',
                        p,
                        i,
                        (c ? u.top - a : 0) + n.plotY + s.plotTop,
                        c ? 0 : s.plotTop,
                        c ? p : s.plotTop + s.plotHeight
                      ],
                      g = [
                        'x',
                        d,
                        t,
                        (c ? u.left - a : 0) + n.plotX + s.plotLeft,
                        c ? 0 : s.plotLeft,
                        c ? d : s.plotLeft + s.plotWidth
                      ],
                      m = !this.followPointer && r(n.ttBelow, !s.inverted == !!n.negative),
                      x = function(t) {
                        var e = f;
                        (f = g), (g = e), (o = t);
                      },
                      y = function() {
                        !1 !==
                        function(t, e, i, n, o, s) {
                          var r = i < n - a,
                            c = n + a + i < e,
                            d = n - a - i;
                          if (((n += a), m && c)) l[t] = n;
                          else if (!m && r) l[t] = d;
                          else if (r) l[t] = Math.min(s - i, 0 > d - h ? d : d - h);
                          else {
                            if (!c) return !1;
                            l[t] = Math.max(o, n + h + i > e ? n : n + h);
                          }
                        }.apply(0, f)
                          ? !1 !==
                              function(t, e, i, n) {
                                var o;
                                return (
                                  n < a || n > e - a
                                    ? (o = !1)
                                    : (l[t] = n < i / 2 ? 1 : n > e - i / 2 ? e - i - 2 : n - i / 2),
                                  o
                                );
                              }.apply(0, g) ||
                            o ||
                            (x(!0), y())
                          : o
                          ? (l.x = l.y = 0)
                          : (x(!0), y());
                      };
                    return (s.inverted || 1 < this.len) && x(), y(), l;
                  },
                  defaultFormatter: function(t) {
                    var e,
                      i = this.points || a(this);
                    return (
                      (e = (e = [t.tooltipFooterHeaderFormatter(i[0])]).concat(t.bodyFormatter(i))).push(
                        t.tooltipFooterHeaderFormatter(i[0], !0)
                      ),
                      e
                    );
                  },
                  refresh: function(e, i) {
                    var n,
                      o,
                      s,
                      l = this.chart,
                      h = this.options,
                      c = e,
                      d = {},
                      p = [];
                    (s = h.formatter || this.defaultFormatter), (d = this.shared);
                    var u = l.styledMode,
                      f = [];
                    h.enabled &&
                      (t.clearTimeout(this.hideTimer),
                      (this.followPointer = a(c)[0].series.tooltipOptions.followPointer),
                      (i = (o = this.getAnchor(c, i))[0]),
                      (n = o[1]),
                      !d || (c.series && c.series.noSharedTooltip)
                        ? (d = c.getLabelConfig())
                        : ((f = l.pointer.getActiveSeries(c)),
                          l.series.forEach(function(t) {
                            (t.options.inactiveOtherPoints || -1 === f.indexOf(t)) && t.setState('inactive', !0);
                          }),
                          c.forEach(function(t) {
                            t.setState('hover'), p.push(t.getLabelConfig());
                          }),
                          ((d = { x: c[0].category, y: c[0].y }).points = p),
                          (c = c[0])),
                      (this.len = p.length),
                      (s = s.call(d, this)),
                      (this.distance = r((d = c.series).tooltipOptions.distance, 16)),
                      !1 === s
                        ? this.hide()
                        : ((l = this.getLabel()),
                          this.isHidden && l.attr({ opacity: 1 }).show(),
                          this.split
                            ? this.renderSplit(s, a(e))
                            : ((h.style.width && !u) || l.css({ width: this.chart.spacingBox.width }),
                              l.attr({ text: s && s.join ? s.join('') : s }),
                              l
                                .removeClass(/highcharts-color-[\d]+/g)
                                .addClass('highcharts-color-' + r(c.colorIndex, d.colorIndex)),
                              u || l.attr({ stroke: h.borderColor || c.color || d.color || '#666666' }),
                              this.updatePosition({
                                plotX: i,
                                plotY: n,
                                negative: c.negative,
                                ttBelow: c.ttBelow,
                                h: o[2] || 0
                              })),
                          (this.isHidden = !1)),
                      t.fireEvent(this, 'refresh'));
                  },
                  renderSplit: function(e, i) {
                    var n,
                      o = this,
                      s = [],
                      a = this.chart,
                      l = a.renderer,
                      h = !0,
                      c = this.options,
                      d = 0,
                      p = this.getLabel(),
                      u = a.plotTop;
                    t.isString(e) && (e = [!1, e]),
                      e.slice(0, i.length + 1).forEach(function(t, e) {
                        if (!1 !== t && '' !== t) {
                          var f =
                              (e = i[e - 1] || { isHeader: !0, plotX: i[0].plotX, plotY: a.plotHeight }).series || o,
                            g = f.tt,
                            m = e.series || {},
                            x = 'highcharts-color-' + r(e.colorIndex, m.colorIndex, 'none');
                          g ||
                            ((g = { padding: c.padding, r: c.borderRadius }),
                            a.styledMode ||
                              ((g.fill = c.backgroundColor),
                              (g.stroke = c.borderColor || e.color || m.color || '#333333'),
                              (g['stroke-width'] = c.borderWidth)),
                            (f.tt = g = l
                              .label(
                                null,
                                null,
                                null,
                                (e.isHeader ? c.headerShape : c.shape) || 'callout',
                                null,
                                null,
                                c.useHTML
                              )
                              .addClass('highcharts-tooltip-box ' + x)
                              .attr(g)
                              .add(p))),
                            (g.isActive = !0),
                            g.attr({ text: t }),
                            a.styledMode || g.css(c.style).shadow(c.shadow),
                            (m = (t = g.getBBox()).width + g.strokeWidth()),
                            e.isHeader
                              ? ((d = t.height),
                                a.xAxis[0].opposite && ((n = !0), (u -= d)),
                                (m = Math.max(
                                  0,
                                  Math.min(
                                    e.plotX + a.plotLeft - m / 2,
                                    a.chartWidth + (a.scrollablePixels ? a.scrollablePixels - a.marginRight : 0) - m
                                  )
                                )))
                              : (m = e.plotX + a.plotLeft - r(c.distance, 16) - m),
                            0 > m && (h = !1),
                            (t = (e.series && e.series.yAxis && e.series.yAxis.pos) + (e.plotY || 0)),
                            (t -= u),
                            e.isHeader && (t = n ? -d : a.plotHeight + d),
                            s.push({
                              target: t,
                              rank: e.isHeader ? 1 : 0,
                              size: f.tt.getBBox().height + 1,
                              point: e,
                              x: m,
                              tt: g
                            });
                        }
                      }),
                      this.cleanSplit(),
                      c.positioner &&
                        s.forEach(function(t) {
                          var e = c.positioner.call(o, t.tt.getBBox().width, t.size, t.point);
                          (t.x = e.x), (t.align = 0), (t.target = e.y), (t.rank = r(e.rank, t.rank));
                        }),
                      t.distribute(s, a.plotHeight + d),
                      s.forEach(function(t) {
                        var e = t.point,
                          i = e.series;
                        t.tt.attr({
                          visibility: void 0 === t.pos ? 'hidden' : 'inherit',
                          x: h || e.isHeader || c.positioner ? t.x : e.plotX + a.plotLeft + o.distance,
                          y: t.pos + u,
                          anchorX: e.isHeader ? e.plotX + a.plotLeft : e.plotX + i.xAxis.pos,
                          anchorY: e.isHeader ? a.plotTop + a.plotHeight / 2 : e.plotY + i.yAxis.pos
                        });
                      });
                  },
                  updatePosition: function(t) {
                    var e,
                      i = this.chart,
                      n = this.getLabel(),
                      o = (this.options.positioner || this.getPosition).call(this, n.width, n.height, t),
                      s = t.plotX + i.plotLeft;
                    (t = t.plotY + i.plotTop),
                      this.outside &&
                        (this.renderer.setSize(
                          n.width + (e = (this.options.borderWidth || 0) + 2 * this.distance),
                          n.height + e,
                          !1
                        ),
                        (s += i.pointer.chartPosition.left - o.x),
                        (t += i.pointer.chartPosition.top - o.y)),
                      this.move(Math.round(o.x), Math.round(o.y || 0), s, t);
                  },
                  getDateFormat: function(t, e, i, n) {
                    var o,
                      s,
                      r = this.chart.time,
                      a = r.dateFormat('%m-%d %H:%M:%S.%L', e),
                      l = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 },
                      c = 'millisecond';
                    for (s in h) {
                      if (t === h.week && +r.dateFormat('%w', e) === i && '00:00:00.000' === a.substr(6)) {
                        s = 'week';
                        break;
                      }
                      if (h[s] > t) {
                        s = c;
                        break;
                      }
                      if (l[s] && a.substr(l[s]) !== '01-01 00:00:00.000'.substr(l[s])) break;
                      'week' !== s && (c = s);
                    }
                    return s && (o = r.resolveDTLFormat(n[s]).main), o;
                  },
                  getXDateFormat: function(t, e, i) {
                    e = e.dateTimeLabelFormats;
                    var n = i && i.closestPointRange;
                    return (n ? this.getDateFormat(n, t.x, i.options.startOfWeek, e) : e.day) || e.year;
                  },
                  tooltipFooterHeaderFormatter: function(e, i) {
                    var s = i ? 'footer' : 'header',
                      r = e.series,
                      a = r.tooltipOptions,
                      l = a.xDateFormat,
                      h = r.xAxis,
                      c = h && 'datetime' === h.options.type && o(e.key),
                      d = a[s + 'Format'];
                    return (
                      t.fireEvent(this, 'headerFormatter', (i = { isFooter: i, labelConfig: e }), function(t) {
                        c && !l && (l = this.getXDateFormat(e, a, h)),
                          c &&
                            l &&
                            ((e.point && e.point.tooltipDateKeys) || ['key']).forEach(function(t) {
                              d = d.replace('{point.' + t + '}', '{point.' + t + ':' + l + '}');
                            }),
                          r.chart.styledMode && (d = this.styledModeFormat(d)),
                          (t.text = n(d, { point: e, series: r }, this.chart.time));
                      }),
                      i.text
                    );
                  },
                  bodyFormatter: function(t) {
                    return t.map(function(t) {
                      var e = t.series.tooltipOptions;
                      return (e[(t.point.formatPrefix || 'point') + 'Formatter'] || t.point.tooltipFormatter).call(
                        t.point,
                        e[(t.point.formatPrefix || 'point') + 'Format'] || ''
                      );
                    });
                  },
                  styledModeFormat: function(t) {
                    return t
                      .replace('style="font-size: 10px"', 'class="highcharts-header"')
                      .replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"');
                  }
                });
            }),
            e(i, 'parts/Pointer.js', [i['parts/Globals.js']], function(t) {
              var e = t.addEvent,
                i = t.attr,
                n = t.charts,
                o = t.color,
                s = t.css,
                r = t.defined,
                a = t.extend,
                l = t.find,
                h = t.fireEvent,
                c = t.isNumber,
                d = t.isObject,
                p = t.offset,
                u = t.pick,
                f = t.splat,
                g = t.Tooltip;
              (t.Pointer = function(t, e) {
                this.init(t, e);
              }),
                (t.Pointer.prototype = {
                  init: function(t, e) {
                    (this.options = e),
                      (this.chart = t),
                      (this.runChartClick = e.chart.events && !!e.chart.events.click),
                      (this.pinchDown = []),
                      (this.lastValidTouch = {}),
                      g &&
                        ((t.tooltip = new g(t, e.tooltip)), (this.followTouchMove = u(e.tooltip.followTouchMove, !0))),
                      this.setDOMEvents();
                  },
                  zoomOption: function(t) {
                    var e = (n = this.chart).options.chart,
                      i = e.zoomType || '',
                      n = n.inverted;
                    /touch/.test(t.type) && (i = u(e.pinchType, i)),
                      (this.zoomX = t = /x/.test(i)),
                      (this.zoomY = i = /y/.test(i)),
                      (this.zoomHor = (t && !n) || (i && n)),
                      (this.zoomVert = (i && !n) || (t && n)),
                      (this.hasZoom = t || i);
                  },
                  normalize: function(t, e) {
                    var i;
                    return (
                      (i = t.touches ? (t.touches.length ? t.touches.item(0) : t.changedTouches[0]) : t),
                      e || (this.chartPosition = e = p(this.chart.container)),
                      a(t, { chartX: Math.round(i.pageX - e.left), chartY: Math.round(i.pageY - e.top) })
                    );
                  },
                  getCoordinates: function(t) {
                    var e = { xAxis: [], yAxis: [] };
                    return (
                      this.chart.axes.forEach(function(i) {
                        e[i.isXAxis ? 'xAxis' : 'yAxis'].push({
                          axis: i,
                          value: i.toValue(t[i.horiz ? 'chartX' : 'chartY'])
                        });
                      }),
                      e
                    );
                  },
                  findNearestKDPoint: function(t, e, i) {
                    var n;
                    return (
                      t.forEach(function(t) {
                        var o = !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf('y');
                        if (((t = t.searchPoint(i, o)), (o = d(t, !0)) && !(o = !d(n, !0)))) {
                          var s = n.dist - t.dist,
                            r = (t.series.group && t.series.group.zIndex) - (n.series.group && n.series.group.zIndex);
                          o =
                            0 <
                            (0 != (o = n.distX - t.distX) && e
                              ? o
                              : 0 !== s
                              ? s
                              : 0 !== r
                              ? r
                              : n.series.index > t.series.index
                              ? -1
                              : 1);
                        }
                        o && (n = t);
                      }),
                      n
                    );
                  },
                  getPointFromEvent: function(t) {
                    t = t.target;
                    for (var e; t && !e; ) (e = t.point), (t = t.parentNode);
                    return e;
                  },
                  getChartCoordinatesFromPoint: function(t, e) {
                    var i = (n = t.series).xAxis,
                      n = n.yAxis,
                      o = u(t.clientX, t.plotX),
                      s = t.shapeArgs;
                    return i && n
                      ? e
                        ? { chartX: i.len + i.pos - o, chartY: n.len + n.pos - t.plotY }
                        : { chartX: o + i.pos, chartY: t.plotY + n.pos }
                      : s && s.x && s.y
                      ? { chartX: s.x, chartY: s.y }
                      : void 0;
                  },
                  getHoverData: function(t, e, i, n, o, s) {
                    var r,
                      a = [];
                    n = !(!n || !t);
                    var h =
                      e && !e.stickyTracking
                        ? [e]
                        : i.filter(function(t) {
                            return (
                              t.visible &&
                              !(!o && t.directTouch) &&
                              u(t.options.enableMouseTracking, !0) &&
                              t.stickyTracking
                            );
                          });
                    return (
                      (e = (r = n ? t : this.findNearestKDPoint(h, o, s)) && r.series),
                      r &&
                        (o && !e.noSharedTooltip
                          ? (h = i.filter(function(t) {
                              return (
                                t.visible &&
                                !(!o && t.directTouch) &&
                                u(t.options.enableMouseTracking, !0) &&
                                !t.noSharedTooltip
                              );
                            })).forEach(function(t) {
                              var e = l(t.points, function(t) {
                                return t.x === r.x && !t.isNull;
                              });
                              d(e) && (t.chart.isBoosting && (e = t.getPoint(e)), a.push(e));
                            })
                          : a.push(r)),
                      { hoverPoint: r, hoverSeries: e, hoverPoints: a }
                    );
                  },
                  runPointActions: function(i, o) {
                    var s,
                      r = this.chart,
                      a = r.tooltip && r.tooltip.options.enabled ? r.tooltip : void 0,
                      l = !!a && a.shared,
                      h = this.getHoverData(
                        (d = o || r.hoverPoint),
                        (h = (d && d.series) || r.hoverSeries),
                        r.series,
                        'touchmove' !== i.type && (!!o || (h && h.directTouch && this.isDirectTouch)),
                        l,
                        i
                      ),
                      c = [],
                      d = h.hoverPoint;
                    if (
                      ((s = h.hoverPoints),
                      (o = (h = h.hoverSeries) && h.tooltipOptions.followPointer),
                      (l = l && h && !h.noSharedTooltip),
                      d && (d !== r.hoverPoint || (a && a.isHidden)))
                    ) {
                      if (
                        ((r.hoverPoints || []).forEach(function(t) {
                          -1 === s.indexOf(t) && t.setState();
                        }),
                        r.hoverSeries !== h && h.onMouseOver(),
                        (c = this.getActiveSeries(s)),
                        r.series.forEach(function(t) {
                          (t.options.inactiveOtherPoints || -1 === c.indexOf(t)) && t.setState('inactive', !0);
                        }),
                        (s || []).forEach(function(t) {
                          t.setState('hover');
                        }),
                        r.hoverPoint && r.hoverPoint.firePointEvent('mouseOut'),
                        !d.series)
                      )
                        return;
                      d.firePointEvent('mouseOver'),
                        (r.hoverPoints = s),
                        (r.hoverPoint = d),
                        a && a.refresh(l ? s : d, i);
                    } else
                      o &&
                        a &&
                        !a.isHidden &&
                        ((d = a.getAnchor([{}], i)), a.updatePosition({ plotX: d[0], plotY: d[1] }));
                    this.unDocMouseMove ||
                      (this.unDocMouseMove = e(r.container.ownerDocument, 'mousemove', function(e) {
                        var i = n[t.hoverChartIndex];
                        i && i.pointer.onDocumentMouseMove(e);
                      })),
                      r.axes.forEach(function(e) {
                        var n = u(e.crosshair.snap, !0),
                          o = n
                            ? t.find(s, function(t) {
                                return t.series[e.coll] === e;
                              })
                            : void 0;
                        o || !n ? e.drawCrosshair(i, o) : e.hideCrosshair();
                      });
                  },
                  getActiveSeries: function(t) {
                    var e,
                      i = [];
                    return (
                      (t || []).forEach(function(t) {
                        i.push((e = t.series)),
                          e.linkedParent && i.push(e.linkedParent),
                          e.linkedSeries && (i = i.concat(e.linkedSeries)),
                          e.navigatorSeries && i.push(e.navigatorSeries);
                      }),
                      i
                    );
                  },
                  reset: function(t, e) {
                    var i = this.chart,
                      n = i.hoverSeries,
                      o = i.hoverPoint,
                      s = i.hoverPoints,
                      r = i.tooltip,
                      a = r && r.shared ? s : o;
                    t &&
                      a &&
                      f(a).forEach(function(e) {
                        e.series.isCartesian && void 0 === e.plotX && (t = !1);
                      }),
                      t
                        ? r &&
                          a &&
                          f(a).length &&
                          (r.refresh(a),
                          r.shared && s
                            ? s.forEach(function(t) {
                                t.setState(t.state, !0),
                                  t.series.isCartesian &&
                                    (t.series.xAxis.crosshair && t.series.xAxis.drawCrosshair(null, t),
                                    t.series.yAxis.crosshair && t.series.yAxis.drawCrosshair(null, t));
                              })
                            : o &&
                              (o.setState(o.state, !0),
                              i.axes.forEach(function(t) {
                                t.crosshair && t.drawCrosshair(null, o);
                              })))
                        : (o && o.onMouseOut(),
                          s &&
                            s.forEach(function(t) {
                              t.setState();
                            }),
                          n && n.onMouseOut(),
                          r && r.hide(e),
                          this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()),
                          i.axes.forEach(function(t) {
                            t.hideCrosshair();
                          }),
                          (this.hoverX = i.hoverPoints = i.hoverPoint = null));
                  },
                  scaleGroups: function(t, e) {
                    var i,
                      n = this.chart;
                    n.series.forEach(function(o) {
                      (i = t || o.getPlotBox()),
                        o.xAxis &&
                          o.xAxis.zoomEnabled &&
                          o.group &&
                          (o.group.attr(i),
                          o.markerGroup && (o.markerGroup.attr(i), o.markerGroup.clip(e ? n.clipRect : null)),
                          o.dataLabelsGroup && o.dataLabelsGroup.attr(i));
                    }),
                      n.clipRect.attr(e || n.clipBox);
                  },
                  dragStart: function(t) {
                    var e = this.chart;
                    (e.mouseIsDown = t.type),
                      (e.cancelClick = !1),
                      (e.mouseDownX = this.mouseDownX = t.chartX),
                      (e.mouseDownY = this.mouseDownY = t.chartY);
                  },
                  drag: function(t) {
                    var e,
                      i = this.chart,
                      n = i.options.chart,
                      s = t.chartX,
                      r = t.chartY,
                      a = this.zoomHor,
                      l = this.zoomVert,
                      h = i.plotLeft,
                      c = i.plotTop,
                      d = i.plotWidth,
                      p = i.plotHeight,
                      u = this.selectionMarker,
                      f = this.mouseDownX,
                      g = this.mouseDownY,
                      m = n.panKey && t[n.panKey + 'Key'];
                    (u && u.touch) ||
                      (s < h ? (s = h) : s > h + d && (s = h + d),
                      r < c ? (r = c) : r > c + p && (r = c + p),
                      (this.hasDragged = Math.sqrt(Math.pow(f - s, 2) + Math.pow(g - r, 2))),
                      10 < this.hasDragged &&
                        ((e = i.isInsidePlot(f - h, g - c)),
                        i.hasCartesianSeries &&
                          (this.zoomX || this.zoomY) &&
                          e &&
                          !m &&
                          !u &&
                          ((this.selectionMarker = u = i.renderer
                            .rect(h, c, a ? 1 : d, l ? 1 : p, 0)
                            .attr({ class: 'highcharts-selection-marker', zIndex: 7 })
                            .add()),
                          i.styledMode ||
                            u.attr({
                              fill:
                                n.selectionMarkerFill ||
                                o('#335cad')
                                  .setOpacity(0.25)
                                  .get()
                            })),
                        u && a && ((s -= f), u.attr({ width: Math.abs(s), x: (0 < s ? 0 : s) + f })),
                        u && l && ((s = r - g), u.attr({ height: Math.abs(s), y: (0 < s ? 0 : s) + g })),
                        e && !u && n.panning && i.pan(t, n.panning)));
                  },
                  drop: function(t) {
                    var e = this,
                      i = this.chart,
                      n = this.hasPinched;
                    if (this.selectionMarker) {
                      var o,
                        l = { originalEvent: t, xAxis: [], yAxis: [] },
                        d = this.selectionMarker,
                        p = d.attr ? d.attr('x') : d.x,
                        u = d.attr ? d.attr('y') : d.y,
                        f = d.attr ? d.attr('width') : d.width,
                        g = d.attr ? d.attr('height') : d.height;
                      (this.hasDragged || n) &&
                        (i.axes.forEach(function(i) {
                          if (i.zoomEnabled && r(i.min) && (n || e[{ xAxis: 'zoomX', yAxis: 'zoomY' }[i.coll]])) {
                            var s = 'touchend' === t.type ? i.minPixelPadding : 0,
                              a = i.toValue(((h = i.horiz) ? p : u) + s),
                              h = i.toValue((h ? p + f : u + g) - s);
                            l[i.coll].push({ axis: i, min: Math.min(a, h), max: Math.max(a, h) }), (o = !0);
                          }
                        }),
                        o &&
                          h(i, 'selection', l, function(t) {
                            i.zoom(a(t, n ? { animation: !1 } : null));
                          })),
                        c(i.index) && (this.selectionMarker = this.selectionMarker.destroy()),
                        n && this.scaleGroups();
                    }
                    i &&
                      c(i.index) &&
                      (s(i.container, { cursor: i._cursor }),
                      (i.cancelClick = 10 < this.hasDragged),
                      (i.mouseIsDown = this.hasDragged = this.hasPinched = !1),
                      (this.pinchDown = []));
                  },
                  onContainerMouseDown: function(t) {
                    2 !== (t = this.normalize(t)).button &&
                      (this.zoomOption(t), t.preventDefault && t.preventDefault(), this.dragStart(t));
                  },
                  onDocumentMouseUp: function(e) {
                    n[t.hoverChartIndex] && n[t.hoverChartIndex].pointer.drop(e);
                  },
                  onDocumentMouseMove: function(t) {
                    var e = this.chart,
                      i = this.chartPosition;
                    (t = this.normalize(t, i)),
                      !i ||
                        this.inClass(t.target, 'highcharts-tracker') ||
                        e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) ||
                        this.reset();
                  },
                  onContainerMouseLeave: function(e) {
                    var i = n[t.hoverChartIndex];
                    i && (e.relatedTarget || e.toElement) && (i.pointer.reset(), (i.pointer.chartPosition = null));
                  },
                  onContainerMouseMove: function(e) {
                    var i = this.chart;
                    (r(t.hoverChartIndex) && n[t.hoverChartIndex] && n[t.hoverChartIndex].mouseIsDown) ||
                      (t.hoverChartIndex = i.index),
                      (e = this.normalize(e)).preventDefault || (e.returnValue = !1),
                      'mousedown' === i.mouseIsDown && this.drag(e),
                      (!this.inClass(e.target, 'highcharts-tracker') &&
                        !i.isInsidePlot(e.chartX - i.plotLeft, e.chartY - i.plotTop)) ||
                        i.openMenu ||
                        this.runPointActions(e);
                  },
                  inClass: function(t, e) {
                    for (var n; t; ) {
                      if ((n = i(t, 'class'))) {
                        if (-1 !== n.indexOf(e)) return !0;
                        if (-1 !== n.indexOf('highcharts-container')) return !1;
                      }
                      t = t.parentNode;
                    }
                  },
                  onTrackerMouseOut: function(t) {
                    var e = this.chart.hoverSeries;
                    (t = t.relatedTarget || t.toElement),
                      (this.isDirectTouch = !1),
                      !e ||
                        !t ||
                        e.stickyTracking ||
                        this.inClass(t, 'highcharts-tooltip') ||
                        (this.inClass(t, 'highcharts-series-' + e.index) && this.inClass(t, 'highcharts-tracker')) ||
                        e.onMouseOut();
                  },
                  onContainerClick: function(t) {
                    var e = this.chart,
                      i = e.hoverPoint,
                      n = e.plotLeft,
                      o = e.plotTop;
                    (t = this.normalize(t)),
                      e.cancelClick ||
                        (i && this.inClass(t.target, 'highcharts-tracker')
                          ? (h(i.series, 'click', a(t, { point: i })), e.hoverPoint && i.firePointEvent('click', t))
                          : (a(t, this.getCoordinates(t)),
                            e.isInsidePlot(t.chartX - n, t.chartY - o) && h(e, 'click', t)));
                  },
                  setDOMEvents: function() {
                    var i = this,
                      n = i.chart.container,
                      o = n.ownerDocument;
                    (n.onmousedown = function(t) {
                      i.onContainerMouseDown(t);
                    }),
                      (n.onmousemove = function(t) {
                        i.onContainerMouseMove(t);
                      }),
                      (n.onclick = function(t) {
                        i.onContainerClick(t);
                      }),
                      (this.unbindContainerMouseLeave = e(n, 'mouseleave', i.onContainerMouseLeave)),
                      t.unbindDocumentMouseUp || (t.unbindDocumentMouseUp = e(o, 'mouseup', i.onDocumentMouseUp)),
                      t.hasTouch &&
                        ((n.ontouchstart = function(t) {
                          i.onContainerTouchStart(t);
                        }),
                        (n.ontouchmove = function(t) {
                          i.onContainerTouchMove(t);
                        }),
                        t.unbindDocumentTouchEnd ||
                          (t.unbindDocumentTouchEnd = e(o, 'touchend', i.onDocumentTouchEnd)));
                  },
                  destroy: function() {
                    var e = this;
                    e.unDocMouseMove && e.unDocMouseMove(),
                      this.unbindContainerMouseLeave(),
                      t.chartCount ||
                        (t.unbindDocumentMouseUp && (t.unbindDocumentMouseUp = t.unbindDocumentMouseUp()),
                        t.unbindDocumentTouchEnd && (t.unbindDocumentTouchEnd = t.unbindDocumentTouchEnd())),
                      clearInterval(e.tooltipTimeout),
                      t.objectEach(e, function(t, i) {
                        e[i] = null;
                      });
                  }
                });
            }),
            e(i, 'parts/TouchPointer.js', [i['parts/Globals.js']], function(t) {
              var e = t.charts,
                i = t.extend,
                n = t.noop,
                o = t.pick;
              i(t.Pointer.prototype, {
                pinchTranslate: function(t, e, i, n, o, s) {
                  this.zoomHor && this.pinchTranslateDirection(!0, t, e, i, n, o, s),
                    this.zoomVert && this.pinchTranslateDirection(!1, t, e, i, n, o, s);
                },
                pinchTranslateDirection: function(t, e, i, n, o, s, r, a) {
                  var l,
                    h,
                    c,
                    d = this.chart,
                    p = t ? 'x' : 'y',
                    u = t ? 'X' : 'Y',
                    f = 'chart' + u,
                    g = t ? 'width' : 'height',
                    m = d['plot' + (t ? 'Left' : 'Top')],
                    x = a || 1,
                    y = d.inverted,
                    v = d.bounds[t ? 'h' : 'v'],
                    b = 1 === e.length,
                    M = e[0][f],
                    k = i[0][f],
                    w = !b && e[1][f],
                    S = !b && i[1][f];
                  (i = function() {
                    !b && 20 < Math.abs(M - w) && (x = a || Math.abs(k - S) / Math.abs(M - w)),
                      (h = (m - k) / x + M),
                      (l = d['plot' + (t ? 'Width' : 'Height')] / x);
                  })(),
                    (e = h) < v.min ? ((e = v.min), (c = !0)) : e + l > v.max && ((e = v.max - l), (c = !0)),
                    c ? ((k -= 0.8 * (k - r[p][0])), b || (S -= 0.8 * (S - r[p][1])), i()) : (r[p] = [k, S]),
                    y || ((s[p] = h - m), (s[g] = l)),
                    (s = y ? 1 / x : x),
                    (o[g] = l),
                    (o[p] = e),
                    (n[y ? (t ? 'scaleY' : 'scaleX') : 'scale' + u] = x),
                    (n['translate' + u] = s * m + (k - s * M));
                },
                pinch: function(t) {
                  var e = this,
                    s = e.chart,
                    r = e.pinchDown,
                    a = t.touches,
                    l = a.length,
                    h = e.lastValidTouch,
                    c = e.hasZoom,
                    d = e.selectionMarker,
                    p = {},
                    u =
                      1 === l && ((e.inClass(t.target, 'highcharts-tracker') && s.runTrackerClick) || e.runChartClick),
                    f = {};
                  1 < l && (e.initiated = !0),
                    c && e.initiated && !u && t.preventDefault(),
                    [].map.call(a, function(t) {
                      return e.normalize(t);
                    }),
                    'touchstart' === t.type
                      ? ([].forEach.call(a, function(t, e) {
                          r[e] = { chartX: t.chartX, chartY: t.chartY };
                        }),
                        (h.x = [r[0].chartX, r[1] && r[1].chartX]),
                        (h.y = [r[0].chartY, r[1] && r[1].chartY]),
                        s.axes.forEach(function(t) {
                          if (t.zoomEnabled) {
                            var e = s.bounds[t.horiz ? 'h' : 'v'],
                              i = t.minPixelPadding,
                              n = t.toPixels(o(t.options.min, t.dataMin)),
                              r = t.toPixels(o(t.options.max, t.dataMax)),
                              a = Math.max(n, r);
                            (e.min = Math.min(t.pos, Math.min(n, r) - i)), (e.max = Math.max(t.pos + t.len, a + i));
                          }
                        }),
                        (e.res = !0))
                      : e.followTouchMove && 1 === l
                      ? this.runPointActions(e.normalize(t))
                      : r.length &&
                        (d || (e.selectionMarker = d = i({ destroy: n, touch: !0 }, s.plotBox)),
                        e.pinchTranslate(r, a, p, d, f, h),
                        (e.hasPinched = c),
                        e.scaleGroups(p, f),
                        e.res && ((e.res = !1), this.reset(!1, 0)));
                },
                touch: function(e, i) {
                  var n,
                    s = this.chart;
                  s.index !== t.hoverChartIndex && this.onContainerMouseLeave({ relatedTarget: !0 }),
                    (t.hoverChartIndex = s.index),
                    1 === e.touches.length
                      ? ((e = this.normalize(e)),
                        s.isInsidePlot(e.chartX - s.plotLeft, e.chartY - s.plotTop) && !s.openMenu
                          ? (i && this.runPointActions(e),
                            'touchmove' === e.type &&
                              (n =
                                !!(i = this.pinchDown)[0] &&
                                4 <=
                                  Math.sqrt(Math.pow(i[0].chartX - e.chartX, 2) + Math.pow(i[0].chartY - e.chartY, 2))),
                            o(n, !0) && this.pinch(e))
                          : i && this.reset())
                      : 2 === e.touches.length && this.pinch(e);
                },
                onContainerTouchStart: function(t) {
                  this.zoomOption(t), this.touch(t, !0);
                },
                onContainerTouchMove: function(t) {
                  this.touch(t);
                },
                onDocumentTouchEnd: function(i) {
                  e[t.hoverChartIndex] && e[t.hoverChartIndex].pointer.drop(i);
                }
              });
            }),
            e(i, 'parts/MSPointer.js', [i['parts/Globals.js']], function(t) {
              var e = t.addEvent,
                i = t.charts,
                n = t.css,
                o = t.doc,
                s = t.noop,
                r = t.Pointer,
                a = t.removeEvent,
                l = t.win,
                h = t.wrap;
              if (!t.hasTouch && (l.PointerEvent || l.MSPointerEvent)) {
                var c = {},
                  d = !!l.PointerEvent,
                  p = function() {
                    var e = [];
                    return (
                      (e.item = function(t) {
                        return this[t];
                      }),
                      t.objectEach(c, function(t) {
                        e.push({ pageX: t.pageX, pageY: t.pageY, target: t.target });
                      }),
                      e
                    );
                  },
                  u = function(e, n, o, r) {
                    ('touch' !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_TOUCH) ||
                      !i[t.hoverChartIndex] ||
                      (r(e),
                      (r = i[t.hoverChartIndex].pointer)[n]({
                        type: o,
                        target: e.currentTarget,
                        preventDefault: s,
                        touches: p()
                      }));
                  };
                (0, t.extend)(r.prototype, {
                  onContainerPointerDown: function(t) {
                    u(t, 'onContainerTouchStart', 'touchstart', function(t) {
                      c[t.pointerId] = { pageX: t.pageX, pageY: t.pageY, target: t.currentTarget };
                    });
                  },
                  onContainerPointerMove: function(t) {
                    u(t, 'onContainerTouchMove', 'touchmove', function(t) {
                      (c[t.pointerId] = { pageX: t.pageX, pageY: t.pageY }),
                        c[t.pointerId].target || (c[t.pointerId].target = t.currentTarget);
                    });
                  },
                  onDocumentPointerUp: function(t) {
                    u(t, 'onDocumentTouchEnd', 'touchend', function(t) {
                      delete c[t.pointerId];
                    });
                  },
                  batchMSEvents: function(t) {
                    t(this.chart.container, d ? 'pointerdown' : 'MSPointerDown', this.onContainerPointerDown),
                      t(this.chart.container, d ? 'pointermove' : 'MSPointerMove', this.onContainerPointerMove),
                      t(o, d ? 'pointerup' : 'MSPointerUp', this.onDocumentPointerUp);
                  }
                }),
                  h(r.prototype, 'init', function(t, e, i) {
                    t.call(this, e, i),
                      this.hasZoom && n(e.container, { '-ms-touch-action': 'none', 'touch-action': 'none' });
                  }),
                  h(r.prototype, 'setDOMEvents', function(t) {
                    t.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(e);
                  }),
                  h(r.prototype, 'destroy', function(t) {
                    this.batchMSEvents(a), t.call(this);
                  });
              }
            }),
            e(i, 'parts/Legend.js', [i['parts/Globals.js']], function(t) {
              var e = t.addEvent,
                i = t.css,
                n = t.discardElement,
                o = t.defined,
                s = t.fireEvent,
                r = t.isFirefox,
                a = t.marginNames,
                l = t.merge,
                h = t.pick,
                c = t.setAnimation,
                d = t.stableSort,
                p = t.win,
                u = t.wrap;
              (t.Legend = function(t, e) {
                this.init(t, e);
              }),
                (t.Legend.prototype = {
                  init: function(t, i) {
                    (this.chart = t),
                      this.setOptions(i),
                      i.enabled &&
                        (this.render(),
                        e(this.chart, 'endResize', function() {
                          this.legend.positionCheckboxes();
                        }),
                        this.proximate
                          ? (this.unchartrender = e(this.chart, 'render', function() {
                              this.legend.proximatePositions(), this.legend.positionItems();
                            }))
                          : this.unchartrender && this.unchartrender());
                  },
                  setOptions: function(t) {
                    var e = h(t.padding, 8);
                    (this.options = t),
                      this.chart.styledMode ||
                        ((this.itemStyle = t.itemStyle), (this.itemHiddenStyle = l(this.itemStyle, t.itemHiddenStyle))),
                      (this.itemMarginTop = t.itemMarginTop || 0),
                      (this.padding = e),
                      (this.initialItemY = e - 5),
                      (this.symbolWidth = h(t.symbolWidth, 16)),
                      (this.pages = []),
                      (this.proximate = 'proximate' === t.layout && !this.chart.inverted);
                  },
                  update: function(t, e) {
                    var i = this.chart;
                    this.setOptions(l(!0, this.options, t)),
                      this.destroy(),
                      (i.isDirtyLegend = i.isDirtyBox = !0),
                      h(e, !0) && i.redraw(),
                      s(this, 'afterUpdate');
                  },
                  colorizeItem: function(t, e) {
                    if (
                      (t.legendGroup[e ? 'removeClass' : 'addClass']('highcharts-legend-item-hidden'),
                      !this.chart.styledMode)
                    ) {
                      var i = this.options,
                        n = t.legendItem,
                        o = t.legendLine,
                        r = t.legendSymbol,
                        a = this.itemHiddenStyle.color,
                        l = ((i = e ? i.itemStyle.color : a), (e && t.color) || a),
                        h = t.options && t.options.marker,
                        c = { fill: l };
                      n && n.css({ fill: i, color: i }),
                        o && o.attr({ stroke: l }),
                        r && (h && r.isMarker && ((c = t.pointAttribs()), e || (c.stroke = c.fill = a)), r.attr(c));
                    }
                    s(this, 'afterColorizeItem', { item: t, visible: e });
                  },
                  positionItems: function() {
                    this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
                  },
                  positionItem: function(t) {
                    var e = (i = this.options).symbolPadding,
                      i = !i.rtl,
                      n = (s = t._legendItemPos)[0],
                      s = s[1],
                      r = t.checkbox;
                    (t = t.legendGroup) &&
                      t.element &&
                      t[o(t.translateY) ? 'animate' : 'attr']({
                        translateX: i ? n : this.legendWidth - n - 2 * e - 4,
                        translateY: s
                      }),
                      r && ((r.x = n), (r.y = s));
                  },
                  destroyItem: function(t) {
                    var e = t.checkbox;
                    ['legendItem', 'legendLine', 'legendSymbol', 'legendGroup'].forEach(function(e) {
                      t[e] && (t[e] = t[e].destroy());
                    }),
                      e && n(t.checkbox);
                  },
                  destroy: function() {
                    function t(t) {
                      this[t] && (this[t] = this[t].destroy());
                    }
                    this.getAllItems().forEach(function(e) {
                      ['legendItem', 'legendGroup'].forEach(t, e);
                    }),
                      'clipRect up down pager nav box title group'.split(' ').forEach(t, this),
                      (this.display = null);
                  },
                  positionCheckboxes: function() {
                    var t,
                      e = this.group && this.group.alignAttr,
                      n = this.clipHeight || this.legendHeight,
                      o = this.titleHeight;
                    e &&
                      ((t = e.translateY),
                      this.allItems.forEach(function(s) {
                        var r,
                          a = s.checkbox;
                        a &&
                          i(a, {
                            left: e.translateX + s.checkboxOffset + a.x - 20 + 'px',
                            top: (r = t + o + a.y + (this.scrollOffset || 0) + 3) + 'px',
                            display: this.proximate || (r > t - 6 && r < t + n - 6) ? '' : 'none'
                          });
                      }, this));
                  },
                  renderTitle: function() {
                    var t = this.options,
                      e = this.padding,
                      i = t.title,
                      n = 0;
                    i.text &&
                      (this.title ||
                        ((this.title = this.chart.renderer
                          .label(i.text, e - 3, e - 4, null, null, null, t.useHTML, null, 'legend-title')
                          .attr({ zIndex: 1 })),
                        this.chart.styledMode || this.title.css(i.style),
                        this.title.add(this.group)),
                      i.width || this.title.css({ width: this.maxLegendWidth + 'px' }),
                      (n = (t = this.title.getBBox()).height),
                      (this.offsetWidth = t.width),
                      this.contentGroup.attr({ translateY: n })),
                      (this.titleHeight = n);
                  },
                  setText: function(e) {
                    var i = this.options;
                    e.legendItem.attr({
                      text: i.labelFormat ? t.format(i.labelFormat, e, this.chart.time) : i.labelFormatter.call(e)
                    });
                  },
                  renderItem: function(t) {
                    var e = this.chart,
                      i = e.renderer,
                      n = this.options,
                      o = this.symbolWidth,
                      s = n.symbolPadding,
                      r = this.itemStyle,
                      a = this.itemHiddenStyle,
                      c = 'horizontal' === n.layout ? h(n.itemDistance, 20) : 0,
                      d = !n.rtl,
                      p = t.legendItem,
                      u = !t.series,
                      f = !u && t.series.drawLegendSymbol ? t.series : t,
                      g = f.options,
                      m = ((c = o + s + c + ((g = this.createCheckboxForItem && g && g.showCheckbox) ? 20 : 0)),
                      n.useHTML),
                      x = t.options.className;
                    p ||
                      ((t.legendGroup = i
                        .g('legend-item')
                        .addClass(
                          'highcharts-' +
                            f.type +
                            '-series highcharts-color-' +
                            t.colorIndex +
                            (x ? ' ' + x : '') +
                            (u ? ' highcharts-series-' + t.index : '')
                        )
                        .attr({ zIndex: 1 })
                        .add(this.scrollGroup)),
                      (t.legendItem = p = i.text('', d ? o + s : -s, this.baseline || 0, m)),
                      e.styledMode || p.css(l(t.visible ? r : a)),
                      p.attr({ align: d ? 'left' : 'right', zIndex: 2 }).add(t.legendGroup),
                      this.baseline ||
                        ((this.fontMetrics = i.fontMetrics(e.styledMode ? 12 : r.fontSize, p)),
                        (this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop),
                        p.attr('y', this.baseline)),
                      (this.symbolHeight = n.symbolHeight || this.fontMetrics.f),
                      f.drawLegendSymbol(this, t),
                      this.setItemEvents && this.setItemEvents(t, p, m)),
                      g && !t.checkbox && this.createCheckboxForItem(t),
                      this.colorizeItem(t, t.visible),
                      (!e.styledMode && r.width) ||
                        p.css({ width: (n.itemWidth || this.widthOption || e.spacingBox.width) - c }),
                      this.setText(t),
                      (e = p.getBBox()),
                      (t.itemWidth = t.checkboxOffset = n.itemWidth || t.legendItemWidth || e.width + c),
                      (this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth)),
                      (this.totalItemWidth += t.itemWidth),
                      (this.itemHeight = t.itemHeight = Math.round(
                        t.legendItemHeight || e.height || this.symbolHeight
                      ));
                  },
                  layoutItem: function(t) {
                    var e = this.padding,
                      i = 'horizontal' === (l = this.options).layout,
                      n = t.itemHeight,
                      o = l.itemMarginBottom || 0,
                      s = this.itemMarginTop,
                      r = i ? h(l.itemDistance, 20) : 0,
                      a = this.maxLegendWidth,
                      l = l.alignColumns && this.totalItemWidth > a ? this.maxItemWidth : t.itemWidth;
                    i &&
                      this.itemX - e + l > a &&
                      ((this.itemX = e),
                      this.lastLineHeight && (this.itemY += s + this.lastLineHeight + o),
                      (this.lastLineHeight = 0)),
                      (this.lastItemY = s + this.itemY + o),
                      (this.lastLineHeight = Math.max(n, this.lastLineHeight)),
                      (t._legendItemPos = [this.itemX, this.itemY]),
                      i ? (this.itemX += l) : ((this.itemY += s + n + o), (this.lastLineHeight = n)),
                      (this.offsetWidth =
                        this.widthOption ||
                        Math.max((i ? this.itemX - e - (t.checkbox ? 0 : r) : l) + e, this.offsetWidth));
                  },
                  getAllItems: function() {
                    var t = [];
                    return (
                      this.chart.series.forEach(function(e) {
                        var i = e && e.options;
                        e &&
                          h(i.showInLegend, !o(i.linkedTo) && void 0, !0) &&
                          (t = t.concat(e.legendItems || ('point' === i.legendType ? e.data : e)));
                      }),
                      s(this, 'afterGetAllItems', { allItems: t }),
                      t
                    );
                  },
                  getAlignment: function() {
                    var t = this.options;
                    return this.proximate
                      ? t.align.charAt(0) + 'tv'
                      : t.floating
                      ? ''
                      : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0);
                  },
                  adjustMargins: function(t, e) {
                    var i = this.chart,
                      n = this.options,
                      s = this.getAlignment(),
                      r = void 0 !== i.options.title.margin ? i.titleOffset + i.options.title.margin : 0;
                    s &&
                      [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(l, c) {
                        l.test(s) &&
                          !o(t[c]) &&
                          (i[a[c]] = Math.max(
                            i[a[c]],
                            i.legend[(c + 1) % 2 ? 'legendHeight' : 'legendWidth'] +
                              [1, -1, -1, 1][c] * n[c % 2 ? 'x' : 'y'] +
                              h(n.margin, 12) +
                              e[c] +
                              (0 === c && (0 === i.titleOffset ? 0 : r))
                          ));
                      });
                  },
                  proximatePositions: function() {
                    var e = this.chart,
                      i = [],
                      n = 'left' === this.options.align;
                    this.allItems.forEach(function(o) {
                      var s, r, a;
                      (r = n),
                        o.yAxis &&
                          o.points &&
                          (o.xAxis.options.reversed && (r = !r),
                          (s = t.find(r ? o.points : o.points.slice(0).reverse(), function(e) {
                            return t.isNumber(e.plotY);
                          })),
                          (r = o.legendGroup.getBBox().height),
                          (a = o.yAxis.top - e.plotTop),
                          o.visible
                            ? ((s = s ? s.plotY : o.yAxis.height), (s += a - 0.3 * r))
                            : (s = a + o.yAxis.height),
                          i.push({ target: s, size: r, item: o }));
                    }, this),
                      t.distribute(i, e.plotHeight),
                      i.forEach(function(t) {
                        t.item._legendItemPos[1] = e.plotTop - e.spacing[0] + t.pos;
                      });
                  },
                  render: function() {
                    var e,
                      i,
                      n,
                      o = this.chart,
                      r = o.renderer,
                      a = this.group,
                      h = this.box,
                      c = this.options,
                      p = this.padding;
                    (this.itemX = p),
                      (this.itemY = this.initialItemY),
                      (this.lastItemY = this.offsetWidth = 0),
                      (this.widthOption = t.relativeLength(c.width, o.spacingBox.width - p)),
                      (e = o.spacingBox.width - 2 * p - c.x),
                      -1 < ['rm', 'lm'].indexOf(this.getAlignment().substring(0, 2)) && (e /= 2),
                      (this.maxLegendWidth = this.widthOption || e),
                      a ||
                        ((this.group = a = r
                          .g('legend')
                          .attr({ zIndex: 7 })
                          .add()),
                        (this.contentGroup = r
                          .g()
                          .attr({ zIndex: 1 })
                          .add(a)),
                        (this.scrollGroup = r.g().add(this.contentGroup))),
                      this.renderTitle(),
                      (e = this.getAllItems()),
                      d(e, function(t, e) {
                        return (
                          ((t.options && t.options.legendIndex) || 0) - ((e.options && e.options.legendIndex) || 0)
                        );
                      }),
                      c.reversed && e.reverse(),
                      (this.allItems = e),
                      (this.display = i = !!e.length),
                      (this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0),
                      e.forEach(this.renderItem, this),
                      e.forEach(this.layoutItem, this),
                      (e = (this.widthOption || this.offsetWidth) + p),
                      (n = this.handleOverflow((n = this.lastItemY + this.lastLineHeight + this.titleHeight))),
                      (n += p),
                      h ||
                        ((this.box = h = r
                          .rect()
                          .addClass('highcharts-legend-box')
                          .attr({ r: c.borderRadius })
                          .add(a)),
                        (h.isNew = !0)),
                      o.styledMode ||
                        h
                          .attr({
                            stroke: c.borderColor,
                            'stroke-width': c.borderWidth || 0,
                            fill: c.backgroundColor || 'none'
                          })
                          .shadow(c.shadow),
                      0 < e &&
                        0 < n &&
                        (h[h.isNew ? 'attr' : 'animate'](
                          h.crisp.call({}, { x: 0, y: 0, width: e, height: n }, h.strokeWidth())
                        ),
                        (h.isNew = !1)),
                      h[i ? 'show' : 'hide'](),
                      o.styledMode && 'none' === a.getStyle('display') && (e = n = 0),
                      (this.legendWidth = e),
                      (this.legendHeight = n),
                      i &&
                        ((r = o.spacingBox),
                        /(lth|ct|rth)/.test(this.getAlignment()) &&
                          ((h = r.y + o.titleOffset),
                          (r = l(r, { y: 0 < o.titleOffset ? (h += o.options.title.margin) : h }))),
                        a.align(
                          l(c, { width: e, height: n, verticalAlign: this.proximate ? 'top' : c.verticalAlign }),
                          !0,
                          r
                        )),
                      this.proximate || this.positionItems(),
                      s(this, 'afterRender');
                  },
                  handleOverflow: function(t) {
                    var e,
                      i,
                      n = this,
                      o = this.chart,
                      s = o.renderer,
                      r = this.options,
                      a = r.y,
                      l = this.padding,
                      c = ((a = o.spacingBox.height + ('top' === r.verticalAlign ? -a : a) - l), r.maxHeight),
                      d = this.clipRect,
                      p = r.navigation,
                      u = h(p.animation, !0),
                      f = p.arrowSize || 12,
                      g = this.nav,
                      m = this.pages,
                      x = this.allItems,
                      y = function(t) {
                        'number' == typeof t
                          ? d.attr({ height: t })
                          : d && ((n.clipRect = d.destroy()), n.contentGroup.clip()),
                          n.contentGroup.div &&
                            (n.contentGroup.div.style.clip = t
                              ? 'rect(' + l + 'px,9999px,' + (l + t) + 'px,0)'
                              : 'auto');
                      },
                      v = function(t) {
                        return (
                          (n[t] = s
                            .circle(0, 0, 1.3 * f)
                            .translate(f / 2, f / 2)
                            .add(g)),
                          o.styledMode || n[t].attr('fill', 'rgba(0,0,0,0.0001)'),
                          n[t]
                        );
                      };
                    return (
                      'horizontal' !== r.layout || 'middle' === r.verticalAlign || r.floating || (a /= 2),
                      c && (a = Math.min(a, c)),
                      (m.length = 0),
                      t > a && !1 !== p.enabled
                        ? ((this.clipHeight = e = Math.max(a - 20 - this.titleHeight - l, 0)),
                          (this.currentPage = h(this.currentPage, 1)),
                          (this.fullHeight = t),
                          x.forEach(function(t, n) {
                            var o = t._legendItemPos[1],
                              s = Math.round(t.legendItem.getBBox().height),
                              r = m.length;
                            (!r || (o - m[r - 1] > e && (i || o) !== m[r - 1])) && (m.push(i || o), r++),
                              (t.pageIx = r - 1),
                              i && (x[n - 1].pageIx = r - 1),
                              n === x.length - 1 && o + s - m[r - 1] > e && o !== i && (m.push(o), (t.pageIx = r)),
                              o !== i && (i = o);
                          }),
                          d || ((d = n.clipRect = s.clipRect(0, l, 9999, 0)), n.contentGroup.clip(d)),
                          y(e),
                          g ||
                            ((this.nav = g = s
                              .g()
                              .attr({ zIndex: 1 })
                              .add(this.group)),
                            (this.up = s.symbol('triangle', 0, 0, f, f).add(g)),
                            v('upTracker').on('click', function() {
                              n.scroll(-1, u);
                            }),
                            (this.pager = s.text('', 15, 10).addClass('highcharts-legend-navigation')),
                            o.styledMode || this.pager.css(p.style),
                            this.pager.add(g),
                            (this.down = s.symbol('triangle-down', 0, 0, f, f).add(g)),
                            v('downTracker').on('click', function() {
                              n.scroll(1, u);
                            })),
                          n.scroll(0),
                          (t = a))
                        : g &&
                          (y(),
                          (this.nav = g.destroy()),
                          this.scrollGroup.attr({ translateY: 1 }),
                          (this.clipHeight = 0)),
                      t
                    );
                  },
                  scroll: function(t, e) {
                    var i = this.pages,
                      n = i.length,
                      o = this.currentPage + t;
                    t = this.clipHeight;
                    var s = this.options.navigation,
                      r = this.pager,
                      a = this.padding;
                    o > n && (o = n),
                      0 < o &&
                        (void 0 !== e && c(e, this.chart),
                        this.nav.attr({
                          translateX: a,
                          translateY: t + this.padding + 7 + this.titleHeight,
                          visibility: 'visible'
                        }),
                        [this.up, this.upTracker].forEach(function(t) {
                          t.attr({
                            class: 1 === o ? 'highcharts-legend-nav-inactive' : 'highcharts-legend-nav-active'
                          });
                        }),
                        r.attr({ text: o + '/' + n }),
                        [this.down, this.downTracker].forEach(function(t) {
                          t.attr({
                            x: 18 + this.pager.getBBox().width,
                            class: o === n ? 'highcharts-legend-nav-inactive' : 'highcharts-legend-nav-active'
                          });
                        }, this),
                        this.chart.styledMode ||
                          (this.up.attr({ fill: 1 === o ? s.inactiveColor : s.activeColor }),
                          this.upTracker.css({ cursor: 1 === o ? 'default' : 'pointer' }),
                          this.down.attr({ fill: o === n ? s.inactiveColor : s.activeColor }),
                          this.downTracker.css({ cursor: o === n ? 'default' : 'pointer' })),
                        (this.scrollOffset = -i[o - 1] + this.initialItemY),
                        this.scrollGroup.animate({ translateY: this.scrollOffset }),
                        (this.currentPage = o),
                        this.positionCheckboxes());
                  }
                }),
                (t.LegendSymbolMixin = {
                  drawRectangle: function(t, e) {
                    var i = t.symbolHeight,
                      n = t.options.squareSymbol;
                    e.legendSymbol = this.chart.renderer
                      .rect(
                        n ? (t.symbolWidth - i) / 2 : 0,
                        t.baseline - i + 1,
                        n ? i : t.symbolWidth,
                        i,
                        h(t.options.symbolRadius, i / 2)
                      )
                      .addClass('highcharts-point')
                      .attr({ zIndex: 3 })
                      .add(e.legendGroup);
                  },
                  drawLineMarker: function(t) {
                    var e = this.options,
                      i = e.marker,
                      n = t.symbolWidth,
                      o = t.symbolHeight,
                      s = o / 2,
                      r = this.chart.renderer,
                      a = this.legendGroup;
                    t = t.baseline - Math.round(0.3 * t.fontMetrics.b);
                    var c = {};
                    this.chart.styledMode ||
                      ((c = { 'stroke-width': e.lineWidth || 0 }), e.dashStyle && (c.dashstyle = e.dashStyle)),
                      (this.legendLine = r
                        .path(['M', 0, t, 'L', n, t])
                        .addClass('highcharts-graph')
                        .attr(c)
                        .add(a)),
                      i &&
                        !1 !== i.enabled &&
                        n &&
                        ((e = Math.min(h(i.radius, s), s)),
                        0 === this.symbol.indexOf('url') && ((i = l(i, { width: o, height: o })), (e = 0)),
                        (this.legendSymbol = i = r
                          .symbol(this.symbol, n / 2 - e, t - e, 2 * e, 2 * e, i)
                          .addClass('highcharts-point')
                          .add(a)),
                        (i.isMarker = !0));
                  }
                }),
                (/Trident\/7\.0/.test(p.navigator && p.navigator.userAgent) || r) &&
                  u(t.Legend.prototype, 'positionItem', function(t, e) {
                    var i = this,
                      n = function() {
                        e._legendItemPos && t.call(i, e);
                      };
                    n(), i.bubbleLegend || setTimeout(n);
                  });
            }),
            e(i, 'parts/Chart.js', [i['parts/Globals.js']], function(t) {
              var e = t.addEvent,
                i = t.animate,
                n = t.animObject,
                o = t.attr,
                s = t.doc,
                r = t.Axis,
                a = t.createElement,
                l = t.defaultOptions,
                h = t.discardElement,
                c = t.charts,
                d = t.css,
                p = t.defined,
                u = t.extend,
                f = t.find,
                g = t.fireEvent,
                m = t.isNumber,
                x = t.isObject,
                y = t.isString,
                v = t.Legend,
                b = t.marginNames,
                M = t.merge,
                k = t.objectEach,
                w = t.Pointer,
                S = t.pick,
                P = t.pInt,
                T = t.removeEvent,
                L = t.seriesTypes,
                A = t.splat,
                C = t.syncTimeout,
                E = t.win,
                O = (t.Chart = function() {
                  this.getArgs.apply(this, arguments);
                });
              (t.chart = function(t, e, i) {
                return new O(t, e, i);
              }),
                u(O.prototype, {
                  callbacks: [],
                  getArgs: function() {
                    var t = [].slice.call(arguments);
                    (y(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()), this.init(t[0], t[1]);
                  },
                  init: function(i, n) {
                    var o,
                      s = i.series,
                      r = i.plotOptions || {};
                    g(this, 'init', { args: arguments }, function() {
                      (i.series = null),
                        (o = M(l, i)),
                        k(o.plotOptions, function(t, e) {
                          x(t) && (t.tooltip = (r[e] && M(r[e].tooltip)) || void 0);
                        }),
                        (o.tooltip.userOptions = (i.chart && i.chart.forExport && i.tooltip.userOptions) || i.tooltip),
                        (o.series = i.series = s),
                        (this.userOptions = i);
                      var a = o.chart,
                        h = a.events;
                      (this.margin = []),
                        (this.spacing = []),
                        (this.bounds = { h: {}, v: {} }),
                        (this.labelCollectors = []),
                        (this.callback = n),
                        (this.isResizing = 0),
                        (this.options = o),
                        (this.axes = []),
                        (this.series = []),
                        (this.time = i.time && Object.keys(i.time).length ? new t.Time(i.time) : t.time),
                        (this.styledMode = a.styledMode),
                        (this.hasCartesianSeries = a.showAxes);
                      var d = this;
                      (d.index = c.length),
                        c.push(d),
                        t.chartCount++,
                        h &&
                          k(h, function(t, i) {
                            e(d, i, t);
                          }),
                        (d.xAxis = []),
                        (d.yAxis = []),
                        (d.pointCount = d.colorCounter = d.symbolCounter = 0),
                        g(d, 'afterInit'),
                        d.firstRender();
                    });
                  },
                  initSeries: function(e) {
                    var i = this.options.chart;
                    return (
                      (i = L[e.type || i.type || i.defaultSeriesType]) || t.error(17, !0, this),
                      (i = new i()).init(this, e),
                      i
                    );
                  },
                  orderSeries: function(t) {
                    var e = this.series;
                    for (t = t || 0; t < e.length; t++) e[t] && ((e[t].index = t), (e[t].name = e[t].getName()));
                  },
                  isInsidePlot: function(t, e, i) {
                    var n = i ? e : t;
                    return (t = i ? t : e), 0 <= n && n <= this.plotWidth && 0 <= t && t <= this.plotHeight;
                  },
                  redraw: function(e) {
                    g(this, 'beforeRedraw');
                    var i,
                      n,
                      o,
                      s = this.axes,
                      r = this.series,
                      a = this.pointer,
                      l = this.legend,
                      h = this.userOptions.legend,
                      c = this.isDirtyLegend,
                      d = this.hasCartesianSeries,
                      p = this.isDirtyBox,
                      f = this.renderer,
                      m = f.isHidden(),
                      x = [];
                    for (
                      this.setResponsive && this.setResponsive(!1),
                        t.setAnimation(e, this),
                        m && this.temporaryDisplay(),
                        this.layOutTitles(),
                        e = r.length;
                      e--;

                    )
                      if ((o = r[e]).options.stacking && ((i = !0), o.isDirty)) {
                        n = !0;
                        break;
                      }
                    if (n) for (e = r.length; e--; ) (o = r[e]).options.stacking && (o.isDirty = !0);
                    r.forEach(function(t) {
                      t.isDirty &&
                        ('point' === t.options.legendType
                          ? (t.updateTotals && t.updateTotals(), (c = !0))
                          : h && (h.labelFormatter || h.labelFormat) && (c = !0)),
                        t.isDirtyData && g(t, 'updatedData');
                    }),
                      c && l && l.options.enabled && (l.render(), (this.isDirtyLegend = !1)),
                      i && this.getStacks(),
                      d &&
                        s.forEach(function(t) {
                          t.updateNames(), t.setScale();
                        }),
                      this.getMargins(),
                      d &&
                        (s.forEach(function(t) {
                          t.isDirty && (p = !0);
                        }),
                        s.forEach(function(t) {
                          var e = t.min + ',' + t.max;
                          t.extKey !== e &&
                            ((t.extKey = e),
                            x.push(function() {
                              g(t, 'afterSetExtremes', u(t.eventArgs, t.getExtremes())), delete t.eventArgs;
                            })),
                            (p || i) && t.redraw();
                        })),
                      p && this.drawChartBox(),
                      g(this, 'predraw'),
                      r.forEach(function(t) {
                        (p || t.isDirty) && t.visible && t.redraw(), (t.isDirtyData = !1);
                      }),
                      a && a.reset(!0),
                      f.draw(),
                      g(this, 'redraw'),
                      g(this, 'render'),
                      m && this.temporaryDisplay(!0),
                      x.forEach(function(t) {
                        t.call();
                      });
                  },
                  get: function(t) {
                    function e(e) {
                      return e.id === t || (e.options && e.options.id === t);
                    }
                    var i,
                      n,
                      o = this.series;
                    for (i = f(this.axes, e) || f(this.series, e), n = 0; !i && n < o.length; n++)
                      i = f(o[n].points || [], e);
                    return i;
                  },
                  getAxes: function() {
                    var t = this,
                      e = ((i = this.options).xAxis = A(i.xAxis || {})),
                      i = (i.yAxis = A(i.yAxis || {}));
                    g(this, 'getAxes'),
                      e.forEach(function(t, e) {
                        (t.index = e), (t.isX = !0);
                      }),
                      i.forEach(function(t, e) {
                        t.index = e;
                      }),
                      e.concat(i).forEach(function(e) {
                        new r(t, e);
                      }),
                      g(this, 'afterGetAxes');
                  },
                  getSelectedPoints: function() {
                    var t = [];
                    return (
                      this.series.forEach(function(e) {
                        t = t.concat(
                          (e[e.hasGroupedData ? 'points' : 'data'] || []).filter(function(t) {
                            return t.selected;
                          })
                        );
                      }),
                      t
                    );
                  },
                  getSelectedSeries: function() {
                    return this.series.filter(function(t) {
                      return t.selected;
                    });
                  },
                  setTitle: function(t, e, i) {
                    var n = this,
                      o = n.options,
                      s = n.styledMode;
                    [
                      [
                        'title',
                        t,
                        (o.title = M(
                          !s && { style: { color: '#333333', fontSize: o.isStock ? '16px' : '18px' } },
                          o.title,
                          t
                        ))
                      ],
                      ['subtitle', e, (o = o.subtitle = M(!s && { style: { color: '#666666' } }, o.subtitle, e))]
                    ].forEach(function(t, e) {
                      var i = t[0],
                        o = n[i],
                        r = t[1];
                      (t = t[2]),
                        o && r && (n[i] = o = o.destroy()),
                        t &&
                          !o &&
                          ((n[i] = n.renderer
                            .text(t.text, 0, 0, t.useHTML)
                            .attr({ align: t.align, class: 'highcharts-' + i, zIndex: t.zIndex || 4 })
                            .add()),
                          (n[i].update = function(t) {
                            n.setTitle(!e && t, e && t);
                          }),
                          s || n[i].css(t.style));
                    }),
                      n.layOutTitles(i);
                  },
                  layOutTitles: function(t) {
                    var e,
                      i = 0,
                      n = this.renderer,
                      o = this.spacingBox;
                    ['title', 'subtitle'].forEach(function(t) {
                      var e,
                        s = this[t],
                        r = this.options[t];
                      (t = 'title' === t ? -3 : r.verticalAlign ? 0 : i + 2),
                        s &&
                          (this.styledMode || (e = r.style.fontSize),
                          (e = n.fontMetrics(e, s).b),
                          s
                            .css({ width: (r.width || o.width + r.widthAdjust) + 'px' })
                            .align(u({ y: t + e }, r), !1, 'spacingBox'),
                          r.floating || r.verticalAlign || (i = Math.ceil(i + s.getBBox(r.useHTML).height)));
                    }, this),
                      (e = this.titleOffset !== i),
                      (this.titleOffset = i),
                      !this.isDirtyBox &&
                        e &&
                        ((this.isDirtyBox = this.isDirtyLegend = e),
                        this.hasRendered && S(t, !0) && this.isDirtyBox && this.redraw());
                  },
                  getChartSize: function() {
                    var e = (i = this.options.chart).width,
                      i = i.height,
                      n = this.renderTo;
                    p(e) || (this.containerWidth = t.getStyle(n, 'width')),
                      p(i) || (this.containerHeight = t.getStyle(n, 'height')),
                      (this.chartWidth = Math.max(0, e || this.containerWidth || 600)),
                      (this.chartHeight = Math.max(
                        0,
                        t.relativeLength(i, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400)
                      ));
                  },
                  temporaryDisplay: function(e) {
                    var i = this.renderTo;
                    if (e)
                      for (; i && i.style; )
                        i.hcOrigStyle && (t.css(i, i.hcOrigStyle), delete i.hcOrigStyle),
                          i.hcOrigDetached && (s.body.removeChild(i), (i.hcOrigDetached = !1)),
                          (i = i.parentNode);
                    else
                      for (
                        ;
                        i &&
                        i.style &&
                        (s.body.contains(i) || i.parentNode || ((i.hcOrigDetached = !0), s.body.appendChild(i)),
                        ('none' === t.getStyle(i, 'display', !1) || i.hcOricDetached) &&
                          ((i.hcOrigStyle = {
                            display: i.style.display,
                            height: i.style.height,
                            overflow: i.style.overflow
                          }),
                          (e = { display: 'block', overflow: 'hidden' }),
                          i !== this.renderTo && (e.height = 0),
                          t.css(i, e),
                          i.offsetWidth || i.style.setProperty('display', 'block', 'important')),
                        (i = i.parentNode) !== s.body);

                      );
                  },
                  setClassName: function(t) {
                    this.container.className = 'highcharts-container ' + (t || '');
                  },
                  getContainer: function() {
                    var e,
                      i,
                      n,
                      r = this.options,
                      l = r.chart;
                    e = this.renderTo;
                    var h,
                      p,
                      f = t.uniqueKey();
                    if (
                      (e || (this.renderTo = e = l.renderTo),
                      y(e) && (this.renderTo = e = s.getElementById(e)),
                      e || t.error(13, !0, this),
                      (i = P(o(e, 'data-highcharts-chart'))),
                      m(i) && c[i] && c[i].hasRendered && c[i].destroy(),
                      o(e, 'data-highcharts-chart', this.index),
                      (e.innerHTML = ''),
                      l.skipClone || e.offsetWidth || this.temporaryDisplay(),
                      this.getChartSize(),
                      (i = this.chartWidth),
                      (n = this.chartHeight),
                      d(e, { overflow: 'hidden' }),
                      this.styledMode ||
                        (h = u(
                          {
                            position: 'relative',
                            overflow: 'hidden',
                            width: i + 'px',
                            height: n + 'px',
                            textAlign: 'left',
                            lineHeight: 'normal',
                            zIndex: 0,
                            '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
                          },
                          l.style
                        )),
                      (this.container = e = a('div', { id: f }, h, e)),
                      (this._cursor = e.style.cursor),
                      (this.renderer = new (t[l.renderer] || t.Renderer)(
                        e,
                        i,
                        n,
                        null,
                        l.forExport,
                        r.exporting && r.exporting.allowHTML,
                        this.styledMode
                      )),
                      this.setClassName(l.className),
                      this.styledMode)
                    )
                      for (p in r.defs) this.renderer.definition(r.defs[p]);
                    else this.renderer.setStyle(l.style);
                    (this.renderer.chartIndex = this.index), g(this, 'afterGetContainer');
                  },
                  getMargins: function(t) {
                    var e = this.spacing,
                      i = this.margin,
                      n = this.titleOffset;
                    this.resetMargins(),
                      n && !p(i[0]) && (this.plotTop = Math.max(this.plotTop, n + this.options.title.margin + e[0])),
                      this.legend && this.legend.display && this.legend.adjustMargins(i, e),
                      g(this, 'getMargins'),
                      t || this.getAxisMargins();
                  },
                  getAxisMargins: function() {
                    var t = this,
                      e = (t.axisOffset = [0, 0, 0, 0]),
                      i = t.margin;
                    t.hasCartesianSeries &&
                      t.axes.forEach(function(t) {
                        t.visible && t.getOffset();
                      }),
                      b.forEach(function(n, o) {
                        p(i[o]) || (t[n] += e[o]);
                      }),
                      t.setChartSize();
                  },
                  reflow: function(e) {
                    var i = this,
                      n = i.renderTo,
                      o = p((a = i.options.chart).width) && p(a.height),
                      r = a.width || t.getStyle(n, 'width'),
                      a = a.height || t.getStyle(n, 'height');
                    (n = e ? e.target : E),
                      o ||
                        i.isPrinting ||
                        !r ||
                        !a ||
                        (n !== E && n !== s) ||
                        ((r === i.containerWidth && a === i.containerHeight) ||
                          (t.clearTimeout(i.reflowTimeout),
                          (i.reflowTimeout = C(
                            function() {
                              i.container && i.setSize(void 0, void 0, !1);
                            },
                            e ? 100 : 0
                          ))),
                        (i.containerWidth = r),
                        (i.containerHeight = a));
                  },
                  setReflow: function(t) {
                    var i = this;
                    !1 === t || this.unbindReflow
                      ? !1 === t && this.unbindReflow && (this.unbindReflow = this.unbindReflow())
                      : ((this.unbindReflow = e(E, 'resize', function(t) {
                          i.reflow(t);
                        })),
                        e(this, 'destroy', this.unbindReflow));
                  },
                  setSize: function(e, o, s) {
                    var r,
                      a = this,
                      l = a.renderer;
                    (a.isResizing += 1),
                      t.setAnimation(s, a),
                      (a.oldChartHeight = a.chartHeight),
                      (a.oldChartWidth = a.chartWidth),
                      void 0 !== e && (a.options.chart.width = e),
                      void 0 !== o && (a.options.chart.height = o),
                      a.getChartSize(),
                      a.styledMode ||
                        ((r = l.globalAnimation) ? i : d)(
                          a.container,
                          { width: a.chartWidth + 'px', height: a.chartHeight + 'px' },
                          r
                        ),
                      a.setChartSize(!0),
                      l.setSize(a.chartWidth, a.chartHeight, s),
                      a.axes.forEach(function(t) {
                        (t.isDirty = !0), t.setScale();
                      }),
                      (a.isDirtyLegend = !0),
                      (a.isDirtyBox = !0),
                      a.layOutTitles(),
                      a.getMargins(),
                      a.redraw(s),
                      (a.oldChartHeight = null),
                      g(a, 'resize'),
                      C(function() {
                        a &&
                          g(a, 'endResize', null, function() {
                            --a.isResizing;
                          });
                      }, n(r).duration);
                  },
                  setChartSize: function(t) {
                    var e,
                      i,
                      n,
                      o,
                      s = this.inverted,
                      r = this.renderer,
                      a = this.chartWidth,
                      l = this.chartHeight,
                      h = this.options.chart,
                      c = this.spacing,
                      d = this.clipOffset;
                    (this.plotLeft = e = Math.round(this.plotLeft)),
                      (this.plotTop = i = Math.round(this.plotTop)),
                      (this.plotWidth = n = Math.max(0, Math.round(a - e - this.marginRight))),
                      (this.plotHeight = o = Math.max(0, Math.round(l - i - this.marginBottom))),
                      (this.plotSizeX = s ? o : n),
                      (this.plotSizeY = s ? n : o),
                      (this.plotBorderWidth = h.plotBorderWidth || 0),
                      (this.spacingBox = r.spacingBox = {
                        x: c[3],
                        y: c[0],
                        width: a - c[3] - c[1],
                        height: l - c[0] - c[2]
                      }),
                      (this.plotBox = r.plotBox = { x: e, y: i, width: n, height: o }),
                      (a = 2 * Math.floor(this.plotBorderWidth / 2)),
                      (s = Math.ceil(Math.max(a, d[3]) / 2)),
                      (r = Math.ceil(Math.max(a, d[0]) / 2)),
                      (this.clipBox = {
                        x: s,
                        y: r,
                        width: Math.floor(this.plotSizeX - Math.max(a, d[1]) / 2 - s),
                        height: Math.max(0, Math.floor(this.plotSizeY - Math.max(a, d[2]) / 2 - r))
                      }),
                      t ||
                        this.axes.forEach(function(t) {
                          t.setAxisSize(), t.setAxisTranslation();
                        }),
                      g(this, 'afterSetChartSize', { skipAxes: t });
                  },
                  resetMargins: function() {
                    g(this, 'resetMargins');
                    var t = this,
                      e = t.options.chart;
                    ['margin', 'spacing'].forEach(function(i) {
                      var n = e[i],
                        o = x(n) ? n : [n, n, n, n];
                      ['Top', 'Right', 'Bottom', 'Left'].forEach(function(n, s) {
                        t[i][s] = S(e[i + n], o[s]);
                      });
                    }),
                      b.forEach(function(e, i) {
                        t[e] = S(t.margin[i], t.spacing[i]);
                      }),
                      (t.axisOffset = [0, 0, 0, 0]),
                      (t.clipOffset = [0, 0, 0, 0]);
                  },
                  drawChartBox: function() {
                    var t,
                      e,
                      i = this.options.chart,
                      n = this.renderer,
                      o = this.chartWidth,
                      s = this.chartHeight,
                      r = this.chartBackground,
                      a = this.plotBackground,
                      l = this.plotBorder,
                      h = this.styledMode,
                      c = this.plotBGImage,
                      d = i.backgroundColor,
                      p = i.plotBackgroundColor,
                      u = i.plotBackgroundImage,
                      f = this.plotLeft,
                      m = this.plotTop,
                      x = this.plotWidth,
                      y = this.plotHeight,
                      v = this.plotBox,
                      b = this.clipRect,
                      M = this.clipBox,
                      k = 'animate';
                    r ||
                      ((this.chartBackground = r = n
                        .rect()
                        .addClass('highcharts-background')
                        .add()),
                      (k = 'attr')),
                      h
                        ? (t = e = r.strokeWidth())
                        : ((e = (t = i.borderWidth || 0) + (i.shadow ? 8 : 0)),
                          (d = { fill: d || 'none' }),
                          (t || r['stroke-width']) && ((d.stroke = i.borderColor), (d['stroke-width'] = t)),
                          r.attr(d).shadow(i.shadow)),
                      r[k]({ x: e / 2, y: e / 2, width: o - e - (t % 2), height: s - e - (t % 2), r: i.borderRadius }),
                      (k = 'animate'),
                      a ||
                        ((k = 'attr'),
                        (this.plotBackground = a = n
                          .rect()
                          .addClass('highcharts-plot-background')
                          .add())),
                      a[k](v),
                      h ||
                        (a.attr({ fill: p || 'none' }).shadow(i.plotShadow),
                        u && (c ? c.animate(v) : (this.plotBGImage = n.image(u, f, m, x, y).add()))),
                      b ? b.animate({ width: M.width, height: M.height }) : (this.clipRect = n.clipRect(M)),
                      (k = 'animate'),
                      l ||
                        ((k = 'attr'),
                        (this.plotBorder = l = n
                          .rect()
                          .addClass('highcharts-plot-border')
                          .attr({ zIndex: 1 })
                          .add())),
                      h || l.attr({ stroke: i.plotBorderColor, 'stroke-width': i.plotBorderWidth || 0, fill: 'none' }),
                      l[k](l.crisp({ x: f, y: m, width: x, height: y }, -l.strokeWidth())),
                      (this.isDirtyBox = !1),
                      g(this, 'afterDrawChartBox');
                  },
                  propFromSeries: function() {
                    var t,
                      e,
                      i,
                      n = this,
                      o = n.options.chart,
                      s = n.options.series;
                    ['inverted', 'angular', 'polar'].forEach(function(r) {
                      for (
                        t = L[o.type || o.defaultSeriesType], i = o[r] || (t && t.prototype[r]), e = s && s.length;
                        !i && e--;

                      )
                        (t = L[s[e].type]) && t.prototype[r] && (i = !0);
                      n[r] = i;
                    });
                  },
                  linkSeries: function() {
                    var t = this,
                      e = t.series;
                    e.forEach(function(t) {
                      t.linkedSeries.length = 0;
                    }),
                      e.forEach(function(e) {
                        var i = e.options.linkedTo;
                        y(i) &&
                          (i = ':previous' === i ? t.series[e.index - 1] : t.get(i)) &&
                          i.linkedParent !== e &&
                          (i.linkedSeries.push(e),
                          (e.linkedParent = i),
                          (e.visible = S(e.options.visible, i.options.visible, e.visible)));
                      }),
                      g(this, 'afterLinkSeries');
                  },
                  renderSeries: function() {
                    this.series.forEach(function(t) {
                      t.translate(), t.render();
                    });
                  },
                  renderLabels: function() {
                    var t = this,
                      e = t.options.labels;
                    e.items &&
                      e.items.forEach(function(i) {
                        var n = u(e.style, i.style),
                          o = P(n.left) + t.plotLeft,
                          s = P(n.top) + t.plotTop + 12;
                        delete n.left,
                          delete n.top,
                          t.renderer
                            .text(i.html, o, s)
                            .attr({ zIndex: 2 })
                            .css(n)
                            .add();
                      });
                  },
                  render: function() {
                    var t,
                      e,
                      i,
                      n = this.axes,
                      o = this.renderer,
                      s = this.options,
                      r = 0;
                    this.setTitle(),
                      (this.legend = new v(this, s.legend)),
                      this.getStacks && this.getStacks(),
                      this.getMargins(!0),
                      this.setChartSize(),
                      (s = this.plotWidth),
                      n.some(function(t) {
                        if (t.horiz && t.visible && t.options.labels.enabled && t.series.length) return (r = 21), !0;
                      }),
                      (t = this.plotHeight = Math.max(this.plotHeight - r, 0)),
                      n.forEach(function(t) {
                        t.setScale();
                      }),
                      this.getAxisMargins(),
                      (i = 1.05 < t / this.plotHeight),
                      ((e = 1.1 < s / this.plotWidth) || i) &&
                        (n.forEach(function(t) {
                          ((t.horiz && e) || (!t.horiz && i)) && t.setTickInterval(!0);
                        }),
                        this.getMargins()),
                      this.drawChartBox(),
                      this.hasCartesianSeries &&
                        n.forEach(function(t) {
                          t.visible && t.render();
                        }),
                      this.seriesGroup ||
                        (this.seriesGroup = o
                          .g('series-group')
                          .attr({ zIndex: 3 })
                          .add()),
                      this.renderSeries(),
                      this.renderLabels(),
                      this.addCredits(),
                      this.setResponsive && this.setResponsive(),
                      (this.hasRendered = !0);
                  },
                  addCredits: function(t) {
                    var e = this;
                    (t = M(!0, this.options.credits, t)).enabled &&
                      !this.credits &&
                      ((this.credits = this.renderer
                        .text(t.text + (this.mapCredits || ''), 0, 0)
                        .addClass('highcharts-credits')
                        .on('click', function() {
                          t.href && (E.location.href = t.href);
                        })
                        .attr({ align: t.position.align, zIndex: 8 })),
                      e.styledMode || this.credits.css(t.style),
                      this.credits.add().align(t.position),
                      (this.credits.update = function(t) {
                        (e.credits = e.credits.destroy()), e.addCredits(t);
                      }));
                  },
                  destroy: function() {
                    var e,
                      i = this,
                      n = i.axes,
                      o = i.series,
                      s = i.container,
                      r = s && s.parentNode;
                    for (
                      g(i, 'destroy'),
                        i.renderer.forExport ? t.erase(c, i) : (c[i.index] = void 0),
                        t.chartCount--,
                        i.renderTo.removeAttribute('data-highcharts-chart'),
                        T(i),
                        e = n.length;
                      e--;

                    )
                      n[e] = n[e].destroy();
                    for (this.scroller && this.scroller.destroy && this.scroller.destroy(), e = o.length; e--; )
                      o[e] = o[e].destroy();
                    'title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer'
                      .split(' ')
                      .forEach(function(t) {
                        var e = i[t];
                        e && e.destroy && (i[t] = e.destroy());
                      }),
                      s && ((s.innerHTML = ''), T(s), r && h(s)),
                      k(i, function(t, e) {
                        delete i[e];
                      });
                  },
                  firstRender: function() {
                    var e = this,
                      i = e.options;
                    (e.isReadyToRender && !e.isReadyToRender()) ||
                      (e.getContainer(),
                      e.resetMargins(),
                      e.setChartSize(),
                      e.propFromSeries(),
                      e.getAxes(),
                      (t.isArray(i.series) ? i.series : []).forEach(function(t) {
                        e.initSeries(t);
                      }),
                      e.linkSeries(),
                      g(e, 'beforeRender'),
                      w && (e.pointer = new w(e, i)),
                      e.render(),
                      !e.renderer.imgCount && e.onload && e.onload(),
                      e.temporaryDisplay(!0));
                  },
                  onload: function() {
                    [this.callback].concat(this.callbacks).forEach(function(t) {
                      t && void 0 !== this.index && t.apply(this, [this]);
                    }, this),
                      g(this, 'load'),
                      g(this, 'render'),
                      p(this.index) && this.setReflow(this.options.chart.reflow),
                      (this.onload = null);
                  }
                });
            }),
            e(i, 'parts/ScrollablePlotArea.js', [i['parts/Globals.js']], function(t) {
              var e = t.addEvent,
                i = t.Chart;
              e(i, 'afterSetChartSize', function(e) {
                var i = this.options.chart.scrollablePlotArea;
                (i = i && i.minWidth) &&
                  !this.renderer.forExport &&
                  (this.scrollablePixels = i = Math.max(0, i - this.chartWidth)) &&
                  ((this.plotWidth += i),
                  (this.clipBox.width += i),
                  e.skipAxes ||
                    this.axes.forEach(function(e) {
                      1 === e.side
                        ? (e.getPlotLinePath = function() {
                            var i,
                              n = this.right;
                            return (
                              (this.right = n - e.chart.scrollablePixels),
                              (i = t.Axis.prototype.getPlotLinePath.apply(this, arguments)),
                              (this.right = n),
                              i
                            );
                          })
                        : (e.setAxisSize(), e.setAxisTranslation());
                    }));
              }),
                e(i, 'render', function() {
                  this.scrollablePixels
                    ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed())
                    : this.fixedDiv && this.applyFixed();
                }),
                (i.prototype.setUpScrolling = function() {
                  (this.scrollingContainer = t.createElement(
                    'div',
                    { className: 'highcharts-scrolling' },
                    { overflowX: 'auto', WebkitOverflowScrolling: 'touch' },
                    this.renderTo
                  )),
                    (this.innerContainer = t.createElement(
                      'div',
                      { className: 'highcharts-inner-container' },
                      null,
                      this.scrollingContainer
                    )),
                    this.innerContainer.appendChild(this.container),
                    (this.setUpScrolling = null);
                }),
                (i.prototype.moveFixedElements = function() {
                  var t = this.container,
                    e = this.fixedRenderer;
                  [
                    this.inverted ? '.highcharts-xaxis' : '.highcharts-yaxis',
                    this.inverted ? '.highcharts-xaxis-labels' : '.highcharts-yaxis-labels',
                    '.highcharts-contextbutton',
                    '.highcharts-credits',
                    '.highcharts-legend',
                    '.highcharts-reset-zoom',
                    '.highcharts-subtitle',
                    '.highcharts-title',
                    '.highcharts-legend-checkbox'
                  ].forEach(function(i) {
                    [].forEach.call(t.querySelectorAll(i), function(t) {
                      (t.namespaceURI === e.SVG_NS ? e.box : e.box.parentNode).appendChild(t),
                        (t.style.pointerEvents = 'auto');
                    });
                  });
                }),
                (i.prototype.applyFixed = function() {
                  var i,
                    n = !this.fixedDiv,
                    o = this.options.chart.scrollablePlotArea;
                  n &&
                    ((this.fixedDiv = t.createElement(
                      'div',
                      { className: 'highcharts-fixed' },
                      { position: 'absolute', overflow: 'hidden', pointerEvents: 'none', zIndex: 2 },
                      null,
                      !0
                    )),
                    this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild),
                    (this.renderTo.style.overflow = 'visible'),
                    (this.fixedRenderer = i = new t.Renderer(this.fixedDiv, 0, 0)),
                    (this.scrollableMask = i
                      .path()
                      .attr({
                        fill: t
                          .color(this.options.chart.backgroundColor || '#fff')
                          .setOpacity(t.pick(o.opacity, 0.85))
                          .get(),
                        zIndex: -1
                      })
                      .addClass('highcharts-scrollable-mask')
                      .add()),
                    this.moveFixedElements(),
                    e(this, 'afterShowResetZoom', this.moveFixedElements)),
                    this.fixedRenderer.setSize(this.chartWidth, this.chartHeight),
                    (i = this.chartWidth + this.scrollablePixels),
                    t.stop(this.container),
                    (this.container.style.width = i + 'px'),
                    this.renderer.boxWrapper.attr({
                      width: i,
                      height: this.chartHeight,
                      viewBox: [0, 0, i, this.chartHeight].join(' ')
                    }),
                    this.chartBackground.attr({ width: i }),
                    n &&
                      o.scrollPositionX &&
                      (this.scrollingContainer.scrollLeft = this.scrollablePixels * o.scrollPositionX),
                    (n = this.plotTop - (o = this.axisOffset)[0] - 1),
                    (o = this.plotTop + this.plotHeight + o[2]),
                    (i = this.plotLeft + this.plotWidth - this.scrollablePixels),
                    this.scrollableMask.attr({
                      d: this.scrollablePixels
                        ? [
                            'M',
                            0,
                            n,
                            'L',
                            this.plotLeft - 1,
                            n,
                            'L',
                            this.plotLeft - 1,
                            o,
                            'L',
                            0,
                            o,
                            'Z',
                            'M',
                            i,
                            n,
                            'L',
                            this.chartWidth,
                            n,
                            'L',
                            this.chartWidth,
                            o,
                            'L',
                            i,
                            o,
                            'Z'
                          ]
                        : ['M', 0, 0]
                    });
                });
            }),
            e(i, 'parts/Point.js', [i['parts/Globals.js']], function(t) {
              var e,
                i = t.extend,
                n = t.erase,
                o = t.fireEvent,
                s = t.format,
                r = t.isArray,
                a = t.isNumber,
                l = t.pick,
                h = t.uniqueKey,
                c = t.defined,
                d = t.removeEvent;
              (t.Point = e = function() {}),
                (t.Point.prototype = {
                  init: function(t, e, i) {
                    return (
                      (this.series = t),
                      this.applyOptions(e, i),
                      (this.id = c(this.id) ? this.id : h()),
                      this.resolveColor(),
                      t.chart.pointCount++,
                      o(this, 'afterInit'),
                      this
                    );
                  },
                  resolveColor: function() {
                    var t,
                      e = this.series;
                    t = e.chart.options.chart.colorCount;
                    var i = e.chart.styledMode;
                    i || this.options.color || (this.color = e.color),
                      e.options.colorByPoint
                        ? (i ||
                            ((t = e.options.colors || e.chart.options.colors),
                            (this.color = this.color || t[e.colorCounter]),
                            (t = t.length)),
                          (i = e.colorCounter),
                          e.colorCounter++,
                          e.colorCounter === t && (e.colorCounter = 0))
                        : (i = e.colorIndex),
                      (this.colorIndex = l(this.colorIndex, i));
                  },
                  applyOptions: function(t, n) {
                    var o = this.series,
                      s = o.options.pointValKey || o.pointValKey;
                    return (
                      (t = e.prototype.optionsToObject.call(this, t)),
                      i(this, t),
                      (this.options = this.options ? i(this.options, t) : t),
                      t.group && delete this.group,
                      t.dataLabels && delete this.dataLabels,
                      s && (this.y = this[s]),
                      (this.isNull = l(this.isValid && !this.isValid(), null === this.x || !a(this.y, !0))) &&
                        (this.formatPrefix = 'null'),
                      this.selected && (this.state = 'select'),
                      'name' in this && void 0 === n && o.xAxis && o.xAxis.hasNames && (this.x = o.xAxis.nameToX(this)),
                      void 0 === this.x && o && (this.x = void 0 === n ? o.autoIncrement(this) : n),
                      this
                    );
                  },
                  setNestedProperty: function(e, i, n) {
                    return (
                      n.split('.').reduce(function(e, n, o, s) {
                        return (e[n] = s.length - 1 === o ? i : t.isObject(e[n], !0) ? e[n] : {}), e[n];
                      }, e),
                      e
                    );
                  },
                  optionsToObject: function(e) {
                    var i = {},
                      n = this.series,
                      o = n.options.keys,
                      s = o || n.pointArrayMap || ['y'],
                      l = s.length,
                      h = 0,
                      c = 0;
                    if (a(e) || null === e) i[s[0]] = e;
                    else if (r(e))
                      for (
                        !o &&
                        e.length > l &&
                        ('string' == (n = typeof e[0]) ? (i.name = e[0]) : 'number' === n && (i.x = e[0]), h++);
                        c < l;

                      )
                        (o && void 0 === e[h]) ||
                          (0 < s[c].indexOf('.')
                            ? t.Point.prototype.setNestedProperty(i, e[h], s[c])
                            : (i[s[c]] = e[h])),
                          h++,
                          c++;
                    else
                      'object' == typeof e &&
                        ((i = e), e.dataLabels && (n._hasPointLabels = !0), e.marker && (n._hasPointMarkers = !0));
                    return i;
                  },
                  getClassName: function() {
                    return (
                      'highcharts-point' +
                      (this.selected ? ' highcharts-point-select' : '') +
                      (this.negative ? ' highcharts-negative' : '') +
                      (this.isNull ? ' highcharts-null-point' : '') +
                      (void 0 !== this.colorIndex ? ' highcharts-color-' + this.colorIndex : '') +
                      (this.options.className ? ' ' + this.options.className : '') +
                      (this.zone && this.zone.className
                        ? ' ' + this.zone.className.replace('highcharts-negative', '')
                        : '')
                    );
                  },
                  getZone: function() {
                    var t,
                      e = (i = this.series).zones,
                      i = i.zoneAxis || 'y',
                      n = 0;
                    for (t = e[n]; this[i] >= t.value; ) t = e[++n];
                    return (
                      this.nonZonedColor || (this.nonZonedColor = this.color),
                      (this.color = t && t.color && !this.options.color ? t.color : this.nonZonedColor),
                      t
                    );
                  },
                  destroy: function() {
                    var t,
                      e = this.series.chart,
                      i = e.hoverPoints;
                    for (t in (e.pointCount--,
                    i && (this.setState(), n(i, this), i.length || (e.hoverPoints = null)),
                    this === e.hoverPoint && this.onMouseOut(),
                    (this.graphic || this.dataLabel || this.dataLabels) && (d(this), this.destroyElements()),
                    this.legendItem && e.legend.destroyItem(this),
                    this))
                      this[t] = null;
                  },
                  destroyElements: function(t) {
                    var e,
                      i,
                      n = this,
                      o = [];
                    for (
                      (t = t || { graphic: 1, dataLabel: 1 }).graphic && o.push('graphic', 'shadowGroup'),
                        t.dataLabel && o.push('dataLabel', 'dataLabelUpper', 'connector'),
                        i = o.length;
                      i--;

                    )
                      n[(e = o[i])] && (n[e] = n[e].destroy());
                    ['dataLabel', 'connector'].forEach(function(e) {
                      var i = e + 's';
                      t[e] &&
                        n[i] &&
                        (n[i].forEach(function(t) {
                          t.element && t.destroy();
                        }),
                        delete n[i]);
                    });
                  },
                  getLabelConfig: function() {
                    return {
                      x: this.category,
                      y: this.y,
                      color: this.color,
                      colorIndex: this.colorIndex,
                      key: this.name || this.category,
                      series: this.series,
                      point: this,
                      percentage: this.percentage,
                      total: this.total || this.stackTotal
                    };
                  },
                  tooltipFormatter: function(t) {
                    var e = this.series,
                      i = e.tooltipOptions,
                      n = l(i.valueDecimals, ''),
                      o = i.valuePrefix || '',
                      r = i.valueSuffix || '';
                    return (
                      e.chart.styledMode && (t = e.chart.tooltip.styledModeFormat(t)),
                      (e.pointArrayMap || ['y']).forEach(function(e) {
                        (e = '{point.' + e),
                          (o || r) && (t = t.replace(RegExp(e + '}', 'g'), o + e + '}' + r)),
                          (t = t.replace(RegExp(e + '}', 'g'), e + ':,.' + n + 'f}'));
                      }),
                      s(t, { point: this, series: this.series }, e.chart.time)
                    );
                  },
                  firePointEvent: function(t, e, i) {
                    var n = this,
                      s = this.series.options;
                    (s.point.events[t] || (n.options && n.options.events && n.options.events[t])) &&
                      this.importEvents(),
                      'click' === t &&
                        s.allowPointSelect &&
                        (i = function(t) {
                          n.select && n.select(null, t.ctrlKey || t.metaKey || t.shiftKey);
                        }),
                      o(this, t, e, i);
                  },
                  visible: !0
                });
            }),
            e(i, 'parts/Series.js', [i['parts/Globals.js']], function(t) {
              var e = t.addEvent,
                i = t.animObject,
                n = t.arrayMax,
                o = t.arrayMin,
                s = t.correctFloat,
                r = t.defaultOptions,
                a = t.defaultPlotOptions,
                l = t.defined,
                h = t.erase,
                c = t.extend,
                d = t.fireEvent,
                p = t.isArray,
                u = t.isNumber,
                f = t.isString,
                g = t.merge,
                m = t.objectEach,
                x = t.pick,
                y = t.removeEvent,
                v = t.splat,
                b = t.SVGElement,
                M = t.syncTimeout,
                k = t.win;
              t.Series = t.seriesType(
                'line',
                null,
                {
                  lineWidth: 2,
                  allowPointSelect: !1,
                  showCheckbox: !1,
                  animation: { duration: 1e3 },
                  events: {},
                  marker: {
                    lineWidth: 0,
                    lineColor: '#ffffff',
                    enabledThreshold: 2,
                    radius: 4,
                    states: {
                      normal: { animation: !0 },
                      hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 },
                      select: { fillColor: '#cccccc', lineColor: '#000000', lineWidth: 2 }
                    }
                  },
                  point: { events: {} },
                  dataLabels: {
                    align: 'center',
                    formatter: function() {
                      return null === this.y ? '' : t.numberFormat(this.y, -1);
                    },
                    padding: 5,
                    style: { fontSize: '11px', fontWeight: 'bold', color: 'contrast', textOutline: '1px contrast' },
                    verticalAlign: 'bottom',
                    x: 0,
                    y: 0
                  },
                  cropThreshold: 300,
                  opacity: 1,
                  pointRange: 0,
                  softThreshold: !0,
                  states: {
                    normal: { animation: !0 },
                    hover: {
                      animation: { duration: 50 },
                      lineWidthPlus: 1,
                      marker: {},
                      halo: { size: 10, opacity: 0.25 }
                    },
                    select: { animation: { duration: 0 } },
                    inactive: { animation: { duration: 50 }, opacity: 0.2 }
                  },
                  stickyTracking: !0,
                  turboThreshold: 1e3,
                  findNearestPointBy: 'x'
                },
                {
                  isCartesian: !0,
                  pointClass: t.Point,
                  sorted: !0,
                  requireSorting: !0,
                  directTouch: !1,
                  axisTypes: ['xAxis', 'yAxis'],
                  colorCounter: 0,
                  parallelArrays: ['x', 'y'],
                  coll: 'series',
                  cropShoulder: 1,
                  init: function(t, i) {
                    d(this, 'init', { options: i });
                    var n,
                      o,
                      s = this,
                      r = t.series;
                    (s.chart = t),
                      (s.options = i = s.setOptions(i)),
                      (s.linkedSeries = []),
                      s.bindAxes(),
                      c(s, { name: i.name, state: '', visible: !1 !== i.visible, selected: !0 === i.selected }),
                      m((n = i.events), function(t, i) {
                        (s.hcEvents && s.hcEvents[i] && -1 !== s.hcEvents[i].indexOf(t)) || e(s, i, t);
                      }),
                      ((n && n.click) || (i.point && i.point.events && i.point.events.click) || i.allowPointSelect) &&
                        (t.runTrackerClick = !0),
                      s.getColor(),
                      s.getSymbol(),
                      s.parallelArrays.forEach(function(t) {
                        s[t + 'Data'] || (s[t + 'Data'] = []);
                      }),
                      s.points || s.setData(i.data, !1),
                      s.isCartesian && (t.hasCartesianSeries = !0),
                      r.length && (o = r[r.length - 1]),
                      (s._i = x(o && o._i, -1) + 1),
                      t.orderSeries(this.insert(r)),
                      d(this, 'afterInit');
                  },
                  insert: function(t) {
                    var e,
                      i = this.options.index;
                    if (u(i)) {
                      for (e = t.length; e--; )
                        if (i >= x(t[e].options.index, t[e]._i)) {
                          t.splice(e + 1, 0, this);
                          break;
                        }
                      -1 === e && t.unshift(this), (e += 1);
                    } else t.push(this);
                    return x(e, t.length - 1);
                  },
                  bindAxes: function() {
                    var e,
                      i = this,
                      n = i.options,
                      o = i.chart;
                    d(this, 'bindAxes', null, function() {
                      (i.axisTypes || []).forEach(function(s) {
                        o[s].forEach(function(t) {
                          (n[s] === (e = t.options).index ||
                            (void 0 !== n[s] && n[s] === e.id) ||
                            (void 0 === n[s] && 0 === e.index)) &&
                            (i.insert(t.series), (i[s] = t), (t.isDirty = !0));
                        }),
                          i[s] || i.optionalAxis === s || t.error(18, !0, o);
                      });
                    });
                  },
                  updateParallelArrays: function(t, e) {
                    var i = t.series,
                      n = arguments,
                      o = u(e)
                        ? function(n) {
                            var o = 'y' === n && i.toYData ? i.toYData(t) : t[n];
                            i[n + 'Data'][e] = o;
                          }
                        : function(t) {
                            Array.prototype[e].apply(i[t + 'Data'], Array.prototype.slice.call(n, 2));
                          };
                    i.parallelArrays.forEach(o);
                  },
                  hasData: function() {
                    return (
                      (this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin) ||
                      (this.visible && this.yData && 0 < this.yData.length)
                    );
                  },
                  autoIncrement: function() {
                    var t,
                      e = this.options,
                      i = e.pointIntervalUnit,
                      n = this.chart.time,
                      o = x((o = this.xIncrement), e.pointStart, 0);
                    return (
                      (this.pointInterval = t = x(this.pointInterval, e.pointInterval, 1)),
                      i &&
                        ((e = new n.Date(o)),
                        'day' === i
                          ? n.set('Date', e, n.get('Date', e) + t)
                          : 'month' === i
                          ? n.set('Month', e, n.get('Month', e) + t)
                          : 'year' === i && n.set('FullYear', e, n.get('FullYear', e) + t),
                        (t = e.getTime() - o)),
                      (this.xIncrement = o + t),
                      o
                    );
                  },
                  setOptions: function(t) {
                    var e = this.chart,
                      i = e.options,
                      n = i.plotOptions,
                      o = (e.userOptions || {}).plotOptions || {},
                      s = n[this.type],
                      a = g(t);
                    return (
                      (t = e.styledMode),
                      d(this, 'setOptions', { userOptions: a }),
                      (this.userOptions = a),
                      (e = g(s, n.series, a)),
                      (this.tooltipOptions = g(
                        r.tooltip,
                        r.plotOptions.series && r.plotOptions.series.tooltip,
                        r.plotOptions[this.type].tooltip,
                        i.tooltip.userOptions,
                        n.series && n.series.tooltip,
                        n[this.type].tooltip,
                        a.tooltip
                      )),
                      (this.stickyTracking = x(
                        a.stickyTracking,
                        o[this.type] && o[this.type].stickyTracking,
                        o.series && o.series.stickyTracking,
                        !(!this.tooltipOptions.shared || this.noSharedTooltip) || e.stickyTracking
                      )),
                      null === s.marker && delete e.marker,
                      (this.zoneAxis = e.zoneAxis),
                      (i = this.zones = (e.zones || []).slice()),
                      (!e.negativeColor && !e.negativeFillColor) ||
                        e.zones ||
                        ((n = {
                          value: e[this.zoneAxis + 'Threshold'] || e.threshold || 0,
                          className: 'highcharts-negative'
                        }),
                        t || ((n.color = e.negativeColor), (n.fillColor = e.negativeFillColor)),
                        i.push(n)),
                      i.length &&
                        l(i[i.length - 1].value) &&
                        i.push(t ? {} : { color: this.color, fillColor: this.fillColor }),
                      d(this, 'afterSetOptions', { options: e }),
                      e
                    );
                  },
                  getName: function() {
                    return x(this.options.name, 'Series ' + (this.index + 1));
                  },
                  getCyclic: function(t, e, i) {
                    var n,
                      o = this.chart,
                      s = this.userOptions,
                      r = t + 'Index',
                      a = t + 'Counter',
                      h = i ? i.length : x(o.options.chart[t + 'Count'], o[t + 'Count']);
                    e ||
                      ((n = x(s[r], s['_' + r])),
                      l(n) || (o.series.length || (o[a] = 0), (s['_' + r] = n = o[a] % h), (o[a] += 1)),
                      i && (e = i[n])),
                      void 0 !== n && (this[r] = n),
                      (this[t] = e);
                  },
                  getColor: function() {
                    this.chart.styledMode
                      ? this.getCyclic('color')
                      : this.options.colorByPoint
                      ? (this.options.color = null)
                      : this.getCyclic('color', this.options.color || a[this.type].color, this.chart.options.colors);
                  },
                  getSymbol: function() {
                    this.getCyclic('symbol', this.options.marker.symbol, this.chart.options.symbols);
                  },
                  findPointIndex: function(t, e) {
                    var i = t.id;
                    t = t.x;
                    var n,
                      o,
                      s = this.points;
                    return (
                      i && void 0 !== (o = (i = this.chart.get(i)) && i.index) && (n = !0),
                      void 0 === o && u(t) && (o = this.xData.indexOf(t, e)),
                      -1 !== o && void 0 !== o && this.cropped && (o = o >= this.cropStart ? o - this.cropStart : o),
                      !n && s[o] && s[o].touched && (o = void 0),
                      o
                    );
                  },
                  drawLegendSymbol: t.LegendSymbolMixin.drawLineMarker,
                  updateData: function(e) {
                    var i,
                      n,
                      o,
                      s = this.options,
                      r = this.points,
                      a = [],
                      l = this.requireSorting,
                      h = e.length === r.length,
                      c = !0;
                    if (
                      ((this.xIncrement = null),
                      e.forEach(function(e, n) {
                        var c,
                          d =
                            (t.defined(e) && this.pointClass.prototype.optionsToObject.call({ series: this }, e)) || {};
                        (c = d.x),
                          (d.id || u(c)) &&
                            (-1 === (c = this.findPointIndex(d, o)) || void 0 === c
                              ? a.push(e)
                              : r[c] && e !== s.data[c]
                              ? (r[c].update(e, !1, null, !1), (r[c].touched = !0), l && (o = c + 1))
                              : r[c] && (r[c].touched = !0),
                            (!h || n !== c || this.hasDerivedData) && (i = !0));
                      }, this),
                      i)
                    )
                      for (e = r.length; e--; ) (n = r[e]) && !n.touched && n.remove(!1);
                    else
                      h
                        ? e.forEach(function(t, e) {
                            r[e].update && t !== r[e].y && r[e].update(t, !1, null, !1);
                          })
                        : (c = !1);
                    return (
                      r.forEach(function(t) {
                        t && (t.touched = !1);
                      }),
                      !!c &&
                        (a.forEach(function(t) {
                          this.addPoint(t, !1, null, null, !1);
                        }, this),
                        !0)
                    );
                  },
                  setData: function(e, i, n, o) {
                    var s,
                      r,
                      a = this,
                      l = a.points,
                      h = (l && l.length) || 0,
                      c = a.options,
                      d = a.chart,
                      g = null,
                      m = a.xAxis,
                      y = c.turboThreshold,
                      v = this.xData,
                      b = this.yData,
                      M = (s = a.pointArrayMap) && s.length,
                      k = c.keys,
                      w = 0,
                      S = 1;
                    if (
                      ((s = (e = e || []).length),
                      (i = x(i, !0)),
                      !1 !== o &&
                        s &&
                        h &&
                        !a.cropped &&
                        !a.hasGroupedData &&
                        a.visible &&
                        !a.isSeriesBoosting &&
                        (r = this.updateData(e)),
                      !r)
                    ) {
                      if (
                        ((a.xIncrement = null),
                        (a.colorCounter = 0),
                        this.parallelArrays.forEach(function(t) {
                          a[t + 'Data'].length = 0;
                        }),
                        y && s > y)
                      ) {
                        for (n = 0; null === g && n < s; ) (g = e[n]), n++;
                        if (u(g)) for (n = 0; n < s; n++) (v[n] = this.autoIncrement()), (b[n] = e[n]);
                        else if (p(g))
                          if (M) for (n = 0; n < s; n++) (v[n] = (g = e[n])[0]), (b[n] = g.slice(1, M + 1));
                          else
                            for (
                              k && ((w = 0 <= (w = k.indexOf('x')) ? w : 0), (S = 0 <= (S = k.indexOf('y')) ? S : 1)),
                                n = 0;
                              n < s;
                              n++
                            )
                              (v[n] = (g = e[n])[w]), (b[n] = g[S]);
                        else t.error(12, !1, d);
                      } else
                        for (n = 0; n < s; n++)
                          void 0 !== e[n] &&
                            (a.pointClass.prototype.applyOptions.apply((g = { series: a }), [e[n]]),
                            a.updateParallelArrays(g, n));
                      for (
                        b && f(b[0]) && t.error(14, !0, d), a.data = [], a.options.data = a.userOptions.data = e, n = h;
                        n--;

                      )
                        l[n] && l[n].destroy && l[n].destroy();
                      m && (m.minRange = m.userMinRange),
                        (a.isDirty = d.isDirtyBox = !0),
                        (a.isDirtyData = !!l),
                        (n = !1);
                    }
                    'point' === c.legendType && (this.processData(), this.generatePoints()), i && d.redraw(n);
                  },
                  processData: function(e) {
                    var i,
                      n = this.xData,
                      o = this.yData,
                      s = n.length;
                    i = 0;
                    var r,
                      a,
                      l,
                      h = this.xAxis;
                    l = (f = this.options).cropThreshold;
                    var c,
                      d,
                      p = this.getExtremesFromAll || f.getExtremesFromAll,
                      u = this.isCartesian,
                      f = h && h.val2lin,
                      g = h && h.isLog,
                      m = this.requireSorting;
                    if (u && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !e) return !1;
                    for (
                      h && ((c = (e = h.getExtremes()).min), (d = e.max)),
                        u &&
                          this.sorted &&
                          !p &&
                          (!l || s > l || this.forceCrop) &&
                          (n[s - 1] < c || n[0] > d
                            ? ((n = []), (o = []))
                            : this.yData &&
                              (n[0] < c || n[s - 1] > d) &&
                              ((n = (i = this.cropData(this.xData, this.yData, c, d)).xData),
                              (o = i.yData),
                              (i = i.start),
                              (r = !0))),
                        l = n.length || 1;
                      --l;

                    )
                      0 < (s = g ? f(n[l]) - f(n[l - 1]) : n[l] - n[l - 1]) && (void 0 === a || s < a)
                        ? (a = s)
                        : 0 > s && m && (t.error(15, !1, this.chart), (m = !1));
                    (this.cropped = r),
                      (this.cropStart = i),
                      (this.processedXData = n),
                      (this.processedYData = o),
                      (this.closestPointRange = a);
                  },
                  cropData: function(t, e, i, n, o) {
                    var s,
                      r = t.length,
                      a = 0,
                      l = r;
                    for (o = x(o, this.cropShoulder), s = 0; s < r; s++)
                      if (t[s] >= i) {
                        a = Math.max(0, s - o);
                        break;
                      }
                    for (i = s; i < r; i++)
                      if (t[i] > n) {
                        l = i + o;
                        break;
                      }
                    return { xData: t.slice(a, l), yData: e.slice(a, l), start: a, end: l };
                  },
                  generatePoints: function() {
                    var t,
                      e,
                      i,
                      n,
                      o = (f = this.options).data,
                      s = this.data,
                      r = this.processedXData,
                      a = this.processedYData,
                      l = this.pointClass,
                      h = r.length,
                      p = this.cropStart || 0,
                      u = this.hasGroupedData,
                      f = f.keys,
                      g = [];
                    for (
                      s || u || (((s = []).length = o.length), (s = this.data = s)),
                        f && u && (this.options.keys = !1),
                        n = 0;
                      n < h;
                      n++
                    )
                      (e = p + n),
                        u
                          ? (((i = new l().init(this, [r[n]].concat(v(a[n])))).dataGroup = this.groupMap[n]),
                            i.dataGroup.options &&
                              ((i.options = i.dataGroup.options), c(i, i.dataGroup.options), delete i.dataLabels))
                          : (i = s[e]) || void 0 === o[e] || (s[e] = i = new l().init(this, o[e], r[n])),
                        i && ((i.index = e), (g[n] = i));
                    if (((this.options.keys = f), s && (h !== (t = s.length) || u)))
                      for (n = 0; n < t; n++)
                        n !== p || u || (n += h), s[n] && (s[n].destroyElements(), (s[n].plotX = void 0));
                    (this.data = s), (this.points = g), d(this, 'afterGeneratePoints');
                  },
                  getXExtremes: function(t) {
                    return { min: o(t), max: n(t) };
                  },
                  getExtremes: function(t) {
                    var e,
                      i,
                      s,
                      r,
                      a,
                      l = this.yAxis,
                      h = this.processedXData,
                      c = [],
                      f = 0,
                      g = (e = this.xAxis.getExtremes()).min,
                      m = e.max,
                      x = this.requireSorting ? this.cropShoulder : 0;
                    for (e = (t = t || this.stackedYData || this.processedYData || []).length, a = 0; a < e; a++)
                      if (
                        ((s = h[a]),
                        (i = (u((r = t[a]), !0) || p(r)) && (!l.positiveValuesOnly || r.length || 0 < r)),
                        (s =
                          this.getExtremesFromAll ||
                          this.options.getExtremesFromAll ||
                          this.cropped ||
                          ((h[a + x] || s) >= g && (h[a - x] || s) <= m)),
                        i && s)
                      )
                        if ((i = r.length)) for (; i--; ) 'number' == typeof r[i] && (c[f++] = r[i]);
                        else c[f++] = r;
                    (this.dataMin = o(c)), (this.dataMax = n(c)), d(this, 'afterGetExtremes');
                  },
                  translate: function() {
                    this.processedXData || this.processData(), this.generatePoints();
                    var t,
                      e,
                      i,
                      n,
                      o,
                      r = this.options,
                      a = r.stacking,
                      h = this.xAxis,
                      c = h.categories,
                      f = this.yAxis,
                      g = this.points,
                      m = g.length,
                      y = !!this.modifyValue,
                      v = this.pointPlacementToXValue(),
                      b = u(v),
                      M = r.threshold,
                      k = r.startFromThreshold ? M : 0,
                      w = this.zoneAxis || 'y',
                      S = Number.MAX_VALUE;
                    for (t = 0; t < m; t++) {
                      var P = g[t],
                        T = P.x;
                      i = P.y;
                      var L,
                        A,
                        C = P.low,
                        E = a && f.stacks[(this.negStacks && i < (k ? 0 : M) ? '-' : '') + this.stackKey];
                      f.positiveValuesOnly && null !== i && 0 >= i && (P.isNull = !0),
                        (P.plotX = e = s(
                          Math.min(Math.max(-1e5, h.translate(T, 0, 0, 0, 1, v, 'flags' === this.type)), 1e5)
                        )),
                        a &&
                          this.visible &&
                          !P.isNull &&
                          E &&
                          E[T] &&
                          ((o = this.getStackIndicator(o, T, this.index)), (A = (L = E[T]).points[o.key])),
                        p(A) &&
                          ((i = A[1]),
                          (C = A[0]) === k && o.key === E[T].base && (C = x(u(M) && M, f.min)),
                          f.positiveValuesOnly && 0 >= C && (C = null),
                          (P.total = P.stackTotal = L.total),
                          (P.percentage = L.total && (P.y / L.total) * 100),
                          (P.stackY = i),
                          L.setOffset(this.pointXOffset || 0, this.barW || 0)),
                        (P.yBottom = l(C) ? Math.min(Math.max(-1e5, f.translate(C, 0, 1, 0, 1)), 1e5) : null),
                        y && (i = this.modifyValue(i, P)),
                        (P.plotY = i =
                          'number' == typeof i && 1 / 0 !== i
                            ? Math.min(Math.max(-1e5, f.translate(i, 0, 1, 0, 1)), 1e5)
                            : void 0),
                        (P.isInside = void 0 !== i && 0 <= i && i <= f.len && 0 <= e && e <= h.len),
                        (P.clientX = b ? s(h.translate(T, 0, 0, 0, 1, v)) : e),
                        (P.negative = P[w] < (r[w + 'Threshold'] || M || 0)),
                        (P.category = c && void 0 !== c[P.x] ? c[P.x] : P.x),
                        P.isNull || (void 0 !== n && (S = Math.min(S, Math.abs(e - n))), (n = e)),
                        (P.zone = this.zones.length && P.getZone());
                    }
                    (this.closestPointRangePx = S), d(this, 'afterTranslate');
                  },
                  getValidPoints: function(t, e, i) {
                    var n = this.chart;
                    return (t || this.points || []).filter(function(t) {
                      return !(e && !n.isInsidePlot(t.plotX, t.plotY, n.inverted)) && (i || !t.isNull);
                    });
                  },
                  setClip: function(t) {
                    var e = this.chart,
                      i = this.options,
                      n = e.renderer,
                      o = e.inverted,
                      s = this.clipBox,
                      r = s || e.clipBox,
                      a =
                        this.sharedClipKey ||
                        ['_sharedClip', t && t.duration, t && t.easing, r.height, i.xAxis, i.yAxis].join(),
                      l = e[a],
                      h = e[a + 'm'];
                    l ||
                      (t &&
                        ((r.width = 0),
                        o && (r.x = e.plotSizeX),
                        (e[a + 'm'] = h = n.clipRect(
                          o ? e.plotSizeX + 99 : -99,
                          o ? -e.plotLeft : -e.plotTop,
                          99,
                          o ? e.chartWidth : e.chartHeight
                        ))),
                      (e[a] = l = n.clipRect(r)),
                      (l.count = { length: 0 })),
                      t && !l.count[this.index] && ((l.count[this.index] = !0), (l.count.length += 1)),
                      !1 !== i.clip &&
                        (this.group.clip(t || s ? l : e.clipRect), this.markerGroup.clip(h), (this.sharedClipKey = a)),
                      t ||
                        (l.count[this.index] && (delete l.count[this.index], --l.count.length),
                        0 === l.count.length &&
                          a &&
                          e[a] &&
                          (s || (e[a] = e[a].destroy()), e[a + 'm'] && (e[a + 'm'] = e[a + 'm'].destroy())));
                  },
                  animate: function(t) {
                    var e,
                      n = this.chart,
                      o = i(this.options.animation);
                    t
                      ? this.setClip(o)
                      : ((t = n[(e = this.sharedClipKey)]) && t.animate({ width: n.plotSizeX, x: 0 }, o),
                        n[e + 'm'] && n[e + 'm'].animate({ width: n.plotSizeX + 99, x: n.inverted ? 0 : -99 }, o),
                        (this.animate = null));
                  },
                  afterAnimate: function() {
                    this.setClip(), d(this, 'afterAnimate'), (this.finishedAnimating = !0);
                  },
                  drawPoints: function() {
                    var t,
                      e,
                      i,
                      n,
                      o,
                      s,
                      r,
                      a,
                      l,
                      h = this.points,
                      c = this.chart,
                      d = this.options.marker,
                      p = this[this.specialGroup] || this.markerGroup,
                      u = x(
                        d.enabled,
                        !((t = this.xAxis) && !t.isRadial) || null,
                        this.closestPointRangePx >= d.enabledThreshold * d.radius
                      );
                    if (!1 !== d.enabled || this._hasPointMarkers)
                      for (t = 0; t < h.length; t++)
                        (o = (n = (e = h[t]).graphic) ? 'animate' : 'attr'),
                          (s = e.marker || {}),
                          (r = !!e.marker),
                          (a = !1 !== e.isInside),
                          (i = (u && void 0 === s.enabled) || s.enabled) && !e.isNull
                            ? ((i = x(s.symbol, this.symbol)),
                              (l = this.markerAttribs(e, e.selected && 'select')),
                              n
                                ? n[a ? 'show' : 'hide'](!0).animate(l)
                                : a &&
                                  (0 < l.width || e.hasImage) &&
                                  (e.graphic = n = c.renderer.symbol(i, l.x, l.y, l.width, l.height, r ? s : d).add(p)),
                              n && !c.styledMode && n[o](this.pointAttribs(e, e.selected && 'select')),
                              n && n.addClass(e.getClassName(), !0))
                            : n && (e.graphic = n.destroy());
                  },
                  markerAttribs: function(t, e) {
                    var i = this.options.marker,
                      n = t.marker || {},
                      o = n.symbol || i.symbol,
                      s = x(n.radius, i.radius);
                    return (
                      e &&
                        ((i = i.states[e]),
                        (s = x(
                          (e = n.states && n.states[e]) && e.radius,
                          i && i.radius,
                          s + ((i && i.radiusPlus) || 0)
                        ))),
                      (t.hasImage = o && 0 === o.indexOf('url')),
                      t.hasImage && (s = 0),
                      (t = { x: Math.floor(t.plotX) - s, y: t.plotY - s }),
                      s && (t.width = t.height = 2 * s),
                      t
                    );
                  },
                  pointAttribs: function(t, e) {
                    var i = this.options.marker,
                      n = ((a = t && t.options) && a.marker) || {},
                      o = this.color,
                      s = a && a.color,
                      r = t && t.color,
                      a = x(n.lineWidth, i.lineWidth),
                      l = t && t.zone && t.zone.color;
                    return (
                      (t = 1),
                      (o = s || l || r || o),
                      (s = n.fillColor || i.fillColor || o),
                      (o = n.lineColor || i.lineColor || o),
                      e &&
                        ((i = i.states[e]),
                        (a = x(
                          (e = (n.states && n.states[e]) || {}).lineWidth,
                          i.lineWidth,
                          a + x(e.lineWidthPlus, i.lineWidthPlus, 0)
                        )),
                        (s = e.fillColor || i.fillColor || s),
                        (o = e.lineColor || i.lineColor || o),
                        (t = x(e.opacity, i.opacity, t))),
                      { stroke: o, 'stroke-width': a, fill: s, opacity: t }
                    );
                  },
                  destroy: function(e) {
                    var i,
                      n,
                      o,
                      s = this,
                      r = s.chart,
                      a = /AppleWebKit\/533/.test(k.navigator.userAgent),
                      l = s.data || [];
                    for (
                      d(s, 'destroy'),
                        e || y(s),
                        (s.axisTypes || []).forEach(function(t) {
                          (o = s[t]) && o.series && (h(o.series, s), (o.isDirty = o.forceRedraw = !0));
                        }),
                        s.legendItem && s.chart.legend.destroyItem(s),
                        i = l.length;
                      i--;

                    )
                      (n = l[i]) && n.destroy && n.destroy();
                    (s.points = null),
                      t.clearTimeout(s.animationTimeout),
                      m(s, function(t, e) {
                        t instanceof b && !t.survive && t[a && 'group' === e ? 'hide' : 'destroy']();
                      }),
                      r.hoverSeries === s && (r.hoverSeries = null),
                      h(r.series, s),
                      r.orderSeries(),
                      m(s, function(t, i) {
                        (e && 'hcEvents' === i) || delete s[i];
                      });
                  },
                  getGraphPath: function(t, e, i) {
                    var n,
                      o,
                      s = this,
                      r = s.options,
                      a = r.step,
                      h = [],
                      c = [];
                    return (
                      (n = (t = t || s.points).reversed) && t.reverse(),
                      (a = { right: 1, center: 2 }[a] || (a && 3)) && n && (a = 4 - a),
                      !r.connectNulls || e || i || (t = this.getValidPoints(t)),
                      t.forEach(function(n, d) {
                        var p = n.plotX,
                          u = n.plotY,
                          f = t[d - 1];
                        (n.leftCliff || (f && f.rightCliff)) && !i && (o = !0),
                          n.isNull && !l(e) && 0 < d
                            ? (o = !r.connectNulls)
                            : n.isNull && !e
                            ? (o = !0)
                            : (0 === d || o
                                ? (d = ['M', n.plotX, n.plotY])
                                : s.getPointSpline
                                ? (d = s.getPointSpline(t, n, d))
                                : a
                                ? (d =
                                    1 === a
                                      ? ['L', f.plotX, u]
                                      : 2 === a
                                      ? ['L', (f.plotX + p) / 2, f.plotY, 'L', (f.plotX + p) / 2, u]
                                      : ['L', p, f.plotY]).push('L', p, u)
                                : (d = ['L', p, u]),
                              c.push(n.x),
                              a && (c.push(n.x), 2 === a && c.push(n.x)),
                              h.push.apply(h, d),
                              (o = !1));
                      }),
                      (h.xMap = c),
                      (s.graphPath = h)
                    );
                  },
                  drawGraph: function() {
                    var t = this,
                      e = this.options,
                      i = (this.gappedPath || this.getGraphPath).call(this),
                      n = this.chart.styledMode,
                      o = [['graph', 'highcharts-graph']];
                    n || o[0].push(e.lineColor || this.color || '#cccccc', e.dashStyle),
                      (o = t.getZonesGraphs(o)).forEach(function(o, s) {
                        var r = o[0],
                          a = t[r],
                          l = a ? 'animate' : 'attr';
                        a
                          ? ((a.endX = t.preventGraphAnimation ? null : i.xMap), a.animate({ d: i }))
                          : i.length &&
                            (t[r] = a = t.chart.renderer
                              .path(i)
                              .addClass(o[1])
                              .attr({ zIndex: 1 })
                              .add(t.group)),
                          a &&
                            !n &&
                            ((r = {
                              stroke: o[2],
                              'stroke-width': e.lineWidth,
                              fill: (t.fillGraph && t.color) || 'none'
                            }),
                            o[3]
                              ? (r.dashstyle = o[3])
                              : 'square' !== e.linecap && (r['stroke-linecap'] = r['stroke-linejoin'] = 'round'),
                            a[l](r).shadow(2 > s && e.shadow)),
                          a && ((a.startX = i.xMap), (a.isArea = i.isArea));
                      });
                  },
                  getZonesGraphs: function(t) {
                    return (
                      this.zones.forEach(function(e, i) {
                        (i = [
                          'zone-graph-' + i,
                          'highcharts-graph highcharts-zone-graph-' + i + ' ' + (e.className || '')
                        ]),
                          this.chart.styledMode || i.push(e.color || this.color, e.dashStyle || this.options.dashStyle),
                          t.push(i);
                      }, this),
                      t
                    );
                  },
                  applyZones: function() {
                    var t,
                      e,
                      i,
                      n,
                      o,
                      s,
                      r,
                      a,
                      l,
                      h = this,
                      c = this.chart,
                      d = c.renderer,
                      p = this.zones,
                      u = this.clips || [],
                      f = this.graph,
                      g = this.area,
                      m = Math.max(c.chartWidth, c.chartHeight),
                      y = this[(this.zoneAxis || 'y') + 'Axis'],
                      v = c.inverted,
                      b = !1;
                    p.length &&
                      (f || g) &&
                      y &&
                      void 0 !== y.min &&
                      ((o = y.reversed),
                      (s = y.horiz),
                      f && !this.showLine && f.hide(),
                      g && g.hide(),
                      (n = y.getExtremes()),
                      p.forEach(function(p, M) {
                        (t = o ? (s ? c.plotWidth : 0) : s ? 0 : y.toPixels(n.min) || 0),
                          (t = Math.min(Math.max(x(e, t), 0), m)),
                          (e = Math.min(Math.max(Math.round(y.toPixels(x(p.value, n.max), !0) || 0), 0), m)),
                          b && (t = e = y.toPixels(n.max)),
                          (r = Math.abs(t - e)),
                          (a = Math.min(t, e)),
                          (l = Math.max(t, e)),
                          y.isXAxis
                            ? ((i = { x: v ? l : a, y: 0, width: r, height: m }), s || (i.x = c.plotHeight - i.x))
                            : ((i = { x: 0, y: v ? l : a, width: m, height: r }), s && (i.y = c.plotWidth - i.y)),
                          v &&
                            d.isVML &&
                            (i = y.isXAxis
                              ? { x: 0, y: o ? a : l, height: i.width, width: c.chartWidth }
                              : { x: i.y - c.plotLeft - c.spacingBox.x, y: 0, width: i.height, height: c.chartHeight }),
                          u[M]
                            ? u[M].animate(i)
                            : ((u[M] = d.clipRect(i)),
                              f && h['zone-graph-' + M].clip(u[M]),
                              g && h['zone-area-' + M].clip(u[M])),
                          (b = p.value > n.max),
                          h.resetZones && 0 === e && (e = void 0);
                      }),
                      (this.clips = u));
                  },
                  invertGroups: function(t) {
                    function i() {
                      ['group', 'markerGroup'].forEach(function(e) {
                        o[e] &&
                          (s.renderer.isVML && o[e].attr({ width: o.yAxis.len, height: o.xAxis.len }),
                          (o[e].width = o.yAxis.len),
                          (o[e].height = o.xAxis.len),
                          o[e].invert(t));
                      });
                    }
                    var n,
                      o = this,
                      s = o.chart;
                    o.xAxis && ((n = e(s, 'resize', i)), e(o, 'destroy', n), i(), (o.invertGroups = i));
                  },
                  plotGroup: function(t, e, i, n, o) {
                    var s = this[t],
                      r = !s;
                    return (
                      r &&
                        (this[t] = s = this.chart.renderer
                          .g()
                          .attr({ zIndex: n || 0.1 })
                          .add(o)),
                      s.addClass(
                        'highcharts-' +
                          e +
                          ' highcharts-series-' +
                          this.index +
                          ' highcharts-' +
                          this.type +
                          '-series ' +
                          (l(this.colorIndex) ? 'highcharts-color-' + this.colorIndex + ' ' : '') +
                          (this.options.className || '') +
                          (s.hasClass('highcharts-tracker') ? ' highcharts-tracker' : ''),
                        !0
                      ),
                      s.attr({ visibility: i })[r ? 'attr' : 'animate'](this.getPlotBox()),
                      s
                    );
                  },
                  getPlotBox: function() {
                    var t = this.chart,
                      e = this.xAxis,
                      i = this.yAxis;
                    return (
                      t.inverted && ((e = i), (i = this.xAxis)),
                      { translateX: e ? e.left : t.plotLeft, translateY: i ? i.top : t.plotTop, scaleX: 1, scaleY: 1 }
                    );
                  },
                  render: function() {
                    var t,
                      e = this,
                      n = e.chart,
                      o = e.options,
                      s = !!e.animate && n.renderer.isSVG && i(o.animation).duration,
                      r = e.visible ? 'inherit' : 'hidden',
                      a = o.zIndex,
                      l = e.hasRendered,
                      h = n.seriesGroup,
                      c = n.inverted;
                    d(this, 'render'),
                      (t = e.plotGroup('group', 'series', r, a, h)),
                      (e.markerGroup = e.plotGroup('markerGroup', 'markers', r, a, h)),
                      s && e.animate(!0),
                      (t.inverted = !(!e.isCartesian && !e.invertable) && c),
                      e.drawGraph && (e.drawGraph(), e.applyZones()),
                      e.visible && e.drawPoints(),
                      e.drawDataLabels && e.drawDataLabels(),
                      e.redrawPoints && e.redrawPoints(),
                      e.drawTracker && !1 !== e.options.enableMouseTracking && e.drawTracker(),
                      e.invertGroups(c),
                      !1 === o.clip || e.sharedClipKey || l || t.clip(n.clipRect),
                      s && e.animate(),
                      l ||
                        (e.animationTimeout = M(function() {
                          e.afterAnimate();
                        }, s)),
                      (e.isDirty = !1),
                      (e.hasRendered = !0),
                      d(e, 'afterRender');
                  },
                  redraw: function() {
                    var t = this.chart,
                      e = this.isDirty || this.isDirtyData,
                      i = this.group,
                      n = this.xAxis,
                      o = this.yAxis;
                    i &&
                      (t.inverted && i.attr({ width: t.plotWidth, height: t.plotHeight }),
                      i.animate({ translateX: x(n && n.left, t.plotLeft), translateY: x(o && o.top, t.plotTop) })),
                      this.translate(),
                      this.render(),
                      e && delete this.kdTree;
                  },
                  kdAxisArray: ['clientX', 'plotY'],
                  searchPoint: function(t, e) {
                    var i = this.xAxis,
                      n = this.yAxis,
                      o = this.chart.inverted;
                    return this.searchKDTree(
                      {
                        clientX: o ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                        plotY: o ? n.len - t.chartX + n.pos : t.chartY - n.pos
                      },
                      e,
                      t
                    );
                  },
                  buildKDTree: function(t) {
                    this.buildingKdTree = !0;
                    var e = this,
                      i = -1 < e.options.findNearestPointBy.indexOf('y') ? 2 : 1;
                    delete e.kdTree,
                      M(
                        function() {
                          (e.kdTree = (function t(i, n, o) {
                            var s, r;
                            if ((r = i && i.length))
                              return (
                                (s = e.kdAxisArray[n % o]),
                                i.sort(function(t, e) {
                                  return t[s] - e[s];
                                }),
                                {
                                  point: i[(r = Math.floor(r / 2))],
                                  left: t(i.slice(0, r), n + 1, o),
                                  right: t(i.slice(r + 1), n + 1, o)
                                }
                              );
                          })(e.getValidPoints(null, !e.directTouch), i, i)),
                            (e.buildingKdTree = !1);
                        },
                        e.options.kdNow || (t && 'touchstart' === t.type) ? 0 : 1
                      );
                  },
                  searchKDTree: function(t, e, i) {
                    var n = this,
                      o = this.kdAxisArray[0],
                      s = this.kdAxisArray[1],
                      r = e ? 'distX' : 'dist';
                    if (
                      ((e = -1 < n.options.findNearestPointBy.indexOf('y') ? 2 : 1),
                      this.kdTree || this.buildingKdTree || this.buildKDTree(i),
                      this.kdTree)
                    )
                      return (function t(e, i, a, h) {
                        var c,
                          d,
                          p = i.point,
                          u = n.kdAxisArray[a % h],
                          f = p;
                        return (
                          (d = l(e[o]) && l(p[o]) ? Math.pow(e[o] - p[o], 2) : null),
                          (c = l(e[s]) && l(p[s]) ? Math.pow(e[s] - p[s], 2) : null),
                          (p.dist = l((c = (d || 0) + (c || 0))) ? Math.sqrt(c) : Number.MAX_VALUE),
                          (p.distX = l(d) ? Math.sqrt(d) : Number.MAX_VALUE),
                          (d = 0 > (u = e[u] - p[u]) ? 'right' : 'left'),
                          i[(c = 0 > u ? 'left' : 'right')] && (f = (c = t(e, i[c], a + 1, h))[r] < f[r] ? c : p),
                          i[d] && Math.sqrt(u * u) < f[r] && (f = (e = t(e, i[d], a + 1, h))[r] < f[r] ? e : f),
                          f
                        );
                      })(t, this.kdTree, e, e);
                  },
                  pointPlacementToXValue: function() {
                    var t = this.options.pointPlacement;
                    return (
                      'between' === t && (t = 0.5),
                      u(t) && (t *= x(this.options.pointRange || this.xAxis.pointRange)),
                      t
                    );
                  }
                }
              );
            }),
            e(i, 'parts/Stacking.js', [i['parts/Globals.js']], function(t) {
              var e = t.Axis,
                i = t.Chart,
                n = t.correctFloat,
                o = t.defined,
                s = t.destroyObjectProperties,
                r = t.format,
                a = t.objectEach,
                l = t.pick,
                h = t.Series;
              (t.StackItem = function(t, e, i, n, o) {
                var s = t.chart.inverted;
                (this.axis = t),
                  (this.isNegative = i),
                  (this.options = e),
                  (this.x = n),
                  (this.total = null),
                  (this.points = {}),
                  (this.stack = o),
                  (this.rightCliff = this.leftCliff = 0),
                  (this.alignOptions = {
                    align: e.align || (s ? (i ? 'left' : 'right') : 'center'),
                    verticalAlign: e.verticalAlign || (s ? 'middle' : i ? 'bottom' : 'top'),
                    y: l(e.y, s ? 4 : i ? 14 : -6),
                    x: l(e.x, s ? (i ? -6 : 6) : 0)
                  }),
                  (this.textAlign = e.textAlign || (s ? (i ? 'right' : 'left') : 'center'));
              }),
                (t.StackItem.prototype = {
                  destroy: function() {
                    s(this, this.axis);
                  },
                  render: function(t) {
                    var e = this.axis.chart,
                      i = this.options,
                      n = (n = i.format) ? r(n, this, e.time) : i.formatter.call(this);
                    this.label
                      ? this.label.attr({ text: n, visibility: 'hidden' })
                      : (this.label = e.renderer
                          .text(n, null, null, i.useHTML)
                          .css(i.style)
                          .attr({ align: this.textAlign, rotation: i.rotation, visibility: 'hidden' })
                          .add(t)),
                      (this.label.labelrank = e.plotHeight);
                  },
                  setOffset: function(t, e) {
                    var i = this.axis,
                      n = i.chart,
                      s = i.translate(i.usePercentage ? 100 : this.total, 0, 0, 0, 1),
                      r = i.translate(0);
                    (r = o(s) && Math.abs(s - r)),
                      (t = n.xAxis[0].translate(this.x) + t),
                      (i = o(s) && this.getStackBox(n, this, t, s, e, r, i)),
                      (e = this.label) &&
                        i &&
                        (e.align(this.alignOptions, null, i),
                        (i = e.alignAttr),
                        e[!1 === this.options.crop || n.isInsidePlot(i.x, i.y) ? 'show' : 'hide'](!0));
                  },
                  getStackBox: function(t, e, i, n, o, s, r) {
                    var a = e.axis.reversed,
                      l = t.inverted;
                    return (
                      (t = r.height + r.pos - (l ? t.plotLeft : t.plotTop)),
                      (e = (e.isNegative && !a) || (!e.isNegative && a)),
                      {
                        x: l ? (e ? n : n - s) : i,
                        y: l ? t - i - o : e ? t - n - s : t - n,
                        width: l ? s : o,
                        height: l ? o : s
                      }
                    );
                  }
                }),
                (i.prototype.getStacks = function() {
                  var t = this;
                  t.yAxis.forEach(function(t) {
                    t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks);
                  }),
                    t.series.forEach(function(e) {
                      !e.options.stacking ||
                        (!0 !== e.visible && !1 !== t.options.chart.ignoreHiddenSeries) ||
                        (e.stackKey = e.type + l(e.options.stack, ''));
                    });
                }),
                (e.prototype.buildStacks = function() {
                  var t,
                    e = this.series,
                    i = l(this.options.reversedStacks, !0),
                    n = e.length;
                  if (!this.isXAxis) {
                    for (this.usePercentage = !1, t = n; t--; ) e[i ? t : n - t - 1].setStackedPoints();
                    for (t = 0; t < n; t++) e[t].modifyStacks();
                  }
                }),
                (e.prototype.renderStackTotals = function() {
                  var t = this.chart,
                    e = this.stacks,
                    i = this.stackTotalGroup;
                  i ||
                    (this.stackTotalGroup = i = t.renderer
                      .g('stack-labels')
                      .attr({ visibility: 'visible', zIndex: 6 })
                      .add()),
                    i.translate(t.plotLeft, t.plotTop),
                    a(e, function(t) {
                      a(t, function(t) {
                        t.render(i);
                      });
                    });
                }),
                (e.prototype.resetStacks = function() {
                  var t = this;
                  t.isXAxis ||
                    a(t.stacks, function(e) {
                      a(e, function(i, n) {
                        i.touched < t.stacksTouched
                          ? (i.destroy(), delete e[n])
                          : ((i.total = null), (i.cumulative = null));
                      });
                    });
                }),
                (e.prototype.cleanStacks = function() {
                  var t;
                  this.isXAxis ||
                    (this.oldStacks && (t = this.stacks = this.oldStacks),
                    a(t, function(t) {
                      a(t, function(t) {
                        t.cumulative = t.total;
                      });
                    }));
                }),
                (h.prototype.setStackedPoints = function() {
                  if (
                    this.options.stacking &&
                    (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)
                  ) {
                    var e,
                      i,
                      s,
                      r,
                      a,
                      h,
                      c,
                      d = this.processedXData,
                      p = this.processedYData,
                      u = [],
                      f = p.length,
                      g = (y = this.options).threshold,
                      m = l(y.startFromThreshold && g, 0),
                      x = y.stack,
                      y = y.stacking,
                      v = this.stackKey,
                      b = '-' + v,
                      M = this.negStacks,
                      k = this.yAxis,
                      w = k.stacks,
                      S = k.oldStacks;
                    for (k.stacksTouched += 1, a = 0; a < f; a++)
                      (c = p[a]),
                        (r = (e = this.getStackIndicator(e, (h = d[a]), this.index)).key),
                        w[(s = (i = M && c < (m ? 0 : g)) ? b : v)] || (w[s] = {}),
                        w[s][h] ||
                          (S[s] && S[s][h]
                            ? ((w[s][h] = S[s][h]), (w[s][h].total = null))
                            : (w[s][h] = new t.StackItem(k, k.options.stackLabels, i, h, x))),
                        (s = w[s][h]),
                        null !== c
                          ? ((s.points[r] = s.points[this.index] = [l(s.cumulative, m)]),
                            o(s.cumulative) || (s.base = r),
                            (s.touched = k.stacksTouched),
                            0 < e.index &&
                              !1 === this.singleStacks &&
                              (s.points[r][0] = s.points[this.index + ',' + h + ',0'][0]))
                          : (s.points[r] = s.points[this.index] = null),
                        'percent' === y
                          ? ((i = i ? v : b),
                            (s.total =
                              M && w[i] && w[i][h]
                                ? ((i = w[i][h]).total = Math.max(i.total, s.total) + Math.abs(c) || 0)
                                : n(s.total + (Math.abs(c) || 0))))
                          : (s.total = n(s.total + (c || 0))),
                        (s.cumulative = l(s.cumulative, m) + (c || 0)),
                        null !== c && (s.points[r].push(s.cumulative), (u[a] = s.cumulative));
                    'percent' === y && (k.usePercentage = !0), (this.stackedYData = u), (k.oldStacks = {});
                  }
                }),
                (h.prototype.modifyStacks = function() {
                  var t,
                    e = this,
                    i = e.stackKey,
                    n = e.yAxis.stacks,
                    o = e.processedXData,
                    s = e.options.stacking;
                  e[s + 'Stacker'] &&
                    [i, '-' + i].forEach(function(i) {
                      for (var r, a, l = o.length; l--; )
                        (t = e.getStackIndicator(t, (r = o[l]), e.index, i)),
                          (a = (r = n[i] && n[i][r]) && r.points[t.key]) && e[s + 'Stacker'](a, r, l);
                    });
                }),
                (h.prototype.percentStacker = function(t, e, i) {
                  (t[0] = n(t[0] * (e = e.total ? 100 / e.total : 0))),
                    (t[1] = n(t[1] * e)),
                    (this.stackedYData[i] = t[1]);
                }),
                (h.prototype.getStackIndicator = function(t, e, i, n) {
                  return (
                    !o(t) || t.x !== e || (n && t.key !== n) ? (t = { x: e, index: 0, key: n }) : t.index++,
                    (t.key = [i, e, t.index].join()),
                    t
                  );
                });
            }),
            e(i, 'parts/Dynamics.js', [i['parts/Globals.js']], function(t) {
              var e = t.addEvent,
                i = t.animate,
                n = t.Axis,
                o = t.Chart,
                s = t.createElement,
                r = t.css,
                a = t.defined,
                l = t.erase,
                h = t.extend,
                c = t.fireEvent,
                d = t.isNumber,
                p = t.isObject,
                u = t.isArray,
                f = t.merge,
                g = t.objectEach,
                m = t.pick,
                x = t.Point,
                y = t.Series,
                v = t.seriesTypes,
                b = t.setAnimation,
                M = t.splat;
              (t.cleanRecursively = function(e, i) {
                var n = {};
                return (
                  g(e, function(o, s) {
                    p(e[s], !0) && i[s]
                      ? ((o = t.cleanRecursively(e[s], i[s])), Object.keys(o).length && (n[s] = o))
                      : (p(e[s]) || e[s] !== i[s]) && (n[s] = e[s]);
                  }),
                  n
                );
              }),
                h(o.prototype, {
                  addSeries: function(t, e, i) {
                    var n,
                      o = this;
                    return (
                      t &&
                        ((e = m(e, !0)),
                        c(o, 'addSeries', { options: t }, function() {
                          (n = o.initSeries(t)),
                            (o.isDirtyLegend = !0),
                            o.linkSeries(),
                            c(o, 'afterAddSeries', { series: n }),
                            e && o.redraw(i);
                        })),
                      n
                    );
                  },
                  addAxis: function(t, e, i, o) {
                    var s = e ? 'xAxis' : 'yAxis',
                      r = this.options;
                    return (
                      (t = f(t, { index: this[s].length, isX: e })),
                      (e = new n(this, t)),
                      (r[s] = M(r[s] || {})),
                      r[s].push(t),
                      m(i, !0) && this.redraw(o),
                      e
                    );
                  },
                  showLoading: function(t) {
                    var n = this,
                      o = n.options,
                      a = n.loadingDiv,
                      l = o.loading,
                      c = function() {
                        a &&
                          r(a, {
                            left: n.plotLeft + 'px',
                            top: n.plotTop + 'px',
                            width: n.plotWidth + 'px',
                            height: n.plotHeight + 'px'
                          });
                      };
                    a ||
                      ((n.loadingDiv = a = s(
                        'div',
                        { className: 'highcharts-loading highcharts-loading-hidden' },
                        null,
                        n.container
                      )),
                      (n.loadingSpan = s('span', { className: 'highcharts-loading-inner' }, null, a)),
                      e(n, 'redraw', c)),
                      (a.className = 'highcharts-loading'),
                      (n.loadingSpan.innerHTML = t || o.lang.loading),
                      n.styledMode ||
                        (r(a, h(l.style, { zIndex: 10 })),
                        r(n.loadingSpan, l.labelStyle),
                        n.loadingShown ||
                          (r(a, { opacity: 0, display: '' }),
                          i(a, { opacity: l.style.opacity || 0.5 }, { duration: l.showDuration || 0 }))),
                      (n.loadingShown = !0),
                      c();
                  },
                  hideLoading: function() {
                    var t = this.options,
                      e = this.loadingDiv;
                    e &&
                      ((e.className = 'highcharts-loading highcharts-loading-hidden'),
                      this.styledMode ||
                        i(
                          e,
                          { opacity: 0 },
                          {
                            duration: t.loading.hideDuration || 100,
                            complete: function() {
                              r(e, { display: 'none' });
                            }
                          }
                        )),
                      (this.loadingShown = !1);
                  },
                  propsRequireDirtyBox: 'backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow'.split(
                    ' '
                  ),
                  propsRequireReflow: 'margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft'.split(
                    ' '
                  ),
                  propsRequireUpdateSeries: 'chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip'.split(
                    ' '
                  ),
                  collectionsWithUpdate: 'xAxis yAxis zAxis series colorAxis pane'.split(' '),
                  update: function(e, i, n, o) {
                    var s,
                      r,
                      l,
                      h,
                      p = this,
                      u = { credits: 'addCredits', title: 'setTitle', subtitle: 'setSubtitle' },
                      x = [];
                    c(p, 'update', { options: e }),
                      e.isResponsiveOptions || p.setResponsive(!1, !0),
                      (s = (e = t.cleanRecursively(e, p.options)).chart) &&
                        (f(!0, p.options.chart, s),
                        'className' in s && p.setClassName(s.className),
                        'reflow' in s && p.setReflow(s.reflow),
                        ('inverted' in s || 'polar' in s || 'type' in s) && (p.propFromSeries(), (r = !0)),
                        'alignTicks' in s && (r = !0),
                        g(s, function(t, e) {
                          -1 !== p.propsRequireUpdateSeries.indexOf('chart.' + e) && (l = !0),
                            -1 !== p.propsRequireDirtyBox.indexOf(e) && (p.isDirtyBox = !0),
                            -1 !== p.propsRequireReflow.indexOf(e) && (h = !0);
                        }),
                        !p.styledMode && 'style' in s && p.renderer.setStyle(s.style)),
                      !p.styledMode && e.colors && (this.options.colors = e.colors),
                      e.plotOptions && f(!0, this.options.plotOptions, e.plotOptions),
                      g(e, function(t, e) {
                        p[e] && 'function' == typeof p[e].update
                          ? p[e].update(t, !1)
                          : 'function' == typeof p[u[e]] && p[u[e]](t),
                          'chart' !== e && -1 !== p.propsRequireUpdateSeries.indexOf(e) && (l = !0);
                      }),
                      this.collectionsWithUpdate.forEach(function(t) {
                        var i;
                        e[t] &&
                          ('series' === t &&
                            ((i = []),
                            p[t].forEach(function(t, e) {
                              t.options.isInternal || i.push(m(t.options.index, e));
                            })),
                          M(e[t]).forEach(function(e, o) {
                            (o = (a(e.id) && p.get(e.id)) || p[t][i ? i[o] : o]) &&
                              o.coll === t &&
                              (o.update(e, !1), n && (o.touched = !0)),
                              !o &&
                                n &&
                                ('series' === t
                                  ? (p.addSeries(e, !1).touched = !0)
                                  : ('xAxis' !== t && 'yAxis' !== t) || (p.addAxis(e, 'xAxis' === t, !1).touched = !0));
                          }),
                          n &&
                            p[t].forEach(function(t) {
                              t.touched || t.options.isInternal ? delete t.touched : x.push(t);
                            }));
                      }),
                      x.forEach(function(t) {
                        t.remove && t.remove(!1);
                      }),
                      r &&
                        p.axes.forEach(function(t) {
                          t.update({}, !1);
                        }),
                      l &&
                        p.series.forEach(function(t) {
                          t.update({}, !1);
                        }),
                      e.loading && f(!0, p.options.loading, e.loading),
                      (r = s && s.width),
                      t.isString((s = s && s.height)) && (s = t.relativeLength(s, r || p.chartWidth)),
                      h || (d(r) && r !== p.chartWidth) || (d(s) && s !== p.chartHeight)
                        ? p.setSize(r, s, o)
                        : m(i, !0) && p.redraw(o),
                      c(p, 'afterUpdate', { options: e, redraw: i, animation: o });
                  },
                  setSubtitle: function(t) {
                    this.setTitle(void 0, t);
                  }
                }),
                h(x.prototype, {
                  update: function(t, e, i, n) {
                    function o() {
                      r.applyOptions(t),
                        null === r.y && l && (r.graphic = l.destroy()),
                        p(t, !0) &&
                          (l && l.element && t && t.marker && void 0 !== t.marker.symbol && (r.graphic = l.destroy()),
                          t && t.dataLabels && r.dataLabel && (r.dataLabel = r.dataLabel.destroy()),
                          r.connector && (r.connector = r.connector.destroy())),
                        a.updateParallelArrays(r, (s = r.index)),
                        (c.data[s] = p(c.data[s], !0) || p(t, !0) ? r.options : m(t, c.data[s])),
                        (a.isDirty = a.isDirtyData = !0),
                        !a.fixedBox && a.hasCartesianSeries && (h.isDirtyBox = !0),
                        'point' === c.legendType && (h.isDirtyLegend = !0),
                        e && h.redraw(i);
                    }
                    var s,
                      r = this,
                      a = r.series,
                      l = r.graphic,
                      h = a.chart,
                      c = a.options;
                    (e = m(e, !0)), !1 === n ? o() : r.firePointEvent('update', { options: t }, o);
                  },
                  remove: function(t, e) {
                    this.series.removePoint(this.series.data.indexOf(this), t, e);
                  }
                }),
                h(y.prototype, {
                  addPoint: function(t, e, i, n, o) {
                    var s,
                      r,
                      a,
                      l,
                      h = this.options,
                      d = this.data,
                      p = this.chart,
                      u = (u = this.xAxis) && u.hasNames && u.names,
                      f = h.data,
                      g = this.xData;
                    if (
                      ((e = m(e, !0)),
                      this.pointClass.prototype.applyOptions.apply((s = { series: this }), [t]),
                      (l = s.x),
                      (a = g.length),
                      this.requireSorting && l < g[a - 1])
                    )
                      for (r = !0; a && g[a - 1] > l; ) a--;
                    this.updateParallelArrays(s, 'splice', a, 0, 0),
                      this.updateParallelArrays(s, a),
                      u && s.name && (u[l] = s.name),
                      f.splice(a, 0, t),
                      r && (this.data.splice(a, 0, null), this.processData()),
                      'point' === h.legendType && this.generatePoints(),
                      i &&
                        (d[0] && d[0].remove
                          ? d[0].remove(!1)
                          : (d.shift(), this.updateParallelArrays(s, 'shift'), f.shift())),
                      !1 !== o && c(this, 'addPoint', { point: s }),
                      (this.isDirtyData = this.isDirty = !0),
                      e && p.redraw(n);
                  },
                  removePoint: function(t, e, i) {
                    var n = this,
                      o = n.data,
                      s = o[t],
                      r = n.points,
                      a = n.chart,
                      l = function() {
                        r && r.length === o.length && r.splice(t, 1),
                          o.splice(t, 1),
                          n.options.data.splice(t, 1),
                          n.updateParallelArrays(s || { series: n }, 'splice', t, 1),
                          s && s.destroy(),
                          (n.isDirty = !0),
                          (n.isDirtyData = !0),
                          e && a.redraw();
                      };
                    b(i, a), (e = m(e, !0)), s ? s.firePointEvent('remove', null, l) : l();
                  },
                  remove: function(t, e, i, n) {
                    function o() {
                      s.destroy(n),
                        (s.remove = null),
                        (r.isDirtyLegend = r.isDirtyBox = !0),
                        r.linkSeries(),
                        m(t, !0) && r.redraw(e);
                    }
                    var s = this,
                      r = s.chart;
                    !1 !== i ? c(s, 'remove', null, o) : o();
                  },
                  update: function(e, i) {
                    (e = t.cleanRecursively(e, this.userOptions)), c(this, 'update', { options: e });
                    var n,
                      o,
                      s = this,
                      r = s.chart,
                      a = s.userOptions,
                      l = s.initialType || s.type,
                      d = e.type || a.type || r.options.chart.type,
                      p = !(
                        this.hasDerivedData ||
                        e.dataGrouping ||
                        (d && d !== this.type) ||
                        void 0 !== e.pointStart ||
                        e.pointInterval ||
                        e.pointIntervalUnit ||
                        e.keys
                      ),
                      u = v[l].prototype,
                      g = ['group', 'markerGroup', 'dataLabelsGroup'],
                      x = ['navigatorSeries', 'baseSeries'],
                      y = s.finishedAnimating && { animation: !1 },
                      b = {};
                    for (o in (p &&
                      (x.push('data', 'isDirtyData', 'points', 'processedXData', 'processedYData', 'xIncrement'),
                      !1 !== e.visible && x.push('area', 'graph'),
                      s.parallelArrays.forEach(function(t) {
                        x.push(t + 'Data');
                      }),
                      e.data && this.setData(e.data, !1)),
                    (e = f(
                      a,
                      y,
                      { index: void 0 === a.index ? s.index : a.index, pointStart: m(a.pointStart, s.xData[0]) },
                      !p && { data: s.options.data },
                      e
                    )),
                    (x = g.concat(x)).forEach(function(t) {
                      (x[t] = s[t]), delete s[t];
                    }),
                    s.remove(!1, null, !1, !0),
                    u))
                      s[o] = void 0;
                    v[d || l] ? h(s, v[d || l].prototype) : t.error(17, !0, r),
                      x.forEach(function(t) {
                        s[t] = x[t];
                      }),
                      s.init(r, e),
                      p &&
                        this.points &&
                        (!1 === (n = s.options).visible
                          ? ((b.graphic = 1), (b.dataLabel = 1))
                          : (n.marker && !1 === n.marker.enabled && (b.graphic = 1),
                            n.dataLabels && !1 === n.dataLabels.enabled && (b.dataLabel = 1)),
                        this.points.forEach(function(t) {
                          t &&
                            t.series &&
                            (t.resolveColor(),
                            Object.keys(b).length && t.destroyElements(b),
                            !1 === n.showInLegend && t.legendItem && r.legend.destroyItem(t));
                        }, this)),
                      e.zIndex !== a.zIndex &&
                        g.forEach(function(t) {
                          s[t] && s[t].attr({ zIndex: e.zIndex });
                        }),
                      (s.initialType = l),
                      r.linkSeries(),
                      c(this, 'afterUpdate'),
                      m(i, !0) && r.redraw(!!p && void 0);
                  },
                  setName: function(t) {
                    (this.name = this.options.name = this.userOptions.name = t), (this.chart.isDirtyLegend = !0);
                  }
                }),
                h(n.prototype, {
                  update: function(t, e) {
                    var i = this.chart,
                      n = (t && t.events) || {};
                    (t = f(this.userOptions, t)),
                      i.options[this.coll].indexOf &&
                        (i.options[this.coll][i.options[this.coll].indexOf(this.userOptions)] = t),
                      g(i.options[this.coll].events, function(t, e) {
                        void 0 === n[e] && (n[e] = void 0);
                      }),
                      this.destroy(!0),
                      this.init(i, h(t, { events: n })),
                      (i.isDirtyBox = !0),
                      m(e, !0) && i.redraw();
                  },
                  remove: function(t) {
                    for (var e = this.chart, i = this.coll, n = this.series, o = n.length; o--; )
                      n[o] && n[o].remove(!1);
                    l(e.axes, this),
                      l(e[i], this),
                      u(e.options[i]) ? e.options[i].splice(this.options.index, 1) : delete e.options[i],
                      e[i].forEach(function(t, e) {
                        t.options.index = t.userOptions.index = e;
                      }),
                      this.destroy(),
                      (e.isDirtyBox = !0),
                      m(t, !0) && e.redraw();
                  },
                  setTitle: function(t, e) {
                    this.update({ title: t }, e);
                  },
                  setCategories: function(t, e) {
                    this.update({ categories: t }, e);
                  }
                });
            }),
            e(i, 'parts/AreaSeries.js', [i['parts/Globals.js']], function(t) {
              var e = t.color,
                i = t.pick,
                n = t.Series;
              (0, t.seriesType)(
                'area',
                'line',
                { softThreshold: !1, threshold: 0 },
                {
                  singleStacks: !1,
                  getStackPoints: function(e) {
                    var n,
                      o,
                      s = [],
                      r = [],
                      a = this.xAxis,
                      l = this.yAxis,
                      h = l.stacks[this.stackKey],
                      c = {},
                      d = this.index,
                      p = l.series,
                      u = p.length,
                      f = i(l.options.reversedStacks, !0) ? 1 : -1;
                    if (((e = e || this.points), this.options.stacking)) {
                      for (o = 0; o < e.length; o++) (e[o].leftNull = e[o].rightNull = null), (c[e[o].x] = e[o]);
                      t.objectEach(h, function(t, e) {
                        null !== t.total && r.push(e);
                      }),
                        r.sort(function(t, e) {
                          return t - e;
                        }),
                        (n = p.map(function(t) {
                          return t.visible;
                        })),
                        r.forEach(function(t, e) {
                          var i,
                            p,
                            g = 0;
                          if (c[t] && !c[t].isNull)
                            s.push(c[t]),
                              [-1, 1].forEach(function(s) {
                                var a = 1 === s ? 'rightNull' : 'leftNull',
                                  l = 0,
                                  g = h[r[e + s]];
                                if (g)
                                  for (o = d; 0 <= o && o < u; )
                                    (i = g.points[o]) ||
                                      (o === d ? (c[t][a] = !0) : n[o] && (p = h[t].points[o]) && (l -= p[1] - p[0])),
                                      (o += f);
                                c[t][1 === s ? 'rightCliff' : 'leftCliff'] = l;
                              });
                          else {
                            for (o = d; 0 <= o && o < u; ) {
                              if ((i = h[t].points[o])) {
                                g = i[1];
                                break;
                              }
                              o += f;
                            }
                            (g = l.translate(g, 0, 1, 0, 1)),
                              s.push({ isNull: !0, plotX: a.translate(t, 0, 0, 0, 1), x: t, plotY: g, yBottom: g });
                          }
                        });
                    }
                    return s;
                  },
                  getGraphPath: function(t) {
                    var e,
                      o,
                      s,
                      r,
                      a = n.prototype.getGraphPath,
                      l = (m = this.options).stacking,
                      h = this.yAxis,
                      c = [],
                      d = [],
                      p = this.index,
                      u = h.stacks[this.stackKey],
                      f = m.threshold,
                      g = h.getThreshold(m.threshold),
                      m = m.connectNulls || 'percent' === l,
                      x = function(e, i, n) {
                        var o = t[e];
                        e = l && u[o.x].points[p];
                        var r,
                          a,
                          m = o[n + 'Null'] || 0;
                        (n = o[n + 'Cliff'] || 0),
                          (o = !0),
                          n || m
                            ? ((r = (m ? e[0] : e[1]) + n), (a = e[0] + n), (o = !!m))
                            : !l && t[i] && t[i].isNull && (r = a = f),
                          void 0 !== r &&
                            (d.push({ plotX: s, plotY: null === r ? g : h.getThreshold(r), isNull: o, isCliff: !0 }),
                            c.push({ plotX: s, plotY: null === a ? g : h.getThreshold(a), doCurve: !1 }));
                      };
                    for (t = t || this.points, l && (t = this.getStackPoints(t)), e = 0; e < t.length; e++)
                      (o = t[e].isNull),
                        (s = i(t[e].rectPlotX, t[e].plotX)),
                        (r = i(t[e].yBottom, g)),
                        (!o || m) &&
                          (m || x(e, e - 1, 'left'),
                          (o && !l && m) || (d.push(t[e]), c.push({ x: e, plotX: s, plotY: r })),
                          m || x(e, e + 1, 'right'));
                    return (
                      (e = a.call(this, d, !0, !0)),
                      (c.reversed = !0),
                      (o = a.call(this, c, !0, !0)).length && (o[0] = 'L'),
                      (o = e.concat(o)),
                      (a = a.call(this, d, !1, m)),
                      (o.xMap = e.xMap),
                      (this.areaPath = o),
                      a
                    );
                  },
                  drawGraph: function() {
                    (this.areaPath = []), n.prototype.drawGraph.apply(this);
                    var t = this,
                      o = this.areaPath,
                      s = this.options,
                      r = [['area', 'highcharts-area', this.color, s.fillColor]];
                    this.zones.forEach(function(e, i) {
                      r.push([
                        'zone-area-' + i,
                        'highcharts-area highcharts-zone-area-' + i + ' ' + e.className,
                        e.color || t.color,
                        e.fillColor || s.fillColor
                      ]);
                    }),
                      r.forEach(function(n) {
                        var r = n[0],
                          a = t[r],
                          l = a ? 'animate' : 'attr',
                          h = {};
                        a
                          ? ((a.endX = t.preventGraphAnimation ? null : o.xMap), a.animate({ d: o }))
                          : ((h.zIndex = 0),
                            ((a = t[r] = t.chart.renderer
                              .path(o)
                              .addClass(n[1])
                              .add(t.group)).isArea = !0)),
                          t.chart.styledMode ||
                            (h.fill = i(
                              n[3],
                              e(n[2])
                                .setOpacity(i(s.fillOpacity, 0.75))
                                .get()
                            )),
                          a[l](h),
                          (a.startX = o.xMap),
                          (a.shiftUnit = s.step ? 2 : 1);
                      });
                  },
                  drawLegendSymbol: t.LegendSymbolMixin.drawRectangle
                }
              );
            }),
            e(i, 'parts/SplineSeries.js', [i['parts/Globals.js']], function(t) {
              var e = t.pick;
              (t = t.seriesType)(
                'spline',
                'line',
                {},
                {
                  getPointSpline: function(t, i, n) {
                    var o,
                      s,
                      r,
                      a,
                      l = i.plotX,
                      h = i.plotY,
                      c = t[n - 1];
                    if (
                      ((n = t[n + 1]),
                      c &&
                        !c.isNull &&
                        !1 !== c.doCurve &&
                        !i.isCliff &&
                        n &&
                        !n.isNull &&
                        !1 !== n.doCurve &&
                        !i.isCliff)
                    ) {
                      r = n.plotX;
                      var d = 0;
                      (s = (1.5 * h + (t = c.plotY)) / 2.5),
                        (a = (1.5 * h + (n = n.plotY)) / 2.5),
                        (r = (1.5 * l + r) / 2.5) != (o = (1.5 * l + c.plotX) / 2.5) &&
                          (d = ((a - s) * (r - l)) / (r - o) + h - a),
                        (a += d),
                        (s += d) > t && s > h
                          ? (a = 2 * h - (s = Math.max(t, h)))
                          : s < t && s < h && (a = 2 * h - (s = Math.min(t, h))),
                        a > n && a > h
                          ? (s = 2 * h - (a = Math.max(n, h)))
                          : a < n && a < h && (s = 2 * h - (a = Math.min(n, h))),
                        (i.rightContX = r),
                        (i.rightContY = a);
                    }
                    return (
                      (i = ['C', e(c.rightContX, c.plotX), e(c.rightContY, c.plotY), e(o, l), e(s, h), l, h]),
                      (c.rightContX = c.rightContY = null),
                      i
                    );
                  }
                }
              );
            }),
            e(i, 'parts/AreaSplineSeries.js', [i['parts/Globals.js']], function(t) {
              var e = t.seriesTypes.area.prototype;
              (0,
              t.seriesType)('areaspline', 'spline', t.defaultPlotOptions.area, { getStackPoints: e.getStackPoints, getGraphPath: e.getGraphPath, drawGraph: e.drawGraph, drawLegendSymbol: t.LegendSymbolMixin.drawRectangle });
            }),
            e(i, 'parts/ColumnSeries.js', [i['parts/Globals.js']], function(t) {
              var e = t.animObject,
                i = t.color,
                n = t.extend,
                o = t.defined,
                s = t.isNumber,
                r = t.merge,
                a = t.pick,
                l = t.Series,
                h = t.svg;
              (0, t.seriesType)(
                'column',
                'line',
                {
                  borderRadius: 0,
                  crisp: !0,
                  groupPadding: 0.2,
                  marker: null,
                  pointPadding: 0.1,
                  minPointLength: 0,
                  cropThreshold: 50,
                  pointRange: null,
                  states: {
                    hover: { halo: !1, brightness: 0.1 },
                    select: { color: '#cccccc', borderColor: '#000000' }
                  },
                  dataLabels: { align: null, verticalAlign: null, y: null },
                  softThreshold: !1,
                  startFromThreshold: !0,
                  stickyTracking: !1,
                  tooltip: { distance: 6 },
                  threshold: 0,
                  borderColor: '#ffffff'
                },
                {
                  cropShoulder: 0,
                  directTouch: !0,
                  trackerGroups: ['group', 'dataLabelsGroup'],
                  negStacks: !0,
                  init: function() {
                    l.prototype.init.apply(this, arguments);
                    var t = this,
                      e = t.chart;
                    e.hasRendered &&
                      e.series.forEach(function(e) {
                        e.type === t.type && (e.isDirty = !0);
                      });
                  },
                  getColumnMetrics: function() {
                    var t,
                      e = this,
                      i = e.xAxis,
                      n = e.yAxis,
                      o = i.options.reversedStacks,
                      s = ((o = (i.reversed && !o) || (!i.reversed && o)), {}),
                      r = 0;
                    !1 === (d = e.options).grouping
                      ? (r = 1)
                      : e.chart.series.forEach(function(i) {
                          var o,
                            a = i.options,
                            l = i.yAxis;
                          i.type !== e.type ||
                            (!i.visible && e.chart.options.chart.ignoreHiddenSeries) ||
                            n.len !== l.len ||
                            n.pos !== l.pos ||
                            (a.stacking
                              ? (void 0 === s[(t = i.stackKey)] && (s[t] = r++), (o = s[t]))
                              : !1 !== a.grouping && (o = r++),
                            (i.columnIndex = o));
                        });
                    var l = Math.min(
                        Math.abs(i.transA) *
                          (i.ordinalSlope || d.pointRange || i.closestPointRange || i.tickInterval || 1),
                        i.len
                      ),
                      h = l * d.groupPadding,
                      c = (l - 2 * h) / (r || 1),
                      d = Math.min(d.maxPointWidth || i.len, a(d.pointWidth, c * (1 - 2 * d.pointPadding)));
                    return (
                      (e.columnMetrics = {
                        width: d,
                        offset: (c - d) / 2 + (h + ((e.columnIndex || 0) + (o ? 1 : 0)) * c - l / 2) * (o ? -1 : 1)
                      }),
                      e.columnMetrics
                    );
                  },
                  crispCol: function(t, e, i, n) {
                    var o = this.chart,
                      s = -((r = this.borderWidth) % 2 ? 0.5 : 0),
                      r = r % 2 ? 0.5 : 1;
                    return (
                      o.inverted && o.renderer.isVML && (r += 1),
                      this.options.crisp && ((i = Math.round(t + i) + s), (i -= t = Math.round(t) + s)),
                      (n = Math.round(e + n) + r),
                      (s = 0.5 >= Math.abs(e) && 0.5 < n),
                      (n -= e = Math.round(e) + r),
                      s && n && (--e, (n += 1)),
                      { x: t, y: e, width: i, height: n }
                    );
                  },
                  translate: function() {
                    var t = this,
                      e = t.chart,
                      i = t.options,
                      n = (t.dense = 2 > t.closestPointRange * t.xAxis.transA),
                      s = ((n = t.borderWidth = a(i.borderWidth, n ? 0 : 1)), t.yAxis),
                      r = i.threshold,
                      h = (t.translatedThreshold = s.getThreshold(r)),
                      c = a(i.minPointLength, 5),
                      d = t.getColumnMetrics(),
                      p = d.width,
                      u = (t.barW = Math.max(p, 1 + 2 * n)),
                      f = (t.pointXOffset = d.offset);
                    e.inverted && (h -= 0.5),
                      i.pointPadding && (u = Math.ceil(u)),
                      l.prototype.translate.apply(t),
                      t.points.forEach(function(i) {
                        var n,
                          l = a(i.yBottom, h),
                          d = 999 + Math.abs(l),
                          g = p,
                          m = ((d = Math.min(Math.max(-d, i.plotY), s.len + d)), i.plotX + f),
                          x = u,
                          y = Math.min(d, l),
                          v = Math.max(d, l) - y;
                        c &&
                          Math.abs(v) < c &&
                          ((v = c),
                          (n = (!s.reversed && !i.negative) || (s.reversed && i.negative)),
                          i.y === r && t.dataMax <= r && s.min < r && (n = !n),
                          (y = Math.abs(y - h) > c ? l - c : h - (n ? c : 0))),
                          o(i.options.pointWidth) &&
                            ((g = x = Math.ceil(i.options.pointWidth)), (m -= Math.round((g - p) / 2))),
                          (i.barX = m),
                          (i.pointWidth = g),
                          (i.tooltipPos = e.inverted
                            ? [s.len + s.pos - e.plotLeft - d, t.xAxis.len - m - x / 2, v]
                            : [m + x / 2, d + s.pos - e.plotTop, v]),
                          (i.shapeType = t.pointClass.prototype.shapeType || 'rect'),
                          (i.shapeArgs = t.crispCol.apply(t, i.isNull ? [m, h, x, 0] : [m, y, x, v]));
                      });
                  },
                  getSymbol: t.noop,
                  drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
                  drawGraph: function() {
                    this.group[this.dense ? 'addClass' : 'removeClass']('highcharts-dense-data');
                  },
                  pointAttribs: function(t, e) {
                    var n,
                      o = this.options;
                    n = (p = this.pointAttrToOptions || {}).stroke || 'borderColor';
                    var s,
                      l = p['stroke-width'] || 'borderWidth',
                      h = (t && t.color) || this.color,
                      c = (t && t[n]) || o[n] || this.color || h,
                      d = (t && t[l]) || o[l] || this[l] || 0,
                      p = (t && t.dashStyle) || o.dashStyle,
                      u = a(o.opacity, 1);
                    return (
                      t &&
                        this.zones.length &&
                        ((s = t.getZone()),
                        (h = t.options.color || (s && s.color) || this.color),
                        s && ((c = s.borderColor || c), (p = s.dashStyle || p), (d = s.borderWidth || d))),
                      e &&
                        ((e = (t = r(o.states[e], (t.options.states && t.options.states[e]) || {})).brightness),
                        (h =
                          t.color ||
                          (void 0 !== e &&
                            i(h)
                              .brighten(t.brightness)
                              .get()) ||
                          h),
                        (c = t[n] || c),
                        (d = t[l] || d),
                        (p = t.dashStyle || p),
                        (u = a(t.opacity, u))),
                      (n = { fill: h, stroke: c, 'stroke-width': d, opacity: u }),
                      p && (n.dashstyle = p),
                      n
                    );
                  },
                  drawPoints: function() {
                    var t,
                      e = this,
                      i = this.chart,
                      n = e.options,
                      o = i.renderer,
                      a = n.animationLimit || 250;
                    e.points.forEach(function(l) {
                      var h = l.graphic,
                        c = h && i.pointCount < a ? 'animate' : 'attr';
                      s(l.plotY) && null !== l.y
                        ? ((t = l.shapeArgs),
                          h && h.element.nodeName !== l.shapeType && (h = h.destroy()),
                          h ? h[c](r(t)) : (l.graphic = h = o[l.shapeType](t).add(l.group || e.group)),
                          n.borderRadius && h[c]({ r: n.borderRadius }),
                          i.styledMode ||
                            h[c](e.pointAttribs(l, l.selected && 'select')).shadow(
                              !1 !== l.allowShadow && n.shadow,
                              null,
                              n.stacking && !n.borderRadius
                            ),
                          h.addClass(l.getClassName(), !0))
                        : h && (l.graphic = h.destroy());
                    });
                  },
                  animate: function(t) {
                    var i,
                      o = this,
                      s = this.yAxis,
                      r = o.options,
                      a = this.chart.inverted,
                      l = {},
                      c = a ? 'translateX' : 'translateY';
                    h &&
                      (t
                        ? ((l.scaleY = 0.001),
                          (t = Math.min(s.pos + s.len, Math.max(s.pos, s.toPixels(r.threshold)))),
                          a ? (l.translateX = t - s.len) : (l.translateY = t),
                          o.clipBox && o.setClip(),
                          o.group.attr(l))
                        : ((i = o.group.attr(c)),
                          o.group.animate(
                            { scaleY: 1 },
                            n(e(o.options.animation), {
                              step: function(t, e) {
                                (l[c] = i + e.pos * (s.pos - i)), o.group.attr(l);
                              }
                            })
                          ),
                          (o.animate = null)));
                  },
                  remove: function() {
                    var t = this,
                      e = t.chart;
                    e.hasRendered &&
                      e.series.forEach(function(e) {
                        e.type === t.type && (e.isDirty = !0);
                      }),
                      l.prototype.remove.apply(t, arguments);
                  }
                }
              );
            }),
            e(i, 'parts/BarSeries.js', [i['parts/Globals.js']], function(t) {
              (t = t.seriesType)('bar', 'column', null, { inverted: !0 });
            }),
            e(i, 'parts/ScatterSeries.js', [i['parts/Globals.js']], function(t) {
              var e = t.Series;
              (0, t.seriesType)(
                'scatter',
                'line',
                {
                  lineWidth: 0,
                  findNearestPointBy: 'xy',
                  jitter: { x: 0, y: 0 },
                  marker: { enabled: !0 },
                  tooltip: {
                    headerFormat:
                      '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',
                    pointFormat: 'x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>'
                  }
                },
                {
                  sorted: !1,
                  requireSorting: !1,
                  noSharedTooltip: !0,
                  trackerGroups: ['group', 'markerGroup', 'dataLabelsGroup'],
                  takeOrdinalPosition: !1,
                  drawGraph: function() {
                    this.options.lineWidth && e.prototype.drawGraph.call(this);
                  },
                  applyJitter: function() {
                    var t = this,
                      e = this.options.jitter,
                      i = this.points.length;
                    e &&
                      this.points.forEach(function(n, o) {
                        ['x', 'y'].forEach(function(s, r) {
                          var a,
                            l,
                            h,
                            c = 'plot' + s.toUpperCase();
                          e[s] &&
                            !n.isNull &&
                            ((h = e[s] * (a = t[s + 'Axis']).transA),
                            a &&
                              !a.isLog &&
                              ((l = Math.max(0, n[c] - h)),
                              (a = Math.min(a.len, n[c] + h)),
                              (r = 1e4 * Math.sin(o + r * i)),
                              (n[c] = l + (a - l) * (r - Math.floor(r))),
                              'x' === s && (n.clientX = n.plotX)));
                        });
                      });
                  }
                }
              ),
                t.addEvent(e, 'afterTranslate', function() {
                  this.applyJitter && this.applyJitter();
                });
            }),
            e(i, 'mixins/centered-series.js', [i['parts/Globals.js']], function(t) {
              var e = t.deg2rad,
                i = t.isNumber,
                n = t.pick,
                o = t.relativeLength;
              t.CenteredSeriesMixin = {
                getCenter: function() {
                  var t,
                    e,
                    i = this.options,
                    s = 2 * (i.slicedOffset || 0),
                    r = (a = this.chart).plotWidth - 2 * s,
                    a = a.plotHeight - 2 * s,
                    l = [n((l = i.center)[0], '50%'), n(l[1], '50%'), i.size || '100%', i.innerSize || 0],
                    h = Math.min(r, a);
                  for (t = 0; 4 > t; ++t)
                    (e = l[t]),
                      (i = 2 > t || (2 === t && /%$/.test(e))),
                      (l[t] = o(e, [r, a, h, l[2]][t]) + (i ? s : 0));
                  return l[3] > l[2] && (l[3] = l[2]), l;
                },
                getStartAndEndRadians: function(t, n) {
                  return (
                    (t = i(t) ? t : 0),
                    (n = i(n) && n > t && 360 > n - t ? n : t + 360),
                    { start: e * (t + -90), end: e * (n + -90) }
                  );
                }
              };
            }),
            e(i, 'parts/PieSeries.js', [i['parts/Globals.js']], function(t) {
              var e = t.addEvent,
                i = t.CenteredSeriesMixin,
                n = t.defined,
                o = i.getStartAndEndRadians,
                s = t.merge,
                r = t.noop,
                a = t.pick,
                l = t.Point,
                h = t.Series,
                c = t.setAnimation;
              (0, t.seriesType)(
                'pie',
                'line',
                {
                  center: [null, null],
                  clip: !1,
                  colorByPoint: !0,
                  dataLabels: {
                    allowOverlap: !0,
                    connectorPadding: 5,
                    distance: 30,
                    enabled: !0,
                    formatter: function() {
                      return this.point.isNull ? void 0 : this.point.name;
                    },
                    softConnector: !0,
                    x: 0,
                    connectorShape: 'fixedOffset',
                    crookDistance: '70%'
                  },
                  ignoreHiddenPoint: !0,
                  inactiveOtherPoints: !0,
                  legendType: 'point',
                  marker: null,
                  size: null,
                  showInLegend: !1,
                  slicedOffset: 10,
                  stickyTracking: !1,
                  tooltip: { followPointer: !0 },
                  borderColor: '#ffffff',
                  borderWidth: 1,
                  states: { hover: { brightness: 0.1 } }
                },
                {
                  isCartesian: !1,
                  requireSorting: !1,
                  directTouch: !0,
                  noSharedTooltip: !0,
                  trackerGroups: ['group', 'dataLabelsGroup'],
                  axisTypes: [],
                  pointAttribs: t.seriesTypes.column.prototype.pointAttribs,
                  animate: function(t) {
                    var e = this,
                      i = e.startAngleRad;
                    t ||
                      (e.points.forEach(function(t) {
                        var n = t.graphic,
                          o = t.shapeArgs;
                        n &&
                          (n.attr({ r: t.startR || e.center[3] / 2, start: i, end: i }),
                          n.animate({ r: o.r, start: o.start, end: o.end }, e.options.animation));
                      }),
                      (e.animate = null));
                  },
                  hasData: function() {
                    return !!this.processedXData.length;
                  },
                  updateTotals: function() {
                    var t,
                      e,
                      i = 0,
                      n = this.points,
                      o = n.length,
                      s = this.options.ignoreHiddenPoint;
                    for (t = 0; t < o; t++) (e = n[t]), (i += s && !e.visible ? 0 : e.isNull ? 0 : e.y);
                    for (this.total = i, t = 0; t < o; t++)
                      ((e = n[t]).percentage = 0 < i && (e.visible || !s) ? (e.y / i) * 100 : 0), (e.total = i);
                  },
                  generatePoints: function() {
                    h.prototype.generatePoints.call(this), this.updateTotals();
                  },
                  getX: function(t, e, i) {
                    var n = this.center,
                      o = this.radii ? this.radii[i.index] : n[2] / 2;
                    return (
                      n[0] +
                      (e ? -1 : 1) *
                        Math.cos(Math.asin(Math.max(Math.min((t - n[1]) / (o + i.labelDistance), 1), -1))) *
                        (o + i.labelDistance) +
                      (0 < i.labelDistance ? (e ? -1 : 1) * this.options.dataLabels.padding : 0)
                    );
                  },
                  translate: function(t) {
                    this.generatePoints();
                    var e,
                      i,
                      n,
                      s,
                      r,
                      l,
                      h = 0,
                      c = (m = this.options).slicedOffset,
                      d = c + (m.borderWidth || 0),
                      p = o(m.startAngle, m.endAngle),
                      u = (this.startAngleRad = p.start),
                      f = ((p = (this.endAngleRad = p.end) - u), this.points),
                      g = m.dataLabels.distance,
                      m = m.ignoreHiddenPoint,
                      x = f.length;
                    for (t || (this.center = t = this.getCenter()), r = 0; r < x; r++)
                      ((l = f[r]).labelDistance = a(l.options.dataLabels && l.options.dataLabels.distance, g)),
                        (this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, l.labelDistance)),
                        (e = u + h * p),
                        (m && !l.visible) || (h += l.percentage / 100),
                        (i = u + h * p),
                        (l.shapeType = 'arc'),
                        (l.shapeArgs = {
                          x: t[0],
                          y: t[1],
                          r: t[2] / 2,
                          innerR: t[3] / 2,
                          start: Math.round(1e3 * e) / 1e3,
                          end: Math.round(1e3 * i) / 1e3
                        }),
                        (i = (i + e) / 2) > 1.5 * Math.PI ? (i -= 2 * Math.PI) : i < -Math.PI / 2 && (i += 2 * Math.PI),
                        (l.slicedTranslation = {
                          translateX: Math.round(Math.cos(i) * c),
                          translateY: Math.round(Math.sin(i) * c)
                        }),
                        (n = (Math.cos(i) * t[2]) / 2),
                        (s = (Math.sin(i) * t[2]) / 2),
                        (l.tooltipPos = [t[0] + 0.7 * n, t[1] + 0.7 * s]),
                        (l.half = i < -Math.PI / 2 || i > Math.PI / 2 ? 1 : 0),
                        (l.angle = i),
                        (e = Math.min(d, l.labelDistance / 5)),
                        (l.labelPosition = {
                          natural: {
                            x: t[0] + n + Math.cos(i) * l.labelDistance,
                            y: t[1] + s + Math.sin(i) * l.labelDistance
                          },
                          final: {},
                          alignment: 0 > l.labelDistance ? 'center' : l.half ? 'right' : 'left',
                          connectorPosition: {
                            breakAt: { x: t[0] + n + Math.cos(i) * e, y: t[1] + s + Math.sin(i) * e },
                            touchingSliceAt: { x: t[0] + n, y: t[1] + s }
                          }
                        });
                  },
                  drawGraph: null,
                  redrawPoints: function() {
                    var t,
                      e,
                      i,
                      n,
                      o = this,
                      r = o.chart,
                      a = r.renderer,
                      l = o.options.shadow;
                    !l ||
                      o.shadowGroup ||
                      r.styledMode ||
                      (o.shadowGroup = a
                        .g('shadow')
                        .attr({ zIndex: -1 })
                        .add(o.group)),
                      o.points.forEach(function(h) {
                        var c = {};
                        if (((e = h.graphic), !h.isNull && e)) {
                          if (((n = h.shapeArgs), (t = h.getTranslate()), !r.styledMode)) {
                            var d = h.shadowGroup;
                            l && !d && (d = h.shadowGroup = a.g('shadow').add(o.shadowGroup)),
                              d && d.attr(t),
                              (i = o.pointAttribs(h, h.selected && 'select'));
                          }
                          h.delayedRendering
                            ? (e
                                .setRadialReference(o.center)
                                .attr(n)
                                .attr(t),
                              r.styledMode ||
                                e
                                  .attr(i)
                                  .attr({ 'stroke-linejoin': 'round' })
                                  .shadow(l, d),
                              (h.delayRendering = !1))
                            : (e.setRadialReference(o.center),
                              r.styledMode || s(!0, c, i),
                              s(!0, c, n, t),
                              e.animate(c)),
                            e.attr({ visibility: h.visible ? 'inherit' : 'hidden' }),
                            e.addClass(h.getClassName());
                        } else e && (h.graphic = e.destroy());
                      });
                  },
                  drawPoints: function() {
                    var t = this.chart.renderer;
                    this.points.forEach(function(e) {
                      e.graphic ||
                        ((e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group)), (e.delayedRendering = !0));
                    });
                  },
                  searchPoint: r,
                  sortByAngle: function(t, e) {
                    t.sort(function(t, i) {
                      return void 0 !== t.angle && (i.angle - t.angle) * e;
                    });
                  },
                  drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
                  getCenter: i.getCenter,
                  getSymbol: r
                },
                {
                  init: function() {
                    l.prototype.init.apply(this, arguments);
                    var t,
                      i = this;
                    return (
                      (i.name = a(i.name, 'Slice')),
                      (t = function(t) {
                        i.slice('select' === t.type);
                      }),
                      e(i, 'select', t),
                      e(i, 'unselect', t),
                      i
                    );
                  },
                  isValid: function() {
                    return t.isNumber(this.y, !0) && 0 <= this.y;
                  },
                  setVisible: function(t, e) {
                    var i = this,
                      n = i.series,
                      o = n.chart,
                      s = n.options.ignoreHiddenPoint;
                    (e = a(e, s)),
                      t !== i.visible &&
                        ((i.visible = i.options.visible = t = void 0 === t ? !i.visible : t),
                        (n.options.data[n.data.indexOf(i)] = i.options),
                        ['graphic', 'dataLabel', 'connector', 'shadowGroup'].forEach(function(e) {
                          i[e] && i[e][t ? 'show' : 'hide'](!0);
                        }),
                        i.legendItem && o.legend.colorizeItem(i, t),
                        t || 'hover' !== i.state || i.setState(''),
                        s && (n.isDirty = !0),
                        e && o.redraw());
                  },
                  slice: function(t, e, i) {
                    var o = this.series;
                    c(i, o.chart),
                      a(e, !0),
                      (this.sliced = this.options.sliced = n(t) ? t : !this.sliced),
                      (o.options.data[o.data.indexOf(this)] = this.options),
                      this.graphic.animate(this.getTranslate()),
                      this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
                  },
                  getTranslate: function() {
                    return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 };
                  },
                  haloPath: function(t) {
                    var e = this.shapeArgs;
                    return this.sliced || !this.visible
                      ? []
                      : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                          innerR: this.shapeArgs.r - 1,
                          start: e.start,
                          end: e.end
                        });
                  },
                  connectorShapes: {
                    fixedOffset: function(t, e, i) {
                      var n = e.breakAt;
                      return (
                        (e = e.touchingSliceAt),
                        ['M', t.x, t.y]
                          .concat(
                            i.softConnector
                              ? [
                                  'C',
                                  t.x + ('left' === t.alignment ? -5 : 5),
                                  t.y,
                                  2 * n.x - e.x,
                                  2 * n.y - e.y,
                                  n.x,
                                  n.y
                                ]
                              : ['L', n.x, n.y]
                          )
                          .concat(['L', e.x, e.y])
                      );
                    },
                    straight: function(t, e) {
                      return ['M', t.x, t.y, 'L', (e = e.touchingSliceAt).x, e.y];
                    },
                    crookedLine: function(e, i, n) {
                      i = i.touchingSliceAt;
                      var o = (a = this.series).center[0],
                        s = a.chart.plotWidth,
                        r = a.chart.plotLeft,
                        a = e.alignment,
                        l = this.shapeArgs.r;
                      return (
                        (n = t.relativeLength(n.crookDistance, 1)),
                        (o = ['L', (n = 'left' === a ? o + l + (s + r - o - l) * (1 - n) : r + (o - l) * n), e.y]),
                        ('left' === a ? n > e.x || n < i.x : n < e.x || n > i.x) && (o = []),
                        ['M', e.x, e.y].concat(o).concat(['L', i.x, i.y])
                      );
                    }
                  },
                  getConnectorPath: function() {
                    var t = this.labelPosition,
                      e = this.series.options.dataLabels,
                      i = e.connectorShape,
                      n = this.connectorShapes;
                    return (
                      n[i] && (i = n[i]),
                      i.call(this, { x: t.final.x, y: t.final.y, alignment: t.alignment }, t.connectorPosition, e)
                    );
                  }
                }
              );
            }),
            e(i, 'parts/DataLabels.js', [i['parts/Globals.js']], function(t) {
              var e = t.arrayMax,
                i = t.defined,
                n = t.extend,
                o = t.format,
                s = t.merge,
                r = t.noop,
                a = t.pick,
                l = t.relativeLength,
                h = t.Series,
                c = t.seriesTypes,
                d = t.stableSort,
                p = t.isArray,
                u = t.splat;
              (t.distribute = function(e, i, n) {
                function o(t, e) {
                  return t.target - e.target;
                }
                var s,
                  r,
                  l = !0,
                  h = e,
                  c = [];
                r = 0;
                var p = h.reducedLen || i;
                for (s = e.length; s--; ) r += e[s].size;
                if (r > p) {
                  for (
                    d(e, function(t, e) {
                      return (e.rank || 0) - (t.rank || 0);
                    }),
                      r = s = 0;
                    r <= p;

                  )
                    (r += e[s].size), s++;
                  c = e.splice(s - 1, e.length);
                }
                for (
                  d(e, o),
                    e = e.map(function(t) {
                      return { size: t.size, targets: [t.target], align: a(t.align, 0.5) };
                    });
                  l;

                ) {
                  for (s = e.length; s--; )
                    (l = e[s]),
                      (r = (Math.min.apply(0, l.targets) + Math.max.apply(0, l.targets)) / 2),
                      (l.pos = Math.min(Math.max(0, r - l.size * l.align), i - l.size));
                  for (s = e.length, l = !1; s--; )
                    0 < s &&
                      e[s - 1].pos + e[s - 1].size > e[s].pos &&
                      ((e[s - 1].size += e[s].size),
                      (e[s - 1].targets = e[s - 1].targets.concat(e[s].targets)),
                      (e[s - 1].align = 0.5),
                      e[s - 1].pos + e[s - 1].size > i && (e[s - 1].pos = i - e[s - 1].size),
                      e.splice(s, 1),
                      (l = !0));
                }
                h.push.apply(h, c),
                  (s = 0),
                  e.some(function(e) {
                    var o = 0;
                    if (
                      e.targets.some(function() {
                        if (((h[s].pos = e.pos + o), Math.abs(h[s].pos - h[s].target) > n))
                          return (
                            h.slice(0, s + 1).forEach(function(t) {
                              delete t.pos;
                            }),
                            (h.reducedLen = (h.reducedLen || i) - 0.1 * i),
                            h.reducedLen > 0.1 * i && t.distribute(h, i, n),
                            !0
                          );
                        (o += h[s].size), s++;
                      })
                    )
                      return !0;
                  }),
                  d(h, o);
              }),
                (h.prototype.drawDataLabels = function() {
                  function e(t, e) {
                    var i,
                      n = [];
                    if (p(t) && !p(e))
                      n = t.map(function(t) {
                        return s(t, e);
                      });
                    else if (p(e) && !p(t))
                      n = e.map(function(e) {
                        return s(t, e);
                      });
                    else if (p(t) || p(e)) for (i = Math.max(t.length, e.length); i--; ) n[i] = s(t[i], e[i]);
                    else n = s(t, e);
                    return n;
                  }
                  var n,
                    r = this,
                    l = r.chart,
                    h = r.options,
                    c = h.dataLabels,
                    d = r.points,
                    f = r.hasRendered || 0,
                    g = t.animObject(h.animation).duration,
                    m = Math.min(g, 200),
                    x = a(c.defer, 0 < m),
                    y = l.renderer;
                  (c = e(
                    e(
                      l.options.plotOptions && l.options.plotOptions.series && l.options.plotOptions.series.dataLabels,
                      l.options.plotOptions && l.options.plotOptions[r.type] && l.options.plotOptions[r.type].dataLabels
                    ),
                    c
                  )),
                    t.fireEvent(this, 'drawDataLabels'),
                    (p(c) || c.enabled || r._hasPointLabels) &&
                      ((n = r.plotGroup(
                        'dataLabelsGroup',
                        'data-labels',
                        x && !f ? 'hidden' : 'inherit',
                        c.zIndex || 6
                      )),
                      x &&
                        (n.attr({ opacity: +f }),
                        f ||
                          setTimeout(function() {
                            var t = r.dataLabelsGroup;
                            t &&
                              (r.visible && n.show(!0),
                              t[h.animation ? 'animate' : 'attr']({ opacity: 1 }, { duration: m }));
                          }, g - m)),
                      d.forEach(function(s) {
                        u(e(c, s.dlOptions || (s.options && s.options.dataLabels))).forEach(function(e, c) {
                          var d,
                            p,
                            u,
                            f,
                            g =
                              e.enabled &&
                              (!s.isNull || s.dataLabelOnNull) &&
                              (function(t, e) {
                                var i = e.filter;
                                return (
                                  !i ||
                                  ((e = i.operator),
                                  (t = t[i.property]),
                                  (i = i.value),
                                  ('>' === e && t > i) ||
                                    ('<' === e && t < i) ||
                                    ('>=' === e && t >= i) ||
                                    ('<=' === e && t <= i) ||
                                    ('==' === e && t == i) ||
                                    ('===' === e && t === i))
                                );
                              })(s, e),
                            m = s.dataLabels ? s.dataLabels[c] : s.dataLabel,
                            x = s.connectors ? s.connectors[c] : s.connector,
                            v = !m;
                          g &&
                            ((d = s.getLabelConfig()),
                            (p = a(e[s.formatPrefix + 'Format'], e.format)),
                            (d = i(p) ? o(p, d, l.time) : (e[s.formatPrefix + 'Formatter'] || e.formatter).call(d, e)),
                            (p = e.style),
                            (u = e.rotation),
                            l.styledMode ||
                              ((p.color = a(e.color, p.color, r.color, '#000000')),
                              'contrast' === p.color &&
                                ((s.contrastColor = y.getContrast(s.color || r.color)),
                                (p.color =
                                  e.inside || 0 > a(e.distance, s.labelDistance) || h.stacking
                                    ? s.contrastColor
                                    : '#000000')),
                              h.cursor && (p.cursor = h.cursor)),
                            (f = { r: e.borderRadius || 0, rotation: u, padding: e.padding, zIndex: 1 }),
                            l.styledMode ||
                              ((f.fill = e.backgroundColor),
                              (f.stroke = e.borderColor),
                              (f['stroke-width'] = e.borderWidth)),
                            t.objectEach(f, function(t, e) {
                              void 0 === t && delete f[e];
                            })),
                            !m || (g && i(d))
                              ? g &&
                                i(d) &&
                                (m
                                  ? (f.text = d)
                                  : ((s.dataLabels = s.dataLabels || []),
                                    (m = s.dataLabels[c] = u
                                      ? y.text(d, 0, -9999).addClass('highcharts-data-label')
                                      : y.label(d, 0, -9999, e.shape, null, null, e.useHTML, null, 'data-label')),
                                    c || (s.dataLabel = m),
                                    m.addClass(
                                      ' highcharts-data-label-color-' +
                                        s.colorIndex +
                                        ' ' +
                                        (e.className || '') +
                                        (e.useHTML ? ' highcharts-tracker' : '')
                                    )),
                                (m.options = e),
                                m.attr(f),
                                l.styledMode || m.css(p).shadow(e.shadow),
                                m.added || m.add(n),
                                e.textPath &&
                                  m.setTextPath((s.getDataLabelPath && s.getDataLabelPath(m)) || s.graphic, e.textPath),
                                r.alignDataLabel(s, m, e, null, v))
                              : ((s.dataLabel = s.dataLabel && s.dataLabel.destroy()),
                                s.dataLabels &&
                                  (1 === s.dataLabels.length ? delete s.dataLabels : delete s.dataLabels[c]),
                                c || delete s.dataLabel,
                                x &&
                                  ((s.connector = s.connector.destroy()),
                                  s.connectors &&
                                    (1 === s.connectors.length ? delete s.connectors : delete s.connectors[c])));
                        });
                      })),
                    t.fireEvent(this, 'afterDrawDataLabels');
                }),
                (h.prototype.alignDataLabel = function(t, e, i, o, s) {
                  var r,
                    l = this.chart,
                    h = this.isCartesian && l.inverted,
                    c = a(t.dlBox && t.dlBox.centerX, t.plotX, -9999),
                    d = a(t.plotY, -9999),
                    p = e.getBBox(),
                    u = i.rotation,
                    f = i.align,
                    g =
                      this.visible &&
                      (t.series.forceDL ||
                        l.isInsidePlot(c, Math.round(d), h) ||
                        (o && l.isInsidePlot(c, h ? o.x + 1 : o.y + o.height - 1, h))),
                    m = 'justify' === a(i.overflow, 'justify');
                  g &&
                    ((r = l.renderer.fontMetrics(l.styledMode ? void 0 : i.style.fontSize, e).b),
                    (o = n(
                      { x: h ? this.yAxis.len - d : c, y: Math.round(h ? this.xAxis.len - c : d), width: 0, height: 0 },
                      o
                    )),
                    n(i, { width: p.width, height: p.height }),
                    u
                      ? ((m = !1),
                        (c = l.renderer.rotCorr(r, u)),
                        e[s ? 'attr' : 'animate'](
                          (c = {
                            x: o.x + i.x + o.width / 2 + c.x,
                            y: o.y + i.y + { top: 0, middle: 0.5, bottom: 1 }[i.verticalAlign] * o.height
                          })
                        ).attr({ align: f }),
                        (d = 180 < (d = (u + 720) % 360) && 360 > d),
                        'left' === f
                          ? (c.y -= d ? p.height : 0)
                          : 'center' === f
                          ? ((c.x -= p.width / 2), (c.y -= p.height / 2))
                          : 'right' === f && ((c.x -= p.width), (c.y -= d ? 0 : p.height)),
                        (e.placed = !0),
                        (e.alignAttr = c))
                      : (e.align(i, null, o), (c = e.alignAttr)),
                    m && 0 <= o.height
                      ? (t.isLabelJustified = this.justifyDataLabel(e, i, c, p, o, s))
                      : a(i.crop, !0) &&
                        (g = l.isInsidePlot(c.x, c.y) && l.isInsidePlot(c.x + p.width, c.y + p.height)),
                    i.shape && !u) &&
                    e[s ? 'attr' : 'animate']({
                      anchorX: h ? l.plotWidth - t.plotY : t.plotX,
                      anchorY: h ? l.plotHeight - t.plotX : t.plotY
                    }),
                    g || (e.attr({ y: -9999 }), (e.placed = !1));
                }),
                (h.prototype.justifyDataLabel = function(t, e, i, n, o, s) {
                  var r,
                    a,
                    l = this.chart,
                    h = e.align,
                    c = e.verticalAlign,
                    d = t.box ? 0 : t.padding || 0;
                  return (
                    0 > (r = i.x + d) && ('right' === h ? (e.align = 'left') : (e.x = -r), (a = !0)),
                    (r = i.x + n.width - d) > l.plotWidth &&
                      ('left' === h ? (e.align = 'right') : (e.x = l.plotWidth - r), (a = !0)),
                    0 > (r = i.y + d) && ('bottom' === c ? (e.verticalAlign = 'top') : (e.y = -r), (a = !0)),
                    (r = i.y + n.height - d) > l.plotHeight &&
                      ('top' === c ? (e.verticalAlign = 'bottom') : (e.y = l.plotHeight - r), (a = !0)),
                    a && ((t.placed = !s), t.align(e, null, o)),
                    a
                  );
                }),
                c.pie &&
                  ((c.pie.prototype.dataLabelPositioners = {
                    radialDistributionY: function(t) {
                      return t.top + t.distributeBox.pos;
                    },
                    radialDistributionX: function(t, e, i, n) {
                      return t.getX(i < e.top + 2 || i > e.bottom - 2 ? n : i, e.half, e);
                    },
                    justify: function(t, e, i) {
                      return i[0] + (t.half ? -1 : 1) * (e + t.labelDistance);
                    },
                    alignToPlotEdges: function(t, e, i, n) {
                      return (t = t.getBBox().width), e ? t + n : i - t - n;
                    },
                    alignToConnectors: function(t, e, i, n) {
                      var o,
                        s = 0;
                      return (
                        t.forEach(function(t) {
                          (o = t.dataLabel.getBBox().width) > s && (s = o);
                        }),
                        e ? s + n : i - s - n
                      );
                    }
                  }),
                  (c.pie.prototype.drawDataLabels = function() {
                    var n,
                      o,
                      r,
                      l,
                      c,
                      d,
                      p,
                      u,
                      f,
                      g,
                      m,
                      x,
                      y = this,
                      v = y.data,
                      b = y.chart,
                      M = y.options.dataLabels,
                      k = M.connectorPadding,
                      w = b.plotWidth,
                      S = b.plotHeight,
                      P = b.plotLeft,
                      T = Math.round(b.chartWidth / 3),
                      L = y.center,
                      A = L[2] / 2,
                      C = L[1],
                      E = [[], []],
                      O = [0, 0, 0, 0],
                      I = y.dataLabelPositioners;
                    y.visible &&
                      (M.enabled || y._hasPointLabels) &&
                      (v.forEach(function(t) {
                        t.dataLabel &&
                          t.visible &&
                          t.dataLabel.shortened &&
                          (t.dataLabel.attr({ width: 'auto' }).css({ width: 'auto', textOverflow: 'clip' }),
                          (t.dataLabel.shortened = !1));
                      }),
                      h.prototype.drawDataLabels.apply(y),
                      v.forEach(function(t) {
                        t.dataLabel &&
                          (t.visible
                            ? (E[t.half].push(t),
                              (t.dataLabel._pos = null),
                              !i(M.style.width) &&
                                !i(
                                  t.options.dataLabels && t.options.dataLabels.style && t.options.dataLabels.style.width
                                ) &&
                                t.dataLabel.getBBox().width > T &&
                                (t.dataLabel.css({ width: 0.7 * T }), (t.dataLabel.shortened = !0)))
                            : ((t.dataLabel = t.dataLabel.destroy()),
                              t.dataLabels && 1 === t.dataLabels.length && delete t.dataLabels));
                      }),
                      E.forEach(function(e, o) {
                        var s,
                          r,
                          h,
                          x = e.length,
                          v = [];
                        if (x)
                          for (
                            y.sortByAngle(e, o - 0.5),
                              0 < y.maxLabelDistance &&
                                ((s = Math.max(0, C - A - y.maxLabelDistance)),
                                (r = Math.min(C + A + y.maxLabelDistance, b.plotHeight)),
                                e.forEach(function(t) {
                                  0 < t.labelDistance &&
                                    t.dataLabel &&
                                    ((t.top = Math.max(0, C - A - t.labelDistance)),
                                    (t.bottom = Math.min(C + A + t.labelDistance, b.plotHeight)),
                                    (h = t.dataLabel.getBBox().height || 21),
                                    (t.distributeBox = {
                                      target: t.labelPosition.natural.y - t.top + h / 2,
                                      size: h,
                                      rank: t.y
                                    }),
                                    v.push(t.distributeBox));
                                }),
                                t.distribute(v, (s = r + h - s), s / 5)),
                              m = 0;
                            m < x;
                            m++
                          ) {
                            if (
                              ((l = (n = e[m]).dataLabel),
                              (g = !1 === n.visible ? 'hidden' : 'inherit'),
                              (f = s = (d = n.labelPosition).natural.y),
                              v &&
                                i(n.distributeBox) &&
                                (void 0 === n.distributeBox.pos
                                  ? (g = 'hidden')
                                  : ((p = n.distributeBox.size), (f = I.radialDistributionY(n)))),
                              delete n.positionIndex,
                              M.justify)
                            )
                              u = I.justify(n, A, L);
                            else
                              switch (M.alignTo) {
                                case 'connectors':
                                  u = I.alignToConnectors(e, o, w, P);
                                  break;
                                case 'plotEdges':
                                  u = I.alignToPlotEdges(l, o, w, P);
                                  break;
                                default:
                                  u = I.radialDistributionX(y, n, f, s);
                              }
                            (l._attr = { visibility: g, align: d.alignment }),
                              (l._pos = { x: u + M.x + ({ left: k, right: -k }[d.alignment] || 0), y: f + M.y - 10 }),
                              (d.final.x = u),
                              (d.final.y = f),
                              a(M.crop, !0) &&
                                ((c = l.getBBox().width),
                                (s = null),
                                u - c < k && 1 === o
                                  ? ((s = Math.round(c - u + k)), (O[3] = Math.max(s, O[3])))
                                  : u + c > w - k &&
                                    0 === o &&
                                    ((s = Math.round(u + c - w + k)), (O[1] = Math.max(s, O[1]))),
                                0 > f - p / 2
                                  ? (O[0] = Math.max(Math.round(p / 2 - f), O[0]))
                                  : f + p / 2 > S && (O[2] = Math.max(Math.round(f + p / 2 - S), O[2])),
                                (l.sideOverflow = s));
                          }
                      }),
                      0 === e(O) || this.verifyDataLabelOverflow(O)) &&
                      (this.placeDataLabels(),
                      this.points.forEach(function(t) {
                        var e;
                        (x = s(M, t.options.dataLabels)),
                          (o = a(x.connectorWidth, 1)) &&
                            ((r = t.connector),
                            (l = t.dataLabel) && l._pos && t.visible && 0 < t.labelDistance
                              ? ((g = l._attr.visibility),
                                (e = !r) &&
                                  ((t.connector = r = b.renderer
                                    .path()
                                    .addClass(
                                      'highcharts-data-label-connector  highcharts-color-' +
                                        t.colorIndex +
                                        (t.className ? ' ' + t.className : '')
                                    )
                                    .add(y.dataLabelsGroup)),
                                  b.styledMode ||
                                    r.attr({ 'stroke-width': o, stroke: x.connectorColor || t.color || '#666666' })),
                                r[e ? 'attr' : 'animate']({ d: t.getConnectorPath() }),
                                r.attr('visibility', g))
                              : r && (t.connector = r.destroy()));
                      }));
                  }),
                  (c.pie.prototype.placeDataLabels = function() {
                    this.points.forEach(function(t) {
                      var e,
                        i = t.dataLabel;
                      i &&
                        t.visible &&
                        ((e = i._pos)
                          ? (i.sideOverflow &&
                              ((i._attr.width = Math.max(i.getBBox().width - i.sideOverflow, 0)),
                              i.css({
                                width: i._attr.width + 'px',
                                textOverflow: (this.options.dataLabels.style || {}).textOverflow || 'ellipsis'
                              }),
                              (i.shortened = !0)),
                            i.attr(i._attr),
                            i[i.moved ? 'animate' : 'attr'](e),
                            (i.moved = !0))
                          : i && i.attr({ y: -9999 })),
                        delete t.distributeBox;
                    }, this);
                  }),
                  (c.pie.prototype.alignDataLabel = r),
                  (c.pie.prototype.verifyDataLabelOverflow = function(t) {
                    var e,
                      i = this.center,
                      n = this.options,
                      o = n.center,
                      s = n.minSize || 80,
                      r = null !== n.size;
                    return (
                      r ||
                        (null !== o[0]
                          ? (e = Math.max(i[2] - Math.max(t[1], t[3]), s))
                          : ((e = Math.max(i[2] - t[1] - t[3], s)), (i[0] += (t[3] - t[1]) / 2)),
                        null !== o[1]
                          ? (e = Math.max(Math.min(e, i[2] - Math.max(t[0], t[2])), s))
                          : ((e = Math.max(Math.min(e, i[2] - t[0] - t[2]), s)), (i[1] += (t[0] - t[2]) / 2)),
                        e < i[2]
                          ? ((i[2] = e),
                            (i[3] = Math.min(l(n.innerSize || 0, e), e)),
                            this.translate(i),
                            this.drawDataLabels && this.drawDataLabels())
                          : (r = !0)),
                      r
                    );
                  })),
                c.column &&
                  (c.column.prototype.alignDataLabel = function(t, e, i, n, o) {
                    var r = this.chart.inverted,
                      l = t.series,
                      c = t.dlBox || t.shapeArgs,
                      d = a(t.below, t.plotY > a(this.translatedThreshold, l.yAxis.len)),
                      p = a(i.inside, !!this.options.stacking);
                    c &&
                      (0 > (n = s(c)).y && ((n.height += n.y), (n.y = 0)),
                      0 < (c = n.y + n.height - l.yAxis.len) && (n.height -= c),
                      r &&
                        (n = {
                          x: l.yAxis.len - n.y - n.height,
                          y: l.xAxis.len - n.x - n.width,
                          width: n.height,
                          height: n.width
                        }),
                      p ||
                        (r ? ((n.x += d ? 0 : n.width), (n.width = 0)) : ((n.y += d ? n.height : 0), (n.height = 0)))),
                      (i.align = a(i.align, !r || p ? 'center' : d ? 'right' : 'left')),
                      (i.verticalAlign = a(i.verticalAlign, r || p ? 'middle' : d ? 'top' : 'bottom')),
                      h.prototype.alignDataLabel.call(this, t, e, i, n, o),
                      t.isLabelJustified && t.contrastColor && e.css({ color: t.contrastColor });
                  });
            }),
            e(i, 'modules/overlapping-datalabels.src.js', [i['parts/Globals.js']], function(t) {
              var e = t.Chart,
                i = t.isArray,
                n = t.objectEach,
                o = t.pick,
                s = t.fireEvent;
              (0, t.addEvent)(e, 'render', function() {
                var t = [];
                (this.labelCollectors || []).forEach(function(e) {
                  t = t.concat(e());
                }),
                  (this.yAxis || []).forEach(function(e) {
                    e.options.stackLabels &&
                      !e.options.stackLabels.allowOverlap &&
                      n(e.stacks, function(e) {
                        n(e, function(e) {
                          t.push(e.label);
                        });
                      });
                  }),
                  (this.series || []).forEach(function(e) {
                    e.visible &&
                      (!1 !== e.options.dataLabels.enabled || e._hasPointLabels) &&
                      e.points.forEach(function(e) {
                        e.visible &&
                          (i(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : []).forEach(function(i) {
                            var n = i.options;
                            (i.labelrank = o(n.labelrank, e.labelrank, e.shapeArgs && e.shapeArgs.height)),
                              n.allowOverlap || t.push(i);
                          });
                      });
                  }),
                  this.hideOverlappingLabels(t);
              }),
                (e.prototype.hideOverlappingLabels = function(t) {
                  var e,
                    i,
                    n,
                    o,
                    r,
                    a,
                    l = this,
                    h = t.length,
                    c = l.renderer,
                    d = function(t, e, i, n, o, s, r, a) {
                      return !(o > t + i || o + r < t || s > e + n || s + a < e);
                    };
                  for (
                    n = function(t) {
                      var e,
                        i,
                        n,
                        o = t.box ? 0 : t.padding || 0;
                      if (((n = 0), t && (!t.alignAttr || t.placed)))
                        return (
                          (e = t.alignAttr || { x: t.attr('x'), y: t.attr('y') }),
                          (i = t.parentGroup),
                          t.width ||
                            ((n = t.getBBox()),
                            (t.width = n.width),
                            (t.height = n.height),
                            (n = c.fontMetrics(null, t.element).h)),
                          {
                            x: e.x + (i.translateX || 0) + o,
                            y: e.y + (i.translateY || 0) + o - n,
                            width: t.width - 2 * o,
                            height: t.height - 2 * o
                          }
                        );
                    },
                      i = 0;
                    i < h;
                    i++
                  )
                    (e = t[i]) && ((e.oldOpacity = e.opacity), (e.newOpacity = 1), (e.absoluteBox = n(e)));
                  for (
                    t.sort(function(t, e) {
                      return (e.labelrank || 0) - (t.labelrank || 0);
                    }),
                      i = 0;
                    i < h;
                    i++
                  )
                    for (a = (n = t[i]) && n.absoluteBox, e = i + 1; e < h; ++e)
                      (r = (o = t[e]) && o.absoluteBox),
                        a &&
                          r &&
                          n !== o &&
                          0 !== n.newOpacity &&
                          0 !== o.newOpacity &&
                          (r = d(a.x, a.y, a.width, a.height, r.x, r.y, r.width, r.height)) &&
                          ((n.labelrank < o.labelrank ? n : o).newOpacity = 0);
                  t.forEach(function(t) {
                    var e, i;
                    t &&
                      (t.oldOpacity !== (i = t.newOpacity) &&
                        (t.alignAttr && t.placed
                          ? (i
                              ? t.show(!0)
                              : (e = function() {
                                  t.hide();
                                }),
                            (t.alignAttr.opacity = i),
                            t[t.isOld ? 'animate' : 'attr'](t.alignAttr, null, e),
                            s(l, 'afterHideOverlappingLabels'))
                          : t.attr({ opacity: i })),
                      (t.isOld = !0));
                  });
                });
            }),
            e(i, 'parts/Interaction.js', [i['parts/Globals.js']], function(t) {
              var e,
                i = t.addEvent,
                n = t.Chart,
                o = t.createElement,
                s = t.css,
                r = t.defaultOptions,
                a = t.defaultPlotOptions,
                l = t.extend,
                h = t.fireEvent,
                c = t.hasTouch,
                d = t.isObject,
                p = t.Legend,
                u = t.merge,
                f = t.pick,
                g = t.Point,
                m = t.Series,
                x = t.seriesTypes,
                y = t.svg;
              (e = t.TrackerMixin = {
                drawTrackerPoint: function() {
                  var t = this,
                    e = t.chart,
                    i = e.pointer,
                    n = function(t) {
                      var e = i.getPointFromEvent(t);
                      void 0 !== e && ((i.isDirectTouch = !0), e.onMouseOver(t));
                    };
                  t.points.forEach(function(t) {
                    t.graphic && (t.graphic.element.point = t),
                      t.dataLabel && (t.dataLabel.div ? (t.dataLabel.div.point = t) : (t.dataLabel.element.point = t));
                  }),
                    t._hasTracking ||
                      (t.trackerGroups.forEach(function(o) {
                        t[o] &&
                          (t[o]
                            .addClass('highcharts-tracker')
                            .on('mouseover', n)
                            .on('mouseout', function(t) {
                              i.onTrackerMouseOut(t);
                            }),
                          c && t[o].on('touchstart', n),
                          !e.styledMode && t.options.cursor && t[o].css(s).css({ cursor: t.options.cursor }));
                      }),
                      (t._hasTracking = !0)),
                    h(this, 'afterDrawTracker');
                },
                drawTrackerGraph: function() {
                  var t,
                    e = this,
                    i = e.options,
                    n = i.trackByArea,
                    o = [].concat(n ? e.areaPath : e.graphPath),
                    s = o.length,
                    r = e.chart,
                    a = r.pointer,
                    l = r.renderer,
                    d = r.options.tooltip.snap,
                    p = e.tracker,
                    u = function() {
                      r.hoverSeries !== e && e.onMouseOver();
                    },
                    f = 'rgba(192,192,192,' + (y ? 1e-4 : 0.002) + ')';
                  if (s && !n)
                    for (t = s + 1; t--; )
                      'M' === o[t] && o.splice(t + 1, 0, o[t + 1] - d, o[t + 2], 'L'),
                        ((t && 'M' === o[t]) || t === s) && o.splice(t, 0, 'L', o[t - 2] + d, o[t - 1]);
                  p
                    ? p.attr({ d: o })
                    : e.graph &&
                      ((e.tracker = l
                        .path(o)
                        .attr({ visibility: e.visible ? 'visible' : 'hidden', zIndex: 2 })
                        .addClass(n ? 'highcharts-tracker-area' : 'highcharts-tracker-line')
                        .add(e.group)),
                      r.styledMode ||
                        e.tracker.attr({
                          'stroke-linejoin': 'round',
                          stroke: f,
                          fill: n ? f : 'none',
                          'stroke-width': e.graph.strokeWidth() + (n ? 0 : 2 * d)
                        }),
                      [e.tracker, e.markerGroup].forEach(function(t) {
                        t
                          .addClass('highcharts-tracker')
                          .on('mouseover', u)
                          .on('mouseout', function(t) {
                            a.onTrackerMouseOut(t);
                          }),
                          i.cursor && !r.styledMode && t.css({ cursor: i.cursor }),
                          c && t.on('touchstart', u);
                      })),
                    h(this, 'afterDrawTracker');
                }
              }),
                x.column && (x.column.prototype.drawTracker = e.drawTrackerPoint),
                x.pie && (x.pie.prototype.drawTracker = e.drawTrackerPoint),
                x.scatter && (x.scatter.prototype.drawTracker = e.drawTrackerPoint),
                l(p.prototype, {
                  setItemEvents: function(t, e, i) {
                    var n = this,
                      o = n.chart.renderer.boxWrapper,
                      s = t instanceof g,
                      r = 'highcharts-legend-' + (s ? 'point' : 'series') + '-active',
                      a = n.chart.styledMode;
                    (i ? e : t.legendGroup)
                      .on('mouseover', function() {
                        n.allItems.forEach(function(e) {
                          t !== e && e.setState('inactive', !s);
                        }),
                          t.setState('hover'),
                          t.visible && o.addClass(r),
                          a || e.css(n.options.itemHoverStyle);
                      })
                      .on('mouseout', function() {
                        n.styledMode || e.css(u(t.visible ? n.itemStyle : n.itemHiddenStyle)),
                          n.allItems.forEach(function(e) {
                            t !== e && e.setState('', !s);
                          }),
                          o.removeClass(r),
                          t.setState();
                      })
                      .on('click', function(e) {
                        var i = function() {
                          t.setVisible && t.setVisible();
                        };
                        o.removeClass(r),
                          (e = { browserEvent: e }),
                          t.firePointEvent ? t.firePointEvent('legendItemClick', e, i) : h(t, 'legendItemClick', e, i);
                      });
                  },
                  createCheckboxForItem: function(t) {
                    (t.checkbox = o(
                      'input',
                      {
                        type: 'checkbox',
                        className: 'highcharts-legend-checkbox',
                        checked: t.selected,
                        defaultChecked: t.selected
                      },
                      this.options.itemCheckboxStyle,
                      this.chart.container
                    )),
                      i(t.checkbox, 'click', function(e) {
                        h(t.series || t, 'checkboxClick', { checked: e.target.checked, item: t }, function() {
                          t.select();
                        });
                      });
                  }
                }),
                l(n.prototype, {
                  showResetZoom: function() {
                    function t() {
                      e.zoomOut();
                    }
                    var e = this,
                      i = r.lang,
                      n = e.options.chart.resetZoomButton,
                      o = n.theme,
                      s = o.states,
                      a = 'chart' === n.relativeTo || 'spaceBox' === n.relativeTo ? null : 'plotBox';
                    h(this, 'beforeShowResetZoom', null, function() {
                      e.resetZoomButton = e.renderer
                        .button(i.resetZoom, null, null, t, o, s && s.hover)
                        .attr({ align: n.position.align, title: i.resetZoomTitle })
                        .addClass('highcharts-reset-zoom')
                        .add()
                        .align(n.position, !1, a);
                    }),
                      h(this, 'afterShowResetZoom');
                  },
                  zoomOut: function() {
                    h(this, 'selection', { resetSelection: !0 }, this.zoom);
                  },
                  zoom: function(e) {
                    var i,
                      n,
                      o = this,
                      s = o.pointer,
                      r = !1,
                      a = o.inverted ? s.mouseDownX : s.mouseDownY;
                    !e || e.resetSelection
                      ? (o.axes.forEach(function(t) {
                          i = t.zoom();
                        }),
                        (s.initiated = !1))
                      : e.xAxis.concat(e.yAxis).forEach(function(e) {
                          var n = e.axis,
                            l = o.inverted ? n.left : n.top,
                            h = n.isXAxis,
                            c = !1;
                          ((!h && a >= l && a <= (o.inverted ? l + n.width : l + n.height)) || h || !t.defined(a)) &&
                            (c = !0),
                            s[h ? 'zoomX' : 'zoomY'] && c && ((i = n.zoom(e.min, e.max)), n.displayBtn && (r = !0));
                        }),
                      (n = o.resetZoomButton),
                      r && !n ? o.showResetZoom() : !r && d(n) && (o.resetZoomButton = n.destroy()),
                      i && o.redraw(f(o.options.chart.animation, e && e.animation, 100 > o.pointCount));
                  },
                  pan: function(t, e) {
                    var i,
                      n = this,
                      o = n.hoverPoints;
                    h(this, 'pan', { originalEvent: t }, function() {
                      o &&
                        o.forEach(function(t) {
                          t.setState();
                        }),
                        ('xy' === e ? [1, 0] : [1]).forEach(function(e) {
                          var o,
                            s,
                            r = t[(o = (e = n[e ? 'xAxis' : 'yAxis'][0]).horiz) ? 'chartX' : 'chartY'],
                            a = n[(o = o ? 'mouseDownX' : 'mouseDownY')],
                            l = (e.pointRange || 0) / 2,
                            h = (e.reversed && !n.inverted) || (!e.reversed && n.inverted) ? -1 : 1,
                            c = e.getExtremes(),
                            d = e.toValue(a - r, !0) + l * h;
                          (a = (s = (h = e.toValue(a + e.len - r, !0) - l * h) < d) ? h : d),
                            (d = s ? d : h),
                            0 <
                              (s =
                                (h = Math.min(
                                  c.dataMin,
                                  l ? c.min : e.toValue(e.toPixels(c.min) - e.minPixelPadding)
                                )) - a) && ((d += s), (a = h)),
                            0 <
                              (s =
                                d -
                                (l = Math.max(
                                  c.dataMax,
                                  l ? c.max : e.toValue(e.toPixels(c.max) + e.minPixelPadding)
                                ))) && ((d = l), (a -= s)),
                            e.series.length &&
                              a !== c.min &&
                              d !== c.max &&
                              (e.setExtremes(a, d, !1, !1, { trigger: 'pan' }), (i = !0)),
                            (n[o] = r);
                        }),
                        i && n.redraw(!1),
                        s(n.container, { cursor: 'move' });
                    });
                  }
                }),
                l(g.prototype, {
                  select: function(t, e) {
                    var i = this,
                      n = i.series,
                      o = n.chart;
                    (t = f(t, !i.selected)),
                      i.firePointEvent(t ? 'select' : 'unselect', { accumulate: e }, function() {
                        (i.selected = i.options.selected = t),
                          (n.options.data[n.data.indexOf(i)] = i.options),
                          i.setState(t && 'select'),
                          e ||
                            o.getSelectedPoints().forEach(function(t) {
                              var e = t.series;
                              t.selected &&
                                t !== i &&
                                ((t.selected = t.options.selected = !1),
                                (e.options.data[e.data.indexOf(t)] = t.options),
                                t.setState(o.hoverPoints && e.options.inactiveOtherPoints ? 'inactive' : ''),
                                t.firePointEvent('unselect'));
                            });
                      });
                  },
                  onMouseOver: function(t) {
                    var e = this.series.chart,
                      i = e.pointer;
                    (t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e.inverted)),
                      i.runPointActions(t, this);
                  },
                  onMouseOut: function() {
                    var t = this.series.chart;
                    this.firePointEvent('mouseOut'),
                      this.series.options.inactiveOtherPoints ||
                        (t.hoverPoints || []).forEach(function(t) {
                          t.setState();
                        }),
                      (t.hoverPoints = t.hoverPoint = null);
                  },
                  importEvents: function() {
                    if (!this.hasImportedEvents) {
                      var e = this,
                        n = u(e.series.options.point, e.options).events;
                      (e.events = n),
                        t.objectEach(n, function(t, n) {
                          i(e, n, t);
                        }),
                        (this.hasImportedEvents = !0);
                    }
                  },
                  setState: function(t, e) {
                    var i,
                      n,
                      o,
                      s = Math.floor(this.plotX),
                      r = this.plotY,
                      c = this.series,
                      d = this.state,
                      p = c.options.states[t || 'normal'] || {},
                      u = a[c.type].marker && c.options.marker,
                      g = (u && u.states && u.states[t || 'normal']) || {},
                      m = c.stateMarkerGraphic,
                      x = this.marker || {},
                      y = c.chart,
                      v = c.halo,
                      b = u && c.markerAttribs;
                    ((t = t || '') === this.state && !e) ||
                      (this.selected && 'select' !== t) ||
                      !1 === p.enabled ||
                      (t && (!1 === g.enabled || (u && !1 === u.enabled && !1 === g.enabled))) ||
                      (t && x.states && x.states[t] && !1 === x.states[t].enabled) ||
                      ((this.state = t),
                      b && (i = c.markerAttribs(this, t)),
                      this.graphic
                        ? (d && this.graphic.removeClass('highcharts-point-' + d),
                          t && this.graphic.addClass('highcharts-point-' + t),
                          y.styledMode ||
                            ((n = c.pointAttribs(this, t)),
                            (o = f(y.options.chart.animation, p.animation)),
                            c.options.inactiveOtherPoints &&
                              ((this.dataLabels || []).forEach(function(t) {
                                t && t.animate({ opacity: n.opacity }, o);
                              }),
                              this.connector && this.connector.animate({ opacity: n.opacity }, o)),
                            this.graphic.animate(n, o)),
                          i && this.graphic.animate(i, f(y.options.chart.animation, g.animation, u.animation)),
                          m && m.hide())
                        : (t &&
                            g &&
                            ((d = x.symbol || c.symbol),
                            m && m.currentSymbol !== d && (m = m.destroy()),
                            m
                              ? m[e ? 'animate' : 'attr']({ x: i.x, y: i.y })
                              : d &&
                                ((c.stateMarkerGraphic = m = y.renderer
                                  .symbol(d, i.x, i.y, i.width, i.height)
                                  .add(c.markerGroup)),
                                (m.currentSymbol = d)),
                            !y.styledMode && m && m.attr(c.pointAttribs(this, t))),
                          m &&
                            (m[t && y.isInsidePlot(s, r, y.inverted) ? 'show' : 'hide'](), (m.element.point = this))),
                      (t = p.halo) && t.size
                        ? (v || (c.halo = v = y.renderer.path().add((this.graphic || m).parentGroup)),
                          v.show()[e ? 'animate' : 'attr']({ d: this.haloPath(t.size) }),
                          v.attr({
                            class:
                              'highcharts-halo highcharts-color-' +
                              f(this.colorIndex, c.colorIndex) +
                              (this.className ? ' ' + this.className : ''),
                            zIndex: -1
                          }),
                          (v.point = this),
                          y.styledMode ||
                            v.attr(l({ fill: this.color || c.color, 'fill-opacity': t.opacity }, t.attributes)))
                        : v && v.point && v.point.haloPath && v.animate({ d: v.point.haloPath(0) }, null, v.hide),
                      h(this, 'afterSetState'));
                  },
                  haloPath: function(t) {
                    return this.series.chart.renderer.symbols.circle(
                      Math.floor(this.plotX) - t,
                      this.plotY - t,
                      2 * t,
                      2 * t
                    );
                  }
                }),
                l(m.prototype, {
                  onMouseOver: function() {
                    var t = this.chart,
                      e = t.hoverSeries;
                    e && e !== this && e.onMouseOut(),
                      this.options.events.mouseOver && h(this, 'mouseOver'),
                      this.setState('hover'),
                      (t.hoverSeries = this);
                  },
                  onMouseOut: function() {
                    var t = this.options,
                      e = this.chart,
                      i = e.tooltip,
                      n = e.hoverPoint;
                    (e.hoverSeries = null),
                      n && n.onMouseOut(),
                      this && t.events.mouseOut && h(this, 'mouseOut'),
                      !i || this.stickyTracking || (i.shared && !this.noSharedTooltip) || i.hide(),
                      e.series.forEach(function(t) {
                        t.setState('', !0);
                      });
                  },
                  setState: function(t, e) {
                    var i = this,
                      n = i.graph,
                      o = (h = i.options).inactiveOtherPoints,
                      s = h.states,
                      r = h.lineWidth,
                      a = h.opacity,
                      l = f(s[t || 'normal'] && s[t || 'normal'].animation, i.chart.options.chart.animation),
                      h = 0;
                    if (
                      i.state !== (t = t || '') &&
                      ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(function(e) {
                        e &&
                          (i.state && e.removeClass('highcharts-series-' + i.state),
                          t && e.addClass('highcharts-series-' + t));
                      }),
                      (i.state = t),
                      !i.chart.styledMode)
                    ) {
                      if (s[t] && !1 === s[t].enabled) return;
                      if (
                        (t && ((r = s[t].lineWidth || r + (s[t].lineWidthPlus || 0)), (a = f(s[t].opacity, a))),
                        n && !n.dashstyle)
                      )
                        for (n.animate((s = { 'stroke-width': r }), l); i['zone-graph-' + h]; )
                          i['zone-graph-' + h].attr(s), (h += 1);
                      o ||
                        [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach(function(t) {
                          t && t.animate({ opacity: a }, l);
                        });
                    }
                    e &&
                      o &&
                      i.points &&
                      i.points.forEach(function(e) {
                        e.setState && e.setState(t);
                      });
                  },
                  setVisible: function(t, e) {
                    var i,
                      n = this,
                      o = n.chart,
                      s = n.legendItem,
                      r = o.options.chart.ignoreHiddenSeries;
                    (i = (n.visible = t = n.options.visible = n.userOptions.visible = void 0 === t ? !n.visible : t)
                      ? 'show'
                      : 'hide'),
                      ['group', 'dataLabelsGroup', 'markerGroup', 'tracker', 'tt'].forEach(function(t) {
                        n[t] && n[t][i]();
                      }),
                      (o.hoverSeries !== n && (o.hoverPoint && o.hoverPoint.series) !== n) || n.onMouseOut(),
                      s && o.legend.colorizeItem(n, t),
                      (n.isDirty = !0),
                      n.options.stacking &&
                        o.series.forEach(function(t) {
                          t.options.stacking && t.visible && (t.isDirty = !0);
                        }),
                      n.linkedSeries.forEach(function(e) {
                        e.setVisible(t, !1);
                      }),
                      r && (o.isDirtyBox = !0),
                      h(n, i),
                      !1 !== e && o.redraw();
                  },
                  show: function() {
                    this.setVisible(!0);
                  },
                  hide: function() {
                    this.setVisible(!1);
                  },
                  select: function(t) {
                    (this.selected = t = this.options.selected = void 0 === t ? !this.selected : t),
                      this.checkbox && (this.checkbox.checked = t),
                      h(this, t ? 'select' : 'unselect');
                  },
                  drawTracker: e.drawTrackerGraph
                });
            }),
            e(i, 'parts/Responsive.js', [i['parts/Globals.js']], function(t) {
              var e = t.Chart,
                i = t.isArray,
                n = t.isObject,
                o = t.pick,
                s = t.splat;
              (e.prototype.setResponsive = function(e, i) {
                var n = this.options.responsive,
                  o = [],
                  s = this.currentResponsive;
                !i &&
                  n &&
                  n.rules &&
                  n.rules.forEach(function(i) {
                    void 0 === i._id && (i._id = t.uniqueKey()), this.matchResponsiveRule(i, o, e);
                  }, this),
                  ((i = t.merge.apply(
                    0,
                    o.map(function(e) {
                      return t.find(n.rules, function(t) {
                        return t._id === e;
                      }).chartOptions;
                    })
                  )).isResponsiveOptions = !0),
                  (o = o.toString() || void 0) !== (s && s.ruleIds) &&
                    (s && this.update(s.undoOptions, e),
                    o
                      ? (((s = this.currentOptions(i)).isResponsiveOptions = !0),
                        (this.currentResponsive = { ruleIds: o, mergedOptions: i, undoOptions: s }),
                        this.update(i, e))
                      : (this.currentResponsive = void 0));
              }),
                (e.prototype.matchResponsiveRule = function(t, e) {
                  var i = t.condition;
                  (
                    i.callback ||
                    function() {
                      return (
                        this.chartWidth <= o(i.maxWidth, Number.MAX_VALUE) &&
                        this.chartHeight <= o(i.maxHeight, Number.MAX_VALUE) &&
                        this.chartWidth >= o(i.minWidth, 0) &&
                        this.chartHeight >= o(i.minHeight, 0)
                      );
                    }
                  ).call(this) && e.push(t._id);
                }),
                (e.prototype.currentOptions = function(e) {
                  var r = {};
                  return (
                    (function e(r, a, l, h) {
                      var c;
                      t.objectEach(r, function(t, r) {
                        if (!h && -1 < ['series', 'xAxis', 'yAxis'].indexOf(r))
                          for (t = s(t), l[r] = [], c = 0; c < t.length; c++)
                            a[r][c] && ((l[r][c] = {}), e(t[c], a[r][c], l[r][c], h + 1));
                        else n(t) ? ((l[r] = i(t) ? [] : {}), e(t, a[r] || {}, l[r], h + 1)) : (l[r] = o(a[r], null));
                      });
                    })(e, this.options, r, 0),
                    r
                  );
                });
            }),
            e(i, 'masters/highcharts.src.js', [i['parts/Globals.js']], function(t) {
              return t;
            }),
            (i['masters/highcharts.src.js']._modules = i),
            i['masters/highcharts.src.js']
          );
        }),
        t.exports
          ? ((s.default = s), (t.exports = o.document ? s(o) : s))
          : void 0 ===
              (n = function() {
                return s(o);
              }.call(e, i, e, t)) || (t.exports = n);
    },
    AxlJ: function(t, e, i) {
      var n, o, s;
      (s = function(t) {
        function e(t, e, i, n) {
          t.hasOwnProperty(e) || (t[e] = n.apply(null, i));
        }
        e((t = t ? t._modules : {}), 'modules/full-screen.src.js', [t['parts/Globals.js']], function(t) {
          (t.FullScreen = function(t) {
            this.init(t.parentNode);
          }),
            (t.FullScreen.prototype = {
              init: function(t) {
                t.requestFullscreen
                  ? t.requestFullscreen()
                  : t.mozRequestFullScreen
                  ? t.mozRequestFullScreen()
                  : t.webkitRequestFullscreen
                  ? t.webkitRequestFullscreen()
                  : t.msRequestFullscreen && t.msRequestFullscreen();
              }
            });
        }),
          e(t, 'mixins/navigation.js', [], function() {
            return {
              initUpdate: function(t) {
                t.navigation ||
                  (t.navigation = {
                    updates: [],
                    update: function(t, e) {
                      this.updates.forEach(function(i) {
                        i.update.call(i.context, t, e);
                      });
                    }
                  });
              },
              addUpdate: function(t, e) {
                e.navigation || this.initUpdate(e), e.navigation.updates.push({ update: t, context: e });
              }
            };
          }),
          e(t, 'modules/exporting.src.js', [t['parts/Globals.js'], t['mixins/navigation.js']], function(t, e) {
            var i = t.defaultOptions,
              n = t.doc,
              o = t.Chart,
              s = t.addEvent,
              r = t.removeEvent,
              a = t.fireEvent,
              l = t.createElement,
              h = t.discardElement,
              c = t.css,
              d = t.merge,
              p = t.pick,
              u = t.objectEach,
              f = t.extend,
              g = t.isTouchDevice,
              m = t.win,
              x = m.navigator.userAgent,
              y = t.SVGRenderer,
              v = t.Renderer.prototype.symbols,
              b = /Edge\/|Trident\/|MSIE /.test(x),
              M = /firefox/i.test(x);
            f(i.lang, {
              viewFullscreen: 'View in full screen',
              printChart: 'Print chart',
              downloadPNG: 'Download PNG image',
              downloadJPEG: 'Download JPEG image',
              downloadPDF: 'Download PDF document',
              downloadSVG: 'Download SVG vector image',
              contextButtonTitle: 'Chart context menu'
            }),
              i.navigation || (i.navigation = {}),
              d(!0, i.navigation, {
                buttonOptions: {
                  theme: {},
                  symbolSize: 14,
                  symbolX: 12.5,
                  symbolY: 10.5,
                  align: 'right',
                  buttonSpacing: 3,
                  height: 22,
                  verticalAlign: 'top',
                  width: 24
                }
              }),
              d(!0, i.navigation, {
                menuStyle: { border: '1px solid #999999', background: '#ffffff', padding: '5px 0' },
                menuItemStyle: {
                  padding: '0.5em 1em',
                  color: '#333333',
                  background: 'none',
                  fontSize: g ? '14px' : '11px',
                  transition: 'background 250ms, color 250ms'
                },
                menuItemHoverStyle: { background: '#335cad', color: '#ffffff' },
                buttonOptions: {
                  symbolFill: '#666666',
                  symbolStroke: '#666666',
                  symbolStrokeWidth: 3,
                  theme: { padding: 5 }
                }
              }),
              (i.exporting = {
                type: 'image/png',
                url: 'https://export.highcharts.com/',
                printMaxWidth: 780,
                scale: 2,
                buttons: {
                  contextButton: {
                    className: 'highcharts-contextbutton',
                    menuClassName: 'highcharts-contextmenu',
                    symbol: 'menu',
                    titleKey: 'contextButtonTitle',
                    menuItems: 'viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG'.split(
                      ' '
                    )
                  }
                },
                menuItemDefinitions: {
                  viewFullscreen: {
                    textKey: 'viewFullscreen',
                    onclick: function() {
                      this.fullscreen = new t.FullScreen(this.container);
                    }
                  },
                  printChart: {
                    textKey: 'printChart',
                    onclick: function() {
                      this.print();
                    }
                  },
                  separator: { separator: !0 },
                  downloadPNG: {
                    textKey: 'downloadPNG',
                    onclick: function() {
                      this.exportChart();
                    }
                  },
                  downloadJPEG: {
                    textKey: 'downloadJPEG',
                    onclick: function() {
                      this.exportChart({ type: 'image/jpeg' });
                    }
                  },
                  downloadPDF: {
                    textKey: 'downloadPDF',
                    onclick: function() {
                      this.exportChart({ type: 'application/pdf' });
                    }
                  },
                  downloadSVG: {
                    textKey: 'downloadSVG',
                    onclick: function() {
                      this.exportChart({ type: 'image/svg+xml' });
                    }
                  }
                }
              }),
              (t.post = function(t, e, i) {
                var o = l(
                  'form',
                  d({ method: 'post', action: t, enctype: 'multipart/form-data' }, i),
                  { display: 'none' },
                  n.body
                );
                u(e, function(t, e) {
                  l('input', { type: 'hidden', name: e, value: t }, null, o);
                }),
                  o.submit(),
                  h(o);
              }),
              f(o.prototype, {
                sanitizeSVG: function(t, e) {
                  var i = t.indexOf('</svg>') + 6,
                    n = t.substr(i);
                  return (
                    (t = t.substr(0, i)),
                    e &&
                      e.exporting &&
                      e.exporting.allowHTML &&
                      n &&
                      (t = t.replace(
                        '</svg>',
                        (n =
                          '<foreignObject x="0" y="0" width="' +
                          e.chart.width +
                          '" height="' +
                          e.chart.height +
                          '"><body xmlns="http://www.w3.org/1999/xhtml">' +
                          n +
                          '</body></foreignObject>') + '</svg>'
                      )),
                    (t = t
                      .replace(/zIndex="[^"]+"/g, '')
                      .replace(/symbolName="[^"]+"/g, '')
                      .replace(/jQuery[0-9]+="[^"]+"/g, '')
                      .replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g, 'url($2)')
                      .replace(/url\([^#]+#/g, 'url(#')
                      .replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ')
                      .replace(/ (|NS[0-9]+\:)href=/g, ' xlink:href=')
                      .replace(/\n/, ' ')
                      .replace(
                        /(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,
                        '$1="rgb($2)" $1-opacity="$3"'
                      )
                      .replace(/&nbsp;/g, '\xa0')
                      .replace(/&shy;/g, '\xad')),
                    this.ieSanitizeSVG && (t = this.ieSanitizeSVG(t)),
                    t
                  );
                },
                getChartHTML: function() {
                  return this.styledMode && this.inlineStyles(), this.container.innerHTML;
                },
                getSVG: function(e) {
                  var i,
                    o,
                    s,
                    r,
                    c,
                    p = d(this.options, e);
                  return (
                    (o = l(
                      'div',
                      null,
                      {
                        position: 'absolute',
                        top: '-9999em',
                        width: this.chartWidth + 'px',
                        height: this.chartHeight + 'px'
                      },
                      n.body
                    )),
                    (s = this.renderTo.style.width),
                    (c = this.renderTo.style.height),
                    (s =
                      p.exporting.sourceWidth ||
                      p.chart.width ||
                      (/px$/.test(s) && parseInt(s, 10)) ||
                      (p.isGantt ? 800 : 600)),
                    (c = p.exporting.sourceHeight || p.chart.height || (/px$/.test(c) && parseInt(c, 10)) || 400),
                    f(p.chart, {
                      animation: !1,
                      renderTo: o,
                      forExport: !0,
                      renderer: 'SVGRenderer',
                      width: s,
                      height: c
                    }),
                    (p.exporting.enabled = !1),
                    delete p.data,
                    (p.series = []),
                    this.series.forEach(function(t) {
                      (r = d(t.userOptions, {
                        animation: !1,
                        enableMouseTracking: !1,
                        showCheckbox: !1,
                        visible: t.visible
                      })).isInternal || p.series.push(r);
                    }),
                    this.axes.forEach(function(e) {
                      e.userOptions.internalKey || (e.userOptions.internalKey = t.uniqueKey());
                    }),
                    (i = new t.Chart(p, this.callback)),
                    e &&
                      ['xAxis', 'yAxis', 'series'].forEach(function(t) {
                        var n = {};
                        e[t] && ((n[t] = e[t]), i.update(n));
                      }),
                    this.axes.forEach(function(e) {
                      var n = t.find(i.axes, function(t) {
                          return t.options.internalKey === e.userOptions.internalKey;
                        }),
                        o = (s = e.getExtremes()).userMin,
                        s = s.userMax;
                      n &&
                        ((void 0 !== o && o !== n.min) || (void 0 !== s && s !== n.max)) &&
                        n.setExtremes(o, s, !0, !1);
                    }),
                    (s = i.getChartHTML()),
                    a(this, 'getSVG', { chartCopy: i }),
                    (s = this.sanitizeSVG(s, p)),
                    (p = null),
                    i.destroy(),
                    h(o),
                    s
                  );
                },
                getSVGForExport: function(t, e) {
                  var i = this.options.exporting;
                  return this.getSVG(
                    d({ chart: { borderRadius: 0 } }, i.chartOptions, e, {
                      exporting: {
                        sourceWidth: (t && t.sourceWidth) || i.sourceWidth,
                        sourceHeight: (t && t.sourceHeight) || i.sourceHeight
                      }
                    })
                  );
                },
                getFilename: function() {
                  var t = this.userOptions.title && this.userOptions.title.text,
                    e = this.options.exporting.filename;
                  return (
                    e ||
                    ('string' == typeof t &&
                      (e = t
                        .toLowerCase()
                        .replace(/<\/?[^>]+(>|$)/g, '')
                        .replace(/[\s_]+/g, '-')
                        .replace(/[^a-z0-9\-]/g, '')
                        .replace(/^[\-]+/g, '')
                        .replace(/[\-]+/g, '-')
                        .substr(0, 24)
                        .replace(/[\-]+$/g, '')),
                    (!e || 5 > e.length) && (e = 'chart'),
                    e)
                  );
                },
                exportChart: function(e, i) {
                  (i = this.getSVGForExport(e, i)),
                    (e = d(this.options.exporting, e)),
                    t.post(
                      e.url,
                      {
                        filename: e.filename || this.getFilename(),
                        type: e.type,
                        width: e.width || 0,
                        scale: e.scale,
                        svg: i
                      },
                      e.formAttributes
                    );
                },
                print: function() {
                  function t(t) {
                    (o.fixedDiv ? [o.fixedDiv, o.scrollingContainer] : [o.container]).forEach(function(e) {
                      t.appendChild(e);
                    });
                  }
                  var e,
                    i,
                    o = this,
                    s = [],
                    r = n.body,
                    l = r.childNodes,
                    h = o.options.exporting.printMaxWidth;
                  o.isPrinting ||
                    ((o.isPrinting = !0),
                    o.pointer.reset(null, 0),
                    a(o, 'beforePrint'),
                    (i = h && o.chartWidth > h) &&
                      ((e = [o.options.chart.width, void 0, !1]), o.setSize(h, void 0, !1)),
                    [].forEach.call(l, function(t, e) {
                      1 === t.nodeType && ((s[e] = t.style.display), (t.style.display = 'none'));
                    }),
                    t(r),
                    setTimeout(function() {
                      m.focus(),
                        m.print(),
                        setTimeout(function() {
                          t(o.renderTo),
                            [].forEach.call(l, function(t, e) {
                              1 === t.nodeType && (t.style.display = s[e]);
                            }),
                            (o.isPrinting = !1),
                            i && o.setSize.apply(o, e),
                            a(o, 'afterPrint');
                        }, 1e3);
                    }, 1));
                },
                contextMenu: function(e, i, o, r, h, d, p) {
                  var u,
                    g = this,
                    m = g.options.navigation,
                    x = g.chartWidth,
                    y = g.chartHeight,
                    v = 'cache-' + e,
                    b = g[v],
                    M = Math.max(h, d);
                  b ||
                    ((g.exportContextMenu = g[v] = b = l(
                      'div',
                      { className: e },
                      { position: 'absolute', zIndex: 1e3, padding: M + 'px', pointerEvents: 'auto' },
                      g.fixedDiv || g.container
                    )),
                    (u = l('div', { className: 'highcharts-menu' }, null, b)),
                    g.styledMode ||
                      c(
                        u,
                        f(
                          {
                            MozBoxShadow: '3px 3px 10px #888',
                            WebkitBoxShadow: '3px 3px 10px #888',
                            boxShadow: '3px 3px 10px #888'
                          },
                          m.menuStyle
                        )
                      ),
                    (b.hideMenu = function() {
                      c(b, { display: 'none' }),
                        p && p.setState(0),
                        (g.openMenu = !1),
                        t.clearTimeout(b.hideTimer),
                        a(g, 'exportMenuHidden');
                    }),
                    g.exportEvents.push(
                      s(b, 'mouseleave', function() {
                        b.hideTimer = setTimeout(b.hideMenu, 500);
                      }),
                      s(b, 'mouseenter', function() {
                        t.clearTimeout(b.hideTimer);
                      }),
                      s(n, 'mouseup', function(t) {
                        g.pointer.inClass(t.target, e) || b.hideMenu();
                      }),
                      s(b, 'click', function() {
                        g.openMenu && b.hideMenu();
                      })
                    ),
                    i.forEach(function(e) {
                      var i;
                      'string' == typeof e && (e = g.options.exporting.menuItemDefinitions[e]),
                        t.isObject(e, !0) &&
                          (e.separator
                            ? (i = l('hr', null, null, u))
                            : ((i = l(
                                'div',
                                {
                                  className: 'highcharts-menu-item',
                                  onclick: function(t) {
                                    t && t.stopPropagation(), b.hideMenu(), e.onclick && e.onclick.apply(g, arguments);
                                  },
                                  innerHTML: e.text || g.options.lang[e.textKey]
                                },
                                null,
                                u
                              )),
                              g.styledMode ||
                                ((i.onmouseover = function() {
                                  c(this, m.menuItemHoverStyle);
                                }),
                                (i.onmouseout = function() {
                                  c(this, m.menuItemStyle);
                                }),
                                c(i, f({ cursor: 'pointer' }, m.menuItemStyle)))),
                          g.exportDivElements.push(i));
                    }),
                    g.exportDivElements.push(u, b),
                    (g.exportMenuWidth = b.offsetWidth),
                    (g.exportMenuHeight = b.offsetHeight)),
                    (i = { display: 'block' }),
                    o + g.exportMenuWidth > x ? (i.right = x - o - h - M + 'px') : (i.left = o - M + 'px'),
                    r + d + g.exportMenuHeight > y && 'top' !== p.alignOptions.verticalAlign
                      ? (i.bottom = y - r - M + 'px')
                      : (i.top = r + d - M + 'px'),
                    c(b, i),
                    (g.openMenu = !0);
                },
                addButton: function(t) {
                  var e,
                    i,
                    n = this,
                    o = n.renderer,
                    s = d(n.options.navigation.buttonOptions, t),
                    r = s.onclick,
                    a = s.menuItems,
                    l = s.symbolSize || 12;
                  if (
                    (n.btnCount || (n.btnCount = 0),
                    n.exportDivElements || ((n.exportDivElements = []), (n.exportSVGElements = [])),
                    !1 !== s.enabled)
                  ) {
                    var h,
                      c = s.theme,
                      u = (g = c.states) && g.hover,
                      g = g && g.select;
                    n.styledMode || ((c.fill = p(c.fill, '#ffffff')), (c.stroke = p(c.stroke, 'none'))),
                      delete c.states,
                      r
                        ? (h = function(t) {
                            t && t.stopPropagation(), r.call(n, t);
                          })
                        : a &&
                          (h = function(t) {
                            t && t.stopPropagation(),
                              n.contextMenu(i.menuClassName, a, i.translateX, i.translateY, i.width, i.height, i),
                              i.setState(2);
                          }),
                      s.text && s.symbol
                        ? (c.paddingLeft = p(c.paddingLeft, 25))
                        : s.text || f(c, { width: s.width, height: s.height, padding: 0 }),
                      n.styledMode ||
                        ((c['stroke-linecap'] = 'round'),
                        (c.fill = p(c.fill, '#ffffff')),
                        (c.stroke = p(c.stroke, 'none'))),
                      ((i = o
                        .button(s.text, 0, 0, h, c, u, g)
                        .addClass(t.className)
                        .attr({ title: p(n.options.lang[s._titleKey || s.titleKey], '') })).menuClassName =
                        t.menuClassName || 'highcharts-menu-' + n.btnCount++),
                      s.symbol &&
                        ((e = o
                          .symbol(s.symbol, s.symbolX - l / 2, s.symbolY - l / 2, l, l, { width: l, height: l })
                          .addClass('highcharts-button-symbol')
                          .attr({ zIndex: 1 })
                          .add(i)),
                        n.styledMode ||
                          e.attr({
                            stroke: s.symbolStroke,
                            fill: s.symbolFill,
                            'stroke-width': s.symbolStrokeWidth || 1
                          })),
                      i
                        .add(n.exportingGroup)
                        .align(f(s, { width: i.width, x: p(s.x, n.buttonOffset) }), !0, 'spacingBox'),
                      (n.buttonOffset += (i.width + s.buttonSpacing) * ('right' === s.align ? -1 : 1)),
                      n.exportSVGElements.push(i, e);
                  }
                },
                destroyExport: function(e) {
                  var i,
                    n = e ? e.target : this,
                    o = n.exportDivElements,
                    s = n.exportEvents;
                  (e = n.exportSVGElements) &&
                    (e.forEach(function(t, e) {
                      t &&
                        ((t.onclick = t.ontouchstart = null),
                        n[(i = 'cache-' + t.menuClassName)] && delete n[i],
                        (n.exportSVGElements[e] = t.destroy()));
                    }),
                    (e.length = 0)),
                    n.exportingGroup && (n.exportingGroup.destroy(), delete n.exportingGroup),
                    o &&
                      (o.forEach(function(e, i) {
                        t.clearTimeout(e.hideTimer),
                          r(e, 'mouseleave'),
                          (n.exportDivElements[i] = e.onmouseout = e.onmouseover = e.ontouchstart = e.onclick = null),
                          h(e);
                      }),
                      (o.length = 0)),
                    s &&
                      (s.forEach(function(t) {
                        t();
                      }),
                      (s.length = 0));
                }
              }),
              (y.prototype.inlineToAttributes = 'fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y'.split(
                ' '
              )),
              (y.prototype.inlineBlacklist = [
                /-/,
                /^(clipPath|cssText|d|height|width)$/,
                /^font$/,
                /[lL]ogical(Width|Height)$/,
                /perspective/,
                /TapHighlightColor/,
                /^transition/,
                /^length$/
              ]),
              (y.prototype.unstyledElements = ['clipPath', 'defs', 'desc']),
              (o.prototype.inlineStyles = function() {
                function t(t) {
                  return t.replace(/([A-Z])/g, function(t, e) {
                    return '-' + e.toLowerCase();
                  });
                }
                var e,
                  i,
                  o = (h = this.renderer).inlineToAttributes,
                  s = h.inlineBlacklist,
                  r = h.inlineWhitelist,
                  a = h.unstyledElements,
                  l = {},
                  h = n.createElement('iframe');
                c(h, { width: '1px', height: '1px', visibility: 'hidden' }),
                  n.body.appendChild(h),
                  (i = h.contentWindow.document).open(),
                  i.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>'),
                  i.close(),
                  (function n(h) {
                    function c(e, i) {
                      if (((x = y = !1), r)) {
                        for (v = r.length; v-- && !y; ) y = r[v].test(i);
                        x = !y;
                      }
                      for ('transform' === i && 'none' === e && (x = !0), v = s.length; v-- && !x; )
                        x = s[v].test(i) || 'function' == typeof e;
                      x ||
                        (f[i] === e && 'svg' !== h.nodeName) ||
                        l[h.nodeName][i] === e ||
                        (-1 !== o.indexOf(i) ? h.setAttribute(t(i), e) : (k += t(i) + ':' + e + ';'));
                    }
                    var p,
                      f,
                      g,
                      x,
                      y,
                      v,
                      k = '';
                    if (1 === h.nodeType && -1 === a.indexOf(h.nodeName)) {
                      if (
                        ((p = m.getComputedStyle(h, null)),
                        (f = 'svg' === h.nodeName ? {} : m.getComputedStyle(h.parentNode, null)),
                        l[h.nodeName] ||
                          ((e = i.getElementsByTagName('svg')[0]),
                          (g = i.createElementNS(h.namespaceURI, h.nodeName)),
                          e.appendChild(g),
                          (l[h.nodeName] = d(m.getComputedStyle(g, null))),
                          'text' === h.nodeName && delete l.text.fill,
                          e.removeChild(g)),
                        M || b)
                      )
                        for (var w in p) c(p[w], w);
                      else u(p, c);
                      k && ((p = h.getAttribute('style')), h.setAttribute('style', (p ? p + ';' : '') + k)),
                        'svg' === h.nodeName && h.setAttribute('stroke-width', '1px'),
                        'text' !== h.nodeName && [].forEach.call(h.children || h.childNodes, n);
                    }
                  })(this.container.querySelector('svg')),
                  e.parentNode.removeChild(e);
              }),
              (v.menu = function(t, e, i, n) {
                return [
                  'M',
                  t,
                  e + 2.5,
                  'L',
                  t + i,
                  e + 2.5,
                  'M',
                  t,
                  e + n / 2 + 0.5,
                  'L',
                  t + i,
                  e + n / 2 + 0.5,
                  'M',
                  t,
                  e + n - 1.5,
                  'L',
                  t + i,
                  e + n - 1.5
                ];
              }),
              (v.menuball = function(t, e, i, n) {
                return [].concat(
                  this.circle(i - (n = n / 3 - 2), e, n, n),
                  this.circle(i - n, e + n + 4, n, n),
                  this.circle(i - n, e + 2 * (n + 4), n, n)
                );
              }),
              (o.prototype.renderExporting = function() {
                var t = this,
                  e = t.options.exporting,
                  i = e.buttons,
                  n = t.isDirtyExporting || !t.exportSVGElements;
                (t.buttonOffset = 0),
                  t.isDirtyExporting && t.destroyExport(),
                  n &&
                    !1 !== e.enabled &&
                    ((t.exportEvents = []),
                    (t.exportingGroup =
                      t.exportingGroup ||
                      t.renderer
                        .g('exporting-group')
                        .attr({ zIndex: 3 })
                        .add()),
                    u(i, function(e) {
                      t.addButton(e);
                    }),
                    (t.isDirtyExporting = !1)),
                  s(t, 'destroy', t.destroyExport);
              }),
              s(o, 'init', function() {
                var t = this;
                (t.exporting = {
                  update: function(e, i) {
                    (t.isDirtyExporting = !0), d(!0, t.options.exporting, e), p(i, !0) && t.redraw();
                  }
                }),
                  e.addUpdate(function(e, i) {
                    (t.isDirtyExporting = !0), d(!0, t.options.navigation, e), p(i, !0) && t.redraw();
                  }, t);
              }),
              o.prototype.callbacks.push(function(t) {
                t.renderExporting(), s(t, 'redraw', t.renderExporting);
              });
          }),
          e(t, 'masters/modules/exporting.src.js', [], function() {});
      }),
        t.exports
          ? ((s.default = s), (t.exports = s))
          : ((n = [i('6n/F')]),
            void 0 ===
              (o = function(t) {
                return s(t), (s.Highcharts = t), s;
              }.apply(e, n)) || (t.exports = o));
    },
    M8aS: function(t, e, i) {
      var n, o, s;
      (s = function(t) {
        function e(t, e, i, n) {
          t.hasOwnProperty(e) || (t[e] = n.apply(null, i));
        }
        e((t = t ? t._modules : {}), 'parts-more/Pane.js', [t['parts/Globals.js']], function(t) {
          function e(t, e) {
            this.init(t, e);
          }
          var i = t.CenteredSeriesMixin,
            n = t.extend,
            o = t.merge,
            s = t.splat;
          n(e.prototype, {
            coll: 'pane',
            init: function(t, e) {
              (this.chart = e), (this.background = []), e.pane.push(this), this.setOptions(t);
            },
            setOptions: function(t) {
              this.options = o(this.defaultOptions, this.chart.angular ? { background: {} } : void 0, t);
            },
            render: function() {
              var t = this.options,
                e = this.options.background,
                i = this.chart.renderer;
              if (
                (this.group ||
                  (this.group = i
                    .g('pane-group')
                    .attr({ zIndex: t.zIndex || 0 })
                    .add()),
                this.updateCenter(),
                e)
              )
                for (e = s(e), t = Math.max(e.length, this.background.length || 0), i = 0; i < t; i++)
                  e[i] && this.axis
                    ? this.renderBackground(o(this.defaultBackgroundOptions, e[i]), i)
                    : this.background[i] &&
                      ((this.background[i] = this.background[i].destroy()), this.background.splice(i, 1));
            },
            renderBackground: function(t, e) {
              var i = 'animate',
                o = { class: 'highcharts-pane ' + (t.className || '') };
              this.chart.styledMode ||
                n(o, { fill: t.backgroundColor, stroke: t.borderColor, 'stroke-width': t.borderWidth }),
                this.background[e] || ((this.background[e] = this.chart.renderer.path().add(this.group)), (i = 'attr')),
                this.background[e][i]({ d: this.axis.getPlotBandPath(t.from, t.to, t) }).attr(o);
            },
            defaultOptions: { center: ['50%', '50%'], size: '85%', startAngle: 0 },
            defaultBackgroundOptions: {
              shape: 'circle',
              borderWidth: 1,
              borderColor: '#cccccc',
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [[0, '#ffffff'], [1, '#e6e6e6']]
              },
              from: -Number.MAX_VALUE,
              innerRadius: 0,
              to: Number.MAX_VALUE,
              outerRadius: '105%'
            },
            updateCenter: function(t) {
              this.center = (t || this.axis || {}).center = i.getCenter.call(this);
            },
            update: function(t, e) {
              o(!0, this.options, t),
                o(!0, this.chart.options.pane, t),
                this.setOptions(this.options),
                this.render(),
                this.chart.axes.forEach(function(t) {
                  t.pane === this && ((t.pane = null), t.update({}, e));
                }, this);
            }
          }),
            (t.Pane = e);
        }),
          e(t, 'parts-more/RadialAxis.js', [t['parts/Globals.js']], function(t) {
            var e,
              i,
              n = t.addEvent,
              o = t.Axis,
              s = t.extend,
              r = t.merge,
              a = t.noop,
              l = t.pick,
              h = t.pInt,
              c = t.Tick,
              d = t.wrap,
              p = t.correctFloat,
              u = o.prototype,
              f = c.prototype;
            (e = {
              getOffset: a,
              redraw: function() {
                this.isDirty = !1;
              },
              render: function() {
                this.isDirty = !1;
              },
              setScale: a,
              setCategories: a,
              setTitle: a
            }),
              (i = {
                defaultRadialGaugeOptions: {
                  labels: { align: 'center', x: 0, y: null },
                  minorGridLineWidth: 0,
                  minorTickInterval: 'auto',
                  minorTickLength: 10,
                  minorTickPosition: 'inside',
                  minorTickWidth: 1,
                  tickLength: 10,
                  tickPosition: 'inside',
                  tickWidth: 2,
                  title: { rotation: 0 },
                  zIndex: 2
                },
                defaultRadialXOptions: {
                  gridLineWidth: 1,
                  labels: { align: null, distance: 15, x: 0, y: null, style: { textOverflow: 'none' } },
                  maxPadding: 0,
                  minPadding: 0,
                  showLastLabel: !1,
                  tickLength: 0
                },
                defaultRadialYOptions: {
                  gridLineInterpolation: 'circle',
                  labels: { align: 'right', x: -3, y: -2 },
                  showLastLabel: !1,
                  title: { x: 4, text: null, rotation: 90 }
                },
                setOptions: function(e) {
                  (e = this.options = r(this.defaultOptions, this.defaultRadialOptions, e)).plotBands ||
                    (e.plotBands = []),
                    t.fireEvent(this, 'afterSetOptions');
                },
                getOffset: function() {
                  u.getOffset.call(this), (this.chart.axisOffset[this.side] = 0);
                },
                getLinePath: function(t, e) {
                  var i = this.chart,
                    n = l(e, (t = this.center)[2] / 2 - this.offset);
                  return (
                    this.isCircular || void 0 !== e
                      ? (((e = this.chart.renderer.symbols.arc(this.left + t[0], this.top + t[1], n, n, {
                          start: this.startAngleRad,
                          end: this.endAngleRad,
                          open: !0,
                          innerR: 0
                        })).xBounds = [this.left + t[0]]),
                        (e.yBounds = [this.top + t[1] - n]))
                      : ((e = this.postTranslate(this.angleRad, n)),
                        (e = ['M', t[0] + i.plotLeft, t[1] + i.plotTop, 'L', e.x, e.y])),
                    e
                  );
                },
                setAxisTranslation: function() {
                  u.setAxisTranslation.call(this),
                    this.center &&
                      ((this.transA = this.isCircular
                        ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1)
                        : this.center[2] / 2 / (this.max - this.min || 1)),
                      (this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0));
                },
                beforeSetTickPositions: function() {
                  (this.autoConnect =
                    this.isCircular &&
                    void 0 === l(this.userMax, this.options.max) &&
                    p(this.endAngleRad - this.startAngleRad) === p(2 * Math.PI)) &&
                    (this.max += (this.categories ? 1 : this.pointRange) || this.closestPointRange || 0);
                },
                setAxisSize: function() {
                  u.setAxisSize.call(this),
                    this.isRadial &&
                      (this.pane.updateCenter(this),
                      this.isCircular && (this.sector = this.endAngleRad - this.startAngleRad),
                      (this.len = this.width = this.height = (this.center[2] * l(this.sector, 1)) / 2));
                },
                getPosition: function(t, e) {
                  return this.postTranslate(
                    this.isCircular ? this.translate(t) : this.angleRad,
                    l(this.isCircular ? e : this.translate(t), this.center[2] / 2) - this.offset
                  );
                },
                postTranslate: function(t, e) {
                  var i = this.chart,
                    n = this.center;
                  return (
                    (t = this.startAngleRad + t),
                    { x: i.plotLeft + n[0] + Math.cos(t) * e, y: i.plotTop + n[1] + Math.sin(t) * e }
                  );
                },
                getPlotBandPath: function(t, e, i) {
                  var n,
                    o,
                    s = this.center,
                    r = this.startAngleRad,
                    a = s[2] / 2,
                    c = [l(i.outerRadius, '100%'), i.innerRadius, l(i.thickness, 10)],
                    d = Math.min(this.offset, 0),
                    p = /%$/;
                  return (
                    (n = this.isCircular),
                    'polygon' === this.options.gridLineInterpolation
                      ? (c = this.getPlotLinePath(t).concat(this.getPlotLinePath(e, !0)))
                      : ((t = Math.max(t, this.min)),
                        (e = Math.min(e, this.max)),
                        n || ((c[0] = this.translate(t)), (c[1] = this.translate(e))),
                        (c = c.map(function(t) {
                          return p.test(t) && (t = (h(t, 10) * a) / 100), t;
                        })),
                        'circle' !== i.shape && n
                          ? ((t = r + this.translate(t)), (e = r + this.translate(e)))
                          : ((t = -Math.PI / 2), (e = 1.5 * Math.PI), (o = !0)),
                        (c[0] -= d),
                        (c[2] -= d),
                        (c = this.chart.renderer.symbols.arc(this.left + s[0], this.top + s[1], c[0], c[0], {
                          start: Math.min(t, e),
                          end: Math.max(t, e),
                          innerR: l(c[1], c[0] - c[2]),
                          open: o
                        })),
                        n &&
                          ((n = (e + t) / 2),
                          (d = this.left + s[0] + (s[2] / 2) * Math.cos(n)),
                          (c.xBounds = n > -Math.PI / 2 && n < Math.PI / 2 ? [d, this.chart.plotWidth] : [0, d]),
                          (c.yBounds = [this.top + s[1] + (s[2] / 2) * Math.sin(n)]),
                          (c.yBounds[0] += (n > -Math.PI && 0 > n) || n > Math.PI ? -10 : 10))),
                    c
                  );
                },
                getPlotLinePath: function(t, e) {
                  var i,
                    n,
                    o,
                    s = this,
                    r = s.center,
                    a = s.chart,
                    l = s.getPosition(t);
                  return (
                    s.isCircular
                      ? (o = ['M', r[0] + a.plotLeft, r[1] + a.plotTop, 'L', l.x, l.y])
                      : 'circle' === s.options.gridLineInterpolation
                      ? ((t = s.translate(t)), (o = s.getLinePath(0, t)))
                      : (a.xAxis.forEach(function(t) {
                          t.pane === s.pane && (i = t);
                        }),
                        (o = []),
                        (t = s.translate(t)),
                        (r = i.tickPositions),
                        i.autoConnect && (r = r.concat([r[0]])),
                        e && (r = [].concat(r).reverse()),
                        r.forEach(function(e, s) {
                          (n = i.getPosition(e, t)), o.push(s ? 'L' : 'M', n.x, n.y);
                        })),
                    o
                  );
                },
                getTitlePosition: function() {
                  var t = this.center,
                    e = this.chart,
                    i = this.options.title;
                  return {
                    x: e.plotLeft + t[0] + (i.x || 0),
                    y: e.plotTop + t[1] - { high: 0.5, middle: 0.25, low: 0 }[i.align] * t[2] + (i.y || 0)
                  };
                }
              }),
              n(o, 'init', function(t) {
                var n,
                  o = this,
                  a = this.chart,
                  l = a.angular,
                  h = a.polar,
                  c = this.isXAxis,
                  d = l && c,
                  p = a.options;
                (t = t.userOptions.pane || 0),
                  (t = this.pane = a.pane && a.pane[t]),
                  l
                    ? (s(this, d ? e : i), (n = !c) && (this.defaultRadialOptions = this.defaultRadialGaugeOptions))
                    : h &&
                      (s(this, i),
                      (this.defaultRadialOptions = (n = c)
                        ? this.defaultRadialXOptions
                        : r(this.defaultYAxisOptions, this.defaultRadialYOptions))),
                  l || h
                    ? ((this.isRadial = !0),
                      (a.inverted = !1),
                      (p.chart.zoomType = null),
                      a.labelCollectors.push(function() {
                        if (o.isRadial && o.tickPositions && !0 !== o.options.labels.allowOverlap)
                          return o.tickPositions
                            .map(function(t) {
                              return o.ticks[t] && o.ticks[t].label;
                            })
                            .filter(function(t) {
                              return !!t;
                            });
                      }))
                    : (this.isRadial = !1),
                  t && n && (t.axis = this),
                  (this.isCircular = n);
              }),
              n(o, 'afterInit', function() {
                var t = this.chart,
                  e = this.options,
                  i = this.pane,
                  n = i && i.options;
                (t.angular && this.isXAxis) ||
                  !i ||
                  (!t.angular && !t.polar) ||
                  ((this.angleRad = ((e.angle || 0) * Math.PI) / 180),
                  (this.startAngleRad = ((n.startAngle - 90) * Math.PI) / 180),
                  (this.endAngleRad = ((l(n.endAngle, n.startAngle + 360) - 90) * Math.PI) / 180),
                  (this.offset = e.offset || 0));
              }),
              n(o, 'autoLabelAlign', function(t) {
                this.isRadial && ((t.align = void 0), t.preventDefault());
              }),
              n(c, 'afterGetPosition', function(t) {
                this.axis.getPosition && s(t.pos, this.axis.getPosition(this.pos));
              }),
              n(c, 'afterGetLabelPosition', function(t) {
                var e,
                  i = this.axis,
                  n = this.label,
                  o = i.options.labels,
                  s = o.y,
                  r = 20,
                  a = o.align,
                  h = (((i.translate(this.pos) + i.startAngleRad + Math.PI / 2) / Math.PI) * 180) % 360;
                i.isRadial &&
                  ((e = i.getPosition(this.pos, i.center[2] / 2 + l(o.distance, -25))),
                  'auto' === o.rotation
                    ? n.attr({ rotation: h })
                    : null === s &&
                      (s = i.chart.renderer.fontMetrics(n.styles && n.styles.fontSize).b - n.getBBox().height / 2),
                  null === a &&
                    (i.isCircular
                      ? (this.label.getBBox().width > (i.len * i.tickInterval) / (i.max - i.min) && (r = 0),
                        (a = h > r && h < 180 - r ? 'left' : h > 180 + r && h < 360 - r ? 'right' : 'center'))
                      : (a = 'center'),
                    n.attr({ align: a })),
                  (t.pos.x = e.x + o.x),
                  (t.pos.y = e.y + s));
              }),
              d(f, 'getMarkPath', function(t, e, i, n, o, s, r) {
                var a = this.axis;
                return a.isRadial
                  ? ['M', e, i, 'L', (t = a.getPosition(this.pos, a.center[2] / 2 + n)).x, t.y]
                  : t.call(this, e, i, n, o, s, r);
              });
          }),
          e(t, 'parts-more/AreaRangeSeries.js', [t['parts/Globals.js']], function(t) {
            var e = t.pick,
              i = t.extend,
              n = t.isArray,
              o = t.defined,
              s = t.seriesTypes,
              r = t.Series.prototype,
              a = t.Point.prototype;
            (0, t.seriesType)(
              'arearange',
              'area',
              {
                lineWidth: 1,
                threshold: null,
                tooltip: {
                  pointFormat:
                    '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
                },
                trackByArea: !0,
                dataLabels: { align: null, verticalAlign: null, xLow: 0, xHigh: 0, yLow: 0, yHigh: 0 }
              },
              {
                pointArrayMap: ['low', 'high'],
                toYData: function(t) {
                  return [t.low, t.high];
                },
                pointValKey: 'low',
                deferTranslatePolar: !0,
                highToXY: function(t) {
                  var e = this.chart,
                    i = this.xAxis.postTranslate(t.rectPlotX, this.yAxis.len - t.plotHigh);
                  (t.plotHighX = i.x - e.plotLeft), (t.plotHigh = i.y - e.plotTop), (t.plotLowX = t.plotX);
                },
                translate: function() {
                  var t = this,
                    e = t.yAxis,
                    i = !!t.modifyValue;
                  s.area.prototype.translate.apply(t),
                    t.points.forEach(function(n) {
                      var o = n.high,
                        s = n.plotY;
                      null === o || null === n.low
                        ? ((n.isNull = !0), (n.plotY = null))
                        : ((n.plotLow = s),
                          (n.plotHigh = e.translate(i ? t.modifyValue(o, n) : o, 0, 1, 0, 1)),
                          i && (n.yBottom = n.plotHigh));
                    }),
                    this.chart.polar &&
                      this.points.forEach(function(e) {
                        t.highToXY(e), (e.tooltipPos = [(e.plotHighX + e.plotLowX) / 2, (e.plotHigh + e.plotLow) / 2]);
                      });
                },
                getGraphPath: function(t) {
                  var i,
                    n,
                    o,
                    r,
                    a = [],
                    l = [],
                    h = s.area.prototype.getGraphPath;
                  r = this.options;
                  var c = this.chart.polar && !1 !== r.connectEnds,
                    d = r.connectNulls,
                    p = r.step;
                  for (i = (t = t || this.points).length; i--; )
                    (n = t[i]).isNull ||
                      c ||
                      d ||
                      (t[i + 1] && !t[i + 1].isNull) ||
                      l.push({ plotX: n.plotX, plotY: n.plotY, doCurve: !1 }),
                      (o = {
                        polarPlotY: n.polarPlotY,
                        rectPlotX: n.rectPlotX,
                        yBottom: n.yBottom,
                        plotX: e(n.plotHighX, n.plotX),
                        plotY: n.plotHigh,
                        isNull: n.isNull
                      }),
                      l.push(o),
                      a.push(o),
                      n.isNull ||
                        c ||
                        d ||
                        (t[i - 1] && !t[i - 1].isNull) ||
                        l.push({ plotX: n.plotX, plotY: n.plotY, doCurve: !1 });
                  return (
                    (t = h.call(this, t)),
                    p && (!0 === p && (p = 'left'), (r.step = { left: 'right', center: 'center', right: 'left' }[p])),
                    (a = h.call(this, a)),
                    (l = h.call(this, l)),
                    (r.step = p),
                    (r = [].concat(t, a)),
                    this.chart.polar || 'M' !== l[0] || (l[0] = 'L'),
                    (this.graphPath = r),
                    (this.areaPath = t.concat(l)),
                    (r.isArea = !0),
                    (r.xMap = t.xMap),
                    (this.areaPath.xMap = t.xMap),
                    r
                  );
                },
                drawDataLabels: function() {
                  var t,
                    e,
                    o,
                    s,
                    a,
                    l = this.points,
                    h = l.length,
                    c = [],
                    d = this.options.dataLabels,
                    p = this.chart.inverted;
                  if (
                    (n(d)
                      ? 1 < d.length
                        ? ((s = d[0]), (a = d[1]))
                        : ((s = d[0]), (a = { enabled: !1 }))
                      : (((s = i({}, d)).x = d.xHigh), (s.y = d.yHigh), ((a = i({}, d)).x = d.xLow), (a.y = d.yLow)),
                    s.enabled || this._hasPointLabels)
                  ) {
                    for (t = h; t--; )
                      (e = l[t]) &&
                        ((o = s.inside ? e.plotHigh < e.plotLow : e.plotHigh > e.plotLow),
                        (e.y = e.high),
                        (e._plotY = e.plotY),
                        (e.plotY = e.plotHigh),
                        (c[t] = e.dataLabel),
                        (e.dataLabel = e.dataLabelUpper),
                        (e.below = o),
                        p
                          ? s.align || (s.align = o ? 'right' : 'left')
                          : s.verticalAlign || (s.verticalAlign = o ? 'top' : 'bottom'));
                    for (
                      this.options.dataLabels = s, r.drawDataLabels && r.drawDataLabels.apply(this, arguments), t = h;
                      t--;

                    )
                      (e = l[t]) &&
                        ((e.dataLabelUpper = e.dataLabel),
                        (e.dataLabel = c[t]),
                        delete e.dataLabels,
                        (e.y = e.low),
                        (e.plotY = e._plotY));
                  }
                  if (a.enabled || this._hasPointLabels) {
                    for (t = h; t--; )
                      (e = l[t]) &&
                        ((e.below = !(o = a.inside ? e.plotHigh < e.plotLow : e.plotHigh > e.plotLow)),
                        p
                          ? a.align || (a.align = o ? 'left' : 'right')
                          : a.verticalAlign || (a.verticalAlign = o ? 'bottom' : 'top'));
                    (this.options.dataLabels = a), r.drawDataLabels && r.drawDataLabels.apply(this, arguments);
                  }
                  if (s.enabled)
                    for (t = h; t--; )
                      (e = l[t]) &&
                        (e.dataLabels = [e.dataLabelUpper, e.dataLabel].filter(function(t) {
                          return !!t;
                        }));
                  this.options.dataLabels = d;
                },
                alignDataLabel: function() {
                  s.column.prototype.alignDataLabel.apply(this, arguments);
                },
                drawPoints: function() {
                  var e,
                    i,
                    n = this.points.length;
                  for (r.drawPoints.apply(this, arguments), i = 0; i < n; )
                    ((e = this.points[i]).origProps = {
                      plotY: e.plotY,
                      plotX: e.plotX,
                      isInside: e.isInside,
                      negative: e.negative,
                      zone: e.zone,
                      y: e.y
                    }),
                      (e.lowerGraphic = e.graphic),
                      (e.graphic = e.upperGraphic),
                      (e.plotY = e.plotHigh),
                      o(e.plotHighX) && (e.plotX = e.plotHighX),
                      (e.y = e.high),
                      (e.negative = e.high < (this.options.threshold || 0)),
                      (e.zone = this.zones.length && e.getZone()),
                      this.chart.polar ||
                        (e.isInside = e.isTopInside =
                          void 0 !== e.plotY &&
                          0 <= e.plotY &&
                          e.plotY <= this.yAxis.len &&
                          0 <= e.plotX &&
                          e.plotX <= this.xAxis.len),
                      i++;
                  for (r.drawPoints.apply(this, arguments), i = 0; i < n; )
                    ((e = this.points[i]).upperGraphic = e.graphic),
                      (e.graphic = e.lowerGraphic),
                      t.extend(e, e.origProps),
                      delete e.origProps,
                      i++;
                },
                setStackedPoints: t.noop
              },
              {
                setState: function() {
                  var t = this.state,
                    e = this.series,
                    i = e.chart.polar;
                  o(this.plotHigh) || (this.plotHigh = e.yAxis.toPixels(this.high, !0)),
                    o(this.plotLow) || (this.plotLow = this.plotY = e.yAxis.toPixels(this.low, !0)),
                    e.stateMarkerGraphic &&
                      ((e.lowerStateMarkerGraphic = e.stateMarkerGraphic),
                      (e.stateMarkerGraphic = e.upperStateMarkerGraphic)),
                    (this.graphic = this.upperGraphic),
                    (this.plotY = this.plotHigh),
                    i && (this.plotX = this.plotHighX),
                    a.setState.apply(this, arguments),
                    (this.state = t),
                    (this.plotY = this.plotLow),
                    (this.graphic = this.lowerGraphic),
                    i && (this.plotX = this.plotLowX),
                    e.stateMarkerGraphic &&
                      ((e.upperStateMarkerGraphic = e.stateMarkerGraphic),
                      (e.stateMarkerGraphic = e.lowerStateMarkerGraphic),
                      (e.lowerStateMarkerGraphic = void 0)),
                    a.setState.apply(this, arguments);
                },
                haloPath: function() {
                  var t = this.series.chart.polar,
                    e = [];
                  return (
                    (this.plotY = this.plotLow),
                    t && (this.plotX = this.plotLowX),
                    this.isInside && (e = a.haloPath.apply(this, arguments)),
                    (this.plotY = this.plotHigh),
                    t && (this.plotX = this.plotHighX),
                    this.isTopInside && (e = e.concat(a.haloPath.apply(this, arguments))),
                    e
                  );
                },
                destroyElements: function() {
                  return (
                    ['lowerGraphic', 'upperGraphic'].forEach(function(t) {
                      this[t] && (this[t] = this[t].destroy());
                    }, this),
                    (this.graphic = null),
                    a.destroyElements.apply(this, arguments)
                  );
                }
              }
            );
          }),
          e(t, 'parts-more/AreaSplineRangeSeries.js', [t['parts/Globals.js']], function(t) {
            (0,
            t.seriesType)('areasplinerange', 'arearange', null, { getPointSpline: t.seriesTypes.spline.prototype.getPointSpline });
          }),
          e(t, 'parts-more/ColumnRangeSeries.js', [t['parts/Globals.js']], function(t) {
            var e = t.defaultPlotOptions,
              i = t.noop,
              n = t.pick,
              o = t.seriesTypes.column.prototype;
            (0, t.seriesType)(
              'columnrange',
              'arearange',
              (0, t.merge)(e.column, e.arearange, { pointRange: null, marker: null, states: { hover: { halo: !1 } } }),
              {
                translate: function() {
                  var t,
                    e,
                    i = this,
                    s = i.yAxis,
                    r = i.xAxis,
                    a = r.startAngleRad,
                    l = i.chart,
                    h = i.xAxis.isRadial,
                    c = Math.max(l.chartWidth, l.chartHeight) + 999;
                  o.translate.apply(i),
                    i.points.forEach(function(o) {
                      var d,
                        p,
                        u = o.shapeArgs,
                        f = i.options.minPointLength;
                      (o.plotHigh = e = Math.min(Math.max(-c, s.translate(o.high, 0, 1, 0, 1)), c)),
                        (o.plotLow = Math.min(Math.max(-c, o.plotY), c)),
                        (p = e),
                        (d = n(o.rectPlotY, o.plotY) - e),
                        Math.abs(d) < f ? ((d += f -= d), (p -= f / 2)) : 0 > d && (p -= d *= -1),
                        h
                          ? ((t = o.barX + a),
                            (o.shapeType = 'path'),
                            (o.shapeArgs = { d: i.polarArc(p + d, p, t, t + o.pointWidth) }))
                          : ((u.height = d),
                            (u.y = p),
                            (o.tooltipPos = l.inverted
                              ? [
                                  s.len + s.pos - l.plotLeft - p - d / 2,
                                  r.len + r.pos - l.plotTop - u.x - u.width / 2,
                                  d
                                ]
                              : [r.left - l.plotLeft + u.x + u.width / 2, s.pos - l.plotTop + p + d / 2, d]));
                    });
                },
                directTouch: !0,
                trackerGroups: ['group', 'dataLabelsGroup'],
                drawGraph: i,
                getSymbol: i,
                crispCol: function() {
                  return o.crispCol.apply(this, arguments);
                },
                drawPoints: function() {
                  return o.drawPoints.apply(this, arguments);
                },
                drawTracker: function() {
                  return o.drawTracker.apply(this, arguments);
                },
                getColumnMetrics: function() {
                  return o.getColumnMetrics.apply(this, arguments);
                },
                pointAttribs: function() {
                  return o.pointAttribs.apply(this, arguments);
                },
                animate: function() {
                  return o.animate.apply(this, arguments);
                },
                polarArc: function() {
                  return o.polarArc.apply(this, arguments);
                },
                translate3dPoints: function() {
                  return o.translate3dPoints.apply(this, arguments);
                },
                translate3dShapes: function() {
                  return o.translate3dShapes.apply(this, arguments);
                }
              },
              { setState: o.pointClass.prototype.setState }
            );
          }),
          e(t, 'parts-more/ColumnPyramidSeries.js', [t['parts/Globals.js']], function(t) {
            var e = t.pick,
              i = t.seriesTypes.column.prototype;
            (0, t.seriesType)(
              'columnpyramid',
              'column',
              {},
              {
                translate: function() {
                  var t = this,
                    n = t.chart,
                    o = t.options,
                    s = (t.dense = 2 > t.closestPointRange * t.xAxis.transA),
                    r = ((s = t.borderWidth = e(o.borderWidth, s ? 0 : 1)), t.yAxis),
                    a = o.threshold,
                    l = (t.translatedThreshold = r.getThreshold(a)),
                    h = e(o.minPointLength, 5),
                    c = t.getColumnMetrics(),
                    d = c.width,
                    p = (t.barW = Math.max(d, 1 + 2 * s)),
                    u = (t.pointXOffset = c.offset);
                  n.inverted && (l -= 0.5),
                    o.pointPadding && (p = Math.ceil(p)),
                    i.translate.apply(t),
                    t.points.forEach(function(i) {
                      var s,
                        c,
                        f,
                        g,
                        m,
                        x,
                        y = e(i.yBottom, l),
                        v = 999 + Math.abs(y),
                        b = Math.min(Math.max(-v, i.plotY), r.len + v),
                        M = ((v = i.plotX + u), p / 2),
                        k = Math.min(b, y);
                      (y = Math.max(b, y) - k),
                        (i.barX = v),
                        (i.pointWidth = d),
                        (i.tooltipPos = n.inverted
                          ? [r.len + r.pos - n.plotLeft - b, t.xAxis.len - v - M, y]
                          : [v + M, b + r.pos - n.plotTop, y]),
                        (b = a + (i.total || i.y)),
                        'percent' === o.stacking && (b = a + (0 > i.y) ? -100 : 100),
                        (f = (M * (k + y - (b = r.toPixels(b, !0)))) / (s = n.plotHeight - b - (n.plotHeight - l))),
                        (s = v - (c = (M * (k - b)) / s) + M),
                        (c = v + c + M),
                        (g = v + f + M),
                        (f = v - f + M),
                        (m = k - h),
                        (x = k + y),
                        0 > i.y && ((m = k), (x = k + y + h)),
                        n.inverted &&
                          ((f = (M * (b - ((g = n.plotWidth - k) - y))) / (s = b - (n.plotWidth - l))),
                          (c = (s = v + M + (c = (M * (b - g)) / s)) - 2 * c),
                          (g = v - f + M),
                          (f = v + f + M),
                          (m = k),
                          (x = k + y - h),
                          0 > i.y && (x = k + y + h)),
                        (i.shapeType = 'path'),
                        (i.shapeArgs = {
                          x: s,
                          y: m,
                          width: c - s,
                          height: y,
                          d: ['M', s, m, 'L', c, m, g, x, f, x, 'Z']
                        });
                    });
                }
              }
            );
          }),
          e(t, 'parts-more/GaugeSeries.js', [t['parts/Globals.js']], function(t) {
            var e = t.isNumber,
              i = t.merge,
              n = t.pick,
              o = t.pInt,
              s = t.Series,
              r = t.TrackerMixin;
            (0, t.seriesType)(
              'gauge',
              'line',
              {
                dataLabels: {
                  borderColor: '#cccccc',
                  borderRadius: 3,
                  borderWidth: 1,
                  crop: !1,
                  defer: !1,
                  enabled: !0,
                  verticalAlign: 'top',
                  y: 15,
                  zIndex: 2
                },
                dial: {},
                pivot: {},
                tooltip: { headerFormat: '' },
                showInLegend: !1
              },
              {
                angular: !0,
                directTouch: !0,
                drawGraph: t.noop,
                fixedBox: !0,
                forceDL: !0,
                noSharedTooltip: !0,
                trackerGroups: ['group', 'dataLabelsGroup'],
                translate: function() {
                  var t = this.yAxis,
                    s = this.options,
                    r = t.center;
                  this.generatePoints(),
                    this.points.forEach(function(a) {
                      var l = i(s.dial, a.dial),
                        h = (o(n(l.radius, 80)) * r[2]) / 200,
                        c = (o(n(l.baseLength, 70)) * h) / 100,
                        d = (o(n(l.rearLength, 10)) * h) / 100,
                        p = l.baseWidth || 3,
                        u = l.topWidth || 1,
                        f = s.overshoot,
                        g = t.startAngleRad + t.translate(a.y, null, null, null, !0);
                      e(f)
                        ? ((f = (f / 180) * Math.PI),
                          (g = Math.max(t.startAngleRad - f, Math.min(t.endAngleRad + f, g))))
                        : !1 === s.wrap && (g = Math.max(t.startAngleRad, Math.min(t.endAngleRad, g))),
                        (g = (180 * g) / Math.PI),
                        (a.shapeType = 'path'),
                        (a.shapeArgs = {
                          d: l.path || ['M', -d, -p / 2, 'L', c, -p / 2, h, -u / 2, h, u / 2, c, p / 2, -d, p / 2, 'z'],
                          translateX: r[0],
                          translateY: r[1],
                          rotation: g
                        }),
                        (a.plotX = r[0]),
                        (a.plotY = r[1]);
                    });
                },
                drawPoints: function() {
                  var t = this,
                    e = t.chart,
                    o = t.yAxis.center,
                    s = t.pivot,
                    r = t.options,
                    a = r.pivot,
                    l = e.renderer;
                  t.points.forEach(function(n) {
                    var o = n.graphic,
                      s = n.shapeArgs,
                      a = s.d,
                      h = i(r.dial, n.dial);
                    o
                      ? (o.animate(s), (s.d = a))
                      : ((n.graphic = l[n.shapeType](s)
                          .attr({ rotation: s.rotation, zIndex: 1 })
                          .addClass('highcharts-dial')
                          .add(t.group)),
                        e.styledMode ||
                          n.graphic.attr({
                            stroke: h.borderColor || 'none',
                            'stroke-width': h.borderWidth || 0,
                            fill: h.backgroundColor || '#000000'
                          }));
                  }),
                    s
                      ? s.animate({ translateX: o[0], translateY: o[1] })
                      : ((t.pivot = l
                          .circle(0, 0, n(a.radius, 5))
                          .attr({ zIndex: 2 })
                          .addClass('highcharts-pivot')
                          .translate(o[0], o[1])
                          .add(t.group)),
                        e.styledMode ||
                          t.pivot.attr({
                            'stroke-width': a.borderWidth || 0,
                            stroke: a.borderColor || '#cccccc',
                            fill: a.backgroundColor || '#000000'
                          }));
                },
                animate: function(t) {
                  var e = this;
                  t ||
                    (e.points.forEach(function(t) {
                      var i = t.graphic;
                      i &&
                        (i.attr({ rotation: (180 * e.yAxis.startAngleRad) / Math.PI }),
                        i.animate({ rotation: t.shapeArgs.rotation }, e.options.animation));
                    }),
                    (e.animate = null));
                },
                render: function() {
                  (this.group = this.plotGroup(
                    'group',
                    'series',
                    this.visible ? 'visible' : 'hidden',
                    this.options.zIndex,
                    this.chart.seriesGroup
                  )),
                    s.prototype.render.call(this),
                    this.group.clip(this.chart.clipRect);
                },
                setData: function(t, e) {
                  s.prototype.setData.call(this, t, !1),
                    this.processData(),
                    this.generatePoints(),
                    n(e, !0) && this.chart.redraw();
                },
                hasData: function() {
                  return !!this.points.length;
                },
                drawTracker: r && r.drawTrackerPoint
              },
              {
                setState: function(t) {
                  this.state = t;
                }
              }
            );
          }),
          e(t, 'parts-more/BoxPlotSeries.js', [t['parts/Globals.js']], function(t) {
            var e = t.noop,
              i = t.pick,
              n = t.seriesTypes;
            (0, t.seriesType)(
              'boxplot',
              'column',
              {
                threshold: null,
                tooltip: {
                  pointFormat:
                    '<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'
                },
                whiskerLength: '50%',
                fillColor: '#ffffff',
                lineWidth: 1,
                medianWidth: 2,
                whiskerWidth: 2
              },
              {
                pointArrayMap: ['low', 'q1', 'median', 'q3', 'high'],
                toYData: function(t) {
                  return [t.low, t.q1, t.median, t.q3, t.high];
                },
                pointValKey: 'high',
                pointAttribs: function() {
                  return {};
                },
                drawDataLabels: e,
                translate: function() {
                  var t = this.yAxis,
                    e = this.pointArrayMap;
                  n.column.prototype.translate.apply(this),
                    this.points.forEach(function(i) {
                      e.forEach(function(e) {
                        null !== i[e] && (i[e + 'Plot'] = t.translate(i[e], 0, 1, 0, 1));
                      });
                    });
                },
                drawPoints: function() {
                  var t,
                    e,
                    n,
                    o,
                    s,
                    r,
                    a,
                    l,
                    h,
                    c,
                    d,
                    p = this,
                    u = p.options,
                    f = p.chart,
                    g = f.renderer,
                    m = 0,
                    x = !1 !== p.doQuartiles,
                    y = p.options.whiskerLength;
                  p.points.forEach(function(v) {
                    var b = v.graphic,
                      M = b ? 'animate' : 'attr',
                      k = v.shapeArgs,
                      w = {},
                      S = {},
                      P = {},
                      T = {},
                      L = v.color || p.color;
                    void 0 !== v.plotY &&
                      ((a = k.width),
                      (l = Math.floor(k.x)),
                      (h = l + a),
                      (c = Math.round(a / 2)),
                      (t = Math.floor(x ? v.q1Plot : v.lowPlot)),
                      (e = Math.floor(x ? v.q3Plot : v.lowPlot)),
                      (n = Math.floor(v.highPlot)),
                      (o = Math.floor(v.lowPlot)),
                      b ||
                        ((v.graphic = b = g.g('point').add(p.group)),
                        (v.stem = g
                          .path()
                          .addClass('highcharts-boxplot-stem')
                          .add(b)),
                        y &&
                          (v.whiskers = g
                            .path()
                            .addClass('highcharts-boxplot-whisker')
                            .add(b)),
                        x &&
                          (v.box = g
                            .path(void 0)
                            .addClass('highcharts-boxplot-box')
                            .add(b)),
                        (v.medianShape = g
                          .path(void 0)
                          .addClass('highcharts-boxplot-median')
                          .add(b))),
                      f.styledMode ||
                        ((S.stroke = v.stemColor || u.stemColor || L),
                        (S['stroke-width'] = i(v.stemWidth, u.stemWidth, u.lineWidth)),
                        (S.dashstyle = v.stemDashStyle || u.stemDashStyle),
                        v.stem.attr(S),
                        y &&
                          ((P.stroke = v.whiskerColor || u.whiskerColor || L),
                          (P['stroke-width'] = i(v.whiskerWidth, u.whiskerWidth, u.lineWidth)),
                          v.whiskers.attr(P)),
                        x &&
                          ((w.fill = v.fillColor || u.fillColor || L),
                          (w.stroke = u.lineColor || L),
                          (w['stroke-width'] = u.lineWidth || 0),
                          v.box.attr(w)),
                        (T.stroke = v.medianColor || u.medianColor || L),
                        (T['stroke-width'] = i(v.medianWidth, u.medianWidth, u.lineWidth)),
                        v.medianShape.attr(T)),
                      (r = (v.stem.strokeWidth() % 2) / 2),
                      v.stem[M]({ d: ['M', (m = l + c + r), e, 'L', m, n, 'M', m, t, 'L', m, o] }),
                      x &&
                        ((r = (v.box.strokeWidth() % 2) / 2),
                        (t = Math.floor(t) + r),
                        (e = Math.floor(e) + r),
                        v.box[M]({ d: ['M', (l += r), e, 'L', l, t, 'L', (h += r), t, 'L', h, e, 'L', l, e, 'z'] })),
                      y &&
                        ((r = (v.whiskers.strokeWidth() % 2) / 2),
                        (n += r),
                        (o += r),
                        (d = /%$/.test(y) ? (c * parseFloat(y)) / 100 : y / 2),
                        v.whiskers[M]({ d: ['M', m - d, n, 'L', m + d, n, 'M', m - d, o, 'L', m + d, o] })),
                      (s = Math.round(v.medianPlot)),
                      (r = (v.medianShape.strokeWidth() % 2) / 2),
                      v.medianShape[M]({ d: ['M', l, (s += r), 'L', h, s] }));
                  });
                },
                setStackedPoints: e
              }
            );
          }),
          e(t, 'parts-more/ErrorBarSeries.js', [t['parts/Globals.js']], function(t) {
            var e = t.seriesTypes;
            (0, t.seriesType)(
              'errorbar',
              'boxplot',
              {
                color: '#000000',
                grouping: !1,
                linkedTo: ':previous',
                tooltip: {
                  pointFormat:
                    '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
                },
                whiskerWidth: null
              },
              {
                type: 'errorbar',
                pointArrayMap: ['low', 'high'],
                toYData: function(t) {
                  return [t.low, t.high];
                },
                pointValKey: 'high',
                doQuartiles: !1,
                drawDataLabels: e.arearange
                  ? function() {
                      var t = this.pointValKey;
                      e.arearange.prototype.drawDataLabels.call(this),
                        this.data.forEach(function(e) {
                          e.y = e[t];
                        });
                    }
                  : t.noop,
                getColumnMetrics: function() {
                  return (
                    (this.linkedParent && this.linkedParent.columnMetrics) ||
                    e.column.prototype.getColumnMetrics.call(this)
                  );
                }
              }
            );
          }),
          e(t, 'parts-more/WaterfallSeries.js', [t['parts/Globals.js']], function(t) {
            var e = t.correctFloat,
              i = t.isNumber,
              n = t.pick,
              o = t.objectEach,
              s = t.arrayMin,
              r = t.arrayMax,
              a = t.addEvent,
              l = t.Chart,
              h = t.Point,
              c = t.Series,
              d = t.seriesType,
              p = t.seriesTypes;
            a(t.Axis, 'afterInit', function() {
              this.isXAxis || (this.waterfallStacks = {});
            }),
              a(l, 'beforeRedraw', function() {
                for (var t = this.axes, e = this.series, i = e.length; i--; )
                  e[i].options.stacking &&
                    (t.forEach(function(t) {
                      t.isXAxis || (t.waterfallStacks = {});
                    }),
                    (i = 0));
              }),
              d(
                'waterfall',
                'column',
                {
                  dataLabels: { inside: !0 },
                  lineWidth: 1,
                  lineColor: '#333333',
                  dashStyle: 'Dot',
                  borderColor: '#333333',
                  states: { hover: { lineWidthPlus: 0 } }
                },
                {
                  pointValKey: 'y',
                  showLine: !0,
                  generatePoints: function() {
                    var t, i, n;
                    for (p.column.prototype.generatePoints.apply(this), n = 0, i = this.points.length; n < i; n++)
                      ((t = this.points[n]).isIntermediateSum || t.isSum) && (t.y = e(this.processedYData[n]));
                  },
                  translate: function() {
                    var t,
                      e,
                      i,
                      o,
                      s,
                      r,
                      a,
                      l,
                      h,
                      c,
                      d = this.options,
                      u = this.yAxis,
                      f = n(d.minPointLength, 5),
                      g = f / 2,
                      m = d.threshold,
                      x = d.stacking,
                      y = u.waterfallStacks[this.stackKey];
                    for (
                      p.column.prototype.translate.apply(this), a = l = m, t = 0, d = (e = this.points).length;
                      t < d;
                      t++
                    )
                      (o = (i = e[t]).shapeArgs),
                        (h = [0, (r = this.processedYData[t])]),
                        (c = i.y),
                        x
                          ? y &&
                            ((h = y[t]),
                            'overlap' === x
                              ? ((s = h.threshold + h.total), (h.total -= c), (s = 0 <= c ? s : s - c))
                              : 0 <= c
                              ? ((s = h.threshold + h.posTotal), (h.posTotal -= c))
                              : ((s = h.threshold + h.negTotal), (h.negTotal -= c), (s -= c)),
                            i.isSum || (h.connectorThreshold = h.threshold + h.stackTotal),
                            u.reversed ? ((r = 0 <= c ? s - c : s + c), (c = s)) : ((r = s), (c = s - c)),
                            (i.below = r <= n(m, 0)),
                            (o.y = u.translate(r, 0, 1, 0, 1)),
                            (o.height = Math.abs(o.y - u.translate(c, 0, 1, 0, 1))))
                          : ((s = Math.max(a, a + c) + h[0]),
                            (o.y = u.translate(s, 0, 1, 0, 1)),
                            i.isSum
                              ? ((o.y = u.translate(h[1], 0, 1, 0, 1)),
                                (o.height = Math.min(u.translate(h[0], 0, 1, 0, 1), u.len) - o.y))
                              : i.isIntermediateSum
                              ? (0 <= c ? ((r = h[1] + l), (c = l)) : ((r = l), (c = h[1] + l)),
                                u.reversed && ((r ^= c), (r ^= c ^= r)),
                                (o.y = u.translate(r, 0, 1, 0, 1)),
                                (o.height = Math.abs(o.y - Math.min(u.translate(c, 0, 1, 0, 1), u.len))),
                                (l += h[1]))
                              : ((o.height =
                                  0 < r
                                    ? u.translate(a, 0, 1, 0, 1) - o.y
                                    : u.translate(a, 0, 1, 0, 1) - u.translate(a - r, 0, 1, 0, 1)),
                                (i.below = (a += r) < n(m, 0))),
                            0 > o.height && ((o.y += o.height), (o.height *= -1))),
                        (i.plotY = o.y = Math.round(o.y) - (this.borderWidth % 2) / 2),
                        (o.height = Math.max(Math.round(o.height), 0.001)),
                        (i.yBottom = o.y + o.height),
                        o.height <= f && !i.isNull
                          ? ((o.height = f), (o.y -= g), (i.plotY = o.y), (i.minPointLengthOffset = 0 > i.y ? -g : g))
                          : (i.isNull && (o.width = 0), (i.minPointLengthOffset = 0)),
                        (o = i.plotY + (i.negative ? o.height : 0)),
                        this.chart.inverted ? (i.tooltipPos[0] = u.len - o) : (i.tooltipPos[1] = o);
                  },
                  processData: function(t) {
                    var i,
                      n,
                      o,
                      s,
                      r,
                      a,
                      l,
                      h = this.options,
                      d = this.yData,
                      p = h.data,
                      u = d.length,
                      f = h.threshold || 0;
                    for (l = o = n = s = r = 0; l < u; l++)
                      (i = p && p[l] ? p[l] : {}),
                        'sum' === (a = d[l]) || i.isSum
                          ? (d[l] = e(o))
                          : 'intermediateSum' === a || i.isIntermediateSum
                          ? ((d[l] = e(n)), (n = 0))
                          : ((o += a), (n += a)),
                        (s = Math.min(o, s)),
                        (r = Math.max(o, r));
                    c.prototype.processData.call(this, t), h.stacking || ((this.dataMin = s + f), (this.dataMax = r));
                  },
                  toYData: function(t) {
                    return t.isSum
                      ? 0 === t.x
                        ? null
                        : 'sum'
                      : t.isIntermediateSum
                      ? 0 === t.x
                        ? null
                        : 'intermediateSum'
                      : t.y;
                  },
                  pointAttribs: function(t, e) {
                    var i = this.options.upColor;
                    return (
                      i && !t.options.color && (t.color = 0 < t.y ? i : null),
                      delete (t = p.column.prototype.pointAttribs.call(this, t, e)).dashstyle,
                      t
                    );
                  },
                  getGraphPath: function() {
                    return ['M', 0, 0];
                  },
                  getCrispPath: function() {
                    var t,
                      e,
                      i,
                      n,
                      o,
                      s,
                      r,
                      a = this.data,
                      l = this.yAxis,
                      h = a.length,
                      c = (Math.round(this.graph.strokeWidth()) % 2) / 2,
                      d = (Math.round(this.borderWidth) % 2) / 2,
                      p = this.xAxis.reversed,
                      u = this.yAxis.reversed,
                      f = this.options.stacking,
                      g = [];
                    for (s = 1; s < h; s++)
                      (o = a[s].shapeArgs),
                        (n = a[s - 1].shapeArgs),
                        (i = 0 < (e = a[s - 1]).y ? -n.height : 0),
                        (t = l.waterfallStacks[this.stackKey]) &&
                          ((t = t[s - 1]),
                          f
                            ? ((t = t.connectorThreshold),
                              (i = Math.round(l.translate(t, 0, 1, 0, 1) + (u ? i : 0)) - c))
                            : (i = n.y + e.minPointLengthOffset + d - c),
                          (r = ['M', n.x + (p ? 0 : n.width), i, 'L', o.x + (p ? o.width : 0), i])),
                        ((!f && 0 > e.y && !u) || (0 < e.y && u)) && ((r[2] += n.height), (r[5] += n.height)),
                        (g = g.concat(r));
                    return g;
                  },
                  drawGraph: function() {
                    c.prototype.drawGraph.call(this), this.graph.attr({ d: this.getCrispPath() });
                  },
                  setStackedPoints: function() {
                    var t,
                      e,
                      i,
                      n = this.options,
                      o = this.yAxis.waterfallStacks,
                      s = n.threshold,
                      r = s || 0,
                      a = s || 0,
                      l = this.stackKey,
                      h = this.xData,
                      c = h.length;
                    if (this.visible || !this.chart.options.chart.ignoreHiddenSeries)
                      for (o[l] || (o[l] = {}), o = o[l], l = 0; l < c; l++)
                        o[(t = h[l])] ||
                          (o[t] = { negTotal: 0, posTotal: 0, total: 0, stackTotal: 0, threshold: 0, stackState: [r] }),
                          (t = o[t]),
                          0 <= (e = this.yData[l]) ? (t.posTotal += e) : (t.negTotal += e),
                          (i = n.data[l]) && i.isIntermediateSum ? ((r ^= a), (r ^= a ^= r)) : i && i.isSum && (r = s),
                          (t.stackTotal = (e = t.posTotal) + t.negTotal),
                          (t.total = t.stackTotal),
                          (t.threshold = r),
                          (t.stackState[0] = r),
                          t.stackState.push(t.stackTotal),
                          (r += t.stackTotal);
                  },
                  getExtremes: function() {
                    var t,
                      e,
                      i,
                      n,
                      a,
                      l = this.options.stacking;
                    l &&
                      ((t = (t = this.yAxis).waterfallStacks),
                      (e = this.stackedYNeg = []),
                      (i = this.stackedYPos = []),
                      o(
                        t[this.stackKey],
                        'overlap' === l
                          ? function(t) {
                              (n = []),
                                t.stackState.forEach(function(e, i) {
                                  (a = t.stackState[0]), n.push(i ? e + a : a);
                                }),
                                e.push(s(n)),
                                i.push(r(n));
                            }
                          : function(t) {
                              e.push(t.negTotal + t.threshold), i.push(t.posTotal + t.threshold);
                            }
                      ),
                      (this.dataMin = s(e)),
                      (this.dataMax = r(i)));
                  }
                },
                {
                  getClassName: function() {
                    var t = h.prototype.getClassName.call(this);
                    return (
                      this.isSum
                        ? (t += ' highcharts-sum')
                        : this.isIntermediateSum && (t += ' highcharts-intermediate-sum'),
                      t
                    );
                  },
                  isValid: function() {
                    return i(this.y, !0) || this.isSum || this.isIntermediateSum;
                  }
                }
              );
          }),
          e(t, 'parts-more/PolygonSeries.js', [t['parts/Globals.js']], function(t) {
            var e = t.Series,
              i = t.seriesTypes;
            (0, t.seriesType)(
              'polygon',
              'scatter',
              {
                marker: { enabled: !1, states: { hover: { enabled: !1 } } },
                stickyTracking: !1,
                tooltip: { followPointer: !0, pointFormat: '' },
                trackByArea: !0
              },
              {
                type: 'polygon',
                getGraphPath: function() {
                  for (var t = e.prototype.getGraphPath.call(this), i = t.length + 1; i--; )
                    (i === t.length || 'M' === t[i]) && 0 < i && t.splice(i, 0, 'z');
                  return (this.areaPath = t);
                },
                drawGraph: function() {
                  (this.options.fillColor = this.color), i.area.prototype.drawGraph.call(this);
                },
                drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
                drawTracker: e.prototype.drawTracker,
                setStackedPoints: t.noop
              }
            );
          }),
          e(t, 'parts-more/BubbleLegend.js', [t['parts/Globals.js']], function(t) {
            var e = t.Series,
              i = t.Legend,
              n = t.Chart,
              o = t.addEvent,
              s = t.wrap,
              r = t.color,
              a = t.isNumber,
              l = t.numberFormat,
              h = t.objectEach,
              c = t.merge,
              d = t.noop,
              p = t.pick,
              u = t.stableSort,
              f = t.arrayMin,
              g = t.arrayMax;
            (0, t.setOptions)({
              legend: {
                bubbleLegend: {
                  borderColor: void 0,
                  borderWidth: 2,
                  className: void 0,
                  color: void 0,
                  connectorClassName: void 0,
                  connectorColor: void 0,
                  connectorDistance: 60,
                  connectorWidth: 1,
                  enabled: !1,
                  labels: {
                    className: void 0,
                    allowOverlap: !1,
                    format: '',
                    formatter: void 0,
                    align: 'right',
                    style: { fontSize: 10, color: void 0 },
                    x: 0,
                    y: 0
                  },
                  maxSize: 60,
                  minSize: 10,
                  legendIndex: 0,
                  ranges: { value: void 0, borderColor: void 0, color: void 0, connectorColor: void 0 },
                  sizeBy: 'area',
                  sizeByAbsoluteValue: !1,
                  zIndex: 1,
                  zThreshold: 0
                }
              }
            }),
              (t.BubbleLegend = function(t, e) {
                this.init(t, e);
              }),
              (t.BubbleLegend.prototype = {
                init: function(t, e) {
                  (this.options = t), (this.visible = !0), (this.chart = e.chart), (this.legend = e);
                },
                setState: d,
                addToLegend: function(t) {
                  t.splice(this.options.legendIndex, 0, this);
                },
                drawLegendSymbol: function(t) {
                  var e,
                    i = this.chart,
                    n = this.options,
                    o = p(t.options.itemDistance, 20),
                    s = n.ranges;
                  (e = n.connectorDistance),
                    (this.fontMetrics = i.renderer.fontMetrics(n.labels.style.fontSize.toString() + 'px')),
                    s && s.length && a(s[0].value)
                      ? (u(s, function(t, e) {
                          return e.value - t.value;
                        }),
                        (this.ranges = s),
                        this.setOptions(),
                        this.render(),
                        (i = this.getMaxLabelSize()),
                        (t = 2 * (s = this.ranges[0].radius)),
                        (e = 0 < (e = e - s + i.width) ? e : 0),
                        (this.maxLabel = i),
                        (this.movementX = 'left' === n.labels.align ? e : 0),
                        (this.legendItemWidth = t + e + o),
                        (this.legendItemHeight = t + this.fontMetrics.h / 2))
                      : (t.options.bubbleLegend.autoRanges = !0);
                },
                setOptions: function() {
                  var t = this.ranges,
                    e = this.options,
                    i = this.chart.series[e.seriesIndex],
                    n = this.legend.baseline,
                    o = { 'z-index': e.zIndex, 'stroke-width': e.borderWidth },
                    s = { 'z-index': e.zIndex, 'stroke-width': e.connectorWidth },
                    a = this.getLabelStyles(),
                    l = i.options.marker.fillOpacity,
                    h = this.chart.styledMode;
                  t.forEach(function(d, u) {
                    h ||
                      ((o.stroke = p(d.borderColor, e.borderColor, i.color)),
                      (o.fill = p(
                        d.color,
                        e.color,
                        1 !== l
                          ? r(i.color)
                              .setOpacity(l)
                              .get('rgba')
                          : i.color
                      )),
                      (s.stroke = p(d.connectorColor, e.connectorColor, i.color))),
                      (t[u].radius = this.getRangeRadius(d.value)),
                      (t[u] = c(t[u], { center: t[0].radius - t[u].radius + n })),
                      h || c(!0, t[u], { bubbleStyle: c(!1, o), connectorStyle: c(!1, s), labelStyle: a });
                  }, this);
                },
                getLabelStyles: function() {
                  var t = this.options,
                    e = {},
                    i = 'left' === t.labels.align,
                    n = this.legend.options.rtl;
                  return (
                    h(t.labels.style, function(t, i) {
                      'color' !== i && 'fontSize' !== i && 'z-index' !== i && (e[i] = t);
                    }),
                    c(!1, e, {
                      'font-size': t.labels.style.fontSize,
                      fill: p(t.labels.style.color, '#000000'),
                      'z-index': t.zIndex,
                      align: n || i ? 'right' : 'left'
                    })
                  );
                },
                getRangeRadius: function(t) {
                  var e = this.options;
                  return this.chart.series[this.options.seriesIndex].getRadius.call(
                    this,
                    e.ranges[e.ranges.length - 1].value,
                    e.ranges[0].value,
                    e.minSize,
                    e.maxSize,
                    t
                  );
                },
                render: function() {
                  var t = this.chart.renderer,
                    e = this.options.zThreshold;
                  this.symbols || (this.symbols = { connectors: [], bubbleItems: [], labels: [] }),
                    (this.legendSymbol = t.g('bubble-legend')),
                    (this.legendItem = t.g('bubble-legend-item')),
                    (this.legendSymbol.translateX = 0),
                    (this.legendSymbol.translateY = 0),
                    this.ranges.forEach(function(t) {
                      t.value >= e && this.renderRange(t);
                    }, this),
                    this.legendSymbol.add(this.legendItem),
                    this.legendItem.add(this.legendGroup),
                    this.hideOverlappingLabels();
                },
                renderRange: function(t) {
                  var e,
                    i = this.options,
                    n = i.labels,
                    o = this.chart.renderer,
                    s = this.symbols,
                    r = s.labels,
                    a = t.center,
                    l = Math.abs(t.radius),
                    h = i.connectorDistance,
                    c = n.align,
                    d = n.style.fontSize,
                    p = ((h = this.legend.options.rtl || 'left' === c ? -h : h), this.ranges[0].radius),
                    u = a - l - i.borderWidth / 2 + (n = i.connectorWidth) / 2,
                    f = ((d = d / 2 - (this.fontMetrics.h - d) / 2), o.styledMode);
                  'center' === c && ((h = 0), (i.connectorDistance = 0), (t.labelStyle.align = 'center')),
                    (c = u + i.labels.y),
                    (e = p + h + i.labels.x),
                    s.bubbleItems.push(
                      o
                        .circle(p, a + ((u % 1 ? 1 : 0.5) - (n % 2 ? 0 : 0.5)), l)
                        .attr(f ? {} : t.bubbleStyle)
                        .addClass(
                          (f ? 'highcharts-color-' + this.options.seriesIndex + ' ' : '') +
                            'highcharts-bubble-legend-symbol ' +
                            (i.className || '')
                        )
                        .add(this.legendSymbol)
                    ),
                    s.connectors.push(
                      o
                        .path(o.crispLine(['M', p, u, 'L', p + h, u], i.connectorWidth))
                        .attr(f ? {} : t.connectorStyle)
                        .addClass(
                          (f ? 'highcharts-color-' + this.options.seriesIndex + ' ' : '') +
                            'highcharts-bubble-legend-connectors ' +
                            (i.connectorClassName || '')
                        )
                        .add(this.legendSymbol)
                    ),
                    (t = o
                      .text(this.formatLabel(t), e, c + d)
                      .attr(f ? {} : t.labelStyle)
                      .addClass('highcharts-bubble-legend-labels ' + (i.labels.className || ''))
                      .add(this.legendSymbol)),
                    r.push(t),
                    (t.placed = !0),
                    (t.alignAttr = { x: e, y: c + d });
                },
                getMaxLabelSize: function() {
                  var t, e;
                  return (
                    this.symbols.labels.forEach(function(i) {
                      (e = i.getBBox(!0)), (t = t ? (e.width > t.width ? e : t) : e);
                    }),
                    t || {}
                  );
                },
                formatLabel: function(e) {
                  var i = this.options,
                    n = i.labels.formatter;
                  return (i = i.labels.format) ? t.format(i, e) : n ? n.call(e) : l(e.value, 1);
                },
                hideOverlappingLabels: function() {
                  var t = this.symbols;
                  !this.options.labels.allowOverlap &&
                    t &&
                    (this.chart.hideOverlappingLabels(t.labels),
                    t.labels.forEach(function(e, i) {
                      e.newOpacity ? e.newOpacity !== e.oldOpacity && t.connectors[i].show() : t.connectors[i].hide();
                    }));
                },
                getRanges: function() {
                  var t,
                    e,
                    i = this.legend.bubbleLegend,
                    n = i.options.ranges,
                    o = Number.MAX_VALUE,
                    s = -Number.MAX_VALUE;
                  return (
                    i.chart.series.forEach(function(t) {
                      t.isBubble &&
                        !t.ignoreSeries &&
                        (e = t.zData.filter(a)).length &&
                        ((o = p(
                          t.options.zMin,
                          Math.min(
                            o,
                            Math.max(f(e), !1 === t.options.displayNegative ? t.options.zThreshold : -Number.MAX_VALUE)
                          )
                        )),
                        (s = p(t.options.zMax, Math.max(s, g(e)))));
                    }),
                    (t =
                      o === s ? [{ value: s }] : [{ value: o }, { value: (o + s) / 2 }, { value: s, autoRanges: !0 }]),
                    n.length && n[0].radius && t.reverse(),
                    t.forEach(function(e, i) {
                      n && n[i] && (t[i] = c(!1, n[i], e));
                    }),
                    t
                  );
                },
                predictBubbleSizes: function() {
                  var t = this.fontMetrics,
                    e = (a = this.chart).legend.options,
                    i = 'horizontal' === e.layout,
                    n = i ? a.legend.lastLineHeight : 0,
                    o = a.plotSizeX,
                    s = a.plotSizeY,
                    r = a.series[this.options.seriesIndex],
                    a = Math.ceil(r.minPxSize),
                    l = Math.ceil(r.maxPxSize),
                    h = ((r = r.options.maxSize), Math.min(s, o));
                  return (
                    e.floating || !/%$/.test(r)
                      ? (t = l)
                      : ((r = parseFloat(r)),
                        (t = ((h + n - t.h / 2) * r) / 100 / (r / 100 + 1)),
                        ((i && s - t >= o) || (!i && o - t >= s)) && (t = l)),
                    [a, Math.ceil(t)]
                  );
                },
                updateRanges: function(t, e) {
                  var i = this.legend.options.bubbleLegend;
                  (i.minSize = t), (i.maxSize = e), (i.ranges = this.getRanges());
                },
                correctSizes: function() {
                  var t = this.legend,
                    e = this.chart.series[this.options.seriesIndex];
                  1 < Math.abs(Math.ceil(e.maxPxSize) - this.options.maxSize) &&
                    (this.updateRanges(this.options.minSize, e.maxPxSize), t.render());
                }
              }),
              o(t.Legend, 'afterGetAllItems', function(e) {
                var i = this.bubbleLegend,
                  n = this.options,
                  o = n.bubbleLegend,
                  s = this.chart.getVisibleBubbleSeriesIndex();
                i &&
                  i.ranges &&
                  i.ranges.length &&
                  (o.ranges.length && (o.autoRanges = !!o.ranges[0].autoRanges), this.destroyItem(i)),
                  0 <= s &&
                    n.enabled &&
                    o.enabled &&
                    ((o.seriesIndex = s),
                    (this.bubbleLegend = new t.BubbleLegend(o, this)),
                    this.bubbleLegend.addToLegend(e.allItems));
              }),
              (n.prototype.getVisibleBubbleSeriesIndex = function() {
                for (var t = this.series, e = 0; e < t.length; ) {
                  if (t[e] && t[e].isBubble && t[e].visible && t[e].zData.length) return e;
                  e++;
                }
                return -1;
              }),
              (i.prototype.getLinesHeights = function() {
                var t,
                  e,
                  i = this.allItems,
                  n = [],
                  o = i.length,
                  s = 0;
                for (e = 0; e < o; e++)
                  if (
                    (i[e].legendItemHeight && (i[e].itemHeight = i[e].legendItemHeight),
                    i[e] === i[o - 1] || (i[e + 1] && i[e]._legendItemPos[1] !== i[e + 1]._legendItemPos[1]))
                  ) {
                    for (n.push({ height: 0 }), t = n[n.length - 1]; s <= e; s++)
                      i[s].itemHeight > t.height && (t.height = i[s].itemHeight);
                    t.step = e;
                  }
                return n;
              }),
              (i.prototype.retranslateItems = function(t) {
                var e,
                  i,
                  n,
                  o = this.options.rtl,
                  s = 0;
                this.allItems.forEach(function(r, a) {
                  (e = r.legendGroup.translateX),
                    (i = r._legendItemPos[1]),
                    ((n = r.movementX) || (o && r.ranges)) &&
                      r.legendGroup.attr({ translateX: (n = o ? e - r.options.maxSize / 2 : e + n) }),
                    a > t[s].step && s++,
                    r.legendGroup.attr({ translateY: Math.round(i + t[s].height / 2) }),
                    (r._legendItemPos[1] = i + t[s].height / 2);
                });
              }),
              o(e, 'legendItemClick', function() {
                var t = this.chart,
                  e = this.visible,
                  i = this.chart.legend;
                i &&
                  i.bubbleLegend &&
                  ((this.visible = !e),
                  (this.ignoreSeries = e),
                  (t = 0 <= t.getVisibleBubbleSeriesIndex()),
                  i.bubbleLegend.visible !== t &&
                    (i.update({ bubbleLegend: { enabled: t } }), (i.bubbleLegend.visible = t)),
                  (this.visible = e));
              }),
              s(n.prototype, 'drawChartBox', function(t, e, i) {
                var n,
                  o = this.legend,
                  s = 0 <= this.getVisibleBubbleSeriesIndex();
                o && o.options.enabled && o.bubbleLegend && o.options.bubbleLegend.autoRanges && s
                  ? ((n = o.bubbleLegend.options),
                    (s = o.bubbleLegend.predictBubbleSizes()),
                    o.bubbleLegend.updateRanges(s[0], s[1]),
                    n.placed ||
                      ((o.group.placed = !1),
                      o.allItems.forEach(function(t) {
                        t.legendGroup.translateY = null;
                      })),
                    o.render(),
                    this.getMargins(),
                    this.axes.forEach(function(t) {
                      t.render(),
                        n.placed ||
                          (t.setScale(),
                          t.updateNames(),
                          h(t.ticks, function(t) {
                            (t.isNew = !0), (t.isNewLabel = !0);
                          }));
                    }),
                    (n.placed = !0),
                    this.getMargins(),
                    t.call(this, e, i),
                    o.bubbleLegend.correctSizes(),
                    o.retranslateItems(o.getLinesHeights()))
                  : (t.call(this, e, i),
                    o && o.options.enabled && o.bubbleLegend && (o.render(), o.retranslateItems(o.getLinesHeights())));
              });
          }),
          e(t, 'parts-more/BubbleSeries.js', [t['parts/Globals.js']], function(t) {
            var e = t.arrayMax,
              i = t.arrayMin,
              n = t.Axis,
              o = t.color,
              s = t.isNumber,
              r = t.noop,
              a = t.pick,
              l = t.pInt,
              h = t.Point,
              c = t.Series,
              d = t.seriesTypes;
            (0, t.seriesType)(
              'bubble',
              'scatter',
              {
                dataLabels: {
                  formatter: function() {
                    return this.point.z;
                  },
                  inside: !0,
                  verticalAlign: 'middle'
                },
                animationLimit: 250,
                marker: {
                  lineColor: null,
                  lineWidth: 1,
                  fillOpacity: 0.5,
                  radius: null,
                  states: { hover: { radiusPlus: 0 } },
                  symbol: 'circle'
                },
                minSize: 8,
                maxSize: '20%',
                softThreshold: !1,
                states: { hover: { halo: { size: 5 } } },
                tooltip: { pointFormat: '({point.x}, {point.y}), Size: {point.z}' },
                turboThreshold: 0,
                zThreshold: 0,
                zoneAxis: 'z'
              },
              {
                pointArrayMap: ['y', 'z'],
                parallelArrays: ['x', 'y', 'z'],
                trackerGroups: ['group', 'dataLabelsGroup'],
                specialGroup: 'group',
                bubblePadding: !0,
                zoneAxis: 'z',
                directTouch: !0,
                isBubble: !0,
                pointAttribs: function(t, e) {
                  var i = this.options.marker.fillOpacity;
                  return (
                    (t = c.prototype.pointAttribs.call(this, t, e)),
                    1 !== i &&
                      (t.fill = o(t.fill)
                        .setOpacity(i)
                        .get('rgba')),
                    t
                  );
                },
                getRadii: function(t, e, i) {
                  var n,
                    o = this.zData,
                    s = i.minPxSize,
                    r = i.maxPxSize,
                    a = [];
                  for (n = 0, i = o.length; n < i; n++) a.push(this.getRadius(t, e, s, r, o[n]));
                  this.radii = a;
                },
                getRadius: function(t, e, i, n, o) {
                  var r = this.options,
                    a = 'width' !== r.sizeBy,
                    l = r.zThreshold,
                    h = e - t;
                  return (
                    r.sizeByAbsoluteValue &&
                      null !== o &&
                      ((o = Math.abs(o - l)), (h = Math.max(e - l, Math.abs(t - l))), (t = 0)),
                    s(o)
                      ? o < t
                        ? (i = i / 2 - 1)
                        : ((t = 0 < h ? (o - t) / h : 0.5),
                          a && 0 <= t && (t = Math.sqrt(t)),
                          (i = Math.ceil(i + t * (n - i)) / 2))
                      : (i = null),
                    i
                  );
                },
                animate: function(t) {
                  !t &&
                    this.points.length < this.options.animationLimit &&
                    (this.points.forEach(function(t) {
                      var e,
                        i = t.graphic;
                      i &&
                        i.width &&
                        ((e = { x: i.x, y: i.y, width: i.width, height: i.height }),
                        i.attr({ x: t.plotX, y: t.plotY, width: 1, height: 1 }),
                        i.animate(e, this.options.animation));
                    }, this),
                    (this.animate = null));
                },
                hasData: function() {
                  return !!this.processedXData.length;
                },
                translate: function() {
                  var e,
                    i,
                    n,
                    o = this.data,
                    r = this.radii;
                  for (d.scatter.prototype.translate.call(this), e = o.length; e--; )
                    (i = o[e]),
                      s((n = r ? r[e] : 0)) && n >= this.minPxSize / 2
                        ? ((i.marker = t.extend(i.marker, { radius: n, width: 2 * n, height: 2 * n })),
                          (i.dlBox = { x: i.plotX - n, y: i.plotY - n, width: 2 * n, height: 2 * n }))
                        : (i.shapeArgs = i.plotY = i.dlBox = void 0);
                },
                alignDataLabel: d.column.prototype.alignDataLabel,
                buildKDTree: r,
                applyZones: r
              },
              {
                haloPath: function(t) {
                  return h.prototype.haloPath.call(this, 0 === t ? 0 : ((this.marker && this.marker.radius) || 0) + t);
                },
                ttBelow: !1
              }
            ),
              (n.prototype.beforePadding = function() {
                var n = this,
                  o = this.len,
                  r = this.chart,
                  h = 0,
                  c = o,
                  d = this.isXAxis,
                  p = d ? 'xData' : 'yData',
                  u = this.min,
                  f = {},
                  g = Math.min(r.plotWidth, r.plotHeight),
                  m = Number.MAX_VALUE,
                  x = -Number.MAX_VALUE,
                  y = this.max - u,
                  v = o / y,
                  b = [];
                this.series.forEach(function(o) {
                  var s = o.options;
                  !o.bubblePadding ||
                    (!o.visible && r.options.chart.ignoreHiddenSeries) ||
                    ((n.allowZoomOutside = !0),
                    b.push(o),
                    d &&
                      (['minSize', 'maxSize'].forEach(function(t) {
                        var e = /%$/.test((i = s[t])),
                          i = l(i);
                        f[t] = e ? (g * i) / 100 : i;
                      }),
                      (o.minPxSize = f.minSize),
                      (o.maxPxSize = Math.max(f.maxSize, f.minSize)),
                      (o = o.zData.filter(t.isNumber)).length &&
                        ((m = a(
                          s.zMin,
                          Math.min(m, Math.max(i(o), !1 === s.displayNegative ? s.zThreshold : -Number.MAX_VALUE))
                        )),
                        (x = a(s.zMax, Math.max(x, e(o)))))));
                }),
                  b.forEach(function(t) {
                    var e,
                      i = t[p],
                      o = i.length;
                    if ((d && t.getRadii(m, x, t), 0 < y))
                      for (; o--; )
                        s(i[o]) &&
                          n.dataMin <= i[o] &&
                          i[o] <= n.dataMax &&
                          ((e = t.radii[o]),
                          (h = Math.min((i[o] - u) * v - e, h)),
                          (c = Math.max((i[o] - u) * v + e, c)));
                  }),
                  b.length &&
                    0 < y &&
                    !this.isLog &&
                    ((c -= o),
                    (v *= (o + Math.max(0, h) - Math.min(c, o)) / o),
                    [['min', 'userMin', h], ['max', 'userMax', c]].forEach(function(t) {
                      void 0 === a(n.options[t[0]], n[t[1]]) && (n[t[0]] += t[2] / v);
                    }));
              });
          }),
          e(t, 'modules/networkgraph/integrations.js', [t['parts/Globals.js']], function(t) {
            t.networkgraphIntegrations = {
              verlet: {
                attractiveForceFunction: function(t, e) {
                  return (e - t) / t;
                },
                repulsiveForceFunction: function(t, e) {
                  return ((e - t) / t) * (e > t ? 1 : 0);
                },
                barycenter: function() {
                  var t = this.options.gravitationalConstant,
                    e = ((e = this.barycenter.xFactor) - (this.box.left + this.box.width) / 2) * t,
                    i = ((i = this.barycenter.yFactor) - (this.box.top + this.box.height) / 2) * t;
                  this.nodes.forEach(function(t) {
                    t.fixedPosition || ((t.plotX -= e / t.mass / t.degree), (t.plotY -= i / t.mass / t.degree));
                  });
                },
                repulsive: function(t, e, i) {
                  (e = (e * this.diffTemperature) / t.mass / t.degree),
                    t.fixedPosition || ((t.plotX += i.x * e), (t.plotY += i.y * e));
                },
                attractive: function(t, e, i) {
                  var n = t.getMass(),
                    o = -i.x * e * this.diffTemperature;
                  (e = -i.y * e * this.diffTemperature),
                    t.fromNode.fixedPosition ||
                      ((t.fromNode.plotX -= (o * n.fromNode) / t.fromNode.degree),
                      (t.fromNode.plotY -= (e * n.fromNode) / t.fromNode.degree)),
                    t.toNode.fixedPosition ||
                      ((t.toNode.plotX += (o * n.toNode) / t.toNode.degree),
                      (t.toNode.plotY += (e * n.toNode) / t.toNode.degree));
                },
                integrate: function(t, e) {
                  var i = t.options.maxSpeed,
                    n = (e.plotX + e.dispX - e.prevX) * (o = -t.options.friction),
                    o = (e.plotY + e.dispY - e.prevY) * o,
                    s = (r = Math.abs)(n) / (n || 1),
                    r = r(o) / (o || 1);
                  (n = s * Math.min(i, Math.abs(n))),
                    (o = r * Math.min(i, Math.abs(o))),
                    (e.prevX = e.plotX + e.dispX),
                    (e.prevY = e.plotY + e.dispY),
                    (e.plotX += n),
                    (e.plotY += o),
                    (e.temperature = t.vectorLength({ x: n, y: o }));
                },
                getK: function(t) {
                  return Math.pow((t.box.width * t.box.height) / t.nodes.length, 0.5);
                }
              },
              euler: {
                attractiveForceFunction: function(t, e) {
                  return (t * t) / e;
                },
                repulsiveForceFunction: function(t, e) {
                  return (e * e) / t;
                },
                barycenter: function() {
                  var t = this.options.gravitationalConstant,
                    e = this.barycenter.xFactor,
                    i = this.barycenter.yFactor;
                  this.nodes.forEach(function(n) {
                    if (!n.fixedPosition) {
                      var o = n.getDegree();
                      (n.dispX += ((e - n.plotX) * t * (o *= 1 + o / 2)) / n.degree),
                        (n.dispY += ((i - n.plotY) * t * o) / n.degree);
                    }
                  });
                },
                repulsive: function(t, e, i, n) {
                  (t.dispX += ((i.x / n) * e) / t.degree), (t.dispY += ((i.y / n) * e) / t.degree);
                },
                attractive: function(t, e, i, n) {
                  var o = t.getMass(),
                    s = (i.x / n) * e;
                  (e *= i.y / n),
                    t.fromNode.fixedPosition ||
                      ((t.fromNode.dispX -= (s * o.fromNode) / t.fromNode.degree),
                      (t.fromNode.dispY -= (e * o.fromNode) / t.fromNode.degree)),
                    t.toNode.fixedPosition ||
                      ((t.toNode.dispX += (s * o.toNode) / t.toNode.degree),
                      (t.toNode.dispY += (e * o.toNode) / t.toNode.degree));
                },
                integrate: function(t, e) {
                  var i;
                  (e.dispX += e.dispX * t.options.friction),
                    (e.dispY += e.dispY * t.options.friction),
                    0 !== (i = e.temperature = t.vectorLength({ x: e.dispX, y: e.dispY })) &&
                      ((e.plotX += (e.dispX / i) * Math.min(Math.abs(e.dispX), t.temperature)),
                      (e.plotY += (e.dispY / i) * Math.min(Math.abs(e.dispY), t.temperature)));
                },
                getK: function(t) {
                  return Math.pow((t.box.width * t.box.height) / t.nodes.length, 0.3);
                }
              }
            };
          }),
          e(t, 'modules/networkgraph/QuadTree.js', [t['parts/Globals.js']], function(t) {
            var e = (t.QuadTreeNode = function(t) {
              (this.box = t),
                (this.boxSize = Math.min(t.width, t.height)),
                (this.nodes = []),
                (this.body = this.isInternal = !1),
                (this.isEmpty = !0);
            });
            t.extend(e.prototype, {
              insert: function(t, e) {
                this.isInternal
                  ? this.nodes[this.getBoxPosition(t)].insert(t, e - 1)
                  : ((this.isEmpty = !1),
                    this.body
                      ? e
                        ? ((this.isInternal = !0),
                          this.divideBox(),
                          !0 !== this.body &&
                            (this.nodes[this.getBoxPosition(this.body)].insert(this.body, e - 1), (this.body = !0)),
                          this.nodes[this.getBoxPosition(t)].insert(t, e - 1))
                        : this.nodes.push(t)
                      : ((this.isInternal = !1), (this.body = t)));
              },
              updateMassAndCenter: function() {
                var t = 0,
                  e = 0,
                  i = 0;
                this.isInternal
                  ? (this.nodes.forEach(function(n) {
                      n.isEmpty || ((t += n.mass), (e += n.plotX * n.mass), (i += n.plotY * n.mass));
                    }),
                    (e /= t),
                    (i /= t))
                  : this.body && ((t = this.body.mass), (e = this.body.plotX), (i = this.body.plotY)),
                  (this.mass = t),
                  (this.plotX = e),
                  (this.plotY = i);
              },
              divideBox: function() {
                var t = this.box.width / 2,
                  i = this.box.height / 2;
                (this.nodes[0] = new e({ left: this.box.left, top: this.box.top, width: t, height: i })),
                  (this.nodes[1] = new e({ left: this.box.left + t, top: this.box.top, width: t, height: i })),
                  (this.nodes[2] = new e({ left: this.box.left + t, top: this.box.top + i, width: t, height: i })),
                  (this.nodes[3] = new e({ left: this.box.left, top: this.box.top + i, width: t, height: i }));
              },
              getBoxPosition: function(t) {
                var e = t.plotY < this.box.top + this.box.height / 2;
                return t.plotX < this.box.left + this.box.width / 2 ? (e ? 0 : 3) : e ? 1 : 2;
              }
            });
            var i = (t.QuadTree = function(t, i, n, o) {
              (this.box = { left: t, top: i, width: n, height: o }),
                (this.maxDepth = 25),
                (this.root = new e(this.box, '0')),
                (this.root.isInternal = !0),
                (this.root.isRoot = !0),
                this.root.divideBox();
            });
            t.extend(i.prototype, {
              insertNodes: function(t) {
                t.forEach(function(t) {
                  this.root.insert(t, this.maxDepth);
                }, this);
              },
              visitNodeRecursive: function(t, e, i, n, o) {
                var s;
                t || (t = this.root),
                  t === this.root && e && (s = e(t)),
                  !1 !== s &&
                    (t.nodes.forEach(function(t) {
                      if (t.isInternal) {
                        if ((e && (s = e(t)), !1 === s)) return;
                        this.visitNodeRecursive(t, e, i, n, o);
                      } else t.body && e && e(t.body);
                      i && i(t);
                    }, this),
                    t === this.root && i && i(t));
              },
              calculateMassAndCenter: function() {
                this.visitNodeRecursive(null, null, function(t) {
                  t.updateMassAndCenter();
                });
              },
              render: function(t, e) {
                this.visitNodeRecursive(this.root, null, null, t, e);
              },
              clear: function(t) {
                this.render(t, !0);
              },
              renderBox: function(t, e, i) {
                t.graphic || i
                  ? i &&
                    (t.graphic && (t.graphic = t.graphic.destroy()),
                    t.graphic2 && (t.graphic2 = t.graphic2.destroy()),
                    t.label && (t.label = t.label.destroy()))
                  : ((t.graphic = e.renderer
                      .rect(t.box.left + e.plotLeft, t.box.top + e.plotTop, t.box.width, t.box.height)
                      .attr({ stroke: 'rgba(100, 100, 100, 0.5)', 'stroke-width': 2 })
                      .add()),
                    isNaN(t.plotX) ||
                      (t.graphic2 = e.renderer
                        .circle(t.plotX, t.plotY, t.mass / 10)
                        .attr({ fill: 'red', translateY: e.plotTop, translateX: e.plotLeft })
                        .add()));
              }
            });
          }),
          e(t, 'modules/networkgraph/layouts.js', [t['parts/Globals.js']], function(t) {
            var e = t.pick,
              i = t.defined,
              n = t.addEvent,
              o = t.Chart;
            (t.layouts = { 'reingold-fruchterman': function() {} }),
              t.extend(t.layouts['reingold-fruchterman'].prototype, {
                init: function(i) {
                  (this.options = i),
                    (this.nodes = []),
                    (this.links = []),
                    (this.series = []),
                    (this.box = { x: 0, y: 0, width: 0, height: 0 }),
                    this.setInitialRendering(!0),
                    (this.integration = t.networkgraphIntegrations[i.integration]),
                    (this.attractiveForce = e(i.attractiveForce, this.integration.attractiveForceFunction)),
                    (this.repulsiveForce = e(i.repulsiveForce, this.integration.repulsiveForceFunction)),
                    (this.approximation = i.approximation);
                },
                start: function() {
                  var t = this.series,
                    e = this.options;
                  (this.currentStep = 0),
                    (this.forces = (t[0] && t[0].forces) || []),
                    this.initialRendering &&
                      (this.initPositions(),
                      t.forEach(function(t) {
                        t.render();
                      })),
                    this.setK(),
                    this.resetSimulation(e),
                    e.enableSimulation && this.step();
                },
                step: function() {
                  var e = this,
                    i = this.series,
                    n = this.options;
                  e.currentStep++,
                    'barnes-hut' === e.approximation && (e.createQuadTree(), e.quadTree.calculateMassAndCenter()),
                    e.forces.forEach(function(t) {
                      e[t + 'Forces'](e.temperature);
                    }),
                    e.applyLimits(e.temperature),
                    (e.temperature = e.coolDown(e.startTemperature, e.diffTemperature, e.currentStep)),
                    (e.prevSystemTemperature = e.systemTemperature),
                    (e.systemTemperature = e.getSystemTemperature()),
                    n.enableSimulation &&
                      (i.forEach(function(t) {
                        t.chart && t.render();
                      }),
                      e.maxIterations-- && isFinite(e.temperature) && !e.isStable()
                        ? (e.simulation && t.win.cancelAnimationFrame(e.simulation),
                          (e.simulation = t.win.requestAnimationFrame(function() {
                            e.step();
                          })))
                        : (e.simulation = !1));
                },
                stop: function() {
                  this.simulation && t.win.cancelAnimationFrame(this.simulation);
                },
                setArea: function(t, e, i, n) {
                  this.box = { left: t, top: e, width: i, height: n };
                },
                setK: function() {
                  this.k = this.options.linkLength || this.integration.getK(this);
                },
                addNodes: function(t) {
                  t.forEach(function(t) {
                    -1 === this.nodes.indexOf(t) && this.nodes.push(t);
                  }, this);
                },
                removeNode: function(t) {
                  -1 !== (t = this.nodes.indexOf(t)) && this.nodes.splice(t, 1);
                },
                removeLink: function(t) {
                  -1 !== (t = this.links.indexOf(t)) && this.links.splice(t, 1);
                },
                addLinks: function(t) {
                  t.forEach(function(t) {
                    -1 === this.links.indexOf(t) && this.links.push(t);
                  }, this);
                },
                addSeries: function(t) {
                  -1 === this.series.indexOf(t) && this.series.push(t);
                },
                clear: function() {
                  (this.nodes.length = 0), (this.links.length = 0), (this.series.length = 0), this.resetSimulation();
                },
                resetSimulation: function() {
                  (this.forcedStop = !1),
                    (this.systemTemperature = 0),
                    this.setMaxIterations(),
                    this.setTemperature(),
                    this.setDiffTemperature();
                },
                setMaxIterations: function(t) {
                  this.maxIterations = e(t, this.options.maxIterations);
                },
                setTemperature: function() {
                  this.temperature = this.startTemperature = Math.sqrt(this.nodes.length);
                },
                setDiffTemperature: function() {
                  this.diffTemperature = this.startTemperature / (this.options.maxIterations + 1);
                },
                setInitialRendering: function(t) {
                  this.initialRendering = t;
                },
                createQuadTree: function() {
                  (this.quadTree = new t.QuadTree(this.box.left, this.box.top, this.box.width, this.box.height)),
                    this.quadTree.insertNodes(this.nodes);
                },
                initPositions: function() {
                  var e = this.options.initialPositions;
                  t.isFunction(e)
                    ? (e.call(this),
                      this.nodes.forEach(function(t) {
                        i(t.prevX) || (t.prevX = t.plotX),
                          i(t.prevY) || (t.prevY = t.plotY),
                          (t.dispX = 0),
                          (t.dispY = 0);
                      }))
                    : 'circle' === e
                    ? this.setCircularPositions()
                    : this.setRandomPositions();
                },
                setCircularPositions: function() {
                  var t = this.box,
                    i = this.nodes,
                    n = (2 * Math.PI) / (i.length + 1),
                    o = i.filter(function(t) {
                      return 0 === t.linksTo.length;
                    }),
                    s = [],
                    r = {},
                    a = this.options.initialPositionRadius;
                  o.forEach(function(t) {
                    s.push(t),
                      (function t(e) {
                        e.linksFrom.forEach(function(e) {
                          r[e.toNode.id] || ((r[e.toNode.id] = !0), s.push(e.toNode), t(e.toNode));
                        });
                      })(t);
                  }),
                    s.length
                      ? i.forEach(function(t) {
                          -1 === s.indexOf(t) && s.push(t);
                        })
                      : (s = i),
                    s.forEach(function(i, o) {
                      (i.plotX = i.prevX = e(i.plotX, t.width / 2 + a * Math.cos(o * n))),
                        (i.plotY = i.prevY = e(i.plotY, t.height / 2 + a * Math.sin(o * n))),
                        (i.dispX = 0),
                        (i.dispY = 0);
                    });
                },
                setRandomPositions: function() {
                  function t(t) {
                    return (t = (t * t) / Math.PI) - Math.floor(t);
                  }
                  var i = this.box,
                    n = this.nodes,
                    o = n.length + 1;
                  n.forEach(function(n, s) {
                    (n.plotX = n.prevX = e(n.plotX, i.width * t(s))),
                      (n.plotY = n.prevY = e(n.plotY, i.height * t(o + s))),
                      (n.dispX = 0),
                      (n.dispY = 0);
                  });
                },
                force: function(t) {
                  this.integration[t].apply(this, Array.prototype.slice.call(arguments, 1));
                },
                barycenterForces: function() {
                  this.getBarycenter(), this.force('barycenter');
                },
                getBarycenter: function() {
                  var t = 0,
                    e = 0,
                    i = 0;
                  return (
                    this.nodes.forEach(function(n) {
                      (e += n.plotX * n.mass), (i += n.plotY * n.mass), (t += n.mass);
                    }),
                    (this.barycenter = { x: e, y: i, xFactor: e / t, yFactor: i / t })
                  );
                },
                barnesHutApproximation: function(t, e) {
                  var i,
                    n,
                    o = this.getDistXY(t, e),
                    s = this.vectorLength(o);
                  return (
                    t !== e &&
                      0 !== s &&
                      (e.isInternal
                        ? e.boxSize / s < this.options.theta && 0 !== s
                          ? ((n = this.repulsiveForce(s, this.k)),
                            this.force('repulsive', t, n * e.mass, o, s),
                            (i = !1))
                          : (i = !0)
                        : ((n = this.repulsiveForce(s, this.k)), this.force('repulsive', t, n * e.mass, o, s))),
                    i
                  );
                },
                repulsiveForces: function() {
                  var t = this;
                  t.nodes.forEach(
                    'barnes-hut' === t.approximation
                      ? function(e) {
                          t.quadTree.visitNodeRecursive(null, function(i) {
                            return t.barnesHutApproximation(e, i);
                          });
                        }
                      : function(e) {
                          t.nodes.forEach(function(i) {
                            var n, o, s;
                            e === i ||
                              e.fixedPosition ||
                              ((s = t.getDistXY(e, i)),
                              (o = t.vectorLength(s)),
                              (n = t.repulsiveForce(o, t.k)),
                              t.force('repulsive', e, n * i.mass, s, o));
                          });
                        }
                  );
                },
                attractiveForces: function() {
                  var t,
                    e,
                    i,
                    n = this;
                  n.links.forEach(function(o) {
                    o.fromNode &&
                      o.toNode &&
                      ((t = n.getDistXY(o.fromNode, o.toNode)),
                      0 !== (e = n.vectorLength(t)) &&
                        ((i = n.attractiveForce(e, n.k)), n.force('attractive', o, i, t, e)));
                  });
                },
                applyLimits: function() {
                  var t = this;
                  t.nodes.forEach(function(e) {
                    e.fixedPosition ||
                      (t.integration.integrate(t, e), t.applyLimitBox(e, t.box), (e.dispX = 0), (e.dispY = 0));
                  });
                },
                applyLimitBox: function(t, e) {
                  var i = (t.marker && t.marker.radius) || 0;
                  (t.plotX = Math.max(Math.min(t.plotX, e.width - i), e.left + i)),
                    (t.plotY = Math.max(Math.min(t.plotY, e.height - i), e.top + i));
                },
                coolDown: function(t, e, i) {
                  return t - e * i;
                },
                isStable: function() {
                  return 1e-5 > Math.abs(this.systemTemperature - this.prevSystemTemperature) || 0 >= this.temperature;
                },
                getSystemTemperature: function() {
                  return this.nodes.reduce(function(t, e) {
                    return t + e.temperature;
                  }, 0);
                },
                vectorLength: function(t) {
                  return Math.sqrt(t.x * t.x + t.y * t.y);
                },
                getDistR: function(t, e) {
                  return (t = this.getDistXY(t, e)), this.vectorLength(t);
                },
                getDistXY: function(t, e) {
                  var i = t.plotX - e.plotX;
                  return { x: i, y: (t = t.plotY - e.plotY), absX: Math.abs(i), absY: Math.abs(t) };
                }
              }),
              n(o, 'predraw', function() {
                this.graphLayoutsLookup &&
                  this.graphLayoutsLookup.forEach(function(t) {
                    t.stop();
                  });
              }),
              n(o, 'render', function() {
                function e(t) {
                  t.maxIterations-- &&
                    isFinite(t.temperature) &&
                    !t.isStable() &&
                    !t.options.enableSimulation &&
                    (t.beforeStep && t.beforeStep(), t.step(), (i = !1), (n = !0));
                }
                var i,
                  n = !1;
                if (this.graphLayoutsLookup) {
                  for (
                    t.setAnimation(!1, this),
                      this.graphLayoutsLookup.forEach(function(t) {
                        t.start();
                      });
                    !i;

                  )
                    (i = !0), this.graphLayoutsLookup.forEach(e);
                  n &&
                    this.series.forEach(function(t) {
                      t && t.layout && t.render();
                    });
                }
              });
          }),
          e(t, 'modules/networkgraph/draggable-nodes.js', [t['parts/Globals.js']], function(t) {
            var e = t.Chart,
              i = t.addEvent;
            (t.dragNodesMixin = {
              onMouseDown: function(t, e) {
                (e = this.chart.pointer.normalize(e)),
                  (t.fixedPosition = { chartX: e.chartX, chartY: e.chartY, plotX: t.plotX, plotY: t.plotY }),
                  (t.inDragMode = !0);
              },
              onMouseMove: function(t, e) {
                if (t.fixedPosition && t.inDragMode) {
                  var i = this.chart,
                    n = i.pointer.normalize(e);
                  (e = t.fixedPosition.chartX - n.chartX),
                    (n = t.fixedPosition.chartY - n.chartY),
                    (5 < Math.abs(e) || 5 < Math.abs(n)) &&
                      i.isInsidePlot((e = t.fixedPosition.plotX - e), (n = t.fixedPosition.plotY - n)) &&
                      ((t.plotX = e),
                      (t.plotY = n),
                      this.redrawHalo(t),
                      this.layout.simulation
                        ? this.layout.resetSimulation()
                        : (this.layout.setInitialRendering(!1),
                          this.layout.enableSimulation ? this.layout.start() : this.layout.setMaxIterations(1),
                          this.chart.redraw(),
                          this.layout.setInitialRendering(!0)));
                }
              },
              onMouseUp: function(t) {
                t.fixedPosition &&
                  (this.layout.enableSimulation ? this.layout.start() : this.chart.redraw(),
                  (t.inDragMode = !1),
                  this.options.fixedDraggable || delete t.fixedPosition);
              },
              redrawHalo: function(t) {
                t && this.halo && this.halo.attr({ d: t.haloPath(this.options.states.hover.halo.size) });
              }
            }),
              i(e, 'load', function() {
                var t,
                  e,
                  n,
                  o = this;
                o.container &&
                  (t = i(o.container, 'mousedown', function(t) {
                    var s = o.hoverPoint;
                    s &&
                      s.series &&
                      s.series.hasDraggableNodes &&
                      s.series.options.draggable &&
                      (s.series.onMouseDown(s, t),
                      (e = i(o.container, 'mousemove', function(t) {
                        return s && s.series && s.series.onMouseMove(s, t);
                      })),
                      (n = i(o.container.ownerDocument, 'mouseup', function(t) {
                        return e(), n(), s && s.series && s.series.onMouseUp(s, t);
                      })));
                  })),
                  i(o, 'destroy', function() {
                    t();
                  });
              });
          }),
          e(t, 'parts-more/PackedBubbleSeries.js', [t['parts/Globals.js']], function(t) {
            var e = t.seriesType,
              i = t.Series,
              n = t.Point,
              o = t.defined,
              s = t.pick,
              r = t.addEvent,
              a = t.Chart,
              l = t.Color,
              h = t.layouts['reingold-fruchterman'],
              c = t.seriesTypes.bubble.prototype.pointClass,
              d = t.dragNodesMixin;
            (t.networkgraphIntegrations.packedbubble = {
              repulsiveForceFunction: function(t, e, i, n) {
                return Math.min(t, (i.marker.radius + n.marker.radius) / 2);
              },
              barycenter: function() {
                var t,
                  e,
                  i = this,
                  n = i.options.gravitationalConstant,
                  o = i.box,
                  s = i.nodes;
                s.forEach(function(r) {
                  i.options.splitSeries && !r.isParentNode
                    ? ((t = r.series.parentNode.plotX), (e = r.series.parentNode.plotY))
                    : ((t = o.width / 2), (e = o.height / 2)),
                    r.fixedPosition ||
                      ((r.plotX -= ((r.plotX - t) * n) / (r.mass * Math.sqrt(s.length))),
                      (r.plotY -= ((r.plotY - e) * n) / (r.mass * Math.sqrt(s.length))));
                });
              },
              repulsive: function(t, e, i, n) {
                var o = (e * this.diffTemperature) / t.mass / t.degree;
                (e = i.x * o),
                  (i = i.y * o),
                  t.fixedPosition || ((t.plotX += e), (t.plotY += i)),
                  n.fixedPosition || ((n.plotX -= e), (n.plotY -= i));
              },
              integrate: t.networkgraphIntegrations.verlet.integrate,
              getK: t.noop
            }),
              (t.layouts.packedbubble = t.extendClass(h, {
                beforeStep: function() {
                  this.options.marker &&
                    this.series.forEach(function(t) {
                      t && (t.translate(), t.drawPoints());
                    });
                },
                setCircularPositions: function() {
                  var t,
                    e,
                    i = this,
                    n = i.box,
                    o = i.nodes,
                    r = (2 * Math.PI) / (o.length + 1),
                    a = i.options.initialPositionRadius;
                  o.forEach(function(o, l) {
                    i.options.splitSeries && !o.isParentNode
                      ? ((t = o.series.parentNode.plotX), (e = o.series.parentNode.plotY))
                      : ((t = n.width / 2), (e = n.height / 2)),
                      (o.plotX = o.prevX = s(o.plotX, t + a * Math.cos(o.index || l * r))),
                      (o.plotY = o.prevY = s(o.plotY, e + a * Math.sin(o.index || l * r))),
                      (o.dispX = 0),
                      (o.dispY = 0);
                  });
                },
                repulsiveForces: function() {
                  var t,
                    e,
                    i,
                    n = this,
                    o = n.options.bubblePadding;
                  n.nodes.forEach(function(s) {
                    (s.degree = s.mass),
                      (s.neighbours = 0),
                      n.nodes.forEach(function(r) {
                        (t = 0),
                          s === r ||
                            s.fixedPosition ||
                            (!n.options.seriesInteraction && s.series !== r.series) ||
                            ((i = n.getDistXY(s, r)),
                            0 > (e = n.vectorLength(i) - (s.marker.radius + r.marker.radius + o)) &&
                              ((s.degree += 0.01),
                              s.neighbours++,
                              (t = n.repulsiveForce(-e / Math.sqrt(s.neighbours), n.k, s, r))),
                            n.force('repulsive', s, t * r.mass, i, r, e));
                      });
                  });
                },
                applyLimitBox: function(t) {
                  var e, i;
                  this.options.splitSeries &&
                    !t.isParentNode &&
                    this.options.parentNodeLimit &&
                    ((e = this.getDistXY(t, t.series.parentNode)),
                    0 > (i = t.series.parentNodeRadius - t.marker.radius - this.vectorLength(e)) &&
                      i > -2 * t.marker.radius &&
                      ((t.plotX -= 0.01 * e.x), (t.plotY -= 0.01 * e.y))),
                    h.prototype.applyLimitBox.apply(this, arguments);
                },
                isStable: function() {
                  return (
                    1e-5 > Math.abs(this.systemTemperature - this.prevSystemTemperature) ||
                    0 >= this.temperature ||
                    (0 < this.systemTemperature && 0.01 > this.systemTemperature / this.nodes.length)
                  );
                }
              })),
              e(
                'packedbubble',
                'bubble',
                {
                  minSize: '10%',
                  maxSize: '50%',
                  sizeBy: 'area',
                  zoneAxis: 'y',
                  tooltip: { pointFormat: 'Value: {point.value}' },
                  draggable: !0,
                  useSimulation: !0,
                  dataLabels: {
                    formatter: function() {
                      return this.point.value;
                    },
                    parentNodeFormatter: function() {
                      return this.name;
                    },
                    parentNodeTextPath: { enabled: !0 },
                    padding: 0
                  },
                  layoutAlgorithm: {
                    initialPositions: 'circle',
                    initialPositionRadius: 20,
                    bubblePadding: 5,
                    parentNodeLimit: !1,
                    seriesInteraction: !0,
                    dragBetweenSeries: !1,
                    parentNodeOptions: {
                      maxIterations: 400,
                      gravitationalConstant: 0.03,
                      maxSpeed: 50,
                      initialPositionRadius: 100,
                      seriesInteraction: !0,
                      marker: { fillColor: null, fillOpacity: 1, lineWidth: 1, lineColor: null, symbol: 'circle' }
                    },
                    enableSimulation: !0,
                    type: 'packedbubble',
                    integration: 'packedbubble',
                    maxIterations: 1e3,
                    splitSeries: !1,
                    maxSpeed: 5,
                    gravitationalConstant: 0.01,
                    friction: -0.981
                  }
                },
                {
                  hasDraggableNodes: !0,
                  forces: ['barycenter', 'repulsive'],
                  pointArrayMap: ['value'],
                  pointValKey: 'value',
                  isCartesian: !1,
                  axisTypes: [],
                  noSharedTooltip: !0,
                  accumulateAllPoints: function(t) {
                    var e,
                      i,
                      n = t.chart,
                      o = [];
                    for (e = 0; e < n.series.length; e++)
                      if ((t = n.series[e]).visible || !n.options.chart.ignoreHiddenSeries)
                        for (i = 0; i < t.yData.length; i++)
                          o.push([null, null, t.yData[i], t.index, i, { id: i, marker: { radius: 0 } }]);
                    return o;
                  },
                  init: function() {
                    return (
                      i.prototype.init.apply(this, arguments),
                      r(this, 'updatedData', function() {
                        this.chart.series.forEach(function(t) {
                          t.type === this.type && (t.isDirty = !0);
                        }, this);
                      }),
                      this
                    );
                  },
                  render: function() {
                    var e = [];
                    i.prototype.render.apply(this, arguments),
                      this.data.forEach(function(i) {
                        t.isArray(i.dataLabels) &&
                          i.dataLabels.forEach(function(t) {
                            e.push(t);
                          });
                      }),
                      this.chart.hideOverlappingLabels(e);
                  },
                  setVisible: function() {
                    var t = this;
                    i.prototype.setVisible.apply(t, arguments),
                      t.parentNodeLayout && t.graph
                        ? t.visible
                          ? (t.graph.show(), t.parentNode.dataLabel && t.parentNode.dataLabel.show())
                          : (t.graph.hide(),
                            t.parentNodeLayout.removeNode(t.parentNode),
                            t.parentNode.dataLabel && t.parentNode.dataLabel.hide())
                        : t.layout &&
                          (t.visible
                            ? t.layout.addNodes(t.points)
                            : t.points.forEach(function(e) {
                                t.layout.removeNode(e);
                              }));
                  },
                  drawDataLabels: function() {
                    var t = this.options.dataLabels.textPath,
                      e = this.points;
                    i.prototype.drawDataLabels.apply(this, arguments),
                      this.parentNode &&
                        ((this.parentNode.formatPrefix = 'parentNode'),
                        (this.points = [this.parentNode]),
                        (this.options.dataLabels.textPath = this.options.dataLabels.parentNodeTextPath),
                        i.prototype.drawDataLabels.apply(this, arguments),
                        (this.points = e),
                        (this.options.dataLabels.textPath = t));
                  },
                  calculateParentRadius: function() {
                    var t;
                    this.group && (t = this.group.element.getBBox()),
                      (this.parentNodeRadius = Math.min(
                        Math.max(Math.sqrt((2 * this.parentNodeMass) / Math.PI) + 20, 20),
                        t
                          ? Math.max(Math.sqrt(Math.pow(t.width, 2) + Math.pow(t.height, 2)) / 2 + 20, 20)
                          : Math.sqrt((2 * this.parentNodeMass) / Math.PI) + 20
                      )),
                      this.parentNode && (this.parentNode.marker.radius = this.parentNodeRadius);
                  },
                  drawGraph: function() {
                    if (this.layout && this.layout.options.splitSeries) {
                      var e,
                        i = this.chart,
                        n = {
                          fill:
                            (n = this.layout.options.parentNodeOptions.marker).fillColor ||
                            l(this.color)
                              .brighten(0.4)
                              .get(),
                          opacity: n.fillOpacity,
                          stroke: n.lineColor || this.color,
                          'stroke-width': n.lineWidth
                        };
                      (e = this.visible ? 'inherit' : 'hidden'),
                        this.parentNodesGroup ||
                          ((this.parentNodesGroup = this.plotGroup(
                            'parentNodesGroup',
                            'parentNode',
                            e,
                            0.1,
                            i.seriesGroup
                          )),
                          this.group.attr({ zIndex: 2 })),
                        this.calculateParentRadius(),
                        (e = t.merge(
                          {
                            x: this.parentNode.plotX - this.parentNodeRadius,
                            y: this.parentNode.plotY - this.parentNodeRadius,
                            width: 2 * this.parentNodeRadius,
                            height: 2 * this.parentNodeRadius
                          },
                          n
                        )),
                        this.graph
                          ? this.graph.attr(e)
                          : (this.graph = this.parentNode.graphic = i.renderer
                              .symbol(n.symbol)
                              .attr(e)
                              .add(this.parentNodesGroup));
                    }
                  },
                  createParentNodes: function() {
                    var t,
                      e = this,
                      i = e.chart,
                      n = e.parentNodeLayout,
                      o = e.parentNode;
                    (e.parentNodeMass = 0),
                      e.points.forEach(function(t) {
                        e.parentNodeMass += Math.PI * Math.pow(t.marker.radius, 2);
                      }),
                      e.calculateParentRadius(),
                      n.nodes.forEach(function(i) {
                        i.seriesIndex === e.index && (t = !0);
                      }),
                      n.setArea(0, 0, i.plotWidth, i.plotHeight),
                      t ||
                        (o ||
                          (o = new c().init(this, {
                            mass: e.parentNodeRadius / 2,
                            marker: { radius: e.parentNodeRadius },
                            dataLabels: { inside: !1 },
                            dataLabelOnNull: !0,
                            degree: e.parentNodeRadius,
                            isParentNode: !0,
                            seriesIndex: e.index
                          })),
                        e.parentNode && ((o.plotX = e.parentNode.plotX), (o.plotY = e.parentNode.plotY)),
                        (e.parentNode = o),
                        n.addSeries(e),
                        n.addNodes([o]));
                  },
                  addSeriesLayout: function() {
                    var e,
                      i = this.options.layoutAlgorithm,
                      n = this.chart.graphLayoutsStorage,
                      o = this.chart.graphLayoutsLookup,
                      s = t.merge(i, i.parentNodeOptions, { enableSimulation: this.layout.options.enableSimulation });
                    (e = n[i.type + '-series']) ||
                      ((n[i.type + '-series'] = e = new t.layouts[i.type]()), e.init(s), o.splice(e.index, 0, e)),
                      (this.parentNodeLayout = e),
                      this.createParentNodes();
                  },
                  addLayout: function() {
                    var e,
                      i = this.options.layoutAlgorithm,
                      n = this.chart.graphLayoutsStorage,
                      s = this.chart.graphLayoutsLookup,
                      r = this.chart.options.chart;
                    n || ((this.chart.graphLayoutsStorage = n = {}), (this.chart.graphLayoutsLookup = s = [])),
                      (e = n[i.type]) ||
                        ((i.enableSimulation = o(r.forExport) ? !r.forExport : i.enableSimulation),
                        (n[i.type] = e = new t.layouts[i.type]()),
                        e.init(i),
                        s.splice(e.index, 0, e)),
                      (this.layout = e),
                      this.points.forEach(function(t) {
                        (t.mass = 2), (t.degree = 1), (t.collisionNmb = 1);
                      }),
                      e.setArea(0, 0, this.chart.plotWidth, this.chart.plotHeight),
                      e.addSeries(this),
                      e.addNodes(this.points);
                  },
                  deferLayout: function() {
                    var t = this.options.layoutAlgorithm;
                    this.visible && (this.addLayout(), t.splitSeries && this.addSeriesLayout());
                  },
                  translate: function() {
                    var e,
                      i,
                      n,
                      s,
                      r = this.chart,
                      a = this.data,
                      l = this.index,
                      h = this.options.useSimulation;
                    for (
                      this.processedXData = this.xData,
                        this.generatePoints(),
                        o(r.allDataPoints) ||
                          ((r.allDataPoints = this.accumulateAllPoints(this)), this.getPointRadius()),
                        h
                          ? (n = r.allDataPoints)
                          : ((n = this.placeBubbles(r.allDataPoints)), (this.options.draggable = !1)),
                        s = 0;
                      s < n.length;
                      s++
                    )
                      n[s][3] === l &&
                        ((e = a[n[s][4]]),
                        (i = n[s][2]),
                        h || ((e.plotX = n[s][0] - r.plotLeft + r.diffX), (e.plotY = n[s][1] - r.plotTop + r.diffY)),
                        (e.marker = t.extend(e.marker, { radius: i, width: 2 * i, height: 2 * i })));
                    h && this.deferLayout();
                  },
                  checkOverlap: function(t, e) {
                    var i = t[0] - e[0],
                      n = t[1] - e[1];
                    return -0.001 > Math.sqrt(i * i + n * n) - Math.abs(t[2] + e[2]);
                  },
                  positionBubble: function(t, e, i) {
                    var n = Math.sqrt,
                      o = Math.asin,
                      s = Math.acos,
                      r = Math.pow,
                      a = Math.abs;
                    return (
                      (n = n(r(t[0] - e[0], 2) + r(t[1] - e[1], 2))),
                      (s = s((r(n, 2) + r(i[2] + e[2], 2) - r(i[2] + t[2], 2)) / (2 * (i[2] + e[2]) * n))),
                      (o = o(a(t[0] - e[0]) / n)),
                      (t = (0 > t[1] - e[1] ? 0 : Math.PI) + s + o * (0 > (t[0] - e[0]) * (t[1] - e[1]) ? 1 : -1)),
                      [e[0] + (e[2] + i[2]) * Math.sin(t), e[1] - (e[2] + i[2]) * Math.cos(t), i[2], i[3], i[4]]
                    );
                  },
                  placeBubbles: function(t) {
                    var e,
                      i,
                      n = this.checkOverlap,
                      o = this.positionBubble,
                      s = [],
                      r = 1,
                      a = 0,
                      l = 0;
                    if (
                      ((e = []),
                      1 ===
                        (t = t.sort(function(t, e) {
                          return e[2] - t[2];
                        })).length)
                    )
                      e = [0, 0, t[0][0], t[0][1], t[0][2]];
                    else if (t.length) {
                      for (
                        s.push([[0, 0, t[0][2], t[0][3], t[0][4]]]),
                          s.push([[0, 0 - t[1][2] - t[0][2], t[1][2], t[1][3], t[1][4]]]),
                          i = 2;
                        i < t.length;
                        i++
                      )
                        (t[i][2] = t[i][2] || 1),
                          n((e = o(s[r][a], s[r - 1][l], t[i])), s[r][0])
                            ? (s.push([]), (l = 0), s[r + 1].push(o(s[r][a], s[r][0], t[i])), r++, (a = 0))
                            : 1 < r && s[r - 1][l + 1] && n(e, s[r - 1][l + 1])
                            ? (s[r].push(o(s[r][a], s[r - 1][++l], t[i])), a++)
                            : (a++, s[r].push(e));
                      (this.chart.stages = s),
                        (this.chart.rawPositions = [].concat.apply([], s)),
                        this.resizeRadius(),
                        (e = this.chart.rawPositions);
                    }
                    return e;
                  },
                  resizeRadius: function() {
                    var t,
                      e,
                      i,
                      n,
                      o,
                      s,
                      r = this.chart,
                      a = r.rawPositions,
                      l = Math.min,
                      h = Math.max,
                      c = r.plotLeft,
                      d = r.plotTop,
                      p = r.plotHeight,
                      u = r.plotWidth;
                    for (t = i = Number.POSITIVE_INFINITY, e = n = Number.NEGATIVE_INFINITY, s = 0; s < a.length; s++)
                      (t = l(t, a[s][0] - (o = a[s][2]))),
                        (e = h(e, a[s][0] + o)),
                        (i = l(i, a[s][1] - o)),
                        (n = h(n, a[s][1] + o));
                    if (
                      ((l = l.apply([], [(u - c) / (s = [e - t, n - i])[0], (p - d) / s[1]])), 1e-10 < Math.abs(l - 1))
                    ) {
                      for (s = 0; s < a.length; s++) a[s][2] *= l;
                      this.placeBubbles(a);
                    } else (r.diffY = p / 2 + d - i - (n - i) / 2), (r.diffX = u / 2 + c - t - (e - t) / 2);
                  },
                  calculateZExtremes: function() {
                    var e = this.options.zMin,
                      i = this.options.zMax,
                      n = 1 / 0,
                      o = -1 / 0;
                    return e && i
                      ? [e, i]
                      : (this.chart.series.forEach(function(e) {
                          e.yData.forEach(function(e) {
                            t.defined(e) && (e > o && (o = e), e < n && (n = e));
                          });
                        }),
                        [(e = s(e, n)), (i = s(i, o))]);
                  },
                  getPointRadius: function() {
                    var t,
                      e,
                      i,
                      n,
                      o,
                      s = this,
                      r = s.chart,
                      a = s.options,
                      l = a.useSimulation,
                      h = Math.min(r.plotWidth, r.plotHeight),
                      c = {},
                      d = [],
                      p = r.allDataPoints;
                    ['minSize', 'maxSize'].forEach(function(t) {
                      var e = parseInt(a[t], 10),
                        i = /%$/.test(a[t]);
                      c[t] = i ? (h * e) / 100 : e * Math.sqrt(p.length);
                    }),
                      (r.minRadius = t = c.minSize / Math.sqrt(p.length)),
                      (r.maxRadius = e = c.maxSize / Math.sqrt(p.length)),
                      (o = l ? s.calculateZExtremes() : [t, e]),
                      (p || []).forEach(function(r, a) {
                        (i = l ? Math.max(Math.min(r[2], o[1]), o[0]) : r[2]),
                          0 === (n = s.getRadius(o[0], o[1], t, e, i)) && (n = null),
                          (p[a][2] = n),
                          d.push(n);
                      }),
                      (s.radii = d);
                  },
                  redrawHalo: d.redrawHalo,
                  onMouseDown: d.onMouseDown,
                  onMouseMove: d.onMouseMove,
                  onMouseUp: function(e) {
                    if (e.fixedPosition && !e.removed) {
                      var i,
                        n = this.layout,
                        o = this.parentNodeLayout;
                      o &&
                        n.options.dragBetweenSeries &&
                        o.nodes.forEach(function(o) {
                          e &&
                            e.marker &&
                            o !== e.series.parentNode &&
                            ((i = n.getDistXY(e, o)),
                            0 > n.vectorLength(i) - o.marker.radius - e.marker.radius &&
                              (o.series.addPoint(t.merge(e.options, { plotX: e.plotX, plotY: e.plotY }), !1),
                              n.removeNode(e),
                              e.remove()));
                        }),
                        d.onMouseUp.apply(this, arguments);
                    }
                  },
                  destroy: function() {
                    this.parentNode &&
                      (this.parentNodeLayout.removeNode(this.parentNode),
                      this.parentNode.dataLabel && (this.parentNode.dataLabel = this.parentNode.dataLabel.destroy())),
                      t.Series.prototype.destroy.apply(this, arguments);
                  },
                  alignDataLabel: t.Series.prototype.alignDataLabel
                },
                {
                  destroy: function() {
                    return (
                      this.series.layout && this.series.layout.removeNode(this),
                      n.prototype.destroy.apply(this, arguments)
                    );
                  }
                }
              ),
              r(a, 'beforeRedraw', function() {
                this.allDataPoints && delete this.allDataPoints;
              });
          }),
          e(t, 'parts-more/Polar.js', [t['parts/Globals.js']], function(t) {
            var e = t.pick,
              i = t.Series,
              n = t.seriesTypes,
              o = t.wrap,
              s = i.prototype,
              r = t.Pointer.prototype;
            (s.searchPointByAngle = function(t) {
              var e = this.chart,
                i = this.xAxis.pane.center;
              return this.searchKDTree({
                clientX: 180 + (-180 / Math.PI) * Math.atan2(t.chartX - i[0] - e.plotLeft, t.chartY - i[1] - e.plotTop)
              });
            }),
              (s.getConnectors = function(t, e, i, n) {
                var o, s, r, a, l, h, c, d;
                return (
                  (s = n ? 1 : 0),
                  (e =
                    0 > (o = 0 <= e && e <= t.length - 1 ? e : 0 > e ? t.length - 1 + e : 0) - 1
                      ? t.length - (1 + s)
                      : o - 1),
                  (l = (s = t[(s = o + 1 > t.length - 1 ? s : o + 1)]).plotX),
                  (h = s.plotY),
                  (a = (1.5 * (s = t[o].plotX) + (a = (r = t[e]).plotX)) / 2.5),
                  (r = (1.5 * (o = t[o].plotY) + (r = r.plotY)) / 2.5),
                  (l = (1.5 * s + l) / 2.5),
                  (c = (1.5 * o + h) / 2.5),
                  (h = Math.sqrt(Math.pow(a - s, 2) + Math.pow(r - o, 2))),
                  (d = Math.sqrt(Math.pow(l - s, 2) + Math.pow(c - o, 2))),
                  (a = Math.atan2(r - o, a - s)),
                  (c = Math.PI / 2 + (a + Math.atan2(c - o, l - s)) / 2),
                  Math.abs(a - c) > Math.PI / 2 && (c -= Math.PI),
                  (a = s + Math.cos(c) * h),
                  (r = o + Math.sin(c) * h),
                  (s = {
                    rightContX: (l = s + Math.cos(Math.PI + c) * d),
                    rightContY: (c = o + Math.sin(Math.PI + c) * d),
                    leftContX: a,
                    leftContY: r,
                    plotX: s,
                    plotY: o
                  }),
                  i && (s.prevPointCont = this.getConnectors(t, e, !1, n)),
                  s
                );
              }),
              (s.toXY = function(t) {
                var e,
                  i = this.chart,
                  n = t.plotX;
                (e = t.plotY),
                  (t.rectPlotX = n),
                  (t.rectPlotY = e),
                  (e = this.xAxis.postTranslate(t.plotX, this.yAxis.len - e)),
                  (t.plotX = t.polarPlotX = e.x - i.plotLeft),
                  (t.plotY = t.polarPlotY = e.y - i.plotTop),
                  this.kdByAngle
                    ? (0 > (i = ((n / Math.PI) * 180 + this.xAxis.pane.options.startAngle) % 360) && (i += 360),
                      (t.clientX = i))
                    : (t.clientX = t.plotX);
              }),
              n.spline &&
                (o(n.spline.prototype, 'getPointSpline', function(t, e, i, n) {
                  return this.chart.polar
                    ? n
                      ? [
                          'C',
                          (t = this.getConnectors(e, n, !0, this.connectEnds)).prevPointCont.rightContX,
                          t.prevPointCont.rightContY,
                          t.leftContX,
                          t.leftContY,
                          t.plotX,
                          t.plotY
                        ]
                      : ['M', i.plotX, i.plotY]
                    : t.call(this, e, i, n);
                }),
                n.areasplinerange && (n.areasplinerange.prototype.getPointSpline = n.spline.prototype.getPointSpline)),
              t.addEvent(
                i,
                'afterTranslate',
                function() {
                  var e,
                    i,
                    n = this.chart;
                  if (n.polar) {
                    if (
                      ((this.kdByAngle = n.tooltip && n.tooltip.shared)
                        ? (this.searchPoint = this.searchPointByAngle)
                        : (this.options.findNearestPointBy = 'xy'),
                      !this.preventPostTranslate)
                    )
                      for (i = (e = this.points).length; i--; )
                        this.toXY(e[i]),
                          !n.hasParallelCoordinates &&
                            !this.yAxis.reversed &&
                            e[i].y < this.yAxis.min &&
                            (e[i].isNull = !0);
                    this.hasClipCircleSetter ||
                      (this.hasClipCircleSetter = !!t.addEvent(this, 'afterRender', function() {
                        var e;
                        n.polar &&
                          (this.group.clip(n.renderer.clipCircle((e = this.yAxis.center)[0], e[1], e[2] / 2)),
                          (this.setClip = t.noop));
                      }));
                  }
                },
                { order: 2 }
              ),
              o(s, 'getGraphPath', function(t, e) {
                var i,
                  n,
                  o,
                  s = this;
                if (this.chart.polar) {
                  for (e = e || this.points, i = 0; i < e.length; i++)
                    if (!e[i].isNull) {
                      n = i;
                      break;
                    }
                  !1 !== this.options.connectEnds &&
                    void 0 !== n &&
                    ((this.connectEnds = !0), e.splice(e.length, 0, e[n]), (o = !0)),
                    e.forEach(function(t) {
                      void 0 === t.polarPlotY && s.toXY(t);
                    });
                }
                return (i = t.apply(this, [].slice.call(arguments, 1))), o && e.pop(), i;
              }),
              o(
                s,
                'animate',
                (i = function(t, e) {
                  var i = this.chart,
                    n = this.options.animation,
                    o = this.group,
                    s = this.markerGroup,
                    r = this.xAxis.center,
                    a = i.plotLeft,
                    l = i.plotTop;
                  i.polar
                    ? i.renderer.isSVG &&
                      (!0 === n && (n = {}),
                      e
                        ? (o.attr((t = { translateX: r[0] + a, translateY: r[1] + l, scaleX: 0.001, scaleY: 0.001 })),
                          s && s.attr(t))
                        : (o.animate((t = { translateX: a, translateY: l, scaleX: 1, scaleY: 1 }), n),
                          s && s.animate(t, n),
                          (this.animate = null)))
                    : t.call(this, e);
                })
              ),
              n.column &&
                (((n = n.column.prototype).polarArc = function(t, i, n, o) {
                  var s = this.xAxis.center,
                    r = this.yAxis.len;
                  return this.chart.renderer.symbols.arc(s[0], s[1], r - i, null, {
                    start: n,
                    end: o,
                    innerR: r - e(t, r)
                  });
                }),
                o(n, 'animate', i),
                o(n, 'translate', function(t) {
                  var e,
                    i,
                    n,
                    o = this.xAxis,
                    s = o.startAngleRad;
                  if (((this.preventPostTranslate = !0), t.call(this), o.isRadial))
                    for (n = (e = this.points).length; n--; )
                      (t = (i = e[n]).barX + s),
                        (i.shapeType = 'path'),
                        (i.shapeArgs = { d: this.polarArc(i.yBottom, i.plotY, t, t + i.pointWidth) }),
                        this.toXY(i),
                        (i.tooltipPos = [i.plotX, i.plotY]),
                        (i.ttBelow = i.plotY > o.center[1]);
                }),
                o(n, 'alignDataLabel', function(t, e, i, n, o, r) {
                  this.chart.polar
                    ? ((t = (e.rectPlotX / Math.PI) * 180),
                      null === n.align &&
                        (n.align = 20 < t && 160 > t ? 'left' : 200 < t && 340 > t ? 'right' : 'center'),
                      null === n.verticalAlign &&
                        (n.verticalAlign = 45 > t || 315 < t ? 'bottom' : 135 < t && 225 > t ? 'top' : 'middle'),
                      s.alignDataLabel.call(this, e, i, n, o, r))
                    : t.call(this, e, i, n, o, r);
                })),
              o(r, 'getCoordinates', function(t, e) {
                var i = this.chart,
                  n = { xAxis: [], yAxis: [] };
                return (
                  i.polar
                    ? i.axes.forEach(function(t) {
                        var o = t.isXAxis,
                          s = e.chartX - (r = t.center)[0] - i.plotLeft,
                          r = e.chartY - r[1] - i.plotTop;
                        n[o ? 'xAxis' : 'yAxis'].push({
                          axis: t,
                          value: t.translate(
                            o ? Math.PI - Math.atan2(s, r) : Math.sqrt(Math.pow(s, 2) + Math.pow(r, 2)),
                            !0
                          )
                        });
                      })
                    : (n = t.call(this, e)),
                  n
                );
              }),
              (t.SVGRenderer.prototype.clipCircle = function(e, i, n) {
                var o = t.uniqueKey(),
                  s = this.createElement('clipPath')
                    .attr({ id: o })
                    .add(this.defs);
                return ((e = this.circle(e, i, n).add(s)).id = o), (e.clipPath = s), e;
              }),
              t.addEvent(t.Chart, 'getAxes', function() {
                this.pane || (this.pane = []),
                  t.splat(this.options.pane).forEach(function(e) {
                    new t.Pane(e, this);
                  }, this);
              }),
              t.addEvent(t.Chart, 'afterDrawChartBox', function() {
                this.pane.forEach(function(t) {
                  t.render();
                });
              }),
              o(t.Chart.prototype, 'get', function(e, i) {
                return (
                  t.find(this.pane, function(t) {
                    return t.options.id === i;
                  }) || e.call(this, i)
                );
              });
          }),
          e(t, 'masters/highcharts-more.src.js', [], function() {});
      }),
        t.exports
          ? ((s.default = s), (t.exports = s))
          : ((n = [i('6n/F')]),
            void 0 ===
              (o = function(t) {
                return s(t), (s.Highcharts = t), s;
              }.apply(e, n)) || (t.exports = o));
    },
    Q1jL: function(t, e, i) {
      'use strict';
      i.r(e);
      var n = i('CcnG'),
        o = i('VuB0'),
        s = i.n(o),
        r = i('M8aS'),
        a = i.n(r),
        l = i('AxlJ'),
        h = i.n(l),
        c = function() {
          return [a.a, h.a, s.a];
        },
        d = (function() {
          return function() {};
        })(),
        p = i('pMnS'),
        u = i('svcd'),
        f = i('6n/F'),
        g = (function() {
          function t(t) {
            void 0 === t && (t = { series: [] }),
              (this.options = t),
              (this.refSubject = new u.a()),
              (this.ref$ = this.refSubject.asObservable());
          }
          return (
            (t.prototype.addPoint = function(t, e, i, n) {
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                void 0 === n && (n = !1),
                this.ref$.subscribe(function(o) {
                  o.series.length > e && o.series[e].addPoint(t, i, n);
                });
            }),
            (t.prototype.addSeries = function(t, e, i) {
              void 0 === e && (e = !0),
                this.ref$.subscribe(function(n) {
                  n.addSeries(t, e, i);
                });
            }),
            (t.prototype.removePoint = function(t, e) {
              void 0 === e && (e = 0),
                this.ref$.subscribe(function(i) {
                  i.series.length > e && i.series[e].data.length > t && i.series[e].removePoint(t, !0);
                });
            }),
            (t.prototype.removeSeries = function(t) {
              this.ref$.subscribe(function(e) {
                e.series.length > t && e.series[t].remove(!0);
              });
            }),
            (t.prototype.init = function(t) {
              var e = this;
              this.ref ||
                Object(f.chart)(t.nativeElement, this.options, function(t) {
                  e.refSubject.next(t), (e.ref = t), e.refSubject.complete();
                });
            }),
            (t.prototype.destroy = function() {
              this.ref &&
                ((this.options = this.ref.options),
                this.ref.destroy(),
                (this.ref = void 0),
                (this.refSubject = new u.a()),
                (this.ref$ = this.refSubject.asObservable()));
            }),
            t
          );
        })(),
        m = (function() {
          function t(t) {
            void 0 === t && (t = { series: [] }),
              (this.options = t),
              (this.refSubject = new u.a()),
              (this.ref$ = this.refSubject.asObservable());
          }
          return (
            (t.prototype.init = function(t) {
              var e = this;
              this.ref ||
                Object(f.mapChart)(t.nativeElement, this.options, function(t) {
                  e.refSubject.next(t), (e.ref = t), e.refSubject.complete();
                });
            }),
            (t.prototype.destroy = function() {
              this.ref &&
                ((this.options = this.ref.options),
                this.ref.destroy(),
                (this.ref = void 0),
                (this.refSubject = new u.a()),
                (this.ref$ = this.refSubject.asObservable()));
            }),
            t
          );
        })(),
        x = (function() {
          function t(t) {
            void 0 === t && (t = { series: [] }),
              (this.options = t),
              (this.refSubject = new u.a()),
              (this.ref$ = this.refSubject.asObservable());
          }
          return (
            (t.prototype.init = function(t) {
              var e = this;
              this.ref ||
                Object(f.stockChart)(t.nativeElement, this.options, function(t) {
                  e.refSubject.next(t), (e.ref = t), e.refSubject.complete();
                });
            }),
            (t.prototype.destroy = function() {
              this.ref &&
                ((this.options = this.ref.options),
                this.ref.destroy(),
                (this.ref = void 0),
                (this.refSubject = new u.a()),
                (this.ref$ = this.refSubject.asObservable()));
            }),
            t
          );
        })(),
        y = (function() {
          function t(t) {
            this.el = t;
          }
          return (
            (t.prototype.ngOnChanges = function(t) {
              t.chart.isFirstChange() || (this.destroy(), this.init());
            }),
            (t.prototype.ngOnInit = function() {
              this.init();
            }),
            (t.prototype.ngOnDestroy = function() {
              this.destroy();
            }),
            (t.prototype.init = function() {
              (this.chart instanceof g || this.chart instanceof x || this.chart instanceof m) &&
                this.chart.init(this.el);
            }),
            (t.prototype.destroy = function() {
              (this.chart instanceof g || this.chart instanceof x || this.chart instanceof m) && this.chart.destroy();
            }),
            t
          );
        })(),
        v = new n.InjectionToken('HighchartsModules'),
        b = (function() {
          function t(t) {
            this.chartModules = t;
          }
          return (
            (t.prototype.initModules = function() {
              this.chartModules.forEach(function(t) {
                t(f);
              });
            }),
            t
          );
        })(),
        M = (function() {
          return function(t) {
            (this.cs = t), this.cs.initModules();
          };
        })(),
        k = i('Ip0R'),
        w = i('H+bZ'),
        S = (function() {
          function t(t) {
            this.apiService = t;
          }
          return (
            (t.prototype.ngOnInit = function() {
              this.topologies$ = this.apiService.getTopologie();
            }),
            t
          );
        })(),
        P = n['\u0275crt']({ encapsulation: 0, styles: [['']], data: {} });
      function T(t) {
        return n['\u0275vid'](
          0,
          [
            (t()(), n['\u0275eld'](0, 0, null, null, 2, 'span', [], null, null, null, null, null)),
            (t()(), n['\u0275ted'](1, null, ['', ''])),
            n['\u0275ppd'](2, 2)
          ],
          null,
          function(t, e) {
            var i = n['\u0275unv'](
              e,
              1,
              0,
              t(
                e,
                2,
                0,
                n['\u0275nov'](e.parent.parent.parent, 0),
                e.parent.context.$implicit.value,
                'dd/MM/yyyy hh:mm:ss'
              )
            );
            t(e, 1, 0, i);
          }
        );
      }
      function L(t) {
        return n['\u0275vid'](0, [(t()(), n['\u0275ted'](0, null, ['', '']))], null, function(t, e) {
          t(e, 0, 0, e.parent.context.$implicit.value);
        });
      }
      function A(t) {
        return n['\u0275vid'](
          0,
          [
            (t()(), n['\u0275eld'](0, 0, null, null, 6, 'li', [], null, null, null, null, null)),
            (t()(), n['\u0275ted'](1, null, ['\n        ', ' :\n        '])),
            (t()(), n['\u0275and'](16777216, null, null, 1, null, T)),
            n['\u0275did'](
              3,
              16384,
              null,
              0,
              k.NgIf,
              [n.ViewContainerRef, n.TemplateRef],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            (t()(), n['\u0275ted'](-1, null, ['\n        '])),
            (t()(), n['\u0275and'](0, [['others', 2]], null, 0, null, L)),
            (t()(), n['\u0275ted'](-1, null, ['\n      ']))
          ],
          function(t, e) {
            t(e, 3, 0, 'Start Time' === e.context.$implicit.key, n['\u0275nov'](e, 5));
          },
          function(t, e) {
            t(e, 1, 0, e.context.$implicit.key);
          }
        );
      }
      function C(t) {
        return n['\u0275vid'](
          0,
          [
            (t()(), n['\u0275eld'](0, 0, null, null, 17, 'div', [['class', 'card']], null, null, null, null, null)),
            (t()(), n['\u0275ted'](-1, null, ['\n  '])),
            (t()(),
            n['\u0275eld'](2, 0, null, null, 1, 'div', [['class', 'card-header']], null, null, null, null, null)),
            (t()(), n['\u0275ted'](-1, null, ['\n    Stats Plugin\n  '])),
            (t()(), n['\u0275ted'](-1, null, ['\n  '])),
            (t()(),
            n['\u0275eld'](5, 0, null, null, 11, 'div', [['class', 'card-body']], null, null, null, null, null)),
            (t()(), n['\u0275ted'](-1, null, ['\n    '])),
            (t()(), n['\u0275eld'](7, 0, null, null, 1, 'h5', [['class', 'card-title']], null, null, null, null, null)),
            (t()(), n['\u0275ted'](-1, null, ['Sous Titre'])),
            (t()(), n['\u0275ted'](-1, null, ['\n    '])),
            (t()(),
            n['\u0275eld'](10, 0, null, null, 5, 'div', [['class', 'card-text']], null, null, null, null, null)),
            (t()(), n['\u0275ted'](-1, null, ['\n      '])),
            (t()(), n['\u0275and'](16777216, null, null, 2, null, A)),
            n['\u0275did'](
              13,
              278528,
              null,
              0,
              k.NgForOf,
              [n.ViewContainerRef, n.TemplateRef, n.IterableDiffers],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            n['\u0275pid'](0, k.KeyValuePipe, [n.KeyValueDiffers]),
            (t()(), n['\u0275ted'](-1, null, ['\n    '])),
            (t()(), n['\u0275ted'](-1, null, ['\n  '])),
            (t()(), n['\u0275ted'](-1, null, ['\n']))
          ],
          function(t, e) {
            t(e, 13, 0, n['\u0275unv'](e, 13, 0, n['\u0275nov'](e, 14).transform(e.context.ngIf)));
          },
          null
        );
      }
      function E(t) {
        return n['\u0275vid'](
          0,
          [
            n['\u0275pid'](0, k.DatePipe, [n.LOCALE_ID]),
            (t()(), n['\u0275and'](16777216, null, null, 2, null, C)),
            n['\u0275did'](2, 16384, null, 0, k.NgIf, [n.ViewContainerRef, n.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
            n['\u0275pid'](131072, k.AsyncPipe, [n.ChangeDetectorRef]),
            (t()(), n['\u0275ted'](-1, null, ['\n']))
          ],
          function(t, e) {
            var i = e.component;
            t(e, 2, 0, n['\u0275unv'](e, 2, 0, n['\u0275nov'](e, 3).transform(i.topologies$)));
          },
          null
        );
      }
      var O = (function() {
          function t(t) {
            this.apiService = t;
          }
          return (
            (t.prototype.ngOnInit = function() {
              this.stats$ = this.apiService.getNwkStats();
            }),
            t
          );
        })(),
        I = n['\u0275crt']({ encapsulation: 0, styles: [['']], data: {} });
      function N(t) {
        return n['\u0275vid'](
          0,
          [
            (t()(), n['\u0275eld'](0, 0, null, null, 2, 'span', [], null, null, null, null, null)),
            (t()(), n['\u0275ted'](1, null, ['', ''])),
            n['\u0275ppd'](2, 2)
          ],
          null,
          function(t, e) {
            var i = n['\u0275unv'](
              e,
              1,
              0,
              t(
                e,
                2,
                0,
                n['\u0275nov'](e.parent.parent.parent, 0),
                e.parent.context.$implicit.value,
                'dd/MM/yyyy hh:mm:ss'
              )
            );
            t(e, 1, 0, i);
          }
        );
      }
      function D(t) {
        return n['\u0275vid'](0, [(t()(), n['\u0275ted'](0, null, ['', '']))], null, function(t, e) {
          t(e, 0, 0, e.parent.context.$implicit.value);
        });
      }
      function z(t) {
        return n['\u0275vid'](
          0,
          [
            (t()(), n['\u0275eld'](0, 0, null, null, 6, 'li', [], null, null, null, null, null)),
            (t()(), n['\u0275ted'](1, null, ['\n        ', ' :\n        '])),
            (t()(), n['\u0275and'](16777216, null, null, 1, null, N)),
            n['\u0275did'](
              3,
              16384,
              null,
              0,
              k.NgIf,
              [n.ViewContainerRef, n.TemplateRef],
              { ngIf: [0, 'ngIf'], ngIfElse: [1, 'ngIfElse'] },
              null
            ),
            (t()(), n['\u0275ted'](-1, null, ['\n        '])),
            (t()(), n['\u0275and'](0, [['others', 2]], null, 0, null, D)),
            (t()(), n['\u0275ted'](-1, null, ['\n      ']))
          ],
          function(t, e) {
            t(e, 3, 0, 'StartTime' === e.context.$implicit.key, n['\u0275nov'](e, 5));
          },
          function(t, e) {
            t(e, 1, 0, e.context.$implicit.key);
          }
        );
      }
      function R(t) {
        return n['\u0275vid'](
          0,
          [
            (t()(), n['\u0275eld'](0, 0, null, null, 17, 'div', [['class', 'card']], null, null, null, null, null)),
            (t()(), n['\u0275ted'](-1, null, ['\n  '])),
            (t()(),
            n['\u0275eld'](2, 0, null, null, 1, 'div', [['class', 'card-header']], null, null, null, null, null)),
            (t()(), n['\u0275ted'](-1, null, ['\n    Stats Plugin\n  '])),
            (t()(), n['\u0275ted'](-1, null, ['\n  '])),
            (t()(),
            n['\u0275eld'](5, 0, null, null, 11, 'div', [['class', 'card-body']], null, null, null, null, null)),
            (t()(), n['\u0275ted'](-1, null, ['\n    '])),
            (t()(), n['\u0275eld'](7, 0, null, null, 1, 'h5', [['class', 'card-title']], null, null, null, null, null)),
            (t()(), n['\u0275ted'](-1, null, ['Sous Titre'])),
            (t()(), n['\u0275ted'](-1, null, ['\n    '])),
            (t()(),
            n['\u0275eld'](10, 0, null, null, 5, 'div', [['class', 'card-text']], null, null, null, null, null)),
            (t()(), n['\u0275ted'](-1, null, ['\n      '])),
            (t()(), n['\u0275and'](16777216, null, null, 2, null, z)),
            n['\u0275did'](
              13,
              278528,
              null,
              0,
              k.NgForOf,
              [n.ViewContainerRef, n.TemplateRef, n.IterableDiffers],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            n['\u0275pid'](0, k.KeyValuePipe, [n.KeyValueDiffers]),
            (t()(), n['\u0275ted'](-1, null, ['\n    '])),
            (t()(), n['\u0275ted'](-1, null, ['\n  '])),
            (t()(), n['\u0275ted'](-1, null, ['\n']))
          ],
          function(t, e) {
            t(e, 13, 0, n['\u0275unv'](e, 13, 0, n['\u0275nov'](e, 14).transform(e.context.ngIf)));
          },
          null
        );
      }
      function X(t) {
        return n['\u0275vid'](
          0,
          [
            n['\u0275pid'](0, k.DatePipe, [n.LOCALE_ID]),
            (t()(), n['\u0275and'](16777216, null, null, 2, null, R)),
            n['\u0275did'](2, 16384, null, 0, k.NgIf, [n.ViewContainerRef, n.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
            n['\u0275pid'](131072, k.AsyncPipe, [n.ChangeDetectorRef]),
            (t()(), n['\u0275ted'](-1, null, ['\n']))
          ],
          function(t, e) {
            var i = e.component;
            t(e, 2, 0, n['\u0275unv'](e, 2, 0, n['\u0275nov'](e, 3).transform(i.stats$)));
          },
          null
        );
      }
      var B = i('AytR'),
        G = (function() {
          function t() {
            this.version = B.a.version;
          }
          return (
            (t.prototype.ngOnInit = function() {
              this.init();
            }),
            (t.prototype.init = function() {
              var t = new g({
                chart: { type: 'sankey' },
                title: { text: 'TEST' },
                credits: { enabled: !1 },
                series: [
                  {
                    type: void 0,
                    keys: ['from', 'to', 'weight'],
                    data: [
                      ['Brazil', 'Portugal', 5],
                      ['Brazil', 'France', 1],
                      ['Brazil', 'Spain', 1],
                      ['Brazil', 'England', 1],
                      ['Canada', 'Portugal', 1],
                      ['Canada', 'France', 5],
                      ['Canada', 'England', 1],
                      ['Mexico', 'Portugal', 1],
                      ['Mexico', 'France', 1],
                      ['Mexico', 'Spain', 5],
                      ['Mexico', 'England', 1],
                      ['USA', 'Portugal', 1],
                      ['USA', 'France', 1],
                      ['USA', 'Spain', 1],
                      ['USA', 'England', 5],
                      ['Portugal', 'Angola', 2],
                      ['Portugal', 'Senegal', 1],
                      ['Portugal', 'Morocco', 1],
                      ['Portugal', 'South Africa', 3],
                      ['France', 'Angola', 1],
                      ['France', 'Senegal', 3],
                      ['France', 'Mali', 3],
                      ['France', 'Morocco', 3],
                      ['France', 'South Africa', 1],
                      ['Spain', 'Senegal', 1],
                      ['Spain', 'Morocco', 3],
                      ['Spain', 'South Africa', 1],
                      ['England', 'Angola', 1],
                      ['England', 'Senegal', 1],
                      ['England', 'Morocco', 2],
                      ['England', 'South Africa', 7],
                      ['South Africa', 'China', 5],
                      ['South Africa', 'India', 1],
                      ['South Africa', 'Japan', 3],
                      ['Angola', 'China', 5],
                      ['Angola', 'India', 1],
                      ['Angola', 'Japan', 3],
                      ['Senegal', 'China', 5],
                      ['Senegal', 'India', 1],
                      ['Senegal', 'Japan', 3],
                      ['Mali', 'China', 5],
                      ['Mali', 'India', 1],
                      ['Mali', 'Japan', 3],
                      ['Morocco', 'China', 5],
                      ['Morocco', 'India', 1],
                      ['Morocco', 'Japan', 3]
                    ]
                  }
                ]
              });
              (this.chart = t), t.ref$.subscribe(console.log);
            }),
            t
          );
        })(),
        Y = n['\u0275crt']({ encapsulation: 0, styles: [['']], data: {} });
      function W(t) {
        return n['\u0275vid'](
          0,
          [
            (t()(),
            n['\u0275eld'](0, 0, null, null, 13, 'div', [['class', 'container-fluid']], null, null, null, null, null)),
            (t()(), n['\u0275ted'](-1, null, ['\n  '])),
            (t()(), n['\u0275eld'](2, 0, null, null, 10, 'div', [['class', 'row']], null, null, null, null, null)),
            (t()(), n['\u0275ted'](-1, null, ['\n    '])),
            (t()(), n['\u0275eld'](4, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            n['\u0275did'](5, 737280, null, 0, y, [n.ElementRef], { chart: [0, 'chart'] }, null),
            (t()(), n['\u0275ted'](-1, null, ['\n    '])),
            (t()(),
            n['\u0275eld'](7, 0, null, null, 1, 'app-topology', [['class', 'row col-sm-6']], null, null, null, E, P)),
            n['\u0275did'](8, 114688, null, 0, S, [w.a], null, null),
            (t()(), n['\u0275ted'](-1, null, ['\n    '])),
            (t()(),
            n['\u0275eld'](10, 0, null, null, 1, 'app-nwk-stats', [['class', 'row col-sm-6']], null, null, null, X, I)),
            n['\u0275did'](11, 114688, null, 0, O, [w.a], null, null),
            (t()(), n['\u0275ted'](-1, null, ['\n  '])),
            (t()(), n['\u0275ted'](-1, null, ['\n'])),
            (t()(), n['\u0275ted'](-1, null, ['\n']))
          ],
          function(t, e) {
            t(e, 5, 0, e.component.chart), t(e, 8, 0), t(e, 11, 0);
          },
          null
        );
      }
      function F(t) {
        return n['\u0275vid'](
          0,
          [
            (t()(), n['\u0275eld'](0, 0, null, null, 1, 'app-network', [], null, null, null, W, Y)),
            n['\u0275did'](1, 114688, null, 0, G, [], null, null)
          ],
          function(t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var H = n['\u0275ccf']('app-network', G, F, {}, {}, []),
        j = i('FO+L'),
        V = i('ZYjt'),
        U = i('nhM1'),
        _ = i('BARL'),
        q = i('gIcY'),
        K = i('ZYCi'),
        $ = i('ey9i'),
        Z = { title: Object($.b)('network') },
        J = (function() {
          return function() {};
        })(),
        Q = i('U+Mh'),
        tt = i('QpxQ'),
        et = i('A7o+'),
        it = i('F8xH'),
        nt = i('PCNd');
      i.d(e, 'NetworkModuleNgFactory', function() {
        return ot;
      });
      var ot = n['\u0275cmf'](d, [], function(t) {
        return n['\u0275mod']([
          n['\u0275mpd'](512, n.ComponentFactoryResolver, n['\u0275CodegenComponentFactoryResolver'], [
            [8, [p.a, H]],
            [3, n.ComponentFactoryResolver],
            n.NgModuleRef
          ]),
          n['\u0275mpd'](4608, k.NgLocalization, k.NgLocaleLocalization, [
            n.LOCALE_ID,
            [2, k['\u0275angular_packages_common_common_a']]
          ]),
          n['\u0275mpd'](4608, j.ScrollbarHelper, j.ScrollbarHelper, [V.DOCUMENT]),
          n['\u0275mpd'](4608, U.DimensionsHelper, U.DimensionsHelper, []),
          n['\u0275mpd'](4608, _.ColumnChangesService, _.ColumnChangesService, []),
          n['\u0275mpd'](4608, q.e, q.e, []),
          n['\u0275mpd'](4608, q.v, q.v, []),
          n['\u0275mpd'](1073742336, K.o, K.o, [[2, K.u], [2, K.l]]),
          n['\u0275mpd'](1073742336, J, J, []),
          n['\u0275mpd'](1073742336, k.CommonModule, k.CommonModule, []),
          n['\u0275mpd'](1073742336, Q.f, Q.f, []),
          n['\u0275mpd'](1073742336, tt.c, tt.c, []),
          n['\u0275mpd'](1073742336, et.i, et.i, []),
          n['\u0275mpd'](1073742336, it.NgxDatatableModule, it.NgxDatatableModule, []),
          n['\u0275mpd'](1073742336, q.t, q.t, []),
          n['\u0275mpd'](1073742336, q.r, q.r, []),
          n['\u0275mpd'](1073742336, nt.a, nt.a, []),
          n['\u0275mpd'](1024, v, c, []),
          n['\u0275mpd'](512, b, b, [v]),
          n['\u0275mpd'](1073742336, M, M, [b]),
          n['\u0275mpd'](1073742336, d, d, []),
          n['\u0275mpd'](
            1024,
            K.j,
            function() {
              return [[{ path: '', component: G, data: Z }]];
            },
            []
          ),
          n['\u0275mpd'](256, tt.d, tt.e, [])
        ]);
      });
    },
    VuB0: function(t, e, i) {
      var n, o, s;
      (s = function(t) {
        function e(t, e, i, n) {
          t.hasOwnProperty(e) || (t[e] = n.apply(null, i));
        }
        e((t = t ? t._modules : {}), 'mixins/nodes.js', [t['parts/Globals.js']], function(t) {
          var e = t.pick,
            i = t.defined,
            n = t.Point;
          t.NodesMixin = {
            createNode: function(i) {
              function n(e, i) {
                return t.find(e, function(t) {
                  return t.id === i;
                });
              }
              var o,
                s = n(this.nodes, i),
                r = this.pointClass;
              return (
                s ||
                  ((o = this.options.nodes && n(this.options.nodes, i)),
                  ((s = new r().init(
                    this,
                    t.extend({ className: 'highcharts-node', isNode: !0, id: i, y: 1 }, o)
                  )).linksTo = []),
                  (s.linksFrom = []),
                  (s.formatPrefix = 'node'),
                  (s.name = s.name || s.options.id),
                  (s.mass = e(
                    s.options.mass,
                    s.options.marker && s.options.marker.radius,
                    this.options.marker && this.options.marker.radius,
                    4
                  )),
                  (s.getSum = function() {
                    var t = 0,
                      e = 0;
                    return (
                      s.linksTo.forEach(function(e) {
                        t += e.weight;
                      }),
                      s.linksFrom.forEach(function(t) {
                        e += t.weight;
                      }),
                      Math.max(t, e)
                    );
                  }),
                  (s.offset = function(t, e) {
                    for (var i = 0, n = 0; n < s[e].length; n++) {
                      if (s[e][n] === t) return i;
                      i += s[e][n].weight;
                    }
                  }),
                  (s.hasShape = function() {
                    var t = 0;
                    return (
                      s.linksTo.forEach(function(e) {
                        e.outgoing && t++;
                      }),
                      !s.linksTo.length || t !== s.linksTo.length
                    );
                  }),
                  this.nodes.push(s)),
                s
              );
            },
            generatePoints: function() {
              var n = {},
                o = this.chart;
              t.Series.prototype.generatePoints.call(this),
                this.nodes || (this.nodes = []),
                (this.colorCounter = 0),
                this.nodes.forEach(function(t) {
                  (t.linksFrom.length = 0), (t.linksTo.length = 0), (t.level = void 0);
                }),
                this.points.forEach(function(t) {
                  i(t.from) &&
                    (n[t.from] || (n[t.from] = this.createNode(t.from)),
                    n[t.from].linksFrom.push(t),
                    (t.fromNode = n[t.from]),
                    o.styledMode
                      ? (t.colorIndex = e(t.options.colorIndex, n[t.from].colorIndex))
                      : (t.color = t.options.color || n[t.from].color)),
                    i(t.to) &&
                      (n[t.to] || (n[t.to] = this.createNode(t.to)), n[t.to].linksTo.push(t), (t.toNode = n[t.to])),
                    (t.name = t.name || t.id);
                }, this),
                (this.nodeLookup = n);
            },
            setData: function() {
              this.nodes &&
                (this.nodes.forEach(function(t) {
                  t.destroy();
                }),
                (this.nodes.length = 0)),
                t.Series.prototype.setData.apply(this, arguments);
            },
            destroy: function() {
              return (
                (this.data = [].concat(this.points || [], this.nodes)),
                t.Series.prototype.destroy.apply(this, arguments)
              );
            },
            setNodeState: function() {
              var t = arguments;
              (this.isNode ? this.linksTo.concat(this.linksFrom) : [this.fromNode, this.toNode]).forEach(function(e) {
                n.prototype.setState.apply(e, t),
                  e.isNode ||
                    (e.fromNode.graphic && n.prototype.setState.apply(e.fromNode, t),
                    e.toNode.graphic && n.prototype.setState.apply(e.toNode, t));
              }),
                n.prototype.setState.apply(this, t);
            }
          };
        }),
          e(t, 'mixins/tree-series.js', [t['parts/Globals.js']], function(t) {
            var e = t.extend,
              i = t.isArray,
              n = t.isObject,
              o = t.isNumber,
              s = t.merge,
              r = t.pick;
            return {
              getColor: function(e, i) {
                var n,
                  o,
                  s,
                  a,
                  l = i.index,
                  h = i.mapOptionsToLevel,
                  c = i.parentColor,
                  d = i.parentColorIndex,
                  p = i.series,
                  u = i.colors,
                  f = i.siblings,
                  g = p.points,
                  m = p.chart.options.chart;
                return (
                  e &&
                    ((g = g[e.i]),
                    (e = h[e.level] || {}),
                    (h = g && e.colorByPoint) && ((o = g.index % (u ? u.length : m.colorCount)), (n = u && u[o])),
                    p.chart.styledMode ||
                      ((u = g && g.options.color),
                      (m = e && e.color),
                      (s = c) &&
                        (s =
                          (s = e && e.colorVariation) && 'brightness' === s.key
                            ? t
                                .color(c)
                                .brighten((l / f) * s.to)
                                .get()
                            : c),
                      (s = r(u, m, n, s, p.color))),
                    (a = r(g && g.options.colorIndex, e && e.colorIndex, o, d, i.colorIndex))),
                  { color: s, colorIndex: a }
                );
              },
              getLevelOptions: function(t) {
                var r,
                  a,
                  l,
                  h,
                  c = null;
                if (n(t))
                  for (
                    c = {},
                      l = o(t.from) ? t.from : 1,
                      h = t.levels,
                      a = {},
                      r = n(t.defaults) ? t.defaults : {},
                      i(h) &&
                        (a = h.reduce(function(t, i) {
                          var a, h;
                          return (
                            n(i) &&
                              o(i.level) &&
                              ((a =
                                'boolean' == typeof (h = s({}, i)).levelIsConstant
                                  ? h.levelIsConstant
                                  : r.levelIsConstant),
                              delete h.levelIsConstant,
                              delete h.level,
                              n(t[(i = i.level + (a ? 0 : l - 1))]) ? e(t[i], h) : (t[i] = h)),
                            t
                          );
                        }, {})),
                      h = o(t.to) ? t.to : 1,
                      t = 0;
                    t <= h;
                    t++
                  )
                    c[t] = s({}, r, n(a[t]) ? a[t] : {});
                return c;
              },
              setTreeValues: function t(i, n) {
                var o = n.before,
                  s = n.idRoot,
                  a = n.points[i.i],
                  l = (a && a.options) || {},
                  h = 0,
                  c = [];
                return (
                  e(i, {
                    levelDynamic:
                      i.level -
                      ('boolean' != typeof n.levelIsConstant || n.levelIsConstant ? 0 : n.mapIdToNode[s].level),
                    name: r(a && a.name, ''),
                    visible: s === i.id || ('boolean' == typeof n.visible && n.visible)
                  }),
                  'function' == typeof o && (i = o(i, n)),
                  i.children.forEach(function(o, s) {
                    var r = e({}, n);
                    e(r, { index: s, siblings: i.children.length, visible: i.visible }),
                      (o = t(o, r)),
                      c.push(o),
                      o.visible && (h += o.val);
                  }),
                  (i.visible = 0 < h || i.visible),
                  (o = r(l.value, h)),
                  e(i, { children: c, childrenTotal: h, isLeaf: i.visible && !h, val: o }),
                  i
                );
              },
              updateRootId: function(t) {
                var e;
                return (
                  n(t) &&
                    ((e = n(t.options) ? t.options : {}),
                    (e = r(t.rootNode, e.rootId, '')),
                    n(t.userOptions) && (t.userOptions.rootId = e),
                    (t.rootNode = e)),
                  e
                );
              }
            };
          }),
          e(t, 'modules/sankey.src.js', [t['parts/Globals.js'], t['mixins/tree-series.js']], function(t, e) {
            var i = e.getLevelOptions,
              n = t.defined,
              o = t.isObject,
              s = t.merge,
              r = t.pick,
              a = t.Point;
            (e = t.seriesType)(
              'sankey',
              'column',
              {
                borderWidth: 0,
                colorByPoint: !0,
                curveFactor: 0.33,
                dataLabels: {
                  enabled: !0,
                  backgroundColor: 'none',
                  crop: !1,
                  nodeFormat: void 0,
                  nodeFormatter: function() {
                    return this.point.name;
                  },
                  format: void 0,
                  formatter: function() {},
                  inside: !0
                },
                inactiveOtherPoints: !0,
                linkOpacity: 0.5,
                nodeWidth: 20,
                nodePadding: 10,
                showInLegend: !1,
                states: {
                  hover: { linkOpacity: 1 },
                  inactive: { linkOpacity: 0.1, opacity: 0.1, animation: { duration: 50 } }
                },
                tooltip: {
                  followPointer: !0,
                  headerFormat: '<span style="font-size: 10px">{series.name}</span><br/>',
                  pointFormat: '{point.fromNode.name} \u2192 {point.toNode.name}: <b>{point.weight}</b><br/>',
                  nodeFormat: '{point.name}: <b>{point.sum}</b><br/>'
                }
              },
              {
                isCartesian: !1,
                invertable: !0,
                forceDL: !0,
                orderNodes: !0,
                createNode: t.NodesMixin.createNode,
                setData: t.NodesMixin.setData,
                destroy: t.NodesMixin.destroy,
                getNodePadding: function() {
                  return this.options.nodePadding;
                },
                createNodeColumn: function() {
                  var e = this.chart,
                    i = [],
                    n = this.getNodePadding();
                  return (
                    (i.sum = function() {
                      return this.reduce(function(t, e) {
                        return t + e.getSum();
                      }, 0);
                    }),
                    (i.offset = function(e, o) {
                      for (var s, r = 0, a = 0; a < i.length; a++) {
                        if (((s = i[a].getSum() * o + n), i[a] === e))
                          return { relativeTop: r + t.relativeLength(e.options.offset || 0, s) };
                        r += s;
                      }
                    }),
                    (i.top = function(t) {
                      var i = this.reduce(function(e, i) {
                        return 0 < e && (e += n), e + i.getSum() * t;
                      }, 0);
                      return (e.plotSizeY - i) / 2;
                    }),
                    i
                  );
                },
                createNodeColumns: function() {
                  var e = [];
                  this.nodes.forEach(function(i) {
                    var n,
                      o,
                      s,
                      r = -1;
                    if (!t.defined(i.options.column))
                      if (0 === i.linksTo.length) i.column = 0;
                      else {
                        for (o = 0; o < i.linksTo.length; o++)
                          (s = i.linksTo[0]).fromNode.column > r && (r = (n = s.fromNode).column);
                        (i.column = r + 1),
                          'hanging' === n.options.layout &&
                            ((i.hangsFrom = n),
                            (i.column += n.linksFrom.findIndex(function(t) {
                              return t.toNode === i;
                            })));
                      }
                    e[i.column] || (e[i.column] = this.createNodeColumn()), e[i.column].push(i);
                  }, this);
                  for (var i = 0; i < e.length; i++) void 0 === e[i] && (e[i] = this.createNodeColumn());
                  return e;
                },
                hasData: function() {
                  return !!this.processedXData.length;
                },
                pointAttribs: function(e, i) {
                  var n = this.mapOptionsToLevel[(e.isNode ? e.level : e.fromNode.level) || 0],
                    o = e.options,
                    s = n.states[i] || {};
                  i = ['colorByPoint', 'borderColor', 'borderWidth', 'linkOpacity'].reduce(function(t, e) {
                    return (t[e] = r(s[e], o[e], n[e])), t;
                  }, {});
                  var a = r(s.color, o.color, i.colorByPoint ? e.color : n.color);
                  return e.isNode
                    ? { fill: a, stroke: i.borderColor, 'stroke-width': i.borderWidth }
                    : {
                        fill: t
                          .color(a)
                          .setOpacity(i.linkOpacity)
                          .get()
                      };
                },
                generatePoints: function() {
                  t.NodesMixin.generatePoints.apply(this, arguments),
                    this.orderNodes &&
                      (this.nodes
                        .filter(function(t) {
                          return 0 === t.linksTo.length;
                        })
                        .forEach(function(t) {
                          !(function t(e, i) {
                            void 0 === e.level &&
                              ((e.level = i),
                              e.linksFrom.forEach(function(e) {
                                t(e.toNode, i + 1);
                              }));
                          })(t, 0);
                        }),
                      t.stableSort(this.nodes, function(t, e) {
                        return t.level - e.level;
                      }));
                },
                translateNode: function(t, e) {
                  var i = this.translationFactor,
                    n = this.chart,
                    a = this.options,
                    l = t.getSum(),
                    h = Math.round(l * i),
                    c = (Math.round(a.borderWidth) % 2) / 2,
                    d = e.offset(t, i);
                  (e = Math.floor(r(d.absoluteTop, e.top(i) + d.relativeTop)) + c),
                    (c = Math.floor(this.colDistance * t.column + a.borderWidth / 2) + c),
                    (c = n.inverted ? n.plotSizeX - c : c),
                    (i = Math.round(this.nodeWidth)),
                    (t.sum = l),
                    (t.shapeType = 'rect'),
                    (t.nodeX = c),
                    (t.nodeY = e),
                    (t.shapeArgs = n.inverted
                      ? {
                          x: c - i,
                          y: n.plotSizeY - e - h,
                          width: t.options.height || a.height || i,
                          height: t.options.width || a.width || h
                        }
                      : {
                          x: c,
                          y: e,
                          width: t.options.width || a.width || i,
                          height: t.options.height || a.height || h
                        }),
                    (t.shapeArgs.display = t.hasShape() ? '' : 'none'),
                    (n = this.mapOptionsToLevel[t.level]),
                    (a = o((a = t.options)) ? a.dataLabels : {}),
                    (n = o(n) ? n.dataLabels : {}),
                    (n = s({ style: {} }, n, a)),
                    (t.dlOptions = n),
                    (t.plotY = 1);
                },
                translateLink: function(t) {
                  var e = t.fromNode,
                    i = t.toNode,
                    n = this.chart,
                    o = t.weight * (l = this.translationFactor),
                    s = this.options,
                    r = e.offset(t, 'linksFrom') * l,
                    a = (n.inverted ? -this.colDistance : this.colDistance) * s.curveFactor,
                    l = ((r = e.nodeY + r),
                    (s = e.nodeX),
                    this.nodeColumns[i.column].top(l) +
                      i.offset(t, 'linksTo') * l +
                      this.nodeColumns[i.column].offset(i, l).relativeTop),
                    h = this.nodeWidth,
                    c = t.outgoing,
                    d = (i = i.column * this.colDistance) > s;
                  if (
                    (n.inverted &&
                      ((r = n.plotSizeY - r),
                      (l = n.plotSizeY - l),
                      (h = -h),
                      (o = -o),
                      (d = s > (i = n.plotSizeX - i))),
                    (t.shapeType = 'path'),
                    (t.linkBase = [r, r + o, l, l + o]),
                    d)
                  )
                    t.shapeArgs = {
                      d: [
                        'M',
                        s + h,
                        r,
                        'C',
                        s + h + a,
                        r,
                        i - a,
                        l,
                        i,
                        l,
                        'L',
                        i + (c ? h : 0),
                        l + o / 2,
                        'L',
                        i,
                        l + o,
                        'C',
                        i - a,
                        l + o,
                        s + h + a,
                        r + o,
                        s + h,
                        r + o,
                        'z'
                      ]
                    };
                  else {
                    var p = s + h,
                      u = p + 20,
                      f = u + o,
                      g = r + o,
                      m = g + 20,
                      x = (n = m + (n.plotHeight - r - o)) + 20,
                      y = x + o,
                      v = l + o,
                      b = v + 20,
                      M = x + 0.7 * o,
                      k = (d = i) - 0.7 * o,
                      w = p + 0.7 * o;
                    t.shapeArgs = {
                      d: [
                        'M',
                        p,
                        r,
                        'C',
                        w,
                        r,
                        f,
                        g - 0.7 * o,
                        f,
                        m,
                        'L',
                        f,
                        n,
                        'C',
                        f,
                        M,
                        w,
                        y,
                        p,
                        y,
                        'L',
                        d,
                        y,
                        'C',
                        k,
                        y,
                        (a = i - 20 - o),
                        M,
                        a,
                        n,
                        'L',
                        a,
                        b,
                        'C',
                        a,
                        v - 0.7 * o,
                        k,
                        l,
                        d,
                        l,
                        'L',
                        d,
                        v,
                        'C',
                        (c = i - 20),
                        v,
                        c,
                        v,
                        c,
                        b,
                        'L',
                        c,
                        n,
                        'C',
                        c,
                        x,
                        c,
                        x,
                        d,
                        x,
                        'L',
                        p,
                        x,
                        'C',
                        u,
                        x,
                        u,
                        x,
                        u,
                        n,
                        'L',
                        u,
                        m,
                        'C',
                        u,
                        g,
                        u,
                        g,
                        p,
                        g,
                        'z'
                      ]
                    };
                  }
                  (t.dlBox = { x: s + (i - s + h) / 2, y: r + (l - r) / 2, height: o, width: 0 }),
                    (t.y = t.plotY = 1),
                    t.color || (t.color = e.color);
                },
                translate: function() {
                  this.processedXData || this.processData(),
                    this.generatePoints(),
                    (this.nodeColumns = this.createNodeColumns()),
                    (this.nodeWidth = t.relativeLength(this.options.nodeWidth, this.chart.plotSizeX));
                  var e = this,
                    n = this.chart,
                    o = this.options,
                    s = this.nodeWidth,
                    r = this.nodeColumns,
                    a = this.getNodePadding();
                  (this.translationFactor = r.reduce(function(t, e) {
                    return Math.min(t, (n.plotSizeY - o.borderWidth - (e.length - 1) * a) / e.sum());
                  }, 1 / 0)),
                    (this.colDistance = (n.plotSizeX - s - o.borderWidth) / (r.length - 1)),
                    (e.mapOptionsToLevel = i({
                      from: 1,
                      levels: o.levels,
                      to: r.length - 1,
                      defaults: {
                        borderColor: o.borderColor,
                        borderRadius: o.borderRadius,
                        borderWidth: o.borderWidth,
                        color: e.color,
                        colorByPoint: o.colorByPoint,
                        levelIsConstant: !0,
                        linkColor: o.linkColor,
                        linkLineWidth: o.linkLineWidth,
                        linkOpacity: o.linkOpacity,
                        states: o.states
                      }
                    })),
                    r.forEach(function(t) {
                      t.forEach(function(i) {
                        e.translateNode(i, t);
                      });
                    }, this),
                    this.nodes.forEach(function(t) {
                      t.linksFrom.forEach(function(t) {
                        e.translateLink(t), (t.allowShadow = !1);
                      });
                    });
                },
                render: function() {
                  var e = this.points;
                  (this.points = this.points.concat(this.nodes || [])),
                    t.seriesTypes.column.prototype.render.call(this),
                    (this.points = e);
                },
                animate: t.Series.prototype.animate
              },
              {
                applyOptions: function(t, e) {
                  return (
                    a.prototype.applyOptions.call(this, t, e),
                    n(this.options.level) && (this.options.column = this.column = this.options.level),
                    this
                  );
                },
                setState: t.NodesMixin.setNodeState,
                getClassName: function() {
                  return (this.isNode ? 'highcharts-node ' : 'highcharts-link ') + a.prototype.getClassName.call(this);
                },
                isValid: function() {
                  return this.isNode || 'number' == typeof this.weight;
                }
              }
            );
          }),
          e(t, 'masters/modules/sankey.src.js', [], function() {});
      }),
        t.exports
          ? ((s.default = s), (t.exports = s))
          : ((n = [i('6n/F')]),
            void 0 ===
              (o = function(t) {
                return s(t), (s.Highcharts = t), s;
              }.apply(e, n)) || (t.exports = o));
    }
  }
]);
