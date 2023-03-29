import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 100%;
  max-width: 1280px;
  padding: 10px;
  margin: 0 auto;

  @media (min-width: 1280px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }
`;
