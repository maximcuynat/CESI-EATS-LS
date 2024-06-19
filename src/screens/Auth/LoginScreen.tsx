import React, { useState } from 'react';
import { Image, ScrollView, Alert } from 'react-native';

import TextView from '../../components/Text';
import ViewDisplay from '../../components/Display';
import TextInputView from '../../components/Input';
import ButtonView from '../../components/Button';

// Auth
import { useAuth } from '../../context/AuthContext';
import api from '../../api/authAPI';

// Navigation
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen () {
	const navigation = useNavigation();
	const { login } = useAuth();
	const [pseudo, setPseudo] = useState('');
	const pseudoRegex = /^[a-z0-9]+$/;
	const [mot_de_passe, setMotDePasse] = useState('');
	const motDePasseRegex = /^[a-zA-Z0-9]{6,}$/;

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (pseudo && mot_de_passe) {
			try {
				const response = await api.login(pseudo, mot_de_passe);
				const data = response.data;
				login(data.token);
			} catch (error: any) {
				Alert.alert('Erreur', "Pseudo ou mot de passe incorrects");
			}
		}
	}

	// ========================================================================================

	return (
		<ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
		<ViewDisplay align="center" justify="center" type='fill'>

			{/* Logo */}
			<Image source={require('../../../assets/icon.png')} style={{width: 200, height: 200}} />

			{/* Formulaire de connexion */}
			<ViewDisplay align="center" justify="center" type='default'>
			
			{/* Pseudo */}
				<TextView type="subtitle">Pseudo</TextView>
				<TextInputView placeholder="Votre pseudo" onChangeText={setPseudo} />
				{pseudoErr && <TextView type="error">{pseudoErr}</TextView>}

			{/* Mot de passe */}
				<TextView type="subtitle">Mot de passe</TextView>
				<TextInputView  type="password" placeholder="Mot de passe" onChangeText={setMotDePasse} />
				{motDePasseErr && <TextView type="error">{motDePasseErr}</TextView>}

			{/* Bouton de connexion */}
				<ButtonView buttonType='primary' label="Connexion" onClick={handleSubmit} />

			{/* Lien vers la page d'inscription */}
				<ButtonView buttonType='secondary'  label="Inscription" onClick={() => navigation.navigate('Signup')} />
			
			</ViewDisplay>
		</ViewDisplay>
		</ScrollView>
	);
};