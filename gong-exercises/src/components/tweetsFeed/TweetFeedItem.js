import React, { useEffect, useState } from 'react';
import TweetsApi from '../../db/TweetsAPI'

export default function TweetFeedItem(props){
    const [tweet] = useState({});
    const {tweetData} = props;
       
   /*  useEffect(()=> {
        async function loadContent() {
            const result = await TweetsApi.getTweets();
            setTweets(result);
          }
    }, []); */

    async function onlike(event){
        let like_element = event.target;
         if(tweetData.liked){
            await TweetsApi.removeLike(tweetData.id);
            tweetData.liked = false;
            tweetData.numLikes--;
            like_element.src = "./assets/like_icon.svg";
        }
        else{
            await TweetsApi.addLike(tweetData.id);
            tweetData.liked = true;
            tweetData.numLikes++;
            like_element.src = "./assets/liked_icon.svg";
        }
        like_element.closest(".tweet-action").querySelector(".like_counter").textContent = tweetData.numLikes;
    
    }
    
    return (
        <div className="feed-item">
        <div>
            <img className="feed-profile-img" alt="profile"/>
        </div>
        <div className="tweet-item">
            <div className="tweet-title tweet-inner-item">
                <a className="tw-username" href="index.html">
                    <span className="username">NickName</span>
                    <span className="twitterhandle">@twitterhandle </span>
                </a>
                <span> - </span>
                <button className="tweet-timestamp"> timestamp </button>
            </div>
            <div className="tweet-text tweet-inner-item">
                tweet text
            </div>
            <img className="tweet-image tweet-inner-item" src="" alt="tweet"/>
            <div className="tweet-actions tweet-inner-item">
                <div className="tweet-action">
                    <div className="tweet-action-icon-container">
                        <img className="svg tweet-action-icon" alt="comment" src="./assets/comment_icon.svg" />
                    </div>
                    <div className="tweet-action-counter comment_counter"> 0</div>
                </div>
                <div className="tweet-action">
                    <div className="tweet-action-icon-container">
                        <img className="svg tweet-action-icon" alt="retweet" src="./assets/retweet_icon.svg" />
                    </div>
                    <div className="tweet-action-counter retweet_counter"> 0</div>
                </div>
                <div className="tweet-action">
                    <div className="tweet-action-icon-container">
                        <img className="svg tweet-action-icon like_icon" src="./assets/like_icon.svg" onClick={onlike} alt="like" />
                    </div>
                    <div className="tweet-action-counter like_counter"> 0</div>
                </div>
                <div className="tweet-action">
                    <div className="tweet-action-icon-container">
                        <img className="svg tweet-action-icon" alt="share" src="./assets/share_icon.svg" />
                    </div>
                </div>
            </div>
        </div> 
        </div>
    );
}