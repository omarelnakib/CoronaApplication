import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import Style from './style';
import ImagesPaths from '../../assets/constants/ImagesPaths'
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes'
import { validateForm, validate } from '../../Validation/Validation';
import DatePicker from 'react-native-datepicker'

import InputText from '../../components/InputText';
import RoundButton from '../../components/RoundButton';
import { IconButton } from 'react-native-paper';
const { height, width } = Dimensions.get('window');

const RegisterForm = props => {
    const [ScreenHeight, setScreenHeight] = useState(height);
    const [ScreenWidth, setScreenWidth] = useState(width);
    const [Mobile, setMobile] = React.useState({ value: '', IsValid: '' });
    const [Passowrd, setPassword] = React.useState({ value: '', IsValid: '' });
    const [ComputerNumber, setComputerNumber] = React.useState({ value: '', IsValid: '' });
    const [Id, setId] = React.useState({ value: '', IsValid: '' });
    const [Name, setName] = React.useState({ value: '', IsValid: '' });
    const [Date, setDate] = React.useState('2016-05-01');
    const [Address, setAddress] = React.useState('')
    // ---------------------------------------------------
    const changePasswod = event => {

        let result = validate('password', event);
        setPassword({ value: event, IsValid: result.IsValid });
    };

    const changeData = (event, itemName) => {
        switch (itemName) {
            case 'Mobile': {
                //remove spaces 
                let ev = event.replace(/\s/g, '');
                console.log(ev)
                let result = validate('phone', ev);
                setMobile({ value: ev, IsValid: result.IsValid });
                break;
            }
            case 'password': {
                let result = validate('password', event);
                setPassword({ value: event, IsValid: result.IsValid });
                break;
            }
            case 'Name': {
                let result = validate('name', event);
                setName({ value: event, IsValid: result.IsValid });
                break;
            }
           
            case 'ComputerNumber': {
                // let result = validate('password', event);
                setComputerNumber({ value: event, IsValid: true });
                break;
            }
            case 'Id': {
                let result = validate('id', event);
                setId({ value: event, IsValid: result.IsValid });
                break;
            }
            case 'Address': {
                setAddress( event);
                break;
            }
        }
    }
   
    return (
        <ScrollView style={styles.formContainer}>
            {/* Register Form */}
            {/* Name */}
            <Text style={styles.title}>الاسم</Text>
            <InputText inputType='TextInput' placeholder='الاسم'
                value={Name.value} HandleChange={(event) => changeData(event, 'Name')}
                style={{ width: '100%' }} Isvalid={Name.IsValid}
                secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
            ></InputText>
            {/* Mobile Numbrt */}
            <Text style={styles.title}>رقم الموبيل</Text>
            <InputText inputType='TextInput' placeholder='رقم الموبيل'
                value={Mobile.value} HandleChange={(event) => changeData(event, 'Mobile')}
                style={{ width: '100%' }} Isvalid={Mobile.IsValid}
                secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
            ></InputText>
            {/* Password */}
            <Text style={styles.title}>كلمة السر</Text>
            <InputText inputType='TextInput' placeholder='كلمة السر'
                value={Passowrd.value} HandleChange={(event) => changeData(event, 'password')}
                style={{ width: '100%' }} Isvalid={Passowrd.IsValid}
                secureTextEntry={true} autoCapitalize="none" autoCorrect={false}
            ></InputText>
            {/* Computer Number */}
            {/* <Text style={styles.title}>رقم الكمبيوتر</Text>
            <InputText inputType='TextInput' placeholder='رقم الكمبيوتر'
                value={ComputerNumber.value} HandleChange={(event) => changeData(event, 'ComputerNumber')}
                style={{ width: '100%' }} Isvalid={ComputerNumber.IsValid}
                secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
            ></InputText> */}
            {/* National ID */}
            <Text style={styles.title}>الرقم القومي</Text>
            <InputText inputType='TextInput' placeholder='الرقم القومي'
                value={Id.value} HandleChange={(event) => changeData(event, 'Id')}
                style={{ width: '100%' }} Isvalid={Id.IsValid}
                autoCapitalize="none" autoCorrect={false}
            ></InputText>
            

            {/* <Text style={styles.title}>العنوان</Text> */}
            {/* <View style={{flexDirection:'row',width:'100%'}}> */}

            {/* <InputText inputType='TextInput' placeholder='العنوان'
                value={Address.value} HandleChange={(event) => changeData(event, 'Address')}
                style={{ flex:1 }} Isvalid={Address.IsValid}
                autoCapitalize="none" autoCorrect={false}
            ></InputText>
      <IconButton  style={{left:0,top:-16,position:'absolute'}}  size={35} icon={'map-marker-circle'} color={Colors.primary}/>

            </View>  */}
            {/* Date */}
            <Text style={styles.title}>تاريخ الميلاد</Text>
            <DatePicker
        style={{width: '100%'}}
        date={Date}
        mode="date"
        placeholder="اختر تاريخ"
        format="YYYY-MM-DD"
        minDate="1990-01-01"
        maxDate="2020-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            display:'none'     
          },
          dateInput: {
            marginLeft: 36,
            borderWidth:0
          },
        }}
        onDateChange={(date) => {setDate(date) }}
      />
            {/*Sign Up Button  */}
            <RoundButton  handleClick={()=>{props.nav.navigate('DrawerNavigator')}} style={{marginTop:50}} value="تسجيل"></RoundButton>

        </ScrollView>

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
    SignUp: {
        alignSelf: 'center',
        color: Colors.primary,
        fontSize: FontSizes.subtitle,
        marginTop: 15
    }
})
export default RegisterForm;
