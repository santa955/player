import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { color, layout } from '../../styles'

export default class Block extends React.PureComponent {
  render() {
    let { verticalGap = false, style, ...attr } = this.props
    let marginTop = verticalGap
      ? layout.paddingVertical
      : 0
    return (
      <View style={[styles.block, { marginTop }, style]} {...attr}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingHorizontal: layout.paddingHorizontal,
    paddingVertical: layout.paddingVertical,
    backgroundColor: color.white,
  }
})
