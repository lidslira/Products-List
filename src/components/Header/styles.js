import styled from 'styled-components/native';

export const HeaderArea = styled.View`
  flex: 1.5;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background-color: ${({theme}) => theme.Colors.light_sea_green};
`;

export const StatusBar = styled.StatusBar.attrs(() => ({
  backgroundColor: 'transparent',
  barStyle: 'dark-content',
  translucent: true,
}))``;

export const HeaderTitleArea = styled.View`
  justify-content: center;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 15px;
  background-color: ${({theme}) => theme.Colors.dark_cyan};
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.Colors.white};
`;
