import React from "react";

function Footer(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"><i className="fa-solid fa-envelope"></i> Logo <i class="fa-solid fa-location-arrow"></i></div>

        <div className="col-3 footer-title">
          <h2>Truy cập nhanh</h2>
          <ul>
            <li>Home</li>
            <li>Mục lục</li>
            <li>Lộ trình</li>
            <li>Kiểm tra</li>
            <li>Về chúng tôi</li>
          </ul>
        </div>

        <div className="col-3 footer-title">
          <h2>Nguồn tài liệu</h2>
          <ul>
            <li>F8</li>
            <li>W3school</li>
            <li>Codecademy</li>
          </ul>
        </div>

        <div className="col-3 footer-title">
          <h2>Liên hệ</h2>
          <ul>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <div>Đại học Kinh tế Quốc dân</div>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <div>info@gmail.com</div>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <div>+84 123456789</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
