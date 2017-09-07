import {GET_USER} from '../constants'
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
        delay(1000).then(() => {
            dispatch({
                type: GET_USER,
                user
            });
        });
    };
}
