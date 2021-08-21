import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

const EditButton = () => {
  return (
    <TouchableOpacity>
      <Icon name="circle-edit-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default EditButton;
