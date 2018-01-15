"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _nativeBase = require("native-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionSheetWrapper = function (_Component) {
  _inherits(ActionSheetWrapper, _Component);

  function ActionSheetWrapper(props) {
    _classCallCheck(this, ActionSheetWrapper);

    var _this = _possibleConstructorReturn(this, (ActionSheetWrapper.__proto__ || Object.getPrototypeOf(ActionSheetWrapper)).call(this, props));

    _this.BUTTONS = _this.props.options;
    _this.DESTRUCTIVE_INDEX = _this.props.destructiveIndex;

    _this.BUTTONS.push(_this.props.cancelText);
    _this.CANCEL_INDEX = _this.BUTTONS[_this.BUTTONS.length];
    return _this;
  }

  _createClass(ActionSheetWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _nativeBase.Button,
        {
          style: this.props.style,
          transparent: true,
          onPress: function onPress() {
            return _nativeBase.ActionSheet.show({
              options: _this2.BUTTONS,
              cancelButtonIndex: _this2.CANCEL_INDEX,
              destructiveButtonIndex: _this2.DESTRUCTIVE_INDEX,
              title: _this2.props.title
            }, function (buttonIndex) {
              _this2.props.onPress(buttonIndex);
            });
          }
        },
        this.props.children
      );
    }
  }]);

  return ActionSheetWrapper;
}(_react.Component);

exports.default = ActionSheetWrapper;