import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'
import { color, font } from '../styles';

export default class Login extends Component {
  static navigationOptions = {
  }
  constructor() {
    super()
  }
  render() {
    let { navigate } = this.props.navigation
    return (
      <View style={styles.root}>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"
          translucent />
        <Video
          source={require('../assets/cover.mp4')}
          style={styles.background}
          rate={1}
          volume={1}
          muted={true}
          resizeMode="cover"
          repeat={true} key="video1" />
        <View style={styles.overLay} />
        <View style={styles.login}>
          <TouchableOpacity
            activeOpacity={1}
            focusedOpacity={1}
            style={styles.loginButton}
            onPress={() => navigate('Tabs')}>
            <Text style={styles.loginText}>登&nbsp;录</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            focusedOpacity={0.8}
            style={styles.loginButton}
            onPress={() => navigate('Tabs')}>
            <Text style={styles.loginText}>注&nbsp;册</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  },

  overLay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(6, 6, 6, 0.5)'
  },

  login: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row'
  },

  loginButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 48,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 1
  },
  loginText: {
    color: color.white,
    fontSize: font.md
  }
})