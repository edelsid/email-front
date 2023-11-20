(()=>{"use strict";var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};function t(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}var r=function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};function n(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(c){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,n=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){s=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){s.label=u[1];break}if(6===u[0]&&s.label<o[1]){s.label=o[1],o=u;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(u);break}o[2]&&s.ops.pop(),s.trys.pop();continue}u=t.call(e,s)}catch(e){u=[6,e],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}function o(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s}function s(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function u(e){return this instanceof u?(this.v=e,this):new u(e)}function c(e){return"function"==typeof e}function a(e){var t=e((function(e){Error.call(e),e.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var l=a((function(e){return function(t){e(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}));function f(e,t){if(e){var r=e.indexOf(t);0<=r&&e.splice(r,1)}}var h=function(){function e(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}var t;return e.prototype.unsubscribe=function(){var e,t,r,n,u;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var f=o(a),h=f.next();!h.done;h=f.next())h.value.remove(this)}catch(t){e={error:t}}finally{try{h&&!h.done&&(t=f.return)&&t.call(f)}finally{if(e)throw e.error}}else a.remove(this);var d=this.initialTeardown;if(c(d))try{d()}catch(e){u=e instanceof l?e.errors:[e]}var v=this._finalizers;if(v){this._finalizers=null;try{for(var y=o(v),b=y.next();!b.done;b=y.next()){var m=b.value;try{p(m)}catch(e){u=null!=u?u:[],e instanceof l?u=s(s([],i(u)),i(e.errors)):u.push(e)}}}catch(e){r={error:e}}finally{try{b&&!b.done&&(n=y.return)&&n.call(y)}finally{if(r)throw r.error}}}if(u)throw new l(u)}},e.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)p(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(t)}},e.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},e.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},e.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&f(t,e)},e.prototype.remove=function(t){var r=this._finalizers;r&&f(r,t),t instanceof e&&t._removeParent(this)},e.EMPTY=((t=new e).closed=!0,t),e}();function d(e){return e instanceof h||e&&"closed"in e&&c(e.remove)&&c(e.add)&&c(e.unsubscribe)}function p(e){c(e)?e():e.unsubscribe()}h.EMPTY;var v=function(e){function r(t,r){return e.call(this)||this}return t(r,e),r.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},r}(h),y={setInterval:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=y.delegate;return(null==o?void 0:o.setInterval)?o.setInterval.apply(o,s([e,t],i(r))):setInterval.apply(void 0,s([e,t],i(r)))},clearInterval:function(e){var t=y.delegate;return((null==t?void 0:t.clearInterval)||clearInterval)(e)},delegate:void 0},b=function(e){function r(t,r){var n=e.call(this,t,r)||this;return n.scheduler=t,n.work=r,n.pending=!1,n}return t(r,e),r.prototype.schedule=function(e,t){var r;if(void 0===t&&(t=0),this.closed)return this;this.state=e;var n=this.id,o=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(o,n,t)),this.pending=!0,this.delay=t,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(o,this.id,t),this},r.prototype.requestAsyncId=function(e,t,r){return void 0===r&&(r=0),y.setInterval(e.flush.bind(e,this),r)},r.prototype.recycleAsyncId=function(e,t,r){if(void 0===r&&(r=0),null!=r&&this.delay===r&&!1===this.pending)return t;null!=t&&y.clearInterval(t)},r.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(e,t);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(e,t){var r,n=!1;try{this.work(e)}catch(e){n=!0,r=e||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r},r.prototype.unsubscribe=function(){if(!this.closed){var t=this.id,r=this.scheduler,n=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,f(n,this),null!=t&&(this.id=this.recycleAsyncId(r,t,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},r}(v),m={now:function(){return(m.delegate||Date).now()},delegate:void 0},w=function(){function e(t,r){void 0===r&&(r=e.now),this.schedulerActionCtor=t,this.now=r}return e.prototype.schedule=function(e,t,r){return void 0===t&&(t=0),new this.schedulerActionCtor(this,e).schedule(r,t)},e.now=m.now,e}(),g=new(function(e){function r(t,r){void 0===r&&(r=w.now);var n=e.call(this,t,r)||this;return n.actions=[],n._active=!1,n}return t(r,e),r.prototype.flush=function(e){var t=this.actions;if(this._active)t.push(e);else{var r;this._active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=t.shift());if(this._active=!1,r){for(;e=t.shift();)e.unsubscribe();throw r}}},r}(w))(b),x=g,S={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},E={setTimeout:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=E.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,s([e,t],i(r))):setTimeout.apply(void 0,s([e,t],i(r)))},clearTimeout:function(e){var t=E.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function _(e){E.setTimeout((function(){var t=S.onUnhandledError;if(!t)throw e;t(e)}))}function T(){}var P=O("C",void 0,void 0);function O(e,t,r){return{kind:e,value:t,error:r}}var j=null,A=function(e){function r(t){var r=e.call(this)||this;return r.isStopped=!1,t?(r.destination=t,d(t)&&t.add(r)):r.destination=M,r}return t(r,e),r.create=function(e,t,r){return new H(e,t,r)},r.prototype.next=function(e){this.isStopped?k(function(e){return O("N",e,void 0)}(e),this):this._next(e)},r.prototype.error=function(e){this.isStopped?k(O("E",void 0,e),this):(this.isStopped=!0,this._error(e))},r.prototype.complete=function(){this.isStopped?k(P,this):(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(e){this.destination.next(e)},r.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(h),I=Function.prototype.bind;function D(e,t){return I.call(e,t)}var L=function(){function e(e){this.partialObserver=e}return e.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(e){R(e)}},e.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(e){R(e)}else R(e)},e.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(e){R(e)}},e}(),H=function(e){function r(t,r,n){var o,i,s=e.call(this)||this;return c(t)||!t?o={next:null!=t?t:void 0,error:null!=r?r:void 0,complete:null!=n?n:void 0}:s&&S.useDeprecatedNextContext?((i=Object.create(t)).unsubscribe=function(){return s.unsubscribe()},o={next:t.next&&D(t.next,i),error:t.error&&D(t.error,i),complete:t.complete&&D(t.complete,i)}):o=t,s.destination=new L(o),s}return t(r,e),r}(A);function R(e){var t;S.useDeprecatedSynchronousErrorHandling?(t=e,S.useDeprecatedSynchronousErrorHandling&&j&&(j.errorThrown=!0,j.error=t)):_(e)}function k(e,t){var r=S.onStoppedNotification;r&&E.setTimeout((function(){return r(e,t)}))}var M={closed:!0,next:T,error:function(e){throw e},complete:T},U="function"==typeof Symbol&&Symbol.observable||"@@observable";function C(e){return e}var N=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(e,t,r){var n,o=this,i=(n=e)&&n instanceof A||function(e){return e&&c(e.next)&&c(e.error)&&c(e.complete)}(n)&&d(n)?e:new H(e,t,r);return function(e){if(S.useDeprecatedSynchronousErrorHandling){var t=!j;if(t&&(j={errorThrown:!1,error:null}),e(),t){var r=j,n=r.errorThrown,o=r.error;if(j=null,n)throw o}}else e()}((function(){var e=o,t=e.operator,r=e.source;i.add(t?t.call(i,r):r?o._subscribe(i):o._trySubscribe(i))})),i},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var r=this;return new(t=q(t))((function(t,n){var o=new H({next:function(t){try{e(t)}catch(e){n(e),o.unsubscribe()}},error:n,complete:t});r.subscribe(o)}))},e.prototype._subscribe=function(e){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(e)},e.prototype[U]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0===(r=e).length?C:1===r.length?r[0]:function(e){return r.reduce((function(e,t){return t(e)}),e)})(this);var r},e.prototype.toPromise=function(e){var t=this;return new(e=q(e))((function(e,r){var n;t.subscribe((function(e){return n=e}),(function(e){return r(e)}),(function(){return e(n)}))}))},e.create=function(t){return new e(t)},e}();function q(e){var t;return null!==(t=null!=e?e:S.Promise)&&void 0!==t?t:Promise}var $=function(e){return e&&"number"==typeof e.length&&"function"!=typeof e},z="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function F(e){if(e instanceof N)return e;if(null!=e){if(function(e){return c(e[U])}(e))return a=e,new N((function(e){var t=a[U]();if(c(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if($(e))return s=e,new N((function(e){for(var t=0;t<s.length&&!e.closed;t++)e.next(s[t]);e.complete()}));if(c(null==(i=e)?void 0:i.then))return r=e,new N((function(e){r.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,_)}));if(function(e){return Symbol.asyncIterator&&c(null==e?void 0:e[Symbol.asyncIterator])}(e))return X(e);if(function(e){return c(null==e?void 0:e[z])}(e))return t=e,new N((function(e){var r,n;try{for(var i=o(t),s=i.next();!s.done;s=i.next()){var u=s.value;if(e.next(u),e.closed)return}}catch(e){r={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}e.complete()}));if(function(e){return c(null==e?void 0:e.getReader)}(e))return X(function(e){return function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||c(e,t)}))})}function c(e,t){try{(r=o[e](t)).value instanceof u?Promise.resolve(r.value.v).then(a,l):f(i[0][2],r)}catch(e){f(i[0][3],e)}var r}function a(e){c("next",e)}function l(e){c("throw",e)}function f(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}(this,arguments,(function(){var t,r,o;return n(this,(function(n){switch(n.label){case 0:t=e.getReader(),n.label=1;case 1:n.trys.push([1,,9,10]),n.label=2;case 2:return[4,u(t.read())];case 3:return r=n.sent(),o=r.value,r.done?[4,u(void 0)]:[3,5];case 4:return[2,n.sent()];case 5:return[4,u(o)];case 6:return[4,n.sent()];case 7:return n.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}}))}))}(e))}var t,r,i,s,a;throw function(e){return new TypeError("You provided "+(null!==e&&"object"==typeof e?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}(e)}function X(e){return new N((function(t){(function(e,t){var r,i,s,u,c,a,l,f;return c=this,a=void 0,f=function(){var c,a;return n(this,(function(n){switch(n.label){case 0:n.trys.push([0,5,6,11]),r=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=o(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}(n,o,(t=e[r](t)).done,t.value)}))}}}(e),n.label=1;case 1:return[4,r.next()];case 2:if((i=n.sent()).done)return[3,4];if(c=i.value,t.next(c),t.closed)return[2];n.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=n.sent(),s={error:a},[3,11];case 6:return n.trys.push([6,,9,10]),i&&!i.done&&(u=r.return)?[4,u.call(r)]:[3,8];case 7:n.sent(),n.label=8;case 8:return[3,10];case 9:if(s)throw s.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}}))},new((l=void 0)||(l=Promise))((function(e,t){function r(e){try{o(f.next(e))}catch(e){t(e)}}function n(e){try{o(f.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof l?o:new l((function(e){e(o)}))).then(r,n)}o((f=f.apply(c,a||[])).next())}))})(e,t).catch((function(e){return t.error(e)}))}))}function Y(e,t,r,n,o){return new Z(e,t,r,n,o)}var Z=function(e){function r(t,r,n,o,i,s){var u=e.call(this,t)||this;return u.onFinalize=i,u.shouldUnsubscribe=s,u._next=r?function(e){try{r(e)}catch(e){t.error(e)}}:e.prototype._next,u._error=o?function(e){try{o(e)}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._error,u._complete=n?function(){try{n()}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._complete,u}return t(r,e),r.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}},r}(A);function B(e){return function(t){if(function(e){return c(null==e?void 0:e.lift)}(t))return t.lift((function(t){try{return e(t,this)}catch(e){this.error(e)}}));throw new TypeError("Unable to lift unknown Observable type")}}function G(e){return B((function(t,r){var n,o=null,i=!1;o=t.subscribe(Y(r,void 0,void 0,(function(s){n=F(e(s,G(e)(t))),o?(o.unsubscribe(),o=null,n.subscribe(r)):i=!0}))),i&&(o.unsubscribe(),o=null,n.subscribe(r))}))}function J(e,t){return B((function(r,n){var o=0;r.subscribe(Y(n,(function(r){n.next(e.call(t,r,o++))})))}))}function V(e){switch(e.responseType){case"json":if("response"in e)return e.response;var t=e;return JSON.parse(t.responseText);case"document":return e.responseXML;default:return"response"in e?e.response:(t=e).responseText}}var K=function(e,t,r,n){void 0===n&&(n="download_load"),this.originalEvent=e,this.xhr=t,this.request=r,this.type=n;var o=t.status,i=t.responseType;this.status=null!=o?o:0,this.responseType=null!=i?i:"";var s=t.getAllResponseHeaders();this.responseHeaders=s?s.split("\n").reduce((function(e,t){var r=t.indexOf(": ");return e[t.slice(0,r)]=t.slice(r+2),e}),{}):{},this.response=V(t);var u=e.loaded,c=e.total;this.loaded=u,this.total=c},Q=a((function(e){return function(e,t,r){var n;this.message=e,this.name="AjaxError",this.xhr=t,this.request=r,this.status=t.status,this.responseType=t.responseType;try{n=V(t)}catch(e){n=t.responseText}this.response=n}})),W=function(){function e(e,t){return Q.call(this,"ajax timeout",e,t),this.name="AjaxTimeoutError",this}return e.prototype=Object.create(Q.prototype),e}();var ee=J((function(e){return e.response}));var te,re=(te=function(e){var t;return t="string"==typeof e?{url:e}:e,new N((function(e){var n,o,i,s=r({async:!0,crossDomain:!1,withCredentials:!1,method:"GET",timeout:0,responseType:"json"},t),u=s.queryParams,c=s.body,a=s.headers,l=s.url;if(!l)throw new TypeError("url is required");if(u)if(l.includes("?")){var f=l.split("?");if(2<f.length)throw new TypeError("invalid url");i=new URLSearchParams(f[1]),new URLSearchParams(u).forEach((function(e,t){return i.set(t,e)})),l=f[0]+"?"+i}else l=l+"?"+(i=new URLSearchParams(u));var h={};if(a)for(var d in a)a.hasOwnProperty(d)&&(h[d.toLowerCase()]=a[d]);var p=s.crossDomain;p||"x-requested-with"in h||(h["x-requested-with"]="XMLHttpRequest");var v=s.withCredentials,y=s.xsrfCookieName,b=s.xsrfHeaderName;if((v||!p)&&y&&b){var m=null!==(o=null===(n=null===document||void 0===document?void 0:document.cookie.match(new RegExp("(^|;\\s*)("+y+")=([^;]*)")))||void 0===n?void 0:n.pop())&&void 0!==o?o:"";m&&(h[b]=m)}var w,g=function(e,t){var r;if(!e||"string"==typeof e||function(e){return"undefined"!=typeof FormData&&e instanceof FormData}(e)||function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}(e)||function(e){return ae(e,"ArrayBuffer")}(e)||function(e){return ae(e,"File")}(e)||function(e){return ae(e,"Blob")}(e)||function(e){return"undefined"!=typeof ReadableStream&&e instanceof ReadableStream}(e))return e;if(function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView(e)}(e))return e.buffer;if("object"==typeof e)return t["content-type"]=null!==(r=t["content-type"])&&void 0!==r?r:"application/json;charset=utf-8",JSON.stringify(e);throw new TypeError("Unknown body type")}(c,h),x=r(r({},s),{url:l,headers:h,body:g});w=t.createXHR?t.createXHR():new XMLHttpRequest;var S=t.progressSubscriber,E=t.includeDownloadProgress,_=void 0!==E&&E,T=t.includeUploadProgress,P=void 0!==T&&T,O=function(t,r){w.addEventListener(t,(function(){var t,n=r();null===(t=null==S?void 0:S.error)||void 0===t||t.call(S,n),e.error(n)}))};O("timeout",(function(){return new W(w,x)})),O("abort",(function(){return new Q("aborted",w,x)}));var j=function(e,t){return new K(t,w,x,e+"_"+t.type)},A=function(t,r,n){t.addEventListener(r,(function(t){e.next(j(n,t))}))};P&&[ie,se,ue].forEach((function(e){return A(w.upload,e,ne)})),S&&[ie,se].forEach((function(e){return w.upload.addEventListener(e,(function(e){var t;return null===(t=null==S?void 0:S.next)||void 0===t?void 0:t.call(S,e)}))})),_&&[ie,se].forEach((function(e){return A(w,e,oe)}));var I=function(t){var r="ajax error"+(t?" "+t:"");e.error(new Q(r,w,x))};w.addEventListener("error",(function(e){var t;null===(t=null==S?void 0:S.error)||void 0===t||t.call(S,e),I()})),w.addEventListener(ue,(function(t){var r,n,o=w.status;if(o<400){null===(r=null==S?void 0:S.complete)||void 0===r||r.call(S);var i=void 0;try{i=j(oe,t)}catch(t){return void e.error(t)}e.next(i),e.complete()}else null===(n=null==S?void 0:S.error)||void 0===n||n.call(S,t),I(o)}));var D=x.user,L=x.method,H=x.async;for(var d in D?w.open(L,l,H,D,x.password):w.open(L,l,H),H&&(w.timeout=x.timeout,w.responseType=x.responseType),"withCredentials"in w&&(w.withCredentials=x.withCredentials),h)h.hasOwnProperty(d)&&w.setRequestHeader(d,h[d]);return g?w.send(g):w.send(),function(){w&&4!==w.readyState&&w.abort()}}))},te.get=function(e,t){return re({method:"GET",url:e,headers:t})},te.post=function(e,t,r){return re({method:"POST",url:e,body:t,headers:r})},te.delete=function(e,t){return re({method:"DELETE",url:e,headers:t})},te.put=function(e,t,r){return re({method:"PUT",url:e,body:t,headers:r})},te.patch=function(e,t,r){return re({method:"PATCH",url:e,body:t,headers:r})},te.getJSON=function(e,t){return ee(re({method:"GET",url:e,headers:t}))},te),ne="upload",oe="download",ie="loadstart",se="progress",ue="load",ce=Object.prototype.toString;function ae(e,t){return ce.call(e)==="[object "+t+"]"}class le{constructor(e,t,r,n,o){this.id=e,this.from=t,this.subject=r,this.body=n,this.received=o}}class fe{constructor(e){const{id:t,from:r,subject:n,body:o,received:i}=e;this.letter=new le(t,r,n,o,i)}formation(e){let t=e;e.length>15&&(t=`${e.substring(0,15)}...`);const r=this.getDate(),n=document.createElement("li");return n.className="letter",n.id=this.letter.id,n.innerHTML=`\n      <span class="adress">${this.letter.from}</span>\n      <span class="theme">${t}</span>\n      <span class="date">${r}</span>`,n}getDate(){const e=new Date(this.letter.received),t=e.getFullYear().toString().slice(-2),r=fe.insertZeroes(e.getMonth()+1),n=fe.insertZeroes(e.getDate());return`${fe.insertZeroes(e.getHours())}:${fe.insertZeroes(e.getMinutes())} ${n}.${r}.${t}`}static insertZeroes(e){let t;return e<10?(t=`0${e}`,t):e}}const he=document.querySelector(".mail");new class{constructor(e,t){this.bindToDOM(e),this.url=t}bindToDOM(e){if(!(e instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=e}init(){this.stream()}stream(){var e,t;(void 0===(e=5e3)&&(e=0),void 0===t&&(t=g),e<0&&(e=0),function(e,t,r){void 0===e&&(e=0),void 0===r&&(r=x);var n,o=-1;return null!=t&&((n=t)&&c(n.schedule)?r=t:o=t),new N((function(t){var n=function(e){return e instanceof Date&&!isNaN(e)}(e)?+e-r.now():e;n<0&&(n=0);var i=0;return r.schedule((function(){t.closed||(t.next(i++),0<=o?this.schedule(void 0,o):t.complete())}),n)}))}(e,e,t)).subscribe((e=>this.getMessages()))}getMessages(){re.getJSON(`${this.url}/messages/unread`).pipe(G((e=>{return r=c(t=()=>e)?t:function(){return t},new N((function(e){return e.error(r())}));var t,r})),J((e=>{if(0===e.messages.length)throw new Error;return e}))).subscribe((e=>this.renderMessages(e.messages)),(e=>console.log("empty mailbox")))}renderMessages(e){e.forEach((e=>{const t=new fe(e).formation(e.subject);this.container.prepend(t)}))}}(he,"https://email-65j9.onrender.com").init()})();