import React, {Component} from 'react'
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
import {Navigation} from 'react-native-navigation'; 
import {Button} from 'react-native-elements';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const personalMenu = [
    {key: 'HOME', icon: 'ios-home', nav: 'MainMap', first: true},
    {key: 'EXPLORE', icon: 'ios-search', nav: 'Explore'},
    {key: 'SAVED', icon: 'ios-heart', nav: 'Saved'},
    {key: 'CHAT', icon: 'ios-chatboxes', nav: 'Chat'},
    {key: 'SERVICE', icon: 'ios-cash', nav: 'HomeService'},
]




type Props = {};
export default class SideMenuLeft extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            selectedPage: 0
        }
        Navigation.events().bindComponent(this);
    }

    navigate = (screenName) => {
        Navigation.push(this.props.componentId, {
          component:{
            name: screenName
          }
        })
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

      /*

<View style={{paddingLeft: 10}}>
            <View style={styles.line}></View>
            <View style={{ flexDirection:'row', alignItems: 'center', }}>

             <View style={styles.leftCont}>
          
                <IonIcon name="ios-radio-button-off" color="white" size={18}/>
            </View>
            <TouchableOpacity onPress={() => console.log('sdf')}>
                <View style={styles.itemContainer}>
              
                    <Text style={styles.item}>{item.key}</Text>
                </View>
            </TouchableOpacity>
            </View>
            </View>


      */
    listItemRender(item) {
        return( 
            <View style={{paddingLeft: 10,  justifyContent: 'center', alignItems: 'center'}}>
            { item.first !== true && <View style={styles.line}></View> }
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

             <View style={styles.leftCont}>
          
              
            </View>
            <TouchableOpacity onPress={() => console.log('sdf')}>
                <View style={styles.itemContainer}>
              
                    <Text style={styles.item}>{item.key}</Text>
                </View>
            </TouchableOpacity>
            </View>
            </View>
            );
    }
    /*ios-radio-button-off

ios-radio-button-on*/
    render() {
        return (
            <ImageBackground   blurRadius={5} source={require('../../../assets/backgrounds/try.jpg')} style={styles.container} >
                <View style={styles.nameContainer} >
                    <View style={{ width: '100%' ,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>

                   <View style={{flex:0.7}}>
                    <Image source={require('../../../assets/images/logos/SmithStudios_Logo_white.png')} resizeMode={'contain'}  style={{height: '60%', width: undefined, }}/>
                    </View>
                    <TouchableOpacity style={{paddingTop: 5}}>
                        <EvilIcons name={'close'} size={28} color='white'/>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.middleContainer}>
                    <View>
                        <FlatList data={personalMenu} 
                                    scrollEnabled={false} 
                                    renderItem={({item}) => this.listItemRender(item)}/>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <Button  title='START A PROJECT' 
                             buttonStyle={styles.button} 
                             containerStyle={styles.buttonCont} 
                             titleStyle={styles.buttonTitle}
                             iconContainerStyle={styles.buttonIcon}
                             />
                </View>
            </ImageBackground>
        )
    }
}

// cellphone-settings-variant
/*                        <Image source={require('../../../assets/images/logos/jump_logo_black.png')} 
                                style={{width: 230, height: 140}}/> */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: 22,
       //justifyContent: 'flex-start',
       // alignItems: 'center',
       // backgroundColor: '#000000',
    
       //paddingLeft: 10,
        width: 300,
        //paddingLeft: 10

    },

    nameContainer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        //backgroundColor: '#0D0D0D',
        backgroundColor: 'rgba(0,0,0,0.8)',
        //marginLeft: -10,
        paddingHorizontal: 10,
        paddingBottom: 5,
        //borderColor: 'green', borderWidth:1
        borderColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 2
    },
    middleContainer: {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        // borderTopWidth:1,
        // borderBottomWidth:1,
        borderColor: '#DFDCE3',
   
       // backgroundColor: '#0D0D0D',
      
       //backgroundColor: 'white',
       backgroundColor: 'rgba(0,0,0,0.6)',
    },
    itemContainer: {
        width: '100%',
        padding: 8,   
        paddingTop: 0,
        paddingBottom: 0,
        alignItems: 'center',


    },
    item: {
        fontSize: 36,
        //fontFamily: 'OpenSans-Regular',
          fontFamily: 'Roboto-Light',
        //fontWeight: "bold",
        width: '100%',
        color: '#ffffff',
        //color: '#000000',
   
 
    },
    line:{
        height: 35,
        width: 0,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'rgba(255,255,255,0.6)',
        //borderColor: 'black'
        borderRadius: 100,
        marginTop: 5,
        marginBottom: 5
    },
    iconContainer: {
        paddingTop: 4
    },
    bottomContainer: {
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        //backgroundColor: '#0D0D0D',
        //marginLeft: -10,
        width: 300
    },

    buttonCont: {
        backgroundColor: '#28a745',
        height: 40,
        borderRadius: 20,
        width: '80%',
    },
    button: {
        backgroundColor: '#28a745',
        height: 45,
        borderRadius: 22.5,
        width: '100%',
    },
    buttonTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,

        //fontWeight: 'bold'
    },
    buttonIcon: {
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 100
    },


  })