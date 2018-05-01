import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, Easing, StatusBar } from 'react-native'
import Container from '../Container'
import { HEADERTYPE, STATUSBAR } from '../../consts'
import Swiper from '../../components/Swiper'
import { VideoBlock } from '../../components/VideoBlock'

import { mockSwipers, mockVideos } from '../../mock/category'

export class Category extends React.Component {
  render() {
    let { navigation } = this.props
    let { navigate } = navigation
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Swiper swipers={mockSwipers}></Swiper>
          {/* <HomeMenu menus={mockMenus} navigate={navigate} /> */}
          <VideoBlock type="3" navigate={navigate} blockInfo={mockVideos}></VideoBlock>
        </ScrollView>
      </View >
    )
  }
}

export default Container({
  barStyle: STATUSBAR.LIGHT,
  header: { type: HEADERTYPE.TITLENAV }
})(Category)