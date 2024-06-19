import React from 'react';
import { SafeAreaView, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';
import InputView from '../../components/Input';


// Api
import { getRestaurateurMenus } from '../../api/restaurateur';

// Components
import DispMenu from '../../components/DispMenu';
import Ionicons from '@expo/vector-icons/Ionicons';

interface AddMenuScreenProps {
    route: any;
    navigation: any;
}

const AddMenu: React.FC<AddMenuScreenProps> = ({ route, navigation }) => {

  const { isAuthenticated, login, logoutUser } = useAuth();

  // Recuperer les menu du restaurateur

  const menus = [];
  

  return (
    <SafeAreaView style={styles.safeArea} >

      {/* Header */}
      <ViewDisplay direction='vertical' align='center' justify='top' type='header'>
        <TextView type='title' style={{width: 'auto', textAlign: 'center'}}>Création Menu</TextView>
      </ViewDisplay>
      {/* Body */}
      
            

		</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: '#FFECD1'
  },
});

export default AddMenu;