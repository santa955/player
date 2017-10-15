import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-looped-carousel';
import FitImage from '../components/FitImage';

let screenWidth = Dimensions
  .get('window')
  .width;
class Hot extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
  }
  render() {
    return (
      <View>
        <Text>热播</Text>
        <FitImage source={{ uri: 'http://puui.qpic.cn/tv/0/15697125_1080607/0' }}>
          <Text>测试</Text>
        </FitImage>
      </View>
    )
  }
}

export default Hot

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5'
  },
  wrapper: {},
  slide: {
    flex: 1,
    resizeMode: 'contain',
    height: screenWidth / 2
  },
  banner: {
    height: 35
  },
  menus: {
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingTop: 0,
    paddingBottom: 20,
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  menu: {
    width: (screenWidth - 20) / 4,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  menuImage: {
    width: 45,
    height: 45
  },
  menuText: {
    fontSize: 12,
    color: '#555'
  }
})