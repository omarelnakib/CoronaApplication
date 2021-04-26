import React, { useRef,useEffect,useState } from 'react';
import { Notification } from 'react-native-in-app-message';
import messaging from '@react-native-firebase/messaging';
import {useDispatch} from 'react-redux';
import { NotificationsAlert } from '../components/NotificationsAlert';
import { attemptToGetToken } from '../Utils/fcm';

const NotificationService = () => {
  const ref=useRef();
  const dispatch=useDispatch();
  const [notificationMessage, setNotificationMessage] = useState({});
  
  useEffect(()=>{
    attemptToGetToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
    var temp = {
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
    }
        setNotificationMessage({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        // type:remoteMessage.data.type
      });
      console.log("sup", ref.current);

      ref.current?.show();
    });
    
    return unsubscribe;
  },[])
  const onPressNotifications=()=>{
    // dispatch(getTicketDetails(id))
    // if (type !== 'ticket-deleted') {
    //   if (type !== 'auto-close') {
    //     navigate('TicketDetails')
    //   } else {
    //     navigate('ArchiveDetails')
    //   }
    // }
   
  }
  return (
    <Notification
      ref={ref}
      duration={5000}
      customComponent={
        <NotificationsAlert
          title={notificationMessage.title}
          message={notificationMessage.body}
          onPress={()=>onPressNotifications()}
        />
      }
    />
  );
};

export default NotificationService;
