import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importez les écrans spécifiques pour les clients
import Home from './HomeScreen';

// Importez les écrans spécifiques pour les restaurateurs
import Articles from './Articles';
import AddArticles from './AddArticles';

import Menus from './Menu';
import AddMenu from './AddMenu';

import Orders from './Orders';

import Profile from './Profile';
import Info from './Info';
import Settings from './Settings';

const Stack = createStackNavigator();

const RestaurateurNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, headerTitle: "Restaurateur" }}>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false, headerTitle: "Home Restaurateur" }}  />

            {/* Gestion des Articles */}
            <Stack.Screen name="Articles" component={Articles} options={{ headerShown: false, headerTitle: "Articles" }} />
            <Stack.Screen name="AddArticles" component={AddArticles} options={{ headerShown: false, headerTitle: "Add Article" }} />

            {/* Gestions des Menus */}
            <Stack.Screen name="Menus" component={Menus} options={{ headerShown: false, headerTitle: "Menus Restaurateur" }} />
            <Stack.Screen name="AddMenu" component={AddMenu} options={{ headerShown: false, headerTitle: "Add Menu" }} />

            {/* Gestion des Commandes */}
            <Stack.Screen name="Orders" component={Orders} options={{ headerShown: false, headerTitle: "Orders" }} />

            {/* Gestion des Paramètres */}
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false, headerTitle: "Settings" }} />
            
            {/* Profile */}
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, headerTitle: "Profile" }} />
                
            {/* Info */}
            <Stack.Screen name="Info" component={Info} options={{ headerShown: false, headerTitle: "Info" }} />
        </Stack.Navigator>
    );
};

export default RestaurateurNavigator;
