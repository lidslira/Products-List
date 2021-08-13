import React, {useEffect, useState} from 'react';
import {listItens} from '../../data/categories';

import {
  Container,
  ContainerList,
  TitleCategory,
  List,
  TitleItem,
  CheckContainer,
} from './styles';

const ListProducts = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const newList = listItens.filter((category) => category.data.length !== 0);
    setList(newList);
  }, []);

  const renderItems = ({item}) => {
    return (
      <ContainerList>
        <CheckContainer />
        <TitleItem> {item.name}</TitleItem>
      </ContainerList>
    );
  };

  const renderCategory = ({item}) => {
    return (
      <ContainerList>
        <TitleCategory> {item.category}</TitleCategory>
        <List
          data={item.data}
          extraData={item.data}
          renderItem={renderItems}
          keyExtractor={(itemCurrent) => itemCurrent.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </ContainerList>
    );
  };

  return (
    <Container>
      <List
        data={list}
        extraData={list}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default ListProducts;

/* código do Ruan

const renderCategory = ({item}) => {
  return (
    <S.ContainerList>
      <S.TitleCategory>{item.category}</S.TitleCategory>
      <S.List
        data={item.data}
        extraData={item.data}
        renderItem={renderItems}
        keyExtractor={itemCurrent => itemCurrent.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </S.ContainerList>
  );
};

return (
  <S.Container>
    <S.List
      data={list}
      extraData={list}
      renderItem={renderCategory}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  </S.Container>
);
};

export default Home; */
