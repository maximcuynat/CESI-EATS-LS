// TextView.tsx
import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface TextViewProps extends TextProps {
    children?: React.ReactNode;
    type?: 'title' | 'subtitle' | 'link' | 'error';
    buttonType?: 'primary' | 'secondary' | 'danger';
}

const TextView: React.FC<TextViewProps> = ({ children, style, type = 'text', ...rest  }) => {
  const textStyle = [
    styles.text,
    type === 'title' && styles.title,
    type === 'subtitle' && styles.subtitle,
    type === 'link' && styles.link,
	type === 'error' && styles.error,

    // Type
    
  ];
  return (<Text style={[textStyle, style]} {...rest}>{children}</Text>);
};

const styles = StyleSheet.create({
	// Text
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#001524',
    textAlign: 'left',
	width: '100%',
	fontFamily: 'Lemon-Regular',
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
		textAlign: 'right',
	},
});

export default TextView;
