import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundcolor: 'white',
            // alignItems: 'center',
            // flex: 1,
        },

        txtSaida: {
            margin: 24,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#E53935',
        },

        txtEntrada: {
            borderWidth: 4,
            textAlign: 'center',
            fontSize: 22,
            borderColor: '#B71C1C',
            height: 40,
            color: '#E53935',
            borderRadius: 10,
        },

        button: {
            backgroundColor: '#E53935',
            height: 40,
            justifyContent:'center',
            borderRaduius: 10,
            marginTop: 20,
        },

        textButton: {
            fontSize: 22,
            color: '#FFCDD2',
            textAlign: 'center',
        },
    }
);


export default styles;