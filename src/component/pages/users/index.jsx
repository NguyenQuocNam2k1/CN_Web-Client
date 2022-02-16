import NotFound from 'component/container/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

User.propTypes = {};

function User(props) {
  const match = useRouteMatch();
  console.log(match)
  return (

    <Switch>
      <Route exact path={`${match.url}`} component={Login} />
      <Route exact path='user/register' component={Register} />

    </Switch>
  );
}

export default User;
