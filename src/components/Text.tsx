// TextView.tsx
import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import * as Font from 'expo-font';

interface TextViewProps extends TextProps {
    children?: React.ReactNode;
    type?: 'title' | 'subtitle' | 'text' | 'error';
    buttonType?: 'primary' | 'secondary' | 'danger';
}

const TextView: React.FC<TextViewProps> = ({ children, style, type = "text", ...rest  }) => {

	// Font
	Font.loadAsync({
		'Lemon-Regular': require('../../assets/font/Lemon-Regular.ttf'),
	});

  const textStyle = [
		type === 'text' && styles.default,
    type === 'title' && styles.title,
    type === 'subtitle' && styles.subtitle,
		type === 'error' && styles.error,
  ];
  return (<Text style={[textStyle, style]} {...rest}>{children}</Text>);
};

const styles = StyleSheet.create({
	// Text
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#001524',
    textAlign: 'left',
  },

	default: {
		fontSize: 16,
    color: '#001524',
		width: 'auto',
	},

	// Title
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		textAlign: 'center',
	},

	// Subtitle
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
		fontStyle: 'italic',
	},

	// Error
	error: {
		fontSize: 18,
		color: '#FF0000',
		fontWeight: 'bold',
		textAlign: 'right',
	},
});

export default TextView;
