var t = {
		189: (t, e, i) => {
			i.d(e, { jU: () => s });
			const s = [
				'ArrowUp',
				'ArrowLeft',
				'ArrowDown',
				'ArrowRight',
				'Home',
				'End',
				'Escape',
				'Enter',
			];
		},
		615: (t, e, i) => {
			i.d(e, { A: () => s });
			class s {
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
			i.d(e, {
				JD: () => n,
				PR: () => s,
				fc: () => r,
				sH: () => o,
				sg: () => l,
				yd: () => a,
			});
			const s = (t, e, i = 'auto', s = 10, o = null) => {
					const l = e.getBoundingClientRect(),
						n = o ? o.getBoundingClientRect() : null,
						a = window.innerHeight,
						r = n ? l.top - n.top : l.top,
						u = (o ? n.bottom : a) - l.bottom,
						h = t.clientHeight + s;
					return 'bottom' === i
						? u >= h
						: 'top' === i
							? r >= h
							: r >= h || u >= h;
				},
				o = (t) => {
					if (!t) return !1;
					return (
						'none' === window.getComputedStyle(t).display || o(t.parentElement)
					);
				},
				l = (t, e = 200) => {
					let i;
					return (...s) => {
						clearTimeout(i),
							(i = setTimeout(() => {
								t.apply(void 0, s);
							}, e));
					};
				},
				n = (t, e, i = null) => {
					const s = new CustomEvent(t, {
						detail: { payload: i },
						bubbles: !0,
						cancelable: !0,
						composed: !1,
					});
					e.dispatchEvent(s);
				},
				a = (t, e) => {
					const i = () => {
							e(), t.removeEventListener('transitionend', i, !0);
						},
						s = window.getComputedStyle(t),
						o = s.getPropertyValue('transition-duration');
					'none' !== s.getPropertyValue('transition-property') &&
					parseFloat(o) > 0
						? t.addEventListener('transitionend', i, !0)
						: e();
				},
				r = (t) => {
					const e = document.createElement('template');
					return (t = t.trim()), (e.innerHTML = t), e.content.firstChild;
				};
		},
	},
	e = {};
function i(s) {
	var o = e[s];
	if (void 0 !== o) return o.exports;
	var l = (e[s] = { exports: {} });
	return t[s](l, l.exports, i), l.exports;
}
(i.d = (t, e) => {
	for (var s in e)
		i.o(e, s) &&
			!i.o(t, s) &&
			Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
}),
	(i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e));
var s = {};
i.d(s, { A: () => u });
var o = i(926),
	l = i(615),
	n = i(189),
	a = function (t, e, i, s) {
		return new (i || (i = Promise))(function (o, l) {
			function n(t) {
				try {
					r(s.next(t));
				} catch (t) {
					l(t);
				}
			}
			function a(t) {
				try {
					r(s.throw(t));
				} catch (t) {
					l(t);
				}
			}
			function r(t) {
				var e;
				t.done
					? o(t.value)
					: ((e = t.value),
						e instanceof i
							? e
							: new i(function (t) {
									t(e);
								})).then(n, a);
			}
			r((s = s.apply(t, e || [])).next());
		});
	};
class r extends l.A {
	constructor(t, e, i) {
		var s,
			o,
			l,
			n,
			a,
			r,
			u,
			h,
			d,
			p,
			c,
			m,
			b,
			g,
			v,
			y,
			x,
			f,
			L,
			w,
			C,
			A,
			S,
			E,
			T,
			P,
			O;
		super(t, e, i);
		const I = t.getAttribute('data-hs-combo-box'),
			k = I ? JSON.parse(I) : {},
			B = Object.assign(Object.assign({}, k), e);
		(this.gap = 5),
			(this.viewport =
				null !==
					(s =
						'string' == typeof (null == B ? void 0 : B.viewport)
							? document.querySelector(null == B ? void 0 : B.viewport)
							: null == B
								? void 0
								: B.viewport) && void 0 !== s
					? s
					: null),
			(this.preventVisibility =
				null !== (o = null == B ? void 0 : B.preventVisibility) &&
				void 0 !== o &&
				o),
			(this.apiUrl =
				null !== (l = null == B ? void 0 : B.apiUrl) && void 0 !== l
					? l
					: null),
			(this.apiDataPart =
				null !== (n = null == B ? void 0 : B.apiDataPart) && void 0 !== n
					? n
					: null),
			(this.apiQuery =
				null !== (a = null == B ? void 0 : B.apiQuery) && void 0 !== a
					? a
					: null),
			(this.apiSearchQuery =
				null !== (r = null == B ? void 0 : B.apiSearchQuery) && void 0 !== r
					? r
					: null),
			(this.apiSearchPath =
				null !== (u = null == B ? void 0 : B.apiSearchPath) && void 0 !== u
					? u
					: null),
			(this.apiSearchDefaultPath =
				null !== (h = null == B ? void 0 : B.apiSearchDefaultPath) &&
				void 0 !== h
					? h
					: null),
			(this.apiHeaders =
				null !== (d = null == B ? void 0 : B.apiHeaders) && void 0 !== d
					? d
					: {}),
			(this.apiGroupField =
				null !== (p = null == B ? void 0 : B.apiGroupField) && void 0 !== p
					? p
					: null),
			(this.outputItemTemplate =
				null !== (c = null == B ? void 0 : B.outputItemTemplate) && void 0 !== c
					? c
					: '<div class="cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-hs-combo-box-output-item>\n\t\t\t\t<div class="flex justify-between items-center w-full">\n\t\t\t\t\t<span data-hs-combo-box-search-text></span>\n\t\t\t\t\t<span class="hidden hs-combo-box-selected:block">\n\t\t\t\t\t\t<svg class="shrink-0 size-3.5 text-blue-600 dark:text-blue-500" xmlns="http:.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n\t\t\t\t\t\t\t<polyline points="20 6 9 17 4 12"></polyline>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>'),
			(this.outputEmptyTemplate =
				null !== (m = null == B ? void 0 : B.outputEmptyTemplate) &&
				void 0 !== m
					? m
					: '<div class="py-2 px-4 w-full text-sm text-gray-800 rounded-lg dark:bg-neutral-900 dark:text-neutral-200">Nothing found...</div>'),
			(this.outputLoaderTemplate =
				null !== (b = null == B ? void 0 : B.outputLoaderTemplate) &&
				void 0 !== b
					? b
					: '<div class="flex justify-center items-center py-2 px-4 text-sm text-gray-800 rounded-lg bg-white dark:bg-neutral-900 dark:text-neutral-200">\n\t\t\t\t<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">\n\t\t\t\t\t<span class="sr-only">Loading...</span>\n\t\t\t\t</div>\n\t\t\t</div>'),
			(this.groupingType =
				null !== (g = null == B ? void 0 : B.groupingType) && void 0 !== g
					? g
					: null),
			(this.groupingTitleTemplate =
				null !== (v = null == B ? void 0 : B.groupingTitleTemplate) &&
				void 0 !== v
					? v
					: 'default' === this.groupingType
						? '<div class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"></div>'
						: '<button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold whitespace-nowrap rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"></button>'),
			(this.tabsWrapperTemplate =
				null !== (y = null == B ? void 0 : B.tabsWrapperTemplate) &&
				void 0 !== y
					? y
					: '<div class="overflow-x-auto p-4"></div>'),
			(this.preventSelection =
				null !== (x = null == B ? void 0 : B.preventSelection) &&
				void 0 !== x &&
				x),
			(this.preventAutoPosition =
				null !== (f = null == B ? void 0 : B.preventAutoPosition) &&
				void 0 !== f &&
				f),
			(this.isOpenOnFocus =
				null !== (L = null == B ? void 0 : B.isOpenOnFocus) &&
				void 0 !== L &&
				L),
			(this.input =
				null !== (w = this.el.querySelector('[data-hs-combo-box-input]')) &&
				void 0 !== w
					? w
					: null),
			(this.output =
				null !== (C = this.el.querySelector('[data-hs-combo-box-output]')) &&
				void 0 !== C
					? C
					: null),
			(this.itemsWrapper =
				null !==
					(A = this.el.querySelector(
						'[data-hs-combo-box-output-items-wrapper]',
					)) && void 0 !== A
					? A
					: null),
			(this.items =
				null !==
					(S = Array.from(
						this.el.querySelectorAll('[data-hs-combo-box-output-item]'),
					)) && void 0 !== S
					? S
					: []),
			(this.tabs = []),
			(this.toggle =
				null !== (E = this.el.querySelector('[data-hs-combo-box-toggle]')) &&
				void 0 !== E
					? E
					: null),
			(this.toggleClose =
				null !== (T = this.el.querySelector('[data-hs-combo-box-close]')) &&
				void 0 !== T
					? T
					: null),
			(this.toggleOpen =
				null !== (P = this.el.querySelector('[data-hs-combo-box-open]')) &&
				void 0 !== P
					? P
					: null),
			(this.outputPlaceholder = null),
			(this.selected = this.value =
				null !==
					(O = this.el.querySelector('[data-hs-combo-box-input]').value) &&
				void 0 !== O
					? O
					: ''),
			(this.currentData = null),
			(this.isOpened = !1),
			(this.isCurrent = !1),
			(this.animationInProcess = !1),
			(this.selectedGroup = 'all'),
			this.init();
	}
	inputFocus() {
		this.isOpened || (this.setResultAndRender(), this.open());
	}
	inputInput(t) {
		this.setResultAndRender(t.target.value),
			'' !== this.input.value
				? this.el.classList.add('has-value')
				: this.el.classList.remove('has-value'),
			this.isOpened || this.open();
	}
	toggleClick() {
		this.isOpened
			? this.close()
			: this.open(this.toggle.getAttribute('data-hs-combo-box-toggle'));
	}
	toggleCloseClick() {
		this.close();
	}
	toggleOpenClick() {
		this.open();
	}
	init() {
		this.createCollection(window.$hsComboBoxCollection, this), this.build();
	}
	build() {
		this.buildInput(),
			this.groupingType && this.setGroups(),
			this.buildItems(),
			this.preventVisibility &&
				(this.preventAutoPosition || this.recalculateDirection()),
			this.toggle && this.buildToggle(),
			this.toggleClose && this.buildToggleClose(),
			this.toggleOpen && this.buildToggleOpen();
	}
	getNestedProperty(t, e) {
		return e.split('.').reduce((t, e) => t && t[e], t);
	}
	setValue(t, e = null) {
		(this.selected = t),
			(this.value = t),
			(this.input.value = t),
			e && (this.currentData = e),
			this.fireEvent('select', this.currentData),
			(0, o.JD)('select.hs.combobox', this.el, this.currentData);
	}
	setValueAndOpen(t) {
		(this.value = t), this.items.length && this.setItemsVisibility();
	}
	setValueAndClear(t, e = null) {
		t ? this.setValue(t, e) : this.setValue(this.selected, e),
			this.outputPlaceholder && this.destroyOutputPlaceholder();
	}
	setSelectedByValue(t) {
		this.items.forEach((e) => {
			this.isTextExists(e, t)
				? e.classList.add('selected')
				: e.classList.remove('selected');
		});
	}
	setResultAndRender(t = '') {
		let e = this.preventVisibility ? this.input.value : t;
		this.setResults(e),
			(this.apiSearchQuery ||
				this.apiSearchPath ||
				this.apiSearchDefaultPath) &&
				this.itemsFromJson();
	}
	setResults(t) {
		(this.value = t),
			this.resultItems(),
			this.hasVisibleItems()
				? this.destroyOutputPlaceholder()
				: this.buildOutputPlaceholder();
	}
	setGroups() {
		const t = [];
		this.items.forEach((e) => {
			const { group: i } = JSON.parse(
				e.getAttribute('data-hs-combo-box-output-item'),
			);
			t.some((t) => (null == t ? void 0 : t.name) === i.name) || t.push(i);
		}),
			(this.groups = t);
	}
	setApiGroups(t) {
		const e = [];
		t.forEach((t) => {
			const i = t[this.apiGroupField];
			e.some((t) => t.name === i) || e.push({ name: i, title: i });
		}),
			(this.groups = e);
	}
	setItemsVisibility() {
		'tabs' === this.groupingType &&
			'all' !== this.selectedGroup &&
			this.items.forEach((t) => {
				t.style.display = 'none';
			});
		const t =
			'tabs' === this.groupingType
				? 'all' === this.selectedGroup
					? this.items
					: this.items.filter((t) => {
							const { group: e } = JSON.parse(
								t.getAttribute('data-hs-combo-box-output-item'),
							);
							return e.name === this.selectedGroup;
						})
				: this.items;
		'tabs' === this.groupingType &&
			'all' !== this.selectedGroup &&
			t.forEach((t) => {
				t.style.display = 'block';
			}),
			t.forEach((t) => {
				this.isTextExistsAny(t, this.value)
					? (t.style.display = 'block')
					: (t.style.display = 'none');
			}),
			'default' === this.groupingType &&
				this.output
					.querySelectorAll('[data-hs-combo-box-group-title]')
					.forEach((t) => {
						const e = t.getAttribute('data-hs-combo-box-group-title');
						this.items.filter((t) => {
							const { group: i } = JSON.parse(
								t.getAttribute('data-hs-combo-box-output-item'),
							);
							return i.name === e && 'block' === t.style.display;
						}).length
							? (t.style.display = 'block')
							: (t.style.display = 'none');
					});
	}
	isTextExists(t, e) {
		const i = e.map((t) => t.toLowerCase());
		return Array.from(
			t.querySelectorAll('[data-hs-combo-box-search-text]'),
		).some((t) =>
			i.includes(t.getAttribute('data-hs-combo-box-search-text').toLowerCase()),
		);
	}
	isTextExistsAny(t, e) {
		return Array.from(
			t.querySelectorAll('[data-hs-combo-box-search-text]'),
		).some((t) =>
			t
				.getAttribute('data-hs-combo-box-search-text')
				.toLowerCase()
				.includes(e.toLowerCase()),
		);
	}
	hasVisibleItems() {
		return (
			!!this.items.length && this.items.some((t) => 'block' === t.style.display)
		);
	}
	valuesBySelector(t) {
		return Array.from(
			t.querySelectorAll('[data-hs-combo-box-search-text]'),
		).reduce(
			(t, e) => [...t, e.getAttribute('data-hs-combo-box-search-text')],
			[],
		);
	}
	sortItems() {
		return this.items.sort((t, e) => {
			const i = t
					.querySelector('[data-hs-combo-box-value]')
					.getAttribute('data-hs-combo-box-search-text'),
				s = e
					.querySelector('[data-hs-combo-box-value]')
					.getAttribute('data-hs-combo-box-search-text');
			return i < s ? -1 : i > s ? 1 : 0;
		});
	}
	buildInput() {
		this.isOpenOnFocus &&
			((this.onInputFocusListener = () => this.inputFocus()),
			this.input.addEventListener('focus', this.onInputFocusListener)),
			(this.onInputInputListener = (0, o.sg)((t) => this.inputInput(t))),
			this.input.addEventListener('input', this.onInputInputListener);
	}
	buildItems() {
		return a(this, void 0, void 0, function* () {
			(this.output.role = 'listbox'),
				(this.output.tabIndex = -1),
				(this.output.ariaOrientation = 'vertical'),
				this.apiUrl
					? yield this.itemsFromJson()
					: (this.itemsWrapper
							? (this.itemsWrapper.innerHTML = '')
							: (this.output.innerHTML = ''),
						this.itemsFromHtml()),
				this.items[0].classList.contains('selected') &&
					(this.currentData = JSON.parse(
						this.items[0].getAttribute('data-hs-combo-box-item-stored-data'),
					));
		});
	}
	buildOutputLoader() {
		if (this.outputLoader) return !1;
		(this.outputLoader = (0, o.fc)(this.outputLoaderTemplate)),
			this.items.length || this.outputPlaceholder
				? ((this.outputLoader.style.position = 'absolute'),
					(this.outputLoader.style.top = '0'),
					(this.outputLoader.style.bottom = '0'),
					(this.outputLoader.style.left = '0'),
					(this.outputLoader.style.right = '0'),
					(this.outputLoader.style.zIndex = '2'))
				: ((this.outputLoader.style.position = ''),
					(this.outputLoader.style.top = ''),
					(this.outputLoader.style.bottom = ''),
					(this.outputLoader.style.left = ''),
					(this.outputLoader.style.right = ''),
					(this.outputLoader.style.zIndex = ''),
					(this.outputLoader.style.height = '30px')),
			this.output.append(this.outputLoader);
	}
	buildToggle() {
		var t, e, i, s;
		this.isOpened
			? ((null === (t = null == this ? void 0 : this.toggle) || void 0 === t
					? void 0
					: t.ariaExpanded) && (this.toggle.ariaExpanded = 'true'),
				(null === (e = null == this ? void 0 : this.input) || void 0 === e
					? void 0
					: e.ariaExpanded) && (this.input.ariaExpanded = 'true'))
			: ((null === (i = null == this ? void 0 : this.toggle) || void 0 === i
					? void 0
					: i.ariaExpanded) && (this.toggle.ariaExpanded = 'false'),
				(null === (s = null == this ? void 0 : this.input) || void 0 === s
					? void 0
					: s.ariaExpanded) && (this.input.ariaExpanded = 'false')),
			(this.onToggleClickListener = () => this.toggleClick()),
			this.toggle.addEventListener('click', this.onToggleClickListener);
	}
	buildToggleClose() {
		(this.onToggleCloseClickListener = () => this.toggleCloseClick()),
			this.toggleClose.addEventListener(
				'click',
				this.onToggleCloseClickListener,
			);
	}
	buildToggleOpen() {
		(this.onToggleOpenClickListener = () => this.toggleOpenClick()),
			this.toggleOpen.addEventListener('click', this.onToggleOpenClickListener);
	}
	buildOutputPlaceholder() {
		this.outputPlaceholder ||
			(this.outputPlaceholder = (0, o.fc)(this.outputEmptyTemplate)),
			this.appendItemsToWrapper(this.outputPlaceholder);
	}
	destroyOutputLoader() {
		this.outputLoader && this.outputLoader.remove(), (this.outputLoader = null);
	}
	itemRender(t) {
		var e;
		const i = t
				.querySelector('[data-hs-combo-box-value]')
				.getAttribute('data-hs-combo-box-search-text'),
			s =
				null !==
					(e = JSON.parse(
						t.getAttribute('data-hs-combo-box-item-stored-data'),
					)) && void 0 !== e
					? e
					: null;
		this.itemsWrapper ? this.itemsWrapper.append(t) : this.output.append(t),
			this.preventSelection ||
				t.addEventListener('click', () => {
					this.close(i, s), this.setSelectedByValue(this.valuesBySelector(t));
				});
	}
	plainRender(t) {
		t.forEach((t) => {
			this.itemRender(t);
		});
	}
	jsonItemsRender(t) {
		t.forEach((t, e) => {
			const i = (0, o.fc)(this.outputItemTemplate);
			i.setAttribute('data-hs-combo-box-item-stored-data', JSON.stringify(t)),
				i
					.querySelectorAll('[data-hs-combo-box-output-item-field]')
					.forEach((e) => {
						const i = this.getNestedProperty(
								t,
								e.getAttribute('data-hs-combo-box-output-item-field'),
							),
							s = e.hasAttribute('data-hs-combo-box-output-item-hide-if-empty');
						(e.textContent = null != i ? i : ''),
							!i && s && (e.style.display = 'none');
					}),
				i.querySelectorAll('[data-hs-combo-box-search-text]').forEach((e) => {
					const i = this.getNestedProperty(
						t,
						e.getAttribute('data-hs-combo-box-output-item-field'),
					);
					e.setAttribute('data-hs-combo-box-search-text', null != i ? i : '');
				}),
				i
					.querySelectorAll('[data-hs-combo-box-output-item-attr]')
					.forEach((e) => {
						JSON.parse(
							e.getAttribute('data-hs-combo-box-output-item-attr'),
						).forEach((i) => {
							e.setAttribute(i.attr, t[i.valueFrom]);
						});
					}),
				i.setAttribute('tabIndex', `${e}`),
				('tabs' !== this.groupingType && 'default' !== this.groupingType) ||
					i.setAttribute(
						'data-hs-combo-box-output-item',
						`{"group": {"name": "${t[this.apiGroupField]}", "title": "${t[this.apiGroupField]}"}}`,
					),
				(this.items = [...this.items, i]),
				this.preventSelection ||
					i.addEventListener('click', () => {
						this.close(
							i
								.querySelector('[data-hs-combo-box-value]')
								.getAttribute('data-hs-combo-box-search-text'),
							JSON.parse(i.getAttribute('data-hs-combo-box-item-stored-data')),
						),
							this.setSelectedByValue(this.valuesBySelector(i));
					}),
				this.appendItemsToWrapper(i);
		});
	}
	groupDefaultRender() {
		this.groups.forEach((t) => {
			const e = (0, o.fc)(this.groupingTitleTemplate);
			e.setAttribute('data-hs-combo-box-group-title', t.name),
				e.classList.add('--exclude-accessibility'),
				(e.innerText = t.title),
				this.itemsWrapper ? this.itemsWrapper.append(e) : this.output.append(e);
			const i = this.sortItems().filter((e) => {
				const { group: i } = JSON.parse(
					e.getAttribute('data-hs-combo-box-output-item'),
				);
				return i.name === t.name;
			});
			this.plainRender(i);
		});
	}
	groupTabsRender() {
		const t = (0, o.fc)(this.tabsWrapperTemplate),
			e = (0, o.fc)('<div class="flex flex-nowrap gap-x-2"></div>');
		t.append(e), this.output.insertBefore(t, this.output.firstChild);
		const i = (0, o.fc)(this.groupingTitleTemplate);
		i.setAttribute('data-hs-combo-box-group-title', 'all'),
			i.classList.add('--exclude-accessibility', 'active'),
			(i.innerText = 'All'),
			(this.tabs = [...this.tabs, i]),
			e.append(i),
			i.addEventListener('click', () => {
				this.selectedGroup = 'all';
				const t = this.tabs.find(
					(t) =>
						t.getAttribute('data-hs-combo-box-group-title') ===
						this.selectedGroup,
				);
				this.tabs.forEach((t) => t.classList.remove('active')),
					t.classList.add('active'),
					this.setItemsVisibility();
			}),
			this.groups.forEach((t) => {
				const i = (0, o.fc)(this.groupingTitleTemplate);
				i.setAttribute('data-hs-combo-box-group-title', t.name),
					i.classList.add('--exclude-accessibility'),
					(i.innerText = t.title),
					(this.tabs = [...this.tabs, i]),
					e.append(i),
					i.addEventListener('click', () => {
						this.selectedGroup = t.name;
						const e = this.tabs.find(
							(t) =>
								t.getAttribute('data-hs-combo-box-group-title') ===
								this.selectedGroup,
						);
						this.tabs.forEach((t) => t.classList.remove('active')),
							e.classList.add('active'),
							this.setItemsVisibility();
					});
			});
	}
	itemsFromHtml() {
		if ('default' === this.groupingType) this.groupDefaultRender();
		else if ('tabs' === this.groupingType) {
			const t = this.sortItems();
			this.groupTabsRender(), this.plainRender(t);
		} else {
			const t = this.sortItems();
			this.plainRender(t);
		}
		this.setResults(this.input.value);
	}
	itemsFromJson() {
		return a(this, void 0, void 0, function* () {
			this.buildOutputLoader();
			try {
				const t = `${this.apiQuery}`;
				let e,
					i,
					s = this.apiUrl;
				!this.apiSearchQuery && this.apiSearchPath
					? ((i =
							this.apiSearchDefaultPath && '' === this.value
								? `/${this.apiSearchDefaultPath}`
								: `/${this.apiSearchPath}/${this.value.toLowerCase()}`),
						(this.apiSearchPath || this.apiSearchDefaultPath) && (s += i))
					: ((e = `${this.apiSearchQuery}=${this.value.toLowerCase()}`),
						this.apiQuery && this.apiSearchQuery
							? (s += `?${e}&${t}`)
							: this.apiQuery
								? (s += `?${t}`)
								: this.apiSearchQuery && (s += `?${e}`));
				const l = yield fetch(s, this.apiHeaders);
				let n = yield l.json();
				this.apiDataPart && (n = n[this.apiDataPart]),
					(this.apiSearchQuery || this.apiSearchPath) && (this.items = []),
					this.itemsWrapper
						? (this.itemsWrapper.innerHTML = '')
						: (this.output.innerHTML = ''),
					'tabs' === this.groupingType
						? (this.setApiGroups(n),
							this.groupTabsRender(),
							this.jsonItemsRender(n))
						: 'default' === this.groupingType
							? (this.setApiGroups(n),
								this.groups.forEach((t) => {
									const e = (0, o.fc)(this.groupingTitleTemplate);
									e.setAttribute('data-hs-combo-box-group-title', t.name),
										e.classList.add('--exclude-accessibility'),
										(e.innerText = t.title);
									const i = n.filter((e) => e[this.apiGroupField] === t.name);
									this.itemsWrapper
										? this.itemsWrapper.append(e)
										: this.output.append(e),
										this.jsonItemsRender(i);
								}))
							: this.jsonItemsRender(n),
					this.setResults(this.input.value);
			} catch (t) {
				console.error(t), this.buildOutputPlaceholder();
			}
			this.destroyOutputLoader();
		});
	}
	appendItemsToWrapper(t) {
		this.itemsWrapper ? this.itemsWrapper.append(t) : this.output.append(t);
	}
	resultItems() {
		if (!this.items.length) return !1;
		this.setItemsVisibility(), this.setSelectedByValue([this.selected]);
	}
	destroyOutputPlaceholder() {
		this.outputPlaceholder && this.outputPlaceholder.remove(),
			(this.outputPlaceholder = null);
	}
	getCurrentData() {
		return this.currentData;
	}
	setCurrent() {
		window.$hsComboBoxCollection.length &&
			(window.$hsComboBoxCollection.map((t) => (t.element.isCurrent = !1)),
			(this.isCurrent = !0));
	}
	open(t) {
		return (
			!this.animationInProcess &&
			(void 0 !== t && this.setValueAndOpen(t),
			!this.preventVisibility &&
				((this.animationInProcess = !0),
				(this.output.style.display = 'block'),
				this.preventAutoPosition || this.recalculateDirection(),
				setTimeout(() => {
					var t, e;
					(null === (t = null == this ? void 0 : this.input) || void 0 === t
						? void 0
						: t.ariaExpanded) && (this.input.ariaExpanded = 'true'),
						(null === (e = null == this ? void 0 : this.toggle) || void 0 === e
							? void 0
							: e.ariaExpanded) && (this.toggle.ariaExpanded = 'true'),
						this.el.classList.add('active'),
						(this.animationInProcess = !1);
				}),
				void (this.isOpened = !0)))
		);
	}
	close(t, e = null) {
		var i, s;
		return (
			!this.animationInProcess &&
			(this.preventVisibility
				? (this.setValueAndClear(t, e),
					'' !== this.input.value
						? this.el.classList.add('has-value')
						: this.el.classList.remove('has-value'),
					!1)
				: ((this.animationInProcess = !0),
					(null === (i = null == this ? void 0 : this.input) || void 0 === i
						? void 0
						: i.ariaExpanded) && (this.input.ariaExpanded = 'false'),
					(null === (s = null == this ? void 0 : this.toggle) || void 0 === s
						? void 0
						: s.ariaExpanded) && (this.toggle.ariaExpanded = 'false'),
					this.el.classList.remove('active'),
					this.preventAutoPosition ||
						(this.output.classList.remove('bottom-full', 'top-full'),
						(this.output.style.marginTop = ''),
						(this.output.style.marginBottom = '')),
					(0, o.yd)(this.output, () => {
						(this.output.style.display = 'none'),
							this.setValueAndClear(t, e || null),
							(this.animationInProcess = !1);
					}),
					'' !== this.input.value
						? this.el.classList.add('has-value')
						: this.el.classList.remove('has-value'),
					void (this.isOpened = !1)))
		);
	}
	recalculateDirection() {
		(0, o.PR)(this.output, this.input, 'bottom', this.gap, this.viewport)
			? (this.output.classList.remove('bottom-full'),
				(this.output.style.marginBottom = ''),
				this.output.classList.add('top-full'),
				(this.output.style.marginTop = `${this.gap}px`))
			: (this.output.classList.remove('top-full'),
				(this.output.style.marginTop = ''),
				this.output.classList.add('bottom-full'),
				(this.output.style.marginBottom = `${this.gap}px`));
	}
	destroy() {
		this.input.removeEventListener('focus', this.onInputFocusListener),
			this.input.removeEventListener('input', this.onInputInputListener),
			this.toggle.removeEventListener('click', this.onToggleClickListener),
			this.toggleClose &&
				this.toggleClose.removeEventListener(
					'click',
					this.onToggleCloseClickListener,
				),
			this.toggleOpen &&
				this.toggleOpen.removeEventListener(
					'click',
					this.onToggleOpenClickListener,
				),
			this.el.classList.remove('has-value', 'active'),
			this.items.length &&
				this.items.forEach((t) => {
					t.classList.remove('selected'), (t.style.display = '');
				}),
			this.output.removeAttribute('role'),
			this.output.removeAttribute('tabindex'),
			this.output.removeAttribute('aria-orientation'),
			this.outputLoader &&
				(this.outputLoader.remove(), (this.outputLoader = null)),
			this.outputPlaceholder &&
				(this.outputPlaceholder.remove(), (this.outputPlaceholder = null)),
			this.apiUrl && (this.output.innerHTML = ''),
			(this.items = []),
			(window.$hsComboBoxCollection = window.$hsComboBoxCollection.filter(
				({ element: t }) => t.el !== this.el,
			));
	}
	static getInstance(t, e) {
		const i = window.$hsComboBoxCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		return i ? (e ? i : i.element) : null;
	}
	static autoInit() {
		window.$hsComboBoxCollection ||
			((window.$hsComboBoxCollection = []),
			window.addEventListener('click', (t) => {
				const e = t.target;
				r.closeCurrentlyOpened(e);
			}),
			document.addEventListener('keydown', (t) => r.accessibility(t))),
			window.$hsComboBoxCollection &&
				(window.$hsComboBoxCollection = window.$hsComboBoxCollection.filter(
					({ element: t }) => document.contains(t.el),
				)),
			document
				.querySelectorAll('[data-hs-combo-box]:not(.--prevent-on-load-init)')
				.forEach((t) => {
					if (
						!window.$hsComboBoxCollection.find((e) => {
							var i;
							return (
								(null === (i = null == e ? void 0 : e.element) || void 0 === i
									? void 0
									: i.el) === t
							);
						})
					) {
						const e = t.getAttribute('data-hs-combo-box'),
							i = e ? JSON.parse(e) : {};
						new r(t, i);
					}
				});
	}
	static close(t) {
		const e = window.$hsComboBoxCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		e && e.element.isOpened && e.element.close();
	}
	static closeCurrentlyOpened(t = null) {
		if (!t.closest('[data-hs-combo-box].active')) {
			const t =
				window.$hsComboBoxCollection.filter((t) => t.element.isOpened) || null;
			t &&
				t.forEach((t) => {
					t.element.close();
				});
		}
	}
	static getPreparedItems(t = !1, e) {
		if (!e) return null;
		return (
			t
				? Array.from(
						e.querySelectorAll(':scope > *:not(.--exclude-accessibility)'),
					)
						.filter((t) => 'none' !== t.style.display)
						.reverse()
				: Array.from(
						e.querySelectorAll(':scope > *:not(.--exclude-accessibility)'),
					).filter((t) => 'none' !== t.style.display)
		).filter((t) => !t.classList.contains('disabled'));
	}
	static setHighlighted(t, e, i) {
		e.focus(),
			(i.value = e
				.querySelector('[data-hs-combo-box-value]')
				.getAttribute('data-hs-combo-box-search-text')),
			t && t.classList.remove('hs-combo-box-output-item-highlighted'),
			e.classList.add('hs-combo-box-output-item-highlighted');
	}
	static accessibility(t) {
		if (
			window.$hsComboBoxCollection.find((t) =>
				t.element.preventVisibility ? t.element.isCurrent : t.element.isOpened,
			) &&
			n.jU.includes(t.code) &&
			!t.metaKey
		)
			switch (t.code) {
				case 'Escape':
					t.preventDefault(), this.onEscape();
					break;
				case 'ArrowUp':
					t.preventDefault(), t.stopImmediatePropagation(), this.onArrow();
					break;
				case 'ArrowDown':
					t.preventDefault(), t.stopImmediatePropagation(), this.onArrow(!1);
					break;
				case 'Home':
					t.preventDefault(), t.stopImmediatePropagation(), this.onStartEnd();
					break;
				case 'End':
					t.preventDefault(), t.stopImmediatePropagation(), this.onStartEnd(!1);
					break;
				case 'Enter':
					t.preventDefault(), this.onEnter(t);
			}
	}
	static onEscape() {
		const t = window.$hsComboBoxCollection.find(
			(t) => !t.element.preventVisibility && t.element.isOpened,
		);
		t && (t.element.close(), t.element.input.blur());
	}
	static onArrow(t = !0) {
		var e;
		const i = window.$hsComboBoxCollection.find((t) =>
			t.element.preventVisibility ? t.element.isCurrent : t.element.isOpened,
		);
		if (i) {
			const s =
				null !== (e = i.element.itemsWrapper) && void 0 !== e
					? e
					: i.element.output;
			if (!s) return !1;
			const o = r.getPreparedItems(t, s),
				l = s.querySelector('.hs-combo-box-output-item-highlighted');
			let n = null;
			l || o[0].classList.add('hs-combo-box-output-item-highlighted');
			let a = o.findIndex((t) => t === l);
			a + 1 < o.length && a++,
				(n = o[a]),
				r.setHighlighted(l, n, i.element.input);
		}
	}
	static onStartEnd(t = !0) {
		var e;
		const i = window.$hsComboBoxCollection.find((t) =>
			t.element.preventVisibility ? t.element.isCurrent : t.element.isOpened,
		);
		if (i) {
			const s =
				null !== (e = i.element.itemsWrapper) && void 0 !== e
					? e
					: i.element.output;
			if (!s) return !1;
			const o = r.getPreparedItems(t, s),
				l = s.querySelector('.hs-combo-box-output-item-highlighted');
			o.length && r.setHighlighted(l, o[0], i.element.input);
		}
	}
	static onEnter(t) {
		var e;
		const i = t.target,
			s = window.$hsComboBoxCollection.find(
				(e) =>
					!(0, o.sH)(e.element.el) &&
					t.target.closest('[data-hs-combo-box]') === e.element.el,
			),
			l = s.element.el.querySelector('.hs-combo-box-output-item-highlighted a');
		i.hasAttribute('data-hs-combo-box-input')
			? (s.element.close(), i.blur())
			: (s.element.preventSelection ||
					s.element.setSelectedByValue(s.element.valuesBySelector(t.target)),
				s.element.preventSelection &&
					l &&
					window.location.assign(l.getAttribute('href')),
				s.element.close(
					s.element.preventSelection
						? null
						: t.target
								.querySelector('[data-hs-combo-box-value]')
								.getAttribute('data-hs-combo-box-search-text'),
					null !==
						(e = JSON.parse(
							t.target.getAttribute('data-hs-combo-box-item-stored-data'),
						)) && void 0 !== e
						? e
						: null,
				));
	}
}
window.addEventListener('load', () => {
	r.autoInit();
}),
	document.addEventListener('scroll', () => {
		if (!window.$hsComboBoxCollection) return !1;
		const t = window.$hsComboBoxCollection.find((t) => t.element.isOpened);
		t && !t.element.preventAutoPosition && t.element.recalculateDirection();
	}),
	'undefined' != typeof window && (window.HSComboBox = r);
const u = r;
var h = s.A;
export { h as default };
