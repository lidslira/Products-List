import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {EditContainer} from './styles';

const EditButton = () => {
  return (
    <EditContainer>
      <Icon name="circle-edit-outline" size={26} color="black" />
    </EditContainer>
  );
};
export default EditButton;
