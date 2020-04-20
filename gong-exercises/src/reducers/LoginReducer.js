import LoginActions from '../actions/login_actions'

let loginReducer = (state=[], action)=>{
    switch(action.type){
        case LoginActions.LOGIN:
            return {...state, loggedInUser: action.loginData.username} ;
        case LoginActions.LOGOUT:
            return {...state, loggedInUser: null} ;
        default:
            return state;
    };
};

export default loginReducer;