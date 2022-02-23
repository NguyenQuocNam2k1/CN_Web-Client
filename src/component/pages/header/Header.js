import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import search from "./../../../images/search.png";
import { useState } from "react";
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
              <img
                className="img"
                src="../../../images/google.png"
                alt="logo"
              ></img>
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
                  <Link className="nav-link active" aria-current="page" to="#">
                    Đang học
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2 search-input"
                  type="search"
                  placeholder="Tìm kiếm khóa hoc ..."
                  aria-label="Search"
                />
                <div className="btn btn-search" type="submit">
                  <img
                    src={search}
                    className="img-input"
                    alt="img-input"
                  />
                </div>
              </form>
              <Link to="/user">
                <button className="btn login-btn" type="text">
                  <p>Đăng nhập</p>
                </button>
              </Link>

              <div className="avatar">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  style={{ "width": "40px" }}
                  alt="Avatar"
                />
                <ul className="avatar_list">
                  <li>Viết blog</li>
                  <li>Bài viết của tôi</li>
                  <li>Bài viết đã lưu</li>
                  <li>Cài đặt</li>
                  <li>Đăng xuất</li>
                </ul>
              </div>

            </div>
          </div>
        </nav >
      )
      }
    </>
  );
}

export default Header;
