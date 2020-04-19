import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar'
import NewsFeedContainer from './components/tweetsFeed/NewsFeedContainer'
import UserProfile from './components/profile/UserProfileContainer'
import NotificationsContainer from './components/Notifications/NotificationsContainer'
import './App.css';
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
