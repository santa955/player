import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, SectionList, Text } from 'react-native'
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

  render() {
    let blockInfo = mockVideoBlocks[0]
    return (
      <View style={{ flex: 1 }}>
        <SectionList
          showsVerticalScrollIndicator={false}
          renderItem={this.renderBlock.bind(this)}
          keyExtractor={(item, index) => item + index}
          sections={[
            { type: -1, data: [mockSwipers], renderItem: this.renderSwiper.bind(this) },
            { type: -1, data: [mockMenus], renderItem: this.renderMenu.bind(this) },
            { type: 1, data: [mockVideoBlocks[0]] },
            { type: 2, data: [mockVideoBlocks[2]] },
            { type: 3, data: [mockVideoBlocks[3]] },
            { type: 2, data: [mockVideoBlocks[2]] },
            { type: 1, data: [mockVideoBlocks[1]] },
          ]}
        />
      </View >
    )
  }
}

export default Container({
  barStyle: STATUSBAR.LIGHT,
  header: { type: HEADERTYPE.SEARCHENTRY }
})(Home)