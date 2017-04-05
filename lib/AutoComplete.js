'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _createComponent = require('./createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _mapError = require('./mapError');

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _createComponent2.default)(_AutoComplete2.default, function (_ref) {
  var _ref$input = _ref.input;
  var value = _ref$input.value;

  var inputProps = _objectWithoutProperties(_ref$input, ['value']);

  var onNewRequestFunc = _ref.onNewRequest;
  var dataSourceConfig = _ref.dataSourceConfig;
  var skipOnChange = _ref.skipOnChange;

  var props = _objectWithoutProperties(_ref, ['input', 'onNewRequest', 'dataSourceConfig', 'skipOnChange']);

  return _extends({}, (0, _mapError2.default)(props), inputProps, {
    searchText: dataSourceConfig ? value[dataSourceConfig.text] : value,
    onNewRequest: function onNewRequest(value) {
      if (!skipOnChange) {
        inputProps.onChange(value);
      }
      if (onNewRequestFunc && typeof onNewRequestFunc === 'function') {
        onNewRequestFunc(value);
      }
    }
  });
});