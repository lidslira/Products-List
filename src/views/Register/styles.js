import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const RegisterArea = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const TextInput = styled.TextInput`
  height: 50px;
  width: 200px;
  border-width: 1.5px;
  border-radius: 5px;
  margin: 20px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.Colors.turquoise};
  height: 60px;
  width: 200px;
  margin-top: 40px;
  border-radius: 10px;
  padding: 15px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.Colors.gray_dark};
  font-size: 20px;
`;
