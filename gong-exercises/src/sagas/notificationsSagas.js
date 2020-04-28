
import { takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import NotificationActions from '../actions/notifications_actions'
import NotificationsAPI from '../db/NotificationsAPI'

export function* onAddNotification(notification) {
    yield call(NotificationsAPI.addNotification, notification.notificationData.title, notification.notificationData.text, notification.notificationData.avatar_imgs);
    yield put(NotificationActions.notificationAdded(notification));    
 }
 
export function* watchAddNotifications() {
    yield takeEvery(NotificationActions.ADD_NOTIFICATION, onAddNotification);
}
 

export function* onReloadNotifications() {
    const notifications = yield call(NotificationsAPI.getNotifications);
    yield put(NotificationActions.setNotifications(notifications));    
}

export function* watchReloadNotifications() {
    yield takeLatest(NotificationActions.RELOAD_NOTIFICATIONS, onReloadNotifications);
}