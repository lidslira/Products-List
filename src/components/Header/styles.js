import styled from 'styled-components/native';

export const HeaderArea = styled.View`
  flex: 2.5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
`;

export const StatusBar = styled.StatusBar.attrs(() => ({
  backgroundColor: 'transparent',
  barStyle: 'dark-content',
  translucent: true,
}))``;

export const HeaderImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  background-color: white;
`;

export const HeaderTitleArea = styled.View`
  justify-content: center;
  background-color: white ;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;
