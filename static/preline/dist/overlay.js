!(function (e, t) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = t();
	else if ('function' == typeof define && define.amd) define([], t);
	else {
		var o = t();
		for (var n in o) ('object' == typeof exports ? exports : e)[n] = o[n];
	}
})(self, () =>
	(() => {
		'use strict';
		var e = {
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
					var o = (function () {
						function e(e, t, o) {
							(this.el = e),
								(this.options = t),
								(this.events = o),
								(this.el = e),
								(this.options = t),
								(this.events = {});
						}
						return (
							(e.prototype.createCollection = function (e, t) {
								var o;
								e.push({
									id:
										(null === (o = null == t ? void 0 : t.el) || void 0 === o
											? void 0
											: o.id) || e.length + 1,
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
					t.default = o;
				},
				850: function (e, t, o) {
					/*
					 * HSOverlay
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var n,
						i =
							(this && this.__extends) ||
							((n = function (e, t) {
								return (
									(n =
										Object.setPrototypeOf ||
										({ __proto__: [] } instanceof Array &&
											function (e, t) {
												e.__proto__ = t;
											}) ||
										function (e, t) {
											for (var o in t)
												Object.prototype.hasOwnProperty.call(t, o) &&
													(e[o] = t[o]);
										}),
									n(e, t)
								);
							}),
							function (e, t) {
								if ('function' != typeof t && null !== t)
									throw new TypeError(
										'Class extends value ' +
											String(t) +
											' is not a constructor or null',
									);
								function o() {
									this.constructor = e;
								}
								n(e, t),
									(e.prototype =
										null === t
											? Object.create(t)
											: ((o.prototype = t.prototype), new o()));
							}),
						r =
							(this && this.__assign) ||
							function () {
								return (
									(r =
										Object.assign ||
										function (e) {
											for (var t, o = 1, n = arguments.length; o < n; o++)
												for (var i in (t = arguments[o]))
													Object.prototype.hasOwnProperty.call(t, i) &&
														(e[i] = t[i]);
											return e;
										}),
									r.apply(this, arguments)
								);
							},
						l =
							(this && this.__importDefault) ||
							function (e) {
								return e && e.__esModule ? e : { default: e };
							};
					Object.defineProperty(t, '__esModule', { value: !0 });
					var a = o(292),
						s = o(223),
						c = (function (e) {
							function t(t, o, n) {
								var i,
									l,
									c,
									d,
									u,
									p,
									h = e.call(this, t, o, n) || this;
								h.toggleButtons = Array.from(
									document.querySelectorAll(
										'[data-hs-overlay="#'.concat(h.el.id, '"]'),
									),
								);
								var f = h.collectToggleParameters(h.toggleButtons),
									y = t.getAttribute('data-hs-overlay-options'),
									v = y ? JSON.parse(y) : {},
									m = r(r(r({}, v), f), o);
								(h.hiddenClass =
									(null == m ? void 0 : m.hiddenClass) || 'hidden'),
									(h.emulateScrollbarSpace =
										(null == m ? void 0 : m.emulateScrollbarSpace) || !1),
									(h.isClosePrev =
										null === (i = null == m ? void 0 : m.isClosePrev) ||
										void 0 === i ||
										i),
									(h.backdropClasses =
										null !== (l = null == m ? void 0 : m.backdropClasses) &&
										void 0 !== l
											? l
											: 'hs-overlay-backdrop transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900'),
									(h.backdropParent =
										'string' == typeof m.backdropParent
											? document.querySelector(m.backdropParent)
											: document.body),
									(h.backdropExtraClasses =
										null !==
											(c = null == m ? void 0 : m.backdropExtraClasses) &&
										void 0 !== c
											? c
											: ''),
									(h.moveOverlayToBody =
										(null == m ? void 0 : m.moveOverlayToBody) || null),
									(h.openNextOverlay = !1),
									(h.autoHide = null),
									(h.initContainer =
										(null === (d = h.el) || void 0 === d
											? void 0
											: d.parentElement) || null),
									(h.isCloseWhenClickInside = (0, a.stringToBoolean)(
										(0, a.getClassProperty)(
											h.el,
											'--close-when-click-inside',
											'false',
										) || 'false',
									)),
									(h.isTabAccessibilityLimited = (0, a.stringToBoolean)(
										(0, a.getClassProperty)(
											h.el,
											'--tab-accessibility-limited',
											'true',
										) || 'true',
									)),
									(h.isLayoutAffect = (0, a.stringToBoolean)(
										(0, a.getClassProperty)(
											h.el,
											'--is-layout-affect',
											'false',
										) || 'false',
									)),
									(h.hasAutofocus = (0, a.stringToBoolean)(
										(0, a.getClassProperty)(h.el, '--has-autofocus', 'true') ||
											'true',
									)),
									(h.hasAbilityToCloseOnBackdropClick = (0, a.stringToBoolean)(
										h.el.getAttribute('data-hs-overlay-keyboard') || 'true',
									));
								var C = (0, a.getClassProperty)(h.el, '--auto-close'),
									b = (0, a.getClassProperty)(
										h.el,
										'--auto-close-equality-type',
									),
									g = (0, a.getClassProperty)(h.el, '--opened');
								return (
									(h.autoClose =
										!isNaN(+C) && isFinite(+C) ? +C : s.BREAKPOINTS[C] || null),
									(h.autoCloseEqualityType =
										null !== (u = b) && void 0 !== u ? u : null),
									(h.openedBreakpoint =
										(!isNaN(+g) && isFinite(+g) ? +g : s.BREAKPOINTS[g]) ||
										null),
									(h.animationTarget =
										(null === (p = null == h ? void 0 : h.el) || void 0 === p
											? void 0
											: p.querySelector('.hs-overlay-animation-target')) ||
										h.el),
									(h.onElementClickListener = []),
									h.init(),
									h
								);
							}
							return (
								i(t, e),
								(t.prototype.elementClick = function () {
									this.el.classList.contains('opened')
										? this.close()
										: this.open();
								}),
								(t.prototype.overlayClick = function (e) {
									e.target.id &&
										'#'.concat(e.target.id) === this.el.id &&
										this.isCloseWhenClickInside &&
										this.hasAbilityToCloseOnBackdropClick &&
										this.close();
								}),
								(t.prototype.backdropClick = function () {
									this.close();
								}),
								(t.prototype.init = function () {
									var e = this;
									if (
										(this.createCollection(window.$hsOverlayCollection, this),
										this.isLayoutAffect && this.openedBreakpoint)
									) {
										var o = t.getInstance(this.el, !0);
										t.setOpened(this.openedBreakpoint, o);
									}
									(this.onOverlayClickListener = function (t) {
										return e.overlayClick(t);
									}),
										this.el.addEventListener(
											'click',
											this.onOverlayClickListener,
										),
										this.toggleButtons.length && this.buildToggleButtons();
								}),
								(t.prototype.buildToggleButtons = function () {
									var e = this;
									this.toggleButtons.forEach(function (t) {
										e.el.classList.contains('opened')
											? (t.ariaExpanded = 'true')
											: (t.ariaExpanded = 'false'),
											e.onElementClickListener.push({
												el: t,
												fn: function () {
													return e.elementClick();
												},
											}),
											t.addEventListener(
												'click',
												e.onElementClickListener.find(function (e) {
													return e.el === t;
												}).fn,
											);
									});
								}),
								(t.prototype.hideAuto = function () {
									var e = this,
										t = parseInt(
											(0, a.getClassProperty)(this.el, '--auto-hide', '0'),
										);
									t &&
										(this.autoHide = setTimeout(function () {
											e.close();
										}, t));
								}),
								(t.prototype.checkTimer = function () {
									this.autoHide &&
										(clearTimeout(this.autoHide), (this.autoHide = null));
								}),
								(t.prototype.buildBackdrop = function () {
									var e = this,
										t = this.el.classList.value.split(' '),
										o = parseInt(
											window
												.getComputedStyle(this.el)
												.getPropertyValue('z-index'),
										),
										n =
											this.el.getAttribute(
												'data-hs-overlay-backdrop-container',
											) || !1;
									this.backdrop = document.createElement('div');
									var i = ''
											.concat(this.backdropClasses, ' ')
											.concat(this.backdropExtraClasses),
										r =
											'static' !==
											(0, a.getClassProperty)(
												this.el,
												'--overlay-backdrop',
												'true',
											),
										l =
											'false' ===
											(0, a.getClassProperty)(
												this.el,
												'--overlay-backdrop',
												'true',
											);
									(this.backdrop.id = ''.concat(this.el.id, '-backdrop')),
										'style' in this.backdrop &&
											(this.backdrop.style.zIndex = ''.concat(o - 1));
									for (var s = 0, c = t; s < c.length; s++) {
										var d = c[s];
										(d.startsWith('hs-overlay-backdrop-open:') ||
											d.includes(':hs-overlay-backdrop-open:')) &&
											(i += ' '.concat(d));
									}
									l ||
										(n &&
											((this.backdrop = document
												.querySelector(n)
												.cloneNode(!0)),
											this.backdrop.classList.remove('hidden'),
											(i = ''.concat(this.backdrop.classList.toString())),
											(this.backdrop.classList.value = '')),
										r &&
											((this.onBackdropClickListener = function () {
												return e.backdropClick();
											}),
											this.backdrop.addEventListener(
												'click',
												this.onBackdropClickListener,
												!0,
											)),
										this.backdrop.setAttribute(
											'data-hs-overlay-backdrop-template',
											'',
										),
										this.backdropParent.appendChild(this.backdrop),
										setTimeout(function () {
											e.backdrop.classList.value = i;
										}));
								}),
								(t.prototype.destroyBackdrop = function () {
									var e = document.querySelector(
										'#'.concat(this.el.id, '-backdrop'),
									);
									e &&
										(this.openNextOverlay &&
											(e.style.transitionDuration = ''.concat(
												1.8 *
													parseFloat(
														window
															.getComputedStyle(e)
															.transitionDuration.replace(/[^\d.-]/g, ''),
													),
												's',
											)),
										e.classList.add('opacity-0'),
										(0, a.afterTransition)(e, function () {
											e.remove();
										}));
								}),
								(t.prototype.focusElement = function () {
									var e = this.el.querySelector('[autofocus]');
									if (!e) return !1;
									e.focus();
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
								(t.prototype.collectToggleParameters = function (e) {
									var t = {};
									return (
										e.forEach(function (e) {
											var o = e.getAttribute('data-hs-overlay-options'),
												n = o ? JSON.parse(o) : {};
											t = r(r({}, t), n);
										}),
										t
									);
								}),
								(t.prototype.open = function () {
									var e = this,
										t = document.querySelectorAll('.hs-overlay.open'),
										o = window.$hsOverlayCollection.find(function (e) {
											return (
												Array.from(t).includes(e.element.el) &&
												!e.element.isLayoutAffect
											);
										}),
										n = document.querySelectorAll(
											'[data-hs-overlay="#'.concat(this.el.id, '"]'),
										),
										i =
											'true' !==
											(0, a.getClassProperty)(
												this.el,
												'--body-scroll',
												'false',
											);
									if (this.isClosePrev && o)
										return (
											(this.openNextOverlay = !0),
											o.element.close().then(function () {
												e.open(), (e.openNextOverlay = !1);
											})
										);
									i &&
										((document.body.style.overflow = 'hidden'),
										this.emulateScrollbarSpace &&
											(document.body.style.paddingRight = ''.concat(
												this.getScrollbarSize(),
												'px',
											))),
										this.buildBackdrop(),
										this.checkTimer(),
										this.hideAuto(),
										n.forEach(function (e) {
											e.ariaExpanded && (e.ariaExpanded = 'true');
										}),
										this.el.classList.remove(this.hiddenClass),
										this.el.setAttribute('aria-overlay', 'true'),
										this.el.setAttribute('tabindex', '-1'),
										setTimeout(function () {
											if (e.el.classList.contains('opened')) return !1;
											e.el.classList.add('open', 'opened'),
												e.isLayoutAffect &&
													document.body.classList.add('hs-overlay-body-open'),
												e.fireEvent('open', e.el),
												(0, a.dispatch)('open.hs.overlay', e.el, e.el),
												e.hasAutofocus && e.focusElement();
										}, 50);
								}),
								(t.prototype.close = function (e) {
									var t = this;
									void 0 === e && (e = !1),
										this.isLayoutAffect &&
											document.body.classList.remove('hs-overlay-body-open');
									var o = function (e) {
										if (t.el.classList.contains('open')) return !1;
										document
											.querySelectorAll(
												'[data-hs-overlay="#'.concat(t.el.id, '"]'),
											)
											.forEach(function (e) {
												e.ariaExpanded && (e.ariaExpanded = 'false');
											}),
											t.el.classList.add(t.hiddenClass),
											t.destroyBackdrop(),
											t.fireEvent('close', t.el),
											(0, a.dispatch)('close.hs.overlay', t.el, t.el),
											document.querySelector('.hs-overlay.opened') ||
												((document.body.style.overflow = ''),
												t.emulateScrollbarSpace &&
													(document.body.style.paddingRight = '')),
											e(t.el);
									};
									return new Promise(function (n) {
										t.el.classList.remove('open', 'opened'),
											t.el.removeAttribute('aria-overlay'),
											t.el.removeAttribute('tabindex'),
											e
												? o(n)
												: (0, a.afterTransition)(
														t.animationTarget,
														function () {
															return o(n);
														},
													);
									});
								}),
								(t.prototype.destroy = function () {
									var e = this;
									this.el.classList.remove('open', 'opened', this.hiddenClass),
										this.isLayoutAffect &&
											document.body.classList.remove('hs-overlay-body-open'),
										this.el.removeEventListener(
											'click',
											this.onOverlayClickListener,
										),
										this.onElementClickListener.length &&
											(this.onElementClickListener.forEach(function (e) {
												var t = e.el,
													o = e.fn;
												t.removeEventListener('click', o);
											}),
											(this.onElementClickListener = null)),
										this.backdrop &&
											this.backdrop.removeEventListener(
												'click',
												this.onBackdropClickListener,
											),
										this.backdrop &&
											(this.backdrop.remove(), (this.backdrop = null)),
										(window.$hsOverlayCollection =
											window.$hsOverlayCollection.filter(function (t) {
												return t.element.el !== e.el;
											}));
								}),
								(t.findInCollection = function (e) {
									return (
										window.$hsOverlayCollection.find(function (o) {
											return e instanceof t
												? o.element.el === e.el
												: 'string' == typeof e
													? o.element.el === document.querySelector(e)
													: o.element.el === e;
										}) || null
									);
								}),
								(t.getInstance = function (e, t) {
									var o = 'string' == typeof e ? document.querySelector(e) : e,
										n = (null == o ? void 0 : o.getAttribute('data-hs-overlay'))
											? o.getAttribute('data-hs-overlay')
											: e,
										i = window.$hsOverlayCollection.find(function (e) {
											return (
												e.element.el ===
													('string' == typeof n
														? document.querySelector(n)
														: n) ||
												e.element.el ===
													('string' == typeof n ? document.querySelector(n) : n)
											);
										});
									return i ? (t ? i : i.element.el) : null;
								}),
								(t.autoInit = function () {
									window.$hsOverlayCollection ||
										((window.$hsOverlayCollection = []),
										document.addEventListener('keydown', function (e) {
											return t.accessibility(e);
										})),
										window.$hsOverlayCollection &&
											(window.$hsOverlayCollection =
												window.$hsOverlayCollection.filter(function (e) {
													var t = e.element;
													return document.contains(t.el);
												})),
										document
											.querySelectorAll(
												'.hs-overlay:not(.--prevent-on-load-init)',
											)
											.forEach(function (e) {
												window.$hsOverlayCollection.find(function (t) {
													var o;
													return (
														(null === (o = null == t ? void 0 : t.element) ||
														void 0 === o
															? void 0
															: o.el) === e
													);
												}) || new t(e);
											});
								}),
								(t.open = function (e) {
									var o = t.findInCollection(e);
									o &&
										o.element.el.classList.contains(o.element.hiddenClass) &&
										o.element.open();
								}),
								(t.close = function (e) {
									var o = t.findInCollection(e);
									o &&
										!o.element.el.classList.contains(o.element.hiddenClass) &&
										o.element.close();
								}),
								(t.setOpened = function (e, t) {
									document.body.clientWidth >= e
										? (document.body.classList.add('hs-overlay-body-open'),
											t.element.open())
										: t.element.close(!0);
								}),
								(t.accessibility = function (e) {
									var t,
										o,
										n = window.$hsOverlayCollection.filter(function (e) {
											return e.element.el.classList.contains('open');
										}),
										i = n[n.length - 1],
										r =
											null ===
												(o =
													null === (t = null == i ? void 0 : i.element) ||
													void 0 === t
														? void 0
														: t.el) || void 0 === o
												? void 0
												: o.querySelectorAll(
														'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
													),
										l = [];
									(null == r ? void 0 : r.length) &&
										r.forEach(function (e) {
											(0, a.isParentOrElementHidden)(e) || l.push(e);
										});
									var s = i && !e.metaKey;
									if (
										s &&
										!i.element.isTabAccessibilityLimited &&
										'Tab' === e.code
									)
										return !1;
									s &&
										l.length &&
										'Tab' === e.code &&
										(e.preventDefault(), this.onTab(i)),
										s &&
											'Escape' === e.code &&
											(e.preventDefault(), this.onEscape(i));
								}),
								(t.onEscape = function (e) {
									e &&
										e.element.hasAbilityToCloseOnBackdropClick &&
										e.element.close();
								}),
								(t.onTab = function (e) {
									var t = e.element.el,
										o = Array.from(
											t.querySelectorAll(
												'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
											),
										);
									if (0 === o.length) return !1;
									var n = t.querySelector(':focus');
									if (n) {
										for (var i = !1, r = 0, l = o; r < l.length; r++) {
											var a = l[r];
											if (i) return void a.focus();
											a === n && (i = !0);
										}
										o[0].focus();
									} else o[0].focus();
								}),
								(t.on = function (e, o, n) {
									var i = t.findInCollection(o);
									i && (i.element.events[e] = n);
								}),
								t
							);
						})(l(o(961)).default),
						d = function () {
							if (
								!window.$hsOverlayCollection.length ||
								!window.$hsOverlayCollection.find(function (e) {
									return e.element.moveOverlayToBody;
								})
							)
								return !1;
							window.$hsOverlayCollection
								.filter(function (e) {
									return e.element.moveOverlayToBody;
								})
								.forEach(function (e) {
									var t = e.element.moveOverlayToBody,
										o = e.element.initContainer,
										n = document.querySelector('body'),
										i = e.element.el;
									if (!o && i) return !1;
									document.body.clientWidth <= t && !(0, a.isDirectChild)(n, i)
										? n.appendChild(i)
										: document.body.clientWidth > t &&
											!o.contains(i) &&
											o.appendChild(i);
								});
						};
					window.addEventListener('load', function () {
						c.autoInit(), d();
					}),
						window.addEventListener('resize', function () {
							!(function () {
								if (
									!window.$hsOverlayCollection.length ||
									!window.$hsOverlayCollection.find(function (e) {
										return e.element.autoClose;
									})
								)
									return !1;
								window.$hsOverlayCollection
									.filter(function (e) {
										return e.element.autoClose;
									})
									.forEach(function (e) {
										var t = e.element,
											o = t.autoCloseEqualityType,
											n = t.autoClose;
										('less-than' === o
											? document.body.clientWidth <= n
											: document.body.clientWidth >= n) && e.element.close(!0);
									});
							})(),
								d(),
								(function () {
									if (
										!window.$hsOverlayCollection.length ||
										!window.$hsOverlayCollection.find(function (e) {
											return e.element.autoClose;
										})
									)
										return !1;
									window.$hsOverlayCollection
										.filter(function (e) {
											return e.element.autoClose;
										})
										.forEach(function (e) {
											var t = e.element,
												o = t.autoCloseEqualityType,
												n = t.autoClose;
											('less-than' === o
												? document.body.clientWidth <= n
												: document.body.clientWidth >= n) &&
												e.element.close(!0);
										});
								})(),
								(function () {
									if (
										!window.$hsOverlayCollection.length ||
										!window.$hsOverlayCollection.find(function (e) {
											return e.element.el.classList.contains('opened');
										})
									)
										return !1;
									window.$hsOverlayCollection
										.filter(function (e) {
											return e.element.el.classList.contains('opened');
										})
										.forEach(function (e) {
											var t = parseInt(
													window
														.getComputedStyle(e.element.el)
														.getPropertyValue('z-index'),
												),
												o = document.querySelector(
													'#'.concat(e.element.el.id, '-backdrop'),
												);
											return (
												!!o &&
												t !==
													parseInt(
														window
															.getComputedStyle(o)
															.getPropertyValue('z-index'),
													) +
														1 &&
												('style' in o && (o.style.zIndex = ''.concat(t - 1)),
												void document.body.classList.add(
													'hs-overlay-body-open',
												))
											);
										});
								})();
						}),
						'undefined' != typeof window && (window.HSOverlay = c),
						(t.default = c);
				},
				292: function (e, t) {
					/*
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var o = this;
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
									var o = n(e);
									'auto' !== o && (o = parseInt(o, 10)) > t && (t = o);
								}),
								t
							);
						});
					t.stringToBoolean = function (e) {
						return 'true' === e;
					};
					t.getClassProperty = function (e, t, o) {
						return (
							void 0 === o && (o = ''),
							(window.getComputedStyle(e).getPropertyValue(t) || o).replace(
								' ',
								'',
							)
						);
					};
					t.getClassPropertyAlt = function (e, t, o) {
						void 0 === o && (o = '');
						var n = '';
						return (
							e.classList.forEach(function (e) {
								e.includes(t) && (n = e);
							}),
							n.match(/:(.*)]/) ? n.match(/:(.*)]/)[1] : o
						);
					};
					var n = function (e) {
						return window.getComputedStyle(e).getPropertyValue('z-index');
					};
					t.getZIndex = n;
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
						for (var o = e.children, n = 0; n < o.length; n++)
							if (o[n] === t) return !0;
						return !1;
					};
					t.isEnoughSpace = function (e, t, o, n, i) {
						void 0 === o && (o = 'auto'),
							void 0 === n && (n = 10),
							void 0 === i && (i = null);
						var r = t.getBoundingClientRect(),
							l = i ? i.getBoundingClientRect() : null,
							a = window.innerHeight,
							s = l ? r.top - l.top : r.top,
							c = (i ? l.bottom : a) - r.bottom,
							d = e.clientHeight + n;
						return 'bottom' === o
							? c >= d
							: 'top' === o
								? s >= d
								: s >= d || c >= d;
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
							o = e.trim().slice(-1);
						if (('{' === t && '}' === o) || ('[' === t && ']' === o))
							try {
								return JSON.parse(e), !0;
							} catch (e) {
								return !1;
							}
						return !1;
					};
					t.debounce = function (e, t) {
						var n;
						return (
							void 0 === t && (t = 200),
							function () {
								for (var i = [], r = 0; r < arguments.length; r++)
									i[r] = arguments[r];
								clearTimeout(n),
									(n = setTimeout(function () {
										e.apply(o, i);
									}, t));
							}
						);
					};
					t.dispatch = function (e, t, o) {
						void 0 === o && (o = null);
						var n = new CustomEvent(e, {
							detail: { payload: o },
							bubbles: !0,
							cancelable: !0,
							composed: !1,
						});
						t.dispatchEvent(n);
					};
					t.afterTransition = function (e, t) {
						var o = function () {
								t(), e.removeEventListener('transitionend', o, !0);
							},
							n = window.getComputedStyle(e),
							i = n.getPropertyValue('transition-duration');
						'none' !== n.getPropertyValue('transition-property') &&
						parseFloat(i) > 0
							? e.addEventListener('transitionend', o, !0)
							: t();
					};
					t.htmlToElement = function (e) {
						var t = document.createElement('template');
						return (e = e.trim()), (t.innerHTML = e), t.content.firstChild;
					};
					t.classToClassList = function (e, t, o, n) {
						void 0 === o && (o = ' '),
							void 0 === n && (n = 'add'),
							e.split(o).forEach(function (e) {
								return 'add' === n ? t.classList.add(e) : t.classList.remove(e);
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
		var o = (function o(n) {
			var i = t[n];
			if (void 0 !== i) return i.exports;
			var r = (t[n] = { exports: {} });
			return e[n].call(r.exports, r, r.exports, o), r.exports;
		})(850);
		return o;
	})(),
);
