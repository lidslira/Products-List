import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as S from './styles';

const SearchArea = ({...rest}) => {
  return (
    <S.Container>
      <S.SearchContainer>
        <S.IconArea>
          <Icon
            name="magnify"
            color="black"
            size={24}
            borderRightWidth="1"
            borderColor="black"
          />
        </S.IconArea>
        <S.SearchArea {...rest} />
      </S.SearchContainer>
    </S.Container>
  );
};

export default SearchArea;
