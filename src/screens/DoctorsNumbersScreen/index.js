import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Style from './style'
import NumberItem from './NumberItem';
// import *as AuthAction from '../../store/Actions/Auth'
import Header from '../../components/Header'

const DoctorsNumbersScreen = props => {
  const dummyTitle = 'د/ احمد عبد الغني';
  const dummyParagraph = '01112332458';
  const doctors = [
    {
      title:'د/ احمد عبد الغني',
      mobile:'01112332458'
    },
    {
      title:'د/ عمرو احمد سعد',
      mobile:'01244383959'
    },
    {
      title:'د/ محمد عبد العزيز محمد',
      mobile:'01425435489'
    },
    {
      title:'د/ عبد العزيز عبد التواب',
      mobile:'01112234840'
    },
    
  ];
  return (
    <View style={Style.container}>

      <Header style={{ height: 70 }} title='ارقام اطباء المتابعة' leftIcon='menu'
        HandleBack={() => props.navigation.navigate('MenuScreen')}
      ></Header>
      {/* List of all doctors numbers */}
      <FlatList
        showsVerticalScrollIndicator={false}
        refreshing={true}
        data={doctors}
        renderItem={({ item, index }) => (
          <NumberItem title={item.title} paragraph={item.mobile}></NumberItem>

        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
}


export default DoctorsNumbersScreen;



