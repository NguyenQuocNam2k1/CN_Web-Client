import React from "react";
import { Link } from "react-router-dom";
import './header.css';
import search from "./../../../images/search.png" 


function Header() {

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-lg">
          <Link className="navbar-brand" to="/">
            <img className="img" src="https://fullstack.edu.vn/assets/icon/f8_icon.png" alt="logo"></img>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-block-item">
                <Link className="nav-link active "  aria-current="page" to="/muc-luc">Mục lục</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/lo-trinh">Lộ trình</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">Kiểm tra</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/learning">Đang học</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2 search-input" type="search" placeholder="Tìm kiếm...." aria-label="Search" />
               <button className="btn" type="submit"> <img src={search} className="img-input" alt="img-input" /> </button> 
            </form>
            <Link  to="/user">
               <button className="btn login-btn" type="text" ><strong>LOG IN</strong></button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
