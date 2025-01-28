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
		926: (e, t, i) => {
			i.d(t, { JD: () => n });
			const n = (e, t, i = null) => {
				const n = new CustomEvent(e, {
					detail: { payload: i },
					bubbles: !0,
					cancelable: !0,
					composed: !1,
				});
				t.dispatchEvent(n);
			};
		},
	},
	t = {};
function i(n) {
	var s = t[n];
	if (void 0 !== s) return s.exports;
	var u = (t[n] = { exports: {} });
	return e[n](u, u.exports, i), u.exports;
}
(i.d = (e, t) => {
	for (var n in t)
		i.o(t, n) &&
			!i.o(e, n) &&
			Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
}),
	(i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
var n = {};
i.d(n, { A: () => r });
var s = i(926),
	u = i(615);
/*
 * HSInputNumber
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class l extends u.A {
	constructor(e, t) {
		super(e, t),
			(this.input =
				this.el.querySelector('[data-hs-input-number-input]') || null),
			(this.increment =
				this.el.querySelector('[data-hs-input-number-increment]') || null),
			(this.decrement =
				this.el.querySelector('[data-hs-input-number-decrement]') || null),
			this.input && this.checkIsNumberAndConvert();
		const i = this.el.dataset.hsInputNumber,
			n = i ? JSON.parse(i) : { step: 1 },
			s = Object.assign(Object.assign({}, n), t);
		(this.minInputValue = 'min' in s ? s.min : 0),
			(this.maxInputValue = 'max' in s ? s.max : null),
			(this.step = 'step' in s && s.step > 0 ? s.step : 1),
			this.init();
	}
	inputInput() {
		this.changeValue();
	}
	incrementClick() {
		this.changeValue('increment');
	}
	decrementClick() {
		this.changeValue('decrement');
	}
	init() {
		this.createCollection(window.$hsInputNumberCollection, this),
			this.input && this.increment && this.build();
	}
	checkIsNumberAndConvert() {
		const e = this.input.value.trim(),
			t = this.cleanAndExtractNumber(e);
		null !== t
			? ((this.inputValue = t), (this.input.value = t.toString()))
			: ((this.inputValue = 0), (this.input.value = '0'));
	}
	cleanAndExtractNumber(e) {
		const t = [];
		let i = !1;
		e.split('').forEach((e) => {
			e >= '0' && e <= '9'
				? t.push(e)
				: '.' !== e || i || (t.push(e), (i = !0));
		});
		const n = t.join(''),
			s = parseFloat(n);
		return isNaN(s) ? null : s;
	}
	build() {
		this.input && this.buildInput(),
			this.increment && this.buildIncrement(),
			this.decrement && this.buildDecrement(),
			this.inputValue <= this.minInputValue &&
				((this.inputValue = this.minInputValue),
				(this.input.value = `${this.minInputValue}`)),
			this.inputValue <= this.minInputValue && this.changeValue(),
			this.input.hasAttribute('disabled') && this.disableButtons();
	}
	buildInput() {
		(this.onInputInputListener = () => this.inputInput()),
			this.input.addEventListener('input', this.onInputInputListener);
	}
	buildIncrement() {
		(this.onIncrementClickListener = () => this.incrementClick()),
			this.increment.addEventListener('click', this.onIncrementClickListener);
	}
	buildDecrement() {
		(this.onDecrementClickListener = () => this.decrementClick()),
			this.decrement.addEventListener('click', this.onDecrementClickListener);
	}
	changeValue(e = 'none') {
		var t, i;
		const n = { inputValue: this.inputValue },
			u =
				null !== (t = this.minInputValue) && void 0 !== t
					? t
					: Number.MIN_SAFE_INTEGER,
			l =
				null !== (i = this.maxInputValue) && void 0 !== i
					? i
					: Number.MAX_SAFE_INTEGER;
		switch (
			((this.inputValue = isNaN(this.inputValue) ? 0 : this.inputValue), e)
		) {
			case 'increment':
				const e = this.inputValue + this.step;
				(this.inputValue = e >= u && e <= l ? e : l),
					(this.input.value = this.inputValue.toString());
				break;
			case 'decrement':
				const t = this.inputValue - this.step;
				(this.inputValue = t >= u && t <= l ? t : u),
					(this.input.value = this.inputValue.toString());
				break;
			default:
				const i = isNaN(parseInt(this.input.value))
					? 0
					: parseInt(this.input.value);
				(this.inputValue = i >= l ? l : i <= u ? u : i),
					this.inputValue <= u &&
						(this.input.value = this.inputValue.toString());
		}
		(n.inputValue = this.inputValue),
			this.inputValue === u
				? (this.el.classList.add('disabled'),
					this.decrement && this.disableButtons('decrement'))
				: (this.el.classList.remove('disabled'),
					this.decrement && this.enableButtons('decrement')),
			this.inputValue === l
				? (this.el.classList.add('disabled'),
					this.increment && this.disableButtons('increment'))
				: (this.el.classList.remove('disabled'),
					this.increment && this.enableButtons('increment')),
			this.fireEvent('change', n),
			(0, s.JD)('change.hs.inputNumber', this.el, n);
	}
	disableButtons(e = 'all') {
		'all' === e
			? (('BUTTON' !== this.increment.tagName &&
					'INPUT' !== this.increment.tagName) ||
					this.increment.setAttribute('disabled', 'disabled'),
				('BUTTON' !== this.decrement.tagName &&
					'INPUT' !== this.decrement.tagName) ||
					this.decrement.setAttribute('disabled', 'disabled'))
			: 'increment' === e
				? ('BUTTON' !== this.increment.tagName &&
						'INPUT' !== this.increment.tagName) ||
					this.increment.setAttribute('disabled', 'disabled')
				: 'decrement' === e &&
					(('BUTTON' !== this.decrement.tagName &&
						'INPUT' !== this.decrement.tagName) ||
						this.decrement.setAttribute('disabled', 'disabled'));
	}
	enableButtons(e = 'all') {
		'all' === e
			? (('BUTTON' !== this.increment.tagName &&
					'INPUT' !== this.increment.tagName) ||
					this.increment.removeAttribute('disabled'),
				('BUTTON' !== this.decrement.tagName &&
					'INPUT' !== this.decrement.tagName) ||
					this.decrement.removeAttribute('disabled'))
			: 'increment' === e
				? ('BUTTON' !== this.increment.tagName &&
						'INPUT' !== this.increment.tagName) ||
					this.increment.removeAttribute('disabled')
				: 'decrement' === e &&
					(('BUTTON' !== this.decrement.tagName &&
						'INPUT' !== this.decrement.tagName) ||
						this.decrement.removeAttribute('disabled'));
	}
	destroy() {
		this.el.classList.remove('disabled'),
			this.increment.removeAttribute('disabled'),
			this.decrement.removeAttribute('disabled'),
			this.input.removeEventListener('input', this.onInputInputListener),
			this.increment.removeEventListener(
				'click',
				this.onIncrementClickListener,
			),
			this.decrement.removeEventListener(
				'click',
				this.onDecrementClickListener,
			),
			(window.$hsInputNumberCollection = window.$hsInputNumberCollection.filter(
				({ element: e }) => e.el !== this.el,
			));
	}
	static getInstance(e, t) {
		const i = window.$hsInputNumberCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return i ? (t ? i : i.element) : null;
	}
	static autoInit() {
		window.$hsInputNumberCollection || (window.$hsInputNumberCollection = []),
			window.$hsInputNumberCollection &&
				(window.$hsInputNumberCollection =
					window.$hsInputNumberCollection.filter(({ element: e }) =>
						document.contains(e.el),
					)),
			document
				.querySelectorAll('[data-hs-input-number]:not(.--prevent-on-load-init)')
				.forEach((e) => {
					window.$hsInputNumberCollection.find((t) => {
						var i;
						return (
							(null === (i = null == t ? void 0 : t.element) || void 0 === i
								? void 0
								: i.el) === e
						);
					}) || new l(e);
				});
	}
}
window.addEventListener('load', () => {
	l.autoInit();
}),
	'undefined' != typeof window && (window.HSInputNumber = l);
const r = l;
var a = n.A;
export { a as default };
