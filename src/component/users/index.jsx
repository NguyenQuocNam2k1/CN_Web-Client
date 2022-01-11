import NotFound from 'component/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LoginForm from './LoginForm';
import Register from './Register';

User.propTypes = {};

function User(props) {
  const match = useRouteMatch();

  return (

    <Switch>

      <Route path={`${match.url}`} component={LoginForm} />
      <Route path={`${match.url}/register`} component={Register} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default User;
