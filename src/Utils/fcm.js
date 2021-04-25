import { AsyncStorage, Alert } from 'react-native';
import moment from 'moment';
import Globals from '../assets/constants/Globals';
import messaging from '@react-native-firebase/messaging';

const CHANNEL_NAME = 'notifications';

const getToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  if (!fcmToken) {
    fcmToken = await messaging().getToken();

    if (fcmToken) {
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }
  }
  console.log(fcmToken)

  return fcmToken;
};
// const requestPermission = async () =>{
//   console.log("request hey")

//   var request = await firebase.messaging().requestPermission();
//   console.log("request",request)
//   return request;
// }
export const attemptToGetToken = async () =>{

  requestPermission()
  // .then(() => getToken().then((fcmToken)=>Globals.NotificationToken =fcmToken))
  // .catch(() =>{});

}
async function requestPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getToken().then((fcmToken)=>Globals.NotificationToken =fcmToken)
  }
}
// function buildNotification(type, id) {

// }

// export function displayNotification(type = 'NOTIFICATION', id) {
//   const notification = buildNotification(type, id);
//   // Display the notification
//   console.log(notification)
//   firebase.notifications().displayNotification(notification);
//   return notification;
// }

// export function scheduleLocalNotification(type, delay, id) 
// {
// }

// // function getDeliveredNotifications() {
// //   return firebase.notifications().getDeliveredNotifications();
// // }

// function getScheduledNotifications() {
//   return firebase.notifications().getScheduledNotifications();
// }

// function cancelAllNotifications() {
//   return firebase.notifications().cancelAllNotifications();
// }

// export const createNotificationListeners = () => {
//   const onIncoming = firebase.notifications().onNotification(notification => {
//     console.log(
//       'MyNotifsPipeline onIncoming',
//       notification
//     );
//     notification.android.setChannelId(CHANNEL_NAME);
//     return firebase.notifications().displayNotification(notification);
//   });

//   const onDisplayed = firebase
//     .notifications()
//     .onNotificationDisplayed((notification) => {
//       console.log('MyNotifsPipeline onNotificationDisplayed', notification);
//     });

//   const onOpened = firebase
//     .notifications()
//     .onNotificationOpened(notificationOpen => {
//       const notif = notificationOpen.notification;
//       // does not work when app was terminated
//       console.log('MyNotifsPipeline onNotificationOpened', notif);
//     });

//   const onTokenRefresh = firebase.messaging().onTokenRefresh(token => {
//     // TODO: handle new token. e.g. update token on server
//   });

//   const onMessage = firebase.messaging().onMessage(message => {
//     console.log('MyNotifsPipeline onMessage', message, message.sentTime);
//   });

//   // optional -> subscribe device to topic
//   firebase.messaging().subscribeToTopic('main-topic');

//   return { onIncoming, onOpened, onTokenRefresh, onMessage, onDisplayed };
// };

// const createAndroidChannel = () => {
//   const androidChannel = new firebase.notifications.Android.Channel(
//     CHANNEL_NAME,
//     'notifications',
//     firebase.notifications.Android.Importance.Max,
//   ).setDescription('My apps test channel');
//   firebase.notifications().android.createChannel(androidChannel);
// };


// const getInitialNotif = () => {
//   firebase
//     .notifications()
//     .getInitialNotification()
//     .then(notificationOpen => {
//       if (notificationOpen) {
//         // Get information about the notification that opened the app
//       }
//     });
// };

// function removeAllDeliveredNotifications() {
//   return firebase.notifications().removeAllDeliveredNotifications();
// }

const clearListeners = ({
  onIncoming,
  onOpened,
  onTokenRefresh,
  onMessage,
  onDisplayed,
}) => {
  onIncoming();
  onOpened();
  onTokenRefresh();
  onMessage();
  onDisplayed();
};

export const fcm = {
  attemptToGetToken,
//   createNotificationListeners,
//   createAndroidChannel,
//   getInitialNotif,
   clearListeners,
//   displayNotification,
//   scheduleLocalNotification,
// //   getDeliveredNotifications,
//   getScheduledNotifications,
//   removeAllDeliveredNotifications,
//   cancelAllNotifications,
};