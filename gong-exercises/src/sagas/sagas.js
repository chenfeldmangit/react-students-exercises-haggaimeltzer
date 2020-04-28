

import { all } from 'redux-saga/effects'
import {watchAddTweet, watchSetTweets, watchTweetLiked} from './tweetsSagas'
import {watchAddNotifications, watchReloadNotifications} from './notificationsSagas'

export default function* rootSaga() {
    yield all ([
        watchAddTweet(),
        watchSetTweets(),
        watchTweetLiked(),
        watchAddNotifications(),
        watchReloadNotifications()
    ]);
}