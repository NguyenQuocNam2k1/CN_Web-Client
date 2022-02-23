import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import search from "./../../../images/search.png";
import logo from "./../../../images/logoCCD.png";
import { useSelector } from "react-redux";

function Header() {
  const match = useLocation().pathname;
  const courseList = useSelector((state) => state.courses.courseList);

  const [scrolled, setScrolled] = useState(0);
  window.addEventListener("scroll", () => {
    setScrolled(window.scrollY);
  });
  return (
    <>
      {match === "/user" || match === "/user/register" ? (
        <></>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className={scrolled > 10 ? "header_scroll container" : "container"}>
            <Link className="navbar-brand" to="/">
              <img className="img" src={logo} alt="logo"></img>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item nav-block-item">
                  <Link
                    className="nav-link active txt_header"
                    aria-current="page"
                    to="/muc-luc"
                  >
                    Mục lục
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active txt_header"
                    aria-current="page"
                    to="/lo-trinh"
                  >
                    Lộ trình
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active txt_header"
                    aria-current="page"
                    to="#"
                  >
                    Đang học
                  </Link>
                </li>
              </ul>
              {/* icon search */}
              <div className="icon-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="25"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              {/*  */}
              <Link to="/user">
                <button className="login-btn" type="text">
                  <p>Đăng nhập</p>
                </button>
              </Link>
              {/* <div className="avatar">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  style={{"width": "40px"}}
                  alt="Avatar"
                />
                  <ul className="avatar_list">
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                  </ul>
              </div> */}
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
