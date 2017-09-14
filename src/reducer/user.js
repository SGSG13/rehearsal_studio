import {GET_USER} from '../constants'
import {SET_INFO} from '../constants'
import {SET_ORDER} from '../constants'

const initialState = {
    userID: '',
    band: '',
    phone: '',
    orders: []
};

export default (state = initialState, action) => {
    const {type, user, band, phone, orderId} = action;
    switch (type) {
        case GET_USER:
            return{
                ...state, ...user
            };
        case SET_INFO:
            return{
                ...state, band, phone
            };

        case SET_ORDER:
            return {...state, orders: state.orders.concat(orderId)};

        default:
            return state;
    }
}