/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import 'react-native-gesture-handler';
import MainStackNavigator from './src/navigations/index';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigations/NavigationService';
import Colors from './src/assets/constants/Colors';


import configureStore from './src/store/StoreConfiguration';
import initialState from './src/store/initialState';
import { Provider } from 'react-redux';
// import configureStore from './src/store/StoreConfiguration';
// import initialState from './src/store/initialState';
// import firebase from 'react-native-firebase';

// const store = configureStore(initialState);
const store = configureStore(initialState);

export default function App() {
  console.disableYellowBox=true;

  // getToken = async () => {
  //   let fcmToken = await AsyncStorage.getItem('fcmToken');
  //   if (!fcmToken) {
  //     fcmToken = await firebase.messaging().getToken();
  //     if (fcmToken) {
  //       await AsyncStorage.setItem('fcmToken', fcmToken);
  //     }
  //   }
  // };
  // checkPermission = async () => {
  //   const enabled = await firebase.messaging().hasPermission();
  //   if (enabled) {
  //     this.getToken();
  //   } else {
  //     this.requestPermission();
  //   }
  // };

  // requestPermission = async () => {
  //   try {
  //     await firebase.messaging().requestPermission();
  //     this.getToken();
  //   } catch (error) {
  //     console.log('permission rejected');
  //   }
  // };

  // createNotificationListeners = () => {
  //   this.onUnsubscribeNotificaitonListener = firebase
  //     .notifications()
  //     .onNotification(notification => {
  //       firebase.notifications().displayNotification(notification);
  //     });
  // };

  // removeNotificationListeners = () => {
  //   this.onUnsubscribeNotificaitonListener();
  // };
  

  //  useEffect(()=>{
  //    // Build a channel
  //  const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
  //  .setDescription('My apps test channel');

  //  // Create the channel
  //  firebase.notifications().android.createChannel(channel);
  //  this.checkPermission();
  //  this.createNotificationListeners();
  //  },[])
  return (
    // {/* <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'}/> */}
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainStackNavigator />
      </NavigationContainer>
      </Provider>

  );
}
