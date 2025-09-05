import {View, Text, Image}  from 'react-native';
import styles from './styles';
import Mensagem from './mensagem';

export default function Atividade02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 02</Text>

            <Mensagem titulo={'Camisa Branca e Preta'}>Camisa com listras largas, Modelo 2024</Mensagem>
            <Mensagem titulo={'Camisa Preta'}>Camisa preta com listras, Modelo 2024</Mensagem>
            <Mensagem titulo={'Camisa Listrada'}>Camisa com listras, modelo clássico</Mensagem>
            <Mensagem titulo={'Camisa São Jorge'}>Camisa modelo de 2012</Mensagem>
        </View>
    );
}