import React from 'react';
import {KeyboardAvoidingView} from 'react-native';

import FloatButton from '../../components/FloatButton';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ListProducts from '../../components/ProductsList';
import {PROFILE} from '../../components/routes';


import {
  Container,  
  ListContainer,
} from './styles';


const Home = () => {

  return (
    <KeyboardAvoidingView
    style={{flex: 1, backgroundColor: 'white'}}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header titulo='Lista de Compras'/>
      <SearchBar/>
      <ListContainer>
        <ListProducts/>
      </ListContainer>
      <FloatButton/>
    </KeyboardAvoidingView>
  );
};

export default Home;
