import React from 'react';
import { toast } from 'react-toastify';
import { StyledCartCard } from '../styles/card';
import { Caption, Heading4 } from '../styles/typography';

const CartCard = ({ product, currentSale, setCurrentSale }) => {
  const handleRemove = () => {
    const filter = currentSale.filter((prod) => prod.id !== product.id);

    setCurrentSale(filter);
    toast.success('Produto removido do carrinho.');
  };

  return (
    <StyledCartCard>
      <div>
        <img
          src={
            'https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024'
          }
          alt=''
        />
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
