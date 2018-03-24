import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { textColor, bgColor, font } from '../../styles'
export default class VideoDuration extends React.PureComponent {
  render() {
    return (
      <View style={styles.duration}>
        <Text style={styles.durationText}>{this.props.duration}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  duration: {
    position: 'absolute',
    marginLeft: 5,
    paddingHorizontal: 3,
    paddingVertical: 2,
    left: 0,
    bottom: 5,
    backgroundColor: bgColor.blackLight,
    borderRadius: 2,
  },
  durationText: {
    fontSize: font.xs,
    color: textColor.white,
  }
})