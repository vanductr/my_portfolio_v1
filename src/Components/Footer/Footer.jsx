import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/vanducai.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img className="footer_logo" src={footer_logo} alt="" />
          <p>
            Tôi là Lập trình viên Web chuyên nghiệp với việc sử dụng thành thạo
            tiếng Nhật và am hiểu văn hoá nước Nhật.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Nhập email của bạn" />
          </div>
          <div className="footer-subscribe">Theo dõi</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 VanDuc. Đã đăng ký Bản Quyền.
        </p>
        <div className="footer-bottom-right">
          <p>Điều khoản Dịch vụ</p>
          <p>Chính sách Bảo mật</p>
          <p>Liên hệ với tôi</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
