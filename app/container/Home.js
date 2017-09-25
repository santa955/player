import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Swiper from '../components/Swiper';
import { textColor, bgColor, fontSize, commonStyles } from '../styles'

import { mockSwipers } from '../mock/home'

let { screenWidth } = Dimensions.get('window').width;

class Home extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
  }
  render() {
    return (
      <View style={commonStyles.root}>
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
        <View style={styles.videoBlock}>
          <View style={styles.blockTitle}>
            <Icon name="fire" style={styles.titleIcon} />
            <Text style={styles.titleMain}>今日热门</Text>
            <Text style={styles.titleSub}>无证之罪：严良骆闻双雄对决</Text>
          </View>
          <View style={styles.blockContent}>
            <View style={styles.video}>
              <Image
                style={styles.videoCover}
                source={{ uri: 'http://puui.qpic.cn/tv/0/15747717_453254/0' }}
              />
              <Text style={styles.videoName}>那年花开月正圆[会员22点抢先看]</Text>
              <Text style={styles.videoDesc}>想毁约？没那么容易！周莹出招狠治胡咏梅</Text>
            </View>
            <View style={styles.video}>
              <Image
                style={styles.videoCover}
                source={{ uri: 'http://puui.qpic.cn/tv/0/15747717_453254/0' }}
              />
              <Text style={styles.videoName}>那年花开月正圆[会员22点抢先看]</Text>
              <Text style={styles.videoDesc}>想毁约？没那么容易！周莹出招狠治胡咏梅</Text>
            </View>
            <View style={styles.video}>
              <Image
                style={styles.videoCover}
                source={{ uri: 'http://puui.qpic.cn/tv/0/15747717_453254/0' }}
              />
              <Text style={styles.videoName}>那年花开月正圆[会员22点抢先看]</Text>
              <Text style={styles.videoDesc}>想毁约？没那么容易！周莹出招狠治胡咏梅</Text>
            </View>
            <View style={styles.video}>
              <Image
                style={styles.videoCover}
                source={{ uri: 'http://puui.qpic.cn/tv/0/15747717_453254/0' }}
              />
              <Text style={styles.videoName}>那年花开月正圆[会员22点抢先看]</Text>
              <Text style={styles.videoDesc}>想毁约？没那么容易！周莹出招狠治胡咏梅</Text>
            </View>
          </View>
        </View>
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
  },
  videoBlock: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 8,
    backgroundColor: bgColor.white
  },
  blockTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleIcon: {
    fontSize: 24,
    color: textColor.active
  }

})