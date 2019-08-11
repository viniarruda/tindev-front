import React from 'react';
import styled from 'styled-components';
import theme from '../../../components/theme';

import Like from '../../../assets/like.svg';
import Dislike from '../../../assets/dislike.svg';

const CardContent = styled.div`
  background: ${theme.colors.bg};
  margin: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  max-width: 100%;
  border-radius: 5px 5px 0 0;
`;

const CardFooter = styled.footer`
  flex: 1;
  background: ${theme.colors.default};
  border: 1px solid #eee;
  padding: 15px 20px;
  text-align: left;
  border-radius: 0 0 5px 5px;
`;

const CardActions = styled.div`
  margin-top: ${theme.typography.unit * 2}px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const CardButton = styled.button`
  height: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  background: ${theme.colors.default};
  &:hover {
    img {
      transform: translateY(-5px);
      transition: all 0.2s;
    }
  }
`;

const DeveloperName = styled.strong`
  color: ${theme.typography.subtitle};
  font-size: ${theme.typography.subtitle.size};
`;

const DeveloperBio = styled.p`
  font-size: ${theme.typography.text.size};
  line-height: 20px;
  color: ${theme.typography.text.color};
  margin-top: ${theme.typography.unit}px;
`;

const Card = ({ image, name, bio, like, dislike }) => (
  <CardContent>
    <CardImage src={image} alt={name} />
    <CardFooter>
      <DeveloperName>{name}</DeveloperName>
      <DeveloperBio>{bio || name}</DeveloperBio>
    </CardFooter>
    <CardActions>
      <CardButton type="button" onClick={dislike}>
        <img src={Dislike} alt="Dislike" />
      </CardButton>
      <CardButton type="button" onClick={like}>
        <img src={Like} alt="Like" />
      </CardButton>
    </CardActions>
  </CardContent>
);

export default Card;
