import Home from "component/pages/Home/Home";
import NotFound from "component/NotFound";
import User from "component/pages/users";
import React from "react";
import Header from "component/pages/header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MucLuc from "component/pages/MucLuc/mucLuc";
import "./App.css";
import Font_End from "component/pages/Font-End/Font_End";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/user' component={User} />
          <Route exact path='/muc-luc' component={MucLuc} />
          <Route exact path="/front-end" component={Font_End} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
