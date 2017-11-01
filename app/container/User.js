import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { textColor, bgColor, font, commonStyles, color, blockStyle } from '../styles';
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
          <View>
            <View style={[blockStyle.block, styles.userInfoContainer]}>
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
              <View style={styles.settingContainer}>
                <Icon type="SimpleLineIcons" name="settings" size={22} iconStyle={styles.userSetting} />
              </View>
            </View>
            <View style={[blockStyle.block, styles.userMenus]}>
              <View style={styles.menus}>
                <View style={styles.menu}>
                  <Icon iconStyle={styles.actionIcon} type="Foundation" name="crown" size={24}></Icon>
                  <Text style={styles.menuText}>会员中心</Text>
                </View>
                <View style={styles.menu}>
                  <Icon type="Feather" name="download" size={22} iconStyle={styles.actionIcon} />
                  <Text style={styles.menuText}>我的下载</Text>
                </View>
                <View style={styles.menu}>
                  <Icon type="Feather" name="clock" size={22} iconStyle={styles.actionIcon} />
                  <Text style={styles.menuText}>播放记录</Text>
                </View>
                <View style={styles.menu}>
                  <Icon type="Feather" name="star" size={22} iconStyle={styles.actionIcon} />
                  <Text style={styles.menuText}>我的收藏</Text>
                </View>
              </View>
            </View>
            <MenusList menus={userMenus}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default User

const styles = StyleSheet.create({
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16
  },
  userAavatar: {
    alignItems: 'center'
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36
  },
  level: {
    position: 'absolute',
    paddingHorizontal: 8,
    bottom: -4,
    textAlign: 'center',
    backgroundColor: 'rgb(246, 225, 62)',
    color: textColor.white,
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
    color: textColor.primary
  },
  loginArrow: {
    marginLeft: 4,
    color: textColor.primary
  },
  tipsText: {
    fontSize: font.xs,
    color: textColor.secondary
  },
  settingContainer:{
    position:'absolute',
    top: 16,
    right: 16,
  },
  userSetting:{
    color: textColor.disabled,
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
    color: textColor.disabled
  },
  menuText: {
    marginTop: 4,
    fontSize: font.xs,
    color: textColor.secondary
  }
})