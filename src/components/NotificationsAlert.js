import React from 'react';
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native'
import Colors from '../assets/constants/Colors';

import FontSizes from '../assets/constants/FontSizes';
import ImagesPaths from '../assets/constants/ImagesPaths';

export const NotificationsAlert = ({ title, message, onPress }) => {

    return (
        <TouchableOpacity style={styles.Container} onPress={()=>onPress()}>
            <View style={styles.IconView}>
                <Image style={styles.Icon} source={ImagesPaths.LoginLogo} resizeMode={'center'} />
            </View>
            <View style={styles.MessageView}>
                <Text style={styles.TitleLabel}>{title}</Text>
                <Text style={styles.SubTitleLabel}>{message}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        backgroundColor: Colors.light,
        height: 150,
        width: '100%',
        alignItems: "center",
    },
    IconView: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.primary
    },
    Icon: {
        width: 50,
        height: 50
    },
    MessageView: {
        // marginLeft: 15
    },
    TitleLabel: {
        fontSize: 16,
        color: Colors.dark
    },
    SubTitleLabel: {
        fontSize: 11,
        color: Colors.dark,
        width:'80%',
        lineHeight:18,
        marginTop:5
    }
})
