import * as remx from 'remx';
import { EventRegister } from 'react-native-event-listeners'

const initialState = {
    appIsLoading: true
};

const state = remx.state(initialState);

const getters = remx.getters({
 
        getLocation() {
            return state.location;
        },

        getAppIsLoading(){
            return state.appIsLoading;
        }

   });

const setters = remx.setters({

    setLocation(location) {
        state.location = location
        EventRegister.emit('location', location)
    },

    setAppIsLoading(newLoadingStatus) {
        state.appIsLoading = newLoadingStatus
        EventRegister.emit('appLoadingStatusChange', newLoadingStatus)
    },
});
export const store = {
    ...getters,
    ...setters
};