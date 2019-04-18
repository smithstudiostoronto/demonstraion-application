
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { EventRegister } from 'react-native-event-listeners'
import {store} from '../../state/store';
import {Navigation} from 'react-native-navigation';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';



/*
Platform.OS === 'ios' ? watchPositionIos() : watchPositionAndriod()
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

type Props = {};
export default class MainMap extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: store.getLocation().latitude,
        longitude: store.getLocation().longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    }
    this.listener2 = EventRegister.addEventListener('location', (location) => {
      this.setState({
        region: {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      })
    })

  }

  componentWillMount() {
    
  }
  
  static options(passProps) {
    return {
      topBar: {

      }
    };
  }
  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  onRegionChange = (region) => {
    this.setState({ region });
  }
  

  render() {
    console.log('state', this.state)
    return (
 
      <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.container}
      
      initialRegion={this.state.region}
      /*
      region={this.state.region}
      onRegionChange={this.onRegionChange}
      */
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',*/
  },
});


/**

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
});

*/