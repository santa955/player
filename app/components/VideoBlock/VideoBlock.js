import React from 'react'
import { Block, BlockHeader, BlockBody } from '../Block'
import VideoList from './VedioList'

export default class VideoBlock extends React.Component {
  render() {
    let { type, blockInfo = {}, navigate } = this.props
    let { title, subTitle, icon, videoes = [], moreLink = false } = blockInfo
    return (
      <Block verticalGap={true} style={{ paddingBottom: 0 }}>
        {title && <BlockHeader title={title} subTitle={subTitle} headerIcon={icon} moreLink={moreLink} />}
        <BlockBody>
          <VideoList videoes={videoes} navigate={navigate} type={type} />
        </BlockBody>
      </Block>
    )
  }
}