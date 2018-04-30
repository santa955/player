import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Block } from '../../components/Block'
import Icon from '../../components/Icon'
import { font, color } from '../../styles'

export default class Brief extends React.PureComponent {
  render() {
    return (
      <Block verticalGap={false}>
        <View style={styles.brief}>
          <View style={styles.briefHeader}>
            <View style={styles.title}>
              <Text style={styles.titleText} numberOfLines={1}>神探夏洛克神探夏洛克神探夏洛克 第四季</Text>
            </View>
            <View style={styles.link}>
              <Text style={styles.linkText}>简介</Text>
              <Icon iconStyle={styles.linkIcon} type="SimpleLineIcons" name="arrow-right"></Icon>
            </View>
          </View>
          <View style={styles.briefInfo}>
            <Text style={styles.infoText}>全42集</Text>
            <Text style={styles.infoText}>3397.6万次播放</Text>
            <Text style={styles.infoText}>7.5分</Text>
            <Text style={styles.infoText}>传奇</Text>
          </View>
          <View style={styles.briefMetas}>
            <View style={styles.metas}>
              <Text style={styles.meta}>3.5万赞</Text>
              <Text style={styles.meta}>2,394收藏</Text>
              <Text style={styles.meta}>3,645下载</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity>
                <View style={styles.action}>
                  <Icon type="Feather" name="heart" iconStyle={styles.actionIcon} />
                  {/* <Text style={styles.actionText}>收藏</Text> */}
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.action}>
                  <Icon type="FontAwesome" name="thumbs-o-up" iconStyle={styles.actionIcon} />
                  {/* <Text style={styles.actionText}>点赞</Text> */}
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.action}>
                  <Icon type="Feather" name="download-cloud" iconStyle={styles.actionIcon} />
                  {/* <Text style={styles.actionText}>下载</Text> */}
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  brief: {},

  briefHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleText: {
    fontSize: font.lg,
    color: color.blackPrimary,
    maxWidth: '90%',
    overflow: 'hidden'
  },

  link: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  linkText: {
    fontSize: font.sm,
    color: color.blackSecondary
  },

  linkIcon: {
    marginLeft: 2,
    fontSize: font.xs - 2,
    color: color.blackSecondary
  },

  briefInfo: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },

  infoText: {
    marginRight: 4,
    paddingRight: 4,
    fontSize: font.sm,
    color: color.blackSecondary,
  },

  briefMetas: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  metas: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  meta: {
    marginRight: 8,
    fontSize: font.sm
  },

  actions: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  action: {
    // borderWidth: 1,
    marginLeft: 16,
  },

  actionIcon: {
    fontSize: font.xl,
    color: color.blackSecondary
  },

  actionText: {
    fontSize: font.xs,
    color: color.blackSecondary
  }
})