import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Icon from '../components/Icon';
import Swiper from '../components/Swiper';
import { VideoBlock } from '../components/VideoBlock';
import FitImage from '../components/FitImage';
import Header from '../components/Header/SearchHeader';
import HomeMenu from '../components/Home/HomeMenu';
import { font, commonStyles, color } from '../styles';
import { mockSwipers, mockVideoBlocks, mockMenus } from '../mock/home';

export default class Home extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
  }
  render() {
    let { navigate } = this.props.navigation;
    return (
      <View>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"
          translucent />
        {/*<Header placeholder="特勤精英" downloaded={true} />*/}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={commonStyles.root}>
            <Swiper swipers={mockSwipers}></Swiper>
            <HomeMenu menus={mockMenus} />
            <VideoBlock type="1" navigate={navigate} blockInfo={mockVideoBlocks[0]}></VideoBlock>
            <VideoBlock type="2" navigate={navigate} blockInfo={mockVideoBlocks[2]}></VideoBlock>
            <VideoBlock type="3" navigate={navigate} blockInfo={mockVideoBlocks[3]}></VideoBlock>
            <VideoBlock type="2" navigate={navigate} blockInfo={mockVideoBlocks[2]}></VideoBlock>
            <VideoBlock type="1" navigate={navigate} blockInfo={mockVideoBlocks[1]}></VideoBlock>
          </View>
        </ScrollView>
      </View>
    )
  }
}