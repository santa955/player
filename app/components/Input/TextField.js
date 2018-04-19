'use strict';
import React, {Component, PropTypes} from "react";
import {View, TextInput, StyleSheet} from "react-native";

import Underline from './Underline';
import FloatingLabel from './FloatingLabel';

export default class TextField extends Component {
  constructor(props: Object, context: Object) {
    super(props, context);
    this.state = {
      isFocused: false,
      text: props.value,
      height: props.height
    };
  }
  focus() {
    this.refs.input.focus();
  }
  blur() {
    this.refs.input.blur();
  }
  isFocused() {
    return this.state.isFocused;
  }
  measureLayout(...args){
    this.refs.wrapper.measureLayout(...args)
  }
  componentWillReceiveProps(nextProps: Object){
    if(this.props.text !== nextProps.value){
      // nextProps.value.length !== 0 ?
      //   this.refs.floatingLabel.floatLabel()
      //   : this.refs.floatingLabel.sinkLabel();
      this.setState({text: nextProps.value});
    }
    if(this.props.height !== nextProps.height){
      this.setState({height: nextProps.height});
    }
  }
  render() {
    let {
      label,
      highlightColor,
      duration,
      labelColor,
      borderColor,
      textColor,
      textFocusColor,
      textBlurColor,
      onFocus,
      onBlur,
      onChangeText,
      onChange,
      value,
      dense,
      inputStyle,
      wrapperStyle,
      labelStyle,
      height,
      autoGrow,
      multiline,
      ...props
    } = this.props;
    return (
      <View style={styles.wrapper} ref="wrapper">
        <TextInput
          style={styles.textInput}
          multiline={false}
          onFocus={() => {
            this.setState({isFocused: true});
            // this.refs.floatingLabel.floatLabel();
            this.refs.underline.expandLine();
            onFocus && onFocus();
          }}
          onBlur={() => {
            this.setState({isFocused: false});
            // !this.state.text.length && this.refs.floatingLabel.sinkLabel();
            this.refs.underline.shrinkLine();
            onBlur && onBlur();
          }}
          onChangeText={(text) => {
            this.setState({text});
            onChangeText && onChangeText(text);
          }}
          onChange={(event) => {
            if(autoGrow){
              this.setState({height: event.nativeEvent.contentSize.height});
            }
            onChange && onChange(event);
          }}
          ref="input"
          value={this.state.text}
          {...props}
        />
        <Underline
          ref="underline"
          highlightColor={highlightColor}
          duration={duration}
          borderColor={borderColor}
        />
      </View>
    );
  }
}

TextField.propTypes = {
  duration: PropTypes.number,
  label: PropTypes.string,
  highlightColor: PropTypes.string,
  labelColor: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  textFocusColor: PropTypes.string,
  textBlurColor: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  dense: PropTypes.bool,
  inputStyle: PropTypes.object,
  wrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  multiline: PropTypes.bool,
  autoGrow: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.oneOf(undefined), PropTypes.number])
};

TextField.defaultProps = {
  duration: 200,
  labelColor: '#9E9E9E',
  borderColor: '#E0E0E0',
  textColor: '#000',
  value: '',
  dense: false,
  underlineColorAndroid: 'rgba(0,0,0,0)',
  multiline: false,
  autoGrow: false,
  height: undefined
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 4,
    // marginBottom: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9c9d9e',
    position: 'relative'
  },
  textInput: {
    paddingVertical: 0,
    fontSize: 16,
    // textAlignVertical: 'top'
  }
});
