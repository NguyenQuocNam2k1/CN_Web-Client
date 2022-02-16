import React from "react";

function Footer(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">Logo</div>
        <div className="col-3">
            <h2>Truy cập nhanh</h2>
            <ul>
            <i class="fa-solid fa-user"></i>
                <li>Home</li>
                <li>Mục lục</li>
                <li>Lộ trình</li>
                <li>Kiểm tra</li>
                <li>Về chúng tôi</li>
            </ul>
        </div>
        <div className="col-3"></div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default Footer;
