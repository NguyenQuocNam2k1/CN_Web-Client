import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './header.css';


function Header() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                <Link className="nav-link active "  aria-current="page" to="#">Mục lục</Link>
                <div className="block-list">
                    <div className="block-list-item">
                      <div className="list-item-link">
                      <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>REACTJS</li>
                        <li>ANGULARJS</li>
                      </ul>
                    </div>
                  <div className="list-item-link">
                    <ul>
                      <li>JAVA</li>
                      <li>PYTHON</li>
                      <li>KOTLIN</li>
                      <li>C++</li>
                      <li>C#</li>
                    </ul>
                  </div>
                    </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">Lộ trình</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">Job Post</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Header;
