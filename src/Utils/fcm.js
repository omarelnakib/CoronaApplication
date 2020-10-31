import { AsyncStorage } from 'react-native';
import firebase, { RNFirebase } from 'react-native-firebase';
import moment from 'moment';

const CHANNEL_NAME = 'notifications';

const getToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  if (!fcmToken) {
    fcmToken = await firebase.messaging().getToken();

    if (fcmToken) {
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }
  }
  console.log(fcmToken)

  return fcmToken;
};
const sendNotification = async ()=>{
    const msg = new firebase.messaging.RemoteMessage();
    msg.setMessageType("notifications")

    msg.setData({
           not:JSON.stringify({
            body: 'This message was sent via FCM!',
            android: {
              channelId: 'notifications',
              notificationId:'0.215685756468645',
              actions: [
                {
                  title: 'Mark as Read',
                  pressAction: {
                    id: 'read',
                  },
                },],}})
           }) 
            
    msg.setTo("fuCX2jlqRfyE2EO1VZylF3:APA91bEgVgHzB7eXrLP2xFeTYM_NiCRfcNGyn5_fMF8YPU16WGvS3SYh1gC1GW4aAQxxn1udt_TJft7I-QsfjET0dI2TSiAzHI1BIK8JHK0_fNLe1FLdwYJnzenwtukdE85-nz80GIRi")
    console.log(msg)

    await firebase.messaging().sendMessage(msg)
}
const requestPermission = async () =>
  await firebase.messaging().requestPermission();
export const attemptToGetToken = async () =>
  requestPermission()
    .then(() => getToken())
    .catch(() => {});

function buildNotification(type, id) {

}

export function displayNotification(type = 'NOTIFICATION', id) {
  const notification = buildNotification(type, id);
  // Display the notification
  console.log(notification)
  firebase.notifications().displayNotification(notification);
  return notification;
}

export function scheduleLocalNotification(type, delay, id) 
{
}

// function getDeliveredNotifications() {
//   return firebase.notifications().getDeliveredNotifications();
// }

function getScheduledNotifications() {
  return firebase.notifications().getScheduledNotifications();
}

function cancelAllNotifications() {
  return firebase.notifications().cancelAllNotifications();
}

export const createNotificationListeners = () => {
  const onIncoming = firebase.notifications().onNotification(notification => {
    console.log(
      'MyNotifsPipeline onIncoming',
      notification
    );
    notification.android.setChannelId(CHANNEL_NAME);
    return firebase.notifications().displayNotification(notification);
  });

  const onDisplayed = firebase
    .notifications()
    .onNotificationDisplayed((notification) => {
      console.log('MyNotifsPipeline onNotificationDisplayed', notification);
    });

  const onOpened = firebase
    .notifications()
    .onNotificationOpened(notificationOpen => {
      const notif = notificationOpen.notification;
      // does not work when app was terminated
      console.log('MyNotifsPipeline onNotificationOpened', notif);
    });

  const onTokenRefresh = firebase.messaging().onTokenRefresh(token => {
    // TODO: handle new token. e.g. update token on server
  });

  const onMessage = firebase.messaging().onMessage(message => {
    console.log('MyNotifsPipeline onMessage', message, message.sentTime);
  });

  // optional -> subscribe device to topic
  firebase.messaging().subscribeToTopic('main-topic');

  return { onIncoming, onOpened, onTokenRefresh, onMessage, onDisplayed };
};

const createAndroidChannel = () => {
  const androidChannel = new firebase.notifications.Android.Channel(
    CHANNEL_NAME,
    'notifications',
    firebase.notifications.Android.Importance.Max,
  ).setDescription('My apps test channel');
  firebase.notifications().android.createChannel(androidChannel);
};

const getInitialNotif = () => {
  firebase
    .notifications()
    .getInitialNotification()
    .then(notificationOpen => {
      if (notificationOpen) {
        // Get information about the notification that opened the app
      }
    });
};

function removeAllDeliveredNotifications() {
  return firebase.notifications().removeAllDeliveredNotifications();
}

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
  createNotificationListeners,
  createAndroidChannel,
  getInitialNotif,
  clearListeners,
  displayNotification,
  scheduleLocalNotification,
//   getDeliveredNotifications,
  getScheduledNotifications,
  sendNotification,
  removeAllDeliveredNotifications,
  cancelAllNotifications,
};