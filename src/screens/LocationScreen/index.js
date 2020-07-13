import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView, Picker } from 'react-native';
import Style from './style'
import Header from '../../components/Header'
import InputText from '../../components/InputText';
import RoundButton from '../../components/RoundButton';
import Colors from '../../assets/constants/Colors';
import { IconButton } from 'react-native-paper';
const { height, width } = Dimensions.get('window');

const LocationScreen = props => {

    const [mobile, setMobile] = useState('');
    const [region, setRegion] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [description,setDescription] = useState('')
    let locations = [
        {
            city: 'القاهرة',
            region:'العباسية',
            street:'ميدان العباسية'
        },
        {
            city: 'القاهرة',
            region:'المعادي',
            street:'شارع 9'
        },
        {
            city: 'القاهرة',
            region:'مصر الجديدة',
            street:'نبيل الوقاد'
        },
        {
            city: 'الجيزة',
            region:'الهرم',
            street:'شارع فيصل'
        },
        {
            city: 'الجيزة',
            region:'الهرم',
            street:'نزلة السمان'
        },

    ];
    const [selectedCity, setSelectedCity] = useState(locations[0].city);
    const [selectedRegion, setSelectedRegion] = useState(locations[0].region);
    const [selectedStreet, setSelectedStreet] = useState();
    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='العنوان' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
            <ScrollView style={Style.bodyContainer}>

                {/* City Part */}
                <Text style={Style.title}>{'المدينة'}</Text>
                <View style={{ borderColor: Colors.primary, borderWidth: 1, borderRadius: 20, width: '100%' }}>
                    <Picker
                        selectedValue={selectedCity}
                        style={{ borderWidth: 1, borderColor: Colors.primary, height: 40 }}
                        textStyle={{ color: Colors.primary }}
                        onValueChange={(itemValue, itemIndex) => {setSelectedCity(itemValue);setSelectedRegion([... new Set(locations.filter(location => location.city==itemValue).map(data=>data.region))][0])}}
                        mode='dropdown'
                    >
                        {
                            [... new Set(locations.map(data => data.city))].map((item)=>{
                              return(  <Picker.Item label={item} value={item} />)
                            })
                        }
                    </Picker>
                </View>
                {/* Region Part */}
                <Text style={Style.title}>{'المنطقة'}</Text>
                <View style={{ borderColor: Colors.primary ,borderWidth: 1, borderRadius: 20, width: '100%' }}>
                    <Picker
                        selectedValue={selectedRegion}
                        style={{ borderWidth: 1, borderColor: Colors.primary, height: 40 }}
                        textStyle={{ color: Colors.primary }}
                        onValueChange={(itemValue, itemIndex) => {setSelectedRegion(itemValue)}}
                        mode='dropdown'
                    >
                        {
                          [... new Set(locations.filter(location => location.city==selectedCity).map(data=>data.region))].map((item)=>{
                                  
                            return(  <Picker.Item label={item} value={item} />)
                            })
                        }
                    </Picker>
                </View>
                {/*Street Part */}
                <Text style={Style.title}>{'الشارع'}</Text>
                <View style={{ borderColor: Colors.primary ,borderWidth: 1, borderRadius: 20, width: '100%' }}>
                    <Picker
                        selectedValue={selectedStreet}
                        style={{ borderWidth: 1, borderColor: Colors.primary, height: 40 }}
                        textStyle={{ color: Colors.primary }}
                        onValueChange={(itemValue, itemIndex) => setSelectedStreet(itemValue)}
                        mode='dropdown'
                    >
                        {
                          locations.filter(location => location.region==selectedRegion).map((item)=>{
                              return(  <Picker.Item label={item.street} value={item.street} />)
                            })
                        }
                    </Picker>
                </View>
                {/* Description */}
                <Text style={[Style.title,{marginTop:20}]}>تفاصيل العنوان</Text>
                <InputText inputType='TextInput' placeholder='اكتب تفاصيل العنوان'
                value={description} HandleChange={(val)=>{setDescription(val)}}
                style={{ width: '100%',borderBottomColor:Colors.primary }}  
                secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
            ></InputText>
                <Text style={{alignSelf:'center',marginTop:25}} >اختر من الخريطة</Text>
                <IconButton  style={{alignSelf:'center'}}  size={35} icon={'map-marker-circle'} color={Colors.primary}/>
                {/* button part */}
                {/*Save In Button  */}
                <RoundButton handleClick={() => { props.navigation.navigate('VisitedPlacesScreen') }} style={{marginTop:30}} value="تسجيل العنوان"></RoundButton>

            </ScrollView>
        </View>
    );
}


export default LocationScreen;



