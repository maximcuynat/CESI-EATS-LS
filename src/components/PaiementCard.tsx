import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import ViewDisplay from './Display';
import TextView from './Text';

import paypalimage from "./assets/paypal.png";
import mastercardimage from "./assets/mastercard.png";
import visaimage from "./assets/visa.png";

interface PaymentCardProps {
    type: string;
    onPress: () => void;
  }

  const styles = StyleSheet.create({
    button: {
        flexDirection: 'row', // Alignement horizontal des éléments internes
        alignItems: 'center', // Centrage vertical des éléments dans le bouton
        backgroundColor: '#FFFFFF', // Couleur de fond du bouton (blanc)
        padding: 10, // Espace autour du contenu à l'intérieur du bouton
        borderRadius: 5, // Bord arrondi du bouton
        shadowColor: '#000', // Couleur de l'ombre
        shadowOffset: { width: 0, height: 2 }, // Décalage de l'ombre
        shadowOpacity: 0.25, // Opacité de l'ombre
        shadowRadius: 3.84, // Rayon de l'ombre
        elevation: 5, // Elevation pour Android pour créer un effet d'ombre
        marginVertical: 10, // Marge verticale pour séparer les boutons entre eux
        alignSelf: 'center', // Centrer le bouton dans le conteneur parent
        width: '90%' // Largeur du bouton à 90% du conteneur parent
    },
    image: {
        width: 40, // Largeur fixe pour l'image
        height: 40, // Hauteur fixe pour l'image
        marginRight: 10 // Espace à droite de l'image
    },
    text: {
        fontSize: 16, // Taille de la police du texte
        color: '#333', // Couleur de la police
        fontWeight: 'bold' // Gras pour le texte
    }
});

const PaymentCard: React.FC<PaymentCardProps> = ({ type, onPress }) => {;
    let src;
    let image;
    if (type === 'paypal') {
        src = './assets/paypal.png';
        image = paypalimage;
    }
    if (type === 'mastercard') {
        src = './assets/mastercard.png';
        image = mastercardimage;
    }
    if (type === 'visa') {
        src = './assets/visa.png';
        image = visaimage;
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <ViewDisplay direction="horizontal" align="center">
                <Image source={image} style={styles.image}/>
                <TextView style={styles.text}>{type}</TextView>
            </ViewDisplay>
        </TouchableOpacity>
    );
};

export default PaymentCard;
