import React from 'react';
import StyledCard from './Card';
import { StyledProductsList } from '../styles/productslist';

const ProductsList = ({ products, currentSale, setCurrentSale }) => {
  return (
    <StyledProductsList>
      <ul>
        {products &&
          products.map((product) => (
            <StyledCard
              key={product.id}
              product={product}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          ))}
      </ul>
    </StyledProductsList>
  );
};

export default ProductsList;
