import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color, layout } from '../../styles'

export default class BlockBody extends React.PureComponent {
  render() {
    let { style, children, ...attr } = this.props
    return (
      <View style={[styles.blockContent, style]} {...attr}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  blockContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
})