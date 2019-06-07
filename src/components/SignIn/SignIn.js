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
  Picker
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

type Props = {};
export default class SignIn extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {

    }
    //this.login()
  }

   login = async () => {

    let body = {
      email: 'personal@mail.com', //this.emailInput.state.enteredText,
      password: 'test'//this.passwordInput.state.enteredText
    }

    let options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      },   
    }

    let userRoute = "http://localhost:8080/user/sign-in"

   fetch(userRoute, options)
      .then((response) => response.json())
      .then((responsesJson) => {
        //Stopring web token
        if (responsesJson.token){
          store.setAuthToken(responsesJson.token);
          store.updateUserData(responsesJson.userData);
          goHome() 
          //goToService()
        }
        else {
          let errorCode = responsesJson.errorCode;
          this.loginButton.reset()
          if(errorCode === 'blank-email' ||
             errorCode === 'auth/user-not-found' ||
             errorCode === 'auth/invalid-email') {
              this.emailInput.error();
             }
          if(errorCode === 'blank-password' ||
             errorCode === 'auth/wrong-password') {
              this.passwordInput.error();
            }
          this.refs.toast.show(responsesJson.message, 1500);
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
                <Image style={styles.logo} source={require('../../../assets/images/logos/Jump-Logo-white-05.png')}></Image>
              </View>
              <View style={styles.inputBlock}>
                <LoginInput 
                  ref={(_ref) => this.emailInput = _ref} 
                  placeholder="Email" 
                  icon='ios-mail' 
                  style={styles.input}
                  textContentType='username'>
                </LoginInput>
                <LoginInput 
                  ref={(_ref) => this.passwordInput = _ref} 
                  placeholder="Password" 
                  icon='ios-lock' 
                  secure={true} 
                  style={styles.input}
                  textContentType='password'>
                </LoginInput>
                <TouchableOpacity onPress={() => this.navigate('ForgotPassword')}>
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
            <TouchableOpacity onPress={() => this.navigate('SignUpInter')}>
              <View>
                <Text style={style=styles.signUpButtonText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
        </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({

  /*** SETUP ***/
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

  logoContainer: {
    flex: 5,  
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 40,

    marginBottom: 175
  },
  logo: {
    width: 300,
    height: 150,

  },

  /*** INPUT + LOGIN ***/

  inputBlock: {
    justifyContent: 'center',
    alignItems: "center",
    flex: 4,
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
    margin: 10
  },
  loginButton: {
    marginTop: 40,
    marginBottom: 250
  },

  /*** SIGN-UP ***/

  signUpBlock: {
    padding: 10,
    justifyContent: 'center',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingLeft: 17.5
  },
  forgotPasssButton:{
    fontFamily: 'OpenSans-Regular',
    color: '#F5FCFF',
    opacity: 0.8,
    fontSize: 14,
    marginTop: -5
  }
});

