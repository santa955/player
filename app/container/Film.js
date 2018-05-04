import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import Player from 'react-native-video-controls'
import UImage from '../components/UImage'
const VIMEO_ID = '179859217';

export default class Film extends Component {
  constructor() {
    super()
    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined,
    };
  }

  componentDidMount() {
    this.setState({
      thumbnailUrl: 'http://img.zhiding.cn/4/977/lic1FRZrMJn56.png',
      videoUrl: 'https://tbm.alicdn.com/jAIYIHW4PF2qFdskNZi/SFuuVjoHwfjBueuM089%40%40sd.mp4',
      video: 1000
    })
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={{ fontSize: 22, marginTop: 22 }}>React Native Video Player</Text>
        {/*
        <VideoPlayer
          loop={true}
          endWithThumbnail={true}
          disableFullscreen={false}
          fullScreenOnLongPress={true}
          thumbnail={{ uri: this.state.thumbnailUrl }}
          video={{ uri: this.state.videoUrl }}
          videoWidth={this.state.video.width}
          videoHeight={this.state.video.height}
          duration={this.state.video.duration
          ref={r => this.player = r}
        />*/}
        {/* <Player
          style={styles.background}
          ref={r => this.player = r}
          source={{ uri: 'https://tbm.alicdn.com/jAIYIHW4PF2qFdskNZi/SFuuVjoHwfjBueuM089%40%40sd.mp4' }}
        /> */}
        {/* <Button
          onPress={() => this.player.stop()}
          title="Stop"
        />
        <Button
          onPress={() => this.player.pause()}
          title="Pause"
        />
        <Button
          onPress={() => this.player.resume()}
          title="Resume"
        /> */}
        <UImage uri="https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/8/8itzxvis4st3389_y.jpg"></UImage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  background: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // zIndex: -1
  }
})