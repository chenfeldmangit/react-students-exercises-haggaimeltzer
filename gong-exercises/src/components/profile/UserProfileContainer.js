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
                <div class="bg-img-container">
                    <img class="background-img" />
                </div>
                <button id="edit-profile-btn">
                    Edit profile
                </button>
                <img class="my-profile-img" />
            </div>
            
            <div class="profile-title">
                <span class="username">Username</span>
                <span class="twitterhandle">@twitterhandle </span>
                <span  class="joinedTime"> time </span> 
            </div>
            <div class="profile-followers-container">
                <span class="numFollowing"> 5 </span><span> following</span>
                <span class="numFollowers"> 50000 </span> <span>followers</span>
            </div>
        </div>
    );
}