import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// import VideoPlayer from 'react-native-video-player';
// import Player from 'react-native-video-controls'
import VideoPlayer from 'react-native-video-controls'
import KSYVideo from 'react-native-ksyvideo'
import UImage from '../components/UImage'
import ProgressController from '../components/Player/ProgressController'

export default class Film extends Component {
  constructor() {
    super()
    this.state = {
      showbar: true,
      paused: false,
      windowWidth: 0,
      windowHeight: 0,
      duration: 0.0,
      currentTime: 0.0,
    }
  }

  componentDidMount() {
  }

  _onLayout(event) {
    let { x, y, width, height } = event.nativeEvent.layout;
    this.setState({ windowWidth: width, windowHeight: height });
  }

  _onLoad(data) {
    this.setState({ duration: data.duration });
  };

  _onProgress(data) {
    console.log(data)
    if (this.state.showbar) {
      this.setState({ currentTime: data.currentTime });
    }
  }

  onProgressChanged(newPercent, paused) {
    if (paused) {
      this.setState({ paused: !this.state.paused });
    }
    else if (newPercent >= 0) {
      let { duration } = this.state;
      if (duration > 0) {
        let newTime = newPercent * duration / 100;
        this.setState({ currentTime: newTime });
        this.video.seek(newTime);
      }
    }
  }

  getCurrentTimePercentage(currentTime, duration) {
    if (currentTime > 0) {
      return parseFloat(currentTime) / parseFloat(duration);
    } else {
      return 0.0;
    }
  }

  render() {
    let { currentTime, duration, paused, windowHeight } = this.state;
    const completedPercentage = this.getCurrentTimePercentage(currentTime, duration) * 100;
    return (
      <View style={styles.root}>
        <Text style={{ fontSize: 22, marginTop: 22 }}>React Native Video Player</Text>
        <View style={styles.player}>
          <KSYVideo
            source={{ uri: "http://pc.xw-scm.com/asset/video/cover.mp4" }}   // Can be a URL or a local file.
            ref={(ref) => { this.player = ref }}                                      // Store reference
            volume={1.0}
            muted={false}
            paused={false}                          // Pauses playback entirely.
            resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
            repeat={true}                           // Repeat forever.
            playInBackground={false}                // Audio continues to play when app entering background.
            progressUpdateInterval={250.0}          // Interval to fire onProgress (default to ~250ms)
            onLoadStart={this.loadStart}            // Callback when video starts to load
            onLoad={this._onLoad.bind(this)}               // Callback when video loads
            onProgress={this._onProgress.bind(this)}               // Callback every ~250ms with currentTime
            onEnd={this.onEnd}                      // Callback when playback finishes
            onError={this.videoError}               // Callback when video cannot be loaded
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            style={styles.backgroundVideo} />

          {this.state.showbar ? (
            <View style={styles.controller}>
              <View style={styles.progressBar}>
                <ProgressController duration={duration}
                  paused={this.state.paused}
                  currentTime={currentTime}
                  percent={completedPercentage}
                  onNewPercent={this.onProgressChanged.bind(this)} />
              </View>
            </View>) : (null)}
        </View>
        {/* <View>
          <VideoPlayer
            source={{ uri: 'http://yandan66.com/simple.mp4' }}
            navigator={this.props.navigator}
          />
        </View> */}
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

  player: {
    width: 340,
    height: 500,
    backgroundColor: '#000'
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'red'
  },

  controller: {
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },

  progressBar: {
    alignSelf: "stretch",
    margin: 30
  },
})