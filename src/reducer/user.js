import {
    GET_USER,
    SET_INFO,
    SET_ORDER
} from '../constants'

const initState = {
    userID: '',
    band: '',
    phone: '',
    orders: []
};

export default (state = initState, action) => {
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