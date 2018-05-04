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
        onPress={() => navigate('Detail')}>
        <View style={[videoStyle]}>
          <View style={styles.videoImage}>
            {/* <UImage uri={video.cover} style={coverStyle} /> */}
            <FitImage source={{ uri: video.cover }} style={coverStyle} />
            {!!video.duration && <VideoDuration duration={video.duration} />}
          </View>
          <Text style={styles.videoName} numberOfLines={1}>{video.name}</Text>
          <Text style={styles.videoDesc} numberOfLines={1}>{video.desc}</Text>
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
    let ratio = type === 1 ? RatioVertical : RatioVertical
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
      onPress={() => navigate('Detail')}>
      <View style={styles.videoFull}>
        <View style={styles.coverWrapper}>
          <UImage uri={video.cover} style={styles.videoCover} />
          {!!video.duration && <VideoDuration duration={video.duration} />}
        </View>
        <Text style={styles.videoName} numberOfLines={1}>{video.name}</Text>
        <Text style={styles.videoDesc} numberOfLines={1}>{video.desc}</Text>
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
    width: '100%',
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