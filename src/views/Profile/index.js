import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {EDITPROFILE} from '~/constants/routes';
import {logoutAction} from '~/store/ducks/user';

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
      <S.ProfileArea>
        <S.ImageArea>
          <Avatar.Image size={80} style={S.styles.avatar} />
        </S.ImageArea>
        <S.ContainerNameTitle>
          <S.TitleText>
            Olá, {currentUser.fullName}
            {` `}
          </S.TitleText>
          <Icon
            name="pencil"
            size={30}
            onPress={() => navigation.navigate(EDITPROFILE)}
          />
          {` `}
          <Icon name="logout" size={30} onPress={() => logout()} />
        </S.ContainerNameTitle>
        <S.UserInfoSection>
          <S.Row>
            <Icon name="calendar" size={25} />
            <S.Text> {currentUser.birthDate} </S.Text>
          </S.Row>
          <S.Row>
            <S.Text> {currentUser.gender} </S.Text>
          </S.Row>
          <S.Row>
            <Icon name="map-marker-radius" size={25} />
            <S.Text>
              {` ${currentUser.address.city} - ${currentUser.address.state}, ${currentUser.address.country}`}
            </S.Text>
          </S.Row>
        </S.UserInfoSection>
      </S.ProfileArea>
    </S.Container>
  );
};

export default Profile;
