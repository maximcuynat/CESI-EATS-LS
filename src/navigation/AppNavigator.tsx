import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';  // Utilisation de useSelector pour accéder au state Redux
import { RootState } from '../store/store';  // Assurez-vous que RootState est correctement défini dans votre store
import AuthNavigator from './AuthNavigator';  // Importer votre navigation d'authentification

// Importer les écrans pour chaque type d'utilisateur
import RestaurantHomeScreen from '../screens/Restaurateur/HomeScreen';
import DeliveryHomeScreen from '../screens/Livreur/HomeScreen';

// ClientNavigator, RestaurantNavigator, DeliveryNavigator, etc.
import ClientNavigator from '../screens/Client/ClientNavigator';
import RestaurateurNavigator from '../screens/Restaurateur/RestaurateurNavigator.tsx';
import LivreurNavigator from '../screens/Livreur/LivreurNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const userType = useSelector((state: RootState) => state.user.user?.role);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {userType ? (
        <Stack.Screen name="Connected" options={{ headerShown: false, headerTitle: "Connected User" }}>
          {(props: { route: any; navigation: any }) => {
            switch (userType) {
              case 'client':
                return <ClientNavigator />;
              case 'restaurateur':
                return <RestaurateurNavigator />;
              case 'livreur':
                return <LivreurNavigator />;
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
