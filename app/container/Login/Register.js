import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'
import { color, font } from '../../styles'

const Register = (props) => {
  return (
    <View style={styles.login}>
      <TouchableOpacity
        activeOpacity={1}
        focusedOpacity={1}
        style={styles.loginButton}
        onPress={() => props.onLogin()}>
        <Text style={styles.loginText}>登&nbsp;录</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        focusedOpacity={0.8}
        style={styles.loginButton}
        onPress={() => props.onSignUp()}>
        <Text style={styles.loginText}>注&nbsp;册</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  login: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButton: {
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

Register.propTypes = {
  // source: PropTypes.string,
  // resizeMode: PropTypes.string
}

Register.defaultProps = {
  // source: '',
  // resizeMode: 'cover'
}

export default Register