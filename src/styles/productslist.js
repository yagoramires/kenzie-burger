import styled from 'styled-components';

export const StyledProductsList = styled.div`
  overflow: hidden;

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

  @media (min-width: 1280px) {
    ul {
      max-width: 940px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
    }
  }
`;