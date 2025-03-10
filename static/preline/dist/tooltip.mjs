var e = {
		316: (e, t, n) => {
			function o(e) {
				if (null == e) return window;
				if ('[object Window]' !== e.toString()) {
					var t = e.ownerDocument;
					return (t && t.defaultView) || window;
				}
				return e;
			}
			function i(e) {
				return e instanceof o(e).Element || e instanceof Element;
			}
			function r(e) {
				return e instanceof o(e).HTMLElement || e instanceof HTMLElement;
			}
			function s(e) {
				return (
					'undefined' != typeof ShadowRoot &&
					(e instanceof o(e).ShadowRoot || e instanceof ShadowRoot)
				);
			}
			n.d(t, { n4: () => me });
			var a = Math.max,
				l = Math.min,
				c = Math.round;
			function f() {
				var e = navigator.userAgentData;
				return null != e && e.brands && Array.isArray(e.brands)
					? e.brands
							.map(function (e) {
								return e.brand + '/' + e.version;
							})
							.join(' ')
					: navigator.userAgent;
			}
			function p() {
				return !/^((?!chrome|android).)*safari/i.test(f());
			}
			function d(e, t, n) {
				void 0 === t && (t = !1), void 0 === n && (n = !1);
				var s = e.getBoundingClientRect(),
					a = 1,
					l = 1;
				t &&
					r(e) &&
					((a = (e.offsetWidth > 0 && c(s.width) / e.offsetWidth) || 1),
					(l = (e.offsetHeight > 0 && c(s.height) / e.offsetHeight) || 1));
				var f = (i(e) ? o(e) : window).visualViewport,
					d = !p() && n,
					u = (s.left + (d && f ? f.offsetLeft : 0)) / a,
					h = (s.top + (d && f ? f.offsetTop : 0)) / l,
					g = s.width / a,
					m = s.height / l;
				return {
					width: g,
					height: m,
					top: h,
					right: u + g,
					bottom: h + m,
					left: u,
					x: u,
					y: h,
				};
			}
			function u(e) {
				var t = o(e);
				return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
			}
			function h(e) {
				return e ? (e.nodeName || '').toLowerCase() : null;
			}
			function g(e) {
				return ((i(e) ? e.ownerDocument : e.document) || window.document)
					.documentElement;
			}
			function m(e) {
				return d(g(e)).left + u(e).scrollLeft;
			}
			function v(e) {
				return o(e).getComputedStyle(e);
			}
			function y(e) {
				var t = v(e),
					n = t.overflow,
					o = t.overflowX,
					i = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + i + o);
			}
			function w(e, t, n) {
				void 0 === n && (n = !1);
				var i,
					s,
					a = r(t),
					l =
						r(t) &&
						(function (e) {
							var t = e.getBoundingClientRect(),
								n = c(t.width) / e.offsetWidth || 1,
								o = c(t.height) / e.offsetHeight || 1;
							return 1 !== n || 1 !== o;
						})(t),
					f = g(t),
					p = d(e, l, n),
					v = { scrollLeft: 0, scrollTop: 0 },
					w = { x: 0, y: 0 };
				return (
					(a || (!a && !n)) &&
						(('body' !== h(t) || y(f)) &&
							(v =
								(i = t) !== o(i) && r(i)
									? { scrollLeft: (s = i).scrollLeft, scrollTop: s.scrollTop }
									: u(i)),
						r(t)
							? (((w = d(t, !0)).x += t.clientLeft), (w.y += t.clientTop))
							: f && (w.x = m(f))),
					{
						x: p.left + v.scrollLeft - w.x,
						y: p.top + v.scrollTop - w.y,
						width: p.width,
						height: p.height,
					}
				);
			}
			function b(e) {
				var t = d(e),
					n = e.offsetWidth,
					o = e.offsetHeight;
				return (
					Math.abs(t.width - n) <= 1 && (n = t.width),
					Math.abs(t.height - o) <= 1 && (o = t.height),
					{ x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
				);
			}
			function x(e) {
				return 'html' === h(e)
					? e
					: e.assignedSlot || e.parentNode || (s(e) ? e.host : null) || g(e);
			}
			function O(e) {
				return ['html', 'body', '#document'].indexOf(h(e)) >= 0
					? e.ownerDocument.body
					: r(e) && y(e)
						? e
						: O(x(e));
			}
			function L(e, t) {
				var n;
				void 0 === t && (t = []);
				var i = O(e),
					r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
					s = o(i),
					a = r ? [s].concat(s.visualViewport || [], y(i) ? i : []) : i,
					l = t.concat(a);
				return r ? l : l.concat(L(x(a)));
			}
			function E(e) {
				return ['table', 'td', 'th'].indexOf(h(e)) >= 0;
			}
			function T(e) {
				return r(e) && 'fixed' !== v(e).position ? e.offsetParent : null;
			}
			function j(e) {
				for (var t = o(e), n = T(e); n && E(n) && 'static' === v(n).position; )
					n = T(n);
				return n &&
					('html' === h(n) || ('body' === h(n) && 'static' === v(n).position))
					? t
					: n ||
							(function (e) {
								var t = /firefox/i.test(f());
								if (/Trident/i.test(f()) && r(e) && 'fixed' === v(e).position)
									return null;
								var n = x(e);
								for (
									s(n) && (n = n.host);
									r(n) && ['html', 'body'].indexOf(h(n)) < 0;

								) {
									var o = v(n);
									if (
										'none' !== o.transform ||
										'none' !== o.perspective ||
										'paint' === o.contain ||
										-1 !== ['transform', 'perspective'].indexOf(o.willChange) ||
										(t && 'filter' === o.willChange) ||
										(t && o.filter && 'none' !== o.filter)
									)
										return n;
									n = n.parentNode;
								}
								return null;
							})(e) ||
							t;
			}
			var k = 'top',
				M = 'bottom',
				C = 'right',
				A = 'left',
				D = 'auto',
				P = [k, M, C, A],
				H = 'start',
				S = 'end',
				W = 'clippingParents',
				q = 'viewport',
				B = 'popper',
				R = 'reference',
				I = P.reduce(function (e, t) {
					return e.concat([t + '-' + H, t + '-' + S]);
				}, []),
				V = [].concat(P, [D]).reduce(function (e, t) {
					return e.concat([t, t + '-' + H, t + '-' + S]);
				}, []),
				$ = [
					'beforeRead',
					'read',
					'afterRead',
					'beforeMain',
					'main',
					'afterMain',
					'beforeWrite',
					'write',
					'afterWrite',
				];
			function F(e) {
				var t = new Map(),
					n = new Set(),
					o = [];
				function i(e) {
					n.add(e.name),
						[]
							.concat(e.requires || [], e.requiresIfExists || [])
							.forEach(function (e) {
								if (!n.has(e)) {
									var o = t.get(e);
									o && i(o);
								}
							}),
						o.push(e);
				}
				return (
					e.forEach(function (e) {
						t.set(e.name, e);
					}),
					e.forEach(function (e) {
						n.has(e.name) || i(e);
					}),
					o
				);
			}
			var N = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
			function _() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
					t[n] = arguments[n];
				return !t.some(function (e) {
					return !(e && 'function' == typeof e.getBoundingClientRect);
				});
			}
			function U(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					o = void 0 === n ? [] : n,
					r = t.defaultOptions,
					s = void 0 === r ? N : r;
				return function (e, t, n) {
					void 0 === n && (n = s);
					var r,
						a,
						l = {
							placement: 'bottom',
							orderedModifiers: [],
							options: Object.assign({}, N, s),
							modifiersData: {},
							elements: { reference: e, popper: t },
							attributes: {},
							styles: {},
						},
						c = [],
						f = !1,
						p = {
							state: l,
							setOptions: function (n) {
								var r = 'function' == typeof n ? n(l.options) : n;
								d(),
									(l.options = Object.assign({}, s, l.options, r)),
									(l.scrollParents = {
										reference: i(e)
											? L(e)
											: e.contextElement
												? L(e.contextElement)
												: [],
										popper: L(t),
									});
								var a,
									f,
									u = (function (e) {
										var t = F(e);
										return $.reduce(function (e, n) {
											return e.concat(
												t.filter(function (e) {
													return e.phase === n;
												}),
											);
										}, []);
									})(
										((a = [].concat(o, l.options.modifiers)),
										(f = a.reduce(function (e, t) {
											var n = e[t.name];
											return (
												(e[t.name] = n
													? Object.assign({}, n, t, {
															options: Object.assign({}, n.options, t.options),
															data: Object.assign({}, n.data, t.data),
														})
													: t),
												e
											);
										}, {})),
										Object.keys(f).map(function (e) {
											return f[e];
										})),
									);
								return (
									(l.orderedModifiers = u.filter(function (e) {
										return e.enabled;
									})),
									l.orderedModifiers.forEach(function (e) {
										var t = e.name,
											n = e.options,
											o = void 0 === n ? {} : n,
											i = e.effect;
										if ('function' == typeof i) {
											var r = i({ state: l, name: t, instance: p, options: o }),
												s = function () {};
											c.push(r || s);
										}
									}),
									p.update()
								);
							},
							forceUpdate: function () {
								if (!f) {
									var e = l.elements,
										t = e.reference,
										n = e.popper;
									if (_(t, n)) {
										(l.rects = {
											reference: w(t, j(n), 'fixed' === l.options.strategy),
											popper: b(n),
										}),
											(l.reset = !1),
											(l.placement = l.options.placement),
											l.orderedModifiers.forEach(function (e) {
												return (l.modifiersData[e.name] = Object.assign(
													{},
													e.data,
												));
											});
										for (var o = 0; o < l.orderedModifiers.length; o++)
											if (!0 !== l.reset) {
												var i = l.orderedModifiers[o],
													r = i.fn,
													s = i.options,
													a = void 0 === s ? {} : s,
													c = i.name;
												'function' == typeof r &&
													(l =
														r({ state: l, options: a, name: c, instance: p }) ||
														l);
											} else (l.reset = !1), (o = -1);
									}
								}
							},
							update:
								((r = function () {
									return new Promise(function (e) {
										p.forceUpdate(), e(l);
									});
								}),
								function () {
									return (
										a ||
											(a = new Promise(function (e) {
												Promise.resolve().then(function () {
													(a = void 0), e(r());
												});
											})),
										a
									);
								}),
							destroy: function () {
								d(), (f = !0);
							},
						};
					if (!_(e, t)) return p;
					function d() {
						c.forEach(function (e) {
							return e();
						}),
							(c = []);
					}
					return (
						p.setOptions(n).then(function (e) {
							!f && n.onFirstUpdate && n.onFirstUpdate(e);
						}),
						p
					);
				};
			}
			var z = { passive: !0 };
			function J(e) {
				return e.split('-')[0];
			}
			function X(e) {
				return e.split('-')[1];
			}
			function Y(e) {
				return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
			}
			function G(e) {
				var t,
					n = e.reference,
					o = e.element,
					i = e.placement,
					r = i ? J(i) : null,
					s = i ? X(i) : null,
					a = n.x + n.width / 2 - o.width / 2,
					l = n.y + n.height / 2 - o.height / 2;
				switch (r) {
					case k:
						t = { x: a, y: n.y - o.height };
						break;
					case M:
						t = { x: a, y: n.y + n.height };
						break;
					case C:
						t = { x: n.x + n.width, y: l };
						break;
					case A:
						t = { x: n.x - o.width, y: l };
						break;
					default:
						t = { x: n.x, y: n.y };
				}
				var c = r ? Y(r) : null;
				if (null != c) {
					var f = 'y' === c ? 'height' : 'width';
					switch (s) {
						case H:
							t[c] = t[c] - (n[f] / 2 - o[f] / 2);
							break;
						case S:
							t[c] = t[c] + (n[f] / 2 - o[f] / 2);
					}
				}
				return t;
			}
			var K = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
			function Q(e) {
				var t,
					n = e.popper,
					i = e.popperRect,
					r = e.placement,
					s = e.variation,
					a = e.offsets,
					l = e.position,
					f = e.gpuAcceleration,
					p = e.adaptive,
					d = e.roundOffsets,
					u = e.isFixed,
					h = a.x,
					m = void 0 === h ? 0 : h,
					y = a.y,
					w = void 0 === y ? 0 : y,
					b = 'function' == typeof d ? d({ x: m, y: w }) : { x: m, y: w };
				(m = b.x), (w = b.y);
				var x = a.hasOwnProperty('x'),
					O = a.hasOwnProperty('y'),
					L = A,
					E = k,
					T = window;
				if (p) {
					var D = j(n),
						P = 'clientHeight',
						H = 'clientWidth';
					if (
						(D === o(n) &&
							'static' !== v((D = g(n))).position &&
							'absolute' === l &&
							((P = 'scrollHeight'), (H = 'scrollWidth')),
						r === k || ((r === A || r === C) && s === S))
					)
						(E = M),
							(w -=
								(u && D === T && T.visualViewport
									? T.visualViewport.height
									: D[P]) - i.height),
							(w *= f ? 1 : -1);
					if (r === A || ((r === k || r === M) && s === S))
						(L = C),
							(m -=
								(u && D === T && T.visualViewport
									? T.visualViewport.width
									: D[H]) - i.width),
							(m *= f ? 1 : -1);
				}
				var W,
					q = Object.assign({ position: l }, p && K),
					B =
						!0 === d
							? (function (e, t) {
									var n = e.x,
										o = e.y,
										i = t.devicePixelRatio || 1;
									return { x: c(n * i) / i || 0, y: c(o * i) / i || 0 };
								})({ x: m, y: w }, o(n))
							: { x: m, y: w };
				return (
					(m = B.x),
					(w = B.y),
					f
						? Object.assign(
								{},
								q,
								(((W = {})[E] = O ? '0' : ''),
								(W[L] = x ? '0' : ''),
								(W.transform =
									(T.devicePixelRatio || 1) <= 1
										? 'translate(' + m + 'px, ' + w + 'px)'
										: 'translate3d(' + m + 'px, ' + w + 'px, 0)'),
								W),
							)
						: Object.assign(
								{},
								q,
								(((t = {})[E] = O ? w + 'px' : ''),
								(t[L] = x ? m + 'px' : ''),
								(t.transform = ''),
								t),
							)
				);
			}
			const Z = {
				name: 'offset',
				enabled: !0,
				phase: 'main',
				requires: ['popperOffsets'],
				fn: function (e) {
					var t = e.state,
						n = e.options,
						o = e.name,
						i = n.offset,
						r = void 0 === i ? [0, 0] : i,
						s = V.reduce(function (e, n) {
							return (
								(e[n] = (function (e, t, n) {
									var o = J(e),
										i = [A, k].indexOf(o) >= 0 ? -1 : 1,
										r =
											'function' == typeof n
												? n(Object.assign({}, t, { placement: e }))
												: n,
										s = r[0],
										a = r[1];
									return (
										(s = s || 0),
										(a = (a || 0) * i),
										[A, C].indexOf(o) >= 0 ? { x: a, y: s } : { x: s, y: a }
									);
								})(n, t.rects, r)),
								e
							);
						}, {}),
						a = s[t.placement],
						l = a.x,
						c = a.y;
					null != t.modifiersData.popperOffsets &&
						((t.modifiersData.popperOffsets.x += l),
						(t.modifiersData.popperOffsets.y += c)),
						(t.modifiersData[o] = s);
				},
			};
			var ee = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
			function te(e) {
				return e.replace(/left|right|bottom|top/g, function (e) {
					return ee[e];
				});
			}
			var ne = { start: 'end', end: 'start' };
			function oe(e) {
				return e.replace(/start|end/g, function (e) {
					return ne[e];
				});
			}
			function ie(e, t) {
				var n = t.getRootNode && t.getRootNode();
				if (e.contains(t)) return !0;
				if (n && s(n)) {
					var o = t;
					do {
						if (o && e.isSameNode(o)) return !0;
						o = o.parentNode || o.host;
					} while (o);
				}
				return !1;
			}
			function re(e) {
				return Object.assign({}, e, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height,
				});
			}
			function se(e, t, n) {
				return t === q
					? re(
							(function (e, t) {
								var n = o(e),
									i = g(e),
									r = n.visualViewport,
									s = i.clientWidth,
									a = i.clientHeight,
									l = 0,
									c = 0;
								if (r) {
									(s = r.width), (a = r.height);
									var f = p();
									(f || (!f && 'fixed' === t)) &&
										((l = r.offsetLeft), (c = r.offsetTop));
								}
								return { width: s, height: a, x: l + m(e), y: c };
							})(e, n),
						)
					: i(t)
						? (function (e, t) {
								var n = d(e, !1, 'fixed' === t);
								return (
									(n.top = n.top + e.clientTop),
									(n.left = n.left + e.clientLeft),
									(n.bottom = n.top + e.clientHeight),
									(n.right = n.left + e.clientWidth),
									(n.width = e.clientWidth),
									(n.height = e.clientHeight),
									(n.x = n.left),
									(n.y = n.top),
									n
								);
							})(t, n)
						: re(
								(function (e) {
									var t,
										n = g(e),
										o = u(e),
										i = null == (t = e.ownerDocument) ? void 0 : t.body,
										r = a(
											n.scrollWidth,
											n.clientWidth,
											i ? i.scrollWidth : 0,
											i ? i.clientWidth : 0,
										),
										s = a(
											n.scrollHeight,
											n.clientHeight,
											i ? i.scrollHeight : 0,
											i ? i.clientHeight : 0,
										),
										l = -o.scrollLeft + m(e),
										c = -o.scrollTop;
									return (
										'rtl' === v(i || n).direction &&
											(l += a(n.clientWidth, i ? i.clientWidth : 0) - r),
										{ width: r, height: s, x: l, y: c }
									);
								})(g(e)),
							);
			}
			function ae(e, t, n, o) {
				var s =
						'clippingParents' === t
							? (function (e) {
									var t = L(x(e)),
										n =
											['absolute', 'fixed'].indexOf(v(e).position) >= 0 && r(e)
												? j(e)
												: e;
									return i(n)
										? t.filter(function (e) {
												return i(e) && ie(e, n) && 'body' !== h(e);
											})
										: [];
								})(e)
							: [].concat(t),
					c = [].concat(s, [n]),
					f = c[0],
					p = c.reduce(
						function (t, n) {
							var i = se(e, n, o);
							return (
								(t.top = a(i.top, t.top)),
								(t.right = l(i.right, t.right)),
								(t.bottom = l(i.bottom, t.bottom)),
								(t.left = a(i.left, t.left)),
								t
							);
						},
						se(e, f, o),
					);
				return (
					(p.width = p.right - p.left),
					(p.height = p.bottom - p.top),
					(p.x = p.left),
					(p.y = p.top),
					p
				);
			}
			function le(e) {
				return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
			}
			function ce(e, t) {
				return t.reduce(function (t, n) {
					return (t[n] = e), t;
				}, {});
			}
			function fe(e, t) {
				void 0 === t && (t = {});
				var n = t,
					o = n.placement,
					r = void 0 === o ? e.placement : o,
					s = n.strategy,
					a = void 0 === s ? e.strategy : s,
					l = n.boundary,
					c = void 0 === l ? W : l,
					f = n.rootBoundary,
					p = void 0 === f ? q : f,
					u = n.elementContext,
					h = void 0 === u ? B : u,
					m = n.altBoundary,
					v = void 0 !== m && m,
					y = n.padding,
					w = void 0 === y ? 0 : y,
					b = le('number' != typeof w ? w : ce(w, P)),
					x = h === B ? R : B,
					O = e.rects.popper,
					L = e.elements[v ? x : h],
					E = ae(i(L) ? L : L.contextElement || g(e.elements.popper), c, p, a),
					T = d(e.elements.reference),
					j = G({
						reference: T,
						element: O,
						strategy: 'absolute',
						placement: r,
					}),
					A = re(Object.assign({}, O, j)),
					D = h === B ? A : T,
					H = {
						top: E.top - D.top + b.top,
						bottom: D.bottom - E.bottom + b.bottom,
						left: E.left - D.left + b.left,
						right: D.right - E.right + b.right,
					},
					S = e.modifiersData.offset;
				if (h === B && S) {
					var I = S[r];
					Object.keys(H).forEach(function (e) {
						var t = [C, M].indexOf(e) >= 0 ? 1 : -1,
							n = [k, M].indexOf(e) >= 0 ? 'y' : 'x';
						H[e] += I[n] * t;
					});
				}
				return H;
			}
			function pe(e, t, n) {
				return a(e, l(t, n));
			}
			const de = {
				name: 'preventOverflow',
				enabled: !0,
				phase: 'main',
				fn: function (e) {
					var t = e.state,
						n = e.options,
						o = e.name,
						i = n.mainAxis,
						r = void 0 === i || i,
						s = n.altAxis,
						c = void 0 !== s && s,
						f = n.boundary,
						p = n.rootBoundary,
						d = n.altBoundary,
						u = n.padding,
						h = n.tether,
						g = void 0 === h || h,
						m = n.tetherOffset,
						v = void 0 === m ? 0 : m,
						y = fe(t, {
							boundary: f,
							rootBoundary: p,
							padding: u,
							altBoundary: d,
						}),
						w = J(t.placement),
						x = X(t.placement),
						O = !x,
						L = Y(w),
						E = 'x' === L ? 'y' : 'x',
						T = t.modifiersData.popperOffsets,
						D = t.rects.reference,
						P = t.rects.popper,
						S =
							'function' == typeof v
								? v(Object.assign({}, t.rects, { placement: t.placement }))
								: v,
						W =
							'number' == typeof S
								? { mainAxis: S, altAxis: S }
								: Object.assign({ mainAxis: 0, altAxis: 0 }, S),
						q = t.modifiersData.offset
							? t.modifiersData.offset[t.placement]
							: null,
						B = { x: 0, y: 0 };
					if (T) {
						if (r) {
							var R,
								I = 'y' === L ? k : A,
								V = 'y' === L ? M : C,
								$ = 'y' === L ? 'height' : 'width',
								F = T[L],
								N = F + y[I],
								_ = F - y[V],
								U = g ? -P[$] / 2 : 0,
								z = x === H ? D[$] : P[$],
								G = x === H ? -P[$] : -D[$],
								K = t.elements.arrow,
								Q = g && K ? b(K) : { width: 0, height: 0 },
								Z = t.modifiersData['arrow#persistent']
									? t.modifiersData['arrow#persistent'].padding
									: { top: 0, right: 0, bottom: 0, left: 0 },
								ee = Z[I],
								te = Z[V],
								ne = pe(0, D[$], Q[$]),
								oe = O
									? D[$] / 2 - U - ne - ee - W.mainAxis
									: z - ne - ee - W.mainAxis,
								ie = O
									? -D[$] / 2 + U + ne + te + W.mainAxis
									: G + ne + te + W.mainAxis,
								re = t.elements.arrow && j(t.elements.arrow),
								se = re
									? 'y' === L
										? re.clientTop || 0
										: re.clientLeft || 0
									: 0,
								ae = null != (R = null == q ? void 0 : q[L]) ? R : 0,
								le = F + ie - ae,
								ce = pe(g ? l(N, F + oe - ae - se) : N, F, g ? a(_, le) : _);
							(T[L] = ce), (B[L] = ce - F);
						}
						if (c) {
							var de,
								ue = 'x' === L ? k : A,
								he = 'x' === L ? M : C,
								ge = T[E],
								me = 'y' === E ? 'height' : 'width',
								ve = ge + y[ue],
								ye = ge - y[he],
								we = -1 !== [k, A].indexOf(w),
								be = null != (de = null == q ? void 0 : q[E]) ? de : 0,
								xe = we ? ve : ge - D[me] - P[me] - be + W.altAxis,
								Oe = we ? ge + D[me] + P[me] - be - W.altAxis : ye,
								Le =
									g && we
										? (function (e, t, n) {
												var o = pe(e, t, n);
												return o > n ? n : o;
											})(xe, ge, Oe)
										: pe(g ? xe : ve, ge, g ? Oe : ye);
							(T[E] = Le), (B[E] = Le - ge);
						}
						t.modifiersData[o] = B;
					}
				},
				requiresIfExists: ['offset'],
			};
			const ue = {
				name: 'arrow',
				enabled: !0,
				phase: 'main',
				fn: function (e) {
					var t,
						n = e.state,
						o = e.name,
						i = e.options,
						r = n.elements.arrow,
						s = n.modifiersData.popperOffsets,
						a = J(n.placement),
						l = Y(a),
						c = [A, C].indexOf(a) >= 0 ? 'height' : 'width';
					if (r && s) {
						var f = (function (e, t) {
								return le(
									'number' !=
										typeof (e =
											'function' == typeof e
												? e(
														Object.assign({}, t.rects, {
															placement: t.placement,
														}),
													)
												: e)
										? e
										: ce(e, P),
								);
							})(i.padding, n),
							p = b(r),
							d = 'y' === l ? k : A,
							u = 'y' === l ? M : C,
							h =
								n.rects.reference[c] +
								n.rects.reference[l] -
								s[l] -
								n.rects.popper[c],
							g = s[l] - n.rects.reference[l],
							m = j(r),
							v = m
								? 'y' === l
									? m.clientHeight || 0
									: m.clientWidth || 0
								: 0,
							y = h / 2 - g / 2,
							w = f[d],
							x = v - p[c] - f[u],
							O = v / 2 - p[c] / 2 + y,
							L = pe(w, O, x),
							E = l;
						n.modifiersData[o] =
							(((t = {})[E] = L), (t.centerOffset = L - O), t);
					}
				},
				effect: function (e) {
					var t = e.state,
						n = e.options.element,
						o = void 0 === n ? '[data-popper-arrow]' : n;
					null != o &&
						('string' != typeof o ||
							(o = t.elements.popper.querySelector(o))) &&
						ie(t.elements.popper, o) &&
						(t.elements.arrow = o);
				},
				requires: ['popperOffsets'],
				requiresIfExists: ['preventOverflow'],
			};
			function he(e, t, n) {
				return (
					void 0 === n && (n = { x: 0, y: 0 }),
					{
						top: e.top - t.height - n.y,
						right: e.right - t.width + n.x,
						bottom: e.bottom - t.height + n.y,
						left: e.left - t.width - n.x,
					}
				);
			}
			function ge(e) {
				return [k, C, M, A].some(function (t) {
					return e[t] >= 0;
				});
			}
			var me = U({
				defaultModifiers: [
					{
						name: 'eventListeners',
						enabled: !0,
						phase: 'write',
						fn: function () {},
						effect: function (e) {
							var t = e.state,
								n = e.instance,
								i = e.options,
								r = i.scroll,
								s = void 0 === r || r,
								a = i.resize,
								l = void 0 === a || a,
								c = o(t.elements.popper),
								f = [].concat(
									t.scrollParents.reference,
									t.scrollParents.popper,
								);
							return (
								s &&
									f.forEach(function (e) {
										e.addEventListener('scroll', n.update, z);
									}),
								l && c.addEventListener('resize', n.update, z),
								function () {
									s &&
										f.forEach(function (e) {
											e.removeEventListener('scroll', n.update, z);
										}),
										l && c.removeEventListener('resize', n.update, z);
								}
							);
						},
						data: {},
					},
					{
						name: 'popperOffsets',
						enabled: !0,
						phase: 'read',
						fn: function (e) {
							var t = e.state,
								n = e.name;
							t.modifiersData[n] = G({
								reference: t.rects.reference,
								element: t.rects.popper,
								strategy: 'absolute',
								placement: t.placement,
							});
						},
						data: {},
					},
					{
						name: 'computeStyles',
						enabled: !0,
						phase: 'beforeWrite',
						fn: function (e) {
							var t = e.state,
								n = e.options,
								o = n.gpuAcceleration,
								i = void 0 === o || o,
								r = n.adaptive,
								s = void 0 === r || r,
								a = n.roundOffsets,
								l = void 0 === a || a,
								c = {
									placement: J(t.placement),
									variation: X(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: i,
									isFixed: 'fixed' === t.options.strategy,
								};
							null != t.modifiersData.popperOffsets &&
								(t.styles.popper = Object.assign(
									{},
									t.styles.popper,
									Q(
										Object.assign({}, c, {
											offsets: t.modifiersData.popperOffsets,
											position: t.options.strategy,
											adaptive: s,
											roundOffsets: l,
										}),
									),
								)),
								null != t.modifiersData.arrow &&
									(t.styles.arrow = Object.assign(
										{},
										t.styles.arrow,
										Q(
											Object.assign({}, c, {
												offsets: t.modifiersData.arrow,
												position: 'absolute',
												adaptive: !1,
												roundOffsets: l,
											}),
										),
									)),
								(t.attributes.popper = Object.assign({}, t.attributes.popper, {
									'data-popper-placement': t.placement,
								}));
						},
						data: {},
					},
					{
						name: 'applyStyles',
						enabled: !0,
						phase: 'write',
						fn: function (e) {
							var t = e.state;
							Object.keys(t.elements).forEach(function (e) {
								var n = t.styles[e] || {},
									o = t.attributes[e] || {},
									i = t.elements[e];
								r(i) &&
									h(i) &&
									(Object.assign(i.style, n),
									Object.keys(o).forEach(function (e) {
										var t = o[e];
										!1 === t
											? i.removeAttribute(e)
											: i.setAttribute(e, !0 === t ? '' : t);
									}));
							});
						},
						effect: function (e) {
							var t = e.state,
								n = {
									popper: {
										position: t.options.strategy,
										left: '0',
										top: '0',
										margin: '0',
									},
									arrow: { position: 'absolute' },
									reference: {},
								};
							return (
								Object.assign(t.elements.popper.style, n.popper),
								(t.styles = n),
								t.elements.arrow &&
									Object.assign(t.elements.arrow.style, n.arrow),
								function () {
									Object.keys(t.elements).forEach(function (e) {
										var o = t.elements[e],
											i = t.attributes[e] || {},
											s = Object.keys(
												t.styles.hasOwnProperty(e) ? t.styles[e] : n[e],
											).reduce(function (e, t) {
												return (e[t] = ''), e;
											}, {});
										r(o) &&
											h(o) &&
											(Object.assign(o.style, s),
											Object.keys(i).forEach(function (e) {
												o.removeAttribute(e);
											}));
									});
								}
							);
						},
						requires: ['computeStyles'],
					},
					Z,
					{
						name: 'flip',
						enabled: !0,
						phase: 'main',
						fn: function (e) {
							var t = e.state,
								n = e.options,
								o = e.name;
							if (!t.modifiersData[o]._skip) {
								for (
									var i = n.mainAxis,
										r = void 0 === i || i,
										s = n.altAxis,
										a = void 0 === s || s,
										l = n.fallbackPlacements,
										c = n.padding,
										f = n.boundary,
										p = n.rootBoundary,
										d = n.altBoundary,
										u = n.flipVariations,
										h = void 0 === u || u,
										g = n.allowedAutoPlacements,
										m = t.options.placement,
										v = J(m),
										y =
											l ||
											(v === m || !h
												? [te(m)]
												: (function (e) {
														if (J(e) === D) return [];
														var t = te(e);
														return [oe(e), t, oe(t)];
													})(m)),
										w = [m].concat(y).reduce(function (e, n) {
											return e.concat(
												J(n) === D
													? (function (e, t) {
															void 0 === t && (t = {});
															var n = t,
																o = n.placement,
																i = n.boundary,
																r = n.rootBoundary,
																s = n.padding,
																a = n.flipVariations,
																l = n.allowedAutoPlacements,
																c = void 0 === l ? V : l,
																f = X(o),
																p = f
																	? a
																		? I
																		: I.filter(function (e) {
																				return X(e) === f;
																			})
																	: P,
																d = p.filter(function (e) {
																	return c.indexOf(e) >= 0;
																});
															0 === d.length && (d = p);
															var u = d.reduce(function (t, n) {
																return (
																	(t[n] = fe(e, {
																		placement: n,
																		boundary: i,
																		rootBoundary: r,
																		padding: s,
																	})[J(n)]),
																	t
																);
															}, {});
															return Object.keys(u).sort(function (e, t) {
																return u[e] - u[t];
															});
														})(t, {
															placement: n,
															boundary: f,
															rootBoundary: p,
															padding: c,
															flipVariations: h,
															allowedAutoPlacements: g,
														})
													: n,
											);
										}, []),
										b = t.rects.reference,
										x = t.rects.popper,
										O = new Map(),
										L = !0,
										E = w[0],
										T = 0;
									T < w.length;
									T++
								) {
									var j = w[T],
										S = J(j),
										W = X(j) === H,
										q = [k, M].indexOf(S) >= 0,
										B = q ? 'width' : 'height',
										R = fe(t, {
											placement: j,
											boundary: f,
											rootBoundary: p,
											altBoundary: d,
											padding: c,
										}),
										$ = q ? (W ? C : A) : W ? M : k;
									b[B] > x[B] && ($ = te($));
									var F = te($),
										N = [];
									if (
										(r && N.push(R[S] <= 0),
										a && N.push(R[$] <= 0, R[F] <= 0),
										N.every(function (e) {
											return e;
										}))
									) {
										(E = j), (L = !1);
										break;
									}
									O.set(j, N);
								}
								if (L)
									for (
										var _ = function (e) {
												var t = w.find(function (t) {
													var n = O.get(t);
													if (n)
														return n.slice(0, e).every(function (e) {
															return e;
														});
												});
												if (t) return (E = t), 'break';
											},
											U = h ? 3 : 1;
										U > 0;
										U--
									) {
										if ('break' === _(U)) break;
									}
								t.placement !== E &&
									((t.modifiersData[o]._skip = !0),
									(t.placement = E),
									(t.reset = !0));
							}
						},
						requiresIfExists: ['offset'],
						data: { _skip: !1 },
					},
					de,
					ue,
					{
						name: 'hide',
						enabled: !0,
						phase: 'main',
						requiresIfExists: ['preventOverflow'],
						fn: function (e) {
							var t = e.state,
								n = e.name,
								o = t.rects.reference,
								i = t.rects.popper,
								r = t.modifiersData.preventOverflow,
								s = fe(t, { elementContext: 'reference' }),
								a = fe(t, { altBoundary: !0 }),
								l = he(s, o),
								c = he(a, i, r),
								f = ge(l),
								p = ge(c);
							(t.modifiersData[n] = {
								referenceClippingOffsets: l,
								popperEscapeOffsets: c,
								isReferenceHidden: f,
								hasPopperEscaped: p,
							}),
								(t.attributes.popper = Object.assign({}, t.attributes.popper, {
									'data-popper-reference-hidden': f,
									'data-popper-escaped': p,
								}));
						},
					},
				],
			});
		},
		189: (e, t, n) => {
			n.d(t, { lP: () => o });
			const o = {
				auto: 'auto',
				'auto-start': 'auto-start',
				'auto-end': 'auto-end',
				top: 'top',
				'top-left': 'top-start',
				'top-right': 'top-end',
				bottom: 'bottom',
				'bottom-left': 'bottom-start',
				'bottom-right': 'bottom-end',
				right: 'right',
				'right-start': 'right-start',
				'right-end': 'right-end',
				left: 'left',
				'left-start': 'left-start',
				'left-end': 'left-end',
			};
		},
		615: (e, t, n) => {
			n.d(t, { A: () => o });
			class o {
				constructor(e, t, n) {
					(this.el = e),
						(this.options = t),
						(this.events = n),
						(this.el = e),
						(this.options = t),
						(this.events = {});
				}
				createCollection(e, t) {
					var n;
					e.push({
						id:
							(null === (n = null == t ? void 0 : t.el) || void 0 === n
								? void 0
								: n.id) || e.length + 1,
						element: t,
					});
				}
				fireEvent(e, t = null) {
					if (this.events.hasOwnProperty(e)) return this.events[e](t);
				}
				on(e, t) {
					this.events[e] = t;
				}
			}
		},
		926: (e, t, n) => {
			n.d(t, { JD: () => i, gj: () => o, yd: () => r });
			/*
			 * @version: 2.7.0
			 * @author: Preline Labs Ltd.
			 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
			 * Copyright 2024 Preline Labs Ltd.
			 */
			const o = (e, t, n = '') =>
				(window.getComputedStyle(e).getPropertyValue(t) || n).replace(' ', '');
			const i = (e, t, n = null) => {
					const o = new CustomEvent(e, {
						detail: { payload: n },
						bubbles: !0,
						cancelable: !0,
						composed: !1,
					});
					t.dispatchEvent(o);
				},
				r = (e, t) => {
					const n = () => {
							t(), e.removeEventListener('transitionend', n, !0);
						},
						o = window.getComputedStyle(e),
						i = o.getPropertyValue('transition-duration');
					'none' !== o.getPropertyValue('transition-property') &&
					parseFloat(i) > 0
						? e.addEventListener('transitionend', n, !0)
						: t();
				};
		},
	},
	t = {};
function n(o) {
	var i = t[o];
	if (void 0 !== i) return i.exports;
	var r = (t[o] = { exports: {} });
	return e[o](r, r.exports, n), r.exports;
}
(n.d = (e, t) => {
	for (var o in t)
		n.o(t, o) &&
			!n.o(e, o) &&
			Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
}),
	(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var o = {};
n.d(o, { A: () => c });
var i = n(316),
	r = n(926),
	s = n(615),
	a = n(189);
/*
 * HSTooltip
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class l extends s.A {
	constructor(e, t, n) {
		super(e, t, n),
			this.el &&
				((this.toggle = this.el.querySelector('.hs-tooltip-toggle') || this.el),
				(this.content = this.el.querySelector('.hs-tooltip-content')),
				(this.eventMode = (0, r.gj)(this.el, '--trigger') || 'hover'),
				(this.preventPopper = (0, r.gj)(this.el, '--prevent-popper', 'false')),
				(this.placement = (0, r.gj)(this.el, '--placement')),
				(this.strategy = (0, r.gj)(this.el, '--strategy')),
				(this.scope = (0, r.gj)(this.el, '--scope') || 'parent')),
			this.el && this.toggle && this.content && this.init();
	}
	toggleClick() {
		this.click();
	}
	toggleFocus() {
		this.focus();
	}
	toggleMouseEnter() {
		this.enter();
	}
	toggleMouseLeave() {
		this.leave();
	}
	toggleHandle() {
		this.hide(),
			this.toggle.removeEventListener('click', this.onToggleHandleListener, !0),
			this.toggle.removeEventListener('blur', this.onToggleHandleListener, !0);
	}
	init() {
		this.createCollection(window.$hsTooltipCollection, this),
			'click' === this.eventMode
				? ((this.onToggleClickListener = () => this.toggleClick()),
					this.toggle.addEventListener('click', this.onToggleClickListener))
				: 'focus' === this.eventMode
					? ((this.onToggleFocusListener = () => this.toggleFocus()),
						this.toggle.addEventListener('click', this.onToggleFocusListener))
					: 'hover' === this.eventMode &&
						((this.onToggleMouseEnterListener = () => this.toggleMouseEnter()),
						(this.onToggleMouseLeaveListener = () => this.toggleMouseLeave()),
						this.toggle.addEventListener(
							'mouseenter',
							this.onToggleMouseEnterListener,
						),
						this.toggle.addEventListener(
							'mouseleave',
							this.onToggleMouseLeaveListener,
						)),
			'false' === this.preventPopper && this.buildPopper();
	}
	enter() {
		this._show();
	}
	leave() {
		this.hide();
	}
	click() {
		if (this.el.classList.contains('show')) return !1;
		this._show(),
			(this.onToggleHandleListener = () => {
				setTimeout(() => this.toggleHandle());
			}),
			this.toggle.addEventListener('click', this.onToggleHandleListener, !0),
			this.toggle.addEventListener('blur', this.onToggleHandleListener, !0);
	}
	focus() {
		this._show();
		const e = () => {
			this.hide(), this.toggle.removeEventListener('blur', e, !0);
		};
		this.toggle.addEventListener('blur', e, !0);
	}
	buildPopper() {
		'window' === this.scope && document.body.appendChild(this.content),
			(this.popperInstance = (0, i.n4)(this.toggle, this.content, {
				placement: a.lP[this.placement] || 'top',
				strategy: this.strategy || 'fixed',
				modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
			}));
	}
	_show() {
		this.content.classList.remove('hidden'),
			'window' === this.scope && this.content.classList.add('show'),
			'false' === this.preventPopper &&
				(this.popperInstance.setOptions((e) =>
					Object.assign(Object.assign({}, e), {
						modifiers: [
							...e.modifiers,
							{ name: 'eventListeners', enabled: !0 },
						],
					}),
				),
				this.popperInstance.update()),
			setTimeout(() => {
				this.el.classList.add('show'),
					this.fireEvent('show', this.el),
					(0, r.JD)('show.hs.tooltip', this.el, this.el);
			});
	}
	show() {
		switch (this.eventMode) {
			case 'click':
				this.click();
				break;
			case 'focus':
				this.focus();
				break;
			default:
				this.enter();
		}
		this.toggle.focus(), (this.toggle.style.outline = 'none');
	}
	hide() {
		this.el.classList.remove('show'),
			'window' === this.scope && this.content.classList.remove('show'),
			'false' === this.preventPopper &&
				this.popperInstance.setOptions((e) =>
					Object.assign(Object.assign({}, e), {
						modifiers: [
							...e.modifiers,
							{ name: 'eventListeners', enabled: !1 },
						],
					}),
				),
			this.fireEvent('hide', this.el),
			(0, r.JD)('hide.hs.tooltip', this.el, this.el),
			(0, r.yd)(this.content, () => {
				if (this.el.classList.contains('show')) return !1;
				this.content.classList.add('hidden'), (this.toggle.style.outline = '');
			});
	}
	destroy() {
		this.el.classList.remove('show'),
			this.content.classList.add('hidden'),
			'click' === this.eventMode
				? this.toggle.removeEventListener('click', this.onToggleClickListener)
				: 'focus' === this.eventMode
					? this.toggle.removeEventListener('click', this.onToggleFocusListener)
					: 'hover' === this.eventMode &&
						(this.toggle.removeEventListener(
							'mouseenter',
							this.onToggleMouseEnterListener,
						),
						this.toggle.removeEventListener(
							'mouseleave',
							this.onToggleMouseLeaveListener,
						)),
			this.toggle.removeEventListener('click', this.onToggleHandleListener, !0),
			this.toggle.removeEventListener('blur', this.onToggleHandleListener, !0),
			this.popperInstance.destroy(),
			(this.popperInstance = null),
			(window.$hsTooltipCollection = window.$hsTooltipCollection.filter(
				({ element: e }) => e.el !== this.el,
			));
	}
	static getInstance(e, t = !1) {
		const n = window.$hsTooltipCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return n ? (t ? n : n.element.el) : null;
	}
	static autoInit() {
		window.$hsTooltipCollection || (window.$hsTooltipCollection = []),
			window.$hsTooltipCollection &&
				(window.$hsTooltipCollection = window.$hsTooltipCollection.filter(
					({ element: e }) => document.contains(e.el),
				)),
			document.querySelectorAll('.hs-tooltip').forEach((e) => {
				window.$hsTooltipCollection.find((t) => {
					var n;
					return (
						(null === (n = null == t ? void 0 : t.element) || void 0 === n
							? void 0
							: n.el) === e
					);
				}) || new l(e);
			});
	}
	static show(e) {
		const t = window.$hsTooltipCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		t && t.element.show();
	}
	static hide(e) {
		const t = window.$hsTooltipCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		t && t.element.hide();
	}
	static on(e, t, n) {
		const o = window.$hsTooltipCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		o && (o.element.events[e] = n);
	}
}
window.addEventListener('load', () => {
	l.autoInit();
}),
	'undefined' != typeof window && (window.HSTooltip = l);
const c = l;
var f = o.A;
export { f as default };
