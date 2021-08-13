import styled from 'styled-components/native';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const StatusBar = styled.StatusBar.attrs(() => ({
  backgroundColor: "transparent",
  barStyle: 'dark-content',
  translucent: true
}))``;

export const ImageArea = styled.Image`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

export const LoginArea = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const HeaderTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 29px;
  margin-bottom: 20px;
`;

export const TextInput = styled.TextInput`
  height: 50px;
  width: 200px;
  border-bottom-width: 2px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #53b175;
  height: 60px;
  width: 230px;
  margin-top: 20px;
  border-radius: 10px;
  padding: 15px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;
