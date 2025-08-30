import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#00f',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            fontFamily: 'Verdana',
        },

        titulo: {
            fontSize: RFPercentage(5),
            fontWeight: 'bold',
            color: '#777',
            fontFamily: 'Verdana',
        },

        txt: {
            fontSize: RFPercentage(2.5),
            color: '#333',
            fontFamily: 'Verdana',
        },

        nome: {
            fontSize: RFPercentage(7),
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#111',
            fontFamily: 'Verdana',
        },

        sobrenome: {
            fontSize: RFPercentage(5),
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#555',
            fontFamily: 'Verdana',
        },
    }
);

export default styles;