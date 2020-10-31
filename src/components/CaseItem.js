import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Picker, TouchableOpacity } from 'react-native';
import Colors from '../assets/constants/Colors';
import { IconButton } from 'react-native-paper';
import RoundButton from './RoundButton';
import moment from 'moment';

const CaseItem = props => {
  
    var date =moment(props.date).format('MM/DD/YYYY')
    console.log(props.date)
    return (
        <TouchableOpacity onPress={props.handleClick} style={styles.container}>
            <View style={{flex:0.7, padding:10}}>
           <View style={{flexDirection:'row-reverse'}}>
               <View style={{flex:0.5,justifyContent:'center'}}>
               <Text style={{textAlign:'right'}}>{props.caseType}</Text>
               </View>
               <View style={{flex:0.5,}}>
               <Text style={{textAlign:'left'}}>{props.number}</Text>
            <Text style={{textAlign:'left'}}>{date}</Text>
          
               </View>
             </View>
            </View>
            <View style={styles.status}>
            <Text style={{color:Colors.light}}>{props.status}</Text>
            </View>
        </TouchableOpacity>
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
    
},
status:{
    flex:0.3,
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:1,
    borderColor:Colors.secondary,
    backgroundColor:Colors.secondary,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
}
 
});

export default CaseItem;

