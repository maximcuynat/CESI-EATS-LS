import React from "react";
import { View, StyleSheet } from "react-native";
import TextView from "./Text";
import ViewDisplay from "./Display";
import { Card } from '@rneui/themed';

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
    <ViewDisplay align="center" justify="center" direction="vertical"
     style={{ height: 'auto'}} >
        <Card>
            <View style={styles.cardContent}>
                <Card.Image source={{ uri: restaurant.path_image }} style={styles.logo} />
                <View style={styles.textContainer}>
                    <TextView type="title">{restaurant.name}</TextView>
                    <TextView type="subtitle">{restaurant.distance} km</TextView>
                    <TextView type="subtitle">Adresse : {restaurant.address}</TextView>
                </View>
            </View>
      </Card>
    </ViewDisplay>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: "#fdf0da",
    },
    card: {
      borderRadius: 10,
      padding: 15,
      marginBottom: 10,
    },
    cardContent: {
      flexDirection: "row",
      alignItems: "center"
    },
    logo: {
      width: 75,
      height: 75,
      marginRight: 15,
    },
    textContainer: {
      flex: 1,
    },
    address: {
      fontSize: 14,
      color: "#444",
    },
  });

export default DispRestaurant;