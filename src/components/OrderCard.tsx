import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OrderCard = ({ restaurantName, price, address, orderId, date, status, selected, icon }) => {
  return (
    <View style={[styles.card, selected ? styles.selected : null]}>
      <View style={styles.header}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        {icon && <Image source={icon} style={styles.icon} />}
      </View>
      <View style={styles.adressprice}>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.price}>{price} €</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.orderId}>#{orderId}</Text>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
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
    width: 270,
    alignSelf: 'center',
  },
  selected: {
    borderColor: '#15616D',
    borderWidth: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  adressprice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems : 'flex-start',
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1, // Ensure it takes up space appropriately
  },
  icon: {
    width: 50,
    height: 50,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
    alignSelf: 'flex-end', // Align price to the right side
    marginLeft: 8, // Add some space between the price and the address
    width: 50, // Ensure the price doesn't take up too much space
    
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
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
