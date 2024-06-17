import { Image, ScrollView, View, Pressable, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

// CheckBox
import CheckBoxView from '../../components/CheckBox.tsx';

// Components
import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';
import TextInputView from '../../components/Input';
import ButtonView from '../../components/Button';

// Auth
import { useAuth } from '../../context/AuthContext';
import api from '../../api/authAPI';

// Navigation
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen(){

  // Navigation
  const navigation = useNavigation();

	// Auth
	const { login } = useAuth();

	// Variables d'état
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Client');
  const [parrain, setParrain] = useState(0);

  // Variables d'état pour les erreurs
  const [pseudoErr, setPseudoErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  // Par default le role est client
  useEffect(() => {
    setRole('client');
  }, []);

  // Fonction de validation
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // If les champs sont vides
    if (!pseudo) {
      setPseudoErr('Le pseudo est requis');
    } else {
      setPseudoErr('');
    }

    if (!email) {
      setEmailErr('L\'email est requis');
    } else {
      setEmailErr('');
    }

    if (!password) {
      setPasswordErr('Le mot de passe est requis');
    } else {
      setPasswordErr('');
    }

    if (pseudo && email && password) {
      try {
        const response = await api.signup(pseudo, email, password, role);
        const data = response.data;
        login(data.token);
      } catch (error) {
        console.error(error);
      }
    }
  
  }
  

  return (
    <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
    <ViewDisplay align='center' justify='center' style={{paddingVertical: 60}} type='fill'>
    <TextView type='title'>Vos informations d'inscription</TextView>

    <TextView type='subtitle'>Pseudo</TextView>
        <TextInputView placeholder='Votre pseudo' value={pseudo} onChangeText={setPseudo} />
        <TextView type='error'>{pseudoErr}</TextView>

    <TextView type='subtitle'>Email</TextView>
    <TextInputView placeholder='Email' onChangeText={(text: string) => setEmail(text)} />
    <TextView type='error'>{emailErr}</TextView>

    <TextView type='subtitle'>Mot de passe</TextView>
    <TextInputView type='password' placeholder='Mot de passe' onChangeText={(text: string) => setPassword(text)} />
    <TextView type='error'>{passwordErr}</TextView>

    <TextView type='subtitle'>Rôle</TextView>
    <ViewDisplay 
      direction='horizontal' align='center' 
      style={{width: '100%', justifyContent: 'space-between', }} >

      <View>
        <Pressable style={[styles.role, role === 'client' && styles.roleSelect]} onPress={() => setRole('client')} >
          <Image source={require('../../../assets/img/role-client.png')} style={{
            height: 70,
            width: 60,
            }} />
        </Pressable>
        <TextView type='subtitle' style={styles.subTitle}>Client</TextView>
      </View>

      <View>
        <Pressable style={[styles.role, role === 'restaurateur' && styles.roleSelect]} onPress={() => setRole('restaurateur')} >
          <Image source={require('../../../assets/img/role-restaurateur.png')} style={{
            height: 65,
            width: 65,
            }} />
        </Pressable>
        <TextView type='subtitle' style={styles.subTitle}>Restaurateur</TextView>
      </View>

      <View>
        <Pressable style={[styles.role, role === 'livreur' && styles.roleSelect]} onPress={() => setRole('livreur')} >
          <Image source={require('../../../assets/img/role-livreur.png')} style={{
            height: 70,
            width: 75,
            }} />
        </Pressable>
        <TextView type='subtitle' style={styles.subTitle}>Livreur</TextView>
      </View>


    </ViewDisplay>

    <ButtonView label="je m'inscrit" onClick={handleSubmit} />

    <ButtonView buttonType='primary' label='je me connecte' onClick={() => navigation.navigate('Login')} />
      
    </ViewDisplay>
  </ScrollView>
  );
}

// Styles
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

  subTitle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18
  },
});