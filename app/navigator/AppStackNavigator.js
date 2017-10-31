import React from 'react';
import { StackNavigator } from 'react-navigation';
import AppTabNavigator from './AppTabNavigator';
import Detail from '../container/Detail';
import CustomerAnimate from '../animations';

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