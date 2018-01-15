'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeElements = require('react-native-elements');

var _nativeBase = require('native-base');

var _ActionSheet = require('./ActionSheet');

var _ActionSheet2 = _interopRequireDefault(_ActionSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicSurfer = function (_Component) {
  _inherits(BasicSurfer, _Component);

  function BasicSurfer() {
    _classCallCheck(this, BasicSurfer);

    return _possibleConstructorReturn(this, (BasicSurfer.__proto__ || Object.getPrototypeOf(BasicSurfer)).apply(this, arguments));
  }

  _createClass(BasicSurfer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactNative.WebView, {
        source: { uri: this.props.navigation.state.params.url }
      });
    }
  }]);

  return BasicSurfer;
}(_react.Component);

BasicSurfer.writeToClipboard = async function (text) {
  await _reactNative.Clipboard.setString(text);
  _nativeBase.Toast.show({
    text: 'URL Copied',
    position: 'top',
    type: 'success',
    duration: 2000
  });
};

BasicSurfer.navigationOptions = function (_ref) {
  var navigation = _ref.navigation;
  return {
    headerRight: _react2.default.createElement(
      _ActionSheet2.default,
      {
        options: ['Copy', 'Share'],
        cancelText: 'Cancel',
        onPress: function onPress(index) {
          switch (index) {
            case 0:
              writeToClipboard(navigation.state.params.url);
              break;
            case 1:
              _reactNative.Share.share({ url: navigation.state.params.url });
              break;

          }
        },
        style: { marginRight: 15 }
      },
      _react2.default.createElement(_reactNativeElements.Icon, { type: 'entypo', name: 'dots-three-vertical', size: 20, color: 'rgb(0, 122, 255)' })
    )
  };
};

exports.default = BasicSurfer;