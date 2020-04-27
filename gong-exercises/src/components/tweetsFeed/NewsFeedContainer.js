import React, { useEffect, useState } from 'react';

import NewsFeed from './NewsFeed'
import TweetForm from './TweetForm'
import '../../css/feed.css';
import '../../css/tweet_form.css';

export default function NewsFeedContainer(props){
    const loggedInUser = localStorage.getItem("logged-in-user");
    return (
        loggedInUser
            ? 
                <>
                    <TweetForm/> 
                    <NewsFeed/> 
                </>
            : 
            null
    );
}