import Home from "component/pages/Home/Home";
import NotFound from "component/container/NotFound";
import User from "component/pages/users";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "component/pages/header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MucLuc from "component/pages/MucLuc/mucLuc";
import LoTrinh from "component/pages/LoTrinh/LoTrinh";
import RouterDetail from "component/pages/routerDetail/index";
import CourseDetail from "component/pages/courseDetail/CourseDetail";
import Learning from "component/pages/learning/Learning";
import Footer from "component/pages/footer/Footer";
import "./App.css";
import Register from "component/pages/users/Register";
import DetailCourse from 'component/pages/learning/detail-course/DetailCourse';
import { getAllCourseList } from "redux/actions/courseAction";
import AOS from "aos";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    dispatch(getAllCourseList());
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
          <Route exact path="/courseDetail">
            <CourseDetail />
          </Route>
          <Route exact path="/lo-trinh">
            <LoTrinh />
          </Route>
          <Route exact path="/chi-tiet-lo-trinh">
            <RouterDetail />
          </Route>
          <Route exact path="/learning">
            <Learning />
          </Route>
          <Route exact path="/learning">
            <Learning />
          </Route>
          <Route exact path="/learning/detail">
             <DetailCourse />
          </Route>
          {/* <Route component={NotFound} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
