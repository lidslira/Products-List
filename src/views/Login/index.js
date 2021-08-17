import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginAction} from '~/store/ducks/user';
import * as S from './styles';

import LogoImg from '../../assets/groceries.png';

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    dispatch(loginAction(username, password));
  };

  return (
    <S.KeyboardAvoidingView>
      <S.StatusBar />
      <S.ImageArea source={LogoImg} />
      <S.LoginArea>
        <S.HeaderTitle> Login </S.HeaderTitle>
        <S.TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <S.TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
      </S.LoginArea>
      <S.Button onPress={() => login()}>
        <S.ButtonText> LOG IN </S.ButtonText>
      </S.Button>
    </S.KeyboardAvoidingView>
  );
};

export default Login;
