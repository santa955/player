import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, SectionList, Text } from 'react-native'
import Container from '../Container'
import { HEADERTYPE, STATUSBAR } from '../../consts'
import Swiper from '../../components/Swiper'
import Footer, { FooterIndicator } from '../../components/Footer'
import { VideoBlock, VideoLocationFilter } from '../../components/VideoBlock'

import TVService from '../../service/tv'

import { mockSwipers, mockVideoBlocks, mockMenus } from '../../mock/tv'

export class TV extends Component {
  constructor() {
    super()
    this.state = {
      refreshing: false
    }
  }

  componentWillMount() {
    this.props.requestLocalData()
  }

  componentDidMount() {
    this.props.requestBanner({ type: 0, pageIndex: 1, pageSize: 6 })
    this.props.requestVideos({ type: 1, pageIndex: 1, pageSize: 21 })
  }

  renderBlock({ section: { type, data = [] } }) {
    let { navigate } = this.props.navigation
    return <VideoBlock type={type} navigate={navigate} blockInfo={{ videoes: data[0] }} />
  }

  renderSwiper({ section: { type, data = [] } }) {
    let { navigate } = this.props.navigation
    return <Swiper swipers={data[0]} />
  }

  renderMenu({ section: { type, data = [] } }) {
    let { navigate } = this.props.navigation
    return <VideoLocationFilter filters={mockMenus} />
  }

  renderSection() {
    let {
      tvVideos: { data: videoBlocks = [] } = {},
      tvBanner: { data: swipers = [] } = {},
    } = this.props

    let sections = [
      { type: -1, data: [swipers], renderItem: this.renderSwiper.bind(this) },
      { type: -1, data: [mockMenus], renderItem: this.renderMenu.bind(this) },
    ]

    let videos = {
      type: 3,
      data: [videoBlocks]
    }

    sections.push(videos)

    return sections
  }

  handleRefresh() {
    let { requestVideos } = this.props
    // requestVideos({ type: 1, pageIndex: 1, pageSize: 21 })
  }

  handleLoadMore(o) {
    let { tvVideos = {}, requestVideos } = this.props
    let { pageIndex = 1, isEnd = false } = tvVideos
    !isEnd && requestVideos({ type: 1, pageIndex: pageIndex + 1, pageSize: 21 })
  }

  render() {
    let { tvVideos: { isRequesting = true, isEnd = false } = {} } = this.props
    return (
      <View style={{ flex: 1 }}>
        <SectionList
          initialNumToRender={9}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderBlock.bind(this)}
          keyExtractor={(item, index) => { return item.length + index }}
          ListFooterComponent={isEnd ? Footer : FooterIndicator}
          removeClippedSubviews={true}
          sections={this.renderSection()}
          refreshing={isRequesting}
          alwaysBounceVertical={false}
          bounce={false}
          overScrollMode='never'
          onEndReachedThreshold={0.1}
          onRefresh={this.handleRefresh.bind(this)}
          onEndReached={this.handleLoadMore.bind(this)}
        />
      </View >
    )
  }
}

export default Container({
  barStyle: STATUSBAR.LIGHT,
  header: { type: HEADERTYPE.SEARCHENTRY }
})(TVService(TV))