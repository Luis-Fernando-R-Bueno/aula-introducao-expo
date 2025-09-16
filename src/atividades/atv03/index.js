import { View, Text, Button, TouchableOpacity } from 'react-native';
import {useState} from 'react';
import styles from './styles';

export default function Atividade03() {

    const [numero, setNumero] = useState(10);

    function handleIncrementar() {
        setNumero(numero + 1);
    }

    function handleDecrementar() {
        setNumero(numero - 1);
    }

    function handleZerar() {
        setNumero(0);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 03</Text>

            <TouchableOpacity
                style={styles.botao} onPress={() => { handleDecrementar() }}>
                <Text style={styles.txtbotao}>-1</Text>
            </TouchableOpacity>

            <Text style={styles.txt}>{numero}</Text>

            <TouchableOpacity
                style={styles.botao} onPress={() => { handleIncrementar() }}>
                <Text style={styles.txtbotao}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botao} onPress={() => { handleZerar() }}>
                <Text style={styles.txtbotao}>Zerar</Text>
            </TouchableOpacity>

        </View>
    );
}