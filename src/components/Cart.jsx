import React from 'react';
import { toast } from 'react-toastify';
import { StyledButton } from '../styles/buttons';
import { StyledCart } from '../styles/cart';
import { Body, Heading3, Headline } from '../styles/typography';
import CartCard from './CartCard';

const Cart = ({ currentSale, setCurrentSale, cartTotal }) => {
  const handleRemoveAll = () => {
    setCurrentSale([]);
    toast.success('Todos os produtos foram removidos do carrinho.');
  };

  return (
    <StyledCart>
      <div className='title'>
        <Heading3>Carrinho de Compras</Heading3>
      </div>
      <div className='cart'>
        {currentSale.length > 0 ? (
          <ul>
            {currentSale.map((product, index) => (
              <CartCard
                key={index}
                product={product}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
              />
            ))}
          </ul>
        ) : (
          <div className='empty'>
            <Heading3>Sua sacola está vazia</Heading3>
            <Body>Adicione itens</Body>
          </div>
        )}
      </div>
      <div className='total'>
        <div>
          <Headline>Total</Headline>
          <Body>
            {cartTotal.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Body>
        </div>
        <StyledButton color='gray' size='default' onClick={handleRemoveAll}>
          Remover todos
        </StyledButton>
      </div>
    </StyledCart>
  );
};

export default Cart;
