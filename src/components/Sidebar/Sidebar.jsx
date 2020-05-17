import React from 'react';
import logo from 'assets/app_logo.png';
import * as S from './Sidebar.styled';

const Sidebar = () => (
  <S.Container>
    <S.Logo src={logo} />
    <S.StyledLink to="/">Profile</S.StyledLink>
    <S.StyledLink to="/help">Help</S.StyledLink>
  </S.Container>
);

export default Sidebar;
