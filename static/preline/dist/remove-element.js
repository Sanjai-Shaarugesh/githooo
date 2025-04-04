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
				911: function (e, t, n) {
					/*
					 * HSRemoveElement
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var o,
						i =
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
						r =
							(this && this.__assign) ||
							function () {
								return (
									(r =
										Object.assign ||
										function (e) {
											for (var t, n = 1, o = arguments.length; n < o; n++)
												for (var i in (t = arguments[n]))
													Object.prototype.hasOwnProperty.call(t, i) &&
														(e[i] = t[i]);
											return e;
										}),
									r.apply(this, arguments)
								);
							},
						s =
							(this && this.__importDefault) ||
							function (e) {
								return e && e.__esModule ? e : { default: e };
							};
					Object.defineProperty(t, '__esModule', { value: !0 });
					var l = n(292),
						a = (function (e) {
							function t(t, n) {
								var o = e.call(this, t, n) || this,
									i = t.getAttribute('data-hs-remove-element-options'),
									s = i ? JSON.parse(i) : {},
									l = r(r({}, s), n);
								return (
									(o.removeTargetId = o.el.getAttribute(
										'data-hs-remove-element',
									)),
									(o.removeTarget = document.querySelector(o.removeTargetId)),
									(o.removeTargetAnimationClass =
										(null == l ? void 0 : l.removeTargetAnimationClass) ||
										'hs-removing'),
									o.removeTarget && o.init(),
									o
								);
							}
							return (
								i(t, e),
								(t.prototype.elementClick = function () {
									this.remove();
								}),
								(t.prototype.init = function () {
									var e = this;
									this.createCollection(
										window.$hsRemoveElementCollection,
										this,
									),
										(this.onElementClickListener = function () {
											return e.elementClick();
										}),
										this.el.addEventListener(
											'click',
											this.onElementClickListener,
										);
								}),
								(t.prototype.remove = function () {
									var e = this;
									if (!this.removeTarget) return !1;
									this.removeTarget.classList.add(
										this.removeTargetAnimationClass,
									),
										(0, l.afterTransition)(this.removeTarget, function () {
											return setTimeout(function () {
												return e.removeTarget.remove();
											});
										});
								}),
								(t.prototype.destroy = function () {
									var e = this;
									this.removeTarget.classList.remove(
										this.removeTargetAnimationClass,
									),
										this.el.removeEventListener(
											'click',
											this.onElementClickListener,
										),
										(window.$hsRemoveElementCollection =
											window.$hsRemoveElementCollection.filter(function (t) {
												return t.element.el !== e.el;
											}));
								}),
								(t.getInstance = function (e, t) {
									var n = window.$hsRemoveElementCollection.find(function (t) {
										return (
											t.element.el ===
												('string' == typeof e
													? document.querySelector(e)
													: e) ||
											t.element.el ===
												('string' == typeof e ? document.querySelector(e) : e)
										);
									});
									return n ? (t ? n : n.element.el) : null;
								}),
								(t.autoInit = function () {
									window.$hsRemoveElementCollection ||
										(window.$hsRemoveElementCollection = []),
										window.$hsRemoveElementCollection &&
											(window.$hsRemoveElementCollection =
												window.$hsRemoveElementCollection.filter(function (e) {
													var t = e.element;
													return document.contains(t.el);
												})),
										document
											.querySelectorAll(
												'[data-hs-remove-element]:not(.--prevent-on-load-init)',
											)
											.forEach(function (e) {
												window.$hsRemoveElementCollection.find(function (t) {
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
								t
							);
						})(s(n(961)).default);
					window.addEventListener('load', function () {
						a.autoInit();
					}),
						'undefined' != typeof window && (window.HSRemoveElement = a),
						(t.default = a);
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
					t.isEnoughSpace = function (e, t, n, o, i) {
						void 0 === n && (n = 'auto'),
							void 0 === o && (o = 10),
							void 0 === i && (i = null);
						var r = t.getBoundingClientRect(),
							s = i ? i.getBoundingClientRect() : null,
							l = window.innerHeight,
							a = s ? r.top - s.top : r.top,
							u = (i ? s.bottom : l) - r.bottom,
							c = e.clientHeight + o;
						return 'bottom' === n
							? u >= c
							: 'top' === n
								? a >= c
								: a >= c || u >= c;
					};
					t.isFormElement = function (e) {
						return (
							e instanceof HTMLInputElement ||
							e instanceof HTMLTextAreaElement ||
							e instanceof HTMLSelectElement
						);
					};
					var i = function (e) {
						return (
							!!e &&
							('none' === window.getComputedStyle(e).display ||
								i(e.parentElement))
						);
					};
					t.isParentOrElementHidden = i;
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
								for (var i = [], r = 0; r < arguments.length; r++)
									i[r] = arguments[r];
								clearTimeout(o),
									(o = setTimeout(function () {
										e.apply(n, i);
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
							i = o.getPropertyValue('transition-duration');
						'none' !== o.getPropertyValue('transition-property') &&
						parseFloat(i) > 0
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
		var n = (function n(o) {
			var i = t[o];
			if (void 0 !== i) return i.exports;
			var r = (t[o] = { exports: {} });
			return e[o].call(r.exports, r, r.exports, n), r.exports;
		})(911);
		return n;
	})(),
);
