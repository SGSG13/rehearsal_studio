import {SET_DATE} from '../constants'
// import {dateToString} from '../utils/dateToString';

const initStor = {
    controlledDate: new Date()
};

export default (state = initStor, action) => {
    const {type, controlledDate} = action;
    switch (type) {
        case SET_DATE:
            return{
                ...state, controlledDate
            };

        default:
            return state;
    }
}