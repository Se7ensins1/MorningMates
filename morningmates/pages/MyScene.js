import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class MyScene extends Component {
  render() {
    return (
      <View style = {style.container}>
        <Text style = {style.title}>
          Current Scene: { this.props.title }
        </Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text style = {style.sub}>
            Tap me to load the next scene.
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text style = {style.sub}>
            Tap me to go back.
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  sub: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
})

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};