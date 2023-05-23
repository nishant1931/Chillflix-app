import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useSelector } from "react-redux";
import PosterFallback from "../../images/no-poster.png";
import Img from "../lazyLoadImage/Img";
import "./style.scss";
import CircleRating from "../circle-rating/CircleRating";
import Genres from "../genres/Genres";
import { useNavigate } from "react-router-dom";

const Carousel = ({ data, loading, endPoint, title }) => {
  const carouselContainerRef = useRef();

  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);

  const skItem = () => {
    return (
      <div className="skeleton_item">
        <div className="poster_block skeleton"></div>
        <div className="text_block">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  const navigation = (dir) => {
    const container = carouselContainerRef.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carousel_title">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carousel_left_nav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carousel_right_nav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carousel_items" ref={carouselContainerRef}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;

              return (
                <div
                  key={item.id}
                  className="carousel_item"
                  onClick={() =>
                    navigate(`/${item.media_type || endPoint}/${item.id}`)
                  }
                >
                  {
                    <div className="poster_block">
                      <Img src={posterUrl} alt={item.title} />
                      <CircleRating rating={item.vote_average.toFixed(1)} />
                      <Genres data={item.genre_ids.slice(0, 2)} />
                    </div>
                  }
                  <div className="text_block">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {dayjs(item.release_date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loading_skeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
