import { View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
import { use, useState } from 'react';

export default function Exemplo06() {

    const[massa, setMassa] = useState(0);
    const[altura, setAltura] = useState(0);
    const[resultado, setResultado] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Exemplo 06</Text>
            <View style={styles.entradaImc}>
                <TextInput plcaceholder='Massa' placeholderTextColor='lightgray' keyboardType='numerica' style={styles.input}/>
                <TextInput plcaceholder='Altura' placeholderTextColor='lightgray' keyboardType='numerica' style={styles.input}/>
            </View>

            <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

            <Text style={styles.resultados}>{resultado}</Text>
        </View>
    );
}