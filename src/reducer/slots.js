import {GET_SLOTS} from '../constants'
import {Record} from 'immutable'

const SlotsRecord = Record({
    booked: []
});

const defaultState = new SlotsRecord();

export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        
        case GET_SLOTS:
            return state.set('booked', payload.booked);
        
        default:
            return state;
    }
}