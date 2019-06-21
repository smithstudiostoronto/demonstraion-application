import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    Image
} from 'react-native'

/***  NAVIGATION  ***/
import { Navigation } from 'react-native-navigation';
import { Button } from 'react-native-elements';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { store } from '../../state/store';

import * as Progress from 'react-native-progress';

const navMenuList = [
    { key: 'LOGIN', icon: 'ios-home', nav: 'MainMap', i: 1 },
    { key: 'CREDIT CARD', icon: 'ios-search', nav: 'Explore', i: 2 },
    { key: 'MAP', icon: 'ios-heart', nav: 'Saved', i: 3 },
    { key: 'SWIPER', icon: 'ios-chatboxes', nav: 'Chat', i: 4 },
]

const accentColor = '#1FB85A';
type Props = {};
export default class SideMenuLeft extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'SignIn',
            progress: 0,
        }
        Navigation.events().bindComponent(this);
    }

    navigate = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }
   
    componentDidAppear() {
        console.log('fired')
        setTimeout(()=>  this.setState({progress: 0.6}), 2500)
   
    }
    componentDidDisappear() {
      
        this.setState({progress: 0});
    }
    /*
    getConstants = async () => {
        const constants = await Navigation.constants();
        const statusBarHeight = constants.statusBarHeight;
        return statusBarHeight;
    }
    */

    navHandler = async (destinationName) => {

        await this.setState({selected: destinationName});
    }

    render() {
        return (
            <View style={styles.contrainer}>
                <ImageBackground style={styles.topContainer} source={require('../../../assets/backgrounds/sideMenu.jpg')}>
                    <View style={styles.topInnerContainer}>
                        <Progress.Circle borderWidth={0}
                            thickness={8}
                            
                            progress={this.state.progress}
                            size={115}
                            color={accentColor} />
                        <Image style={styles.logo}
                            source={require('../../../assets/images/logos/sideMenuLogo.png')}
                            resizeMode="contain" />
                    </View>
                </ImageBackground>
                <View style={styles.bottomContainer}>

                    <TouchableOpacity onPress={()=> this.navHandler('SignIn')} style={styles.listContainer}>
                        <View style={styles.left}>
                            <IonIcon name={'ios-lock'} size={36} color='white' />
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.listText}>LOGIN</Text>

                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            {this.state.selected == 'SignIn' &&
                                <IonIcon name={'ios-radio-button-on'} size={18} color={accentColor} />
                            }

                        </View>


                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.navHandler('CreditCard')}  style={{...styles.listContainer, marginTop: -1}}>
                        <View style={styles.left}>
                            <IonIcon name={'ios-card'} size={32} color='white' />
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.listText}>CREDIT CARD</Text>

                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            {this.state.selected == 'CreditCard' &&
                                <IonIcon name={'ios-radio-button-on'} size={18} color={accentColor} />
                            }

                        </View>


                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.navHandler('Map')}  style={{...styles.listContainer, marginTop: -1}}>
                        <View style={styles.left}>
                            <IonIcon name={'ios-map'} size={36} color='white' />
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.listText}>MAP</Text>

                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            {this.state.selected == 'Map' &&
                                <IonIcon name={'ios-radio-button-on'} size={18} color={accentColor} />
                            }

                        </View>


                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.navHandler('Swiper')}  style={styles.listContainer}>
                        <View style={styles.left}>
                            <IonIcon name={'ios-apps'} size={36} color='white' />
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.listText}>SWIPER</Text>

                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            {this.state.selected == 'Swiper' &&
                                <IonIcon name={'ios-radio-button-on'} size={18} color={accentColor} />
                            }

                        </View>


                    </TouchableOpacity>



                    <View style={styles.buttonCont}>
                    <Text style={styles.listText}>START A PROJECT</Text>
                    </View>
                </View>
            </View>
        );
    }
}
/*               






                    <Button  title='START A PROJECT' 
                             buttonStyle={styles.button} 
                             containerStyle={styles.buttonCont} 
                             titleStyle={styles.buttonTitle}
                             iconContainerStyle={styles.buttonIcon}
                             
                             />

<Image source={require('../../../assets/images/logos/jump_logo_black.png')} 
                                style={{width: 230, height: 140}}/> */

const styles = StyleSheet.create({
    contrainer: {
        width: 300,
        flex: 1

    },

    topContainer: {
        flex: 1,
        //backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topInnerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    logoCont: {

    },
    logo: {
        height: 130,
        width: 130,
        position: 'absolute',

    },
    bottomContainer: {
        //backgroundColor: 'yellow',
        flex: 2,
        // borderWidth: 2,
        // borderColor: 'yellow',

    },

    /**** LIST ****/
    listContainer: {
        backgroundColor: '#212121',
        borderColor: '#434343',
        borderTopWidth: 1,
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'

    },
    listText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'OpenSans-Regular',
    },
    left: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 4
        //         borderWidth: 2,
        // borderColor: 'yellow',
    },
    right: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start',

        //         borderWidth: 2,
        // borderColor: 'yellow',
    },
    buttonCont: {
        flex: 1,
        backgroundColor: accentColor,
        justifyContent: 'center',
        alignItems: 'center',
    }

});