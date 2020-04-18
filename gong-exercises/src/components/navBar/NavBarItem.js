import React from 'react';
//import homeSvg from './assets/home_icon.svg'
import HomeLogo from '../../assets/home_icon.svg';
import ExploreLogo from '../../assets/explore_icon.svg';
import NotificationsLogo from '../../assets/notifications_icon.svg';
import MessagesLogo from '../../assets/messages_icon.svg';
import BookmarksLogo from '../../assets/bookmarks_icon.svg';
import ListsLogo from '../../assets/list_icon.svg';
import MoreLogo  from '../../assets/more.svg';

export default class NavBarItem extends React.Component {
    static nameToIcon ={
        Home: HomeLogo,
        Explore: ExploreLogo,
        Notifications:NotificationsLogo,
        Messages: MessagesLogo,
        Bookmarks:BookmarksLogo,
        Lists: ListsLogo,
        Profile: 'https://pbs.twimg.com/profile_images/475721381443670016/-Usuvy6t_normal.jpeg',
        More:MoreLogo,
    };

    static nameToText ={
      Home: "Home",
      Explore: "Explore",
      Notifications: "Notifications",
      Messages: "Messages",
      Bookmarks: "Bookmarks",
      Lists: "Lists",
      Profile: "Profile",
      More: "More...",
  };

    getIcon = ()=>{
        return NavBarItem.nameToIcon[this.props.name];
    };

    getName = ()=>{
      return NavBarItem.nameToText[this.props.name];
  };

    onClicked = ()=>{

    }

    render() {
      return (
        // eslint-disable-next-line
        <a className="nav-item" onClick={this.onClicked()}>
            <img className="svg nav-icon" src={this.getIcon()} alt={this.getName()}/>
            <span className="navitem-text"> {this.props.name} </span>
        </a>
      );
    }
  }