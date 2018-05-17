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
import { mockSwipers, mockVideoBlocks, mockMenus } from '../../mock/home'

import { getVideo } from '../../service/common'

export class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    getVideo()
      .then(r => {
        console.log(r)
      })
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
    let sections = [
      { type: -1, data: [mockSwipers], renderItem: this.renderSwiper.bind(this) },
      { type: -1, data: [mockMenus], renderItem: this.renderMenu.bind(this) },
    ]

    for (let i = 1; i <= 3000; i++) {
      let o = {}
      if (i % 2 === 0) { o.type = 2, o.data = [mockVideoBlocks[2]] }
      else if (i % 3 === 0) { o.type = 3, o.data = [mockVideoBlocks[3]] }
      else { o.type = 1, o.data = [mockVideoBlocks[1]] }
      sections.push(o)
    }

    return sections
  }

  render() {
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
})(Home)