import React from 'react';
import { SafeAreaView, Image, Pressable, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';
import InputView from '../../components/Input';
import { Button } from 'react-native-elements';

interface ClientHomeScreenProps {
	route: any;
	navigation: any;
}

const ClientHomeScreen: React.FC<ClientHomeScreenProps> = ({ route, navigation }) => {

	const { isAuthenticated, login, logoutUser } = useAuth();

	const [menuVisible, setMenuVisible] = React.useState(false);

	const handleLogout = () => {
		logoutUser();
		setMenuVisible(false); // Fermer le menu après la déconnexion
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

	// ========================================================================================================


	return (
		<SafeAreaView style={{flex: 1, backgroundColor: '#FFECD1'}} onTouchStart={hideMenu} >

			<ViewDisplay direction='horizontal' align='center' justify='center' type='default' style={{marginTop: 35, justifyContent: 'space-between'}} >
				<InputView type='search' placeholder='Rechercher un restaurant' style={{width: '80%', zIndex: -1}}/>
				
				<Pressable style={styles.userProfile} onPressOut={handleMenuHover}>
					<Image source={require('../../../assets/img/user.png')} style={{width: 50, height: 50}}/>
				</Pressable>

				{menuVisible  && (
					<ViewDisplay style={styles.menuProfile} direction='vertical' align='left' type='default' justify='center' >
						<Pressable onPress={() => navigation.navigate('ClientOrders')} style={styles.menuButton} >
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

		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
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

export default ClientHomeScreen;