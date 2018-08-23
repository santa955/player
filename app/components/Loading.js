import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIndicator } from 'react-native-indicators'
import { Block, BlockHeader, BlockBody } from './Block'
import { color, font, layout } from '../styles'

export default Loading = (props) => {
  return (
    <View style={styles.loadingContainer}>
      <View style={styles.loading}>
        <MaterialIndicator color={color.green} size={30} />
      </View>
    </View>
  )
}

export const PlaceHolder = (props) => {
  return (
    <View style={styles.placeHolder}>
      <Block verticalGap={false}>
        <View style={styles.placeHolder}>
          <View style={styles.header}>
            <View style={styles.circle}></View>
            <View style={[styles.stripe, styles.stripeShort, { marginTop: 0 }]}></View>
          </View>
          <View style={styles.body}>
            <View style={[styles.stripe, styles.stripeLong]}></View>
            <View style={[styles.stripe, styles.stripeShort]}></View>
            <View style={[styles.stripe, styles.stripeFull]}></View>
          </View>
        </View>
      </Block>
    </View >
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  loading: {
    flex: 1
  },

  placeHolder: {
    backgroundColor: color.white
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  body: {
    marginTop: 5,
  },

  circle: {
    marginRight: 20,
    width: 40,
    height: 40,
    backgroundColor: color.colorBgWeight,
    borderRadius: 20
  },

  stripe: {
    marginTop: 5,
    height: 20,
    backgroundColor: color.colorBgWeight,
  },

  stripeLong: {
    width: '100%',
  },

  stripeLong: {
    width: '80%',
  },

  stripeShort: {
    width: '50%'
  }
})