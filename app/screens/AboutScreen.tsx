import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { styles } from '../constants/styles';

const AboutScreen: React.FC = () => {
  return (
    <ScrollView style={aboutStyles.container}>
      <Text style={aboutStyles.title}>Nuestra Visión</Text>
      <Text style={aboutStyles.paragraph}>
        Nuestro proyecto busca establecer una plataforma web innovadora y confiable para ofrecer, adquirir y gestionar servicios en línea. Queremos crear un espacio seguro donde los usuarios puedan interactuar de manera efectiva.
      </Text>
      <Text style={aboutStyles.paragraph}>
        Nos basamos en tres pilares: accesibilidad, confianza y versatilidad. Queremos un entorno en línea donde los usuarios naveguen fácilmente, interactúen de manera segura y encuentren soluciones eficientes a sus necesidades.
      </Text>
      <Text style={aboutStyles.paragraph}>
        Promovemos la confianza con un sistema transparente que garantice la seguridad de todas las transacciones, fomentando la accesibilidad y flexibilidad en la publicación y pago de servicios.
      </Text>
      <Text style={aboutStyles.paragraph}>
        Además, buscamos crear una comunidad próspera donde los usuarios puedan opinar sobre servicios y dejar reseñas de sus experiencias.
      </Text>
      <Image 
        source={require('../icons/chambalancer-icon.png')} 
        style={aboutStyles.icon}
      />
    </ScrollView>
  );
};

const aboutStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#005DFF',
    marginBottom: 15,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 15,
    lineHeight: 24,
  },
  icon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default AboutScreen;
