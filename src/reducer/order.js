import {
    SET_DATE,
    GET_USER,
    SET_HALL,
    SET_SLOTS,
    DEL_SLOT,
    DEFAULT_ORDER
} from '../constants'
import {randomId} from '../utils'

const initState = {
    id: randomId(),
    userID: '',
    date: new Date(),
    hall: 'big',
    slots: []
};

export default (state = initState, action) => {
    const {type, date, hall, slots, user, delSlot, dfltOrder} = action;
  
    switch (type) {
        case SET_DATE:
            return{
                ...state, date, slots
            };
        
        case SET_HALL:
            return{
                ...state, hall
            };
        
        case SET_SLOTS:
            return{
                ...state, slots
            };
        
        case GET_USER:
            return{
                ...state, userID: user.userID
            };
        
        case DEL_SLOT:
            return {...state, slots: state.slots.filter(slot => slot !== delSlot)};
        
        case DEFAULT_ORDER:
            return{
                ...state, ...dfltOrder
            };
        
        default:
            return state;
    }
}