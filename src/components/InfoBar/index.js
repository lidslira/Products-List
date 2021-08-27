import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {resetListAction} from '~/store/ducks/grocery';

import * as S from './styles';

const InfoBar = ({allItems, sumPrice}) => {
  const {groceryList} = useSelector((state) => state.grocery);
  const [isItem, setIsItem] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const itemExists = groceryList.filter(
      (currentCategory) => currentCategory.data.length > 0,
    );

    setIsItem(itemExists.length > 0);
  }, [groceryList]);

  const resetList = () => {
    dispatch(resetListAction());
  };

  const showAlertReset = () => {
    Alert.alert(`Atenção`, `Você tem certeza que deseja limpar a lista?`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {text: 'Sim', onPress: () => resetList()},
    ]);
  };

  const showAlert = () => {
    Alert.alert(`Atenção`, `Você ainda não cadastrou nenhum item`, [
      {
        text: 'Sair',
        style: 'cancel',
      },
      {text: 'Ok', style: 'ok'},
    ]);
  };

  return (
    <S.Container>
      <S.InfoContainer>
        <S.Cart>
          <Icon name="cart-outline" size={25} color="black" />
          <S.Text> {allItems} itens </S.Text>
        </S.Cart>
        <S.Price>
          <Icon name="cash-multiple" size={30} color="black" />
          <S.Text> R$ {sumPrice} </S.Text>
          <S.Reset>
            {isItem ? (
              <TouchableOpacity onPress={() => showAlertReset()}>
                <Icon name="sync" size={30} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => showAlert()}>
                <Icon name="sync" size={30} color="black" />
              </TouchableOpacity>
            )}
            <S.Text> Reset </S.Text>
          </S.Reset>
        </S.Price>
      </S.InfoContainer>
    </S.Container>
  );
};

export default InfoBar;
