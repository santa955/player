import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Home from '../container/Home';
import Hot from '../container/Hot';
import Video from '../container/Video';
import TV from '../container/TV';
import User from '../container/User';
import CustomerAnimate from '../animations';
import { textColor, bgColor, font, color } from '../styles'

const AppTabNavigator = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (<Icon name="home" size={20} color={tintColor} />)
    })
  },
  Hot: {
    screen: Hot,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '热播',
      tabBarIcon: ({ tintColor }) => (<Icon name="fire" size={22} color={tintColor} />)
    })
  },
  TV: {
    screen: TV,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '电视剧',
      tabBarIcon: ({ tintColor }) => (<Icon name="screen-desktop" size={20} color={tintColor} />)
    })
  },
  Video: {
    screen: Video,
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
    initialRouteName: 'TV',
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
  });


export default AppTabNavigator