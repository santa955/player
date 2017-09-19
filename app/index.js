import React from 'react';
import AppNavigator from './navigator/AppNavigator';

export default class App extends React.Component {
  componentDidMount() {
    // SplashScreen.hide();
  }
  render() {
    return (
     <AppNavigator />
    );
  }
}
