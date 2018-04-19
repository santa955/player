import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import VideoPlayer from 'react-native-video-player';

const VIMEO_ID = '179859217';

export default class Hot extends Component {
  constructor() {
    super();

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
      <View>
        <Text style={{ fontSize: 22, marginTop: 22 }}>React Native Video Player</Text>
        <VideoPlayer
          loop={true}
          endWithThumbnail={true}
          disableFullscreen={false}
          fullScreenOnLongPress={true}
          thumbnail={{ uri: this.state.thumbnailUrl }}
          video={{ uri: this.state.videoUrl }}
          videoWidth={this.state.video.width}
          videoHeight={this.state.video.height}
          duration={this.state.video.duration/* I'm using a hls stream here, react-native-video
            can't figure out the length, so I pass it here from the vimeo config */}
          ref={r => this.player = r}
        />
        <Button
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
        />
      </View>
    );
  }
}