import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importez les écrans spécifiques pour les clients
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const LivreurNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="LivreurHome" screenOptions={{ headerShown: false, headerTitle: "Livreur" }}>
            <Stack.Screen name="LivreurHome" component={HomeScreen} options={{ headerShown: false, headerTitle: "Home Livreur" }}  />
        </Stack.Navigator>
    );
};

export default LivreurNavigator;
