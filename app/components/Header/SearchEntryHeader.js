import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, NativeModules, Platform } from 'react-native'
import { font, color, layout } from '../../styles'
import Icon from '../Icon'

const { StatusBarManager } = NativeModules
const version = Platform.Version
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT
let SEARCHBAR_TOP = version >= 21 ? STATUSBAR_HEIGHT : 0

export default class SearchEntryHeader extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    let { style, navigate, ...other } = this.props
    return (
      <TouchableOpacity
        style={[styles.searchHeader, style]}
        activeOpacity={1}
        focusedOpacity={1}
        onPress={() => { navigate('Search') }}>
        <View style={styles.header}>
          <View style={styles.input}>
            <Icon iconStyle={styles.inputIcon} name="search" type="Feather" size={14} />
            <Text style={styles.placeholder}>{this.props.placeholder}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  searchHeader: {
    position: 'relative',
    paddingTop: SEARCHBAR_TOP,
    backgroundColor: color.green
  },

  header: {
    flexDirection: 'row',
    paddingTop: Platform.Version >= 21 ? layout.paddingVertical / 2 : layout.paddingVertical,
    paddingBottom: layout.paddingVertical,
    paddingHorizontal: layout.paddingHorizontal,

  },
  input: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: color.colorDivid,
    backgroundColor: color.white,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 2,
  },
  placeholder: {
    marginLeft: 12,
    fontSize: font.sm
  },
  inputIcon: {
    color: color.disabled
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    marginLeft: 16,
    color: color.disabled
  }
})