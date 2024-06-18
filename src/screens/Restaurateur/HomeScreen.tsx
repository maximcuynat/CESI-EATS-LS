import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';

interface RestaurateurHomeScreenProps {
    route: any;
    navigation: any;
}

const HomeScreenRetaurateur: React.FC<RestaurateurHomeScreenProps> = ({ route, navigation }) => {

  const { isAuthenticated, login, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ViewDisplay align='center' justify='top'>
        <TextView type='title'>Restaurateur Home Screen</TextView>
        <button onClick={handleLogout}>Logout</button>
      </ViewDisplay>
    </SafeAreaView>
  );
};

export default HomeScreenRetaurateur;