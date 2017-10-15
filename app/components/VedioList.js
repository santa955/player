import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import VideoItem from './VideoItem';

export default class VideoList extends React.Component {
  render() {
    let { videoes, navigate } = this.props;
    return (
      <View style={styles.videoList}>
        {this.renderItem(videoes, navigate)}
      </View>

    )
  }

  renderItem(videoes, navigate) {
    return videoes.map((video, index) => {
      return <VideoItem key={index} video={video} navigate={navigate}></VideoItem>
    })
  }
}

const styles = StyleSheet.create({
  videoList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  }
})