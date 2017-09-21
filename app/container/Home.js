import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Swiper from '../components/Swiper';

import { mockSwipers } from '../mock/home'

let screenWidth = Dimensions
  .get('window')
  .width;
class Home extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
  }
  render() {
    return (
      <View style={styles.root}>
        <Swiper swipers={mockSwipers} ></Swiper>
        <View style={styles.menus}>
          <View style={styles.menu}>
            <Icon name="present" size={22} />
            <Text style={styles.menuText}>每日抽奖</Text>
          </View>
          <View style={styles.menu}>
            <Icon name="people" size={22} />
            <Text style={styles.menuText}>邀请好友</Text>
          </View>
          <View style={styles.menu}>
            <Icon name="envelope-letter" size={22} />
            <Text style={styles.menuText}>每日分享</Text>
          </View>
          <View style={styles.menu}>
            <Icon name="book-open" size={22} />
            <Text style={styles.menuText}>使用帮助</Text>
          </View>
        </View>
      </View >
    )
  }
}

export default Home

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5'
  },
  swiper: {
    resizeMode: 'contain',
    width: screenWidth,
    height: screenWidth / 1.7794
  },
  menus: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  menuIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f5f5f5'
  },
  menuText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333'
  }
})