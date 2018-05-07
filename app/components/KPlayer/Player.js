import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, BackHandler, Animated, StatusBar } from 'react-native'
import KSYVideo from 'react-native-ksyvideo'
// import KeepAwake from 'react-native-keep-awake'
import Orientation from 'react-native-orientation'
import { Version, StatusBarHeight } from '../../utils'
import UImage from '../UImage'
import ControlBar from './ControlBar'
import PlayButton from './PlayButton'

const { width: screenWidth } = Dimensions.get('window')
const ratio = 16 / 9
const CBARBOTTOM = Version > 21 ? 0 : StatusBarHeight

export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showbar: true,
      paused: !props.autoPlay,
      duration: 0.0,
      currentTime: 0.0,
      fullScreen: false,
      windowWidth: screenWidth,
      windowHeight: screenWidth / ratio
    }

    this.animControls = new Animated.Value(1)
    this.bottom = new Animated.Value(0)

    this.BackHandler = this.BackHandler.bind(this)
    this.onRotated = this.onRotated.bind(this)
  }

  componentDidMount() {
    Orientation.lockToPortrait()
    Dimensions.addEventListener('change', this.onRotated)
    BackHandler.addEventListener('hardwareBackPress', this.BackHandler)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onRotated)
    BackHandler.removeEventListener('hardwareBackPress', this.BackHandler)
  }

  BackHandler() {
    if (this.state.fullScreen) {
      this.setState({ fullScreen: false })
      Orientation.lockToPortrait()
      StatusBar.setHidden(false)
      return true
    }
    return false
  }

  onRotated({ window: { width, height } }) {
    const orientation = width > height ? 'LANDSCAPE' : 'PORTRAIT'
    if (orientation === 'LANDSCAPE') {
      this.setState({ fullScreen: true, windowWidth: width, windowHeight: height })
      if (Version < 21) this.bottom = new Animated.Value(StatusBarHeight)
    } else {
      this.setState({ fullScreen: false, windowWidth: width, windowHeight: width / ratio }, () => {
        this.bottom = new Animated.Value(0)
      })
    }
  }

  onLayout(event) {
    let { x, y, width, height } = event.nativeEvent.layout
    this.setState({ windowWidth: width, windowHeight: height })
  }

  onLoad(data) {
    this.setState({ duration: data.duration })
  }

  onProgress(data) {
    if (this.state.showbar) {
      this.setState({ currentTime: data.currentTime })
    }
  }

  onProgressChanged(newPercent, paused) {
    if (paused) {
      this.setState({ paused: !this.state.paused }, () => {
        // !this.state.paused && this.overTimeToHideControls()
      })
    } else if (newPercent >= 0) {
      let { duration } = this.state
      // !this.state.paused && this.overTimeToHideControls()
      if (duration > 0) {
        let newTime = newPercent * duration / 100
        this.setState({ currentTime: newTime })
        this.player.seek(newTime)
      }
    }
  }

  onScreenChange() {
    let { onFullScreen } = this.props
    if (!this.state.fullScreen) {
      this.setState({ fullScreen: true }, () => {
        Orientation.lockToLandscape()
        if (onFullScreen instanceof Function) {
          onFullScreen()
        }
      })
    } else {
      this.setState({ fullScreen: false }, () => {
        Orientation.lockToPortrait()
      })
    }
  }

  onTouch() {
    if (this.state.showbar && !this.state.paused) {
      // this.timer && clearTimeout(this.timer)
      this.hideControls()
      this.setState({ showbar: false })
    }
    else {
      this.showControls()
      this.setState({ showbar: true })
    }
  }

  onBuffer(e) {
    console.log(e)
  }

  onError(err) {
    alert(JSON.stringify(err))
  }

  onEnd() {
    let { repeat } = this.props
    if (!repeat) {
      this.setState({ paused: true }, () => {
        this.player.seek(0)
      })
    }
  }

  getCurrentTimePercentage(currentTime, duration) {
    if (currentTime > 0) {
      return parseFloat(currentTime) / parseFloat(duration)
    } else {
      return 0.0
    }
  }

  showControls() {
    let { fullScreen, paused } = this.state
    let bottom = fullScreen && Version < 21 && StatusBarHeight || 0
    fullScreen && StatusBar.setHidden(false)
    Animated.parallel([
      Animated.timing(this.animControls, { toValue: 1, duration: 300 }),
      Animated.timing(this.bottom, { toValue: bottom, duration: 0 })
    ]).start(() => {
      // !paused && this.overTimeToHideControls()
    })
  }

  hideControls() {
    let { fullScreen } = this.state
    fullScreen && StatusBar.setHidden(true)
    Animated.parallel([
      Animated.timing(this.animControls, { toValue: 0, duration: 300 }),
      Animated.timing(this.bottom, { toValue: -40, duration: 0, delay: 300 })
    ]).start()
  }

  overTimeToHideControls() {
    this.timer = setTimeout(() => {
      this.timer && clearTimeout(this.timer)
      this.setState({ showbar: false })
      this.hideControls()
    }, 5000)
  }

  render() {
    let { currentTime, duration, paused, windowHeight: height, windowWidth: width } = this.state
    const completedPercentage = this.getCurrentTimePercentage(currentTime, duration) * 100
    let { source, thumbnail, repeat } = this.props
    return (
      <View style={[styles.playerWrapper, { width, height }]}>
        {(currentTime < 0.1) && <UImage uri={thumbnail} style={styles.cover} />}
        <KSYVideo
          source={source}   // Can be a URL or a local file.
          ref={(ref) => { this.player = ref }}
          bufferSize={30}
          bufferTime={4}                                   // Store reference
          volume={1.0}
          muted={false}
          paused={paused}                          // Pauses playback entirely.
          resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
          repeat={repeat}                           // Repeat forever.
          playInBackground={false}                // Audio continues to play when app entering background.
          progressUpdateInterval={250.0}          // Interval to fire onProgress (default to ~250ms)
          onLoadStart={this.loadStart}            // Callback when video starts to load
          onLoad={this.onLoad.bind(this)}         // Callback when video loads
          onProgress={this.onProgress.bind(this)}               // Callback every ~250ms with currentTime
          onEnd={this.onEnd.bind(this)}                      // Callback when playback finishes
          onError={this.onError.bind(this)}               // Callback when video cannot be loaded
          onBuffer={this.onBuffer.bind(this)}                // Callback when remote video is buffering
          onTouch={this.onTouch.bind(this)}
          style={[styles.player]}
        />
        <Animated.View style={[styles.controlWrapper, { opacity: this.animControls, bottom: this.bottom }]} >
          <View style={styles.progressBar}>
            <ControlBar
              duration={duration}
              paused={this.state.paused}
              currentTime={currentTime}
              percent={completedPercentage}
              fullScreen={this.state.fullScreen}
              onScreenChange={this.onScreenChange.bind(this)}
              onNewPercent={this.onProgressChanged.bind(this)} />
          </View>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  playerWrapper: {
    width: screenWidth,
    height: screenWidth / ratio,
    backgroundColor: '#000'
  },

  cover: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1
  },

  player: {
    flex: 1
  },

  playButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: "50%",
    left: "50%",
    width: 56,
    height: 56,
    marginLeft: -32,
    marginTop: -32,
  },

  controlWrapper: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1
  },

  progressBar: {
    alignSelf: "stretch",
    paddingHorizontal: 8
  },
})