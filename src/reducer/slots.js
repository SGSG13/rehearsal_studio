import {GET_SLOTS} from '../constants'
import {arrToMap} from '../utils';


export default (state = {}, action) => {
    const {type, slots} = action;
    switch (type) {
        case GET_SLOTS:
            return{
                ...state, ...slots
            };

        default:
            return state;
    }
}