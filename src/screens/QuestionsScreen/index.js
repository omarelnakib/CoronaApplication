import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Dimensions, TouchableOpacity, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView, FlatList } from 'react-native';
import Style from './style';
import ImagesPaths from '../../assets/constants/ImagesPaths'
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes'
import Header from '../../components/Header'
import PostItem from '../../components/PostItem'
import { IconButton } from 'react-native-paper';
import QuestionsForm from '../../components/QuestionsForm';
const { height, width } = Dimensions.get('window');

const QuestionsScreen = props => {
  const [ScreenHeight, setScreenHeight] = useState(height);
  const [ScreenWidth, setScreenWidth] = useState(width);
  const [QuestionIndex, setQuestionsIndex] = useState(1);
  const [DataList, setDataList] = useState([
    {
      id: '1',
      question: "هل تعاني من فقدان حاسة الشم؟",
      answers: [{value:'نعم',selected:false},{value:'لا',selected:false}]

    },
    {
      id: '2',
      question: "هل تعاني من ارتفاع في درجة الحرارة؟",
      answers: [{value:'نعم',selected:false},{value:'لا',selected:false}]

    },
    {
      id: '3',
      question: "هل تعاني من الصداع؟",
      answers: [{value:'نعم',selected:false},{value:'لا',selected:false}]
    },
    {
      id: '4',
      question: "هل تعاني من ضيق في التنفس؟",
      answers: [{value:'نعم',selected:false},{value:'لا',selected:false}]
    },
    {
      id: '5',
      question: "هل تعاني من تكسير في الجسد",
      answers: [{value:'نعم',selected:false},{value:'لا',selected:false}]
    },

  ]);
  const [chosenAnswers,setChosenAnswers] = useState(DataList)

  const chooseAnswer=(itemIndex,Answerindex)=>{
    let tempArr = [...DataList];
    // set every answer not selected
    tempArr[itemIndex].answers.forEach(element => {
     element.selected=false
    }); 
    //set selected answer
    tempArr[itemIndex].answers[Answerindex].selected=true;

    setDataList([...tempArr])
   let tempChosen = [...chosenAnswers];
   tempChosen[itemIndex] = {answer:tempArr[itemIndex].answers[Answerindex].value};

   setChosenAnswers([...tempChosen]);
  }
  
  const submit =()=>{
    console.log(chosenAnswers)
    if(chosenAnswers[0].answer =='لا' && chosenAnswers[2].answer =='لا')
    props.navigation.navigate('ResultScreen')

    else
    props.navigation.navigate('LocationScreen')
  }
  return (
    <>
      <View style={Style.container}>
      <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='ابلاغ عن حالة' leftIcon='menu' HandleBack={() => props.navigation.navigate('MenuScreen')}></Header>

      <QuestionsForm submit={()=>submit()}  data={DataList} handleClick={(item,index) => chooseAnswer(item,index)}  ></QuestionsForm>
    
      </View>
     
    </>
  )
}
export default QuestionsScreen;
