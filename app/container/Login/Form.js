import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Input from './Input'
import { color, font } from '../../styles'
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.form}>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    marginTop: 128,
    paddingHorizontal: 36
  },

  introText: {
    color: '#e9edf0',
  },

  introMain: {
    fontSize: font.xxl,
    fontWeight: '600'
  },

  introTip: {
    marginTop: 12,
    fontSize: font.sm,
    color: '#d3e0d7'
  },

  formItems: {
    marginTop: 86
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