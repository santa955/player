import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color, layout } from '../../styles'

export default class BlockBody extends React.PureComponent {
  render() {
    return (
      <View style={styles.blockContent}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  blockContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: layout.paddingVertical
  }
})