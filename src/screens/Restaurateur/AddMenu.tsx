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

  const [menuVisible, setMenuVisible] = React.useState(false);

  const handleLogout = () => {
    logoutUser();
  };

  const handleMenuHover = () => {
		// Detecter l'etat du menu si il est visible on le cache sinon on le laisse
		if (menuVisible) {
			setMenuVisible(false);
		} else {
			setMenuVisible(true);
		}
	};

  const hideMenu = () => {
		// Attendre 100ms avant de cacher le menu
		setTimeout(() => {
			setMenuVisible(false);
		}, 100);
	}

  // Recuperer les menu du restaurateur

  const menus = [];
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFECD1'}} onTouchStart={hideMenu} >

      {/* Header */}
      <ViewDisplay direction='horizontal' align='center' justify='center' type='default' style={{marginTop: 35, justifyContent: 'space-between'}} >
        <TextView type='title' style={{textAlign: 'center', backgroundColor: 'red'}}>Création Menu</TextView>
      </ViewDisplay>

      <ScrollView>
        {/* Nom et Prix */}
        <ViewDisplay direction='horizontal' align='center' type='default' style={[styles.form, styles.container]}>

          <ViewDisplay direction='vertical' justify='center' type='default' style={styles.form}>
            <TextView type='text' style={{textAlign: 'center'}}>Nom</TextView>
            <InputView type='text' style={{textAlign: 'center'}}/>
          </ViewDisplay>

          <ViewDisplay direction='vertical' align='center' justify='center' type='default' style={styles.form}>
          <TextView type='text' style={{textAlign: 'center'}}>Prix</TextView>
          </ViewDisplay>

        </ViewDisplay>

        {/* Description */}

        {/* Image */}

        {/* Types */}

      </ScrollView>

		</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Form
  form: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: 'auto',
  },
  container: {
    justifyContent: 'space-between'
  },
  // Button Add
  buttonAddMenu: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 1,
    bottom: 0,
  },
  addCircle: {
    
  },
	menuProfile: {
		// Position
		position: 'absolute',
		top: 40,
		right: 40,
		zIndex: -1,
		width: 'auto',
		backgroundColor: '#FF7D00',
		borderRadius: 10,
		borderWidth: 1,
	},

	menuButton: {
		width: '100%',
		paddingVertical: 6,
	},

	menuOption: {
		marginBottom: 0,
		marginRight: 30,
	},

	userProfile: {
		backgroundColor: '#FF7D00',
		borderRadius: 20,
		height: 60,
		width: 60,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		borderWidth: 1,
		borderColor: '#001524',
	}
});

export default AddMenu;