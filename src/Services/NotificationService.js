import React, { useRef,useEffect,useState } from 'react';
import { Notification } from 'react-native-in-app-message';
import messaging from '@react-native-firebase/messaging';
import {useDispatch} from 'react-redux';
import { NotificationsAlert } from '../components/NotificationsAlert';

const NotificationService = () => {
  const ref=useRef();
  const dispatch=useDispatch();
  const [notificationMessage, setNotificationMessage] = useState({});
  
  useEffect(()=>{
    const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log("sup",remoteMessage);
      setNotificationMessage({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        ticketId:remoteMessage.data.ticketId,
        type:remoteMessage.data.type
      });
      ref.current?.show();
    });
    
    return unsubscribe;
  },[])
  const onPressNotifications=(id,type)=>{
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
          onPress={()=>onPressNotifications(notificationMessage?.ticketId,notificationMessage?.type)}
        />
      }
    />
  );
};

export default NotificationService;
