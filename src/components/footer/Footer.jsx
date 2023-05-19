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
          <li className="menu_item">About me</li>
          <li className="menu_item">Contact me 😀</li>
        </ul>
        <div className="info_text">
          Chillflix is a single page movie application where you can check all
          the latest Movies and TV shows. You can also watch the trailers here
          for any movies and TV shows. It is a dummy React project and used
          Redux in it.
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
