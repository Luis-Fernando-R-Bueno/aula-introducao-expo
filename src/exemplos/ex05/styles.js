import { StyleSheet} from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";
 
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ff0',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },

        paragraph: {
            margin: 6,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#C51162',
        },

        txtSaida: {
            margin: 6,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#E91163',
        },

        txtEntrada: {
            borderWidth: 4,
            textAlign: 'center',
            fontSize: 22,
            borderColor: '#E91163',
            height: 40,
            color: '#E53935',
            borderRadius: 10,
            marginTop: 10,   
        },

        button: {
            backgroundColor: '#E91163',
            height: 40,
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 20,
        },

        txtButton: {
            fontSize: 22,
            color: '#FF80AB',
            textAlign: 'center',
        },

        txtLabel: {
            fontSize: 16,
            color: '#C51162',
            fontWeight: 'bold',
        },
    }
);


export default styles;