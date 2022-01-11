import Home from "component/Home/Home";
import NotFound from "component/NotFound";
import User from "component/users";
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Switch>

          <Route exact path="/" component={Home} />

          <Route path="/user" component={User} />
          <Route component={NotFound} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

