var t = {
		615: (t, e, i) => {
			i.d(e, { A: () => l });
			class l {
				constructor(t, e, i) {
					(this.el = t),
						(this.options = e),
						(this.events = i),
						(this.el = t),
						(this.options = e),
						(this.events = {});
				}
				createCollection(t, e) {
					var i;
					t.push({
						id:
							(null === (i = null == e ? void 0 : e.el) || void 0 === i
								? void 0
								: i.id) || t.length + 1,
						element: e,
					});
				}
				fireEvent(t, e = null) {
					if (this.events.hasOwnProperty(t)) return this.events[t](e);
				}
				on(t, e) {
					this.events[t] = e;
				}
			}
		},
		926: (t, e, i) => {
			i.d(e, { Fh: () => l, JD: () => n, en: () => o, fc: () => r });
			const l = (t) => {
					if ('string' != typeof t) return !1;
					const e = t.trim()[0],
						i = t.trim().slice(-1);
					if (('{' === e && '}' === i) || ('[' === e && ']' === i))
						try {
							return JSON.parse(t), !0;
						} catch (t) {
							return !1;
						}
					return !1;
				},
				n = (t, e, i = null) => {
					const l = new CustomEvent(t, {
						detail: { payload: i },
						bubbles: !0,
						cancelable: !0,
						composed: !1,
					});
					e.dispatchEvent(l);
				},
				r = (t) => {
					const e = document.createElement('template');
					return (t = t.trim()), (e.innerHTML = t), e.content.firstChild;
				},
				o = (t, e, i = ' ', l = 'add') => {
					t.split(i).forEach((t) =>
						'add' === l ? e.classList.add(t) : e.classList.remove(t),
					);
				};
		},
	},
	e = {};
function i(l) {
	var n = e[l];
	if (void 0 !== n) return n.exports;
	var r = (e[l] = { exports: {} });
	return t[l](r, r.exports, i), r.exports;
}
(i.d = (t, e) => {
	for (var l in e)
		i.o(e, l) &&
			!i.o(t, l) &&
			Object.defineProperty(t, l, { enumerable: !0, get: e[l] });
}),
	(i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e));
var l = {};
i.d(l, { A: () => s });
var n = i(926),
	r = i(615);
/*
 * HSLayoutSplitter
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class o extends r.A {
	constructor(t, e) {
		var i;
		super(t, e);
		const l = t.getAttribute('data-hs-layout-splitter'),
			n = l ? JSON.parse(l) : {},
			r = Object.assign(Object.assign({}, n), e);
		(this.horizontalSplitterClasses =
			(null == r ? void 0 : r.horizontalSplitterClasses) || null),
			(this.horizontalSplitterTemplate =
				(null == r ? void 0 : r.horizontalSplitterTemplate) || '<div></div>'),
			(this.verticalSplitterClasses =
				(null == r ? void 0 : r.verticalSplitterClasses) || null),
			(this.verticalSplitterTemplate =
				(null == r ? void 0 : r.verticalSplitterTemplate) || '<div></div>'),
			(this.isSplittersAddedManually =
				null !== (i = null == r ? void 0 : r.isSplittersAddedManually) &&
				void 0 !== i &&
				i),
			(this.horizontalSplitters = []),
			(this.horizontalControls = []),
			(this.verticalSplitters = []),
			(this.verticalControls = []),
			(this.isDragging = !1),
			(this.activeSplitter = null),
			(this.onControlPointerDownListener = []),
			this.init();
	}
	controlPointerDown(t) {
		(this.isDragging = !0),
			(this.activeSplitter = t),
			this.onPointerDownHandler(t);
	}
	controlPointerUp() {
		(this.isDragging = !1),
			(this.activeSplitter = null),
			this.onPointerUpHandler();
	}
	init() {
		this.createCollection(window.$hsLayoutSplitterCollection, this),
			this.buildSplitters(),
			o.isListenersInitialized ||
				(document.addEventListener('pointermove', o.onDocumentPointerMove),
				document.addEventListener('pointerup', o.onDocumentPointerUp),
				(o.isListenersInitialized = !0));
	}
	buildSplitters() {
		this.buildHorizontalSplitters(), this.buildVerticalSplitters();
	}
	buildHorizontalSplitters() {
		const t = this.el.querySelectorAll(
			'[data-hs-layout-splitter-horizontal-group]',
		);
		t.length &&
			(t.forEach((t) => {
				this.horizontalSplitters.push({
					el: t,
					items: Array.from(
						t.querySelectorAll(':scope > [data-hs-layout-splitter-item]'),
					),
				});
			}),
			this.updateHorizontalSplitter());
	}
	buildVerticalSplitters() {
		const t = this.el.querySelectorAll(
			'[data-hs-layout-splitter-vertical-group]',
		);
		t.length &&
			(t.forEach((t) => {
				this.verticalSplitters.push({
					el: t,
					items: Array.from(
						t.querySelectorAll(':scope > [data-hs-layout-splitter-item]'),
					),
				});
			}),
			this.updateVerticalSplitter());
	}
	buildControl(t, e, i = 'horizontal') {
		let l;
		if (this.isSplittersAddedManually) {
			if (((l = null == e ? void 0 : e.previousElementSibling), !l)) return !1;
			l.style.display = '';
		} else
			(l = (0, n.fc)(
				'horizontal' === i
					? this.horizontalSplitterTemplate
					: this.verticalSplitterTemplate,
			)),
				(0, n.en)(
					'horizontal' === i
						? this.horizontalSplitterClasses
						: this.verticalSplitterClasses,
					l,
				),
				l.classList.add('hs-layout-splitter-control');
		const r = { el: l, direction: i, prev: t, next: e };
		'horizontal' === i
			? this.horizontalControls.push(r)
			: this.verticalControls.push(r),
			this.bindListeners(r),
			e &&
				!this.isSplittersAddedManually &&
				t.insertAdjacentElement('afterend', l);
	}
	getSplitterItemParsedParam(t) {
		const e = t.getAttribute('data-hs-layout-splitter-item');
		return (0, n.Fh)(e) ? JSON.parse(e) : e;
	}
	getContainerSize(t, e) {
		return e
			? t.getBoundingClientRect().width
			: t.getBoundingClientRect().height;
	}
	getMaxFlexSize(t, e, i) {
		const l = this.getSplitterItemSingleParam(t, e);
		return 'number' == typeof l ? (l / 100) * i : 0;
	}
	updateHorizontalSplitter() {
		this.horizontalSplitters.forEach(({ items: t }) => {
			t.forEach((t) => {
				this.updateSingleSplitter(t);
			}),
				t.forEach((e, i) => {
					i >= t.length - 1
						? this.buildControl(e, null)
						: this.buildControl(e, t[i + 1]);
				});
		});
	}
	updateSingleSplitter(t) {
		const e = t.getAttribute('data-hs-layout-splitter-item'),
			i = (0, n.Fh)(e) ? JSON.parse(e) : e,
			l = (0, n.Fh)(e) ? i.dynamicSize : e;
		t.style.flex = `${l} 1 0`;
	}
	updateVerticalSplitter() {
		this.verticalSplitters.forEach(({ items: t }) => {
			t.forEach((t) => {
				this.updateSingleSplitter(t);
			}),
				t.forEach((e, i) => {
					i >= t.length - 1
						? this.buildControl(e, null, 'vertical')
						: this.buildControl(e, t[i + 1], 'vertical');
				});
		});
	}
	updateSplitterItemParam(t, e) {
		const i = this.getSplitterItemParsedParam(t),
			l = e.toFixed(1),
			n =
				'object' == typeof i
					? JSON.stringify(
							Object.assign(Object.assign({}, i), { dynamicSize: +l }),
						)
					: l;
		t.setAttribute('data-hs-layout-splitter-item', n);
	}
	onPointerDownHandler(t) {
		const { el: e, prev: i, next: l } = t;
		e.classList.add('dragging'),
			i.classList.add('dragging'),
			l.classList.add('dragging'),
			(document.body.style.userSelect = 'none');
	}
	onPointerUpHandler() {
		document.body.style.userSelect = '';
	}
	onPointerMoveHandler(t, e, i) {
		const { prev: l, next: n } = e,
			r = e.el.closest(
				'horizontal' === i
					? '[data-hs-layout-splitter-horizontal-group]'
					: '[data-hs-layout-splitter-vertical-group]',
			),
			o = 'horizontal' === i,
			s = this.getContainerSize(r, o),
			a = this.calculateAvailableSize(r, l, n, o, s),
			d = this.calculateResizedSizes(t, l, a, o),
			c = this.enforceLimits(d, l, n, s, a);
		this.applySizes(l, n, c, s);
	}
	bindListeners(t) {
		const { el: e } = t;
		this.onControlPointerDownListener.push({
			el: e,
			fn: () => this.controlPointerDown(t),
		}),
			e.addEventListener(
				'pointerdown',
				this.onControlPointerDownListener.find((t) => t.el === e).fn,
			);
	}
	calculateAvailableSize(t, e, i, l, n) {
		const r = t.querySelectorAll(':scope > [data-hs-layout-splitter-item]');
		return (
			n -
			Array.from(r).reduce((t, n) => {
				if (n === e || n === i) return t;
				const r = n.getBoundingClientRect();
				return (
					t +
					('fixed' === window.getComputedStyle(n).position
						? 0
						: l
							? r.width
							: r.height)
				);
			}, 0)
		);
	}
	calculateResizedSizes(t, e, i, l) {
		const n = l
			? e.getBoundingClientRect().left
			: e.getBoundingClientRect().top;
		let r = Math.max(0, Math.min((l ? t.clientX : t.clientY) - n, i));
		return { previousSize: r, nextSize: i - r };
	}
	enforceLimits(t, e, i, l, r) {
		const o = this.getMaxFlexSize(e, 'minSize', l),
			s = this.getMaxFlexSize(i, 'minSize', l),
			a = this.getMaxFlexSize(e, 'preLimitSize', l),
			d = this.getMaxFlexSize(i, 'preLimitSize', l);
		let { previousSize: c, nextSize: h } = t;
		h < s ? ((h = s), (c = r - h)) : c < o && ((c = o), (h = r - c));
		const p = {
			prev: e,
			next: i,
			previousSize: c.toFixed(),
			previousFlexSize: (c / l) * 100,
			previousPreLimitSize: a,
			previousPreLimitFlexSize: (a / l) * 100,
			previousMinSize: o,
			previousMinFlexSize: (o / l) * 100,
			nextSize: h.toFixed(),
			nextFlexSize: (h / l) * 100,
			nextPreLimitSize: d,
			nextPreLimitFlexSize: (d / l) * 100,
			nextMinSize: s,
			nextMinFlexSize: (s / l) * 100,
			static: {
				prev: {
					minSize: this.getSplitterItemSingleParam(e, 'minSize'),
					preLimitSize: this.getSplitterItemSingleParam(e, 'preLimitSize'),
				},
				next: {
					minSize: this.getSplitterItemSingleParam(i, 'minSize'),
					preLimitSize: this.getSplitterItemSingleParam(i, 'preLimitSize'),
				},
			},
		};
		return (
			h < s
				? (this.fireEvent('onNextLimit', p),
					(0, n.JD)('onNextLimit.hs.layoutSplitter', this.el, p))
				: c < o &&
					(this.fireEvent('onPrevLimit', p),
					(0, n.JD)('onPrevLimit.hs.layoutSplitter', this.el, p)),
			c <= a &&
				(this.fireEvent('onPrevPreLimit', p),
				(0, n.JD)('onPrevPreLimit.hs.layoutSplitter', this.el, p)),
			h <= d &&
				(this.fireEvent('onNextPreLimit', p),
				(0, n.JD)('onNextPreLimit.hs.layoutSplitter', this.el, p)),
			this.fireEvent('drag', p),
			(0, n.JD)('drag.hs.layoutSplitter', this.el, p),
			{ previousSize: c, nextSize: h }
		);
	}
	applySizes(t, e, i, l) {
		const { previousSize: n, nextSize: r } = i,
			o = (n / l) * 100;
		this.updateSplitterItemParam(t, o), (t.style.flex = `${o.toFixed(1)} 1 0`);
		const s = (r / l) * 100;
		this.updateSplitterItemParam(e, s), (e.style.flex = `${s.toFixed(1)} 1 0`);
	}
	getSplitterItemSingleParam(t, e) {
		try {
			return this.getSplitterItemParsedParam(t)[e];
		} catch (t) {
			return (
				console.log('There is no parameter with this name in the object.'), !1
			);
		}
	}
	getData(t) {
		var e, i;
		const l = t.closest(
			'[data-hs-layout-splitter-horizontal-group], [data-hs-layout-splitter-vertical-group]',
		);
		if (!l)
			throw new Error(
				'Element is not inside a valid layout splitter container.',
			);
		const n = l.matches('[data-hs-layout-splitter-horizontal-group]'),
			r = this.getContainerSize(l, n),
			o = this.getSplitterItemSingleParam(t, 'dynamicSize') || 0,
			s = this.getMaxFlexSize(t, 'minSize', r),
			a = this.getMaxFlexSize(t, 'preLimitSize', r),
			d = (s / r) * 100,
			c = (a / r) * 100;
		return {
			el: t,
			dynamicSize: +((o / 100) * r).toFixed(),
			dynamicFlexSize: o,
			minSize: +s.toFixed(),
			minFlexSize: d,
			preLimitSize: +a.toFixed(),
			preLimitFlexSize: c,
			static: {
				minSize:
					null !== (e = this.getSplitterItemSingleParam(t, 'minSize')) &&
					void 0 !== e
						? e
						: null,
				preLimitSize:
					null !== (i = this.getSplitterItemSingleParam(t, 'preLimitSize')) &&
					void 0 !== i
						? i
						: null,
			},
		};
	}
	setSplitterItemSize(t, e) {
		this.updateSplitterItemParam(t, e), (t.style.flex = `${e.toFixed(1)} 1 0`);
	}
	updateFlexValues(t) {
		let e = 0;
		const i = window.innerWidth;
		if (
			(t.forEach(({ id: t, breakpoints: l }) => {
				const n = document.getElementById(t);
				if (n) {
					const t = ((t) => {
						const e = Object.keys(t)
							.map(Number)
							.sort((t, e) => t - e);
						for (let l = e.length - 1; l >= 0; l--)
							if (i >= e[l]) return t[e[l]];
						return 0;
					})(l);
					this.updateSplitterItemParam(n, t),
						(n.style.flex = `${t.toFixed(1)} 1 0`),
						(e += t);
				}
			}),
			100 !== e)
		) {
			const i = 100 / e;
			t.forEach(({ id: t }) => {
				const e = document.getElementById(t);
				if (e) {
					const t = parseFloat(e.style.flex.split(' ')[0]) * i;
					this.updateSplitterItemParam(e, t),
						(e.style.flex = `${t.toFixed(1)} 1 0`);
				}
			});
		}
	}
	destroy() {
		this.onControlPointerDownListener &&
			(this.onControlPointerDownListener.forEach(({ el: t, fn: e }) => {
				t.removeEventListener('pointerdown', e);
			}),
			(this.onControlPointerDownListener = null)),
			this.horizontalSplitters.forEach(({ items: t }) => {
				t.forEach((t) => {
					t.style.flex = '';
				});
			}),
			this.verticalSplitters.forEach(({ items: t }) => {
				t.forEach((t) => {
					t.style.flex = '';
				});
			}),
			this.horizontalControls.forEach(({ el: t }) => {
				this.isSplittersAddedManually ? (t.style.display = 'none') : t.remove();
			}),
			this.verticalControls.forEach(({ el: t }) => {
				this.isSplittersAddedManually ? (t.style.display = 'none') : t.remove();
			}),
			(this.horizontalControls = []),
			(this.verticalControls = []),
			(window.$hsLayoutSplitterCollection =
				window.$hsLayoutSplitterCollection.filter(
					({ element: t }) => t.el !== this.el,
				)),
			0 === window.$hsLayoutSplitterCollection.length &&
				o.isListenersInitialized &&
				(document.removeEventListener('pointermove', o.onDocumentPointerMove),
				document.removeEventListener('pointerup', o.onDocumentPointerUp),
				(o.isListenersInitialized = !1));
	}
	static autoInit() {
		window.$hsLayoutSplitterCollection ||
			((window.$hsLayoutSplitterCollection = []),
			window.addEventListener('pointerup', () => {
				if (!window.$hsLayoutSplitterCollection) return !1;
				const t = document.querySelector(
						'.hs-layout-splitter-control.dragging',
					),
					e = document.querySelectorAll(
						'[data-hs-layout-splitter-item].dragging',
					);
				if (!t) return !1;
				const i = o.getInstance(t.closest('[data-hs-layout-splitter]'), !0);
				t.classList.remove('dragging'),
					e.forEach((t) => t.classList.remove('dragging')),
					(i.element.isDragging = !1);
			})),
			window.$hsLayoutSplitterCollection &&
				(window.$hsLayoutSplitterCollection =
					window.$hsLayoutSplitterCollection.filter(({ element: t }) =>
						document.contains(t.el),
					)),
			document
				.querySelectorAll(
					'[data-hs-layout-splitter]:not(.--prevent-on-load-init)',
				)
				.forEach((t) => {
					window.$hsLayoutSplitterCollection.find((e) => {
						var i;
						return (
							(null === (i = null == e ? void 0 : e.element) || void 0 === i
								? void 0
								: i.el) === t
						);
					}) || new o(t);
				});
	}
	static getInstance(t, e) {
		const i = window.$hsLayoutSplitterCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		return i ? (e ? i : i.element.el) : null;
	}
	static on(t, e, i) {
		const l = window.$hsLayoutSplitterCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		l && (l.element.events[t] = i);
	}
}
(o.isListenersInitialized = !1),
	(o.onDocumentPointerMove = (t) => {
		const e = document.querySelector('.hs-layout-splitter-control.dragging');
		if (!e) return;
		const i = o.getInstance(e.closest('[data-hs-layout-splitter]'), !0);
		if (!i || !i.element.isDragging) return;
		const l = i.element.activeSplitter;
		l &&
			('vertical' === l.direction
				? i.element.onPointerMoveHandler(t, l, 'vertical')
				: i.element.onPointerMoveHandler(t, l, 'horizontal'));
	}),
	(o.onDocumentPointerUp = () => {
		const t = document.querySelector('.hs-layout-splitter-control.dragging');
		if (!t) return;
		const e = o.getInstance(t.closest('[data-hs-layout-splitter]'), !0);
		e && e.element.controlPointerUp();
	}),
	window.addEventListener('load', () => {
		o.autoInit();
	}),
	'undefined' != typeof window && (window.HSLayoutSplitter = o);
const s = o;
var a = l.A;
export { a as default };
