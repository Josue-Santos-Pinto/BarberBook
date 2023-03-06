import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, Button } from 'react-native';
import Api from '../../Api';
import {
  Container,
  HeaderArea,
  HeaderTitle,
  InputArea,
  InputName,
  InputItem,
  SendInfoButton,
  SendInfoButtonText,
} from './styles';

export default () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogoutButton = async () => {
    await Api.logout();
    navigation.reset({
      index: 1,
      routes: [{ name: 'SignIn' }],
    });
  };
  const handleChangeAccount = async () => {
    if (newName == name && newEmail == email && password == '' && confirmPassword == '') {
      alert('Nenhuma informação para alterar');
    } else {
      if (newName != name) {
        var res = await Api.updateUser({ name: newName });
      }
      if (newEmail != email) {
        var res = await Api.updateUser({ email: newEmail });
      }
      if (password != '' && confirmPassword != '') {
        var res = await Api.updateUser({ password, password_confirm: confirmPassword });
      }
      if (res.error == '') {
        alert('Informações do usuário alterada(s) com sucesso!');
        navigation.reset({ index: 1, routes: [{ name: 'Home' }] });
      } else {
        for (let i in res.error) {
          console.log(res.error.length);
          alert(res.error[i]);
        }
      }
    }
  };

  useEffect(() => {
    const getUserInfo = async () => {
      let res = await Api.getUserInfo();
      if (res.error == '') {
        setName(res.data.name);
        setEmail(res.data.email);
        setNewName(res.data.name);
        setNewEmail(res.data.email);
      } else {
        alert(res.error);
      }
    };
    getUserInfo();
  }, []);

  return (
    <Container>
      <HeaderArea>
        <HeaderTitle>Perfil</HeaderTitle>
      </HeaderArea>
      <InputArea>
        <InputName>Nome: </InputName>
        <InputItem
          value={newName}
          onChangeText={(e) => setNewName(e)}
          placeholder="Digite seu nome"
          placeholderTextColor="#268596"
        />
      </InputArea>
      <InputArea>
        <InputName>Email: </InputName>
        <InputItem
          value={newEmail}
          onChangeText={(e) => setNewEmail(e)}
          placeholder="Digite seu email"
          placeholderTextColor="#268596"
        />
      </InputArea>
      <InputArea>
        <InputName>Nova senha: </InputName>
        <InputItem
          value={password}
          onChangeText={(e) => setPassword(e)}
          placeholder="Digite sua senha"
          placeholderTextColor="#268596"
          secureTextEntry
        />
      </InputArea>
      <InputArea>
        <InputName>Confirmar senha: </InputName>
        <InputItem
          value={confirmPassword}
          onChangeText={(e) => setConfirmPassword(e)}
          placeholder="Confirme sua senha"
          placeholderTextColor="#268596"
          secureTextEntry
        />
      </InputArea>

      <SendInfoButton onPress={handleChangeAccount} color={'#268596'}>
        <SendInfoButtonText>Salvar</SendInfoButtonText>
      </SendInfoButton>

      <SendInfoButton onPress={handleLogoutButton} color={'#fc6868'}>
        <SendInfoButtonText>Sair</SendInfoButtonText>
      </SendInfoButton>
    </Container>
  );
};
