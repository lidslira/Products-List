import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {includes, filter, toUpper} from 'lodash';
import {REGISTER} from '../../constants/routes';
// import {alertRemoveItem} from '~/utils/alert';
import {
  removeItem,
  checkItem,
  searchItem,
  categoriesFilled,
} from '~/utils/grocery';
import {removeItemAction, insertItemAction} from '~/store/ducks/grocery';
import EditButton from '~/components/EditButton';
import DeleteButton from '~/components/DeleteButton';
import * as S from './styles';

const ListProducts = ({searchName}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {groceryList} = useSelector((state) => state.grocery);

  const [list, setList] = useState([]);
  const [allListItems, setAllListItems] = useState([]);
  const [listItemsFilter, setListItemsFilter] = useState([]);

  useEffect(() => {
    const completeList = categoriesFilled(groceryList);
    const itemsList = searchItem(groceryList);
    setAllListItems(itemsList);
    setList(completeList);
  }, [groceryList]);

  const editItem = (item) => {
    navigation.navigate(REGISTER, {item});
  };

  const checkListItem = (item) => {
    const checkList = checkItem(groceryList, item);

    dispatch(insertItemAction(checkList));
  };

  const updateItemsFilter = () => {
    let itemsFilter = [];

    itemsFilter = filter(allListItems, (item) =>
      includes(toUpper(item.name), toUpper(searchName)),
    );

    setListItemsFilter(itemsFilter);
  };

  useEffect(() => {
    if (searchName) {
      updateItemsFilter();
    }
  }, [searchName]);

  const removeListItem = (item) => {
    const updateList = removeItem(groceryList, item);

    dispatch(removeItemAction(updateList));
  };

  const showAlertItem = (item) => {
    Alert.alert(
      `Atenção`,
      `Você tem certeza que deseja remover o item: ${item.name}?`,
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Sim', onPress: () => removeListItem(item)},
      ],
    );
  };

  const renderItems = ({item}) => {
    return (
      <S.ContainerList>
        <S.ItemContainer>
          <S.CheckItem onPress={() => checkListItem(item)}>
            {item.isSelected && (
              <Icon name="check-bold" size={15} color="black" />
            )}
          </S.CheckItem>
          <S.ItemRow>
            {item.isSelected ? (
              <S.CheckedName> {item.name} </S.CheckedName>
            ) : (
              <S.TitleItem>{item.name}</S.TitleItem>
            )}
            <S.PriceQnt>
              {item.amount} unid. — R$ {item.price} {`   `}
              Total: R$ {parseFloat(item.amount * item.price).toFixed(2)}
            </S.PriceQnt>
          </S.ItemRow>
          <S.Icons>
            <S.IconButton onPress={() => editItem(item)}>
              <EditButton />
            </S.IconButton>
            <S.IconButton onPress={() => showAlertItem(item)}>
              <DeleteButton />
            </S.IconButton>
          </S.Icons>
        </S.ItemContainer>
      </S.ContainerList>
    );
  };

  const renderCategory = ({item}) => {
    return (
      <S.ContainerList>
        <S.TitleCategory>{item.category}</S.TitleCategory>
        {item.data && (
          <S.List
            data={item.data}
            extraData={item.data}
            renderItem={renderItems}
            keyExtractor={(itemCurrent) => itemCurrent.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        )}
      </S.ContainerList>
    );
  };

  return (
    <S.Container>
      {searchName ? (
        <S.List
          data={listItemsFilter}
          extraData={listItemsFilter}
          renderItem={renderItems}
          keyExtractor={(itemCurrent) => itemCurrent.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <S.List
          data={list}
          extraData={list}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </S.Container>
  );
};

export default ListProducts;
