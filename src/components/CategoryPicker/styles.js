import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 230px;
  margin-top: 18px;
  background-color: white;
`;

export const CategoryContainer = styled.TouchableOpacity`
  width: 230px;
  height: 50px;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-radius: 8px;
  background-color: white;
`;

export const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 230,
    color: 'black',
  },
});
