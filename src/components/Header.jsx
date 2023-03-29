import React, { useState } from 'react';
import { StyledHeader } from '../styles/Header';
import { StyledForm } from '../styles/form';
import { StyledButton } from '../styles/buttons';
import { Logo } from '../styles/logo';
import { toast } from 'react-toastify';

const Header = ({ products, search, setSearch, setFilteredProducts }) => {
  const handleSearch = (e) => {
    e.preventDefault();

    const filter = products.filter((prod) =>
      prod.name.toLowerCase().includes(search.toLowerCase()),
    );

    if (filter.length === 0) {
      setSearch('');
      toast.error('Nenhum produto encontrado.');
    } else {
      setFilteredProducts(filter);
    }
  };

  return (
    <StyledHeader>
      <div>
        <Logo>
          Burger <span>Kenzie</span>
        </Logo>

        <StyledForm onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='Digitar Pesquisa'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <StyledButton type='submit' color='green' size='medium'>
            Pesquisar
          </StyledButton>
        </StyledForm>
      </div>
    </StyledHeader>
  );
};

export default Header;
