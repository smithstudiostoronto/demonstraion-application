import * as remx from 'remx';
import { EventRegister } from 'react-native-event-listeners'


const initialState = {

};

const state = remx.state(initialState);

const getters = remx.getters({
 
        getScreenConstants() {
            return state.screenConstants;
        },



   });

const setters = remx.setters({

    setLocation(location) {
        console.log(location)
        state.location = location
        EventRegister.emit('location', location)
    },

    setScreenConstants(screenConsts) {
        state.screenConstants = screenConsts;
    },

});
export const store = {
    ...getters,
    ...setters
};