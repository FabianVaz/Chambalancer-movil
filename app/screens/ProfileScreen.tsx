import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../constants/styles';

const ProfileScreen: React.FC<{ user: any }> = ({ user }) => {
  const navigation = useNavigation();

  const handlePublishService = () => {
    navigation.navigate('PublishService', { user });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../icons/profile.png')} style={styles.profileImage} />
      <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.phoneNumber}>{user.phoneNumber}</Text>
      <Button title="Publicar Servicio" onPress={handlePublishService} color="#005DFF" />
    </View>
  );
};

export default ProfileScreen;


