import styled from 'styled-components';

export const StyledProductsList = styled.div`
  overflow: hidden;
  flex: 1;

  ul {
    max-width: 100%;
    overflow-x: scroll;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
  }

  ul::-webkit-scrollbar {
    width: 0px;
  }

  .searchContainer {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: var(--gray-300);
    }
  }

  @media (min-width: 1280px) {
    ul {
      max-width: 940px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
    }
  }
`;
