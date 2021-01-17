import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import Colors from '../../assets/constants/Colors';
import ImagesPaths from '../../assets/constants/ImagesPaths';
import FontSizes from '../../assets/constants/FontSizes';
import Header from '../../components/Header'
import Globals from '../../assets/constants/Globals';

const { width, height } = Dimensions.get('window');


const MenuScreen = (props) => {
    const [menuItems, setMenuItems] = useState([
        {
            section: 'كوفيد 19',
            selected: false,
            items: [
                // {
                //     active: true,
                //     TitleBtn: "الرئيسية",
                //     ScreenName: "Home",
                // },
                {
                    active: true,
                    TitleBtn: "البلاغات",
                    ScreenName: "CasesScreen",
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
                }

            ]
        },
        {
            section: 'صحة عامة',
            selected: false,
            items: [
                {
                    active: false,
                    TitleBtn: "الرعاية الطبية",
                    ScreenName: "Home",
                },
                {
                    active: false,
                    TitleBtn: "إستشارة طبية",
                    ScreenName: "QuestionsScreen",
                },
                {
                    active: false,
                    TitleBtn: "التأمين الصحي",
                    ScreenName: "FollowUpStackNavigator",
                },

                {
                    active: false,
                    TitleBtn: "حجز عيادات خارجية",
                    ScreenName: "DoctorsNumbersScreen",
                },
            ]
        },
        {
            section: 'إدارة الأجازات المرضية',
            selected: false,
            items: [
                {
                    active: false,
                    TitleBtn: "تقديم طلب أجازة",
                    ScreenName: "MedicalVacationScreen",
                },
            ]
        },
       
        {
            active: false,
            TitleBtn: "تسجيل خروج",
            ScreenName: "AuthStackNavigator",
        }
    ]);

    const selectItem = (menuIndex, itemIndex) => {
            console.log("entered",menuItems[menuIndex].items[itemIndex].ScreenName)
            props.navigation.navigate(menuItems[menuIndex].items[itemIndex].ScreenName)
        
    };
    return (
        <View style={Styles.container}>
             {/* Header */}
       <Header style={{ height: 70 }} 
                leftIcon='home'
                title='القائمة الرئيسية'
                HandleBack={() => props.navigation.pop()}
            ></Header>
            <View style={Styles.upperPart}>
                {/* content of header */}
                <View style={Styles.upperContent}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image style={{ width: 70, height: 70, resizeMode: 'contain', marginHorizontal: '40%' }} source={ImagesPaths.ASULogo} />
                    <Image style={{ width: 70, height: 70, resizeMode: 'contain', marginHorizontal: '40%'}} source={ImagesPaths.FCISLogo} />
                </View>
                    <Image style={Styles.headerImg} source={ImagesPaths.LoginLogo} />
                    {/* profile data */}
                    <View style={Styles.avatarContainer}>
                        {/* <Image style={Styles.avatarImg} source={require('../assets/images/Profile.png')} /> */}
                        <View style={Styles.avatarContent}>
                            <Text style={Styles.title}>{Globals.User.Name}</Text>
                            <Text numberOfLines={1} style={Styles.email}>{Globals.User.Mobile}</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* menu items */}
            <ScrollView style={Styles.lowerPart}>
                {
                    menuItems.map((menu, menuIndex) => {
                        return (
                            <>
                                {menu.items != undefined ?
                                    <>
                                        {/* menu name */}
                                        <View style={{ width: '100%' }}>
                                            <Text style={[Styles.itemTitle, {  textAlign: 'center'}]}>{menu.section}</Text>

                                        </View>
                                        <View style={{flexDirection:'row-reverse',flexWrap:'wrap',justifyContent:'center'}}>
                                        {/* sub menu name */}
                                        {
                                            menu.items.map((submenu, index) => {
                                                return (
                                                    <TouchableOpacity onPress={() => selectItem(menuIndex, index)} disabled={!submenu.active} style={[Styles.itemStyle,]}>
                                                        <Text style={[Styles.itemTextStyle,!submenu.active?{opacity:0.5}:{opacity:1}]}>{submenu.TitleBtn}</Text>
                                                    </TouchableOpacity>
                                                )

                                            })
                                        }
                                        </View>
                                    </>
                                    // menus that doesn't have submenus
                                    : <TouchableOpacity onPress={() => { props.navigation.navigate(menuItems[menuIndex].ScreenName)}} style={{ width: '100%',alignItems:'center',justifyContent:'center',paddingStart:30, flexDirection: 'row' }}>
                                        <Text style={[Styles.itemTextStyle, { textAlign:'center',  textAlignVertical: 'center' }]}>{menu.TitleBtn}</Text>
                                        <IconButton icon="logout" style={{}} size={25} color={Colors.secondary}  />
                                    </TouchableOpacity>
                                }

                            </>
                        );
                    })}

              
            </ScrollView>
        </View>

    );
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: Colors.primary,
    },
    upperPart: {
        flex: 0.4,
        backgroundColor: Colors.primary
        // height: height * 0.4
    },
    lowerPart: {
        flex: 0.6,
        backgroundColor:Colors.lightgray,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        // height: height * 0.6,
    },

    upperContent: {

        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        // paddingVertical: '15%',
        paddingHorizontal: '20%'
    },
    headerImg: {
        width: '100%',
        resizeMode: 'contain',
        height: 50
    },
    avatarContainer: {
        // width: '120%',
        // marginTop: '-5%',
        // flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
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
        textAlign: 'center',
    },
    email: {
        fontSize: FontSizes.pragraph,
        color: Colors.light,
        textAlign: 'center'
    },
    itemStyle: {
        width: '40%',
        height:60,
        borderColor: Colors.secondary,
        borderWidth:1,
        margin: 5,
        elevation:5,
        backgroundColor:Colors.light,
        borderRadius:15
    },
    itemTitle:{
        fontSize: FontSizes.title,
        color: Colors.secondary,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop:20,
        marginBottom:10
    },
    itemTextStyle: {
        fontSize: FontSizes.pragraph,
        color: Colors.secondary,
        textAlign: 'center',
        textAlignVertical:'center',        
        // width:'100%',
        height:'100%',
        fontWeight: 'bold',

    }

});

export default MenuScreen;