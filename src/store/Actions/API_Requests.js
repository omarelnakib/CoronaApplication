import * as types from '../ActionTypes';
// import APIConstant, { Post, Get, setData, getetHeaders, getToken } from "./APIConstant";
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { navigate, replace, reset } from "../../navigations/NavigationService";
import {  ToastAndroid,
    Platform,
    AlertIOS, } from 'react-native';
import { toast } from '../../assets/constants/Toaster';

const BaseUrl = "https://healthcare.cis.asu.edu.eg/healthapis/api";
// const Globals = require('../../constants/Globals');

export const getHeaders = async (isToken,isFormData) => {
    let headers = {};
   return AsyncStorage.getItem('User')
    .then((item) => {
        if (item != undefined) {
            item = JSON.parse(item);
            console.log("UserToken", item);
            // return item.token;

            console.log("This Header with token,", item.User.AuthenticationToken);
           
            if(isToken)
            {
                if(isFormData)
                headers = {
                    "Content-Type": "multipart/form-data",
                };

                else
                headers = {
                    "Content-Type": "application/json",
                    Accept: 'application/json',
                };
                headers.AccessToken = `${item.User.AuthenticationToken}`;

                return headers;

            }
            else
            {
                if(isFormData)
                headers = {
                    "Content-Type": "multipart/form-data",
                };

                else
                headers = {
                    "Content-Type": "application/json",
                    Accept: 'application/json',
                };

               return headers;

            }
             
        }
        else {
            if(isFormData)
            headers = {
                "Content-Type": "multipart/form-data",
            };

            else
            headers = {
                "Content-Type": "application/json",
                Accept: 'application/json',
            };
            console.log("hi",headers)
            return headers;
        }
    })
    // .done();
   
    //   if (isToken) {
    //     headers.Authorization = `${token}`;
    //   }
  };

  export const getToken = async () => {
    try {
      let token = await AsyncStorage.getItem('UserToken')
      .then((item) => {
          if (item != undefined) {
              item = JSON.parse(item);
              console.log("UserToken", item);
              return item.token;
          }
          else {
              return null;
          }
      })
      .done();
      return token;
    } catch (err) {
      console.log(err);
    }
  };

// const getLang = async() => {
//     AsyncStorage.getItem("Lang")
//         .then((item) => {
//             if (item != undefined) {
//                 item = JSON.parse(item);
//                 console.log("Language", item.lang)
//                 //    I18n.locale = item.lang
//                 console.log("Doaa", item.lang.toLowerCase().includes('en'))
//                 if (item.lang.toLowerCase().includes('en'))
//                     return 'en';
//                 else
//                     return 'ar';
//             }
//         })
//         .done();
// }


export const Get = async(url,isTokenRequired) => {
        try {
            // getLang().then(async (lang) => {
            const response = await fetch(`${BaseUrl}${url}`, {
                method: "GET",
                headers: await getHeaders(isTokenRequired,false),

                //      headers:{
                //         "Content-Type": "application/json",
                //         "Accept": "application/json",
                    
                //  }

            });

            console.log("This is response from api", response)
            if(response.status==401){
                // toast("انتهت صلاحية الحساب رجاءا اعادة تسجيل الدخول")
                if (Platform.OS === 'android') {
                    ToastAndroid.show(msg, ToastAndroid.SHORT)
                  } else {
                    AlertIOS.alert(msg);
                  }
                reset("AuthStackNavigator")

            }
        
        
            return response;
            // }).done();
        } catch (err) {
            console.log(err.message);
            return undefined;
        }

};

export const GetWith = async(url,data,isTokenRequired) => {
    console.log("entered get method")
        try {
            const response = await fetch(`${BaseUrl}${Globals.Language}${url}${data}`, {
                method: "GET",
                headers: await getHeaders(isTokenRequired,false),
            });

            console.log("This is response from api", response)
            if(response.status==401){
                // toast("انتهت صلاحية الحساب رجاءا اعادة تسجيل الدخول")
                if (Platform.OS === 'android') {
                    ToastAndroid.show(msg, ToastAndroid.SHORT)
                  } else {
                    AlertIOS.alert(msg);
                  }
                reset("AuthStackNavigator")

            }
            return response;

        } catch (err) {
            console.log(err.message);
            return undefined;
        }
};

export const Post = async(url,Data,isTokenRequired) => {
    console.log("header",await getHeaders(isTokenRequired,false))
    try {
       return getHeaders(isTokenRequired,false).then(async(header)=>{
            console.log(header)
            const response = await fetch(`${BaseUrl}${url}`, {
                method: "POST",
                headers: header ,
            //    headers:  {
            //         Accept: 'application/json',
            //         "Content-Type": "application/json",
            //     },
                body: JSON.stringify(Data)
            });
    
            console.log("This is response from api", response)
            if(response.status==401){
                // toast("انتهت صلاحية الحساب رجاءا اعادة تسجيل الدخول")
                if (Platform.OS === 'android') {
                    ToastAndroid.show(msg, ToastAndroid.SHORT)
                  } else {
                    AlertIOS.alert(msg);
                  }
                reset("AuthStackNavigator")

            }
            return response;
        })
        

    } catch (err) {
        console.log(err.message);
        return undefined;
    }
};
export const PostFormData = async(url,Data,isTokenRequired) => {
    console.log("url",url)
    console.log("Data",Data)
    try {
        const response = await fetch(`${BaseUrl}${url}`, {
            method: "POST",
            headers:await getHeaders(isTokenRequired,true),
            body:Data
        });

        console.log("This is response from api", response)
        if(response.status==401){
            // toast("انتهت صلاحية الحساب رجاءا اعادة تسجيل الدخول")
            if (Platform.OS === 'android') {
                ToastAndroid.show(msg, ToastAndroid.SHORT)
              } else {
                AlertIOS.alert(msg);
              }
            reset("AuthStackNavigator")

        }
        return response;

    } catch (err) {
        console.log(err.message);
        return undefined;
    }
};
export const GetBy = async(url,Data, isTokenRequired) => {
    console.log("entered get method")
        try {
            const response = await fetch(`${BaseUrl}${Globals.Language}${url}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Data)
            });

            console.log("This is response from api", response)
            return response;

        } catch (err) {
            console.log(err.message);
            return undefined;
        }
};

export const Put = async(url,Data, isTokenRequired) => {
    console.log("entered get method")
        try {
            const response = await fetch(`${BaseUrl}${Globals.Language}${url}`, {
                method: "PUT",
                headers: getHeaders(isTokenRequired),
                body: JSON.stringify(Data)
            });

            console.log("This is response from api", response)
            return response;

        } catch (err) {
            console.log(err.message);
            return undefined;
        }
};

export const Delete = async(url,Data, isTokenRequired) => {
    console.log("entered get method")
        try {
            const response = await fetch(`${BaseUrl}${Globals.Language}${url}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Data)
            });

            console.log("This is response from api", response)
            return response;

        } catch (err) {
            console.log(err.message);
            return undefined;
        }
};


export const setData = (actionType, data) => {
    return {type: actionType, data: data};
}