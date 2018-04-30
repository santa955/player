import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import Swiper from '../../components/Swiper'
import { VideoBlock, VideoLocationFilter } from '../../components/VideoBlock'
import Header from '../../components/Header/SearchHeader'
import { textColor, bgColor, font, commonStyles, color } from '../../styles'
import { mockSwipers, mockVideoBlocks, mockMenus } from '../../mock/tv'

export default class Home extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
  }
  render() {
    let { navigate } = this.props.navigation
    return (
      <View>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"
          translucent />
        <Header placeholder="特勤精英" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={commonStyles.root}>
            <Swiper swipers={mockSwipers}></Swiper>
            <VideoLocationFilter filters={mockMenus} />
            <VideoBlock type="1" navigate={navigate} blockInfo={mockVideoBlocks[0]}></VideoBlock>
            <VideoBlock type="3" navigate={navigate} blockInfo={mockVideoBlocks[3]}></VideoBlock>
            <VideoBlock type="1" navigate={navigate} blockInfo={mockVideoBlocks[1]}></VideoBlock>
          </View>
        </ScrollView>
      </View>
    )
  }
}