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
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/user/register" component={Register} />
          <Route exact path="/muc-luc" component={MucLuc} />
          <Route exact path="/courseDetail/:slug" component={CourseDetail} />
          <Route exact path="/lo-trinh" component={LoTrinh} />
          <Route exact path="/chi-tiet-lo-trinh/:slug" component={RouterDetail} />
          <Route exact path="/learning" component={Learning}/>
          <Route exact path="/learning/:slug" component={DetailCourse}/>
          {/* <Route component={NotFound} /> */}
        </Switch>
        <Footer />
  </BrowserRouter>
    </div>
  );
}

export default App;