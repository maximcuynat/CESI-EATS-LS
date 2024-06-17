import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

// Coucou

interface ButtonViewProps {
  label: string;
  buttonType?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}

const ButtonView: React.FC<ButtonViewProps> = ({ label, onClick, buttonType = 'primary' }) => {
  const buttonStyle = [
    styles.button,
    
    // Styles
    buttonType === 'primary' && styles.buttonPrimary,
    buttonType === 'secondary' && styles.buttonSecondary,
    buttonType === 'danger' && styles.buttonDanger,
  ];

  // Return
  return (
    <TextInput style={buttonStyle} placeholder={label} onPress={onClick} />
  );
};

const styles = StyleSheet.create({
    // Button
	button: {
		backgroundColor: '#FF7D00',
		marginTop: 20,
		paddingHorizontal: 15,
		paddingTop: 15,
		paddingBottom: 17,
		borderRadius: 30,
		width: '70%',
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