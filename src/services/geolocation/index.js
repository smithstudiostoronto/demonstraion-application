import {watchPositionAndroid, clearWatchAndroid}from "./android";
import {watchPositionIos, clearWatchIos} from "./ios";
import {Platform} from 'react-native';

export const geolocationService = {
  androidWatch: watchPositionAndroid,
  androidClearWatch: clearWatchAndroid,

  iosWatch: watchPositionIos,
  iosClearWatch: clearWatchIos,

  watchLocation: Platform.OS === 'ios' ?  watchPositionIos :  watchPositionAndroid
}
