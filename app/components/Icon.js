import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export default class Icon extends React.PureComponent {
  componentWillMount() {
    switch (this.props.type) {
      case 'Ionicons':
        this.Icon = Ionicons
        break
      case 'Entypo':
        this.Icon = Entypo
        break
      case 'FontAwesome':
        this.Icon = FontAwesome
        break
      case 'Foundation':
        this.Icon = Foundation
        break
      case 'MaterialIcons':
        this.Icon = MaterialIcons
        break
      case 'MaterialCommunityIcons':
        this.Icon = MaterialCommunityIcons
        break
      case 'Octicons':
        this.Icon = Octicons
        break
      case 'Zocial':
        this.Icon = Zocial
        break
      case 'SimpleLineIcons':
        this.Icon = SimpleLineIcons
        break
      case 'Feather':
        this.Icon = Feather
        break
      case 'EvilIcons':
        this.Icon = EvilIcons
        break
      default:
        this.Icon = SimpleLineIcons
    }
  }
  render() {
    const {
      type,
      name,
      style,
      size,
      color,
      iconStyle = {},
      onPress,
      ...iconProps
    } = this.props

    let Component = onPress ? TouchableOpacity : View
    let { fontSize = 20 } = iconStyle
    return (
      <Component
        style={[styles.icon, style]}
        onPress={onPress}
        {...iconProps}>
        <this.Icon
          style={[iconStyle]}
          size={size || fontSize}
          name={name}
          color={color} />
      </Component>
    )
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

Icon.defaultProps = {
  type: 'SimpleLineIcons',
  name: ''
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})
