var t = {
		615: (t, e, s) => {
			s.d(e, { A: () => i });
			class i {
				constructor(t, e, s) {
					(this.el = t),
						(this.options = e),
						(this.events = s),
						(this.el = t),
						(this.options = e),
						(this.events = {});
				}
				createCollection(t, e) {
					var s;
					t.push({
						id:
							(null === (s = null == e ? void 0 : e.el) || void 0 === s
								? void 0
								: s.id) || t.length + 1,
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
		926: (t, e, s) => {
			s.d(e, { JD: () => n, PR: () => i, en: () => o, fc: () => r });
			const i = (t, e, s = 'auto', i = 10, n = null) => {
					const r = e.getBoundingClientRect(),
						o = n ? n.getBoundingClientRect() : null,
						a = window.innerHeight,
						l = o ? r.top - o.top : r.top,
						h = (n ? o.bottom : a) - r.bottom,
						c = t.clientHeight + i;
					return 'bottom' === s
						? h >= c
						: 'top' === s
							? l >= c
							: l >= c || h >= c;
				},
				n = (t, e, s = null) => {
					const i = new CustomEvent(t, {
						detail: { payload: s },
						bubbles: !0,
						cancelable: !0,
						composed: !1,
					});
					e.dispatchEvent(i);
				},
				r = (t) => {
					const e = document.createElement('template');
					return (t = t.trim()), (e.innerHTML = t), e.content.firstChild;
				},
				o = (t, e, s = ' ', i = 'add') => {
					t.split(s).forEach((t) =>
						'add' === i ? e.classList.add(t) : e.classList.remove(t),
					);
				};
		},
	},
	e = {};
function s(i) {
	var n = e[i];
	if (void 0 !== n) return n.exports;
	var r = (e[i] = { exports: {} });
	return t[i](r, r.exports, s), r.exports;
}
(s.d = (t, e) => {
	for (var i in e)
		s.o(e, i) &&
			!s.o(t, i) &&
			Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
}),
	(s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e));
var i = {};
s.d(i, { A: () => a });
var n = s(926),
	r = s(615);
/*
 * HSStrongPassword
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class o extends r.A {
	constructor(t, e) {
		super(t, e),
			(this.isOpened = !1),
			(this.strength = 0),
			(this.passedRules = new Set());
		const s = t.getAttribute('data-hs-strong-password'),
			i = s ? JSON.parse(s) : {},
			n = Object.assign(Object.assign({}, i), e);
		(this.target = (null == n ? void 0 : n.target)
			? 'string' == typeof (null == n ? void 0 : n.target)
				? document.querySelector(n.target)
				: n.target
			: null),
			(this.hints = (null == n ? void 0 : n.hints)
				? 'string' == typeof (null == n ? void 0 : n.hints)
					? document.querySelector(n.hints)
					: n.hints
				: null),
			(this.stripClasses = (null == n ? void 0 : n.stripClasses) || null),
			(this.minLength = (null == n ? void 0 : n.minLength) || 6),
			(this.mode = (null == n ? void 0 : n.mode) || 'default'),
			(this.popoverSpace = (null == n ? void 0 : n.popoverSpace) || 10),
			(this.checksExclude = (null == n ? void 0 : n.checksExclude) || []),
			(this.availableChecks = [
				'lowercase',
				'uppercase',
				'numbers',
				'special-characters',
				'min-length',
			].filter((t) => !this.checksExclude.includes(t))),
			(this.specialCharactersSet =
				(null == n ? void 0 : n.specialCharactersSet) ||
				'!"#$%&\'()*+,-./:;<=>?@[\\\\\\]^_`{|}~'),
			this.target && this.init();
	}
	targetInput(t) {
		this.setStrength(t.target.value);
	}
	targetFocus() {
		(this.isOpened = !0),
			this.hints.classList.remove('hidden'),
			this.hints.classList.add('block'),
			this.recalculateDirection();
	}
	targetBlur() {
		(this.isOpened = !1),
			this.hints.classList.remove('block', 'bottom-full', 'top-full'),
			this.hints.classList.add('hidden'),
			(this.hints.style.marginTop = ''),
			(this.hints.style.marginBottom = '');
	}
	targetInputSecond() {
		this.setWeaknessText();
	}
	targetInputThird() {
		this.setRulesText();
	}
	init() {
		this.createCollection(window.$hsStrongPasswordCollection, this),
			this.availableChecks.length && this.build();
	}
	build() {
		this.buildStrips(),
			this.hints && this.buildHints(),
			this.setStrength(this.target.value),
			(this.onTargetInputListener = (t) => this.targetInput(t)),
			this.target.addEventListener('input', this.onTargetInputListener);
	}
	buildStrips() {
		if (((this.el.innerHTML = ''), this.stripClasses))
			for (let t = 0; t < this.availableChecks.length; t++) {
				const t = (0, n.fc)('<div></div>');
				(0, n.en)(this.stripClasses, t), this.el.append(t);
			}
	}
	buildHints() {
		(this.weakness =
			this.hints.querySelector(
				'[data-hs-strong-password-hints-weakness-text]',
			) || null),
			(this.rules =
				Array.from(
					this.hints.querySelectorAll(
						'[data-hs-strong-password-hints-rule-text]',
					),
				) || null),
			this.rules.forEach((t) => {
				var e;
				const s = t.getAttribute('data-hs-strong-password-hints-rule-text');
				(null === (e = this.checksExclude) || void 0 === e
					? void 0
					: e.includes(s)) && t.remove();
			}),
			this.weakness && this.buildWeakness(),
			this.rules && this.buildRules(),
			'popover' === this.mode &&
				((this.onTargetFocusListener = () => this.targetFocus()),
				(this.onTargetBlurListener = () => this.targetBlur()),
				this.target.addEventListener('focus', this.onTargetFocusListener),
				this.target.addEventListener('blur', this.onTargetBlurListener));
	}
	buildWeakness() {
		this.checkStrength(this.target.value),
			this.setWeaknessText(),
			(this.onTargetInputSecondListener = () =>
				setTimeout(() => this.targetInputSecond())),
			this.target.addEventListener('input', this.onTargetInputSecondListener);
	}
	buildRules() {
		this.setRulesText(),
			(this.onTargetInputThirdListener = () =>
				setTimeout(() => this.targetInputThird())),
			this.target.addEventListener('input', this.onTargetInputThirdListener);
	}
	setWeaknessText() {
		const t = this.weakness.getAttribute(
				'data-hs-strong-password-hints-weakness-text',
			),
			e = JSON.parse(t);
		this.weakness.textContent = e[this.strength];
	}
	setRulesText() {
		this.rules.forEach((t) => {
			const e = t.getAttribute('data-hs-strong-password-hints-rule-text');
			this.checkIfPassed(t, this.passedRules.has(e));
		});
	}
	togglePopover() {
		const t = this.el.querySelector('.popover');
		t && t.classList.toggle('show');
	}
	checkStrength(t) {
		const e = new Set(),
			s = {
				lowercase: /[a-z]+/,
				uppercase: /[A-Z]+/,
				numbers: /[0-9]+/,
				'special-characters': new RegExp(`[${this.specialCharactersSet}]`),
			};
		let i = 0;
		return (
			this.availableChecks.includes('lowercase') &&
				t.match(s.lowercase) &&
				((i += 1), e.add('lowercase')),
			this.availableChecks.includes('uppercase') &&
				t.match(s.uppercase) &&
				((i += 1), e.add('uppercase')),
			this.availableChecks.includes('numbers') &&
				t.match(s.numbers) &&
				((i += 1), e.add('numbers')),
			this.availableChecks.includes('special-characters') &&
				t.match(s['special-characters']) &&
				((i += 1), e.add('special-characters')),
			this.availableChecks.includes('min-length') &&
				t.length >= this.minLength &&
				((i += 1), e.add('min-length')),
			t.length || (i = 0),
			i === this.availableChecks.length
				? this.el.classList.add('accepted')
				: this.el.classList.remove('accepted'),
			(this.strength = i),
			(this.passedRules = e),
			{ strength: this.strength, rules: this.passedRules }
		);
	}
	checkIfPassed(t, e = !1) {
		const s = t.querySelector('[data-check]'),
			i = t.querySelector('[data-uncheck]');
		e
			? (t.classList.add('active'),
				s.classList.remove('hidden'),
				i.classList.add('hidden'))
			: (t.classList.remove('active'),
				s.classList.add('hidden'),
				i.classList.remove('hidden'));
	}
	setStrength(t) {
		const { strength: e, rules: s } = this.checkStrength(t),
			i = { strength: e, rules: s };
		this.hideStrips(e),
			this.fireEvent('change', i),
			(0, n.JD)('change.hs.strongPassword', this.el, i);
	}
	hideStrips(t) {
		Array.from(this.el.children).forEach((e, s) => {
			s < t ? e.classList.add('passed') : e.classList.remove('passed');
		});
	}
	recalculateDirection() {
		(0, n.PR)(this.hints, this.target, 'bottom', this.popoverSpace)
			? (this.hints.classList.remove('bottom-full'),
				this.hints.classList.add('top-full'),
				(this.hints.style.marginBottom = ''),
				(this.hints.style.marginTop = `${this.popoverSpace}px`))
			: (this.hints.classList.remove('top-full'),
				this.hints.classList.add('bottom-full'),
				(this.hints.style.marginTop = ''),
				(this.hints.style.marginBottom = `${this.popoverSpace}px`));
	}
	destroy() {
		this.target.removeEventListener('input', this.onTargetInputListener),
			this.target.removeEventListener('focus', this.onTargetFocusListener),
			this.target.removeEventListener('blur', this.onTargetBlurListener),
			this.target.removeEventListener(
				'input',
				this.onTargetInputSecondListener,
			),
			this.target.removeEventListener('input', this.onTargetInputThirdListener),
			(window.$hsStrongPasswordCollection =
				window.$hsStrongPasswordCollection.filter(
					({ element: t }) => t.el !== this.el,
				));
	}
	static getInstance(t, e) {
		const s = window.$hsStrongPasswordCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		return s ? (e ? s : s.element.el) : null;
	}
	static autoInit() {
		window.$hsStrongPasswordCollection ||
			(window.$hsStrongPasswordCollection = []),
			window.$hsStrongPasswordCollection &&
				(window.$hsStrongPasswordCollection =
					window.$hsStrongPasswordCollection.filter(({ element: t }) =>
						document.contains(t.el),
					)),
			document
				.querySelectorAll(
					'[data-hs-strong-password]:not(.--prevent-on-load-init)',
				)
				.forEach((t) => {
					if (
						!window.$hsStrongPasswordCollection.find((e) => {
							var s;
							return (
								(null === (s = null == e ? void 0 : e.element) || void 0 === s
									? void 0
									: s.el) === t
							);
						})
					) {
						const e = t.getAttribute('data-hs-strong-password'),
							s = e ? JSON.parse(e) : {};
						new o(t, s);
					}
				});
	}
}
window.addEventListener('load', () => {
	o.autoInit();
}),
	document.addEventListener('scroll', () => {
		if (!window.$hsStrongPasswordCollection) return !1;
		const t = window.$hsStrongPasswordCollection.find(
			(t) => t.element.isOpened,
		);
		t && t.element.recalculateDirection();
	}),
	'undefined' != typeof window && (window.HSStrongPassword = o);
const a = o;
var l = i.A;
export { l as default };
