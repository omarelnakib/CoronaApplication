import React, { useEffect, useState, useRef } from 'react';
import { AppState } from 'react-native';
import { AsyncStorage } from '@react-native-community/async-storage';

import { useNotifs } from './notifications';
import { fcm } from '../Utils/fcm';

export const useNotificationService = () => {
  const listenersRef = useRef();
  const notifs = useNotifs();

  useEffect(() => {
    async function callinitialize() {
      // initialize fcm and listeners
      listenersRef.current = await initialize();
    }
    callinitialize();
    
    fcm.sendNotification();

    return function cleanup() {
      // clear listeners
      fcm.clearListeners(listenersRef.current);
    };
    /* https://github.com/facebook/react/issues/15865 */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleNotifPress(notification, details) {
    notifs.updateNotif(notification);
  }

  function handleNotificationReceived(notification) {
    notifs.updateNotif(notification);
  }

  async function initialize() {
    // attempt to get token and create listener
    return fcm.attemptToGetToken().then(() => {
      // Build a channel
      fcm.createAndroidChannel();

      fcm.getInitialNotif();

      fcm.getScheduledNotifications().then(notifications => {
        notifs.updateNotifs(notifications);
      });

    //   fcm.getDeliveredNotifications().then(notifications => {
    //     notifs.updateNotifs(notifications);
    //   });

      return fcm.createNotificationListeners();
    });
  }

  return null;
};

export default { useNotificationService };