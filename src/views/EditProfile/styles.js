import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px 30px;
  background-color: white;
`;

export const TextTitle = styled.Text`
  color: black;
  font-size: 40px;
`;

export const Label = styled.Text`
  font-size: 24px;
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
  padding: 20px 10px;
  font-size: 20px;
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

export const styles = StyleSheet.create({
  picker: {
    height: 50,
    fontSize: 25,
    width: '100%',
    color: 'black',
    textAlign: 'center',
  },
});
