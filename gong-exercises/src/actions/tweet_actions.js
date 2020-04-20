
export default class TweetActions{
    static TWEET_ADDED = 'TWEET_ADDED';
    static RELOAD_TWEETS = 'RELOAD_TWEETS';
    static TWEET_LIKED = 'TWEET_LIKED';
    static tweetAddedAction(tweet) {
        return {
            type: TweetActions.TWEET_ADDED,
            tweetData: tweet
        }
    };

    static reloadTweetsAction(tweets) {
        return {
            type: TweetActions.RELOAD_TWEETS,
            tweetsData: tweets
        }
    };

    static tweetLikedAction(tweet) {
        return {
            type: TweetActions.RELOAD_TWEETS,
            tweetData: tweet
        }
    };

}
