import {
    SET_DATE,
    GET_USER,
    SET_HALL,
    SET_SLOTS,
    DEL_SLOT,
    DEFAULT_ORDER
} from '../constants'
import {randomId} from '../utils'
import {Record} from 'immutable'

const OrderRecord = Record({
    id: randomId(),
    userID: '',
    date: new Date(),
    hall: 'big',
    slots: []
});

const defaultState = new OrderRecord();

export default (state = defaultState, action) => {
    const {type, payload} = action;
  
    switch (type) {
        case SET_DATE:
            return state
                .set('date', payload.date)
                .set('slots', []);
        
        case SET_HALL:
            return state.set('hall', payload.hall);
        
        case SET_SLOTS:
            return state.set('slots', payload.slots);
        
        case GET_USER:
            const {user} = payload;
            return state.set('userID', user.userID);
        
        case DEL_SLOT:
            return state.update('slots', slots => slots.filter(slot => slot !== payload.delSlot));
        
        case DEFAULT_ORDER:
            const {dfltOrder} = payload;
            return state
                .set('id', dfltOrder.id)
                .set('userID', dfltOrder.userID)
                .set('date', dfltOrder.date)
                .set('hall', dfltOrder.hall)
                .set('slots', dfltOrder.slots);

        default:
            return state;
    }
}