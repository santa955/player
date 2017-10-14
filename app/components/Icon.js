import React from 'react';
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import { font } from '../styles';
export default class Icon extends React.PureComponent {
  componentWillMount() {
    switch (this.props.type) {
      case 'Ionicons':
        this.Icon = Ionicons;
        break;
      case 'Entypo':
        this.Icon = Entypo;
        break;
      case 'FontAwesome':
        this.Icon = FontAwesome;
        break;
      case 'Foundation':
        this.Icon = Foundation;
        break;
      case 'MaterialIcons':
        this.Icon = MaterialIcons;
        break;
      case 'MaterialCommunityIcons':
        this.Icon = MaterialCommunityIcons;
        break;
      case 'Octicons':
        this.Icon = Octicons;
        break;
      case 'Zocial':
        this.Icon = Zocial;
        break;
      case 'SimpleLineIcons':
        this.Icon = SimpleLineIcons;
        break;
      case 'Feather':
        this.Icon = Feather;
        break;
      default:
        this.Icon = SimpleLineIcons;
    }
  }
  render() {
    const {
      type,
      name,
      size,
      color,
      iconStyle,
      onPress,
      ...attributes
    } = this.props;

    return (
      <View style={[styles.iconContainer, this.props.style]}>
        <this.Icon
          style={[styles.icon, iconStyle && iconStyle]}
          size={size}
          name={name}
          color={color && color} />
      </View>
    )
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: font.xs - 2
  }
})
