var e = {
		615: (e, t, l) => {
			l.d(t, { A: () => s });
			class s {
				constructor(e, t, l) {
					(this.el = e),
						(this.options = t),
						(this.events = l),
						(this.el = e),
						(this.options = t),
						(this.events = {});
				}
				createCollection(e, t) {
					var l;
					e.push({
						id:
							(null === (l = null == t ? void 0 : t.el) || void 0 === l
								? void 0
								: l.id) || e.length + 1,
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
		926: (e, t, l) => {
			l.d(t, { JD: () => o, gj: () => s });
			/*
			 * @version: 2.7.0
			 * @author: Preline Labs Ltd.
			 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
			 * Copyright 2024 Preline Labs Ltd.
			 */
			const s = (e, t, l = '') =>
				(window.getComputedStyle(e).getPropertyValue(t) || l).replace(' ', '');
			const o = (e, t, l = null) => {
				const s = new CustomEvent(e, {
					detail: { payload: l },
					bubbles: !0,
					cancelable: !0,
					composed: !1,
				});
				t.dispatchEvent(s);
			};
		},
	},
	t = {};
function l(s) {
	var o = t[s];
	if (void 0 !== o) return o.exports;
	var i = (t[s] = { exports: {} });
	return e[s](i, i.exports, l), i.exports;
}
(l.d = (e, t) => {
	for (var s in t)
		l.o(t, s) &&
			!l.o(e, s) &&
			Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
}),
	(l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var s = {};
l.d(s, { A: () => r });
var o = l(926),
	i = l(615);
/*
 * HSScrollspy
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class n extends i.A {
	constructor(e, t = {}) {
		super(e, t),
			(this.activeSection = null),
			(this.contentId = this.el.getAttribute('data-hs-scrollspy')),
			(this.content = document.querySelector(this.contentId)),
			(this.links = this.el.querySelectorAll('[href]')),
			(this.sections = []),
			(this.scrollableId = this.el.getAttribute(
				'data-hs-scrollspy-scrollable-parent',
			)),
			(this.scrollable = this.scrollableId
				? document.querySelector(this.scrollableId)
				: document),
			(this.onLinkClickListener = []),
			this.init();
	}
	scrollableScroll(e) {
		Array.from(this.sections).forEach((t) => {
			if (!t.getAttribute('id')) return !1;
			this.update(e, t);
		});
	}
	linkClick(e, t) {
		if ((e.preventDefault(), 'javascript:;' === t.getAttribute('href')))
			return !1;
		this.scrollTo(t);
	}
	init() {
		this.createCollection(window.$hsScrollspyCollection, this),
			this.links.forEach((e) => {
				this.sections.push(
					this.scrollable.querySelector(e.getAttribute('href')),
				);
			}),
			(this.onScrollableScrollListener = (e) => this.scrollableScroll(e)),
			this.scrollable.addEventListener(
				'scroll',
				this.onScrollableScrollListener,
			),
			this.links.forEach((e) => {
				this.onLinkClickListener.push({
					el: e,
					fn: (t) => this.linkClick(t, e),
				}),
					e.addEventListener(
						'click',
						this.onLinkClickListener.find((t) => t.el === e).fn,
					);
			});
	}
	update(e, t) {
		const l = parseInt((0, o.gj)(this.el, '--scrollspy-offset', '0')),
			s = parseInt((0, o.gj)(t, '--scrollspy-offset')) || l,
			i =
				e.target === document
					? 0
					: parseInt(String(e.target.getBoundingClientRect().top)),
			n = parseInt(String(t.getBoundingClientRect().top)) - s - i,
			r = t.offsetHeight;
		if (n <= 0 && n + r > 0) {
			if (this.activeSection === t) return !1;
			this.links.forEach((e) => {
				e.classList.remove('active');
			});
			const e = this.el.querySelector(`[href="#${t.getAttribute('id')}"]`);
			if (e) {
				e.classList.add('active');
				const t = e.closest('[data-hs-scrollspy-group]');
				if (t) {
					const e = t.querySelector('[href]');
					e && e.classList.add('active');
				}
			}
			this.activeSection = t;
		}
	}
	scrollTo(e) {
		const t = e.getAttribute('href'),
			l = document.querySelector(t),
			s = parseInt((0, o.gj)(this.el, '--scrollspy-offset', '0')),
			i = parseInt((0, o.gj)(l, '--scrollspy-offset')) || s,
			n = this.scrollable === document ? 0 : this.scrollable.offsetTop,
			r = l.offsetTop - i - n,
			c = this.scrollable === document ? window : this.scrollable,
			a = () => {
				window.history.replaceState(null, null, e.getAttribute('href')),
					'scrollTo' in c &&
						c.scrollTo({ top: r, left: 0, behavior: 'smooth' });
			},
			h = this.fireEvent('beforeScroll', this.el);
		(0, o.JD)('beforeScroll.hs.scrollspy', this.el, this.el),
			h instanceof Promise ? h.then(() => a()) : a();
	}
	destroy() {
		this.el.querySelector('[href].active').classList.remove('active'),
			this.scrollable.removeEventListener(
				'scroll',
				this.onScrollableScrollListener,
			),
			this.onLinkClickListener.length &&
				this.onLinkClickListener.forEach(({ el: e, fn: t }) => {
					e.removeEventListener('click', t);
				}),
			(window.$hsScrollspyCollection = window.$hsScrollspyCollection.filter(
				({ element: e }) => e.el !== this.el,
			));
	}
	static getInstance(e, t = !1) {
		const l = window.$hsScrollspyCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return l ? (t ? l : l.element.el) : null;
	}
	static autoInit() {
		window.$hsScrollspyCollection || (window.$hsScrollspyCollection = []),
			window.$hsScrollspyCollection &&
				(window.$hsScrollspyCollection = window.$hsScrollspyCollection.filter(
					({ element: e }) => document.contains(e.el),
				)),
			document
				.querySelectorAll('[data-hs-scrollspy]:not(.--prevent-on-load-init)')
				.forEach((e) => {
					window.$hsScrollspyCollection.find((t) => {
						var l;
						return (
							(null === (l = null == t ? void 0 : t.element) || void 0 === l
								? void 0
								: l.el) === e
						);
					}) || new n(e);
				});
	}
}
window.addEventListener('load', () => {
	n.autoInit();
}),
	'undefined' != typeof window && (window.HSScrollspy = n);
const r = n;
var c = s.A;
export { c as default };
