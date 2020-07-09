import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Dimensions, TouchableOpacity, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Style from './style';
import ImagesPaths from '../../assets/constants/ImagesPaths'
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes'
import Header from '../../components/Header'
import PostItem from '../../components/PostItem'
import { IconButton } from 'react-native-paper';
const { height, width } = Dimensions.get('window');
import Video from 'react-native-video';

const PostScreen = props => {
    const [ScreenHeight, setScreenHeight] = useState(height);
    const [ScreenWidth, setScreenWidth] = useState(width);
    console.log(props.route.params)
    // const [title, setTitle] = useState('الصحة المصرية تصدر بيانًا حول آخر مستجدات فيروس كورونا')
    // const [paragraph, setParagraph] = useState('قالت الدكتورة هالة زايد وزيرة الصحة والسكان المصرية إنه تم حتى الآن إجراء تحاليل لـ 1832 حالة مشتبه بإصابتها بفيروس كورونا المستجد "كوفيد-19"، بينها 7 حالات مخالطة للحالة الإيجابية التي تم الإعلان عنها قبل يومين. وأشارت "زايد" في البيان اليومي المحدث عن فيروس كورونا في مصر إلى أن الحالات السبعة أثبتت التحاليل خلوها من الإصابة بالفيروس')
    const postItem = props.route.params.postItem;
    let video = Video;

    //   video states

    const [rate, setRate] = useState(1);
    const [volume, setVolume] = useState(1);
    const [muted, setMuted] = useState(false);
    const [resizeMode, setResizeMode] = useState('contain');
    const [duration, setDuration] = useState(0.0);
    const [currentTime, setCurrentTime] = useState(0.0);
    const [paused, setPaused] = useState(true);
    const [controls, setControls] = useState(false);
    const [skin, setSkin] = useState('custom');
    const [isBuffering, setIsBuffering] = useState(false);

    const onLoad = (data) => {
        setDuration(data.duration);
    }

    const onProgress = (data) => {
        setCurrentTime(data.currentTime);
    }

    const onBuffer = (isBuffering) => {
        setIsBuffering(isBuffering);
    }

    const getCurrentTimePercentage = () => {
        if (currentTime > 0) { return parseFloat(currentTime) / parseFloat(duration); } else { return 0; }
    }

return (
    <View style={Style.container}>
         
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={Style.BackImageContainer}>
            <Image style={Style.BackImageStyle} source={ImagesPaths.PostBackground} />

            <View  style={Style.contentStyle}>
                <Image style={{width:150,height:150,resizeMode:'contain',alignSelf:'center'}} source={postItem.img}/>
               {/* author */}
<Text style={{fontSize:FontSizes.subtitle,marginVertical:20,color:Colors.dark}}>{postItem.author}</Text>
                <Text style={Style.titleStyle}>{postItem.title}</Text>
                {/* if exist video with the content */}
                {postItem.video  ?
                    <View style={{ 
                        borderRadius: 10,backgroundColor:Colors.dark
                      }}>
                        <Video
                            // source={require('../../assets/dummyVideo.mp4')}
                            source={postItem.video}
                            controls={true}
                            style={Style.imageStyle}
                            resizeMode={'contain'}
                        />
                     </View>
                  
                    : null}
                <Text style={Style.paragraphStyle}>{postItem.paragraph}</Text>

            </View>
        </View>
        </ScrollView>
    </View>
)
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center" },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width:width,
        height:height,
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor:'red',
        width:width,
        height:height
       },
});


export default PostScreen;
