import React from 'react';
import { StyledCart } from '../styles/cart';
import { Body, Heading3 } from '../styles/typography';
import CartCard from './CartCard';

const Cart = ({ currentSale, setCurrentSale }) => {
  return (
    <StyledCart>
      <div className='title'>
        <Heading3>Carrinho de Compras</Heading3>
      </div>
      <div className='cart'>
        {currentSale.length > 0 ? (
          <ul>
            {currentSale.map((product) => (
              <CartCard
                key={product.id}
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
    </StyledCart>
  );
};

export default Cart;
