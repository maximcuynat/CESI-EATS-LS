import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';

interface ClientHomeScreenProps {
	route: any;
	navigation: any;
}

const ClientHomeScreen: React.FC<ClientHomeScreenProps> = ({ route, navigation }) => {

	// Screen options (hide header)
	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: true,
		});
	}, [navigation]);

	const { isAuthenticated, login, logoutUser } = useAuth();

	console.log('ClientHomeScreen', isAuthenticated);

	return (
		<ViewDisplay align='center' justify='top' style={{backgroundColor: 'red'}}>
			
		</ViewDisplay>
	);
};

export default ClientHomeScreen;