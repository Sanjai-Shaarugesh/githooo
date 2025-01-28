var e = {
		615: (e, t, s) => {
			s.d(t, { A: () => o });
			class o {
				constructor(e, t, s) {
					(this.el = e),
						(this.options = t),
						(this.events = s),
						(this.el = e),
						(this.options = t),
						(this.events = {});
				}
				createCollection(e, t) {
					var s;
					e.push({
						id:
							(null === (s = null == t ? void 0 : t.el) || void 0 === s
								? void 0
								: s.id) || e.length + 1,
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
		926: (e, t, s) => {
			s.d(t, { JD: () => i, V6: () => o });
			const o = (e) =>
					e instanceof HTMLInputElement ||
					e instanceof HTMLTextAreaElement ||
					e instanceof HTMLSelectElement,
				i = (e, t, s = null) => {
					const o = new CustomEvent(e, {
						detail: { payload: s },
						bubbles: !0,
						cancelable: !0,
						composed: !1,
					});
					t.dispatchEvent(o);
				};
		},
	},
	t = {};
function s(o) {
	var i = t[o];
	if (void 0 !== i) return i.exports;
	var l = (t[o] = { exports: {} });
	return e[o](l, l.exports, s), l.exports;
}
(s.d = (e, t) => {
	for (var o in t)
		s.o(t, o) &&
			!s.o(e, o) &&
			Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
}),
	(s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var o = {};
s.d(o, { A: () => r });
var i = s(926),
	l = s(615);
/*
 * HSTogglePassword
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class n extends l.A {
	constructor(e, t) {
		super(e, t);
		const s = e.getAttribute('data-hs-toggle-password'),
			o = s ? JSON.parse(s) : {},
			l = Object.assign(Object.assign({}, o), t),
			n = [];
		if (
			(null == l ? void 0 : l.target) &&
			'string' == typeof (null == l ? void 0 : l.target)
		) {
			(null == l ? void 0 : l.target.split(',')).forEach((e) => {
				n.push(document.querySelector(e));
			});
		} else
			(null == l ? void 0 : l.target) &&
			'object' == typeof (null == l ? void 0 : l.target)
				? l.target.forEach((e) => n.push(document.querySelector(e)))
				: l.target.forEach((e) => n.push(e));
		(this.target = n),
			(this.isShown = !!this.el.hasAttribute('type') && this.el.checked),
			(this.eventType = (0, i.V6)(this.el) ? 'change' : 'click'),
			(this.isMultiple =
				this.target.length > 1 &&
				!!this.el.closest('[data-hs-toggle-password-group]')),
			this.target && this.init();
	}
	elementAction() {
		this.isShown ? this.hide() : this.show(),
			this.fireEvent('toggle', this.target),
			(0, i.JD)('toggle.hs.toggle-select', this.el, this.target);
	}
	init() {
		this.createCollection(window.$hsTogglePasswordCollection, this),
			this.isShown ? this.show() : this.hide(),
			(this.onElementActionListener = () => this.elementAction()),
			this.el.addEventListener(this.eventType, this.onElementActionListener);
	}
	getMultipleToggles() {
		const e = this.el
				.closest('[data-hs-toggle-password-group]')
				.querySelectorAll('[data-hs-toggle-password]'),
			t = [];
		return (
			e.forEach((e) => {
				t.push(n.getInstance(e));
			}),
			t
		);
	}
	show() {
		if (this.isMultiple) {
			this.getMultipleToggles().forEach((e) => !!e && (e.isShown = !0)),
				this.el
					.closest('[data-hs-toggle-password-group]')
					.classList.add('active');
		} else (this.isShown = !0), this.el.classList.add('active');
		this.target.forEach((e) => {
			e.type = 'text';
		});
	}
	hide() {
		if (this.isMultiple) {
			this.getMultipleToggles().forEach((e) => !!e && (e.isShown = !1)),
				this.el
					.closest('[data-hs-toggle-password-group]')
					.classList.remove('active');
		} else (this.isShown = !1), this.el.classList.remove('active');
		this.target.forEach((e) => {
			e.type = 'password';
		});
	}
	destroy() {
		this.isMultiple
			? this.el
					.closest('[data-hs-toggle-password-group]')
					.classList.remove('active')
			: this.el.classList.remove('active'),
			this.target.forEach((e) => {
				e.type = 'password';
			}),
			this.el.removeEventListener(this.eventType, this.onElementActionListener),
			(this.isShown = !1),
			(window.$hsTogglePasswordCollection =
				window.$hsTogglePasswordCollection.filter(
					({ element: e }) => e.el !== this.el,
				));
	}
	static getInstance(e, t) {
		const s = window.$hsTogglePasswordCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return s ? (t ? s : s.element) : null;
	}
	static autoInit() {
		window.$hsTogglePasswordCollection ||
			(window.$hsTogglePasswordCollection = []),
			window.$hsTogglePasswordCollection &&
				(window.$hsTogglePasswordCollection =
					window.$hsTogglePasswordCollection.filter(({ element: e }) =>
						document.contains(e.el),
					)),
			document
				.querySelectorAll(
					'[data-hs-toggle-password]:not(.--prevent-on-load-init)',
				)
				.forEach((e) => {
					window.$hsTogglePasswordCollection.find((t) => {
						var s;
						return (
							(null === (s = null == t ? void 0 : t.element) || void 0 === s
								? void 0
								: s.el) === e
						);
					}) || new n(e);
				});
	}
}
window.addEventListener('load', () => {
	n.autoInit();
}),
	'undefined' != typeof window && (window.HSTogglePassword = n);
const r = n;
var a = o.A;
export { a as default };
