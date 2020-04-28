import {createStore, combineReducers, applyMiddleware} from 'redux'
import loginReducer from '../reducers/LoginReducer'
import tweetsReducer from '../reducers/TweetsReducer';
import NotificationsReducer from '../reducers/NotificationsReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';
import {composeWithDevTools} from 'redux-devtools-extension'

const combinedReducers = combineReducers({
    login: loginReducer,
    tweets: tweetsReducer,
    notifications: NotificationsReducer
});

const sagaMiddleware = createSagaMiddleware();

//const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store; 