import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Router from './Router'

class WorkingScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Working',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>AboutScreen!</Text>
        <Text onPress={this._goBackHome}>
          Go back home
        </Text>
      </View>
    )
  }

  _goBackHome = () => {
    this.props.navigator.pop();
  }
}

export default WorkingScreen
