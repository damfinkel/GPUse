import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import Router from './Router';

class MainScreen extends Component {
  static route = {
    navigationBar: {
      title: 'GPUse'
    }
  };

  constructor(props) {
    super(props);
    this.state = { text: '', gold: '0', time: '0' };
  }

  _goToWork = () => {
    // this.props.navigator.push(Router.getRoute('working'));
  };

  render() {
    return (
      <View style={containerStyles.mainContainer}>
        <View>
          <Text>{this.state.gold}</Text>
        </View>
        <View>
          <Text>{this.state.time}</Text>
        </View>
      </View>
      // <View style={containerStyles.mainContainer}>
        // <View>
        //   <Text style={contentStyles.title}>
        //     GPUse
        //   </Text>
        // </View>
        // <View style={containerStyles.textContainer}>
        //   <TextInput
        //     style={{ height: 40 }}
        //     placeholder="Address"
        //     onChangeText={text => this.setState({ text })}
        //   />
        // </View>
        // <View style={contentStyles.connectContainer}>
        //   <Button
        //     style={containerStyles.connect}
        //     title="Connect"
        //     onPress={this._goToWork}
        //   />
        // </View>
      // </View>
    );
  }
}

const containerStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 20,
    backgroundColor: '#F5FCFF'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
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
    textAlign: 'center',
    fontSize: 25
  },
  connect: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

export default MainScreen;
