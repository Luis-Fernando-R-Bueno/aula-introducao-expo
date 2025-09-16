import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo04() {

    const [texto, setTexto] = useState('');
    const [txt2, setTxt2] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 04</Text>

            <Text style={styles.txt}>{texto}</Text>

            <TextInput
                onChangeText={setTexto}
                placeholder='Senha'
                keyboardType='ascii-capable'
                // secureTextEntry
                style={styles.input}
            />

            <Text style={styles.txt}>{txt2}</Text>

            <TextInput
                onChangeText={setTxt2}
                placeholder='Digite seu número'
                keyboardType='numeric'
                maxLength={5}
                style={styles.input}
            />

            <TouchableOpacity 
            style={styles.botao} 
            onPress={() => {}
            }>
                <Text style={styles.txtBotao}>Exibir Texto</Text>
            </TouchableOpacity>

        </View>
    );
}