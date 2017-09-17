import {
    GET_USER,
    GET_SLOTS,
    SET_DATE,
    SET_HALL,
    SET_SLOTS,
    DEL_SLOT,
    SET_BAND,
    SET_PHONE,
    SET_ORDER,
    DEFAULT_ORDER
} from '../constants'
import {LS,randomId} from '../utils'
import {dateToString} from '../utils/dateToString'

export function getUser() {
    let user = {};

    if(!LS._isExists()){
        const newUser = {
                userID: randomId()
            };
        
        LS.set('save_user',newUser);
        user = newUser;
    }else{
        const saveUser = LS.get('save_user');
        let users = LS.get('users');
        
        if(users.length > 0){
          const filterUser = users.filter(localUser => localUser.userID === saveUser.userID ? true : false);
            if(filterUser.length > 0) user = {...filterUser[0], orders: []};
        }
    }
    
    return (dispatch) => {
        dispatch({
            type: GET_USER,
            payload: { user }
        });
    };
}

export function getSlots(hall) {
    const booked = LS.get('slots')[hall];
    return (dispatch) => {
            dispatch({
                type: GET_SLOTS,
                payload: { booked }
            });
    };
}

export function deleteSlot(delSlot) {
    return {
        type: DEL_SLOT,
        payload: { delSlot }
    }
}


export function setDate(date) {
    return {
        type: SET_DATE,
        payload: { date }
    }
}

export function setHall(hall) {
    return {
        type: SET_HALL,
        payload: { hall }
    }
}

export function setSlots(slots) {
    return {
        type: SET_SLOTS,
        payload: { slots }
    }
}


export function setBand(band) {
    return {
        type: SET_BAND,
        payload: { band }
    }
}
export function setPhone(phone) {
    return {
        type: SET_PHONE,
        payload: { phone }
    }
}

export function reserv() {
    return (dispatch, getState) => {
        const orderId = getState().order.id;
        dispatch({
            type: SET_ORDER,
            payload: { orderId }
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
        const dfltOrder = {
            id: randomId(),
            userID: '',
            date: new Date(),
            hall: 'metal',
            slots: []
        };
        
        LS.set('users',user);
        LS.set('orders',order);
        LS.set('slots',slots);

        dispatch({
            type: DEFAULT_ORDER,
            payload : {dfltOrder }
        });
    };
}




