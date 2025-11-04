import { View, Text, FlatList, Alert, Plataform } from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';


import AddItem from './addItem';
import ItemLista from './itemLista';
import styles from './styles';

export default function Exemplo08() {

    const [items, setItems] = useState([
        { id: uuid.v4(), text: 'Leite integral' },
        { id: uuid.v4(), text: 'Pão de forma' },
        { id: uuid.v4(), text: 'Nescau' },
        { id: uuid.v4(), text: 'Manteiga' },
    ]); // [] array ou lista de alguns itens

    function deleteItems(id) {
        setItems(prevItems => {return prevItems.filter(item => item.id != id);})
    }

    function addItems(item) {
        setItems(prevItems => {return [{id: uuid.v4(), text: item}, ...prevItems];})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 08</Text>
            <Text style={styles.cabecalho}>Lista de compras</Text>
            <AddItem addItems={addItems}/>

            <FlatList
                data={items}
                renderItem={({ item }) => <ItemLista id={item.id} deleteItems={deleteItems}>{item.text}</ItemLista>}
                style={styles.lista}
            />
        </View>
    );
}