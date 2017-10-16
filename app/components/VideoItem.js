import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import FitImage from '../components/FitImage';
import VideoDuration from '../components/VideoDuration';
import { textColor, bgColor, font } from '../styles';
let { width: screenWidth } = Dimensions.get('window');
let layoutWidth = screenWidth - 32;

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {

  }
  render() {
    let { video, navigate, type } = this.props;
    let videoType = video.type;
    let videoWidth = this.getWidth()
    let width = videoType == 'full' ? layoutWidth : videoWidth;
    let videoStyle = Object.assign({}, StyleSheet.flatten(styles.video), { width })
    return (
      <TouchableOpacity
        activeOpacity={1}
        focusedOpacity={1}
        onPress={() => navigate('Detail')}>
        <View style={[videoStyle]}>
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

  getWidth() {
    let { type } = this.props;
    let videoWidth = layoutWidth / 2 - 4;
    return type === 1
      ? videoWidth
      : type == 2
        ? videoWidth - 12
        : layoutWidth / 3 - 6;
  }
}

const styles = StyleSheet.create({
  video: {
    marginBottom: 16,
    marginLeft: 8,
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