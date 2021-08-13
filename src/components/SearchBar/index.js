import React from 'react';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchArea = () => {
  return (
    <SearchBar
      lightTheme
      cancelIcon={false}
      inputStyle={{borderRadius: 1}}
      searchIcon={<Icon name="magnify" color="black" size={20} />}
      containerStyle={{
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderRadius: 5,
      }}
      placeholder="Search here..."
    />
  );
};

export default SearchArea;
