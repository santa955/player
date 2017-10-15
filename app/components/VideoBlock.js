import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import Icon from './Icon';
import { textColor, bgColor, font, commonStyles, color } from '../styles'
import VideoList from './VedioList';

let { width: screenWidth, heigth: screenHeight } = Dimensions.get('window');
let layoutWidth = screenWidth - 32;

export default class VideoBlock extends React.Component {
  render() {
    let { title, subTitle, icon } = this.props.blockInfo;
    return (
      <View style={styles.block}>
        <View style={styles.blockTitle}>
          <Icon type="SimpleLineIcons" name={icon} iconStyle={styles.titleIcon} />
          <Text style={styles.titleMain}>{title}</Text>
          <Text style={styles.titleSub}>{subTitle}</Text>
        </View>
        <View style={styles.blockContent}>
          {this.renderVideoesList()}
        </View>
        <View style={styles.blockBottom}>
          <View style={styles.buttonLink}>
            <Text style={styles.buttonText}>查看更多</Text>
            <Icon type="SimpleLineIcons" iconStyle={styles.buttonIcon} name="arrow-right" size={9}></Icon>
          </View>
          <View style={styles.buttonLink}>
            <Text style={styles.buttonText}>换一批</Text>
            <Icon type="SimpleLineIcons" iconStyle={styles.buttonIcon} name="refresh" size={10}></Icon>
          </View>
        </View>
      </View>
    )
  }

  renderVideoesList() {
    let { type, navigate, blockInfo } = this.props;
    let videoes = blockInfo.videoes;
    if ('vertical' === type) {
      return (<VideoList navigate={navigate} videoes={videoes}></VideoList>)
    } else {
      return (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <VideoList navigate={navigate} videoes={videoes}></VideoList>
        </ScrollView>
      )
    }
  }
}

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 8,
    backgroundColor: bgColor.white
  },

  blockTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  titleIcon: {
    marginRight: 8,
    fontSize: font.lg,
    color: textColor.active
  },

  titleMain: {
    fontSize: font.md,
    color: textColor.primary
  },

  titleSub: {
    fontSize: font.xs,
    marginLeft: 8
  },

  blockContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
    marginLeft: -8
  },

  blockBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: layoutWidth / 2,
  },
  buttonText: {
    fontSize: font.xs,
    color: textColor.link,
    textAlign: 'center',
  },
  buttonIcon: {
    marginLeft: 8,
    color: textColor.link,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})