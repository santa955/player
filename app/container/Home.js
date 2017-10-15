import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Icon from '../components/Icon';
import Swiper from '../components/Swiper';

import { textColor, bgColor, font, commonStyles, color } from '../styles';
import VideoBlock from '../components/VideoBlock';
import FitImage from '../components/FitImage';
import { mockSwipers, mockVideoBlocks } from '../mock/home';

let screenWidth = Dimensions.get('window').width;
let videoCoverWidth = (screenWidth - 40) / 2;
let videoCoverHeight = videoCoverWidth / 1.7794;
class Home extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
  }
  render() {
    let { navigate } = this.props.navigation;
    return (
      <View>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"
          translucent
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={commonStyles.root}>
            <Swiper swipers={mockSwipers}></Swiper>
            <View style={styles.menus}>
              <View style={styles.menu}>
                <Icon type="SimpleLineIcons" name="present" size={22} />
                <Text style={styles.menuText}>每日抽奖</Text>
              </View>
              <View style={styles.menu}>
                <Icon type="SimpleLineIcons" name="people" size={22} />
                <Text style={styles.menuText}>邀请好友</Text>
              </View>
              <View style={styles.menu}>
                <Icon type="SimpleLineIcons" name="envelope-letter" size={22} />
                <Text style={styles.menuText}>每日分享</Text>
              </View>
              <View style={styles.menu}>
                <Icon type="SimpleLineIcons" name="book-open" size={22} />
                <Text style={styles.menuText}>使用帮助</Text>
              </View>
            </View>
            <VideoBlock type="vertical" navigate={navigate} blockInfo={mockVideoBlocks[0]}></VideoBlock>
            <VideoBlock type="horizontal" navigate={navigate} blockInfo={mockVideoBlocks[1]}></VideoBlock>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
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