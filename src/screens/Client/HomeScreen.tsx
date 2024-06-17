import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useAuth } from '../../context/AuthContext';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';

interface ClientHomeScreenProps {
	route: any;
	navigation: any;
}

const ClientHomeScreen: React.FC<ClientHomeScreenProps> = ({ route, navigation }) => {

	const { isAuthenticated, login, logoutUser } = useAuth();

	console.log('ClientHomeScreen', isAuthenticated);

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
			<ViewDisplay align='center' justify='top'>
				<TextView type='title'>Client Home Screen</TextView>
			</ViewDisplay>
		</SafeAreaView>
	);
};

export default ClientHomeScreen;