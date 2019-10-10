import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';
import {Navigation} from 'react-native-navigation';
export default class CreditCard extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    Navigation.events().bindComponent(this);
}

  componentWillMount() {
    if (Platform.OS === 'ios') {
      CardIOUtilities.preload();
    }
  }
 
  componentDidAppear() {


 
}
  scanCard() {
    console.log("here")
    CardIOModule
      .scanCard({hideCardIOLogo: true, scanExpiry: true})
      .then(card => {
        console.log(card)
      })
      .catch(() => {
        // the user cancelled
      })
  }
 





  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <TouchableOpacity onPress={this.scanCard}>
          <Text>Scan card!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}