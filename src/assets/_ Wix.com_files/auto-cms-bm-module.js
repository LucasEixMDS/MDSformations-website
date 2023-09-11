!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("BusinessManagerAPI"),require("reactModuleContainer"),require("React"),require("ReactDOM"),require("Sentry")):"function"==typeof define&&define.amd?define("AutoCMS",["BusinessManagerAPI","reactModuleContainer","React","ReactDOM","Sentry"],e):"object"==typeof exports?exports.AutoCMS=e(require("BusinessManagerAPI"),require("reactModuleContainer"),require("React"),require("ReactDOM"),require("Sentry")):(t.AutoCMS=t.AutoCMS||{},t.AutoCMS["auto-cms-bm-module"]=e(t.BusinessManagerAPI,t.reactModuleContainer,t.React,t.ReactDOM,t.Sentry))}(this,(function(t,e,n,r,o){return function(){var i={21166:function(t,e,n){var r;t=n.nmd(t),function(o){var i=e,c=(t&&t.exports,"object"==typeof n.g&&n.g);c.global!==c&&c.window;var a=function(t){this.message=t};(a.prototype=new Error).name="InvalidCharacterError";var u=function(t){throw new a(t)},s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=/[\t\n\f\r ]/g,f={encode:function(t){t=String(t),/[^\0-\xFF]/.test(t)&&u("The string to be encoded contains characters outside of the Latin1 range.");for(var e,n,r,o,i=t.length%3,c="",a=-1,l=t.length-i;++a<l;)e=t.charCodeAt(a)<<16,n=t.charCodeAt(++a)<<8,r=t.charCodeAt(++a),c+=s.charAt((o=e+n+r)>>18&63)+s.charAt(o>>12&63)+s.charAt(o>>6&63)+s.charAt(63&o);return 2==i?(e=t.charCodeAt(a)<<8,n=t.charCodeAt(++a),c+=s.charAt((o=e+n)>>10)+s.charAt(o>>4&63)+s.charAt(o<<2&63)+"="):1==i&&(o=t.charCodeAt(a),c+=s.charAt(o>>2)+s.charAt(o<<4&63)+"=="),c},decode:function(t){var e=(t=String(t).replace(l,"")).length;e%4==0&&(e=(t=t.replace(/==?$/,"")).length),(e%4==1||/[^+a-zA-Z0-9/]/.test(t))&&u("Invalid character: the string to be decoded is not correctly encoded.");for(var n,r,o=0,i="",c=-1;++c<e;)r=s.indexOf(t.charAt(c)),n=o%4?64*n+r:r,o++%4&&(i+=String.fromCharCode(255&n>>(-2*o&6)));return i},version:"1.0.0"};void 0===(r=function(){return f}.call(e,n,e,t))||(t.exports=r)}()},61442:function(t,e,n){"use strict";n.d(e,{AutoCMSLazyPageComponent:function(){return d}});var r,o=n(95772),i=JSON.parse('{"A":"auto-cms-externals"}'),c=n(7481),a=n(29430),u=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}u((r=r.apply(t,e||[])).next())}))},l=function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},f=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c},p=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))},d=function(t){function e(e){var n=this,r="editor"===e.viewMode?["".concat(e.config.topology.staticsBaseUrl,"/services/js-platform-editor-sdk/").concat(c.qP,"/lib/editorSDK.min.js")]:[],u=a.yv?["".concat(e.config.topology.autoCmsStaticsUrl).concat(c.Yk,".bundle.css")]:[];return n=t.call(this,e,{files:[p(p(p([],f(r),!1),["".concat(e.config.topology.autoCmsStaticsUrl).concat(i.A,".js"),"".concat(e.config.topology.autoCmsStaticsUrl).concat(c.Yk,".js")],!1),f(u),!1)],component:c.Yk,resolve:function(){return s(n,void 0,Promise,(function(){return l(this,(function(t){switch(t.label){case 0:return[4,o.ModuleRegistry.invoke(c.tt)];case 1:return[2,{experiments:t.sent()}]}}))}))}})||this}return u(e,t),e}(o.ReactLazyComponent)},29430:function(t,e,n){"use strict";n.d(e,{dM:function(){return a},jp:function(){return c},yG:function(){return i},yv:function(){return o}});var r=n(34406),o=!0,i=!1,c=r.env.IS_JEST,a=r.env.IS_BO},34406:function(t){var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var a,u=[],s=!1,l=-1;function f(){s&&a&&(s=!1,a.length?u=a.concat(u):l=-1,u.length&&p())}function p(){if(!s){var t=c(f);s=!0;for(var e=u.length;e;){for(a=u,u=[];++l<e;)a&&a[l].run();l=-1,e=u.length}a=null,s=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{return n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new d(t,e)),1!==u.length||s||c(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=y,r.addListener=y,r.once=y,r.off=y,r.removeListener=y,r.removeAllListeners=y,r.emit=y,r.prependListener=y,r.prependOnceListener=y,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},24197:function(e){"use strict";e.exports=t},1024:function(t){"use strict";t.exports=n},30314:function(t){"use strict";t.exports=r},49500:function(t){"use strict";t.exports=o},95772:function(t){"use strict";t.exports=e},7481:function(t){"use strict";t.exports=JSON.parse('{"Yk":"auto-cms-page-component","yZ":"wix-databases-lazy-page-component","v3":"collection-view-component","pW":"collection-view-lazy-component","tt":"auto-cms.getActiveExperiments","qP":"1.262.0"}')}},c={};function a(t){var e=c[t];if(void 0!==e)return e.exports;var n=c[t]={id:t,loaded:!1,exports:{}};return i[t].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t};var u={};return function(){"use strict";a.r(u);var t=a(24197),e=a(95772),n=a(1024),r=a.n(n),o=a(30314),i=a(7481),c=JSON.parse('{"t4":"autoCMS.embed"}'),s=function(){return e.ModuleRegistry.registerMethod(c.t4,(function(){return function(t){!function(t){var n=t.node,c=t.configuration,a=t.historyType,u=void 0===a?"memory":a,s=e.ModuleRegistry.component(i.yZ);if(!s)throw new Error("AutoCMSPageComponent is undefined");if(!n)throw new Error("Node to render AutoCMSPageComponent is undefined.");(0,o.render)(r().createElement(s,{historyType:u,configuration:c,integration:"embedded-view"}),n)}(t)}}))},l=a(61442),f=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),p=function(t){function e(e){return t.call(this,e,{files:[["https://static.parastorage.com/unpkg/ag-grid-enterprise@16.0.1/dist/ag-grid-enterprise.min.noStyle.js","https://static.parastorage.com/unpkg/codemirror@5.30.0/lib/codemirror.js","https://static.parastorage.com/unpkg/codemirror@5.30.0/mode/xml/xml.js","https://static.parastorage.com/unpkg/codemirror@5.30.0/mode/javascript/javascript.js","https://static.parastorage.com/unpkg/codemirror@5.30.0/addon/lint/lint.js","https://static.parastorage.com/unpkg/codemirror@5.30.0/addon/fold/foldcode.js","https://static.parastorage.com/unpkg/codemirror@5.30.0/addon/fold/foldgutter.js","https://static.parastorage.com/unpkg/codemirror@5.30.0/addon/fold/brace-fold.js","https://static.parastorage.com/unpkg/codemirror@5.30.0/addon/edit/matchbrackets.js","https://static.parastorage.com/unpkg/@wix/wix-base-ui@3.0.0/dist/base-ui.js","https://static.parastorage.com/unpkg/@wix/wix-richtext@3.258.0/dist/bundleWixRichText.js","https://static.parastorage.com/unpkg/@wix/wix-base-ui@3.0.0/dist/base-ui.js","".concat(e.config.topology.wixDatabasesLegacyStaticsUrl,"statics/").concat(i.v3,".js")],"".concat(e.config.topology.wixDatabasesLegacyStaticsUrl,"statics/").concat(i.v3,".css")],component:i.v3})||this}return f(e,t),e}(e.ReactLazyComponent),d=function(t,e){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},d(t,e)};function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}d(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var h=function(){return h=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},h.apply(this,arguments)};function v(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}u((r=r.apply(t,e||[])).next())}))}function g(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}Object.create;function m(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}Object.create;"function"==typeof SuppressedError&&SuppressedError;var b;!function(t){t.Default="",t.OwnerAccount="owner-account"}(b||(b={}));var w="__WIXEXP_USE_NEW_API",x="__WIXEXP_CONDUCTION_METHOD_",S="__WIXEXP_OWNER_ACCOUNT_ID_",C="__WIXEXP_LOGGED_IN_USER_ID_";function O(t,e,n){var r,o;if("undefined"!=typeof self)if("function"==typeof n){if(void 0!==n(self[e]))return(r={})[t]=n(self[e]),r}else if(typeof self[e]===n)return(o={})[t]=self[e],o;return{}}var _=function(t){return Object.keys(b).filter((function(e){return b[e]===t})).length>0?t:void 0};function I(t){return function(t){return t.conductionMethod===b.OwnerAccount&&t.siteOwnerId&&t.loggedInUserId}(t)?{forSiteOwner:{siteOwnerId:t.siteOwnerId,loggedInUserId:t.loggedInUserId}}:{}}var A=function(t){return"string"==typeof t&&""!==t};function E(t){void 0===t&&(t={});var e=t.forSiteOwner,n=t.forSiteVisitors,r=t.overrideCriteria,o="";if(["forSiteOwner","forSiteVisitors"].reduce((function(e,n){return t[n]?e+1:e}),0)>1)throw new Error('Only one of "forSiteOwner" or "forSiteVisitors" is accepted.');return e&&(o+=function(t){return A(t.loggedInUserId)&&A(t.siteOwnerId)?"&"+"requestContext.forSiteOwner.loggedInUserId=".concat(t.loggedInUserId,"&")+"requestContext.forSiteOwner.siteOwnerId=".concat(t.siteOwnerId):""}(e)),n&&(o+=function(t){return A(t.visitorId)&&A(t.siteOwnerId)?"&"+"requestContext.forSiteVisitors.visitorId=".concat(t.visitorId,"&")+"requestContext.forSiteVisitors.siteOwnerId=".concat(t.siteOwnerId):""}(n)),r&&(o+=function(t){return A(t.entityId)?"&requestContext.overrideCriteria.entityId=".concat(t.entityId):""}(r)),o}function M(t){if("string"==typeof t)try{return JSON.parse(t)}catch(t){}return t}var j={conductAllInScope:"/_api/wix-laboratory-server/v1/laboratory/platform/conductAllInScope",conductExperiment:"/_api/wix-laboratory-server/v1/laboratory/platform/conductExperiment"},P={conductAllInScope:"/_api/wix-laboratory-server/laboratory/conductAllInScope",conductExperiment:"/_api/wix-laboratory-server/laboratory/conductExperiment"};function U(t,e){return-1!==t.indexOf(e?j.conductAllInScope:P.conductAllInScope)}var k=function(t,e,n){return void 0===t&&(t=""),void 0===e&&(e=""),void 0===n&&(n=!1),n?"".concat(j.conductExperiment,"?key=").concat(encodeURIComponent(t),"&fallbackValue=").concat(encodeURIComponent(e)):"".concat(P.conductExperiment,"?key=").concat(encodeURIComponent(t),"&fallback=").concat(encodeURIComponent(e))};function T(t,e,n){var r="".concat(k(e,"",n));return t.includes(r)}var R=function(){function t(){this.urlMap=new Map,this.pendingUrlMap=new Map}return t.prototype.addUrlRequest=function(t,e){return v(this,void 0,void 0,(function(){var n=this;return g(this,(function(r){switch(r.label){case 0:return this.pendingUrlMap.set(t,e),[4,e.then((function(e){return n.addUrlResponse(t,e)}))];case 1:return r.sent(),[2]}}))}))},t.prototype.addUrlResponse=function(t,e){this.urlMap.set(t,e)},t.prototype.getUrlResponse=function(t){return this.urlMap.get(t)},t.prototype.getUrlRequest=function(t){return this.pendingUrlMap.get(t)},t.prototype.getExperimentValue=function(t,e){var n,r;try{for(var o=m(this.urlMap.keys()),i=o.next();!i.done;i=o.next()){var c=i.value;if(T(c,t,e))return this.urlMap.get(c);if(U(c,e)){var a=M(this.urlMap.get(c));if("object"==typeof a&&t in a)return a[t]}}}catch(t){n={error:t}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},t}();!function(){function t(){}t.prototype.addUrlRequest=function(){},t.prototype.addUrlResponse=function(){},t.prototype.getUrlResponse=function(){},t.prototype.getUrlRequest=function(){},t.prototype.getExperimentValue=function(){}}();function N(){return void 0===self.experimentsCacheV2&&(self.experimentsCacheV2=new R),self.experimentsCacheV2}function q(){return"object"==typeof self?self:a.g}function W(t){var e=function(t){return function(){var t=function(){if("object"==typeof document)return document}();if(t&&t.cookie)return decodeURIComponent(t.cookie).split(";");return[]}().filter((function(e){return t===e.split("=")[0].trim()}))[0]}(t);return e?e.split("=")[1]:""}var L="XSRF-TOKEN",D="x-xsrf-token";var V="x-wix-brand";function H(){var t,e=function(){var t=q();if(t&&t.commonConfig&&"string"==typeof t.commonConfig.brand)return t.commonConfig.brand;return""}();return(t={})[V]=e,t}function X(){return function(){var t=q();if(t&&t.consentPolicyManager&&"function"==typeof t.consentPolicyManager._getConsentPolicyHeader)return t.consentPolicyManager._getConsentPolicyHeader();return}()||function(){var t=q();if(t&&t.Wix&&t.Wix.Utils&&"function"==typeof t.Wix.Utils._getConsentPolicyHeader)return t.Wix.Utils._getConsentPolicyHeader();return}()||{}}var B=a(34406);function F(){return void 0!==B&&null!=(null===(t=B.versions)||void 0===t?void 0:t.node)&&(!!B.env.TEAMCITY_VERSION||!!B.env.BUILDKITE);var t}var J=a(34406);var z=["consentPolicy","consentPolicyHeader"],G={bsi:"BSI"};var Y=function(){var t,e=function(){var t=q(),e=null==t?void 0:t.commonConfig;if(!e)return null;var n={},r=!1;return Object.keys(e).forEach((function(t){var o=G[t];o?(n[o]=e[t],r=!0):z.indexOf(t)<0&&"function"!=typeof e[t]&&(n[t]=e[t],r=!0)})),r?n:null}(),n=e?JSON.stringify(e):"";return(t={}).commonConfig=encodeURIComponent(n),t},Z=a(21166),K=a.n(Z),$="x-wix-linguist";function Q(t){var e,n=t.lang,r=t.locale,o=t.isPrimaryLanguage,i=t.signedInstance;if(function(t){var e=t.lang,n=t.locale,r=t.isPrimaryLanguage;return e&&n&&/^(true|false)$/.test((null==r?void 0:r.toString())||"")}({lang:n,locale:r,isPrimaryLanguage:o})){var c=function(t){try{var e=(null==t?void 0:t.startsWith("wixcode"))?null==t?void 0:t.split(".")[2]:null==t?void 0:t.split(".")[1];if(e)return JSON.parse(K().decode(e)).instanceId}catch(t){}}(i);if(void 0!==c)return(e={})[$]=[n,r,null==o?void 0:o.toString(),c].join("|"),e}return{}}!function(t){function e(e,n){return t.call(this,"WixHeadersParsingError: ".concat(e," evaluated with ").concat(JSON.stringify(n)," but should be a string!"))||this}y(e,t)}(Error);var tt=function(t){function e(e,n,r){return t.call(this,"WixHeadersValidationError: expected ".concat(n," to be ").concat(e," but got ").concat(JSON.stringify(r)))||this}return y(e,t),e}(Error);function et(t){void 0===t&&(t={}),function(t){(function(t,e){if("boolean"!=typeof e)throw new tt("boolean",t,e)})("opts.csrf",t.csrf),function(t,e){if("string"!=typeof e)throw new tt("string",t,e)}("opts.signedInstance",t.signedInstance)}(t=h({csrf:!0,signedInstance:""},t));var e,n,r,o,i,c=[H(),X(),(i=t.signedInstance,{authorization:i}),(e=t.artifactId,o=null!==(r=null!==(n=J.env.ARTIFACT_ID)&&void 0!==n?n:J.env.APP_NAME)&&void 0!==r?r:"",{"X-Wix-Client-Artifact-Id":null!=e?e:F()?"":o}),Y(),Q(h({signedInstance:t.signedInstance},t.multilingualOptions))];return t.csrf&&c.push(function(){var t,e=W(L);return(t={})[D]=e,t}()),c.filter((function(t){return Object.values(t).every((function(t){return t}))})).reduce((function(t,e){return h(h({},t),e)}),{})}var nt=function(){function t(t){var e;this.experiments=null!==(e=t.experiments)&&void 0!==e?e:{}}return t.prototype.get=function(t){return this.experiments[t]},t.prototype.enabled=function(t){return"true"===this.get(t)},t.prototype.pending=function(){return!1},t.prototype.ready=function(){return Promise.resolve()},t.prototype.all=function(){return this.experiments},t}(),rt=function(){},ot=function(t){function e(e){void 0===e&&(e={});var n=t.call(this,e)||this,r=h(h(h(h({},O("useNewApi",w,"boolean")),O("conductionMethod",x,_)),O("siteOwnerId",S,"string")),O("loggedInUserId",C,"string"));return n.useNewApi=void 0!==e.useNewApi?e.useNewApi:r.useNewApi||!1,n.experiments=e.experiments||{},n.loaders=new Map,n.baseUrl=(n.useNewApi,e.baseUrl||""),n.requestContext=e.requestContext||I(r),n.onError=e.onError||rt,e.scope&&n.load(e.scope),e.scopes&&e.scopes.forEach(n.load.bind(n)),n}return y(e,t),e.prototype.add=function(t){this.experiments=h(h({},this.experiments),t)},e.prototype._addLoader=function(t,e){var n=this;return this.loaders.set(t,e),e.then((function(){n.loaders.delete(t)})),e},e.prototype._getUrlWithFallback=function(t,e){var n=this,r=N().getUrlResponse(t);if(void 0!==r)return Promise.resolve(r);var o=N().getUrlRequest(t);if(void 0!==o)return o;var i=this.loaders.get(t);if(void 0!==i)return i;var c=function(t){return new Promise((function(e,n){var r=et(),o=new XMLHttpRequest;o.open("GET",t,!0),Object.keys(r).forEach((function(t){return o.setRequestHeader(t,r[t])})),o.responseType="text",o.withCredentials=!0,o.onload=function(){o.status>=200&&o.status<400?e(o.responseText):n(new Error("Failed to load ".concat(t,", status ").concat(o.status)))},o.onerror=function(){return n(new Error("Failed to load ".concat(t)))},o.send()}))}(t).catch((function(t){return n.onError(t),e}));return N().addUrlRequest(t,c),c},e.prototype.load=function(t){var e=this,n=function(t,e){return void 0===t&&(t=""),void 0===e&&(e=!1),e?"".concat(j.conductAllInScope,"?scope=").concat(encodeURIComponent(t)):"".concat(P.conductAllInScope,"?scope=").concat(encodeURIComponent(t))}(t,this.useNewApi),r=this.useNewApi?E(this.requestContext):"",o="".concat(this.baseUrl).concat(n).concat(r),i=this._getUrlWithFallback(o,"{}").then((function(t){return M(t)})).then((function(t){return e.useNewApi?t.values:t})).then((function(t){return e.add(t),t}));return this._addLoader(o,i)},e.prototype.conduct=function(t,e){var n=this,r=N().getExperimentValue(t,this.useNewApi);if(void 0!==r)return this._addConductResult(t,r);var o=k(t,e,this.useNewApi),i=this.useNewApi?E(this.requestContext):"",c="".concat(this.baseUrl).concat(o).concat(i),a=this._getUrlWithFallback(c,null!=e?e:"").then((function(e){return n._addConductResult(t,e)}));return this._addLoader(c,a)},e.prototype.pending=function(){return!!this.loaders.size},e.prototype.ready=function(){return Promise.all(Array.from(this.loaders.values()))},e.prototype._addConductResult=function(t,e){var n,r=this.useNewApi?JSON.parse(e).value:e;return this.add(((n={})[t]=r,n)),Promise.resolve(r)},e}(nt),it=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}u((r=r.apply(t,e||[])).next())}))},ct=function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},at=function(){return it(void 0,void 0,void 0,(function(){var t;return ct(this,(function(e){switch(e.label){case 0:return[4,(t=new ot({scope:"wix-code"})).ready()];case 1:return e.sent(),[2,t.all()]}}))}))},ut=a(49500),st=a(29430),lt=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ft=function(t){function e(n){var r=t.call(this,n)||this;return r.ignoreSentry=!1,Object.setPrototypeOf(r,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return lt(e,t),e.prototype.ignore=function(){return this.ignoreSentry=!0,this},e}(Error),pt={dsn:"https://e41bc3a9c6584d4eab1f69cda756b008@sentry.wixpress.com/187",release:"3bd9d16b9407f25e16da656066582ccece7d845236c494f0044551ec",environment:st.dM?"start:bo":st.jp?"testing":st.yG?"development":st.yv?"production":"unknown",beforeSend:function(t,e){var n,r=(null==e?void 0:e.originalException)||(null==e?void 0:e.syntheticException),o=r instanceof Error&&((n=r)instanceof ft&&n.ignoreSentry);return!st.yv||st.dM||st.jp?(console.error("Sentry error ".concat(o?" (ignored)":""),r),null):o?null:t}},dt=new ut.Hub(new ut.BrowserClient(pt));var yt=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();(0,t.registerModule)(t.ModuleId.WixCodeDatabase,function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return yt(r,n),r.prototype.register=function(){this.registerComponentWithModuleParams(i.yZ,l.AutoCMSLazyPageComponent),this.registerComponentWithModuleParams(i.pW,p),s(),e.ModuleRegistry.registerMethod(i.tt,(function(){return at}))},r.prototype.init=function(e){var n=e.userId,r=e.viewMode,o=function(t,e,n,r){return dt.configureScope((function(o){o.setUser({id:t});var i={msid:e,mode:"dashboard"===n?"business-manager":n};n&&(i.viewMode=n),r&&(i.locale=r),o.setTags(i)})),dt.getClient()}(n,e.metaSiteId,r,e.accountLanguage);(0,t.registerPageComponentMonitors)(t.PageComponentId.WixCodeDatabase,{sentryClient:o})},r}(t.BusinessManagerModule))}(),u}()}));
//# sourceMappingURL=auto-cms-bm-module.js.map