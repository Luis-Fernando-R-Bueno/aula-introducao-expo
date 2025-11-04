import { View, Text, FlatList, Alert, Plataform } from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';

import ItemLista from './ItemLista';
import styles from './styles';

export default function Exemplo08() {

    const [items, setItems] = useState([
        { id: uuid.v4(), text: 'Leite integral' },
        { id: uuid.v4(), text: 'Pão de forma' },
        { id: uuid.v4(), text: 'Nescau' },
        { id: uuid.v4(), text: 'Manteiga' },
    ]); // [] array ou lista de alguns itens

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 08</Text>
            <Text style={styles.cabecalho}>Lista de compras</Text>

            <FlatList
                data={items}
                renderItem={({ item }) => <ItemLista>{item.text}</ItemLista>}
                style={styles.lista}
            />
        </View>
    );
}