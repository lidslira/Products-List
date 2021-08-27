import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px 30px;
  background-color: white;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.Colors.dark};
`;

export const ContainerInput = styled.View`
  flex: 0.2;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  justify-content: center;
  align-items: flex-start;
`;

export const TextInput = styled.TextInput`
  padding: 15px 10px;
  font-size: 16px;
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #eeee;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;

export const ContainerButton = styled.View`
  flex: 0.2;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 50%;
  background-color: ${({theme}) => theme.Colors.light_sea_green};
  margin-top: 20px;
  border-radius: 6px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
