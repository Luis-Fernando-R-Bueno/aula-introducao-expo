import { View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
import { useState } from 'react';

export default function Exemplo06() {

    const[massa, setMassa] = useState(0);
    const[altura, setAltura] = useState(0);
    const[resultado, setResultado] = useState(0);
    const[FaixaPeso, setFaixaPeso] = useState(0);

    function Calcular(){
        const valor = massa / (altura * altura);
        setResultado(valor);
    }

    function VerificarPeso(){
        if (resultado < 18.5){return 'Abaixo do peso';} 
        else if (18.5 <= valor <= 24.9){return 'Peso normal';}
        else if (25 <= valor <= 29.9){return 'Sobrepeso';}
        else if (30 <= valor <= 34.9){return 'Obesidade grau 1';}
        else if (35 <= valor <= 39.9){return 'Obesidade grau 2';}
        else {return 'Obesidade grau 3';}
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Exemplo 06</Text>
            <View style={styles.entradaImc}>
                <TextInput 
                placeholder='Massa' 
                placeholderTextColor='red' 
                keyboardType='numeric' 
                style={styles.input}
                onChangeText={(entrada) => setMassa(entrada)}
                />

                <TextInput 
                placeholder='Altura' 
                placeholderTextColor='red' 
                keyboardType='numeric' 
                style={styles.input}
                onChangeText={(entrada) => setAltura(entrada)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={()=>Calcular()}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

            <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>

            <Text style={styles.faixaPeso}>{VerificarPeso}</Text>
        </View>
    );
}


