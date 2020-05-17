import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: white;
  height: ${({ theme }) => theme.size.navbarHeight};
  padding: 0 2rem;
  display: flex;

  h1 {
    align-self: flex-end;
  }

  @media screen and (max-width: 600px) {
    border-radius: 4px;
    border: 1px solid black;
  }
`;

export const Text = styled.p``;
