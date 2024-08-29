import React from "react";
import "./globals.css";
import Image from "next/image";
import logo from "../assets/images/logo.webp";
import bg from "../assets/images/bg2.jpg";
import location from "../assets/images/location_535239.png";
import clock from "../assets/images/clock-five_7546766.png";
import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import telegram from "../assets/images/telegram_739260.png";
import facebook from "../assets/images/face.png";
import whatsapp from "../assets/images/whatsapp.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/inst.png";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-about">
        <Image src={logo} className="footer-icon" alt="Logo" />
        <p>
          Lorem Ipsum is simply dummy text of printi liew and typesetting
          industry. Lorem Ipsum is sim ui ply dummy text of printiand
          typesetting.
        </p>
        <Image src={bg} className="footer-img" alt="Background" />
        <div className="icon-area">
          <Image src={location} alt="Location" />
          <p>New Street 012 Broklyn Street, 57 New York, United State</p>
        </div>
      </div>
      <div className="footer-contact">
        <h1>Contact Info</h1>
        <div className="contact-1">
          <Image src={clock} alt="Clock" />
          <div className="contact-text">
            <p>Opening hours</p>
            <p>Mon-Fri : 09.00am-05.00pm</p>
          </div>
        </div>
        <div className="contact-2">
          <Image src={email} alt="Email" />
          <div className="contact-text">
            <p>Email Address:</p>
            <p>username@domain.com</p>
          </div>
        </div>
        <div className="contact-3">
          <Image src={phone} alt="phone" />
          <div className="contact-text">
            <p>Phone No:</p>
            <p>+1 123 888 0000</p>
          </div>
        </div>
      </div>
      <div className="footer-newsletter">
        <Image src={telegram} alt="Telegram" />
        <p>Subscribe to our newsletter to get our latest updates & news</p>
        <label>
          <input type="email" placeholder="enter your email address..." />
        </label>
        <button>Subscribe</button>
        <div className="footer-socials">
          <Image src={facebook} alt="facebook" />
          <Image src={whatsapp} alt="whatsapp" />
          <Image src={instagram} alt="instagram" />
          <Image src={twitter} alt="twitter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
