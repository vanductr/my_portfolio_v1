import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        {" "}
        <span>Tôi là Văn Đức,</span> nhà phát triển Website.
      </h1>
      <p>
        Tôi là một nhà phát triển frontend đến từ California, Hoa Kỳ với 10 năm
        kinh nghiệm làm việc tại nhiều công ty như Microsoft, Tesla và Apple.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Liên hệ với tôi</div>
        <div className="hero-resume">Lý lịch của tôi</div>
      </div>
    </div>
  );
};

export default Hero;
