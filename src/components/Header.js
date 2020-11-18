import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Subtitle,

  Icon,
  Title,
  Text,
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagesPaths from '../assets/constants/ImagesPaths';
import { Button, IconButton } from 'react-native-paper';
import Colors from '../assets/constants/Colors';
import InputText from './InputText';

//general component of all screen headers with ability to choose  which icons to appear
const MainHeader = props => {

  return (
    <Header
    // row reverse for arabic to reverse the direction
      style={{ ...{ backgroundColor: Colors.primary, flexDirection: 'row-reverse'  }, ...props.style }}
      androidStatusBarColor={Colors.primary}
      noShadow={props.noshadow}
      transparent={props.transparent}>
      {/* left */}
      <Left style={{ flex: 0.15,}}>
        {
          // back button
          props.leftIcon == 'back' ? (
            <IconButton icon="chevron-left" size={25} color={Colors.light} onPress={props.HandleBack} style={[ Styles.iconInverse ]} >
            </IconButton>

          )
          // close button
            : props.leftIcon == 'close' ? (
              <IconButton icon="close" size={25} color={Colors.light} onPress={props.HandleBack} style={[Styles.iconInverse ]} >
              </IconButton>

            ) :
            // menu button
            props.leftIcon == 'menu' ? (
              <IconButton icon="menu" size={25} color={Colors.light} onPress={props.HandleBack} style={[ Styles.iconInverse ]} >
              </IconButton>
  
            ) :
             // menu button
             props.leftIcon == 'home' ? (
              <IconButton icon="home" size={25} color={Colors.light} onPress={props.HandleBack} style={[ Styles.iconInverse ]} >
              </IconButton>
  
            )
            // account button
            :props.leftIcon == 'account' ? (
                <IconButton icon="account" size={25} color={Colors.light} onPress={props.HandleBack} style={[ Styles.iconInverse,{borderWidth:1,borderColor:Colors.light} ]} >
                </IconButton>
    
              ):
            null
        }
      </Left>
      {/* content */}
      <Body style={[{ flex: 0.85, flexDirection: 'row-reverse' , alignItems: 'center' },  Styles.rightIcon ]}>
        {props.SearchBar &&  
        // search bar part
            <View style={[Styles.SearchContainer,{flexDirection: 'row-reverse' }]}>
              <InputText value={props.searchValue} HandleChange={(e) => props.onChange(e)} style={Styles.inputStyle} inputType="TextInput"  placeholder={'بحث...'}/>
              <IconButton icon='magnify' color={Colors.secondary} size={25} style={Styles.iconStyle} />

            </View>
          }
          {/* title of screen */}
        {props.title && <View style={[{ width: '60%', justifyContent: 'center', alignSelf: 'center', alignItems:'flex-end'  }, props.bodyStyle]}>
          {props.title && <Text style={Styles.title}>{props.title}</Text>}
          {props.Subtitle ? <Subtitle>{props.Subtitle}</Subtitle> : null}
         
        </View>
}
        {/* Right */}
        {props.rightIcon && <View style={{ width: props.SearchBar != undefined ? '20%' : '50%' , marginLeft: 'auto' }}>
          
            <View style={{ flexDirection: 'row',
         }}>
           {/* notification icon */}
              {(props.rightIcon == 'general' || props.rightIcon.includes('notification')) &&  <TouchableOpacity onPress={props.onPressNotification}><IconButton icon='bell-outline' color={Colors.light} style={Styles.iconStyle} /></TouchableOpacity> }
           
              {(props.rightIcon == 'general' || props.rightIcon.includes('search'))       &&  <TouchableOpacity onPress={props.onPressSearch}><IconButton icon='magnify' color={Colors.light} style={Styles.iconStyle} /></TouchableOpacity> }
            </View>
        </View>}
         
      </Body>

    </Header>
  );
};

export default MainHeader;



const Styles = StyleSheet.create({
  Container: {
    flex: 0,
    width: '100%',
  },
  title: {
    fontFamily: 'barmeno-regular',
    fontSize: 18,
    letterSpacing: 1,
    color: Colors.light,


  },
  iconInverse: {
    transform: [{ scaleX: -1 }],
    marginLeft: 'auto'
  },
  rightIcon: {
   
    width: '100%'
  },
  iconStyle: {
    width: 25
  },
  SearchContainer:{
    width: '80%',
    height:40,
    backgroundColor: Colors.light,
    borderRadius: 50,
    borderWidth:0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle:{
    borderWidth: 0,
    borderBottomWidth:0
  }
});