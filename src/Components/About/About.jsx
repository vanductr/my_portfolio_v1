import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/avatarP.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>Về Tôi</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="profile_img" src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Tôi là một nhà phát triển ứng dụng Web FullStack, tôi có thể tạo
              một Website hoàn chỉnh theo yêu cầu. Ngoài ra tôi có khả năng sử
              dụng thành thạo Tiếng Nhật trong công việc phát triển phần mềm.
            </p>
            <p>
              Niềm đam mê của tôi đối với phát triển Web không chỉ được thể hiện
              qua sự nhiệt huyết và cống hiến mà tôi mang lại cho mỗi dự án, Mà
              còn thể hiện qua sự ham học hỏi, tìm kiếm cái mới, và luôn trau
              dồi vốn ngoại ngữ.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>0.7</h1>
          <p>Năm Kinh Nghiệm</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>Dự Án Đã Hoàn Thành</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>0</h1>
          <p>Khách Hàng</p>
        </div>
      </div>
    </div>
  );
};

export default About;
