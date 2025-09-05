import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#fff',
            padding: 8,
            flex: 1,
            alignItems: 'center',
            borderRadius: 10,
        },

        titulo: {
            fontSize: RFPercentage(3),
            color: '#D50000',
            fontWeight: 'bold',
            borderWidth: 4,
            borderColor: '#000',
            marginTop: 10,
            marginBottom: 10,
            padding: 8,
            width: '100%',
            height: 80,
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: 50,
        },

        imagem: {
            // height: RFPercentage(10),
            // width: RFPercentage(28),
            width: '80%',
            resizeMode: 'contain',
        }
    }
);

export default styles;