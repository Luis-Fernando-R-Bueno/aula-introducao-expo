import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
     {
          container: {
               flex: 1,
               backgroundColor: 'white',
               justifyContent: 'center',
               padding: 8,
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
               backgroundColor: 'red',
          },

          buttonText: {
               alignSelf: 'center',
               padding: 30,
               fontSize: 25,
               color: 'white',
               fontWeight: 'bold',
          },

          resultados: {
               alignSelf: 'center',
               color: 'lightgray',
               fontSize: 65,
               padding: 15,
          },


          paragraph: {
               margin: 6,
               fontSize: 56,
               fontWeight: 'bold',
               textAlign: 'center',
               color: 'gray',
               marginBottom: RFPercentage(4),
          },

          faixaPeso: {
               alignSelf: 'center',
               color: 'lightgray',
               fontSize: 21,
               padding: 15,
               marginBottom: RFPercentage(4),
          },
     }
);

export default styles;