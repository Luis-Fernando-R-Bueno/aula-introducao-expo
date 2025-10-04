import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            fontFamily: 'Arial',
            backgroundcolor: 'white',
            // alignItems: 'center',
            // flex: 1,
        },

        txtSaida: {
            margin: 24,
            fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#E53935',
        },

        txtEntrada: {
            borderWidth: 4,
            textAlign: 'center',
            fontSize: 22,
            borderColor: '#B71C1C',
            height: 60,
            color: '#E53935',
            borderRadius: 35,
        },

        button: {
            backgroundColor: '#E53935',
            height: 40,
            justifyContent: 'center',
            borderRaduius: 10,
            marginTop: 20,
        },

        textButton: {
            fontSize: 22,
            color: 'white',
            textAlign: 'center',
        },

        paragraph: {
            margin: 24,
            fontSize: 26,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
        }
    }
);


export default styles;