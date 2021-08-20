import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';

import {birthdate} from '~/utils/validations';
import {informationUserAction} from '~/store/ducks/user';

import * as S from './styles';

const Profile = () => {
  const dispatch = useDispatch();

  const {currentUser} = useSelector((state) => state.user);

  const [fullNameCurrent, setFullNameCurrent] = useState('');
  const [birthDateCurrent, setBirthDateCurrent] = useState('');
  const [genderCurrent, setGenderCurrent] = useState('');
  const [cityCurrent, setCityCurrent] = useState('');
  const [stateCurrent, setStateCurrent] = useState('');
  const [countryCurrent, setCountryCurrent] = useState('');

  const setInformationUser = () => {
    setFullNameCurrent(currentUser?.fullName);
    setBirthDateCurrent(currentUser?.birthDate);
    setGenderCurrent(currentUser?.gender);
    setCountryCurrent(currentUser?.address?.country);
    setStateCurrent(currentUser?.address?.state);
    setCityCurrent(currentUser?.address?.city);
  };
  useEffect(() => {
    if (currentUser) {
      setInformationUser();
    }
  }, [currentUser]);

  const saveProfile = () => {
    dispatch(
      informationUserAction({
        fullName: fullNameCurrent,
        birthDate: birthDateCurrent,
        gender: genderCurrent,
        address: {
          city: cityCurrent,
          state: stateCurrent,
          country: countryCurrent,
        },
      }),
    );
    Alert.alert('Suas informações foram salvas');
  };

  const setBirthDate = (text) => {
    let newBirthDate = text;
    if (text) {
      newBirthDate = birthdate(text);
    }
    setBirthDateCurrent(newBirthDate);
  };

  return (
    <S.Container>
      <S.ContainerInput>
        <S.Label>Nome</S.Label>
        <S.TextInput
          placeholder="Digite o seu nome"
          value={fullNameCurrent}
          onChangeText={setFullNameCurrent}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <S.Label>Data de Nascimento</S.Label>
        <S.TextInput
          placeholder="DD/MM/AAAA"
          value={birthDateCurrent}
          onChangeText={setBirthDate}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <S.Label>Gênero</S.Label>
        <S.TextInput
          placeholder="Digite o seu gênero"
          value={genderCurrent}
          onChangeText={setGenderCurrent}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <S.Label>País</S.Label>
        <S.TextInput
          placeholder="Digite o seu País"
          value={countryCurrent}
          onChangeText={setCountryCurrent}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <S.Label>Estado</S.Label>
        <S.TextInput
          placeholder="Digite o seu estado"
          value={stateCurrent}
          onChangeText={setStateCurrent}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <S.Label>Cidade</S.Label>
        <S.TextInput
          placeholder="Digite a sua cidade"
          value={cityCurrent}
          onChangeText={setCityCurrent}
        />
      </S.ContainerInput>

      <S.ContainerButton>
        <S.Button onPress={() => saveProfile()}>
          <S.ButtonText>SALVAR</S.ButtonText>
        </S.Button>
      </S.ContainerButton>
    </S.Container>
  );
};

export default Profile;
