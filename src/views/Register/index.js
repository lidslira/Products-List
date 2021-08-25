import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import Header from '../../components/Header';
import Picker from '~/components/Picker';
import {insertItem, editItem} from '~/utils/grocery';
import {insertItemAction} from '~/store/ducks/grocery';

import * as S from './styles';

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const {item} = route.params;

  const {categoryList} = useSelector((state) => state.category);
  const {groceryList} = useSelector((state) => state.grocery);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (item) {
      setName(item.name);
      setAmount(item.amount);
      setCategory(item.category);
    }
  }, []);

  const newListItem = () => {
    const newList = insertItem(groceryList, category, name, amount);

    dispatch(insertItemAction(newList));
    navigation.goBack();
  };

  const editListItem = () => {
    const list = editItem(groceryList, item, name, amount);

    dispatch(insertItemAction(list));
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior="height" style={{flex: 1}} enabled={false}>
      <S.Container>
        <Header title={item ? 'Editar item' : 'Cadastrar item'} />
        <S.AddItemArea>
          <S.ContainerInput>
            <S.Text>Nome</S.Text>
            <S.TextInput
              placeholder="Item que deseja adicionar"
              value={name}
              onChangeText={setName}
            />
          </S.ContainerInput>
          <S.ContainerInput>
            <S.Text>Quantidade</S.Text>
            <S.TextInput
              placeholder="Quantidade"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />
          </S.ContainerInput>
          <S.ContainerPicker>
            <Picker
              categories={categoryList}
              itemSelect={category?.name}
              setItem={setCategory}
              disabled={item}
            />
          </S.ContainerPicker>
          <S.Button onPress={item ? () => editListItem() : () => newListItem()}>
            <S.ButtonText>{item ? 'EDITAR' : 'CADASTRAR'} </S.ButtonText>
          </S.Button>
        </S.AddItemArea>
      </S.Container>
    </KeyboardAvoidingView>
  );
};

export default Register;
