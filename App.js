import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Constants from 'expo-constants';

import Index from './src/components/index';



export default function App() {
  return (
    <View style={styles.container}>
      <Index />
      <StatusBar style="light" />''
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'darkslategrey',
    padding: 8,
    paddingTop: Constants.statusBarHeight,
  },
});