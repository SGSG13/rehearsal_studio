import {
    GET_USER,
    GET_SLOTS,
    SET_DATE,
    SET_HALL,
    SET_SLOTS,
    DEL_SLOT,
    SET_INFO,
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
        user = LS.get('save_user');

        let users = LS.get('users');
        if(users.length > 0){
          const filterUser = users.filter(localUser => localUser.userID === user.userID ? true : false);
            if(filterUser.length > 0) user = {...filterUser[0], orders: []};
        }
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

        dispatch({
            type: DEFAULT_ORDER,
            dfltOrder: {
                id: randomId(),
                userID: '',
                date: new Date(),
                hall: 'big',
                slots: []
            }
        });
    };
}




