import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

export default class Block extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[block.block, ...this.props.style]}>
        <View style={block.blockHeader}>
          <View style={block.headerMain}>
            <View style={block.titleMain}>
              <Text style={[block.mainTitle]}>{this.props.title}</Text>
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
    )
  }
}

export const blockStyle = {
  block: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
    backgroundColor: base.bgColor.white,
  },
  headerMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  mainTitle: {
    fontSize: base.font.sm,
    color: base.textColor.primary,
    fontWeight: '600'
  },
  mainTitleLink: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  linkText: {
    fontSize: base.font.xs,
    color: base.textColor.blackSecondary
  },
  linkIcon: {
    marginLeft: 4,
  },
  headerSub: {
    marginTop: 4,
  },
  subTitle: {
    fontSize: base.font.xs,
    color: base.textColor.secondary,
  },

  blockContent: {
    marginTop: 16
  }
}