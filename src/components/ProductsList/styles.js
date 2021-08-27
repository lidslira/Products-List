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
  padding: 0px 0px 5px 0px;
  margin-bottom: 10px;
  align-items: center;
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

export const CheckedName = styled.Text`
  color: ${({theme}) => theme.Colors.dark};
  font-size: 16px;
  text-decoration-line: line-through;
`;

export const PriceQnt = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.Colors.dark};
`;

export const List = styled.FlatList`
  width: 100%;
  padding: 20px;
`;

export const Icons = styled.View`
  flex-direction: row;
`;
export const ItemRow = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const CheckItem = styled.TouchableOpacity`
  width: 18px;
  height: 18px;
  background-color: ${({theme}) => theme.Colors.white};
  border-radius: 20px;
  border-width: 1px;
  margin: 0px 5px 15px 0px;
`;

export const IconButton = styled.TouchableOpacity``;
