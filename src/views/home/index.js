/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import api from '../../utils/services';
import { useStateValue } from '../../state';
import { logout } from '../../state/auth/actions';
import useDeveloper from '../../state/matchs/hooks/useLoadDevelopers';
import useLikeDeveloper from '../../state/matchs/hooks/useLikeDeveloper';
import useDislikeDeveloper from '../../state/matchs/hooks/useDislikeDeveloper';

import Container from '../../components/container';
import List from './components/list';
import Card from './components/card';
import MatchComponent from './components/match';
import { Empty, Logo } from './components/styles';
import Spinner from '../../components/spinner';

import LogoTindev from '../../assets/logo.svg';

const Home = () => {
  const [loadingDevelopers, getDevelopers] = useDeveloper();
  const [loadingLike, likeDeveloper] = useLikeDeveloper();
  const [loadingDislike, dislikeDeveloper] = useDislikeDeveloper();
  const [{ auth, developers }, dispatch] = useStateValue();
  const [matchDev, setMatchDev] = useState(null);

  useEffect(() => {
    getDevelopers();
  }, [auth.user.id]);

  useEffect(() => {
    const socket = io(api.url, {
      query: { user: auth.user.id },
    });

    socket.on('match', dev => {
      setMatchDev(dev);
    });
  }, [auth.user.id]);

  const handleLike = async id => {
    likeDeveloper(id);
  };

  const handleDislike = async id => {
    dislikeDeveloper(id);
  };

  const handleLogout = async () => {
    await dispatch(logout());
  };

  const isLoading = loadingDevelopers || loadingLike || loadingDislike;

  return (
    <Container>
      <Logo onClick={() => handleLogout()}>
        <img src={LogoTindev} alt="Tindev" />
      </Logo>
      {isLoading && <Spinner />}
      <>
        {developers.list && developers.list.length > 0 ? (
          <List>
            {developers.list.map(dev => (
              <Card
                key={dev.id}
                name={dev.name}
                bio={dev.bio}
                image={dev.avatar}
                like={() => handleLike(dev.id)}
                dislike={() => handleDislike(dev.id)}
              />
            ))}
          </List>
        ) : (
          <Empty>Acabou :( </Empty>
        )}
      </>

      {matchDev && (
        <MatchComponent
          onClick={() => setMatchDev(false)}
          name={matchDev.name}
          avatar={matchDev.avatar}
          bio={matchDev.bio}
        />
      )}
    </Container>
  );
};

export default Home;
