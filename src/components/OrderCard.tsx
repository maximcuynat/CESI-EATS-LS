import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ViewDisplay from './Display';

const OrderCard = ({ restaurantName, price, address, orderId, date, status, selected, icon }) => {
  return (
    <TouchableOpacity style={[styles.card, selected ? styles.selected : null]}>
      <ViewDisplay style={styles.header}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <Text style={styles.address}  numberOfLines={2} ellipsizeMode='tail' >{address}</Text>
        {icon && <Image source={icon} style={[styles.icon, styles.iconContainer]} />}
        <Text style={[styles.price, styles.iconContainer]}>{price} €</Text>
        <Text style={[styles.orderId, styles.details]}>#{orderId}</Text>
        <Text style={[styles.status, styles.details]}>{status}</Text>
        <Text style={[styles.date, styles.details]}>{date}</Text>
      </ViewDisplay>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    height: 140,
    width: 270,
  },
  selected: {
    borderColor: '#15616D',
    borderWidth: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: 'column', // Changé de 'row' à 'column'
    alignItems: 'center', // Centrer les éléments verticalement
  },
  icon: {
    width: 50,
    height: 50,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 4, // Ajouté un peu d'espace entre l'icône et le prix
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    flex: 1,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderId: {
    fontSize: 14,
    color: '#666',
  },
  status: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    fontSize: 14,
    color: '#666',
  }
});

export default OrderCard;
