import {GET_SLOTS} from '../constants'

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