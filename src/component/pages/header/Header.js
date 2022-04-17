import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import search from "./../../../images/search.png";
import { getCookie } from "../../config/cookie.js";
import { logOut } from "../../config/functionFirebase.js";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../../images/logo.png";
import { getLessonByCourse } from "redux/actions/courseAction";



function Header() {
  const [valueInput, setValueInput] = useState("");
  const dataListCourse = useSelector((state) => state.courses.courseList);
  const dispatch = useDispatch();
  const inputSearch = document.querySelector(".search-input");
  //Search
  const searchFunction = () => {
    const listCourses = document.querySelector(".listCourses");
    const menuCourses = Array.from(document.querySelectorAll(".menu-items"));

    const value = valueInput.toLowerCase();

    menuCourses.forEach((item) => {
      let text = item.innerText.toLowerCase();
      if (text.includes(value)) {
        listCourses.style.display = "block";
        document.querySelector(".overlay-text").style.display = "none";
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };

  const hidenListCourses = () => {
    const listCourses = document.querySelector(".listCourses");
    setTimeout(() => {
      listCourses.style.display = "none";
    }, 100)
    const inputSearch = document.querySelector(".search-input");
    inputSearch.value = "";
  };


  const match = useLocation().pathname;
  const token = getCookie("CCD") || "";
  let authUser = JSON.parse(localStorage.getItem("authUser"));


  const [scrolled, setScrolled] = useState(0);
  window.addEventListener("scroll", () => {
    setScrolled(window.scrollY);
  });

  const openSearch = () => {
    const searchButton = document.querySelector("#myOverlay")
    searchButton.style.display = "block";
    document.querySelector(".search-input").focus();
  }
  const closeSearch = () => {
    const searchButton = document.querySelector("#myOverlay")
    searchButton.style.display = "none";
    inputSearch.value = "";
  }

  return (
    <>
      {match === "/user" ||
        match === "/user/register" ||
        match.includes("/learning/") === true ? (
        <></>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div
            className={scrolled > 10 ? "header_scroll container-fluid" : "container-fluid"}
          >
            <Link className="navbar-brand" to="/">
              <img className="img" src={logo} alt="logo"></img>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item nav-block-item">
                  <Link
                    className="nav-link active "
                    aria-current="page"
                    to="/muc-luc"
                  >
                    Mục lục
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/lo-trinh"
                  >
                    Lộ trình
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={!token ? "/user" : "/learning"}
                  >
                    Đang học
                  </Link>
                </li>
              </ul>
              <div>
                <div id="myOverlay" className="overlay">
                  <span className="closebtn" onClick={closeSearch} title="Close">×</span>
                  <div className="overlay-content">
                    <form className="d-flex form-search">
                      <input type="text"
                        placeholder="Tìm kiếm khoá học..."
                        className="search-input"
                        name="search"
                        autoComplete="off"
                        onKeyUp={searchFunction}
                        onChange={(e) => setValueInput(e.target.value)}
                        // onBlur={hidenListCourses}
                        />
                        <div className="overlay-text" style={{padding: "30px"}}>
                          No recent searches
                        </div>
                        <div className="listCourse-content">
                        <ul className="listCourses" onClick={closeSearch} >
                          <p>{`Kết quả cho '${valueInput}'`}</p>
                          {dataListCourse.map((course, index) => {
                            return (
                              <Link
                                to={{
                                  pathname:`/courseDetail/${course.idCoursesList}`,
                                  state:`${course.countUser}`
                                }}
                                key={index}
                              >
                                <li className="menu-items"
                                  onClick={() => dispatch(getLessonByCourse(course._id))}
                                >
                                  {course.name}
                                </li>
                              </Link>
                            );
                          })}
                        </ul>
                      </div>
                    </form>
                  </div>
                </div>

                <button className="openBtn" onClick={openSearch}>
                  <img src={search} className="img-input" alt="img-input" />
                  Tìm kiếm
                </button>
              </div>

              {/* Check login */}
              {!token ? (
                <Link to="/user">
                  <button className="btn login-btn" type="text">
                    <p>Đăng nhập</p>
                  </button>
                </Link>
              ) : (
                <div className="avatar">
                  <img
                    src={authUser[0].image}
                    className="rounded-circle"
                    style={{ width: "40px" }}
                    alt="Avatar"
                  />
                  <ul className="avatar_list">
                    <li>Viết blog</li>
                    <li>Bài viết của tôi</li>
                    <li>Bài viết đã lưu</li>
                    <li>Cài đặt</li>
                    <li onClick={logOut}>Đăng xuất</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;