import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Block, BlockBody } from '../../components/Block'
import { color, font } from '../../styles'
import Icon from '../../components/Icon'

export default class HomeMenu extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Block verticalGap={false}>
        <View style={[styles.MenuContainer]}>
          {this.renderMenus()}
        </View>
      </Block>
    )
  }

  renderMenus() {
    let { menus = [], navigate } = this.props
    return menus.map((menu, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          focusedOpacity={1}
          onPress={() => navigate(menu.channel, { uid: menu.uid, title: menu.name })}>
          <View style={styles.menu}>
            <Image style={styles.menuIcon} source={{ uri: menu.iconUrl }} />
            <Text style={styles.menuText}>{menu.name}</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menu: {
    alignItems: 'center'
  },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 36,
    resizeMode: 'cover',
  },
  menuIconStyle: {
    // width: 36,
    // height: 36,
    // fontSize: 20,
    // borderWidth: StyleSheet.hairlineWidth,
    // borderRadius: 36,
    // borderColor: color.colorDivid
  },
  menuText: {
    marginTop: 4,
    textAlign: 'center',
    fontSize: font.xs,
    color: color.secondary,
  }
})