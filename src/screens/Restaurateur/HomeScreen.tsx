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

interface RestaurateurHomeScreenProps {
    route: any;
    navigation: any;
}

const HomeScreenRetaurateur: React.FC<RestaurateurHomeScreenProps> = ({ route, navigation }) => {

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

  const menus: any = [];
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFECD1'}} onTouchStart={hideMenu} >
			<ViewDisplay direction='horizontal' align='center' justify='center' type='header'>
        <TextView type='title' style={{width: 'auto', textAlign: 'center'}}>Bienvenue</TextView>
				
				{/* Header */}
				<Pressable style={styles.userProfile} onPressOut={handleMenuHover}>
					<Image source={require('../../../assets/img/user.png')} style={{width: 50, height: 50}}/>
				</Pressable>

				{/* Menu déroulant */}
				{menuVisible  && (
					<ViewDisplay style={styles.menuProfile} direction='vertical' align='left' type='default' justify='center' >
						<Pressable onPress={() => navigation.navigate('RestaurateurProfile')} style={styles.menuButton} >
							<TextView type='subtitle' style={styles.menuOption} >Profil</TextView>
						</Pressable>
						<Pressable onPress={() => navigation.navigate('ClientFavorites')} style={styles.menuButton} >
							<TextView type='subtitle' style={styles.menuOption} >Commandes</TextView>
						</Pressable>
						<Pressable onPress={() => navigation.navigate('ClientProfile')} style={styles.menuButton} >
							<TextView type='subtitle' style={styles.menuOption} >Paramètres</TextView>
						</Pressable>
						<Pressable onPress={handleLogout} style={styles.menuButton} >
							<TextView type='subtitle' style={styles.menuOption} onPress={handleLogout} >Déconnexion</TextView>
						</Pressable>
					</ViewDisplay>
				)}
			</ViewDisplay>
			
			{/* Ajouter un menu Button */}
      <ViewDisplay style={styles.buttonAddMenu} type='default' direction='vertical' justify='center' align='right' >
        <Pressable onPress={() => navigation.navigate('AddMenu')} >
          <Ionicons style={styles.addCircle} name="add-circle" size={80} color="#FF7D00" />
        </Pressable>
      </ViewDisplay>

			{/* Liste des menus */}

      {menus.length === 0 ? (
				<TextView type='error' style={styles.errorMenu}>Pas de menu disponible</TextView>
			) : (
				<ScrollView style={{flex: 1}} >
					<ViewDisplay direction='vertical' align='center' justify='top' type='fill'  >
						{menus.map((menu, index) => (
							<DispMenu key={index} menu={menu} />
						))}
					</ViewDisplay>
				</ScrollView>
			)}


		</SafeAreaView>
  );
};

const styles = StyleSheet.create({
	// Error Menu
	errorMenu :{
		textAlign: 'center',
		marginTop: 20,
		fontWeight: '900',
		zIndex: -1,
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

export default HomeScreenRetaurateur;