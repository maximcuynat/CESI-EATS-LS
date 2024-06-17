import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';  // Utilisation de useSelector pour accéder au state Redux
import { RootState } from '../store/types';  // Types Redux pour accéder au state global
import AuthNavigator from './AuthNavigator';  // Importer votre navigation d'authentification

const Stack = createStackNavigator();

const AppNavigator = () => {
    const userType = useSelector((state: RootState) => state.auth.user?.type);  // Exemple d'accès au type d'utilisateur depuis le state

    return (
        <Stack.Navigator>
            {userType ? (
                <Stack.Screen name="Home">
                    {props => {
                        switch (userType) {
                            case 'client':
                                return <ClientHomeScreen {...props} />;
                            case 'restaurant':
                                return <RestaurantHomeScreen {...props} />;
                            case 'delivery':
                                return <DeliveryHomeScreen {...props} />;
                            // Ajouter d'autres cas pour d'autres types d'utilisateurs au besoin
                            default:
                                return null;  // Cas par défaut pour une gestion future
                        }
                    }}
                </Stack.Screen>
            ) : (
                <Stack.Screen name="Auth" component={AuthNavigator} />
            )}
        </Stack.Navigator>
    );
};

export default AppNavigator;
