import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Dimensions, TouchableOpacity, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView, FlatList, Platform, ToastAndroid, Alert } from 'react-native';
import Style from './style';
import ImagesPaths from '../../assets/constants/ImagesPaths'
import Colors from '../../assets/constants/Colors';
import FontSizes from '../../assets/constants/FontSizes'
import Header from '../../components/Header'
import PostItem from '../../components/PostItem'
import { IconButton } from 'react-native-paper';
import QuestionsForm from '../../components/QuestionsForm';

import LoadingModel from '../../components/LoadingModel';

import { useDispatch } from 'react-redux';
import *as Action from '../../store/Actions/Cases';
import Answer from '../../Models/Answer';
import { List } from 'native-base';
import Question from '../../Models/Question';
import Globals from '../../assets/constants/Globals';
import Modal from 'react-native-modal'
import RoundButton from '../../components/RoundButton';
import DropDownHeader from '../../components/DropDownHeader';
import InputText from '../../components/InputText';
import { tokenExpiredReset } from '../../store/Actions/API_Requests'

const { height, width } = Dimensions.get('window');

const QuestionsScreen = props => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [isQuestions, setIsQuestions] = useState(false);
  const [isText, setIsText] = useState(false);
  const [caseText, setCaseText] = useState('');
  const [reportModal, setReportModal] = useState(false);
  const [caseId, setCaseId] = useState("");
  const [ScreenHeight, setScreenHeight] = useState(height);
  const [ScreenWidth, setScreenWidth] = useState(width);
  const [QuestionIndex, setQuestionsIndex] = useState(1);
  const [DataList, setDataList] = useState([]);
  const [chosenAnswers, setChosenAnswers] = useState(DataList)
  const [SurveyId, setSurveyId] = useState(0);
  //get questions from api
  useEffect(() => {
    dispatch(Action.Get_Survey(1, (event) => {
      if (event.ok) {
        setIsLoading(false);
        var questions = []
        //get each question
        setSurveyId(event.data.SurveyID);
        event.data.SQuestions.forEach(element => {
          //get each answer for a question
          let QuestionAnswers = element.AnswersSet.split(";")
          var question = new Question()
          var answers = [];
          answers = extractAnswers(QuestionAnswers)

          question.answers = answers;
          question.id = element.QID;
          question.question = element.QuestionText;
          question.questionType = element.QuestionTypeID
          questions.push(question);

        });
        setDataList(questions);
        // props.nav.navigate('DrawerNavigator')
      }  
      else if(event.status==401){
        setIsLoading(false);
       tokenExpiredReset();
    }
      else {
        setIsLoading(false);
        toast(event.data)
      }

    }))
  }, [])
  const extractAnswers = (answersString) => {
    var answers = [];
    answersString.forEach(ans => {
      let ansElement = ans.split(",")
      var answer = new Answer()
      answer.id = ansElement[0],
        answer.answer = ansElement[1],
        answer.selected = false,

        answers.push(answer);
    })
    return answers;
  }

  const prepareAnswerSubmit = () => {

    let strAnswers = "";
    chosenAnswers.forEach((element, index) => {
      strAnswers += element.question + ',' + element.answer
      if (index != chosenAnswers.length - 1)
        strAnswers += ';'

    })
    var data = {
      UserId: Globals.User.UserID,
      SurveyId: SurveyId,
      Answers: strAnswers
    }
    return data;
  }
  const chooseAnswer = (itemIndex, Answerindex) => {
    let tempArr = [...DataList];
    // set every answer not selected
    tempArr[itemIndex].answers.forEach(element => {
      element.selected = false
    });
    //set selected answer
    tempArr[itemIndex].answers[Answerindex].selected = true;

    setDataList([...tempArr])
    let tempChosen = [...chosenAnswers];
    tempChosen[itemIndex] = { question: tempArr[itemIndex].id, answer: tempArr[itemIndex].answers[Answerindex].id };

    setChosenAnswers([...tempChosen]);
  }
  const submitText = () =>{
    var data = {
      UserId: Globals.User.UserID,
      caseText: caseText
    }
    setIsLoading(true);
    dispatch(Action.Set_CaseText(data, (event) => {
      if (event.ok) {
        setReportModal(true);
        setIsLoading(false);
        console.log("Case", event.data)
        setCaseId(event.data.CaseID);
        // props.nav.navigate('DrawerNavigator')
      }
      else if(event.status==401){
        setIsLoading(false);
       tokenExpiredReset();
    }
      else {
        setIsLoading(false);
        toast(event.data)
      }

    }))
  }
  const submit = () => {
    var data = prepareAnswerSubmit();

    setIsLoading(true);
    dispatch(Action.Set_Case(data, (event) => {
      if (event.ok) {
        setReportModal(true);
        setIsLoading(false);
        console.log("Case", event.data)
        setCaseId(event.data.CaseID);
        // props.nav.navigate('DrawerNavigator')
      }
      else if(event.status==401){
        setIsLoading(false);
       tokenExpiredReset();
    }
      else {
        setIsLoading(false);
        toast(event.data)
      }

    }))
  }
  return (
    <>
      <ScrollView style={Style.container}>
        <LoadingModel LoadingModalVisiblty={isLoading} />

        <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='ابلاغ عن حالة' leftIcon='menu' HandleBack={() => props.navigation.navigate('MenuScreen')}></Header>

        <DropDownHeader headerText={"اجابة علي استبيان"} handleClick={() => { var tmp = isQuestions; setIsQuestions(!tmp) }}></DropDownHeader>
        <View style={{ display: isQuestions == true ? 'flex' : 'none' }}>
          <QuestionsForm disabled={chosenAnswers.length != DataList.length ? true : false} submit={() => submit()} data={DataList} handleClick={(item, index) => chooseAnswer(item, index)}  ></QuestionsForm>
        </View>
        <DropDownHeader headerText={"كتابة"} handleClick={() => { var tmp = isText; setIsText(!tmp) }}></DropDownHeader>
        <View style={{ display: isText == true ? 'flex' : 'none', paddingHorizontal: 10 }}>
          <InputText inputType='TextInput' placeholder='اكتب حالتك بالتفصيل ...'
            value={caseText} HandleChange={(item) => { setCaseText(item) }}
            style={{ width: '100%', height: 200, borderColor: Colors.primary, borderWidth: 1, borderRadius: 10, marginTop: 20 }}
            Isvalid={true} multiLine={true} textStyle={{ height: 200, padding: 10 }}
            secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
          ></InputText>

          <RoundButton handleClick={() => submitText()} disabled={caseText==""?true:false} buttonStyle={caseText=="" ? { opacity: 0.5 } : { opacity: 1 }} style={{ marginTop: 20 }} value="ارسال" ></RoundButton>

        </View>

        <Modal isVisible={reportModal}>
          <View style={{ flex: 0.2, backgroundColor: Colors.light, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <Text style={{ color: Colors.primary, fontSize: FontSizes.subtitle, textAlign: 'center' }}>تم بنجاح تسجيل البلاغ برقم {caseId} و سيتم متابعة البلاغ من احدى المختصين في اسرع وقت </Text>
            <RoundButton handleClick={() => { setReportModal(false); props.navigation.replace("TabsNavigator") }} style={{ marginTop: 10, marginBottom: 10 }} value="تابع" ></RoundButton>
          </View>
        </Modal>
      </ScrollView>

    </>
  )
}
export default QuestionsScreen;
