import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  min-width: 130px;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  padding: ${({ size }) => {
    if (size === 'default') {
      return css`
        20px
        `;
    } else if (size === 'medium') {
      return css`
       8px 20px
    `;
    }
  }};

  transition: all 0.2s ease-in;

  border: ${({ type }) => {
    if (type === 'green') {
      return css`
        2px solid var(--color-primary)
        `;
    } else if (type === 'gray') {
      return css`
        2px solid var(--gray-20) 
    `;
    }
  }};

  border-radius: 8px;

  background: ${({ type }) => {
    if (type === 'green') {
      return css`
    var(--color-primary)
    
    `;
    } else if (type === 'gray') {
      return css`
    var(--gray-20)
    
    `;
    }
  }};

  :hover {
    background: ${({ type }) => {
      if (type === 'green') {
        return css`
    var(--color-primary-50)
    
    `;
      } else if (type === 'gray') {
        return css`
    var(--gray-300)
    
    `;
      }
    }};

    border: ${({ type }) => {
      if (type === 'green') {
        return css`
        2px solid var(--color-primary-50)
        `;
      } else if (type === 'gray') {
        return css`
        2px solid var(--gray-300)
    `;
      }
    }};
  }
`;
