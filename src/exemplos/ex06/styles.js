import { StyleSheet} from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";
 
const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#ff0',
            //alignItems: 'center',
            //justifyContent: 'space-evenly',
        },

       entradaImc: {
            flex: 1,
            flexDirection: 'row',
       },

       input: {
            height: 80,
            textAlign: 'center',
            width: '50%',
            fontSize: 50,
            marginTop: 24,
            color: 'lightgray',
       },

       button: {
            backgroundColor: '#89FFA5',
       },

       buttonText: {
            alignSelf: 'center',
            padding: 30,
            fontSize: 25,
            color: '#6DC4A4',
            fontWeight: 'bold',
       },

       resultados: {
            alignSelf: 'center',
            color: 'lightgray',
            fontSize: 65,
            padding: 15,
       },
    }
);


export default styles;