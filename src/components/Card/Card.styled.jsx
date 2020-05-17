import styled from 'styled-components';

export const Container = styled.div`
  width: 35rem;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 4px;
  background: white;
  margin: 2rem;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 2rem 0;
  }
`;

export const Text = styled.p``;
