import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importez les écrans spécifiques pour les clients
import ClientHomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const ClientNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ClientHome" component={ClientHomeScreen} />
        </Stack.Navigator>
    );
};

export default ClientNavigator;
