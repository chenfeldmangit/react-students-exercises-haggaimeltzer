import React, { useEffect, useState } from 'react';
import '../../css/notif_item.css';

export default function NotificationItem(props){
    const {notificationData} = props;
       
    return (
        <div className="notification-item">
            <div className="notification-avatars">
            {
                notificationData.avatar_imgs.map((avatar_img)=> 
                <img className="notification-img" alt="notification-img" src={avatar_img}/>
                )
                
            }
            </div>
            <span className="notification-title">{notificationData.title}</span>
            <span className="notification-text">{notificationData.text}</span>
        </div>
    );
}