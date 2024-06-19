import React from 'react';
import { SafeAreaView, StyleSheet, Pressable, Image, ScrollView } from 'react-native';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';
import InputView from '../../components/Input';
import Ionicons from '@expo/vector-icons/Ionicons';

interface ArticlesScreenProps {
    route: any;
    navigation: any;
}

const ArticlesScreen: React.FC<ArticlesScreenProps> = ({ route, navigation }) => {
  

  return (
    <SafeAreaView style={styles.safeArea} >

      {/* Header */}
      <ViewDisplay direction='vertical' align='center' justify='top' type='header'>
        <TextView type='title' style={styles.title}>Mes Articles</TextView>
      </ViewDisplay>
      
      {/* Body */}
      <ScrollView style={{flex: 1}}>
        
      </ScrollView>

      {/* Add Menu */}
      <ViewDisplay style={styles.buttonAddMenu} type='default' direction='vertical' justify='center' align='right' >
        <Pressable onPress={() => navigation.navigate('AddArticles')} >
          <Ionicons  name="add-circle" size={80} color="#FF7D00" />
        </Pressable>
      </ViewDisplay>


		</SafeAreaView>
  );
};

const styles = StyleSheet.create({

  // SafeAreaView
  safeArea:{
    flex: 1,
    backgroundColor: '#FFECD1'
  },

  // Boutton menu
  buttonAddMenu: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 1,
    bottom: 0,
  },

  // Title
  title: {
    width: 'auto', 
    textAlign: 'center'
  },
});

export default ArticlesScreen;