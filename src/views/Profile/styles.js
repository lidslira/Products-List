import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
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
