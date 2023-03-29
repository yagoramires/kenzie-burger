import styled from 'styled-components';

export const StyledCart = styled.div`
  width: 100%;
  border-radius: 5px;
  background: var(--gray-0);

  .title {
    width: 100%;
    padding: 20px;
    background: var(--color-primary);
    border-radius: 5px 5px 0px 0px;
    color: white;
    text-align: left;
  }

  .cart {
    width: 100%;
    padding: 20px 10px;
    border-radius: 0px 0px 5px 5px;

    display: flex;
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 28px;
    }

    .empty {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      > h3 {
        margin-top: 3rem;
      }

      > p {
        margin-bottom: 3rem;
      }
    }
  }

  .total {
    width: 100%;
    padding: 20px 10px;

    border-top: 2px solid var(--gray-20);
    border-radius: 0px 0px 5px 5px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    p:nth-of-type(1) {
      font-weight: 600;
      color: var(--gray-100);
    }

    p:nth-of-type(2) {
      font-weight: 600;
      color: var(--gray-50);
    }

    button {
      margin-top: 22px;
      width: 100%;
      color: var(--gray-50);
    }

    button:hover {
      color: var(--gray-20);
    }
  }

  @media (min-width: 1280px) {
    max-width: 365px;
  }
`;
