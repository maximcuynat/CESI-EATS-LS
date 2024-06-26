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
  onAddToCart: (id: number, quantite: number) => void;
}
const DispArticle: React.FC<DispArticleProps> = ({ article, onAddToCart }) => {


  const [quantite, setQuantite] = React.useState<number>(0);

  React.useEffect(() => {
    onAddToCart(article.id_article, quantite);
  }, [quantite]);

  const handleOnPressPlus = () => {
    setQuantite(quantite + 1);
  };

  const handleOnPressMinus = () => {
    if (quantite > 0){
      setQuantite(quantite - 1);
    }
  };

  return (
    <View style={{display: 'flex', flexDirection: 'column', alignItems:'flex-end'}}>
      <View style={styles.container}>
        <View style={styles.left}>
          <TextView type="title">{article.nom}</TextView>
          <TextView type="subtitle">{article.prix_unitaire} €</TextView>
          <TextView type="subtitle">{article.description}</TextView>
        </View>
        <View>
          <Image source={require("../../assets/img/photo_article.png")} style={styles.image} />
        </View>
      </View>
      <View style={styles.selector}>
        <Icon name="minus" type="font-awesome" color="#636E72" onPress={() => handleOnPressMinus()} size={45}/>
        <InputView type="number" placeholder="Quantité" value={quantite.toString()}  style={styles.inputStyle} />
        <Icon name="plus" type="font-awesome" color="#636E72" onPress={() => handleOnPressPlus()} size={45} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    textAlign: "center",
    width: 'auto',
    marginBottom: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
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
