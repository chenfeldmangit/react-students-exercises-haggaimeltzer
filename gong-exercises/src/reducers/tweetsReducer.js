import TweetActions from '../actions/tweet_actions'

function findLocationById(tweets, tweetId){
    for (var i=0; i < tweets.length; i++){
        if (tweets[i].id === tweetId){
            return i;
        }
    }
    return -1;
};

let TweetsReducer = (state=[], action)=>{
    switch(action.type){
        case TweetActions.TWEET_ADDED:
            return [...state, action.tweetData] ;
        case TweetActions.RELOAD_TWEETS:
            return action.tweetsData ;
        case TweetActions.TWEET_LIKED:
            let idx = findLocationById(state, action.tweetData.id);
            let newstate = [...state];
            newstate[idx] = { ...newstate[idx] , ...action.tweetData};
            return newstate ;
        default:
            return state;
    };
};

export default TweetsReducer;