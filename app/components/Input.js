import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../Icon';

export default class SearchHeader extends React.Component {
  render() {
    return (
      <View style={styles.searchForm}>
        <TouchableOpacity
          activeOpacity={1}
          focusedOpacity={1}
          onPress={null}>
          <Icon iconStyle={styles.headerSearchIcon} name="ios-search" type="Ionicons" />
          <Text style={styles.headerSearchInput}>请输入商品名称</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
})