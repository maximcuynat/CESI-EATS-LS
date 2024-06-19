import React from 'react';
import { SafeAreaView, StyleSheet, Pressable, Image, ScrollView, View } from 'react-native';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';
import InputView from '../../components/Input';

interface AddMenuScreenProps {
    route: any;
    navigation: any;
}

const AddMenu: React.FC<AddMenuScreenProps> = ({ route, navigation }) => {
  

  return (
    <SafeAreaView style={styles.safeArea} >

      {/* Header */}
      <ViewDisplay direction='vertical' align='center' justify='top' type='header'>
        <TextView type='title' style={{width: 'auto', textAlign: 'center'}}>Création Menu</TextView>
      </ViewDisplay>
      
      {/* Body */}
      <ScrollView style={{flex: 1}}>

        {/* Nom et Prix */}
        <ViewDisplay direction='horizontal' align='center' justify='betweenS' type='default' style={{gap: 10}}>
          
          <View style={{ flex: 1,}}>
            <TextView type='subtitle'>Nom</TextView>
            <InputView placeholder='Nom du menu' />
          </View>

          <View style={{width: '40%'}}>
            <TextView type='subtitle'>Prix</TextView>
            <InputView placeholder='Prix' />
          </View>
          
        </ViewDisplay>

        {/* Description */}
        <ViewDisplay direction='vertical' align='center' justify='betweenS' type='default'>
          <TextView type='subtitle'>Description</TextView>
          <InputView placeholder='Description' multilignes={true}/>
        </ViewDisplay>

        {/* Image */}
        <ViewDisplay direction='vertical' align='center' justify='betweenS' type='default'>
          <TextView type='subtitle'>Image</TextView>
        </ViewDisplay>
        
      </ScrollView>

		</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: '#FFECD1'
  },
});

export default AddMenu;