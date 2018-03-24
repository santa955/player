import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { color, layout } from '../../styles'

export default class Block extends React.PureComponent {
  render() {
    let { verticalGap = false, style, ...attr } = this.props
    let marginVertical = verticalGap
      ? layout.paddingVertical / 2
      : 0
    return (
      <View style={[styles.block, { marginVertical }, style]} {...attr}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: layout.paddingHorizontal,
    paddingVertical: layout.paddingVertical,
    backgroundColor: color.white,
  }
})
