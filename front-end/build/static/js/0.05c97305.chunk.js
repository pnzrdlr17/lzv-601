(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{48:function(t,e,r){"use strict";r.d(e,"d",(function(){return a})),r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return c})),r.d(e,"e",(function(){return u}));var n=r(54),a=function(){return{type:"REQUIRE"}},o=function(t){return{type:"MINLENGTH",val:t}},i=function(t){return{type:"MAXLENGTH",val:t}},c=function(){return{type:"EMAIL"}},u=function(t,e){var r,a=!0,o=Object(n.a)(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;"REQUIRE"===i.type&&(a=a&&t.trim().length>0),"MINLENGTH"===i.type&&(a=a&&t.trim().length>=i.val),"MAXLENGTH"===i.type&&(a=a&&t.trim().length<=i.val),"MIN"===i.type&&(a=a&&+t>=i.val),"MAX"===i.type&&(a=a&&+t<=i.val),"EMAIL"===i.type&&(a=a&&/^\S+@\S+\.\S+$/.test(t))}}catch(c){o.e(c)}finally{o.f()}return a}},50:function(t,e,r){"use strict";var n=r(8),a=r(46),o=r(0),i=r.n(o),c=r(48),u=(r(55),function(t,e){switch(e.type){case"CHANGE":return Object(a.a)(Object(a.a)({},t),{},{value:e.val,isValid:Object(c.e)(e.val,e.validators)});case"TOUCH":return Object(a.a)(Object(a.a)({},t),{},{isTouched:!0});default:return t}});e.a=function(t){var e=Object(o.useReducer)(u,{value:t.initialValue||"",isValid:t.initialValid||!1,isTouched:!1}),r=Object(n.a)(e,2),a=r[0],c=r[1],l=t.id,s=t.onInput,f=a.value,h=a.isValid;Object(o.useEffect)((function(){s(l,f,h)}),[l,s,f,h]);var p=function(e){c({type:"CHANGE",val:e.target.value,validators:t.validators})},v=function(){c({type:"TOUCH"})},d="input"===t.element?i.a.createElement("input",{id:t.id,type:t.type,placeholder:t.placeholder,onChange:p,onBlur:v,value:a.value}):i.a.createElement("textarea",{id:t.id,rows:t.rows||3,onChange:p,onBlur:v,value:a.value});return i.a.createElement("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid")},i.a.createElement("label",{htmlFor:t.id},t.label),d,!a.isValid&&a.isTouched&&i.a.createElement("p",null,t.errorText))}},51:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(8),a=r(49),o=r(46),i=r(0),c=function(t,e){switch(e.type){case"INPUT_CHANGE":var r=!0;for(var n in t.inputs)t.inputs[n]&&(r=n===e.inputId?r&&e.isValid:r&&t.inputs[n].isValid);return Object(o.a)(Object(o.a)({},t),{},{inputs:Object(o.a)(Object(o.a)({},t.inputs),{},Object(a.a)({},e.inputId,{value:e.value,isValid:e.isValid})),isValid:r});case"SET_DATA":return{inputs:e.inputs,isValid:e.formIsValid};default:return t}},u=function(t,e){var r=Object(i.useReducer)(c,{inputs:t,isValid:e}),a=Object(n.a)(r,2),o=a[0],u=a[1];return[o,Object(i.useCallback)((function(t,e,r){u({type:"INPUT_CHANGE",value:e,isValid:r,inputId:t})}),[]),Object(i.useCallback)((function(t,e){u({type:"SET_DATA",inputs:t,formIsValid:e})}),[])]}},52:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(47),a=r(8),o=r(0);function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function s(t,e,r,a){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new k(a||[]);return n(i,"_invoke",{value:O(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=s;var h={};function p(){}function v(){}function d(){}var m={};l(m,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(N([])));g&&g!==e&&r.call(g,o)&&(m=g);var b=d.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e((function(a,i){!function n(a,o,i,c){var u=f(t[a],t,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function O(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=f(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=l(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),l(b,u,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var c=function(){var t=Object(o.useState)(!1),e=Object(a.a)(t,2),r=e[0],c=e[1],u=Object(o.useState)(),l=Object(a.a)(u,2),s=l[0],f=l[1],h=Object(o.useRef)([]),p=Object(o.useCallback)(function(){var t=Object(n.a)(i().mark((function t(e){var r,n,a,o,u,l,s=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2&&void 0!==s[2]?s[2]:null,a=s.length>3&&void 0!==s[3]?s[3]:{},c(!0),o=new AbortController,h.current.push(o),t.prev=6,t.next=9,fetch(e,{method:r,headers:a,body:n,signal:o.signal});case 9:return u=t.sent,t.next=12,u.json();case 12:if(l=t.sent,h.current=h.current.filter((function(t){return t!==o})),u.ok){t.next=16;break}throw new Error(l.message);case 16:return c(!1),t.abrupt("return",l);case 20:throw t.prev=20,t.t0=t.catch(6),f(t.t0.message),c(!1),t.t0;case 25:case"end":return t.stop()}}),t,null,[[6,20]])})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(o.useEffect)((function(){return function(){h.current.forEach((function(t){return t.abort()}))}}),[]),{isLoading:r,gotError:s,sendRequest:p,clearError:function(){f(null)}}}},53:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(4),i=r.n(o),c=r(45),u=r(18),l=(r(56),function(t){var e=a.a.createElement("div",{className:"modal ".concat(t.className),style:t.style},a.a.createElement("header",{className:"modal__header ".concat(t.headerClass)},a.a.createElement("h2",null,t.header)),a.a.createElement("form",{onSubmit:t.onSubmit?t.onSubmit:function(t){return t.preventDefault()}},a.a.createElement("div",{className:"modal__content ".concat(t.contentClass)},t.children),a.a.createElement("footer",{className:"modal__footer ".concat(t.footerClass)},t.footer)));return i.a.createPortal(e,document.getElementById("modal-hook"))}),s=function(t){return a.a.createElement(a.a.Fragment,null,t.show&&a.a.createElement(u.a,{onClick:t.onCancel}),a.a.createElement(c.a,{in:t.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},a.a.createElement(l,t)))},f=r(15);e.a=function(t){return a.a.createElement(s,{onCancel:t.onClear,header:"An Error Occurred!",show:!!t.error,footer:a.a.createElement(f.a,{onClick:t.onClear},"Okay")},a.a.createElement("p",null,t.error))}},55:function(t,e,r){},56:function(t,e,r){},57:function(t,e,r){"use strict";var n=r(8),a=r(0),o=r.n(a),i=r(15);r(62);e.a=function(t){var e=Object(a.useState)(),r=Object(n.a)(e,2),c=r[0],u=r[1],l=Object(a.useState)(!1),s=Object(n.a)(l,2),f=s[0],h=s[1],p=Object(a.useRef)();return o.a.createElement("div",{className:"form-control"},o.a.createElement("input",{id:t.id,style:{display:"none"},ref:p,type:"file",accept:t.accept,onChange:function(e){var r,n=f;e.target.files&&1===e.target.files.length?(r=e.target.files[0],u(r.name),h(!0),n=!0):(h(!1),n=!1),t.onInput(t.id,r,n)}}),o.a.createElement("div",{className:"file-upload"},c&&o.a.createElement("span",null,c),o.a.createElement(i.a,{type:"button",size:"small",onClick:function(){p.current.click()}},"SELECT FILE")),!f&&o.a.createElement("p",null,t.errorText))}},58:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(47),i=r(70),c=r(8);function u(){u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function s(t,e,r,a){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new k(a||[]);return n(i,"_invoke",{value:O(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=s;var h={};function p(){}function v(){}function d(){}var m={};l(m,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(N([])));g&&g!==e&&r.call(g,o)&&(m=g);var b=d.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e((function(a,i){!function n(a,o,i,c){var u=f(t[a],t,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function O(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=f(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),l(b,c,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}r(63);var l=function(t){return"plain"===t.format?a.a.createElement("li",{className:"char-item ".concat(t.type)},t.value):0===t.type?a.a.createElement("li",{className:"code-item-circle"},t.data):a.a.createElement("li",{className:"code-item-block"},t.dist,"-",t.len)},s=(r(64),function(t){if("plain"===t.format){var e=0;return a.a.createElement("ul",{className:"char-list"},t.value.map((function(r){return a.a.createElement(l,{key:e++,format:t.format,value:r.val,type:r.byteState})})))}var r=0;return a.a.createElement("ul",{className:"code-list"},t.value.map((function(e){return 0===e.type?a.a.createElement(l,{key:r++,format:t.format,type:e.type,data:e.data}):a.a.createElement(l,{key:r++,format:t.format,type:e.type,dist:e.dist,len:e.len})})))}),f=r(15),h=r(66),p=r(72);r(65),e.a=function(t){var e=function(t,e){var r=t.length,a=t,l=Object(n.useState)(Array.from(t).map((function(t){return{val:t,byteState:"unv"}}))),s=Object(c.a)(l,2),f=s[0],h=s[1],p=Object(n.useState)([]),v=Object(c.a)(p,2),d=v[0],m=v[1],y=Object(n.useState)(!1),g=Object(c.a)(y,2),b=g[0],w=g[1],E=Object(n.useCallback)((function(t){if(f&&0!==f.length){for(var e=Object(i.a)(f),n=0;n<Math.min(t-5,r);n++)e[n].byteState="vis";for(var a=Math.max(t-5,0);a<Math.min(t,r);a++)e[a].byteState="inWindow";t<r&&(e[t].byteState="curr"),h(e)}}),[f,r]),O=Object(n.useCallback)((function(t){for(var e=Object(i.a)(f),r=0;r<Math.min(t,a.length);r++)e[r].byteState="vis";t<a.length&&(e[t].byteState="curr"),h(e)}),[f,a]),j=Object(n.useCallback)((function(t){m((function(e){return[].concat(Object(i.a)(e),[t])}))}),[]),x=Object(n.useCallback)((function(t,e,r){for(var n=Object(i.a)(f),a=t-e;a<r;a++)n[a].byteState=a!==t?"match":"curr-match";h(n)}),[f]),L=Object(n.useCallback)((function(t,e){for(var r=Object(i.a)(f),n=t-e;n<Math.min(a.length,t);n++)r[n].byteState="match";h(r)}),[f,a]),k=Object(n.useCallback)((function(t){var e=Object(i.a)(f);e[t].byteState="unique",h(e)}),[f]),N=Object(n.useCallback)((function(t){for(var e=Math.min(t+8,r+1),n=-1,o=-1,i=t+2;i<e;i++)for(var c=Math.max(0,t-5),u=a.slice(t,i),l=c;l<t;l++){for(var s=Math.floor(u.length/(t-l)),f=u.length%(t-l),h="",p=0;p<s;p++)h+=a.slice(l,t);f>0&&(h+=a.slice(l,l+f)),h===u&&u.length>o&&(n=t-l,o=u.length)}return n>0&&o>0?[n,o]:null}),[a,r]),S=Object(n.useCallback)(Object(o.a)(u().mark((function t(){var e,n,a,o,i,l;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.next=3,new Promise((function(t){return setTimeout(t,500)}));case 3:e=0;case 4:if(!(e<r)){t.next=26;break}return E(e),t.next=8,new Promise((function(t){return setTimeout(t,450)}));case 8:if(!(a=N(e))){t.next=18;break}return o=Object(c.a)(a,2),i=o[0],l=o[1],x(e,i,l),t.next=14,new Promise((function(t){return setTimeout(t,800)}));case 14:n={type:1,dist:i,len:l},e+=l,t.next=23;break;case 18:return k(e),t.next=21,new Promise((function(t){return setTimeout(t,800)}));case 21:n={type:0,data:f[e].val},e+=1;case 23:j(n),t.next=4;break;case 26:E(r+5+1),w(!1);case 28:case"end":return t.stop()}}),t)}))),[r,E,N,j,x,k,f]),_=Object(n.useCallback)(Object(o.a)(u().mark((function t(){var e,r,n,o,i,c,l,s,h;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(w(!0),e=[],r=256,n=Math.pow(2,parseInt(12)),o={},i=0;i<r;i++)o[String.fromCharCode(i)]=i;c="",l=0;case 8:if(!(l<a.length)){t.next=32;break}return O(l),t.next=12,new Promise((function(t){return setTimeout(t,450)}));case 12:if(s=a[l],void 0===o[h=c+s]){t.next=18;break}c=h,t.next=29;break;case 18:return e.push(o[c]),console.log(o[c],c,l,c.length),L(l,c.length),t.next=23,new Promise((function(t){return setTimeout(t,450)}));case 23:return console.log(f),t.next=26,new Promise((function(t){return setTimeout(t,800)}));case 26:j({type:1,dist:o[c],len:c}),r<=n&&(o[h]=r++),c=s;case 29:l++,t.next=8;break;case 32:if(void 0===o[c]){t.next=38;break}return e.push(o[c]),L(a.length,c.length),t.next=37,new Promise((function(t){return setTimeout(t,500)}));case 37:j({type:1,dist:o[c],len:c});case 38:O(a.length+1),w(!1);case 40:case"end":return t.stop()}}),t)}))),[O,a,L,f,j]);return{inputArr:f,outputArr:d,compressor:"lz77"===e?S:_,isAnimRunning:b}}(t.value,t.mode),r=e.inputArr,l=e.outputArr,v=e.compressor,d=e.isAnimRunning,m=Object(n.useRef)();return a.a.createElement("div",{className:"vis-contain"},a.a.createElement("div",{className:"text-contain"},a.a.createElement("span",{className:"v-span1"},"Plain-text: "),a.a.createElement(s,{value:r,format:"plain"})),a.a.createElement("div",{className:"code-contain"},a.a.createElement("span",{className:"v-span2",ref:m},"Code-word:"," "),a.a.createElement(s,{value:l,format:"code"})),a.a.createElement("div",{className:"btnHolder"},a.a.createElement(f.a,{center:!0,onClick:function(t){t.target.style.display="none",m.current.style.display="block",v()}},!d&&a.a.createElement(p.a,{icon:h.a}))))}},62:function(t,e,r){},63:function(t,e,r){},64:function(t,e,r){},65:function(t,e,r){}}]);
//# sourceMappingURL=0.05c97305.chunk.js.map