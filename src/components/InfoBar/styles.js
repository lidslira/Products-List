import styled from 'styled-components/native';

export const Container = styled.View`
  padding-left: 32px;
  padding-right: 34px;
  align-items: center;
  background-color: ${({theme}) => theme.Colors.light_sea_green};
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 2px 0px 8px 0px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.Colors.dark_cyan};
`;
export const Cart = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 10px 0px 10px;
`;
// top right bottom left
export const Price = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 10px 2px 10px;
`;

export const Reset = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 10px 0px 15px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: white;
`;
