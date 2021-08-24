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

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TitleCategory = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const TitleItem = styled.Text`
  font-size: 16px;
  color: black;
`;

export const List = styled.FlatList`
  width: 100%;
  padding: 20px;
`;

export const Icons = styled.View`
  flex-direction: row;
  margin-left: 5px;
`;

export const ItemRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  background-color: ${({theme}) => theme.Colors.white};
`;

export const CheckItem = styled.TouchableOpacity`
  width: 16px;
  height: 16px;
  background-color: ${({theme}) => theme.Colors.white};
  border-radius: 20px;
  border-width: 1px;
  margin: 0px 5px 10px 0px;
`;

export const IconButton = styled.TouchableOpacity``;
