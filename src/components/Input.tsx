// TextInput.tsx
import React from 'react';
import { StyleSheet, TextProps, TextInput } from 'react-native';

interface InputView extends TextProps {
    children?: React.ReactNode;
    type?: 'text' | 'password' | 'search' | 'number';
    placeholder?: string;
    value?: string;
    Name?: string;
    multilignes?: boolean;
}

const InputView: React.FC<InputView> = ({ children, style, type = 'text', placeholder, value, Name, multilignes = false, ...rest }) => {
  const textStyle = [
    styles.text,
    styles.shadowBox,
    type === 'text' && styles.textInput,
    type === 'password' && styles.textPassword,
    type === 'search' && styles.searchInput,
    type === 'number' && styles.textInput,
  ];
  if (type === 'text' || type === 'search') {
    if (multilignes) {
      return (
        <TextInput style={[textStyle, style]} placeholder={placeholder} value={value} {...rest} autoCapitalize='none' multiline />
      );
    }
    else {
      return (
        <TextInput style={[textStyle, style]} placeholder={placeholder} value={value} {...rest} autoCapitalize='none' />
      );
    }
  }
  if (type === 'number') {
    return (
      <TextInput style={[textStyle, style]} placeholder={placeholder} value={value} keyboardType='numeric' {...rest} autoCapitalize='none' />
    );
  }
  else {
    return (
      <TextInput style={[textStyle, style]} placeholder={placeholder} value={value} secureTextEntry={true} {...rest} autoCapitalize='none' />
    );
  }
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: '#001524',
        width: '100%',
    },

    textInput: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,
        marginBottom: 15,
    },

    textPassword: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,
        marginBottom: 15,
    },

    searchInput: { 
      backgroundColor: '#F5F5F5',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderRadius: 15,
      marginBottom: 0,
    },

    shadowBox: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
});

export default InputView;