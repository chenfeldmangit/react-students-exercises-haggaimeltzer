import React, { useEffect, useState } from 'react';

export default function NotificationItem(props){
    const {notificationData} = props;
       
    return (
        <div className="notification-item">
            <img className="notification-img" alt="notification-img" src={notificationData.avatar_img}/>
            <span className="notification-title">{notificationData.title}</span>
            <span className="notification-text">{notificationData.text}</span>
        </div>
    );
}