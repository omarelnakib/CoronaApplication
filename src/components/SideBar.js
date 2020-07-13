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
            section: 'كوفيد 19',
            selected: false,
            items: [
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
                }

            ]
        },
        {
            section: 'صحة عامة',
            selected: false,
            items: [
                {
                    active: true,
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
            active: false,
            TitleBtn: "إدارة الأجازات المرضية",
            ScreenName: "Home",
        },
        {
            active: false,
            TitleBtn: "تسجيل خروج",
            ScreenName: "Home",
        }
    ]);

    const selectItem = (menuIndex, itemIndex) => {
        // let index = menuItems.section.findIndex(i => i.TitleBtn == item.TitleBtn);
        let index2 = menuItems[menuIndex].items.findIndex(i => i.active == true);
        let list = [...menuItems];
        if (itemIndex != index2) {
            list[menuIndex].items[itemIndex].active = true;
            list[menuIndex].items[index2].active = false;
            setMenuItems([...list])
            props.navigation.navigate(list[menuIndex].items[itemIndex].ScreenName)
        }
    };
    const selectMenu = (menuIndex) => {
        // let index2 = menuItems.findIndex(i => i.selected == true);
        let list = [...menuItems];
        // if (menuIndex != index2) {
        list[menuIndex].selected = !list[menuIndex].selected;
        // list[index2].selected=false;
        setMenuItems([...list])
        // }
        console.log(list)
    }

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
                            <Text numberOfLines={1} style={Styles.email}>01112243840</Text>
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
                                        <TouchableOpacity onPress={() => selectMenu(menuIndex)} style={{ width: '100%', flexDirection: 'row' }}>
                                            <Text style={[Styles.itemTextStyle, { flex: 0.8, textAlign: 'left', paddingHorizontal: 10, textAlignVertical: 'center' }]}>{menu.section}</Text>
                                            <IconButton icon="chevron-right" size={25} color={Colors.dark} style={{ flex: 0.2 }} />

                                        </TouchableOpacity>
                                        {/* sub menu name */}
                                        {menu.selected ?
                                            menu.items.map((submenu, index) => {
                                                return (
                                                    <TouchableOpacity onPress={() => selectItem(menuIndex, index)} style={[Styles.itemStyle, { borderBottomWidth: index != menu.section.length - 1 ? 1 : 0 }]}>
                                                        <Text style={[Styles.itemTextStyle, { color: submenu.active ? Colors.primary : Colors.darkgray }]}>{submenu.TitleBtn}</Text>
                                                    </TouchableOpacity>
                                                )

                                            })
                                            : null
                                        }
                                    </>
                                    // menus that doesn't have submenus
                                    : <TouchableOpacity onPress={() => { }} style={{ width: '100%', flexDirection: 'row' }}>
                                        <Text style={[Styles.itemTextStyle, { color: Colors.dark }, { flex: 0.8, textAlign: 'left', paddingHorizontal: 10, textAlignVertical: 'center' }]}>{menu.TitleBtn}</Text>
                                        <IconButton icon="chevron-right" size={25} color={Colors.dark} style={{ flex: 0.2 }} />
                                    </TouchableOpacity>
                                }

                            </>
                        );
                    })}

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image style={{ width: 50, height: 50, resizeMode: 'contain', margin: 20 }} source={ImagesPaths.ASULogo} />
                    <Image style={{ width: 50, height: 50, resizeMode: 'contain', margin: 20 }} source={ImagesPaths.FCISLogo} />
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
        backgroundColor: Colors.primary
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
        textAlign: 'center'
    },
    email: {
        fontSize: FontSizes.pragraph,
        color: Colors.light,
        textAlign: 'center'
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