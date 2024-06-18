import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';

interface LivreurHomeScreenProps {
  route: any;
  navigation: any;
}

const HomeScreenLivreur: React.FC<LivreurHomeScreenProps> = ({ route, navigation }) => {

  const { isAuthenticated, login, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ViewDisplay align='center' justify='top' type='fill' >
      </ViewDisplay>
    </SafeAreaView>
  );
};

export default HomeScreenLivreur;
