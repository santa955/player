import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import VideoItem from './VideoItem';

export default class VideoList extends React.Component {
  render() {
    let videoes = this.props.videoes;
    return (
      <View style={styles.videoList}>
        {this.renderItem(videoes)}
      </View>

    )
  }

  renderItem(videoes) {
    return videoes.map((video, index) => {
      return <VideoItem key={index} video={video}></VideoItem>
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