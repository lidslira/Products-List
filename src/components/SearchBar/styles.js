import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.Colors.light_sea_green};
`;

export const SearchContainer = styled.View`
  width: 380px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 5px 0px 10px 5px;
  align-items: center;
  flex-direction: row;
  border-radius: 25px;
  border-width: 1px;
  border-color: black;
  background-color: white;
`;

export const IconArea = styled.View`
  width: 20px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const SearchArea = styled.TextInput`
  width: 320px;
  height: 50px;
  font-size: 16px;
  padding-left: 10px;
  color: black;
`;
