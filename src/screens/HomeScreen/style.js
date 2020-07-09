import Colors from '../../assets/constants/Colors';
import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const Style = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
        flex: 1,

    },
    itemContainer: {
        width: width/2 - 30,
        height: width *0.8,
    },
    bodyContent: {
        // flexDirection: 'row', 
        // flexWrap: 'wrap', 
        width: width - 40,
        alignSelf: 'center',
        marginVertical: 20,
        paddingBottom:'10%'
    },
    EmptyContent:{
        marginVertical: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    textEmptyStyle:{
        color: Colors.textGray,
        fontSize: 18,
    }
})

export default Style;