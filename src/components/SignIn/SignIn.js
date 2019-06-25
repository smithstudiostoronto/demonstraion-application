import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Dimensions, 
  ImageBackground, 
  TextInput,Button, 
  TouchableOpacity,
  AsyncStorage,
  Picker,
  Animated
} from 'react-native';

/**** NAVIGATION ****/
import {Navigation} from 'react-native-navigation';

import {store} from '../../state/store';

/**** THIRD PARTY ****/
import Toast, {DURATION} from 'react-native-easy-toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IonIcon from 'react-native-vector-icons/Ionicons';

/**** CUSTOM COMPONENTS ****/
import LoginButton from './LoginButton';
import LoginInput from './LoginInput';
import { AnimatedRegion } from 'react-native-maps';

type Props = {};
export default class SignIn extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      contAnimatedWidth: new Animated.Value (0),
      contAnimatedHeight: new Animated.Value(0),
    }
    //this.login()
  }

  // Ensuring that side menu width is constant across all devices
  static options(passProps) {
    return {

      sideMenu: {
        left: {
          width: 300
        },
        center: {
          component: {

          }
        }
      }
    };
  }

   login = async () => {

    
    setTimeout(()=>{
      this.emailInput.sucess()
      this.passwordInput.sucess()
      Animated.parallel([
        Animated.timing(                  
          this.state.contAnimatedWidth,         
          {
            toValue: 1,                  
            duration: 300,      
          }
        ),
        Animated.timing(                  
          this.state.contAnimatedHeight,            
          {
            toValue: Dimensions.get('window').height ,               
            duration: 100,             
          }
        )
      ]).start()

    }, 3000);


  //  fetch(userRoute, options)
  //     .then((response) => response.json())
  //     .then((responsesJson) => {
  //       //Stopring web token
  //       if (responsesJson.token){
  //         store.setAuthToken(responsesJson.token);
  //         store.updateUserData(responsesJson.userData);
  //         goHome() 
  //         //goToService()
  //       }
  //       else {
  //         let errorCode = responsesJson.errorCode;
  //         this.loginButton.reset()
  //         if(errorCode === 'blank-email' ||
  //            errorCode === 'auth/user-not-found' ||
  //            errorCode === 'auth/invalid-email') {
  //             this.emailInput.error();
  //            }
  //         if(errorCode === 'blank-password' ||
  //            errorCode === 'auth/wrong-password') {
  //             this.passwordInput.error();
  //           }
  //         this.refs.toast.show(responsesJson.message, 1500);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });


  }

  navigate = (screenName) => {
    Navigation.push(this.props.componentId, {
      component:{
        name: screenName
      }
    })
  }

  render() {
    return (

      <ImageBackground 
        style={styles.imageStyle}
        source={require('../../../assets/backgrounds/signInMain.png')}>
          <View style={styles.sheet}>
          <KeyboardAwareScrollView 
            contentContainerStyle={styles.container} 
            resetScrollToCoords={{ x: 0, y: 0}}>
              <View style={styles.logoContainer}>
                <Image style={styles.logo}  resizeMode="contain" source={require('../../../assets/images/logos/Jump-Logo-white-05.png')}></Image>
              </View>
              <View style={styles.inputBlock}>
                <LoginInput 
                  ref={(_ref) => this.emailInput = _ref} 
                  placeholder="Email" 
                  icon='ios-mail' 
                  style={styles.input}
                  keyboardType={"email-address"}
                  //autoFocus={true}
                  returnKeyType={'next'}
                  onSubmitEditing={() => { this.passwordInput.focus(); }}
                  textContentType='username'>
                </LoginInput>
                <LoginInput 
                  ref={(_ref) => this.passwordInput = _ref} 
                  placeholder="Password" 
                  icon='ios-lock' 
                  secure={true} 
                  style={styles.input}
                  returnKeyType={'go'}
                  onSubmitEditing={() => {
                    this.loginButton.beginAnimation()
                    this.login()
                  }}
                  textContentType='password'>
                </LoginInput>
                <TouchableOpacity onPress={() => this.navigate('DeadEnd')}>
                  <View style={styles.forgotPasssCont}>
                    <Text style={style=styles.forgotPasssButton}>Forgot Password?</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.loginButton}>
                 
                  <LoginButton 
                    ref={(_ref) => this.loginButton = _ref} 
                    onPress={this.login}>
                  </LoginButton>
                </View>
              </View>
              <Toast ref="toast" positionValue={150} style={{backgroundColor:'#cc0000'}}/>
          </KeyboardAwareScrollView>
          <View style={styles.signUpBlock}>
            <Text style={styles.signUpText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={() => this.navigate('DeadEnd')}>
              <View>
                <Text style={style=styles.signUpButtonText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
          <Animated.View style={{...styles.animatedSheet, 
                                        opacity: this.state.contAnimatedHeight,
                                        height: '0%',
                                        width: '0%'}}>

                  </Animated.View>
        </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({

  /*** SETUP ***/

  animatedSheet:{
    width: 50,
    position: 'absolute',
    zIndex: 20,
    backgroundColor: 'white',


  },

  sheet: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0,0,0,0.8)',
    //opacity: 0.8,
  },
  imageStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'stretch',
  },
  container: {
    width: Dimensions.get('window').width,
    height: '100%',
    flex: 1,
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    flex: 1,
  },

  /*** LOGO ***/
logo: {
 height: 250 , width: 350,     
//  borderColor: 'green',
//   borderWidth: 2
  },
  logoContainer: {
    flex: 5,  

    marginBottom: 120,
    //margin: '10%',
    //marginBottom: 175,
    
    justifyContent: 'flex-end',
    alignItems: 'center',
    // borderColor: 'white',
    // borderWidth: 2
  },


  /*** INPUT + LOGIN ***/

  inputBlock: {
    justifyContent: 'center',
    alignItems: "center",
    flex: 4,

    // borderColor: 'white',
    // borderWidth: 2
  },
  inputContainer: {
    borderWidth: 3,
    borderColor: '#C9C9C9',
    margin: 10,
    borderRadius: 60,
    display: 'none'
  },
  inputOuter: {
    backgroundColor: '#f1f1f1',
    borderRadius: 60,
    //paddingLeft: 15,
    height: 40,
    width: 250,
    borderBottomWidth: 0
  },
  input: {
    margin: 10,
    color: 'white'
  },
  loginButton: {
    marginTop: 50,
    marginBottom: 250,
    alignItems: 'center'
  },

  /*** SIGN-UP ***/

  signUpBlock: {
    padding: 10,
    justifyContent: 'center',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15
  },
  signUpText: {
    fontFamily: 'OpenSans-Regular',
    color: '#F5FCFF',
    opacity: 0.8,
    fontSize: 16,
  },
  signUpButtonText: {
    fontFamily: 'OpenSans-Regular',
    color: '#F5FCFF',
    fontSize: 16,
    marginLeft: 10,
  },

  forgotPasssCont:{
    width: 250,
    paddingLeft: 3
  },
  forgotPasssButton:{
    fontFamily: 'OpenSans-Regular',
    color: '#F5FCFF',
    opacity: 0.8,
    fontSize: 14,
    marginTop: -5
  }
});

