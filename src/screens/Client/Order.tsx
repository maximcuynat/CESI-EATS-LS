import React from 'react';
import { SafeAreaView, StyleSheet, Pressable, View, ScrollView } from 'react-native';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';
import InputView from '../../components/Input';
import Ionicons from '@expo/vector-icons/Ionicons';

// Menu API
import { getMenus } from '../../api/menuAPI';
import { getArticles } from '../../api/articleAPI';
import DispMenu from '../../components/DispMenu';

interface SettingsScreenProps {
    route: any;
    navigation: any;
}

const Settings: React.FC<SettingsScreenProps> = ({ route, navigation }) => {

  // Recuperation de l'id du restaurant
  const { id } = route.params;

  const [showMenu, setShowMenu] = React.useState<boolean>(true);
  const [showArticles, setShowArticles] = React.useState<boolean>(false);
  
  const [menus, setMenus] = React.useState<any>([]);
  const [articles, setArticles] = React.useState<any>([]);

  // Recuperation des menus
  React.useEffect(() => {
    getMenus(id).then((data) => {
      setMenus(data);
    });
  }, []);

  // Recuperation des articles
  React.useEffect(() => {
    getArticles(id).then((data) => {
      setArticles(data);
    });
  }, []);

  // Fonction pour afficher les menus
  const switchToMenus = () => {
    setShowMenu(true);
    setShowArticles(false);
  }

  // Fonction pour afficher les articles
  const switchToArticles = () => {
    setShowMenu(false);
    setShowArticles(true);
  }

  return (
    <SafeAreaView style={styles.safeArea} >

      {showMenu && 
        <ScrollView style={{marginTop: 100}}>
        </ScrollView>
      }

      {showArticles && 
        <ScrollView style={{marginTop: 100}}>
        </ScrollView>
      }

      <View style={styles.headerMenu}>
        <View style={[styles.buttonSwitchMenus, styles.commun]}>
          <Pressable onPress={switchToMenus}>
            <TextView type='title' style={{color: '#FFECD1'}}>Menus</TextView>
          </Pressable>
        </View>
        <View style={[styles.buttonSwitchArticles, styles.commun]}>
          <Pressable onPress={switchToArticles}>
            <TextView type='title'style={{color: '#FFECD1'}}>Articles</TextView>
          </Pressable>
        </View>
      </View>


      <Pressable style={styles.btnCart}>
        <TextView type='title' style={{width: 'auto', textAlign: 'center', color: 'white',}}>Voir le panier</TextView>
      </Pressable>
		</SafeAreaView>
  );
};

const styles = StyleSheet.create({

  headerMenu: {
    position: 'absolute',
    width: '100%',
    top: 0,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    // Margin / Padding
  },

  commun: {
    paddingTop: 35,
    paddingBottom: 10,
  },

  buttonSwitchMenus: {
    width: '50%',
    backgroundColor: '#FF7D00',
  },

  buttonSwitchArticles: {
    backgroundColor: '#78290F',
    width: '50%',
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