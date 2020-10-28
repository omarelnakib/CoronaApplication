import React from 'react';
import {View, Text ,StyleSheet,TouchableOpacity} from 'react-native';
import Color from '../assets/constants/Colors';
import FontSizes from '../assets/constants/FontSizes';

const Styles = StyleSheet.create({
    Container:{
        flex: 0,
        backgroundColor:Color.secondary,
        borderRadius:50,
        paddingVertical:10,
        marginTop:80,
        width:'80%',
        alignSelf:'center'
    },

    title:{
        fontSize:FontSizes.subtitle,
        textAlign:'center',
        letterSpacing:1,
        color:Color.light
        
    },
});

const RoundButton = props => {
    return (
        <View style={{...Styles.Container,...props.style}}>
     
            <TouchableOpacity disabled={props.disabled} style={props.buttonStyle} onPress={props.handleClick}>
                <Text style={Styles.title}>{props.value}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RoundButton;

