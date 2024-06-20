import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importez les écrans spécifiques pour les clients
import ClientHomeScreen from './HomeScreen';
import Profile from './Profile';
import Settings from './Settings';
import Orders from './Orders';

const Stack = createStackNavigator();

const ClientNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="ClientHome" screenOptions={{ headerShown: false, headerTitle: "Client" }}>
            <Stack.Screen name="ClientHome" component={ClientHomeScreen} options={{ headerShown: false, headerTitle: "Home Client" }}  />

            {/* Ajoutez d'autres écrans ici */}
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, headerTitle: "Client Profile" }}  />

            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false, headerTitle: "Client Settings" }}  />

            <Stack.Screen name="Orders" component={Orders} options={{ headerShown: false, headerTitle: "Client Orders" }}  />
        </Stack.Navigator>
    );
};

export default ClientNavigator;
