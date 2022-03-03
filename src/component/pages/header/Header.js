import React ,{ useEffect , useState } from "react";
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

  //Search
  const searchFunction = () => {
    const inputSearch = document.querySelector("#search-input");
    const listCourses = document.querySelector(".listCourses");
    const menuCourses = Array.from(document.querySelectorAll(".menu-items"));

    const value = valueInput.toLowerCase();

    menuCourses.forEach((item) => {
      let text = item.innerText.toLowerCase();
      if (text.includes(value)) {
        listCourses.style.display = "block";
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };

  const hidenListCourses = () => {
    const listCourses = document.querySelector(".listCourses");
    setTimeout(()=>{
      listCourses.style.display = "none";
    },100)
    const inputSearch = document.querySelector("#search-input");
    inputSearch.value = "";
  };


  const match = useLocation().pathname;
  const token = getCookie("CCD") || "";
  let authUser = JSON.parse(localStorage.getItem("authUser"));

  const [scrolled, setScrolled] = useState(0);
  window.addEventListener("scroll", () => {
    setScrolled(window.scrollY);
  });

  return (
    <>
      {match === "/user" ||
      match === "/user/register" ||
      match === "/learning/detail" ? (
        <></>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div
            className={scrolled > 10 ? "header_scroll container" : "container"}
          >
            <Link className="navbar-brand" to="/">
              <img className="img" src={logo} alt="logo"></img>
            </Link>
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
                  <Link className="nav-link active" aria-current="page" to="#">
                    Blog
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
              <form className="d-flex">
                <input
                  id="search-input"
                  className="form-control me-2 search-input"
                  type="search"
                  placeholder="Tìm kiếm khóa hoc ..."
                  aria-label="Search"
                  onKeyUp={searchFunction}
                  onChange={(e) => setValueInput(e.target.value)}
                  onBlur={hidenListCourses}
                />
                <div className="btn btn-search" type="submit">
                  <img src={search} className="img-input" alt="img-input" />
                </div>
                <ul className="listCourses">
                  <p>{`Kết quả cho '${valueInput}'`}</p>
                  {dataListCourse.map((course, index) => {
                    return (
                      <Link 
                       to={!token ? "/user" : `/courseDetail/${course.idCoursesList}`}
                        key={index}
                        onClick={()=> dispatch(getLessonByCourse(course._id))}
                      >
                        <li className="menu-items">
                          {course.name}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </form>
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
                    src={authUser.image}
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