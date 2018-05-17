import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Container from '../Container'
import { HEADERTYPE, STATUSBAR } from '../../consts'
import Hot from './Hot'
import ResultList from './Result'
import { font, color, layout } from '../../styles'

import { hots } from '../../mock/search'

export class Search extends React.Component {
  constructor() {
    super()
  }
  render() {
    let { navigation } = this.props
    return (
      <View style={styles.root}>
        <Hot items={hots} />
        <ResultList items={hots}></ResultList>
      </View>
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