import * as remx from 'remx';
import { EventRegister } from 'react-native-event-listeners'


const initialState = {

};

const state = remx.state(initialState);

const getters = remx.getters({
 
        getLocation() {
            return state.location;
        },



   });

const setters = remx.setters({

    setLocation(location) {
        console.log(location)
        state.location = location
        EventRegister.emit('location', location)
    },

});
export const store = {
    ...getters,
    ...setters
};