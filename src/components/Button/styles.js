import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  width: 250px;
  height: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.Colors.turquoise};
  border-radius: 10px;
`;

export const ButtonContainer = styled.View`
  flex: 0.15;
`;

export const ButtonTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #1c1c1c;
  text-align: center;
`;
