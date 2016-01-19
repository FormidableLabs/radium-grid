(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["RadiumGrid"] = factory(require("react"));
	else
		root["RadiumGrid"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	  Grid: __webpack_require__(1),
	  Cell: __webpack_require__(3)
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Grid = function Grid(props) {
	    var childrenWithProps = _react.Children.map(props.children, function (child) {
	        return _react2['default'].cloneElement(child, { cells: props.cells });
	    });
	    return _react2['default'].createElement(
	        'div',
	        null,
	        childrenWithProps
	    );
	};
	
	Grid.propTypes = {
	    breakpoints: _react.PropTypes.shape({
	        small: _react.PropTypes.shape({
	            min: _react.PropTypes.number,
	            max: _react.PropTypes.number
	        }),
	        medium: _react.PropTypes.shape({
	            min: _react.PropTypes.number,
	            max: _react.PropTypes.number
	        }),
	        large: _react.PropTypes.shape({
	            min: _react.PropTypes.number,
	            max: _react.PropTypes.number
	        }),
	        xlarge: _react.PropTypes.shape({
	            min: _react.PropTypes.number,
	            max: _react.PropTypes.number
	        })
	    }),
	    cells: _react.PropTypes.shape({
	        width: _react.PropTypes.number,
	        alignment: _react.PropTypes.shape({
	            horizontal: _react.PropTypes.oneOf(['left', 'center', 'right']),
	            vertical: _react.PropTypes.oneOf(['top', 'middle', 'bottom'])
	        })
	    }),
	    gutter: _react.PropTypes.number
	};
	
	Grid.defaultProps = {
	    breakpoints: {
	        small: {
	            min: 0,
	            max: 640
	        },
	        medium: {
	            min: 641,
	            max: 1024
	        },
	        large: {
	            min: 1025,
	            max: 1440
	        },
	        xlarge: {
	            min: 1441,
	            max: Infinity
	        }
	    },
	    cells: _react.PropTypes.shape({
	        width: _react.PropTypes.number,
	        alignment: _react.PropTypes.shape({
	            horizontal: _react.PropTypes.oneOf(['left', 'center', 'right']),
	            vertical: _react.PropTypes.oneOf(['top', 'middle', 'bottom'])
	        })
	    }),
	    gutter: _react.PropTypes.number
	};
	
	exports['default'] = Grid;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Cell = function Cell(props) {
	    var defaultCell = props.cells;
	
	    var alignmentMap = {
	        left: 'flex-start',
	        center: 'center',
	        right: 'flex-end'
	    };
	
	    var styles = {
	        flexBasis: props.width ? props.width : defaultCell.width,
	        alignSelf: props.alignment ? alignmentMap[props.alignment] : defaultCell.alignment,
	        order: props.order
	    };
	
	    return _react2['default'].createElement(
	        'div',
	        { style: styles },
	        props.children
	    );
	};
	
	Cell.propTypes = {
	    width: _react.PropTypes.number,
	    alignment: _react.PropTypes.shape({
	        horizontal: _react.PropTypes.oneOf(['left', 'center', 'right']),
	        vertical: _react.PropTypes.oneOf(['top', 'middle', 'bottom'])
	    }),
	    order: _react.PropTypes.number,
	    children: _react2['default'].PropTypes.node
	};
	
	exports['default'] = Cell;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=radium-grid.js.map