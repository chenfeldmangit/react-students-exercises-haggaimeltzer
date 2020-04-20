import React from 'react';
import HomeLogo from '../assets/home_icon.svg';
import ExploreLogo from '../assets/explore_icon.svg';
import NotificationsLogo from '../assets/notifications_icon.svg';
import MessagesLogo from '../assets/messages_icon.svg';
import BookmarksLogo from '../assets/bookmarks_icon.svg';
import ListsLogo from '../assets/list_icon.svg';
import MoreLogo  from '../assets/more.svg';

export default class NavBarAssets{
  
    static nameToTextAndIconAndRef ={
        Home: ["Home", HomeLogo, "/"],
        Explore: ["Explore",ExploreLogo,  "/Explore"],
        Notifications: ["Notifications", NotificationsLogo, "/Notifications"],
        Messages: ["Messages", MessagesLogo, "/Messages"],
        Bookmarks: ["Bookmarks",BookmarksLogo, "/Bookmarks"],
        Lists: ["Lists",ListsLogo, "/Lists"],
        Profile: ["Profile", 'https://pbs.twimg.com/profile_images/475721381443670016/-Usuvy6t_normal.jpeg',  "/Profile"],
        More: ["More...", MoreLogo],
    };

    static getItemText(name){
        return NavBarAssets.nameToTextAndIconAndRef[name][0];
    };

    static getItemIcon(name){
        return NavBarAssets.nameToTextAndIconAndRef[name][1];
    };
    static getItemRef(name){
        return NavBarAssets.nameToTextAndIconAndRef[name][2];
    };
}