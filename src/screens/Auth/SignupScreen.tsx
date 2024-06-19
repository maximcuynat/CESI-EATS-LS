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

  // Pseudo seulement en minuscule
  const [pseudo, setPseudo] = useState('');
  // Regex pour pseudo minuscule et chiffre
  const pseudoRegex = /^[a-z0-9]+$/;

  // Email
  const [email, setEmail] = useState('');
  // Regex pour email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Mot de passe
  const [password, setPassword] = useState('');
  // Regex pour mot de passe
  const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

  // Role
  const [role, setRole] = useState('Client');
  // Regex pour role
  const roleRegex = /^(client|restaurateur|livreur)$/;

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

    // Vériver tout les champs
    if (!pseudo) {
      setPseudoErr('Le pseudo est requis');
    } else if (!pseudoRegex.test(pseudo)) {
      setPseudoErr('Le pseudo doit être en minuscule et sans espace');
    } else {
      setPseudoErr('');
    }

    if (!email) {
      setEmailErr('L\'email est requis');
    } else if (!emailRegex.test(email)) {
      setEmailErr('L\'email est invalide');
    } else {
      setEmailErr('');
    }

    if (!password) {
      setPasswordErr('Le mot de passe est requis');
    } else if (!passwordRegex.test(password)) {
      setPasswordErr('Le mot de passe doit contenir au moins 6 caractères');
    } else {
      setPasswordErr('');
    }

    if (pseudo && email && password) {
      try {
        const response = await api.signup(pseudo, password, email, role);
        
        // Si l'utilisateur est inscrit, on le connecte
        if (response.message === 'User registered') {
          // Requette de connexion
          const loginResponse = await api.login(pseudo, password);
          // Si l'utilisateur est connecté
          if (loginResponse.data.message === 'User logged in') {
            login(loginResponse.data.token);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  
  }
  
  // ========================================================================================

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center',  alignItems: 'center', }}>
      <ViewDisplay align='center' justify='center' style={{paddingVertical: 60}} type='fill'>
      <TextView type='title'>Vos informations d'inscription</TextView>

      <TextView type='subtitle'>Pseudo</TextView>
      <TextInputView placeholder='Votre pseudo' value={pseudo} onChangeText={setPseudo} />
      {pseudoErr && <TextView type='error'>{pseudoErr}</TextView>}

      <TextView type='subtitle'>Email</TextView>
      <TextInputView placeholder='Email' onChangeText={(text: string) => setEmail(text)} />
      {emailErr && <TextView type='error'>{emailErr}</TextView>}

      <TextView type='subtitle'>Mot de passe</TextView>
      <TextInputView type='password' placeholder='Mot de passe' onChangeText={(text: string) => setPassword(text)} />
      {passwordErr && <TextView type='error'>{passwordErr}</TextView>}

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
          <TextView type='subtitle' style={[styles.subTitle, role === 'client' && styles.subTitleSelect]}>Client</TextView>
        </View>

        <View>
          <Pressable style={[styles.role, role === 'restaurateur' && styles.roleSelect]} onPress={() => setRole('restaurateur')} >
            <Image source={require('../../../assets/img/role-restaurateur.png')} style={{
              height: 65,
              width: 65,
              }} />
          </Pressable>
          <TextView type='subtitle' style={[styles.subTitle, role === 'restaurateur' && styles.subTitleSelect]}>Restaurateur</TextView>
        </View>

        <View>
          <Pressable style={[styles.role, role === 'livreur' && styles.roleSelect]} onPress={() => setRole('livreur')} >
            <Image source={require('../../../assets/img/role-livreur.png')} style={{
              height: 70,
              width: 75,
              }} />
          </Pressable>
          <TextView type='subtitle' style={[styles.subTitle, role === 'livreur' && styles.subTitleSelect]}>Livreur</TextView>
        </View>


      </ViewDisplay>

      <ButtonView buttonType='primary' label="Valider" onClick={handleSubmit} />

      <ButtonView buttonType='secondary' label='Retour' onClick={() => navigation.navigate('Login')} />
        
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
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'light'
  },

  subTitleSelect: {
    fontWeight: 'bold',
  },
});