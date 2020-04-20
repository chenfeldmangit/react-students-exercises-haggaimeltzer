import {createStore, combineReducers} from 'redux'
import loginReducer from '../reducers/LoginReducer'

const combinedReducers = combineReducers({
    login: loginReducer
});


const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;