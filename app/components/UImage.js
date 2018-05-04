import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import FastImage from 'react-native-fast-image'

export default class UImage extends React.PureComponent {
  render() {
    let {
      uri,
      style = {},
      placeholder = '',
      headers = {},
      priority = 'normal',
      resizeMode = 'cover',
      children,
      ...other
    } = this.props
    return (
      <View style={[styles.placeholder, style, { ...other }]}>
        <FastImage
          style={{ width: '100%', height: '100%' }}
          source={{ uri, headers, priority: FastImage.priority[priority] }}
          resizeMode={FastImage.resizeMode[resizeMode]}
          onLoad={(e) => { this.onLoad }}
        >
          {children}
        </FastImage>
      </View>
    )
  }

  onLoad(e) {
    let { width, height } = e.nativeEvent
  }

  getRatio = (width) => {
    const originalWidth = this.getOriginalWidth()
    if (originalWidth === 0) return 0
    const layoutWidth = width || this.state.layoutWidth || 0
    return layoutWidth / originalWidth
  }
}

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: '#f8f8f8',
  }
})