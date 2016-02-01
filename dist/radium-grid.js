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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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
	
	var _checkPropsPlugin = __webpack_require__(54);
	
	var _checkPropsPlugin2 = _interopRequireDefault(_checkPropsPlugin);
	
	var _keyframesPlugin = __webpack_require__(55);
	
	var _keyframesPlugin2 = _interopRequireDefault(_keyframesPlugin);
	
	var _mergeStyleArrayPlugin = __webpack_require__(56);
	
	var _mergeStyleArrayPlugin2 = _interopRequireDefault(_mergeStyleArrayPlugin);
	
	var _prefixPlugin = __webpack_require__(58);
	
	var _prefixPlugin2 = _interopRequireDefault(_prefixPlugin);
	
	var _resolveInteractionStylesPlugin = __webpack_require__(59);
	
	var _resolveInteractionStylesPlugin2 = _interopRequireDefault(_resolveInteractionStylesPlugin);
	
	var _resolveMediaQueriesPlugin = __webpack_require__(60);
	
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
	
	var _appendPxIfNeeded = __webpack_require__(9);
	
	var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);
	
	var _camelCasePropsToDashCase = __webpack_require__(50);
	
	var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);
	
	var _mapObject = __webpack_require__(16);
	
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
	
	var _inlineStylePrefixer = __webpack_require__(29);
	
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

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var parseFraction = function parseFraction(string) {
	  var _string$split = string.split("/");
	
	  var _string$split2 = _slicedToArray(_string$split, 2);
	
	  var n = _string$split2[0];
	  var d = _string$split2[1];
	
	  var numerator = parseInt(n, 10);
	  var denominator = parseInt(d, 10);
	
	  if (numerator === 1 && !denominator) {
	    return numerator;
	  }
	
	  if (!(numerator && denominator)) {
	    throw new Error("Your fraction is missing a numerator or denominator.");
	  }
	
	  if (denominator === 0) {
	    throw new Error("The fraction you provided divides by zero.");
	  }
	
	  return numerator / denominator;
	};
	
	/* harmony default export */ exports["default"] = parseFraction

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
/* 10 */
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
	
	var _resolveStyles = __webpack_require__(18);
	
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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getStateKey = __webpack_require__(11);
	
	var _getStateKey2 = _interopRequireDefault(_getStateKey);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getState = function getState(state, elementKey, value) {
	  var key = (0, _getStateKey2.default)(elementKey);
	
	  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
	};
	
	exports.default = getState;
	module.exports = exports['default'];

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _enhancer = __webpack_require__(10);
	
	var _enhancer2 = _interopRequireDefault(_enhancer);
	
	var _plugins = __webpack_require__(0);
	
	var _plugins2 = _interopRequireDefault(_plugins);
	
	var _style = __webpack_require__(53);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _styleRoot = __webpack_require__(51);
	
	var _styleRoot2 = _interopRequireDefault(_styleRoot);
	
	var _getState = __webpack_require__(12);
	
	var _getState2 = _interopRequireDefault(_getState);
	
	var _keyframes = __webpack_require__(15);
	
	var _keyframes2 = _interopRequireDefault(_keyframes);
	
	var _resolveStyles = __webpack_require__(18);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyframes;
	
	var _cssRuleSetToString = __webpack_require__(4);
	
	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);
	
	var _hash = __webpack_require__(13);
	
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isNestedStyle = isNestedStyle;
	exports.mergeStyles = mergeStyles;
	
	var _isPlainObject = __webpack_require__(44);
	
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _config = __webpack_require__(3);
	
	var _cssRuleSetToString = __webpack_require__(4);
	
	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);
	
	var _getState = __webpack_require__(12);
	
	var _getState2 = _interopRequireDefault(_getState);
	
	var _getStateKey = __webpack_require__(11);
	
	var _getStateKey2 = _interopRequireDefault(_getStateKey);
	
	var _mergeStyles = __webpack_require__(17);
	
	var _plugins = __webpack_require__(0);
	
	var _plugins2 = _interopRequireDefault(_plugins);
	
	var _exenv = __webpack_require__(27);
	
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(14);
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(14);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __WEBPACK_IMPORTED_MODULE_1_radium__ && __WEBPACK_IMPORTED_MODULE_1_radium__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_radium__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_radium__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_radium___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_radium___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_resolve_cells__ = __webpack_require__(23);
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var prune = function prune(object) {
	  return Object.keys(object).reduce(function (acc, key) {
	    return object[key] === undefined ? acc : _extends({}, acc, _defineProperty({}, key, object[key]));
	  }, {});
	};
	
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
	
	    var cellConfig = _extends({}, prune(gridDefault), prune(gridBreakpointDefault), prune(cellDefault), prune(cellBreakpointDefault));
	
	    return _extends({}, acc, _defineProperty({}, mediaQuery, cellConfig));
	  }, {});
	};
	
	/* harmony default export */ exports["default"] = resolveCellDefaults

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles__ = __webpack_require__(17);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles___default = __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles__ && __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_radium_lib_merge_styles___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_fraction__ = __webpack_require__(7);
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
	  if (width === 1) {
	    return "100%";
	  }
	
	  var finalGutter = resolveCellGutter({ gutter: gutter, columnCount: columnCount });
	
	  return "calc(" + width * MULTIPLIER + "% - " + finalGutter + ")";
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
	        width: /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__parse_fraction__["default"](breakpointStyles.width),
	        gutter: breakpointStyles.gutter,
	        columnCount: breakpointStyles.columnCount
	      }),
	      alignItems: alignmentMap[breakpointStyles.verticalAlign],
	      justifyContent: alignmentMap[breakpointStyles.horizontalAlign],
	      order: breakpointStyles.order ? breakpointStyles.order : "initial"
	    }));
	  }, resolvePropStyles(props.style));
	};
	
	/* harmony default export */ exports["default"] = resolveCellStyles

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolve_cell_defaults__ = __webpack_require__(21);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolve_column_counts__ = __webpack_require__(24);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolve_cell_styles__ = __webpack_require__(22);
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	
	
	
	
	
	var resolveCells = function resolveCells(props) {
	  // Resolve the final style defaults for each cell
	  var children = props.children;
	  var style = props.style;
	
	  var childProps = _objectWithoutProperties(props, ["children", "style"]); // eslint-disable-line no-unused-vars
	
	  var childrenWithDefaults = /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(props.children, function (child) {
	    return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__resolve_cell_defaults__["default"](_extends({}, childProps, child.props)));
	  });
	
	  // Add column counts to each cell's props
	  var childrenWithColumnCounts = /* harmony import */ __WEBPACK_IMPORTED_MODULE_2__resolve_column_counts__["default"]({
	    children: childrenWithDefaults,
	    breakpoints: props.breakpoints
	  });
	
	  // Resolve the final cell styles
	  return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(childrenWithColumnCounts, function (child) {
	    return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
	      style: /* harmony import */ __WEBPACK_IMPORTED_MODULE_3__resolve_cell_styles__["default"](child.props)
	    });
	  });
	};
	
	/* harmony default export */ exports["default"] = resolveCells

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_initial__ = __webpack_require__(47);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_initial___default = __WEBPACK_IMPORTED_MODULE_1_lodash_initial__ && __WEBPACK_IMPORTED_MODULE_1_lodash_initial__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_lodash_initial__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_lodash_initial__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_lodash_initial___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_lodash_initial___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_last__ = __webpack_require__(48);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_last___default = __WEBPACK_IMPORTED_MODULE_2_lodash_last__ && __WEBPACK_IMPORTED_MODULE_2_lodash_last__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_lodash_last__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_lodash_last__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_lodash_last___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_lodash_last___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_fraction__ = __webpack_require__(7);
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
	        return /* harmony import */ __WEBPACK_IMPORTED_MODULE_3__parse_fraction__["default"](column.width);
	      }).reduce(function (previous, width) {
	        return previous + width;
	      });
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_grid__ = __webpack_require__(20);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cell__ = __webpack_require__(19);
	
	
	
	var Grid = /* harmony import */ __WEBPACK_IMPORTED_MODULE_0__components_grid__["default"];/* harmony export */ Object.defineProperty(exports, "Grid", {configurable: false, enumerable: true, get: function() { return Grid; }});
	var Cell = /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__components_cell__["default"];/* harmony export */ Object.defineProperty(exports, "Cell", {configurable: false, enumerable: true, get: function() { return Cell; }});

/***/ },
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _pluginsCalc = __webpack_require__(31);
	
	var _pluginsCalc2 = _interopRequireDefault(_pluginsCalc);
	
	var _pluginsCursor = __webpack_require__(32);
	
	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);
	
	var _pluginsFlex = __webpack_require__(33);
	
	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);
	
	var _pluginsSizing = __webpack_require__(37);
	
	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);
	
	var _pluginsGradient = __webpack_require__(36);
	
	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);
	
	var _pluginsTransition = __webpack_require__(38);
	
	var _pluginsTransition2 = _interopRequireDefault(_pluginsTransition);
	
	// special flexbox specifications
	
	var _pluginsFlexboxIE = __webpack_require__(34);
	
	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);
	
	var _pluginsFlexboxOld = __webpack_require__(35);
	
	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);
	
	exports['default'] = [_pluginsCalc2['default'], _pluginsCursor2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsTransition2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default'],
	// this must be run AFTER the flexbox specs
	_pluginsFlex2['default']];
	module.exports = exports['default'];

/***/ },
/* 29 */
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
	
	var _utilsGetBrowserInformation = __webpack_require__(41);
	
	var _utilsGetBrowserInformation2 = _interopRequireDefault(_utilsGetBrowserInformation);
	
	var _utilsGetPrefixedKeyframes = __webpack_require__(42);
	
	var _utilsGetPrefixedKeyframes2 = _interopRequireDefault(_utilsGetPrefixedKeyframes);
	
	var _utilsCapitalizeString = __webpack_require__(8);
	
	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);
	
	var _utilsAssign = __webpack_require__(39);
	
	var _utilsAssign2 = _interopRequireDefault(_utilsAssign);
	
	var _utilsWarn = __webpack_require__(43);
	
	var _utilsWarn2 = _interopRequireDefault(_utilsWarn);
	
	var _caniuseData = __webpack_require__(30);
	
	var _caniuseData2 = _interopRequireDefault(_caniuseData);
	
	var _Plugins = __webpack_require__(28);
	
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
/* 30 */
/***/ function(module, exports) {

	var caniuseData = {"chrome":{"transform":35,"transformOrigin":35,"transformOriginX":35,"transformOriginY":35,"backfaceVisibility":35,"perspective":35,"perspectiveOrigin":35,"transformStyle":35,"transformOriginZ":35,"animation":42,"animationDelay":42,"animationDirection":42,"animationFillMode":42,"animationDuration":42,"animationIterationCount":42,"animationName":42,"animationPlayState":42,"animationTimingFunction":42,"appearance":50,"userSelect":50,"fontKerning":32,"textEmphasisPosition":50,"textEmphasis":50,"textEmphasisStyle":50,"textEmphasisColor":50,"boxDecorationBreak":50,"clipPath":50,"maskImage":50,"maskMode":50,"maskRepeat":50,"maskPosition":50,"maskClip":50,"maskOrigin":50,"maskSize":50,"maskComposite":50,"mask":50,"maskBorderSource":50,"maskBorderMode":50,"maskBorderSlice":50,"maskBorderWidth":50,"maskBorderOutset":50,"maskBorderRepeat":50,"maskBorder":50,"maskType":50,"textDecorationStyle":50,"textDecorationSkip":50,"textDecorationLine":50,"textDecorationColor":50,"filter":50,"fontFeatureSettings":47,"breakAfter":50,"breakBefore":50,"breakInside":50,"columnCount":50,"columnFill":50,"columnGap":50,"columnRule":50,"columnRuleColor":50,"columnRuleStyle":50,"columnRuleWidth":50,"columns":50,"columnSpan":50,"columnWidth":50},"safari":{"flex":8,"flexBasis":8,"flexDirection":8,"flexGrow":8,"flexFlow":8,"flexShrink":8,"flexWrap":8,"alignContent":8,"alignItems":8,"alignSelf":8,"justifyContent":8,"order":8,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"transform":8,"transformOrigin":8,"transformOriginX":8,"transformOriginY":8,"backfaceVisibility":8,"perspective":8,"perspectiveOrigin":8,"transformStyle":8,"transformOriginZ":8,"animation":8,"animationDelay":8,"animationDirection":8,"animationFillMode":8,"animationDuration":8,"animationIterationCount":8,"animationName":8,"animationPlayState":8,"animationTimingFunction":8,"appearance":9.1,"userSelect":9.1,"backdropFilter":9.1,"fontKerning":9.1,"scrollSnapType":9.1,"scrollSnapPointsX":9.1,"scrollSnapPointsY":9.1,"scrollSnapDestination":9.1,"scrollSnapCoordinate":9.1,"textEmphasisPosition":7,"textEmphasis":7,"textEmphasisStyle":7,"textEmphasisColor":7,"boxDecorationBreak":9.1,"clipPath":9.1,"maskImage":9.1,"maskMode":9.1,"maskRepeat":9.1,"maskPosition":9.1,"maskClip":9.1,"maskOrigin":9.1,"maskSize":9.1,"maskComposite":9.1,"mask":9.1,"maskBorderSource":9.1,"maskBorderMode":9.1,"maskBorderSlice":9.1,"maskBorderWidth":9.1,"maskBorderOutset":9.1,"maskBorderRepeat":9.1,"maskBorder":9.1,"maskType":9.1,"textDecorationStyle":9.1,"textDecorationSkip":9.1,"textDecorationLine":9.1,"textDecorationColor":9.1,"shapeImageThreshold":9.1,"shapeImageMargin":9.1,"shapeImageOutside":9.1,"filter":9,"hyphens":9.1,"flowInto":9.1,"flowFrom":9.1,"breakBefore":8,"breakAfter":8,"breakInside":8,"regionFragment":9.1,"columnCount":8,"columnFill":8,"columnGap":8,"columnRule":8,"columnRuleColor":8,"columnRuleStyle":8,"columnRuleWidth":8,"columns":8,"columnSpan":8,"columnWidth":8},"firefox":{"appearance":46,"userSelect":46,"boxSizing":28,"textAlignLast":46,"textDecorationStyle":35,"textDecorationSkip":35,"textDecorationLine":35,"textDecorationColor":35,"tabSize":46,"hyphens":42,"fontFeatureSettings":33,"breakAfter":46,"breakBefore":46,"breakInside":46,"columnCount":46,"columnFill":46,"columnGap":46,"columnRule":46,"columnRuleColor":46,"columnRuleStyle":46,"columnRuleWidth":46,"columns":46,"columnSpan":46,"columnWidth":46},"opera":{"flex":16,"flexBasis":16,"flexDirection":16,"flexGrow":16,"flexFlow":16,"flexShrink":16,"flexWrap":16,"alignContent":16,"alignItems":16,"alignSelf":16,"justifyContent":16,"order":16,"transform":22,"transformOrigin":22,"transformOriginX":22,"transformOriginY":22,"backfaceVisibility":22,"perspective":22,"perspectiveOrigin":22,"transformStyle":22,"transformOriginZ":22,"animation":29,"animationDelay":29,"animationDirection":29,"animationFillMode":29,"animationDuration":29,"animationIterationCount":29,"animationName":29,"animationPlayState":29,"animationTimingFunction":29,"appearance":36,"userSelect":36,"fontKerning":19,"textEmphasisPosition":36,"textEmphasis":36,"textEmphasisStyle":36,"textEmphasisColor":36,"boxDecorationBreak":36,"clipPath":36,"maskImage":36,"maskMode":36,"maskRepeat":36,"maskPosition":36,"maskClip":36,"maskOrigin":36,"maskSize":36,"maskComposite":36,"mask":36,"maskBorderSource":36,"maskBorderMode":36,"maskBorderSlice":36,"maskBorderWidth":36,"maskBorderOutset":36,"maskBorderRepeat":36,"maskBorder":36,"maskType":36,"filter":36,"fontFeatureSettings":36,"breakAfter":36,"breakBefore":36,"breakInside":36,"columnCount":36,"columnFill":36,"columnGap":36,"columnRule":36,"columnRuleColor":36,"columnRuleStyle":36,"columnRuleWidth":36,"columns":36,"columnSpan":36,"columnWidth":36},"ie":{"gridArea":11,"gridGap":11,"gridColumnStart":11,"userSelect":11,"grid":11,"breakInside":11,"hyphens":11,"gridTemplateAreas":11,"breakAfter":11,"scrollSnapCoordinate":11,"gridRowStart":11,"gridAutoFlow":11,"scrollSnapDestination":11,"gridTemplate":11,"gridTemplateColumns":11,"transformOrigin":9,"gridAutoRows":11,"gridColumnEnd":11,"transformOriginY":9,"scrollSnapPointsY":11,"breakBefore":11,"gridRowGap":11,"scrollSnapPointsX":11,"regionFragment":11,"flexWrap":10,"wrapFlow":11,"gridRowEnd":11,"flex":10,"flexDirection":10,"flowInto":11,"touchAction":10,"gridColumn":11,"transform":9,"gridTemplateRows":11,"flexFlow":10,"transformOriginX":9,"flowFrom":11,"scrollSnapType":11,"wrapMargin":11,"gridColumnGap":11,"gridRow":11,"wrapThrough":11,"gridAutoColumns":11,"textSizeAdjust":11},"edge":{"userSelect":14,"wrapFlow":14,"wrapThrough":14,"wrapMargin":14,"scrollSnapType":14,"scrollSnapPointsX":14,"scrollSnapPointsY":14,"scrollSnapDestination":14,"scrollSnapCoordinate":14,"hyphens":14,"flowInto":14,"flowFrom":14,"breakBefore":14,"breakAfter":14,"breakInside":14,"regionFragment":14,"gridTemplateColumns":14,"gridTemplateRows":14,"gridTemplateAreas":14,"gridTemplate":14,"gridAutoColumns":14,"gridAutoRows":14,"gridAutoFlow":14,"grid":14,"gridRowStart":14,"gridColumnStart":14,"gridRowEnd":14,"gridRow":14,"gridColumn":14,"gridColumnEnd":14,"gridColumnGap":14,"gridRowGap":14,"gridArea":14,"gridGap":14},"ios_saf":{"flex":8.1,"flexBasis":8.1,"flexDirection":8.1,"flexGrow":8.1,"flexFlow":8.1,"flexShrink":8.1,"flexWrap":8.1,"alignContent":8.1,"alignItems":8.1,"alignSelf":8.1,"justifyContent":8.1,"order":8.1,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"transform":8.1,"transformOrigin":8.1,"transformOriginX":8.1,"transformOriginY":8.1,"backfaceVisibility":8.1,"perspective":8.1,"perspectiveOrigin":8.1,"transformStyle":8.1,"transformOriginZ":8.1,"animation":8.1,"animationDelay":8.1,"animationDirection":8.1,"animationFillMode":8.1,"animationDuration":8.1,"animationIterationCount":8.1,"animationName":8.1,"animationPlayState":8.1,"animationTimingFunction":8.1,"appearance":9.3,"userSelect":9.3,"backdropFilter":9.3,"fontKerning":9.3,"scrollSnapType":9.3,"scrollSnapPointsX":9.3,"scrollSnapPointsY":9.3,"scrollSnapDestination":9.3,"scrollSnapCoordinate":9.3,"boxDecorationBreak":9.3,"clipPath":9.3,"maskImage":9.3,"maskMode":9.3,"maskRepeat":9.3,"maskPosition":9.3,"maskClip":9.3,"maskOrigin":9.3,"maskSize":9.3,"maskComposite":9.3,"mask":9.3,"maskBorderSource":9.3,"maskBorderMode":9.3,"maskBorderSlice":9.3,"maskBorderWidth":9.3,"maskBorderOutset":9.3,"maskBorderRepeat":9.3,"maskBorder":9.3,"maskType":9.3,"textSizeAdjust":9.3,"textDecorationStyle":9.3,"textDecorationSkip":9.3,"textDecorationLine":9.3,"textDecorationColor":9.3,"shapeImageThreshold":9.3,"shapeImageMargin":9.3,"shapeImageOutside":9.3,"filter":9,"hyphens":9.3,"flowInto":9.3,"flowFrom":9.3,"breakBefore":8.1,"breakAfter":8.1,"breakInside":8.1,"regionFragment":9.3,"columnCount":8.1,"columnFill":8.1,"columnGap":8.1,"columnRule":8.1,"columnRuleColor":8.1,"columnRuleStyle":8.1,"columnRuleWidth":8.1,"columns":8.1,"columnSpan":8.1,"columnWidth":8.1},"android":{"borderImage":4.2,"borderImageOutset":4.2,"borderImageRepeat":4.2,"borderImageSlice":4.2,"borderImageSource":4.2,"borderImageWidth":4.2,"flex":4.2,"flexBasis":4.2,"flexDirection":4.2,"flexGrow":4.2,"flexFlow":4.2,"flexShrink":4.2,"flexWrap":4.2,"alignContent":4.2,"alignItems":4.2,"alignSelf":4.2,"justifyContent":4.2,"order":4.2,"transition":4.2,"transitionDelay":4.2,"transitionDuration":4.2,"transitionProperty":4.2,"transitionTimingFunction":4.2,"transform":4.4,"transformOrigin":4.4,"transformOriginX":4.4,"transformOriginY":4.4,"backfaceVisibility":4.4,"perspective":4.4,"perspectiveOrigin":4.4,"transformStyle":4.4,"transformOriginZ":4.4,"animation":4.4,"animationDelay":4.4,"animationDirection":4.4,"animationFillMode":4.4,"animationDuration":4.4,"animationIterationCount":4.4,"animationName":4.4,"animationPlayState":4.4,"animationTimingFunction":4.4,"appearance":46,"userSelect":46,"fontKerning":4.4,"textEmphasisPosition":46,"textEmphasis":46,"textEmphasisStyle":46,"textEmphasisColor":46,"boxDecorationBreak":46,"clipPath":46,"maskImage":46,"maskMode":46,"maskRepeat":46,"maskPosition":46,"maskClip":46,"maskOrigin":46,"maskSize":46,"maskComposite":46,"mask":46,"maskBorderSource":46,"maskBorderMode":46,"maskBorderSlice":46,"maskBorderWidth":46,"maskBorderOutset":46,"maskBorderRepeat":46,"maskBorder":46,"maskType":46,"filter":46,"fontFeatureSettings":46,"breakAfter":46,"breakBefore":46,"breakInside":46,"columnCount":46,"columnFill":46,"columnGap":46,"columnRule":46,"columnRuleColor":46,"columnRuleStyle":46,"columnRuleWidth":46,"columns":46,"columnSpan":46,"columnWidth":46},"and_chr":{"appearance":47,"userSelect":47,"textEmphasisPosition":47,"textEmphasis":47,"textEmphasisStyle":47,"textEmphasisColor":47,"boxDecorationBreak":47,"clipPath":47,"maskImage":47,"maskMode":47,"maskRepeat":47,"maskPosition":47,"maskClip":47,"maskOrigin":47,"maskSize":47,"maskComposite":47,"mask":47,"maskBorderSource":47,"maskBorderMode":47,"maskBorderSlice":47,"maskBorderWidth":47,"maskBorderOutset":47,"maskBorderRepeat":47,"maskBorder":47,"maskType":47,"textDecorationStyle":47,"textDecorationSkip":47,"textDecorationLine":47,"textDecorationColor":47,"filter":47,"fontFeatureSettings":47,"breakAfter":47,"breakBefore":47,"breakInside":47,"columnCount":47,"columnFill":47,"columnGap":47,"columnRule":47,"columnRuleColor":47,"columnRuleStyle":47,"columnRuleWidth":47,"columns":47,"columnSpan":47,"columnWidth":47},"and_uc":{"flex":9.9,"flexBasis":9.9,"flexDirection":9.9,"flexGrow":9.9,"flexFlow":9.9,"flexShrink":9.9,"flexWrap":9.9,"alignContent":9.9,"alignItems":9.9,"alignSelf":9.9,"justifyContent":9.9,"order":9.9,"transition":9.9,"transitionDelay":9.9,"transitionDuration":9.9,"transitionProperty":9.9,"transitionTimingFunction":9.9,"transform":9.9,"transformOrigin":9.9,"transformOriginX":9.9,"transformOriginY":9.9,"backfaceVisibility":9.9,"perspective":9.9,"perspectiveOrigin":9.9,"transformStyle":9.9,"transformOriginZ":9.9,"animation":9.9,"animationDelay":9.9,"animationDirection":9.9,"animationFillMode":9.9,"animationDuration":9.9,"animationIterationCount":9.9,"animationName":9.9,"animationPlayState":9.9,"animationTimingFunction":9.9,"appearance":9.9,"userSelect":9.9,"fontKerning":9.9,"textEmphasisPosition":9.9,"textEmphasis":9.9,"textEmphasisStyle":9.9,"textEmphasisColor":9.9,"maskImage":9.9,"maskMode":9.9,"maskRepeat":9.9,"maskPosition":9.9,"maskClip":9.9,"maskOrigin":9.9,"maskSize":9.9,"maskComposite":9.9,"mask":9.9,"maskBorderSource":9.9,"maskBorderMode":9.9,"maskBorderSlice":9.9,"maskBorderWidth":9.9,"maskBorderOutset":9.9,"maskBorderRepeat":9.9,"maskBorder":9.9,"maskType":9.9,"textSizeAdjust":9.9,"filter":9.9,"hyphens":9.9,"flowInto":9.9,"flowFrom":9.9,"breakBefore":9.9,"breakAfter":9.9,"breakInside":9.9,"regionFragment":9.9,"fontFeatureSettings":9.9,"columnCount":9.9,"columnFill":9.9,"columnGap":9.9,"columnRule":9.9,"columnRuleColor":9.9,"columnRuleStyle":9.9,"columnRuleWidth":9.9,"columns":9.9,"columnSpan":9.9,"columnWidth":9.9},"op_mini":{"borderImage":5,"borderImageOutset":5,"borderImageRepeat":5,"borderImageSlice":5,"borderImageSource":5,"borderImageWidth":5,"tabSize":5,"objectFit":5,"objectPosition":5}}; module.exports = caniuseData

/***/ },
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _utilsCamelToDashCase = __webpack_require__(40);
	
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
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _bowser = __webpack_require__(26);
	
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(45);
	
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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseSlice = __webpack_require__(46);
	
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
/* 48 */
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = appendImportantToEachValue;
	
	var _appendPxIfNeeded = __webpack_require__(9);
	
	var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);
	
	var _mapObject = __webpack_require__(16);
	
	var _mapObject2 = _interopRequireDefault(_mapObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function appendImportantToEachValue(style) {
	  return (0, _mapObject2.default)(style, function (result, key) {
	    return (0, _appendPxIfNeeded2.default)(key, style[key]) + ' !important';
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 50 */
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _enhancer = __webpack_require__(10);
	
	var _enhancer2 = _interopRequireDefault(_enhancer);
	
	var _styleKeeper = __webpack_require__(6);
	
	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);
	
	var _styleSheet = __webpack_require__(52);
	
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
/* 52 */
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
/* 53 */
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
/* 54 */
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyframesPlugin;
	
	var _index = __webpack_require__(0);
	
	var _keyframes = __webpack_require__(15);
	
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
/* 56 */
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
/* 57 */
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
/* 58 */
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(0);
	
	var _mouseUpListener = __webpack_require__(57);
	
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = resolveMediaQueries;
	
	var _config = __webpack_require__(3);
	
	var _index = __webpack_require__(0);
	
	var _appendImportantToEachValue = __webpack_require__(49);
	
	var _appendImportantToEachValue2 = _interopRequireDefault(_appendImportantToEachValue);
	
	var _hash = __webpack_require__(13);
	
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0YjdhY2ZhOWQ2NWJmOTU4M2M1YyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvcGx1Z2lucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi4vYnVpbGRlci1yYWRpdW0tY29tcG9uZW50L34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWRpdW0vbGliL2Nzcy1ydWxlLXNldC10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWRpdW0vbGliL3ByZWZpeGVyLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9zdHlsZS1rZWVwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXRpbC9wYXJzZS1mcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvY2FwaXRhbGl6ZVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvYXBwZW5kLXB4LWlmLW5lZWRlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvZW5oYW5jZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWRpdW0vbGliL2dldC1zdGF0ZS1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWRpdW0vbGliL2dldC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvaGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWRpdW0vbGliL2tleWZyYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvbWFwLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JhZGl1bS9saWIvbWVyZ2Utc3R5bGVzLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9yZXNvbHZlLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXRpbC9yZXNvbHZlLWNlbGwtZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXRpbC9yZXNvbHZlLWNlbGwtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWwvcmVzb2x2ZS1jZWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlsL3Jlc29sdmUtY29sdW1uLWNvdW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9ib3dzZXIvYm93c2VyLmpzIiwid2VicGFjazovLy8uL34vZXhlbnYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL1BsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL1ByZWZpeGVyLmpzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9jYW5pdXNlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9jYWxjLmpzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9mbGV4LmpzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2ZsZXhib3hJRS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9mbGV4Ym94T2xkLmpzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2dyYWRpZW50LmpzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL3NpemluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy90cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2NhbWVsVG9EYXNoQ2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvZ2V0QnJvd3NlckluZm9ybWF0aW9uLmpzIiwid2VicGFjazovLy8uL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9nZXRQcmVmaXhlZEtleWZyYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvd2Fybi5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLXBsYWluLW9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLXBsYWluLW9iamVjdC9+L2lzb2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLl9iYXNlc2xpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2guaW5pdGlhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC5sYXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9hcHBlbmQtaW1wb3J0YW50LXRvLWVhY2gtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWRpdW0vbGliL2NhbWVsLWNhc2UtcHJvcHMtdG8tZGFzaC1jYXNlLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9jb21wb25lbnRzL3N0eWxlLXJvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWRpdW0vbGliL2NvbXBvbmVudHMvc3R5bGUtc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWRpdW0vbGliL2NvbXBvbmVudHMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWRpdW0vbGliL3BsdWdpbnMvY2hlY2stcHJvcHMtcGx1Z2luLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9wbHVnaW5zL2tleWZyYW1lcy1wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWRpdW0vbGliL3BsdWdpbnMvbWVyZ2Utc3R5bGUtYXJyYXktcGx1Z2luLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9wbHVnaW5zL21vdXNlLXVwLWxpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9wbHVnaW5zL3ByZWZpeC1wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWRpdW0vbGliL3BsdWdpbnMvcmVzb2x2ZS1pbnRlcmFjdGlvbi1zdHlsZXMtcGx1Z2luLmpzIiwid2VicGFjazovLy8uL34vcmFkaXVtL2xpYi9wbHVnaW5zL3Jlc29sdmUtbWVkaWEtcXVlcmllcy1wbHVnaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrREFBMEMsV0FBVzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4Q0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDNUNBLGdEOzs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDMUZ0Qzs7QUFFQSx1Qzs7Ozs7O0FDRkE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLGtEQUFpRDtBQUNqRCxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsdUJBQXNCLHdCQUF3QjtBQUM5QztBQUNBLHFDOzs7Ozs7QUMzQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rix3QkFBdUIsbUdBQW1HLEVBQUU7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQjtBQUMzQixNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRyxJQUFJO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUF5RCw2QkFBNkI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3JFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUM7Ozs7Ozs7O0FDbEVBLEtBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLENBQUMsTUFBRCxFQUFZO3VCQUNqQixPQUFPLEtBQVAsQ0FBYSxHQUFiLEVBRGlCOzs7O09BQ3pCLHNCQUR5QjtPQUN0QixzQkFEc0I7O0FBRWhDLE9BQU0sWUFBWSxTQUFTLENBQVQsRUFBWSxFQUFaLENBQVosQ0FGMEI7QUFHaEMsT0FBTSxjQUFjLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBZCxDQUgwQjs7QUFLaEMsT0FBSSxjQUFjLENBQWQsSUFBbUIsQ0FBQyxXQUFELEVBQWM7QUFDbkMsWUFBTyxTQUFQLENBRG1DO0lBQXJDOztBQUlBLE9BQUksRUFBRSxhQUFhLFdBQWIsQ0FBRixFQUE2QjtBQUMvQixXQUFNLElBQUksS0FBSixDQUFVLHNEQUFWLENBQU4sQ0FEK0I7SUFBakM7O0FBSUEsT0FBSSxnQkFBZ0IsQ0FBaEIsRUFBbUI7QUFDckIsV0FBTSxJQUFJLEtBQUosQ0FBVSw0Q0FBVixDQUFOLENBRHFCO0lBQXZCOztBQUlBLFVBQU8sWUFBWSxXQUFaLENBakJ5QjtFQUFaOztBQW9CdEIsbURBQWUsYTs7Ozs7O0FDcEJmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUNYQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7QUMvQ0E7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZSx3QkFBdUIsbUdBQW1HOztBQUUxSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQSx3RUFBdUU7O0FBRXZFO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQWtDOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTBDO0FBQzFDO0FBQ0EsTUFBSztBQUNMOztBQUVBOztBQUVBLDRDQUEyQztBQUMzQztBQUNBO0FBQ0EsSUFBRzs7QUFFSCxpREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLHFDOzs7Ozs7O0FDakxBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDOzs7Ozs7QUNYQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUM7Ozs7OztBQ25CQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDOzs7Ozs7QUN6QkE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQzs7Ozs7O0FDOUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0Esb0VBQW1FLGtCQUFrQjtBQUNyRixlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7OztBQ2pDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHLElBQUk7QUFDUDtBQUNBLHFDOzs7Ozs7QUNaQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHdCQUF1QixtR0FBbUc7O0FBRTFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0EsRTs7Ozs7O0FDN0NBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rix3QkFBdUIsbUdBQW1HOztBQUUxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdCQUFlLCtCQUErQjtBQUM5Qyw2Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsOEJBQTZCLGlHQUFpRztBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUEsOEVBQTZFOztBQUU3RTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0EsMkJBQTBCLGFBQWEsa0JBQWtCO0FBQ3pEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCLGFBQWEsZ0NBQWdDO0FBQ3ZFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkZBQTBGO0FBQzFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUM7Ozs7Ozs7Ozs7Ozs7QUMvVUE7QUFDQTs7QUFFQSxLQUFNLE9BQU8sU0FBUCxJQUFPLENBQUMsS0FBRCxFQUFXO0FBQ3RCLFVBQ0U7O09BQUssT0FBTyxNQUFNLEtBQU4sRUFBWjtLQUNHLE1BQU0sUUFBTjtJQUZMLENBRHNCO0VBQVg7O0FBUWIsS0FBTSxxQkFBcUIsc0VBQVUsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE9BQW5CLENBQWhCLENBQXJCO0FBQ04sS0FBTSxtQkFBbUIsc0VBQVUsS0FBVixDQUFnQixDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCLFFBQWxCLENBQWhCLENBQW5CO0FBQ04sTUFBSyxTQUFMLEdBQWlCO0FBQ2YsVUFBTyxzRUFBVSxNQUFWO0FBQ1Asb0JBQWlCLGtCQUFqQjtBQUNBLGtCQUFlLGdCQUFmOztBQUVBLGVBQVksc0VBQVUsTUFBVjtBQUNaLHlCQUFzQixrQkFBdEI7QUFDQSx1QkFBb0IsZ0JBQXBCOztBQUVBLGdCQUFhLHNFQUFVLE1BQVY7QUFDYiwwQkFBdUIsa0JBQXZCO0FBQ0Esd0JBQXFCLGdCQUFyQjs7QUFFQSxlQUFZLHNFQUFVLE1BQVY7QUFDWix5QkFBc0Isa0JBQXRCO0FBQ0EsdUJBQW9CLGdCQUFwQjs7QUFFQSxnQkFBYSxzRUFBVSxNQUFWO0FBQ2IsMEJBQXVCLGtCQUF2QjtBQUNBLHdCQUFxQixnQkFBckI7O0FBRUEsVUFBTyxzRUFBVSxNQUFWOztBQUVQLGFBQVUsc0VBQVUsSUFBVjtBQUNWLFVBQU8sc0VBQVUsTUFBVjtFQXhCVDs7QUEyQkEsbURBQWUsb0VBQU8sSUFBUCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeENmO0FBQ0E7QUFDQTs7QUFFQSxLQUFNLE9BQU8sU0FBUCxJQUFPLENBQUMsS0FBRCxFQUFXO0FBQ3RCLE9BQU0sc0JBQ0QsTUFBTSxLQUFOO0FBQ0gsY0FBUyxNQUFUO0FBQ0Esb0JBQWUsS0FBZjtBQUNBLGVBQVUsTUFBVjtBQUNBLHFCQUFnQixlQUFoQjtBQUNBLFlBQU8sTUFBUDtLQU5JLENBRGdCOztBQVV0QixVQUNFOztPQUFLLE9BQU8sTUFBUCxFQUFMO0tBQ0csa0ZBQWEsS0FBYixDQURIO0lBREYsQ0FWc0I7RUFBWDs7QUFpQmIsTUFBSyxTQUFMLEdBQWlCO0FBQ2YsY0FBVyxzRUFBVSxNQUFWO0FBQ1gsY0FBVyxzRUFBVSxNQUFWO0FBQ1gsc0JBQW1CLHNFQUFVLE1BQVY7O0FBRW5CLG1CQUFnQixzRUFBVSxNQUFWO0FBQ2hCLG1CQUFnQixzRUFBVSxNQUFWO0FBQ2hCLDJCQUF3QixzRUFBVSxNQUFWOztBQUV4QixvQkFBaUIsc0VBQVUsTUFBVjtBQUNqQixvQkFBaUIsc0VBQVUsTUFBVjtBQUNqQiw0QkFBeUIsc0VBQVUsTUFBVjs7QUFFekIsbUJBQWdCLHNFQUFVLE1BQVY7QUFDaEIsbUJBQWdCLHNFQUFVLE1BQVY7QUFDaEIsMkJBQXdCLHNFQUFVLE1BQVY7O0FBRXhCLG9CQUFpQixzRUFBVSxNQUFWO0FBQ2pCLG9CQUFpQixzRUFBVSxNQUFWO0FBQ2pCLDRCQUF5QixzRUFBVSxNQUFWOztBQUV6QixnQkFBYSxzRUFBVSxLQUFWLENBQWdCO0FBQzNCLFlBQU8sc0VBQVUsTUFBVjtBQUNQLGFBQVEsc0VBQVUsTUFBVjtBQUNSLFlBQU8sc0VBQVUsTUFBVjtBQUNQLGFBQVEsc0VBQVUsTUFBVjtJQUpHLENBQWI7O0FBT0EsV0FBUSxzRUFBVSxNQUFWOztBQUVSLFVBQU8sc0VBQVUsTUFBVjtBQUNQLGFBQVUsc0VBQVUsSUFBVjtFQS9CWjs7QUFrQ0EsTUFBSyxZQUFMLEdBQW9CO0FBQ2xCLGNBQVcsS0FBWDtBQUNBLGNBQVcsTUFBWDtBQUNBLHNCQUFtQixLQUFuQjs7QUFFQSxnQkFBYTtBQUNYLFlBQU8sMkNBQVA7QUFDQSxhQUFRLG1FQUFSO0FBQ0EsWUFBTyxvRUFBUDtBQUNBLGFBQVEsNENBQVI7SUFKRjs7QUFPQSxXQUFRLE1BQVI7RUFaRjs7QUFlQSxtREFBZSxvRUFBTyxJQUFQLEM7Ozs7Ozs7Ozs7QUN2RWYsS0FBTSxRQUFRLFNBQVIsS0FBUSxDQUFDLE1BQUQsRUFBWTtBQUN4QixVQUFPLE9BQU8sSUFBUCxDQUFZLE1BQVosRUFBb0IsTUFBcEIsQ0FBMkIsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQzlDLFlBQU8sT0FBTyxHQUFQLE1BQWdCLFNBQWhCLEdBQTRCLEdBQTVCLGdCQUFzQyx5QkFBTSxLQUFNLE9BQU8sR0FBUCxHQUFsRCxDQUR1QztJQUFkLEVBRS9CLEVBRkksQ0FBUCxDQUR3QjtFQUFaOztBQU1kLEtBQU0sc0JBQXNCLFNBQXRCLG1CQUFzQixDQUFDLEtBQUQsRUFBVztBQUNyQyxPQUFNLGNBQWM7QUFDbEIsWUFBTyxNQUFNLFNBQU47QUFDUCxzQkFBaUIsTUFBTSxTQUFOO0FBQ2pCLG9CQUFlLE1BQU0saUJBQU47QUFDZixhQUFRLE1BQU0sTUFBTjtJQUpKLENBRCtCOztBQVFyQyxPQUFNLGNBQWM7QUFDbEIsWUFBTyxNQUFNLEtBQU47QUFDUCxzQkFBaUIsTUFBTSxLQUFOO0FBQ2pCLG9CQUFlLE1BQU0sYUFBTjtBQUNmLFlBQU8sTUFBTSxLQUFOO0lBSkgsQ0FSK0I7O0FBZXJDLE9BQU0sY0FBYyxDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE9BQXBCLEVBQTZCLFFBQTdCLEVBQXVDLEdBQXZDLENBQTJDLFVBQUMsSUFBRCxFQUFVO0FBQ3ZFLFlBQU87QUFDTCxtQkFBWSxNQUFNLFdBQU4sQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLDhCQUF1QjtBQUNyQixnQkFBTyxNQUFTLGtCQUFULENBQVA7QUFDQSwwQkFBaUIsTUFBUyxrQkFBVCxDQUFqQjtBQUNBLHdCQUFlLE1BQVMsMEJBQVQsQ0FBZjtRQUhGO0FBS0EsOEJBQXVCO0FBQ3JCLGdCQUFPLE1BQVMsY0FBVCxDQUFQO0FBQ0EsMEJBQWlCLE1BQVMsY0FBVCxDQUFqQjtBQUNBLHdCQUFlLE1BQVMsc0JBQVQsQ0FBZjtRQUhGO01BUEYsQ0FEdUU7SUFBVixDQUF6RCxDQWYrQjs7QUErQnJDLFVBQU8sWUFBWSxNQUFaLENBQW1CLFVBQUMsR0FBRCxFQUFNLFVBQU4sRUFBcUI7O1NBRzNDLGFBR0UsV0FIRixXQUgyQztTQUkzQyx3QkFFRSxXQUZGLHNCQUoyQztTQUszQyx3QkFDRSxXQURGOzs7Ozs7OztBQUwyQztBQWM3QyxTQUFNLDBCQUNELE1BQU0sV0FBTixHQUNBLE1BQU0scUJBQU4sR0FDQSxNQUFNLFdBQU4sR0FDQSxNQUFNLHFCQUFOLEVBSkMsQ0FkdUM7O0FBcUI3Qyx5QkFBVyx5QkFBTSxZQUFhLFlBQTlCLENBckI2QztJQUFyQixFQXNCdkIsRUF0QkksQ0FBUCxDQS9CcUM7RUFBWDs7QUF3RDVCLG1EQUFlLG1COzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEZjtBQUNBOztBQUVBLEtBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQyxLQUFELEVBQVc7O0FBRTNCLE9BQU0sVUFBVSxNQUFNLEtBQU4sQ0FBWSx1QkFBWixDQUFWLENBRnFCOztpQ0FHRixZQUhFOztPQUdsQixxQkFIa0I7T0FHVixtQkFIVTs7QUFJM0IsVUFBTyxFQUFFLGNBQUYsRUFBVSxVQUFWLEVBQVAsQ0FKMkI7RUFBWDs7QUFPbEIsS0FBTSxvQkFBb0IsU0FBcEIsaUJBQW9CLE9BQTZCO09BQTFCLHFCQUEwQjtPQUFsQiwrQkFBa0I7O29CQUM1QixVQUFVLE1BQVYsRUFENEI7O09BQzdDLDJCQUQ2QztPQUNyQyx1QkFEcUM7O0FBRXJELGdCQUFXLFNBQVUsU0FBUyxXQUFULElBQXlCLElBQTlDLENBRnFEO0VBQTdCOztBQUsxQixLQUFNLHVCQUF1QixTQUF2QixvQkFBdUIsUUFBb0M7T0FBakMsb0JBQWlDO09BQTFCLHNCQUEwQjtPQUFsQixnQ0FBa0I7O0FBQy9ELE9BQU0sYUFBYSxHQUFiOzs7QUFEeUQsT0FJM0QsVUFBVSxDQUFWLEVBQWE7QUFDZixZQUFPLE1BQVAsQ0FEZTtJQUFqQjs7QUFJQSxPQUFNLGNBQWMsa0JBQWtCLEVBQUUsY0FBRixFQUFVLHdCQUFWLEVBQWxCLENBQWQsQ0FSeUQ7O0FBVS9ELG9CQUFlLFFBQVEsVUFBUixZQUF5QixpQkFBeEMsQ0FWK0Q7RUFBcEM7Ozs7QUFlN0IsS0FBTSxvQkFBb0IsU0FBcEIsaUJBQW9CLENBQUMsTUFBRCxFQUFZO0FBQ3BDLE9BQUksVUFBVSxNQUFNLE9BQU4sQ0FBYyxNQUFkLENBQVYsRUFBaUM7QUFDbkMsWUFBTywwRkFBWSxNQUFaLENBQVAsQ0FEbUM7SUFBckM7QUFHQSxVQUFPLFNBQVMsTUFBVCxHQUFrQixFQUFsQixDQUo2QjtFQUFaOztBQU8xQixLQUFNLG9CQUFvQixTQUFwQixpQkFBb0IsQ0FBQyxLQUFELEVBQVc7O0FBRW5DLE9BQU0sZUFBZTtBQUNuQixXQUFNLFlBQU47QUFDQSxhQUFRLFFBQVI7QUFDQSxZQUFPLFVBQVA7QUFDQSxVQUFLLFlBQUw7QUFDQSxhQUFRLFFBQVI7QUFDQSxhQUFRLFVBQVI7SUFOSSxDQUY2Qjs7QUFXbkMsT0FBTSxlQUFlLE9BQU8sSUFBUCxDQUFZLEtBQVosRUFDbEIsTUFEa0IsQ0FDWCxVQUFDLEdBQUQ7WUFBUyxJQUFJLE9BQUosQ0FBWSxRQUFaLE1BQTBCLENBQUMsQ0FBRDtJQUFuQyxDQURKLENBWDZCOztBQWNuQyxVQUFPLGFBQWEsTUFBYixDQUFvQixVQUFDLEdBQUQsRUFBTSxVQUFOLEVBQXFCO0FBQzlDLFNBQU0sbUJBQW1CLE1BQU0sVUFBTixDQUFuQixDQUR3Qzs7QUFHOUMseUJBQ0sseUJBQ0YsWUFBYTtBQUNaLGdCQUFTLE1BQVQ7QUFDQSxrQkFBVyxxQkFBcUI7QUFDOUIsZ0JBQU8sOEVBQWMsaUJBQWlCLEtBQWpCLENBQXJCO0FBQ0EsaUJBQVEsaUJBQWlCLE1BQWpCO0FBQ1Isc0JBQWEsaUJBQWlCLFdBQWpCO1FBSEosQ0FBWDtBQUtBLG1CQUFZLGFBQWEsaUJBQWlCLGFBQWpCLENBQXpCO0FBQ0EsdUJBQWdCLGFBQWEsaUJBQWlCLGVBQWpCLENBQTdCO0FBQ0EsY0FBTyxpQkFBaUIsS0FBakIsR0FBeUIsaUJBQWlCLEtBQWpCLEdBQXlCLFNBQWxEO1FBWFgsQ0FIOEM7SUFBckIsRUFpQnhCLGtCQUFrQixNQUFNLEtBQU4sQ0FqQmQsQ0FBUCxDQWRtQztFQUFYOztBQWtDMUIsbURBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RWY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBTSxlQUFlLFNBQWYsWUFBZSxDQUFDLEtBQUQsRUFBVzs7T0FFdkIsV0FBbUMsTUFBbkMsU0FGdUI7T0FFYixRQUF5QixNQUF6QixNQUZhOztPQUVILHNDQUFlO0FBRlo7QUFHOUIsT0FBTSx1QkFBdUIscUVBQVMsR0FBVCxDQUMzQixNQUFNLFFBQU4sRUFBZ0IsVUFBQyxLQUFELEVBQVc7QUFDekIsWUFBTyxtRUFBTSxZQUFOLENBQW1CLEtBQW5CLEVBQTBCLGtHQUMzQixZQUFlLE1BQU0sS0FBTixDQURZLENBQTFCLENBQVAsQ0FEeUI7SUFBWCxDQURaOzs7QUFId0IsT0FZeEIsMkJBQTJCLHFGQUFvQjtBQUNuRCxlQUFVLG9CQUFWO0FBQ0Esa0JBQWEsTUFBTSxXQUFOO0lBRmtCLENBQTNCOzs7QUFad0IsVUFrQnZCLHFFQUFTLEdBQVQsQ0FBYSx3QkFBYixFQUF1QyxVQUFDLEtBQUQsRUFBVztBQUN2RCxZQUFPLG1FQUFNLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEI7QUFDL0IsY0FBTyxtRkFBa0IsTUFBTSxLQUFOLENBQXpCO01BREssQ0FBUCxDQUR1RDtJQUFYLENBQTlDLENBbEI4QjtFQUFYOztBQXlCckIsbURBQWUsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QmY7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQU0sc0JBQXNCLFNBQXRCLG1CQUFzQixPQUErQjtPQUE1Qix5QkFBNEI7T0FBbEIsK0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7QUFjekQsT0FBTSxlQUFlLE9BQU8sSUFBUCxDQUFZLFdBQVosRUFDbEIsTUFEa0IsQ0FDWCxVQUFDLEdBQUQsRUFBTSxVQUFOLEVBQXFCO0FBQzNCLFNBQU0sYUFBYSxZQUFZLFVBQVosQ0FBYixDQURxQjtBQUUzQix5QkFDSyx5QkFDRixZQUFhLFNBQVMsTUFBVCxDQUFnQixVQUFDLEdBQUQsRUFBTSxJQUFOLEVBQWU7QUFDM0MsV0FBTSxpQkFBaUIsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFqQjs7OztBQURxQyxXQUt2QyxDQUFDLElBQUksTUFBSixFQUFZO0FBQ2YsZ0JBQU8sQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFQLENBRGU7UUFBakI7O0FBSUEsV0FBTSxPQUFPLDRFQUFRLEdBQVIsQ0FBUCxDQVRxQztBQVUzQyxXQUFNLE1BQU0seUVBQUssR0FBTCxDQUFOOzs7Ozs7QUFWcUMsV0FnQnJDLE1BQU0sSUFDVCxHQURTLENBQ0wsVUFBQyxNQUFEO2dCQUFZLDhFQUFjLE9BQU8sS0FBUDtRQUExQixDQURLLENBRVQsTUFGUyxDQUVGLFVBQUMsUUFBRCxFQUFXLEtBQVg7Z0JBQXFCLFdBQVcsS0FBWDtRQUFyQixDQUZKLENBaEJxQztBQW1CM0MsV0FBSSxPQUFPLENBQVAsRUFBVTtBQUNaLDZDQUFXLE9BQUssQ0FBQyxjQUFELEdBQWhCLENBRFk7UUFBZDs7QUFJQSwyQ0FBVyxxQ0FBVSxPQUFLLGtCQUExQixDQXZCMkM7TUFBZixFQXdCM0IsRUF4QlcsRUF5QmIsR0F6QmEsQ0F5QlQsVUFBQyxHQUFEO2NBQVMsSUFBSSxHQUFKLENBQVE7Z0JBQU0sSUFBSSxNQUFKO1FBQU47TUFBakIsQ0F6QlMsQ0EwQmIsTUExQmEsQ0EwQk4sVUFBQyxHQUFELEVBQU0sR0FBTjtjQUFjLElBQUksTUFBSixDQUFXLEdBQVg7TUFBZCxHQTVCVixDQUYyQjtJQUFyQixFQWdDTCxFQWpDZ0IsQ0FBZjs7O0FBZG1ELFVBa0RsRCxxRUFBUyxHQUFULENBQWEsUUFBYixFQUF1QixVQUFDLElBQUQsRUFBTyxLQUFQLEVBQWlCO0FBQzdDLFNBQU0sd0JBQXdCLE9BQU8sSUFBUCxDQUFZLFlBQVosRUFDM0IsTUFEMkIsQ0FDcEIsVUFBQyxHQUFELEVBQU0sVUFBTixFQUFxQjtBQUMzQixXQUFNLGNBQWMsYUFBYSxVQUFiLEVBQXlCLEtBQXpCLENBQWQsQ0FEcUI7QUFFM0IsV0FBTSxZQUFZLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBWixDQUZxQjtBQUczQiwyQkFDSyx5QkFDRix5QkFBaUIsYUFBVyw2QkFGL0IsQ0FIMkI7TUFBckIsRUFPTCxFQVJ5QixDQUF4QixDQUR1QztBQVU3QyxZQUFPLG1FQUFNLFlBQU4sQ0FBbUIsSUFBbkIsRUFBeUIscUJBQXpCLENBQVAsQ0FWNkM7SUFBakIsQ0FBOUIsQ0FsRHlEO0VBQS9COztBQWdFNUIsbURBQWUsbUI7Ozs7Ozs7O0FDdkVmO0FBQ0E7O0FBRU8sS0FBTSxPQUFPLDhFQUFQLENBQWI7QUFDTyxLQUFNLE9BQU8sOEVBQVAsQzs7Ozs7O0FDSmI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7Ozs7OztBQ2xTRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0Y7QUFDQTs7QUFFQSxFQUFDOzs7Ozs7O0FDdENEOztBQUVB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QSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxtQkFBa0IsaURBQWlEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUMiLCJmaWxlIjoicmFkaXVtLWdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSYWRpdW1HcmlkXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJhZGl1bUdyaWRcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IHRocm93IGVycjsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI1KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDRiN2FjZmE5ZDY1YmY5NTgzYzVjXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xuXG52YXIgX2NoZWNrUHJvcHNQbHVnaW4gPSByZXF1aXJlKCcuL2NoZWNrLXByb3BzLXBsdWdpbicpO1xuXG52YXIgX2NoZWNrUHJvcHNQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tQcm9wc1BsdWdpbik7XG5cbnZhciBfa2V5ZnJhbWVzUGx1Z2luID0gcmVxdWlyZSgnLi9rZXlmcmFtZXMtcGx1Z2luJyk7XG5cbnZhciBfa2V5ZnJhbWVzUGx1Z2luMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleWZyYW1lc1BsdWdpbik7XG5cbnZhciBfbWVyZ2VTdHlsZUFycmF5UGx1Z2luID0gcmVxdWlyZSgnLi9tZXJnZS1zdHlsZS1hcnJheS1wbHVnaW4nKTtcblxudmFyIF9tZXJnZVN0eWxlQXJyYXlQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2VTdHlsZUFycmF5UGx1Z2luKTtcblxudmFyIF9wcmVmaXhQbHVnaW4gPSByZXF1aXJlKCcuL3ByZWZpeC1wbHVnaW4nKTtcblxudmFyIF9wcmVmaXhQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4UGx1Z2luKTtcblxudmFyIF9yZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXNQbHVnaW4gPSByZXF1aXJlKCcuL3Jlc29sdmUtaW50ZXJhY3Rpb24tc3R5bGVzLXBsdWdpbicpO1xuXG52YXIgX3Jlc29sdmVJbnRlcmFjdGlvblN0eWxlc1BsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXNQbHVnaW4pO1xuXG52YXIgX3Jlc29sdmVNZWRpYVF1ZXJpZXNQbHVnaW4gPSByZXF1aXJlKCcuL3Jlc29sdmUtbWVkaWEtcXVlcmllcy1wbHVnaW4nKTtcblxudmFyIF9yZXNvbHZlTWVkaWFRdWVyaWVzUGx1Z2luMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc29sdmVNZWRpYVF1ZXJpZXNQbHVnaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGNoZWNrUHJvcHM6IF9jaGVja1Byb3BzUGx1Z2luMi5kZWZhdWx0LFxuICBrZXlmcmFtZXM6IF9rZXlmcmFtZXNQbHVnaW4yLmRlZmF1bHQsXG4gIG1lcmdlU3R5bGVBcnJheTogX21lcmdlU3R5bGVBcnJheVBsdWdpbjIuZGVmYXVsdCxcbiAgcHJlZml4OiBfcHJlZml4UGx1Z2luMi5kZWZhdWx0LFxuICByZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXM6IF9yZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXNQbHVnaW4yLmRlZmF1bHQsXG4gIHJlc29sdmVNZWRpYVF1ZXJpZXM6IF9yZXNvbHZlTWVkaWFRdWVyaWVzUGx1Z2luMi5kZWZhdWx0XG59O1xuLyogZXNsaW50LWRpc2FibGUgYmxvY2stc2NvcGVkLWNvbnN0ICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvcGx1Z2lucy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL2J1aWxkZXItcmFkaXVtLWNvbXBvbmVudC9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wbHVnaW5zID0gcmVxdWlyZSgnLi9wbHVnaW5zJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9jb25maWcuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjc3NSdWxlU2V0VG9TdHJpbmc7XG5cbnZhciBfYXBwZW5kUHhJZk5lZWRlZCA9IHJlcXVpcmUoJy4vYXBwZW5kLXB4LWlmLW5lZWRlZCcpO1xuXG52YXIgX2FwcGVuZFB4SWZOZWVkZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXBwZW5kUHhJZk5lZWRlZCk7XG5cbnZhciBfY2FtZWxDYXNlUHJvcHNUb0Rhc2hDYXNlID0gcmVxdWlyZSgnLi9jYW1lbC1jYXNlLXByb3BzLXRvLWRhc2gtY2FzZScpO1xuXG52YXIgX2NhbWVsQ2FzZVByb3BzVG9EYXNoQ2FzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW1lbENhc2VQcm9wc1RvRGFzaENhc2UpO1xuXG52YXIgX21hcE9iamVjdCA9IHJlcXVpcmUoJy4vbWFwLW9iamVjdCcpO1xuXG52YXIgX21hcE9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXBPYmplY3QpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JTdHlsZXMoc3R5bGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlKS5tYXAoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHByb3BlcnR5ICsgJzogJyArIHN0eWxlW3Byb3BlcnR5XSArICc7JztcbiAgfSkuam9pbignXFxuJyk7XG59XG5cbmZ1bmN0aW9uIGNzc1J1bGVTZXRUb1N0cmluZyhzZWxlY3RvciwgcnVsZXMsIHVzZXJBZ2VudCkge1xuICBpZiAoIXJ1bGVzKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIHJ1bGVzV2l0aFB4ID0gKDAsIF9tYXBPYmplY3QyLmRlZmF1bHQpKHJ1bGVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIHJldHVybiAoMCwgX2FwcGVuZFB4SWZOZWVkZWQyLmRlZmF1bHQpKGtleSwgdmFsdWUpO1xuICB9KTtcbiAgdmFyIHByZWZpeGVkUnVsZXMgPSAoMCwgX3ByZWZpeGVyLmdldFByZWZpeGVkU3R5bGUpKHJ1bGVzV2l0aFB4LCB1c2VyQWdlbnQpO1xuICB2YXIgY3NzUHJlZml4ZWRSdWxlcyA9ICgwLCBfY2FtZWxDYXNlUHJvcHNUb0Rhc2hDYXNlMi5kZWZhdWx0KShwcmVmaXhlZFJ1bGVzKTtcbiAgdmFyIHNlcmlhbGl6ZWRSdWxlcyA9IGNyZWF0ZU1hcmt1cEZvclN0eWxlcyhjc3NQcmVmaXhlZFJ1bGVzKTtcblxuICByZXR1cm4gc2VsZWN0b3IgKyAneycgKyBzZXJpYWxpemVkUnVsZXMgKyAnfSc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL2Nzcy1ydWxlLXNldC10by1zdHJpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFByZWZpeGVkS2V5ZnJhbWVzID0gZ2V0UHJlZml4ZWRLZXlmcmFtZXM7XG5leHBvcnRzLmdldFByZWZpeGVkU3R5bGUgPSBnZXRQcmVmaXhlZFN0eWxlO1xuXG52YXIgX2lubGluZVN0eWxlUHJlZml4ZXIgPSByZXF1aXJlKCdpbmxpbmUtc3R5bGUtcHJlZml4ZXInKTtcblxudmFyIF9pbmxpbmVTdHlsZVByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lubGluZVN0eWxlUHJlZml4ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2pzc3R5bGVzL2Nzcy12ZW5kb3IsIGJ1dCB3aXRob3V0IGhhdmluZyB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBjb252ZXJ0IGJldHdlZW4gZGlmZmVyZW50IGNhc2VzIGFsbCB0aGUgdGltZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1WYWx1ZXMoc3R5bGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlKS5yZWR1Y2UoZnVuY3Rpb24gKG5ld1N0eWxlLCBrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5qb2luKCc7JyArIGtleSArICc6Jyk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBuZXdTdHlsZVtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIG5ld1N0eWxlO1xuICB9LCB7fSk7XG59XG5cbnZhciBfaGFzV2FybmVkQWJvdXRVc2VyQWdlbnQgPSBmYWxzZTtcbnZhciBfbGFzdFVzZXJBZ2VudCA9IHVuZGVmaW5lZDtcbnZhciBfY2FjaGVkUHJlZml4ZXIgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGdldFByZWZpeGVyKHVzZXJBZ2VudCkge1xuICB2YXIgYWN0dWFsVXNlckFnZW50ID0gdXNlckFnZW50IHx8IGdsb2JhbCAmJiBnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFhY3R1YWxVc2VyQWdlbnQgJiYgIV9oYXNXYXJuZWRBYm91dFVzZXJBZ2VudCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgY29uc29sZS53YXJuKCdSYWRpdW06IHVzZXJBZ2VudCBzaG91bGQgYmUgc3VwcGxpZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZy4gU2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL0Zvcm1pZGFibGVMYWJzL3JhZGl1bS90cmVlL21hc3Rlci9kb2NzL2FwaSNyYWRpdW0gJyArICdmb3IgbW9yZSBpbmZvcm1hdGlvbi4nKTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgX2hhc1dhcm5lZEFib3V0VXNlckFnZW50ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIV9jYWNoZWRQcmVmaXhlciB8fCBhY3R1YWxVc2VyQWdlbnQgIT09IF9sYXN0VXNlckFnZW50KSB7XG4gICAgX2NhY2hlZFByZWZpeGVyID0gbmV3IF9pbmxpbmVTdHlsZVByZWZpeGVyMi5kZWZhdWx0KHsgdXNlckFnZW50OiBhY3R1YWxVc2VyQWdlbnQgfSk7XG4gICAgX2xhc3RVc2VyQWdlbnQgPSBhY3R1YWxVc2VyQWdlbnQ7XG4gIH1cbiAgcmV0dXJuIF9jYWNoZWRQcmVmaXhlcjtcbn1cblxuZnVuY3Rpb24gZ2V0UHJlZml4ZWRLZXlmcmFtZXModXNlckFnZW50KSB7XG4gIHJldHVybiBnZXRQcmVmaXhlcih1c2VyQWdlbnQpLnByZWZpeGVkS2V5ZnJhbWVzO1xufVxuXG4vLyBSZXR1cm5zIGEgbmV3IHN0eWxlIG9iamVjdCB3aXRoIHZlbmRvciBwcmVmaXhlcyBhZGRlZCB0byBwcm9wZXJ0eSBuYW1lc1xuLy8gYW5kIHZhbHVlcy5cbmZ1bmN0aW9uIGdldFByZWZpeGVkU3R5bGUoc3R5bGUsIHVzZXJBZ2VudCkge1xuICB2YXIgc3R5bGVXaXRoRmFsbGJhY2tzID0gdHJhbnNmb3JtVmFsdWVzKHN0eWxlKTtcbiAgdmFyIHByZWZpeGVyID0gZ2V0UHJlZml4ZXIodXNlckFnZW50KTtcbiAgdmFyIHByZWZpeGVkU3R5bGUgPSBwcmVmaXhlci5wcmVmaXgoc3R5bGVXaXRoRmFsbGJhY2tzKTtcbiAgcmV0dXJuIHByZWZpeGVkU3R5bGU7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9wcmVmaXhlci5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFN0eWxlS2VlcGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGVLZWVwZXIodXNlckFnZW50KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0eWxlS2VlcGVyKTtcblxuICAgIHRoaXMuX3VzZXJBZ2VudCA9IHVzZXJBZ2VudDtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLl9jc3NTZXQgPSB7fTtcbiAgfVxuXG4gIFN0eWxlS2VlcGVyLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLy8gTXVzdCBiZSBmYXQgYXJyb3cgdG8gY2FwdHVyZSBgdGhpc2BcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICB2YXIgbGlzdGVuZXJJbmRleCA9IF90aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgIGlmIChsaXN0ZW5lckluZGV4ID4gLTEpIHtcbiAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgU3R5bGVLZWVwZXIucHJvdG90eXBlLmFkZENTUyA9IGZ1bmN0aW9uIGFkZENTUyhjc3MpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICghdGhpcy5fY3NzU2V0W2Nzc10pIHtcbiAgICAgIHRoaXMuX2Nzc1NldFtjc3NdID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2VtaXRDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLy8gTXVzdCBiZSBmYXQgYXJyb3cgdG8gY2FwdHVyZSBgdGhpc2BcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICBkZWxldGUgX3RoaXMyLl9jc3NTZXRbY3NzXTtcbiAgICAgICAgX3RoaXMyLl9lbWl0Q2hhbmdlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBTdHlsZUtlZXBlci5wcm90b3R5cGUuZ2V0Q1NTID0gZnVuY3Rpb24gZ2V0Q1NTKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9jc3NTZXQpLmpvaW4oJ1xcbicpO1xuICB9O1xuXG4gIFN0eWxlS2VlcGVyLnByb3RvdHlwZS5fZW1pdENoYW5nZSA9IGZ1bmN0aW9uIF9lbWl0Q2hhbmdlKCkge1xuICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlS2VlcGVyO1xufSkoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3R5bGVLZWVwZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL3N0eWxlLWtlZXBlci5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImNvbnN0IHBhcnNlRnJhY3Rpb24gPSAoc3RyaW5nKSA9PiB7XG4gIGNvbnN0IFtuLCBkXSA9IHN0cmluZy5zcGxpdChcIi9cIik7XG4gIGNvbnN0IG51bWVyYXRvciA9IHBhcnNlSW50KG4sIDEwKTtcbiAgY29uc3QgZGVub21pbmF0b3IgPSBwYXJzZUludChkLCAxMCk7XG5cbiAgaWYgKG51bWVyYXRvciA9PT0gMSAmJiAhZGVub21pbmF0b3IpIHtcbiAgICByZXR1cm4gbnVtZXJhdG9yO1xuICB9XG5cbiAgaWYgKCEobnVtZXJhdG9yICYmIGRlbm9taW5hdG9yKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIllvdXIgZnJhY3Rpb24gaXMgbWlzc2luZyBhIG51bWVyYXRvciBvciBkZW5vbWluYXRvci5cIik7XG4gIH1cblxuICBpZiAoZGVub21pbmF0b3IgPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZnJhY3Rpb24geW91IHByb3ZpZGVkIGRpdmlkZXMgYnkgemVyby5cIik7XG4gIH1cblxuICByZXR1cm4gbnVtZXJhdG9yIC8gZGVub21pbmF0b3I7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXJzZUZyYWN0aW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy91dGlsL3BhcnNlLWZyYWN0aW9uLmpzXG4gKiovIiwiLy8gaGVscGVyIHRvIGNhcGl0YWxpemUgc3RyaW5nc1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhcHBlbmRQeElmTmVlZGVkO1xuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9cbi8vIDEwMmNkMjkxODk5Zjk5NDJhNzZjNDBhMGU3ODkyMGE2ZmU1NDRkYzEvXG4vLyBzcmMvcmVuZGVyZXJzL2RvbS9zaGFyZWQvQ1NTUHJvcGVydHkuanNcbnZhciBpc1VuaXRsZXNzTnVtYmVyID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdHJ1ZSxcbiAgYm94RmxleDogdHJ1ZSxcbiAgYm94RmxleEdyb3VwOiB0cnVlLFxuICBib3hPcmRpbmFsR3JvdXA6IHRydWUsXG4gIGNvbHVtbkNvdW50OiB0cnVlLFxuICBmbGV4OiB0cnVlLFxuICBmbGV4R3JvdzogdHJ1ZSxcbiAgZmxleFBvc2l0aXZlOiB0cnVlLFxuICBmbGV4U2hyaW5rOiB0cnVlLFxuICBmbGV4TmVnYXRpdmU6IHRydWUsXG4gIGZsZXhPcmRlcjogdHJ1ZSxcbiAgZ3JpZFJvdzogdHJ1ZSxcbiAgZ3JpZENvbHVtbjogdHJ1ZSxcbiAgZm9udFdlaWdodDogdHJ1ZSxcbiAgbGluZUNsYW1wOiB0cnVlLFxuICBsaW5lSGVpZ2h0OiB0cnVlLFxuICBvcGFjaXR5OiB0cnVlLFxuICBvcmRlcjogdHJ1ZSxcbiAgb3JwaGFuczogdHJ1ZSxcbiAgdGFiU2l6ZTogdHJ1ZSxcbiAgd2lkb3dzOiB0cnVlLFxuICB6SW5kZXg6IHRydWUsXG4gIHpvb206IHRydWUsXG5cbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogdHJ1ZSxcbiAgc3RvcE9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXG4gIHN0cm9rZU9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZVdpZHRoOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBhcHBlbmRQeElmTmVlZGVkKHByb3BlcnR5TmFtZSwgdmFsdWUpIHtcbiAgdmFyIG5lZWRzUHhTdWZmaXggPSAhaXNVbml0bGVzc051bWJlcltwcm9wZXJ0eU5hbWVdICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDA7XG4gIHJldHVybiBuZWVkc1B4U3VmZml4ID8gdmFsdWUgKyAncHgnIDogdmFsdWU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL2FwcGVuZC1weC1pZi1uZWVkZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBlbmhhbmNlV2l0aFJhZGl1bTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfc3R5bGVLZWVwZXIgPSByZXF1aXJlKCcuL3N0eWxlLWtlZXBlci5qcycpO1xuXG52YXIgX3N0eWxlS2VlcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlS2VlcGVyKTtcblxudmFyIF9yZXNvbHZlU3R5bGVzID0gcmVxdWlyZSgnLi9yZXNvbHZlLXN0eWxlcy5qcycpO1xuXG52YXIgX3Jlc29sdmVTdHlsZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzb2x2ZVN0eWxlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH1cblxudmFyIEtFWVNfVE9fSUdOT1JFX1dIRU5fQ09QWUlOR19QUk9QRVJUSUVTID0gWydhcmd1bWVudHMnLCAnY2FsbGVlJywgJ2NhbGxlcicsICdsZW5ndGgnLCAnbmFtZScsICdwcm90b3R5cGUnLCAndHlwZSddO1xuXG5mdW5jdGlvbiBjb3B5UHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCkge1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChLRVlTX1RPX0lHTk9SRV9XSEVOX0NPUFlJTkdfUFJPUEVSVElFUy5pbmRleE9mKGtleSkgPCAwICYmICF0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5oYW5jZVdpdGhSYWRpdW0oY29uZmlnT3JDb21wb3NlZENvbXBvbmVudCkge1xuICB2YXIgX2NsYXNzMiwgX3RlbXA7XG5cbiAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIGlmICh0eXBlb2YgY29uZmlnT3JDb21wb3NlZENvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBfcmV0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBuZXdDb25maWcgPSBfZXh0ZW5kcyh7fSwgY29uZmlnLCBjb25maWdPckNvbXBvc2VkQ29tcG9uZW50KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY6IGZ1bmN0aW9uIHYoY29uZmlnT3JDb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZW5oYW5jZVdpdGhSYWRpdW0oY29uZmlnT3JDb21wb25lbnQsIG5ld0NvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGlmICgodHlwZW9mIF9yZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKF9yZXQpKSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIF9yZXQudjtcbiAgfVxuXG4gIHZhciBjb21wb25lbnQgPSBjb25maWdPckNvbXBvc2VkQ29tcG9uZW50O1xuICB2YXIgQ29tcG9zZWRDb21wb25lbnQgPSBjb21wb25lbnQ7XG5cbiAgLy8gSGFuZGxlIHN0YXRlbGVzcyBjb21wb25lbnRzXG4gIGlmICghQ29tcG9zZWRDb21wb25lbnQucmVuZGVyICYmICFDb21wb3NlZENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyKSB7XG4gICAgQ29tcG9zZWRDb21wb25lbnQgPSAoZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhfY2xhc3MsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBfY2xhc3MoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfY2xhc3MpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfVxuXG4gICAgICBfY2xhc3MucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF9jbGFzcztcbiAgICB9KShfcmVhY3QuQ29tcG9uZW50KTtcbiAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBjb21wb25lbnQubmFtZTtcbiAgfVxuXG4gIHZhciBSYWRpdW1FbmhhbmNlciA9IChfdGVtcCA9IF9jbGFzczIgPSAoZnVuY3Rpb24gKF9Db21wb3NlZENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhSYWRpdW1FbmhhbmNlciwgX0NvbXBvc2VkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFJhZGl1bUVuaGFuY2VyKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhZGl1bUVuaGFuY2VyKTtcblxuICAgICAgdmFyIF90aGlzMiA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb3NlZENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgX3RoaXMyLnN0YXRlID0gX3RoaXMyLnN0YXRlIHx8IHt9O1xuICAgICAgX3RoaXMyLnN0YXRlLl9yYWRpdW1TdHlsZVN0YXRlID0ge307XG4gICAgICBfdGhpczIuX3JhZGl1bUlzTW91bnRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gX3RoaXMyO1xuICAgIH1cblxuICAgIFJhZGl1bUVuaGFuY2VyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKF9Db21wb3NlZENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICAgICAgX0NvbXBvc2VkQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yYWRpdW1Jc01vdW50ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuX3JhZGl1bU1vdXNlVXBMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9yYWRpdW1Nb3VzZVVwTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9yYWRpdW1NZWRpYVF1ZXJ5TGlzdGVuZXJzQnlRdWVyeSkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9yYWRpdW1NZWRpYVF1ZXJ5TGlzdGVuZXJzQnlRdWVyeSkuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgICB0aGlzLl9yYWRpdW1NZWRpYVF1ZXJ5TGlzdGVuZXJzQnlRdWVyeVtxdWVyeV0ucmVtb3ZlKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgdmFyIHN1cGVyQ2hpbGRDb250ZXh0ID0gX0NvbXBvc2VkQ29tcG9uZW50LnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPyBfQ29tcG9zZWRDb21wb25lbnQucHJvdG90eXBlLmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMpIDoge307XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5yYWRpdW1Db25maWcpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyQ2hpbGRDb250ZXh0O1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3Q29udGV4dCA9IF9leHRlbmRzKHt9LCBzdXBlckNoaWxkQ29udGV4dCk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnJhZGl1bUNvbmZpZykge1xuICAgICAgICBuZXdDb250ZXh0Ll9yYWRpdW1Db25maWcgPSB0aGlzLnByb3BzLnJhZGl1bUNvbmZpZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld0NvbnRleHQ7XG4gICAgfTtcblxuICAgIFJhZGl1bUVuaGFuY2VyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcmVuZGVyZWRFbGVtZW50ID0gX0NvbXBvc2VkQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgIHZhciBjdXJyZW50Q29uZmlnID0gdGhpcy5wcm9wcy5yYWRpdW1Db25maWcgfHwgdGhpcy5jb250ZXh0Ll9yYWRpdW1Db25maWcgfHwgY29uZmlnO1xuXG4gICAgICBpZiAoY29uZmlnICYmIGN1cnJlbnRDb25maWcgIT09IGNvbmZpZykge1xuICAgICAgICBjdXJyZW50Q29uZmlnID0gX2V4dGVuZHMoe30sIGNvbmZpZywgY3VycmVudENvbmZpZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoMCwgX3Jlc29sdmVTdHlsZXMyLmRlZmF1bHQpKHRoaXMsIHJlbmRlcmVkRWxlbWVudCwgY3VycmVudENvbmZpZyk7XG4gICAgfTtcblxuICAgIHJldHVybiBSYWRpdW1FbmhhbmNlcjtcbiAgfSkoQ29tcG9zZWRDb21wb25lbnQpLCBfY2xhc3MyLl9pc1JhZGl1bUVuaGFuY2VkID0gdHJ1ZSwgX3RlbXApO1xuXG4gIC8vIENsYXNzIGluaGVyaXRhbmNlIHVzZXMgT2JqZWN0LmNyZWF0ZSBhbmQgYmVjYXVzZSBvZiBfX3Byb3RvX18gaXNzdWVzXG4gIC8vIHdpdGggSUUgPDEwIGFueSBzdGF0aWMgcHJvcGVydGllcyBvZiB0aGUgc3VwZXJjbGFzcyBhcmVuJ3QgaW5oZXJpdGVkIGFuZFxuICAvLyBzbyBuZWVkIHRvIGJlIG1hbnVhbGx5IHBvcHVsYXRlZC5cbiAgLy8gU2VlIGh0dHA6Ly9iYWJlbGpzLmlvL2RvY3MvYWR2YW5jZWQvY2F2ZWF0cy8jY2xhc3Nlcy0xMC1hbmQtYmVsb3ctXG5cbiAgY29weVByb3BlcnRpZXMoY29tcG9uZW50LCBSYWRpdW1FbmhhbmNlcik7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGFsc28gZml4ZXMgUmVhY3QgSG90IExvYWRlciBieSBleHBvc2luZyB0aGUgb3JpZ2luYWwgY29tcG9uZW50cyB0b3BcbiAgICAvLyBsZXZlbCBwcm90b3R5cGUgbWV0aG9kcyBvbiB0aGUgUmFkaXVtIGVuaGFuY2VkIHByb3RvdHlwZSBhcyBkaXNjdXNzZWQgaW5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vRm9ybWlkYWJsZUxhYnMvcmFkaXVtL2lzc3Vlcy8yMTkuXG4gICAgY29weVByb3BlcnRpZXMoQ29tcG9zZWRDb21wb25lbnQucHJvdG90eXBlLCBSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUpO1xuICB9XG5cbiAgaWYgKFJhZGl1bUVuaGFuY2VyLnByb3BUeXBlcyAmJiBSYWRpdW1FbmhhbmNlci5wcm9wVHlwZXMuc3R5bGUpIHtcbiAgICBSYWRpdW1FbmhhbmNlci5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7fSwgUmFkaXVtRW5oYW5jZXIucHJvcFR5cGVzLCB7XG4gICAgICBzdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdC5Qcm9wVHlwZXMuYXJyYXksIF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0XSlcbiAgICB9KTtcbiAgfVxuXG4gIFJhZGl1bUVuaGFuY2VyLmRpc3BsYXlOYW1lID0gY29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuXG4gIFJhZGl1bUVuaGFuY2VyLmNvbnRleHRUeXBlcyA9IF9leHRlbmRzKHt9LCBSYWRpdW1FbmhhbmNlci5jb250ZXh0VHlwZXMsIHtcbiAgICBfcmFkaXVtQ29uZmlnOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBfcmFkaXVtU3R5bGVLZWVwZXI6IF9yZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihfc3R5bGVLZWVwZXIyLmRlZmF1bHQpXG4gIH0pO1xuXG4gIFJhZGl1bUVuaGFuY2VyLmNoaWxkQ29udGV4dFR5cGVzID0gX2V4dGVuZHMoe30sIFJhZGl1bUVuaGFuY2VyLmNoaWxkQ29udGV4dFR5cGVzLCB7XG4gICAgX3JhZGl1bUNvbmZpZzogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgX3JhZGl1bVN0eWxlS2VlcGVyOiBfcmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoX3N0eWxlS2VlcGVyMi5kZWZhdWx0KVxuICB9KTtcblxuICByZXR1cm4gUmFkaXVtRW5oYW5jZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL2VuaGFuY2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIGdldFN0YXRlS2V5ID0gZnVuY3Rpb24gZ2V0U3RhdGVLZXkoZWxlbWVudEtleSkge1xuICByZXR1cm4gZWxlbWVudEtleSA9PT0gbnVsbCB8fCBlbGVtZW50S2V5ID09PSB1bmRlZmluZWQgPyAnbWFpbicgOiBlbGVtZW50S2V5LnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBnZXRTdGF0ZUtleTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvZ2V0LXN0YXRlLWtleS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0U3RhdGVLZXkgPSByZXF1aXJlKCcuL2dldC1zdGF0ZS1rZXknKTtcblxudmFyIF9nZXRTdGF0ZUtleTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRTdGF0ZUtleSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnZXRTdGF0ZSA9IGZ1bmN0aW9uIGdldFN0YXRlKHN0YXRlLCBlbGVtZW50S2V5LCB2YWx1ZSkge1xuICB2YXIga2V5ID0gKDAsIF9nZXRTdGF0ZUtleTIuZGVmYXVsdCkoZWxlbWVudEtleSk7XG5cbiAgcmV0dXJuICEhc3RhdGUgJiYgISFzdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZSAmJiAhIXN0YXRlLl9yYWRpdW1TdHlsZVN0YXRlW2tleV0gJiYgc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGVba2V5XVt2YWx1ZV07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBnZXRTdGF0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvZ2V0LXN0YXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGhhc2g7XG5cbi8vIGEgc2ltcGxlIGRqYjIgaGFzaCBiYXNlZCBvbiBoYXNoLXN0cmluZzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NYXR0aGV3QmFya2VyL2hhc2gtc3RyaW5nL2Jsb2IvbWFzdGVyL3NvdXJjZS9oYXNoLXN0cmluZy5qc1xuLy8gcmV0dXJucyBhIGhleC1lbmNvZGVkIGhhc2hcbmZ1bmN0aW9uIGhhc2godGV4dCkge1xuICBpZiAoIXRleHQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgaGFzaFZhbHVlID0gNTM4MTtcbiAgdmFyIGluZGV4ID0gdGV4dC5sZW5ndGggLSAxO1xuXG4gIHdoaWxlIChpbmRleCkge1xuICAgIGhhc2hWYWx1ZSA9IGhhc2hWYWx1ZSAqIDMzIF4gdGV4dC5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICBpbmRleCAtPSAxO1xuICB9XG5cbiAgcmV0dXJuIChoYXNoVmFsdWUgPj4+IDApLnRvU3RyaW5nKDE2KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvaGFzaC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZW5oYW5jZXIgPSByZXF1aXJlKCcuL2VuaGFuY2VyJyk7XG5cbnZhciBfZW5oYW5jZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW5oYW5jZXIpO1xuXG52YXIgX3BsdWdpbnMgPSByZXF1aXJlKCcuL3BsdWdpbnMnKTtcblxudmFyIF9wbHVnaW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsdWdpbnMpO1xuXG52YXIgX3N0eWxlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3N0eWxlJyk7XG5cbnZhciBfc3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGUpO1xuXG52YXIgX3N0eWxlUm9vdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9zdHlsZS1yb290Jyk7XG5cbnZhciBfc3R5bGVSb290MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlUm9vdCk7XG5cbnZhciBfZ2V0U3RhdGUgPSByZXF1aXJlKCcuL2dldC1zdGF0ZScpO1xuXG52YXIgX2dldFN0YXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFN0YXRlKTtcblxudmFyIF9rZXlmcmFtZXMgPSByZXF1aXJlKCcuL2tleWZyYW1lcycpO1xuXG52YXIgX2tleWZyYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlmcmFtZXMpO1xuXG52YXIgX3Jlc29sdmVTdHlsZXMgPSByZXF1aXJlKCcuL3Jlc29sdmUtc3R5bGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIFJhZGl1bShDb21wb3NlZENvbXBvbmVudCkge1xuICByZXR1cm4gKDAsIF9lbmhhbmNlcjIuZGVmYXVsdCkoQ29tcG9zZWRDb21wb25lbnQpO1xufVxuXG5SYWRpdW0uUGx1Z2lucyA9IF9wbHVnaW5zMi5kZWZhdWx0O1xuUmFkaXVtLlN0eWxlID0gX3N0eWxlMi5kZWZhdWx0O1xuUmFkaXVtLlN0eWxlUm9vdCA9IF9zdHlsZVJvb3QyLmRlZmF1bHQ7XG5SYWRpdW0uZ2V0U3RhdGUgPSBfZ2V0U3RhdGUyLmRlZmF1bHQ7XG5SYWRpdW0ua2V5ZnJhbWVzID0gX2tleWZyYW1lczIuZGVmYXVsdDtcblJhZGl1bS5fX2NsZWFyU3RhdGVGb3JUZXN0cyA9IF9yZXNvbHZlU3R5bGVzLl9fY2xlYXJTdGF0ZUZvclRlc3RzO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSYWRpdW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGtleWZyYW1lcztcblxudmFyIF9jc3NSdWxlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL2Nzcy1ydWxlLXNldC10by1zdHJpbmcnKTtcblxudmFyIF9jc3NSdWxlU2V0VG9TdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzUnVsZVNldFRvU3RyaW5nKTtcblxudmFyIF9oYXNoID0gcmVxdWlyZSgnLi9oYXNoJyk7XG5cbnZhciBfaGFzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNoKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24ga2V5ZnJhbWVzKGtleWZyYW1lUnVsZXMsIG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBfX3JhZGl1bUtleWZyYW1lczogdHJ1ZSxcbiAgICBfX3Byb2Nlc3M6IGZ1bmN0aW9uIF9fcHJvY2Vzcyh1c2VyQWdlbnQpIHtcbiAgICAgIHZhciBrZXlmcmFtZXNQcmVmaXhlZCA9ICgwLCBfcHJlZml4ZXIuZ2V0UHJlZml4ZWRLZXlmcmFtZXMpKHVzZXJBZ2VudCk7XG4gICAgICB2YXIgcnVsZXMgPSBPYmplY3Qua2V5cyhrZXlmcmFtZVJ1bGVzKS5tYXAoZnVuY3Rpb24gKHBlcmNlbnRhZ2UpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfY3NzUnVsZVNldFRvU3RyaW5nMi5kZWZhdWx0KShwZXJjZW50YWdlLCBrZXlmcmFtZVJ1bGVzW3BlcmNlbnRhZ2VdLCB1c2VyQWdlbnQpO1xuICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICB2YXIgYW5pbWF0aW9uTmFtZSA9IChuYW1lID8gbmFtZSArICctJyA6ICcnKSArICdyYWRpdW0tYW5pbWF0aW9uLScgKyAoMCwgX2hhc2gyLmRlZmF1bHQpKHJ1bGVzKTtcbiAgICAgIHZhciBjc3MgPSAnQCcgKyBrZXlmcmFtZXNQcmVmaXhlZCArICcgJyArIGFuaW1hdGlvbk5hbWUgKyAnIHtcXG4nICsgcnVsZXMgKyAnXFxufVxcbic7XG4gICAgICByZXR1cm4geyBjc3M6IGNzcywgYW5pbWF0aW9uTmFtZTogYW5pbWF0aW9uTmFtZSB9O1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIva2V5ZnJhbWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWFwT2JqZWN0O1xuZnVuY3Rpb24gbWFwT2JqZWN0KG9iamVjdCwgbWFwcGVyKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBrZXkpIHtcbiAgICByZXN1bHRba2V5XSA9IG1hcHBlcihvYmplY3Rba2V5XSwga2V5KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL21hcC1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc05lc3RlZFN0eWxlID0gaXNOZXN0ZWRTdHlsZTtcbmV4cG9ydHMubWVyZ2VTdHlsZXMgPSBtZXJnZVN0eWxlcztcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnaXMtcGxhaW4tb2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH1cblxuZnVuY3Rpb24gaXNOZXN0ZWRTdHlsZSh2YWx1ZSkge1xuICAvLyBEb24ndCBtZXJnZSBvYmplY3RzIG92ZXJyaWRpbmcgdG9TdHJpbmcsIHNpbmNlIHRoZXkgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICAvLyB0byBzdHJpbmcgdmFsdWVzLlxuICByZXR1cm4gKDAsIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWUudG9TdHJpbmcgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG59XG5cbi8vIE1lcmdlIHN0eWxlIG9iamVjdHMuIERlZXAgbWVyZ2UgcGxhaW4gb2JqZWN0IHZhbHVlcy5cbmZ1bmN0aW9uIG1lcmdlU3R5bGVzKHN0eWxlcykge1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgc3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZSB8fCAodHlwZW9mIHN0eWxlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzdHlsZSkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlKSkge1xuICAgICAgc3R5bGUgPSBtZXJnZVN0eWxlcyhzdHlsZSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKGlzTmVzdGVkU3R5bGUoc3R5bGVba2V5XSkgJiYgaXNOZXN0ZWRTdHlsZShyZXN1bHRba2V5XSkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZVN0eWxlcyhbcmVzdWx0W2tleV0sIHN0eWxlW2tleV1dKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gc3R5bGVba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL21lcmdlLXN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKTtcblxudmFyIF9jc3NSdWxlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL2Nzcy1ydWxlLXNldC10by1zdHJpbmcnKTtcblxudmFyIF9jc3NSdWxlU2V0VG9TdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzUnVsZVNldFRvU3RyaW5nKTtcblxudmFyIF9nZXRTdGF0ZSA9IHJlcXVpcmUoJy4vZ2V0LXN0YXRlJyk7XG5cbnZhciBfZ2V0U3RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0U3RhdGUpO1xuXG52YXIgX2dldFN0YXRlS2V5ID0gcmVxdWlyZSgnLi9nZXQtc3RhdGUta2V5Jyk7XG5cbnZhciBfZ2V0U3RhdGVLZXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0U3RhdGVLZXkpO1xuXG52YXIgX21lcmdlU3R5bGVzID0gcmVxdWlyZSgnLi9tZXJnZS1zdHlsZXMnKTtcblxudmFyIF9wbHVnaW5zID0gcmVxdWlyZSgnLi9wbHVnaW5zLycpO1xuXG52YXIgX3BsdWdpbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGx1Z2lucyk7XG5cbnZhciBfZXhlbnYgPSByZXF1aXJlKCdleGVudicpO1xuXG52YXIgX2V4ZW52MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4ZW52KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfVxuXG52YXIgREVGQVVMVF9DT05GSUcgPSB7XG4gIHBsdWdpbnM6IFtfcGx1Z2luczIuZGVmYXVsdC5tZXJnZVN0eWxlQXJyYXksIF9wbHVnaW5zMi5kZWZhdWx0LmNoZWNrUHJvcHMsIF9wbHVnaW5zMi5kZWZhdWx0LnJlc29sdmVNZWRpYVF1ZXJpZXMsIF9wbHVnaW5zMi5kZWZhdWx0LnJlc29sdmVJbnRlcmFjdGlvblN0eWxlcywgX3BsdWdpbnMyLmRlZmF1bHQua2V5ZnJhbWVzLCBfcGx1Z2luczIuZGVmYXVsdC5wcmVmaXgsIF9wbHVnaW5zMi5kZWZhdWx0LmNoZWNrUHJvcHNdXG59O1xuXG4vLyBHcm9zc1xudmFyIGdsb2JhbFN0YXRlID0ge307XG5cbi8vIERlY2xhcmUgZWFybHkgZm9yIHJlY3Vyc2l2ZSBoZWxwZXJzLlxudmFyIHJlc29sdmVTdHlsZXMgPSBudWxsO1xuXG52YXIgX3Nob3VsZFJlc29sdmVTdHlsZXMgPSBmdW5jdGlvbiBfc2hvdWxkUmVzb2x2ZVN0eWxlcyhjb21wb25lbnQpIHtcbiAgcmV0dXJuIGNvbXBvbmVudC50eXBlICYmICFjb21wb25lbnQudHlwZS5faXNSYWRpdW1FbmhhbmNlZDtcbn07XG5cbnZhciBfcmVzb2x2ZUNoaWxkcmVuID0gZnVuY3Rpb24gX3Jlc29sdmVDaGlsZHJlbihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBjb21wb25lbnQgPSBfcmVmLmNvbXBvbmVudDtcbiAgdmFyIGNvbmZpZyA9IF9yZWYuY29uZmlnO1xuICB2YXIgZXhpc3RpbmdLZXlNYXAgPSBfcmVmLmV4aXN0aW5nS2V5TWFwO1xuXG4gIGlmICghY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgY2hpbGRyZW5UeXBlID0gdHlwZW9mIGNoaWxkcmVuID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjaGlsZHJlbik7XG5cbiAgaWYgKGNoaWxkcmVuVHlwZSA9PT0gJ3N0cmluZycgfHwgY2hpbGRyZW5UeXBlID09PSAnbnVtYmVyJykge1xuICAgIC8vIERvbid0IGRvIGFueXRoaW5nIHdpdGggYSBzaW5nbGUgcHJpbWl0aXZlIGNoaWxkXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgaWYgKGNoaWxkcmVuVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFdyYXAgdGhlIGZ1bmN0aW9uLCByZXNvbHZpbmcgc3R5bGVzIG9uIHRoZSByZXN1bHRcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGNoaWxkcmVuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVTdHlsZXMoY29tcG9uZW50LCByZXN1bHQsIGNvbmZpZywgZXhpc3RpbmdLZXlNYXAsIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9XG5cbiAgaWYgKF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDEgJiYgY2hpbGRyZW4udHlwZSkge1xuICAgIC8vIElmIGEgUmVhY3QgRWxlbWVudCBpcyBhbiBvbmx5IGNoaWxkLCBkb24ndCB3cmFwIGl0IGluIGFuIGFycmF5IGZvclxuICAgIC8vIFJlYWN0LkNoaWxkcmVuLm1hcCgpIGZvciBSZWFjdC5DaGlsZHJlbi5vbmx5KCkgY29tcGF0aWJpbGl0eS5cbiAgICB2YXIgb25seUNoaWxkID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIHJldHVybiByZXNvbHZlU3R5bGVzKGNvbXBvbmVudCwgb25seUNoaWxkLCBjb25maWcsIGV4aXN0aW5nS2V5TWFwLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVTdHlsZXMoY29tcG9uZW50LCBjaGlsZCwgY29uZmlnLCBleGlzdGluZ0tleU1hcCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcbn07XG5cbi8vIFJlY3Vyc2Ugb3ZlciBwcm9wcywganVzdCBsaWtlIGNoaWxkcmVuXG52YXIgX3Jlc29sdmVQcm9wcyA9IGZ1bmN0aW9uIF9yZXNvbHZlUHJvcHMoX3JlZjIpIHtcbiAgdmFyIGNvbXBvbmVudCA9IF9yZWYyLmNvbXBvbmVudDtcbiAgdmFyIGNvbmZpZyA9IF9yZWYyLmNvbmZpZztcbiAgdmFyIGV4aXN0aW5nS2V5TWFwID0gX3JlZjIuZXhpc3RpbmdLZXlNYXA7XG4gIHZhciBwcm9wcyA9IF9yZWYyLnByb3BzO1xuXG4gIHZhciBuZXdQcm9wcyA9IHByb3BzO1xuXG4gIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgLy8gV2UgYWxyZWFkeSByZWN1cnNlIG92ZXIgY2hpbGRyZW4gYWJvdmVcbiAgICBpZiAocHJvcCA9PT0gJ2NoaWxkcmVuJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wXTtcbiAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgIG5ld1Byb3BzID0gX2V4dGVuZHMoe30sIG5ld1Byb3BzKTtcbiAgICAgIG5ld1Byb3BzW3Byb3BdID0gcmVzb2x2ZVN0eWxlcyhjb21wb25lbnQsIHByb3BWYWx1ZSwgY29uZmlnLCBleGlzdGluZ0tleU1hcCwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG52YXIgX2J1aWxkR2V0S2V5ID0gZnVuY3Rpb24gX2J1aWxkR2V0S2V5KF9yZWYzKSB7XG4gIHZhciBjb21wb25lbnROYW1lID0gX3JlZjMuY29tcG9uZW50TmFtZTtcbiAgdmFyIGV4aXN0aW5nS2V5TWFwID0gX3JlZjMuZXhpc3RpbmdLZXlNYXA7XG4gIHZhciByZW5kZXJlZEVsZW1lbnQgPSBfcmVmMy5yZW5kZXJlZEVsZW1lbnQ7XG5cbiAgLy8gV2UgbmVlZCBhIHVuaXF1ZSBrZXkgdG8gY29ycmVsYXRlIHN0YXRlIGNoYW5nZXMgZHVlIHRvIHVzZXIgaW50ZXJhY3Rpb25cbiAgLy8gd2l0aCB0aGUgcmVuZGVyZWQgZWxlbWVudCwgc28gd2Uga25vdyB0byBhcHBseSB0aGUgcHJvcGVyIGludGVyYWN0aXZlXG4gIC8vIHN0eWxlcy5cbiAgdmFyIG9yaWdpbmFsS2V5ID0gdHlwZW9mIHJlbmRlcmVkRWxlbWVudC5yZWYgPT09ICdzdHJpbmcnID8gcmVuZGVyZWRFbGVtZW50LnJlZiA6IHJlbmRlcmVkRWxlbWVudC5rZXk7XG4gIHZhciBrZXkgPSAoMCwgX2dldFN0YXRlS2V5Mi5kZWZhdWx0KShvcmlnaW5hbEtleSk7XG5cbiAgdmFyIGFscmVhZHlHb3RLZXkgPSBmYWxzZTtcbiAgdmFyIGdldEtleSA9IGZ1bmN0aW9uIGdldEtleSgpIHtcbiAgICBpZiAoYWxyZWFkeUdvdEtleSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG5cbiAgICBhbHJlYWR5R290S2V5ID0gdHJ1ZTtcblxuICAgIGlmIChleGlzdGluZ0tleU1hcFtrZXldKSB7XG4gICAgICB2YXIgZWxlbWVudE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAodHlwZW9mIHJlbmRlcmVkRWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50TmFtZSA9IHJlbmRlcmVkRWxlbWVudC50eXBlO1xuICAgICAgfSBlbHNlIGlmIChyZW5kZXJlZEVsZW1lbnQudHlwZS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICBlbGVtZW50TmFtZSA9IHJlbmRlcmVkRWxlbWVudC50eXBlLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IHJlbmRlcmVkRWxlbWVudC50eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcignUmFkaXVtIHJlcXVpcmVzIGVhY2ggZWxlbWVudCB3aXRoIGludGVyYWN0aXZlIHN0eWxlcyB0byBoYXZlIGEgdW5pcXVlICcgKyAna2V5LCBzZXQgdXNpbmcgZWl0aGVyIHRoZSByZWYgb3Iga2V5IHByb3AuICcgKyAob3JpZ2luYWxLZXkgPyAnS2V5IFwiJyArIG9yaWdpbmFsS2V5ICsgJ1wiIGlzIGEgZHVwbGljYXRlLicgOiAnTXVsdGlwbGUgZWxlbWVudHMgaGF2ZSBubyBrZXkgc3BlY2lmaWVkLicpICsgJyAnICsgJ0NvbXBvbmVudDogXCInICsgY29tcG9uZW50TmFtZSArICdcIi4gJyArIChlbGVtZW50TmFtZSA/ICdFbGVtZW50OiBcIicgKyBlbGVtZW50TmFtZSArICdcIi4nIDogJycpKTtcbiAgICB9XG5cbiAgICBleGlzdGluZ0tleU1hcFtrZXldID0gdHJ1ZTtcblxuICAgIHJldHVybiBrZXk7XG4gIH07XG5cbiAgcmV0dXJuIGdldEtleTtcbn07XG5cbnZhciBfc2V0U3R5bGVTdGF0ZSA9IGZ1bmN0aW9uIF9zZXRTdHlsZVN0YXRlKGNvbXBvbmVudCwga2V5LCBzdGF0ZUtleSwgdmFsdWUpIHtcbiAgaWYgKCFjb21wb25lbnQuX3JhZGl1bUlzTW91bnRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBleGlzdGluZyA9IGNvbXBvbmVudC5fbGFzdFJhZGl1bVN0YXRlIHx8IGNvbXBvbmVudC5zdGF0ZSAmJiBjb21wb25lbnQuc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGUgfHwge307XG5cbiAgdmFyIHN0YXRlID0geyBfcmFkaXVtU3R5bGVTdGF0ZTogX2V4dGVuZHMoe30sIGV4aXN0aW5nKSB9O1xuICBzdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZVtrZXldID0gX2V4dGVuZHMoe30sIHN0YXRlLl9yYWRpdW1TdHlsZVN0YXRlW2tleV0pO1xuICBzdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZVtrZXldW3N0YXRlS2V5XSA9IHZhbHVlO1xuXG4gIGNvbXBvbmVudC5fbGFzdFJhZGl1bVN0YXRlID0gc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGU7XG4gIGNvbXBvbmVudC5zZXRTdGF0ZShzdGF0ZSk7XG59O1xuXG52YXIgX3J1blBsdWdpbnMgPSBmdW5jdGlvbiBfcnVuUGx1Z2lucyhfcmVmNCkge1xuICB2YXIgY29tcG9uZW50ID0gX3JlZjQuY29tcG9uZW50O1xuICB2YXIgY29uZmlnID0gX3JlZjQuY29uZmlnO1xuICB2YXIgZXhpc3RpbmdLZXlNYXAgPSBfcmVmNC5leGlzdGluZ0tleU1hcDtcbiAgdmFyIHByb3BzID0gX3JlZjQucHJvcHM7XG4gIHZhciByZW5kZXJlZEVsZW1lbnQgPSBfcmVmNC5yZW5kZXJlZEVsZW1lbnQ7XG5cbiAgLy8gRG9uJ3QgcnVuIHBsdWdpbnMgaWYgcmVuZGVyZWRFbGVtZW50IGlzIG5vdCBhIHNpbXBsZSBSZWFjdERPTUVsZW1lbnQgb3IgaGFzXG4gIC8vIG5vIHN0eWxlLlxuICBpZiAoIV9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChyZW5kZXJlZEVsZW1lbnQpIHx8IHR5cGVvZiByZW5kZXJlZEVsZW1lbnQudHlwZSAhPT0gJ3N0cmluZycgfHwgIXByb3BzLnN0eWxlKSB7XG4gICAgcmV0dXJuIHByb3BzO1xuICB9XG5cbiAgdmFyIG5ld1Byb3BzID0gcHJvcHM7XG5cbiAgdmFyIHBsdWdpbnMgPSBjb25maWcucGx1Z2lucyB8fCBERUZBVUxUX0NPTkZJRy5wbHVnaW5zO1xuXG4gIHZhciBjb21wb25lbnROYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICB2YXIgZ2V0S2V5ID0gX2J1aWxkR2V0S2V5KHsgcmVuZGVyZWRFbGVtZW50OiByZW5kZXJlZEVsZW1lbnQsIGV4aXN0aW5nS2V5TWFwOiBleGlzdGluZ0tleU1hcCwgY29tcG9uZW50TmFtZTogY29tcG9uZW50TmFtZSB9KTtcbiAgdmFyIGdldENvbXBvbmVudEZpZWxkID0gZnVuY3Rpb24gZ2V0Q29tcG9uZW50RmllbGQoa2V5KSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudFtrZXldO1xuICB9O1xuICB2YXIgZ2V0R2xvYmFsU3RhdGUgPSBmdW5jdGlvbiBnZXRHbG9iYWxTdGF0ZShrZXkpIHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGVba2V5XTtcbiAgfTtcbiAgdmFyIGNvbXBvbmVudEdldFN0YXRlID0gZnVuY3Rpb24gY29tcG9uZW50R2V0U3RhdGUoc3RhdGVLZXksIGVsZW1lbnRLZXkpIHtcbiAgICByZXR1cm4gKDAsIF9nZXRTdGF0ZTIuZGVmYXVsdCkoY29tcG9uZW50LnN0YXRlLCBlbGVtZW50S2V5IHx8IGdldEtleSgpLCBzdGF0ZUtleSk7XG4gIH07XG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlS2V5LCB2YWx1ZSwgZWxlbWVudEtleSkge1xuICAgIHJldHVybiBfc2V0U3R5bGVTdGF0ZShjb21wb25lbnQsIGVsZW1lbnRLZXkgfHwgZ2V0S2V5KCksIHN0YXRlS2V5LCB2YWx1ZSk7XG4gIH07XG5cbiAgdmFyIGFkZENTUyA9IGZ1bmN0aW9uIGFkZENTUyhjc3MpIHtcbiAgICB2YXIgc3R5bGVLZWVwZXIgPSBjb21wb25lbnQuX3JhZGl1bVN0eWxlS2VlcGVyIHx8IGNvbXBvbmVudC5jb250ZXh0Ll9yYWRpdW1TdHlsZUtlZXBlcjtcbiAgICBpZiAoIXN0eWxlS2VlcGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvIHVzZSBwbHVnaW5zIHJlcXVpcmluZyBgYWRkQ1NTYCAoZS5nLiBrZXlmcmFtZXMsIG1lZGlhIHF1ZXJpZXMpLCAnICsgJ3BsZWFzZSB3cmFwIHlvdXIgYXBwbGljYXRpb24gaW4gdGhlIFN0eWxlUm9vdCBjb21wb25lbnQuIENvbXBvbmVudCAnICsgJ25hbWU6IGAnICsgY29tcG9uZW50TmFtZSArICdgLicpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZUtlZXBlci5hZGRDU1MoY3NzKTtcbiAgfTtcblxuICB2YXIgbmV3U3R5bGUgPSBwcm9wcy5zdHlsZTtcblxuICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgIHZhciByZXN1bHQgPSBwbHVnaW4oe1xuICAgICAgRXhlY3V0aW9uRW52aXJvbm1lbnQ6IF9leGVudjIuZGVmYXVsdCxcbiAgICAgIGFkZENTUzogYWRkQ1NTLFxuICAgICAgY29tcG9uZW50TmFtZTogY29tcG9uZW50TmFtZSxcbiAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgY3NzUnVsZVNldFRvU3RyaW5nOiBfY3NzUnVsZVNldFRvU3RyaW5nMi5kZWZhdWx0LFxuICAgICAgZ2V0Q29tcG9uZW50RmllbGQ6IGdldENvbXBvbmVudEZpZWxkLFxuICAgICAgZ2V0R2xvYmFsU3RhdGU6IGdldEdsb2JhbFN0YXRlLFxuICAgICAgZ2V0U3RhdGU6IGNvbXBvbmVudEdldFN0YXRlLFxuICAgICAgbWVyZ2VTdHlsZXM6IF9tZXJnZVN0eWxlcy5tZXJnZVN0eWxlcyxcbiAgICAgIHByb3BzOiBuZXdQcm9wcyxcbiAgICAgIHNldFN0YXRlOiBzZXRTdGF0ZSxcbiAgICAgIGlzTmVzdGVkU3R5bGU6IF9tZXJnZVN0eWxlcy5pc05lc3RlZFN0eWxlLFxuICAgICAgc3R5bGU6IG5ld1N0eWxlXG4gICAgfSkgfHwge307XG5cbiAgICBuZXdTdHlsZSA9IHJlc3VsdC5zdHlsZSB8fCBuZXdTdHlsZTtcblxuICAgIG5ld1Byb3BzID0gcmVzdWx0LnByb3BzICYmIE9iamVjdC5rZXlzKHJlc3VsdC5wcm9wcykubGVuZ3RoID8gX2V4dGVuZHMoe30sIG5ld1Byb3BzLCByZXN1bHQucHJvcHMpIDogbmV3UHJvcHM7XG5cbiAgICB2YXIgbmV3Q29tcG9uZW50RmllbGRzID0gcmVzdWx0LmNvbXBvbmVudEZpZWxkcyB8fCB7fTtcbiAgICBPYmplY3Qua2V5cyhuZXdDb21wb25lbnRGaWVsZHMpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkTmFtZSkge1xuICAgICAgY29tcG9uZW50W2ZpZWxkTmFtZV0gPSBuZXdDb21wb25lbnRGaWVsZHNbZmllbGROYW1lXTtcbiAgICB9KTtcblxuICAgIHZhciBuZXdHbG9iYWxTdGF0ZSA9IHJlc3VsdC5nbG9iYWxTdGF0ZSB8fCB7fTtcbiAgICBPYmplY3Qua2V5cyhuZXdHbG9iYWxTdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBnbG9iYWxTdGF0ZVtrZXldID0gbmV3R2xvYmFsU3RhdGVba2V5XTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKG5ld1N0eWxlICE9PSBwcm9wcy5zdHlsZSkge1xuICAgIG5ld1Byb3BzID0gX2V4dGVuZHMoe30sIG5ld1Byb3BzLCB7IHN0eWxlOiBuZXdTdHlsZSB9KTtcbiAgfVxuXG4gIHJldHVybiBuZXdQcm9wcztcbn07XG5cbi8vIFdyYXBwZXIgYXJvdW5kIFJlYWN0LmNsb25lRWxlbWVudC4gVG8gYXZvaWQgcHJvY2Vzc2luZyB0aGUgc2FtZSBlbGVtZW50XG4vLyB0d2ljZSwgd2hlbmV2ZXIgd2UgY2xvbmUgYW4gZWxlbWVudCBhZGQgYSBzcGVjaWFsIHByb3AgdG8gbWFrZSBzdXJlIHdlIGRvbid0XG4vLyBwcm9jZXNzIHRoaXMgZWxlbWVudCBhZ2Fpbi5cbnZhciBfY2xvbmVFbGVtZW50ID0gZnVuY3Rpb24gX2Nsb25lRWxlbWVudChyZW5kZXJlZEVsZW1lbnQsIG5ld1Byb3BzLCBuZXdDaGlsZHJlbikge1xuICAvLyBPbmx5IGFkZCBmbGFnIGlmIHRoaXMgaXMgYSBub3JtYWwgRE9NIGVsZW1lbnRcbiAgaWYgKHR5cGVvZiByZW5kZXJlZEVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBuZXdQcm9wcyA9IF9leHRlbmRzKHt9LCBuZXdQcm9wcywgeyBfcmFkaXVtRGlkUmVzb2x2ZVN0eWxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHJlbmRlcmVkRWxlbWVudCwgbmV3UHJvcHMsIG5ld0NoaWxkcmVuKTtcbn07XG5cbi8vXG4vLyBUaGUgbnVjbGV1cyBvZiBSYWRpdW0uIHJlc29sdmVTdHlsZXMgaXMgY2FsbGVkIG9uIHRoZSByZW5kZXJlZCBlbGVtZW50c1xuLy8gYmVmb3JlIHRoZXkgYXJlIHJldHVybmVkIGluIHJlbmRlci4gSXQgaXRlcmF0ZXMgb3ZlciB0aGUgZWxlbWVudHMgYW5kXG4vLyBjaGlsZHJlbiwgcmV3cml0aW5nIHByb3BzIHRvIGFkZCBldmVudCBoYW5kbGVycyByZXF1aXJlZCB0byBjYXB0dXJlIHVzZXJcbi8vIGludGVyYWN0aW9ucyAoZS5nLiBtb3VzZSBvdmVyKS4gSXQgYWxzbyByZXBsYWNlcyB0aGUgc3R5bGUgcHJvcCBiZWNhdXNlIGl0XG4vLyBhZGRzIGluIHRoZSB2YXJpb3VzIGludGVyYWN0aW9uIHN0eWxlcyAoZS5nLiA6aG92ZXIpLlxuLy9cbnJlc29sdmVTdHlsZXMgPSBmdW5jdGlvbiAoY29tcG9uZW50LCAvLyBSZWFjdENvbXBvbmVudCwgZmxvdytlc2xpbnQgY29tcGxhaW5pbmdcbnJlbmRlcmVkRWxlbWVudCkge1xuICB2YXIgLy8gUmVhY3RFbGVtZW50XG4gIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfQ09ORklHIDogYXJndW1lbnRzWzJdO1xuICB2YXIgZXhpc3RpbmdLZXlNYXAgPSBhcmd1bWVudHNbM107XG4gIHZhciBzaG91bGRDaGVja0JlZm9yZVJlc29sdmUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDQgfHwgYXJndW1lbnRzWzRdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1s0XTtcbiAgLy8gUmVhY3RFbGVtZW50XG4gIGV4aXN0aW5nS2V5TWFwID0gZXhpc3RpbmdLZXlNYXAgfHwge307XG4gIGlmICghcmVuZGVyZWRFbGVtZW50IHx8XG4gIC8vIEJhaWwgaWYgd2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgdGhpcyBlbGVtZW50LiBUaGlzIGVuc3VyZXMgdGhhdCBvbmx5IHRoZVxuICAvLyBvd25lciBvZiBhbiBlbGVtZW50IHByb2Nlc3NlcyB0aGF0IGVsZW1lbnQsIHNpbmNlIHRoZSBvd25lcidzIHJlbmRlclxuICAvLyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBmaXJzdCAod2hpY2ggd2lsbCBhbHdheXMgYmUgdGhlIGNhc2UsIHNpbmNlIHlvdVxuICAvLyBjYW4ndCBrbm93IHdoYXQgZWxzZSB0byByZW5kZXIgdW50aWwgeW91IHJlbmRlciB0aGUgcGFyZW50IGNvbXBvbmVudCkuXG4gIHJlbmRlcmVkRWxlbWVudC5wcm9wcyAmJiByZW5kZXJlZEVsZW1lbnQucHJvcHMuX3JhZGl1bURpZFJlc29sdmVTdHlsZXMgfHxcblxuICAvLyBCYWlsIGlmIHRoaXMgZWxlbWVudCBpcyBhIHJhZGl1bSBlbmhhbmNlZCBlbGVtZW50LCBiZWNhdXNlIGlmIGl0IGlzLFxuICAvLyB0aGVuIGl0IHdpbGwgdGFrZSBjYXJlIG9mIHJlc29sdmluZyBpdHMgb3duIHN0eWxlcy5cbiAgc2hvdWxkQ2hlY2tCZWZvcmVSZXNvbHZlICYmICFfc2hvdWxkUmVzb2x2ZVN0eWxlcyhyZW5kZXJlZEVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIHJlbmRlcmVkRWxlbWVudDtcbiAgfVxuXG4gIHZhciBuZXdDaGlsZHJlbiA9IF9yZXNvbHZlQ2hpbGRyZW4oe1xuICAgIGNoaWxkcmVuOiByZW5kZXJlZEVsZW1lbnQucHJvcHMuY2hpbGRyZW4sXG4gICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgY29uZmlnOiBjb25maWcsXG4gICAgZXhpc3RpbmdLZXlNYXA6IGV4aXN0aW5nS2V5TWFwXG4gIH0pO1xuXG4gIHZhciBuZXdQcm9wcyA9IF9yZXNvbHZlUHJvcHMoe1xuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIGNvbmZpZzogY29uZmlnLFxuICAgIGV4aXN0aW5nS2V5TWFwOiBleGlzdGluZ0tleU1hcCxcbiAgICBwcm9wczogcmVuZGVyZWRFbGVtZW50LnByb3BzXG4gIH0pO1xuXG4gIG5ld1Byb3BzID0gX3J1blBsdWdpbnMoe1xuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIGNvbmZpZzogY29uZmlnLFxuICAgIGV4aXN0aW5nS2V5TWFwOiBleGlzdGluZ0tleU1hcCxcbiAgICBwcm9wczogbmV3UHJvcHMsXG4gICAgcmVuZGVyZWRFbGVtZW50OiByZW5kZXJlZEVsZW1lbnRcbiAgfSk7XG5cbiAgLy8gSWYgbm90aGluZyBjaGFuZ2VkLCBkb24ndCBib3RoZXIgY2xvbmluZyB0aGUgZWxlbWVudC4gTWlnaHQgYmUgYSBiaXRcbiAgLy8gd2FzdGVmdWwsIGFzIHdlIGFkZCB0aGUgc2VudGluYWwgdG8gc3RvcCBkb3VibGUtcHJvY2Vzc2luZyB3aGVuIHdlIGNsb25lLlxuICAvLyBBc3N1bWUgYmVuaWduIGRvdWJsZS1wcm9jZXNzaW5nIGlzIGJldHRlciB0aGFuIHVubmVlZGVkIGNsb25pbmcuXG4gIGlmIChuZXdDaGlsZHJlbiA9PT0gcmVuZGVyZWRFbGVtZW50LnByb3BzLmNoaWxkcmVuICYmIG5ld1Byb3BzID09PSByZW5kZXJlZEVsZW1lbnQucHJvcHMpIHtcbiAgICByZXR1cm4gcmVuZGVyZWRFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIF9jbG9uZUVsZW1lbnQocmVuZGVyZWRFbGVtZW50LCBuZXdQcm9wcyAhPT0gcmVuZGVyZWRFbGVtZW50LnByb3BzID8gbmV3UHJvcHMgOiB7fSwgbmV3Q2hpbGRyZW4pO1xufTtcblxuLy8gT25seSBmb3IgdXNlIGJ5IHRlc3RzXG5yZXNvbHZlU3R5bGVzLl9fY2xlYXJTdGF0ZUZvclRlc3RzID0gZnVuY3Rpb24gKCkge1xuICBnbG9iYWxTdGF0ZSA9IHt9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcmVzb2x2ZVN0eWxlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvcmVzb2x2ZS1zdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgbmV3LWNhcCAqL1xuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJhZGl1bSBmcm9tIFwicmFkaXVtXCI7XG5cbmNvbnN0IENlbGwgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtwcm9wcy5zdHlsZX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBob3Jpem9udGFsUHJvcFR5cGUgPSBQcm9wVHlwZXMub25lT2YoW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdKTtcbmNvbnN0IHZlcnRpY2FsUHJvcFR5cGUgPSBQcm9wVHlwZXMub25lT2YoW1widG9wXCIsIFwibWlkZGxlXCIsIFwiYm90dG9tXCJdKTtcbkNlbGwucHJvcFR5cGVzID0ge1xuICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaG9yaXpvbnRhbEFsaWduOiBob3Jpem9udGFsUHJvcFR5cGUsXG4gIHZlcnRpY2FsQWxpZ246IHZlcnRpY2FsUHJvcFR5cGUsXG5cbiAgc21hbGxXaWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc21hbGxIb3Jpem9udGFsQWxpZ246IGhvcml6b250YWxQcm9wVHlwZSxcbiAgc21hbGxWZXJ0aWNhbEFsaWduOiB2ZXJ0aWNhbFByb3BUeXBlLFxuXG4gIG1lZGl1bVdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZWRpdW1Ib3Jpem9udGFsQWxpZ246IGhvcml6b250YWxQcm9wVHlwZSxcbiAgbWVkaXVtVmVydGljYWxBbGlnbjogdmVydGljYWxQcm9wVHlwZSxcblxuICBsYXJnZVdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYXJnZUhvcml6b250YWxBbGlnbjogaG9yaXpvbnRhbFByb3BUeXBlLFxuICBsYXJnZVZlcnRpY2FsQWxpZ246IHZlcnRpY2FsUHJvcFR5cGUsXG5cbiAgeGxhcmdlV2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHhsYXJnZUhvcml6b250YWxBbGlnbjogaG9yaXpvbnRhbFByb3BUeXBlLFxuICB4bGFyZ2VWZXJ0aWNhbEFsaWduOiB2ZXJ0aWNhbFByb3BUeXBlLFxuXG4gIG9yZGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShDZWxsKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvY2VsbC5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSYWRpdW0gZnJvbSBcInJhZGl1bVwiO1xuaW1wb3J0IHJlc29sdmVDZWxscyBmcm9tIFwiLi91dGlsL3Jlc29sdmUtY2VsbHNcIjtcblxuY29uc3QgR3JpZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgLi4ucHJvcHMuc3R5bGUsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIlxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzfT5cbiAgICAgIHtyZXNvbHZlQ2VsbHMocHJvcHMpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuR3JpZC5wcm9wVHlwZXMgPSB7XG4gIGNlbGxXaWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2VsbEFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjZWxsVmVydGljYWxBbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICBzbWFsbENlbGxXaWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc21hbGxDZWxsQWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNtYWxsQ2VsbFZlcnRpY2FsQWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgbWVkaXVtQ2VsbFdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZWRpdW1DZWxsQWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lZGl1bUNlbGxWZXJ0aWNhbEFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIGxhcmdlQ2VsbFdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYXJnZUNlbGxBbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFyZ2VDZWxsVmVydGljYWxBbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICB4bGFyZ2VDZWxsV2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHhsYXJnZUNlbGxBbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgeGxhcmdlQ2VsbFZlcnRpY2FsQWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgYnJlYWtwb2ludHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc21hbGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWVkaXVtOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhcmdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHhsYXJnZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9KSxcblxuICBndXR0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufTtcblxuR3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNlbGxXaWR0aDogXCIxLzNcIixcbiAgY2VsbEFsaWduOiBcImxlZnRcIixcbiAgY2VsbFZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG5cbiAgYnJlYWtwb2ludHM6IHtcbiAgICBzbWFsbDogXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KVwiLFxuICAgIG1lZGl1bTogXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KVwiLFxuICAgIGxhcmdlOiBcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KVwiLFxuICAgIHhsYXJnZTogXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweClcIlxuICB9LFxuXG4gIGd1dHRlcjogXCIxNnB4XCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGl1bShHcmlkKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZ3JpZC5qc1xuICoqLyIsImNvbnN0IHBydW5lID0gKG9iamVjdCkgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSB1bmRlZmluZWQgPyBhY2MgOiB7Li4uYWNjLCBba2V5XTogb2JqZWN0W2tleV19O1xuICB9LCB7fSk7XG59O1xuXG5jb25zdCByZXNvbHZlQ2VsbERlZmF1bHRzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGdyaWREZWZhdWx0ID0ge1xuICAgIHdpZHRoOiBwcm9wcy5jZWxsV2lkdGgsXG4gICAgaG9yaXpvbnRhbEFsaWduOiBwcm9wcy5jZWxsQWxpZ24sXG4gICAgdmVydGljYWxBbGlnbjogcHJvcHMuY2VsbFZlcnRpY2FsQWxpZ24sXG4gICAgZ3V0dGVyOiBwcm9wcy5ndXR0ZXJcbiAgfTtcblxuICBjb25zdCBjZWxsRGVmYXVsdCA9IHtcbiAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgaG9yaXpvbnRhbEFsaWduOiBwcm9wcy5hbGlnbixcbiAgICB2ZXJ0aWNhbEFsaWduOiBwcm9wcy52ZXJ0aWNhbEFsaWduLFxuICAgIG9yZGVyOiBwcm9wcy5vcmRlclxuICB9O1xuXG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gW1wic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiLCBcInhsYXJnZVwiXS5tYXAoKHNpemUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVkaWFRdWVyeTogcHJvcHMuYnJlYWtwb2ludHNbc2l6ZV0sXG4gICAgICBncmlkQnJlYWtwb2ludERlZmF1bHQ6IHtcbiAgICAgICAgd2lkdGg6IHByb3BzW2Ake3NpemV9Q2VsbFdpZHRoYF0sXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogcHJvcHNbYCR7c2l6ZX1DZWxsQWxpZ25gXSxcbiAgICAgICAgdmVydGljYWxBbGlnbjogcHJvcHNbYCR7c2l6ZX1DZWxsVmVydGljYWxBbGlnbmBdXG4gICAgICB9LFxuICAgICAgY2VsbEJyZWFrcG9pbnREZWZhdWx0OiB7XG4gICAgICAgIHdpZHRoOiBwcm9wc1tgJHtzaXplfVdpZHRoYF0sXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogcHJvcHNbYCR7c2l6ZX1BbGlnbmBdLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiBwcm9wc1tgJHtzaXplfVZlcnRpY2FsQWxpZ25gXVxuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBicmVha3BvaW50cy5yZWR1Y2UoKGFjYywgYnJlYWtwb2ludCkgPT4ge1xuICAgIC8vIEV4dHJhY3QgdGhlIG1lZGlhIHF1ZXJ5IGFuZCB0aGUgYnJlYWtwb2ludCBjZWxsIGNvbmZpZ3NcbiAgICBjb25zdCB7XG4gICAgICBtZWRpYVF1ZXJ5LFxuICAgICAgZ3JpZEJyZWFrcG9pbnREZWZhdWx0LFxuICAgICAgY2VsbEJyZWFrcG9pbnREZWZhdWx0XG4gICAgfSA9IGJyZWFrcG9pbnQ7XG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGZpbmFsIGNlbGwgY29uZmlndXJhdGlvbi5cbiAgICAvLyBVc2VzIHRoZXNlIHNvdXJjZXMgZm9yIGNlbGwgc3R5bGVzLCBpbiBvcmRlciBvZiBwcmVjZWRlbmNlOlxuICAgIC8vIC0gR3JpZCBkZWZhdWx0XG4gICAgLy8gLSBHcmlkIGJyZWFrcG9pbnQgZGVmYXVsdFxuICAgIC8vIC0gQ2VsbCBkZWZhdWx0XG4gICAgLy8gLSBDZWxsIGJyZWFrcG9pbnQgZGVmYXVsdFxuICAgIGNvbnN0IGNlbGxDb25maWcgPSB7XG4gICAgICAuLi5wcnVuZShncmlkRGVmYXVsdCksXG4gICAgICAuLi5wcnVuZShncmlkQnJlYWtwb2ludERlZmF1bHQpLFxuICAgICAgLi4ucHJ1bmUoY2VsbERlZmF1bHQpLFxuICAgICAgLi4ucHJ1bmUoY2VsbEJyZWFrcG9pbnREZWZhdWx0KVxuICAgIH07XG5cbiAgICByZXR1cm4gey4uLmFjYywgW21lZGlhUXVlcnldOiBjZWxsQ29uZmlnfTtcbiAgfSwge30pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZUNlbGxEZWZhdWx0cztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdXRpbC9yZXNvbHZlLWNlbGwtZGVmYXVsdHMuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1tYWdpYy1udW1iZXJzICovXG5pbXBvcnQgeyBtZXJnZVN0eWxlcyB9IGZyb20gXCJyYWRpdW0vbGliL21lcmdlLXN0eWxlc1wiO1xuaW1wb3J0IHBhcnNlRnJhY3Rpb24gZnJvbSBcIi4vcGFyc2UtZnJhY3Rpb25cIjtcblxuY29uc3QgcGFyc2VVbml0ID0gKHZhbHVlKSA9PiB7XG4gIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjg2ODk0Ny9zcGxpdDFweC1pbnRvLTFweC0xLXB4LWluLWphdmFzY3JpcHRcbiAgY29uc3QgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKC9eKFxcZCsoPzpcXC5cXGQrKT8pKC4qKSQvKTtcbiAgY29uc3QgWywgbnVtYmVyLCB1bml0XSA9IG1hdGNoZXM7XG4gIHJldHVybiB7IG51bWJlciwgdW5pdCB9O1xufTtcblxuY29uc3QgcmVzb2x2ZUNlbGxHdXR0ZXIgPSAoeyBndXR0ZXIsIGNvbHVtbkNvdW50IH0pID0+IHtcbiAgY29uc3QgeyBudW1iZXIsIHVuaXQgfSA9IHBhcnNlVW5pdChndXR0ZXIpO1xuICByZXR1cm4gYCR7KG51bWJlciAtIChudW1iZXIgLyBjb2x1bW5Db3VudCkpfSR7dW5pdH1gO1xufTtcblxuY29uc3QgcmVzb2x2ZUNlbGxGbGV4QmFzaXMgPSAoeyB3aWR0aCwgZ3V0dGVyLCBjb2x1bW5Db3VudCB9KSA9PiB7XG4gIGNvbnN0IE1VTFRJUExJRVIgPSAxMDA7XG5cbiAgLy8gRnVsbC13aWR0aCBjZWxscyBoYXZlIG5vIGd1dHRlclxuICBpZiAod2lkdGggPT09IDEpIHtcbiAgICByZXR1cm4gXCIxMDAlXCI7XG4gIH1cblxuICBjb25zdCBmaW5hbEd1dHRlciA9IHJlc29sdmVDZWxsR3V0dGVyKHsgZ3V0dGVyLCBjb2x1bW5Db3VudCB9KTtcblxuICByZXR1cm4gYGNhbGMoJHt3aWR0aCAqIE1VTFRJUExJRVJ9JSAtICR7ZmluYWxHdXR0ZXJ9KWA7XG59O1xuXG4vLyBNZXJnZSBSYWRpdW0gc3R5bGUgYXJyYXlzIGFuZCBsZWF2ZVxuLy8gbm9ybWFsIHN0eWxlIG9iamVjdHMgdW50b3VjaGVkXG5jb25zdCByZXNvbHZlUHJvcFN0eWxlcyA9IChzdHlsZXMpID0+IHtcbiAgaWYgKHN0eWxlcyAmJiBBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcbiAgICByZXR1cm4gbWVyZ2VTdHlsZXMoc3R5bGVzKTtcbiAgfVxuICByZXR1cm4gc3R5bGVzID8gc3R5bGVzIDoge307XG59O1xuXG5jb25zdCByZXNvbHZlQ2VsbFN0eWxlcyA9IChwcm9wcykgPT4ge1xuICAvLyBUcmFuc2xhdGUgZ3JpZC1zcGVhayB0byBmbGV4Ym94LXNwZWFrXG4gIGNvbnN0IGFsaWdubWVudE1hcCA9IHtcbiAgICBsZWZ0OiBcImZsZXgtc3RhcnRcIixcbiAgICBjZW50ZXI6IFwiY2VudGVyXCIsXG4gICAgcmlnaHQ6IFwiZmxleC1lbmRcIixcbiAgICB0b3A6IFwiZmxleC1zdGFydFwiLFxuICAgIG1pZGRsZTogXCJjZW50ZXJcIixcbiAgICBib3R0b206IFwiZmxleC1lbmRcIlxuICB9O1xuXG4gIGNvbnN0IG1lZGlhUXVlcmllcyA9IE9iamVjdC5rZXlzKHByb3BzKVxuICAgIC5maWx0ZXIoKGtleSkgPT4ga2V5LmluZGV4T2YoXCJAbWVkaWFcIikgIT09IC0xKTtcblxuICByZXR1cm4gbWVkaWFRdWVyaWVzLnJlZHVjZSgoYWNjLCBtZWRpYVF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgYnJlYWtwb2ludFN0eWxlcyA9IHByb3BzW21lZGlhUXVlcnldO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIFttZWRpYVF1ZXJ5XToge1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleEJhc2lzOiByZXNvbHZlQ2VsbEZsZXhCYXNpcyh7XG4gICAgICAgICAgd2lkdGg6IHBhcnNlRnJhY3Rpb24oYnJlYWtwb2ludFN0eWxlcy53aWR0aCksXG4gICAgICAgICAgZ3V0dGVyOiBicmVha3BvaW50U3R5bGVzLmd1dHRlcixcbiAgICAgICAgICBjb2x1bW5Db3VudDogYnJlYWtwb2ludFN0eWxlcy5jb2x1bW5Db3VudFxuICAgICAgICB9KSxcbiAgICAgICAgYWxpZ25JdGVtczogYWxpZ25tZW50TWFwW2JyZWFrcG9pbnRTdHlsZXMudmVydGljYWxBbGlnbl0sXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBhbGlnbm1lbnRNYXBbYnJlYWtwb2ludFN0eWxlcy5ob3Jpem9udGFsQWxpZ25dLFxuICAgICAgICBvcmRlcjogYnJlYWtwb2ludFN0eWxlcy5vcmRlciA/IGJyZWFrcG9pbnRTdHlsZXMub3JkZXIgOiBcImluaXRpYWxcIlxuICAgICAgfVxuICAgIH07XG4gIH0sIHJlc29sdmVQcm9wU3R5bGVzKHByb3BzLnN0eWxlKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlQ2VsbFN0eWxlcztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdXRpbC9yZXNvbHZlLWNlbGwtc3R5bGVzLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcmVzb2x2ZUNlbGxEZWZhdWx0cyBmcm9tIFwiLi9yZXNvbHZlLWNlbGwtZGVmYXVsdHNcIjtcbmltcG9ydCByZXNvbHZlQ29sdW1uQ291bnRzIGZyb20gXCIuL3Jlc29sdmUtY29sdW1uLWNvdW50c1wiO1xuaW1wb3J0IHJlc29sdmVDZWxsU3R5bGVzIGZyb20gXCIuL3Jlc29sdmUtY2VsbC1zdHlsZXNcIjtcblxuY29uc3QgcmVzb2x2ZUNlbGxzID0gKHByb3BzKSA9PiB7XG4gIC8vIFJlc29sdmUgdGhlIGZpbmFsIHN0eWxlIGRlZmF1bHRzIGZvciBlYWNoIGNlbGxcbiAgY29uc3Qge2NoaWxkcmVuLCBzdHlsZSwgLi4uY2hpbGRQcm9wcyB9ID0gcHJvcHM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29uc3QgY2hpbGRyZW5XaXRoRGVmYXVsdHMgPSBDaGlsZHJlbi5tYXAoXG4gICAgcHJvcHMuY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcmVzb2x2ZUNlbGxEZWZhdWx0cyhcbiAgICAgICAgey4uLmNoaWxkUHJvcHMsIC4uLmNoaWxkLnByb3BzfSlcbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIC8vIEFkZCBjb2x1bW4gY291bnRzIHRvIGVhY2ggY2VsbCdzIHByb3BzXG4gIGNvbnN0IGNoaWxkcmVuV2l0aENvbHVtbkNvdW50cyA9IHJlc29sdmVDb2x1bW5Db3VudHMoe1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbldpdGhEZWZhdWx0cyxcbiAgICBicmVha3BvaW50czogcHJvcHMuYnJlYWtwb2ludHNcbiAgfSk7XG5cbiAgLy8gUmVzb2x2ZSB0aGUgZmluYWwgY2VsbCBzdHlsZXNcbiAgcmV0dXJuIENoaWxkcmVuLm1hcChjaGlsZHJlbldpdGhDb2x1bW5Db3VudHMsIChjaGlsZCkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIHN0eWxlOiByZXNvbHZlQ2VsbFN0eWxlcyhjaGlsZC5wcm9wcylcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlQ2VsbHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3V0aWwvcmVzb2x2ZS1jZWxscy5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgaW5pdGlhbCBmcm9tIFwibG9kYXNoLmluaXRpYWxcIjtcbmltcG9ydCBsYXN0IGZyb20gXCJsb2Rhc2gubGFzdFwiO1xuaW1wb3J0IHBhcnNlRnJhY3Rpb24gZnJvbSBcIi4vcGFyc2UtZnJhY3Rpb25cIjtcblxuY29uc3QgcmVzb2x2ZUNvbHVtbkNvdW50cyA9ICh7IGNoaWxkcmVuLCBicmVha3BvaW50cyB9KSA9PiB7XG4gIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBjb2x1bW4gY291bnRzIHRoYXQgbWF0Y2hlc1xuICAvLyB0aGUgaW5kaWNlcyBvZiB0aGUgY2VsbCBhcnJheS4gVGhpcyB3YXksIGVhY2hcbiAgLy8gY2VsbCBrbm93cyBhYm91dCBob3cgbWFueSBjb2x1bW5zIGl0cyBwYXJlbnRcbiAgLy8gcm93IGNvbnRhaW5zIGFuZCB0aGVyZWZvcmUgY2FuIGNhbGN1bGF0ZVxuICAvLyBndXR0ZXJzIGNvcnJlY3RseS5cblxuICAvLyBUaGUgZGF0YSBwaXBlbGluZSBsb29rcyBsaWtlIHRoaXM6XG4gIC8vIFtbQ2VsbFByb3BzLCBDZWxsUHJvcHNdLCBbQ2VsbFByb3BzLCBDZWxsUHJvcHMsIENlbGxQcm9wc11dIC0+XG4gIC8vIFtbMiwgMl0sIFszLCAzLCAzXV0gLT5cbiAgLy8gWzIsIDIsIDMsIDMsIDNdXG5cbiAgLy8gVGhlIGluZGljZXMgb2YgdGhlIGZpbmFsIGFycmF5IGFsaWduIHdpdGggdGhlXG4gIC8vIGluZGljZXMgb2YgdGhlIGNoaWxkIGNlbGwgYXJyYXkuXG4gIGNvbnN0IGNvbHVtbkNvdW50cyA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKVxuICAgIC5yZWR1Y2UoKGFsbCwgYnJlYWtwb2ludCkgPT4ge1xuICAgICAgY29uc3QgbWVkaWFRdWVyeSA9IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWxsLFxuICAgICAgICBbbWVkaWFRdWVyeV06IGNoaWxkcmVuLnJlZHVjZSgoYWNjLCBjZWxsKSA9PiB7XG4gICAgICAgICAgY29uc3QgYnJlYWtwb2ludENlbGwgPSBjZWxsLnByb3BzW21lZGlhUXVlcnldO1xuXG4gICAgICAgICAgLy8gT24gdGhlIGZpcnN0IGZvbGQsIGFkZCBhIG5ldyBzdWJhcnJheVxuICAgICAgICAgIC8vIHdpdGggdGhlIGZpcnN0IGNlbGwgcHJvcHMuXG4gICAgICAgICAgaWYgKCFhY2MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1ticmVha3BvaW50Q2VsbF1dO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHJlc3QgPSBpbml0aWFsKGFjYyk7XG4gICAgICAgICAgY29uc3Qgcm93ID0gbGFzdChhY2MpO1xuXG4gICAgICAgICAgLy8gSWYgdGhlIHN1bSBvZiB0aGUgY3VycmVudCBhbmQgcHJldmlvdXNcbiAgICAgICAgICAvLyBjZWxscyBpcyBndGUgMSwgbGVhdmUgdGhlIGN1cnJlbnRcbiAgICAgICAgICAvLyBzdWJhcnJheSBhbmQgc3RhcnQgYSBuZXcgb25lIHdpdGhcbiAgICAgICAgICAvLyB0aGUgY3VycmVudCBjZWxsXG4gICAgICAgICAgY29uc3Qgc3VtID0gcm93XG4gICAgICAgICAgICAubWFwKChjb2x1bW4pID0+IHBhcnNlRnJhY3Rpb24oY29sdW1uLndpZHRoKSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKHByZXZpb3VzLCB3aWR0aCkgPT4gcHJldmlvdXMgKyB3aWR0aCk7XG4gICAgICAgICAgaWYgKHN1bSA+PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLmFjYywgW2JyZWFrcG9pbnRDZWxsXV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFsuLi5yZXN0LCBbLi4ucm93LCBicmVha3BvaW50Q2VsbF1dO1xuICAgICAgICB9LCBbXSlcbiAgICAgICAgLm1hcCgocm93KSA9PiByb3cubWFwKCgpID0+IHJvdy5sZW5ndGgpKVxuICAgICAgICAucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjLmNvbmNhdChyb3cpKVxuICAgICAgfTtcbiAgICB9LCB7fSk7XG5cbiAgLy8gQWRkIHRoZSBjb2x1bW4gY291bnRzIHRvIHRoZSBjZWxsIHByb3BzLlxuICByZXR1cm4gQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2VsbCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9wc1dpdGhDb2x1bW5Db3VudHMgPSBPYmplY3Qua2V5cyhjb2x1bW5Db3VudHMpXG4gICAgICAucmVkdWNlKChhY2MsIGJyZWFrcG9pbnQpID0+IHtcbiAgICAgICAgY29uc3QgY29sdW1uQ291bnQgPSBjb2x1bW5Db3VudHNbYnJlYWtwb2ludF1baW5kZXhdO1xuICAgICAgICBjb25zdCBjZWxsUHJvcHMgPSBjZWxsLnByb3BzW2JyZWFrcG9pbnRdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmFjYyxcbiAgICAgICAgICBbYnJlYWtwb2ludF06IHsuLi5jZWxsUHJvcHMsIGNvbHVtbkNvdW50fVxuICAgICAgICB9O1xuICAgICAgfSwge30pO1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2VsbCwgcHJvcHNXaXRoQ29sdW1uQ291bnRzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlQ29sdW1uQ291bnRzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy91dGlsL3Jlc29sdmUtY29sdW1uLWNvdW50cy5qc1xuICoqLyIsImltcG9ydCBHcmlkSW1wb3J0IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZFwiO1xuaW1wb3J0IENlbGxJbXBvcnQgZnJvbSBcIi4vY29tcG9uZW50cy9jZWxsXCI7XG5cbmV4cG9ydCBjb25zdCBHcmlkID0gR3JpZEltcG9ydDtcbmV4cG9ydCBjb25zdCBDZWxsID0gQ2VsbEltcG9ydDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiLyohXG4gICogQm93c2VyIC0gYSBicm93c2VyIGRldGVjdG9yXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2RlZC9ib3dzZXJcbiAgKiBNSVQgTGljZW5zZSB8IChjKSBEdXN0aW4gRGlheiAyMDE1XG4gICovXG5cbiFmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIHRoaXNbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0oJ2Jvd3NlcicsIGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAgKiBTZWUgdXNlcmFnZW50cy5qcyBmb3IgZXhhbXBsZXMgb2YgbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICovXG5cbiAgdmFyIHQgPSB0cnVlXG5cbiAgZnVuY3Rpb24gZGV0ZWN0KHVhKSB7XG5cbiAgICBmdW5jdGlvbiBnZXRGaXJzdE1hdGNoKHJlZ2V4KSB7XG4gICAgICB2YXIgbWF0Y2ggPSB1YS5tYXRjaChyZWdleCk7XG4gICAgICByZXR1cm4gKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEgJiYgbWF0Y2hbMV0pIHx8ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNlY29uZE1hdGNoKHJlZ2V4KSB7XG4gICAgICB2YXIgbWF0Y2ggPSB1YS5tYXRjaChyZWdleCk7XG4gICAgICByZXR1cm4gKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEgJiYgbWF0Y2hbMl0pIHx8ICcnO1xuICAgIH1cblxuICAgIHZhciBpb3NkZXZpY2UgPSBnZXRGaXJzdE1hdGNoKC8oaXBvZHxpcGhvbmV8aXBhZCkvaSkudG9Mb3dlckNhc2UoKVxuICAgICAgLCBsaWtlQW5kcm9pZCA9IC9saWtlIGFuZHJvaWQvaS50ZXN0KHVhKVxuICAgICAgLCBhbmRyb2lkID0gIWxpa2VBbmRyb2lkICYmIC9hbmRyb2lkL2kudGVzdCh1YSlcbiAgICAgICwgY2hyb21lQm9vayA9IC9Dck9TLy50ZXN0KHVhKVxuICAgICAgLCBlZGdlVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL2VkZ2VcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICAsIHZlcnNpb25JZGVudGlmaWVyID0gZ2V0Rmlyc3RNYXRjaCgvdmVyc2lvblxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgICwgdGFibGV0ID0gL3RhYmxldC9pLnRlc3QodWEpXG4gICAgICAsIG1vYmlsZSA9ICF0YWJsZXQgJiYgL1teLV1tb2JpL2kudGVzdCh1YSlcbiAgICAgICwgcmVzdWx0XG5cbiAgICBpZiAoL29wZXJhfG9wci9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdPcGVyYSdcbiAgICAgICwgb3BlcmE6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvKD86b3BlcmF8b3ByKVtcXHNcXC9dKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgveWFicm93c2VyL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1lhbmRleCBCcm93c2VyJ1xuICAgICAgLCB5YW5kZXhicm93c2VyOiB0XG4gICAgICAsIHZlcnNpb246IHZlcnNpb25JZGVudGlmaWVyIHx8IGdldEZpcnN0TWF0Y2goLyg/OnlhYnJvd3NlcilbXFxzXFwvXShcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3dpbmRvd3MgcGhvbmUvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnV2luZG93cyBQaG9uZSdcbiAgICAgICwgd2luZG93c3Bob25lOiB0XG4gICAgICB9XG4gICAgICBpZiAoZWRnZVZlcnNpb24pIHtcbiAgICAgICAgcmVzdWx0Lm1zZWRnZSA9IHRcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBlZGdlVmVyc2lvblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlc3VsdC5tc2llID0gdFxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL2llbW9iaWxlXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvbXNpZXx0cmlkZW50L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0ludGVybmV0IEV4cGxvcmVyJ1xuICAgICAgLCBtc2llOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/Om1zaWUgfHJ2OikoXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaHJvbWVCb29rKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdDaHJvbWUnXG4gICAgICAsIGNocm9tZUJvb2s6IHRcbiAgICAgICwgY2hyb21lOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmNocm9tZXxjcmlvc3xjcm1vKVxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKC9jaHJvbWUuKz8gZWRnZS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdNaWNyb3NvZnQgRWRnZSdcbiAgICAgICwgbXNlZGdlOiB0XG4gICAgICAsIHZlcnNpb246IGVkZ2VWZXJzaW9uXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9jaHJvbWV8Y3Jpb3N8Y3Jtby9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdDaHJvbWUnXG4gICAgICAsIGNocm9tZTogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpjaHJvbWV8Y3Jpb3N8Y3JtbylcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlvc2RldmljZSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lIDogaW9zZGV2aWNlID09ICdpcGhvbmUnID8gJ2lQaG9uZScgOiBpb3NkZXZpY2UgPT0gJ2lwYWQnID8gJ2lQYWQnIDogJ2lQb2QnXG4gICAgICB9XG4gICAgICAvLyBXVEY6IHZlcnNpb24gaXMgbm90IHBhcnQgb2YgdXNlciBhZ2VudCBpbiB3ZWIgYXBwc1xuICAgICAgaWYgKHZlcnNpb25JZGVudGlmaWVyKSB7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3NhaWxmaXNoL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1NhaWxmaXNoJ1xuICAgICAgLCBzYWlsZmlzaDogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC9zYWlsZmlzaFxccz9icm93c2VyXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvc2VhbW9ua2V5XFwvL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1NlYU1vbmtleSdcbiAgICAgICwgc2VhbW9ua2V5OiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goL3NlYW1vbmtleVxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2ZpcmVmb3h8aWNld2Vhc2VsL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0ZpcmVmb3gnXG4gICAgICAsIGZpcmVmb3g6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86ZmlyZWZveHxpY2V3ZWFzZWwpWyBcXC9dKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgICAgaWYgKC9cXCgobW9iaWxlfHRhYmxldCk7W15cXCldKnJ2OltcXGRcXC5dK1xcKS9pLnRlc3QodWEpKSB7XG4gICAgICAgIHJlc3VsdC5maXJlZm94b3MgPSB0XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9zaWxrL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9ICB7XG4gICAgICAgIG5hbWU6ICdBbWF6b24gU2lsaydcbiAgICAgICwgc2lsazogdFxuICAgICAgLCB2ZXJzaW9uIDogZ2V0Rmlyc3RNYXRjaCgvc2lsa1xcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYW5kcm9pZCkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnQW5kcm9pZCdcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3BoYW50b20vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnUGhhbnRvbUpTJ1xuICAgICAgLCBwaGFudG9tOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goL3BoYW50b21qc1xcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2JsYWNrYmVycnl8XFxiYmJcXGQrL2kudGVzdCh1YSkgfHwgL3JpbVxcc3RhYmxldC9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdCbGFja0JlcnJ5J1xuICAgICAgLCBibGFja2JlcnJ5OiB0XG4gICAgICAsIHZlcnNpb246IHZlcnNpb25JZGVudGlmaWVyIHx8IGdldEZpcnN0TWF0Y2goL2JsYWNrYmVycnlbXFxkXStcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC8od2VifGhwdylvcy9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdXZWJPUydcbiAgICAgICwgd2Vib3M6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvdyg/OmViKT9vc2Jyb3dzZXJcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9O1xuICAgICAgL3RvdWNocGFkXFwvL2kudGVzdCh1YSkgJiYgKHJlc3VsdC50b3VjaHBhZCA9IHQpXG4gICAgfVxuICAgIGVsc2UgaWYgKC9iYWRhL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0JhZGEnXG4gICAgICAsIGJhZGE6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvZG9sZmluXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoL3RpemVuL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1RpemVuJ1xuICAgICAgLCB0aXplbjogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzp0aXplblxccz8pP2Jyb3dzZXJcXC8oXFxkKyhcXC5cXGQrKT8pL2kpIHx8IHZlcnNpb25JZGVudGlmaWVyXG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNlIGlmICgvc2FmYXJpL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1NhZmFyaSdcbiAgICAgICwgc2FmYXJpOiB0XG4gICAgICAsIHZlcnNpb246IHZlcnNpb25JZGVudGlmaWVyXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBnZXRGaXJzdE1hdGNoKC9eKC4qKVxcLyguKikgLyksXG4gICAgICAgIHZlcnNpb246IGdldFNlY29uZE1hdGNoKC9eKC4qKVxcLyguKikgLylcbiAgICAgfTtcbiAgIH1cblxuICAgIC8vIHNldCB3ZWJraXQgb3IgZ2Vja28gZmxhZyBmb3IgYnJvd3NlcnMgYmFzZWQgb24gdGhlc2UgZW5naW5lc1xuICAgIGlmICghcmVzdWx0Lm1zZWRnZSAmJiAvKGFwcGxlKT93ZWJraXQvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0Lm5hbWUgPSByZXN1bHQubmFtZSB8fCBcIldlYmtpdFwiXG4gICAgICByZXN1bHQud2Via2l0ID0gdFxuICAgICAgaWYgKCFyZXN1bHQudmVyc2lvbiAmJiB2ZXJzaW9uSWRlbnRpZmllcikge1xuICAgICAgICByZXN1bHQudmVyc2lvbiA9IHZlcnNpb25JZGVudGlmaWVyXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghcmVzdWx0Lm9wZXJhICYmIC9nZWNrb1xcLy9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQubmFtZSA9IHJlc3VsdC5uYW1lIHx8IFwiR2Vja29cIlxuICAgICAgcmVzdWx0LmdlY2tvID0gdFxuICAgICAgcmVzdWx0LnZlcnNpb24gPSByZXN1bHQudmVyc2lvbiB8fCBnZXRGaXJzdE1hdGNoKC9nZWNrb1xcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICB9XG5cbiAgICAvLyBzZXQgT1MgZmxhZ3MgZm9yIHBsYXRmb3JtcyB0aGF0IGhhdmUgbXVsdGlwbGUgYnJvd3NlcnNcbiAgICBpZiAoIXJlc3VsdC5tc2VkZ2UgJiYgKGFuZHJvaWQgfHwgcmVzdWx0LnNpbGspKSB7XG4gICAgICByZXN1bHQuYW5kcm9pZCA9IHRcbiAgICB9IGVsc2UgaWYgKGlvc2RldmljZSkge1xuICAgICAgcmVzdWx0W2lvc2RldmljZV0gPSB0XG4gICAgICByZXN1bHQuaW9zID0gdFxuICAgIH1cblxuICAgIC8vIE9TIHZlcnNpb24gZXh0cmFjdGlvblxuICAgIHZhciBvc1ZlcnNpb24gPSAnJztcbiAgICBpZiAocmVzdWx0LndpbmRvd3NwaG9uZSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvd2luZG93cyBwaG9uZSAoPzpvcyk/XFxzPyhcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfSBlbHNlIGlmIChpb3NkZXZpY2UpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL29zIChcXGQrKFtfXFxzXVxcZCspKikgbGlrZSBtYWMgb3MgeC9pKTtcbiAgICAgIG9zVmVyc2lvbiA9IG9zVmVyc2lvbi5yZXBsYWNlKC9bX1xcc10vZywgJy4nKTtcbiAgICB9IGVsc2UgaWYgKGFuZHJvaWQpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL2FuZHJvaWRbIFxcLy1dKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC53ZWJvcykge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvKD86d2VifGhwdylvc1xcLyhcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuYmxhY2tiZXJyeSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvcmltXFxzdGFibGV0XFxzb3NcXHMoXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmJhZGEpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL2JhZGFcXC8oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LnRpemVuKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC90aXplbltcXC9cXHNdKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9XG4gICAgaWYgKG9zVmVyc2lvbikge1xuICAgICAgcmVzdWx0Lm9zdmVyc2lvbiA9IG9zVmVyc2lvbjtcbiAgICB9XG5cbiAgICAvLyBkZXZpY2UgdHlwZSBleHRyYWN0aW9uXG4gICAgdmFyIG9zTWFqb3JWZXJzaW9uID0gb3NWZXJzaW9uLnNwbGl0KCcuJylbMF07XG4gICAgaWYgKHRhYmxldCB8fCBpb3NkZXZpY2UgPT0gJ2lwYWQnIHx8IChhbmRyb2lkICYmIChvc01ham9yVmVyc2lvbiA9PSAzIHx8IChvc01ham9yVmVyc2lvbiA9PSA0ICYmICFtb2JpbGUpKSkgfHwgcmVzdWx0LnNpbGspIHtcbiAgICAgIHJlc3VsdC50YWJsZXQgPSB0XG4gICAgfSBlbHNlIGlmIChtb2JpbGUgfHwgaW9zZGV2aWNlID09ICdpcGhvbmUnIHx8IGlvc2RldmljZSA9PSAnaXBvZCcgfHwgYW5kcm9pZCB8fCByZXN1bHQuYmxhY2tiZXJyeSB8fCByZXN1bHQud2Vib3MgfHwgcmVzdWx0LmJhZGEpIHtcbiAgICAgIHJlc3VsdC5tb2JpbGUgPSB0XG4gICAgfVxuXG4gICAgLy8gR3JhZGVkIEJyb3dzZXIgU3VwcG9ydFxuICAgIC8vIGh0dHA6Ly9kZXZlbG9wZXIueWFob28uY29tL3l1aS9hcnRpY2xlcy9nYnNcbiAgICBpZiAocmVzdWx0Lm1zZWRnZSB8fFxuICAgICAgICAocmVzdWx0Lm1zaWUgJiYgcmVzdWx0LnZlcnNpb24gPj0gMTApIHx8XG4gICAgICAgIChyZXN1bHQueWFuZGV4YnJvd3NlciAmJiByZXN1bHQudmVyc2lvbiA+PSAxNSkgfHxcbiAgICAgICAgKHJlc3VsdC5jaHJvbWUgJiYgcmVzdWx0LnZlcnNpb24gPj0gMjApIHx8XG4gICAgICAgIChyZXN1bHQuZmlyZWZveCAmJiByZXN1bHQudmVyc2lvbiA+PSAyMC4wKSB8fFxuICAgICAgICAocmVzdWx0LnNhZmFyaSAmJiByZXN1bHQudmVyc2lvbiA+PSA2KSB8fFxuICAgICAgICAocmVzdWx0Lm9wZXJhICYmIHJlc3VsdC52ZXJzaW9uID49IDEwLjApIHx8XG4gICAgICAgIChyZXN1bHQuaW9zICYmIHJlc3VsdC5vc3ZlcnNpb24gJiYgcmVzdWx0Lm9zdmVyc2lvbi5zcGxpdChcIi5cIilbMF0gPj0gNikgfHxcbiAgICAgICAgKHJlc3VsdC5ibGFja2JlcnJ5ICYmIHJlc3VsdC52ZXJzaW9uID49IDEwLjEpXG4gICAgICAgICkge1xuICAgICAgcmVzdWx0LmEgPSB0O1xuICAgIH1cbiAgICBlbHNlIGlmICgocmVzdWx0Lm1zaWUgJiYgcmVzdWx0LnZlcnNpb24gPCAxMCkgfHxcbiAgICAgICAgKHJlc3VsdC5jaHJvbWUgJiYgcmVzdWx0LnZlcnNpb24gPCAyMCkgfHxcbiAgICAgICAgKHJlc3VsdC5maXJlZm94ICYmIHJlc3VsdC52ZXJzaW9uIDwgMjAuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5zYWZhcmkgJiYgcmVzdWx0LnZlcnNpb24gPCA2KSB8fFxuICAgICAgICAocmVzdWx0Lm9wZXJhICYmIHJlc3VsdC52ZXJzaW9uIDwgMTAuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5pb3MgJiYgcmVzdWx0Lm9zdmVyc2lvbiAmJiByZXN1bHQub3N2ZXJzaW9uLnNwbGl0KFwiLlwiKVswXSA8IDYpXG4gICAgICAgICkge1xuICAgICAgcmVzdWx0LmMgPSB0XG4gICAgfSBlbHNlIHJlc3VsdC54ID0gdFxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgdmFyIGJvd3NlciA9IGRldGVjdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyA/IG5hdmlnYXRvci51c2VyQWdlbnQgOiAnJylcblxuICBib3dzZXIudGVzdCA9IGZ1bmN0aW9uIChicm93c2VyTGlzdCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnJvd3Nlckxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBicm93c2VySXRlbSA9IGJyb3dzZXJMaXN0W2ldO1xuICAgICAgaWYgKHR5cGVvZiBicm93c2VySXRlbT09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoYnJvd3Nlckl0ZW0gaW4gYm93c2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLypcbiAgICogU2V0IG91ciBkZXRlY3QgbWV0aG9kIHRvIHRoZSBtYWluIGJvd3NlciBvYmplY3Qgc28gd2UgY2FuXG4gICAqIHJldXNlIGl0IHRvIHRlc3Qgb3RoZXIgdXNlciBhZ2VudHMuXG4gICAqIFRoaXMgaXMgbmVlZGVkIHRvIGltcGxlbWVudCBmdXR1cmUgdGVzdHMuXG4gICAqL1xuICBib3dzZXIuX2RldGVjdCA9IGRldGVjdDtcblxuICByZXR1cm4gYm93c2VyXG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Jvd3Nlci9ib3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBCYXNlZCBvbiBjb2RlIHRoYXQgaXMgQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY2FuVXNlRE9NID0gISEoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuXHQpO1xuXG5cdHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuXHRcdGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG5cdFx0Y2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cblx0XHRjYW5Vc2VFdmVudExpc3RlbmVyczpcblx0XHRcdGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG5cdFx0Y2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW5cblxuXHR9O1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LkV4ZWN1dGlvbkVudmlyb25tZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH1cblxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2V4ZW52L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9wbHVnaW5zQ2FsYyA9IHJlcXVpcmUoJy4vcGx1Z2lucy9jYWxjJyk7XG5cbnZhciBfcGx1Z2luc0NhbGMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGx1Z2luc0NhbGMpO1xuXG52YXIgX3BsdWdpbnNDdXJzb3IgPSByZXF1aXJlKCcuL3BsdWdpbnMvY3Vyc29yJyk7XG5cbnZhciBfcGx1Z2luc0N1cnNvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zQ3Vyc29yKTtcblxudmFyIF9wbHVnaW5zRmxleCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Jyk7XG5cbnZhciBfcGx1Z2luc0ZsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGx1Z2luc0ZsZXgpO1xuXG52YXIgX3BsdWdpbnNTaXppbmcgPSByZXF1aXJlKCcuL3BsdWdpbnMvc2l6aW5nJyk7XG5cbnZhciBfcGx1Z2luc1NpemluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zU2l6aW5nKTtcblxudmFyIF9wbHVnaW5zR3JhZGllbnQgPSByZXF1aXJlKCcuL3BsdWdpbnMvZ3JhZGllbnQnKTtcblxudmFyIF9wbHVnaW5zR3JhZGllbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGx1Z2luc0dyYWRpZW50KTtcblxudmFyIF9wbHVnaW5zVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy90cmFuc2l0aW9uJyk7XG5cbnZhciBfcGx1Z2luc1RyYW5zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGx1Z2luc1RyYW5zaXRpb24pO1xuXG4vLyBzcGVjaWFsIGZsZXhib3ggc3BlY2lmaWNhdGlvbnNcblxudmFyIF9wbHVnaW5zRmxleGJveElFID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXhib3hJRScpO1xuXG52YXIgX3BsdWdpbnNGbGV4Ym94SUUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGx1Z2luc0ZsZXhib3hJRSk7XG5cbnZhciBfcGx1Z2luc0ZsZXhib3hPbGQgPSByZXF1aXJlKCcuL3BsdWdpbnMvZmxleGJveE9sZCcpO1xuXG52YXIgX3BsdWdpbnNGbGV4Ym94T2xkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsdWdpbnNGbGV4Ym94T2xkKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gW19wbHVnaW5zQ2FsYzJbJ2RlZmF1bHQnXSwgX3BsdWdpbnNDdXJzb3IyWydkZWZhdWx0J10sIF9wbHVnaW5zU2l6aW5nMlsnZGVmYXVsdCddLCBfcGx1Z2luc0dyYWRpZW50MlsnZGVmYXVsdCddLCBfcGx1Z2luc1RyYW5zaXRpb24yWydkZWZhdWx0J10sIF9wbHVnaW5zRmxleGJveElFMlsnZGVmYXVsdCddLCBfcGx1Z2luc0ZsZXhib3hPbGQyWydkZWZhdWx0J10sXG4vLyB0aGlzIG11c3QgYmUgcnVuIEFGVEVSIHRoZSBmbGV4Ym94IHNwZWNzXG5fcGx1Z2luc0ZsZXgyWydkZWZhdWx0J11dO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9QbHVnaW5zLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfdXRpbHNHZXRCcm93c2VySW5mb3JtYXRpb24gPSByZXF1aXJlKCcuL3V0aWxzL2dldEJyb3dzZXJJbmZvcm1hdGlvbicpO1xuXG52YXIgX3V0aWxzR2V0QnJvd3NlckluZm9ybWF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzR2V0QnJvd3NlckluZm9ybWF0aW9uKTtcblxudmFyIF91dGlsc0dldFByZWZpeGVkS2V5ZnJhbWVzID0gcmVxdWlyZSgnLi91dGlscy9nZXRQcmVmaXhlZEtleWZyYW1lcycpO1xuXG52YXIgX3V0aWxzR2V0UHJlZml4ZWRLZXlmcmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNHZXRQcmVmaXhlZEtleWZyYW1lcyk7XG5cbnZhciBfdXRpbHNDYXBpdGFsaXplU3RyaW5nID0gcmVxdWlyZSgnLi91dGlscy9jYXBpdGFsaXplU3RyaW5nJyk7XG5cbnZhciBfdXRpbHNDYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2FwaXRhbGl6ZVN0cmluZyk7XG5cbnZhciBfdXRpbHNBc3NpZ24gPSByZXF1aXJlKCcuL3V0aWxzL2Fzc2lnbicpO1xuXG52YXIgX3V0aWxzQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQXNzaWduKTtcblxudmFyIF91dGlsc1dhcm4gPSByZXF1aXJlKCcuL3V0aWxzL3dhcm4nKTtcblxudmFyIF91dGlsc1dhcm4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNXYXJuKTtcblxudmFyIF9jYW5pdXNlRGF0YSA9IHJlcXVpcmUoJy4vY2FuaXVzZURhdGEnKTtcblxudmFyIF9jYW5pdXNlRGF0YTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW5pdXNlRGF0YSk7XG5cbnZhciBfUGx1Z2lucyA9IHJlcXVpcmUoJy4vUGx1Z2lucycpO1xuXG52YXIgX1BsdWdpbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGx1Z2lucyk7XG5cbnZhciBicm93c2VyV2hpdGVsaXN0ID0gWydwaGFudG9tJ107XG5cbnZhciBQcmVmaXhlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBJbnN0YW50aWFudGUgYSBuZXcgcHJlZml4ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJBZ2VudCAtIHVzZXJBZ2VudCB0byBnYXRoZXIgcHJlZml4IGluZm9ybWF0aW9uIGFjY29yZGluZyB0byBjYW5pdXNlLmNvbVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2VlcFVucHJlZml4ZWQgLSBrZWVwcyB1bnByZWZpeGVkIHByb3BlcnRpZXMgYW5kIHZhbHVlc1xuICAgKi9cblxuICBmdW5jdGlvbiBQcmVmaXhlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcmVmaXhlcik7XG5cbiAgICB2YXIgZGVmYXVsdFVzZXJBZ2VudCA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gbmF2aWdhdG9yLnVzZXJBZ2VudCA6IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuX3VzZXJBZ2VudCA9IG9wdGlvbnMudXNlckFnZW50IHx8IGRlZmF1bHRVc2VyQWdlbnQ7XG4gICAgdGhpcy5fa2VlcFVucHJlZml4ZWQgPSBvcHRpb25zLmtlZXBVbnByZWZpeGVkIHx8IGZhbHNlO1xuXG4gICAgdGhpcy5fYnJvd3NlckluZm8gPSAoMCwgX3V0aWxzR2V0QnJvd3NlckluZm9ybWF0aW9uMlsnZGVmYXVsdCddKSh0aGlzLl91c2VyQWdlbnQpO1xuXG4gICAgLy8gQ2hlY2tzIGlmIHRoZSB1c2VyQWdlbnQgd2FzIHJlc29sdmVkIGNvcnJlY3RseVxuICAgIGlmICh0aGlzLl9icm93c2VySW5mbyAmJiB0aGlzLl9icm93c2VySW5mby5wcmVmaXgpIHtcbiAgICAgIC8vIHNldCBhZGRpdGlvbmFsIHByZWZpeCBpbmZvcm1hdGlvblxuICAgICAgdGhpcy5jc3NQcmVmaXggPSB0aGlzLl9icm93c2VySW5mby5wcmVmaXguY3NzO1xuICAgICAgdGhpcy5qc1ByZWZpeCA9IHRoaXMuX2Jyb3dzZXJJbmZvLnByZWZpeC5pbmxpbmU7XG4gICAgICB0aGlzLnByZWZpeGVkS2V5ZnJhbWVzID0gKDAsIF91dGlsc0dldFByZWZpeGVkS2V5ZnJhbWVzMlsnZGVmYXVsdCddKSh0aGlzLl9icm93c2VySW5mbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hhc1Byb3BzUmVxdWlyaW5nUHJlZml4ID0gZmFsc2U7XG4gICAgICAoMCwgX3V0aWxzV2FybjJbJ2RlZmF1bHQnXSkoJ0VpdGhlciB0aGUgZ2xvYmFsIG5hdmlnYXRvciB3YXMgdW5kZWZpbmVkIG9yIGFuIGludmFsaWQgdXNlckFnZW50IHdhcyBwcm92aWRlZC4nLCAnVXNpbmcgYSB2YWxpZCB1c2VyQWdlbnQ/IFBsZWFzZSBsZXQgdXMga25vdyBhbmQgY3JlYXRlIGFuIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9yb2ZyaXNjaG1hbm4vaW5saW5lLXN0eWxlLXByZWZpeGVyL2lzc3VlcycpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gdGhpcy5fYnJvd3NlckluZm8uYnJvd3NlciAmJiBfY2FuaXVzZURhdGEyWydkZWZhdWx0J11bdGhpcy5fYnJvd3NlckluZm8uYnJvd3Nlcl07XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuX3JlcXVpcmVzUHJlZml4ID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFba2V5XSA+PSBfdGhpcy5fYnJvd3NlckluZm8udmVyc2lvbjtcbiAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdWx0LCBfZGVmaW5lUHJvcGVydHkoe30sIG5hbWUsIHRydWUpKTtcbiAgICAgIH0sIHt9KTtcbiAgICAgIHRoaXMuX2hhc1Byb3BzUmVxdWlyaW5nUHJlZml4ID0gT2JqZWN0LmtleXModGhpcy5fcmVxdWlyZXNQcmVmaXgpLmxlbmd0aCA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGZvciB3aGl0ZWxpc3RlZCBicm93c2Vyc1xuICAgICAgYnJvd3NlcldoaXRlbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChicm93c2VyKSB7XG4gICAgICAgIGlmIChfdGhpcy5fYnJvd3NlckluZm9bYnJvd3Nlcl0pIHtcbiAgICAgICAgICBfdGhpcy5faXNXaGl0ZWxpc3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5faGFzUHJvcHNSZXF1aXJpbmdQcmVmaXggPSBmYWxzZTtcblxuICAgICAgLy8gRG8gbm90IHRocm93IGEgd2FybmluZyBpZiB3aGl0ZWxpc3RlZFxuICAgICAgaWYgKHRoaXMuX2lzV2hpdGVsaXN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAoMCwgX3V0aWxzV2FybjJbJ2RlZmF1bHQnXSkoJ1lvdXIgdXNlckFnZW50IHNlZW1zIHRvIGJlIG5vdCBzdXBwb3J0ZWQgYnkgaW5saW5lLXN0eWxlLXByZWZpeGVyLiBGZWVsIGZyZWUgdG8gb3BlbiBhbiBpc3N1ZS4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByZWZpeGVkIHZlcnNpb24gb2YgdGhlIHN0eWxlIG9iamVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzIC0gU3R5bGUgb2JqZWN0IHRoYXQgZ2V0cyBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFkZGVkXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IC0gU3R5bGUgb2JqZWN0IHdpdGggcHJlZml4ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAqL1xuXG4gIF9jcmVhdGVDbGFzcyhQcmVmaXhlciwgW3tcbiAgICBrZXk6ICdwcmVmaXgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVmaXgoc3R5bGVzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gb25seSBhZGQgcHJlZml4ZXMgaWYgbmVlZGVkXG4gICAgICBpZiAoIXRoaXMuX2hhc1Byb3BzUmVxdWlyaW5nUHJlZml4KSB7XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcyA9ICgwLCBfdXRpbHNBc3NpZ24yWydkZWZhdWx0J10pKHt9LCBzdHlsZXMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1twcm9wZXJ0eV07XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgIC8vIHJlY3Vyc2UgdGhyb3VnaCBuZXN0ZWQgc3R5bGUgb2JqZWN0c1xuICAgICAgICAgIHN0eWxlc1twcm9wZXJ0eV0gPSBfdGhpczIucHJlZml4KHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhZGQgcHJlZml4ZXMgaWYgbmVlZGVkXG4gICAgICAgICAgaWYgKF90aGlzMi5fcmVxdWlyZXNQcmVmaXhbcHJvcGVydHldKSB7XG4gICAgICAgICAgICBzdHlsZXNbX3RoaXMyLmpzUHJlZml4ICsgKDAsIF91dGlsc0NhcGl0YWxpemVTdHJpbmcyWydkZWZhdWx0J10pKHByb3BlcnR5KV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICghX3RoaXMyLl9rZWVwVW5wcmVmaXhlZCkge1xuICAgICAgICAgICAgICBkZWxldGUgc3R5bGVzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyByZXNvbHZlIHBsdWdpbnNcbiAgICAgICAgICBfUGx1Z2luczJbJ2RlZmF1bHQnXS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlcyBhIG5ldyBwbHVnaW4gaW50ZXJmYWNlIHdpdGggY3VycmVudCBkYXRhXG4gICAgICAgICAgICB2YXIgcmVzb2x2ZWRTdHlsZXMgPSBwbHVnaW4oe1xuICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgICAgICAgIGJyb3dzZXJJbmZvOiBfdGhpczIuX2Jyb3dzZXJJbmZvLFxuICAgICAgICAgICAgICBwcmVmaXg6IHtcbiAgICAgICAgICAgICAgICBqczogX3RoaXMyLmpzUHJlZml4LFxuICAgICAgICAgICAgICAgIGNzczogX3RoaXMyLmNzc1ByZWZpeCxcbiAgICAgICAgICAgICAgICBrZXlmcmFtZXM6IF90aGlzMi5wcmVmaXhlZEtleWZyYW1lc1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBrZWVwVW5wcmVmaXhlZDogX3RoaXMyLl9rZWVwVW5wcmVmaXhlZCxcbiAgICAgICAgICAgICAgcmVxdWlyZXNQcmVmaXg6IF90aGlzMi5fcmVxdWlyZXNQcmVmaXgsXG4gICAgICAgICAgICAgIGZvcmNlUnVuOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAoMCwgX3V0aWxzQXNzaWduMlsnZGVmYXVsdCddKShzdHlsZXMsIHJlc29sdmVkU3R5bGVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByZWZpeGVkIHZlcnNpb24gb2YgdGhlIHN0eWxlIG9iamVjdCB1c2luZyBhbGwgdmVuZG9yIHByZWZpeGVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyAtIFN0eWxlIG9iamVjdCB0aGF0IGdldHMgcHJlZml4ZWQgcHJvcGVydGllcyBhZGRlZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IC0gU3R5bGUgb2JqZWN0IHdpdGggcHJlZml4ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAgICovXG4gIH1dLCBbe1xuICAgIGtleTogJ3ByZWZpeEFsbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZWZpeEFsbChzdHlsZXMpIHtcbiAgICAgIHZhciBwcmVmaXhlcyA9IHt9O1xuICAgICAgdmFyIGJyb3dzZXJJbmZvID0gKDAsIF91dGlsc0dldEJyb3dzZXJJbmZvcm1hdGlvbjJbJ2RlZmF1bHQnXSkoJyonKTtcblxuICAgICAgYnJvd3NlckluZm8uYnJvd3NlcnMuZm9yRWFjaChmdW5jdGlvbiAoYnJvd3Nlcikge1xuICAgICAgICB2YXIgZGF0YSA9IF9jYW5pdXNlRGF0YTJbJ2RlZmF1bHQnXVticm93c2VyXTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAoMCwgX3V0aWxzQXNzaWduMlsnZGVmYXVsdCddKShwcmVmaXhlcywgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyB0aGVyZSBzaG91bGQgYWx3YXlzIGJlIGF0IGxlYXN0IG9uZSBwcmVmaXhlZCBzdHlsZSwgYnV0IGp1c3QgaW5jYXNlXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHByZWZpeGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcyA9ICgwLCBfdXRpbHNBc3NpZ24yWydkZWZhdWx0J10pKHt9LCBzdHlsZXMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1twcm9wZXJ0eV07XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgIC8vIHJlY3Vyc2UgdGhyb3VnaCBuZXN0ZWQgc3R5bGUgb2JqZWN0c1xuICAgICAgICAgIHN0eWxlc1twcm9wZXJ0eV0gPSBQcmVmaXhlci5wcmVmaXhBbGwodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBicm93c2VycyA9IE9iamVjdC5rZXlzKGJyb3dzZXJJbmZvLnByZWZpeGVzKTtcbiAgICAgICAgICBicm93c2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChicm93c2VyKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBicm93c2VySW5mby5wcmVmaXhlc1ticm93c2VyXTtcbiAgICAgICAgICAgIC8vIGFkZCBwcmVmaXhlcyBpZiBuZWVkZWRcbiAgICAgICAgICAgIGlmIChwcmVmaXhlc1twcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgc3R5bGVzW3N0eWxlLmlubGluZSArICgwLCBfdXRpbHNDYXBpdGFsaXplU3RyaW5nMlsnZGVmYXVsdCddKShwcm9wZXJ0eSldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlc29sdmUgcGx1Z2lucyBmb3IgZWFjaCBicm93c2VyXG4gICAgICAgICAgICBfUGx1Z2luczJbJ2RlZmF1bHQnXS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgICAgICAgdmFyIHJlc29sdmVkU3R5bGVzID0gcGx1Z2luKHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICAgICAgICAgIGJyb3dzZXJJbmZvOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBicm93c2VyLFxuICAgICAgICAgICAgICAgICAgcHJlZml4OiBzdHlsZSxcbiAgICAgICAgICAgICAgICAgIHZlcnNpb246IDAgLy8gYXNzdW1lIGxvd2VzdFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJlZml4OiB7fSxcbiAgICAgICAgICAgICAgICBrZWVwVW5wcmVmaXhlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZXF1aXJlc1ByZWZpeDogcHJlZml4ZXMsXG4gICAgICAgICAgICAgICAgZm9yY2VSdW46IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICgwLCBfdXRpbHNBc3NpZ24yWydkZWZhdWx0J10pKHN0eWxlcywgcmVzb2x2ZWRTdHlsZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc3R5bGVzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcmVmaXhlcjtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFByZWZpeGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9QcmVmaXhlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY2FuaXVzZURhdGEgPSB7XCJjaHJvbWVcIjp7XCJ0cmFuc2Zvcm1cIjozNSxcInRyYW5zZm9ybU9yaWdpblwiOjM1LFwidHJhbnNmb3JtT3JpZ2luWFwiOjM1LFwidHJhbnNmb3JtT3JpZ2luWVwiOjM1LFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6MzUsXCJwZXJzcGVjdGl2ZVwiOjM1LFwicGVyc3BlY3RpdmVPcmlnaW5cIjozNSxcInRyYW5zZm9ybVN0eWxlXCI6MzUsXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6MzUsXCJhbmltYXRpb25cIjo0MixcImFuaW1hdGlvbkRlbGF5XCI6NDIsXCJhbmltYXRpb25EaXJlY3Rpb25cIjo0MixcImFuaW1hdGlvbkZpbGxNb2RlXCI6NDIsXCJhbmltYXRpb25EdXJhdGlvblwiOjQyLFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjo0MixcImFuaW1hdGlvbk5hbWVcIjo0MixcImFuaW1hdGlvblBsYXlTdGF0ZVwiOjQyLFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjo0MixcImFwcGVhcmFuY2VcIjo1MCxcInVzZXJTZWxlY3RcIjo1MCxcImZvbnRLZXJuaW5nXCI6MzIsXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOjUwLFwidGV4dEVtcGhhc2lzXCI6NTAsXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOjUwLFwidGV4dEVtcGhhc2lzQ29sb3JcIjo1MCxcImJveERlY29yYXRpb25CcmVha1wiOjUwLFwiY2xpcFBhdGhcIjo1MCxcIm1hc2tJbWFnZVwiOjUwLFwibWFza01vZGVcIjo1MCxcIm1hc2tSZXBlYXRcIjo1MCxcIm1hc2tQb3NpdGlvblwiOjUwLFwibWFza0NsaXBcIjo1MCxcIm1hc2tPcmlnaW5cIjo1MCxcIm1hc2tTaXplXCI6NTAsXCJtYXNrQ29tcG9zaXRlXCI6NTAsXCJtYXNrXCI6NTAsXCJtYXNrQm9yZGVyU291cmNlXCI6NTAsXCJtYXNrQm9yZGVyTW9kZVwiOjUwLFwibWFza0JvcmRlclNsaWNlXCI6NTAsXCJtYXNrQm9yZGVyV2lkdGhcIjo1MCxcIm1hc2tCb3JkZXJPdXRzZXRcIjo1MCxcIm1hc2tCb3JkZXJSZXBlYXRcIjo1MCxcIm1hc2tCb3JkZXJcIjo1MCxcIm1hc2tUeXBlXCI6NTAsXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6NTAsXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjo1MCxcInRleHREZWNvcmF0aW9uTGluZVwiOjUwLFwidGV4dERlY29yYXRpb25Db2xvclwiOjUwLFwiZmlsdGVyXCI6NTAsXCJmb250RmVhdHVyZVNldHRpbmdzXCI6NDcsXCJicmVha0FmdGVyXCI6NTAsXCJicmVha0JlZm9yZVwiOjUwLFwiYnJlYWtJbnNpZGVcIjo1MCxcImNvbHVtbkNvdW50XCI6NTAsXCJjb2x1bW5GaWxsXCI6NTAsXCJjb2x1bW5HYXBcIjo1MCxcImNvbHVtblJ1bGVcIjo1MCxcImNvbHVtblJ1bGVDb2xvclwiOjUwLFwiY29sdW1uUnVsZVN0eWxlXCI6NTAsXCJjb2x1bW5SdWxlV2lkdGhcIjo1MCxcImNvbHVtbnNcIjo1MCxcImNvbHVtblNwYW5cIjo1MCxcImNvbHVtbldpZHRoXCI6NTB9LFwic2FmYXJpXCI6e1wiZmxleFwiOjgsXCJmbGV4QmFzaXNcIjo4LFwiZmxleERpcmVjdGlvblwiOjgsXCJmbGV4R3Jvd1wiOjgsXCJmbGV4Rmxvd1wiOjgsXCJmbGV4U2hyaW5rXCI6OCxcImZsZXhXcmFwXCI6OCxcImFsaWduQ29udGVudFwiOjgsXCJhbGlnbkl0ZW1zXCI6OCxcImFsaWduU2VsZlwiOjgsXCJqdXN0aWZ5Q29udGVudFwiOjgsXCJvcmRlclwiOjgsXCJ0cmFuc2l0aW9uXCI6NixcInRyYW5zaXRpb25EZWxheVwiOjYsXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjo2LFwidHJhbnNpdGlvblByb3BlcnR5XCI6NixcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOjYsXCJ0cmFuc2Zvcm1cIjo4LFwidHJhbnNmb3JtT3JpZ2luXCI6OCxcInRyYW5zZm9ybU9yaWdpblhcIjo4LFwidHJhbnNmb3JtT3JpZ2luWVwiOjgsXCJiYWNrZmFjZVZpc2liaWxpdHlcIjo4LFwicGVyc3BlY3RpdmVcIjo4LFwicGVyc3BlY3RpdmVPcmlnaW5cIjo4LFwidHJhbnNmb3JtU3R5bGVcIjo4LFwidHJhbnNmb3JtT3JpZ2luWlwiOjgsXCJhbmltYXRpb25cIjo4LFwiYW5pbWF0aW9uRGVsYXlcIjo4LFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6OCxcImFuaW1hdGlvbkZpbGxNb2RlXCI6OCxcImFuaW1hdGlvbkR1cmF0aW9uXCI6OCxcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6OCxcImFuaW1hdGlvbk5hbWVcIjo4LFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6OCxcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6OCxcImFwcGVhcmFuY2VcIjo5LjEsXCJ1c2VyU2VsZWN0XCI6OS4xLFwiYmFja2Ryb3BGaWx0ZXJcIjo5LjEsXCJmb250S2VybmluZ1wiOjkuMSxcInNjcm9sbFNuYXBUeXBlXCI6OS4xLFwic2Nyb2xsU25hcFBvaW50c1hcIjo5LjEsXCJzY3JvbGxTbmFwUG9pbnRzWVwiOjkuMSxcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOjkuMSxcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6OS4xLFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjo3LFwidGV4dEVtcGhhc2lzXCI6NyxcInRleHRFbXBoYXNpc1N0eWxlXCI6NyxcInRleHRFbXBoYXNpc0NvbG9yXCI6NyxcImJveERlY29yYXRpb25CcmVha1wiOjkuMSxcImNsaXBQYXRoXCI6OS4xLFwibWFza0ltYWdlXCI6OS4xLFwibWFza01vZGVcIjo5LjEsXCJtYXNrUmVwZWF0XCI6OS4xLFwibWFza1Bvc2l0aW9uXCI6OS4xLFwibWFza0NsaXBcIjo5LjEsXCJtYXNrT3JpZ2luXCI6OS4xLFwibWFza1NpemVcIjo5LjEsXCJtYXNrQ29tcG9zaXRlXCI6OS4xLFwibWFza1wiOjkuMSxcIm1hc2tCb3JkZXJTb3VyY2VcIjo5LjEsXCJtYXNrQm9yZGVyTW9kZVwiOjkuMSxcIm1hc2tCb3JkZXJTbGljZVwiOjkuMSxcIm1hc2tCb3JkZXJXaWR0aFwiOjkuMSxcIm1hc2tCb3JkZXJPdXRzZXRcIjo5LjEsXCJtYXNrQm9yZGVyUmVwZWF0XCI6OS4xLFwibWFza0JvcmRlclwiOjkuMSxcIm1hc2tUeXBlXCI6OS4xLFwidGV4dERlY29yYXRpb25TdHlsZVwiOjkuMSxcInRleHREZWNvcmF0aW9uU2tpcFwiOjkuMSxcInRleHREZWNvcmF0aW9uTGluZVwiOjkuMSxcInRleHREZWNvcmF0aW9uQ29sb3JcIjo5LjEsXCJzaGFwZUltYWdlVGhyZXNob2xkXCI6OS4xLFwic2hhcGVJbWFnZU1hcmdpblwiOjkuMSxcInNoYXBlSW1hZ2VPdXRzaWRlXCI6OS4xLFwiZmlsdGVyXCI6OSxcImh5cGhlbnNcIjo5LjEsXCJmbG93SW50b1wiOjkuMSxcImZsb3dGcm9tXCI6OS4xLFwiYnJlYWtCZWZvcmVcIjo4LFwiYnJlYWtBZnRlclwiOjgsXCJicmVha0luc2lkZVwiOjgsXCJyZWdpb25GcmFnbWVudFwiOjkuMSxcImNvbHVtbkNvdW50XCI6OCxcImNvbHVtbkZpbGxcIjo4LFwiY29sdW1uR2FwXCI6OCxcImNvbHVtblJ1bGVcIjo4LFwiY29sdW1uUnVsZUNvbG9yXCI6OCxcImNvbHVtblJ1bGVTdHlsZVwiOjgsXCJjb2x1bW5SdWxlV2lkdGhcIjo4LFwiY29sdW1uc1wiOjgsXCJjb2x1bW5TcGFuXCI6OCxcImNvbHVtbldpZHRoXCI6OH0sXCJmaXJlZm94XCI6e1wiYXBwZWFyYW5jZVwiOjQ2LFwidXNlclNlbGVjdFwiOjQ2LFwiYm94U2l6aW5nXCI6MjgsXCJ0ZXh0QWxpZ25MYXN0XCI6NDYsXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6MzUsXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjozNSxcInRleHREZWNvcmF0aW9uTGluZVwiOjM1LFwidGV4dERlY29yYXRpb25Db2xvclwiOjM1LFwidGFiU2l6ZVwiOjQ2LFwiaHlwaGVuc1wiOjQyLFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOjMzLFwiYnJlYWtBZnRlclwiOjQ2LFwiYnJlYWtCZWZvcmVcIjo0NixcImJyZWFrSW5zaWRlXCI6NDYsXCJjb2x1bW5Db3VudFwiOjQ2LFwiY29sdW1uRmlsbFwiOjQ2LFwiY29sdW1uR2FwXCI6NDYsXCJjb2x1bW5SdWxlXCI6NDYsXCJjb2x1bW5SdWxlQ29sb3JcIjo0NixcImNvbHVtblJ1bGVTdHlsZVwiOjQ2LFwiY29sdW1uUnVsZVdpZHRoXCI6NDYsXCJjb2x1bW5zXCI6NDYsXCJjb2x1bW5TcGFuXCI6NDYsXCJjb2x1bW5XaWR0aFwiOjQ2fSxcIm9wZXJhXCI6e1wiZmxleFwiOjE2LFwiZmxleEJhc2lzXCI6MTYsXCJmbGV4RGlyZWN0aW9uXCI6MTYsXCJmbGV4R3Jvd1wiOjE2LFwiZmxleEZsb3dcIjoxNixcImZsZXhTaHJpbmtcIjoxNixcImZsZXhXcmFwXCI6MTYsXCJhbGlnbkNvbnRlbnRcIjoxNixcImFsaWduSXRlbXNcIjoxNixcImFsaWduU2VsZlwiOjE2LFwianVzdGlmeUNvbnRlbnRcIjoxNixcIm9yZGVyXCI6MTYsXCJ0cmFuc2Zvcm1cIjoyMixcInRyYW5zZm9ybU9yaWdpblwiOjIyLFwidHJhbnNmb3JtT3JpZ2luWFwiOjIyLFwidHJhbnNmb3JtT3JpZ2luWVwiOjIyLFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6MjIsXCJwZXJzcGVjdGl2ZVwiOjIyLFwicGVyc3BlY3RpdmVPcmlnaW5cIjoyMixcInRyYW5zZm9ybVN0eWxlXCI6MjIsXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6MjIsXCJhbmltYXRpb25cIjoyOSxcImFuaW1hdGlvbkRlbGF5XCI6MjksXCJhbmltYXRpb25EaXJlY3Rpb25cIjoyOSxcImFuaW1hdGlvbkZpbGxNb2RlXCI6MjksXCJhbmltYXRpb25EdXJhdGlvblwiOjI5LFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjoyOSxcImFuaW1hdGlvbk5hbWVcIjoyOSxcImFuaW1hdGlvblBsYXlTdGF0ZVwiOjI5LFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjoyOSxcImFwcGVhcmFuY2VcIjozNixcInVzZXJTZWxlY3RcIjozNixcImZvbnRLZXJuaW5nXCI6MTksXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOjM2LFwidGV4dEVtcGhhc2lzXCI6MzYsXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOjM2LFwidGV4dEVtcGhhc2lzQ29sb3JcIjozNixcImJveERlY29yYXRpb25CcmVha1wiOjM2LFwiY2xpcFBhdGhcIjozNixcIm1hc2tJbWFnZVwiOjM2LFwibWFza01vZGVcIjozNixcIm1hc2tSZXBlYXRcIjozNixcIm1hc2tQb3NpdGlvblwiOjM2LFwibWFza0NsaXBcIjozNixcIm1hc2tPcmlnaW5cIjozNixcIm1hc2tTaXplXCI6MzYsXCJtYXNrQ29tcG9zaXRlXCI6MzYsXCJtYXNrXCI6MzYsXCJtYXNrQm9yZGVyU291cmNlXCI6MzYsXCJtYXNrQm9yZGVyTW9kZVwiOjM2LFwibWFza0JvcmRlclNsaWNlXCI6MzYsXCJtYXNrQm9yZGVyV2lkdGhcIjozNixcIm1hc2tCb3JkZXJPdXRzZXRcIjozNixcIm1hc2tCb3JkZXJSZXBlYXRcIjozNixcIm1hc2tCb3JkZXJcIjozNixcIm1hc2tUeXBlXCI6MzYsXCJmaWx0ZXJcIjozNixcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjozNixcImJyZWFrQWZ0ZXJcIjozNixcImJyZWFrQmVmb3JlXCI6MzYsXCJicmVha0luc2lkZVwiOjM2LFwiY29sdW1uQ291bnRcIjozNixcImNvbHVtbkZpbGxcIjozNixcImNvbHVtbkdhcFwiOjM2LFwiY29sdW1uUnVsZVwiOjM2LFwiY29sdW1uUnVsZUNvbG9yXCI6MzYsXCJjb2x1bW5SdWxlU3R5bGVcIjozNixcImNvbHVtblJ1bGVXaWR0aFwiOjM2LFwiY29sdW1uc1wiOjM2LFwiY29sdW1uU3BhblwiOjM2LFwiY29sdW1uV2lkdGhcIjozNn0sXCJpZVwiOntcImdyaWRBcmVhXCI6MTEsXCJncmlkR2FwXCI6MTEsXCJncmlkQ29sdW1uU3RhcnRcIjoxMSxcInVzZXJTZWxlY3RcIjoxMSxcImdyaWRcIjoxMSxcImJyZWFrSW5zaWRlXCI6MTEsXCJoeXBoZW5zXCI6MTEsXCJncmlkVGVtcGxhdGVBcmVhc1wiOjExLFwiYnJlYWtBZnRlclwiOjExLFwic2Nyb2xsU25hcENvb3JkaW5hdGVcIjoxMSxcImdyaWRSb3dTdGFydFwiOjExLFwiZ3JpZEF1dG9GbG93XCI6MTEsXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjoxMSxcImdyaWRUZW1wbGF0ZVwiOjExLFwiZ3JpZFRlbXBsYXRlQ29sdW1uc1wiOjExLFwidHJhbnNmb3JtT3JpZ2luXCI6OSxcImdyaWRBdXRvUm93c1wiOjExLFwiZ3JpZENvbHVtbkVuZFwiOjExLFwidHJhbnNmb3JtT3JpZ2luWVwiOjksXCJzY3JvbGxTbmFwUG9pbnRzWVwiOjExLFwiYnJlYWtCZWZvcmVcIjoxMSxcImdyaWRSb3dHYXBcIjoxMSxcInNjcm9sbFNuYXBQb2ludHNYXCI6MTEsXCJyZWdpb25GcmFnbWVudFwiOjExLFwiZmxleFdyYXBcIjoxMCxcIndyYXBGbG93XCI6MTEsXCJncmlkUm93RW5kXCI6MTEsXCJmbGV4XCI6MTAsXCJmbGV4RGlyZWN0aW9uXCI6MTAsXCJmbG93SW50b1wiOjExLFwidG91Y2hBY3Rpb25cIjoxMCxcImdyaWRDb2x1bW5cIjoxMSxcInRyYW5zZm9ybVwiOjksXCJncmlkVGVtcGxhdGVSb3dzXCI6MTEsXCJmbGV4Rmxvd1wiOjEwLFwidHJhbnNmb3JtT3JpZ2luWFwiOjksXCJmbG93RnJvbVwiOjExLFwic2Nyb2xsU25hcFR5cGVcIjoxMSxcIndyYXBNYXJnaW5cIjoxMSxcImdyaWRDb2x1bW5HYXBcIjoxMSxcImdyaWRSb3dcIjoxMSxcIndyYXBUaHJvdWdoXCI6MTEsXCJncmlkQXV0b0NvbHVtbnNcIjoxMSxcInRleHRTaXplQWRqdXN0XCI6MTF9LFwiZWRnZVwiOntcInVzZXJTZWxlY3RcIjoxNCxcIndyYXBGbG93XCI6MTQsXCJ3cmFwVGhyb3VnaFwiOjE0LFwid3JhcE1hcmdpblwiOjE0LFwic2Nyb2xsU25hcFR5cGVcIjoxNCxcInNjcm9sbFNuYXBQb2ludHNYXCI6MTQsXCJzY3JvbGxTbmFwUG9pbnRzWVwiOjE0LFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6MTQsXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOjE0LFwiaHlwaGVuc1wiOjE0LFwiZmxvd0ludG9cIjoxNCxcImZsb3dGcm9tXCI6MTQsXCJicmVha0JlZm9yZVwiOjE0LFwiYnJlYWtBZnRlclwiOjE0LFwiYnJlYWtJbnNpZGVcIjoxNCxcInJlZ2lvbkZyYWdtZW50XCI6MTQsXCJncmlkVGVtcGxhdGVDb2x1bW5zXCI6MTQsXCJncmlkVGVtcGxhdGVSb3dzXCI6MTQsXCJncmlkVGVtcGxhdGVBcmVhc1wiOjE0LFwiZ3JpZFRlbXBsYXRlXCI6MTQsXCJncmlkQXV0b0NvbHVtbnNcIjoxNCxcImdyaWRBdXRvUm93c1wiOjE0LFwiZ3JpZEF1dG9GbG93XCI6MTQsXCJncmlkXCI6MTQsXCJncmlkUm93U3RhcnRcIjoxNCxcImdyaWRDb2x1bW5TdGFydFwiOjE0LFwiZ3JpZFJvd0VuZFwiOjE0LFwiZ3JpZFJvd1wiOjE0LFwiZ3JpZENvbHVtblwiOjE0LFwiZ3JpZENvbHVtbkVuZFwiOjE0LFwiZ3JpZENvbHVtbkdhcFwiOjE0LFwiZ3JpZFJvd0dhcFwiOjE0LFwiZ3JpZEFyZWFcIjoxNCxcImdyaWRHYXBcIjoxNH0sXCJpb3Nfc2FmXCI6e1wiZmxleFwiOjguMSxcImZsZXhCYXNpc1wiOjguMSxcImZsZXhEaXJlY3Rpb25cIjo4LjEsXCJmbGV4R3Jvd1wiOjguMSxcImZsZXhGbG93XCI6OC4xLFwiZmxleFNocmlua1wiOjguMSxcImZsZXhXcmFwXCI6OC4xLFwiYWxpZ25Db250ZW50XCI6OC4xLFwiYWxpZ25JdGVtc1wiOjguMSxcImFsaWduU2VsZlwiOjguMSxcImp1c3RpZnlDb250ZW50XCI6OC4xLFwib3JkZXJcIjo4LjEsXCJ0cmFuc2l0aW9uXCI6NixcInRyYW5zaXRpb25EZWxheVwiOjYsXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjo2LFwidHJhbnNpdGlvblByb3BlcnR5XCI6NixcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOjYsXCJ0cmFuc2Zvcm1cIjo4LjEsXCJ0cmFuc2Zvcm1PcmlnaW5cIjo4LjEsXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6OC4xLFwidHJhbnNmb3JtT3JpZ2luWVwiOjguMSxcImJhY2tmYWNlVmlzaWJpbGl0eVwiOjguMSxcInBlcnNwZWN0aXZlXCI6OC4xLFwicGVyc3BlY3RpdmVPcmlnaW5cIjo4LjEsXCJ0cmFuc2Zvcm1TdHlsZVwiOjguMSxcInRyYW5zZm9ybU9yaWdpblpcIjo4LjEsXCJhbmltYXRpb25cIjo4LjEsXCJhbmltYXRpb25EZWxheVwiOjguMSxcImFuaW1hdGlvbkRpcmVjdGlvblwiOjguMSxcImFuaW1hdGlvbkZpbGxNb2RlXCI6OC4xLFwiYW5pbWF0aW9uRHVyYXRpb25cIjo4LjEsXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOjguMSxcImFuaW1hdGlvbk5hbWVcIjo4LjEsXCJhbmltYXRpb25QbGF5U3RhdGVcIjo4LjEsXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOjguMSxcImFwcGVhcmFuY2VcIjo5LjMsXCJ1c2VyU2VsZWN0XCI6OS4zLFwiYmFja2Ryb3BGaWx0ZXJcIjo5LjMsXCJmb250S2VybmluZ1wiOjkuMyxcInNjcm9sbFNuYXBUeXBlXCI6OS4zLFwic2Nyb2xsU25hcFBvaW50c1hcIjo5LjMsXCJzY3JvbGxTbmFwUG9pbnRzWVwiOjkuMyxcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOjkuMyxcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6OS4zLFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6OS4zLFwiY2xpcFBhdGhcIjo5LjMsXCJtYXNrSW1hZ2VcIjo5LjMsXCJtYXNrTW9kZVwiOjkuMyxcIm1hc2tSZXBlYXRcIjo5LjMsXCJtYXNrUG9zaXRpb25cIjo5LjMsXCJtYXNrQ2xpcFwiOjkuMyxcIm1hc2tPcmlnaW5cIjo5LjMsXCJtYXNrU2l6ZVwiOjkuMyxcIm1hc2tDb21wb3NpdGVcIjo5LjMsXCJtYXNrXCI6OS4zLFwibWFza0JvcmRlclNvdXJjZVwiOjkuMyxcIm1hc2tCb3JkZXJNb2RlXCI6OS4zLFwibWFza0JvcmRlclNsaWNlXCI6OS4zLFwibWFza0JvcmRlcldpZHRoXCI6OS4zLFwibWFza0JvcmRlck91dHNldFwiOjkuMyxcIm1hc2tCb3JkZXJSZXBlYXRcIjo5LjMsXCJtYXNrQm9yZGVyXCI6OS4zLFwibWFza1R5cGVcIjo5LjMsXCJ0ZXh0U2l6ZUFkanVzdFwiOjkuMyxcInRleHREZWNvcmF0aW9uU3R5bGVcIjo5LjMsXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjo5LjMsXCJ0ZXh0RGVjb3JhdGlvbkxpbmVcIjo5LjMsXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6OS4zLFwic2hhcGVJbWFnZVRocmVzaG9sZFwiOjkuMyxcInNoYXBlSW1hZ2VNYXJnaW5cIjo5LjMsXCJzaGFwZUltYWdlT3V0c2lkZVwiOjkuMyxcImZpbHRlclwiOjksXCJoeXBoZW5zXCI6OS4zLFwiZmxvd0ludG9cIjo5LjMsXCJmbG93RnJvbVwiOjkuMyxcImJyZWFrQmVmb3JlXCI6OC4xLFwiYnJlYWtBZnRlclwiOjguMSxcImJyZWFrSW5zaWRlXCI6OC4xLFwicmVnaW9uRnJhZ21lbnRcIjo5LjMsXCJjb2x1bW5Db3VudFwiOjguMSxcImNvbHVtbkZpbGxcIjo4LjEsXCJjb2x1bW5HYXBcIjo4LjEsXCJjb2x1bW5SdWxlXCI6OC4xLFwiY29sdW1uUnVsZUNvbG9yXCI6OC4xLFwiY29sdW1uUnVsZVN0eWxlXCI6OC4xLFwiY29sdW1uUnVsZVdpZHRoXCI6OC4xLFwiY29sdW1uc1wiOjguMSxcImNvbHVtblNwYW5cIjo4LjEsXCJjb2x1bW5XaWR0aFwiOjguMX0sXCJhbmRyb2lkXCI6e1wiYm9yZGVySW1hZ2VcIjo0LjIsXCJib3JkZXJJbWFnZU91dHNldFwiOjQuMixcImJvcmRlckltYWdlUmVwZWF0XCI6NC4yLFwiYm9yZGVySW1hZ2VTbGljZVwiOjQuMixcImJvcmRlckltYWdlU291cmNlXCI6NC4yLFwiYm9yZGVySW1hZ2VXaWR0aFwiOjQuMixcImZsZXhcIjo0LjIsXCJmbGV4QmFzaXNcIjo0LjIsXCJmbGV4RGlyZWN0aW9uXCI6NC4yLFwiZmxleEdyb3dcIjo0LjIsXCJmbGV4Rmxvd1wiOjQuMixcImZsZXhTaHJpbmtcIjo0LjIsXCJmbGV4V3JhcFwiOjQuMixcImFsaWduQ29udGVudFwiOjQuMixcImFsaWduSXRlbXNcIjo0LjIsXCJhbGlnblNlbGZcIjo0LjIsXCJqdXN0aWZ5Q29udGVudFwiOjQuMixcIm9yZGVyXCI6NC4yLFwidHJhbnNpdGlvblwiOjQuMixcInRyYW5zaXRpb25EZWxheVwiOjQuMixcInRyYW5zaXRpb25EdXJhdGlvblwiOjQuMixcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOjQuMixcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOjQuMixcInRyYW5zZm9ybVwiOjQuNCxcInRyYW5zZm9ybU9yaWdpblwiOjQuNCxcInRyYW5zZm9ybU9yaWdpblhcIjo0LjQsXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6NC40LFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6NC40LFwicGVyc3BlY3RpdmVcIjo0LjQsXCJwZXJzcGVjdGl2ZU9yaWdpblwiOjQuNCxcInRyYW5zZm9ybVN0eWxlXCI6NC40LFwidHJhbnNmb3JtT3JpZ2luWlwiOjQuNCxcImFuaW1hdGlvblwiOjQuNCxcImFuaW1hdGlvbkRlbGF5XCI6NC40LFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6NC40LFwiYW5pbWF0aW9uRmlsbE1vZGVcIjo0LjQsXCJhbmltYXRpb25EdXJhdGlvblwiOjQuNCxcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6NC40LFwiYW5pbWF0aW9uTmFtZVwiOjQuNCxcImFuaW1hdGlvblBsYXlTdGF0ZVwiOjQuNCxcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6NC40LFwiYXBwZWFyYW5jZVwiOjQ2LFwidXNlclNlbGVjdFwiOjQ2LFwiZm9udEtlcm5pbmdcIjo0LjQsXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOjQ2LFwidGV4dEVtcGhhc2lzXCI6NDYsXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOjQ2LFwidGV4dEVtcGhhc2lzQ29sb3JcIjo0NixcImJveERlY29yYXRpb25CcmVha1wiOjQ2LFwiY2xpcFBhdGhcIjo0NixcIm1hc2tJbWFnZVwiOjQ2LFwibWFza01vZGVcIjo0NixcIm1hc2tSZXBlYXRcIjo0NixcIm1hc2tQb3NpdGlvblwiOjQ2LFwibWFza0NsaXBcIjo0NixcIm1hc2tPcmlnaW5cIjo0NixcIm1hc2tTaXplXCI6NDYsXCJtYXNrQ29tcG9zaXRlXCI6NDYsXCJtYXNrXCI6NDYsXCJtYXNrQm9yZGVyU291cmNlXCI6NDYsXCJtYXNrQm9yZGVyTW9kZVwiOjQ2LFwibWFza0JvcmRlclNsaWNlXCI6NDYsXCJtYXNrQm9yZGVyV2lkdGhcIjo0NixcIm1hc2tCb3JkZXJPdXRzZXRcIjo0NixcIm1hc2tCb3JkZXJSZXBlYXRcIjo0NixcIm1hc2tCb3JkZXJcIjo0NixcIm1hc2tUeXBlXCI6NDYsXCJmaWx0ZXJcIjo0NixcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjo0NixcImJyZWFrQWZ0ZXJcIjo0NixcImJyZWFrQmVmb3JlXCI6NDYsXCJicmVha0luc2lkZVwiOjQ2LFwiY29sdW1uQ291bnRcIjo0NixcImNvbHVtbkZpbGxcIjo0NixcImNvbHVtbkdhcFwiOjQ2LFwiY29sdW1uUnVsZVwiOjQ2LFwiY29sdW1uUnVsZUNvbG9yXCI6NDYsXCJjb2x1bW5SdWxlU3R5bGVcIjo0NixcImNvbHVtblJ1bGVXaWR0aFwiOjQ2LFwiY29sdW1uc1wiOjQ2LFwiY29sdW1uU3BhblwiOjQ2LFwiY29sdW1uV2lkdGhcIjo0Nn0sXCJhbmRfY2hyXCI6e1wiYXBwZWFyYW5jZVwiOjQ3LFwidXNlclNlbGVjdFwiOjQ3LFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjo0NyxcInRleHRFbXBoYXNpc1wiOjQ3LFwidGV4dEVtcGhhc2lzU3R5bGVcIjo0NyxcInRleHRFbXBoYXNpc0NvbG9yXCI6NDcsXCJib3hEZWNvcmF0aW9uQnJlYWtcIjo0NyxcImNsaXBQYXRoXCI6NDcsXCJtYXNrSW1hZ2VcIjo0NyxcIm1hc2tNb2RlXCI6NDcsXCJtYXNrUmVwZWF0XCI6NDcsXCJtYXNrUG9zaXRpb25cIjo0NyxcIm1hc2tDbGlwXCI6NDcsXCJtYXNrT3JpZ2luXCI6NDcsXCJtYXNrU2l6ZVwiOjQ3LFwibWFza0NvbXBvc2l0ZVwiOjQ3LFwibWFza1wiOjQ3LFwibWFza0JvcmRlclNvdXJjZVwiOjQ3LFwibWFza0JvcmRlck1vZGVcIjo0NyxcIm1hc2tCb3JkZXJTbGljZVwiOjQ3LFwibWFza0JvcmRlcldpZHRoXCI6NDcsXCJtYXNrQm9yZGVyT3V0c2V0XCI6NDcsXCJtYXNrQm9yZGVyUmVwZWF0XCI6NDcsXCJtYXNrQm9yZGVyXCI6NDcsXCJtYXNrVHlwZVwiOjQ3LFwidGV4dERlY29yYXRpb25TdHlsZVwiOjQ3LFwidGV4dERlY29yYXRpb25Ta2lwXCI6NDcsXCJ0ZXh0RGVjb3JhdGlvbkxpbmVcIjo0NyxcInRleHREZWNvcmF0aW9uQ29sb3JcIjo0NyxcImZpbHRlclwiOjQ3LFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOjQ3LFwiYnJlYWtBZnRlclwiOjQ3LFwiYnJlYWtCZWZvcmVcIjo0NyxcImJyZWFrSW5zaWRlXCI6NDcsXCJjb2x1bW5Db3VudFwiOjQ3LFwiY29sdW1uRmlsbFwiOjQ3LFwiY29sdW1uR2FwXCI6NDcsXCJjb2x1bW5SdWxlXCI6NDcsXCJjb2x1bW5SdWxlQ29sb3JcIjo0NyxcImNvbHVtblJ1bGVTdHlsZVwiOjQ3LFwiY29sdW1uUnVsZVdpZHRoXCI6NDcsXCJjb2x1bW5zXCI6NDcsXCJjb2x1bW5TcGFuXCI6NDcsXCJjb2x1bW5XaWR0aFwiOjQ3fSxcImFuZF91Y1wiOntcImZsZXhcIjo5LjksXCJmbGV4QmFzaXNcIjo5LjksXCJmbGV4RGlyZWN0aW9uXCI6OS45LFwiZmxleEdyb3dcIjo5LjksXCJmbGV4Rmxvd1wiOjkuOSxcImZsZXhTaHJpbmtcIjo5LjksXCJmbGV4V3JhcFwiOjkuOSxcImFsaWduQ29udGVudFwiOjkuOSxcImFsaWduSXRlbXNcIjo5LjksXCJhbGlnblNlbGZcIjo5LjksXCJqdXN0aWZ5Q29udGVudFwiOjkuOSxcIm9yZGVyXCI6OS45LFwidHJhbnNpdGlvblwiOjkuOSxcInRyYW5zaXRpb25EZWxheVwiOjkuOSxcInRyYW5zaXRpb25EdXJhdGlvblwiOjkuOSxcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOjkuOSxcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOjkuOSxcInRyYW5zZm9ybVwiOjkuOSxcInRyYW5zZm9ybU9yaWdpblwiOjkuOSxcInRyYW5zZm9ybU9yaWdpblhcIjo5LjksXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6OS45LFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6OS45LFwicGVyc3BlY3RpdmVcIjo5LjksXCJwZXJzcGVjdGl2ZU9yaWdpblwiOjkuOSxcInRyYW5zZm9ybVN0eWxlXCI6OS45LFwidHJhbnNmb3JtT3JpZ2luWlwiOjkuOSxcImFuaW1hdGlvblwiOjkuOSxcImFuaW1hdGlvbkRlbGF5XCI6OS45LFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6OS45LFwiYW5pbWF0aW9uRmlsbE1vZGVcIjo5LjksXCJhbmltYXRpb25EdXJhdGlvblwiOjkuOSxcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6OS45LFwiYW5pbWF0aW9uTmFtZVwiOjkuOSxcImFuaW1hdGlvblBsYXlTdGF0ZVwiOjkuOSxcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6OS45LFwiYXBwZWFyYW5jZVwiOjkuOSxcInVzZXJTZWxlY3RcIjo5LjksXCJmb250S2VybmluZ1wiOjkuOSxcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6OS45LFwidGV4dEVtcGhhc2lzXCI6OS45LFwidGV4dEVtcGhhc2lzU3R5bGVcIjo5LjksXCJ0ZXh0RW1waGFzaXNDb2xvclwiOjkuOSxcIm1hc2tJbWFnZVwiOjkuOSxcIm1hc2tNb2RlXCI6OS45LFwibWFza1JlcGVhdFwiOjkuOSxcIm1hc2tQb3NpdGlvblwiOjkuOSxcIm1hc2tDbGlwXCI6OS45LFwibWFza09yaWdpblwiOjkuOSxcIm1hc2tTaXplXCI6OS45LFwibWFza0NvbXBvc2l0ZVwiOjkuOSxcIm1hc2tcIjo5LjksXCJtYXNrQm9yZGVyU291cmNlXCI6OS45LFwibWFza0JvcmRlck1vZGVcIjo5LjksXCJtYXNrQm9yZGVyU2xpY2VcIjo5LjksXCJtYXNrQm9yZGVyV2lkdGhcIjo5LjksXCJtYXNrQm9yZGVyT3V0c2V0XCI6OS45LFwibWFza0JvcmRlclJlcGVhdFwiOjkuOSxcIm1hc2tCb3JkZXJcIjo5LjksXCJtYXNrVHlwZVwiOjkuOSxcInRleHRTaXplQWRqdXN0XCI6OS45LFwiZmlsdGVyXCI6OS45LFwiaHlwaGVuc1wiOjkuOSxcImZsb3dJbnRvXCI6OS45LFwiZmxvd0Zyb21cIjo5LjksXCJicmVha0JlZm9yZVwiOjkuOSxcImJyZWFrQWZ0ZXJcIjo5LjksXCJicmVha0luc2lkZVwiOjkuOSxcInJlZ2lvbkZyYWdtZW50XCI6OS45LFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOjkuOSxcImNvbHVtbkNvdW50XCI6OS45LFwiY29sdW1uRmlsbFwiOjkuOSxcImNvbHVtbkdhcFwiOjkuOSxcImNvbHVtblJ1bGVcIjo5LjksXCJjb2x1bW5SdWxlQ29sb3JcIjo5LjksXCJjb2x1bW5SdWxlU3R5bGVcIjo5LjksXCJjb2x1bW5SdWxlV2lkdGhcIjo5LjksXCJjb2x1bW5zXCI6OS45LFwiY29sdW1uU3BhblwiOjkuOSxcImNvbHVtbldpZHRoXCI6OS45fSxcIm9wX21pbmlcIjp7XCJib3JkZXJJbWFnZVwiOjUsXCJib3JkZXJJbWFnZU91dHNldFwiOjUsXCJib3JkZXJJbWFnZVJlcGVhdFwiOjUsXCJib3JkZXJJbWFnZVNsaWNlXCI6NSxcImJvcmRlckltYWdlU291cmNlXCI6NSxcImJvcmRlckltYWdlV2lkdGhcIjo1LFwidGFiU2l6ZVwiOjUsXCJvYmplY3RGaXRcIjo1LFwib2JqZWN0UG9zaXRpb25cIjo1fX07IG1vZHVsZS5leHBvcnRzID0gY2FuaXVzZURhdGFcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL2Nhbml1c2VEYXRhLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjYWxjO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBjYWxjKHBsdWdpbkludGVyZmFjZSkge1xuICB2YXIgcHJvcGVydHkgPSBwbHVnaW5JbnRlcmZhY2UucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IHBsdWdpbkludGVyZmFjZS52YWx1ZTtcbiAgdmFyIGJyb3dzZXJJbmZvID0gcGx1Z2luSW50ZXJmYWNlLmJyb3dzZXJJbmZvO1xuICB2YXIgcHJlZml4ID0gcGx1Z2luSW50ZXJmYWNlLnByZWZpeDtcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gcGx1Z2luSW50ZXJmYWNlLmtlZXBVbnByZWZpeGVkO1xuICB2YXIgZm9yY2VSdW4gPSBwbHVnaW5JbnRlcmZhY2UuZm9yY2VSdW47XG4gIHZhciBicm93c2VyID0gYnJvd3NlckluZm8uYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBicm93c2VySW5mby52ZXJzaW9uO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2NhbGMoJykgPiAtMSAmJiAoZm9yY2VSdW4gfHwgYnJvd3NlciA9PT0gJ2ZpcmVmb3gnICYmIHZlcnNpb24gPCAxNSB8fCBicm93c2VyID09PSAnY2hyb21lJyAmJiB2ZXJzaW9uIDwgMjUgfHwgYnJvd3NlciA9PT0gJ3NhZmFyaScgJiYgdmVyc2lvbiA8IDYuMSB8fCBicm93c2VyID09PSAnaW9zX3NhZicgJiYgdmVyc2lvbiA8IDcpKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gZm9yY2VSdW4gP1xuICAgIC8vIHByZWZpeCBhbGxcbiAgICBbJy13ZWJraXQtJywgJy1tb3otJ10ubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9jYWxjXFwoL2csIHByZWZpeCArICdjYWxjKCcpO1xuICAgIH0pLmpvaW4oJzsnICsgcHJvcGVydHkgKyAnOicpIDpcbiAgICAvLyBkZWZhdWx0XG4gICAgdmFsdWUucmVwbGFjZSgvY2FsY1xcKC9nLCBwcmVmaXguY3NzICsgJ2NhbGMoJyk7XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIG5ld1ZhbHVlICsgKGtlZXBVbnByZWZpeGVkID8gJzsnICsgcHJvcGVydHkgKyAnOicgKyB2YWx1ZSA6ICcnKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2NhbGMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGN1cnNvcjtcbnZhciB2YWx1ZXMgPSB7XG4gICd6b29tLWluJzogdHJ1ZSxcbiAgJ3pvb20tb3V0JzogdHJ1ZSxcbiAgZ3JhYjogdHJ1ZSxcbiAgZ3JhYmJpbmc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGN1cnNvcihwbHVnaW5JbnRlcmZhY2UpIHtcbiAgdmFyIHByb3BlcnR5ID0gcGx1Z2luSW50ZXJmYWNlLnByb3BlcnR5O1xuICB2YXIgdmFsdWUgPSBwbHVnaW5JbnRlcmZhY2UudmFsdWU7XG4gIHZhciBicm93c2VySW5mbyA9IHBsdWdpbkludGVyZmFjZS5icm93c2VySW5mbztcbiAgdmFyIHByZWZpeCA9IHBsdWdpbkludGVyZmFjZS5wcmVmaXg7XG4gIHZhciBrZWVwVW5wcmVmaXhlZCA9IHBsdWdpbkludGVyZmFjZS5rZWVwVW5wcmVmaXhlZDtcbiAgdmFyIGZvcmNlUnVuID0gcGx1Z2luSW50ZXJmYWNlLmZvcmNlUnVuO1xuICB2YXIgYnJvd3NlciA9IGJyb3dzZXJJbmZvLmJyb3dzZXI7XG4gIHZhciB2ZXJzaW9uID0gYnJvd3NlckluZm8udmVyc2lvbjtcblxuICBpZiAocHJvcGVydHkgPT09ICdjdXJzb3InICYmIHZhbHVlc1t2YWx1ZV0gJiYgKGZvcmNlUnVuIHx8IGJyb3dzZXIgPT09ICdmaXJlZm94JyAmJiB2ZXJzaW9uIDwgMjQgfHwgYnJvd3NlciA9PT0gJ2Nocm9tZScgJiYgdmVyc2lvbiA8IDM3IHx8IGJyb3dzZXIgPT09ICdzYWZhcmknICYmIHZlcnNpb24gPCA5IHx8IGJyb3dzZXIgPT09ICdvcGVyYScgJiYgdmVyc2lvbiA8IDI0KSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IGZvcmNlUnVuID9cbiAgICAvLyBwcmVmaXggYWxsXG4gICAgWyctd2Via2l0LScsICctbW96LSddLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgdmFsdWU7XG4gICAgfSkuam9pbignOycgKyBwcm9wZXJ0eSArICc6JykgOlxuICAgIC8vIGRlZmF1bHRcbiAgICBwcmVmaXguY3NzICsgdmFsdWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnNvcjogbmV3VmFsdWUgKyAoa2VlcFVucHJlZml4ZWQgPyAnOycgKyBwcm9wZXJ0eSArICc6JyArIHZhbHVlIDogJycpXG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvY3Vyc29yLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBmbGV4O1xudmFyIHZhbHVlcyA9IHsgZmxleDogdHJ1ZSwgJ2lubGluZS1mbGV4JzogdHJ1ZSB9O1xuXG5mdW5jdGlvbiBmbGV4KHBsdWdpbkludGVyZmFjZSkge1xuICB2YXIgcHJvcGVydHkgPSBwbHVnaW5JbnRlcmZhY2UucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IHBsdWdpbkludGVyZmFjZS52YWx1ZTtcbiAgdmFyIGJyb3dzZXJJbmZvID0gcGx1Z2luSW50ZXJmYWNlLmJyb3dzZXJJbmZvO1xuICB2YXIgcHJlZml4ID0gcGx1Z2luSW50ZXJmYWNlLnByZWZpeDtcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gcGx1Z2luSW50ZXJmYWNlLmtlZXBVbnByZWZpeGVkO1xuICB2YXIgZm9yY2VSdW4gPSBwbHVnaW5JbnRlcmZhY2UuZm9yY2VSdW47XG4gIHZhciBicm93c2VyID0gYnJvd3NlckluZm8uYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBicm93c2VySW5mby52ZXJzaW9uO1xuXG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHZhbHVlc1t2YWx1ZV0gJiYgKGZvcmNlUnVuIHx8IGJyb3dzZXIgPT09ICdjaHJvbWUnICYmIHZlcnNpb24gPCAyOSAmJiB2ZXJzaW9uID4gMjAgfHwgKGJyb3dzZXIgPT09ICdzYWZhcmknIHx8IGJyb3dzZXIgPT09ICdpb3Nfc2FmJykgJiYgdmVyc2lvbiA8IDkgJiYgdmVyc2lvbiA+IDYgfHwgYnJvd3NlciA9PT0gJ29wZXJhJyAmJiAodmVyc2lvbiA9PSAxNSB8fCB2ZXJzaW9uID09IDE2KSkpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBmb3JjZVJ1biA/XG4gICAgLy8gcHJlZml4IGFsbFxuICAgIFsnLXdlYmtpdC1ib3gnLCAnLW1vei1ib3gnLCAnLW1zLScgKyB2YWx1ZSArICdib3gnLCAnLXdlYmtpdC0nICsgdmFsdWVdLmpvaW4oJzsnICsgcHJvcGVydHkgKyAnOicpIDpcbiAgICAvLyBkZWZhdWx0XG4gICAgJy13ZWJraXQtJyArIHZhbHVlO1xuICAgIHJldHVybiB7XG4gICAgICBkaXNwbGF5OiBuZXdWYWx1ZSArIChrZWVwVW5wcmVmaXhlZCA/ICc7JyArIHByb3BlcnR5ICsgJzonICsgdmFsdWUgOiAnJylcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9mbGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZsZXhib3hJRTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2Rpc3RyaWJ1dGUnLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgZmxleDogJy1tcy1mbGV4Ym94JyxcbiAgJ2lubGluZS1mbGV4JzogJy1tcy1pbmxpbmUtZmxleGJveCdcbn07XG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25Db250ZW50OiAnbXNGbGV4TGluZVBhY2snLFxuICBhbGlnblNlbGY6ICdtc0ZsZXhJdGVtQWxpZ24nLFxuICBhbGlnbkl0ZW1zOiAnbXNGbGV4QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ21zRmxleFBhY2snLFxuICBvcmRlcjogJ21zRmxleE9yZGVyJyxcbiAgZmxleEdyb3c6ICdtc0ZsZXhQb3NpdGl2ZScsXG4gIGZsZXhTaHJpbms6ICdtc0ZsZXhOZWdhdGl2ZScsXG4gIGZsZXhCYXNpczogJ21zUHJlZmVycmVkU2l6ZSdcbn07XG5cbnZhciBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoYWx0ZXJuYXRpdmVQcm9wcykuY29uY2F0KCdkaXNwbGF5JykucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIHByb3ApIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN1bHQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcCwgdHJ1ZSkpO1xufSwge30pO1xuXG5mdW5jdGlvbiBmbGV4Ym94SUUocGx1Z2luSW50ZXJmYWNlKSB7XG4gIHZhciBwcm9wZXJ0eSA9IHBsdWdpbkludGVyZmFjZS5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gcGx1Z2luSW50ZXJmYWNlLnZhbHVlO1xuICB2YXIgc3R5bGVzID0gcGx1Z2luSW50ZXJmYWNlLnN0eWxlcztcbiAgdmFyIGJyb3dzZXJJbmZvID0gcGx1Z2luSW50ZXJmYWNlLmJyb3dzZXJJbmZvO1xuICB2YXIgcHJlZml4ID0gcGx1Z2luSW50ZXJmYWNlLnByZWZpeDtcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gcGx1Z2luSW50ZXJmYWNlLmtlZXBVbnByZWZpeGVkO1xuICB2YXIgZm9yY2VSdW4gPSBwbHVnaW5JbnRlcmZhY2UuZm9yY2VSdW47XG4gIHZhciBicm93c2VyID0gYnJvd3NlckluZm8uYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBicm93c2VySW5mby52ZXJzaW9uO1xuXG4gIGlmIChwcm9wZXJ0aWVzW3Byb3BlcnR5XSAmJiAoZm9yY2VSdW4gfHwgKGJyb3dzZXIgPT09ICdpZV9tb2InIHx8IGJyb3dzZXIgPT09ICdpZScpICYmIHZlcnNpb24gPT0gMTApKSB7XG4gICAgaWYgKCFrZWVwVW5wcmVmaXhlZCkge1xuICAgICAgZGVsZXRlIHN0eWxlc1twcm9wZXJ0eV07XG4gICAgfVxuXG4gICAgaWYgKGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldKSB7XG4gICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSwgYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdIHx8IHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSArIChrZWVwVW5wcmVmaXhlZCA/ICc7JyArIHByb3BlcnR5ICsgJzonICsgdmFsdWUgOiAnJykpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvZmxleGJveElFLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZsZXhib3hPbGQ7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBhbHRlcm5hdGl2ZVZhbHVlcyA9IHtcbiAgJ3NwYWNlLWFyb3VuZCc6ICdqdXN0aWZ5JyxcbiAgJ3NwYWNlLWJldHdlZW4nOiAnanVzdGlmeScsXG4gICdmbGV4LXN0YXJ0JzogJ3N0YXJ0JyxcbiAgJ2ZsZXgtZW5kJzogJ2VuZCcsXG4gICd3cmFwLXJldmVyc2UnOiAnbXVsdGlwbGUnLFxuICB3cmFwOiAnbXVsdGlwbGUnLFxuICBmbGV4OiAnYm94JyxcbiAgJ2lubGluZS1mbGV4JzogJ2lubGluZS1ib3gnXG59O1xuXG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25JdGVtczogJ1dlYmtpdEJveEFsaWduJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdXZWJraXRCb3hQYWNrJyxcbiAgZmxleFdyYXA6ICdXZWJraXRCb3hMaW5lcydcbn07XG5cbnZhciBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoYWx0ZXJuYXRpdmVQcm9wcykuY29uY2F0KFsnYWxpZ25Db250ZW50JywgJ2FsaWduU2VsZicsICdkaXNwbGF5JywgJ29yZGVyJywgJ2ZsZXhHcm93JywgJ2ZsZXhTaHJpbmsnLCAnZmxleEJhc2lzJywgJ2ZsZXhEaXJlY3Rpb24nXSkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIHByb3ApIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN1bHQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcCwgdHJ1ZSkpO1xufSwge30pO1xuXG5mdW5jdGlvbiBmbGV4Ym94T2xkKHBsdWdpbkludGVyZmFjZSkge1xuICB2YXIgcHJvcGVydHkgPSBwbHVnaW5JbnRlcmZhY2UucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IHBsdWdpbkludGVyZmFjZS52YWx1ZTtcbiAgdmFyIHN0eWxlcyA9IHBsdWdpbkludGVyZmFjZS5zdHlsZXM7XG4gIHZhciBicm93c2VySW5mbyA9IHBsdWdpbkludGVyZmFjZS5icm93c2VySW5mbztcbiAgdmFyIHByZWZpeCA9IHBsdWdpbkludGVyZmFjZS5wcmVmaXg7XG4gIHZhciBrZWVwVW5wcmVmaXhlZCA9IHBsdWdpbkludGVyZmFjZS5rZWVwVW5wcmVmaXhlZDtcbiAgdmFyIGZvcmNlUnVuID0gcGx1Z2luSW50ZXJmYWNlLmZvcmNlUnVuO1xuICB2YXIgYnJvd3NlciA9IGJyb3dzZXJJbmZvLmJyb3dzZXI7XG4gIHZhciB2ZXJzaW9uID0gYnJvd3NlckluZm8udmVyc2lvbjtcblxuICBpZiAocHJvcGVydGllc1twcm9wZXJ0eV0gJiYgKGZvcmNlUnVuIHx8IGJyb3dzZXIgPT09ICdmaXJlZm94JyAmJiB2ZXJzaW9uIDwgMjIgfHwgYnJvd3NlciA9PT0gJ2Nocm9tZScgJiYgdmVyc2lvbiA8IDIxIHx8IChicm93c2VyID09PSAnc2FmYXJpJyB8fCBicm93c2VyID09PSAnaW9zX3NhZicpICYmIHZlcnNpb24gPD0gNi4xIHx8IGJyb3dzZXIgPT09ICdhbmRyb2lkJyAmJiB2ZXJzaW9uIDwgNC40IHx8IGJyb3dzZXIgPT09ICdhbmRfdWMnKSkge1xuICAgIGlmICgha2VlcFVucHJlZml4ZWQpIHtcbiAgICAgIGRlbGV0ZSBzdHlsZXNbcHJvcGVydHldO1xuICAgIH1cbiAgICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgV2Via2l0Qm94T3JpZW50OiB2YWx1ZS5pbmRleE9mKCdjb2x1bW4nKSA+IC0xID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyxcbiAgICAgICAgV2Via2l0Qm94RGlyZWN0aW9uOiB2YWx1ZS5pbmRleE9mKCdyZXZlcnNlJykgPiAtMSA/ICdyZXZlcnNlJyA6ICdub3JtYWwnXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6IHByZWZpeC5jc3MgKyBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gKyAoa2VlcFVucHJlZml4ZWQgPyAnOycgKyBwcm9wZXJ0eSArICc6JyArIHZhbHVlIDogJycpXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0pIHtcbiAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldLCBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWUpO1xuICAgIH1cbiAgICBpZiAoYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdKSB7XG4gICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wZXJ0eSwgYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdICsgKGtlZXBVbnByZWZpeGVkID8gJzsnICsgcHJvcGVydHkgKyAnOicgKyB2YWx1ZSA6ICcnKSk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9mbGV4Ym94T2xkLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBncmFkaWVudDtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIHZhbHVlcyA9IC9saW5lYXItZ3JhZGllbnR8cmFkaWFsLWdyYWRpZW50fHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnR8cmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudC87XG5cbmZ1bmN0aW9uIGdyYWRpZW50KHBsdWdpbkludGVyZmFjZSkge1xuICB2YXIgcHJvcGVydHkgPSBwbHVnaW5JbnRlcmZhY2UucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IHBsdWdpbkludGVyZmFjZS52YWx1ZTtcbiAgdmFyIGJyb3dzZXJJbmZvID0gcGx1Z2luSW50ZXJmYWNlLmJyb3dzZXJJbmZvO1xuICB2YXIgcHJlZml4ID0gcGx1Z2luSW50ZXJmYWNlLnByZWZpeDtcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gcGx1Z2luSW50ZXJmYWNlLmtlZXBVbnByZWZpeGVkO1xuICB2YXIgZm9yY2VSdW4gPSBwbHVnaW5JbnRlcmZhY2UuZm9yY2VSdW47XG4gIHZhciBicm93c2VyID0gYnJvd3NlckluZm8uYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBicm93c2VySW5mby52ZXJzaW9uO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLm1hdGNoKHZhbHVlcykgIT09IG51bGwgJiYgKGZvcmNlUnVuIHx8IGJyb3dzZXIgPT09ICdmaXJlZm94JyAmJiB2ZXJzaW9uIDwgMTYgfHwgYnJvd3NlciA9PT0gJ2Nocm9tZScgJiYgdmVyc2lvbiA8IDI2IHx8IChicm93c2VyID09PSAnc2FmYXJpJyB8fCBicm93c2VyID09PSAnaW9zX3NhZicpICYmIHZlcnNpb24gPCA3IHx8IChicm93c2VyID09PSAnb3BlcmEnIHx8IGJyb3dzZXIgPT09ICdvcF9taW5pJykgJiYgdmVyc2lvbiA8IDEyLjEgfHwgYnJvd3NlciA9PT0gJ2FuZHJvaWQnICYmIHZlcnNpb24gPCA0LjQgfHwgYnJvd3NlciA9PT0gJ2FuZF91YycpKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gZm9yY2VSdW4gP1xuICAgIC8vIHByZWZpeCBhbGxcbiAgICBbJy13ZWJraXQtJywgJy1tb3otJ10ubWFwKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyB2YWx1ZTtcbiAgICB9KS5qb2luKCc7JyArIHByb3BlcnR5ICsgJzonKSA6XG4gICAgLy8gZGVmYXVsdFxuICAgIHByZWZpeC5jc3MgKyB2YWx1ZTtcbiAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wZXJ0eSwgbmV3VmFsdWUgKyAoa2VlcFVucHJlZml4ZWQgPyAnOycgKyBwcm9wZXJ0eSArICc6JyArIHZhbHVlIDogJycpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvZ3JhZGllbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHNpemluZztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIG1heEhlaWdodDogdHJ1ZSxcbiAgbWF4V2lkdGg6IHRydWUsXG4gIHdpZHRoOiB0cnVlLFxuICBoZWlnaHQ6IHRydWUsXG4gIGNvbHVtbldpZHRoOiB0cnVlLFxuICBtaW5XaWR0aDogdHJ1ZSxcbiAgbWluSGVpZ2h0OiB0cnVlXG59O1xudmFyIHZhbHVlcyA9IHtcbiAgJ21pbi1jb250ZW50JzogdHJ1ZSxcbiAgJ21heC1jb250ZW50JzogdHJ1ZSxcbiAgJ2ZpbGwtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgJ2ZpdC1jb250ZW50JzogdHJ1ZSxcbiAgJ2NvbnRhaW4tZmxvYXRzJzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gc2l6aW5nKHBsdWdpbkludGVyZmFjZSkge1xuICB2YXIgcHJvcGVydHkgPSBwbHVnaW5JbnRlcmZhY2UucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IHBsdWdpbkludGVyZmFjZS52YWx1ZTtcbiAgdmFyIGJyb3dzZXJJbmZvID0gcGx1Z2luSW50ZXJmYWNlLmJyb3dzZXJJbmZvO1xuICB2YXIgcHJlZml4ID0gcGx1Z2luSW50ZXJmYWNlLnByZWZpeDtcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gcGx1Z2luSW50ZXJmYWNlLmtlZXBVbnByZWZpeGVkO1xuICB2YXIgZm9yY2VSdW4gPSBwbHVnaW5JbnRlcmZhY2UuZm9yY2VSdW47XG4gIHZhciBicm93c2VyID0gYnJvd3NlckluZm8uYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBicm93c2VySW5mby52ZXJzaW9uO1xuXG4gIC8vIFRoaXMgbWlnaHQgY2hhbmdlIGluIHRoZSBmdXR1cmVcbiAgLy8gS2VlcCBhbiBleWUgb24gaXRcbiAgaWYgKHByb3BlcnRpZXNbcHJvcGVydHldICYmIHZhbHVlc1t2YWx1ZV0pIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBmb3JjZVJ1biA/XG4gICAgLy8gcHJlZml4IGFsbFxuICAgIFsnLXdlYmtpdC0nLCAnLW1vei0nXS5tYXAoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgcmV0dXJuIHByZWZpeCArIHZhbHVlO1xuICAgIH0pLmpvaW4oJzsnICsgcHJvcGVydHkgKyAnOicpIDpcbiAgICAvLyBkZWZhdWx0XG4gICAgcHJlZml4LmNzcyArIHZhbHVlO1xuICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCBuZXdWYWx1ZSArIChrZWVwVW5wcmVmaXhlZCA/ICc7JyArIHByb3BlcnR5ICsgJzonICsgdmFsdWUgOiAnJykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9zaXppbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNhbGM7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIF91dGlsc0NhbWVsVG9EYXNoQ2FzZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbWVsVG9EYXNoQ2FzZScpO1xuXG52YXIgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlKTtcblxudmFyIF91dGlsc0NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuLi91dGlscy9jYXBpdGFsaXplU3RyaW5nJyk7XG5cbnZhciBfdXRpbHNDYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2FwaXRhbGl6ZVN0cmluZyk7XG5cbmZ1bmN0aW9uIGNhbGMocGx1Z2luSW50ZXJmYWNlKSB7XG4gIHZhciBwcm9wZXJ0eSA9IHBsdWdpbkludGVyZmFjZS5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gcGx1Z2luSW50ZXJmYWNlLnZhbHVlO1xuICB2YXIgYnJvd3NlckluZm8gPSBwbHVnaW5JbnRlcmZhY2UuYnJvd3NlckluZm87XG4gIHZhciBwcmVmaXggPSBwbHVnaW5JbnRlcmZhY2UucHJlZml4O1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBwbHVnaW5JbnRlcmZhY2Uua2VlcFVucHJlZml4ZWQ7XG4gIHZhciBmb3JjZVJ1biA9IHBsdWdpbkludGVyZmFjZS5mb3JjZVJ1bjtcbiAgdmFyIHJlcXVpcmVzUHJlZml4ID0gcGx1Z2luSW50ZXJmYWNlLnJlcXVpcmVzUHJlZml4O1xuICB2YXIgYnJvd3NlciA9IGJyb3dzZXJJbmZvLmJyb3dzZXI7XG4gIHZhciB2ZXJzaW9uID0gYnJvd3NlckluZm8udmVyc2lvbjtcblxuICBpZiAoXG4gIC8vIGFsc28gY2hlY2sgZm9yIGFscmVhZHkgcHJlZml4ZWQgdHJhbnNpdGlvbnNcbiAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAocHJvcGVydHkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPiAtMSB8fCBwcm9wZXJ0eS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3RyYW5zaXRpb25wcm9wZXJ0eScpID4gLTEpKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3JldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVxdWlyZXNQcmVmaXhEYXNoQ2FzZWQgPSBPYmplY3Qua2V5cyhyZXF1aXJlc1ByZWZpeCkubWFwKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlsc0NhbWVsVG9EYXNoQ2FzZTJbJ2RlZmF1bHQnXSkocHJvcGVydHkpO1xuICAgICAgfSk7XG4gICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZTtcblxuICAgICAgLy8gb25seSBzcGxpdCBtdWx0aSB2YWx1ZXMsIG5vdCBjdWJpYyBiZXppZXJzXG4gICAgICB2YXIgbXVsdGlwbGVWYWx1ZXMgPSBuZXdWYWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKTtcblxuICAgICAgcmVxdWlyZXNQcmVmaXhEYXNoQ2FzZWQuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgbXVsdGlwbGVWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgICAgICAgIGlmICh2YWwuaW5kZXhPZihwcm9wZXJ0eSkgPiAtMSkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IGZvcmNlUnVuID9cbiAgICAgICAgICAgIC8vIHByZWZpeCBhbGxcbiAgICAgICAgICAgIFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW1zLSddLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWwucmVwbGFjZShwcm9wZXJ0eSwgcHJlZml4ICsgcHJvcGVydHkpO1xuICAgICAgICAgICAgfSkuam9pbignLCcpIDpcbiAgICAgICAgICAgIC8vIGRlZmF1bHRcbiAgICAgICAgICAgIHZhbC5yZXBsYWNlKHByb3BlcnR5LCBwcmVmaXguY3NzICsgcHJvcGVydHkpO1xuICAgICAgICAgICAgbXVsdGlwbGVWYWx1ZXNbaW5kZXhdID0gbmV3VmFsICsgKGtlZXBVbnByZWZpeGVkID8gJywnICsgdmFsIDogJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBvdXRwdXRWYWx1ZSA9IG11bHRpcGxlVmFsdWVzLmpvaW4oJywnKTtcbiAgICAgIGlmIChmb3JjZVJ1bikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHY6IChfcmVmID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCAnV2Via2l0JyArICgwLCBfdXRpbHNDYXBpdGFsaXplU3RyaW5nMlsnZGVmYXVsdCddKShwcm9wZXJ0eSksIG91dHB1dFZhbHVlKSwgX2RlZmluZVByb3BlcnR5KF9yZWYsICdNb3onICsgKDAsIF91dGlsc0NhcGl0YWxpemVTdHJpbmcyWydkZWZhdWx0J10pKHByb3BlcnR5KSwgb3V0cHV0VmFsdWUpLCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgJ21zJyArICgwLCBfdXRpbHNDYXBpdGFsaXplU3RyaW5nMlsnZGVmYXVsdCddKShwcm9wZXJ0eSksIG91dHB1dFZhbHVlKSwgX2RlZmluZVByb3BlcnR5KF9yZWYsIHByb3BlcnR5LCBvdXRwdXRWYWx1ZSksIF9yZWYpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2OiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCBvdXRwdXRWYWx1ZSlcbiAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGlmICh0eXBlb2YgX3JldCA9PT0gJ29iamVjdCcpIHJldHVybiBfcmV0LnY7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL3RyYW5zaXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gbGVpZ2h0IHBvbHlmaWxsIGZvciBPYmplY3QuYXNzaWduXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoYmFzZSkge1xuICB2YXIgZXh0ZW5kID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgT2JqZWN0LmtleXMoZXh0ZW5kKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gYmFzZVtrZXldID0gZXh0ZW5kW2tleV07XG4gIH0pO1xuICByZXR1cm4gYmFzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb252ZXJ0cyBhIGNhbWVsLWNhc2Ugc3RyaW5nIHRvIGEgZGFzaC1jYXNlIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIHN0ciB0aGF0IGdldHMgY29udmVydGVkIHRvIGRhc2gtY2FzZVxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXpdfF4pKFtBLVpdKS9nLCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgIHJldHVybiBwMSArICctJyArIHAyLnRvTG93ZXJDYXNlKCk7XG4gIH0pLnJlcGxhY2UoJ21zLScsICctbXMtJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2NhbWVsVG9EYXNoQ2FzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfYm93c2VyID0gcmVxdWlyZSgnYm93c2VyJyk7XG5cbnZhciBfYm93c2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jvd3Nlcik7XG5cbnZhciB2ZW5kb3JQcmVmaXhlcyA9IHtcbiAgV2Via2l0OiBbJ2Nocm9tZScsICdzYWZhcmknLCAnaW9zJywgJ2FuZHJvaWQnLCAncGhhbnRvbScsICdvcGVyYScsICd3ZWJvcycsICdibGFja2JlcnJ5JywgJ2JhZGEnLCAndGl6ZW4nXSxcbiAgTW96OiBbJ2ZpcmVmb3gnLCAnc2VhbW9ua2V5JywgJ3NhaWxmaXNoJ10sXG4gIG1zOiBbJ21zaWUnLCAnbXNlZGdlJ11cbn07XG5cbnZhciBicm93c2VycyA9IHtcbiAgY2hyb21lOiBbWydjaHJvbWUnXV0sXG4gIHNhZmFyaTogW1snc2FmYXJpJ11dLFxuICBmaXJlZm94OiBbWydmaXJlZm94J11dLFxuICBpZTogW1snbXNpZSddXSxcbiAgZWRnZTogW1snbXNlZGdlJ11dLFxuICBvcGVyYTogW1snb3BlcmEnXV0sXG4gIGlvc19zYWY6IFtbJ2lvcycsICdtb2JpbGUnXSwgWydpb3MnLCAndGFibGV0J11dLFxuICBpZV9tb2I6IFtbJ3dpbmRvd3NwaG9uZScsICdtb2JpbGUnLCAnbXNpZSddLCBbJ3dpbmRvd3NwaG9uZScsICd0YWJsZXQnLCAnbXNpZSddLCBbJ3dpbmRvd3NwaG9uZScsICdtb2JpbGUnLCAnbXNlZGdlJ10sIFsnd2luZG93c3Bob25lJywgJ3RhYmxldCcsICdtc2VkZ2UnXV0sXG4gIG9wX21pbmk6IFtbJ29wZXJhJywgJ21vYmlsZSddLCBbJ29wZXJhJywgJ3RhYmxldCddXSxcbiAgYW5kX3VjOiBbWydhbmRyb2lkJywgJ21vYmlsZSddLCBbJ2FuZHJvaWQnLCAndGFibGV0J11dLFxuICBhbmRyb2lkOiBbWydhbmRyb2lkJywgJ21vYmlsZSddLCBbJ2FuZHJvaWQnLCAndGFibGV0J11dXG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJlZml4IGRhdGEgYXNzb2NpYXRlZCB3aXRoIGEgYnJvd3NlclxuICogQHBhcmFtIHtzdHJpbmd9IGJyb3dzZXIgLSBicm93c2VyIHRvIGZpbmQgYSBwcmVmaXggZm9yXG4gKi9cbnZhciBnZXRQcmVmaXhlcyA9IGZ1bmN0aW9uIGdldFByZWZpeGVzKGJyb3dzZXIpIHtcbiAgdmFyIHByZWZpeEtleXMgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmVmaXggPSB1bmRlZmluZWQ7XG4gIHZhciB2ZW5kb3JzID0gdW5kZWZpbmVkO1xuICB2YXIgY29uZGl0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZWZpeFZlbmRvciA9IHVuZGVmaW5lZDtcbiAgdmFyIGJyb3dzZXJWZW5kb3JzID0gdW5kZWZpbmVkO1xuXG4gIC8vIEZpbmQgdGhlIHByZWZpeCBmb3IgdGhpcyBicm93c2VyIChpZiBhbnkpXG4gIHByZWZpeEtleXMgPSBPYmplY3Qua2V5cyh2ZW5kb3JQcmVmaXhlcyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4S2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHByZWZpeCA9IHByZWZpeEtleXNbaV07XG5cbiAgICAvLyBGaW5kIGEgbWF0Y2hpbmcgdmVuZG9yXG4gICAgdmVuZG9ycyA9IHZlbmRvclByZWZpeGVzW3ByZWZpeF07XG4gICAgY29uZGl0aW9ucyA9IGJyb3dzZXJzW2Jyb3dzZXJdO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB2ZW5kb3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICBwcmVmaXhWZW5kb3IgPSB2ZW5kb3JzW2pdO1xuXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGNvbmRpdGlvbnMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgYnJvd3NlclZlbmRvcnMgPSBjb25kaXRpb25zW2tdO1xuXG4gICAgICAgIGlmIChicm93c2VyVmVuZG9ycy5pbmRleE9mKHByZWZpeFZlbmRvcikgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlubGluZTogcHJlZml4LFxuICAgICAgICAgICAgY3NzOiAnLScgKyBwcmVmaXgudG9Mb3dlckNhc2UoKSArICctJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBObyBwcmVmaXggZm91bmQgZm9yIHRoaXMgYnJvd3NlclxuICByZXR1cm4geyBpbmxpbmU6ICcnLCBjc3M6ICcnIH07XG59O1xuXG4vKipcbiAqIFVzZXMgYm93c2VyIHRvIGdldCBkZWZhdWx0IGJyb3dzZXIgaW5mb3JtYXRpb24gc3VjaCBhcyB2ZXJzaW9uIGFuZCBuYW1lXG4gKiBFdmFsdWF0ZXMgYm93c2VyIGluZm8gYW5kIGFkZHMgdmVuZG9yUHJlZml4IGluZm9ybWF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlckFnZW50IC0gdXNlckFnZW50IHRoYXQgZ2V0cyBldmFsdWF0ZWRcbiAqL1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAodXNlckFnZW50KSB7XG4gIGlmICghdXNlckFnZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGluZm8gPSB7fTtcblxuICAvLyBTcGVjaWFsIHVzZXIgYWdlbnQsIHJldHVybiBhbGwgc3VwcG9ydGVkIHByZWZpeGVzXG4gIC8vIGluc3RlYWQgb2YgcmV0dXJuaW5nIGEgc3RyaW5nIGJyb3dzZXIgbmFtZSBhbmQgYSBwcmVmaXggb2JqZWN0XG4gIC8vIHdlIHJldHVybiBhbiBhcnJheSBvZiBicm93c2VyIG5hbWVzIGFuZCBtYXAgb2YgcHJlZml4ZXMgZm9yIGVhY2ggYnJvd3NlclxuICBpZiAodXNlckFnZW50ID09PSAnKicpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXJyYXkgb2Ygc3VwcG9ydGVkIGJyb3dzZXJzXG4gICAgaW5mby5icm93c2VycyA9IE9iamVjdC5rZXlzKGJyb3dzZXJzKTtcblxuICAgIC8vIFJldHVybiBwcmVmaXhlcyBhc3NvY2lhdGVkIGJ5IGJyb3dzZXJcbiAgICBpbmZvLnByZWZpeGVzID0ge307XG5cbiAgICAvLyBJdGVyYXRlIGJyb3dzZXIgbGlzdCwgYXNzaWduIHByZWZpeCB0byBlYWNoXG4gICAgaW5mby5icm93c2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChicm93c2VyKSB7XG4gICAgICBpbmZvLnByZWZpeGVzW2Jyb3dzZXJdID0gZ2V0UHJlZml4ZXMoYnJvd3Nlcik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxuXG4gIC8vIE5vcm1hbCB1c2VyIGFnZW50LCBkZXRlY3QgYnJvd3NlclxuICBpbmZvID0gX2Jvd3NlcjJbJ2RlZmF1bHQnXS5fZGV0ZWN0KHVzZXJBZ2VudCk7XG5cbiAgT2JqZWN0LmtleXModmVuZG9yUHJlZml4ZXMpLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIHZlbmRvclByZWZpeGVzW3ByZWZpeF0uZm9yRWFjaChmdW5jdGlvbiAoYnJvd3Nlcikge1xuICAgICAgaWYgKGluZm9bYnJvd3Nlcl0pIHtcbiAgICAgICAgaW5mby5wcmVmaXggPSB7XG4gICAgICAgICAgaW5saW5lOiBwcmVmaXgsXG4gICAgICAgICAgY3NzOiAnLScgKyBwcmVmaXgudG9Mb3dlckNhc2UoKSArICctJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICB2YXIgbmFtZSA9ICcnO1xuICBPYmplY3Qua2V5cyhicm93c2VycykuZm9yRWFjaChmdW5jdGlvbiAoYnJvd3Nlcikge1xuICAgIGJyb3dzZXJzW2Jyb3dzZXJdLmZvckVhY2goZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgICAgdmFyIG1hdGNoID0gMDtcbiAgICAgIGNvbmRpdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChzaW5nbGUpIHtcbiAgICAgICAgaWYgKGluZm9bc2luZ2xlXSkge1xuICAgICAgICAgIG1hdGNoICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGNvbmRpdGlvbi5sZW5ndGggPT09IG1hdGNoKSB7XG4gICAgICAgIG5hbWUgPSBicm93c2VyO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBpbmZvLmJyb3dzZXIgPSBuYW1lO1xuICAvLyBGb3IgY29yZG92YSBJT1MgOCB0aGUgdmVyc2lvbiBpcyBtaXNzaW5nLCBzZXQgdHJ1bmNhdGVkIG9zdmVyc2lvbiB0byBwcmV2ZW50IE5hTlxuICBpbmZvLnZlcnNpb24gPSBpbmZvLnZlcnNpb24gPyBwYXJzZUZsb2F0KGluZm8udmVyc2lvbikgOiBwYXJzZUludChwYXJzZUZsb2F0KGluZm8ub3N2ZXJzaW9uKSwgMTApO1xuXG4gIC8vIHNlcGVyYXRlIG5hdGl2ZSBhbmRyb2lkIGNocm9tZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9mcmlzY2htYW5uL2lubGluZS1zdHlsZS1wcmVmaXhlci9pc3N1ZXMvNDVcbiAgaWYgKGluZm8uYnJvd3NlciA9PT0gJ2FuZHJvaWQnICYmIGluZm8uY2hyb21lICYmIGluZm8udmVyc2lvbiA+IDM3KSB7XG4gICAgaW5mby5icm93c2VyID0gJ2FuZF9jaHInO1xuICB9XG4gIGluZm8udmVyc2lvbiA9IHBhcnNlRmxvYXQoaW5mby52ZXJzaW9uKTtcbiAgaW5mby5vc3ZlcnNpb24gPSBwYXJzZUZsb2F0KGluZm8ub3N2ZXJzaW9uKTtcbiAgLy8gRm9yIGFuZHJvaWQgPCA0LjQgd2Ugd2FudCB0byBjaGVjayB0aGUgb3N2ZXJzaW9uXG4gIC8vIG5vdCB0aGUgY2hyb21lIHZlcnNpb24sIHNlZSBpc3N1ZSAjMjZcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvZnJpc2NobWFubi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvaXNzdWVzLzI2XG4gIGlmIChpbmZvLmJyb3dzZXIgPT09ICdhbmRyb2lkJyAmJiBpbmZvLm9zdmVyc2lvbiA8IDUpIHtcbiAgICBpbmZvLnZlcnNpb24gPSBpbmZvLm9zdmVyc2lvbjtcbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9nZXRCcm93c2VySW5mb3JtYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIGJyb3dzZXIgPSBfcmVmLmJyb3dzZXI7XG4gIHZhciB2ZXJzaW9uID0gX3JlZi52ZXJzaW9uO1xuICB2YXIgcHJlZml4ID0gX3JlZi5wcmVmaXg7XG5cbiAgdmFyIHByZWZpeGVkS2V5ZnJhbWVzID0gJ2tleWZyYW1lcyc7XG5cbiAgaWYgKGJyb3dzZXIgPT09ICdjaHJvbWUnICYmIHZlcnNpb24gPCA0MyB8fCAoYnJvd3NlciA9PT0gJ3NhZmFyaScgfHwgYnJvd3NlciA9PT0gJ2lvc19zYWYnKSAmJiB2ZXJzaW9uIDwgOSB8fCBicm93c2VyID09PSAnb3BlcmEnICYmIHZlcnNpb24gPCAzMCB8fCBicm93c2VyID09PSAnYW5kcm9pZCcgJiYgdmVyc2lvbiA8PSA0LjQgfHwgYnJvd3NlciA9PT0gJ2FuZF91YycpIHtcbiAgICBwcmVmaXhlZEtleWZyYW1lcyA9IHByZWZpeC5jc3MgKyBwcmVmaXhlZEtleWZyYW1lcztcbiAgfVxuICByZXR1cm4gcHJlZml4ZWRLZXlmcmFtZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2dldFByZWZpeGVkS2V5ZnJhbWVzLmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIG9ubHkgdGhyb3cgd2FybmluZ3MgaWYgZGV2bW9kZSBpcyBlbmFibGVkXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvd2Fybi5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiFcbiAqIGlzLXBsYWluLW9iamVjdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtcGxhaW4tb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0T2JqZWN0KG8pIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG8pID09PSB0cnVlXG4gICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG8pIHtcbiAgdmFyIGN0b3IscHJvdDtcbiAgXG4gIGlmIChpc09iamVjdE9iamVjdChvKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgXG4gIC8vIElmIGhhcyBtb2RpZmllZCBjb25zdHJ1Y3RvclxuICBjdG9yID0gby5jb25zdHJ1Y3RvcjtcbiAgaWYgKHR5cGVvZiBjdG9yICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG4gIFxuICAvLyBJZiBoYXMgbW9kaWZpZWQgcHJvdG90eXBlXG4gIHByb3QgPSBjdG9yLnByb3RvdHlwZTtcbiAgaWYgKGlzT2JqZWN0T2JqZWN0KHByb3QpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICBcbiAgLy8gSWYgY29uc3RydWN0b3IgZG9lcyBub3QgaGF2ZSBhbiBPYmplY3Qtc3BlY2lmaWMgbWV0aG9kXG4gIGlmIChwcm90Lmhhc093blByb3BlcnR5KCdpc1Byb3RvdHlwZU9mJykgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICAvLyBNb3N0IGxpa2VseSBhIHBsYWluIE9iamVjdFxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pcy1wbGFpbi1vYmplY3QvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gKiBpc29iamVjdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXNvYmplY3Q+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnXG4gICAgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pcy1wbGFpbi1vYmplY3Qvfi9pc29iamVjdC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCA0LjAuMCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNiBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE2IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAtc3RhcnQgPiBsZW5ndGggPyAwIDogKGxlbmd0aCArIHN0YXJ0KTtcbiAgfVxuICBlbmQgPSBlbmQgPiBsZW5ndGggPyBsZW5ndGggOiBlbmQ7XG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlbmd0aDtcbiAgfVxuICBsZW5ndGggPSBzdGFydCA+IGVuZCA/IDAgOiAoKGVuZCAtIHN0YXJ0KSA+Pj4gMCk7XG4gIHN0YXJ0ID4+Pj0gMDtcblxuICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gYXJyYXlbaW5kZXggKyBzdGFydF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2xpY2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2guX2Jhc2VzbGljZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCA0LjAuMCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNiBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE2IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgYmFzZVNsaWNlID0gcmVxdWlyZSgnbG9kYXNoLl9iYXNlc2xpY2UnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMCxcbiAgICBNQVhfSU5URUdFUiA9IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4LFxuICAgIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYGdsb2JhbGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IGdsb2JhbC5PYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzbGljZSBvZiBgYXJyYXlgIHdpdGggYG5gIGVsZW1lbnRzIGRyb3BwZWQgZnJvbSB0aGUgZW5kLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj0xXSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGRyb3AuXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIGZ1bmN0aW9ucyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZHJvcFJpZ2h0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiBfLmRyb3BSaWdodChbMSwgMiwgM10sIDIpO1xuICogLy8gPT4gWzFdXG4gKlxuICogXy5kcm9wUmlnaHQoWzEsIDIsIDNdLCA1KTtcbiAqIC8vID0+IFtdXG4gKlxuICogXy5kcm9wUmlnaHQoWzEsIDIsIDNdLCAwKTtcbiAqIC8vID0+IFsxLCAyLCAzXVxuICovXG5mdW5jdGlvbiBkcm9wUmlnaHQoYXJyYXksIG4sIGd1YXJkKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG4gPSAoZ3VhcmQgfHwgbiA9PT0gdW5kZWZpbmVkKSA/IDEgOiB0b0ludGVnZXIobik7XG4gIG4gPSBsZW5ndGggLSBuO1xuICByZXR1cm4gYmFzZVNsaWNlKGFycmF5LCAwLCBuIDwgMCA/IDAgOiBuKTtcbn1cblxuLyoqXG4gKiBHZXRzIGFsbCBidXQgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pbml0aWFsKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gaW5pdGlhbChhcnJheSkge1xuICByZXR1cm4gZHJvcFJpZ2h0KGFycmF5LCAxKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDggd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgY29uc3RydWN0b3JzLCBhbmRcbiAgLy8gUGhhbnRvbUpTIDEuOSB3aGljaCByZXR1cm5zICdmdW5jdGlvbicgZm9yIGBOb2RlTGlzdGAgaW5zdGFuY2VzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBsb29zZWx5IGJhc2VkIG9uIFtgVG9JbnRlZ2VyYF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvaW50ZWdlcikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIGludGVnZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9JbnRlZ2VyKDMpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMnKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9JbnRlZ2VyKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICB2YXIgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gKHJlbWFpbmRlciA/IHZhbHVlIC0gcmVtYWluZGVyIDogdmFsdWUpIDogMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMnKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IGlzRnVuY3Rpb24odmFsdWUudmFsdWVPZikgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRpYWw7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2guaW5pdGlhbC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCAzLjAuMCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNy4wIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKipcbiAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5sYXN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgcmV0dXJuIGxlbmd0aCA/IGFycmF5W2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxhc3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gubGFzdC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZTtcblxudmFyIF9hcHBlbmRQeElmTmVlZGVkID0gcmVxdWlyZSgnLi9hcHBlbmQtcHgtaWYtbmVlZGVkJyk7XG5cbnZhciBfYXBwZW5kUHhJZk5lZWRlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcHBlbmRQeElmTmVlZGVkKTtcblxudmFyIF9tYXBPYmplY3QgPSByZXF1aXJlKCcuL21hcC1vYmplY3QnKTtcblxudmFyIF9tYXBPYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwT2JqZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUoc3R5bGUpIHtcbiAgcmV0dXJuICgwLCBfbWFwT2JqZWN0Mi5kZWZhdWx0KShzdHlsZSwgZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgcmV0dXJuICgwLCBfYXBwZW5kUHhJZk5lZWRlZDIuZGVmYXVsdCkoa2V5LCBzdHlsZVtrZXldKSArICcgIWltcG9ydGFudCc7XG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9hcHBlbmQtaW1wb3J0YW50LXRvLWVhY2gtdmFsdWUuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NhbWVsQ2FzZVJlZ2V4ID0gLyhbYS16XSk/KFtBLVpdKS9nO1xuXG52YXIgX2NhbWVsQ2FzZVJlcGxhY2VyID0gZnVuY3Rpb24gX2NhbWVsQ2FzZVJlcGxhY2VyKG1hdGNoLCBwMSwgcDIpIHtcbiAgcmV0dXJuIChwMSB8fCAnJykgKyAnLScgKyBwMi50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIF9jYW1lbENhc2VUb0Rhc2hDYXNlID0gZnVuY3Rpb24gX2NhbWVsQ2FzZVRvRGFzaENhc2Uocykge1xuICByZXR1cm4gcy5yZXBsYWNlKF9jYW1lbENhc2VSZWdleCwgX2NhbWVsQ2FzZVJlcGxhY2VyKTtcbn07XG5cbnZhciBjYW1lbENhc2VQcm9wc1RvRGFzaENhc2UgPSBmdW5jdGlvbiBjYW1lbENhc2VQcm9wc1RvRGFzaENhc2UocHJlZml4ZWRTdHlsZSkge1xuICAvLyBTaW5jZSBwcmVmaXggaXMgZXhwZWN0ZWQgdG8gd29yayBvbiBpbmxpbmUgc3R5bGUgb2JqZWN0cywgd2UgbXVzdFxuICAvLyB0cmFuc2xhdGUgdGhlIGtleXMgdG8gZGFzaCBjYXNlIGZvciByZW5kZXJpbmcgdG8gQ1NTLlxuICByZXR1cm4gT2JqZWN0LmtleXMocHJlZml4ZWRTdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgIHZhciBkYXNoQ2FzZUtleSA9IF9jYW1lbENhc2VUb0Rhc2hDYXNlKGtleSk7XG5cbiAgICAvLyBGaXggSUUgdmVuZG9yIHByZWZpeFxuICAgIGlmICgvXm1zLS8udGVzdChkYXNoQ2FzZUtleSkpIHtcbiAgICAgIGRhc2hDYXNlS2V5ID0gJy0nICsgZGFzaENhc2VLZXk7XG4gICAgfVxuXG4gICAgcmVzdWx0W2Rhc2hDYXNlS2V5XSA9IHByZWZpeGVkU3R5bGVba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjYW1lbENhc2VQcm9wc1RvRGFzaENhc2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL2NhbWVsLWNhc2UtcHJvcHMtdG8tZGFzaC1jYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2VuaGFuY2VyID0gcmVxdWlyZSgnLi4vZW5oYW5jZXInKTtcblxudmFyIF9lbmhhbmNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbmhhbmNlcik7XG5cbnZhciBfc3R5bGVLZWVwZXIgPSByZXF1aXJlKCcuLi9zdHlsZS1rZWVwZXInKTtcblxudmFyIF9zdHlsZUtlZXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZUtlZXBlcik7XG5cbnZhciBfc3R5bGVTaGVldCA9IHJlcXVpcmUoJy4vc3R5bGUtc2hlZXQnKTtcblxudmFyIF9zdHlsZVNoZWV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlU2hlZXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9nZXRTdHlsZUtlZXBlcihpbnN0YW5jZSkge1xuICBpZiAoIWluc3RhbmNlLl9yYWRpdW1TdHlsZUtlZXBlcikge1xuICAgIHZhciB1c2VyQWdlbnQgPSBpbnN0YW5jZS5wcm9wcy5yYWRpdW1Db25maWcgJiYgaW5zdGFuY2UucHJvcHMucmFkaXVtQ29uZmlnLnVzZXJBZ2VudCB8fCBpbnN0YW5jZS5jb250ZXh0Ll9yYWRpdW1Db25maWcgJiYgaW5zdGFuY2UuY29udGV4dC5fcmFkaXVtQ29uZmlnLnVzZXJBZ2VudDtcbiAgICBpbnN0YW5jZS5fcmFkaXVtU3R5bGVLZWVwZXIgPSBuZXcgX3N0eWxlS2VlcGVyMi5kZWZhdWx0KHVzZXJBZ2VudCk7XG4gIH1cblxuICByZXR1cm4gaW5zdGFuY2UuX3JhZGl1bVN0eWxlS2VlcGVyO1xufVxuXG52YXIgU3R5bGVSb290ID0gKGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTdHlsZVJvb3QsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlUm9vdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVSb290KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICBfZ2V0U3R5bGVLZWVwZXIoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFN0eWxlUm9vdC5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7IF9yYWRpdW1TdHlsZUtlZXBlcjogX2dldFN0eWxlS2VlcGVyKHRoaXMpIH07XG4gIH07XG5cbiAgU3R5bGVSb290LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB0aGlzLnByb3BzLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbixcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9zdHlsZVNoZWV0Mi5kZWZhdWx0LCBudWxsKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlUm9vdDtcbn0pKF9yZWFjdC5Db21wb25lbnQpO1xuXG5TdHlsZVJvb3QuY29udGV4dFR5cGVzID0ge1xuICBfcmFkaXVtQ29uZmlnOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgX3JhZGl1bVN0eWxlS2VlcGVyOiBfcmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoX3N0eWxlS2VlcGVyMi5kZWZhdWx0KVxufTtcblxuU3R5bGVSb290LmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICBfcmFkaXVtU3R5bGVLZWVwZXI6IF9yZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihfc3R5bGVLZWVwZXIyLmRlZmF1bHQpXG59O1xuXG5TdHlsZVJvb3QgPSAoMCwgX2VuaGFuY2VyMi5kZWZhdWx0KShTdHlsZVJvb3QpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTdHlsZVJvb3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL2NvbXBvbmVudHMvc3R5bGUtcm9vdC5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3MsIF90ZW1wO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfc3R5bGVLZWVwZXIgPSByZXF1aXJlKCcuLi9zdHlsZS1rZWVwZXInKTtcblxudmFyIF9zdHlsZUtlZXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZUtlZXBlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFN0eWxlU2hlZXQgPSAoX3RlbXAgPSBfY2xhc3MgPSAoZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN0eWxlU2hlZXQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0eWxlU2hlZXQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0gX3RoaXMuX2dldENTU1N0YXRlKCk7XG5cbiAgICBfdGhpcy5fb25DaGFuZ2UgPSBfdGhpcy5fb25DaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuY29udGV4dC5fcmFkaXVtU3R5bGVLZWVwZXIuc3Vic2NyaWJlKHRoaXMuX29uQ2hhbmdlKTtcbiAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5fZ2V0Q1NTU3RhdGUgPSBmdW5jdGlvbiBfZ2V0Q1NTU3RhdGUoKSB7XG4gICAgcmV0dXJuIHsgY3NzOiB0aGlzLmNvbnRleHQuX3JhZGl1bVN0eWxlS2VlcGVyLmdldENTUygpIH07XG4gIH07XG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuX29uQ2hhbmdlID0gZnVuY3Rpb24gX29uQ2hhbmdlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIuX2lzTW91bnRlZCAmJiBfdGhpczIuc2V0U3RhdGUoX3RoaXMyLl9nZXRDU1NTdGF0ZSgpKTtcbiAgICB9LCAwKTtcbiAgfTtcblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzdHlsZScsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiB0aGlzLnN0YXRlLmNzcyB9IH0pO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSkoX3JlYWN0LkNvbXBvbmVudCksIF9jbGFzcy5jb250ZXh0VHlwZXMgPSB7XG4gIF9yYWRpdW1TdHlsZUtlZXBlcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5pbnN0YW5jZU9mKF9zdHlsZUtlZXBlcjIuZGVmYXVsdClcbn0sIF90ZW1wKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFN0eWxlU2hlZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL2NvbXBvbmVudHMvc3R5bGUtc2hlZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2Nzc1J1bGVTZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2Nzcy1ydWxlLXNldC10by1zdHJpbmcnKTtcblxudmFyIF9jc3NSdWxlU2V0VG9TdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzUnVsZVNldFRvU3RyaW5nKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU3R5bGUgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1N0eWxlJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICByYWRpdW1Db25maWc6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHJ1bGVzOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzY29wZVNlbGVjdG9yOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIF9yYWRpdW1Db25maWc6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjb3BlU2VsZWN0b3I6ICcnXG4gICAgfTtcbiAgfSxcbiAgX2J1aWxkU3R5bGVzOiBmdW5jdGlvbiBfYnVpbGRTdHlsZXMoc3R5bGVzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciB1c2VyQWdlbnQgPSB0aGlzLnByb3BzLnJhZGl1bUNvbmZpZyAmJiB0aGlzLnByb3BzLnJhZGl1bUNvbmZpZy51c2VyQWdlbnQgfHwgdGhpcy5jb250ZXh0ICYmIHRoaXMuY29udGV4dC5fcmFkaXVtQ29uZmlnICYmIHRoaXMuY29udGV4dC5fcmFkaXVtQ29uZmlnLnVzZXJBZ2VudDtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIHNlbGVjdG9yKSB7XG4gICAgICB2YXIgc2NvcGVTZWxlY3RvciA9IF90aGlzLnByb3BzLnNjb3BlU2VsZWN0b3I7XG5cbiAgICAgIHZhciBydWxlcyA9IHN0eWxlc1tzZWxlY3Rvcl07XG5cbiAgICAgIGlmIChzZWxlY3RvciA9PT0gJ21lZGlhUXVlcmllcycpIHtcbiAgICAgICAgYWNjdW11bGF0b3IgKz0gX3RoaXMuX2J1aWxkTWVkaWFRdWVyeVN0cmluZyhydWxlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29tcGxldGVTZWxlY3RvciA9IHNjb3BlU2VsZWN0b3IgPyBzZWxlY3Rvci5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAocGFydCkge1xuICAgICAgICAgIHJldHVybiBzY29wZVNlbGVjdG9yICsgJyAnICsgcGFydC50cmltKCk7XG4gICAgICAgIH0pLmpvaW4oJywnKSA6IHNlbGVjdG9yO1xuXG4gICAgICAgIGFjY3VtdWxhdG9yICs9ICgwLCBfY3NzUnVsZVNldFRvU3RyaW5nMi5kZWZhdWx0KShjb21wbGV0ZVNlbGVjdG9yLCBydWxlcywgdXNlckFnZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH0sICcnKTtcbiAgfSxcbiAgX2J1aWxkTWVkaWFRdWVyeVN0cmluZzogZnVuY3Rpb24gX2J1aWxkTWVkaWFRdWVyeVN0cmluZyhzdHlsZXNCeU1lZGlhUXVlcnkpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBjb250ZXh0TWVkaWFRdWVyaWVzID0gdGhpcy5fZ2V0Q29udGV4dE1lZGlhUXVlcmllcygpO1xuICAgIHZhciBtZWRpYVF1ZXJ5U3RyaW5nID0gJyc7XG5cbiAgICBPYmplY3Qua2V5cyhzdHlsZXNCeU1lZGlhUXVlcnkpLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICB2YXIgY29tcGxldGVRdWVyeSA9IGNvbnRleHRNZWRpYVF1ZXJpZXNbcXVlcnldID8gY29udGV4dE1lZGlhUXVlcmllc1txdWVyeV0gOiBxdWVyeTtcbiAgICAgIG1lZGlhUXVlcnlTdHJpbmcgKz0gJ0BtZWRpYSAnICsgY29tcGxldGVRdWVyeSArICd7JyArIF90aGlzMi5fYnVpbGRTdHlsZXMoc3R5bGVzQnlNZWRpYVF1ZXJ5W3F1ZXJ5XSkgKyAnfSc7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVkaWFRdWVyeVN0cmluZztcbiAgfSxcbiAgX2dldENvbnRleHRNZWRpYVF1ZXJpZXM6IGZ1bmN0aW9uIF9nZXRDb250ZXh0TWVkaWFRdWVyaWVzKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGNvbnRleHRNZWRpYVF1ZXJpZXMgPSB7fTtcbiAgICBpZiAodGhpcy5jb250ZXh0ICYmIHRoaXMuY29udGV4dC5tZWRpYVF1ZXJpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29udGV4dC5tZWRpYVF1ZXJpZXMpLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIGNvbnRleHRNZWRpYVF1ZXJpZXNbcXVlcnldID0gX3RoaXMzLmNvbnRleHQubWVkaWFRdWVyaWVzW3F1ZXJ5XS5tZWRpYTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0TWVkaWFRdWVyaWVzO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMucnVsZXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBzdHlsZXMgPSB0aGlzLl9idWlsZFN0eWxlcyh0aGlzLnByb3BzLnJ1bGVzKTtcblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3R5bGUnLCB7IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogc3R5bGVzIH0gfSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTdHlsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvY29tcG9uZW50cy9zdHlsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9XG5cbnZhciBjaGVja1Byb3BzID0gZnVuY3Rpb24gY2hlY2tQcm9wcygpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFdhcm4gaWYgeW91IHVzZSBsb25naGFuZCBhbmQgc2hvcnRoYW5kIHByb3BlcnRpZXMgaW4gdGhlIHNhbWUgc3R5bGVcbiAgICAvLyBvYmplY3QuXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1Nob3J0aGFuZF9wcm9wZXJ0aWVzXG5cbiAgICB2YXIgc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zID0ge1xuICAgICAgJ2JhY2tncm91bmQnOiBbJ2JhY2tncm91bmRBdHRhY2htZW50JywgJ2JhY2tncm91bmRCbGVuZE1vZGUnLCAnYmFja2dyb3VuZENsaXAnLCAnYmFja2dyb3VuZENvbG9yJywgJ2JhY2tncm91bmRJbWFnZScsICdiYWNrZ3JvdW5kT3JpZ2luJywgJ2JhY2tncm91bmRQb3NpdGlvbicsICdiYWNrZ3JvdW5kUG9zaXRpb25YJywgJ2JhY2tncm91bmRQb3NpdGlvblknLCAnYmFja2dyb3VuZFJlcGVhdCcsICdiYWNrZ3JvdW5kUmVwZWF0WCcsICdiYWNrZ3JvdW5kUmVwZWF0WScsICdiYWNrZ3JvdW5kU2l6ZSddLFxuICAgICAgJ2JvcmRlcic6IFsnYm9yZGVyQm90dG9tJywgJ2JvcmRlckJvdHRvbUNvbG9yJywgJ2JvcmRlckJvdHRvbVN0eWxlJywgJ2JvcmRlckJvdHRvbVdpZHRoJywgJ2JvcmRlckNvbG9yJywgJ2JvcmRlckxlZnQnLCAnYm9yZGVyTGVmdENvbG9yJywgJ2JvcmRlckxlZnRTdHlsZScsICdib3JkZXJMZWZ0V2lkdGgnLCAnYm9yZGVyUmlnaHQnLCAnYm9yZGVyUmlnaHRDb2xvcicsICdib3JkZXJSaWdodFN0eWxlJywgJ2JvcmRlclJpZ2h0V2lkdGgnLCAnYm9yZGVyU3R5bGUnLCAnYm9yZGVyVG9wJywgJ2JvcmRlclRvcENvbG9yJywgJ2JvcmRlclRvcFN0eWxlJywgJ2JvcmRlclRvcFdpZHRoJywgJ2JvcmRlcldpZHRoJ10sXG4gICAgICAnYm9yZGVySW1hZ2UnOiBbJ2JvcmRlckltYWdlT3V0c2V0JywgJ2JvcmRlckltYWdlUmVwZWF0JywgJ2JvcmRlckltYWdlU2xpY2UnLCAnYm9yZGVySW1hZ2VTb3VyY2UnLCAnYm9yZGVySW1hZ2VXaWR0aCddLFxuICAgICAgJ2JvcmRlclJhZGl1cyc6IFsnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsICdib3JkZXJCb3R0b21SaWdodFJhZGl1cycsICdib3JkZXJUb3BMZWZ0UmFkaXVzJywgJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJ10sXG4gICAgICAnZm9udCc6IFsnZm9udEZhbWlseScsICdmb250S2VybmluZycsICdmb250U2l6ZScsICdmb250U3RyZXRjaCcsICdmb250U3R5bGUnLCAnZm9udFZhcmlhbnQnLCAnZm9udFZhcmlhbnRMaWdhdHVyZXMnLCAnZm9udFdlaWdodCcsICdsaW5lSGVpZ2h0J10sXG4gICAgICAnbGlzdFN0eWxlJzogWydsaXN0U3R5bGVJbWFnZScsICdsaXN0U3R5bGVQb3NpdGlvbicsICdsaXN0U3R5bGVUeXBlJ10sXG4gICAgICAnbWFyZ2luJzogWydtYXJnaW5Cb3R0b20nLCAnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCcsICdtYXJnaW5Ub3AnXSxcbiAgICAgICdwYWRkaW5nJzogWydwYWRkaW5nQm90dG9tJywgJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCcsICdwYWRkaW5nVG9wJ10sXG4gICAgICAndHJhbnNpdGlvbic6IFsndHJhbnNpdGlvbkRlbGF5JywgJ3RyYW5zaXRpb25EdXJhdGlvbicsICd0cmFuc2l0aW9uUHJvcGVydHknLCAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJ11cbiAgICB9O1xuXG4gICAgY2hlY2tQcm9wcyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gY29uZmlnLmNvbXBvbmVudE5hbWU7XG4gICAgICB2YXIgc3R5bGUgPSBjb25maWcuc3R5bGU7XG5cbiAgICAgIGlmICgodHlwZW9mIHN0eWxlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzdHlsZSkpICE9PSAnb2JqZWN0JyB8fCAhc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGVLZXlzID0gT2JqZWN0LmtleXMoc3R5bGUpO1xuICAgICAgc3R5bGVLZXlzLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlS2V5KSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNob3J0aGFuZFByb3BlcnR5RXhwYW5zaW9uc1tzdHlsZUtleV0pICYmIHNob3J0aGFuZFByb3BlcnR5RXhwYW5zaW9uc1tzdHlsZUtleV0uc29tZShmdW5jdGlvbiAoc3ApIHtcbiAgICAgICAgICByZXR1cm4gc3R5bGVLZXlzLmluZGV4T2Yoc3ApICE9PSAtMTtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdSYWRpdW06IHByb3BlcnR5IFwiJyArIHN0eWxlS2V5ICsgJ1wiIGluIHN0eWxlIG9iamVjdCcsIHN0eWxlLCAnOiBkbyBub3QgbWl4IGxvbmdoYW5kIGFuZCAnICsgJ3Nob3J0aGFuZCBwcm9wZXJ0aWVzIGluIHRoZSBzYW1lIHN0eWxlIG9iamVjdC4gQ2hlY2sgdGhlIHJlbmRlciAnICsgJ21ldGhvZCBvZiAnICsgY29tcG9uZW50TmFtZSArICcuJywgJ1NlZSBodHRwczovL2dpdGh1Yi5jb20vRm9ybWlkYWJsZUxhYnMvcmFkaXVtL2lzc3Vlcy85NSBmb3IgbW9yZSAnICsgJ2luZm9ybWF0aW9uLicpO1xuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc3R5bGVLZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrUHJvcHMoX2V4dGVuZHMoe30sIGNvbmZpZywgeyBzdHlsZTogc3R5bGVba10gfSkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gY2hlY2tQcm9wcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvcGx1Z2lucy9jaGVjay1wcm9wcy1wbHVnaW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ga2V5ZnJhbWVzUGx1Z2luO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG52YXIgX2tleWZyYW1lcyA9IHJlcXVpcmUoJy4uL2tleWZyYW1lcycpO1xuXG5mdW5jdGlvbiBrZXlmcmFtZXNQbHVnaW4oX3JlZiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvd1xuKSB7XG4gIHZhciBhZGRDU1MgPSBfcmVmLmFkZENTUztcbiAgdmFyIGNvbmZpZyA9IF9yZWYuY29uZmlnO1xuICB2YXIgc3R5bGUgPSBfcmVmLnN0eWxlO1xuXG4gIHZhciBuZXdTdHlsZSA9IE9iamVjdC5rZXlzKHN0eWxlKS5yZWR1Y2UoZnVuY3Rpb24gKG5ld1N0eWxlSW5Qcm9ncmVzcywga2V5KSB7XG4gICAgdmFyIHZhbHVlID0gc3R5bGVba2V5XTtcbiAgICBpZiAoa2V5ID09PSAnYW5pbWF0aW9uTmFtZScgJiYgdmFsdWUgJiYgdmFsdWUuX19yYWRpdW1LZXlmcmFtZXMpIHtcbiAgICAgIHZhciBrZXlmcmFtZXNWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICB2YXIgX2tleWZyYW1lc1ZhbHVlJF9fcHJvID0ga2V5ZnJhbWVzVmFsdWUuX19wcm9jZXNzKGNvbmZpZy51c2VyQWdlbnQpO1xuXG4gICAgICB2YXIgYW5pbWF0aW9uTmFtZSA9IF9rZXlmcmFtZXNWYWx1ZSRfX3Byby5hbmltYXRpb25OYW1lO1xuICAgICAgdmFyIGNzcyA9IF9rZXlmcmFtZXNWYWx1ZSRfX3Byby5jc3M7XG5cbiAgICAgIGFkZENTUyhjc3MpO1xuICAgICAgdmFsdWUgPSBhbmltYXRpb25OYW1lO1xuICAgIH1cblxuICAgIG5ld1N0eWxlSW5Qcm9ncmVzc1trZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIG5ld1N0eWxlSW5Qcm9ncmVzcztcbiAgfSwge30pO1xuICByZXR1cm4geyBzdHlsZTogbmV3U3R5bGUgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvcGx1Z2lucy9rZXlmcmFtZXMtcGx1Z2luLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuLy8gQ29udmVuaWVudCBzeW50YXggZm9yIG11bHRpcGxlIHN0eWxlczogYHN0eWxlPXtbc3R5bGUxLCBzdHlsZTIsIGV0Y119YFxuLy8gSWdub3JlcyBub24tb2JqZWN0cywgc28geW91IGNhbiBkbyBgdGhpcy5zdGF0ZS5pc0Nvb2wgJiYgc3R5bGVzLmNvb2xgLlxudmFyIG1lcmdlU3R5bGVBcnJheVBsdWdpbiA9IGZ1bmN0aW9uIG1lcmdlU3R5bGVBcnJheVBsdWdpbihfcmVmKSB7XG4gIHZhciBzdHlsZSA9IF9yZWYuc3R5bGU7XG4gIHZhciBtZXJnZVN0eWxlcyA9IF9yZWYubWVyZ2VTdHlsZXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2hhZG93XG4gIHZhciBuZXdTdHlsZSA9IEFycmF5LmlzQXJyYXkoc3R5bGUpID8gbWVyZ2VTdHlsZXMoc3R5bGUpIDogc3R5bGU7XG4gIHJldHVybiB7IHN0eWxlOiBuZXdTdHlsZSB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbWVyZ2VTdHlsZUFycmF5UGx1Z2luO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9wbHVnaW5zL21lcmdlLXN0eWxlLWFycmF5LXBsdWdpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY2FsbGJhY2tzID0gW107XG52YXIgX21vdXNlVXBMaXN0ZW5lcklzQWN0aXZlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIF9oYW5kbGVNb3VzZVVwKCkge1xuICBfY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfSk7XG59XG5cbnZhciBzdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgaWYgKF9jYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGlmICghX21vdXNlVXBMaXN0ZW5lcklzQWN0aXZlKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfaGFuZGxlTW91c2VVcCk7XG4gICAgX21vdXNlVXBMaXN0ZW5lcklzQWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgaW5kZXggPSBfY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgX2NhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICBpZiAoX2NhbGxiYWNrcy5sZW5ndGggPT09IDAgJiYgX21vdXNlVXBMaXN0ZW5lcklzQWN0aXZlKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgX2hhbmRsZU1vdXNlVXApO1xuICAgICAgICBfbW91c2VVcExpc3RlbmVySXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICBfX3RyaWdnZXJGb3JUZXN0czogX2hhbmRsZU1vdXNlVXBcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL3BsdWdpbnMvbW91c2UtdXAtbGlzdGVuZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcHJlZml4UGx1Z2luO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi4vcHJlZml4ZXInKTtcblxuZnVuY3Rpb24gcHJlZml4UGx1Z2luKF9yZWYgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zaGFkb3dcbikge1xuICB2YXIgY29uZmlnID0gX3JlZi5jb25maWc7XG4gIHZhciBzdHlsZSA9IF9yZWYuc3R5bGU7XG5cbiAgdmFyIG5ld1N0eWxlID0gKDAsIF9wcmVmaXhlci5nZXRQcmVmaXhlZFN0eWxlKShzdHlsZSwgY29uZmlnLnVzZXJBZ2VudCk7XG4gIHJldHVybiB7IHN0eWxlOiBuZXdTdHlsZSB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFkaXVtL2xpYi9wbHVnaW5zL3ByZWZpeC1wbHVnaW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG52YXIgX21vdXNlVXBMaXN0ZW5lciA9IHJlcXVpcmUoJy4vbW91c2UtdXAtbGlzdGVuZXInKTtcblxudmFyIF9tb3VzZVVwTGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW91c2VVcExpc3RlbmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9pc0ludGVyYWN0aXZlU3R5bGVGaWVsZCA9IGZ1bmN0aW9uIF9pc0ludGVyYWN0aXZlU3R5bGVGaWVsZChzdHlsZUZpZWxkTmFtZSkge1xuICByZXR1cm4gc3R5bGVGaWVsZE5hbWUgPT09ICc6aG92ZXInIHx8IHN0eWxlRmllbGROYW1lID09PSAnOmFjdGl2ZScgfHwgc3R5bGVGaWVsZE5hbWUgPT09ICc6Zm9jdXMnO1xufTtcblxudmFyIHJlc29sdmVJbnRlcmFjdGlvblN0eWxlcyA9IGZ1bmN0aW9uIHJlc29sdmVJbnRlcmFjdGlvblN0eWxlcyhjb25maWcpIHtcbiAgdmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gY29uZmlnLkV4ZWN1dGlvbkVudmlyb25tZW50O1xuICB2YXIgZ2V0Q29tcG9uZW50RmllbGQgPSBjb25maWcuZ2V0Q29tcG9uZW50RmllbGQ7XG4gIHZhciBnZXRTdGF0ZSA9IGNvbmZpZy5nZXRTdGF0ZTtcbiAgdmFyIG1lcmdlU3R5bGVzID0gY29uZmlnLm1lcmdlU3R5bGVzO1xuICB2YXIgcHJvcHMgPSBjb25maWcucHJvcHM7XG4gIHZhciBzZXRTdGF0ZSA9IGNvbmZpZy5zZXRTdGF0ZTtcbiAgdmFyIHN0eWxlID0gY29uZmlnLnN0eWxlO1xuXG4gIHZhciBuZXdDb21wb25lbnRGaWVsZHMgPSB7fTtcbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgLy8gT25seSBhZGQgaGFuZGxlcnMgaWYgbmVjZXNzYXJ5XG4gIGlmIChzdHlsZVsnOmhvdmVyJ10pIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQWx3YXlzIGNhbGwgdGhlIGV4aXN0aW5nIGhhbmRsZXIgaWYgb25lIGlzIGFscmVhZHkgZGVmaW5lZC5cbiAgICAgIC8vIFRoaXMgY29kZSwgYW5kIHRoZSB2ZXJ5IHNpbWlsYXIgb25lcyBiZWxvdywgY291bGQgYmUgYWJzdHJhY3RlZCBhIGJpdFxuICAgICAgLy8gbW9yZSwgYnV0IGl0IGh1cnRzIHJlYWRhYmlsaXR5IElNTy5cbiAgICAgIHZhciBleGlzdGluZ09uTW91c2VFbnRlciA9IHByb3BzLm9uTW91c2VFbnRlcjtcbiAgICAgIG5ld1Byb3BzLm9uTW91c2VFbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGV4aXN0aW5nT25Nb3VzZUVudGVyICYmIGV4aXN0aW5nT25Nb3VzZUVudGVyKGUpO1xuICAgICAgICBzZXRTdGF0ZSgnOmhvdmVyJywgdHJ1ZSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZXhpc3RpbmdPbk1vdXNlTGVhdmUgPSBwcm9wcy5vbk1vdXNlTGVhdmU7XG4gICAgICBuZXdQcm9wcy5vbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBleGlzdGluZ09uTW91c2VMZWF2ZSAmJiBleGlzdGluZ09uTW91c2VMZWF2ZShlKTtcbiAgICAgICAgc2V0U3RhdGUoJzpob3ZlcicsIGZhbHNlKTtcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgfVxuXG4gIGlmIChzdHlsZVsnOmFjdGl2ZSddKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBleGlzdGluZ09uTW91c2VEb3duID0gcHJvcHMub25Nb3VzZURvd247XG4gICAgICBuZXdQcm9wcy5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGV4aXN0aW5nT25Nb3VzZURvd24gJiYgZXhpc3RpbmdPbk1vdXNlRG93bihlKTtcbiAgICAgICAgbmV3Q29tcG9uZW50RmllbGRzLl9sYXN0TW91c2VEb3duID0gRGF0ZS5ub3coKTtcbiAgICAgICAgc2V0U3RhdGUoJzphY3RpdmUnLCAndmlhbW91c2Vkb3duJyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZXhpc3RpbmdPbktleURvd24gPSBwcm9wcy5vbktleURvd247XG4gICAgICBuZXdQcm9wcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBleGlzdGluZ09uS2V5RG93biAmJiBleGlzdGluZ09uS2V5RG93bihlKTtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnICcgfHwgZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICBzZXRTdGF0ZSgnOmFjdGl2ZScsICd2aWFrZXlkb3duJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBleGlzdGluZ09uS2V5VXAgPSBwcm9wcy5vbktleVVwO1xuICAgICAgbmV3UHJvcHMub25LZXlVcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGV4aXN0aW5nT25LZXlVcCAmJiBleGlzdGluZ09uS2V5VXAoZSk7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgc2V0U3RhdGUoJzphY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKTtcbiAgfVxuXG4gIGlmIChzdHlsZVsnOmZvY3VzJ10pIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGV4aXN0aW5nT25Gb2N1cyA9IHByb3BzLm9uRm9jdXM7XG4gICAgICBuZXdQcm9wcy5vbkZvY3VzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXhpc3RpbmdPbkZvY3VzICYmIGV4aXN0aW5nT25Gb2N1cyhlKTtcbiAgICAgICAgc2V0U3RhdGUoJzpmb2N1cycsIHRydWUpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGV4aXN0aW5nT25CbHVyID0gcHJvcHMub25CbHVyO1xuICAgICAgbmV3UHJvcHMub25CbHVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXhpc3RpbmdPbkJsdXIgJiYgZXhpc3RpbmdPbkJsdXIoZSk7XG4gICAgICAgIHNldFN0YXRlKCc6Zm9jdXMnLCBmYWxzZSk7XG4gICAgICB9O1xuICAgIH0pKCk7XG4gIH1cblxuICBpZiAoc3R5bGVbJzphY3RpdmUnXSAmJiAhZ2V0Q29tcG9uZW50RmllbGQoJ19yYWRpdW1Nb3VzZVVwTGlzdGVuZXInKSAmJiBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VFdmVudExpc3RlbmVycykge1xuICAgIG5ld0NvbXBvbmVudEZpZWxkcy5fcmFkaXVtTW91c2VVcExpc3RlbmVyID0gX21vdXNlVXBMaXN0ZW5lcjIuZGVmYXVsdC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgT2JqZWN0LmtleXMoZ2V0Q29tcG9uZW50RmllbGQoJ3N0YXRlJykuX3JhZGl1bVN0eWxlU3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoZ2V0U3RhdGUoJzphY3RpdmUnLCBrZXkpID09PSAndmlhbW91c2Vkb3duJykge1xuICAgICAgICAgIHNldFN0YXRlKCc6YWN0aXZlJywgZmFsc2UsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTWVyZ2UgdGhlIHN0eWxlcyBpbiB0aGUgb3JkZXIgdGhleSB3ZXJlIGRlZmluZWRcbiAgdmFyIGludGVyYWN0aW9uU3R5bGVzID0gT2JqZWN0LmtleXMoc3R5bGUpLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBfaXNJbnRlcmFjdGl2ZVN0eWxlRmllbGQobmFtZSkgJiYgZ2V0U3RhdGUobmFtZSk7XG4gIH0pLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBzdHlsZVtuYW1lXTtcbiAgfSk7XG5cbiAgdmFyIG5ld1N0eWxlID0gbWVyZ2VTdHlsZXMoW3N0eWxlXS5jb25jYXQoaW50ZXJhY3Rpb25TdHlsZXMpKTtcblxuICAvLyBSZW1vdmUgaW50ZXJhY3RpdmUgc3R5bGVzXG4gIG5ld1N0eWxlID0gT2JqZWN0LmtleXMobmV3U3R5bGUpLnJlZHVjZShmdW5jdGlvbiAoc3R5bGVXaXRob3V0SW50ZXJhY3Rpb25zLCBuYW1lKSB7XG4gICAgaWYgKCFfaXNJbnRlcmFjdGl2ZVN0eWxlRmllbGQobmFtZSkpIHtcbiAgICAgIHN0eWxlV2l0aG91dEludGVyYWN0aW9uc1tuYW1lXSA9IG5ld1N0eWxlW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVXaXRob3V0SW50ZXJhY3Rpb25zO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb21wb25lbnRGaWVsZHM6IG5ld0NvbXBvbmVudEZpZWxkcyxcbiAgICBwcm9wczogbmV3UHJvcHMsXG4gICAgc3R5bGU6IG5ld1N0eWxlXG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSByZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWRpdW0vbGliL3BsdWdpbnMvcmVzb2x2ZS1pbnRlcmFjdGlvbi1zdHlsZXMtcGx1Z2luLmpzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlc29sdmVNZWRpYVF1ZXJpZXM7XG5cbnZhciBfY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbnZhciBfYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUgPSByZXF1aXJlKCcuLi9hcHBlbmQtaW1wb3J0YW50LXRvLWVhY2gtdmFsdWUnKTtcblxudmFyIF9hcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZSk7XG5cbnZhciBfaGFzaCA9IHJlcXVpcmUoJy4uL2hhc2gnKTtcblxudmFyIF9oYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhc2gpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX3dpbmRvd01hdGNoTWVkaWEgPSB1bmRlZmluZWQ7XG5mdW5jdGlvbiBfZ2V0V2luZG93TWF0Y2hNZWRpYShFeGVjdXRpb25FbnZpcm9ubWVudCkge1xuICBpZiAoX3dpbmRvd01hdGNoTWVkaWEgPT09IHVuZGVmaW5lZCkge1xuICAgIF93aW5kb3dNYXRjaE1lZGlhID0gISFFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gJiYgISF3aW5kb3cgJiYgISF3aW5kb3cubWF0Y2hNZWRpYSAmJiBmdW5jdGlvbiAobWVkaWFRdWVyeVN0cmluZykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhUXVlcnlTdHJpbmcpO1xuICAgIH0gfHwgbnVsbDtcbiAgfVxuICByZXR1cm4gX3dpbmRvd01hdGNoTWVkaWE7XG59XG5cbmZ1bmN0aW9uIF9maWx0ZXJPYmplY3Qob2JqLCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gcHJlZGljYXRlKG9ialtrZXldLCBrZXkpO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVNZWRpYVF1ZXJpZXMoc3R5bGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlKS5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlV2l0aG91dE1lZGlhLCBrZXkpIHtcbiAgICBpZiAoa2V5LmluZGV4T2YoJ0BtZWRpYScpICE9PSAwKSB7XG4gICAgICBzdHlsZVdpdGhvdXRNZWRpYVtrZXldID0gc3R5bGVba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlV2l0aG91dE1lZGlhO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIF90b3BMZXZlbFJ1bGVzVG9DU1MoX3JlZikge1xuICB2YXIgYWRkQ1NTID0gX3JlZi5hZGRDU1M7XG4gIHZhciBjc3NSdWxlU2V0VG9TdHJpbmcgPSBfcmVmLmNzc1J1bGVTZXRUb1N0cmluZztcbiAgdmFyIGlzTmVzdGVkU3R5bGUgPSBfcmVmLmlzTmVzdGVkU3R5bGU7XG4gIHZhciBzdHlsZSA9IF9yZWYuc3R5bGU7XG4gIHZhciB1c2VyQWdlbnQgPSBfcmVmLnVzZXJBZ2VudDtcblxuICB2YXIgY2xhc3NOYW1lID0gJyc7XG4gIE9iamVjdC5rZXlzKHN0eWxlKS5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMDtcbiAgfSkubWFwKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHZhciB0b3BMZXZlbFJ1bGVzID0gKDAsIF9hcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZTIuZGVmYXVsdCkoX2ZpbHRlck9iamVjdChzdHlsZVtxdWVyeV0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuICFpc05lc3RlZFN0eWxlKHZhbHVlKTtcbiAgICB9KSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKHRvcExldmVsUnVsZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBydWxlQ1NTID0gY3NzUnVsZVNldFRvU3RyaW5nKCcnLCB0b3BMZXZlbFJ1bGVzLCB1c2VyQWdlbnQpO1xuXG4gICAgLy8gQ1NTIGNsYXNzZXMgY2Fubm90IHN0YXJ0IHdpdGggYSBudW1iZXJcbiAgICB2YXIgbWVkaWFRdWVyeUNsYXNzTmFtZSA9ICdybXEtJyArICgwLCBfaGFzaDIuZGVmYXVsdCkocXVlcnkgKyBydWxlQ1NTKTtcbiAgICB2YXIgY3NzID0gcXVlcnkgKyAneyAuJyArIG1lZGlhUXVlcnlDbGFzc05hbWUgKyBydWxlQ1NTICsgJ30nO1xuXG4gICAgYWRkQ1NTKGNzcyk7XG5cbiAgICBjbGFzc05hbWUgKz0gJyAnICsgbWVkaWFRdWVyeUNsYXNzTmFtZTtcbiAgfSk7XG4gIHJldHVybiBjbGFzc05hbWU7XG59XG5cbmZ1bmN0aW9uIF9zdWJzY3JpYmVUb01lZGlhUXVlcnkoX3JlZjIpIHtcbiAgdmFyIGxpc3RlbmVyID0gX3JlZjIubGlzdGVuZXI7XG4gIHZhciBsaXN0ZW5lcnNCeVF1ZXJ5ID0gX3JlZjIubGlzdGVuZXJzQnlRdWVyeTtcbiAgdmFyIG1hdGNoTWVkaWEgPSBfcmVmMi5tYXRjaE1lZGlhO1xuICB2YXIgbWVkaWFRdWVyeUxpc3RzQnlRdWVyeSA9IF9yZWYyLm1lZGlhUXVlcnlMaXN0c0J5UXVlcnk7XG4gIHZhciBxdWVyeSA9IF9yZWYyLnF1ZXJ5O1xuXG4gIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgnQG1lZGlhICcsICcnKTtcblxuICB2YXIgbXFsID0gbWVkaWFRdWVyeUxpc3RzQnlRdWVyeVtxdWVyeV07XG4gIGlmICghbXFsICYmIG1hdGNoTWVkaWEpIHtcbiAgICBtZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5W3F1ZXJ5XSA9IG1xbCA9IG1hdGNoTWVkaWEocXVlcnkpO1xuICB9XG5cbiAgaWYgKCFsaXN0ZW5lcnNCeVF1ZXJ5IHx8ICFsaXN0ZW5lcnNCeVF1ZXJ5W3F1ZXJ5XSkge1xuICAgIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICBsaXN0ZW5lcnNCeVF1ZXJ5W3F1ZXJ5XSA9IHtcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICBtcWwucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIG1xbDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU1lZGlhUXVlcmllcyhfcmVmMykge1xuICB2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSBfcmVmMy5FeGVjdXRpb25FbnZpcm9ubWVudDtcbiAgdmFyIGFkZENTUyA9IF9yZWYzLmFkZENTUztcbiAgdmFyIGNvbmZpZyA9IF9yZWYzLmNvbmZpZztcbiAgdmFyIGNzc1J1bGVTZXRUb1N0cmluZyA9IF9yZWYzLmNzc1J1bGVTZXRUb1N0cmluZztcbiAgdmFyIGdldENvbXBvbmVudEZpZWxkID0gX3JlZjMuZ2V0Q29tcG9uZW50RmllbGQ7XG4gIHZhciBnZXRHbG9iYWxTdGF0ZSA9IF9yZWYzLmdldEdsb2JhbFN0YXRlO1xuICB2YXIgaXNOZXN0ZWRTdHlsZSA9IF9yZWYzLmlzTmVzdGVkU3R5bGU7XG4gIHZhciBtZXJnZVN0eWxlcyA9IF9yZWYzLm1lcmdlU3R5bGVzO1xuICB2YXIgcHJvcHMgPSBfcmVmMy5wcm9wcztcbiAgdmFyIHNldFN0YXRlID0gX3JlZjMuc2V0U3RhdGU7XG4gIHZhciBzdHlsZSA9IF9yZWYzLnN0eWxlO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvd1xuICB2YXIgbmV3U3R5bGUgPSBfcmVtb3ZlTWVkaWFRdWVyaWVzKHN0eWxlKTtcbiAgdmFyIG1lZGlhUXVlcnlDbGFzc05hbWVzID0gX3RvcExldmVsUnVsZXNUb0NTUyh7XG4gICAgYWRkQ1NTOiBhZGRDU1MsXG4gICAgY3NzUnVsZVNldFRvU3RyaW5nOiBjc3NSdWxlU2V0VG9TdHJpbmcsXG4gICAgaXNOZXN0ZWRTdHlsZTogaXNOZXN0ZWRTdHlsZSxcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgdXNlckFnZW50OiBjb25maWcudXNlckFnZW50XG4gIH0pO1xuXG4gIHZhciBuZXdQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IG1lZGlhUXVlcnlDbGFzc05hbWVzICsgJyAnICsgKHByb3BzLmNsYXNzTmFtZSB8fCAnJylcbiAgfTtcblxuICB2YXIgbWF0Y2hNZWRpYSA9IGNvbmZpZy5tYXRjaE1lZGlhIHx8IF9nZXRXaW5kb3dNYXRjaE1lZGlhKEV4ZWN1dGlvbkVudmlyb25tZW50KTtcblxuICBpZiAoIW1hdGNoTWVkaWEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IG5ld1Byb3BzLFxuICAgICAgc3R5bGU6IG5ld1N0eWxlXG4gICAgfTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnNCeVF1ZXJ5ID0gX2V4dGVuZHMoe30sIGdldENvbXBvbmVudEZpZWxkKCdfcmFkaXVtTWVkaWFRdWVyeUxpc3RlbmVyc0J5UXVlcnknKSk7XG4gIHZhciBtZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5ID0gZ2V0R2xvYmFsU3RhdGUoJ21lZGlhUXVlcnlMaXN0c0J5UXVlcnknKSB8fCB7fTtcblxuICBPYmplY3Qua2V5cyhzdHlsZSkuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUuaW5kZXhPZignQG1lZGlhJykgPT09IDA7XG4gIH0pLm1hcChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICB2YXIgbmVzdGVkUnVsZXMgPSBfZmlsdGVyT2JqZWN0KHN0eWxlW3F1ZXJ5XSwgaXNOZXN0ZWRTdHlsZSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKG5lc3RlZFJ1bGVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbXFsID0gX3N1YnNjcmliZVRvTWVkaWFRdWVyeSh7XG4gICAgICBsaXN0ZW5lcjogZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgIHJldHVybiBzZXRTdGF0ZShxdWVyeSwgbXFsLm1hdGNoZXMsICdfYWxsJyk7XG4gICAgICB9LFxuICAgICAgbGlzdGVuZXJzQnlRdWVyeTogbGlzdGVuZXJzQnlRdWVyeSxcbiAgICAgIG1hdGNoTWVkaWE6IG1hdGNoTWVkaWEsXG4gICAgICBtZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5OiBtZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5LFxuICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgfSk7XG5cbiAgICAvLyBBcHBseSBtZWRpYSBxdWVyeSBzdGF0ZXNcbiAgICBpZiAobXFsLm1hdGNoZXMpIHtcbiAgICAgIG5ld1N0eWxlID0gbWVyZ2VTdHlsZXMoW25ld1N0eWxlLCBuZXN0ZWRSdWxlc10pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb21wb25lbnRGaWVsZHM6IHtcbiAgICAgIF9yYWRpdW1NZWRpYVF1ZXJ5TGlzdGVuZXJzQnlRdWVyeTogbGlzdGVuZXJzQnlRdWVyeVxuICAgIH0sXG4gICAgZ2xvYmFsU3RhdGU6IHsgbWVkaWFRdWVyeUxpc3RzQnlRdWVyeTogbWVkaWFRdWVyeUxpc3RzQnlRdWVyeSB9LFxuICAgIHByb3BzOiBuZXdQcm9wcyxcbiAgICBzdHlsZTogbmV3U3R5bGVcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZGl1bS9saWIvcGx1Z2lucy9yZXNvbHZlLW1lZGlhLXF1ZXJpZXMtcGx1Z2luLmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=