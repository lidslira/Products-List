import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, Platform} from 'react-native';

import LogoImg from '../../assets/groceries.png';
import {HOME} from '~/constants/routes';
import Button from '../../components/Button';

import * as S from './styles';

const Login = () => {
  const navigation = useNavigation();

  return (
    <S.KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <S.StatusBar />
      <S.ImageArea source={LogoImg} />
      <S.LoginArea>
        <S.HeaderTitle> Login </S.HeaderTitle>
        <Text> Usuário:</Text>
        <S.TextInput />
        <Text> Senha:</Text>
        <S.TextInput />
      </S.LoginArea>
      <Button title="LOG IN" action={() => navigation.navigate(HOME)} />
    </S.KeyboardAvoidingView>
  );
};

export default Login;
