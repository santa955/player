import React, { Component } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { color, font } from '../../styles'
export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.value,
      isFocus: false
    }
  }
  focus() {
    this.refs.input.focus()

  }
  blur() {
    this.refs.input.blur()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.text !== nextProps.value) {
      this.setState({ text: nextProps.value })
    }
  }

  render() {
    let {
      label,
      onFocus,
      onBlur,
      onChangeText,
      onChange,
      value,
      multiline,
      ...props
    } = this.props
    let { isFocus } = this.state
    return (
      <View style={[styles.itemInput, { 'borderColor': isFocus ? color.green : '#9c9d9e' }]}>
        <TextInput
          ref='input'
          style={styles.input}
          selectTextOnFocus={false}
          contextMenuHidden={true}
          editable={true}
          autoCorrect={false}
          multiline={multiline || false}
          numberOfLines={1}
          placeholder=""
          keyboardType={props.type}
          returnKeyType={props.type}
          placeholder={props.placeholder}
          placeholderTextColor="#999"
          underlineColorAndroid="transparent"
          secureTextEntry={props.secureTextEntry}
          value={this.state.text || ''}
          onFocus={() => {
            onFocus && onFocus()
            this.setState({ isFocus: true })
          }}
          onBlur={() => {
            onBlur && onBlur()
            this.setState({ isFocus: false })
          }}
          onChangeText={(text) => {
            this.setState({ text })
            onChangeText && onChangeText(text)
          }}
          onChange={(event) => {
            onChange && onChange(event)
          }}
          ref="input"
          value={this.state.text}
          {...props}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemInput: {
    paddingVertical: 4,
    marginBottom: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#9c9d9e',
  },

  input: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 0,
    fontSize: font.nr,
    color: '#9c9d9e',
    // fontWeight: '600'
  },

  inputActive: {
    borderColor: color.green
  }
})