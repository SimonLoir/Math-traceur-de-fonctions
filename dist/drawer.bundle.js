/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IndexOutOfArrayExecption = /** @class */ (function () {
    function IndexOutOfArrayExecption(message) {
        this.message = message;
        this.name = 'IndexOutOfArrayException';
    }
    return IndexOutOfArrayExecption;
}());
exports.IndexOutOfArrayExecption = IndexOutOfArrayExecption;
var ExtJsObject = /** @class */ (function () {
    function ExtJsObject(element, e_index) {
        var re;
        if (typeof element === 'string') {
            re = document.querySelectorAll(element);
            if (e_index != undefined) {
                re = [re[e_index]];
            }
        }
        else if (element == undefined || element == document) {
            /**
             * @param {Function} toDo function that is called when the document has been loaded
             */
            this.ready = function (toDo) {
                document.addEventListener('DOMContentLoaded', toDo);
            };
            return this;
        }
        else if (typeof element === 'object') {
            if (element.length == undefined) {
                re = [element];
            }
            else if (e_index != undefined) {
                re = [element[e_index]];
            }
            else {
                re = element;
            }
        }
        else if (element.type == 'ExtJsObject') {
            return element;
        }
        else {
            return;
        }
        this.type = 'ExtJsObject';
        this.node = re;
    }
    /**
     * @param {String} html HTML to put inside the element or undefined or nothing
     * @return {String|Object} HTML that is inside the first element or the current instance.
     */
    ExtJsObject.prototype.html = function (html) {
        if (html != undefined) {
            for (var i = 0; i < this.node.length; i++) {
                var e = this.node[i];
                if (typeof html === 'string' || typeof html === 'number') {
                    e.innerHTML = html;
                }
            }
            return this;
        }
        else {
            return this.node[0].innerHTML;
        }
    };
    /**
     * @param {String} text text to put inside the element or undefined or nothing
     * @return {String|Object} text that is inside the first element or the current instance.
     */
    ExtJsObject.prototype.text = function (text) {
        if (text != undefined) {
            for (var i = 0; i < this.node.length; i++) {
                var e = this.node[i];
                if (typeof text === 'string' || typeof text === 'number') {
                    e.innerText = text;
                }
            }
            return this;
        }
        else {
            return this.node[0].innerText;
        }
    };
    /**
     * @param {Function|Undefined} toDo function that is called when somebody clicks on the element  or undefined or nothing
     * @param {String|Undefined} element specifies the element on which we are going to listen the click.
     */
    ExtJsObject.prototype.click = function (toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('click', toDo);
                }
                else {
                    e.click();
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('click', function (event) {
                    if (x.querySelector(element) == event.target) {
                        var xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
            else {
                var x = e;
                var xe = x.querySelector(element);
                xe.click();
            }
        }
        return this;
    };
    /**
     * @param index index of the element or undefined or nothing
     * @return {Object} a DOM element
     */
    ExtJsObject.prototype.get = function (index) {
        if (index != undefined) {
            if (this.node[index] == undefined)
                throw new IndexOutOfArrayExecption('ExtJsObject.get undefined index node[' + index + ']');
            return this.node[index];
        }
        else {
            if (this.node[0] == undefined)
                throw new IndexOutOfArrayExecption('ExtJsObject.get undefined index node[0]');
            return this.node[0];
        }
    };
    /**
     * @param value the height of the element (and units (em / px / cm, etc)) or undefined or nothing
     * @return {Object|Number} Object if value != undefined and Number if value == undefined
     */
    ExtJsObject.prototype.height = function (value) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (value !== undefined) {
                e.style.height = value;
            }
            else {
                return e.offsetHeight;
            }
        }
        return this;
    };
    /**
     * @param value the width of the element (and units (em / px / cm, etc)) or undefined or nothing
     * @return {Object|Number} Object if value != undefined and Number if value == undefined
     */
    ExtJsObject.prototype.width = function (value) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (value !== undefined) {
                e.style.width = value;
            }
            else {
                return e.offsetWidth;
            }
        }
        return this;
    };
    /**
     * @param classx class to add to the classlist of the element
     * @return {Object} the current instance of ExtJs
     */
    ExtJsObject.prototype.addClass = function (classx) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            e.classList.add(classx);
        }
        return this;
    };
    /**
     * @param classx class to remove from the classlist of the element
     * @return {Object} the current instance of ExtJs
     */
    ExtJsObject.prototype.removeClass = function (classx) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            e.classList.remove(classx);
        }
        return this;
    };
    /**
     * Delete the element(s)
     */
    ExtJsObject.prototype.remove = function () {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            e.parentElement.removeChild(e);
        }
    };
    /**
     * @param element_type element to createElement
     * @return {Array} element list in an ExtJsObject
     */
    ExtJsObject.prototype.child = function (element_type) {
        var e_list = [];
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            var elem = document.createElement(element_type);
            e.appendChild(elem);
            e_list.push(elem);
        }
        return $(e_list);
    };
    /**
     * @param prop The css proprety that we want to modify.
     * @param value The value that we want to assign to that property
     * @param i the index of the element (optional)
     */
    ExtJsObject.prototype.css = function (prop, value, i) {
        var y = i;
        if (i == undefined) {
            i = 0;
        }
        if (value == undefined) {
            return this.node[i].style[prop];
        }
        else if (y != undefined) {
            this.node[i].style[prop] = value;
            return this;
        }
        else {
            for (var i_1 = 0; i_1 < this.node.length; i_1++) {
                var e = this.node[i_1];
                e.style[prop] = value;
            }
            return this;
        }
    };
    /**
     * @param attr The attribute that we want to modify
     * @param value The value that we want to assign to that atribute
     * @param i the index of the element (optional)
     */
    ExtJsObject.prototype.attr = function (attr, value, i) {
        var y = i;
        if (i == undefined) {
            i = 0;
        }
        if (value == undefined) {
            return this.node[i].getAttribute(attr);
        }
        else if (y != undefined) {
            this.node[i].style[attr] = value;
            return this;
        }
        else {
            for (var i_2 = 0; i_2 < this.node.length; i_2++) {
                var e = this.node[i_2];
                e.setAttribute(attr, value);
            }
            return this;
        }
    };
    /**
     * Returns the nearest parent of the element's
     * @param selector The selector of the nearest parent
     */
    ExtJsObject.prototype.parent = function (selector) {
        var parents = [];
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (selector == undefined) {
                parents.push(e.parentElement);
            }
            else {
                parents.push(e.closest(selector));
            }
        }
        return $(parents);
    };
    /**
     * @param {String} html Text to put inside the element or undefined or nothing
     * @return {String|Object} Text that is inside the first element or the current instance.
     */
    ExtJsObject.prototype.value = function (text) {
        if (text != undefined) {
            for (var i = 0; i < this.node.length; i++) {
                var e = this.node[i];
                if (typeof text === 'string' || typeof text === 'number') {
                    e.value = text;
                }
            }
            return this;
        }
        else {
            var node = this.node[0];
            return this.node[0].value;
        }
    };
    /**
     * @param {Function|Undefined} toDo function that is called when somebody keypress on the element  or undefined or nothing
     * @param {String|Undefined} element specifies the element on which we are going to listen the keypress.
     */
    ExtJsObject.prototype.keypress = function (toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('keypress', toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('keypress', function (event) {
                    if (x.querySelector(element) == event.target) {
                        var xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    };
    /**
     * @param {Function|Undefined} toDo function that is called when somebody input on the element  or undefined or nothing
     * @param {String|Undefined} element specifies the element on which we are going to listen the input.
     */
    ExtJsObject.prototype.input = function (toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('input', toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('input', function (event) {
                    if (x.querySelector(element) == event.target) {
                        var xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    };
    /**
     * @param {Function|Undefined} toDo function that is called when somebody keydown on the element  or undefined or nothing
     * @param {String|Undefined} element specifies the element on which we are going to listen the keydown.
     */
    ExtJsObject.prototype.keydown = function (toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('keydown', toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('keydown', function (event) {
                    if (x.querySelector(element) == event.target) {
                        var xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    };
    /**
     * @param {Function|Undefined} toDo function that is called when somebody change on the element  or undefined or nothing
     * @param {String|Undefined} element specifies the element on which we are going to listen the change.
     */
    ExtJsObject.prototype.change = function (toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('change', toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('change', function (event) {
                    if (x.querySelector(element) == event.target) {
                        var xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    };
    /**
     * @param {Function|Undefined} toDo function that is called when somebody keyup on the element  or undefined or nothing
     * @param {String|Undefined} element specifies the element on which we are going to listen the keyup.
     */
    ExtJsObject.prototype.keyup = function (toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener('keyup', toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener('keyup', function (event) {
                    if (x.querySelector(element) == event.target) {
                        var xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    };
    /**
     * Returns the previous sibling of an element or a set of elements
     */
    ExtJsObject.prototype.prevSibling = function () {
        var siblings = [];
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            siblings.push(e.previousSibling);
        }
        return $(siblings);
    };
    /**
     * Returns the next sibling of an element or a set of elements
     */
    ExtJsObject.prototype.nextSibling = function () {
        var siblings = [];
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            siblings.push(e.nextSibling);
        }
        return $(siblings);
    };
    /**
     * Calls a callback for each element
     */
    ExtJsObject.prototype.forEach = function (callback) {
        this.node.forEach(function (element) {
            callback.bind(element)();
        });
    };
    return ExtJsObject;
}());
exports.ExtJsObject = ExtJsObject;
var AjaxRequest = /** @class */ (function () {
    function AjaxRequest() {
    }
    /**
     * @param {String} url URL of the resource
     * @param {Function} callback function which is called when the request has been performed correctly
     * @param {Function} error_callback function which is called when the request has not been performed correctly
     */
    AjaxRequest.prototype.GET = function (url, callback, error_callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                callback(xhttp.responseText);
            }
            else if (xhttp.readyState == 4) {
                if (error_callback != undefined) {
                    try {
                        error_callback();
                    }
                    catch (e) { }
                }
            }
        };
        xhttp.open('GET', url, true);
        xhttp.send();
    };
    /**
     * @param {String} url URL of the resource
     * @param {Function} callback function which is called when the request has been performed correctly
     * @param {Function} error_callback function which is called when the request has not been performed correctly
     */
    AjaxRequest.prototype.DELETE = function (url, callback, error_callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                callback(xhttp.responseText);
            }
            else if (xhttp.readyState == 4) {
                if (error_callback != undefined) {
                    try {
                        error_callback();
                    }
                    catch (e) { }
                }
            }
        };
        xhttp.open('GET', url, true);
        xhttp.setRequestHeader('x-http-method-override', 'DELETE');
        xhttp.send();
    };
    /**
     * @param {String} url URL of the resource
     * @param {Array} data assoc array with the data that will be sent
     * @param {Function} callback function which is called when the request has been performed correctly
     * @param {Function} error_callback function which is called when the request has not been performed correctly
     */
    AjaxRequest.prototype.POST = function (url, data, callback, error_callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                callback(xhttp.responseText);
            }
            else if (xhttp.readyState == 4) {
                if (error_callback != undefined) {
                    try {
                        error_callback();
                    }
                    catch (e) { }
                }
            }
        };
        xhttp.open('POST', url, true);
        var keys = Object.keys(data);
        var d = '';
        for (var i = 0; i < keys.length; i++) {
            if (i !== 0) {
                d = d + '&';
            }
            d = d + keys[i] + '=' + data[keys[i]];
        }
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(d);
    };
    /**
     * @param {String} url URL of the resource
     * @param {Array} data assoc array with the data that will be sent
     * @param {Function} callback function which is called when the request has been performed correctly
     * @param {Function} error_callback function which is called when the request has not been performed correctly
     */
    AjaxRequest.prototype.PUT = function (url, data, callback, error_callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                callback(xhttp.responseText);
            }
            else if (xhttp.readyState == 4) {
                if (error_callback != undefined) {
                    try {
                        error_callback();
                    }
                    catch (e) { }
                }
            }
        };
        xhttp.open('POST', url, true);
        var keys = Object.keys(data);
        var d = '';
        for (var i = 0; i < keys.length; i++) {
            if (i !== 0) {
                d = d + '&';
            }
            d = d + keys[i] + '=' + data[keys[i]];
        }
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.setRequestHeader('x-http-method-override', 'PUT');
        xhttp.send(d);
    };
    return AjaxRequest;
}());
exports.AR = new AjaxRequest();
/**
 *
 * @param {String|Object|Array} e
 * @param {Number} index
 */
function $(e, index) {
    if (e != undefined) {
        return new ExtJsObject(e, index);
    }
    else {
        return this;
    }
}
exports.$ = $;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(3);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Parser = /** @class */ (function () {
    function Parser() {
        this.partials = {};
        this.type = 'parser';
        this.math_func = [
            'sin',
            'tan',
            'cos',
            'asin',
            'atan',
            'acos',
            'sinh',
            'tanh',
            'cosh',
            'asinh',
            'atanh',
            'acosh',
            'ceil',
            'floor',
            'abs',
            'exp',
            'ln',
            'log',
            'pow',
            'cot',
            'sec',
            'csc'
        ];
    }
    /**
     * Initialise a parsing task
     * @param {String} expression the expression that has to be parsed
     */
    Parser.prototype.parse = function (expression) {
        var _this = this;
        if (typeof expression == 'number') {
            //@ts-ignore
            expression = expression.toString();
        }
        // 1) We have to check wheter or not the expression is valid
        if (this.check(expression) == false) {
            throw new InvalidExpressionError('Invalid expression given');
        }
        // 2) We convert ...(....) into ...$1 and $1 = ....
        expression = this.prepareExpression(expression);
        // 3) We really parse the expression
        // We transform math functions into valid js code
        expression = expression.replace(/sqrt\$([0-9]+)/i, function (e, $1) { return "Math.pow($" + $1 + ", 0.5)"; });
        /*expression = expression.replace(/derivée\$([0-9]+)/i,
            (e, $1) => `()`);*/
        // We tranform exponants into Math.pow()
        expression = expression.replace(/([\$0-9xe]+)\^([\$0-9xe]+)/gi, function (e, $1, $2) { return "pow(" + $1 + ", " + $2 + ")"; });
        // We rebuild the complete expression
        expression = expression.replace(/\$([0-9]+)/gi, function (e, $1) {
            return _this.clean('(' + _this.parse(_this.partials['$' + $1]) + ')');
        });
        expression = this.clean(expression);
        return expression;
    };
    /**
     * Checks if the number of ( is equal to the number of )
     * @param exp the expression to check
     */
    Parser.prototype.check = function (exp) {
        var open_brackets_number = exp.split('(').length;
        var close_brackets_number = exp.split(')').length;
        if (open_brackets_number == close_brackets_number) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * PrepareExpression
     */
    Parser.prototype.prepareExpression = function (exp) {
        var _this = this;
        exp = exp.replace(/²/gi, '^2');
        exp = exp.replace(/³/gi, '^2');
        exp = exp.replace(/X/g, 'x');
        var processed_exp = '';
        var parenthesis_level = 0;
        var buffer = '';
        for (var i = 0; i < exp.length; i++) {
            var char = exp[i];
            var e = '$' + (Object.keys(this.partials).length + 1);
            if (parenthesis_level >= 1) {
                if (char == ')') {
                    parenthesis_level -= 1;
                    if (parenthesis_level == 0) {
                        this.partials[e] = buffer;
                        buffer = '';
                    }
                    else {
                        buffer += char;
                    }
                }
                else {
                    if (char == '(') {
                        parenthesis_level += 1;
                    }
                    buffer += char;
                }
            }
            else {
                if (char == '(') {
                    parenthesis_level += 1;
                    processed_exp += e;
                }
                else {
                    processed_exp += char;
                }
            }
        }
        processed_exp = processed_exp.replace(/([0-9\.]+)x\^([\$0-9\.]+)/gi, function (exp, $1, $2) {
            var e = '$' + (Object.keys(_this.partials).length + 1);
            _this.partials[e] = $1 + "*x^" + $2;
            return e;
        });
        processed_exp = processed_exp.replace(/([0-9\.]+)x/gi, function (exp, $1) {
            var e = '$' + (Object.keys(_this.partials).length + 1);
            _this.partials[e] = $1 + "*x";
            return e;
        });
        return processed_exp;
    };
    Parser.prototype.getComputedValue = function (value) {
        var math = new MathObject();
        if (value.indexOf('dérivée ') == 0) {
            value = math.derivative(value.replace('dérivée ', ''));
        }
        else if (value.indexOf('dérivée_seconde ') == 0) {
            value = math.derivative(math.derivative(value.replace('dérivée_seconde ', '')));
        }
        return value;
    };
    /**
     * Creates a function to run the expression
     */
    Parser.prototype.Functionize = function (exp, parse) {
        if (parse === void 0) { parse = true; }
        if (parse == true) {
            exp = this.parse(exp);
        }
        console.log(exp);
        return new Function('x', 'funcs', "\n            const sin = Math.sin;\n            const tan = Math.tan;\n            const cos = Math.cos;\n            const asin = Math.asin;\n            const atan = Math.atan;\n            const acos = Math.acos;\n            \n            const cot = (x) => 1 / Math.tan(x);\n            const csc = (x) => 1 / Math.sin(x);\n            const sec = (x) => 1 / Math.cos(x);\n            \n            const sinh = Math.sinh;\n            const tanh = Math.tanh;\n            const cosh = Math.cosh;\n            const asinh = Math.asinh;\n            const atanh = Math.atanh;\n            const acosh = Math.acosh;\n\n            const ceil = Math.ceil;\n            const floor = Math.floor;\n            const abs = Math.abs;\n            const ln = Math.log;\n            const log = function (base, y) { \n                if(y == undefined) {\n                    y = base;\n                    base = 10;\n                }\n                return Math.log(y) / Math.log(base)\n            };\n\n            const e = Math.E;\n            const pi = Math.PI;\n            const pow = function (base, exponent){\n                if(exponent % 1 != 0){\n                    for(let i = -7; i < 8; i = i + 2){\n                        if(exponent == 1/i && base < 0) return 0 - 1 * Math.pow(0 - base, exponent);     \n                    }\n                }\n                return Math.pow(base, exponent);\n            }\n\n            const exp = function (base, y){\n                if(y == undefined){\n                    return Math.exp(base);\n                } else {\n                    return pow(base, y);\n                }\n            }; \n            \n            return " + this.FunctionizeCalls(exp) + ";\n            \n            ");
    };
    Parser.prototype.FunctionizeCalls = function (exp) {
        var _this = this;
        console.log(exp);
        return exp.replace(/([a-z]+)([1-9]*)\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/g, function (e, $1, $2, $3) {
            console.log($1);
            if (_this.math_func.indexOf($1) >= 0) {
                return $1 + $2 + "(" + _this.FunctionizeCalls($3) + ")";
            }
            return "funcs." + ($1 + $2) + ".array(" + _this.FunctionizeCalls($3) + ", funcs)";
        });
    };
    /**
     * CleanUp
     */
    Parser.prototype.clean = function (expression) {
        var _this = this;
        var pattern = /([^a-z\/])\(([0-9x]+)\)/gi;
        while (pattern.test(expression)) {
            expression = expression.replace(pattern, function (e, $1, $2) { return $1 + $2; });
        }
        expression = expression.replace(/\*([0-9])/gi, function (e, $1) {
            return $1 == 1 ? '' : e;
        });
        expression = expression.replace(/\^([0-9])/gi, function (e, $1) {
            return $1 == 1 ? '' : e;
        });
        expression = expression.replace(/\$([0-9]+)/g, function (e) {
            return "(" + _this.partials[e] + ")";
        });
        return expression;
    };
    /**
     * @see https://medium.freecodecamp.org/how-to-build-a-math-expression-tokenizer-using-javascript-3638d4e5fbe9
     * But the tokenizer will be a bit different.
     */
    Parser.prototype.tokenize = function (expression) {
        var _this = this;
        if (typeof expression == 'number') {
            //@ts-ignore
            expression = expression.toString();
        }
        // 1) We have to check wheter or not the expression is valid
        if (this.check(expression) == false) {
            throw new InvalidExpressionError('Invalid expression given');
        }
        // 2) We convert ...(....) into ...$1 and $1 = ....
        expression = this.prepareExpression(expression);
        // 3) We really parse the expression
        var math_functions = function (expression, returns) {
            var mfuncs = _this.math_func;
            for (var i = 0; i < mfuncs.length; i++) {
                var func = mfuncs[i];
                if (expression.indexOf(func) == 0) {
                    if (returns == true) {
                        return func;
                    }
                    else {
                        return true;
                    }
                }
            }
            return false;
        };
        var math_numbers = ['e', 'pi'];
        expression = expression.trim();
        if (expression.indexOf('=') >= 0) {
            return {
                type: 'equal_sign',
                value: expression
                    .split('=')
                    .map(function (e) { return _this.tokenize(e); })
            };
        }
        else if (!isNaN(expression)) {
            return {
                type: 'number',
                value: expression
            };
        }
        else if (!isNaN(this.Functionize(expression)(NaN))) {
            return {
                type: 'number',
                value: this.Functionize(expression)(NaN)
            };
        }
        else if (expression == 'x') {
            return {
                type: 'variable',
                value: 'x'
            };
        }
        else if (expression.indexOf('+') >= 0) {
            var exp_spl = expression.split('+');
            var value_1 = [];
            exp_spl.forEach(function (e) {
                value_1.push(_this.tokenize(e));
            });
            return {
                type: 'plus',
                value: value_1
            };
        }
        else if (expression.indexOf('-') >= 0) {
            var exp_spl = expression.split('-');
            var value_2 = [];
            exp_spl.forEach(function (e, i) {
                e = e.trim();
                if (i == 0 && e == '') {
                    value_2.push(_this.tokenize(0));
                }
                else {
                    value_2.push(_this.tokenize(e));
                }
            });
            return {
                type: 'minus',
                value: value_2
            };
        }
        else if (expression.indexOf('*') >= 0) {
            var exp_spl = expression.split('*');
            var value_3 = [];
            exp_spl.forEach(function (e) {
                value_3.push(_this.tokenize(e));
            });
            return {
                type: 'times',
                value: value_3
            };
        }
        else if (expression.indexOf('/') >= 0) {
            var exp_spl = expression.split('/');
            var rm = function (array) {
                array.shift();
                return array;
            };
            var bottom = '(' + rm(exp_spl).join(')*(') + ')';
            var value = [
                this.tokenize(exp_spl[0]),
                this.tokenize(bottom)
            ];
            return {
                type: 'over',
                value: value,
                over: this.clean(bottom)
            };
        }
        else if (/^\$([0-9]+)$/.test(expression) == true) {
            return this.tokenize(this.partials[expression]);
        }
        else if (expression.indexOf('^') > 0) {
            var spl_exp = expression.split('^');
            if (spl_exp.length == 2) {
                return {
                    type: 'power',
                    value: [
                        this.tokenize(spl_exp[0]),
                        this.tokenize(spl_exp[1])
                    ]
                };
            }
            else {
                throw new Error('Unexpected expression');
            }
        }
        else if (math_functions(expression) == true) {
            var start = math_functions(expression, true);
            return {
                type: 'function',
                value: start,
                args: this.tokenize(expression.replace(start, ''))
            };
        }
        else if (expression.indexOf(',') >= 0) {
            var spl_exp = expression.split(',');
            return spl_exp.map(function (element) {
                return _this.tokenize(element);
            });
        }
        else {
            throw new Error('Could not parse expression ' + expression);
        }
    };
    return Parser;
}());
exports.default = Parser;
var InvalidExpressionError = /** @class */ (function (_super) {
    __extends(InvalidExpressionError, _super);
    function InvalidExpressionError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'IE';
        return _this;
    }
    return InvalidExpressionError;
}(Error));
exports.InvalidExpressionError = InvalidExpressionError;
var MathObject = /** @class */ (function (_super) {
    __extends(MathObject, _super);
    function MathObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ce = [];
        _this.type = 'MathObject';
        return _this;
    }
    MathObject.prototype.derivative = function (expression) {
        var _this = this;
        // 1) We have to check wheter or not the expression is valid
        if (this.check(expression) == false) {
            throw new InvalidExpressionError('Invalid expression given');
        }
        // 2) We convert ...(....) into ...$1 and $1 = ....
        expression = this.prepareExpression(expression);
        // 3) Wa have to split the expression into small pieces and check step by step
        if (expression.indexOf('+') >= 0) {
            var spl = expression.split('+');
            expression = '';
            spl.forEach(function (s) { return (expression += _this.derivative(s) + "+"); });
            if (expression[expression.length - 1] == '+')
                expression = expression.slice(0, -1);
            if (!isNaN(this.Functionize(expression)(NaN)))
                return this.Functionize(expression)(NaN);
            expression = this.clean(expression);
            return expression;
        }
        if (expression.indexOf('-') >= 0) {
            var spl = expression.split('-');
            expression = '';
            spl.forEach(function (s) { return (expression += _this.derivative(s) + "-"); });
            if (expression[expression.length - 1] == '-')
                expression = expression.slice(0, -1);
            if (!isNaN(this.Functionize(expression)(NaN)))
                return this.Functionize(expression)(NaN);
            expression = this.clean(expression);
            return expression;
        }
        if (expression.indexOf('*') >= 0) {
            var spl_1 = expression.split('*').sort();
            expression = '';
            spl_1.forEach(function (s, i) {
                var others = _this.getAllExpect(spl_1, i);
                var join = others.join('*');
                var derivative = _this.derivative(s);
                if (others.indexOf('0') >= 0)
                    return;
                if (_this.Functionize(join)(NaN) == 0)
                    return;
                if (_this.Functionize(derivative)(NaN) == 0)
                    return;
                expression += derivative + "*" + others.join('*') + "+";
            });
            if (expression[expression.length - 1] == '+')
                expression = expression.slice(0, -1);
            if (!isNaN(this.Functionize(expression)(NaN)))
                return this.Functionize(expression)(NaN);
            expression = this.clean(expression);
            return expression;
        }
        if (expression.indexOf('/') >= 0) {
            var spl = expression.split('/');
            var spl_copy = spl.slice();
            spl_copy.shift();
            var bottom = "(" + spl_copy.join(')*(') + ")";
            var top_1 = "(" + this.derivative(spl[0]) + ")*" + bottom + "-" + this.derivative(bottom) + "*(" + spl[0] + ")";
            expression = "(" + top_1 + ")/((" + bottom + ")^2)";
            if (!isNaN(this.Functionize(expression)(NaN)))
                return this.Functionize(expression)(NaN);
            expression = this.clean(expression);
            return expression;
        }
        //@ts-ignore
        if (!isNaN(expression)) {
            // Derivative of a number is always equal to 0
            return '0';
        }
        else if (expression == 'x') {
            // Derivative of x is always equal to 1
            return 1;
        }
        else if (expression.indexOf('^') >= 1) {
            // Derivative of x^n is equal to n(x)^(n-1) * (x)'
            var parts = expression.split('^');
            return this.clean(parts[1] + "*" + parts[0] + "^(" + (!isNaN(this.Functionize(parts[1] + '-1')(NaN))
                ? this.Functionize(parts[1] + '-1')(NaN)
                : parts[1] + '-1') + ")*(" + this.derivative(parts[0]) + ")");
        }
        else if (/^\$([0-9]+)$/.test(expression) == true) {
            // This replaces $.. into the expression
            var part = this.partials[expression];
            if (/^\$([0-9]+)$/.test(part))
                return "(" + this.derivative(this.partials[part]) + ")";
            else
                return "(" + this.derivative(part) + ")";
        }
        else if (/^sin\$([0-9]+)$/.test(expression) == true) {
            var partial = expression.replace('sin', '');
            return this.clean("cos(" + this.partials[partial] + ")*(" + this.derivative(this.partials[partial]) + ")");
        }
        else if (/^cos\$([0-9]+)$/.test(expression) == true) {
            var partial = expression.replace('cos', '');
            return this.clean("-sin(" + this.partials[partial] + ")*(" + this.derivative(this.partials[partial]) + ")");
        }
        else {
            console.log(expression);
            throw new Error('Something went wrong width ');
        }
    };
    MathObject.prototype.getAllExpect = function (array, i) {
        var res = [];
        array.forEach(function (e, index) {
            if (index != i) {
                res.push(e);
            }
        });
        return res;
    };
    MathObject.prototype.getRoots = function () { };
    MathObject.prototype.getDomF = function (tokens, clear) {
        var _this = this;
        if (clear === void 0) { clear = true; }
        if (clear == true)
            this.ce = [];
        if (tokens.type === 'plus' ||
            tokens.type === 'minus' ||
            tokens.type === 'times') {
            var value = tokens.value;
            value.forEach(function (e) {
                _this.getDomF(e);
            });
        }
        else if (tokens.type == 'over') {
            this.ce.push(JSON.stringify(tokens.value[1]) + ' not null');
        }
        else if (tokens.type == 'function' && tokens.value == 'sqrt') {
            this.ce.push(JSON.stringify(tokens.args) + '>=0');
        }
        if (clear === true) {
            if (this.ce.length === 0) {
                return 'R';
            }
            else {
                return 'ce : ' + this.ce.join('\n');
            }
        }
    };
    return MathObject;
}(Parser));
exports.MathObject = MathObject;


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canvas = /** @class */ (function () {
    function canvas(canvas) {
        var _this = this;
        this.fdata = {};
        this.center_x = 0;
        this.center_y = 0;
        this.x_unit = 50;
        this.y_unit = 50;
        this.stored = {};
        this.pathes = {};
        this.objects = [];
        canvas.height = canvas.scrollHeight;
        canvas.width = canvas.scrollWidth;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.init();
        var start;
        var down = false;
        //When the user starts an action on the canvas.
        canvas.addEventListener('mousedown', function (e) {
            down = true;
            start = { x: e.pageX, y: e.pageY };
            canvas.style.cursor = 'grabbing';
        });
        canvas.addEventListener('touchstart', function (e) {
            down = true;
            start = {
                x: e.touches.item(0).clientX,
                y: e.touches.item(0).clientY
            };
        });
        // When the user moves on the surface of the canvas.
        canvas.addEventListener('mousemove', function (e) {
            if (down == true) {
                var new_start = { x: e.pageX, y: e.pageY };
                var old = start;
                var drawn = _this.move(old, new_start);
                if (drawn) {
                    start = new_start;
                }
            }
        });
        canvas.addEventListener('touchmove', function (e) {
            e.preventDefault();
            if (down == true) {
                var new_start = {
                    x: e.touches.item(0).clientX,
                    y: e.touches.item(0).clientY
                };
                var old = start;
                var drawn = _this.move(old, new_start);
                if (drawn) {
                    start = new_start;
                }
            }
        });
        //When the user stops clicking on teh surface
        canvas.addEventListener('mouseup', function (e) {
            e.preventDefault();
            e.stopPropagation();
            down = false;
            canvas.style.cursor = 'grab';
            _this.hasUpdated();
        });
        canvas.addEventListener('touchend', function (e) {
            e.stopPropagation();
            e.preventDefault();
            down = false;
            _this.hasUpdated();
        });
        window.addEventListener('resize', function (e) {
            e.stopPropagation();
            e.preventDefault();
            _this.reload();
        });
        canvas.addEventListener('mousewheel', function (e) {
            e.stopPropagation();
            e.preventDefault();
            var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
            _this.zoom(delta);
            _this.hasUpdated();
        });
        canvas.addEventListener('DOMMouseScroll', function (e) {
            e.preventDefault();
            e.preventDefault();
            var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
            _this.zoom(delta);
            _this.hasUpdated();
        });
    }
    canvas.prototype.getValues = function () {
        return {
            center_x: this.center_x,
            center_y: this.center_y,
            x_unit: this.x_unit,
            y_unit: this.y_unit
        };
    };
    canvas.prototype.setValues = function (values) {
        this.center_x = values['center_x'];
        this.center_y = values['center_y'];
        this.x_unit = values['x_unit'];
        this.y_unit = values['y_unit'];
    };
    canvas.prototype.hasUpdated = function () {
        if (this.onupdate)
            this.onupdate();
    };
    canvas.prototype.zoom = function (delta) {
        if (this.x_unit + delta * 10 > 10) {
            this.x_unit += delta * 10;
        }
        if (this.y_unit + delta * 10 > 10) {
            this.y_unit += delta * 10;
        }
        this.reload();
    };
    canvas.prototype.init = function () {
        this.canvas.height = this.canvas.scrollHeight;
        this.canvas.width = this.canvas.scrollWidth;
        this.draw();
    };
    canvas.prototype.draw = function () {
        this.drawGrid();
    };
    canvas.prototype.drawGrid = function () {
        var max = Math.max(this.canvas.height, this.canvas.width);
        max = max / Math.min(this.x_unit, this.y_unit);
        // Clears the view
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.fillStyle = '#fafafa';
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
        this.ctx.closePath();
        var to = Math.floor(this.center_x + max);
        var xpos = Math.floor(this.center_x - max);
        while (xpos < to) {
            this.drawLine(this.getRelativePositionX(xpos), this.getRelativePositionY(Math.floor(this.center_y + max)), this.getRelativePositionX(xpos), this.getRelativePositionY(Math.floor(this.center_y - max)), Math.floor(xpos) == 0 ? 'black' : undefined);
            this.ctx.beginPath();
            this.ctx.font = '18px Sans Serif';
            this.ctx.fillStyle = 'gray';
            this.ctx.fillText(xpos.toString(), this.getRelativePositionX(xpos), this.getRelativePositionY(0) + 15);
            this.ctx.closePath();
            xpos++;
        }
        to = Math.floor(this.center_y + max);
        var ypos = Math.floor(this.center_y - max);
        while (ypos < to) {
            this.drawLine(this.getRelativePositionX(Math.floor(this.center_x + max)), this.getRelativePositionY(ypos), this.getRelativePositionX(Math.floor(this.center_x - max)), this.getRelativePositionY(ypos), Math.floor(ypos) == 0 ? 'black' : undefined);
            this.ctx.beginPath();
            this.ctx.font = '18px Sans Serif';
            this.ctx.fillStyle = 'gray';
            this.ctx.fillText(ypos.toString(), this.getRelativePositionX(0) -
                (ypos.toString().length * 15) / 2 -
                5, this.getRelativePositionY(ypos));
            this.ctx.closePath();
            ypos++;
        }
    };
    canvas.prototype.move = function (previous, now) {
        var diff_x = previous.x - now.x;
        var diff_y = previous.y - now.y;
        if (Math.sqrt(Math.pow(diff_x, 2) + Math.pow(diff_y, 2)) > 10) {
            this.center_x += diff_x / this.x_unit;
            this.center_y -= diff_y / this.y_unit;
            this.reload();
            return true;
        }
    };
    canvas.prototype.drawLine = function (x, y, x2, y2, color, width) {
        this.ctx.beginPath();
        //console.log('new path');
        if (color == undefined) {
            this.ctx.strokeStyle = '#D0D0D0';
        }
        else {
            this.ctx.strokeStyle = color;
        }
        if (y2 == Infinity)
            console.log((y2 = this.canvas.height), 'Inf' + y2);
        if (y == Infinity)
            console.log((y = this.canvas.height), 'Inf' + y);
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x2, y2);
        if (width == undefined) {
            this.ctx.lineWidth = 1;
        }
        else {
            this.ctx.lineWidth = width;
        }
        this.ctx.stroke();
        //console.log(this.ctx);
    };
    canvas.prototype.getRelativePositionX = function (point) {
        return (this.canvas.width / 2 +
            point * this.x_unit -
            this.center_x * this.x_unit);
    };
    canvas.prototype.getRelativePositionY = function (point) {
        return (this.canvas.height / 2 -
            point * this.y_unit +
            this.center_y * this.y_unit);
    };
    canvas.prototype.drawFromFunc = function (func, color, isPreview) {
        if (color === void 0) { color = undefined; }
        if (isPreview === void 0) { isPreview = false; }
        if (!color) {
            var letters = '0123456789ABCDEF';
            color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
        }
        var display_size = this.canvas.width / 2 / this.x_unit;
        var x = this.center_x - display_size;
        var last = undefined;
        var label = func;
        var was_defined = true;
        if (this.pathes[label] == undefined) {
            this.pathes[label] = {};
            was_defined = false;
        }
        var xs_increment = Math.min((5 * this.canvas.width) / (this.x_unit * 1000), 0.05);
        var xs_save = xs_increment;
        var restore = undefined;
        while (x < this.center_x + display_size) {
            var pos = void 0;
            var new_y = void 0;
            var new_x = void 0;
            if (was_defined == true && this.pathes[label][x] != undefined) {
                new_y = this.getRelativePositionY(this.pathes[label][x]);
                new_x = this.getRelativePositionX(x);
            }
            else {
                pos = this.getFor(x, func, label);
                //console.log(x, pos);
                this.pathes[label][x] = pos;
                new_y = this.getRelativePositionY(pos);
                new_x = this.getRelativePositionX(x);
            }
            if (last != undefined) {
                var y_diff = Math.abs(new_y - last.y);
                if (y_diff > 75 && xs_increment == xs_save) {
                    if (y_diff > 200) {
                        last = undefined;
                    }
                    else {
                        x -= xs_increment;
                        xs_increment = xs_save / 50;
                        //@ts-ignore
                        new_y = last.y;
                        restore = x + 2;
                    }
                }
                else {
                    this.drawLine(new_x, new_y, last.x, last.y, color, 2);
                }
            }
            last = {
                x: new_x,
                y: new_y
            };
            if (isPreview == true) {
                x += 0.5;
            }
            else {
                if (restore && restore <= x) {
                    restore = undefined;
                    xs_increment = xs_save;
                }
                x += xs_increment;
            }
        }
        return color;
    };
    canvas.prototype.getFor = function (start, func, label) {
        if (this.stored[label] == undefined) {
            this.stored[label] = {};
        }
        if (this.stored[label][start] != undefined) {
            return this.stored[label][start];
        }
        else {
            this.stored[label][start] = func(start, this.fdata);
            return this.stored[label][start];
        }
    };
    canvas.prototype.reload = function (fdata) {
        var _this = this;
        if (fdata != undefined) {
            this.funcs = fdata;
        }
        this.init();
        var data = Object.keys(this.fdata);
        requestAnimationFrame(function () {
            data.forEach(function (key) {
                if (_this.fdata[key].visible == true) {
                    _this.drawFromFunc(_this.fdata[key].array, _this.fdata[key].color);
                }
            });
            var objs = _this.objects;
            objs.forEach(function (obj) {
                if (obj.type == 'point') {
                    var y = NaN;
                    if (!isNaN(obj.y)) {
                        y = obj.y;
                    }
                    else {
                        y = obj.y(parseFloat(obj.x), _this.fdata);
                    }
                    _this.point(obj.x, y);
                }
            });
        });
    };
    canvas.prototype.point = function (x, y, text) {
        if (text === void 0) { text = ''; }
        text = text + "(" + x + ";" + y + ")";
        x = this.getRelativePositionX(x);
        y = this.getRelativePositionY(y);
        this.ctx.beginPath();
        this.ctx.arc(x, y, 3, 0, 2 * Math.PI, true);
        this.ctx.fill();
        this.ctx.font = '12px Arial';
        if (text)
            this.ctx.fillText(text, x + 10, y + 10);
    };
    Object.defineProperty(canvas.prototype, "funcs", {
        get: function () {
            return this.fdata;
        },
        set: function (fdata) {
            this.fdata = fdata;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(canvas.prototype, "object_list", {
        get: function () {
            return {
                objects: this.objects,
                push: function (toAdd) {
                    this.objects.push(toAdd);
                    return this.objects;
                }
            };
        },
        set: function (objects) {
            this.objects = objects;
        },
        enumerable: true,
        configurable: true
    });
    return canvas;
}());
exports.default = canvas;


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(11);
var canvas_1 = __webpack_require__(7);
var parser_v2_1 = __webpack_require__(4);
var extjs_1 = __webpack_require__(0);
var drawer_obj_1 = __webpack_require__(13);
var menu = new drawer_obj_1.default();
// We get the default canvas
var html_canvas_element = document.querySelector('canvas');
//We create a new smath canvas
var smath = new canvas_1.default(html_canvas_element);
smath.object_list = [];
// We create a new expression parser
var parse = new parser_v2_1.default();
//We create an object that will contain all the functions
var fdata = {};
smath.funcs = fdata;
smath.reload();
// Function name attribution
var row = 0;
var letter = 0;
var letters = 'fghpqrst';
// Points name attribution
var pprimes = 0;
// We create the menu system
document.getElementById('menu').addEventListener('click', function () {
    var panel = document.querySelector('.panel');
    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
    }
    else {
        panel.classList.add('hidden');
    }
});
//@ts-ignore
var buttons = document.querySelectorAll('.tab_manager span');
//@ts-ignore
var tabs = document.querySelectorAll('.tab');
var _loop_1 = function (i) {
    var e = buttons[i];
    e.addEventListener('click', function () {
        var id = e.dataset['link'];
        for (var i2 = 0; i2 < tabs.length; i2++) {
            var tab = tabs[i2];
            tab.style.display = 'none';
        }
        for (var i2 = 0; i2 < buttons.length; i2++) {
            var button = buttons[i2];
            button.classList.remove('active');
        }
        e.classList.add('active');
        document.getElementById(id).style.display = 'block';
    });
};
for (var i = 0; i < buttons.length; i++) {
    _loop_1(i);
}
buttons[0].click();
extjs_1.$('#function_add_button').click(function () {
    //Gets the value
    var val = extjs_1.$('#function_add_input')
        .value()
        .trim();
    //Checks if teh value is not empty
    if (val == '') {
        return false;
    }
    var letters_x = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    if (/^droite\(([A-Z1-9]+),([A-Z1-9]+)\)$/i.test(val)) {
        var r = /\((.+),(.+)\)/g.exec(val);
        var letter_pt_1 = r[1][0];
        var letter_pt_2 = r[2][0];
        //@ts-ignore
        var pt_1_i = parseInt(r[1].replace(letter_pt_1, '') || 0);
        //@ts-ignore
        var pt_2_i = parseInt(r[2].replace(letter_pt_2, '') || 0);
        console.log(letter_pt_1, pt_1_i);
        var i1 = pt_1_i * 25 + letters_x.indexOf(letter_pt_1);
        var i2 = pt_2_i * 25 + letters_x.indexOf(letter_pt_2);
        var pt1 = smath.object_list.objects[i1];
        var pt2 = smath.object_list.objects[i2];
        var pt1_x = parseFloat(pt1.x);
        var pt2_x = parseFloat(pt2.x);
        var pt1_y = parseFloat(pt1.y(pt1_x));
        var pt2_y = parseFloat(pt2.y(pt2_x));
        var m = (pt1_y - pt2_y) / (pt1_x - pt2_x);
        var y = pt1_y;
        var x = pt1_x;
        var p = y - m * x;
        val = "((" + pt1_y + " - " + pt2_y + ") / (" + pt1_x + " - " + pt2_x + "))*x+" + p;
        console.log('New from points : ' + val);
    }
    //We check if it's an object or a function
    if (/^\((.+),(.+)\)$/i.test(val) || /^point\((.+),(.+)\)$/i.test(val)) {
        var r = /\((.+),(.+)\)/g.exec(val);
        smath.object_list = smath.object_list.push({
            type: 'point',
            x: r[1],
            y: parse.Functionize(r[2], true),
            yString: r[2]
        });
        console.log(smath.object_list);
        smath.reload();
    }
    else {
        //Saves the inital value
        var initial = val;
        //Parses the value for the first time
        val = parse.getComputedValue(val);
        //Creates a function name
        var fname = letters[letter] + '' + (row == 0 ? '' : "" + row);
        //We create a js function from teh math function
        var func = parse.Functionize(val, true);
        //We draw the function for the first time
        var color = smath.drawFromFunc(func);
        //Adds the function to the function list so that it can be redrawn later
        fdata[fname] = {
            visible: true,
            color: color,
            array: func,
            exp: val,
            initial: initial
        };
        //We update the function name
        if (letter + 1 < letters.length) {
            letter++;
        }
        else {
            row++;
            letter = 0;
        }
        console.log(fdata);
    }
    menu.update(fdata, smath.object_list.objects);
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(12);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./drawer.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./drawer.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: sans-serif; }\n\n#menu {\n  z-index: 98;\n  position: fixed;\n  top: 0;\n  left: 0;\n  border: 1px solid gray;\n  color: gray;\n  background: white;\n  display: none;\n  height: 25px;\n  width: 100%; }\n  @media (max-width: 600px) {\n    #menu {\n      display: block; } }\n\n.panel {\n  z-index: 95;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 300px;\n  background: white;\n  border-right: 1px solid lightgray; }\n  .panel.hidden {\n    display: none; }\n  @media (max-width: 600px) {\n    .panel {\n      top: 25px;\n      width: 100%; } }\n  .panel .tab_manager {\n    display: flex;\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n    border-bottom: 1px solid lightgray; }\n    .panel .tab_manager span {\n      color: gray;\n      transition: 0.25s;\n      display: inline-block;\n      flex-grow: 1;\n      height: 100%;\n      border-bottom: 2px solid lightgray;\n      cursor: pointer; }\n      .panel .tab_manager span:hover, .panel .tab_manager span.active {\n        border-bottom: 2px solid rgba(255, 165, 0, 0.8); }\n  .panel .tabs {\n    position: absolute;\n    top: 52px;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n    .panel .tabs .tab {\n      background: white;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0; }\n      .panel .tabs .tab#objects {\n        overflow: auto;\n        --w: 90%; }\n        .panel .tabs .tab#objects #function_add_input,\n        .panel .tabs .tab#objects #function_add_button {\n          display: inline-block;\n          padding: 0;\n          height: 40px;\n          margin: 0;\n          border: none;\n          border-bottom: 1px solid lightgray; }\n        .panel .tabs .tab#objects #function_add_input {\n          position: absolute;\n          top: 0;\n          left: 0;\n          padding-left: 15px;\n          padding-right: 15px;\n          width: calc(var(--w) - 30px); }\n        .panel .tabs .tab#objects #function_add_button {\n          position: absolute;\n          top: 1px;\n          right: 0;\n          background: #f0f0f0;\n          width: 10%;\n          cursor: pointer; }\n        .panel .tabs .tab#objects #list {\n          overflow: auto;\n          position: absolute;\n          top: 41px;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          padding: 25px; }\n          .panel .tabs .tab#objects #list .title {\n            color: gray;\n            font-weight: 700; }\n          .panel .tabs .tab#objects #list .item {\n            color: #bababa;\n            line-height: 25px; }\n            .panel .tabs .tab#objects #list .item span {\n              display: inline-block;\n              max-width: 70%;\n              word-break: break-all; }\n            .panel .tabs .tab#objects #list .item button {\n              background: transparent;\n              border: none;\n              float: right;\n              cursor: pointer; }\n          .panel .tabs .tab#objects #list #copy {\n            text-align: center;\n            color: lightgray;\n            font-size: 10px; }\n\n.drawing_area {\n  z-index: 90;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: calc(100vw - 301px);\n  right: 0; }\n  @media (max-width: 600px) {\n    .drawing_area {\n      width: 100%;\n      top: 25px; } }\n  .drawing_area canvas {\n    background: #fafafa;\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%; }\n\n.mask {\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.02);\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0; }\n\n.modal {\n  z-index: 100;\n  background: white;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  max-width: calc(100% - 75px);\n  padding: 25px;\n  border-radius: 4px; }\n  .modal input {\n    width: calc(100% - 16px);\n    padding: 5px;\n    padding-left: 8px;\n    padding-right: 8px;\n    border: 1px solid lightgray; }\n  .modal .clearfix {\n    height: 25px;\n    margin-top: 25px; }\n    .modal .clearfix button {\n      float: right;\n      background: gray;\n      color: white;\n      border: none;\n      padding: 5px;\n      padding-left: 8px;\n      padding-right: 8px;\n      cursor: pointer;\n      border-radius: 4px; }\n", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var extjs_1 = __webpack_require__(0);
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.update = function (fdata, object_list) {
        var container = extjs_1.$('#functions');
        container.html('');
        var keys = Object.keys(fdata);
        keys.forEach(function (key) {
            var item = container.child('div').addClass('item');
            var span = item.child('span').html("<i style=\"background:" + fdata[key].color + "; width:5px;height:5px;border-radius:5px;display:inline-block;\"></i>\n                    " + key + "(x) = " + fdata[key].initial);
        });
        var obj_container = extjs_1.$('#objs');
        obj_container.html('');
        var grid = obj_container.child('div').addClass('item');
        var letters = 'abcdefghijklmnopqrstuvwxyz';
        var li = 0;
        var row = 0;
        object_list.forEach(function (object) {
            var item = grid.child('div').addClass('item');
            if (object.type == 'point') {
                var letter = '';
                letter += letters[li].toUpperCase();
                if (row != 0)
                    letter += row;
                li++;
                if (li > 25) {
                    li = 0;
                    row++;
                }
                var span = item
                    .child('span')
                    .text(letter + "(" + object.x + ";" + object.yString + ")");
            }
            else {
                var span = item.child('span').text("" + object.type);
            }
            console.log(object);
        });
        grid.child('span').text('Grille');
        grid.child('button').html('&#128393;');
    };
    Menu.prototype.updateCallback = function (callback) { };
    return Menu;
}());
exports.default = Menu;


/***/ })
/******/ ]);