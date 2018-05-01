import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Block, BlockBody } from '../../components/Block'
import { color, font, layout } from '../../styles'
import Icon from '../../components/Icon'

const { width: screenWidth } = Dimensions.get('window')
const GAPHORIZONTAL = layout.paddingHorizontal
const GAPITEM = 8

export default class HomeMenu extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Block verticalGap={false}>
        <View style={[styles.MenuContainer]}>
          {this.renderRow()}
        </View>
      </Block>
    )
  }

  renderRow() {
    let { menus: rows = [], navigate } = this.props
    return rows.map((row, index) => {
      return (
        <View
          key={index}
          style={styles.row}>
          {this.renderMenus(row, navigate)}
        </View>
      )
    })
  }

  renderMenus(menus, navigate) {
    return menus.map((menu, index) => {
      let { uid, name: title, channel } = menu
      return (
        <TouchableOpacity
          key={uid}
          activeOpacity={1}
          focusedOpacity={1}
          onPress={() => { navigate(channel, { uid, title }) }}>
          <View style={styles.menu}>
            <Icon name={menu.icon} type={menu.type} size={32} iconStyle={styles.menuIcon}></Icon>
            <Text style={styles.menuText} numberOfLines={1}>{title}</Text>
          </View>
        </TouchableOpacity>
      )
    })
  }
}

HomeMenu.propTypes = {
  menus: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  MenuContainer: {
    paddingHorizontal: 16,
    marginTop: -12
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 12
  },

  menu: {
    alignItems: 'center',
    width: 56,
    alignItems: 'center',
  },

  menuIcon: {
    color: color.green,
    fontWeight: '600',
  },

  menuText: {
    marginTop: 2,
    textAlign: 'center',
    fontSize: font.sm,
    color: color.blackPrimary,
    overflow: 'hidden',
    flexWrap: 'nowrap'
  }
})