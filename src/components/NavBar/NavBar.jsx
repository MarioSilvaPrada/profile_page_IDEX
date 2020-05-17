import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './Navbar.styled';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <S.Container>
      <h1>{pathname === '/' ? 'Profile' : 'Help'}</h1>
    </S.Container>
  );
};

export default Navbar;
