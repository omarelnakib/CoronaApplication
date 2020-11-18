import * as types from '../ActionTypes';
import { Post, setData,Put, Get } from "./API_Requests";
import AsyncStorage from "@react-native-community/async-storage";
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


export const Send_Message = (message,callback) => {
    return async (dispatch) => {
        try {

             Get(`/Notification/SendMessageToDoctorNotification?caseid=${message.caseid}&message=${message.text}&title=${message.title}&body=${message.body}`, true).then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    if (response.ok) {
                        // dispatch(setData(types.USER_TOKEN, res))
                        // await AsyncStorage.setItem("User",JSON.stringify({user:  res}))
                        callback({ ok: true, data: res })
                    }
                    else {
                        callback({ ok: false, data: res.message })
                    }
                }
                else {
                    callback({ ok: false, data: "Something went wrong, please try again!" })
                }
            })

        } catch (err) {
            console.log(err.message);
            callback({ ok: false, data: "Something went wrong, please try again!" })
        }
    };
};
