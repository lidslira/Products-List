import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const ProfileArea = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const ImageArea = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-bottom: 10px;
`;

export const ContainerNameTitle = styled.Text`
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 10px;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  margin-left: 20px;
  text-align: center;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: black;
  text-align: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.Colors.dark};
  text-align: center;
`;

export const Column = styled.View`
  flex-direction: column;
  margin-bottom: 10px;
`;
export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const UserInfoSection = styled.View`
  padding: 30px;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const AvatarColor = styled.View`
  background-color: ${({theme}) => theme.Colors.turquoise};
`;

export const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#40e0d0',
  },
});

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.Colors.black};
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10px;
  border-radius: 6px;
  padding: 15px;
  width: 100%;
  background-color: ${({theme}) => theme.Colors.white};
`;
