import {
    GET_USER,
    SET_BAND,
    SET_PHONE,
    SET_ORDER
} from '../constants'
import {Record} from 'immutable'

const UsersRecord = Record({
    userID: '',
    band: '',
    phone: '',
    orders: []
});

const defaultState = new UsersRecord();

export default (state = defaultState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case GET_USER:
            const {user} = payload;
            return state
                .set('userID', user.userID)
                .set('band', user.band ? user.band : '')
                .set('phone', user.phone ? user.phone : '');

        case SET_BAND:
            return state
                .set('band', payload.band);
        
        case SET_PHONE:
            return state
                .set('phone', payload.phone);
        
        case SET_ORDER:
            const {orderId} = payload;
            return state.update('orders', orders => orders.concat(orderId));

        default:
            return state;
    }
}