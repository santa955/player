import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Swiper from '../components/Swiper';
import { textColor, bgColor, font, commonStyles, color } from '../styles'

import { mockSwipers } from '../mock/home'

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
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
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
              <View style={styles.videoFull}>
                <Image
                  style={styles.videoCoverFull}
                  source={{ uri: 'http://puui.qpic.cn/tv/0/15568529_453254/0' }}
                />
                <Text style={styles.videoName} numberOfLines={1}>那年花开月正圆[会员22点抢先看]</Text>
                <Text style={styles.videoDesc} numberOfLines={1}>想毁约？没那么容易！周莹出招狠治胡咏梅</Text>
              </View>
              <View style={styles.video}>
                <Image
                  style={styles.videoCover}
                  source={{ uri: 'http://puui.qpic.cn/tv/0/15747717_453254/0' }}
                />
                <Text style={styles.videoName} numberOfLines={1}>那年花开月正圆[会员22点抢先看]</Text>
                <Text style={styles.videoDesc} numberOfLines={1}>想毁约？没那么容易！周莹出招狠治胡咏梅</Text>
              </View>
              <View style={styles.video}>
                <Image
                  style={styles.videoCover}
                  source={{ uri: 'http://puui.qpic.cn/tv/0/15735105_453254/0' }}
                />
                <Text style={styles.videoName} numberOfLines={1}>那年花开月正圆[会员22点抢先看]</Text>
                <Text style={styles.videoDesc} numberOfLines={1}>想毁约？没那么容易！周莹出招狠治胡咏梅</Text>
              </View>
              <View style={styles.video}>
                <Image
                  style={styles.videoCover}
                  source={{ uri: 'http://puui.qpic.cn/tv/0/15715161_453254/0' }}
                />
                <Text style={styles.videoName} numberOfLines={1}>大王不容易[会员结局]</Text>
                <Text style={styles.videoDesc} numberOfLines={1}>机洗夫妇开虐 两军阵前姬满用弓箭对准妲喜</Text>
              </View>
              <View style={styles.video}>
                <Image
                  style={styles.videoCover}
                  source={{ uri: 'http://puui.qpic.cn/tv/0/15704861_330185/0' }}
                />
                <Text style={styles.videoName} numberOfLines={1}>青春最好时·会员全集</Text>
                <Text style={styles.videoDesc} numberOfLines={1}> 张雪迎曾舜晞甜蜜牵手</Text>
              </View>
            </View>
            <View style={styles.blockBottom}>
              <View style={styles.buttonLink}>
                <Text style={styles.buttonText}>更多热播</Text>
                <Icon style={styles.buttonIcon} name="arrow-right" size={9}></Icon>
              </View>
              <View style={styles.buttonLink}>
                <Text style={styles.buttonText}>换一批</Text>
                <Icon style={styles.buttonIcon} name="refresh" size={10}></Icon>
              </View>
            </View>
          </View>
          <View style={styles.block}>
            <View style={styles.blockTitle}>
              <Icon name="screen-desktop" style={styles.titleIcon} />
              <Text style={styles.titleMain}>同步电视剧</Text>
              <Text style={styles.titleSub}>无证之罪：严良骆闻双雄对决</Text>
            </View>
            <View style={styles.blockContent}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.video}>
                  <Image
                    style={styles.videoCover}
                    source={{ uri: 'http://puui.qpic.cn/tv/0/15735105_453254/0' }}
                  />
                  <Text style={styles.videoName} numberOfLines={1}>那年花开月正圆[会员22点抢先看]</Text>
                  <Text style={styles.videoDesc} numberOfLines={1}>想毁约？没那么容易！周莹出招狠治胡咏梅</Text>
                </View>
                <View style={styles.video}>
                  <Image
                    style={styles.videoCover}
                    source={{ uri: 'http://puui.qpic.cn/tv/0/15715161_453254/0' }}
                  />
                  <Text style={styles.videoName} numberOfLines={1}>大王不容易[会员结局]</Text>
                  <Text style={styles.videoDesc} numberOfLines={1}>机洗夫妇开虐 两军阵前姬满用弓箭对准妲喜</Text>
                </View>
                <View style={styles.video}>
                  <Image
                    style={styles.videoCover}
                    source={{ uri: 'http://puui.qpic.cn/tv/0/15704861_330185/0' }}
                  />
                  <Text style={styles.videoName} numberOfLines={1}>青春最好时·会员全集</Text>
                  <Text style={styles.videoDesc} numberOfLines={1}> 张雪迎曾舜晞甜蜜牵手</Text>
                </View>
                <View style={styles.video}>
                  <Image
                    style={styles.videoCover}
                    source={{ uri: 'http://puui.qpic.cn/tv/0/15735105_453254/0' }}
                  />
                  <Text style={styles.videoName} numberOfLines={1}>那年花开月正圆[会员22点抢先看]</Text>
                  <Text style={styles.videoDesc} numberOfLines={1}>想毁约？没那么容易！周莹出招狠治胡咏梅</Text>
                </View>
                <View style={styles.video}>
                  <Image
                    style={styles.videoCover}
                    source={{ uri: 'http://puui.qpic.cn/tv/0/15715161_453254/0' }}
                  />
                  <Text style={styles.videoName} numberOfLines={1}>大王不容易[会员结局]</Text>
                  <Text style={styles.videoDesc} numberOfLines={1}>机洗夫妇开虐 两军阵前姬满用弓箭对准妲喜</Text>
                </View>
                <View style={styles.video}>
                  <Image
                    style={styles.videoCover}
                    source={{ uri: 'http://puui.qpic.cn/tv/0/15704861_330185/0' }}
                  />
                  <Text style={styles.videoName} numberOfLines={1}>青春最好时·会员全集</Text>
                  <Text style={styles.videoDesc} numberOfLines={1}> 张雪迎曾舜晞甜蜜牵手</Text>
                </View>
              </ScrollView>
            </View>
            <View style={styles.blockBottom}>
              <View style={styles.buttonLink}>
                <Text style={styles.buttonText}>更多电视剧</Text>
                <Icon style={styles.buttonIcon} name="arrow-right" size={9}></Icon>
              </View>
              <View style={styles.buttonLink}>
                <Text style={styles.buttonText}>换一批</Text>
                <Icon style={styles.buttonIcon} name="refresh" size={10}></Icon>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
    marginRight: 8,
    fontSize: font.lg,
    width: 20,
    height: 20,
    color: textColor.active
  },

  titleMain: {
    fontSize: font.md,
    color: textColor.primary
  },

  titleSub: {
    fontSize: font.xs,
    marginLeft: 8
  },

  block: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 8,
    backgroundColor: bgColor.white
  },

  blockContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
    marginLeft: -8
  },
  video: {
    marginBottom: 16,
    marginLeft: 8,
    width: videoCoverWidth,
  },
  videoFull: {
    marginBottom: 16,
    marginLeft: 8,
    width: screenWidth,
  },
  videoCoverFull: {
    borderRadius: 2,
    backgroundColor: bgColor.gray,
    width: screenWidth - 32,
    height: (screenWidth - 32) / 1.7794
  },
  videoCover: {
    backgroundColor: bgColor.gray,
    borderRadius: 2,
    width: videoCoverWidth,
    height: videoCoverHeight
  },
  videoName: {
    paddingVertical: 2,
    color: textColor.primary,
    fontSize: font.sm
  },
  videoDesc: {
    fontSize: font.xs
  },
  blockBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: (screenWidth - 32) / 2,
  },
  buttonText: {
    fontSize: font.sm,
    color: textColor.link,
    textAlign: 'center',
  },
  buttonIcon: {
    marginLeft: 8,
    // fontSize: font.sm - 2,
    color: textColor.link,
    textAlign: 'center',
    textAlignVertical: 'center'
  }

})