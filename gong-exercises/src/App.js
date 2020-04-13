import React from 'react';
import NavBar from './components/navBar/NavBar'
import NewsFeed from './components/tweetsFeed/NewsFeed'
import TweetForm from './components/tweetsFeed/TweetForm'
import NotificationsFeed from './components/Notifications/NotificationsFeed'
import './App.css';
import './css/page.css';


function App() {
  return (
    <div className="App">
      <div className="main-layout">
        <NavBar /> 
        <div className="center-column">
          {/* <TweetForm/> 
          <NewsFeed/>  */}
          <NotificationsFeed/>
        </div>
      </div>
    </div>
  );
}

export default App;
