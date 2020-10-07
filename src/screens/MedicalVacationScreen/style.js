import Colors from '../../assets/constants/Colors';
import { StyleSheet, Dimensions } from 'react-native';
import FontSizes from '../../assets/constants/FontSizes';

const { height, width } = Dimensions.get('window');
const Style = StyleSheet.create({
   
 container:{
     height:'100%',
     backgroundColor:Colors.light
 },
 title: {
    color: Colors.primary,
    fontSize: FontSizes.subtitle,
    marginTop: 25
},
})

export default Style;