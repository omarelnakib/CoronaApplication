import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../assets/constants/Colors';

const {height, width} = Dimensions.get('window');

const Style = StyleSheet.create({
    container: {
      width:'100%',
      height:'100%',
      backgroundColor:Colors.light,
    //   padding:10
    },
    bodyContainer:{
      paddingHorizontal:20,
      paddingTop:30,
    //   marginBottom:'',
      width:'100%',
      height:height-70 , //70 is the height of header,
    //   justifyContent:'center'
    },
    title: {
      color: Colors.textGray,
      marginTop:10,
      textAlignVertical:'center'
  },
  inputTextStyle: {
    width: '100%',
    borderWidth:1,
    borderRadius:15,
    // elevation:0.5,
    marginVertical:20,
    borderColor:Colors.secondary,
    // marginBottom: 20
},
textStyle:{
  height:'100%',
  width:'100%',
  paddingHorizontal:10,
  // flex:0.8
},
});

export default Style;