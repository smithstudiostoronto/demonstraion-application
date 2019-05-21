import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native'

/***  NAVIGATION  ***/
import {Navigation} from 'react-native-navigation'; 
import {Button} from 'react-native-elements';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const personalMenu = [
    {key: 'HOME', icon: 'ios-home', nav: 'MainMap'},
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

 

    listItemRender(item) {
        return( 
            <TouchableOpacity onPress={() => console.log('sdf')}>
                <View style={styles.itemContainer}>
                    <View style={styles.iconContainer}> 
                        <IonIcon name={item.icon} size={26} color='white'/>
                    </View>
                    <Text style={styles.item}>{item.key}</Text>
                </View>
            </TouchableOpacity>
            );
    }
    
    render() {
        return (
            <View style={styles.container} onLayout={e => { console.log(e.nativeEvent.layout.width); }}>
                <View style={styles.nameContainer} >
                   
                    <Image source={require('../../../assets/images/logos/SmithStudios_Logo_white.png')} resizeMode={'contain'}  style={{flex:1, height: undefined, width: undefined}}/>
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
            </View>
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
       backgroundColor: '#000000',
       //paddingLeft: 10,
        width: 300,
        paddingLeft: 10

    },

    nameContainer: {
        flex: 0.8,
        justifyContent: 'flex-end',
        backgroundColor: '#0D0D0D',
        marginLeft: -10,
        padding: 20
    },
    middleContainer: {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor: '#DFDCE3',
        backgroundColor: '#0D0D0D',
       
    },
    itemContainer: {
        width: '100%',
        padding: 13,   
        flexDirection: 'row',
        alignItems: 'center',
        //borderColor: 'white',
        //borderWidth: 1
        paddingLeft: 20
    },
    item: {
        fontSize: 22,
        fontFamily: 'OpenSans-Regular',
        fontWeight: "100",
        width: '100%',
        color: '#ffffff',
        //color: '#000000',
        marginLeft: 15
    },
    iconContainer: {
        paddingTop: 4
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
 
        backgroundColor: '#0D0D0D',
        marginLeft: -10,
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
    }
  })