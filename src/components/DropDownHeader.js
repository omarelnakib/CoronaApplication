import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Picker, TouchableOpacity } from 'react-native';
import Colors from '../assets/constants/Colors';
import { IconButton } from 'react-native-paper';
import RoundButton from './RoundButton';
import moment from 'moment';
import FontSizes from '../assets/constants/FontSizes';
import { color } from 'react-native-reanimated';

const DropDownHeader = props => {

    return (
        <TouchableOpacity onPress={props.handleClick} style={styles.container}>
            <View style={{flex:1,flexDirection:'row-reverse',alignItems:'center',paddingHorizontal:10,backgroundColor:Colors.primary}}>
           
            <Text style={styles.headerTextStyle}>{props.headerText}</Text>
            <IconButton icon={'chevron-left'} size={25}  color={Colors.light} />

            </View>
        </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
container:{
    width:'80%',
    borderWidth:1,
    borderTopLeftRadius:150,
    borderBottomLeftRadius:150,
    borderColor:Colors.primary,
    marginVertical:5,
    flexDirection:'row-reverse',
    alignSelf:'flex-end',
    overflow:'hidden'
},
headerTextStyle:{
    fontSize:FontSizes.title,
    color:Colors.light,
    flex:0.9
},

 
});

export default DropDownHeader;

