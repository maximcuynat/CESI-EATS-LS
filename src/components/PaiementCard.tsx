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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 10,
        width: 270,  // Largeur du bouton
        height: 90,  // Hauteur du bouton
    },
    image: {
        width: 80,  // Réduire la taille de l'image
        height: 80, // pour qu'elle soit plus petite dans le cadre
        marginRight: 10,
        resizeMode: 'stretch',
        backgroundColor : '#FFECD1',
        borderWidth: 10, // Largeur du bord
        borderColor: '#FFECD1', // Couleur du bord, identique au fond du bouton
        borderRadius: 15, // Rayon du bord pour le rendre arrondi
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
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
        <TouchableOpacity onPress={onPress}>
            <ViewDisplay direction="horizontal" align="center" style={styles.button}>
                <Image source={image} style={styles.image}/>
                <TextView style={styles.text}>{type}</TextView>
            </ViewDisplay>
        </TouchableOpacity>
    );
};

export default PaymentCard;
