import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { textColor, font, color, bgColor, blockStyle } from '../styles';
import Icon from './Icon';

export default class Modal extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={[blockStyle.block, styles.absolute]}>
        <View style={[blockStyle.blockHeader, styles.modalHeader]}>
          <View style={blockStyle.headerMain}>
            <View style={blockStyle.titleMain}>
              <Text style={[blockStyle.mainTitle]}>神探夏洛克 第四季</Text>
            </View>
            <View style={[blockStyle.rightLink, blockStyle.mainTitleLink]}>
              <TouchableOpacity
                activeOpacity={1}
                focusedOpacity={1}
                onPress={null}>
                <Icon style={blockStyle.linkIcon}
                  type="Ionicons"
                  name="md-close"
                  size={26}
                  iconStyle={styles.modalIconClose}>
                </Icon>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[blockStyle.blockContent, styles.modalContent]}>
          <Text>这是内容测试</Text>
        </View>
      </View>
    )
  }
}

Modal.propTypes = {
  // menus: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: bgColor.white
  },
  modalHeader: {

  },
  modalIconClose: {
    color: textColor.secondary,
  },
  modalContent: {
    // borderTopWidth: 1,
  }
})