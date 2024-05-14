import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
import Pedidos from './src/pages/Pedidos/indexPedidos'
import Pedido from './src/pages/Pedido/indexPedido';
import Login from './src/pages/Login/indexLogin';
import indexhomeScreen from './src/pages/HomeScreen/indexhomeScreen';
import RegisterScreen from './src/pages/RegisterScreen/registerScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={indexhomeScreen} />
      <Tab.Screen name="Pedidos" component={Pedidos} />
      <Tab.Screen name="Pedido" component={Pedido} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#191919" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};