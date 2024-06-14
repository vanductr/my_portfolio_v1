import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c7ec5e23-0b46-4307-be45-cc8a200a4168");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Liên hệ</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Trò chuyện cùng tôi</h1>
          <p>
            Hiện tại tôi đang sẵn sàng nhận các dự án mới, vì vậy đừng ngần ngại
            gửi tin nhắn cho tôi về bất kỳ điều gì mà bạn muốn tôi thực hiện.
            Bạn có thể liên hệ với tôi bất cứ lúc nào.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>vietnamzuttosuki@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+84 972 362 176</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Hà Nội, Việt Nam</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Tên của Bạn</label>
          <input type="text" placeholder="Nhập Tên của Bạn" name="name" />
          <label htmlFor="">Email của Bạn</label>
          <input type="email" placeholder="Email của bạn" name="email" />
          <label htmlFor="">Viết tin nhắn của Bạn ở đây</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Nhập tin nhắn của bạn"
          ></textarea>
          <button type="submit" className="contact-submit">
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
