import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import FitImage from '../FitImage'
import VideoDuration from './VideoDuration'
import { color, font, layout } from '../../styles'
let { width: screenWidth } = Dimensions.get('window')
let layoutHGap = layout.paddingHorizontal
let layoutWidth = screenWidth - 2 * layoutHGap
let videoItemGap = 6

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { video, navigate, type } = this.props;
    let videoType = video.type;
    let videoWidth = this.getWidth()
    let width = videoType == 'full' ? layoutWidth : videoWidth
    let marginRight = type === 2 ? videoItemGap : 0
    let videoStyle = Object.assign({}, StyleSheet.flatten(styles.video), { width }, { marginRight })
    
    return (
      <TouchableOpacity
        activeOpacity={1}
        focusedOpacity={1}
        onPress={() => navigate('Detail')}>
        <View style={[videoStyle]}>
          <View style={styles.videoImage}>
            <FitImage source={{ uri: video.cover }} style={styles.videoCover} />
            {!!video.duration && <VideoDuration duration={video.duration} />}
          </View>
          <Text style={styles.videoName} numberOfLines={1}>{video.name}</Text>
          <Text style={styles.videoDesc} numberOfLines={1}>{video.desc}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  getWidth() {
    let { type } = this.props;
    let videoWidth = (layoutWidth - videoItemGap) / 2;
    return type === 1
      ? videoWidth
      : type == 2
        ? (layoutWidth - videoItemGap * 2 ) / 2.1
        : (layoutWidth - 2 * videoItemGap) / 3;
  }
}

const styles = StyleSheet.create({
  video: {
    marginBottom: 12,
  },

  videoCover: {
    backgroundColor: color.colorBg,
    borderRadius: 1,
    resizeMode: 'cover',
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