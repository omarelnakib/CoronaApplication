import React, { useState, useEffect, useCallback } from 'react'
import { View, FlatList } from 'react-native'
import styles from './style'
import Colors from '../../assets/constants/Colors'
import Header from '../../components/Header'
import ImagesPaths from '../../assets/constants/ImagesPaths'
import CaseItem from '../../components/CaseItem'
import RoundButton from '../../components/RoundButton'
import { IconButton } from 'react-native-paper'

const CasesScreen = (props) => {

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

    
    return (
        <View style={{ flex: 1, backgroundColor: Colors.light }}>
            {/* Header */}
            <Header style={{ height: 70 }} title={"الحالات"} leftIcon="account"
            ></Header>
            <FlatList
                showsVerticalScrollIndicator={false}
                refreshing={true}
                data={reports}
                style={{marginVertical:10}}
                renderItem={({ item, index }) => (
                    <CaseItem caseType={item.caseType} handleClick={()=>{props.navigation.navigate('PatientProfileScreen')}} number={item.number} date={item.date} status={item.status}></CaseItem>
                )}
                keyExtractor={item => item._id}
            />
        {/* add photo icon */}
        <IconButton icon={'plus'} style={{ borderWidth: 1, borderColor: Colors.primary, alignSelf: 'center' }} color={Colors.primary} onPress={() => { props.navigation.navigate('QuestionsScreen') }} />
            </View>
    )
}

export default CasesScreen