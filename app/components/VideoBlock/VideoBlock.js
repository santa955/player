import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native'
import Icon from '../Icon'
import { Block, BlockHeader, BlockBody } from '../Block'
import VideoList from './VedioList';
import { font, commonStyles, color } from '../../styles'

export default class VideoBlock extends React.Component {
  render() {
    let { title, subTitle, icon } = this.props.blockInfo
    return (
      <Block verticalGap={true} style={{ paddingBottom: 0 }}>
        <BlockHeader title={title} subTitle={subTitle} headerIcon={icon} moreLink={true} />
        <BlockBody>{this.renderContent()}</BlockBody>
      </Block>
    )
  }

  renderContent() {
    let { type, navigate, blockInfo } = this.props
    let videoes = blockInfo.videoes;
    switch (parseInt(type, 10)) {
      case 1:
        return <VideoList type={1} navigate={navigate} videoes={videoes} />
        break;
      case 2:
        return (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <VideoList type={2} navigate={navigate} videoes={videoes} />
          </ScrollView>)
        break;
      default:
        return <VideoList navigate={navigate} videoes={videoes} />
        break;
    }
  }

  renderVideoList() {

  }
}