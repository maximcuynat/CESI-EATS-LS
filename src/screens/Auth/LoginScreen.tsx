import React, { useState } from 'react';
import { Image } from 'react-native';

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

	// Navigation
	const navigation = useNavigation();

	// Auth
	const { login } = useAuth();

	// Variables d'état
	const [pseudo, setPseudo] = useState('m.cuynat');
	const [mot_de_passe, setMotDePasse] = useState('mcuyntatpsw');

	// Variables d'état pour les erreurs
	const [pseudoErr, setPseudoErr] = useState('');
	const [motDePasseErr, setMotDePasseErr] = useState('');

	// Fonction de validation
	const handleSubmit = async (e: any) => {
		e.preventDefault();

		// If les champs sont vides
		if (!pseudo) {
			setPseudoErr('Le pseudo est requis');
		} else {
			setPseudoErr('');
		}

		if (!mot_de_passe) {
			setMotDePasseErr('Le mot de passe est requis');
		} else {
			setMotDePasseErr('');
		}

		if (pseudo && mot_de_passe) {
			try {
				const response = await api.login(pseudo, mot_de_passe);
				const data = response.data;
				login(data.token);
			} catch (error) {
				console.error(error);
			}
		}
	}

	return (
		<ViewDisplay align="center" justify="center">
			<Image source={require('../../../assets/icon.png')} style={{width: 200, height: 200}} />
			<ViewDisplay align="center" justify="center" type=''>
				{/* Pseudo */}
				<TextView>Pseudo</TextView>
				<TextInputView placeholder="Votre pseudo" value={pseudo} onChangeText={setPseudo} />
				<TextView type="error">{pseudoErr}</TextView>

			{/* Mot de passe */}
				<TextView>Mot de passe</TextView>
				<TextInputView  type="password" placeholder="Mot de passe" value={mot_de_passe} onChangeText={setMotDePasse} />
				<TextView type="error">{motDePasseErr}</TextView>

			{/* Bouton de connexion */}
				<ButtonView label="Connexion" onClick={handleSubmit} />

			{/* Lien vers la page d'inscription */}
				<ButtonView buttonType='primary'  label="Inscription" onClick={() => navigation.navigate('Signup')} />
			
			</ViewDisplay>
		</ViewDisplay>
	);
};