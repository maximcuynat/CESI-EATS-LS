import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

// Coucou

interface ButtonViewProps {
  label: string;
  buttonType?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}

const ButtonView: React.FC<ButtonViewProps> = ({ label, onClick, buttonType }) => {
  
	// Variables
	const buttonStyle = [
		styles.button,
		buttonType === 'primary' && styles.buttonPrimary,
		buttonType === 'secondary' && styles.buttonSecondary,
		buttonType === 'danger' && styles.buttonDanger,
	];

	const pressableStyle = [
		styles.pressable,
	];

  // Return
  return (
		<Pressable onPress={onClick} style={pressableStyle}>
			<Text style={buttonStyle} >{label}</Text>
		</Pressable>
  );
};

const styles = StyleSheet.create({

	// Pressable
	pressable: {
		width: '70%',
	},

  // Button
	button: {
		backgroundColor: '#FF7D00',
		marginTop: 20,
		paddingHorizontal: 15,
		paddingTop: 15,
		paddingBottom: 17,
		borderRadius: 30,
		// Text
		color: '#FFECD1',
		fontWeight: 'bold',
		fontSize: 24,
		textAlign: 'center',
		// Shadow text
		textShadowColor: '#78290F',
		textShadowOffset: { width: 0, height: 3 },
		textShadowRadius: 4,
	},
	buttonPrimary: {
		backgroundColor: '#78290F',
    textShadowColor: '#FF7D00',
		textShadowOffset: { width: 0, height: 3 },
		textShadowRadius: 4,
	},
	buttonSecondary: {
		backgroundColor: '#2ecc71',
	},
	buttonDanger: {
		backgroundColor: '#e74c3c',
	},
});

export default ButtonView;