import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Container from '../Container'
import { HEADERTYPE, STATUSBAR } from '../../consts'
import { Block, BlockBody } from '../../components/Block'
import Icon from '../../components/Icon'
import Header from './Header'
import MyAccount from './MyAccount'
import MenuList from './MenuList'

import { userMenus } from '../../mock/user'

export class User extends Component {
  constructor() {
    super()
  }

  render() {
    let { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header navigate={navigate} />
          <MyAccount />
          <Block style={[styles.userBlock, styles.noVerticalPadding]} verticalGap={true}>
            <BlockBody style={{ flex: 1 }}>
              <MenuList menus={userMenus} />
            </BlockBody>
          </Block>
        </ScrollView>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  userBlock: {
    paddingHorizontal: 16,
  },

  noVerticalPadding: {
    paddingVertical: 0
  }
})

export default Container({
  barStyle: STATUSBAR.LIGHT,
})(User)