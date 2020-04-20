import React, { useEffect, useState } from 'react';
import TweetsApi from '../../db/TweetsAPI'
import '../../css/tweet_form.css'
import picture_icon from '../../assets/picture_icon.svg';
 

export default function TweetForm(props){
    const [text, setText] = useState('');
    function onTweetFormSubmit(event){
        event.preventDefault();
        let tweetTextInput = document.getElementById("tweet-form");
        var inputs = document.getElementById("tweet-form").elements;
        let txt = inputs.tweetInput.value;
        TweetsApi.addTweet(txt);
        inputs.tweetInput.value = '';
        console.log("tweetsubmitted" + txt);
        return true;
    }

    function onTweetInputChange(event){
        setText(event.text);
    };

    useEffect(()=>{
        
    }, [text]);

    return (
        <div id="tweet-form-container" className="feed-item tweet-item">
            <img className="feed-profile-img" alt="profile"
                src="https://pbs.twimg.com/profile_images/475721381443670016/-Usuvy6t_normal.jpeg"/>
            <form id="tweet-form" className="tweet-form"  onSubmit={onTweetFormSubmit}>
                <input className="tweet-input" type="text" id="tweetInput" name="tweetInput" onChange={onTweetInputChange} required/>
                <div className="tweet-form-buttons">
                    <div className="tweet-form-options">
                        <div className="tweet-form-option">
                            <div className="tweet-form-icon-container">
                                <img className="svg-img tweet-form-icon" src={picture_icon}  alt="tweet"/>
                            </div>
                        </div>
                    </div>
                    {(text?.length<3)?
                        <input className="tweet-form-submit-btn" type="submit" value="Tweet"  disabled/>
                        :
                        <input className="tweet-form-submit-btn" type="submit" value="Tweet"/>
                    }
                </div>
            </form>
        </div>
    );
}