
export default class NotificationActions{
    static ADD_NOTIFICATION = 'ADD_NOTIFICATION';
    static NOTIFICATION_ADDED = 'NOTIFICATiON_ADDED';
    static RELOAD_NOTIFICATIONS = 'RELOAD_NOTIFICATIONS';
    static SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
    static addNotification(title, text, avatar_imgs) {
        return {
            type: NotificationActions.ADD_NOTIFICATION,
            notificationData: {title:title, text:text, avatar_imgs:avatar_imgs}
        }
    };

    static notificationAdded(notification) {
        return {
            type: NotificationActions.NOTIFICATION_ADDED,
            notificationData: notification
        }
    };

    static reloadNotifications(){
        return {
            type: NotificationActions.RELOAD_NOTIFICATIONS
        }
    }

    static setNotifications(notifications){
        return {
            type: NotificationActions.SET_NOTIFICATIONS,
            notifications: notifications
        }
    }
}
