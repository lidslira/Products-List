import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const ContainerList = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TitleCategory = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
  border-bottom-width: 1px;
`;

export const TitleItem = styled.Text`
  font-size: 15px;
  color: black;
`;

export const List = styled.FlatList`
  width: 100%;
  padding: 20px;
`;

export const CheckContainer = styled.View`
  width: 20%;
`;
