import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import Colors from '../assets/constants/Colors';
import ImagesPaths from '../assets/constants/ImagesPaths';
import FontSizes from '../assets/constants/FontSizes';

const { width, height } = Dimensions.get('window');


const SideBar = (props) => {
    const [menuItems, setMenuItems] = useState([
        {
            active: true,
            TitleBtn: "الرئيسية",
            ScreenName: "Home",
        },
        {
            active: false,
            TitleBtn: "إبلاغ عن حالة",
            ScreenName: "QuestionsScreen",
        },
        {
            active: false,
            TitleBtn: "المتابعة اليومية",
            ScreenName: "FollowUpStackNavigator",
        },

        {
            active: false,
            TitleBtn: "ارقام اطباء المتابعة",
            ScreenName: "DoctorsNumbersScreen",
        },
        {
            active: false,
            TitleBtn: "التبرعات",
            ScreenName: "DonationScreen",
        },
        {
            active: false,
            TitleBtn: "تسجيل خروج",
            ScreenName: "Home",
        },


    ]);

    
    const selectItem = (item) => {
        let index = menuItems.findIndex(i => i.TitleBtn == item.TitleBtn);
        let index2 = menuItems.findIndex(i => i.active == true);
        let list = [...menuItems];
        console.log('index',index);
        if(index !=index2){
        list[index].active = true;
        list[index2].active = false;
        setMenuItems([...list])
        props.navigation.navigate(item.ScreenName)
        }
    };

    return (
        <View style={Styles.container}>
                <View style={Styles.upperPart}>
                    {/* content of header */}
                    <View style={Styles.upperContent}>
                        <Image style={Styles.headerImg} source={ImagesPaths.LoginLogo} />
                        {/* profile data */}
                        <View style={Styles.avatarContainer}>
                            {/* <Image style={Styles.avatarImg} source={require('../assets/images/Profile.png')} /> */}
                                <View style={Styles.avatarContent}>
                                <Text style={Styles.title}>احمد محمد</Text>
                                <Text  numberOfLines={1} style={Styles.email}>01112243840</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* menu items */}
                <ScrollView style={Styles.lowerPart}>
                    {menuItems.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => selectItem(item)} style={[Styles.itemStyle, { borderBottomWidth: index != menuItems.length - 1 ? 1 : 0}]}>
                                <Text style={[Styles.itemTextStyle, {color: item.active ? Colors.primary : Colors.darkgray }]}>{item.TitleBtn}</Text>
                            </TouchableOpacity>
                        );
                    })}
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Image style={{width:50,height:50,resizeMode:'contain',margin:20}} source={ImagesPaths.ASULogo}/>
                        <Image  style={{width:50,height:50,resizeMode:'contain',margin:20}} source={ImagesPaths.FCISLogo}/>
                    </View>
                </ScrollView>
        </View>

    );
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: Colors.light,
    },
    upperPart: {
        flex: 0.4,
        backgroundColor:Colors.primary
        // height: height * 0.4
    },
    lowerPart: {
        flex: 0.6

        // height: height * 0.6,
    },
 
    upperContent: {

        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        paddingVertical: '15%',
        paddingHorizontal: '20%'
    },
    headerImg: {
        width: '100%',
        resizeMode: 'contain',
        height: '50%'
    },
    avatarContainer: {
        // width: '120%',
        // marginTop: '-5%',
        // flexDirection: 'row',
        width:'100%',
        alignItems:'center'
    },
    avatarContent: {
        // flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        width: '100%',
    },
    title: {
        fontSize: FontSizes.title,
        fontWeight: 'bold',
        color: Colors.light,
        textAlign:'center'
    },
    email: {
        fontSize: FontSizes.pragraph,
        color: Colors.light,
        textAlign:'center'
    },
    itemStyle: {
        width: '100%',
        borderColor: Colors.lightgray,

        paddingVertical: 20
    },
    itemTextStyle: {
        fontSize: 15,
        color: Colors.textGray,
        textAlign: 'center',
        fontWeight: 'bold',

    }

});

export default SideBar;