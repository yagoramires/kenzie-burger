import styled from 'styled-components';

export const StyledCard = styled.li`
  min-width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;

  border: 2px solid var(--gray-20);
  border-radius: 5px;
  overflow: hidden;

  .imageContainer {
    width: 100%;
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--gray-0);
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  p:nth-of-type(1) {
    color: var(--gray-300);
  }

  p:nth-of-type(2) {
    color: var(--color-primary);
    font-weight: 600;
  }
`;

export const StyledCartCard = styled.li`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  div {
    display: flex;

    justify-content: center;
    align-items: center;
    gap: 10px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      p {
        color: var(--gray-300);
      }
    }
  }

  button {
    color: var(--gray-300);
  }

  button:hover {
    color: var(--gray-100);
    border-bottom: 1px solid var(--gray-100);
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    background: var(--gray-20);
  }
`;
