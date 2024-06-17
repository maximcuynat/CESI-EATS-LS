// Text.tsx
import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface TextView extends TextProps {
    children?: React.ReactNode;
    type?: 'title' | 'subtitle' | 'link' | 'button' | 'error';
    buttonType?: 'primary' | 'secondary' | 'danger';
}

const TextView: React.FC<TextView> = ({ children, style, type = 'text', buttonType = "button", ...rest  }) => {
  const textStyle = [
    styles.text,
    type === 'title' && styles.title,
    type === 'subtitle' && styles.subtitle,
    type === 'link' && styles.link,
	type === 'error' && styles.error,

    // Type
    type === 'button' && styles.button,
    type === 'button' && buttonType === 'primary' && styles.buttonPrimary,
    type === 'button' && buttonType === 'secondary' && styles.buttonSecondary,
    type === 'button' && buttonType === 'danger' && styles.buttonDanger,
  ];
  return (
	<Text style={[textStyle, style]} {...rest}>{children}</Text>
  );
};

const styles = StyleSheet.create({
	// Text
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#001524',
    textAlign: 'left',
	width: '100%',
  },
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	link: {
		fontSize: 18,
		color: '#15616D',
		fontWeight: 'bold',
	},
	error: {
		fontSize: 18,
		color: '#FF0000',
		fontWeight: 'bold',
	},

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

export default TextView;
