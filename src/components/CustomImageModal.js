import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Picker, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../assets/constants/Colors';
import { IconButton } from 'react-native-paper';
import RoundButton from './RoundButton';
import Modal from 'react-native-modal'
import ImageZoom from 'react-native-image-pan-zoom';
const { height, width } = Dimensions.get('window');

const CustomImageModal = props => {
  
    return (
    <>
    <Modal isVisible={props.visible}
       onRequestClose={props.ModalClick}
       animationType={"slide"}>
    <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}>
                <Image style={{width:200, height:200}}
                       source={{uri:props.source}}/>
            </ImageZoom>
            {/* <RoundButton handleClick={props.closeModal } style={{ marginTop: -80, }} value="غلق" ></RoundButton> */}
            <IconButton icon={'close'} style={{ position:'absolute',top:0,left:0,borderWidth: 1, borderColor: Colors.light, alignSelf: 'center' }} color={Colors.light} onPress={props.closeModal } />

    </Modal>
    </>
  );
};
const styles = StyleSheet.create({

});

export default CustomImageModal;

