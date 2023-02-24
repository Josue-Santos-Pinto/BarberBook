import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

import BarberLogo from '../../assets/barber.svg';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        // Validar Token
      } else {
        navigation.reset({
          index: 1,
          routes: [{ name: 'SignIn' }],
        });
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#FFF" />
    </Container>
  );
};
