import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Home from '../container/Home';
import Hot from '../container/Hot';
import Video from '../container/Video';
import TV from '../container/TV';
import User from '../container/User';
import CustomerAnimate from '../animations';

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
  Video: {
    screen: Video,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '电影',
      tabBarIcon: ({ tintColor }) => (<Icon name="camrecorder" size={22} color={tintColor} />)
    })
  },
  TV: {
    screen: TV,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '电视剧',
      tabBarIcon: ({ tintColor }) => (<Icon name="screen-desktop" size={20} color={tintColor} />)
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
      activeTintColor: '#3cb963',
      activeBackgroundColor: '#fff',
      inactiveTintColor: '#999',
      inactiveBackgroundColor: '#fff',
      showIcon: true,
      tabStyle: {
      },
      indicatorStyle: {
        height: 0
      },
      labelStyle: {
        fontSize: 12,
        // marginTop: 3,
      },
      style: {
        paddingVertical: 3,
        backgroundColor: '#fff',
        borderTopColor: '#fff'
      },
      iconStyle: {
      }
    }
  });


export default AppTabNavigator