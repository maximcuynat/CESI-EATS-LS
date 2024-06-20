import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Alert } from 'react-native';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';
import InputView from '../../components/Input';
import ButtonView from '../../components/Button';

import ImagePickerComp from '../../components/ImagePicker';

// Api restaurant
import apiREST from '../../api/restaurantAPI';

interface InfoScreenProps {
    route: any;
    navigation: any;
}

const Info: React.FC<InfoScreenProps> = ({ route, navigation }) => {

  // Variables d'état
  const [nomRestaurant, setNom] = React.useState('');
  const [adresseRestaurant, setAdresse] = React.useState('');
  const [descriptionRestaurant, setDescription] = React.useState('');


  // Fonction de validation
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (nomRestaurant && adresseRestaurant) {
      // handleSubmit
      try {
        await apiREST.addRestaurant(nomRestaurant, adresseRestaurant, descriptionRestaurant);
        navigation.navigate('Menu');
      } catch (error: any) {
        Alert.alert('Erreur', error.message);
      }
    }
  }
  

  return (
    <SafeAreaView style={styles.safeArea} >

      {/* Header */}
      <ViewDisplay direction='vertical' align='center' justify='top' type='header'>
        <TextView type='title' style={{width: 'auto', textAlign: 'center'}}>Informations du Restaurant</TextView>
      </ViewDisplay>
      
      {/* Body */}
      <ScrollView style={{flex: 1}}>

        <ViewDisplay direction='vertical' align='center' justify='top' type='default' >
          <TextView type='subtitle'>Nom</TextView>
          <InputView placeholder='Nom du restaurant' onChangeText={setNom} />
          {nomRestaurant == '' && <TextView type='error'>Le champ nom est obligatoire</TextView>}

          <TextView type='subtitle'>Adresse</TextView>
          <InputView placeholder='Adresse du restaurant' onChangeText={setAdresse} />
          {adresseRestaurant == '' && <TextView type='error'>Le champ nom est obligatoire</TextView>}

          <TextView type='subtitle'>Description</TextView>
          <InputView placeholder='Description du restaurant' onChangeText={setDescription} />
          {descriptionRestaurant == '' && <TextView type='error'>Le champ nom est obligatoire</TextView>}

          <ButtonView buttonType='primary' label="Valider" onClick={handleSubmit} />

        </ViewDisplay>
        
      </ScrollView>
		</SafeAreaView>
  );
};

const styles = StyleSheet.create({

  // SafeAreaView
  safeArea:{
    flex: 1,
    backgroundColor: '#FFECD1'
  },

  // Boutton menu
  buttonAddMenu: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 1,
    bottom: 0,
  },
});

export default Info;