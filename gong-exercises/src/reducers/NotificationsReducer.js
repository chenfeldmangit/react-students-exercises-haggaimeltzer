import NotificationsActions from '../actions/notifications_actions'

let NotificationsReducer = (state=[], action)=>{
    switch(action.type){
        case NotificationsActions.NOTIFICATION_ADDED:
            return [...state, action.notificationData] ;
        case NotificationsActions.SET_NOTIFICATIONS:
            return action.notifications ;
        default:
            return state;
    };
};

export default NotificationsReducer;