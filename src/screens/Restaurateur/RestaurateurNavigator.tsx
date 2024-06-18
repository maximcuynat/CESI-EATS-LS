import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importez les écrans spécifiques pour les clients
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const RestaurateurNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="RestaurateurHome" screenOptions={{ headerShown: false, headerTitle: "Restaurateur" }}>
            <Stack.Screen name="RestaurateurHome" component={HomeScreen} options={{ headerShown: false, headerTitle: "Home Restaurateur" }}  />
        </Stack.Navigator>
    );
};

export default RestaurateurNavigator;
