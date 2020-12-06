import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../assets/constants/Colors'
import FontSizes from '../../assets/constants/FontSizes'
const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:20,
        backgroundColor:Colors.light
    },
    MainContainer: {
        // height: '100%',
        padding: 20,
        // paddingBottom:70,
        backgroundColor:Colors.light

      },
    //   container: {
    //     flexDirection: 'row-reverse',
    //     alignItems: 'center',
    //   },
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
      },
      boxStyle:{
        borderRadius:20,
        shadowColor: "#000",
          backgroundColor:Colors.light,shadowOffset: {    width: 0, height: 2,  },
           shadowOpacity: 0.25, shadowRadius: 3.84,     
                     elevation: 5 ,borderWidth: 1, borderColor: Colors.secondary
      }
})


export default styles