import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Image, View } from 'react-native';
//import { useAuth } from '../../context/AuthContext';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';
import TextInputView from '../../components/Input';
import ButtonView from '../../components/Button';

// API
import { getUserProfil } from '../../api/userAPI';

// Components
//import Ionicons from '@expo/vector-icons/Ionicons';

interface ProfileScreenProps {
  route: any;
  navigation: any;
}

const Profile: React.FC<ProfileScreenProps> = ({ route, navigation }) => {
  // Pseudo seulement en minuscule
  const [pseudo, setPseudo] = useState('');
  // Regex pour pseudo minuscule et chiffre
  //const pseudoRegex = /^[a-z0-9]+$/;

  // Email
  const [email, setEmail] = useState('');
  // Regex pour email
  //const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Mot de passe
  const [password, setPassword] = useState('');
  // Regex pour mot de passe
  //const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

  // Variables d'état pour les erreurs
  const [pseudoErr, setPseudoErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  // ================================================================================================

  return (
    <SafeAreaView style={styles.safeArea} >

      {/* Header */}
      <ViewDisplay direction='vertical' align='center' justify='top' type='header'>
        <TextView type='title' style={{width: 'auto', textAlign: 'center'}}>Commandes</TextView>
      </ViewDisplay>

      {/* Body */}
      <ScrollView style={{flex: 1}}>

        
      </ScrollView>
		</SafeAreaView>
  );

};

/*
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
</ViewDisplay>

<TextView type='subtitle'>Rôle</TextView>
<ViewDisplay
  direction='horizontal' align='center'
  style={{width: '100%', justifyContent: 'space-between', }} >

  <View>
    <Image source={require('../../../assets/img/role-client.png')} style={{height: 70, width: 60 }}/>
    <TextView type='subtitle' style={[styles.subTitle, role === 'client' && styles.subTitleSelect]}>Client</TextView>
  </View>
</ViewDisplay>

<ButtonView buttonType='secondary' label='Supprimer mon compte' onClick={() => {console.log("delete acount")}} />
*/

const styles = StyleSheet.create({
  // SafeAreaView
  safeArea:{
    flex: 1,
    backgroundColor: '#FFECD1'
  },
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

export default Profile;