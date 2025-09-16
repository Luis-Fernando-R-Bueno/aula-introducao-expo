import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Exemplo04 from './src/exemplos/ex04';



export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo04 />
      <StatusBar style="light" />''
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategrey',
    padding: 10,
    paddingTop: Constants.statusBarHeight,
  },
});