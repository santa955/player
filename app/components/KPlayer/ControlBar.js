"use strict";
import _ from "lodash";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Animated, PanResponder, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from '../Icon'
import { color, font } from '../../styles'

let radiusOfHolder = 8;
let radiusOfActiveHolder = 10;
class ProgressController extends Component {

  constructor(props, context, ...args) {
    super(props, context, ...args);
    this.state = { lineX: new Animated.Value(0), slideX: new Animated.Value(0) };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.moving) {
      this.state.slideX.setValue(this.computeScreenX(nextProps.percent));
    }
  }

  computeScreenX(percent) {
    return percent * this.state.width / 100;
  }

  componentWillMount() {
    this.holderPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        let { slideX } = this.state;
        this.setState({ moving: true });
        slideX.setOffset(slideX._value);
        slideX.setValue(0);
      },
      onPanResponderMove: (e, gestureState) => {
        let totalX = this.state.slideX._offset + gestureState.dx;
        let newPercent = (totalX / this.state.width) * 100;
        this.notifyPercentChange(newPercent, false);
        Animated.event([
          null, { dx: this.state.slideX }
        ])(e, gestureState);
      },
      onPanResponderRelease: (e, gesture) => {
        this.state.slideX.flattenOffset();
        let newPercent = (this.state.slideX._value / this.state.width) * 100;
        this.setState({ moving: false });
        this.notifyPercentChange(newPercent, false);
      }
    });
  }

  notifyPercentChange(newPercent, paused) {
    let { onNewPercent } = this.props;
    if (onNewPercent instanceof Function) {
      onNewPercent(newPercent, paused);
    }
  }

  onLayout(e) {
    this.setState({ width: e.nativeEvent.layout.width - (radiusOfHolder * 2) });
  }

  getHolderStyle() {
    let { moving, slideX, width } = this.state;
    if (width > 0) {
      var interpolatedAnimation = slideX.interpolate({
        inputRange: [0, width],
        outputRange: [0, width],
        extrapolate: "clamp"
      });

      return [styles.holder, moving && styles.activeHolder,
      (slideX._value || moving) && { transform: [{ translateX: interpolatedAnimation }] }
      ];
    } else {
      return [styles.holder];
    }
  }

  onLinePressed(e) {
    let newPercent = (e.nativeEvent.locationX / this.state.width) * 100;
    this.notifyPercentChange(newPercent, false);
  }

  onPlayOrPause() {
    let newPercent = (this.state.slideX._value / this.state.width) * 100;
    this.notifyPercentChange(newPercent, true);
  }

  onFullScreenOrNot() {
    let { onScreenChange } = this.props;
    if (onScreenChange instanceof Function) {
      onScreenChange()
    }
  }

  formatSeconds(seconds = 0) {
    let { duration = 0 } = this.props;
    seconds = Math.min(Math.max(seconds, 0), duration);
    var minutes = seconds / 60;
    var remainingSeconds = seconds % 60;
    return _.padStart(minutes.toFixed(0), 2, 0) + ":" + _.padStart(remainingSeconds.toFixed(0), 2, 0);
  }

  render() {
    let { moving } = this.state;
    let { currentTime, duration, percent, paused, fullScreen } = this.props;
    return (
      <View style={styles.controlBar}>
        <TouchableOpacity
          activeOpacity={1}
          focusedOpacity={1}
          style={{ marginRight: 10, justifyContent: "center", alignItems: "flex-start" }}
          onPress={this.onPlayOrPause.bind(this)}>
          <Icon type="Feather" iconStyle={styles.iconPlay} size={32} name={`${paused ? 'play' : 'pause'}-circle`} />
        </TouchableOpacity>
        <Text style={[styles.timeText, { marginRight: 10 }]}>{this.formatSeconds(currentTime)}</Text>
        <View style={styles.barView}
          onLayout={this.onLayout.bind(this)} {...this.holderPanResponder.panHandlers}>
          <View style={styles.bar}>
            <TouchableOpacity
              activeOpacity={1}
              focusedOpacity={1}
              style={[styles.line, { flex: percent, borderColor: color.green, backgroundColor: color.green }]}
              onPress={this.onLinePressed.bind(this)} />
            <TouchableOpacity
              activeOpacity={1}
              focusedOpacity={1}
              style={[styles.line, { flex: 100 - percent, borderColor: color.white }]}
              onPress={this.onLinePressed.bind(this)} />
          </View>
          <Animated.View style={this.getHolderStyle()}>
            <View style={styles.circle}></View>
          </Animated.View>
        </View>
        <Text style={[styles.timeText, { marginLeft: 10 }]}>{this.formatSeconds(duration)}</Text>
        <TouchableOpacity
          activeOpacity={1}
          focusedOpacity={1}
          style={{ marginLeft: 10, justifyContent: "center", alignItems: "center", width: 32, height: 28 }}
          onPress={this.onFullScreenOrNot.bind(this)}>
          <Icon type="Octicons" iconStyle={styles.iconPlay} size={fullScreen ? 24 : 22} name={fullScreen ? 'screen-normal' : 'screen-full'} />
        </TouchableOpacity>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  controlBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },

  barView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: 20,
  },

  bar: {
    flexDirection: "row",
    height: 2,
  },

  iconPlay: {
    color: color.white,
    fontWeight: '400'
  },

  timeText: {
    color: color.white,
    fontSize: font.sm
  },

  line: {
    padding: 0,
    backgroundColor: color.white
  },

  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: color.green
  },

  holder: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 2,
    left: 0,
    height: radiusOfHolder * 2,
    width: radiusOfHolder * 2,
    borderRadius: 8,
    backgroundColor: 'rgba(32, 188, 34, 0.6)'
  },

  activeHolder: {
    top: 0,
    height: radiusOfActiveHolder * 2,
    width: radiusOfActiveHolder * 2,
    borderRadius: radiusOfActiveHolder,
    backgroundColor: color.green
  }
});

ProgressController.propTypes = {
  paused: PropTypes.bool,
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  percent: PropTypes.number,
  onNewPercent: PropTypes.func
};

export default ProgressController;
