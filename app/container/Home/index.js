import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'
import Container from '../Container'
import { HEADERTYPE, STATUSBAR } from '../../consts'
import Swiper from '../../components/Swiper'
import { VideoBlock } from '../../components/VideoBlock'
import HomeMenu from './Menu'
import { mockSwipers, mockVideoBlocks, mockMenus } from '../../mock/home'

export class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Swiper swipers={mockSwipers}></Swiper>
          <HomeMenu menus={mockMenus} navigate={navigate} />
          <VideoBlock type="1" navigate={navigate} blockInfo={mockVideoBlocks[0]}></VideoBlock>
          <VideoBlock type="2" navigate={navigate} blockInfo={mockVideoBlocks[2]}></VideoBlock>
          <VideoBlock type="3" navigate={navigate} blockInfo={mockVideoBlocks[3]}></VideoBlock>
          <VideoBlock type="2" navigate={navigate} blockInfo={mockVideoBlocks[2]}></VideoBlock>
          <VideoBlock type="1" navigate={navigate} blockInfo={mockVideoBlocks[1]}></VideoBlock>
        </ScrollView>
      </View >
    )
  }
}

export default Container({
  barStyle: STATUSBAR.LIGHT,
  header: { type: HEADERTYPE.SEARCHENTRY }
})(Home)