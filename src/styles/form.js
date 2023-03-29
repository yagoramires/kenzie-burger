import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;

  input {
    width: 100%;
    border: 2px solid var(--gray-20);
    border-radius: 8px;
    padding: 20px;
    outline: none;
    padding-right: 50px;

    color: var(--gray-100);

    ::placeholder {
      color: var(--gray-20);
    }

    :focus {
      border: 2px solid var(--gray-100);
    }

    :focus::placeholder {
      color: var(--gray-100);
    }
  }

  button {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;
