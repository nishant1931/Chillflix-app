import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { BsGithub } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menu_items">
          <li className="menu_item">
            <a
              href=" https://nishantsharma-portfolio.netlify.app/"
              target="_blank"
            >
              About me
            </a>
          </li>
          <li className="menu_item">
            <a
              href="https://api.whatsapp.com/send?phone=918384023627"
              target="_blank"
            >
              Contact me 😀
            </a>
          </li>
        </ul>
        <div className="info_text">
          Chillflix is a single page movie application where you can check all
          the latest Movies and TV shows. You can also watch the trailers here
          for any movies and TV shows.
        </div>
        <div className="social_icons">
          <span className="icon">
            <BsGithub />
          </span>
          <span className="icon">
            <FaUserCircle />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
