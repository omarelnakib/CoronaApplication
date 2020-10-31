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


export const Get_Survey = (surveyType,callback) => {
    return async (dispatch) => {
        try {
            console.log("Enter Get Survey")
             Get('/surveys/'+surveyType, true).then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    // console.log(res);
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
            callback({ ok: false, data: "Something went wrong, please try again!" })
        }
    };
};

export const Set_Case = (survey,callback) => {
    return async (dispatch) => {
        try {

             Post(`/Case_Surveys?userid=${survey.UserId}&surveyid=${survey.SurveyId}&quest_answers=${survey.Answers}`, true).then(async response => {
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

//request type either case or user or doctor or unassigned
export const Get_Cases = (userId,requestType,callback) => {
    return async (dispatch) => {
        try {

             Get(`/PatientCas/${userId}?caseORuserORdoctorORunassigned=${requestType}`, true).then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    console.log(res);
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

