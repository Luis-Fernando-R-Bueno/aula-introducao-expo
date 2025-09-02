import { View, Text} from 'react-native';

import styles from './styles';

export default function Atividade01() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 01</Text>
            <Text style={styles.txt}>Primeira Atividade de Mobile</Text>
            <Text style={styles.nome}>Luis Fernando</Text>
            <Text style={styles.sobrenome}>Rodrigues Bueno</Text>
        </View>
    );
}