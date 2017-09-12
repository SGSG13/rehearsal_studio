import {combineReducers} from 'redux'
import user from './user'
import slots from './slots'
import order from './order'


export default combineReducers({
   user, slots, order
});