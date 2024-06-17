import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../context/AuthContext';

interface DeliveryHomeScreenProps {
    route: any;
    navigation: any;
}

const HomeScreenDelivery: React.FC<DeliveryHomeScreenProps> = ({ route, navigation }) => {
    const { isAuthenticated, login, logoutUser } = useAuth();

    const handleLogin = () => {
        login('votre_token_jwt');
    };

    const handleLogout = () => {
        logoutUser();
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {isAuthenticated ? (
                <Button title="Déconnexion" onPress={handleLogout} />
            ) : (
                <Button title="Connexion" onPress={handleLogin} />
            )}
            <Text>{isAuthenticated ? 'Connecté' : 'Déconnecté'}</Text>
        </View>
    );
};

export default HomeScreenDelivery;
