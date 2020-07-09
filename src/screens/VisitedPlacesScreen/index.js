import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Style from './style'
import Header from '../../components/Header'
import InputText from '../../components/InputText';
import RoundButton from '../../components/RoundButton';
import Colors from '../../assets/constants/Colors';
import { IconButton } from 'react-native-paper';
import MultiSelect from 'react-native-multiple-select';

const { height, width } = Dimensions.get('window');

const VisitedPlacesScreen = props => {

    const [visitedPlaces, setVisitedPlaces] = React.useState([]);
    const [place, setPlace] = React.useState('')
    const items = [
        { id: '1', name: 'كلية حاسبات' },
        { id: '2', name: 'كلية هندسة' },
        { id: '3', name: 'كلية علوم' },
        { id: '4', name: 'ادارة الجامعة' },
        { id: '5', name: 'شئون الطلبة' },
        { id: '6', name: 'شئون هيئة التدريس' },
        { id: '7', name: 'المكتبة العامة' },

    ];
    onSelectedItemsChange = selectedItems => {
        setVisitedPlaces(selectedItems);
        //Set Selected Items
    };

    const addPlace = () => {
        if (place != '') {
            let tempList = [...visitedPlaces];
            tempList.push(place);
            setPlace('');
            setVisitedPlaces([...tempList])
            console.log(visitedPlaces)
        }
    }
    const removePlace = (itemIndex) => {
        let tempList = [...visitedPlaces];
        tempList.splice(itemIndex, 1);
        setVisitedPlaces([...tempList])

    }
    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='اماكن الزيارة' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
            <ScrollView style={Style.bodyContainer}>

                {/* place Part */}
                <Text style={Style.title}>{'هل قمت بزيارة اماكن معينة في نطاق الجامعة اخر 14 يوم؟'}</Text>
                {/* <InputText inputType='TextInput' Icon={'plus'} IconColor={Colors.primary} iconStyle={Style.iconStyle}
                    value={place} HandleChange={(e) => { setPlace(e) }}
                    style={Style.inputTextStyle}
                    textStyle={Style.textStyle}
                    handleEvent={()=>addPlace()}
                    secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
                ></InputText> */}

                <MultiSelect
                    hideTags
                    items={items}
                    uniqueKey="id"
                   
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={visitedPlaces}
                    selectText="اختر اماكن"
                    searchInputPlaceholderText="ابحث عن مكان..."
                    onChangeInput={text => console.log(text)}
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#000"
                    selectedItemIconColor="#ccc"
                    itemTextColor="#ccc"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor={Colors.primary}
                    submitButtonText="اختر"
                />
                {/* button part */}
                {/*Save In Button  */}
                <RoundButton style={{ marginTop: 10 }} value="تسجيل الاماكن"></RoundButton>

            </ScrollView>
        </View>
    );
}


export default VisitedPlacesScreen;



