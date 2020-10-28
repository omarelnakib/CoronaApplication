import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from './style'
import Colors from '../../assets/constants/Colors'
import Header from '../../components/Header'
import FontSizes from '../../assets/constants/FontSizes'
import DropdownMenu from '../../components/Dropdown'
import RoundButton from '../../components/RoundButton'
import { Button } from 'react-native-paper'
import Modal from 'react-native-modal'
const PatientProfileScreen = (props) => {
    const availableStatus = ['ساري', 'عزل', 'مغلق'];
    const [status, setStatus] = useState('ساري');
    const [reportModal, setReportModal] = useState(false);
    const [imgs, setImgs] = useState([]);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors.light }}>
            {/* Header */}
            <Header style={{ height: 70 }} title={"أحمد محمد"} leftIcon="account"
            ></Header>
            <View style={{ padding: 20 }}>
                {/* name & age */}
                <View style={{ flexDirection: 'row-reverse' }}>
                    <Text style={{ textAlign: 'right', flex: 0.5, fontSize: FontSizes.subtitle }}>أحمد محمد عبد الرحيم</Text>
                    <Text style={{ textAlign: 'left', flex: 0.5, fontSize: FontSizes.subtitle }}>23 سنة</Text>
                </View>
                {/* case number & date */}
                <View style={{ flexDirection: 'row-reverse', marginTop: 10 }}>
                    <Text style={{ textAlign: 'right', flex: 0.5, fontSize: FontSizes.subtitle }}>12324568789</Text>
                    <Text style={{ textAlign: 'left', flex: 0.5, fontSize: FontSizes.subtitle }}>23/3/2020</Text>
                </View>
                {/* Status */}
                <Text style={{ textAlign: 'right', marginTop: 30, fontSize: FontSizes.title }}>الحالة</Text>
                <DropdownMenu style={{}} selectedItem={status} setSelectedItem={(item, index) => setStatus(item)} data={availableStatus}>  </DropdownMenu>
                {/* <Button style={{ alignSelf: 'flex-end' }} color={Colors.secondary}>{'تغيير الحالة'} </Button> */}

                {/* Report details */}
                <TouchableOpacity onPress={() => { setReportModal(true) }} style={{ marginTop: 30 }}>
                    <Text style={{ fontSize: FontSizes.title, textDecorationLine: 'underline', color: Colors.primary }}>اظهر تفاصيل البلاغ</Text>
                </TouchableOpacity>
                <Modal isVisible={reportModal}>

                </Modal>

                {/* التحاليل */}
                <View>
                    <Text style={{ textAlign: 'right', marginTop: 30, fontSize: FontSizes.title }}>التحاليل</Text>
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
                        <RoundButton style={{ width: '50%', marginTop: 10 }} value={"طلب تحليل"}></RoundButton>
                    </View>
                </View>

                {/* عزل منزلي ان وجد */}
                <Text style={{ textAlign: 'right', marginTop: 30, fontSize: FontSizes.title }}>عزل منزلي</Text>
                 <View style={{ flexDirection: 'row-reverse', marginTop: 10 }}>
                    <Text style={{ textAlign: 'right', flex: 0.5, fontSize: FontSizes.subtitle }}>من 15/3/2020</Text>
                    <Text style={{ textAlign: 'left', flex: 0.5, fontSize: FontSizes.subtitle }}>الي 23/3/2020</Text>
                </View>

                {/* المتابعة اليومية */}
                 <TouchableOpacity onPress={() => { setReportModal(true) }} style={{ marginTop: 30 }}>
                    <Text style={{ fontSize: FontSizes.title, textDecorationLine: 'underline', color: Colors.primary }}>اظهر تفاصيل المتابعة اليومية</Text>
                </TouchableOpacity>
                <Modal >

                </Modal>
                {/* Prescription */}
                <Text style={{ textAlign: 'right', marginTop: 30, fontSize: FontSizes.title }}>نتيجة الكشف</Text>
                <Text style={{borderWidth:1 , borderColor:Colors.secondary,padding:10}}>منبليل كيمبلن لنمبيكليك يبمن يبلن يبلمكيب ليكمبيل نلبيملبيكيبم ن نلبم لبي</Text>
                <Button style={{ alignSelf: 'flex-end' }} color={Colors.secondary}>{'+اضافة كشف'} </Button>

            </View>
            <RoundButton style={{ marginTop:10 }} value={"تأكيد"}></RoundButton>

        </ScrollView>
    )
}

export default PatientProfileScreen