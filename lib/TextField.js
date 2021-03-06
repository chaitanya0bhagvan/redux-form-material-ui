'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _createComponent = require('./createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _mapError = require('./mapError');

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _createComponent2.default)(_TextField2.default, function (_ref) {
  var inputProps = _objectWithoutProperties(_ref.input, []);

  var defaultValue = _ref.defaultValue;
  var onChangeField = _ref.onChangeField;
  var skipOnChange = _ref.skipOnChange;

  var props = _objectWithoutProperties(_ref, ['input', 'defaultValue', 'onChangeField', 'skipOnChange']);

  if (inputProps.value === '') {
    inputProps.value = defaultValue || inputProps.value;
  }
  return _extends({}, inputProps, (0, _mapError2.default)(props), {
    onChange: function onChange(e, newValue) {
      if (onChangeField && typeof onChangeField === 'function') {
        onChangeField(newValue);
      }
      if (!skipOnChange) {
        inputProps.onChange(newValue);
      }
    }
  });
});