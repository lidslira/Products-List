import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, Title, UserInfoSection, Row, Caption} from './styles';

// import { userData } from '../../data/user';

const Profile = () => {
  return (
    <Container>
      <Avatar.Text size={80} label="AL" color="black" style={styles.avatar} />
      <Title> Ana Lídia </Title>
      <Caption>
        @lidslira {`\n`}
        25 anos {`\n`}
      </Caption>
      <UserInfoSection>
        <Row>
          <Icon name="gender-female" size={20} />
          <Text> Feminino </Text>
        </Row>
        <Row>
          <Icon name="map-marker-radius" size={20} />
          <Text> Fortaleza - CE, Brasil </Text>
        </Row>
        <Row>
          <Icon name="phone" size={20} />
          <Text> +55 85 955555555 </Text>
        </Row>
        <Row>
          <Icon name="email" size={20} />
          <Text> ana.ribeiro@dellead.com </Text>
        </Row>
      </UserInfoSection>
    </Container>
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#40e0d0',
  },
});

export default Profile;
