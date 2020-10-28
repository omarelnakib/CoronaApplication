import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Picker } from 'react-native';
import Colors from '../assets/constants/Colors';
import { IconButton } from 'react-native-paper';
import RoundButton from './RoundButton';

const ReportItem = props => {
  
    return (
        <View style={styles.container}>
            <View style={{flex:0.7}}>
            <Text style={{textAlign:'right'}}>{props.name}</Text>
            <Text style={{textAlign:'right'}}>{props.number}</Text>
            <Text style={{textAlign:'right'}}>{props.date}</Text>
            </View>
            <View style={{flex:0.3,justifyContent:'center'}}>
            <RoundButton style={{marginTop:0,width:'100%',paddingVertical:5}}  value="تابع" ></RoundButton>
            </View>
        </View>
  );
};
const styles = StyleSheet.create({
container:{
    borderWidth:1,
    borderRadius:10,
    borderColor:Colors.primary,
    marginVertical:5,
    marginHorizontal:10,
    flexDirection:'row-reverse',
    padding:10
}
 
});

export default ReportItem;

