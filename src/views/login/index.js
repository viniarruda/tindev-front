import React, { useEffect } from 'react';
import useLogin from '../../state/auth/hooks/useLogin';

import Container from '../../components/content';
import Form from './containers/form';
import Spinner from '../../components/spinner';

import Logo from '../../assets/logo.svg';

const Login = ({ location, history }) => {
  const [auth, setLogin, isLoading] = useLogin();
  const { from } = location.state || {
    from: { pathname: `/dev` },
  };

  useEffect(() => {
    if (auth.logged) {
      history.push(from);
    }
  }, [auth]);

  return (
    <Container>
      {isLoading && <Spinner />}
      <img src={Logo} alt="Tindev" />
      <Form onSubmit={(values, actions) => setLogin({ values, actions })} />
    </Container>
  );
};

export default Login;
