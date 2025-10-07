import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Exemplo05() {''
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}> Exemplo 05 </Text>

            <Text style={styles.txtSaida}>Calculadora básica</Text>

            <Text style={styles.txtLabel}> 1º número </Text>
            <TextInput style={styles.txtEntrada} />

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.txtLabel}> 2º número </Text>
            <TextInput style={styles.txtEntrada} />

            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

            <Text style={styles.txtLabel}> Total </Text>
            <TextInput style={styles.txtEntrada} />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.txtButton}> + </Text>
            </TouchableOpacity>
        </View>
    );
}