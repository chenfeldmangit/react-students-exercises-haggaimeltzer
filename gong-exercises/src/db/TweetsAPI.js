import DB from './DB'

export default class TweetsApi{
    
     static async nextID(){
        let currentId = localStorage.getItem("currentId");
        if(!currentId){
            currentId=0;
        }
        else{
            currentId++;
        }
        localStorage.setItem("currentId", currentId);
        return currentId;
    };

    static async  getTweets(){
        let tweets = await DB.getJSON("tweets");
        if(!tweets){
            tweets= [];
        }
        return tweets;
    };

    static async  addTweetJSON (tweet){
        let values = await Promise.all([TweetsApi.getTweets(), TweetsApi.nextID()]);
        tweet.id = values[1];
        values[0].push(tweet);
        DB.setJSON("tweets", values[0]);
    };

    static async addTweet(text, img) {
        let tweet = {
            username: "MeltzerMan",
            twhandle: "@meltzerman",
            profileImage: "https://pbs.twimg.com/profile_images/475721381443670016/-Usuvy6t_400x400.jpeg",
            timestamp : Date.now(),
            text: text,
            img : img, 
            numComments : 0,
            numRetweets: 0,
            numLikes : 0,
            liked: false,
        };
        await(TweetsApi.addTweetJSON(tweet));
    };

    static async addLike (tweetId){
        let tweets = await TweetsApi.getTweets();
        let loc = TweetsApi.findLocationById(tweets, tweetId);
        if(loc>0){
            if(!tweets[loc].liked ){
                tweets[loc].numLikes++;
                tweets[loc].liked = true;
            }
        }
        await DB.setJSON("tweets", tweets);
    };

    static async removeLike (tweetId){
        let tweets = await TweetsApi.getTweets();
        let loc = TweetsApi.findLocationById(tweets, tweetId);
        if(loc>0){
            if(tweets[loc].liked ){
                tweets[loc].numLikes--;
                tweets[loc].liked = false;
            }
        }
        await DB.setJSON("tweets", tweets);
    };

    static findLocationById(tweets, tweetId){
        for (var i=0; i < tweets.length; i++){
            if (tweets[i].id === tweetId){
                return i;
            }
        }
        return -1;
    };
}