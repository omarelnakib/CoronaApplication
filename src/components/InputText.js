import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Picker } from 'react-native';
import Colors from '../assets/constants/Colors';
import { IconButton } from 'react-native-paper';

/* props needed
 inputType : TextInput, else picker
if inputType = TextInput
  IsValid = success, error
  style
  Icon = path of image
   placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.HandleChange}
          secureTextEntry={props.secureTextEntry}
          autoCapitalize={props.autoCapitalize}
          autoCorrect={props.autoCorrect}
else inputType is picker
data
selectedValue={props.value}
onValueChange={props.handleChange}>

*/
const InputText = props => {
  let pickerItems;
  if (props.data != undefined)
    pickerItems = props.data.map((s, i) => {
      return <Picker.Item color={i != 0 ? Colors.darkgray : Colors.fontLightGray} key={i} value={s} label={s} />
    });
// console.log(i18n.locale)
  return (
    props.inputType == 'TextInput' ?
     <View style={[Styles.InputText, props.style, props.Isvalid === 'success' ? Styles.SuccessInput : (props.Isvalid === 'error') ? Styles.ErrorInput : null]}>
      { props.Icon ? <IconButton icon={props.Icon} size={30} onPress={props.handleEvent} color={props.IconColor} style={[Styles.icon,props.iconStyle]} /> : null}
     
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.HandleChange}
          secureTextEntry={props.secureTextEntry}
          autoCapitalize={props.autoCapitalize}
          autoCorrect={props.autoCorrect}
          style={[ {width: '100%',height:'100%',textAlignVertical:'top',textAlign:'right'},props.textStyle]}
        /> 
        </View>
         :  
      <View style={[Styles.InputPicker, props.style, props.Isvalid === 'success' ? Styles.SuccessInput : (props.Isvalid === 'error') ? Styles.ErrorInput : null]}>
      { props.Icon ? <Image source={props.Icon} style={Styles.icon} /> : null}
          <Picker
            selectedValue={props.value}
            style={{...Styles.pickerColor,...{width: props.Icon ? '85%' : '110%',color: props.value == 'City' || props.value== 'Region' ? Colors.fontLightGray : Colors.fontMidiumLightGray} }}
            mode='dropdown'
            onValueChange={props.handleChange} >
            {pickerItems}
            
          </Picker>
    </View>
  );
};
const Styles = StyleSheet.create({

  InputText: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#f0f0f0',
    shadowOffset: { width: 0, height: 1 },

    width: '80%',
    height: 40,
    borderBottomWidth:2,
    borderColor: Colors.lightgray,
    fontFamily: 'barmeno-regular',
    
  },
  InputPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#f0f0f0',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    width: '80%',
    marginTop: 30,
    height: 40,
    borderColor: 'transparent',
    fontFamily: 'barmeno-regular',
  },
  SuccessInput: {
    borderColor: Colors.primary,
    borderBottomWidth: 1
  },
  ErrorInput: {
    borderColor: Colors.error,
    borderBottomWidth: 1
  },
  icon: {
    
    marginHorizontal: 5
  },
  pickerColor:{
    color: Colors.placeholder
  }
});

export default InputText;

