import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Container from '../Container'
import { HEADERTYPE, STATUSBAR } from '../../consts'
import { font, color, layout } from '../../styles'
export class Search extends React.Component {
  constructor() {
    super()
  }
  render() {
    let { navigation } = this.props
    return (
      <View style={styles.root}></View>
    )
  }
}

export default Container({
  barStyle: STATUSBAR.DARK,
  header: { type: HEADERTYPE.SEARCH }
})(Search)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.white
  },
})