import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';



import {Navigation} from 'react-native-navigation';


type Props = {};
export default class DeadEnd extends Component<Props> {

  constructor(props) {
    super(props);
  }
  
  static options(passProps) {
    return {
      topBar: {

      }
    };
  }

  render() {
    return (
      <View style={styles.container}>

<Text>Whoops!</Text>
            
      </View>
    );
  }
}
/*
        <Image  style={{width: 150, height: 150}}
                source={require('../../assets/images/logos/main_apple_emblem.jpg')}>
                </Image>
                */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});