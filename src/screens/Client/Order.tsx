import { useEffect } from 'react';

// Api Menu et Article
import { getMenu } from '../../api/menuAPI';
import { getArticle } from '../../api/articleAPI';
// Components

import { Text, View } from 'react-native';

interface OrderProps {
  route: any;
  navigation: any;
}

const Order: React.FC<OrderProps> = ({ route, navigation }) => {

  // Récupération des paramètres de la route
  const { id } = route.params;

  useEffect(() => {
    // Récupération des données du menu
    getMenu(id)
      .then((menu) => {
        console.log(menu);
      })
      .catch((error) => {
        console.error(error);
      });

    // Récupération des articles
    getArticle(id)
      .then((articles) => {
        console.log(articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Text>Order</Text>
    </View>
  );
}

export default Order;