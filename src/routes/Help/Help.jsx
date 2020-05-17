import React from 'react';
import Card from 'components/Card/Card';
import Navbar from 'components/Navbar/Navbar';
import * as S from './Help.styled';

const Help = () => (
  <S.Wrapper>
    <Navbar />
    <Card style={{ margin: '2rem auto' }}>
      <S.HepCardWrapper>
        <h2>Contact us</h2>
        <S.Text>Let us know how we can help</S.Text>
        <S.TextArea placeholder="let us know more" />
      </S.HepCardWrapper>
    </Card>
  </S.Wrapper>
);

export default Help;
