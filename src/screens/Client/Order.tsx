import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Pressable, View, ScrollView } from 'react-native';

import ViewDisplay from '../../components/Display';
import TextView from '../../components/Text';
// Menu API
import { getMenus } from '../../api/menuAPI';
import { getArticles } from '../../api/articleAPI';
import DispMenu from '../../components/DispMenu';7
import DispArticle from '../../components/DispArticle';

interface OrderScreenProps {
    route: any;
    navigation: any;
}

const Order: React.FC<OrderScreenProps> = ({ route, navigation }) => {

  // Recuperation de l'id du restaurant
  const { id } = route.params;

  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [showArticles, setShowArticles] = React.useState<boolean>(true);

  const [menus, setMenus] = React.useState<any>([]);
  const [articles, setArticles] = React.useState<any>([]);

  const [panier, setPanier] = React.useState<any>({
    articles: {
      id_articles: [],
      quantite: [],
    }
  });

  // Recuperation des menus
  useEffect(() => {
    getMenus(id).then((data) => {
      setMenus(data);
    });
  }, []);

  // Recuperation des articles
  useEffect(() => {
    getArticles(id).then((data) => {
      console.log(data);
      setArticles(data);
    });
  }, []);

  // Fonction pour afficher les menus
  const switchToMenus = () => {
    setShowMenu(true);
    setShowArticles(false);
  }

  // Fonction pour afficher les articles
  const switchToArticles = () => {
    setShowMenu(false);
    setShowArticles(true);
  }

  const handleAddArticleToCart = (id: number, quantite: number) => {
    console.log('handleAddArticleToCart');
    const actualPanier = panier;
    console.log(actualPanier);
    console.log('A changer : ', id, quantite);
    for (let i = 0; i < actualPanier.articles.id_articles.length; i++) {
      if (actualPanier.articles.id_articles[i] === id) {
        actualPanier.articles.quantite[i] = quantite;
        setPanier(actualPanier);
        return;
      }
    }
    actualPanier.articles.id_articles.push(id);
    actualPanier.articles.quantite.push(quantite);
    setPanier(actualPanier);
  }

  return (
    <SafeAreaView style={styles.safeArea} >

      <ScrollView style={{flex: 1, width: '100%', marginVertical: 89}}>
        {showMenu && 
          <ViewDisplay direction='vertical' align='center' justify='center' type='default'>
              {menus.map((menu: any) => (
                <DispMenu key={menu.id_menu} menu={menu} />
              ))}
          </ViewDisplay>
        }

        {showArticles && 
          <ViewDisplay direction='vertical' align='center' justify='center' type='default'>
            {articles.map((article: any) => (
              <DispArticle key={article.id_article} article={article} onAddToCart={handleAddArticleToCart} />
            ))}
          </ViewDisplay>
        }

    </ScrollView>

      <View style={styles.headerMenu}>
        <View style={[styles.buttonSwitchMenus, styles.commun]}>
          <Pressable onPress={switchToMenus}>
            <TextView type='title' style={{color: '#FFECD1'}}>Menus</TextView>
          </Pressable>
        </View>
        <View style={[styles.buttonSwitchArticles, styles.commun]}>
          <Pressable onPress={switchToArticles}>
            <TextView type='title'style={{color: '#FFECD1'}}>Articles</TextView>
          </Pressable>
        </View>
      </View>


      <Pressable style={styles.btnCart}>
        <TextView type='title' style={{width: 'auto', textAlign: 'center', color: 'white',}}>Voir le panier</TextView>
      </Pressable>
		</SafeAreaView>
  );
};

const styles = StyleSheet.create({

  headerMenu: {
    position: 'absolute',
    width: '100%',
    top: 0,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    // Margin / Padding
  },

  commun: {
    paddingTop: 35,
    paddingBottom: 10,
  },

  buttonSwitchMenus: {
    width: '50%',
    backgroundColor: '#FF7D00',
  },

  buttonSwitchArticles: {
    backgroundColor: '#78290F',
    width: '50%',
  },

  btnCart: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#15616D',
    paddingVertical: 20,
  },

  // SafeAreaView
  safeArea:{
    flex: 1,
    backgroundColor: '#FFECD1'
  },

  // Boutton menu
  buttonAddMenu: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 1,
    bottom: 0,
  },
});

export default Order;