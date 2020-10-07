import * as types from '../ActionTypes';
import { Post, setData,Put, Get } from "./API_Requests";
import AsyncStorage from "@react-native-community/async-storage";
import { navigate, replace, reset } from "../../navigations/NavigationService";
import { Platform } from 'react-native'


const storeData = async data => {
    try {
        console.log("storedata");
        await AsyncStorage.setItem('User', JSON.stringify(data));
        await AsyncStorage.setItem('token', data.token);
    } catch (e) {
        throw Error("Error While storing data in AsyncStorage please Try again");
    }
};
export const autoLogin = async () => {
    let user = {}
    user = await AsyncStorage.getItem('User')
        .then((item) => {
            if (item != undefined) {
                item = JSON.parse(item);
                console.log("User", item)
                setTimeout(() => { replace("HomeStackNavigator") }, 2000)
            }
            else {
                setTimeout(() => { replace("AuthStackNavigator") }, 2000)
            }
        })
        .done();
  
}



export const login = (userData, callback) => {
    return async (dispatch) => {
        try {
            console.log("user data",'/users?_username='+userData.email+'&_password='+userData.password);
             Get('/users?_username='+userData.email+'&_password='+userData.password).then(async response => {
                if (response != undefined) {
                    console.log("res");
                    if (response.ok) {
                        let res = await response.json();

                        // dispatch(setData(types.USER_TOKEN, res))
                        AsyncStorage.setItem("User",JSON.stringify({User:  res}))
                        callback({ ok: true, data: res })
                    }
                    else {
                        callback({ ok: false, data:"تأكد من الاسم وكلمة المرور" })
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


export const GetUserData = (callback) => {
    return async (dispatch) => {
        try {
            console.log("Enter Get User Data")
             Get('/V1/customers/me', true).then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    console.log(res);
                    if (response.ok) {
                        // dispatch(setData(types.USER_TOKEN, res))
                        await AsyncStorage.setItem("User",JSON.stringify({user:  res}))
                        callback({ ok: true, data: "" })
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



export const ActivateAccount = (userData, callback) => {
    return async (dispatch) => {
        try {
                    
             Put('/V1/customers/me/activate',{
                confirmationKey: userData.confirmationKey,
            },false).then(async response => {
                if (response != undefined) {
                    let res = await response.json();

                    if (response.ok) {
                        dispatch(setData(types.ACTIVATE_USER, res))
                        AsyncStorage.setItem("UserToken",JSON.stringify({account:  res}))
                        callback({ ok: true, data: "" })
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


export const ValidateEmail = (userData, callback) => {
    return async (dispatch) => {
        try {
             Post('/V1/customers/isEmailAvailable',userData).then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    console.log(res);
                    if (response.ok) {
                        // dispatch(setData(types.USER_TOKEN, res))
                        // AsyncStorage.setItem("UserToken",JSON.stringify({token:  res}))
                        callback({ ok: true, data: "" })
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

export const ForgetPassword = (userData, callback) => {
    return async (dispatch) => {
        try {
            console.log("User Data For Forget", userData)
             Put('/V1/customers/password',userData,false).then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    console.log(res);
                    if (response.ok) {
                        // dispatch(setData(types.USER_TOKEN, res))
                        // AsyncStorage.setItem("UserToken",JSON.stringify({token:  res}))
                        callback({ ok: true, data: "" })
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

export const ChangePassword = (userData, callback) => {
    return async (dispatch) => {
        try {
            console.log("User Data For change", userData)
             Put('/V1/customers/me/password',userData,true).then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    console.log(res);
                    if (response.ok) {
                        callback({ ok: true, data: "" })
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


export const SignUp = (userData, callback) => {
    return async (dispatch) => {
        console.log("Data of User",userData);
        try {
             Post('/V1/customers',userData).then(async response => {
                if (response != undefined) {
                    let res = await response.json();
                    console.log(res);
                    if (response.ok) {
                        dispatch(setData(types.GET_USER, res))
                        AsyncStorage.setItem("USER",JSON.stringify({userData:  res}))
                        callback({ ok: true, data: "" })
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