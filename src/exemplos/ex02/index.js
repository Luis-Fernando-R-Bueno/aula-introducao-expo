import { View, Text, Image}  from 'react-native';

import styles from './styles';

import img from '../../../assets/002-1-react-native.png';

import Mensagem from './mensagem';

export default function Exemplo02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 02</Text>
            <Image source={img} style={styles.imagem} />

            <Mensagem titulo={'ERRO'}>Você não clicou corretamente!</Mensagem>
            <Mensagem titulo={'SUCESSO'}>Acesso permitido</Mensagem>
            <Mensagem titulo={'AVISO'}>O tmepo acabou!</Mensagem>
        </View>
    );
}