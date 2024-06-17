import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';  // Utilisation de useSelector pour accéder au state Redux
/*
    import { RootState } from '../store/types';  // Types Redux pour accéder au state global
    import { User } from '../store/slices/userSlice';  // Importer le type User depuis le slice userSlice
    import { RootState, User  } from '../store/slices/userSlice';
*/

import { RootState } from '../store/store';  // Assurez-vous que RootState est correctement défini dans votre store

import AuthNavigator from './AuthNavigator';  // Importer votre navigation d'authentification

// Importer les écrans pour chaque type d'utilisateur
import ClientHomeScreen from '../screens/Client/HomeScreen';
import RestaurantHomeScreen from '../screens/Restaurant/HomeScreen';
import DeliveryHomeScreen from '../screens/Delivery/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const userType = useSelector((state: RootState) => state.user.user?.role);
    //const userType = useSelector((state: RootState) => state.auth.user?.type);  // Exemple d'accès au type d'utilisateur depuis le state

    return (
        <Stack.Navigator>
            {userType ? (
                <Stack.Screen name="Home">
                    {(props: { route: any; navigation: any }) => {
                        switch (userType) {
                            case 'client':
                                return <ClientHomeScreen route={props.route} navigation={props.navigation} />;
                            case 'restaurant':
                                return <RestaurantHomeScreen route={props.route} navigation={props.navigation} />;
                            case 'delivery':
                                return <DeliveryHomeScreen route={props.route} navigation={props.navigation} />;
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
