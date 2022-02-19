import Home from "component/pages/Home/Home";
import NotFound from "component/container/NotFound";
import User from "component/pages/users";
import React  from "react";
import Header from "component/pages/header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MucLuc from "component/pages/MucLuc/mucLuc";
import LoTrinh from "component/pages/LoTrinh/LoTrinh";
import RouterDetail from "component/pages/routerDetail/index";
import Footer from "component/pages/footer/Footer";
import "./App.css";
import Register from "component/pages/users/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route exact path="/user/register">
            <Register />
          </Route>
          <Route exact path="/muc-luc">
            <MucLuc />
          </Route>
          <Route exact path="/lo-trinh">
            <LoTrinh />
          </Route>
          <Route exact path="/chi-tiet-lo-trinh">
             <RouterDetail />
          </Route>
          {/* <Route component={NotFound} /> */}
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
