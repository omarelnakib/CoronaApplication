import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontSizes from '../../assets/constants/FontSizes'
import Colors from '../../assets/constants/Colors';
const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:Colors.light,
        alignItems:'center',
        justifyContent:'center'
    },
    ButtonStyle:{
        backgroundColor:Colors.primary,
        width:'80%',
        margin:10,
        padding:10,
        borderRadius:20
    },
    ButtonText:{
        color:Colors.light,
        textAlign:'center',
        fontSize:FontSizes.subtitle
    }
});


export default styles;

