import React from 'react';
import { Container, ButtonTitle, ButtonContainer } from './styles';

const Button = ({title, action}) => {
  return (
    <ButtonContainer> 
    <Container onPress={() => action()}>
    <ButtonTitle> {title} </ButtonTitle>
    </Container>
    </ButtonContainer>
  );
};

export default Button;