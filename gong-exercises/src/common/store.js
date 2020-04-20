import {createStore, combineReducers} from 'redux'
import loginReducer from '../reducers/LoginReducer'
import tweetsReducer from '../reducers/TweetsReducer';

const combinedReducers = combineReducers({
    login: loginReducer,
    tweets: tweetsReducer,
});


const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;