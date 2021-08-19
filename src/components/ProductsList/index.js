import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
// import {listItens} from '../../data/categories';

import * as S from './styles';

const ListProducts = () => {
  const {categoryList} = useSelector((state) => state.category);
  const {groceryList} = useSelector((state) => state.grocery);

  const [list, setList] = useState([]);

  useEffect(() => {
    const newList = groceryList.filter(
      (category) => category.data.length !== 0,
    );
    setList(newList);
  }, []);

  const renderItems = ({item}) => {
    return (
      <S.ContainerList>
        <S.TitleItem> {item.name}</S.TitleItem>
      </S.ContainerList>
    );
  };
  // insert categoryList in this render

  const renderCategory = ({item}) => {
    return (
      <S.ContainerList>
        <S.TitleCategory> {item.category}</S.TitleCategory>
        <S.List
          data={item.data}
          extraData={item.data}
          renderItem={renderItems}
          keyExtractor={(itemCurrent) => itemCurrent.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </S.ContainerList>
    );
  };

  return (
    <S.Container>
      <S.List
        data={groceryList}
        extraData={groceryList}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default ListProducts;
