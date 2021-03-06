import React, { useEffect, useState } from 'react';
import NotificationsApi from '../../db/NotificationsAPI'
import NotificationItem from './NotificationItem'

export default function NotificationsFeed(props){
    const [notifications, setNotifications] = useState([]);

    useEffect(()=> {
        async function loadContent() {
            const result = await NotificationsApi.getNotifications();
            setNotifications(result);
          }
          loadContent();
    }, []);
    
    let i = 0;
    return (
        <div id="notificationsFeed" className="feed">
           {
               notifications.map((notification)=> <NotificationItem notificationData={notification} key={i++}/>)
           }
        </div>
    );
}