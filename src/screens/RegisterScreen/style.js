import Colors from '../../assets/constants/Colors';
import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const Style = StyleSheet.create({
    EllipsContainerStyle: {
        width: '100%',
        height: height*0.4,
        // marginTop:20,
        justifyContent:'center',
        // backgroundColor:'red'
    },
    EllipsStyle:{
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
      
    }
})

export default Style;