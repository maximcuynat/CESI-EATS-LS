import React from "react";
import { View, StyleSheet } from "react-native";
import TextView from "./Text";
import ViewDisplay from "./Display";
import { Image } from "react-native-elements";

interface DispRestaurantProps {
  restaurant: {
    name: string;
    distance: number;
    address: string;
    path_image: string;
  };
}

const DispRestaurant: React.FC<DispRestaurantProps> = ({ restaurant }) => {
  return (
    <ViewDisplay align="center" justify="center" direction="vertical" type="card">
        <View style={styles.cardContent}>
            <Image source={{ uri: restaurant.path_image }} style={styles.logo} />
            <View style={styles.textContainer}>
                <TextView type="title" style={styles.colorText}>{restaurant.name}</TextView>
                <TextView type="subtitle" style={styles.subsubtitle}>Distance : {restaurant.distance} km</TextView>
                <TextView type="subtitle" style={styles.colorText}>Adresse : {restaurant.address}</TextView>
            </View>
        </View>
    </ViewDisplay>
  );
};

const styles = StyleSheet.create({
    cardContent: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: "white",
      padding: 10,
    },
    logo: {
      width: 75,
      height: 75,
      borderRadius: 10,
      marginRight: 15,
    },
    textContainer: {
      flex: 1,
    },
    colorText: {
      color: '#636E72'
    },
    subsubtitle: {
        fontSize: 18,
        color: '#636E72',
        fontWeight: 'light',
    }
  });

export default DispRestaurant;