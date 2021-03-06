import React from 'react';
import Topbar from 'components/Topbar/Topbar';
import Card from 'components/Card/Card';
import * as S from './Help.styled';

const Help = () => (
  <S.Wrapper>
    <Topbar />
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
