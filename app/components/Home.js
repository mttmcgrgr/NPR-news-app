import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, Button
} from 'react-native';

export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to NPR News Stream
        </Text>
        <Button
          style={styles.button}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
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
