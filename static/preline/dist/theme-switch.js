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
				502: function (e, t, n) {
					/*
					 * HSThemeSwitch
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
					var l = (function (e) {
						function t(t, n) {
							var o = e.call(this, t, n) || this,
								i = t.getAttribute('data-hs-theme-switch'),
								s = i ? JSON.parse(i) : {},
								l = r(r({}, s), n);
							return (
								(o.theme =
									(null == l ? void 0 : l.theme) ||
									localStorage.getItem('hs_theme') ||
									'default'),
								(o.type = (null == l ? void 0 : l.type) || 'change'),
								(o.themeSet = ['light', 'dark', 'default']),
								o.init(),
								o
							);
						}
						return (
							i(t, e),
							(t.prototype.elementChange = function (e) {
								var t = e.target.checked ? 'dark' : 'default';
								this.setAppearance(t), this.toggleObserveSystemTheme();
							}),
							(t.prototype.elementClick = function (e) {
								this.setAppearance(e), this.toggleObserveSystemTheme();
							}),
							(t.prototype.init = function () {
								this.createCollection(window.$hsThemeSwitchCollection, this),
									'default' !== this.theme && this.setAppearance(),
									'click' === this.type
										? this.buildSwitchTypeOfClick()
										: this.buildSwitchTypeOfChange();
							}),
							(t.prototype.buildSwitchTypeOfChange = function () {
								var e = this;
								(this.el.checked = 'dark' === this.theme),
									this.toggleObserveSystemTheme(),
									(this.onElementChangeListener = function (t) {
										return e.elementChange(t);
									}),
									this.el.addEventListener(
										'change',
										this.onElementChangeListener,
									);
							}),
							(t.prototype.buildSwitchTypeOfClick = function () {
								var e = this,
									t = this.el.getAttribute('data-hs-theme-click-value');
								this.toggleObserveSystemTheme(),
									(this.onElementClickListener = function () {
										return e.elementClick(t);
									}),
									this.el.addEventListener(
										'click',
										this.onElementClickListener,
									);
							}),
							(t.prototype.setResetStyles = function () {
								var e = document.createElement('style');
								return (
									(e.innerText = '*{transition: unset !important;}'),
									e.setAttribute('data-hs-appearance-onload-styles', ''),
									document.head.appendChild(e),
									e
								);
							}),
							(t.prototype.addSystemThemeObserver = function () {
								var e = this;
								window
									.matchMedia('(prefers-color-scheme: dark)')
									.addEventListener('change', function (t) {
										t.matches
											? e.setAppearance('dark', !1)
											: e.setAppearance('default', !1);
									});
							}),
							(t.prototype.removeSystemThemeObserver = function () {
								window.matchMedia('(prefers-color-scheme: dark)')
									.removeEventListener;
							}),
							(t.prototype.toggleObserveSystemTheme = function () {
								'auto' === localStorage.getItem('hs_theme')
									? this.addSystemThemeObserver()
									: this.removeSystemThemeObserver();
							}),
							(t.prototype.setAppearance = function (e, t, n) {
								void 0 === e && (e = this.theme),
									void 0 === t && (t = !0),
									void 0 === n && (n = !0);
								var o = document.querySelector('html'),
									i = this.setResetStyles();
								t && localStorage.setItem('hs_theme', e),
									'auto' === e &&
										(e = window.matchMedia('(prefers-color-scheme: dark)')
											.matches
											? 'dark'
											: 'default'),
									o.classList.remove('light', 'dark', 'default', 'auto'),
									o.classList.add(e),
									setTimeout(function () {
										return i.remove();
									}),
									n &&
										window.dispatchEvent(
											new CustomEvent('on-hs-appearance-change', { detail: e }),
										);
							}),
							(t.prototype.destroy = function () {
								var e = this;
								'change' === this.type &&
									this.el.removeEventListener(
										'change',
										this.onElementChangeListener,
									),
									'click' === this.type &&
										this.el.removeEventListener(
											'click',
											this.onElementClickListener,
										),
									(window.$hsThemeSwitchCollection =
										window.$hsThemeSwitchCollection.filter(function (t) {
											return t.element.el !== e.el;
										}));
							}),
							(t.getInstance = function (e, t) {
								var n = window.$hsThemeSwitchCollection.find(function (t) {
									return (
										t.element.el ===
										('string' == typeof e ? document.querySelector(e) : e)
									);
								});
								return n ? (t ? n : n.element.el) : null;
							}),
							(t.autoInit = function () {
								window.$hsThemeSwitchCollection ||
									(window.$hsThemeSwitchCollection = []),
									window.$hsThemeSwitchCollection &&
										(window.$hsThemeSwitchCollection =
											window.$hsThemeSwitchCollection.filter(function (e) {
												var t = e.element;
												return document.contains(t.el);
											})),
									document
										.querySelectorAll(
											'[data-hs-theme-switch]:not(.--prevent-on-load-init)',
										)
										.forEach(function (e) {
											window.$hsThemeSwitchCollection.find(function (t) {
												var n;
												return (
													(null === (n = null == t ? void 0 : t.element) ||
													void 0 === n
														? void 0
														: n.el) === e
												);
											}) || new t(e, { type: 'change' });
										}),
									document
										.querySelectorAll(
											'[data-hs-theme-click-value]:not(.--prevent-on-load-init)',
										)
										.forEach(function (e) {
											window.$hsThemeSwitchCollection.find(function (t) {
												var n;
												return (
													(null === (n = null == t ? void 0 : t.element) ||
													void 0 === n
														? void 0
														: n.el) === e
												);
											}) || new t(e, { type: 'click' });
										});
							}),
							t
						);
					})(s(n(961)).default);
					window.addEventListener('load', function () {
						l.autoInit();
					}),
						window.$hsThemeSwitchCollection &&
							window.addEventListener('on-hs-appearance-change', function (e) {
								window.$hsThemeSwitchCollection.forEach(function (t) {
									t.element.el.checked = 'dark' === e.detail;
								});
							}),
						'undefined' != typeof window && (window.HSThemeSwitch = l),
						(t.default = l);
				},
			},
			t = {};
		var n = (function n(o) {
			var i = t[o];
			if (void 0 !== i) return i.exports;
			var r = (t[o] = { exports: {} });
			return e[o].call(r.exports, r, r.exports, n), r.exports;
		})(502);
		return n;
	})(),
);
