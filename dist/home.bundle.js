!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function i(e,t){var n=b(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=b(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),i(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var l=x++;n=m||(m=s(t)),r=d.bind(null,n,l,!1),o=d.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},g=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){return document.querySelector(e)},b=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=v.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),m=null,x=0,y=[],w=n(2);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=g()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=h[s.id];c.refs--,i.push(c)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete h[c.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},,,,function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0;n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"*{font-family:sans-serif}body{margin:0;padding:0}header{position:relative;margin:0;padding:0;top:0;right:0;left:0;background-position:50%;background-size:cover;background-repeat:no-repeat;height:80vh;color:#fff;transition:.75s;text-shadow:0 0 5px rgba(0,0,0,.2)}header.floating .real_header{z-index:90;position:fixed;top:0;right:0;left:0;transition:background-color .25s;background:#fff;height:90px;box-shadow:0 0 15px rgba(0,0,0,.4);color:#000;text-shadow:0 0 0 transparent}header.floating .real_header nav a{color:#000;text-shadow:0 0 0 transparent;text-transform:capitalize;transition:.25s}header.floating .real_header nav a:hover{color:orange}header h1{left:25px;font-size:25px;padding:0;margin:0}header h1,header nav{position:absolute;top:30px}header nav{right:25px;height:30px;display:block;line-height:30px}header nav a{color:#fff;text-decoration:none;text-shadow:0 0 10px rgba(0,0,0,.5);text-transform:uppercase;margin-left:10px;margin-right:15px;display:inline-block}header .title{display:block;transform:translate(-50%,calc(-5vh - 50%));font-size:5vh}header .content-header,header .title{text-align:center;position:absolute;top:50%;left:50%}header .content-header{transform:translate(-50%,calc(5vh - 50%));width:100%;max-width:650px;text-shadow:0 0 10px rgba(0,0,0,.5)}@media screen and (max-width:750px){header .title{text-align:center;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:5vh}header .content-header{display:none}}@media screen and (max-width:670px){header nav{display:none}}header.study_tool{height:50vh}header.study_tool canvas{position:absolute;height:calc(100% - 90px);width:100%;background:#fff;top:90px;right:0;bottom:0;left:0}section{position:relative;text-align:center;padding:25px}section h2{padding:0;margin:0}section p{margin:15px auto;max-width:650px;width:100%}section:nth-child(odd){z-index:70;background:#e7e7e7;color:#666}section:nth-child(2n){z-index:75;box-shadow:0 0 15px rgba(0,0,0,.1)}section.graph,section.stats{background-position:50%;background-size:cover;background-repeat:no-repeat}section .action-button,section button{display:inline-block;text-decoration:none;color:#fff;border:none;background:#db332f;box-shadow:0 0 10px rgba(0,0,0,.05);margin:15px;border-radius:5px;padding:17px 21px}footer{background:#000;color:#fff;text-align:center;padding:25px}",""])},function(e,t,n){"use strict";(function(e){if(Object.defineProperty(t,"__esModule",{value:!0}),n(6),document.querySelector("header").style.backgroundImage="url(./images/site-header.jpg)",document.querySelector(".graph").style.backgroundImage="url(./images/graph.jpg)",document.querySelector(".stats").style.backgroundImage="url(./images/stats.jpg)",window.addEventListener("scroll",function(e){window.scrollY>20?document.querySelector("header").classList.add("floating"):document.querySelector("header").classList.remove("floating")}),"undefined"!=typeof process){var r=n(9),o=JSON.parse(r.readFileSync(e+"/package.json","utf-8")),i=new XMLHttpRequest;i.open("GET","https://math.simonloir.be/package.json",!0),i.onload=function(e){4===i.readyState&&(200===i.status?JSON.parse(i.responseText).version==o.version?document.querySelector(".content-header").innerHTML="SMath est disponible hors connexion et est à jour en version "+o.version:document.querySelector(".content-header").innerHTML="SMath est disponible hors connexion mais n'est pas à jour : la version  "+JSON.parse(i.responseText).version+" est disponible pour remplacer la version locale : "+o.version:console.error(i.statusText))},i.onerror=function(e){console.error(i.statusText)},i.send(null)}"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(function(e){console.log("activated")})}).call(t,"/")},function(e,t){e.exports=require("fs")}]);