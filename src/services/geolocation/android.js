import {store} from '../../state/store';
import { Navigation } from "react-native-navigation";
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid} from 'react-native';

export const watchPositionAndroid = async (callback) => {

  //requesting location permisions
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Request',
        message:
          'Your location is required to find clinics near you!',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //watch location 
      return Geolocation.getCurrentPosition(
        (location) => {
          let temp_location = {latitude: location.coords.latitude , 
            longitude: location.coords.longitude}
            store.setLocation(temp_location)
            if (callback) callback() 
        },
        (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.log('Location Error');
    }
  } catch (err) {
    console.warn(err);
  }
}

export const clearWatchAndroid = async (watchId) => {
  Geolocation.clearWatch(watchId)

}