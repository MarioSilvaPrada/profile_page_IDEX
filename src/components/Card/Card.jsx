import React from 'react';
import * as S from './Card.styled';

const Card = ({ children, style }) => <S.Container style={style}>{children}</S.Container>;

export default Card;
