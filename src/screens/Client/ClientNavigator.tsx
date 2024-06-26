import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importez les écrans spécifiques pour les clients
import Home from './HomeScreen';
import Profile from './Profile';
import Settings from './Settings';
import Orders from './Orders';
import Order from './Order';

const Stack = createStackNavigator();

const ClientNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, headerTitle: "Client" }}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false, headerTitle: "Home Client" }}  />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, headerTitle: "Client Profile" }}  />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false, headerTitle: "Client Settings" }}  />
      <Stack.Screen name="Orders" component={Orders} options={{ headerShown: false, headerTitle: "Client Orders" }}  />
      <Stack.Screen name="Order" component={Order} options={{ headerShown: false, headerTitle: "Client Order" }}  />
    </Stack.Navigator>
  );
};

export default ClientNavigator;
