import React, { useEffect, useState } from 'react';
import { View, Dimensions, ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import Style from './style';
import ImagesPaths from '../../assets/constants/ImagesPaths'
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes'
import Header from '../../components/Header'
import PostItem from '../../components/PostItem'
import { IconButton } from 'react-native-paper';
const { height, width } = Dimensions.get('window');
import ImagePicker from 'react-native-image-picker';
import ImageModal from 'react-native-image-modal';
import InputText from '../../components/InputText';
import MultiSelect from 'react-native-multiple-select';
import RoundButton from '../../components/RoundButton';
import { validateForm, validate } from '../../Validation/Validation';

const MedicalVacationScreen = props => {
  const [Id, setId] = React.useState({ value: '29505230105684', IsValid: 'success' });
  const [Name, setName] = React.useState({ value: 'أحمد محمد', IsValid: 'success' });
  const [Phone, setPhone] = React.useState({ value: '01112243840', IsValid: 'success' });
  const items = [
    { id: '1', name: 'كلية الحاسبات والمعلومات' },
    { id: '2', name: 'كلية هندسة' },
    { id: '3', name: 'كلية علوم' },
    { id: '4', name: 'إدارة الجامعة' },
    { id: '5', name: 'مكتب شئون الطلبة, كلية الحاسبات والمعلومات' },
    { id: '6', name: 'شئون هيئة التدريس, كلية الحاسبات والمعلومات' },
    { id: '7', name: 'المكتبة العامة' },

];
const [location, setLocation] = React.useState([]);

  const [imgs, setImgs] = useState([]);
  const options = {
    title: 'اختر صورة',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const changeData = (event, itemName) => {
    switch (itemName) {
        case 'Mobile': {
            //remove spaces 
            let ev = event.replace(/\s/g, '');
            console.log(ev)
            let result = validate('phone', ev);
            setPhone({ value: ev, IsValid: result.IsValid });
            break;
        }

        case 'Name': {
            let result = validate('name', event);
            setName({ value: event, IsValid: result.IsValid });
            break;
        }

        case 'Id': {
            let result = validate('id', event);
            setId({ value: event, IsValid: result.IsValid });
            break;
        }
    }
}
  // show Image Picker
  const showImagePicker = () => {


    ImagePicker.showImagePicker(options, (response) => {

      // Launch Camera:console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log(source)

        let tempImgs = [...imgs];
        tempImgs.push(source)
        setImgs([...tempImgs])
      }
    });
  }
  const onSelectedItemsChange = selectedItems => {
    setLocation(selectedItems);
    //Set Selected Items
};
  return (
    <View style={Style.container}>
      {/* Header */}
      <Header style={{ height: 70 }} leftIcon='back' title='تقديم طلب أجازة'
        HandleBack={() => props.navigation.pop()}
      ></Header>
      <ScrollView style={{padding:20,paddingTop:10}}>
           {/* Name */}
           <Text style={Style.title}>الإسم</Text>
            <InputText inputType='TextInput' placeholder='الإسم'
                value={Name.value} HandleChange={(event) => changeData(event, 'Name')}
                style={{ width: '100%' }} Isvalid={Name.IsValid}
                autoCapitalize="none" autoCorrect={false}
            ></InputText>
              {/* Phone */}
           <Text style={Style.title}>الرقم القومي</Text>
            <InputText inputType='TextInput' placeholder='الرقم القومي'
                value={Id.value} HandleChange={(event) => changeData(event, 'Id')}
                style={{ width: '100%' }} Isvalid={Id.IsValid}
                autoCapitalize="none" autoCorrect={false}
            ></InputText>
              {/* National ID */}
           <Text style={Style.title}>رقم الهاتف</Text>
            <InputText inputType='TextInput' placeholder='رقم الهاتف'
                value={Phone.value} HandleChange={(event) => changeData(event, 'Mobile')}
                style={{ width: '100%' }} Isvalid={Phone.IsValid}
                autoCapitalize="none" autoCorrect={false}
            ></InputText>
             <Text style={[Style.title,{paddingBottom:10}]}>جهة العمل</Text>
              <MultiSelect
                    hideTags
                    items={items}
                    uniqueKey="id"
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={location}
                    selectText="اختر جهة العمل"
                    searchInputPlaceholderText="ابحث عن مكان..."
                    
                    onChangeInput={text => console.log(text)}
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#000"
                    selectedItemIconColor="#ccc"
                    itemTextColor="#ccc"
                    displayKey="name"
                    hideSubmitButton={true}
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor={Colors.primary}
                    submitButtonText="اختر"
                    single={true}
                />
             <Text style={[Style.title,{paddingBottom:10}]}>اضافة صورة من التقرير الطبي</Text>

                <View style={{ flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
        {imgs.map((item, index) => {
          // Image Picker
          return (
            <ImageModal
              swipeToDismiss={true}
              resizeMode="contain"
              imageBackgroundColor={Colors.light}
              style={{
                width: 150,
                height: 150,
                margin: 10
              }}
              source={item}
            />

          )

        })}
        {/* add photo icon */}
        <IconButton icon={'plus'} style={{ borderWidth: 1, borderColor: Colors.primary, alignSelf: 'center' }} color={Colors.primary} onPress={() => { showImagePicker() }} />
      </View>
               {/* button part */}
                {/*Save In Button  */}
                <RoundButton style={{ marginTop:0,marginVertical: 20 }} handleClick={() => { props.navigation.navigate('HomeScreen') }} value="تسجيل الطلب"></RoundButton>

      </ScrollView>
      
    </View>
  )
}
export default MedicalVacationScreen;
