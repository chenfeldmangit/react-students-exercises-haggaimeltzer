
export default class TweetActions{
    static TWEET_ADDED = 'TWEET_ADDED';
    static RELOAD_TWEETS = 'RELOAD_TWEETS';
    static LIKE_TWEET = 'LIKE_TWEET';
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

    static likeTweetAction(tweet, like) {
        return {
            type: TweetActions.LIKE_TWEET,
            tweetData: tweet,
            like: like 
        }
    };

    static tweetLikedAction(tweet, liked) {
        return {
            type: TweetActions.TWEET_LIKED,
            tweetData: tweet,
            liked: liked 
        }
    };

}
