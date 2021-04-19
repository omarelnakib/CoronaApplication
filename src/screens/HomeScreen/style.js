import Colors from '../../assets/constants/Colors';
import { StyleSheet, Dimensions } from 'react-native';
import FontSizes from '../../assets/constants/FontSizes';

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
        marginBottom: 20,
        paddingBottom:175
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
    },
    title: {
        color: Colors.primary,
        fontSize: FontSizes.title,
        marginHorizontal: 20,
        marginTop:20,
        marginBottom:10,
        textAlign:'right'
    },
    iconStyle: {
        width: 25
      },
      SearchContainer:{
        width: '80%',
        height:40,
        backgroundColor: Colors.light,
        borderRadius: 50,
        borderWidth:1,
        borderColor:Colors.primary,

        justifyContent: 'center',
        alignSelf: 'center',
        alignItems:'center'
      },
      inputStyle:{
        borderWidth: 0,
        
        borderBottomWidth:0
      }
})

export default Style;