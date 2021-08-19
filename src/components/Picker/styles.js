import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.Colors.dark};
`;

export const PlaceholderText = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.Colors.dark};
`;

export const Touchable = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerPicker = styled.View`
  padding: 20px 10px;
  width: 100%;
  border-radius: 10px;
  border-width: 1px;
  margin-top: 15px;
  background-color: white;
`;

export const TitleItem = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  color: black;
`;

export const ContainerList = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContainerModal = styled.TouchableOpacity`
  flex: 1;
`;

export const List = styled.FlatList`
  height: 160px;
  padding: 10px;
  margin-top: 10px;
`;
