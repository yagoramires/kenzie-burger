import React from 'react';
import { StyledButton } from '../styles/buttons';
import { StyledCard } from '../styles/card';
import { Body, Caption, Heading } from '../styles/typography';
import { toast } from 'react-toastify';

const Card = ({ product, currentSale, setCurrentSale }) => {
  const handleAddProduct = () => {
    setCurrentSale([...currentSale, product]);
    toast.success('Produto adicionado ao carrinho.');
  };

  return (
    <StyledCard>
      <div className='imageContainer'>
        <img
          src={
            'https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024'
          }
          alt=''
        />
      </div>
      <Heading>{product.name}</Heading>
      <Caption>{product.category}</Caption>
      <Body>
        {product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Body>
      <StyledButton color='green' size='medium' onClick={handleAddProduct}>
        Adicionar
      </StyledButton>
    </StyledCard>
  );
};

export default Card;
