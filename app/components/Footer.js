import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators'
import { color, font, layout } from '../styles'

export default Footer = (props) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>到底了，去看看别的吧~~</Text>
    </View>
  )
}

export let FooterIndicator = (props) => {
  return (
    <View style={styles.footer}>
      <BarIndicator
        animationDuration={600}
        color={color.colorTip}
        size={20}
        count={5} />
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