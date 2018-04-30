import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, Easing, StatusBar } from 'react-native'
import { Video } from '../../components/Player'
import Header from '../../components/Header/DetailHeader'
import Icon from '../../components/Icon'
import { Block, blockHeader, blockContent } from '../../components/Block'
import Brief from './Brief'
import Series from './Series'
import Actores from './Actores'
import { VideoBlock } from '../../components/VideoBlock'
import { mockVideoBlocks } from '../../mock/home'
import { blockStyle, commonStyles, font, textColor, bgColor, color } from '../../styles'

let screenWidth = Dimensions.get('window').width

class Detail extends Component {
  static navigationOptions = {
    header: (HeaderProps) => {
      return <Header navigation={HeaderProps} />
    }
  }
  constructor() {
    super()
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true
    }
  }
  render() {
    return (
      <View style={commonStyles.root}>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"
          translucent />
        <View style={styles.player}>
          {/* <Video
            title="阿里云视频服务"
            placeholder="http://img.zhiding.cn/4/977/lic1FRZrMJn56.png"
            url="https://tbm.alicdn.com/jAIYIHW4PF2qFdskNZi/SFuuVjoHwfjBueuM089%40%40sd.mp4"
            rotateToFullScreen={true}
            fullScreenOnly={true} /> */}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Brief />
          <Series />
          <Actores />
          {/* <View style={[blockStyle.block]}>
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
          </View> */}
          <VideoBlock type="3" blockInfo={mockVideoBlocks[3]} />
          <VideoBlock type="1" blockInfo={mockVideoBlocks[1]} />

        </ScrollView>
      </View >
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
    backgroundColor: '#000',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // backgroundColor: '#000'
  },

  linkIcon: {
    marginLeft: 2,
    fontSize: font.xs - 2,
    color: color.blackSecondary
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