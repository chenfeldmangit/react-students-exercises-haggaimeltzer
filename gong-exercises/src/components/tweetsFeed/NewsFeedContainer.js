import React, { useEffect, useState } from 'react';

import NewsFeed from './NewsFeed'
import TweetForm from './TweetForm'

export default function NewsFeedContainer(props){
    return (
        <>
        <TweetForm/> 
        <NewsFeed/> 
        </>
    );
}