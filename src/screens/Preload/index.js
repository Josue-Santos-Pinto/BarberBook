import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

import BarberLogo from '../../assets/barber.svg';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        let res = await Api.checkToken(token);
        if (res.token) {
          await AsyncStorage.setItem('token', res.token);

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: res.data.avatar,
            },
          });

          navigation.reset({
            index: 1,
            routes: [{ name: 'MainTab' }],
          });
        } else {
          navigation.reset({
            index: 1,
            routes: [{ name: 'SignIn' }],
          });
        }
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
