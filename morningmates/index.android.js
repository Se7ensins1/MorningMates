import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

//var MyScene = require('./MyScene')
import MyScene from './pages/MyScene';
import Drawer from './node_modules/react-native-drawer';
import ControlPanel from './node_modules/react-native-drawer';

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
        content={<ControlPanel />}
        openDrawerOffset={100}
        styles={drawerStyles}
        tweenHandler={Drawer.tweenPresets.parallax}
        >
        <Navigator
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

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

AppRegistry.registerComponent('morningmates', () => morningmates);