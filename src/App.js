import Home from "component/pages/Home/Home";
import NotFound from "component/container/NotFound";
import User from "component/pages/users";
import React , {useEffect , useState} from "react";
import Header from "component/pages/header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MucLuc from "component/pages/MucLuc/mucLuc";
import LoTrinh from "component/pages/LoTrinh/LoTrinh";
import RouterDetail from "component/pages/routerDetail/index";
import Learning from "component/pages/learning/Learning";
import Footer from "component/pages/footer/Footer";
import "./App.css";
import Register from "component/pages/users/Register";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function App() {
  // Configure Firebase.
  const config = {
    apiKey: "AIzaSyDEBJiGDVkx9zf4tQT63J9ZirekqOl8WAc",
    authDomain: "cnweb-c5420.firebaseapp.com",
  };
  firebase.initializeApp(config);
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if(!user){
        console.log("User not login");
        return;
      }
      console.log("User loggined: " , user.displayName);

      const token = await user.getIdToken();
      console.log("Token: " , token);
    });
    return () => unregisterAuthObserver();
  }, []);

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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
