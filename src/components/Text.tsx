// TextView.tsx
import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
interface TextViewProps extends TextProps {
    children?: React.ReactNode;
    type?: 'title' | 'subtitle' | 'normal' | 'error';
    buttonType?: 'primary' | 'secondary' | 'danger';
}

const TextView: React.FC<TextViewProps> = ({ children, style, type, ...rest  }) => {

  const textStyle = [
		styles.text,
    type === 'title' && styles.title,
    type === 'subtitle' && styles.subtitle,
		type === 'normal' && styles.normal,
		type === 'error' && styles.error,
  ];
  return (<Text style={[textStyle, style]} {...rest}>{children}</Text>);
};

const styles = StyleSheet.create({

	// Applcable à tout les texte
	text: {
		marginVertical: 5,
	},

	// Type de texte
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		textAlign: 'center',
	},

	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
		width: '100%',
	},

	normal: {
		fontSize: 16,
    color: '#001524',
		width: 'auto',
	},

	error: {
		fontSize: 18,
		color: '#FF0000',
		fontWeight: 'bold',
		textAlign: 'right',
	},
});

export default TextView;
