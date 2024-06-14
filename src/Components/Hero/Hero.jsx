import React from "react";
import "./Hero.css";
import profile_img from "../../assets/avatar.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        {" "}
        <span>Tôi là Văn Đức,</span> nhà phát triển Website.
      </h1>
      <p>
        Tôi là một nhà phát triển website ở vị trí Full Stack đến từ Hà Nội,
        Việt Nam. Tôi sử dụng Tiếng Nhật như ngôn ngữ thứ 2 sau tiếng Mẹ đẻ.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Liên hệ với tôi
          </AnchorLink>
        </div>
        <div className="hero-resume">Lý lịch của tôi</div>
      </div>
    </div>
  );
};

export default Hero;
