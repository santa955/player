import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'
import Container from '../Container'
import { HEADERTYPE, STATUSBAR } from '../../consts'
import Swiper from '../../components/Swiper'
import { VideoBlock, VideoLocationFilter } from '../../components/VideoBlock'

import { mockSwipers, mockVideoBlocks, mockMenus } from '../../mock/tv'

export class TV extends Component {
  constructor() {
    super()
  }
  render() {
    let { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Swiper swipers={mockSwipers}></Swiper>
          <VideoLocationFilter filters={mockMenus} />
          <VideoBlock type={1} navigate={navigate} blockInfo={mockVideoBlocks[0]}></VideoBlock>
          <VideoBlock type={3} navigate={navigate} blockInfo={mockVideoBlocks[3]}></VideoBlock>
          <VideoBlock type={1} navigate={navigate} blockInfo={mockVideoBlocks[1]}></VideoBlock>
        </ScrollView>
      </View>
    )
  }
}

export default Container({
  barStyle: STATUSBAR.LIGHT,
  header: { type: HEADERTYPE.SEARCHENTRY }
})(TV)