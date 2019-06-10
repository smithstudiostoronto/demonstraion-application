import React, {Component} from 'react';
import {Animated, Platform, StyleSheet, Text, View, Easing,Button, TouchableWithoutFeedback, TextInput} from 'react-native';

/**** THIRD-PARTY ****/

import IonIcon from 'react-native-vector-icons/Ionicons';


/*
PROPS
placeHolder: changes theme color
icon: changes Icon
borderColor: 
*/


type Props = {
    secure: false
}
export default class LoginInput extends Component<Props> {

  shakeAnimationValue = new Animated.Value(0); 

  
  constructor(props) {
    super(props);
    this.state = {
      borderColor: '#F5FCFF',
      iconColor: '#F5FCFF',
      opacity: 0.8,
      iconPadding: new Animated.Value(0),
      enteredText: ''
    }
  }

  error = () => {
      this.state.borderColor = '#cc0000';
      this.state.iconColor = '#cc0000';
      this.forceUpdate();
      this.shake();
  }

  sucess = () => {
    this.state.borderColor = '#57b846';
    this.state.iconColor = '#57b846';
    this.forceUpdate();
  }
  
  shake = () => {
    const { shakeAnimationValue } = this;

    shakeAnimationValue.setValue(0);
    Animated.timing(shakeAnimationValue, {
      duration: 375,
      toValue: 3,
      ease: Easing.bounce,
    }).start();
  }

  focus = async () => {



   
    //await this.setState({borderColor: '#57b846'})
    //await this.setState({iconColor: '#57b846'})
    this.setState({opacity: 1})
     if(typeof this.props.onFocus === "function"){
      await this.props.onFocus();
      
   }
   console.log(this.state);
   console.log("focus deep")
   await this.forceUpdate()
   Animated.timing(                  
    this.state.iconPadding,         
    {
      toValue: 12,                  
      duration: 265,      
    }
  ).start()
    this.input.focus()
  }

  blur = () => {

    Animated.timing(                  
        this.state.iconPadding,         
        {
          toValue: 0,                  
          duration: 300,      
        }
    ).start()
      console.log("blur deep")
  //  this.state.borderColor = '#F5FCFF'
  //  this.state.iconColor = '#F5FCFF'
  this.setState({opacity: 0.8});
   this.forceUpdate()
   if(typeof this.props.onBlur === "function"){
    this.props.onBlur();
    }
  }

  onChangeText = async (enteredText) => {
    await this.setState({enteredText: enteredText})
    if(typeof this.props.onChangeText === "function"){
      this.props.onChangeText();
   }
  }

  render() {
    const translateX = this.shakeAnimationValue.interpolate({
        inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
        outputRange: [0, -15, 0, 15, 0, -15, 0],
      });
    return ( 
        <Animated.View style={{...styles.container, 
                              opacity: this.state.opacity,
                              borderColor: this.state.borderColor, 
                              transform: [{ translateX }], 
                              ...this.props.style}}>
          <Animated.View style={{...styles.iconContainer, 
                                paddingLeft: this.state.iconPadding}}>
            <IonIcon name={this.props.icon} size={24} color={this.state.iconColor}/>
          </Animated.View>
          <View style={styles.inputContainer}>
            <TextInput placeholder={this.props.placeholder} 
                        style={{...styles.input, opacity: this.state.opacity }}
                        onFocus={this.focus}
                        ref={(_ref) => this.input = _ref} 
                        onBlur={this.blur}
                        secureTextEntry={this.props.secure}
                        autoCapitalize={this.props.autoCapitalize ? this.props.autoCapitalize: 'none'}
                        onChangeText={(enteredText) => this.onChangeText(enteredText)}
                        textContentType={this.props.textContentType}
                        value={this.state.enteredText}
                        placeholderTextColor='#F5FCFF'
                        autoFocus={this.props.autoFocus}
                        returnKeyType={this.props.returnKeyType}
                        onSubmitEditing={this.props.onSubmitEditing}
            />
          </View>
        </Animated.View>
    );
  }
}

const styles = StyleSheet.create({

    container: {
        height: 40,
        width: 265,
        borderRadius: 40,
        borderWidth: 2,
        flexDirection: 'row',
    },
    inputContainer: {
        borderBottomRightRadius: 40,
        borderTopRightRadius: 40,
        width: '80%',
        height: '100%'
      },
      inputOuter: {
        backgroundColor: 'transparent',
        borderRadius: 60,
        height: 40,
        width: 265,
      },
      input: {
        height: '100%',
        width: '100%',
        fontFamily: 'OpenSans-Regular',
        color: '#F5FCFF',
        fontSize: 18
      },
      iconContainer: {
          width: 50,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
      }
});
