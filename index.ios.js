import React, { Component } from 'react';
import Config from './config.js';
import Home from './app/components/home.js';
import Stream from './app/components/stream.js';
import Stream from
import { AppRegistry, StyleSheet, Text, View, Button,
  TouchableHighlight, Linking, Navigator, SegmentedControlIOS,
 } from 'react-native';

export default class App extends Component {

  getInitialState() {
    return {
      routes: {
        home: {
          title: 'Home',
          component: Home
        },
        account: {
          title: 'My Account',
          component: AccountView
        }
      }
    };
  },

  render() {
    return (
      <Navigator
        ref={component => this._navigator = component}
        navigationBar={this.getNav()}
        initialRoute={this.state.routes.home}
        renderScene={(route, navigator) =>
          <route.component {...route.props} navigator={navigator} />}
      />
    );
  },
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    height: 100,
    width: 200,
    backgroundColor: '#1B84FF',
  }
});

AppRegistry.registerComponent('MosaicChallenge', () => MosaicChallenge);
