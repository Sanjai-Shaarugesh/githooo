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
			i.d(t, { en: () => s, fc: () => a, sg: () => n });
			const n = (e, t = 200) => {
					let i;
					return (...n) => {
						clearTimeout(i),
							(i = setTimeout(() => {
								e.apply(void 0, n);
							}, t));
					};
				},
				a = (e) => {
					const t = document.createElement('template');
					return (e = e.trim()), (t.innerHTML = e), t.content.firstChild;
				},
				s = (e, t, i = ' ', n = 'add') => {
					e.split(i).forEach((e) =>
						'add' === n ? t.classList.add(e) : t.classList.remove(e),
					);
				};
		},
	},
	t = {};
function i(n) {
	var a = t[n];
	if (void 0 !== a) return a.exports;
	var s = (t[n] = { exports: {} });
	return e[n](s, s.exports, i), s.exports;
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
var a = i(926),
	s = i(615);
/*
 * HSDataTable
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class l extends s.A {
	constructor(e, t, i) {
		var n,
			a,
			s,
			l,
			o,
			h,
			g,
			r,
			d,
			c,
			p,
			u,
			v,
			b,
			f,
			S,
			w,
			P,
			C,
			T,
			L,
			m,
			y,
			E,
			A;
		super(e, t, i),
			(this.el = 'string' == typeof e ? document.querySelector(e) : e);
		const x = [];
		Array.from(this.el.querySelectorAll('thead th, thead td')).forEach(
			(e, t) => {
				e.classList.contains('--exclude-from-ordering') &&
					x.push({ targets: t, orderable: !1 });
			},
		);
		const k = this.el.getAttribute('data-hs-datatable'),
			I = k ? JSON.parse(k) : {};
		(this.concatOptions = Object.assign(
			Object.assign(
				{ searching: !0, lengthChange: !1, order: [], columnDefs: [...x] },
				I,
			),
			t,
		)),
			(this.table = this.el.querySelector('table')),
			(this.search =
				null !== (n = this.el.querySelector('[data-hs-datatable-search]')) &&
				void 0 !== n
					? n
					: null),
			(this.pageEntities =
				null !==
					(a = this.el.querySelector('[data-hs-datatable-page-entities]')) &&
				void 0 !== a
					? a
					: null),
			(this.paging =
				null !== (s = this.el.querySelector('[data-hs-datatable-paging]')) &&
				void 0 !== s
					? s
					: null),
			(this.pagingPrev =
				null !==
					(l = this.el.querySelector('[data-hs-datatable-paging-prev]')) &&
				void 0 !== l
					? l
					: null),
			(this.pagingNext =
				null !==
					(o = this.el.querySelector('[data-hs-datatable-paging-next]')) &&
				void 0 !== o
					? o
					: null),
			(this.pagingPages =
				null !==
					(h = this.el.querySelector('[data-hs-datatable-paging-pages]')) &&
				void 0 !== h
					? h
					: null),
			(this.info =
				null !== (g = this.el.querySelector('[data-hs-datatable-info]')) &&
				void 0 !== g
					? g
					: null),
			(this.infoFrom =
				null !== (r = this.el.querySelector('[data-hs-datatable-info-from]')) &&
				void 0 !== r
					? r
					: null),
			(this.infoTo =
				null !== (d = this.el.querySelector('[data-hs-datatable-info-to]')) &&
				void 0 !== d
					? d
					: null),
			(this.infoLength =
				null !==
					(c = this.el.querySelector('[data-hs-datatable-info-length]')) &&
				void 0 !== c
					? c
					: null),
			(null === (p = this.concatOptions) || void 0 === p
				? void 0
				: p.rowSelectingOptions) &&
				(this.rowSelectingAll =
					null !==
						(S = (
							null ===
								(v =
									null === (u = this.concatOptions) || void 0 === u
										? void 0
										: u.rowSelectingOptions) || void 0 === v
								? void 0
								: v.selectAllSelector
						)
							? document.querySelector(
									null ===
										(f =
											null === (b = this.concatOptions) || void 0 === b
												? void 0
												: b.rowSelectingOptions) || void 0 === f
										? void 0
										: f.selectAllSelector,
								)
							: document.querySelector(
									'[data-hs-datatable-row-selecting-all]',
								)) && void 0 !== S
						? S
						: null),
			(null === (w = this.concatOptions) || void 0 === w
				? void 0
				: w.rowSelectingOptions) &&
				(this.rowSelectingIndividual =
					null !==
						(L =
							null !==
								(T =
									null ===
										(C =
											null === (P = this.concatOptions) || void 0 === P
												? void 0
												: P.rowSelectingOptions) || void 0 === C
										? void 0
										: C.individualSelector) && void 0 !== T
								? T
								: '[data-hs-datatable-row-selecting-individual]') &&
					void 0 !== L
						? L
						: null),
			this.pageEntities &&
				(this.concatOptions.pageLength = parseInt(this.pageEntities.value)),
			(this.maxPagesToShow = 3),
			(this.isRowSelecting = !!(null === (m = this.concatOptions) ||
			void 0 === m
				? void 0
				: m.rowSelectingOptions)),
			(this.pageBtnClasses =
				null !==
					(A =
						null ===
							(E =
								null === (y = this.concatOptions) || void 0 === y
									? void 0
									: y.pagingOptions) || void 0 === E
							? void 0
							: E.pageBtnClasses) && void 0 !== A
					? A
					: null),
			(this.onSinglePagingClickListener = []),
			this.init();
	}
	init() {
		this.createCollection(window.$hsDataTableCollection, this),
			this.initTable(),
			this.search && this.initSearch(),
			this.pageEntities && this.initPageEntities(),
			this.paging && this.initPaging(),
			this.pagingPrev && this.initPagingPrev(),
			this.pagingNext && this.initPagingNext(),
			this.pagingPages && this.buildPagingPages(),
			this.info && this.initInfo(),
			this.isRowSelecting && this.initRowSelecting();
	}
	initTable() {
		(this.dataTable = new DataTable(this.table, this.concatOptions)),
			this.isRowSelecting && this.triggerChangeEventToRow(),
			this.dataTable.on('draw', () => {
				this.isRowSelecting && this.updateSelectAllCheckbox(),
					this.isRowSelecting && this.triggerChangeEventToRow(),
					this.updateInfo(),
					this.updatePaging();
			});
	}
	searchInput(e) {
		this.onSearchInput(e.target.value);
	}
	pageEntitiesChange(e) {
		this.onEntitiesChange(parseInt(e.target.value));
	}
	pagingPrevClick() {
		this.onPrevClick();
	}
	pagingNextClick() {
		this.onNextClick();
	}
	rowSelectingAllChange() {
		this.onSelectAllChange();
	}
	singlePagingClick(e) {
		this.onPageClick(e);
	}
	destroy() {
		const e = this.el.querySelectorAll('[data-page]');
		this.search &&
			this.search.removeEventListener('input', this.onSearchInputListener),
			this.pageEntities &&
				this.pageEntities.removeEventListener(
					'change',
					this.onPageEntitiesChangeListener,
				),
			this.pagingPrev &&
				this.pagingPrev.removeEventListener(
					'click',
					this.onPagingPrevClickListener,
				),
			this.pagingNext &&
				this.pagingNext.removeEventListener(
					'click',
					this.onPagingNextClickListener,
				),
			this.rowSelectingAll &&
				this.rowSelectingAll.removeEventListener(
					'change',
					this.onRowSelectingAllChangeListener,
				),
			e.length &&
				(e.forEach((e) => {
					const t = +e.getAttribute('data-page');
					e.removeEventListener(
						'click',
						this.onSinglePagingClickListener.find((e) => e.id === t).fn,
					);
				}),
				(this.pagingPages.innerHTML = '')),
			this.dataTable.destroy(),
			(this.rowSelectingAll = null),
			(this.rowSelectingIndividual = null),
			(window.$hsDataTableCollection = window.$hsDataTableCollection.filter(
				({ element: e }) => e.el !== this.el,
			));
	}
	initSearch() {
		(this.onSearchInputListener = (0, a.sg)((e) => this.searchInput(e))),
			this.search.addEventListener('input', this.onSearchInputListener);
	}
	onSearchInput(e) {
		this.dataTable.search(e).draw();
	}
	initPageEntities() {
		(this.onPageEntitiesChangeListener = (e) => this.pageEntitiesChange(e)),
			this.pageEntities.addEventListener(
				'change',
				this.onPageEntitiesChangeListener,
			);
	}
	onEntitiesChange(e) {
		this.dataTable.page.len(e).draw();
	}
	initInfo() {
		this.infoFrom && this.initInfoFrom(),
			this.infoTo && this.initInfoTo(),
			this.infoLength && this.initInfoLength();
	}
	initInfoFrom() {
		const { start: e } = this.dataTable.page.info();
		this.infoFrom.innerText = `${e + 1}`;
	}
	initInfoTo() {
		const { end: e } = this.dataTable.page.info();
		this.infoTo.innerText = `${e}`;
	}
	initInfoLength() {
		const { recordsTotal: e } = this.dataTable.page.info();
		this.infoLength.innerText = `${e}`;
	}
	updateInfo() {
		this.initInfo();
	}
	initPaging() {
		this.hidePagingIfSinglePage();
	}
	hidePagingIfSinglePage() {
		const { pages: e } = this.dataTable.page.info();
		e < 2
			? (this.paging.classList.add('hidden'),
				(this.paging.style.display = 'none'))
			: (this.paging.classList.remove('hidden'),
				(this.paging.style.display = ''));
	}
	initPagingPrev() {
		(this.onPagingPrevClickListener = () => this.pagingPrevClick()),
			this.pagingPrev.addEventListener('click', this.onPagingPrevClickListener);
	}
	onPrevClick() {
		this.dataTable.page('previous').draw('page');
	}
	disablePagingArrow(e, t) {
		t
			? (e.classList.add('disabled'), e.setAttribute('disabled', 'disabled'))
			: (e.classList.remove('disabled'), e.removeAttribute('disabled'));
	}
	initPagingNext() {
		(this.onPagingNextClickListener = () => this.pagingNextClick()),
			this.pagingNext.addEventListener('click', this.onPagingNextClickListener);
	}
	onNextClick() {
		this.dataTable.page('next').draw('page');
	}
	buildPagingPages() {
		this.updatePaging();
	}
	updatePaging() {
		const { page: e, pages: t, length: i } = this.dataTable.page.info(),
			n = this.dataTable.rows({ search: 'applied' }).count(),
			s = Math.ceil(n / i),
			l = e + 1;
		let o = Math.max(1, l - Math.floor(this.maxPagesToShow / 2)),
			h = Math.min(s, o + (this.maxPagesToShow - 1));
		h - o + 1 < this.maxPagesToShow &&
			(o = Math.max(1, h - this.maxPagesToShow + 1)),
			(this.pagingPages.innerHTML = ''),
			o > 1 &&
				(this.buildPagingPage(1),
				o > 2 &&
					this.pagingPages.appendChild(
						(0, a.fc)('<span class="ellipsis">...</span>'),
					));
		for (let e = o; e <= h; e++) this.buildPagingPage(e);
		h < s &&
			(h < s - 1 &&
				this.pagingPages.appendChild(
					(0, a.fc)('<span class="ellipsis">...</span>'),
				),
			this.buildPagingPage(s)),
			this.disablePagingArrow(this.pagingPrev, 0 === e),
			this.disablePagingArrow(this.pagingNext, e === t - 1),
			this.hidePagingIfSinglePage();
	}
	buildPagingPage(e) {
		const { page: t } = this.dataTable.page.info(),
			i = (0, a.fc)('<button type="button"></button>');
		(i.innerText = `${e}`),
			i.setAttribute('data-page', `${e}`),
			this.pageBtnClasses && (0, a.en)(this.pageBtnClasses, i),
			t === e - 1 && i.classList.add('active'),
			this.onSinglePagingClickListener.push({
				id: e,
				fn: () => this.singlePagingClick(e),
			}),
			i.addEventListener(
				'click',
				this.onSinglePagingClickListener.find((t) => t.id === e).fn,
			),
			this.pagingPages.append(i);
	}
	onPageClick(e) {
		this.dataTable.page(e - 1).draw('page');
	}
	initRowSelecting() {
		(this.onRowSelectingAllChangeListener = () => this.rowSelectingAllChange()),
			this.rowSelectingAll.addEventListener(
				'change',
				this.onRowSelectingAllChangeListener,
			);
	}
	triggerChangeEventToRow() {
		this.table
			.querySelectorAll(`tbody ${this.rowSelectingIndividual}`)
			.forEach((e) => {
				e.addEventListener('change', () => {
					this.updateSelectAllCheckbox();
				});
			});
	}
	onSelectAllChange() {
		let e = this.rowSelectingAll.checked;
		Array.from(
			this.dataTable.rows({ page: 'current', search: 'applied' }).nodes(),
		).forEach((t) => {
			const i = t.querySelector(this.rowSelectingIndividual);
			i && (i.checked = e);
		}),
			this.updateSelectAllCheckbox();
	}
	updateSelectAllCheckbox() {
		if (!this.dataTable.rows({ search: 'applied' }).count())
			return (this.rowSelectingAll.checked = !1), !1;
		let e = !0;
		Array.from(
			this.dataTable.rows({ page: 'current', search: 'applied' }).nodes(),
		).forEach((t) => {
			const i = t.querySelector(this.rowSelectingIndividual);
			if (i && !i.checked) return (e = !1), !1;
		}),
			(this.rowSelectingAll.checked = e);
	}
	static getInstance(e, t) {
		const i = window.$hsDataTableCollection.find(
			(t) =>
				t.element.el === ('string' == typeof e ? document.querySelector(e) : e),
		);
		return i ? (t ? i : i.element.el) : null;
	}
	static autoInit() {
		window.$hsDataTableCollection || (window.$hsDataTableCollection = []),
			window.$hsDataTableCollection &&
				(window.$hsDataTableCollection = window.$hsDataTableCollection.filter(
					({ element: e }) => document.contains(e.el),
				)),
			document
				.querySelectorAll('[data-hs-datatable]:not(.--prevent-on-load-init)')
				.forEach((e) => {
					window.$hsDataTableCollection.find((t) => {
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
	document.querySelectorAll('[data-hs-datatable]:not(.--prevent-on-load-init)')
		.length &&
		('undefined' == typeof jQuery &&
			console.error(
				'HSDataTable: jQuery is not available, please add it to the page.',
			),
		'undefined' == typeof DataTable &&
			console.error(
				'HSDataTable: DataTable is not available, please add it to the page.',
			)),
		'undefined' != typeof DataTable &&
			'undefined' != typeof jQuery &&
			l.autoInit();
}),
	'undefined' != typeof window && (window.HSDataTable = l);
const o = l;
var h = n.A;
export { h as default };
