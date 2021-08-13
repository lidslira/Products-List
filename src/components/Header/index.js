import React from 'react';
import LogoImg from '../../assets/groceries.png';

import {
  HeaderArea,
  HeaderImage,
  HeaderTitleArea,
  HeaderTitle,
  StatusBar,
} from './styles';

const Header = ({titulo}) => {
  return (
    <HeaderArea>
      <StatusBar />
      <HeaderImage source={LogoImg} />
      <HeaderTitleArea>
        <HeaderTitle>{titulo}</HeaderTitle>
      </HeaderTitleArea>
    </HeaderArea>
  );
};

export default Header;
