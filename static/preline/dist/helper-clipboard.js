!(function (e, t) {
	if ('object' == typeof exports && 'object' == typeof module)
		module.exports = t();
	else if ('function' == typeof define && define.amd) define([], t);
	else {
		var o = t();
		for (var n in o) ('object' == typeof exports ? exports : e)[n] = o[n];
	}
})(self, () =>
	(() => {
		'use strict';
		var e = {};
		return (
			(() => {
				var t,
					o = e;
				/*
				 * @version: 2.7.0
				 * @author: Preline Labs Ltd.
				 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
				 * Copyright 2024 Preline Labs Ltd.
				 */ Object.defineProperty(o, '__esModule', { value: !0 });
				var n =
					null !==
						(t =
							null === window || void 0 === window
								? void 0
								: window.HS_CLIPBOARD_SELECTOR) && void 0 !== t
						? t
						: '.js-clipboard';
				window.addEventListener('load', function () {
					document.querySelectorAll(n).forEach(function (e) {
						new ClipboardJS(e, {
							text: function (e) {
								var t = e.dataset.clipboardText;
								if (t) return t;
								var o = e.dataset.clipboardTarget,
									n = document.querySelector(o);
								return 'SELECT' === n.tagName ||
									'INPUT' === n.tagName ||
									'TEXTAREA' === n.tagName
									? n.value
									: n.textContent;
							},
						}).on('success', function () {
							var t,
								o = e.querySelector('.js-clipboard-default'),
								n = e.querySelector('.js-clipboard-success'),
								i = e.querySelector('.js-clipboard-success-text'),
								r = e.dataset.clipboardSuccessText || '',
								l = e.closest('.hs-tooltip');
							i && ((t = i.textContent), (i.textContent = r)),
								o &&
									n &&
									((o.style.display = 'none'), (n.style.display = 'block')),
								l && window.HSTooltip.show(l),
								setTimeout(function () {
									i && t && (i.textContent = t),
										l && window.HSTooltip.hide(l),
										o && n && ((n.style.display = ''), (o.style.display = ''));
								}, 800);
						});
					});
				});
			})(),
			e
		);
	})(),
);
