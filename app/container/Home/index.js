import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, SectionList, Text } from 'react-native'
import Container from '../Container'
import { HEADERTYPE, STATUSBAR } from '../../consts'
import Swiper from '../../components/Swiper'
import { VideoBlock } from '../../components/VideoBlock'
import Footer from '../../components/Footer'
import HomeMenu from './Menu'
import { mockSwipers, mockMenus } from '../../mock/home'

import HomeService from '../../service/home'

export class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestBanner({ type: 0, pageIndex: 1, pageSize: 6 })
    this.props.requestRecommends({ type: 0, pageIndex: 1, pageSize: 20 })
  }

  renderBlock({ section: { type, data = [] } }) {
    let { navigate } = this.props.navigation
    return <VideoBlock type={type} navigate={navigate} blockInfo={data[0]} />
  }

  renderSwiper({ section: { type, data = [] } }) {
    let { navigate } = this.props.navigation
    return <Swiper swipers={data[0]} />
  }

  renderMenu({ section: { type, data = [] } }) {
    let { navigate } = this.props.navigation
    return <HomeMenu menus={data[0]} navigate={navigate} />
  }

  renderSection() {
    let {
      homeRecommends: { data: videoBlocks = [] } = {},
      homeBanner: { data: swipers = [] } = {},
    } = this.props
    let sections = [
      { type: -1, data: [swipers], renderItem: this.renderSwiper.bind(this) },
      { type: -1, data: [mockMenus], renderItem: this.renderMenu.bind(this) },
    ]

    for (let i = 0, len = videoBlocks.length; i < len; i++) {
      let o = {}
      let index = i + 1
      if (index % 2 === 0) { o.type = 2, o.data = [videoBlocks[i]] }
      else if (index % 3 === 0) { o.type = 3, o.data = [videoBlocks[i]] }
      else { o.type = 1, o.data = [videoBlocks[i]] }
      sections.push(o)
    }

    return sections
  }

  render() {
    let { homeRecommends: { isRequesting } = {} } = this.props
    if (isRequesting) return <Text>加载中。。。</Text>
    return (
      <View style={{ flex: 1 }}>
        <SectionList
          initialNumToRender={5}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderBlock.bind(this)}
          keyExtractor={(item, index) => item + index}
          ListFooterComponent={Footer}
          removeClippedSubviews={true}
          sections={this.renderSection()}
          onEndReachedThreshold={2}
          refreshing={true}
        />
      </View >
    )
  }
}

export default Container({
  barStyle: STATUSBAR.LIGHT,
  header: { type: HEADERTYPE.SEARCHENTRY }
})(HomeService(Home))