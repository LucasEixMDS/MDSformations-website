!function(){"use strict";var e,t,n,o,r={1153:function(e,t,n){var o;n.d(t,{z:function(){return o}}),function(e){e.Fatal="fatal",e.Error="error",e.Warning="warning",e.Log="log",e.Info="info",e.Debug="debug",e.Critical="critical"}(o||(o={})),function(e){e.fromString=function(t){switch(t){case"debug":return e.Debug;case"info":return e.Info;case"warn":case"warning":return e.Warning;case"error":return e.Error;case"fatal":return e.Fatal;case"critical":return e.Critical;default:return e.Log}}}(o||(o={}))},9568:function(e,t,n){function o(e,t){0}n.d(t,{O:function(){return o}})},4796:function(e,t,n){function o(e,t){return Object.defineProperty(t,"updateDefaults",{value:function(t){return e.updateDefaults(t)}}),t}n.d(t,{f:function(){return o}})},3315:function(e,t,n){n.d(t,{D:function(){return a}});var o=n(1153);const r=async(e,t,n)=>e.get("//"+t+"translations/messages_"+n+".json").then((e=>e.data)).catch((e=>{throw new Error("Error trying to get translations "+String(e))})),a=async e=>{let{moduleParams:{config:t,accountLanguage:n},getI18n:a,httpClient:i,errorMonitor:s}=e;try{const[e,o]=await Promise.all([a(),r(i,t.topology.localeDatasetDataUrl,n)]);e.addResourceBundle(n,"translation",o,!0,!1)}catch(e){s.captureException(new Error("Error in resolve while loading localeDatasetData: "+String(e)),{level:o.z.Critical})}}},2033:function(e,t,n){n.d(t,{H:function(){return r}});var o=n(4796);function r(e){let{biLoggerFactory:t,userConfig:n={}}=e;const r=t(n);return(0,o.f)(r,r.logger())}},6304:function(e){e.exports=BusinessManagerAPI},7363:function(e){e.exports=React},1533:function(e){e.exports=ReactDOM},2611:function(e){e.exports=_},4481:function(e){e.exports=reactModuleContainer}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=r,i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var r=Object.create(null);i.r(r);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){a[e]=function(){return n[e]}}));return a.default=function(){return n},i.d(r,a),r},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return({309:"cairo-locale-messages_pl-json",913:"cairo-locale-messages_ca-json",1123:"cairo-locale-messages_uk-json",1549:"cairo-locale-messages_nl-json",1723:"cairo-locale-messages_sl-json",1770:"cairo-locale-messages_fi-json",1937:"cairo-locale-messages_zh-json",1953:"cairo-locale-messages_vi-json",2124:"cairo-locale-messages_visuale2e-json",2161:"cairo-locale-messages_el-json",2417:"cairo-locale-messages_pt-json",2514:"cairo-locale-messages_ko-json",2908:"cairo-locale-messages_tr-json",2910:"cairo-locale-messages_hi-json",3080:"cairo-locale-messages_bg-json",3785:"cairo-locale-messages_sk-json",3955:"c3666d26c5fd78b651d7c672d11e3c4f96b4213d",4115:"cairo-locale-messages_th-json",4962:"ecom-platform-dashboard-orders-details.pages.index",5307:"cairo-locale-messages_no-json",5346:"cairo-locale-messages_de-json",5483:"cairo-locale-messages_fr-json",5557:"ecom-platform-dashboard-orders-details-components.order-details",5976:"cairo-locale-messages_it-json",6628:"cairo-locale-messages_ms-json",7073:"cairo-locale-messages_hu-json",7364:"cairo-locale-messages_he-json",7586:"cairo-locale-messages_ja-json",7690:"cairo-locale-messages_id-json",8540:"cairo-locale-messages_cs-json",8962:"cairo-locale-messages_tl-json",9164:"cairo-locale-messages_ro-json",9533:"cairo-locale-messages_lt-json",9610:"cairo-locale-messages_ru-json",9693:"cairo-locale-messages_sv-json",9735:"cairo-locale-messages_da-json",9754:"cairo-locale-messages_es-json",9965:"cairo-locale-messages_ar-json"}[e]||e)+".chunk.min.js"},i.miniCssF=function(e){return(5557===e?"ecom-platform-dashboard-orders-details-components.order-details":e)+".chunk.min.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="_wix_ecom_platform_dashboard_orders_details:",i.l=function(e,t,r,a){if(n[e])n[e].push(t);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+r){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",o+r),s.src=e,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous")),n[e]=[t];var f=function(t,o){s.onerror=s.onload=null,clearTimeout(p);var r=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.sti=function(e,t,n,o){if("undefined"!=typeof document){var r=document,a=r.head,i=r.createElement("style");i.setAttribute("st_id",e),i.setAttribute("st_depth",n),i.setAttribute("st_runtime",o),i.textContent=t;for(var s,l=a.querySelectorAll('style[st_runtime="'+o+'"]'),c=!1,u=0;u<l.length;u++){var d=l[u],f=d.getAttribute("st_id"),p=Number(d.getAttribute("st_depth"));if(f!==e)!c&&n<p&&(a.insertBefore(i,d),c=!0),s=d;else{if(p===n)return void a.replaceChild(i,d);d.parentElement.removeChild(d)}}c||(s?a.insertBefore(i,s.nextElementSibling):a.appendChild(i))}},function(e){var t="-",n="--",o="---";function r(e,r,a){return!1===a||null==a||a!=a?"":!0===a?function(e,t){return e+n+t}(e,r):function(e,n,r){return e+o+n+t+r.length+t+r.replace(/\s/gm,"_")}(e,r,a.toString())}(e=e||{}).sts=function(e){for(var t=[],n=1;n<arguments.length;n++){var o=arguments[n];if(o)if("string"==typeof o)t[t.length]=o;else if(2===n)for(var a in o){var i=r(e,a,o[a]);i&&(t[t.length]=i)}}return t.join(" ")},e.stc=function(e,t){var n=[];for(var o in t){var a=r(e,o,t[o]);a&&n.push(a)}return n.join(" ")}}(i),i.p="https://static.parastorage.com/services/ecom-platform-dashboard-orders-details/361f6a67eb9fd4ee85e5d1cf9196d7cb5abefac9a45d7af0c6391741/",function(){if("undefined"!=typeof document){var e=function(e){return new Promise((function(t,n){var o=i.miniCssF(e),r=i.p+o;if(function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=(i=n[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((r=(i=a[o]).getAttribute("data-href"))===e||r===t)return i}}(o,r))return t();!function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode&&a.parentNode.removeChild(a),r(l)}},a.href=t,0!==a.href.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous"),n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a)}(e,r,null,t,n)}))},t={1261:0};i.f.miniCss=function(n,o){t[n]?o.push(t[n]):0!==t[n]&&{5557:1,8373:1}[n]&&o.push(t[n]=e(n).then((function(){t[n]=0}),(function(e){throw delete t[n],e})))}}}(),function(){var e={1261:0};i.f.j=function(t,n){var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else if(8373!=t){var r=new Promise((function(n,r){o=e[t]=[n,r]}));n.push(o[2]=r);var a=i.p+i.u(t),s=new Error;i.l(a,(function(n){if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,o[1](s)}}),"chunk-"+t,t)}else e[t]=0};var t=function(t,n){var o,r,a=n[0],s=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)l(i)}for(t&&t(n);c<a.length;c++)r=a[c],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0},n=self.webpackJsonp__wix_ecom_platform_dashboard_orders_details=self.webpackJsonp__wix_ecom_platform_dashboard_orders_details||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){var e=i(6304),t=i(4481),n=i(7363),o=i.n(n),r=function(){return r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},a=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((o=o.apply(e,t||[])).next())}))},s=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},l=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i};function c(e,i){var c=this,u=i.flowAPIDelegate,d=i.context,f=d.enableTranslationsHMR,p=d.monitorHttpClient,m=e.component,g=e.loadReactComponent,h=e.filesHook,b=e.resolveHook,v=m.maybeTranslationsModel;return function(e){var i=l((0,n.useState)(),2),d=i[0],y=i[1],w=l((0,n.useState)((function(){return function(e){var t,n=m.componentId,o=u.createFedopsLogger(n),r=u.createComponentEssentials({componentId:n}).panoramaClient;p&&(t=u.bmModule._essentials.createHttpClientWithMonitoring({errorMonitor:u.moduleFlowAPI.errorMonitor,fedopsLogger:o}));var a=v?u.createComponentTranslationsAPI(v):void 0;return{componentHooksFlowAPI:u.getComponentHooksFlowAPI(m,{fedopsLogger:o,panoramaClient:r,maybeComponentTranslationsAPI:a,ownProps:e,httpClientWithMonitoring:t}),fedopsLogger:o,maybeComponentTranslationsAPI:a,httpClientWithMonitoring:t,panoramaClient:r}}(e)})),1),I=w[0],_=I.componentHooksFlowAPI,P=I.fedopsLogger,M=I.maybeComponentTranslationsAPI,C=I.httpClientWithMonitoring,A=I.panoramaClient;(0,n.useState)((function(){A.reportLoadStart()}));var x=l((0,n.useState)((function(){return(0,t.ReactLoadableComponent)(m.componentId,(function(){return a(c,void 0,void 0,(function(){var e,t,n,o,a,i,c,d;return s(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),f||u.prefetchTranslations(M),e=null==b?void 0:b.call(u.bmModule,_),t=g(),n=u.createBMComponentAPI(m,{fedopsLogger:P,componentTranslationsAPI:M,httpClientWithMonitoring:C,panoramaClient:A}),[4,Promise.all([e,t,n])];case 1:return o=l.apply(void 0,[s.sent(),3]),a=o[0],i=o[1],c=o[2],[2,r(r({default:i},a),{_componentFlowAPI:c})];case 2:throw d=s.sent(),y(d),d;case 3:return[2]}}))}))}),null==h?void 0:h.call(u.bmModule,_))})),1),L=x[0];if(d)throw d;return o().createElement(L,r({},e))}}var u=i(2611),d=i(9568);function f(e,t,n){0}var p=Sentry;function m(e){return!!e&&"sentry"in e}var g=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((o=o.apply(e,t||[])).next())}))},h=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},b=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},v=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i},y=function(e){var t=e.localeDistPath,n=e.availableLocales,o=e.errorReporter,r=e.httpClient,a=new Set(n),s=new Map;return{asyncMessagesLoader:function(e){return g(void 0,void 0,void 0,(function(){var n,l;return h(this,(function(c){return(n=s.get(e))?[2,n]:(l=function(e){return g(void 0,void 0,void 0,(function(){var n,s,l,c,u;return h(this,(function(d){switch(d.label){case 0:if(null==t||!a.has(e))return[2,Promise.reject(new Error("Locale assets for ".concat(e," are not provided")))];n="".concat(i.p).concat(t,"/messages_").concat(e,".json"),d.label=1;case 1:return d.trys.push([1,5,,6]),[4,r.get(n)];case 2:return s=d.sent(),((l=s.status)>=200&&l<300||304===l)&&null!=s.data?[2,s.data]:o?[4,String(s.data)]:[3,4];case 3:c=d.sent().substring(0,100),m(o)?o.captureMessage("Can't fetch locale ".concat(e),{level:p.Severity.Error,contexts:{requestDetails:{url:n,body:c,status:l}}}):o.captureMessage("Can't fetch locale ".concat(e),p.Severity.Error,{captureContext:{contexts:{requestDetails:{url:n,body:c,status:l}}}}),d.label=4;case 4:return[2,Promise.reject(new Error("Can't fetch locale ".concat(e,", status code: ").concat(l)))];case 5:return u=d.sent(),o&&(m(o)?o.captureException(u,{level:p.Severity.Error,contexts:{errorDetails:{message:"Can't fetch locale ".concat(e," due to fetch error"),url:n}}}):o.captureException(u,{captureContext:{level:p.Severity.Error,contexts:{errorDetails:{message:"Can't fetch locale ".concat(e," due to fetch error"),url:n}}}})),[2,Promise.reject(new Error("Can't fetch locale ".concat(e," due to fetch error")))];case 6:return[2]}}))}))}(e),s.set(e,l),[2,l])}))}))},addLocaleMessages:function(e){var t,n;try{for(var o=b(e.entries()),r=o.next();!r.done;r=o.next()){var a=v(r.value,2),i=a[0],l=a[1];s.set(i,Promise.resolve(l))}}catch(e){t={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}},removeLocaleMessages:function(e){s.delete(e)}}},w=function(){return w=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},w.apply(this,arguments)},I=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((o=o.apply(e,t||[])).next())}))},_=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};function P(e){var t,n,o,r=this,a=e.bmModule,i=e.module,s=e.optionalDeps,l=i.config,c=l.translations,d=l.sentry,f=i.maybeTranslationsModel,p=(null==d?void 0:d.DSN)&&!(null==d?void 0:d.errorMonitor)?function(e,t){var n,o,r,a,i,s,l,c=w(w({},{release:"".concat("ecom-platform-dashboard-orders-details","@").concat("361f6a67eb9fd4ee85e5d1cf9196d7cb5abefac9a45d7af0c6391741"),beforeSend:(n=window.location.hostname,o=window.navigator.userAgent,r=window.document.cookie,a=/(^|;)\s*automation\s*=\s*sled:/.test(r),i=/localhost|127\.0\.0\.1|::1|\.local|local.wix.com|^$/i.test(n),s=/Googlebot|AdsBot-Google-Mobile|bingbot|BingPreview|facebookexternalhit|Baiduspider|YandexBot/i.test(o),l=/BonEcho|NewsGator|SeaMonkey|iTunes|Epiphany|Konqueror|Sleipnir|IceWeasel/i.test(o),function(e){return i?e.environment="development":s?e.environment="bot":l?e.environment="invalid_useragent":a&&(e.environment="sled"),e}),beforeBreadcrumb:function(e,t){var n,o=e.category,r=o&&("ui.click"===o||"ui.input"===o),a=null===(n=null==t?void 0:t.event)||void 0===n?void 0:n.target;if(r&&a){var i=a.closest("[data-hook]");if(i){var s=i.getAttribute("data-hook");e.message=a===i?"".concat(e.message,' [data-hook="').concat(s,'"]'):"".concat(e.message,' parent:[data-hook="').concat(s,'"]')}}return e}}),{dsn:t}),u=e._essentials.createSentryHub(c),d=u.client,f=u.hub;return function(e,t){var n=t.moduleParams;e.setUser({id:n.userId})}(f,{moduleParams:e.moduleParams}),{client:d,hub:f}}(a,d.DSN):void 0,m=(null==d?void 0:d.DSN)&&(null==d?void 0:d.errorMonitor)?a._essentials.createErrorMonitor({dsn:d.DSN,appName:"ecom-platform-dashboard-orders-details",version:"361f6a67eb9fd4ee85e5d1cf9196d7cb5abefac9a45d7af0c6391741"}):void 0;if(f){var g=(null==p?void 0:p.hub)||m,h=y({localeDistPath:null===(t=f.assets)||void 0===t?void 0:t.localeDistPath,availableLocales:f.availableLocales,errorReporter:g,httpClient:a._essentials.httpClient}),b=h.asyncMessagesLoader,v=h.addLocaleMessages,P=a._essentials.createI18n({asyncMessagesLoader:b,useSuspense:null===(n=null==c?void 0:c.suspense)||void 0===n||n,disableAutoInit:!0}),M=(0,u.once)((function(){return I(r,void 0,void 0,(function(){return _(this,(function(e){switch(e.label){case 0:return P.isInitialized?[3,2]:[4,P.init()];case 1:e.sent(),e.label=2;case 2:return[2,P]}}))}))}));o={i18n:P,asyncMessagesLoader:b,addLocaleMessages:v,init:M}}var C=(0,u.once)((function(){return I(r,void 0,void 0,(function(){var e;return _(this,(function(t){switch(t.label){case 0:return[4,s.loadOptionalFlowAPIDeps()];case 1:return[2,null==(e=t.sent().createBILogger)?void 0:e({biLoggerFactory:a._essentials.biLoggerFactory})]}}))}))}));return{maybeSentry:p,maybeErrorMonitor:m,maybeTranslations:o,getBILogger:C,experiments:a._essentials.experiments}}var M=function(){return M=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},M.apply(this,arguments)},C=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((o=o.apply(e,t||[])).next())}))},A=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};var x,L=function(){return L=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},L.apply(this,arguments)},j=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((o=o.apply(e,t||[])).next())}))},S=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},k=function(){function t(e){this.module=e.module,this.optionalDeps=e.optionalDeps,this.bmModule=e.bmModule,this.artifactId=e.artifactId,this.artifactVersion=e.artifactVersion}return Object.defineProperty(t.prototype,"flowAPIInstances",{get:function(){var e=this.optionalDeps;return null==this._flowAPIInstances&&(this._flowAPIInstances=P({optionalDeps:e,bmModule:this.bmModule,module:this.module})),this._flowAPIInstances},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"moduleFlowAPI",{get:function(){var t=this,n=t.bmModule,o=t.module,r=t.optionalDeps;return null==this._moduleFlowAPI&&(this._moduleFlowAPI=function(t){var n,o=this,r=t.module,a=t.flowAPIInstances,i=t.bmModule,s=t.optionalDeps,l=r.config,c=i._essentials.httpClient,p=i._essentials.createFedopsLogger((0,u.kebabCase)(r.moduleId),M({},null===(n=r.config.fedops)||void 0===n?void 0:n.config)),m=(0,u.once)((function(){return C(o,void 0,void 0,(function(){return A(this,(function(e){return[2,p]}))}))})),g=(0,u.once)((function(){return C(o,void 0,void 0,(function(){var e;return A(this,(function(t){return e=a.maybeTranslations,(0,d.O)(e,"i18n"),[2,e.init()]}))}))})),h=(0,u.once)((function(){return C(o,void 0,void 0,(function(){var e;return A(this,(function(t){switch(t.label){case 0:return[4,a.getBILogger()];case 1:return e=t.sent(),(0,d.O)(e,"biLogger"),[2,e]}}))}))}));return{getBILogger:h,get biLogger(){return s.loadOptionalFlowAPIDeps().createBILogger({biLoggerFactory:i._essentials.biLoggerFactory})},_translations:a.maybeTranslations,getI18n:g,get experiments(){var e=a.experiments;return(0,d.O)(e,"experiments"),e},getModuleFedopsLogger:m,moduleFedopsLogger:p,module:i,get moduleParams(){return i.moduleParams},sentryAndHub:a.maybeSentry,get sentry(){var e;return f(a.maybeSentry,null===(e=l.sentry)||void 0===e||e.errorMonitor),a.maybeSentry.hub},get errorMonitor(){var e;return f(a.maybeErrorMonitor,null===(e=l.sentry)||void 0===e||e.errorMonitor),a.maybeErrorMonitor},httpClient:c,moduleInfo:r.config,getCurrentInstance:function(t){var n,o=null!==(n=null!=t?t:r.config.appDefinitionId)&&void 0!==n?n:e.appDefIds.metaSite;return(0,e.getCurrentInstance)(o)},createCurrencyFormatter:i._essentials.createCurrencyFormatter,formatAddress:i._essentials.formatAddress}}({module:o,bmModule:n,optionalDeps:r,flowAPIInstances:this.flowAPIInstances})),this._moduleFlowAPI},enumerable:!1,configurable:!0}),t.prototype.createFedopsLogger=function(e){var t,n=this.bmModule,o=this.module;return n._essentials.createFedopsLogger(e,L({},null===(t=o.config.fedops)||void 0===t?void 0:t.config))},t.prototype.createComponentEssentials=function(e){var t=e.componentId,n=this,o=n.bmModule,r=n.module,a=n.artifactVersion,i=r.config.sentry;return o._essentials.createComponentEssentials({artifactVersion:a,componentId:t,sentryDsn:null==i?void 0:i.DSN})},t.prototype.createComponentTranslationsAPI=function(e){var t,n,o,r,a=this,i=this.bmModule,s=this.moduleFlowAPI,l=(null===(t=s.sentryAndHub)||void 0===t?void 0:t.hub)||s.errorMonitor,c=y({localeDistPath:null===(n=e.assets)||void 0===n?void 0:n.localeDistPath,availableLocales:e.availableLocales,errorReporter:l,httpClient:s.httpClient}),d=c.asyncMessagesLoader,f=c.addLocaleMessages,p=i._essentials.createI18n({asyncMessagesLoader:d,useSuspense:null===(r=null===(o=this.module.config.translations)||void 0===o?void 0:o.suspense)||void 0===r||r,disableAutoInit:!0}),m=(0,u.once)((function(){return j(a,void 0,void 0,(function(){return S(this,(function(e){switch(e.label){case 0:return p.isInitialized?[3,2]:[4,p.init()];case 1:e.sent(),e.label=2;case 2:return[2,p]}}))}))}));return{i18n:p,init:m,asyncMessagesLoader:d,addLocaleMessages:f}},t.prototype.createBMMethodFlowAPI=function(e){var t=this,n=this.moduleFlowAPI,o=this.module,r=this.createFedopsLogger(e.methodId);return{get module(){return n.module},get moduleInfo(){return n.moduleInfo},get httpClient(){return n.httpClient},get sentry(){var e,t;return f(n.sentryAndHub,null===(t=null===(e=o.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),n.sentryAndHub.hub},get errorMonitor(){var e,t;return f(n.errorMonitor,null===(t=null===(e=o.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),n.errorMonitor},get moduleParams(){return n.moduleParams},getI18n:n.getI18n,get experiments(){return n.experiments},getBILogger:n.getBILogger,get biLogger(){return n.biLogger},getModuleFedopsLogger:n.getModuleFedopsLogger,moduleFedopsLogger:n.moduleFedopsLogger,getFedopsLogger:function(){return j(t,void 0,void 0,(function(){return S(this,(function(e){return[2,r]}))}))},fedopsLogger:r,getCurrentInstance:n.getCurrentInstance,createCurrencyFormatter:n.createCurrencyFormatter,formatAddress:n.formatAddress}},t.prototype.getComponentHooksFlowAPI=function(e,t){var n=this,o=t.fedopsLogger,r=t.panoramaClient,a=t.maybeComponentTranslationsAPI,i=t.ownProps,s=t.httpClientWithMonitoring,l=this.moduleFlowAPI,c=this.module,u=a?a.init:l.getI18n;return{get module(){return l.module},get moduleInfo(){return l.moduleInfo},get httpClient(){return null!=s?s:l.httpClient},get sentry(){var e,t;return f(l.sentryAndHub,null===(t=null===(e=c.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),l.sentryAndHub.hub},get errorMonitor(){var e,t;return f(l.errorMonitor,null===(t=null===(e=c.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),l.errorMonitor},get moduleParams(){return l.moduleParams},getModuleFedopsLogger:l.getModuleFedopsLogger,moduleFedopsLogger:l.moduleFedopsLogger,getI18n:u,get experiments(){return l.experiments},getBILogger:l.getBILogger,get biLogger(){return l.biLogger},componentInfo:{componentId:e.componentId,type:e.componentType,fileName:e.fileName,route:e.route},getFedopsLogger:function(){return j(n,void 0,void 0,(function(){return S(this,(function(e){return[2,o]}))}))},fedopsLogger:o,panoramaClient:r,getCurrentInstance:l.getCurrentInstance,createCurrencyFormatter:l.createCurrencyFormatter,formatAddress:l.formatAddress,ownProps:i}},t.prototype.createBMComponentAPI=function(e,t){var n=t.fedopsLogger,o=t.componentTranslationsAPI,r=t.httpClientWithMonitoring,a=t.panoramaClient;return j(this,void 0,void 0,(function(){var t,i,s,l,c,u,p,m;return S(this,(function(g){switch(g.label){case 0:return i=(t=this).moduleFlowAPI,s=t.flowAPIInstances,l=t.module,c=s.maybeTranslations,u=s.experiments,[4,(0,s.getBILogger)()];case 1:return p=g.sent(),[2,{_translations:m=null!=o?o:c,module:l,moduleInfo:i.moduleInfo,get httpClient(){return null!=r?r:i.httpClient},get _sentry(){var e;return null===(e=i.sentryAndHub)||void 0===e?void 0:e.hub},get sentry(){var e,t;return f(i.sentryAndHub,null===(t=null===(e=l.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),i.sentryAndHub.hub},get errorMonitor(){var e,t;return f(i.errorMonitor,null===(t=null===(e=l.config)||void 0===e?void 0:e.sentry)||void 0===t||t.errorMonitor),i.errorMonitor},get moduleParams(){return i.moduleParams},get i18n(){return(0,d.O)(m,"i18n"),m.i18n},get biLogger(){return(0,d.O)(p,"biLogger"),p},get experiments(){return u},componentInfo:{componentId:e.componentId,type:e.componentType,fileName:e.fileName,route:e.route},get fedopsLogger(){return(0,d.O)(n,"fedopsLogger"),n},get panoramaClient(){return(0,d.O)(a,"panoramaClient"),a},get createCurrencyFormatter(){return i.createCurrencyFormatter},get formatAddress(){return i.formatAddress}}]}}))}))},t.prototype.prefetchTranslations=function(e){return j(this,void 0,void 0,(function(){var t,n;return S(this,(function(o){switch(o.label){case 0:return t=this.moduleFlowAPI._translations,[4,null==(n=null!=e?e:t)?void 0:n.init()];case 1:return o.sent(),[2]}}))}))},t}(),D=(x=function(e,t){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},x(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}x(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),F=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((o=o.apply(e,t||[])).next())}))},E=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},O=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i},T=function(e,t,n){if(n||2===arguments.length)for(var o,r=0,a=t.length;r<a;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};var B,H,N,R,W,G,q,z,U,V,J,K,$,Y,Q,X,Z,ee=i(2033);B={context:{enableTranslationsHMR:!1,artifactId:"ecom-platform-dashboard-orders-details",fullArtifactId:"com.wixpress.ecom-platform-dashboard-orders-details",monitorHttpClient:!1},requireableModule:{module:{moduleId:"ECOM_PLATFORM_DASHBOARD_ORDERS_DETAILS",config:{$schema:"target/schemas/.application.schema.json",moduleId:"ECOM_PLATFORM_DASHBOARD_ORDERS_DETAILS",moduleConfigurationId:"STORES",appDefinitionId:"1380b703-ce81-ff05-f115-39571d94dfcd",routeNamespace:"ecom-platform-dashboard-orders-details",isCoreService:!0,translations:{enabled:!0},sentry:{DSN:"https://9a9d6ea35cf44990b94d2e2b4fd3db55@sentry.wixpress.com/3878",id:"9a9d6ea35cf44990b94d2e2b4fd3db55",projectName:"ecom-platform-dashboard-orders",teamName:"ecom-platform-orders",errorMonitor:!0},topology:{localeDatasetDataUrl:{artifactId:"com.wixpress.locale-dataset-data"}},moduleBundleName:"module"},fedopsPath:"/home/builduser/work/51f6e000a57acefc/packages/ecom-platform-dashboard-orders-details/fedops.json",maybeTranslationsModel:{assets:{localeDir:"/home/builduser/work/51f6e000a57acefc/packages/ecom-platform-dashboard-orders-details/src/assets/locale",localeDistPath:"assets/locale"},availableLocales:["ar","bg","ca","cs","da","de","el","en","es","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","ms","nl","no","pl","pt","ro","ru","sk","sl","sv","th","tl","tr","uk","vi","zh"],messagesEnFile:"messages_en.json"}}},pages:[{component:{componentId:"ecom-platform-dashboard-orders-details.pages.index",componentType:"page",componentName:"ecom-platform-dashboard-orders-details.pages.index",fileName:"index.tsx",route:"ecom-platform-dashboard-orders-details",maybeTranslationsModel:null},loadReactComponent:async()=>(await Promise.all([i.e(3955),i.e(4962)]).then(i.bind(i,2890))).default}],exportedComponents:[{component:{componentId:"ecom-platform-dashboard-orders-details-components.order-details",componentType:"exported-component",maybeTranslationsModel:null},loadReactComponent:async()=>(await Promise.all([i.e(3955),i.e(5557)]).then(i.bind(i,1864))).default,resolveHook:i(3315).D,filesHook:i(3315).files}],extensionComponents:[],methods:[],optionalDeps:{loadOptionalFlowAPIDeps:()=>({createBILogger:ee.H})}},H=B.context,N=B.requireableModule,R=N.module,W=N.configHook,G=N.initHook,q=B.pages,z=B.exportedComponents,U=B.extensionComponents,V=B.methods,J=B.optionalDeps,K=R.config,$=R.moduleId,Y=K.moduleConfigurationId,Q=H.artifactId,X=H.fullArtifactId,Z=function(n){function o(e){var t=n.call(this,e)||this;return t.state={},t.setState=function(e){return t.state=e},t.setArtifactId(Q),t.setFullArtifactId(X),Y&&t.setModuleConfigurationId(Y),t.flowAPIDelegate=new k({bmModule:t,module:R,optionalDeps:J,artifactId:Q,artifactVersion:"361f6a67eb9fd4ee85e5d1cf9196d7cb5abefac9a45d7af0c6391741"}),t}return D(o,n),o.prototype.register=function(n){var o=this;this.moduleParams=n;var r=this.flowAPIDelegate,a=r.moduleFlowAPI,i=a.sentryAndHub,s=a.errorMonitor;q.forEach((function(t){var n=t.component,a=n.componentId,l=n.componentName;(s||i)&&(0,e.registerPageComponentMonitors)(a,{errorMonitor:s,sentryClient:null==i?void 0:i.client}),o.registerPageComponent(l,c(t,{context:H,module:R,flowAPIDelegate:r}))})),U.forEach((function(e){var t=e.component.componentId;o.registerComponentWithModuleParams(t,c(e,{context:H,module:R,flowAPIDelegate:r}),{suspense:!0})})),z.forEach((function(e){var t=e.component.componentId;o.registerComponentWithModuleParams(t,c(e,{context:H,module:R,flowAPIDelegate:r}),{suspense:!0})})),V.forEach((function(e){var n=e.method,a=e.fn;t.ModuleRegistry.registerMethod(n.methodId,(function(){var e=r.createBMMethodFlowAPI(n);return!1===n.lazy?a().bind(o,e):function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return F(o,void 0,void 0,(function(){return E(this,(function(n){switch(n.label){case 0:return[4,a()];case 1:return[2,n.sent().bind(this,e).apply(void 0,T([],O(t),!1))]}}))}))}}))}))},Object.defineProperty(o.prototype,"_essentials",{get:function(){return this.appEssentials},enumerable:!1,configurable:!0}),o.prototype.init=function(e){var t=this.flowAPIDelegate;G&&G.call(this,t.moduleFlowAPI)},o.prototype.config=function(e,t){var n=this.flowAPIDelegate;W&&W.call(this,n.moduleFlowAPI,e,t)},o.prototype.prefetchFlowAPI=function(){var e,t=this.flowAPIDelegate;return Promise.all([null===(e=t.moduleFlowAPI._translations)||void 0===e?void 0:e.init()])},o.prototype.prefetchComponent=function(e){var t=this.prefetchFlowAPI(),n=z.find((function(t){return t.component.componentId===e}));if(null!=n)return Promise.all([t,n.loadReactComponent()])},o}(e.BusinessManagerModule),(0,e.registerModule)($,Z)}()}();
//# sourceMappingURL=module.bundle.min.js.map