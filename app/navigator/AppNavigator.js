import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, BackHandler, Platform } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import AppStackNavigator from './AppStackNavigator'

class AppNavigator extends React.Component {
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }
  }
  render() {
    return <AppStackNavigator />
  }
  onBackAndroid = () => {
    const { dispatch, navigation, nav } = this.props;
    BackHandler.exitApp()
  }
}

export default AppNavigator