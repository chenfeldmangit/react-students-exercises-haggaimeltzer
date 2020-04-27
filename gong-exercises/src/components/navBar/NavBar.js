import React from 'react';
import NavBarItem from './NavBarItem';
import MoreNavBarItem from './MoreNavBarItem';
import '../../css/nav_bar.css';
import logoSvg from '../../assets/twitter_logo.svg'
import { connect } from 'react-redux';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLogoutOpen: false };
    }

    render() {
        const loggedInUser = localStorage.getItem("logged-in-user");
        return (
            <nav id="navBar" className={`navbar-${loggedInUser || this.props.loggedInUser ? 'column' : 'row'}`}>
                <a id="a-logo" href="/index.html">
                    <img id="twIcon" className="svg-img" src={logoSvg} alt="logo" />
                </a>
               {loggedInUser ?
                    (
                        <>
                            <NavBarItem name="Home"></NavBarItem>
                            <NavBarItem name="Explore"></NavBarItem>
                            <NavBarItem name="Notifications"></NavBarItem>
                            <NavBarItem name="Messages"></NavBarItem>
                            <NavBarItem name="Bookmarks"></NavBarItem>
                            <NavBarItem name="Lists"></NavBarItem>
                            <NavBarItem name="Profile"></NavBarItem>
                            <MoreNavBarItem name="More"></MoreNavBarItem>
                        </>
                    )
                    :
                    (
                        <>
                            <NavBarItem name="Login"></NavBarItem>
                            <NavBarItem name="Signup"></NavBarItem>
                        </>
                    )}

            </nav>
        );
    };
}


const mapStateToProps = (state) => {
    return {
        loggedInUser: state.loggedInUser,
    }
}


export default connect(
    mapStateToProps
)(NavBar);