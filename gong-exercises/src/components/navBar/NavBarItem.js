import React from 'react';
//import homeSvg from './assets/home_icon.svg'

export default class NavBarItem extends React.Component {
    static nameToIcon ={
        Home: "./assets/home_icon.svg", //{homeSvg}
        Explore: "./assets/explore_icon.svg",
        Notifications: "./assets/notifications_icon.svg",
        Messages: "./assets/messages_icon.svg",
        Bookmarks: "./assets/bookmarks_icon.svg",
        Lists: "./assets/list_icon.svg",
        Profile: "https://pbs.twimg.com/profile_images/475721381443670016/-Usuvy6t_normal.jpeg",
        More: "./assets/more.svg",
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