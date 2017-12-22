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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectedSSButtonField = exports.SSButtonField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18n = __webpack_require__(19);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(17);

var _redux = __webpack_require__(4);

var _SilverStripeComponent = __webpack_require__(18);

var _SilverStripeComponent2 = _interopRequireDefault(_SilverStripeComponent);

var _FieldHolder = __webpack_require__(14);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _SSButtonActions = __webpack_require__(10);

var ssButtonActions = _interopRequireWildcard(_SSButtonActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SSButtonField = function (_SilverStripeComponen) {
  _inherits(SSButtonField, _SilverStripeComponen);

  function SSButtonField(props) {
    _classCallCheck(this, SSButtonField);

    var _this = _possibleConstructorReturn(this, (SSButtonField.__proto__ || Object.getPrototypeOf(SSButtonField)).call(this, props));

    _this.handleItemClick = _this.handleItemClick.bind(_this);

    _this.state = {
      marcz: 'hermo'
    };
    return _this;
  }

  _createClass(SSButtonField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(['componentDidMount', this.props.actions]);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log(['componentWillReceiveProps', this.props, nextProps]);
    }
  }, {
    key: 'handleItemClick',
    value: function handleItemClick(event) {
      event.preventDefault();
      console.log(['handleItemClick', this.props]);
      this.props.actions.ssbutton.fireClick(this.props.values);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ssButtonfield' },
        _react2.default.createElement(
          'button',
          { onClick: this.handleItemClick },
          '0'
        )
      );
    }
  }]);

  return SSButtonField;
}(_SilverStripeComponent2.default);

SSButtonField.propTypes = {
  extraClass: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string.isRequired,
  disabled: _react2.default.PropTypes.bool
};

function mapStateToProps(state, ownprops) {
  var id = ownprops.id;
  var values = [];
  if (state.ssbutton && state.ssbutton && state.ssbutton.fields && state.ssbutton.fields[id]) {
    values = state.ssbutton.fields[id].values || [];
  }
  var securityId = state.config.SecurityID;
  return { values: values, securityId: securityId };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ssbutton: (0, _redux.bindActionCreators)(ssButtonActions, dispatch)
    }
  };
}

var ConnectedSSButtonField = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SSButtonField);

exports.SSButtonField = SSButtonField;
exports.ConnectedSSButtonField = ConnectedSSButtonField;
exports.default = (0, _FieldHolder2.default)(ConnectedSSButtonField);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  CLICK_COUNT: 'CLICK_COUNT'
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerReducers = __webpack_require__(8);

var _registerReducers2 = _interopRequireDefault(_registerReducers);

var _registerComponents = __webpack_require__(7);

var _registerComponents2 = _interopRequireDefault(_registerComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _registerComponents2.default)();
  (0, _registerReducers2.default)();
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jquery = __webpack_require__(20);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactApollo = __webpack_require__(15);

var _schemaFieldValues = __webpack_require__(22);

var _SSButtonField = __webpack_require__(1);

var _Injector = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InjectableSSButtonField = (0, _Injector.provideInjector)(_SSButtonField.ConnectedSSButtonField);

_jquery2.default.entwine('ss', function ($) {
  $('.entwine-ss-button').entwine({
    onunmatch: function onunmatch() {
      this._super();

      _reactDom2.default.unmountComponentAtNode(this[0]);
    },
    onmatch: function onmatch() {
      this._super();
      this.refresh();
    },
    refresh: function refresh() {
      var store = window.ss.store;
      var client = window.ss.apolloClient;
      var props = this.getAttributes();
      var form = $(this).closest('form');
      var onChange = function onChange() {
        setTimeout(function () {
          form.trigger('change');
        }, 0);
      };

      _reactDom2.default.render(_react2.default.createElement(
        _reactApollo.ApolloProvider,
        { store: store, client: client },
        _react2.default.createElement(InjectableSSButtonField, _extends({}, props, { onChange: onChange }))
      ), this.parent()[0]);
    },
    getAttributes: function getAttributes() {
      var state = $(this).data('state');
      var schema = $(this).data('schema');
      return (0, _schemaFieldValues.schemaMerge)(schema, state);
    }
  });
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(0);

var _Injector2 = _interopRequireDefault(_Injector);

var _SSButtonField = __webpack_require__(1);

var _SSButtonField2 = _interopRequireDefault(_SSButtonField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerComponents = function registerComponents() {
  _Injector2.default.component.register('SSButtonField', _SSButtonField2.default);
};

exports.default = registerComponents;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(0);

var _Injector2 = _interopRequireDefault(_Injector);

var _redux = __webpack_require__(4);

var _SSButtonReducer = __webpack_require__(12);

var _SSButtonReducer2 = _interopRequireDefault(_SSButtonReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerReducers = function registerReducers() {
  _Injector2.default.reducer.register('ssButton', (0, _redux.combineReducers)({
    ssButton: _SSButtonReducer2.default
  }));
};

exports.default = registerReducers;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);
__webpack_require__(6);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fireClick = fireClick;

var _SSButtonActionTypes = __webpack_require__(2);

var _SSButtonActionTypes2 = _interopRequireDefault(_SSButtonActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fireClick(currentData) {
  return function (dispatch) {
    return dispatch({
      type: _SSButtonActionTypes2.default.CLICK_COUNT,
      payload: { currentData: currentData }
    });
  };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepFreezeStrict = __webpack_require__(13);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataStructure = (0, _deepFreezeStrict2.default)({
  id: 0,
  count: 0
});

exports.default = dataStructure;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SSButtonActionTypes = __webpack_require__(2);

var _SSButtonActionTypes2 = _interopRequireDefault(_SSButtonActionTypes);

var _SSButtonDataStructure = __webpack_require__(11);

var _SSButtonDataStructure2 = _interopRequireDefault(_SSButtonDataStructure);

var _reduxFieldReducer = __webpack_require__(21);

var _reduxFieldReducer2 = _interopRequireDefault(_reduxFieldReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  fields: {}
};

var initialFieldState = { values: [] };

function ssButtonReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var reduceField = (0, _reduxFieldReducer2.default)(state, action, initialFieldState);

  switch (action.type) {
    case _SSButtonActionTypes2.default.CLICK_COUNT:
      return reduceField(function (field) {
        return {
          values: [].concat(_toConsumableArray(field.values), [Object.assign({}, _SSButtonDataStructure2.default, action.payload.currentData)])
        };
      });

    default:
      return state;
  }
}

exports.default = ssButtonReducer;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = DeepFreezeStrict;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = FieldHolder;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = ReactApollo;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = ReactDom;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = SilverStripeComponent;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = i18n;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = reduxFieldReducer;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = schemaFieldValues;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map