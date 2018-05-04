import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import VideoItem, { FullVideoItem } from './VideoItem'

export default class VideoList extends React.Component {
  render() {
    return (
      <View style={styles.videoList}>
        {this.renderContent()}
      </View>
    )
  }

  renderContent() {
    let { type } = this.props
    let List = null
    switch (parseInt(type, 10)) {
      case 1:
        List = this.renderVerticalList()
        break
      case 2:
        List = this.renderHorizontalList()
        break
      case 3:
        List = this.renderNormalList()
        break
      default:
        List = this.renderNormalList()
        break
    }

    return List
  }

  renderNormalList() {
    let { videoes = [], navigate, type } = this.props
    return this.renderItem(videoes, type, navigate)
  }

  renderVerticalList() {
    let { videoes = [], navigate, type } = this.props
    let full = videoes[0]
    let vertical = videoes.slice(1)
    return (
      <View style={styles.verticalWrapper}>
        {this.renderFullItem(full)}
        <View style={styles.vertical}>
          {this.renderItem(vertical, type, navigate)}
        </View>
      </View>
    )
  }

  renderHorizontalList() {
    let { videoes = [], navigate, type } = this.props
    return (
      <FlatList
        keyExtractor={(item, index) => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={videoes}
        renderItem={({ item }) => <VideoItem type={type} video={item} navigate={navigate} />}
      />
    )
  }

  renderFullItem(data) {
    let { navigate, type } = this.props
    return (
      <View style={styles.full}>
        <FullVideoItem type={type} video={data} navigate={navigate} />
      </View>
    )
  }

  renderItem(videoes, type, navigate) {
    return videoes.map((video, index) => {
      return <VideoItem key={index} type={type} video={video} navigate={navigate} />
    })
  }
}

const styles = StyleSheet.create({
  videoList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },

  verticalWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  vertical: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 12
  }
})