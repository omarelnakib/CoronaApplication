import * as types from '../ActionTypes';
import { Post, setData,Put, Get } from "./API_Requests";
import { navigate, replace, reset } from "../../navigations/NavigationService";
import { Platform } from 'react-native'


// const storeData = async data => {
//     try {
//         console.log("storedata");
//         await AsyncStorage.setItem('User', JSON.stringify(data));
//         await AsyncStorage.setItem('token', data.token);
//     } catch (e) {
//         throw Error("Error While storing data in AsyncStorage please Try again");
//     }
// };


