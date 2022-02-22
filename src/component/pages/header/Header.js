import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import search from "./../../../images/search.png";
import logo from "./../../../images/logo.png";

function Header() {
  const match = useLocation().pathname;
  const dataUser = localStorage.getItem("userData");
  return (
    <>
      {match === "/user" || match === "/user/register" ? (
        <></>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-lg">
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
                    Kiểm tra
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
                  placeholder="Tìm kiếm...."
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <img src={search} className="img-input" alt="img-input" />
                </button>
              </form>
              {/* <Link to="/user">
                <button className="btn login-btn" type="text">
                  <strong>LOG IN</strong>
                </button>
              </Link> */}
              <div className="avatar">
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
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
