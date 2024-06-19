import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importez les écrans spécifiques pour les clients
import HomeScreen from './HomeScreen';

// Importez les écrans spécifiques pour les restaurateurs
import ArticlesScreen from './Articles';
import AddArticlesScreen from './AddArticles';

import MenuScreen from './Menu';
import AddMenuScreen from './AddMenu';

import OrdersScreen from './Orders';

import Profile from './Profile';
import Settings from './Settings';

const Stack = createStackNavigator();

const RestaurateurNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="RestaurateurHome" screenOptions={{ headerShown: false, headerTitle: "Restaurateur" }}>
            <Stack.Screen name="RestaurateurHome" component={HomeScreen} options={{ headerShown: false, headerTitle: "Home Restaurateur" }}  />

            {/* Gestion des Articles */}
            <Stack.Screen name="Articles" component={ArticlesScreen} options={{ headerShown: false, headerTitle: "Articles Restaurateur" }} />
            <Stack.Screen name="AddArticles" component={AddArticlesScreen} options={{ headerShown: false, headerTitle: "Article Restaurateur" }} />

            {/* Gestions des Menus */}
            <Stack.Screen name="Menus" component={MenuScreen} options={{ headerShown: false, headerTitle: "Menus Restaurateur" }} />
            <Stack.Screen name="AddMenu" component={AddMenuScreen} options={{ headerShown: false, headerTitle: "Menu Restaurateur" }} />

            {/* Gestion des Commandes */}
            <Stack.Screen name="Orders" component={OrdersScreen} options={{ headerShown: false, headerTitle: "Orders Restaurateur" }} />

            {/* Gestion des Paramètres */}
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false, headerTitle: "Settings Restaurateur" }} />
            
            {/* Profile */}
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, headerTitle: "Profile Restaurateur" }} />
        </Stack.Navigator>
    );
};

export default RestaurateurNavigator;
