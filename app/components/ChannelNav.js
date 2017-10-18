import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { textColor, bgColor, font, color } from '../styles';
import Icon from './Icon';

export default class ChannelNav extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.NavContainer}>
          <View style={styles.navItem}>
            <Text>推荐</Text>
          </View>
          <View style={styles.navItem}>
            <Text>电视剧</Text>
          </View>
          <View style={styles.navItem}>
            <Text>电影</Text>
          </View>
          <View style={styles.navItem}>
            <Text>动漫</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

})