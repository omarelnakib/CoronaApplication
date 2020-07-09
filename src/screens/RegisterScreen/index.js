import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Dimensions, TouchableOpacity, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import Style from './style';
import ImagesPaths from '../../assets/constants/ImagesPaths'
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes'
import RegisterForm from './RegisterForm';
const { height, width } = Dimensions.get('window');

const RegisterScreen = props => {
  const [ScreenHeight, setScreenHeight] = useState(height);
  const [ScreenWidth, setScreenWidth] = useState(width);
console.log('register')
  const _navigate = (event) => {
    props.navigation.navigate(event);
  };
  useEffect(() => {

    //get screen dimensions
    const updateDimensions = () => {
      setScreenHeight(Dimensions.get('window').height);
      setScreenWidth(Dimensions.get('window').width);
    }
    //when orientation of screen changes, get updated width & height
    Dimensions.addEventListener('change', updateDimensions);
    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    }
  });


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <ScrollView style={{ backgroundColor: Colors.light, height: '100%' }}>
      <KeyboardAvoidingView>
      <View style={{ backgroundColor: Colors.light, height: '100%' }}>
        {/* top design part */}
        <ImageBackground source={ImagesPaths.LoginEllips} imageStyle={Style.EllipsStyle} style={Style.EllipsContainerStyle}>
          <Image style={{ width: '40%', height: "30%", marginTop: '-15%', marginBottom: '5%', alignSelf: 'center', resizeMode: 'contain' }} source={ImagesPaths.LoginLogo} />
          <Text style={{ textAlign: 'center', color: Colors.light, fontSize: FontSizes.header }}>صحتك تهمنا</Text>
        </ImageBackground>
        {/* Register Form */}
        <RegisterForm nav={props.navigation}></RegisterForm>
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
export default RegisterScreen;
