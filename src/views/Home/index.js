import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Platform} from 'react-native';
import {cloneDeep} from 'lodash';

import FloatButton from '../../components/FloatButton';
import InfoBar from '../../components/InfoBar';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ListProducts from '../../components/ProductsList';
import {REGISTER} from '../../constants/routes';

import {Container, ListContainer} from './styles';

const Home = ({navigation}) => {
  const {groceryList} = useSelector((state) => state.grocery);
  const [search, setSearch] = useState('');
  const [allItems, setAllItems] = useState(0);
  const [priceItems, setPriceItems] = useState(0);

  useEffect(() => {
    let totalItems = 0;
    let totalPrice = 0;
    const list = cloneDeep(groceryList);

    list.forEach((currentCategory) => {
      currentCategory.data.forEach((item) => {
        totalItems += parseInt(item.amount, 10);
        totalPrice += parseFloat((item.price * item.amount).toFixed(2));
      });
      return null;
    });

    setAllItems(totalItems);
    setPriceItems(totalPrice);
  }, [groceryList]);

  const registerItem = () => {
    navigation.navigate(REGISTER, {item: null});
  };

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header title="my list" />
      <SearchBar placeholder="Search" value={search} onChangeText={setSearch} />
      <InfoBar allItems={allItems} sumPrice={priceItems} />
      <ListContainer>
        <ListProducts searchName={search} />
      </ListContainer>
      <FloatButton actionButton={registerItem} />
    </Container>
  );
};

export default Home;
