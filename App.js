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
import { Provider } from 'react-redux';


// import configureStore from './src/store/StoreConfiguration';
// import initialState from './src/store/initialState';

// const store = configureStore(initialState);

export default function App() {
  console.disableYellowBox=true;
  return (
    // {/* <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'}/> */}
      <NavigationContainer ref={navigationRef}>
        <MainStackNavigator />
      </NavigationContainer>
  );
}
