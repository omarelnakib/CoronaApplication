import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../assets/constants/Colors';
const Styles = StyleSheet.create({
 title:{
    fontSize:18,
 },
 paragraph:{
    fontSize:16,
    color:Colors.secondary,
    textAlign:'right'
 },
 container:{
     borderBottomWidth:1,
     borderColor:Colors.secondary,
     paddingVertical:20,
     paddingHorizontal:20,
     
 } 
});

const NumberItem = props => {
 return(
     <View style={[Styles.container,props.style]}>
         <Text style={Styles.title}>{props.title}</Text>
         <Text style={Styles.paragraph}>{props.paragraph}</Text>
     </View>
  );
};

export default NumberItem;

