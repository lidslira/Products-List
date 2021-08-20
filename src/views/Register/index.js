import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Picker from '~/components/Picker';
import {insertItem} from '~/utils/grocery';
import {insertItemAction} from '~/store/ducks/grocery';

import * as S from './styles';

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  const {categoryList} = useSelector((state) => state.category);
  const {groceryList} = useSelector((state) => state.grocery);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState(null);

  const newListItem = () => {
    const newList = insertItem(groceryList, category, name, amount);

    dispatch(insertItemAction(newList));
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior="height" style={{flex: 1}} enabled={false}>
      <S.Container>
        <S.ContainerInput>
          <S.Text>Nome</S.Text>
          <S.TextInput
            keyboardType="default"
            placeholder="Item que deseja adicionar"
            value={name}
            onChangeText={setName}
          />
        </S.ContainerInput>
        <S.ContainerInput>
          <S.Text>Quantidade</S.Text>
          <S.TextInput
            keyboardType="numeric"
            placeholder="Quantidade"
            value={amount}
            onChangeText={setAmount}
          />
        </S.ContainerInput>
        <S.ContainerPicker>
          <Picker
            categories={categoryList}
            itemSelect={category?.name}
            setItem={setCategory}
          />
        </S.ContainerPicker>
        <S.Button onPress={() => newListItem()}>
          <S.ButtonText>CADASTRAR</S.ButtonText>
        </S.Button>
      </S.Container>
    </KeyboardAvoidingView>
  );
};

export default Register;
