import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView, Picker } from 'react-native';
import Style from './style'
import Header from '../../components/Header'
import InputText from '../../components/InputText';
import RoundButton from '../../components/RoundButton';
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes';
const { height, width } = Dimensions.get('window');

const DonationScreen = props => {

    const [donation, setDonation] = useState('');
    const donations = ['تبرع بالبلازما', 'تبرع بأنابيب أكسجين', 'اخر']
    const [finalDonation, setFinalDonation] = useState('')
    return (
        <View style={Style.container}>
            {/* Header */}
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='التبرعات' leftIcon='menu'  HandleBack={() => props.navigation.navigate('DrawerNavigator')}        HandleBack={() => props.navigation.navigate('MenuScreen')}></Header>
            <View style={{ padding: 20 }}>
                {/* top note */}
                <Text style={Style.title}>-اذا كنت تريد التبرع رجاءا اختيار نوعية التبرع وسيتم التواصل معك في اسرع وقت</Text>

                <Text style={Style.title}>بماذا تريد التبرع</Text>
                <View style={{ borderColor: Colors.primary, borderWidth: 1, borderRadius: 20, width: '100%' }}>
                    {/*pick Available donations */}
                    <Picker
                        selectedValue={donation}
                        style={{ borderWidth: 1, borderColor: Colors.primary, height: 40 }}
                        textStyle={{ color: Colors.primary }}
                        onValueChange={(itemValue, itemIndex) => setDonation(itemValue)}
                        mode='dropdown'
                    >
                        {
                            donations.map((item) => {
                                return (<Picker.Item label={item} value={item} />)
                            })
                        }
                    </Picker>
                    {donation == 'اخر' ?
                        // if donate with other thing
                        <InputText inputType='TextInput' placeholder='اريد التبرع ب...'
                            value={finalDonation} HandleChange={(val) => { setFinalDonation(val) }}
                            style={{ width: '100%' }} ></InputText>
                        : null}
                </View>

                {/* Rules Part */}
                <View style={{ marginTop: 20, padding: 20, borderWidth: 1, borderColor: Colors.primary, borderRadius: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: FontSizes.subtitle, marginBottom: 10 }}>شروط التبرع بالبلازما</Text>
                    <Text>
                        - يجب جمع بلازما كورونا  فقط من الأفراد الذين تم تعافيهم بالكامل وأن يكون مر على شفائهم وانعدام الأعراض مدة لا تقل عن 14 يومًا، أن يكونوا مؤهلين للتبرع بالدم.
                        {'\n'}
                        {'\n'}
                        - يجب إجراء الاختبار المطلوب للتأكد من عدم وجود فيروسات بها.
                        {'\n'}
                        {'\n'}
                        - يجب أن يكون المتبرع مناسبًا للتبرع وبصحة جيدة.

                    </Text>
                </View>
                {/* button part */}
                {/*Save In Button  */}
                <RoundButton handleClick={() => { }} value="تأكيد"></RoundButton>

            </View>

        </View>
    );
}


export default DonationScreen;



