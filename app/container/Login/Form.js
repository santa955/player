import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Input from './Input'
import { color, font } from '../../styles'
export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  componentWillMount() {
    if (Platform.OS == 'ios') {
      this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
      this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
    } else {
      this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
      this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
    }

  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.form}>
        <View style={styles.intro}>
          <Text style={[styles.introText, styles.introMain]}>注册账户</Text>
          <Text style={[styles.introText, styles.introTip]}>离观看更多精彩视频更近一步~</Text>
        </View>
        <View style={styles.formItems}>
          <View style={styles.formItem}>
            <Input placeholder="手机/邮箱/微信号/QQ" />
          </View>
          <View style={styles.formItem}>
            <Input
              placeholder="登录密码"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.submit}>
          <TouchableOpacity
            activeOpacity={1}
            focusedOpacity={1}
            onPress={() => this.props.onLogin()}>
            <LinearGradient
              style={styles.subBtn}
              start={{ x: 0.0, y: 0 }}
              end={{ x: 1, y: 1.0 }}
              locations={[0, 1]}
              colors={['#42a855', '#51d15b']}>
              <Text style={styles.btnText}>登&nbsp;录</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove()
    this.keyboardWillHideSub.remove()
  }

  keyboardWillShow = (event) => {
    console.log(event)

    // Animated.timing(this.imageHeight, {
    //   duration: event.duration,
    //   toValue: IMAGE_HEIGHT_SMALL,
    // }).start()
  }

  keyboardWillHide = (event) => {
    console.log(event)

    // Animated.timing(this.imageHeight, {
    //   duration: event.duration,
    //   toValue: IMAGE_HEIGHT,
    // }).start()
  }


  keyboardDidShow = (event) => {
    console.log(event)
    // Animated.timing(this.imageHeight, {
    //   toValue: IMAGE_HEIGHT_SMALL,
    // }).start()
  }

  keyboardDidHide = (event) => {
    console.log(event)

    // Animated.timing(this.imageHeight, {
    //   toValue: IMAGE_HEIGHT,
    // }).start()
  }
}

const styles = StyleSheet.create({
  form: {
    paddingTop: 32,
    paddingHorizontal: 22,
  },

  introText: {
    color: color.blackPrimary,
  },

  introMain: {
    fontSize: font.xxl,
    fontWeight: '600'
  },

  introTip: {
    marginTop: 8,
    fontSize: font.sm,
    color: color.blackSecondary
  },

  formItems: {
    marginTop: 48
  },

  submit: {
    marginTop: 48,
  },

  subBtn: {
    paddingVertical: 10,
    borderRadius: 1,
  },

  btnText: {
    color: color.white,
    textAlign: 'center',
    fontSize: font.lg
  }
})