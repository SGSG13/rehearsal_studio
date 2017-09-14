import {GET_USER} from '../constants'
import {SET_INFO} from '../constants'

const initialState = {
    userID: '',
    band: '',
    phone: '',
    order: []
};

export default (state = initialState, action) => {
    const {type, user, band, phone} = action;
    switch (type) {
        case GET_USER:
            return{
                ...state, ...user
            };
        case SET_INFO:
            return{
                ...state, band, phone
            };

        default:
            return state;
    }
}