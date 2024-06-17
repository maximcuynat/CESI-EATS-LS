import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import DispRestaurant from './src/components/DispRestaurant';
import TextView from './src/components/Text';
import ViewDisplay from './src/components/Display';

const restaurants = [
  { name: "McDonald's", distance: 0.5, address: "3 av du Pere Noel 13112 La Destrousse", path_image: "./assets/logo_restaurants/logo_macdo.jpeg" },
  { name: "Burger King", distance: 1.0, address: "24 lot de la mort 13001 Aix", path_image: "./assets/logo_restaurants/logo_bk.jpeg" },
  { name: "McDonald's", distance: 1.5, address: "52 rue du singe 13124 Peypin", path_image: "./assets/logo_restaurants/logo_macdo.jpeg" },
  { name: "McDonald's", distance: 2.0, address: "48 av du parlement 13025 Pliom", path_image: "./assets/logo_restaurants/logo_macdo.jpeg" },
  { name: "McDonald's", distance: 2.5, address: "99 rue de la fin 13452 Riom", path_image: "./assets/logo_restaurants/logo_macdo.jpeg" }
];

export default function App() {
  return (
    <>
      <ViewDisplay direction="vertical" align="center" justify="center">
        <TextView type="title">Où voulez-vous manger ?</TextView>
        <ScrollView>
          {restaurants.map((restaurant, index) => (
            <DispRestaurant key={index} restaurant={restaurant} />
          ))}
        </ScrollView>
      </ViewDisplay>
    </>
  );
}