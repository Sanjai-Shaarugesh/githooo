var t = {
		189: (t, e, s) => {
			s.d(e, { fp: () => o, lP: () => i });
			const i = {
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
				},
				o = [
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
				];
		},
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
			s.d(e, {
				JD: () => l,
				PR: () => i,
				en: () => r,
				fc: () => a,
				sg: () => o,
				yd: () => n,
			});
			const i = (t, e, s = 'auto', i = 10, o = null) => {
					const l = e.getBoundingClientRect(),
						n = o ? o.getBoundingClientRect() : null,
						a = window.innerHeight,
						r = n ? l.top - n.top : l.top,
						d = (o ? n.bottom : a) - l.bottom,
						h = t.clientHeight + i;
					return 'bottom' === s
						? d >= h
						: 'top' === s
							? r >= h
							: r >= h || d >= h;
				},
				o = (t, e = 200) => {
					let s;
					return (...i) => {
						clearTimeout(s),
							(s = setTimeout(() => {
								t.apply(void 0, i);
							}, e));
					};
				},
				l = (t, e, s = null) => {
					const i = new CustomEvent(t, {
						detail: { payload: s },
						bubbles: !0,
						cancelable: !0,
						composed: !1,
					});
					e.dispatchEvent(i);
				},
				n = (t, e) => {
					const s = () => {
							e(), t.removeEventListener('transitionend', s, !0);
						},
						i = window.getComputedStyle(t),
						o = i.getPropertyValue('transition-duration');
					'none' !== i.getPropertyValue('transition-property') &&
					parseFloat(o) > 0
						? t.addEventListener('transitionend', s, !0)
						: e();
				},
				a = (t) => {
					const e = document.createElement('template');
					return (t = t.trim()), (e.innerHTML = t), e.content.firstChild;
				},
				r = (t, e, s = ' ', i = 'add') => {
					t.split(s).forEach((t) =>
						'add' === i ? e.classList.add(t) : e.classList.remove(t),
					);
				};
		},
	},
	e = {};
function s(i) {
	var o = e[i];
	if (void 0 !== o) return o.exports;
	var l = (e[i] = { exports: {} });
	return t[i](l, l.exports, s), l.exports;
}
(s.d = (t, e) => {
	for (var i in e)
		s.o(e, i) &&
			!s.o(t, i) &&
			Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
}),
	(s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e));
var i = {};
s.d(i, { A: () => d });
var o = s(926),
	l = s(615),
	n = s(189),
	a = function (t, e, s, i) {
		return new (s || (s = Promise))(function (o, l) {
			function n(t) {
				try {
					r(i.next(t));
				} catch (t) {
					l(t);
				}
			}
			function a(t) {
				try {
					r(i.throw(t));
				} catch (t) {
					l(t);
				}
			}
			function r(t) {
				var e;
				t.done
					? o(t.value)
					: ((e = t.value),
						e instanceof s
							? e
							: new s(function (t) {
									t(e);
								})).then(n, a);
			}
			r((i = i.apply(t, e || [])).next());
		});
	};
class r extends l.A {
	constructor(t, e) {
		var s, i, o;
		super(t, e), (this.optionId = 0);
		const l = t.getAttribute('data-hs-select'),
			n = l ? JSON.parse(l) : {},
			a = Object.assign(Object.assign({}, n), e);
		(this.value = (null == a ? void 0 : a.value) || this.el.value || null),
			(this.placeholder = (null == a ? void 0 : a.placeholder) || 'Select...'),
			(this.hasSearch = (null == a ? void 0 : a.hasSearch) || !1),
			(this.preventSearchFocus =
				(null == a ? void 0 : a.preventSearchFocus) || !1),
			(this.mode = (null == a ? void 0 : a.mode) || 'default'),
			(this.viewport =
				void 0 !== (null == a ? void 0 : a.viewport)
					? document.querySelector(null == a ? void 0 : a.viewport)
					: null),
			(this.isOpened = Boolean(null == a ? void 0 : a.isOpened) || !1),
			(this.isMultiple = this.el.hasAttribute('multiple') || !1),
			(this.isDisabled = this.el.hasAttribute('disabled') || !1),
			(this.selectedItems = []),
			(this.apiUrl = (null == a ? void 0 : a.apiUrl) || null),
			(this.apiQuery = (null == a ? void 0 : a.apiQuery) || null),
			(this.apiOptions = (null == a ? void 0 : a.apiOptions) || null),
			(this.apiSearchQueryKey =
				(null == a ? void 0 : a.apiSearchQueryKey) || null),
			(this.apiDataPart = (null == a ? void 0 : a.apiDataPart) || null),
			(this.apiFieldsMap = (null == a ? void 0 : a.apiFieldsMap) || null),
			(this.apiIconTag = (null == a ? void 0 : a.apiIconTag) || null),
			(this.wrapperClasses = (null == a ? void 0 : a.wrapperClasses) || null),
			(this.toggleTag = (null == a ? void 0 : a.toggleTag) || null),
			(this.toggleClasses = (null == a ? void 0 : a.toggleClasses) || null),
			(this.toggleCountText =
				void 0 === typeof (null == a ? void 0 : a.toggleCountText)
					? null
					: a.toggleCountText),
			(this.toggleCountTextPlacement =
				(null == a ? void 0 : a.toggleCountTextPlacement) || 'postfix'),
			(this.toggleCountTextMinItems =
				(null == a ? void 0 : a.toggleCountTextMinItems) || 1),
			(this.toggleCountTextMode =
				(null == a ? void 0 : a.toggleCountTextMode) || 'countAfterLimit'),
			(this.toggleSeparators = {
				items:
					(null === (s = null == a ? void 0 : a.toggleSeparators) ||
					void 0 === s
						? void 0
						: s.items) || ', ',
				betweenItemsAndCounter:
					(null === (i = null == a ? void 0 : a.toggleSeparators) ||
					void 0 === i
						? void 0
						: i.betweenItemsAndCounter) || 'and',
			}),
			(this.tagsItemTemplate =
				(null == a ? void 0 : a.tagsItemTemplate) || null),
			(this.tagsItemClasses = (null == a ? void 0 : a.tagsItemClasses) || null),
			(this.tagsInputId = (null == a ? void 0 : a.tagsInputId) || null),
			(this.tagsInputClasses =
				(null == a ? void 0 : a.tagsInputClasses) || null),
			(this.dropdownTag = (null == a ? void 0 : a.dropdownTag) || null),
			(this.dropdownClasses = (null == a ? void 0 : a.dropdownClasses) || null),
			(this.dropdownDirectionClasses =
				(null == a ? void 0 : a.dropdownDirectionClasses) || null),
			(this.dropdownSpace = (null == a ? void 0 : a.dropdownSpace) || 10),
			(this.dropdownPlacement =
				(null == a ? void 0 : a.dropdownPlacement) || null),
			(this.dropdownVerticalFixedPlacement =
				(null == a ? void 0 : a.dropdownVerticalFixedPlacement) || null),
			(this.dropdownScope = (null == a ? void 0 : a.dropdownScope) || 'parent'),
			(this.searchTemplate = (null == a ? void 0 : a.searchTemplate) || null),
			(this.searchWrapperTemplate =
				(null == a ? void 0 : a.searchWrapperTemplate) || null),
			(this.searchWrapperClasses =
				(null == a ? void 0 : a.searchWrapperClasses) ||
				'bg-white p-2 sticky top-0'),
			(this.searchId = (null == a ? void 0 : a.searchId) || null),
			(this.searchLimit = (null == a ? void 0 : a.searchLimit) || 1 / 0),
			(this.isSearchDirectMatch =
				void 0 === (null == a ? void 0 : a.isSearchDirectMatch) ||
				(null == a ? void 0 : a.isSearchDirectMatch)),
			(this.searchClasses =
				(null == a ? void 0 : a.searchClasses) ||
				'block w-[calc(100%-2rem)] text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 py-2 px-3 my-2 mx-4'),
			(this.searchPlaceholder =
				(null == a ? void 0 : a.searchPlaceholder) || 'Search...'),
			(this.searchNoResultTemplate =
				(null == a ? void 0 : a.searchNoResultTemplate) || '<span></span>'),
			(this.searchNoResultText =
				(null == a ? void 0 : a.searchNoResultText) || 'No results found'),
			(this.searchNoResultClasses =
				(null == a ? void 0 : a.searchNoResultClasses) ||
				'px-4 text-sm text-gray-800 dark:text-neutral-200'),
			(this.optionTemplate = (null == a ? void 0 : a.optionTemplate) || null),
			(this.optionTag = (null == a ? void 0 : a.optionTag) || null),
			(this.optionClasses = (null == a ? void 0 : a.optionClasses) || null),
			(this.extraMarkup = (null == a ? void 0 : a.extraMarkup) || null),
			(this.descriptionClasses =
				(null == a ? void 0 : a.descriptionClasses) || null),
			(this.iconClasses = (null == a ? void 0 : a.iconClasses) || null),
			(this.isAddTagOnEnter =
				null === (o = null == a ? void 0 : a.isAddTagOnEnter) ||
				void 0 === o ||
				o),
			(this.animationInProcess = !1),
			(this.selectOptions = []),
			(this.remoteOptions = []),
			(this.tagsInputHelper = null),
			this.init();
	}
	wrapperClick(t) {
		t.target.closest('[data-hs-select-dropdown]') ||
			t.target.closest('[data-tag-value]') ||
			this.tagsInput.focus();
	}
	toggleClick() {
		if (this.isDisabled) return !1;
		this.toggleFn();
	}
	tagsInputFocus() {
		this.isOpened || this.open();
	}
	tagsInputInput() {
		this.calculateInputWidth();
	}
	tagsInputInputSecond(t) {
		this.searchOptions(t.target.value);
	}
	tagsInputKeydown(t) {
		if ('Enter' === t.key && this.isAddTagOnEnter) {
			const e = t.target.value;
			if (this.selectOptions.find((t) => t.val === e)) return !1;
			this.addSelectOption(e, e),
				this.buildOption(e, e),
				this.dropdown.querySelector(`[data-value="${e}"]`).click(),
				this.resetTagsInputField();
		}
	}
	searchInput(t) {
		this.apiUrl
			? this.remoteSearch(t.target.value)
			: this.searchOptions(t.target.value);
	}
	setValue(t) {
		(this.value = t),
			this.clearSelections(),
			Array.isArray(t)
				? ((this.toggleTextWrapper.innerHTML = this.value.length
						? this.stringFromValue()
						: this.placeholder),
					this.unselectMultipleItems(),
					this.selectMultipleItems())
				: (this.setToggleTitle(),
					this.toggle.querySelector('[data-icon]') && this.setToggleIcon(),
					this.toggle.querySelector('[data-title]') && this.setToggleTitle(),
					this.selectSingleItem());
	}
	init() {
		this.createCollection(window.$hsSelectCollection, this), this.build();
	}
	build() {
		if (
			((this.el.style.display = 'none'),
			this.el.children &&
				Array.from(this.el.children)
					.filter((t) => t.value && '' !== t.value)
					.forEach((t) => {
						const e = t.getAttribute('data-hs-select-option');
						this.selectOptions = [
							...this.selectOptions,
							{
								title: t.textContent,
								val: t.value,
								disabled: t.disabled,
								options: 'undefined' !== e ? JSON.parse(e) : null,
							},
						];
					}),
			this.isMultiple)
		) {
			const t = Array.from(this.el.children).filter((t) => t.selected);
			if (t) {
				const e = [];
				t.forEach((t) => {
					e.push(t.value);
				}),
					(this.value = e);
			}
		}
		this.buildWrapper(),
			'tags' === this.mode ? this.buildTags() : this.buildToggle(),
			this.buildDropdown(),
			this.extraMarkup && this.buildExtraMarkup();
	}
	buildWrapper() {
		(this.wrapper = document.createElement('div')),
			this.wrapper.classList.add('hs-select', 'relative'),
			'tags' === this.mode &&
				((this.onWrapperClickListener = (t) => this.wrapperClick(t)),
				this.wrapper.addEventListener('click', this.onWrapperClickListener)),
			this.wrapperClasses && (0, o.en)(this.wrapperClasses, this.wrapper),
			this.el.before(this.wrapper),
			this.wrapper.append(this.el);
	}
	buildExtraMarkup() {
		const t = (t) => {
				const e = (0, o.fc)(t);
				return this.wrapper.append(e), e;
			},
			e = (t) => {
				t.classList.contains('--prevent-click') ||
					t.addEventListener('click', (t) => {
						t.stopPropagation(), this.toggleFn();
					});
			};
		if (Array.isArray(this.extraMarkup))
			this.extraMarkup.forEach((s) => {
				const i = t(s);
				e(i);
			});
		else {
			const s = t(this.extraMarkup);
			e(s);
		}
	}
	buildToggle() {
		var t, e;
		let s, i;
		(this.toggleTextWrapper = document.createElement('span')),
			this.toggleTextWrapper.classList.add('truncate'),
			(this.toggle = (0, o.fc)(this.toggleTag || '<div></div>')),
			(s = this.toggle.querySelector('[data-icon]')),
			(i = this.toggle.querySelector('[data-title]')),
			!this.isMultiple && s && this.setToggleIcon(),
			!this.isMultiple && i && this.setToggleTitle(),
			this.isMultiple
				? (this.toggleTextWrapper.innerHTML = this.value.length
						? this.stringFromValue()
						: this.placeholder)
				: (this.toggleTextWrapper.innerHTML =
						(null === (t = this.getItemByValue(this.value)) || void 0 === t
							? void 0
							: t.title) || this.placeholder),
			i || this.toggle.append(this.toggleTextWrapper),
			this.toggleClasses && (0, o.en)(this.toggleClasses, this.toggle),
			this.isDisabled && this.toggle.classList.add('disabled'),
			this.wrapper && this.wrapper.append(this.toggle),
			(null === (e = this.toggle) || void 0 === e ? void 0 : e.ariaExpanded) &&
				(this.isOpened
					? (this.toggle.ariaExpanded = 'true')
					: (this.toggle.ariaExpanded = 'false')),
			(this.onToggleClickListener = () => this.toggleClick()),
			this.toggle.addEventListener('click', this.onToggleClickListener);
	}
	setToggleIcon() {
		var t;
		const e = this.getItemByValue(this.value),
			s = this.toggle.querySelector('[data-icon]');
		if (s) {
			s.innerHTML = '';
			const i = (0, o.fc)(
				this.apiUrl && this.apiIconTag
					? this.apiIconTag || ''
					: (null === (t = null == e ? void 0 : e.options) || void 0 === t
							? void 0
							: t.icon) || '',
			);
			this.value &&
				this.apiUrl &&
				this.apiIconTag &&
				e[this.apiFieldsMap.icon] &&
				(i.src = e[this.apiFieldsMap.icon] || ''),
				s.append(i),
				i ? s.classList.remove('hidden') : s.classList.add('hidden');
		}
	}
	setToggleTitle() {
		var t;
		const e = this.toggle.querySelector('[data-title]');
		e &&
			((e.innerHTML =
				(null === (t = this.getItemByValue(this.value)) || void 0 === t
					? void 0
					: t.title) || this.placeholder),
			e.classList.add('truncate'),
			this.toggle.append(e));
	}
	buildTags() {
		this.isDisabled && this.wrapper.classList.add('disabled'),
			this.buildTagsInput(),
			this.setTagsItems();
	}
	reassignTagsInputPlaceholder(t) {
		(this.tagsInput.placeholder = t),
			(this.tagsInputHelper.innerHTML = t),
			this.calculateInputWidth();
	}
	buildTagsItem(t) {
		var e, s, i, l;
		const n = this.getItemByValue(t);
		let a, r, d, h;
		const p = document.createElement('div');
		if (
			(p.setAttribute('data-tag-value', t),
			this.tagsItemClasses && (0, o.en)(this.tagsItemClasses, p),
			this.tagsItemTemplate &&
				((a = (0, o.fc)(this.tagsItemTemplate)), p.append(a)),
			(null === (e = null == n ? void 0 : n.options) || void 0 === e
				? void 0
				: e.icon) || this.apiIconTag)
		) {
			const t = (0, o.fc)(
				this.apiUrl && this.apiIconTag
					? this.apiIconTag
					: null === (s = null == n ? void 0 : n.options) || void 0 === s
						? void 0
						: s.icon,
			);
			this.apiUrl &&
				this.apiIconTag &&
				n[this.apiFieldsMap.icon] &&
				(t.src = n[this.apiFieldsMap.icon] || ''),
				(h = a
					? a.querySelector('[data-icon]')
					: document.createElement('span')),
				h.append(t),
				a || p.append(h);
		}
		!a ||
			!a.querySelector('[data-icon]') ||
			(null === (i = null == n ? void 0 : n.options) || void 0 === i
				? void 0
				: i.icon) ||
			this.apiUrl ||
			this.apiIconTag ||
			n[null === (l = this.apiFieldsMap) || void 0 === l ? void 0 : l.icon] ||
			a.querySelector('[data-icon]').classList.add('hidden'),
			(r = a
				? a.querySelector('[data-title]')
				: document.createElement('span')),
			(r.textContent = n.title || ''),
			a || p.append(r),
			a
				? (d = a.querySelector('[data-remove]'))
				: ((d = document.createElement('span')),
					(d.textContent = 'X'),
					p.append(d)),
			d.addEventListener('click', () => {
				(this.value = this.value.filter((e) => e !== t)),
					(this.selectedItems = this.selectedItems.filter((e) => e !== t)),
					this.value.length ||
						this.reassignTagsInputPlaceholder(this.placeholder),
					this.unselectMultipleItems(),
					this.selectMultipleItems(),
					p.remove(),
					this.triggerChangeEventForNativeSelect();
			}),
			this.wrapper.append(p);
	}
	getItemByValue(t) {
		return this.apiUrl
			? this.remoteOptions.find(
					(e) =>
						`${e[this.apiFieldsMap.val]}` === t ||
						e[this.apiFieldsMap.title] === t,
				)
			: this.selectOptions.find((e) => e.val === t);
	}
	setTagsItems() {
		this.value &&
			this.value.forEach((t) => {
				this.selectedItems.includes(t) || this.buildTagsItem(t),
					(this.selectedItems = this.selectedItems.includes(t)
						? this.selectedItems
						: [...this.selectedItems, t]);
			});
	}
	buildTagsInput() {
		(this.tagsInput = document.createElement('input')),
			this.tagsInputId && (this.tagsInput.id = this.tagsInputId),
			this.tagsInputClasses && (0, o.en)(this.tagsInputClasses, this.tagsInput),
			(this.onTagsInputFocusListener = () => this.tagsInputFocus()),
			(this.onTagsInputInputListener = () => this.tagsInputInput()),
			(this.onTagsInputInputSecondListener = (0, o.sg)((t) =>
				this.tagsInputInputSecond(t),
			)),
			(this.onTagsInputKeydownListener = (t) => this.tagsInputKeydown(t)),
			this.tagsInput.addEventListener('focus', this.onTagsInputFocusListener),
			this.tagsInput.addEventListener('input', this.onTagsInputInputListener),
			this.tagsInput.addEventListener(
				'input',
				this.onTagsInputInputSecondListener,
			),
			this.tagsInput.addEventListener(
				'keydown',
				this.onTagsInputKeydownListener,
			),
			this.wrapper.append(this.tagsInput),
			setTimeout(() => {
				this.adjustInputWidth(),
					this.reassignTagsInputPlaceholder(
						this.value.length ? '' : this.placeholder,
					);
			});
	}
	buildDropdown() {
		(this.dropdown = (0, o.fc)(this.dropdownTag || '<div></div>')),
			this.dropdown.setAttribute('data-hs-select-dropdown', ''),
			'parent' === this.dropdownScope &&
				(this.dropdown.classList.add('absolute'),
				this.dropdownVerticalFixedPlacement ||
					this.dropdown.classList.add('top-full')),
			(this.dropdown.role = 'listbox'),
			(this.dropdown.tabIndex = -1),
			(this.dropdown.ariaOrientation = 'vertical'),
			this.isOpened || this.dropdown.classList.add('hidden'),
			this.dropdownClasses && (0, o.en)(this.dropdownClasses, this.dropdown),
			this.wrapper && this.wrapper.append(this.dropdown),
			this.dropdown && this.hasSearch && this.buildSearch(),
			this.selectOptions &&
				this.selectOptions.forEach((t, e) =>
					this.buildOption(
						t.title,
						t.val,
						t.disabled,
						t.selected,
						t.options,
						`${e}`,
					),
				),
			this.apiUrl && this.optionsFromRemoteData(),
			'window' === this.dropdownScope && this.buildPopper();
	}
	buildPopper() {
		'undefined' != typeof Popper &&
			Popper.createPopper &&
			(document.body.appendChild(this.dropdown),
			(this.popperInstance = Popper.createPopper(
				'tags' === this.mode ? this.wrapper : this.toggle,
				this.dropdown,
				{
					placement: n.lP[this.dropdownPlacement] || 'bottom',
					strategy: 'fixed',
					modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
				},
			)));
	}
	updateDropdownWidth() {
		const t = 'tags' === this.mode ? this.wrapper : this.toggle;
		this.dropdown.style.width = `${t.clientWidth}px`;
	}
	buildSearch() {
		let t;
		(this.searchWrapper = (0, o.fc)(
			this.searchWrapperTemplate || '<div></div>',
		)),
			this.searchWrapperClasses &&
				(0, o.en)(this.searchWrapperClasses, this.searchWrapper),
			(t = this.searchWrapper.querySelector('[data-input]'));
		const e = (0, o.fc)(this.searchTemplate || '<input type="text" />');
		(this.search = 'INPUT' === e.tagName ? e : e.querySelector(':scope input')),
			(this.search.placeholder = this.searchPlaceholder),
			this.searchClasses && (0, o.en)(this.searchClasses, this.search),
			this.searchId && (this.search.id = this.searchId),
			(this.onSearchInputListener = (0, o.sg)((t) => this.searchInput(t))),
			this.search.addEventListener('input', this.onSearchInputListener),
			t ? t.append(e) : this.searchWrapper.append(e),
			this.dropdown.append(this.searchWrapper);
	}
	buildOption(t, e, s = !1, i = !1, l, n = '1', a) {
		var r;
		let d = null,
			h = null,
			p = null,
			c = null;
		const u = (0, o.fc)(this.optionTag || '<div></div>');
		if (
			(u.setAttribute('data-value', e),
			u.setAttribute('data-title-value', t),
			u.setAttribute('tabIndex', n),
			u.classList.add('cursor-pointer'),
			u.setAttribute('data-id', a || `${this.optionId}`),
			a || this.optionId++,
			s && u.classList.add('disabled'),
			i &&
				(this.isMultiple
					? (this.value = [...this.value, e])
					: (this.value = e)),
			this.optionTemplate &&
				((d = (0, o.fc)(this.optionTemplate)), u.append(d)),
			d
				? ((h = d.querySelector('[data-title]')), (h.textContent = t || ''))
				: (u.textContent = t || ''),
			l)
		) {
			if (l.icon) {
				const e = (0, o.fc)(
					null !== (r = this.apiIconTag) && void 0 !== r ? r : l.icon,
				);
				if (
					(e.classList.add('max-w-full'),
					this.apiUrl &&
						(e.setAttribute('alt', t), e.setAttribute('src', l.icon)),
					d)
				)
					(p = d.querySelector('[data-icon]')), p.append(e);
				else {
					const t = (0, o.fc)('<div></div>');
					this.iconClasses && (0, o.en)(this.iconClasses, t),
						t.append(e),
						u.append(t);
				}
			}
			if (l.description)
				if (d)
					(c = d.querySelector('[data-description]')),
						c && c.append(l.description);
				else {
					const t = (0, o.fc)('<div></div>');
					(t.textContent = l.description),
						this.descriptionClasses && (0, o.en)(this.descriptionClasses, t),
						u.append(t);
				}
		}
		d &&
			d.querySelector('[data-icon]') &&
			!l &&
			!(null == l ? void 0 : l.icon) &&
			d.querySelector('[data-icon]').classList.add('hidden'),
			this.value &&
				(this.isMultiple ? this.value.includes(e) : this.value === e) &&
				u.classList.add('selected'),
			s || u.addEventListener('click', () => this.onSelectOption(e)),
			this.optionClasses && (0, o.en)(this.optionClasses, u),
			this.dropdown && this.dropdown.append(u),
			i && this.setNewValue();
	}
	buildOptionFromRemoteData(t, e, s = !1, i = !1, o = '1', l, n) {
		o
			? this.buildOption(t, e, s, i, n, o, l)
			: alert(
					'ID parameter is required for generating remote options! Please check your API endpoint have it.',
				);
	}
	buildOptionsFromRemoteData(t) {
		t.forEach((t, e) => {
			let s = null,
				i = '',
				o = '';
			const l = {
				id: '',
				val: '',
				title: '',
				icon: null,
				description: null,
				rest: {},
			};
			Object.keys(t).forEach((e) => {
				var n;
				t[this.apiFieldsMap.id] && (s = t[this.apiFieldsMap.id]),
					(t[this.apiFieldsMap.val] || t[this.apiFieldsMap.title]) &&
						(o = t[this.apiFieldsMap.val] || t[this.apiFieldsMap.title]),
					t[this.apiFieldsMap.title] && (i = t[this.apiFieldsMap.title]),
					t[this.apiFieldsMap.icon] && (l.icon = t[this.apiFieldsMap.icon]),
					t[
						null === (n = this.apiFieldsMap) || void 0 === n
							? void 0
							: n.description
					] && (l.description = t[this.apiFieldsMap.description]),
					(l.rest[e] = t[e]);
			}),
				this.buildOriginalOption(i, `${o}`, s, !1, !1, l),
				this.buildOptionFromRemoteData(i, `${o}`, !1, !1, `${e}`, s, l);
		}),
			this.sortElements(this.el, 'option'),
			this.sortElements(this.dropdown, '[data-value]');
	}
	optionsFromRemoteData() {
		return a(this, arguments, void 0, function* (t = '') {
			const e = yield this.apiRequest(t);
			(this.remoteOptions = e),
				e.length
					? this.buildOptionsFromRemoteData(this.remoteOptions)
					: console.log('There is no data were responded!');
		});
	}
	apiRequest() {
		return a(this, arguments, void 0, function* (t = '') {
			try {
				let e = this.apiUrl;
				const s = this.apiSearchQueryKey
						? `${this.apiSearchQueryKey}=${t.toLowerCase()}`
						: null,
					i = `${this.apiQuery}`,
					o = this.apiOptions || {};
				s && (e += `?${s}`), this.apiQuery && (e += `${s ? '&' : '?'}${i}`);
				const l = yield fetch(e, o),
					n = yield l.json();
				return this.apiDataPart ? n[this.apiDataPart] : n;
			} catch (t) {
				console.error(t);
			}
		});
	}
	sortElements(t, e) {
		const s = Array.from(t.querySelectorAll(e));
		s.sort((t, e) => {
			const s = t.classList.contains('selected') || t.hasAttribute('selected'),
				i = e.classList.contains('selected') || e.hasAttribute('selected');
			return s && !i ? -1 : !s && i ? 1 : 0;
		}),
			s.forEach((e) => t.appendChild(e));
	}
	remoteSearch(t) {
		return a(this, void 0, void 0, function* () {
			const e = yield this.apiRequest(t);
			this.remoteOptions = e;
			let s = e.map((t) => `${t.id}`),
				i = null;
			const o = this.dropdown.querySelectorAll('[data-value]');
			this.el.querySelectorAll('[data-hs-select-option]').forEach((t) => {
				var e;
				const i = t.getAttribute('data-id');
				s.includes(i) ||
					(null === (e = this.value) || void 0 === e
						? void 0
						: e.includes(t.value)) ||
					this.destroyOriginalOption(t.value);
			}),
				o.forEach((t) => {
					var e;
					const i = t.getAttribute('data-id');
					s.includes(i) ||
					(null === (e = this.value) || void 0 === e
						? void 0
						: e.includes(t.getAttribute('data-value')))
						? (s = s.filter((t) => t !== i))
						: this.destroyOption(t.getAttribute('data-value'));
				}),
				(i = e.filter((t) => s.includes(`${t.id}`))),
				i.length
					? this.buildOptionsFromRemoteData(i)
					: console.log('There is no data were responded!');
		});
	}
	destroyOption(t) {
		const e = this.dropdown.querySelector(`[data-value="${t}"]`);
		if (!e) return !1;
		e.remove();
	}
	buildOriginalOption(t, e, s, i, l, n) {
		const a = (0, o.fc)('<option></option>');
		a.setAttribute('value', e),
			i && a.setAttribute('disabled', 'disabled'),
			l && a.setAttribute('selected', 'selected'),
			s && a.setAttribute('data-id', s),
			a.setAttribute('data-hs-select-option', JSON.stringify(n)),
			(a.innerText = t),
			this.el.append(a);
	}
	destroyOriginalOption(t) {
		const e = this.el.querySelector(`[value="${t}"]`);
		if (!e) return !1;
		e.remove();
	}
	buildTagsInputHelper() {
		(this.tagsInputHelper = document.createElement('span')),
			(this.tagsInputHelper.style.fontSize = window.getComputedStyle(
				this.tagsInput,
			).fontSize),
			(this.tagsInputHelper.style.fontFamily = window.getComputedStyle(
				this.tagsInput,
			).fontFamily),
			(this.tagsInputHelper.style.fontWeight = window.getComputedStyle(
				this.tagsInput,
			).fontWeight),
			(this.tagsInputHelper.style.letterSpacing = window.getComputedStyle(
				this.tagsInput,
			).letterSpacing),
			(this.tagsInputHelper.style.visibility = 'hidden'),
			(this.tagsInputHelper.style.whiteSpace = 'pre'),
			(this.tagsInputHelper.style.position = 'absolute'),
			this.wrapper.appendChild(this.tagsInputHelper);
	}
	calculateInputWidth() {
		this.tagsInputHelper.textContent =
			this.tagsInput.value || this.tagsInput.placeholder;
		const t =
				parseInt(window.getComputedStyle(this.tagsInput).paddingLeft) +
				parseInt(window.getComputedStyle(this.tagsInput).paddingRight),
			e =
				parseInt(window.getComputedStyle(this.tagsInput).borderLeftWidth) +
				parseInt(window.getComputedStyle(this.tagsInput).borderRightWidth),
			s = this.tagsInputHelper.offsetWidth + t + e,
			i =
				this.wrapper.offsetWidth -
				(parseInt(window.getComputedStyle(this.wrapper).paddingLeft) +
					parseInt(window.getComputedStyle(this.wrapper).paddingRight));
		this.tagsInput.style.width = `${Math.min(s, i) + 2}px`;
	}
	adjustInputWidth() {
		this.buildTagsInputHelper(), this.calculateInputWidth();
	}
	onSelectOption(t) {
		if (
			(this.clearSelections(),
			this.isMultiple
				? ((this.value = this.value.includes(t)
						? Array.from(this.value).filter((e) => e !== t)
						: [...Array.from(this.value), t]),
					this.selectMultipleItems(),
					this.setNewValue())
				: ((this.value = t), this.selectSingleItem(), this.setNewValue()),
			this.fireEvent('change', this.value),
			'tags' === this.mode)
		) {
			const t = this.selectedItems.filter((t) => !this.value.includes(t));
			t.length &&
				t.forEach((t) => {
					(this.selectedItems = this.selectedItems.filter((e) => e !== t)),
						this.wrapper.querySelector(`[data-tag-value="${t}"]`).remove();
				}),
				this.resetTagsInputField();
		}
		this.isMultiple ||
			(this.toggle.querySelector('[data-icon]') && this.setToggleIcon(),
			this.toggle.querySelector('[data-title]') && this.setToggleTitle(),
			this.close(!0)),
			this.value.length ||
				'tags' !== this.mode ||
				this.reassignTagsInputPlaceholder(this.placeholder),
			this.isOpened &&
				'tags' === this.mode &&
				this.tagsInput &&
				this.tagsInput.focus(),
			this.triggerChangeEventForNativeSelect();
	}
	triggerChangeEventForNativeSelect() {
		const t = new Event('change', { bubbles: !0 });
		this.el.dispatchEvent(t),
			(0, o.JD)('change.hs.select', this.el, this.value);
	}
	addSelectOption(t, e, s, i, o) {
		this.selectOptions = [
			...this.selectOptions,
			{ title: t, val: e, disabled: s, selected: i, options: o },
		];
	}
	removeSelectOption(t, e = !1) {
		if (!!!this.selectOptions.some((e) => e.val === t)) return !1;
		(this.selectOptions = this.selectOptions.filter((e) => e.val !== t)),
			(this.value = e ? this.value.filter((e) => e !== t) : t);
	}
	resetTagsInputField() {
		(this.tagsInput.value = ''),
			this.reassignTagsInputPlaceholder(''),
			this.searchOptions('');
	}
	clearSelections() {
		Array.from(this.dropdown.children).forEach((t) => {
			t.classList.contains('selected') && t.classList.remove('selected');
		}),
			Array.from(this.el.children).forEach((t) => {
				t.selected && (t.selected = !1);
			});
	}
	setNewValue() {
		var t;
		'tags' === this.mode
			? this.setTagsItems()
			: (null === (t = this.value) || void 0 === t ? void 0 : t.length)
				? (this.toggleTextWrapper.innerHTML = this.stringFromValue())
				: (this.toggleTextWrapper.innerHTML = this.placeholder);
	}
	stringFromValueBasic(t) {
		var e;
		const s = [];
		let i = '';
		if (
			(t.forEach((t) => {
				this.isMultiple
					? this.value.includes(t.val) && s.push(t.title)
					: this.value === t.val && s.push(t.title);
			}),
			void 0 !== this.toggleCountText &&
				null !== this.toggleCountText &&
				s.length >= this.toggleCountTextMinItems)
		)
			if ('nItemsAndCount' === this.toggleCountTextMode) {
				const t = s.slice(0, this.toggleCountTextMinItems - 1),
					o = [t.join(this.toggleSeparators.items)],
					l = '' + (s.length - t.length);
				if (
					((null === (e = null == this ? void 0 : this.toggleSeparators) ||
					void 0 === e
						? void 0
						: e.betweenItemsAndCounter) &&
						o.push(this.toggleSeparators.betweenItemsAndCounter),
					this.toggleCountText)
				)
					switch (this.toggleCountTextPlacement) {
						case 'postfix-no-space':
							o.push(`${l}${this.toggleCountText}`);
							break;
						case 'prefix-no-space':
							o.push(`${this.toggleCountText}${l}`);
							break;
						case 'prefix':
							o.push(`${this.toggleCountText} ${l}`);
							break;
						default:
							o.push(`${l} ${this.toggleCountText}`);
					}
				i = o.join(' ');
			} else i = `${s.length} ${this.toggleCountText}`;
		else i = s.join(this.toggleSeparators.items);
		return i;
	}
	stringFromValueRemoteData() {
		const t = this.dropdown.querySelectorAll('[data-title-value]'),
			e = [];
		let s = '';
		if (
			(t.forEach((t) => {
				const s = t.getAttribute('data-value'),
					i = t.getAttribute('data-title-value');
				this.isMultiple
					? this.value.includes(s) && e.push(i)
					: this.value === s && e.push(i);
			}),
			this.toggleCountText &&
				'' !== this.toggleCountText &&
				e.length >= this.toggleCountTextMinItems)
		)
			if ('nItemsAndCount' === this.toggleCountTextMode) {
				const t = e.slice(0, this.toggleCountTextMinItems - 1);
				s = `${t.join(this.toggleSeparators.items)} ${this.toggleSeparators.betweenItemsAndCounter} ${e.length - t.length} ${this.toggleCountText}`;
			} else s = `${e.length} ${this.toggleCountText}`;
		else s = e.join(this.toggleSeparators.items);
		return s;
	}
	stringFromValue() {
		return this.apiUrl
			? this.stringFromValueRemoteData()
			: this.stringFromValueBasic(this.selectOptions);
	}
	selectSingleItem() {
		Array.from(this.el.children).find((t) => this.value === t.value).selected =
			!0;
		const t = Array.from(this.dropdown.children).find(
			(t) => this.value === t.getAttribute('data-value'),
		);
		t && t.classList.add('selected');
	}
	selectMultipleItems() {
		Array.from(this.dropdown.children)
			.filter((t) => this.value.includes(t.getAttribute('data-value')))
			.forEach((t) => t.classList.add('selected')),
			Array.from(this.el.children)
				.filter((t) => this.value.includes(t.value))
				.forEach((t) => (t.selected = !0));
	}
	unselectMultipleItems() {
		Array.from(this.dropdown.children).forEach((t) =>
			t.classList.remove('selected'),
		),
			Array.from(this.el.children).forEach((t) => (t.selected = !1));
	}
	searchOptions(t) {
		this.searchNoResult &&
			(this.searchNoResult.remove(), (this.searchNoResult = null)),
			(this.searchNoResult = (0, o.fc)(this.searchNoResultTemplate)),
			(this.searchNoResult.innerText = this.searchNoResultText),
			(0, o.en)(this.searchNoResultClasses, this.searchNoResult);
		const e = this.dropdown.querySelectorAll('[data-value]');
		let s,
			i = !1;
		this.searchLimit && (s = 0),
			e.forEach((e) => {
				const o = e.getAttribute('data-title-value').toLocaleLowerCase(),
					l = t
						? t
								.split('')
								.map((t) => (t.match(/\w/) ? `${t}[\\W_]*` : '\\W*'))
								.join('')
						: '',
					n = new RegExp(l, 'i'),
					a = this.isSearchDirectMatch,
					r = o.trim();
				(
					t
						? a
							? !r.toLowerCase().includes(t.toLowerCase()) ||
								s >= this.searchLimit
							: !n.test(r) || s >= this.searchLimit
						: !n.test(r)
				)
					? e.classList.add('hidden')
					: (e.classList.remove('hidden'), (i = !0), this.searchLimit && s++);
			}),
			i || this.dropdown.append(this.searchNoResult);
	}
	eraseToggleIcon() {
		const t = this.toggle.querySelector('[data-icon]');
		t && ((t.innerHTML = null), t.classList.add('hidden'));
	}
	eraseToggleTitle() {
		const t = this.toggle.querySelector('[data-title]');
		t
			? (t.innerHTML = this.placeholder)
			: (this.toggleTextWrapper.innerHTML = this.placeholder);
	}
	toggleFn() {
		this.isOpened ? this.close() : this.open();
	}
	destroy() {
		this.wrapper &&
			this.wrapper.removeEventListener('click', this.onWrapperClickListener),
			this.toggle &&
				this.toggle.removeEventListener('click', this.onToggleClickListener),
			this.tagsInput &&
				(this.tagsInput.removeEventListener(
					'focus',
					this.onTagsInputFocusListener,
				),
				this.tagsInput.removeEventListener(
					'input',
					this.onTagsInputInputListener,
				),
				this.tagsInput.removeEventListener(
					'input',
					this.onTagsInputInputSecondListener,
				),
				this.tagsInput.removeEventListener(
					'keydown',
					this.onTagsInputKeydownListener,
				)),
			this.search &&
				this.search.removeEventListener('input', this.onSearchInputListener);
		const t = this.el.parentElement.parentElement;
		this.el.classList.remove('hidden'),
			(this.el.style.display = ''),
			t.prepend(this.el),
			t.querySelector('.hs-select').remove(),
			(this.wrapper = null);
	}
	open() {
		var t;
		const e =
			(null ===
				(t =
					null === window || void 0 === window
						? void 0
						: window.$hsSelectCollection) || void 0 === t
				? void 0
				: t.find((t) => t.element.isOpened)) || null;
		if ((e && e.element.close(), this.animationInProcess)) return !1;
		(this.animationInProcess = !0),
			'window' === this.dropdownScope &&
				this.dropdown.classList.add('invisible'),
			this.dropdown.classList.remove('hidden'),
			this.recalculateDirection(),
			setTimeout(() => {
				var t;
				(null === (t = null == this ? void 0 : this.toggle) || void 0 === t
					? void 0
					: t.ariaExpanded) && (this.toggle.ariaExpanded = 'true'),
					this.wrapper.classList.add('active'),
					this.dropdown.classList.add('opened'),
					this.dropdown.classList.contains('w-full') &&
						'window' === this.dropdownScope &&
						this.updateDropdownWidth(),
					this.popperInstance &&
						'window' === this.dropdownScope &&
						(this.popperInstance.update(),
						this.dropdown.classList.remove('invisible')),
					this.hasSearch && !this.preventSearchFocus && this.search.focus(),
					(this.animationInProcess = !1);
			}),
			(this.isOpened = !0);
	}
	close(t = !1) {
		var e, s, i, l;
		if (this.animationInProcess) return !1;
		(this.animationInProcess = !0),
			(null === (e = null == this ? void 0 : this.toggle) || void 0 === e
				? void 0
				: e.ariaExpanded) && (this.toggle.ariaExpanded = 'false'),
			this.wrapper.classList.remove('active'),
			this.dropdown.classList.remove('opened', 'bottom-full', 'top-full'),
			(null === (s = this.dropdownDirectionClasses) || void 0 === s
				? void 0
				: s.bottom) &&
				this.dropdown.classList.remove(this.dropdownDirectionClasses.bottom),
			(null === (i = this.dropdownDirectionClasses) || void 0 === i
				? void 0
				: i.top) &&
				this.dropdown.classList.remove(this.dropdownDirectionClasses.top),
			(this.dropdown.style.marginTop = ''),
			(this.dropdown.style.marginBottom = ''),
			(0, o.yd)(this.dropdown, () => {
				this.dropdown.classList.add('hidden'),
					this.hasSearch &&
						((this.search.value = ''),
						this.search.dispatchEvent(new Event('input', { bubbles: !0 })),
						this.search.blur()),
					t && this.toggle.focus(),
					(this.animationInProcess = !1);
			}),
			null ===
				(l = this.dropdown.querySelector('.hs-select-option-highlighted')) ||
				void 0 === l ||
				l.classList.remove('hs-select-option-highlighted'),
			(this.isOpened = !1);
	}
	addOption(t) {
		let e = `${this.selectOptions.length}`;
		const s = (t) => {
			const { title: s, val: i, disabled: o, selected: l, options: n } = t;
			!!this.selectOptions.some((t) => t.val === i) ||
				(this.addSelectOption(s, i, o, l, n),
				this.buildOption(s, i, o, l, n, e),
				this.buildOriginalOption(s, i, null, o, l, n),
				l && !this.isMultiple && this.onSelectOption(i));
		};
		Array.isArray(t)
			? t.forEach((t) => {
					s(t);
				})
			: s(t);
	}
	removeOption(t) {
		const e = (t, e = !1) => {
			!!this.selectOptions.some((e) => e.val === t) &&
				(this.removeSelectOption(t, e),
				this.destroyOption(t),
				this.destroyOriginalOption(t),
				this.value === t &&
					((this.value = null),
					this.eraseToggleTitle(),
					this.eraseToggleIcon()));
		};
		Array.isArray(t)
			? t.forEach((t) => {
					e(t, this.isMultiple);
				})
			: e(t, this.isMultiple),
			this.setNewValue();
	}
	recalculateDirection() {
		var t, e, s, i;
		if (
			(null == this ? void 0 : this.dropdownVerticalFixedPlacement) &&
			(this.dropdown.classList.contains('bottom-full') ||
				this.dropdown.classList.contains('top-full'))
		)
			return !1;
		'top' === (null == this ? void 0 : this.dropdownVerticalFixedPlacement)
			? (this.dropdown.classList.add('bottom-full'),
				(this.dropdown.style.marginBottom = `${this.dropdownSpace}px`))
			: 'bottom' ===
				  (null == this ? void 0 : this.dropdownVerticalFixedPlacement)
				? (this.dropdown.classList.add('top-full'),
					(this.dropdown.style.marginTop = `${this.dropdownSpace}px`))
				: (0, o.PR)(
							this.dropdown,
							this.toggle || this.tagsInput,
							'bottom',
							this.dropdownSpace,
							this.viewport,
					  )
					? (this.dropdown.classList.remove('bottom-full'),
						(null === (t = this.dropdownDirectionClasses) || void 0 === t
							? void 0
							: t.bottom) &&
							this.dropdown.classList.remove(
								this.dropdownDirectionClasses.bottom,
							),
						(this.dropdown.style.marginBottom = ''),
						this.dropdown.classList.add('top-full'),
						(null === (e = this.dropdownDirectionClasses) || void 0 === e
							? void 0
							: e.top) &&
							this.dropdown.classList.add(this.dropdownDirectionClasses.top),
						(this.dropdown.style.marginTop = `${this.dropdownSpace}px`))
					: (this.dropdown.classList.remove('top-full'),
						(null === (s = this.dropdownDirectionClasses) || void 0 === s
							? void 0
							: s.top) &&
							this.dropdown.classList.remove(this.dropdownDirectionClasses.top),
						(this.dropdown.style.marginTop = ''),
						this.dropdown.classList.add('bottom-full'),
						(null === (i = this.dropdownDirectionClasses) || void 0 === i
							? void 0
							: i.bottom) &&
							this.dropdown.classList.add(this.dropdownDirectionClasses.bottom),
						(this.dropdown.style.marginBottom = `${this.dropdownSpace}px`));
	}
	static getInstance(t, e) {
		const s = window.$hsSelectCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		return s ? (e ? s : s.element) : null;
	}
	static autoInit() {
		window.$hsSelectCollection ||
			((window.$hsSelectCollection = []),
			window.addEventListener('click', (t) => {
				const e = t.target;
				r.closeCurrentlyOpened(e);
			}),
			document.addEventListener('keydown', (t) => r.accessibility(t))),
			window.$hsSelectCollection &&
				(window.$hsSelectCollection = window.$hsSelectCollection.filter(
					({ element: t }) => document.contains(t.el),
				)),
			document
				.querySelectorAll('[data-hs-select]:not(.--prevent-on-load-init)')
				.forEach((t) => {
					if (
						!window.$hsSelectCollection.find((e) => {
							var s;
							return (
								(null === (s = null == e ? void 0 : e.element) || void 0 === s
									? void 0
									: s.el) === t
							);
						})
					) {
						const e = t.getAttribute('data-hs-select'),
							s = e ? JSON.parse(e) : {};
						new r(t, s);
					}
				});
	}
	static open(t) {
		const e = window.$hsSelectCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		e && !e.element.isOpened && e.element.open();
	}
	static close(t) {
		const e = window.$hsSelectCollection.find(
			(e) =>
				e.element.el === ('string' == typeof t ? document.querySelector(t) : t),
		);
		e && e.element.isOpened && e.element.close();
	}
	static closeCurrentlyOpened(t = null) {
		if (
			!t.closest('.hs-select.active') &&
			!t.closest('[data-hs-select-dropdown].opened')
		) {
			const t =
				window.$hsSelectCollection.filter((t) => t.element.isOpened) || null;
			t &&
				t.forEach((t) => {
					t.element.close();
				});
		}
	}
	static accessibility(t) {
		if (
			window.$hsSelectCollection.find((t) => t.element.isOpened) &&
			n.fp.includes(t.code) &&
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
				case 'Tab':
					t.preventDefault(),
						t.stopImmediatePropagation(),
						this.onTab(t.shiftKey);
					break;
				case 'Home':
					t.preventDefault(), t.stopImmediatePropagation(), this.onStartEnd();
					break;
				case 'End':
					t.preventDefault(), t.stopImmediatePropagation(), this.onStartEnd(!1);
					break;
				case 'Enter':
				case 'Space':
					t.preventDefault(), this.onEnter(t);
			}
	}
	static onEscape() {
		const t = window.$hsSelectCollection.find((t) => t.element.isOpened);
		t && t.element.close();
	}
	static onArrow(t = !0) {
		const e = window.$hsSelectCollection.find((t) => t.element.isOpened);
		if (e) {
			const s = e.element.dropdown;
			if (!s) return !1;
			const i = (
					t
						? Array.from(
								s.querySelectorAll(':scope > *:not(.hidden)'),
							).reverse()
						: Array.from(s.querySelectorAll(':scope > *:not(.hidden)'))
				).filter((t) => !t.classList.contains('disabled')),
				o =
					s.querySelector('.hs-select-option-highlighted') ||
					s.querySelector('.selected');
			o || i[0].classList.add('hs-select-option-highlighted');
			let l = i.findIndex((t) => t === o);
			l + 1 < i.length && l++,
				i[l].focus(),
				o && o.classList.remove('hs-select-option-highlighted'),
				i[l].classList.add('hs-select-option-highlighted');
		}
	}
	static onTab(t = !0) {
		const e = window.$hsSelectCollection.find((t) => t.element.isOpened);
		if (e) {
			const s = e.element.dropdown;
			if (!s) return !1;
			const i = (
					t
						? Array.from(
								s.querySelectorAll(':scope >  *:not(.hidden)'),
							).reverse()
						: Array.from(s.querySelectorAll(':scope >  *:not(.hidden)'))
				).filter((t) => !t.classList.contains('disabled')),
				o =
					s.querySelector('.hs-select-option-highlighted') ||
					s.querySelector('.selected');
			o || i[0].classList.add('hs-select-option-highlighted');
			let l = i.findIndex((t) => t === o);
			if (!(l + 1 < i.length))
				return (
					o && o.classList.remove('hs-select-option-highlighted'),
					e.element.close(),
					e.element.toggle.focus(),
					!1
				);
			l++,
				i[l].focus(),
				o && o.classList.remove('hs-select-option-highlighted'),
				i[l].classList.add('hs-select-option-highlighted');
		}
	}
	static onStartEnd(t = !0) {
		const e = window.$hsSelectCollection.find((t) => t.element.isOpened);
		if (e) {
			const s = e.element.dropdown;
			if (!s) return !1;
			const i = (
					t
						? Array.from(s.querySelectorAll(':scope >  *:not(.hidden)'))
						: Array.from(
								s.querySelectorAll(':scope >  *:not(.hidden)'),
							).reverse()
				).filter((t) => !t.classList.contains('disabled')),
				o = s.querySelector('.hs-select-option-highlighted');
			i.length &&
				(i[0].focus(),
				o && o.classList.remove('hs-select-option-highlighted'),
				i[0].classList.add('hs-select-option-highlighted'));
		}
	}
	static onEnter(t) {
		const e = t.target.previousSibling;
		if (window.$hsSelectCollection.find((t) => t.element.el === e)) {
			const t = window.$hsSelectCollection.find((t) => t.element.isOpened),
				s = window.$hsSelectCollection.find((t) => t.element.el === e);
			t.element.close(), s.element.open();
		} else {
			const e = window.$hsSelectCollection.find((t) => t.element.isOpened);
			e && e.element.onSelectOption(t.target.dataset.value || '');
		}
	}
}
window.addEventListener('load', () => {
	r.autoInit();
}),
	document.addEventListener('scroll', () => {
		if (!window.$hsSelectCollection) return !1;
		const t = window.$hsSelectCollection.find((t) => t.element.isOpened);
		t && t.element.recalculateDirection();
	}),
	'undefined' != typeof window && (window.HSSelect = r);
const d = r;
var h = i.A;
export { h as default };
