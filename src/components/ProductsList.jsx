import React from 'react';
import StyledCard from './Card';
import { StyledProductsList } from '../styles/productslist';
import { Heading } from '../styles/typography';
import { StyledButton } from '../styles/buttons';

const ProductsList = ({
  products,
  currentSale,
  setCurrentSale,
  filteredProducts,
  setFilteredProducts,
  search,
  setSearch,
}) => {
  const handleClearSearch = () => {
    setFilteredProducts([]);
    setSearch('');
  };

  return (
    <StyledProductsList>
      {filteredProducts.length > 0 ? (
        <>
          <div className='searchContainer'>
            <Heading>
              Resultado para: <span>{search}</span>
            </Heading>
            <StyledButton
              color='green'
              size='medium'
              onClick={handleClearSearch}
            >
              Limpar busca
            </StyledButton>
          </div>

          <ul>
            {filteredProducts &&
              filteredProducts.map((product) => (
                <StyledCard
                  key={product.id}
                  product={product}
                  currentSale={currentSale}
                  setCurrentSale={setCurrentSale}
                />
              ))}
          </ul>
        </>
      ) : (
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
      )}
    </StyledProductsList>
  );
};

export default ProductsList;
