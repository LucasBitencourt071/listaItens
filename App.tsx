import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const App = () => {
  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState<string[]>([]);

  const addItemToList = () => {
    if (item.trim() !== '') {
      setItemList([...itemList, item]);
      setItem('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Lista de Itens</Text>

      <TextInput
        placeholder="Digite um item"
        value={item}
        onChangeText={(text) => setItem(text)}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />

      <Button title="Adicionar" onPress={addItemToList} />

      <FlatList
        data={itemList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 10,
              marginBottom: 10,
            }}
          >
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;
