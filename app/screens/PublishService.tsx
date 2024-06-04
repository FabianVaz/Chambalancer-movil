import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../constants/styles';
import { useServices } from '../context/ServiceContext';

const PublishService: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params;
  const { fetchServices } = useServices();

  const handlePublish = async () => {
    try {
      const response = await fetch('https://chambalancer-movil-backend.onrender.com/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          price: parseFloat(price),
          authorName: `${user.firstName} ${user.lastName}` // Asegúrate de que esto esté como authorName
        }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert('Servicio publicado con éxito');
        await fetchServices();  // Actualizar la lista de servicios
        navigation.navigate('Services');  // Redirigir a la pantalla de servicios
      } else {
        Alert.alert('Error al publicar el servicio', data.message);
      }
    } catch (error) {
      Alert.alert('Error al publicar el servicio', 'Ocurrió un error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Publicar Servicio</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del Servicio"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción del Servicio"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio del Servicio"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <Button title="Publicar" onPress={handlePublish} color="#005DFF" />
    </View>
  );
};

export default PublishService;


