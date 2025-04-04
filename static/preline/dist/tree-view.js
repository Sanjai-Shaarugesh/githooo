!(function (e, t) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = t();
	else if ('function' == typeof define && define.amd) define([], t);
	else {
		var n = t();
		for (var i in n) ('object' == typeof exports ? exports : e)[i] = n[i];
	}
})(self, () =>
	(() => {
		'use strict';
		var e = {
				961: (e, t) => {
					Object.defineProperty(t, '__esModule', { value: !0 });
					var n = (function () {
						function e(e, t, n) {
							(this.el = e),
								(this.options = t),
								(this.events = n),
								(this.el = e),
								(this.options = t),
								(this.events = {});
						}
						return (
							(e.prototype.createCollection = function (e, t) {
								var n;
								e.push({
									id:
										(null === (n = null == t ? void 0 : t.el) || void 0 === n
											? void 0
											: n.id) || e.length + 1,
									element: t,
								});
							}),
							(e.prototype.fireEvent = function (e, t) {
								if ((void 0 === t && (t = null), this.events.hasOwnProperty(e)))
									return this.events[e](t);
							}),
							(e.prototype.on = function (e, t) {
								this.events[e] = t;
							}),
							e
						);
					})();
					t.default = n;
				},
				772: function (e, t, n) {
					/*
					 * HSTreeView
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var i,
						o =
							(this && this.__extends) ||
							((i = function (e, t) {
								return (
									(i =
										Object.setPrototypeOf ||
										({ __proto__: [] } instanceof Array &&
											function (e, t) {
												e.__proto__ = t;
											}) ||
										function (e, t) {
											for (var n in t)
												Object.prototype.hasOwnProperty.call(t, n) &&
													(e[n] = t[n]);
										}),
									i(e, t)
								);
							}),
							function (e, t) {
								if ('function' != typeof t && null !== t)
									throw new TypeError(
										'Class extends value ' +
											String(t) +
											' is not a constructor or null',
									);
								function n() {
									this.constructor = e;
								}
								i(e, t),
									(e.prototype =
										null === t
											? Object.create(t)
											: ((n.prototype = t.prototype), new n()));
							}),
						r =
							(this && this.__assign) ||
							function () {
								return (
									(r =
										Object.assign ||
										function (e) {
											for (var t, n = 1, i = arguments.length; n < i; n++)
												for (var o in (t = arguments[n]))
													Object.prototype.hasOwnProperty.call(t, o) &&
														(e[o] = t[o]);
											return e;
										}),
									r.apply(this, arguments)
								);
							},
						s =
							(this && this.__importDefault) ||
							function (e) {
								return e && e.__esModule ? e : { default: e };
							};
					Object.defineProperty(t, '__esModule', { value: !0 });
					var l = n(292),
						c = (function (e) {
							function t(t, n, i) {
								var o = e.call(this, t, n, i) || this;
								o.items = [];
								var s = t.getAttribute('data-hs-tree-view'),
									l = s ? JSON.parse(s) : {},
									c = r(r({}, l), n);
								return (
									(o.controlBy =
										(null == c ? void 0 : c.controlBy) || 'button'),
									(o.autoSelectChildren =
										(null == c ? void 0 : c.autoSelectChildren) || !1),
									(o.isIndeterminate =
										(null == c ? void 0 : c.isIndeterminate) || !0),
									(o.onElementClickListener = []),
									(o.onControlChangeListener = []),
									o.init(),
									o
								);
							}
							return (
								o(t, e),
								(t.prototype.elementClick = function (e, t, n) {
									if ((e.stopPropagation(), t.classList.contains('disabled')))
										return !1;
									e.metaKey || e.shiftKey || this.unselectItem(n),
										this.selectItem(t, n),
										this.fireEvent('click', { el: t, data: n }),
										(0, l.dispatch)('click.hs.treeView', this.el, {
											el: t,
											data: n,
										});
								}),
								(t.prototype.controlChange = function (e, t) {
									this.autoSelectChildren
										? (this.selectItem(e, t),
											t.isDir && this.selectChildren(e, t),
											this.toggleParent(e))
										: this.selectItem(e, t);
								}),
								(t.prototype.init = function () {
									this.createCollection(window.$hsTreeViewCollection, this),
										(t.group += 1),
										this.initItems();
								}),
								(t.prototype.initItems = function () {
									var e = this;
									this.el
										.querySelectorAll('[data-hs-tree-view-item]')
										.forEach(function (n, i) {
											var o,
												s,
												l = JSON.parse(
													n.getAttribute('data-hs-tree-view-item'),
												);
											n.id ||
												(n.id = 'tree-view-item-'
													.concat(t.group, '-')
													.concat(i));
											var c = r(r({}, l), {
												id: null !== (o = l.id) && void 0 !== o ? o : n.id,
												path: e.getPath(n),
												isSelected:
													null !== (s = l.isSelected) && void 0 !== s && s,
											});
											e.items.push(c),
												'checkbox' === e.controlBy
													? e.controlByCheckbox(n, c)
													: e.controlByButton(n, c);
										});
								}),
								(t.prototype.controlByButton = function (e, t) {
									var n = this;
									this.onElementClickListener.push({
										el: e,
										fn: function (i) {
											return n.elementClick(i, e, t);
										},
									}),
										e.addEventListener(
											'click',
											this.onElementClickListener.find(function (t) {
												return t.el === e;
											}).fn,
										);
								}),
								(t.prototype.controlByCheckbox = function (e, t) {
									var n = this,
										i = e.querySelector('input[value="'.concat(t.value, '"]'));
									i &&
										(this.onControlChangeListener.push({
											el: i,
											fn: function () {
												return n.controlChange(e, t);
											},
										}),
										i.addEventListener(
											'change',
											this.onControlChangeListener.find(function (e) {
												return e.el === i;
											}).fn,
										));
								}),
								(t.prototype.getItem = function (e) {
									return this.items.find(function (t) {
										return t.id === e;
									});
								}),
								(t.prototype.getPath = function (e) {
									for (
										var t, n = [], i = e.closest('[data-hs-tree-view-item]');
										i;

									) {
										var o = JSON.parse(
											i.getAttribute('data-hs-tree-view-item'),
										);
										n.push(o.value),
											(i =
												null === (t = i.parentElement) || void 0 === t
													? void 0
													: t.closest('[data-hs-tree-view-item]'));
									}
									return n.reverse().join('/');
								}),
								(t.prototype.unselectItem = function (e) {
									var t = this;
									void 0 === e && (e = null);
									var n = this.getSelectedItems();
									e &&
										(n = n.filter(function (t) {
											return t.id !== e.id;
										})),
										n.length &&
											n.forEach(function (e) {
												document
													.querySelector('#'.concat(e.id))
													.classList.remove('selected'),
													t.changeItemProp(e.id, 'isSelected', !1);
											});
								}),
								(t.prototype.selectItem = function (e, t) {
									t.isSelected
										? (e.classList.remove('selected'),
											this.changeItemProp(t.id, 'isSelected', !1))
										: (e.classList.add('selected'),
											this.changeItemProp(t.id, 'isSelected', !0));
								}),
								(t.prototype.selectChildren = function (e, t) {
									var n = this,
										i = e.querySelectorAll('[data-hs-tree-view-item]');
									Array.from(i)
										.filter(function (e) {
											return !e.classList.contains('disabled');
										})
										.forEach(function (e) {
											var i = e.id ? n.getItem(e.id) : null;
											if (!i) return !1;
											t.isSelected
												? (e.classList.add('selected'),
													n.changeItemProp(i.id, 'isSelected', !0))
												: (e.classList.remove('selected'),
													n.changeItemProp(i.id, 'isSelected', !1));
											var o = n.getItem(e.id),
												r = e.querySelector(
													'input[value="'.concat(o.value, '"]'),
												);
											n.isIndeterminate && (r.indeterminate = !1),
												o.isSelected ? (r.checked = !0) : (r.checked = !1);
										});
								}),
								(t.prototype.toggleParent = function (e) {
									for (
										var t,
											n,
											i = this,
											o =
												null === (t = e.parentElement) || void 0 === t
													? void 0
													: t.closest('[data-hs-tree-view-item]'),
											r = function () {
												var e = o.querySelectorAll(
														'[data-hs-tree-view-item]:not(.disabled)',
													),
													t = JSON.parse(
														o.getAttribute('data-hs-tree-view-item'),
													),
													r = o.querySelector(
														'input[value="'.concat(t.value, '"]'),
													),
													l = !1,
													c = 0;
												e.forEach(function (e) {
													var t = i.getItem(e.id);
													t.isSelected && (c += 1), t.isSelected || (l = !0);
												}),
													l
														? (o.classList.remove('selected'),
															s.changeItemProp(o.id, 'isSelected', !1),
															(r.checked = !1))
														: (o.classList.add('selected'),
															s.changeItemProp(o.id, 'isSelected', !0),
															(r.checked = !0)),
													s.isIndeterminate &&
														(c > 0 && c < e.length
															? (r.indeterminate = !0)
															: (r.indeterminate = !1)),
													(o =
														null === (n = o.parentElement) || void 0 === n
															? void 0
															: n.closest('[data-hs-tree-view-item]'));
											},
											s = this;
										o;

									)
										r();
								}),
								(t.prototype.update = function () {
									var e = this;
									this.items.map(function (t) {
										var n = document.querySelector('#'.concat(t.id));
										return (
											t.path !== e.getPath(n) && (t.path = e.getPath(n)), t
										);
									});
								}),
								(t.prototype.getSelectedItems = function () {
									return this.items.filter(function (e) {
										return e.isSelected;
									});
								}),
								(t.prototype.changeItemProp = function (e, t, n) {
									this.items.map(function (i) {
										return i.id === e && (i[t] = n), i;
									});
								}),
								(t.prototype.destroy = function () {
									var e = this;
									this.onElementClickListener.forEach(function (e) {
										var t = e.el,
											n = e.fn;
										t.removeEventListener('click', n);
									}),
										this.onControlChangeListener.length &&
											this.onElementClickListener.forEach(function (e) {
												var t = e.el,
													n = e.fn;
												t.removeEventListener('change', n);
											}),
										this.unselectItem(),
										(this.items = []),
										(window.$hsTreeViewCollection =
											window.$hsTreeViewCollection.filter(function (t) {
												return t.element.el !== e.el;
											})),
										(t.group -= 1);
								}),
								(t.findInCollection = function (e) {
									return (
										window.$hsTreeViewCollection.find(function (n) {
											return e instanceof t
												? n.element.el === e.el
												: 'string' == typeof e
													? n.element.el === document.querySelector(e)
													: n.element.el === e;
										}) || null
									);
								}),
								(t.getInstance = function (e, t) {
									var n = window.$hsTreeViewCollection.find(function (t) {
										return (
											t.element.el ===
											('string' == typeof e ? document.querySelector(e) : e)
										);
									});
									return n ? (t ? n : n.element.el) : null;
								}),
								(t.autoInit = function () {
									window.$hsTreeViewCollection ||
										(window.$hsTreeViewCollection = []),
										window.$hsTreeViewCollection &&
											(window.$hsTreeViewCollection =
												window.$hsTreeViewCollection.filter(function (e) {
													var t = e.element;
													return document.contains(t.el);
												})),
										document
											.querySelectorAll(
												'[data-hs-tree-view]:not(.--prevent-on-load-init)',
											)
											.forEach(function (e) {
												window.$hsTreeViewCollection.find(function (t) {
													var n;
													return (
														(null === (n = null == t ? void 0 : t.element) ||
														void 0 === n
															? void 0
															: n.el) === e
													);
												}) || new t(e);
											});
								}),
								(t.on = function (e, n, i) {
									var o = t.findInCollection(n);
									console.log(1), o && (o.element.events[e] = i);
								}),
								(t.group = 0),
								t
							);
						})(s(n(961)).default);
					window.addEventListener('load', function () {
						c.autoInit();
					}),
						'undefined' != typeof window && (window.HSTreeView = c),
						(t.default = c);
				},
				292: function (e, t) {
					/*
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var n = this;
					Object.defineProperty(t, '__esModule', { value: !0 }),
						(t.menuSearchHistory =
							t.classToClassList =
							t.htmlToElement =
							t.afterTransition =
							t.dispatch =
							t.debounce =
							t.isJson =
							t.isDirectChild =
							t.isFormElement =
							t.isParentOrElementHidden =
							t.isEnoughSpace =
							t.isIpadOS =
							t.isIOS =
							t.getZIndex =
							t.getClassPropertyAlt =
							t.getClassProperty =
							t.stringToBoolean =
								void 0),
						(t.getHighestZIndex = function (e) {
							var t = Number.NEGATIVE_INFINITY;
							return (
								e.forEach(function (e) {
									var n = i(e);
									'auto' !== n && (n = parseInt(n, 10)) > t && (t = n);
								}),
								t
							);
						});
					t.stringToBoolean = function (e) {
						return 'true' === e;
					};
					t.getClassProperty = function (e, t, n) {
						return (
							void 0 === n && (n = ''),
							(window.getComputedStyle(e).getPropertyValue(t) || n).replace(
								' ',
								'',
							)
						);
					};
					t.getClassPropertyAlt = function (e, t, n) {
						void 0 === n && (n = '');
						var i = '';
						return (
							e.classList.forEach(function (e) {
								e.includes(t) && (i = e);
							}),
							i.match(/:(.*)]/) ? i.match(/:(.*)]/)[1] : n
						);
					};
					var i = function (e) {
						return window.getComputedStyle(e).getPropertyValue('z-index');
					};
					t.getZIndex = i;
					t.isIOS = function () {
						return (
							!!/iPad|iPhone|iPod/.test(navigator.platform) ||
							(navigator.maxTouchPoints &&
								navigator.maxTouchPoints > 2 &&
								/MacIntel/.test(navigator.platform))
						);
					};
					t.isIpadOS = function () {
						return (
							navigator.maxTouchPoints &&
							navigator.maxTouchPoints > 2 &&
							/MacIntel/.test(navigator.platform)
						);
					};
					t.isDirectChild = function (e, t) {
						for (var n = e.children, i = 0; i < n.length; i++)
							if (n[i] === t) return !0;
						return !1;
					};
					t.isEnoughSpace = function (e, t, n, i, o) {
						void 0 === n && (n = 'auto'),
							void 0 === i && (i = 10),
							void 0 === o && (o = null);
						var r = t.getBoundingClientRect(),
							s = o ? o.getBoundingClientRect() : null,
							l = window.innerHeight,
							c = s ? r.top - s.top : r.top,
							a = (o ? s.bottom : l) - r.bottom,
							u = e.clientHeight + i;
						return 'bottom' === n
							? a >= u
							: 'top' === n
								? c >= u
								: c >= u || a >= u;
					};
					t.isFormElement = function (e) {
						return (
							e instanceof HTMLInputElement ||
							e instanceof HTMLTextAreaElement ||
							e instanceof HTMLSelectElement
						);
					};
					var o = function (e) {
						return (
							!!e &&
							('none' === window.getComputedStyle(e).display ||
								o(e.parentElement))
						);
					};
					t.isParentOrElementHidden = o;
					t.isJson = function (e) {
						if ('string' != typeof e) return !1;
						var t = e.trim()[0],
							n = e.trim().slice(-1);
						if (('{' === t && '}' === n) || ('[' === t && ']' === n))
							try {
								return JSON.parse(e), !0;
							} catch (e) {
								return !1;
							}
						return !1;
					};
					t.debounce = function (e, t) {
						var i;
						return (
							void 0 === t && (t = 200),
							function () {
								for (var o = [], r = 0; r < arguments.length; r++)
									o[r] = arguments[r];
								clearTimeout(i),
									(i = setTimeout(function () {
										e.apply(n, o);
									}, t));
							}
						);
					};
					t.dispatch = function (e, t, n) {
						void 0 === n && (n = null);
						var i = new CustomEvent(e, {
							detail: { payload: n },
							bubbles: !0,
							cancelable: !0,
							composed: !1,
						});
						t.dispatchEvent(i);
					};
					t.afterTransition = function (e, t) {
						var n = function () {
								t(), e.removeEventListener('transitionend', n, !0);
							},
							i = window.getComputedStyle(e),
							o = i.getPropertyValue('transition-duration');
						'none' !== i.getPropertyValue('transition-property') &&
						parseFloat(o) > 0
							? e.addEventListener('transitionend', n, !0)
							: t();
					};
					t.htmlToElement = function (e) {
						var t = document.createElement('template');
						return (e = e.trim()), (t.innerHTML = e), t.content.firstChild;
					};
					t.classToClassList = function (e, t, n, i) {
						void 0 === n && (n = ' '),
							void 0 === i && (i = 'add'),
							e.split(n).forEach(function (e) {
								return 'add' === i ? t.classList.add(e) : t.classList.remove(e);
							});
					};
					t.menuSearchHistory = {
						historyIndex: -1,
						addHistory: function (e) {
							this.historyIndex = e;
						},
						existsInHistory: function (e) {
							return e > this.historyIndex;
						},
						clearHistory: function () {
							this.historyIndex = -1;
						},
					};
				},
			},
			t = {};
		var n = (function n(i) {
			var o = t[i];
			if (void 0 !== o) return o.exports;
			var r = (t[i] = { exports: {} });
			return e[i].call(r.exports, r, r.exports, n), r.exports;
		})(772);
		return n;
	})(),
);
