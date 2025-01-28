!(function (e, t) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = t();
	else if ('function' == typeof define && define.amd) define([], t);
	else {
		var n = t();
		for (var o in n) ('object' == typeof exports ? exports : e)[o] = n[o];
	}
})(self, () =>
	(() => {
		'use strict';
		var e = {
				170: (e, t, n) => {
					n.r(t),
						n.d(t, {
							afterMain: () => x,
							afterRead: () => w,
							afterWrite: () => O,
							applyStyles: () => M,
							arrow: () => G,
							auto: () => a,
							basePlacements: () => l,
							beforeMain: () => b,
							beforeRead: () => g,
							beforeWrite: () => C,
							bottom: () => r,
							clippingParents: () => d,
							computeStyles: () => ne,
							createPopper: () => Me,
							createPopperBase: () => De,
							createPopperLite: () => _e,
							detectOverflow: () => ye,
							end: () => u,
							eventListeners: () => re,
							flip: () => we,
							hide: () => xe,
							left: () => s,
							main: () => E,
							modifierPhases: () => L,
							offset: () => Ce,
							placements: () => v,
							popper: () => f,
							popperGenerator: () => Te,
							popperOffsets: () => Se,
							preventOverflow: () => Oe,
							read: () => y,
							reference: () => h,
							right: () => i,
							start: () => c,
							top: () => o,
							variationPlacements: () => m,
							viewport: () => p,
							write: () => S,
						});
					var o = 'top',
						r = 'bottom',
						i = 'right',
						s = 'left',
						a = 'auto',
						l = [o, r, i, s],
						c = 'start',
						u = 'end',
						d = 'clippingParents',
						p = 'viewport',
						f = 'popper',
						h = 'reference',
						m = l.reduce(function (e, t) {
							return e.concat([t + '-' + c, t + '-' + u]);
						}, []),
						v = [].concat(l, [a]).reduce(function (e, t) {
							return e.concat([t, t + '-' + c, t + '-' + u]);
						}, []),
						g = 'beforeRead',
						y = 'read',
						w = 'afterRead',
						b = 'beforeMain',
						E = 'main',
						x = 'afterMain',
						C = 'beforeWrite',
						S = 'write',
						O = 'afterWrite',
						L = [g, y, w, b, E, x, C, S, O];
					function P(e) {
						return e ? (e.nodeName || '').toLowerCase() : null;
					}
					function A(e) {
						if (null == e) return window;
						if ('[object Window]' !== e.toString()) {
							var t = e.ownerDocument;
							return (t && t.defaultView) || window;
						}
						return e;
					}
					function I(e) {
						return e instanceof A(e).Element || e instanceof Element;
					}
					function T(e) {
						return e instanceof A(e).HTMLElement || e instanceof HTMLElement;
					}
					function D(e) {
						return (
							'undefined' != typeof ShadowRoot &&
							(e instanceof A(e).ShadowRoot || e instanceof ShadowRoot)
						);
					}
					const M = {
						name: 'applyStyles',
						enabled: !0,
						phase: 'write',
						fn: function (e) {
							var t = e.state;
							Object.keys(t.elements).forEach(function (e) {
								var n = t.styles[e] || {},
									o = t.attributes[e] || {},
									r = t.elements[e];
								T(r) &&
									P(r) &&
									(Object.assign(r.style, n),
									Object.keys(o).forEach(function (e) {
										var t = o[e];
										!1 === t
											? r.removeAttribute(e)
											: r.setAttribute(e, !0 === t ? '' : t);
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
											r = t.attributes[e] || {},
											i = Object.keys(
												t.styles.hasOwnProperty(e) ? t.styles[e] : n[e],
											).reduce(function (e, t) {
												return (e[t] = ''), e;
											}, {});
										T(o) &&
											P(o) &&
											(Object.assign(o.style, i),
											Object.keys(r).forEach(function (e) {
												o.removeAttribute(e);
											}));
									});
								}
							);
						},
						requires: ['computeStyles'],
					};
					function _(e) {
						return e.split('-')[0];
					}
					var k = Math.max,
						H = Math.min,
						j = Math.round;
					function B() {
						var e = navigator.userAgentData;
						return null != e && e.brands && Array.isArray(e.brands)
							? e.brands
									.map(function (e) {
										return e.brand + '/' + e.version;
									})
									.join(' ')
							: navigator.userAgent;
					}
					function R() {
						return !/^((?!chrome|android).)*safari/i.test(B());
					}
					function q(e, t, n) {
						void 0 === t && (t = !1), void 0 === n && (n = !1);
						var o = e.getBoundingClientRect(),
							r = 1,
							i = 1;
						t &&
							T(e) &&
							((r = (e.offsetWidth > 0 && j(o.width) / e.offsetWidth) || 1),
							(i = (e.offsetHeight > 0 && j(o.height) / e.offsetHeight) || 1));
						var s = (I(e) ? A(e) : window).visualViewport,
							a = !R() && n,
							l = (o.left + (a && s ? s.offsetLeft : 0)) / r,
							c = (o.top + (a && s ? s.offsetTop : 0)) / i,
							u = o.width / r,
							d = o.height / i;
						return {
							width: u,
							height: d,
							top: c,
							right: l + u,
							bottom: c + d,
							left: l,
							x: l,
							y: c,
						};
					}
					function V(e) {
						var t = q(e),
							n = e.offsetWidth,
							o = e.offsetHeight;
						return (
							Math.abs(t.width - n) <= 1 && (n = t.width),
							Math.abs(t.height - o) <= 1 && (o = t.height),
							{ x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
						);
					}
					function W(e, t) {
						var n = t.getRootNode && t.getRootNode();
						if (e.contains(t)) return !0;
						if (n && D(n)) {
							var o = t;
							do {
								if (o && e.isSameNode(o)) return !0;
								o = o.parentNode || o.host;
							} while (o);
						}
						return !1;
					}
					function Y(e) {
						return A(e).getComputedStyle(e);
					}
					function $(e) {
						return ['table', 'td', 'th'].indexOf(P(e)) >= 0;
					}
					function N(e) {
						return ((I(e) ? e.ownerDocument : e.document) || window.document)
							.documentElement;
					}
					function K(e) {
						return 'html' === P(e)
							? e
							: e.assignedSlot ||
									e.parentNode ||
									(D(e) ? e.host : null) ||
									N(e);
					}
					function z(e) {
						return T(e) && 'fixed' !== Y(e).position ? e.offsetParent : null;
					}
					function F(e) {
						for (
							var t = A(e), n = z(e);
							n && $(n) && 'static' === Y(n).position;

						)
							n = z(n);
						return n &&
							('html' === P(n) ||
								('body' === P(n) && 'static' === Y(n).position))
							? t
							: n ||
									(function (e) {
										var t = /firefox/i.test(B());
										if (
											/Trident/i.test(B()) &&
											T(e) &&
											'fixed' === Y(e).position
										)
											return null;
										var n = K(e);
										for (
											D(n) && (n = n.host);
											T(n) && ['html', 'body'].indexOf(P(n)) < 0;

										) {
											var o = Y(n);
											if (
												'none' !== o.transform ||
												'none' !== o.perspective ||
												'paint' === o.contain ||
												-1 !==
													['transform', 'perspective'].indexOf(o.willChange) ||
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
					function U(e) {
						return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
					}
					function X(e, t, n) {
						return k(e, H(t, n));
					}
					function Z(e) {
						return Object.assign(
							{},
							{ top: 0, right: 0, bottom: 0, left: 0 },
							e,
						);
					}
					function J(e, t) {
						return t.reduce(function (t, n) {
							return (t[n] = e), t;
						}, {});
					}
					const G = {
						name: 'arrow',
						enabled: !0,
						phase: 'main',
						fn: function (e) {
							var t,
								n = e.state,
								a = e.name,
								c = e.options,
								u = n.elements.arrow,
								d = n.modifiersData.popperOffsets,
								p = _(n.placement),
								f = U(p),
								h = [s, i].indexOf(p) >= 0 ? 'height' : 'width';
							if (u && d) {
								var m = (function (e, t) {
										return Z(
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
												: J(e, l),
										);
									})(c.padding, n),
									v = V(u),
									g = 'y' === f ? o : s,
									y = 'y' === f ? r : i,
									w =
										n.rects.reference[h] +
										n.rects.reference[f] -
										d[f] -
										n.rects.popper[h],
									b = d[f] - n.rects.reference[f],
									E = F(u),
									x = E
										? 'y' === f
											? E.clientHeight || 0
											: E.clientWidth || 0
										: 0,
									C = w / 2 - b / 2,
									S = m[g],
									O = x - v[h] - m[y],
									L = x / 2 - v[h] / 2 + C,
									P = X(S, L, O),
									A = f;
								n.modifiersData[a] =
									(((t = {})[A] = P), (t.centerOffset = P - L), t);
							}
						},
						effect: function (e) {
							var t = e.state,
								n = e.options.element,
								o = void 0 === n ? '[data-popper-arrow]' : n;
							null != o &&
								('string' != typeof o ||
									(o = t.elements.popper.querySelector(o))) &&
								W(t.elements.popper, o) &&
								(t.elements.arrow = o);
						},
						requires: ['popperOffsets'],
						requiresIfExists: ['preventOverflow'],
					};
					function Q(e) {
						return e.split('-')[1];
					}
					var ee = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
					function te(e) {
						var t,
							n = e.popper,
							a = e.popperRect,
							l = e.placement,
							c = e.variation,
							d = e.offsets,
							p = e.position,
							f = e.gpuAcceleration,
							h = e.adaptive,
							m = e.roundOffsets,
							v = e.isFixed,
							g = d.x,
							y = void 0 === g ? 0 : g,
							w = d.y,
							b = void 0 === w ? 0 : w,
							E = 'function' == typeof m ? m({ x: y, y: b }) : { x: y, y: b };
						(y = E.x), (b = E.y);
						var x = d.hasOwnProperty('x'),
							C = d.hasOwnProperty('y'),
							S = s,
							O = o,
							L = window;
						if (h) {
							var P = F(n),
								I = 'clientHeight',
								T = 'clientWidth';
							if (
								(P === A(n) &&
									'static' !== Y((P = N(n))).position &&
									'absolute' === p &&
									((I = 'scrollHeight'), (T = 'scrollWidth')),
								l === o || ((l === s || l === i) && c === u))
							)
								(O = r),
									(b -=
										(v && P === L && L.visualViewport
											? L.visualViewport.height
											: P[I]) - a.height),
									(b *= f ? 1 : -1);
							if (l === s || ((l === o || l === r) && c === u))
								(S = i),
									(y -=
										(v && P === L && L.visualViewport
											? L.visualViewport.width
											: P[T]) - a.width),
									(y *= f ? 1 : -1);
						}
						var D,
							M = Object.assign({ position: p }, h && ee),
							_ =
								!0 === m
									? (function (e, t) {
											var n = e.x,
												o = e.y,
												r = t.devicePixelRatio || 1;
											return { x: j(n * r) / r || 0, y: j(o * r) / r || 0 };
										})({ x: y, y: b }, A(n))
									: { x: y, y: b };
						return (
							(y = _.x),
							(b = _.y),
							f
								? Object.assign(
										{},
										M,
										(((D = {})[O] = C ? '0' : ''),
										(D[S] = x ? '0' : ''),
										(D.transform =
											(L.devicePixelRatio || 1) <= 1
												? 'translate(' + y + 'px, ' + b + 'px)'
												: 'translate3d(' + y + 'px, ' + b + 'px, 0)'),
										D),
									)
								: Object.assign(
										{},
										M,
										(((t = {})[O] = C ? b + 'px' : ''),
										(t[S] = x ? y + 'px' : ''),
										(t.transform = ''),
										t),
									)
						);
					}
					const ne = {
						name: 'computeStyles',
						enabled: !0,
						phase: 'beforeWrite',
						fn: function (e) {
							var t = e.state,
								n = e.options,
								o = n.gpuAcceleration,
								r = void 0 === o || o,
								i = n.adaptive,
								s = void 0 === i || i,
								a = n.roundOffsets,
								l = void 0 === a || a,
								c = {
									placement: _(t.placement),
									variation: Q(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: r,
									isFixed: 'fixed' === t.options.strategy,
								};
							null != t.modifiersData.popperOffsets &&
								(t.styles.popper = Object.assign(
									{},
									t.styles.popper,
									te(
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
										te(
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
					};
					var oe = { passive: !0 };
					const re = {
						name: 'eventListeners',
						enabled: !0,
						phase: 'write',
						fn: function () {},
						effect: function (e) {
							var t = e.state,
								n = e.instance,
								o = e.options,
								r = o.scroll,
								i = void 0 === r || r,
								s = o.resize,
								a = void 0 === s || s,
								l = A(t.elements.popper),
								c = [].concat(
									t.scrollParents.reference,
									t.scrollParents.popper,
								);
							return (
								i &&
									c.forEach(function (e) {
										e.addEventListener('scroll', n.update, oe);
									}),
								a && l.addEventListener('resize', n.update, oe),
								function () {
									i &&
										c.forEach(function (e) {
											e.removeEventListener('scroll', n.update, oe);
										}),
										a && l.removeEventListener('resize', n.update, oe);
								}
							);
						},
						data: {},
					};
					var ie = {
						left: 'right',
						right: 'left',
						bottom: 'top',
						top: 'bottom',
					};
					function se(e) {
						return e.replace(/left|right|bottom|top/g, function (e) {
							return ie[e];
						});
					}
					var ae = { start: 'end', end: 'start' };
					function le(e) {
						return e.replace(/start|end/g, function (e) {
							return ae[e];
						});
					}
					function ce(e) {
						var t = A(e);
						return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
					}
					function ue(e) {
						return q(N(e)).left + ce(e).scrollLeft;
					}
					function de(e) {
						var t = Y(e),
							n = t.overflow,
							o = t.overflowX,
							r = t.overflowY;
						return /auto|scroll|overlay|hidden/.test(n + r + o);
					}
					function pe(e) {
						return ['html', 'body', '#document'].indexOf(P(e)) >= 0
							? e.ownerDocument.body
							: T(e) && de(e)
								? e
								: pe(K(e));
					}
					function fe(e, t) {
						var n;
						void 0 === t && (t = []);
						var o = pe(e),
							r = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
							i = A(o),
							s = r ? [i].concat(i.visualViewport || [], de(o) ? o : []) : o,
							a = t.concat(s);
						return r ? a : a.concat(fe(K(s)));
					}
					function he(e) {
						return Object.assign({}, e, {
							left: e.x,
							top: e.y,
							right: e.x + e.width,
							bottom: e.y + e.height,
						});
					}
					function me(e, t, n) {
						return t === p
							? he(
									(function (e, t) {
										var n = A(e),
											o = N(e),
											r = n.visualViewport,
											i = o.clientWidth,
											s = o.clientHeight,
											a = 0,
											l = 0;
										if (r) {
											(i = r.width), (s = r.height);
											var c = R();
											(c || (!c && 'fixed' === t)) &&
												((a = r.offsetLeft), (l = r.offsetTop));
										}
										return { width: i, height: s, x: a + ue(e), y: l };
									})(e, n),
								)
							: I(t)
								? (function (e, t) {
										var n = q(e, !1, 'fixed' === t);
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
								: he(
										(function (e) {
											var t,
												n = N(e),
												o = ce(e),
												r = null == (t = e.ownerDocument) ? void 0 : t.body,
												i = k(
													n.scrollWidth,
													n.clientWidth,
													r ? r.scrollWidth : 0,
													r ? r.clientWidth : 0,
												),
												s = k(
													n.scrollHeight,
													n.clientHeight,
													r ? r.scrollHeight : 0,
													r ? r.clientHeight : 0,
												),
												a = -o.scrollLeft + ue(e),
												l = -o.scrollTop;
											return (
												'rtl' === Y(r || n).direction &&
													(a += k(n.clientWidth, r ? r.clientWidth : 0) - i),
												{ width: i, height: s, x: a, y: l }
											);
										})(N(e)),
									);
					}
					function ve(e, t, n, o) {
						var r =
								'clippingParents' === t
									? (function (e) {
											var t = fe(K(e)),
												n =
													['absolute', 'fixed'].indexOf(Y(e).position) >= 0 &&
													T(e)
														? F(e)
														: e;
											return I(n)
												? t.filter(function (e) {
														return I(e) && W(e, n) && 'body' !== P(e);
													})
												: [];
										})(e)
									: [].concat(t),
							i = [].concat(r, [n]),
							s = i[0],
							a = i.reduce(
								function (t, n) {
									var r = me(e, n, o);
									return (
										(t.top = k(r.top, t.top)),
										(t.right = H(r.right, t.right)),
										(t.bottom = H(r.bottom, t.bottom)),
										(t.left = k(r.left, t.left)),
										t
									);
								},
								me(e, s, o),
							);
						return (
							(a.width = a.right - a.left),
							(a.height = a.bottom - a.top),
							(a.x = a.left),
							(a.y = a.top),
							a
						);
					}
					function ge(e) {
						var t,
							n = e.reference,
							a = e.element,
							l = e.placement,
							d = l ? _(l) : null,
							p = l ? Q(l) : null,
							f = n.x + n.width / 2 - a.width / 2,
							h = n.y + n.height / 2 - a.height / 2;
						switch (d) {
							case o:
								t = { x: f, y: n.y - a.height };
								break;
							case r:
								t = { x: f, y: n.y + n.height };
								break;
							case i:
								t = { x: n.x + n.width, y: h };
								break;
							case s:
								t = { x: n.x - a.width, y: h };
								break;
							default:
								t = { x: n.x, y: n.y };
						}
						var m = d ? U(d) : null;
						if (null != m) {
							var v = 'y' === m ? 'height' : 'width';
							switch (p) {
								case c:
									t[m] = t[m] - (n[v] / 2 - a[v] / 2);
									break;
								case u:
									t[m] = t[m] + (n[v] / 2 - a[v] / 2);
							}
						}
						return t;
					}
					function ye(e, t) {
						void 0 === t && (t = {});
						var n = t,
							s = n.placement,
							a = void 0 === s ? e.placement : s,
							c = n.strategy,
							u = void 0 === c ? e.strategy : c,
							m = n.boundary,
							v = void 0 === m ? d : m,
							g = n.rootBoundary,
							y = void 0 === g ? p : g,
							w = n.elementContext,
							b = void 0 === w ? f : w,
							E = n.altBoundary,
							x = void 0 !== E && E,
							C = n.padding,
							S = void 0 === C ? 0 : C,
							O = Z('number' != typeof S ? S : J(S, l)),
							L = b === f ? h : f,
							P = e.rects.popper,
							A = e.elements[x ? L : b],
							T = ve(
								I(A) ? A : A.contextElement || N(e.elements.popper),
								v,
								y,
								u,
							),
							D = q(e.elements.reference),
							M = ge({
								reference: D,
								element: P,
								strategy: 'absolute',
								placement: a,
							}),
							_ = he(Object.assign({}, P, M)),
							k = b === f ? _ : D,
							H = {
								top: T.top - k.top + O.top,
								bottom: k.bottom - T.bottom + O.bottom,
								left: T.left - k.left + O.left,
								right: k.right - T.right + O.right,
							},
							j = e.modifiersData.offset;
						if (b === f && j) {
							var B = j[a];
							Object.keys(H).forEach(function (e) {
								var t = [i, r].indexOf(e) >= 0 ? 1 : -1,
									n = [o, r].indexOf(e) >= 0 ? 'y' : 'x';
								H[e] += B[n] * t;
							});
						}
						return H;
					}
					const we = {
						name: 'flip',
						enabled: !0,
						phase: 'main',
						fn: function (e) {
							var t = e.state,
								n = e.options,
								u = e.name;
							if (!t.modifiersData[u]._skip) {
								for (
									var d = n.mainAxis,
										p = void 0 === d || d,
										f = n.altAxis,
										h = void 0 === f || f,
										g = n.fallbackPlacements,
										y = n.padding,
										w = n.boundary,
										b = n.rootBoundary,
										E = n.altBoundary,
										x = n.flipVariations,
										C = void 0 === x || x,
										S = n.allowedAutoPlacements,
										O = t.options.placement,
										L = _(O),
										P =
											g ||
											(L === O || !C
												? [se(O)]
												: (function (e) {
														if (_(e) === a) return [];
														var t = se(e);
														return [le(e), t, le(t)];
													})(O)),
										A = [O].concat(P).reduce(function (e, n) {
											return e.concat(
												_(n) === a
													? (function (e, t) {
															void 0 === t && (t = {});
															var n = t,
																o = n.placement,
																r = n.boundary,
																i = n.rootBoundary,
																s = n.padding,
																a = n.flipVariations,
																c = n.allowedAutoPlacements,
																u = void 0 === c ? v : c,
																d = Q(o),
																p = d
																	? a
																		? m
																		: m.filter(function (e) {
																				return Q(e) === d;
																			})
																	: l,
																f = p.filter(function (e) {
																	return u.indexOf(e) >= 0;
																});
															0 === f.length && (f = p);
															var h = f.reduce(function (t, n) {
																return (
																	(t[n] = ye(e, {
																		placement: n,
																		boundary: r,
																		rootBoundary: i,
																		padding: s,
																	})[_(n)]),
																	t
																);
															}, {});
															return Object.keys(h).sort(function (e, t) {
																return h[e] - h[t];
															});
														})(t, {
															placement: n,
															boundary: w,
															rootBoundary: b,
															padding: y,
															flipVariations: C,
															allowedAutoPlacements: S,
														})
													: n,
											);
										}, []),
										I = t.rects.reference,
										T = t.rects.popper,
										D = new Map(),
										M = !0,
										k = A[0],
										H = 0;
									H < A.length;
									H++
								) {
									var j = A[H],
										B = _(j),
										R = Q(j) === c,
										q = [o, r].indexOf(B) >= 0,
										V = q ? 'width' : 'height',
										W = ye(t, {
											placement: j,
											boundary: w,
											rootBoundary: b,
											altBoundary: E,
											padding: y,
										}),
										Y = q ? (R ? i : s) : R ? r : o;
									I[V] > T[V] && (Y = se(Y));
									var $ = se(Y),
										N = [];
									if (
										(p && N.push(W[B] <= 0),
										h && N.push(W[Y] <= 0, W[$] <= 0),
										N.every(function (e) {
											return e;
										}))
									) {
										(k = j), (M = !1);
										break;
									}
									D.set(j, N);
								}
								if (M)
									for (
										var K = function (e) {
												var t = A.find(function (t) {
													var n = D.get(t);
													if (n)
														return n.slice(0, e).every(function (e) {
															return e;
														});
												});
												if (t) return (k = t), 'break';
											},
											z = C ? 3 : 1;
										z > 0;
										z--
									) {
										if ('break' === K(z)) break;
									}
								t.placement !== k &&
									((t.modifiersData[u]._skip = !0),
									(t.placement = k),
									(t.reset = !0));
							}
						},
						requiresIfExists: ['offset'],
						data: { _skip: !1 },
					};
					function be(e, t, n) {
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
					function Ee(e) {
						return [o, i, r, s].some(function (t) {
							return e[t] >= 0;
						});
					}
					const xe = {
						name: 'hide',
						enabled: !0,
						phase: 'main',
						requiresIfExists: ['preventOverflow'],
						fn: function (e) {
							var t = e.state,
								n = e.name,
								o = t.rects.reference,
								r = t.rects.popper,
								i = t.modifiersData.preventOverflow,
								s = ye(t, { elementContext: 'reference' }),
								a = ye(t, { altBoundary: !0 }),
								l = be(s, o),
								c = be(a, r, i),
								u = Ee(l),
								d = Ee(c);
							(t.modifiersData[n] = {
								referenceClippingOffsets: l,
								popperEscapeOffsets: c,
								isReferenceHidden: u,
								hasPopperEscaped: d,
							}),
								(t.attributes.popper = Object.assign({}, t.attributes.popper, {
									'data-popper-reference-hidden': u,
									'data-popper-escaped': d,
								}));
						},
					};
					const Ce = {
						name: 'offset',
						enabled: !0,
						phase: 'main',
						requires: ['popperOffsets'],
						fn: function (e) {
							var t = e.state,
								n = e.options,
								r = e.name,
								a = n.offset,
								l = void 0 === a ? [0, 0] : a,
								c = v.reduce(function (e, n) {
									return (
										(e[n] = (function (e, t, n) {
											var r = _(e),
												a = [s, o].indexOf(r) >= 0 ? -1 : 1,
												l =
													'function' == typeof n
														? n(Object.assign({}, t, { placement: e }))
														: n,
												c = l[0],
												u = l[1];
											return (
												(c = c || 0),
												(u = (u || 0) * a),
												[s, i].indexOf(r) >= 0 ? { x: u, y: c } : { x: c, y: u }
											);
										})(n, t.rects, l)),
										e
									);
								}, {}),
								u = c[t.placement],
								d = u.x,
								p = u.y;
							null != t.modifiersData.popperOffsets &&
								((t.modifiersData.popperOffsets.x += d),
								(t.modifiersData.popperOffsets.y += p)),
								(t.modifiersData[r] = c);
						},
					};
					const Se = {
						name: 'popperOffsets',
						enabled: !0,
						phase: 'read',
						fn: function (e) {
							var t = e.state,
								n = e.name;
							t.modifiersData[n] = ge({
								reference: t.rects.reference,
								element: t.rects.popper,
								strategy: 'absolute',
								placement: t.placement,
							});
						},
						data: {},
					};
					const Oe = {
						name: 'preventOverflow',
						enabled: !0,
						phase: 'main',
						fn: function (e) {
							var t = e.state,
								n = e.options,
								a = e.name,
								l = n.mainAxis,
								u = void 0 === l || l,
								d = n.altAxis,
								p = void 0 !== d && d,
								f = n.boundary,
								h = n.rootBoundary,
								m = n.altBoundary,
								v = n.padding,
								g = n.tether,
								y = void 0 === g || g,
								w = n.tetherOffset,
								b = void 0 === w ? 0 : w,
								E = ye(t, {
									boundary: f,
									rootBoundary: h,
									padding: v,
									altBoundary: m,
								}),
								x = _(t.placement),
								C = Q(t.placement),
								S = !C,
								O = U(x),
								L = 'x' === O ? 'y' : 'x',
								P = t.modifiersData.popperOffsets,
								A = t.rects.reference,
								I = t.rects.popper,
								T =
									'function' == typeof b
										? b(Object.assign({}, t.rects, { placement: t.placement }))
										: b,
								D =
									'number' == typeof T
										? { mainAxis: T, altAxis: T }
										: Object.assign({ mainAxis: 0, altAxis: 0 }, T),
								M = t.modifiersData.offset
									? t.modifiersData.offset[t.placement]
									: null,
								j = { x: 0, y: 0 };
							if (P) {
								if (u) {
									var B,
										R = 'y' === O ? o : s,
										q = 'y' === O ? r : i,
										W = 'y' === O ? 'height' : 'width',
										Y = P[O],
										$ = Y + E[R],
										N = Y - E[q],
										K = y ? -I[W] / 2 : 0,
										z = C === c ? A[W] : I[W],
										Z = C === c ? -I[W] : -A[W],
										J = t.elements.arrow,
										G = y && J ? V(J) : { width: 0, height: 0 },
										ee = t.modifiersData['arrow#persistent']
											? t.modifiersData['arrow#persistent'].padding
											: { top: 0, right: 0, bottom: 0, left: 0 },
										te = ee[R],
										ne = ee[q],
										oe = X(0, A[W], G[W]),
										re = S
											? A[W] / 2 - K - oe - te - D.mainAxis
											: z - oe - te - D.mainAxis,
										ie = S
											? -A[W] / 2 + K + oe + ne + D.mainAxis
											: Z + oe + ne + D.mainAxis,
										se = t.elements.arrow && F(t.elements.arrow),
										ae = se
											? 'y' === O
												? se.clientTop || 0
												: se.clientLeft || 0
											: 0,
										le = null != (B = null == M ? void 0 : M[O]) ? B : 0,
										ce = Y + ie - le,
										ue = X(y ? H($, Y + re - le - ae) : $, Y, y ? k(N, ce) : N);
									(P[O] = ue), (j[O] = ue - Y);
								}
								if (p) {
									var de,
										pe = 'x' === O ? o : s,
										fe = 'x' === O ? r : i,
										he = P[L],
										me = 'y' === L ? 'height' : 'width',
										ve = he + E[pe],
										ge = he - E[fe],
										we = -1 !== [o, s].indexOf(x),
										be = null != (de = null == M ? void 0 : M[L]) ? de : 0,
										Ee = we ? ve : he - A[me] - I[me] - be + D.altAxis,
										xe = we ? he + A[me] + I[me] - be - D.altAxis : ge,
										Ce =
											y && we
												? (function (e, t, n) {
														var o = X(e, t, n);
														return o > n ? n : o;
													})(Ee, he, xe)
												: X(y ? Ee : ve, he, y ? xe : ge);
									(P[L] = Ce), (j[L] = Ce - he);
								}
								t.modifiersData[a] = j;
							}
						},
						requiresIfExists: ['offset'],
					};
					function Le(e, t, n) {
						void 0 === n && (n = !1);
						var o,
							r,
							i = T(t),
							s =
								T(t) &&
								(function (e) {
									var t = e.getBoundingClientRect(),
										n = j(t.width) / e.offsetWidth || 1,
										o = j(t.height) / e.offsetHeight || 1;
									return 1 !== n || 1 !== o;
								})(t),
							a = N(t),
							l = q(e, s, n),
							c = { scrollLeft: 0, scrollTop: 0 },
							u = { x: 0, y: 0 };
						return (
							(i || (!i && !n)) &&
								(('body' !== P(t) || de(a)) &&
									(c =
										(o = t) !== A(o) && T(o)
											? {
													scrollLeft: (r = o).scrollLeft,
													scrollTop: r.scrollTop,
												}
											: ce(o)),
								T(t)
									? (((u = q(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
									: a && (u.x = ue(a))),
							{
								x: l.left + c.scrollLeft - u.x,
								y: l.top + c.scrollTop - u.y,
								width: l.width,
								height: l.height,
							}
						);
					}
					function Pe(e) {
						var t = new Map(),
							n = new Set(),
							o = [];
						function r(e) {
							n.add(e.name),
								[]
									.concat(e.requires || [], e.requiresIfExists || [])
									.forEach(function (e) {
										if (!n.has(e)) {
											var o = t.get(e);
											o && r(o);
										}
									}),
								o.push(e);
						}
						return (
							e.forEach(function (e) {
								t.set(e.name, e);
							}),
							e.forEach(function (e) {
								n.has(e.name) || r(e);
							}),
							o
						);
					}
					var Ae = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
					function Ie() {
						for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
							t[n] = arguments[n];
						return !t.some(function (e) {
							return !(e && 'function' == typeof e.getBoundingClientRect);
						});
					}
					function Te(e) {
						void 0 === e && (e = {});
						var t = e,
							n = t.defaultModifiers,
							o = void 0 === n ? [] : n,
							r = t.defaultOptions,
							i = void 0 === r ? Ae : r;
						return function (e, t, n) {
							void 0 === n && (n = i);
							var r,
								s,
								a = {
									placement: 'bottom',
									orderedModifiers: [],
									options: Object.assign({}, Ae, i),
									modifiersData: {},
									elements: { reference: e, popper: t },
									attributes: {},
									styles: {},
								},
								l = [],
								c = !1,
								u = {
									state: a,
									setOptions: function (n) {
										var r = 'function' == typeof n ? n(a.options) : n;
										d(),
											(a.options = Object.assign({}, i, a.options, r)),
											(a.scrollParents = {
												reference: I(e)
													? fe(e)
													: e.contextElement
														? fe(e.contextElement)
														: [],
												popper: fe(t),
											});
										var s,
											c,
											p = (function (e) {
												var t = Pe(e);
												return L.reduce(function (e, n) {
													return e.concat(
														t.filter(function (e) {
															return e.phase === n;
														}),
													);
												}, []);
											})(
												((s = [].concat(o, a.options.modifiers)),
												(c = s.reduce(function (e, t) {
													var n = e[t.name];
													return (
														(e[t.name] = n
															? Object.assign({}, n, t, {
																	options: Object.assign(
																		{},
																		n.options,
																		t.options,
																	),
																	data: Object.assign({}, n.data, t.data),
																})
															: t),
														e
													);
												}, {})),
												Object.keys(c).map(function (e) {
													return c[e];
												})),
											);
										return (
											(a.orderedModifiers = p.filter(function (e) {
												return e.enabled;
											})),
											a.orderedModifiers.forEach(function (e) {
												var t = e.name,
													n = e.options,
													o = void 0 === n ? {} : n,
													r = e.effect;
												if ('function' == typeof r) {
													var i = r({
															state: a,
															name: t,
															instance: u,
															options: o,
														}),
														s = function () {};
													l.push(i || s);
												}
											}),
											u.update()
										);
									},
									forceUpdate: function () {
										if (!c) {
											var e = a.elements,
												t = e.reference,
												n = e.popper;
											if (Ie(t, n)) {
												(a.rects = {
													reference: Le(
														t,
														F(n),
														'fixed' === a.options.strategy,
													),
													popper: V(n),
												}),
													(a.reset = !1),
													(a.placement = a.options.placement),
													a.orderedModifiers.forEach(function (e) {
														return (a.modifiersData[e.name] = Object.assign(
															{},
															e.data,
														));
													});
												for (var o = 0; o < a.orderedModifiers.length; o++)
													if (!0 !== a.reset) {
														var r = a.orderedModifiers[o],
															i = r.fn,
															s = r.options,
															l = void 0 === s ? {} : s,
															d = r.name;
														'function' == typeof i &&
															(a =
																i({
																	state: a,
																	options: l,
																	name: d,
																	instance: u,
																}) || a);
													} else (a.reset = !1), (o = -1);
											}
										}
									},
									update:
										((r = function () {
											return new Promise(function (e) {
												u.forceUpdate(), e(a);
											});
										}),
										function () {
											return (
												s ||
													(s = new Promise(function (e) {
														Promise.resolve().then(function () {
															(s = void 0), e(r());
														});
													})),
												s
											);
										}),
									destroy: function () {
										d(), (c = !0);
									},
								};
							if (!Ie(e, t)) return u;
							function d() {
								l.forEach(function (e) {
									return e();
								}),
									(l = []);
							}
							return (
								u.setOptions(n).then(function (e) {
									!c && n.onFirstUpdate && n.onFirstUpdate(e);
								}),
								u
							);
						};
					}
					var De = Te(),
						Me = Te({ defaultModifiers: [re, Se, ne, M, Ce, we, Oe, G, xe] }),
						_e = Te({ defaultModifiers: [re, Se, ne, M] });
				},
				223: (e, t) => {
					Object.defineProperty(t, '__esModule', { value: !0 }),
						(t.BREAKPOINTS =
							t.COMBO_BOX_ACCESSIBILITY_KEY_SET =
							t.SELECT_ACCESSIBILITY_KEY_SET =
							t.TABS_ACCESSIBILITY_KEY_SET =
							t.OVERLAY_ACCESSIBILITY_KEY_SET =
							t.DROPDOWN_ACCESSIBILITY_KEY_SET =
							t.POSITIONS =
								void 0),
						(t.POSITIONS = {
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
						}),
						(t.DROPDOWN_ACCESSIBILITY_KEY_SET = [
							'Escape',
							'ArrowUp',
							'ArrowDown',
							'ArrowRight',
							'ArrowLeft',
							'Home',
							'End',
							'Enter',
						]),
						(t.OVERLAY_ACCESSIBILITY_KEY_SET = ['Escape', 'Tab']),
						(t.TABS_ACCESSIBILITY_KEY_SET = [
							'ArrowUp',
							'ArrowLeft',
							'ArrowDown',
							'ArrowRight',
							'Home',
							'End',
						]),
						(t.SELECT_ACCESSIBILITY_KEY_SET = [
							'ArrowUp',
							'ArrowLeft',
							'ArrowDown',
							'ArrowRight',
							'Home',
							'End',
							'Escape',
							'Enter',
							'Space',
							'Tab',
						]),
						(t.COMBO_BOX_ACCESSIBILITY_KEY_SET = [
							'ArrowUp',
							'ArrowLeft',
							'ArrowDown',
							'ArrowRight',
							'Home',
							'End',
							'Escape',
							'Enter',
						]),
						(t.BREAKPOINTS = {
							xs: 0,
							sm: 640,
							md: 768,
							lg: 1024,
							xl: 1280,
							'2xl': 1536,
						});
				},
				961: (e, t) => {
					Object.defineProperty(t, '__esModule', { value: !0 });
					var n = (function () {
						function e(e, t, n) {
							(this.el = e),
								(this.options = t),
								(this.events = n),
								(this.el = e),
								(this.options = t),
								(this.events = {});
						}
						return (
							(e.prototype.createCollection = function (e, t) {
								var n;
								e.push({
									id:
										(null === (n = null == t ? void 0 : t.el) || void 0 === n
											? void 0
											: n.id) || e.length + 1,
									element: t,
								});
							}),
							(e.prototype.fireEvent = function (e, t) {
								if ((void 0 === t && (t = null), this.events.hasOwnProperty(e)))
									return this.events[e](t);
							}),
							(e.prototype.on = function (e, t) {
								this.events[e] = t;
							}),
							e
						);
					})();
					t.default = n;
				},
				891: function (e, t, n) {
					/*
					 * HSDropdown
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var o,
						r =
							(this && this.__extends) ||
							((o = function (e, t) {
								return (
									(o =
										Object.setPrototypeOf ||
										({ __proto__: [] } instanceof Array &&
											function (e, t) {
												e.__proto__ = t;
											}) ||
										function (e, t) {
											for (var n in t)
												Object.prototype.hasOwnProperty.call(t, n) &&
													(e[n] = t[n]);
										}),
									o(e, t)
								);
							}),
							function (e, t) {
								if ('function' != typeof t && null !== t)
									throw new TypeError(
										'Class extends value ' +
											String(t) +
											' is not a constructor or null',
									);
								function n() {
									this.constructor = e;
								}
								o(e, t),
									(e.prototype =
										null === t
											? Object.create(t)
											: ((n.prototype = t.prototype), new n()));
							}),
						i =
							(this && this.__spreadArray) ||
							function (e, t, n) {
								if (n || 2 === arguments.length)
									for (var o, r = 0, i = t.length; r < i; r++)
										(!o && r in t) ||
											(o || (o = Array.prototype.slice.call(t, 0, r)),
											(o[r] = t[r]));
								return e.concat(o || Array.prototype.slice.call(t));
							},
						s =
							(this && this.__importDefault) ||
							function (e) {
								return e && e.__esModule ? e : { default: e };
							};
					Object.defineProperty(t, '__esModule', { value: !0 });
					var a = n(292),
						l = n(170),
						c = s(n(961)),
						u = n(223),
						d = (function (e) {
							function t(t, n, o) {
								var r = e.call(this, t, n, o) || this;
								return (
									(r.toggle =
										r.el.querySelector(':scope > .hs-dropdown-toggle') ||
										r.el.querySelector(
											':scope > .hs-dropdown-toggle-wrapper > .hs-dropdown-toggle',
										) ||
										r.el.children[0]),
									(r.closers =
										Array.from(
											r.el.querySelectorAll(':scope .hs-dropdown-close'),
										) || null),
									(r.menu = r.el.querySelector(':scope > .hs-dropdown-menu')),
									(r.eventMode = (0, a.getClassProperty)(
										r.el,
										'--trigger',
										'click',
									)),
									(r.closeMode = (0, a.getClassProperty)(
										r.el,
										'--auto-close',
										'true',
									)),
									(r.hasAutofocus = (0, a.stringToBoolean)(
										(0, a.getClassProperty)(r.el, '--has-autofocus', 'true') ||
											'true',
									)),
									(r.animationInProcess = !1),
									(r.onCloserClickListener = []),
									r.toggle && r.menu && r.init(),
									r
								);
							}
							return (
								r(t, e),
								(t.prototype.elementMouseEnter = function () {
									this.onMouseEnterHandler();
								}),
								(t.prototype.elementMouseLeave = function () {
									this.onMouseLeaveHandler();
								}),
								(t.prototype.toggleClick = function (e) {
									this.onClickHandler(e);
								}),
								(t.prototype.toggleContextMenu = function (e) {
									e.preventDefault(), this.onContextMenuHandler(e);
								}),
								(t.prototype.closerClick = function () {
									this.close();
								}),
								(t.prototype.init = function () {
									var e = this;
									if (
										(this.createCollection(window.$hsDropdownCollection, this),
										this.toggle.disabled)
									)
										return !1;
									this.toggle && this.buildToggle(),
										this.menu && this.buildMenu(),
										this.closers && this.buildClosers(),
										(0, a.isIOS)() ||
											(0, a.isIpadOS)() ||
											((this.onElementMouseEnterListener = function () {
												return e.elementMouseEnter();
											}),
											(this.onElementMouseLeaveListener = function () {
												return e.elementMouseLeave();
											}),
											this.el.addEventListener(
												'mouseenter',
												this.onElementMouseEnterListener,
											),
											this.el.addEventListener(
												'mouseleave',
												this.onElementMouseLeaveListener,
											));
								}),
								(t.prototype.resizeHandler = function () {
									(this.eventMode = (0, a.getClassProperty)(
										this.el,
										'--trigger',
										'click',
									)),
										(this.closeMode = (0, a.getClassProperty)(
											this.el,
											'--auto-close',
											'true',
										));
								}),
								(t.prototype.buildToggle = function () {
									var e,
										t = this;
									(null === (e = null == this ? void 0 : this.toggle) ||
									void 0 === e
										? void 0
										: e.ariaExpanded) &&
										(this.el.classList.contains('open')
											? (this.toggle.ariaExpanded = 'true')
											: (this.toggle.ariaExpanded = 'false')),
										'contextmenu' === this.eventMode
											? ((this.onToggleContextMenuListener = function (e) {
													return t.toggleContextMenu(e);
												}),
												this.toggle.addEventListener(
													'contextmenu',
													this.onToggleContextMenuListener,
												))
											: ((this.onToggleClickListener = function (e) {
													return t.toggleClick(e);
												}),
												this.toggle.addEventListener(
													'click',
													this.onToggleClickListener,
												));
								}),
								(t.prototype.buildMenu = function () {
									var e = this;
									this.menu.role = this.menu.getAttribute('role') || 'menu';
									var t = this.menu.querySelectorAll(
											'[role="menuitemcheckbox"]',
										),
										n = this.menu.querySelectorAll('[role="menuitemradio"]');
									t.forEach(function (t) {
										return t.addEventListener('click', function () {
											return e.selectCheckbox(t);
										});
									}),
										n.forEach(function (t) {
											return t.addEventListener('click', function () {
												return e.selectRadio(t);
											});
										});
								}),
								(t.prototype.buildClosers = function () {
									var e = this;
									this.closers.forEach(function (t) {
										e.onCloserClickListener.push({
											el: t,
											fn: function () {
												return e.closerClick();
											},
										}),
											t.addEventListener(
												'click',
												e.onCloserClickListener.find(function (e) {
													return e.el === t;
												}).fn,
											);
									});
								}),
								(t.prototype.getScrollbarSize = function () {
									var e = document.createElement('div');
									(e.style.overflow = 'scroll'),
										(e.style.width = '100px'),
										(e.style.height = '100px'),
										document.body.appendChild(e);
									var t = e.offsetWidth - e.clientWidth;
									return document.body.removeChild(e), t;
								}),
								(t.prototype.onContextMenuHandler = function (e) {
									var n = {
										getBoundingClientRect:
											(function () {
												return new DOMRect();
											},
											function () {
												return new DOMRect(e.clientX, e.clientY, 0, 0);
											}),
									};
									t.closeCurrentlyOpened(),
										this.el.classList.contains('open') &&
										!this.menu.classList.contains('hidden')
											? (this.close(),
												(document.body.style.overflow = ''),
												(document.body.style.paddingRight = ''))
											: ((document.body.style.overflow = 'hidden'),
												(document.body.style.paddingRight = ''.concat(
													this.getScrollbarSize(),
													'px',
												)),
												this.open(n));
								}),
								(t.prototype.onClickHandler = function (e) {
									this.el.classList.contains('open') &&
									!this.menu.classList.contains('hidden')
										? this.close()
										: this.open();
								}),
								(t.prototype.onMouseEnterHandler = function () {
									if ('hover' !== this.eventMode) return !1;
									this.el._popper && this.forceClearState(),
										!this.el.classList.contains('open') &&
											this.menu.classList.contains('hidden') &&
											this.open();
								}),
								(t.prototype.onMouseLeaveHandler = function () {
									if ('hover' !== this.eventMode) return !1;
									this.el.classList.contains('open') &&
										!this.menu.classList.contains('hidden') &&
										this.close();
								}),
								(t.prototype.destroyPopper = function () {
									var e = (
										window
											.getComputedStyle(this.el)
											.getPropertyValue('--scope') || ''
									).replace(' ', '');
									this.menu.classList.remove('block'),
										this.menu.classList.add('hidden'),
										(this.menu.style.inset = null),
										(this.menu.style.position = null),
										this.el && this.el._popper && this.el._popper.destroy(),
										'window' === e && this.el.appendChild(this.menu),
										(this.animationInProcess = !1);
								}),
								(t.prototype.absoluteStrategyModifiers = function () {
									var e = this;
									return [
										{
											name: 'applyStyles',
											fn: function (t) {
												var n = (
														window
															.getComputedStyle(e.el)
															.getPropertyValue('--strategy') || 'absolute'
													).replace(' ', ''),
													o = (
														window
															.getComputedStyle(e.el)
															.getPropertyValue('--adaptive') || 'adaptive'
													).replace(' ', '');
												(t.state.elements.popper.style.position = n),
													(t.state.elements.popper.style.transform =
														'adaptive' === o
															? t.state.styles.popper.transform
															: null),
													(t.state.elements.popper.style.top = null),
													(t.state.elements.popper.style.bottom = null),
													(t.state.elements.popper.style.left = null),
													(t.state.elements.popper.style.right = null),
													(t.state.elements.popper.style.margin = 0);
											},
										},
									];
								}),
								(t.prototype.focusElement = function () {
									var e = this.menu.querySelector('[autofocus]');
									if (!e) return !1;
									e.focus();
								}),
								(t.prototype.setupPopper = function (e) {
									var t = e || this.el,
										n = (
											window
												.getComputedStyle(this.el)
												.getPropertyValue('--placement') || ''
										).replace(' ', ''),
										o = (
											window
												.getComputedStyle(this.el)
												.getPropertyValue('--flip') || 'true'
										).replace(' ', ''),
										r = (
											window
												.getComputedStyle(this.el)
												.getPropertyValue('--strategy') || 'fixed'
										).replace(' ', ''),
										s = parseInt(
											(
												window
													.getComputedStyle(this.el)
													.getPropertyValue('--offset') || '10'
											).replace(' ', ''),
										),
										a = (
											window
												.getComputedStyle(this.el)
												.getPropertyValue('--gpu-acceleration') || 'true'
										).replace(' ', '');
									return (0, l.createPopper)(t, this.menu, {
										placement: u.POSITIONS[n] || 'bottom-start',
										strategy: r,
										modifiers: i(
											i(
												[],
												'fixed' !== r ? this.absoluteStrategyModifiers() : [],
												!0,
											),
											[
												{ name: 'flip', enabled: 'true' === o },
												{ name: 'offset', options: { offset: [0, s] } },
												{
													name: 'computeStyles',
													options: {
														adaptive: 'fixed' === r,
														gpuAcceleration: 'true' === a,
													},
												},
											],
											!1,
										),
									});
								}),
								(t.prototype.selectCheckbox = function (e) {
									e.ariaChecked = 'true' === e.ariaChecked ? 'false' : 'true';
								}),
								(t.prototype.selectRadio = function (e) {
									if ('true' === e.ariaChecked) return !1;
									var t = e
										.closest('.group')
										.querySelectorAll('[role="menuitemradio"]');
									Array.from(t)
										.filter(function (t) {
											return t !== e;
										})
										.forEach(function (e) {
											e.ariaChecked = 'false';
										}),
										(e.ariaChecked = 'true');
								}),
								(t.prototype.calculatePopperPosition = function (e) {
									var t = this.setupPopper(e);
									t.forceUpdate();
									var n = t.state.placement;
									return t.destroy(), n;
								}),
								(t.prototype.open = function (e) {
									var t = this;
									if (
										this.el.classList.contains('open') ||
										this.animationInProcess
									)
										return !1;
									var n = e || this.el;
									this.animationInProcess = !0;
									var o = (
											window
												.getComputedStyle(this.el)
												.getPropertyValue('--scope') || ''
										).replace(' ', ''),
										r = (
											window
												.getComputedStyle(this.el)
												.getPropertyValue('--placement') || ''
										).replace(' ', ''),
										s = (
											window
												.getComputedStyle(this.el)
												.getPropertyValue('--flip') || 'true'
										).replace(' ', ''),
										c = (
											window
												.getComputedStyle(this.el)
												.getPropertyValue('--strategy') || 'fixed'
										).replace(' ', ''),
										d = parseInt(
											(
												window
													.getComputedStyle(this.el)
													.getPropertyValue('--offset') || '10'
											).replace(' ', ''),
										),
										p = (
											window
												.getComputedStyle(this.el)
												.getPropertyValue('--gpu-acceleration') || 'true'
										).replace(' ', '');
									'window' === o && document.body.appendChild(this.menu),
										'static' !== c &&
											(this.el._popper = (0, l.createPopper)(n, this.menu, {
												placement: u.POSITIONS[r] || 'bottom-start',
												strategy: c,
												modifiers: i(
													i(
														[],
														'fixed' !== c
															? this.absoluteStrategyModifiers()
															: [],
														!0,
													),
													[
														{ name: 'flip', enabled: 'true' === s },
														{ name: 'offset', options: { offset: [0, d] } },
														{
															name: 'computeStyles',
															options: {
																adaptive: 'fixed' === c,
																gpuAcceleration: 'true' === p,
															},
														},
													],
													!1,
												),
											})),
										(this.menu.style.margin = null),
										this.menu.classList.remove('hidden'),
										this.menu.classList.add('block'),
										setTimeout(function () {
											var e;
											(null === (e = null == t ? void 0 : t.toggle) ||
											void 0 === e
												? void 0
												: e.ariaExpanded) && (t.toggle.ariaExpanded = 'true'),
												t.el.classList.add('open'),
												'window' === o && t.menu.classList.add('open'),
												(t.animationInProcess = !1),
												t.hasAutofocus && t.focusElement(),
												t.fireEvent('open', t.el),
												(0, a.dispatch)('open.hs.dropdown', t.el, t.el);
										});
								}),
								(t.prototype.close = function (e) {
									var t = this;
									if (
										(void 0 === e && (e = !0),
										this.animationInProcess ||
											!this.el.classList.contains('open'))
									)
										return !1;
									var n,
										o = (
											window
												.getComputedStyle(this.el)
												.getPropertyValue('--scope') || ''
										).replace(' ', '');
									if (
										((this.animationInProcess = !0),
										'window' === o && this.menu.classList.remove('open'),
										e)
									) {
										var r =
											this.el.querySelector('[data-hs-dropdown-transition]') ||
											this.menu;
										(0, a.afterTransition)(r, function () {
											return t.destroyPopper();
										});
									} else this.destroyPopper();
									(t.menu.style.margin = null),
										(null === (n = null == t ? void 0 : t.toggle) ||
										void 0 === n
											? void 0
											: n.ariaExpanded) && (t.toggle.ariaExpanded = 'false'),
										t.el.classList.remove('open'),
										t.fireEvent('close', t.el),
										(0, a.dispatch)('close.hs.dropdown', t.el, t.el);
								}),
								(t.prototype.forceClearState = function () {
									this.destroyPopper(),
										(this.menu.style.margin = null),
										this.el.classList.remove('open');
								}),
								(t.prototype.destroy = function () {
									var e = this;
									(0, a.isIOS)() ||
										(0, a.isIpadOS)() ||
										(this.el.removeEventListener(
											'mouseenter',
											this.onElementMouseEnterListener,
										),
										this.el.removeEventListener('mouseleave', function () {
											return e.onElementMouseLeaveListener;
										}),
										(this.onElementMouseEnterListener = null),
										(this.onElementMouseLeaveListener = null)),
										this.toggle.removeEventListener(
											'click',
											this.onToggleClickListener,
										),
										(this.onToggleClickListener = null),
										this.closers.length &&
											(this.closers.forEach(function (t) {
												t.removeEventListener(
													'click',
													e.onCloserClickListener.find(function (e) {
														return e.el === t;
													}).fn,
												);
											}),
											(this.onCloserClickListener = null)),
										this.el.classList.remove('open'),
										this.destroyPopper(),
										(window.$hsDropdownCollection =
											window.$hsDropdownCollection.filter(function (t) {
												return t.element.el !== e.el;
											}));
								}),
								(t.findInCollection = function (e) {
									return (
										window.$hsDropdownCollection.find(function (n) {
											return e instanceof t
												? n.element.el === e.el
												: 'string' == typeof e
													? n.element.el === document.querySelector(e)
													: n.element.el === e;
										}) || null
									);
								}),
								(t.getInstance = function (e, t) {
									var n = window.$hsDropdownCollection.find(function (t) {
										return (
											t.element.el ===
											('string' == typeof e ? document.querySelector(e) : e)
										);
									});
									return n ? (t ? n : n.element.el) : null;
								}),
								(t.autoInit = function () {
									if (!window.$hsDropdownCollection) {
										(window.$hsDropdownCollection = []),
											document.addEventListener('keydown', function (e) {
												return t.accessibility(e);
											}),
											window.addEventListener('click', function (e) {
												var n = e.target;
												t.closeCurrentlyOpened(n);
											});
										var e = window.innerWidth;
										window.addEventListener('resize', function () {
											window.innerWidth !== e &&
												((e = innerWidth), t.closeCurrentlyOpened(null, !1));
										});
									}
									window.$hsDropdownCollection &&
										(window.$hsDropdownCollection =
											window.$hsDropdownCollection.filter(function (e) {
												var t = e.element;
												return document.contains(t.el);
											})),
										document
											.querySelectorAll(
												'.hs-dropdown:not(.--prevent-on-load-init)',
											)
											.forEach(function (e) {
												window.$hsDropdownCollection.find(function (t) {
													var n;
													return (
														(null === (n = null == t ? void 0 : t.element) ||
														void 0 === n
															? void 0
															: n.el) === e
													);
												}) || new t(e);
											});
								}),
								(t.open = function (e) {
									var n = t.findInCollection(e);
									n &&
										n.element.menu.classList.contains('hidden') &&
										n.element.open();
								}),
								(t.close = function (e) {
									var n = t.findInCollection(e);
									n &&
										!n.element.menu.classList.contains('hidden') &&
										n.element.close();
								}),
								(t.accessibility = function (e) {
									this.history = a.menuSearchHistory;
									var t = window.$hsDropdownCollection.find(function (e) {
										return e.element.el.classList.contains('open');
									});
									if (
										t &&
										(u.DROPDOWN_ACCESSIBILITY_KEY_SET.includes(e.code) ||
											(4 === e.code.length &&
												e.code[e.code.length - 1].match(/^[A-Z]*$/))) &&
										!e.metaKey &&
										!t.element.menu.querySelector('input:focus') &&
										!t.element.menu.querySelector('textarea:focus')
									)
										switch (e.code) {
											case 'Escape':
												t.element.menu.querySelector('.hs-select.active') ||
													(e.preventDefault(), this.onEscape(e));
												break;
											case 'Enter':
												t.element.menu.querySelector(
													'.hs-select button:focus',
												) ||
													t.element.menu.querySelector(
														'.hs-collapse-toggle:focus',
													) ||
													this.onEnter(e);
												break;
											case 'ArrowUp':
												e.preventDefault(),
													e.stopImmediatePropagation(),
													this.onArrow();
												break;
											case 'ArrowDown':
												e.preventDefault(),
													e.stopImmediatePropagation(),
													this.onArrow(!1);
												break;
											case 'ArrowRight':
												e.preventDefault(),
													e.stopImmediatePropagation(),
													this.onArrowX(e, 'right');
												break;
											case 'ArrowLeft':
												e.preventDefault(),
													e.stopImmediatePropagation(),
													this.onArrowX(e, 'left');
												break;
											case 'Home':
												e.preventDefault(),
													e.stopImmediatePropagation(),
													this.onStartEnd();
												break;
											case 'End':
												e.preventDefault(),
													e.stopImmediatePropagation(),
													this.onStartEnd(!1);
												break;
											default:
												e.preventDefault(), this.onFirstLetter(e.key);
										}
								}),
								(t.onEscape = function (e) {
									var t = e.target.closest('.hs-dropdown.open');
									if (
										window.$hsDropdownCollection.find(function (e) {
											return e.element.el === t;
										})
									) {
										var n = window.$hsDropdownCollection.find(function (e) {
											return e.element.el === t;
										});
										n && (n.element.close(), n.element.toggle.focus());
									} else this.closeCurrentlyOpened();
								}),
								(t.onEnter = function (e) {
									var t,
										n = e.target,
										o = (
											null !==
												(t = window.$hsDropdownCollection.find(function (e) {
													return e.element.el === n.closest('.hs-dropdown');
												})) && void 0 !== t
												? t
												: null
										).element;
									if (o && n.classList.contains('hs-dropdown-toggle'))
										e.preventDefault(), o.open();
									else if (o && 'menuitemcheckbox' === n.getAttribute('role'))
										o.selectCheckbox(n), o.close();
									else {
										if (!o || 'menuitemradio' !== n.getAttribute('role'))
											return !1;
										o.selectRadio(n), o.close();
									}
								}),
								(t.onArrow = function (e) {
									void 0 === e && (e = !0);
									var t = window.$hsDropdownCollection.find(function (e) {
										return e.element.el.classList.contains('open');
									});
									if (t) {
										var n = t.element.menu;
										if (!n) return !1;
										var o = e
												? Array.from(
														n.querySelectorAll(
															'a:not([hidden]), .hs-dropdown > button:not([hidden]), [role="button"]:not([hidden]), [role^="menuitem"]:not([hidden])',
														),
													).reverse()
												: Array.from(
														n.querySelectorAll(
															'a:not([hidden]), .hs-dropdown > button:not([hidden]), [role="button"]:not([hidden]), [role^="menuitem"]:not([hidden])',
														),
													),
											r = Array.from(o)
												.filter(function (e) {
													var t = e;
													return (
														null === t.closest('[hidden]') &&
														null !== t.offsetParent
													);
												})
												.filter(function (e) {
													return !e.classList.contains('disabled');
												}),
											i = n.querySelector(
												'a:focus, button:focus, [role="button"]:focus, [role^="menuitem"]:focus',
											),
											s = r.findIndex(function (e) {
												return e === i;
											});
										s + 1 < r.length && s++, r[s].focus();
									}
								}),
								(t.onArrowX = function (e, n) {
									var o,
										r,
										i = e.target,
										s = i.closest('.hs-dropdown.open'),
										a =
											!!s &&
											!(null == s
												? void 0
												: s.parentElement.closest('.hs-dropdown')),
										l =
											null !==
												(o = t.getInstance(i.closest('.hs-dropdown'), !0)) &&
											void 0 !== o
												? o
												: null,
										c = l.element.menu.querySelector(
											'a, button, [role="button"], [role^="menuitem"]',
										);
									if (a && !i.classList.contains('hs-dropdown-toggle'))
										return !1;
									var u =
										null !==
											(r = t.getInstance(i.closest('.hs-dropdown.open'), !0)) &&
										void 0 !== r
											? r
											: null;
									if (
										l.element.el.classList.contains('open') &&
										l.element.el._popper.state.placement.includes(n)
									)
										return c.focus(), !1;
									console.log(l);
									var d = l.element.calculatePopperPosition();
									if (a && !d.includes(n)) return !1;
									d.includes(n) && i.classList.contains('hs-dropdown-toggle')
										? (l.element.open(), c.focus())
										: (u.element.close(!1), u.element.toggle.focus());
								}),
								(t.onStartEnd = function (e) {
									void 0 === e && (e = !0);
									var t = window.$hsDropdownCollection.find(function (e) {
										return e.element.el.classList.contains('open');
									});
									if (t) {
										var n = t.element.menu;
										if (!n) return !1;
										var o = (
											e
												? Array.from(
														n.querySelectorAll(
															'a, button, [role="button"], [role^="menuitem"]',
														),
													)
												: Array.from(
														n.querySelectorAll(
															'a, button, [role="button"], [role^="menuitem"]',
														),
													).reverse()
										).filter(function (e) {
											return !e.classList.contains('disabled');
										});
										o.length && o[0].focus();
									}
								}),
								(t.onFirstLetter = function (e) {
									var t = this,
										n = window.$hsDropdownCollection.find(function (e) {
											return e.element.el.classList.contains('open');
										});
									if (n) {
										var o = n.element.menu;
										if (!o) return !1;
										var r = Array.from(
												o.querySelectorAll(
													'a, [role="button"], [role^="menuitem"]',
												),
											),
											i = function () {
												return r.findIndex(function (n, o) {
													return (
														n.innerText.toLowerCase().charAt(0) ===
															e.toLowerCase() && t.history.existsInHistory(o)
													);
												});
											},
											s = i();
										-1 === s && (this.history.clearHistory(), (s = i())),
											-1 !== s && (r[s].focus(), this.history.addHistory(s));
									}
								}),
								(t.closeCurrentlyOpened = function (e, t) {
									void 0 === e && (e = null), void 0 === t && (t = !0);
									var n =
											e &&
											e.closest('.hs-dropdown') &&
											e
												.closest('.hs-dropdown')
												.parentElement.closest('.hs-dropdown')
												? e
														.closest('.hs-dropdown')
														.parentElement.closest('.hs-dropdown')
												: null,
										o = n
											? window.$hsDropdownCollection.filter(function (e) {
													return (
														e.element.el.classList.contains('open') &&
														e.element.menu
															.closest('.hs-dropdown')
															.parentElement.closest('.hs-dropdown') === n
													);
												})
											: window.$hsDropdownCollection.filter(function (e) {
													return e.element.el.classList.contains('open');
												});
									e &&
										e.closest('.hs-dropdown') &&
										'inside' ===
											(0, a.getClassPropertyAlt)(
												e.closest('.hs-dropdown'),
												'--auto-close',
											) &&
										(o = o.filter(function (t) {
											return t.element.el !== e.closest('.hs-dropdown');
										})),
										o &&
											o.forEach(function (e) {
												if (
													'false' === e.element.closeMode ||
													'outside' === e.element.closeMode
												)
													return !1;
												e.element.close(t);
											}),
										o &&
											o.forEach(function (e) {
												if (
													'contextmenu' !==
													(0, a.getClassPropertyAlt)(e.element.el, '--trigger')
												)
													return !1;
												(document.body.style.overflow = ''),
													(document.body.style.paddingRight = '');
											});
								}),
								(t.on = function (e, n, o) {
									var r = t.findInCollection(n);
									r && (r.element.events[e] = o);
								}),
								t
							);
						})(c.default);
					window.addEventListener('load', function () {
						d.autoInit();
					}),
						window.addEventListener('resize', function () {
							window.$hsDropdownCollection ||
								(window.$hsDropdownCollection = []),
								window.$hsDropdownCollection.forEach(function (e) {
									return e.element.resizeHandler();
								});
						}),
						'undefined' != typeof window && (window.HSDropdown = d),
						(t.default = d);
				},
				292: function (e, t) {
					/*
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var n = this;
					Object.defineProperty(t, '__esModule', { value: !0 }),
						(t.menuSearchHistory =
							t.classToClassList =
							t.htmlToElement =
							t.afterTransition =
							t.dispatch =
							t.debounce =
							t.isJson =
							t.isDirectChild =
							t.isFormElement =
							t.isParentOrElementHidden =
							t.isEnoughSpace =
							t.isIpadOS =
							t.isIOS =
							t.getZIndex =
							t.getClassPropertyAlt =
							t.getClassProperty =
							t.stringToBoolean =
								void 0),
						(t.getHighestZIndex = function (e) {
							var t = Number.NEGATIVE_INFINITY;
							return (
								e.forEach(function (e) {
									var n = o(e);
									'auto' !== n && (n = parseInt(n, 10)) > t && (t = n);
								}),
								t
							);
						});
					t.stringToBoolean = function (e) {
						return 'true' === e;
					};
					t.getClassProperty = function (e, t, n) {
						return (
							void 0 === n && (n = ''),
							(window.getComputedStyle(e).getPropertyValue(t) || n).replace(
								' ',
								'',
							)
						);
					};
					t.getClassPropertyAlt = function (e, t, n) {
						void 0 === n && (n = '');
						var o = '';
						return (
							e.classList.forEach(function (e) {
								e.includes(t) && (o = e);
							}),
							o.match(/:(.*)]/) ? o.match(/:(.*)]/)[1] : n
						);
					};
					var o = function (e) {
						return window.getComputedStyle(e).getPropertyValue('z-index');
					};
					t.getZIndex = o;
					t.isIOS = function () {
						return (
							!!/iPad|iPhone|iPod/.test(navigator.platform) ||
							(navigator.maxTouchPoints &&
								navigator.maxTouchPoints > 2 &&
								/MacIntel/.test(navigator.platform))
						);
					};
					t.isIpadOS = function () {
						return (
							navigator.maxTouchPoints &&
							navigator.maxTouchPoints > 2 &&
							/MacIntel/.test(navigator.platform)
						);
					};
					t.isDirectChild = function (e, t) {
						for (var n = e.children, o = 0; o < n.length; o++)
							if (n[o] === t) return !0;
						return !1;
					};
					t.isEnoughSpace = function (e, t, n, o, r) {
						void 0 === n && (n = 'auto'),
							void 0 === o && (o = 10),
							void 0 === r && (r = null);
						var i = t.getBoundingClientRect(),
							s = r ? r.getBoundingClientRect() : null,
							a = window.innerHeight,
							l = s ? i.top - s.top : i.top,
							c = (r ? s.bottom : a) - i.bottom,
							u = e.clientHeight + o;
						return 'bottom' === n
							? c >= u
							: 'top' === n
								? l >= u
								: l >= u || c >= u;
					};
					t.isFormElement = function (e) {
						return (
							e instanceof HTMLInputElement ||
							e instanceof HTMLTextAreaElement ||
							e instanceof HTMLSelectElement
						);
					};
					var r = function (e) {
						return (
							!!e &&
							('none' === window.getComputedStyle(e).display ||
								r(e.parentElement))
						);
					};
					t.isParentOrElementHidden = r;
					t.isJson = function (e) {
						if ('string' != typeof e) return !1;
						var t = e.trim()[0],
							n = e.trim().slice(-1);
						if (('{' === t && '}' === n) || ('[' === t && ']' === n))
							try {
								return JSON.parse(e), !0;
							} catch (e) {
								return !1;
							}
						return !1;
					};
					t.debounce = function (e, t) {
						var o;
						return (
							void 0 === t && (t = 200),
							function () {
								for (var r = [], i = 0; i < arguments.length; i++)
									r[i] = arguments[i];
								clearTimeout(o),
									(o = setTimeout(function () {
										e.apply(n, r);
									}, t));
							}
						);
					};
					t.dispatch = function (e, t, n) {
						void 0 === n && (n = null);
						var o = new CustomEvent(e, {
							detail: { payload: n },
							bubbles: !0,
							cancelable: !0,
							composed: !1,
						});
						t.dispatchEvent(o);
					};
					t.afterTransition = function (e, t) {
						var n = function () {
								t(), e.removeEventListener('transitionend', n, !0);
							},
							o = window.getComputedStyle(e),
							r = o.getPropertyValue('transition-duration');
						'none' !== o.getPropertyValue('transition-property') &&
						parseFloat(r) > 0
							? e.addEventListener('transitionend', n, !0)
							: t();
					};
					t.htmlToElement = function (e) {
						var t = document.createElement('template');
						return (e = e.trim()), (t.innerHTML = e), t.content.firstChild;
					};
					t.classToClassList = function (e, t, n, o) {
						void 0 === n && (n = ' '),
							void 0 === o && (o = 'add'),
							e.split(n).forEach(function (e) {
								return 'add' === o ? t.classList.add(e) : t.classList.remove(e);
							});
					};
					t.menuSearchHistory = {
						historyIndex: -1,
						addHistory: function (e) {
							this.historyIndex = e;
						},
						existsInHistory: function (e) {
							return e > this.historyIndex;
						},
						clearHistory: function () {
							this.historyIndex = -1;
						},
					};
				},
			},
			t = {};
		function n(o) {
			var r = t[o];
			if (void 0 !== r) return r.exports;
			var i = (t[o] = { exports: {} });
			return e[o].call(i.exports, i, i.exports, n), i.exports;
		}
		return (
			(n.d = (e, t) => {
				for (var o in t)
					n.o(t, o) &&
						!n.o(e, o) &&
						Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
			}),
			(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
			(n.r = (e) => {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(e, '__esModule', { value: !0 });
			}),
			n(891)
		);
	})(),
);
