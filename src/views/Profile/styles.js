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
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Caption = styled.Text`
  font-size: 15px;
  color: gray;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const UserInfoSection = styled.View`
  padding: 30px;
  margin-bottom: 25px;
`;

export const AvatarColor = styled.View`
  background-color: ${({theme}) => theme.Colors.turquoise};
`;

export const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#40e0d0',
  },
});
