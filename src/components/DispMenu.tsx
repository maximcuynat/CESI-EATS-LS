import React from "react";
import { StyleSheet, Image } from "react-native";
import TextView from "./Text";
import ViewDisplay from "./Display";

// Api Article

interface DispMenuProps {
  menu: {
    id_menu: number;
    id_restaurant: number;
    nom: string;
    description: string;
    prix_menu: number;
    typeArticles: object[];
  };
}

const DispMenu: React.FC<DispMenuProps> = ({ menu }) => {
  return (
    <ViewDisplay style={styles.cardContent}>

      <ViewDisplay direction="vertical" align="left" style={styles.leftContainer}>
        <TextView type="title" style={styles.title}>{menu.nom}</TextView>
        <TextView type="subtitle" style={[styles.description, styles.price]} >{menu.prix_menu} €</TextView>
        <TextView type="subtitle" style={styles.description}>{menu.description}</TextView>
      </ViewDisplay>

      <ViewDisplay style={styles.rightContainer} align="right" type="default">
        <Image source={require("../../assets/img/photo_menu.png")} style={styles.image} />
        {menu.typeArticles.map((type: any) => (
          <TextView key={type.type} style={styles.item}>
            {type.type} x {type.quantite}
          </TextView>
        ))}
      </ViewDisplay>

    </ViewDisplay>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign:"left",
    color: "#636E72",
    width: "100%",
  },

  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: 15,

    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,

    backgroundColor: "white",
  },

  leftContainer: {
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },

  rightContainer: {
    backgroundColor: "transparent",
    width: "auto",
  },

  image: {
    width: 80,
    height: 80,
  },

  description: {
    fontSize: 18,
    color: "#636E72",
    fontWeight: "light",
  },

  price: {
    fontWeight: "bold",
  },

  item: {
    fontSize: 16,
    textAlign: "right",
    color: "#636E72",
    marginBottom: 0,
  },

});

export default DispMenu;
