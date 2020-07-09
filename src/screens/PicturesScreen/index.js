import React, { useEffect, useState } from 'react';
import { View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import Style from './style';
import ImagesPaths from '../../assets/constants/ImagesPaths'
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes'
import Header from '../../components/Header'
import PostItem from '../../components/PostItem'
import { IconButton } from 'react-native-paper';
const { height, width } = Dimensions.get('window');
import ImagePicker from 'react-native-image-picker';
import ImageModal from 'react-native-image-modal';

const PicturesScreen = props => {
  const [imgs, setImgs] = useState([]);
  const options = {
    title: 'اختر صورة',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  // show Image Picker
  const showImagePicker = () => {


    ImagePicker.showImagePicker(options, (response) => {

      // Launch Camera:console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log(source)

        let tempImgs = [...imgs];
        tempImgs.push(source)
        setImgs([...tempImgs])
      }
    });
  }

  return (
    <View style={Style.container}>
      {/* Header */}
      <Header style={{ height: 70 }} leftIcon='back' title='اضافة تحاليل'
        HandleBack={() => props.navigation.pop()}
      ></Header>
      <View style={{ flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
        {imgs.map((item, index) => {
          // Image Picker
          return (
            <ImageModal
              swipeToDismiss={true}
              resizeMode="contain"
              imageBackgroundColor={Colors.light}
              style={{
                width: 150,
                height: 150,
                margin: 10
              }}
              source={item}
            />

          )

        })}
        {/* add photo icon */}
        <IconButton icon={'plus'} style={{ borderWidth: 1, borderColor: Colors.primary, alignSelf: 'center' }} color={Colors.primary} onPress={() => { showImagePicker() }} />
      </View>
    </View>
  )
}
export default PicturesScreen;
