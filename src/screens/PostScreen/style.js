import Colors from '../../assets/constants/Colors';
import { StyleSheet, Dimensions } from 'react-native';
import FontSizes from '../../assets/constants/FontSizes';

const { height, width } = Dimensions.get('window');
const Style = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
        flex: 1,

    },
    BackImageContainer:{
        width:'100%',
        height:'100%',
        // position:'absolute',
        // top:0
    },
    BackImageStyle:{
        resizeMode:'stretch',
        width:'100%',
        height:'100%',
        position:'absolute',

    },
    contentStyle:{
        height:'100%',
        padding:20,
        paddingTop:'10%'
        // justifyContent:'center',
    },
    titleStyle:{
        color:Colors.light,
        fontSize:FontSizes.title,
        textAlign:'center',
        // marginBottom:20
    },
    paragraphStyle:{
        color:Colors.light,
        fontSize:FontSizes.pragraph,
        // textAlign:'center',
        marginTop:20
    },
    imageStyle: {
        width: '100%',
        height: 200, 
        position:"relative",
        borderRadius: 20,
        backgroundColor:Colors.Black  ,
    }
 
})

export default Style;