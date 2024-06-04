import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useServices } from '../context/ServiceContext';

const ServicesScreen: React.FC = () => {
  const { services, fetchServices } = useServices();

  useEffect(() => {
    fetchServices();
  }, []);

  const renderService = ({ item }) => (
    <View style={servicesStyles.serviceContainer}>
      <Image source={require('../icons/services-default.png')} style={servicesStyles.icon} />
      <View style={servicesStyles.textContainer}>
        <Text style={servicesStyles.name}>{item.name}</Text>
        <Text style={servicesStyles.description}>{item.description}</Text>
        <Text style={servicesStyles.author}>Autor: {item.author}</Text>
        <Text style={servicesStyles.price}>${item.price}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={services}
      renderItem={renderService}
      keyExtractor={(item) => item._id}
      contentContainerStyle={servicesStyles.container}
    />
  );
};

const servicesStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
  serviceContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  description: {
    fontSize: 16,
    color: '#666666',
    marginVertical: 5,
  },
  author: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#005DFF',
  },
});

export default ServicesScreen;

