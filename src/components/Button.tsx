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

	const pressableStyle = [
		styles.pressable,
	];

	return (
		<Pressable style={pressableStyle} onPress={onClick}>
			<TextView style={buttonStyle}>{label}</TextView>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	role: {
		borderRadius: 50,
		backgroundColor: 'transparent',
		width: 100,
		height: 100,
		padding: 0,
		margin: 0,
		borderWidth: 1.5,
		borderColor: 'black',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	roleSelect: {
		backgroundColor: '#FF7D00',
		shadowColor: '#FF7D00',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 10,
		shadowOpacity: 1,
		elevation: 10,
	},
	images: {
		width: '80%',
		height: '80%',
		objectFit: 'cover',
	},
	subTitle: {
		fontWeight: 'bold',
		marginTop: 5,
		textAlign: 'center',
		fontSize: 18,
	},
	pressable: {
		width: '70%',
	},
	button: {
		backgroundColor: '#FF7D00',
		marginTop: 20,
		paddingHorizontal: 15,
		paddingTop: 15,
		paddingBottom: 17,
		borderRadius: 30,
		color: '#FFECD1',
		fontWeight: 'bold',
		fontSize: 24,
		textAlign: 'center',
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
