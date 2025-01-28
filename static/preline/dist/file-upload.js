!(function (t, e) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = e();
	else if ('function' == typeof define && define.amd) define([], e);
	else {
		var n = e();
		for (var o in n) ('object' == typeof exports ? exports : t)[o] = n[o];
	}
})(self, () =>
	(() => {
		'use strict';
		var t = {
				961: (t, e) => {
					Object.defineProperty(e, '__esModule', { value: !0 });
					var n = (function () {
						function t(t, e, n) {
							(this.el = t),
								(this.options = e),
								(this.events = n),
								(this.el = t),
								(this.options = e),
								(this.events = {});
						}
						return (
							(t.prototype.createCollection = function (t, e) {
								var n;
								t.push({
									id:
										(null === (n = null == e ? void 0 : e.el) || void 0 === n
											? void 0
											: n.id) || t.length + 1,
									element: e,
								});
							}),
							(t.prototype.fireEvent = function (t, e) {
								if ((void 0 === e && (e = null), this.events.hasOwnProperty(t)))
									return this.events[t](e);
							}),
							(t.prototype.on = function (t, e) {
								this.events[t] = e;
							}),
							t
						);
					})();
					e.default = n;
				},
				234: function (t, e, n) {
					/*
					 * HSFileUpload
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var o,
						i =
							(this && this.__extends) ||
							((o = function (t, e) {
								return (
									(o =
										Object.setPrototypeOf ||
										({ __proto__: [] } instanceof Array &&
											function (t, e) {
												t.__proto__ = e;
											}) ||
										function (t, e) {
											for (var n in e)
												Object.prototype.hasOwnProperty.call(e, n) &&
													(t[n] = e[n]);
										}),
									o(t, e)
								);
							}),
							function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Class extends value ' +
											String(e) +
											' is not a constructor or null',
									);
								function n() {
									this.constructor = t;
								}
								o(t, e),
									(t.prototype =
										null === e
											? Object.create(e)
											: ((n.prototype = e.prototype), new n()));
							}),
						r =
							(this && this.__assign) ||
							function () {
								return (
									(r =
										Object.assign ||
										function (t) {
											for (var e, n = 1, o = arguments.length; n < o; n++)
												for (var i in (e = arguments[n]))
													Object.prototype.hasOwnProperty.call(e, i) &&
														(t[i] = e[i]);
											return t;
										}),
									r.apply(this, arguments)
								);
							},
						l =
							(this && this.__importDefault) ||
							function (t) {
								return t && t.__esModule ? t : { default: t };
							};
					Object.defineProperty(e, '__esModule', { value: !0 });
					var a = n(292),
						s = l(n(961));
					'undefined' != typeof Dropzone && (Dropzone.autoDiscover = !1);
					var d = (function (t) {
						function e(e, n, o) {
							var i,
								l = t.call(this, e, n, o) || this;
							(l.extensions = {}),
								(l.el = 'string' == typeof e ? document.querySelector(e) : e);
							var a = l.el.getAttribute('data-hs-file-upload'),
								s = a ? JSON.parse(a) : {};
							return (
								(l.previewTemplate =
									(null ===
										(i = l.el.querySelector('[data-hs-file-upload-preview]')) ||
									void 0 === i
										? void 0
										: i.innerHTML) ||
									'<div class="p-3 bg-white border border-solid border-gray-300 rounded-xl dark:bg-neutral-800 dark:border-neutral-600">\n\t\t\t<div class="mb-2 flex justify-between items-center">\n\t\t\t\t<div class="flex items-center gap-x-3">\n\t\t\t\t\t<span class="size-8 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dark:border-neutral-700 dark:text-neutral-500" data-hs-file-upload-file-icon></span>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p class="text-sm font-medium text-gray-800 dark:text-white">\n\t\t\t\t\t\t\t<span class="truncate inline-block max-w-[300px] align-bottom" data-hs-file-upload-file-name></span>.<span data-hs-file-upload-file-ext></span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class="text-xs text-gray-500 dark:text-neutral-500" data-hs-file-upload-file-size></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="inline-flex items-center gap-x-2">\n\t\t\t\t\t<button type="button" class="text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" data-hs-file-upload-remove>\n\t\t\t\t\t\t<svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="flex items-center gap-x-3 whitespace-nowrap">\n\t\t\t\t<div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" data-hs-file-upload-progress-bar>\n\t\t\t\t\t<div class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition-all duration-500 hs-file-upload-complete:bg-green-600 dark:bg-blue-500" style="width: 0" data-hs-file-upload-progress-bar-pane></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="w-10 text-end">\n\t\t\t\t\t<span class="text-sm text-gray-800 dark:text-white">\n\t\t\t\t\t\t<span data-hs-file-upload-progress-bar-value>0</span>%\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>'),
								(l.extensions = _.merge(
									{
										default: {
											icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>',
											class: 'size-5',
										},
										xls: {
											icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0243 1.43996H7.08805C6.82501 1.43996 6.57277 1.54445 6.38677 1.73043C6.20077 1.91642 6.09631 2.16868 6.09631 2.43171V6.64796L15.0243 11.856L19.4883 13.7398L23.9523 11.856V6.64796L15.0243 1.43996Z" fill="#21A366"></path><path d="M6.09631 6.64796H15.0243V11.856H6.09631V6.64796Z" fill="#107C41"></path><path d="M22.9605 1.43996H15.0243V6.64796H23.9523V2.43171C23.9523 2.16868 23.8478 1.91642 23.6618 1.73043C23.4758 1.54445 23.2235 1.43996 22.9605 1.43996Z" fill="#33C481"></path><path d="M15.0243 11.856H6.09631V21.2802C6.09631 21.5433 6.20077 21.7955 6.38677 21.9815C6.57277 22.1675 6.82501 22.272 7.08805 22.272H22.9606C23.2236 22.272 23.4759 22.1675 23.6618 21.9815C23.8478 21.7955 23.9523 21.5433 23.9523 21.2802V17.064L15.0243 11.856Z" fill="#185C37"></path><path d="M15.0243 11.856H23.9523V17.064H15.0243V11.856Z" fill="#107C41"></path><path opacity="0.1" d="M12.5446 5.15996H6.09631V19.296H12.5446C12.8073 19.2952 13.0591 19.1904 13.245 19.0046C13.4308 18.8188 13.5355 18.567 13.5363 18.3042V6.1517C13.5355 5.88892 13.4308 5.63712 13.245 5.4513C13.0591 5.26548 12.8073 5.16074 12.5446 5.15996Z" fill="black"></path><path opacity="0.2" d="M11.8006 5.90396H6.09631V20.04H11.8006C12.0633 20.0392 12.3151 19.9344 12.501 19.7486C12.6868 19.5628 12.7915 19.311 12.7923 19.0482V6.8957C12.7915 6.6329 12.6868 6.38114 12.501 6.19532C12.3151 6.0095 12.0633 5.90475 11.8006 5.90396Z" fill="black"></path><path opacity="0.2" d="M11.8006 5.90396H6.09631V18.552H11.8006C12.0633 18.5512 12.3151 18.4464 12.501 18.2606C12.6868 18.0748 12.7915 17.823 12.7923 17.5602V6.8957C12.7915 6.6329 12.6868 6.38114 12.501 6.19532C12.3151 6.0095 12.0633 5.90475 11.8006 5.90396Z" fill="black"></path><path opacity="0.2" d="M11.0566 5.90396H6.09631V18.552H11.0566C11.3193 18.5512 11.5711 18.4464 11.757 18.2606C11.9428 18.0748 12.0475 17.823 12.0483 17.5602V6.8957C12.0475 6.6329 11.9428 6.38114 11.757 6.19532C11.5711 6.0095 11.3193 5.90475 11.0566 5.90396Z" fill="black"></path><path d="M1.13604 5.90396H11.0566C11.3195 5.90396 11.5718 6.00842 11.7578 6.19442C11.9438 6.38042 12.0483 6.63266 12.0483 6.8957V16.8162C12.0483 17.0793 11.9438 17.3315 11.7578 17.5175C11.5718 17.7035 11.3195 17.808 11.0566 17.808H1.13604C0.873012 17.808 0.620754 17.7035 0.434765 17.5175C0.248775 17.3315 0.144287 17.0793 0.144287 16.8162V6.8957C0.144287 6.63266 0.248775 6.38042 0.434765 6.19442C0.620754 6.00842 0.873012 5.90396 1.13604 5.90396Z" fill="#107C41"></path><path d="M2.77283 15.576L5.18041 11.8455L2.9752 8.13596H4.74964L5.95343 10.5071C6.06401 10.7318 6.14015 10.8994 6.18185 11.01H6.19745C6.27683 10.8305 6.35987 10.6559 6.44669 10.4863L7.73309 8.13596H9.36167L7.09991 11.8247L9.41897 15.576H7.68545L6.29489 12.972C6.22943 12.861 6.17387 12.7445 6.12899 12.6238H6.10817C6.06761 12.7419 6.01367 12.855 5.94748 12.9608L4.51676 15.576H2.77283Z" fill="white"></path></svg>',
											class: 'size-5',
										},
										doc: {
											icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z" fill="#41A5EE"></path><path d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z" fill="#2B7CD3"></path><path d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z" fill="#185ABD"></path><path d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z" fill="#103F91"></path><path opacity="0.1" d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z" class="fill-black dark:fill-neutral-200" fill="currentColor"></path><path opacity="0.2" d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z" class="fill-black dark:fill-neutral-200" fill="currentColor"></path><path opacity="0.2" d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z" class="fill-black dark:fill-neutral-200" fill="currentColor"></path><path opacity="0.2" d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z" class="fill-black dark:fill-neutral-200" fill="currentColor"></path><path d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z" fill="#185ABD"></path><path d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z" fill="white"></path></svg>',
											class: 'size-5',
										},
										zip: {
											icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="10" cy="20" r="2"/><path d="M10 7V6"/><path d="M10 12v-1"/><path d="M10 18v-2"/></svg>',
											class: 'size-5',
										},
									},
									s.extensions,
								)),
								(l.singleton = s.singleton),
								(l.concatOptions = r(
									r(
										{
											clickable: l.el.querySelector(
												'[data-hs-file-upload-trigger]',
											),
											previewsContainer: l.el.querySelector(
												'[data-hs-file-upload-previews]',
											),
											addRemoveLinks: !1,
											previewTemplate: l.previewTemplate,
											autoHideTrigger: !1,
										},
										s,
									),
									n,
								)),
								(l.onReloadButtonClickListener = []),
								(l.onTempFileInputChangeListener = []),
								l.init(),
								l
							);
						}
						return (
							i(e, t),
							(e.prototype.tempFileInputChange = function (t, e) {
								var n,
									o =
										null === (n = t.target.files) || void 0 === n
											? void 0
											: n[0];
								if (o) {
									var i = o;
									(i.status = Dropzone.ADDED),
										(i.accepted = !0),
										(i.previewElement = e.previewElement),
										(i.previewTemplate = e.previewTemplate),
										(i.previewsContainer = e.previewsContainer),
										this.dropzone.removeFile(e),
										this.dropzone.addFile(i);
								}
							}),
							(e.prototype.reloadButtonClick = function (t, e) {
								var n = this;
								t.preventDefault(), t.stopPropagation();
								var o = document.createElement('input');
								(o.type = 'file'),
									this.onTempFileInputChangeListener.push({
										el: o,
										fn: function (t) {
											return n.tempFileInputChange(t, e);
										},
									}),
									o.click(),
									o.addEventListener(
										'change',
										this.onTempFileInputChangeListener.find(function (t) {
											return t.el === o;
										}).fn,
									);
							}),
							(e.prototype.init = function () {
								this.createCollection(window.$hsFileUploadCollection, this),
									this.initDropzone();
							}),
							(e.prototype.initDropzone = function () {
								var t = this,
									e = this.el.querySelector('[data-hs-file-upload-clear]'),
									n = Array.from(
										this.el.querySelectorAll(
											'[data-hs-file-upload-pseudo-trigger]',
										),
									);
								(this.dropzone = new Dropzone(this.el, this.concatOptions)),
									this.dropzone.on('addedfile', function (e) {
										return t.onAddFile(e);
									}),
									this.dropzone.on('removedfile', function () {
										return t.onRemoveFile();
									}),
									this.dropzone.on('uploadprogress', function (e, n) {
										return t.onUploadProgress(e, n);
									}),
									this.dropzone.on('complete', function (e) {
										return t.onComplete(e);
									}),
									e &&
										(e.onclick = function () {
											t.dropzone.files.length && t.dropzone.removeAllFiles(!0);
										}),
									n.length &&
										n.forEach(function (e) {
											e.onclick = function () {
												var e, n;
												(null === (e = t.concatOptions) || void 0 === e
													? void 0
													: e.clickable) &&
													(null === (n = t.concatOptions) || void 0 === n
														? void 0
														: n.clickable
													).click();
											};
										});
							}),
							(e.prototype.destroy = function () {
								var t = this;
								this.onTempFileInputChangeListener.forEach(function (t) {
									t.el.removeEventListener('change', t.fn);
								}),
									(this.onTempFileInputChangeListener = null),
									this.onReloadButtonClickListener.forEach(function (t) {
										t.el.removeEventListener('click', t.fn);
									}),
									(this.onReloadButtonClickListener = null),
									this.dropzone.destroy(),
									(window.$hsFileUploadCollection =
										window.$hsFileUploadCollection.filter(function (e) {
											return e.element.el !== t.el;
										}));
							}),
							(e.prototype.onAddFile = function (t) {
								var e = this,
									n = t.previewElement,
									o = t.previewElement.querySelector(
										'[data-hs-file-upload-reload]',
									);
								if (!n) return !1;
								this.singleton &&
									this.dropzone.files.length > 1 &&
									this.dropzone.removeFile(this.dropzone.files[0]),
									o &&
										(this.onReloadButtonClickListener.push({
											el: o,
											fn: function (n) {
												return e.reloadButtonClick(n, t);
											},
										}),
										o.addEventListener(
											'click',
											this.onReloadButtonClickListener.find(function (t) {
												return t.el === o;
											}).fn,
										)),
									this.previewAccepted(t);
							}),
							(e.prototype.previewAccepted = function (t) {
								var e = this,
									n = t.previewElement,
									o = this.splitFileName(t.name),
									i = n.querySelector('[data-hs-file-upload-file-name]'),
									r = n.querySelector('[data-hs-file-upload-file-ext]'),
									l = n.querySelector('[data-hs-file-upload-file-size]'),
									a = n.querySelector('[data-hs-file-upload-file-icon]'),
									s = this.el.querySelector('[data-hs-file-upload-trigger]'),
									d = n.querySelector('[data-dz-thumbnail]'),
									p = n.querySelector('[data-hs-file-upload-remove]');
								i && (i.textContent = o.name),
									r && (r.textContent = o.extension),
									l && (l.textContent = this.formatFileSize(t.size)),
									d &&
										(t.type.includes('image/')
											? d.classList.remove('hidden')
											: this.setIcon(o.extension, a)),
									this.dropzone.files.length > 0 &&
										this.concatOptions.autoHideTrigger &&
										(s.style.display = 'none'),
									p &&
										(p.onclick = function () {
											return e.dropzone.removeFile(t);
										});
							}),
							(e.prototype.onRemoveFile = function () {
								var t = this.el.querySelector('[data-hs-file-upload-trigger]');
								0 === this.dropzone.files.length &&
									this.concatOptions.autoHideTrigger &&
									(t.style.display = '');
							}),
							(e.prototype.onUploadProgress = function (t, e) {
								var n = t.previewElement;
								if (!n) return !1;
								var o = n.querySelector('[data-hs-file-upload-progress-bar]'),
									i = n.querySelector(
										'[data-hs-file-upload-progress-bar-pane]',
									),
									r = n.querySelector(
										'[data-hs-file-upload-progress-bar-value]',
									),
									l = Math.floor(e);
								o && o.setAttribute('aria-valuenow', ''.concat(l)),
									i && (i.style.width = ''.concat(l, '%')),
									r && (r.innerText = ''.concat(l));
							}),
							(e.prototype.onComplete = function (t) {
								var e = t.previewElement;
								if (!e) return !1;
								e.classList.add('complete');
							}),
							(e.prototype.setIcon = function (t, e) {
								var n = this.createIcon(t);
								e.append(n);
							}),
							(e.prototype.createIcon = function (t) {
								var e,
									n,
									o = (
										null === (e = this.extensions[t]) || void 0 === e
											? void 0
											: e.icon
									)
										? (0, a.htmlToElement)(this.extensions[t].icon)
										: (0, a.htmlToElement)(this.extensions.default.icon);
								return (
									(0, a.classToClassList)(
										(
											null === (n = this.extensions[t]) || void 0 === n
												? void 0
												: n.class
										)
											? this.extensions[t].class
											: this.extensions.default.class,
										o,
									),
									o
								);
							}),
							(e.prototype.formatFileSize = function (t) {
								return t < 1024
									? t.toFixed(2) + ' B'
									: t < 1048576
										? (t / 1024).toFixed(2) + ' KB'
										: t < 1073741824
											? (t / 1048576).toFixed(2) + ' MB'
											: t < 1099511627776
												? (t / 1073741824).toFixed(2) + ' GB'
												: (t / 1099511627776).toFixed(2) + ' TB';
							}),
							(e.prototype.splitFileName = function (t) {
								var e = t.lastIndexOf('.');
								return -1 == e
									? { name: t, extension: '' }
									: { name: t.substring(0, e), extension: t.substring(e + 1) };
							}),
							(e.getInstance = function (t, e) {
								var n = window.$hsFileUploadCollection.find(function (e) {
									return (
										e.element.el ===
										('string' == typeof t ? document.querySelector(t) : t)
									);
								});
								return n ? (e ? n : n.element.el) : null;
							}),
							(e.autoInit = function () {
								window.$hsFileUploadCollection ||
									(window.$hsFileUploadCollection = []),
									window.$hsFileUploadCollection &&
										(window.$hsFileUploadCollection =
											window.$hsFileUploadCollection.filter(function (t) {
												var e = t.element;
												return document.contains(e.el);
											})),
									document
										.querySelectorAll(
											'[data-hs-file-upload]:not(.--prevent-on-load-init)',
										)
										.forEach(function (t) {
											window.$hsFileUploadCollection.find(function (e) {
												var n;
												return (
													(null === (n = null == e ? void 0 : e.element) ||
													void 0 === n
														? void 0
														: n.el) === t
												);
											}) || new e(t);
										});
							}),
							e
						);
					})(s.default);
					window.addEventListener('load', function () {
						document.querySelectorAll(
							'[data-hs-file-upload]:not(.--prevent-on-load-init)',
						).length &&
							('undefined' == typeof _ &&
								console.error(
									'HSFileUpload: Lodash is not available, please add it to the page.',
								),
							'undefined' == typeof Dropzone &&
								console.error(
									'HSFileUpload: Dropzone is not available, please add it to the page.',
								)),
							'undefined' != typeof _ &&
								'undefined' != typeof Dropzone &&
								d.autoInit();
					}),
						'undefined' != typeof window && (window.HSFileUpload = d),
						(e.default = d);
				},
				292: function (t, e) {
					/*
					 * @version: 2.7.0
					 * @author: Preline Labs Ltd.
					 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
					 * Copyright 2024 Preline Labs Ltd.
					 */
					var n = this;
					Object.defineProperty(e, '__esModule', { value: !0 }),
						(e.menuSearchHistory =
							e.classToClassList =
							e.htmlToElement =
							e.afterTransition =
							e.dispatch =
							e.debounce =
							e.isJson =
							e.isDirectChild =
							e.isFormElement =
							e.isParentOrElementHidden =
							e.isEnoughSpace =
							e.isIpadOS =
							e.isIOS =
							e.getZIndex =
							e.getClassPropertyAlt =
							e.getClassProperty =
							e.stringToBoolean =
								void 0),
						(e.getHighestZIndex = function (t) {
							var e = Number.NEGATIVE_INFINITY;
							return (
								t.forEach(function (t) {
									var n = o(t);
									'auto' !== n && (n = parseInt(n, 10)) > e && (e = n);
								}),
								e
							);
						});
					e.stringToBoolean = function (t) {
						return 'true' === t;
					};
					e.getClassProperty = function (t, e, n) {
						return (
							void 0 === n && (n = ''),
							(window.getComputedStyle(t).getPropertyValue(e) || n).replace(
								' ',
								'',
							)
						);
					};
					e.getClassPropertyAlt = function (t, e, n) {
						void 0 === n && (n = '');
						var o = '';
						return (
							t.classList.forEach(function (t) {
								t.includes(e) && (o = t);
							}),
							o.match(/:(.*)]/) ? o.match(/:(.*)]/)[1] : n
						);
					};
					var o = function (t) {
						return window.getComputedStyle(t).getPropertyValue('z-index');
					};
					e.getZIndex = o;
					e.isIOS = function () {
						return (
							!!/iPad|iPhone|iPod/.test(navigator.platform) ||
							(navigator.maxTouchPoints &&
								navigator.maxTouchPoints > 2 &&
								/MacIntel/.test(navigator.platform))
						);
					};
					e.isIpadOS = function () {
						return (
							navigator.maxTouchPoints &&
							navigator.maxTouchPoints > 2 &&
							/MacIntel/.test(navigator.platform)
						);
					};
					e.isDirectChild = function (t, e) {
						for (var n = t.children, o = 0; o < n.length; o++)
							if (n[o] === e) return !0;
						return !1;
					};
					e.isEnoughSpace = function (t, e, n, o, i) {
						void 0 === n && (n = 'auto'),
							void 0 === o && (o = 10),
							void 0 === i && (i = null);
						var r = e.getBoundingClientRect(),
							l = i ? i.getBoundingClientRect() : null,
							a = window.innerHeight,
							s = l ? r.top - l.top : r.top,
							d = (i ? l.bottom : a) - r.bottom,
							p = t.clientHeight + o;
						return 'bottom' === n
							? d >= p
							: 'top' === n
								? s >= p
								: s >= p || d >= p;
					};
					e.isFormElement = function (t) {
						return (
							t instanceof HTMLInputElement ||
							t instanceof HTMLTextAreaElement ||
							t instanceof HTMLSelectElement
						);
					};
					var i = function (t) {
						return (
							!!t &&
							('none' === window.getComputedStyle(t).display ||
								i(t.parentElement))
						);
					};
					e.isParentOrElementHidden = i;
					e.isJson = function (t) {
						if ('string' != typeof t) return !1;
						var e = t.trim()[0],
							n = t.trim().slice(-1);
						if (('{' === e && '}' === n) || ('[' === e && ']' === n))
							try {
								return JSON.parse(t), !0;
							} catch (t) {
								return !1;
							}
						return !1;
					};
					e.debounce = function (t, e) {
						var o;
						return (
							void 0 === e && (e = 200),
							function () {
								for (var i = [], r = 0; r < arguments.length; r++)
									i[r] = arguments[r];
								clearTimeout(o),
									(o = setTimeout(function () {
										t.apply(n, i);
									}, e));
							}
						);
					};
					e.dispatch = function (t, e, n) {
						void 0 === n && (n = null);
						var o = new CustomEvent(t, {
							detail: { payload: n },
							bubbles: !0,
							cancelable: !0,
							composed: !1,
						});
						e.dispatchEvent(o);
					};
					e.afterTransition = function (t, e) {
						var n = function () {
								e(), t.removeEventListener('transitionend', n, !0);
							},
							o = window.getComputedStyle(t),
							i = o.getPropertyValue('transition-duration');
						'none' !== o.getPropertyValue('transition-property') &&
						parseFloat(i) > 0
							? t.addEventListener('transitionend', n, !0)
							: e();
					};
					e.htmlToElement = function (t) {
						var e = document.createElement('template');
						return (t = t.trim()), (e.innerHTML = t), e.content.firstChild;
					};
					e.classToClassList = function (t, e, n, o) {
						void 0 === n && (n = ' '),
							void 0 === o && (o = 'add'),
							t.split(n).forEach(function (t) {
								return 'add' === o ? e.classList.add(t) : e.classList.remove(t);
							});
					};
					e.menuSearchHistory = {
						historyIndex: -1,
						addHistory: function (t) {
							this.historyIndex = t;
						},
						existsInHistory: function (t) {
							return t > this.historyIndex;
						},
						clearHistory: function () {
							this.historyIndex = -1;
						},
					};
				},
			},
			e = {};
		var n = (function n(o) {
			var i = e[o];
			if (void 0 !== i) return i.exports;
			var r = (e[o] = { exports: {} });
			return t[o].call(r.exports, r, r.exports, n), r.exports;
		})(234);
		return n;
	})(),
);
