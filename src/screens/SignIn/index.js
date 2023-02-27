import React from 'react';
import { Text } from 'react-native';
import { Container, InputArea } from './styles';
import BarberLogo from '../../assets/barber.svg';

export default () => {
  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <SignInput />
        <SignInput />

        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>Ainda não possui uma conta ?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
