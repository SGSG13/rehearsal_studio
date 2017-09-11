import {GET_USER} from '../constants'
import {GET_SLOTS} from '../constants'
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
