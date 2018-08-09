import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import UImage from '../UImage'
import FitImage from '../FitImage'
import VideoDuration from './VideoDuration'
import { color, font, layout } from '../../styles'
let { width: screenWidth } = Dimensions.get('window')
let layoutHGap = layout.paddingHorizontal
let layoutWidth = screenWidth - 2 * layoutHGap
let videoItemGap = 6
const RatioVertical = 2 / 3
const RationHorizontal = 1.78

let getDuration = (video) => {
  let { videoType = 1, updateStatus = 0, episode = 0, episodeCurr = 0, duration = '00:00' } = video
  let durationText = ''
  videoType = parseInt(videoType, 10)
  if (videoType === 1) {
    durationText = updateStatus ? `全${episode}集` : `更新至${episodeCurr}集`
  } else if (videoType === 2) {
    durationText = duration
  }

  return durationText
}

export default class VideoItem extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    let { video, navigate, type } = this.props
    let width = this.getWidth()
    let height = this.getHeight()
    let marginRight = type === 2 ? videoItemGap : 0
    let videoStyle = Object.assign({}, StyleSheet.flatten(styles.video), { width }, { marginRight })
    let coverStyle = Object.assign({}, StyleSheet.flatten(styles.videoCover), { width, height })

    return (
      <TouchableOpacity
        activeOpacity={1}
        focusedOpacity={1}
        onPress={() => navigate('Detail', { videoId: video.videoId })}>
        <View style={[videoStyle]}>
          <View style={styles.videoImage}>
            <UImage uri={type === 3 ? video.iconVertical : video.iconHorizontal} style={coverStyle} />
            {/* <FitImage source={{ uri: video.cover }} style={coverStyle} /> */}
            <VideoDuration duration={getDuration(video)} />
          </View>
          <Text style={styles.videoName} numberOfLines={1}>{video.videoName}</Text>
          <Text style={styles.videoDesc} numberOfLines={1}>{video.videoDesc}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  getWidth() {
    let { type } = this.props
    return type === 1
      ? (layoutWidth - videoItemGap) / 2
      : type == 2
        ? (layoutWidth - videoItemGap * 2) / 2.1
        : (layoutWidth - 2 * videoItemGap) / 3
  }

  getHeight() {
    let { type } = this.props
    let width = this.getWidth()
    let ratio = type === 3 ? RatioVertical : RationHorizontal
    return width / ratio
  }
}

export class FullVideoItem extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    let { video, navigate, type } = this.props
    return <TouchableOpacity
      activeOpacity={1}
      focusedOpacity={1}
      onPress={() => navigate('Detail', { videoId: video.videoId })}>
      <View style={styles.videoFull}>
        <View style={styles.coverWrapper}>
          <UImage uri={video.iconHorizontal} style={styles.videoCover} />
          <VideoDuration duration={getDuration(video)} />
        </View>
        <Text style={styles.videoName} numberOfLines={1}>{video.videoName}</Text>
        <Text style={styles.videoDesc} numberOfLines={1}>{video.videoDesc}</Text>
      </View>
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  video: {
    marginBottom: 12,
  },

  videoFull: {
    width: layoutWidth,
  },

  coverWrapper: {
    borderRadius: 1,
    width: layoutWidth,
    height: layoutWidth / RationHorizontal
  },

  videoName: {
    paddingVertical: 2,
    color: color.blackPrimary,
    fontSize: font.sm
  },

  videoDesc: {
    fontSize: font.xs
  }
})