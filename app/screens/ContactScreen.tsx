import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { styles } from '../constants/styles';

const ContactScreen: React.FC = () => {
  return (
    <View style={contactStyles.container}>
      <Image 
        source={require('../icons/contact.png')} 
        style={contactStyles.icon}
      />
      <Text style={contactStyles.label}>Nombre:</Text>
      <Text style={contactStyles.text}>Luis Fabián Vázquez Rodríguez</Text>
      <Text style={contactStyles.label}>Email:</Text>
      <Text style={contactStyles.text}>20460323@colima.tecnm.mx</Text>
      <Text style={contactStyles.label}>Carrera:</Text>
      <Text style={contactStyles.text}>Ingeniería en Sistemas Computacionales</Text>
    </View>
  );
};

const contactStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#005DFF',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default ContactScreen;
