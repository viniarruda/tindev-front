import React from 'react';
import styled from 'styled-components';
import theme from '../../../components/theme';

import itsamatch from '../../../assets/itsamatch.png';

const MatchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

const MatchImage = styled.img``;

const MatchAvatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid ${theme.colors.default};
  margin: 30px 0;
`;

const MatchName = styled.strong`
  font-size: 32px;
  color: ${theme.colors.default};
`;

const MatchBio = styled.p`
  margin-top: 10px;
  font-size: 20px;
  line-height: 30px;
  max-width: 400px;
  color: rgba(255, 255, 255, 0.8);
`;

const CloseButton = styled.button`
  border: 0;
  background: none;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  margin-top: 30px;
  cursor: pointer;
  text-transform: uppercase;
`;

const MessageButton = styled.button``;

const MatchComponent = ({ avatar, bio, name, onClick }) => (
  <MatchContainer onClick={onClick}>
    <MatchImage src={itsamatch} alt="It's a match" />
    <MatchAvatar src={avatar} alt="It's a match" />
    <MatchName>{name}</MatchName>
    <MatchBio>{bio}</MatchBio>
    <CloseButton>Close</CloseButton>
  </MatchContainer>
);

export default MatchComponent;
