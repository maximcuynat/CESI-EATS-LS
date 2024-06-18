import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import TextView from './Text';

interface ButtonViewProps {
	label: string;
	buttonType?: 'primary' | 'secondary' | 'danger';
	onClick: () => void;
}

const ButtonView: React.FC<ButtonViewProps> = ({ label, onClick, buttonType }) => {
	
	const buttonStyle = [
		styles.button,
		buttonType === 'primary' && styles.buttonPrimary,
		buttonType === 'secondary' && styles.buttonSecondary,
		buttonType === 'danger' && styles.buttonDanger,
	];

	return (
		<Pressable style={styles.pressable} onPress={onClick}>
			<TextView style={buttonStyle}>{label}</TextView>
		</Pressable>
	);
};

const styles = StyleSheet.create({

	// Texte
	text: {
		// Couleur
		color: '#FFECD1',

		// Taille
		fontSize: 24,

		// Police et alignement
		textAlign: 'center',
	},

	// Bouton
	button: {
		// Couleurs
		backgroundColor: '#FF7D00',

		// Texte
		color: '#FFECD1',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 24,
		textShadowColor: '#78290F',
		textShadowOffset: { width: 0, height: 3 },
		textShadowRadius: 4,

		// Taille
		marginTop: 20,
		paddingHorizontal: 15,
		paddingTop: 15,
		paddingBottom: 17,

		// Bordures
		borderRadius: 30,
	},

	pressable: {
		width: '70%',
	},

	// Types de boutons

	buttonPrimary: {
		backgroundColor: '#FF7D00',
		textShadowColor: '#78290F',
		textShadowOffset: { width: 0, height: 3 },
		textShadowRadius: 4,
	},

	buttonSecondary: {
		backgroundColor: '#78290F',
		textShadowColor: '#FF7D00',
	},

	buttonDanger: {
		backgroundColor: '#e74c3c',
	},
});

export default ButtonView;
