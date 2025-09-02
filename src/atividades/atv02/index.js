import { View, Text, Image}  from 'react-native';

import styles from './styles';

import Mensagem from './mensagem';

export default function Atividade02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 02</Text>

            <Mensagem titulo={'Camisa Branca e Preta'}>Você não clicou corretamente!</Mensagem>
            <Mensagem titulo={'Camisa Preta'}>Acesso permitido</Mensagem>
            <Mensagem titulo={'Camisa Listrada'}>O tmepo acabou!</Mensagem>
            <Mensagem titulo={'Camisa São Jorge'}>O tmepo acabou!</Mensagem>
        </View>
    );
}