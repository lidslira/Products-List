import React from 'react';
import {Platform} from 'react-native';

import FloatButton from '../../components/FloatButton';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ListProducts from '../../components/ProductsList';
import {REGISTER} from '../../constants/routes';

import {Container, ListContainer} from './styles';

const Home = ({navigation}) => {
  const registerItem = () => {
    navigation.navigate(REGISTER, {item: null});
  };
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header title="my list" />
      <SearchBar />
      <ListContainer>
        <ListProducts />
      </ListContainer>
      <FloatButton actionButton={registerItem} />
    </Container>
  );
};

export default Home;
