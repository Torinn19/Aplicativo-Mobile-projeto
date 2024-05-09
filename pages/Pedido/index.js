import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './style';

const OrderScreen = () => {
  // Lista de produtos disponíveis
  const products = [
    { id: '1', name: 'Pepperoni Pizza', price: 10.99 },
    { id: '2', name: 'Veggie Burger', price: 8.99 },
    { id: '3', name: 'Sushi Platter', price: 15.99 },
  ];

  // Estado para armazenar os itens adicionados ao pedido
  const [cart, setCart] = useState([]);

  // Função para adicionar produto ao carrinho
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Função para finalizar o pedido
  const placeOrder = () => {
    alert(Order ,placed , {cart, length} , items);

    setCart([]); // Limpar carrinho após pedido
  };

  // Renderiza cada produto
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name} - ${item.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.orderButton} onPress={placeOrder} disabled={cart.length === 0}>
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OrderScreen;