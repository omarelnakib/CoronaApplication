import React, { useEffect, useState } from 'react';
import { View, Dimensions, ScrollView, TouchableOpacity, Platform, FlatList } from 'react-native';
import Style from './style';
import ImagesPaths from '../../assets/constants/ImagesPaths'
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes'
import Header from '../../components/Header'
import { IconButton } from 'react-native-paper';
const { height, width } = Dimensions.get('window');
import ImagePicker from 'react-native-image-picker';
import ImageModal from 'react-native-image-modal';
import RoundButton from '../../components/RoundButton';
import LoadingModel from '../../components/LoadingModel';
import { useDispatch } from 'react-redux';
import *as Action from '../../store/Actions/Cases';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import CUstomImageModal from '../../components/CustomImageModal';
const PicturesScreen = props => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage,setSelectedImage] = useState();
  const [modalVisible,setModalVisible] = useState(false);
  const [imgs, setImgs] = useState([]);
  const [retrievedImgs, setRetrievedImgs] = useState([]);
  const options = {
    title: 'اختر صورة',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  useEffect(() => {
    getTests();
    
}, [])
  const removeImage =(index)=>{
    let temp= [...imgs];

    temp.splice(index,1)
    setImgs(temp);
    console.log(imgs);
  }

  const getTests = () =>{
    let CaseId = props.route.params.CaseId;
    setIsLoading(true);
    dispatch(Action.Get_Test(CaseId, (event) => {
        setIsLoading(false);
        if (event.ok) {
          console.log(event.data);
          setRetrievedImgs(event.data)
          }
        else {
            setIsLoading(false);
            toast(event.data)
        }
    }))
  }

   const sendImages = () =>{
    let CaseId = props.route.params.CaseId;
    setIsLoading(true);
   var data = new FormData();
    imgs.forEach(img => {
      // data.append('file',img)
    var type = img.type? img.type.split('/').pop(): 'png';
    var name = img.name || `upload${Date.now()}.${type}`;
      data.append('file',{
        name: Platform.OS==='android'?img.name: name  ,
       type: img.type,
        uri:Platform.OS==='android'
        ? img.uri
        : img.uri.replace('file://', '')
      })

    console.log("dataname : ",name)
    });
    dispatch(Action.Send_Test(data,CaseId, (event) => {
        setIsLoading(false);
        if (event.ok) {
          props.navigation.goBack();
          }
        else {
            setIsLoading(false);
            toast(event.data)
        }
    }))
  }

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
        const source = { uri: response.uri,type:response.type,name:response.fileName };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log("this response:",response)

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
      <ScrollView style={{marginBottom:50}}>
       <View style={{ flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
      <LoadingModel LoadingModalVisiblty={isLoading} />
      {/* <FlatList
                showsVerticalScrollIndicator={false}
                refreshing={true}
                data={retrievedImgs}
                style={{marginVertical:10}}
                renderItem={({ item, index }) => (
                )}
                keyExtractor={item => item._id}
            /> */}
        {retrievedImgs.map((item, index) => {
          // Image Picker
          return (
            <View>
              
              {/* <ImageModal
                swipeToDismiss={true}
                resizeMode="contain"
                imageBackgroundColor={Colors.light}
                
                style={{
                  width: 150,
                  height: 150,
                  margin: 10
                }}
                source={{uri:item.FilePath}}
              /> */}
              <TouchableOpacity onPress={()=>{ setSelectedImage(item.FilePath); setModalVisible(true)}}>
              <Image
              source={{uri:item.FilePath}}
              style={{
                width: 150,
                height: 150,
                margin: 10
              }}
              indicator={ProgressBar} 
              />
              </TouchableOpacity>
            </View>


          )

        })}
      
      </View>
      <CUstomImageModal visible={modalVisible} source={selectedImage} ModalClick={()=>{setModalVisible(false)}}></CUstomImageModal>
      <View style={{ flexDirection: 'row-reverse', flexWrap: 'wrap' }}>
      {/* <LoadingModel LoadingModalVisiblty={isLoading} /> */}

        {imgs.map((item, index) => {
          // Image Picker
          return (
            <View>
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
             <IconButton icon={'close'} size={15} style={{ position:'absolute',borderWidth: 1, borderColor: Colors.dark }} color={Colors.dark} onPress={() => { removeImage(index) }} />

            </View>


          )

        })}
        {/* add photo icon */}
        <IconButton icon={'plus'} style={{ borderWidth: 1, borderColor: Colors.primary, alignSelf: 'center' }} color={Colors.primary} onPress={() => { showImagePicker() }} />
      

      </View>
</ScrollView>

      <RoundButton handleClick={()=>{sendImages()}} style={{position:'absolute',bottom:0,marginBottom:10}}  value="ارسال" ></RoundButton>
    </View>
  )
}
export default PicturesScreen;
