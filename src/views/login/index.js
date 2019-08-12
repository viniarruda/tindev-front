import React, { useEffect, useState } from 'react';
import useLogin from '../../state/auth/hooks/useLogin';

import Container from '../../components/content';
import Form from './containers/form';
import Spinner from '../../components/spinner';
import Tooltip from '../../components/tooltip';

import Logo from '../../assets/logo.svg';

const Login = ({ location, history }) => {
  const [auth, setLogin, isLoading, error] = useLogin();
  const [showError, setShowError] = useState(false);
  const { from } = location.state || {
    from: { pathname: `/dev` },
  };

  useEffect(() => {
    if (auth.logged) {
      history.push(from);
    }
  }, [auth]);

  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  return (
    <Container>
      {isLoading && <Spinner />}
      <img src={Logo} alt="Tindev" />
      <Form onSubmit={(values, actions) => setLogin({ values, actions })} />
      {showError && <Tooltip error={error} close={() => setShowError(false)} />}
    </Container>
  );
};

export default Login;
