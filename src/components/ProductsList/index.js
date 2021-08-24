import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routes';

import EditButton from '~/components/EditButton';
import DeleteButton from '~/components/DeleteButton';
import * as S from './styles';

const ListProducts = () => {
  const navigation = useNavigation();
  const {groceryList} = useSelector((state) => state.grocery);

  const [list, setList] = useState([]);

  useEffect(() => {
    const newList = groceryList.filter(
      (category) => category.data.length !== 0,
    );
    setList(newList);
  }, [groceryList]);

  const editItem = (item) => {
    navigation.navigate(REGISTER, {item});
  };

  const renderItems = ({item}) => {
    return (
      <S.ContainerList>
        <S.ItemContainer>
          <S.CheckItem />
          <S.ItemRow>
            <S.TitleItem>
              {item.name} — {item.amount}
            </S.TitleItem>
            <S.Icons>
              <S.IconButton onPress={() => editItem(item)}>
                <EditButton />
              </S.IconButton>
              <DeleteButton />
            </S.Icons>
          </S.ItemRow>
        </S.ItemContainer>
      </S.ContainerList>
    );
  };

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
        data={list}
        extraData={list}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default ListProducts;
