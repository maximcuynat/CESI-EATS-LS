import React from "react";
import { StyleSheet, Image } from "react-native";
import TextView from "./Text";
import ViewDisplay from "./Display";

// Api Article
import { getTypesArticles } from "../api/typearticleAPI";

interface DispMenuProps {
  menu: {
    id_menu: number;
    id_restaurant: number;
    nom: string;
    description: string;
    prix_menu: number;
  };
}

const DispMenu: React.FC<DispMenuProps> = ({ menu }) => {
  // Récupération les types d'articles

  const [types, setTypes] = React.useState<string[]>([]);

  React.useEffect(() => {
    getTypesArticles().then((data) => {
      setTypes(data);
    });
  }, []);

  return (
    <ViewDisplay style={styles.cardContent}>

      <ViewDisplay style={styles.leftContainer} type="fill" >
        <TextView type="title" style={{fontSize:20, textAlign:"left", color: "#636E72"}}>{menu.nom}</TextView>
        <TextView type="subtitle" style={[styles.description, styles.price]} >{menu.prix_menu} €</TextView>
        <TextView type="subtitle" style={styles.description}>{menu.description}</TextView>
      </ViewDisplay>


      <ViewDisplay style={styles.rightContainer} align="right" type="default">
        <Image source={require("../../assets/img/photo_menu.png")} style={styles.image} />
        {types.map((item: string, index: number) => (
          <TextView key={index} type="subtitle" style={styles.item}>{menu.quantiteItems[index]} x {item}</TextView>
        ))}
      </ViewDisplay>

    </ViewDisplay>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 20,
    borderColor: "#f5d3a1",

    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  leftContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 5,
  },
  rightContainer: {
    backgroundColor: "#ffffff",
    paddingLeft: 0,
    marginLeft: 0,
    width: "auto",
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#FFECD1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: "#FFECD1",
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
