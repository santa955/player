import React from 'react'
import { StackNavigator } from 'react-navigation'
import AppTabNavigator from './AppTabNavigator'
import Detail from '../container/Detail'
import Login from '../container/Login'
import Category from '../container/Category'
import Search from '../container/Search'
import CustomerAnimate from '../animations'

const AppStackNavigator = StackNavigator({
  Tabs: {
    screen: AppTabNavigator,
    navigationOptions: {
      header: null
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      header: null
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      header: null
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
}, {
    initialRouteName: 'Tabs',
    transitionConfig: () => {
      return {
        screenInterpolator: (sceneProps) => {
          return CustomerAnimate.Horizontal(sceneProps);
        }
      }
    }
  });

export default AppStackNavigator;