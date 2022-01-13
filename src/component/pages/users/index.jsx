import NotFound from 'component/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

User.propTypes = {};

function User(props) {
  const match = useRouteMatch();

  return (

    <Switch>

      <Route exact path={`${match.url}`} component={Login} />
      <Route exact path={`${match.url}/register`} component={Register} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default User;
