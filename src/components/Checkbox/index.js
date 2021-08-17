import React, {useState} from 'react';
import {CheckBox} from 'react-native';

import {Container, CheckboxContainer, Text} from './styles';

const GetCheck = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <Container>
      <CheckboxContainer>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text>Do you like React Native?</Text>
      </CheckboxContainer>
      <Text>Is CheckBox selected: {isSelected ? '👍' : '👎'}</Text>
    </Container>
  );
};

export default GetCheck;
