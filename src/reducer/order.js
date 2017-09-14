import {SET_DATE} from '../constants'
import {GET_USER} from '../constants'
import {SET_HALL} from '../constants'
import {SET_SLOTS} from '../constants'
import {DEL_SLOT} from '../constants'
import {DEFAULT_ORDER} from '../constants'
import {randomId} from '../utils'

const initStor = {
    id: randomId(),
    userID: '',
    date: new Date(),
    hall: 'big',
    slots: []
};

export default (state = initStor, action) => {
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