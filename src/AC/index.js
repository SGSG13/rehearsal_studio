import {GET_USER} from '../constants'
import {GET_SLOTS} from '../constants'
import {SET_DATE} from '../constants'
import {SET_HALL} from '../constants'
import {SET_SLOTS} from '../constants'
import {DEL_SLOT} from '../constants'
import { LS, delay, randomId } from '../utils';

export function getUser() {
    let user = {};

    if(!LS._isExists()){
        const newUser = {
                userID: randomId()
            };
        
        LS.set('save_user',newUser);
        user = newUser;
        
    }else{
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



