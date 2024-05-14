import React from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, StyleSheet ,Image, TouchableOpacity } from 'react-native';
import styles from './style';

const indexhomeScreen= () => {
  // Dados fictícios para categorias e produtos populares
  const categories = ['Pizza', 'Burgers', 'Sushi', 'Drinks'];
  const popularItems = [
    { id: '1', name: 'Pepperoni Pizza', imageUrl: 'https://linktoimage.com/image.jpg' },
    { id: '2', name: 'Cheeseburger', imageUrl: 'https://linktoimage.com/image2.jpg' },
    { id: '3', name: 'California Roll', imageUrl: 'https://linktoimage.com/image3.jpg' },
  ];

  // Renderizador para categorias
  const renderCategory = ({ item }) => (
    <Text style={styles.category}>{item}</Text>
  );

  // Renderizador para itens populares
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for food..."
      />
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item}
        horizontal
      />
      <Text style={styles.title}>Popular Items</Text>
      <FlatList
        data={popularItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );

  
};

export default indexhomeScreen;