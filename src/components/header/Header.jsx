import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";
import { useLocation, useNavigate } from "react-router-dom";
// import logo from "../../images/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobilemenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const openSearchHandler = () => {
    setMobilemenu(false);
    setShowSearch(true);
  };

  const openMobileMenuHandler = () => {
    setMobilemenu(true);
    setShowSearch(false);
  };

  const submitSearchHandler = (e) => {
    e.preventDefault();

    if (query.length > 0) {
      navigate(`/search/${query}`);
      setShowSearch(false);
    }
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobilemenu(false);
  };

  const controlNavbarHandler = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbarHandler);

    return () => {
      window.removeEventListener("scroll", controlNavbarHandler);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <h1> ChillFlix</h1>
        </div>

        <nav className="nav_items">
          <ul className="menu_items">
            <li
              className="menu_item"
              onClick={() => navigationHandler("movie")}
            >
              Movies
            </li>
            <li className="menu_item" onClick={() => navigationHandler("tv")}>
              TV Shows
            </li>
            <li className="menu_item">
              <HiOutlineSearch onClick={openSearchHandler} />
            </li>
          </ul>
        </nav>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearchHandler} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobilemenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenuHandler} />
          )}
        </div>
      </ContentWrapper>

      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <form className="searchInput" onSubmit={submitSearchHandler}>
              <input
                type="text"
                placeholder="Search for a movie or tv show..."
                onChange={(e) => setQuery(e.target.value)}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </form>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
