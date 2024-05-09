import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './style';

const OrderDetailsScreen = () => {
  // Dados fictícios de um pedido
  const orderDetails = {
    id: '123',
    items: [
      { id: '1', name: 'Pepperoni Pizza', price: 10.99, quantity: 2 },
      { id: '2', name: 'Veggie Burger', price: 8.99, quantity: 1 },
      { id: '3', name: 'Sushi Platter', price: 15.99, quantity: 1 },
    ],
    total: 46.96
  };

  // Renderiza cada item do pedido
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.quantity} x ${item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      <FlatList
        data={orderDetails.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalTitle}>Total</Text>
        <Text style={styles.totalAmount}>${orderDetails.total.toFixed(2)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetailsScreen;