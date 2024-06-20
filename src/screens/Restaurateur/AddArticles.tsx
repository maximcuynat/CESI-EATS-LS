import React from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';
import InputView from '../../components/Input';
import Ionicons from '@expo/vector-icons/Ionicons';

import typesArticlesAPI from '../../api/typearticleAPI';
import { Picker } from '@react-native-picker/picker';

interface AddArticlesScreenProps {
    route: any;
    navigation: any;
}

const AddArticles: React.FC<AddArticlesScreenProps> = ({ route, navigation }) => {

  // Récupération des types d'articles sous forme de tableau
  const [typesArticles, setTypesArticles] = React.useState<any[]>([]);

  // Récupération des types d'articles
  React.useEffect(() => {
    typesArticlesAPI.getTypesArticles()
    .then((response) => {
      setTypesArticles(response.data);
    })
    .catch((error) => {
      console.log("Erreur lors de la récupération des types d'articles : ", error);
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea} >

      {/* Header */}
      <ViewDisplay direction='vertical' align='center' justify='top' type='header'>
        <TextView type='title' style={styles.title}>Création Article</TextView>
      </ViewDisplay>
      
      {/* Body */}
      <ScrollView style={{flex: 1}}>

        <ViewDisplay direction='horizontal' align='center' justify='betweenS' type='default' style={{gap: 10}}>
          
          <View style={{ flex: 1,}}>
            <TextView type='subtitle'>Nom</TextView>
            <InputView placeholder="Nom de l'article" />
          </View>

          <View style={{width: '40%'}}>
            <TextView type='subtitle'>Prix</TextView>
            <InputView placeholder='Prix en Euro' />
          </View>

        </ViewDisplay>

        <ViewDisplay direction='vertical' align='center' justify='betweenS' type='default'>
          <TextView type='subtitle'>Description</TextView>
          <InputView placeholder='Description' multilignes={true}/>
        </ViewDisplay>

        <ViewDisplay direction='horizontal' align='center' justify='betweenS' type='default' style={{gap: 10}}>
          <View style={{width: '40%'}}>
            <TextView type='subtitle'>Type d'article</TextView>
            <Picker>
              {typesArticles.map((type) => {
                return <Picker.Item key={type.id} label={type.nom} value={type.id} />
              })}
            </Picker>
          </View>
          <View style={{width: '40%'}}>
            <TextView type='subtitle'>Quantité</TextView>
            <InputView placeholder='Quantité' />
          </View>
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

  // Title
  title: {
    width: 'auto', 
    textAlign: 'center'
  },
});

export default AddArticles;