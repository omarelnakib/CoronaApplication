import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView, Picker } from 'react-native';
import Style from './style'
import Header from '../../components/Header'
import InputText from '../../components/InputText';
import RoundButton from '../../components/RoundButton';
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes';
const { height, width } = Dimensions.get('window');

const ResultScreen = props => {

    const [donation, setDonation] = useState('');
    const donations = ['تبرع بالبلازما', 'تبرع بأنابيب أكسجين', 'اخر']
    const [finalDonation, setFinalDonation] = useState('')
    return (
        <View style={Style.container}>
            {/* Header */}
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='النتيجة' leftIcon='back' HandleBack={() => props.navigation.openDrawer()}></Header>
            <View style={{ padding: 20 }}>
            

                {/* Rules Part */}
                <View style={{ marginTop: 20, padding: 20, borderWidth: 1, borderColor: Colors.primary, borderRadius: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: FontSizes.subtitle, marginBottom: 10 }}>حالتك ليست خطيرة</Text>
                    <Text>
                    - انت تعاني من دور برد موسمي 
                        {'\n'}
                        {'\n'}
                        - يمكن اخذ دواء خافض للحرارة بجانب مع دواء لاحتقان الحلق.
                        {'\n'}
                        {'\n'}
                        - يمكن الرجوع للطبيب في حالة تطور الحالة وازدياد الاعراض .
                        {'\n'}
                        - قم بتسجيل المتابعة اليومية في التطبيق لمتابعة حالتك وفي حالة ازدياد الاعراض سيتواصل معكم طبيب من الفريق الطبي .

                    </Text>
                </View>
                {/* button part */}
                {/*Save In Button  */}
                <RoundButton handleClick={() => { props.navigation.navigate('HomeScreen')}} value="تابع"></RoundButton>

            </View>

        </View>
    );
}


export default ResultScreen;



