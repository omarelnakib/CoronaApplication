import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import Colors from '../assets/constants/Colors';
import FontSizes from '../assets/constants/FontSizes';
import { IconButton } from 'react-native-paper';
import RoundButton from './RoundButton';

const QuestionsForm = (props) => {

 

  return (
    <>
      <View style={styles.MainContainer}>
        {/* // Index of question */}
        <ScrollView showsVerticalScrollIndicator={false}>
        {props.data.map((item, itemIndex) => {
          return (
            <View style={{ paddingVertical: 10 }}>
              <View style={[styles.container]}>
                <Text style={styles.indexStyle}>{itemIndex + 1}</Text>
                {/* Question */}
                <Text style={styles.QuestionStyle}>{item.question}</Text>
              </View>
              <View style={{ }} >
                {/* Answers */}
                {item.answers.map((answer, index) => {

                  return (
                    <TouchableOpacity style={[styles.AnswerStyle,{borderColor:answer.selected?Colors.primary:Colors.placeholder}]} 
                    onPress={() => props.handleClick(itemIndex,index)}>
                      <Text style={{ fontSize: FontSizes.subtitle,textAlign:'right' }}>.{index + 1}</Text>
                      <Text style={{ fontSize: FontSizes.subtitle,textAlign:'right' }}>  {answer.answer}</Text>
                    </TouchableOpacity>
                  )
                })
                }
              </View>

            </View>
          )
        })

        }

        {/* footer button */}
        <RoundButton handleClick={()=>props.submit()} disabled={props.disabled} buttonStyle={props.disabled?{opacity:0.5}:{opacity:1}} style={{marginTop:20,marginBottom:20}}  value="تابع" ></RoundButton>

</ScrollView>
      </View>


     
    </>
  )
}


const styles = StyleSheet.create({
  MainContainer: {
    height: '100%',
    padding: 20,
    paddingBottom:70
  },
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  indexStyle: {
    borderRadius: 30,
    backgroundColor: Colors.primary,
    color: Colors.light,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    width: 25,
    height: 25
  },
  QuestionStyle: {
    fontSize: FontSizes.subtitle,
    paddingHorizontal: 10
  },
  AnswerStyle: {
    // elevation: 3,
    borderWidth: 2,
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop:10,
    flexDirection:'row-reverse',
    justifyContent:'flex-start'
  }
});

export default QuestionsForm