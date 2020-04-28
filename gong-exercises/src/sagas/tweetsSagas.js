
import { takeEvery, takeLatest, put } from 'redux-saga/effects'
import TweetActions from '../actions/tweet_actions' 
import NotificationsActions from '../actions/notifications_actions' 

function* onAddTweet(tweet) {
   
 }

function* onSetTweets(tweets) {
   
 }

function* onTweetLiked(tweet) {
    //add notification
    const notif = `tweet ${tweet.tweetData.id} was liked` ;
    yield put(NotificationsActions.addNotification(notif, notif, null) );
   
}
 

export function* watchAddTweet() {
    yield takeEvery("ADD_TWEET", onAddTweet);
}

export function* watchSetTweets() {
    yield takeLatest("SET_TWEETS", onSetTweets);
}

export function* watchTweetLiked() {
    yield takeEvery(TweetActions.TWEET_LIKED, onTweetLiked);
}