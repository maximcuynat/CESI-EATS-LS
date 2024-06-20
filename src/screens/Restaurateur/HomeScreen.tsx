import React from 'react';
import { SafeAreaView, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';

// Components
import DispMenu from '../../components/DispMenu';
import Ionicons from '@expo/vector-icons/Ionicons';

// Api restaurateur
import { getRestaurant } from '../../api/restaurantAPI';

interface RestaurateurHomeScreenProps {
    route: any;
    navigation: any;
}

const Home: React.FC<RestaurateurHomeScreenProps> = ({ route, navigation }) => {

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



	// au chargement de la page on recupere les informations du restaurant
	React.useEffect(() => {
		const fetchRestaurant = async () => {
			const restaurant = await getRestaurant();
			if (!restaurant) {
				navigation.navigate('Info');
			}
		}
		fetchRestaurant();
	} ,[]);

  // Recuperer les menu du restaurateur

  const menus: any = [];
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFECD1'}} onTouchStart={hideMenu} >
			<ViewDisplay direction='horizontal' align='center' justify='center' type='header'>
        <TextView type='title' style={{width: 'auto', textAlign: 'center', zIndex: -1,}}>Bienvenue</TextView>
				
				{/* Header */}
				<Pressable style={styles.userProfile} onPressOut={handleMenuHover}>
					<Image source={require('../../../assets/img/user.png')} style={{width: 50, height: 50}}/>
				</Pressable>

				{/* Menu déroulant */}
				{menuVisible  && (
					<ViewDisplay style={styles.menuProfile} direction='vertical' align='left' type='default' justify='center' >
						<Pressable onPress={() => navigation.navigate('Profile')} style={styles.menuButton} >
							<TextView type='subtitle' style={styles.menuOption} >Profil</TextView>
						</Pressable>
						{/* Mes commandes */}
						<Pressable onPress={() => navigation.navigate('Orders')} style={styles.menuButton} >
							<TextView type='subtitle' style={styles.menuOption} >Mes commandes</TextView>
						</Pressable>
						{/* Gestions des menus */}
						<Pressable onPress={() => navigation.navigate('Menus')} style={styles.menuButton} >
							<TextView type='subtitle' style={styles.menuOption} >Mes menus</TextView>
						</Pressable>
						{/* Gestion des Articles */}
						<Pressable onPress={() => navigation.navigate('Articles')} style={styles.menuButton} >
							<TextView type='subtitle' style={styles.menuOption} >Mes articles</TextView>
						</Pressable>
						{/* Mon Restaurant */}
						<Pressable onPress={() => navigation.navigate('Info')} style={styles.menuButton} >
							<TextView type='subtitle' style={styles.menuOption} >Mon restaurant</TextView>
						</Pressable>
						{/* Paramètres */}
						<Pressable onPress={() => navigation.navigate('Settings')} style={styles.menuButton} >
							<TextView type='subtitle' style={styles.menuOption} >Paramètres</TextView>
						</Pressable>
						{/* Deconnexion */}
						<Pressable onPress={handleLogout} style={styles.menuButtonLast} >
							<TextView type='subtitle' style={styles.menuOption} >Déconnexion</TextView>
						</Pressable>
					</ViewDisplay>
				)}
			</ViewDisplay>
			
			{/* Ajouter un menu Button */}
      <ViewDisplay style={styles.buttonAddMenu} type='default' direction='vertical' justify='center' align='right' >
        <Pressable onPress={() => navigation.navigate('AddMenu')} >
          <Ionicons  name="add-circle" size={80} color="#FF7D00" />
        </Pressable>
      </ViewDisplay>

			{/* Liste des menus */}

      {menus.length === 0 ? (
				<TextView type='error' style={styles.errorMenu}>Pas de commandes</TextView>
			) : (
				<ScrollView style={{flex: 1}} >
					<ViewDisplay direction='vertical' align='center' justify='top' type='fill'  >
						{menus.map((menu: any) => (
							{/* Commandes */}
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
		display: 'none',
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 1,
    bottom: 0,
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
		paddingHorizontal: 0,
		paddingVertical: 0,
	},

	menuButton: {
		paddingHorizontal: 10,
		paddingVertical: 6,
		width: '100%',
		borderBottomWidth: 1
	},

	// menuButton exepter la dernière
	menuButtonLast: {
		paddingHorizontal: 10,
		paddingVertical: 6,
		width: '100%',
	},

	menuOption: {
		marginBottom: 5,
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

export default Home;