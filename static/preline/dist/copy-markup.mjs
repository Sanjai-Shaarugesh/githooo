var e = {
		615: (e, t, i) => {
			i.d(t, { A: () => s });
			class s {
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
		926: (e, t, i) => {
			i.d(t, { JD: () => s });
			const s = (e, t, i = null) => {
				const s = new CustomEvent(e, {
					detail: { payload: i },
					bubbles: !0,
					cancelable: !0,
					composed: !1,
				});
				t.dispatchEvent(s);
			};
		},
	},
	t = {};
function i(s) {
	var o = t[s];
	if (void 0 !== o) return o.exports;
	var l = (t[s] = { exports: {} });
	return e[s](l, l.exports, i), l.exports;
}
(i.d = (e, t) => {
	for (var s in t)
		i.o(t, s) &&
			!i.o(e, s) &&
			Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
}),
	(i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var s = {};
i.d(s, { A: () => n });
var o = i(926),
	l = i(615);
/*
 * HSCopyMarkup
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class r extends l.A {
	constructor(e, t) {
		super(e, t);
		const i = e.getAttribute('data-hs-copy-markup'),
			s = i ? JSON.parse(i) : {},
			o = Object.assign(Object.assign({}, s), t);
		(this.targetSelector = (null == o ? void 0 : o.targetSelector) || null),
			(this.wrapperSelector = (null == o ? void 0 : o.wrapperSelector) || null),
			(this.limit = (null == o ? void 0 : o.limit) || null),
			(this.items = []),
			this.targetSelector && this.init();
	}
	elementClick() {
		this.copy();
	}
	deleteItemButtonClick(e) {
		this.delete(e);
	}
	init() {
		this.createCollection(window.$hsCopyMarkupCollection, this),
			(this.onElementClickListener = () => this.elementClick()),
			this.setTarget(),
			this.setWrapper(),
			this.addPredefinedItems(),
			this.el.addEventListener('click', this.onElementClickListener);
	}
	copy() {
		if (this.limit && this.items.length >= this.limit) return !1;
		this.el.hasAttribute('disabled') && this.el.setAttribute('disabled', '');
		const e = this.target.cloneNode(!0);
		this.addToItems(e),
			this.limit &&
				this.items.length >= this.limit &&
				this.el.setAttribute('disabled', 'disabled'),
			this.fireEvent('copy', e),
			(0, o.JD)('copy.hs.copyMarkup', e, e);
	}
	addPredefinedItems() {
		Array.from(this.wrapper.children)
			.filter((e) => !e.classList.contains('[--ignore-for-count]'))
			.forEach((e) => {
				this.addToItems(e);
			}),
			this.limit &&
				this.items.length >= this.limit &&
				this.el.setAttribute('disabled', 'disabled');
	}
	setTarget() {
		const e =
			'string' == typeof this.targetSelector
				? document.querySelector(this.targetSelector).cloneNode(!0)
				: this.targetSelector.cloneNode(!0);
		e.removeAttribute('id'), (this.target = e);
	}
	setWrapper() {
		this.wrapper =
			'string' == typeof this.wrapperSelector
				? document.querySelector(this.wrapperSelector)
				: this.wrapperSelector;
	}
	addToItems(e) {
		const t = e.querySelector('[data-hs-copy-markup-delete-item]');
		this.wrapper ? this.wrapper.append(e) : this.el.before(e),
			t &&
				((this.onDeleteItemButtonClickListener = () =>
					this.deleteItemButtonClick(e)),
				t.addEventListener('click', this.onDeleteItemButtonClickListener)),
			this.items.push(e);
	}
	delete(e) {
		const t = this.items.indexOf(e);
		-1 !== t && this.items.splice(t, 1),
			e.remove(),
			this.fireEvent('delete', e),
			(0, o.JD)('delete.hs.copyMarkup', e, e);
	}
	destroy() {
		const e = this.wrapper.querySelectorAll(
			'[data-hs-copy-markup-delete-item]',
		);
		this.el.removeEventListener('click', this.onElementClickListener),
			e.length &&
				e.forEach((e) =>
					e.removeEventListener('click', this.onDeleteItemButtonClickListener),
				),
			this.el.removeAttribute('disabled'),
			(this.target = null),
			(this.wrapper = null),
			(this.items = null),
			(window.$hsCopyMarkupCollection = window.$hsCopyMarkupCollection.filter(
				({ element: e }) => e.el !== this.el,
			));
	}
	static getInstance(e, t) {
		const i = window.$hsCopyMarkupCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return i ? (t ? i : i.element) : null;
	}
	static autoInit() {
		window.$hsCopyMarkupCollection || (window.$hsCopyMarkupCollection = []),
			window.$hsCopyMarkupCollection &&
				(window.$hsCopyMarkupCollection = window.$hsCopyMarkupCollection.filter(
					({ element: e }) => document.contains(e.el),
				)),
			document
				.querySelectorAll('[data-hs-copy-markup]:not(.--prevent-on-load-init)')
				.forEach((e) => {
					if (
						!window.$hsCopyMarkupCollection.find((t) => {
							var i;
							return (
								(null === (i = null == t ? void 0 : t.element) || void 0 === i
									? void 0
									: i.el) === e
							);
						})
					) {
						const t = e.getAttribute('data-hs-copy-markup'),
							i = t ? JSON.parse(t) : {};
						new r(e, i);
					}
				});
	}
}
window.addEventListener('load', () => {
	r.autoInit();
}),
	'undefined' != typeof window && (window.HSCopyMarkup = r);
const n = r;
var a = s.A;
export { a as default };
