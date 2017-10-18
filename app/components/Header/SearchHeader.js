import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { textColor, bgColor, font, color } from '../../styles';
import Icon from '../Icon';

export default class SearchHeader extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        focusedOpacity={1}
        onPress={null}>
        <View style={styles.headerContainer}>
          <View style={styles.inputContainer}>
            <Icon iconStyle={styles.inputIcon} name="search" type="Feather" size={14} />
            <Text style={styles.placeholder}>{this.props.placeholder}</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Icon type="Feather" name="download" size={20} iconStyle={styles.actionIcon} />
            <Icon type="Feather" name="clock" size={20} iconStyle={styles.actionIcon} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: bgColor.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: color.colorDivid,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 28,
    backgroundColor: bgColor.grayWeight,
    borderRadius: 14,
  },
  placeholder: {
    marginLeft: 12,
    fontSize: font.xs
  },
  inputIcon: {
    color: textColor.disabled
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    marginLeft: 16,
    color: textColor.disabled
  }
})