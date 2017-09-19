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
            <View style={styles.menuIcon}></View>
            <Text style={styles.menuText}>腾讯</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.menuIcon}></View>
            <Text style={styles.menuText}>爱奇艺</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.menuIcon}></View>
            <Text style={styles.menuText}>优酷</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.menuIcon}></View>
            <Text style={styles.menuText}>搜狐</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.menuIcon}></View>
            <Text style={styles.menuText}>爱奇艺</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.menuIcon}></View>
            <Text style={styles.menuText}>优酷</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.menuIcon}></View>
            <Text style={styles.menuText}>搜狐</Text>
          </View>
        </View>
      </View>
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
    padding: 20,
    // paddingTop: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  menu: {
    marginTop: 10,
    width: (screenWidth - 40) / 4,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  menuIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f5f5f5'
  },
  menuText: {
    marginTop: 5,
    fontSize: 14,
    color: '#555'
  }
})