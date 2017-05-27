/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  TextInput,
  View
} from 'react-native';

const beginWork = () => {
  console.log('Button has been pressed!');
};

export default class GPUseReact extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={containerStyles.mainContainer}>
        <View>
          <Text style={contentStyles.title}>
            GPUse
          </Text>
        </View>
        <View style={containerStyles.textContainer}>
          <TextInput
            style={{height: 40}}
            placeholder="Address"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View style={contentStyles.connectContainer}>
          <Button
            style={containerStyles.connect}
            title="Connect"
            onPress={beginWork}
          />
        </View>
      </View>
    );
  }
}

const containerStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 20,
    backgroundColor: '#F5FCFF',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  connectContainer: {
    flex: 1,
    alignItems: 'flex-end',
    textAlign: 'center',
    color: '#333333'
  }
});

const contentStyles = StyleSheet.create({
  title: {
    textAlign:'center',
    fontSize:25
  },
  connect: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('GPUseReact', () => GPUseReact);
