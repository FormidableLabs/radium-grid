(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["RadiumGrid"] = factory(require("react"));
	else
		root["RadiumGrid"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { throw err; };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _config = __webpack_require__(3);
	
	var _checkPropsPlugin = __webpack_require__(70);
	
	var _checkPropsPlugin2 = _interopRequireDefault(_checkPropsPlugin);
	
	var _keyframesPlugin = __webpack_require__(71);
	
	var _keyframesPlugin2 = _interopRequireDefault(_keyframesPlugin);
	
	var _mergeStyleArrayPlugin = __webpack_require__(72);
	
	var _mergeStyleArrayPlugin2 = _interopRequireDefault(_mergeStyleArrayPlugin);
	
	var _prefixPlugin = __webpack_require__(74);
	
	var _prefixPlugin2 = _interopRequireDefault(_prefixPlugin);
	
	var _resolveInteractionStylesPlugin = __webpack_require__(75);
	
	var _resolveInteractionStylesPlugin2 = _interopRequireDefault(_resolveInteractionStylesPlugin);
	
	var _resolveMediaQueriesPlugin = __webpack_require__(76);
	
	var _resolveMediaQueriesPlugin2 = _interopRequireDefault(_resolveMediaQueriesPlugin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  checkProps: _checkPropsPlugin2.default,
	  keyframes: _keyframesPlugin2.default,
	  mergeStyleArray: _mergeStyleArrayPlugin2.default,
	  prefix: _prefixPlugin2.default,
	  resolveInteractionStyles: _resolveInteractionStylesPlugin2.default,
	  resolveMediaQueries: _resolveMediaQueriesPlugin2.default
	};
	/* eslint-disable block-scoped-const */
	
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _plugins = __webpack_require__(0);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cssRuleSetToString;
	
	var _appendPxIfNeeded = __webpack_require__(13);
	
	var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);
	
	var _camelCasePropsToDashCase = __webpack_require__(66);
	
	var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);
	
	var _mapObject = __webpack_require__(20);
	
	var _mapObject2 = _interopRequireDefault(_mapObject);
	
	var _prefixer = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createMarkupForStyles(style) {
	  return Object.keys(style).map(function (property) {
	    return property + ': ' + style[property] + ';';
	  }).join('\n');
	}
	
	function cssRuleSetToString(selector, rules, userAgent) {
	  if (!rules) {
	    return '';
	  }
	
	  var rulesWithPx = (0, _mapObject2.default)(rules, function (value, key) {
	    return (0, _appendPxIfNeeded2.default)(key, value);
	  });
	  var prefixedRules = (0, _prefixer.getPrefixedStyle)(rulesWithPx, userAgent);
	  var cssPrefixedRules = (0, _camelCasePropsToDashCase2.default)(prefixedRules);
	  var serializedRules = createMarkupForStyles(cssPrefixedRules);
	
	  return selector + '{' + serializedRules + '}';
	}
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPrefixedKeyframes = getPrefixedKeyframes;
	exports.getPrefixedStyle = getPrefixedStyle;
	
	var _inlineStylePrefixer = __webpack_require__(33);
	
	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; } /**
	                                                                                                                              * Based on https://github.com/jsstyles/css-vendor, but without having to
	                                                                                                                              * convert between different cases all the time.
	                                                                                                                              *
	                                                                                                                              * 
	                                                                                                                              */
	
	function transformValues(style) {
	  return Object.keys(style).reduce(function (newStyle, key) {
	    var value = style[key];
	    if (Array.isArray(value)) {
	      value = value.join(';' + key + ':');
	    } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString === 'function') {
	      value = value.toString();
	    }
	
	    newStyle[key] = value;
	    return newStyle;
	  }, {});
	}
	
	var _hasWarnedAboutUserAgent = false;
	var _lastUserAgent = undefined;
	var _cachedPrefixer = undefined;
	
	function getPrefixer(userAgent) {
	  var actualUserAgent = userAgent || global && global.navigator && global.navigator.userAgent;
	
	  if (process.env.NODE_ENV !== 'production') {
	    if (!actualUserAgent && !_hasWarnedAboutUserAgent) {
	      /* eslint-disable no-console */
	      console.warn('Radium: userAgent should be supplied for server-side rendering. See ' + 'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium ' + 'for more information.');
	      /* eslint-enable no-console */
	      _hasWarnedAboutUserAgent = true;
	    }
	  }
	
	  if (!_cachedPrefixer || actualUserAgent !== _lastUserAgent) {
	    _cachedPrefixer = new _inlineStylePrefixer2.default({ userAgent: actualUserAgent });
	    _lastUserAgent = actualUserAgent;
	  }
	  return _cachedPrefixer;
	}
	
	function getPrefixedKeyframes(userAgent) {
	  return getPrefixer(userAgent).prefixedKeyframes;
	}
	
	// Returns a new style object with vendor prefixes added to property names
	// and values.
	function getPrefixedStyle(style, userAgent) {
	  var styleWithFallbacks = transformValues(style);
	  var prefixer = getPrefixer(userAgent);
	  var prefixedStyle = prefixer.prefix(styleWithFallbacks);
	  return prefixedStyle;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var StyleKeeper = (function () {
	  function StyleKeeper(userAgent) {
	    _classCallCheck(this, StyleKeeper);
	
	    this._userAgent = userAgent;
	    this._listeners = [];
	    this._cssSet = {};
	  }
	
	  StyleKeeper.prototype.subscribe = function subscribe(listener) {
	    var _this = this;
	
	    if (this._listeners.indexOf(listener) === -1) {
	      this._listeners.push(listener);
	    }
	
	    return {
	      // Must be fat arrow to capture `this`
	      remove: function remove() {
	        var listenerIndex = _this._listeners.indexOf(listener);
	        if (listenerIndex > -1) {
	          _this._listeners.splice(listenerIndex, 1);
	        }
	      }
	    };
	  };
	
	  StyleKeeper.prototype.addCSS = function addCSS(css) {
	    var _this2 = this;
	
	    if (!this._cssSet[css]) {
	      this._cssSet[css] = true;
	      this._emitChange();
	    }
	
	    return {
	      // Must be fat arrow to capture `this`
	      remove: function remove() {
	        delete _this2._cssSet[css];
	        _this2._emitChange();
	      }
	    };
	  };
	
	  StyleKeeper.prototype.getCSS = function getCSS() {
	    return Object.keys(this._cssSet).join('\n');
	  };
	
	  StyleKeeper.prototype._emitChange = function _emitChange() {
	    this._listeners.forEach(function (listener) {
	      return listener();
	    });
	  };
	
	  return StyleKeeper;
	})();
	
	exports.default = StyleKeeper;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/**
	 * @license Fraction.js v3.2.0 09/09/2015
	 * http://www.xarg.org/2014/03/precise-calculations-in-javascript/
	 *
	 * Copyright (c) 2015, Robert Eisele (robert@xarg.org)
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 **/
	
	
	/**
	 *
	 * This class offers the possebility to calculate fractions.
	 * You can pass a fraction in different formats. Either as array, as double, as string or as an integer.
	 *
	 * Array/Object form
	 * [ 0 => <nominator>, 1 => <denominator> ]
	 * [ n => <nominator>, d => <denominator> ]
	 *
	 * Integer form
	 * - Single integer value
	 *
	 * Double form
	 * - Single double value
	 *
	 * String form
	 * 123.456 - a simple double
	 * 123/456 - A string fraction
	 * 123.'456' - a double with repeating decimal places
	 * 123.(456) - synonym
	 * 123.45'6' - a double with repeating last place
	 * 123.45(6) - synonym
	 *
	 * Example:
	 *
	 * var f = new Fraction("9.4'31'");
	 * f.mul([-4, 3]).div(4.9);
	 *
	 */
	
	(function(root) {
	
	    "use strict";
	    
	    // Maximum search depth for cyclic rational numbers. 2000 should be more than enough. 
	    // Example: 1/7 = 0.(142857) has 6 repeating decimal places.
	    // If MAX_CYCLE_LEN gets reduced, long cycles will not be detected and toString() only gets the first 10 digits
	    var MAX_CYCLE_LEN = 2000;
	
	    // Parsed data to avoid calling "new" all the time
	    var P = {
	        "s": 1,
	        "n": 0,
	        "d": 1
	    };
	
	    function assign(n, s) {
	
	        if (isNaN(n = parseInt(n, 10))) {
	            thorwInvalidParam();
	        }
	        return n * s;
	    }
	
	    function thorwInvalidParam() {
	        throw "Invalid Param";
	    }
	
	    var parse = function(p1, p2) {
	
	        var n = 0, d = 1, s = 1;
	        var v = 0, w = 0, x = 0, y = 1, z = 1;
	
	        var A = 0, B = 1;
	        var C = 1, D = 1;
	
	        var N = 10000000;
	        var M;
	
	        if (p1 === undefined || p1 === null) {
	            /* void */
	        } else if (p2 !== undefined) {
	            n = p1;
	            d = p2;
	            s = n * d;
	        } else
	            switch (typeof p1) {
	
	                case "object":
	                {
	                    if ("d" in p1 && "n" in p1) {
	                        n = p1["n"];
	                        d = p1["d"];
	                        if ("s" in p1)
	                            n*= p1["s"];
	                    } else if (0 in p1) {
	                        n = p1[0];
	                        if (1 in p1)
	                            d = p1[1];
	                    } else {
	                        thorwInvalidParam();
	                    }
	                    s = n * d;
	                    break;
	                }
	                case "number":
	                {
	                    if (p1 < 0) {
	                        s = p1;
	                        p1 = -p1;
	                    }
	
	                    if (p1 % 1 === 0) {
	                        n = p1;
	                    } else if (p1 > 0) { // check for != 0, scale would become NaN (log(0)), which converges really slow
	
	                        if (p1 >= 1) {
	                            z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
	                            p1/= z;
	                        }
	
	                        // Using Farey Sequences
	                        // http://www.johndcook.com/blog/2010/10/20/best-rational-approximation/
	
	                        while (B <= N && D <= N) {
	                            M = (A + C) / (B + D);
	
	                            if (p1 === M) {
	                                if (B + D <= N) {
	                                    n = A + C;
	                                    d = B + D;
	                                } else if (D > B) {
	                                    n = C;
	                                    d = D;
	                                } else {
	                                    n = A;
	                                    d = B;
	                                }
	                                break;
	
	                            } else {
	
	                                if (p1 > M) {
	                                    A+= C;
	                                    B+= D;
	                                } else {
	                                    C+= A;
	                                    D+= B;
	                                }
	
	                                if (B > N) {
	                                    n = C;
	                                    d = D;
	                                } else {
	                                    n = A;
	                                    d = B;
	                                }
	                            }
	                        }
	                        n*= z;
	                    }
	                    break;
	                }
	                case "string":
	                {
	                    B = p1.match(/\d+|./g);
	
	                    if (B[A] === '-') {// Check for minus sign at the beginning
	                        s = -1;
	                        A++;
	                    } else if (B[A] === '+') {// Check for plus sign at the beginning
	                        A++;
	                    }
	
	                    if (B.length === A + 1) { // Check if it's just a simple number "1234"
	                        w = assign(B[A++], s);
	                    } else if (B[A + 1] === '.' || B[A] === '.') { // Check if it's a decimal number
	
	                        if (B[A] !== '.') { // Handle 0.5 and .5
	                            v = assign(B[A++], s);
	                        }
	                        A++;
	
	                        // Check for decimal places
	                        if (A + 1 === B.length || B[A + 1] === '(' && B[A + 3] === ')' || B[A + 1] === "'" && B[A + 3] === "'") {
	                            w = assign(B[A], s);
	                            y = Math.pow(10, B[A].length);
	                            A++;
	                        }
	
	                        // Check for repeating places
	                        if (B[A] === '(' && B[A + 2] === ')' || B[A] === "'" && B[A + 2] === "'") {
	                            x = assign(B[A + 1], s);
	                            z = Math.pow(10, B[A + 1].length) - 1;
	                            A+= 3;
	                        }
	
	                    } else if (B[A + 1] === '/' || B[A + 1] === ':') { // Check for a simple fraction "123/456" or "123:456"
	                        w = assign(B[A], s);
	                        y = assign(B[A + 2], 1);
	                        A+= 3;
	                    } else if (B[A + 3] === '/' && B[A + 1] === ' ') { // Check for a complex fraction "123 1/2"
	                        v = assign(B[A], s);
	                        w = assign(B[A + 2], s);
	                        y = assign(B[A + 4], 1);
	                        A+= 5;
	                    }
	
	                    if (B.length <= A) { // Check for more tokens on the stack
	                        d = y * z;
	                        s = /* void */
	                        n = x + d * v + z * w;
	                        break;
	                    }
	
	                    /* Fall through on error */
	                }
	                default:
	                    thorwInvalidParam();
	            }
	
	        if (!d) {
	            throw "DIV/0";
	        }
	
	        P["s"] = s < 0 ? -1 : 1;
	        P["n"] = Math.abs(n);
	        P["d"] = Math.abs(d);
	    };
	
	    var modpow = function(b, e, m) {
	
	        for (var r = 1; e > 0; b = (b * b) % m, e >>= 1) {
	
	            if (e & 1) {
	                r = (r * b) % m;
	            }
	        }
	        return r;
	    };
	
	    var cycleLen = function(n, d) {
	
	        for (; d % 2 === 0; 
	            d/= 2) {}
	
	        for (; d % 5 === 0; 
	            d/= 5) {}
	        
	        if (d === 1) // Catch non-cyclic numbers
	            return 0;
	            
	        // If we would like to compute really large numbers quicker, we could make use of Fermat's little theorem:
	        // 10^(d-1) % d == 1
	        // However, we don't need such large numbers and MAX_CYCLE_LEN should be the capstone, 
	        // as we want to translate the numbers to strings.
	
	        var rem = 10 % d;
	
	        for (var t = 1; rem !== 1; t++) {
	            rem = rem * 10 % d;
	
	            if (t > MAX_CYCLE_LEN)
	                return 0; // Returning 0 here means that we don't print it as a cyclic number. It's likely that the answer is `d-1`
	        }
	        return t;
	    };
	
	    var cycleStart = function(n, d, len) {
	
	        var rem1 = 1;
	        var rem2 = modpow(10, len, d);
	        
	        for (var t = 0; t < 300; t++) { // s < ~log10(Number.MAX_VALUE)
	            // Solve 10^s == 10^(s+t) (mod d)
	
	            if (rem1 === rem2)
	                return t;
	
	            rem1 = rem1 * 10 % d;
	            rem2 = rem2 * 10 % d;
	        }
	        return 0;
	    };
	
	    var gcd = function(a, b) {
	
	        if (!a) return b;
	        if (!b) return a;
	
	        while (1) {
	            a%= b;
	            if (!a) return b;
	            b%= a;
	            if (!b) return a;
	        }
	    };
	
	    /**
	     * Module constructor
	     *
	     * @constructor
	     * @param {number|Fraction} a
	     * @param {number=} b
	     */
	    function Fraction(a, b) {
	
	        if (!(this instanceof Fraction)) {
	            return new Fraction(a, b);
	        }
	
	        parse(a, b);
	
	        if (Fraction['REDUCE']) {
	            a = gcd(P["d"], P["n"]); // Abuse a
	        } else {
	            a = 1;
	        }
	
	        this["s"] = P["s"];
	        this["n"] = P["n"] / a;
	        this["d"] = P["d"] / a;
	    }
	
	    /**
	     * Boolean global variable to be able to disable automatic reduction of the fraction
	     *
	     */
	    Fraction['REDUCE'] = 1;
	
	    Fraction.prototype = {
	
	        "s": 1,
	        "n": 0,
	        "d": 1,
	
	        /**
	         * Calculates the absolute value
	         *
	         * Ex: new Fraction(-4).abs() => 4
	         **/
	        "abs": function() {
	
	            return new Fraction(this["n"], this["d"]);
	        },
	
	        /**
	         * Inverts the sign of the current fraction
	         *
	         * Ex: new Fraction(-4).neg() => 4
	         **/
	        "neg": function() {
	
	            return new Fraction(-this["s"] * this["n"], this["d"]);
	        },
	
	        /**
	         * Adds two rational numbers
	         *
	         * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
	         **/
	        "add": function(a, b) {
	
	            parse(a, b);
	            return new Fraction(
	                    this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"],
	                    this["d"] * P["d"]
	                    );
	        },
	
	        /**
	         * Subtracts two rational numbers
	         *
	         * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
	         **/
	        "sub": function(a, b) {
	
	            parse(a, b);
	            return new Fraction(
	                    this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"],
	                    this["d"] * P["d"]
	                    );
	        },
	
	        /**
	         * Multiplies two rational numbers
	         *
	         * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
	         **/
	        "mul": function(a, b) {
	
	            parse(a, b);
	            return new Fraction(
	                    this["s"] * P["s"] * this["n"] * P["n"],
	                    this["d"] * P["d"]
	                    );
	        },
	
	        /**
	         * Divides two rational numbers
	         *
	         * Ex: new Fraction("-17.(345)").inverse().div(3)
	         **/
	        "div": function(a, b) {
	
	            parse(a, b);
	            return new Fraction(
	                    this["s"] * P["s"] * this["n"] * P["d"],
	                    this["d"] * P["n"]
	                    );
	        },
	
	        /**
	         * Clones the actual object
	         *
	         * Ex: new Fraction("-17.(345)").clone()
	         **/
	        "clone": function() {
	            return new Fraction(this);
	        },
	
	        /**
	         * Calculates the modulo of two rational numbers - a more precise fmod
	         *
	         * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
	         **/
	        "mod": function(a, b) {
	
	            if (a === undefined) {
	                return new Fraction(this["s"] * this["n"] % this["d"], 1);
	            }
	
	            parse(a, b);
	            if (0 === (P["n"] * this["d"])) {
	                Fraction(0, 0); // Throw div/0
	            }
	
	            /*
	             * First silly attempt, kinda slow
	             *
	             return that["sub"]({
	             "n": num["n"] * Math.floor((this.n / this.d) / (num.n / num.d)),
	             "d": num["d"],
	             "s": this["s"]
	             });*/
	
	            /*
	             * New attempt: a1 / b1 = a2 / b2 * q + r
	             * => b2 * a1 = a2 * b1 * q + b1 * b2 * r
	             * => (b2 * a1 % a2 * b1) / (b1 * b2)
	             */
	            return new Fraction(
	                    (this["s"] * P["d"] * this["n"]) % (P["n"] * this["d"]),
	                    P["d"] * this["d"]
	                    );
	        },
	
	        /**
	         * Calculates the fractional gcd of two rational numbers
	         *
	         * Ex: new Fraction(5,8).gcd(3,7) => 1/56
	         */
	        "gcd": function(a, b) {
	
	            parse(a, b);
	
	            // gcd(a / b, c / d) = gcd(a, c) / lcm(b, d)
	
	            return new Fraction(gcd(P["n"], this["n"]), P["d"] * this["d"] / gcd(P["d"], this["d"]));
	        },
	
	        /**
	         * Calculates the fractional lcm of two rational numbers
	         *
	         * Ex: new Fraction(5,8).lcm(3,7) => 15
	         */
	        "lcm": function(a, b) {
	
	            parse(a, b);
	
	            // lcm(a / b, c / d) = lcm(a, c) / gcd(b, d)
	
	            return new Fraction(P["n"] * this["n"] / gcd(P["n"], this["n"]), gcd(P["d"], this["d"]));
	        },
	
	        /**
	         * Calculates the ceil of a rational number
	         *
	         * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
	         **/
	        "ceil": function(places) {
	            
	            places = Math.pow(10, places || 0);
	
	            return new Fraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
	        },
	
	        /**
	         * Calculates the floor of a rational number
	         *
	         * Ex: new Fraction('4.(3)').floor() => (4 / 1)
	         **/
	        "floor": function(places) {
	            
	            places = Math.pow(10, places || 0);
	
	            return new Fraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
	        },
	
	        /**
	         * Rounds a rational numbers
	         *
	         * Ex: new Fraction('4.(3)').round() => (4 / 1)
	         **/
	        "round": function(places) {
	            
	            places = Math.pow(10, places || 0);
	
	            return new Fraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
	        },
	
	        /**
	         * Gets the inverse of the fraction, means numerator and denumerator are exchanged
	         *
	         * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
	         **/
	        "inverse": function() {
	
	            return new Fraction(this["s"] * this["d"], this["n"]);
	        },
	
	        /**
	         * Calculates the fraction to some integer exponent
	         *
	         * Ex: new Fraction(-1,2).pow(-3) => -8
	         */
	        "pow": function(m) {
	            
	            if (m < 0) {
	                return new Fraction(Math.pow(this['s'] * this["d"],-m), Math.pow(this["n"],-m));
	            } else {
	                return new Fraction(Math.pow(this['s'] * this["n"], m), Math.pow(this["d"], m));
	            }
	        },
	
	        /**
	         * Check if two rational numbers are the same
	         *
	         * Ex: new Fraction(19.6).equals([98, 5]);
	         **/
	        "equals": function(a, b) {
	
	            parse(a, b);
	            return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"]; // Same as compare() === 0
	        },
	
	        /**
	         * Check if two rational numbers are the same
	         *
	         * Ex: new Fraction(19.6).equals([98, 5]);
	         **/
	        "compare": function(a, b) {
	
	            parse(a, b);
	            var t = (this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"]);
	            return (0 < t) - (t < 0);
	        },
	
	        /**
	         * Check if two rational numbers are divisible
	         *
	         * Ex: new Fraction(19.6).divisible(1.5);
	         */
	        "divisible": function(a, b) {
	
	            parse(a, b);
	            return !(!(P["n"] * this["d"]) || ((this["n"] * P["d"]) % (P["n"] * this["d"])));
	        },
	
	        /**
	         * Returns a decimal representation of the fraction
	         *
	         * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
	         **/
	        'valueOf': function() {
	
	            return this["s"] * this["n"] / this["d"];
	        },
	
	        /**
	         * Returns a string-fraction representation of a Fraction object
	         *
	         * Ex: new Fraction("1.'3'").toFraction() => "4 1/3"
	         **/
	        'toFraction': function(excludeWhole) {
	
	            var whole, str = "";
	            var n = this["n"];
	            var d = this["d"];
	            if (this["s"] < 0) {
	                str+= '-';
	            }
	
	            if (d === 1) {
	                str+= n;
	            } else {
	
	                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
	                    str+= whole;
	                    str+= " ";
	                    n %= d;
	                }
	
	                str+= n;
	                str+= '/';
	                str+= d;
	            }
	            return str;
	        },
	
	        /**
	         * Returns a latex representation of a Fraction object
	         *
	         * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
	         **/
	        'toLatex': function(excludeWhole) {
	
	            var whole, str = "";
	            var n = this["n"];
	            var d = this["d"];
	            if (this["s"] < 0) {
	                str+= '-';
	            }
	
	            if (d === 1) {
	                str+= n;
	            } else {
	                
	                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {		
	                    str+= whole;		
	                    n %= d;		
	                }
	
	                str+= "\\frac{";
	                str+= n;
	                str+= '}{';
	                str+= d;
	                str+= '}';
	            }
	            return str;
	        },
	        
	        /**
	         * Returns an array of continued fraction elements
	         * 
	         * Ex: new Fraction("7/8").toContinued() => [0,1,7]
	         */
	        'toContinued': function() {
	            
	            var t;
	            var a = this['n'];
	            var b = this['d'];
	            var res = [];
	            
	            do {
	                res.push(Math.floor(a / b));
	                t = a % b;
	                a = b;
	                b = t;
	            } while(a !== 1);
	            
	            return res;
	        },
	
	        /**
	         * Creates a string representation of a fraction with all digits
	         *
	         * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
	         **/
	        'toString': function() {
	
	            var g;
	            var N = this["n"];
	            var D = this["d"];
	
	            if (!Fraction['REDUCE']) {
	                g = gcd(N, D);
	                N/= g;
	                D/= g;
	            }
	
	            var p = String(N).split(""); // Numerator chars
	            var t = 0; // Tmp var
	
	            var ret = [~this["s"] ? "" : "-", "", ""]; // Return array, [0] is zero sign, [1] before comma, [2] after
	            var zeros = ""; // Collection variable for zeros
	
	            var cycLen = cycleLen(N, D); // Cycle length
	            var cycOff = cycleStart(N, D, cycLen); // Cycle start
	
	            var j = -1;
	            var n = 1; // str index
	
	            // rough estimate to fill zeros
	            var length = 10 + cycLen + cycOff + p.length; // 10 = decimal places when no repitation
	
	            for (var i = 0; i < length; i++, t*= 10) {
	
	                if (i < p.length) {
	                    t+= Number(p[i]);
	                } else {
	                    n = 2;
	                    j++; // Start now => after comma
	                }
	
	                if (cycLen > 0) { // If we have a repeating part
	                    if (j === cycOff) {
	                        ret[n]+= zeros + "(";
	                        zeros = "";
	                    } else if (j === cycLen + cycOff) {
	                        ret[n]+= zeros + ")";
	                        break;
	                    }
	                }
	
	                if (t >= D) {
	                    ret[n]+= zeros + ((t / D) | 0); // Flush zeros, Add current digit
	                    zeros = "";
	                    t = t % D;
	                } else if (n > 1) { // Add zeros to the zero buffer
	                    zeros+= "0";
	                } else if (ret[n]) { // If before comma, add zero only if already something was added
	                    ret[n]+= "0";
	                }
	            }
	
	            // If it's empty, it's a leading zero only
	            ret[0]+= ret[1] || "0";
	
	            // If there is something after the comma, add the comma sign
	            if (ret[2]) {
	                return ret[0] + "." + ret[2];
	            }
	            return ret[0];
	        }
	    };
	
	    if ("function" === "function" && __webpack_require__(77)["amd"]) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            return Fraction;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (true) {
	        module["exports"] = Fraction;
	    } else {
	        root['Fraction'] = Fraction;
	    }
	    
	})(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)(module)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	// helper to capitalize strings
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};
	
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/** Used for built-in method references. */
	var arrayProto = global.Array.prototype,
	    objectProto = global.Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = global.Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(global, 'Map'),
	    nativeCreate = getNative(Object, 'create');
	
	/**
	 * Creates an hash object.
	 *
	 * @private
	 * @returns {Object} Returns the new hash object.
	 */
	function Hash() {}
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(hash, key) {
	  return hashHas(hash, key) && delete hash[key];
	}
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(hash, key) {
	  if (nativeCreate) {
	    var result = hash[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
	}
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(hash, key) {
	  return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
	}
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function hashSet(hash, key, value) {
	  hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	}
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function MapCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapClear() {
	  this.__data__ = { 'hash': new Hash, 'map': Map ? new Map : [], 'string': new Hash };
	}
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapDelete(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map['delete'](key) : assocDelete(data.map, key);
	}
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapGet(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashGet(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.get(key) : assocGet(data.map, key);
	}
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapHas(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashHas(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.has(key) : assocHas(data.map, key);
	}
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache object.
	 */
	function mapSet(key, value) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
	  } else if (Map) {
	    data.map.set(key, value);
	  } else {
	    assocSet(data.map, key, value);
	  }
	  return this;
	}
	
	/**
	 * Removes `key` and its value from the associative array.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function assocDelete(array, key) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = array.length - 1;
	  if (index == lastIndex) {
	    array.pop();
	  } else {
	    splice.call(array, index, 1);
	  }
	  return true;
	}
	
	/**
	 * Gets the associative array value for `key`.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function assocGet(array, key) {
	  var index = assocIndexOf(array, key);
	  return index < 0 ? undefined : array[index][1];
	}
	
	/**
	 * Checks if an associative array value for `key` exists.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function assocHas(array, key) {
	  return assocIndexOf(array, key) > -1;
	}
	
	/**
	 * Gets the index at which the first occurrence of `key` is found in `array`
	 * of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	/**
	 * Sets the associative array `key` to `value`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function assocSet(array, key, value) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    array.push([key, value]);
	  } else {
	    array[index][1] = value;
	  }
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return type == 'number' || type == 'boolean' ||
	    (type == 'string' && value !== '__proto__') || value == null;
	}
	
	/**
	 * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(funcToString.call(value));
	  }
	  return isObjectLike(value) &&
	    (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
	}
	
	// Avoid inheriting from `Object.prototype` when possible.
	Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;
	
	// Add functions to the `MapCache`.
	MapCache.prototype.clear = mapClear;
	MapCache.prototype['delete'] = mapDelete;
	MapCache.prototype.get = mapGet;
	MapCache.prototype.has = mapHas;
	MapCache.prototype.set = mapSet;
	
	module.exports = MapCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    stringTag = '[object String]';
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function iteratorToArray(iterator) {
	  var data,
	      result = [];
	
	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}
	
	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var Reflect = global.Reflect,
	    enumerate = Reflect ? Reflect.enumerate : undefined,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * The base implementation of `_.keysIn` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  object = object == null ? object : Object(object);
	
	  var result = [];
	  for (var key in object) {
	    result.push(key);
	  }
	  return result;
	}
	
	// Fallback for IE < 9 with es6-shim.
	if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
	  baseKeysIn = function(object) {
	    return iteratorToArray(enumerate(object));
	  };
	}
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  return (isLength(length) && (isArray(object) || isString(object) || isArguments(object)))
	    ? baseTimes(length, String)
	    : null;
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null &&
	    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  var index = -1,
	      isProto = isPrototype(object),
	      props = baseKeysIn(object),
	      propsLength = props.length,
	      indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if (!(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 4.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var Stack = __webpack_require__(59),
	    arrayEach = __webpack_require__(50),
	    baseFor = __webpack_require__(55),
	    isPlainObject = __webpack_require__(61),
	    keys = __webpack_require__(62),
	    keysIn = __webpack_require__(10),
	    rest = __webpack_require__(12);
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	cloneableTags[dateTag] = cloneableTags[float32Tag] =
	cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	cloneableTags[mapTag] = cloneableTags[numberTag] =
	cloneableTags[objectTag] = cloneableTags[regexpTag] =
	cloneableTags[setTag] = cloneableTags[stringTag] =
	cloneableTags[symbolTag] = cloneableTags[uint8Tag] =
	cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] =
	cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
	
	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  map.set(pair[0], pair[1]);
	  return map;
	}
	
	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  set.add(value);
	  return set;
	}
	
	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array.length;
	
	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Converts `map` to an array.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	/**
	 * Converts `set` to an array.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = global.Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var Symbol = global.Symbol,
	    Uint8Array = global.Uint8Array,
	    getOwnPropertySymbols = Object.getOwnPropertySymbols,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(global, 'Map'),
	    Set = getNative(global, 'Set');
	
	/** Used to detect maps and sets. */
	var mapCtorString = Map ? funcToString.call(Map) : '',
	    setCtorString = Set ? funcToString.call(Set) : '';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = Symbol ? symbolProto.valueOf : undefined;
	
	/**
	 * This function is like `assignValue` except that it doesn't assign `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if ((!eq(objValue, value) ||
	        (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}
	
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;
	
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      return cloneableTags[tag]
	        ? initCloneByTag(value, tag, isDeep)
	        : (object ? value : {});
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);
	
	  // Recursively populate clone (susceptible to call stack limits).
	  (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	    assignValue(result, key, baseClone(subValue, isDeep, customizer, key, value, stack));
	  });
	  return isArr ? result : copySymbols(value, result);
	}
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(prototype) {
	    if (isObject(prototype)) {
	      object.prototype = prototype;
	      var result = new object;
	      object.prototype = undefined;
	    }
	    return result || {};
	  };
	}());
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  var props = (isArray(source) || isTypedArray(source)) ? undefined : keysIn(source);
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer ? customizer(object[key], srcValue, (key + ''), object, source, stack) : undefined;
	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}
	
	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue) || stack.get(objValue);
	
	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer ? customizer(objValue, srcValue, (key + ''), object, source, stack) : undefined,
	      isCommon = newValue === undefined;
	
	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = srcIndex ? copyArray(objValue) : objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        newValue = baseClone(srcValue);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        newValue = baseClone(srcValue);
	      }
	      else {
	        newValue = srcIndex ? baseClone(objValue) : objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  stack.set(srcValue, newValue);
	
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	  }
	  assignMergeValue(object, key, newValue);
	}
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Creates a clone of `buffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} buffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneBuffer(buffer) {
	  var Ctor = buffer.constructor,
	      result = new Ctor(buffer.byteLength),
	      view = new Uint8Array(result);
	
	  view.set(new Uint8Array(buffer));
	  return result;
	}
	
	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map) {
	  var Ctor = map.constructor;
	  return arrayReduce(mapToArray(map), addMapEntry, new Ctor);
	}
	
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var Ctor = regexp.constructor,
	      result = new Ctor(regexp.source, reFlags.exec(regexp));
	
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}
	
	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set) {
	  var Ctor = set.constructor;
	  return arrayReduce(setToArray(set), addSetEntry, new Ctor);
	}
	
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return Symbol ? Object(symbolValueOf.call(symbol)) : {};
	}
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = typedArray.buffer,
	      Ctor = typedArray.constructor;
	
	  return new Ctor(isDeep ? cloneBuffer(buffer) : buffer, typedArray.byteOffset, typedArray.length);
	}
	
	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object) {
	  return copyObjectWith(source, props, object);
	}
	
	/**
	 * This function is like `copyObject` except that it accepts a function to
	 * customize copied values.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObjectWith(source, props, object, customizer) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index],
	        newValue = customizer ? customizer(object[key], source[key], key, object, source) : source[key];
	
	    assignValue(object, key, newValue);
	  }
	  return object;
	}
	
	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return rest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = typeof customizer == 'function' ? (length--, customizer) : undefined;
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Creates an array of the own symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = getOwnPropertySymbols || function() {
	  return [];
	};
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}
	
	// Fallback for IE 11 providing `toStringTag` values for maps and sets.
	if ((Map && getTag(new Map) != mapTag) || (Set && getTag(new Set) != setTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : null,
	        ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';
	
	    if (ctorString) {
	      if (ctorString == mapCtorString) {
	        return mapTag;
	      }
	      if (ctorString == setCtorString) {
	        return setTag;
	      }
	    }
	    return result;
	  };
	}
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);
	
	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  var Ctor = object.constructor;
	  return baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
	}
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneBuffer(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);
	
	    case mapTag:
	      return cloneMap(object);
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      return cloneRegExp(object);
	
	    case setTag:
	      return cloneSet(object);
	
	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	/**
	 * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null &&
	    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(funcToString.call(value));
	  }
	  return isObjectLike(value) &&
	    (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
	}
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	/**
	 * Converts `value` to a plain object flattening inherited enumerable
	 * properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}
	
	/**
	 * Recursively merges own and inherited enumerable properties of source
	 * objects into the destination object, skipping source properties that resolve
	 * to `undefined`. Array and plain object properties are merged recursively.
	 * Other objects and value types are overridden by assignment. Source objects
	 * are applied from left to right. Subsequent sources overwrite property
	 * assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var users = {
	 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	 * };
	 *
	 * var ages = {
	 *   'data': [{ 'age': 36 }, { 'age': 40 }]
	 * };
	 *
	 * _.merge(users, ages);
	 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});
	
	module.exports = merge;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `global`. */
	var freeParseInt = parseInt;
	
	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {...*} [args] The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args ? args.length : 0;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3');
	 * // => 3
	 */
	function toInteger(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  var remainder = value % 1;
	  return value === value ? (remainder ? value - remainder : value) : 0;
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = rest;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = appendPxIfNeeded;
	
	// Copied from https://github.com/facebook/react/blob/
	// 102cd291899f9942a76c40a0e78920a6fe544dc1/
	// src/renderers/dom/shared/CSSProperty.js
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,
	
	  // SVG-related properties
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};
	
	function appendPxIfNeeded(propertyName, value) {
	  var needsPxSuffix = !isUnitlessNumber[propertyName] && typeof value === 'number' && value !== 0;
	  return needsPxSuffix ? value + 'px' : value;
	}
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = enhanceWithRadium;
	
	var _react = __webpack_require__(1);
	
	var _styleKeeper = __webpack_require__(6);
	
	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);
	
	var _resolveStyles = __webpack_require__(22);
	
	var _resolveStyles2 = _interopRequireDefault(_resolveStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES = ['arguments', 'callee', 'caller', 'length', 'name', 'prototype', 'type'];
	
	function copyProperties(source, target) {
	  Object.getOwnPropertyNames(source).forEach(function (key) {
	    if (KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key) < 0 && !target.hasOwnProperty(key)) {
	      var descriptor = Object.getOwnPropertyDescriptor(source, key);
	      Object.defineProperty(target, key, descriptor);
	    }
	  });
	}
	
	function enhanceWithRadium(configOrComposedComponent) {
	  var _class2, _temp;
	
	  var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  if (typeof configOrComposedComponent !== 'function') {
	    var _ret = (function () {
	      var newConfig = _extends({}, config, configOrComposedComponent);
	      return {
	        v: function v(configOrComponent) {
	          return enhanceWithRadium(configOrComponent, newConfig);
	        }
	      };
	    })();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	
	  var component = configOrComposedComponent;
	  var ComposedComponent = component;
	
	  // Handle stateless components
	  if (!ComposedComponent.render && !ComposedComponent.prototype.render) {
	    ComposedComponent = (function (_Component) {
	      _inherits(_class, _Component);
	
	      function _class() {
	        _classCallCheck(this, _class);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      _class.prototype.render = function render() {
	        return component(this.props, this.context);
	      };
	
	      return _class;
	    })(_react.Component);
	    ComposedComponent.displayName = component.displayName || component.name;
	  }
	
	  var RadiumEnhancer = (_temp = _class2 = (function (_ComposedComponent) {
	    _inherits(RadiumEnhancer, _ComposedComponent);
	
	    function RadiumEnhancer() {
	      _classCallCheck(this, RadiumEnhancer);
	
	      var _this2 = _possibleConstructorReturn(this, _ComposedComponent.apply(this, arguments));
	
	      _this2.state = _this2.state || {};
	      _this2.state._radiumStyleState = {};
	      _this2._radiumIsMounted = true;
	      return _this2;
	    }
	
	    RadiumEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (_ComposedComponent.prototype.componentWillUnmount) {
	        _ComposedComponent.prototype.componentWillUnmount.call(this);
	      }
	
	      this._radiumIsMounted = false;
	
	      if (this._radiumMouseUpListener) {
	        this._radiumMouseUpListener.remove();
	      }
	
	      if (this._radiumMediaQueryListenersByQuery) {
	        Object.keys(this._radiumMediaQueryListenersByQuery).forEach(function (query) {
	          this._radiumMediaQueryListenersByQuery[query].remove();
	        }, this);
	      }
	    };
	
	    RadiumEnhancer.prototype.getChildContext = function getChildContext() {
	      var superChildContext = _ComposedComponent.prototype.getChildContext ? _ComposedComponent.prototype.getChildContext.call(this) : {};
	
	      if (!this.props.radiumConfig) {
	        return superChildContext;
	      }
	
	      var newContext = _extends({}, superChildContext);
	
	      if (this.props.radiumConfig) {
	        newContext._radiumConfig = this.props.radiumConfig;
	      }
	
	      return newContext;
	    };
	
	    RadiumEnhancer.prototype.render = function render() {
	      var renderedElement = _ComposedComponent.prototype.render.call(this);
	      var currentConfig = this.props.radiumConfig || this.context._radiumConfig || config;
	
	      if (config && currentConfig !== config) {
	        currentConfig = _extends({}, config, currentConfig);
	      }
	
	      return (0, _resolveStyles2.default)(this, renderedElement, currentConfig);
	    };
	
	    return RadiumEnhancer;
	  })(ComposedComponent), _class2._isRadiumEnhanced = true, _temp);
	
	  // Class inheritance uses Object.create and because of __proto__ issues
	  // with IE <10 any static properties of the superclass aren't inherited and
	  // so need to be manually populated.
	  // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-
	
	  copyProperties(component, RadiumEnhancer);
	
	  if (process.env.NODE_ENV !== 'production') {
	    // This also fixes React Hot Loader by exposing the original components top
	    // level prototype methods on the Radium enhanced prototype as discussed in
	    // https://github.com/FormidableLabs/radium/issues/219.
	    copyProperties(ComposedComponent.prototype, RadiumEnhancer.prototype);
	  }
	
	  if (RadiumEnhancer.propTypes && RadiumEnhancer.propTypes.style) {
	    RadiumEnhancer.propTypes = _extends({}, RadiumEnhancer.propTypes, {
	      style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object])
	    });
	  }
	
	  RadiumEnhancer.displayName = component.displayName || component.name || 'Component';
	
	  RadiumEnhancer.contextTypes = _extends({}, RadiumEnhancer.contextTypes, {
	    _radiumConfig: _react.PropTypes.object,
	    _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	  });
	
	  RadiumEnhancer.childContextTypes = _extends({}, RadiumEnhancer.childContextTypes, {
	    _radiumConfig: _react.PropTypes.object,
	    _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	  });
	
	  return RadiumEnhancer;
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var getStateKey = function getStateKey(elementKey) {
	  return elementKey === null || elementKey === undefined ? 'main' : elementKey.toString();
	};
	
	exports.default = getStateKey;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getStateKey = __webpack_require__(15);
	
	var _getStateKey2 = _interopRequireDefault(_getStateKey);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getState = function getState(state, elementKey, value) {
	  var key = (0, _getStateKey2.default)(elementKey);
	
	  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
	};
	
	exports.default = getState;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hash;
	
	// a simple djb2 hash based on hash-string:
	// https://github.com/MatthewBarker/hash-string/blob/master/source/hash-string.js
	// returns a hex-encoded hash
	function hash(text) {
	  if (!text) {
	    return '';
	  }
	
	  var hashValue = 5381;
	  var index = text.length - 1;
	
	  while (index) {
	    hashValue = hashValue * 33 ^ text.charCodeAt(index);
	    index -= 1;
	  }
	
	  return (hashValue >>> 0).toString(16);
	}
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _enhancer = __webpack_require__(14);
	
	var _enhancer2 = _interopRequireDefault(_enhancer);
	
	var _plugins = __webpack_require__(0);
	
	var _plugins2 = _interopRequireDefault(_plugins);
	
	var _style = __webpack_require__(69);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _styleRoot = __webpack_require__(67);
	
	var _styleRoot2 = _interopRequireDefault(_styleRoot);
	
	var _getState = __webpack_require__(16);
	
	var _getState2 = _interopRequireDefault(_getState);
	
	var _keyframes = __webpack_require__(19);
	
	var _keyframes2 = _interopRequireDefault(_keyframes);
	
	var _resolveStyles = __webpack_require__(22);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Radium(ComposedComponent) {
	  return (0, _enhancer2.default)(ComposedComponent);
	}
	
	Radium.Plugins = _plugins2.default;
	Radium.Style = _style2.default;
	Radium.StyleRoot = _styleRoot2.default;
	Radium.getState = _getState2.default;
	Radium.keyframes = _keyframes2.default;
	Radium.__clearStateForTests = _resolveStyles.__clearStateForTests;
	
	exports.default = Radium;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyframes;
	
	var _cssRuleSetToString = __webpack_require__(4);
	
	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);
	
	var _hash = __webpack_require__(17);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	var _prefixer = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function keyframes(keyframeRules, name) {
	  return {
	    __radiumKeyframes: true,
	    __process: function __process(userAgent) {
	      var keyframesPrefixed = (0, _prefixer.getPrefixedKeyframes)(userAgent);
	      var rules = Object.keys(keyframeRules).map(function (percentage) {
	        return (0, _cssRuleSetToString2.default)(percentage, keyframeRules[percentage], userAgent);
	      }).join('\n');
	      var animationName = (name ? name + '-' : '') + 'radium-animation-' + (0, _hash2.default)(rules);
	      var css = '@' + keyframesPrefixed + ' ' + animationName + ' {\n' + rules + '\n}\n';
	      return { css: css, animationName: animationName };
	    }
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mapObject;
	function mapObject(object, mapper) {
	  return Object.keys(object).reduce(function (result, key) {
	    result[key] = mapper(object[key], key);
	    return result;
	  }, {});
	}
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isNestedStyle = isNestedStyle;
	exports.mergeStyles = mergeStyles;
	
	var _isPlainObject = __webpack_require__(48);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	function isNestedStyle(value) {
	  // Don't merge objects overriding toString, since they should be converted
	  // to string values.
	  return (0, _isPlainObject2.default)(value) && value.toString === Object.prototype.toString;
	}
	
	// Merge style objects. Deep merge plain object values.
	function mergeStyles(styles) {
	  var result = {};
	
	  styles.forEach(function (style) {
	    if (!style || (typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') {
	      return;
	    }
	
	    if (Array.isArray(style)) {
	      style = mergeStyles(style);
	    }
	
	    Object.keys(style).forEach(function (key) {
	      if (isNestedStyle(style[key]) && isNestedStyle(result[key])) {
	        result[key] = mergeStyles([result[key], style[key]]);
	      } else {
	        result[key] = style[key];
	      }
	    });
	  });
	
	  return result;
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _config = __webpack_require__(3);
	
	var _cssRuleSetToString = __webpack_require__(4);
	
	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);
	
	var _getState = __webpack_require__(16);
	
	var _getState2 = _interopRequireDefault(_getState);
	
	var _getStateKey = __webpack_require__(15);
	
	var _getStateKey2 = _interopRequireDefault(_getStateKey);
	
	var _mergeStyles = __webpack_require__(21);
	
	var _plugins = __webpack_require__(0);
	
	var _plugins2 = _interopRequireDefault(_plugins);
	
	var _exenv = __webpack_require__(31);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var DEFAULT_CONFIG = {
	  plugins: [_plugins2.default.mergeStyleArray, _plugins2.default.checkProps, _plugins2.default.resolveMediaQueries, _plugins2.default.resolveInteractionStyles, _plugins2.default.keyframes, _plugins2.default.prefix, _plugins2.default.checkProps]
	};
	
	// Gross
	var globalState = {};
	
	// Declare early for recursive helpers.
	var resolveStyles = null;
	
	var _shouldResolveStyles = function _shouldResolveStyles(component) {
	  return component.type && !component.type._isRadiumEnhanced;
	};
	
	var _resolveChildren = function _resolveChildren(_ref) {
	  var children = _ref.children;
	  var component = _ref.component;
	  var config = _ref.config;
	  var existingKeyMap = _ref.existingKeyMap;
	
	  if (!children) {
	    return children;
	  }
	
	  var childrenType = typeof children === 'undefined' ? 'undefined' : _typeof(children);
	
	  if (childrenType === 'string' || childrenType === 'number') {
	    // Don't do anything with a single primitive child
	    return children;
	  }
	
	  if (childrenType === 'function') {
	    // Wrap the function, resolving styles on the result
	    return function () {
	      var result = children.apply(this, arguments);
	      if (_react2.default.isValidElement(result)) {
	        return resolveStyles(component, result, config, existingKeyMap, true);
	      }
	      return result;
	    };
	  }
	
	  if (_react2.default.Children.count(children) === 1 && children.type) {
	    // If a React Element is an only child, don't wrap it in an array for
	    // React.Children.map() for React.Children.only() compatibility.
	    var onlyChild = _react2.default.Children.only(children);
	    return resolveStyles(component, onlyChild, config, existingKeyMap, true);
	  }
	
	  return _react2.default.Children.map(children, function (child) {
	    if (_react2.default.isValidElement(child)) {
	      return resolveStyles(component, child, config, existingKeyMap, true);
	    }
	
	    return child;
	  });
	};
	
	// Recurse over props, just like children
	var _resolveProps = function _resolveProps(_ref2) {
	  var component = _ref2.component;
	  var config = _ref2.config;
	  var existingKeyMap = _ref2.existingKeyMap;
	  var props = _ref2.props;
	
	  var newProps = props;
	
	  Object.keys(props).forEach(function (prop) {
	    // We already recurse over children above
	    if (prop === 'children') {
	      return;
	    }
	
	    var propValue = props[prop];
	    if (_react2.default.isValidElement(propValue)) {
	      newProps = _extends({}, newProps);
	      newProps[prop] = resolveStyles(component, propValue, config, existingKeyMap, true);
	    }
	  });
	
	  return newProps;
	};
	
	var _buildGetKey = function _buildGetKey(_ref3) {
	  var componentName = _ref3.componentName;
	  var existingKeyMap = _ref3.existingKeyMap;
	  var renderedElement = _ref3.renderedElement;
	
	  // We need a unique key to correlate state changes due to user interaction
	  // with the rendered element, so we know to apply the proper interactive
	  // styles.
	  var originalKey = typeof renderedElement.ref === 'string' ? renderedElement.ref : renderedElement.key;
	  var key = (0, _getStateKey2.default)(originalKey);
	
	  var alreadyGotKey = false;
	  var getKey = function getKey() {
	    if (alreadyGotKey) {
	      return key;
	    }
	
	    alreadyGotKey = true;
	
	    if (existingKeyMap[key]) {
	      var elementName = undefined;
	      if (typeof renderedElement.type === 'string') {
	        elementName = renderedElement.type;
	      } else if (renderedElement.type.constructor) {
	        elementName = renderedElement.type.constructor.displayName || renderedElement.type.constructor.name;
	      }
	
	      throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.') + ' ' + 'Component: "' + componentName + '". ' + (elementName ? 'Element: "' + elementName + '".' : ''));
	    }
	
	    existingKeyMap[key] = true;
	
	    return key;
	  };
	
	  return getKey;
	};
	
	var _setStyleState = function _setStyleState(component, key, stateKey, value) {
	  if (!component._radiumIsMounted) {
	    return;
	  }
	
	  var existing = component._lastRadiumState || component.state && component.state._radiumStyleState || {};
	
	  var state = { _radiumStyleState: _extends({}, existing) };
	  state._radiumStyleState[key] = _extends({}, state._radiumStyleState[key]);
	  state._radiumStyleState[key][stateKey] = value;
	
	  component._lastRadiumState = state._radiumStyleState;
	  component.setState(state);
	};
	
	var _runPlugins = function _runPlugins(_ref4) {
	  var component = _ref4.component;
	  var config = _ref4.config;
	  var existingKeyMap = _ref4.existingKeyMap;
	  var props = _ref4.props;
	  var renderedElement = _ref4.renderedElement;
	
	  // Don't run plugins if renderedElement is not a simple ReactDOMElement or has
	  // no style.
	  if (!_react2.default.isValidElement(renderedElement) || typeof renderedElement.type !== 'string' || !props.style) {
	    return props;
	  }
	
	  var newProps = props;
	
	  var plugins = config.plugins || DEFAULT_CONFIG.plugins;
	
	  var componentName = component.constructor.displayName || component.constructor.name;
	  var getKey = _buildGetKey({ renderedElement: renderedElement, existingKeyMap: existingKeyMap, componentName: componentName });
	  var getComponentField = function getComponentField(key) {
	    return component[key];
	  };
	  var getGlobalState = function getGlobalState(key) {
	    return globalState[key];
	  };
	  var componentGetState = function componentGetState(stateKey, elementKey) {
	    return (0, _getState2.default)(component.state, elementKey || getKey(), stateKey);
	  };
	  var setState = function setState(stateKey, value, elementKey) {
	    return _setStyleState(component, elementKey || getKey(), stateKey, value);
	  };
	
	  var addCSS = function addCSS(css) {
	    var styleKeeper = component._radiumStyleKeeper || component.context._radiumStyleKeeper;
	    if (!styleKeeper) {
	      throw new Error('To use plugins requiring `addCSS` (e.g. keyframes, media queries), ' + 'please wrap your application in the StyleRoot component. Component ' + 'name: `' + componentName + '`.');
	    }
	
	    return styleKeeper.addCSS(css);
	  };
	
	  var newStyle = props.style;
	
	  plugins.forEach(function (plugin) {
	    var result = plugin({
	      ExecutionEnvironment: _exenv2.default,
	      addCSS: addCSS,
	      componentName: componentName,
	      config: config,
	      cssRuleSetToString: _cssRuleSetToString2.default,
	      getComponentField: getComponentField,
	      getGlobalState: getGlobalState,
	      getState: componentGetState,
	      mergeStyles: _mergeStyles.mergeStyles,
	      props: newProps,
	      setState: setState,
	      isNestedStyle: _mergeStyles.isNestedStyle,
	      style: newStyle
	    }) || {};
	
	    newStyle = result.style || newStyle;
	
	    newProps = result.props && Object.keys(result.props).length ? _extends({}, newProps, result.props) : newProps;
	
	    var newComponentFields = result.componentFields || {};
	    Object.keys(newComponentFields).forEach(function (fieldName) {
	      component[fieldName] = newComponentFields[fieldName];
	    });
	
	    var newGlobalState = result.globalState || {};
	    Object.keys(newGlobalState).forEach(function (key) {
	      globalState[key] = newGlobalState[key];
	    });
	  });
	
	  if (newStyle !== props.style) {
	    newProps = _extends({}, newProps, { style: newStyle });
	  }
	
	  return newProps;
	};
	
	// Wrapper around React.cloneElement. To avoid processing the same element
	// twice, whenever we clone an element add a special prop to make sure we don't
	// process this element again.
	var _cloneElement = function _cloneElement(renderedElement, newProps, newChildren) {
	  // Only add flag if this is a normal DOM element
	  if (typeof renderedElement.type === 'string') {
	    newProps = _extends({}, newProps, { _radiumDidResolveStyles: true });
	  }
	
	  return _react2.default.cloneElement(renderedElement, newProps, newChildren);
	};
	
	//
	// The nucleus of Radium. resolveStyles is called on the rendered elements
	// before they are returned in render. It iterates over the elements and
	// children, rewriting props to add event handlers required to capture user
	// interactions (e.g. mouse over). It also replaces the style prop because it
	// adds in the various interaction styles (e.g. :hover).
	//
	resolveStyles = function (component, // ReactComponent, flow+eslint complaining
	renderedElement) {
	  var // ReactElement
	  config = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_CONFIG : arguments[2];
	  var existingKeyMap = arguments[3];
	  var shouldCheckBeforeResolve = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];
	  // ReactElement
	  existingKeyMap = existingKeyMap || {};
	  if (!renderedElement ||
	  // Bail if we've already processed this element. This ensures that only the
	  // owner of an element processes that element, since the owner's render
	  // function will be called first (which will always be the case, since you
	  // can't know what else to render until you render the parent component).
	  renderedElement.props && renderedElement.props._radiumDidResolveStyles ||
	
	  // Bail if this element is a radium enhanced element, because if it is,
	  // then it will take care of resolving its own styles.
	  shouldCheckBeforeResolve && !_shouldResolveStyles(renderedElement)) {
	    return renderedElement;
	  }
	
	  var newChildren = _resolveChildren({
	    children: renderedElement.props.children,
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap
	  });
	
	  var newProps = _resolveProps({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: renderedElement.props
	  });
	
	  newProps = _runPlugins({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: newProps,
	    renderedElement: renderedElement
	  });
	
	  // If nothing changed, don't bother cloning the element. Might be a bit
	  // wasteful, as we add the sentinal to stop double-processing when we clone.
	  // Assume benign double-processing is better than unneeded cloning.
	  if (newChildren === renderedElement.props.children && newProps === renderedElement.props) {
	    return renderedElement;
	  }
	
	  return _cloneElement(renderedElement, newProps !== renderedElement.props ? newProps : {}, newChildren);
	};
	
	// Only for use by tests
	resolveStyles.__clearStateForTests = function () {
	  globalState = {};
	};
	
	exports.default = resolveStyles;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(18);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __WEBPACK_IMPORTED_MODULE_1_radium__ && __WEBPACK_IMPORTED_MODULE_1_radium__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_radium__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_radium__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_radium___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_radium___default });
	/* eslint-disable new-cap */
	
	
	
	var Cell = function Cell(props) {
	  return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	    "div",
	    { style: props.style },
	    props.children
	  );
	};
	
	var horizontalPropType = /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOf(["left", "center", "right"]);
	var verticalPropType = /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOf(["top", "middle", "bottom"]);
	Cell.propTypes = {
	  width: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  horizontalAlign: horizontalPropType,
	  verticalAlign: verticalPropType,
	
	  smallWidth: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  smallHorizontalAlign: horizontalPropType,
	  smallVerticalAlign: verticalPropType,
	
	  mediumWidth: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  mediumHorizontalAlign: horizontalPropType,
	  mediumVerticalAlign: verticalPropType,
	
	  largeWidth: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  largeHorizontalAlign: horizontalPropType,
	  largeVerticalAlign: verticalPropType,
	
	  xlargeWidth: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  xlargeHorizontalAlign: horizontalPropType,
	  xlargeVerticalAlign: verticalPropType,
	
	  order: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number,
	
	  children: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node,
	  style: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object
	};
	
	/* harmony default export */ exports["default"] = /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_radium___default.a(Cell)

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(18);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __WEBPACK_IMPORTED_MODULE_1_radium__ && __WEBPACK_IMPORTED_MODULE_1_radium__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_radium__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_radium__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_radium___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_radium___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_resolve_cells__ = __webpack_require__(27);
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/* eslint-disable new-cap */
	
	
	
	
	var Grid = function Grid(props) {
	  var styles = _extends({}, props.style, {
	    display: "flex",
	    flexDirection: "row",
	    flexWrap: "wrap",
	    justifyContent: "space-between",
	    width: "100%"
	  });
	
	  return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	    "div",
	    { style: styles },
	    /* harmony import */ __WEBPACK_IMPORTED_MODULE_2__util_resolve_cells__["default"](props)
	  );
	};
	
	Grid.propTypes = {
	  cellWidth: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  cellAlign: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  cellVerticalAlign: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	
	  smallCellWidth: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  smallCellAlign: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  smallCellVerticalAlign: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	
	  mediumCellWidth: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  mediumCellAlign: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  mediumCellVerticalAlign: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	
	  largeCellWidth: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  largeCellAlign: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  largeCellVerticalAlign: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	
	  xlargeCellWidth: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  xlargeCellAlign: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	  xlargeCellVerticalAlign: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	
	  breakpoints: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
	    small: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	    medium: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	    large: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	    xlarge: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
	  }),
	
	  gutter: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
	
	  style: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
	  children: /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
	};
	
	Grid.defaultProps = {
	  cellWidth: "1/3",
	  cellAlign: "left",
	  cellVerticalAlign: "top",
	
	  breakpoints: {
	    small: "@media only screen and (max-width: 640px)",
	    medium: "@media only screen and (min-width: 641px) and (max-width: 1024px)",
	    large: "@media only screen and (min-width: 1025px) and (max-width: 1440px)",
	    xlarge: "@media only screen and (min-width: 1441px)"
	  },
	
	  gutter: "16px"
	};
	
	/* harmony default export */ exports["default"] = /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_radium___default.a(Grid)

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_merge__ = __webpack_require__(11);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default = __WEBPACK_IMPORTED_MODULE_0_lodash_merge__ && __WEBPACK_IMPORTED_MODULE_0_lodash_merge__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_lodash_merge__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_lodash_merge__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_lodash_merge___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default });
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	
	
	var resolveCellDefaults = function resolveCellDefaults(props) {
	  var gridDefault = {
	    width: props.cellWidth,
	    horizontalAlign: props.cellAlign,
	    verticalAlign: props.cellVerticalAlign,
	    gutter: props.gutter
	  };
	
	  var cellDefault = {
	    width: props.width,
	    horizontalAlign: props.align,
	    verticalAlign: props.verticalAlign,
	    order: props.order
	  };
	
	  var breakpoints = ["small", "medium", "large", "xlarge"].map(function (size) {
	    return {
	      mediaQuery: props.breakpoints[size],
	      gridBreakpointDefault: {
	        width: props[size + "CellWidth"],
	        horizontalAlign: props[size + "CellAlign"],
	        verticalAlign: props[size + "CellVerticalAlign"]
	      },
	      cellBreakpointDefault: {
	        width: props[size + "Width"],
	        horizontalAlign: props[size + "Align"],
	        verticalAlign: props[size + "VerticalAlign"]
	      }
	    };
	  });
	
	  return breakpoints.reduce(function (acc, breakpoint) {
	    // Extract the media query and the breakpoint cell configs
	    var mediaQuery = breakpoint.mediaQuery;
	    var gridBreakpointDefault = breakpoint.gridBreakpointDefault;
	    var cellBreakpointDefault = breakpoint.cellBreakpointDefault;
	
	    // Determine the final cell configuration.
	    // Uses these sources for cell styles, in order of precedence:
	    // - Grid default
	    // - Grid breakpoint default
	    // - Cell default
	    // - Cell breakpoint default
	
	    var cellConfig = /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default.a({}, gridDefault, gridBreakpointDefault, cellDefault, cellBreakpointDefault);
	
	    return _extends({}, acc, _defineProperty({}, mediaQuery, cellConfig));
	  }, {});
	};
	
	/* harmony default export */ exports["default"] = resolveCellDefaults

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles__ = __webpack_require__(21);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles___default = __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles__ && __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fraction_js__ = __webpack_require__(7);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fraction_js___default = __WEBPACK_IMPORTED_MODULE_1_fraction_js__ && __WEBPACK_IMPORTED_MODULE_1_fraction_js__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_fraction_js__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_fraction_js__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_fraction_js___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_fraction_js___default });
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/* eslint-disable no-magic-numbers */
	
	
	
	var parseUnit = function parseUnit(value) {
	  // http://stackoverflow.com/questions/2868947/split1px-into-1px-1-px-in-javascript
	  var matches = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
	
	  var _matches = _slicedToArray(matches, 3);
	
	  var number = _matches[1];
	  var unit = _matches[2];
	
	  return { number: number, unit: unit };
	};
	
	var resolveCellGutter = function resolveCellGutter(_ref) {
	  var gutter = _ref.gutter;
	  var columnCount = _ref.columnCount;
	
	  var _parseUnit = parseUnit(gutter);
	
	  var number = _parseUnit.number;
	  var unit = _parseUnit.unit;
	
	  return "" + (number - number / columnCount) + unit;
	};
	
	var resolveCellFlexBasis = function resolveCellFlexBasis(_ref2) {
	  var width = _ref2.width;
	  var gutter = _ref2.gutter;
	  var columnCount = _ref2.columnCount;
	
	  var MULTIPLIER = 100;
	
	  // Full-width cells have no gutter
	  if (width.d === 1) {
	    return "100%";
	  }
	
	  var finalGutter = resolveCellGutter({ gutter: gutter, columnCount: columnCount });
	
	  return "calc(" + width.valueOf() * MULTIPLIER + "% - " + finalGutter + ")";
	};
	
	// Merge Radium style arrays and leave
	// normal style objects untouched
	var resolvePropStyles = function resolvePropStyles(styles) {
	  if (styles && Array.isArray(styles)) {
	    return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles__["mergeStyles"](styles);
	  }
	  return styles ? styles : {};
	};
	
	var resolveCellStyles = function resolveCellStyles(props) {
	  // Translate grid-speak to flexbox-speak
	  var alignmentMap = {
	    left: "flex-start",
	    center: "center",
	    right: "flex-end",
	    top: "flex-start",
	    middle: "center",
	    bottom: "flex-end"
	  };
	
	  var mediaQueries = Object.keys(props).filter(function (key) {
	    return key.indexOf("@media") !== -1;
	  });
	
	  return mediaQueries.reduce(function (acc, mediaQuery) {
	    var breakpointStyles = props[mediaQuery];
	
	    return _extends({}, acc, _defineProperty({}, mediaQuery, {
	      display: "flex",
	      flexBasis: resolveCellFlexBasis({
	        width: new /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_fraction_js___default.a(breakpointStyles.width),
	        gutter: breakpointStyles.gutter,
	        columnCount: breakpointStyles.columnCount
	      }),
	      alignItems: alignmentMap[breakpointStyles.verticalAlign],
	      justifyContent: alignmentMap[breakpointStyles.horizontalAlign],
	      order: breakpointStyles.order ? breakpointStyles.order : "initial"
	    }));
	  }, _extends({}, resolvePropStyles(props.style)));
	};
	
	/* harmony default export */ exports["default"] = resolveCellStyles

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_omit__ = __webpack_require__(64);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_omit___default = __WEBPACK_IMPORTED_MODULE_1_lodash_omit__ && __WEBPACK_IMPORTED_MODULE_1_lodash_omit__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_lodash_omit__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_lodash_omit__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_lodash_omit___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_lodash_omit___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge__ = __webpack_require__(11);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default = __WEBPACK_IMPORTED_MODULE_2_lodash_merge__ && __WEBPACK_IMPORTED_MODULE_2_lodash_merge__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_lodash_merge__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_lodash_merge__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_lodash_merge___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolve_cell_defaults__ = __webpack_require__(25);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolve_column_counts__ = __webpack_require__(28);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resolve_cell_styles__ = __webpack_require__(26);
	
	
	
	
	
	
	
	var resolveCells = function resolveCells(props) {
	  // Resolve the final style defaults for each cell
	  var childProps = /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_lodash_omit___default.a(props, ["children", "style"]);
	  var childrenWithDefaults = /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(props.children, function (child) {
	    return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, /* harmony import */ __WEBPACK_IMPORTED_MODULE_3__resolve_cell_defaults__["default"](/* harmony import */ __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default.a({}, childProps, child.props)));
	  });
	
	  // Add column counts to each cell's props
	  var childrenWithColumnCounts = /* harmony import */ __WEBPACK_IMPORTED_MODULE_4__resolve_column_counts__["default"]({
	    children: childrenWithDefaults,
	    breakpoints: props.breakpoints
	  });
	
	  // Resolve the final cell styles
	  return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(childrenWithColumnCounts, function (child) {
	    return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default.a({}, {
	      style: /* harmony import */ __WEBPACK_IMPORTED_MODULE_5__resolve_cell_styles__["default"](child.props)
	    }));
	  });
	};
	
	/* harmony default export */ exports["default"] = resolveCells

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_initial__ = __webpack_require__(60);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_initial___default = __WEBPACK_IMPORTED_MODULE_1_lodash_initial__ && __WEBPACK_IMPORTED_MODULE_1_lodash_initial__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_lodash_initial__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_lodash_initial__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_lodash_initial___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_lodash_initial___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_last__ = __webpack_require__(63);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_last___default = __WEBPACK_IMPORTED_MODULE_2_lodash_last__ && __WEBPACK_IMPORTED_MODULE_2_lodash_last__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_lodash_last__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_lodash_last__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_lodash_last___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_lodash_last___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fraction_js__ = __webpack_require__(7);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fraction_js___default = __WEBPACK_IMPORTED_MODULE_3_fraction_js__ && __WEBPACK_IMPORTED_MODULE_3_fraction_js__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3_fraction_js__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3_fraction_js__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_3_fraction_js___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_3_fraction_js___default });
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/* eslint-disable new-cap */
	
	
	
	
	
	
	var resolveColumnCounts = function resolveColumnCounts(_ref) {
	  var children = _ref.children;
	  var breakpoints = _ref.breakpoints;
	
	  // Create an array of column counts that matches
	  // the indices of the cell array. This way, each
	  // cell knows about how many columns its parent
	  // row contains and therefore can calculate
	  // gutters correctly.
	
	  // The data pipeline looks like this:
	  // [[CellProps, CellProps], [CellProps, CellProps, CellProps]] ->
	  // [[2, 2], [3, 3, 3]] ->
	  // [2, 2, 3, 3, 3]
	
	  // The indices of the final array align with the
	  // indices of the child cell array.
	  var columnCounts = Object.keys(breakpoints).reduce(function (all, breakpoint) {
	    var mediaQuery = breakpoints[breakpoint];
	    return _extends({}, all, _defineProperty({}, mediaQuery, children.reduce(function (acc, cell) {
	      var breakpointCell = cell.props[mediaQuery];
	
	      // On the first fold, add a new subarray
	      // with the first cell props.
	      if (!acc.length) {
	        return [[breakpointCell]];
	      }
	
	      var rest = /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_lodash_initial___default.a(acc);
	      var row = /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_lodash_last___default.a(acc);
	
	      // If the sum of the current and previous
	      // cells is gte 1, leave the current
	      // subarray and start a new one with
	      // the current cell
	      var sum = row.map(function (column) {
	        return /* harmony import */ __WEBPACK_IMPORTED_MODULE_3_fraction_js___default.a(column.width);
	      }).reduce(function (previous, width) {
	        return previous.add(width);
	      }).valueOf();
	      if (sum >= 1) {
	        return [].concat(_toConsumableArray(acc), [[breakpointCell]]);
	      }
	
	      return [].concat(_toConsumableArray(rest), [[].concat(_toConsumableArray(row), [breakpointCell])]);
	    }, []).map(function (row) {
	      return row.map(function () {
	        return row.length;
	      });
	    }).reduce(function (acc, row) {
	      return acc.concat(row);
	    })));
	  }, {});
	
	  // Add the column counts to the cell props.
	  return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(children, function (cell, index) {
	    var propsWithColumnCounts = Object.keys(columnCounts).reduce(function (acc, breakpoint) {
	      var columnCount = columnCounts[breakpoint][index];
	      var cellProps = cell.props[breakpoint];
	      return _extends({}, acc, _defineProperty({}, breakpoint, _extends({}, cellProps, { columnCount: columnCount })));
	    }, {});
	    return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(cell, propsWithColumnCounts);
	  });
	};
	
	/* harmony default export */ exports["default"] = resolveColumnCounts

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_grid__ = __webpack_require__(24);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cell__ = __webpack_require__(23);
	
	
	
	var Grid = /* harmony import */ __WEBPACK_IMPORTED_MODULE_0__components_grid__["default"];/* harmony export */ Object.defineProperty(exports, "Grid", {configurable: false, enumerable: true, get: function() { return Grid; }});
	var Cell = /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__components_cell__["default"];/* harmony export */ Object.defineProperty(exports, "Cell", {configurable: false, enumerable: true, get: function() { return Cell; }});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Bowser - a browser detector
	  * https://github.com/ded/bowser
	  * MIT License | (c) Dustin Diaz 2015
	  */
	
	!function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	}('bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */
	
	  var t = true
	
	  function detect(ua) {
	
	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }
	
	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }
	
	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , chromeBook = /CrOS/.test(ua)
	      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , result
	
	    if (/opera|opr/i.test(ua)) {
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/windows phone/i.test(ua)) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeBook) {
	      result = {
	        name: 'Chrome'
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (/sailfish/i.test(ua)) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (/silk/i.test(ua)) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	      , version: versionIdentifier
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/(web|hpw)os/i.test(ua)) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (/tizen/i.test(ua)) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/safari/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      , version: versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }
	
	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      result.name = result.name || "Webkit"
	      result.webkit = t
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }
	
	    // set OS flags for platforms that have multiple browsers
	    if (!result.msedge && (android || result.silk)) {
	      result.android = t
	    } else if (iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    }
	
	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }
	
	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (tablet || iosdevice == 'ipad' || (android && (osMajorVersion == 3 || (osMajorVersion == 4 && !mobile))) || result.silk) {
	      result.tablet = t
	    } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || result.blackberry || result.webos || result.bada) {
	      result.mobile = t
	    }
	
	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
	        (result.chrome && result.version >= 20) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        ) {
	      result.c = t
	    } else result.x = t
	
	    return result
	  }
	
	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '')
	
	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }
	
	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;
	
	  return bowser
	});


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _pluginsCalc = __webpack_require__(35);
	
	var _pluginsCalc2 = _interopRequireDefault(_pluginsCalc);
	
	var _pluginsCursor = __webpack_require__(36);
	
	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);
	
	var _pluginsFlex = __webpack_require__(37);
	
	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);
	
	var _pluginsSizing = __webpack_require__(41);
	
	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);
	
	var _pluginsGradient = __webpack_require__(40);
	
	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);
	
	var _pluginsTransition = __webpack_require__(42);
	
	var _pluginsTransition2 = _interopRequireDefault(_pluginsTransition);
	
	// special flexbox specifications
	
	var _pluginsFlexboxIE = __webpack_require__(38);
	
	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);
	
	var _pluginsFlexboxOld = __webpack_require__(39);
	
	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);
	
	exports['default'] = [_pluginsCalc2['default'], _pluginsCursor2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsTransition2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default'],
	// this must be run AFTER the flexbox specs
	_pluginsFlex2['default']];
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _utilsGetBrowserInformation = __webpack_require__(45);
	
	var _utilsGetBrowserInformation2 = _interopRequireDefault(_utilsGetBrowserInformation);
	
	var _utilsGetPrefixedKeyframes = __webpack_require__(46);
	
	var _utilsGetPrefixedKeyframes2 = _interopRequireDefault(_utilsGetPrefixedKeyframes);
	
	var _utilsCapitalizeString = __webpack_require__(8);
	
	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);
	
	var _utilsAssign = __webpack_require__(43);
	
	var _utilsAssign2 = _interopRequireDefault(_utilsAssign);
	
	var _utilsWarn = __webpack_require__(47);
	
	var _utilsWarn2 = _interopRequireDefault(_utilsWarn);
	
	var _caniuseData = __webpack_require__(34);
	
	var _caniuseData2 = _interopRequireDefault(_caniuseData);
	
	var _Plugins = __webpack_require__(32);
	
	var _Plugins2 = _interopRequireDefault(_Plugins);
	
	var browserWhitelist = ['phantom'];
	
	var Prefixer = (function () {
	  /**
	   * Instantiante a new prefixer
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   * @param {string} keepUnprefixed - keeps unprefixed properties and values
	   */
	
	  function Prefixer() {
	    var _this = this;
	
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Prefixer);
	
	    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;
	
	    this._userAgent = options.userAgent || defaultUserAgent;
	    this._keepUnprefixed = options.keepUnprefixed || false;
	
	    this._browserInfo = (0, _utilsGetBrowserInformation2['default'])(this._userAgent);
	
	    // Checks if the userAgent was resolved correctly
	    if (this._browserInfo && this._browserInfo.prefix) {
	      // set additional prefix information
	      this.cssPrefix = this._browserInfo.prefix.css;
	      this.jsPrefix = this._browserInfo.prefix.inline;
	      this.prefixedKeyframes = (0, _utilsGetPrefixedKeyframes2['default'])(this._browserInfo);
	    } else {
	      this._hasPropsRequiringPrefix = false;
	      (0, _utilsWarn2['default'])('Either the global navigator was undefined or an invalid userAgent was provided.', 'Using a valid userAgent? Please let us know and create an issue at https://github.com/rofrischmann/inline-style-prefixer/issues');
	      return false;
	    }
	
	    var data = this._browserInfo.browser && _caniuseData2['default'][this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        return _extends({}, result, _defineProperty({}, name, true));
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      // check for whitelisted browsers
	      browserWhitelist.forEach(function (browser) {
	        if (_this._browserInfo[browser]) {
	          _this._isWhitelisted = true;
	        }
	      });
	      this._hasPropsRequiringPrefix = false;
	
	      // Do not throw a warning if whitelisted
	      if (this._isWhitelisted) {
	        return true;
	      }
	      (0, _utilsWarn2['default'])('Your userAgent seems to be not supported by inline-style-prefixer. Feel free to open an issue.');
	      return false;
	    }
	  }
	
	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */
	
	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;
	
	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }
	
	      styles = (0, _utilsAssign2['default'])({}, styles);
	
	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + (0, _utilsCapitalizeString2['default'])(property)] = value;
	            if (!_this2._keepUnprefixed) {
	              delete styles[property];
	            }
	          }
	
	          // resolve plugins
	          _Plugins2['default'].forEach(function (plugin) {
	            // generates a new plugin interface with current data
	            var resolvedStyles = plugin({
	              property: property,
	              value: value,
	              styles: styles,
	              browserInfo: _this2._browserInfo,
	              prefix: {
	                js: _this2.jsPrefix,
	                css: _this2.cssPrefix,
	                keyframes: _this2.prefixedKeyframes
	              },
	              keepUnprefixed: _this2._keepUnprefixed,
	              requiresPrefix: _this2._requiresPrefix,
	              forceRun: false
	            });
	            (0, _utilsAssign2['default'])(styles, resolvedStyles);
	          });
	        }
	      });
	
	      return styles;
	    }
	
	    /**
	     * Returns a prefixed version of the style object using all vendor prefixes
	     * @param {Object} styles - Style object that gets prefixed properties added
	     * @returns {Object} - Style object with prefixed properties and values
	     */
	  }], [{
	    key: 'prefixAll',
	    value: function prefixAll(styles) {
	      var prefixes = {};
	      var browserInfo = (0, _utilsGetBrowserInformation2['default'])('*');
	
	      browserInfo.browsers.forEach(function (browser) {
	        var data = _caniuseData2['default'][browser];
	        if (data) {
	          (0, _utilsAssign2['default'])(prefixes, data);
	        }
	      });
	
	      // there should always be at least one prefixed style, but just incase
	      if (!Object.keys(prefixes).length > 0) {
	        return styles;
	      }
	
	      styles = (0, _utilsAssign2['default'])({}, styles);
	
	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = Prefixer.prefixAll(value);
	        } else {
	          var browsers = Object.keys(browserInfo.prefixes);
	          browsers.forEach(function (browser) {
	            var style = browserInfo.prefixes[browser];
	            // add prefixes if needed
	            if (prefixes[property]) {
	              styles[style.inline + (0, _utilsCapitalizeString2['default'])(property)] = value;
	            }
	
	            // resolve plugins for each browser
	            _Plugins2['default'].forEach(function (plugin) {
	              var resolvedStyles = plugin({
	                property: property,
	                value: value,
	                styles: styles,
	                browserInfo: {
	                  name: browser,
	                  prefix: style,
	                  version: 0 // assume lowest
	                },
	                prefix: {},
	                keepUnprefixed: true,
	                requiresPrefix: prefixes,
	                forceRun: true
	              });
	              (0, _utilsAssign2['default'])(styles, resolvedStyles);
	            });
	          });
	        }
	      });
	
	      return styles;
	    }
	  }]);
	
	  return Prefixer;
	})();
	
	exports['default'] = Prefixer;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports) {

	var caniuseData = {"chrome":{"transform":35,"transformOrigin":35,"transformOriginX":35,"transformOriginY":35,"backfaceVisibility":35,"perspective":35,"perspectiveOrigin":35,"transformStyle":35,"transformOriginZ":35,"animation":42,"animationDelay":42,"animationDirection":42,"animationFillMode":42,"animationDuration":42,"animationIterationCount":42,"animationName":42,"animationPlayState":42,"animationTimingFunction":42,"appearance":50,"userSelect":50,"fontKerning":32,"textEmphasisPosition":50,"textEmphasis":50,"textEmphasisStyle":50,"textEmphasisColor":50,"boxDecorationBreak":50,"clipPath":50,"maskImage":50,"maskMode":50,"maskRepeat":50,"maskPosition":50,"maskClip":50,"maskOrigin":50,"maskSize":50,"maskComposite":50,"mask":50,"maskBorderSource":50,"maskBorderMode":50,"maskBorderSlice":50,"maskBorderWidth":50,"maskBorderOutset":50,"maskBorderRepeat":50,"maskBorder":50,"maskType":50,"textDecorationStyle":50,"textDecorationSkip":50,"textDecorationLine":50,"textDecorationColor":50,"filter":50,"fontFeatureSettings":47,"breakAfter":50,"breakBefore":50,"breakInside":50,"columnCount":50,"columnFill":50,"columnGap":50,"columnRule":50,"columnRuleColor":50,"columnRuleStyle":50,"columnRuleWidth":50,"columns":50,"columnSpan":50,"columnWidth":50},"safari":{"flex":8,"flexBasis":8,"flexDirection":8,"flexGrow":8,"flexFlow":8,"flexShrink":8,"flexWrap":8,"alignContent":8,"alignItems":8,"alignSelf":8,"justifyContent":8,"order":8,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"transform":8,"transformOrigin":8,"transformOriginX":8,"transformOriginY":8,"backfaceVisibility":8,"perspective":8,"perspectiveOrigin":8,"transformStyle":8,"transformOriginZ":8,"animation":8,"animationDelay":8,"animationDirection":8,"animationFillMode":8,"animationDuration":8,"animationIterationCount":8,"animationName":8,"animationPlayState":8,"animationTimingFunction":8,"appearance":9.1,"userSelect":9.1,"backdropFilter":9.1,"fontKerning":9.1,"scrollSnapType":9.1,"scrollSnapPointsX":9.1,"scrollSnapPointsY":9.1,"scrollSnapDestination":9.1,"scrollSnapCoordinate":9.1,"textEmphasisPosition":7,"textEmphasis":7,"textEmphasisStyle":7,"textEmphasisColor":7,"boxDecorationBreak":9.1,"clipPath":9.1,"maskImage":9.1,"maskMode":9.1,"maskRepeat":9.1,"maskPosition":9.1,"maskClip":9.1,"maskOrigin":9.1,"maskSize":9.1,"maskComposite":9.1,"mask":9.1,"maskBorderSource":9.1,"maskBorderMode":9.1,"maskBorderSlice":9.1,"maskBorderWidth":9.1,"maskBorderOutset":9.1,"maskBorderRepeat":9.1,"maskBorder":9.1,"maskType":9.1,"textDecorationStyle":9.1,"textDecorationSkip":9.1,"textDecorationLine":9.1,"textDecorationColor":9.1,"shapeImageThreshold":9.1,"shapeImageMargin":9.1,"shapeImageOutside":9.1,"filter":9,"hyphens":9.1,"flowInto":9.1,"flowFrom":9.1,"breakBefore":8,"breakAfter":8,"breakInside":8,"regionFragment":9.1,"columnCount":8,"columnFill":8,"columnGap":8,"columnRule":8,"columnRuleColor":8,"columnRuleStyle":8,"columnRuleWidth":8,"columns":8,"columnSpan":8,"columnWidth":8},"firefox":{"appearance":46,"userSelect":46,"boxSizing":28,"textAlignLast":46,"textDecorationStyle":35,"textDecorationSkip":35,"textDecorationLine":35,"textDecorationColor":35,"tabSize":46,"hyphens":42,"fontFeatureSettings":33,"breakAfter":46,"breakBefore":46,"breakInside":46,"columnCount":46,"columnFill":46,"columnGap":46,"columnRule":46,"columnRuleColor":46,"columnRuleStyle":46,"columnRuleWidth":46,"columns":46,"columnSpan":46,"columnWidth":46},"opera":{"flex":16,"flexBasis":16,"flexDirection":16,"flexGrow":16,"flexFlow":16,"flexShrink":16,"flexWrap":16,"alignContent":16,"alignItems":16,"alignSelf":16,"justifyContent":16,"order":16,"transform":22,"transformOrigin":22,"transformOriginX":22,"transformOriginY":22,"backfaceVisibility":22,"perspective":22,"perspectiveOrigin":22,"transformStyle":22,"transformOriginZ":22,"animation":29,"animationDelay":29,"animationDirection":29,"animationFillMode":29,"animationDuration":29,"animationIterationCount":29,"animationName":29,"animationPlayState":29,"animationTimingFunction":29,"appearance":36,"userSelect":36,"fontKerning":19,"textEmphasisPosition":36,"textEmphasis":36,"textEmphasisStyle":36,"textEmphasisColor":36,"boxDecorationBreak":36,"clipPath":36,"maskImage":36,"maskMode":36,"maskRepeat":36,"maskPosition":36,"maskClip":36,"maskOrigin":36,"maskSize":36,"maskComposite":36,"mask":36,"maskBorderSource":36,"maskBorderMode":36,"maskBorderSlice":36,"maskBorderWidth":36,"maskBorderOutset":36,"maskBorderRepeat":36,"maskBorder":36,"maskType":36,"filter":36,"fontFeatureSettings":36,"breakAfter":36,"breakBefore":36,"breakInside":36,"columnCount":36,"columnFill":36,"columnGap":36,"columnRule":36,"columnRuleColor":36,"columnRuleStyle":36,"columnRuleWidth":36,"columns":36,"columnSpan":36,"columnWidth":36},"ie":{"gridArea":11,"gridGap":11,"gridColumnStart":11,"userSelect":11,"grid":11,"breakInside":11,"hyphens":11,"gridTemplateAreas":11,"breakAfter":11,"scrollSnapCoordinate":11,"gridRowStart":11,"gridAutoFlow":11,"scrollSnapDestination":11,"gridTemplate":11,"gridTemplateColumns":11,"transformOrigin":9,"gridAutoRows":11,"gridColumnEnd":11,"transformOriginY":9,"scrollSnapPointsY":11,"breakBefore":11,"gridRowGap":11,"scrollSnapPointsX":11,"regionFragment":11,"flexWrap":10,"wrapFlow":11,"gridRowEnd":11,"flex":10,"flexDirection":10,"flowInto":11,"touchAction":10,"gridColumn":11,"transform":9,"gridTemplateRows":11,"flexFlow":10,"transformOriginX":9,"flowFrom":11,"scrollSnapType":11,"wrapMargin":11,"gridColumnGap":11,"gridRow":11,"wrapThrough":11,"gridAutoColumns":11,"textSizeAdjust":11},"edge":{"userSelect":14,"wrapFlow":14,"wrapThrough":14,"wrapMargin":14,"scrollSnapType":14,"scrollSnapPointsX":14,"scrollSnapPointsY":14,"scrollSnapDestination":14,"scrollSnapCoordinate":14,"hyphens":14,"flowInto":14,"flowFrom":14,"breakBefore":14,"breakAfter":14,"breakInside":14,"regionFragment":14,"gridTemplateColumns":14,"gridTemplateRows":14,"gridTemplateAreas":14,"gridTemplate":14,"gridAutoColumns":14,"gridAutoRows":14,"gridAutoFlow":14,"grid":14,"gridRowStart":14,"gridColumnStart":14,"gridRowEnd":14,"gridRow":14,"gridColumn":14,"gridColumnEnd":14,"gridColumnGap":14,"gridRowGap":14,"gridArea":14,"gridGap":14},"ios_saf":{"flex":8.1,"flexBasis":8.1,"flexDirection":8.1,"flexGrow":8.1,"flexFlow":8.1,"flexShrink":8.1,"flexWrap":8.1,"alignContent":8.1,"alignItems":8.1,"alignSelf":8.1,"justifyContent":8.1,"order":8.1,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"transform":8.1,"transformOrigin":8.1,"transformOriginX":8.1,"transformOriginY":8.1,"backfaceVisibility":8.1,"perspective":8.1,"perspectiveOrigin":8.1,"transformStyle":8.1,"transformOriginZ":8.1,"animation":8.1,"animationDelay":8.1,"animationDirection":8.1,"animationFillMode":8.1,"animationDuration":8.1,"animationIterationCount":8.1,"animationName":8.1,"animationPlayState":8.1,"animationTimingFunction":8.1,"appearance":9.3,"userSelect":9.3,"backdropFilter":9.3,"fontKerning":9.3,"scrollSnapType":9.3,"scrollSnapPointsX":9.3,"scrollSnapPointsY":9.3,"scrollSnapDestination":9.3,"scrollSnapCoordinate":9.3,"boxDecorationBreak":9.3,"clipPath":9.3,"maskImage":9.3,"maskMode":9.3,"maskRepeat":9.3,"maskPosition":9.3,"maskClip":9.3,"maskOrigin":9.3,"maskSize":9.3,"maskComposite":9.3,"mask":9.3,"maskBorderSource":9.3,"maskBorderMode":9.3,"maskBorderSlice":9.3,"maskBorderWidth":9.3,"maskBorderOutset":9.3,"maskBorderRepeat":9.3,"maskBorder":9.3,"maskType":9.3,"textSizeAdjust":9.3,"textDecorationStyle":9.3,"textDecorationSkip":9.3,"textDecorationLine":9.3,"textDecorationColor":9.3,"shapeImageThreshold":9.3,"shapeImageMargin":9.3,"shapeImageOutside":9.3,"filter":9,"hyphens":9.3,"flowInto":9.3,"flowFrom":9.3,"breakBefore":8.1,"breakAfter":8.1,"breakInside":8.1,"regionFragment":9.3,"columnCount":8.1,"columnFill":8.1,"columnGap":8.1,"columnRule":8.1,"columnRuleColor":8.1,"columnRuleStyle":8.1,"columnRuleWidth":8.1,"columns":8.1,"columnSpan":8.1,"columnWidth":8.1},"android":{"borderImage":4.2,"borderImageOutset":4.2,"borderImageRepeat":4.2,"borderImageSlice":4.2,"borderImageSource":4.2,"borderImageWidth":4.2,"flex":4.2,"flexBasis":4.2,"flexDirection":4.2,"flexGrow":4.2,"flexFlow":4.2,"flexShrink":4.2,"flexWrap":4.2,"alignContent":4.2,"alignItems":4.2,"alignSelf":4.2,"justifyContent":4.2,"order":4.2,"transition":4.2,"transitionDelay":4.2,"transitionDuration":4.2,"transitionProperty":4.2,"transitionTimingFunction":4.2,"transform":4.4,"transformOrigin":4.4,"transformOriginX":4.4,"transformOriginY":4.4,"backfaceVisibility":4.4,"perspective":4.4,"perspectiveOrigin":4.4,"transformStyle":4.4,"transformOriginZ":4.4,"animation":4.4,"animationDelay":4.4,"animationDirection":4.4,"animationFillMode":4.4,"animationDuration":4.4,"animationIterationCount":4.4,"animationName":4.4,"animationPlayState":4.4,"animationTimingFunction":4.4,"appearance":46,"userSelect":46,"fontKerning":4.4,"textEmphasisPosition":46,"textEmphasis":46,"textEmphasisStyle":46,"textEmphasisColor":46,"boxDecorationBreak":46,"clipPath":46,"maskImage":46,"maskMode":46,"maskRepeat":46,"maskPosition":46,"maskClip":46,"maskOrigin":46,"maskSize":46,"maskComposite":46,"mask":46,"maskBorderSource":46,"maskBorderMode":46,"maskBorderSlice":46,"maskBorderWidth":46,"maskBorderOutset":46,"maskBorderRepeat":46,"maskBorder":46,"maskType":46,"filter":46,"fontFeatureSettings":46,"breakAfter":46,"breakBefore":46,"breakInside":46,"columnCount":46,"columnFill":46,"columnGap":46,"columnRule":46,"columnRuleColor":46,"columnRuleStyle":46,"columnRuleWidth":46,"columns":46,"columnSpan":46,"columnWidth":46},"and_chr":{"appearance":47,"userSelect":47,"textEmphasisPosition":47,"textEmphasis":47,"textEmphasisStyle":47,"textEmphasisColor":47,"boxDecorationBreak":47,"clipPath":47,"maskImage":47,"maskMode":47,"maskRepeat":47,"maskPosition":47,"maskClip":47,"maskOrigin":47,"maskSize":47,"maskComposite":47,"mask":47,"maskBorderSource":47,"maskBorderMode":47,"maskBorderSlice":47,"maskBorderWidth":47,"maskBorderOutset":47,"maskBorderRepeat":47,"maskBorder":47,"maskType":47,"textDecorationStyle":47,"textDecorationSkip":47,"textDecorationLine":47,"textDecorationColor":47,"filter":47,"fontFeatureSettings":47,"breakAfter":47,"breakBefore":47,"breakInside":47,"columnCount":47,"columnFill":47,"columnGap":47,"columnRule":47,"columnRuleColor":47,"columnRuleStyle":47,"columnRuleWidth":47,"columns":47,"columnSpan":47,"columnWidth":47},"and_uc":{"flex":9.9,"flexBasis":9.9,"flexDirection":9.9,"flexGrow":9.9,"flexFlow":9.9,"flexShrink":9.9,"flexWrap":9.9,"alignContent":9.9,"alignItems":9.9,"alignSelf":9.9,"justifyContent":9.9,"order":9.9,"transition":9.9,"transitionDelay":9.9,"transitionDuration":9.9,"transitionProperty":9.9,"transitionTimingFunction":9.9,"transform":9.9,"transformOrigin":9.9,"transformOriginX":9.9,"transformOriginY":9.9,"backfaceVisibility":9.9,"perspective":9.9,"perspectiveOrigin":9.9,"transformStyle":9.9,"transformOriginZ":9.9,"animation":9.9,"animationDelay":9.9,"animationDirection":9.9,"animationFillMode":9.9,"animationDuration":9.9,"animationIterationCount":9.9,"animationName":9.9,"animationPlayState":9.9,"animationTimingFunction":9.9,"appearance":9.9,"userSelect":9.9,"fontKerning":9.9,"textEmphasisPosition":9.9,"textEmphasis":9.9,"textEmphasisStyle":9.9,"textEmphasisColor":9.9,"maskImage":9.9,"maskMode":9.9,"maskRepeat":9.9,"maskPosition":9.9,"maskClip":9.9,"maskOrigin":9.9,"maskSize":9.9,"maskComposite":9.9,"mask":9.9,"maskBorderSource":9.9,"maskBorderMode":9.9,"maskBorderSlice":9.9,"maskBorderWidth":9.9,"maskBorderOutset":9.9,"maskBorderRepeat":9.9,"maskBorder":9.9,"maskType":9.9,"textSizeAdjust":9.9,"filter":9.9,"hyphens":9.9,"flowInto":9.9,"flowFrom":9.9,"breakBefore":9.9,"breakAfter":9.9,"breakInside":9.9,"regionFragment":9.9,"fontFeatureSettings":9.9,"columnCount":9.9,"columnFill":9.9,"columnGap":9.9,"columnRule":9.9,"columnRuleColor":9.9,"columnRuleStyle":9.9,"columnRuleWidth":9.9,"columns":9.9,"columnSpan":9.9,"columnWidth":9.9},"op_mini":{"borderImage":5,"borderImageOutset":5,"borderImageRepeat":5,"borderImageSlice":5,"borderImageSource":5,"borderImageWidth":5,"tabSize":5,"objectFit":5,"objectPosition":5}}; module.exports = caniuseData

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function calc(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (forceRun || browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-', '-moz-'].map(function (prefix) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    }).join(';' + property + ':') :
	    // default
	    value.replace(/calc\(/g, prefix.css + 'calc(');
	    return _defineProperty({}, property, newValue + (keepUnprefixed ? ';' + property + ':' + value : ''));
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = cursor;
	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  grab: true,
	  grabbing: true
	};
	
	function cursor(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (property === 'cursor' && values[value] && (forceRun || browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-', '-moz-'].map(function (prefix) {
	      return prefix + value;
	    }).join(';' + property + ':') :
	    // default
	    prefix.css + value;
	    return {
	      cursor: newValue + (keepUnprefixed ? ';' + property + ':' + value : '')
	    };
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flex;
	var values = { flex: true, 'inline-flex': true };
	
	function flex(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (property === 'display' && values[value] && (forceRun || browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value].join(';' + property + ':') :
	    // default
	    '-webkit-' + value;
	    return {
	      display: newValue + (keepUnprefixed ? ';' + property + ':' + value : '')
	    };
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = flexboxIE;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: '-ms-flexbox',
	  'inline-flex': '-ms-inline-flexbox'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};
	
	var properties = Object.keys(alternativeProps).concat('display').reduce(function (result, prop) {
	  return _extends({}, result, _defineProperty({}, prop, true));
	}, {});
	
	function flexboxIE(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var styles = pluginInterface.styles;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (properties[property] && (forceRun || (browser === 'ie_mob' || browser === 'ie') && version == 10)) {
	    if (!keepUnprefixed) {
	      delete styles[property];
	    }
	
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	    if (alternativeValues[value]) {
	      return _defineProperty({}, property, alternativeValues[value] + (keepUnprefixed ? ';' + property + ':' + value : ''));
	    }
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = flexboxOld;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};
	
	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};
	
	var properties = Object.keys(alternativeProps).concat(['alignContent', 'alignSelf', 'display', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection']).reduce(function (result, prop) {
	  return _extends({}, result, _defineProperty({}, prop, true));
	}, {});
	
	function flexboxOld(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var styles = pluginInterface.styles;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (properties[property] && (forceRun || browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (!keepUnprefixed) {
	      delete styles[property];
	    }
	    if (property === 'flexDirection') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: prefix.css + alternativeValues[value] + (keepUnprefixed ? ';' + property + ':' + value : '')
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	    if (alternativeValues[value]) {
	      return _defineProperty({}, property, alternativeValues[value] + (keepUnprefixed ? ';' + property + ':' + value : ''));
	    }
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = gradient;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
	
	function gradient(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (typeof value === 'string' && value.match(values) !== null && (forceRun || browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-', '-moz-'].map(function (prefix) {
	      return prefix + value;
	    }).join(';' + property + ':') :
	    // default
	    prefix.css + value;
	    return _defineProperty({}, property, newValue + (keepUnprefixed ? ';' + property + ':' + value : ''));
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = sizing;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};
	
	function sizing(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  // This might change in the future
	  // Keep an eye on it
	  if (properties[property] && values[value]) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-', '-moz-'].map(function (prefix) {
	      return prefix + value;
	    }).join(';' + property + ':') :
	    // default
	    prefix.css + value;
	    return _defineProperty({}, property, newValue + (keepUnprefixed ? ';' + property + ':' + value : ''));
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _utilsCamelToDashCase = __webpack_require__(44);
	
	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);
	
	var _utilsCapitalizeString = __webpack_require__(8);
	
	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);
	
	function calc(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var requiresPrefix = pluginInterface.requiresPrefix;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (
	  // also check for already prefixed transitions
	  typeof value === 'string' && (property.toLowerCase().indexOf('transition') > -1 || property.toLowerCase().indexOf('transitionproperty') > -1)) {
	    var _ref;
	
	    var _ret = (function () {
	      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (property) {
	        return (0, _utilsCamelToDashCase2['default'])(property);
	      });
	      var newValue = value;
	
	      // only split multi values, not cubic beziers
	      var multipleValues = newValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
	
	      requiresPrefixDashCased.forEach(function (property) {
	        multipleValues.forEach(function (val, index) {
	          if (val.indexOf(property) > -1) {
	            var newVal = forceRun ?
	            // prefix all
	            ['-webkit-', '-moz-', '-ms-'].map(function (prefix) {
	              return val.replace(property, prefix + property);
	            }).join(',') :
	            // default
	            val.replace(property, prefix.css + property);
	            multipleValues[index] = newVal + (keepUnprefixed ? ',' + val : '');
	          }
	        });
	      });
	      var outputValue = multipleValues.join(',');
	      if (forceRun) {
	        return {
	          v: (_ref = {}, _defineProperty(_ref, 'Webkit' + (0, _utilsCapitalizeString2['default'])(property), outputValue), _defineProperty(_ref, 'Moz' + (0, _utilsCapitalizeString2['default'])(property), outputValue), _defineProperty(_ref, 'ms' + (0, _utilsCapitalizeString2['default'])(property), outputValue), _defineProperty(_ref, property, outputValue), _ref)
	        };
	      }
	      return {
	        v: _defineProperty({}, property, outputValue)
	      };
	    })();
	
	    if (typeof _ret === 'object') return _ret.v;
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	// leight polyfill for Object.assign
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  Object.keys(extend).forEach(function (key) {
	    return base[key] = extend[key];
	  });
	  return base;
	};
	
	module.exports = exports["default"];

/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Converts a camel-case string to a dash-case string
	 * @param {string} str - str that gets converted to dash-case
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (str) {
	  return str.replace(/([a-z]|^)([A-Z])/g, function (match, p1, p2) {
	    return p1 + '-' + p2.toLowerCase();
	  }).replace('ms-', '-ms-');
	};
	
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _bowser = __webpack_require__(30);
	
	var _bowser2 = _interopRequireDefault(_bowser);
	
	var vendorPrefixes = {
	  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen'],
	  Moz: ['firefox', 'seamonkey', 'sailfish'],
	  ms: ['msie', 'msedge']
	};
	
	var browsers = {
	  chrome: [['chrome']],
	  safari: [['safari']],
	  firefox: [['firefox']],
	  ie: [['msie']],
	  edge: [['msedge']],
	  opera: [['opera']],
	  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
	  ie_mob: [['windowsphone', 'mobile', 'msie'], ['windowsphone', 'tablet', 'msie'], ['windowsphone', 'mobile', 'msedge'], ['windowsphone', 'tablet', 'msedge']],
	  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
	  and_uc: [['android', 'mobile'], ['android', 'tablet']],
	  android: [['android', 'mobile'], ['android', 'tablet']]
	};
	
	/**
	 * Returns an object containing prefix data associated with a browser
	 * @param {string} browser - browser to find a prefix for
	 */
	var getPrefixes = function getPrefixes(browser) {
	  var prefixKeys = undefined;
	  var prefix = undefined;
	  var vendors = undefined;
	  var conditions = undefined;
	  var prefixVendor = undefined;
	  var browserVendors = undefined;
	
	  // Find the prefix for this browser (if any)
	  prefixKeys = Object.keys(vendorPrefixes);
	  for (var i = 0; i < prefixKeys.length; i++) {
	    prefix = prefixKeys[i];
	
	    // Find a matching vendor
	    vendors = vendorPrefixes[prefix];
	    conditions = browsers[browser];
	
	    for (var j = 0; j < vendors.length; j++) {
	      prefixVendor = vendors[j];
	
	      for (var k = 0; k < conditions.length; k++) {
	        browserVendors = conditions[k];
	
	        if (browserVendors.indexOf(prefixVendor) !== -1) {
	          return {
	            inline: prefix,
	            css: '-' + prefix.toLowerCase() + '-'
	          };
	        }
	      }
	    }
	  }
	
	  // No prefix found for this browser
	  return { inline: '', css: '' };
	};
	
	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */
	
	exports['default'] = function (userAgent) {
	  if (!userAgent) {
	    return false;
	  }
	
	  var info = {};
	
	  // Special user agent, return all supported prefixes
	  // instead of returning a string browser name and a prefix object
	  // we return an array of browser names and map of prefixes for each browser
	  if (userAgent === '*') {
	    // Return an array of supported browsers
	    info.browsers = Object.keys(browsers);
	
	    // Return prefixes associated by browser
	    info.prefixes = {};
	
	    // Iterate browser list, assign prefix to each
	    info.browsers.forEach(function (browser) {
	      info.prefixes[browser] = getPrefixes(browser);
	    });
	
	    return info;
	  }
	
	  // Normal user agent, detect browser
	  info = _bowser2['default']._detect(userAgent);
	
	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          css: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });
	
	  var name = '';
	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });
	
	  info.browser = name;
	  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
	  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);
	
	  // seperate native android chrome
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
	  if (info.browser === 'android' && info.chrome && info.version > 37) {
	    info.browser = 'and_chr';
	  }
	  info.version = parseFloat(info.version);
	  info.osversion = parseFloat(info.osversion);
	  // For android < 4.4 we want to check the osversion
	  // not the chrome version, see issue #26
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
	  if (info.browser === 'android' && info.osversion < 5) {
	    info.version = info.osversion;
	  }
	
	  return info;
	};
	
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (_ref) {
	  var browser = _ref.browser;
	  var version = _ref.version;
	  var prefix = _ref.prefix;
	
	  var prefixedKeyframes = 'keyframes';
	
	  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
	    prefixedKeyframes = prefix.css + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	};
	
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// only throw warnings if devmode is enabled
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function () {
	  if (process.env.NODE_ENV !== 'production') {
	    console.warn.apply(console, arguments);
	  }
	};
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(49);
	
	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}
	
	module.exports = function isPlainObject(o) {
	  var ctor,prot;
	  
	  if (isObjectObject(o) === false) return false;
	  
	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;
	  
	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;
	  
	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }
	  
	  // Most likely a plain Object
	  return true;
	};


/***/ },
/* 49 */
/***/ function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object'
	    && !Array.isArray(val);
	};


/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands or `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  return !!array.length && baseIndexOf(array, value, 0) > -1;
	}
	
	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = arrayIncludes;


/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * A specialized version of `_.includesWith` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arrayIncludesWith;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * A specialized version of `_.map` for arrays without support for callback
	 * shorthands or `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);
	
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index];
	    if (isArrayLikeObject(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null &&
	    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = baseFlatten;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 55 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = baseFor;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Checks if `value` is in `cache`.
	 *
	 * @private
	 * @param {Object} cache The set cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function cacheHas(cache, value) {
	  var map = cache.__data__;
	  if (isKeyable(value)) {
	    var data = map.__data__,
	        hash = typeof value == 'string' ? data.string : data.hash;
	
	    return hash[value] === HASH_UNDEFINED;
	  }
	  return map.has(value);
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return type == 'number' || type == 'boolean' ||
	    (type == 'string' && value !== '__proto__') || value == null;
	}
	
	module.exports = cacheHas;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var MapCache = __webpack_require__(9);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 *
	 * Creates a set cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.push(values[index]);
	  }
	}
	
	/**
	 * Adds `value` to the set cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var map = this.__data__;
	  if (isKeyable(value)) {
	    var data = map.__data__,
	        hash = typeof value == 'string' ? data.string : data.hash;
	
	    hash[value] = HASH_UNDEFINED;
	  }
	  else {
	    map.set(value, HASH_UNDEFINED);
	  }
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return type == 'number' || type == 'boolean' ||
	    (type == 'string' && value !== '__proto__') || value == null;
	}
	
	// Add functions to the `SetCache`.
	SetCache.prototype.push = cachePush;
	
	module.exports = SetCache;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var MapCache = __webpack_require__(9);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/** Used for built-in method references. */
	var arrayProto = global.Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function Stack(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = { 'array': [], 'map': null };
	}
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      array = data.array;
	
	  return array ? assocDelete(array, key) : data.map['delete'](key);
	}
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  var data = this.__data__,
	      array = data.array;
	
	  return array ? assocGet(array, key) : data.map.get(key);
	}
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  var data = this.__data__,
	      array = data.array;
	
	  return array ? assocHas(array, key) : data.map.has(key);
	}
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache object.
	 */
	function stackSet(key, value) {
	  var data = this.__data__,
	      array = data.array;
	
	  if (array) {
	    if (array.length < (LARGE_ARRAY_SIZE - 1)) {
	      assocSet(array, key, value);
	    } else {
	      data.array = null;
	      data.map = new MapCache(array);
	    }
	  }
	  var map = data.map;
	  if (map) {
	    map.set(key, value);
	  }
	  return this;
	}
	
	/**
	 * Removes `key` and its value from the associative array.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function assocDelete(array, key) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = array.length - 1;
	  if (index == lastIndex) {
	    array.pop();
	  } else {
	    splice.call(array, index, 1);
	  }
	  return true;
	}
	
	/**
	 * Gets the associative array value for `key`.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function assocGet(array, key) {
	  var index = assocIndexOf(array, key);
	  return index < 0 ? undefined : array[index][1];
	}
	
	/**
	 * Checks if an associative array value for `key` exists.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function assocHas(array, key) {
	  return assocIndexOf(array, key) > -1;
	}
	
	/**
	 * Gets the index at which the first occurrence of `key` is found in `array`
	 * of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	/**
	 * Sets the associative array `key` to `value`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function assocSet(array, key, value) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    array.push([key, value]);
	  } else {
	    array[index][1] = value;
	  }
	}
	
	/**
	 * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	// Add functions to the `Stack` cache.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseSlice = __webpack_require__(56);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `global`. */
	var freeParseInt = parseInt;
	
	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Creates a slice of `array` with `n` elements dropped from the end.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @param {number} [n=1] The number of elements to drop.
	 * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
	 * @returns {Array} Returns the slice of `array`.
	 * @example
	 *
	 * _.dropRight([1, 2, 3]);
	 * // => [1, 2]
	 *
	 * _.dropRight([1, 2, 3], 2);
	 * // => [1]
	 *
	 * _.dropRight([1, 2, 3], 5);
	 * // => []
	 *
	 * _.dropRight([1, 2, 3], 0);
	 * // => [1, 2, 3]
	 */
	function dropRight(array, n, guard) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return [];
	  }
	  n = (guard || n === undefined) ? 1 : toInteger(n);
	  n = length - n;
	  return baseSlice(array, 0, n < 0 ? 0 : n);
	}
	
	/**
	 * Gets all but the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {Array} Returns the slice of `array`.
	 * @example
	 *
	 * _.initial([1, 2, 3]);
	 * // => [1, 2]
	 */
	function initial(array) {
	  return dropRight(array, 1);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3');
	 * // => 3
	 */
	function toInteger(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  var remainder = value % 1;
	  return value === value ? (remainder ? value - remainder : value) : 0;
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = initial;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 61 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = global.Function.prototype.toString;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = objectProto;
	  if (typeof value.constructor == 'function') {
	    proto = getPrototypeOf(value);
	  }
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 62 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    stringTag = '[object String]';
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;
	
	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
	}
	
	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @type Function
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  return (isLength(length) && (isArray(object) || isString(object) || isArguments(object)))
	    ? baseTimes(length, String)
	    : null;
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null &&
	    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;
	
	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 63 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 4.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var SetCache = __webpack_require__(58),
	    arrayIncludes = __webpack_require__(51),
	    arrayIncludesWith = __webpack_require__(52),
	    arrayMap = __webpack_require__(53),
	    baseFlatten = __webpack_require__(54),
	    cacheHas = __webpack_require__(57),
	    keysIn = __webpack_require__(10),
	    rest = __webpack_require__(12);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array.length;
	
	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	/**
	 * The base implementation of `_.unary` without support for storing wrapper metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	/**
	 * The base implementation of methods like `_.difference` without support for
	 * excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;
	
	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;
	
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.pick` without support for individual
	 * property names.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property names to pick.
	 * @returns {Object} Returns the new object.
	 */
	function basePick(object, props) {
	  object = Object(object);
	  return arrayReduce(props, function(result, key) {
	    if (key in object) {
	      result[key] = object[key];
	    }
	    return result;
	  }, {});
	}
	
	/**
	 * The opposite of `_.pick`; this method creates an object composed of the
	 * own and inherited enumerable properties of `object` that are not omitted.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property names to omit, specified
	 *  individually or in arrays..
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.omit(object, ['a', 'c']);
	 * // => { 'b': '2' }
	 */
	var omit = rest(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  props = arrayMap(baseFlatten(props), String);
	  return basePick(object, baseDifference(keysIn(object), props));
	});
	
	module.exports = omit;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = appendImportantToEachValue;
	
	var _appendPxIfNeeded = __webpack_require__(13);
	
	var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);
	
	var _mapObject = __webpack_require__(20);
	
	var _mapObject2 = _interopRequireDefault(_mapObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function appendImportantToEachValue(style) {
	  return (0, _mapObject2.default)(style, function (result, key) {
	    return (0, _appendPxIfNeeded2.default)(key, style[key]) + ' !important';
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _camelCaseRegex = /([a-z])?([A-Z])/g;
	
	var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
	  return (p1 || '') + '-' + p2.toLowerCase();
	};
	
	var _camelCaseToDashCase = function _camelCaseToDashCase(s) {
	  return s.replace(_camelCaseRegex, _camelCaseReplacer);
	};
	
	var camelCasePropsToDashCase = function camelCasePropsToDashCase(prefixedStyle) {
	  // Since prefix is expected to work on inline style objects, we must
	  // translate the keys to dash case for rendering to CSS.
	  return Object.keys(prefixedStyle).reduce(function (result, key) {
	    var dashCaseKey = _camelCaseToDashCase(key);
	
	    // Fix IE vendor prefix
	    if (/^ms-/.test(dashCaseKey)) {
	      dashCaseKey = '-' + dashCaseKey;
	    }
	
	    result[dashCaseKey] = prefixedStyle[key];
	    return result;
	  }, {});
	};
	
	exports.default = camelCasePropsToDashCase;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _enhancer = __webpack_require__(14);
	
	var _enhancer2 = _interopRequireDefault(_enhancer);
	
	var _styleKeeper = __webpack_require__(6);
	
	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);
	
	var _styleSheet = __webpack_require__(68);
	
	var _styleSheet2 = _interopRequireDefault(_styleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _getStyleKeeper(instance) {
	  if (!instance._radiumStyleKeeper) {
	    var userAgent = instance.props.radiumConfig && instance.props.radiumConfig.userAgent || instance.context._radiumConfig && instance.context._radiumConfig.userAgent;
	    instance._radiumStyleKeeper = new _styleKeeper2.default(userAgent);
	  }
	
	  return instance._radiumStyleKeeper;
	}
	
	var StyleRoot = (function (_Component) {
	  _inherits(StyleRoot, _Component);
	
	  function StyleRoot() {
	    _classCallCheck(this, StyleRoot);
	
	    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));
	
	    _getStyleKeeper(_this);
	    return _this;
	  }
	
	  StyleRoot.prototype.getChildContext = function getChildContext() {
	    return { _radiumStyleKeeper: _getStyleKeeper(this) };
	  };
	
	  StyleRoot.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      this.props,
	      this.props.children,
	      _react2.default.createElement(_styleSheet2.default, null)
	    );
	  };
	
	  return StyleRoot;
	})(_react.Component);
	
	StyleRoot.contextTypes = {
	  _radiumConfig: _react.PropTypes.object,
	  _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	};
	
	StyleRoot.childContextTypes = {
	  _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	};
	
	StyleRoot = (0, _enhancer2.default)(StyleRoot);
	
	exports.default = StyleRoot;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _class, _temp;
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styleKeeper = __webpack_require__(6);
	
	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StyleSheet = (_temp = _class = (function (_Component) {
	  _inherits(StyleSheet, _Component);
	
	  function StyleSheet() {
	    _classCallCheck(this, StyleSheet);
	
	    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));
	
	    _this.state = _this._getCSSState();
	
	    _this._onChange = _this._onChange.bind(_this);
	    return _this;
	  }
	
	  StyleSheet.prototype.componentDidMount = function componentDidMount() {
	    this._isMounted = true;
	    this._subscription = this.context._radiumStyleKeeper.subscribe(this._onChange);
	    this._onChange();
	  };
	
	  StyleSheet.prototype.componentWillUnmount = function componentWillUnmount() {
	    this._isMounted = false;
	    if (this._subscription) {
	      this._subscription.remove();
	    }
	  };
	
	  StyleSheet.prototype._getCSSState = function _getCSSState() {
	    return { css: this.context._radiumStyleKeeper.getCSS() };
	  };
	
	  StyleSheet.prototype._onChange = function _onChange() {
	    var _this2 = this;
	
	    setTimeout(function () {
	      _this2._isMounted && _this2.setState(_this2._getCSSState());
	    }, 0);
	  };
	
	  StyleSheet.prototype.render = function render() {
	    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.state.css } });
	  };
	
	  return StyleSheet;
	})(_react.Component), _class.contextTypes = {
	  _radiumStyleKeeper: _react2.default.PropTypes.instanceOf(_styleKeeper2.default)
	}, _temp);
	exports.default = StyleSheet;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cssRuleSetToString = __webpack_require__(4);
	
	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Style = _react2.default.createClass({
	  displayName: 'Style',
	
	  propTypes: {
	    radiumConfig: _react.PropTypes.object,
	    rules: _react.PropTypes.object,
	    scopeSelector: _react.PropTypes.string
	  },
	
	  contextTypes: {
	    _radiumConfig: _react.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      scopeSelector: ''
	    };
	  },
	  _buildStyles: function _buildStyles(styles) {
	    var _this = this;
	
	    var userAgent = this.props.radiumConfig && this.props.radiumConfig.userAgent || this.context && this.context._radiumConfig && this.context._radiumConfig.userAgent;
	
	    return Object.keys(styles).reduce(function (accumulator, selector) {
	      var scopeSelector = _this.props.scopeSelector;
	
	      var rules = styles[selector];
	
	      if (selector === 'mediaQueries') {
	        accumulator += _this._buildMediaQueryString(rules);
	      } else {
	        var completeSelector = scopeSelector ? selector.split(',').map(function (part) {
	          return scopeSelector + ' ' + part.trim();
	        }).join(',') : selector;
	
	        accumulator += (0, _cssRuleSetToString2.default)(completeSelector, rules, userAgent);
	      }
	
	      return accumulator;
	    }, '');
	  },
	  _buildMediaQueryString: function _buildMediaQueryString(stylesByMediaQuery) {
	    var _this2 = this;
	
	    var contextMediaQueries = this._getContextMediaQueries();
	    var mediaQueryString = '';
	
	    Object.keys(stylesByMediaQuery).forEach(function (query) {
	      var completeQuery = contextMediaQueries[query] ? contextMediaQueries[query] : query;
	      mediaQueryString += '@media ' + completeQuery + '{' + _this2._buildStyles(stylesByMediaQuery[query]) + '}';
	    });
	
	    return mediaQueryString;
	  },
	  _getContextMediaQueries: function _getContextMediaQueries() {
	    var _this3 = this;
	
	    var contextMediaQueries = {};
	    if (this.context && this.context.mediaQueries) {
	      Object.keys(this.context.mediaQueries).forEach(function (query) {
	        contextMediaQueries[query] = _this3.context.mediaQueries[query].media;
	      });
	    }
	
	    return contextMediaQueries;
	  },
	  render: function render() {
	    if (!this.props.rules) {
	      return null;
	    }
	
	    var styles = this._buildStyles(this.props.rules);
	
	    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: styles } });
	  }
	});
	
	exports.default = Style;
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(0);
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var checkProps = function checkProps() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    // Warn if you use longhand and shorthand properties in the same style
	    // object.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties
	
	    var shorthandPropertyExpansions = {
	      'background': ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
	      'border': ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
	      'borderImage': ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
	      'borderRadius': ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
	      'font': ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
	      'listStyle': ['listStyleImage', 'listStylePosition', 'listStyleType'],
	      'margin': ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
	      'padding': ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
	      'transition': ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
	    };
	
	    checkProps = function (config) {
	      var componentName = config.componentName;
	      var style = config.style;
	
	      if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object' || !style) {
	        return;
	      }
	
	      var styleKeys = Object.keys(style);
	      styleKeys.forEach(function (styleKey) {
	        if (Array.isArray(shorthandPropertyExpansions[styleKey]) && shorthandPropertyExpansions[styleKey].some(function (sp) {
	          return styleKeys.indexOf(sp) !== -1;
	        })) {
	          if (process.env.NODE_ENV !== 'production') {
	            /* eslint-disable no-console */
	            console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + componentName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
	            /* eslint-enable no-console */
	          }
	        }
	      });
	
	      styleKeys.forEach(function (k) {
	        return checkProps(_extends({}, config, { style: style[k] }));
	      });
	      return;
	    };
	  })();
	}
	
	exports.default = checkProps;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyframesPlugin;
	
	var _index = __webpack_require__(0);
	
	var _keyframes = __webpack_require__(19);
	
	function keyframesPlugin(_ref // eslint-disable-line no-shadow
	) {
	  var addCSS = _ref.addCSS;
	  var config = _ref.config;
	  var style = _ref.style;
	
	  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
	    var value = style[key];
	    if (key === 'animationName' && value && value.__radiumKeyframes) {
	      var keyframesValue = value;
	
	      var _keyframesValue$__pro = keyframesValue.__process(config.userAgent);
	
	      var animationName = _keyframesValue$__pro.animationName;
	      var css = _keyframesValue$__pro.css;
	
	      addCSS(css);
	      value = animationName;
	    }
	
	    newStyleInProgress[key] = value;
	    return newStyleInProgress;
	  }, {});
	  return { style: newStyle };
	}
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(0);
	
	// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
	// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
	var mergeStyleArrayPlugin = function mergeStyleArrayPlugin(_ref) {
	  var style = _ref.style;
	  var mergeStyles = _ref.mergeStyles;
	  // eslint-disable-line no-shadow
	  var newStyle = Array.isArray(style) ? mergeStyles(style) : style;
	  return { style: newStyle };
	};
	
	exports.default = mergeStyleArrayPlugin;
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _callbacks = [];
	var _mouseUpListenerIsActive = false;
	
	function _handleMouseUp() {
	  _callbacks.forEach(function (callback) {
	    callback();
	  });
	}
	
	var subscribe = function subscribe(callback) {
	  if (_callbacks.indexOf(callback) === -1) {
	    _callbacks.push(callback);
	  }
	
	  if (!_mouseUpListenerIsActive) {
	    window.addEventListener('mouseup', _handleMouseUp);
	    _mouseUpListenerIsActive = true;
	  }
	
	  return {
	    remove: function remove() {
	      var index = _callbacks.indexOf(callback);
	      _callbacks.splice(index, 1);
	
	      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
	        window.removeEventListener('mouseup', _handleMouseUp);
	        _mouseUpListenerIsActive = false;
	      }
	    }
	  };
	};
	
	exports.default = {
	  subscribe: subscribe,
	  __triggerForTests: _handleMouseUp
	};
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixPlugin;
	
	var _index = __webpack_require__(0);
	
	var _prefixer = __webpack_require__(5);
	
	function prefixPlugin(_ref // eslint-disable-line no-shadow
	) {
	  var config = _ref.config;
	  var style = _ref.style;
	
	  var newStyle = (0, _prefixer.getPrefixedStyle)(style, config.userAgent);
	  return { style: newStyle };
	}
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(0);
	
	var _mouseUpListener = __webpack_require__(73);
	
	var _mouseUpListener2 = _interopRequireDefault(_mouseUpListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _isInteractiveStyleField = function _isInteractiveStyleField(styleFieldName) {
	  return styleFieldName === ':hover' || styleFieldName === ':active' || styleFieldName === ':focus';
	};
	
	var resolveInteractionStyles = function resolveInteractionStyles(config) {
	  var ExecutionEnvironment = config.ExecutionEnvironment;
	  var getComponentField = config.getComponentField;
	  var getState = config.getState;
	  var mergeStyles = config.mergeStyles;
	  var props = config.props;
	  var setState = config.setState;
	  var style = config.style;
	
	  var newComponentFields = {};
	  var newProps = {};
	
	  // Only add handlers if necessary
	  if (style[':hover']) {
	    (function () {
	      // Always call the existing handler if one is already defined.
	      // This code, and the very similar ones below, could be abstracted a bit
	      // more, but it hurts readability IMO.
	      var existingOnMouseEnter = props.onMouseEnter;
	      newProps.onMouseEnter = function (e) {
	        existingOnMouseEnter && existingOnMouseEnter(e);
	        setState(':hover', true);
	      };
	
	      var existingOnMouseLeave = props.onMouseLeave;
	      newProps.onMouseLeave = function (e) {
	        existingOnMouseLeave && existingOnMouseLeave(e);
	        setState(':hover', false);
	      };
	    })();
	  }
	
	  if (style[':active']) {
	    (function () {
	      var existingOnMouseDown = props.onMouseDown;
	      newProps.onMouseDown = function (e) {
	        existingOnMouseDown && existingOnMouseDown(e);
	        newComponentFields._lastMouseDown = Date.now();
	        setState(':active', 'viamousedown');
	      };
	
	      var existingOnKeyDown = props.onKeyDown;
	      newProps.onKeyDown = function (e) {
	        existingOnKeyDown && existingOnKeyDown(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', 'viakeydown');
	        }
	      };
	
	      var existingOnKeyUp = props.onKeyUp;
	      newProps.onKeyUp = function (e) {
	        existingOnKeyUp && existingOnKeyUp(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', false);
	        }
	      };
	    })();
	  }
	
	  if (style[':focus']) {
	    (function () {
	      var existingOnFocus = props.onFocus;
	      newProps.onFocus = function (e) {
	        existingOnFocus && existingOnFocus(e);
	        setState(':focus', true);
	      };
	
	      var existingOnBlur = props.onBlur;
	      newProps.onBlur = function (e) {
	        existingOnBlur && existingOnBlur(e);
	        setState(':focus', false);
	      };
	    })();
	  }
	
	  if (style[':active'] && !getComponentField('_radiumMouseUpListener') && ExecutionEnvironment.canUseEventListeners) {
	    newComponentFields._radiumMouseUpListener = _mouseUpListener2.default.subscribe(function () {
	      Object.keys(getComponentField('state')._radiumStyleState).forEach(function (key) {
	        if (getState(':active', key) === 'viamousedown') {
	          setState(':active', false, key);
	        }
	      });
	    });
	  }
	
	  // Merge the styles in the order they were defined
	  var interactionStyles = Object.keys(style).filter(function (name) {
	    return _isInteractiveStyleField(name) && getState(name);
	  }).map(function (name) {
	    return style[name];
	  });
	
	  var newStyle = mergeStyles([style].concat(interactionStyles));
	
	  // Remove interactive styles
	  newStyle = Object.keys(newStyle).reduce(function (styleWithoutInteractions, name) {
	    if (!_isInteractiveStyleField(name)) {
	      styleWithoutInteractions[name] = newStyle[name];
	    }
	    return styleWithoutInteractions;
	  }, {});
	
	  return {
	    componentFields: newComponentFields,
	    props: newProps,
	    style: newStyle
	  };
	};
	
	exports.default = resolveInteractionStyles;
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = resolveMediaQueries;
	
	var _config = __webpack_require__(3);
	
	var _index = __webpack_require__(0);
	
	var _appendImportantToEachValue = __webpack_require__(65);
	
	var _appendImportantToEachValue2 = _interopRequireDefault(_appendImportantToEachValue);
	
	var _hash = __webpack_require__(17);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _windowMatchMedia = undefined;
	function _getWindowMatchMedia(ExecutionEnvironment) {
	  if (_windowMatchMedia === undefined) {
	    _windowMatchMedia = !!ExecutionEnvironment.canUseDOM && !!window && !!window.matchMedia && function (mediaQueryString) {
	      return window.matchMedia(mediaQueryString);
	    } || null;
	  }
	  return _windowMatchMedia;
	}
	
	function _filterObject(obj, predicate) {
	  return Object.keys(obj).filter(function (key) {
	    return predicate(obj[key], key);
	  }).reduce(function (result, key) {
	    result[key] = obj[key];
	    return result;
	  }, {});
	}
	
	function _removeMediaQueries(style) {
	  return Object.keys(style).reduce(function (styleWithoutMedia, key) {
	    if (key.indexOf('@media') !== 0) {
	      styleWithoutMedia[key] = style[key];
	    }
	    return styleWithoutMedia;
	  }, {});
	}
	
	function _topLevelRulesToCSS(_ref) {
	  var addCSS = _ref.addCSS;
	  var cssRuleSetToString = _ref.cssRuleSetToString;
	  var isNestedStyle = _ref.isNestedStyle;
	  var style = _ref.style;
	  var userAgent = _ref.userAgent;
	
	  var className = '';
	  Object.keys(style).filter(function (name) {
	    return name.indexOf('@media') === 0;
	  }).map(function (query) {
	    var topLevelRules = (0, _appendImportantToEachValue2.default)(_filterObject(style[query], function (value) {
	      return !isNestedStyle(value);
	    }));
	
	    if (!Object.keys(topLevelRules).length) {
	      return;
	    }
	
	    var ruleCSS = cssRuleSetToString('', topLevelRules, userAgent);
	
	    // CSS classes cannot start with a number
	    var mediaQueryClassName = 'rmq-' + (0, _hash2.default)(query + ruleCSS);
	    var css = query + '{ .' + mediaQueryClassName + ruleCSS + '}';
	
	    addCSS(css);
	
	    className += ' ' + mediaQueryClassName;
	  });
	  return className;
	}
	
	function _subscribeToMediaQuery(_ref2) {
	  var listener = _ref2.listener;
	  var listenersByQuery = _ref2.listenersByQuery;
	  var matchMedia = _ref2.matchMedia;
	  var mediaQueryListsByQuery = _ref2.mediaQueryListsByQuery;
	  var query = _ref2.query;
	
	  query = query.replace('@media ', '');
	
	  var mql = mediaQueryListsByQuery[query];
	  if (!mql && matchMedia) {
	    mediaQueryListsByQuery[query] = mql = matchMedia(query);
	  }
	
	  if (!listenersByQuery || !listenersByQuery[query]) {
	    mql.addListener(listener);
	
	    listenersByQuery[query] = {
	      remove: function remove() {
	        mql.removeListener(listener);
	      }
	    };
	  }
	  return mql;
	}
	
	function resolveMediaQueries(_ref3) {
	  var ExecutionEnvironment = _ref3.ExecutionEnvironment;
	  var addCSS = _ref3.addCSS;
	  var config = _ref3.config;
	  var cssRuleSetToString = _ref3.cssRuleSetToString;
	  var getComponentField = _ref3.getComponentField;
	  var getGlobalState = _ref3.getGlobalState;
	  var isNestedStyle = _ref3.isNestedStyle;
	  var mergeStyles = _ref3.mergeStyles;
	  var props = _ref3.props;
	  var setState = _ref3.setState;
	  var style = _ref3.style;
	  // eslint-disable-line no-shadow
	  var newStyle = _removeMediaQueries(style);
	  var mediaQueryClassNames = _topLevelRulesToCSS({
	    addCSS: addCSS,
	    cssRuleSetToString: cssRuleSetToString,
	    isNestedStyle: isNestedStyle,
	    style: style,
	    userAgent: config.userAgent
	  });
	
	  var newProps = {
	    className: mediaQueryClassNames + ' ' + (props.className || '')
	  };
	
	  var matchMedia = config.matchMedia || _getWindowMatchMedia(ExecutionEnvironment);
	
	  if (!matchMedia) {
	    return {
	      props: newProps,
	      style: newStyle
	    };
	  }
	
	  var listenersByQuery = _extends({}, getComponentField('_radiumMediaQueryListenersByQuery'));
	  var mediaQueryListsByQuery = getGlobalState('mediaQueryListsByQuery') || {};
	
	  Object.keys(style).filter(function (name) {
	    return name.indexOf('@media') === 0;
	  }).map(function (query) {
	    var nestedRules = _filterObject(style[query], isNestedStyle);
	
	    if (!Object.keys(nestedRules).length) {
	      return;
	    }
	
	    var mql = _subscribeToMediaQuery({
	      listener: function listener() {
	        return setState(query, mql.matches, '_all');
	      },
	      listenersByQuery: listenersByQuery,
	      matchMedia: matchMedia,
	      mediaQueryListsByQuery: mediaQueryListsByQuery,
	      query: query
	    });
	
	    // Apply media query states
	    if (mql.matches) {
	      newStyle = mergeStyles([newStyle, nestedRules]);
	    }
	  });
	
	  return {
	    componentFields: {
	      _radiumMediaQueryListenersByQuery: listenersByQuery
	    },
	    globalState: { mediaQueryListsByQuery: mediaQueryListsByQuery },
	    props: newProps,
	    style: newStyle
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjNTYzM2RjMmMwZWYyYjA0NTA2ZCIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvcGx1Z2lucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvY29uZmlnLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9jc3MtcnVsZS1zZXQtdG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvc3R5bGUta2VlcGVyLmpzIiwid2VicGFjazovLy8uL34vZnJhY3Rpb24uanMvZnJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2guX21hcGNhY2hlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLmtleXNpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC5tZXJnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC5yZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9hcHBlbmQtcHgtaWYtbmVlZGVkLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9lbmhhbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvZ2V0LXN0YXRlLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvZ2V0LXN0YXRlLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9oYXNoLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIva2V5ZnJhbWVzLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9tYXAtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9tZXJnZS1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWRpdW0vbGliL3Jlc29sdmUtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlsL3Jlc29sdmUtY2VsbC1kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlsL3Jlc29sdmUtY2VsbC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXRpbC9yZXNvbHZlLWNlbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWwvcmVzb2x2ZS1jb2x1bW4tY291bnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jvd3Nlci9ib3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leGVudi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvUGx1Z2lucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvUHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL2Nhbml1c2VEYXRhLmpzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2NhbGMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2ZsZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvZmxleGJveElFLmpzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2ZsZXhib3hPbGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvZ3JhZGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvc2l6aW5nLmpzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvY2FtZWxUb0Rhc2hDYXNlLmpzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9nZXRCcm93c2VySW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2dldFByZWZpeGVkS2V5ZnJhbWVzLmpzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy93YXJuLmpzIiwid2VicGFjazovLy8uL34vaXMtcGxhaW4tb2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtcGxhaW4tb2JqZWN0L34vaXNvYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2guX2FycmF5ZWFjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC5fYXJyYXlpbmNsdWRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC5fYXJyYXlpbmNsdWRlc3dpdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2guX2FycmF5bWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLl9iYXNlZmxhdHRlbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC5fYmFzZWZvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC5fYmFzZXNsaWNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLl9jYWNoZWhhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC5fc2V0Y2FjaGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2guX3N0YWNrL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLmluaXRpYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2guaXNwbGFpbm9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC5rZXlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLmxhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gub21pdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvYXBwZW5kLWltcG9ydGFudC10by1lYWNoLXZhbHVlLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9jYW1lbC1jYXNlLXByb3BzLXRvLWRhc2gtY2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvY29tcG9uZW50cy9zdHlsZS1yb290LmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9jb21wb25lbnRzL3N0eWxlLXNoZWV0LmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9jb21wb25lbnRzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9wbHVnaW5zL2NoZWNrLXByb3BzLXBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvcGx1Z2lucy9rZXlmcmFtZXMtcGx1Z2luLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9wbHVnaW5zL21lcmdlLXN0eWxlLWFycmF5LXBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvcGx1Z2lucy9tb3VzZS11cC1saXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvcGx1Z2lucy9wcmVmaXgtcGx1Z2luLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9wbHVnaW5zL3Jlc29sdmUtaW50ZXJhY3Rpb24tc3R5bGVzLXBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvcGx1Z2lucy9yZXNvbHZlLW1lZGlhLXF1ZXJpZXMtcGx1Z2luLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrREFBMEMsV0FBVzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4Q0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXND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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsRUFBRTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRkFBa0Y7QUFDbEYsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN4UEE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvQkFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLDhCQUE2QixrQkFBa0IsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLG1CQUFrQixpREFBaUQ7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7O0FDckxBLDhCQUE2QixtREFBbUQ7Ozs7Ozs7QUNBaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmFkaXVtLWdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSYWRpdW1HcmlkXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJhZGl1bUdyaWRcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IHRocm93IGVycjsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI5KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGM1NjMzZGMyYzBlZjJiMDQ1MDZkXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xuXG52YXIgX2NoZWNrUHJvcHNQbHVnaW4gPSByZXF1aXJlKCcuL2NoZWNrLXByb3BzLXBsdWdpbicpO1xuXG52YXIgX2NoZWNrUHJvcHNQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tQcm9wc1BsdWdpbik7XG5cbnZhciBfa2V5ZnJhbWVzUGx1Z2luID0gcmVxdWlyZSgnLi9rZXlmcmFtZXMtcGx1Z2luJyk7XG5cbnZhciBfa2V5ZnJhbWVzUGx1Z2luMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleWZyYW1lc1BsdWdpbik7XG5cbnZhciBfbWVyZ2VTdHlsZUFycmF5UGx1Z2luID0gcmVxdWlyZSgnLi9tZXJnZS1zdHlsZS1hcnJheS1wbHVnaW4nKTtcblxudmFyIF9tZXJnZVN0eWxlQXJyYXlQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2VTdHlsZUFycmF5UGx1Z2luKTtcblxudmFyIF9wcmVmaXhQbHVnaW4gPSByZXF1aXJlKCcuL3ByZWZpeC1wbHVnaW4nKTtcblxudmFyIF9wcmVmaXhQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4UGx1Z2luKTtcblxudmFyIF9yZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXNQbHVnaW4gPSByZXF1aXJlKCcuL3Jlc29sdmUtaW50ZXJhY3Rpb24tc3R5bGVzLXBsdWdpbicpO1xuXG52YXIgX3Jlc29sdmVJbnRlcmFjdGlvblN0eWxlc1BsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXNQbHVnaW4pO1xuXG52YXIgX3Jlc29sdmVNZWRpYVF1ZXJpZXNQbHVnaW4gPSByZXF1aXJlKCcuL3Jlc29sdmUtbWVkaWEtcXVlcmllcy1wbHVnaW4nKTtcblxudmFyIF9yZXNvbHZlTWVkaWFRdWVyaWVzUGx1Z2luMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc29sdmVNZWRpYVF1ZXJpZXNQbHVnaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGNoZWNrUHJvcHM6IF9jaGVja1Byb3BzUGx1Z2luMi5kZWZhdWx0LFxuICBrZXlmcmFtZXM6IF9rZXlmcmFtZXNQbHVnaW4yLmRlZmF1bHQsXG4gIG1lcmdlU3R5bGVBcnJheTogX21lcmdlU3R5bGVBcnJheVBsdWdpbjIuZGVmYXVsdCxcbiAgcHJlZml4OiBfcHJlZml4UGx1Z2luMi5kZWZhdWx0LFxuICByZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXM6IF9yZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXNQbHVnaW4yLmRlZmF1bHQsXG4gIHJlc29sdmVNZWRpYVF1ZXJpZXM6IF9yZXNvbHZlTWVkaWFRdWVyaWVzUGx1Z2luMi5kZWZhdWx0XG59O1xuLyogZXNsaW50LWRpc2FibGUgYmxvY2stc2NvcGVkLWNvbnN0ICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvcGx1Z2lucy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcGx1Z2lucyA9IHJlcXVpcmUoJy4vcGx1Z2lucycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvY29uZmlnLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3NzUnVsZVNldFRvU3RyaW5nO1xuXG52YXIgX2FwcGVuZFB4SWZOZWVkZWQgPSByZXF1aXJlKCcuL2FwcGVuZC1weC1pZi1uZWVkZWQnKTtcblxudmFyIF9hcHBlbmRQeElmTmVlZGVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FwcGVuZFB4SWZOZWVkZWQpO1xuXG52YXIgX2NhbWVsQ2FzZVByb3BzVG9EYXNoQ2FzZSA9IHJlcXVpcmUoJy4vY2FtZWwtY2FzZS1wcm9wcy10by1kYXNoLWNhc2UnKTtcblxudmFyIF9jYW1lbENhc2VQcm9wc1RvRGFzaENhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FtZWxDYXNlUHJvcHNUb0Rhc2hDYXNlKTtcblxudmFyIF9tYXBPYmplY3QgPSByZXF1aXJlKCcuL21hcC1vYmplY3QnKTtcblxudmFyIF9tYXBPYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwT2JqZWN0KTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY3JlYXRlTWFya3VwRm9yU3R5bGVzKHN0eWxlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZSkubWFwKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiBwcm9wZXJ0eSArICc6ICcgKyBzdHlsZVtwcm9wZXJ0eV0gKyAnOyc7XG4gIH0pLmpvaW4oJ1xcbicpO1xufVxuXG5mdW5jdGlvbiBjc3NSdWxlU2V0VG9TdHJpbmcoc2VsZWN0b3IsIHJ1bGVzLCB1c2VyQWdlbnQpIHtcbiAgaWYgKCFydWxlcykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHZhciBydWxlc1dpdGhQeCA9ICgwLCBfbWFwT2JqZWN0Mi5kZWZhdWx0KShydWxlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICByZXR1cm4gKDAsIF9hcHBlbmRQeElmTmVlZGVkMi5kZWZhdWx0KShrZXksIHZhbHVlKTtcbiAgfSk7XG4gIHZhciBwcmVmaXhlZFJ1bGVzID0gKDAsIF9wcmVmaXhlci5nZXRQcmVmaXhlZFN0eWxlKShydWxlc1dpdGhQeCwgdXNlckFnZW50KTtcbiAgdmFyIGNzc1ByZWZpeGVkUnVsZXMgPSAoMCwgX2NhbWVsQ2FzZVByb3BzVG9EYXNoQ2FzZTIuZGVmYXVsdCkocHJlZml4ZWRSdWxlcyk7XG4gIHZhciBzZXJpYWxpemVkUnVsZXMgPSBjcmVhdGVNYXJrdXBGb3JTdHlsZXMoY3NzUHJlZml4ZWRSdWxlcyk7XG5cbiAgcmV0dXJuIHNlbGVjdG9yICsgJ3snICsgc2VyaWFsaXplZFJ1bGVzICsgJ30nO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9jc3MtcnVsZS1zZXQtdG8tc3RyaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRQcmVmaXhlZEtleWZyYW1lcyA9IGdldFByZWZpeGVkS2V5ZnJhbWVzO1xuZXhwb3J0cy5nZXRQcmVmaXhlZFN0eWxlID0gZ2V0UHJlZml4ZWRTdHlsZTtcblxudmFyIF9pbmxpbmVTdHlsZVByZWZpeGVyID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXByZWZpeGVyJyk7XG5cbnZhciBfaW5saW5lU3R5bGVQcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmxpbmVTdHlsZVByZWZpeGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0gLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9qc3N0eWxlcy9jc3MtdmVuZG9yLCBidXQgd2l0aG91dCBoYXZpbmcgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogY29udmVydCBiZXR3ZWVuIGRpZmZlcmVudCBjYXNlcyBhbGwgdGhlIHRpbWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuZnVuY3Rpb24gdHJhbnNmb3JtVmFsdWVzKHN0eWxlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChuZXdTdHlsZSwga2V5KSB7XG4gICAgdmFyIHZhbHVlID0gc3R5bGVba2V5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuam9pbignOycgKyBrZXkgKyAnOicpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgbmV3U3R5bGVba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBuZXdTdHlsZTtcbiAgfSwge30pO1xufVxuXG52YXIgX2hhc1dhcm5lZEFib3V0VXNlckFnZW50ID0gZmFsc2U7XG52YXIgX2xhc3RVc2VyQWdlbnQgPSB1bmRlZmluZWQ7XG52YXIgX2NhY2hlZFByZWZpeGVyID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBnZXRQcmVmaXhlcih1c2VyQWdlbnQpIHtcbiAgdmFyIGFjdHVhbFVzZXJBZ2VudCA9IHVzZXJBZ2VudCB8fCBnbG9iYWwgJiYgZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghYWN0dWFsVXNlckFnZW50ICYmICFfaGFzV2FybmVkQWJvdXRVc2VyQWdlbnQpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGNvbnNvbGUud2FybignUmFkaXVtOiB1c2VyQWdlbnQgc2hvdWxkIGJlIHN1cHBsaWVkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuIFNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9Gb3JtaWRhYmxlTGFicy9yYWRpdW0vdHJlZS9tYXN0ZXIvZG9jcy9hcGkjcmFkaXVtICcgKyAnZm9yIG1vcmUgaW5mb3JtYXRpb24uJyk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIF9oYXNXYXJuZWRBYm91dFVzZXJBZ2VudCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfY2FjaGVkUHJlZml4ZXIgfHwgYWN0dWFsVXNlckFnZW50ICE9PSBfbGFzdFVzZXJBZ2VudCkge1xuICAgIF9jYWNoZWRQcmVmaXhlciA9IG5ldyBfaW5saW5lU3R5bGVQcmVmaXhlcjIuZGVmYXVsdCh7IHVzZXJBZ2VudDogYWN0dWFsVXNlckFnZW50IH0pO1xuICAgIF9sYXN0VXNlckFnZW50ID0gYWN0dWFsVXNlckFnZW50O1xuICB9XG4gIHJldHVybiBfY2FjaGVkUHJlZml4ZXI7XG59XG5cbmZ1bmN0aW9uIGdldFByZWZpeGVkS2V5ZnJhbWVzKHVzZXJBZ2VudCkge1xuICByZXR1cm4gZ2V0UHJlZml4ZXIodXNlckFnZW50KS5wcmVmaXhlZEtleWZyYW1lcztcbn1cblxuLy8gUmV0dXJucyBhIG5ldyBzdHlsZSBvYmplY3Qgd2l0aCB2ZW5kb3IgcHJlZml4ZXMgYWRkZWQgdG8gcHJvcGVydHkgbmFtZXNcbi8vIGFuZCB2YWx1ZXMuXG5mdW5jdGlvbiBnZXRQcmVmaXhlZFN0eWxlKHN0eWxlLCB1c2VyQWdlbnQpIHtcbiAgdmFyIHN0eWxlV2l0aEZhbGxiYWNrcyA9IHRyYW5zZm9ybVZhbHVlcyhzdHlsZSk7XG4gIHZhciBwcmVmaXhlciA9IGdldFByZWZpeGVyKHVzZXJBZ2VudCk7XG4gIHZhciBwcmVmaXhlZFN0eWxlID0gcHJlZml4ZXIucHJlZml4KHN0eWxlV2l0aEZhbGxiYWNrcyk7XG4gIHJldHVybiBwcmVmaXhlZFN0eWxlO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTdHlsZUtlZXBlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlS2VlcGVyKHVzZXJBZ2VudCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZUtlZXBlcik7XG5cbiAgICB0aGlzLl91c2VyQWdlbnQgPSB1c2VyQWdlbnQ7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5fY3NzU2V0ID0ge307XG4gIH1cblxuICBTdHlsZUtlZXBlci5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIE11c3QgYmUgZmF0IGFycm93IHRvIGNhcHR1cmUgYHRoaXNgXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVySW5kZXggPSBfdGhpcy5fbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgICBpZiAobGlzdGVuZXJJbmRleCA+IC0xKSB7XG4gICAgICAgICAgX3RoaXMuX2xpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIFN0eWxlS2VlcGVyLnByb3RvdHlwZS5hZGRDU1MgPSBmdW5jdGlvbiBhZGRDU1MoY3NzKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuX2Nzc1NldFtjc3NdKSB7XG4gICAgICB0aGlzLl9jc3NTZXRbY3NzXSA9IHRydWU7XG4gICAgICB0aGlzLl9lbWl0Q2hhbmdlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIE11c3QgYmUgZmF0IGFycm93IHRvIGNhcHR1cmUgYHRoaXNgXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgZGVsZXRlIF90aGlzMi5fY3NzU2V0W2Nzc107XG4gICAgICAgIF90aGlzMi5fZW1pdENoYW5nZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgU3R5bGVLZWVwZXIucHJvdG90eXBlLmdldENTUyA9IGZ1bmN0aW9uIGdldENTUygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fY3NzU2V0KS5qb2luKCdcXG4nKTtcbiAgfTtcblxuICBTdHlsZUtlZXBlci5wcm90b3R5cGUuX2VtaXRDaGFuZ2UgPSBmdW5jdGlvbiBfZW1pdENoYW5nZSgpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZUtlZXBlcjtcbn0pKCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN0eWxlS2VlcGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9zdHlsZS1rZWVwZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBsaWNlbnNlIEZyYWN0aW9uLmpzIHYzLjIuMCAwOS8wOS8yMDE1XG4gKiBodHRwOi8vd3d3Lnhhcmcub3JnLzIwMTQvMDMvcHJlY2lzZS1jYWxjdWxhdGlvbnMtaW4tamF2YXNjcmlwdC9cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIFJvYmVydCBFaXNlbGUgKHJvYmVydEB4YXJnLm9yZylcbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBvciBHUEwgVmVyc2lvbiAyIGxpY2Vuc2VzLlxuICoqL1xuXG5cbi8qKlxuICpcbiAqIFRoaXMgY2xhc3Mgb2ZmZXJzIHRoZSBwb3NzZWJpbGl0eSB0byBjYWxjdWxhdGUgZnJhY3Rpb25zLlxuICogWW91IGNhbiBwYXNzIGEgZnJhY3Rpb24gaW4gZGlmZmVyZW50IGZvcm1hdHMuIEVpdGhlciBhcyBhcnJheSwgYXMgZG91YmxlLCBhcyBzdHJpbmcgb3IgYXMgYW4gaW50ZWdlci5cbiAqXG4gKiBBcnJheS9PYmplY3QgZm9ybVxuICogWyAwID0+IDxub21pbmF0b3I+LCAxID0+IDxkZW5vbWluYXRvcj4gXVxuICogWyBuID0+IDxub21pbmF0b3I+LCBkID0+IDxkZW5vbWluYXRvcj4gXVxuICpcbiAqIEludGVnZXIgZm9ybVxuICogLSBTaW5nbGUgaW50ZWdlciB2YWx1ZVxuICpcbiAqIERvdWJsZSBmb3JtXG4gKiAtIFNpbmdsZSBkb3VibGUgdmFsdWVcbiAqXG4gKiBTdHJpbmcgZm9ybVxuICogMTIzLjQ1NiAtIGEgc2ltcGxlIGRvdWJsZVxuICogMTIzLzQ1NiAtIEEgc3RyaW5nIGZyYWN0aW9uXG4gKiAxMjMuJzQ1NicgLSBhIGRvdWJsZSB3aXRoIHJlcGVhdGluZyBkZWNpbWFsIHBsYWNlc1xuICogMTIzLig0NTYpIC0gc3lub255bVxuICogMTIzLjQ1JzYnIC0gYSBkb3VibGUgd2l0aCByZXBlYXRpbmcgbGFzdCBwbGFjZVxuICogMTIzLjQ1KDYpIC0gc3lub255bVxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogdmFyIGYgPSBuZXcgRnJhY3Rpb24oXCI5LjQnMzEnXCIpO1xuICogZi5tdWwoWy00LCAzXSkuZGl2KDQuOSk7XG4gKlxuICovXG5cbihmdW5jdGlvbihyb290KSB7XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBcbiAgICAvLyBNYXhpbXVtIHNlYXJjaCBkZXB0aCBmb3IgY3ljbGljIHJhdGlvbmFsIG51bWJlcnMuIDIwMDAgc2hvdWxkIGJlIG1vcmUgdGhhbiBlbm91Z2guIFxuICAgIC8vIEV4YW1wbGU6IDEvNyA9IDAuKDE0Mjg1NykgaGFzIDYgcmVwZWF0aW5nIGRlY2ltYWwgcGxhY2VzLlxuICAgIC8vIElmIE1BWF9DWUNMRV9MRU4gZ2V0cyByZWR1Y2VkLCBsb25nIGN5Y2xlcyB3aWxsIG5vdCBiZSBkZXRlY3RlZCBhbmQgdG9TdHJpbmcoKSBvbmx5IGdldHMgdGhlIGZpcnN0IDEwIGRpZ2l0c1xuICAgIHZhciBNQVhfQ1lDTEVfTEVOID0gMjAwMDtcblxuICAgIC8vIFBhcnNlZCBkYXRhIHRvIGF2b2lkIGNhbGxpbmcgXCJuZXdcIiBhbGwgdGhlIHRpbWVcbiAgICB2YXIgUCA9IHtcbiAgICAgICAgXCJzXCI6IDEsXG4gICAgICAgIFwiblwiOiAwLFxuICAgICAgICBcImRcIjogMVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhc3NpZ24obiwgcykge1xuXG4gICAgICAgIGlmIChpc05hTihuID0gcGFyc2VJbnQobiwgMTApKSkge1xuICAgICAgICAgICAgdGhvcndJbnZhbGlkUGFyYW0oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbiAqIHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGhvcndJbnZhbGlkUGFyYW0oKSB7XG4gICAgICAgIHRocm93IFwiSW52YWxpZCBQYXJhbVwiO1xuICAgIH1cblxuICAgIHZhciBwYXJzZSA9IGZ1bmN0aW9uKHAxLCBwMikge1xuXG4gICAgICAgIHZhciBuID0gMCwgZCA9IDEsIHMgPSAxO1xuICAgICAgICB2YXIgdiA9IDAsIHcgPSAwLCB4ID0gMCwgeSA9IDEsIHogPSAxO1xuXG4gICAgICAgIHZhciBBID0gMCwgQiA9IDE7XG4gICAgICAgIHZhciBDID0gMSwgRCA9IDE7XG5cbiAgICAgICAgdmFyIE4gPSAxMDAwMDAwMDtcbiAgICAgICAgdmFyIE07XG5cbiAgICAgICAgaWYgKHAxID09PSB1bmRlZmluZWQgfHwgcDEgPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8qIHZvaWQgKi9cbiAgICAgICAgfSBlbHNlIGlmIChwMiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuID0gcDE7XG4gICAgICAgICAgICBkID0gcDI7XG4gICAgICAgICAgICBzID0gbiAqIGQ7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgcDEpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImRcIiBpbiBwMSAmJiBcIm5cIiBpbiBwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IHAxW1wiblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBwMVtcImRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzXCIgaW4gcDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbio9IHAxW1wic1wiXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgwIGluIHAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gcDFbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMSBpbiBwMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gcDFbMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aG9yd0ludmFsaWRQYXJhbSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHMgPSBuICogZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwMSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBwMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAxID0gLXAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHAxICUgMSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IHAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHAxID4gMCkgeyAvLyBjaGVjayBmb3IgIT0gMCwgc2NhbGUgd291bGQgYmVjb21lIE5hTiAobG9nKDApKSwgd2hpY2ggY29udmVyZ2VzIHJlYWxseSBzbG93XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwMSA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeiA9IE1hdGgucG93KDEwLCBNYXRoLmZsb29yKDEgKyBNYXRoLmxvZyhwMSkgLyBNYXRoLkxOMTApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwMS89IHo7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzaW5nIEZhcmV5IFNlcXVlbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cDovL3d3dy5qb2huZGNvb2suY29tL2Jsb2cvMjAxMC8xMC8yMC9iZXN0LXJhdGlvbmFsLWFwcHJveGltYXRpb24vXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChCIDw9IE4gJiYgRCA8PSBOKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTSA9IChBICsgQykgLyAoQiArIEQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAxID09PSBNKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCICsgRCA8PSBOKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gQSArIEM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gQiArIEQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoRCA+IEIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBDO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IEQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gQTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBCO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocDEgPiBNKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBKz0gQztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEIrPSBEO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQys9IEE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEKz0gQjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCID4gTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9IEM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gRDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBBO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IEI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuKj0gejtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgQiA9IHAxLm1hdGNoKC9cXGQrfC4vZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEJbQV0gPT09ICctJykgey8vIENoZWNrIGZvciBtaW51cyBzaWduIGF0IHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEErKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChCW0FdID09PSAnKycpIHsvLyBDaGVjayBmb3IgcGx1cyBzaWduIGF0IHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIEErKztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChCLmxlbmd0aCA9PT0gQSArIDEpIHsgLy8gQ2hlY2sgaWYgaXQncyBqdXN0IGEgc2ltcGxlIG51bWJlciBcIjEyMzRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdyA9IGFzc2lnbihCW0ErK10sIHMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEJbQSArIDFdID09PSAnLicgfHwgQltBXSA9PT0gJy4nKSB7IC8vIENoZWNrIGlmIGl0J3MgYSBkZWNpbWFsIG51bWJlclxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQltBXSAhPT0gJy4nKSB7IC8vIEhhbmRsZSAwLjUgYW5kIC41XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IGFzc2lnbihCW0ErK10sIHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQSsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgZGVjaW1hbCBwbGFjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBICsgMSA9PT0gQi5sZW5ndGggfHwgQltBICsgMV0gPT09ICcoJyAmJiBCW0EgKyAzXSA9PT0gJyknIHx8IEJbQSArIDFdID09PSBcIidcIiAmJiBCW0EgKyAzXSA9PT0gXCInXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ID0gYXNzaWduKEJbQV0sIHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBNYXRoLnBvdygxMCwgQltBXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEErKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHJlcGVhdGluZyBwbGFjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCW0FdID09PSAnKCcgJiYgQltBICsgMl0gPT09ICcpJyB8fCBCW0FdID09PSBcIidcIiAmJiBCW0EgKyAyXSA9PT0gXCInXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gYXNzaWduKEJbQSArIDFdLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ID0gTWF0aC5wb3coMTAsIEJbQSArIDFdLmxlbmd0aCkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEErPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoQltBICsgMV0gPT09ICcvJyB8fCBCW0EgKyAxXSA9PT0gJzonKSB7IC8vIENoZWNrIGZvciBhIHNpbXBsZSBmcmFjdGlvbiBcIjEyMy80NTZcIiBvciBcIjEyMzo0NTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdyA9IGFzc2lnbihCW0FdLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBhc3NpZ24oQltBICsgMl0sIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQSs9IDM7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoQltBICsgM10gPT09ICcvJyAmJiBCW0EgKyAxXSA9PT0gJyAnKSB7IC8vIENoZWNrIGZvciBhIGNvbXBsZXggZnJhY3Rpb24gXCIxMjMgMS8yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBhc3NpZ24oQltBXSwgcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ID0gYXNzaWduKEJbQSArIDJdLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBhc3NpZ24oQltBICsgNF0sIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQSs9IDU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoQi5sZW5ndGggPD0gQSkgeyAvLyBDaGVjayBmb3IgbW9yZSB0b2tlbnMgb24gdGhlIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBkID0geSAqIHo7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gLyogdm9pZCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IHggKyBkICogdiArIHogKiB3O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvKiBGYWxsIHRocm91Z2ggb24gZXJyb3IgKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhvcndJbnZhbGlkUGFyYW0oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBpZiAoIWQpIHtcbiAgICAgICAgICAgIHRocm93IFwiRElWLzBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIFBbXCJzXCJdID0gcyA8IDAgPyAtMSA6IDE7XG4gICAgICAgIFBbXCJuXCJdID0gTWF0aC5hYnMobik7XG4gICAgICAgIFBbXCJkXCJdID0gTWF0aC5hYnMoZCk7XG4gICAgfTtcblxuICAgIHZhciBtb2Rwb3cgPSBmdW5jdGlvbihiLCBlLCBtKSB7XG5cbiAgICAgICAgZm9yICh2YXIgciA9IDE7IGUgPiAwOyBiID0gKGIgKiBiKSAlIG0sIGUgPj49IDEpIHtcblxuICAgICAgICAgICAgaWYgKGUgJiAxKSB7XG4gICAgICAgICAgICAgICAgciA9IChyICogYikgJSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG5cbiAgICB2YXIgY3ljbGVMZW4gPSBmdW5jdGlvbihuLCBkKSB7XG5cbiAgICAgICAgZm9yICg7IGQgJSAyID09PSAwOyBcbiAgICAgICAgICAgIGQvPSAyKSB7fVxuXG4gICAgICAgIGZvciAoOyBkICUgNSA9PT0gMDsgXG4gICAgICAgICAgICBkLz0gNSkge31cbiAgICAgICAgXG4gICAgICAgIGlmIChkID09PSAxKSAvLyBDYXRjaCBub24tY3ljbGljIG51bWJlcnNcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIElmIHdlIHdvdWxkIGxpa2UgdG8gY29tcHV0ZSByZWFsbHkgbGFyZ2UgbnVtYmVycyBxdWlja2VyLCB3ZSBjb3VsZCBtYWtlIHVzZSBvZiBGZXJtYXQncyBsaXR0bGUgdGhlb3JlbTpcbiAgICAgICAgLy8gMTBeKGQtMSkgJSBkID09IDFcbiAgICAgICAgLy8gSG93ZXZlciwgd2UgZG9uJ3QgbmVlZCBzdWNoIGxhcmdlIG51bWJlcnMgYW5kIE1BWF9DWUNMRV9MRU4gc2hvdWxkIGJlIHRoZSBjYXBzdG9uZSwgXG4gICAgICAgIC8vIGFzIHdlIHdhbnQgdG8gdHJhbnNsYXRlIHRoZSBudW1iZXJzIHRvIHN0cmluZ3MuXG5cbiAgICAgICAgdmFyIHJlbSA9IDEwICUgZDtcblxuICAgICAgICBmb3IgKHZhciB0ID0gMTsgcmVtICE9PSAxOyB0KyspIHtcbiAgICAgICAgICAgIHJlbSA9IHJlbSAqIDEwICUgZDtcblxuICAgICAgICAgICAgaWYgKHQgPiBNQVhfQ1lDTEVfTEVOKVxuICAgICAgICAgICAgICAgIHJldHVybiAwOyAvLyBSZXR1cm5pbmcgMCBoZXJlIG1lYW5zIHRoYXQgd2UgZG9uJ3QgcHJpbnQgaXQgYXMgYSBjeWNsaWMgbnVtYmVyLiBJdCdzIGxpa2VseSB0aGF0IHRoZSBhbnN3ZXIgaXMgYGQtMWBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuXG4gICAgdmFyIGN5Y2xlU3RhcnQgPSBmdW5jdGlvbihuLCBkLCBsZW4pIHtcblxuICAgICAgICB2YXIgcmVtMSA9IDE7XG4gICAgICAgIHZhciByZW0yID0gbW9kcG93KDEwLCBsZW4sIGQpO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCAzMDA7IHQrKykgeyAvLyBzIDwgfmxvZzEwKE51bWJlci5NQVhfVkFMVUUpXG4gICAgICAgICAgICAvLyBTb2x2ZSAxMF5zID09IDEwXihzK3QpIChtb2QgZClcblxuICAgICAgICAgICAgaWYgKHJlbTEgPT09IHJlbTIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG5cbiAgICAgICAgICAgIHJlbTEgPSByZW0xICogMTAgJSBkO1xuICAgICAgICAgICAgcmVtMiA9IHJlbTIgKiAxMCAlIGQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIHZhciBnY2QgPSBmdW5jdGlvbihhLCBiKSB7XG5cbiAgICAgICAgaWYgKCFhKSByZXR1cm4gYjtcbiAgICAgICAgaWYgKCFiKSByZXR1cm4gYTtcblxuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgYSU9IGI7XG4gICAgICAgICAgICBpZiAoIWEpIHJldHVybiBiO1xuICAgICAgICAgICAgYiU9IGE7XG4gICAgICAgICAgICBpZiAoIWIpIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vZHVsZSBjb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ8RnJhY3Rpb259IGFcbiAgICAgKiBAcGFyYW0ge251bWJlcj19IGJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBGcmFjdGlvbihhLCBiKSB7XG5cbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEZyYWN0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGcmFjdGlvbihhLCBiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlKGEsIGIpO1xuXG4gICAgICAgIGlmIChGcmFjdGlvblsnUkVEVUNFJ10pIHtcbiAgICAgICAgICAgIGEgPSBnY2QoUFtcImRcIl0sIFBbXCJuXCJdKTsgLy8gQWJ1c2UgYVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzW1wic1wiXSA9IFBbXCJzXCJdO1xuICAgICAgICB0aGlzW1wiblwiXSA9IFBbXCJuXCJdIC8gYTtcbiAgICAgICAgdGhpc1tcImRcIl0gPSBQW1wiZFwiXSAvIGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBnbG9iYWwgdmFyaWFibGUgdG8gYmUgYWJsZSB0byBkaXNhYmxlIGF1dG9tYXRpYyByZWR1Y3Rpb24gb2YgdGhlIGZyYWN0aW9uXG4gICAgICpcbiAgICAgKi9cbiAgICBGcmFjdGlvblsnUkVEVUNFJ10gPSAxO1xuXG4gICAgRnJhY3Rpb24ucHJvdG90eXBlID0ge1xuXG4gICAgICAgIFwic1wiOiAxLFxuICAgICAgICBcIm5cIjogMCxcbiAgICAgICAgXCJkXCI6IDEsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGN1bGF0ZXMgdGhlIGFic29sdXRlIHZhbHVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4OiBuZXcgRnJhY3Rpb24oLTQpLmFicygpID0+IDRcbiAgICAgICAgICoqL1xuICAgICAgICBcImFic1wiOiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGcmFjdGlvbih0aGlzW1wiblwiXSwgdGhpc1tcImRcIl0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnZlcnRzIHRoZSBzaWduIG9mIHRoZSBjdXJyZW50IGZyYWN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4OiBuZXcgRnJhY3Rpb24oLTQpLm5lZygpID0+IDRcbiAgICAgICAgICoqL1xuICAgICAgICBcIm5lZ1wiOiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGcmFjdGlvbigtdGhpc1tcInNcIl0gKiB0aGlzW1wiblwiXSwgdGhpc1tcImRcIl0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIHR3byByYXRpb25hbCBudW1iZXJzXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4OiBuZXcgRnJhY3Rpb24oe246IDIsIGQ6IDN9KS5hZGQoXCIxNC45XCIpID0+IDQ2NyAvIDMwXG4gICAgICAgICAqKi9cbiAgICAgICAgXCJhZGRcIjogZnVuY3Rpb24oYSwgYikge1xuXG4gICAgICAgICAgICBwYXJzZShhLCBiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRnJhY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbXCJzXCJdICogdGhpc1tcIm5cIl0gKiBQW1wiZFwiXSArIFBbXCJzXCJdICogdGhpc1tcImRcIl0gKiBQW1wiblwiXSxcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tcImRcIl0gKiBQW1wiZFwiXVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdWJ0cmFjdHMgdHdvIHJhdGlvbmFsIG51bWJlcnNcbiAgICAgICAgICpcbiAgICAgICAgICogRXg6IG5ldyBGcmFjdGlvbih7bjogMiwgZDogM30pLmFkZChcIjE0LjlcIikgPT4gLTQyNyAvIDMwXG4gICAgICAgICAqKi9cbiAgICAgICAgXCJzdWJcIjogZnVuY3Rpb24oYSwgYikge1xuXG4gICAgICAgICAgICBwYXJzZShhLCBiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRnJhY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbXCJzXCJdICogdGhpc1tcIm5cIl0gKiBQW1wiZFwiXSAtIFBbXCJzXCJdICogdGhpc1tcImRcIl0gKiBQW1wiblwiXSxcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tcImRcIl0gKiBQW1wiZFwiXVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdWx0aXBsaWVzIHR3byByYXRpb25hbCBudW1iZXJzXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4OiBuZXcgRnJhY3Rpb24oXCItMTcuKDM0NSlcIikubXVsKDMpID0+IDU3NzYgLyAxMTFcbiAgICAgICAgICoqL1xuICAgICAgICBcIm11bFwiOiBmdW5jdGlvbihhLCBiKSB7XG5cbiAgICAgICAgICAgIHBhcnNlKGEsIGIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGcmFjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tcInNcIl0gKiBQW1wic1wiXSAqIHRoaXNbXCJuXCJdICogUFtcIm5cIl0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbXCJkXCJdICogUFtcImRcIl1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGl2aWRlcyB0d28gcmF0aW9uYWwgbnVtYmVyc1xuICAgICAgICAgKlxuICAgICAgICAgKiBFeDogbmV3IEZyYWN0aW9uKFwiLTE3LigzNDUpXCIpLmludmVyc2UoKS5kaXYoMylcbiAgICAgICAgICoqL1xuICAgICAgICBcImRpdlwiOiBmdW5jdGlvbihhLCBiKSB7XG5cbiAgICAgICAgICAgIHBhcnNlKGEsIGIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGcmFjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tcInNcIl0gKiBQW1wic1wiXSAqIHRoaXNbXCJuXCJdICogUFtcImRcIl0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbXCJkXCJdICogUFtcIm5cIl1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2xvbmVzIHRoZSBhY3R1YWwgb2JqZWN0XG4gICAgICAgICAqXG4gICAgICAgICAqIEV4OiBuZXcgRnJhY3Rpb24oXCItMTcuKDM0NSlcIikuY2xvbmUoKVxuICAgICAgICAgKiovXG4gICAgICAgIFwiY2xvbmVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZyYWN0aW9uKHRoaXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxjdWxhdGVzIHRoZSBtb2R1bG8gb2YgdHdvIHJhdGlvbmFsIG51bWJlcnMgLSBhIG1vcmUgcHJlY2lzZSBmbW9kXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4OiBuZXcgRnJhY3Rpb24oJzQuKDMpJykubW9kKFs3LCA4XSkgPT4gKDEzLzMpICUgKDcvOCkgPSAoNS82KVxuICAgICAgICAgKiovXG4gICAgICAgIFwibW9kXCI6IGZ1bmN0aW9uKGEsIGIpIHtcblxuICAgICAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRnJhY3Rpb24odGhpc1tcInNcIl0gKiB0aGlzW1wiblwiXSAlIHRoaXNbXCJkXCJdLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyc2UoYSwgYik7XG4gICAgICAgICAgICBpZiAoMCA9PT0gKFBbXCJuXCJdICogdGhpc1tcImRcIl0pKSB7XG4gICAgICAgICAgICAgICAgRnJhY3Rpb24oMCwgMCk7IC8vIFRocm93IGRpdi8wXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBGaXJzdCBzaWxseSBhdHRlbXB0LCBraW5kYSBzbG93XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgIHJldHVybiB0aGF0W1wic3ViXCJdKHtcbiAgICAgICAgICAgICBcIm5cIjogbnVtW1wiblwiXSAqIE1hdGguZmxvb3IoKHRoaXMubiAvIHRoaXMuZCkgLyAobnVtLm4gLyBudW0uZCkpLFxuICAgICAgICAgICAgIFwiZFwiOiBudW1bXCJkXCJdLFxuICAgICAgICAgICAgIFwic1wiOiB0aGlzW1wic1wiXVxuICAgICAgICAgICAgIH0pOyovXG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBOZXcgYXR0ZW1wdDogYTEgLyBiMSA9IGEyIC8gYjIgKiBxICsgclxuICAgICAgICAgICAgICogPT4gYjIgKiBhMSA9IGEyICogYjEgKiBxICsgYjEgKiBiMiAqIHJcbiAgICAgICAgICAgICAqID0+IChiMiAqIGExICUgYTIgKiBiMSkgLyAoYjEgKiBiMilcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGcmFjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgKHRoaXNbXCJzXCJdICogUFtcImRcIl0gKiB0aGlzW1wiblwiXSkgJSAoUFtcIm5cIl0gKiB0aGlzW1wiZFwiXSksXG4gICAgICAgICAgICAgICAgICAgIFBbXCJkXCJdICogdGhpc1tcImRcIl1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsY3VsYXRlcyB0aGUgZnJhY3Rpb25hbCBnY2Qgb2YgdHdvIHJhdGlvbmFsIG51bWJlcnNcbiAgICAgICAgICpcbiAgICAgICAgICogRXg6IG5ldyBGcmFjdGlvbig1LDgpLmdjZCgzLDcpID0+IDEvNTZcbiAgICAgICAgICovXG4gICAgICAgIFwiZ2NkXCI6IGZ1bmN0aW9uKGEsIGIpIHtcblxuICAgICAgICAgICAgcGFyc2UoYSwgYik7XG5cbiAgICAgICAgICAgIC8vIGdjZChhIC8gYiwgYyAvIGQpID0gZ2NkKGEsIGMpIC8gbGNtKGIsIGQpXG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgRnJhY3Rpb24oZ2NkKFBbXCJuXCJdLCB0aGlzW1wiblwiXSksIFBbXCJkXCJdICogdGhpc1tcImRcIl0gLyBnY2QoUFtcImRcIl0sIHRoaXNbXCJkXCJdKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGN1bGF0ZXMgdGhlIGZyYWN0aW9uYWwgbGNtIG9mIHR3byByYXRpb25hbCBudW1iZXJzXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4OiBuZXcgRnJhY3Rpb24oNSw4KS5sY20oMyw3KSA9PiAxNVxuICAgICAgICAgKi9cbiAgICAgICAgXCJsY21cIjogZnVuY3Rpb24oYSwgYikge1xuXG4gICAgICAgICAgICBwYXJzZShhLCBiKTtcblxuICAgICAgICAgICAgLy8gbGNtKGEgLyBiLCBjIC8gZCkgPSBsY20oYSwgYykgLyBnY2QoYiwgZClcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGcmFjdGlvbihQW1wiblwiXSAqIHRoaXNbXCJuXCJdIC8gZ2NkKFBbXCJuXCJdLCB0aGlzW1wiblwiXSksIGdjZChQW1wiZFwiXSwgdGhpc1tcImRcIl0pKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsY3VsYXRlcyB0aGUgY2VpbCBvZiBhIHJhdGlvbmFsIG51bWJlclxuICAgICAgICAgKlxuICAgICAgICAgKiBFeDogbmV3IEZyYWN0aW9uKCc0LigzKScpLmNlaWwoKSA9PiAoNSAvIDEpXG4gICAgICAgICAqKi9cbiAgICAgICAgXCJjZWlsXCI6IGZ1bmN0aW9uKHBsYWNlcykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwbGFjZXMgPSBNYXRoLnBvdygxMCwgcGxhY2VzIHx8IDApO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZyYWN0aW9uKE1hdGguY2VpbChwbGFjZXMgKiB0aGlzW1wic1wiXSAqIHRoaXNbXCJuXCJdIC8gdGhpc1tcImRcIl0pLCBwbGFjZXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxjdWxhdGVzIHRoZSBmbG9vciBvZiBhIHJhdGlvbmFsIG51bWJlclxuICAgICAgICAgKlxuICAgICAgICAgKiBFeDogbmV3IEZyYWN0aW9uKCc0LigzKScpLmZsb29yKCkgPT4gKDQgLyAxKVxuICAgICAgICAgKiovXG4gICAgICAgIFwiZmxvb3JcIjogZnVuY3Rpb24ocGxhY2VzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBsYWNlcyA9IE1hdGgucG93KDEwLCBwbGFjZXMgfHwgMCk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgRnJhY3Rpb24oTWF0aC5mbG9vcihwbGFjZXMgKiB0aGlzW1wic1wiXSAqIHRoaXNbXCJuXCJdIC8gdGhpc1tcImRcIl0pLCBwbGFjZXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSb3VuZHMgYSByYXRpb25hbCBudW1iZXJzXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4OiBuZXcgRnJhY3Rpb24oJzQuKDMpJykucm91bmQoKSA9PiAoNCAvIDEpXG4gICAgICAgICAqKi9cbiAgICAgICAgXCJyb3VuZFwiOiBmdW5jdGlvbihwbGFjZXMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGxhY2VzID0gTWF0aC5wb3coMTAsIHBsYWNlcyB8fCAwKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGcmFjdGlvbihNYXRoLnJvdW5kKHBsYWNlcyAqIHRoaXNbXCJzXCJdICogdGhpc1tcIm5cIl0gLyB0aGlzW1wiZFwiXSksIHBsYWNlcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGludmVyc2Ugb2YgdGhlIGZyYWN0aW9uLCBtZWFucyBudW1lcmF0b3IgYW5kIGRlbnVtZXJhdG9yIGFyZSBleGNoYW5nZWRcbiAgICAgICAgICpcbiAgICAgICAgICogRXg6IG5ldyBGcmFjdGlvbihbLTMsIDRdKS5pbnZlcnNlKCkgPT4gLTQgLyAzXG4gICAgICAgICAqKi9cbiAgICAgICAgXCJpbnZlcnNlXCI6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZyYWN0aW9uKHRoaXNbXCJzXCJdICogdGhpc1tcImRcIl0sIHRoaXNbXCJuXCJdKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsY3VsYXRlcyB0aGUgZnJhY3Rpb24gdG8gc29tZSBpbnRlZ2VyIGV4cG9uZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEV4OiBuZXcgRnJhY3Rpb24oLTEsMikucG93KC0zKSA9PiAtOFxuICAgICAgICAgKi9cbiAgICAgICAgXCJwb3dcIjogZnVuY3Rpb24obSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobSA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZyYWN0aW9uKE1hdGgucG93KHRoaXNbJ3MnXSAqIHRoaXNbXCJkXCJdLC1tKSwgTWF0aC5wb3codGhpc1tcIm5cIl0sLW0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGcmFjdGlvbihNYXRoLnBvdyh0aGlzWydzJ10gKiB0aGlzW1wiblwiXSwgbSksIE1hdGgucG93KHRoaXNbXCJkXCJdLCBtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIGlmIHR3byByYXRpb25hbCBudW1iZXJzIGFyZSB0aGUgc2FtZVxuICAgICAgICAgKlxuICAgICAgICAgKiBFeDogbmV3IEZyYWN0aW9uKDE5LjYpLmVxdWFscyhbOTgsIDVdKTtcbiAgICAgICAgICoqL1xuICAgICAgICBcImVxdWFsc1wiOiBmdW5jdGlvbihhLCBiKSB7XG5cbiAgICAgICAgICAgIHBhcnNlKGEsIGIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCJzXCJdICogdGhpc1tcIm5cIl0gKiBQW1wiZFwiXSA9PT0gUFtcInNcIl0gKiBQW1wiblwiXSAqIHRoaXNbXCJkXCJdOyAvLyBTYW1lIGFzIGNvbXBhcmUoKSA9PT0gMFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBpZiB0d28gcmF0aW9uYWwgbnVtYmVycyBhcmUgdGhlIHNhbWVcbiAgICAgICAgICpcbiAgICAgICAgICogRXg6IG5ldyBGcmFjdGlvbigxOS42KS5lcXVhbHMoWzk4LCA1XSk7XG4gICAgICAgICAqKi9cbiAgICAgICAgXCJjb21wYXJlXCI6IGZ1bmN0aW9uKGEsIGIpIHtcblxuICAgICAgICAgICAgcGFyc2UoYSwgYik7XG4gICAgICAgICAgICB2YXIgdCA9ICh0aGlzW1wic1wiXSAqIHRoaXNbXCJuXCJdICogUFtcImRcIl0gLSBQW1wic1wiXSAqIFBbXCJuXCJdICogdGhpc1tcImRcIl0pO1xuICAgICAgICAgICAgcmV0dXJuICgwIDwgdCkgLSAodCA8IDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBpZiB0d28gcmF0aW9uYWwgbnVtYmVycyBhcmUgZGl2aXNpYmxlXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4OiBuZXcgRnJhY3Rpb24oMTkuNikuZGl2aXNpYmxlKDEuNSk7XG4gICAgICAgICAqL1xuICAgICAgICBcImRpdmlzaWJsZVwiOiBmdW5jdGlvbihhLCBiKSB7XG5cbiAgICAgICAgICAgIHBhcnNlKGEsIGIpO1xuICAgICAgICAgICAgcmV0dXJuICEoIShQW1wiblwiXSAqIHRoaXNbXCJkXCJdKSB8fCAoKHRoaXNbXCJuXCJdICogUFtcImRcIl0pICUgKFBbXCJuXCJdICogdGhpc1tcImRcIl0pKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBkZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBmcmFjdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBFeDogbmV3IEZyYWN0aW9uKFwiMTAwLic5MTgyMydcIikudmFsdWVPZigpID0+IDEwMC45MTgyMzkxODIzOTE4M1xuICAgICAgICAgKiovXG4gICAgICAgICd2YWx1ZU9mJzogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzW1wic1wiXSAqIHRoaXNbXCJuXCJdIC8gdGhpc1tcImRcIl07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBzdHJpbmctZnJhY3Rpb24gcmVwcmVzZW50YXRpb24gb2YgYSBGcmFjdGlvbiBvYmplY3RcbiAgICAgICAgICpcbiAgICAgICAgICogRXg6IG5ldyBGcmFjdGlvbihcIjEuJzMnXCIpLnRvRnJhY3Rpb24oKSA9PiBcIjQgMS8zXCJcbiAgICAgICAgICoqL1xuICAgICAgICAndG9GcmFjdGlvbic6IGZ1bmN0aW9uKGV4Y2x1ZGVXaG9sZSkge1xuXG4gICAgICAgICAgICB2YXIgd2hvbGUsIHN0ciA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXNbXCJuXCJdO1xuICAgICAgICAgICAgdmFyIGQgPSB0aGlzW1wiZFwiXTtcbiAgICAgICAgICAgIGlmICh0aGlzW1wic1wiXSA8IDApIHtcbiAgICAgICAgICAgICAgICBzdHIrPSAnLSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkID09PSAxKSB7XG4gICAgICAgICAgICAgICAgc3RyKz0gbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZVdob2xlICYmICh3aG9sZSA9IE1hdGguZmxvb3IobiAvIGQpKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyKz0gd2hvbGU7XG4gICAgICAgICAgICAgICAgICAgIHN0cis9IFwiIFwiO1xuICAgICAgICAgICAgICAgICAgICBuICU9IGQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RyKz0gbjtcbiAgICAgICAgICAgICAgICBzdHIrPSAnLyc7XG4gICAgICAgICAgICAgICAgc3RyKz0gZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSBsYXRleCByZXByZXNlbnRhdGlvbiBvZiBhIEZyYWN0aW9uIG9iamVjdFxuICAgICAgICAgKlxuICAgICAgICAgKiBFeDogbmV3IEZyYWN0aW9uKFwiMS4nMydcIikudG9MYXRleCgpID0+IFwiXFxmcmFjezR9ezN9XCJcbiAgICAgICAgICoqL1xuICAgICAgICAndG9MYXRleCc6IGZ1bmN0aW9uKGV4Y2x1ZGVXaG9sZSkge1xuXG4gICAgICAgICAgICB2YXIgd2hvbGUsIHN0ciA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXNbXCJuXCJdO1xuICAgICAgICAgICAgdmFyIGQgPSB0aGlzW1wiZFwiXTtcbiAgICAgICAgICAgIGlmICh0aGlzW1wic1wiXSA8IDApIHtcbiAgICAgICAgICAgICAgICBzdHIrPSAnLSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkID09PSAxKSB7XG4gICAgICAgICAgICAgICAgc3RyKz0gbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVXaG9sZSAmJiAod2hvbGUgPSBNYXRoLmZsb29yKG4gLyBkKSkgPiAwKSB7XHRcdFxuICAgICAgICAgICAgICAgICAgICBzdHIrPSB3aG9sZTtcdFx0XG4gICAgICAgICAgICAgICAgICAgIG4gJT0gZDtcdFx0XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RyKz0gXCJcXFxcZnJhY3tcIjtcbiAgICAgICAgICAgICAgICBzdHIrPSBuO1xuICAgICAgICAgICAgICAgIHN0cis9ICd9eyc7XG4gICAgICAgICAgICAgICAgc3RyKz0gZDtcbiAgICAgICAgICAgICAgICBzdHIrPSAnfSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY29udGludWVkIGZyYWN0aW9uIGVsZW1lbnRzXG4gICAgICAgICAqIFxuICAgICAgICAgKiBFeDogbmV3IEZyYWN0aW9uKFwiNy84XCIpLnRvQ29udGludWVkKCkgPT4gWzAsMSw3XVxuICAgICAgICAgKi9cbiAgICAgICAgJ3RvQ29udGludWVkJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGEgPSB0aGlzWyduJ107XG4gICAgICAgICAgICB2YXIgYiA9IHRoaXNbJ2QnXTtcbiAgICAgICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKE1hdGguZmxvb3IoYSAvIGIpKTtcbiAgICAgICAgICAgICAgICB0ID0gYSAlIGI7XG4gICAgICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgICAgICAgYiA9IHQ7XG4gICAgICAgICAgICB9IHdoaWxlKGEgIT09IDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgZnJhY3Rpb24gd2l0aCBhbGwgZGlnaXRzXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4OiBuZXcgRnJhY3Rpb24oXCIxMDAuJzkxODIzJ1wiKS50b1N0cmluZygpID0+IFwiMTAwLig5MTgyMylcIlxuICAgICAgICAgKiovXG4gICAgICAgICd0b1N0cmluZyc6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB2YXIgZztcbiAgICAgICAgICAgIHZhciBOID0gdGhpc1tcIm5cIl07XG4gICAgICAgICAgICB2YXIgRCA9IHRoaXNbXCJkXCJdO1xuXG4gICAgICAgICAgICBpZiAoIUZyYWN0aW9uWydSRURVQ0UnXSkge1xuICAgICAgICAgICAgICAgIGcgPSBnY2QoTiwgRCk7XG4gICAgICAgICAgICAgICAgTi89IGc7XG4gICAgICAgICAgICAgICAgRC89IGc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwID0gU3RyaW5nKE4pLnNwbGl0KFwiXCIpOyAvLyBOdW1lcmF0b3IgY2hhcnNcbiAgICAgICAgICAgIHZhciB0ID0gMDsgLy8gVG1wIHZhclxuXG4gICAgICAgICAgICB2YXIgcmV0ID0gW350aGlzW1wic1wiXSA/IFwiXCIgOiBcIi1cIiwgXCJcIiwgXCJcIl07IC8vIFJldHVybiBhcnJheSwgWzBdIGlzIHplcm8gc2lnbiwgWzFdIGJlZm9yZSBjb21tYSwgWzJdIGFmdGVyXG4gICAgICAgICAgICB2YXIgemVyb3MgPSBcIlwiOyAvLyBDb2xsZWN0aW9uIHZhcmlhYmxlIGZvciB6ZXJvc1xuXG4gICAgICAgICAgICB2YXIgY3ljTGVuID0gY3ljbGVMZW4oTiwgRCk7IC8vIEN5Y2xlIGxlbmd0aFxuICAgICAgICAgICAgdmFyIGN5Y09mZiA9IGN5Y2xlU3RhcnQoTiwgRCwgY3ljTGVuKTsgLy8gQ3ljbGUgc3RhcnRcblxuICAgICAgICAgICAgdmFyIGogPSAtMTtcbiAgICAgICAgICAgIHZhciBuID0gMTsgLy8gc3RyIGluZGV4XG5cbiAgICAgICAgICAgIC8vIHJvdWdoIGVzdGltYXRlIHRvIGZpbGwgemVyb3NcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSAxMCArIGN5Y0xlbiArIGN5Y09mZiArIHAubGVuZ3RoOyAvLyAxMCA9IGRlY2ltYWwgcGxhY2VzIHdoZW4gbm8gcmVwaXRhdGlvblxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrLCB0Kj0gMTApIHtcblxuICAgICAgICAgICAgICAgIGlmIChpIDwgcC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdCs9IE51bWJlcihwW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuID0gMjtcbiAgICAgICAgICAgICAgICAgICAgaisrOyAvLyBTdGFydCBub3cgPT4gYWZ0ZXIgY29tbWFcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY3ljTGVuID4gMCkgeyAvLyBJZiB3ZSBoYXZlIGEgcmVwZWF0aW5nIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IGN5Y09mZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W25dKz0gemVyb3MgKyBcIihcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHplcm9zID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChqID09PSBjeWNMZW4gKyBjeWNPZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtuXSs9IHplcm9zICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0ID49IEQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0W25dKz0gemVyb3MgKyAoKHQgLyBEKSB8IDApOyAvLyBGbHVzaCB6ZXJvcywgQWRkIGN1cnJlbnQgZGlnaXRcbiAgICAgICAgICAgICAgICAgICAgemVyb3MgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0ID0gdCAlIEQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuID4gMSkgeyAvLyBBZGQgemVyb3MgdG8gdGhlIHplcm8gYnVmZmVyXG4gICAgICAgICAgICAgICAgICAgIHplcm9zKz0gXCIwXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXRbbl0pIHsgLy8gSWYgYmVmb3JlIGNvbW1hLCBhZGQgemVybyBvbmx5IGlmIGFscmVhZHkgc29tZXRoaW5nIHdhcyBhZGRlZFxuICAgICAgICAgICAgICAgICAgICByZXRbbl0rPSBcIjBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl0J3MgZW1wdHksIGl0J3MgYSBsZWFkaW5nIHplcm8gb25seVxuICAgICAgICAgICAgcmV0WzBdKz0gcmV0WzFdIHx8IFwiMFwiO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBzb21ldGhpbmcgYWZ0ZXIgdGhlIGNvbW1hLCBhZGQgdGhlIGNvbW1hIHNpZ25cbiAgICAgICAgICAgIGlmIChyZXRbMl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0WzBdICsgXCIuXCIgKyByZXRbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0WzBdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lW1wiYW1kXCJdKSB7XG4gICAgICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gRnJhY3Rpb247XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgbW9kdWxlW1wiZXhwb3J0c1wiXSA9IEZyYWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3RbJ0ZyYWN0aW9uJ10gPSBGcmFjdGlvbjtcbiAgICB9XG4gICAgXG59KSh0aGlzKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZyYWN0aW9uLmpzL2ZyYWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaGVscGVyIHRvIGNhcGl0YWxpemUgc3RyaW5nc1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCA0LjAuMCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNiBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE2IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcGF0dGVybnMpLiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkgPiA1KS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IGdsb2JhbC5BcnJheS5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBnbG9iYWwuT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGdsb2JhbC5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKGdsb2JhbCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgaGFzaCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIEhhc2goKSB7fVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShoYXNoLCBrZXkpIHtcbiAgcmV0dXJuIGhhc2hIYXMoaGFzaCwga2V5KSAmJiBkZWxldGUgaGFzaFtrZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGhhc2gsIGtleSkge1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGhhc2hba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChoYXNoLCBrZXkpID8gaGFzaFtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhoYXNoLCBrZXkpIHtcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGhhc2hba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChoYXNoLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoaGFzaCwga2V5LCB2YWx1ZSkge1xuICBoYXNoW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA/IHZhbHVlcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSB2YWx1ZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSB7ICdoYXNoJzogbmV3IEhhc2gsICdtYXAnOiBNYXAgPyBuZXcgTWFwIDogW10sICdzdHJpbmcnOiBuZXcgSGFzaCB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChpc0tleWFibGUoa2V5KSkge1xuICAgIHJldHVybiBoYXNoRGVsZXRlKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBkYXRhLnN0cmluZyA6IGRhdGEuaGFzaCwga2V5KTtcbiAgfVxuICByZXR1cm4gTWFwID8gZGF0YS5tYXBbJ2RlbGV0ZSddKGtleSkgOiBhc3NvY0RlbGV0ZShkYXRhLm1hcCwga2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoaXNLZXlhYmxlKGtleSkpIHtcbiAgICByZXR1cm4gaGFzaEdldCh0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gZGF0YS5zdHJpbmcgOiBkYXRhLmhhc2gsIGtleSk7XG4gIH1cbiAgcmV0dXJuIE1hcCA/IGRhdGEubWFwLmdldChrZXkpIDogYXNzb2NHZXQoZGF0YS5tYXAsIGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChpc0tleWFibGUoa2V5KSkge1xuICAgIHJldHVybiBoYXNoSGFzKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBkYXRhLnN0cmluZyA6IGRhdGEuaGFzaCwga2V5KTtcbiAgfVxuICByZXR1cm4gTWFwID8gZGF0YS5tYXAuaGFzKGtleSkgOiBhc3NvY0hhcyhkYXRhLm1hcCwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gbWFwU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoaXNLZXlhYmxlKGtleSkpIHtcbiAgICBoYXNoU2V0KHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBkYXRhLnN0cmluZyA6IGRhdGEuaGFzaCwga2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoTWFwKSB7XG4gICAgZGF0YS5tYXAuc2V0KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGFzc29jU2V0KGRhdGEubWFwLCBrZXksIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgYXNzb2NpYXRpdmUgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhc3NvY0RlbGV0ZShhcnJheSwga2V5KSB7XG4gIHZhciBpbmRleCA9IGFzc29jSW5kZXhPZihhcnJheSwga2V5KTtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGFycmF5LnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGFycmF5LCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgYXNzb2NpYXRpdmUgYXJyYXkgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXNzb2NHZXQoYXJyYXksIGtleSkge1xuICB2YXIgaW5kZXggPSBhc3NvY0luZGV4T2YoYXJyYXksIGtleSk7XG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBhcnJheVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFuIGFzc29jaWF0aXZlIGFycmF5IHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhc3NvY0hhcyhhcnJheSwga2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgXG4gKiBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGFzc29jaWF0aXZlIGFycmF5IGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NTZXQoYXJyYXksIGtleSwgdmFsdWUpIHtcbiAgdmFyIGluZGV4ID0gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpO1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgYXJyYXkucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGFycmF5W2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICByZXR1cm4gaXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgKHR5cGUgPT0gJ3N0cmluZycgJiYgdmFsdWUgIT09ICdfX3Byb3RvX18nKSB8fCB2YWx1ZSA9PSBudWxsO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICogdmFyIG90aGVyID0geyAndXNlcic6ICdmcmVkJyB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9ycywgYW5kXG4gIC8vIFBoYW50b21KUyAxLjkgd2hpY2ggcmV0dXJucyAnZnVuY3Rpb24nIGZvciBgTm9kZUxpc3RgIGluc3RhbmNlcy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBbbGFuZ3VhZ2UgdHlwZV0oaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OCkgb2YgYE9iamVjdGAuXG4gKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTmF0aXZlKEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTmF0aXZlKF8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgcmV0dXJuIHJlSXNOYXRpdmUudGVzdChmdW5jVG9TdHJpbmcuY2FsbCh2YWx1ZSkpO1xuICB9XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgKGlzSG9zdE9iamVjdCh2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yKS50ZXN0KHZhbHVlKTtcbn1cblxuLy8gQXZvaWQgaW5oZXJpdGluZyBmcm9tIGBPYmplY3QucHJvdG90eXBlYCB3aGVuIHBvc3NpYmxlLlxuSGFzaC5wcm90b3R5cGUgPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiBvYmplY3RQcm90bztcblxuLy8gQWRkIGZ1bmN0aW9ucyB0byB0aGUgYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcERlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC5fbWFwY2FjaGUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCA0LjAuMCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNiBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE2IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgPyArdmFsdWUgOiAtMTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgaXRlcmF0b3JgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlcmF0b3IgVGhlIGl0ZXJhdG9yIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gaXRlcmF0b3JUb0FycmF5KGl0ZXJhdG9yKSB7XG4gIHZhciBkYXRhLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCEoZGF0YSA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgIHJlc3VsdC5wdXNoKGRhdGEudmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IGdsb2JhbC5PYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBSZWZsZWN0ID0gZ2xvYmFsLlJlZmxlY3QsXG4gICAgZW51bWVyYXRlID0gUmVmbGVjdCA/IFJlZmxlY3QuZW51bWVyYXRlIDogdW5kZWZpbmVkLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHNraXAgdGhlIGNvbnN0cnVjdG9yXG4gKiBwcm9wZXJ0eSBvZiBwcm90b3R5cGVzIG9yIHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIG9iamVjdCA9IG9iamVjdCA9PSBudWxsID8gb2JqZWN0IDogT2JqZWN0KG9iamVjdCk7XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgSUUgPCA5IHdpdGggZXM2LXNoaW0uXG5pZiAoZW51bWVyYXRlICYmICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgJ3ZhbHVlT2YnOiAxIH0sICd2YWx1ZU9mJykpIHtcbiAgYmFzZUtleXNJbiA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBpdGVyYXRvclRvQXJyYXkoZW51bWVyYXRlKG9iamVjdCkpO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIFwibGVuZ3RoXCIgcHJvcGVydHkgdmFsdWUgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdm9pZCBhIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKVxuICogdGhhdCBhZmZlY3RzIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgaW5kZXgga2V5cyBmb3IgYG9iamVjdGAgdmFsdWVzIG9mIGFycmF5cyxcbiAqIGBhcmd1bWVudHNgIG9iamVjdHMsIGFuZCBzdHJpbmdzLCBvdGhlcndpc2UgYG51bGxgIGlzIHJldHVybmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl8bnVsbH0gUmV0dXJucyBpbmRleCBrZXlzLCBlbHNlIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gaW5kZXhLZXlzKG9iamVjdCkge1xuICB2YXIgbGVuZ3RoID0gb2JqZWN0ID8gb2JqZWN0Lmxlbmd0aCA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIChpc0xlbmd0aChsZW5ndGgpICYmIChpc0FycmF5KG9iamVjdCkgfHwgaXNTdHJpbmcob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKSlcbiAgICA/IGJhc2VUaW1lcyhsZW5ndGgsIFN0cmluZylcbiAgICA6IG51bGw7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgaW5jb3JyZWN0bHkgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHR5cGUgRnVuY3Rpb25cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHR5cGUgRnVuY3Rpb25cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiZcbiAgICAhKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nICYmIGlzRnVuY3Rpb24odmFsdWUpKSAmJiBpc0xlbmd0aChnZXRMZW5ndGgodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEB0eXBlIEZ1bmN0aW9uXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOCB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvcnMsIGFuZFxuICAvLyBQaGFudG9tSlMgMS45IHdoaWNoIHJldHVybnMgJ2Z1bmN0aW9uJyBmb3IgYE5vZGVMaXN0YCBpbnN0YW5jZXMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIGxvb3NlbHkgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTdHJpbmdgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTdHJpbmcoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTdHJpbmcoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8XG4gICAgKCFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN0cmluZ1RhZyk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcHJvcHMgPSBiYXNlS2V5c0luKG9iamVjdCksXG4gICAgICBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgIGluZGV4ZXMgPSBpbmRleEtleXMob2JqZWN0KSxcbiAgICAgIHNraXBJbmRleGVzID0gISFpbmRleGVzLFxuICAgICAgcmVzdWx0ID0gaW5kZXhlcyB8fCBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBwcm9wc0xlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgaWYgKCEoc2tpcEluZGV4ZXMgJiYgKGtleSA9PSAnbGVuZ3RoJyB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpICYmXG4gICAgICAgICEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoLmtleXNpbi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCA0LjAuMiAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNiBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE2IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgU3RhY2sgPSByZXF1aXJlKCdsb2Rhc2guX3N0YWNrJyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnbG9kYXNoLl9hcnJheWVhY2gnKSxcbiAgICBiYXNlRm9yID0gcmVxdWlyZSgnbG9kYXNoLl9iYXNlZm9yJyksXG4gICAgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC5pc3BsYWlub2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJ2xvZGFzaC5rZXlzJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnbG9kYXNoLmtleXNpbicpLFxuICAgIHJlc3QgPSByZXF1aXJlKCdsb2Rhc2gucmVzdCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcGF0dGVybnMpLiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpID4gNSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID0gdHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID0gdHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID0gdHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID0gdHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID0gdHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2Jvb2xUYWddID1cbmNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDhUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPVxuY2xvbmVhYmxlVGFnc1ttYXBUYWddID0gY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID1cbmNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9IGNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9XG5jbG9uZWFibGVUYWdzW3NldFRhZ10gPSBjbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPVxuY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIEFkZHMgdGhlIGtleS12YWx1ZSBgcGFpcmAgdG8gYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYWlyIFRoZSBrZXktdmFsdWUgcGFpciB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBtYXBgLlxuICovXG5mdW5jdGlvbiBhZGRNYXBFbnRyeShtYXAsIHBhaXIpIHtcbiAgbWFwLnNldChwYWlyWzBdLCBwYWlyWzFdKTtcbiAgcmV0dXJuIG1hcDtcbn1cblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBtb2RpZnkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBzZXRgLlxuICovXG5mdW5jdGlvbiBhZGRTZXRFbnRyeShzZXQsIHZhbHVlKSB7XG4gIHNldC5hZGQodmFsdWUpO1xuICByZXR1cm4gc2V0O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhcyB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgPyArdmFsdWUgOiAtMTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBnbG9iYWwuT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGdsb2JhbC5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IGdsb2JhbC5VaW50OEFycmF5LFxuICAgIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShnbG9iYWwsICdNYXAnKSxcbiAgICBTZXQgPSBnZXROYXRpdmUoZ2xvYmFsLCAnU2V0Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzIGFuZCBzZXRzLiAqL1xudmFyIG1hcEN0b3JTdHJpbmcgPSBNYXAgPyBmdW5jVG9TdHJpbmcuY2FsbChNYXApIDogJycsXG4gICAgc2V0Q3RvclN0cmluZyA9IFNldCA/IGZ1bmNUb1N0cmluZy5jYWxsKFNldCkgOiAnJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBTeW1ib2wgPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXNzaWduVmFsdWVgIGV4Y2VwdCB0aGF0IGl0IGRvZXNuJ3QgYXNzaWduIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWVxKG9iamVjdFtrZXldLCB2YWx1ZSkpIHx8XG4gICAgICAodHlwZW9mIGtleSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoKCFlcShvYmpWYWx1ZSwgdmFsdWUpIHx8XG4gICAgICAgIChlcShvYmpWYWx1ZSwgb2JqZWN0UHJvdG9ba2V5XSkgJiYgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgaXNEZWVwLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcblxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIGlmIChpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lT2JqZWN0KGlzRnVuYyA/IHt9IDogdmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNsb25lYWJsZVRhZ3NbdGFnXVxuICAgICAgICA/IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGlzRGVlcClcbiAgICAgICAgOiAob2JqZWN0ID8gdmFsdWUgOiB7fSk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgKGlzQXJyID8gYXJyYXlFYWNoIDogYmFzZUZvck93bikodmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBpc0RlZXAsIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gaXNBcnIgPyByZXN1bHQgOiBjb3B5U3ltYm9scyh2YWx1ZSwgcmVzdWx0KTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvdHlwZSBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG90eXBlKSB7XG4gICAgaWYgKGlzT2JqZWN0KHByb3RvdHlwZSkpIHtcbiAgICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQgfHwge307XG4gIH07XG59KCkpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JPd24ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWVyZ2VgIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBtZXJnZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWQgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2Uob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAob2JqZWN0ID09PSBzb3VyY2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHByb3BzID0gKGlzQXJyYXkoc291cmNlKSB8fCBpc1R5cGVkQXJyYXkoc291cmNlKSkgPyB1bmRlZmluZWQgOiBrZXlzSW4oc291cmNlKTtcbiAgYXJyYXlFYWNoKHByb3BzIHx8IHNvdXJjZSwgZnVuY3Rpb24oc3JjVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3JjVmFsdWU7XG4gICAgICBzcmNWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNPYmplY3Qoc3JjVmFsdWUpKSB7XG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgYmFzZU1lcmdlLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZU1lcmdlYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIG1lcmdlcyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBtZXJnZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIG1lcmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1lcmdlRnVuYyBUaGUgZnVuY3Rpb24gdG8gbWVyZ2UgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWQgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBtZXJnZUZ1bmMsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgc3JjVmFsdWUgPSBzb3VyY2Vba2V5XSxcbiAgICAgIHN0YWNrZWQgPSBzdGFjay5nZXQoc3JjVmFsdWUpIHx8IHN0YWNrLmdldChvYmpWYWx1ZSk7XG5cbiAgaWYgKHN0YWNrZWQpIHtcbiAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBzdGFja2VkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spIDogdW5kZWZpbmVkLFxuICAgICAgaXNDb21tb24gPSBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuXG4gIGlmIChpc0NvbW1vbikge1xuICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgaWYgKGlzQXJyYXkoc3JjVmFsdWUpIHx8IGlzVHlwZWRBcnJheShzcmNWYWx1ZSkpIHtcbiAgICAgIGlmIChpc0FycmF5KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHNyY0luZGV4ID8gY29weUFycmF5KG9ialZhbHVlKSA6IG9ialZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNBcnJheUxpa2VPYmplY3Qob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gY29weUFycmF5KG9ialZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IGJhc2VDbG9uZShzcmNWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoc3JjVmFsdWUpIHx8IGlzQXJndW1lbnRzKHNyY1ZhbHVlKSkge1xuICAgICAgaWYgKGlzQXJndW1lbnRzKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHRvUGxhaW5PYmplY3Qob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWlzT2JqZWN0KG9ialZhbHVlKSB8fCAoc3JjSW5kZXggJiYgaXNGdW5jdGlvbihvYmpWYWx1ZSkpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gYmFzZUNsb25lKHNyY1ZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IHNyY0luZGV4ID8gYmFzZUNsb25lKG9ialZhbHVlKSA6IG9ialZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrLnNldChzcmNWYWx1ZSwgbmV3VmFsdWUpO1xuXG4gIGlmIChpc0NvbW1vbikge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IG1lcmdlIG9iamVjdHMgYW5kIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIG1lcmdlRnVuYyhuZXdWYWx1ZSwgc3JjVmFsdWUsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjayk7XG4gIH1cbiAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlcikge1xuICB2YXIgQ3RvciA9IGJ1ZmZlci5jb25zdHJ1Y3RvcixcbiAgICAgIHJlc3VsdCA9IG5ldyBDdG9yKGJ1ZmZlci5ieXRlTGVuZ3RoKSxcbiAgICAgIHZpZXcgPSBuZXcgVWludDhBcnJheShyZXN1bHQpO1xuXG4gIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIG1hcC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVNYXAobWFwKSB7XG4gIHZhciBDdG9yID0gbWFwLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UobWFwVG9BcnJheShtYXApLCBhZGRNYXBFbnRyeSwgbmV3IEN0b3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciBDdG9yID0gcmVnZXhwLmNvbnN0cnVjdG9yLFxuICAgICAgcmVzdWx0ID0gbmV3IEN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuXG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHNldC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTZXQoc2V0KSB7XG4gIHZhciBDdG9yID0gc2V0LmNvbnN0cnVjdG9yO1xuICByZXR1cm4gYXJyYXlSZWR1Y2Uoc2V0VG9BcnJheShzZXQpLCBhZGRTZXRFbnRyeSwgbmV3IEN0b3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gU3ltYm9sID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IHR5cGVkQXJyYXkuYnVmZmVyLFxuICAgICAgQ3RvciA9IHR5cGVkQXJyYXkuY29uc3RydWN0b3I7XG5cbiAgcmV0dXJuIG5ldyBDdG9yKGlzRGVlcCA/IGNsb25lQnVmZmVyKGJ1ZmZlcikgOiBidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdFdpdGgoc291cmNlLCBwcm9wcywgb2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGNvcHlPYmplY3RgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBmdW5jdGlvbiB0b1xuICogY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBuYW1lcyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3RXaXRoKHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF0sXG4gICAgICAgIG5ld1ZhbHVlID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKSA6IHNvdXJjZVtrZXldO1xuXG4gICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9sIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiByZXN0KGZ1bmN0aW9uKG9iamVjdCwgc291cmNlcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkLFxuICAgICAgICBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgY3VzdG9taXplciA9IHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpIDogdW5kZWZpbmVkO1xuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIFwibGVuZ3RoXCIgcHJvcGVydHkgdmFsdWUgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdm9pZCBhIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKVxuICogdGhhdCBhZmZlY3RzIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgcmV0dXJuIGlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBzeW1ib2wgcHJvcGVydGllcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyB8fCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFtdO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIElFIDExIHByb3ZpZGluZyBgdG9TdHJpbmdUYWdgIHZhbHVlcyBmb3IgbWFwcyBhbmQgc2V0cy5cbmlmICgoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8IChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiBudWxsLFxuICAgICAgICBjdG9yU3RyaW5nID0gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyA/IGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgaWYgKGN0b3JTdHJpbmcgPT0gbWFwQ3RvclN0cmluZykge1xuICAgICAgICByZXR1cm4gbWFwVGFnO1xuICAgICAgfVxuICAgICAgaWYgKGN0b3JTdHJpbmcgPT0gc2V0Q3RvclN0cmluZykge1xuICAgICAgICByZXR1cm4gc2V0VGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIGJhc2VDcmVhdGUoaXNGdW5jdGlvbihDdG9yKSA/IEN0b3IucHJvdG90eXBlIDogdW5kZWZpbmVkKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBjbG9uZU1hcChvYmplY3QpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QpO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgcHJvdmlkZWQgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KSkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICogdmFyIG90aGVyID0geyAndXNlcic6ICdmcmVkJyB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIGluY29ycmVjdGx5IG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEB0eXBlIEZ1bmN0aW9uXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEB0eXBlIEZ1bmN0aW9uXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmXG4gICAgISh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJyAmJiBpc0Z1bmN0aW9uKHZhbHVlKSkgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAdHlwZSBGdW5jdGlvblxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDggd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgY29uc3RydWN0b3JzLCBhbmRcbiAgLy8gUGhhbnRvbUpTIDEuOSB3aGljaCByZXR1cm5zICdmdW5jdGlvbicgZm9yIGBOb2RlTGlzdGAgaW5zdGFuY2VzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBsb29zZWx5IGJhc2VkIG9uIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBbbGFuZ3VhZ2UgdHlwZV0oaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OCkgb2YgYE9iamVjdGAuXG4gKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTmF0aXZlKEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTmF0aXZlKF8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgcmV0dXJuIHJlSXNOYXRpdmUudGVzdChmdW5jVG9TdHJpbmcuY2FsbCh2YWx1ZSkpO1xuICB9XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgKGlzSG9zdE9iamVjdCh2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yKS50ZXN0KHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW29iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpXTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgcGxhaW4gb2JqZWN0IGZsYXR0ZW5pbmcgaW5oZXJpdGVkIGVudW1lcmFibGVcbiAqIHByb3BlcnRpZXMgb2YgYHZhbHVlYCB0byBvd24gcHJvcGVydGllcyBvZiB0aGUgcGxhaW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBwbGFpbiBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAxIH0sIG5ldyBGb28pO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiB9XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgXy50b1BsYWluT2JqZWN0KG5ldyBGb28pKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIsICdjJzogMyB9XG4gKi9cbmZ1bmN0aW9uIHRvUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3QodmFsdWUsIGtleXNJbih2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IG1lcmdlcyBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMgb2Ygc291cmNlXG4gKiBvYmplY3RzIGludG8gdGhlIGRlc3RpbmF0aW9uIG9iamVjdCwgc2tpcHBpbmcgc291cmNlIHByb3BlcnRpZXMgdGhhdCByZXNvbHZlXG4gKiB0byBgdW5kZWZpbmVkYC4gQXJyYXkgYW5kIHBsYWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgcmVjdXJzaXZlbHkuXG4gKiBPdGhlciBvYmplY3RzIGFuZCB2YWx1ZSB0eXBlcyBhcmUgb3ZlcnJpZGRlbiBieSBhc3NpZ25tZW50LiBTb3VyY2Ugb2JqZWN0c1xuICogYXJlIGFwcGxpZWQgZnJvbSBsZWZ0IHRvIHJpZ2h0LiBTdWJzZXF1ZW50IHNvdXJjZXMgb3ZlcndyaXRlIHByb3BlcnR5XG4gKiBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyBzb3VyY2VzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1c2VycyA9IHtcbiAqICAgJ2RhdGEnOiBbeyAndXNlcic6ICdiYXJuZXknIH0sIHsgJ3VzZXInOiAnZnJlZCcgfV1cbiAqIH07XG4gKlxuICogdmFyIGFnZXMgPSB7XG4gKiAgICdkYXRhJzogW3sgJ2FnZSc6IDM2IH0sIHsgJ2FnZSc6IDQwIH1dXG4gKiB9O1xuICpcbiAqIF8ubWVyZ2UodXNlcnMsIGFnZXMpO1xuICogLy8gPT4geyAnZGF0YSc6IFt7ICd1c2VyJzogJ2Jhcm5leScsICdhZ2UnOiAzNiB9LCB7ICd1c2VyJzogJ2ZyZWQnLCAnYWdlJzogNDAgfV0gfVxuICovXG52YXIgbWVyZ2UgPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgpIHtcbiAgYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC5tZXJnZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCA0LjAuMCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNiBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE2IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwLFxuICAgIE1BWF9JTlRFR0VSID0gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDgsXG4gICAgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgZ2xvYmFsYC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7Li4uKn0gW2FyZ3NdIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3MgPyBhcmdzLmxlbmd0aCA6IDA7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBnbG9iYWwuT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZVxuICogY3JlYXRlZCBmdW5jdGlvbiBhbmQgYXJndW1lbnRzIGZyb20gYHN0YXJ0YCBhbmQgYmV5b25kIHByb3ZpZGVkIGFzIGFuIGFycmF5LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBiYXNlZCBvbiB0aGUgW3Jlc3QgcGFyYW1ldGVyXShodHRwczovL21kbi5pby9yZXN0X3BhcmFtZXRlcnMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHNheSA9IF8ucmVzdChmdW5jdGlvbih3aGF0LCBuYW1lcykge1xuICogICByZXR1cm4gd2hhdCArICcgJyArIF8uaW5pdGlhbChuYW1lcykuam9pbignLCAnKSArXG4gKiAgICAgKF8uc2l6ZShuYW1lcykgPiAxID8gJywgJiAnIDogJycpICsgXy5sYXN0KG5hbWVzKTtcbiAqIH0pO1xuICpcbiAqIHNheSgnaGVsbG8nLCAnZnJlZCcsICdiYXJuZXknLCAncGViYmxlcycpO1xuICogLy8gPT4gJ2hlbGxvIGZyZWQsIGJhcm5leSwgJiBwZWJibGVzJ1xuICovXG5mdW5jdGlvbiByZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHRvSW50ZWdlcihzdGFydCksIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIHN3aXRjaCAoc3RhcnQpIHtcbiAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcnJheSk7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJnc1swXSwgYXJyYXkpO1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFycmF5KTtcbiAgICB9XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgaW5kZXggPSAtMTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSBhcnJheTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDggd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgY29uc3RydWN0b3JzLCBhbmRcbiAgLy8gUGhhbnRvbUpTIDEuOSB3aGljaCByZXR1cm5zICdmdW5jdGlvbicgZm9yIGBOb2RlTGlzdGAgaW5zdGFuY2VzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBsb29zZWx5IGJhc2VkIG9uIFtgVG9JbnRlZ2VyYF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvaW50ZWdlcikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIGludGVnZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9JbnRlZ2VyKDMpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMnKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9JbnRlZ2VyKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICB2YXIgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gKHJlbWFpbmRlciA/IHZhbHVlIC0gcmVtYWluZGVyIDogdmFsdWUpIDogMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMnKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IGlzRnVuY3Rpb24odmFsdWUudmFsdWVPZikgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gucmVzdC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhcHBlbmRQeElmTmVlZGVkO1xuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9cbi8vIDEwMmNkMjkxODk5Zjk5NDJhNzZjNDBhMGU3ODkyMGE2ZmU1NDRkYzEvXG4vLyBzcmMvcmVuZGVyZXJzL2RvbS9zaGFyZWQvQ1NTUHJvcGVydHkuanNcbnZhciBpc1VuaXRsZXNzTnVtYmVyID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdHJ1ZSxcbiAgYm94RmxleDogdHJ1ZSxcbiAgYm94RmxleEdyb3VwOiB0cnVlLFxuICBib3hPcmRpbmFsR3JvdXA6IHRydWUsXG4gIGNvbHVtbkNvdW50OiB0cnVlLFxuICBmbGV4OiB0cnVlLFxuICBmbGV4R3JvdzogdHJ1ZSxcbiAgZmxleFBvc2l0aXZlOiB0cnVlLFxuICBmbGV4U2hyaW5rOiB0cnVlLFxuICBmbGV4TmVnYXRpdmU6IHRydWUsXG4gIGZsZXhPcmRlcjogdHJ1ZSxcbiAgZ3JpZFJvdzogdHJ1ZSxcbiAgZ3JpZENvbHVtbjogdHJ1ZSxcbiAgZm9udFdlaWdodDogdHJ1ZSxcbiAgbGluZUNsYW1wOiB0cnVlLFxuICBsaW5lSGVpZ2h0OiB0cnVlLFxuICBvcGFjaXR5OiB0cnVlLFxuICBvcmRlcjogdHJ1ZSxcbiAgb3JwaGFuczogdHJ1ZSxcbiAgdGFiU2l6ZTogdHJ1ZSxcbiAgd2lkb3dzOiB0cnVlLFxuICB6SW5kZXg6IHRydWUsXG4gIHpvb206IHRydWUsXG5cbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogdHJ1ZSxcbiAgc3RvcE9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXG4gIHN0cm9rZU9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZVdpZHRoOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBhcHBlbmRQeElmTmVlZGVkKHByb3BlcnR5TmFtZSwgdmFsdWUpIHtcbiAgdmFyIG5lZWRzUHhTdWZmaXggPSAhaXNVbml0bGVzc051bWJlcltwcm9wZXJ0eU5hbWVdICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDA7XG4gIHJldHVybiBuZWVkc1B4U3VmZml4ID8gdmFsdWUgKyAncHgnIDogdmFsdWU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL2FwcGVuZC1weC1pZi1uZWVkZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZW5oYW5jZVdpdGhSYWRpdW07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3N0eWxlS2VlcGVyID0gcmVxdWlyZSgnLi9zdHlsZS1rZWVwZXIuanMnKTtcblxudmFyIF9zdHlsZUtlZXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZUtlZXBlcik7XG5cbnZhciBfcmVzb2x2ZVN0eWxlcyA9IHJlcXVpcmUoJy4vcmVzb2x2ZS1zdHlsZXMuanMnKTtcblxudmFyIF9yZXNvbHZlU3R5bGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc29sdmVTdHlsZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9XG5cbnZhciBLRVlTX1RPX0lHTk9SRV9XSEVOX0NPUFlJTkdfUFJPUEVSVElFUyA9IFsnYXJndW1lbnRzJywgJ2NhbGxlZScsICdjYWxsZXInLCAnbGVuZ3RoJywgJ25hbWUnLCAncHJvdG90eXBlJywgJ3R5cGUnXTtcblxuZnVuY3Rpb24gY29weVByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQpIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoS0VZU19UT19JR05PUkVfV0hFTl9DT1BZSU5HX1BST1BFUlRJRVMuaW5kZXhPZihrZXkpIDwgMCAmJiAhdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuaGFuY2VXaXRoUmFkaXVtKGNvbmZpZ09yQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzczIsIF90ZW1wO1xuXG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICBpZiAodHlwZW9mIGNvbmZpZ09yQ29tcG9zZWRDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgX3JldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmV3Q29uZmlnID0gX2V4dGVuZHMoe30sIGNvbmZpZywgY29uZmlnT3JDb21wb3NlZENvbXBvbmVudCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2OiBmdW5jdGlvbiB2KGNvbmZpZ09yQ29tcG9uZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGVuaGFuY2VXaXRoUmFkaXVtKGNvbmZpZ09yQ29tcG9uZW50LCBuZXdDb25maWcpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBpZiAoKHR5cGVvZiBfcmV0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihfcmV0KSkgPT09IFwib2JqZWN0XCIpIHJldHVybiBfcmV0LnY7XG4gIH1cblxuICB2YXIgY29tcG9uZW50ID0gY29uZmlnT3JDb21wb3NlZENvbXBvbmVudDtcbiAgdmFyIENvbXBvc2VkQ29tcG9uZW50ID0gY29tcG9uZW50O1xuXG4gIC8vIEhhbmRsZSBzdGF0ZWxlc3MgY29tcG9uZW50c1xuICBpZiAoIUNvbXBvc2VkQ29tcG9uZW50LnJlbmRlciAmJiAhQ29tcG9zZWRDb21wb25lbnQucHJvdG90eXBlLnJlbmRlcikge1xuICAgIENvbXBvc2VkQ29tcG9uZW50ID0gKGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoX2NsYXNzLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gX2NsYXNzKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2NsYXNzKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgX2NsYXNzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfY2xhc3M7XG4gICAgfSkoX3JlYWN0LkNvbXBvbmVudCk7XG4gICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBjb21wb25lbnQuZGlzcGxheU5hbWUgfHwgY29tcG9uZW50Lm5hbWU7XG4gIH1cblxuICB2YXIgUmFkaXVtRW5oYW5jZXIgPSAoX3RlbXAgPSBfY2xhc3MyID0gKGZ1bmN0aW9uIChfQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUmFkaXVtRW5oYW5jZXIsIF9Db21wb3NlZENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBSYWRpdW1FbmhhbmNlcigpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYWRpdW1FbmhhbmNlcik7XG5cbiAgICAgIHZhciBfdGhpczIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9zZWRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgIF90aGlzMi5zdGF0ZSA9IF90aGlzMi5zdGF0ZSB8fCB7fTtcbiAgICAgIF90aGlzMi5zdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZSA9IHt9O1xuICAgICAgX3RoaXMyLl9yYWRpdW1Jc01vdW50ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIF90aGlzMjtcbiAgICB9XG5cbiAgICBSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmIChfQ29tcG9zZWRDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG4gICAgICAgIF9Db21wb3NlZENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmFkaXVtSXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLl9yYWRpdW1Nb3VzZVVwTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fcmFkaXVtTW91c2VVcExpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmFkaXVtTWVkaWFRdWVyeUxpc3RlbmVyc0J5UXVlcnkpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fcmFkaXVtTWVkaWFRdWVyeUxpc3RlbmVyc0J5UXVlcnkpLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgICAgdGhpcy5fcmFkaXVtTWVkaWFRdWVyeUxpc3RlbmVyc0J5UXVlcnlbcXVlcnldLnJlbW92ZSgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgUmFkaXVtRW5oYW5jZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHZhciBzdXBlckNoaWxkQ29udGV4dCA9IF9Db21wb3NlZENvbXBvbmVudC5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID8gX0NvbXBvc2VkQ29tcG9uZW50LnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzKSA6IHt9O1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMucmFkaXVtQ29uZmlnKSB7XG4gICAgICAgIHJldHVybiBzdXBlckNoaWxkQ29udGV4dDtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0NvbnRleHQgPSBfZXh0ZW5kcyh7fSwgc3VwZXJDaGlsZENvbnRleHQpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5yYWRpdW1Db25maWcpIHtcbiAgICAgICAgbmV3Q29udGV4dC5fcmFkaXVtQ29uZmlnID0gdGhpcy5wcm9wcy5yYWRpdW1Db25maWc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdDb250ZXh0O1xuICAgIH07XG5cbiAgICBSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHJlbmRlcmVkRWxlbWVudCA9IF9Db21wb3NlZENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICB2YXIgY3VycmVudENvbmZpZyA9IHRoaXMucHJvcHMucmFkaXVtQ29uZmlnIHx8IHRoaXMuY29udGV4dC5fcmFkaXVtQ29uZmlnIHx8IGNvbmZpZztcblxuICAgICAgaWYgKGNvbmZpZyAmJiBjdXJyZW50Q29uZmlnICE9PSBjb25maWcpIHtcbiAgICAgICAgY3VycmVudENvbmZpZyA9IF9leHRlbmRzKHt9LCBjb25maWcsIGN1cnJlbnRDb25maWcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKDAsIF9yZXNvbHZlU3R5bGVzMi5kZWZhdWx0KSh0aGlzLCByZW5kZXJlZEVsZW1lbnQsIGN1cnJlbnRDb25maWcpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUmFkaXVtRW5oYW5jZXI7XG4gIH0pKENvbXBvc2VkQ29tcG9uZW50KSwgX2NsYXNzMi5faXNSYWRpdW1FbmhhbmNlZCA9IHRydWUsIF90ZW1wKTtcblxuICAvLyBDbGFzcyBpbmhlcml0YW5jZSB1c2VzIE9iamVjdC5jcmVhdGUgYW5kIGJlY2F1c2Ugb2YgX19wcm90b19fIGlzc3Vlc1xuICAvLyB3aXRoIElFIDwxMCBhbnkgc3RhdGljIHByb3BlcnRpZXMgb2YgdGhlIHN1cGVyY2xhc3MgYXJlbid0IGluaGVyaXRlZCBhbmRcbiAgLy8gc28gbmVlZCB0byBiZSBtYW51YWxseSBwb3B1bGF0ZWQuXG4gIC8vIFNlZSBodHRwOi8vYmFiZWxqcy5pby9kb2NzL2FkdmFuY2VkL2NhdmVhdHMvI2NsYXNzZXMtMTAtYW5kLWJlbG93LVxuXG4gIGNvcHlQcm9wZXJ0aWVzKGNvbXBvbmVudCwgUmFkaXVtRW5oYW5jZXIpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBhbHNvIGZpeGVzIFJlYWN0IEhvdCBMb2FkZXIgYnkgZXhwb3NpbmcgdGhlIG9yaWdpbmFsIGNvbXBvbmVudHMgdG9wXG4gICAgLy8gbGV2ZWwgcHJvdG90eXBlIG1ldGhvZHMgb24gdGhlIFJhZGl1bSBlbmhhbmNlZCBwcm90b3R5cGUgYXMgZGlzY3Vzc2VkIGluXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0Zvcm1pZGFibGVMYWJzL3JhZGl1bS9pc3N1ZXMvMjE5LlxuICAgIGNvcHlQcm9wZXJ0aWVzKENvbXBvc2VkQ29tcG9uZW50LnByb3RvdHlwZSwgUmFkaXVtRW5oYW5jZXIucHJvdG90eXBlKTtcbiAgfVxuXG4gIGlmIChSYWRpdW1FbmhhbmNlci5wcm9wVHlwZXMgJiYgUmFkaXVtRW5oYW5jZXIucHJvcFR5cGVzLnN0eWxlKSB7XG4gICAgUmFkaXVtRW5oYW5jZXIucHJvcFR5cGVzID0gX2V4dGVuZHMoe30sIFJhZGl1bUVuaGFuY2VyLnByb3BUeXBlcywge1xuICAgICAgc3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QuUHJvcFR5cGVzLmFycmF5LCBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdF0pXG4gICAgfSk7XG4gIH1cblxuICBSYWRpdW1FbmhhbmNlci5kaXNwbGF5TmFtZSA9IGNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBjb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICBSYWRpdW1FbmhhbmNlci5jb250ZXh0VHlwZXMgPSBfZXh0ZW5kcyh7fSwgUmFkaXVtRW5oYW5jZXIuY29udGV4dFR5cGVzLCB7XG4gICAgX3JhZGl1bUNvbmZpZzogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgX3JhZGl1bVN0eWxlS2VlcGVyOiBfcmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoX3N0eWxlS2VlcGVyMi5kZWZhdWx0KVxuICB9KTtcblxuICBSYWRpdW1FbmhhbmNlci5jaGlsZENvbnRleHRUeXBlcyA9IF9leHRlbmRzKHt9LCBSYWRpdW1FbmhhbmNlci5jaGlsZENvbnRleHRUeXBlcywge1xuICAgIF9yYWRpdW1Db25maWc6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIF9yYWRpdW1TdHlsZUtlZXBlcjogX3JlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKF9zdHlsZUtlZXBlcjIuZGVmYXVsdClcbiAgfSk7XG5cbiAgcmV0dXJuIFJhZGl1bUVuaGFuY2VyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9lbmhhbmNlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBnZXRTdGF0ZUtleSA9IGZ1bmN0aW9uIGdldFN0YXRlS2V5KGVsZW1lbnRLZXkpIHtcbiAgcmV0dXJuIGVsZW1lbnRLZXkgPT09IG51bGwgfHwgZWxlbWVudEtleSA9PT0gdW5kZWZpbmVkID8gJ21haW4nIDogZWxlbWVudEtleS50b1N0cmluZygpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0U3RhdGVLZXk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL2dldC1zdGF0ZS1rZXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldFN0YXRlS2V5ID0gcmVxdWlyZSgnLi9nZXQtc3RhdGUta2V5Jyk7XG5cbnZhciBfZ2V0U3RhdGVLZXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0U3RhdGVLZXkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2V0U3RhdGUgPSBmdW5jdGlvbiBnZXRTdGF0ZShzdGF0ZSwgZWxlbWVudEtleSwgdmFsdWUpIHtcbiAgdmFyIGtleSA9ICgwLCBfZ2V0U3RhdGVLZXkyLmRlZmF1bHQpKGVsZW1lbnRLZXkpO1xuXG4gIHJldHVybiAhIXN0YXRlICYmICEhc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGUgJiYgISFzdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZVtrZXldICYmIHN0YXRlLl9yYWRpdW1TdHlsZVN0YXRlW2tleV1bdmFsdWVdO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0U3RhdGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL2dldC1zdGF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoYXNoO1xuXG4vLyBhIHNpbXBsZSBkamIyIGhhc2ggYmFzZWQgb24gaGFzaC1zdHJpbmc6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vTWF0dGhld0Jhcmtlci9oYXNoLXN0cmluZy9ibG9iL21hc3Rlci9zb3VyY2UvaGFzaC1zdHJpbmcuanNcbi8vIHJldHVybnMgYSBoZXgtZW5jb2RlZCBoYXNoXG5mdW5jdGlvbiBoYXNoKHRleHQpIHtcbiAgaWYgKCF0ZXh0KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIGhhc2hWYWx1ZSA9IDUzODE7XG4gIHZhciBpbmRleCA9IHRleHQubGVuZ3RoIC0gMTtcblxuICB3aGlsZSAoaW5kZXgpIHtcbiAgICBoYXNoVmFsdWUgPSBoYXNoVmFsdWUgKiAzMyBeIHRleHQuY2hhckNvZGVBdChpbmRleCk7XG4gICAgaW5kZXggLT0gMTtcbiAgfVxuXG4gIHJldHVybiAoaGFzaFZhbHVlID4+PiAwKS50b1N0cmluZygxNik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL2hhc2guanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2VuaGFuY2VyID0gcmVxdWlyZSgnLi9lbmhhbmNlcicpO1xuXG52YXIgX2VuaGFuY2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VuaGFuY2VyKTtcblxudmFyIF9wbHVnaW5zID0gcmVxdWlyZSgnLi9wbHVnaW5zJyk7XG5cbnZhciBfcGx1Z2luczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zKTtcblxudmFyIF9zdHlsZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9zdHlsZScpO1xuXG52YXIgX3N0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlKTtcblxudmFyIF9zdHlsZVJvb3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvc3R5bGUtcm9vdCcpO1xuXG52YXIgX3N0eWxlUm9vdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZVJvb3QpO1xuXG52YXIgX2dldFN0YXRlID0gcmVxdWlyZSgnLi9nZXQtc3RhdGUnKTtcblxudmFyIF9nZXRTdGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRTdGF0ZSk7XG5cbnZhciBfa2V5ZnJhbWVzID0gcmVxdWlyZSgnLi9rZXlmcmFtZXMnKTtcblxudmFyIF9rZXlmcmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5ZnJhbWVzKTtcblxudmFyIF9yZXNvbHZlU3R5bGVzID0gcmVxdWlyZSgnLi9yZXNvbHZlLXN0eWxlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBSYWRpdW0oQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuICgwLCBfZW5oYW5jZXIyLmRlZmF1bHQpKENvbXBvc2VkQ29tcG9uZW50KTtcbn1cblxuUmFkaXVtLlBsdWdpbnMgPSBfcGx1Z2luczIuZGVmYXVsdDtcblJhZGl1bS5TdHlsZSA9IF9zdHlsZTIuZGVmYXVsdDtcblJhZGl1bS5TdHlsZVJvb3QgPSBfc3R5bGVSb290Mi5kZWZhdWx0O1xuUmFkaXVtLmdldFN0YXRlID0gX2dldFN0YXRlMi5kZWZhdWx0O1xuUmFkaXVtLmtleWZyYW1lcyA9IF9rZXlmcmFtZXMyLmRlZmF1bHQ7XG5SYWRpdW0uX19jbGVhclN0YXRlRm9yVGVzdHMgPSBfcmVzb2x2ZVN0eWxlcy5fX2NsZWFyU3RhdGVGb3JUZXN0cztcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmFkaXVtO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBrZXlmcmFtZXM7XG5cbnZhciBfY3NzUnVsZVNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9jc3MtcnVsZS1zZXQtdG8tc3RyaW5nJyk7XG5cbnZhciBfY3NzUnVsZVNldFRvU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc1J1bGVTZXRUb1N0cmluZyk7XG5cbnZhciBfaGFzaCA9IHJlcXVpcmUoJy4vaGFzaCcpO1xuXG52YXIgX2hhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzaCk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGtleWZyYW1lcyhrZXlmcmFtZVJ1bGVzLCBuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgX19yYWRpdW1LZXlmcmFtZXM6IHRydWUsXG4gICAgX19wcm9jZXNzOiBmdW5jdGlvbiBfX3Byb2Nlc3ModXNlckFnZW50KSB7XG4gICAgICB2YXIga2V5ZnJhbWVzUHJlZml4ZWQgPSAoMCwgX3ByZWZpeGVyLmdldFByZWZpeGVkS2V5ZnJhbWVzKSh1c2VyQWdlbnQpO1xuICAgICAgdmFyIHJ1bGVzID0gT2JqZWN0LmtleXMoa2V5ZnJhbWVSdWxlcykubWFwKGZ1bmN0aW9uIChwZXJjZW50YWdlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX2Nzc1J1bGVTZXRUb1N0cmluZzIuZGVmYXVsdCkocGVyY2VudGFnZSwga2V5ZnJhbWVSdWxlc1twZXJjZW50YWdlXSwgdXNlckFnZW50KTtcbiAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgdmFyIGFuaW1hdGlvbk5hbWUgPSAobmFtZSA/IG5hbWUgKyAnLScgOiAnJykgKyAncmFkaXVtLWFuaW1hdGlvbi0nICsgKDAsIF9oYXNoMi5kZWZhdWx0KShydWxlcyk7XG4gICAgICB2YXIgY3NzID0gJ0AnICsga2V5ZnJhbWVzUHJlZml4ZWQgKyAnICcgKyBhbmltYXRpb25OYW1lICsgJyB7XFxuJyArIHJ1bGVzICsgJ1xcbn1cXG4nO1xuICAgICAgcmV0dXJuIHsgY3NzOiBjc3MsIGFuaW1hdGlvbk5hbWU6IGFuaW1hdGlvbk5hbWUgfTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL2tleWZyYW1lcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IG1hcE9iamVjdDtcbmZ1bmN0aW9uIG1hcE9iamVjdChvYmplY3QsIG1hcHBlcikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgcmVzdWx0W2tleV0gPSBtYXBwZXIob2JqZWN0W2tleV0sIGtleSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9tYXAtb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNOZXN0ZWRTdHlsZSA9IGlzTmVzdGVkU3R5bGU7XG5leHBvcnRzLm1lcmdlU3R5bGVzID0gbWVyZ2VTdHlsZXM7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2lzLXBsYWluLW9iamVjdCcpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQbGFpbk9iamVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9XG5cbmZ1bmN0aW9uIGlzTmVzdGVkU3R5bGUodmFsdWUpIHtcbiAgLy8gRG9uJ3QgbWVyZ2Ugb2JqZWN0cyBvdmVycmlkaW5nIHRvU3RyaW5nLCBzaW5jZSB0aGV5IHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgLy8gdG8gc3RyaW5nIHZhbHVlcy5cbiAgcmV0dXJuICgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlLnRvU3RyaW5nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xufVxuXG4vLyBNZXJnZSBzdHlsZSBvYmplY3RzLiBEZWVwIG1lcmdlIHBsYWluIG9iamVjdCB2YWx1ZXMuXG5mdW5jdGlvbiBtZXJnZVN0eWxlcyhzdHlsZXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIHN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSkge1xuICAgIGlmICghc3R5bGUgfHwgKHR5cGVvZiBzdHlsZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yoc3R5bGUpKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZSkpIHtcbiAgICAgIHN0eWxlID0gbWVyZ2VTdHlsZXMoc3R5bGUpO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChpc05lc3RlZFN0eWxlKHN0eWxlW2tleV0pICYmIGlzTmVzdGVkU3R5bGUocmVzdWx0W2tleV0pKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2VTdHlsZXMoW3Jlc3VsdFtrZXldLCBzdHlsZVtrZXldXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRba2V5XSA9IHN0eWxlW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9tZXJnZS1zdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XG5cbnZhciBfY3NzUnVsZVNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9jc3MtcnVsZS1zZXQtdG8tc3RyaW5nJyk7XG5cbnZhciBfY3NzUnVsZVNldFRvU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc1J1bGVTZXRUb1N0cmluZyk7XG5cbnZhciBfZ2V0U3RhdGUgPSByZXF1aXJlKCcuL2dldC1zdGF0ZScpO1xuXG52YXIgX2dldFN0YXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFN0YXRlKTtcblxudmFyIF9nZXRTdGF0ZUtleSA9IHJlcXVpcmUoJy4vZ2V0LXN0YXRlLWtleScpO1xuXG52YXIgX2dldFN0YXRlS2V5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFN0YXRlS2V5KTtcblxudmFyIF9tZXJnZVN0eWxlcyA9IHJlcXVpcmUoJy4vbWVyZ2Utc3R5bGVzJyk7XG5cbnZhciBfcGx1Z2lucyA9IHJlcXVpcmUoJy4vcGx1Z2lucy8nKTtcblxudmFyIF9wbHVnaW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsdWdpbnMpO1xuXG52YXIgX2V4ZW52ID0gcmVxdWlyZSgnZXhlbnYnKTtcblxudmFyIF9leGVudjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGVudik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH1cblxudmFyIERFRkFVTFRfQ09ORklHID0ge1xuICBwbHVnaW5zOiBbX3BsdWdpbnMyLmRlZmF1bHQubWVyZ2VTdHlsZUFycmF5LCBfcGx1Z2luczIuZGVmYXVsdC5jaGVja1Byb3BzLCBfcGx1Z2luczIuZGVmYXVsdC5yZXNvbHZlTWVkaWFRdWVyaWVzLCBfcGx1Z2luczIuZGVmYXVsdC5yZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXMsIF9wbHVnaW5zMi5kZWZhdWx0LmtleWZyYW1lcywgX3BsdWdpbnMyLmRlZmF1bHQucHJlZml4LCBfcGx1Z2luczIuZGVmYXVsdC5jaGVja1Byb3BzXVxufTtcblxuLy8gR3Jvc3NcbnZhciBnbG9iYWxTdGF0ZSA9IHt9O1xuXG4vLyBEZWNsYXJlIGVhcmx5IGZvciByZWN1cnNpdmUgaGVscGVycy5cbnZhciByZXNvbHZlU3R5bGVzID0gbnVsbDtcblxudmFyIF9zaG91bGRSZXNvbHZlU3R5bGVzID0gZnVuY3Rpb24gX3Nob3VsZFJlc29sdmVTdHlsZXMoY29tcG9uZW50KSB7XG4gIHJldHVybiBjb21wb25lbnQudHlwZSAmJiAhY29tcG9uZW50LnR5cGUuX2lzUmFkaXVtRW5oYW5jZWQ7XG59O1xuXG52YXIgX3Jlc29sdmVDaGlsZHJlbiA9IGZ1bmN0aW9uIF9yZXNvbHZlQ2hpbGRyZW4oX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICB2YXIgY29tcG9uZW50ID0gX3JlZi5jb21wb25lbnQ7XG4gIHZhciBjb25maWcgPSBfcmVmLmNvbmZpZztcbiAgdmFyIGV4aXN0aW5nS2V5TWFwID0gX3JlZi5leGlzdGluZ0tleU1hcDtcblxuICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuVHlwZSA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY2hpbGRyZW4pO1xuXG4gIGlmIChjaGlsZHJlblR5cGUgPT09ICdzdHJpbmcnIHx8IGNoaWxkcmVuVHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBEb24ndCBkbyBhbnl0aGluZyB3aXRoIGEgc2luZ2xlIHByaW1pdGl2ZSBjaGlsZFxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIGlmIChjaGlsZHJlblR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBXcmFwIHRoZSBmdW5jdGlvbiwgcmVzb2x2aW5nIHN0eWxlcyBvbiB0aGUgcmVzdWx0XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBjaGlsZHJlbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlU3R5bGVzKGNvbXBvbmVudCwgcmVzdWx0LCBjb25maWcsIGV4aXN0aW5nS2V5TWFwLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID09PSAxICYmIGNoaWxkcmVuLnR5cGUpIHtcbiAgICAvLyBJZiBhIFJlYWN0IEVsZW1lbnQgaXMgYW4gb25seSBjaGlsZCwgZG9uJ3Qgd3JhcCBpdCBpbiBhbiBhcnJheSBmb3JcbiAgICAvLyBSZWFjdC5DaGlsZHJlbi5tYXAoKSBmb3IgUmVhY3QuQ2hpbGRyZW4ub25seSgpIGNvbXBhdGliaWxpdHkuXG4gICAgdmFyIG9ubHlDaGlsZCA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICByZXR1cm4gcmVzb2x2ZVN0eWxlcyhjb21wb25lbnQsIG9ubHlDaGlsZCwgY29uZmlnLCBleGlzdGluZ0tleU1hcCwgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybiByZXNvbHZlU3R5bGVzKGNvbXBvbmVudCwgY2hpbGQsIGNvbmZpZywgZXhpc3RpbmdLZXlNYXAsIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG59O1xuXG4vLyBSZWN1cnNlIG92ZXIgcHJvcHMsIGp1c3QgbGlrZSBjaGlsZHJlblxudmFyIF9yZXNvbHZlUHJvcHMgPSBmdW5jdGlvbiBfcmVzb2x2ZVByb3BzKF9yZWYyKSB7XG4gIHZhciBjb21wb25lbnQgPSBfcmVmMi5jb21wb25lbnQ7XG4gIHZhciBjb25maWcgPSBfcmVmMi5jb25maWc7XG4gIHZhciBleGlzdGluZ0tleU1hcCA9IF9yZWYyLmV4aXN0aW5nS2V5TWFwO1xuICB2YXIgcHJvcHMgPSBfcmVmMi5wcm9wcztcblxuICB2YXIgbmV3UHJvcHMgPSBwcm9wcztcblxuICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIC8vIFdlIGFscmVhZHkgcmVjdXJzZSBvdmVyIGNoaWxkcmVuIGFib3ZlXG4gICAgaWYgKHByb3AgPT09ICdjaGlsZHJlbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcF07XG4gICAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICBuZXdQcm9wcyA9IF9leHRlbmRzKHt9LCBuZXdQcm9wcyk7XG4gICAgICBuZXdQcm9wc1twcm9wXSA9IHJlc29sdmVTdHlsZXMoY29tcG9uZW50LCBwcm9wVmFsdWUsIGNvbmZpZywgZXhpc3RpbmdLZXlNYXAsIHRydWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5ld1Byb3BzO1xufTtcblxudmFyIF9idWlsZEdldEtleSA9IGZ1bmN0aW9uIF9idWlsZEdldEtleShfcmVmMykge1xuICB2YXIgY29tcG9uZW50TmFtZSA9IF9yZWYzLmNvbXBvbmVudE5hbWU7XG4gIHZhciBleGlzdGluZ0tleU1hcCA9IF9yZWYzLmV4aXN0aW5nS2V5TWFwO1xuICB2YXIgcmVuZGVyZWRFbGVtZW50ID0gX3JlZjMucmVuZGVyZWRFbGVtZW50O1xuXG4gIC8vIFdlIG5lZWQgYSB1bmlxdWUga2V5IHRvIGNvcnJlbGF0ZSBzdGF0ZSBjaGFuZ2VzIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uXG4gIC8vIHdpdGggdGhlIHJlbmRlcmVkIGVsZW1lbnQsIHNvIHdlIGtub3cgdG8gYXBwbHkgdGhlIHByb3BlciBpbnRlcmFjdGl2ZVxuICAvLyBzdHlsZXMuXG4gIHZhciBvcmlnaW5hbEtleSA9IHR5cGVvZiByZW5kZXJlZEVsZW1lbnQucmVmID09PSAnc3RyaW5nJyA/IHJlbmRlcmVkRWxlbWVudC5yZWYgOiByZW5kZXJlZEVsZW1lbnQua2V5O1xuICB2YXIga2V5ID0gKDAsIF9nZXRTdGF0ZUtleTIuZGVmYXVsdCkob3JpZ2luYWxLZXkpO1xuXG4gIHZhciBhbHJlYWR5R290S2V5ID0gZmFsc2U7XG4gIHZhciBnZXRLZXkgPSBmdW5jdGlvbiBnZXRLZXkoKSB7XG4gICAgaWYgKGFscmVhZHlHb3RLZXkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuXG4gICAgYWxyZWFkeUdvdEtleSA9IHRydWU7XG5cbiAgICBpZiAoZXhpc3RpbmdLZXlNYXBba2V5XSkge1xuICAgICAgdmFyIGVsZW1lbnROYW1lID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKHR5cGVvZiByZW5kZXJlZEVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudE5hbWUgPSByZW5kZXJlZEVsZW1lbnQudHlwZTtcbiAgICAgIH0gZWxzZSBpZiAocmVuZGVyZWRFbGVtZW50LnR5cGUuY29uc3RydWN0b3IpIHtcbiAgICAgICAgZWxlbWVudE5hbWUgPSByZW5kZXJlZEVsZW1lbnQudHlwZS5jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCByZW5kZXJlZEVsZW1lbnQudHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhZGl1bSByZXF1aXJlcyBlYWNoIGVsZW1lbnQgd2l0aCBpbnRlcmFjdGl2ZSBzdHlsZXMgdG8gaGF2ZSBhIHVuaXF1ZSAnICsgJ2tleSwgc2V0IHVzaW5nIGVpdGhlciB0aGUgcmVmIG9yIGtleSBwcm9wLiAnICsgKG9yaWdpbmFsS2V5ID8gJ0tleSBcIicgKyBvcmlnaW5hbEtleSArICdcIiBpcyBhIGR1cGxpY2F0ZS4nIDogJ011bHRpcGxlIGVsZW1lbnRzIGhhdmUgbm8ga2V5IHNwZWNpZmllZC4nKSArICcgJyArICdDb21wb25lbnQ6IFwiJyArIGNvbXBvbmVudE5hbWUgKyAnXCIuICcgKyAoZWxlbWVudE5hbWUgPyAnRWxlbWVudDogXCInICsgZWxlbWVudE5hbWUgKyAnXCIuJyA6ICcnKSk7XG4gICAgfVxuXG4gICAgZXhpc3RpbmdLZXlNYXBba2V5XSA9IHRydWU7XG5cbiAgICByZXR1cm4ga2V5O1xuICB9O1xuXG4gIHJldHVybiBnZXRLZXk7XG59O1xuXG52YXIgX3NldFN0eWxlU3RhdGUgPSBmdW5jdGlvbiBfc2V0U3R5bGVTdGF0ZShjb21wb25lbnQsIGtleSwgc3RhdGVLZXksIHZhbHVlKSB7XG4gIGlmICghY29tcG9uZW50Ll9yYWRpdW1Jc01vdW50ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZXhpc3RpbmcgPSBjb21wb25lbnQuX2xhc3RSYWRpdW1TdGF0ZSB8fCBjb21wb25lbnQuc3RhdGUgJiYgY29tcG9uZW50LnN0YXRlLl9yYWRpdW1TdHlsZVN0YXRlIHx8IHt9O1xuXG4gIHZhciBzdGF0ZSA9IHsgX3JhZGl1bVN0eWxlU3RhdGU6IF9leHRlbmRzKHt9LCBleGlzdGluZykgfTtcbiAgc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGVba2V5XSA9IF9leHRlbmRzKHt9LCBzdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZVtrZXldKTtcbiAgc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGVba2V5XVtzdGF0ZUtleV0gPSB2YWx1ZTtcblxuICBjb21wb25lbnQuX2xhc3RSYWRpdW1TdGF0ZSA9IHN0YXRlLl9yYWRpdW1TdHlsZVN0YXRlO1xuICBjb21wb25lbnQuc2V0U3RhdGUoc3RhdGUpO1xufTtcblxudmFyIF9ydW5QbHVnaW5zID0gZnVuY3Rpb24gX3J1blBsdWdpbnMoX3JlZjQpIHtcbiAgdmFyIGNvbXBvbmVudCA9IF9yZWY0LmNvbXBvbmVudDtcbiAgdmFyIGNvbmZpZyA9IF9yZWY0LmNvbmZpZztcbiAgdmFyIGV4aXN0aW5nS2V5TWFwID0gX3JlZjQuZXhpc3RpbmdLZXlNYXA7XG4gIHZhciBwcm9wcyA9IF9yZWY0LnByb3BzO1xuICB2YXIgcmVuZGVyZWRFbGVtZW50ID0gX3JlZjQucmVuZGVyZWRFbGVtZW50O1xuXG4gIC8vIERvbid0IHJ1biBwbHVnaW5zIGlmIHJlbmRlcmVkRWxlbWVudCBpcyBub3QgYSBzaW1wbGUgUmVhY3RET01FbGVtZW50IG9yIGhhc1xuICAvLyBubyBzdHlsZS5cbiAgaWYgKCFfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQocmVuZGVyZWRFbGVtZW50KSB8fCB0eXBlb2YgcmVuZGVyZWRFbGVtZW50LnR5cGUgIT09ICdzdHJpbmcnIHx8ICFwcm9wcy5zdHlsZSkge1xuICAgIHJldHVybiBwcm9wcztcbiAgfVxuXG4gIHZhciBuZXdQcm9wcyA9IHByb3BzO1xuXG4gIHZhciBwbHVnaW5zID0gY29uZmlnLnBsdWdpbnMgfHwgREVGQVVMVF9DT05GSUcucGx1Z2lucztcblxuICB2YXIgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgdmFyIGdldEtleSA9IF9idWlsZEdldEtleSh7IHJlbmRlcmVkRWxlbWVudDogcmVuZGVyZWRFbGVtZW50LCBleGlzdGluZ0tleU1hcDogZXhpc3RpbmdLZXlNYXAsIGNvbXBvbmVudE5hbWU6IGNvbXBvbmVudE5hbWUgfSk7XG4gIHZhciBnZXRDb21wb25lbnRGaWVsZCA9IGZ1bmN0aW9uIGdldENvbXBvbmVudEZpZWxkKGtleSkge1xuICAgIHJldHVybiBjb21wb25lbnRba2V5XTtcbiAgfTtcbiAgdmFyIGdldEdsb2JhbFN0YXRlID0gZnVuY3Rpb24gZ2V0R2xvYmFsU3RhdGUoa2V5KSB7XG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlW2tleV07XG4gIH07XG4gIHZhciBjb21wb25lbnRHZXRTdGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudEdldFN0YXRlKHN0YXRlS2V5LCBlbGVtZW50S2V5KSB7XG4gICAgcmV0dXJuICgwLCBfZ2V0U3RhdGUyLmRlZmF1bHQpKGNvbXBvbmVudC5zdGF0ZSwgZWxlbWVudEtleSB8fCBnZXRLZXkoKSwgc3RhdGVLZXkpO1xuICB9O1xuICB2YXIgc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZUtleSwgdmFsdWUsIGVsZW1lbnRLZXkpIHtcbiAgICByZXR1cm4gX3NldFN0eWxlU3RhdGUoY29tcG9uZW50LCBlbGVtZW50S2V5IHx8IGdldEtleSgpLCBzdGF0ZUtleSwgdmFsdWUpO1xuICB9O1xuXG4gIHZhciBhZGRDU1MgPSBmdW5jdGlvbiBhZGRDU1MoY3NzKSB7XG4gICAgdmFyIHN0eWxlS2VlcGVyID0gY29tcG9uZW50Ll9yYWRpdW1TdHlsZUtlZXBlciB8fCBjb21wb25lbnQuY29udGV4dC5fcmFkaXVtU3R5bGVLZWVwZXI7XG4gICAgaWYgKCFzdHlsZUtlZXBlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUbyB1c2UgcGx1Z2lucyByZXF1aXJpbmcgYGFkZENTU2AgKGUuZy4ga2V5ZnJhbWVzLCBtZWRpYSBxdWVyaWVzKSwgJyArICdwbGVhc2Ugd3JhcCB5b3VyIGFwcGxpY2F0aW9uIGluIHRoZSBTdHlsZVJvb3QgY29tcG9uZW50LiBDb21wb25lbnQgJyArICduYW1lOiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVLZWVwZXIuYWRkQ1NTKGNzcyk7XG4gIH07XG5cbiAgdmFyIG5ld1N0eWxlID0gcHJvcHMuc3R5bGU7XG5cbiAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICB2YXIgcmVzdWx0ID0gcGx1Z2luKHtcbiAgICAgIEV4ZWN1dGlvbkVudmlyb25tZW50OiBfZXhlbnYyLmRlZmF1bHQsXG4gICAgICBhZGRDU1M6IGFkZENTUyxcbiAgICAgIGNvbXBvbmVudE5hbWU6IGNvbXBvbmVudE5hbWUsXG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIGNzc1J1bGVTZXRUb1N0cmluZzogX2Nzc1J1bGVTZXRUb1N0cmluZzIuZGVmYXVsdCxcbiAgICAgIGdldENvbXBvbmVudEZpZWxkOiBnZXRDb21wb25lbnRGaWVsZCxcbiAgICAgIGdldEdsb2JhbFN0YXRlOiBnZXRHbG9iYWxTdGF0ZSxcbiAgICAgIGdldFN0YXRlOiBjb21wb25lbnRHZXRTdGF0ZSxcbiAgICAgIG1lcmdlU3R5bGVzOiBfbWVyZ2VTdHlsZXMubWVyZ2VTdHlsZXMsXG4gICAgICBwcm9wczogbmV3UHJvcHMsXG4gICAgICBzZXRTdGF0ZTogc2V0U3RhdGUsXG4gICAgICBpc05lc3RlZFN0eWxlOiBfbWVyZ2VTdHlsZXMuaXNOZXN0ZWRTdHlsZSxcbiAgICAgIHN0eWxlOiBuZXdTdHlsZVxuICAgIH0pIHx8IHt9O1xuXG4gICAgbmV3U3R5bGUgPSByZXN1bHQuc3R5bGUgfHwgbmV3U3R5bGU7XG5cbiAgICBuZXdQcm9wcyA9IHJlc3VsdC5wcm9wcyAmJiBPYmplY3Qua2V5cyhyZXN1bHQucHJvcHMpLmxlbmd0aCA/IF9leHRlbmRzKHt9LCBuZXdQcm9wcywgcmVzdWx0LnByb3BzKSA6IG5ld1Byb3BzO1xuXG4gICAgdmFyIG5ld0NvbXBvbmVudEZpZWxkcyA9IHJlc3VsdC5jb21wb25lbnRGaWVsZHMgfHwge307XG4gICAgT2JqZWN0LmtleXMobmV3Q29tcG9uZW50RmllbGRzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZE5hbWUpIHtcbiAgICAgIGNvbXBvbmVudFtmaWVsZE5hbWVdID0gbmV3Q29tcG9uZW50RmllbGRzW2ZpZWxkTmFtZV07XG4gICAgfSk7XG5cbiAgICB2YXIgbmV3R2xvYmFsU3RhdGUgPSByZXN1bHQuZ2xvYmFsU3RhdGUgfHwge307XG4gICAgT2JqZWN0LmtleXMobmV3R2xvYmFsU3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZ2xvYmFsU3RhdGVba2V5XSA9IG5ld0dsb2JhbFN0YXRlW2tleV07XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmIChuZXdTdHlsZSAhPT0gcHJvcHMuc3R5bGUpIHtcbiAgICBuZXdQcm9wcyA9IF9leHRlbmRzKHt9LCBuZXdQcm9wcywgeyBzdHlsZTogbmV3U3R5bGUgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG4vLyBXcmFwcGVyIGFyb3VuZCBSZWFjdC5jbG9uZUVsZW1lbnQuIFRvIGF2b2lkIHByb2Nlc3NpbmcgdGhlIHNhbWUgZWxlbWVudFxuLy8gdHdpY2UsIHdoZW5ldmVyIHdlIGNsb25lIGFuIGVsZW1lbnQgYWRkIGEgc3BlY2lhbCBwcm9wIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gcHJvY2VzcyB0aGlzIGVsZW1lbnQgYWdhaW4uXG52YXIgX2Nsb25lRWxlbWVudCA9IGZ1bmN0aW9uIF9jbG9uZUVsZW1lbnQocmVuZGVyZWRFbGVtZW50LCBuZXdQcm9wcywgbmV3Q2hpbGRyZW4pIHtcbiAgLy8gT25seSBhZGQgZmxhZyBpZiB0aGlzIGlzIGEgbm9ybWFsIERPTSBlbGVtZW50XG4gIGlmICh0eXBlb2YgcmVuZGVyZWRFbGVtZW50LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgbmV3UHJvcHMgPSBfZXh0ZW5kcyh7fSwgbmV3UHJvcHMsIHsgX3JhZGl1bURpZFJlc29sdmVTdHlsZXM6IHRydWUgfSk7XG4gIH1cblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChyZW5kZXJlZEVsZW1lbnQsIG5ld1Byb3BzLCBuZXdDaGlsZHJlbik7XG59O1xuXG4vL1xuLy8gVGhlIG51Y2xldXMgb2YgUmFkaXVtLiByZXNvbHZlU3R5bGVzIGlzIGNhbGxlZCBvbiB0aGUgcmVuZGVyZWQgZWxlbWVudHNcbi8vIGJlZm9yZSB0aGV5IGFyZSByZXR1cm5lZCBpbiByZW5kZXIuIEl0IGl0ZXJhdGVzIG92ZXIgdGhlIGVsZW1lbnRzIGFuZFxuLy8gY2hpbGRyZW4sIHJld3JpdGluZyBwcm9wcyB0byBhZGQgZXZlbnQgaGFuZGxlcnMgcmVxdWlyZWQgdG8gY2FwdHVyZSB1c2VyXG4vLyBpbnRlcmFjdGlvbnMgKGUuZy4gbW91c2Ugb3ZlcikuIEl0IGFsc28gcmVwbGFjZXMgdGhlIHN0eWxlIHByb3AgYmVjYXVzZSBpdFxuLy8gYWRkcyBpbiB0aGUgdmFyaW91cyBpbnRlcmFjdGlvbiBzdHlsZXMgKGUuZy4gOmhvdmVyKS5cbi8vXG5yZXNvbHZlU3R5bGVzID0gZnVuY3Rpb24gKGNvbXBvbmVudCwgLy8gUmVhY3RDb21wb25lbnQsIGZsb3crZXNsaW50IGNvbXBsYWluaW5nXG5yZW5kZXJlZEVsZW1lbnQpIHtcbiAgdmFyIC8vIFJlYWN0RWxlbWVudFxuICBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0NPTkZJRyA6IGFyZ3VtZW50c1syXTtcbiAgdmFyIGV4aXN0aW5nS2V5TWFwID0gYXJndW1lbnRzWzNdO1xuICB2YXIgc2hvdWxkQ2hlY2tCZWZvcmVSZXNvbHZlID0gYXJndW1lbnRzLmxlbmd0aCA8PSA0IHx8IGFyZ3VtZW50c1s0XSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBhcmd1bWVudHNbNF07XG4gIC8vIFJlYWN0RWxlbWVudFxuICBleGlzdGluZ0tleU1hcCA9IGV4aXN0aW5nS2V5TWFwIHx8IHt9O1xuICBpZiAoIXJlbmRlcmVkRWxlbWVudCB8fFxuICAvLyBCYWlsIGlmIHdlJ3ZlIGFscmVhZHkgcHJvY2Vzc2VkIHRoaXMgZWxlbWVudC4gVGhpcyBlbnN1cmVzIHRoYXQgb25seSB0aGVcbiAgLy8gb3duZXIgb2YgYW4gZWxlbWVudCBwcm9jZXNzZXMgdGhhdCBlbGVtZW50LCBzaW5jZSB0aGUgb3duZXIncyByZW5kZXJcbiAgLy8gZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgZmlyc3QgKHdoaWNoIHdpbGwgYWx3YXlzIGJlIHRoZSBjYXNlLCBzaW5jZSB5b3VcbiAgLy8gY2FuJ3Qga25vdyB3aGF0IGVsc2UgdG8gcmVuZGVyIHVudGlsIHlvdSByZW5kZXIgdGhlIHBhcmVudCBjb21wb25lbnQpLlxuICByZW5kZXJlZEVsZW1lbnQucHJvcHMgJiYgcmVuZGVyZWRFbGVtZW50LnByb3BzLl9yYWRpdW1EaWRSZXNvbHZlU3R5bGVzIHx8XG5cbiAgLy8gQmFpbCBpZiB0aGlzIGVsZW1lbnQgaXMgYSByYWRpdW0gZW5oYW5jZWQgZWxlbWVudCwgYmVjYXVzZSBpZiBpdCBpcyxcbiAgLy8gdGhlbiBpdCB3aWxsIHRha2UgY2FyZSBvZiByZXNvbHZpbmcgaXRzIG93biBzdHlsZXMuXG4gIHNob3VsZENoZWNrQmVmb3JlUmVzb2x2ZSAmJiAhX3Nob3VsZFJlc29sdmVTdHlsZXMocmVuZGVyZWRFbGVtZW50KSkge1xuICAgIHJldHVybiByZW5kZXJlZEVsZW1lbnQ7XG4gIH1cblxuICB2YXIgbmV3Q2hpbGRyZW4gPSBfcmVzb2x2ZUNoaWxkcmVuKHtcbiAgICBjaGlsZHJlbjogcmVuZGVyZWRFbGVtZW50LnByb3BzLmNoaWxkcmVuLFxuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIGNvbmZpZzogY29uZmlnLFxuICAgIGV4aXN0aW5nS2V5TWFwOiBleGlzdGluZ0tleU1hcFxuICB9KTtcblxuICB2YXIgbmV3UHJvcHMgPSBfcmVzb2x2ZVByb3BzKHtcbiAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICBjb25maWc6IGNvbmZpZyxcbiAgICBleGlzdGluZ0tleU1hcDogZXhpc3RpbmdLZXlNYXAsXG4gICAgcHJvcHM6IHJlbmRlcmVkRWxlbWVudC5wcm9wc1xuICB9KTtcblxuICBuZXdQcm9wcyA9IF9ydW5QbHVnaW5zKHtcbiAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICBjb25maWc6IGNvbmZpZyxcbiAgICBleGlzdGluZ0tleU1hcDogZXhpc3RpbmdLZXlNYXAsXG4gICAgcHJvcHM6IG5ld1Byb3BzLFxuICAgIHJlbmRlcmVkRWxlbWVudDogcmVuZGVyZWRFbGVtZW50XG4gIH0pO1xuXG4gIC8vIElmIG5vdGhpbmcgY2hhbmdlZCwgZG9uJ3QgYm90aGVyIGNsb25pbmcgdGhlIGVsZW1lbnQuIE1pZ2h0IGJlIGEgYml0XG4gIC8vIHdhc3RlZnVsLCBhcyB3ZSBhZGQgdGhlIHNlbnRpbmFsIHRvIHN0b3AgZG91YmxlLXByb2Nlc3Npbmcgd2hlbiB3ZSBjbG9uZS5cbiAgLy8gQXNzdW1lIGJlbmlnbiBkb3VibGUtcHJvY2Vzc2luZyBpcyBiZXR0ZXIgdGhhbiB1bm5lZWRlZCBjbG9uaW5nLlxuICBpZiAobmV3Q2hpbGRyZW4gPT09IHJlbmRlcmVkRWxlbWVudC5wcm9wcy5jaGlsZHJlbiAmJiBuZXdQcm9wcyA9PT0gcmVuZGVyZWRFbGVtZW50LnByb3BzKSB7XG4gICAgcmV0dXJuIHJlbmRlcmVkRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBfY2xvbmVFbGVtZW50KHJlbmRlcmVkRWxlbWVudCwgbmV3UHJvcHMgIT09IHJlbmRlcmVkRWxlbWVudC5wcm9wcyA/IG5ld1Byb3BzIDoge30sIG5ld0NoaWxkcmVuKTtcbn07XG5cbi8vIE9ubHkgZm9yIHVzZSBieSB0ZXN0c1xucmVzb2x2ZVN0eWxlcy5fX2NsZWFyU3RhdGVGb3JUZXN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgZ2xvYmFsU3RhdGUgPSB7fTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHJlc29sdmVTdHlsZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL3Jlc29sdmUtc3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSYWRpdW0gZnJvbSBcInJhZGl1bVwiO1xuXG5jb25zdCBDZWxsID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgaG9yaXpvbnRhbFByb3BUeXBlID0gUHJvcFR5cGVzLm9uZU9mKFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSk7XG5jb25zdCB2ZXJ0aWNhbFByb3BUeXBlID0gUHJvcFR5cGVzLm9uZU9mKFtcInRvcFwiLCBcIm1pZGRsZVwiLCBcImJvdHRvbVwiXSk7XG5DZWxsLnByb3BUeXBlcyA9IHtcbiAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhvcml6b250YWxBbGlnbjogaG9yaXpvbnRhbFByb3BUeXBlLFxuICB2ZXJ0aWNhbEFsaWduOiB2ZXJ0aWNhbFByb3BUeXBlLFxuXG4gIHNtYWxsV2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNtYWxsSG9yaXpvbnRhbEFsaWduOiBob3Jpem9udGFsUHJvcFR5cGUsXG4gIHNtYWxsVmVydGljYWxBbGlnbjogdmVydGljYWxQcm9wVHlwZSxcblxuICBtZWRpdW1XaWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVkaXVtSG9yaXpvbnRhbEFsaWduOiBob3Jpem9udGFsUHJvcFR5cGUsXG4gIG1lZGl1bVZlcnRpY2FsQWxpZ246IHZlcnRpY2FsUHJvcFR5cGUsXG5cbiAgbGFyZ2VXaWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFyZ2VIb3Jpem9udGFsQWxpZ246IGhvcml6b250YWxQcm9wVHlwZSxcbiAgbGFyZ2VWZXJ0aWNhbEFsaWduOiB2ZXJ0aWNhbFByb3BUeXBlLFxuXG4gIHhsYXJnZVdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB4bGFyZ2VIb3Jpem9udGFsQWxpZ246IGhvcml6b250YWxQcm9wVHlwZSxcbiAgeGxhcmdlVmVydGljYWxBbGlnbjogdmVydGljYWxQcm9wVHlwZSxcblxuICBvcmRlcjogUHJvcFR5cGVzLm51bWJlcixcblxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oQ2VsbCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL2NlbGwuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSBuZXctY2FwICovXG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmFkaXVtIGZyb20gXCJyYWRpdW1cIjtcbmltcG9ydCByZXNvbHZlQ2VsbHMgZnJvbSBcIi4vdXRpbC9yZXNvbHZlLWNlbGxzXCI7XG5cbmNvbnN0IEdyaWQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIC4uLnByb3BzLnN0eWxlLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICB3aWR0aDogXCIxMDAlXCJcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlc30+XG4gICAgICB7cmVzb2x2ZUNlbGxzKHByb3BzKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkdyaWQucHJvcFR5cGVzID0ge1xuICBjZWxsV2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNlbGxBbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2VsbFZlcnRpY2FsQWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgc21hbGxDZWxsV2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNtYWxsQ2VsbEFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzbWFsbENlbGxWZXJ0aWNhbEFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIG1lZGl1bUNlbGxXaWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVkaXVtQ2VsbEFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZWRpdW1DZWxsVmVydGljYWxBbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICBsYXJnZUNlbGxXaWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFyZ2VDZWxsQWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhcmdlQ2VsbFZlcnRpY2FsQWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgeGxhcmdlQ2VsbFdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB4bGFyZ2VDZWxsQWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHhsYXJnZUNlbGxWZXJ0aWNhbEFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIGJyZWFrcG9pbnRzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHNtYWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1lZGl1bTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYXJnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB4bGFyZ2U6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSksXG5cbiAgZ3V0dGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn07XG5cbkdyaWQuZGVmYXVsdFByb3BzID0ge1xuICBjZWxsV2lkdGg6IFwiMS8zXCIsXG4gIGNlbGxBbGlnbjogXCJsZWZ0XCIsXG4gIGNlbGxWZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgc21hbGw6IFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweClcIixcbiAgICBtZWRpdW06IFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweClcIixcbiAgICBsYXJnZTogXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweClcIixcbiAgICB4bGFyZ2U6IFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQxcHgpXCJcbiAgfSxcblxuICBndXR0ZXI6IFwiMTZweFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oR3JpZCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL2dyaWQuanNcbiAqKi8iLCJpbXBvcnQgbWVyZ2UgZnJvbSBcImxvZGFzaC5tZXJnZVwiO1xuXG5jb25zdCByZXNvbHZlQ2VsbERlZmF1bHRzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGdyaWREZWZhdWx0ID0ge1xuICAgIHdpZHRoOiBwcm9wcy5jZWxsV2lkdGgsXG4gICAgaG9yaXpvbnRhbEFsaWduOiBwcm9wcy5jZWxsQWxpZ24sXG4gICAgdmVydGljYWxBbGlnbjogcHJvcHMuY2VsbFZlcnRpY2FsQWxpZ24sXG4gICAgZ3V0dGVyOiBwcm9wcy5ndXR0ZXJcbiAgfTtcblxuICBjb25zdCBjZWxsRGVmYXVsdCA9IHtcbiAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgaG9yaXpvbnRhbEFsaWduOiBwcm9wcy5hbGlnbixcbiAgICB2ZXJ0aWNhbEFsaWduOiBwcm9wcy52ZXJ0aWNhbEFsaWduLFxuICAgIG9yZGVyOiBwcm9wcy5vcmRlclxuICB9O1xuXG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gW1wic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiLCBcInhsYXJnZVwiXS5tYXAoKHNpemUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVkaWFRdWVyeTogcHJvcHMuYnJlYWtwb2ludHNbc2l6ZV0sXG4gICAgICBncmlkQnJlYWtwb2ludERlZmF1bHQ6IHtcbiAgICAgICAgd2lkdGg6IHByb3BzW2Ake3NpemV9Q2VsbFdpZHRoYF0sXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogcHJvcHNbYCR7c2l6ZX1DZWxsQWxpZ25gXSxcbiAgICAgICAgdmVydGljYWxBbGlnbjogcHJvcHNbYCR7c2l6ZX1DZWxsVmVydGljYWxBbGlnbmBdXG4gICAgICB9LFxuICAgICAgY2VsbEJyZWFrcG9pbnREZWZhdWx0OiB7XG4gICAgICAgIHdpZHRoOiBwcm9wc1tgJHtzaXplfVdpZHRoYF0sXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogcHJvcHNbYCR7c2l6ZX1BbGlnbmBdLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiBwcm9wc1tgJHtzaXplfVZlcnRpY2FsQWxpZ25gXVxuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBicmVha3BvaW50cy5yZWR1Y2UoKGFjYywgYnJlYWtwb2ludCkgPT4ge1xuICAgIC8vIEV4dHJhY3QgdGhlIG1lZGlhIHF1ZXJ5IGFuZCB0aGUgYnJlYWtwb2ludCBjZWxsIGNvbmZpZ3NcbiAgICBjb25zdCB7XG4gICAgICBtZWRpYVF1ZXJ5LFxuICAgICAgZ3JpZEJyZWFrcG9pbnREZWZhdWx0LFxuICAgICAgY2VsbEJyZWFrcG9pbnREZWZhdWx0XG4gICAgfSA9IGJyZWFrcG9pbnQ7XG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGZpbmFsIGNlbGwgY29uZmlndXJhdGlvbi5cbiAgICAvLyBVc2VzIHRoZXNlIHNvdXJjZXMgZm9yIGNlbGwgc3R5bGVzLCBpbiBvcmRlciBvZiBwcmVjZWRlbmNlOlxuICAgIC8vIC0gR3JpZCBkZWZhdWx0XG4gICAgLy8gLSBHcmlkIGJyZWFrcG9pbnQgZGVmYXVsdFxuICAgIC8vIC0gQ2VsbCBkZWZhdWx0XG4gICAgLy8gLSBDZWxsIGJyZWFrcG9pbnQgZGVmYXVsdFxuICAgIGNvbnN0IGNlbGxDb25maWcgPSBtZXJnZSh7fSxcbiAgICAgIGdyaWREZWZhdWx0LFxuICAgICAgZ3JpZEJyZWFrcG9pbnREZWZhdWx0LFxuICAgICAgY2VsbERlZmF1bHQsXG4gICAgICBjZWxsQnJlYWtwb2ludERlZmF1bHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHsuLi5hY2MsIFttZWRpYVF1ZXJ5XTogY2VsbENvbmZpZ307XG4gIH0sIHt9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVDZWxsRGVmYXVsdHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3V0aWwvcmVzb2x2ZS1jZWxsLWRlZmF1bHRzLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbWFnaWMtbnVtYmVycyAqL1xuaW1wb3J0IHsgbWVyZ2VTdHlsZXMgfSBmcm9tIFwicmFkaXVtL2xpYi9tZXJnZS1zdHlsZXNcIjtcbmltcG9ydCBGcmFjdGlvbiBmcm9tIFwiZnJhY3Rpb24uanNcIjtcblxuY29uc3QgcGFyc2VVbml0ID0gKHZhbHVlKSA9PiB7XG4gIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjg2ODk0Ny9zcGxpdDFweC1pbnRvLTFweC0xLXB4LWluLWphdmFzY3JpcHRcbiAgY29uc3QgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKC9eKFxcZCsoPzpcXC5cXGQrKT8pKC4qKSQvKTtcbiAgY29uc3QgWywgbnVtYmVyLCB1bml0XSA9IG1hdGNoZXM7XG4gIHJldHVybiB7IG51bWJlciwgdW5pdCB9O1xufTtcblxuY29uc3QgcmVzb2x2ZUNlbGxHdXR0ZXIgPSAoeyBndXR0ZXIsIGNvbHVtbkNvdW50IH0pID0+IHtcbiAgY29uc3QgeyBudW1iZXIsIHVuaXQgfSA9IHBhcnNlVW5pdChndXR0ZXIpO1xuICByZXR1cm4gYCR7KG51bWJlciAtIChudW1iZXIgLyBjb2x1bW5Db3VudCkpfSR7dW5pdH1gO1xufTtcblxuY29uc3QgcmVzb2x2ZUNlbGxGbGV4QmFzaXMgPSAoeyB3aWR0aCwgZ3V0dGVyLCBjb2x1bW5Db3VudCB9KSA9PiB7XG4gIGNvbnN0IE1VTFRJUExJRVIgPSAxMDA7XG5cbiAgLy8gRnVsbC13aWR0aCBjZWxscyBoYXZlIG5vIGd1dHRlclxuICBpZiAod2lkdGguZCA9PT0gMSkge1xuICAgIHJldHVybiBcIjEwMCVcIjtcbiAgfVxuXG4gIGNvbnN0IGZpbmFsR3V0dGVyID0gcmVzb2x2ZUNlbGxHdXR0ZXIoeyBndXR0ZXIsIGNvbHVtbkNvdW50IH0pO1xuXG4gIHJldHVybiBgY2FsYygke3dpZHRoLnZhbHVlT2YoKSAqIE1VTFRJUExJRVJ9JSAtICR7ZmluYWxHdXR0ZXJ9KWA7XG59O1xuXG4vLyBNZXJnZSBSYWRpdW0gc3R5bGUgYXJyYXlzIGFuZCBsZWF2ZVxuLy8gbm9ybWFsIHN0eWxlIG9iamVjdHMgdW50b3VjaGVkXG5jb25zdCByZXNvbHZlUHJvcFN0eWxlcyA9IChzdHlsZXMpID0+IHtcbiAgaWYgKHN0eWxlcyAmJiBBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcbiAgICByZXR1cm4gbWVyZ2VTdHlsZXMoc3R5bGVzKTtcbiAgfVxuICByZXR1cm4gc3R5bGVzID8gc3R5bGVzIDoge307XG59O1xuXG5jb25zdCByZXNvbHZlQ2VsbFN0eWxlcyA9IChwcm9wcykgPT4ge1xuICAvLyBUcmFuc2xhdGUgZ3JpZC1zcGVhayB0byBmbGV4Ym94LXNwZWFrXG4gIGNvbnN0IGFsaWdubWVudE1hcCA9IHtcbiAgICBsZWZ0OiBcImZsZXgtc3RhcnRcIixcbiAgICBjZW50ZXI6IFwiY2VudGVyXCIsXG4gICAgcmlnaHQ6IFwiZmxleC1lbmRcIixcbiAgICB0b3A6IFwiZmxleC1zdGFydFwiLFxuICAgIG1pZGRsZTogXCJjZW50ZXJcIixcbiAgICBib3R0b206IFwiZmxleC1lbmRcIlxuICB9O1xuXG4gIGNvbnN0IG1lZGlhUXVlcmllcyA9IE9iamVjdC5rZXlzKHByb3BzKVxuICAgIC5maWx0ZXIoKGtleSkgPT4ga2V5LmluZGV4T2YoXCJAbWVkaWFcIikgIT09IC0xKTtcblxuICByZXR1cm4gbWVkaWFRdWVyaWVzLnJlZHVjZSgoYWNjLCBtZWRpYVF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgYnJlYWtwb2ludFN0eWxlcyA9IHByb3BzW21lZGlhUXVlcnldO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIFttZWRpYVF1ZXJ5XToge1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleEJhc2lzOiByZXNvbHZlQ2VsbEZsZXhCYXNpcyh7XG4gICAgICAgICAgd2lkdGg6IG5ldyBGcmFjdGlvbihicmVha3BvaW50U3R5bGVzLndpZHRoKSxcbiAgICAgICAgICBndXR0ZXI6IGJyZWFrcG9pbnRTdHlsZXMuZ3V0dGVyLFxuICAgICAgICAgIGNvbHVtbkNvdW50OiBicmVha3BvaW50U3R5bGVzLmNvbHVtbkNvdW50XG4gICAgICAgIH0pLFxuICAgICAgICBhbGlnbkl0ZW1zOiBhbGlnbm1lbnRNYXBbYnJlYWtwb2ludFN0eWxlcy52ZXJ0aWNhbEFsaWduXSxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IGFsaWdubWVudE1hcFticmVha3BvaW50U3R5bGVzLmhvcml6b250YWxBbGlnbl0sXG4gICAgICAgIG9yZGVyOiBicmVha3BvaW50U3R5bGVzLm9yZGVyID8gYnJlYWtwb2ludFN0eWxlcy5vcmRlciA6IFwiaW5pdGlhbFwiXG4gICAgICB9XG4gICAgfTtcbiAgfSwgeyAuLi5yZXNvbHZlUHJvcFN0eWxlcyhwcm9wcy5zdHlsZSkgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlQ2VsbFN0eWxlcztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdXRpbC9yZXNvbHZlLWNlbGwtc3R5bGVzLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgb21pdCBmcm9tIFwibG9kYXNoLm9taXRcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwibG9kYXNoLm1lcmdlXCI7XG5pbXBvcnQgcmVzb2x2ZUNlbGxEZWZhdWx0cyBmcm9tIFwiLi9yZXNvbHZlLWNlbGwtZGVmYXVsdHNcIjtcbmltcG9ydCByZXNvbHZlQ29sdW1uQ291bnRzIGZyb20gXCIuL3Jlc29sdmUtY29sdW1uLWNvdW50c1wiO1xuaW1wb3J0IHJlc29sdmVDZWxsU3R5bGVzIGZyb20gXCIuL3Jlc29sdmUtY2VsbC1zdHlsZXNcIjtcblxuY29uc3QgcmVzb2x2ZUNlbGxzID0gKHByb3BzKSA9PiB7XG4gIC8vIFJlc29sdmUgdGhlIGZpbmFsIHN0eWxlIGRlZmF1bHRzIGZvciBlYWNoIGNlbGxcbiAgY29uc3QgY2hpbGRQcm9wcyA9IG9taXQocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwic3R5bGVcIl0pO1xuICBjb25zdCBjaGlsZHJlbldpdGhEZWZhdWx0cyA9IENoaWxkcmVuLm1hcChcbiAgICBwcm9wcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICBjaGlsZCwgcmVzb2x2ZUNlbGxEZWZhdWx0cyhcbiAgICAgICAgICBtZXJnZSh7fSwgY2hpbGRQcm9wcywgY2hpbGQucHJvcHMpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIC8vIEFkZCBjb2x1bW4gY291bnRzIHRvIGVhY2ggY2VsbCdzIHByb3BzXG4gIGNvbnN0IGNoaWxkcmVuV2l0aENvbHVtbkNvdW50cyA9IHJlc29sdmVDb2x1bW5Db3VudHMoe1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbldpdGhEZWZhdWx0cyxcbiAgICBicmVha3BvaW50czogcHJvcHMuYnJlYWtwb2ludHNcbiAgfSk7XG5cbiAgLy8gUmVzb2x2ZSB0aGUgZmluYWwgY2VsbCBzdHlsZXNcbiAgcmV0dXJuIENoaWxkcmVuLm1hcChjaGlsZHJlbldpdGhDb2x1bW5Db3VudHMsIChjaGlsZCkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG1lcmdlKHt9LCB7XG4gICAgICBzdHlsZTogcmVzb2x2ZUNlbGxTdHlsZXMoY2hpbGQucHJvcHMpXG4gICAgfSkpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVDZWxscztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdXRpbC9yZXNvbHZlLWNlbGxzLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgbmV3LWNhcCAqL1xuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBpbml0aWFsIGZyb20gXCJsb2Rhc2guaW5pdGlhbFwiO1xuaW1wb3J0IGxhc3QgZnJvbSBcImxvZGFzaC5sYXN0XCI7XG5pbXBvcnQgRnJhY3Rpb24gZnJvbSBcImZyYWN0aW9uLmpzXCI7XG5cbmNvbnN0IHJlc29sdmVDb2x1bW5Db3VudHMgPSAoeyBjaGlsZHJlbiwgYnJlYWtwb2ludHMgfSkgPT4ge1xuICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgY29sdW1uIGNvdW50cyB0aGF0IG1hdGNoZXNcbiAgLy8gdGhlIGluZGljZXMgb2YgdGhlIGNlbGwgYXJyYXkuIFRoaXMgd2F5LCBlYWNoXG4gIC8vIGNlbGwga25vd3MgYWJvdXQgaG93IG1hbnkgY29sdW1ucyBpdHMgcGFyZW50XG4gIC8vIHJvdyBjb250YWlucyBhbmQgdGhlcmVmb3JlIGNhbiBjYWxjdWxhdGVcbiAgLy8gZ3V0dGVycyBjb3JyZWN0bHkuXG5cbiAgLy8gVGhlIGRhdGEgcGlwZWxpbmUgbG9va3MgbGlrZSB0aGlzOlxuICAvLyBbW0NlbGxQcm9wcywgQ2VsbFByb3BzXSwgW0NlbGxQcm9wcywgQ2VsbFByb3BzLCBDZWxsUHJvcHNdXSAtPlxuICAvLyBbWzIsIDJdLCBbMywgMywgM11dIC0+XG4gIC8vIFsyLCAyLCAzLCAzLCAzXVxuXG4gIC8vIFRoZSBpbmRpY2VzIG9mIHRoZSBmaW5hbCBhcnJheSBhbGlnbiB3aXRoIHRoZVxuICAvLyBpbmRpY2VzIG9mIHRoZSBjaGlsZCBjZWxsIGFycmF5LlxuICBjb25zdCBjb2x1bW5Db3VudHMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cylcbiAgLnJlZHVjZSgoYWxsLCBicmVha3BvaW50KSA9PiB7XG4gICAgY29uc3QgbWVkaWFRdWVyeSA9IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5hbGwsXG4gICAgICBbbWVkaWFRdWVyeV06IGNoaWxkcmVuLnJlZHVjZSgoYWNjLCBjZWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IGJyZWFrcG9pbnRDZWxsID0gY2VsbC5wcm9wc1ttZWRpYVF1ZXJ5XTtcblxuICAgICAgICAvLyBPbiB0aGUgZmlyc3QgZm9sZCwgYWRkIGEgbmV3IHN1YmFycmF5XG4gICAgICAgIC8vIHdpdGggdGhlIGZpcnN0IGNlbGwgcHJvcHMuXG4gICAgICAgIGlmICghYWNjLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBbW2JyZWFrcG9pbnRDZWxsXV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN0ID0gaW5pdGlhbChhY2MpO1xuICAgICAgICBjb25zdCByb3cgPSBsYXN0KGFjYyk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHN1bSBvZiB0aGUgY3VycmVudCBhbmQgcHJldmlvdXNcbiAgICAgICAgLy8gY2VsbHMgaXMgZ3RlIDEsIGxlYXZlIHRoZSBjdXJyZW50XG4gICAgICAgIC8vIHN1YmFycmF5IGFuZCBzdGFydCBhIG5ldyBvbmUgd2l0aFxuICAgICAgICAvLyB0aGUgY3VycmVudCBjZWxsXG4gICAgICAgIGNvbnN0IHN1bSA9IHJvd1xuICAgICAgICAgIC5tYXAoKGNvbHVtbikgPT4gRnJhY3Rpb24oY29sdW1uLndpZHRoKSlcbiAgICAgICAgICAucmVkdWNlKChwcmV2aW91cywgd2lkdGgpID0+IHByZXZpb3VzLmFkZCh3aWR0aCkpXG4gICAgICAgICAgLnZhbHVlT2YoKTtcbiAgICAgICAgaWYgKHN1bSA+PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5hY2MsIFticmVha3BvaW50Q2VsbF1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFsuLi5yZXN0LCBbLi4ucm93LCBicmVha3BvaW50Q2VsbF1dO1xuICAgICAgfSwgW10pXG4gICAgICAubWFwKChyb3cpID0+IHJvdy5tYXAoKCkgPT4gcm93Lmxlbmd0aCkpXG4gICAgICAucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjLmNvbmNhdChyb3cpKVxuICAgIH07XG4gIH0sIHt9KTtcblxuICAvLyBBZGQgdGhlIGNvbHVtbiBjb3VudHMgdG8gdGhlIGNlbGwgcHJvcHMuXG4gIHJldHVybiBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjZWxsLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb3BzV2l0aENvbHVtbkNvdW50cyA9IE9iamVjdC5rZXlzKGNvbHVtbkNvdW50cylcbiAgICAgIC5yZWR1Y2UoKGFjYywgYnJlYWtwb2ludCkgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW5Db3VudCA9IGNvbHVtbkNvdW50c1ticmVha3BvaW50XVtpbmRleF07XG4gICAgICAgIGNvbnN0IGNlbGxQcm9wcyA9IGNlbGwucHJvcHNbYnJlYWtwb2ludF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgIFticmVha3BvaW50XTogey4uLmNlbGxQcm9wcywgY29sdW1uQ291bnR9XG4gICAgICAgIH07XG4gICAgICB9LCB7fSk7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjZWxsLCBwcm9wc1dpdGhDb2x1bW5Db3VudHMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVDb2x1bW5Db3VudHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3V0aWwvcmVzb2x2ZS1jb2x1bW4tY291bnRzLmpzXG4gKiovIiwiaW1wb3J0IEdyaWRJbXBvcnQgZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkXCI7XG5pbXBvcnQgQ2VsbEltcG9ydCBmcm9tIFwiLi9jb21wb25lbnRzL2NlbGxcIjtcblxuZXhwb3J0IGNvbnN0IEdyaWQgPSBHcmlkSW1wb3J0O1xuZXhwb3J0IGNvbnN0IENlbGwgPSBDZWxsSW1wb3J0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvKiFcbiAgKiBCb3dzZXIgLSBhIGJyb3dzZXIgZGV0ZWN0b3JcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vZGVkL2Jvd3NlclxuICAqIE1JVCBMaWNlbnNlIHwgKGMpIER1c3RpbiBEaWF6IDIwMTVcbiAgKi9cblxuIWZ1bmN0aW9uIChuYW1lLCBkZWZpbml0aW9uKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKGRlZmluaXRpb24pXG4gIGVsc2UgdGhpc1tuYW1lXSA9IGRlZmluaXRpb24oKVxufSgnYm93c2VyJywgZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICAqIFNlZSB1c2VyYWdlbnRzLmpzIGZvciBleGFtcGxlcyBvZiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgKi9cblxuICB2YXIgdCA9IHRydWVcblxuICBmdW5jdGlvbiBkZXRlY3QodWEpIHtcblxuICAgIGZ1bmN0aW9uIGdldEZpcnN0TWF0Y2gocmVnZXgpIHtcbiAgICAgIHZhciBtYXRjaCA9IHVhLm1hdGNoKHJlZ2V4KTtcbiAgICAgIHJldHVybiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaFsxXSkgfHwgJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Vjb25kTWF0Y2gocmVnZXgpIHtcbiAgICAgIHZhciBtYXRjaCA9IHVhLm1hdGNoKHJlZ2V4KTtcbiAgICAgIHJldHVybiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaFsyXSkgfHwgJyc7XG4gICAgfVxuXG4gICAgdmFyIGlvc2RldmljZSA9IGdldEZpcnN0TWF0Y2goLyhpcG9kfGlwaG9uZXxpcGFkKS9pKS50b0xvd2VyQ2FzZSgpXG4gICAgICAsIGxpa2VBbmRyb2lkID0gL2xpa2UgYW5kcm9pZC9pLnRlc3QodWEpXG4gICAgICAsIGFuZHJvaWQgPSAhbGlrZUFuZHJvaWQgJiYgL2FuZHJvaWQvaS50ZXN0KHVhKVxuICAgICAgLCBjaHJvbWVCb29rID0gL0NyT1MvLnRlc3QodWEpXG4gICAgICAsIGVkZ2VWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvZWRnZVxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgICwgdmVyc2lvbklkZW50aWZpZXIgPSBnZXRGaXJzdE1hdGNoKC92ZXJzaW9uXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgLCB0YWJsZXQgPSAvdGFibGV0L2kudGVzdCh1YSlcbiAgICAgICwgbW9iaWxlID0gIXRhYmxldCAmJiAvW14tXW1vYmkvaS50ZXN0KHVhKVxuICAgICAgLCByZXN1bHRcblxuICAgIGlmICgvb3BlcmF8b3ByL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ09wZXJhJ1xuICAgICAgLCBvcGVyYTogdFxuICAgICAgLCB2ZXJzaW9uOiB2ZXJzaW9uSWRlbnRpZmllciB8fCBnZXRGaXJzdE1hdGNoKC8oPzpvcGVyYXxvcHIpW1xcc1xcL10oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC95YWJyb3dzZXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnWWFuZGV4IEJyb3dzZXInXG4gICAgICAsIHlhbmRleGJyb3dzZXI6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvKD86eWFicm93c2VyKVtcXHNcXC9dKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvd2luZG93cyBwaG9uZS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdXaW5kb3dzIFBob25lJ1xuICAgICAgLCB3aW5kb3dzcGhvbmU6IHRcbiAgICAgIH1cbiAgICAgIGlmIChlZGdlVmVyc2lvbikge1xuICAgICAgICByZXN1bHQubXNlZGdlID0gdFxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGVkZ2VWZXJzaW9uXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVzdWx0Lm1zaWUgPSB0XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvaWVtb2JpbGVcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9tc2llfHRyaWRlbnQvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnSW50ZXJuZXQgRXhwbG9yZXInXG4gICAgICAsIG1zaWU6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86bXNpZSB8cnY6KShcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNocm9tZUJvb2spIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0Nocm9tZSdcbiAgICAgICwgY2hyb21lQm9vazogdFxuICAgICAgLCBjaHJvbWU6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86Y2hyb21lfGNyaW9zfGNybW8pXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoL2Nocm9tZS4rPyBlZGdlL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ01pY3Jvc29mdCBFZGdlJ1xuICAgICAgLCBtc2VkZ2U6IHRcbiAgICAgICwgdmVyc2lvbjogZWRnZVZlcnNpb25cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2Nocm9tZXxjcmlvc3xjcm1vL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0Nocm9tZSdcbiAgICAgICwgY2hyb21lOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmNocm9tZXxjcmlvc3xjcm1vKVxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaW9zZGV2aWNlKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWUgOiBpb3NkZXZpY2UgPT0gJ2lwaG9uZScgPyAnaVBob25lJyA6IGlvc2RldmljZSA9PSAnaXBhZCcgPyAnaVBhZCcgOiAnaVBvZCdcbiAgICAgIH1cbiAgICAgIC8vIFdURjogdmVyc2lvbiBpcyBub3QgcGFydCBvZiB1c2VyIGFnZW50IGluIHdlYiBhcHBzXG4gICAgICBpZiAodmVyc2lvbklkZW50aWZpZXIpIHtcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvc2FpbGZpc2gvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2FpbGZpc2gnXG4gICAgICAsIHNhaWxmaXNoOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goL3NhaWxmaXNoXFxzP2Jyb3dzZXJcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9zZWFtb25rZXlcXC8vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2VhTW9ua2V5J1xuICAgICAgLCBzZWFtb25rZXk6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvc2VhbW9ua2V5XFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvZmlyZWZveHxpY2V3ZWFzZWwvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnRmlyZWZveCdcbiAgICAgICwgZmlyZWZveDogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpmaXJlZm94fGljZXdlYXNlbClbIFxcL10oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgICBpZiAoL1xcKChtb2JpbGV8dGFibGV0KTtbXlxcKV0qcnY6W1xcZFxcLl0rXFwpL2kudGVzdCh1YSkpIHtcbiAgICAgICAgcmVzdWx0LmZpcmVmb3hvcyA9IHRcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3NpbGsvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0gIHtcbiAgICAgICAgbmFtZTogJ0FtYXpvbiBTaWxrJ1xuICAgICAgLCBzaWxrOiB0XG4gICAgICAsIHZlcnNpb24gOiBnZXRGaXJzdE1hdGNoKC9zaWxrXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChhbmRyb2lkKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdBbmRyb2lkJ1xuICAgICAgLCB2ZXJzaW9uOiB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvcGhhbnRvbS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdQaGFudG9tSlMnXG4gICAgICAsIHBoYW50b206IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvcGhhbnRvbWpzXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvYmxhY2tiZXJyeXxcXGJiYlxcZCsvaS50ZXN0KHVhKSB8fCAvcmltXFxzdGFibGV0L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0JsYWNrQmVycnknXG4gICAgICAsIGJsYWNrYmVycnk6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvYmxhY2tiZXJyeVtcXGRdK1xcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoLyh3ZWJ8aHB3KW9zL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1dlYk9TJ1xuICAgICAgLCB3ZWJvczogdFxuICAgICAgLCB2ZXJzaW9uOiB2ZXJzaW9uSWRlbnRpZmllciB8fCBnZXRGaXJzdE1hdGNoKC93KD86ZWIpP29zYnJvd3NlclxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH07XG4gICAgICAvdG91Y2hwYWRcXC8vaS50ZXN0KHVhKSAmJiAocmVzdWx0LnRvdWNocGFkID0gdClcbiAgICB9XG4gICAgZWxzZSBpZiAoL2JhZGEvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnQmFkYSdcbiAgICAgICwgYmFkYTogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC9kb2xmaW5cXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNlIGlmICgvdGl6ZW4vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnVGl6ZW4nXG4gICAgICAsIHRpemVuOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OnRpemVuXFxzPyk/YnJvd3NlclxcLyhcXGQrKFxcLlxcZCspPykvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKC9zYWZhcmkvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2FmYXJpJ1xuICAgICAgLCBzYWZhcmk6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6IGdldEZpcnN0TWF0Y2goL14oLiopXFwvKC4qKSAvKSxcbiAgICAgICAgdmVyc2lvbjogZ2V0U2Vjb25kTWF0Y2goL14oLiopXFwvKC4qKSAvKVxuICAgICB9O1xuICAgfVxuXG4gICAgLy8gc2V0IHdlYmtpdCBvciBnZWNrbyBmbGFnIGZvciBicm93c2VycyBiYXNlZCBvbiB0aGVzZSBlbmdpbmVzXG4gICAgaWYgKCFyZXN1bHQubXNlZGdlICYmIC8oYXBwbGUpP3dlYmtpdC9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQubmFtZSA9IHJlc3VsdC5uYW1lIHx8IFwiV2Via2l0XCJcbiAgICAgIHJlc3VsdC53ZWJraXQgPSB0XG4gICAgICBpZiAoIXJlc3VsdC52ZXJzaW9uICYmIHZlcnNpb25JZGVudGlmaWVyKSB7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFyZXN1bHQub3BlcmEgJiYgL2dlY2tvXFwvL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdC5uYW1lID0gcmVzdWx0Lm5hbWUgfHwgXCJHZWNrb1wiXG4gICAgICByZXN1bHQuZ2Vja28gPSB0XG4gICAgICByZXN1bHQudmVyc2lvbiA9IHJlc3VsdC52ZXJzaW9uIHx8IGdldEZpcnN0TWF0Y2goL2dlY2tvXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgIH1cblxuICAgIC8vIHNldCBPUyBmbGFncyBmb3IgcGxhdGZvcm1zIHRoYXQgaGF2ZSBtdWx0aXBsZSBicm93c2Vyc1xuICAgIGlmICghcmVzdWx0Lm1zZWRnZSAmJiAoYW5kcm9pZCB8fCByZXN1bHQuc2lsaykpIHtcbiAgICAgIHJlc3VsdC5hbmRyb2lkID0gdFxuICAgIH0gZWxzZSBpZiAoaW9zZGV2aWNlKSB7XG4gICAgICByZXN1bHRbaW9zZGV2aWNlXSA9IHRcbiAgICAgIHJlc3VsdC5pb3MgPSB0XG4gICAgfVxuXG4gICAgLy8gT1MgdmVyc2lvbiBleHRyYWN0aW9uXG4gICAgdmFyIG9zVmVyc2lvbiA9ICcnO1xuICAgIGlmIChyZXN1bHQud2luZG93c3Bob25lKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC93aW5kb3dzIHBob25lICg/Om9zKT9cXHM/KFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9IGVsc2UgaWYgKGlvc2RldmljZSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvb3MgKFxcZCsoW19cXHNdXFxkKykqKSBsaWtlIG1hYyBvcyB4L2kpO1xuICAgICAgb3NWZXJzaW9uID0gb3NWZXJzaW9uLnJlcGxhY2UoL1tfXFxzXS9nLCAnLicpO1xuICAgIH0gZWxzZSBpZiAoYW5kcm9pZCkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvYW5kcm9pZFsgXFwvLV0oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LndlYm9zKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC8oPzp3ZWJ8aHB3KW9zXFwvKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5ibGFja2JlcnJ5KSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC9yaW1cXHN0YWJsZXRcXHNvc1xccyhcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuYmFkYSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvYmFkYVxcLyhcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQudGl6ZW4pIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL3RpemVuW1xcL1xcc10oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH1cbiAgICBpZiAob3NWZXJzaW9uKSB7XG4gICAgICByZXN1bHQub3N2ZXJzaW9uID0gb3NWZXJzaW9uO1xuICAgIH1cblxuICAgIC8vIGRldmljZSB0eXBlIGV4dHJhY3Rpb25cbiAgICB2YXIgb3NNYWpvclZlcnNpb24gPSBvc1ZlcnNpb24uc3BsaXQoJy4nKVswXTtcbiAgICBpZiAodGFibGV0IHx8IGlvc2RldmljZSA9PSAnaXBhZCcgfHwgKGFuZHJvaWQgJiYgKG9zTWFqb3JWZXJzaW9uID09IDMgfHwgKG9zTWFqb3JWZXJzaW9uID09IDQgJiYgIW1vYmlsZSkpKSB8fCByZXN1bHQuc2lsaykge1xuICAgICAgcmVzdWx0LnRhYmxldCA9IHRcbiAgICB9IGVsc2UgaWYgKG1vYmlsZSB8fCBpb3NkZXZpY2UgPT0gJ2lwaG9uZScgfHwgaW9zZGV2aWNlID09ICdpcG9kJyB8fCBhbmRyb2lkIHx8IHJlc3VsdC5ibGFja2JlcnJ5IHx8IHJlc3VsdC53ZWJvcyB8fCByZXN1bHQuYmFkYSkge1xuICAgICAgcmVzdWx0Lm1vYmlsZSA9IHRcbiAgICB9XG5cbiAgICAvLyBHcmFkZWQgQnJvd3NlciBTdXBwb3J0XG4gICAgLy8gaHR0cDovL2RldmVsb3Blci55YWhvby5jb20veXVpL2FydGljbGVzL2dic1xuICAgIGlmIChyZXN1bHQubXNlZGdlIHx8XG4gICAgICAgIChyZXN1bHQubXNpZSAmJiByZXN1bHQudmVyc2lvbiA+PSAxMCkgfHxcbiAgICAgICAgKHJlc3VsdC55YW5kZXhicm93c2VyICYmIHJlc3VsdC52ZXJzaW9uID49IDE1KSB8fFxuICAgICAgICAocmVzdWx0LmNocm9tZSAmJiByZXN1bHQudmVyc2lvbiA+PSAyMCkgfHxcbiAgICAgICAgKHJlc3VsdC5maXJlZm94ICYmIHJlc3VsdC52ZXJzaW9uID49IDIwLjApIHx8XG4gICAgICAgIChyZXN1bHQuc2FmYXJpICYmIHJlc3VsdC52ZXJzaW9uID49IDYpIHx8XG4gICAgICAgIChyZXN1bHQub3BlcmEgJiYgcmVzdWx0LnZlcnNpb24gPj0gMTAuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5pb3MgJiYgcmVzdWx0Lm9zdmVyc2lvbiAmJiByZXN1bHQub3N2ZXJzaW9uLnNwbGl0KFwiLlwiKVswXSA+PSA2KSB8fFxuICAgICAgICAocmVzdWx0LmJsYWNrYmVycnkgJiYgcmVzdWx0LnZlcnNpb24gPj0gMTAuMSlcbiAgICAgICAgKSB7XG4gICAgICByZXN1bHQuYSA9IHQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKChyZXN1bHQubXNpZSAmJiByZXN1bHQudmVyc2lvbiA8IDEwKSB8fFxuICAgICAgICAocmVzdWx0LmNocm9tZSAmJiByZXN1bHQudmVyc2lvbiA8IDIwKSB8fFxuICAgICAgICAocmVzdWx0LmZpcmVmb3ggJiYgcmVzdWx0LnZlcnNpb24gPCAyMC4wKSB8fFxuICAgICAgICAocmVzdWx0LnNhZmFyaSAmJiByZXN1bHQudmVyc2lvbiA8IDYpIHx8XG4gICAgICAgIChyZXN1bHQub3BlcmEgJiYgcmVzdWx0LnZlcnNpb24gPCAxMC4wKSB8fFxuICAgICAgICAocmVzdWx0LmlvcyAmJiByZXN1bHQub3N2ZXJzaW9uICYmIHJlc3VsdC5vc3ZlcnNpb24uc3BsaXQoXCIuXCIpWzBdIDwgNilcbiAgICAgICAgKSB7XG4gICAgICByZXN1bHQuYyA9IHRcbiAgICB9IGVsc2UgcmVzdWx0LnggPSB0XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICB2YXIgYm93c2VyID0gZGV0ZWN0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gbmF2aWdhdG9yLnVzZXJBZ2VudCA6ICcnKVxuXG4gIGJvd3Nlci50ZXN0ID0gZnVuY3Rpb24gKGJyb3dzZXJMaXN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBicm93c2VyTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGJyb3dzZXJJdGVtID0gYnJvd3Nlckxpc3RbaV07XG4gICAgICBpZiAodHlwZW9mIGJyb3dzZXJJdGVtPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChicm93c2VySXRlbSBpbiBib3dzZXIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKlxuICAgKiBTZXQgb3VyIGRldGVjdCBtZXRob2QgdG8gdGhlIG1haW4gYm93c2VyIG9iamVjdCBzbyB3ZSBjYW5cbiAgICogcmV1c2UgaXQgdG8gdGVzdCBvdGhlciB1c2VyIGFnZW50cy5cbiAgICogVGhpcyBpcyBuZWVkZWQgdG8gaW1wbGVtZW50IGZ1dHVyZSB0ZXN0cy5cbiAgICovXG4gIGJvd3Nlci5fZGV0ZWN0ID0gZGV0ZWN0O1xuXG4gIHJldHVybiBib3dzZXJcbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYm93c2VyL2Jvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIEJhc2VkIG9uIGNvZGUgdGhhdCBpcyBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBjYW5Vc2VET00gPSAhIShcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudCAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG5cdCk7XG5cblx0dmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG5cdFx0Y2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cblx0XHRjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuXHRcdGNhblVzZUV2ZW50TGlzdGVuZXJzOlxuXHRcdFx0Y2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cblx0XHRjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlblxuXG5cdH07XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuRXhlY3V0aW9uRW52aXJvbm1lbnQgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fVxuXG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZXhlbnYvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3BsdWdpbnNDYWxjID0gcmVxdWlyZSgnLi9wbHVnaW5zL2NhbGMnKTtcblxudmFyIF9wbHVnaW5zQ2FsYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zQ2FsYyk7XG5cbnZhciBfcGx1Z2luc0N1cnNvciA9IHJlcXVpcmUoJy4vcGx1Z2lucy9jdXJzb3InKTtcblxudmFyIF9wbHVnaW5zQ3Vyc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsdWdpbnNDdXJzb3IpO1xuXG52YXIgX3BsdWdpbnNGbGV4ID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXgnKTtcblxudmFyIF9wbHVnaW5zRmxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zRmxleCk7XG5cbnZhciBfcGx1Z2luc1NpemluZyA9IHJlcXVpcmUoJy4vcGx1Z2lucy9zaXppbmcnKTtcblxudmFyIF9wbHVnaW5zU2l6aW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsdWdpbnNTaXppbmcpO1xuXG52YXIgX3BsdWdpbnNHcmFkaWVudCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9ncmFkaWVudCcpO1xuXG52YXIgX3BsdWdpbnNHcmFkaWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zR3JhZGllbnQpO1xuXG52YXIgX3BsdWdpbnNUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9wbHVnaW5zL3RyYW5zaXRpb24nKTtcblxudmFyIF9wbHVnaW5zVHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zVHJhbnNpdGlvbik7XG5cbi8vIHNwZWNpYWwgZmxleGJveCBzcGVjaWZpY2F0aW9uc1xuXG52YXIgX3BsdWdpbnNGbGV4Ym94SUUgPSByZXF1aXJlKCcuL3BsdWdpbnMvZmxleGJveElFJyk7XG5cbnZhciBfcGx1Z2luc0ZsZXhib3hJRTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zRmxleGJveElFKTtcblxudmFyIF9wbHVnaW5zRmxleGJveE9sZCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Ym94T2xkJyk7XG5cbnZhciBfcGx1Z2luc0ZsZXhib3hPbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGx1Z2luc0ZsZXhib3hPbGQpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBbX3BsdWdpbnNDYWxjMlsnZGVmYXVsdCddLCBfcGx1Z2luc0N1cnNvcjJbJ2RlZmF1bHQnXSwgX3BsdWdpbnNTaXppbmcyWydkZWZhdWx0J10sIF9wbHVnaW5zR3JhZGllbnQyWydkZWZhdWx0J10sIF9wbHVnaW5zVHJhbnNpdGlvbjJbJ2RlZmF1bHQnXSwgX3BsdWdpbnNGbGV4Ym94SUUyWydkZWZhdWx0J10sIF9wbHVnaW5zRmxleGJveE9sZDJbJ2RlZmF1bHQnXSxcbi8vIHRoaXMgbXVzdCBiZSBydW4gQUZURVIgdGhlIGZsZXhib3ggc3BlY3Ncbl9wbHVnaW5zRmxleDJbJ2RlZmF1bHQnXV07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL1BsdWdpbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF91dGlsc0dldEJyb3dzZXJJbmZvcm1hdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvZ2V0QnJvd3NlckluZm9ybWF0aW9uJyk7XG5cbnZhciBfdXRpbHNHZXRCcm93c2VySW5mb3JtYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNHZXRCcm93c2VySW5mb3JtYXRpb24pO1xuXG52YXIgX3V0aWxzR2V0UHJlZml4ZWRLZXlmcmFtZXMgPSByZXF1aXJlKCcuL3V0aWxzL2dldFByZWZpeGVkS2V5ZnJhbWVzJyk7XG5cbnZhciBfdXRpbHNHZXRQcmVmaXhlZEtleWZyYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0dldFByZWZpeGVkS2V5ZnJhbWVzKTtcblxudmFyIF91dGlsc0NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF91dGlsc0NhcGl0YWxpemVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDYXBpdGFsaXplU3RyaW5nKTtcblxudmFyIF91dGlsc0Fzc2lnbiA9IHJlcXVpcmUoJy4vdXRpbHMvYXNzaWduJyk7XG5cbnZhciBfdXRpbHNBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNBc3NpZ24pO1xuXG52YXIgX3V0aWxzV2FybiA9IHJlcXVpcmUoJy4vdXRpbHMvd2FybicpO1xuXG52YXIgX3V0aWxzV2FybjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1dhcm4pO1xuXG52YXIgX2Nhbml1c2VEYXRhID0gcmVxdWlyZSgnLi9jYW5pdXNlRGF0YScpO1xuXG52YXIgX2Nhbml1c2VEYXRhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nhbml1c2VEYXRhKTtcblxudmFyIF9QbHVnaW5zID0gcmVxdWlyZSgnLi9QbHVnaW5zJyk7XG5cbnZhciBfUGx1Z2luczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QbHVnaW5zKTtcblxudmFyIGJyb3dzZXJXaGl0ZWxpc3QgPSBbJ3BoYW50b20nXTtcblxudmFyIFByZWZpeGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEluc3RhbnRpYW50ZSBhIG5ldyBwcmVmaXhlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckFnZW50IC0gdXNlckFnZW50IHRvIGdhdGhlciBwcmVmaXggaW5mb3JtYXRpb24gYWNjb3JkaW5nIHRvIGNhbml1c2UuY29tXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZWVwVW5wcmVmaXhlZCAtIGtlZXBzIHVucHJlZml4ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFByZWZpeGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByZWZpeGVyKTtcblxuICAgIHZhciBkZWZhdWx0VXNlckFnZW50ID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgPyBuYXZpZ2F0b3IudXNlckFnZW50IDogdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5fdXNlckFnZW50ID0gb3B0aW9ucy51c2VyQWdlbnQgfHwgZGVmYXVsdFVzZXJBZ2VudDtcbiAgICB0aGlzLl9rZWVwVW5wcmVmaXhlZCA9IG9wdGlvbnMua2VlcFVucHJlZml4ZWQgfHwgZmFsc2U7XG5cbiAgICB0aGlzLl9icm93c2VySW5mbyA9ICgwLCBfdXRpbHNHZXRCcm93c2VySW5mb3JtYXRpb24yWydkZWZhdWx0J10pKHRoaXMuX3VzZXJBZ2VudCk7XG5cbiAgICAvLyBDaGVja3MgaWYgdGhlIHVzZXJBZ2VudCB3YXMgcmVzb2x2ZWQgY29ycmVjdGx5XG4gICAgaWYgKHRoaXMuX2Jyb3dzZXJJbmZvICYmIHRoaXMuX2Jyb3dzZXJJbmZvLnByZWZpeCkge1xuICAgICAgLy8gc2V0IGFkZGl0aW9uYWwgcHJlZml4IGluZm9ybWF0aW9uXG4gICAgICB0aGlzLmNzc1ByZWZpeCA9IHRoaXMuX2Jyb3dzZXJJbmZvLnByZWZpeC5jc3M7XG4gICAgICB0aGlzLmpzUHJlZml4ID0gdGhpcy5fYnJvd3NlckluZm8ucHJlZml4LmlubGluZTtcbiAgICAgIHRoaXMucHJlZml4ZWRLZXlmcmFtZXMgPSAoMCwgX3V0aWxzR2V0UHJlZml4ZWRLZXlmcmFtZXMyWydkZWZhdWx0J10pKHRoaXMuX2Jyb3dzZXJJbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGFzUHJvcHNSZXF1aXJpbmdQcmVmaXggPSBmYWxzZTtcbiAgICAgICgwLCBfdXRpbHNXYXJuMlsnZGVmYXVsdCddKSgnRWl0aGVyIHRoZSBnbG9iYWwgbmF2aWdhdG9yIHdhcyB1bmRlZmluZWQgb3IgYW4gaW52YWxpZCB1c2VyQWdlbnQgd2FzIHByb3ZpZGVkLicsICdVc2luZyBhIHZhbGlkIHVzZXJBZ2VudD8gUGxlYXNlIGxldCB1cyBrbm93IGFuZCBjcmVhdGUgYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL3JvZnJpc2NobWFubi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvaXNzdWVzJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSB0aGlzLl9icm93c2VySW5mby5icm93c2VyICYmIF9jYW5pdXNlRGF0YTJbJ2RlZmF1bHQnXVt0aGlzLl9icm93c2VySW5mby5icm93c2VyXTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgdGhpcy5fcmVxdWlyZXNQcmVmaXggPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gZGF0YVtrZXldID49IF90aGlzLl9icm93c2VySW5mby52ZXJzaW9uO1xuICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN1bHQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgbmFtZSwgdHJ1ZSkpO1xuICAgICAgfSwge30pO1xuICAgICAgdGhpcy5faGFzUHJvcHNSZXF1aXJpbmdQcmVmaXggPSBPYmplY3Qua2V5cyh0aGlzLl9yZXF1aXJlc1ByZWZpeCkubGVuZ3RoID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgZm9yIHdoaXRlbGlzdGVkIGJyb3dzZXJzXG4gICAgICBicm93c2VyV2hpdGVsaXN0LmZvckVhY2goZnVuY3Rpb24gKGJyb3dzZXIpIHtcbiAgICAgICAgaWYgKF90aGlzLl9icm93c2VySW5mb1ticm93c2VyXSkge1xuICAgICAgICAgIF90aGlzLl9pc1doaXRlbGlzdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9oYXNQcm9wc1JlcXVpcmluZ1ByZWZpeCA9IGZhbHNlO1xuXG4gICAgICAvLyBEbyBub3QgdGhyb3cgYSB3YXJuaW5nIGlmIHdoaXRlbGlzdGVkXG4gICAgICBpZiAodGhpcy5faXNXaGl0ZWxpc3RlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgICgwLCBfdXRpbHNXYXJuMlsnZGVmYXVsdCddKSgnWW91ciB1c2VyQWdlbnQgc2VlbXMgdG8gYmUgbm90IHN1cHBvcnRlZCBieSBpbmxpbmUtc3R5bGUtcHJlZml4ZXIuIEZlZWwgZnJlZSB0byBvcGVuIGFuIGlzc3VlLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJlZml4ZWQgdmVyc2lvbiBvZiB0aGUgc3R5bGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgLSBTdHlsZSBvYmplY3QgdGhhdCBnZXRzIHByZWZpeGVkIHByb3BlcnRpZXMgYWRkZWRcbiAgICogQHJldHVybnMge09iamVjdH0gLSBTdHlsZSBvYmplY3Qgd2l0aCBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAgICovXG5cbiAgX2NyZWF0ZUNsYXNzKFByZWZpeGVyLCBbe1xuICAgIGtleTogJ3ByZWZpeCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZWZpeChzdHlsZXMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAvLyBvbmx5IGFkZCBwcmVmaXhlcyBpZiBuZWVkZWRcbiAgICAgIGlmICghdGhpcy5faGFzUHJvcHNSZXF1aXJpbmdQcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgIH1cblxuICAgICAgc3R5bGVzID0gKDAsIF91dGlsc0Fzc2lnbjJbJ2RlZmF1bHQnXSkoe30sIHN0eWxlcyk7XG5cbiAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzW3Byb3BlcnR5XTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgLy8gcmVjdXJzZSB0aHJvdWdoIG5lc3RlZCBzdHlsZSBvYmplY3RzXG4gICAgICAgICAgc3R5bGVzW3Byb3BlcnR5XSA9IF90aGlzMi5wcmVmaXgodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGFkZCBwcmVmaXhlcyBpZiBuZWVkZWRcbiAgICAgICAgICBpZiAoX3RoaXMyLl9yZXF1aXJlc1ByZWZpeFtwcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgIHN0eWxlc1tfdGhpczIuanNQcmVmaXggKyAoMCwgX3V0aWxzQ2FwaXRhbGl6ZVN0cmluZzJbJ2RlZmF1bHQnXSkocHJvcGVydHkpXSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKCFfdGhpczIuX2tlZXBVbnByZWZpeGVkKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBzdHlsZXNbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHJlc29sdmUgcGx1Z2luc1xuICAgICAgICAgIF9QbHVnaW5zMlsnZGVmYXVsdCddLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGVzIGEgbmV3IHBsdWdpbiBpbnRlcmZhY2Ugd2l0aCBjdXJyZW50IGRhdGFcbiAgICAgICAgICAgIHZhciByZXNvbHZlZFN0eWxlcyA9IHBsdWdpbih7XG4gICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgICAgICAgYnJvd3NlckluZm86IF90aGlzMi5fYnJvd3NlckluZm8sXG4gICAgICAgICAgICAgIHByZWZpeDoge1xuICAgICAgICAgICAgICAgIGpzOiBfdGhpczIuanNQcmVmaXgsXG4gICAgICAgICAgICAgICAgY3NzOiBfdGhpczIuY3NzUHJlZml4LFxuICAgICAgICAgICAgICAgIGtleWZyYW1lczogX3RoaXMyLnByZWZpeGVkS2V5ZnJhbWVzXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGtlZXBVbnByZWZpeGVkOiBfdGhpczIuX2tlZXBVbnByZWZpeGVkLFxuICAgICAgICAgICAgICByZXF1aXJlc1ByZWZpeDogX3RoaXMyLl9yZXF1aXJlc1ByZWZpeCxcbiAgICAgICAgICAgICAgZm9yY2VSdW46IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICgwLCBfdXRpbHNBc3NpZ24yWydkZWZhdWx0J10pKHN0eWxlcywgcmVzb2x2ZWRTdHlsZXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJlZml4ZWQgdmVyc2lvbiBvZiB0aGUgc3R5bGUgb2JqZWN0IHVzaW5nIGFsbCB2ZW5kb3IgcHJlZml4ZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzIC0gU3R5bGUgb2JqZWN0IHRoYXQgZ2V0cyBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFkZGVkXG4gICAgICogQHJldHVybnMge09iamVjdH0gLSBTdHlsZSBvYmplY3Qgd2l0aCBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAgICAgKi9cbiAgfV0sIFt7XG4gICAga2V5OiAncHJlZml4QWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJlZml4QWxsKHN0eWxlcykge1xuICAgICAgdmFyIHByZWZpeGVzID0ge307XG4gICAgICB2YXIgYnJvd3NlckluZm8gPSAoMCwgX3V0aWxzR2V0QnJvd3NlckluZm9ybWF0aW9uMlsnZGVmYXVsdCddKSgnKicpO1xuXG4gICAgICBicm93c2VySW5mby5icm93c2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChicm93c2VyKSB7XG4gICAgICAgIHZhciBkYXRhID0gX2Nhbml1c2VEYXRhMlsnZGVmYXVsdCddW2Jyb3dzZXJdO1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICgwLCBfdXRpbHNBc3NpZ24yWydkZWZhdWx0J10pKHByZWZpeGVzLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHRoZXJlIHNob3VsZCBhbHdheXMgYmUgYXQgbGVhc3Qgb25lIHByZWZpeGVkIHN0eWxlLCBidXQganVzdCBpbmNhc2VcbiAgICAgIGlmICghT2JqZWN0LmtleXMocHJlZml4ZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgIH1cblxuICAgICAgc3R5bGVzID0gKDAsIF91dGlsc0Fzc2lnbjJbJ2RlZmF1bHQnXSkoe30sIHN0eWxlcyk7XG5cbiAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzW3Byb3BlcnR5XTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgLy8gcmVjdXJzZSB0aHJvdWdoIG5lc3RlZCBzdHlsZSBvYmplY3RzXG4gICAgICAgICAgc3R5bGVzW3Byb3BlcnR5XSA9IFByZWZpeGVyLnByZWZpeEFsbCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGJyb3dzZXJzID0gT2JqZWN0LmtleXMoYnJvd3NlckluZm8ucHJlZml4ZXMpO1xuICAgICAgICAgIGJyb3dzZXJzLmZvckVhY2goZnVuY3Rpb24gKGJyb3dzZXIpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGJyb3dzZXJJbmZvLnByZWZpeGVzW2Jyb3dzZXJdO1xuICAgICAgICAgICAgLy8gYWRkIHByZWZpeGVzIGlmIG5lZWRlZFxuICAgICAgICAgICAgaWYgKHByZWZpeGVzW3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgICBzdHlsZXNbc3R5bGUuaW5saW5lICsgKDAsIF91dGlsc0NhcGl0YWxpemVTdHJpbmcyWydkZWZhdWx0J10pKHByb3BlcnR5KV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVzb2x2ZSBwbHVnaW5zIGZvciBlYWNoIGJyb3dzZXJcbiAgICAgICAgICAgIF9QbHVnaW5zMlsnZGVmYXVsdCddLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgICAgICB2YXIgcmVzb2x2ZWRTdHlsZXMgPSBwbHVnaW4oe1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgICAgICAgICAgYnJvd3NlckluZm86IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGJyb3dzZXIsXG4gICAgICAgICAgICAgICAgICBwcmVmaXg6IHN0eWxlLFxuICAgICAgICAgICAgICAgICAgdmVyc2lvbjogMCAvLyBhc3N1bWUgbG93ZXN0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHt9LFxuICAgICAgICAgICAgICAgIGtlZXBVbnByZWZpeGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVzUHJlZml4OiBwcmVmaXhlcyxcbiAgICAgICAgICAgICAgICBmb3JjZVJ1bjogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgKDAsIF91dGlsc0Fzc2lnbjJbJ2RlZmF1bHQnXSkoc3R5bGVzLCByZXNvbHZlZFN0eWxlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByZWZpeGVyO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUHJlZml4ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL1ByZWZpeGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjYW5pdXNlRGF0YSA9IHtcImNocm9tZVwiOntcInRyYW5zZm9ybVwiOjM1LFwidHJhbnNmb3JtT3JpZ2luXCI6MzUsXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6MzUsXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6MzUsXCJiYWNrZmFjZVZpc2liaWxpdHlcIjozNSxcInBlcnNwZWN0aXZlXCI6MzUsXCJwZXJzcGVjdGl2ZU9yaWdpblwiOjM1LFwidHJhbnNmb3JtU3R5bGVcIjozNSxcInRyYW5zZm9ybU9yaWdpblpcIjozNSxcImFuaW1hdGlvblwiOjQyLFwiYW5pbWF0aW9uRGVsYXlcIjo0MixcImFuaW1hdGlvbkRpcmVjdGlvblwiOjQyLFwiYW5pbWF0aW9uRmlsbE1vZGVcIjo0MixcImFuaW1hdGlvbkR1cmF0aW9uXCI6NDIsXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOjQyLFwiYW5pbWF0aW9uTmFtZVwiOjQyLFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6NDIsXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOjQyLFwiYXBwZWFyYW5jZVwiOjUwLFwidXNlclNlbGVjdFwiOjUwLFwiZm9udEtlcm5pbmdcIjozMixcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6NTAsXCJ0ZXh0RW1waGFzaXNcIjo1MCxcInRleHRFbXBoYXNpc1N0eWxlXCI6NTAsXCJ0ZXh0RW1waGFzaXNDb2xvclwiOjUwLFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6NTAsXCJjbGlwUGF0aFwiOjUwLFwibWFza0ltYWdlXCI6NTAsXCJtYXNrTW9kZVwiOjUwLFwibWFza1JlcGVhdFwiOjUwLFwibWFza1Bvc2l0aW9uXCI6NTAsXCJtYXNrQ2xpcFwiOjUwLFwibWFza09yaWdpblwiOjUwLFwibWFza1NpemVcIjo1MCxcIm1hc2tDb21wb3NpdGVcIjo1MCxcIm1hc2tcIjo1MCxcIm1hc2tCb3JkZXJTb3VyY2VcIjo1MCxcIm1hc2tCb3JkZXJNb2RlXCI6NTAsXCJtYXNrQm9yZGVyU2xpY2VcIjo1MCxcIm1hc2tCb3JkZXJXaWR0aFwiOjUwLFwibWFza0JvcmRlck91dHNldFwiOjUwLFwibWFza0JvcmRlclJlcGVhdFwiOjUwLFwibWFza0JvcmRlclwiOjUwLFwibWFza1R5cGVcIjo1MCxcInRleHREZWNvcmF0aW9uU3R5bGVcIjo1MCxcInRleHREZWNvcmF0aW9uU2tpcFwiOjUwLFwidGV4dERlY29yYXRpb25MaW5lXCI6NTAsXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6NTAsXCJmaWx0ZXJcIjo1MCxcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjo0NyxcImJyZWFrQWZ0ZXJcIjo1MCxcImJyZWFrQmVmb3JlXCI6NTAsXCJicmVha0luc2lkZVwiOjUwLFwiY29sdW1uQ291bnRcIjo1MCxcImNvbHVtbkZpbGxcIjo1MCxcImNvbHVtbkdhcFwiOjUwLFwiY29sdW1uUnVsZVwiOjUwLFwiY29sdW1uUnVsZUNvbG9yXCI6NTAsXCJjb2x1bW5SdWxlU3R5bGVcIjo1MCxcImNvbHVtblJ1bGVXaWR0aFwiOjUwLFwiY29sdW1uc1wiOjUwLFwiY29sdW1uU3BhblwiOjUwLFwiY29sdW1uV2lkdGhcIjo1MH0sXCJzYWZhcmlcIjp7XCJmbGV4XCI6OCxcImZsZXhCYXNpc1wiOjgsXCJmbGV4RGlyZWN0aW9uXCI6OCxcImZsZXhHcm93XCI6OCxcImZsZXhGbG93XCI6OCxcImZsZXhTaHJpbmtcIjo4LFwiZmxleFdyYXBcIjo4LFwiYWxpZ25Db250ZW50XCI6OCxcImFsaWduSXRlbXNcIjo4LFwiYWxpZ25TZWxmXCI6OCxcImp1c3RpZnlDb250ZW50XCI6OCxcIm9yZGVyXCI6OCxcInRyYW5zaXRpb25cIjo2LFwidHJhbnNpdGlvbkRlbGF5XCI6NixcInRyYW5zaXRpb25EdXJhdGlvblwiOjYsXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjo2LFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6NixcInRyYW5zZm9ybVwiOjgsXCJ0cmFuc2Zvcm1PcmlnaW5cIjo4LFwidHJhbnNmb3JtT3JpZ2luWFwiOjgsXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6OCxcImJhY2tmYWNlVmlzaWJpbGl0eVwiOjgsXCJwZXJzcGVjdGl2ZVwiOjgsXCJwZXJzcGVjdGl2ZU9yaWdpblwiOjgsXCJ0cmFuc2Zvcm1TdHlsZVwiOjgsXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6OCxcImFuaW1hdGlvblwiOjgsXCJhbmltYXRpb25EZWxheVwiOjgsXCJhbmltYXRpb25EaXJlY3Rpb25cIjo4LFwiYW5pbWF0aW9uRmlsbE1vZGVcIjo4LFwiYW5pbWF0aW9uRHVyYXRpb25cIjo4LFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjo4LFwiYW5pbWF0aW9uTmFtZVwiOjgsXCJhbmltYXRpb25QbGF5U3RhdGVcIjo4LFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjo4LFwiYXBwZWFyYW5jZVwiOjkuMSxcInVzZXJTZWxlY3RcIjo5LjEsXCJiYWNrZHJvcEZpbHRlclwiOjkuMSxcImZvbnRLZXJuaW5nXCI6OS4xLFwic2Nyb2xsU25hcFR5cGVcIjo5LjEsXCJzY3JvbGxTbmFwUG9pbnRzWFwiOjkuMSxcInNjcm9sbFNuYXBQb2ludHNZXCI6OS4xLFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6OS4xLFwic2Nyb2xsU25hcENvb3JkaW5hdGVcIjo5LjEsXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOjcsXCJ0ZXh0RW1waGFzaXNcIjo3LFwidGV4dEVtcGhhc2lzU3R5bGVcIjo3LFwidGV4dEVtcGhhc2lzQ29sb3JcIjo3LFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6OS4xLFwiY2xpcFBhdGhcIjo5LjEsXCJtYXNrSW1hZ2VcIjo5LjEsXCJtYXNrTW9kZVwiOjkuMSxcIm1hc2tSZXBlYXRcIjo5LjEsXCJtYXNrUG9zaXRpb25cIjo5LjEsXCJtYXNrQ2xpcFwiOjkuMSxcIm1hc2tPcmlnaW5cIjo5LjEsXCJtYXNrU2l6ZVwiOjkuMSxcIm1hc2tDb21wb3NpdGVcIjo5LjEsXCJtYXNrXCI6OS4xLFwibWFza0JvcmRlclNvdXJjZVwiOjkuMSxcIm1hc2tCb3JkZXJNb2RlXCI6OS4xLFwibWFza0JvcmRlclNsaWNlXCI6OS4xLFwibWFza0JvcmRlcldpZHRoXCI6OS4xLFwibWFza0JvcmRlck91dHNldFwiOjkuMSxcIm1hc2tCb3JkZXJSZXBlYXRcIjo5LjEsXCJtYXNrQm9yZGVyXCI6OS4xLFwibWFza1R5cGVcIjo5LjEsXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6OS4xLFwidGV4dERlY29yYXRpb25Ta2lwXCI6OS4xLFwidGV4dERlY29yYXRpb25MaW5lXCI6OS4xLFwidGV4dERlY29yYXRpb25Db2xvclwiOjkuMSxcInNoYXBlSW1hZ2VUaHJlc2hvbGRcIjo5LjEsXCJzaGFwZUltYWdlTWFyZ2luXCI6OS4xLFwic2hhcGVJbWFnZU91dHNpZGVcIjo5LjEsXCJmaWx0ZXJcIjo5LFwiaHlwaGVuc1wiOjkuMSxcImZsb3dJbnRvXCI6OS4xLFwiZmxvd0Zyb21cIjo5LjEsXCJicmVha0JlZm9yZVwiOjgsXCJicmVha0FmdGVyXCI6OCxcImJyZWFrSW5zaWRlXCI6OCxcInJlZ2lvbkZyYWdtZW50XCI6OS4xLFwiY29sdW1uQ291bnRcIjo4LFwiY29sdW1uRmlsbFwiOjgsXCJjb2x1bW5HYXBcIjo4LFwiY29sdW1uUnVsZVwiOjgsXCJjb2x1bW5SdWxlQ29sb3JcIjo4LFwiY29sdW1uUnVsZVN0eWxlXCI6OCxcImNvbHVtblJ1bGVXaWR0aFwiOjgsXCJjb2x1bW5zXCI6OCxcImNvbHVtblNwYW5cIjo4LFwiY29sdW1uV2lkdGhcIjo4fSxcImZpcmVmb3hcIjp7XCJhcHBlYXJhbmNlXCI6NDYsXCJ1c2VyU2VsZWN0XCI6NDYsXCJib3hTaXppbmdcIjoyOCxcInRleHRBbGlnbkxhc3RcIjo0NixcInRleHREZWNvcmF0aW9uU3R5bGVcIjozNSxcInRleHREZWNvcmF0aW9uU2tpcFwiOjM1LFwidGV4dERlY29yYXRpb25MaW5lXCI6MzUsXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6MzUsXCJ0YWJTaXplXCI6NDYsXCJoeXBoZW5zXCI6NDIsXCJmb250RmVhdHVyZVNldHRpbmdzXCI6MzMsXCJicmVha0FmdGVyXCI6NDYsXCJicmVha0JlZm9yZVwiOjQ2LFwiYnJlYWtJbnNpZGVcIjo0NixcImNvbHVtbkNvdW50XCI6NDYsXCJjb2x1bW5GaWxsXCI6NDYsXCJjb2x1bW5HYXBcIjo0NixcImNvbHVtblJ1bGVcIjo0NixcImNvbHVtblJ1bGVDb2xvclwiOjQ2LFwiY29sdW1uUnVsZVN0eWxlXCI6NDYsXCJjb2x1bW5SdWxlV2lkdGhcIjo0NixcImNvbHVtbnNcIjo0NixcImNvbHVtblNwYW5cIjo0NixcImNvbHVtbldpZHRoXCI6NDZ9LFwib3BlcmFcIjp7XCJmbGV4XCI6MTYsXCJmbGV4QmFzaXNcIjoxNixcImZsZXhEaXJlY3Rpb25cIjoxNixcImZsZXhHcm93XCI6MTYsXCJmbGV4Rmxvd1wiOjE2LFwiZmxleFNocmlua1wiOjE2LFwiZmxleFdyYXBcIjoxNixcImFsaWduQ29udGVudFwiOjE2LFwiYWxpZ25JdGVtc1wiOjE2LFwiYWxpZ25TZWxmXCI6MTYsXCJqdXN0aWZ5Q29udGVudFwiOjE2LFwib3JkZXJcIjoxNixcInRyYW5zZm9ybVwiOjIyLFwidHJhbnNmb3JtT3JpZ2luXCI6MjIsXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6MjIsXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6MjIsXCJiYWNrZmFjZVZpc2liaWxpdHlcIjoyMixcInBlcnNwZWN0aXZlXCI6MjIsXCJwZXJzcGVjdGl2ZU9yaWdpblwiOjIyLFwidHJhbnNmb3JtU3R5bGVcIjoyMixcInRyYW5zZm9ybU9yaWdpblpcIjoyMixcImFuaW1hdGlvblwiOjI5LFwiYW5pbWF0aW9uRGVsYXlcIjoyOSxcImFuaW1hdGlvbkRpcmVjdGlvblwiOjI5LFwiYW5pbWF0aW9uRmlsbE1vZGVcIjoyOSxcImFuaW1hdGlvbkR1cmF0aW9uXCI6MjksXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOjI5LFwiYW5pbWF0aW9uTmFtZVwiOjI5LFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6MjksXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOjI5LFwiYXBwZWFyYW5jZVwiOjM2LFwidXNlclNlbGVjdFwiOjM2LFwiZm9udEtlcm5pbmdcIjoxOSxcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6MzYsXCJ0ZXh0RW1waGFzaXNcIjozNixcInRleHRFbXBoYXNpc1N0eWxlXCI6MzYsXCJ0ZXh0RW1waGFzaXNDb2xvclwiOjM2LFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6MzYsXCJjbGlwUGF0aFwiOjM2LFwibWFza0ltYWdlXCI6MzYsXCJtYXNrTW9kZVwiOjM2LFwibWFza1JlcGVhdFwiOjM2LFwibWFza1Bvc2l0aW9uXCI6MzYsXCJtYXNrQ2xpcFwiOjM2LFwibWFza09yaWdpblwiOjM2LFwibWFza1NpemVcIjozNixcIm1hc2tDb21wb3NpdGVcIjozNixcIm1hc2tcIjozNixcIm1hc2tCb3JkZXJTb3VyY2VcIjozNixcIm1hc2tCb3JkZXJNb2RlXCI6MzYsXCJtYXNrQm9yZGVyU2xpY2VcIjozNixcIm1hc2tCb3JkZXJXaWR0aFwiOjM2LFwibWFza0JvcmRlck91dHNldFwiOjM2LFwibWFza0JvcmRlclJlcGVhdFwiOjM2LFwibWFza0JvcmRlclwiOjM2LFwibWFza1R5cGVcIjozNixcImZpbHRlclwiOjM2LFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOjM2LFwiYnJlYWtBZnRlclwiOjM2LFwiYnJlYWtCZWZvcmVcIjozNixcImJyZWFrSW5zaWRlXCI6MzYsXCJjb2x1bW5Db3VudFwiOjM2LFwiY29sdW1uRmlsbFwiOjM2LFwiY29sdW1uR2FwXCI6MzYsXCJjb2x1bW5SdWxlXCI6MzYsXCJjb2x1bW5SdWxlQ29sb3JcIjozNixcImNvbHVtblJ1bGVTdHlsZVwiOjM2LFwiY29sdW1uUnVsZVdpZHRoXCI6MzYsXCJjb2x1bW5zXCI6MzYsXCJjb2x1bW5TcGFuXCI6MzYsXCJjb2x1bW5XaWR0aFwiOjM2fSxcImllXCI6e1wiZ3JpZEFyZWFcIjoxMSxcImdyaWRHYXBcIjoxMSxcImdyaWRDb2x1bW5TdGFydFwiOjExLFwidXNlclNlbGVjdFwiOjExLFwiZ3JpZFwiOjExLFwiYnJlYWtJbnNpZGVcIjoxMSxcImh5cGhlbnNcIjoxMSxcImdyaWRUZW1wbGF0ZUFyZWFzXCI6MTEsXCJicmVha0FmdGVyXCI6MTEsXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOjExLFwiZ3JpZFJvd1N0YXJ0XCI6MTEsXCJncmlkQXV0b0Zsb3dcIjoxMSxcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOjExLFwiZ3JpZFRlbXBsYXRlXCI6MTEsXCJncmlkVGVtcGxhdGVDb2x1bW5zXCI6MTEsXCJ0cmFuc2Zvcm1PcmlnaW5cIjo5LFwiZ3JpZEF1dG9Sb3dzXCI6MTEsXCJncmlkQ29sdW1uRW5kXCI6MTEsXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6OSxcInNjcm9sbFNuYXBQb2ludHNZXCI6MTEsXCJicmVha0JlZm9yZVwiOjExLFwiZ3JpZFJvd0dhcFwiOjExLFwic2Nyb2xsU25hcFBvaW50c1hcIjoxMSxcInJlZ2lvbkZyYWdtZW50XCI6MTEsXCJmbGV4V3JhcFwiOjEwLFwid3JhcEZsb3dcIjoxMSxcImdyaWRSb3dFbmRcIjoxMSxcImZsZXhcIjoxMCxcImZsZXhEaXJlY3Rpb25cIjoxMCxcImZsb3dJbnRvXCI6MTEsXCJ0b3VjaEFjdGlvblwiOjEwLFwiZ3JpZENvbHVtblwiOjExLFwidHJhbnNmb3JtXCI6OSxcImdyaWRUZW1wbGF0ZVJvd3NcIjoxMSxcImZsZXhGbG93XCI6MTAsXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6OSxcImZsb3dGcm9tXCI6MTEsXCJzY3JvbGxTbmFwVHlwZVwiOjExLFwid3JhcE1hcmdpblwiOjExLFwiZ3JpZENvbHVtbkdhcFwiOjExLFwiZ3JpZFJvd1wiOjExLFwid3JhcFRocm91Z2hcIjoxMSxcImdyaWRBdXRvQ29sdW1uc1wiOjExLFwidGV4dFNpemVBZGp1c3RcIjoxMX0sXCJlZGdlXCI6e1widXNlclNlbGVjdFwiOjE0LFwid3JhcEZsb3dcIjoxNCxcIndyYXBUaHJvdWdoXCI6MTQsXCJ3cmFwTWFyZ2luXCI6MTQsXCJzY3JvbGxTbmFwVHlwZVwiOjE0LFwic2Nyb2xsU25hcFBvaW50c1hcIjoxNCxcInNjcm9sbFNuYXBQb2ludHNZXCI6MTQsXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjoxNCxcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6MTQsXCJoeXBoZW5zXCI6MTQsXCJmbG93SW50b1wiOjE0LFwiZmxvd0Zyb21cIjoxNCxcImJyZWFrQmVmb3JlXCI6MTQsXCJicmVha0FmdGVyXCI6MTQsXCJicmVha0luc2lkZVwiOjE0LFwicmVnaW9uRnJhZ21lbnRcIjoxNCxcImdyaWRUZW1wbGF0ZUNvbHVtbnNcIjoxNCxcImdyaWRUZW1wbGF0ZVJvd3NcIjoxNCxcImdyaWRUZW1wbGF0ZUFyZWFzXCI6MTQsXCJncmlkVGVtcGxhdGVcIjoxNCxcImdyaWRBdXRvQ29sdW1uc1wiOjE0LFwiZ3JpZEF1dG9Sb3dzXCI6MTQsXCJncmlkQXV0b0Zsb3dcIjoxNCxcImdyaWRcIjoxNCxcImdyaWRSb3dTdGFydFwiOjE0LFwiZ3JpZENvbHVtblN0YXJ0XCI6MTQsXCJncmlkUm93RW5kXCI6MTQsXCJncmlkUm93XCI6MTQsXCJncmlkQ29sdW1uXCI6MTQsXCJncmlkQ29sdW1uRW5kXCI6MTQsXCJncmlkQ29sdW1uR2FwXCI6MTQsXCJncmlkUm93R2FwXCI6MTQsXCJncmlkQXJlYVwiOjE0LFwiZ3JpZEdhcFwiOjE0fSxcImlvc19zYWZcIjp7XCJmbGV4XCI6OC4xLFwiZmxleEJhc2lzXCI6OC4xLFwiZmxleERpcmVjdGlvblwiOjguMSxcImZsZXhHcm93XCI6OC4xLFwiZmxleEZsb3dcIjo4LjEsXCJmbGV4U2hyaW5rXCI6OC4xLFwiZmxleFdyYXBcIjo4LjEsXCJhbGlnbkNvbnRlbnRcIjo4LjEsXCJhbGlnbkl0ZW1zXCI6OC4xLFwiYWxpZ25TZWxmXCI6OC4xLFwianVzdGlmeUNvbnRlbnRcIjo4LjEsXCJvcmRlclwiOjguMSxcInRyYW5zaXRpb25cIjo2LFwidHJhbnNpdGlvbkRlbGF5XCI6NixcInRyYW5zaXRpb25EdXJhdGlvblwiOjYsXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjo2LFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6NixcInRyYW5zZm9ybVwiOjguMSxcInRyYW5zZm9ybU9yaWdpblwiOjguMSxcInRyYW5zZm9ybU9yaWdpblhcIjo4LjEsXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6OC4xLFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6OC4xLFwicGVyc3BlY3RpdmVcIjo4LjEsXCJwZXJzcGVjdGl2ZU9yaWdpblwiOjguMSxcInRyYW5zZm9ybVN0eWxlXCI6OC4xLFwidHJhbnNmb3JtT3JpZ2luWlwiOjguMSxcImFuaW1hdGlvblwiOjguMSxcImFuaW1hdGlvbkRlbGF5XCI6OC4xLFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6OC4xLFwiYW5pbWF0aW9uRmlsbE1vZGVcIjo4LjEsXCJhbmltYXRpb25EdXJhdGlvblwiOjguMSxcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6OC4xLFwiYW5pbWF0aW9uTmFtZVwiOjguMSxcImFuaW1hdGlvblBsYXlTdGF0ZVwiOjguMSxcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6OC4xLFwiYXBwZWFyYW5jZVwiOjkuMyxcInVzZXJTZWxlY3RcIjo5LjMsXCJiYWNrZHJvcEZpbHRlclwiOjkuMyxcImZvbnRLZXJuaW5nXCI6OS4zLFwic2Nyb2xsU25hcFR5cGVcIjo5LjMsXCJzY3JvbGxTbmFwUG9pbnRzWFwiOjkuMyxcInNjcm9sbFNuYXBQb2ludHNZXCI6OS4zLFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6OS4zLFwic2Nyb2xsU25hcENvb3JkaW5hdGVcIjo5LjMsXCJib3hEZWNvcmF0aW9uQnJlYWtcIjo5LjMsXCJjbGlwUGF0aFwiOjkuMyxcIm1hc2tJbWFnZVwiOjkuMyxcIm1hc2tNb2RlXCI6OS4zLFwibWFza1JlcGVhdFwiOjkuMyxcIm1hc2tQb3NpdGlvblwiOjkuMyxcIm1hc2tDbGlwXCI6OS4zLFwibWFza09yaWdpblwiOjkuMyxcIm1hc2tTaXplXCI6OS4zLFwibWFza0NvbXBvc2l0ZVwiOjkuMyxcIm1hc2tcIjo5LjMsXCJtYXNrQm9yZGVyU291cmNlXCI6OS4zLFwibWFza0JvcmRlck1vZGVcIjo5LjMsXCJtYXNrQm9yZGVyU2xpY2VcIjo5LjMsXCJtYXNrQm9yZGVyV2lkdGhcIjo5LjMsXCJtYXNrQm9yZGVyT3V0c2V0XCI6OS4zLFwibWFza0JvcmRlclJlcGVhdFwiOjkuMyxcIm1hc2tCb3JkZXJcIjo5LjMsXCJtYXNrVHlwZVwiOjkuMyxcInRleHRTaXplQWRqdXN0XCI6OS4zLFwidGV4dERlY29yYXRpb25TdHlsZVwiOjkuMyxcInRleHREZWNvcmF0aW9uU2tpcFwiOjkuMyxcInRleHREZWNvcmF0aW9uTGluZVwiOjkuMyxcInRleHREZWNvcmF0aW9uQ29sb3JcIjo5LjMsXCJzaGFwZUltYWdlVGhyZXNob2xkXCI6OS4zLFwic2hhcGVJbWFnZU1hcmdpblwiOjkuMyxcInNoYXBlSW1hZ2VPdXRzaWRlXCI6OS4zLFwiZmlsdGVyXCI6OSxcImh5cGhlbnNcIjo5LjMsXCJmbG93SW50b1wiOjkuMyxcImZsb3dGcm9tXCI6OS4zLFwiYnJlYWtCZWZvcmVcIjo4LjEsXCJicmVha0FmdGVyXCI6OC4xLFwiYnJlYWtJbnNpZGVcIjo4LjEsXCJyZWdpb25GcmFnbWVudFwiOjkuMyxcImNvbHVtbkNvdW50XCI6OC4xLFwiY29sdW1uRmlsbFwiOjguMSxcImNvbHVtbkdhcFwiOjguMSxcImNvbHVtblJ1bGVcIjo4LjEsXCJjb2x1bW5SdWxlQ29sb3JcIjo4LjEsXCJjb2x1bW5SdWxlU3R5bGVcIjo4LjEsXCJjb2x1bW5SdWxlV2lkdGhcIjo4LjEsXCJjb2x1bW5zXCI6OC4xLFwiY29sdW1uU3BhblwiOjguMSxcImNvbHVtbldpZHRoXCI6OC4xfSxcImFuZHJvaWRcIjp7XCJib3JkZXJJbWFnZVwiOjQuMixcImJvcmRlckltYWdlT3V0c2V0XCI6NC4yLFwiYm9yZGVySW1hZ2VSZXBlYXRcIjo0LjIsXCJib3JkZXJJbWFnZVNsaWNlXCI6NC4yLFwiYm9yZGVySW1hZ2VTb3VyY2VcIjo0LjIsXCJib3JkZXJJbWFnZVdpZHRoXCI6NC4yLFwiZmxleFwiOjQuMixcImZsZXhCYXNpc1wiOjQuMixcImZsZXhEaXJlY3Rpb25cIjo0LjIsXCJmbGV4R3Jvd1wiOjQuMixcImZsZXhGbG93XCI6NC4yLFwiZmxleFNocmlua1wiOjQuMixcImZsZXhXcmFwXCI6NC4yLFwiYWxpZ25Db250ZW50XCI6NC4yLFwiYWxpZ25JdGVtc1wiOjQuMixcImFsaWduU2VsZlwiOjQuMixcImp1c3RpZnlDb250ZW50XCI6NC4yLFwib3JkZXJcIjo0LjIsXCJ0cmFuc2l0aW9uXCI6NC4yLFwidHJhbnNpdGlvbkRlbGF5XCI6NC4yLFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6NC4yLFwidHJhbnNpdGlvblByb3BlcnR5XCI6NC4yLFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6NC4yLFwidHJhbnNmb3JtXCI6NC40LFwidHJhbnNmb3JtT3JpZ2luXCI6NC40LFwidHJhbnNmb3JtT3JpZ2luWFwiOjQuNCxcInRyYW5zZm9ybU9yaWdpbllcIjo0LjQsXCJiYWNrZmFjZVZpc2liaWxpdHlcIjo0LjQsXCJwZXJzcGVjdGl2ZVwiOjQuNCxcInBlcnNwZWN0aXZlT3JpZ2luXCI6NC40LFwidHJhbnNmb3JtU3R5bGVcIjo0LjQsXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6NC40LFwiYW5pbWF0aW9uXCI6NC40LFwiYW5pbWF0aW9uRGVsYXlcIjo0LjQsXCJhbmltYXRpb25EaXJlY3Rpb25cIjo0LjQsXCJhbmltYXRpb25GaWxsTW9kZVwiOjQuNCxcImFuaW1hdGlvbkR1cmF0aW9uXCI6NC40LFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjo0LjQsXCJhbmltYXRpb25OYW1lXCI6NC40LFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6NC40LFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjo0LjQsXCJhcHBlYXJhbmNlXCI6NDYsXCJ1c2VyU2VsZWN0XCI6NDYsXCJmb250S2VybmluZ1wiOjQuNCxcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6NDYsXCJ0ZXh0RW1waGFzaXNcIjo0NixcInRleHRFbXBoYXNpc1N0eWxlXCI6NDYsXCJ0ZXh0RW1waGFzaXNDb2xvclwiOjQ2LFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6NDYsXCJjbGlwUGF0aFwiOjQ2LFwibWFza0ltYWdlXCI6NDYsXCJtYXNrTW9kZVwiOjQ2LFwibWFza1JlcGVhdFwiOjQ2LFwibWFza1Bvc2l0aW9uXCI6NDYsXCJtYXNrQ2xpcFwiOjQ2LFwibWFza09yaWdpblwiOjQ2LFwibWFza1NpemVcIjo0NixcIm1hc2tDb21wb3NpdGVcIjo0NixcIm1hc2tcIjo0NixcIm1hc2tCb3JkZXJTb3VyY2VcIjo0NixcIm1hc2tCb3JkZXJNb2RlXCI6NDYsXCJtYXNrQm9yZGVyU2xpY2VcIjo0NixcIm1hc2tCb3JkZXJXaWR0aFwiOjQ2LFwibWFza0JvcmRlck91dHNldFwiOjQ2LFwibWFza0JvcmRlclJlcGVhdFwiOjQ2LFwibWFza0JvcmRlclwiOjQ2LFwibWFza1R5cGVcIjo0NixcImZpbHRlclwiOjQ2LFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOjQ2LFwiYnJlYWtBZnRlclwiOjQ2LFwiYnJlYWtCZWZvcmVcIjo0NixcImJyZWFrSW5zaWRlXCI6NDYsXCJjb2x1bW5Db3VudFwiOjQ2LFwiY29sdW1uRmlsbFwiOjQ2LFwiY29sdW1uR2FwXCI6NDYsXCJjb2x1bW5SdWxlXCI6NDYsXCJjb2x1bW5SdWxlQ29sb3JcIjo0NixcImNvbHVtblJ1bGVTdHlsZVwiOjQ2LFwiY29sdW1uUnVsZVdpZHRoXCI6NDYsXCJjb2x1bW5zXCI6NDYsXCJjb2x1bW5TcGFuXCI6NDYsXCJjb2x1bW5XaWR0aFwiOjQ2fSxcImFuZF9jaHJcIjp7XCJhcHBlYXJhbmNlXCI6NDcsXCJ1c2VyU2VsZWN0XCI6NDcsXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOjQ3LFwidGV4dEVtcGhhc2lzXCI6NDcsXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOjQ3LFwidGV4dEVtcGhhc2lzQ29sb3JcIjo0NyxcImJveERlY29yYXRpb25CcmVha1wiOjQ3LFwiY2xpcFBhdGhcIjo0NyxcIm1hc2tJbWFnZVwiOjQ3LFwibWFza01vZGVcIjo0NyxcIm1hc2tSZXBlYXRcIjo0NyxcIm1hc2tQb3NpdGlvblwiOjQ3LFwibWFza0NsaXBcIjo0NyxcIm1hc2tPcmlnaW5cIjo0NyxcIm1hc2tTaXplXCI6NDcsXCJtYXNrQ29tcG9zaXRlXCI6NDcsXCJtYXNrXCI6NDcsXCJtYXNrQm9yZGVyU291cmNlXCI6NDcsXCJtYXNrQm9yZGVyTW9kZVwiOjQ3LFwibWFza0JvcmRlclNsaWNlXCI6NDcsXCJtYXNrQm9yZGVyV2lkdGhcIjo0NyxcIm1hc2tCb3JkZXJPdXRzZXRcIjo0NyxcIm1hc2tCb3JkZXJSZXBlYXRcIjo0NyxcIm1hc2tCb3JkZXJcIjo0NyxcIm1hc2tUeXBlXCI6NDcsXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6NDcsXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjo0NyxcInRleHREZWNvcmF0aW9uTGluZVwiOjQ3LFwidGV4dERlY29yYXRpb25Db2xvclwiOjQ3LFwiZmlsdGVyXCI6NDcsXCJmb250RmVhdHVyZVNldHRpbmdzXCI6NDcsXCJicmVha0FmdGVyXCI6NDcsXCJicmVha0JlZm9yZVwiOjQ3LFwiYnJlYWtJbnNpZGVcIjo0NyxcImNvbHVtbkNvdW50XCI6NDcsXCJjb2x1bW5GaWxsXCI6NDcsXCJjb2x1bW5HYXBcIjo0NyxcImNvbHVtblJ1bGVcIjo0NyxcImNvbHVtblJ1bGVDb2xvclwiOjQ3LFwiY29sdW1uUnVsZVN0eWxlXCI6NDcsXCJjb2x1bW5SdWxlV2lkdGhcIjo0NyxcImNvbHVtbnNcIjo0NyxcImNvbHVtblNwYW5cIjo0NyxcImNvbHVtbldpZHRoXCI6NDd9LFwiYW5kX3VjXCI6e1wiZmxleFwiOjkuOSxcImZsZXhCYXNpc1wiOjkuOSxcImZsZXhEaXJlY3Rpb25cIjo5LjksXCJmbGV4R3Jvd1wiOjkuOSxcImZsZXhGbG93XCI6OS45LFwiZmxleFNocmlua1wiOjkuOSxcImZsZXhXcmFwXCI6OS45LFwiYWxpZ25Db250ZW50XCI6OS45LFwiYWxpZ25JdGVtc1wiOjkuOSxcImFsaWduU2VsZlwiOjkuOSxcImp1c3RpZnlDb250ZW50XCI6OS45LFwib3JkZXJcIjo5LjksXCJ0cmFuc2l0aW9uXCI6OS45LFwidHJhbnNpdGlvbkRlbGF5XCI6OS45LFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6OS45LFwidHJhbnNpdGlvblByb3BlcnR5XCI6OS45LFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6OS45LFwidHJhbnNmb3JtXCI6OS45LFwidHJhbnNmb3JtT3JpZ2luXCI6OS45LFwidHJhbnNmb3JtT3JpZ2luWFwiOjkuOSxcInRyYW5zZm9ybU9yaWdpbllcIjo5LjksXCJiYWNrZmFjZVZpc2liaWxpdHlcIjo5LjksXCJwZXJzcGVjdGl2ZVwiOjkuOSxcInBlcnNwZWN0aXZlT3JpZ2luXCI6OS45LFwidHJhbnNmb3JtU3R5bGVcIjo5LjksXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6OS45LFwiYW5pbWF0aW9uXCI6OS45LFwiYW5pbWF0aW9uRGVsYXlcIjo5LjksXCJhbmltYXRpb25EaXJlY3Rpb25cIjo5LjksXCJhbmltYXRpb25GaWxsTW9kZVwiOjkuOSxcImFuaW1hdGlvbkR1cmF0aW9uXCI6OS45LFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjo5LjksXCJhbmltYXRpb25OYW1lXCI6OS45LFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6OS45LFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjo5LjksXCJhcHBlYXJhbmNlXCI6OS45LFwidXNlclNlbGVjdFwiOjkuOSxcImZvbnRLZXJuaW5nXCI6OS45LFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjo5LjksXCJ0ZXh0RW1waGFzaXNcIjo5LjksXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOjkuOSxcInRleHRFbXBoYXNpc0NvbG9yXCI6OS45LFwibWFza0ltYWdlXCI6OS45LFwibWFza01vZGVcIjo5LjksXCJtYXNrUmVwZWF0XCI6OS45LFwibWFza1Bvc2l0aW9uXCI6OS45LFwibWFza0NsaXBcIjo5LjksXCJtYXNrT3JpZ2luXCI6OS45LFwibWFza1NpemVcIjo5LjksXCJtYXNrQ29tcG9zaXRlXCI6OS45LFwibWFza1wiOjkuOSxcIm1hc2tCb3JkZXJTb3VyY2VcIjo5LjksXCJtYXNrQm9yZGVyTW9kZVwiOjkuOSxcIm1hc2tCb3JkZXJTbGljZVwiOjkuOSxcIm1hc2tCb3JkZXJXaWR0aFwiOjkuOSxcIm1hc2tCb3JkZXJPdXRzZXRcIjo5LjksXCJtYXNrQm9yZGVyUmVwZWF0XCI6OS45LFwibWFza0JvcmRlclwiOjkuOSxcIm1hc2tUeXBlXCI6OS45LFwidGV4dFNpemVBZGp1c3RcIjo5LjksXCJmaWx0ZXJcIjo5LjksXCJoeXBoZW5zXCI6OS45LFwiZmxvd0ludG9cIjo5LjksXCJmbG93RnJvbVwiOjkuOSxcImJyZWFrQmVmb3JlXCI6OS45LFwiYnJlYWtBZnRlclwiOjkuOSxcImJyZWFrSW5zaWRlXCI6OS45LFwicmVnaW9uRnJhZ21lbnRcIjo5LjksXCJmb250RmVhdHVyZVNldHRpbmdzXCI6OS45LFwiY29sdW1uQ291bnRcIjo5LjksXCJjb2x1bW5GaWxsXCI6OS45LFwiY29sdW1uR2FwXCI6OS45LFwiY29sdW1uUnVsZVwiOjkuOSxcImNvbHVtblJ1bGVDb2xvclwiOjkuOSxcImNvbHVtblJ1bGVTdHlsZVwiOjkuOSxcImNvbHVtblJ1bGVXaWR0aFwiOjkuOSxcImNvbHVtbnNcIjo5LjksXCJjb2x1bW5TcGFuXCI6OS45LFwiY29sdW1uV2lkdGhcIjo5Ljl9LFwib3BfbWluaVwiOntcImJvcmRlckltYWdlXCI6NSxcImJvcmRlckltYWdlT3V0c2V0XCI6NSxcImJvcmRlckltYWdlUmVwZWF0XCI6NSxcImJvcmRlckltYWdlU2xpY2VcIjo1LFwiYm9yZGVySW1hZ2VTb3VyY2VcIjo1LFwiYm9yZGVySW1hZ2VXaWR0aFwiOjUsXCJ0YWJTaXplXCI6NSxcIm9iamVjdEZpdFwiOjUsXCJvYmplY3RQb3NpdGlvblwiOjV9fTsgbW9kdWxlLmV4cG9ydHMgPSBjYW5pdXNlRGF0YVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvY2FuaXVzZURhdGEuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNhbGM7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIGNhbGMocGx1Z2luSW50ZXJmYWNlKSB7XG4gIHZhciBwcm9wZXJ0eSA9IHBsdWdpbkludGVyZmFjZS5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gcGx1Z2luSW50ZXJmYWNlLnZhbHVlO1xuICB2YXIgYnJvd3NlckluZm8gPSBwbHVnaW5JbnRlcmZhY2UuYnJvd3NlckluZm87XG4gIHZhciBwcmVmaXggPSBwbHVnaW5JbnRlcmZhY2UucHJlZml4O1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBwbHVnaW5JbnRlcmZhY2Uua2VlcFVucHJlZml4ZWQ7XG4gIHZhciBmb3JjZVJ1biA9IHBsdWdpbkludGVyZmFjZS5mb3JjZVJ1bjtcbiAgdmFyIGJyb3dzZXIgPSBicm93c2VySW5mby5icm93c2VyO1xuICB2YXIgdmVyc2lvbiA9IGJyb3dzZXJJbmZvLnZlcnNpb247XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignY2FsYygnKSA+IC0xICYmIChmb3JjZVJ1biB8fCBicm93c2VyID09PSAnZmlyZWZveCcgJiYgdmVyc2lvbiA8IDE1IHx8IGJyb3dzZXIgPT09ICdjaHJvbWUnICYmIHZlcnNpb24gPCAyNSB8fCBicm93c2VyID09PSAnc2FmYXJpJyAmJiB2ZXJzaW9uIDwgNi4xIHx8IGJyb3dzZXIgPT09ICdpb3Nfc2FmJyAmJiB2ZXJzaW9uIDwgNykpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBmb3JjZVJ1biA/XG4gICAgLy8gcHJlZml4IGFsbFxuICAgIFsnLXdlYmtpdC0nLCAnLW1vei0nXS5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2NhbGNcXCgvZywgcHJlZml4ICsgJ2NhbGMoJyk7XG4gICAgfSkuam9pbignOycgKyBwcm9wZXJ0eSArICc6JykgOlxuICAgIC8vIGRlZmF1bHRcbiAgICB2YWx1ZS5yZXBsYWNlKC9jYWxjXFwoL2csIHByZWZpeC5jc3MgKyAnY2FsYygnKTtcbiAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wZXJ0eSwgbmV3VmFsdWUgKyAoa2VlcFVucHJlZml4ZWQgPyAnOycgKyBwcm9wZXJ0eSArICc6JyArIHZhbHVlIDogJycpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3Vyc29yO1xudmFyIHZhbHVlcyA9IHtcbiAgJ3pvb20taW4nOiB0cnVlLFxuICAnem9vbS1vdXQnOiB0cnVlLFxuICBncmFiOiB0cnVlLFxuICBncmFiYmluZzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gY3Vyc29yKHBsdWdpbkludGVyZmFjZSkge1xuICB2YXIgcHJvcGVydHkgPSBwbHVnaW5JbnRlcmZhY2UucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IHBsdWdpbkludGVyZmFjZS52YWx1ZTtcbiAgdmFyIGJyb3dzZXJJbmZvID0gcGx1Z2luSW50ZXJmYWNlLmJyb3dzZXJJbmZvO1xuICB2YXIgcHJlZml4ID0gcGx1Z2luSW50ZXJmYWNlLnByZWZpeDtcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gcGx1Z2luSW50ZXJmYWNlLmtlZXBVbnByZWZpeGVkO1xuICB2YXIgZm9yY2VSdW4gPSBwbHVnaW5JbnRlcmZhY2UuZm9yY2VSdW47XG4gIHZhciBicm93c2VyID0gYnJvd3NlckluZm8uYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBicm93c2VySW5mby52ZXJzaW9uO1xuXG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2N1cnNvcicgJiYgdmFsdWVzW3ZhbHVlXSAmJiAoZm9yY2VSdW4gfHwgYnJvd3NlciA9PT0gJ2ZpcmVmb3gnICYmIHZlcnNpb24gPCAyNCB8fCBicm93c2VyID09PSAnY2hyb21lJyAmJiB2ZXJzaW9uIDwgMzcgfHwgYnJvd3NlciA9PT0gJ3NhZmFyaScgJiYgdmVyc2lvbiA8IDkgfHwgYnJvd3NlciA9PT0gJ29wZXJhJyAmJiB2ZXJzaW9uIDwgMjQpKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gZm9yY2VSdW4gP1xuICAgIC8vIHByZWZpeCBhbGxcbiAgICBbJy13ZWJraXQtJywgJy1tb3otJ10ubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyB2YWx1ZTtcbiAgICB9KS5qb2luKCc7JyArIHByb3BlcnR5ICsgJzonKSA6XG4gICAgLy8gZGVmYXVsdFxuICAgIHByZWZpeC5jc3MgKyB2YWx1ZTtcbiAgICByZXR1cm4ge1xuICAgICAgY3Vyc29yOiBuZXdWYWx1ZSArIChrZWVwVW5wcmVmaXhlZCA/ICc7JyArIHByb3BlcnR5ICsgJzonICsgdmFsdWUgOiAnJylcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9jdXJzb3IuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZsZXg7XG52YXIgdmFsdWVzID0geyBmbGV4OiB0cnVlLCAnaW5saW5lLWZsZXgnOiB0cnVlIH07XG5cbmZ1bmN0aW9uIGZsZXgocGx1Z2luSW50ZXJmYWNlKSB7XG4gIHZhciBwcm9wZXJ0eSA9IHBsdWdpbkludGVyZmFjZS5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gcGx1Z2luSW50ZXJmYWNlLnZhbHVlO1xuICB2YXIgYnJvd3NlckluZm8gPSBwbHVnaW5JbnRlcmZhY2UuYnJvd3NlckluZm87XG4gIHZhciBwcmVmaXggPSBwbHVnaW5JbnRlcmZhY2UucHJlZml4O1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBwbHVnaW5JbnRlcmZhY2Uua2VlcFVucHJlZml4ZWQ7XG4gIHZhciBmb3JjZVJ1biA9IHBsdWdpbkludGVyZmFjZS5mb3JjZVJ1bjtcbiAgdmFyIGJyb3dzZXIgPSBicm93c2VySW5mby5icm93c2VyO1xuICB2YXIgdmVyc2lvbiA9IGJyb3dzZXJJbmZvLnZlcnNpb247XG5cbiAgaWYgKHByb3BlcnR5ID09PSAnZGlzcGxheScgJiYgdmFsdWVzW3ZhbHVlXSAmJiAoZm9yY2VSdW4gfHwgYnJvd3NlciA9PT0gJ2Nocm9tZScgJiYgdmVyc2lvbiA8IDI5ICYmIHZlcnNpb24gPiAyMCB8fCAoYnJvd3NlciA9PT0gJ3NhZmFyaScgfHwgYnJvd3NlciA9PT0gJ2lvc19zYWYnKSAmJiB2ZXJzaW9uIDwgOSAmJiB2ZXJzaW9uID4gNiB8fCBicm93c2VyID09PSAnb3BlcmEnICYmICh2ZXJzaW9uID09IDE1IHx8IHZlcnNpb24gPT0gMTYpKSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IGZvcmNlUnVuID9cbiAgICAvLyBwcmVmaXggYWxsXG4gICAgWyctd2Via2l0LWJveCcsICctbW96LWJveCcsICctbXMtJyArIHZhbHVlICsgJ2JveCcsICctd2Via2l0LScgKyB2YWx1ZV0uam9pbignOycgKyBwcm9wZXJ0eSArICc6JykgOlxuICAgIC8vIGRlZmF1bHRcbiAgICAnLXdlYmtpdC0nICsgdmFsdWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IG5ld1ZhbHVlICsgKGtlZXBVbnByZWZpeGVkID8gJzsnICsgcHJvcGVydHkgKyAnOicgKyB2YWx1ZSA6ICcnKVxuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2ZsZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZmxleGJveElFO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnZGlzdHJpYnV0ZScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnLFxuICBmbGV4OiAnLW1zLWZsZXhib3gnLFxuICAnaW5saW5lLWZsZXgnOiAnLW1zLWlubGluZS1mbGV4Ym94J1xufTtcbnZhciBhbHRlcm5hdGl2ZVByb3BzID0ge1xuICBhbGlnbkNvbnRlbnQ6ICdtc0ZsZXhMaW5lUGFjaycsXG4gIGFsaWduU2VsZjogJ21zRmxleEl0ZW1BbGlnbicsXG4gIGFsaWduSXRlbXM6ICdtc0ZsZXhBbGlnbicsXG4gIGp1c3RpZnlDb250ZW50OiAnbXNGbGV4UGFjaycsXG4gIG9yZGVyOiAnbXNGbGV4T3JkZXInLFxuICBmbGV4R3JvdzogJ21zRmxleFBvc2l0aXZlJyxcbiAgZmxleFNocmluazogJ21zRmxleE5lZ2F0aXZlJyxcbiAgZmxleEJhc2lzOiAnbXNQcmVmZXJyZWRTaXplJ1xufTtcblxudmFyIHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhhbHRlcm5hdGl2ZVByb3BzKS5jb25jYXQoJ2Rpc3BsYXknKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgcHJvcCkge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3VsdCwgX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wLCB0cnVlKSk7XG59LCB7fSk7XG5cbmZ1bmN0aW9uIGZsZXhib3hJRShwbHVnaW5JbnRlcmZhY2UpIHtcbiAgdmFyIHByb3BlcnR5ID0gcGx1Z2luSW50ZXJmYWNlLnByb3BlcnR5O1xuICB2YXIgdmFsdWUgPSBwbHVnaW5JbnRlcmZhY2UudmFsdWU7XG4gIHZhciBzdHlsZXMgPSBwbHVnaW5JbnRlcmZhY2Uuc3R5bGVzO1xuICB2YXIgYnJvd3NlckluZm8gPSBwbHVnaW5JbnRlcmZhY2UuYnJvd3NlckluZm87XG4gIHZhciBwcmVmaXggPSBwbHVnaW5JbnRlcmZhY2UucHJlZml4O1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBwbHVnaW5JbnRlcmZhY2Uua2VlcFVucHJlZml4ZWQ7XG4gIHZhciBmb3JjZVJ1biA9IHBsdWdpbkludGVyZmFjZS5mb3JjZVJ1bjtcbiAgdmFyIGJyb3dzZXIgPSBicm93c2VySW5mby5icm93c2VyO1xuICB2YXIgdmVyc2lvbiA9IGJyb3dzZXJJbmZvLnZlcnNpb247XG5cbiAgaWYgKHByb3BlcnRpZXNbcHJvcGVydHldICYmIChmb3JjZVJ1biB8fCAoYnJvd3NlciA9PT0gJ2llX21vYicgfHwgYnJvd3NlciA9PT0gJ2llJykgJiYgdmVyc2lvbiA9PSAxMCkpIHtcbiAgICBpZiAoIWtlZXBVbnByZWZpeGVkKSB7XG4gICAgICBkZWxldGUgc3R5bGVzW3Byb3BlcnR5XTtcbiAgICB9XG5cbiAgICBpZiAoYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0pIHtcbiAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldLCBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWUpO1xuICAgIH1cbiAgICBpZiAoYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdKSB7XG4gICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wZXJ0eSwgYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdICsgKGtlZXBVbnByZWZpeGVkID8gJzsnICsgcHJvcGVydHkgKyAnOicgKyB2YWx1ZSA6ICcnKSk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9mbGV4Ym94SUUuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZmxleGJveE9sZDtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2p1c3RpZnknLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgJ3dyYXAtcmV2ZXJzZSc6ICdtdWx0aXBsZScsXG4gIHdyYXA6ICdtdWx0aXBsZScsXG4gIGZsZXg6ICdib3gnLFxuICAnaW5saW5lLWZsZXgnOiAnaW5saW5lLWJveCdcbn07XG5cbnZhciBhbHRlcm5hdGl2ZVByb3BzID0ge1xuICBhbGlnbkl0ZW1zOiAnV2Via2l0Qm94QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ1dlYmtpdEJveFBhY2snLFxuICBmbGV4V3JhcDogJ1dlYmtpdEJveExpbmVzJ1xufTtcblxudmFyIHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhhbHRlcm5hdGl2ZVByb3BzKS5jb25jYXQoWydhbGlnbkNvbnRlbnQnLCAnYWxpZ25TZWxmJywgJ2Rpc3BsYXknLCAnb3JkZXInLCAnZmxleEdyb3cnLCAnZmxleFNocmluaycsICdmbGV4QmFzaXMnLCAnZmxleERpcmVjdGlvbiddKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgcHJvcCkge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3VsdCwgX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wLCB0cnVlKSk7XG59LCB7fSk7XG5cbmZ1bmN0aW9uIGZsZXhib3hPbGQocGx1Z2luSW50ZXJmYWNlKSB7XG4gIHZhciBwcm9wZXJ0eSA9IHBsdWdpbkludGVyZmFjZS5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gcGx1Z2luSW50ZXJmYWNlLnZhbHVlO1xuICB2YXIgc3R5bGVzID0gcGx1Z2luSW50ZXJmYWNlLnN0eWxlcztcbiAgdmFyIGJyb3dzZXJJbmZvID0gcGx1Z2luSW50ZXJmYWNlLmJyb3dzZXJJbmZvO1xuICB2YXIgcHJlZml4ID0gcGx1Z2luSW50ZXJmYWNlLnByZWZpeDtcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gcGx1Z2luSW50ZXJmYWNlLmtlZXBVbnByZWZpeGVkO1xuICB2YXIgZm9yY2VSdW4gPSBwbHVnaW5JbnRlcmZhY2UuZm9yY2VSdW47XG4gIHZhciBicm93c2VyID0gYnJvd3NlckluZm8uYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBicm93c2VySW5mby52ZXJzaW9uO1xuXG4gIGlmIChwcm9wZXJ0aWVzW3Byb3BlcnR5XSAmJiAoZm9yY2VSdW4gfHwgYnJvd3NlciA9PT0gJ2ZpcmVmb3gnICYmIHZlcnNpb24gPCAyMiB8fCBicm93c2VyID09PSAnY2hyb21lJyAmJiB2ZXJzaW9uIDwgMjEgfHwgKGJyb3dzZXIgPT09ICdzYWZhcmknIHx8IGJyb3dzZXIgPT09ICdpb3Nfc2FmJykgJiYgdmVyc2lvbiA8PSA2LjEgfHwgYnJvd3NlciA9PT0gJ2FuZHJvaWQnICYmIHZlcnNpb24gPCA0LjQgfHwgYnJvd3NlciA9PT0gJ2FuZF91YycpKSB7XG4gICAgaWYgKCFrZWVwVW5wcmVmaXhlZCkge1xuICAgICAgZGVsZXRlIHN0eWxlc1twcm9wZXJ0eV07XG4gICAgfVxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2ZsZXhEaXJlY3Rpb24nKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBXZWJraXRCb3hPcmllbnQ6IHZhbHVlLmluZGV4T2YoJ2NvbHVtbicpID4gLTEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgICAgICBXZWJraXRCb3hEaXJlY3Rpb246IHZhbHVlLmluZGV4T2YoJ3JldmVyc2UnKSA+IC0xID8gJ3JldmVyc2UnIDogJ25vcm1hbCdcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogcHJlZml4LmNzcyArIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSArIChrZWVwVW5wcmVmaXhlZCA/ICc7JyArIHByb3BlcnR5ICsgJzonICsgdmFsdWUgOiAnJylcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0sIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gICAgfVxuICAgIGlmIChhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0pIHtcbiAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gKyAoa2VlcFVucHJlZml4ZWQgPyAnOycgKyBwcm9wZXJ0eSArICc6JyArIHZhbHVlIDogJycpKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2ZsZXhib3hPbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGdyYWRpZW50O1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgdmFsdWVzID0gL2xpbmVhci1ncmFkaWVudHxyYWRpYWwtZ3JhZGllbnR8cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudHxyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50LztcblxuZnVuY3Rpb24gZ3JhZGllbnQocGx1Z2luSW50ZXJmYWNlKSB7XG4gIHZhciBwcm9wZXJ0eSA9IHBsdWdpbkludGVyZmFjZS5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gcGx1Z2luSW50ZXJmYWNlLnZhbHVlO1xuICB2YXIgYnJvd3NlckluZm8gPSBwbHVnaW5JbnRlcmZhY2UuYnJvd3NlckluZm87XG4gIHZhciBwcmVmaXggPSBwbHVnaW5JbnRlcmZhY2UucHJlZml4O1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBwbHVnaW5JbnRlcmZhY2Uua2VlcFVucHJlZml4ZWQ7XG4gIHZhciBmb3JjZVJ1biA9IHBsdWdpbkludGVyZmFjZS5mb3JjZVJ1bjtcbiAgdmFyIGJyb3dzZXIgPSBicm93c2VySW5mby5icm93c2VyO1xuICB2YXIgdmVyc2lvbiA9IGJyb3dzZXJJbmZvLnZlcnNpb247XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubWF0Y2godmFsdWVzKSAhPT0gbnVsbCAmJiAoZm9yY2VSdW4gfHwgYnJvd3NlciA9PT0gJ2ZpcmVmb3gnICYmIHZlcnNpb24gPCAxNiB8fCBicm93c2VyID09PSAnY2hyb21lJyAmJiB2ZXJzaW9uIDwgMjYgfHwgKGJyb3dzZXIgPT09ICdzYWZhcmknIHx8IGJyb3dzZXIgPT09ICdpb3Nfc2FmJykgJiYgdmVyc2lvbiA8IDcgfHwgKGJyb3dzZXIgPT09ICdvcGVyYScgfHwgYnJvd3NlciA9PT0gJ29wX21pbmknKSAmJiB2ZXJzaW9uIDwgMTIuMSB8fCBicm93c2VyID09PSAnYW5kcm9pZCcgJiYgdmVyc2lvbiA8IDQuNCB8fCBicm93c2VyID09PSAnYW5kX3VjJykpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBmb3JjZVJ1biA/XG4gICAgLy8gcHJlZml4IGFsbFxuICAgIFsnLXdlYmtpdC0nLCAnLW1vei0nXS5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHByZWZpeCArIHZhbHVlO1xuICAgIH0pLmpvaW4oJzsnICsgcHJvcGVydHkgKyAnOicpIDpcbiAgICAvLyBkZWZhdWx0XG4gICAgcHJlZml4LmNzcyArIHZhbHVlO1xuICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCBuZXdWYWx1ZSArIChrZWVwVW5wcmVmaXhlZCA/ICc7JyArIHByb3BlcnR5ICsgJzonICsgdmFsdWUgOiAnJykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9ncmFkaWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc2l6aW5nO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgcHJvcGVydGllcyA9IHtcbiAgbWF4SGVpZ2h0OiB0cnVlLFxuICBtYXhXaWR0aDogdHJ1ZSxcbiAgd2lkdGg6IHRydWUsXG4gIGhlaWdodDogdHJ1ZSxcbiAgY29sdW1uV2lkdGg6IHRydWUsXG4gIG1pbldpZHRoOiB0cnVlLFxuICBtaW5IZWlnaHQ6IHRydWVcbn07XG52YXIgdmFsdWVzID0ge1xuICAnbWluLWNvbnRlbnQnOiB0cnVlLFxuICAnbWF4LWNvbnRlbnQnOiB0cnVlLFxuICAnZmlsbC1hdmFpbGFibGUnOiB0cnVlLFxuICAnZml0LWNvbnRlbnQnOiB0cnVlLFxuICAnY29udGFpbi1mbG9hdHMnOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBzaXppbmcocGx1Z2luSW50ZXJmYWNlKSB7XG4gIHZhciBwcm9wZXJ0eSA9IHBsdWdpbkludGVyZmFjZS5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gcGx1Z2luSW50ZXJmYWNlLnZhbHVlO1xuICB2YXIgYnJvd3NlckluZm8gPSBwbHVnaW5JbnRlcmZhY2UuYnJvd3NlckluZm87XG4gIHZhciBwcmVmaXggPSBwbHVnaW5JbnRlcmZhY2UucHJlZml4O1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBwbHVnaW5JbnRlcmZhY2Uua2VlcFVucHJlZml4ZWQ7XG4gIHZhciBmb3JjZVJ1biA9IHBsdWdpbkludGVyZmFjZS5mb3JjZVJ1bjtcbiAgdmFyIGJyb3dzZXIgPSBicm93c2VySW5mby5icm93c2VyO1xuICB2YXIgdmVyc2lvbiA9IGJyb3dzZXJJbmZvLnZlcnNpb247XG5cbiAgLy8gVGhpcyBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZVxuICAvLyBLZWVwIGFuIGV5ZSBvbiBpdFxuICBpZiAocHJvcGVydGllc1twcm9wZXJ0eV0gJiYgdmFsdWVzW3ZhbHVlXSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IGZvcmNlUnVuID9cbiAgICAvLyBwcmVmaXggYWxsXG4gICAgWyctd2Via2l0LScsICctbW96LSddLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgdmFsdWU7XG4gICAgfSkuam9pbignOycgKyBwcm9wZXJ0eSArICc6JykgOlxuICAgIC8vIGRlZmF1bHRcbiAgICBwcmVmaXguY3NzICsgdmFsdWU7XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIG5ld1ZhbHVlICsgKGtlZXBVbnByZWZpeGVkID8gJzsnICsgcHJvcGVydHkgKyAnOicgKyB2YWx1ZSA6ICcnKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL3NpemluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY2FsYztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FtZWxUb0Rhc2hDYXNlJyk7XG5cbnZhciBfdXRpbHNDYW1lbFRvRGFzaENhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDYW1lbFRvRGFzaENhc2UpO1xuXG52YXIgX3V0aWxzQ2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF91dGlsc0NhcGl0YWxpemVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDYXBpdGFsaXplU3RyaW5nKTtcblxuZnVuY3Rpb24gY2FsYyhwbHVnaW5JbnRlcmZhY2UpIHtcbiAgdmFyIHByb3BlcnR5ID0gcGx1Z2luSW50ZXJmYWNlLnByb3BlcnR5O1xuICB2YXIgdmFsdWUgPSBwbHVnaW5JbnRlcmZhY2UudmFsdWU7XG4gIHZhciBicm93c2VySW5mbyA9IHBsdWdpbkludGVyZmFjZS5icm93c2VySW5mbztcbiAgdmFyIHByZWZpeCA9IHBsdWdpbkludGVyZmFjZS5wcmVmaXg7XG4gIHZhciBrZWVwVW5wcmVmaXhlZCA9IHBsdWdpbkludGVyZmFjZS5rZWVwVW5wcmVmaXhlZDtcbiAgdmFyIGZvcmNlUnVuID0gcGx1Z2luSW50ZXJmYWNlLmZvcmNlUnVuO1xuICB2YXIgcmVxdWlyZXNQcmVmaXggPSBwbHVnaW5JbnRlcmZhY2UucmVxdWlyZXNQcmVmaXg7XG4gIHZhciBicm93c2VyID0gYnJvd3NlckluZm8uYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBicm93c2VySW5mby52ZXJzaW9uO1xuXG4gIGlmIChcbiAgLy8gYWxzbyBjaGVjayBmb3IgYWxyZWFkeSBwcmVmaXhlZCB0cmFuc2l0aW9uc1xuICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIChwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3RyYW5zaXRpb24nKSA+IC0xIHx8IHByb3BlcnR5LnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndHJhbnNpdGlvbnByb3BlcnR5JykgPiAtMSkpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfcmV0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXF1aXJlc1ByZWZpeERhc2hDYXNlZCA9IE9iamVjdC5rZXlzKHJlcXVpcmVzUHJlZml4KS5tYXAoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlMlsnZGVmYXVsdCddKShwcm9wZXJ0eSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAvLyBvbmx5IHNwbGl0IG11bHRpIHZhbHVlcywgbm90IGN1YmljIGJlemllcnNcbiAgICAgIHZhciBtdWx0aXBsZVZhbHVlcyA9IG5ld1ZhbHVlLnNwbGl0KC8sKD8hW14oKV0qKD86XFwoW14oKV0qXFwpKT9cXCkpL2cpO1xuXG4gICAgICByZXF1aXJlc1ByZWZpeERhc2hDYXNlZC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICBtdWx0aXBsZVZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICAgICAgaWYgKHZhbC5pbmRleE9mKHByb3BlcnR5KSA+IC0xKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsID0gZm9yY2VSdW4gP1xuICAgICAgICAgICAgLy8gcHJlZml4IGFsbFxuICAgICAgICAgICAgWyctd2Via2l0LScsICctbW96LScsICctbXMtJ10ubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbC5yZXBsYWNlKHByb3BlcnR5LCBwcmVmaXggKyBwcm9wZXJ0eSk7XG4gICAgICAgICAgICB9KS5qb2luKCcsJykgOlxuICAgICAgICAgICAgLy8gZGVmYXVsdFxuICAgICAgICAgICAgdmFsLnJlcGxhY2UocHJvcGVydHksIHByZWZpeC5jc3MgKyBwcm9wZXJ0eSk7XG4gICAgICAgICAgICBtdWx0aXBsZVZhbHVlc1tpbmRleF0gPSBuZXdWYWwgKyAoa2VlcFVucHJlZml4ZWQgPyAnLCcgKyB2YWwgOiAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdmFyIG91dHB1dFZhbHVlID0gbXVsdGlwbGVWYWx1ZXMuam9pbignLCcpO1xuICAgICAgaWYgKGZvcmNlUnVuKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdjogKF9yZWYgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9yZWYsICdXZWJraXQnICsgKDAsIF91dGlsc0NhcGl0YWxpemVTdHJpbmcyWydkZWZhdWx0J10pKHByb3BlcnR5KSwgb3V0cHV0VmFsdWUpLCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgJ01veicgKyAoMCwgX3V0aWxzQ2FwaXRhbGl6ZVN0cmluZzJbJ2RlZmF1bHQnXSkocHJvcGVydHkpLCBvdXRwdXRWYWx1ZSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCAnbXMnICsgKDAsIF91dGlsc0NhcGl0YWxpemVTdHJpbmcyWydkZWZhdWx0J10pKHByb3BlcnR5KSwgb3V0cHV0VmFsdWUpLCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgcHJvcGVydHksIG91dHB1dFZhbHVlKSwgX3JlZilcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIG91dHB1dFZhbHVlKVxuICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgaWYgKHR5cGVvZiBfcmV0ID09PSAnb2JqZWN0JykgcmV0dXJuIF9yZXQudjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvdHJhbnNpdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBsZWlnaHQgcG9seWZpbGwgZm9yIE9iamVjdC5hc3NpZ25cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChiYXNlKSB7XG4gIHZhciBleHRlbmQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICBPYmplY3Qua2V5cyhleHRlbmQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBiYXNlW2tleV0gPSBleHRlbmRba2V5XTtcbiAgfSk7XG4gIHJldHVybiBiYXNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2Fzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvbnZlcnRzIGEgY2FtZWwtY2FzZSBzdHJpbmcgdG8gYSBkYXNoLWNhc2Ugc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gc3RyIHRoYXQgZ2V0cyBjb252ZXJ0ZWQgdG8gZGFzaC1jYXNlXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2Etel18XikoW0EtWl0pL2csIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgcmV0dXJuIHAxICsgJy0nICsgcDIudG9Mb3dlckNhc2UoKTtcbiAgfSkucmVwbGFjZSgnbXMtJywgJy1tcy0nKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvY2FtZWxUb0Rhc2hDYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9ib3dzZXIgPSByZXF1aXJlKCdib3dzZXInKTtcblxudmFyIF9ib3dzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYm93c2VyKTtcblxudmFyIHZlbmRvclByZWZpeGVzID0ge1xuICBXZWJraXQ6IFsnY2hyb21lJywgJ3NhZmFyaScsICdpb3MnLCAnYW5kcm9pZCcsICdwaGFudG9tJywgJ29wZXJhJywgJ3dlYm9zJywgJ2JsYWNrYmVycnknLCAnYmFkYScsICd0aXplbiddLFxuICBNb3o6IFsnZmlyZWZveCcsICdzZWFtb25rZXknLCAnc2FpbGZpc2gnXSxcbiAgbXM6IFsnbXNpZScsICdtc2VkZ2UnXVxufTtcblxudmFyIGJyb3dzZXJzID0ge1xuICBjaHJvbWU6IFtbJ2Nocm9tZSddXSxcbiAgc2FmYXJpOiBbWydzYWZhcmknXV0sXG4gIGZpcmVmb3g6IFtbJ2ZpcmVmb3gnXV0sXG4gIGllOiBbWydtc2llJ11dLFxuICBlZGdlOiBbWydtc2VkZ2UnXV0sXG4gIG9wZXJhOiBbWydvcGVyYSddXSxcbiAgaW9zX3NhZjogW1snaW9zJywgJ21vYmlsZSddLCBbJ2lvcycsICd0YWJsZXQnXV0sXG4gIGllX21vYjogW1snd2luZG93c3Bob25lJywgJ21vYmlsZScsICdtc2llJ10sIFsnd2luZG93c3Bob25lJywgJ3RhYmxldCcsICdtc2llJ10sIFsnd2luZG93c3Bob25lJywgJ21vYmlsZScsICdtc2VkZ2UnXSwgWyd3aW5kb3dzcGhvbmUnLCAndGFibGV0JywgJ21zZWRnZSddXSxcbiAgb3BfbWluaTogW1snb3BlcmEnLCAnbW9iaWxlJ10sIFsnb3BlcmEnLCAndGFibGV0J11dLFxuICBhbmRfdWM6IFtbJ2FuZHJvaWQnLCAnbW9iaWxlJ10sIFsnYW5kcm9pZCcsICd0YWJsZXQnXV0sXG4gIGFuZHJvaWQ6IFtbJ2FuZHJvaWQnLCAnbW9iaWxlJ10sIFsnYW5kcm9pZCcsICd0YWJsZXQnXV1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBwcmVmaXggZGF0YSBhc3NvY2lhdGVkIHdpdGggYSBicm93c2VyXG4gKiBAcGFyYW0ge3N0cmluZ30gYnJvd3NlciAtIGJyb3dzZXIgdG8gZmluZCBhIHByZWZpeCBmb3JcbiAqL1xudmFyIGdldFByZWZpeGVzID0gZnVuY3Rpb24gZ2V0UHJlZml4ZXMoYnJvd3Nlcikge1xuICB2YXIgcHJlZml4S2V5cyA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZWZpeCA9IHVuZGVmaW5lZDtcbiAgdmFyIHZlbmRvcnMgPSB1bmRlZmluZWQ7XG4gIHZhciBjb25kaXRpb25zID0gdW5kZWZpbmVkO1xuICB2YXIgcHJlZml4VmVuZG9yID0gdW5kZWZpbmVkO1xuICB2YXIgYnJvd3NlclZlbmRvcnMgPSB1bmRlZmluZWQ7XG5cbiAgLy8gRmluZCB0aGUgcHJlZml4IGZvciB0aGlzIGJyb3dzZXIgKGlmIGFueSlcbiAgcHJlZml4S2V5cyA9IE9iamVjdC5rZXlzKHZlbmRvclByZWZpeGVzKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJlZml4ID0gcHJlZml4S2V5c1tpXTtcblxuICAgIC8vIEZpbmQgYSBtYXRjaGluZyB2ZW5kb3JcbiAgICB2ZW5kb3JzID0gdmVuZG9yUHJlZml4ZXNbcHJlZml4XTtcbiAgICBjb25kaXRpb25zID0gYnJvd3NlcnNbYnJvd3Nlcl07XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZlbmRvcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHByZWZpeFZlbmRvciA9IHZlbmRvcnNbal07XG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgY29uZGl0aW9ucy5sZW5ndGg7IGsrKykge1xuICAgICAgICBicm93c2VyVmVuZG9ycyA9IGNvbmRpdGlvbnNba107XG5cbiAgICAgICAgaWYgKGJyb3dzZXJWZW5kb3JzLmluZGV4T2YocHJlZml4VmVuZG9yKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5saW5lOiBwcmVmaXgsXG4gICAgICAgICAgICBjc3M6ICctJyArIHByZWZpeC50b0xvd2VyQ2FzZSgpICsgJy0nXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE5vIHByZWZpeCBmb3VuZCBmb3IgdGhpcyBicm93c2VyXG4gIHJldHVybiB7IGlubGluZTogJycsIGNzczogJycgfTtcbn07XG5cbi8qKlxuICogVXNlcyBib3dzZXIgdG8gZ2V0IGRlZmF1bHQgYnJvd3NlciBpbmZvcm1hdGlvbiBzdWNoIGFzIHZlcnNpb24gYW5kIG5hbWVcbiAqIEV2YWx1YXRlcyBib3dzZXIgaW5mbyBhbmQgYWRkcyB2ZW5kb3JQcmVmaXggaW5mb3JtYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWdlbnQgLSB1c2VyQWdlbnQgdGhhdCBnZXRzIGV2YWx1YXRlZFxuICovXG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uICh1c2VyQWdlbnQpIHtcbiAgaWYgKCF1c2VyQWdlbnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgaW5mbyA9IHt9O1xuXG4gIC8vIFNwZWNpYWwgdXNlciBhZ2VudCwgcmV0dXJuIGFsbCBzdXBwb3J0ZWQgcHJlZml4ZXNcbiAgLy8gaW5zdGVhZCBvZiByZXR1cm5pbmcgYSBzdHJpbmcgYnJvd3NlciBuYW1lIGFuZCBhIHByZWZpeCBvYmplY3RcbiAgLy8gd2UgcmV0dXJuIGFuIGFycmF5IG9mIGJyb3dzZXIgbmFtZXMgYW5kIG1hcCBvZiBwcmVmaXhlcyBmb3IgZWFjaCBicm93c2VyXG4gIGlmICh1c2VyQWdlbnQgPT09ICcqJykge1xuICAgIC8vIFJldHVybiBhbiBhcnJheSBvZiBzdXBwb3J0ZWQgYnJvd3NlcnNcbiAgICBpbmZvLmJyb3dzZXJzID0gT2JqZWN0LmtleXMoYnJvd3NlcnMpO1xuXG4gICAgLy8gUmV0dXJuIHByZWZpeGVzIGFzc29jaWF0ZWQgYnkgYnJvd3NlclxuICAgIGluZm8ucHJlZml4ZXMgPSB7fTtcblxuICAgIC8vIEl0ZXJhdGUgYnJvd3NlciBsaXN0LCBhc3NpZ24gcHJlZml4IHRvIGVhY2hcbiAgICBpbmZvLmJyb3dzZXJzLmZvckVhY2goZnVuY3Rpb24gKGJyb3dzZXIpIHtcbiAgICAgIGluZm8ucHJlZml4ZXNbYnJvd3Nlcl0gPSBnZXRQcmVmaXhlcyhicm93c2VyKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbmZvO1xuICB9XG5cbiAgLy8gTm9ybWFsIHVzZXIgYWdlbnQsIGRldGVjdCBicm93c2VyXG4gIGluZm8gPSBfYm93c2VyMlsnZGVmYXVsdCddLl9kZXRlY3QodXNlckFnZW50KTtcblxuICBPYmplY3Qua2V5cyh2ZW5kb3JQcmVmaXhlcykuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgdmVuZG9yUHJlZml4ZXNbcHJlZml4XS5mb3JFYWNoKGZ1bmN0aW9uIChicm93c2VyKSB7XG4gICAgICBpZiAoaW5mb1ticm93c2VyXSkge1xuICAgICAgICBpbmZvLnByZWZpeCA9IHtcbiAgICAgICAgICBpbmxpbmU6IHByZWZpeCxcbiAgICAgICAgICBjc3M6ICctJyArIHByZWZpeC50b0xvd2VyQ2FzZSgpICsgJy0nXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciBuYW1lID0gJyc7XG4gIE9iamVjdC5rZXlzKGJyb3dzZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChicm93c2VyKSB7XG4gICAgYnJvd3NlcnNbYnJvd3Nlcl0uZm9yRWFjaChmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgICB2YXIgbWF0Y2ggPSAwO1xuICAgICAgY29uZGl0aW9uLmZvckVhY2goZnVuY3Rpb24gKHNpbmdsZSkge1xuICAgICAgICBpZiAoaW5mb1tzaW5nbGVdKSB7XG4gICAgICAgICAgbWF0Y2ggKz0gMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoY29uZGl0aW9uLmxlbmd0aCA9PT0gbWF0Y2gpIHtcbiAgICAgICAgbmFtZSA9IGJyb3dzZXI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGluZm8uYnJvd3NlciA9IG5hbWU7XG4gIC8vIEZvciBjb3Jkb3ZhIElPUyA4IHRoZSB2ZXJzaW9uIGlzIG1pc3NpbmcsIHNldCB0cnVuY2F0ZWQgb3N2ZXJzaW9uIHRvIHByZXZlbnQgTmFOXG4gIGluZm8udmVyc2lvbiA9IGluZm8udmVyc2lvbiA/IHBhcnNlRmxvYXQoaW5mby52ZXJzaW9uKSA6IHBhcnNlSW50KHBhcnNlRmxvYXQoaW5mby5vc3ZlcnNpb24pLCAxMCk7XG5cbiAgLy8gc2VwZXJhdGUgbmF0aXZlIGFuZHJvaWQgY2hyb21lXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2ZyaXNjaG1hbm4vaW5saW5lLXN0eWxlLXByZWZpeGVyL2lzc3Vlcy80NVxuICBpZiAoaW5mby5icm93c2VyID09PSAnYW5kcm9pZCcgJiYgaW5mby5jaHJvbWUgJiYgaW5mby52ZXJzaW9uID4gMzcpIHtcbiAgICBpbmZvLmJyb3dzZXIgPSAnYW5kX2Nocic7XG4gIH1cbiAgaW5mby52ZXJzaW9uID0gcGFyc2VGbG9hdChpbmZvLnZlcnNpb24pO1xuICBpbmZvLm9zdmVyc2lvbiA9IHBhcnNlRmxvYXQoaW5mby5vc3ZlcnNpb24pO1xuICAvLyBGb3IgYW5kcm9pZCA8IDQuNCB3ZSB3YW50IHRvIGNoZWNrIHRoZSBvc3ZlcnNpb25cbiAgLy8gbm90IHRoZSBjaHJvbWUgdmVyc2lvbiwgc2VlIGlzc3VlICMyNlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9mcmlzY2htYW5uL2lubGluZS1zdHlsZS1wcmVmaXhlci9pc3N1ZXMvMjZcbiAgaWYgKGluZm8uYnJvd3NlciA9PT0gJ2FuZHJvaWQnICYmIGluZm8ub3N2ZXJzaW9uIDwgNSkge1xuICAgIGluZm8udmVyc2lvbiA9IGluZm8ub3N2ZXJzaW9uO1xuICB9XG5cbiAgcmV0dXJuIGluZm87XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2dldEJyb3dzZXJJbmZvcm1hdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgYnJvd3NlciA9IF9yZWYuYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBfcmVmLnZlcnNpb247XG4gIHZhciBwcmVmaXggPSBfcmVmLnByZWZpeDtcblxuICB2YXIgcHJlZml4ZWRLZXlmcmFtZXMgPSAna2V5ZnJhbWVzJztcblxuICBpZiAoYnJvd3NlciA9PT0gJ2Nocm9tZScgJiYgdmVyc2lvbiA8IDQzIHx8IChicm93c2VyID09PSAnc2FmYXJpJyB8fCBicm93c2VyID09PSAnaW9zX3NhZicpICYmIHZlcnNpb24gPCA5IHx8IGJyb3dzZXIgPT09ICdvcGVyYScgJiYgdmVyc2lvbiA8IDMwIHx8IGJyb3dzZXIgPT09ICdhbmRyb2lkJyAmJiB2ZXJzaW9uIDw9IDQuNCB8fCBicm93c2VyID09PSAnYW5kX3VjJykge1xuICAgIHByZWZpeGVkS2V5ZnJhbWVzID0gcHJlZml4LmNzcyArIHByZWZpeGVkS2V5ZnJhbWVzO1xuICB9XG4gIHJldHVybiBwcmVmaXhlZEtleWZyYW1lcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvZ2V0UHJlZml4ZWRLZXlmcmFtZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gb25seSB0aHJvdyB3YXJuaW5ncyBpZiBkZXZtb2RlIGlzIGVuYWJsZWRcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy93YXJuLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICogaXMtcGxhaW4tb2JqZWN0IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1wbGFpbi1vYmplY3Q+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnaXNvYmplY3QnKTtcblxuZnVuY3Rpb24gaXNPYmplY3RPYmplY3Qobykge1xuICByZXR1cm4gaXNPYmplY3QobykgPT09IHRydWVcbiAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qobykge1xuICB2YXIgY3Rvcixwcm90O1xuICBcbiAgaWYgKGlzT2JqZWN0T2JqZWN0KG8pID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICBcbiAgLy8gSWYgaGFzIG1vZGlmaWVkIGNvbnN0cnVjdG9yXG4gIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuICBpZiAodHlwZW9mIGN0b3IgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcbiAgXG4gIC8vIElmIGhhcyBtb2RpZmllZCBwcm90b3R5cGVcbiAgcHJvdCA9IGN0b3IucHJvdG90eXBlO1xuICBpZiAoaXNPYmplY3RPYmplY3QocHJvdCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gIFxuICAvLyBJZiBjb25zdHJ1Y3RvciBkb2VzIG5vdCBoYXZlIGFuIE9iamVjdC1zcGVjaWZpYyBtZXRob2RcbiAgaWYgKHByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIC8vIE1vc3QgbGlrZWx5IGEgcGxhaW4gT2JqZWN0XG4gIHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lzLXBsYWluLW9iamVjdC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiFcbiAqIGlzb2JqZWN0IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pc29iamVjdD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCdcbiAgICAmJiAhQXJyYXkuaXNBcnJheSh2YWwpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lzLXBsYWluLW9iamVjdC9+L2lzb2JqZWN0L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogbG9kYXNoIDMuMC4wIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS43LjAgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBvciBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RWFjaDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC5fYXJyYXllYWNoL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogbG9kYXNoIDQuMC4wIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE2IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTYgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHJldHVybiAhIWFycmF5Lmxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgaWYgKHZhbHVlICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBpbmRleE9mTmFOKGFycmF5LCBmcm9tSW5kZXgpO1xuICB9XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYE5hTmAgaXMgZm91bmQgaW4gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCBgTmFOYCwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBpbmRleE9mTmFOKGFycmF5LCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMCA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIHZhciBvdGhlciA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAob3RoZXIgIT09IG90aGVyKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoLl9hcnJheWluY2x1ZGVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogbG9kYXNoIDQuMC4wIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE2IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTYgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNXaXRoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC5fYXJyYXlpbmNsdWRlc3dpdGgvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBsb2Rhc2ggMy4wLjAgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjcuMCA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgb3IgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoLl9hcnJheW1hcC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCA0LjAuMCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNiBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE2IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG5cbi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gZ2xvYmFsLk9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmxhdHRlbmAgd2l0aCBzdXBwb3J0IGZvciByZXN0cmljdGluZyBmbGF0dGVuaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gZmxhdHRlbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgZmxhdHRlbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU3RyaWN0XSBSZXN0cmljdCBmbGF0dGVuaW5nIHRvIGFycmF5cy1saWtlIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBpc0RlZXAsIGlzU3RyaWN0LCByZXN1bHQpIHtcbiAgcmVzdWx0IHx8IChyZXN1bHQgPSBbXSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJlxuICAgICAgICAoaXNTdHJpY3QgfHwgaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKSkge1xuICAgICAgaWYgKGlzRGVlcCkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBmbGF0dGVuIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgaXNEZWVwLCBpc1N0cmljdCwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5UHVzaChyZXN1bHQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc1N0cmljdCkge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGF2b2lkIGEgW0pJVCBidWddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI3OTIpXG4gKiB0aGF0IGFmZmVjdHMgU2FmYXJpIG9uIGF0IGxlYXN0IGlPUyA4LjEtOC4zIEFSTTY0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgXCJsZW5ndGhcIiB2YWx1ZS5cbiAqL1xudmFyIGdldExlbmd0aCA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIGluY29ycmVjdGx5IG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEB0eXBlIEZ1bmN0aW9uXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEB0eXBlIEZ1bmN0aW9uXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmXG4gICAgISh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJyAmJiBpc0Z1bmN0aW9uKHZhbHVlKSkgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAdHlwZSBGdW5jdGlvblxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDggd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgY29uc3RydWN0b3JzLCBhbmRcbiAgLy8gUGhhbnRvbUpTIDEuOSB3aGljaCByZXR1cm5zICdmdW5jdGlvbicgZm9yIGBOb2RlTGlzdGAgaW5zdGFuY2VzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBsb29zZWx5IGJhc2VkIG9uIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBbbGFuZ3VhZ2UgdHlwZV0oaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OCkgb2YgYE9iamVjdGAuXG4gKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGbGF0dGVuO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoLl9iYXNlZmxhdHRlbi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCAzLjAuMyAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNiBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE2IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JJbmAgYW5kIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlc1xuICogb3ZlciBgb2JqZWN0YCBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgaW52b2tpbmcgYGl0ZXJhdGVlYCBmb3JcbiAqIGVhY2ggcHJvcGVydHkuIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseVxuICogcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBtZXRob2RzIGxpa2UgYF8uZm9ySW5gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3IoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoLl9iYXNlZm9yL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogbG9kYXNoIDQuMC4wIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE2IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTYgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiAobGVuZ3RoICsgc3RhcnQpO1xuICB9XG4gIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC5fYmFzZXNsaWNlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogbG9kYXNoIDQuMC4wIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE2IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTYgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIGBjYWNoZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgc2V0IGNhY2hlIHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCB2YWx1ZSkge1xuICB2YXIgbWFwID0gY2FjaGUuX19kYXRhX187XG4gIGlmIChpc0tleWFibGUodmFsdWUpKSB7XG4gICAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX18sXG4gICAgICAgIGhhc2ggPSB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgPyBkYXRhLnN0cmluZyA6IGRhdGEuaGFzaDtcblxuICAgIHJldHVybiBoYXNoW3ZhbHVlXSA9PT0gSEFTSF9VTkRFRklORUQ7XG4gIH1cbiAgcmV0dXJuIG1hcC5oYXModmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICh0eXBlID09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnX19wcm90b19fJykgfHwgdmFsdWUgPT0gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC5fY2FjaGVoYXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBsb2Rhc2ggNC4wLjAgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTYgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNiBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIE1hcENhY2hlID0gcmVxdWlyZSgnbG9kYXNoLl9tYXBjYWNoZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYSBzZXQgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA/IHZhbHVlcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5wdXNoKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBzZXQgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHB1c2hcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlUHVzaCh2YWx1ZSkge1xuICB2YXIgbWFwID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGlzS2V5YWJsZSh2YWx1ZSkpIHtcbiAgICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXyxcbiAgICAgICAgaGFzaCA9IHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyA/IGRhdGEuc3RyaW5nIDogZGF0YS5oYXNoO1xuXG4gICAgaGFzaFt2YWx1ZV0gPSBIQVNIX1VOREVGSU5FRDtcbiAgfVxuICBlbHNlIHtcbiAgICBtYXAuc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAodHlwZSA9PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJ19fcHJvdG9fXycpIHx8IHZhbHVlID09IG51bGw7XG59XG5cbi8vIEFkZCBmdW5jdGlvbnMgdG8gdGhlIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IGNhY2hlUHVzaDtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC5fc2V0Y2FjaGUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBsb2Rhc2ggNC4wLjAgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTYgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNiBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIE1hcENhY2hlID0gcmVxdWlyZSgnbG9kYXNoLl9tYXBjYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IGdsb2JhbC5BcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPyB2YWx1ZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gdmFsdWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IHsgJ2FycmF5JzogW10sICdtYXAnOiBudWxsIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBhcnJheSA9IGRhdGEuYXJyYXk7XG5cbiAgcmV0dXJuIGFycmF5ID8gYXNzb2NEZWxldGUoYXJyYXksIGtleSkgOiBkYXRhLm1hcFsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGFycmF5ID0gZGF0YS5hcnJheTtcblxuICByZXR1cm4gYXJyYXkgPyBhc3NvY0dldChhcnJheSwga2V5KSA6IGRhdGEubWFwLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGFycmF5ID0gZGF0YS5hcnJheTtcblxuICByZXR1cm4gYXJyYXkgPyBhc3NvY0hhcyhhcnJheSwga2V5KSA6IGRhdGEubWFwLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBhcnJheSA9IGRhdGEuYXJyYXk7XG5cbiAgaWYgKGFycmF5KSB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA8IChMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIGFzc29jU2V0KGFycmF5LCBrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5hcnJheSA9IG51bGw7XG4gICAgICBkYXRhLm1hcCA9IG5ldyBNYXBDYWNoZShhcnJheSk7XG4gICAgfVxuICB9XG4gIHZhciBtYXAgPSBkYXRhLm1hcDtcbiAgaWYgKG1hcCkge1xuICAgIG1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGFzc29jaWF0aXZlIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NEZWxldGUoYXJyYXksIGtleSkge1xuICB2YXIgaW5kZXggPSBhc3NvY0luZGV4T2YoYXJyYXksIGtleSk7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBhcnJheS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChhcnJheSwgaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGFzc29jaWF0aXZlIGFycmF5IHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFzc29jR2V0KGFycmF5LCBrZXkpIHtcbiAgdmFyIGluZGV4ID0gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpO1xuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogYXJyYXlbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhbiBhc3NvY2lhdGl2ZSBhcnJheSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NIYXMoYXJyYXksIGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YFxuICogb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBhc3NvY2lhdGl2ZSBhcnJheSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKi9cbmZ1bmN0aW9uIGFzc29jU2V0KGFycmF5LCBrZXksIHZhbHVlKSB7XG4gIHZhciBpbmRleCA9IGFzc29jSW5kZXhPZihhcnJheSwga2V5KTtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGFycmF5LnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBhcnJheVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICogdmFyIG90aGVyID0geyAndXNlcic6ICdmcmVkJyB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8vIEFkZCBmdW5jdGlvbnMgdG8gdGhlIGBTdGFja2AgY2FjaGUuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoLl9zdGFjay9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCA0LjAuMCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNiBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE2IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgYmFzZVNsaWNlID0gcmVxdWlyZSgnbG9kYXNoLl9iYXNlc2xpY2UnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMCxcbiAgICBNQVhfSU5URUdFUiA9IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4LFxuICAgIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYGdsb2JhbGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IGdsb2JhbC5PYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzbGljZSBvZiBgYXJyYXlgIHdpdGggYG5gIGVsZW1lbnRzIGRyb3BwZWQgZnJvbSB0aGUgZW5kLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj0xXSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGRyb3AuXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIGZ1bmN0aW9ucyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZHJvcFJpZ2h0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiBfLmRyb3BSaWdodChbMSwgMiwgM10sIDIpO1xuICogLy8gPT4gWzFdXG4gKlxuICogXy5kcm9wUmlnaHQoWzEsIDIsIDNdLCA1KTtcbiAqIC8vID0+IFtdXG4gKlxuICogXy5kcm9wUmlnaHQoWzEsIDIsIDNdLCAwKTtcbiAqIC8vID0+IFsxLCAyLCAzXVxuICovXG5mdW5jdGlvbiBkcm9wUmlnaHQoYXJyYXksIG4sIGd1YXJkKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG4gPSAoZ3VhcmQgfHwgbiA9PT0gdW5kZWZpbmVkKSA/IDEgOiB0b0ludGVnZXIobik7XG4gIG4gPSBsZW5ndGggLSBuO1xuICByZXR1cm4gYmFzZVNsaWNlKGFycmF5LCAwLCBuIDwgMCA/IDAgOiBuKTtcbn1cblxuLyoqXG4gKiBHZXRzIGFsbCBidXQgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pbml0aWFsKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gaW5pdGlhbChhcnJheSkge1xuICByZXR1cm4gZHJvcFJpZ2h0KGFycmF5LCAxKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDggd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgY29uc3RydWN0b3JzLCBhbmRcbiAgLy8gUGhhbnRvbUpTIDEuOSB3aGljaCByZXR1cm5zICdmdW5jdGlvbicgZm9yIGBOb2RlTGlzdGAgaW5zdGFuY2VzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBsb29zZWx5IGJhc2VkIG9uIFtgVG9JbnRlZ2VyYF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvaW50ZWdlcikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIGludGVnZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9JbnRlZ2VyKDMpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMnKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9JbnRlZ2VyKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICB2YXIgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gKHJlbWFpbmRlciA/IHZhbHVlIC0gcmVtYWluZGVyIDogdmFsdWUpIDogMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMnKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IGlzRnVuY3Rpb24odmFsdWUudmFsdWVPZikgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRpYWw7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2guaW5pdGlhbC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCA0LjAuMCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNiBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE2IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gZ2xvYmFsLk9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBnbG9iYWwuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSAhPSBvYmplY3RUYWcgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBvYmplY3RQcm90bztcbiAgaWYgKHR5cGVvZiB2YWx1ZS5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvdG8gPSBnZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gIH1cbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmXG4gICAgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiYgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQbGFpbk9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC5pc3BsYWlub2JqZWN0L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogbG9kYXNoIDQuMC4wIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE2IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTYgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSA/ICt2YWx1ZSA6IC0xO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoO1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBnbG9iYWwuT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBPYmplY3Qua2V5cztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSGFzKG9iamVjdCwga2V5KSB7XG4gIC8vIEF2b2lkIGEgYnVnIGluIElFIDEwLTExIHdoZXJlIG9iamVjdHMgd2l0aCBhIFtbUHJvdG90eXBlXV0gb2YgYG51bGxgLFxuICAvLyB0aGF0IGFyZSBjb21wb3NlZCBlbnRpcmVseSBvZiBpbmRleCBwcm9wZXJ0aWVzLCByZXR1cm4gYGZhbHNlYCBmb3JcbiAgLy8gYGhhc093blByb3BlcnR5YCBjaGVja3Mgb2YgdGhlbS5cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpIHx8XG4gICAgKHR5cGVvZiBvYmplY3QgPT0gJ29iamVjdCcgJiYga2V5IGluIG9iamVjdCAmJiBnZXRQcm90b3R5cGVPZihvYmplY3QpID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHNraXAgdGhlIGNvbnN0cnVjdG9yXG4gKiBwcm9wZXJ0eSBvZiBwcm90b3R5cGVzIG9yIHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEB0eXBlIEZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIG5hdGl2ZUtleXMoT2JqZWN0KG9iamVjdCkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIFwibGVuZ3RoXCIgcHJvcGVydHkgdmFsdWUgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdm9pZCBhIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKVxuICogdGhhdCBhZmZlY3RzIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgaW5kZXgga2V5cyBmb3IgYG9iamVjdGAgdmFsdWVzIG9mIGFycmF5cyxcbiAqIGBhcmd1bWVudHNgIG9iamVjdHMsIGFuZCBzdHJpbmdzLCBvdGhlcndpc2UgYG51bGxgIGlzIHJldHVybmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl8bnVsbH0gUmV0dXJucyBpbmRleCBrZXlzLCBlbHNlIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gaW5kZXhLZXlzKG9iamVjdCkge1xuICB2YXIgbGVuZ3RoID0gb2JqZWN0ID8gb2JqZWN0Lmxlbmd0aCA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIChpc0xlbmd0aChsZW5ndGgpICYmIChpc0FycmF5KG9iamVjdCkgfHwgaXNTdHJpbmcob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKSlcbiAgICA/IGJhc2VUaW1lcyhsZW5ndGgsIFN0cmluZylcbiAgICA6IG51bGw7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgaW5jb3JyZWN0bHkgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHR5cGUgRnVuY3Rpb25cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHR5cGUgRnVuY3Rpb25cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiZcbiAgICAhKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nICYmIGlzRnVuY3Rpb24odmFsdWUpKSAmJiBpc0xlbmd0aChnZXRMZW5ndGgodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEB0eXBlIEZ1bmN0aW9uXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOCB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvcnMsIGFuZFxuICAvLyBQaGFudG9tSlMgMS45IHdoaWNoIHJldHVybnMgJ2Z1bmN0aW9uJyBmb3IgYE5vZGVMaXN0YCBpbnN0YW5jZXMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIGxvb3NlbHkgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTdHJpbmdgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTdHJpbmcoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTdHJpbmcoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8XG4gICAgKCFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN0cmluZ1RhZyk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KTtcbiAgaWYgKCEoaXNQcm90byB8fCBpc0FycmF5TGlrZShvYmplY3QpKSkge1xuICAgIHJldHVybiBiYXNlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciBpbmRleGVzID0gaW5kZXhLZXlzKG9iamVjdCksXG4gICAgICBza2lwSW5kZXhlcyA9ICEhaW5kZXhlcyxcbiAgICAgIHJlc3VsdCA9IGluZGV4ZXMgfHwgW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoYmFzZUhhcyhvYmplY3QsIGtleSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkgJiZcbiAgICAgICAgIShpc1Byb3RvICYmIGtleSA9PSAnY29uc3RydWN0b3InKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoLmtleXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBsb2Rhc2ggMy4wLjAgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjcuMCA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqXG4gKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ubGFzdChbMSwgMiwgM10pO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIHJldHVybiBsZW5ndGggPyBhcnJheVtsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoLmxhc3QvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBsb2Rhc2ggNC4wLjIgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTYgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNiBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIFNldENhY2hlID0gcmVxdWlyZSgnbG9kYXNoLl9zZXRjYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCdsb2Rhc2guX2FycmF5aW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJ2xvZGFzaC5fYXJyYXlpbmNsdWRlc3dpdGgnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJ2xvZGFzaC5fYXJyYXltYXAnKSxcbiAgICBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJ2xvZGFzaC5fYmFzZWZsYXR0ZW4nKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJ2xvZGFzaC5fY2FjaGVoYXMnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCdsb2Rhc2gua2V5c2luJyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJ2xvZGFzaC5yZXN0Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIHdyYXBwZXIgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGxpa2UgYF8uZGlmZmVyZW5jZWAgd2l0aG91dCBzdXBwb3J0IGZvclxuICogZXhjbHVkaW5nIG11bHRpcGxlIGFycmF5cyBvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGV4Y2x1ZGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VEaWZmZXJlbmNlKGFycmF5LCB2YWx1ZXMsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICB2YWx1ZXNMZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xuXG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoaXRlcmF0ZWUpIHtcbiAgICB2YWx1ZXMgPSBhcnJheU1hcCh2YWx1ZXMsIGJhc2VVbmFyeShpdGVyYXRlZSkpO1xuICB9XG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICB9XG4gIGVsc2UgaWYgKHZhbHVlcy5sZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB2YWx1ZXMgPSBuZXcgU2V0Q2FjaGUodmFsdWVzKTtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciB2YWx1ZXNJbmRleCA9IHZhbHVlc0xlbmd0aDtcbiAgICAgIHdoaWxlICh2YWx1ZXNJbmRleC0tKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbdmFsdWVzSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyh2YWx1ZXMsIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnBpY2tgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaW5kaXZpZHVhbFxuICogcHJvcGVydHkgbmFtZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wcyBUaGUgcHJvcGVydHkgbmFtZXMgdG8gcGljay5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGJhc2VQaWNrKG9iamVjdCwgcHJvcHMpIHtcbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShwcm9wcywgZnVuY3Rpb24ocmVzdWx0LCBrZXkpIHtcbiAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmplY3Rba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxuXG4vKipcbiAqIFRoZSBvcHBvc2l0ZSBvZiBgXy5waWNrYDsgdGhpcyBtZXRob2QgY3JlYXRlcyBhbiBvYmplY3QgY29tcG9zZWQgb2YgdGhlXG4gKiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgYG9iamVjdGAgdGhhdCBhcmUgbm90IG9taXR0ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0gey4uLihzdHJpbmd8c3RyaW5nW10pfSBbcHJvcHNdIFRoZSBwcm9wZXJ0eSBuYW1lcyB0byBvbWl0LCBzcGVjaWZpZWRcbiAqICBpbmRpdmlkdWFsbHkgb3IgaW4gYXJyYXlzLi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAnMicsICdjJzogMyB9O1xuICpcbiAqIF8ub21pdChvYmplY3QsIFsnYScsICdjJ10pO1xuICogLy8gPT4geyAnYic6ICcyJyB9XG4gKi9cbnZhciBvbWl0ID0gcmVzdChmdW5jdGlvbihvYmplY3QsIHByb3BzKSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBwcm9wcyA9IGFycmF5TWFwKGJhc2VGbGF0dGVuKHByb3BzKSwgU3RyaW5nKTtcbiAgcmV0dXJuIGJhc2VQaWNrKG9iamVjdCwgYmFzZURpZmZlcmVuY2Uoa2V5c0luKG9iamVjdCksIHByb3BzKSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBvbWl0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoLm9taXQvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWU7XG5cbnZhciBfYXBwZW5kUHhJZk5lZWRlZCA9IHJlcXVpcmUoJy4vYXBwZW5kLXB4LWlmLW5lZWRlZCcpO1xuXG52YXIgX2FwcGVuZFB4SWZOZWVkZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXBwZW5kUHhJZk5lZWRlZCk7XG5cbnZhciBfbWFwT2JqZWN0ID0gcmVxdWlyZSgnLi9tYXAtb2JqZWN0Jyk7XG5cbnZhciBfbWFwT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcE9iamVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlKHN0eWxlKSB7XG4gIHJldHVybiAoMCwgX21hcE9iamVjdDIuZGVmYXVsdCkoc3R5bGUsIGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgIHJldHVybiAoMCwgX2FwcGVuZFB4SWZOZWVkZWQyLmRlZmF1bHQpKGtleSwgc3R5bGVba2V5XSkgKyAnICFpbXBvcnRhbnQnO1xuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvYXBwZW5kLWltcG9ydGFudC10by1lYWNoLXZhbHVlLmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jYW1lbENhc2VSZWdleCA9IC8oW2Etel0pPyhbQS1aXSkvZztcblxudmFyIF9jYW1lbENhc2VSZXBsYWNlciA9IGZ1bmN0aW9uIF9jYW1lbENhc2VSZXBsYWNlcihtYXRjaCwgcDEsIHAyKSB7XG4gIHJldHVybiAocDEgfHwgJycpICsgJy0nICsgcDIudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBfY2FtZWxDYXNlVG9EYXNoQ2FzZSA9IGZ1bmN0aW9uIF9jYW1lbENhc2VUb0Rhc2hDYXNlKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZShfY2FtZWxDYXNlUmVnZXgsIF9jYW1lbENhc2VSZXBsYWNlcik7XG59O1xuXG52YXIgY2FtZWxDYXNlUHJvcHNUb0Rhc2hDYXNlID0gZnVuY3Rpb24gY2FtZWxDYXNlUHJvcHNUb0Rhc2hDYXNlKHByZWZpeGVkU3R5bGUpIHtcbiAgLy8gU2luY2UgcHJlZml4IGlzIGV4cGVjdGVkIHRvIHdvcmsgb24gaW5saW5lIHN0eWxlIG9iamVjdHMsIHdlIG11c3RcbiAgLy8gdHJhbnNsYXRlIHRoZSBrZXlzIHRvIGRhc2ggY2FzZSBmb3IgcmVuZGVyaW5nIHRvIENTUy5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHByZWZpeGVkU3R5bGUpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBrZXkpIHtcbiAgICB2YXIgZGFzaENhc2VLZXkgPSBfY2FtZWxDYXNlVG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgLy8gRml4IElFIHZlbmRvciBwcmVmaXhcbiAgICBpZiAoL15tcy0vLnRlc3QoZGFzaENhc2VLZXkpKSB7XG4gICAgICBkYXNoQ2FzZUtleSA9ICctJyArIGRhc2hDYXNlS2V5O1xuICAgIH1cblxuICAgIHJlc3VsdFtkYXNoQ2FzZUtleV0gPSBwcmVmaXhlZFN0eWxlW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY2FtZWxDYXNlUHJvcHNUb0Rhc2hDYXNlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9jYW1lbC1jYXNlLXByb3BzLXRvLWRhc2gtY2FzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9lbmhhbmNlciA9IHJlcXVpcmUoJy4uL2VuaGFuY2VyJyk7XG5cbnZhciBfZW5oYW5jZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW5oYW5jZXIpO1xuXG52YXIgX3N0eWxlS2VlcGVyID0gcmVxdWlyZSgnLi4vc3R5bGUta2VlcGVyJyk7XG5cbnZhciBfc3R5bGVLZWVwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVLZWVwZXIpO1xuXG52YXIgX3N0eWxlU2hlZXQgPSByZXF1aXJlKCcuL3N0eWxlLXNoZWV0Jyk7XG5cbnZhciBfc3R5bGVTaGVldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZVNoZWV0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfZ2V0U3R5bGVLZWVwZXIoaW5zdGFuY2UpIHtcbiAgaWYgKCFpbnN0YW5jZS5fcmFkaXVtU3R5bGVLZWVwZXIpIHtcbiAgICB2YXIgdXNlckFnZW50ID0gaW5zdGFuY2UucHJvcHMucmFkaXVtQ29uZmlnICYmIGluc3RhbmNlLnByb3BzLnJhZGl1bUNvbmZpZy51c2VyQWdlbnQgfHwgaW5zdGFuY2UuY29udGV4dC5fcmFkaXVtQ29uZmlnICYmIGluc3RhbmNlLmNvbnRleHQuX3JhZGl1bUNvbmZpZy51c2VyQWdlbnQ7XG4gICAgaW5zdGFuY2UuX3JhZGl1bVN0eWxlS2VlcGVyID0gbmV3IF9zdHlsZUtlZXBlcjIuZGVmYXVsdCh1c2VyQWdlbnQpO1xuICB9XG5cbiAgcmV0dXJuIGluc3RhbmNlLl9yYWRpdW1TdHlsZUtlZXBlcjtcbn1cblxudmFyIFN0eWxlUm9vdCA9IChmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU3R5bGVSb290LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTdHlsZVJvb3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0eWxlUm9vdCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgX2dldFN0eWxlS2VlcGVyKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTdHlsZVJvb3QucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4geyBfcmFkaXVtU3R5bGVLZWVwZXI6IF9nZXRTdHlsZUtlZXBlcih0aGlzKSB9O1xuICB9O1xuXG4gIFN0eWxlUm9vdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgdGhpcy5wcm9wcyxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfc3R5bGVTaGVldDIuZGVmYXVsdCwgbnVsbClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVJvb3Q7XG59KShfcmVhY3QuQ29tcG9uZW50KTtcblxuU3R5bGVSb290LmNvbnRleHRUeXBlcyA9IHtcbiAgX3JhZGl1bUNvbmZpZzogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIF9yYWRpdW1TdHlsZUtlZXBlcjogX3JlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKF9zdHlsZUtlZXBlcjIuZGVmYXVsdClcbn07XG5cblN0eWxlUm9vdC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgX3JhZGl1bVN0eWxlS2VlcGVyOiBfcmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoX3N0eWxlS2VlcGVyMi5kZWZhdWx0KVxufTtcblxuU3R5bGVSb290ID0gKDAsIF9lbmhhbmNlcjIuZGVmYXVsdCkoU3R5bGVSb290KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3R5bGVSb290O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9jb21wb25lbnRzL3N0eWxlLXJvb3QuanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzLCBfdGVtcDtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3N0eWxlS2VlcGVyID0gcmVxdWlyZSgnLi4vc3R5bGUta2VlcGVyJyk7XG5cbnZhciBfc3R5bGVLZWVwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVLZWVwZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTdHlsZVNoZWV0ID0gKF90ZW1wID0gX2NsYXNzID0gKGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTdHlsZVNoZWV0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTdHlsZVNoZWV0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZVNoZWV0KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IF90aGlzLl9nZXRDU1NTdGF0ZSgpO1xuXG4gICAgX3RoaXMuX29uQ2hhbmdlID0gX3RoaXMuX29uQ2hhbmdlLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLmNvbnRleHQuX3JhZGl1bVN0eWxlS2VlcGVyLnN1YnNjcmliZSh0aGlzLl9vbkNoYW5nZSk7XG4gICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfTtcblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuX2dldENTU1N0YXRlID0gZnVuY3Rpb24gX2dldENTU1N0YXRlKCkge1xuICAgIHJldHVybiB7IGNzczogdGhpcy5jb250ZXh0Ll9yYWRpdW1TdHlsZUtlZXBlci5nZXRDU1MoKSB9O1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLl9vbkNoYW5nZSA9IGZ1bmN0aW9uIF9vbkNoYW5nZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLl9pc01vdW50ZWQgJiYgX3RoaXMyLnNldFN0YXRlKF90aGlzMi5fZ2V0Q1NTU3RhdGUoKSk7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3R5bGUnLCB7IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogdGhpcy5zdGF0ZS5jc3MgfSB9KTtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0pKF9yZWFjdC5Db21wb25lbnQpLCBfY2xhc3MuY29udGV4dFR5cGVzID0ge1xuICBfcmFkaXVtU3R5bGVLZWVwZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihfc3R5bGVLZWVwZXIyLmRlZmF1bHQpXG59LCBfdGVtcCk7XG5leHBvcnRzLmRlZmF1bHQgPSBTdHlsZVNoZWV0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9jb21wb25lbnRzL3N0eWxlLXNoZWV0LmpzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jc3NSdWxlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9jc3MtcnVsZS1zZXQtdG8tc3RyaW5nJyk7XG5cbnZhciBfY3NzUnVsZVNldFRvU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc1J1bGVTZXRUb1N0cmluZyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFN0eWxlID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdTdHlsZScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcmFkaXVtQ29uZmlnOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBydWxlczogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc2NvcGVTZWxlY3RvcjogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICBfcmFkaXVtQ29uZmlnOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzY29wZVNlbGVjdG9yOiAnJ1xuICAgIH07XG4gIH0sXG4gIF9idWlsZFN0eWxlczogZnVuY3Rpb24gX2J1aWxkU3R5bGVzKHN0eWxlcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgdXNlckFnZW50ID0gdGhpcy5wcm9wcy5yYWRpdW1Db25maWcgJiYgdGhpcy5wcm9wcy5yYWRpdW1Db25maWcudXNlckFnZW50IHx8IHRoaXMuY29udGV4dCAmJiB0aGlzLmNvbnRleHQuX3JhZGl1bUNvbmZpZyAmJiB0aGlzLmNvbnRleHQuX3JhZGl1bUNvbmZpZy51c2VyQWdlbnQ7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBzZWxlY3Rvcikge1xuICAgICAgdmFyIHNjb3BlU2VsZWN0b3IgPSBfdGhpcy5wcm9wcy5zY29wZVNlbGVjdG9yO1xuXG4gICAgICB2YXIgcnVsZXMgPSBzdHlsZXNbc2VsZWN0b3JdO1xuXG4gICAgICBpZiAoc2VsZWN0b3IgPT09ICdtZWRpYVF1ZXJpZXMnKSB7XG4gICAgICAgIGFjY3VtdWxhdG9yICs9IF90aGlzLl9idWlsZE1lZGlhUXVlcnlTdHJpbmcocnVsZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNvbXBsZXRlU2VsZWN0b3IgPSBzY29wZVNlbGVjdG9yID8gc2VsZWN0b3Iuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgICByZXR1cm4gc2NvcGVTZWxlY3RvciArICcgJyArIHBhcnQudHJpbSgpO1xuICAgICAgICB9KS5qb2luKCcsJykgOiBzZWxlY3RvcjtcblxuICAgICAgICBhY2N1bXVsYXRvciArPSAoMCwgX2Nzc1J1bGVTZXRUb1N0cmluZzIuZGVmYXVsdCkoY29tcGxldGVTZWxlY3RvciwgcnVsZXMsIHVzZXJBZ2VudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9LCAnJyk7XG4gIH0sXG4gIF9idWlsZE1lZGlhUXVlcnlTdHJpbmc6IGZ1bmN0aW9uIF9idWlsZE1lZGlhUXVlcnlTdHJpbmcoc3R5bGVzQnlNZWRpYVF1ZXJ5KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgY29udGV4dE1lZGlhUXVlcmllcyA9IHRoaXMuX2dldENvbnRleHRNZWRpYVF1ZXJpZXMoKTtcbiAgICB2YXIgbWVkaWFRdWVyeVN0cmluZyA9ICcnO1xuXG4gICAgT2JqZWN0LmtleXMoc3R5bGVzQnlNZWRpYVF1ZXJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgdmFyIGNvbXBsZXRlUXVlcnkgPSBjb250ZXh0TWVkaWFRdWVyaWVzW3F1ZXJ5XSA/IGNvbnRleHRNZWRpYVF1ZXJpZXNbcXVlcnldIDogcXVlcnk7XG4gICAgICBtZWRpYVF1ZXJ5U3RyaW5nICs9ICdAbWVkaWEgJyArIGNvbXBsZXRlUXVlcnkgKyAneycgKyBfdGhpczIuX2J1aWxkU3R5bGVzKHN0eWxlc0J5TWVkaWFRdWVyeVtxdWVyeV0pICsgJ30nO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lZGlhUXVlcnlTdHJpbmc7XG4gIH0sXG4gIF9nZXRDb250ZXh0TWVkaWFRdWVyaWVzOiBmdW5jdGlvbiBfZ2V0Q29udGV4dE1lZGlhUXVlcmllcygpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBjb250ZXh0TWVkaWFRdWVyaWVzID0ge307XG4gICAgaWYgKHRoaXMuY29udGV4dCAmJiB0aGlzLmNvbnRleHQubWVkaWFRdWVyaWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQubWVkaWFRdWVyaWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICBjb250ZXh0TWVkaWFRdWVyaWVzW3F1ZXJ5XSA9IF90aGlzMy5jb250ZXh0Lm1lZGlhUXVlcmllc1txdWVyeV0ubWVkaWE7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dE1lZGlhUXVlcmllcztcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJ1bGVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVzID0gdGhpcy5fYnVpbGRTdHlsZXModGhpcy5wcm9wcy5ydWxlcyk7XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJywgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IHN0eWxlcyB9IH0pO1xuICB9XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3R5bGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL2NvbXBvbmVudHMvc3R5bGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfVxuXG52YXIgY2hlY2tQcm9wcyA9IGZ1bmN0aW9uIGNoZWNrUHJvcHMoKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBXYXJuIGlmIHlvdSB1c2UgbG9uZ2hhbmQgYW5kIHNob3J0aGFuZCBwcm9wZXJ0aWVzIGluIHRoZSBzYW1lIHN0eWxlXG4gICAgLy8gb2JqZWN0LlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9TaG9ydGhhbmRfcHJvcGVydGllc1xuXG4gICAgdmFyIHNob3J0aGFuZFByb3BlcnR5RXhwYW5zaW9ucyA9IHtcbiAgICAgICdiYWNrZ3JvdW5kJzogWydiYWNrZ3JvdW5kQXR0YWNobWVudCcsICdiYWNrZ3JvdW5kQmxlbmRNb2RlJywgJ2JhY2tncm91bmRDbGlwJywgJ2JhY2tncm91bmRDb2xvcicsICdiYWNrZ3JvdW5kSW1hZ2UnLCAnYmFja2dyb3VuZE9yaWdpbicsICdiYWNrZ3JvdW5kUG9zaXRpb24nLCAnYmFja2dyb3VuZFBvc2l0aW9uWCcsICdiYWNrZ3JvdW5kUG9zaXRpb25ZJywgJ2JhY2tncm91bmRSZXBlYXQnLCAnYmFja2dyb3VuZFJlcGVhdFgnLCAnYmFja2dyb3VuZFJlcGVhdFknLCAnYmFja2dyb3VuZFNpemUnXSxcbiAgICAgICdib3JkZXInOiBbJ2JvcmRlckJvdHRvbScsICdib3JkZXJCb3R0b21Db2xvcicsICdib3JkZXJCb3R0b21TdHlsZScsICdib3JkZXJCb3R0b21XaWR0aCcsICdib3JkZXJDb2xvcicsICdib3JkZXJMZWZ0JywgJ2JvcmRlckxlZnRDb2xvcicsICdib3JkZXJMZWZ0U3R5bGUnLCAnYm9yZGVyTGVmdFdpZHRoJywgJ2JvcmRlclJpZ2h0JywgJ2JvcmRlclJpZ2h0Q29sb3InLCAnYm9yZGVyUmlnaHRTdHlsZScsICdib3JkZXJSaWdodFdpZHRoJywgJ2JvcmRlclN0eWxlJywgJ2JvcmRlclRvcCcsICdib3JkZXJUb3BDb2xvcicsICdib3JkZXJUb3BTdHlsZScsICdib3JkZXJUb3BXaWR0aCcsICdib3JkZXJXaWR0aCddLFxuICAgICAgJ2JvcmRlckltYWdlJzogWydib3JkZXJJbWFnZU91dHNldCcsICdib3JkZXJJbWFnZVJlcGVhdCcsICdib3JkZXJJbWFnZVNsaWNlJywgJ2JvcmRlckltYWdlU291cmNlJywgJ2JvcmRlckltYWdlV2lkdGgnXSxcbiAgICAgICdib3JkZXJSYWRpdXMnOiBbJ2JvcmRlckJvdHRvbUxlZnRSYWRpdXMnLCAnYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMnLCAnYm9yZGVyVG9wTGVmdFJhZGl1cycsICdib3JkZXJUb3BSaWdodFJhZGl1cyddLFxuICAgICAgJ2ZvbnQnOiBbJ2ZvbnRGYW1pbHknLCAnZm9udEtlcm5pbmcnLCAnZm9udFNpemUnLCAnZm9udFN0cmV0Y2gnLCAnZm9udFN0eWxlJywgJ2ZvbnRWYXJpYW50JywgJ2ZvbnRWYXJpYW50TGlnYXR1cmVzJywgJ2ZvbnRXZWlnaHQnLCAnbGluZUhlaWdodCddLFxuICAgICAgJ2xpc3RTdHlsZSc6IFsnbGlzdFN0eWxlSW1hZ2UnLCAnbGlzdFN0eWxlUG9zaXRpb24nLCAnbGlzdFN0eWxlVHlwZSddLFxuICAgICAgJ21hcmdpbic6IFsnbWFyZ2luQm90dG9tJywgJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnLCAnbWFyZ2luVG9wJ10sXG4gICAgICAncGFkZGluZyc6IFsncGFkZGluZ0JvdHRvbScsICdwYWRkaW5nTGVmdCcsICdwYWRkaW5nUmlnaHQnLCAncGFkZGluZ1RvcCddLFxuICAgICAgJ3RyYW5zaXRpb24nOiBbJ3RyYW5zaXRpb25EZWxheScsICd0cmFuc2l0aW9uRHVyYXRpb24nLCAndHJhbnNpdGlvblByb3BlcnR5JywgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiddXG4gICAgfTtcblxuICAgIGNoZWNrUHJvcHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGNvbmZpZy5jb21wb25lbnROYW1lO1xuICAgICAgdmFyIHN0eWxlID0gY29uZmlnLnN0eWxlO1xuXG4gICAgICBpZiAoKHR5cGVvZiBzdHlsZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yoc3R5bGUpKSAhPT0gJ29iamVjdCcgfHwgIXN0eWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlS2V5cyA9IE9iamVjdC5rZXlzKHN0eWxlKTtcbiAgICAgIHN0eWxlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZUtleSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzaG9ydGhhbmRQcm9wZXJ0eUV4cGFuc2lvbnNbc3R5bGVLZXldKSAmJiBzaG9ydGhhbmRQcm9wZXJ0eUV4cGFuc2lvbnNbc3R5bGVLZXldLnNvbWUoZnVuY3Rpb24gKHNwKSB7XG4gICAgICAgICAgcmV0dXJuIHN0eWxlS2V5cy5pbmRleE9mKHNwKSAhPT0gLTE7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICAgIGNvbnNvbGUud2FybignUmFkaXVtOiBwcm9wZXJ0eSBcIicgKyBzdHlsZUtleSArICdcIiBpbiBzdHlsZSBvYmplY3QnLCBzdHlsZSwgJzogZG8gbm90IG1peCBsb25naGFuZCBhbmQgJyArICdzaG9ydGhhbmQgcHJvcGVydGllcyBpbiB0aGUgc2FtZSBzdHlsZSBvYmplY3QuIENoZWNrIHRoZSByZW5kZXIgJyArICdtZXRob2Qgb2YgJyArIGNvbXBvbmVudE5hbWUgKyAnLicsICdTZWUgaHR0cHM6Ly9naXRodWIuY29tL0Zvcm1pZGFibGVMYWJzL3JhZGl1bS9pc3N1ZXMvOTUgZm9yIG1vcmUgJyArICdpbmZvcm1hdGlvbi4nKTtcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHN0eWxlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgIHJldHVybiBjaGVja1Byb3BzKF9leHRlbmRzKHt9LCBjb25maWcsIHsgc3R5bGU6IHN0eWxlW2tdIH0pKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH07XG4gIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNoZWNrUHJvcHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL3BsdWdpbnMvY2hlY2stcHJvcHMtcGx1Z2luLmpzXG4gKiogbW9kdWxlIGlkID0gNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGtleWZyYW1lc1BsdWdpbjtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxudmFyIF9rZXlmcmFtZXMgPSByZXF1aXJlKCcuLi9rZXlmcmFtZXMnKTtcblxuZnVuY3Rpb24ga2V5ZnJhbWVzUGx1Z2luKF9yZWYgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zaGFkb3dcbikge1xuICB2YXIgYWRkQ1NTID0gX3JlZi5hZGRDU1M7XG4gIHZhciBjb25maWcgPSBfcmVmLmNvbmZpZztcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZTtcblxuICB2YXIgbmV3U3R5bGUgPSBPYmplY3Qua2V5cyhzdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChuZXdTdHlsZUluUHJvZ3Jlc3MsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlW2tleV07XG4gICAgaWYgKGtleSA9PT0gJ2FuaW1hdGlvbk5hbWUnICYmIHZhbHVlICYmIHZhbHVlLl9fcmFkaXVtS2V5ZnJhbWVzKSB7XG4gICAgICB2YXIga2V5ZnJhbWVzVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgdmFyIF9rZXlmcmFtZXNWYWx1ZSRfX3BybyA9IGtleWZyYW1lc1ZhbHVlLl9fcHJvY2Vzcyhjb25maWcudXNlckFnZW50KTtcblxuICAgICAgdmFyIGFuaW1hdGlvbk5hbWUgPSBfa2V5ZnJhbWVzVmFsdWUkX19wcm8uYW5pbWF0aW9uTmFtZTtcbiAgICAgIHZhciBjc3MgPSBfa2V5ZnJhbWVzVmFsdWUkX19wcm8uY3NzO1xuXG4gICAgICBhZGRDU1MoY3NzKTtcbiAgICAgIHZhbHVlID0gYW5pbWF0aW9uTmFtZTtcbiAgICB9XG5cbiAgICBuZXdTdHlsZUluUHJvZ3Jlc3Nba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBuZXdTdHlsZUluUHJvZ3Jlc3M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIHsgc3R5bGU6IG5ld1N0eWxlIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL3BsdWdpbnMva2V5ZnJhbWVzLXBsdWdpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbi8vIENvbnZlbmllbnQgc3ludGF4IGZvciBtdWx0aXBsZSBzdHlsZXM6IGBzdHlsZT17W3N0eWxlMSwgc3R5bGUyLCBldGNdfWBcbi8vIElnbm9yZXMgbm9uLW9iamVjdHMsIHNvIHlvdSBjYW4gZG8gYHRoaXMuc3RhdGUuaXNDb29sICYmIHN0eWxlcy5jb29sYC5cbnZhciBtZXJnZVN0eWxlQXJyYXlQbHVnaW4gPSBmdW5jdGlvbiBtZXJnZVN0eWxlQXJyYXlQbHVnaW4oX3JlZikge1xuICB2YXIgc3R5bGUgPSBfcmVmLnN0eWxlO1xuICB2YXIgbWVyZ2VTdHlsZXMgPSBfcmVmLm1lcmdlU3R5bGVzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvd1xuICB2YXIgbmV3U3R5bGUgPSBBcnJheS5pc0FycmF5KHN0eWxlKSA/IG1lcmdlU3R5bGVzKHN0eWxlKSA6IHN0eWxlO1xuICByZXR1cm4geyBzdHlsZTogbmV3U3R5bGUgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG1lcmdlU3R5bGVBcnJheVBsdWdpbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvcGx1Z2lucy9tZXJnZS1zdHlsZS1hcnJheS1wbHVnaW4uanNcbiAqKiBtb2R1bGUgaWQgPSA3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NhbGxiYWNrcyA9IFtdO1xudmFyIF9tb3VzZVVwTGlzdGVuZXJJc0FjdGl2ZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiBfaGFuZGxlTW91c2VVcCgpIHtcbiAgX2NhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKCk7XG4gIH0pO1xufVxuXG52YXIgc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gIGlmIChfY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xuICAgIF9jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICBpZiAoIV9tb3VzZVVwTGlzdGVuZXJJc0FjdGl2ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgX2hhbmRsZU1vdXNlVXApO1xuICAgIF9tb3VzZVVwTGlzdGVuZXJJc0FjdGl2ZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGluZGV4ID0gX2NhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIF9jYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgaWYgKF9jYWxsYmFja3MubGVuZ3RoID09PSAwICYmIF9tb3VzZVVwTGlzdGVuZXJJc0FjdGl2ZSkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF9oYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgX21vdXNlVXBMaXN0ZW5lcklzQWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgX190cmlnZ2VyRm9yVGVzdHM6IF9oYW5kbGVNb3VzZVVwXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9wbHVnaW5zL21vdXNlLXVwLWxpc3RlbmVyLmpzXG4gKiogbW9kdWxlIGlkID0gNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHByZWZpeFBsdWdpbjtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4uL3ByZWZpeGVyJyk7XG5cbmZ1bmN0aW9uIHByZWZpeFBsdWdpbihfcmVmIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2hhZG93XG4pIHtcbiAgdmFyIGNvbmZpZyA9IF9yZWYuY29uZmlnO1xuICB2YXIgc3R5bGUgPSBfcmVmLnN0eWxlO1xuXG4gIHZhciBuZXdTdHlsZSA9ICgwLCBfcHJlZml4ZXIuZ2V0UHJlZml4ZWRTdHlsZSkoc3R5bGUsIGNvbmZpZy51c2VyQWdlbnQpO1xuICByZXR1cm4geyBzdHlsZTogbmV3U3R5bGUgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvcGx1Z2lucy9wcmVmaXgtcGx1Z2luLmpzXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxudmFyIF9tb3VzZVVwTGlzdGVuZXIgPSByZXF1aXJlKCcuL21vdXNlLXVwLWxpc3RlbmVyJyk7XG5cbnZhciBfbW91c2VVcExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vdXNlVXBMaXN0ZW5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfaXNJbnRlcmFjdGl2ZVN0eWxlRmllbGQgPSBmdW5jdGlvbiBfaXNJbnRlcmFjdGl2ZVN0eWxlRmllbGQoc3R5bGVGaWVsZE5hbWUpIHtcbiAgcmV0dXJuIHN0eWxlRmllbGROYW1lID09PSAnOmhvdmVyJyB8fCBzdHlsZUZpZWxkTmFtZSA9PT0gJzphY3RpdmUnIHx8IHN0eWxlRmllbGROYW1lID09PSAnOmZvY3VzJztcbn07XG5cbnZhciByZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXMgPSBmdW5jdGlvbiByZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXMoY29uZmlnKSB7XG4gIHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IGNvbmZpZy5FeGVjdXRpb25FbnZpcm9ubWVudDtcbiAgdmFyIGdldENvbXBvbmVudEZpZWxkID0gY29uZmlnLmdldENvbXBvbmVudEZpZWxkO1xuICB2YXIgZ2V0U3RhdGUgPSBjb25maWcuZ2V0U3RhdGU7XG4gIHZhciBtZXJnZVN0eWxlcyA9IGNvbmZpZy5tZXJnZVN0eWxlcztcbiAgdmFyIHByb3BzID0gY29uZmlnLnByb3BzO1xuICB2YXIgc2V0U3RhdGUgPSBjb25maWcuc2V0U3RhdGU7XG4gIHZhciBzdHlsZSA9IGNvbmZpZy5zdHlsZTtcblxuICB2YXIgbmV3Q29tcG9uZW50RmllbGRzID0ge307XG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIC8vIE9ubHkgYWRkIGhhbmRsZXJzIGlmIG5lY2Vzc2FyeVxuICBpZiAoc3R5bGVbJzpob3ZlciddKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEFsd2F5cyBjYWxsIHRoZSBleGlzdGluZyBoYW5kbGVyIGlmIG9uZSBpcyBhbHJlYWR5IGRlZmluZWQuXG4gICAgICAvLyBUaGlzIGNvZGUsIGFuZCB0aGUgdmVyeSBzaW1pbGFyIG9uZXMgYmVsb3csIGNvdWxkIGJlIGFic3RyYWN0ZWQgYSBiaXRcbiAgICAgIC8vIG1vcmUsIGJ1dCBpdCBodXJ0cyByZWFkYWJpbGl0eSBJTU8uXG4gICAgICB2YXIgZXhpc3RpbmdPbk1vdXNlRW50ZXIgPSBwcm9wcy5vbk1vdXNlRW50ZXI7XG4gICAgICBuZXdQcm9wcy5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBleGlzdGluZ09uTW91c2VFbnRlciAmJiBleGlzdGluZ09uTW91c2VFbnRlcihlKTtcbiAgICAgICAgc2V0U3RhdGUoJzpob3ZlcicsIHRydWUpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGV4aXN0aW5nT25Nb3VzZUxlYXZlID0gcHJvcHMub25Nb3VzZUxlYXZlO1xuICAgICAgbmV3UHJvcHMub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXhpc3RpbmdPbk1vdXNlTGVhdmUgJiYgZXhpc3RpbmdPbk1vdXNlTGVhdmUoZSk7XG4gICAgICAgIHNldFN0YXRlKCc6aG92ZXInLCBmYWxzZSk7XG4gICAgICB9O1xuICAgIH0pKCk7XG4gIH1cblxuICBpZiAoc3R5bGVbJzphY3RpdmUnXSkge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZXhpc3RpbmdPbk1vdXNlRG93biA9IHByb3BzLm9uTW91c2VEb3duO1xuICAgICAgbmV3UHJvcHMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBleGlzdGluZ09uTW91c2VEb3duICYmIGV4aXN0aW5nT25Nb3VzZURvd24oZSk7XG4gICAgICAgIG5ld0NvbXBvbmVudEZpZWxkcy5fbGFzdE1vdXNlRG93biA9IERhdGUubm93KCk7XG4gICAgICAgIHNldFN0YXRlKCc6YWN0aXZlJywgJ3ZpYW1vdXNlZG93bicpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGV4aXN0aW5nT25LZXlEb3duID0gcHJvcHMub25LZXlEb3duO1xuICAgICAgbmV3UHJvcHMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXhpc3RpbmdPbktleURvd24gJiYgZXhpc3RpbmdPbktleURvd24oZSk7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgc2V0U3RhdGUoJzphY3RpdmUnLCAndmlha2V5ZG93bicpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgZXhpc3RpbmdPbktleVVwID0gcHJvcHMub25LZXlVcDtcbiAgICAgIG5ld1Byb3BzLm9uS2V5VXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBleGlzdGluZ09uS2V5VXAgJiYgZXhpc3RpbmdPbktleVVwKGUpO1xuICAgICAgICBpZiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgIHNldFN0YXRlKCc6YWN0aXZlJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCk7XG4gIH1cblxuICBpZiAoc3R5bGVbJzpmb2N1cyddKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBleGlzdGluZ09uRm9jdXMgPSBwcm9wcy5vbkZvY3VzO1xuICAgICAgbmV3UHJvcHMub25Gb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGV4aXN0aW5nT25Gb2N1cyAmJiBleGlzdGluZ09uRm9jdXMoZSk7XG4gICAgICAgIHNldFN0YXRlKCc6Zm9jdXMnLCB0cnVlKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBleGlzdGluZ09uQmx1ciA9IHByb3BzLm9uQmx1cjtcbiAgICAgIG5ld1Byb3BzLm9uQmx1ciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGV4aXN0aW5nT25CbHVyICYmIGV4aXN0aW5nT25CbHVyKGUpO1xuICAgICAgICBzZXRTdGF0ZSgnOmZvY3VzJywgZmFsc2UpO1xuICAgICAgfTtcbiAgICB9KSgpO1xuICB9XG5cbiAgaWYgKHN0eWxlWyc6YWN0aXZlJ10gJiYgIWdldENvbXBvbmVudEZpZWxkKCdfcmFkaXVtTW91c2VVcExpc3RlbmVyJykgJiYgRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICBuZXdDb21wb25lbnRGaWVsZHMuX3JhZGl1bU1vdXNlVXBMaXN0ZW5lciA9IF9tb3VzZVVwTGlzdGVuZXIyLmRlZmF1bHQuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgIE9iamVjdC5rZXlzKGdldENvbXBvbmVudEZpZWxkKCdzdGF0ZScpLl9yYWRpdW1TdHlsZVN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKGdldFN0YXRlKCc6YWN0aXZlJywga2V5KSA9PT0gJ3ZpYW1vdXNlZG93bicpIHtcbiAgICAgICAgICBzZXRTdGF0ZSgnOmFjdGl2ZScsIGZhbHNlLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE1lcmdlIHRoZSBzdHlsZXMgaW4gdGhlIG9yZGVyIHRoZXkgd2VyZSBkZWZpbmVkXG4gIHZhciBpbnRlcmFjdGlvblN0eWxlcyA9IE9iamVjdC5rZXlzKHN0eWxlKS5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gX2lzSW50ZXJhY3RpdmVTdHlsZUZpZWxkKG5hbWUpICYmIGdldFN0YXRlKG5hbWUpO1xuICB9KS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gc3R5bGVbbmFtZV07XG4gIH0pO1xuXG4gIHZhciBuZXdTdHlsZSA9IG1lcmdlU3R5bGVzKFtzdHlsZV0uY29uY2F0KGludGVyYWN0aW9uU3R5bGVzKSk7XG5cbiAgLy8gUmVtb3ZlIGludGVyYWN0aXZlIHN0eWxlc1xuICBuZXdTdHlsZSA9IE9iamVjdC5rZXlzKG5ld1N0eWxlKS5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlV2l0aG91dEludGVyYWN0aW9ucywgbmFtZSkge1xuICAgIGlmICghX2lzSW50ZXJhY3RpdmVTdHlsZUZpZWxkKG5hbWUpKSB7XG4gICAgICBzdHlsZVdpdGhvdXRJbnRlcmFjdGlvbnNbbmFtZV0gPSBuZXdTdHlsZVtuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlV2l0aG91dEludGVyYWN0aW9ucztcbiAgfSwge30pO1xuXG4gIHJldHVybiB7XG4gICAgY29tcG9uZW50RmllbGRzOiBuZXdDb21wb25lbnRGaWVsZHMsXG4gICAgcHJvcHM6IG5ld1Byb3BzLFxuICAgIHN0eWxlOiBuZXdTdHlsZVxuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcmVzb2x2ZUludGVyYWN0aW9uU3R5bGVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9wbHVnaW5zL3Jlc29sdmUtaW50ZXJhY3Rpb24tc3R5bGVzLXBsdWdpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZXNvbHZlTWVkaWFRdWVyaWVzO1xuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG52YXIgX2FwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlID0gcmVxdWlyZSgnLi4vYXBwZW5kLWltcG9ydGFudC10by1lYWNoLXZhbHVlJyk7XG5cbnZhciBfYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUpO1xuXG52YXIgX2hhc2ggPSByZXF1aXJlKCcuLi9oYXNoJyk7XG5cbnZhciBfaGFzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF93aW5kb3dNYXRjaE1lZGlhID0gdW5kZWZpbmVkO1xuZnVuY3Rpb24gX2dldFdpbmRvd01hdGNoTWVkaWEoRXhlY3V0aW9uRW52aXJvbm1lbnQpIHtcbiAgaWYgKF93aW5kb3dNYXRjaE1lZGlhID09PSB1bmRlZmluZWQpIHtcbiAgICBfd2luZG93TWF0Y2hNZWRpYSA9ICEhRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NICYmICEhd2luZG93ICYmICEhd2luZG93Lm1hdGNoTWVkaWEgJiYgZnVuY3Rpb24gKG1lZGlhUXVlcnlTdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5U3RyaW5nKTtcbiAgICB9IHx8IG51bGw7XG4gIH1cbiAgcmV0dXJuIF93aW5kb3dNYXRjaE1lZGlhO1xufVxuXG5mdW5jdGlvbiBfZmlsdGVyT2JqZWN0KG9iaiwgcHJlZGljYXRlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHByZWRpY2F0ZShvYmpba2V5XSwga2V5KTtcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlTWVkaWFRdWVyaWVzKHN0eWxlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChzdHlsZVdpdGhvdXRNZWRpYSwga2V5KSB7XG4gICAgaWYgKGtleS5pbmRleE9mKCdAbWVkaWEnKSAhPT0gMCkge1xuICAgICAgc3R5bGVXaXRob3V0TWVkaWFba2V5XSA9IHN0eWxlW2tleV07XG4gICAgfVxuICAgIHJldHVybiBzdHlsZVdpdGhvdXRNZWRpYTtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBfdG9wTGV2ZWxSdWxlc1RvQ1NTKF9yZWYpIHtcbiAgdmFyIGFkZENTUyA9IF9yZWYuYWRkQ1NTO1xuICB2YXIgY3NzUnVsZVNldFRvU3RyaW5nID0gX3JlZi5jc3NSdWxlU2V0VG9TdHJpbmc7XG4gIHZhciBpc05lc3RlZFN0eWxlID0gX3JlZi5pc05lc3RlZFN0eWxlO1xuICB2YXIgc3R5bGUgPSBfcmVmLnN0eWxlO1xuICB2YXIgdXNlckFnZW50ID0gX3JlZi51c2VyQWdlbnQ7XG5cbiAgdmFyIGNsYXNzTmFtZSA9ICcnO1xuICBPYmplY3Qua2V5cyhzdHlsZSkuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUuaW5kZXhPZignQG1lZGlhJykgPT09IDA7XG4gIH0pLm1hcChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICB2YXIgdG9wTGV2ZWxSdWxlcyA9ICgwLCBfYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUyLmRlZmF1bHQpKF9maWx0ZXJPYmplY3Qoc3R5bGVbcXVlcnldLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiAhaXNOZXN0ZWRTdHlsZSh2YWx1ZSk7XG4gICAgfSkpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyh0b3BMZXZlbFJ1bGVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcnVsZUNTUyA9IGNzc1J1bGVTZXRUb1N0cmluZygnJywgdG9wTGV2ZWxSdWxlcywgdXNlckFnZW50KTtcblxuICAgIC8vIENTUyBjbGFzc2VzIGNhbm5vdCBzdGFydCB3aXRoIGEgbnVtYmVyXG4gICAgdmFyIG1lZGlhUXVlcnlDbGFzc05hbWUgPSAncm1xLScgKyAoMCwgX2hhc2gyLmRlZmF1bHQpKHF1ZXJ5ICsgcnVsZUNTUyk7XG4gICAgdmFyIGNzcyA9IHF1ZXJ5ICsgJ3sgLicgKyBtZWRpYVF1ZXJ5Q2xhc3NOYW1lICsgcnVsZUNTUyArICd9JztcblxuICAgIGFkZENTUyhjc3MpO1xuXG4gICAgY2xhc3NOYW1lICs9ICcgJyArIG1lZGlhUXVlcnlDbGFzc05hbWU7XG4gIH0pO1xuICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5mdW5jdGlvbiBfc3Vic2NyaWJlVG9NZWRpYVF1ZXJ5KF9yZWYyKSB7XG4gIHZhciBsaXN0ZW5lciA9IF9yZWYyLmxpc3RlbmVyO1xuICB2YXIgbGlzdGVuZXJzQnlRdWVyeSA9IF9yZWYyLmxpc3RlbmVyc0J5UXVlcnk7XG4gIHZhciBtYXRjaE1lZGlhID0gX3JlZjIubWF0Y2hNZWRpYTtcbiAgdmFyIG1lZGlhUXVlcnlMaXN0c0J5UXVlcnkgPSBfcmVmMi5tZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5O1xuICB2YXIgcXVlcnkgPSBfcmVmMi5xdWVyeTtcblxuICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoJ0BtZWRpYSAnLCAnJyk7XG5cbiAgdmFyIG1xbCA9IG1lZGlhUXVlcnlMaXN0c0J5UXVlcnlbcXVlcnldO1xuICBpZiAoIW1xbCAmJiBtYXRjaE1lZGlhKSB7XG4gICAgbWVkaWFRdWVyeUxpc3RzQnlRdWVyeVtxdWVyeV0gPSBtcWwgPSBtYXRjaE1lZGlhKHF1ZXJ5KTtcbiAgfVxuXG4gIGlmICghbGlzdGVuZXJzQnlRdWVyeSB8fCAhbGlzdGVuZXJzQnlRdWVyeVtxdWVyeV0pIHtcbiAgICBtcWwuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgbGlzdGVuZXJzQnlRdWVyeVtxdWVyeV0gPSB7XG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgbXFsLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHJldHVybiBtcWw7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVNZWRpYVF1ZXJpZXMoX3JlZjMpIHtcbiAgdmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gX3JlZjMuRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG4gIHZhciBhZGRDU1MgPSBfcmVmMy5hZGRDU1M7XG4gIHZhciBjb25maWcgPSBfcmVmMy5jb25maWc7XG4gIHZhciBjc3NSdWxlU2V0VG9TdHJpbmcgPSBfcmVmMy5jc3NSdWxlU2V0VG9TdHJpbmc7XG4gIHZhciBnZXRDb21wb25lbnRGaWVsZCA9IF9yZWYzLmdldENvbXBvbmVudEZpZWxkO1xuICB2YXIgZ2V0R2xvYmFsU3RhdGUgPSBfcmVmMy5nZXRHbG9iYWxTdGF0ZTtcbiAgdmFyIGlzTmVzdGVkU3R5bGUgPSBfcmVmMy5pc05lc3RlZFN0eWxlO1xuICB2YXIgbWVyZ2VTdHlsZXMgPSBfcmVmMy5tZXJnZVN0eWxlcztcbiAgdmFyIHByb3BzID0gX3JlZjMucHJvcHM7XG4gIHZhciBzZXRTdGF0ZSA9IF9yZWYzLnNldFN0YXRlO1xuICB2YXIgc3R5bGUgPSBfcmVmMy5zdHlsZTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zaGFkb3dcbiAgdmFyIG5ld1N0eWxlID0gX3JlbW92ZU1lZGlhUXVlcmllcyhzdHlsZSk7XG4gIHZhciBtZWRpYVF1ZXJ5Q2xhc3NOYW1lcyA9IF90b3BMZXZlbFJ1bGVzVG9DU1Moe1xuICAgIGFkZENTUzogYWRkQ1NTLFxuICAgIGNzc1J1bGVTZXRUb1N0cmluZzogY3NzUnVsZVNldFRvU3RyaW5nLFxuICAgIGlzTmVzdGVkU3R5bGU6IGlzTmVzdGVkU3R5bGUsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIHVzZXJBZ2VudDogY29uZmlnLnVzZXJBZ2VudFxuICB9KTtcblxuICB2YXIgbmV3UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBtZWRpYVF1ZXJ5Q2xhc3NOYW1lcyArICcgJyArIChwcm9wcy5jbGFzc05hbWUgfHwgJycpXG4gIH07XG5cbiAgdmFyIG1hdGNoTWVkaWEgPSBjb25maWcubWF0Y2hNZWRpYSB8fCBfZ2V0V2luZG93TWF0Y2hNZWRpYShFeGVjdXRpb25FbnZpcm9ubWVudCk7XG5cbiAgaWYgKCFtYXRjaE1lZGlhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiBuZXdQcm9wcyxcbiAgICAgIHN0eWxlOiBuZXdTdHlsZVxuICAgIH07XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzQnlRdWVyeSA9IF9leHRlbmRzKHt9LCBnZXRDb21wb25lbnRGaWVsZCgnX3JhZGl1bU1lZGlhUXVlcnlMaXN0ZW5lcnNCeVF1ZXJ5JykpO1xuICB2YXIgbWVkaWFRdWVyeUxpc3RzQnlRdWVyeSA9IGdldEdsb2JhbFN0YXRlKCdtZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5JykgfHwge307XG5cbiAgT2JqZWN0LmtleXMoc3R5bGUpLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBuYW1lLmluZGV4T2YoJ0BtZWRpYScpID09PSAwO1xuICB9KS5tYXAoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgdmFyIG5lc3RlZFJ1bGVzID0gX2ZpbHRlck9iamVjdChzdHlsZVtxdWVyeV0sIGlzTmVzdGVkU3R5bGUpO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhuZXN0ZWRSdWxlcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1xbCA9IF9zdWJzY3JpYmVUb01lZGlhUXVlcnkoe1xuICAgICAgbGlzdGVuZXI6IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICByZXR1cm4gc2V0U3RhdGUocXVlcnksIG1xbC5tYXRjaGVzLCAnX2FsbCcpO1xuICAgICAgfSxcbiAgICAgIGxpc3RlbmVyc0J5UXVlcnk6IGxpc3RlbmVyc0J5UXVlcnksXG4gICAgICBtYXRjaE1lZGlhOiBtYXRjaE1lZGlhLFxuICAgICAgbWVkaWFRdWVyeUxpc3RzQnlRdWVyeTogbWVkaWFRdWVyeUxpc3RzQnlRdWVyeSxcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH0pO1xuXG4gICAgLy8gQXBwbHkgbWVkaWEgcXVlcnkgc3RhdGVzXG4gICAgaWYgKG1xbC5tYXRjaGVzKSB7XG4gICAgICBuZXdTdHlsZSA9IG1lcmdlU3R5bGVzKFtuZXdTdHlsZSwgbmVzdGVkUnVsZXNdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY29tcG9uZW50RmllbGRzOiB7XG4gICAgICBfcmFkaXVtTWVkaWFRdWVyeUxpc3RlbmVyc0J5UXVlcnk6IGxpc3RlbmVyc0J5UXVlcnlcbiAgICB9LFxuICAgIGdsb2JhbFN0YXRlOiB7IG1lZGlhUXVlcnlMaXN0c0J5UXVlcnk6IG1lZGlhUXVlcnlMaXN0c0J5UXVlcnkgfSxcbiAgICBwcm9wczogbmV3UHJvcHMsXG4gICAgc3R5bGU6IG5ld1N0eWxlXG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL3BsdWdpbnMvcmVzb2x2ZS1tZWRpYS1xdWVyaWVzLXBsdWdpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIik7IH07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4gKiogbW9kdWxlIGlkID0gNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=