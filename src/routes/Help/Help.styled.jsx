import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ececec;
  @media screen and (max-width: 600px) {
    padding: 2rem;
  }
`;

export const Text = styled.div`
  font-size: .8rem;
  margin: .6rem 0;
  width: 100%;
  border-top: 1px solid grey;
  text-align: center;
  padding: .4rem;
`;

export const HepCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 5rem;
    border-radius: 4px;
`;
