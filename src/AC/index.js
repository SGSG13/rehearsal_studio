import {GET_USER} from '../constants'
import {GET_SLOTS} from '../constants'
import {SET_DATE} from '../constants'
import {SET_HALL} from '../constants'
import {SET_SLOTS} from '../constants'
import {DEL_SLOT} from '../constants'
import {SET_INFO} from '../constants'
import {SET_ORDER} from '../constants'
import {LS, delay, randomId} from '../utils';
import {dateToString} from '../utils/dateToString'

export function getUser() {
    let user = {};

    if(!LS._isExists()){
        const newUser = {
                userID: randomId()
            };
        const users = [];
        const orders = [];
        const slots = {
            small: [],
            big: []
        };

        LS.set('save_user',newUser);
        // LS.set('users', users);
        // LS.set('orders', orders);
        // LS.set('slots', slots);
        user = newUser;
        
    }else{
        console.log('get',LS.get('save_user'));
        if(!LS.get('save_user')) {
            const newUser = {
                userID: randomId()
            };
            LS.set('save_user',newUser);
        }
        user = LS.get('save_user');
    }
    
    return (dispatch) => {
        dispatch({
            type: GET_USER,
            user
        });
    };
}

export function getSlots(hall) {
    const booked = LS.get('slots')[hall];

    return (dispatch) => {
            dispatch({
                type: GET_SLOTS,
                booked
            });
    };
}

export function deleteSlot(delSlot) {
    return {
        type: DEL_SLOT,
        delSlot
    }
}


export function setDate(date) {
    const slots = [];
    return {
        type: SET_DATE,
        date,
        slots
    }
}

export function setHall(hall) {
    return {
        type: SET_HALL,
        hall
    }
}

export function setSlots(slots) {
    return {
        type: SET_SLOTS,
        slots
    }
}


export function setInfo(band, phone) {
    return {
        type: SET_INFO,
        band, phone
    }
}

export function reservation() {
    
    return (dispatch, getState) => {

        const orderId = getState().order.id;
        dispatch({
            type: SET_ORDER,
            orderId
        });

        const {user, order} = getState();
        const hall = order.hall;
        const slots = {
            hall: hall,
            slot: {
                date: dateToString(order.date),
                slots: order.slots
            }
        };
        LS.set('users',user);
        LS.set('orders',order);
        LS.set('slots',slots);

    };
}




