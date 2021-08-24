import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {EditContainer} from './styles';

const EditButton = () => {
  // const {actionButton} = props;
  return (
    <EditContainer>
      <Icon
        name="circle-edit-outline"
        size={25}
        color="black"
        // onPress={() => actionButton()}
      />
    </EditContainer>
  );
};
export default EditButton;
