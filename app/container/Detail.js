import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Video from 'react-native-video';

import Carousel from 'react-native-looped-carousel';
import Header from '../components/Header/DetailHeader';
import Icon from '../components/Icon'
import { blockStyle, commonStyles, font, textColor, bgColor, color } from '../styles';

let screenWidth = Dimensions.get('window').width;

class Detail extends Component {
  static navigationOptions = {
    header: (HeaderProps) => {
      return <Header navigation={HeaderProps} />
    }
  }
  constructor() {
    super()
  }
  componentDidMount() {
  }
  render() {
    return (
      <View style={commonStyles.root}>
        <View style={styles.player}></View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[blockStyle.block, styles.videoInfo]}>
            <View style={blockStyle.blockHeader}>
              <View style={blockStyle.headerMain}>
                <View style={blockStyle.titleMain}>
                  <Text style={[blockStyle.mainTitle]}>神探夏洛克 第四季</Text>
                </View>
                <View style={[blockStyle.rightLink, blockStyle.mainTitleLink]}>
                  <Text style={blockStyle.linkText}>简介</Text>
                  <Icon style={blockStyle.linkIcon} type="SimpleLineIcons" name="arrow-right"></Icon>
                </View>
              </View>
              <View style={blockStyle.headerSub}>
                <View style={blockStyle.subMain}>
                  <Text style={blockStyle.subTitle}>全42集 | 3397.6万次播放 | 7.5分 | 传奇 </Text>
                </View>
              </View>
            </View>
            <View style={blockStyle.blockContent}>
              <View style={styles.actions}>
                <View style={styles.action}>
                  <Icon type="Feather" name="heart" iconStyle={styles.actionIcon} />
                  <Text style={styles.actionText}>收藏</Text>
                </View>
                <View style={styles.action}>
                  <Icon type="Feather" name="download" iconStyle={styles.actionIcon} />
                  <Text style={styles.actionText}>下载</Text>
                </View>
                <View style={styles.action}>
                  <Icon type="Feather" name="star" iconStyle={styles.actionIcon} />
                  <Text style={styles.actionText}>评分</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[blockStyle.block]}>
            <View style={blockStyle.blockHeader}>
              <View style={blockStyle.headerMain}>
                <View style={blockStyle.titleMain}>
                  <Text style={[blockStyle.mainTitle]}>剧集</Text>
                </View>
                <View style={[blockStyle.rightLink, blockStyle.mainTitleLink]}>
                  <Text style={blockStyle.linkText}>更新至26集 / 周一至周四每晚更新2集</Text>
                  <Icon style={blockStyle.linkIcon} type="SimpleLineIcons" name="arrow-right"></Icon>
                </View>
              </View>
            </View>
            <View style={blockStyle.blockContent}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.videoSeries}>
                  <View style={styles.series}><Text style={styles.seriesText}>1</Text></View>
                  <View style={[styles.series, styles.activeSeries]}>
                    <Text style={[styles.seriesText, styles.activeSeriesText]}>2</Text>
                  </View>
                  <View style={styles.series}><Text style={styles.seriesText}>3</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>4</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>5</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>6</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>7</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>8</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>9</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>10</Text></View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={[blockStyle.block]}>
            <View style={blockStyle.blockHeader}>
              <View style={blockStyle.headerMain}>
                <View style={blockStyle.titleMain}>
                  <Text style={[blockStyle.mainTitle]}>演员</Text>
                </View>
              </View>
            </View>
            <View style={blockStyle.blockContent}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.stars}>
                  <View style={styles.star}>
                    <Image style={styles.starAvart} source={{ uri: 'http://r1.ykimg.com/0513000059B7942EADBC0902FB0B7933' }} />
                    <Text style={styles.starName}>刘诗诗</Text>
                  </View>
                  <View style={styles.star}>
                    <Image style={styles.starAvart} source={{ uri: 'http://r1.ykimg.com/051300005962EF89859B5C051E072CD5' }} />
                    <Text style={styles.starName}>陈伟霆</Text>
                  </View>
                  <View style={styles.star}>
                    <Image style={styles.starAvart} source={{ uri: 'http://r1.ykimg.com/0513000058A553E2ADBC09033E033F28' }} />
                    <Text style={styles.starName}>徐海乔</Text>
                  </View>
                  <View style={styles.star}>
                    <Image style={styles.starAvart} source={{ uri: 'http://r1.ykimg.com/051300005888647667BC3C3B1E0AA8DA' }} />
                    <Text style={styles.starName}>韩雪</Text>
                  </View>
                  <View style={styles.star}>
                    <Image style={styles.starAvart} source={{ uri: 'http://r1.ykimg.com/05130000593F9527859B5C93DD0E6499' }} />
                    <Text style={styles.starName}>黄梦莹</Text>
                  </View>
                  <View style={styles.star}>
                    <Image style={styles.starAvart} source={{ uri: 'http://r1.ykimg.com/0513000058870FF667BC3C1D8309BB81' }} />
                    <Text style={styles.starName}>刘奕君</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={[blockStyle.block]}>
            <View style={blockStyle.blockHeader}>
              <View style={blockStyle.headerMain}>
                <View style={blockStyle.titleMain}>
                  <Text style={[blockStyle.mainTitle]}>精彩花絮</Text>
                </View>
              </View>
            </View>
            <View style={blockStyle.blockContent}>
              <View style={styles.scenes}>
                <View style={styles.scene}>
                  <View style={styles.scenesCovers}>
                    <Image style={styles.scenesCover} source={{ uri: 'http://puui.qpic.cn/qqvideo_ori/0/k0024yai87w_496_280/0' }} />
                    <Text style={styles.scenesDuration}>01:34</Text>
                  </View>
                  <View style={styles.scenesSummary}>
                    <Text style={styles.summeryText} numberOfLines={2} >一个媳妇，一个夫人，一个追求者，赵四艳福不浅啊,一个媳妇，一个夫人，一个追求者，赵四艳福不浅啊</Text>
                    <View style={styles.summeryMeta}>
                      <Icon type="Feather" name="play-circle" iconStyle={styles.metaIcon} />
                      <Text style={styles.metaText}>309,098次播放</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.scene}>
                  <View style={styles.scenesCovers}>
                    <Image style={styles.scenesCover} source={{ uri: 'http://vthumb.ykimg.com/05420101596ACA59ADC95BA5B1D09329' }} />
                    <Text style={styles.scenesDuration}>05:30</Text>
                  </View>
                  <View style={styles.scenesSummary}>
                    <Text style={styles.summeryText} numberOfLines={2} >《大军师司马懿之虎啸龙吟》第01集开播花絮</Text>
                    <View style={styles.summeryMeta}>
                      <Icon type="Feather" name="play-circle" iconStyle={styles.metaIcon} />
                      <Text style={styles.metaText}>30.8万次播放</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.scene}>
                  <View style={styles.scenesCovers}>
                    <Image style={styles.scenesCover} source={{ uri: 'http://vthumb.ykimg.com/05420708596206F5000001360807E6C6' }} />
                    <Text style={styles.scenesDuration}>47:23</Text>
                  </View>
                  <View style={styles.scenesSummary}>
                    <Text style={styles.summeryText} numberOfLines={2} >大军师司马懿之军师联盟 36</Text>
                    <View style={styles.summeryMeta}>
                      <Icon type="Feather" name="play-circle" iconStyle={styles.metaIcon} />
                      <Text style={styles.metaText}>4.3万次播放</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[blockStyle.block]}>
            <View style={blockStyle.blockHeader}>
              <View style={blockStyle.headerMain}>
                <View style={blockStyle.titleMain}>
                  <Text style={[blockStyle.mainTitle]}>大家都在看</Text>
                </View>
              </View>
            </View>
            <View style={blockStyle.blockContent}>

            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Detail

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5'
  },

  player: {
    height: 260,
    borderWidth: 1,
    backgroundColor: '#000',
  },
  actions: {
    marginTop: -8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  action: {
    marginLeft: 16,
    alignItems: 'center',
  },
  actionIcon: {
    fontWeight: 'bold',
    fontSize: font.lg,
  },
  actionText: {
    fontSize: 10,
    color: textColor.secondary,
    textAlign: 'center',
  },
  videoSeries: {
    marginLeft: -12,
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around'
  },
  series: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
    marginBottom: 8,
    width: 36,
    height: 36,
    backgroundColor: bgColor.gray,
    borderRadius: 2
  },
  activeSeries: {
    backgroundColor: bgColor.green
  },
  seriesText: {
    fontSize: font.nr,
    color: textColor.secondary
  },
  activeSeriesText: {
    color: textColor.white
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  star: {
    alignItems: 'center',
    marginRight: 16
  },
  starAvart: {
    width: 48,
    height: 48,
    resizeMode: 'cover',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: color.colorDivid
  },
  starName: {
    marginTop: 4,
    fontSize: font.xs,
    color: textColor.secondary
  },
  scenes: {
    marginTop: -16,
  },
  scene: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  scenesCovers: {
    marginRight: 16,
  },
  scenesCover: {
    width: 125,
    height: 70,
    borderRadius: 2
  },
  scenesDuration: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: bgColor.blackLight,
    borderRadius: 2,
    color: textColor.white,
    fontSize: font.xs,
  },
  scenesSummary: {
    flex: 1,
    alignItems: 'flex-start',
  },
  summeryText: {
    fontSize: font.sm,
    color: textColor.primary
  },
  summeryMeta: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  metaText: {
    fontSize: font.xs,
    color: textColor.secondary
  },
  metaIcon: {
    marginRight: 4,
    fontSize: font.nr,
    fontWeight: '600'
  }

})