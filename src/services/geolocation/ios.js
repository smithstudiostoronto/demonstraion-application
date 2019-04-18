import {store} from '../../state/store';


export const watchPositionIos = async () => {
  
  await navigator.geolocation.requestAuthorization();

  return navigator.geolocation.watchPosition((location) => {

    let temp_location = {latitude: location.coords.latitude , 
                        longitude: location.coords.longitude}

    store.setLocation(temp_location)
    store.setAppIsLoading(false)
  }, (error) => {
      console.log(error)
  }, {enableHighAccuracy: true});
}

export const clearWatchIos = async (watchId) => {
  navigator.geolocation.clearWatch(watchId);
  store.setAppIsLoading(true);
}