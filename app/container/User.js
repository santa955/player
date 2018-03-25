import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Block, BlockBody } from '../components/Block'
import { font, commonStyles, color, blockStyle } from '../styles'
import Icon from '../components/Icon';
import MenusList from '../components/MenusList';

import { userMenus } from '../mock/user';

class User extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
  }
  render() {
    return (
      <View style={commonStyles.root}>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"
          translucent />
        <ScrollView showsVerticalScrollIndicator={false}>
          <LinearGradient
            start={{ x: 0.0, y: 0 }}
            end={{ x: 1, y: 1.0 }}
            locations={[0, 1]}
            colors={['#43e97b', '#38f9d7']}>
            <Block style={[styles.userBlock, styles.header]}>
              <BlockBody>
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
                      <Text style={styles.tipsText}>登录后才能查看更多精彩视频哦~</Text>
                    </View>
                  </View>
                </View>
                {/*
                  <View style={styles.settingContainer}>
                    <Icon type="SimpleLineIcons" name="settings" size={22} iconStyle={styles.userSetting} />
                  </View>
                  */
                }
              </BlockBody>
            </Block>
          </LinearGradient>
          <Block style={styles.userBlocks}>
            <BlockBody>
              <View style={styles.userAccount}>
                <View style={styles.accountTitle}>
                  <Icon type="Entypo" name="wallet" iconStyle={styles.menuIcon} />
                  <Text style={styles.titleText}>我的账户</Text>
                </View>
                <View style={styles.accountMenus}>
                  <View style={styles.accountMenu}>
                    <Text style={styles.menuNumber}>24</Text>
                    <Text style={styles.menuText}>观看</Text>
                  </View>
                  <LinearGradient
                    locations={[0, 0.5, 1]}
                    colors={['#efefef', '#ddd', '#efefef']}
                    style={styles.accountMenuDivid} />
                  <View style={styles.accountMenu}>
                    <Text style={styles.menuNumber}>2</Text>
                    <Text style={styles.menuText}>收藏</Text>
                  </View>
                  <LinearGradient
                    locations={[0, 0.5, 1]}
                    colors={['#efefef', '#ddd', '#efefef']}
                    style={styles.accountMenuDivid} />
                  <View style={styles.accountMenu}>
                    <Text style={styles.menuNumber}>245</Text>
                    <Text style={styles.menuText}>积分</Text>
                  </View>
                </View>
              </View>
            </BlockBody>
          </Block>
          <Block style={styles.userBlocks} verticalGap={true}>
            <BlockBody style={{ flex: 1 }}>
              <MenusList menus={userMenus} />
            </BlockBody>
          </Block>
        </ScrollView>
      </View >
    )
  }
}

export default User

const styles = StyleSheet.create({
  userBlock: {
    paddingHorizontal: 16,
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
  },
  settingContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  userSetting: {
    color: color.blackDisabled,
  },
  userAccount: {
    flex: 1
  },

  accountTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleText: {
    fontSize: font.md,
    color: color.blackPrimary
  },

  menuIcon: {
    fontSize: font.lg,
    color: color.green,
    marginRight: 8
  },

  accountMenus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
    paddingHorizontal: 32,
    // borderWidth: 1,
  },

  accountMenu: {
    padding: 8,
    flexDirection: 'column',
    alignItems: 'center',
    // borderWidth: 1,
  },

  accountMenuDivid: {
    width: 1,
    // borderColor: '#efefef',
    height: 24
  },

  menuNumber: {
    fontSize: font.nr,
    color: color.blackPrimary
  },

  menuText: {
    fontSize: font.nr,
    color: color.colorDivid
  },

  userMenus: {
    borderTopWidth: StyleSheet.hairlineWidth,
    marginTop: -8,
    borderColor: color.colorDivid
  },
  menus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  actionIcon: {
    color: color.blackSecondary
  },
  menuText: {
    marginTop: 4,
    fontSize: font.xs,
    color: color.blackSecondary
  }
})