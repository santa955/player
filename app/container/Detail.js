import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Video from 'react-native-video';

import Carousel from 'react-native-looped-carousel';
import Header from '../components/Header/DetailHeader';
import Icon from '../components/Icon'
import { commonStyles, font, textColor, bgColor } from '../styles';

let screenWidth = Dimensions.get('window').width;

class Detail extends Component {
  static navigationOptions = {
    header: (HeaderProps) => {
      return <Header navigation={HeaderProps} />
    }
  }
  constructor() {
    super()
  }
  componentDidMount() {
  }
  render() {
    let { root, block } = commonStyles
    return (
      <View style={commonStyles.root}>
        <View style={styles.player}></View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[block.block, styles.videoInfo]}>
            <View style={block.blockHeader}>
              <View style={block.headerMain}>
                <View style={block.titleMain}>
                  <Text style={[block.mainTitle]}>神探夏洛克 第四季</Text>
                </View>
                <View style={[block.rightLink, block.mainTitleLink]}>
                  <Text style={block.linkText}>简介</Text>
                  <Icon style={block.linkIcon} type="SimpleLineIcons" name="arrow-right"></Icon>
                </View>
              </View>
              <View style={block.headerSub}>
                <View style={block.subMain}>
                  <Text style={block.subTitle}>全42集 | 3397.6万次播放 | 7.5分 | 传奇 </Text>
                </View>
              </View>
            </View>
            <View style={block.blockContent}>
              <View style={styles.actions}>
                <View style={styles.action}>
                  <Icon type="Feather" name="heart" iconStyle={styles.actionIcon} />
                  <Text style={styles.actionText}>收藏</Text>
                </View>
                <View style={styles.action}>
                  <Icon type="Feather" name="download" iconStyle={styles.actionIcon} />
                  <Text style={styles.actionText}>下载</Text>
                </View>
                <View style={styles.action}>
                  <Icon type="Feather" name="star" iconStyle={styles.actionIcon} />
                  <Text style={styles.actionText}>评分</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[block.block]}>
            <View style={block.blockHeader}>
              <View style={block.headerMain}>
                <View style={block.titleMain}>
                  <Text style={[block.mainTitle]}>剧集</Text>
                </View>
                <View style={[block.rightLink, block.mainTitleLink]}>
                  <Text style={block.linkText}>更新至26集 / 周一至周四每晚更新2集</Text>
                  <Icon style={block.linkIcon} type="SimpleLineIcons" name="arrow-right"></Icon>
                </View>
              </View>
            </View>
            <View style={block.blockContent}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.videoSeries}>
                  <View style={styles.series}><Text style={styles.seriesText}>1</Text></View>
                  <View style={[styles.series, styles.activeSeries]}>
                    <Text style={[styles.seriesText, styles.activeSeriesText]}>2</Text>
                  </View>
                  <View style={styles.series}><Text style={styles.seriesText}>3</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>4</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>5</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>6</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>7</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>8</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>9</Text></View>
                  <View style={styles.series}><Text style={styles.seriesText}>10</Text></View>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Detail

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5'
  },

  player: {
    height: 260,
    borderWidth: 1,
    backgroundColor: '#000',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  action: {
    marginLeft: 16,
    alignItems: 'center',
  },
  actionIcon: {
    fontWeight: 'bold',
    fontSize: font.lg,
  },
  actionText: {
    fontSize: 10,
    color: textColor.secondary,
    textAlign: 'center',
  },
  videoSeries: {
    marginTop: 8,
    marginLeft: -12,
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around'
  },
  series: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
    marginBottom: 8,
    width: 36,
    height: 36,
    backgroundColor: bgColor.gray,
    borderRadius: 2
  },
  activeSeries: {
    backgroundColor: bgColor.green
  },
  seriesText: {
    fontSize: font.nr,
    color: textColor.secondary
  },
  activeSeriesText: {
    color: textColor.white
  }
})