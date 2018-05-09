import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'
import Container from '../Container'
import { STATUSBAR, HEADERTYPE } from '../../consts'
import Cover from './Cover'
import Register from './Register'
import Form from './Form'
import { color, font } from '../../styles'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: true,
      signup: false
    }
  }
  render() {
    let { showForm, signup } = this.state
    return (
      <View style={styles.root}>
        {showForm &&
          <Form
            onLogin={this.handleLogin.bind(this)}
            onSignUp={this.handleLogin.bind(this)}
          />}
        {!showForm &&
          <Register
            onLogin={this.handleShowLogin.bind(this)}
            onSignUp={this.handleShowSignUp.bind(this)}
          />
        }
      </View>
    )
  }

  handleShowLogin() {
    this.setState({ showForm: true })
  }

  handleShowSignUp() {
    this.setState({ showForm: true, signup: true })
  }

  handleLogin() {
    let { navigation } = this.props
    navigation.navigate('Home')
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.colorBgWeight
  },

  overLay: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
})

export default Container({
  barStyle: STATUSBAR.LIGHT,
  header: { type: HEADERTYPE.TITLENAV, title: '登录' }
})(Login)
