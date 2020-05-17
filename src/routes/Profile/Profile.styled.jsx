import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #ececec;
  @media screen and (max-width: 600px) {
    padding: 2rem;
  }
`;

export const Title = styled.div`color: red;`;

export const Image = styled.div`
  width: 6rem;
  height: 6rem;
  background: url(${({ image }) => image && image});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin: 0 auto;
`;

export const Label = styled.p`
  font-size: .8rem;
  color: grey;
`;

export const UserInfo = styled.p`
  font-size: .8rem;
  margin-bottom: .6rem;
`;

export const EditSection = styled.div`
  border-top: 1px solid grey;
  padding: .8rem 0;
  display: flex;
`;

export const EditLink = styled.p`
  font-size: .8rem;
  color: ${({ theme }) => theme.blue};
  font-weight: bold;
  cursor: pointer;
`;

export const Select = styled.select``;

export const ImageInput = styled.input`
  width: 100%;
  margin: 1rem 0 .4rem;
  padding: .3rem 1rem;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: .4rem;
  margin-bottom: 1.4rem;
  border-radius: 4px;
  border: 1px solid black;
  cursor: pointer;
`;
