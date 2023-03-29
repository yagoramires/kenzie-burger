import React from 'react';
import { StyledHeader } from '../styles/Header';
import { StyledForm } from '../styles/form';
import { StyledButton } from '../styles/buttons';
import { Logo } from '../styles/logo';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Logo>
          Burger <span>Kenzie</span>
        </Logo>

        <StyledForm>
          <input type='text' />
          <StyledButton type='green' size='medium'>
            Pesquisar
          </StyledButton>
        </StyledForm>
      </div>
    </StyledHeader>
  );
};

export default Header;
