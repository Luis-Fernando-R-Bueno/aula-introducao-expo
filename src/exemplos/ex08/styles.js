import { StyleSheet} from 'react-native'; 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fafafa',
            alignItems: 'center',
            borderRadius: RFPercentage(2),
            padding: RFPercentage(1),
        },

        titulo:{
            fontSize: RFPercentage(2),
            color: 'deepskyblue',
            fontWeight: 'bold',
            borderWidth: 2,
            borderColor: 'deepskyblue',
            marginTop: 10,
            marginBottom: 10,
            padding: 8,
            width: '100%',
            height: 80,
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: 20,
        },

        cabecalho:{
            backgroundColor: 'deepskyblue',
            width: '100%',
            padding: RFPercentage(2),
            alignItems: 'center',
            color: '#fafafa',
            fontSize: RFValue(20),
            textAlign: 'center',
        },

        lista: {
            marginTop: RFPercentage(10),
            width: '100%',
        },
    }
);


export default styles;