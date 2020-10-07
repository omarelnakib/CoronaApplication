import Toast from 'react-native-tiny-toast'

export const toast=(target)=>{
    Toast.show(target, {
      position: Toast.position.center,
      duration: 3000,
      textColor: "#fff",
      containerStyle: {
        backgroundColor: "rgba(0,0,0,0.7)",
        width: "90%",
        borderRadius: 20,
        paddingHorizontal:20
        
      }
      //textStyle: Colors.Black,
    });
}
