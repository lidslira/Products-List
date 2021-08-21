import React from 'react';
import * as S from './styles';

const Header = ({title}) => {
  return (
    <S.HeaderArea>
      <S.StatusBar />
      <S.HeaderTitleArea>
        <S.HeaderTitle>{title}</S.HeaderTitle>
      </S.HeaderTitleArea>
    </S.HeaderArea>
  );
};

export default Header;
