import React from 'react';
import { SafeAreaView, StyleSheet, Pressable, View, ScrollView } from 'react-native';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';
import InputView from '../../components/Input';
import Ionicons from '@expo/vector-icons/Ionicons';

interface SettingsScreenProps {
    route: any;
    navigation: any;
}

const Settings: React.FC<SettingsScreenProps> = ({ route, navigation }) => {
  

  return (
    <SafeAreaView style={styles.safeArea} >
      <ScrollView style={{flex: 1}}>

      {/* Header */}
      <ViewDisplay direction='vertical' align='center' justify='top' type='header'>

      </ViewDisplay>
        
        {/* Body */}

        
      </ScrollView>
      <Pressable style={styles.headerMenu}>
        <View>
          <View>
            <Pressable>
              <TextView type='title' style={{width: 'auto', textAlign: 'center',}}>Menus</TextView>
            </Pressable>
          </View>
          <View>
            <Pressable>
              <TextView type='title' style={{width: 'auto', textAlign: 'center',}}>Articles</TextView>
            </Pressable>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.btnCart}>
        <TextView type='title' style={{width: 'auto', textAlign: 'center', color: 'white',}}>Voir mon panier</TextView>
      </Pressable>
		</SafeAreaView>
  );
};

const styles = StyleSheet.create({

  headerMenu: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },

  btnCart: {
    position: 'absolute',
    width: '100%',
    bottom: 0,


    backgroundColor: '#15616D',
    paddingVertical: 20,
  },

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
});

export default Settings;