import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, Easing, StatusBar } from 'react-native'
import Player from '../../components/KPlayer'
import Header from '../../components/Header/DetailHeader'
import Icon from '../../components/Icon'
import { Block, blockHeader, blockContent } from '../../components/Block'
import DetailService from '../../service/detail'
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

  componentDidMount() {
    let { state: { params = {} } = {} } = this.props.navigation
    let { videoId } = params
    if (videoId) {
      this.props.requestVideoDetail({ videoId })
      this.props.requestRelativeVideo({ videoId })
    }
  }

  render() {
    let { videoDetail: { data = {} } = {}, videoRelativeVideo = {} } = this.props
    let { data: videos = [] } = videoRelativeVideo
    let recommendBlockInfo = {
      cateName: '相关精彩视频',
      videoes: videos
    }

    return (
      <View style={commonStyles.root}>
        <StatusBar
          ref={(ref) => { this.statusbar = ref }}
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"
          translucent />
        <Player
          autoPlay={true}
          thumbnail="http://puui.qpic.cn/tv/0/15788156_453254/0"
          source={{ uri: "http://pc.xw-scm.com/asset/video/tv.mp4" }}
          repeat={false}
          onFullScreen={this.onFullScreen.bind(this)}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Brief {...data} />
          <Series />
          <Actores />
          {!!videos.length && <VideoBlock type={3} blockInfo={recommendBlockInfo} />}
          {!!videos.length && <VideoBlock type={1} blockInfo={{ videoes: videos }} />}
        </ScrollView>
      </View >
    )
  }

  onFullScreen() {
    StatusBar.setHidden(true, 'slide')
  }

}

export default DetailService(Detail)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5'
  },

  player: {
    // height: 260,
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