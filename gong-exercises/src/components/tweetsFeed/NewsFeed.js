import React, { useEffect, useState } from 'react';
import TweetsApi from '../../db/TweetsAPI'
import TweetFeedItem from './TweetFeedItem'

export default function NewsFeed(props){
    const [tweets, setTweets] = useState([]);

    useEffect(()=> {
        async function loadContent() {
            const result = await TweetsApi.getTweets();
            setTweets(result);
          }
          loadContent();
    }, []);

    return (
        <div id="newsFeed" className="feed">
           {
               tweets.map((tweet)=> <TweetFeedItem tweetData={tweet} key={tweet.id}/>)
           }
        </div>
    );
}