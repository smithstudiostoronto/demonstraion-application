/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

/**** React Imports ****/
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation'; 
import { EventRegister } from 'react-native-event-listeners'
import {watchPositionAndroid, watchPositionIos, clearWatchAndroid, clearWatchIos} from './src/services/geolocation';
import LoadingScreen from './src/components/LoadingScreen';
import MainMap from './src/components/MainMap/MainMap';
import {store} from './src/state/store';




type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
    }
    Navigation.events().bindComponent(this);

  }
  static options(passProps) {
    return {
      sideMenu: {
    left: {
      width: 300
    }
      }
    };
  }
  componentDidMount() {

  }
  render() {

    return(<View style={styles.container}></View>
      )

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
});

