import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Trang chủ</li>
        <li>Về tôi</li>
        <li>Dịch vụ</li>
        <li>Dự án</li>
        <li>Liên hệ</li>
      </ul>
      <div className="nav-connect">Liên hệ với tôi</div>
    </div>
  );
};

export default Navbar;
