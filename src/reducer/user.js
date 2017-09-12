import {GET_USER} from '../constants'

const initialState = {
    userID: '',
    band: '',
    phone: '',
    order: []
};

export default (state = initialState, action) => {
    const {type, user} = action;
    switch (type) {
        case GET_USER:
            return{
                ...state, ...user
            };

        default:
            return state;
    }
}