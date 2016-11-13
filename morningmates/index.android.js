import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import MyScene from './pages/MyScene';
import Drawer from 'react-native-drawer';
import ControlPanel from 'react-native-drawer';

export default class morningmates extends Component {
  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };
  render() {

    return (
      <Drawer
        type="static"
        content={      <ScrollView style={styles.container}>
                         <Text style={styles.controlText}>Control Panel</Text>
                         <TouchableOpacity style={styles.button} onPress={this.closeControlPanel}>
                           <Text>Close Drawer</Text>
                         </TouchableOpacity>
                       </ScrollView>}
        openDrawerOffset={100}
        tweenHandler={Drawer.tweenPresets.parallax}
        >
        <Navigator
        configureScene={() => ({...Navigator.SceneConfigs.PushFromRight, gestures: {}})}
          initialRoute={{ title: 'My Initial Scene', index: 0 }}
          renderScene={(route, navigator) =>
            <MyScene
              title={route.title}

              // Function to call when a new scene should be displayed
              onForward={ () => {
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Scene ' + nextIndex,
                  index: nextIndex,
                });
              }}

              // Function to call to go back to the previous scene
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
            />
          }
        />
      </Drawer>
    );
  }
}

const drawerStyles = StyleSheet.create({
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3}
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
})

AppRegistry.registerComponent('morningmates', () => morningmates);