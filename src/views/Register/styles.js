import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const AddItemArea = styled.View`
  flex: 8;
  align-items: center;
  padding: 30px;
`;

export const ContainerInput = styled.View`
  flex: 0.2;
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  justify-content: center;
  align-items: flex-start;
`;

export const ContainerPicker = styled.View`
  flex: 0.6;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
`;

export const ContainerNameTitle = styled.View`
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.Colors.dark};
`;

export const TitleText = styled.Text`
  font-size: 20px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.Colors.dark};
`;

export const TextInput = styled.TextInput`
  padding: 20px 10px;
  font-size: 18px;
  width: 100%;
  border-radius: 10px;
  border-width: 1px;
  margin-top: 15px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.Colors.light_sea_green};
  margin-top: 20px;
  border-radius: 10px;
  padding: 15px;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.Colors.white};
  font-size: 20px;
`;
