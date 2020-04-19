import React from 'react';
import NavBarItem from './NavBarItem';
import '../../css/nav_bar.css';
import logoSvg from '../../assets/twitter_logo.svg'

export default class NavBar extends React.Component {
    render() {
      return (
        <nav id="navBar">
             <a href="/index.html">
                <img id="twIcon" className="svg-img"  src={logoSvg} alt="logo"/>
            </a>  
            <NavBarItem name="Home"></NavBarItem>
            <NavBarItem name="Explore"></NavBarItem>
            <NavBarItem name="Notifications"></NavBarItem>
            <NavBarItem name="Messages"></NavBarItem>
            <NavBarItem name="Bookmarks"></NavBarItem>
            <NavBarItem name="Lists"></NavBarItem>
            <NavBarItem name="Profile"></NavBarItem>
            <NavBarItem name="More"></NavBarItem>
        </nav>
      );
    }
  }