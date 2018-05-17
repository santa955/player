import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Block, BlockBody } from '../../components/Block'
import Icon from '../../components/Icon'
import { font, color } from '../../styles'

export default class MyAccount extends React.PureComponent {
  render() {
    return (
      <Block style={styles.userBlock}>
        <BlockBody>
          <View style={styles.userAccount}>
            <View style={styles.accountTitle}>
              <Icon type="Entypo" name="wallet" iconStyle={styles.menuIcon} />
              <Text style={styles.titleText}>我的账户</Text>
            </View>
            <View style={styles.accountMenus}>
              <View style={styles.accountMenu}>
                <Text style={styles.menuNumber}>24</Text>
                <Text style={styles.menuText}>观看</Text>
              </View>
              <LinearGradient
                locations={[0, 0.5, 1]}
                colors={['#efefef', '#ddd', '#efefef']}
                style={styles.accountMenuDivid} />
              <View style={styles.accountMenu}>
                <Text style={styles.menuNumber}>2</Text>
                <Text style={styles.menuText}>收藏</Text>
              </View>
              <LinearGradient
                locations={[0, 0.5, 1]}
                colors={['#efefef', '#ddd', '#efefef']}
                style={styles.accountMenuDivid} />
              <View style={styles.accountMenu}>
                <Text style={styles.menuNumber}>245</Text>
                <Text style={styles.menuText}>积分</Text>
              </View>
            </View>
          </View>
        </BlockBody>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  userBlock: {
    paddingHorizontal: 16,
  },

  userAccount: {
    flex: 1
  },

  accountTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleText: {
    fontSize: font.md,
    color: color.blackPrimary
  },

  menuIcon: {
    fontSize: font.lg,
    color: color.green,
    marginRight: 12
  },

  accountMenus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
    paddingHorizontal: 32,
    // borderWidth: 1,
  },

  accountMenu: {
    padding: 8,
    flexDirection: 'column',
    alignItems: 'center',
    // borderWidth: 1,
  },

  accountMenuDivid: {
    width: 1,
    // borderColor: '#efefef',
    height: 24
  },

  menuNumber: {
    fontSize: font.nr,
    color: color.blackPrimary
  },

  menuText: {
    fontSize: font.xs,
    color: color.blackSecondary
  }
})