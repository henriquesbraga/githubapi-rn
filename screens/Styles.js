import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
    container: {
      backgroundColor: '#003399',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
      flex: 1,
      padding: 4,
    },
    input: {
        width: 200,
        height: 50,
        padding: 10,
        marginTop: 20,
        backgroundColor: '#99ccff',
        borderBottomWidth: 1.0,
        borderTopWidth: 1.0,
        borderLeftWidth: 1.0,
        borderRightWidth: 1.0,
        fontSize: 21,
        borderColor: '#000099',
        borderRadius: 10
      },

    imagelogo:{
      marginTop: -150,
    },

    button: {
      alignItems: "center",
      backgroundColor: "#000099",
      padding: 10,
      marginTop: 10,
      marginLeft: 70,
      marginRight: 70,
      borderRadius: 5,
      color: "#ffffff"
    },

    imageFrame:{
      marginTop: -90,
      width: 250,
      height: 250,
      borderWidth: 2,
      borderColor: '#F44336',
    },

    textInformation:{
      fontSize: 19,
      color: '#ffffff',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 1,
      textShadowColor: '#000',
    }
  
  });
  
  export default styles;