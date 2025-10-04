import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Index() {
    ''

    const [textoEscrito, setTextoEscrito] = useState('');
    const [mensagem, setMensagem] = useState('Texto programado');

    function ExibeTexto() {
        setMensagem(textoEscrito);
        setTextoEscrito('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Exemplo 04</Text>

            <Text style={styles.txtSaida}>{mensagem}</Text>

            <TextInput
                style={styles.txtEntrada}
                onChangeText={(entrada) => setTextoEscrito(entrada)}
                value={textoEscrito}
            />

            <TouchableOpacity 
            style={styles.button} 
            onPress={() => { ExibeTexto(); }}>
                <Text style={styles.textButton}> Exibir texto </Text>
            </TouchableOpacity>
        </View>
    );
}