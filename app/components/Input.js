import React from 'react'
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from './Icon'
import { font, color, layout } from '../styles'
export default class Input extends React.Component {
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
  clear() {
    this.setState({ text: '' })
    this.props.onClear && this.props.onClear()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.text !== nextProps.value) {
      this.setState({ text: nextProps.value })
    }
  }
  render() {
    let {
      style,
      label,
      onFocus,
      onBlur,
      onChangeText,
      onChange,
      value,
      multiline,
      searchIcon,
      ...props
    } = this.props

    let { isFocus, text = '' } = this.state

    return (
      <View style={styles.inputWrapper}>
        {searchIcon && <Icon iconStyle={styles.inputIcon} name="search" type="Feather" size={14} />}
        <TextInput
          ref='input'
          style={[styles.input, style]}
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
          value={text || ''}
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
        <TouchableOpacity
          activeOpacity={1}
          focusedOpacity={1}
          onPress={() => { this.clear() }}>
          {!!text.length &&
            <Icon iconStyle={[styles.inputIcon, styles.iconClear]} name="close" type="EvilIcons" size={14} />
          }
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
  },

  input: {
    flex: 1,
    paddingVertical: 0,
    fontSize: font.sm,
  },

  inputIcon: {
    marginHorizontal: 8
  },

  iconClear: {
    width: 14,
    height: 14,
    color: color.white,
    fontSize: font.xs - 2,
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: color.colorTip,
    borderRadius: 7,
  }
})