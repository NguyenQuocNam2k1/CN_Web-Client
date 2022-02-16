import Home from "component/pages/Home/Home";
import NotFound from "component/container/NotFound";
import User from "component/pages/users";
import React from "react";
import Header from "component/pages/header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MucLuc from "component/pages/MucLuc/mucLuc";
import LoTrinh from "component/pages/LoTrinh/LoTrinh";
import Font_End from "component/pages/Font-End/Font_End";
import Footer from "component/pages/footer/Footer";
import "./App.css";
import Register from "component/pages/users/Register";



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/user' component={User} />
          <Route exact path='/user/register' component={Register} />
          <Route exact path='/muc-luc' component={MucLuc} />
          <Route exact path='/lo-trinh' component={LoTrinh} />
          <Route exact path="/font-end" component={Font_End} />
          {/* <Route component={NotFound} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
