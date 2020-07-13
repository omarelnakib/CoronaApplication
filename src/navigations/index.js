import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import PostScreen from '../screens/PostScreen';
import QuestionsScreen from '../screens/QuestionsScreen';
import SideBar from '../components/SideBar';
import FollowUpQuestions from '../screens/FollowUpQuestions';
import ChatScreen from '../screens/ChatScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import DoctorsNumbersScreen from '../screens/DoctorsNumbersScreen';
import FollowUpScreen from '../screens/FollowUpScreen';
import LocationScreen from '../screens/LocationScreen';
import VisitedPlacesScreen from '../screens/VisitedPlacesScreen';
import PicturesScreen from '../screens/PicturesScreen';
import DonationScreen from '../screens/DonationScreen';
import ResultScreen from '../screens/ResultScreen';


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <SideBar {...props} />}
        drawerStyle={{width:'80%'}}
      >
         <Drawer.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            drawerLabel: "Home",
          }}
        />
        <Drawer.Screen
          name="QuestionsScreen"
          component={QuestionsScreen}
          options={{
            drawerLabel: "QuestionScreen",
          }}
        />
       
         <Drawer.Screen
          name="FollowUpStackNavigator"
          component={FollowUpStackNavigator}
          options={{
            drawerLabel: "FollowUpStackNavigator",
          }}
        />
         <Drawer.Screen
          name="DoctorsNumbersScreen"
          component={DoctorsNumbersScreen}
          options={{
            drawerLabel: "DoctorsNumbersScreen",
          }}
        />
          <Drawer.Screen
          name="DonationScreen"
          component={DonationScreen}
          options={{
            drawerLabel: "DonationScreen",
          }}
        />
      </Drawer.Navigator>
    );
  }

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
            {/* <Stack.qScreen name="ChangePassword" component={ChangePassword} /> */}
        </Stack.Navigator>
    );
}

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" >
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}
const FollowUpStackNavigator = () => {
  return (
      <Stack.Navigator headerMode="none" >
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="FollowUpScreen" component={FollowUpScreen}></Stack.Screen>

          <Stack.Screen name="FollowUpQuestions" component={FollowUpQuestions}></Stack.Screen>
          <Stack.Screen name="ChatScreen" component={ChatScreen}></Stack.Screen>
          <Stack.Screen name="PicturesScreen" component={PicturesScreen}></Stack.Screen>
          
      </Stack.Navigator>
  );
}
const MainStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" >
          
            <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />

            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />

            <Stack.Screen name="NotificationScreen" component={NotificationsScreen} />
            <Stack.Screen name="LocationScreen" component={LocationScreen} />
            <Stack.Screen name="VisitedPlacesScreen" component={VisitedPlacesScreen} />
            <Stack.Screen name='ResultScreen' component={ResultScreen}/>
            <Stack.Screen name='PostScreen' component={PostScreen}></Stack.Screen>

        </Stack.Navigator>
    );
}


export default MainStackNavigator;