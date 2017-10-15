import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import FitImage from '../components/FitImage';
import VideoDuration from '../components/VideoDuration';
import { textColor, bgColor, font } from '../styles';
let { width: screenWidth, heigth: screenHeight } = Dimensions.get('window');
let layoutWidth = screenWidth - 32;
let videoWidth = layoutWidth / 2 - 4;
let videoCoverHeight = videoWidth / 1.7749;

export default class VideoItem extends React.PureComponent {
  render() {
    let { video, navigate } = this.props;
    let type = video.type;
    return (
      <TouchableOpacity
        activeOpacity={1}
        focusedOpacity={1}
        onPress={() => navigate('Detail')}>
        <View style={[styles.video, type == 'full' ? styles.videoFull : '']}>
          <View style={styles.videoImage}>
            <FitImage source={{ uri: video.cover }} style={styles.videoCover} />
            {video.duration ? <VideoDuration duration={video.duration} /> : null}
          </View>
          <Text style={styles.videoName} numberOfLines={1}>{video.name}</Text>
          <Text style={styles.videoDesc} numberOfLines={1}>{video.desc}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  video: {
    marginBottom: 16,
    marginLeft: 8,
    width: videoWidth,
  },

  videoSmall: {
    width: videoWidth - 20,
  },

  videoFull: {
    width: layoutWidth,
  },

  videoVerticalCover: {
    width: layoutWidth,
    height: 2 * (layoutWidth / 1.7794) + 20
  },

  videoCover: {
    backgroundColor: bgColor.gray,
    borderRadius: 2,
    resizeMode: 'cover',
  },
  videoName: {
    paddingVertical: 2,
    color: textColor.primary,
    fontSize: font.sm
  },
  videoDesc: {
    fontSize: font.xs
  }
})