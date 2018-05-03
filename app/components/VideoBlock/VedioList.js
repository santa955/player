import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import VideoItem from './VideoItem'

export default class VideoList extends React.Component {
  render() {
    let { videoes = [], navigate, type } = this.props;
    return (
      <View style={styles.videoList}>
        {this.renderItem(videoes, navigate, type)}
      </View>
    )
  }

  renderItem(videoes, navigate, type) {
    return videoes.map((video, index) => {
      return <VideoItem key={index} type={type} video={video} navigate={navigate} />
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