import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';  // Utilisation de useSelector pour accéder au state Redux
import { RootState } from '../store/store';  // Assurez-vous que RootState est correctement défini dans votre store
import AuthNavigator from './AuthNavigator';  // Importer votre navigation d'authentification

// Importer les écrans pour chaque type d'utilisateur
import RestaurantHomeScreen from '../screens/Restaurant/HomeScreen';
import DeliveryHomeScreen from '../screens/Delivery/HomeScreen';

// ClientNavigator, RestaurantNavigator, DeliveryNavigator, etc.
import ClientNavigator from '../screens/Client/ClientNavigator';

import React from 'react';
import { Text } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const userType = useSelector((state: RootState) => state.user.user?.role);
    
    console.log('User type:', userType);
    console.log('Token', useSelector((state: RootState) => state.user.token));

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {userType ? (
                <Stack.Screen name="Connected" options={{ 
                        headerShown: false,
                        headerTitle: "Connected User"
                    }}>
                    {(props: { route: any; navigation: any }) => {
                        switch (userType) {
                            case 'client':
                                return <ClientNavigator />;
                            case 'restaurateur':
                                return <RestaurantHomeScreen route={props.route} navigation={props.navigation} />;
                            case 'livreur':
                                return <DeliveryHomeScreen route={props.route} navigation={props.navigation} />;
                            // Ajouter d'autres cas pour d'autres types d'utilisateurs au besoin
                            default:
                                return null;  // Cas par défaut pour une gestion future
                        }
                    }}
                </Stack.Screen>
            ) : (
                <Stack.Screen name="Authentificaitions" component={AuthNavigator} options={{ headerShown: false }} />
            )}
        </Stack.Navigator>
    );
};

export default AppNavigator;
