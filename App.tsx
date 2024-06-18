import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PaiementCard from './src/components/PaiementCard';
import OrderCard from './src/components/OrderCard';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <PaiementCard type="paypal" onPress={() => console.log('Paypal selected')} />
      <OrderCard
  restaurantName="Mc Donalds"
  price="21"
  address="212, Avenue de l'ia, 13090, Aix-en-provence"
  orderId="36236526"
  date="25/05/2024"
  status="En cours"
  icon={require('./src/components/assets/test1.png')} // Chemin vers l'icône optionnelle
  selected={true} // Indique si la commande est sélectionnée
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
