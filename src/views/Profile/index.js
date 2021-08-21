import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {EDITPROFILE} from '~/constants/routes';
import {logoutAction} from '~/store/ducks/user';
import Header from '../../components/Header';

import * as S from './styles';

const Profile = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {currentUser} = useSelector((state) => state.user);

  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <S.Container>
      <Header title="perfil" />
      <S.ImageArea>
        <Avatar.Image size={120} style={S.styles.avatar} />
      </S.ImageArea>
      <S.ProfileArea>
        {currentUser?.fullName ? (
          <S.ContainerNameTitle>
            <S.TitleText>Olá, {currentUser.fullName}</S.TitleText>
          </S.ContainerNameTitle>
        ) : (
          <S.TitleText>
            Olá usuário, {`\n`} insira suas informações =D
          </S.TitleText>
        )}
        <S.IconContainer>
          <Icon
            name="pencil"
            size={30}
            onPress={() => navigation.navigate(EDITPROFILE)}
          />
          <Icon name="logout" size={30} onPress={() => logout()} />
        </S.IconContainer>
        <S.UserInfoSection>
          {currentUser?.birthDate && (
            <S.Column>
              <S.Label> Data de nascimento: </S.Label>
              <S.Text>{currentUser.birthDate} </S.Text>
            </S.Column>
          )}
          {currentUser?.gender && (
            <S.Column>
              <S.Label> Gênero: </S.Label>
              <S.Text> {currentUser.gender} </S.Text>
            </S.Column>
          )}
          {currentUser?.address?.country && (
            <S.Row>
              <Icon name="map-marker-radius" size={25} />
              <S.Text>
                {` ${currentUser.address.city} - ${currentUser.address.state}, ${currentUser.address.country}`}
              </S.Text>
            </S.Row>
          )}
        </S.UserInfoSection>
      </S.ProfileArea>
    </S.Container>
  );
};

export default Profile;
