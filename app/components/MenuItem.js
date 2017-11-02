import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { textColor, bgColor, font, color, blockStyle } from '../styles';
import Icon from './Icon';

export default class MenuItem extends React.PureComponent {
  render() {
    let { icon, name, tip, color, size, iconType } = this.props.menu;
    return (
      <TouchableOpacity
        activeOpacity={1}
        focusedOpacity={1}
        onPress={() => null}>
        <View style={[blockStyle.block, styles.menuItem, styles.flexRow]}>
          <View style={[styles.menuMain, styles.flexRow]}>
            <Icon
              style={styles.mainIcon}
              iconStyle={{ color: color || textColor.secondary }}
              type={iconType || 'SimpleLineIcons'}
              name={icon}
              size={size || 20} />
            <Text style={[styles.mainText]}>{name}</Text>
          </View>
          <View style={[styles.menuSub, styles.flexRow]}>
            <Text style={[styles.subText]}>{tip}</Text>
            <Icon
              style={styles.arrowIcon}
              iconStyle={{ color: textColor.tip,fontWeight: 'blod' }}
              type="SimpleLineIcons"
              name="arrow-right"
              size={12} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    paddingVertical: 16,
    marginBottom: 0,
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: color.colorDivid
  },
  menuMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainText: {
    color: textColor.secondary,
    fontSize: font.nr
  },
  subText: {
    fontSize: font.xs,
    color: textColor.tip
  },
  mainIcon: {
    marginRight: 12
  },
  arrowIcon: {
    marginLeft: 12
  }
})