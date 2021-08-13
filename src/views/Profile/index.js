import React from 'react';
import {Text} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as S from './styles';

import HeaderBar from '~/components/HeaderBar';
// import { userData } from '../../data/user';

const Profile = () => {
  return (
    <S.Container>
      <HeaderBar title="PERFIL" />
      <S.ProfileArea>
        <Avatar.Text
          size={80}
          label="AL"
          color="black"
          style={S.styles.avatar}
        />
        <S.Title> Ana Lídia </S.Title>
        <S.Caption>
          @lidslira {`\n`}
          25 anos {`\n`}
        </S.Caption>
        <S.UserInfoSection>
          <S.Row>
            <Icon name="gender-female" size={20} />
            <Text> Feminino </Text>
          </S.Row>
          <S.Row>
            <Icon name="map-marker-radius" size={20} />
            <Text> Fortaleza - CE, Brasil </Text>
          </S.Row>
          <S.Row>
            <Icon name="phone" size={20} />
            <Text> +55 85 955555555 </Text>
          </S.Row>
          <S.Row>
            <Icon name="email" size={20} />
            <Text> ana.ribeiro@dellead.com </Text>
          </S.Row>
        </S.UserInfoSection>
      </S.ProfileArea>
    </S.Container>
  );
};

export default Profile;
