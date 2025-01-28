var e = {
		615: (e, t, i) => {
			i.d(t, { A: () => n });
			class n {
				constructor(e, t, i) {
					(this.el = e),
						(this.options = t),
						(this.events = i),
						(this.el = e),
						(this.options = t),
						(this.events = {});
				}
				createCollection(e, t) {
					var i;
					e.push({
						id:
							(null === (i = null == t ? void 0 : t.el) || void 0 === i
								? void 0
								: i.id) || e.length + 1,
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
	},
	t = {};
function i(n) {
	var s = t[n];
	if (void 0 !== s) return s.exports;
	var h = (t[n] = { exports: {} });
	return e[n](h, h.exports, i), h.exports;
}
(i.d = (e, t) => {
	for (var n in t)
		i.o(t, n) &&
			!i.o(e, n) &&
			Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
}),
	(i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var n = {};
i.d(n, { A: () => o });
var s = i(615);
/*
 * HSThemeSwitch
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */ class h extends s.A {
	constructor(e, t) {
		super(e, t);
		const i = e.getAttribute('data-hs-theme-switch'),
			n = i ? JSON.parse(i) : {},
			s = Object.assign(Object.assign({}, n), t);
		(this.theme =
			(null == s ? void 0 : s.theme) ||
			localStorage.getItem('hs_theme') ||
			'default'),
			(this.type = (null == s ? void 0 : s.type) || 'change'),
			(this.themeSet = ['light', 'dark', 'default']),
			this.init();
	}
	elementChange(e) {
		const t = e.target.checked ? 'dark' : 'default';
		this.setAppearance(t), this.toggleObserveSystemTheme();
	}
	elementClick(e) {
		this.setAppearance(e), this.toggleObserveSystemTheme();
	}
	init() {
		this.createCollection(window.$hsThemeSwitchCollection, this),
			'default' !== this.theme && this.setAppearance(),
			'click' === this.type
				? this.buildSwitchTypeOfClick()
				: this.buildSwitchTypeOfChange();
	}
	buildSwitchTypeOfChange() {
		(this.el.checked = 'dark' === this.theme),
			this.toggleObserveSystemTheme(),
			(this.onElementChangeListener = (e) => this.elementChange(e)),
			this.el.addEventListener('change', this.onElementChangeListener);
	}
	buildSwitchTypeOfClick() {
		const e = this.el.getAttribute('data-hs-theme-click-value');
		this.toggleObserveSystemTheme(),
			(this.onElementClickListener = () => this.elementClick(e)),
			this.el.addEventListener('click', this.onElementClickListener);
	}
	setResetStyles() {
		const e = document.createElement('style');
		return (
			(e.innerText = '*{transition: unset !important;}'),
			e.setAttribute('data-hs-appearance-onload-styles', ''),
			document.head.appendChild(e),
			e
		);
	}
	addSystemThemeObserver() {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', ({ matches: e }) => {
				e ? this.setAppearance('dark', !1) : this.setAppearance('default', !1);
			});
	}
	removeSystemThemeObserver() {
		window.matchMedia('(prefers-color-scheme: dark)').removeEventListener;
	}
	toggleObserveSystemTheme() {
		'auto' === localStorage.getItem('hs_theme')
			? this.addSystemThemeObserver()
			: this.removeSystemThemeObserver();
	}
	setAppearance(e = this.theme, t = !0, i = !0) {
		const n = document.querySelector('html'),
			s = this.setResetStyles();
		t && localStorage.setItem('hs_theme', e),
			'auto' === e &&
				(e = window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'default'),
			n.classList.remove('light', 'dark', 'default', 'auto'),
			n.classList.add(e),
			setTimeout(() => s.remove()),
			i &&
				window.dispatchEvent(
					new CustomEvent('on-hs-appearance-change', { detail: e }),
				);
	}
	destroy() {
		'change' === this.type &&
			this.el.removeEventListener('change', this.onElementChangeListener),
			'click' === this.type &&
				this.el.removeEventListener('click', this.onElementClickListener),
			(window.$hsThemeSwitchCollection = window.$hsThemeSwitchCollection.filter(
				({ element: e }) => e.el !== this.el,
			));
	}
	static getInstance(e, t) {
		const i = window.$hsThemeSwitchCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return i ? (t ? i : i.element.el) : null;
	}
	static autoInit() {
		window.$hsThemeSwitchCollection || (window.$hsThemeSwitchCollection = []),
			window.$hsThemeSwitchCollection &&
				(window.$hsThemeSwitchCollection =
					window.$hsThemeSwitchCollection.filter(({ element: e }) =>
						document.contains(e.el),
					)),
			document
				.querySelectorAll('[data-hs-theme-switch]:not(.--prevent-on-load-init)')
				.forEach((e) => {
					window.$hsThemeSwitchCollection.find((t) => {
						var i;
						return (
							(null === (i = null == t ? void 0 : t.element) || void 0 === i
								? void 0
								: i.el) === e
						);
					}) || new h(e, { type: 'change' });
				}),
			document
				.querySelectorAll(
					'[data-hs-theme-click-value]:not(.--prevent-on-load-init)',
				)
				.forEach((e) => {
					window.$hsThemeSwitchCollection.find((t) => {
						var i;
						return (
							(null === (i = null == t ? void 0 : t.element) || void 0 === i
								? void 0
								: i.el) === e
						);
					}) || new h(e, { type: 'click' });
				});
	}
}
window.addEventListener('load', () => {
	h.autoInit();
}),
	window.$hsThemeSwitchCollection &&
		window.addEventListener('on-hs-appearance-change', (e) => {
			window.$hsThemeSwitchCollection.forEach((t) => {
				t.element.el.checked = 'dark' === e.detail;
			});
		}),
	'undefined' != typeof window && (window.HSThemeSwitch = h);
const o = h;
var l = n.A;
export { l as default };
