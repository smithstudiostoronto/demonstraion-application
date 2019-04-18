/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation'; 
import { EventRegister } from 'react-native-event-listeners'
import {watchPositionAndroid, watchPositionIos, clearWatchAndroid, clearWatchIos} from './src/services/geolocation';
import LoadingScreen from './src/components/LoadingScreen';
import MainMap from './src/components/MainMap/MainMap';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      appIsLoading: true
    }
    Navigation.events().bindComponent(this);
  }

  componentWillMount() {
    //allows loading screen to be triggered from state
    this.listener = EventRegister.addEventListener('appLoadingStatusChange', (newLoadingStatus) => {
      this.setState({
        appIsLoading: newLoadingStatus,
      })
    })
    this.listener2 = EventRegister.addEventListener('location', (location) => {
      this.setState({
        location: location,
      })
    })

    //used to clear watch
    const watchId = Platform.OS === 'ios' ? watchPositionIos() : watchPositionAndroid()
    this.setState({watchId})
  }

  componentWillUnmount(){
    const watchId = this.state.watchId
    Platform.OS === 'ios' ? clearWatchIos(watchId) : clearWatchAndroid(watchId)
  }
  
  componentDidAppear() {   

  }
  componentDidDisappear() {

  }

  render() {
    console.log(this.state.appIsLoading)
    if(this.state.appIsLoading){
      return(<LoadingScreen></LoadingScreen>);
    }
    return (<MainMap></MainMap>);
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

