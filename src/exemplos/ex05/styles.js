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
        }
    }
);


export default styles;