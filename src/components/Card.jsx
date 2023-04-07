import React from 'react';
import { StyledButton } from '../styles/buttons';
import { StyledCard } from '../styles/card';
import { Body, Caption, Heading } from '../styles/typography';
import { toast } from 'react-toastify';

const Card = ({ product, currentSale, setCurrentSale }) => {
  console.log(product);
  const handleAddProduct = () => {
    const verify = currentSale.filter((prod) => prod.id === product.id);
    if (verify.length > 0) {
      return toast.error('Produto já adicionado ao carrinho');
    } else {
      setCurrentSale([...currentSale, product]);
      return toast.success('Produto adicionado ao carrinho.');
    }
  };

  return (
    <StyledCard>
      <div className='imageContainer'>
        <img src={product.img} alt='' />
      </div>
      <div className='dataContainer'>
        <Heading>{product.name}</Heading>
        <Caption>{product.category}</Caption>
        <Body>
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </Body>
        <StyledButton color='green' size='medium' onClick={handleAddProduct}>
          Adicionar
        </StyledButton>
      </div>
    </StyledCard>
  );
};

export default Card;
