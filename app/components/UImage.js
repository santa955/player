import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import FastImage from 'react-native-fast-image'

import { color } from '../styles'

export default class UImage extends React.PureComponent {
  render() {
    let {
      style,
      width,
      height,
      uri,
      placeholder = '',
      headers = {},
      priority = 'normal',
      resizeMode = 'cover',
      ...other
    } = this.props

    return (
      <ImageBackground
        style={[style, { width, height }, { other }]}
        source={{ uri: placeholder }}>
        <FastImage
          style={{ width, height }}
          source={{
            uri,
            headers,
            priority: FastImage.priority[priority],
          }}
          resizeMode={FastImage.resizeMode[resizeMode]}
        />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  placeholder: {
    width: 150,
    height: 200,
    backgroundColor: color.colorBgWeight
  }
})