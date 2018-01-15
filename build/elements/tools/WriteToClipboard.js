'use strict';

var _nativeBase = require('native-base');

var _reactNative = require('react-native');

module.exports = async function (text) {
  await _reactNative.Clipboard.setString(text);
  _nativeBase.Toast.show({
    text: 'URL Copied',
    position: 'top',
    type: 'success',
    duration: 2000
  });
};