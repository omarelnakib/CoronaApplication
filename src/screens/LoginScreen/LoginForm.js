import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import Style from './style';
import ImagesPaths from '../../assets/constants/ImagesPaths'
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes'
import { validateForm, validate } from '../../Validation/Validation';
import LoadingModel from '../../components/LoadingModel';

import { useDispatch } from 'react-redux';
import *as Action from '../../store/Actions/Auth';
import { toast } from '../../assets/constants/Toaster';

import InputText from '../../components/InputText';
import RoundButton from '../../components/RoundButton';
import User from '../../Models/User';
const { height, width } = Dimensions.get('window');

const LoginForm = props => {
    const dispatch = useDispatch();

    const [ScreenHeight, setScreenHeight] = useState(height);
    const [ScreenWidth, setScreenWidth] = useState(width);
    const [UserName, setUserName] = React.useState({ value: '', IsValid: '' });
    const [Passowrd, setPassword] = React.useState({ value: '', IsValid: '' });
    const [isLoading,setIsLoading] = useState(false);

    // ---------------------------------------------------
    const changePasswod = event => {

        let result = validate('password', event);
        setPassword({ value: event, IsValid: true});
    };

    const changeUserName = event => {
        console.log(event)
        let result = validate('phone', event);
        setUserName({ value: event, IsValid: true });
    };

    const SignIn = event =>{
         setIsLoading(true);
         
        dispatch(Action.login({email:UserName.value,password:Passowrd.value},(event)=>{
            console.log("Login",event);
            if(event.ok)
            {
                setIsLoading(false);

                props.nav.navigate('TabsNavigator')
            }
            else{
              setIsLoading(false);
              toast(event.data)
            }
           }))
        
    }
    return (
        <View style={styles.formContainer}>
                  <LoadingModel LoadingModalVisiblty={isLoading} />
            {/* Mobile Number */}
            <Text style={styles.title}>اسم الحساب</Text>
            <InputText inputType='TextInput' placeholder='اسم الحساب'
                value={UserName.value} HandleChange={changeUserName}
                style={{ width: '100%' }} Isvalid={UserName.IsValid}
                
                secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
            ></InputText>

            {/* Password */}
            <Text style={styles.title}>كلمة السر</Text>
            <InputText inputType='TextInput' placeholder='كلمة السر'
                value={Passowrd.value} HandleChange={changePasswod}
                style={{ width: '100%' }} Isvalid={Passowrd.IsValid}
                secureTextEntry={true} autoCapitalize="none" autoCorrect={false}
            ></InputText>


            {/* ForgetPassword Text Button
            {/* ----------------------------------------- */}
            {/* <TouchableOpacity onPress={() => { props.nav.navigate('ForgotPassword') }}>
                <Text style={styles.forgetPassword}> نسيت كلمة السر؟ </Text>
            </TouchableOpacity> */} 

            {/*Sign In Button  */}
            <RoundButton value="تسجيل دخول" handleClick={SignIn}></RoundButton>

            {/* Sign Up button */}
            <TouchableOpacity onPress={() => { props.nav.navigate('RegisterScreen') }}>
                <Text style={styles.SignUp}> تسجيل حساب جديد </Text>
            </TouchableOpacity>

        </View>

    )
}
const styles = StyleSheet.create({

    formContainer: {
        paddingHorizontal: 30
    },
    title: {
        color: Colors.primary,
        fontSize: FontSizes.subtitle,
        marginTop: 25,
        alignSelf:'flex-end'
    },
    forgetPassword: {
        alignSelf: 'flex-start',
        color: Colors.primary,
        fontSize: FontSizes.subtitle,
        marginTop: 5
    },
    SignUp:{
        alignSelf: 'center',
        color: Colors.primary,
        fontSize: FontSizes.subtitle,
        marginTop: 15 
    }
})
export default LoginForm;
