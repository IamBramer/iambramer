!function(){function t(){t=function(){},ct.Symbol||(ct.Symbol=e)}function e(t){return"jscomp_symbol_"+(t||"")+ut++}function i(){t();var e=ct.Symbol.iterator;e||(e=ct.Symbol.iterator=ct.Symbol("iterator")),"function"!=typeof Array.prototype[e]&&ht(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return n(this)}}),i=function(){}}function n(t){var e=0;return o(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})}function o(t){return i(),t={next:t},t[ct.Symbol.iterator]=function(){return this},t}function s(t){if(!(t instanceof Array)){i();var e=t[Symbol.iterator];t=e?e.call(t):n(t);for(var o=[];!(e=t.next()).done;)o.push(e.value);t=o}return t}function r(t,e){if(t&&1==t.nodeType&&e){if("string"==typeof e||1==e.nodeType)return t==e||a(t,e);if("length"in e)for(var i,n=0;i=e[n];n++)if(t==i||a(t,i))return!0}return!1}function a(t,e){if("string"!=typeof e)return!1;if(dt)return dt.call(t,e);e=t.parentNode.querySelectorAll(e);for(var i,n=0;i=e[n];n++)if(i==t)return!0;return!1}function h(t){for(var e=[];t&&t.parentNode&&1==t.parentNode.nodeType;)t=t.parentNode,e.push(t);return e}function c(t,e,i){function n(t){var n;if(s.composed&&"function"==typeof t.composedPath)for(var o,a=t.composedPath(),c=0;o=a[c];c++)1==o.nodeType&&r(o,e)&&(n=o);else t:{if((n=t.target)&&1==n.nodeType&&e)for(n=[n].concat(h(n)),a=0;c=n[a];a++)if(r(c,e)){n=c;break t}n=void 0}n&&i.call(n,t,n)}var o=document,s={composed:!0,S:!0},s=void 0===s?{}:s;return o.addEventListener(t,n,s.S),{j:function(){o.removeEventListener(t,n,s.S)}}}function u(t){var e={};if(!t||1!=t.nodeType)return e;if(t=t.attributes,!t.length)return{};for(var i,n=0;i=t[n];n++)e[i.name]=i.value;return e}function l(t){if(t=t&&"."!=t?t:location.href,vt[t])return vt[t];if(bt.href=t,"."==t.charAt(0)||"/"==t.charAt(0))return l(bt.href);var e="80"==bt.port||"443"==bt.port?"":bt.port,e="0"==e?"":e,i=bt.host.replace(ft,"");return vt[t]={hash:bt.hash,host:i,hostname:bt.hostname,href:bt.href,origin:bt.origin?bt.origin:bt.protocol+"//"+i,pathname:"/"==bt.pathname.charAt(0)?bt.pathname:"/"+bt.pathname,port:e,protocol:bt.protocol,search:bt.search}}function d(t,e){var i=this;this.context=t,this.P=e,this.f=(this.c=/Task$/.test(e))?t.get(e):t[e],this.b=[],this.a=[],this.i=function(t){for(var e=[],n=0;n<arguments.length;++n)e[n-0]=arguments[n];return i.a[i.a.length-1].apply(null,[].concat(s(e)))},this.c?t.set(e,this.i):t[e]=this.i}function f(t,e,i){t=p(t,e),t.b.push(i),v(t)}function b(t,e,i){t=p(t,e),-1<(i=t.b.indexOf(i))&&(t.b.splice(i,1),0<t.b.length?v(t):t.j())}function v(t){t.a=[];for(var e,i=0;e=t.b[i];i++){var n=t.a[i-1]||t.f.bind(t.context);t.a.push(e(n))}}function p(t,e){var i=pt.filter(function(i){return i.context==t&&i.P==e})[0];return i||(i=new d(t,e),pt.push(i)),i}function m(t,e,i,n,o,s){if("function"==typeof n){var r=i.get("buildHitTask");return{buildHitTask:function(i){i.set(t,null,!0),i.set(e,null,!0),n(i,o,s),r(i)}}}return gt({},t,e)}function g(t,e){var i=u(t),n={};return Object.keys(i).forEach(function(t){if(!t.indexOf(e)&&t!=e+"on"){var o=i[t];"true"==o&&(o=!0),"false"==o&&(o=!1),t=O(t.slice(e.length)),n[t]=o}}),n}function w(t){"loading"==document.readyState?document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e),t()}):t()}function y(t,e){var i;return function(n){for(var o=[],r=0;r<arguments.length;++r)o[r-0]=arguments[r];clearTimeout(i),i=setTimeout(function(){return t.apply(null,[].concat(s(o)))},e)}}function T(t){function e(){i||(i=!0,t())}var i=!1;return setTimeout(e,2e3),e}function k(t,e){function i(){clearTimeout(o.timeout),o.send&&b(t,"send",o.send),delete mt[n],o.R.forEach(function(t){return t()})}var n=t.get("trackingId"),o=mt[n]=mt[n]||{};clearTimeout(o.timeout),o.timeout=setTimeout(i,0),o.R=o.R||[],o.R.push(e),o.send||(o.send=function(t){return function(e){for(var n=[],o=0;o<arguments.length;++o)n[o-0]=arguments[o];i(),t.apply(null,[].concat(s(n)))}},f(t,"send",o.send))}function O(t){return t.replace(/[\-\_]+(\w?)/g,function(t,e){return e.toUpperCase()})}function E(t){return"object"==typeof t&&null!==t}function S(t,e){var i=window.GoogleAnalyticsObject||"ga";window[i]=window[i]||function(t){for(var e=[],n=0;n<arguments.length;++n)e[n-0]=arguments[n];(window[i].q=window[i].q||[]).push(e)},window.gaDevIds=window.gaDevIds||[],0>window.gaDevIds.indexOf("i5iSjo")&&window.gaDevIds.push("i5iSjo"),window[i]("provide",t,e),window.gaplugins=window.gaplugins||{},window.gaplugins[t.charAt(0).toUpperCase()+t.slice(1)]=e}function x(t,e){t.set("&_av","2.3.2");var i=t.get("&_au"),i=parseInt(i||"0",16).toString(2);if(i.length<yt)for(var n=yt-i.length;n;)i="0"+i,n--;e=yt-e,i=i.substr(0,e)+1+i.substr(e+1),t.set("&_au",parseInt(i||"0",2).toString(16))}function I(t,e){x(t,wt.T),this.a=gt({},e),this.i=t,this.b=this.a.stripQuery&&this.a.queryDimensionIndex?"dimension"+this.a.queryDimensionIndex:null,this.f=this.f.bind(this),this.c=this.c.bind(this),f(t,"get",this.f),f(t,"buildHitTask",this.c)}function j(t,e){var i=l(e.page||e.location),n=i.pathname;if(t.a.indexFilename){var o=n.split("/");t.a.indexFilename==o[o.length-1]&&(o[o.length-1]="",n=o.join("/"))}return"remove"==t.a.trailingSlash?n=n.replace(/\/+$/,""):"add"==t.a.trailingSlash&&(/\.\w+$/.test(n)||"/"==n.substr(-1)||(n+="/")),n={page:n+(t.a.stripQuery?"":i.search)},e.location&&(n.location=e.location),t.b&&(n[t.b]=i.search.slice(1)||"(not set)"),"function"==typeof t.a.urlFieldsFilter?(e=t.a.urlFieldsFilter(n,l),i={},i.page=e.page,i.location=e.location,i[t.b]=e[t.b],i):n}function L(t,e){var i=this;if(x(t,wt.U),window.addEventListener){this.a=gt({events:["click"],fieldsObj:{},attributePrefix:"ga-"},e),this.f=t,this.c=this.c.bind(this);var n="["+this.a.attributePrefix+"on]";this.b={},this.a.events.forEach(function(t){i.b[t]=c(t,n,i.c)})}}function F(t,e){var i=this;x(t,wt.V),window.IntersectionObserver&&window.MutationObserver&&(this.a=gt({rootMargin:"0px",fieldsObj:{},attributePrefix:"ga-"},e),this.c=t,this.M=this.M.bind(this),this.O=this.O.bind(this),this.K=this.K.bind(this),this.L=this.L.bind(this),this.b=null,this.items=[],this.h={},this.g={},w(function(){i.a.elements&&i.observeElements(i.a.elements)}))}function A(t,e){var i=[],n={},o={};return e.length&&e.forEach(function(e){e=P(e),i.push(e),o[e.id]=t.h[e.id]||null,n[e.threshold]=t.g[e.threshold]||null}),{items:i,h:o,g:n}}function M(t,e,i){1==e.nodeType&&e.id in t.h&&i(e.id);for(var n,o=0;n=e.childNodes[o];o++)M(t,n,i)}function P(t){return"string"==typeof t&&(t={id:t}),gt({threshold:0,trackFirstImpressionOnly:!0},t)}function C(){this.a={}}function D(t,e){(t.a.externalSet=t.a.externalSet||[]).push(e)}function N(t,e){e=void 0===e?{}:e,this.a={},this.b=t,this.w=e,this.l=null}function H(t,e,i){return t=["autotrack",t,e].join(":"),kt[t]||(kt[t]=new N(t,i),Ot||(window.addEventListener("storage",V),Ot=!0)),kt[t]}function B(){if(null!=Tt)return Tt;try{window.localStorage.setItem("autotrack","autotrack"),window.localStorage.removeItem("autotrack"),Tt=!0}catch(t){Tt=!1}return Tt}function U(t){if(t.l={},B())try{window.localStorage.removeItem(t.b)}catch(t){}}function V(t){var e=kt[t.key];if(e){var i=gt({},e.w,q(t.oldValue));t=gt({},e.w,q(t.newValue)),e.l=t,e.ca("externalSet",t,i)}}function q(t){var e={};if(t)try{e=JSON.parse(t)}catch(t){}return e}function K(t,e,i){this.f=t,this.timeout=e||St,this.timeZone=i,this.b=this.b.bind(this),f(t,"sendHitTask",this.b);try{this.c=new Intl.DateTimeFormat("en-US",{timeZone:this.timeZone})}catch(t){}this.a=H(t.get("trackingId"),"session",{hitTime:0,isExpired:!1})}function R(t,e){x(t,wt.W),window.addEventListener&&(this.a=gt({increaseThreshold:20,sessionTimeout:St,fieldsObj:{}},e),this.c=t,this.b=Z(this),this.f=y(this.f.bind(this),500),this.m=this.m.bind(this),this.i=H(t.get("trackingId"),"plugins/max-scroll-tracker"),this.s=new K(t,this.a.sessionTimeout,this.a.timeZone),f(t,"set",this.m),_(this))}function _(t){100>(t.i.get()[t.b]||0)&&window.addEventListener("scroll",t.f)}function Z(t){return t=l(t.c.get("page")||t.c.get("location")),t.pathname+t.search}function G(t,e){x(t,wt.X),window.matchMedia&&(this.a=gt({changeTemplate:this.changeTemplate,changeTimeout:1e3,fieldsObj:{}},e),E(this.a.definitions)&&(e=this.a.definitions,this.a.definitions=Array.isArray(e)?e:[e],this.b=t,this.c=[],J(this)))}function J(t){t.a.definitions.forEach(function(e){if(e.name&&e.dimensionIndex){var i=$(e);t.b.set("dimension"+e.dimensionIndex,i),Q(t,e)}})}function $(t){var e;return t.items.forEach(function(t){W(t.media).matches&&(e=t)}),e?e.name:"(not set)"}function Q(t,e){e.items.forEach(function(i){i=W(i.media);var n=y(function(){var i=$(e),n=t.b.get("dimension"+e.dimensionIndex);i!==n&&(t.b.set("dimension"+e.dimensionIndex,i),i={transport:"beacon",eventCategory:e.name,eventAction:"change",eventLabel:t.a.changeTemplate(n,i),nonInteraction:!0},t.b.send("event",m(i,t.a.fieldsObj,t.b,t.a.hitFilter)))},t.a.changeTimeout);i.addListener(n),t.c.push({fa:i,da:n})})}function W(t){return xt[t]||(xt[t]=window.matchMedia(t))}function Y(t,e){x(t,wt.Y),window.addEventListener&&(this.a=gt({formSelector:"form",shouldTrackOutboundForm:this.shouldTrackOutboundForm,fieldsObj:{},attributePrefix:"ga-"},e),this.b=t,this.c=c("submit",this.a.formSelector,this.f.bind(this)))}function X(t,e){var i=this;x(t,wt.Z),window.addEventListener&&(this.a=gt({events:["click"],linkSelector:"a, area",shouldTrackOutboundLink:this.shouldTrackOutboundLink,fieldsObj:{},attributePrefix:"ga-"},e),this.f=t,this.c=this.c.bind(this),this.b={},this.a.events.forEach(function(t){i.b[t]=c(t,i.a.linkSelector,i.c)}))}function z(t,e){var i=this;x(t,wt.$),document.visibilityState&&(this.a=gt({sessionTimeout:St,visibleThreshold:5e3,sendInitialPageview:!1,fieldsObj:{}},e),this.b=t,this.i=this.f=null,this.s=!1,this.v=this.v.bind(this),this.o=this.o.bind(this),this.G=this.G.bind(this),this.N=this.N.bind(this),this.c=H(t.get("trackingId"),"plugins/page-visibility-tracker"),D(this.c,this.N),this.m=new K(t,this.a.sessionTimeout,this.a.timeZone),f(t,"set",this.v),window.addEventListener("unload",this.G),document.addEventListener("visibilitychange",this.o),this.o(),k(this.b,function(){if("visible"==document.visibilityState)i.a.sendInitialPageview&&(it(i,{ea:!0}),i.s=!0);else if(i.a.sendInitialPageview&&i.a.pageLoadsMetricIndex){var t={},t=(t.transport="beacon",t.eventCategory="Page Visibility",t.eventAction="page load",t.eventLabel="(not set)",t["metric"+i.a.pageLoadsMetricIndex]=1,t.nonInteraction=!0,t);i.b.send("event",m(t,i.a.fieldsObj,i.b,i.a.hitFilter))}}))}function tt(t,e){return"visible"==t.f&&"hidden"==e.state&&e.pageId!=It&&(e.state="visible",e.pageId=It,t.c.set(e)),e}function et(t,e,i){i=(i||{}).hitTime;var n={hitTime:i},n=(n||{}).hitTime;(e=e.time&&!t.m.isExpired()?(n||+new Date)-e.time:0)&&e>=t.a.visibleThreshold&&(e=Math.round(e/1e3),n={transport:"beacon",nonInteraction:!0,eventCategory:"Page Visibility",eventAction:"track",eventValue:e,eventLabel:"(not set)"},i&&(n.queueTime=+new Date-i),t.a.visibleMetricIndex&&(n["metric"+t.a.visibleMetricIndex]=e),t.b.send("event",m(n,t.a.fieldsObj,t.b,t.a.hitFilter)))}function it(t,e){var i=e||{};e=i.hitTime;var i=i.ea,n={transport:"beacon"};e&&(n.queueTime=+new Date-e),i&&t.a.pageLoadsMetricIndex&&(n["metric"+t.a.pageLoadsMetricIndex]=1),t.b.send("pageview",m(n,t.a.fieldsObj,t.b,t.a.hitFilter))}function nt(t,e){x(t,wt.aa),window.addEventListener&&(this.a=gt({fieldsObj:{},hitFilter:null},e),this.b=t,this.u=this.u.bind(this),this.J=this.J.bind(this),this.D=this.D.bind(this),this.A=this.A.bind(this),this.B=this.B.bind(this),this.F=this.F.bind(this),"complete"!=document.readyState?window.addEventListener("load",this.u):this.u())}function ot(t){try{window.twttr.ready(function(){window.twttr.events.unbind("tweet",t.D),window.twttr.events.unbind("follow",t.A)})}catch(t){}}function st(t,e){x(t,wt.ba),history.pushState&&window.addEventListener&&(this.a=gt({shouldTrackUrlChange:this.shouldTrackUrlChange,trackReplaceState:!1,fieldsObj:{},hitFilter:null},e),this.b=t,this.c=location.pathname+location.search,this.H=this.H.bind(this),this.I=this.I.bind(this),this.C=this.C.bind(this),f(history,"pushState",this.H),f(history,"replaceState",this.I),window.addEventListener("popstate",this.C))}function rt(t,e){setTimeout(function(){var i=t.c,n=location.pathname+location.search;i!=n&&t.a.shouldTrackUrlChange.call(t,n,i)&&(t.c=n,t.b.set({page:n,title:document.title}),(e||t.a.trackReplaceState)&&t.b.send("pageview",m({transport:"beacon"},t.a.fieldsObj,t.b,t.a.hitFilter)))},0)}var at,ht="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,i){if(i.get||i.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=i.value)},ct="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ut=0,lt=window.Element.prototype,dt=lt.matches||lt.matchesSelector||lt.webkitMatchesSelector||lt.mozMatchesSelector||lt.msMatchesSelector||lt.oMatchesSelector,ft=/:(80|443)$/,bt=document.createElement("a"),vt={},pt=[];d.prototype.j=function(){var t=pt.indexOf(this);-1<t&&(pt.splice(t,1),this.c?this.context.set(this.P,this.f):this.context[this.P]=this.f)};var mt={},gt=Object.assign||function(t,e){for(var i=[],n=1;n<arguments.length;++n)i[n-1]=arguments[n];for(var n=0,o=i.length;n<o;n++){var s,r=Object(i[n]);for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},wt={T:1,U:2,V:3,X:4,Y:5,Z:6,$:7,aa:8,ba:9,W:10},yt=Object.keys(wt).length;I.prototype.f=function(t){var e=this;return function(i){if("page"==i||i==e.b){var n={location:t("location"),page:t("page")};return j(e,n)[i]}return t(i)}},I.prototype.c=function(t){var e=this;return function(i){var n=j(e,{location:i.get("location"),page:i.get("page")});i.set(n,null,!0),t(i)}},I.prototype.remove=function(){b(this.i,"get",this.f),b(this.i,"buildHitTask",this.c)},S("cleanUrlTracker",I),L.prototype.c=function(t,e){var i=this.a.attributePrefix;if(!(0>e.getAttribute(i+"on").split(/\s*,\s*/).indexOf(t.type))){var i=g(e,i),n=gt({},this.a.fieldsObj,i);this.f.send(i.hitType||"event",m({transport:"beacon"},n,this.f,this.a.hitFilter,e,t))}},L.prototype.remove=function(){var t=this;Object.keys(this.b).forEach(function(e){t.b[e].j()})},S("eventTracker",L),at=F.prototype,at.observeElements=function(t){var e=this;t=A(this,t),this.items=this.items.concat(t.items),this.h=gt({},t.h,this.h),this.g=gt({},t.g,this.g),t.items.forEach(function(t){var i=e.g[t.threshold]=e.g[t.threshold]||new IntersectionObserver(e.O,{rootMargin:e.a.rootMargin,threshold:[+t.threshold]});(t=e.h[t.id]||(e.h[t.id]=document.getElementById(t.id)))&&i.observe(t)}),this.b||(this.b=new MutationObserver(this.M),this.b.observe(document.body,{childList:!0,subtree:!0})),requestAnimationFrame(function(){})},at.unobserveElements=function(t){var e=[],i=[];if(this.items.forEach(function(n){t.some(function(t){return t=P(t),t.id===n.id&&t.threshold===n.threshold&&t.trackFirstImpressionOnly===n.trackFirstImpressionOnly})?i.push(n):e.push(n)}),e.length){var n=A(this,e),o=A(this,i);this.items=n.items,this.h=n.h,this.g=n.g,i.forEach(function(t){if(!n.h[t.id]){var e=o.g[t.threshold],i=o.h[t.id];i&&e.unobserve(i),n.g[t.threshold]||o.g[t.threshold].disconnect()}})}else this.unobserveAllElements()},at.unobserveAllElements=function(){var t=this;Object.keys(this.g).forEach(function(e){t.g[e].disconnect()}),this.b.disconnect(),this.b=null,this.items=[],this.h={},this.g={}},at.M=function(t){for(var e,i=0;e=t[i];i++){for(var n,o=0;n=e.removedNodes[o];o++)M(this,n,this.L);for(o=0;n=e.addedNodes[o];o++)M(this,n,this.K)}},at.O=function(t){for(var e,i=[],n=0;e=t[n];n++)for(var o,s=0;o=this.items[s];s++){var r;if((r=e.target.id===o.id)&&((r=o.threshold)?r=e.intersectionRatio>=r:(r=e.intersectionRect,r=0<r.top||0<r.bottom||0<r.left||0<r.right)),r){var a=o.id;r=document.getElementById(a);var a={transport:"beacon",eventCategory:"Viewport",eventAction:"impression",eventLabel:a,nonInteraction:!0},h=gt({},this.a.fieldsObj,g(r,this.a.attributePrefix));this.c.send("event",m(a,h,this.c,this.a.hitFilter,r)),o.trackFirstImpressionOnly&&i.push(o)}}i.length&&this.unobserveElements(i)},at.K=function(t){var e=this,i=this.h[t]=document.getElementById(t);this.items.forEach(function(n){t==n.id&&e.g[n.threshold].observe(i)})},at.L=function(t){var e=this,i=this.h[t];this.items.forEach(function(n){t==n.id&&e.g[n.threshold].unobserve(i)}),this.h[t]=null},at.remove=function(){this.unobserveAllElements()},S("impressionTracker",F),C.prototype.ca=function(t,e){for(var i=[],n=1;n<arguments.length;++n)i[n-1]=arguments[n];(this.a[t]=this.a[t]||[]).forEach(function(t){return t.apply(null,[].concat(s(i)))})};var Tt,kt={},Ot=!1;!function(t,e){function i(){}i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t;for(var n in e)if(Object.defineProperties){var o=Object.getOwnPropertyDescriptor(e,n);o&&Object.defineProperty(t,n,o)}else t[n]=e[n]}(N,C),N.prototype.get=function(){if(this.l)return this.l;if(B())try{this.l=q(window.localStorage.getItem(this.b))}catch(t){}return this.l=gt({},this.w,this.l)},N.prototype.set=function(t){if(this.l=gt({},this.w,this.l,t),B())try{var e=JSON.stringify(this.l);window.localStorage.setItem(this.b,e)}catch(t){}},N.prototype.j=function(){delete kt[this.b],Object.keys(kt).length||(window.removeEventListener("storage",V),Ot=!1)};var Et={};K.prototype.isExpired=function(t){if(t=t||this.a.get(),t.isExpired)return!0;var e=new Date,i=(t=t.hitTime)&&new Date(t);return!(!t||!(e-i>6e4*this.timeout||this.c&&this.c.format(e)!=this.c.format(i)))},K.prototype.b=function(t){var e=this;return function(i){t(i);var n=e.a.get(),o=e.isExpired(n);i=i.get("sessionControl"),n.hitTime=+new Date,("start"==i||o)&&(n.isExpired=!1),"end"==i&&(n.isExpired=!0),e.a.set(n)}},K.prototype.j=function(){b(this.f,"sendHitTask",this.b),this.a.j(),delete Et[this.f.get("trackingId")]};var St=30;R.prototype.f=function(){var t=document.documentElement,e=document.body,t=Math.min(100,Math.max(0,Math.round(window.pageYOffset/(Math.max(t.offsetHeight,t.scrollHeight,e.offsetHeight,e.scrollHeight)-window.innerHeight)*100)));if(this.s.isExpired())U(this.i);else if(e=this.i.get()[this.b]||0,t>e&&(100!=t&&100!=e||window.removeEventListener("scroll",this.f),e=t-e,100==t||e>=this.a.increaseThreshold)){var i={};this.i.set((i[this.b]=t,i)),t={transport:"beacon",eventCategory:"Max Scroll",eventAction:"increase",eventValue:e,eventLabel:String(t),nonInteraction:!0},this.a.maxScrollMetricIndex&&(t["metric"+this.a.maxScrollMetricIndex]=e),this.c.send("event",m(t,this.a.fieldsObj,this.c,this.a.hitFilter))}},R.prototype.m=function(t){var e=this;return function(i,n){t(i,n);var o={};(E(i)?i:(o[i]=n,o)).page&&(i=e.b,e.b=Z(e),e.b!=i&&_(e))}},R.prototype.remove=function(){this.s.j(),window.removeEventListener("scroll",this.f),b(this.c,"set",this.m)},S("maxScrollTracker",R);var xt={};G.prototype.remove=function(){for(var t,e=0;t=this.c[e];e++)t.fa.removeListener(t.da)},G.prototype.changeTemplate=function(t,e){return t+" => "+e},S("mediaQueryTracker",G),Y.prototype.f=function(t,e){var i={transport:"beacon",eventCategory:"Outbound Form",eventAction:"submit",eventLabel:l(e.action).href};if(this.a.shouldTrackOutboundForm(e,l)){navigator.sendBeacon||(t.preventDefault(),i.hitCallback=T(function(){e.submit()}));var n=gt({},this.a.fieldsObj,g(e,this.a.attributePrefix));this.b.send("event",m(i,n,this.b,this.a.hitFilter,e,t))}},Y.prototype.shouldTrackOutboundForm=function(t,e){return t=e(t.action),t.hostname!=location.hostname&&"http"==t.protocol.slice(0,4)},Y.prototype.remove=function(){this.c.j()},S("outboundFormTracker",Y),X.prototype.c=function(t,e){if(this.a.shouldTrackOutboundLink(e,l)){var i=e.getAttribute("href")||e.getAttribute("xlink:href"),n=l(i),o={transport:"beacon",eventCategory:"Outbound Link",eventAction:t.type,eventLabel:n.href};navigator.sendBeacon||"click"!=t.type||"_blank"==e.target||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||1<t.which||window.addEventListener("click",function(t){t.defaultPrevented||(t.preventDefault(),o.hitCallback=T(function(){location.href=i}))}),n=gt({},this.a.fieldsObj,g(e,this.a.attributePrefix)),this.f.send("event",m(o,n,this.f,this.a.hitFilter,e,t))}},X.prototype.shouldTrackOutboundLink=function(t,e){return t=t.getAttribute("href")||t.getAttribute("xlink:href"),e=e(t),e.hostname!=location.hostname&&"http"==e.protocol.slice(0,4)},X.prototype.remove=function(){var t=this;Object.keys(this.b).forEach(function(e){t.b[e].j()})},S("outboundLinkTracker",X);var It=function t(e){return e?(e^16*Math.random()>>e/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,t)}();at=z.prototype,at.o=function(){var t=this;if("visible"==document.visibilityState||"hidden"==document.visibilityState){var e=tt(this,this.c.get()),i={time:+new Date,state:document.visibilityState,pageId:It};this.f&&"visible"==document.visibilityState&&this.a.sendInitialPageview&&!this.s&&(it(this),this.s=!0),this.i&&"hidden"==document.visibilityState&&clearTimeout(this.i),this.m.isExpired()?"hidden"==this.f&&"visible"==document.visibilityState?(clearTimeout(this.i),this.i=setTimeout(function(){t.c.set(i),it(t,{hitTime:i.time})},this.a.visibleThreshold)):"hidden"==document.visibilityState&&U(this.c):(e.pageId==It&&"visible"==e.state&&et(this,e),this.c.set(i)),this.f=document.visibilityState}},at.v=function(t){var e=this;return function(i,n){var o={},o=E(i)?i:(o[i]=n,o);o.page&&o.page!==e.b.get("page")&&"visible"==e.f&&e.o(),t(i,n)}},at.N=function(t,e){t.time!=e.time&&e.pageId==It&&"visible"==e.state&&et(this,e,{hitTime:t.time})},at.G=function(){"hidden"!=this.f&&this.o()},at.remove=function(){this.c.j(),this.m.j(),b(this.b,"set",this.v),window.removeEventListener("unload",this.G),document.removeEventListener("visibilitychange",this.o)},S("pageVisibilityTracker",z),at=nt.prototype,at.u=function(){if(window.FB)try{window.FB.Event.subscribe("edge.create",this.B),window.FB.Event.subscribe("edge.remove",this.F)}catch(t){}window.twttr&&this.J()},at.J=function(){var t=this;try{window.twttr.ready(function(){window.twttr.events.bind("tweet",t.D),window.twttr.events.bind("follow",t.A)})}catch(t){}},at.D=function(t){if("tweet"==t.region){var e={transport:"beacon",socialNetwork:"Twitter",socialAction:"tweet",socialTarget:t.data.url||t.target.getAttribute("data-url")||location.href};this.b.send("social",m(e,this.a.fieldsObj,this.b,this.a.hitFilter,t.target,t))}},at.A=function(t){if("follow"==t.region){var e={transport:"beacon",socialNetwork:"Twitter",socialAction:"follow",socialTarget:t.data.screen_name||t.target.getAttribute("data-screen-name")};this.b.send("social",m(e,this.a.fieldsObj,this.b,this.a.hitFilter,t.target,t))}},at.B=function(t){this.b.send("social",m({transport:"beacon",socialNetwork:"Facebook",socialAction:"like",socialTarget:t},this.a.fieldsObj,this.b,this.a.hitFilter))},at.F=function(t){this.b.send("social",m({transport:"beacon",socialNetwork:"Facebook",socialAction:"unlike",socialTarget:t},this.a.fieldsObj,this.b,this.a.hitFilter))},at.remove=function(){window.removeEventListener("load",this.u);try{window.FB.Event.unsubscribe("edge.create",this.B),window.FB.Event.unsubscribe("edge.remove",this.F)}catch(t){}ot(this)},S("socialWidgetTracker",nt),at=st.prototype,at.H=function(t){var e=this;return function(i){for(var n=[],o=0;o<arguments.length;++o)n[o-0]=arguments[o];t.apply(null,[].concat(s(n))),rt(e,!0)}},at.I=function(t){var e=this;return function(i){for(var n=[],o=0;o<arguments.length;++o)n[o-0]=arguments[o];t.apply(null,[].concat(s(n))),rt(e,!1)}},at.C=function(){rt(this,!0)},at.shouldTrackUrlChange=function(t,e){return!(!t||!e)},at.remove=function(){b(history,"pushState",this.H),b(history,"replaceState",this.I),window.removeEventListener("popstate",this.C)},S("urlChangeTracker",st)}();