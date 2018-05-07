import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar, NativeModules, Platform } from 'react-native'
import { font, color, layout } from '../../styles'
import Input from '../../components/Input'
import Icon from '../Icon'

const { StatusBarManager } = NativeModules
const version = Platform.Version
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT
let SEARCHBAR_TOP = version >= 21 ? STATUSBAR_HEIGHT : 0

export default class TitleNavHeader extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    let { style, navigation, ...other } = this.props
    let { params = {} } = navigation.state
    let { uid = 1000, title = '' } = params

    return (
      <View style={[styles.navHeader, style]}>
        <View style={styles.nav}>
          <View style={styles.main}>
            <TouchableOpacity
              activeOpacity={1}
              focusedOpacity={1}
              onPress={() => navigation.goBack(null)}>
              <Icon name="arrow-left" iconStyle={styles.backIcon} />
            </TouchableOpacity>
            <View style={styles.title}>
              <Text style={styles.titleText}>{title}</Text>
            </View>
          </View>
          <View style={styles.search}>
            <TouchableOpacity
              style={styles.searchWrapper}
              activeOpacity={1}
              focusedOpacity={1}
              onPress={() => navigation.navigate('Search')}>
              <Icon iconStyle={styles.searchIcon} name="search" type="Feather" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const GAPMAIN = layout.paddingHorizontal / 2

const styles = StyleSheet.create({
  navHeader: {
    position: 'relative',
    paddingTop: SEARCHBAR_TOP,
    backgroundColor: color.green
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.Version >= 21 ? layout.paddingVertical / 2 : layout.paddingVertical,
    paddingBottom: layout.paddingVertical,
    paddingHorizontal: layout.paddingHorizontal,
  },

  main: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backIcon: {
    color: color.white,
    fontSize: font.nr
  },

  title: {
    paddingLeft: GAPMAIN,
  },

  titleText: {
    color: color.white,
    fontSize: font.md
  },

  headerInput: {
    marginHorizontal: GAPMAIN,
    borderWidth: 1,
    flex: 1
  },

  searchWrapper: {
    width: 24,
    height: 24,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 12,
    borderColor: color.white
  },

  searchIcon: {
    color: color.white,
    fontSize: font.sm
  }

})