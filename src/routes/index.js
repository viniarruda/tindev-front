import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StateProvider } from '../state';
import { INITIAL_STATE as AUTH_INITIAL_STATE } from '../state/auth/reducers';
import { INITIAL_STATE as DEVELOPER_INITIAL_STATE } from '../state/matchs/reducers';
import reducers from '../state/reducers';
import BaseStyles from './base-styles';
import PrivateRoute from './private-route';
import Login from '../views/login';
import Home from '../views/home';

const Root = () => {
  const initialState = {
    auth: AUTH_INITIAL_STATE,
    developers: DEVELOPER_INITIAL_STATE,
  };
  return (
    <StateProvider initialState={initialState} reducer={reducers}>
      <BaseStyles />
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/dev" component={Home} />
          </Switch>
        </>
      </Router>
    </StateProvider>
  );
};

export default Root;
