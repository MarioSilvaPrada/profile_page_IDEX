import React, { useState } from 'react';
import { connect } from 'react-redux';
// Redux actions
import * as actions from 'state/actions';

import Navbar from 'components/Navbar/Navbar';
import Card from 'components/Card/Card';
import * as S from './Profile.styled';

const Profile = ({ setImage, userImage, setLanguage, language }) => {
  const [ url, setUrl ] = useState('');

  const sendImage = () => {
    setImage(url);
    setUrl('');
  };
  return (
    <S.Container>
      <Navbar />
      <Card>
        <S.Image image={userImage} />
        <S.ImageInput
          type='text'
          placeholder='insert image url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <S.Button onClick={sendImage}>Send image</S.Button>
        <S.Label>Full Name</S.Label>
        <S.UserInfo>Super Admin</S.UserInfo>
        <S.Label>E-mail</S.Label>
        <S.UserInfo>super@admin.com</S.UserInfo>
        <S.EditSection>
          <S.EditLink>Change password</S.EditLink>
        </S.EditSection>
        <S.EditSection>
          <S.EditLink style={{ marginRight: '1rem' }}>Select app language</S.EditLink>
          <S.Select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value='english'>English</option>
            <option value='portuguese'>Português</option>
          </S.Select>
        </S.EditSection>
        <S.EditSection>
          <S.EditLink>Change password</S.EditLink>
        </S.EditSection>
      </Card>
    </S.Container>
  );
};

const mapStateToProps = ({ userData }) => ({
  userImage: userData.image,
  language: userData.language,
});

const mapDispatchToProps = {
  setImage: actions.setImage,
  setLanguage: actions.setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
