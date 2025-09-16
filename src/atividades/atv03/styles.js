import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            fontFamily: 'Arial',
        },

        titulo: {
            fontSize: RFPercentage(5),
            fontWeight: 'bold',
            color: '#000',
            fontFamily: 'Arial',
        },

        txt: {
            fontSize: RFPercentage(2.5),
            fontFamily: 'Arial',
            color: '#000',
        },

        botao: {
            color: '#000',
            width: '50%',
            borderRadius: RFPercentage(1),
            padding: RFPercentage(1),
            textAlign: 'center',
        },

        txtbotao: {
            color: '#000',
            fontSize: RFPercentage(2),
        }
    }
);

export default styles;