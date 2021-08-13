import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Header = styled.View`
  height: 100px;
  background-color: ${({theme}) => theme.Colors.white};
`;

export const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 100,
  },
});
