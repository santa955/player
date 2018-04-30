import React, { Component } from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Icon from '../components/Icon'
import Home from '../container/Home'
import Hot from '../container/Hot'
import Film from '../container/Film'
import TV from '../container/TV'
import User from '../container/User'
import Channel from '../container/Channel'
import CustomerAnimate from '../animations'
import { textColor, bgColor, font, color } from '../styles'

const AppTabNavigator = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (<Icon name="home" size={20} color={tintColor} />)
    })
  },
  Channel: {
    screen: Channel,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '频道',
      tabBarIcon: ({ tintColor }) => (<Icon name="grid" size={18} color={tintColor} />)
    })
  },
  // Hot: {
  //   screen: Hot,
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarLabel: '热播',
  //     tabBarIcon: ({ tintColor }) => (<Icon name="fire" size={22} color={tintColor} />)
  //   })
  // },
  // Fun: {
  //   screen: TV,
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarLabel: '搞笑',
  //     tabBarIcon: ({ tintColor }) => (<Icon type="MaterialCommunityIcons" name="incognito" size={26} color={tintColor} />)
  //   })
  // },
  TV: {
    screen: TV,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '电视剧',
      tabBarIcon: ({ tintColor }) => (<Icon name="screen-desktop" size={20} color={tintColor} />)
    })
  },
  Film: {
    screen: Film,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '电影',
      tabBarIcon: ({ tintColor }) => (<Icon name="camrecorder" size={22} color={tintColor} />)
    })
  },
  User: {
    screen: User,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (<Icon name="user" size={20} color={tintColor} />)
    })
  }
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    lazy: true,
    initialRouteName: 'Home',
    backBehavior: 'none',
    tabBarOptions: {
      activeTintColor: textColor.active,
      activeBackgroundColor: bgColor.white,
      inactiveTintColor: textColor.secondary,
      inactiveBackgroundColor: bgColor.white,
      showIcon: true,
      indicatorStyle: {
        height: 0
      },
      labelStyle: {
        fontSize: font.xs,
      },
      style: {
        paddingVertical: 3,
        backgroundColor: bgColor.white,
        borderTopColor: color.colorDivid
      }
    }
  })


export default AppTabNavigator