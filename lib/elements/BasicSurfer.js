import React, { Component } from 'react';
import { WebView, Share, Clipboard } from 'react-native'
import { Icon } from 'react-native-elements';
import { Toast } from 'native-base';

import ActionSheet from './ActionSheet'



export default class BasicSurfer extends Component {

  static writeToClipboard = async (text) => {
    await Clipboard.setString(text);
    Toast.show({
      text: 'URL Copied',
      position: 'top',
      type: 'success',
      duration: 2000
    })
  }

  static navigationOptions = ({ navigation }) => ({
      headerRight: <ActionSheet
        options={['Copy', 'Share']}
        cancelText='Cancel'
        onPress={(index) =>{
          switch (index) {
            case 0:
              writeToClipboard(navigation.state.params.url)
              break;
            case 1:
              Share.share({url: navigation.state.params.url })
              break;

          }
        }}
        style={{ marginRight: 15 }}
      >
        <Icon type="entypo" name="dots-three-vertical" size={20} color={'rgb(0, 122, 255)'} />
      </ActionSheet>
    });



  render() {
      return (
        <WebView
        source={{uri: this.props.navigation.state.params.url}}
        />
      );
  }
}
