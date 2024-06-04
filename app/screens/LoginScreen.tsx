import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../constants/styles';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://chambalancer-movil-backend.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert('Login successful', `Welcome ${data.user.firstName}`);
        navigation.navigate('Main', { user: data.user });
      } else {
        Alert.alert('Login failed', data.message);
      }
    } catch (error) {
      Alert.alert('Login failed', 'An error occurred');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chambalancer</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} color="#005DFF" />
      <TouchableOpacity onPress={handleRegister} style={loginStyles.registerLink}>
        <Text style={loginStyles.registerText}>Registrarme</Text>
      </TouchableOpacity>
    </View>
  );
};

const loginStyles = StyleSheet.create({
  registerLink: {
    marginTop: 20,
  },
  registerText: {
    color: '#005DFF',
    textAlign: 'center',
  },
});

export default LoginScreen;
