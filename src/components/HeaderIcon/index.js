import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';
import {styles} from './styles';
import {HOME} from '~/constants/routes';

const HeaderIcon = ({title}) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={() => navigation.navigate(HOME)} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default HeaderIcon;
