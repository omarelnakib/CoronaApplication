import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header'

import Colors from '../../assets/constants/Colors';
import styles from './style';

const FollowUpScreen = props => {

    return (
        <>
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='المتابعة اليومية' leftIcon='menu' HandleBack={() => props.navigation.openDrawer()}></Header>
            <View style={styles.container}>

                {/* Daily FollowUp */}
                <TouchableOpacity style={styles.ButtonStyle} onPress={() => { props.navigation.navigate('FollowUpQuestions') }}>
                    <Text style={styles.ButtonText}>تسجيل المتابعة اليومية</Text>
                </TouchableOpacity>
                {/* Chat with doctors */}
                <TouchableOpacity style={styles.ButtonStyle} onPress={() => { props.navigation.navigate('ChatScreen') }}>
                    <Text style={styles.ButtonText}>محادثة الفريق الطبي</Text>
                </TouchableOpacity>
                {/* Upload photos */}
                <TouchableOpacity style={styles.ButtonStyle} onPress={() => { props.navigation.navigate('PicturesScreen') }}>
                    <Text style={styles.ButtonText}>رفع صور تحاليل</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default FollowUpScreen;

