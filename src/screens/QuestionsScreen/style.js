import Colors from '../../assets/constants/Colors';
import { StyleSheet, Dimensions } from 'react-native';
import FontSizes from '../../assets/constants/FontSizes';

const { height, width } = Dimensions.get('window');
const Style = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
        flex: 1,
        // padding:20,
        // paddingTop:60
    },
  
})

export default Style;