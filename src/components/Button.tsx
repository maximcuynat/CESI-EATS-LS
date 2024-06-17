import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

// Coucou

interface ButtonViewProps {
    label: string;
    onClick: () => void;
}

const ButtonView: React.FC<ButtonViewProps> = ({ label, onClick }) => {
    const buttonStyle = [
        styles.button,
    ];

    // Return
    return (
        <TextInput style={buttonStyle} placeholder={label} onPress={onClick} />
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 30,
        marginBottom: 5,
    },
});

export default ButtonView;