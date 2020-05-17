import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.sidebarBackground};
  color: ${({ theme }) => theme.white()};
  width: 14rem;
  height: 100%;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    flex-direction: row;
  }
`;

export const StyledLink = styled(Link)`
    align-self: flex-start;
    padding: .8rem 2.5rem;
    transition: .6s;
    width: 100%;
    font-weight: bold;

    &:hover {
        background: ${({ theme }) => theme.white(0.3)};
    }

    @media screen and (max-width: 600px) {
      align-self:center;
    }
`;

export const Logo = styled.img`
  width: 4rem;
  margin: 1.4rem 0 3rem;

  @media screen and (max-width: 600px) {
    align-self:center;
    margin: 1rem;
  }
`;
