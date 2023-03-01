import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Button } from 'react-native';
import Api from '../../Api';
import { Container } from './styles';

export default () => {
  const navigation = useNavigation();

  const handleLogoutButton = async () => {
    await Api.logout();
    navigation.reset({
      index: 1,
      routes: [{ name: 'SignIn' }],
    });
  };

  return (
    <Container>
      <Text>Profile</Text>
      <Button title="Sair" onPress={handleLogoutButton} />
    </Container>
  );
};
