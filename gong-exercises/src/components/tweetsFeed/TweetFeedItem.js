import React, {useState } from 'react';
import TweetsApi from '../../db/TweetsAPI'
import CommentIcon from '../../assets/comment_icon.svg'
import RetweetIcon from '../../assets/retweet_icon.svg'
import LkeIcon from '../../assets/like_icon.svg'
import SharetIcon from '../../assets/share_icon.svg'

export default function TweetFeedItem(props){
    //const [tweet] = useState({});
    const {tweetData} = props;
       

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
            <img className="feed-profile-img" alt="profile" src={tweetData.profileImage}/>
        </div>
        <div className="tweet-item">
            <div className="tweet-title tweet-inner-item">
                <a className="tw-username" href="index.html">
                    <span className="username">{tweetData.username }</span>
                    <span className="twitterhandle"> {tweetData.twhandle} </span>
                </a>
                <span> - </span>
                <button className="tweet-timestamp"> {tweetData.timestamp} </button>
            </div>
            <div className="tweet-text tweet-inner-item">
                {tweetData.text}
            </div>
            {(tweetData.img)?
                <img className="tweet-image tweet-inner-item" src={tweetData.img} alt="tweet image"/> 
                : null 
            }
            <div className="tweet-actions tweet-inner-item">
                <div className="tweet-action">
                    <div className="tweet-action-icon-container">
                        <img className="svg-img tweet-action-icon" alt="comment" src={CommentIcon} />
                    </div>
                    <div className="tweet-action-counter comment_counter"> 0</div>
                </div>
                <div className="tweet-action">
                    <div className="tweet-action-icon-container">
                        <img className="svg-img tweet-action-icon" alt="retweet" src={RetweetIcon} />
                    </div>
                    <div className="tweet-action-counter retweet_counter"> 0</div>
                </div>
                <div className="tweet-action">
                    <div className="tweet-action-icon-container">
                        <img className="svg-img tweet-action-icon like_icon" src={LkeIcon} onClick={onlike} alt="like" />
                    </div>
                    <div className="tweet-action-counter like_counter"> 0</div>
                </div>
                <div className="tweet-action">
                    <div className="tweet-action-icon-container">
                        <img className="svg-img tweet-action-icon" alt="share" src={SharetIcon} />
                    </div>
                </div>
            </div>
        </div> 
        </div>
    );
}