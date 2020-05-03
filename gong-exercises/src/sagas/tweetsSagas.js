
import { takeEvery, takeLatest, put } from 'redux-saga/effects'
import TweetActions from '../actions/tweet_actions' 
import NotificationsActions from '../actions/notifications_actions' 
import TweetsApi from '../db/TweetsAPI'

function* onAddTweet(tweet) {
   
 }

function* onSetTweets(tweets) {
   
 }

function* onTweetLiked(tweetLikeData) {
    if(tweetLikeData.liked){
        //add notification
        const notif = `tweet ${tweetLikeData.tweetData.id} was liked` ;
        yield put(NotificationsActions.addNotification(notif, notif, null) );
    }   
}

function* onlikeTweet(likeData){
    let {tweetData,like} = likeData;
    if(like){
        TweetsApi.addLike(tweetData.id);
        tweetData.liked = true;
        tweetData.numLikes++;
    }
    else{
        TweetsApi.removeLike(tweetData.id);
        tweetData.liked = false;
        tweetData.numLikes--;
    }
    yield put(TweetActions.tweetLikedAction(tweetData, like));    
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

export function* watchLike() {
    yield takeEvery(TweetActions.LIKE_TWEET, onlikeTweet);
}