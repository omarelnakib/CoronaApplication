import React, { useState, useEffect, useCallback } from 'react'
import { View, FlatList } from 'react-native'
import styles from './style'
import Colors from '../../assets/constants/Colors'
import Header from '../../components/Header'
import ImagesPaths from '../../assets/constants/ImagesPaths'
import CaseItem from '../../components/CaseItem'
import RoundButton from '../../components/RoundButton'
import { IconButton } from 'react-native-paper'
import LoadingModel from '../../components/LoadingModel';

import { useDispatch } from 'react-redux';
import *as Action from '../../store/Actions/Cases';
import Globals from '../../assets/constants/Globals'
const CasesScreen = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const [cases, setCases] = useState([])
    const reports = [
        {
            id: 1,
            caseType: 'كورونا',
            number: '123456789',
            date:'12/09/2020',
            status:'مغلق'
        },
        {
            id: 2,
            caseType: 'كورونا',
            number: '123456789',
            date:'12/09/2020',
            status:'عزل'

        },{
            id: 3,
            caseType: 'كورونا',
            number: '123456789',
            date:'12/09/2020',
            status:'ساري'

        },{
            id: 5,
            caseType: 'كورونا',
            number: '123456789',
            date:'12/09/2020',
            status:'ساري'

        },{
            id: 4,
            caseType: 'كورونا',
            number: '123456789',
            date:'12/09/2020',
            status:'ساري'

        },{
            id: 6,
            caseType: 'كورونا',
            number: '123456789',
            date:'12/09/2020',
            status:'ساري'
        }]

        useEffect(() => {
            dispatch(Action.Get_Cases(Globals.UserId,'user', (event) => {
              if (event.ok) {
                setIsLoading(false);
         
                
                setCases(event.data);
                // props.nav.navigate('DrawerNavigator')
              }
              else {
                setIsLoading(false);
                toast(event.data)
              }
        
            }))
          }, [])
    return (
        <View style={{ flex: 1, backgroundColor: Colors.light }}>
            {/* Header */}
            <Header style={{ height: 70 }} title={"الحالات"} leftIcon="account"
            ></Header>
                    <LoadingModel LoadingModalVisiblty={isLoading} />

            <FlatList
                showsVerticalScrollIndicator={false}
                refreshing={true}
                data={cases}
                style={{marginVertical:10}}
                renderItem={({ item, index }) => (
                    <CaseItem caseType={item.Surveyname} handleClick={()=>{props.navigation.navigate('PatientProfileScreen',{CaseId:item.CaseID})}} number={item.CaseID} date={item.OpenDate} status={item.Status}></CaseItem>
                )}
                keyExtractor={item => item._id}
            />
        {/* add photo icon */}
        <IconButton icon={'plus'} style={{ borderWidth: 1, borderColor: Colors.primary, alignSelf: 'center' }} color={Colors.primary} onPress={() => { props.navigation.navigate('QuestionsScreen') }} />
            </View>
    )
}

export default CasesScreen