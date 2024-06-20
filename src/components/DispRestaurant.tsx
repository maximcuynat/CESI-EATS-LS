import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import TextView from "./Text";
import ViewDisplay from "./Display";
import { Image } from "react-native-elements";

interface DispRestaurantProps {
  restaurant: {
    id_restaurant: number;
    nom: string;
    adresse_resto: string;
    description: string;
    path_image: string;
  };
}

interface DispRestaurantProps {
	route: any;
	navigation: any;
}

const DispRestaurant: React.FC<DispRestaurantProps> = ({ restaurant, navigation }) => { 

  return (
    <ViewDisplay align="center" justify="center" direction="vertical" type="card" style={styles.container}>
      <View>
        <TextView type="title" style={{fontSize: 22}}>{restaurant.nom}</TextView>
        <TextView type="normal">{restaurant.adresse_resto}</TextView>
        <TextView type="normal">{restaurant.description}</TextView>
      </View>
      <View>
        <Image source={require("../../assets/img/RestaurantImage.png")} style={{ width: 100, height: 100 }} />
      </View>
    </ViewDisplay>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    // Border
    borderWidth: 0,
    borderRadius: 15,

    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    marginVertical: 10,
    // Flex
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default DispRestaurant;