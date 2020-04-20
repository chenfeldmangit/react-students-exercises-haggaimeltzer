import React from 'react';
import {BrowserRouter, Switch, Route, useLocation  } from 'react-router-dom';
import NavBar from './components/navBar/NavBar'
import NewsFeedContainer from './components/tweetsFeed/NewsFeedContainer'
import UserProfile from './components/profile/UserProfileContainer'
import NotificationsContainer from './components/Notifications/NotificationsContainer'
import SignupContainer from './components/login/SignupContainer'
import LoginContainer from './components/login/LoginContainer'
import LogoutContainer from './components/login/LogoutContainer'
import './css/App.css';
//import './sass/page.sass'; //makes error Invalid CSS after "...@include layout": expected "}", was ".margin-auto;"
import './css/page.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-layout">
            <NavBar />
          <div className="center-column">
            <Switch>
              <Route path="/" component={() => <NewsFeedContainer/>} exact/>
              <Route path="/profile" component={UserProfile}/>
              <Route path="/notifications" component={NotificationsContainer}/>
              <Route path="/signup" component={() => <SignupContainer/>} exact/>
              <Route path="/login" component={() => <LoginContainer/>} exact/>
              <Route path="/logout" component={() => <LogoutContainer/>} exact/>
              
              {/* <Route component={PageNotFound}/>  */}
              {/* <TweetForm/> 
              <NewsFeed/> 
              <NotificationsFeed/> */}
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
