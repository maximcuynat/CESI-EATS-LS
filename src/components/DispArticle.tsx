import React from "react";
import { StyleSheet, Image, View } from "react-native";
import TextView from "./Text";
import InputView from "./Input";
import { Icon } from "react-native-elements";

// Api Article

interface DispArticleProps {
  article: {
    id_article: number;
    nom: string;
    description: string;
    prix_unitaire: number;
  };
}

const DispArticle: React.FC<DispArticleProps> = ({ article }) => {

  // Variable d'etat pour la quantité
  const [quantite, setQuantite] = React.useState<number>(0);
  

  return (
    <View style={{display: 'flex', flexDirection: 'column', alignItems:'flex-end'}}>
      <View style={styles.container}>
        <View style={styles.left}>
          <TextView type="title">{article.nom}</TextView>
          <TextView type="subtitle">{article.prix_unitaire} €</TextView>
          <TextView type="subtitle">{article.description}</TextView>
        </View>
        <View style={styles.right}>
          <Image source={require("../../assets/img/photo_article.png")} style={styles.image} />
        </View>
      </View>
      <View style={styles.selector}>
        <Icon name="minus" type="font-awesome" color="#636E72" onPress={() => quantite > 0 && setQuantite(quantite - 1)} size={45}/>
        <InputView type="number" placeholder="Quantité"  style={{width: 'auto'}} value={quantite.toString()}  style={{
          textAlign: "center",
          width: 'auto',
          marginBottom: 0,
          paddingHorizontal: 0,
          paddingVertical: 0,
        }}/>
        <Icon name="plus" type="font-awesome" color="#636E72" onPress={() => setQuantite(quantite + 1)} size={45} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selector: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 25,
    marginTop: 5,

    borderRadius: 15,

    display: "flex",
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    width: "60%",
  },
  container:{
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,

    // elevation
    elevation: 5,

    // border radius
    borderRadius: 15,

    padding: 10,
  },

  left: {

  },


  image: {
    width: 80,
    height: 80,
  },

});

export default DispArticle;
