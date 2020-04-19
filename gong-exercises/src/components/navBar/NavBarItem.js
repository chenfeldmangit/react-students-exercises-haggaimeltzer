import React from 'react';
import NavBarAssets from '../../assets/NavBarAssets';

export default class NavBarItem extends React.Component {
    /* static nameToIcon ={
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

  static nameToRef ={
    Home: "/",
    Explore: "/Explore",
    Notifications: "/Notifications",
    Messages: "/Messages",
    Bookmarks: "/Bookmarks",
    Lists: "/Lists",
    Profile: "/Profile",
    More: "More...",
}; */

    getIcon = ()=>{
        return NavBarAssets.getItemIcon(this.props.name);
    };

    getName = ()=>{
      return NavBarAssets.getItemText(this.props.name);
  };

  getRef = ()=>{
      return NavBarAssets.getItemRef(this.props.name);
  };

    onClicked = ()=>{

    }

    render() {
      return (
        // eslint-disable-next-line
        <a className="nav-item" href={this.getRef()} onClick={this.onClicked()}>
            <img className="svg-img nav-icon" src={this.getIcon()} alt={this.getName()}/>
            <span className="navitem-text"> {this.props.name} </span>
        </a>
      );
    }
  }