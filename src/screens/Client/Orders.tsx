import React from 'react';
import { SafeAreaView, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';

// Api
import { getRestaurateurMenus } from '../../api/restaurateur';

// Components
import DispMenu from '../../components/DispMenu';
import Ionicons from '@expo/vector-icons/Ionicons';

interface OrdersScreenProps {
  route: any;
  navigation: any;
}

const Orders: React.FC<OrdersScreenProps> = ({ route, navigation }) => {

  // ================================================================================================

  return (
    <SafeAreaView style={styles.safeArea} >

      {/* Header */}
      <ViewDisplay direction='vertical' align='center' justify='top' type='header'>
        <TextView type='title' style={{width: 'auto', textAlign: 'center'}}>Commandes</TextView>
      </ViewDisplay>
      
      {/* Body */}
      <ScrollView style={{flex: 1}}>
        
      </ScrollView>
		</SafeAreaView>
  );

};

const styles = StyleSheet.create({
  // SafeAreaView
  safeArea:{
    flex: 1,
    backgroundColor: '#FFECD1'
  },
});

export default Orders;