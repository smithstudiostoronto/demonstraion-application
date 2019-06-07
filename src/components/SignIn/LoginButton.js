import React, {Component} from 'react';
import {Animated, Platform, StyleSheet, Text, View, Button, TouchableWithoutFeedback} from 'react-native';

import Spinner from 'react-native-spinkit';

/*
PROPS
onPress: function to run onPress
*/
type Props = {}
export default class LoginButton extends Component<Props> {

  state = {
    fadeAnimatedWidth: new Animated.Value(0),
    fadeAnimatedHeight: new Animated.Value(0),

    contAnimatedWidth: new Animated.Value(250),
    contAnimatedHeight: new Animated.Value(50),

    textOpacityAnimated: new Animated.Value(1),
    spinnerSizeAnimated: new Animated.Value(0),
  }

  reset = () => {
    Animated.sequence([    
      Animated.parallel([
        Animated.timing(                  
          this.state.fadeAnimatedWidth,         
          {
            toValue: 0,                  
            duration: 300,      
          }
        ),
        Animated.timing(                  
          this.state.fadeAnimatedHeight,            
          {
            toValue: 0,               
            duration: 100,             
          }
        )
      ]),
      Animated.parallel([
        Animated.timing(                 
          this.state.contAnimatedWidth,           
          {
            toValue: 250,              
            duration: 300,       
          }
        ),
        Animated.timing(                  
          this.state.fadeAnimatedWidth,           
          {
            toValue: 0,                   
            duration: 300,             
          }
        ),
        Animated.timing(                
          this.state.textOpacityAnimated,           
          {
            toValue: 1,                  
            duration: 200,             
          }
        ),
        Animated.timing(                
          this.state.spinnerSizeAnimated,           
          {
            toValue: 0,                  
            duration: 50,    
                    
          }
        ),
      ]),
    ]).start();
  }

  fadeAnimation = () => {
    // TOTAL DURATION: 600
    Animated.sequence([    
      Animated.parallel([
        Animated.timing(                  
          this.state.fadeAnimatedWidth,         
          {
            toValue: 250,                  
            duration: 300,      
          }
        ),
        Animated.timing(                  
          this.state.fadeAnimatedHeight,            
          {
            toValue: 50,               
            duration: 100,             
          }
        )
      ]),
      Animated.parallel([
        Animated.timing(                 
          this.state.contAnimatedWidth,           
          {
            toValue: 50,              
            duration: 300,       
          }
        ),
        Animated.timing(                  
          this.state.fadeAnimatedWidth,           
          {
            toValue: 50,                   
            duration: 300,             
          }
        ),
        Animated.timing(                
          this.state.textOpacityAnimated,           
          {
            toValue: 0,                  
            duration: 200,             
          }
        ),
        Animated.timing(                
          this.state.spinnerSizeAnimated,           
          {
            toValue: 1,                  
            duration: 50,    
            delay: 250         
          }
        ),
      ]),
    ]).start();
  }


  beginAnimation = () => {
    this.fadeAnimation();
    let that = this
    setTimeout(function() {that.props.onPress()}, 900);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.beginAnimation}>
          <View style={styles.outerContainer}>
            <View style={styles.touchable}>
              <View>
                <Animated.View style={{ ...styles.innerContainer, 
                                      width: this.state.contAnimatedWidth, 
                                      height: this.state.contAnimatedHeight}}>
                  <Animated.View style={{ ...styles.animatedSheet, 
                                        width: this.state.fadeAnimatedWidth, 
                                        height: this.state.fadeAnimatedHeight}}>
                  </Animated.View>
                </Animated.View>
              </View>
            </View> 
            <Animated.Text style={{ ...styles.text,
                                  opacity: this.state.textOpacityAnimated}}>
                                  SIGN IN
            </Animated.Text>
            <Animated.View style={{...styles.spinnerCont, 
                                  opacity: this.state.spinnerSizeAnimated}}>
              <Spinner type='WordPress' color='#F5FCFF' size={50}>
              </Spinner>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 50,
    borderRadius: 50,
  },
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    borderColor: '#F5FCFF',
    borderWidth: 1,
    width: 250,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0
  },
  animatedSheet: {
    backgroundColor: '#F5FCFF',
    opacity: 0.2,
    borderRadius: 50,
  },
  text: {
    color: '#F5FCFF',
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
    zIndex: 2,
    position: 'absolute',
  },
  spinnerCont: {
    zIndex: 3,
    position: 'absolute',
  }
});
