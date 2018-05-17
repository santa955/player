import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from '../../components/Icon'
import MenuItem from './MenuItem'


export default class MenusList extends React.Component {

  render() {
    return (
      <View style={styles.menusListContainer}>
        {this.renderMenus()}
      </View>
    )
  }

  renderMenus() {
    let userMenus = this.props.menus.length ? this.props.menus : [];
    return userMenus.map((menu, index) => {
      return <MenuItem
        key={index}
        menu={menu}
      />
    })
  }
}

const styles = StyleSheet.create({
  menusListContainer: {
    flex: 1
  }
})