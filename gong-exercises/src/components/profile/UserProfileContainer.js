import React, { useEffect, useState } from 'react';
import TweetsApi from '../../db/TweetsAPI'

export default function UserProfileContainer(props){
   /*  useEffect(()=> {
        async function loadContent() {
            const result = await TweetsApi.getTweets();
            setTweets(result);
          }
    }, []);  */

    return (
        <div id="profile-container" >
            <div id="profile-top">
                <div className="bg-img-container">
                    <img className="background-img" />
                </div>
                <button id="edit-profile-btn">
                    Edit profile
                </button>
                <img className="my-profile-img" />
            </div>
            
            <div className="profile-title">
                <span className="username">Username</span>
                <span className="twitterhandle">@twitterhandle </span>
                <span  className="joinedTime"> time </span> 
            </div>
            <div className="profile-followers-container">
                <span className="numFollowing"> 5 </span><span> following</span>
                <span className="numFollowers"> 50000 </span> <span>followers</span>
            </div>
        </div>
    );
}