import {store} from '../../state/store';
import { Navigation } from "react-native-navigation";

export const watchPositionIos = async (callback) => {
  
  await navigator.geolocation.requestAuthorization();

  return navigator.geolocation.watchPosition((location) => {

    let temp_location = {latitude: location.coords.latitude , 
                        longitude: location.coords.longitude}

    store.setLocation(temp_location)
    if (callback) callback() 
  }, (error) => {
      console.log(error)
  }, {enableHighAccuracy: true});
}

export const clearWatchIos = async (watchId) => {
  navigator.geolocation.clearWatch(watchId);
}