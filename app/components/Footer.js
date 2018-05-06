import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { color, font, layout } from '../styles'

export default Footer = (props) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>到底了，去看看别的吧~~</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    marginVertical: layout.paddingVertical,
    alignItems: 'center'
  },

  footerText: {
    fontSize: font.xs,
    color: color.colorTip
  }
})