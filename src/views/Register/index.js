import React from 'react';

import RegisterBar from '~/components/RegisterBar';
import CategoryPicker from '~/components/CategoryPicker';
// import Header from '../../components/Header';
// import {listItens} from '../../data/categories';

import * as S from './styles';

const Register = () => {
  return (
    <S.Container>
      <RegisterBar />
      <S.RegisterArea>
        <S.TextInput placeholder="Item que deseja adicionar" required />
        <S.TextInput placeholder="Quantidade" keyboardType="numeric" required />
        <S.TextInput placeholder="Preço" keyboardType="numeric" />
        <CategoryPicker />
        <S.Button>
          <S.ButtonText>CADASTRAR</S.ButtonText>
        </S.Button>
      </S.RegisterArea>
    </S.Container>
  );
};

export default Register;
