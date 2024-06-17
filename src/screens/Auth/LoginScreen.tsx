import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../api/authAPI';
import { authActions } from '../../store/actions/authActions';

import TextView from '../../components/Text';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const user = await login(email, password);
            dispatch(authActions.loginSuccess(user));
            // Navigation vers la page suivante après la connexion réussie
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <View>
            <TextView type='title'>Email</TextView>
            <TextInput value={email} onChangeText={setEmail} />
            <Text>Mot de passe</Text>
            <TextInput value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Se connecter" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
