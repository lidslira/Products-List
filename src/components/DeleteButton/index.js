import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

const DeleteButton = () => {
  return (
    <TouchableOpacity>
      <Icon name="trash-can-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default DeleteButton;
