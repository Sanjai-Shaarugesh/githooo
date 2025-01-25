!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(self,(()=>(()=>{"use strict";var t={961:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n){this.el=t,this.options=e,this.events=n,this.el=t,this.options=e,this.events={}}return t.prototype.createCollection=function(t,e){var n;t.push({id:(null===(n=null==e?void 0:e.el)||void 0===n?void 0:n.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.on=function(t,e){this.events[t]=e},t}();e.default=n},406:function(t,e,n){
/*
 * HSCopyMarkup
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var i,o=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var l=n(292),a=function(t){function e(e,n){var i=t.call(this,e,n)||this,o=e.getAttribute("data-hs-copy-markup"),s=o?JSON.parse(o):{},l=r(r({},s),n);return i.targetSelector=(null==l?void 0:l.targetSelector)||null,i.wrapperSelector=(null==l?void 0:l.wrapperSelector)||null,i.limit=(null==l?void 0:l.limit)||null,i.items=[],i.targetSelector&&i.init(),i}return o(e,t),e.prototype.elementClick=function(){this.copy()},e.prototype.deleteItemButtonClick=function(t){this.delete(t)},e.prototype.init=function(){var t=this;this.createCollection(window.$hsCopyMarkupCollection,this),this.onElementClickListener=function(){return t.elementClick()},this.setTarget(),this.setWrapper(),this.addPredefinedItems(),this.el.addEventListener("click",this.onElementClickListener)},e.prototype.copy=function(){if(this.limit&&this.items.length>=this.limit)return!1;this.el.hasAttribute("disabled")&&this.el.setAttribute("disabled","");var t=this.target.cloneNode(!0);this.addToItems(t),this.limit&&this.items.length>=this.limit&&this.el.setAttribute("disabled","disabled"),this.fireEvent("copy",t),(0,l.dispatch)("copy.hs.copyMarkup",t,t)},e.prototype.addPredefinedItems=function(){var t=this;Array.from(this.wrapper.children).filter((function(t){return!t.classList.contains("[--ignore-for-count]")})).forEach((function(e){t.addToItems(e)})),this.limit&&this.items.length>=this.limit&&this.el.setAttribute("disabled","disabled")},e.prototype.setTarget=function(){var t="string"==typeof this.targetSelector?document.querySelector(this.targetSelector).cloneNode(!0):this.targetSelector.cloneNode(!0);t.removeAttribute("id"),this.target=t},e.prototype.setWrapper=function(){this.wrapper="string"==typeof this.wrapperSelector?document.querySelector(this.wrapperSelector):this.wrapperSelector},e.prototype.addToItems=function(t){var e=this,n=t.querySelector("[data-hs-copy-markup-delete-item]");this.wrapper?this.wrapper.append(t):this.el.before(t),n&&(this.onDeleteItemButtonClickListener=function(){return e.deleteItemButtonClick(t)},n.addEventListener("click",this.onDeleteItemButtonClickListener)),this.items.push(t)},e.prototype.delete=function(t){var e=this.items.indexOf(t);-1!==e&&this.items.splice(e,1),t.remove(),this.fireEvent("delete",t),(0,l.dispatch)("delete.hs.copyMarkup",t,t)},e.prototype.destroy=function(){var t=this,e=this.wrapper.querySelectorAll("[data-hs-copy-markup-delete-item]");this.el.removeEventListener("click",this.onElementClickListener),e.length&&e.forEach((function(e){return e.removeEventListener("click",t.onDeleteItemButtonClickListener)})),this.el.removeAttribute("disabled"),this.target=null,this.wrapper=null,this.items=null,window.$hsCopyMarkupCollection=window.$hsCopyMarkupCollection.filter((function(e){return e.element.el!==t.el}))},e.getInstance=function(t,e){var n=window.$hsCopyMarkupCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return n?e?n:n.element:null},e.autoInit=function(){window.$hsCopyMarkupCollection||(window.$hsCopyMarkupCollection=[]),window.$hsCopyMarkupCollection&&(window.$hsCopyMarkupCollection=window.$hsCopyMarkupCollection.filter((function(t){var e=t.element;return document.contains(e.el)}))),document.querySelectorAll("[data-hs-copy-markup]:not(.--prevent-on-load-init)").forEach((function(t){if(!window.$hsCopyMarkupCollection.find((function(e){var n;return(null===(n=null==e?void 0:e.element)||void 0===n?void 0:n.el)===t}))){var n=t.getAttribute("data-hs-copy-markup"),i=n?JSON.parse(n):{};new e(t,i)}}))},e}(s(n(961)).default);window.addEventListener("load",(function(){a.autoInit()})),"undefined"!=typeof window&&(window.HSCopyMarkup=a),e.default=a},292:function(t,e){
/*
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var n=this;Object.defineProperty(e,"__esModule",{value:!0}),e.menuSearchHistory=e.classToClassList=e.htmlToElement=e.afterTransition=e.dispatch=e.debounce=e.isJson=e.isDirectChild=e.isFormElement=e.isParentOrElementHidden=e.isEnoughSpace=e.isIpadOS=e.isIOS=e.getZIndex=e.getClassPropertyAlt=e.getClassProperty=e.stringToBoolean=void 0,e.getHighestZIndex=function(t){var e=Number.NEGATIVE_INFINITY;return t.forEach((function(t){var n=i(t);"auto"!==n&&(n=parseInt(n,10))>e&&(e=n)})),e};e.stringToBoolean=function(t){return"true"===t};e.getClassProperty=function(t,e,n){return void 0===n&&(n=""),(window.getComputedStyle(t).getPropertyValue(e)||n).replace(" ","")};e.getClassPropertyAlt=function(t,e,n){void 0===n&&(n="");var i="";return t.classList.forEach((function(t){t.includes(e)&&(i=t)})),i.match(/:(.*)]/)?i.match(/:(.*)]/)[1]:n};var i=function(t){return window.getComputedStyle(t).getPropertyValue("z-index")};e.getZIndex=i;e.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isDirectChild=function(t,e){for(var n=t.children,i=0;i<n.length;i++)if(n[i]===e)return!0;return!1};e.isEnoughSpace=function(t,e,n,i,o){void 0===n&&(n="auto"),void 0===i&&(i=10),void 0===o&&(o=null);var r=e.getBoundingClientRect(),s=o?o.getBoundingClientRect():null,l=window.innerHeight,a=s?r.top-s.top:r.top,u=(o?s.bottom:l)-r.bottom,c=t.clientHeight+i;return"bottom"===n?u>=c:"top"===n?a>=c:a>=c||u>=c};e.isFormElement=function(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement};var o=function(t){return!!t&&("none"===window.getComputedStyle(t).display||o(t.parentElement))};e.isParentOrElementHidden=o;e.isJson=function(t){if("string"!=typeof t)return!1;var e=t.trim()[0],n=t.trim().slice(-1);if("{"===e&&"}"===n||"["===e&&"]"===n)try{return JSON.parse(t),!0}catch(t){return!1}return!1};e.debounce=function(t,e){var i;return void 0===e&&(e=200),function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];clearTimeout(i),i=setTimeout((function(){t.apply(n,o)}),e)}};e.dispatch=function(t,e,n){void 0===n&&(n=null);var i=new CustomEvent(t,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(i)};e.afterTransition=function(t,e){var n=function(){e(),t.removeEventListener("transitionend",n,!0)},i=window.getComputedStyle(t),o=i.getPropertyValue("transition-duration");"none"!==i.getPropertyValue("transition-property")&&parseFloat(o)>0?t.addEventListener("transitionend",n,!0):e()};e.htmlToElement=function(t){var e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild};e.classToClassList=function(t,e,n,i){void 0===n&&(n=" "),void 0===i&&(i="add"),t.split(n).forEach((function(t){return"add"===i?e.classList.add(t):e.classList.remove(t)}))};e.menuSearchHistory={historyIndex:-1,addHistory:function(t){this.historyIndex=t},existsInHistory:function(t){return t>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},e={};var n=function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}(406);return n})()));