import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages.css";

function Header() {
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='col-3'>Logo</h1>
        <div className='col-5 list_header'>
          <ul className='row ul_header'>
            <li className='col-4'>Mục lục</li>
            <li className='col-4'>Lộ trình</li>
            <li className='col-4'>Job post</li>
          </ul>
        </div>
        <div className='col-4'>
          <div className='row'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='currentColor'
              className='bi bi-search'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
