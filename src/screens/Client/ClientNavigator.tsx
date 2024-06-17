import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importez les écrans spécifiques pour les clients
import ClientHomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const ClientNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="ClientHome" screenOptions={{ headerShown: false, headerTitle: "Client" }}>
            <Stack.Screen name="ClientHome" component={ClientHomeScreen} options={{ headerShown: false, headerTitle: "Home Client" }}  />
        </Stack.Navigator>
    );
};

export default ClientNavigator;
