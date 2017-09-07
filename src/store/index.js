import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk);
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), enhancer);

export default store
