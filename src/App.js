import Home from "component/pages/Home/Home";
import NotFound from "component/NotFound";
import User from "component/pages/users";
import React from "react";
import Header from "component/pages/header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user' component={User} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
