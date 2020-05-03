import React, { useEffect, useState } from 'react';
import TweetsApi from '../../db/TweetsAPI'
import TweetFeedItem from './TweetFeedItem'
import '../../css/tweet_form.css';
import TweetActions from '../../actions/tweet_actions';
import {connect} from 'react-redux';

function NewsFeed(props){
    //const [tweets, setTweets] = useState([]);
    const {tweets, setTweets} = props;

    useEffect(()=> {
        async function loadContent() {
            const result = await TweetsApi.getTweets();
            result.reverse();
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


const mapStateToProps = (state)=>{
    return { 
        tweets: state.tweets,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTweets: tweets=>{
            dispatch(TweetActions.reloadTweetsAction(tweets));
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsFeed);