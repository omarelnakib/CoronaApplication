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

});

export default Style;