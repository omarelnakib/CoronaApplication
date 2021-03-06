import React, { useState, useEffect, useCallback } from 'react'
import { View, FlatList, Platform, ToastAndroid, Alert } from 'react-native'
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
import DropDownHeader from '../../components/DropDownHeader'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { reset } from '../../navigations/NavigationService'
import { tokenExpiredReset } from '../../store/Actions/API_Requests'
const CasesScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [cases, setCases] = useState([])


  useEffect(() => {
    getCases();
  }, [])

  const getCases = () => {
    setIsLoading(true)
    dispatch(Action.Get_Cases(Globals.User.UserID, 'user', (event) => {
      if (event.ok) {
        setIsLoading(false);


        setCases(event.data);
        // props.nav.navigate('DrawerNavigator')
      }
      else if(event.status==401){
        setIsLoading(false);
       tokenExpiredReset();
    }
      else {
        setIsLoading(false);
        toast(event.data)
      }

    }))
  }
  return (
    <View style={{ flex: 1, backgroundColor: Colors.light }}>
      {/* Header */}
      <Header style={{ height: 70 }} title={"البلاغات"} leftIcon="refresh" HandleBack={getCases}
        rightIcon='home'

      ></Header>
      <LoadingModel LoadingModalVisiblty={isLoading} />
      <FlatList
        showsVerticalScrollIndicator={false}
        refreshing={true}
        data={cases}
        style={{ marginVertical: 10 }}
        renderItem={({ item, index }) => (
          <CaseItem caseType={item.Surveyname} handleClick={() => { props.navigation.navigate('PatientProfileScreen', { CaseId: item.CaseID }) }} number={item.CaseID} date={item.OpenDate} status={item.Status}></CaseItem>
        )}
        keyExtractor={item => item._id}
      />
      {/* add photo icon */}
      <IconButton icon={'plus'} style={{ borderWidth: 1, borderColor: Colors.primary, alignSelf: 'center' }} color={Colors.primary} onPress={() => { props.navigation.navigate('QuestionsScreen') }} />
    </View>
  )
}

export default CasesScreen