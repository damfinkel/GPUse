/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Router from './src/Router';

class GPUseReact extends Component {
  static navigationOptions = {
    title: 'Home Screen'
  };

  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('GPUseReact', () => GPUseReact);
