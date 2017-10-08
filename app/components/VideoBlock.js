import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { textColor, bgColor, font, commonStyles, color } from '../styles'
import VideoList from './VedioList';

let { width: screenWidth, heigth: screenHeight } = Dimensions.get('window');
let layoutWidth = screenWidth - 32;

export default class VideoBlock extends React.Component {
  render() {
    let type = this.props.type;
    let { title, subTitle, icon, videoes } = this.props.blockInfo;

    return (
      <View style={styles.block}>
        <View style={styles.blockTitle}>
          <Icon name={icon} style={styles.titleIcon} />
          <Text style={styles.titleMain}>{title}</Text>
          <Text style={styles.titleSub}>{subTitle}</Text>
        </View>
        <View style={styles.blockContent}>
          {this.renderVideoesList(type, videoes)}
        </View>
        <View style={styles.blockBottom}>
          <View style={styles.buttonLink}>
            <Text style={styles.buttonText}>查看更多</Text>
            <Icon style={styles.buttonIcon} name="arrow-right" size={9}></Icon>
          </View>
          <View style={styles.buttonLink}>
            <Text style={styles.buttonText}>换一批</Text>
            <Icon style={styles.buttonIcon} name="refresh" size={10}></Icon>
          </View>
        </View>
      </View>
    )
  }

  renderVideoesList(type, videoes) {
    if ('vertical' === type) {
      return (<VideoList videoes={videoes}></VideoList>)
    } else {
      return (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <VideoList videoes={videoes}></VideoList>
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