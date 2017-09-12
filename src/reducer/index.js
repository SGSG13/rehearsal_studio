import {combineReducers} from 'redux'
import user from './user'
import slots from './slots'
import date from './date'


export default combineReducers({
   user, slots, date
});