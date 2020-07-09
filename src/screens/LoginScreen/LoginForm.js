import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import Style from './style';
import ImagesPaths from '../../assets/constants/ImagesPaths'
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes'
import { validateForm, validate } from '../../Validation/Validation';

import InputText from '../../components/InputText';
import RoundButton from '../../components/RoundButton';
const { height, width } = Dimensions.get('window');

const LoginForm = props => {
    const [ScreenHeight, setScreenHeight] = useState(height);
    const [ScreenWidth, setScreenWidth] = useState(width);
    const [Mobile, setMobile] = React.useState({ value: '', IsValid: '' });
    const [Passowrd, setPassword] = React.useState({ value: '', IsValid: '' });
    // ---------------------------------------------------
    const changePasswod = event => {

        let result = validate('password', event);
        setPassword({ value: event, IsValid: result.IsValid });
    };

    const changeMobile = event => {
        console.log(event)
        let result = validate('phone', event);
        setMobile({ value: event, IsValid: result.IsValid });
    };
    return (
        <View style={styles.formContainer}>
            {/* Mobile Number */}
            <Text style={styles.title}>رقم الموبيل</Text>
            <InputText inputType='TextInput' placeholder='رقم الموبيل'
                value={Mobile.value} HandleChange={changeMobile}
                style={{ width: '100%' }} Isvalid={Mobile.IsValid}
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
            <RoundButton value="تسجيل دخول" handleClick={()=>{props.nav.navigate('DrawerNavigator')}}></RoundButton>

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
        marginTop: 25
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
