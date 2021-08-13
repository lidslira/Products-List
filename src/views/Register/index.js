import React from 'react';

import HeaderBar from '~/components/HeaderBar';
import CategoryPicker from '~/components/CategoryPicker';
// import {listItens} from '../../data/categories';

import * as S from './styles';

const Register = () => {
  return (
    <S.Container>
      <HeaderBar title="CADASTRAR NOVO ITEM" />
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
