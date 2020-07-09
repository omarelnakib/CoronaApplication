import Colors from '../../assets/constants/Colors';
import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const Style = StyleSheet.create({
   
 container:{
     height:'100%',
     backgroundColor:Colors.light
 }
})

export default Style;