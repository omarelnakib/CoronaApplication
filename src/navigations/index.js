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
import MenuScreen from '../screens/MenuScreen';
import MedicalVacationScreen from '../screens/MedicalVacationScreen';
import CasesScreen from '../screens/CasesScreen'
import PatientProfileScreen from '../screens/PatientProfileScreen'
import { useNotificationService } from '../Services/useNotificationService';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../assets/constants/Colors';
import { IconButton } from 'react-native-paper';
import NotificationService from '../Services/NotificationService';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

function TabsNavigator() {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'الرئيسية') {
              iconName = focused
                ? 'home'
                :'home'
            } else if (route.name === 'البلاغات') {
              iconName = focused
              ? 'heart-pulse'
              : 'heart-pulse'
            }   

            // You can return any component that you like here!
            return <IconButton  icon={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.secondary,
          inactiveTintColor: Colors.textGray,
        }}>
        <Tab.Screen name={'الرئيسية'} component={HomeStackNavigator} />
        <Tab.Screen name={"البلاغات"} component={CasesScreen} />
        {/* <Tab.Screen name={"المحادثات"} component={ReportsScreen} /> */}
      </Tab.Navigator>
  );
}
function DrawerNavigator() {
    return (
      <Stack.Navigator headerMode="none" >
      <Stack.Screen name="Home" component={HomeStackNavigator} />
      <Stack.Screen name='MenuScreen' component={MenuScreen}/>

      <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} />
      <Stack.Screen name="CasesScreen" component={CasesScreen} />
      <Stack.Screen name="PicturesScreen" component={PicturesScreen}/>
      <Stack.Screen name="ChatScreen" component={ChatScreen}></Stack.Screen>

      <Stack.Screen name="PatientProfileScreen" component={PatientProfileScreen} />
      <Stack.Screen name="FollowUpStackNavigator" component={FollowUpStackNavigator} />
      <Stack.Screen name="DoctorsNumbersScreen" component={DoctorsNumbersScreen} />
      <Stack.Screen name="DonationScreen" component={DonationScreen} />
      <Stack.Screen name="MedicalVacationScreen" component={MedicalVacationScreen}/>
       {/* <Drawer.Navigator
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
      </Drawer.Navigator> */}
      </Stack.Navigator>

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
          
      </Stack.Navigator>
  );
}
const MainStackNavigator = () => {
  // useNotificationService();
    return (
        <Stack.Navigator headerMode="none" >
          
            <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
            <Stack.Screen name="TabsNavigator" component={TabsNavigator} />

            {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
            <Stack.Screen name='MenuScreen' component={MenuScreen}/>

            <Stack.Screen name="Home" component={HomeStackNavigator} />

      <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} />
      <Stack.Screen name="CasesScreen" component={CasesScreen} />
      <Stack.Screen name="PicturesScreen" component={PicturesScreen}/>
      <Stack.Screen name="ChatScreen" component={ChatScreen}></Stack.Screen>

      <Stack.Screen name="PatientProfileScreen" component={PatientProfileScreen} />
      <Stack.Screen name="FollowUpStackNavigator" component={FollowUpStackNavigator} />
      {/* <Stack.Screen name="DoctorsNumbersScreen" component={DoctorsNumbersScreen} /> */}
      {/* <Stack.Screen name="DonationScreen" component={DonationScreen} /> */}
      {/* <Stack.Screen name="MedicalVacationScreen" component={MedicalVacationScreen}/> */}
            {/* <Stack.Screen name="NotificationScreen" component={NotificationsScreen} /> */}
            {/* <Stack.Screen name="LocationScreen" component={LocationScreen} /> */}
            {/* <Stack.Screen name="VisitedPlacesScreen" component={VisitedPlacesScreen} /> */}
            {/* <Stack.Screen name='ResultScreen' component={ResultScreen}/> */}
            <Stack.Screen name='PostScreen' component={PostScreen}></Stack.Screen>

        </Stack.Navigator>
    );
}


export default MainStackNavigator;