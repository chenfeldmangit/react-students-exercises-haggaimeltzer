

import { all } from 'redux-saga/effects'
import {watchAddTweet, watchSetTweets, watchLike, watchTweetLiked} from './tweetsSagas'
import {watchAddNotifications, watchReloadNotifications} from './notificationsSagas'

export default function* rootSaga() {
    yield all ([
        watchAddTweet(),
        watchSetTweets(),
        watchLike(),
        watchTweetLiked(),
        watchAddNotifications(),
        watchReloadNotifications()
    ]);
}