import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import search from "./../../../images/search.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import logo from '../../../images/cocoders-logo.png'
import { useEffect } from "react";

function Header() {

  const [valueInput, setValueInput] = useState('');

  //Search
  const searchFunction = () => {
    const inputSearch = document.querySelector('#search-input');
    const listCourses = document.querySelector('.listCourses');
    const menuCourses = Array.from(document.querySelectorAll('.menu-items'));

    const value = valueInput.toLowerCase();
    console.log(value);

    menuCourses.forEach( (item) => {
      let text = item.innerText.toLowerCase();
      if(text.indexOf(value) > -1) {
        listCourses.style.display = 'block';
        item.style.display = 'block';
      }
      else {
        item.style.display = 'none';
      }
    })
  }

  const hidenListCourses = () => {
    const listCourses = document.querySelector('.listCourses');
    listCourses.style.display = 'none';
  }


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
                src={logo}
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
                  <Link className="nav-link active" aria-current="page" to="/learning">
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
                  onChange={e => setValueInput(e.target.value)}
                  onBlur={hidenListCourses}
                />
                <div className="btn btn-search" type="submit">
                  <img
                    src={search}
                    className="img-input"
                    alt="img-input"
                  />
                </div>
                <ul className="listCourses">
                  <p>{`Kết quả cho '${valueInput}'`}</p>
                  <li className="menu-items">Khóa học HTML & CSS</li>
                  <li className="menu-items">Khóa học JavaScrip</li>
                  <li className="menu-items">Khóa học NodeJs</li>
                  <li className="menu-items">Khóa học ReactJs</li>
                  <li className="menu-items">Khóa học Vue</li>
                </ul>
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
                  <p style={{'borderBottom': '1px solid rgb(233 222 222)', 'padding': '12px', 'marginBottom': 0}}>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      style={{ "width": "40px" }}
                      alt="Avatar"
                    />
                    <strong className="information-avatar" style={{'marginLeft': '12px'}}>Bùi Thịnh</strong>
                  </p>
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
