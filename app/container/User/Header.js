import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Block, BlockBody } from '../../components/Block'
import Icon from '../../components/Icon'
import { font, color } from '../../styles'

export default class Header extends React.PureComponent {
  render() {
    let { navigate } = this.props
    return (
      <LinearGradient
        start={{ x: 0.0, y: 0 }}
        end={{ x: 1, y: 1.0 }}
        locations={[0, 1]}
        colors={['#42a855', '#51d15b']} >
        <Block style={[styles.userBlock, styles.header]}>
          <BlockBody>
            <TouchableOpacity
              activeOpacity={1}
              focusedOpacity={1}
              onPress={() => navigate('Login')}>
              <View style={[styles.headerUser]}>
                <View style={styles.userAavatar}>
                  <Image style={styles.avatar} source={{ uri: 'http://i.gtimg.cn/qqlive/images/20150608/avatar.png' }} />
                  <Text style={styles.level}>LV. 12</Text>
                </View>
                <View style={styles.userInfo}>
                  <View style={styles.loginStatus}>
                    <Text style={styles.status}>登录/注册</Text>
                    <Icon iconStyle={styles.loginArrow} type="SimpleLineIcons" name="arrow-right" size={13}></Icon>
                  </View>
                  <View style={styles.tips}>
                    <Text style={styles.tipsText}>登录后可以观看更多精彩视频哦~</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </BlockBody>
        </Block>
      </LinearGradient >
    )
  }
}

const styles = StyleSheet.create({
  userBlock: {
    paddingHorizontal: 16,
  },
  noVerticalPadding: {
    paddingVertical: 0
  },
  header: {
    backgroundColor: 'transparent'
  },
  headerUser: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 48,
    paddingBottom: 8,
  },
  userAavatar: {
    alignItems: 'center'
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderColor: color.white,
    borderWidth: StyleSheet.hairlineWidth
  },
  level: {
    position: 'absolute',
    paddingHorizontal: 8,
    bottom: -4,
    textAlign: 'center',
    backgroundColor: 'rgb(246, 225, 62)',
    color: color.white,
    fontSize: font.xs,
    borderRadius: 2
  },
  userInfo: {
    marginLeft: 16
  },
  loginStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  status: {
    fontSize: font.md,
    color: color.white
  },
  loginArrow: {
    marginLeft: 4,
    color: color.white
  },
  tipsText: {
    fontSize: font.xs,
    color: color.white
  }
})