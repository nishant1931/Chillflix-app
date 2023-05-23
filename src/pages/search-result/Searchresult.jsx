import React, { useEffect, useState } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import Spinner from "../../components/spinner/Spinner";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../../components/movie-card/MovieCard";

const Searchresult = () => {
  const [data, setData] = useState(null);
  const [loading, setLoadinng] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const { query } = useParams();

  const fetchInitData = () => {
    setLoadinng(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoadinng(false);
      }
    );
  };

  const fetchNextData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({ ...data, results: [...data?.results, ...res.results] });
        } else {
          setData(res);
        }

        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitData();
  }, [query]);

  return (
    <div className="search_results_page">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="page_title">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of ${query}`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results?.map((item, index) => (
                  <MovieCard data={item} key={index} fromSearch="true" />
                ))}
              </InfiniteScroll>
            </>
          ) : (
            <span className="result_not_found">Sorry, Results not found!</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default Searchresult;
