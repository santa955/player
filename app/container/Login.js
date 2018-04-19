import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'
import { Cover, Register, Form } from './Login/index'
import { color, font } from '../styles'

export default class Login extends Component {
  static navigationOptions = {
  }
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      signup: false
    }
  }
  render() {
    let { showForm, signup } = this.state
    return (
      <View style={styles.root}>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"
          translucent />
        <Cover source={{ uri: 'http://pc.xw-scm.com/asset/video/722729737.mp4' }} />
        <View style={styles.overLay}>
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
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  overLay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
})