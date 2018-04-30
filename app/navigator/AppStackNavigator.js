import React from 'react'
import { StackNavigator } from 'react-navigation'
import AppTabNavigator from './AppTabNavigator'
import Detail from '../container/Detail'
import Login from '../container/Login'
import Category from '../container/Category'
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
      headerStyle: {
        backgroundColor: '#2eb257',
        height: 48
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center'
      },
      headerBackTitleStyle: {
        color: 'white',
        fontSize: 14
      },
      headerTintColor: 'white'
    }
  },
  Category: {
    screen: Category,
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
    initialRouteName: 'Category',
    transitionConfig: () => {
      return {
        screenInterpolator: (sceneProps) => {
          return CustomerAnimate.Horizontal(sceneProps);
        }
      }
    }
  });

export default AppStackNavigator;