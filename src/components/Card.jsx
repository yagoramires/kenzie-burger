import React from 'react';
import { StyledButton } from '../styles/buttons';
import { StyledCard } from '../styles/card';
import { Body, Caption, Heading } from '../styles/typography';

const Card = ({ product, currentSale, setCurrentSale }) => {
  const handleAddProduct = () => {
    setCurrentSale([...currentSale, product]);
  };

  return (
    <StyledCard>
      <Heading>{product.name}</Heading>
      <Caption>{product.category}</Caption>
      <Body>
        {product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Body>
      <StyledButton type='green' size='medium' onClick={handleAddProduct}>
        Adicionar
      </StyledButton>
    </StyledCard>
  );
};

export default Card;
