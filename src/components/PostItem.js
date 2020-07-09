import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Color from '../assets/constants/Colors';
import FontSizes from '../assets/constants/FontSizes';
import Colors from '../assets/constants/Colors';

const Styles = StyleSheet.create({
    Container: {
        // flexDirection: 'row-reverse',
        backgroundColor: Color.secondary,
        borderRadius: 20,
        padding: 10,
        marginTop: 30,
        width: '90%',
        alignSelf: 'center',
    },

    title: {
        fontSize: FontSizes.small,
        // textAlign:'center',
        textAlignVertical: 'center',
        letterSpacing: 1,
        color: Color.light,
    },
    imageContainerStyle: {
        width: 100,
        height: 100,
        flex: 0.3,
        // alignSelf:'flex-end',
        alignItems: 'center',
        borderRadius: 20,
    },
    imageStyle: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
        // alignSelf:'center'
    }
});

const PostItem = props => {
    return (
        <TouchableOpacity onPress={props.handleEvent} style={{ ...Styles.Container, ...props.style }}>
            <View style={{ flexDirection: 'row-reverse' }}>
                <View style={{ flex: 0.7 }}>
                    {/* Author part */}
                    <Text style={{ fontSize: FontSizes.small, color: Colors.dark }}>{props.author}</Text>
                    {/* title of post */}
                    <Text style={Styles.title}>{props.title} ... <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>اقرأ المزيد</Text></Text>
                </View>
                {/* image of post */}
                <View style={Styles.imageContainerStyle}>
                    <Image style={Styles.imageStyle} source={props.image} />
                </View>
            </View>

        </TouchableOpacity>
    );
};

export default PostItem;

