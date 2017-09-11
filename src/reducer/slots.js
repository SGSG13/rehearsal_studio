import {GET_SLOTS} from '../constants'
import {arrToMap} from '../utils';


export default (state = {}, action) => {
    const {type, booked} = action;
    switch (type) {
        case GET_SLOTS:
            return{
                ...state, booked
            };

        default:
            return state;
    }
}