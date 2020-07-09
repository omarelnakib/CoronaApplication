import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Style from './style'
import NotificationItem from './NotificationItem';
// import *as AuthAction from '../../store/Actions/Auth'
import Header from '../../components/Header'

const NotificationsScreen = props => {
  const dummyTitle = 'فريق من الاطباء';
  const dummyParagraph = 'سيتم تواجد فريق عمل طبي تابع لجامعة عين شمس بالمتابعة لجميع بلاغاتكم في اسرع وقت ';
  const dummyList = [1, 2, 4, 6];
  return (
    <View style={Style.container}>

      <Header style={{ height: 70 }} title='الاشعارات' leftIcon='back' 
        HandleBack={() => props.navigation.pop()}
      ></Header>
      {/* list of notifications */}
      <FlatList
        showsVerticalScrollIndicator={false}
        refreshing={true}
        data={dummyList}
        renderItem={({ item, index }) => (
          <NotificationItem title={dummyTitle} paragraph={dummyParagraph}></NotificationItem>

        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
}


export default NotificationsScreen;



