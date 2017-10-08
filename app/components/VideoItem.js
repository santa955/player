import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { textColor, bgColor, font, commonStyles, color } from '../styles'
let { width: screenWidth, heigth: screenHeight } = Dimensions.get('window');
let layoutWidth = screenWidth - 32;
let videoWidth = layoutWidth / 2 - 4;
let videoCoverHeight = videoWidth / 1.7749;

export default class VideoItem extends React.PureComponent {
  render() {
    let video = this.props.video;
    let type = video.type;
    return (
      <TouchableOpacity
        activeOpacity={1}
        focusedOpacity={1}
        onPress={() => { null }}>
        <View style={[styles.video, type == 'full' ? styles.videoFull : '']}>
          <View style={styles.videoImage}>
            <Image
              style={[styles.videoCover, type == 'full' ? styles.videoCoverFull : '']}
              source={{ uri: video.cover }}
            />
            {
              video.duration
                ? <Text style={styles.videoDuration}>{video.duration}</Text>
                : null
            }
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

  videoCoverFull: {
    width: layoutWidth,
    height: layoutWidth / 1.7794
  },

  videoVerticalCover: {
    width: layoutWidth,
    height: 2 * (layoutWidth / 1.7794) + 20
  },

  videoCover: {
    backgroundColor: bgColor.gray,
    borderRadius: 2,
    width: videoWidth,
    height: videoCoverHeight,
    resizeMode: 'cover'
  },
  videoName: {
    paddingVertical: 2,
    color: textColor.primary,
    fontSize: font.sm
  },
  videoDesc: {
    fontSize: font.xs
  },
  videoDuration: {
    position: 'absolute',
    marginLeft: 5,
    paddingHorizontal: 3,
    paddingVertical: 2,
    left: 0,
    bottom: 5,
    fontSize: font.xs,
    color: textColor.white,
    backgroundColor: bgColor.blackLight,
    borderRadius: 2,
  }
})