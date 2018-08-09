import React, { Component } from 'react'
import { Text, View, SectionList } from 'react-native'
import Container from '../Container'
import { HEADERTYPE, STATUSBAR } from '../../consts'
import Swiper from '../../components/Swiper'
import { VideoBlock } from '../../components/VideoBlock'
import CategoryService from '../../service/category'

export class Category extends React.Component {
  componentDidMount() {
    this.props.requestBanner({ type: 0, pageIndex: 1, pageSize: 6 })
    this.props.requestRecommends({ type: 1, pageIndex: 1, pageSize: 10 })
  }

  renderBlock({ section: { type, data = [] } }) {
    let { navigate } = this.props.navigation
    return <VideoBlock type={type} navigate={navigate} blockInfo={data[0]} />
  }

  renderSwiper({ section: { type, data = [] } }) {
    let { navigate } = this.props.navigation
    return <Swiper swipers={data[0]} />
  }

  renderSection() {
    let {
      categoryRecommends: { data: videoBlocks = [] } = {},
      categoryBanner: { data: swipers = [] } = {},
    } = this.props
    let sections = [{ type: -1, data: [swipers], renderItem: this.renderSwiper.bind(this) }]
    let videoSection = videoBlocks.map(video => {
      return { type: 3, data: [video] }
    })
    return sections.concat(videoSection)
  }

  render() {
    let { categoryRecommends: { isRequesting } = {} } = this.props
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
  header: { type: HEADERTYPE.TITLENAV }
})(CategoryService(Category))