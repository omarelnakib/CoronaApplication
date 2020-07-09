import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Dimensions, TouchableOpacity, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import Style from './style';
import ImagesPaths from '../../assets/constants/ImagesPaths'
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes'
import LoginForm from './LoginForm';
const { height, width } = Dimensions.get('window');

const Login = props => {
  const [ScreenHeight, setScreenHeight] = useState(height);
  const [ScreenWidth, setScreenWidth] = useState(width);

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
          <Image style={{ width: '40%', height: "30%", marginTop: '-5%', marginBottom: '5%', alignSelf: 'center', resizeMode: 'contain' }} source={ImagesPaths.LoginLogo} />
          <Text style={{ textAlign: 'center', color: Colors.light, fontSize: FontSizes.header }}>صحتك تهمنا</Text>
          <Text style={{ textAlign: 'center', color: Colors.light, fontSize: FontSizes.header }}>صحة عين شمس</Text>
        </ImageBackground>
        {/* Login Form */}
        <LoginForm nav={props.navigation}></LoginForm>
        
        <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Image style={{width:50,height:50,resizeMode:'contain',margin:20}} source={ImagesPaths.ASULogo}/>
                        <Image  style={{width:50,height:50,resizeMode:'contain',margin:20}} source={ImagesPaths.FCISLogo}/>
                    </View>
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
export default Login;
