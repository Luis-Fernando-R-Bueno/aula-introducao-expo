import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#fff',
            borderWidth: RFPercentage(0.4),
            width: '90%',
            padding: 8,
            alignItems: 'center',
            borderRadius: 30,
            marginBottom: RFPercentage(1),
        },

        titulo: {
            fontSize: RFPercentage(3),
            color: '#D50000',
            fontWeight: 'bold',
            marginBottom: RFPercentage(1),
        },

        texto: {
            fontSize: RFPercentage(2.2),
            color: '#000',
        }
    }
);

export default styles;