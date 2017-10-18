import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { textColor, font, color, blockStyle } from '../../styles';
import Icon from '../Icon';

export default class HomeMenu extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={[blockStyle.block]}>
        <View style={[blockStyle.blockContent, styles.MenuContainer]}>
          {this.renderMenus(this.props.menus || [])}
        </View>
      </View>
    )
  }
  renderMenus(menus) {
    return menus.map((menu, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          focusedOpacity={1}
          onPress={null}>
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
};

const styles = StyleSheet.create({
  MenuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
    paddingVertical: 8
  },
  menu: {
    alignItems: 'center',
  },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 36,
    resizeMode: 'cover'
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
    color: textColor.secondary,
  }
})