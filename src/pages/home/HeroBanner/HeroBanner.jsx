import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper.jsx";
import "./style.scss";
import useFetch from "../../../hooks/useFetch.jsx";

const HeroBanner = () => {
  const [query, setQuery] = useState("");
  const [background, setBackground] = useState(null);
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  const { poster } = url;

  useEffect(() => {
    const bg =
      poster + data?.results?.[Math.floor(Math.random() * 20)]?.poster_path;
    setBackground(bg);
  }, [data, poster]);

  const submitSearchHandler = (e) => {
    e.preventDefault();

    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop_img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of Movies and TV shows to entertain you. Watch with us and
            Chill.
          </span>

          <div className="search_form">
            <form className="searchInput" onSubmit={submitSearchHandler}>
              <input
                type="text"
                placeholder="Search for a movie or tv show..."
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="button">Search</button>
            </form>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
