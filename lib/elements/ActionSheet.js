import React, { Component } from "react";
import { Button, ActionSheet } from "native-base";


export default class ActionSheetWrapper extends Component {
  constructor(props) {
    super(props);

    this.BUTTONS = this.props.options
    this.DESTRUCTIVE_INDEX = this.props.destructiveIndex

    this.BUTTONS.push(this.props.cancelText)
    this.CANCEL_INDEX = this.BUTTONS[this.BUTTONS.length];
  }

  render() {
    return (
      <Button
        style={this.props.style}
        transparent={true}
        onPress={() =>
        ActionSheet.show(
          {
            options: this.BUTTONS,
            cancelButtonIndex: this.CANCEL_INDEX,
            destructiveButtonIndex: this.DESTRUCTIVE_INDEX,
            title: this.props.title
          },
          buttonIndex => {
            this.props.onPress(buttonIndex)
          }
        )}
      >
        {this.props.children}
      </Button>
    );
  }
}
