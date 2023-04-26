import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: var(--gray-0);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-bottom: 32px;

  div {
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
  }

  form {
    min-width: 100%;
  }

  @media (min-width: 1280px) {
    div {
      flex-direction: row;
    }

    form {
      min-width: 365px;
    }
  }
`;
