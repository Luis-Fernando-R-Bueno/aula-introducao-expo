import { View, Text, Button, TouchableOpacity, Linking } from 'react-native';
import {useState} from 'react';
import styles from './styles';

export default function Exemplo03() {

    const [numero, setNumero] = useState(10);

    function handleIncrementar() {
        setNumero(numero + 1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 03</Text>

            <Button
                onPress={() => { alert('Alguém tocou no botão!') }}
                title="Alerta"
                color="#777"
                acessibilityLabel="Botão de alerta"
            />

            <Button
                onPress={() => Linking.openURL('https://www.youtube.com/shorts/Vy3UfRI8yXo')}
                title="Absolute Cinema"
                color="#777"
                accessibilityLabel="Abrir link"
            />

            <Text style={styles.txt}>{numero}</Text>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => { handleIncrementar() }
                }>
                <Text style={styles.txtbotao}>Incrementar número</Text>
            </TouchableOpacity>

        </View>
    );
}