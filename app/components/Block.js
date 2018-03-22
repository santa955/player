import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import Icon from './Icon';
import { font, commonStyles, color } from '../styles'

let { width: screenWidth, heigth: screenHeight } = Dimensions.get('window');
let layoutWidth = screenWidth - 16;

export default class VideoBlock extends React.Component {
  render() {
    let { title, subTitle, icon } = this.props.blockInfo;
    return (
      <View style={styles.block}>
        <View style={styles.blockHeader}>
          {icon ? <Icon type="SimpleLineIcons" name={icon} iconStyle={styles.headerIcon} /> : null}
          <View style={styles.headerTitle}>
            <Text style={styles.titleMain}>{title}</Text>
            <Text style={styles.titleSub}>{subTitle}</Text>
          </View>
        </View>
        <View style={styles.blockContent}>
          {this.props.children}
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
}

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    marginTop: 8,
    backgroundColor: color.white
  },

  blockHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  headerIcon: {
    marginRight: 8,
    fontSize: font.lg,
    color: color.green
  },

  headerTitle:{
    flexDirection: 'row',
    alignItems: 'baseline'
  },

  titleMain: {
    fontSize: font.md,
    color: color.blackPrimary
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
    color: color.green,
    textAlign: 'center',
  },

  buttonIcon: {
    marginLeft: 8,
    color: color.green,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})