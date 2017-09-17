import {
    GET_USER,
    SET_INFO,
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
                .set('band', user.band)
                .set('phone', user.phone);

        case SET_INFO:
            const {band, phone} = payload;
            return state
                .set('band', band)
                .set('phone', phone);    

        case SET_ORDER:
            const {orderId} = payload;
            return state.update('orders', orders => orders.concat(orderId));

        default:
            return state;
    }
}