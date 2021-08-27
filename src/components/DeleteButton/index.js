import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';

const DeleteButton = () => {
  return (
    <View>
      <Icon name="trash-can-outline" size={26} color="black" />
    </View>
  );
};

export default DeleteButton;
