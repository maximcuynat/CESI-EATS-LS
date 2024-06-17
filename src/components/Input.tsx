// TextInput.tsx
import React from 'react';
import { StyleSheet, TextProps, TextInput } from 'react-native';

interface InputView extends TextProps {
    children?: React.ReactNode;
    type?: 'text' | 'password';
    placeholder?: string;
    value?: string;
    Name?: string;
}

const InputView: React.FC<InputView> = ({ children, style, type = 'text', placeholder, value, Name, ...rest  }) => {
  const textStyle = [
    styles.text,
    type === 'text' && styles.textInput,
    type === 'password' && styles.textPassword,
  ];
  if (type === 'text') {
    return (
      <TextInput style={[textStyle, style]} placeholder={placeholder} value={value} {...rest} />
    );
  }
  else {
    return (
      <TextInput style={[textStyle, style]} placeholder={placeholder} value={value} secureTextEntry={true} {...rest} />
    );
  }
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: '#001524',
        width: '100%',
    },
    textInput: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 30,
        marginBottom: 5,
    },
    textPassword: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 30,
        marginBottom: 5,
    },
});

export default InputView;