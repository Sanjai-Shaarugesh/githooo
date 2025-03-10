!(function (t, e) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = e();
	else if ('function' == typeof define && define.amd) define([], e);
	else {
		var n = e();
		for (var o in n) ('object' == typeof exports ? exports : t)[o] = n[o];
	}
})(self, () =>
	(() => {
		'use strict';
		var t = {
				961: (t, e) => {
					Object.defineProperty(e, '__esModule', { value: !0 });
					var n = (function () {
						function t(t, e, n) {
							(this.el = t),
								(this.options = e),
								(this.events = n),
								(this.el = t),
								(this.options = e),
								(this.events = {});
						}
						return (
							(t.prototype.createCollection = function (t, e) {
								var n;
								t.push({
									id:
										(null === (n = null == e ? void 0 : e.el) || void 0 === n
											? void 0
											: n.id) || t.length + 1,
									element: e,
								});
							}),
							(t.prototype.fireEvent = function (t, e) {
								if ((void 0 === e && (e = null), this.events.hasOwnProperty(t)))
									return this.events[t](e);
							}),
							(t.prototype.on = function (t, e) {
								this.events[t] = e;
							}),
							t
						);
					})();
					e.default = n;
				},
				485: function (t, e, n) {
					/*
					 * HSCollapse
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var o,
						i =
							(this && this.__extends) ||
							((o = function (t, e) {
								return (
									(o =
										Object.setPrototypeOf ||
										({ __proto__: [] } instanceof Array &&
											function (t, e) {
												t.__proto__ = e;
											}) ||
										function (t, e) {
											for (var n in e)
												Object.prototype.hasOwnProperty.call(e, n) &&
													(t[n] = e[n]);
										}),
									o(t, e)
								);
							}),
							function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Class extends value ' +
											String(e) +
											' is not a constructor or null',
									);
								function n() {
									this.constructor = t;
								}
								o(t, e),
									(t.prototype =
										null === e
											? Object.create(e)
											: ((n.prototype = e.prototype), new n()));
							}),
						s =
							(this && this.__importDefault) ||
							function (t) {
								return t && t.__esModule ? t : { default: t };
							};
					Object.defineProperty(e, '__esModule', { value: !0 });
					var r = n(292),
						l = (function (t) {
							function e(e, n, o) {
								var i = t.call(this, e, n, o) || this;
								return (
									(i.contentId = i.el.dataset.hsCollapse),
									(i.content = document.querySelector(i.contentId)),
									(i.animationInProcess = !1),
									i.content && i.init(),
									i
								);
							}
							return (
								i(e, t),
								(e.prototype.elementClick = function () {
									this.content.classList.contains('open')
										? this.hide()
										: this.show();
								}),
								(e.prototype.init = function () {
									var t,
										e = this;
									this.createCollection(window.$hsCollapseCollection, this),
										(this.onElementClickListener = function () {
											return e.elementClick();
										}),
										(null === (t = null == this ? void 0 : this.el) ||
										void 0 === t
											? void 0
											: t.ariaExpanded) &&
											(this.el.classList.contains('open')
												? (this.el.ariaExpanded = 'true')
												: (this.el.ariaExpanded = 'false')),
										this.el.addEventListener(
											'click',
											this.onElementClickListener,
										);
								}),
								(e.prototype.hideAllMegaMenuItems = function () {
									this.content
										.querySelectorAll('.hs-mega-menu-content.block')
										.forEach(function (t) {
											t.classList.remove('block'), t.classList.add('hidden');
										});
								}),
								(e.prototype.show = function () {
									var t,
										e = this;
									if (
										this.animationInProcess ||
										this.el.classList.contains('open')
									)
										return !1;
									(this.animationInProcess = !0),
										this.el.classList.add('open'),
										(null === (t = null == this ? void 0 : this.el) ||
										void 0 === t
											? void 0
											: t.ariaExpanded) && (this.el.ariaExpanded = 'true'),
										this.content.classList.add('open'),
										this.content.classList.remove('hidden'),
										(this.content.style.height = '0'),
										setTimeout(function () {
											(e.content.style.height = ''.concat(
												e.content.scrollHeight,
												'px',
											)),
												e.fireEvent('beforeOpen', e.el),
												(0, r.dispatch)('beforeOpen.hs.collapse', e.el, e.el);
										}),
										(0, r.afterTransition)(this.content, function () {
											(e.content.style.height = ''),
												e.fireEvent('open', e.el),
												(0, r.dispatch)('open.hs.collapse', e.el, e.el),
												(e.animationInProcess = !1);
										});
								}),
								(e.prototype.hide = function () {
									var t,
										e = this;
									if (
										this.animationInProcess ||
										!this.el.classList.contains('open')
									)
										return !1;
									(this.animationInProcess = !0),
										this.el.classList.remove('open'),
										(null === (t = null == this ? void 0 : this.el) ||
										void 0 === t
											? void 0
											: t.ariaExpanded) && (this.el.ariaExpanded = 'false'),
										(this.content.style.height = ''.concat(
											this.content.scrollHeight,
											'px',
										)),
										setTimeout(function () {
											e.content.style.height = '0';
										}),
										this.content.classList.remove('open'),
										(0, r.afterTransition)(this.content, function () {
											e.content.classList.add('hidden'),
												(e.content.style.height = ''),
												e.fireEvent('hide', e.el),
												(0, r.dispatch)('hide.hs.collapse', e.el, e.el),
												(e.animationInProcess = !1);
										}),
										this.content.querySelectorAll('.hs-mega-menu-content.block')
											.length && this.hideAllMegaMenuItems();
								}),
								(e.prototype.destroy = function () {
									var t = this;
									this.el.removeEventListener(
										'click',
										this.onElementClickListener,
									),
										(this.content = null),
										(this.animationInProcess = !1),
										(window.$hsCollapseCollection =
											window.$hsCollapseCollection.filter(function (e) {
												return e.element.el !== t.el;
											}));
								}),
								(e.findInCollection = function (t) {
									return (
										window.$hsCollapseCollection.find(function (n) {
											return t instanceof e
												? n.element.el === t.el
												: 'string' == typeof t
													? n.element.el === document.querySelector(t)
													: n.element.el === t;
										}) || null
									);
								}),
								(e.getInstance = function (t, e) {
									void 0 === e && (e = !1);
									var n = window.$hsCollapseCollection.find(function (e) {
										return (
											e.element.el ===
											('string' == typeof t ? document.querySelector(t) : t)
										);
									});
									return n ? (e ? n : n.element.el) : null;
								}),
								(e.autoInit = function () {
									window.$hsCollapseCollection ||
										(window.$hsCollapseCollection = []),
										window.$hsCollapseCollection &&
											(window.$hsCollapseCollection =
												window.$hsCollapseCollection.filter(function (t) {
													var e = t.element;
													return document.contains(e.el);
												})),
										document
											.querySelectorAll(
												'.hs-collapse-toggle:not(.--prevent-on-load-init)',
											)
											.forEach(function (t) {
												window.$hsCollapseCollection.find(function (e) {
													var n;
													return (
														(null === (n = null == e ? void 0 : e.element) ||
														void 0 === n
															? void 0
															: n.el) === t
													);
												}) || new e(t);
											});
								}),
								(e.show = function (t) {
									var n = e.findInCollection(t);
									n &&
										n.element.content.classList.contains('hidden') &&
										n.element.show();
								}),
								(e.hide = function (t) {
									var n = e.findInCollection(t);
									n &&
										!n.element.content.classList.contains('hidden') &&
										n.element.hide();
								}),
								(e.on = function (t, n, o) {
									var i = e.findInCollection(n);
									i && (i.element.events[t] = o);
								}),
								e
							);
						})(s(n(961)).default);
					window.addEventListener('load', function () {
						l.autoInit();
					}),
						'undefined' != typeof window && (window.HSCollapse = l),
						(e.default = l);
				},
				292: function (t, e) {
					/*
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var n = this;
					Object.defineProperty(e, '__esModule', { value: !0 }),
						(e.menuSearchHistory =
							e.classToClassList =
							e.htmlToElement =
							e.afterTransition =
							e.dispatch =
							e.debounce =
							e.isJson =
							e.isDirectChild =
							e.isFormElement =
							e.isParentOrElementHidden =
							e.isEnoughSpace =
							e.isIpadOS =
							e.isIOS =
							e.getZIndex =
							e.getClassPropertyAlt =
							e.getClassProperty =
							e.stringToBoolean =
								void 0),
						(e.getHighestZIndex = function (t) {
							var e = Number.NEGATIVE_INFINITY;
							return (
								t.forEach(function (t) {
									var n = o(t);
									'auto' !== n && (n = parseInt(n, 10)) > e && (e = n);
								}),
								e
							);
						});
					e.stringToBoolean = function (t) {
						return 'true' === t;
					};
					e.getClassProperty = function (t, e, n) {
						return (
							void 0 === n && (n = ''),
							(window.getComputedStyle(t).getPropertyValue(e) || n).replace(
								' ',
								'',
							)
						);
					};
					e.getClassPropertyAlt = function (t, e, n) {
						void 0 === n && (n = '');
						var o = '';
						return (
							t.classList.forEach(function (t) {
								t.includes(e) && (o = t);
							}),
							o.match(/:(.*)]/) ? o.match(/:(.*)]/)[1] : n
						);
					};
					var o = function (t) {
						return window.getComputedStyle(t).getPropertyValue('z-index');
					};
					e.getZIndex = o;
					e.isIOS = function () {
						return (
							!!/iPad|iPhone|iPod/.test(navigator.platform) ||
							(navigator.maxTouchPoints &&
								navigator.maxTouchPoints > 2 &&
								/MacIntel/.test(navigator.platform))
						);
					};
					e.isIpadOS = function () {
						return (
							navigator.maxTouchPoints &&
							navigator.maxTouchPoints > 2 &&
							/MacIntel/.test(navigator.platform)
						);
					};
					e.isDirectChild = function (t, e) {
						for (var n = t.children, o = 0; o < n.length; o++)
							if (n[o] === e) return !0;
						return !1;
					};
					e.isEnoughSpace = function (t, e, n, o, i) {
						void 0 === n && (n = 'auto'),
							void 0 === o && (o = 10),
							void 0 === i && (i = null);
						var s = e.getBoundingClientRect(),
							r = i ? i.getBoundingClientRect() : null,
							l = window.innerHeight,
							a = r ? s.top - r.top : s.top,
							c = (i ? r.bottom : l) - s.bottom,
							u = t.clientHeight + o;
						return 'bottom' === n
							? c >= u
							: 'top' === n
								? a >= u
								: a >= u || c >= u;
					};
					e.isFormElement = function (t) {
						return (
							t instanceof HTMLInputElement ||
							t instanceof HTMLTextAreaElement ||
							t instanceof HTMLSelectElement
						);
					};
					var i = function (t) {
						return (
							!!t &&
							('none' === window.getComputedStyle(t).display ||
								i(t.parentElement))
						);
					};
					e.isParentOrElementHidden = i;
					e.isJson = function (t) {
						if ('string' != typeof t) return !1;
						var e = t.trim()[0],
							n = t.trim().slice(-1);
						if (('{' === e && '}' === n) || ('[' === e && ']' === n))
							try {
								return JSON.parse(t), !0;
							} catch (t) {
								return !1;
							}
						return !1;
					};
					e.debounce = function (t, e) {
						var o;
						return (
							void 0 === e && (e = 200),
							function () {
								for (var i = [], s = 0; s < arguments.length; s++)
									i[s] = arguments[s];
								clearTimeout(o),
									(o = setTimeout(function () {
										t.apply(n, i);
									}, e));
							}
						);
					};
					e.dispatch = function (t, e, n) {
						void 0 === n && (n = null);
						var o = new CustomEvent(t, {
							detail: { payload: n },
							bubbles: !0,
							cancelable: !0,
							composed: !1,
						});
						e.dispatchEvent(o);
					};
					e.afterTransition = function (t, e) {
						var n = function () {
								e(), t.removeEventListener('transitionend', n, !0);
							},
							o = window.getComputedStyle(t),
							i = o.getPropertyValue('transition-duration');
						'none' !== o.getPropertyValue('transition-property') &&
						parseFloat(i) > 0
							? t.addEventListener('transitionend', n, !0)
							: e();
					};
					e.htmlToElement = function (t) {
						var e = document.createElement('template');
						return (t = t.trim()), (e.innerHTML = t), e.content.firstChild;
					};
					e.classToClassList = function (t, e, n, o) {
						void 0 === n && (n = ' '),
							void 0 === o && (o = 'add'),
							t.split(n).forEach(function (t) {
								return 'add' === o ? e.classList.add(t) : e.classList.remove(t);
							});
					};
					e.menuSearchHistory = {
						historyIndex: -1,
						addHistory: function (t) {
							this.historyIndex = t;
						},
						existsInHistory: function (t) {
							return t > this.historyIndex;
						},
						clearHistory: function () {
							this.historyIndex = -1;
						},
					};
				},
			},
			e = {};
		var n = (function n(o) {
			var i = e[o];
			if (void 0 !== i) return i.exports;
			var s = (e[o] = { exports: {} });
			return t[o].call(s.exports, s, s.exports, n), s.exports;
		})(485);
		return n;
	})(),
);
