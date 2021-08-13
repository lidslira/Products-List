import React from 'react';
import {Platform} from 'react-native';

import FloatButton from '../../components/FloatButton';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ListProducts from '../../components/ProductsList';

import {Container, ListContainer} from './styles';

const Home = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header titulo="Lista de Compras" />
      <SearchBar />
      <ListContainer>
        <ListProducts />
      </ListContainer>
      <FloatButton />
    </Container>
  );
};

export default Home;
