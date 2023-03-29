import React from 'react';
import { StyledCartCard } from '../styles/card';
import { Caption, Heading4 } from '../styles/typography';

const CartCard = ({ product, currentSale, setCurrentSale }) => {
  const handleRemove = () => {
    const filter = currentSale.filter((prod) => prod.id !== product.id);

    setCurrentSale(filter);
  };

  return (
    <StyledCartCard>
      <div>
        <img src={product.img} alt='' />
        <div>
          <Heading4>{product.name}</Heading4>
          <Caption>{product.category}</Caption>
        </div>
      </div>
      <button onClick={handleRemove}>Remover</button>
    </StyledCartCard>
  );
};

export default CartCard;
