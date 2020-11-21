import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, TouchableOpacity, ScrollView, BackHandler } from 'react-native'
import styles from './style'
import Colors from '../../assets/constants/Colors'
import Header from '../../components/Header'
import FontSizes from '../../assets/constants/FontSizes'
import DropdownMenu from '../../components/Dropdown'
import RoundButton from '../../components/RoundButton'
import { Button } from 'react-native-paper'
import Modal from 'react-native-modal'
import LoadingModel from '../../components/LoadingModel';

import { useDispatch } from 'react-redux';
import *as Action from '../../store/Actions/Cases';
import { FlatList } from 'react-native-gesture-handler'
import Globals from '../../assets/constants/Globals'
const PatientProfileScreen = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [caseData, setCaseData] = useState({Questions:[],CaseID:0});
    const [reportModal, setReportModal] = useState(false);
    const [imgs, setImgs] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        let CaseId = props.route.params.CaseId;
        console.log(props.route.params);
        dispatch(Action.Get_Case_Details(CaseId, 'case', (event) => {
            if (event.ok) {
                setIsLoading(false);

                let tempData = event.data;
                // setCaseData(event.data);
                if (event.data.CaseText == null) {
                    let Quest = event.data.SurveyAnswers.split(";");
                    let Questions = []
                    console.log("questions", Quest)
                    Quest.forEach(element => {
                        if(element!=""){
                            var s = element.split(",");
                            var q = s[0];
                            var a = s[1];
                            Questions.push({ Question: q, Answer: a });
                        }
                       
                    });

                   
                            tempData.Questions = Questions;
                        console.log("tempData",tempData)
                    setCaseData({...tempData})
                }
                else{
                    setCaseData(event.data)
                }
                // props.nav.navigate('DrawerNavigator')
            }
            else {
                setIsLoading(false);
                toast(event.data)
            }

        }))
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);

        return () => {
            //   BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, []);
    const handleBackButtonClick = () => {
        // console.log("baaack")
        props.navigation.navigate("CasesScreen");
        return true;
    }
    const openMessages =()=>{
        props.navigation.navigate('ChatScreen',{CaseId:caseData.CaseID})
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors.light }}>
            {/* Header */}
            <Header style={{ height: 70 }} title={Globals.User.Name} leftIcon="account"
            ></Header>
            <View style={{ padding: 20 }}>
                <LoadingModel LoadingModalVisiblty={isLoading} />

                {/* case number & date */}
                <View style={{ flexDirection: 'row-reverse', marginTop: 10 }}>
                    <Text style={{ textAlign: 'right', flex: 0.5, fontSize: FontSizes.subtitle }}>{caseData.CaseID}</Text>
                    <Text style={{ textAlign: 'left', flex: 0.5, fontSize: FontSizes.subtitle }}>{caseData.OpenDate}</Text>
                </View>
                {/* Status */}
                <View style={{ flexDirection: 'row-reverse', marginTop: 30 }}>
                    <Text style={{ textAlign: 'right', flex: 0.5, fontSize: FontSizes.subtitle }}>الحالة: {caseData.Status}</Text>
                    {caseData.MedStaffName != null ?
                        <Text style={{ textAlign: 'left', flex: 0.5, fontSize: FontSizes.subtitle }}>د/ محمد محمود</Text> : null
                    }
                </View>

                {/* Report details */}
                <TouchableOpacity onPress={() => { setReportModal(true) ;   console.log("caseData", caseData); }} style={{ marginTop: 30 }}>
                    <Text style={{ fontSize: FontSizes.title, textDecorationLine: 'underline', color: Colors.primary }}>اظهر تفاصيل البلاغ</Text>
                </TouchableOpacity>
                <Modal isVisible={reportModal}
                   onRequestClose={() => { setReportModal(false); } }
                   animationType={"slide"}
                   
                   >
                    <View style={styles.MainContainer}>
                        {/* // Index of question */}
                        {
                            caseData.CaseText == null ?
                                <View>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        refreshing={true}
                                        data={caseData.Questions}
                                        style={{ marginVertical: 10 }}
                                        renderItem={({item, index}) => (
                                            <View style={{ paddingVertical: 20}}>
                                                <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                                                    <Text style={styles.indexStyle}>{index + 1}</Text>
                                                    {/* Question */}
                                                    <Text style={styles.QuestionStyle}>{item.Question}</Text>
                                                    </View>

                                                    <View style={{}} >
                                                        <Text style={{ fontSize: FontSizes.subtitle, textAlign: 'right' }}>  {item.Answer}</Text>
                                                    </View>


                                            </View>
                                        )}
                                    />

                                </View>
                                : <View>
                                    <Text style={styles.QuestionStyle}>{caseData.CaseText}</Text>
                                </View>
                        }
                    </View>
                </Modal>

                {/* التحاليل */}
                <View>
                    <View style={{ flexDirection: 'row-reverse', flexWrap: 'wrap' }}>

                        <TouchableOpacity onPress={() => { console.log('pressed'); props.navigation.navigate('PicturesScreen') }} style={{ marginTop: 30 }}>
                            <Text style={{ fontSize: FontSizes.title, textDecorationLine: 'underline', color: Colors.primary }}>اضافة/اظهار تحليل</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* عزل منزلي ان وجد */}
                {/* <Text style={{ textAlign: 'right', marginTop: 30, fontSize: FontSizes.title }}>عزل منزلي</Text>
                 <View style={{ flexDirection: 'row-reverse', marginTop: 10 }}>
                    <Text style={{ textAlign: 'right', flex: 0.5, fontSize: FontSizes.subtitle }}>من 15/3/2020</Text>
                    <Text style={{ textAlign: 'left', flex: 0.5, fontSize: FontSizes.subtitle }}>الي 23/3/2020</Text>
                </View> */}

                {/* المتابعة اليومية */}
                {/* <TouchableOpacity onPress={() => { setReportModal(true) }} style={{ marginTop: 30 }}>
                    <Text style={{ fontSize: FontSizes.title, textDecorationLine: 'underline', color: Colors.primary }}>اظهر تفاصيل المتابعة اليومية</Text>
                </TouchableOpacity>
                <Modal > */}

                {/* </Modal> */}
                {/* Prescription */}
                <Text style={{ textAlign: 'right', marginTop: 30, fontSize: FontSizes.title }}>تشخيص الطبيب</Text>
                {
                    caseData.Prescriptions != null ?
                        <Text style={{ borderWidth: 1, borderColor: Colors.secondary, padding: 10 }}>
                            {caseData.Prescriptions}</Text>
                        : null
                }


            </View>
            <RoundButton style={{ marginTop:10 }} handleClick={()=>{openMessages()}}  value={"الرسائل"}></RoundButton>

        </ScrollView>
    )
}

export default PatientProfileScreen